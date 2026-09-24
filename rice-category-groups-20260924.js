(() => {
  'use strict';
  if (document.body.dataset.category !== 'rice') return;

  const GROUPS = [
    { key:'shama-sella', label:'Shama Sella Rice', short:'Shama Sella', note:'Shama sella rice range' },
    { key:'extra-long', label:'Extra Long Rice', short:'Extra Long', note:'Shama extra long basmati range' },
    { key:'other-shama', label:'Other Shama Rice', short:'Other Shama', note:'All remaining Shama rice varieties' },
    { key:'sunrise', label:'Sunrise Rice', short:'Sunrise', note:'Complete Sunrise rice range' }
  ];

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[ch]);

  function keyForTitle(title) {
    const value = String(title || '').trim();
    if (/^Sunrise\b/i.test(value)) return 'sunrise';
    if (/^Shama\s+Super\s+Kernal.*Parboiled\s+Sella\s+Rice/i.test(value)) return 'shama-sella';
    if (/^Shama\b.*Extra\s*Long/i.test(value) || /^Shama\b.*extra\s*Long/i.test(value)) return 'extra-long';
    if (/^Shama\b/i.test(value)) return 'other-shama';
    return 'other-shama';
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
        <p>Shama ranges are shown first in the requested order, followed by the complete Sunrise collection.</p>
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