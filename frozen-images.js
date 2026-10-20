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
    "image": "/assets/frozen/shama-punjabi-potato-samosa-lifestyle-20261020.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lamb Meat Samosa",
    "pack": "20 pcs",
    "image": "/assets/cloudinary-shama/frozen/shama-lamb-meat-samosa-20pcs-png-137aabbbe5f0.webp"
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
    "image": "/assets/cloudinary-shama/frozen/shama-chicken-tikka-samosa-20pcs-fd4740726fb5.webp"
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
    "image": "/assets/cloudinary-shama/frozen/mazedar-potato-samosa-20pcs-64cf364138f4.webp"
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
    "image": "/assets/cloudinary-shama/frozen/shama-vegetable-spring-rolls-50-pcs-c603b63ab822.webp"
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
    "image": "/assets/frozen/shama-plain-paratha-lifestyle-20261020.webp"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Crispy Plain Paratha",
    "pack": "20 pcs",
    "image": "/assets/frozen/shama-crispy-plain-paratha-lifestyle-20261020.webp"
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
    "image": "/assets/cloudinary-shama/frozen/mazedaar-onion-paratha-3-pcs-890d7d19aef0.webp"
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
    "image": "/assets/cloudinary-shama/frozen/mazedar-whole-wheat-paratha-20-pcs-1bbcbc047d6a.webp"
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
    "image": "/assets/cloudinary-shama/frozen/shama-frozen-methi-400g-b723636384ac.webp"
  },
  {
    "category": "frozen",
    "brand": "Other",
    "title": "Tilapia Moyen 600/800",
    "pack": "4 kg",
    "image": "/assets/cloudinary-shama/frozen/tilapia-moyen-600-800-4-kg-64713677789f.webp"
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
      category.image = '/assets/cloudinary-shama/frozen/mazedar-potato-samosa-20pcs-64cf364138f4.webp';
    }
  }

  window.shamaFrozenCatalogue = {
    cloudinaryTotal:32,
    total:items.length,
    source:'shama/Frozen',
    syncedAt:'2026-10-05'
  };
})();