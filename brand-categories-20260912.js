(() => {
  'use strict';

  const brands = [
    {
      number: '10',
      slug: 'laziza',
      name: 'Laziza',
      desc: 'Explore the range',
      image: '/assets/cloudinary-shama/laziza/spices/laziza-biryani-masala-100g-0f3666d7ad74.webp',
      href: 'laziza.html'
    },
    {
      number: '11',
      slug: 'ahmed',
      name: 'Ahmed',
      desc: 'Explore the range',
      image: '/assets/cloudinary-shama/ahmed/ahmed-tamarind-sauce-300g-cc9749dc5eae.webp',
      href: 'ahmed.html'
    },
    {
      number: '12',
      slug: 'agarbatti',
      name: 'Agarbatti',
      desc: 'Metro, Metromilan & Pure incense',
      image: '/assets/cloudinary-shama/agarbatti/metro-black-sandal-agarbatti-bf708b22a9ea.webp',
      href: 'agarbatti.html'
    },
    {
      number: '13',
      slug: 'dates',
      name: 'Dates',
      desc: 'Premium date varieties',
      image: '/assets/cloudinary-shama/dates/shama-ajwa-dates-800g-734a417a7b85.webp',
      href: 'dates.html'
    },
    {
      number: '14',
      slug: 'pataks',
      name: 'Pataks',
      desc: 'Curry pastes & cooking sauces',
      image: '/assets/cloudinary-shama/pataks/patak-biryani-paste-2-3kg-71b7763e2b43.webp',
      href: 'pataks.html'
    },
    {
      number: '15',
      slug: 'cosmetics',
      name: 'Cosmetics',
      desc: 'Beauty & personal care',
      image: '/assets/cloudinary-shama/cosmetics/johnson-s-baby-oil-200ml-96548335b7a7.webp',
      href: 'cosmetics.html'
    },
    {
      number: '16',
      slug: 'non-foods',
      name: 'Non Foods',
      desc: 'Tandoors, parts & accessories',
      image: '/assets/cloudinary-shama/non-foods/shahi-charcoal-tandoor-11c-size-1-b0fd2000467a.webp',
      href: 'non-foods.html'
    },
    {
      number: '17',
      slug: 'divers',
      name: 'Divers',
      desc: 'Everyday pantry, snacks and speciality grocery products.',
      image: '/assets/cloudinary-shama/divers/telephone-isabgul-200g-4b4d290c8270.webp',
      href: 'divers.html'
    },
    {
      number: '18',
      slug: 'preserves',
      name: 'Preserves',
      desc: 'Ghee, preserved foods, tomatoes, vinegar and pantry favourites.',
      image: '/assets/preserves/shama-kesar-mango-plup-kesar.webp',
      href: 'preserves.html'
    },
    {
      number: '19',
      slug: 'sea-food',
      name: 'Sea Food',
      desc: 'Frozen seafood selections for retail and foodservice.',
      image: '/assets/cloudinary-shama/sea-food/gambas-8-12-fdb47ab466a9.webp',
      href: 'sea-food.html'
    },
    {
      number: '20',
      slug: 'savoury-snacks',
      name: 'Savoury Snacks',
      desc: 'Namkeen, chips, mixtures, chikki and savoury snack favourites.',
      image: '/assets/cloudinary-shama/savoury-snacks/shama-roasted-corn-salted-400g-3ce5d27e8c46.webp',
      href: 'savoury-snacks.html'
    },
    {
      number: '21',
      slug: 'bakery',
      name: 'Bakery',
      desc: 'Baking essentials, rusks & flavours',
      image: '/assets/cloudinary-shama/bakery/cake-rusk-coconut-750g-ac4d5d28489c.webp',
      href: 'bakery.html'
    }
  ];

  const menuImageByHref = {
  "rice.html": "/assets/rice/shama-super-kernal-par-boiled-sella-rice-5kg.webp",
  "spices.html": "/assets/spices/shama-garam-masala-powder.webp",
  "sauces-pastes.html": "/assets/cloudinary-shama/paste/shama-mango-pickle-1kg-9c5e9eab9cea.webp",
  "miscellaneous.html": "/assets/cloudinary-shama/miscellaneous/shama-fried-onion-1kg-113e86531276.webp",
  "beverages.html": "/assets/beverages/shama-basil-seed-drink-watermelon.webp",
  "flour-lentiles.html": "/assets/flour/shama-wheat-flour-t55-1kg.webp?v=20261019-flour-newzip-v2",
  "frozen.html": "assets/frozen/shama-chicken-samosa-20.webp",
  "oils.html": "/assets/cloudinary-shama/oils/shama-sunflower-oil-5ltr-8ba69b6f8d48.webp",
  "dry-fruits.html": "/assets/cloudinary-shama/dry-fruits/shama-raw-almonds-100gm-c0af9f54eee6.webp",
  "laziza.html": "/assets/cloudinary-shama/laziza/spices/laziza-biryani-masala-100g-0f3666d7ad74.webp",
  "ahmed.html": "/assets/cloudinary-shama/ahmed/ahmed-tamarind-sauce-300g-cc9749dc5eae.webp",
  "agarbatti.html": "/assets/cloudinary-shama/agarbatti/metro-black-sandal-agarbatti-bf708b22a9ea.webp",
  "dates.html": "/assets/cloudinary-shama/dates/shama-ajwa-dates-800g-734a417a7b85.webp",
  "pataks.html": "/assets/cloudinary-shama/pataks/patak-biryani-paste-2-3kg-71b7763e2b43.webp",
  "cosmetics.html": "/assets/cloudinary-shama/cosmetics/johnson-s-baby-oil-200ml-96548335b7a7.webp",
  "non-foods.html": "/assets/cloudinary-shama/non-foods/shahi-charcoal-tandoor-11c-size-1-b0fd2000467a.webp",
  "divers.html": "/assets/cloudinary-shama/divers/telephone-isabgul-200g-4b4d290c8270.webp",
  "preserves.html": "/assets/preserves/shama-kesar-mango-plup-kesar.webp",
  "sea-food.html": "/assets/cloudinary-shama/sea-food/gambas-8-12-fdb47ab466a9.webp",
  "savoury-snacks.html": "/assets/cloudinary-shama/savoury-snacks/shama-roasted-corn-salted-400g-3ce5d27e8c46.webp",
  "bakery.html": "/assets/cloudinary-shama/bakery/cake-rusk-coconut-750g-ac4d5d28489c.webp"
};

  function decorateMegaMenuImages(grid) {
    if (!grid) return;
    Array.from(grid.querySelectorAll(':scope > a')).forEach(link => {
      const file = (link.getAttribute('href') || '').split('?')[0].split('#')[0].split('/').pop();
      const src = menuImageByHref[file];
      if (!src || link.querySelector('.mega-product-thumb')) return;
      const thumb = document.createElement('span');
      thumb.className = 'mega-product-thumb';
      thumb.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
      link.insertBefore(thumb, link.firstChild);
    });
  }

  function addMegaMenuBrands() {
    const grid = document.querySelector('.mega-grid');
    if (!grid) return;

    const hrefKey = href => {
      try {
        const url = new URL(href, window.location.href);
        return url.pathname.split('/').filter(Boolean).pop() || 'index.html';
      } catch (_) {
        return String(href || '').split('?')[0].split('#')[0].split('/').pop();
      }
    };

    // Remove any duplicate menu rows already rendered by older scripts/cached code.
    const seen = new Set();
    Array.from(grid.querySelectorAll(':scope > a')).forEach(link => {
      const key = hrefKey(link.getAttribute('href'));
      if (seen.has(key)) link.remove();
      else seen.add(key);
    });

    // Add only genuinely missing legacy/extended ranges.
    brands.forEach(brand => {
      const key = hrefKey(brand.href);
      const exists = Array.from(grid.querySelectorAll(':scope > a'))
        .some(link => hrefKey(link.getAttribute('href')) === key);
      if (exists) return;

      const link = document.createElement('a');
      link.href = brand.href;
      link.dataset.brandRange = brand.slug;
      link.innerHTML = `<b></b><span><strong>${brand.name}</strong><small>${brand.desc}</small></span><i>↗</i>`;
      grid.appendChild(link);
    });

    // Keep the same Shama-first category hierarchy on every desktop page.
    // Reuse existing links/images; never insert a duplicate.
    const priority = [
      'rice.html','spices.html','flour-lentiles.html','frozen.html',
      'beverages.html','oils.html','dates.html'
    ];
    const ordered = Array.from(grid.querySelectorAll(':scope > a')).map((link, index) => ({
      link,index,key:hrefKey(link.getAttribute('href'))
    }));
    const rank = entry => {
      const primary = priority.indexOf(entry.key);
      return primary !== -1 ? primary : entry.key === 'wines.html' ? 10000 : 100 + entry.index;
    };
    ordered.sort((a,b) => rank(a)-rank(b));
    ordered.forEach(({link}, index) => {
      grid.appendChild(link);
      const number = link.querySelector('b');
      if (number) number.textContent = String(index + 1).padStart(2, '0');
    });
    decorateMegaMenuImages(grid);
  }

  function showBrandPreview(row, brand) {
    const page = document.querySelector('.catalogue-index');
    if (!page) return;

    page.querySelectorAll('.catalogue-row').forEach(item => item.classList.toggle('active', item === row));

    const image = document.querySelector('#preview-image');
    if (image) {
      image.classList.remove('switch');
      void image.offsetWidth;
      image.src = brand.image;
      image.alt = brand.name;
      image.classList.add('switch');
    }

    const number = document.querySelector('#preview-number');
    const title = document.querySelector('#preview-title');
    const desc = document.querySelector('#preview-desc');
    const link = document.querySelector('#preview-link');

    if (number) number.textContent = brand.number;
    if (title) title.textContent = brand.name;
    if (desc) desc.textContent = `${brand.name} range. Explore products selected for retailers, restaurants and homes.`;
    if (link) link.href = brand.href;
  }

  function addCatalogueBrands() {
    if (document.body.dataset.page !== 'catalogue') return;
    const list = document.querySelector('.catalogue-list');
    if (!list) return;

    brands.forEach(brand => {
      if (list.querySelector(`[data-brand-range="${brand.slug}"]`)) return;

      const row = document.createElement('a');
      row.className = 'catalogue-row brand-catalogue-row';
      row.href = brand.href;
      row.dataset.brandRange = brand.slug;
      row.innerHTML = `<b>${brand.number}</b><h2>${brand.name}</h2><span>New</span><i>↗</i>`;

      row.addEventListener('mouseover', event => {
        event.stopPropagation();
        showBrandPreview(row, brand);
      });
      row.addEventListener('focus', () => showBrandPreview(row, brand));

      list.appendChild(row);
    });

    document.querySelectorAll('.page-hero p, .catalogue-hero p').forEach(node => {
      node.textContent = node.textContent.replace('Twenty-one distinctive ranges.', 'Twenty-one distinctive ranges.');
      node.textContent = node.textContent.replace('Twenty-one delicious ranges.', 'Twenty-one delicious ranges.');
    });
  }

  function updateRangeCounts() {
    document.querySelectorAll('.story-video-meta span').forEach(node => {
      if (/Product ranges/i.test(node.textContent || '')) {
        const count = node.querySelector('b');
        if (count) count.textContent = String(document.querySelectorAll('.mega-grid > a').length || 24);
      }
    });

    document.querySelectorAll('p').forEach(node => {
      if ((node.textContent || '').includes('Browse twenty-one ranges')) {
        node.textContent = node.textContent.replace('Browse twenty-one ranges', 'Browse twenty-one ranges');
      }
    });
  }

  function loadChatbot() {
    if (document.getElementById('shama-chatbot-script')) return;
    const script = document.createElement('script');
    script.id = 'shama-chatbot-script';
    script.src = 'shama-chatbot-20260912.js?v=20260912-1';
    script.defer = true;
    document.head.appendChild(script);
  }

  function loadCatalogueBrandGroups() {
    if (document.body.dataset.page !== 'product') return;
    if (document.getElementById('catalogue-brand-groups-script')) return;
    const script = document.createElement('script');
    script.id = 'catalogue-brand-groups-script';
    script.src = 'catalogue-brand-groups-20260928.js?v=20260928-3';
    script.async = false;
    document.head.appendChild(script);
  }

  function loadUniversalProductZoom() {
    /* Disabled: product-details-20260922.js is now the single product viewer. */
    return;
  }

  function mount() {
    addMegaMenuBrands();
    addCatalogueBrands();
    updateRangeCounts();
    loadChatbot();
    loadCatalogueBrandGroups();
    loadUniversalProductZoom();
  }

  mount();
  document.addEventListener('DOMContentLoaded', mount, { once: true });
})();
