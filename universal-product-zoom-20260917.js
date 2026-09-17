(() => {
  'use strict';
  if (document.body.dataset.page !== 'product') return;

  const FALLBACK = 'assets/shama-logo.png';
  let items = [];
  let index = 0;
  let lastFocus = null;

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'})[ch]);
  }

  function cleanPack(value) {
    return String(value || 'Contact us for available pack sizes').replace(/\\n/g, ' · ').replace(/\n/g, ' · ');
  }

  function ensureViewer() {
    let viewer = document.querySelector('#universal-product-lightbox');
    if (viewer) return viewer;

    const style = document.createElement('style');
    style.id = 'universal-product-lightbox-style';
    style.textContent = `
      body.universal-product-lightbox-open{overflow:hidden!important}
      #universal-product-lightbox{position:fixed!important;z-index:2147483640!important;inset:0!important;display:grid!important;place-items:center!important;padding:20px!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;transition:opacity .18s ease,visibility .18s ease!important}
      #universal-product-lightbox.open{visibility:visible!important;opacity:1!important;pointer-events:auto!important}
      #universal-product-lightbox .upl-backdrop{position:absolute!important;inset:0!important;border:0!important;width:100%!important;height:100%!important;background:rgba(7,15,31,.90)!important;backdrop-filter:blur(8px)!important;cursor:zoom-out!important}
      #universal-product-lightbox .upl-panel{position:relative!important;z-index:2!important;width:min(1040px,94vw)!important;max-height:94vh!important;display:grid!important;grid-template-rows:minmax(0,1fr) auto!important;overflow:hidden!important;border-radius:26px!important;background:#fff!important;box-shadow:0 38px 120px rgba(0,0,0,.45)!important}
      #universal-product-lightbox .upl-media{position:relative!important;min-height:0!important;display:grid!important;place-items:center!important;padding:28px 76px!important;background:#f3f5fa!important;overflow:hidden!important}
      #universal-product-lightbox .upl-image{display:block!important;max-width:100%!important;max-height:72vh!important;width:auto!important;height:auto!important;object-fit:contain!important;filter:drop-shadow(0 18px 26px rgba(18,30,58,.14))!important}
      #universal-product-lightbox .upl-close{position:absolute!important;z-index:5!important;top:16px!important;right:16px!important;width:44px!important;height:44px!important;border:0!important;border-radius:50%!important;background:#17233d!important;color:#fff!important;cursor:pointer!important;font:400 30px/1 Arial,sans-serif!important}
      #universal-product-lightbox .upl-nav{position:absolute!important;z-index:4!important;top:50%!important;transform:translateY(-50%)!important;width:48px!important;height:58px!important;border:0!important;border-radius:16px!important;background:rgba(23,35,61,.94)!important;color:#fff!important;cursor:pointer!important;font:400 34px/1 Arial,sans-serif!important}
      #universal-product-lightbox .upl-prev{left:14px!important}
      #universal-product-lightbox .upl-next{right:14px!important}
      #universal-product-lightbox .upl-copy{padding:17px 24px 20px!important;border-top:1px solid rgba(31,44,75,.08)!important;background:#fff!important}
      #universal-product-lightbox .upl-copy span{display:block!important;margin-bottom:4px!important;color:#ff5b88!important;font:800 9px/1.2 Manrope,Arial,sans-serif!important;text-transform:uppercase!important;letter-spacing:.12em!important}
      #universal-product-lightbox .upl-copy h3{margin:0!important;color:#152039!important;font:800 clamp(21px,3vw,31px)/1.15 Manrope,Arial,sans-serif!important}
      #universal-product-lightbox .upl-copy p{margin:7px 0 0!important;color:#152c6b!important;font-weight:800!important}
      .simple-product-media,.simple-product-media img,.simple-product-zoom{cursor:zoom-in!important}
      @media(max-width:640px){#universal-product-lightbox{padding:10px!important}#universal-product-lightbox .upl-panel{width:100%!important;max-height:96vh!important;border-radius:18px!important}#universal-product-lightbox .upl-media{padding:56px 16px 72px!important}#universal-product-lightbox .upl-image{max-height:68vh!important}#universal-product-lightbox .upl-nav{top:auto!important;bottom:12px!important;transform:none!important;width:44px!important;height:44px!important;border-radius:50%!important}}
    `;
    document.head.appendChild(style);

    document.body.insertAdjacentHTML('beforeend', `
      <div id="universal-product-lightbox" aria-hidden="true">
        <button class="upl-backdrop" type="button" aria-label="Close image viewer"></button>
        <div class="upl-panel" role="dialog" aria-modal="true" aria-labelledby="upl-title">
          <button class="upl-close" type="button" aria-label="Close image viewer">×</button>
          <div class="upl-media">
            <button class="upl-nav upl-prev" type="button" aria-label="Previous product">‹</button>
            <img class="upl-image" src="" alt="">
            <button class="upl-nav upl-next" type="button" aria-label="Next product">›</button>
          </div>
          <div class="upl-copy"><span>Shama product</span><h3 id="upl-title"></h3><p id="upl-pack"></p></div>
        </div>
      </div>`);

    viewer = document.querySelector('#universal-product-lightbox');
    viewer.querySelector('.upl-backdrop').addEventListener('click', close);
    viewer.querySelector('.upl-close').addEventListener('click', close);
    viewer.querySelector('.upl-prev').addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); step(-1); });
    viewer.querySelector('.upl-next').addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); step(1); });
    return viewer;
  }

  function visibleItems() {
    return Array.from(document.querySelectorAll('.simple-product-zoom, .simple-product-media')).filter((button, pos, list) => {
      if (list.indexOf(button) !== pos) return false;
      const card = button.closest('.simple-product-card');
      return !card || !card.hidden;
    }).map(button => ({
      button,
      image: button.dataset.zoomImage || button.querySelector('img')?.currentSrc || button.querySelector('img')?.src || FALLBACK,
      title: button.dataset.zoomTitle || button.closest('.simple-product-card')?.querySelector('h3')?.textContent || button.querySelector('img')?.alt || 'Shama product',
      pack: button.dataset.zoomPack || button.closest('.simple-product-card')?.querySelector('.simple-product-content>p')?.textContent || ''
    }));
  }

  function update() {
    const item = items[index];
    if (!item) return;
    const viewer = ensureViewer();
    const image = viewer.querySelector('.upl-image');
    image.onerror = () => { image.onerror = null; image.src = FALLBACK; };
    image.src = item.image || FALLBACK;
    image.alt = item.title || 'Shama product';
    viewer.querySelector('#upl-title').textContent = item.title || 'Shama product';
    viewer.querySelector('#upl-pack').textContent = cleanPack(item.pack);
    viewer.querySelectorAll('.upl-nav').forEach(button => { button.hidden = items.length < 2; });
  }

  function open(trigger) {
    items = visibleItems();
    if (!items.length) return;
    const found = items.findIndex(item => item.button === trigger);
    index = found >= 0 ? found : 0;
    lastFocus = trigger;
    const viewer = ensureViewer();
    update();
    viewer.classList.add('open');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('universal-product-lightbox-open');
  }

  function close() {
    const viewer = document.querySelector('#universal-product-lightbox');
    if (!viewer) return;
    viewer.classList.remove('open');
    viewer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('universal-product-lightbox-open');
    if (lastFocus && typeof lastFocus.focus === 'function') {
      try { lastFocus.focus({preventScroll:true}); } catch (_) { lastFocus.focus(); }
    }
  }

  function step(direction) {
    if (items.length < 2) return;
    index = (index + direction + items.length) % items.length;
    update();
  }

  document.addEventListener('click', event => {
    const trigger = event.target.closest?.('.simple-product-zoom, .simple-product-media');
    if (!trigger) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    open(trigger);
  }, true);

  document.addEventListener('keydown', event => {
    const viewer = document.querySelector('#universal-product-lightbox');
    if (!viewer || !viewer.classList.contains('open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
  });
})();
