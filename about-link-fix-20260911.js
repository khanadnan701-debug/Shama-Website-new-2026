(() => {
  'use strict';

  function fixAboutLinks() {
    document.querySelectorAll('.aboutx a[href="products.html"]').forEach((link) => {
      link.setAttribute('href', 'catalogue.html');
    });

    document.querySelectorAll('.aboutx a[href="sauces.html"]').forEach((link) => {
      link.setAttribute('href', 'sauces-pastes.html');
    });
  }

  fixAboutLinks();
  document.addEventListener('DOMContentLoaded', fixAboutLinks, { once: true });
  window.addEventListener('load', fixAboutLinks, { once: true });
})();
