(() => {
  const init = () => {
    const root = document.querySelector('#featured-categories');
    if (!root) return false;

    const source = (typeof productData !== 'undefined' && Array.isArray(productData)) ? productData : [];

    const productsFor = (slugs, fallback, title) => {
      const seen = new Set();
      const items = [];
      for (const slug of slugs) {
        source
          .filter((product) => product && product.category === slug && product.image)
          .forEach((product) => {
            if (seen.has(product.image) || items.length >= 3) return;
            seen.add(product.image);
            items.push(product);
          });
        if (items.length >= 3) break;
      }
      if (!items.length) {
        items.push({ image: fallback, title: `Shama ${title}`, pack: 'Wholesale packs available' });
      }
      return items;
    };

    const categories = [
      {
        key: 'rice',
        number: '01',
        title: 'Rice',
        slugs: ['rice'],
        href: 'rice.html',
        description: 'Premium basmati, sella and everyday rice selected for retail, restaurants and wholesale supply.',
        fallback: 'https://static.wixstatic.com/media/00ae33_e80d132ea86142d2905cb13ebabbc2dd~mv2.jpg'
      },
      {
        key: 'spices',
        number: '02',
        title: 'Spices',
        slugs: ['spices'],
        href: 'spices.html',
        description: 'Bold aroma, vivid colour and authentic flavour for kitchens that want real South Asian taste.',
        fallback: 'https://static.wixstatic.com/media/00ae33_9d0728d1944d434d9cf6e146e42f3294~mv2.png'
      },
      {
        key: 'frozen',
        number: '03',
        title: 'Frozen',
        slugs: ['frozen'],
        href: 'frozen.html',
        description: 'Convenient frozen favourites made for busy homes, restaurants and foodservice customers.',
        fallback: 'assets/frozen/shama-crispy-paratha-20.webp'
      },
      {
        key: 'sauces',
        number: '04',
        title: 'Sauces & Pastes',
        slugs: ['sauces-pastes', 'sauces'],
        href: 'sauces-pastes.html',
        description: 'Rich curry pastes and sauces that bring depth, consistency and speed to everyday cooking.',
        fallback: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=900'
      },
      {
        key: 'beverages',
        number: '05',
        title: 'Beverages',
        slugs: ['beverages'],
        href: 'beverages.html',
        description: 'Refreshing drinks and familiar favourites for shelves, chillers and foodservice menus.',
        fallback: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=900'
      },
      {
        key: 'lentils',
        number: '06',
        title: 'Daal & Lentils',
        slugs: ['flour-lentiles', 'flour-lentils'],
        href: 'flour-lentiles.html',
        description: 'Wholesome lentils, flour and pantry staples chosen for dependable everyday cooking.',
        fallback: 'https://static.wixstatic.com/media/00ae33_37ae5dc41177411b82b7123f35059c06~mv2.jpg'
      }
    ].map((category) => {
      const products = productsFor(category.slugs, category.fallback, category.title);
      const first = products[0];
      return {
        ...category,
        products,
        image: first.image,
        productTitle: first.title || `Shama ${category.title}`,
        pack: first.pack || 'Wholesale packs available'
      };
    });

    const productStrip = (category) => category.products.map((product, index) => `
      <span class="category-focus-product ${index === 0 ? 'primary' : ''}">
        <img src="${product.image}" alt="${product.title || category.title}" loading="lazy" decoding="async">
      </span>
    `).join('');

    root.className = 'category-showcase';
    root.innerHTML = `
      <div class="category-showcase-grid" role="list" aria-label="Shama product categories">
        ${categories.map((category, index) => `
          <button class="category-tile ${index === 0 ? 'active' : ''}" type="button" data-category-index="${index}" aria-pressed="${index === 0 ? 'true' : 'false'}" role="listitem">
            <span class="category-tile-number">${category.number}</span>
            <span class="category-tile-copy">
              <strong>${category.title}</strong>
              <small>${category.productTitle.replace(/^Shama\s+/i, '')}</small>
            </span>
            <span class="category-tile-media"><img src="${category.image}" alt="${category.productTitle}" loading="lazy" decoding="async"></span>
            <span class="category-tile-arrow">↗</span>
          </button>
        `).join('')}
      </div>
      <aside class="category-focus" aria-live="polite">
        <div class="category-focus-topline"><span id="category-focus-number">01 / 06</span><span>Selected range</span></div>
        <div class="category-focus-products" id="category-focus-products">${productStrip(categories[0])}</div>
        <span class="category-focus-kicker">Explore Shama</span>
        <h3 id="category-focus-title">${categories[0].title}</h3>
        <p id="category-focus-description">${categories[0].description}</p>
        <div class="category-focus-meta"><span>20+ years of trust</span><span id="category-focus-pack">${categories[0].pack}</span></div>
        <a id="category-focus-link" class="category-focus-link" href="${categories[0].href}"><span>Explore ${categories[0].title}</span><b>↗</b></a>
      </aside>
    `;

    const tiles = [...root.querySelectorAll('.category-tile')];
    const focusProducts = root.querySelector('#category-focus-products');
    const focusNumber = root.querySelector('#category-focus-number');
    const focusTitle = root.querySelector('#category-focus-title');
    const focusDescription = root.querySelector('#category-focus-description');
    const focusPack = root.querySelector('#category-focus-pack');
    const focusLink = root.querySelector('#category-focus-link');

    let activeIndex = 0;
    const activate = (index) => {
      if (!categories[index]) return;
      activeIndex = index;
      const category = categories[index];
      tiles.forEach((tile, tileIndex) => {
        const active = tileIndex === index;
        tile.classList.toggle('active', active);
        tile.setAttribute('aria-pressed', String(active));
      });

      focusProducts.classList.add('switching');
      window.setTimeout(() => {
        focusProducts.innerHTML = productStrip(category);
        focusNumber.textContent = `${category.number} / 06`;
        focusTitle.textContent = category.title;
        focusDescription.textContent = category.description;
        focusPack.textContent = category.pack;
        focusLink.href = category.href;
        focusLink.querySelector('span').textContent = `Explore ${category.title}`;
        focusProducts.classList.remove('switching');
      }, 140);
    };

    root.addEventListener('click', (event) => {
      const tile = event.target.closest('.category-tile');
      if (!tile) return;
      activate(Number(tile.dataset.categoryIndex));
    });

    root.addEventListener('pointerover', (event) => {
      if (window.matchMedia('(hover: hover)').matches) {
        const tile = event.target.closest('.category-tile');
        if (tile) activate(Number(tile.dataset.categoryIndex));
      }
    });

    root.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) return;
      event.preventDefault();
      const direction = (event.key === 'ArrowRight' || event.key === 'ArrowDown') ? 1 : -1;
      const next = (activeIndex + direction + categories.length) % categories.length;
      tiles[next].focus();
      activate(next);
    });

    return true;
  };

  if (!init()) {
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      if (init() || attempts > 20) window.clearInterval(timer);
    }, 100);
  }
})();