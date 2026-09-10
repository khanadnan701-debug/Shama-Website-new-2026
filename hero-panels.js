(() => {
  'use strict';

  const hero = document.querySelector('.hero-video-only, .hero-panel-mode');
  const founderPhoto = 'https://static.wixstatic.com/media/00ae33_6b312b11ad8f4578af43615631d040f8~mv2_d_1595_1600_s_2.jpg/v1/fill/w_900,h_900,al_c,q_90,usm_0.66_1.00_0.01/Sardar%20Zahoor%20Iqbal%20Shama%20International_.jpg';
  const founderAward = 'https://static.wixstatic.com/media/00ae33_fd233dff28b9418ca949b36589204448~mv2_d_2914_3530_s_4_2.jpg/v1/crop/x_0,y_595,w_2914,h_2911/fill/w_600,h_600,al_c,q_90,usm_0.66_1.00_0.01/5EB82696-F3E7-4E27-BB7F-950CB2255BE4.jpg';
  const biryaniVideo = 'https://www.pexels.com/download/video/4912725/';
  const wholesaleVideo = biryaniVideo;

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

  const brandLogos = [
    'https://static.wixstatic.com/media/00ae33_710feb82d0454cca9a9a44c7a062429f~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00ae33_710feb82d0454cca9a9a44c7a062429f~mv2.jpg',
    'https://static.wixstatic.com/media/00ae33_e1ffa35f0f6e47aea0cfe2c87c183869~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00ae33_e1ffa35f0f6e47aea0cfe2c87c183869~mv2.jpg',
    'https://static.wixstatic.com/media/00ae33_62327fd3fe7a4de9a9a957cc2d9e0fc3~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00ae33_62327fd3fe7a4de9a9a957cc2d9e0fc3~mv2.jpg',
    'https://static.wixstatic.com/media/00ae33_bffb9c296fdd4627a4e8540232e681a3~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00ae33_bffb9c296fdd4627a4e8540232e681a3~mv2.jpg',
    'https://static.wixstatic.com/media/00ae33_aa279882be0d484b89841d4aa5791763~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00ae33_aa279882be0d484b89841d4aa5791763~mv2.jpg',
    'https://static.wixstatic.com/media/00ae33_4a62a2cc68744bf48fd1303f54926374~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00ae33_4a62a2cc68744bf48fd1303f54926374~mv2.jpg',
    'https://static.wixstatic.com/media/00ae33_5a903fc2fbd64ba2b277c2af644179fe~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00ae33_5a903fc2fbd64ba2b277c2af644179fe~mv2.jpg',
    'https://static.wixstatic.com/media/00ae33_33064801afc3453c80ebd06037a8cb45~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/00ae33_33064801afc3453c80ebd06037a8cb45~mv2.png'
  ];

  const clientLogos = [
    'https://static.wixstatic.com/media/00ae33_61a58c26957d489b9d6f8b579ce6612f~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/h-market.jpg',
    'https://static.wixstatic.com/media/a3c153_c2c2f965d54f4f3e8bf6a528e9ed4be3~mv2.png/v1/fill/w_170,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%202.png',
    'https://static.wixstatic.com/media/00ae33_2a2d36071b71479481e6906937ec08f0~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cora.jpg',
    'https://static.wixstatic.com/media/a3c153_d69497f8d9e9497ea0b907d9229398a6~mv2.png/v1/fill/w_170,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%204.png',
    'https://static.wixstatic.com/media/00ae33_3446ded4f0824d2eba4f8167213d862f~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/marche-frais.jpg',
    'https://static.wixstatic.com/media/a3c153_1a5c114ecea242d2b54754a9fcfe924f~mv2.png/v1/fill/w_170,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%206.png'
  ];

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

  function addStyle(id, css) {
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
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
    Array.from(document.querySelectorAll('.reel-card')).forEach(reel => {
      const className = Object.keys(reelClassMap).find(name => reel.classList.contains(name));
      const key = className ? reelClassMap[className] : null;
      playVideo(setVideo(reel.querySelector('video'), key ? videoSources[key] : null));
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

  function setupFounderStory() {
    const oldSection = document.querySelector('.lifestyle.section');
    if (!oldSection || document.querySelector('.founder-video-section')) return;
    addStyle('founder-video-story-css', `
      .founder-video-section{position:relative;padding:96px 0;overflow:hidden;background:linear-gradient(180deg,#f7f9ff 0%,#eef5ff 100%)}
      .founder-video-shell{position:relative;z-index:1;width:min(1600px,calc(100% - 64px))!important;max-width:none!important;min-height:620px;margin:0 auto!important;padding:44px;border-radius:42px;background:linear-gradient(135deg,#eef2ff 0%,#e8e8ff 42%,#ddd8ff 100%);box-shadow:0 28px 80px rgba(42,48,101,.12);display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:46px;align-items:center;overflow:hidden;isolation:isolate}
      .founder-video-shell:after{content:"2003";position:absolute;right:-28px;bottom:-30px;font:900 170px/.75 Manrope,sans-serif;letter-spacing:-.08em;color:rgba(28,39,91,.045);z-index:0;pointer-events:none}
      .founder-media-card{position:relative;z-index:2;display:block;min-height:500px;border-radius:34px;overflow:hidden;background:#101a35;box-shadow:0 28px 70px rgba(19,29,72,.22);border:1px solid rgba(255,255,255,.62);isolation:isolate;text-decoration:none;color:#fff}
      .founder-media-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(1.015);filter:saturate(1.05) contrast(1.02)}
      .founder-media-card:before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(7,13,35,.02),rgba(7,13,35,.14) 42%,rgba(7,13,35,.78))}
      .founder-profile-tag{position:absolute;left:26px;top:26px;z-index:3;padding:11px 15px;border-radius:999px;background:rgba(255,255,255,.9);color:#17203b;font:900 12px/1 Manrope,sans-serif;box-shadow:0 16px 34px rgba(0,0,0,.18)}
      .founder-award-thumb{position:absolute;right:26px;top:26px;z-index:3;width:92px;height:92px;border-radius:24px;overflow:hidden;border:3px solid rgba(255,255,255,.82);box-shadow:0 18px 38px rgba(0,0,0,.28);background:#fff}.founder-award-thumb img{position:static;width:100%;height:100%;object-fit:cover;filter:none;transform:none}
      .founder-video-caption{position:absolute;left:32px;right:32px;bottom:32px;z-index:3;display:flex;flex-direction:column;gap:9px;text-shadow:0 16px 34px rgba(0,0,0,.42)}.founder-video-caption small{font:900 12px/1 Manrope,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#d9d5ff}.founder-video-caption strong{font:900 clamp(34px,3.4vw,58px)/.88 Manrope,sans-serif;letter-spacing:-.065em;text-transform:uppercase;color:#fff}.founder-video-caption span{font:800 14px/1.2 Manrope,sans-serif;color:#fff;opacity:.92}
      .founder-copy{position:relative;z-index:2;padding:20px 10px 18px}.founder-copy .eyebrow{color:#5f5bd7!important}.founder-copy h2{margin:18px 0 20px;max-width:760px;font:900 clamp(44px,4.4vw,70px)/.94 Manrope,sans-serif;letter-spacing:-.064em;color:#121d3a}.founder-copy h2 em{font-family:Georgia,serif;font-weight:500;font-style:italic;color:#5b57d4}.founder-copy p{max-width:760px;margin:0 0 18px;color:#5d6784;font:650 16px/1.72 "DM Sans",sans-serif}.founder-detail{margin-bottom:26px!important;color:#44506f!important;font-weight:650!important}
      .founder-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0 0 30px}.founder-stats span{display:flex;flex-direction:column;gap:8px;min-height:112px;padding:18px;border:1px solid rgba(47,58,112,.1);border-radius:20px;background:rgba(255,255,255,.64);backdrop-filter:blur(10px);color:#17203b;font:900 13px/1.24 Manrope,sans-serif}.founder-stats b{font-size:11px;letter-spacing:.14em;color:#7670e6;text-transform:uppercase}.founder-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap}.founder-actions .btn{background:linear-gradient(135deg,#17264c,#6254d9)!important;color:#fff!important;border:0!important;box-shadow:0 14px 30px rgba(48,51,126,.22)}.founder-actions .text-link{color:#17203b!important;font-weight:900}
      html[lang="fr"] .founder-video-section .lang-en{display:none!important}html[lang="fr"] .founder-video-section .lang-fr{display:inline!important}@media(max-width:1020px){.founder-video-shell{width:min(1040px,calc(100% - 40px))!important;grid-template-columns:1fr;min-height:auto;padding:34px}.founder-media-card{min-height:460px}}@media(max-width:640px){.founder-video-section{padding:60px 0}.founder-video-shell{width:calc(100% - 18px)!important;padding:20px;border-radius:28px}.founder-media-card{min-height:360px}.founder-copy h2{font-size:38px}.founder-stats{grid-template-columns:1fr}.founder-actions .btn,.founder-actions .text-link{width:100%;justify-content:center}}
    `);
    oldSection.outerHTML = `
      <section class="founder-video-section section" aria-label="Founder story profile">
        <div class="wrap founder-video-shell">
          <a class="founder-media-card" href="about.html" aria-label="Read the full story of Sardar Zahoor Iqbal">
            <img src="${founderPhoto}" alt="Sardar Zahoor Iqbal, founder of Shama International">
            <span class="founder-profile-tag"><span class="lang-en">Founder profile</span><span class="lang-fr">Profil fondateur</span></span>
            <span class="founder-award-thumb"><img src="${founderAward}" alt="Sardar Zahoor Iqbal award moment"></span>
            <div class="founder-video-caption"><small><span class="lang-en">From Fateh Jang to France</span><span class="lang-fr">De Fateh Jang à la France</span></small><strong>Sardar Zahoor Iqbal</strong><span><span class="lang-en">Click to read the full story ↗</span><span class="lang-fr">Cliquez pour lire toute l’histoire ↗</span></span></div>
          </a>
          <div class="founder-copy">
            <span class="eyebrow"><span class="lang-en">Founder story</span><span class="lang-fr">Histoire du fondateur</span></span>
            <h2><span class="lang-en">A journey of belief, <em>from Pakistan to France.</em></span><span class="lang-fr">Un parcours de conviction, <em>du Pakistan à la France.</em></span></h2>
            <p><span class="lang-en">Sardar Zahoor Iqbal came from a humble background in Pakistan and started business from a young age with a grocery shop in Fateh Jang. In 1988 he began a new chapter in France, later building Shama International in 2003 under the name of his elder daughter Shama.</span><span class="lang-fr">Issu d’un milieu modeste au Pakistan, Sardar Zahoor Iqbal s’est lancé très jeune dans le commerce avec une épicerie à Fateh Jang. En 1988, il commence un nouveau chapitre en France, puis fonde Shama International en 2003 sous le nom de sa fille aînée, Shama.</span></p>
            <p class="founder-detail"><span class="lang-en">Today the story continues through trusted quality, authentic taste, long-term supplier relationships and a growing Shama product range across France.</span><span class="lang-fr">Aujourd’hui, cette histoire continue à travers une qualité fiable, un goût authentique et une gamme Shama en développement en France.</span></p>
            <div class="founder-stats"><span><b>1988</b><span class="lang-en">Started a new life in France</span><span class="lang-fr">Nouvelle vie en France</span></span><span><b>2003</b><span class="lang-en">Shama food business began</span><span class="lang-fr">Début de Shama</span></span><span><b>2019</b><span class="lang-en">Pakistan Achievement Award</span><span class="lang-fr">Pakistan Achievement Award</span></span></div>
            <div class="founder-actions"><a class="btn" href="about.html"><span class="lang-en">Read full founder story</span><span class="lang-fr">Lire toute l’histoire</span> <span>↗</span></a><a class="text-link" href="catalogue.html"><span class="lang-en">Explore catalogue</span><span class="lang-fr">Explorer le catalogue</span> <span>→</span></a></div>
          </div>
        </div>
      </section>`;
  }

  function setupWholesaleVideoSection() {
    const oldSection = document.querySelector('.wholesale.section');
    if (!oldSection || document.querySelector('.wholesale-video-section')) return;
    addStyle('wholesale-video-section-css', `
      .wholesale-video-section{position:relative;padding:94px 0 112px;overflow:hidden;background:linear-gradient(180deg,#f7f9ff 0%,#f9fbff 18%,#f4f1ff 58%,#f1fbff 100%)}.wholesale-video-shell{width:min(1920px,100%)!important;max-width:none!important;margin:0 auto!important;padding:0 clamp(18px,6.2vw,128px)!important;position:relative;isolation:isolate}.wholesale-video-shell:before{content:"B2B";position:absolute;right:clamp(28px,8vw,160px);top:-54px;font:900 clamp(88px,14vw,230px)/.82 Manrope,sans-serif;letter-spacing:-.08em;color:rgba(86,78,198,.055);pointer-events:none;z-index:0}.wholesale-video-head{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,.86fr) minmax(320px,.62fr);gap:clamp(34px,6vw,110px);align-items:end;margin:0 0 46px}.wholesale-video-head .eyebrow{color:#6254d9!important;letter-spacing:.22em}.wholesale-video-title{margin:20px 0 0;max-width:680px;color:#12214a;font:900 clamp(52px,5.6vw,94px)/.9 Manrope,sans-serif;letter-spacing:-.075em}.wholesale-video-note{position:relative;padding-left:42px;color:#5c6786;font:700 clamp(18px,1.4vw,25px)/1.45 "DM Sans",sans-serif}.wholesale-video-note:before{content:"";position:absolute;left:0;top:6px;bottom:6px;width:1px;background:linear-gradient(180deg,rgba(98,84,217,.08),rgba(98,84,217,.42),rgba(98,84,217,.08))}.wholesale-video-player{position:relative;z-index:1;display:block;min-height:clamp(420px,35vw,650px);border-radius:28px;overflow:hidden;background:#0f1d3d;box-shadow:0 28px 78px rgba(29,42,100,.18);border:1px solid rgba(255,255,255,.72);text-decoration:none;color:#fff;isolation:isolate}.wholesale-video-player video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(1.025);filter:saturate(1.08) contrast(1.03)}.wholesale-video-player:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,12,34,.5),rgba(5,12,34,.14) 44%,rgba(5,12,34,.38)),linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(5,12,34,.74));z-index:1}.wholesale-video-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3;width:86px;height:86px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.92);color:#12214a;font:900 30px/1 Manrope,sans-serif;box-shadow:0 22px 60px rgba(0,0,0,.28)}.wholesale-video-overlay{position:absolute;left:30px;right:30px;bottom:24px;z-index:3;display:grid;grid-template-columns:auto 1fr auto auto;gap:18px;align-items:center;color:#fff}.wholesale-video-overlay .mini-play{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.9);color:#12214a;font-size:13px}.wholesale-video-line{height:2px;background:rgba(255,255,255,.48);border-radius:99px;overflow:hidden}.wholesale-video-line i{display:block;width:31%;height:100%;background:#fff}.wholesale-video-foot{position:relative;z-index:1;margin-top:28px;display:flex;align-items:center;justify-content:space-between;gap:22px;color:#9aa3bd;font:800 13px/1.4 Manrope,sans-serif}.wholesale-video-foot span:first-child{color:#6254d9;letter-spacing:.22em;text-transform:uppercase}.wholesale-video-foot p{margin:0;flex:1;font:650 15px/1.5 "DM Sans",sans-serif;color:#9aa3bd}.wholesale-video-foot a{display:inline-flex;align-items:center;gap:10px;text-decoration:none;color:#12214a;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.wholesale-video-foot a b{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:rgba(98,84,217,.08);color:#6254d9}html[lang="fr"] .wholesale-video-section .lang-en{display:none!important}html[lang="fr"] .wholesale-video-section .lang-fr{display:inline!important}@media(max-width:1040px){.wholesale-video-head{grid-template-columns:1fr}.wholesale-video-note{padding-left:0}.wholesale-video-note:before{display:none}.wholesale-video-foot{align-items:flex-start;flex-direction:column}}@media(max-width:680px){.wholesale-video-section{padding:56px 0 72px}.wholesale-video-shell{padding:0 12px!important}.wholesale-video-title{font-size:42px}.wholesale-video-player{min-height:330px}.wholesale-video-overlay{grid-template-columns:auto auto}.wholesale-video-line{grid-column:1/-1}.wholesale-video-icons{display:none}}
    `);
    oldSection.outerHTML = `
      <section class="wholesale-video-section section" aria-label="Wholesale video story"><div class="wrap wholesale-video-shell"><div class="wholesale-video-head"><div><span class="eyebrow light"><span class="lang-en">Wholesale, made simple</span><span class="lang-fr">Wholesale simplifié</span></span><h2 class="wholesale-video-title"><span class="lang-en">From our warehouse to your business.</span><span class="lang-fr">De notre entrepôt à votre commerce.</span></h2></div><p class="wholesale-video-note"><span class="lang-en">Quality products, reliable supply and a team that makes wholesale simple.</span><span class="lang-fr">Des produits de qualité, un approvisionnement fiable et une équipe pour simplifier vos commandes.</span></p></div><a class="wholesale-video-player" href="contact.html" aria-label="Watch Shama wholesale story"><video data-wholesale-video autoplay muted loop playsinline preload="metadata"></video><span class="wholesale-video-play">▶</span><span class="wholesale-video-overlay"><i class="mini-play">▶</i><b>0:00 / 1:28</b><span class="wholesale-video-line"><i></i></span><span class="wholesale-video-icons">♬ ⛶</span></span></a><div class="wholesale-video-foot"><span><span class="lang-en">A closer look at Shama</span><span class="lang-fr">Un aperçu de Shama</span></span><p><span class="lang-en">Real products. Real people. A simpler way to wholesale.</span><span class="lang-fr">Des produits réels. Une équipe présente. Une façon plus simple de commander.</span></p><a href="contact.html"><span class="lang-en">Watch our story</span><span class="lang-fr">Voir notre histoire</span> <b>→</b></a></div></div></section>`;
    playVideo(setVideo(document.querySelector('[data-wholesale-video]'), wholesaleVideo));
  }

  function partnerCards(items) {
    return items.map((src, index) => `<span class="partner-logo-card"><img src="${src}" alt="Shama partner logo ${index + 1}" loading="lazy" decoding="async"></span>`).join('');
  }

  function setupPartnersSection() {
    const oldSection = document.querySelector('.cta.section');
    if (!oldSection || document.querySelector('.partners-marquee-section')) return;
    addStyle('partners-marquee-css', `
      .partners-marquee-section{position:relative;padding:92px 0 104px;overflow:hidden;background:linear-gradient(180deg,#fff 0%,#f8fbff 100%)}.partners-marquee-shell{position:relative;width:min(1720px,calc(100% - 64px))!important;max-width:none!important;margin:0 auto!important;padding:72px 0 70px;border-radius:42px;background:linear-gradient(135deg,#102d68 0%,#1f4d94 42%,#6342db 100%);box-shadow:0 32px 90px rgba(28,44,112,.18);overflow:hidden;color:#fff;isolation:isolate}.partners-marquee-shell:before{content:"";position:absolute;right:-70px;top:-190px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 62%);border:1px solid rgba(255,255,255,.12);z-index:0}.partners-marquee-copy{position:relative;z-index:2;padding:0 clamp(30px,5vw,92px) 42px}.partners-marquee-copy .eyebrow{display:block;margin-bottom:18px;color:#aef5e3!important;letter-spacing:.24em;text-transform:uppercase;font:900 12px/1 Manrope,sans-serif}.partners-marquee-copy h2{margin:0 0 12px;color:#fff;font:900 clamp(42px,5vw,78px)/.93 Manrope,sans-serif;letter-spacing:-.07em}.partners-marquee-copy p{margin:0;max-width:720px;color:rgba(255,255,255,.76);font:650 clamp(16px,1.25vw,22px)/1.55 "DM Sans",sans-serif}.partners-marquee{position:relative;z-index:2;overflow:hidden;margin:0 0 18px;mask-image:linear-gradient(90deg,transparent 0,#000 9%,#000 91%,transparent 100%)}.partners-track{display:flex;gap:18px;width:max-content;animation:partnersMove 34s linear infinite;padding:0 18px}.partners-track.reverse{animation-duration:42s;animation-direction:reverse;opacity:.9}.partners-marquee:hover .partners-track{animation-play-state:paused}.partner-logo-card{flex:0 0 clamp(150px,10.4vw,210px);height:96px;border-radius:20px;display:grid;place-items:center;background:rgba(255,255,255,.94);border:1px solid rgba(255,255,255,.42);box-shadow:0 18px 44px rgba(4,18,58,.14);backdrop-filter:blur(12px);overflow:hidden}.partner-logo-card img{max-width:82%;max-height:72%;object-fit:contain;display:block}.partners-note{position:relative;z-index:2;margin:30px clamp(30px,5vw,92px) 0;display:flex;align-items:center;justify-content:space-between;gap:18px;border-top:1px solid rgba(255,255,255,.16);padding-top:22px;color:rgba(255,255,255,.74);font:800 13px/1.3 Manrope,sans-serif;letter-spacing:.12em;text-transform:uppercase}.partners-note a{display:inline-flex;align-items:center;gap:12px;text-decoration:none;color:#fff}.partners-note b{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.12)}@keyframes partnersMove{from{transform:translateX(0)}to{transform:translateX(-50%)}}html[lang="fr"] .partners-marquee-section .lang-en{display:none!important}html[lang="fr"] .partners-marquee-section .lang-fr{display:inline!important}@media(max-width:760px){.partners-marquee-section{padding:62px 0 72px}.partners-marquee-shell{width:calc(100% - 18px)!important;padding:42px 0;border-radius:28px}.partners-marquee-copy{padding:0 22px 30px}.partners-marquee-copy h2{font-size:38px}.partner-logo-card{flex-basis:150px;height:82px}.partners-note{margin:22px 22px 0;align-items:flex-start;flex-direction:column}}
    `);
    const brandRow = partnerCards([...brandLogos, ...brandLogos]);
    const clientRow = partnerCards([...clientLogos, ...clientLogos, ...clientLogos]);
    oldSection.outerHTML = `
      <section class="partners-marquee-section section" aria-label="Our brands and partners">
        <div class="wrap partners-marquee-shell">
          <div class="partners-marquee-copy">
            <span class="eyebrow"><span class="lang-en">Our brands & partners</span><span class="lang-fr">Nos marques & partenaires</span></span>
            <h2><span class="lang-en">Trusted by our partners.</span><span class="lang-fr">La confiance de nos partenaires.</span></h2>
            <p><span class="lang-en">The original Shama partner logos from the old website, now shown as a smooth moving marquee.</span><span class="lang-fr">Les logos partenaires de l’ancien site Shama, présentés dans un défilement fluide.</span></p>
          </div>
          <div class="partners-marquee" aria-hidden="true"><div class="partners-track">${brandRow}</div></div>
          <div class="partners-marquee" aria-hidden="true"><div class="partners-track reverse">${clientRow}</div></div>
          <div class="partners-note"><span><span class="lang-en">Working with the best clients</span><span class="lang-fr">Avec les meilleurs clients</span></span><a href="contact.html"><span class="lang-en">Partner with Shama</span><span class="lang-fr">Devenir partenaire</span> <b>→</b></a></div>
        </div>
      </section>`;
  }

  setupHeroPanels();
  setupCategoryReels();
  setupStoryVideoSection();
  setupFounderStory();
  setupWholesaleVideoSection();
  setupPartnersSection();
})();
