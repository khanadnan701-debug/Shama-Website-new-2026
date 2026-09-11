(() => {
  'use strict';

  if (document.body.dataset.page !== 'about') return;

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'about-premium-20260911.css?v=20260911-3';
  document.head.appendChild(css);

  function buildAboutHero() {
    const hero = document.querySelector('.page-hero');
    if (!hero || hero.dataset.premiumReady === '1') return;
    const wrap = hero.querySelector('.wrap');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="about-hero-copy">
        <div class="crumbs"><a href="index.html">Home</a> / About us</div>
        <span class="eyebrow light">Shama International</span>
        <h1>Built on belief.</h1>
        <p>A story of courage, relationships and authentic flavour—growing from one vision in 2003.</p>
        <div class="about-hero-meta" aria-label="Shama highlights">
          <span><b>2003</b> Founded in France</span>
          <span><b>20+</b> Years of trust</span>
          <span><b>9</b> Authentic ranges</span>
        </div>
      </div>
      <div class="about-hero-visual" aria-label="Shama International story">
        <div class="about-hero-orbit"></div>
        <div class="about-since-card"><b>2003</b><span>Rooted in flavour<br>built on trust</span></div>
        <div class="about-hero-photo">
          <img src="https://static.wixstatic.com/media/00ae33_6b312b11ad8f4578af43615631d040f8~mv2_d_1595_1600_s_2.jpg" alt="Shama International founder">
          <div class="about-hero-photo-label"><small>The story behind Shama</small><strong>Family roots. European ambition.</strong></div>
        </div>
        <img class="about-hero-product" src="https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064691/Shama_thai_jasmine_1_volta_20kg.png" alt="Shama Thai Jasmine Rice">
      </div>`;

    hero.dataset.premiumReady = '1';
  }

  buildAboutHero();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildAboutHero, { once: true });
  }
  window.addEventListener('load', buildAboutHero, { once: true });
  setTimeout(buildAboutHero, 50);
  setTimeout(buildAboutHero, 250);
})();
