// Frozen catalogue synced to the current Cloudinary folder: shama/Frozen.
(() => {
  'use strict';
  if (document.body.dataset.category !== 'frozen') return;
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const items = [
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Vegetable Samosa",
    "pack": "20 pcs",
    "image": "/assets/frozen/shama-vegetable-samosa-20-lifestyle.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Vegetable Samosa",
    "pack": "50 pcs",
    "image": "/assets/frozen/shama-vegetable-samosa-50.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Punjabi Potato Samosa",
    "pack": "12 pcs",
    "image": "/assets/frozen/shama-punjabi-aloo-samosa-12.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lamb Meat Samosa",
    "pack": "20 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625173/Shama_Lamb_Meat_Samosa_20pcs.png.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lamb Meat Samosa",
    "pack": "50 pcs",
    "image": "/assets/frozen/shama-lamb-meat-samosa-50.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Chicken Samosa",
    "pack": "50 pcs",
    "image": "/assets/frozen/shama-chicken-samosa-50.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Chicken Tikka Samosa",
    "pack": "20 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625180/Shama_Chicken_tikka_Samosa_20Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Punjabi Style Cocktail Samosa",
    "pack": "3 pcs",
    "image": "/assets/frozen/shama-punjabi-cocktail-samosa.webp"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Potato Samosa",
    "pack": "20 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791202844/MAZEDAR_Potato_Samosa_20pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Vegetable Spring Rolls",
    "pack": "20 pcs",
    "image": "/assets/frozen/shama-vegetable-spring-roll-20.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Vegetable Spring Rolls",
    "pack": "50 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625164/Shama_vegetable_spring_rolls_50_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Chicken Spring Rolls",
    "pack": "20 pcs",
    "image": "/assets/frozen/shama-chicken-spring-roll-20.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Chicken Spring Rolls",
    "pack": "50 pcs",
    "image": "/assets/frozen/shama-chicken-spring-roll-50.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lamb Meat Spring Rolls",
    "pack": "20 pcs",
    "image": "/assets/frozen/shama-lamb-meat-spring-roll-20.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lamb Meat Spring Rolls",
    "pack": "50 pcs",
    "image": "/assets/frozen/shama-lamb-meat-spring-roll-50.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lahori Chicken Kebab",
    "pack": "15 pcs",
    "image": "/assets/frozen/shama-lahori-chicken-kebab-15.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Mutton Lahori Kebab",
    "pack": "15 pcs",
    "image": "/assets/frozen/shama-lahori-meat-kebab-15.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Plain Paratha",
    "pack": "30 pcs",
    "image": "/assets/frozen/shama-plain-paratha-30.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Crispy Plain Paratha",
    "pack": "20 pcs",
    "image": "/assets/frozen/shama-crispy-paratha-20.webp"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Paratha",
    "pack": "5 pcs",
    "image": "/assets/frozen/mazedar-plain-paratha-5.webp"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Onion Paratha",
    "pack": "5 pcs",
    "image": "/assets/frozen/mazedar-onion-paratha.webp"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Plain Paratha",
    "pack": "20 pcs",
    "image": "/assets/frozen/mazedar-plain-paratha-20.webp"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Plain Paratha",
    "pack": "5 pcs",
    "image": "/assets/frozen/mazedar-plain-paratha-5.webp"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Onion Paratha",
    "pack": "3 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625177/Mazedaar_onion_paratha_3_pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Vegetable Paratha",
    "pack": "3 pcs",
    "image": "/assets/frozen/mazedar-vegetable-paratha.webp"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Whole Wheat Paratha",
    "pack": "20 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791201289/Mazedar_Whole_Wheat_Paratha_20_pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Cut Okra",
    "pack": "400g",
    "image": "/assets/frozen/shama-cut-okra.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Green Chilli",
    "pack": "400g",
    "image": "/assets/frozen/shama-green-chilli.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Karela",
    "pack": "400g",
    "image": "/assets/frozen/shama-karela.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Falsa",
    "pack": "454g",
    "image": "/assets/frozen/shama-falsa.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Frozen Methi",
    "pack": "400g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791201865/SHAMA_Frozen_Methi_400g.png"
  },
  {
    "category": "frozen",
    "brand": "Other",
    "title": "Tilapia Moyen 600/800",
    "pack": "4 kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791201289/Tilapia_Moyen_600_800_4_kg.png"
  }
];

  for (let i = productData.length - 1; i >= 0; i--) {
    if (productData[i]?.category === 'frozen') productData.splice(i, 1);
  }
  productData.push(...items);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(item => item.slug === 'frozen');
    if (category) {
      category.name = 'Frozen';
      category.desc = 'Samosa, spring rolls, kebabs, paratha, frozen vegetables, fruit and seafood';
      category.image = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791202844/MAZEDAR_Potato_Samosa_20pcs.png';
    }
  }

  window.shamaFrozenCatalogue = {
    cloudinaryTotal:32,
    total:items.length,
    source:'shama/Frozen',
    syncedAt:'2026-10-05'
  };
})();