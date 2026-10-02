(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const assets = [
  [
    "shama_mint_sauce_2.7kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120965/shama_mint_sauce_2.7kg.png"
  ],
  [
    "Shama_butter_chicken_curry_paste_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_butter_chicken_curry_paste_300g.png"
  ],
  [
    "shama_biryani_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/shama_biryani_paste_2.3kg.png"
  ],
  [
    "shama_butter_chicken_curry_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/shama_butter_chicken_curry_paste_2.3kg.png"
  ],
  [
    "Shama_Balti_curry_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_Balti_curry_paste_2.3kg.png"
  ],
  [
    "shama_korma_curry_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/shama_korma_curry_paste_2.3kg.png"
  ],
  [
    "Shama_biryani_curry_paste_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/Shama_biryani_curry_paste_300g.png"
  ],
  [
    "shama_garlic_masala_pickle_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/shama_garlic_masala_pickle_300g.png"
  ],
  [
    "shama_madras_kebab_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_madras_kebab_paste_2.3kg.png"
  ],
  [
    "Shama_madras_kebab_paste_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/Shama_madras_kebab_paste_300g.png"
  ],
  [
    "shama_green_chilli_pickle_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_green_chilli_pickle_300g.png"
  ],
  [
    "shama_lime_pickle_mild_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_lime_pickle_mild_300g.png"
  ],
  [
    "Shama_kashmiri_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/Shama_kashmiri_paste_2.3kg.png"
  ],
  [
    "shama_mixed_pickle_mild_4kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/shama_mixed_pickle_mild_4kg.png"
  ],
  [
    "shama_mango_pickle_mild_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/shama_mango_pickle_mild_300g.png"
  ],
  [
    "Shama_mild_curry_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/Shama_mild_curry_paste_2.3kg.png"
  ],
  [
    "shama_rogan_josh_curry_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120970/shama_rogan_josh_curry_paste_2.3kg.png"
  ],
  [
    "Shama_tandoori_curry_paste_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120971/Shama_tandoori_curry_paste_300g.png"
  ],
  [
    "shama_tikka_masala_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120971/shama_tikka_masala_paste_2.3kg.png"
  ],
  [
    "shama_mixed_pickle_mild_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/shama_mixed_pickle_mild_300g.png"
  ],
  [
    "Shama_vindaloo_curry_paste_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/Shama_vindaloo_curry_paste_300g.png"
  ],
  [
    "Shama_tikka_masala_curry_paste_300g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/Shama_tikka_masala_curry_paste_300g.png"
  ],
  [
    "Shama_vindaloo_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120973/Shama_vindaloo_paste_2.3kg.png"
  ],
  [
    "Shama_sweet_mango_chutney_3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120980/Shama_sweet_mango_chutney_3kg.png"
  ],
  [
    "Shama_ginger_garlic_750g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_ginger_garlic_750g.png"
  ],
  [
    "Shama_ginger_paste_750g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_ginger_paste_750g.png"
  ],
  [
    "Shama_garlic_paste_320g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_garlic_paste_320g.png"
  ],
  [
    "Shama_garlic_paste_750g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_garlic_paste_750g.png"
  ],
  [
    "Shama_ginger_garlic_320g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Shama_ginger_garlic_320g.png"
  ],
  [
    "Sunrise_garlic_paste_320g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Sunrise_garlic_paste_320g.png"
  ],
  [
    "Shama_ginger_paste_320g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Shama_ginger_paste_320g.png"
  ],
  [
    "Sunrise_ginger_paste_320g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_paste_320g.png"
  ],
  [
    "Sunrise_ginger_garlic_paste_320g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_garlic_paste_320g.png"
  ],
  [
    "Sunrise_ginger_paste_750g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_paste_750g.png"
  ],
  [
    "Sunrise_ginger_garlic_paste_750g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_garlic_paste_750g.png"
  ],
  [
    "Sunrise_garlic_paste_750g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_garlic_paste_750g.png"
  ],
  [
    "Shama_tamarind_date_tomato_sauce",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155830/Shama_tamarind_date_tomato_sauce.png"
  ],
  [
    "Shama_green_chilli_sauce",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155831/Shama_green_chilli_sauce.png"
  ],
  [
    "Shama_coriander_mint_chutney",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155831/Shama_coriander_mint_chutney.png"
  ],
  [
    "Shama_dark_soy_sauce",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155832/Shama_dark_soy_sauce.png"
  ],
  [
    "Shama_red_chilli_sauce",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155833/Shama_red_chilli_sauce.png"
  ],
  [
    "Shama_sweet_chilli_sauce",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155834/Shama_sweet_chilli_sauce.png"
  ],
  [
    "Shama_tamarind_date_sauce",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155835/Shama_tamarind_date_sauce.png"
  ],
  [
    "Shama_mixed_pickle_4kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_mixed_pickle_4kg.png"
  ],
  [
    "Shama_Mango_mixed_1kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_mixed_1kg.png"
  ],
  [
    "Shama_Mango_pickle_1kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png"
  ],
  [
    "Patak_biryani_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_biryani_paste_2.3kg.png"
  ],
  [
    "Patak_butter_chicken_paste_2.3_kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_butter_chicken_paste_2.3_kg.png"
  ],
  [
    "Patak_balty_curry_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069255/Patak_balty_curry_paste_2.3kg.png"
  ],
  [
    "patak_s_tikka_masala_paste_283g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069256/patak_s_tikka_masala_paste_283g.png"
  ],
  [
    "Patak_madras_kebab_paste_2.4kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_madras_kebab_paste_2.4kg.png"
  ],
  [
    "Patak_korma_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_korma_paste_2.3kg.png"
  ],
  [
    "Patak_kashmiri_masala_paste_2.2_kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_kashmiri_masala_paste_2.2_kg.png"
  ],
  [
    "Patak_mild_curry_paste_2.3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069258/Patak_mild_curry_paste_2.3kg.png"
  ],
  [
    "Patak_tikka_paste_2.4kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069259/Patak_tikka_paste_2.4kg.png"
  ],
  [
    "patak_s_tandoori_paste_2.5kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069260/patak_s_tandoori_paste_2.5kg.png"
  ],
  [
    "Patak_s_Mango_Pickle_Hot_250g",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790272188/Patak_s_Mango_Pickle_Hot_250g.png"
  ],
  [
    "Patak_s_Mix_Pickle_2_3kg",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790272190/Patak_s_Mix_Pickle_2_3kg.png"
  ],
  [
    "Schani_Mint_Sauce_2.27_L",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790272195/Schani_Mint_Sauce_2.27_L.png"
  ],
  [
    "Mah_a_Hot_Spicy_sauce_300gm",
    "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600821/Mah_a_Hot_Spicy_sauce_300gm.png"
  ]
];

  const packFallback = {
    Shama_tamarind_date_tomato_sauce:'Contact us for available pack size',
    Shama_green_chilli_sauce:'200g x 1',
    Shama_coriander_mint_chutney:'200g x 1',
    Shama_dark_soy_sauce:'215g x 1',
    Shama_red_chilli_sauce:'200g x 1',
    Shama_sweet_chilli_sauce:'215g x 1',
    Shama_tamarind_date_sauce:'220g x 1'
  };

  const specialTitles = {
    Shama_Mango_mixed_1kg:'Shama Mango Mixed Pickle',
    Shama_ginger_garlic_750g:'Shama Ginger & Garlic Paste',
    Shama_ginger_garlic_320g:'Shama Ginger & Garlic Paste',
    Sunrise_ginger_garlic_paste_320g:'Sunrise Ginger & Garlic Paste',
    Sunrise_ginger_garlic_paste_750g:'Sunrise Ginger & Garlic Paste',
    Patak_balty_curry_paste_2.3kg:"Patak's Balti Curry Paste",
    Patak_s_Mix_Pickle_2_3kg:"Patak's Mix Pickle"
  };

  function packFromId(id) {
    if (packFallback[id]) return packFallback[id];
    let m = id.match(/_(\d+(?:\.\d+)?)_(kg|g|gm|ml|l)$/i);
    if (!m) m = id.match(/_(\d+(?:\.\d+)?)(kg|g|gm|ml|l)$/i);
    if (!m) return 'Contact us for available pack size';
    let unit = m[2].toLowerCase();
    if (unit === 'gm') unit = 'g';
    if (unit === 'l') unit = 'L';
    return m[1] + unit + ' x 1';
  }

  function prettyTitle(id) {
    if (specialTitles[id]) return specialTitles[id];
    let stem = id
      .replace(/_(\d+(?:\.\d+)?)_(kg|g|gm|ml|l)$/i,'')
      .replace(/_(\d+(?:\.\d+)?)(kg|g|gm|ml|l)$/i,'')
      .replace(/_/g,' ')
      .replace(/\bpatak s\b/i,"Patak's")
      .replace(/\bpatak\b/i,"Patak's")
      .replace(/\bshama\b/i,'Shama')
      .replace(/\bsunrise\b/i,'Sunrise')
      .replace(/\bschani\b/i,'Schani')
      .replace(/\bmah a\b/i,'Mah A');
    return stem.toLowerCase().replace(/\b\w/g, ch => ch.toUpperCase())
      .replace(/Patak'S/g,"Patak's")
      .replace(/Shama/g,'Shama')
      .replace(/Sunrise/g,'Sunrise')
      .replace(/Schani/g,'Schani');
  }

  function groupFor(id) {
    const s = id.toLowerCase();
    if (s.startsWith('patak') && s.includes('paste')) return "Patak's Pastes";
    if (s.includes('ginger') || (s.includes('garlic_paste') && !s.includes('curry'))) return 'Ginger & Garlic Pastes';
    if (s.includes('pickle') || s.includes('chutney') || s.includes('mango_mixed')) return 'Pickles & Chutneys';
    if (s.includes('sauce')) return 'Sauces';
    return 'Shama Curry & Cooking Pastes';
  }

  const groupOrder = [
    'Shama Curry & Cooking Pastes',
    'Ginger & Garlic Pastes',
    'Pickles & Chutneys',
    'Sauces',
    "Patak's Pastes"
  ];

  const folderProducts = assets.map(([id,image],index) => ({
    category:'sauces',
    group:groupFor(id),
    title:prettyTitle(id),
    pack:packFromId(id),
    image,
    __index:index
  })).sort((a,b) => groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group) || a.__index - b.__index)
    .map(({__index,...item}) => item);

  const nonSauces = productData.filter(item => item.category !== 'sauces');
  productData.splice(0, productData.length, ...nonSauces, ...folderProducts);

  const category = categories.find(item => item.slug === 'sauces');
  if (category) {
    category.name = 'Sauces, Pickles & Pastes';
    category.desc = 'Curry pastes, ginger & garlic pastes, pickles, chutneys and sauces';
    category.image = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png';
  }

  window.shamaPasteFolderCatalogue = {
    total:folderProducts.length,
    groups:groupOrder,
    source:'shama/Paste'
  };
})();