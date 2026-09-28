(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
  {
    "category": "sea-food",
    "title": "Gambas 8-12",
    "pack": "Size 8–12",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600837/Gambas_8-12.png"
  },
  {
    "category": "sea-food",
    "title": "Shrimp Crevette 26 30",
    "pack": "Size 26–30",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600838/Shrimp_Crevette_26_30.png"
  },
  {
    "category": "sea-food",
    "title": "Gambas 16-20",
    "pack": "Size 16–20",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600838/Gambas_16-20.png"
  },
  {
    "category": "sea-food",
    "title": "Shrimps Crevette 31-40",
    "pack": "Size 31–40",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600838/Shrimps_Crevette_31-40.png"
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