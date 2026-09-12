(() => {
  'use strict';

  if (typeof productData === 'undefined') return;

  const dryFruitImages = {
    'Shama Raw Almond': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raw_almonds_100gm.png',
    'Shama Raisin Golden Iran': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232080/Shama_golden_raisin_100g.png',
    'Shama Coconut Powder': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232079/Shama_coconut_powder_400gm.png',
    'Shama Pistachio Husked': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232082/Shama_pistatio_husked_100g.png',
    'Shama Broken Cashew': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232079/Shama_broken_cajou_800gm.png',
    'Shama Whole Cashews': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232083/Shama_Raw_cashews_100gm.png'
  };

  for (let index = productData.length - 1; index >= 0; index -= 1) {
    const item = productData[index];
    if (item.category === 'dry-fruits' && !dryFruitImages[item.title]) {
      productData.splice(index, 1);
    }
  }

  productData.forEach(item => {
    if (item.category !== 'dry-fruits') return;
    const image = dryFruitImages[item.title];
    if (image) item.image = image;
  });
})();
