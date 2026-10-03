(() => {
  'use strict';
  if (document.body.dataset.page !== 'product' || document.body.dataset.category !== 'sauces') return;

  const groupOrder = [
    'Shama Curry & Cooking Pastes',
    'Ginger & Garlic Pastes',
    'Pickles & Chutneys',
    'Sauces'
  ];

  const groupMeta = {
    'Shama Curry & Cooking Pastes': {
      kicker:'01 · Shama pastes',
      title:'Shama Curry & Cooking Pastes',
      desc:'Biryani, butter chicken, balti, korma, kebab, tikka, vindaloo and other cooking pastes.'
    },
    'Ginger & Garlic Pastes': {
      kicker:'02 · Kitchen essentials',
      title:'Ginger & Garlic Pastes',
      desc:'Shama and Sunrise ginger, garlic and ginger-garlic pastes in retail and foodservice sizes.'
    },
    'Pickles & Chutneys': {
      kicker:'03 · Pickles & chutneys',
      title:'Pickles & Chutneys',
      desc:'Mango, mixed, lime, chilli and garlic pickles plus traditional chutneys.'
    },
    'Sauces': {
      kicker:'04 · Sauces',
      title:'Sauces',
      desc:'Mint, chilli, soy, tamarind and speciality table sauces for retail and foodservice.'
    }
  };

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[ch]);

  const idFor = value => 'sauce-group-' + String(value).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

  function render() {
    if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
    const allItems = productData.filter(item => item.category === 'sauces');
    const wrap = document.querySelector('.simple-catalogue .wrap');
    if (!wrap || !allItems.length) return;

    const groups = groupOrder.map(group => ({
      group,
      items:allItems.filter(item => item.group === group)
    })).filter(x => x.items.length);

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) heroCopy.textContent =
      'Browse Sauces, Pickles & Pastes by product type — Shama cooking pastes, ginger & garlic pastes, pickles, chutneys and sauces.';

    let runningIndex = 0;

    wrap.innerHTML = `
      <div class="sauce-type-nav">
        <div class="sauce-type-nav-copy">
          <span>Browse by category</span>
          <strong>${allItems.length} products</strong>
        </div>
        <div class="sauce-type-chips">
          ${groups.map((entry,index) => `
            <a class="${index === 0 ? 'active' : ''}" href="#${idFor(entry.group)}" data-sauce-group>
              <span>${esc(entry.group)}</span><b>${entry.items.length}</b>
            </a>
          `).join('')}
        </div>
      </div>

      <div class="sauce-type-sections">
        ${groups.map((entry,index) => {
          const meta = groupMeta[entry.group] || {};
          const start = runningIndex;
          runningIndex += entry.items.length;
          return `
            <section class="sauce-type-section ${index === 0 ? 'sauce-type-pastes' : ''}" id="${idFor(entry.group)}">
              <div class="sauce-type-head">
                <div>
                  <span class="sauce-type-kicker">${esc(meta.kicker || entry.group)}</span>
                  <h2>${esc(meta.title || entry.group)}</h2>
                  <p>${esc(meta.desc || '')}</p>
                </div>
                <span class="sauce-type-count">${entry.items.length} products</span>
              </div>
              <div class="simple-product-grid sauce-type-grid">
                ${entry.items.map((item,itemIndex) => `
                  <article class="simple-product-card" data-category="sauces">
                    <button class="simple-product-media simple-product-zoom" type="button"
                      data-index="${start + itemIndex}"
                      data-zoom-image="${esc(item.image)}"
                      data-zoom-title="${esc(item.title)}"
                      data-zoom-pack="${esc(item.pack)}"
                      aria-label="Open ${esc(item.title)} details">
                      <span class="simple-product-index">${String(itemIndex + 1).padStart(2,'0')}</span>
                      <span class="simple-zoom-hint" aria-hidden="true">⌕</span>
                      <img loading="lazy" decoding="async" draggable="false" src="${esc(item.image)}" alt="${esc(item.title)}">
                    </button>
                    <div class="simple-product-content">
                      <div class="simple-product-meta">${esc(entry.group)}</div>
                      <h3>${esc(item.title)}</h3>
                      <p>${esc(item.pack)}</p>
                      <button class="bulk-buy simple-product-btn" type="button" data-product="${esc(item.title)}" data-pack="${esc(item.pack)}">
                        <span>Add to bulk order</span><b>+</b>
                      </button>
                    </div>
                  </article>
                `).join('')}
              </div>
            </section>
          `;
        }).join('')}
      </div>
    `;

    const links = [...wrap.querySelectorAll('[data-sauce-group]')];
    links.forEach(link => link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      links.forEach(x => x.classList.toggle('active', x === link));
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }));

    document.dispatchEvent(new CustomEvent('shama:sauces-grouped-rendered'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(render,0), {once:true});
  } else setTimeout(render,0);

  document.addEventListener('shama:product-simple-rendered', render);
})();