(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  // Curated Oils category: 4 products only. Other products are retained in their
  // original categories and all source images stay untouched.
  const assets = [
    ['Shama_mustard_oil_200ml','/assets/cloudinary-shama/oils/shama-mustard-oil-200ml-76cb0c80ce8f.webp'],
    ['Shama_sunflower_oil_5ltr','/assets/cloudinary-shama/oils/shama-sunflower-oil-5ltr-8ba69b6f8d48.webp'],
    ['Shama_sunflower_oil_20ltr','/assets/cloudinary-shama/oils/shama-sunflower-oil-20ltr-0a33f1f9d120.webp'],
    ['Shama_sunflower_oil_1ltr','/assets/cloudinary-shama/oils/shama-sunflower-oil-1ltr-35ee7cf92c46.webp'],
  ];

  // Reference codes from supplied Oil product inventory screenshot.
  const ITEM_CODES = Object.freeze({
    'Shama_mustard_oil_200ml': '6606A',
    'Shama_sunflower_oil_5ltr': '5272',
    'Shama_sunflower_oil_1ltr': '5289',
    'Shama_sunflower_oil_20ltr': '5651'
  });

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
    pack: ITEM_CODES[id] ? `${ITEM_CODES[id]} - ${makePack(id)}` : makePack(id),
    image
  }));

  const nonOils = productData.filter(item => item.category !== 'oils');
  productData.splice(0, productData.length, ...nonOils, ...folderProducts);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(item => item.slug === 'oils');
    if (category) {
      category.image = '/assets/cloudinary-shama/oils/shama-sunflower-oil-5ltr-8ba69b6f8d48.webp';
      category.desc = 'Sunflower and mustard cooking oils for wholesale buyers';
    }
  }

  window.shamaOilsFolderCatalogue = { total: folderProducts.length };
})();
