// Use the newly supplied Cloudinary images for the Oils category while preserving existing products.
(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const updates = [
    {
      titles: ['Shama Sesame Oil'],
      title: 'Shama Sesame Oil',
      pack: '290ml x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465760/Shama_sesame_oil_290ml.png'
    },
    {
      titles: ['Shama Castor Oil'],
      title: 'Shama Castor Oil',
      pack: '290ml x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465761/Shama_castor_oil_290ml.png'
    },
    {
      titles: ['Shama Black Seed Oil', 'Black Seed Oils'],
      title: 'Shama Black Seed Oil',
      pack: '290ml x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465761/Shama_black_seed_oil_290ml.png'
    },
    {
      titles: ['Shama Mustard Oil'],
      title: 'Shama Mustard Oil',
      pack: '290ml x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465761/Shama_mustard_oil_290ml.png'
    }
  ];

  for (const update of updates) {
    const matches = productData.filter((item) => item.category === 'oils' && update.titles.includes(item.title));
    if (matches.length) {
      for (const item of matches) {
        item.image = update.image;
        item.pack = update.pack;
      }
    } else {
      productData.push({ category: 'oils', title: update.title, pack: update.pack, image: update.image });
    }
  }

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find((item) => item.slug === 'oils');
    if (category) {
      category.image = updates[0].image;
      category.desc = 'Traditional cooking and wellness oils for everyday use';
    }
  }
})();
