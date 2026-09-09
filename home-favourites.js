(() => {
  'use strict';

  const root = document.querySelector('#home-products');
  if (!root || typeof productData === 'undefined') return;

  function firstProduct(category) {
    return productData.find(item => item.category === category) || null;
  }

  const rice = firstProduct('rice');
  const spice = firstProduct('spices');
  const sauce = firstProduct('sauces');

  const picks = [
    rice && {
      ...rice,
      categoryLabel: 'Rice',
      link: 'rice.html',
      badge: 'Bestseller · Wholesale'
    },
    spice && {
      ...spice,
      categoryLabel: 'Spices',
      link: 'spices.html',
      badge: 'Popular · Wholesale'
    },
    {
      category: 'frozen',
      categoryLabel: 'Frozen',
      title: 'Shama Crispy Paratha',
      pack: '20 pcs · Contact us for case quantity',
      image: 'assets/frozen/shama-crispy-paratha-20.webp',
      link: 'frozen.html',
      badge: 'Fast moving · Frozen'
    },
    sauce && {
      ...sauce,
      categoryLabel: 'Sauces & Pastes',
      link: 'sauces-pastes.html',
      badge: 'Kitchen favourite · Wholesale'
    }
  ].filter(Boolean);

  if (picks.length < 2) return;

  const esc = value => String(value || '').replace(/"/g, '&quot;');

  root.innerHTML = `<div class="product-showcase"><div class="showcase-tabs"><span class="showcase-label">Select a favourite</span>${picks.map((item, index) => `<button type="button" class="showcase-tab ${index === 0 ? 'active' : ''}" data-showcase="${index}"><b>${String(index + 1).padStart(2, '0')}</b><span><small style="display:block;font-size:10px;letter-spacing:.08em;text-transform:uppercase;opacity:.62;margin-bottom:3px">${item.categoryLabel}</small>${item.title}</span><i>→</i></button>`).join('')}<a id="showcase-all-link" href="${picks[0].link}" class="showcase-all">Explore ${picks[0].categoryLabel} <span>↗</span></a></div><div class="showcase-stage"><div class="stage-ring one"></div><div class="stage-ring two"></div><span class="stage-badge">Shama<br><b>Choice</b></span><img id="showcase-image" src="${picks[0].image}" alt="${esc(picks[0].title)}"><span class="stage-shadow"></span></div><div class="showcase-copy"><span class="eyebrow" id="showcase-badge">${picks[0].badge}</span><div class="showcase-count"><strong id="showcase-number">01</strong><span>/ ${String(picks.length).padStart(2, '0')}</span></div><h3 id="showcase-title">${picks[0].title}</h3><p id="showcase-pack">${picks[0].pack || 'Multiple pack sizes available'}</p><div class="showcase-benefits"><span>✓ Authentic quality</span><span>✓ Bulk availability</span><span>✓ Delivery support</span></div><button class="bulk-buy showcase-buy" type="button" data-product="${esc(picks[0].title)}" data-pack="${esc(picks[0].pack || '')}"><span>Add to bulk order</span><b>↗</b></button></div></div>`;

  root.addEventListener('click', event => {
    const tab = event.target.closest('.showcase-tab');
    if (!tab) return;

    const index = Number(tab.dataset.showcase);
    const item = picks[index];
    if (!item) return;

    root.querySelectorAll('.showcase-tab').forEach(button => button.classList.toggle('active', button === tab));

    const image = root.querySelector('#showcase-image');
    image.classList.remove('swap');
    void image.offsetWidth;
    image.src = item.image;
    image.alt = item.title;
    image.classList.add('swap');

    root.querySelector('#showcase-number').textContent = String(index + 1).padStart(2, '0');
    root.querySelector('#showcase-title').textContent = item.title;
    root.querySelector('#showcase-pack').textContent = item.pack || 'Multiple pack sizes available';
    root.querySelector('#showcase-badge').textContent = item.badge;

    const allLink = root.querySelector('#showcase-all-link');
    allLink.href = item.link;
    allLink.firstChild.textContent = `Explore ${item.categoryLabel} `;

    const buy = root.querySelector('.showcase-buy');
    buy.dataset.product = item.title;
    buy.dataset.pack = item.pack || '';
  });
})();
