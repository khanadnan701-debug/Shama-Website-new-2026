(() => {
  'use strict';

  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const dryFruitProducts = [
    {
      category: 'dry-fruits',
      title: 'Shama Coconut Powder',
      pack: '0390A - 400g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-coconut-powder-400gm-78cbef8970be.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Roasted Gram & Makhana',
      pack: '2867A - 200g Jar',
      image: '/assets/cloudinary-shama/dry-fruits/shama-roasted-gram-and-makhana-200g-jar-893255bfe8df.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Broken Cashew',
      pack: '0741A - 800g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-broken-cajou-800gm-03a35ab4eb78.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '6377A - 100g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-golden-raisin-100g-9ad60bda9522.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '2554C - 200g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-golden-raisin-200g-9cbb97405a4a.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Almonds',
      pack: '0642A - 800g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-raw-almonds-800gm-36de3495e7c0.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '1465A - 500g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-golden-raisin-500g-0019b1eb7e58.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Roasted Chana',
      pack: '0185A - 600g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-roasted-chana-600gm-56c331de96ab.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Pistachio Husked',
      pack: '4039A - 100g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-pistatio-husked-100g-5d625fa46b79.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Cashews',
      pack: '0703A - 100g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-raw-cashews-100gm-fc332664601b.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Pistachio Roasted & Salted',
      pack: '0659A - 100g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-pistatio-roasted-salted-100g-eb32484ead84.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raisin Munakka',
      pack: '6309A - 100g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-raisin-munakka-100g-6af44e283eb4.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Desiccated Coconut',
      pack: '5753 - 1kg',
      image: '/assets/cloudinary-shama/dry-fruits/shama-desicated-coconut-1kg-6ffbd17b0b09.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Almonds',
      pack: '0628A - 100g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-raw-almonds-100gm-c0af9f54eee6.webp'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Green Raisins',
      pack: '0673A - 100g',
      image: '/assets/cloudinary-shama/dry-fruits/shama-raisin-green-100gm-9dd3f8e3377f.webp'
    }
  ];



  const newDryFruitProducts20260928 = [
  {
    "category": "dry-fruits",
    "title": "Pruneaux 28/33",
    "pack": "19003 - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/pruneaux-28-33-1kg-15bf7fe48708.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Peanut Powder",
    "pack": "0450A - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/poudre-d-arachide-1kg-77ddf350d9f1.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Golden Jumbo Raisins",
    "pack": "3982A - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/raisins-secs-golden-jumbo-500gm-1e3a16d9ae50.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Golden Jumbo Raisins",
    "pack": "1345A - 250g",
    "image": "/assets/cloudinary-shama/dry-fruits/raisins-sec-golden-jumbo-250-gm-583d0aad5dfb.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Sultana Raisins",
    "pack": "19002 - 250g",
    "image": "/assets/cloudinary-shama/dry-fruits/raisins-secs-sultanine-250gr-f92414e71574.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Roasted Unsalted Shelled Almonds",
    "pack": "1537A - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/amande-decortique-grille-sans-sel-500-gm-06da672d083e.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Blanched Raw Peanuts",
    "pack": "4446 - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/arachides-blanchies-crues-500gm-58689db14065.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Carmel Almonds",
    "pack": "19005 - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/amandes-carmel-crues-500gm-1028e00eb30d.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Nonpareil Supreme Almonds",
    "pack": "0097A - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/amande-nonpareil-supreme-crue-500-gm-f546dbf9d143.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Sliced Almonds",
    "pack": "1212A - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/amandes-effiles-1kg-6df8bfe6f8fa.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Exotic Mix",
    "pack": "4705A - 250g",
    "image": "/assets/cloudinary-shama/dry-fruits/melange-exotique-250-gm-3e97c1998065.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Sport Mix",
    "pack": "8390A - 250g",
    "image": "/assets/cloudinary-shama/dry-fruits/melange-sportif-250-gm-739db44c7a59.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Broken Cashews",
    "pack": "19065 - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/noix-de-cajou-casse-1kg-21cf28791ba1.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Sport Mix",
    "pack": "5900A - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/melange-sportif-500-gm-e1029d4e80e4.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Cashews",
    "pack": "19006 - 250g",
    "image": "/assets/cloudinary-shama/dry-fruits/noix-de-cajou-crues-250gr-81be37358577.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Exotic Mix",
    "pack": "19064 - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/melange-exotique-1kg-d1659dae8a65.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Exotic Mix",
    "pack": "19001 - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/melange-exotique-500gr-4e5a71112d4d.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Shelled Peanuts",
    "pack": "0016 - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/arachides-decortiquees-crues-500g-8b4002178d0f.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Cashews",
    "pack": "0622A - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/noix-de-cajou-crues-500-gm-2bdb4e534582.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Broken Cashews",
    "pack": "1482 - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/noix-de-cajou-cassee-500-gm-0223632d3c51.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Roasted Salted Cashews",
    "pack": "8109A - 250g",
    "image": "/assets/cloudinary-shama/dry-fruits/noix-de-cajou-grillees-salees-250-gm-51401b1d2638.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Orienco Raw Cashews",
    "pack": "19139 - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/orienco-noix-de-cajou-cruise-1kg-49c5c277dbbb.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Roasted Salted Cashews",
    "pack": "19007 - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/noix-de-cajou-grillees-salees-500-gm-fb4fd5befffd.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Orienco Coconut Powder",
    "pack": "18942 - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/orienco-coconut-powder-1kg-1cea01418e40.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Orienco White Almond Powder",
    "pack": "1229A - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/orienco-poudre-d-amande-blanche-1kg-63cfdae58f6a.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Fried Salted Cashews",
    "pack": "19008 - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/noix-de-cajou-frites-salees-500-gm-d1ce1903029c.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Roasted Salted Pistachios in Shell",
    "pack": "19000 - 250g",
    "image": "/assets/cloudinary-shama/dry-fruits/pistaches-coque-grillees-salees-250g-09bfe9296b38.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Shelled Pistachios",
    "pack": "4022B - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/pistache-decortique-1-kg-3baf32938820.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Orienco Golden Raisins",
    "pack": "0697A - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/orienco-raisin-golden-1kg-fd3c989d48f1.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Peanut Powder",
    "pack": "0467A - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/poudre-d-arachide-500g-ac7a808a8e17.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Extra Roasted Salted Shelled Almonds",
    "pack": "19004 - 500g",
    "image": "/assets/cloudinary-shama/dry-fruits/amandes-decortiquees-extra-grillees-salees-500gr-4bdf61246e99.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Desiccated Coconut",
    "pack": "19189 - 1kg",
    "image": "/assets/cloudinary-shama/dry-fruits/noix-de-coco-rapee-1kg-cb50e102b8b2.webp"
  },
  {
    "category": "dry-fruits",
    "title": "Shelled Pistachios",
    "pack": "0783A - 800g",
    "image": "/assets/cloudinary-shama/dry-fruits/pistaches-decortiquees-800-gm-5e9c66d5f7d4.webp"
  }
];

  dryFruitProducts.push(...newDryFruitProducts20260928);

  // 2026-10-03 dry fruits category grouping
  const dryFruitGroup = title => {
    const t = String(title || '').toLowerCase();
    if (/almond|amande/.test(t)) return 'Almonds';
    if (/cashew|cajou/.test(t)) return 'Cashews';
    if (/pistach/.test(t)) return 'Pistachios';
    if (/raisin|munakka/.test(t)) return 'Raisins';
    if (/coconut|coco/.test(t)) return 'Coconut';
    if (/peanut|arachide|chana|gram|makhana/.test(t)) return 'Peanuts & Gram';
    if (/mix|mélange|melange|sport/.test(t)) return 'Mixes';
    if (/prune/.test(t)) return 'Prunes & Others';
    return 'Prunes & Others';
  };
  dryFruitProducts.forEach(item => { item.group = dryFruitGroup(item.title); });

  const otherProducts = productData.filter(item => item.category !== 'dry-fruits');
  productData.splice(0, productData.length, ...otherProducts, ...dryFruitProducts);
})();
