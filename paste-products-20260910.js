(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  // Static, syntax-safe mirror of the current Cloudinary shama/Paste folder.
  const folderProducts = [
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Butter Chicken Curry Paste",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_butter_chicken_curry_paste_300g.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Biryani Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/shama_biryani_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Butter Chicken Curry Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/shama_butter_chicken_curry_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Balti Curry Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_Balti_curry_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Korma Curry Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/shama_korma_curry_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Biryani Curry Paste",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/Shama_biryani_curry_paste_300g.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Madras Kebab Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_madras_kebab_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Madras Kebab Paste",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/Shama_madras_kebab_paste_300g.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Kashmiri Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/Shama_kashmiri_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Mild Curry Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/Shama_mild_curry_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Rogan Josh Curry Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120970/shama_rogan_josh_curry_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Tandoori Curry Paste",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120971/Shama_tandoori_curry_paste_300g.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Tikka Masala Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120971/shama_tikka_masala_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Vindaloo Curry Paste",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/Shama_vindaloo_curry_paste_300g.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Tikka Masala Curry Paste",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/Shama_tikka_masala_curry_paste_300g.png"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Vindaloo Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120973/Shama_vindaloo_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Ginger & Garlic Paste",
    "pack": "750g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_ginger_garlic_750g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Ginger Paste",
    "pack": "750g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_ginger_paste_750g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Garlic Paste",
    "pack": "320g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_garlic_paste_320g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Garlic Paste",
    "pack": "750g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_garlic_paste_750g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Ginger & Garlic Paste",
    "pack": "320g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Shama_ginger_garlic_320g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Garlic Paste",
    "pack": "320g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Sunrise_garlic_paste_320g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Ginger Paste",
    "pack": "320g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Shama_ginger_paste_320g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Ginger Paste",
    "pack": "320g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_paste_320g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Ginger & Garlic Paste",
    "pack": "320g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_garlic_paste_320g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Ginger Paste",
    "pack": "750g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_paste_750g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Ginger & Garlic Paste",
    "pack": "750g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_garlic_paste_750g.png"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Garlic Paste",
    "pack": "750g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_garlic_paste_750g.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Garlic Masala Pickle",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/shama_garlic_masala_pickle_300g.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Green Chilli Pickle",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_green_chilli_pickle_300g.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Lime Pickle Mild",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_lime_pickle_mild_300g.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mixed Pickle Mild",
    "pack": "4kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/shama_mixed_pickle_mild_4kg.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mango Pickle Mild",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/shama_mango_pickle_mild_300g.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mixed Pickle Mild",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/shama_mixed_pickle_mild_300g.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Sweet Mango Chutney",
    "pack": "3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120980/Shama_sweet_mango_chutney_3kg.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Coriander Mint Chutney",
    "pack": "200g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155831/Shama_coriander_mint_chutney.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mixed Pickle",
    "pack": "4kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_mixed_pickle_4kg.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mango Mixed Pickle",
    "pack": "1kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_mixed_1kg.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mango Pickle",
    "pack": "1kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Patak's Mango Pickle Hot",
    "pack": "250g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790272188/Patak_s_Mango_Pickle_Hot_250g.png"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Patak's Mix Pickle",
    "pack": "3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790272190/Patak_s_Mix_Pickle_2_3kg.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Mint Sauce",
    "pack": "2.7kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120965/shama_mint_sauce_2.7kg.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Tamarind Date Tomato Sauce",
    "pack": "Contact us for available pack size",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155830/Shama_tamarind_date_tomato_sauce.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Green Chilli Sauce",
    "pack": "200g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155831/Shama_green_chilli_sauce.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Dark Soy Sauce",
    "pack": "215g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155832/Shama_dark_soy_sauce.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Red Chilli Sauce",
    "pack": "200g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155833/Shama_red_chilli_sauce.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Sweet Chilli Sauce",
    "pack": "215g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155834/Shama_sweet_chilli_sauce.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Tamarind Date Sauce",
    "pack": "220g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155835/Shama_tamarind_date_sauce.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Schani Mint Sauce",
    "pack": "2.27L x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790272195/Schani_Mint_Sauce_2.27_L.png"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Mah A Hot Spicy Sauce",
    "pack": "300g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790600821/Mah_a_Hot_Spicy_sauce_300gm.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Biryani Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_biryani_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Butter Chicken Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_butter_chicken_paste_2.3_kg.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Balti Curry Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069255/Patak_balty_curry_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Tikka Masala Paste",
    "pack": "283g x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069256/patak_s_tikka_masala_paste_283g.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Madras Kebab Paste",
    "pack": "2.4kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_madras_kebab_paste_2.4kg.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Korma Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_korma_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Kashmiri Masala Paste",
    "pack": "2.2kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_kashmiri_masala_paste_2.2_kg.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Mild Curry Paste",
    "pack": "2.3kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069258/Patak_mild_curry_paste_2.3kg.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Tikka Paste",
    "pack": "2.4kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069259/Patak_tikka_paste_2.4kg.png"
  },
  {
    "category": "sauces",
    "group": "Patak's Pastes",
    "title": "Patak's Tandoori Paste",
    "pack": "2.5kg x 1",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069260/patak_s_tandoori_paste_2.5kg.png"
  }
];

  const nonSauces = productData.filter(item => item.category !== 'sauces');
  productData.splice(0, productData.length, ...nonSauces, ...folderProducts);

  const category = categories.find(item => item.slug === 'sauces');
  if (category) {
    category.name = 'Sauces, Pickles & Pastes';
    category.desc = 'Curry pastes, ginger & garlic pastes, pickles, chutneys and sauces';
    category.image = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png';
  }

  window.shamaPasteFolderCatalogue = {
    total: folderProducts.length,
    groups: ["Shama Curry & Cooking Pastes","Ginger & Garlic Pastes","Pickles & Chutneys","Sauces","Patak's Pastes"],
    source: 'shama/Paste'
  };
})();