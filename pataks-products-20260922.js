(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  // Exact mirror of current Cloudinary shama/PATAKS folder: 10 assets.
  const items = [
  [
    "Patak's Tikka Masala Paste",
    "1977B - 283g x 1",
    "/assets/cloudinary-shama/pataks/patak-s-tikka-masala-paste-283g-1ca623ea2888.webp"
  ],
  [
    "Patak's Madras Kebab Curry Paste",
    "6478B - 2.4kg x 1",
    "/assets/cloudinary-shama/pataks/patak-madras-kebab-paste-2-4kg-cc6d251b730a.webp"
  ],
  [
    "Patak's Tandoori Marinade Paste",
    "6447A - 2.5kg x 1",
    "/assets/cloudinary-shama/pataks/patak-s-tandoori-paste-2-5kg-ac0ad19629f3.webp"
  ],
  [
    "Patak's Mild Curry Paste",
    "6508B - 2.3kg x 1",
    "/assets/cloudinary-shama/pataks/patak-mild-curry-paste-2-3kg-edb4842071f3.webp"
  ],
  [
    "Patak's Tikka Paste",
    "6454B - 2.4kg x 1",
    "/assets/cloudinary-shama/pataks/patak-tikka-paste-2-4kg-514adaaf5552.webp"
  ],
  [
    "Patak's Kashmiri Masala Paste",
    "6430B - 2.2kg x 1",
    "/assets/cloudinary-shama/pataks/patak-kashmiri-masala-paste-2-2-kg-501091beca30.webp"
  ],
  [
    "Patak's Butter Chicken Paste",
    "1718A - 2.3kg x 1",
    "/assets/cloudinary-shama/pataks/patak-butter-chicken-paste-2-3-kg-10643fdf7d0e.webp"
  ],
  [
    "Patak's Korma Paste",
    "1671A - 2.3kg x 1",
    "/assets/cloudinary-shama/pataks/patak-korma-paste-2-3kg-def1a322094c.webp"
  ],
  [
    "Patak's Biryani Paste",
    "6485A - 2.3kg x 1",
    "/assets/cloudinary-shama/pataks/patak-biryani-paste-2-3kg-71b7763e2b43.webp"
  ],
  [
    "Patak's Balti Curry Paste",
    "6423A - 2.3kg x 1",
    "/assets/cloudinary-shama/pataks/patak-balty-curry-paste-2-3kg-1f6ac0947f56.webp"
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