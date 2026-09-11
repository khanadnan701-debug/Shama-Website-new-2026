(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  // Different founder/public photo already used on Shama's original About page.
  const heroFounderImage = 'https://static.wixstatic.com/media/00ae33_2045f9d35e4a4da395ad4833d2b3bd91~mv2.jpg';

  const icons = {
    founded: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1h10l-2 3 2 3H5"/><path d="M3 21h5"/></svg>',
    trust: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.7 2.9 8.3 7 10 4.1-1.7 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12S9.7 18.5 12 21"/></svg>',
    france: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>',
    company: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V8l8-5 8 5v13"/><path d="M8 21v-6h8v6M8 10h.01M12 10h.01M16 10h.01"/></svg>',
    award: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="5"/><path d="m9 13-2 8 5-3 5 3-2-8"/></svg>',
    growth: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18 10 12l4 4 6-8"/><path d="M15 8h5v5"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></svg>'
  };

  function installStyles() {
    if (document.getElementById('about-live-fix-style-v2')) return;
    const style = document.createElement('style');
    style.id = 'about-live-fix-style-v2';
    style.textContent = `
      .aboutv-live-icon{width:38px;height:38px;display:grid;place-items:center;margin-bottom:10px;border-radius:12px;background:rgba(255,255,255,.12);color:#ff8aaa}
      .aboutv-live-icon svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
      .aboutv-stat .aboutv-live-icon{width:32px;height:32px;margin:0 0 8px;background:rgba(255,255,255,.12)}
      .aboutv-point .aboutv-live-icon{background:#fff;color:#17284d;box-shadow:0 8px 22px rgba(21,32,57,.08)}
      .aboutv-milestone-copy .aboutv-live-icon{position:absolute;right:0;bottom:0;margin:0;background:rgba(255,255,255,.14);backdrop-filter:blur(9px);color:#fff}
      .aboutv-video-thumb i.aboutv-live-play{display:grid!important;place-items:center!important}
      .aboutv-video-thumb i.aboutv-live-play svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
      .aboutv-photo.main img[data-about-hero-v2="1"]{object-position:center 24%!important}
    `;
    document.head.appendChild(style);
  }

  function addIcon(target, svg, className = 'aboutv-live-icon') {
    if (!target) return;
    target.querySelectorAll('.aboutv-ui-icon,.aboutv-milestone-icon,.aboutv-live-icon').forEach(node => node.remove());
    const icon = document.createElement('span');
    icon.className = className;
    icon.innerHTML = svg;
    target.prepend(icon);
  }

  function applyFix() {
    installStyles();

    const heroPhoto = document.querySelector('.aboutv-photo.main img');
    if (heroPhoto) {
      if (heroPhoto.getAttribute('src') !== heroFounderImage) heroPhoto.src = heroFounderImage;
      heroPhoto.removeAttribute('srcset');
      heroPhoto.setAttribute('data-about-hero-v2', '1');
      heroPhoto.alt = 'Sardar Zahoor Iqbal - Shama International';
      heroPhoto.loading = 'eager';
    }

    const stats = document.querySelectorAll('.aboutv-stat');
    addIcon(stats[0], icons.founded);
    addIcon(stats[1], icons.trust);
    addIcon(stats[2], icons.globe);

    const points = document.querySelectorAll('.aboutv-point');
    addIcon(points[0], icons.france);
    addIcon(points[1], icons.company);
    addIcon(points[2], icons.award);

    const milestones = document.querySelectorAll('.aboutv-milestone-copy');
    addIcon(milestones[0], icons.france);
    addIcon(milestones[1], icons.company);
    addIcon(milestones[2], icons.award);
    addIcon(milestones[3], icons.growth);

    document.querySelectorAll('.aboutv-video-thumb i').forEach(node => {
      node.classList.add('aboutv-live-play');
      node.innerHTML = icons.play;
    });
  }

  const main = document.querySelector('#page-content');
  if (main) {
    const observer = new MutationObserver(() => requestAnimationFrame(applyFix));
    observer.observe(main, { childList: true, subtree: true });
  }

  applyFix();
  requestAnimationFrame(applyFix);
  window.addEventListener('load', applyFix, { once: true });
  setTimeout(applyFix, 100);
  setTimeout(applyFix, 500);
  setTimeout(applyFix, 1500);
})();
