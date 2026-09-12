(() => {
  'use strict';

  const BREAKPOINT = 920;
  const STYLE_ID = 'shama-header-controls-fix-style';
  let lastMode = '';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #shama-language-switch{
        position:static!important;
        inset:auto!important;
        left:auto!important;
        right:auto!important;
        top:auto!important;
        bottom:auto!important;
        transform:none!important;
        margin:0!important;
        z-index:auto!important;
        flex:0 0 auto!important;
        box-shadow:none!important;
      }

      .nav-shell .navlinks>#shama-language-switch{
        align-self:center!important;
        margin-left:8px!important;
        padding:3px!important;
        border:1px solid rgba(67,76,125,.10)!important;
        background:#f3f4fb!important;
        box-shadow:none!important;
      }
      .nav-shell .navlinks>#shama-language-switch button{
        min-width:34px!important;
        padding:7px 9px!important;
      }

      .shama-mobile-actions{
        display:none;
        align-items:center;
        justify-content:flex-end;
        gap:7px;
        flex:0 0 auto;
        min-width:0;
      }
      .shama-mobile-actions #shama-language-switch{
        order:1!important;
        padding:3px!important;
        border:1px solid rgba(67,76,125,.10)!important;
        background:#f3f4fb!important;
        box-shadow:none!important;
      }
      .shama-mobile-actions #shama-language-switch button{
        min-width:32px!important;
        padding:7px 8px!important;
        font-size:10px!important;
      }
      .shama-mobile-actions .mobile-toggle{
        order:2!important;
        margin:0!important;
        flex:0 0 auto!important;
      }

      #shama-chatbot{
        left:18px!important;
        right:auto!important;
      }
      #shama-chatbot .shama-chat-panel{
        left:0!important;
        right:auto!important;
      }

      @media(max-width:${BREAKPOINT}px){
        #site-header .nav-shell{
          display:flex!important;
          flex-direction:row!important;
          direction:ltr!important;
          align-items:center!important;
          justify-content:flex-start!important;
          width:100%!important;
        }

        #site-header .nav-shell>.navlinks,
        #site-header .nav-shell>.navlinks.open,
        #site-header .nav-shell>.navlinks.mobile-nav-open,
        #site-header .nav-shell>.header-cta,
        #site-header .mega-menu{
          display:none!important;
          visibility:hidden!important;
          pointer-events:none!important;
        }

        #site-header .nav-shell>.brand,
        #site-header .nav-shell>a.brand,
        #site-header .nav-shell>.brand-studio,
        #site-header .nav-shell>[data-shama-mobile-brand='1']{
          order:1!important;
          direction:ltr!important;
          margin-left:0!important;
          margin-right:auto!important;
          flex:0 0 auto!important;
        }

        #site-header .nav-shell>.shama-mobile-actions{
          order:50!important;
          display:flex!important;
          flex-direction:row!important;
          direction:ltr!important;
          align-items:center!important;
          justify-content:flex-end!important;
          margin-left:auto!important;
          margin-right:0!important;
          gap:7px!important;
          flex:0 0 auto!important;
        }

        #site-header .shama-mobile-actions .mobile-toggle{
          display:flex!important;
          align-items:center!important;
          justify-content:center!important;
          visibility:visible!important;
          opacity:1!important;
          pointer-events:auto!important;
        }

        #shama-chatbot{left:10px!important;right:auto!important;bottom:14px!important}
        #shama-chatbot .shama-chat-panel{
          position:fixed!important;
          left:8px!important;
          right:8px!important;
          width:auto!important;
        }
      }

      @media(min-width:${BREAKPOINT + 1}px){
        .shama-mobile-actions{display:none!important}
      }
    `;
    document.head.appendChild(style);
  }

  function normalizeSwitcher(switcher) {
    if (!switcher) return;
    const important = (name, value) => switcher.style.setProperty(name, value, 'important');
    important('position', 'static');
    important('left', 'auto');
    important('right', 'auto');
    important('top', 'auto');
    important('bottom', 'auto');
    important('inset', 'auto');
    important('transform', 'none');
    important('margin', '0');
    important('z-index', 'auto');
    important('box-shadow', 'none');
  }

  function findBrand(nav) {
    if (!nav) return null;
    const direct = nav.querySelector(':scope > .brand, :scope > a.brand, :scope > .brand-studio');
    if (direct) return direct;
    return [...nav.children].find(el => {
      if (!el?.querySelector) return false;
      const img = el.matches?.('img') ? el : el.querySelector('img');
      const src = (img?.getAttribute('src') || '').toLowerCase();
      const alt = (img?.getAttribute('alt') || '').toLowerCase();
      return src.includes('shama-logo') || alt.includes('shama');
    }) || null;
  }

  function getOrCreateMobileActions(nav) {
    let actions = nav.querySelector(':scope > .shama-mobile-actions');
    if (actions) return actions;
    actions = document.createElement('div');
    actions.className = 'shama-mobile-actions';
    nav.appendChild(actions);
    return actions;
  }

  function lockMobileOrder(nav, brand, actions, switcher, toggle) {
    nav.style.setProperty('display', 'flex', 'important');
    nav.style.setProperty('flex-direction', 'row', 'important');
    nav.style.setProperty('direction', 'ltr', 'important');
    nav.style.setProperty('align-items', 'center', 'important');
    nav.style.setProperty('justify-content', 'flex-start', 'important');

    // Physically lock the mobile DOM order so legacy row-reverse/order rules cannot flip it.
    if (brand) {
      brand.dataset.shamaMobileBrand = '1';
      if (nav.firstElementChild !== brand) nav.insertBefore(brand, nav.firstElementChild);
      brand.style.setProperty('order', '1', 'important');
      brand.style.setProperty('margin-left', '0', 'important');
      brand.style.setProperty('margin-right', 'auto', 'important');
      brand.style.setProperty('flex', '0 0 auto', 'important');
    }

    // Controls are always language first, hamburger second, on the far right.
    actions.appendChild(switcher);
    if (toggle) actions.appendChild(toggle);
    if (nav.lastElementChild !== actions) nav.appendChild(actions);
    actions.style.setProperty('order', '50', 'important');
    actions.style.setProperty('display', 'flex', 'important');
    actions.style.setProperty('flex-direction', 'row', 'important');
    actions.style.setProperty('direction', 'ltr', 'important');
    actions.style.setProperty('align-items', 'center', 'important');
    actions.style.setProperty('margin-left', 'auto', 'important');
    actions.style.setProperty('margin-right', '0', 'important');
  }

  function clearMobileInlineOrder(nav, brand, actions) {
    ['display','flex-direction','direction','align-items','justify-content'].forEach(prop => nav.style.removeProperty(prop));
    if (brand) {
      delete brand.dataset.shamaMobileBrand;
      ['order','margin-left','margin-right','flex'].forEach(prop => brand.style.removeProperty(prop));
    }
    if (actions) {
      ['order','display','flex-direction','direction','align-items','margin-left','margin-right'].forEach(prop => actions.style.removeProperty(prop));
    }
  }

  function placeControls(force = false) {
    const nav = document.querySelector('#site-header .nav-shell, .nav-shell');
    const switcher = document.querySelector('#shama-language-switch');
    if (!nav || !switcher) return false;

    injectStyles();
    normalizeSwitcher(switcher);

    const mobile = window.matchMedia(`(max-width:${BREAKPOINT}px)`).matches;
    const mode = mobile ? 'mobile' : 'desktop';
    const brand = findBrand(nav);
    const actions = getOrCreateMobileActions(nav);
    const toggle = nav.querySelector('.mobile-toggle') || document.querySelector('#site-header .mobile-toggle');

    if (!force && lastMode === mode) {
      if (mobile) {
        lockMobileOrder(nav, brand, actions, switcher, toggle);
        return true;
      }
      if (switcher.parentElement?.classList.contains('navlinks')) return true;
    }

    if (mobile) {
      lockMobileOrder(nav, brand, actions, switcher, toggle);
    } else {
      clearMobileInlineOrder(nav, brand, actions);
      const navlinks = nav.querySelector(':scope > .navlinks');
      if (navlinks) {
        const contact = [...navlinks.children].find(el => el.matches?.('a[href*="contact"]'));
        if (contact) contact.insertAdjacentElement('afterend', switcher);
        else navlinks.appendChild(switcher);
      }

      if (toggle && actions.contains(toggle)) {
        const navlinks = nav.querySelector(':scope > .navlinks');
        if (navlinks) nav.insertBefore(toggle, navlinks);
        else nav.appendChild(toggle);
      }
    }

    lastMode = mode;
    return true;
  }

  function mount() {
    injectStyles();
    let attempts = 0;
    const tryPlace = () => {
      attempts += 1;
      if (placeControls(true) || attempts >= 100) return;
      setTimeout(tryPlace, 50);
    };
    tryPlace();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();

  window.addEventListener('load', () => placeControls(true), { once: true });
  window.addEventListener('resize', () => placeControls(true), { passive: true });

  if ('MutationObserver' in window) {
    let queued = false;
    const observer = new MutationObserver(() => {
      if (queued || !document.querySelector('#shama-language-switch')) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        placeControls();
      });
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
