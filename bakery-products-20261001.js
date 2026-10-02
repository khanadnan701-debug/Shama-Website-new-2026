(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  // Live source synced from Cloudinary folder: shama/Bakery
  // 18 current assets, arranged by product type for the Bakery page.
  const items = [
    // BAKING ESSENTIALS
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Powder 100g',
      pack:'100g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790857474/Shama_Baking_Powder_100gm.png'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Powder 80g',
      pack:'80g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790868680/Shama_Baking_Powder_80gm.png'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Powder 550g',
      pack:'550g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869094/Shama_baking_powder_550gm.png'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Powder Jar 800g',
      pack:'800g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790868122/Shama_Baking_Powder_800g_Jar.png'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Soda Jar 800g',
      pack:'800g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790868374/Shama_Baking_Soda_800g_Jar.png'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Soda 100g',
      pack:'100g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790933456/Shama_Baking_Soda_100g.png'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:"Borwick's Baking Powder 100g",
      pack:'100g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790860265/Borwick_s_Baking_Powder_100g.png'
    },

    // CAKE RUSKS & BISCUITS
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Almond Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790855967/Almond_Cake_Rusk_750g.png'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Crispy Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790867792/Crispy_Cake_Rusk_750g.png'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Classic Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869008/classic_cake_rusk_750g.png'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Coconut Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869503/Cake_Rusk_Coconut_750g.png'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Tea Rusks',
      pack:'300g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790856774/Tea_Rusks_300g.png'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Bakar Khani',
      pack:'270g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790856332/Bakar_khani_270g.png'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Karachi Osmania Biscuit',
      pack:'400g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790859739/Karachi_Osmania_Biscuit_400g.png'
    },

    // FLAVOURS & ESSENCES
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Banana Flavour',
      pack:'20ml',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789679001/Banana_20ml.png'
    },
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Almond Flavour',
      pack:'20ml',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789679038/Almond_20ml.png'
    },
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Vanilla Flavour',
      pack:'20ml',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789679072/vanilla_20ml.png'
    },
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Rose Flavour',
      pack:'20ml',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789679073/Rose_20ml.png'
    },
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Pineapple Flavour',
      pack:'20ml',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789679074/Pineapple_20ml.png'
    }
  ];

  // Replace the previous Bakery dataset instead of appending to it.
  const nonBakery = productData.filter(item => item.category !== 'bakery');
  productData.splice(0, productData.length, ...nonBakery, ...items);

  const category = {
    slug:'bakery',
    name:'Bakery',
    desc:'Baking essentials, cake rusks, biscuits, flavours and essences',
    image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869503/Cake_Rusk_Coconut_750g.png'
  };

  const existing = categories.find(item => item.slug === 'bakery');
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window.shama_bakery_catalogue = {
    total: items.length,
    groups: ['Baking Essentials', 'Cake Rusks & Biscuits', 'Flavours & Essences'],
    source: 'shama/Bakery'
  };
})();