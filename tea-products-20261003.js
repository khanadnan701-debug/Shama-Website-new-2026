(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const teaProducts = [
    {
      category:'tea',
      title:'Tapal Danedar Loose Tea Jar',
      pack:'1kg',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030634/Tapal_Tea_Danedar_Jar_Loose_1kg.png'
    },
    {
      category:'tea',
      title:'Tapal Danedar Tea Bags',
      pack:'300 tea bags',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030635/Tapal_Tea_Danedar_300_s.png'
    },
    {
      category:'tea',
      title:'Tapal Black Tea Jar',
      pack:'450g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030635/Tapal_Th%C3%A9_Noir_en_Vrac_Bocal_Black_Tea_Jar_450g.png'
    },
    {
      category:'tea',
      title:'PG Tips Tea Bags',
      pack:'300 tea bags',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030636/PG_Tea_300_Bag.png'
    },
    {
      category:'tea',
      title:'Mokhtar Green Tea',
      pack:'24 x 500g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030636/Mokhtar_Green_Tea_24x500g.png'
    }
  ];

  const others = productData.filter(item => item.category !== 'tea');
  productData.splice(0, productData.length, ...others, ...teaProducts);

  if (typeof categories !== 'undefined' && Array.isArray(categories) && !categories.some(x=>x.slug==='tea')) {
    categories.push({
      slug:'tea',
      name:'Tea',
      desc:'Black tea, green tea and classic tea bags',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030636/PG_Tea_300_Bag.png'
    });
  }
})();