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
      image:'/assets/cloudinary-shama/agarbatti/metro-3-in-1-d280559e490a.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro 2 in 1 Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-2-in-1-4dc8e76b9c71.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Amber Orange Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-amber-orang-agarbatti-0e0fbf4eae63.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Hexa Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-hexa-agarbatti-b5303d07da81.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Amber XXL Agarbatti',
      pack:'XXL · Contact us for case quantity',
      image:'/assets/cloudinary-shama/agarbatti/metro-amber-xxl-agarbatti-09dd98ba8157.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:"Metro Dragon's Blood Agarbatti",
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-dragon-s-blood-agarbatti-0b216cf9032a.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Cinnamon Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-cinnamon-agarbatti-01c7fbd64e31.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Bakhoor Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-bakhoor-agarbatti-dfff3fd71125.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Classic Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-classic-agarbatti-4fdd012d0366.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Apple Cinnamon Clove Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-apple-cinnamon-clove-agarbatti-d2b4bdc943a1.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Black Sandal Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-black-sandal-agarbatti-bf708b22a9ea.webp'
    },

    // METROMILAN COLLECTION
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Kewra Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-kewra-agarbatti-24fd7b58de0a.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Jasmine Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-jasmine-agarbatti-cd8a4088963b.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Champa Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-champa-agarbatti-9f716954c240.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Amber Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-amber-agarbatti-70b719194e99.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lavender Agarbatti XXL',
      pack:'XXL · Contact us for case quantity',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-lavender-agarbatti-xxl-a1934047edd7.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Red Rose Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-redrose-agarbatti-7378e1af02a3.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Sandalwood Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-sandalwood-agarbatti-3b42f72c9977.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lavender Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-lavender-agarbatti-a482e79cf020.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lily Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-lily-agarbatti-71ce685e230c.webp'
    },

    // PURE COLLECTION
    {
      category:'agarbatti',
      group:'Pure Collection',
      title:'Pure Lily Agarbatti',
      pack:'Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/pure-lilly-agarbatti-ba6e0d2673cf.webp'
    }
  ];

  // Replace the previous Agarbatti dataset so deleted/old entries cannot remain.
  const nonAgarbatti = productData.filter(item => item.category !== 'agarbatti');
  productData.splice(0, productData.length, ...nonAgarbatti, ...items);

  const category = {
    slug:'agarbatti',
    name:'Agarbatti',
    desc:'Metro, Metromilan and Pure incense collections',
    image:'/assets/cloudinary-shama/agarbatti/metro-black-sandal-agarbatti-bf708b22a9ea.webp'
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