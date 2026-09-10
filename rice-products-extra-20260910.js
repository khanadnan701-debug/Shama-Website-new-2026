(() => {
  const riceProductsExtra20260910 = [
    {
      category: 'rice',
      title: 'Shama Broken Basmati Rice',
      pack: '2226A - 20kg x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789054080/shama_broken_basmati_rice_20kg.png'
    },
    {
      category: 'rice',
      title: 'Shama Broken Basmati Rice',
      pack: '2219A - 5kg x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789054079/shama_broken_basmati_rice_5kg.png'
    },
    {
      category: 'rice',
      title: 'Shama Sona Masoori Rice',
      pack: '5kg x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789054078/sona_masoori_5kg.png'
    },
    {
      category: 'rice',
      title: 'Shama Thai Jasmine Broken Rice (1 Time)',
      pack: '20kg x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064691/Shama_thai_jasmine_1_volta_20kg.png'
    },
    {
      category: 'rice',
      title: 'Shama Thai Jasmine Broken Rice (1 Time)',
      pack: '5kg x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064689/Shama_thai_jasmine_1_volta_5kg.png'
    },
    {
      category: 'rice',
      title: 'Shama Thai Jasmine Broken Rice (1 Time)',
      pack: '1kg x 20',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064690/Shama_thai_jasmine_1_volta_1kg.png'
    },
    {
      category: 'rice',
      title: 'Shama Thai Jasmine Broken Rice (2 Times)',
      pack: '20kg x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064689/Shama_thai_jasmine_2_volta_20kg.png'
    },
    {
      category: 'rice',
      title: 'Shama Thai Jasmine Broken Rice (2 Times)',
      pack: '5kg x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064690/Shama_thai_jasmine_2_volta_5kg.png'
    },
    {
      category: 'rice',
      title: 'Shama Thai Jasmine Broken Rice (2 Times)',
      pack: '1kg x 20',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064692/Shama_thai_jasmine_2_volta_1kg.png'
    }
  ];

  function appendMissingRiceProducts() {
    if (typeof productData === 'undefined' || !Array.isArray(productData)) return false;

    const existingKeys = new Set(
      productData.map((item) => `${item.category}|${item.title}|${item.pack}`)
    );
    const additions = riceProductsExtra20260910.filter(
      (item) => !existingKeys.has(`${item.category}|${item.title}|${item.pack}`)
    );

    if (additions.length) {
      const firstNonRiceIndex = productData.findIndex((item) => item.category !== 'rice');
      if (firstNonRiceIndex === -1) {
        productData.push(...additions);
      } else {
        productData.splice(firstNonRiceIndex, 0, ...additions);
      }
    }

    return additions.length > 0;
  }

  function refreshRicePage() {
    const changed = appendMissingRiceProducts();
    if (changed && typeof window.shamaRerenderSimpleProducts === 'function') {
      window.shamaRerenderSimpleProducts();
    }
    if (changed) {
      document.dispatchEvent(new CustomEvent('shama:product-images-updated'));
    }
  }

  refreshRicePage();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshRicePage, { once: true });
  } else {
    setTimeout(refreshRicePage, 0);
  }

  window.addEventListener('load', refreshRicePage, { once: true });
})();
