(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
  {
    "category": "preserves",
    "title": "Shama Kesar Mango Plup Kesar",
    "pack": "Contact us for available pack sizes",
    "image": "/assets/preserves/shama-kesar-mango-plup-kesar.webp"
  },
  {
    "category": "preserves",
    "title": "Shama Kesar Mango Plup Alphonso",
    "pack": "Contact us for available pack sizes",
    "image": "/assets/preserves/shama-kesar-mango-plup-alphonso.webp"
  },
  {
    "category": "preserves",
    "title": "Haldiram Sweet Gulab Jamun",
    "pack": "1kg",
    "image": "/assets/preserves/haldiram-sweet-gulab-jamun-1kg.webp"
  },
  {
    "category": "preserves",
    "title": "Khanum Vegetable Ghee",
    "pack": "4kg",
    "image": "/assets/preserves/khanum-vegetable-ghee-4kg.webp"
  },
  {
    "category": "preserves",
    "title": "Khanum Vegetable Ghee",
    "pack": "12.5kg",
    "image": "/assets/preserves/khanum-vegetable-ghee-12-5kg.webp"
  },
  {
    "category": "preserves",
    "title": "Khanum Butter Ghee",
    "pack": "500g",
    "image": "/assets/preserves/khanum-butter-ghee-500g.webp"
  },
  {
    "category": "preserves",
    "title": "Khanum Vegetable Ghee",
    "pack": "2kg",
    "image": "/assets/preserves/khanum-vegetable-ghee-2kg.webp"
  },
  {
    "category": "preserves",
    "title": "Khanum Vegetable Ghee",
    "pack": "1kg",
    "image": "/assets/preserves/khanum-vegetable-ghee-1kg.webp"
  },
  {
    "category": "preserves",
    "title": "Schani Peeled Tomatoes",
    "pack": "Contact us for available pack sizes",
    "image": "/assets/preserves/schani-peeled-tomatoes.webp"
  },
  {
    "category": "preserves",
    "title": "Shama Sarson Ka Saag",
    "pack": "400g",
    "image": "/assets/preserves/shama-sarson-ka-saag-400g.webp"
  },
  {
    "category": "preserves",
    "title": "Tomate Peeled",
    "pack": "2.5kg",
    "image": "/assets/preserves/tomate-peeled-2-5-kg.webp"
  },
  {
    "category": "preserves",
    "title": "Shama White Vinegar",
    "pack": "300ml",
    "image": "/assets/preserves/shama-white-vinegar-300ml.webp"
  },
  {
    "category": "preserves",
    "title": "Khanum Butter Ghee",
    "pack": "2kg",
    "image": "/assets/preserves/khanum-butter-ghee-2kg.webp"
  },
  {
    "category": "preserves",
    "title": "Khanum Butter Ghee",
    "pack": "1kg",
    "image": "/assets/preserves/khanum-butter-ghee-1kg.webp"
  },
  {
    "category": "preserves",
    "title": "Shama Sarson Ka Saag",
    "pack": "800g",
    "image": "/assets/preserves/shama-sarson-ka-saag-800g.webp"
  },
  {"category":"preserves","title":"Shama Sarson Ka Saag","pack":"850g","image":"/assets/preserves/shama-sarson-ka-saag-850g.webp"},
  {"category":"preserves","title":"Prima Plum Tomatoes","pack":"6 x 2550g","image":"/assets/preserves/prima-plum-tomatoes-6-x-2550g.webp"},
  {"category":"preserves","title":"Shama Coconut Milk","pack":"400ml","image":"/assets/preserves/shama-coconut-milk-400ml.webp"}
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