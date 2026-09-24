(() => {
  'use strict';
  if (document.body.dataset.category !== 'rice') return;

  const GROUPS = [
    { key:'shama-sella', label:'Shama Sella Rice', short:'Shama Sella', note:'Shama Super Kernal Parboiled Sella rice range' },
    { key:'shama-extra-long', label:'Shama Extra Long Rice', short:'Shama Extra Long', note:'Shama extra long basmati rice range' },
    { key:'shama-white-gold', label:'Shama White Gold Rice', short:'Shama White Gold', note:'Shama White Gold basmati rice range' },
    { key:'shama-thai-jasmine', label:'Shama Thai Jasmine Rice', short:'Shama Thai Jasmine', note:'Shama Thai Long Grain Jasmine AAA rice range' },
    { key:'shama-other', label:'Shama Broken / Other Shama Rice', short:'Broken / Other Shama', note:'Shama broken jasmine, broken basmati and other Shama rice varieties' },
    { key:'shaheen', label:'Shaheen Rice', short:'Shaheen', note:'Shaheen premium sella basmati rice range' },
    { key:'sunrise-extra-long', label:'Sunrise Extra Long Rice', short:'Sunrise Extra Long', note:'Sunrise extra long basmati rice range' },
    { key:'sunrise-golden-sella', label:'Sunrise Golden Sella Rice', short:'Sunrise Golden Sella', note:'Sunrise Golden Sella basmati rice range' },
    { key:'sunrise-jasmine', label:'Sunrise Jasmine Rice', short:'Sunrise Jasmine', note:'Sunrise fragrant and Dragon jasmine rice range' },
    { key:'sunrise-broken-jasmine', label:'Sunrise Broken Jasmine Rice', short:'Sunrise Broken Jasmine', note:'Sunrise Elephant broken jasmine rice range' }
  ];

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[ch]);

  function keyForTitle(title) {
    const value = String(title || '').trim();

    // Sunrise ranges
    if (/^Sunrise\b.*Broken\s+Rice/i.test(value)) return 'sunrise-broken-jasmine';
    if (/^Sunrise\b.*Golden\s+Sella/i.test(value)) return 'sunrise-golden-sella';
    if (/^Sunrise\b.*Extra\s*Long/i.test(value)) return 'sunrise-extra-long';
    if (/^Sunrise\b/i.test(value)) return 'sunrise-jasmine';

    // Shaheen
    if (/^Shaheen\b/i.test(value)) return 'shaheen';

    // Shama ranges
    if (/^Shama\s+Super\s+Kernal.*Parboiled\s+Sella\s+Rice/i.test(value)) return 'shama-sella';
    if (/^Shama\b.*Extra\s*Long/i.test(value)) return 'shama-extra-long';
    if (/^Shama\s+White\s+Gold\b/i.test(value)) return 'shama-white-gold';
    if (/^Shama\b.*Thai.*Jasmin/i.test(value) && !/Broken/i.test(value)) return 'shama-thai-jasmine';
    if (/^Shama\b/i.test(value)) return 'shama-other';

    return 'shama-other';
  }

  function organise() {
    const catalogue = document.querySelector('.simple-catalogue');
    const wrap = catalogue?.querySelector('.wrap');
    const grid = wrap?.querySelector('#simple-product-grid');
    if (!wrap || !grid) return false;
    if (wrap.dataset.riceGrouped === 'true') return true;

    const cards = Array.from(grid.querySelectorAll(':scope > .simple-product-card'));
    if (!cards.length) return false;

    const grouped = Object.fromEntries(GROUPS.map(group => [group.key, []]));
    cards.forEach(card => {
      const title = card.querySelector('.simple-product-content h3')?.textContent || '';
      const key = keyForTitle(title);
      card.dataset.riceGroup = key;
      grouped[key].push(card);
    });

    const controls = document.createElement('div');
    controls.className = 'rice-category-controls';
    controls.innerHTML = `
      <div class="rice-category-intro">
        <div>
          <span class="rice-category-kicker">Browse by rice category</span>
          <h2>Choose your rice range.</h2>
        </div>
        <p>Shama is shown first in five clear ranges, followed by Shaheen and four separate Sunrise rice ranges.</p>
      </div>
      <div class="rice-category-tabs" role="tablist" aria-label="Rice categories">
        <button class="rice-category-tab active" type="button" data-rice-filter="all" aria-pressed="true">
          <span>All Rice</span><b>${cards.length}</b>
        </button>
        ${GROUPS.map(group => `
          <button class="rice-category-tab" type="button" data-rice-filter="${group.key}" aria-pressed="false">
            <span>${esc(group.short)}</span><b>${grouped[group.key].length}</b>
          </button>
        `).join('')}
      </div>
    `;

    const sections = document.createElement('div');
    sections.className = 'rice-category-sections';

    GROUPS.forEach((group, index) => {
      if (!grouped[group.key].length) return;

      const section = document.createElement('section');
      section.className = 'rice-category-section';
      section.dataset.riceSection = group.key;
      section.innerHTML = `
        <div class="rice-category-head">
          <div>
            <span class="rice-category-number">${String(index + 1).padStart(2,'0')}</span>
            <div>
              <span class="rice-category-label">Rice category</span>
              <h2>${esc(group.label)}</h2>
              <p>${esc(group.note)}</p>
            </div>
          </div>
          <span class="rice-category-count">${grouped[group.key].length} products</span>
        </div>
        <div class="simple-product-grid rice-category-grid"></div>
      `;

      const sectionGrid = section.querySelector('.rice-category-grid');
      grouped[group.key].forEach((card, cardIndex) => {
        const number = card.querySelector('.simple-product-index');
        if (number) number.textContent = String(cardIndex + 1).padStart(2,'0');
        sectionGrid.appendChild(card);
      });

      sections.appendChild(section);
    });

    grid.replaceWith(sections);
    wrap.prepend(controls);
    wrap.dataset.riceGrouped = 'true';

    const tabs = Array.from(controls.querySelectorAll('[data-rice-filter]'));
    const allSections = Array.from(sections.querySelectorAll('[data-rice-section]'));

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.riceFilter;
        tabs.forEach(item => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });

        allSections.forEach(section => {
          section.hidden = filter !== 'all' && section.dataset.riceSection !== filter;
        });

        const firstVisible = allSections.find(section => !section.hidden);
        if (firstVisible && filter !== 'all') {
          firstVisible.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });

    document.dispatchEvent(new CustomEvent('shama:rice-groups-ready'));
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
    if (wrap) delete wrap.dataset.riceGrouped;
    setTimeout(organise, 0);
  });
})();