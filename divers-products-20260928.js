(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
  {
    "category": "divers",
    "title": "Telephone Isabgul",
    "pack": "200g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600769/Telephone_ISABGUL_200g.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Tikha Gathiya",
    "pack": "200g x 20",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600769/Maniarr_s_Tikha_Gathiya_200gmX20.png"
  },
  {
    "category": "divers",
    "title": "Maggi",
    "pack": "600g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600769/Maggi_600g.png"
  },
  {
    "category": "divers",
    "title": "Hashmi Ispaghol JAR",
    "pack": "140g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600769/Hashmi_Ispaghol_JAR_140g.png"
  },
  {
    "category": "divers",
    "title": "Maggi",
    "pack": "70g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600769/Maggi_70g.png"
  },
  {
    "category": "divers",
    "title": "Heera Red Pan Masala",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600770/Heera_Red_Pan_Masala_300gm.png"
  },
  {
    "category": "divers",
    "title": "Shezan Mango Jam",
    "pack": "12 x 370g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600771/Shezan_Mango_Jam_12X370G_Glass_Jar.png"
  },
  {
    "category": "divers",
    "title": "Heera Green Pan Masala",
    "pack": "300ml",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600771/Heera_Green_Pan_Masala_300ml.png"
  },
  {
    "category": "divers",
    "title": "Telephone Isabgul",
    "pack": "100g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600771/Telephone_ISABGUL_100g.png"
  },
  {
    "category": "divers",
    "title": "Knorr Chatt Patta Family Pack",
    "pack": "200g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600771/Knorr_Chatt_Patta_Family_Pack_200g.png"
  },
  {
    "category": "divers",
    "title": "Telephone Isabgul",
    "pack": "50g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600780/Telephone_ISABGUL_50gm.png"
  },
  {
    "category": "divers",
    "title": "Lijjat Jeera Papad",
    "pack": "200g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600780/Lijjat_Jeera_Papad_200g.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Dry Bakhri Garlic",
    "pack": "200g x 30",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600781/Maniarr_s_Dry_Bakhri_Garlic_200gmX30.png"
  },
  {
    "category": "divers",
    "title": "Malka Red Fried Onion",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600781/Malka_Red_Fried_Onion_1kg.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Classic Plain Khakhra",
    "pack": "200g x 15",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600781/Maniarr_s_Classic_Plain_Khakhra_200gmX15.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Dry Bhakhri Methi",
    "pack": "200g x 30",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600782/Maniarr_s_Dry_Bhakhri_Methi_200gm_X30.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Dry Bhakhri Jeera",
    "pack": "200g x 30",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600782/Maniarr_s_Dry_Bhakhri_Jeera_200gm_X30.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Dry Bhakhri Plain",
    "pack": "200g x 30",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600782/Maniarr_s_Dry_Bhakhri_Plain_200gm_X30.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Fafda With Chutney",
    "pack": "350g x 10",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600782/Maniarr_s_Fafda_with_Chutney_350gmX10.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Papdi Gathiya",
    "pack": "200g x 15",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600783/Maniarr_s_Papdi_Gathiya_200gmX15.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Salty Puffs Khari Jeera",
    "pack": "400g x 18",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600783/Maniarr_s_Salty_Puffs_Khari_Jeera_400gmX18.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Fulwadi Gathiya",
    "pack": "200g x 20",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600783/Maniarr_s_Fulwadi_Gathiya_200gmX20.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Jeera Khakhra",
    "pack": "200g x 15",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600783/Maniarr_s_Jeera_Khakhra_200gmX15.png"
  },
  {
    "category": "divers",
    "title": "Maniarr'S Salty Puffs Khari Methi",
    "pack": "400g x 18",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600784/Maniarr_s_Salty_Puffs_Khari_Methi_400gmX18.png"
  },
  {
    "category": "divers",
    "title": "Maniarrs Methi Khakhra",
    "pack": "200g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600792/Maniarrs_Methi_Khakhra_200gm_15.png"
  },
  {
    "category": "divers",
    "title": "MDH Kasuri Methi",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600793/MDH_Kasuri_Methi_1kg.png"
  },
  {
    "category": "divers",
    "title": "MDH Chunky Chat Masala",
    "pack": "100g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600793/MDH_Chunky_Chat_Masala_100g.png"
  },
  {
    "category": "divers",
    "title": "MDH Kasuri Methi",
    "pack": "100g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600793/MDH_Kasuri_Methi_100gm.png"
  },
  {
    "category": "divers",
    "title": "Shezan Sarsoon Ka Saag",
    "pack": "12 x 840g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600794/Shezan_Sarsoon_Ka_Saag_12X840G.png"
  },
  {
    "category": "divers",
    "title": "MDH Chunky Chat Masala",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600794/MDH_Chunky_Chat_Masala_500g.png"
  },
  {
    "category": "divers",
    "title": "Schani Tamarind Imli",
    "pack": "400g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600794/Schani_Tamarind_Imli_400G.png"
  },
  {
    "category": "divers",
    "title": "Shama Mamra",
    "pack": "250g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600794/Shama_Mamra_250g.png"
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