(() => {
  'use strict';

  const riceProducts20260924 = [
    // SHAMA — Sella first
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0147A - 20kg x 1', image:'/assets/rice/shama-super-kernal-par-boiled-sella-rice-20kg.webp' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0130 - 10kg x 1', image:'/assets/rice/shama-super-kernal-par-boiled-sella-rice-10kg.webp' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0123A - 5kg x 1', image:'/assets/rice/shama-super-kernal-par-boiled-sella-rice-5kg.webp' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'2165A - 2kg x 10', image:'/assets/rice/shama-super-kernal-par-boiled-sella-rice-2kg.webp' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0178A - 1kg x 20', image:'/assets/rice/shama-super-kernal-par-boiled-sella-rice-1kg.webp' },

    // SHAMA — Extra Long
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'1878B - 20kg x 1', image:'/assets/rice/shama-extra-long-basmati-rice-20kg.webp' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'2189A - 10kg x 1', image:'/assets/rice/shama-basmati-rice-extra-long-10kg.webp' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'1892A - 5kg x 1', image:'/assets/rice/shama-basmati-rice-extra-long-5kg.webp' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'4206A - 2kg x 10', image:'/assets/rice/shama-basmati-rice-extra-long-2kg.webp' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'2318A - 1kg x 20', image:'/assets/rice/shama-basmati-rice-extra-long-1kg.webp' },

    // SHAMA — White Gold
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0116A - 20kg x 1', image:'/assets/rice/shama-white-gold-basmati-rice-20kg.webp' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0109A - 10kg x 1', image:'/assets/rice/shama-white-gold-basmati-rice-10kg.webp' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0017A - 5kg x 1', image:'/assets/rice/shama-white-gold-basmati-rice-5kg.webp' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0093A - 2kg x 10', image:'/assets/rice/shama-white-gold-basmati-rice-2kg.webp' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0086A - 1kg x 20', image:'/assets/rice/shama-white-gold-basmati-rice-1kg.webp' },

    // SHAMA — Thai Jasmine AAA
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'4114B - 20kg x 1', image:'/assets/rice/shama-thai-long-grain-jasmin-rice-aaa-20kg.webp' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'4114B - 18kg x 1', image:'/assets/rice/shama-thai-long-grain-jasmin-rice-aaa-18kg.webp' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0338A - 10kg x 1', image:'/assets/rice/shama-thai-long-grain-jasmin-rice-aaa-10kg.webp' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0239A - 5kg x 1', image:'/assets/rice/shama-thai-long-grain-jasmin-rice-aaa-5kg.webp' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0321B - 2kg x 10', image:'/assets/rice/shama-thai-long-grain-jasmin-rice-aaa-2kg.webp' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0314A - 1kg x 20', image:'/assets/rice/shama-thai-long-grain-jasmin-rice-aaa-1kg.webp' },

    // SHAMA — Thai Jasmine broken variants
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'20kg x 1', image:'/assets/rice/shama-thai-jasmine-1-volta-20kg.webp' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'4251A - 18kg x 1', image:'/assets/rice/shama-thai-jasmine-1-volta-18kg.webp' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'0253A - 5kg x 1', image:'/assets/rice/shama-thai-jasmine-1-volta-5kg.webp' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (1 Time)', pack:'1kg x 1', image:'/assets/rice/shama-thai-jasmine-1-volta-1kg.webp' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'20kg x 1', image:'/assets/rice/shama-thai-jasmine-2-volta-20kg.webp' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'4251B - 18kg x 1', image:'/assets/rice/shama-thai-jasmine-2-volta-18kg.webp' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'0277A - 5kg x 1', image:'/assets/rice/shama-thai-jasmine-2-volta-5kg.webp' },
    { category:'rice', title:'Shama Thai Jasmine Broken Rice (2 Times)', pack:'9911A - 1kg x 1', image:'/assets/rice/shama-thai-jasmine-2-volta-1kg.webp' },

    // SHAMA — Other rice
    { category:'rice', title:'Shama Sona Masoori Rice', pack:'5kg x 1', image:'/assets/rice/sona-masoori-5kg.webp' },
    { category:'rice', title:'Shama Broken Basmati Rice', pack:'2226A - 20kg x 1', image:'/assets/rice/shama-broken-basmati-rice-20kg.webp' },
    { category:'rice', title:'Shama Broken Basmati Rice', pack:'5kg x 1', image:'/assets/rice/shama-broken-basmati-rice-new-5kg.webp' },

    // SHAHEEN
    { category:'rice', title:'Shaheen Sella Super Basmati Parboiled Rice', pack:'20kg x 1', image:'/assets/rice/shaheen-sella-super-basmati-parboiled-rice-20-kg.webp' },

    // SUNRISE — keep after all Shama ranges
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'20kg x 1', image:'/assets/rice/sunrise-basmati-rice-extra-long-20kg.webp' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'10kg x 1', image:'/assets/rice/sunrise-basmati-rice-extra-long-10kg.webp' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'5kg x 1', image:'/assets/rice/sunrise-basmati-rice-extra-long-5kg.webp' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'2kg x 10', image:'/assets/rice/sunrise-basmati-rice-extra-long-2kg.webp' },
    { category:'rice', title:'Sunrise Extra Long Basmati Rice', pack:'1kg x 20', image:'/assets/rice/sunrise-basmati-rice-extra-long-1kg.webp' },

    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'20kg x 1', image:'/assets/rice/sunrise-golden-sella-basmati-rice-20-kg.webp' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'10kg x 1', image:'/assets/rice/sunrise-golden-sella-basmati-rice-10-kg.webp' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'5kg x 1', image:'/assets/rice/sunrise-golden-sella-basmati-rice-5-kg.webp' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'1kg x 20', image:'/assets/rice/sunrise-golden-sella-basmati-rice-1-kg.webp' },

    { category:'rice', title:'Sunrise Fragrant Jasmine Rice AAAAA', pack:'20kg x 1', image:'/assets/rice/sunrise-elephant-jasmine-parfume-rice-20kg.webp' },
    { category:'rice', title:'Sunrise Fragrant Jasmine Rice AAAAA', pack:'5kg x 1', image:'/assets/rice/sunrise-elephant-jasmine-parfume-rice-5kg.webp' },

    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (1 Time)', pack:'20kg x 1', image:'/assets/rice/sunrise-elephant-parfume-jasmin-broken-rice-1x-20kg.webp' },
    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (1 Time)', pack:'5kg x 1', image:'/assets/rice/sunrise-elephant-parfume-jasmin-broken-rice-1x-5kg.webp' },

    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (2 Times)', pack:'20kg x 1', image:'/assets/rice/sunrise-elephant-parfume-jasmin-broken-rice-2x-20kg.webp' },
    { category:'rice', title:'Sunrise Elephant Jasmine Broken Rice (2 Times)', pack:'5kg x 1', image:'/assets/rice/sunrise-elephant-parfume-jasmin-broken-rice-2x-5kg.webp' },

    { category:'rice', title:'Sunrise Dragon Jasmine Rice AAA', pack:'18kg x 1', image:'/assets/rice/sunrise-dragon-jasmine-rice-18-kg.webp' }
  ];

  if (typeof productData !== 'undefined' && Array.isArray(productData)) {
    const nonRiceProducts = productData.filter(item => item.category !== 'rice');
    productData.splice(0, productData.length, ...riceProducts20260924, ...nonRiceProducts);
  }
})();