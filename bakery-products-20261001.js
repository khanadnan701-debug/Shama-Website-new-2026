(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    {
      category:'bakery',
      title:'Almond Cake Rusk',
      pack:'750g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790855967/Almond_Cake_Rusk_750g.png'
    },
    {
      category:'bakery',
      title:'Bakar Khani',
      pack:'270g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790856332/Bakar_khani_270g.png'
    },
    {
      category:'bakery',
      title:'Tea Rusks',
      pack:'300g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790856774/Tea_Rusks_300g.png'
    },
    {
      category:'bakery',
      title:'Classic Cake Rusk',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790857141/classic_cake_rusk.png'
    },
    {
      category:'bakery',
      title:'Shama Baking Powder',
      pack:'100g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790857474/Shama_Baking_Powder_100gm.png'
    },
    {
      category:'bakery',
      title:'Karachi Osmania Biscuit',
      pack:'400g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790859739/Karachi_Osmania_Biscuit_400g.png'
    },
    {
      category:'bakery',
      title:"Borwick's Baking Powder",
      pack:'100g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790860265/Borwick_s_Baking_Powder_100g.png'
    }
  ];

  const nonCategory = productData.filter(item => item.category !== 'bakery');
  productData.splice(0, productData.length, ...nonCategory, ...items);

  const category = {
    slug:'bakery',
    name:'Bakery',
    desc:'Rusks, biscuits, baking powder and bakery favourites',
    image:items[0].image
  };
  const existing = categories.find(item => item.slug === 'bakery');
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window.shama_bakery_catalogue = { total: items.length };
})();