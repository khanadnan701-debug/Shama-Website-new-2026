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
      /* Language selector must behave like part of the navigation, never a floating widget. */
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
        margin-left:2px!important;
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
        margin-left:auto;
        flex:0 0 auto;
        min-width:0;
      }
      .shama-mobile-actions #shama-language-switch{
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
        margin:0!important;
        flex:0 0 auto!important;
      }

      /* Chatbot: keep it clear of the bulk-order tray on the left side. */
      #shama-chatbot{
        left:18px!important;
        right:auto!important;
      }
      #shama-chatbot .shama-chat-panel{
        left:0!important;
        right:auto!important;
      }

      @media(max-width:${BREAKPOINT}px){
        .shama-mobile-actions{display:flex!important}
        #site-header .nav-shell>.shama-mobile-actions{margin-left:auto!important}
        #site-header .nav-shell>.header-cta{display:none!important}
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

  function getOrCreateMobileActions(nav) {
    let actions = nav.querySelector(':scope > .shama-mobile-actions');
    if (actions) return actions;
    actions = document.createElement('div');
    actions.className = 'shama-mobile-actions';
    const navlinks = nav.querySelector(':scope > .navlinks');
    if (navlinks) nav.insertBefore(actions, navlinks);
    else nav.appendChild(actions);
    return actions;
  }

  function placeControls(force = false) {
    const nav = document.querySelector('#site-header .nav-shell, .nav-shell');
    const switcher = document.querySelector('#shama-language-switch');
    const toggle = nav?.querySelector('.mobile-toggle');
    if (!nav || !switcher) return false;

    injectStyles();
    normalizeSwitcher(switcher);

    const mobile = window.matchMedia(`(max-width:${BREAKPOINT}px)`).matches;
    const mode = mobile ? 'mobile' : 'desktop';
    if (!force && lastMode === mode) {
      if (mobile && switcher.closest('.shama-mobile-actions')) return true;
      if (!mobile && switcher.parentElement?.classList.contains('navlinks')) return true;
    }

    if (mobile) {
      const actions = getOrCreateMobileActions(nav);
      if (switcher.parentElement !== actions) actions.appendChild(switcher);
      if (toggle && toggle.parentElement !== actions) actions.appendChild(toggle);
    } else {
      const navlinks = nav.querySelector(':scope > .navlinks');
      if (navlinks) {
        const contact = [...navlinks.children].find(el => el.matches?.('a[href*="contact"]'));
        if (switcher.parentElement !== navlinks) {
          if (contact) navlinks.insertBefore(switcher, contact);
          else navlinks.appendChild(switcher);
        } else if (contact && switcher.nextElementSibling !== contact) {
          navlinks.insertBefore(switcher, contact);
        }
      }
      const actions = nav.querySelector(':scope > .shama-mobile-actions');
      if (toggle && actions?.contains(toggle)) {
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
      if (placeControls(true) || attempts >= 80) return;
      setTimeout(tryPlace, 50);
    };
    tryPlace();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();

  window.addEventListener('load', () => placeControls(true), { once: true });
  window.addEventListener('resize', () => placeControls(true), { passive: true });

  if ('MutationObserver' in window) {
    const observer = new MutationObserver(() => {
      if (document.querySelector('#shama-language-switch')) placeControls();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
