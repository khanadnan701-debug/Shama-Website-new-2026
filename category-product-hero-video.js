(() => {
  'use strict';

  if (document.body.dataset.page !== 'product') return;

  function installMobileNavigation() {
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.navlinks');
    const shell = document.querySelector('.nav-shell');
    if (!toggle || !nav || !shell) return;

    if (!document.getElementById('mobile-product-nav-runtime-style')) {
      const style = document.createElement('style');
      style.id = 'mobile-product-nav-runtime-style';
      style.textContent = `
        @media(max-width:920px){
          body.mobile-product-nav-open{overflow:hidden!important}
          body[data-page="product"] .nav-shell{position:relative!important;overflow:visible!important}
          body[data-page="product"] .nav-shell .mobile-toggle{display:grid!important;position:relative!important;z-index:2147483002!important;cursor:pointer!important}
          body[data-page="product"] .nav-shell .navlinks{
            position:fixed!important;
            top:92px!important;
            left:8px!important;
            right:8px!important;
            bottom:8px!important;
            width:auto!important;
            height:auto!important;
            max-width:none!important;
            max-height:none!important;
            margin:0!important;
            padding:14px!important;
            flex-direction:column!important;
            align-items:stretch!important;
            justify-content:flex-start!important;
            gap:8px!important;
            overflow-y:auto!important;
            overflow-x:hidden!important;
            overscroll-behavior:contain!important;
            -webkit-overflow-scrolling:touch!important;
            border:1px solid rgba(38,58,124,.11)!important;
            border-radius:20px!important;
            background:#fff!important;
            box-shadow:0 28px 80px rgba(14,25,58,.28)!important;
            z-index:2147483000!important;
          }
          body[data-page="product"] .nav-shell .navlinks.open,
          body[data-page="product"] .nav-shell .navlinks.mobile-nav-open{display:flex!important}
          body[data-page="product"] .nav-shell .navlinks>a,
          body[data-page="product"] .nav-shell .drop-label{
            width:100%!important;
            min-height:46px!important;
            padding:12px 13px!important;
            margin:0!important;
            display:flex!important;
            align-items:center!important;
            justify-content:space-between!important;
            border-radius:12px!important;
            background:#f7f8fc!important;
            color:#172342!important;
            font:800 14px/1.2 Manrope,"DM Sans",sans-serif!important;
            white-space:normal!important;
          }
          body[data-page="product"] .nav-shell .drop{display:block!important;width:100%!important;height:auto!important}
          body[data-page="product"] .nav-shell .drop:after{display:none!important}
          body[data-page="product"] .nav-shell .drop .mega-menu,
          body[data-page="product"] .nav-shell .drop:hover .mega-menu,
          body[data-page="product"] .nav-shell .drop:focus-within .mega-menu{
            display:block!important;
            position:static!important;
            inset:auto!important;
            width:100%!important;
            max-width:100%!important;
            margin:7px 0 0!important;
            padding:11px!important;
            transform:none!important;
            translate:none!important;
            opacity:1!important;
            visibility:visible!important;
            pointer-events:auto!important;
            border:0!important;
            border-radius:14px!important;
            background:#f3f5ff!important;
            box-shadow:none!important;
          }
          body[data-page="product"] .nav-shell .mega-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px!important}
          body[data-page="product"] .nav-shell .mega-grid a{min-width:0!important;padding:10px!important;border-radius:11px!important;background:#fff!important}
          body[data-page="product"] .nav-shell .mega-grid strong{white-space:normal!important;overflow-wrap:anywhere!important;line-height:1.2!important}
          body[data-page="product"] .nav-shell .mega-grid small{display:none!important}
          body[data-page="product"] .nav-shell .mega-head,
          body[data-page="product"] .nav-shell .mega-foot{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;flex-wrap:wrap!important}
        }
        @media(max-width:520px){
          body[data-page="product"] .nav-shell .navlinks{top:88px!important}
          body[data-page="product"] .nav-shell .mega-grid{grid-template-columns:1fr!important}
        }
      `;
      document.head.appendChild(style);
    }

    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-product-navigation');
    nav.id = nav.id || 'mobile-product-navigation';

    const isMobile = () => window.matchMedia('(max-width: 920px)').matches;

    function setOpen(open) {
      if (!isMobile()) open = false;
      nav.classList.toggle('open', open);
      nav.classList.toggle('mobile-nav-open', open);
      document.body.classList.toggle('mobile-product-nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (isMobile()) {
        nav.style.setProperty('display', open ? 'flex' : 'none', 'important');
      } else {
        nav.style.removeProperty('display');
      }
    }

    setOpen(false);

    toggle.onclick = event => {
      event.preventDefault();
      event.stopPropagation();
      setOpen(!nav.classList.contains('mobile-nav-open'));
    };

    nav.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (link && isMobile()) setOpen(false);
    });

    document.addEventListener('click', event => {
      if (!isMobile() || !nav.classList.contains('mobile-nav-open')) return;
      if (shell.contains(event.target)) return;
      setOpen(false);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', () => {
      if (!isMobile()) setOpen(false);
      else if (!nav.classList.contains('mobile-nav-open')) nav.style.setProperty('display', 'none', 'important');
    }, { passive: true });
  }

  const HERO_MEDIA = {
    rice: { src: '/video/rice', position: 'center 50%' },
    spices: { src: '/video/spices', position: 'center 52%' },
    sauces: { src: '/video/sauces-pastes', position: 'center 52%' },
    misc: { src: '/video/miscellaneous', position: 'center 50%' },
    beverages: { src: '/video/beverages', position: 'center 48%' },
    flour: { src: '/video/flour-lentils', position: 'center 48%' },
    frozen: { src: '/video/frozen', position: 'center 50%' },
    oils: { src: '/video/oils', position: 'center 50%' },
    'dry-fruits': { src: '/video/dry-fruits', position: 'center 50%' }
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
        background:
          radial-gradient(circle at 78% 30%,rgba(80,112,190,.24),transparent 30%),
          linear-gradient(135deg,#07152f 0%,#102553 58%,#172d67 100%)!important;
      }

      .category-product-video-hero>.category-product-hero-video{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        object-fit:cover;
        pointer-events:none;
        z-index:-3;
        opacity:0;
        transform:scale(1.015);
        transition:opacity .42s ease;
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
        .page-hero.category-product-video-hero{min-height:500px}
        .category-product-video-hero>.wrap{
          width:calc(100% - 48px)!important;
          padding:82px 0 70px!important;
        }
      }

      @media(max-width:600px){
        .page-hero.category-product-video-hero{min-height:430px}
        .category-product-video-hero>.wrap{
          width:calc(100% - 32px)!important;
          padding:70px 0 58px!important;
        }
        .category-product-video-hero h1{
          font-size:clamp(42px,14vw,62px)!important;
        }
        .category-product-video-hero p{margin-top:18px!important}
      }

      @media(prefers-reduced-motion:reduce){
        .category-product-video-hero>.category-product-hero-video{display:none!important}
      }
    `;

    document.head.appendChild(style);
  }

  function applyVideoHero() {
    const slug = document.body.dataset.category;
    const media = HERO_MEDIA[slug];
    const hero = document.querySelector('#page-content .page-hero');

    if (!slug || !media || !hero) return;
    if (hero.dataset.productVideoHero === slug && hero.querySelector('.category-product-hero-video')) return;

    ensureStyle();

    hero.querySelectorAll('.category-product-hero-video,.category-product-hero-shade').forEach(node => node.remove());
    hero.classList.remove('is-video-ready');
    hero.classList.add('category-product-video-hero');
    hero.dataset.productVideoHero = slug;

    const video = document.createElement('video');
    video.className = 'category-product-hero-video';
    video.autoplay = true;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
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

    const reveal = () => hero.classList.add('is-video-ready');
    ['loadeddata', 'canplay', 'playing'].forEach(eventName => {
      video.addEventListener(eventName, reveal, { once: true });
    });

    video.addEventListener('error', () => {
      hero.classList.remove('is-video-ready');
      video.remove();
    }, { once: true });

    if (video.readyState >= 2) reveal();
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
  }

  installMobileNavigation();
  applyVideoHero();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      installMobileNavigation();
      applyVideoHero();
    }, { once: true });
  }

  window.addEventListener('load', () => {
    installMobileNavigation();
    applyVideoHero();
  }, { once: true });
  document.addEventListener('shama:product-images-updated', () => setTimeout(applyVideoHero, 0));
  document.addEventListener('shama:product-simple-rendered', () => setTimeout(applyVideoHero, 0));

  const main = document.querySelector('#page-content');
  if (main && 'MutationObserver' in window) {
    const observer = new MutationObserver(() => {
      if (!main.querySelector('.page-hero.category-product-video-hero')) applyVideoHero();
    });
    observer.observe(main, { childList:true });
  }
})();
