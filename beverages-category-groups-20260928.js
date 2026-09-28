(() => {
  'use strict';
  if (document.body.dataset.category !== 'beverages') return;

  const GROUPS = [
    {
      key:'falooda',
      label:'Falooda',
      short:'Falooda',
      note:'Shama Falooda drinks in mango, rose, strawberry, banana, almond and vanilla flavours.'
    },
    {
      key:'basil-seed',
      label:'Basil Seed Drinks',
      short:'Basil Seed',
      note:'Shama Basil Seed drinks in cocktail, pomegranate, pineapple, watermelon, mango, passion, lychee and strawberry.'
    },
    {
      key:'coconut-milk',
      label:'Coconut Milk Drinks',
      short:'Coconut Milk',
      note:'Shama Coconut Milk drinks in original and mango flavours.'
    },
    {
      key:'sunrise',
      label:'Sunrise Drinks',
      short:'Sunrise',
      note:'Sunrise fruit and almond drinks grouped together.'
    }
  ];

  function keyForTitle(title) {
    const value = String(title || '').trim();
    if (/^Shama\s+Falooda\b/i.test(value)) return 'falooda';
    if (/^Shama\s+Basil\s+Seed\s+Drink\b/i.test(value)) return 'basil-seed';
    if (/^Shama\s+Coconut\s+Milk\s+Drink\b/i.test(value)) return 'coconut-milk';
    if (/^Sunrise\b/i.test(value)) return 'sunrise';
    return 'coconut-milk';
  }

  function organise() {
    const wrap = document.querySelector('.simple-catalogue .wrap');
    const grid = wrap?.querySelector('#simple-product-grid');
    if (!wrap || !grid) return false;
    if (wrap.dataset.beverageGrouped === 'true') return true;

    const cards = Array.from(grid.querySelectorAll(':scope > .simple-product-card'));
    if (!cards.length) return false;

    const grouped = Object.fromEntries(GROUPS.map(group => [group.key, []]));

    cards.forEach(card => {
      const title = card.querySelector('.simple-product-content h3')?.textContent || '';
      const key = keyForTitle(title);
      card.dataset.beverageGroup = key;
      grouped[key].push(card);

      const meta = card.querySelector('.simple-product-meta');
      if (meta) {
        meta.textContent = key === 'sunrise' ? 'Sunrise' : 'Shama';
      }
    });

    const controls = document.createElement('div');
    controls.className = 'rice-category-controls';
    controls.innerHTML = `
      <div class="rice-category-intro">
        <div>
          <span class="rice-category-kicker">Browse by drink type</span>
          <h2>Choose your beverage range.</h2>
        </div>
        <p>Falooda and Basil Seed drinks are shown separately, followed by Coconut Milk and Sunrise drinks.</p>
      </div>
      <div class="rice-category-tabs" role="tablist" aria-label="Beverage categories">
        <button class="rice-category-tab active" type="button" data-beverage-filter="all" aria-pressed="true">
          <span>All Products</span><b>${cards.length}</b>
        </button>
        ${GROUPS.map(group => `
          <button class="rice-category-tab" type="button" data-beverage-filter="${group.key}" aria-pressed="false">
            <span>${group.short}</span><b>${grouped[group.key].length}</b>
          </button>
        `).join('')}
      </div>
    `;

    const sections = document.createElement('div');
    sections.className = 'rice-category-sections';

    GROUPS.forEach((group,index) => {
      if (!grouped[group.key].length) return;

      const section = document.createElement('section');
      section.className = 'rice-category-section';
      section.dataset.beverageSection = group.key;
      section.innerHTML = `
        <div class="rice-category-head">
          <div>
            <span class="rice-category-number">${String(index + 1).padStart(2,'0')}</span>
            <div>
              <span class="rice-category-label">Beverage category</span>
              <h2>${group.label}</h2>
              <p>${group.note}</p>
            </div>
          </div>
          <span class="rice-category-count">${grouped[group.key].length} products</span>
        </div>
        <div class="simple-product-grid rice-category-grid"></div>
      `;

      const sectionGrid = section.querySelector('.rice-category-grid');
      grouped[group.key].forEach((card,cardIndex) => {
        const number = card.querySelector('.simple-product-index');
        if (number) number.textContent = String(cardIndex + 1).padStart(2,'0');
        sectionGrid.appendChild(card);
      });

      sections.appendChild(section);
    });

    grid.replaceWith(sections);
    wrap.prepend(controls);
    wrap.dataset.beverageGrouped = 'true';

    const tabs = Array.from(controls.querySelectorAll('[data-beverage-filter]'));
    const allSections = Array.from(sections.querySelectorAll('[data-beverage-section]'));

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.beverageFilter;

        tabs.forEach(item => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });

        allSections.forEach(section => {
          section.hidden = filter !== 'all' && section.dataset.beverageSection !== filter;
        });

        const firstVisible = allSections.find(section => !section.hidden);
        if (firstVisible && filter !== 'all') {
          firstVisible.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Browse Falooda, Basil Seed, Coconut Milk and Sunrise beverage ranges separately.';
    }

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
    if (wrap) delete wrap.dataset.beverageGrouped;
    setTimeout(organise, 0);
  });
})();