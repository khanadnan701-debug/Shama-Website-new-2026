(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    // SHAMA — keep first
    ['Shama','Shama Rose Water','4571B - 450ml / 2349C - 250ml / 19137 - 200ml / 4664A - 190ml','/assets/cloudinary-shama/cosmetics/shama-rose-water-250ml-9fc6b2e6e236.webp'],
    ['Shama','Shama Sesame Oil','2721C - 290ml','/assets/cloudinary-shama/cosmetics/shama-sesame-oil-290ml-a213a66001f2.webp'],
    ['Shama','Shama Castor Oil','2578 - 290ml','/assets/cloudinary-shama/cosmetics/shama-castor-oil-290ml-dea2c9cbf15d.webp'],
    ['Shama','Shama Mustard Oil','19100 - 290ml / 6606A - 200ml','/assets/cloudinary-shama/cosmetics/shama-mustard-oil-290ml-2389afdd5597.webp'],
    ['Shama','Shama Mustard Oil','2691C - 500ml','/assets/cloudinary-shama/cosmetics/shama-mustard-oil-500ml-78d0a4ef381a.webp'],
    ['Shama','Shama Almond Oil','0611A - 250ml','/assets/cloudinary-shama/cosmetics/shama-almond-oil-250ml-714061551cae.webp'],
    ['Shama','Shama Amla Hair Oil','6286 - 150ml','/assets/cloudinary-shama/cosmetics/shama-amla-hair-oil-150ml-d32506f6d934.webp'],
    ['Shama','Shama Black Seed Oil','1397 - 290ml','/assets/cloudinary-shama/cosmetics/shama-black-seed-oil-290ml-8552a10dd9c4.webp'],
    ['Shama','Shama Black Seed Oil','1502C - 100ml','/assets/cloudinary-shama/cosmetics/shama-black-seed-oil-100ml-9ec71751a403.webp'],
    ['Shama','Shama Pure Coconut Oil','5166A - 500ml','/assets/cloudinary-shama/cosmetics/shama-coconut-oil-pure-500ml-4aae03608115.webp'],
    ['Shama','Shama Pure Coconut Oil','2509A - 250ml','/assets/cloudinary-shama/cosmetics/shama-coconut-oil-pure-250ml-23c423bed98d.webp'],

    // DETTOL
    ['Dettol','Dettol Soap','4876A - 150g','/assets/cloudinary-shama/cosmetics/dettol-soap-150g-4e12989be251.webp'],
    ['Dettol','Dettol Antiseptic Liquid','8072A - 250ml','/assets/cloudinary-shama/cosmetics/dettol-antiseptic-liquid-250ml-1add0614fd4a.webp'],
    ['Dettol','Dettol Antiseptic Liquid','8089A - 500ml','/assets/cloudinary-shama/cosmetics/dettol-antiseptic-liquid-500ml-0b6bda0b6cc3.webp'],
    ['Dettol','Dettol Original Soap','7625A - 100g','/assets/cloudinary-shama/cosmetics/dettol-soap-original-100g-6b931ee5723c.webp'],
    ['Dettol','Dettol Antiseptic Liquid','9702A - 1L','/assets/cloudinary-shama/cosmetics/dettol-antiseptic-liquid-1l-e3fe62eb930b.webp'],
    ['Dettol','Dettol Antiseptic Liquid','8225A - 750ml','/assets/cloudinary-shama/cosmetics/dettol-antiseptic-liquid-750ml-d755c56bd71f.webp'],
    ['Dettol','Dettol Antiseptic Liquid','8073A - 125ml','/assets/cloudinary-shama/cosmetics/dettol-liquid-125ml-d1f616387d30.webp'],
    ['Dettol','Dettol Sensitive Soap Mega Pack','3896B - 6 x 100g','/assets/cloudinary-shama/cosmetics/dettol-sensitive-soap-mega-pack-6x100g-db41a57741c9.webp'],

    // JOHNSON'S BABY
    ["Johnson's Baby","Johnson's Baby Powder",'5415A - 100g','/assets/cloudinary-shama/cosmetics/johnson-s-baby-powder-100g-84e3bdcbd6b0.webp'],
    ["Johnson's Baby","Johnson's Baby Powder",'7682A - 500g','/assets/cloudinary-shama/cosmetics/johnsons-baby-powder-500-gm-13303cb9aba2.webp'],
    ["Johnson's Baby","Johnson's Baby Lotion",'3164A - 300ml','/assets/cloudinary-shama/cosmetics/johnson-s-baby-lotion-300ml-dedd3d969e6d.webp'],
    ["Johnson's Baby","Johnson's Baby Oil",'8083B - 300ml','/assets/cloudinary-shama/cosmetics/johnson-s-baby-oil-300ml-76180a6e6007.webp'],
    ["Johnson's Baby","Johnson's Baby Powder",'6757A - 200g','/assets/cloudinary-shama/cosmetics/johnson-s-baby-powder-200g-31a8dc642802.webp'],
    ["Johnson's Baby","Johnson's Baby Powder",'8216A - 400g','/assets/cloudinary-shama/cosmetics/johnson-s-baby-powder-400g-654c53ebc60b.webp'],
    ["Johnson's Baby","Johnson's Baby Oil",'9763A - 500ml','/assets/cloudinary-shama/cosmetics/johnson-s-baby-oil-500ml-0bc0356bc362.webp'],
    ["Johnson's Baby","Johnson's Baby Oil",'18985 - 100ml','/assets/cloudinary-shama/cosmetics/johnson-baby-oil-100ml-ec1d21c787fb.webp'],
    ["Johnson's Baby","Johnson's Baby Oil",'3522B - 200ml','/assets/cloudinary-shama/cosmetics/johnson-s-baby-oil-200ml-96548335b7a7.webp'],
    ["Johnson's Baby","Johnson's Baby Lotion",'0951A - 500ml','/assets/cloudinary-shama/cosmetics/johnsons-baby-lotion-500ml-fa479c30ec19.webp'],

    // DOVE
    ['Dove','Dove Soap','19055 - 100g','/assets/cloudinary-shama/cosmetics/dove-soap-100g-f794b978b1b9.webp'],
    ['Dove','Dove Soap','3960 - 125g','/assets/cloudinary-shama/cosmetics/dove-soap-125g-33e15dd0fb90.webp'],
    ['Dove','Dove Soap Multipack','8552A - 3 x 75g','/assets/cloudinary-shama/cosmetics/dove-soap-3x75g-175551cc7801.webp'],

    // LUX
    ['Lux','Lux Advanced Soap','6463A - 100g','/assets/cloudinary-shama/cosmetics/lux-soap-100g-advanced-e458ea763ac9.webp'],
    ['Lux','Lux Rose Soap','19102 - 100g','/assets/cloudinary-shama/cosmetics/lux-rose-loap-100g-77a4a9af67c1.webp'],
    ['Lux','Lux White Soap','19103 - 100g','/assets/cloudinary-shama/cosmetics/lux-white-loap-100g-efd816949a48.webp'],
    ['Lux','Lux Creamy Soap Mega Pack','19056 - 125g','/assets/cloudinary-shama/cosmetics/lux-soap-creamy-125g-mega-pack-a49c587eb9bd.webp'],
    ['Lux','Lux Sandal Soap','19104 - 100g','/assets/cloudinary-shama/cosmetics/lux-sandal-loap-100g-ffa1eee98229.webp'],

    // VASELINE
    ['Vaseline','Vaseline Pure Petroleum Jelly','2627A - 50ml','/assets/cloudinary-shama/cosmetics/vaseline-pure-petroleum-jelly-50ml-05d95ba4a210.webp'],
    ['Vaseline','Vaseline Pure Petroleum Jelly','2634A - 100ml','/assets/cloudinary-shama/cosmetics/vaseline-pure-petroleum-jelly-100ml-59dccb5328aa.webp'],
    ['Vaseline','Vaseline Pure Petroleum Jelly','2658A - 250ml','/assets/cloudinary-shama/cosmetics/vaseline-pure-petroleum-jelly-250ml-7a0796892e41.webp'],

    // DABUR
    ['Dabur','Dabur Amla Oil','18949 - 138ml','/assets/cloudinary-shama/cosmetics/dabur-amla-oil-138ml-6f282af95caa.webp'],
    ['Dabur','Dabur Amla Hair Oil','1363A - 325ml','/assets/cloudinary-shama/cosmetics/dabur-amla-hair-oil-325ml-493573af6c0a.webp'],

    // SUPREME HENNA
    ['Supreme Henna','Supreme Dulhan Henna Natural Green','0210A - 200g','/assets/cloudinary-shama/cosmetics/supreme-dulhan-henna-natural-green-200g-8318d1c88741.webp'],
    ['Supreme Henna','Supreme Henna Natural Brown','0814D - 150g','/assets/cloudinary-shama/cosmetics/supreme-henna-natural-brown-150gm-5d4803fe9919.webp'],
    ['Supreme Henna','Supreme Henna Natural Red','0814C - 150g','/assets/cloudinary-shama/cosmetics/supreme-henna-natural-red-150g-114c7436cfe6.webp'],

    // LIFEBUOY
    ['Lifebuoy','Lifebuoy Soap','4825 - 125g','/assets/cloudinary-shama/cosmetics/lifebuoy-soap-125g-849798bfa68e.webp']
  ].map(([brand,title,pack,image]) => ({ category:'cosmetics', brand, title, pack, image }));

  productData.push(...items);

  if (!categories.some(x => x.slug === 'cosmetics')) {
    categories.push({
      slug:'cosmetics',
      name:'Cosmetics',
      desc:'Beauty, personal care and hygiene essentials',
      image:'/assets/cloudinary-shama/cosmetics/johnson-s-baby-oil-200ml-96548335b7a7.webp'
    });
  }
})();