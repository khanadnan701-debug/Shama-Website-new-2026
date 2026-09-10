(() => {
  'use strict';

  if (document.body.dataset.page !== 'product') return;

  const VIDEO_BY_CATEGORY = {
    rice: 'https://www.pexels.com/download/video/4912725/',
    spices: 'https://www.pexels.com/download/video/7540760/',
    sauces: 'https://www.pexels.com/download/video/37189266/',
    misc: 'https://www.pexels.com/download/video/34506445/',
    beverages: 'https://www.pexels.com/download/video/8677740/',
    flour: 'https://www.pexels.com/download/video/4968940/',
    frozen: 'https://www.pexels.com/download/video/29824279/',
    oils: 'https://www.pexels.com/download/video/7189208/',
    'dry-fruits': 'https://www.pexels.com/download/video/7431382/'
  };

  const CATEGORY_LABELS = {
    rice: 'Rice grains & biryani',
    spices: 'Aromatic spices',
    sauces: 'Sauces & curry pastes',
    misc: 'Pantry favourites',
    beverages: 'Refreshing beverages',
    flour: 'Flour & lentil staples',
    frozen: 'Frozen food favourites',
    oils: 'Cooking oils',
    'dry-fruits': 'Dry fruits & nuts'
  };

  function ensureStyle() {
    if (document.getElementById('category-product-video-hero-style')) return;
    const style = document.createElement('style');
    style.id = 'category-product-video-hero-style';
    style.textContent = `
      .page-hero.category-product-video-hero{
        position:relative!important;
        isolation:isolate;
        min-height:clamp(430px,48vw,620px);
        padding:0!important;
        display:flex;
        align-items:flex-end;
        overflow:hidden;
        background:#07152f!important;
      }
      .category-product-video-hero>.category-product-hero-poster,
      .category-product-video-hero>.category-product-hero-video{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        object-fit:cover;
        pointer-events:none;
      }
      .category-product-video-hero>.category-product-hero-poster{z-index:-4;transform:scale(1.01)}
      .category-product-video-hero>.category-product-hero-video{
        z-index:-3;
        opacity:0;
        transform:scale(1.01);
        transition:opacity .55s ease;
      }
      .category-product-video-hero.is-video-ready>.category-product-hero-video{opacity:1}
      .category-product-video-hero>.category-product-hero-shade{
        position:absolute;
        inset:0;
        z-index:-2;
        pointer-events:none;
        background:
          linear-gradient(90deg,rgba(4,14,38,.93) 0%,rgba(5,18,48,.75) 42%,rgba(6,18,45,.25) 76%,rgba(6,18,45,.12) 100%),
          linear-gradient(0deg,rgba(3,12,31,.62) 0%,rgba(3,12,31,.12) 58%,rgba(3,12,31,.28) 100%);
      }
      .category-product-video-hero>.wrap{
        position:relative;
        z-index:2;
        width:100%;
        padding-top:150px!important;
        padding-bottom:72px!important;
      }
      .category-product-video-hero .crumbs,
      .category-product-video-hero .crumbs a{color:rgba(255,255,255,.78)!important}
      .category-product-video-hero .eyebrow{color:#fff!important}
      .category-product-video-hero h1{
        max-width:900px;
        color:#fff!important;
        text-shadow:0 16px 44px rgba(0,0,0,.32);
      }
      .category-product-video-hero p{
        max-width:760px;
        color:rgba(255,255,255,.9)!important;
        text-shadow:0 8px 30px rgba(0,0,0,.25);
      }
      .category-product-video-label{
        position:absolute;
        right:clamp(22px,4vw,68px);
        bottom:34px;
        z-index:3;
        display:flex;
        align-items:center;
        gap:9px;
        padding:10px 14px;
        border:1px solid rgba(255,255,255,.28);
        border-radius:999px;
        background:rgba(5,16,42,.36);
        backdrop-filter:blur(12px);
        color:#fff;
        font:800 11px/1.1 Manrope,sans-serif;
        letter-spacing:.08em;
        text-transform:uppercase;
      }
      .category-product-video-label i{
        width:7px;
        height:7px;
        border-radius:50%;
        background:#8ff0d1;
        box-shadow:0 0 0 5px rgba(143,240,209,.12);
      }
      @media(max-width:760px){
        .page-hero.category-product-video-hero{min-height:430px}
        .category-product-video-hero>.wrap{padding-top:122px!important;padding-bottom:74px!important}
        .category-product-video-label{right:16px;bottom:18px;font-size:9px;padding:8px 10px}
      }
      @media(prefers-reduced-motion:reduce){
        .category-product-video-hero>.category-product-hero-video{display:none!important}
      }
    `;
    document.head.appendChild(style);
  }

  function getCategory(slug) {
    try {
      return Array.isArray(categories) ? categories.find(item => item.slug === slug) : null;
    } catch (_) {
      return null;
    }
  }

  function applyVideoHero() {
    const slug = document.body.dataset.category;
    const videoSrc = VIDEO_BY_CATEGORY[slug];
    const hero = document.querySelector('#page-content .page-hero');
    if (!slug || !videoSrc || !hero) return;
    if (hero.dataset.productVideoHero === slug) return;

    ensureStyle();

    const category = getCategory(slug);
    const posterSrc = category && category.image ? category.image : 'assets/shama-logo.png';

    hero.classList.add('category-product-video-hero');
    hero.dataset.productVideoHero = slug;

    const poster = document.createElement('img');
    poster.className = 'category-product-hero-poster';
    poster.src = posterSrc;
    poster.alt = '';
    poster.setAttribute('aria-hidden', 'true');

    const video = document.createElement('video');
    video.className = 'category-product-hero-video';
    video.autoplay = true;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.poster = posterSrc;
    video.disablePictureInPicture = true;
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('aria-hidden', 'true');

    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = 'video/mp4';
    video.appendChild(source);

    const shade = document.createElement('span');
    shade.className = 'category-product-hero-shade';
    shade.setAttribute('aria-hidden', 'true');

    const label = document.createElement('span');
    label.className = 'category-product-video-label';
    label.innerHTML = `<i></i><span>${CATEGORY_LABELS[slug] || 'Category video'}</span>`;

    hero.prepend(shade);
    hero.prepend(video);
    hero.prepend(poster);
    hero.appendChild(label);

    const reveal = () => hero.classList.add('is-video-ready');
    ['loadeddata', 'canplay', 'playing'].forEach(eventName => {
      video.addEventListener(eventName, reveal, { once: true });
    });
    video.addEventListener('error', () => {
      hero.classList.remove('is-video-ready');
      video.style.display = 'none';
    }, { once: true });

    if (video.readyState >= 2) reveal();
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
  }

  applyVideoHero();
  document.addEventListener('DOMContentLoaded', applyVideoHero, { once: true });
  window.addEventListener('load', applyVideoHero, { once: true });
  document.addEventListener('shama:product-images-updated', () => setTimeout(applyVideoHero, 0));

  const main = document.querySelector('#page-content');
  if (main && 'MutationObserver' in window) {
    const observer = new MutationObserver(() => {
      if (!main.querySelector('.page-hero.category-product-video-hero')) applyVideoHero();
    });
    observer.observe(main, { childList: true });
  }
})();
