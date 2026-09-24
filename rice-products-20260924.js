(() => {
  'use strict';

  const W = 'https://static.wixstatic.com/media/';

  const riceProducts20260924 = [
    // 01 — SHAMA SELLA RICE
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0147A - 20kg x 1', image:W+'00ae33_13cd4bb647734b1bb57ccf22825919df~mv2.jpg' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0130 - 10kg x 1', image:W+'00ae33_e8d361fd2a3a42d799faa34b26885bcb~mv2.jpg' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0123A - 5kg x 1', image:W+'00ae33_1a0186c70dbe44b0b74082a2e8264ca6~mv2.jpg' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'2165A - 2kg x 10', image:W+'00ae33_a28f1d0e8949442f932c5458ef1b1f97~mv2.jpg' },
    { category:'rice', title:'Shama Super Kernal Parboiled Sella Rice', pack:'0178A - 1kg x 20', image:W+'00ae33_0f8751618bee4528a8afcf364252826f~mv2.jpg' },

    // 02 — SHAMA EXTRA LONG
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'1878B - 20kg x 1', image:W+'00ae33_e80d132ea86142d2905cb13ebabbc2dd~mv2.jpg' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'2189A - 10kg x 1', image:W+'00ae33_77fb393f1d7a4d3ebafe6317a6d5e37a~mv2.jpg' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'1892A - 5kg x 1', image:W+'00ae33_cbb20ad4190147e9b14dcec2cc55082f~mv2.jpg' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'4206A - 2kg x 10', image:W+'00ae33_b048f22865204aad9502a92ec328ddfb~mv2.jpg' },
    { category:'rice', title:'Shama Basmati Rice (extra Long)', pack:'2318A - 1kg x 20', image:W+'00ae33_6eefb6a0c97b48d1b7e0a5acc3e1bedd~mv2.jpg' },

    // 03 — OTHER SHAMA RICE: White Gold
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0116A - 20kg x 1', image:W+'00ae33_83cfce532ff74030acdc69fce9e410e9~mv2.jpg' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0109A - 10kg x 1', image:W+'00ae33_302ed874b304408c94b3fc2eebebd8df~mv2.jpg' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0017A - 5kg x 1', image:W+'00ae33_1853ec3f600d4b8c804e260efbc9094e~mv2.jpg' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0093A - 2kg x 10', image:W+'00ae33_df534d70b049499f8aa4c8924803b956~mv2.jpg' },
    { category:'rice', title:'Shama White Gold Basmati Rice', pack:'0086A - 1kg x 20', image:W+'00ae33_3e2f944e55aa43458bbe9b17394ee9bd~mv2.jpg' },

    // Other Shama: Thai Long Grain Jasmine AAA
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'4114B - 20kg x 1', image:W+'00ae33_fd6808318cf2436786a09e95d4875cce~mv2.jpg' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0338A - 10kg x 1', image:W+'00ae33_84f8ce36a7f8405cb8e4fb25a174c8bd~mv2.jpg' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0239A - 5kg x 1', image:W+'00ae33_1a07848cb7e14c5a9b0a0cb767a24500~mv2.jpg' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0321B - 2kg x 10', image:W+'00ae33_46f091bd5e43446f955a29f158faa486~mv2.jpg' },
    { category:'rice', title:'Shama Thai Long Grain Jasmin Rice AAA', pack:'0314A - 1kg x 20', image:W+'00ae33_5a64cb6baa8c41fcb07379240e018c0a~mv2.jpg' },

    // Other Shama: broken rice
    { category:'rice', title:'Shama Basmati Broken Rice', pack:'2226A - 20kg x 1', image:W+'00ae33_2663b130c6924624b6ccc39eaf4967a3~mv2.jpg' },
    { category:'rice', title:'Shama Basmati Broken Rice', pack:'2219A - 5kg x 1', image:W+'00ae33_41aba66e18864fee9f13924a658890d7~mv2.jpg' },
    { category:'rice', title:'Shama Sella Broken Rice', pack:'2387A - 20kg x 1', image:W+'00ae33_921b3c730a504fbfb6d1c89a807fcdde~mv2.jpg' },
    { category:'rice', title:'Shama Sella Broken Rice', pack:'1191A - 5kg x 1', image:W+'00ae33_8bf09cfe4ee54f93ad0ba5aa9c233602~mv2.jpg' },

    // Other Shama: Thai broken — names and images follow shamaonline.com/rice
    { category:'rice', title:'Shama Thai Broken Rice (1 Time)', pack:'4251A - 18kg x 1', image:W+'00ae33_b105eb8209794af58e391954d0d4022a~mv2.jpg' },
    { category:'rice', title:'Shama Thai Broken Rice (1 Time)', pack:'0253A - 5kg x 1', image:W+'00ae33_39ba2ed4ba0847ccbde7c04b6583f544~mv2.jpg' },
    { category:'rice', title:'Shama Thai Broken Rice (1 Time)', pack:'4633A - 1kg x 20', image:W+'00ae33_d9214bcf693c475da0569b0072e03cf0~mv2.jpg' },
    { category:'rice', title:'Shama Thai Broken Rice (2 Time)', pack:'4138A - 18kg x 1', image:W+'00ae33_0988abe5e829463ea7adc528e6d7088e~mv2.jpg' },
    { category:'rice', title:'Shama Thai Broken Rice (2 Time)', pack:'0277A - 5kg x 1', image:W+'00ae33_8242f7d9bb3e41e9835f085df9bff04c~mv2.jpg' },
    { category:'rice', title:'Shama Thai Broken Rice (2 Time)', pack:'9911A - 1kg x 20', image:W+'00ae33_7a6dd1ce5b384fd2ba1c543e21ea056e~mv2.jpg' },

    // 04 — SUNRISE RICE
    { category:'rice', title:'Sunrise Basmati Rice (extra Long)', pack:'20kg x 1', image:W+'00ae33_973a65c33ba04e71974c06ea25429fd0~mv2.jpg' },
    { category:'rice', title:'Sunrise Basmati Rice (extra Long)', pack:'10kg x 1', image:W+'00ae33_c6c31ba543ff4831af9282ad63e42e81~mv2.jpg' },
    { category:'rice', title:'Sunrise Basmati Rice (extra Long)', pack:'5kg x 1', image:W+'00ae33_21ad22b4f8db467bb0342a78d121b305~mv2.jpg' },
    { category:'rice', title:'Sunrise Basmati Rice (extra Long)', pack:'1kg x 20', image:W+'00ae33_6fca09c480894124bc35b864a27946bc~mv2.jpg' },

    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'1588A - 20kg x 1', image:W+'00ae33_4c38f7bdbcac4816a008fc129504976c~mv2.jpg' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'2394A - 10kg x 1', image:W+'00ae33_64121080398042708e1feb85ec25e0b1~mv2.jpg' },
    { category:'rice', title:'Sunrise Golden Sella Rice', pack:'2172A - 5kg x 1', image:W+'00ae33_41f9a4a9f29b43f9a0918294b06593c3~mv2.jpg' },

    { category:'rice', title:'Sunrise Dragon Rice AAA', pack:'18kg x 1', image:W+'00ae33_083fb22d3431455588d6e92f66157eae~mv2.jpg' },
    { category:'rice', title:'Sunrise Dragon Rice AAA', pack:'5kg x 1', image:W+'00ae33_73d88b8205f247b68163b38c9166fc63~mv2.jpg' },
    { category:'rice', title:'Sunrise Dragon Rice AAA', pack:'Contact us for available pack sizes', image:W+'00ae33_1e702c2bfe0d45238c80efe02ae0667c~mv2.jpg' },

    { category:'rice', title:'Sunrise Easy Cook Thai Rice', pack:'20kg x 1', image:W+'00ae33_46790b66162d4ea3bc922704b7b475d0~mv2.jpg' },
    { category:'rice', title:'Sunrise Easy Cook Thai Rice', pack:'10kg x 1', image:W+'00ae33_4aa5206831a2422491b4ba8084ecdd86~mv2.jpg' },

    { category:'rice', title:'Sunrise Pure Basmati Rice', pack:'Contact us for available pack sizes', image:W+'00ae33_cc124546b8ea4be3b45464d78ce88070~mv2.jpg' },
    { category:'rice', title:'Sunrise Pure Basmati Rice', pack:'Contact us for available pack sizes', image:W+'00ae33_3deaa8b3a4f74b75a8f14a769623196b~mv2.jpg' }
  ];

  if (typeof productData !== 'undefined' && Array.isArray(productData)) {
    const nonRiceProducts = productData.filter(item => item.category !== 'rice');
    productData.splice(0, productData.length, ...riceProducts20260924, ...nonRiceProducts);
  }
})();