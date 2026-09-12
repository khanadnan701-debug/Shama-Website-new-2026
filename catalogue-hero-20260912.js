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
        <img src="https://res.cloudinary.com/wy4nkkqq/image/upload/v1789030729/jasmine-5kg.jpg" alt="">
        <span>Rice</span>
      </a>
      <a class="catalogue-hero-card two" href="spices.html" tabindex="-1">
        <img src="https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051986/star_anise.png" alt="">
        <span>Spices</span>
      </a>
      <a class="catalogue-hero-card three" href="sauces-pastes.html" tabindex="-1">
        <img src="https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_butter_chicken_curry_paste_300g.png" alt="">
        <span>Pickle & Pastes</span>
      </a>
      <div class="catalogue-hero-badge"><b>11</b><span>product<br>ranges</span></div>`;

    wrap.appendChild(visual);
  }

  mountCatalogueHeroVisual();
  document.addEventListener('DOMContentLoaded', mountCatalogueHeroVisual, { once: true });
})();
