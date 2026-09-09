(() => {
  const hero = document.querySelector('.hero-panel-mode');
  if (!hero) return;

  const panels = Array.from(hero.querySelectorAll('[data-hero-panel]'));
  const mainImage = hero.querySelector('.fmcg-product-stage img');
  const detailCard = hero.querySelector('.fmcg-detail-card');
  const title = detailCard?.querySelector('h2');
  const text = detailCard?.querySelector('p');
  const link = detailCard?.querySelector('a');
  const copy = hero.querySelector('.fmcg-copy p');

  function hydrateVideo(panel) {
    const video = panel.querySelector('video');
    const src = panel.dataset.video;
    if (!video || !src || video.dataset.ready) return video;
    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.dataset.ready = 'true';
    video.load();
    return video;
  }

  function stopOtherVideos(activePanel) {
    panels.forEach(panel => {
      if (panel === activePanel) return;
      const video = panel.querySelector('video');
      if (video && !video.paused) video.pause();
    });
  }

  function activate(panel, options = {}) {
    if (!panel) return;
    panels.forEach(item => item.classList.toggle('active', item === panel));
    hero.dataset.heroCategory = panel.dataset.theme || 'frozen';

    if (mainImage && panel.dataset.image) {
      mainImage.style.opacity = '0';
      window.setTimeout(() => {
        mainImage.src = panel.dataset.image;
        mainImage.alt = panel.dataset.title || 'Shama product';
        mainImage.style.opacity = '1';
      }, options.instant ? 0 : 120);
    }

    if (title && panel.dataset.title) title.textContent = panel.dataset.title;
    if (text && panel.dataset.kicker) text.textContent = panel.dataset.kicker;
    if (link) {
      if (panel.dataset.link) link.href = panel.dataset.link;
      if (panel.dataset.cta) link.textContent = panel.dataset.cta;
    }
    if (copy && panel.dataset.copy) copy.textContent = panel.dataset.copy;

    const video = hydrateVideo(panel);
    stopOtherVideos(panel);
    if (video) video.play().catch(() => {});
  }

  panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => activate(panel));
    panel.addEventListener('focus', () => activate(panel));
    panel.addEventListener('touchstart', () => activate(panel), { passive: true });
  });

  activate(panels.find(panel => panel.dataset.theme === 'frozen') || panels[0], { instant: true });
})();
