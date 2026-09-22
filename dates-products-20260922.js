(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    ['Shama Ajwa Dates','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069276/Shama_Ajwa-Dates-800g.png'],
    ['Shama Sagai Dates','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069300/Shama_Sagai_Dates-800g.png'],
    ['Shama Khudri Dates','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069307/Shama_khudri-Dates-800g.png'],
    ['Shama Safawi Dates','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069311/Shama_Safawi_Dates-800g.png'],
    ['Shama Khudri Dates (New Pack)','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069311/Shama_Khudri_new_Dates-800g.png'],
    ['Shama Ajwa Dates (New Pack)','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069312/Shama_Ajwa_new_Dates-800g.png'],
    ['Shama Sukkari Dates','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069313/Shama_sukkari-Dates-800g.png'],
    ['Shama Sukkari Dates (Pack 2)','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069313/Shama_Sukkari_Dates-800g.png'],
    ['Shama Anber Dates','800g x 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069315/Shama_Anber-Dates-800g.png']
  ].map(([title,pack,image])=>({category:'dates',title,pack,image}));

  productData.push(...items);
  if (!categories.some(x=>x.slug==='dates')) categories.push({
    slug:'dates', name:'Dates', desc:'Premium date varieties selected for retail and gifting',
    image:items[0].image
  });
})();