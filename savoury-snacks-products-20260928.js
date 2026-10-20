(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
  {
    "category": "savoury-snacks",
    "title": "Shama Roasted Corn Salted",
    "pack": "400g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-roasted-corn-salted-400g-3ce5d27e8c46.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Thick Sev",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-thick-sev-300g-ca5c6ae1840f.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Kaju Mixture",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-kaju-mixture-150g-d8dfdb10b706.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Bombay Mixture",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-bombay-mixture-150g-25329883bdb4.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Gujarati Mixture",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-gujrati-mixture-150g-886aeb79e087.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Punjabi Pakora",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-punjabi-pakora-150g-ffd64df1a8ef.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Chana Dal Mixture",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-chana-dal-mixture-150g-93f40983d004.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Khatta Meetha",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-khatta-meetha-150g-7291f84c7876.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Moong Dal",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-moong-dal-150g-797b37c058e9.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Aloo Bhujia",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-aloo-bhujia-150g-eec474ef5348.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites All In One",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-all-in-one-150g-050c9a81f20f.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Boondi",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-boondi-150g-ed863e2da1b9.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Navratan",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-navratan-150g-113256c9dabf.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Badam Lacha",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-badam-lacha-150g-420743aa9e8a.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Tasty Peanuts",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-tasty-peanuts-150g-c401e9e3c124.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Bikaneri Bhujia",
    "pack": "150g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-bikaneri-bhujia-150g-550e699888a7.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Phool Makhana",
    "pack": "100g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-phool-makhana-100g-a73d801609db.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's Hot N Sweet",
    "pack": "1820 - 50g x 135",
    "image": "/assets/cloudinary-shama/savoury-snacks/lays-hot-n-sweet-50gx135-0b85fa73bc43.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Savoury Snack Selection",
    "pack": "Contact us for available pack sizes",
    "image": "/assets/cloudinary-shama/savoury-snacks/gemini-generated-image-xn8ep1xn8ep1xn8e-e400040396d9.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Bombay Mixture",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-bombay-mixture-300g-0690712466fe.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Traditional Mixture",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-traditional-mixture-300g-4c65c3206c24.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites All In One",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-all-in-one-300g-b305c38ffa4d.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Khatta Meetha",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-khatta-meetha-300g-171c25952827.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Moong Dal",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-moong-dal-300g-7e117814c2e8.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Punjabi Wadi",
    "pack": "400g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-punjabi-wadi-400g-1058597d4817.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Gujarati Mixture",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-gujrati-mixture-300g-f9d706a0d5b4.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Chaat Papdi",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-chaat-papdi-300g-bbf1c8e6754a.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Chana Dal Mixture",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-chana-dal-mixture-300g-89a337dfd600.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites London Mixture",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-london-mixture-300g-055fda776ad7.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Punjabi Mixture",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-punjabi-mixture-300g-270f0604c156.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Naughty Tomato",
    "pack": "3442A - 68g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-naughty-tomato-68g-534d0851fc28.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Green Chutney Style",
    "pack": "19192 - 78.9g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-green-chutney-style-78-9g-90080deb64f6.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Green Chutney Style",
    "pack": "3084A - 70g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-green-chutney-style-70g-2f77452bcf53.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Tasty Peanuts",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-tasty-peanuts-300g-4172a7e508f5.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Masala Munch",
    "pack": "19094 - 84.9g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-masala-munch-84-9g-1f6f570d7453.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Red Chilli Chatka",
    "pack": "0533A - 68g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-red-chilli-chatka-68g-3f826d19fdc7.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Spicy Mixture",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-spicy-mixture-300g-fef2a2df3f00.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Puff Corn Yummy Cheese",
    "pack": "19096 - 58g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-puff-corn-yummy-cheese-58g-bbd0c939d322.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Red Chilli Chatka",
    "pack": "19093 - 78.9g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-red-chilli-chatka-78-9g-9cc2341bbb99.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Sizzlin Hot",
    "pack": "19097 - Pack size to confirm",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-sizzlin-hot-500d2fb7eed0.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Solid Masti",
    "pack": "19191 - 66.6g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-solid-masti-66-6g-cf33c5329a54.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's American Style Cream Onion Flavour",
    "pack": "18957 - 52g x 135",
    "image": "/assets/cloudinary-shama/savoury-snacks/lays-american-style-cream-onion-flavour-52gx135-469b6eac58df.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's India'S Magic Masala",
    "pack": "1844 - 30g x 135",
    "image": "/assets/cloudinary-shama/savoury-snacks/lays-india-s-magic-masala-30gx135-30e07135beec.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's Classic Salted",
    "pack": "6222A - 48g",
    "image": "/assets/cloudinary-shama/savoury-snacks/lays-classic-salted-48g-f279706592b8.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Kurkure Masala Munch",
    "pack": "6052A - 77g",
    "image": "/assets/cloudinary-shama/savoury-snacks/kurkure-masala-munch-77g-e40a9086451c.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's Spanish Tomato Tango",
    "pack": "19092 - 48g",
    "image": "/assets/cloudinary-shama/savoury-snacks/lays-spanish-toamato-tango-48g-4e3e2337f503.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Kurmura Laddu",
    "pack": "100g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-kurmura-laddu-100g-a9770e489cca.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Phool Makhana",
    "pack": "50g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-phool-makhana-50g-1f31ae4fe15d.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Rajgira Laddu",
    "pack": "100g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-rajgira-laddu-100g-ad04164c3df9.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Rajgira Chikki",
    "pack": "100g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-rajgira-chikki-100g-ead8422e3c9f.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Kashmiri Mixture",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-kashmiri-mixture-300g-73f96477ec34.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Shama Murmura Chikki",
    "pack": "100g",
    "image": "/assets/cloudinary-shama/savoury-snacks/shama-murmura-chikki-100g-5b9387487515.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Bikaneri Bites Spicy Chick Peas",
    "pack": "300g",
    "image": "/assets/cloudinary-shama/savoury-snacks/bikaneri-bites-spicy-chick-peas-300g-8193c3ef1ab2.webp"
  },
  {
    "category": "savoury-snacks",
    "title": "Lay's Chilli Lemon",
    "pack": "1552A - 50g x 135",
    "image": "/assets/cloudinary-shama/savoury-snacks/lays-chilli-lemon-50gx135-9ad65bd5832a.webp"
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