(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  // Exact catalogue mirror of Cloudinary folder: shama/Paste (46 assets).
  // Anything previously in the website sauces category but not in this list is removed.
  const assets = [
    ['shama_mint_sauce_2.7kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120965/shama_mint_sauce_2.7kg.png'],
    ['Shama_butter_chicken_curry_paste_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_butter_chicken_curry_paste_300g.png'],
    ['shama_biryani_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/shama_biryani_paste_2.3kg.png'],
    ['shama_butter_chicken_curry_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/shama_butter_chicken_curry_paste_2.3kg.png'],
    ['Shama_Balti_curry_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_Balti_curry_paste_2.3kg.png'],
    ['shama_korma_curry_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/shama_korma_curry_paste_2.3kg.png'],
    ['Shama_biryani_curry_paste_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/Shama_biryani_curry_paste_300g.png'],
    ['shama_garlic_masala_pickle_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120967/shama_garlic_masala_pickle_300g.png'],
    ['shama_madras_kebab_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_madras_kebab_paste_2.3kg.png'],
    ['Shama_madras_kebab_paste_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/Shama_madras_kebab_paste_300g.png'],
    ['shama_green_chilli_pickle_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_green_chilli_pickle_300g.png'],
    ['shama_lime_pickle_mild_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/shama_lime_pickle_mild_300g.png'],
    ['Shama_kashmiri_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120968/Shama_kashmiri_paste_2.3kg.png'],
    ['shama_mixed_pickle_mild_4kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_mixed_pickle_4kg.png'],
    ['shama_mango_pickle_mild_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/shama_mango_pickle_mild_300g.png'],
    ['Shama_mild_curry_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120969/Shama_mild_curry_paste_2.3kg.png'],
    ['shama_rogan_josh_curry_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120970/shama_rogan_josh_curry_paste_2.3kg.png'],
    ['Shama_tandoori_curry_paste_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120971/Shama_tandoori_curry_paste_300g.png'],
    ['shama_tikka_masala_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120971/shama_tikka_masala_paste_2.3kg.png'],
    ['shama_mixed_pickle_mild_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/shama_mixed_pickle_mild_300g.png'],
    ['Shama_vindaloo_curry_paste_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/Shama_vindaloo_curry_paste_300g.png'],
    ['Shama_tikka_masala_curry_paste_300g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120972/Shama_tikka_masala_curry_paste_300g.png'],
    ['Shama_vindaloo_paste_2.3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120973/Shama_vindaloo_paste_2.3kg.png'],
    ['Shama_sweet_mango_chutney_3kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120980/Shama_sweet_mango_chutney_3kg.png'],
    ['Shama_ginger_garlic_750g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_ginger_garlic_750g.png'],
    ['Shama_ginger_paste_750g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_ginger_paste_750g.png'],
    ['Shama_garlic_paste_320g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_garlic_paste_320g.png'],
    ['Shama_garlic_paste_750g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130493/Shama_garlic_paste_750g.png'],
    ['Shama_ginger_garlic_320g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Shama_ginger_garlic_320g.png'],
    ['Sunrise_garlic_paste_320g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Sunrise_garlic_paste_320g.png'],
    ['Shama_ginger_paste_320g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130494/Shama_ginger_paste_320g.png'],
    ['Sunrise_ginger_paste_320g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_paste_320g.png'],
    ['Sunrise_ginger_garlic_paste_320g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_garlic_paste_320g.png'],
    ['Sunrise_ginger_paste_750g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_paste_750g.png'],
    ['Sunrise_ginger_garlic_paste_750g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_ginger_garlic_paste_750g.png'],
    ['Sunrise_garlic_paste_750g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789130495/Sunrise_garlic_paste_750g.png'],
    ['Shama_tamarind_date_tomato_sauce','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155830/Shama_tamarind_date_tomato_sauce.png'],
    ['Shama_green_chilli_sauce','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155831/Shama_green_chilli_sauce.png'],
    ['Shama_coriander_mint_chutney','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155831/Shama_coriander_mint_chutney.png'],
    ['Shama_dark_soy_sauce','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155832/Shama_dark_soy_sauce.png'],
    ['Shama_red_chilli_sauce','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155833/Shama_red_chilli_sauce.png'],
    ['Shama_sweet_chilli_sauce','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155834/Shama_sweet_chilli_sauce.png'],
    ['Shama_tamarind_date_sauce','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789155835/Shama_tamarind_date_sauce.png'],
    ['Shama_mixed_pickle_4kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_mixed_pickle_4kg.png'],
    ['Shama_Mango_mixed_1kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_mixed_1kg.png'],
    ['Shama_Mango_pickle_1kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png']
  ];

  const explicitTitles = {
    shama_biryani_paste_2_3kg: 'Shama Biryani Paste',
    Shama_kashmiri_paste_2_3kg: 'Shama Kashmiri Curry Paste',
    shama_tikka_masala_paste_2_3kg: 'Shama Tikka Masala Curry Paste',
    Shama_vindaloo_paste_2_3kg: 'Shama Vindaloo Curry Paste',
    Shama_ginger_garlic_750g: 'Shama Ginger & Garlic Paste',
    Shama_ginger_garlic_320g: 'Shama Ginger & Garlic Paste',
    Shama_Mango_mixed_1kg: 'Shama Mango Mixed Pickle'
  };

  const noPackFallback = {
    Shama_tamarind_date_sauce: '220g x 1',
    Shama_sweet_chilli_sauce: '215g x 1',
    Shama_red_chilli_sauce: '200g x 1',
    Shama_dark_soy_sauce: '215g x 1',
    Shama_green_chilli_sauce: '200g x 1',
    Shama_coriander_mint_chutney: '200g x 1'
  };

  function keyForExplicit(id) {
    return id.replace(/\./g, '_');
  }

  function titleCase(value) {
    return value.toLowerCase().replace(/\b\w/g, ch => ch.toUpperCase());
  }

  function makeTitle(id) {
    const explicit = explicitTitles[keyForExplicit(id)];
    if (explicit) return explicit;
    const brand = /^sunrise_/i.test(id) ? 'Sunrise' : 'Shama';
    let stem = id.replace(/^(shama|sunrise)_/i, '').replace(/_\d+(?:\.\d+)?(?:kg|g|ml|ltr)$/i, '').replace(/_/g, ' ');
    return `${brand} ${titleCase(stem)}`;
  }

  function makePack(id) {
    if (noPackFallback[id]) return noPackFallback[id];
    const match = id.match(/_(\d+(?:\.\d+)?)(kg|g|ml|ltr)$/i);
    if (!match) return 'Contact us for available pack size';
    const unit = match[2].toLowerCase() === 'ltr' ? 'L' : match[2].toLowerCase();
    return `${match[1]}${unit} x 1`;
  }

  function groupRank(item) {
    const title = item.title.toLowerCase();
    const pack = item.pack.toLowerCase();
    if (title.includes('ginger') || title.includes('garlic paste')) return 0;
    if (title.includes('paste') && pack.includes('kg')) return 1;
    if (title.includes('paste')) return 2;
    if (title.includes('pickle')) return 3;
    if (title.includes('chutney')) return 4;
    return 5;
  }

  const folderProducts = assets.map(([id, image], index) => ({
    category: 'sauces',
    title: makeTitle(id),
    pack: makePack(id),
    image,
    __folderOrder: index
  })).sort((a, b) => groupRank(a) - groupRank(b) || a.__folderOrder - b.__folderOrder)
    .map(({ __folderOrder, ...item }) => item);

  const nonSauces = productData.filter(item => item.category !== 'sauces');
  productData.splice(0, productData.length, ...nonSauces, ...folderProducts);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(item => item.slug === 'sauces');
    if (category) {
      category.name = 'Sauces, Pickles & Pastes';
      category.desc = 'Pastes, pickles, chutneys and sauces from the current Shama catalogue';
      category.image = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678774/Shama_Mango_pickle_1kg.png';
    }
  }

  window.shamaPasteFolderCatalogue = { total: folderProducts.length };
})();
