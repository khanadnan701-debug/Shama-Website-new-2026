(() => {
  'use strict';
  if (document.body.dataset.page !== 'product' || document.body.dataset.category !== 'bakery') return;

  const groupOrder = [
    'Baking Essentials',
    'Cake Rusks & Biscuits',
    'Flavours & Essences'
  ];

  const groupMeta = {
    'Baking Essentials': {
      kicker:'01 · Baking essentials',
      note:'Baking powder and baking soda for home, retail and foodservice.'
    },
    'Cake Rusks & Biscuits': {
      kicker:'02 · Rusks & biscuits',
      note:'Cake rusks, tea rusks, Bakar Khani and biscuit favourites.'
    },
    'Flavours & Essences': {
      kicker:'03 · Flavours & essences',
      note:'Compact flavour bottles for baking, desserts and sweet preparations.'
    }
  };

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
  })[char]);

  const idFor = value => 'bakery-' + String(value).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

  function render() {
    if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

    const allItems = productData.filter(item => item.category === 'bakery');
    const wrap = document.querySelector('.simple-catalogue .wrap');
    if (!wrap || !allItems.length) return;

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Explore the Bakery range by category — baking essentials, cake rusks & biscuits, and flavours & essences.';
    }

    const groups = groupOrder
      .map(group => ({ group, items: allItems.filter(item => item.group === group) }))
      .filter(entry => entry.items.length);

    let runningIndex = 0;

    wrap.innerHTML = `
      <div class="bakery-category-nav" aria-label="Bakery product categories">
        <div class="bakery-category-nav-copy">
          <span>Bakery categories</span>
          <strong>${allItems.length} products</strong>
        </div>
        <div class="bakery-category-chips">
          ${groups.map((entry,index) => `
            <a class="bakery-category-chip ${index === 0 ? 'active' : ''}" href="#${idFor(entry.group)}">
              <span>${escapeHtml(entry.group)}</span>
              <b>${String(entry.items.length).padStart(2,'0')}</b>
            </a>
          `).join('')}
        </div>
      </div>

      <div class="bakery-category-sections">
        ${groups.map((entry,groupIndex) => {
          const start = runningIndex;
          runningIndex += entry.items.length;
          const meta = groupMeta[entry.group] || {};
          return `
            <section class="bakery-category-section ${groupIndex === 0 ? 'is-primary' : ''}" id="${idFor(entry.group)}">
              <div class="bakery-category-head">
                <div>
                  <span class="bakery-category-kicker">${escapeHtml(meta.kicker || entry.group)}</span>
                  <h2>${escapeHtml(entry.group)}</h2>
                  <p>${escapeHtml(meta.note || '')}</p>
                </div>
                <span class="bakery-category-count">${entry.items.length} products</span>
              </div>

              <div class="simple-product-grid bakery-product-grid">
                ${entry.items.map((item,index) => {
                  const absoluteIndex = start + index;
                  return `
                    <article class="simple-product-card" data-category="bakery">
                      <button class="simple-product-media simple-product-zoom" type="button"
                        data-index="${absoluteIndex}"
                        data-zoom-image="${escapeHtml(item.image)}"
                        data-zoom-title="${escapeHtml(item.title)}"
                        data-zoom-pack="${escapeHtml(item.pack)}"
                        aria-label="Open ${escapeHtml(item.title)} details">
                        <span class="simple-product-index">${String(index + 1).padStart(2,'0')}</span>
                        <span class="simple-zoom-hint" aria-hidden="true">⌕</span>
                        <img loading="lazy" decoding="async" draggable="false"
                          src="${escapeHtml(item.image)}"
                          alt="${escapeHtml(item.title)}">
                      </button>
                      <div class="simple-product-content">
                        <div class="simple-product-meta">${escapeHtml(entry.group)}</div>
                        <h3>${escapeHtml(item.title)}</h3>
                        <p>${escapeHtml(item.pack)}</p>
                        <button class="bulk-buy simple-product-btn" type="button"
                          data-product="${escapeHtml(item.title)}"
                          data-pack="${escapeHtml(item.pack)}">
                          <span>Add to bulk order</span><b>+</b>
                        </button>
                      </div>
                    </article>
                  `;
                }).join('')}
              </div>
            </section>
          `;
        }).join('')}
      </div>
    `;

    const chips = [...wrap.querySelectorAll('.bakery-category-chip')];
    chips.forEach(chip => {
      chip.addEventListener('click', event => {
        const target = document.querySelector(chip.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        chips.forEach(item => item.classList.toggle('active', item === chip));
        target.scrollIntoView({ behavior:'smooth', block:'start' });
      });
    });

    document.dispatchEvent(new CustomEvent('shama:bakery-grouped-rendered'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(render, 0), { once:true });
  } else {
    setTimeout(render, 0);
  }

  document.addEventListener('shama:product-simple-rendered', render);
})();