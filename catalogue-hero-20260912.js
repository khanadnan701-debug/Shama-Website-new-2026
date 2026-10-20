(() => {
  'use strict';
  if (document.body.dataset.page !== 'catalogue') return;

  function mountCatalogueHeroVisual() {
    const wrap = document.querySelector('.page-hero > .wrap');
    if (!wrap || wrap.querySelector('.catalogue-hero-visual')) return;

    const visual = document.createElement('div');
    visual.className = 'catalogue-hero-visual';
    visual.setAttribute('aria-hidden', 'true');
    visual.innerHTML = `
      <a class="catalogue-hero-card one" href="rice.html" tabindex="-1">
        <img src="/assets/rice/shama-thai-long-grain-jasmin-rice-aaa-5kg.webp" alt="">
        <span>Rice</span>
      </a>
      <a class="catalogue-hero-card two" href="spices.html" tabindex="-1">
        <img src="/assets/spices/shama-garam-masala-powder.webp" alt="">
        <span>Spices</span>
      </a>
      <a class="catalogue-hero-card three" href="sauces-pastes.html" tabindex="-1">
        <img src="/assets/cloudinary-shama/paste/shama-butter-chicken-curry-paste-300g-10137df467ae.webp" alt="">
        <span>Pickle & Pastes</span>
      </a>
      <div class="catalogue-hero-badge"><b>21</b><span>product<br>ranges</span></div>`;

    wrap.appendChild(visual);
  }

  mountCatalogueHeroVisual();
  document.addEventListener('DOMContentLoaded', mountCatalogueHeroVisual, { once: true });
})();
