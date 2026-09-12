(() => {
  'use strict';
  if (document.body.dataset.category !== 'flour') return;
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const flourProducts = [
    {
      category: 'flour',
      title: 'Shama Chakki Gold Atta',
      pack: '2kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232532/Shama_chakki_gold_atta_2kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Chakki Gold Atta',
      pack: '5kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232533/Shama_chakki_gold_atta_5kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Chakki Gold Atta',
      pack: '10kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232534/Shama_chakki_gold_atta_10kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Besan',
      pack: '1kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232533/shama_besan_1kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Chapati Atta Medium',
      pack: '10kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232535/Shama_chapati_atta_medium_10kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Chapati Atta Medium',
      pack: '20kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232534/Shama_chapati_atta_medium_20kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Wheat Flour T55',
      pack: '1kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232539/shama_wheat_floor_T55_1kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Wheat Flour T55',
      pack: '25kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232534/Shama_wheat_floor_T55_25kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Jawar Atta',
      pack: '1kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232535/shama_jawar_atta_1kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Multigrain Atta',
      pack: '5kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232536/Shama_multigrain_atta_5kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Multigrain Atta',
      pack: '10kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232537/Shama_multigrain_atta_10kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Rice Flour',
      pack: '1kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232538/Shama_rice_flour_1kg.png'
    },
    {
      category: 'flour',
      title: 'Shama Rice Flour',
      pack: '5kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232537/Shama_rice_flour_5kg.png'
    }
  ];

  flourProducts.forEach(product => {
    const exists = productData.some(item =>
      item.category === product.category &&
      item.title === product.title &&
      String(item.pack || '').trim().toLowerCase() === product.pack.toLowerCase()
    );
    if (!exists) productData.push(product);
  });

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(item => item.slug === 'flour');
    if (category) {
      category.name = 'Flour-Lentiles';
      category.desc = 'A complete range of Shama flour, atta, lentils, dals, beans and peas';
    }
  }
})();
