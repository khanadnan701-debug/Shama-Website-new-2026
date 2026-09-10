(() => {
  'use strict';

  const replacementVideos = {
    spices: 'https://www.pexels.com/download/video/7540760/',
    drinks: 'https://www.pexels.com/download/video/8677740/'
  };

  function setVideo(video, src) {
    if (!video || !src || video.dataset.heroRefreshSrc === src) return;
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

  function refreshHeroVideos() {
    const pairs = [
      ['[data-hero-panel][data-theme="spices"] video', replacementVideos.spices],
      ['.reel-card.reel-spices video', replacementVideos.spices],
      ['[data-hero-panel][data-theme="drinks"] video', replacementVideos.drinks],
      ['.reel-card.reel-drinks video', replacementVideos.drinks]
    ];

    pairs.forEach(([selector, src]) => {
      document.querySelectorAll(selector).forEach(video => setVideo(video, src));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshHeroVideos, { once: true });
  } else {
    refreshHeroVideos();
  }

  window.addEventListener('load', refreshHeroVideos, { once: true });
  setTimeout(refreshHeroVideos, 250);
  setTimeout(refreshHeroVideos, 1200);
})();
