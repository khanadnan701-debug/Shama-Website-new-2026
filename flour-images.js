// High-quality Flour & Lentils product imagery.
// The page stays usable if the atlas has not been uploaded yet; once present,
// every mapped product is upgraded automatically from the single HQ atlas.
(() => {
  if (document.body.dataset.category !== 'flour') return;

  const ATLAS_SRC = 'flour-lentils-atlas-hq.webp';
  const CELL = 640;
  const COLS = 5;

  const productImages = {
    'Shama Wheat Flour': { tiles: [0, 1], pack: '1kg / 25kg' },
    'Shama Multigrain Atta': { tiles: [2], pack: '5kg' },
    'Shama Gram Flour': { tiles: [3], pack: 'Contact us for available pack sizes' },
    'Shama Chakki Gold Atta': { tiles: [5, 6, 4], pack: '2kg / 5kg / 10kg' },
    'Shama Chapati Atta T110': { tiles: [7, 8], pack: '10kg / 20kg' },

    'Shama Masoor Dal': { tiles: [13, 9], pack: '1kg / 5kg' },
    'Shama Black Eye Beans': { tiles: [10], pack: '1kg' },
    'Shama Chana Dal': { tiles: [11], pack: '1kg' },
    'Shama Kala Chana': { tiles: [12], pack: '1kg' },
    'Shama Masoor Dal Whole': { tiles: [14], pack: '1kg' },
    'Shama Moong Dal Washed': { tiles: [15], pack: '1kg' },
    'Shama Moong Dal Whole': { tiles: [16], pack: '1kg' },
    'Shama Chitra Rajma': { tiles: [17], pack: '1kg' },
    'Shama Red Kidney Beans': { tiles: [18], pack: '1kg' },
    'Shama Toor Dal': { tiles: [19], pack: '1kg' },
    'Shama Urad Dal Chilka': { tiles: [20], pack: '1kg' },
    'Shama Urad Dal Washed': { tiles: [21], pack: '1kg' },
    'Shama Urad Dal Gota': { tiles: [22], pack: '1kg' },
    'Shama Urad Dal Whole': { tiles: [23], pack: '1kg' },
    'Shama White Chick Peas': { tiles: [24], pack: '1kg' },
    'Shama Moong Dal Chilka': { tiles: [25], pack: '1kg' }
  };

  // Keep the existing local Flour assets as a safe fallback while the HQ atlas loads.
  const fallbackFlour = {
    'Shama Wheat Flour': ['assets/flour/shama-wheat-flour-1kg.webp', 'assets/flour/shama-wheat-flour-25kg.webp'],
    'Shama Multigrain Atta': ['assets/flour/shama-multigrain-atta-5kg.webp'],
    'Shama Gram Flour': ['assets/flour/shama-gram-flour.webp'],
    'Shama Chakki Gold Atta': [
      'assets/flour/shama-chakki-gold-atta-2kg.webp',
      'assets/flour/shama-chakki-gold-atta-5kg.webp',
      'assets/flour/shama-chakki-gold-atta-10kg.webp'
    ],
    'Shama Chapati Atta T110': [
      'assets/flour/shama-chapati-atta-t110-10kg.webp',
      'assets/flour/shama-chapati-atta-t110-20kg.webp'
    ]
  };

  let resolvedSources = { ...fallbackFlour };
  let optionsObserver = null;

  function ensureProducts() {
    Object.entries(productImages).forEach(([title, config]) => {
      let product = productData.find(item => item.category === 'flour' && item.title === title);
      if (!product) {
        product = {
          category: 'flour',
          title,
          pack: config.pack,
          image: 'https://images.unsplash.com/photo-1585996749202-676c0129112a?auto=format&fit=crop&w=700&q=80'
        };
        productData.push(product);
      }
      product.pack = config.pack;
      const fallback = resolvedSources[title];
      if (fallback && fallback[0]) product.image = fallback[0];
    });
  }

  function renderAndWire() {
    renderProducts(document.querySelector('#page-content'));
    [...document.querySelectorAll('link[href^="product-runway.css"]')].slice(1).forEach(link => link.remove());
    setupImageOptions();
  }

  function setupImageOptions() {
    if (optionsObserver) {
      optionsObserver.disconnect();
      optionsObserver = null;
    }

    document.querySelectorAll('.flour-image-options').forEach(node => node.remove());

    const image = document.querySelector('#runway-image');
    const title = document.querySelector('#runway-title');
    const stage = document.querySelector('.runway-stage');
    if (!image || !title || !stage) return;

    if (!document.querySelector('#flour-image-options-style')) {
      const style = document.createElement('style');
      style.id = 'flour-image-options-style';
      style.textContent = `
        .flour-image-options{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:14px auto 0}
        .flour-image-options[hidden]{display:none}
        .flour-image-options button{width:78px;height:78px;padding:5px;border:1px solid rgba(21,45,82,.18);border-radius:14px;background:#fff;cursor:pointer;box-shadow:0 7px 20px rgba(10,28,55,.08);transition:transform .2s ease,border-color .2s ease}
        .flour-image-options button:hover{transform:translateY(-2px)}
        .flour-image-options button[aria-pressed="true"]{outline:2px solid #5d4fe4;outline-offset:2px;border-color:transparent}
        .flour-image-options img{display:block;width:100%;height:100%;object-fit:cover;border-radius:9px}
        #runway-image{image-rendering:auto}
        @media(max-width:600px){.flour-image-options{justify-content:flex-start;overflow-x:auto;flex-wrap:nowrap;padding:2px 3px 7px}.flour-image-options button{flex:0 0 68px;width:68px;height:68px}}
      `;
      document.head.appendChild(style);
    }

    const options = document.createElement('div');
    options.className = 'flour-image-options';
    options.setAttribute('role', 'group');
    options.setAttribute('aria-label', 'Available pack images');
    stage.after(options);

    function updateOptions() {
      const name = title.textContent.trim();
      const sources = resolvedSources[name] || [];

      if (options.dataset.product !== name) {
        options.dataset.product = name;
        options.replaceChildren();
        options.hidden = sources.length < 2;

        sources.forEach((src, index) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.setAttribute('aria-label', `${name}: pack image ${index + 1}`);

          const thumb = document.createElement('img');
          thumb.src = src;
          thumb.alt = '';
          thumb.width = 68;
          thumb.height = 68;
          button.appendChild(thumb);

          button.addEventListener('click', () => {
            image.src = src;
            image.alt = name;
            updateOptions();
          });
          options.appendChild(button);
        });
      }

      [...options.children].forEach((button, index) => {
        button.setAttribute('aria-pressed', String(image.getAttribute('src') === sources[index]));
      });
    }

    optionsObserver = new MutationObserver(updateOptions);
    optionsObserver.observe(image, { attributes: true, attributeFilter: ['src', 'alt'] });
    updateOptions();
  }

  function cropTile(atlas, index) {
    const canvas = document.createElement('canvas');
    canvas.width = CELL;
    canvas.height = CELL;
    const ctx = canvas.getContext('2d', { alpha: false });
    const sx = (index % COLS) * CELL;
    const sy = Math.floor(index / COLS) * CELL;
    ctx.drawImage(atlas, sx, sy, CELL, CELL, 0, 0, CELL, CELL);
    return canvas.toDataURL('image/webp', 0.94);
  }

  function applyAtlas(atlas) {
    const tileCache = new Map();
    const getTile = index => {
      if (!tileCache.has(index)) tileCache.set(index, cropTile(atlas, index));
      return tileCache.get(index);
    };

    resolvedSources = {};
    Object.entries(productImages).forEach(([title, config]) => {
      resolvedSources[title] = config.tiles.map(getTile);
      const product = productData.find(item => item.category === 'flour' && item.title === title);
      if (product) {
        product.image = resolvedSources[title][0];
        product.pack = config.pack;
      }
    });

    renderAndWire();
  }

  ensureProducts();
  renderAndWire();

  const atlas = new Image();
  atlas.decoding = 'async';
  atlas.onload = () => {
    // Ignore accidental/incorrect atlas uploads instead of showing bad crops.
    if (atlas.naturalWidth < CELL * COLS || atlas.naturalHeight < CELL * 6) return;
    applyAtlas(atlas);
  };
  atlas.onerror = () => {
    // Safe fallback: current page remains fully functional until the HQ atlas is uploaded.
  };
  atlas.src = `${ATLAS_SRC}?v=20260908-hq1`;
})();
