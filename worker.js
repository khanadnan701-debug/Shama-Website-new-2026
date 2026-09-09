const STATIC_ASSET_RE = /\.(?:html|css|js|mjs|png|jpe?g|webp|svg|gif|ico|avif|woff2?|ttf|otf|mp4|webm|json|map)$/i;

function withHeaders(response) {
  const headers = new Headers(response.headers);
  const type = (headers.get('Content-Type') || '').toLowerCase();
  const isText = type.includes('text/html') || type.includes('text/css') || type.includes('javascript') || type.includes('application/json');

  if (isText) {
    headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    headers.set('CDN-Cache-Control', 'no-store');
    headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
    headers.set('Pragma', 'no-cache');
    headers.set('Expires', '0');
  } else if (type.startsWith('image/') || type.startsWith('video/') || type.includes('font')) {
    headers.set('Cache-Control', 'public, max-age=86400, s-maxage=604800');
  }

  headers.set('X-Shama-Release', '20260909-multipage-stable');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname !== 'shamaonline.com') {
      return Response.redirect(`https://shamaonline.com${url.pathname}${url.search}`, 301);
    }

    if (url.pathname === '/') {
      return withHeaders(await env.ASSETS.fetch(request));
    }

    if (STATIC_ASSET_RE.test(url.pathname)) {
      return withHeaders(await env.ASSETS.fetch(request));
    }

    return Response.redirect('https://shamaonline.com/', 302);
  }
};
