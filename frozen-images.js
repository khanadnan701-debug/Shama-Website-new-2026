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
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625184/Shama_Vegetable_Samosa_20_pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Vegetable Samosa",
    "pack": "50 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625151/Shama_vegetable_Samosa_50_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Punjabi Potato Samosa",
    "pack": "12 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625164/Shama_Punjabi_potato_samosa_12_Pcs.png"
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
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625184/Shama_Lamb_Meat_Samosa_50_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Chicken Samosa",
    "pack": "50 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625178/Shama_Chicken_Samosa_50_pcs.png"
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
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625179/Shama_Cocktail_Samosa_3_Pcs.png"
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
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625163/Shama_vegetable_spring_rolls_20_pcs.png"
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
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625181/Shama_chicken_Spring_Rolls_20_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Chicken Spring Rolls",
    "pack": "50 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625182/Shama_Chicken_Spring_Rolls_50_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lamb Meat Spring Rolls",
    "pack": "20 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625172/Shama_Lamb_Meat_Spring_Rolls_20_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lamb Meat Spring Rolls",
    "pack": "50 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625151/Shama_lamb_Meat_Spring_Rolls_50_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Lahori Chicken Kebab",
    "pack": "15 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625181/shama_lahori_chicken_kebab_15_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Mutton Lahori Kebab",
    "pack": "15 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625183/15_Mutton_Lahori_Kebab_15_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Plain Paratha",
    "pack": "30 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791205446/Shama_Plain_Paratha_30pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Crispy Plain Paratha",
    "pack": "20 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625166/Shama_crispy_plain_paratha_20_Pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Paratha",
    "pack": "5 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625174/Mazedaar_Paratha_5_pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Onion Paratha",
    "pack": "5 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625175/Mazedaar_Onion_Paratha_5pcs.png"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Plain Paratha",
    "pack": "20 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625175/Mazedaar_Plain_Paratha_20_pcs.png.png"
  },
  {
    "category": "frozen",
    "brand": "Mazedaar",
    "title": "Mazedaar Plain Paratha",
    "pack": "5 pcs",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625176/Mazedaar_Plain_Paratha_5_pcs.png"
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
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625178/Mazedaar_Vegetable_Paratha_3_pcs.png.png"
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
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625169/Shama_Cut_Okra_400gms.png.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Green Chilli",
    "pack": "400g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625171/Shama_green_chilli_400_Gms.png.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Karela",
    "pack": "400g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625173/Shama_karela_400Gms.png.png"
  },
  {
    "category": "frozen",
    "brand": "Shama",
    "title": "Shama Falsa",
    "pack": "454g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625170/Shama_falsa_454Gms.png.png"
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