(() => {
  'use strict';
  if (document.body.dataset.page !== 'product' || document.body.dataset.category !== 'cosmetics') return;

  const brandOrder = [
    'Shama',
    'Dettol',
    "Johnson's Baby",
    'Dove',
    'Lux',
    'Vaseline',
    'Dabur',
    'Supreme Henna',
    'Lifebuoy'
  ];

  const brandNotes = {
    'Shama':'Shama beauty & care essentials',
    'Dettol':'Hygiene & protection',
    "Johnson's Baby":'Baby care',
    'Dove':'Bath & body care',
    'Lux':'Bath & beauty soaps',
    'Vaseline':'Skin care',
    'Dabur':'Hair care',
    'Supreme Henna':'Henna & hair colour',
    'Lifebuoy':'Everyday hygiene'
  };

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
  })[char]);

  function render() {
    if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

    const items = productData.filter(item => item.category === 'cosmetics');
    const wrap = document.querySelector('.simple-catalogue .wrap');
    if (!wrap || !items.length) return;

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Explore Shama first, followed by trusted beauty, baby-care, hygiene and personal-care brands.';
    }

    const groups = brandOrder
      .map(brand => ({ brand, items: items.filter(item => item.brand === brand) }))
      .filter(group => group.items.length);

    let runningIndex = 0;

    wrap.innerHTML = `
      <div class="cosmetics-brand-nav" aria-label="Cosmetics brands">
        <span class="cosmetics-brand-nav-label">Browse by brand</span>
        <div class="cosmetics-brand-chips">
          ${groups.map((group,index) => `
            <a class="cosmetics-brand-chip ${index === 0 ? 'is-shama' : ''}" href="#cosmetics-${group.brand.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}">
              <span>${escapeHtml(group.brand)}</span>
              <b>${String(group.items.length).padStart(2,'0')}</b>
            </a>
          `).join('')}
        </div>
      </div>

      <div class="cosmetics-brand-sections">
        ${groups.map((group,groupIndex) => {
          const start = runningIndex;
          runningIndex += group.items.length;
          const id = 'cosmetics-' + group.brand.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
          return `
            <section class="cosmetics-brand-section ${groupIndex === 0 ? 'is-shama' : ''}" id="${id}">
              <div class="cosmetics-brand-head">
                <div>
                  <span class="cosmetics-brand-kicker">${groupIndex === 0 ? '01 · Start here' : String(groupIndex + 1).padStart(2,'0') + ' · Brand range'}</span>
                  <h2>${escapeHtml(group.brand)}</h2>
                  <p>${escapeHtml(brandNotes[group.brand] || 'Personal care collection')}</p>
                </div>
                <span class="cosmetics-brand-count">${group.items.length} products</span>
              </div>

              <div class="simple-product-grid cosmetics-product-grid">
                ${group.items.map((item,index) => {
                  const absoluteIndex = start + index;
                  return `
                    <article class="simple-product-card">
                      <button class="simple-product-media simple-product-zoom" type="button"
                        data-index="${absoluteIndex}"
                        data-zoom-image="${escapeHtml(item.image)}"
                        data-zoom-title="${escapeHtml(item.title)}"
                        data-zoom-pack="${escapeHtml(item.pack)}"
                        aria-label="Open ${escapeHtml(item.title)} image">
                        <span class="simple-product-index">${String(index + 1).padStart(2,'0')}</span>
                        <span class="simple-zoom-hint" aria-hidden="true">⌕</span>
                        <img loading="lazy" decoding="async" draggable="false" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}">
                      </button>
                      <div class="simple-product-content">
                        <div class="simple-product-meta">${escapeHtml(group.brand)}</div>
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

    wrap.querySelectorAll('.cosmetics-brand-chip').forEach(chip => {
      chip.addEventListener('click', event => {
        const target = document.querySelector(chip.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior:'smooth', block:'start' });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(render, 0), { once:true });
  } else {
    setTimeout(render, 0);
  }

  document.addEventListener('shama:product-simple-rendered', render);
})();