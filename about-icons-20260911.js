(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const heroFounderImage = 'https://static.wixstatic.com/media/00ae33_fd233dff28b9418ca949b36589204448~mv2_d_2914_3530_s_4_2.jpg';

  const icons = {
    founded: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1h10l-2 3 2 3H5"/><path d="M3 21h5"/></svg>',
    trust: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.7 2.9 8.3 7 10 4.1-1.7 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12S9.7 18.5 12 21"/></svg>',
    france: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>',
    company: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V8l8-5 8 5v13"/><path d="M8 21v-6h8v6M8 10h.01M12 10h.01M16 10h.01"/></svg>',
    award: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="5"/><path d="m9 13-2 8 5-3 5 3-2-8"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></svg>',
    growth: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18 10 12l4 4 6-8"/><path d="M15 8h5v5"/></svg>'
  };

  function addIcon(target, icon, className = 'aboutv-ui-icon') {
    if (!target || target.querySelector(`.${className}`)) return;
    const span = document.createElement('span');
    span.className = className;
    span.innerHTML = icon;
    target.prepend(span);
  }

  function mount() {
    const heroPhoto = document.querySelector('.aboutv-photo.main img');
    if (heroPhoto && heroPhoto.dataset.altFounder !== '1') {
      heroPhoto.src = heroFounderImage;
      heroPhoto.alt = 'Sardar Zahoor Iqbal — Shama International';
      heroPhoto.dataset.altFounder = '1';
    }

    const stats = document.querySelectorAll('.aboutv-stat');
    addIcon(stats[0], icons.founded);
    addIcon(stats[1], icons.trust);
    addIcon(stats[2], icons.globe);

    const founderPoints = document.querySelectorAll('.aboutv-point');
    addIcon(founderPoints[0], icons.france);
    addIcon(founderPoints[1], icons.company);
    addIcon(founderPoints[2], icons.award);

    const milestones = document.querySelectorAll('.aboutv-milestone-copy');
    addIcon(milestones[0], icons.france, 'aboutv-milestone-icon');
    addIcon(milestones[1], icons.company, 'aboutv-milestone-icon');
    addIcon(milestones[2], icons.award, 'aboutv-milestone-icon');
    addIcon(milestones[3], icons.growth, 'aboutv-milestone-icon');

    const videoThumbs = document.querySelectorAll('.aboutv-video-thumb i');
    videoThumbs.forEach((node) => {
      node.innerHTML = icons.play;
      node.classList.add('aboutv-play-icon');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
  setTimeout(mount, 120);
  setTimeout(mount, 600);
})();
