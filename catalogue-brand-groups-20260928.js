(() => {
  'use strict';

  if (document.body.dataset.page !== 'product') return;

  const category = document.body.dataset.category || '';
  const AUTO_CATEGORIES = new Set([
    'agarbatti',
    'divers',
    'dry-fruits',
    'non-foods',
    'oils',
    'preserves',
    'sea-food',
    'spices'
  ]);

  if (!AUTO_CATEGORIES.has(category)) return;

  const BRAND_PATTERNS = [
    ['Shama', /^Shama\b/i],
    ['Sunrise', /^Sunrise\b/i],
    ['Shaheen', /^Shaheen\b/i],
    ['Ahmed', /^Ahmed\b/i],
    ["Patak's", /^Patak['’]?s?\b/i],
    ['Schani', /^Schani\b/i],
    ['Kody', /^Kody\b/i],
    ['TRS', /^TRS\b/i],
    ['Le Renard', /^Le\s+Renard\b/i],
    ['Metro', /^Metro\b/i],
    ['Metromilan', /^Metromilan\b/i],
    ['Pure', /^Pure\b/i],
    ['Shahi', /^Shahi\b/i],
    ['TCC', /^TCC\b/i],
    ['Mazedar', /^Mazedar\b/i],
    ['Punjabi', /^Punjabi\b/i],
    ['Khanum', /^Khanum\b/i],
    ['Haldiram', /^Haldiram\b/i],
    ['Telephone', /^Telephone\b/i],
    ["Maniarr's", /^Maniarr/i],
    ['Maggi', /^Maggi\b/i],
    ['Hashmi', /^Hashmi\b/i],
    ['Heera', /^Heera\b/i],
    ['Shezan', /^Shezan\b/i],
    ['Knorr', /^Knorr\b/i],
    ['Lijjat', /^Lijjat\b/i],
    ['Malka', /^Malka\b/i],
    ['MDH', /^MDH\b/i],
    ['Orienco', /^Orienco\b/i],
    ['Dove', /^Dove\b/i],
    ['Dettol', /^Dettol\b/i],
    ["Johnson's Baby", /^Johnson/i],
    ['Dabur', /^Dabur\b/i],
    ['Lifebuoy', /^Lifebuoy\b/i],
    ['Lux', /^Lux\b/i],
    ['Vaseline', /^Vaseline\b/i],
    ['Supreme Henna', /^Supreme\b/i],
    ['Bikaneri Bites', /^Bikaneri\s+Bites\b/i],
    ['Kurkure', /^Kurkure\b/i],
    ["Lay's", /^Lay['’]?s\b/i]
  ];

  function brandFor(title, card) {
    const cleanTitle = String(title || '').trim();

    if (typeof productData !== 'undefined' && Array.isArray(productData)) {
      const pack = card?.querySelector('.simple-product-content>p')?.textContent?.trim() || '';
      const matched = productData.find(item =>
        item.category === category &&
        String(item.title || '').trim() === cleanTitle &&
        (!pack || String(item.pack || '').trim() === pack)
      ) || productData.find(item =>
        item.category === category &&
        String(item.title || '').trim() === cleanTitle
      );

      if (matched?.brand) return String(matched.brand).trim();

      const image = String(matched?.image || card?.querySelector('img')?.src || '');
      if (/\bORIENCO\b|\/Orienco_/i.test(image)) return 'Orienco';
    }

    for (const [brand, pattern] of BRAND_PATTERNS) {
      if (pattern.test(cleanTitle)) return brand;
    }

    return 'Other Brands';
  }

  function brandSort(a, b) {
    if (a === 'Shama') return -1;
    if (b === 'Shama') return 1;
    if (a === 'Other Brands') return 1;
    if (b === 'Other Brands') return -1;
    return a.localeCompare(b);
  }

  function ensureCss() {
    if (!document.querySelector('link[href*="rice-category-groups-20260924.css"]')) {
      const riceCss = document.createElement('link');
      riceCss.rel = 'stylesheet';
      riceCss.href = 'rice-category-groups-20260924.css?v=20260924-3';
      document.head.appendChild(riceCss);
    }
    if (!document.querySelector('link[href*="catalogue-brand-groups-20260928.css"]')) {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'catalogue-brand-groups-20260928.css?v=20260928-1';
      document.head.appendChild(css);
    }
  }

  function organise() {
    const wrap = document.querySelector('.simple-catalogue .wrap');
    const grid = wrap?.querySelector('#simple-product-grid');
    if (!wrap) return false;
    if (wrap.dataset.brandGrouped === 'true' && !grid) return true;
    if (!grid) return false;

    const cards = Array.from(grid.querySelectorAll(':scope > .simple-product-card'));
    if (!cards.length) return false;

    const grouped = new Map();

    cards.forEach(card => {
      const title = card.querySelector('.simple-product-content h3')?.textContent || '';
      const brand = brandFor(title, card);
      if (!grouped.has(brand)) grouped.set(brand, []);
      grouped.get(brand).push(card);

      const meta = card.querySelector('.simple-product-meta');
      if (meta) meta.textContent = brand === 'Other Brands' ? 'Other Brand' : brand;
    });

    const brands = Array.from(grouped.keys()).sort(brandSort);

    // A single-brand catalogue is already naturally together. Keep its layout clean.
    if (brands.length <= 1) {
      wrap.dataset.brandGrouped = 'true';
      return true;
    }

    ensureCss();

    const oldControls = wrap.querySelector('.catalogue-brand-controls');
    const oldSections = wrap.querySelector('.catalogue-brand-sections');
    if (oldControls) oldControls.remove();
    if (oldSections) oldSections.remove();

    const controls = document.createElement('div');
    controls.className = 'rice-category-controls catalogue-brand-controls';
    controls.innerHTML = `
      <div class="rice-category-intro">
        <div>
          <span class="rice-category-kicker">Browse by brand</span>
          <h2>Choose your brand.</h2>
        </div>
        <p>Shama products are kept together first, followed by every other brand in its own range.</p>
      </div>
      <div class="rice-category-tabs" role="tablist" aria-label="Brands">
        <button class="rice-category-tab active" type="button" data-brand-filter="all" aria-pressed="true">
          <span>All Products</span><b>${cards.length}</b>
        </button>
        ${brands.map(brand => `
          <button class="rice-category-tab" type="button" data-brand-filter="${encodeURIComponent(brand)}" aria-pressed="false">
            <span>${brand}</span><b>${grouped.get(brand).length}</b>
          </button>
        `).join('')}
      </div>
    `;

    const sections = document.createElement('div');
    sections.className = 'rice-category-sections catalogue-brand-sections';

    brands.forEach((brand, index) => {
      const brandCards = grouped.get(brand);
      const section = document.createElement('section');
      section.className = 'rice-category-section catalogue-brand-section';
      section.dataset.brandSection = encodeURIComponent(brand);
      section.innerHTML = `
        <div class="rice-category-head">
          <div>
            <span class="rice-category-number">${String(index + 1).padStart(2, '0')}</span>
            <div>
              <span class="rice-category-label">${brand === 'Shama' ? 'Shama range' : 'Brand range'}</span>
              <h2>${brand}</h2>
              <p>${brand === 'Shama' ? 'Shama products grouped together for faster browsing.' : brand === 'Other Brands' ? 'Additional products grouped separately from the named brands.' : brand + ' products grouped together.'}</p>
            </div>
          </div>
          <span class="rice-category-count">${brandCards.length} products</span>
        </div>
        <div class="simple-product-grid rice-category-grid"></div>
      `;

      const sectionGrid = section.querySelector('.rice-category-grid');
      brandCards.forEach((card, cardIndex) => {
        const number = card.querySelector('.simple-product-index');
        if (number) number.textContent = String(cardIndex + 1).padStart(2, '0');
        sectionGrid.appendChild(card);
      });

      sections.appendChild(section);
    });

    grid.replaceWith(sections);
    wrap.prepend(controls);
    wrap.dataset.brandGrouped = 'true';

    const tabs = Array.from(controls.querySelectorAll('[data-brand-filter]'));
    const allSections = Array.from(sections.querySelectorAll('[data-brand-section]'));

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.brandFilter;

        tabs.forEach(item => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });

        allSections.forEach(section => {
          section.hidden = filter !== 'all' && section.dataset.brandSection !== filter;
        });

        const firstVisible = allSections.find(section => !section.hidden);
        if (firstVisible && filter !== 'all') {
          firstVisible.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    return true;
  }

  function boot() {
    if (organise()) return;
    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      if (organise() || attempts > 40) clearInterval(timer);
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, {once:true});
  } else {
    boot();
  }

  document.addEventListener('shama:product-simple-rendered', () => {
    const wrap = document.querySelector('.simple-catalogue .wrap');
    if (wrap) delete wrap.dataset.brandGrouped;
    setTimeout(organise, 0);
  });
})();