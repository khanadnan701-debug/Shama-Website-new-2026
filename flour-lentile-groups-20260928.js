(() => {
  'use strict';
  if (document.body.dataset.category !== 'flour') return;

  const GROUPS = [
    {
      key:'flour',
      label:'Flour',
      short:'Flour',
      note:'Atta, wheat flour, rice flour, gram flour, semoule and corn flour.'
    },
    {
      key:'lentiles',
      label:'Lentiles',
      short:'Lentiles',
      note:'Lentiles, beans, chickpeas, peas and other pulses.'
    }
  ];

  const isFlour = title => /\b(atta|flour|besan|semoule|semolina|corn flour|wheat flour|rice flour)\b/i.test(title || '');

  function keyForTitle(title) {
    return isFlour(title) ? 'flour' : 'lentiles';
  }

  function organise() {
    const catalogue = document.querySelector('.simple-catalogue');
    const wrap = catalogue?.querySelector('.wrap');
    const grid = wrap?.querySelector('#simple-product-grid');
    if (!wrap || !grid) return false;
    if (wrap.dataset.flourGrouped === 'true') return true;

    const cards = Array.from(grid.querySelectorAll(':scope > .simple-product-card'));
    if (!cards.length) return false;

    const grouped = Object.fromEntries(GROUPS.map(group => [group.key, []]));

    cards.forEach(card => {
      const title = card.querySelector('.simple-product-content h3')?.textContent || '';
      const key = keyForTitle(title);
      card.dataset.flourGroup = key;
      grouped[key].push(card);
    });

    const controls = document.createElement('div');
    controls.className = 'rice-category-controls';
    controls.innerHTML = `
      <div class="rice-category-intro">
        <div>
          <span class="rice-category-kicker">Browse by category</span>
          <h2>Choose your range.</h2>
        </div>
        <p>Flour and Lentiles are shown in two clear sections, using the same catalogue layout as the Rice page.</p>
      </div>
      <div class="rice-category-tabs" role="tablist" aria-label="Flour and Lentiles categories">
        <button class="rice-category-tab active" type="button" data-flour-filter="all" aria-pressed="true">
          <span>All Products</span><b>${cards.length}</b>
        </button>
        ${GROUPS.map(group => `
          <button class="rice-category-tab" type="button" data-flour-filter="${group.key}" aria-pressed="false">
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
      section.dataset.flourSection = group.key;
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
    wrap.dataset.flourGrouped = 'true';

    const tabs = Array.from(controls.querySelectorAll('[data-flour-filter]'));
    const allSections = Array.from(sections.querySelectorAll('[data-flour-section]'));

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.flourFilter;

        tabs.forEach(item => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });

        allSections.forEach(section => {
          section.hidden = filter !== 'all' && section.dataset.flourSection !== filter;
        });

        const firstVisible = allSections.find(section => !section.hidden);
        if (firstVisible && filter !== 'all') {
          firstVisible.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Browse Flour and Lentiles in two clear product ranges.';
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
    if (wrap) delete wrap.dataset.flourGrouped;
    setTimeout(organise, 0);
  });
})();