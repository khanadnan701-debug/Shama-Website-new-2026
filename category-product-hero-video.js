(() => {
  'use strict';

  if (document.body.dataset.page !== 'product') return;

  const HERO_MEDIA = {
    rice: {
      src: 'https://www.pexels.com/download/video/1841002/',
      position: 'center 50%'
    },
    spices: {
      src: 'https://www.pexels.com/download/video/4068140/',
      position: 'center 52%'
    },
    sauces: {
      src: 'https://www.pexels.com/download/video/5741337/',
      position: 'center 52%'
    },
    misc: {
      src: 'https://www.pexels.com/download/video/4983686/',
      position: 'center 50%'
    },
    beverages: {
      src: 'https://www.pexels.com/download/video/5935111/',
      position: 'center 48%'
    },
    flour: {
      src: 'https://www.pexels.com/download/video/11265881/',
      position: 'center 48%'
    },
    frozen: {
      src: 'https://www.pexels.com/download/video/3735225/',
      position: 'center 50%'
    },
    oils: {
      src: 'https://www.pexels.com/download/video/37443196/',
      position: 'center 50%'
    },
    'dry-fruits': {
      src: 'https://www.pexels.com/download/video/4211312/',
      position: 'center 50%'
    }
  };

  function ensureStyle() {
    if (document.getElementById('category-product-video-hero-style')) return;

    const style = document.createElement('style');
    style.id = 'category-product-video-hero-style';
    style.textContent = `
      .page-hero.category-product-video-hero{
        position:relative!important;
        isolation:isolate;
        min-height:clamp(500px,45vw,590px);
        padding:0!important;
        display:flex;
        align-items:center;
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

      .category-product-video-hero>.category-product-hero-poster{
        z-index:-4;
        transform:scale(1.01);
      }

      .category-product-video-hero>.category-product-hero-video{
        z-index:-3;
        opacity:0;
        transform:scale(1.01);
        transition:opacity .45s ease;
      }

      .category-product-video-hero.is-video-ready>.category-product-hero-video{
        opacity:1;
      }

      .category-product-video-hero>.category-product-hero-shade{
        position:absolute;
        inset:0;
        z-index:-2;
        pointer-events:none;
        background:
          linear-gradient(90deg,rgba(4,14,38,.88) 0%,rgba(5,18,48,.68) 42%,rgba(6,18,45,.28) 74%,rgba(6,18,45,.14) 100%),
          linear-gradient(0deg,rgba(3,12,31,.44) 0%,rgba(3,12,31,.06) 62%,rgba(3,12,31,.24) 100%);
      }

      .category-product-video-hero>.wrap{
        position:relative;
        z-index:2;
        width:min(1180px,calc(100% - 64px))!important;
        max-width:1180px!important;
        margin:0 auto!important;
        padding:96px 0 78px!important;
      }

      .category-product-video-hero .crumbs{
        margin:0 0 24px!important;
        color:rgba(255,255,255,.78)!important;
      }

      .category-product-video-hero .crumbs a{
        color:rgba(255,255,255,.78)!important;
      }

      .category-product-video-hero .eyebrow{
        margin-bottom:18px!important;
        color:#fff!important;
      }

      .category-product-video-hero h1{
        max-width:820px;
        margin:0!important;
        font-size:clamp(48px,6vw,80px)!important;
        line-height:.98!important;
        color:#fff!important;
        text-shadow:0 14px 38px rgba(0,0,0,.28);
      }

      .category-product-video-hero p{
        max-width:720px;
        margin:22px 0 0!important;
        font-size:clamp(16px,1.5vw,19px)!important;
        line-height:1.65!important;
        color:rgba(255,255,255,.9)!important;
        text-shadow:0 8px 28px rgba(0,0,0,.22);
      }

      @media(max-width:900px){
        .page-hero.category-product-video-hero{
          min-height:500px;
        }

        .category-product-video-hero>.wrap{
          width:calc(100% - 48px)!important;
          padding:82px 0 70px!important;
        }
      }

      @media(max-width:600px){
        .page-hero.category-product-video-hero{
          min-height:430px;
        }

        .category-product-video-hero>.wrap{
          width:calc(100% - 32px)!important;
          padding:70px 0 58px!important;
        }

        .category-product-video-hero h1{
          font-size:clamp(42px,14vw,62px)!important;
        }

        .category-product-video-hero p{
          margin-top:18px!important;
        }
      }

      @media(prefers-reduced-motion:reduce){
        .category-product-video-hero>.category-product-hero-video{
          display:none!important;
        }
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
    const media = HERO_MEDIA[slug];
    const hero = document.querySelector('#page-content .page-hero');

    if (!slug || !media || !hero) return;
    if (hero.dataset.productVideoHero === slug && hero.querySelector('.category-product-hero-video')) return;

    ensureStyle();

    hero.querySelectorAll('.category-product-hero-poster,.category-product-hero-video,.category-product-hero-shade').forEach(node => node.remove());

    const category = getCategory(slug);
    const posterSrc = category && category.image ? category.image : 'assets/shama-logo.png';

    hero.classList.add('category-product-video-hero');
    hero.dataset.productVideoHero = slug;

    const poster = document.createElement('img');
    poster.className = 'category-product-hero-poster';
    poster.src = posterSrc;
    poster.alt = '';
    poster.setAttribute('aria-hidden', 'true');
    poster.style.objectPosition = media.position;

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
    video.style.objectPosition = media.position;
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('aria-hidden', 'true');

    const source = document.createElement('source');
    source.src = media.src;
    source.type = 'video/mp4';
    video.appendChild(source);

    const shade = document.createElement('span');
    shade.className = 'category-product-hero-shade';
    shade.setAttribute('aria-hidden', 'true');

    hero.prepend(shade);
    hero.prepend(video);
    hero.prepend(poster);

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
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  }

  applyVideoHero();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyVideoHero, { once: true });
  }

  window.addEventListener('load', applyVideoHero, { once: true });
  document.addEventListener('shama:product-images-updated', () => setTimeout(applyVideoHero, 0));

  const main = document.querySelector('#page-content');
  if (main && 'MutationObserver' in window) {
    const observer = new MutationObserver(() => {
      if (!main.querySelector('.page-hero.category-product-video-hero')) {
        applyVideoHero();
      }
    });
    observer.observe(main, { childList:true });
  }
})();
