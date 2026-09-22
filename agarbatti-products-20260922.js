(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    ['Metro 3 in 1 Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069154/Metro_3_in_1.png'],
    ['Metro 2 in 1 Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069155/Metro_2_in_1.png'],
    ['Metro Amber Orange Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069155/Metro_amber_orang_agarbatti.png'],
    ['Pure Lily Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069155/Pure_lilly_agarbatti.png'],
    ['Metro Hexa Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069155/Metro_hexa_agarbatti.png'],
    ['Metro Amber XXL Agarbatti','XXL · Contact us for case quantity','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069158/Metro_amber_xxl_agarbatti.png'],
    ["Metro Dragon's Blood Agarbatti",'Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069193/Metro_dragon_s_blood_agarbatti.png'],
    ['Metro Cinnamon Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069193/Metro_cinnamon_agarbatti.png'],
    ['Metro Bakhoor Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069193/Metro_bakhoor_agarbatti.png'],
    ['Metro Classic Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069193/Metro_classic_agarbatti.png'],
    ['Metromilan Kewra Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069194/Metromilan_kewra_agarbatti.png'],
    ['Metromilan Jasmine Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069194/Metromilan_jasmine_agarbatti.png'],
    ['Metromilan Champa Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069194/Metromilan_champa_agarbatti.png'],
    ['Metromilan Amber Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069194/Metromilan_amber_agarbatti.png'],
    ['Metromilan Lavender Agarbatti XXL','XXL · Contact us for case quantity','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069210/Metromilan_lavender_agarbatti_XXL.png'],
    ['Metromilan Red Rose Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069210/Metromilan_Redrose_agarbatti.png'],
    ['Metromilan Sandalwood Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069211/Metromilan_sandalwood_agarbatti.png'],
    ['Metromilan Lavender Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069211/Metromilan_lavender_agarbatti.png'],
    ['Metromilan Lily Agarbatti','Contact us for available pack sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069211/Metromilan_lily_agarbatti.png']
  ].map(([title,pack,image])=>({category:'agarbatti',title,pack,image}));

  productData.push(...items);
  if (!categories.some(x=>x.slug==='agarbatti')) categories.push({
    slug:'agarbatti', name:'Agarbatti', desc:'Incense sticks and traditional fragrances',
    image:items[0].image
  });
})();