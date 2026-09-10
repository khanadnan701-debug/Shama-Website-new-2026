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
    misc: 'https://www.pexels.com/download/video/34506445/',
    founder: 'https://www.pexels.com/download/video/34721961/'
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

  function injectFounderStoryStyles() {
    if (document.getElementById('founder-video-story-css')) return;
    const style = document.createElement('style');
    style.id = 'founder-video-story-css';
    style.textContent = `
      .founder-video-section{position:relative;padding:96px 0;overflow:hidden;background:linear-gradient(180deg,#f7f9ff 0%,#eef5ff 100%)}
      .founder-video-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 12% 12%,rgba(104,87,231,.14),transparent 30%),radial-gradient(circle at 86% 72%,rgba(255,64,133,.08),transparent 28%);pointer-events:none}
      .founder-video-shell{position:relative;z-index:1;width:min(1600px,calc(100% - 64px))!important;max-width:none!important;min-height:620px;margin:0 auto!important;padding:44px;border-radius:42px;background:linear-gradient(135deg,#eef2ff 0%,#e8e8ff 42%,#ddd8ff 100%);box-shadow:0 28px 80px rgba(42,48,101,.12);display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:46px;align-items:center;overflow:hidden;isolation:isolate}
      .founder-video-shell:after{content:"2003";position:absolute;right:-28px;bottom:-30px;font:900 170px/.75 Manrope,sans-serif;letter-spacing:-.08em;color:rgba(28,39,91,.045);z-index:0;pointer-events:none}
      .founder-video-card{position:relative;z-index:2;display:block;min-height:500px;border-radius:34px;overflow:hidden;background:#101a35;box-shadow:0 28px 70px rgba(19,29,72,.22);border:1px solid rgba(255,255,255,.62);isolation:isolate;text-decoration:none;color:#fff}
      .founder-video-card video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(1.02);filter:saturate(1.08) contrast(1.02)}
      .founder-video-card:before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(7,13,35,.05) 0%,rgba(7,13,35,.12) 42%,rgba(7,13,35,.78) 100%),radial-gradient(circle at 20% 12%,rgba(255,255,255,.26),transparent 26%)}
      .founder-video-card:after{content:"";position:absolute;inset:22px;border-radius:28px;border:1px solid rgba(255,255,255,.32);z-index:2;pointer-events:none}
      .founder-play{position:absolute;left:26px;top:26px;z-index:3;padding:11px 15px;border-radius:999px;background:rgba(255,255,255,.9);color:#17203b;font:900 12px/1 Manrope,sans-serif;box-shadow:0 16px 34px rgba(0,0,0,.18)}
      .founder-video-caption{position:absolute;left:32px;right:32px;bottom:32px;z-index:3;display:flex;flex-direction:column;gap:9px;text-shadow:0 16px 34px rgba(0,0,0,.42)}
      .founder-video-caption small{font:900 12px/1 Manrope,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#d9d5ff}
      .founder-video-caption strong{font:900 clamp(38px,4vw,66px)/.88 Manrope,sans-serif;letter-spacing:-.065em;text-transform:uppercase;color:#fff}
      .founder-video-caption span{font:800 14px/1.2 Manrope,sans-serif;color:#fff;opacity:.92}
      .founder-copy{position:relative;z-index:2;padding:20px 10px 18px}
      .founder-copy .eyebrow{color:#5f5bd7!important}
      .founder-copy h2{margin:18px 0 20px;max-width:720px;font:900 clamp(44px,4.7vw,76px)/.94 Manrope,sans-serif;letter-spacing:-.064em;color:#121d3a}
      .founder-copy h2 em{font-family:Georgia,serif;font-weight:500;font-style:italic;color:#5b57d4}
      .founder-copy p{max-width:710px;margin:0 0 26px;color:#5d6784;font:600 17px/1.75 "DM Sans",sans-serif}
      .founder-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0 0 30px}
      .founder-stats span{display:flex;flex-direction:column;gap:8px;min-height:108px;padding:18px;border:1px solid rgba(47,58,112,.1);border-radius:20px;background:rgba(255,255,255,.64);backdrop-filter:blur(10px);color:#17203b;font:900 13px/1.2 Manrope,sans-serif}
      .founder-stats b{font-size:11px;letter-spacing:.14em;color:#7670e6;text-transform:uppercase}
      .founder-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
      .founder-actions .btn{background:linear-gradient(135deg,#17264c,#6254d9)!important;color:#fff!important;border:0!important;box-shadow:0 14px 30px rgba(48,51,126,.22)}
      .founder-actions .text-link{color:#17203b!important;font-weight:900}
      html[lang="fr"] .founder-video-section .lang-en{display:none!important}html[lang="fr"] .founder-video-section .lang-fr{display:inline!important}
      @media(max-width:1020px){.founder-video-section{padding:82px 0}.founder-video-shell{width:min(1040px,calc(100% - 40px))!important;grid-template-columns:1fr;min-height:auto;padding:34px;gap:32px}.founder-video-card{min-height:460px}.founder-copy h2{font-size:clamp(42px,7vw,62px)}}
      @media(max-width:640px){.founder-video-section{padding:60px 0}.founder-video-shell{width:calc(100% - 18px)!important;padding:20px;border-radius:28px}.founder-video-card{min-height:360px;border-radius:24px}.founder-video-caption{left:22px;right:22px;bottom:24px}.founder-video-caption strong{font-size:34px}.founder-copy h2{font-size:40px}.founder-copy p{font-size:14px}.founder-stats{grid-template-columns:1fr}.founder-stats span{min-height:auto}.founder-actions .btn,.founder-actions .text-link{width:100%;justify-content:center}.founder-video-shell:after{font-size:92px}}
    `;
    document.head.appendChild(style);
  }

  function setupFounderStory() {
    const oldSection = document.querySelector('.lifestyle.section');
    if (!oldSection || document.querySelector('.founder-video-section')) return;
    injectFounderStoryStyles();
    oldSection.outerHTML = `
      <section class="founder-video-section section" aria-label="Founder story video">
        <div class="wrap founder-video-shell">
          <a class="founder-video-card" href="about.html" aria-label="Read the full story of Sardar Zahoor Iqbal">
            <video data-founder-video muted loop playsinline autoplay preload="metadata"></video>
            <span class="founder-play"><span class="lang-en">▶ Story video</span><span class="lang-fr">▶ Vidéo histoire</span></span>
            <div class="founder-video-caption">
              <small><span class="lang-en">Founded in 2003</span><span class="lang-fr">Fondée en 2003</span></small>
              <strong>Sardar Zahoor Iqbal</strong>
              <span><span class="lang-en">Click to read the full story ↗</span><span class="lang-fr">Cliquez pour lire toute l’histoire ↗</span></span>
            </div>
          </a>
          <div class="founder-copy">
            <span class="eyebrow"><span class="lang-en">Founder story</span><span class="lang-fr">Histoire du fondateur</span></span>
            <h2><span class="lang-en">Sardar Zahoor Iqbal’s vision, <em>serving France since 2003.</em></span><span class="lang-fr">La vision de Sardar Zahoor Iqbal, <em>au service de la France depuis 2003.</em></span></h2>
            <p><span class="lang-en">The foundations of Shama International were laid by Sardar Zahoor Iqbal in 2003. The company continues with a simple promise: trusted quality, authentic taste and long-term relationships.</span><span class="lang-fr">Les bases de Shama International ont été posées par Sardar Zahoor Iqbal en 2003. L’entreprise poursuit une promesse simple : qualité fiable, goût authentique et relations durables.</span></p>
            <div class="founder-stats">
              <span><b>01</b><span class="lang-en">Founded in 2003</span><span class="lang-fr">Fondée en 2003</span></span>
              <span><b>02</b><span class="lang-en">Wholesale across France</span><span class="lang-fr">Distribution en France</span></span>
              <span><b>03</b><span class="lang-en">Built on relationships</span><span class="lang-fr">Basée sur la relation</span></span>
            </div>
            <div class="founder-actions">
              <a class="btn" href="about.html"><span class="lang-en">Read full story</span><span class="lang-fr">Lire toute l’histoire</span> <span>↗</span></a>
              <a class="text-link" href="catalogue.html"><span class="lang-en">Explore catalogue</span><span class="lang-fr">Explorer le catalogue</span> <span>→</span></a>
            </div>
          </div>
        </div>
      </section>
    `;
    const video = document.querySelector('[data-founder-video]');
    playVideo(setVideo(video, videoSources.founder));
  }

  setupHeroPanels();
  setupCategoryReels();
  setupFounderStory();
})();