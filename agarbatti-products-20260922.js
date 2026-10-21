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
      pack:'0737 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-3-in-1-d280559e490a.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro 2 in 1 Agarbatti',
      pack:'0713 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-2-in-1-4dc8e76b9c71.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Amber Orange Agarbatti',
      pack:'19107 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-amber-orang-agarbatti-0e0fbf4eae63.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Hexa Agarbatti',
      pack:'19106 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-hexa-agarbatti-b5303d07da81.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Amber XXL Agarbatti',
      pack:'19041 - XXL · Contact us for case quantity',
      image:'/assets/cloudinary-shama/agarbatti/metro-amber-xxl-agarbatti-09dd98ba8157.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:"Metro Dragon's Blood Agarbatti",
      pack:'1802 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-dragon-s-blood-agarbatti-0b216cf9032a.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Cinnamon Agarbatti',
      pack:'0393 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-cinnamon-agarbatti-01c7fbd64e31.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Bakhoor Agarbatti',
      pack:'9376 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-bakhoor-agarbatti-dfff3fd71125.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Classic Agarbatti',
      pack:'1222 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-classic-agarbatti-4fdd012d0366.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Apple Cinnamon Clove Agarbatti',
      pack:'1840 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-apple-cinnamon-clove-agarbatti-d2b4bdc943a1.webp'
    },
    {
      category:'agarbatti',
      group:'Metro Collection',
      title:'Metro Black Sandal Agarbatti',
      pack:'1949 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metro-black-sandal-agarbatti-bf708b22a9ea.webp'
    },

    // METROMILAN COLLECTION
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Kewra Agarbatti',
      pack:'9413 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-kewra-agarbatti-24fd7b58de0a.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Jasmine Agarbatti',
      pack:'8089 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-jasmine-agarbatti-cd8a4088963b.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Champa Agarbatti',
      pack:'8119 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-champa-agarbatti-9f716954c240.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Amber Agarbatti',
      pack:'7453 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-amber-agarbatti-70b719194e99.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lavender Agarbatti XXL',
      pack:'9857 - XXL · Contact us for case quantity',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-lavender-agarbatti-xxl-a1934047edd7.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Red Rose Agarbatti',
      pack:'8690 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-redrose-agarbatti-7378e1af02a3.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Sandalwood Agarbatti',
      pack:'8102 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-sandalwood-agarbatti-3b42f72c9977.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lavender Agarbatti',
      pack:'3596A - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-lavender-agarbatti-a482e79cf020.webp'
    },
    {
      category:'agarbatti',
      group:'Metromilan Collection',
      title:'Metromilan Lily Agarbatti',
      pack:'8027 - Contact us for available pack sizes',
      image:'/assets/cloudinary-shama/agarbatti/metromilan-lily-agarbatti-71ce685e230c.webp'
    },

    // PURE COLLECTION
    {
      category:'agarbatti',
      group:'Pure Collection',
      title:'Pure Lily Agarbatti',
      pack:'0236A - Contact us for available pack sizes',
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