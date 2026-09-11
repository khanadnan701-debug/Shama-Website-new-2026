(() => {
  'use strict';
  if (document.body.dataset.category !== 'flour') return;
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const flourTitles = new Set([
    'Shama Wheat Flour',
    'Shama Multigrain Atta',
    'Shama Gram Flour',
    'Shama Chakki Gold Atta',
    'Shama Chapati Atta T110'
  ]);

  const lentilProducts = [
    { category: 'flour', title: 'Shama Desi Black Eye Beans', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131919/Shama_desi_black_eye_beans_1kg.png' },
    { category: 'flour', title: 'Shama Desi Masoor Dal Whole', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131920/Shama_desi_masoor_dal_whole_1kg.png' },
    { category: 'flour', title: 'Shama Desi Moong Dal', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131920/Shama_desi_moong_dal_1kg.png' },
    { category: 'flour', title: 'Shama Desi Moong Whole', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131920/Shama_desi_moong_whole_1kg.png' },
    { category: 'flour', title: 'Shama Desi Masoor Dal', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131921/Shama_desi_masoor_dal_1kg.png' },
    { category: 'flour', title: 'Shama Desi Dal Whole', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131921/Shama_desi_dal_whole_1kg.png' },
    { category: 'flour', title: 'Shama Desi Chana Dal', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131921/Shama_desi_chana_dal_1kg.png' },
    { category: 'flour', title: 'Shama Desi Kidney Beans', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131922/Shama_desi_kidney_beans_1kg.png' },
    { category: 'flour', title: 'Shama Desi Rajma', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131922/Shama_desi_rajma_1kg.png' },
    { category: 'flour', title: 'Shama Desi Urad Dal', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131923/Shama_desi_urad_dal_1kg.png' },
    { category: 'flour', title: 'Shama Desi Toor Dal', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131923/Shama_desi_toor_dal_1kg.png' },
    { category: 'flour', title: 'Shama Desi White Chick Peas', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131924/Shama_desi_white_chick_peas_1kg.png' },
    { category: 'flour', title: 'Shama Desi Kala Chana', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131925/Shama_desi_kala_chana_1kg.png' },
    { category: 'flour', title: 'Shama Desi Urad Whole', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131926/Shama_desi_urad_whole_1kg.png' },
    { category: 'flour', title: 'Shama Desi Urad Dal Chilka', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131926/Shama_desi_urad_dal_chilka_1kg.png' },
    { category: 'flour', title: 'Shama Desi Urad Gota', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131927/Shama_desi_urad_gota1kg.png' },
    { category: 'flour', title: 'Shama Desi Yellow Split Peas', pack: '1kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131927/Shama_desi_yellow_split_peas_1kg.png' },
    { category: 'flour', title: 'Shama Masoor Dal', pack: '5kg', image: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131928/Shama_masoor_dal_5kg.png' }
  ];

  const preserved = productData.filter(item => item.category !== 'flour' || flourTitles.has(item.title));
  productData.splice(0, productData.length, ...preserved, ...lentilProducts);

  const rerender = () => {
    if (typeof window.shamaRerenderSimpleProducts === 'function') {
      window.shamaRerenderSimpleProducts();
    }
  };

  document.addEventListener('shama:product-images-updated', rerender, { once: true });
  window.addEventListener('load', rerender, { once: true });
})();
