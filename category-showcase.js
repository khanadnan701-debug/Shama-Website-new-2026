(() => {
  const init = () => {
    const root = document.querySelector('#featured-categories');
    if (!root) return false;

    const source = (typeof productData !== 'undefined' && Array.isArray(productData)) ? productData : [];

    const firstMatchingProduct = (slugs, preferredPattern) => {
      const matches = source.filter((product) => product && slugs.includes(product.category) && product.image);
      if (preferredPattern) {
        const preferred = matches.find((product) => preferredPattern.test(product.title || ''));
        if (preferred) return preferred;
      }
      return matches[0] || null;
    };

    const definitions = [
      {
        key: 'rice', number: '01', title: 'Rice', slugs: ['rice'], href: 'rice.html',
        preferred: /extra long|basmati/i,
        description: 'Premium basmati, sella and everyday rice selected for retail, restaurants and wholesale supply.',
        fallback: 'https://static.wixstatic.com/media/00ae33_e80d132ea86142d2905cb13ebabbc2dd~mv2.jpg',
        fallbackTitle: 'Shama Basmati Rice (extra Long)'
      },
      {
        key: 'spices', number: '02', title: 'Spices', slugs: ['spices'], href: 'spices.html',
        preferred: /amchur|haldi|turmeric/i,
        description: 'Bold aroma, vivid colour and authentic flavour for kitchens that want real South Asian taste.',
        fallback: 'https://static.wixstatic.com/media/00ae33_9d0728d1944d434d9cf6e146e42f3294~mv2.png',
        fallbackTitle: 'Shama Amchur Powder'
      },
      {
        key: 'frozen', number: '03', title: 'Frozen', slugs: ['frozen'], href: 'frozen.html',
        description: 'Convenient frozen favourites made for busy homes, restaurants and foodservice customers.',
        forceImage: 'assets/frozen/shama-crispy-paratha-20.webp',
        forceTitle: 'Shama Crispy Plain Paratha',
        forcePack: 'Wholesale packs available'
      },
      {
        key: 'sauces', number: '04', title: 'Sauces & Pastes', slugs: ['sauces-pastes', 'sauces'], href: 'sauces-pastes.html',
        preferred: /butter chicken|madras|kebab|paste/i,
        description: 'Rich curry pastes and sauces that bring depth, consistency and speed to everyday cooking.',
        fallback: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=900',
        fallbackTitle: 'Shama Sauces & Pastes'
      },
      {
        key: 'beverages', number: '05', title: 'Beverages', slugs: ['beverages'], href: 'beverages.html',
        preferred: /coconut|mango|lychee|drink/i,
        description: 'Refreshing drinks and familiar favourites for shelves, chillers and foodservice menus.',
        fallback: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=900',
        fallbackTitle: 'Shama Beverages'
      },
      {
        key: 'lentils', number: '06', title: 'Daal & Lentils', slugs: ['flour-lentiles', 'flour-lentils'], href: 'flour-lentiles.html',
        preferred: /chana dal|dal|lentil/i,
        description: 'Wholesome lentils, flour and pantry staples chosen for dependable everyday cooking.',
        fallback: 'https://static.wixstatic.com/media/00ae33_37ae5dc41177411b82b7123f35059c06~mv2.jpg',
        fallbackTitle: 'Shama Chana Dal'
      }
    ];

    const categories = definitions.map((category) => {
      if (category.forceImage) {
        return {
          ...category,
          image: category.forceImage,
          productTitle: category.forceTitle,
          pack: category.forcePack
        };
      }
      const product = firstMatchingProduct(category.slugs, category.preferred);
      return {
        ...category,
        image: product?.image || category.fallback,
        productTitle: product?.title || category.fallbackTitle || `Shama ${category.title}`,
        pack: product?.pack || 'Wholesale packs available'
      };
    });

    root.className = 'category-showcase';
    root.innerHTML = `
      <div class="category-showcase-grid" role="list" aria-label="Shama product categories">
        ${categories.map((category, index) => `
          <button class="category-tile ${index === 0 ? 'active' : ''}" type="button" data-category-index="${index}" aria-pressed="${index === 0 ? 'true' : 'false'}" role="listitem">
            <span class="category-tile-number">${category.number}</span>
            <span class="category-tile-media"><img src="${category.image}" alt="${category.productTitle}" loading="lazy" decoding="async"></span>
            <span class="category-tile-copy">
              <strong>${category.title}</strong>
              <small>${category.productTitle.replace(/^Shama\s+/i, '')}</small>
            </span>
            <span class="category-tile-arrow">↗</span>
          </button>
        `).join('')}
      </div>
      <aside class="category-focus" aria-live="polite">
        <div class="category-focus-topline"><span id="category-focus-number">01 / 06</span><span>Selected range</span></div>
        <div class="category-focus-stage">
          <div class="category-focus-glow"></div>
          <img id="category-focus-image" src="${categories[0].image}" alt="${categories[0].productTitle}">
          <span class="category-focus-product-name" id="category-focus-product-name">${categories[0].productTitle.replace(/^Shama\s+/i, '')}</span>
        </div>
        <span class="category-focus-kicker">Explore Shama</span>
        <h3 id="category-focus-title">${categories[0].title}</h3>
        <p id="category-focus-description">${categories[0].description}</p>
        <div class="category-focus-meta"><span>20+ years of trust</span><span id="category-focus-pack">${categories[0].pack}</span></div>
        <a id="category-focus-link" class="category-focus-link" href="${categories[0].href}"><span>Explore ${categories[0].title}</span><b>↗</b></a>
      </aside>
    `;

    const tiles = [...root.querySelectorAll('.category-tile')];
    const focusImage = root.querySelector('#category-focus-image');
    const focusNumber = root.querySelector('#category-focus-number');
    const focusProductName = root.querySelector('#category-focus-product-name');
    const focusTitle = root.querySelector('#category-focus-title');
    const focusDescription = root.querySelector('#category-focus-description');
    const focusPack = root.querySelector('#category-focus-pack');
    const focusLink = root.querySelector('#category-focus-link');

    let activeIndex = 0;
    let switchTimer = null;

    const activate = (index) => {
      if (!categories[index] || index === activeIndex && tiles[index]?.classList.contains('active')) return;
      activeIndex = index;
      const category = categories[index];
      tiles.forEach((tile, tileIndex) => {
        const active = tileIndex === index;
        tile.classList.toggle('active', active);
        tile.setAttribute('aria-pressed', String(active));
      });

      window.clearTimeout(switchTimer);
      focusImage.classList.add('switching');
      switchTimer = window.setTimeout(() => {
        focusImage.src = category.image;
        focusImage.alt = category.productTitle;
        focusProductName.textContent = category.productTitle.replace(/^Shama\s+/i, '');
        focusNumber.textContent = `${category.number} / 06`;
        focusTitle.textContent = category.title;
        focusDescription.textContent = category.description;
        focusPack.textContent = category.pack;
        focusLink.href = category.href;
        focusLink.querySelector('span').textContent = `Explore ${category.title}`;
        focusImage.classList.remove('switching');
      }, 120);
    };

    root.addEventListener('click', (event) => {
      const tile = event.target.closest('.category-tile');
      if (!tile) return;
      activate(Number(tile.dataset.categoryIndex));
    });

    root.addEventListener('pointerover', (event) => {
      if (!window.matchMedia('(hover: hover)').matches) return;
      const tile = event.target.closest('.category-tile');
      if (tile) activate(Number(tile.dataset.categoryIndex));
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