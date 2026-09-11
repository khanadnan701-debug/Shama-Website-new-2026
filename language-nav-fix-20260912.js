(() => {
  'use strict';

  function placeLanguageSwitcherInNav() {
    const nav = document.querySelector('.nav-shell');
    const switcher = document.querySelector('#shama-language-switch');
    if (!nav || !switcher) return false;

    let actions = nav.querySelector('.shama-nav-actions');
    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'shama-nav-actions';

      const cta = nav.querySelector('.header-cta');
      if (cta) {
        nav.insertBefore(actions, cta);
        actions.appendChild(cta);
      } else {
        nav.appendChild(actions);
      }
    }

    if (switcher.parentElement !== actions) {
      actions.insertBefore(switcher, actions.firstChild);
    }

    switcher.style.setProperty('position', 'static', 'important');
    switcher.style.setProperty('left', 'auto', 'important');
    switcher.style.setProperty('right', 'auto', 'important');
    switcher.style.setProperty('top', 'auto', 'important');
    switcher.style.setProperty('bottom', 'auto', 'important');
    switcher.style.setProperty('transform', 'none', 'important');
    switcher.style.setProperty('margin', '0', 'important');

    return true;
  }

  function injectNavStyles() {
    if (document.querySelector('#shama-language-nav-style')) return;
    const style = document.createElement('style');
    style.id = 'shama-language-nav-style';
    style.textContent = `
      .shama-nav-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;flex:0 0 auto;min-width:0}
      .shama-nav-actions #shama-language-switch{position:static!important;inset:auto!important;transform:none!important;margin:0!important;flex:0 0 auto!important;box-shadow:0 5px 16px rgba(24,34,72,.11)!important}
      @media(max-width:900px){.shama-nav-actions{margin-left:auto;gap:8px}.shama-nav-actions #shama-language-switch{transform:scale(.92)!important;transform-origin:center!important}.shama-nav-actions .header-cta{display:none!important}}
      @media(max-width:520px){.shama-nav-actions #shama-language-switch{transform:scale(.86)!important}}
    `;
    document.head.appendChild(style);
  }

  function init() {
    injectNavStyles();
    if (placeLanguageSwitcherInNav()) return;

    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (placeLanguageSwitcherInNav() || tries >= 40) clearInterval(timer);
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
