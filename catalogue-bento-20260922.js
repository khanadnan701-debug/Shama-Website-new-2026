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
      tone:'peach'
    },
    {
      slug:'ahmed',
      name:'Ahmed',
      desc:'Sauces, pickles, desserts and pantry favourites.',
      href:'ahmed.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789652169/Ahmed_tamarind_sauce_300g.png',
      tone:'mint'
    },
    {
      slug:'agarbatti',
      name:'Agarbatti',
      desc:'Metro and Metromilan incense and traditional fragrance products.',
      href:'agarbatti.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069154/Metro_3_in_1.png',
      tone:'lavender'
    },
    {
      slug:'dates',
      name:'Dates',
      desc:'Ajwa, Khudri, Safawi, Sukkari and premium dates collection.',
      href:'dates.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069276/Shama_Ajwa-Dates-800g.png',
      tone:'sand'
    },
    {
      slug:'pataks',
      name:'Pataks',
      desc:'Classic curry pastes and cooking sauces.',
      href:'pataks.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_biryani_paste_2.3kg.png',
      tone:'rose'
    },
    {
      slug:'cosmetics',
      name:'Cosmetics',
      desc:'Beauty, personal care and hygiene essentials.',
      href:'cosmetics.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Rose_Water_250ml.png',
      tone:'sky'
    }
  ];

  const imageOverrides = {
    rice:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242901/5kg_2.png',
    spices:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051986/star_anise.png',
    sauces:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png',
    misc:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678914/Shama_paneer_dodi_phool_100g.png',
    beverages:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231973/Shama_Basil_Seed_Drink_Watermelon.png',
    flour:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232539/shama_wheat_floor_T55_1kg.png',
    frozen:'assets/frozen/shama-chicken-samosa-20.webp',
    oils:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678755/Shama_sunflower_oil_5ltr.png',
    'dry-fruits':'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raw_almonds_100gm.png'
  };

  const tones = ['sky','peach','mint','sand','lavender','rose'];

  const coreRanges = (typeof categories !== 'undefined' ? categories : []).map((c,index) => ({
    slug:c.slug,
    name:c.name,
    desc:c.desc,
    href:(typeof fileMap !== 'undefined' && fileMap[c.slug]) || '#',
    image:imageOverrides[c.slug] || c.image,
    tone:tones[index % tones.length]
  }));

  const ranges = [...coreRanges, ...extraRanges.filter(extra => !coreRanges.some(core => core.slug === extra.slug))];

  const bySlug = slug => ranges.find(item => item.slug === slug) || ranges[0];

  function render() {
    const main = document.querySelector('#page-content');
    if (!main) return;

    const heroMain = bySlug('rice');
    const heroSpices = bySlug('spices');
    const heroFrozen = bySlug('frozen');
    const chickenSamosaImage = 'assets/frozen/shama-chicken-samosa-20.webp';

    main.innerHTML = `
      <section class="grocery-catalogue">
        <div class="wrap grocery-catalogue-wrap">

          <div class="catalogue-toolbar">
            <div class="catalogue-toolbar-copy">
              <span class="catalogue-mini-label">Shama International</span>
              <h1>Shop the Shama catalogue.</h1>
            </div>

            <label class="catalogue-search">
              <span class="catalogue-search-icon" aria-hidden="true">⌕</span>
              <input id="catalogue-search-input" type="search" placeholder="Search categories..." autocomplete="off">
            </label>
          </div>

          <div class="grocery-promo-grid">
            <a class="grocery-promo-main" href="${heroMain.href}">
              <div class="grocery-promo-copy">
                <span class="grocery-offer">Authentic quality</span>
                <h2>Premium rice for every table.</h2>
                <p>Discover Shama rice selected for homes, restaurants and wholesale customers.</p>
                <span class="grocery-cta">Shop rice <b>→</b></span>
              </div>
              <div class="grocery-promo-media">
                <span class="grocery-promo-blob"></span>
                <img src="${heroMain.image}" alt="${heroMain.name}">
              </div>
              <div class="grocery-promo-dots" aria-hidden="true"><i class="active"></i><i></i><i></i></div>
            </a>

            <div class="grocery-promo-side">
              <a class="grocery-mini-card green" href="${heroSpices.href}">
                <div class="grocery-mini-copy">
                  <span class="grocery-discount">Full flavour</span>
                  <h3>Spices &amp;<br>Masalas</h3>
                  <small>Explore collection →</small>
                </div>
                <img src="${heroSpices.image}" alt="${heroSpices.name}">
              </a>

              <a class="grocery-mini-card pink" href="${heroFrozen.href}">
                <div class="grocery-mini-copy">
                  <span class="grocery-discount">Ready to cook</span>
                  <h3>Frozen<br>Favourites</h3>
                  <small>Explore collection →</small>
                </div>
                <img src="${chickenSamosaImage}" alt="Shama Chicken Samosa">
              </a>
            </div>
          </div>

          <section class="grocery-category-section">
            <div class="grocery-category-head">
              <div>
                <span class="catalogue-mini-label">Browse the range</span>
                <h2>Categories</h2>
              </div>
              <button class="grocery-view-all" type="button" id="catalogue-view-all">View all categories <span>→</span></button>
            </div>

            <div class="grocery-category-strip" id="catalogue-category-strip">
              ${ranges.map((range,index) => `
                <a class="grocery-category-card tone-${range.tone}" href="${range.href}" data-search="${(range.name + ' ' + range.desc).toLowerCase()}">
                  <span class="grocery-category-image">
                    <img src="${range.image}" alt="${range.name}" loading="${index < 7 ? 'eager' : 'lazy'}">
                  </span>
                  <strong>${range.name}</strong>
                  <small>${range.desc}</small>
                </a>
              `).join('')}
            </div>
          </section>

          <section class="grocery-all-ranges" id="catalogue-all-ranges">
            <div class="grocery-all-ranges-head">
              <span class="catalogue-mini-label">Complete catalogue</span>
              <h2>Explore every Shama range.</h2>
              <p>Open any category to view its full product collection, pack sizes and wholesale ordering options.</p>
            </div>

            <div class="grocery-range-grid">
              ${ranges.map((range,index) => `
                <a class="grocery-range-tile tone-${range.tone}" href="${range.href}" data-search="${(range.name + ' ' + range.desc).toLowerCase()}">
                  <span class="grocery-range-number">${String(index + 1).padStart(2,'0')}</span>
                  <div class="grocery-range-image"><img src="${range.image}" alt="${range.name}" loading="lazy"></div>
                  <div class="grocery-range-copy">
                    <h3>${range.name}</h3>
                    <p>${range.desc}</p>
                    <span>Shop category ↗</span>
                  </div>
                </a>
              `).join('')}
            </div>
          </section>

          <section class="grocery-help">
            <div>
              <span class="catalogue-mini-label light">Wholesale support</span>
              <h2>Need help choosing products?</h2>
              <p>Tell us what you need and our team will help with availability, MOQ and delivery.</p>
            </div>
            <a href="contact.html">Talk to our team <span>↗</span></a>
          </section>
        </div>
      </section>
    `;

    const input = main.querySelector('#catalogue-search-input');
    const searchable = [...main.querySelectorAll('[data-search]')];

    const applySearch = () => {
      const query = (input?.value || '').trim().toLowerCase();
      searchable.forEach(card => {
        card.classList.toggle('is-search-hidden', !!query && !card.dataset.search.includes(query));
      });
    };

    if (input) input.addEventListener('input', applySearch);

    const viewAll = main.querySelector('#catalogue-view-all');
    const allRanges = main.querySelector('#catalogue-all-ranges');
    if (viewAll && allRanges) {
      viewAll.addEventListener('click', () => allRanges.scrollIntoView({behavior:'smooth',block:'start'}));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, {once:true});
  } else {
    render();
  }
})();