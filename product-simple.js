(() => {
  if (document.body.dataset.page !== 'product') return;

  const FALLBACK_IMAGE = 'assets/shama-logo.png';
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'product-simple.css?v=20260911-pack2';
  document.head.appendChild(style);

  const packStyle = document.createElement('style');
  packStyle.textContent = '.simple-product-content>p{color:#152c6b!important;font-weight:800!important}';
  document.head.appendChild(packStyle);

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
            <button class="product-lightbox-nav prev" type="button" aria-label="Previous image">‹</button>
            <img id="product-lightbox-image" src="" alt="">
            <button class="product-lightbox-nav next" type="button" aria-label="Next image">›</button>
          </div>
          <div class="product-lightbox-copy"><span>Shama product</span><h3 id="product-lightbox-title"></h3><p id="product-lightbox-pack"></p></div>
        </div>
      </div>`);
    lightbox = document.querySelector('#product-lightbox');
    lightbox.querySelectorAll('[data-lightbox-close]').forEach(button => button.addEventListener('click', event => {
      event.preventDefault(); event.stopPropagation(); closeLightbox();
    }));
    lightbox.querySelector('.product-lightbox-nav.prev').addEventListener('click', event => {
      event.preventDefault(); event.stopPropagation(); stepLightbox(-1);
    });
    lightbox.querySelector('.product-lightbox-nav.next').addEventListener('click', event => {
      event.preventDefault(); event.stopPropagation(); stepLightbox(1);
    });
    return lightbox;
  }

  function updateLightbox() {
    const lightbox = ensureLightbox();
    const item = lightboxItems[lightboxIndex];
    if (!item) return;
    const image = lightbox.querySelector('#product-lightbox-image');
    image.onerror = () => { image.onerror = null; image.src = FALLBACK_IMAGE; };
    image.src = item.image || FALLBACK_IMAGE;
    image.alt = item.title || 'Shama product';
    lightbox.querySelector('#product-lightbox-title').textContent = item.title || 'Shama product';
    lightbox.querySelector('#product-lightbox-pack').textContent = cleanPack(item.pack);
    lightbox.querySelectorAll('.product-lightbox-nav').forEach(button => { button.hidden = lightboxItems.length < 2; });
  }

  function openLightbox(items, index, trigger) {
    if (!items.length) return;
    lightboxItems = items;
    lightboxIndex = Math.max(0, Math.min(index, items.length - 1));
    lightboxLastFocus = trigger || document.activeElement;
    updateLightbox();
    const lightbox = ensureLightbox();
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
    if (lightboxLastFocus && typeof lightboxLastFocus.focus === 'function') lightboxLastFocus.focus();
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
    if (!main) return;
    const slug = document.body.dataset.category;
    const category = categories.find(item => item.slug === slug);
    if (!category) return;
    const items = productData.filter(item => item.category === slug);
    activeCatalog = items;
    document.title = `${category.name} | Shama International`;

    main.innerHTML = hero(`${category.name}.`, `${category.desc} — explore the complete Shama range.`, `Products / ${category.name}`) + `
      <section class="simple-catalogue">
        <div class="wrap simple-catalogue-toolbar">
          <div class="simple-catalogue-heading"><span class="eyebrow">Shama ${escapeHtml(category.name)}</span><h2>Explore the range</h2><p>Clear products, pack sizes and wholesale ordering — all in one place.</p></div>
          <div class="simple-catalogue-search"><label for="simple-product-search">Search products</label><div class="simple-search-box"><input id="simple-product-search" type="search" placeholder="Search by product or pack size…" autocomplete="off"><span><b id="simple-product-count">${items.length}</b> products</span></div></div>
        </div>
        <div class="wrap"><div id="simple-product-grid" class="simple-product-grid"></div></div>
      </section>`;

    const grid = main.querySelector('#simple-product-grid');
    const search = main.querySelector('#simple-product-search');
    const count = main.querySelector('#simple-product-count');

    const draw = list => {
      count.textContent = list.length;
      grid.innerHTML = list.length ? list.map((item, index) => {
        const pack = cleanPack(item.pack);
        const image = item.image || FALLBACK_IMAGE;
        return `<article class="simple-product-card">
          <button class="simple-product-media simple-product-zoom" type="button" data-zoom-index="${index}" aria-label="Zoom ${escapeHtml(item.title)} image">
            <span class="simple-product-index">${String(index + 1).padStart(2, '0')}</span><span class="simple-zoom-hint" aria-hidden="true">⌕</span>
            <img loading="lazy" decoding="async" draggable="false" src="${escapeHtml(image)}" alt="${escapeHtml(item.title)}">
          </button>
          <div class="simple-product-content"><div class="simple-product-meta">Shama ${escapeHtml(category.name)}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(pack)}</p>
            <button class="bulk-buy simple-product-btn" type="button" data-product="${escapeHtml(item.title)}" data-pack="${escapeHtml(item.pack || '')}"><span>Add to bulk order</span><b>+</b></button>
          </div></article>`;
      }).join('') : `<div class="simple-empty-state"><strong>No matching products</strong><span>Try another product name or pack size.</span></div>`;

      grid.querySelectorAll('.simple-product-media img').forEach(image => image.addEventListener('error', () => {
        if (image.src.endsWith('/assets/shama-logo.png')) return;
        image.src = FALLBACK_IMAGE;
        image.classList.add('simple-product-image-fallback');
      }, { once: true }));

      grid.querySelectorAll('.simple-product-zoom').forEach(button => button.addEventListener('click', event => {
        event.preventDefault(); event.stopPropagation();
        const item = list[Number(button.dataset.zoomIndex || 0)];
        if (!item) return;
        const sources = Array.isArray(item.images) && item.images.length ? item.images : [item.image || FALLBACK_IMAGE];
        openLightbox(sources.map(src => ({ image: src, title: item.title, pack: item.pack })), 0, button);
      }, true));
    };

    draw(items);
    search.addEventListener('input', () => {
      const term = search.value.trim().toLowerCase();
      draw(!term ? items : items.filter(item => item.title.toLowerCase().includes(term) || cleanPack(item.pack).toLowerCase().includes(term)));
    });
  }

  window.shamaRerenderSimpleProducts = () => renderSimpleProducts(document.querySelector('#page-content'));
  document.addEventListener('shama:product-images-updated', window.shamaRerenderSimpleProducts);
  try { renderProducts = renderSimpleProducts; } catch (error) {}
  renderSimpleProducts(document.querySelector('#page-content'));
})();