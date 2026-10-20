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
    "image": "/assets/cloudinary-shama/wines/grover-wine-red-alc-13-5-vol-75cl-cee439b127e9.webp"
  },
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Grover",
    "title": "Grover Red Wine",
    "pack": "37.5cl · Alc. 13.5% vol.",
    "image": "/assets/cloudinary-shama/wines/grover-wine-red-alc-13-5-vol-37-5cl-4f7702468065.webp"
  },
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra Red Wine",
    "pack": "75cl · Alc. 12.5% vol.",
    "image": "/assets/cloudinary-shama/wines/kamasutra-red-wine-alc-12-5-vol-75cl-e087a51247dc.webp"
  },
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra Red Wine",
    "pack": "37.5cl · Alc. 12.5% vol.",
    "image": "/assets/cloudinary-shama/wines/kamasutra-red-wine-alc-12-5-vol-37-5cl-e97996c43847.webp"
  },
  {
    "category": "wines",
    "group": "Red Wines",
    "brand": "Sula",
    "title": "Sula Shiraz Red Wine",
    "pack": "750ml",
    "image": "/assets/cloudinary-shama/wines/shiraz-red-wine-sula-750ml-0438f4c10698.webp"
  },
  {
    "category": "wines",
    "group": "White Wines",
    "brand": "Grover",
    "title": "Grover White Wine",
    "pack": "75cl · Alc. 13.5% vol.",
    "image": "/assets/cloudinary-shama/wines/grover-wine-white-alc-13-5-vol-75cl-d29f045995fe.webp"
  },
  {
    "category": "wines",
    "group": "White Wines",
    "brand": "Grover",
    "title": "Grover White Wine",
    "pack": "37.5cl · Alc. 13.5% vol.",
    "image": "/assets/cloudinary-shama/wines/grover-wine-white-alc-13-5-vol-37-5cl-50970bbd8152.webp"
  },
  {
    "category": "wines",
    "group": "White Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra White Wine",
    "pack": "75cl · Alc. 12.5% vol.",
    "image": "/assets/cloudinary-shama/wines/kamasutra-white-wine-alc-12-5-vol-75cl-84b436d88453.webp"
  },
  {
    "category": "wines",
    "group": "White Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra White Wine",
    "pack": "37.5cl · Alc. 12.5% vol.",
    "image": "/assets/cloudinary-shama/wines/kamasutra-white-wine-alc-12-5-vol-37-5cl-c582e9025488.webp"
  },
  {
    "category": "wines",
    "group": "Rosé Wines",
    "brand": "Grover",
    "title": "Grover Rosé Wine",
    "pack": "75cl · Alc. 13.5% vol.",
    "image": "/assets/cloudinary-shama/wines/grover-wine-rose-alc-13-5-vol-75cl-7da17083143d.webp"
  },
  {
    "category": "wines",
    "group": "Rosé Wines",
    "brand": "Grover",
    "title": "Grover Rosé Wine",
    "pack": "37.5cl · Alc. 13.5% vol.",
    "image": "/assets/cloudinary-shama/wines/grover-wine-rose-alc-13-5-vol-37-5cl-d342eca3ae35.webp"
  },
  {
    "category": "wines",
    "group": "Rosé Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra Rosé Wine",
    "pack": "75cl · Alc. 12.5% vol.",
    "image": "/assets/cloudinary-shama/wines/kamasutra-rose-wine-alc-12-5-vol-75cl-fb0df90f6067.webp"
  },
  {
    "category": "wines",
    "group": "Rosé Wines",
    "brand": "Kamasutra",
    "title": "Kamasutra Rosé Wine",
    "pack": "37.5cl · Alc. 12.5% vol.",
    "image": "/assets/cloudinary-shama/wines/kamasutra-rose-wine-alc-12-5-vol-37-5cl-814733f13e9c.webp"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Masala Liqueur",
    "pack": "70cl",
    "image": "/assets/cloudinary-shama/wines/liqueuer-meera-masala-70cl-73a37215234e.webp"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Ginger Liqueur",
    "pack": "70cl",
    "image": "/assets/cloudinary-shama/wines/meera-ginger-liquor-70-cl-c390db1c352a.webp"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Mango Liqueur",
    "pack": "70cl",
    "image": "/assets/cloudinary-shama/wines/liqueur-meera-mango-70cl-011ecdc1d0c5.webp"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Rose Liqueur",
    "pack": "70cl",
    "image": "/assets/cloudinary-shama/wines/liqueur-meera-rose-70cl-cd5f843b6f1b.webp"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Cardamom Liqueur",
    "pack": "70cl",
    "image": "/assets/cloudinary-shama/wines/liqueuer-meera-cardamom-70cl-bd1ff4a7617e.webp"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Paan Liqueur",
    "pack": "70cl",
    "image": "/assets/cloudinary-shama/wines/liqueur-meera-pan-70-cl-3f2e246f68bc.webp"
  },
  {
    "category": "wines",
    "group": "Meera Liqueurs",
    "brand": "Meera",
    "title": "Meera Lychee Liqueur",
    "pack": "70cl",
    "image": "/assets/cloudinary-shama/wines/meera-lychee-liquor-70-cl-b515429fa7a0.webp"
  },
  {
    "category": "wines",
    "group": "Beers & Lager",
    "brand": "Cobra",
    "title": "Cobra Premium Beer",
    "pack": "330ml · Alc. 4.8% vol.",
    "image": "/assets/cloudinary-shama/wines/cobra-premium-beer-alc-4-8-vol-330ml-281bfa9b2e11.webp"
  },
  {
    "category": "wines",
    "group": "Beers & Lager",
    "brand": "Kingfisher",
    "title": "Kingfisher Premium Lager Beer",
    "pack": "Alc. 4.5% vol.",
    "image": "/assets/cloudinary-shama/wines/kingfisher-prem-lager-beer-4-5-9cef70415e64.webp"
  },
  {
    "category": "wines",
    "group": "Beers & Lager",
    "brand": "Kamasutra",
    "title": "Kamasutra Beer",
    "pack": "330ml · Alc. 5.0% vol.",
    "image": "/assets/cloudinary-shama/wines/kamasutra-beer-alc-5-0-vol-330-ml-8287666ab23c.webp"
  }
];
  const others = productData.filter(item => item.category !== 'wines');
  productData.splice(0, productData.length, ...others, ...wines);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(x=>x.slug==='wines');
    if (category) {
      category.name='Wines';
      category.desc='Red, white and rosé wines, liqueurs and beers';
      category.image='/assets/cloudinary-shama/wines/grover-wine-red-alc-13-5-vol-75cl-cee439b127e9.webp';
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