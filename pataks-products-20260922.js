(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    ["Patak's Biryani Paste",'2.3kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_biryani_paste_2.3kg.png'],
    ["Patak's Butter Chicken Paste",'2.3kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069236/Patak_butter_chicken_paste_2.3_kg.png'],
    ["Patak's Balti Curry Paste",'2.3kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069255/Patak_balty_curry_paste_2.3kg.png'],
    ["Patak's Tikka Masala Paste",'283g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069256/patak_s_tikka_masala_paste_283g.png'],
    ["Patak's Madras Kebab Paste",'2.4kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_madras_kebab_paste_2.4kg.png'],
    ["Patak's Korma Paste",'2.3kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_korma_paste_2.3kg.png'],
    ["Patak's Kashmiri Masala Paste",'2.2kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069257/Patak_kashmiri_masala_paste_2.2_kg.png'],
    ["Patak's Mild Curry Paste",'2.3kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069258/Patak_mild_curry_paste_2.3kg.png'],
    ["Patak's Tikka Paste",'2.4kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069259/Patak_tikka_paste_2.4kg.png'],
    ["Patak's Tandoori Paste",'2.5kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069260/patak_s_tandoori_paste_2.5kg.png'],
    ["Patak's Mango Pickle Hot",'250g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790272188/Patak_s_Mango_Pickle_Hot_250g.png'],
    ["Patak's Mix Pickle",'2.3kg x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790272190/Patak_s_Mix_Pickle_2_3kg.png']
  ].map(([title,pack,image])=>({category:'pataks',title,pack,image}));

  productData.push(...items);
  if (!categories.some(x=>x.slug==='pataks')) categories.push({
    slug:'pataks', name:"Pataks", desc:"Patak's curry pastes and classic cooking sauces",
    image:items[0].image
  });
})();