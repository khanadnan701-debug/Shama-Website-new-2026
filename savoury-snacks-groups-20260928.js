(() => {
  'use strict';
  if (document.body.dataset.category !== 'savoury-snacks') return;

  const GROUPS = [
    {
      key:'shama',
      label:'Shama Snacks',
      short:'Shama',
      note:'Shama roasted snacks, makhana, papdi, wadi, laddus and chikki.'
    },
    {
      key:'bikaneri',
      label:'Bikaneri Bites',
      short:'Bikaneri Bites',
      note:'Namkeen, mixtures, bhujia, sev, peanuts, boondi and traditional savoury favourites.'
    },
    {
      key:'kurkure',
      label:'Kurkure',
      short:'Kurkure',
      note:'Crunchy Kurkure snacks in classic and spicy flavours.'
    },
    {
      key:'lays',
      label:"Lay's",
      short:"Lay's",
      note:'Classic and flavoured potato chips.'
    },
    {
      key:'other',
      label:'Other Savoury Snacks',
      short:'Other',
      note:'Additional savoury snack selections and assorted products.'
    }
  ];

  function keyForTitle(title) {
    const value = String(title || '').trim();
    if (/^Shama\b/i.test(value)) return 'shama';
    if (/^Bikaneri\s+Bites\b/i.test(value)) return 'bikaneri';
    if (/^Kurkure\b/i.test(value)) return 'kurkure';
    if (/^Lay['’]?s\b/i.test(value)) return 'lays';
    return 'other';
  }

  function organise() {
    const catalogue = document.querySelector('.simple-catalogue');
    const wrap = catalogue?.querySelector('.wrap');
    const grid = wrap?.querySelector('#simple-product-grid');
    if (!wrap || !grid) return false;
    if (wrap.dataset.savouryGrouped === 'true') return true;

    const cards = Array.from(grid.querySelectorAll(':scope > .simple-product-card'));
    if (!cards.length) return false;

    const grouped = Object.fromEntries(GROUPS.map(group => [group.key, []]));

    cards.forEach(card => {
      const title = card.querySelector('.simple-product-content h3')?.textContent || '';
      const key = keyForTitle(title);
      card.dataset.savouryGroup = key;
      grouped[key].push(card);
    });

    const controls = document.createElement('div');
    controls.className = 'rice-category-controls';
    controls.innerHTML = `
      <div class="rice-category-intro">
        <div>
          <span class="rice-category-kicker">Browse by category</span>
          <h2>Choose your snack range.</h2>
        </div>
        <p>Shama is shown first, followed by Bikaneri Bites, Kurkure, Lay's and other savoury snacks.</p>
      </div>
      <div class="rice-category-tabs" role="tablist" aria-label="Savoury snack categories">
        <button class="rice-category-tab active" type="button" data-savoury-filter="all" aria-pressed="true">
          <span>All Products</span><b>${cards.length}</b>
        </button>
        ${GROUPS.map(group => `
          <button class="rice-category-tab" type="button" data-savoury-filter="${group.key}" aria-pressed="false">
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
      section.dataset.savourySection = group.key;
      section.innerHTML = `
        <div class="rice-category-head">
          <div>
            <span class="rice-category-number">${String(index + 1).padStart(2,'0')}</span>
            <div>
              <span class="rice-category-label">Snack category</span>
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
    wrap.dataset.savouryGrouped = 'true';

    const tabs = Array.from(controls.querySelectorAll('[data-savoury-filter]'));
    const allSections = Array.from(sections.querySelectorAll('[data-savoury-section]'));

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.savouryFilter;

        tabs.forEach(item => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });

        allSections.forEach(section => {
          section.hidden = filter !== 'all' && section.dataset.savourySection !== filter;
        });

        const firstVisible = allSections.find(section => !section.hidden);
        if (firstVisible && filter !== 'all') {
          firstVisible.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Browse Shama, Bikaneri Bites, Kurkure, Lay\'s and other savoury snack ranges by category.';
    }

    return true;
  }

  function boot() {
    if (organise()) return;
    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      if (organise() || attempts > 30) clearInterval(timer);
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, {once:true});
  } else {
    boot();
  }

  document.addEventListener('shama:product-simple-rendered', () => {
    const wrap = document.querySelector('.simple-catalogue .wrap');
    if (wrap) delete wrap.dataset.savouryGrouped;
    setTimeout(organise, 0);
  });
})();