// Miscellaneous catalogue synced with Cloudinary folder: shama/Miscellaneous.
// Source of truth refreshed on 2026-10-08. Shama products are kept first by the category-group UI.
(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    {category:'misc',title:'Shama Lemon Dressing',pack:'400ml',image:'/assets/cloudinary-shama/miscellaneous/shama-lemon-dressing-400ml-ed2cb362b05f.webp'},
    {category:'misc',title:'Shama Lemon Juice',pack:'200ml',image:'/assets/cloudinary-shama/miscellaneous/shama-lemon-juice-200ml-e39272a63227.webp'},
    {category:'misc',title:'Shama Mouth Freshener',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-mouth-freshener-861173c4b448.webp'},
    {category:'misc',title:'Shama Kewra Water',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-kewra-water-ec0aeb0d377b.webp'},
    {category:'misc',title:'Shama Baking Powder',pack:'800g',image:'/assets/cloudinary-shama/miscellaneous/shama-baking-powder-800gm-325dac223f98.webp'},
    {category:'misc',title:'Shama Vinegar',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-vinegar-eeeaade9c22b.webp'},
    {category:'misc',title:'Shama Baking Soda',pack:'800g',image:'/assets/cloudinary-shama/miscellaneous/shama-baking-soda-800gm-d7e08a269093.webp'},
    {category:'misc',title:'Shama Pehalwan Rewari',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-pehalwan-rewari-664c7f4bb557.webp'},
    {category:'misc',title:'Shama Black Salt',pack:'400g',image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464150/Shama_black_salt_400gm.png'},
    {category:'misc',title:'Shama Lime Juice',pack:'200ml',image:'/assets/cloudinary-shama/miscellaneous/shama-lime-juice-200ml-78037fe41f12.webp'},
    {category:'misc',title:'Shama Roasted Vermicelli',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/shama-roasted-vermicelli-400g-aba53cd5d99c.webp'},
    {"category":"misc","title":"Shama Plain Vermicelli","pack":"400g","image":"/assets/cloudinary-shama/miscellaneous/shama-plain-vermicelli-400g-480cb6455086.webp"},
    {"category":"misc","title":"Shama Colour Flavoured Vermicelli","pack":"400g","image":"/assets/cloudinary-shama/miscellaneous/shama-colour-flavored-vermicelli-400g-785ae4146fe1.webp"},
    {category:'misc',title:'Shama Sweet Fennel Seed',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-sweet-fennel-seed-af79fbf7a0c3.webp'},
    {category:'misc',title:'Shama Himalayan Pink Salt Fine',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-himalayan-pink-salt-fine-8f2d0ca6dd51.webp'},
    {category:'misc',title:'Shama Black Pepper',pack:'100g',image:'/assets/cloudinary-shama/miscellaneous/shama-black-ppr-100gm-37feedbd6355.webp'},
    {category:'misc',title:'Shama Himalayan Pink Salt',pack:'1kg',image:'/assets/cloudinary-shama/miscellaneous/shama-himalayan-pink-salt-1kg-9c15d6127fd6.webp'},
    {category:'misc',title:'Shama Himalayan Pink Salt Coarse',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-himalayan-pink-salt-coarse-a5fc2926fbf2.webp'},
    {category:'misc',title:'Shama Himalayan Pink Salt Pouch',pack:'1kg',image:'/assets/cloudinary-shama/miscellaneous/shama-himalayan-pink-salt-pouch-1kg-83e49e391d38.webp'},
    {category:'misc',title:'Shama Himalayan Pink Salt Jar',pack:'1kg',image:'/assets/cloudinary-shama/miscellaneous/shama-himalayan-pink-salt-jar-1kg-a29f124f979c.webp'},
    {category:'misc',title:'Shama Himalayan Pink Salt',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-himalayan-pink-salt-073d33a86102.webp'},
    {category:'misc',title:'Shama Golden Fried Onions',pack:'1kg',image:'/assets/cloudinary-shama/miscellaneous/shama-fried-onion-1kg-113e86531276.webp'},
    {category:'misc',title:'Shama Jaggery Gur',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/shama-jaggery-gur-500g-58489dc43cfd.webp'},
    {category:'misc',title:'Shama Shakkar',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/shama-shakkar-500g-94d914fe1ab4.webp'},
    {category:'misc',title:'Shama Seedless Tamarind (Imli)',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/shama-imli-400g-edb438b80cb9.webp'},
    {category:'misc',title:'Shama Himalayan Pink Salt — New Pack',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-himalayn-pink-salt-8d9c342097eb.webp'},
    {category:'misc',title:'Shama Masala Roasted Chana',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/shama-masala-roasted-chana-400g-c50c67336478.webp'},
    {category:'misc',title:'Shama Hing Jeera Roasted Chana',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/shama-hing-jeera-roasted-chana-400g-559221bf1fd9.webp'},
    {category:'misc',title:'Shama Chilli Garlic Roasted Chana',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/shama-chilli-garlic-roasted-chana-400g-3fc36a5060c9.webp'},
    {category:'misc',title:'Shama Lime Pudina Roasted Chana',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/shama-lime-pudina-roasted-chana-400g-973f94183fbd.webp'},
    {category:'misc',title:'Shama Roasted Chana Without Skin',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/shama-roasted-chana-without-skin-400g-7bd86ba98534.webp'},
    {category:'misc',title:'Shama Paneer Dodi Phool',pack:'100g',image:'/assets/cloudinary-shama/miscellaneous/shama-paneer-dodi-phool-100g-c63e65a0bb9a.webp'},
    {category:'misc',title:'Kody Peeled Tomatoes',pack:'Contact us for available pack sizes',image:'/assets/cloudinary-shama/miscellaneous/shama-kodi-peeled-tomato-319aee83d7fb.webp'},

    // Food colours — newly added to Cloudinary on 2026-10-01.
    {category:'misc',title:'Shama Food Colour Orange',pack:'25g',image:'/assets/cloudinary-shama/miscellaneous/shama-food-colour-orange-25g-727764b9d2d6.webp'},
    {category:'misc',title:'Shama Food Colour Deep Orange',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/shama-food-colour-deep-orange-500g-34e35f0765d2.webp'},
    {category:'misc',title:'Shama Food Colour Yellow',pack:'25g',image:'/assets/cloudinary-shama/miscellaneous/shama-food-colour-yellow-25g-39d8fc1e0395.webp'},
    {category:'misc',title:'Shama Food Colour Red',pack:'25g',image:'/assets/cloudinary-shama/miscellaneous/shama-food-colour-red-25g-d41cc87a2c99.webp'},
    {category:'misc',title:'Schani Red Food Color',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/schani-red-food-color-500g-00b86f06c7e2.webp'},
    {category:'misc',title:'Tropical Sun Orange Food Colour',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/tropical-sun-ornage-food-colour-500g-df5d2cac8cd4.webp'},
    {category:'misc',title:'Tropical Sun Bright Red Food Colour',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/tropical-sun-bright-red-food-colour-500g-39480d9ca220.webp'},
    {category:'misc',title:'Tropical Sun Egg Yellow Food Color',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/tropical-sun-egg-yellow-food-color-500g-612734e131d7.webp'},
    {category:'misc',title:'TRS Food Colour Deep Orange',pack:'25g',image:'/assets/cloudinary-shama/miscellaneous/trs-food-colour-deep-orange-25g-40be06d221dc.webp'},
    {category:'misc',title:'SOP Yellow Food Color',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/sop-yellow-food-color-400g-701fb55c7821.webp'},
    {category:'misc',title:'TRS Food Colour Yellow',pack:'25g',image:'/assets/cloudinary-shama/miscellaneous/trs-food-colour-yellow-25g-beada8b97bbc.webp'},
    {category:'misc',title:'TRS Food Color Green',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/trs-food-color-green-500g-2548d2b69cb6.webp'},
    {category:'misc',title:'Shama Food Colour Yellow',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/shama-food-colour-yellow-500g-52ed618988d9.webp'},
    {category:'misc',title:'TRS Food Colour Green',pack:'25g',image:'/assets/cloudinary-shama/miscellaneous/trs-food-colour-green-25g-c14166f0fe02.webp'},
    {category:'misc',title:'TRS Food Colour Yellow',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/trs-food-colour-yellow-500g-bed543a4cf9a.webp'},
    {category:'misc',title:'TRS Food Colour Red',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/trs-food-colour-red-500g-b9caeaf3bf50.webp'},
    {category:'misc',title:'SOP Orange Food Colour',pack:'400g',image:'/assets/cloudinary-shama/miscellaneous/sop-orange-food-colour-400g-55f45ddc8e57.webp'},
    {category:'misc',title:'TRS Food Colour Deep Orange',pack:'500g',image:'/assets/cloudinary-shama/miscellaneous/trs-food-colour-deep-orange-500g-16d3fb2d27bf.webp'},
    {category:'misc',title:'TRS Food Colour Red',pack:'25g',image:'/assets/cloudinary-shama/miscellaneous/trs-food-colour-red-25g-97ab4b6199f6.webp'},
    // Latest Miscellaneous additions from Cloudinary (moved out of Spices).
    {category:'misc',title:'Shama Gond Katira',pack:'100g',image:'/assets/cloudinary-shama/miscellaneous/shama-gond-katira-100g-ad0078fbff66.webp'},
    {category:'misc',title:'Shama Soya Chunks',pack:'500g',image:'/assets/miscellaneous/shama-soya-chunks-500g.webp'},
    {category:'misc',title:'Shama Sabudana (Tapioca / Sago Seeds)',pack:'500g',image:'/assets/miscellaneous/shama-sabudana-500g.webp'},
    {category:'misc',title:'Shama Soya Chunks',pack:'250g',image:'/assets/miscellaneous/shama-soya-chunks-250g.webp'},
    {category:'misc',title:'Shama Dry Plum (Alubukhara)',pack:'100g',image:'/assets/miscellaneous/shama-dry-plum-alubukhara-100g.webp'},
    {category:'misc',title:'Shama Anardana Powder (Pomegranate Powder)',pack:'100g',image:'/assets/miscellaneous/shama-anardana-powder-100g.webp'},
    {category:'misc',title:'Shama Anardana Seeds (Pomegranate Seeds)',pack:'100g',image:'/assets/miscellaneous/shama-anardana-seeds-100g.webp'},

    {category:'misc',title:'Shama Tukmaria (Basil Seeds)',pack:'100g',image:'/assets/miscellaneous/shama-tukmaria-100g.webp'},
    {category:'misc',title:'Shama Madras Plain Papad',pack:'200g',image:'/assets/cloudinary-shama/miscellaneous/shama-madras-plain-papad-200g-54f425ed02fd.webp'},
    {category:'misc',title:'Shama Pepper Papad',pack:'200g',image:'/assets/cloudinary-shama/miscellaneous/shama-pepper-papad-200g-365d7eddbe5f.webp'},
    {category:'misc',title:'Shama Chilli Papad',pack:'200g',image:'/assets/cloudinary-shama/miscellaneous/shama-chilli-papad-200g-d77ff5751cb2.webp'},
    {category:'misc',title:'Shama Jeera Papad',pack:'200g',image:'/assets/cloudinary-shama/miscellaneous/shama-jeera-papad-200g-af84092a68f1.webp'}
  ];

  // Shama items first, other brands remain after Shama.
  const shamaOrder = item => /^Shama\b/i.test(String(item?.title || '')) ? 0 : 1;
  items.sort((a,b) => shamaOrder(a) - shamaOrder(b));

  const nonMisc = productData.filter(item => item.category !== 'misc');
  productData.splice(0, productData.length, ...nonMisc, ...items);

  const existing = categories.find(item => item.slug === 'misc');
  const category = {
    slug:'misc',
    name:'Miscellaneous',
    desc:'Papad, roasted chana varieties, pantry essentials, soya chunks, sabudana, dry plum, anardana, salts, food colours, juices, floral waters, baking ingredients and more',
    image:'/assets/cloudinary-shama/miscellaneous/shama-paneer-dodi-phool-100g-c63e65a0bb9a.webp'
  };
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window.shamaMiscCatalogue = { total: items.length, cloudinaryTotal:65, websiteTotal:64, excludedLegacyVermicelli:'Shama_Vermicelli_Roasted', sourceFolder:'shama/Miscellaneous.', syncedAt:'2026-10-09', shamaFirst:true };
})();