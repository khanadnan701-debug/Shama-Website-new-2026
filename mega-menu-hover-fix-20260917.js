(() => {
  'use strict';

  const BREAKPOINT = 920;
  const OPEN_CLASS = 'shama-mega-open';
  const STYLE_ID = 'shama-mega-hover-fix-style';
  const mounted = new WeakSet();
  const timers = new WeakMap();

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      @media(min-width:${BREAKPOINT + 1}px){
        #site-header .nav-shell .drop.${OPEN_CLASS} .mega-menu,
        #site-header .nav-shell .drop .mega-menu:hover{
          opacity:1!important;
          visibility:visible!important;
          pointer-events:auto!important;
          transform:translateX(-50%) translateY(0)!important;
        }
        #site-header .nav-shell .drop::after{
          content:""!important;
          position:absolute!important;
          left:-80px!important;
          right:-80px!important;
          top:100%!important;
          height:34px!important;
          background:transparent!important;
          pointer-events:auto!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function clearClose(drop) {
    const timer = timers.get(drop);
    if (timer) {
      clearTimeout(timer);
      timers.delete(drop);
    }
  }

  function open(drop) {
    if (window.innerWidth <= BREAKPOINT) return;
    clearClose(drop);
    drop.classList.add(OPEN_CLASS);
  }

  function scheduleClose(drop, delay = 320) {
    if (window.innerWidth <= BREAKPOINT) return;
    clearClose(drop);
    const timer = setTimeout(() => {
      drop.classList.remove(OPEN_CLASS);
      timers.delete(drop);
    }, delay);
    timers.set(drop, timer);
  }

  function mountDrop(drop) {
    if (!drop || mounted.has(drop)) return;
    const label = drop.querySelector('.drop-label');
    const menu = drop.querySelector('.mega-menu');
    if (!label || !menu) return;

    mounted.add(drop);

    drop.addEventListener('mouseenter', () => open(drop));
    drop.addEventListener('mouseleave', () => scheduleClose(drop));
    label.addEventListener('mouseenter', () => open(drop));
    menu.addEventListener('mouseenter', () => open(drop));
    menu.addEventListener('mouseleave', () => scheduleClose(drop));

    drop.addEventListener('focusin', () => open(drop));
    drop.addEventListener('focusout', event => {
      if (!drop.contains(event.relatedTarget)) scheduleClose(drop, 120);
    });
  }

  function mount() {
    injectStyle();
    document.querySelectorAll('#site-header .drop, .nav-shell .drop').forEach(mountDrop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

  window.addEventListener('load', mount, { once: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth <= BREAKPOINT) {
      document.querySelectorAll(`.${OPEN_CLASS}`).forEach(el => el.classList.remove(OPEN_CLASS));
    }
  }, { passive: true });

  if ('MutationObserver' in window) {
    const observer = new MutationObserver(mount);
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
