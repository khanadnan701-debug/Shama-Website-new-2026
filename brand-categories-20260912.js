(() => {
  'use strict';

  const brands = [
    {
      number: '10',
      slug: 'laziza',
      name: 'Laziza',
      desc: 'Explore the range',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/Laziza_biryani_masala_100g.png',
      href: 'laziza.html'
    },
    {
      number: '11',
      slug: 'ahmed',
      name: 'Ahmed',
      desc: 'Explore the range',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789652169/Ahmed_tamarind_sauce_300g.png',
      href: 'ahmed.html'
    },
    {
      number: '12',
      slug: 'agarbatti',
      name: 'Agarbatti',
      desc: 'Incense & fragrances',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069154/Metro_3_in_1.png',
      href: 'agarbatti.html'
    },
    {
      number: '13',
      slug: 'dates',
      name: 'Dates',
      desc: 'Premium date varieties',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069276/Shama_Ajwa-Dates-800g.png',
      href: 'dates.html'
    },
    {
      number: '14',
      slug: 'pataks',
      name: 'Pataks',
      desc: 'Curry pastes & cooking sauces',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_biryani_paste_2.3kg.png',
      href: 'pataks.html'
    },
    {
      number: '15',
      slug: 'cosmetics',
      name: 'Cosmetics',
      desc: 'Beauty & personal care',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Rose_Water_250ml.png',
      href: 'cosmetics.html'
    },
    {
      number: '16',
      slug: 'non-foods',
      name: 'Non Foods',
      desc: 'Tandoors, parts & accessories',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261684/Shahi_Charcoal_Tandoor_11C_Size_1.png',
      href: 'non-foods.html'
    }
  ];

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

    // Keep numbering clean and sequential: 01 ... 16.
    Array.from(grid.querySelectorAll(':scope > a')).forEach((link, index) => {
      const number = link.querySelector('b');
      if (number) number.textContent = String(index + 1).padStart(2, '0');
    });
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
      node.textContent = node.textContent.replace('Sixteen distinctive ranges.', 'Sixteen distinctive ranges.');
      node.textContent = node.textContent.replace('Sixteen delicious ranges.', 'Sixteen delicious ranges.');
    });
  }

  function updateRangeCounts() {
    document.querySelectorAll('.story-video-meta span').forEach(node => {
      if (/Product ranges/i.test(node.textContent || '')) {
        const count = node.querySelector('b');
        if (count) count.textContent = '16';
      }
    });

    document.querySelectorAll('p').forEach(node => {
      if ((node.textContent || '').includes('Browse sixteen ranges')) {
        node.textContent = node.textContent.replace('Browse sixteen ranges', 'Browse sixteen ranges');
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

  function loadUniversalProductZoom() {
    /* Disabled: product-details-20260922.js is now the single product viewer. */
    return;
  }

  function mount() {
    addMegaMenuBrands();
    addCatalogueBrands();
    updateRangeCounts();
    loadChatbot();
    loadUniversalProductZoom();
  }

  mount();
  document.addEventListener('DOMContentLoaded', mount, { once: true });
})();
