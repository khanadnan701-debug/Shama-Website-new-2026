(() => {
  'use strict';
  if (document.body.dataset.page !== 'product') return;

  const FALLBACK_IMAGE = 'assets/shama-logo.png';
  let style = document.querySelector('#product-simple-style');
  if (!style) {
    style = document.createElement('link');
    style.id = 'product-simple-style';
    style.rel = 'stylesheet';
    style.href = 'product-simple.css?v=20260911-zoom2';
    document.head.appendChild(style);
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
    lightbox.querySelectorAll('[data-lightbox-close]').forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        closeLightbox();
      });
    });
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
    if (!items.length) return;
    lightboxItems = items;
    lightboxIndex = Math.max(0, Math.min(Number(index) || 0, items.length - 1));
    lightboxLastFocus = trigger || document.activeElement;
    updateLightbox();
    const lightbox = ensureLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('product-lightbox-open');
    lightbox.querySelector('.product-lightbox-close')?.focus({ preventScroll: true });
  }

  function closeLightbox() {
    const lightbox = document.querySelector('#product-lightbox');
    if (!lightbox || !lightbox.classList.contains('open')) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('product-lightbox-open');
    if (lightboxLastFocus && typeof lightboxLastFocus.focus === 'function') {
      lightboxLastFocus.focus({ preventScroll: true });
    }
  }

  function stepLightbox(direction) {
    if (lightboxItems.length < 2) return;
    lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
    updateLightbox();
  }

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
    activeCatalog = items;
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
        <button class="simple-product-media simple-product-zoom" type="button" data-index="${index}" aria-label="Open ${escapeHtml(item.title)} image">
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
        if (image.src.endsWith('/assets/shama-logo.png')) return;
        image.src = FALLBACK_IMAGE;
      }, { once: true });
    });

    const lightboxList = items.map(item => ({
      image: item.image || FALLBACK_IMAGE,
      title: item.title,
      pack: item.pack
    }));

    grid.addEventListener('click', event => {
      const trigger = event.target.closest('.simple-product-zoom');
      if (!trigger || !grid.contains(trigger)) return;
      event.preventDefault();
      event.stopPropagation();
      openLightbox(lightboxList, Number(trigger.dataset.index || 0), trigger);
    });

    document.dispatchEvent(new CustomEvent('shama:product-simple-rendered'));
  }

  window.shamaRerenderSimpleProducts = () => renderSimpleProducts(document.querySelector('#page-content'));
  renderSimpleProducts(document.querySelector('#page-content'));
})();
