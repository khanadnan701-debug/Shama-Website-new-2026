(() => {
  if (document.body.dataset.category !== 'flour') return;

  const PLACEHOLDER = 'assets/shama-logo.png';
  const VERSION = '20260908-r4';

  const manifest = {
    'Shama Wheat Flour': {
      ids: [0, 1], pack: '1kg / 25kg',
      direct: [
        'assets/flour/ChatGPT Image Apr 23, 2026, 08_25_36 PM.png',
        'assets/flour/ChatGPT Image Apr 23, 2026, 08_32_43 PM.png',
        'assets/flour/shama-wheat-flour-1kg.webp',
        'assets/flour/shama-wheat-flour-25kg.webp'
      ],
      initial: ['assets/flour/shama-wheat-flour-1kg.webp', 'assets/flour/shama-wheat-flour-25kg.webp']
    },
    'Shama Multigrain Atta': {
      ids: [2], pack: '5kg',
      direct: ['assets/flour/ChatGPT Image Apr 23, 2026, 08_52_21 PM.png', 'assets/flour/shama-multigrain-atta-5kg.webp'],
      initial: ['assets/flour/shama-multigrain-atta-5kg.webp']
    },
    'Shama Gram Flour': {
      ids: [3], pack: 'Contact us for available pack sizes',
      direct: ['assets/flour/ChatGPT Image Apr 27, 2026, 11_12_55 PM.png', 'assets/flour/shama-gram-flour.webp'],
      initial: ['assets/flour/shama-gram-flour.webp']
    },
    'Shama Chakki Gold Atta': {
      ids: [5, 6, 4], pack: '2kg / 5kg / 10kg',
      direct: [
        'assets/flour/ChatGPT Image Apr 27, 2026, 11_16_22 PM.png',
        'assets/flour/ChatGPT Image Apr 27, 2026, 11_18_17 PM.png',
        'assets/flour/ChatGPT Image Apr 27, 2026, 11_14_30 PM.png',
        'assets/flour/shama-chakki-gold-atta-2kg.webp',
        'assets/flour/shama-chakki-gold-atta-5kg.webp',
        'assets/flour/shama-chakki-gold-atta-10kg.webp'
      ],
      initial: ['assets/flour/shama-chakki-gold-atta-2kg.webp', 'assets/flour/shama-chakki-gold-atta-5kg.webp', 'assets/flour/shama-chakki-gold-atta-10kg.webp']
    },
    'Shama Chapati Atta T110': {
      ids: [7, 8], pack: '10kg / 20kg',
      direct: [
        'assets/flour/ChatGPT Image Apr 27, 2026, 11_21_48 PM.png',
        'assets/flour/ChatGPT Image Apr 27, 2026, 11_58_13 PM.png',
        'assets/flour/shama-chapati-atta-t110-10kg.webp',
        'assets/flour/shama-chapati-atta-t110-20kg.webp'
      ],
      initial: ['assets/flour/shama-chapati-atta-t110-10kg.webp', 'assets/flour/shama-chapati-atta-t110-20kg.webp']
    },

    'Shama Masoor Dal': {
      ids: [13, 9], pack: '1kg / 5kg',
      direct: [
        'assets/lentils/shama-masoor-dal-1kg.webp',
        'assets/lentils/shama-masoor-dal-5kg.webp',
        'assets/lentils/ChatGPT Image Apr 27, 2026, 02_11_17 PM.png',
        'assets/lentils/ChatGPT Image May 18, 2026, 05_35_28 PM.png'
      ]
    },
    'Shama Black Eye Beans': {
      ids: [10], pack: '1kg',
      direct: ['assets/lentils/shama-black-eye-beans-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 01_58_28 PM.png']
    },
    'Shama Chana Dal': {
      ids: [11], pack: '1kg',
      direct: ['assets/lentils/shama-chana-dal-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 02_02_17 PM.png']
    },
    'Shama Kala Chana': {
      ids: [12], pack: '1kg',
      direct: ['assets/lentils/shama-kala-chana-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 02_08_38 PM.png']
    },
    'Shama Masoor Dal Whole': {
      ids: [14], pack: '1kg',
      direct: ['assets/lentils/shama-masoor-whole-1kg.webp', 'assets/lentils/shama-masoor-dal-whole-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 02_23_01 PM.png']
    },
    'Shama Moong Dal Washed': {
      ids: [15], pack: '1kg',
      direct: ['assets/lentils/shama-moong-dal-washed-1kg.webp', 'assets/lentils/shama-moong-dal-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 02_25_46 PM.png']
    },
    'Shama Moong Dal Whole': {
      ids: [16], pack: '1kg',
      direct: ['assets/lentils/shama-moong-whole-1kg.webp', 'assets/lentils/shama-moong-dal-whole-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 02_29_04 PM.png']
    },
    'Shama Chitra Rajma': {
      ids: [17], pack: '1kg',
      direct: ['assets/lentils/shama-chitra-rajma-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 02_35_42 PM.png']
    },
    'Shama Red Kidney Beans': {
      ids: [18], pack: '1kg',
      direct: ['assets/lentils/shama-red-kidney-beans-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 02_41_41 PM.png']
    },
    'Shama Toor Dal': {
      ids: [19], pack: '1kg',
      direct: ['assets/lentils/shama-toor-dal-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 02_45_52 PM.png']
    },
    'Shama Urad Dal Chilka': {
      ids: [20], pack: '1kg',
      direct: ['assets/lentils/shama-urad-dal-chilka-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 03_16_59 PM.png']
    },
    'Shama Urad Dal Washed': {
      ids: [21], pack: '1kg',
      direct: ['assets/lentils/shama-urad-dal-washed-1kg.webp', 'assets/lentils/shama-urad-dal-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 03_21_08 PM.png']
    },
    'Shama Urad Dal Gota': {
      ids: [22], pack: '1kg',
      direct: ['assets/lentils/shama-urad-gota-1kg.webp', 'assets/lentils/shama-urad-dal-gota-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 03_31_46 PM.png']
    },
    'Shama Urad Dal Whole': {
      ids: [23], pack: '1kg',
      direct: ['assets/lentils/shama-urad-whole-1kg.webp', 'assets/lentils/shama-urad-dal-whole-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 03_38_14 PM.png']
    },
    'Shama White Chick Peas': {
      ids: [24], pack: '1kg',
      direct: ['assets/lentils/shama-white-chick-peas-1kg.webp', 'assets/lentils/shama-white-chickpeas-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 03_41_36 PM.png']
    },
    'Shama Moong Dal Chilka': {
      ids: [25], pack: '1kg',
      direct: ['assets/lentils/shama-moong-dal-chilka-1kg.webp', 'assets/lentils/ChatGPT Image Apr 27, 2026, 03_57_44 PM.png']
    }
  };

  function getProduct(title, config) {
    let product = productData.find(item => item.category === 'flour' && item.title === title);
    if (!product) {
      product = { category: 'flour', title, pack: config.pack, image: PLACEHOLDER };
      productData.push(product);
    }
    product.pack = config.pack;

    // Never replace a working existing image with a missing placeholder while HQ images resolve.
    if (config.initial && config.initial.length) {
      product.image = config.initial[0];
      product.images = [...config.initial];
    } else {
      product.image = product.image || PLACEHOLDER;
      product.images = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
    }
    return product;
  }

  Object.entries(manifest).forEach(([title, config]) => getProduct(title, config));

  function loadDirectImage(url) {
    return new Promise(resolve => {
      const image = new Image();
      const probe = `${url}${url.includes('?') ? '&' : '?'}v=${VERSION}`;
      image.onload = () => resolve(probe);
      image.onerror = () => resolve(null);
      image.src = probe;
    });
  }

  async function loadEncodedImage(id) {
    const name = String(id).padStart(2, '0');
    const response = await fetch(`assets/lentils/atlas/${name}.txt?v=${VERSION}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Image ${name} unavailable`);
    const base64 = (await response.text()).replace(/\s+/g, '');
    if (!base64 || !base64.startsWith('UklG')) throw new Error(`Image ${name} invalid`);
    return `data:image/webp;base64,${base64}`;
  }

  async function resolveProduct(title, config) {
    const product = getProduct(title, config);
    const existingImage = product.image || PLACEHOLDER;
    const existingImages = Array.isArray(product.images) && product.images.length ? [...product.images] : [existingImage];

    // Prefer real uploaded HQ files when they exist.
    const directSettled = await Promise.all((config.direct || []).map(loadDirectImage));
    const directLoaded = directSettled.filter(Boolean);
    if (directLoaded.length) {
      product.image = directLoaded[0];
      product.images = directLoaded;
      return;
    }

    // Fall back to the encoded atlas for older entries.
    const atlasSettled = await Promise.allSettled((config.ids || []).map(loadEncodedImage));
    const atlasLoaded = atlasSettled.filter(result => result.status === 'fulfilled').map(result => result.value);
    if (atlasLoaded.length) {
      product.image = atlasLoaded[0];
      product.images = atlasLoaded;
      return;
    }

    // Last resort: preserve the pre-existing catalogue image instead of showing a broken card.
    product.image = existingImage;
    product.images = existingImages;
  }

  Promise.all(Object.entries(manifest).map(([title, config]) => resolveProduct(title, config)))
    .finally(() => {
      window.__shamaFlourImagesReady = true;
      document.dispatchEvent(new CustomEvent('shama:product-images-updated'));
      if (typeof window.shamaRerenderSimpleProducts === 'function') {
        window.shamaRerenderSimpleProducts();
      }
    });
})();
