(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  // Cloudinary source: shama/Bakery
  // Ordered for the website: Shama baking essentials first, then flavours,
  // rusks/biscuits, followed by the remaining branded/uncategorised item.
  const items = [
    {
      category:'bakery',
      group:'Shama Baking Essentials',
      title:'Shama Baking Powder',
      pack:'100g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790857474/Shama_Baking_Powder_100gm.png'
    },
    {
      category:'bakery',
      group:'Shama Baking Essentials',
      title:'Shama Baking Powder',
      pack:'80g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790868680/Shama_Baking_Powder_80gm.png'
    },
    {
      category:'bakery',
      group:'Shama Baking Essentials',
      title:'Shama Baking Powder',
      pack:'550g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869094/Shama_baking_powder_550gm.png'
    },
    {
      category:'bakery',
      group:'Shama Baking Essentials',
      title:'Shama Baking Powder Jar',
      pack:'800g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790868122/Shama_Baking_Powder_800g_Jar.png'
    },
    {
      category:'bakery',
      group:'Shama Baking Essentials',
      title:'Shama Baking Soda Jar',
      pack:'800g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790868374/Shama_Baking_Soda_800g_Jar.png'
    },

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
    },

    {
      category:'bakery',
      group:'Rusks & Biscuits',
      title:'Almond Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790855967/Almond_Cake_Rusk_750g.png'
    },
    {
      category:'bakery',
      group:'Rusks & Biscuits',
      title:'Crispy Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790867792/Crispy_Cake_Rusk_750g.png'
    },
    {
      category:'bakery',
      group:'Rusks & Biscuits',
      title:'Classic Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869008/classic_cake_rusk_750g.png'
    },
    {
      category:'bakery',
      group:'Rusks & Biscuits',
      title:'Coconut Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790869503/Cake_Rusk_Coconut_750g.png'
    },
    {
      category:'bakery',
      group:'Rusks & Biscuits',
      title:'Tea Rusks',
      pack:'300g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790856774/Tea_Rusks_300g.png'
    },
    {
      category:'bakery',
      group:'Rusks & Biscuits',
      title:'Bakar Khani',
      pack:'270g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790856332/Bakar_khani_270g.png'
    },
    {
      category:'bakery',
      group:'Rusks & Biscuits',
      title:'Karachi Osmania Biscuit',
      pack:'400g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790859739/Karachi_Osmania_Biscuit_400g.png'
    },

    {
      category:'bakery',
      group:'Other Bakery',
      title:"Borwick's Baking Powder",
      pack:'100g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790860265/Borwick_s_Baking_Powder_100g.png'
    },
    {
      category:'bakery',
      group:'Other Bakery',
      title:'Bakery Product',
      pack:'Contact us for product details',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790866697/31143b58-3f42-4479-bece-1b0deb39e66e.png'
    }
  ];

  const nonCategory = productData.filter(item => item.category !== 'bakery');
  productData.splice(0, productData.length, ...nonCategory, ...items);

  const category = {
    slug:'bakery',
    name:'Bakery',
    desc:'Baking essentials, flavours, rusks, biscuits and bakery favourites',
    image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790855967/Almond_Cake_Rusk_750g.png'
  };

  const existing = categories.find(item => item.slug === 'bakery');
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window.shama_bakery_catalogue = {
    total: items.length,
    groups: ['Shama Baking Essentials', 'Flavours & Essences', 'Rusks & Biscuits', 'Other Bakery'],
    source: 'shama/Bakery'
  };
})();