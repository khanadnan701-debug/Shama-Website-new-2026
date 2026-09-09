(() => {
  const hero = document.querySelector('.hero-video-only, .hero-panel-mode');
  if (!hero) return;

  const panels = Array.from(hero.querySelectorAll('[data-hero-panel]'));
  if (!panels.length) return;

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
