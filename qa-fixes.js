// Small cross-page QA fixes layered on top of the existing site without changing product data.
(() => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.navlinks');
  const productsLabel = document.querySelector('.drop-label');
  const mega = document.querySelector('.mega-menu');

  if (toggle && nav) {
    nav.id = nav.id || 'site-mobile-nav';
    toggle.setAttribute('aria-controls', nav.id);
    toggle.setAttribute('aria-expanded', String(nav.classList.contains('open')));

    const setMenu = (open) => {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (productsLabel) productsLabel.setAttribute('aria-expanded', String(open));
      if (mega) mega.setAttribute('aria-hidden', String(!open && innerWidth <= 900));
      document.body.style.overflow = open && innerWidth <= 900 ? 'hidden' : '';
    };

    // Replace the original one-line toggle so state and accessibility stay in sync.
    toggle.onclick = null;
    toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

    document.addEventListener('click', (event) => {
      if (innerWidth <= 900 && nav.classList.contains('open') && !event.target.closest('.header')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
      if (event.key === 'Escape') {
        const lightbox = document.querySelector('#product-lightbox');
        if (lightbox && !lightbox.classList.contains('open')) lightbox.setAttribute('aria-hidden', 'true');
      }
    });
    addEventListener('resize', () => {
      if (innerWidth > 900) setMenu(false);
    }, {passive:true});
  }

  // Improve image decoding without changing hero/logo loading priority.
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('decoding')) img.decoding = 'async';
  });
})();
