(() => {
  'use strict';

  const IMAGES = {
    'tea.html':'/assets/cloudinary-shama/tea/pg-tea-300-bag-951b1ef25c55.webp',
    'sugar.html':'/assets/cloudinary-shama/sugar/shama-desi-shakkar-500g-53dad935a769.webp',
    'wines.html':'/assets/cloudinary-shama/wines/grover-wine-red-alc-13-5-vol-75cl-cee439b127e9.webp'
  };

  function patch() {
    const links = document.querySelectorAll('#site-header .mega-grid > a, .mega-grid > a');
    links.forEach(link => {
      const href = (link.getAttribute('href') || '').split('?')[0].replace(/^\.\//,'');
      const src = IMAGES[href];
      if (!src) return;

      let thumb = link.querySelector(':scope > .mega-product-thumb');
      if (!thumb) {
        thumb = document.createElement('span');
        thumb.className = 'mega-product-thumb';
        const first = link.firstElementChild;
        if (first) link.insertBefore(thumb, first);
        else link.prepend(thumb);
      }

      let img = thumb.querySelector('img');
      if (!img) {
        img = document.createElement('img');
        thumb.appendChild(img);
      }

      img.src = src;
      img.alt = href === 'tea.html' ? 'Tea' : href === 'sugar.html' ? 'Sugar' : 'Wines';
      img.loading = 'eager';
      img.decoding = 'async';
    });
  }

  function mount() {
    patch();
    setTimeout(patch, 80);
    setTimeout(patch, 300);
    setTimeout(patch, 900);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, {once:true});
  } else {
    mount();
  }

  window.addEventListener('load', patch, {once:true});

  if ('MutationObserver' in window) {
    let queued = false;
    const observer = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        patch();
      });
    });
    observer.observe(document.documentElement, {childList:true, subtree:true});
  }
})();