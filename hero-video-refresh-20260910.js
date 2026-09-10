(() => {
  'use strict';

  const replacementVideos = {
    spices: 'https://www.pexels.com/download/video/7540760/',
    drinks: 'https://www.pexels.com/download/video/8677740/'
  };

  function setVideo(video, src) {
    if (!video || !src) return;
    if (video.dataset.heroRefreshSrc === src && video.dataset.src === src) {
      video.play().catch(() => {});
      return;
    }

    try { video.pause(); } catch (_) {}
    video.innerHTML = '';
    video.removeAttribute('src');

    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);

    video.dataset.heroRefreshSrc = src;
    video.dataset.src = src;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.load();
    video.play().catch(() => {});
  }

  function bindHeroPanel(selector, src) {
    document.querySelectorAll(selector).forEach(panel => {
      const video = panel.querySelector('video');
      if (!video) return;

      const forceReplacement = () => {
        setTimeout(() => setVideo(video, src), 0);
      };

      if (panel.dataset.heroRefreshBound !== src) {
        panel.addEventListener('mouseenter', forceReplacement);
        panel.addEventListener('pointerenter', forceReplacement);
        panel.addEventListener('focus', forceReplacement);
        panel.addEventListener('touchstart', forceReplacement, { passive: true });
        panel.dataset.heroRefreshBound = src;
      }

      setVideo(video, src);
    });
  }

  function refreshHeroVideos() {
    bindHeroPanel('[data-hero-panel][data-theme="spices"]', replacementVideos.spices);
    bindHeroPanel('[data-hero-panel][data-theme="drinks"]', replacementVideos.drinks);

    document.querySelectorAll('.reel-card.reel-spices video').forEach(video => setVideo(video, replacementVideos.spices));
    document.querySelectorAll('.reel-card.reel-drinks video').forEach(video => setVideo(video, replacementVideos.drinks));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshHeroVideos, { once: true });
  } else {
    refreshHeroVideos();
  }

  window.addEventListener('load', refreshHeroVideos, { once: true });
  setTimeout(refreshHeroVideos, 100);
  setTimeout(refreshHeroVideos, 500);
  setTimeout(refreshHeroVideos, 1500);
})();
