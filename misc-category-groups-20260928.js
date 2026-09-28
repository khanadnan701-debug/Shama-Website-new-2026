(() => {
  'use strict';
  if (document.body.dataset.category !== 'misc') return;

  const GROUPS = [
    {
      key:'pantry',
      label:'Pantry Essentials',
      short:'Pantry',
      note:'Shakkar, jaggery, tamarind, fried onions, roasted chana, vermicelli and everyday pantry products.'
    },
    {
      key:'mango-pulp',
      label:'Mango Pulp',
      short:'Mango Pulp',
      note:'Kesar and Alphonso mango pulp for drinks, desserts and foodservice.'
    },
    {
      key:'salts-seasonings',
      label:'Salts & Seasonings',
      short:'Salts',
      note:'Himalayan pink salt, black salt and black pepper.'
    },
    {
      key:'juices-sauces',
      label:'Juices, Vinegar & Sauces',
      short:'Juices & Sauces',
      note:'Lemon and lime products, vinegar, dressings and mint sauce.'
    },
    {
      key:'floral-waters',
      label:'Floral Waters',
      short:'Floral Waters',
      note:'Rose water and kewra water.'
    },
    {
      key:'baking',
      label:'Baking',
      short:'Baking',
      note:'Baking powder and baking soda.'
    },
    {
      key:'mouth-sweets',
      label:'Mouth Fresheners & Sweets',
      short:'Fresheners',
      note:'Mouth freshener, sweet fennel seed and traditional rewari.'
    },
    {
      key:'essences',
      label:'Flavour Essences',
      short:'Essences',
      note:'Banana, almond, vanilla, rose and pineapple flavour essences.'
    }
  ];

  function keyForTitle(title) {
    const value = String(title || '').trim().toLowerCase();

    if (/mango\s+pulp/.test(value)) return 'mango-pulp';
    if (/salt|black\s+pepper/.test(value)) return 'salts-seasonings';
    if (/lemon\s+dressing|lemon\s+juice|lime\s+juice|vinegar|mint\s+sauce/.test(value)) return 'juices-sauces';
    if (/rose\s+water|kewra\s+water/.test(value)) return 'floral-waters';
    if (/baking\s+powder|baking\s+soda/.test(value)) return 'baking';
    if (/mouth\s+freshener|sweet\s+fennel|rewari/.test(value)) return 'mouth-sweets';
    if (/flavour\s+essence/.test(value)) return 'essences';
    return 'pantry';
  }

  function brandForTitle(title) {
    const value = String(title || '').trim();
    if (/^Shama\b/i.test(value)) return 'Shama';
    if (/^Kody\b/i.test(value)) return 'Kody';
    if (/^Schani\b/i.test(value)) return 'Schani';
    return 'Other';
  }

  function brandRank(title) {
    const brand = brandForTitle(title);
    if (brand === 'Shama') return 0;
    if (brand === 'Kody') return 1;
    if (brand === 'Schani') return 2;
    return 9;
  }

  function organise() {
    const wrap = document.querySelector('.simple-catalogue .wrap');
    const grid = wrap?.querySelector('#simple-product-grid');
    if (!wrap || !grid) return false;
    if (wrap.dataset.miscGrouped === 'true') return true;

    const cards = Array.from(grid.querySelectorAll(':scope > .simple-product-card'));
    if (!cards.length) return false;

    const grouped = Object.fromEntries(GROUPS.map(group => [group.key, []]));

    cards.forEach(card => {
      const title = card.querySelector('.simple-product-content h3')?.textContent || '';
      const key = keyForTitle(title);
      grouped[key].push(card);
      card.dataset.miscGroup = key;

      const meta = card.querySelector('.simple-product-meta');
      if (meta) meta.textContent = brandForTitle(title);
    });

    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a,b) => {
        const at = a.querySelector('.simple-product-content h3')?.textContent || '';
        const bt = b.querySelector('.simple-product-content h3')?.textContent || '';
        const rank = brandRank(at) - brandRank(bt);
        return rank || at.localeCompare(bt);
      });
    });

    const controls = document.createElement('div');
    controls.className = 'rice-category-controls';
    controls.innerHTML = `
      <div class="rice-category-intro">
        <div>
          <span class="rice-category-kicker">Browse by category</span>
          <h2>Choose your product range.</h2>
        </div>
        <p>Miscellaneous products are now arranged in clear sections, with Shama products kept first inside each category.</p>
      </div>
      <div class="rice-category-tabs" role="tablist" aria-label="Miscellaneous categories">
        <button class="rice-category-tab active" type="button" data-misc-filter="all" aria-pressed="true">
          <span>All Products</span><b>${cards.length}</b>
        </button>
        ${GROUPS.map(group => `
          <button class="rice-category-tab" type="button" data-misc-filter="${group.key}" aria-pressed="false">
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
      section.dataset.miscSection = group.key;
      section.innerHTML = `
        <div class="rice-category-head">
          <div>
            <span class="rice-category-number">${String(index + 1).padStart(2,'0')}</span>
            <div>
              <span class="rice-category-label">Product category</span>
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
    wrap.dataset.miscGrouped = 'true';

    const tabs = Array.from(controls.querySelectorAll('[data-misc-filter]'));
    const allSections = Array.from(sections.querySelectorAll('[data-misc-section]'));

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.miscFilter;

        tabs.forEach(item => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });

        allSections.forEach(section => {
          section.hidden = filter !== 'all' && section.dataset.miscSection !== filter;
        });

        const firstVisible = allSections.find(section => !section.hidden);
        if (firstVisible && filter !== 'all') {
          firstVisible.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Browse pantry essentials, mango pulp, salts, juices, floral waters, baking products, fresheners and flavour essences by category.';
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
    if (wrap) delete wrap.dataset.miscGrouped;
    setTimeout(organise, 0);
  });
})();