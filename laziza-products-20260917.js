(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const GROUPS = {
    'biryani-pulao': {
      family: 'spices', label: 'Biryani & Pulao Masala', ids: [
        'Laziza_biryani_masala_100g',
        'Laziza_delhi_pulao_biryani_masala_100g',
        'Laziza_sindhi_biryani_masala_130g',
        'Laziza_yakhni_pulao_masala_100g',
        'Laziza_zafrani_bombay_biryani_masala_130g'
      ]
    },
    'kebab-bbq': {
      family: 'spices', label: 'Kebab & BBQ Masala', ids: [
        'Laziza_behari_kebab_masala_100g',
        'Laziza_broast_masala_125g',
        'Laziza_chapli_kebab_masala_100g',
        'Laziza_chicken_tikka_masala_100g',
        'Laziza_lahori_chargha_masala_90g',
        'Laziza_shami_kebab_masala_100g',
        'Laziza_seekh_kebab_masala_100g',
        'Laziza_tikka_boti_masala_100g',
        'Laziza_tandoori_masala_100g'
      ]
    },
    'curry-meat': {
      family: 'spices', label: 'Curry & Meat Masala', ids: [
        'Laziza_achar_ghosht_masala_100g',
        'Laziza_chana_masala_100g',
        'Laziza_chicken_masala_100g',
        'Laziza_chicken_ginger_80g',
        'Laziza_fish_masala_100g',
        'Laziza_kofta_masala_130g',
        'Laziza_karahi_fry_meat_masala_90g',
        'Laziza_pasanda_masala_100g',
        'Laziza_qorma_masala_100g',
        'Laziza_stew_dopiaza_masala_80g',
        'Laziza_qeema_masala_100g',
        'Laziza_sabzi_bhujia_masala_100g'
      ]
    },
    'traditional-spices': {
      family: 'spices', label: 'Haleem, Nihari & Paya', ids: [
        'Laziza_haleem_masala_100g',
        'Laziza_haleem_mix_complete_375g',
        'Laziza_nehari_masala_100g',
        'Laziza_paya_masala_100g'
      ]
    },
    'snacks-sides': {
      family: 'spices', label: 'Snacks, Chaat & Sides', ids: [
        'Laziza_chutney_raita_masala_100g',
        'Laziza_chaat_masala_100g',
        'Laziza_pakora_masala_200g',
        'Laziza_plum_chutney_275g'
      ]
    },
    'custard': {
      family: 'sweets', label: 'Custard', ids: [
        'Custard_powder_mango_300g',
        'Custard_powder_strawberry_300g',
        'Custard_powder_vanilla_300g',
        'Custard_powder_banana_300g',
        'Custard_powder_pineapple_300g',
        'Custard_powder_pistachio_300g'
      ]
    },
    'jelly': {
      family: 'sweets', label: 'Jelly', ids: [
        'Jelly_cherry_85g',
        'Jelly_banana_85g',
        'Jelly_black_current_85g',
        'Jelly_pineapple_85g',
        'Jelly_mango_85g',
        'Jelly_orange_85g',
        'Laziza_jelly_strawberry_80g',
        'Jelly_rasberry_85g'
      ]
    },
    'falooda': {
      family: 'sweets', label: 'Falooda', ids: [
        'Falooda_pista_200g',
        'Falooda_kesar_200g',
        'Falooda_rabri_200g',
        'Falooda_strawberry_195g',
        'Falooda_jelly_235g'
      ]
    },
    'kheer-firni': {
      family: 'sweets', label: 'Kheer & Firni', ids: [
        'Date_kheer_155g',
        'Dry_fruit_kheer_mix_160g',
        'Firni_khus_saffron_150g',
        'Firni_khus_kewra_150g',
        'Gajar_kheer_mix_150g',
        'Laziza_kajoo_kheer_mix_155g',
        'Laziza_kheer_mix_pistachio_coconut_155g',
        'Laziza_kheer_mix_ecomomy_310g',
        'Laziza_kheer_mix_standard_155g',
        'Laziza_kheer_mix_almond_saffron_155g',
        'Laziza_vermicelli_kheer_mix_155g',
        'Laziza_sheer_khurma_mix_160g'
      ]
    },
    'kulfi': {
      family: 'sweets', label: 'Kulfi', ids: [
        'Laziza_kesar_khulfi_152g',
        'Laziza_khulfa_khoya_mix_Badami_152g',
        'Laziza_kulfi_malai_mix_standard_152g',
        'Laziza_khulfa_khoya_mix_Standard_152g',
        'Laziza_khulfa_khoya_mix_Pistachio_152g'
      ]
    },
    'halwa': {
      family: 'sweets', label: 'Halwa', ids: [
        'Gajar_halwa_mix_150g'
      ]
    }
  };

  const corrections = {
    'black current': 'Black Currant',
    'rasberry': 'Raspberry',
    'ecomomy': 'Economy',
    'khulfi': 'Kulfi',
    'khulfa': 'Kulfa',
    'kajoo': 'Kaju',
    'nehari': 'Nihari'
  };

  function splitProductId(id) {
    const clean = id.replace(/^Laziza_/i, '');
    const match = clean.match(/_(\d+(?:\.\d+)?(?:g|kg|ml|l))$/i);
    const pack = match ? match[1] : 'Contact us for available pack sizes';
    const stem = match ? clean.slice(0, -match[0].length) : clean;
    return { stem, pack };
  }

  function titleFromId(id) {
    const { stem } = splitProductId(id);
    let raw = stem.replace(/_/g, ' ').toLowerCase();
    Object.entries(corrections).forEach(([from, to]) => {
      raw = raw.replace(new RegExp(`\\b${from}\\b`, 'g'), to.toLowerCase());
    });
    return raw.replace(/\b\w/g, ch => ch.toUpperCase());
  }

  function makeItem(id, typeKey, group) {
    const { pack } = splitProductId(id);
    return {
      category: 'laziza',
      brand: 'Laziza',
      subcategory: group.family,
      itemType: typeKey,
      itemTypeLabel: group.label,
      title: `Laziza ${titleFromId(id)}`,
      pack,
      image: `https://res.cloudinary.com/wy4nkkqq/image/upload/${id}.png`
    };
  }

  const lazizaProducts = Object.entries(GROUPS).flatMap(([typeKey, group]) =>
    group.ids.map(id => makeItem(id, typeKey, group))
  );

  const existing = new Set(productData.map(item => `${item.category}|${item.title}|${item.pack}`));
  lazizaProducts.forEach(item => {
    const key = `${item.category}|${item.title}|${item.pack}`;
    if (!existing.has(key)) {
      productData.push(item);
      existing.add(key);
    }
  });

  if (!categories.some(item => item.slug === 'laziza')) {
    categories.push({
      slug: 'laziza',
      name: 'Laziza',
      desc: 'Recipe masalas, dessert mixes, custards, jellies and traditional favourites',
      image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/Laziza_biryani_masala_100g.png'
    });
  }

  const typeCounts = Object.fromEntries(
    Object.entries(GROUPS).map(([key, group]) => [key, group.ids.length])
  );
  const titleMeta = Object.fromEntries(
    lazizaProducts.map(item => [item.title, {
      family: item.subcategory,
      type: item.itemType,
      typeLabel: item.itemTypeLabel
    }])
  );

  window.lazizaCatalogue = {
    total: lazizaProducts.length,
    spices: lazizaProducts.filter(item => item.subcategory === 'spices').length,
    sweets: lazizaProducts.filter(item => item.subcategory === 'sweets').length,
    groups: Object.fromEntries(Object.entries(GROUPS).map(([key, group]) => [key, {
      family: group.family,
      label: group.label,
      count: group.ids.length
    }])),
    typeCounts,
    titleMeta
  };
})();
