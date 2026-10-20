(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  // Exact catalogue mirror of Cloudinary folder: shama/Oils (16 assets).
  // Products not represented by an asset in this folder are removed from the Oils page.
  const assets = [
    ['Shama_sesame_oil_290ml','/assets/cloudinary-shama/cosmetics/shama-sesame-oil-290ml-a213a66001f2.webp'],
    ['Shama_castor_oil_290ml','/assets/cloudinary-shama/cosmetics/shama-castor-oil-290ml-dea2c9cbf15d.webp'],
    ['Shama_mustard_oil_290ml','/assets/cloudinary-shama/cosmetics/shama-mustard-oil-290ml-2389afdd5597.webp'],
    ['Shama_black_seed_oil_290ml','/assets/cloudinary-shama/cosmetics/shama-black-seed-oil-290ml-8552a10dd9c4.webp'],
    ['Shama_kewra_water_250ml','/assets/cloudinary-shama/oils/shama-kewra-water-250ml-56330296b858.webp'],
    ['Shama_coconut_pure_natural_oil_250ml','/assets/cloudinary-shama/oils/shama-coconut-pure-natural-oil-250ml-fcb44cb5e5f3.webp'],
    ['Shama_mustard_oil_200ml','/assets/cloudinary-shama/oils/shama-mustard-oil-200ml-76cb0c80ce8f.webp'],
    ['Shama_mustard_oil_500ml','/assets/cloudinary-shama/cosmetics/shama-mustard-oil-500ml-78d0a4ef381a.webp'],
    ['Shama_sunflower_oil_5ltr','/assets/cloudinary-shama/oils/shama-sunflower-oil-5ltr-8ba69b6f8d48.webp'],
    ['Shama_coconut_pure_natural_oil_500ml','/assets/cloudinary-shama/oils/shama-coconut-pure-natural-oil-500ml-f2afba8d89d9.webp'],
    ['Shama_mustard_oil_300ml','/assets/cloudinary-shama/oils/shama-mustard-oil-300ml-d61ad4135105.webp'],
    ['Shama_almond_oil_500ml','/assets/cloudinary-shama/oils/shama-almond-oil-500ml-7726603cd706.webp'],
    ['Shama_almond_oil_250ml','/assets/cloudinary-shama/cosmetics/shama-almond-oil-250ml-714061551cae.webp'],
    ['Shama_sunflower_oil_20ltr','/assets/cloudinary-shama/oils/shama-sunflower-oil-20ltr-0a33f1f9d120.webp'],
    ['Shama_sunflower_oil_1ltr','/assets/cloudinary-shama/oils/shama-sunflower-oil-1ltr-35ee7cf92c46.webp'],
    ['Shama_amla_hair_oil_150ml','/assets/cloudinary-shama/cosmetics/shama-amla-hair-oil-150ml-d32506f6d934.webp']
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
      category.image = '/assets/cloudinary-shama/oils/shama-sunflower-oil-5ltr-8ba69b6f8d48.webp';
      category.desc = 'Cooking, wellness and hair oils from the current Shama catalogue';
    }
  }

  window.shamaOilsFolderCatalogue = { total: folderProducts.length };
})();
