(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
  {
    "category": "savoury-snacks",
    "title": "Shama Roasted Corn Salted",
    "pack": "400g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601081/Shama_Roasted_Corn_Salted_400G.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Thick Sev",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601081/Bikaneri_Bites_Thick_Sev_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Kaju Mixture",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601082/Bikaneri_Bites_Kaju_Mixture_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Bombay Mixture",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601082/Bikaneri_Bites_Bombay_Mixture_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Gujarati Mixture",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601083/Bikaneri_Bites_Gujrati_Mixture_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Punjabi Pakora",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601086/Bikaneri_Bites_Punjabi_Pakora_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Chana Dal Mixture",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601086/Bikaneri_Bites_Chana_Dal_Mixture_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Khatta Meetha",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601086/Bikaneri_Bites_Khatta_Meetha_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Moong Dal",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601087/Bikaneri_Bites_Moong_Dal_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Aloo Bhujia",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601087/Bikaneri_Bites_Aloo_Bhujia_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites All In One",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601089/Bikaneri_Bites_All_In_One_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Boondi",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601089/Bikaneri_Bites_Boondi_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Navratan",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601092/Bikaneri_Bites_Navratan_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Badam Lacha",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601092/Bikaneri_Bites_Badam_Lacha_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Tasty Peanuts",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601092/Bikaneri_Bites_Tasty_Peanuts_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Bikaneri Bhujia",
    "pack": "150g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601092/Bikaneri_Bites_Bikaneri_Bhujia_150g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Phool Makhana",
    "pack": "100g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601093/Shama_Phool_Makhana_100g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's Hot N Sweet",
    "pack": "50g x 135",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601094/Lays_Hot_N_Sweet_50gX135.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Savoury Snack Selection",
    "pack": "Contact us for available pack sizes",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601095/Gemini_Generated_Image_xn8ep1xn8ep1xn8e.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Bombay Mixture",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601096/Bikaneri_Bites_Bombay_Mixture_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Traditional Mixture",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601096/Bikaneri_Bites_Traditional_Mixture_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites All In One",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601097/Bikaneri_Bites_All_In_One_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Khatta Meetha",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601102/Bikaneri_Bites_Khatta_Meetha_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Moong Dal",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601102/Bikaneri_Bites_Moong_Dal_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Punjabi Wadi",
    "pack": "400g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601102/Shama_punjabi_wadi_400g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Gujarati Mixture",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601104/Bikaneri_Bites_Gujrati_Mixture_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Chaat Papdi",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601104/Shama_Chaat_Papdi_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Chana Dal Mixture",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601135/Bikaneri_Bites_Chana_Dal_Mixture_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites London Mixture",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601141/Bikaneri_Bites_London_Mixture_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Punjabi Mixture",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601144/Bikaneri_Bites_Punjabi_Mixture_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Naughty Tomato",
    "pack": "68g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601150/KURKURE_Naughty_Tomato_68g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Green Chutney Style",
    "pack": "78.9g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601151/KURKURE_Green_Chutney_Style_78.9g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Green Chutney Style",
    "pack": "70g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601152/KURKURE_Green_Chutney_Style_70g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Tasty Peanuts",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601153/Bikaneri_Bites_Tasty_Peanuts_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Masala Munch",
    "pack": "84.9g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601154/KURKURE_Masala_Munch_84.9g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Red Chilli Chatka",
    "pack": "68g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601156/KURKURE_Red_Chilli_Chatka_68g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Spicy Mixture",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601156/Bikaneri_Bites_Spicy_Mixture_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Puff Corn Yummy Cheese",
    "pack": "58g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601157/KURKURE_Puff_Corn_Yummy_Cheese_58g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Red Chilli Chatka",
    "pack": "78.9g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601158/KURKURE_Red_Chilli_Chatka_78.9g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Sizzlin Hot",
    "pack": "Contact us for available pack sizes",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601160/KURKURE_Sizzlin_Hot.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Solid Masti",
    "pack": "66.6g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601160/Kurkure_Solid_Masti_66.6g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's American Style Cream Onion Flavour",
    "pack": "52g x 135",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601162/Lays_American_Style_Cream_Onion_Flavour_52gX135.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's India'S Magic Masala",
    "pack": "30g x 135",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601163/Lays_India_s_Magic_Masala_30gX135.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's Classic Salted",
    "pack": "48g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601163/Lays_Classic_Salted_48g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Masala Munch",
    "pack": "77g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601164/KURKURE_Masala_Munch_77g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's Spanish Tomato Tango",
    "pack": "48g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601164/Lays_Spanish_Toamato_Tango_48g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Kurmura Laddu",
    "pack": "100g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601165/Shama_Kurmura_Laddu_100g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Phool Makhana",
    "pack": "50g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601166/Shama_Phool_Makhana_50g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Rajgira Laddu",
    "pack": "100g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601168/Shama_Rajgira_Laddu_100g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Rajgira Chikki",
    "pack": "100g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601170/Shama_Rajgira_Chikki_100g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Kashmiri Mixture",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601171/Bikaneri_Bites_Kashmiri_Mixture_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Murmura Chikki",
    "pack": "100g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601173/Shama_Murmura_Chikki_100g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Spicy Chick Peas",
    "pack": "300g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601173/Bikaneri_Bites_Spicy_Chick_Peas_300g.png"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's Chilli Lemon",
    "pack": "50g x 135",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1790601184/Lays_Chilli_Lemon_50gX135.png"
  }
];

  const nonCategory = productData.filter(item => item.category !== 'savoury-snacks');
  productData.splice(0, productData.length, ...nonCategory, ...items);

  const existing = categories.find(item => item.slug === 'savoury-snacks');
  const category = {
    slug:'savoury-snacks',
    name:'Savoury Snacks',
    desc:'Namkeen, chips, mixtures, chikki and savoury snack favourites',
    image:items[0]?.image || 'assets/shama-logo.png'
  };
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window['shama_savoury_snacks_catalogue'] = { total: items.length };
})();