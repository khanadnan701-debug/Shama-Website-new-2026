(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
  {
    "category": "preserves",
    "title": "Shama Kesar Mango Plup Kesar",
    "pack": "Contact us for available pack sizes",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464152/Shama_Kesar_Mango_Plup_Kesar.png"
  },
  {
    "category": "preserves",
    "title": "Shama Kesar Mango Plup Alphonso",
    "pack": "Contact us for available pack sizes",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464156/Shama_Kesar_Mango_Plup_Alphonso.png"
  },
  {
    "category": "preserves",
    "title": "Haldiram Sweet Gulab Jamun",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600799/Haldiram_Sweet_Gulab_Jamun_1kg.png"
  },
  {
    "category": "preserves",
    "title": "Khanum Vegetable Ghee",
    "pack": "4kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600800/Khanum_Vegetable_Ghee_4kg.png"
  },
  {
    "category": "preserves",
    "title": "Khanum Vegetable Ghee",
    "pack": "12.5kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600800/Khanum_Vegetable_Ghee_12.5kg.png"
  },
  {
    "category": "preserves",
    "title": "Khanum Butter Ghee",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600800/Khanum_Butter_Ghee_500g.png"
  },
  {
    "category": "preserves",
    "title": "Khanum Vegetable Ghee",
    "pack": "2kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600800/Khanum_Vegetable_Ghee_2kg.png"
  },
  {
    "category": "preserves",
    "title": "Khanum Vegetable Ghee",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600800/Khanum_Vegetable_Ghee_1kg.png"
  },
  {
    "category": "preserves",
    "title": "Schani Peeled Tomatoes",
    "pack": "Contact us for available pack sizes",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600801/Schani_Peeled_Tomatoes.png"
  },
  {
    "category": "preserves",
    "title": "Shama Sarson Ka Saag",
    "pack": "400g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600802/Shama_Sarson_Ka_Saag_400g.png"
  },
  {
    "category": "preserves",
    "title": "Tomate Peeled",
    "pack": "2.5kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600802/Tomate_peeled_2.5_kg.png"
  },
  {
    "category": "preserves",
    "title": "Shama White Vinegar",
    "pack": "300ml",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600802/SHAMA_White_Vinegar_300ml.png"
  },
  {
    "category": "preserves",
    "title": "Khanum Butter Ghee",
    "pack": "2kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600803/Khanum_Butter_Ghee_2kg.png"
  },
  {
    "category": "preserves",
    "title": "Khanum Butter Ghee",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600803/Khanum_Butter_Ghee_1kg.png"
  },
  {
    "category": "preserves",
    "title": "Shama Sarson Ka Saag",
    "pack": "800g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600803/Shama_Sarson_Ka_Saag_800g.png"
  }
];

  const nonCategory = productData.filter(item => item.category !== 'preserves');
  productData.splice(0, productData.length, ...nonCategory, ...items);

  const existing = categories.find(item => item.slug === 'preserves');
  const category = {
    slug:'preserves',
    name:'Preserves',
    desc:'Ghee, preserved foods, tomatoes, vinegar and ready pantry favourites',
    image:items[0]?.image || 'assets/shama-logo.png'
  };
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window['shama_preserves_catalogue'] = { total: items.length };
})();