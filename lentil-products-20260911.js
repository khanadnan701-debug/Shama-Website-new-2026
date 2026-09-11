(() => {
  'use strict';
  if (document.body.dataset.category !== 'flour') return;
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const base = 'https://res.cloudinary.com/wy4nkkqq/image/upload/';
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
    pack:'1kg',
    image:`${base}v1789155082/${id}.png`
  }));

  const nonFlourProducts = productData.filter(item => item.category !== 'flour');
  productData.splice(0, productData.length, ...nonFlourProducts, ...lentilProducts);

  if (typeof categories !== 'undefined' && Array.isArray(categories)) {
    const category = categories.find(item => item.slug === 'flour');
    if (category) {
      category.name = 'Lentils';
      category.desc = 'A complete range of Shama lentils, dals, beans and peas';
    }
  }

  const rerender = () => {
    if (typeof window.shamaRerenderSimpleProducts === 'function') {
      window.shamaRerenderSimpleProducts();
    }
  };

  rerender();
  window.addEventListener('load', rerender, { once:true });
})();
