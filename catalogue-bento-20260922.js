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
      desc:'Metro, Metromilan and Pure incense collections.',
      href:'agarbatti.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790934647/Metro_Black_Sandal_Agarbatti.png',
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
      desc:'Patak\'s curry and marinade pastes.',
      href:'pataks.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033974/Patak_biryani_paste_2.3kg.png',
      tone:'rose'
    },
    {
      slug:'cosmetics',
      name:'Cosmetics',
      desc:'Beauty, personal care and hygiene essentials.',
      href:'cosmetics.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791473691/lux_rose_loap_100g.png',
      tone:'sky'
    },
    {
      slug:'non-foods',
      name:'Non Foods',
      desc:'Commercial tandoors, parts and accessories.',
      href:'non-foods.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261684/Shahi_Charcoal_Tandoor_11C_Size_1.png',
      tone:'sand'
    },
    {
      slug:'divers',
      name:'Divers',
      desc:'Everyday pantry, snacks and speciality grocery products.',
      href:'divers.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600769/Telephone_ISABGUL_200g.png',
      tone:'lavender'
    },
    {
      slug:'preserves',
      name:'Preserves',
      desc:'Ghee, preserved foods, tomatoes, vinegar and pantry favourites.',
      href:'preserves.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464152/Shama_Kesar_Mango_Plup_Kesar.png',
      tone:'mint'
    },
    {
      slug:'sea-food',
      name:'Sea Food',
      desc:'Frozen seafood selections for retail and foodservice.',
      href:'sea-food.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600837/Gambas_8-12.png',
      tone:'sky'
    },
    {
      slug:'savoury-snacks',
      name:'Savoury Snacks',
      desc:'Namkeen, chips, mixtures, chikki and savoury snack favourites.',
      href:'savoury-snacks.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601081/Shama_Roasted_Corn_Salted_400G.png',
      tone:'peach'
    },
    {
      slug:'bakery',
      name:'Bakery',
      desc:'Baking essentials, cake rusks, biscuits, flavours and essences.',
      href:'bakery.html',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869503/Cake_Rusk_Coconut_750g.png',
      tone:'sand'
    }
  ];

  const PASTE_SYNC_20261003 = true;

  const imageOverrides = {
    rice:'https://res.cloudinary.com/wy4nkkqq/image/upload/f_webp,fl_awebp,q_auto:best,e_sharpen:70/v1790255518/Shama_Super_Kernal_Par_Boiled_Sella_Rice_5kg.png',
    spices:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791377333/Shama_garam_masala_powder_100g_x_20_400g_x_10_1kg_x_6.png',
    sauces:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png',
    misc:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789466470/Shama_fried_onion_1kg.png',
    beverages:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791037170/Shama_Coconut_Milk_Drink_with_Mango_240ml.png',
    tea:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292824/Shama_Premium_gold_Tea_500g.png',
    sugar:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031373/Shama_Desi_Shakkar_500g.png',
    wines:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192902/Grover_Wine_Red_Alc._13.5_vol_75cl.png',
    flour:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232539/shama_wheat_floor_T55_1kg.png',
    frozen:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791202844/MAZEDAR_Potato_Samosa_20pcs.png',
    oils:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678755/Shama_sunflower_oil_5ltr.png',
    'dry-fruits':'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raw_almonds_100gm.png',
    cosmetics:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791473691/lux_rose_loap_100g.png'
  };

  const thumbnailOverrides = {
    cosmetics:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791473691/lux_rose_loap_100g.png',
    tea:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292824/Shama_Premium_gold_Tea_500g.png',
    sugar:'https://res.cloudinary.com/wy4nkkqq/image/upload/f_auto,q_auto:good,c_fit,w_320,h_320/v1791031373/Shama_Desi_Shakkar_500g.png',
    wines:'https://res.cloudinary.com/wy4nkkqq/image/upload/f_auto,q_auto:good,c_fit,w_320,h_320/v1791192902/Grover_Wine_Red_Alc._13.5_vol_75cl.png'
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
    const chickenSamosaImage = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625180/Shama_Chicken_tikka_Samosa_20Pcs.png';

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
                <img src="${heroMain.image}" alt="${heroMain.name}" onerror="this.onerror=null;this.src='https://static.wixstatic.com/media/00ae33_1a0186c70dbe44b0b74082a2e8264ca6~mv2.jpg'">
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
                    <img src="${thumbnailOverrides[range.slug] || range.image}" data-fallback="${range.image}" alt="${range.name}" loading="${index < 7 ? 'eager' : 'lazy'}" onerror="if(this.dataset.fallback && this.src!==this.dataset.fallback){this.src=this.dataset.fallback;return;}if(this.alt==='Rice'){this.onerror=null;this.src='https://static.wixstatic.com/media/00ae33_1a0186c70dbe44b0b74082a2e8264ca6~mv2.jpg'}">
                  </span>
                  <strong>${range.name}</strong>
                  <small>${range.desc}</small>
                  ${range.slug==='sugar' ? '<span class="sugar-subtypes"><i>Desi Gur</i><i>Desi Shakkar</i><i>Sugar & Cubes</i></span>' : range.slug==='wines' ? '<span class="wine-subtypes"><i>Red</i><i>White</i><i>Rosé</i><i>Liqueurs</i><i>Beer</i></span>' : ''}
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
                  <div class="grocery-range-image"><img src="${range.image}" alt="${range.name}" loading="lazy" onerror="if(this.alt==='Rice'){this.onerror=null;this.src='https://static.wixstatic.com/media/00ae33_1a0186c70dbe44b0b74082a2e8264ca6~mv2.jpg'}"></div>
                  <div class="grocery-range-copy">
                    <h3>${range.name}</h3>
                    <p>${range.desc}</p>
                    ${range.slug==='sugar' ? '<div class="sugar-range-types"><i>Desi Gur</i><i>Desi Shakkar</i><i>Sugar & Cubes</i></div>' : range.slug==='wines' ? '<div class="wine-range-types"><i>Red</i><i>White</i><i>Rosé</i><i>Liqueurs</i><i>Beer</i></div>' : ''}
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