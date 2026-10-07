// Tea catalogue synced with Cloudinary folder: shama/Tea. Source of truth refreshed on 2026-10-07.
(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const teaProducts = [
    {
      category:'tea',
      brand:'Shama',
      title:'Shama Premium Gold Tea',
      pack:'1kg',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292823/Shama_Premium_gold_Tea_1kg.png'
    },
    {
      category:'tea',
      brand:'Shama',
      title:'Shama Premium Gold Tea',
      pack:'500g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292824/Shama_Premium_gold_Tea_500g.png'
    },
    {
      category:'tea',
      brand:'Shama',
      title:'Shama Premium Gold Tea',
      pack:'300g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292824/Shama_Premium_gold_Tea_300g.png'
    },
    {
      category:'tea',
      brand:'Shama',
      title:'Shama Pink Tea',
      pack:'20 pcs',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292824/Shama_pink_tea_20pcs.png'
    },
    {
      category:'tea',
      brand:'PG Tips',
      title:'PG Tips Tea Bags',
      pack:'300 tea bags',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030636/PG_Tea_300_Bag.png'
    },
    {
      category:'tea',
      brand:'Mokhtar',
      title:'Mokhtar Green Tea',
      pack:'24 x 500g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030636/Mokhtar_Green_Tea_24x500g.png'
    },
    {
      category:'tea',
      brand:'Tapal',
      title:'Tapal Danedar Tea Bags',
      pack:'300 tea bags',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030635/Tapal_Tea_Danedar_300_s.png'
    },
    {
      category:'tea',
      brand:'Tapal',
      title:'Tapal Black Tea Jar',
      pack:'450g',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030635/Tapal_Th%C3%A9_Noir_en_Vrac_Bocal_Black_Tea_Jar_450g.png'
    },
    {
      category:'tea',
      brand:'Tapal',
      title:'Tapal Danedar Loose Tea Jar',
      pack:'1kg',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791030634/Tapal_Tea_Danedar_Jar_Loose_1kg.png'
    }
  ];

  const others = productData.filter(item => item.category !== 'tea');
  productData.splice(0, productData.length, ...others, ...teaProducts);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const existing = categories.find(x=>x.slug==='tea');
    const category = {
      slug:'tea',
      name:'Tea',
      desc:'Premium black tea, pink tea, green tea and classic tea bags',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791292824/Shama_Premium_gold_Tea_500g.png'
    };
    if (existing) Object.assign(existing, category);
    else categories.push(category);
  }

  window.shamaTeaCatalogue = {
    cloudinaryTotal:9,
    total:teaProducts.length,
    sourceFolder:'shama/Tea',
    syncedAt:'2026-10-07',
    shamaFirst:true
  };
})();