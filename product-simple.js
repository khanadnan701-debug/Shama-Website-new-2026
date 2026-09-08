(() => {
  if (document.body.dataset.page !== 'product') return;

  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'product-simple.css?v=20260908-1';
  document.head.appendChild(style);

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);

  const cleanPack = value => String(value || 'Contact us for available pack sizes')
    .replace(/\\n/g, ' · ')
    .replace(/\n/g, ' · ');

  function renderSimpleProducts(main) {
    if (!main) return;

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
    ) + `
      <section class="simple-catalogue">
        <div class="wrap simple-catalogue-toolbar">
          <div class="simple-catalogue-heading">
            <span class="eyebrow">Shama ${escapeHtml(category.name)}</span>
            <h2>Explore the range</h2>
            <p>Clear products, pack sizes and wholesale ordering — all in one place.</p>
          </div>
          <div class="simple-catalogue-search">
            <label for="simple-product-search">Search products</label>
            <div class="simple-search-box">
              <input id="simple-product-search" type="search" placeholder="Search by product or pack size…" autocomplete="off">
              <span><b id="simple-product-count">${items.length}</b> products</span>
            </div>
          </div>
        </div>
        <div class="wrap">
          <div id="simple-product-grid" class="simple-product-grid"></div>
        </div>
      </section>`;

    const grid = document.querySelector('#simple-product-grid');
    const search = document.querySelector('#simple-product-search');
    const count = document.querySelector('#simple-product-count');

    const draw = list => {
      count.textContent = list.length;
      grid.innerHTML = list.length ? list.map((item, index) => {
        const pack = cleanPack(item.pack);
        return `
          <article class="simple-product-card">
            <div class="simple-product-media">
              <span class="simple-product-index">${String(index + 1).padStart(2, '0')}</span>
              <img loading="lazy" decoding="async" src="${escapeHtml(item.image || '')}" alt="${escapeHtml(item.title)}">
            </div>
            <div class="simple-product-content">
              <div class="simple-product-meta">Shama ${escapeHtml(category.name)}</div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(pack)}</p>
              <button class="bulk-buy simple-product-btn" type="button" data-product="${escapeHtml(item.title)}" data-pack="${escapeHtml(item.pack || '')}">
                <span>Add to bulk order</span><b>+</b>
              </button>
            </div>
          </article>`;
      }).join('') : `
        <div class="simple-empty-state">
          <strong>No matching products</strong>
          <span>Try another product name or pack size.</span>
        </div>`;
    };

    draw(items);

    search.addEventListener('input', () => {
      const term = search.value.trim().toLowerCase();
      const filtered = !term ? items : items.filter(item =>
        item.title.toLowerCase().includes(term) || cleanPack(item.pack).toLowerCase().includes(term)
      );
      draw(filtered);
    });
  }

  // Replace the older split runway renderer so any async category image updater
  // (for example Flour/Lentils or Frozen) re-renders into the same simple grid.
  try { renderProducts = renderSimpleProducts; } catch (error) {}
  renderSimpleProducts(document.querySelector('#page-content'));
})();
