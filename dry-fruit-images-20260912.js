(() => {
  'use strict';

  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const dryFruitProducts = [
    {
      category: 'dry-fruits',
      title: 'Shama Coconut Powder',
      pack: '400g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232079/Shama_coconut_powder_400gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Roasted Gram & Makhana',
      pack: '200g Jar',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232079/Shama_roasted_gram_and_makhana_200g_jar.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Broken Cashew',
      pack: '800g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232079/Shama_broken_cajou_800gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232080/Shama_golden_raisin_100g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '200g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232081/Shama_golden_raisin_200g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Almonds',
      pack: '800g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232081/Shama_Raw_almonds_800gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Golden Raisin',
      pack: '500g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232081/Shama_golden_raisin_500g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Roasted Chana',
      pack: '600g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232081/Shama_roasted_chana_600gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Pistachio Husked',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232082/Shama_pistatio_husked_100g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Cashews',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232083/Shama_Raw_cashews_100gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Pistachio Roasted & Salted',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232083/Shama_pistatio_roasted_salted_100g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raisin Munakka',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232083/Shama_raisin_munakka_100g.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Desiccated Coconut',
      pack: '1kg',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_desicated_coconut_1kg.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Raw Almonds',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raw_almonds_100gm.png'
    },
    {
      category: 'dry-fruits',
      title: 'Shama Green Raisins',
      pack: '100g',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789232085/Shama_Raisin_green_100gm.png'
    }
  ];



  const newDryFruitProducts20260928 = [
  {
    "category": "dry-fruits",
    "title": "Pruneaux 28/33",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029315/PRUNEAUX_28_33_1KG.png"
  },
  {
    "category": "dry-fruits",
    "title": "Peanut Powder",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029318/Poudre_d_Arachide_1kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Golden Jumbo Raisins",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029318/Raisins_secs_Golden_JUMBO_500GM.png"
  },
  {
    "category": "dry-fruits",
    "title": "Golden Jumbo Raisins",
    "pack": "250g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029321/Raisins_Sec_Golden_Jumbo_250_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Sultana Raisins",
    "pack": "250g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029320/Raisins_secs_sultanine_250gr.png"
  },
  {
    "category": "dry-fruits",
    "title": "Roasted Unsalted Shelled Almonds",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029322/Amande_decortique_grille_sans_sel_500_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Blanched Raw Peanuts",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029315/Arachides_Blanchies_Crues_500gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Carmel Almonds",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029315/Amandes_carmel_crues_500GM.png"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Nonpareil Supreme Almonds",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029318/Amande_Nonpareil_supreme_crue_500_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Sliced Almonds",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029316/Amandes_effil%C3%A9s_1kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Exotic Mix",
    "pack": "250g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029317/Melange_Exotique_250_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Sport Mix",
    "pack": "250g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029320/Melange_sportif_250_gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Broken Cashews",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029322/Noix_De_Cajou_Cass%C3%A9_1kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Sport Mix",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029319/Melange_Sportif_500_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Cashews",
    "pack": "250g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029315/Noix_de_cajou_crues_250gr.png"
  },
  {
    "category": "dry-fruits",
    "title": "Exotic Mix",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029320/M%C3%A9lange_Exotique_1kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Exotic Mix",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029316/M%C3%A9lange_exotique_500gr.png"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Shelled Peanuts",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029321/Arachides_Decortiqu%C3%A9es_Crues_500g.png"
  },
  {
    "category": "dry-fruits",
    "title": "Raw Cashews",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029317/Noix_de_Cajou_Crues_500_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Broken Cashews",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029321/Noix_de_Cajou_Cassee_500_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Roasted Salted Cashews",
    "pack": "250g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029322/Noix_de_Cajou_Grillees_salees_250_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Orienco Raw Cashews",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029319/ORIENCO_Noix_De_Cajou_Cruise_1kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Roasted Salted Cashews",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029322/Noix_de_cajou_grill%C3%A9es_sal%C3%A9es_500_Gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Orienco Coconut Powder",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029317/Orienco_Coconut_Powder_1KG.png"
  },
  {
    "category": "dry-fruits",
    "title": "Orienco White Almond Powder",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029319/Orienco_Poudre_d_amande_blanche_1kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Fried Salted Cashews",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029315/Noix_de_cajou_frites_sal%C3%A9es_500_gm.png"
  },
  {
    "category": "dry-fruits",
    "title": "Roasted Salted Pistachios in Shell",
    "pack": "250g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029315/PISTACHES_coque_grill%C3%A9es_sal%C3%A9es_250g.png"
  },
  {
    "category": "dry-fruits",
    "title": "Shelled Pistachios",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029317/Pistache_Decortique_1_kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Orienco Golden Raisins",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029320/ORIENCO_Raisin_Golden_1kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Peanut Powder",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029323/Poudre_d_Arachide_500g.png"
  },
  {
    "category": "dry-fruits",
    "title": "Extra Roasted Salted Shelled Almonds",
    "pack": "500g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029323/Amandes_d%C3%A9cortiqu%C3%A9es_extra_grill%C3%A9es_sal%C3%A9es_500gr.png"
  },
  {
    "category": "dry-fruits",
    "title": "Desiccated Coconut",
    "pack": "1kg",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029324/Noix_de_coco_rapee_1Kg.png"
  },
  {
    "category": "dry-fruits",
    "title": "Shelled Pistachios",
    "pack": "800g",
    "image": "https://res.cloudinary.com/wy4nkkqq/image/upload/v1791029324/Pistaches_decortiquees_800_Gm.png"
  }
];

  dryFruitProducts.push(...newDryFruitProducts20260928);

  // 2026-10-03 dry fruits category grouping
  const dryFruitGroup = title => {
    const t = String(title || '').toLowerCase();
    if (/almond|amande/.test(t)) return 'Almonds';
    if (/cashew|cajou/.test(t)) return 'Cashews';
    if (/pistach/.test(t)) return 'Pistachios';
    if (/raisin|munakka/.test(t)) return 'Raisins';
    if (/coconut|coco/.test(t)) return 'Coconut';
    if (/peanut|arachide|chana|gram|makhana/.test(t)) return 'Peanuts & Gram';
    if (/mix|mélange|melange|sport/.test(t)) return 'Mixes';
    if (/prune/.test(t)) return 'Prunes & Others';
    return 'Prunes & Others';
  };
  dryFruitProducts.forEach(item => { item.group = dryFruitGroup(item.title); });

  const otherProducts = productData.filter(item => item.category !== 'dry-fruits');
  productData.splice(0, productData.length, ...otherProducts, ...dryFruitProducts);
})();
