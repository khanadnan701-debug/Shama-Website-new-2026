(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
  {
    "category": "divers",
    "title": "Telephone Isabgul",
    "pack": "2004A - 200g",
    "image": "/assets/cloudinary-shama/divers/telephone-isabgul-200g-4b4d290c8270.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Tikha Gathiya",
    "pack": "2355B - 200g x 20",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-tikha-gathiya-200gmx20-1911844d2237.webp"
  },
  {
    "category": "divers",
    "title": "Maggi",
    "pack": "18992 - 600g",
    "image": "/assets/cloudinary-shama/divers/maggi-600g-bfe7afc92cee.webp"
  },
  {
    "category": "divers",
    "title": "Hashmi Ispaghol JAR",
    "pack": "0654 - 140g",
    "image": "/assets/cloudinary-shama/divers/hashmi-ispaghol-jar-140g-3aaed96349bd.webp"
  },
  {
    "category": "divers",
    "title": "Maggi",
    "pack": "18991 - 70g",
    "image": "/assets/cloudinary-shama/divers/maggi-70g-7ea983fb38e0.webp"
  },
  {
    "category": "divers",
    "title": "Heera Red Pan Masala",
    "pack": "0939A - 300g",
    "image": "/assets/cloudinary-shama/divers/heera-red-pan-masala-300gm-984687d7e5b3.webp"
  },
  {
    "category": "divers",
    "title": "Shezan Mango Jam",
    "pack": "19185 - 12 x 370g",
    "image": "/assets/cloudinary-shama/divers/shezan-mango-jam-12x370g-glass-jar-32c45f06295c.webp"
  },
  {
    "category": "divers",
    "title": "Heera Green Pan Masala",
    "pack": "0984B - 300ml",
    "image": "/assets/cloudinary-shama/divers/heera-green-pan-masala-300ml-7262f1d0484c.webp"
  },
  {
    "category": "divers",
    "title": "Telephone Isabgul",
    "pack": "1007B - 100g",
    "image": "/assets/cloudinary-shama/divers/telephone-isabgul-100g-e5470820a142.webp"
  },
  {
    "category": "divers",
    "title": "Knorr Chatt Patta Family Pack",
    "pack": "3861 - 200g",
    "image": "/assets/cloudinary-shama/divers/knorr-chatt-patta-family-pack-200g-c7a7e574b7ff.webp"
  },
  {
    "category": "divers",
    "title": "Telephone Isabgul",
    "pack": "0505D - 50g",
    "image": "/assets/cloudinary-shama/divers/telephone-isabgul-50gm-3a3d296e803b.webp"
  },
  {
    "category": "divers",
    "title": "Lijjat Jeera Papad",
    "pack": "0011B - 200g",
    "image": "/assets/cloudinary-shama/divers/lijjat-jeera-papad-200g-c25511a00142.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Dry Bakhri Garlic",
    "pack": "2393B - 200g x 30",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-dry-bakhri-garlic-200gmx30-72be3674dbe1.webp"
  },
  {
    "category": "divers",
    "title": "Malka Red Fried Onion",
    "pack": "19020 - 1kg",
    "image": "/assets/cloudinary-shama/divers/malka-red-fried-onion-1kg-ddd6448373f1.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Classic Plain Khakhra",
    "pack": "0009A - 200g x 15",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-classic-plain-khakhra-200gmx15-026d3cc5c348.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Dry Bhakhri Methi",
    "pack": "2430A - 200g x 30",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-dry-bhakhri-methi-200gm-x30-426bd96fbdd6.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Dry Bhakhri Jeera",
    "pack": "2416B - 200g x 30",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-dry-bhakhri-jeera-200gm-x30-97d9c4904884.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Dry Bhakhri Plain",
    "pack": "2423B - 200g x 30",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-dry-bhakhri-plain-200gm-x30-ad74ad3fdd82.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Fafda With Chutney",
    "pack": "0627A - 350g x 10",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-fafda-with-chutney-350gmx10-90c6d94bba7a.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Papdi Gathiya",
    "pack": "2522A - 200g x 15",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-papdi-gathiya-200gmx15-947504296c22.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Salty Puffs Khari Jeera",
    "pack": "0351A - 400g x 18",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-salty-puffs-khari-jeera-400gmx18-89fe231a1b52.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Fulwadi Gathiya",
    "pack": "2362B - 200g x 20",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-fulwadi-gathiya-200gmx20-88867ed303b4.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Jeera Khakhra",
    "pack": "0016A - 200g x 15",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-jeera-khakhra-200gmx15-4510ab6ba95a.webp"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Salty Puffs Khari Methi",
    "pack": "0337A - 400g x 18",
    "image": "/assets/cloudinary-shama/divers/maniarr-s-salty-puffs-khari-methi-400gmx18-376aeefe7687.webp"
  },
  {
    "category": "divers",
    "title": "Maniarrs Methi Khakhra",
    "pack": "0030C - 200g",
    "image": "/assets/cloudinary-shama/divers/maniarrs-methi-khakhra-200gm-15-d1cd21461e68.webp"
  },
  {
    "category": "divers",
    "title": "MDH Kasuri Methi",
    "pack": "0201A - 1kg",
    "image": "/assets/cloudinary-shama/divers/mdh-kasuri-methi-1kg-960e557d19e1.webp"
  },
  {
    "category": "divers",
    "title": "MDH Chunky Chat Masala",
    "pack": "0065A - 100g",
    "image": "/assets/cloudinary-shama/divers/mdh-chunky-chat-masala-100g-49acf1978ad4.webp"
  },
  {
    "category": "divers",
    "title": "MDH Kasuri Methi",
    "pack": "0188A - 100g",
    "image": "/assets/cloudinary-shama/divers/mdh-kasuri-methi-100gm-177b9c30c336.webp"
  },
  {
    "category": "divers",
    "title": "Shezan Sarsoon Ka Saag",
    "pack": "19184 - 12 x 840g",
    "image": "/assets/cloudinary-shama/divers/shezan-sarsoon-ka-saag-12x840g-8be40c3bc916.webp"
  },
  {
    "category": "divers",
    "title": "MDH Chunky Chat Masala",
    "pack": "0072B - 500g",
    "image": "/assets/cloudinary-shama/divers/mdh-chunky-chat-masala-500g-15ec693d014f.webp"
  },
  {
    "category": "divers",
    "title": "Schani Tamarind Imli",
    "pack": "18995 - 400g",
    "image": "/assets/cloudinary-shama/divers/schani-tamarind-imli-400g-10b853dc4e0d.webp"
  },
  {
    "category": "divers",
    "title": "Shama Mamra",
    "pack": "18993 - 250g",
    "image": "/assets/cloudinary-shama/divers/shama-mamra-250g-540b034fbad7.webp"
  }
];

  const nonCategory = productData.filter(item => item.category !== 'divers');
  productData.splice(0, productData.length, ...nonCategory, ...items);

  const existing = categories.find(item => item.slug === 'divers');
  const category = {
    slug:'divers',
    name:'Divers',
    desc:'Everyday pantry, snacks and speciality grocery products',
    image:items[0]?.image || 'assets/shama-logo.png'
  };
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window['shama_divers_catalogue'] = { total: items.length };
})();