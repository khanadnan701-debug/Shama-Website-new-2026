(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;

  const nonSauces = productData.filter((item) => item.category !== 'sauces');
  const sauces = productData.filter((item) => item.category === 'sauces');

  const targetIndex = sauces.findIndex((item) =>
    String(item.title || '').toLowerCase().includes('mixed pickle') &&
    String(item.pack || '').toLowerCase().includes('4kg')
  );

  if (targetIndex < 0) return;

  const [target] = sauces.splice(targetIndex, 1);
  let lastPickleIndex = -1;
  sauces.forEach((item, index) => {
    if (String(item.title || '').toLowerCase().includes('pickle')) lastPickleIndex = index;
  });

  sauces.splice(lastPickleIndex + 1, 0, target);
  productData.splice(0, productData.length, ...nonSauces, ...sauces);
})();
