// Replace the Miscellaneous catalogue with the newly supplied Cloudinary products.
// Existing matching titles/packs are preserved where possible; old unmatched Miscellaneous items are removed.
(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const norm = (value) => String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const fresh = [
    { title: 'Shama Lemon Dressing', pack: '400ml', terms: ['lemon', 'dressing'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464145/Shama_lemon_dressing_400ml.png' },
    { title: 'Shama Lemon Juice', pack: '200ml', terms: ['lemon', 'juice'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464146/Shama_lemon_juice_200ml.png' },
    { title: 'Shama Mouth Freshener', pack: 'Contact us for available pack sizes', terms: ['mouth', 'freshener'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464146/Shama_Mouth_Freshener.png' },
    { title: 'Shama Kewra Water', pack: 'Contact us for available pack sizes', terms: ['kewra', 'water'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Kewra_Water.png' },
    { title: 'Shama Rose Water', pack: '250ml', terms: ['rose', 'water'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Rose_Water_250ml.png' },
    { title: 'Shama Baking Powder', pack: '800g', terms: ['baking', 'powder'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464148/Shama_baking_powder_800gm.png' },
    { title: 'Shama Vinegar', pack: 'Contact us for available pack sizes', terms: ['vinegar'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464148/Shama_Vinegar.png' },
    { title: 'Shama Baking Soda', pack: '800g', terms: ['baking', 'soda'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_baking_soda_800gm.png' },
    { title: 'Shama Mixed Pickle', pack: '4kg', terms: ['mixed', 'pickle'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_mixed_pickle_4kg.png' },
    { title: 'Shama Pehalwan Rewari', pack: 'Contact us for available pack sizes', terms: ['pehalwan', 'rewari'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_Pehalwan_Rewari.png' },
    { title: 'Shama Black Salt', pack: '400g', terms: ['black', 'salt'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464150/Shama_black_salt_400gm.png' },
    { title: 'Shama Lime Juice', pack: '200ml', terms: ['lime', 'juice'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464150/Shama_lime_juice_200ml.png' },
    { title: 'Shama Roasted Vermicelli', pack: 'Contact us for available pack sizes', terms: ['vermicelli', 'roasted'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464151/Shama_Vermicelli_Roasted.png' },
    { title: 'Shama Sweet Fennel Seed', pack: 'Contact us for available pack sizes', terms: ['sweet', 'fennel'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464151/Shama_Sweet_Fennel_Seed.png' },
    { title: 'Shama Himalayan Pink Salt Fine', pack: 'Contact us for available pack sizes', terms: ['himalayan', 'pink', 'salt', 'fine'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464152/Shama_Himalayan_Pink_Salt_FINE.png' },
    { title: 'Shama Black Pepper', pack: '100g', terms: ['black', 'pepper'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464152/Shama_black_ppr_100gm.png' },
    { title: 'Shama Kesar Mango Pulp Kesar', pack: 'Contact us for available pack sizes', terms: ['kesar', 'mango', 'pulp'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464152/Shama_Kesar_Mango_Plup_Kesar.png' },
    { title: 'Shama Himalayan Pink Salt', pack: '1kg', terms: ['himalayan', 'pink', 'salt', '1kg'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464153/Shama_himalayan_pink_salt_1kg.png' },
    { title: 'Shama Himalayan Pink Salt Coarse', pack: 'Contact us for available pack sizes', terms: ['himalayan', 'pink', 'salt', 'coarse'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464153/Shama_Himalayan_Pink_Salt_COARSE.png' },
    { title: 'Shama Himalayan Pink Salt Pouch', pack: '1kg', terms: ['himalayan', 'pink', 'salt', 'pouch'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464154/Shama_himalayan_pink_salt_pouch_1kg.png' },
    { title: 'Shama Himalayan Pink Salt Jar', pack: '1kg', terms: ['himalayan', 'pink', 'salt', 'jar'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464154/Shama_himalayan_pink_salt_jar_1kg.png' },
    { title: 'Shama Himalayan Pink Salt', pack: 'Contact us for available pack sizes', terms: ['himalayan', 'pink', 'salt'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464155/Shama_himalayan_pink_salt.png' },
    { title: 'Shama Alphonso Mango Pulp', pack: 'Contact us for available pack sizes', terms: ['alphonso', 'mango', 'pulp'], image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464156/Shama_Kesar_Mango_Plup_Alphonso.png' }
  ];

  const oldMisc = productData.filter((item) => item.category === 'misc');
  const used = new Set();

  const replacement = fresh.map((entry) => {
    const matchIndex = oldMisc.findIndex((item, index) => {
      if (used.has(index)) return false;
      const title = norm(item.title);
      return entry.terms.every((term) => title.includes(norm(term)));
    });

    if (matchIndex >= 0) {
      used.add(matchIndex);
      return { ...oldMisc[matchIndex], category: 'misc', image: entry.image };
    }

    return {
      category: 'misc',
      title: entry.title,
      pack: entry.pack,
      image: entry.image
    };
  });

  const nonMisc = productData.filter((item) => item.category !== 'misc');
  productData.splice(0, productData.length, ...nonMisc, ...replacement);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find((item) => item.slug === 'misc');
    if (category) {
      category.name = 'Miscellaneous';
      category.desc = 'Everyday pantry essentials, salts, waters, baking ingredients and more';
      category.image = replacement[0]?.image || category.image;
    }
  }
})();
