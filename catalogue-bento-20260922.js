(() => {
  'use strict';
  if (document.body.dataset.page !== 'catalogue') return;

  const extraRanges = [
    {
      slug:'laziza',
      name:'Laziza',
      desc:'Recipe masalas, dessert mixes and traditional favourites.',
      href:'laziza.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/Laziza_biryani_masala_100g.png',
      group:'brands'
    },
    {
      slug:'ahmed',
      name:'Ahmed',
      desc:'Sauces, pickles, desserts and pantry favourites.',
      href:'ahmed.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789652169/Ahmed_tamarind_sauce_300g.png',
      group:'brands'
    },
    {
      slug:'agarbatti',
      name:'Agarbatti',
      desc:'Metro and Metromilan incense and traditional fragrance products.',
      href:'agarbatti.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069154/Metro_3_in_1.png',
      group:'lifestyle'
    },
    {
      slug:'dates',
      name:'Dates',
      desc:'Ajwa, Khudri, Safawi, Sukkari and premium dates collection.',
      href:'dates.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069276/Shama_Ajwa-Dates-800g.png',
      group:'food'
    },
    {
      slug:'pataks',
      name:'Pataks',
      desc:'Classic curry pastes and cooking sauces.',
      href:'pataks.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_biryani_paste_2.3kg.png',
      group:'brands'
    },
    {
      slug:'cosmetics',
      name:'Cosmetics',
      desc:'Shama beauty essentials plus trusted personal-care, baby-care and hygiene brands.',
      href:'cosmetics.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Rose_Water_250ml.png',
      group:'cosmetics'
    }
  ];

  const imageOverrides = {
    rice:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789030729/jasmine-5kg.jpg',
    spices:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051986/star_anise.png',
    sauces:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png',
    misc:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678914/Shama_paneer_dodi_phool_100g.png',
    beverages:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231973/Shama_Basil_Seed_Drink_Watermelon.png',
    flour:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232539/shama_wheat_floor_T55_1kg.png',
    frozen:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789463986/Punjabi_Aloo_Potato_Samosa_12Pcs.png',
    oils:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678755/Shama_sunflower_oil_5ltr.png',
    'dry-fruits':'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raw_almonds_100gm.png'
  };

  const coreRanges = (typeof categories !== 'undefined' ? categories : []).map(c => ({
    slug:c.slug,
    name:c.name,
    desc:c.desc,
    href:(typeof fileMap !== 'undefined' && fileMap[c.slug]) || '#',
    image:imageOverrides[c.slug] || c.image,
    group:'food'
  }));

  const ranges = [...coreRanges, ...extraRanges];

  const groupLabel = group => {
    if (group === 'brands') return 'Featured brand';
    if (group === 'lifestyle') return 'Home & fragrance';
    if (group === 'cosmetics') return 'Beauty & personal care';
    return 'Shama range';
  };

  function renderCatalogueStack() {
    const section = document.querySelector('.catalogue-index');
    if (!section) return;

    const heroCopy = document.querySelector('.page-hero > .wrap > p');
    if (heroCopy) {
      heroCopy.textContent = 'Browse every Shama range with full product visuals and direct access to each catalogue.';
    }

    document.querySelectorAll('.catalogue-hero-badge b').forEach(node => {
      node.textContent = String(ranges.length);
    });

    section.innerHTML = `
      <div class="wrap catalogue-layout">
        <div class="catalogue-stack-head">
          <div>
            <span class="eyebrow">Complete catalogue</span>
            <h2>Every range, shown properly.</h2>
          </div>
          <p>Choose a category and open its full product collection. Product visuals stay complete, clear and uncropped.</p>
        </div>

        <div class="catalogue-filter-bar">
          <div class="catalogue-filter-chips">
            <button class="catalogue-filter-chip active" type="button" data-range-filter="all">All ranges</button>
            <button class="catalogue-filter-chip" type="button" data-range-filter="food">Food & pantry</button>
            <button class="catalogue-filter-chip" type="button" data-range-filter="brands">Featured brands</button>
            <button class="catalogue-filter-chip" type="button" data-range-filter="lifestyle">Home & fragrance</button>
            <button class="catalogue-filter-chip" type="button" data-range-filter="cosmetics">Cosmetics</button>
          </div>
          <span class="catalogue-range-count"><b data-visible-ranges>${ranges.length}</b> ranges available</span>
        </div>

        <div class="catalogue-stack">
          ${ranges.map((range,index) => `
            <a class="catalogue-range-card" href="${range.href}" data-range-group="${range.group}">
              <div class="catalogue-range-media">
                <span class="catalogue-range-badge">${String(index + 1).padStart(2,'0')}</span>
                <img src="${range.image}" alt="${range.name}" loading="${index < 4 ? 'eager' : 'lazy'}">
              </div>

              <div class="catalogue-range-content">
                <div class="catalogue-range-meta">
                  <span class="catalogue-range-tag">${groupLabel(range.group)}</span>
                </div>

                <h3 class="catalogue-range-title">${range.name}</h3>
                <p class="catalogue-range-desc">${range.desc}</p>

                <div class="catalogue-range-actions">
                  <span class="catalogue-range-link">Explore range <span>↗</span></span>
                  <span class="catalogue-range-note">Direct category access</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    `;

    const chips = section.querySelectorAll('[data-range-filter]');
    const cards = section.querySelectorAll('.catalogue-range-card');
    const count = section.querySelector('[data-visible-ranges]');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.dataset.rangeFilter;
        chips.forEach(x => x.classList.toggle('active', x === chip));

        let visible = 0;
        cards.forEach(card => {
          const show = filter === 'all' || card.dataset.rangeGroup === filter;
          card.classList.toggle('is-hidden', !show);
          if (show) visible++;
        });

        if (count) count.textContent = visible;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCatalogueStack, {once:true});
  } else {
    renderCatalogueStack();
  }
})();