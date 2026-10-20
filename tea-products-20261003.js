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
      image:'/assets/cloudinary-shama/tea/shama-premium-gold-tea-1kg-45a0cf5267cb.webp'
    },
    {
      category:'tea',
      brand:'Shama',
      title:'Shama Premium Gold Tea',
      pack:'500g',
      image:'/assets/cloudinary-shama/tea/shama-premium-gold-tea-500g-ebda47ccc9c3.webp'
    },
    {
      category:'tea',
      brand:'Shama',
      title:'Shama Premium Gold Tea',
      pack:'300g',
      image:'/assets/cloudinary-shama/tea/shama-premium-gold-tea-300g-224d6a4dd025.webp'
    },
    {
      category:'tea',
      brand:'Shama',
      title:'Shama Pink Tea',
      pack:'20 pcs',
      image:'/assets/cloudinary-shama/tea/shama-pink-tea-20pcs-70233d13daf9.webp'
    },
    {
      category:'tea',
      brand:'PG Tips',
      title:'PG Tips Tea Bags',
      pack:'19019 - 300 tea bags',
      image:'/assets/cloudinary-shama/tea/pg-tea-300-bag-951b1ef25c55.webp'
    },
    {
      category:'tea',
      brand:'Mokhtar',
      title:'Mokhtar Green Tea',
      pack:'0101A - 24 x 500g',
      image:'/assets/cloudinary-shama/tea/mokhtar-green-tea-24x500g-2334ec5320ed.webp'
    },
    {
      category:'tea',
      brand:'Tapal',
      title:'Tapal Danedar Tea Bags',
      pack:'18979 - 300 tea bags',
      image:'/assets/cloudinary-shama/tea/tapal-tea-danedar-300-s-9afe9bc0b38d.webp'
    },
    {
      category:'tea',
      brand:'Tapal',
      title:'Tapal Black Tea Jar',
      pack:'0281B - 450g',
      image:'/assets/cloudinary-shama/tea/tapal-the-noir-en-vrac-bocal-black-tea-jar-450g-db2a14344e2d.webp'
    },
    {
      category:'tea',
      brand:'Tapal',
      title:'Tapal Danedar Loose Tea Jar',
      pack:'0199A - 1kg',
      image:'/assets/cloudinary-shama/tea/tapal-tea-danedar-jar-loose-1kg-b76389945386.webp'
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
      image:'/assets/cloudinary-shama/tea/shama-premium-gold-tea-500g-ebda47ccc9c3.webp'
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