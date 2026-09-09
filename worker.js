const VIDEO_SOURCES = {
  '/video/rice': [
    'https://www.pexels.com/download/video/34242290/',
    'https://www.pexels.com/download/video/36886083/'
  ],
  '/video/spices': [
    'https://www.pexels.com/download/video/5491467/',
    'https://www.pexels.com/download/video/12920458/'
  ],
  '/video/sauces-pastes': [
    'https://www.pexels.com/download/video/4068140/',
    'https://www.pexels.com/download/video/12920458/'
  ],
  '/video/miscellaneous': [
    'https://www.pexels.com/download/video/35821317/'
  ],
  '/video/beverages': [
    'https://www.pexels.com/download/video/6956372/',
    'https://www.pexels.com/download/video/855302/'
  ],
  '/video/flour-lentils': [
    'https://www.pexels.com/download/video/10977367/',
    'https://www.pexels.com/download/video/9346248/'
  ]
};

const UPSTREAM_HEADERS = {
  'Accept': 'video/avif,video/webm,video/apng,video/*,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.pexels.com/',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36'
};

const STATIC_ASSET_RE = /\.(?:css|js|mjs|png|jpe?g|webp|svg|gif|ico|avif|woff2?|ttf|otf|mp4|webm|json|map)$/i;

async function fetchVideo(request, sources) {
  const range = request.headers.get('Range');
  let lastStatus = 502;

  for (const source of sources) {
    const headers = new Headers(UPSTREAM_HEADERS);
    if (range) headers.set('Range', range);

    try {
      const upstream = await fetch(source, {
        method: 'GET',
        headers,
        redirect: 'follow'
      });
      lastStatus = upstream.status;
      if (!upstream.ok && upstream.status !== 206) continue;

      const responseHeaders = new Headers(upstream.headers);
      responseHeaders.set('Access-Control-Allow-Origin', '*');
      responseHeaders.set('Cache-Control', 'public, max-age=86400, s-maxage=604800');
      responseHeaders.set('Cross-Origin-Resource-Policy', 'cross-origin');
      responseHeaders.delete('Content-Disposition');
      if (!responseHeaders.get('Content-Type')) {
        responseHeaders.set('Content-Type', 'video/mp4');
      }

      return new Response(upstream.body, {
        status: upstream.status,
        statusText: upstream.statusText,
        headers: responseHeaders
      });
    } catch (error) {
      lastStatus = 502;
    }
  }

  return new Response('Video unavailable', {
    status: lastStatus >= 400 ? lastStatus : 502,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}

function withFreshHeaders(response) {
  const headers = new Headers(response.headers);
  const type = (headers.get('Content-Type') || '').toLowerCase();
  const pathLikeText = type.includes('text/html') ||
    type.includes('text/css') ||
    type.includes('javascript') ||
    type.includes('application/json');

  if (pathLikeText) {
    headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    headers.set('CDN-Cache-Control', 'no-store');
    headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
    headers.set('Pragma', 'no-cache');
    headers.set('Expires', '0');
  }

  headers.set('X-Shama-Release', '20260909-single-landing');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Keep one public canonical URL only: https://shamaonline.com/
    if (url.hostname !== 'shamaonline.com') {
      return Response.redirect('https://shamaonline.com/', 301);
    }

    const sources = VIDEO_SOURCES[url.pathname];

    if (sources) {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
            'Access-Control-Allow-Headers': 'Range'
          }
        });
      }
      if (request.method === 'GET' || request.method === 'HEAD') {
        return fetchVideo(request, sources);
      }
      return new Response('Method not allowed', { status: 405 });
    }

    // Allow only files needed by the landing page itself.
    if (url.pathname !== '/' && STATIC_ASSET_RE.test(url.pathname)) {
      const assetResponse = await env.ASSETS.fetch(request);
      return withFreshHeaders(assetResponse);
    }

    // Any old page, category URL, .html URL, or query URL goes to the landing page.
    if (url.pathname !== '/' || url.search) {
      return Response.redirect('https://shamaonline.com/', 301);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    return withFreshHeaders(assetResponse);
  }
};
