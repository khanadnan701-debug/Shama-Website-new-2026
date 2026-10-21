(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  // Curated Cloudinary shama/Paste catalogue: 46 source assets, 45 shown.
  // Shama Mango Mixed Pickle 1kg is intentionally excluded from the website.
  const folderProducts = [
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Mint Sauce",
    "pack": "4330A - 2.7kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-mint-sauce-2-7kg-ee9c603ba48c.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Butter Chicken Curry Paste",
    "pack": "19119 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-butter-chicken-curry-paste-300g-10137df467ae.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Biryani Paste",
    "pack": "4556B - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-biryani-paste-2-3kg-1cf09a93f85c.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Butter Chicken Curry Paste",
    "pack": "4488A - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-butter-chicken-curry-paste-2-3kg-422850abe284.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Balti Curry Paste",
    "pack": "6440A - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-balti-curry-paste-2-3kg-5867bb3b676c.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Korma Curry Paste",
    "pack": "6442A - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-korma-curry-paste-2-3kg-51f7ecbd26be.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Biryani Curry Paste",
    "pack": "19118 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-biryani-curry-paste-300g-f68212d16e2a.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Garlic Masala Pickle",
    "pack": "19122 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-garlic-masala-pickle-300g-45c5e3131092.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Madras Kebab Paste",
    "pack": "4602A - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-madras-kebab-paste-2-3kg-e2687687a0ef.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Madras Kebab Paste",
    "pack": "19136 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-madras-kebab-paste-300g-7fceca415765.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Green Chilli Pickle",
    "pack": "19115 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-green-chilli-pickle-300g-107eb1563585.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Lime Pickle Mild",
    "pack": "19123 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-lime-pickle-mild-300g-172a26177158.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Kashmiri Paste",
    "pack": "4565A - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-kashmiri-paste-2-3kg-f8f83f415be3.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mixed Pickle Mild",
    "pack": "0115A - 4kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-mixed-pickle-mild-4kg-3ed36044247e.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mango Pickle Mild",
    "pack": "300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-mango-pickle-mild-300g-c10917fa06df.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Mild Curry Paste",
    "pack": "4534B - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-mild-curry-paste-2-3kg-1efbe037aa99.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Rogan Josh Curry Paste",
    "pack": "6441A - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-rogan-josh-curry-paste-2-3kg-f22652a2e02b.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Tandoori Curry Paste",
    "pack": "19121 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-tandoori-curry-paste-300g-317a03a346d9.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Tikka Masala Paste",
    "pack": "4596B - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-tikka-masala-paste-2-3kg-fa98305b4727.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mixed Pickle Mild",
    "pack": "19114 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-mixed-pickle-mild-300g-5d8fb2efb28e.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Vindaloo Curry Paste",
    "pack": "19135 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-vindaloo-curry-paste-300g-388f74615c58.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Tikka Masala Curry Paste",
    "pack": "19120 - 300g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-tikka-masala-curry-paste-300g-e4368b80e09a.webp"
  },
  {
    "category": "sauces",
    "group": "Shama Curry & Cooking Pastes",
    "title": "Shama Vindaloo Paste",
    "pack": "4541A - 2.3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-vindaloo-paste-2-3kg-050b345a65c6.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Sweet Mango Chutney",
    "pack": "4428B - 3kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-sweet-mango-chutney-3kg-4a571213cdbf.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Ginger & Garlic Paste",
    "pack": "0536 - 750g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-ginger-garlic-750g-b336d8039f56.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Ginger Paste",
    "pack": "0512B - 750g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-ginger-paste-750g-2542f616f7b9.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Garlic Paste",
    "pack": "0550A - 320g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-garlic-paste-320g-da3f8099b7e3.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Garlic Paste",
    "pack": "0529 - 750g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-garlic-paste-750g-e30e9833c896.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Ginger & Garlic Paste",
    "pack": "0567 - 320g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-ginger-garlic-320g-b6916b286df7.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Garlic Paste",
    "pack": "18933 - 320g x 1",
    "image": "/assets/cloudinary-shama/paste/sunrise-garlic-paste-320g-89db1d4569b3.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Shama Ginger Paste",
    "pack": "0543 - 320g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-ginger-paste-320g-40d9c3d51360.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Ginger Paste",
    "pack": "18984 - 320g x 1",
    "image": "/assets/cloudinary-shama/paste/sunrise-ginger-paste-320g-4d8be4a23d2e.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Ginger & Garlic Paste",
    "pack": "0567B - 320g x 1",
    "image": "/assets/cloudinary-shama/paste/sunrise-ginger-garlic-paste-320g-e5393a4b7f09.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Ginger Paste",
    "pack": "0513A - 750g x 1",
    "image": "/assets/sauces-pastes/sunrise-ginger-paste-750g.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Ginger & Garlic Paste",
    "pack": "0536B - 750g x 1",
    "image": "/assets/cloudinary-shama/paste/sunrise-ginger-garlic-paste-750g-f23be163c2eb.webp"
  },
  {
    "category": "sauces",
    "group": "Ginger & Garlic Pastes",
    "title": "Sunrise Garlic Paste",
    "pack": "0529B - 750g x 1",
    "image": "/assets/cloudinary-shama/paste/sunrise-garlic-paste-750g-2815e1cdeb94.webp"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Tamarind Date Tomato Sauce",
    "pack": "4497A - 220g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-tamarind-date-tomato-sauce-edc47989253d.webp"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Green Chilli Sauce",
    "pack": "4442A - 200g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-green-chilli-sauce-801f5bde50b4.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Coriander Mint Chutney",
    "pack": "4480A - 200g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-coriander-mint-chutney-7ab6dc01d79f.webp"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Dark Soy Sauce",
    "pack": "4466A - 215g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-dark-soy-sauce-c2787d01a8bf.webp"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Red Chilli Sauce",
    "pack": "4435B - 200g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-red-chilli-sauce-5d180fa8d271.webp"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Sweet Chilli Sauce",
    "pack": "4473A - 215g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-sweet-chilli-sauce-82dbc45d57e3.webp"
  },
  {
    "category": "sauces",
    "group": "Sauces",
    "title": "Shama Tamarind Date Sauce",
    "pack": "4459B - 220g x 1",
    "image": "/assets/cloudinary-shama/paste/shama-tamarind-date-sauce-6e2eb5f3b9ff.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mixed Pickle",
    "pack": "0115A - 4kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-mixed-pickle-4kg-e8a71ca824f0.webp"
  },
  {
    "category": "sauces",
    "group": "Pickles & Chutneys",
    "title": "Shama Mango Pickle",
    "pack": "1kg x 1",
    "image": "/assets/cloudinary-shama/paste/shama-mango-pickle-1kg-9c5e9eab9cea.webp"
  }
];

  const nonSauces = productData.filter(item => item.category !== 'sauces');
  productData.splice(0, productData.length, ...nonSauces, ...folderProducts);

  const category = categories.find(item => item.slug === 'sauces');
  if (category) {
    category.name = 'Sauces, Pickles & Pastes';
    category.desc = 'Curry pastes, ginger & garlic pastes, pickles, chutneys and sauces';
    category.image = '/assets/cloudinary-shama/paste/shama-mango-pickle-1kg-9c5e9eab9cea.webp';
  }

  window.shamaPasteFolderCatalogue = {
    cloudinaryTotal: 46,
    total: folderProducts.length,
    excludedFromWebsite: ['Shama_Mango_mixed_1kg'],
    groups: ["Shama Curry & Cooking Pastes","Ginger & Garlic Pastes","Pickles & Chutneys","Sauces"],
    source: 'shama/Paste',
    syncedAt: '2026-10-10'
  };
})();