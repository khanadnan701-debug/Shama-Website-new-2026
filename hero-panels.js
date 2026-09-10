(() => {
  const hero = document.querySelector('.hero-video-only, .hero-panel-mode');
  const founderPhoto = 'https://static.wixstatic.com/media/00ae33_6b312b11ad8f4578af43615631d040f8~mv2_d_1595_1600_s_2.jpg/v1/fill/w_900,h_900,al_c,q_90,usm_0.66_1.00_0.01/Sardar%20Zahoor%20Iqbal%20Shama%20International_.jpg';
  const founderAward = 'https://static.wixstatic.com/media/00ae33_fd233dff28b9418ca949b36589204448~mv2_d_2914_3530_s_4_2.jpg/v1/crop/x_0,y_595,w_2914,h_2911/fill/w_600,h_600,al_c,q_90,usm_0.66_1.00_0.01/5EB82696-F3E7-4E27-BB7F-950CB2255BE4.jpg';
  const biryaniVideo = 'https://www.pexels.com/download/video/4912725/';

  const videoSources = {
    rice: biryaniVideo,
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

  function setupStoryVideoSection() {
    const mainCard = document.querySelector('.story-video-main');
    if (!mainCard) return;
    playVideo(setVideo(mainCard.querySelector('video'), biryaniVideo));
    const label = mainCard.querySelector('.story-video-label b');
    const note = mainCard.querySelector('.story-video-label small');
    if (label) label.textContent = 'Biryani being served';
    if (note) note.textContent = 'Fresh from the kitchen';
  }

  function injectFounderStoryStyles() {
    if (document.getElementById('founder-video-story-css')) return;
    const style = document.createElement('style');
    style.id = 'founder-video-story-css';
    style.textContent = `
      .founder-video-section{position:relative;padding:96px 0;overflow:hidden;background:linear-gradient(180deg,#f7f9ff 0%,#eef5ff 100%)}
      .founder-video-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 12% 12%,rgba(104,87,231,.14),transparent 30%),radial-gradient(circle at 86% 72%,rgba(255,64,133,.08),transparent 28%);pointer-events:none}
      .founder-video-shell{position:relative;z-index:1;width:min(1600px,calc(100% - 64px))!important;max-width:none!important;min-height:620px;margin:0 auto!important;padding:44px;border-radius:42px;background:linear-gradient(135deg,#eef2ff 0%,#e8e8ff 42%,#ddd8ff 100%);box-shadow:0 28px 80px rgba(42,48,101,.12);display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:46px;align-items:center;overflow:hidden;isolation:isolate}
      .founder-video-shell:after{content:"2003";position:absolute;right:-28px;bottom:-30px;font:900 170px/.75 Manrope,sans-serif;letter-spacing:-.08em;color:rgba(28,39,91,.045);z-index:0;pointer-events:none}
      .founder-media-card{position:relative;z-index:2;display:block;min-height:500px;border-radius:34px;overflow:hidden;background:#101a35;box-shadow:0 28px 70px rgba(19,29,72,.22);border:1px solid rgba(255,255,255,.62);isolation:isolate;text-decoration:none;color:#fff}
      .founder-media-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(1.015);filter:saturate(1.05) contrast(1.02)}
      .founder-media-card:before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(7,13,35,.03) 0%,rgba(7,13,35,.12) 42%,rgba(7,13,35,.78) 100%),radial-gradient(circle at 20% 12%,rgba(255,255,255,.26),transparent 26%)}
      .founder-media-card:after{content:"";position:absolute;inset:22px;border-radius:28px;border:1px solid rgba(255,255,255,.32);z-index:2;pointer-events:none}
      .founder-profile-tag{position:absolute;left:26px;top:26px;z-index:3;padding:11px 15px;border-radius:999px;background:rgba(255,255,255,.9);color:#17203b;font:900 12px/1 Manrope,sans-serif;box-shadow:0 16px 34px rgba(0,0,0,.18)}
      .founder-award-thumb{position:absolute;right:26px;top:26px;z-index:3;width:92px;height:92px;border-radius:24px;overflow:hidden;border:3px solid rgba(255,255,255,.82);box-shadow:0 18px 38px rgba(0,0,0,.28);background:#fff}
      .founder-award-thumb img{position:static;width:100%;height:100%;object-fit:cover;filter:none;transform:none}
      .founder-video-caption{position:absolute;left:32px;right:32px;bottom:32px;z-index:3;display:flex;flex-direction:column;gap:9px;text-shadow:0 16px 34px rgba(0,0,0,.42)}
      .founder-video-caption small{font:900 12px/1 Manrope,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#d9d5ff}
      .founder-video-caption strong{font:900 clamp(34px,3.4vw,58px)/.88 Manrope,sans-serif;letter-spacing:-.065em;text-transform:uppercase;color:#fff}
      .founder-video-caption span{font:800 14px/1.2 Manrope,sans-serif;color:#fff;opacity:.92}
      .founder-copy{position:relative;z-index:2;padding:20px 10px 18px}
      .founder-copy .eyebrow{color:#5f5bd7!important}
      .founder-copy h2{margin:18px 0 20px;max-width:760px;font:900 clamp(44px,4.4vw,70px)/.94 Manrope,sans-serif;letter-spacing:-.064em;color:#121d3a}
      .founder-copy h2 em{font-family:Georgia,serif;font-weight:500;font-style:italic;color:#5b57d4}
      .founder-copy p{max-width:760px;margin:0 0 18px;color:#5d6784;font:650 16px/1.72 "DM Sans",sans-serif}
      .founder-copy .founder-detail{margin-bottom:26px;color:#44506f;font-weight:650}
      .founder-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0 0 30px}
      .founder-stats span{display:flex;flex-direction:column;gap:8px;min-height:112px;padding:18px;border:1px solid rgba(47,58,112,.1);border-radius:20px;background:rgba(255,255,255,.64);backdrop-filter:blur(10px);color:#17203b;font:900 13px/1.24 Manrope,sans-serif}
      .founder-stats b{font-size:11px;letter-spacing:.14em;color:#7670e6;text-transform:uppercase}
      .founder-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
      .founder-actions .btn{background:linear-gradient(135deg,#17264c,#6254d9)!important;color:#fff!important;border:0!important;box-shadow:0 14px 30px rgba(48,51,126,.22)}
      .founder-actions .text-link{color:#17203b!important;font-weight:900}
      html[lang="fr"] .founder-video-section .lang-en{display:none!important}html[lang="fr"] .founder-video-section .lang-fr{display:inline!important}
      @media(max-width:1020px){.founder-video-section{padding:82px 0}.founder-video-shell{width:min(1040px,calc(100% - 40px))!important;grid-template-columns:1fr;min-height:auto;padding:34px;gap:32px}.founder-media-card{min-height:460px}.founder-copy h2{font-size:clamp(42px,7vw,62px)}}
      @media(max-width:640px){.founder-video-section{padding:60px 0}.founder-video-shell{width:calc(100% - 18px)!important;padding:20px;border-radius:28px}.founder-media-card{min-height:360px;border-radius:24px}.founder-video-caption{left:22px;right:22px;bottom:24px}.founder-video-caption strong{font-size:31px}.founder-copy h2{font-size:38px}.founder-copy p{font-size:14px}.founder-stats{grid-template-columns:1fr}.founder-stats span{min-height:auto}.founder-actions .btn,.founder-actions .text-link{width:100%;justify-content:center}.founder-video-shell:after{font-size:92px}.founder-award-thumb{width:72px;height:72px;right:18px;top:18px}}
    `;
    document.head.appendChild(style);
  }

  function setupFounderStory() {
    const oldSection = document.querySelector('.lifestyle.section');
    if (!oldSection || document.querySelector('.founder-video-section')) return;
    injectFounderStoryStyles();
    oldSection.outerHTML = `
      <section class="founder-video-section section" aria-label="Founder story profile">
        <div class="wrap founder-video-shell">
          <a class="founder-media-card" href="about.html" aria-label="Read the full story of Sardar Zahoor Iqbal">
            <img src="${founderPhoto}" alt="Sardar Zahoor Iqbal, founder of Shama International">
            <span class="founder-profile-tag"><span class="lang-en">Founder profile</span><span class="lang-fr">Profil fondateur</span></span>
            <span class="founder-award-thumb"><img src="${founderAward}" alt="Sardar Zahoor Iqbal award moment"></span>
            <div class="founder-video-caption">
              <small><span class="lang-en">From Fateh Jang to France</span><span class="lang-fr">De Fateh Jang à la France</span></small>
              <strong>Sardar Zahoor Iqbal</strong>
              <span><span class="lang-en">Click to read the full story ↗</span><span class="lang-fr">Cliquez pour lire toute l’histoire ↗</span></span>
            </div>
          </a>
          <div class="founder-copy">
            <span class="eyebrow"><span class="lang-en">Founder story</span><span class="lang-fr">Histoire du fondateur</span></span>
            <h2><span class="lang-en">A journey of belief, <em>from Pakistan to France.</em></span><span class="lang-fr">Un parcours de conviction, <em>du Pakistan à la France.</em></span></h2>
            <p><span class="lang-en">Sardar Zahoor Iqbal came from a humble background in Pakistan and started business from a young age with a grocery shop in Fateh Jang. In 1988 he began a new chapter in France, later building Shama International in 2003 under the name of his elder daughter Shama.</span><span class="lang-fr">Issu d’un milieu modeste au Pakistan, Sardar Zahoor Iqbal s’est lancé très jeune dans le commerce avec une épicerie à Fateh Jang. En 1988, il commence un nouveau chapitre en France, puis fonde Shama International en 2003 sous le nom de sa fille aînée, Shama.</span></p>
            <p class="founder-detail"><span class="lang-en">Today the story continues through trusted quality, authentic taste, long-term supplier relationships and a growing Shama product range for homes, retailers and restaurants across France.</span><span class="lang-fr">Aujourd’hui, cette histoire continue à travers une qualité fiable, un goût authentique, des relations durables avec les partenaires et une gamme Shama en développement pour les foyers, commerces et restaurants en France.</span></p>
            <div class="founder-stats">
              <span><b>1988</b><span class="lang-en">Started a new life in France</span><span class="lang-fr">Nouvelle vie en France</span></span>
              <span><b>2003</b><span class="lang-en">Shama food business began</span><span class="lang-fr">Début de Shama</span></span>
              <span><b>2019</b><span class="lang-en">Pakistan Achievement Award</span><span class="lang-fr">Pakistan Achievement Award</span></span>
            </div>
            <div class="founder-actions">
              <a class="btn" href="about.html"><span class="lang-en">Read full founder story</span><span class="lang-fr">Lire toute l’histoire</span> <span>↗</span></a>
              <a class="text-link" href="catalogue.html"><span class="lang-en">Explore catalogue</span><span class="lang-fr">Explorer le catalogue</span> <span>→</span></a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupHeroPanels();
  setupCategoryReels();
  setupStoryVideoSection();
  setupFounderStory();
})();