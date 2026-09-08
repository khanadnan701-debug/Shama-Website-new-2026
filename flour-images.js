(() => {
  if (document.body.dataset.category !== 'flour') return;

  const PLACEHOLDER = 'assets/shama-logo.png';
  const VERSION = '20260908-r3';

  const manifest = {
    'Shama Wheat Flour': { ids: [0, 1], pack: '1kg / 25kg', fallback: ['assets/flour/shama-wheat-flour-1kg.webp', 'assets/flour/shama-wheat-flour-25kg.webp'] },
    'Shama Multigrain Atta': { ids: [2], pack: '5kg', fallback: ['assets/flour/shama-multigrain-atta-5kg.webp'] },
    'Shama Gram Flour': { ids: [3], pack: 'Contact us for available pack sizes', fallback: ['assets/flour/shama-gram-flour.webp'] },
    'Shama Chakki Gold Atta': { ids: [5, 6, 4], pack: '2kg / 5kg / 10kg', fallback: ['assets/flour/shama-chakki-gold-atta-2kg.webp', 'assets/flour/shama-chakki-gold-atta-5kg.webp', 'assets/flour/shama-chakki-gold-atta-10kg.webp'] },
    'Shama Chapati Atta T110': { ids: [7, 8], pack: '10kg / 20kg', fallback: ['assets/flour/shama-chapati-atta-t110-10kg.webp', 'assets/flour/shama-chapati-atta-t110-20kg.webp'] },

    'Shama Masoor Dal': { ids: [13, 9], pack: '1kg / 5kg' },
    'Shama Black Eye Beans': { ids: [10], pack: '1kg' },
    'Shama Chana Dal': { ids: [11], pack: '1kg' },
    'Shama Kala Chana': { ids: [12], pack: '1kg' },
    'Shama Masoor Dal Whole': { ids: [14], pack: '1kg' },
    'Shama Moong Dal Washed': { ids: [15], pack: '1kg' },
    'Shama Moong Dal Whole': { ids: [16], pack: '1kg' },
    'Shama Chitra Rajma': { ids: [17], pack: '1kg' },
    'Shama Red Kidney Beans': { ids: [18], pack: '1kg' },
    'Shama Toor Dal': { ids: [19], pack: '1kg' },
    'Shama Urad Dal Chilka': { ids: [20], pack: '1kg' },
    'Shama Urad Dal Washed': { ids: [21], pack: '1kg' },
    'Shama Urad Dal Gota': { ids: [22], pack: '1kg' },
    'Shama Urad Dal Whole': { ids: [23], pack: '1kg' },
    'Shama White Chick Peas': { ids: [24], pack: '1kg' },
    'Shama Moong Dal Chilka': { ids: [25], pack: '1kg' }
  };

  function getProduct(title, config) {
    let product = productData.find(item => item.category === 'flour' && item.title === title);
    if (!product) {
      product = { category: 'flour', title, pack: config.pack, image: PLACEHOLDER };
      productData.push(product);
    }
    product.pack = config.pack;
    if (config.fallback && config.fallback[0]) {
      product.image = config.fallback[0];
      product.images = [...config.fallback];
    } else {
      product.image = PLACEHOLDER;
      product.images = [PLACEHOLDER];
    }
    return product;
  }

  Object.entries(manifest).forEach(([title, config]) => getProduct(title, config));

  async function loadEncodedImage(id) {
    const name = String(id).padStart(2, '0');
    const response = await fetch(`assets/lentils/atlas/${name}.txt?v=${VERSION}`, { cache: 'force-cache' });
    if (!response.ok) throw new Error(`Image ${name} unavailable`);
    const base64 = (await response.text()).replace(/\s+/g, '');
    if (!base64 || !base64.startsWith('UklG')) throw new Error(`Image ${name} invalid`);
    return `data:image/webp;base64,${base64}`;
  }

  async function resolveProduct(title, config) {
    const product = getProduct(title, config);
    const settled = await Promise.allSettled(config.ids.map(loadEncodedImage));
    const loaded = settled.filter(result => result.status === 'fulfilled').map(result => result.value);
    const fallback = config.fallback || [];
    const sources = loaded.length ? loaded : fallback;

    if (sources.length) {
      product.image = sources[0];
      product.images = sources;
    } else {
      product.image = PLACEHOLDER;
      product.images = [PLACEHOLDER];
    }
  }

  Promise.all(Object.entries(manifest).map(([title, config]) => resolveProduct(title, config)))
    .then(() => {
      window.__shamaFlourImagesReady = true;
      document.dispatchEvent(new CustomEvent('shama:product-images-updated'));
      if (typeof window.shamaRerenderSimpleProducts === 'function') {
        window.shamaRerenderSimpleProducts();
      }
    })
    .catch(() => {
      document.dispatchEvent(new CustomEvent('shama:product-images-updated'));
    });
})();