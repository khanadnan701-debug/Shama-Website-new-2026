const VIDEO_SOURCES = {
  '/video/rice': [
    'https://www.pexels.com/download/video/1841002/',
    'https://www.pexels.com/download/video/34242290/'
  ],
  '/video/spices': [
    'https://www.pexels.com/download/video/4068140/',
    'https://www.pexels.com/download/video/5491467/'
  ],
  '/video/sauces-pastes': [
    'https://www.pexels.com/download/video/5741337/',
    'https://www.pexels.com/download/video/12920458/'
  ],
  '/video/miscellaneous': [
    'https://www.pexels.com/download/video/4983686/',
    'https://www.pexels.com/download/video/35821317/'
  ],
  '/video/beverages': [
    'https://www.pexels.com/download/video/5935111/',
    'https://www.pexels.com/download/video/6956372/'
  ],
  '/video/flour-lentils': [
    'https://www.pexels.com/download/video/11265881/',
    'https://www.pexels.com/download/video/10977367/'
  ],
  '/video/frozen': [
    'https://www.pexels.com/download/video/3735225/',
    'https://www.pexels.com/download/video/29824279/'
  ],
  '/video/oils': [
    'https://www.pexels.com/download/video/37443196/',
    'https://www.pexels.com/download/video/7189208/'
  ],
  '/video/dry-fruits': [
    'https://www.pexels.com/download/video/4211312/',
    'https://www.pexels.com/download/video/7431382/'
  ]
};

const UPSTREAM_HEADERS = {
  'Accept': 'video/avif,video/webm,video/apng,video/*,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.pexels.com/',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36'
};

const PREPAINT_HEAD = `<style id="shama-prepaint">html{background:#fffdf8}html:not(.shama-ready) body{opacity:0!important;visibility:hidden!important}html.shama-ready body{opacity:1!important;visibility:visible!important;transition:opacity .14s ease}@media(prefers-reduced-motion:reduce){html.shama-ready body{transition:none}}</style><script id="shama-prepaint-script">(()=>{let done=false;const reveal=()=>{if(done)return;done=true;requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.add('shama-ready')))};window.addEventListener('load',()=>setTimeout(reveal,45),{once:true});setTimeout(reveal,2200)})();</script>`;
const MOBILE_NAV_CRITICAL_HEAD = `<style id="shama-mobile-nav-critical">@media(max-width:920px){#site-header .nav-shell>.navlinks,#site-header .nav-shell>.navlinks.open,#site-header .nav-shell>.navlinks.mobile-nav-open{display:none!important;width:0!important;height:0!important;min-width:0!important;min-height:0!important;max-width:0!important;max-height:0!important;margin:0!important;padding:0!important;border:0!important;box-shadow:none!important;background:transparent!important;overflow:hidden!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}#site-header .mega-menu{display:none!important}#site-header,#site-header .header,#site-header .nav-shell{margin-bottom:0!important}.mobile-toggle{pointer-events:auto!important;touch-action:manipulation!important}}</style>`;
const GLOBAL_MOBILE_NAV = `<script id="shama-global-mobile-nav" src="/mobile-nav-20260912-v3.js?v=20260912-3" defer></script>`;
const GLOBAL_HEADER_CONTROLS = `<script id="shama-global-header-controls" src="/header-controls-fix-20260912.js?v=20260912-1" defer></script>`;

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

async function withFreshHeaders(response) {
  const headers = new Headers(response.headers);
  const type = (headers.get('Content-Type') || '').toLowerCase();
  const isHtml = type.includes('text/html');
  const isStaticText =
    type.includes('text/css') ||
    type.includes('javascript') ||
    type.includes('application/json');

  if (isHtml) {
    headers.set('Cache-Control', 'no-cache, must-revalidate, max-age=0');
    headers.set('CDN-Cache-Control', 'no-cache');
    headers.set('Cloudflare-CDN-Cache-Control', 'no-cache');
    headers.set('Pragma', 'no-cache');
    headers.set('Expires', '0');
  } else if (isStaticText) {
    headers.set('Cache-Control', 'no-cache, must-revalidate, max-age=0');
    headers.set('CDN-Cache-Control', 'public, max-age=120');
    headers.set('Cloudflare-CDN-Cache-Control', 'public, max-age=120');
  }

  headers.delete('Clear-Site-Data');
  headers.set('X-Shama-Release', '20260912-header-controls-1');

  let body = response.body;

  if (isHtml && response.body) {
    let html = await response.text();
    if (!html.includes('id="shama-prepaint"')) {
      html = html.replace(/<head([^>]*)>/i, match => `${match}${PREPAINT_HEAD}`);
    }
    if (!html.includes('id="shama-mobile-nav-critical"')) {
      html = html.replace(/<head([^>]*)>/i, match => `${match}${MOBILE_NAV_CRITICAL_HEAD}`);
    }
    const scripts = [];
    if (!html.includes('id="shama-global-mobile-nav"')) scripts.push(GLOBAL_MOBILE_NAV);
    if (!html.includes('id="shama-global-header-controls"')) scripts.push(GLOBAL_HEADER_CONTROLS);
    if (scripts.length) {
      const bundle = scripts.join('');
      if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, `${bundle}</body>`);
      else html += bundle;
    }
    body = html;
    headers.delete('Content-Length');
  }

  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/teas' || url.pathname === '/teas/') {
      const target = new URL('https://shamaonline.com/');
      return Response.redirect(target.toString(), 301);
    }

    if (url.hostname === 'www.shamaonline.com') {
      const target = new URL(request.url);
      target.hostname = 'shamaonline.com';
      target.protocol = 'https:';
      return Response.redirect(target.toString(), 308);
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

    const assetResponse = await env.ASSETS.fetch(request);
    return withFreshHeaders(assetResponse);
  }
};
