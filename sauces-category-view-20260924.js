(() => {
  'use strict';
  if (document.body.dataset.page !== 'product' || document.body.dataset.category !== 'sauces') return;

  const typeFor = title => {
    const value = String(title || '').toLowerCase();
    if (value.includes('pickle') || value.includes('chutney')) return 'pickles';
    if (value.includes('sauce')) return 'sauces';
    return 'pastes';
  };

  const typeMeta = {
    pastes: {
      order: 1,
      label: 'Pastes',
      title: 'Curry & Cooking Pastes',
      desc: 'Ginger, garlic and classic curry pastes for consistent flavour and fast preparation.'
    },
    pickles: {
      order: 2,
      label: 'Pickles',
      title: 'Pickles & Chutneys',
      desc: 'Traditional pickles and chutneys with bold, tangy and authentic South Asian flavour.'
    },
    sauces: {
      order: 3,
      label: 'Sauces',
      title: 'Sauces',
      desc: 'Chilli, soy, tamarind, mint and table sauces for retail, restaurants and foodservice.'
    }
  };

  function renderGroupedView() {
    const wrap = document.querySelector('.simple-catalogue .wrap');
    const grid = wrap?.querySelector('#simple-product-grid');
    if (!wrap || !grid || wrap.dataset.sauceGrouped === '1') return;

    const cards = [...grid.querySelectorAll('.simple-product-card')];
    if (!cards.length) return;

    const groups = { pastes: [], pickles: [], sauces: [] };
    cards.forEach(card => {
      const title = card.querySelector('h3')?.textContent || '';
      groups[typeFor(title)].push(card);
    });

    const nav = document.createElement('div');
    nav.className = 'sauce-type-nav';
    nav.innerHTML = `
      <div class="sauce-type-nav-copy">
        <span>Browse by type</span>
        <strong>${cards.length} products</strong>
      </div>
      <div class="sauce-type-chips">
        ${Object.entries(typeMeta)
          .sort((a,b)=>a[1].order-b[1].order)
          .map(([key,meta]) => `<a href="#sauce-type-${key}" data-sauce-type="${key}"><span>${meta.label}</span><b>${groups[key].length}</b></a>`)
          .join('')}
      </div>
    `;

    const sections = document.createElement('div');
    sections.className = 'sauce-type-sections';

    Object.entries(typeMeta)
      .sort((a,b)=>a[1].order-b[1].order)
      .forEach(([key,meta],index) => {
        if (!groups[key].length) return;
        const section = document.createElement('section');
        section.className = `sauce-type-section sauce-type-${key}`;
        section.id = `sauce-type-${key}`;
        section.innerHTML = `
          <div class="sauce-type-head">
            <div>
              <span class="sauce-type-kicker">${String(index + 1).padStart(2,'0')} · ${meta.label}</span>
              <h2>${meta.title}</h2>
              <p>${meta.desc}</p>
            </div>
            <span class="sauce-type-count">${groups[key].length} products</span>
          </div>
          <div class="simple-product-grid sauce-type-grid"></div>
        `;
        const sectionGrid = section.querySelector('.sauce-type-grid');
        groups[key].forEach(card => sectionGrid.appendChild(card));
        sections.appendChild(section);
      });

    grid.replaceWith(nav, sections);
    wrap.dataset.sauceGrouped = '1';

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Browse the Shama collection by pastes, pickles & chutneys, and sauces.';
    }

    nav.querySelectorAll('a[data-sauce-type]').forEach(link => {
      link.addEventListener('click', event => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      });
    });
  }

  document.addEventListener('shama:product-simple-rendered', renderGroupedView);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(renderGroupedView, 0), {once:true});
  } else {
    setTimeout(renderGroupedView, 0);
  }
})();