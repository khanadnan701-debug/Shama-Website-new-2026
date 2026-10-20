(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const sugarProducts = [
    {
      category:'sugar',
      title:'Tatcan Powdered Sugar',
      pack:'1kg',
      group:'Sugar & Sugar Cubes',
      image:'/assets/cloudinary-shama/sugar/sucre-en-poudre-tatcan-1kg-a739c5ad588e.webp'
    },
    {
      category:'sugar',
      title:'Dousuc Sugar Cubes',
      pack:'1kg',
      group:'Sugar & Sugar Cubes',
      image:'/assets/cloudinary-shama/sugar/sucre-morceau-dousuc-1kg-c2cb15efe8b3.webp'
    },
    {
      category:'sugar',
      title:'Granulated Sugar',
      pack:'25kg',
      group:'Sugar & Sugar Cubes',
      image:'/assets/cloudinary-shama/sugar/sucre-en-poudre-25kg-4a33bbc997f7.webp'
    },
    {
      category:'sugar',
      title:'Shama Desi Gur',
      pack:'500g',
      group:'Shama Desi Gur',
      image:'/assets/cloudinary-shama/sugar/shama-desi-gur-500g-47e4706bc96f.webp'
    },
    {
      category:'sugar',
      title:'Shama Desi Shakkar',
      pack:'500g',
      group:'Shama Desi Shakkar',
      image:'/assets/cloudinary-shama/sugar/shama-desi-shakkar-500g-53dad935a769.webp'
    },
    {
      category:'sugar',
      title:'Shakkar',
      pack:'1kg',
      group:'Shama Desi Shakkar',
      image:'/assets/cloudinary-shama/sugar/shakkar-1kg-50a8e4eda1c0.webp'
    },
    {
      category:'sugar',
      title:'Shama Desi Shakkar',
      pack:'1kg',
      group:'Shama Desi Shakkar',
      image:'/assets/cloudinary-shama/sugar/shama-desi-shakkar-1kg-868d4daea669.webp'
    },
    {
      category:'sugar',
      title:'Shama Desi Gur',
      pack:'1kg x 6',
      group:'Shama Desi Gur',
      image:'/assets/cloudinary-shama/sugar/shama-desi-gur-1kg-x6-1ab085afc813.webp'
    }
  ];

  const others = productData.filter(item => item.category !== 'sugar');
  productData.splice(0, productData.length, ...others, ...sugarProducts);
})();