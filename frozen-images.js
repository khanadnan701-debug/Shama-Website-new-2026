// Frozen catalogue synced to the current Cloudinary folder: shama/Frozen.
(() => {
  'use strict';
  if (document.body.dataset.category !== 'frozen') return;
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const items = [
    // SAMOSA
    ['Shama','Shama Vegetable Samosa','20 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625184/Shama_Vegetable_Samosa_20_pcs.png'],
    ['Shama','Shama Vegetable Samosa','50 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625151/Shama_vegetable_Samosa_50_Pcs.png'],
    ['Shama','Shama Punjabi Potato Samosa','12 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625164/Shama_Punjabi_potato_samosa_12_Pcs.png'],
    ['Shama','Shama Lamb Meat Samosa','20 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625173/Shama_Lamb_Meat_Samosa_20pcs.png.png'],
    ['Shama','Shama Lamb Meat Samosa','50 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625184/Shama_Lamb_Meat_Samosa_50_Pcs.png'],
    ['Shama','Shama Chicken Samosa','50 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625178/Shama_Chicken_Samosa_50_pcs.png'],
    ['Shama','Shama Chicken Tikka Samosa','20 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625180/Shama_Chicken_tikka_Samosa_20Pcs.png'],
    ['Shama','Shama Punjabi Style Cocktail Samosa','3 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625179/Shama_Cocktail_Samosa_3_Pcs.png'],

    // KEBABS
    ['Shama','Shama Lahori Chicken Kebab','15 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625181/shama_lahori_chicken_kebab_15_Pcs.png'],
    ['Shama','Shama Mutton Lahori Kebab','15 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625183/15_Mutton_Lahori_Kebab_15_Pcs.png'],

    // SPRING ROLLS
    ['Shama','Shama Vegetable Spring Rolls','20 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625163/Shama_vegetable_spring_rolls_20_pcs.png'],
    ['Shama','Shama Vegetable Spring Rolls','50 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625164/Shama_vegetable_spring_rolls_50_Pcs.png'],
    ['Shama','Shama Chicken Spring Rolls','20 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625181/Shama_chicken_Spring_Rolls_20_Pcs.png'],
    ['Shama','Shama Chicken Spring Rolls','50 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625182/Shama_Chicken_Spring_Rolls_50_Pcs.png'],
    ['Shama','Shama Lamb Meat Spring Rolls','20 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625172/Shama_Lamb_Meat_Spring_Rolls_20_Pcs.png'],
    ['Shama','Shama Lamb Meat Spring Rolls','50 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625151/Shama_lamb_Meat_Spring_Rolls_50_Pcs.png'],

    // PARATHA
    ['Shama','Shama Crispy Paratha','Frozen · Contact us for case quantity','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789463984/Shama_Crispy_Paratha.png'],
    ['Shama','Shama Plain Paratha','30 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625165/Shama_Plain_partha_30_Pcs.png.png'],
    ['Shama','Shama Crispy Plain Paratha','20 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625166/Shama_crispy_plain_paratha_20_Pcs.png'],
    ['Mazedaar','Mazedaar Paratha','5 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625174/Mazedaar_Paratha_5_pcs.png'],
    ['Mazedaar','Mazedaar Onion Paratha','5 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625175/Mazedaar_Onion_Paratha_5pcs.png'],
    ['Mazedaar','Mazedaar Plain Paratha','20 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625175/Mazedaar_Plain_Paratha_20_pcs.png.png'],
    ['Mazedaar','Mazedaar Plain Paratha','5 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625176/Mazedaar_Plain_Paratha_5_pcs.png'],
    ['Mazedaar','Mazedaar Onion Paratha','3 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625177/Mazedaar_onion_paratha_3_pcs.png'],
    ['Mazedaar','Mazedaar Vegetable Paratha','3 pcs','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625178/Mazedaar_Vegetable_Paratha_3_pcs.png.png'],

    // VEGETABLES & FRUIT
    ['Shama','Shama Cut Okra','400g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625169/Shama_Cut_Okra_400gms.png.png'],
    ['Shama','Shama Green Chilli','400g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625171/Shama_green_chilli_400_Gms.png.png'],
    ['Shama','Shama Karela','400g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625173/Shama_karela_400Gms.png.png'],
    ['Shama','Shama Falsa','454g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625170/Shama_falsa_454Gms.png.png']
  ].map(([brand,title,pack,image]) => ({
    category:'frozen',
    brand,
    title,
    pack,
    image
  }));

  // Remove all legacy/demo Frozen entries so only the current 30 folder assets are shown.
  for (let i = productData.length - 1; i >= 0; i--) {
    if (productData[i]?.category === 'frozen') productData.splice(i, 1);
  }
  productData.push(...items);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(item => item.slug === 'frozen');
    if (category) {
      category.name = 'Frozen';
      category.desc = 'Samosa, kebabs, spring rolls, paratha, vegetables and fruit';
      category.image = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790625180/Shama_Chicken_tikka_Samosa_20Pcs.png';
    }
  }
})();