(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const wines = [
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Grover",
    "title": "Grover Red Wine",
    "pack": "75cl · Alc. 13.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192902/Grover_Wine_Red_Alc._13.5_vol_75cl.png"
  },
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Grover",
    "title": "Grover Red Wine",
    "pack": "37.5cl · Alc. 13.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192903/Grover_Wine_Red_Alc._13.5_vol_37.5cl.png"
  },
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra Red Wine",
    "pack": "75cl · Alc. 12.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192904/Kamasutra_Red_Wine_Alc_12.5_Vol_75cl.png"
  },
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra Red Wine",
    "pack": "37.5cl · Alc. 12.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192902/Kamasutra_Red_Wine_Alc_12.5_Vol_37.5cl.png"
  },
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Sula",
    "title": "Sula Shiraz Red Wine",
    "pack": "750ml",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192906/Shiraz_Red_Wine_Sula_750ml.png"
  },
  {
    "category": "wines",
    "group": "White Wines",
    "brand": "Grover",
    "title": "Grover White Wine",
    "pack": "75cl · Alc. 13.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192903/Grover_Wine_White_Alc._13.5_vol_75cl.png"
  },
  {
    "category": "wines",
    "group": "White Wines",
    "brand": "Grover",
    "title": "Grover White Wine",
    "pack": "37.5cl · Alc. 13.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192904/grover_wine_white_alc._13.5_vol_37.5cl.png"
  },
  {
    "category": "wines",
    "group": "White Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra White Wine",
    "pack": "75cl · Alc. 12.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192904/Kamasutra_White_Wine_Alc_12.5_Vol_75cl.png"
  },
  {
    "category": "wines",
    "group": "White Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra White Wine",
    "pack": "37.5cl · Alc. 12.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192904/Kamasutra_White_Wine_Alc_12.5_Vol_37.5cl.png"
  },
  {
    "category": "wines",
    "group": "Rosé Wines",
    "brand": "Grover",
    "title": "Grover Rosé Wine",
    "pack": "75cl · Alc. 13.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192902/Grover_Wine_Rose_Alc._13.5_vol_75cl.png"
  },
  {
    "category": "wines",
    "group": "Rosé Wines",
    "brand": "Grover",
    "title": "Grover Rosé Wine",
    "pack": "37.5cl · Alc. 13.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192903/Grover_Wine_Rose_Alc._13.5_vol_37.5cl.png"
  },
  {
    "category": "wines",
    "group": "Rosé Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra Rosé Wine",
    "pack": "75cl · Alc. 12.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192904/Kamasutra_Rose_Wine_Alc_12.5_Vol_75cl.png"
  },
  {
    "category": "wines",
    "group": "Rosé Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra Rosé Wine",
    "pack": "37.5cl · Alc. 12.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192904/Kamasutra_Rose_Wine_Alc_12.5_Vol_37.5cl.png"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Masala Liqueur",
    "pack": "70cl",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192905/Liqueuer_Meera_Masala_70CL.png"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Ginger Liqueur",
    "pack": "70cl",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192905/Meera_Ginger_liquor_70_cl.png"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Mango Liqueur",
    "pack": "70cl",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192905/Liqueur_Meera_Mango_70CL.png"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Rose Liqueur",
    "pack": "70cl",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192905/Liqueur_Meera_Rose_70cl.png"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Cardamom Liqueur",
    "pack": "70cl",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192905/Liqueuer_Meera_Cardamom_70CL.png"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Paan Liqueur",
    "pack": "70cl",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192906/Liqueur_Meera_Pan_70_Cl.png"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Lychee Liqueur",
    "pack": "70cl",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192906/Meera_lychee_liquor_70_cl.png"
  },
  {
    "category": "wines",
    "group": "Beers & Lager",
    "brand": "Cobra",
    "title": "Cobra Premium Beer",
    "pack": "330ml · Alc. 4.8% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192903/Cobra_Premium_Beer_alc._4.8_vol_330ml.png"
  },
  {
    "category": "wines",
    "group": "Beers & Lager",
    "brand": "Kingfisher",
    "title": "Kingfisher Premium Lager Beer",
    "pack": "Alc. 4.5% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192906/Kingfisher_Prem._Lager_Beer_4.5.png"
  },
  {
    "category": "wines",
    "group": "Beers & Lager",
    "brand": "Kamasutra",
    "title": "Kamasutra Beer",
    "pack": "330ml · Alc. 5.0% vol.",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192906/KAMASUTRA_Beer_alc._5.0_vol_330_ml.png"
  }
];
  const others = productData.filter(item => item.category !== 'wines');
  productData.splice(0, productData.length, ...others, ...wines);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(x=>x.slug==='wines');
    if (category) {
      category.name='Wines';
      category.desc='Red, white and rosé wines, liqueurs and beers';
      category.image='https://res.cloudinary.com/wy4nkkqq/image/upload/v1791192902/Grover_Wine_Red_Alc._13.5_vol_75cl.png';
    }
  }

  window.shamaWinesCatalogue = {
    cloudinaryTotal: 23,
    total: wines.length,
    groups: ['Red Wines','White Wines','Rosé Wines','Meera Liqueurs','Beers & Lager'],
    source:'shama/Wines',
    syncedAt:'2026-10-05'
  };
})();