(() => {
  'use strict';

  const BREAKPOINT = 920;
  const DRAWER_ID = 'shama-mobile-drawer-v2';
  const OVERLAY_ID = 'shama-mobile-overlay-v2';
  const STYLE_ID = 'shama-mobile-nav-v2-style';

  const ranges = [
    ['01', 'Rice', 'rice.html'],
    ['02', 'Spices', 'spices.html'],
    ['03', 'Sauces, Pickle & Pastes', 'sauces-pastes.html'],
    ['04', 'Miscellaneous', 'miscellaneous.html'],
    ['05', 'Beverages', 'beverages.html'],
    ['06', 'Flour & Lentiles', 'flour-lentiles.html'],
    ['07', 'Frozen', 'frozen.html'],
    ['08', 'Oils', 'oils.html'],
    ['09', 'Dry Fruits', 'dry-fruits.html'],
    ['10', 'Laziza', 'catalogue.html#laziza'],
    ['11', 'Ahmed', 'catalogue.html#ahmed']
  ];

  const isMobile = () => window.matchMedia(`(max-width:${BREAKPOINT}px)`).matches;

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      @media(max-width:${BREAKPOINT}px){
        .navlinks{display:none!important}
        .navlinks.open,.navlinks.mobile-nav-open{display:none!important}
        .mobile-toggle{display:grid!important;place-items:center!important;position:relative!important;z-index:2147483003!important;cursor:pointer!important;touch-action:manipulation!important}
        body.shama-mobile-menu-open{overflow:hidden!important;touch-action:none!important}
        #${OVERLAY_ID}{position:fixed;inset:0;background:rgba(5,14,32,.52);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);z-index:2147482998;opacity:0;visibility:hidden;transition:opacity .22s ease,visibility .22s ease}
        #${OVERLAY_ID}.open{opacity:1;visibility:visible}
        #${DRAWER_ID}{position:fixed;top:0;right:0;width:min(92vw,410px);height:100dvh;z-index:2147483001;background:#fff;color:#152342;box-shadow:-28px 0 80px rgba(11,23,55,.28);transform:translateX(105%);transition:transform .26s cubic-bezier(.2,.8,.2,1);display:flex;flex-direction:column;overflow:hidden}
        #${DRAWER_ID}.open{transform:translateX(0)}
        #${DRAWER_ID} *{box-sizing:border-box}
        .smn-head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 18px 15px;border-bottom:1px solid rgba(23,35,66,.09);background:#fff}
        .smn-brand{display:flex;align-items:center;gap:11px;min-width:0}
        .smn-brand img{width:56px;height:42px;object-fit:contain;flex:0 0 auto}
        .smn-brand-text{display:flex;flex-direction:column;min-width:0}
        .smn-brand-text b{font:800 15px/1.2 Manrope,"DM Sans",sans-serif;color:#132443}
        .smn-brand-text small{margin-top:3px;font:700 10px/1.2 "DM Sans",sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#7b86a0}
        .smn-close{width:42px;height:42px;border:0;border-radius:50%;background:#f2f4fb;color:#152342;font:500 27px/1 Arial,sans-serif;display:grid;place-items:center;cursor:pointer;flex:0 0 auto}
        .smn-scroll{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:14px 14px 28px;background:#fbfcff}
        .smn-main{display:grid;gap:8px}
        .smn-link,.smn-products-toggle{width:100%;min-height:52px;border:0;border-radius:14px;background:#fff;color:#172342;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 15px;text-decoration:none!important;font:800 14px/1.2 Manrope,"DM Sans",sans-serif;box-shadow:0 1px 0 rgba(23,35,66,.07);cursor:pointer;text-align:left}
        .smn-link span:last-child,.smn-products-toggle span:last-child{font-size:17px;color:#6757f6}
        .smn-products{display:none;margin:2px 0 4px;padding:8px;border-radius:16px;background:#eef2ff}
        .smn-products.open{display:grid;gap:6px}
        .smn-range{display:grid;grid-template-columns:34px minmax(0,1fr) 18px;align-items:center;gap:8px;padding:11px 10px;border-radius:12px;background:#fff;color:#172342;text-decoration:none!important}
        .smn-range b{font:800 11px/1 Manrope,"DM Sans",sans-serif;color:#6757f6}
        .smn-range strong{font:800 13px/1.25 Manrope,"DM Sans",sans-serif;white-space:normal;overflow-wrap:anywhere}
        .smn-range i{font-style:normal;color:#6757f6;font-size:15px;text-align:right}
        .smn-foot{margin-top:12px;padding:14px;border-radius:16px;background:linear-gradient(135deg,#10264f,#5637c8);color:#fff}
        .smn-foot b{display:block;font:800 14px/1.2 Manrope,"DM Sans",sans-serif;margin-bottom:5px}
        .smn-foot p{margin:0 0 12px;color:rgba(255,255,255,.76);font:600 12px/1.45 "DM Sans",sans-serif}
        .smn-foot a{display:flex;align-items:center;justify-content:center;min-height:42px;border-radius:999px;background:#fff;color:#172342;text-decoration:none!important;font:800 12px/1 Manrope,"DM Sans",sans-serif}
      }
      @media(min-width:${BREAKPOINT + 1}px){#${DRAWER_ID},#${OVERLAY_ID}{display:none!important}}
    `;
    document.head.appendChild(style);
  }

  function buildDrawer() {
    if (document.getElementById(DRAWER_ID)) return;

    const overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.setAttribute('aria-hidden', 'true');

    const drawer = document.createElement('aside');
    drawer.id = DRAWER_ID;
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('aria-label', 'Mobile navigation');

    const rangeMarkup = ranges.map(([n, name, href]) => `
      <a class="smn-range" href="${href}"><b>${n}</b><strong>${name}</strong><i>↗</i></a>
    `).join('');

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
      </div>
    `;

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
    return document.querySelector('.mobile-toggle');
  }

  function openMenu() {
    if (!isMobile()) return;
    injectStyles();
    buildDrawer();
    const drawer = document.getElementById(DRAWER_ID);
    const overlay = document.getElementById(OVERLAY_ID);
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
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
    if (overlay) overlay.classList.remove('open');
    document.body.classList.remove('shama-mobile-menu-open');
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

  function prepareToggle() {
    const toggle = findToggle();
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.style.setProperty('pointer-events', 'auto', 'important');
  }

  injectStyles();
  if (document.body) buildDrawer();

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
    prepareToggle();
  }, { passive: true });

  const mount = () => {
    injectStyles();
    buildDrawer();
    prepareToggle();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();

  window.addEventListener('load', mount, { once: true });

  if ('MutationObserver' in window) {
    const observer = new MutationObserver(() => prepareToggle());
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
