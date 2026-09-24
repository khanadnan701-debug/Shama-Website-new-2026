(() => {
  'use strict';

  const riceProducts20260924 = [
    // SHAMA — Sella first
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0147A - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242898/20kg_2.png' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0130 - 10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242953/10kg_2.png' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0123A - 5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242901/5kg_2.png' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'2165A - 2kg x 10', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242898/2kg_2.png' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0178A - 1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242908/1kg_2.png' },

    // SHAMA — Extra Long
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'1878B - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242899/20kg.png' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'2189A - 10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242907/10kg.png' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'1892A - 5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242902/5kg.png' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'4206A - 2kg x 10', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242899/2kg.png' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'2318A - 1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242898/1kg.png' },

    // SHAMA — White Gold
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0116A - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242903/20kg_1.png' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0109A - 10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242903/10kg_1.png' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0017A - 5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242898/5kg_1.png' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0093A - 2kg x 10', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242906/2kg_1.png' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0086A - 1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242898/1kg_1.png' },

    // SHAMA — Thai Jasmine AAA
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'4114B - 20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242899/20kg_3.png' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0338A - 10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242900/10kg_3.png' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0239A - 5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242904/5kg_3.png' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0314A - 1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242899/1kg_3.png' },

    // SHAMA — Thai Jasmine broken variants
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242907/Shama_thai_jasmine_1_volta_20kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242905/Shama_thai_jasmine_1_volta_5kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'1kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242954/Shama_thai_jasmine_1_volta_1kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242908/Shama_thai_jasmine_2_volta_20kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242906/Shama_thai_jasmine_2_volta_5kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'1kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242905/Shama_thai_jasmine_2_volta_1kg.png' },
    { category:'rice', title:'Shama Thai Jasmine Rice (1 Time)', pack:'Contact us for available pack sizes', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242900/shama_thai_jasmine_1_time.png' },

    // SHAMA — Other rice
    { category:'rice', title:'Shama Sona Masoori Rice', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242899/sona_masoori_5kg.png' },
    { category:'rice', title:'Shama Broken Basmati Rice', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242964/Shama_broken_basmati_rice_new_5kg.png' },

    // SUNRISE — keep after all Shama ranges
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242898/20kg_4.png' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242953/10kg_4.png' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242903/5kg_4.png' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242954/1kg_4.png' },

    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242904/20kg_5.png' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'10kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242902/1okg.png' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242899/5kg_5.png' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'1kg x 20', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242909/1kg_5.png' },

    { category:'rice', title:'Sunrise Fragrant Jasmine Rice AAAAA', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242899/20kg_6.png' },
    { category:'rice', title:'Sunrise Fragrant Jasmine Rice AAAAA', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242900/5kg_6.png' },

    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (1 Time)', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242899/20kg_7.png' },
    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (1 Time)', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242954/5kg_7.png' },

    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (2 Times)', pack:'20kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242912/20kg_8.png' },
    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (2 Times)', pack:'5kg x 1', image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790242953/5kg_8.png' }
  ];

  if (typeof productData !== 'undefined' && Array.isArray(productData)) {
    const nonRiceProducts = productData.filter(item => item.category !== 'rice');
    productData.splice(0, productData.length, ...riceProducts20260924, ...nonRiceProducts);
  }
})();