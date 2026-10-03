(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const sugarProducts = [
    {
      category:'sugar',
      title:'Tatcan Powdered Sugar',
      pack:'1kg',
      group:'Sugar & Sugar Cubes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031371/Sucre_En_Poudre_Tatcan_1kg.png'
    },
    {
      category:'sugar',
      title:'Dousuc Sugar Cubes',
      pack:'1kg',
      group:'Sugar & Sugar Cubes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031371/Sucre_Morceau_DOUSUC_1kg.png'
    },
    {
      category:'sugar',
      title:'Granulated Sugar',
      pack:'25kg',
      group:'Sugar & Sugar Cubes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031372/Sucre_En_Poudre_25kg.png'
    },
    {
      category:'sugar',
      title:'Shama Desi Gur',
      pack:'500g',
      group:'Shama Desi Gur',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031372/Shama_Desi_Gur_500g.png'
    },
    {
      category:'sugar',
      title:'Shama Desi Shakkar',
      pack:'500g',
      group:'Shama Desi Shakkar',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031373/Shama_Desi_Shakkar_500g.png'
    },
    {
      category:'sugar',
      title:'Shakkar',
      pack:'1kg',
      group:'Shama Desi Shakkar',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031373/Shakkar_1kg.png'
    },
    {
      category:'sugar',
      title:'Shama Desi Shakkar',
      pack:'1kg',
      group:'Shama Desi Shakkar',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031374/Shama_Desi_Shakkar_1kg.png'
    },
    {
      category:'sugar',
      title:'Shama Desi Gur',
      pack:'1kg x 6',
      group:'Shama Desi Gur',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1791031374/Shama_Desi_Gur_1kg_X6.png'
    }
  ];

  const others = productData.filter(item => item.category !== 'sugar');
  productData.splice(0, productData.length, ...others, ...sugarProducts);
})();