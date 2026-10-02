(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  // Live source synced from Cloudinary folder: shama/Agarbatti
  // 21 current assets, arranged by brand/range for the Agarbatti page.
  const items = [
    // METRO COLLECTION
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro 3 in 1 Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069154/Metro_3_in_1.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro 2 in 1 Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069155/Metro_2_in_1.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Amber Orange Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069155/Metro_amber_orang_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Hexa Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069155/Metro_hexa_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Amber XXL Agarbatti',
      pack:'XXL · Contact us for case quantity',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069158/Metro_amber_xxl_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:"Metro Dragon's Blood Agarbatti",
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069193/Metro_dragon_s_blood_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Cinnamon Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069193/Metro_cinnamon_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Bakhoor Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069193/Metro_bakhoor_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Classic Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069193/Metro_classic_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Apple Cinnamon Clove Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790934647/Metro_Apple_Cinnamon_Clove_Agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Black Sandal Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790934647/Metro_Black_Sandal_Agarbatti.png'
    },

    // METROMILAN COLLECTION
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Kewra Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069194/Metromilan_kewra_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Jasmine Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069194/Metromilan_jasmine_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Champa Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069194/Metromilan_champa_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Amber Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069194/Metromilan_amber_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lavender Agarbatti XXL',
      pack:'XXL · Contact us for case quantity',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069210/Metromilan_lavender_agarbatti_XXL.png'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Red Rose Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069210/Metromilan_Redrose_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Sandalwood Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069211/Metromilan_sandalwood_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lavender Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069211/Metromilan_lavender_agarbatti.png'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lily Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069211/Metromilan_lily_agarbatti.png'
    },

    // PURE COLLECTION
    {
      category:'agarbatti',
      group:'Pure Collection',
      title:'Pure Lily Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790069155/Pure_lilly_agarbatti.png'
    }
  ];

  // Replace the previous Agarbatti dataset so deleted/old entries cannot remain.
  const nonAgarbatti = productData.filter(item => item.category !== 'agarbatti');
  productData.splice(0, productData.length, ...nonAgarbatti, ...items);

  const category = {
    slug:'agarbatti',
    name:'Agarbatti',
    desc:'Metro, Metromilan and Pure incense collections',
    image:'https://res.cloudinary.com/wy4nkkqq/image/upload/v1790934647/Metro_Black_Sandal_Agarbatti.png'
  };

  const existing = categories.find(item => item.slug === 'agarbatti');
  if (existing) Object.assign(existing, category);
  else categories.push(category);

  window.shama_agarbatti_catalogue = {
    total: items.length,
    groups: ['Metro Collection', 'Metromilan Collection', 'Pure Collection'],
    source: 'shama/Agarbatti'
  };
})();