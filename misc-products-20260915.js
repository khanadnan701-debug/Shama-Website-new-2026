// Miscellaneous catalogue synced with Cloudinary folder: shama/Miscellaneous.
// Source of truth refreshed on 2026-10-07. Shama products are kept first by the category-group UI.
(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    {category:'misc',title:'Shama Lemon Dressing',pack:'400ml',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464145/Shama_lemon_dressing_400ml.png'},
    {category:'misc',title:'Shama Lemon Juice',pack:'200ml',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464146/Shama_lemon_juice_200ml.png'},
    {category:'misc',title:'Shama Mouth Freshener',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464146/Shama_Mouth_Freshener.png'},
    {category:'misc',title:'Shama Kewra Water',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Kewra_Water.png'},
    {category:'misc',title:'Shama Baking Powder',pack:'800g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464148/Shama_baking_powder_800gm.png'},
    {category:'misc',title:'Shama Vinegar',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464148/Shama_Vinegar.png'},
    {category:'misc',title:'Shama Baking Soda',pack:'800g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_baking_soda_800gm.png'},
    {category:'misc',title:'Shama Pehalwan Rewari',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464149/Shama_Pehalwan_Rewari.png'},
    {category:'misc',title:'Shama Black Salt',pack:'400g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464150/Shama_black_salt_400gm.png'},
    {category:'misc',title:'Shama Lime Juice',pack:'200ml',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464150/Shama_lime_juice_200ml.png'},
    {category:'misc',title:'Shama Roasted Vermicelli',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464151/Shama_Vermicelli_Roasted.png'},
    {category:'misc',title:'Shama Sweet Fennel Seed',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464151/Shama_Sweet_Fennel_Seed.png'},
    {category:'misc',title:'Shama Himalayan Pink Salt Fine',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464152/Shama_Himalayan_Pink_Salt_FINE.png'},
    {category:'misc',title:'Shama Black Pepper',pack:'100g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464152/Shama_black_ppr_100gm.png'},
    {category:'misc',title:'Shama Himalayan Pink Salt',pack:'1kg',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464153/Shama_himalayan_pink_salt_1kg.png'},
    {category:'misc',title:'Shama Himalayan Pink Salt Coarse',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464153/Shama_Himalayan_Pink_Salt_COARSE.png'},
    {category:'misc',title:'Shama Himalayan Pink Salt Pouch',pack:'1kg',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464154/Shama_himalayan_pink_salt_pouch_1kg.png'},
    {category:'misc',title:'Shama Himalayan Pink Salt Jar',pack:'1kg',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464154/Shama_himalayan_pink_salt_jar_1kg.png'},
    {category:'misc',title:'Shama Himalayan Pink Salt',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464155/Shama_himalayan_pink_salt.png'},
    {category:'misc',title:'Shama Golden Fried Onions',pack:'1kg',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789466470/Shama_fried_onion_1kg.png'},
    {category:'misc',title:'Shama Jaggery Gur',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789466631/Shama_jaggery_gur_500g.png'},
    {category:'misc',title:'Shama Shakkar',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789466633/Shama_shakkar_500g.png'},
    {category:'misc',title:'Shama Seedless Tamarind (Imli)',pack:'400g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789466633/Shama_imli_400g.png'},
    {category:'misc',title:'Shama Himalayan Pink Salt — New Pack',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678912/Shama_himalayn_pink_salt.png'},
    {category:'misc',title:'Shama Masala Roasted Chana',pack:'400g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678913/Shama_masala_roasted_chana_400g.png'},
    {category:'misc',title:'Shama Paneer Dodi Phool',pack:'100g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789466470/Shama_fried_onion_1kg.png'},
    {category:'misc',title:'Kody Peeled Tomatoes',pack:'Contact us for available pack sizes',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678914/Shama_kodi_peeled_tomato.png'},

    // Food colours — newly added to Cloudinary on 2026-10-01.
    {category:'misc',title:'Shama Food Colour Orange',pack:'25g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866950/Shama_Food_Colour_Orange_25g.png'},
    {category:'misc',title:'Shama Food Colour Deep Orange',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866951/Shama_Food_Colour_Deep_Orange_500g.png'},
    {category:'misc',title:'Shama Food Colour Yellow',pack:'25g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866952/Shama_Food_Colour_Yellow_25g.png'},
    {category:'misc',title:'Shama Food Colour Red',pack:'25g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866953/Shama_Food_Colour_Red_25g.png'},
    {category:'misc',title:'Schani Red Food Color',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866954/Schani_Red_Food_Color_500g.png'},
    {category:'misc',title:'Tropical Sun Orange Food Colour',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866955/Tropical_SUN_Ornage_Food_Colour_500g.png'},
    {category:'misc',title:'Tropical Sun Bright Red Food Colour',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866955/Tropical_SUN_Bright_Red_Food_Colour_500g.png'},
    {category:'misc',title:'Tropical Sun Egg Yellow Food Color',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866955/Tropical_SUN_Egg_Yellow_Food_Color_500g.png'},
    {category:'misc',title:'TRS Food Colour Deep Orange',pack:'25g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866956/TRS_Food_Colour_Deep_Orange_25g.png'},
    {category:'misc',title:'SOP Yellow Food Color',pack:'400g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866957/SOP_Yellow_Food_Color_400g.png'},
    {category:'misc',title:'TRS Food Colour Yellow',pack:'25g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866958/TRS_Food_Colour_Yellow_25g.png'},
    {category:'misc',title:'TRS Food Color Green',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866959/TRS_Food_Color_Green_500g.png'},
    {category:'misc',title:'Shama Food Colour Yellow',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866960/Shama_Food_Colour_Yellow_500g.png'},
    {category:'misc',title:'TRS Food Colour Green',pack:'25g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866960/TRS_Food_Colour_Green_25g.png'},
    {category:'misc',title:'TRS Food Colour Yellow',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866961/TRS_Food_Colour_Yellow_500g.png'},
    {category:'misc',title:'TRS Food Colour Red',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866962/TRS_Food_Colour_Red_500g.png'},
    {category:'misc',title:'SOP Orange Food Colour',pack:'400g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866963/SOP_Orange_Food_Colour_400g.png'},
    {category:'misc',title:'TRS Food Colour Deep Orange',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866964/TRS_Food_Colour_Deep_Orange_500g.png'},
    {category:'misc',title:'TRS Food Colour Red',pack:'25g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866967/TRS_Food_Colour_Red_25g.png'},
    // Latest Miscellaneous additions from Cloudinary (moved out of Spices).
    {category:'misc',title:'Shama Soya Chunks',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791297922/Shama_Soya_Chunks_500g.png'},
    {category:'misc',title:'Shama Sabudana (Tapioca / Sago Seeds)',pack:'500g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791300440/Shama_Sabudana_Tapioca_Medium_500g.png'},
    {category:'misc',title:'Shama Soya Chunks',pack:'250g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791300689/Shama_Soya_Chunks_250g.png'},
    {category:'misc',title:'Shama Dry Plum (Alubukhara)',pack:'100g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791300942/SHAMA_Dry_Plum_ALUBUKHARA_100gm.png'},
    {category:'misc',title:'Shama Anardana Powder (Pomegranate Powder)',pack:'100g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791301166/SHAMA_Anardana_pomgranate_powder_100g.png'},
    {category:'misc',title:'Shama Anardana Seeds (Pomegranate Seeds)',pack:'100g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791301371/SHAMA_Anardana_seeds_pomgranate_100g.png'},

    {category:'misc',title:'Shama Tukmaria (Basil Seeds)',pack:'100g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791297910/Shama_Tukmaria_100g.png'},
    {category:'misc',title:'Shama Madras Plain Papad',pack:'200g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292377/Shama_Madras_plain_papad_200g.png'},
    {category:'misc',title:'Shama Pepper Papad',pack:'200g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292377/Shama_pepper_papad_200g.png'},
    {category:'misc',title:'Shama Chilli Papad',pack:'200g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292377/Shama_chilli_papad_200g.png'},
    {category:'misc',title:'Shama Jeera Papad',pack:'200g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292377/Shama_jeera_papad_200g.png'}
  ];

  const nonMisc = productData.filter(item => item.category !== 'misc');
  productData.splice(0, productData.length, ...nonMisc, ...items);

  const existing = categories.find(item => item.slug === 'misc');
  const category = {
    slug:'misc',
    name:'Miscellaneous',
    desc:'Papad, pantry essentials, soya chunks, sabudana, dry plum, anardana, salts, food colours, juices, floral waters, baking ingredients and more',
    image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789678914/Shama_paneer_dodi_phool_100g.png'
  };
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window.shamaMiscCatalogue = { total: items.length, cloudinaryTotal:57, sourceFolder:'shama/Miscellaneous.', syncedAt:'2026-10-07', shamaFirst:true };
})();