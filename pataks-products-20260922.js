(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  // Exact mirror of current Cloudinary shama/PATAKS folder: 10 assets.
  const items = [
  [
    "Patak's Tikka Masala Paste",
    "283g x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033981/patak_s_tikka_masala_paste_283g.png"
  ],
  [
    "Patak's Madras Kebab Curry Paste",
    "2.4kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033980/Patak_madras_kebab_paste_2.4kg.png"
  ],
  [
    "Patak's Tandoori Marinade Paste",
    "2.5kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033979/patak_s_tandoori_paste_2.5kg.png"
  ],
  [
    "Patak's Mild Curry Paste",
    "2.3kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033978/Patak_mild_curry_paste_2.3kg.png"
  ],
  [
    "Patak's Tikka Paste",
    "2.4kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033976/Patak_tikka_paste_2.4kg.png"
  ],
  [
    "Patak's Kashmiri Masala Paste",
    "2.2kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033976/Patak_kashmiri_masala_paste_2.2_kg.png"
  ],
  [
    "Patak's Butter Chicken Paste",
    "2.3kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033975/Patak_butter_chicken_paste_2.3_kg.png"
  ],
  [
    "Patak's Korma Paste",
    "2.3kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033975/Patak_korma_paste_2.3kg.png"
  ],
  [
    "Patak's Biryani Paste",
    "2.3kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033974/Patak_biryani_paste_2.3kg.png"
  ],
  [
    "Patak's Balti Curry Paste",
    "2.3kg x 1",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791033974/Patak_balty_curry_paste_2.3kg.png"
  ]
]
    .map(([title,pack,image])=>({category:'pataks',title,pack,image}));

  const otherProducts = productData.filter(item => item.category !== 'pataks');
  productData.splice(0, productData.length, ...otherProducts, ...items);

  const category = categories.find(x=>x.slug==='pataks');
  if (category) {
    category.name = "Pataks";
    category.desc = "Patak's curry and marinade pastes";
    category.image = items[8].image;
  } else {
    categories.push({
      slug:'pataks',
      name:'Pataks',
      desc:"Patak's curry and marinade pastes",
      image:items[8].image
    });
  }

  window.shamaPataksFolderCatalogue = {
    cloudinaryTotal: 10,
    total: items.length,
    source:'shama/PATAKS',
    syncedAt:'2026-10-03'
  };
})();