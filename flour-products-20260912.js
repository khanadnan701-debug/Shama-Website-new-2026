(() => {
  'use strict';
  if (document.body.dataset.category !== 'flour') return;
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const flourProducts = [
    {
      category: 'flour',
      title: 'Shama Chakki Gold Atta',
      pack: '2kg',
      image: '/assets/flour/shama-chakki-gold-atta-2kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Chakki Gold Atta',
      pack: '5kg',
      image: '/assets/flour/shama-chakki-gold-atta-5kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Chakki Gold Atta',
      pack: '10kg',
      image: '/assets/flour/shama-chakki-gold-atta-10kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Besan',
      pack: '1kg',
      image: '/assets/flour/shama-besan-1kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Chapati Atta Medium',
      pack: '10kg',
      image: '/assets/flour/shama-chapati-atta-medium-10kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Chapati Atta Medium',
      pack: '20kg',
      image: '/assets/flour/shama-chapati-atta-medium-20kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Wheat Flour T55',
      pack: '1kg',
      image: '/assets/flour/shama-wheat-flour-t55-1kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Wheat Flour T55',
      pack: '25kg',
      image: '/assets/flour/shama-wheat-flour-t55-25kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Jawar Atta',
      pack: '1kg',
      image: '/assets/flour/shama-jawar-atta-1kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Multigrain Atta',
      pack: '5kg',
      image: '/assets/flour/shama-multigrain-atta-5kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Multigrain Atta',
      pack: '10kg',
      image: '/assets/flour/shama-multigrain-atta-10kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Rice Flour',
      pack: '1kg',
      image: '/assets/flour/shama-rice-flour-1kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Shama Rice Flour',
      pack: '5kg',
      image: '/assets/flour/shama-rice-flour-5kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'TRS Besan Gram Flour',
      pack: '1kg',
      image: '/assets/flour/trs-besan-gram-flour-1kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Le Renard Semoule Fine',
      pack: '1kg',
      image: '/assets/flour/le-renard-semoule-fine-1kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Ahmed Corn Flour',
      pack: '285g',
      image: '/assets/flour/ahmed-corn-flour-285g.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Braga Semoule',
      pack: '1kg',
      image: '/assets/flour/braga-semoule-1kg.webp?v=20261019-flour-newzip-v2'
    },
    {
      category: 'flour',
      title: 'Braga Maida Flour T55',
      pack: '25kg',
      image: '/assets/flour/braga-maida-flour-t55-25kg.webp?v=20261019-flour-newzip-v2'
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
      category.name = 'Flour & Lentiles';
      category.desc = 'A complete range of flour, lentiles, beans, chickpeas and peas';
    }
  }
})();
