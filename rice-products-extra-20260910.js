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
    }
  ];

  if (typeof productData !== 'undefined' && Array.isArray(productData)) {
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
  }
})();
