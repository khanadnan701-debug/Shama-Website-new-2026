(() => {
  'use strict';

  const riceProducts20260924 = [
    // SHAMA — Sella first
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0147A - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255519/Shama_Super_Kernal_Par_Boiled_Sella_Rice_20kg.png' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0130 - 10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255519/Shama_Super_Kernal_Par_Boiled_Sella_Rice_10kg.png' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0123A - 5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255518/Shama_Super_Kernal_Par_Boiled_Sella_Rice_5kg.png' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'2165A - 2kg x 10', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255520/Shama_Super_Kernal_Par_Boiled_Sella_Rice_2kg.png' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0178A - 1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255519/Shama_Super_Kernal_Par_Boiled_Sella_Rice_1kg.png' },

    // SHAMA — Extra Long
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'1878B - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255597/Shama_extra_long_basmati_rice_20kg.png' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'2189A - 10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255519/Shama_Basmati_Rice_EXTRA_LONG_10kg.png' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'1892A - 5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255518/Shama_Basmati_Rice_EXTRA_LONG_5kg.png' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'4206A - 2kg x 10', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255517/Shama_Basmati_Rice_EXTRA_LONG_2kg.png' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'2318A - 1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255520/Shama_Basmati_Rice_EXTRA_LONG_1kg.png' },

    // SHAMA — White Gold
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0116A - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255526/Shama_White_Gold_Basmati_Rice_20kg.png' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0109A - 10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255525/Shama_White_Gold_Basmati_Rice_10kg.png' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0017A - 5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255523/Shama_White_Gold_Basmati_Rice_5kg.png' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0093A - 2kg x 10', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255523/Shama_White_Gold_Basmati_Rice_2kg.png' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0086A - 1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255524/Shama_White_Gold_Basmati_Rice_1kg.png' },

    // SHAMA — Thai Jasmine AAA
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'4114B - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255523/Shama_Thai_Long_Grain_Jasmin_Rice_AAA_20kg.png' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'18kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790257556/Shama_Thai_Long_Grain_Jasmin_Rice_AAA_18kg.png' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0338A - 10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255523/Shama_Thai_Long_Grain_Jasmin_Rice_AAA_10kg.png' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0239A - 5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255522/Shama_Thai_Long_Grain_Jasmin_Rice_AAA_5kg.png' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0314A - 1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255521/Shama_Thai_Long_Grain_Jasmin_Rice_AAA_1kg.png' },

    // SHAMA — Thai Jasmine broken variants
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255513/Shama_thai_jasmine_1_volta_20kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'18kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790256471/Shama_thai_jasmine_1_volta_18kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255513/Shama_thai_jasmine_1_volta_5kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'1kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255513/Shama_thai_jasmine_1_volta_1kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255513/Shama_thai_jasmine_2_volta_20kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'18kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790256469/Shama_thai_jasmine_2_volta_18kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255513/Shama_thai_jasmine_2_volta_5kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'1kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255513/Shama_thai_jasmine_2_volta_1kg.png' },

    // SHAMA — Other rice
    { category:'rice', title:'Shama Sona Masoori Rice', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255521/sona_masoori_5kg.png' },
    { category:'rice', title:'Shama Broken Basmati Rice', pack:'2226A - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790257567/shama_broken_basmati_rice_20kg.png' },
    { category:'rice', title:'Shama Broken Basmati Rice', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255564/Shama_broken_basmati_rice_new_5kg.png' },

    // SUNRISE — keep after all Shama ranges
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255526/Sunrise_Basmati_Rice_Extra_Long_20kg.png' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255525/Sunrise_Basmati_Rice_Extra_Long_10kg.png' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255524/Sunrise_Basmati_Rice_Extra_Long_5kg.png' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255523/Sunrise_Basmati_Rice_Extra_Long_1kg.png' },

    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255522/Sunrise_Golden_Sella_Basmati_Rice_20_KG.png' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255527/Sunrise_Golden_Sella_Basmati_Rice_10_KG.png' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255527/Sunrise_Golden_Sella_Basmati_Rice_5_KG.png' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255522/Sunrise_Golden_Sella_Basmati_Rice_1_KG.png' },

    { category:'rice', title:'Sunrise Fragrant Jasmine Rice AAAAA', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255525/Sunrise_elephant_jasmine_parfume_rice_20kg.png' },
    { category:'rice', title:'Sunrise Fragrant Jasmine Rice AAAAA', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255526/Sunrise_elephant_jasmine_parfume_rice_5kg.png' },

    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (1 Time)', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255526/Sunrise_Elephant_Parfume_Jasmin_Broken_Rice_1X_-_20kg.png' },
    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (1 Time)', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255527/Sunrise_Elephant_Parfume_Jasmin_Broken_Rice_1X_-_5kg.png' },

    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (2 Times)', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255527/Sunrise_Elephant_Parfume_Jasmin_Broken_Rice_2X_-_20kg.png' },
    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (2 Times)', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790255526/Sunrise_Elephant_Parfume_Jasmin_Broken_Rice_2X_-_5kg.png' },

    { category:'rice', title:'Sunrise Dragon Jasmine Rice AAA', pack:'18kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790256468/Sunrise_Dragon_Jasmine_Rice_18_kg.png' }
  ];

  if (typeof productData !== 'undefined' && Array.isArray(productData)) {
    const nonRiceProducts = productData.filter(item => item.category !== 'rice');
    productData.splice(0, productData.length, ...riceProducts20260924, ...nonRiceProducts);
  }
})();