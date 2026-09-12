(() => {
  'use strict';

  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const dryFruitProducts = [
    {
      category: 'dry-fruits',
      title: 'Shama Coconut Powder',
      pack: '400g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232079/Shama_coconut_powder_400gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Roasted Gram & Makhana',
      pack: '200g Jar',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232079/Shama_roasted_gram_and_makhana_200g_jar.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Broken Cashew',
      pack: '800g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232079/Shama_broken_cajou_800gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232080/Shama_golden_raisin_100g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '200g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232081/Shama_golden_raisin_200g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Almonds',
      pack: '800g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232081/Shama_Raw_almonds_800gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '500g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232081/Shama_golden_raisin_500g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Roasted Chana',
      pack: '600g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232081/Shama_roasted_chana_600gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Pistachio Husked',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232082/Shama_pistatio_husked_100g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Cashews',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232083/Shama_Raw_cashews_100gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Pistachio Roasted & Salted',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232083/Shama_pistatio_roasted_salted_100g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raisin Munakka',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232083/Shama_raisin_munakka_100g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Desiccated Coconut',
      pack: '1kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_desicated_coconut_1kg.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Almonds',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raw_almonds_100gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Green Raisins',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raisin_green_100gm.png'
    }
  ];

  const otherProducts = productData.filter(item => item.category !== 'dry-fruits');
  productData.splice(0, productData.length, ...otherProducts, ...dryFruitProducts);
})();
