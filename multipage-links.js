(() => {
  'use strict';

  const setHrefByText = (root, label, href) => {
    if (!root) return;
    [...root.querySelectorAll('a')].forEach(link => {
      if (link.textContent.trim().toLowerCase() === label.toLowerCase()) link.href = href;
    });
  };

  const header = document.querySelector('#site-header');
  if (header) {
    const brand = header.querySelector('.brand');
    if (brand) brand.href = 'index.html';

    const nav = header.querySelector('.navlinks');
    setHrefByText(nav, 'Home', 'index.html');
    setHrefByText(nav, 'About us', 'about.html');
    setHrefByText(nav, 'Catalogue', 'catalogue.html');
    setHrefByText(nav, 'Products', 'catalogue.html');
    setHrefByText(nav, 'Contact', 'contact.html');
  }

  const footer = document.querySelector('#site-footer');
  if (footer) {
    const brand = footer.querySelector('.brand');
    if (brand) brand.href = 'index.html';
    setHrefByText(footer, 'About us', 'about.html');
    setHrefByText(footer, 'Catalogue', 'catalogue.html');
    setHrefByText(footer, 'Contact us', 'contact.html');
  }

  const heroLinks = document.querySelectorAll('.hero-actions a');
  heroLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    if (text.includes('catalogue')) link.href = 'catalogue.html';
    if (text.includes('story')) link.href = 'about.html';
  });

  const productRoutes = {
    '.hero-float-rice': 'rice.html',
    '.hero-float-frozen': 'frozen.html',
    '.hero-float-spices': 'spices.html',
    '.hero-float-daal': 'flour-lentiles.html'
  };
  Object.entries(productRoutes).forEach(([selector, href]) => {
    const link = document.querySelector(selector);
    if (link) link.href = href;
  });
})();
