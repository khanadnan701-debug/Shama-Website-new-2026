(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  // Exact catalogue mirror of Cloudinary folder: shama/Oils (16 assets).
  // Products not represented by an asset in this folder are removed from the Oils page.
  const assets = [
    ['Shama_sesame_oil_290ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465760/Shama_sesame_oil_290ml.png'],
    ['Shama_castor_oil_290ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465761/Shama_castor_oil_290ml.png'],
    ['Shama_mustard_oil_290ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465761/Shama_mustard_oil_290ml.png'],
    ['Shama_black_seed_oil_290ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678760/Shama_black_seed_oil_290ml.png'],
    ['Shama_kewra_water_250ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678740/Shama_kewra_water_250ml.png'],
    ['Shama_coconut_pure_natural_oil_250ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678740/Shama_coconut_pure_natural_oil_250ml.png'],
    ['Shama_mustard_oil_200ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678754/Shama_mustard_oil_200ml.png'],
    ['Shama_mustard_oil_500ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678754/Shama_mustard_oil_500ml.png'],
    ['Shama_sunflower_oil_5ltr','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678755/Shama_sunflower_oil_5ltr.png'],
    ['Shama_coconut_pure_natural_oil_500ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678756/Shama_coconut_pure_natural_oil_500ml.png'],
    ['Shama_mustard_oil_300ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678756/Shama_mustard_oil_300ml.png'],
    ['Shama_almond_oil_500ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678757/Shama_almond_oil_500ml.png'],
    ['Shama_almond_oil_250ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678757/Shama_almond_oil_250ml.png'],
    ['Shama_sunflower_oil_20ltr','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678758/Shama_sunflower_oil_20ltr.png'],
    ['Shama_sunflower_oil_1ltr','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678758/Shama_sunflower_oil_1ltr.png'],
    ['Shama_amla_hair_oil_150ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678759/Shama_amla_hair_oil_150ml.png']
  ];

  function titleCase(value) {
    return value.toLowerCase().replace(/\b\w/g, ch => ch.toUpperCase());
  }

  function makeTitle(id) {
    const stem = id.replace(/^Shama_/i, '').replace(/_\d+(?:\.\d+)?(?:ml|ltr)$/i, '').replace(/_/g, ' ');
    return `Shama ${titleCase(stem)}`;
  }

  function makePack(id) {
    const match = id.match(/_(\d+(?:\.\d+)?)(ml|ltr)$/i);
    if (!match) return 'Contact us for available pack size';
    const unit = match[2].toLowerCase() === 'ltr' ? 'L' : 'ml';
    return `${match[1]}${unit} x 1`;
  }

  const folderProducts = assets.map(([id, image]) => ({
    category: 'oils',
    title: makeTitle(id),
    pack: makePack(id),
    image
  }));

  const nonOils = productData.filter(item => item.category !== 'oils');
  productData.splice(0, productData.length, ...nonOils, ...folderProducts);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(item => item.slug === 'oils');
    if (category) {
      category.image = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678755/Shama_sunflower_oil_5ltr.png';
      category.desc = 'Cooking, wellness and hair oils from the current Shama catalogue';
    }
  }

  window.shamaOilsFolderCatalogue = { total: folderProducts.length };
})();
