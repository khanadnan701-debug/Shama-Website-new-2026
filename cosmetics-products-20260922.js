(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    // SHAMA — keep first
    ['Shama','Shama Rose Water','250ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Rose_Water_250ml.png'],
    ['Shama','Shama Sesame Oil','290ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465760/Shama_sesame_oil_290ml.png'],
    ['Shama','Shama Castor Oil','290ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465761/Shama_castor_oil_290ml.png'],
    ['Shama','Shama Mustard Oil','290ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1789465761/Shama_mustard_oil_290ml.png'],
    ['Shama','Shama Black Seed Oil','290ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076485/Shama_black_seed_oil_290ml.png'],
    ['Shama','Shama Black Seed Oil','100ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076488/Shama_black_seed_oil_100ml.png'],
    ['Shama','Shama Pure Coconut Oil','500ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076490/Shama_coconut_oil_pure_500ml.png'],
    ['Shama','Shama Pure Coconut Oil','250ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076491/Shama_coconut_oil_pure_250ml.png'],

    // DETTOL
    ['Dettol','Dettol Soap','150g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076452/Dettol_Soap_150g.png'],
    ['Dettol','Dettol Antiseptic Liquid','250ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076453/Dettol_Antiseptic_Liquid_250ml.png'],
    ['Dettol','Dettol Antiseptic Liquid','500ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076455/Dettol_Antiseptic_Liquid_500ml.png'],
    ['Dettol','Dettol Original Soap','100g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076456/Dettol_Soap_Original_100g.png'],
    ['Dettol','Dettol Antiseptic Liquid','1L','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076457/Dettol_Antiseptic_Liquid_1L.png'],
    ['Dettol','Dettol Antiseptic Liquid','750ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076460/Dettol_Antiseptic_Liquid_750ml.png'],
    ['Dettol','Dettol Antiseptic Liquid','125ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076465/Dettol_Liquid_125ml.png'],
    ['Dettol','Dettol Sensitive Soap Mega Pack','6 x 100g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076478/Dettol_Soap_Sensitive_6x100g.png'],

    // JOHNSON'S BABY
    ["Johnson's Baby","Johnson's Baby Powder",'100g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076458/Johnson_s_Baby_Powder_100g.png'],
    ["Johnson's Baby","Johnson's Baby Powder",'500g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076461/Johnsons_Baby_Powder_500_gm.png'],
    ["Johnson's Baby","Johnson's Baby Lotion",'300ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076464/Johnson_s_Baby_Lotion_300ml.png'],
    ["Johnson's Baby","Johnson's Baby Oil",'300ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076466/Johnson_s_Baby_Oil_300ml.png'],
    ["Johnson's Baby","Johnson's Baby Powder",'200g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076468/Johnson_s_Baby_Powder_200g.png'],
    ["Johnson's Baby","Johnson's Baby Powder",'400g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076469/Johnson_s_Baby_Powder_400g.png'],
    ["Johnson's Baby","Johnson's Baby Oil",'500ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076470/Johnson_s_Baby_Oil_500ml.png'],
    ["Johnson's Baby","Johnson's Baby Oil",'100ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076472/Johnson_Baby_oil_100ml.png'],
    ["Johnson's Baby","Johnson's Baby Oil",'200ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076473/Johnson_s_Baby_Oil_200ml.png'],
    ["Johnson's Baby","Johnson's Baby Lotion",'500ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076476/Johnsons_Baby_Lotion_500ml.png'],

    // DOVE
    ['Dove','Dove Soap','100g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076450/Dove_Soap_100g.png'],
    ['Dove','Dove Soap','125g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076451/Dove_Soap_125g.png'],
    ['Dove','Dove Soap Multipack','3 x 75g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076452/Dove_Soap_3x75g.png'],

    // LUX
    ['Lux','Lux Advanced Soap','100g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076480/Lux_Soap_100g_ADVANCED.png'],
    ['Lux','Lux Rose Soap','100g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076481/Lux_Soap_100g_Rose.png'],
    ['Lux','Lux White Soap','100g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076483/Lux_Soap_100g_White.png'],
    ['Lux','Lux Creamy Soap Mega Pack','125g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076484/LUX_Soap_Creamy_125g_Mega_Pack.png'],
    ['Lux','Lux Sandal Soap','100g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076492/Lux_Soap_100g_Sandle.png'],

    // VASELINE
    ['Vaseline','Vaseline Pure Petroleum Jelly','50ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076498/Vaseline_Pure_Petroleum_Jelly_50ml.png'],
    ['Vaseline','Vaseline Pure Petroleum Jelly','100ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076499/Vaseline_Pure_Petroleum_Jelly_100ml.png'],
    ['Vaseline','Vaseline Pure Petroleum Jelly','250ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076501/Vaseline_Pure_Petroleum_Jelly_250ml.png'],

    // DABUR
    ['Dabur','Dabur Amla Oil','138ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076462/Dabur_Amla_Oil_138ml.png'],
    ['Dabur','Dabur Amla Hair Oil','325ml','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076474/Dabur_Amla_Hair_Oil_325ml.png'],

    // SUPREME HENNA
    ['Supreme Henna','Supreme Dulhan Henna Natural Green','200g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076502/supreme_dulhan_henna_natural_green_200g.png'],
    ['Supreme Henna','Supreme Henna Natural Brown','150g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076503/Supreme_Henna_Natural_BROWN_150gm.png'],
    ['Supreme Henna','Supreme Henna Natural Red','150g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076504/supreme_henna_natural_red_150g.png'],

    // LIFEBUOY
    ['Lifebuoy','Lifebuoy Soap','125g','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790076477/Lifebuoy_soap_125g.png']
  ].map(([brand,title,pack,image]) => ({ category:'cosmetics', brand, title, pack, image }));

  productData.push(...items);

  if (!categories.some(x => x.slug === 'cosmetics')) {
    categories.push({
      slug:'cosmetics',
      name:'Cosmetics',
      desc:'Beauty, personal care and hygiene essentials',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789464147/Shama_Rose_Water_250ml.png'
    });
  }
})();