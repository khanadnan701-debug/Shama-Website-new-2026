(() => {
  'use strict';
  if (document.body.dataset.category !== 'flour') return;
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const dualSizeTitles = new Set([
    'Shama Desi Moong Whole',
    'Shama Desi Moong Dal',
    'Shama Desi Chana Dal',
    'Shama Desi Urad Dal',
    'Shama Desi White Chick Peas',
    'Shama Desi Kidney Beans',
    'Shama Desi Black Eye Beans',
    'Shama Desi Masoor Dal Whole',
    'Shama Desi Urad Whole',
    'Shama Desi Toor Dal'
  ]);

  // Inventory screenshot codes for confidently identified lentil pack variants.
  // Product-specific IDs avoid conflating similarly named washed / unwashed ranges.
  const PRODUCT_PACK_CODES = Object.freeze({
    'Shama_desi_black_eye_beans_1kg': '2004D - 1kg / 4299A - 2kg',
    'Shama_desi_chana_dal_1kg': '19147 - 1kg',
    'Shama_desi_toor_dal_1kg': '19148 - 1kg / 7708A - 2kg',
    'Shama_desi_kidney_beans_1kg': '2073C - 1kg / 3940C - 2kg',
    'Shama_desi_masoor_dal_whole_1kg': '1939A - 1kg / 4695A - 2kg',
    'Shama_desi_kala_chana_1kg': '1946A - 1kg / 2028C - 2kg',
    'Shama_desi_moong_whole_1kg': '2103C - 1kg / 0802A - 2kg',
    'Shama_desi_moong_dal_1kg': '19146 - 1kg',
    'Shama_desi_rajma_1kg': '19143 - 1kg',
    'Shama_desi_white_chick_peas_1kg': '1953A - 1kg / 3872C - 2kg',
    'Shama_desi_urad_dal_chilka_1kg': '2110C - 1kg',
    'Shama_desi_urad_gota1kg': '19144 - 1kg',
    'Shama_desi_urad_whole_1kg': '2011 - 1kg / 4701A - 2kg',
    'Shama_masoor_dal_5kg': '1984A - 5kg'
  });

  const lentilProducts = [
    ['Shama Desi Black Eye Beans','Shama_desi_black_eye_beans_1kg'],
    ['Shama Desi Urad Dal','Shama_desi_urad_dal_1kg_2'],
    ['Shama Desi Chana Dal','Shama_desi_chana_dal_1kg'],
    ['Shama Desi Toor Dal','Shama_desi_toor_dal_1kg'],
    ['Shama Desi Kidney Beans','Shama_desi_kidney_beans_1kg'],
    ['Shama Desi Masoor Dal','Shama_desi_masoor_dal_1kg'],
    ['Shama Desi Dal Whole','Shama_desi_dal_whole_1kg'],
    ['Shama Desi Urad Dal','Shama_desi_urad_dal_1kg'],
    ['Shama Desi Urad Whole','Shama_desi_urad_1kg'],
    ['Shama Desi Kala Chana','Shama_desi_kala_chana_1kg'],
    ['Shama Desi Moong Whole','Shama_desi_moong_whole_1kg'],
    ['Shama Desi Moong Dal','Shama_desi_moong_dal_1kg'],
    ['Shama Desi Masoor Dal Whole','Shama_desi_masoor_dal_whole_1kg'],
    ['Shama Desi Rajma','Shama_desi_rajma_1kg'],
    ['Shama Desi White Chick Peas','Shama_desi_white_chick_peas_1kg'],
    ['Shama Desi Yellow Split Peas','Shama_desi_yellow_split_peas_1kg'],
    ['Shama Desi Masoor Dal','Shama_desi_masoor_dal_1kg_2'],
    ['Shama Desi Moong Dal','Shama_desi_moong_dal_1kg_2'],
    ['Shama Desi Chana Dal','Shama_desi_chana_dal_1kg_2'],
    ['Shama Desi Urad Dal Chilka','Shama_desi_urad_dal_chilka_1kg'],
    ['Shama Masoor Dal','Shama_masoor_dal_5kg'],
    ['Shama Desi Urad Gota','Shama_desi_urad_gota1kg'],
    ['Shama Desi Urad Whole','Shama_desi_urad_whole_1kg'],
    ['Shama Desi Toor Dal','Shama_desi_toor_dal_1kg_2']
  ].map(([title, id]) => ({
    category:'flour',
    title,
    pack: PRODUCT_PACK_CODES[id] || (dualSizeTitles.has(title) ? '1kg & 2kg' : '1kg'),
    image:`/assets/lentils/${id.replaceAll('_','-').toLowerCase()}.webp`
  }));

  const nonFlourProducts = productData.filter(item => item.category !== 'flour');
  productData.splice(0, productData.length, ...nonFlourProducts, ...lentilProducts);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(item => item.slug === 'flour');
    if (category) {
      category.name = 'Flour & Lentiles';
      category.desc = 'A complete range of flour, lentiles, beans, chickpeas and peas';
    }
  }

  // product-simple.js loads after this file, so it will render the final combined
  // dataset once. Do not re-render again on window load, because that would
  // replace the Atta/Daal grouped layout built later.
})();
