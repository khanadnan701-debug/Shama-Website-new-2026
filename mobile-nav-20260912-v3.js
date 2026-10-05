(() => {
  'use strict';

  const BREAKPOINT = 920;
  const DRAWER_ID = 'shama-mobile-drawer-v3';
  const OVERLAY_ID = 'shama-mobile-overlay-v3';
  const STYLE_ID = 'shama-mobile-nav-v3-style';

  const ranges = [
    ['01', 'Rice', 'rice.html'],
    ['02', 'Spices', 'spices.html'],
    ['03', 'Sauces, Pickle & Pastes', 'sauces-pastes.html'],
    ['04', 'Miscellaneous', 'miscellaneous.html'],
    ['05', 'Beverages', 'beverages.html'],
    ['06', 'Tea', 'tea.html'],
    ['07', 'Sugar', 'sugar.html'],
    ['08', 'Wines', 'wines.html'],
    ['09', 'Flour & Lentiles', 'flour-lentiles.html'],
    ['10', 'Frozen', 'frozen.html'],
    ['11', 'Oils', 'oils.html'],
    ['12', 'Dry Fruits', 'dry-fruits.html'],
    ['13', 'Laziza', 'laziza.html'],
    ['14', 'Ahmed', 'ahmed.html'],
    ['15', 'Agarbatti', 'agarbatti.html'],
    ['16', 'Dates', 'dates.html'],
    ['17', 'Pataks', 'pataks.html'],
    ['18', 'Cosmetics', 'cosmetics.html']
  ];

  const isMobile = () => window.matchMedia(`(max-width:${BREAKPOINT}px)`).matches;

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      @media(max-width:${BREAKPOINT}px){
        html,body{max-width:100%!important;overflow-x:hidden!important}
        #site-header{position:relative!important;z-index:2147482000!important;margin:0!important;padding:0!important}
        #site-header .header{margin:0!important}
        #site-header .nav-shell{margin-bottom:0!important}

        /* Kill the old mobile dropdown completely. It was rendering as the blank white pill. */
        #site-header .nav-shell>.navlinks,
        #site-header .nav-shell>.navlinks.open,
        #site-header .nav-shell>.navlinks.mobile-nav-open{
          display:none!important;
          position:fixed!important;
          width:0!important;
          height:0!important;
          min-width:0!important;
          min-height:0!important;
          max-width:0!important;
          max-height:0!important;
          margin:0!important;
          padding:0!important;
          border:0!important;
          border-radius:0!important;
          box-shadow:none!important;
          background:transparent!important;
          overflow:hidden!important;
          visibility:hidden!important;
          opacity:0!important;
          pointer-events:none!important;
        }
        #site-header .mega-menu{display:none!important}

        .mobile-toggle{
          display:flex!important;
          align-items:center!important;
          justify-content:center!important;
          gap:7px!important;
          position:relative!important;
          z-index:2147483003!important;
          width:78px!important;
          height:44px!important;
          min-width:78px!important;
          flex:0 0 78px!important;
          margin-left:auto!important;
          padding:0 10px!important;
          overflow:hidden!important;
          border:1px solid rgba(223,190,104,.62)!important;
          border-radius:14px!important;
          background:linear-gradient(135deg,#0e1c3f 0%,#1b2858 52%,#5a43c8 100%)!important;
          color:#fff!important;
          box-shadow:0 10px 24px rgba(31,36,92,.22),inset 0 1px 0 rgba(255,255,255,.16)!important;
          cursor:pointer!important;
          pointer-events:auto!important;
          touch-action:manipulation!important;
          -webkit-tap-highlight-color:transparent!important;
          transition:transform .2s ease,box-shadow .2s ease,background .2s ease!important;
        }
        .mobile-toggle:before{display:none!important;content:none!important}
        .mobile-toggle i{display:none!important}
        .mobile-toggle .smn-toggle-label{
          display:block!important;
          color:#fff!important;
          font:900 9px/1 Manrope,"DM Sans",sans-serif!important;
          letter-spacing:.14em!important;
          text-transform:uppercase!important;
        }
        .mobile-toggle .smn-toggle-icon{
          display:block!important;
          width:18px!important;
          height:18px!important;
          flex:0 0 18px!important;
          color:#f7e7ba!important;
        }
        .mobile-toggle .smn-toggle-icon path{
          stroke:currentColor!important;
          stroke-width:1.9!important;
          stroke-linecap:round!important;
          fill:none!important;
        }
        .mobile-toggle .smn-toggle-icon-close{display:none!important}
        .mobile-toggle[aria-expanded="true"]{
          background:linear-gradient(135deg,#18265a 0%,#503ac4 62%,#7658ef 100%)!important;
          box-shadow:0 12px 30px rgba(68,49,172,.30),inset 0 1px 0 rgba(255,255,255,.18)!important;
        }
        .mobile-toggle[aria-expanded="true"] .smn-toggle-icon-menu{display:none!important}
        .mobile-toggle[aria-expanded="true"] .smn-toggle-icon-close{display:block!important}
        .mobile-toggle:active{transform:scale(.97)!important}
        .mobile-toggle:focus{outline:none!important}
        .mobile-toggle:focus-visible{outline:2px solid #d8bc73!important;outline-offset:3px!important}
        #shama-language-switch{right:92px!important}
        body.shama-mobile-menu-open{overflow:hidden!important;touch-action:none!important}

        #${OVERLAY_ID}{
          position:fixed;inset:0;z-index:2147482998;
          background:rgba(5,14,32,.56);
          backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);
          opacity:0;visibility:hidden;pointer-events:none;
          transition:opacity .22s ease,visibility .22s ease;
        }
        #${OVERLAY_ID}.open{opacity:1;visibility:visible;pointer-events:auto}

        #${DRAWER_ID}{
          position:fixed;top:0;right:0;bottom:0;
          width:min(92vw,410px);height:100dvh;
          z-index:2147483001;
          background:linear-gradient(180deg,#fffdf7 0%,#f6f7fb 44%,#f0f2f8 100%);color:#152342;
          box-shadow:-28px 0 80px rgba(11,23,55,.28);
          transform:translate3d(105%,0,0);
          transition:transform .26s cubic-bezier(.2,.8,.2,1);
          display:flex;flex-direction:column;overflow:hidden;
          visibility:hidden;pointer-events:none;
        }
        #${DRAWER_ID}.open{transform:translate3d(0,0,0);visibility:visible;pointer-events:auto}
        #${DRAWER_ID} *{box-sizing:border-box}
        .smn-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:18px 16px 16px;border-bottom:1px solid rgba(220,183,92,.28);background:linear-gradient(135deg,#0d1c3f 0%,#1c2d62 58%,#533ec2 100%);flex:0 0 auto;box-shadow:0 12px 32px rgba(17,29,70,.16)}
        .smn-brand{display:flex;align-items:center;gap:10px;min-width:0;text-decoration:none!important}
        .smn-brand img{width:58px;height:42px;object-fit:contain;flex:0 0 auto;padding:4px;border-radius:11px;background:rgba(255,255,255,.96);box-shadow:0 6px 18px rgba(0,0,0,.12)}
        .smn-brand-text{display:flex;flex-direction:column;min-width:0}
        .smn-brand-text b{font:900 14px/1.2 Manrope,"DM Sans",sans-serif;color:#fff}
        .smn-brand-text small{margin-top:4px;font:800 9px/1.2 "DM Sans",sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#e4c87e}
        .smn-close{width:42px;height:42px;border:1px solid rgba(255,255,255,.18);border-radius:13px;background:rgba(255,255,255,.10);color:#fff;font:500 25px/1 Arial,sans-serif;display:grid;place-items:center;cursor:pointer;flex:0 0 auto;backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14)}
        .smn-scroll{flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px 14px 30px;background:linear-gradient(180deg,#fffdf8 0%,#f7f8fc 100%)}
        .smn-main{display:grid;gap:8px}
        .smn-link,.smn-products-toggle{width:100%;min-height:54px;border:1px solid rgba(28,42,86,.08);border-radius:16px;background:rgba(255,255,255,.92);color:#172342;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;text-decoration:none!important;font:900 14px/1.2 Manrope,"DM Sans",sans-serif;box-shadow:0 8px 22px rgba(27,39,83,.06),inset 0 1px 0 rgba(255,255,255,.8);cursor:pointer;text-align:left}
        .smn-link span:last-child,.smn-products-toggle span:last-child{font-size:17px;color:#6757f6}
        .smn-products{display:none;margin:4px 0 6px;padding:8px;border:1px solid rgba(90,67,200,.10);border-radius:17px;background:linear-gradient(180deg,#f1f0ff 0%,#f7f6ff 100%)}
        .smn-products.open{display:grid;gap:6px}
        .smn-range{display:grid;grid-template-columns:34px minmax(0,1fr) 18px;align-items:center;gap:8px;padding:11px 10px;border:1px solid rgba(25,39,82,.06);border-radius:13px;background:#fff;color:#172342;text-decoration:none!important;box-shadow:0 4px 12px rgba(20,31,70,.04)}
        .smn-range b{font:800 11px/1 Manrope,"DM Sans",sans-serif;color:#6757f6}
        .smn-range strong{font:800 13px/1.25 Manrope,"DM Sans",sans-serif;white-space:normal;overflow-wrap:anywhere}
        .smn-range i{font-style:normal;color:#6757f6;font-size:15px;text-align:right}
        .smn-foot{margin-top:14px;padding:16px;border:1px solid rgba(223,190,104,.28);border-radius:18px;background:linear-gradient(135deg,#0c1b3d 0%,#1b2b61 52%,#563dc3 100%);color:#fff;box-shadow:0 14px 34px rgba(29,38,92,.15)}
        .smn-foot b{display:block;font:800 14px/1.2 Manrope,"DM Sans",sans-serif;margin-bottom:5px}
        .smn-foot p{margin:0 0 12px;color:rgba(255,255,255,.76);font:600 12px/1.45 "DM Sans",sans-serif}
        .smn-foot a{display:flex;align-items:center;justify-content:center;min-height:42px;border-radius:999px;background:#fff;color:#172342;text-decoration:none!important;font:800 12px/1 Manrope,"DM Sans",sans-serif}
      }
      @media(max-width:520px){
        #${DRAWER_ID}{width:min(94vw,390px)}
        .smn-head{padding-top:max(14px,env(safe-area-inset-top))}
      }
      @media(min-width:${BREAKPOINT + 1}px){#${DRAWER_ID},#${OVERLAY_ID}{display:none!important}}
    `;
    document.head.appendChild(style);
  }

  function buildDrawer() {
    if (!document.body || document.getElementById(DRAWER_ID)) return;

    const overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.setAttribute('aria-hidden', 'true');

    const drawer = document.createElement('aside');
    drawer.id = DRAWER_ID;
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('aria-label', 'Mobile navigation');

    const rangeMarkup = ranges.map(([number, name, href]) =>
      `<a class="smn-range" href="${href}"><b>${number}</b><strong>${name}</strong><i>↗</i></a>`
    ).join('');

    drawer.innerHTML = `
      <div class="smn-head">
        <a class="smn-brand" href="index.html" aria-label="Shama International home">
          <img src="assets/shama-logo.png" alt="Shama International">
          <span class="smn-brand-text"><b>Shama International</b><small>Menu</small></span>
        </a>
        <button class="smn-close" type="button" aria-label="Close menu">×</button>
      </div>
      <div class="smn-scroll">
        <nav class="smn-main" aria-label="Mobile menu">
          <a class="smn-link" href="index.html"><span>Home</span><span>→</span></a>
          <a class="smn-link" href="about.html"><span>About us</span><span>→</span></a>
          <a class="smn-link" href="catalogue.html"><span>Catalogue</span><span>→</span></a>
          <button class="smn-products-toggle" type="button" aria-expanded="true"><span>Products</span><span>−</span></button>
          <div class="smn-products open">${rangeMarkup}</div>
          <a class="smn-link" href="contact.html"><span>Contact</span><span>→</span></a>
        </nav>
        <div class="smn-foot">
          <b>Wholesale enquiries</b>
          <p>Need help choosing a product or placing a bulk order?</p>
          <a href="contact.html">Talk to our team →</a>
        </div>
      </div>`;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    overlay.addEventListener('click', closeMenu);
    drawer.querySelector('.smn-close').addEventListener('click', closeMenu);
    drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    const productsButton = drawer.querySelector('.smn-products-toggle');
    const products = drawer.querySelector('.smn-products');
    productsButton.addEventListener('click', () => {
      const open = !products.classList.contains('open');
      products.classList.toggle('open', open);
      productsButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      productsButton.lastElementChild.textContent = open ? '−' : '+';
    });
  }

  function findToggle() {
    return document.querySelector('#site-header .mobile-toggle, .mobile-toggle');
  }

  function openMenu() {
    if (!isMobile()) return;
    injectStyles();
    buildDrawer();
    const drawer = document.getElementById(DRAWER_ID);
    const overlay = document.getElementById(OVERLAY_ID);
    if (!drawer || !overlay) return;
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('shama-mobile-menu-open');
    const toggle = findToggle();
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
    }
  }

  function closeMenu() {
    const drawer = document.getElementById(DRAWER_ID);
    const overlay = document.getElementById(OVERLAY_ID);
    if (drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
    }
    if (overlay) {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
    if (document.body) document.body.classList.remove('shama-mobile-menu-open');
    const toggle = findToggle();
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  }

  function toggleMenu() {
    const drawer = document.getElementById(DRAWER_ID);
    if (drawer && drawer.classList.contains('open')) closeMenu();
    else openMenu();
  }

  function bindToggle() {
    const toggle = findToggle();
    if (!toggle) return;

    if (toggle.dataset.smnPremiumIcon !== '1') {
      toggle.innerHTML = '<span class="smn-toggle-label">Menu</span><svg class="smn-toggle-icon smn-toggle-icon-menu" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5h14M5 12h14M5 16.5h14"/></svg><svg class="smn-toggle-icon smn-toggle-icon-close" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>';
      toggle.dataset.smnPremiumIcon = '1';
    }

    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', DRAWER_ID);
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.style.setProperty('pointer-events', 'auto', 'important');

    /* Override the legacy onclick from script.js so it can never reopen the old blank nav container. */
    toggle.onclick = event => {
      if (!isMobile()) return;
      event.preventDefault();
      event.stopPropagation();
      toggleMenu();
      return false;
    };
    toggle.dataset.shamaMobileNavV3 = 'bound';
  }

  function mount() {
    injectStyles();
    buildDrawer();
    bindToggle();
  }

  /* Capture-phase fallback: works even if another script later replaces onclick. */
  document.addEventListener('click', event => {
    const toggle = event.target.closest && event.target.closest('.mobile-toggle');
    if (!toggle || !isMobile()) return;
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
    toggleMenu();
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) closeMenu();
    bindToggle();
  }, { passive: true });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
  window.addEventListener('load', mount, { once: true });

  if ('MutationObserver' in window) {
    const observer = new MutationObserver(() => {
      injectStyles();
      buildDrawer();
      bindToggle();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
