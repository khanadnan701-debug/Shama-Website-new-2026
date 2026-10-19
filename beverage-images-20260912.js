(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  // Restored from 2026-10-19 Beverages photo pack. All images are served by Shama.
  const imageByTitle = {
  "Shama Coconut Milk Drink with Mango": "/assets/beverages/shama-coco-milk-drink-mango-240ml.webp",
  "Shama Coconut Milk Drink Original": "/assets/beverages/shama-coco-milk-drink-original-240ml.webp",
  "Shama Coconut Water": "/assets/beverages/shama-coconut-water.webp",
  "Shama Falooda Mango": "/assets/beverages/shama-mango-falooda-20ml.webp",
  "Shama Falooda Rose": "/assets/beverages/shama-falooda-rose-290ml.webp",
  "Shama Falooda Strawberry": "/assets/beverages/shama-falooda-strawberry-290ml.webp",
  "Shama Falooda Banana": "/assets/beverages/shama-banana-falooda-20ml.webp",
  "Shama Falooda Almond": "/assets/beverages/shama-falooda-almond.webp",
  "Shama Falooda Vanilla": "/assets/beverages/shama-falooda-vanilla.webp",
  "Shama Falooda Chocolate": "/assets/beverages/shama-falooda-chocolate.webp",
  "Shama Falooda Pista": "/assets/beverages/shama-falooda-pista.webp",
  "Shama Falooda Rabri": "/assets/beverages/shama-falooda-rabri.webp",
  "Shama Almond Drink": "/assets/beverages/shama-almond-drink.webp",
  "Sunrise Almond Drink": "/assets/beverages/sunrise-almond-drink.webp",
  "Shama Basil Seed Drink Cocktail": "/assets/beverages/shama-basil-seed-drink-cocktail.webp",
  "Shama Basil Seed Drink Pomegranate": "/assets/beverages/shama-basil-seed-drink-pomegranate.webp",
  "Shama Basil Seed Drink Pineapple": "/assets/beverages/shama-basil-seed-drink-pineapple.webp",
  "Shama Basil Seed Drink Mango": "/assets/beverages/shama-basil-seed-drink-mango.webp",
  "Shama Basil Seed Drink Watermelon": "/assets/beverages/shama-basil-seed-drink-watermelon.webp",
  "Shama Basil Seed Drink Passion": "/assets/beverages/shama-basil-seed-drink-passion.webp",
  "Shama Basil Seed Drink Lychee": "/assets/beverages/shama-basil-seed-drink-lychee.webp",
  "Shama Basil Seed Drink Strawberry": "/assets/beverages/shama-basil-seed-drink-strawberry.webp",
  "Shama Basil Seed Drink Melon": "/assets/beverages/shama-basil-seed-drink-melon.webp",
  "Shama Basil Seed Drink Lemon": "/assets/beverages/shama-basil-seed-drink-lemon.webp"
};
  const hiddenTitles = new Set([
    'Sunrise Guava Fruit Drink',
    'Sunrise Lychee Fruit Drink',
    'Sunrise Mango Fruit Drink',
    'Sunrise Mix Fruit Drink'
  ]);
  for (let i=productData.length-1; i>=0; i--) {
    const item=productData[i];
    if (item.category==='beverages' && hiddenTitles.has(item.title)) productData.splice(i,1);
  }
  const restoredProducts = [
    {category:'beverages',title:'Shama Coconut Water',pack:'1304A - 290ml x 24'},
    {category:'beverages',title:'Shama Falooda Chocolate',pack:'3467A - 290ml x 24'},
    {category:'beverages',title:'Shama Almond Drink',pack:'4893A - 1000ml x 10'},
    {category:'beverages',title:'Sunrise Almond Drink',pack:'Contact us for available pack sizes'}
  ];
  for (const item of restoredProducts) {
    if (!productData.some(p=>p.category===item.category && p.title===item.title)) {
      const first=productData.findIndex(p=>p.category==='beverages');
      productData.splice(first<0?productData.length:first,0,{...item,image:imageByTitle[item.title]});
    }
  }
  productData.forEach(item=>{
    if (item.category!=='beverages') return;
    if (imageByTitle[item.title]) item.image=imageByTitle[item.title];
  });
  if (typeof categories!=='undefined' && Array.isArray(categories)) {
    const category=categories.find(x=>x.slug==='beverages');
    if(category) category.image=imageByTitle['Shama Coconut Milk Drink with Mango'];
  }
})();
