(() => {
  'use strict';
  if (document.body.dataset.page !== 'product') return;

  const FALLBACK_IMAGE = 'assets/shama-logo.png';

  let style = document.querySelector('#product-simple-style');
  if (!style) {
    style = document.createElement('link');
    style.id = 'product-simple-style';
    style.rel = 'stylesheet';
    style.href = 'product-simple.css?v=20260911-zoom3';
    document.head.appendChild(style);
  }

  if (!document.querySelector('#product-zoom-force-style')) {
    const forceStyle = document.createElement('style');
    forceStyle.id = 'product-zoom-force-style';
    forceStyle.textContent = `
      body.product-lightbox-open{overflow:hidden!important}
      #product-lightbox.product-lightbox{position:fixed!important;z-index:2147483000!important;inset:0!important;display:grid!important;place-items:center!important;padding:24px!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;transition:opacity .2s ease,visibility .2s ease!important}
      #product-lightbox.product-lightbox.open{visibility:visible!important;opacity:1!important;pointer-events:auto!important}
      #product-lightbox .product-lightbox-backdrop{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;border:0!important;background:rgba(5,12,28,.88)!important;backdrop-filter:blur(9px)!important;cursor:zoom-out!important}
      #product-lightbox .product-lightbox-panel{position:relative!important;z-index:2!important;width:min(1040px,94vw)!important;max-height:94vh!important;display:grid!important;grid-template-rows:minmax(0,1fr) auto!important;overflow:hidden!important;border-radius:26px!important;background:#fff!important;box-shadow:0 38px 120px rgba(0,0,0,.45)!important}
      #product-lightbox .product-lightbox-media{position:relative!important;min-height:0!important;display:grid!important;place-items:center!important;padding:28px 76px!important;background:#f4f6fb!important;overflow:hidden!important}
      #product-lightbox .product-lightbox-media img{display:block!important;max-width:100%!important;max-height:72vh!important;width:auto!important;height:auto!important;object-fit:contain!important}
      #product-lightbox .product-lightbox-close{position:absolute!important;z-index:5!important;top:16px!important;right:16px!important;width:44px!important;height:44px!important;border:0!important;border-radius:50%!important;background:#17233d!important;color:#fff!important;cursor:pointer!important;font:400 30px/1 Arial,sans-serif!important}
      #product-lightbox .product-lightbox-nav{position:absolute!important;z-index:4!important;top:50%!important;transform:translateY(-50%)!important;width:48px!important;height:58px!important;border:0!important;border-radius:16px!important;background:rgba(23,35,61,.92)!important;color:#fff!important;cursor:pointer!important;font:400 34px/1 Arial,sans-serif!important}
      #product-lightbox .product-lightbox-nav.prev{left:14px!important}
      #product-lightbox .product-lightbox-nav.next{right:14px!important}
      #product-lightbox .product-lightbox-copy{padding:17px 24px 20px!important;border-top:1px solid rgba(31,44,75,.08)!important;background:#fff!important}
      #product-lightbox .product-lightbox-copy span{display:block!important;margin-bottom:4px!important;color:#ff5b88!important;font-weight:800!important;font-size:9px!important;text-transform:uppercase!important;letter-spacing:.12em!important}
      #product-lightbox .product-lightbox-copy h3{margin:0!important;color:#152039!important;font:800 clamp(21px,3vw,31px)/1.15 Manrope,Arial,sans-serif!important}
      #product-lightbox .product-lightbox-copy p{margin:7px 0 0!important;color:#5e6880!important;font-weight:700!important}
      .simple-product-media,.simple-product-media *{cursor:zoom-in!important}
      @media(max-width:640px){#product-lightbox.product-lightbox{padding:10px!important}#product-lightbox .product-lightbox-panel{width:100%!important;max-height:96vh!important;border-radius:18px!important}#product-lightbox .product-lightbox-media{padding:56px 16px 72px!important}#product-lightbox .product-lightbox-media img{max-height:68vh!important}#product-lightbox .product-lightbox-nav{top:auto!important;bottom:12px!important;transform:none!important;width:44px!important;height:44px!important;border-radius:50%!important}}
    `;
    document.head.appendChild(forceStyle);
  }

  if (!document.querySelector('#product-pack-style')) {
    const packStyle = document.createElement('style');
    packStyle.id = 'product-pack-style';
    packStyle.textContent = '.simple-product-content>p{color:#152c6b!important;font-weight:800!important}';
    document.head.appendChild(packStyle);
  }

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
  const cleanPack = value => String(value || 'Contact us for available pack sizes').replace(/\\n/g, ' · ').replace(/\n/g, ' · ');

  let lightboxItems = [];
  let lightboxIndex = 0;
  let lightboxLastFocus = null;

  function ensureLightbox() {
    let lightbox = document.querySelector('#product-lightbox');
    if (lightbox) return lightbox;

    document.body.insertAdjacentHTML('beforeend', `
      <div id="product-lightbox" class="product-lightbox" aria-hidden="true">
        <button class="product-lightbox-backdrop" type="button" aria-label="Close image viewer" data-lightbox-close></button>
        <div class="product-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="product-lightbox-title">
          <button class="product-lightbox-close" type="button" aria-label="Close image viewer" data-lightbox-close>×</button>
          <div class="product-lightbox-media">
            <button class="product-lightbox-nav prev" type="button" aria-label="Previous product">‹</button>
            <img id="product-lightbox-image" src="" alt="">
            <button class="product-lightbox-nav next" type="button" aria-label="Next product">›</button>
          </div>
          <div class="product-lightbox-copy">
            <span>Shama product</span>
            <h3 id="product-lightbox-title"></h3>
            <p id="product-lightbox-pack"></p>
          </div>
        </div>
      </div>`);

    lightbox = document.querySelector('#product-lightbox');
    lightbox.querySelectorAll('[data-lightbox-close]').forEach(button => button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      closeLightbox();
    }));
    lightbox.querySelector('.product-lightbox-nav.prev').addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      stepLightbox(-1);
    });
    lightbox.querySelector('.product-lightbox-nav.next').addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      stepLightbox(1);
    });
    return lightbox;
  }

  function updateLightbox() {
    const item = lightboxItems[lightboxIndex];
    if (!item) return;
    const lightbox = ensureLightbox();
    const image = lightbox.querySelector('#product-lightbox-image');
    image.onerror = () => {
      image.onerror = null;
      image.src = FALLBACK_IMAGE;
    };
    image.src = item.image || FALLBACK_IMAGE;
    image.alt = item.title || 'Shama product';
    lightbox.querySelector('#product-lightbox-title').textContent = item.title || 'Shama product';
    lightbox.querySelector('#product-lightbox-pack').textContent = cleanPack(item.pack);
    lightbox.querySelectorAll('.product-lightbox-nav').forEach(button => {
      button.hidden = lightboxItems.length < 2;
    });
  }

  function openLightbox(items, index, trigger) {
    if (!Array.isArray(items) || !items.length) return;
    lightboxItems = items;
    lightboxIndex = Math.max(0, Math.min(Number(index) || 0, items.length - 1));
    lightboxLastFocus = trigger || document.activeElement;
    const lightbox = ensureLightbox();
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('product-lightbox-open');
  }

  function closeLightbox() {
    const lightbox = document.querySelector('#product-lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('product-lightbox-open');
    if (lightboxLastFocus && typeof lightboxLastFocus.focus === 'function') {
      try { lightboxLastFocus.focus({ preventScroll: true }); } catch (_) { lightboxLastFocus.focus(); }
    }
  }

  function stepLightbox(direction) {
    if (lightboxItems.length < 2) return;
    lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
    updateLightbox();
  }

  function itemsFromVisibleCards() {
    return Array.from(document.querySelectorAll('.simple-product-zoom')).map(button => ({
      image: button.dataset.zoomImage || button.querySelector('img')?.src || FALLBACK_IMAGE,
      title: button.dataset.zoomTitle || button.querySelector('img')?.alt || 'Shama product',
      pack: button.dataset.zoomPack || ''
    }));
  }

  document.addEventListener('click', event => {
    const trigger = event.target.closest?.('.simple-product-zoom');
    if (!trigger) return;
    const buttons = Array.from(document.querySelectorAll('.simple-product-zoom'));
    const index = Math.max(0, buttons.indexOf(trigger));
    const items = itemsFromVisibleCards();
    if (!items.length) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openLightbox(items, index, trigger);
  }, true);

  document.addEventListener('keydown', event => {
    const lightbox = document.querySelector('#product-lightbox');
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') stepLightbox(-1);
    if (event.key === 'ArrowRight') stepLightbox(1);
  });

  function renderSimpleProducts(main) {
    if (!main || typeof categories === 'undefined' || typeof productData === 'undefined') return;

    const slug = document.body.dataset.category;
    const category = categories.find(item => item.slug === slug);
    if (!category) return;

    const items = productData.filter(item => item.category === slug);
    if (typeof activeCatalog !== 'undefined') activeCatalog = items;
    document.title = `${category.name} | Shama International`;

    main.innerHTML = hero(
      `${category.name}.`,
      `${category.desc} — explore the complete Shama range.`,
      `Products / ${category.name}`
    ) + `<section class="simple-catalogue"><div class="wrap"><div id="simple-product-grid" class="simple-product-grid"></div></div></section>`;

    const grid = main.querySelector('#simple-product-grid');
    if (!grid) return;

    grid.innerHTML = items.map((item, index) => `
      <article class="simple-product-card">
        <button class="simple-product-media simple-product-zoom" type="button" data-index="${index}" data-zoom-image="${escapeHtml(item.image || FALLBACK_IMAGE)}" data-zoom-title="${escapeHtml(item.title)}" data-zoom-pack="${escapeHtml(cleanPack(item.pack))}" aria-label="Open ${escapeHtml(item.title)} image">
          <span class="simple-product-index">${String(index + 1).padStart(2, '0')}</span>
          <span class="simple-zoom-hint" aria-hidden="true">⌕</span>
          <img loading="lazy" decoding="async" draggable="false" src="${escapeHtml(item.image || FALLBACK_IMAGE)}" alt="${escapeHtml(item.title)}">
        </button>
        <div class="simple-product-content">
          <div class="simple-product-meta">Shama ${escapeHtml(category.name)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(cleanPack(item.pack))}</p>
          <button class="bulk-buy simple-product-btn" type="button" data-product="${escapeHtml(item.title)}" data-pack="${escapeHtml(item.pack || '')}"><span>Add to bulk order</span><b>+</b></button>
        </div>
      </article>`).join('');

    grid.querySelectorAll('.simple-product-media img').forEach(image => {
      image.addEventListener('error', () => {
        image.src = FALLBACK_IMAGE;
      }, { once: true });
    });

    document.dispatchEvent(new CustomEvent('shama:product-simple-rendered'));
  }

  window.shamaRerenderSimpleProducts = () => renderSimpleProducts(document.querySelector('#page-content'));
  renderSimpleProducts(document.querySelector('#page-content'));
})();
