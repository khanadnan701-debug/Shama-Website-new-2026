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
        'Laziza_zafrani_bombay_biryani_masala_130g',
        'National_biryani_masala_78g'
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

  // Item codes from the supplied 2026-10-20 Laziza inventory screenshots.
  const PRODUCT_CODES = Object.freeze({
    'Laziza_biryani_masala_100g': '1103A',
    'Laziza_delhi_pulao_biryani_masala_100g': '2278B',
    'Laziza_sindhi_biryani_masala_130g': '2261A',
    'Laziza_yakhni_pulao_masala_100g': '1554A',
    'Laziza_zafrani_bombay_biryani_masala_130g': '1745A',
    'National_biryani_masala_78g': '19045',
    'Laziza_behari_kebab_masala_100g': '1769A',
    'Laziza_broast_masala_125g': '1585A',
    'Laziza_chapli_kebab_masala_100g': '19021',
    'Laziza_chicken_tikka_masala_100g': '1592A',
    'Laziza_lahori_chargha_masala_90g': '1578A',
    'Laziza_shami_kebab_masala_100g': '1738A',
    'Laziza_seekh_kebab_masala_100g': '1165A',
    'Laziza_tikka_boti_masala_100g': '1172A',
    'Laziza_tandoori_masala_100g': '1196A',
    'Laziza_achar_ghosht_masala_100g': '1523A',
    'Laziza_chana_masala_100g': '2285A',
    'Laziza_chicken_masala_100g': '1530B',
    'Laziza_chicken_ginger_80g': '1561A',
    'Laziza_fish_masala_100g': '1547A',
    'Laziza_kofta_masala_130g': '1189A',
    'Laziza_karahi_fry_meat_masala_90g': '1202A',
    'Laziza_pasanda_masala_100g': '0977A',
    'Laziza_qorma_masala_100g': '1097A',
    'Laziza_stew_dopiaza_masala_80g': '1721A',
    'Laziza_qeema_masala_100g': '1134A',
    'Laziza_sabzi_bhujia_masala_100g': '2292A',
    'Laziza_haleem_masala_100g': '1714A',
    'Laziza_haleem_mix_complete_375g': '19099',
    'Laziza_nehari_masala_100g': '1219A',
    'Laziza_paya_masala_100g': '0557A',
    'Laziza_chutney_raita_masala_100g': '1158A',
    'Laziza_chaat_masala_100g': '1110B',
    'Laziza_pakora_masala_200g': '0984A',
    'Laziza_plum_chutney_275g': '9981A',
    'Laziza_khulfa_khoya_mix_Standard_152g': '0779A',
    'Laziza_kheer_mix_standard_155g': '0991A',
    'Firni_khus_saffron_150g': '1028A',
    'Firni_khus_kewra_150g': '1035A',
    'Laziza_kheer_mix_almond_saffron_155g': '1042A',
    'Laziza_kheer_mix_pistachio_coconut_155g': '1059A',
    'Gajar_halwa_mix_150g': '1073A',
    'Gajar_kheer_mix_150g': '1080A',
    'Laziza_sheer_khurma_mix_160g': '1257A',
    'Laziza_khulfa_khoya_mix_Pistachio_152g': '1288A',
    'Laziza_kulfi_malai_mix_standard_152g': '1929A',
    'Dry_fruit_kheer_mix_160g': '1950A',
    'Jelly_pineapple_85g': '2117A',
    'Jelly_banana_85g': '2124A',
    'Jelly_cherry_85g': '2131A',
    'Jelly_mango_85g': '2148A',
    'Jelly_black_current_85g': '2155A',
    'Jelly_rasberry_85g': '2162A',
    'Custard_powder_strawberry_300g': '2179A',
    'Custard_powder_mango_300g': '2186',
    'Custard_powder_vanilla_300g': '2193A',
    'Laziza_kheer_mix_ecomomy_310g': '2353A',
    'Date_kheer_155g': '2735A',
    'Laziza_vermicelli_kheer_mix_155g': '2742A',
    'Laziza_kajoo_kheer_mix_155g': '2759A',
    'Laziza_kesar_khulfi_152g': '3862B',
    'Custard_powder_pistachio_300g': '3930A',
    'Jelly_orange_85g': '4050B',
    'Custard_powder_banana_300g': '4333A',
    'Falooda_jelly_235g': '4654A',
    'Falooda_rabri_200g': '4661A',
    'Falooda_strawberry_195g': '5606A',
    'Falooda_pista_200g': '5613A',
    'Falooda_kesar_200g': '5620A',
    'Laziza_khulfa_khoya_mix_Badami_152g': '6283A',
    'Custard_powder_pineapple_300g': '6306A'
  });

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

  const LOCAL_IMAGES = Object.freeze({
  "Custard_powder_banana_300g": "/assets/cloudinary-shama/laziza/sweets/custard-powder-banana-300g-f0c42550ee15.webp",
  "Custard_powder_mango_300g": "/assets/cloudinary-shama/laziza/sweets/custard-powder-mango-300g-6a0ac3f89f3c.webp",
  "Custard_powder_pineapple_300g": "/assets/cloudinary-shama/laziza/sweets/custard-powder-pineapple-300g-4a88e3c90b2c.webp",
  "Custard_powder_pistachio_300g": "/assets/cloudinary-shama/laziza/sweets/custard-powder-pistachio-300g-a90c49d4c645.webp",
  "Custard_powder_strawberry_300g": "/assets/cloudinary-shama/laziza/sweets/custard-powder-strawberry-300g-8398612b50cf.webp",
  "Custard_powder_vanilla_300g": "/assets/cloudinary-shama/laziza/sweets/custard-powder-vanilla-300g-14bbcad7375f.webp",
  "Date_kheer_155g": "/assets/cloudinary-shama/laziza/sweets/date-kheer-155g-1ac14af1cb5a.webp",
  "Dry_fruit_kheer_mix_160g": "/assets/cloudinary-shama/laziza/sweets/dry-fruit-kheer-mix-160g-f010bed76e8c.webp",
  "Falooda_jelly_235g": "/assets/cloudinary-shama/laziza/sweets/falooda-jelly-235g-84a3fd3158d2.webp",
  "Falooda_kesar_200g": "/assets/cloudinary-shama/laziza/sweets/falooda-kesar-200g-576381e49bdb.webp",
  "Falooda_pista_200g": "/assets/cloudinary-shama/laziza/sweets/falooda-pista-200g-7b49cc763d03.webp",
  "Falooda_rabri_200g": "/assets/cloudinary-shama/laziza/sweets/falooda-rabri-200g-50e2dc09749b.webp",
  "Falooda_strawberry_195g": "/assets/cloudinary-shama/laziza/sweets/falooda-strawberry-195g-1bcfcbc351df.webp",
  "Firni_khus_kewra_150g": "/assets/cloudinary-shama/laziza/sweets/firni-khus-kewra-150g-117182ba58c1.webp",
  "Firni_khus_saffron_150g": "/assets/cloudinary-shama/laziza/sweets/firni-khus-saffron-150g-744639cf04ac.webp",
  "Gajar_halwa_mix_150g": "/assets/cloudinary-shama/laziza/sweets/gajar-halwa-mix-150g-f0a563728287.webp",
  "Gajar_kheer_mix_150g": "/assets/cloudinary-shama/laziza/sweets/gajar-kheer-mix-150g-896459e437f5.webp",
  "Jelly_banana_85g": "/assets/cloudinary-shama/laziza/sweets/jelly-banana-85g-22f1ccf71e6d.webp",
  "Jelly_black_current_85g": "/assets/cloudinary-shama/laziza/sweets/jelly-black-current-85g-47ad33d8cb39.webp",
  "Jelly_cherry_85g": "/assets/cloudinary-shama/laziza/sweets/jelly-cherry-85g-f56c07815d1d.webp",
  "Jelly_mango_85g": "/assets/cloudinary-shama/laziza/sweets/jelly-mango-85g-16b5433d097d.webp",
  "Jelly_orange_85g": "/assets/cloudinary-shama/laziza/sweets/jelly-orange-85g-022769d17c40.webp",
  "Jelly_pineapple_85g": "/assets/cloudinary-shama/laziza/sweets/jelly-pineapple-85g-99ecc20c211a.webp",
  "Jelly_rasberry_85g": "/assets/cloudinary-shama/laziza/sweets/jelly-rasberry-85g-60716d2e2d94.webp",
  "Laziza_achar_ghosht_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-achar-ghosht-masala-100g-c912c82a86f8.webp",
  "Laziza_behari_kebab_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-behari-kebab-masala-100g-ec052bf3373c.webp",
  "Laziza_biryani_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-biryani-masala-100g-0f3666d7ad74.webp",
  "Laziza_broast_masala_125g": "/assets/cloudinary-shama/laziza/spices/laziza-broast-masala-125g-b15e77122662.webp",
  "Laziza_chaat_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-chaat-masala-100g-007634d58f3f.webp",
  "Laziza_chana_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-chana-masala-100g-cc31f1ee9372.webp",
  "Laziza_chapli_kebab_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-chapli-kebab-masala-100g-a1d6e4b98e5b.webp",
  "Laziza_chicken_ginger_80g": "/assets/cloudinary-shama/laziza/spices/laziza-chicken-ginger-80g-0bdfdd3d6b5e.webp",
  "Laziza_chicken_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-chicken-masala-100g-46cb6855c7ce.webp",
  "Laziza_chicken_tikka_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-chicken-tikka-masala-100g-718d264ddad2.webp",
  "Laziza_chutney_raita_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-chutney-raita-masala-100g-efc4b126a868.webp",
  "Laziza_delhi_pulao_biryani_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-delhi-pulao-biryani-masala-100g-9c005b2a0bec.webp",
  "Laziza_fish_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-fish-masala-100g-85ec4975eab0.webp",
  "Laziza_haleem_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-haleem-masala-100g-f79ec200aa62.webp",
  "Laziza_haleem_mix_complete_375g": "/assets/cloudinary-shama/laziza/spices/laziza-haleem-mix-complete-375g-40b02054d832.webp",
  "Laziza_jelly_strawberry_80g": "/assets/cloudinary-shama/laziza/sweets/laziza-jelly-strawberry-80g-ba01fe6ee164.webp",
  "Laziza_kajoo_kheer_mix_155g": "/assets/cloudinary-shama/laziza/sweets/laziza-kajoo-kheer-mix-155g-58aa9665245c.webp",
  "Laziza_karahi_fry_meat_masala_90g": "/assets/cloudinary-shama/laziza/spices/laziza-karahi-fry-meat-masala-90g-8fb9979431cc.webp",
  "Laziza_kesar_khulfi_152g": "/assets/cloudinary-shama/laziza/sweets/laziza-kesar-khulfi-152g-277896e164a2.webp",
  "Laziza_kheer_mix_almond_saffron_155g": "/assets/cloudinary-shama/laziza/sweets/laziza-kheer-mix-almond-saffron-155g-e63d1b9ba8ca.webp",
  "Laziza_kheer_mix_ecomomy_310g": "/assets/cloudinary-shama/laziza/sweets/laziza-kheer-mix-ecomomy-310g-a8d8c3583db8.webp",
  "Laziza_kheer_mix_pistachio_coconut_155g": "/assets/cloudinary-shama/laziza/sweets/laziza-kheer-mix-pistachio-coconut-155g-0c739cc35d3a.webp",
  "Laziza_kheer_mix_standard_155g": "/assets/cloudinary-shama/laziza/sweets/laziza-kheer-mix-standard-155g-fc721414fd89.webp",
  "Laziza_khulfa_khoya_mix_Badami_152g": "/assets/cloudinary-shama/laziza/sweets/laziza-khulfa-khoya-mix-badami-152g-819b0363e5b4.webp",
  "Laziza_khulfa_khoya_mix_Pistachio_152g": "/assets/cloudinary-shama/laziza/sweets/laziza-khulfa-khoya-mix-pistachio-152g-f8c38ae3202d.webp",
  "Laziza_khulfa_khoya_mix_Standard_152g": "/assets/cloudinary-shama/laziza/sweets/laziza-khulfa-khoya-mix-standard-152g-66d02c6bce50.webp",
  "Laziza_kofta_masala_130g": "/assets/cloudinary-shama/laziza/spices/laziza-kofta-masala-130g-5a69e1dae365.webp",
  "Laziza_kulfi_malai_mix_standard_152g": "/assets/cloudinary-shama/laziza/sweets/laziza-kulfi-malai-mix-standard-152g-fbb455cc1bfc.webp",
  "Laziza_lahori_chargha_masala_90g": "/assets/cloudinary-shama/laziza/spices/laziza-lahori-chargha-masala-90g-30d90c468d63.webp",
  "Laziza_nehari_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-nehari-masala-100g-04bf0990d3bb.webp",
  "Laziza_pakora_masala_200g": "/assets/cloudinary-shama/laziza/spices/laziza-pakora-masala-200g-44a0d4e4fa06.webp",
  "Laziza_pasanda_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-pasanda-masala-100g-c37ebcdafa60.webp",
  "Laziza_paya_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-paya-masala-100g-f0b7d135cca8.webp",
  "Laziza_plum_chutney_275g": "/assets/cloudinary-shama/laziza/spices/laziza-plum-chutney-275g-2423748c5d84.webp",
  "Laziza_qeema_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-qeema-masala-100g-55975609ca1c.webp",
  "Laziza_qorma_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-qorma-masala-100g-191e79da1fdd.webp",
  "Laziza_sabzi_bhujia_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-sabzi-bhujia-masala-100g-bd9f59fca6f9.webp",
  "Laziza_seekh_kebab_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-seekh-kebab-masala-100g-7e0591c2056f.webp",
  "Laziza_shami_kebab_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-shami-kebab-masala-100g-3064ea079c6a.webp",
  "Laziza_sheer_khurma_mix_160g": "/assets/cloudinary-shama/laziza/sweets/laziza-sheer-khurma-mix-160g-ce08f64f4580.webp",
  "Laziza_sindhi_biryani_masala_130g": "/assets/cloudinary-shama/laziza/spices/laziza-sindhi-biryani-masala-130g-905aa6224caf.webp",
  "Laziza_stew_dopiaza_masala_80g": "/assets/cloudinary-shama/laziza/spices/laziza-stew-dopiaza-masala-80g-11924dd5bcb6.webp",
  "Laziza_tandoori_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-tandoori-masala-100g-cf84f76c7815.webp",
  "Laziza_tikka_boti_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-tikka-boti-masala-100g-181d3d50d0dc.webp",
  "Laziza_vermicelli_kheer_mix_155g": "/assets/cloudinary-shama/laziza/sweets/laziza-vermicelli-kheer-mix-155g-89edb33f1341.webp",
  "Laziza_yakhni_pulao_masala_100g": "/assets/cloudinary-shama/laziza/spices/laziza-yakhni-pulao-masala-100g-337d3d4bd4cb.webp",
  "Laziza_zafrani_bombay_biryani_masala_130g": "/assets/cloudinary-shama/laziza/spices/laziza-zafrani-bombay-biryani-masala-130g-2c7affeb2be5.webp"
});

  function makeItem(id, typeKey, group) {
    const { pack } = splitProductId(id);
    const isNational = id.startsWith('National_');
    const productCode = PRODUCT_CODES[id];
    if (!productCode && group.family === 'spices') {
      throw new Error('Missing Laziza masala product code for ' + id);
    }
    return {
      category: 'laziza',
      brand: isNational ? 'National' : 'Laziza',
      subcategory: group.family,
      itemType: typeKey,
      itemTypeLabel: group.label,
      title: isNational ? titleFromId(id) : `Laziza ${titleFromId(id)}`,
      pack: productCode ? `${productCode} - ${pack}` : pack,
      image: isNational
        ? '/assets/spices/national-biryani-masala-78g.webp'
        : (LOCAL_IMAGES[id] || '/assets/shama-logo.png')
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
      image: '/assets/cloudinary-shama/laziza/spices/laziza-biryani-masala-100g-0f3666d7ad74.webp'
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
