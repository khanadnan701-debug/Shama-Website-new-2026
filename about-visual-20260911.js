(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const founderImage = 'https://static.wixstatic.com/media/00ae33_6b312b11ad8f4578af43615631d040f8~mv2_d_1595_1600_s_2.jpg';
  const riceVisual = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789030729/jasmine-5kg.jpg';
  const thaiRice = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789064689/Shama_thai_jasmine_2_volta_20kg.png';
  const pasteVisual = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789120966/Shama_butter_chicken_curry_paste_300g.png';
  const lentilVisual = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789131921/Shama_desi_chana_dal_1kg.png';
  const spiceVisual = 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=86';
  const marketVisual = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=86';

  const videos = [
    { id: 'eAk69JajJmI', date: '2023', title: 'Aik Din Geo Ke Saath — Sardar Zahoor Iqbal' },
    { id: 'Xa8gZp_M0_8', date: '2025', title: 'Exclusive Interview — Overseas Ki Dunya' },
    { id: '14L2zA2uv_g', date: '2025', title: 'Paris Media Talk — Business Forum France' }
  ];

  const main = document.querySelector('#page-content');
  if (!main) return;

  main.innerHTML = `
    <div class="aboutv">
      <section class="aboutv-hero">
        <div class="aboutv-wrap aboutv-hero-grid">
          <div class="aboutv-hero-copy">
            <div class="aboutv-crumb"><a href="index.html">Home</a><span>/</span><span class="lang-en">About us</span><span class="lang-fr">À propos</span></div>
            <div class="aboutv-kicker"><span class="lang-en">The Shama story</span><span class="lang-fr">L'histoire de Shama</span></div>
            <h1><span class="lang-en">From one vision to a <em>trusted food name.</em></span><span class="lang-fr">D'une vision à une <em>marque alimentaire de confiance.</em></span></h1>
            <p class="lang-en">Shama International has grown through authentic taste, strong relationships and a simple promise: serve customers well.</p>
            <p class="lang-fr">Shama International grandit grâce au goût authentique, aux relations solides et à une promesse simple : bien servir ses clients.</p>
            <div class="aboutv-stats">
              <div class="aboutv-stat"><b>2003</b><span class="lang-en">Shama begins</span><span class="lang-fr">Création de Shama</span></div>
              <div class="aboutv-stat"><b>20+</b><span class="lang-en">Years of trust</span><span class="lang-fr">Années de confiance</span></div>
              <div class="aboutv-stat"><b>EU</b><span class="lang-en">Growing reach</span><span class="lang-fr">Présence en croissance</span></div>
            </div>
          </div>

          <div class="aboutv-collage" aria-label="Shama story in images">
            <div class="aboutv-photo main"><img src="${founderImage}" alt="Sardar Zahoor Iqbal"></div>
            <div class="aboutv-photo spice"><img src="${spiceVisual}" alt="Spices"></div>
            <div class="aboutv-photo rice"><img src="${riceVisual}" alt="Shama rice"></div>
            <div class="aboutv-photo small"><img src="${pasteVisual}" alt="Shama curry paste"></div>
            <div class="aboutv-float"><small class="lang-en">People · flavour · progress</small><small class="lang-fr">Humain · saveur · progrès</small><strong class="lang-en">Rooted in flavour since 2003.</strong><strong class="lang-fr">Ancrée dans le goût depuis 2003.</strong></div>
          </div>
        </div>
      </section>

      <section class="aboutv-section aboutv-founder">
        <div class="aboutv-wrap aboutv-founder-grid">
          <div class="aboutv-founder-media">
            <img src="${founderImage}" alt="Sardar Zahoor Iqbal, founder of Shama International">
            <div class="aboutv-founder-badge"><strong>Sardar Zahoor Iqbal</strong><span class="lang-en">Founder</span><span class="lang-fr">Fondateur</span></div>
          </div>
          <div class="aboutv-founder-copy">
            <div class="aboutv-kicker"><span class="lang-en">The founder</span><span class="lang-fr">Le fondateur</span></div>
            <h2><span class="lang-en">A journey built on resilience.</span><span class="lang-fr">Un parcours bâti sur la résilience.</span></h2>
            <p class="lang-en">From a new chapter in France in 1988 to founding Shama International in 2003, his journey shaped a business focused on trust, authenticity and long-term relationships.</p>
            <p class="lang-fr">D'un nouveau départ en France en 1988 à la création de Shama International en 2003, son parcours a façonné une entreprise fondée sur la confiance, l'authenticité et les relations durables.</p>
            <div class="aboutv-founder-points">
              <div class="aboutv-point"><b>1988</b><span class="lang-en">New chapter in France</span><span class="lang-fr">Nouveau départ en France</span></div>
              <div class="aboutv-point"><b>2003</b><span class="lang-en">Shama International founded</span><span class="lang-fr">Création de Shama International</span></div>
              <div class="aboutv-point"><b>2019</b><span class="lang-en">Achievement recognition</span><span class="lang-fr">Reconnaissance</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="aboutv-section aboutv-video" id="founder-media">
        <div class="aboutv-wrap">
          <header class="aboutv-section-head">
            <div><div class="aboutv-kicker"><span class="lang-en">Watch the journey</span><span class="lang-fr">Voir le parcours</span></div><h2><span class="lang-en">Hear the story, not just read it.</span><span class="lang-fr">Écoutez l'histoire, ne la lisez pas seulement.</span></h2></div>
            <p class="lang-en">Founder interviews and public appearances in one visual archive.</p><p class="lang-fr">Interviews du fondateur et apparitions publiques réunies dans une archive visuelle.</p>
          </header>
          <div class="aboutv-video-stage">
            <div class="aboutv-video-main">
              <div class="aboutv-video-frame"><iframe id="aboutv-player" src="https://www.youtube-nocookie.com/embed/${videos[0].id}?rel=0&modestbranding=1" title="${videos[0].title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
              <div class="aboutv-video-meta"><div><small id="aboutv-video-date">${videos[0].date}</small><strong id="aboutv-video-title">${videos[0].title}</strong></div></div>
            </div>
            <div class="aboutv-video-list" id="aboutv-video-list"></div>
          </div>
        </div>
      </section>

      <section class="aboutv-section aboutv-journey">
        <div class="aboutv-wrap">
          <header class="aboutv-section-head"><div><div class="aboutv-kicker"><span class="lang-en">Our journey</span><span class="lang-fr">Notre parcours</span></div><h2><span class="lang-en">Four moments. One direction.</span><span class="lang-fr">Quatre moments. Une même direction.</span></h2></div></header>
          <div class="aboutv-journey-grid">
            <article class="aboutv-milestone"><img src="${founderImage}" alt="Founder"><div class="aboutv-milestone-copy"><b>1988</b><h3 class="lang-en">A new beginning in France</h3><h3 class="lang-fr">Un nouveau départ en France</h3><p class="lang-en">A new market, new opportunities and a bigger vision.</p><p class="lang-fr">Un nouveau marché, de nouvelles opportunités et une vision plus large.</p></div></article>
            <article class="aboutv-milestone"><img src="${riceVisual}" alt="Shama rice"><div class="aboutv-milestone-copy"><b>2003</b><h3 class="lang-en">Shama International begins</h3><h3 class="lang-fr">Naissance de Shama International</h3><p class="lang-en">A family name becomes a food business.</p><p class="lang-fr">Un prénom familial devient une entreprise alimentaire.</p></div></article>
            <article class="aboutv-milestone"><img src="${marketVisual}" alt="Spice market"><div class="aboutv-milestone-copy"><b>2019</b><h3 class="lang-en">Recognition</h3><h3 class="lang-fr">Reconnaissance</h3><p class="lang-en">Achievement recognition for community services in business.</p><p class="lang-fr">Reconnaissance pour l'engagement communautaire dans les affaires.</p></div></article>
            <article class="aboutv-milestone"><img src="${thaiRice}" alt="Shama Thai Jasmine Rice"><div class="aboutv-milestone-copy"><b>Today</b><h3 class="lang-en">Growing across Europe</h3><h3 class="lang-fr">Une croissance en Europe</h3><p class="lang-en">A broader range with the same focus on trust and flavour.</p><p class="lang-fr">Une gamme plus large, avec la même attention portée à la confiance et au goût.</p></div></article>
          </div>
        </div>
      </section>

      <section class="aboutv-section aboutv-gallery">
        <div class="aboutv-wrap">
          <header class="aboutv-section-head"><div><div class="aboutv-kicker"><span class="lang-en">Shama today</span><span class="lang-fr">Shama aujourd'hui</span></div><h2><span class="lang-en">A growing world of flavour.</span><span class="lang-fr">Un univers de saveurs en croissance.</span></h2></div><p class="lang-en">Rice, spices, lentils, pastes and more — built for everyday kitchens and professional customers.</p><p class="lang-fr">Riz, épices, lentilles, pâtes et bien plus — pour les cuisines du quotidien et les clients professionnels.</p></header>
          <div class="aboutv-gallery-grid">
            <div class="aboutv-gallery-item"><img src="${riceVisual}" alt="Shama rice"><span>Rice</span></div>
            <div class="aboutv-gallery-item"><img src="${lentilVisual}" alt="Shama lentils"><span>Lentils</span></div>
            <div class="aboutv-gallery-item"><img src="${pasteVisual}" alt="Shama curry paste"><span>Paste</span></div>
            <div class="aboutv-gallery-item"><img src="${spiceVisual}" alt="Spices"><span>Spices</span></div>
            <div class="aboutv-gallery-item"><img src="${thaiRice}" alt="Shama Thai Jasmine Rice"><span>Shama range</span></div>
          </div>
        </div>
      </section>

      <section class="aboutv-cta">
        <div class="aboutv-wrap"><h2><span class="lang-en">Explore the Shama range.</span><span class="lang-fr">Découvrez la gamme Shama.</span></h2><p class="lang-en">From everyday staples to authentic flavours, discover products made for retailers, food service and families across Europe.</p><p class="lang-fr">Des produits du quotidien aux saveurs authentiques, découvrez une gamme pensée pour les détaillants, la restauration et les familles en Europe.</p><a href="products.html"><span class="lang-en">Explore products</span><span class="lang-fr">Voir les produits</span><b>→</b></a></div>
      </section>
    </div>`;

  const list = document.querySelector('#aboutv-video-list');
  const player = document.querySelector('#aboutv-player');
  const title = document.querySelector('#aboutv-video-title');
  const date = document.querySelector('#aboutv-video-date');

  videos.forEach((video, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `aboutv-video-card${index === 0 ? ' active' : ''}`;
    button.innerHTML = `<span class="aboutv-video-thumb"><img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="" loading="lazy"><i>▶</i></span><span><small>${video.date}</small><strong>${video.title}</strong></span>`;
    button.addEventListener('click', () => {
      player.src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`;
      player.title = video.title;
      title.textContent = video.title;
      date.textContent = video.date;
      list.querySelectorAll('.aboutv-video-card').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
    });
    list.appendChild(button);
  });
})();
