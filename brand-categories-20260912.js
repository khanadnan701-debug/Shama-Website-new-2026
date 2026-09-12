(() => {
  'use strict';

  const brands = [
    {
      number: '10',
      slug: 'laziza',
      name: 'Laziza',
      desc: 'Explore the range',
      image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85',
      href: 'catalogue.html#laziza'
    },
    {
      number: '11',
      slug: 'ahmed',
      name: 'Ahmed',
      desc: 'Explore the range',
      image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85',
      href: 'catalogue.html#ahmed'
    }
  ];

  function addMegaMenuBrands() {
    const grid = document.querySelector('.mega-grid');
    if (!grid) return;

    brands.forEach(brand => {
      if (grid.querySelector(`[data-brand-range="${brand.slug}"]`)) return;
      const link = document.createElement('a');
      link.href = brand.href;
      link.dataset.brandRange = brand.slug;
      link.innerHTML = `<b>${brand.number}</b><span><strong>${brand.name}</strong><small>${brand.desc}</small></span><i>↗</i>`;
      grid.appendChild(link);
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
      node.textContent = node.textContent.replace('Nine distinctive ranges.', 'Eleven distinctive ranges.');
      node.textContent = node.textContent.replace('Nine delicious ranges.', 'Eleven delicious ranges.');
    });
  }

  function updateRangeCounts() {
    document.querySelectorAll('.story-video-meta span').forEach(node => {
      if (/Product ranges/i.test(node.textContent || '')) {
        const count = node.querySelector('b');
        if (count) count.textContent = '11';
      }
    });

    document.querySelectorAll('p').forEach(node => {
      if ((node.textContent || '').includes('Browse nine ranges')) {
        node.textContent = node.textContent.replace('Browse nine ranges', 'Browse eleven ranges');
      }
    });
  }

  function mount() {
    addMegaMenuBrands();
    addCatalogueBrands();
    updateRangeCounts();
  }

  mount();
  document.addEventListener('DOMContentLoaded', mount, { once: true });
})();
