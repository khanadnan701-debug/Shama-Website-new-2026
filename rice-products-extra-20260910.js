(() => {
  const riceProductsExtra20260910 = [
    {
      category: 'rice',
      title: 'Shama Broken Basmati Rice',
      pack: '2226A - 20kg x 1',
      image: '/assets/rice/shama-broken-basmati-rice-20kg.webp'
    },
    {
      category: 'rice',
      title: 'Shama Broken Basmati Rice',
      pack: '2219A - 5kg x 1',
      image: '/assets/rice/shama-broken-basmati-rice-new-5kg.webp'
    },
    {
      category: 'rice',
      title: 'Shama Sona Masoori Rice',
      pack: '5kg x 1',
      image: '/assets/rice/sona-masoori-5kg.webp'
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
