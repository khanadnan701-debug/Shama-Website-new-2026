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
      image:'/assets/cloudinary-shama/bakery/shama-baking-powder-100gm-48d0df14901f.webp'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Powder 80g',
      pack:'80g',
      image:'/assets/cloudinary-shama/bakery/shama-baking-powder-80gm-066b12869325.webp'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Powder 550g',
      pack:'550g',
      image:'/assets/cloudinary-shama/bakery/shama-baking-powder-550gm-c97460373622.webp'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Powder Jar 800g',
      pack:'800g',
      image:'/assets/cloudinary-shama/bakery/shama-baking-powder-800g-jar-be81138fbdd5.webp'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Soda Jar 800g',
      pack:'800g',
      image:'/assets/cloudinary-shama/bakery/shama-baking-soda-800g-jar-05e08066c1a6.webp'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:'Shama Baking Soda 100g',
      pack:'100g',
      image:'/assets/cloudinary-shama/bakery/shama-baking-soda-100g-08fbb1c3fd8c.webp'
    },
    {
      category:'bakery',
      group:'Baking Essentials',
      title:"Borwick's Baking Powder 100g",
      pack:'100g',
      image:'/assets/cloudinary-shama/bakery/borwick-s-baking-powder-100g-cab362b215da.webp'
    },

    // CAKE RUSKS & BISCUITS
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Almond Cake Rusk',
      pack:'750g',
      image:'/assets/cloudinary-shama/bakery/almond-cake-rusk-750g-c96bd5a378be.webp'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Crispy Cake Rusk',
      pack:'750g',
      image:'/assets/cloudinary-shama/bakery/crispy-cake-rusk-750g-ee50f2944b69.webp'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Classic Cake Rusk',
      pack:'750g',
      image:'/assets/cloudinary-shama/bakery/classic-cake-rusk-750g-131f26479a58.webp'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Coconut Cake Rusk',
      pack:'750g',
      image:'/assets/cloudinary-shama/bakery/cake-rusk-coconut-750g-ac4d5d28489c.webp'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Tea Rusks',
      pack:'300g',
      image:'/assets/cloudinary-shama/bakery/tea-rusks-300g-6d9f24461199.webp'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Bakar Khani',
      pack:'270g',
      image:'/assets/cloudinary-shama/bakery/bakar-khani-270g-ce34b4dbf4ec.webp'
    },
    {
      category:'bakery',
      group:'Cake Rusks & Biscuits',
      title:'Karachi Osmania Biscuit',
      pack:'400g',
      image:'/assets/cloudinary-shama/bakery/karachi-osmania-biscuit-400g-582e89b45463.webp'
    },

    // FLAVOURS & ESSENCES
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Banana Flavour',
      pack:'20ml',
      image:'/assets/cloudinary-shama/bakery/banana-20ml-96d2543cd944.webp'
    },
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Almond Flavour',
      pack:'20ml',
      image:'/assets/cloudinary-shama/bakery/almond-20ml-32e8e8c71b4c.webp'
    },
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Vanilla Flavour',
      pack:'20ml',
      image:'/assets/cloudinary-shama/bakery/vanilla-20ml-20d196a83f96.webp'
    },
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Rose Flavour',
      pack:'20ml',
      image:'/assets/cloudinary-shama/bakery/rose-20ml-7b52b98fa7aa.webp'
    },
    {
      category:'bakery',
      group:'Flavours & Essences',
      title:'Pineapple Flavour',
      pack:'20ml',
      image:'/assets/cloudinary-shama/bakery/pineapple-20ml-fa7cdf9e9920.webp'
    }
  ];

  // Replace the previous Bakery dataset instead of appending to it.
  const nonBakery = productData.filter(item => item.category !== 'bakery');
  productData.splice(0, productData.length, ...nonBakery, ...items);

  const category = {
    slug:'bakery',
    name:'Bakery',
    desc:'Baking essentials, cake rusks, biscuits, flavours and essences',
    image:'/assets/cloudinary-shama/bakery/cake-rusk-coconut-750g-ac4d5d28489c.webp'
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