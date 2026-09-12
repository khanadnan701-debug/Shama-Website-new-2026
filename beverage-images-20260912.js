(() => {
  'use strict';

  if (typeof productData === 'undefined') return;

  const imageByTitle = {
    'Shama Coconut Milk Drink with Mango': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231966/Shama_coco_milk_drink_mango_240ml.png',
    'Shama Coconut Milk Drink Original': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231966/Shama_coco_milk_drink_original_240ml.png',
    'Shama Coconut Water': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231968/Shama_Coconut_Water.png',
    'Shama Falooda Mango': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231968/Shama_mango_falooda_20ml.png',
    'Shama Falooda Rose': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231968/Shama_falooda_rose_290ml.png',
    'Shama Falooda Strawberry': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231969/Shama_falooda_strawberry_290ml.png',
    'Shama Falooda Banana': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231969/Shama_banana_falooda_20ml.png',
    'Shama Falooda Almond': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231967/Shama_Falooda_Almond.png',
    'Shama Falooda Vanilla': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231968/Shama_Falooda_Vanilla.png',
    'Shama Falooda Chocolate': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231966/Shama_Falooda_Chocolate.png',
    'Shama Almond Drink': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231969/Shama_Almond_Drink.png',
    'Sunrise Almond Drink': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231969/Sunrise_Almond_Drink.png',
    'Shama Basil Seed Drink Cocktail': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231969/Shama_Basil_Seed_Drink_Cocktail.png',
    'Shama Basil Seed Drink Pomegranate': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231972/Shama_Basil_Seed_Drink_Pomegranate.png',
    'Shama Basil Seed Drink Pineapple': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231971/Shama_Basil_Seed_Drink_Pineapple.png',
    'Shama Basil Seed Drink Watermelon': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231973/Shama_Basil_Seed_Drink_Watermelon.png',
    'Shama Basil Seed Drink Mango': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231971/Shama_Basil_Seed_Drink_Mango.png',
    'Shama Basil Seed Drink Passion': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231971/Shama_Basil_Seed_Drink_Passion.png',
    'Shama Basil Seed Drink Lychee': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231971/Shama_Basil_Seed_Drink_Lychee.png',
    'Shama Basil Seed Drink Strawberry': 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789231972/Shama_Basil_Seed_Drink_Strawberry.png'
  };

  for (let index = productData.length - 1; index >= 0; index -= 1) {
    const item = productData[index];
    if (
      item.category === 'beverages' &&
      /^Sunrise\s/i.test(item.title || '') &&
      /\b2\s*ltr\b/i.test(item.pack || '')
    ) {
      productData.splice(index, 1);
    }
  }

  productData.forEach(item => {
    if (item.category !== 'beverages') return;
    const newImage = imageByTitle[item.title];
    if (newImage) item.image = newImage;
  });
})();
