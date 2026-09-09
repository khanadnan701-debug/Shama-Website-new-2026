(() => {
  const hero = document.querySelector('.hero-video-only, .hero-panel-mode');
  const videoSources = {
    rice: 'https://www.pexels.com/download/video/34721961/',
    spices: 'https://www.pexels.com/download/video/28283517/',
    drinks: 'https://www.pexels.com/download/video/8676990/',
    frozen: 'https://www.pexels.com/download/video/29824279/',
    sauces: 'https://www.pexels.com/download/video/37189266/',
    flour: 'https://www.pexels.com/download/video/4968940/',
    oils: 'https://www.pexels.com/download/video/7189208/',
    dry: 'https://www.pexels.com/download/video/7431382/',
    misc: 'https://www.pexels.com/download/video/34506445/'
  };

  const reelClassMap = {
    'reel-rice': 'rice',
    'reel-spices': 'spices',
    'reel-drinks': 'drinks',
    'reel-frozen': 'frozen',
    'reel-sauces': 'sauces',
    'reel-flour': 'flour',
    'reel-oils': 'oils',
    'reel-dry': 'dry',
    'reel-misc': 'misc'
  };

  function setVideo(video, src) {
    if (!video || !src || video.dataset.src === src) return video;
    video.pause();
    video.removeAttribute('src');
    video.innerHTML = '';
    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.dataset.src = src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = 'metadata';
    video.load();
    return video;
  }

  function playVideo(video) {
    if (!video) return;
    video.play().catch(() => {});
  }

  function setupHeroPanels() {
    if (!hero) return;
    const panels = Array.from(hero.querySelectorAll('[data-hero-panel]'));
    if (!panels.length) return;

    function activate(panel) {
      panels.forEach(item => item.classList.toggle('active', item === panel));
      hero.dataset.heroCategory = panel.dataset.theme || 'rice';
      playVideo(setVideo(panel.querySelector('video'), videoSources[panel.dataset.theme] || panel.dataset.video));
    }

    panels.forEach((panel, index) => {
      const theme = panel.dataset.theme;
      if (theme && videoSources[theme]) panel.dataset.video = videoSources[theme];
      playVideo(setVideo(panel.querySelector('video'), panel.dataset.video));
      panel.addEventListener('mouseenter', () => activate(panel));
      panel.addEventListener('focus', () => activate(panel));
      panel.addEventListener('touchstart', () => activate(panel), { passive: true });
      if (index === 0) activate(panel);
    });
  }

  function setupCategoryReels() {
    const reels = Array.from(document.querySelectorAll('.reel-card'));
    reels.forEach(reel => {
      const className = Object.keys(reelClassMap).find(name => reel.classList.contains(name));
      const key = className ? reelClassMap[className] : null;
      const video = setVideo(reel.querySelector('video'), key ? videoSources[key] : null);
      playVideo(video);
    });
  }

  setupHeroPanels();
  setupCategoryReels();
})();