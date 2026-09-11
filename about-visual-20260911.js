(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const images = {
    hero: 'https://static.wixstatic.com/media/00ae33_2045f9d35e4a4da395ad4833d2b3bd91~mv2.jpg',
    founder: 'https://static.wixstatic.com/media/00ae33_6b312b11ad8f4578af43615631d040f8~mv2_d_1595_1600_s_2.jpg',
    rice: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789030729/jasmine-5kg.jpg',
    thaiRice: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064689/Shama_thai_jasmine_2_volta_20kg.png',
    paste: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_butter_chicken_curry_paste_300g.png',
    lentils: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131921/Shama_desi_chana_dal_1kg.png',
    spice: 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789051986/star_anise.png'
  };

  const videos = [
    { id: 'eAk69JajJmI', date: '2023', title: 'Aik Din Geo Ke Saath — Sardar Zahoor Iqbal' },
    { id: 'Xa8gZp_M0_8', date: '2025', title: 'Exclusive Interview — Overseas Ki Dunya' },
    { id: '14L2zA2uv_g', date: '2025', title: 'Paris Media Talk — Business Forum France' }
  ];

  const icons = {
    calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.8 2.8 8.3 7 10 4.2-1.7 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.2 2.5 3.4 5.5 3.4 9S14.2 18.5 12 21M12 3C9.8 5.5 8.6 8.5 8.6 12S9.8 18.5 12 21"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>',
    building: '<svg viewBox="0 0 24 24"><path d="M4 21V8l8-5 8 5v13"/><path d="M8 21v-6h8v6M8 10h.01M12 10h.01M16 10h.01"/></svg>',
    award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="m9 13-2 8 5-3 5 3-2-8"/></svg>',
    trend: '<svg viewBox="0 0 24 24"><path d="m4 17 5-5 4 4 7-8"/><path d="M15 8h5v5"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24"><path d="M20 4C12 4 6 8 5 15c4 1 8 0 11-3 3-3 4-8 4-8Z"/><path d="M4 20c3-5 7-8 12-10"/></svg>',
    truck: '<svg viewBox="0 0 24 24"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>',
    handshake: '<svg viewBox="0 0 24 24"><path d="m7 12 3-3 4 4 2-2 4 4"/><path d="M3 8l4-3 4 3M21 8l-4-3-3 2M4 15l4 4 3-3M20 15l-4 4-2-2"/></svg>',
    play: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>'
  };

  const icon = (name, cls = 'aboutx-icon') => `<span class="${cls}" aria-hidden="true">${icons[name]}</span>`;
  const main = document.querySelector('#page-content');
  if (!main) return;

  main.innerHTML = `
    <div class="aboutx">
      <section class="aboutx-hero">
        <div class="aboutx-wrap aboutx-hero-grid">
          <div class="aboutx-copy">
            <div class="aboutx-breadcrumb"><a href="index.html">Home</a><span>•</span><span class="lang-en">About Shama</span><span class="lang-fr">À propos de Shama</span></div>
            <div class="aboutx-eyebrow"><span class="lang-en">Shama International</span><span class="lang-fr">Shama International</span></div>
            <h1><span class="lang-en">Food rooted in <em>trust.</em></span><span class="lang-fr">Des saveurs fondées sur la <em>confiance.</em></span></h1>
            <p class="lang-en">Since 2003, Shama has brought authentic flavour and dependable service to families, retailers and food businesses across France and beyond.</p>
            <p class="lang-fr">Depuis 2003, Shama apporte des saveurs authentiques et un service fiable aux familles, détaillants et professionnels de l'alimentation en France et au-delà.</p>
            <div class="aboutx-actions">
              <a class="aboutx-btn primary" href="products.html"><span class="lang-en">Explore products</span><span class="lang-fr">Découvrir les produits</span>${icon('arrow','aboutx-inline-icon')}</a>
              <a class="aboutx-btn ghost" href="#aboutx-videos">${icon('play','aboutx-inline-icon')}<span class="lang-en">Watch our story</span><span class="lang-fr">Voir notre histoire</span></a>
            </div>
            <div class="aboutx-stats">
              <div class="aboutx-stat">${icon('calendar')}<div><b>2003</b><span class="lang-en">Founded</span><span class="lang-fr">Fondée</span></div></div>
              <div class="aboutx-stat">${icon('shield')}<div><b>20+</b><span class="lang-en">Years of trust</span><span class="lang-fr">Années de confiance</span></div></div>
              <div class="aboutx-stat">${icon('globe')}<div><b>EU</b><span class="lang-en">Growing reach</span><span class="lang-fr">Présence croissante</span></div></div>
            </div>
          </div>

          <div class="aboutx-visual">
            <figure class="aboutx-hero-photo"><img src="${images.hero}" alt="Shama International team and brand presentation"></figure>
            <div class="aboutx-product-stack">
              <figure><img src="${images.rice}" alt="Shama rice"></figure>
              <figure><img src="${images.paste}" alt="Shama curry paste"></figure>
              <figure><img src="${images.lentils}" alt="Shama lentils"></figure>
            </div>
          </div>
        </div>
      </section>

      <section class="aboutx-timeline-section">
        <div class="aboutx-wrap">
          <div class="aboutx-section-title compact">
            <div><span class="aboutx-eyebrow"><span class="lang-en">Our journey</span><span class="lang-fr">Notre parcours</span></span><h2 class="lang-en">A story told in four moments.</h2><h2 class="lang-fr">Une histoire en quatre moments.</h2></div>
          </div>
          <div class="aboutx-timeline">
            <article>${icon('pin')}<b>1988</b><h3 class="lang-en">France</h3><h3 class="lang-fr">France</h3><p class="lang-en">A new beginning and a bigger ambition.</p><p class="lang-fr">Un nouveau départ et une ambition plus grande.</p></article>
            <article>${icon('building')}<b>2003</b><h3 class="lang-en">Shama begins</h3><h3 class="lang-fr">Naissance de Shama</h3><p class="lang-en">Shama International is founded.</p><p class="lang-fr">Création de Shama International.</p></article>
            <article>${icon('award')}<b>2019</b><h3 class="lang-en">Recognition</h3><h3 class="lang-fr">Reconnaissance</h3><p class="lang-en">A milestone for business and community contribution.</p><p class="lang-fr">Une étape marquante pour l'entreprise et la communauté.</p></article>
            <article>${icon('trend')}<b class="lang-en">Today</b><b class="lang-fr">Aujourd'hui</b><h3 class="lang-en">Growing reach</h3><h3 class="lang-fr">Une présence croissante</h3><p class="lang-en">More ranges, more customers, the same focus on trust.</p><p class="lang-fr">Plus de gammes, plus de clients, la même confiance.</p></article>
          </div>
        </div>
      </section>

      <section class="aboutx-founder-section">
        <div class="aboutx-wrap aboutx-founder-grid">
          <div class="aboutx-founder-photo"><img src="${images.founder}" alt="Sardar Zahoor Iqbal, Founder of Shama International"></div>
          <div class="aboutx-founder-copy">
            <span class="aboutx-eyebrow"><span class="lang-en">Meet the founder</span><span class="lang-fr">Le fondateur</span></span>
            <h2>Sardar Zahoor Iqbal</h2>
            <p class="lang-en">His journey from a new chapter in France to building Shama International shaped a company centred on resilience, relationships and authentic food.</p>
            <p class="lang-fr">Son parcours, d'un nouveau départ en France à la création de Shama International, a façonné une entreprise fondée sur la résilience, les relations et l'authenticité.</p>
            <div class="aboutx-founder-values">
              <div>${icon('shield')}<span><b class="lang-en">Resilience</b><b class="lang-fr">Résilience</b><small class="lang-en">Keep moving forward.</small><small class="lang-fr">Toujours avancer.</small></span></div>
              <div>${icon('handshake')}<span><b class="lang-en">Relationships</b><b class="lang-fr">Relations</b><small class="lang-en">Build for the long term.</small><small class="lang-fr">Construire sur le long terme.</small></span></div>
              <div>${icon('trend')}<span><b class="lang-en">Progress</b><b class="lang-fr">Progrès</b><small class="lang-en">Grow without losing our roots.</small><small class="lang-fr">Grandir sans perdre nos racines.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="aboutx-video-section" id="aboutx-videos">
        <div class="aboutx-wrap">
          <div class="aboutx-section-title light">
            <div><span class="aboutx-eyebrow"><span class="lang-en">Watch the story</span><span class="lang-fr">Voir l'histoire</span></span><h2 class="lang-en">Hear it directly from the journey.</h2><h2 class="lang-fr">Découvrez l'histoire en images.</h2></div>
            <p class="lang-en">Founder interviews and public appearances, all in one place.</p><p class="lang-fr">Interviews du fondateur et apparitions publiques réunies en un seul endroit.</p>
          </div>
          <div class="aboutx-video-grid">
            <div class="aboutx-player-card">
              <div class="aboutx-player"><iframe id="aboutx-player" src="https://www.youtube-nocookie.com/embed/${videos[0].id}?rel=0&modestbranding=1" title="${videos[0].title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
              <div class="aboutx-player-meta"><small id="aboutx-date">${videos[0].date}</small><strong id="aboutx-title">${videos[0].title}</strong></div>
            </div>
            <div class="aboutx-video-list" id="aboutx-video-list"></div>
          </div>
        </div>
      </section>

      <section class="aboutx-values-section">
        <div class="aboutx-wrap">
          <div class="aboutx-section-title">
            <div><span class="aboutx-eyebrow"><span class="lang-en">Why Shama</span><span class="lang-fr">Pourquoi Shama</span></span><h2 class="lang-en">Simple values. Everyday consistency.</h2><h2 class="lang-fr">Des valeurs simples. Une qualité constante.</h2></div>
          </div>
          <div class="aboutx-values-grid">
            <article>${icon('leaf')}<h3 class="lang-en">Authentic taste</h3><h3 class="lang-fr">Goût authentique</h3><p class="lang-en">Familiar flavours made for everyday kitchens.</p><p class="lang-fr">Des saveurs familières pour la cuisine de tous les jours.</p></article>
            <article>${icon('shield')}<h3 class="lang-en">Trusted quality</h3><h3 class="lang-fr">Qualité de confiance</h3><p class="lang-en">Products selected with consistency in mind.</p><p class="lang-fr">Des produits choisis avec exigence et régularité.</p></article>
            <article>${icon('truck')}<h3 class="lang-en">Reliable service</h3><h3 class="lang-fr">Service fiable</h3><p class="lang-en">Built to support retail and food-service customers.</p><p class="lang-fr">Un service pensé pour les détaillants et les professionnels.</p></article>
            <article>${icon('handshake')}<h3 class="lang-en">Long-term partnerships</h3><h3 class="lang-fr">Partenariats durables</h3><p class="lang-en">Relationships that grow beyond a single order.</p><p class="lang-fr">Des relations qui vont au-delà d'une seule commande.</p></article>
          </div>
        </div>
      </section>

      <section class="aboutx-gallery-section">
        <div class="aboutx-wrap">
          <div class="aboutx-section-title">
            <div><span class="aboutx-eyebrow"><span class="lang-en">Shama today</span><span class="lang-fr">Shama aujourd'hui</span></span><h2 class="lang-en">A growing world of flavour.</h2><h2 class="lang-fr">Un univers de saveurs en croissance.</h2></div>
            <a class="aboutx-text-link" href="products.html"><span class="lang-en">View all products</span><span class="lang-fr">Voir tous les produits</span>${icon('arrow','aboutx-inline-icon')}</a>
          </div>
          <div class="aboutx-gallery">
            <a href="rice.html" class="aboutx-gallery-card big"><img src="${images.rice}" alt="Shama rice"><span>Rice</span></a>
            <a href="flour-lentiles.html" class="aboutx-gallery-card"><img src="${images.lentils}" alt="Shama lentils"><span>Lentils</span></a>
            <a href="spices.html" class="aboutx-gallery-card"><img src="${images.spice}" alt="Shama spices"><span>Spices</span></a>
            <a href="sauces.html" class="aboutx-gallery-card"><img src="${images.paste}" alt="Shama curry paste"><span>Pickle & Pastes</span></a>
            <a href="rice.html" class="aboutx-gallery-card wide"><img src="${images.thaiRice}" alt="Shama Thai Jasmine rice"><span>Shama Range</span></a>
          </div>
        </div>
      </section>

      <section class="aboutx-cta">
        <div class="aboutx-wrap aboutx-cta-inner">
          <div>${icon('heart','aboutx-cta-icon')}<span class="aboutx-eyebrow"><span class="lang-en">Made for long-term business</span><span class="lang-fr">Pensé pour des relations durables</span></span><h2 class="lang-en">Bring Shama to your shelves.</h2><h2 class="lang-fr">Faites entrer Shama dans vos rayons.</h2></div>
          <a class="aboutx-btn primary dark" href="contact.html"><span class="lang-en">Talk to our team</span><span class="lang-fr">Parler à notre équipe</span>${icon('arrow','aboutx-inline-icon')}</a>
        </div>
      </section>
    </div>`;

  const list = document.querySelector('#aboutx-video-list');
  const player = document.querySelector('#aboutx-player');
  const title = document.querySelector('#aboutx-title');
  const date = document.querySelector('#aboutx-date');

  videos.forEach((video, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `aboutx-video-card${index === 0 ? ' active' : ''}`;
    button.innerHTML = `
      <span class="aboutx-thumb"><img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="" loading="lazy">${icon('play','aboutx-play-icon')}</span>
      <span class="aboutx-video-copy"><small>${video.date}</small><strong>${video.title}</strong></span>`;
    button.addEventListener('click', () => {
      player.src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`;
      player.title = video.title;
      title.textContent = video.title;
      date.textContent = video.date;
      list.querySelectorAll('.aboutx-video-card').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
    });
    list.appendChild(button);
  });
})();
