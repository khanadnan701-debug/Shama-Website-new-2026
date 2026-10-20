(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    ['Shama Ajwa Dates','800g / 400g','/assets/cloudinary-shama/dates/shama-ajwa-dates-800g-734a417a7b85.webp'],
    ['Shama Sagai Dates','800g / 400g','/assets/cloudinary-shama/dates/shama-sagai-dates-800g-8ef529bc35d1.webp'],
    ['Shama Khudri Dates','800g / 400g','/assets/cloudinary-shama/dates/shama-khudri-dates-800g-2d98445d8d49.webp'],
    ['Shama Safawi Dates','800g / 400g','/assets/cloudinary-shama/dates/shama-safawi-dates-800g-41ca20a5d657.webp'],
    ['Shama Khudri Dates (New Pack)','800g / 400g','/assets/cloudinary-shama/dates/shama-khudri-new-dates-800g-165017aba30a.webp'],
    ['Shama Ajwa Dates (New Pack)','800g / 400g','/assets/cloudinary-shama/dates/shama-ajwa-new-dates-800g-4534f3e296aa.webp'],
    ['Shama Sukkari Dates','800g / 400g','/assets/cloudinary-shama/dates/shama-sukkari-dates-800g-9b8641bad644.webp'],
    ['Shama Sukkari Dates (Pack 2)','800g / 400g','/assets/cloudinary-shama/dates/shama-sukkari-dates-800g-e6bc639f53a3.webp'],
    ['Shama Anber Dates','800g / 400g','/assets/cloudinary-shama/dates/shama-anber-dates-800g-583327241983.webp']
  ].map(([title,pack,image])=>({category:'dates',title,pack,image}));

  productData.push(...items);
  if (!categories.some(x=>x.slug==='dates')) categories.push({
    slug:'dates', name:'Dates', desc:'Premium date varieties selected for retail and gifting',
    image:items[0].image
  });
})();