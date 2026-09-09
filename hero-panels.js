(() => {
  const hero = document.querySelector('.hero-video-only, .hero-panel-mode');
  if (!hero) return;

  const panels = Array.from(hero.querySelectorAll('[data-hero-panel]'));
  if (!panels.length) return;

  const demoVideos = {
    rice: 'https://www.pexels.com/download/video/7235046/',
    spices: 'https://www.pexels.com/download/video/28283517/',
    drinks: 'https://www.pexels.com/download/video/8165885/',
    frozen: 'https://videos.pexels.com/video-files/29824279/12809900_4096_2160_25fps.mp4'
  };

  panels.forEach(panel => {
    const theme = panel.dataset.theme;
    if (theme && demoVideos[theme]) panel.dataset.video = demoVideos[theme];
  });

  function hydrateVideo(panel) {
    const video = panel.querySelector('video');
    const src = panel.dataset.video;
    if (!video || !src || video.dataset.ready) return video;
    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.dataset.ready = 'true';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = 'metadata';
    video.load();
    return video;
  }

  function activate(panel) {
    panels.forEach(item => item.classList.toggle('active', item === panel));
    hero.dataset.heroCategory = panel.dataset.theme || 'rice';
    const video = hydrateVideo(panel);
    if (video) video.play().catch(() => {});
  }

  panels.forEach((panel, index) => {
    const video = hydrateVideo(panel);
    if (video) video.play().catch(() => {});
    panel.addEventListener('mouseenter', () => activate(panel));
    panel.addEventListener('focus', () => activate(panel));
    panel.addEventListener('touchstart', () => activate(panel), { passive: true });
    if (index === 0) activate(panel);
  });
})();
