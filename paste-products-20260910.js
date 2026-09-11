(() => {
  'use strict';

  const pasteProducts20260911 = [
    { category: 'sauces', title: 'Shama Mint Sauce', pack: '2.7kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120965/shama_mint_sauce_2.7kg.png' },
    { category: 'sauces', title: 'Shama Butter Chicken Curry Paste', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_butter_chicken_curry_paste_300g.png' },
    { category: 'sauces', title: 'Shama Biryani Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/shama_biryani_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Butter Chicken Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/shama_butter_chicken_curry_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Balti Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_Balti_curry_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Korma Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/shama_korma_curry_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Biryani Curry Paste', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/Shama_biryani_curry_paste_300g.png' },
    { category: 'sauces', title: 'Shama Garlic Masala Pickle', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/shama_garlic_masala_pickle_300g.png' },
    { category: 'sauces', title: 'Shama Madras Kebab Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_madras_kebab_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Madras Kebab Paste', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/Shama_madras_kebab_paste_300g.png' },
    { category: 'sauces', title: 'Shama Green Chilli Pickle', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_green_chilli_pickle_300g.png' },
    { category: 'sauces', title: 'Shama Lime Pickle Mild', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_lime_pickle_mild_300g.png' },
    { category: 'sauces', title: 'Shama Kashmiri Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/Shama_kashmiri_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Mixed Pickle Mild', pack: '4kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/shama_mixed_pickle_mild_4kg.png' },
    { category: 'sauces', title: 'Shama Mango Pickle Mild', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/shama_mango_pickle_mild_300g.png' },
    { category: 'sauces', title: 'Shama Mild Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/Shama_mild_curry_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Rogan Josh Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120970/shama_rogan_josh_curry_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Tandoori Curry Paste', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120971/Shama_tandoori_curry_paste_300g.png' },
    { category: 'sauces', title: 'Shama Tikka Masala Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120971/shama_tikka_masala_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Mixed Pickle Mild', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/shama_mixed_pickle_mild_300g.png' },
    { category: 'sauces', title: 'Shama Vindaloo Curry Paste', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/Shama_vindaloo_curry_paste_300g.png' },
    { category: 'sauces', title: 'Shama Tikka Masala Curry Paste', pack: '300g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/Shama_tikka_masala_curry_paste_300g.png' },
    { category: 'sauces', title: 'Shama Vindaloo Curry Paste', pack: '2.3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120973/Shama_vindaloo_paste_2.3kg.png' },
    { category: 'sauces', title: 'Shama Sweet Mango Chutney', pack: '3kg x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120980/Shama_sweet_mango_chutney_3kg.png' },
    { category: 'sauces', title: 'Shama Ginger & Garlic Paste', pack: '750g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_ginger_garlic_750g.png' },
    { category: 'sauces', title: 'Shama Ginger Paste', pack: '750g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_ginger_paste_750g.png' },
    { category: 'sauces', title: 'Shama Garlic Paste', pack: '320g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_garlic_paste_320g.png' },
    { category: 'sauces', title: 'Shama Garlic Paste', pack: '750g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_garlic_paste_750g.png' },
    { category: 'sauces', title: 'Shama Ginger & Garlic Paste', pack: '320g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Shama_ginger_garlic_320g.png' },
    { category: 'sauces', title: 'Sunrise Garlic Paste', pack: '320g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Sunrise_garlic_paste_320g.png' },
    { category: 'sauces', title: 'Shama Ginger Paste', pack: '320g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Shama_ginger_paste_320g.png' },
    { category: 'sauces', title: 'Sunrise Ginger Paste', pack: '320g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_paste_320g.png' },
    { category: 'sauces', title: 'Sunrise Ginger & Garlic Paste', pack: '320g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_garlic_paste_320g.png' },
    { category: 'sauces', title: 'Sunrise Ginger Paste', pack: '750g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_paste_750g.png' },
    { category: 'sauces', title: 'Sunrise Ginger & Garlic Paste', pack: '750g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_garlic_paste_750g.png' },
    { category: 'sauces', title: 'Sunrise Garlic Paste', pack: '750g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_garlic_paste_750g.png' },

    // Lower-volume sauce range: keep these after the main paste/pickle catalogue.
    { category: 'sauces', title: 'Shama Tamarind Date Sauce', pack: '220g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155835/Shama_tamarind_date_sauce.png' },
    { category: 'sauces', title: 'Shama Sweet Chilli Sauce', pack: '215g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155834/Shama_sweet_chilli_sauce.png' },
    { category: 'sauces', title: 'Shama Red Chilli Sauce', pack: '200g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155833/Shama_red_chilli_sauce.png' },
    { category: 'sauces', title: 'Shama Dark Soy Sauce', pack: '215g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155832/Shama_dark_soy_sauce.png' },
    { category: 'sauces', title: 'Shama Green Chilli Sauce', pack: '200g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155831/Shama_green_chilli_sauce.png' },
    { category: 'sauces', title: 'Shama Coriander Mint Chutney', pack: '200g x 1', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155831/Shama_coriander_mint_chutney.png' }
  ];

  if (typeof productData !== 'undefined' && Array.isArray(productData)) {
    const nonSauceProducts = productData.filter((item) => item.category !== 'sauces');
    productData.splice(0, productData.length, ...nonSauceProducts, ...pasteProducts20260911);
  }

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find((item) => item.slug === 'sauces');
    if (category) {
      category.name = 'Sauces, Pickle & Pastes';
      category.desc = 'Curry pastes, pickles, chutneys, sauces and cooking pastes for retail and food service';
    }
  }
})();
