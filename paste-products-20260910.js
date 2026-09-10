(() => {
  const pasteProducts20260910 = [
    {
      category: 'sauces',
      title: 'Shama Ginger Paste',
      pack: '320g x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051004/ginger_320g.png'
    },
    {
      category: 'sauces',
      title: 'Shama Garlic Paste',
      pack: '320g x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051004/garlic_320g.png'
    },
    {
      category: 'sauces',
      title: 'Shama Ginger & Garlic Paste',
      pack: '320g x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051003/shama_ginger_garlic_320g.png'
    },
    {
      category: 'sauces',
      title: 'Shama Ginger Paste',
      pack: '750g x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051004/ginger750g.png'
    },
    {
      category: 'sauces',
      title: 'Shama Garlic Paste',
      pack: '750g x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051002/garlic_750g.png'
    },
    {
      category: 'sauces',
      title: 'Shama Ginger & Garlic Paste',
      pack: '750g x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051002/shama_ginger_garlic_750g.png'
    },
    {
      category: 'sauces',
      title: 'Sunrise Ginger & Garlic Paste',
      pack: '750g x 1',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051002/sunrise_ginger_garlic_paste_750g_765x820.png'
    }
  ];

  if (typeof productData !== 'undefined' && Array.isArray(productData)) {
    const nonPasteProducts = productData.filter((item) => item.category !== 'sauces');
    productData.splice(0, productData.length, ...nonPasteProducts, ...pasteProducts20260910);
  }
})();
