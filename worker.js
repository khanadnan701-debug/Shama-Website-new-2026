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
const GLOBAL_MOBILE_NAV = `<script id="shama-global-mobile-nav" src="/mobile-nav-20260912-v3.js?v=20260922-2" defer></script>`;
const GLOBAL_HEADER_CONTROLS = `<script id="shama-global-header-controls" src="/header-controls-fix-20260912.js?v=20260922-2" defer></script>`;
const GLOBAL_MEGA_MENU_HOVER = `<script id="shama-global-mega-menu-hover" src="/mega-menu-hover-fix-20260917.js?v=20260917-1" defer></script>`;

const HOME_STATIC_CATEGORY_FIX = \`<style id="shama-home-static-categories">
body[data-page="home"] .category-reels video{display:none!important}
body[data-page="home"] .category-reels .reel-card>img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:contain!important;object-position:center!important;padding:24px!important;background:linear-gradient(180deg,#f8f9fc,#eef2f7)!important;z-index:-3!important}
body[data-page="home"] .category-reels .reel-card:after{display:none!important;animation:none!important}
</style>
<script id="shama-home-static-categories-script">
(()=>{const run=()=>{if(document.body?.dataset.page!=="home")return;
const section=document.querySelector(".category-reels");if(!section)return;
const items=[
["Rice","rice.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255518/Shama_Super_Kernal_Par_Boiled_Sella_Rice_5kg.png"],
["Spices","spices.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051986/star_anise.png"],
["Sauces & Pastes","sauces-pastes.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png"],
["Miscellaneous","miscellaneous.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678914/Shama_paneer_dodi_phool_100g.png"],
["Beverages","beverages.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231973/Shama_Basil_Seed_Drink_Watermelon.png"],
["Flour & Lentils","flour-lentiles.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232539/shama_wheat_floor_T55_1kg.png"],
["Frozen","frozen.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625180/Shama_Chicken_tikka_Samosa_20Pcs.png"],
["Oils","oils.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678755/Shama_sunflower_oil_5ltr.png"],
["Dry Fruits","dry-fruits.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raw_almonds_100gm.png"],
["Laziza","laziza.html","https://res.cloudinary.com/wy4nkkqq/image/upload/Laziza_biryani_masala_100g.png"],
["Ahmed","ahmed.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789652169/Ahmed_tamarind_sauce_300g.png"],
["Agarbatti","agarbatti.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790934647/Metro_Black_Sandal_Agarbatti.png"],
["Dates","dates.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069276/Shama_Ajwa-Dates-800g.png"],
["Pataks","pataks.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_biryani_paste_2.3kg.png"],
["Cosmetics","cosmetics.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Rose_Water_250ml.png"],
["Non Foods","non-foods.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261684/Shahi_Charcoal_Tandoor_11C_Size_1.png"],
["Divers","divers.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600769/Telephone_ISABGUL_200g.png"],
["Preserves","preserves.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464152/Shama_Kesar_Mango_Plup_Kesar.png"],
["Sea Food","sea-food.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600837/Gambas_8-12.png"],
["Savoury Snacks","savoury-snacks.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601081/Shama_Roasted_Corn_Salted_400G.png"],
["Bakery","bakery.html","https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869503/Cake_Rusk_Coconut_750g.png"]
];
section.classList.add("category-images-only");
const head=section.querySelector(".reels-head");if(head){head.innerHTML='<div><span class="eyebrow">Catalogue categories</span><h2>Explore every<br>Shama range.</h2></div><p>Product images only. Click any category to open its full collection.</p>'}
const track=section.querySelector(".reels-track");if(!track)return;
track.innerHTML=items.map((x,i)=>'<a class="reel-card reel-static" href="'+x[1]+'" aria-label="Open '+x[0]+' catalogue"><img src="'+x[2]+'" alt="'+x[0]+'" loading="'+(i<6?'eager':'lazy')+'" decoding="async"><span class="reel-number">'+String(i+1).padStart(2,'0')+'</span><span class="reel-copy"><small>Shama range</small><strong>'+x[0]+'</strong><em>Open catalogue ↗</em></span></a>').join("");
section.querySelectorAll("video").forEach(v=>{try{v.pause()}catch(e){}v.remove()});
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
setTimeout(run,150);setTimeout(run,800);})();
</script>\`;
const GLOBAL_MOBILE_SITE_CSS = `<link id="shama-mobile-site-css" rel="stylesheet" href="/mobile-site-adapt-20260922.css?v=20260922-2">`;
const GLOBAL_PRODUCT_DETAILS_CSS = `<link id="shama-product-details-css" rel="stylesheet" href="/product-details-20260922.css?v=20260922-1">`;
const GLOBAL_PRODUCT_DETAILS_JS = `<script id="shama-product-details-js" src="/product-details-20260922.js?v=20260922-1" defer></script>`;

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
  headers.set('X-Shama-Release', '20260922-product-detail-clickfix-2');

  let body = response.body;

  if (isHtml && response.body) {
    let html = await response.text();
    if (!html.includes('id="shama-prepaint"')) {
      html = html.replace(/<head([^>]*)>/i, match => `${match}${PREPAINT_HEAD}`);
    }
    if (!html.includes('id="shama-mobile-nav-critical"')) {
      html = html.replace(/<head([^>]*)>/i, match => `${match}${MOBILE_NAV_CRITICAL_HEAD}`);
    }
    if (!html.includes('id="shama-mobile-site-css"')) {
      if (/<\/head>/i.test(html)) html = html.replace(/<\/head>/i, `${GLOBAL_MOBILE_SITE_CSS}</head>`);
      else html = `${GLOBAL_MOBILE_SITE_CSS}${html}`;
    }
    if (/<meta[^>]+name=["']viewport["'][^>]*>/i.test(html)) {
      html = html.replace(/<meta[^>]+name=["']viewport["'][^>]*>/i, '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">');
    }

    // Force the latest product detail/lightbox build on every catalogue page.
    html = html.replace(/product-simple\.js(?:\?v=[^"'<>\s]+)?/gi, 'product-simple.js?v=20260922-details2');
    const scripts = [];
    if (!html.includes('id="shama-global-mobile-nav"')) scripts.push(GLOBAL_MOBILE_NAV);
    if (!html.includes('id="shama-global-header-controls"')) scripts.push(GLOBAL_HEADER_CONTROLS);
    if (!html.includes('id="shama-global-mega-menu-hover"')) scripts.push(GLOBAL_MEGA_MENU_HOVER);
    if (!html.includes('id="shama-product-details-js"')) scripts.push(GLOBAL_PRODUCT_DETAILS_JS);
    if ((new URL(response.url || 'https://shamaonline.com/')).pathname === '/' || (new URL(response.url || 'https://shamaonline.com/')).pathname === '/index.html') {
      if (!html.includes('id="shama-home-static-categories-script"')) scripts.push(HOME_STATIC_CATEGORY_FIX);
    }
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
