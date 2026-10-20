
/* The Shama product reel and catalogue-powered statistics.
 * Images are verified self-hosted assets; no external image CDN or paid library. */
(() => {
  'use strict';
  if (document.body.dataset.page !== 'brands') return;
  const featured = [
    ['Shama Sella Rice','rice','/assets/rice/shama-super-kernal-par-boiled-sella-rice-5kg.webp'],
    ['Shama Garam Masala','spices','/assets/spices/shama-garam-masala-powder.webp'],
    ['Shama Basil Seed Mango','beverages','/assets/beverages/shama-basil-seed-drink-mango.webp'],
    ['Shama Chicken Samosa','frozen','/assets/frozen/shama-chicken-samosa-20.webp'],
    ['Shama Besan','flour','/assets/flour/shama-besan-1kg.webp'],
    ['Shama Ajwa Dates','dates','/assets/cloudinary-shama/dates/shama-ajwa-dates-800g-734a417a7b85.webp'],
    ['Shama Kesar Mango','preserves','/assets/preserves/shama-kesar-mango-plup-kesar.webp'],
    ['Shama Rose Water','cosmetics','/assets/cloudinary-shama/cosmetics/shama-rose-water-250ml-9fc6b2e6e236.webp'],
    ['Shama Pista Falooda','beverages','/assets/beverages/shama-falooda-pista.webp'],
    ['Shama White Gold','rice','/assets/rice/shama-white-gold-basmati-rice-5kg.webp'],
    ['Shama Falsa','frozen','/assets/frozen/shama-falsa.webp'],
    ['Shama Mustard Oil','oils','/assets/cloudinary-shama/oils/shama-mustard-oil-200ml-76cb0c80ce8f.webp'],
    ['Shama Extra Long Rice','rice','/assets/rice/shama-basmati-rice-extra-long-10kg.webp'],
    ['Shama Karela','frozen','/assets/frozen/shama-karela.webp']
  ];
  const linkByCategory = {
    rice:'rice.html',spices:'spices.html',beverages:'beverages.html',
    frozen:'frozen.html',flour:'flour-lentiles.html',dates:'dates.html',
    preserves:'preserves.html',cosmetics:'cosmetics.html',oils:'oils.html'
  };
  const host = document.getElementById('sbr-reel-track');
  if (host) {
    for (let pass=0;pass<2;pass++) {
      const line = document.createElement('div');
      line.className = 'sbr-reel-set';
      if (pass) line.setAttribute('aria-hidden','true');
      featured.forEach(([title,category,image]) => {
        const a = document.createElement('a');
        a.className = 'sbr-reel-tile';
        a.href = linkByCategory[category] || 'catalogue.html';
        if (pass) a.tabIndex = -1;
        const img = document.createElement('img');
        img.src = image;
        img.alt = title;
        img.loading = pass ? 'lazy' : 'eager';
        img.decoding = 'async';
        const label = document.createElement('span');
        label.textContent = title;
        a.append(img,label);
        line.append(a);
      });
      host.append(line);
    }
  }
  const all = typeof productData !== 'undefined' && Array.isArray(productData) ? productData : [];
  const uniqueProducts = new Set();
  const categories = new Set();
  all.forEach(item => {
    if (!item || !item.title || !item.category) return;
    uniqueProducts.add([item.category,item.title,item.pack||''].join('|').toLowerCase());
    categories.add(item.category);
  });
  const brands = document.querySelectorAll('#sbr-brand-grid .sbr-brand-choice').length;
  const counts = {
    products:uniqueProducts.size,
    brands,
    categories:categories.size
  };
  Object.entries(counts).forEach(([key,value]) => {
    const node = document.querySelector('[data-sbr-stat="'+key+'"]');
    if (node) node.textContent = value ? value.toLocaleString('en-US') : '-';
  });
})();
