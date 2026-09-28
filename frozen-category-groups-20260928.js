(() => {
  'use strict';
  if (document.body.dataset.category !== 'frozen') return;

  const GROUPS = [
    {
      key:'samosa',
      label:'Samosa',
      short:'Samosa',
      note:'Vegetable, chicken, lamb and Punjabi-style frozen samosa selections.'
    },
    {
      key:'spring-rolls',
      label:'Spring Rolls',
      short:'Spring Rolls',
      note:'Vegetable, chicken and lamb frozen spring rolls.'
    },
    {
      key:'kebabs',
      label:'Kebabs',
      short:'Kebabs',
      note:'Lahori-style chicken and meat charcoal seekh kebabs.'
    },
    {
      key:'paratha',
      label:'Paratha',
      short:'Paratha',
      note:'Shama and Mazedar frozen paratha varieties.'
    },
    {
      key:'veg-fruit',
      label:'Frozen Vegetables & Fruits',
      short:'Veg & Fruits',
      note:'Frozen okra, green chilli, karela and fruit selections.'
    }
  ];

  function keyForTitle(title) {
    const value = String(title || '').trim();
    if (/samosa/i.test(value)) return 'samosa';
    if (/spring\s*roll/i.test(value)) return 'spring-rolls';
    if (/kebab|seekh/i.test(value)) return 'kebabs';
    if (/paratha/i.test(value)) return 'paratha';
    return 'veg-fruit';
  }

  function brandForTitle(title) {
    const value = String(title || '').trim();
    if (/^Shama\b/i.test(value)) return 'Shama';
    if (/^Mazedar\b/i.test(value)) return 'Mazedar';
    if (/^Punjabi\b/i.test(value)) return 'Punjabi';
    return 'Other';
  }

  function brandRank(title) {
    const brand = brandForTitle(title);
    if (brand === 'Shama') return 0;
    if (brand === 'Mazedar') return 1;
    if (brand === 'Punjabi') return 2;
    return 9;
  }

  function organise() {
    const wrap = document.querySelector('.simple-catalogue .wrap');
    const grid = wrap?.querySelector('#simple-product-grid');
    if (!wrap || !grid) return false;
    if (wrap.dataset.frozenGrouped === 'true') return true;

    const cards = Array.from(grid.querySelectorAll(':scope > .simple-product-card'));
    if (!cards.length) return false;

    const grouped = Object.fromEntries(GROUPS.map(group => [group.key, []]));

    cards.forEach(card => {
      const title = card.querySelector('.simple-product-content h3')?.textContent || '';
      const key = keyForTitle(title);
      grouped[key].push(card);
      card.dataset.frozenGroup = key;

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
          <h2>Choose your frozen range.</h2>
        </div>
        <p>Frozen products are separated into Samosa, Spring Rolls, Kebabs, Paratha and Vegetables & Fruits, with Shama shown first inside each range.</p>
      </div>
      <div class="rice-category-tabs" role="tablist" aria-label="Frozen categories">
        <button class="rice-category-tab active" type="button" data-frozen-filter="all" aria-pressed="true">
          <span>All Products</span><b>${cards.length}</b>
        </button>
        ${GROUPS.map(group => `
          <button class="rice-category-tab" type="button" data-frozen-filter="${group.key}" aria-pressed="false">
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
      section.dataset.frozenSection = group.key;
      section.innerHTML = `
        <div class="rice-category-head">
          <div>
            <span class="rice-category-number">${String(index + 1).padStart(2,'0')}</span>
            <div>
              <span class="rice-category-label">Frozen category</span>
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
    wrap.dataset.frozenGrouped = 'true';

    const tabs = Array.from(controls.querySelectorAll('[data-frozen-filter]'));
    const allSections = Array.from(sections.querySelectorAll('[data-frozen-section]'));

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.frozenFilter;

        tabs.forEach(item => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });

        allSections.forEach(section => {
          section.hidden = filter !== 'all' && section.dataset.frozenSection !== filter;
        });

        const firstVisible = allSections.find(section => !section.hidden);
        if (firstVisible && filter !== 'all') {
          firstVisible.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Browse Samosa, Spring Rolls, Kebabs, Paratha and Frozen Vegetables & Fruits by category.';
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

  // product-simple.js runs immediately before this script and has already
  // built the simple catalogue grid, so group it right away.
  boot();

  document.addEventListener('shama:product-simple-rendered', () => {
    const wrap = document.querySelector('.simple-catalogue .wrap');
    if (wrap) delete wrap.dataset.frozenGrouped;
    setTimeout(organise, 0);
  });
})();