(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
  {
    "category": "sea-food",
    "title": "Gambas 8-12",
    "pack": "Size 8–12",
    "image": "/assets/cloudinary-shama/sea-food/gambas-8-12-fdb47ab466a9.webp"
  },
  {
    "category": "sea-food",
    "title": "Shrimp Crevette 26 30",
    "pack": "Size 26–30",
    "image": "/assets/cloudinary-shama/sea-food/shrimp-crevette-26-30-3c1289f126d3.webp"
  },
  {
    "category": "sea-food",
    "title": "Gambas 16-20",
    "pack": "Size 16–20",
    "image": "/assets/cloudinary-shama/sea-food/gambas-16-20-d126c9f808d0.webp"
  },
  {
    "category": "sea-food",
    "title": "Shrimps Crevette 31-40",
    "pack": "Size 31–40",
    "image": "/assets/cloudinary-shama/sea-food/shrimps-crevette-31-40-a887fe309d97.webp"
  }
];

  const nonCategory = productData.filter(item => item.category !== 'sea-food');
  productData.splice(0, productData.length, ...nonCategory, ...items);

  const existing = categories.find(item => item.slug === 'sea-food');
  const category = {
    slug:'sea-food',
    name:'Sea Food',
    desc:'Frozen seafood selections for retail and foodservice',
    image:items[0]?.image || 'assets/shama-logo.png'
  };
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window['shama_sea_food_catalogue'] = { total: items.length };
})();