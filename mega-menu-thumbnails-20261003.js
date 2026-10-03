(() => {
  'use strict';

  const IMAGES = {
    'tea.html':'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030636/PG_Tea_300_Bag.png',
    'sugar.html':'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031373/Shama_Desi_Shakkar_500g.png'
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
      img.alt = href === 'tea.html' ? 'Tea' : 'Sugar';
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