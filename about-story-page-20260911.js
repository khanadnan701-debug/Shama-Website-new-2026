(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'about-story-page-20260911.css?v=20260911-1';
  document.head.appendChild(css);

  const main = document.querySelector('#page-content');
  if (!main) return;

  const founderImage = 'https://static.wixstatic.com/media/00ae33_6b312b11ad8f4578af43615631d040f8~mv2_d_1595_1600_s_2.jpg';
  const riceVisual = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1600&q=88';
  const spiceVisual = 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=86';
  const teaVisual = 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=86';
  const shamaRice = 'https://res.cloudinary.com/wy4nkkqq/image/upload/v1789030729/jasmine-5kg.jpg';

  main.innerHTML = `
    <section class="about-front-hero">
      <div class="about-front-grid">
        <div class="about-front-copy">
          <div class="about-breadcrumb"><a href="index.html">Home</a><span>/</span><span>About us</span></div>
          <div class="about-kicker"><span class="lang-en">The Shama story</span><span class="lang-fr">L'histoire de Shama</span></div>
          <h1><span class="lang-en">More than food.<br><em>A journey.</em></span><span class="lang-fr">Bien plus que des produits.<br><em>Un parcours.</em></span></h1>
          <p class="lang-en">From a small beginning in 2003 to a growing European food business, Shama has moved forward through courage, consistency, relationships and authentic taste.</p>
          <p class="lang-fr">D'un modeste départ en 2003 à une entreprise alimentaire européenne en pleine croissance, Shama avance grâce au courage, à la constance, aux relations humaines et au goût authentique.</p>
          <div class="about-hero-actions">
            <a class="about-primary" href="#story"><span class="lang-en">Start the story</span><span class="lang-fr">Découvrir l'histoire</span><b>↓</b></a>
            <a class="about-secondary" href="#timeline"><span class="lang-en">Explore the journey</span><span class="lang-fr">Explorer le parcours</span><b>↗</b></a>
          </div>
          <div class="about-hero-stats">
            <span><b>2003</b><span class="lang-en">Founded</span><span class="lang-fr">Fondée</span></span>
            <span><b>20+</b><span class="lang-en">Years of trust</span><span class="lang-fr">Années de confiance</span></span>
            <span><b>EU</b><span class="lang-en">Growing reach</span><span class="lang-fr">Présence en croissance</span></span>
          </div>
        </div>
        <div class="about-hero-collage" aria-label="Shama food story">
          <div class="about-hero-maincard">
            <img src="${riceVisual}" alt="Rice and authentic food ingredients">
            <div class="about-hero-caption"><small>People · flavour · progress</small><strong class="lang-en">Built around the food people remember.</strong><strong class="lang-fr">Construite autour des saveurs que l'on n'oublie pas.</strong></div>
          </div>
          <div class="about-floating-card one"><img src="${spiceVisual}" alt="Spices"><small>Authentic flavour</small><strong class="lang-en">Tradition on every shelf</strong><strong class="lang-fr">La tradition sur chaque rayon</strong></div>
          <div class="about-floating-card two"><img src="${shamaRice}" alt="Shama rice"><small>Shama collection</small><strong class="lang-en">From our range to your table</strong><strong class="lang-fr">De notre gamme à votre table</strong></div>
          <div class="about-orbit-note">Rooted in flavour<br>since 2003</div>
        </div>
      </div>
    </section>

    <section class="about-intro" id="story">
      <div class="about-wrap about-intro-grid">
        <aside class="about-intro-index"><span>01</span><small class="lang-en">A story worth telling slowly</small><small class="lang-fr">Une histoire qui mérite d'être racontée</small></aside>
        <div class="about-intro-copy">
          <div class="about-kicker"><span class="lang-en">Our beginning</span><span class="lang-fr">Nos débuts</span></div>
          <h2><span class="lang-en">A business built on <em>belief.</em></span><span class="lang-fr">Une entreprise bâtie sur une <em>conviction.</em></span></h2>
          <p class="lang-en">Shama International began with a simple idea: authentic ethnic food deserved a trusted place in everyday European life. The business grew step by step—not through shortcuts, but through relationships, dependable service, an expanding range and respect for traditional taste.</p>
          <p class="lang-fr">Shama International est née d'une idée simple : les saveurs authentiques méritaient une place de confiance dans le quotidien européen. L'entreprise s'est développée étape par étape, grâce aux relations, à un service fiable, à une gamme en expansion et au respect du goût traditionnel.</p>
          <div class="about-intro-manifesto"><span>COURAGE</span><span>RELATIONSHIPS</span><span>QUALITY</span><span>CONSISTENCY</span><span>TRADITION</span><span>PROGRESS</span></div>
        </div>
      </div>
    </section>

    <section class="about-founder" id="founder">
      <div class="about-wrap about-founder-grid">
        <div class="about-founder-photo">
          <span class="about-founder-tag">FOUNDER</span>
          <img src="${founderImage}" alt="Sardar Zahoor Iqbal, founder of Shama International">
          <div class="about-founder-award"><b>2019</b><span>Pakistan Achievement Award<br>Community services in business</span></div>
        </div>
        <div class="about-founder-copy">
          <div class="about-kicker"><span class="lang-en">The founder's journey</span><span class="lang-fr">Le parcours du fondateur</span></div>
          <h2>Sardar<br>Zahoor Iqbal</h2>
          <p class="founder-lead lang-en">His story is much bigger than a short biography. From early business ambition in Pakistan, to a new beginning in France in 1988, to building Shama International in 2003, the journey is one of resilience, relationships and long-term belief.</p>
          <p class="founder-lead lang-fr">Son histoire va bien au-delà d'une courte biographie. De ses premières ambitions entrepreneuriales au Pakistan à son nouveau départ en France en 1988, puis à la création de Shama International en 2003, son parcours est marqué par la résilience, les relations humaines et une vision de long terme.</p>
          <div class="founder-facts"><div><b>1988</b><span class="lang-en">New chapter in France</span><span class="lang-fr">Nouveau départ en France</span></div><div><b>2003</b><span class="lang-en">Shama International begins</span><span class="lang-fr">Naissance de Shama International</span></div><div><b>250 m²</b><span class="lang-en">Humble warehouse beginnings</span><span class="lang-fr">Des débuts modestes en entrepôt</span></div></div>
          <a class="about-founder-link" href="#chapters"><span class="lang-en">Read the journey in chapters</span><span class="lang-fr">Lire le parcours par chapitres</span><b>↓</b></a>
        </div>
      </div>
    </section>

    <section class="about-chapters" id="chapters">
      <div class="about-wrap">
        <header class="about-section-head"><div><div class="about-kicker"><span class="lang-en">The story in chapters</span><span class="lang-fr">L'histoire en chapitres</span></div><h2><span class="lang-en">Room for the whole story.</span><span class="lang-fr">Toute l'histoire, sans la réduire.</span></h2></div><p class="lang-en">This section is intentionally built for deeper founder details. As more memories, milestones, photographs and personal reflections are provided, each chapter can grow without redesigning the page.</p><p class="lang-fr">Cette section est conçue pour accueillir davantage de détails sur le fondateur. À mesure que de nouveaux souvenirs, étapes, photos et témoignages seront ajoutés, chaque chapitre pourra s'enrichir sans refaire la page.</p></header>
        <div class="story-chapters">
          <article class="story-chapter"><span>01</span><div><b>Before Europe</b><h3 class="lang-en">Learning business early.</h3><h3 class="lang-fr">Apprendre le commerce très tôt.</h3></div><p class="lang-en">Born into a family striving for a better life in Pakistan, Sardar Zahoor Iqbal developed an interest in business at a young age and opened a grocery shop in his hometown of Fateh Jang. These early years shaped the discipline and customer focus that followed him throughout his career.</p><p class="lang-fr">Né dans une famille cherchant une vie meilleure au Pakistan, Sardar Zahoor Iqbal s'est intéressé très tôt au commerce et a ouvert une épicerie dans sa ville natale de Fateh Jang. Ces premières années ont forgé sa discipline et son attention aux clients.</p></article>
          <article class="story-chapter"><span>02</span><div><b>1988</b><h3 class="lang-en">A new adventure in France.</h3><h3 class="lang-fr">Une nouvelle aventure en France.</h3></div><p class="lang-en">In 1988 he began a new chapter in France. Experience across France, the United Kingdom and Italy broadened his understanding of customers, markets and the opportunity for authentic ethnic food in Europe.</p><p class="lang-fr">En 1988, il entame un nouveau chapitre en France. Ses expériences en France, au Royaume-Uni et en Italie élargissent sa compréhension des clients, des marchés et du potentiel des produits ethniques authentiques en Europe.</p></article>
          <article class="story-chapter"><span>03</span><div><b>2003</b><h3 class="lang-en">A family name becomes a business.</h3><h3 class="lang-fr">Un prénom familial devient une entreprise.</h3></div><p class="lang-en">The food business was founded in 2003 under the name of his elder daughter, Shama. What began in a modest 250 m² warehouse would grow through product variety, dependable service and long-standing relationships.</p><p class="lang-fr">L'entreprise alimentaire est fondée en 2003 sous le prénom de sa fille aînée, Shama. Partie d'un modeste entrepôt de 250 m², elle grandit grâce à la diversité des produits, à la fiabilité du service et à des relations durables.</p></article>
          <article class="story-chapter"><span>04</span><div><b>Today</b><h3 class="lang-en">Growth without losing the roots.</h3><h3 class="lang-fr">Grandir sans perdre ses racines.</h3></div><p class="lang-en">Today, Shama continues to build on the same fundamentals: listen carefully, deliver authentic flavour, support customers reliably and keep moving forward. More founder stories, personal lessons and key milestones can be added here as the archive grows.</p><p class="lang-fr">Aujourd'hui, Shama s'appuie toujours sur les mêmes fondamentaux : écouter, préserver les saveurs authentiques, accompagner les clients avec fiabilité et continuer d'avancer. D'autres récits, leçons personnelles et étapes clés pourront être ajoutés ici.</p></article>
        </div>
      </div>
    </section>

    <section class="about-timeline" id="timeline">
      <div class="about-wrap">
        <header class="about-section-head"><div><div class="about-kicker"><span class="lang-en">Milestones</span><span class="lang-fr">Étapes clés</span></div><h2><span class="lang-en">The journey, at a glance.</span><span class="lang-fr">Le parcours en un regard.</span></h2></div><p class="lang-en">A simple timeline for the major moments. New dates and achievements can be inserted as the full company history is documented.</p><p class="lang-fr">Une chronologie simple pour les grands moments. De nouvelles dates et réalisations pourront être ajoutées à mesure que l'histoire complète de l'entreprise sera documentée.</p></header>
        <div class="timeline-track">
          <article class="timeline-item"><b>1988</b><span>France</span><p class="lang-en">A new beginning and a new market to understand.</p><p class="lang-fr">Un nouveau départ et un nouveau marché à comprendre.</p></article>
          <article class="timeline-item"><b>2003</b><span>Shama</span><p class="lang-en">The business begins under a family name.</p><p class="lang-fr">L'entreprise naît sous un prénom familial.</p></article>
          <article class="timeline-item"><b>2019</b><span>Recognition</span><p class="lang-en">Pakistan Achievement Award for community services in business.</p><p class="lang-fr">Pakistan Achievement Award pour l'engagement communautaire dans les affaires.</p></article>
          <article class="timeline-item"><b>Today</b><span>Growth</span><p class="lang-en">A broader range, stronger relationships and European ambition.</p><p class="lang-fr">Une gamme plus large, des relations plus fortes et une ambition européenne.</p></article>
        </div>
      </div>
    </section>

    <section class="about-lessons">
      <div class="about-wrap about-lessons-grid">
        <div class="about-lessons-title"><div class="about-kicker"><span class="lang-en">What the journey teaches</span><span class="lang-fr">Ce que le parcours nous apprend</span></div><h2><span class="lang-en">Principles that became <em>motivation.</em></span><span class="lang-fr">Des principes devenus <em>motivation.</em></span></h2></div>
        <div class="lesson-cards">
          <article class="lesson-card"><span>01</span><h3 class="lang-en">Courage before certainty.</h3><h3 class="lang-fr">Le courage avant les certitudes.</h3><p class="lang-en">Progress often starts before every answer is available. The important part is moving with discipline, learning quickly and staying committed to the goal.</p><p class="lang-fr">Le progrès commence souvent avant d'avoir toutes les réponses. L'essentiel est d'avancer avec discipline, d'apprendre vite et de rester engagé.</p></article>
          <article class="lesson-card"><span>02</span><h3 class="lang-en">Relationships before transactions.</h3><h3 class="lang-fr">Les relations avant les transactions.</h3><p class="lang-en">Long-term business is built through trust. Suppliers, customers and co-workers are part of the same journey, and dependable relationships create lasting value.</p><p class="lang-fr">Le long terme se construit par la confiance. Fournisseurs, clients et collaborateurs font partie du même parcours, et les relations fiables créent une valeur durable.</p></article>
          <article class="lesson-card"><span>03</span><h3 class="lang-en">Grow without losing your roots.</h3><h3 class="lang-fr">Grandir sans perdre ses racines.</h3><p class="lang-en">Shama can expand its range and ambition while protecting what made the brand meaningful in the first place: traditional taste, care and consistency.</p><p class="lang-fr">Shama peut élargir sa gamme et ses ambitions tout en préservant ce qui donne du sens à la marque : goût traditionnel, attention et constance.</p></article>
        </div>
      </div>
    </section>

    <section class="about-video-journal" id="videos">
      <div class="about-wrap">
        <div class="video-journal-head"><div><div class="about-kicker"><span class="lang-en">Stories in motion</span><span class="lang-fr">L'histoire en vidéo</span></div><h2><span class="lang-en">A home for the videos to come.</span><span class="lang-fr">Un espace pour les vidéos à venir.</span></h2></div><p class="lang-en">Founder interviews, motivational talks, company memories and behind-the-scenes stories can be added here as individual video chapters.</p><p class="lang-fr">Interviews du fondateur, prises de parole inspirantes, souvenirs de l'entreprise et coulisses pourront être ajoutés ici sous forme de chapitres vidéo.</p></div>
        <div class="video-journal-grid">
          <article class="video-story"><img src="${founderImage}" alt="Founder interview"><span class="video-play">▶</span><div class="video-story-copy"><small>Video chapter 01</small><h3 class="lang-en">The founder's journey</h3><h3 class="lang-fr">Le parcours du fondateur</h3><span class="lang-en">Interview, memories and the moments that shaped Shama.</span><span class="lang-fr">Interview, souvenirs et moments qui ont façonné Shama.</span></div></article>
          <article class="video-story"><img src="${spiceVisual}" alt="Authentic spices"><span class="video-play">▶</span><div class="video-story-copy"><small>Video chapter 02</small><h3 class="lang-en">Lessons from the journey</h3><h3 class="lang-fr">Les leçons du parcours</h3><span class="lang-en">Motivation, business principles and personal reflections.</span><span class="lang-fr">Motivation, principes d'entreprise et réflexions personnelles.</span></div></article>
          <article class="video-story"><img src="${teaVisual}" alt="Food and tea"><span class="video-play">▶</span><div class="video-story-copy"><small>Video chapter 03</small><h3 class="lang-en">Inside Shama today</h3><h3 class="lang-fr">Shama aujourd'hui</h3><span class="lang-en">People, products, warehouse stories and the next chapter.</span><span class="lang-fr">Équipe, produits, entrepôt et prochain chapitre.</span></div></article>
        </div>
        <p class="video-note lang-en">Video cards are ready for the final video links and thumbnails when they are supplied.</p>
        <p class="video-note lang-fr">Les cartes vidéo sont prêtes à recevoir les liens et miniatures définitifs lorsqu'ils seront fournis.</p>
      </div>
    </section>

    <section class="about-vision">
      <div class="about-wrap"><div class="about-kicker" style="justify-content:center"><span class="lang-en">The next chapter</span><span class="lang-fr">Le prochain chapitre</span></div><h2><span class="lang-en">Traditional taste.<br><em>Forward ambition.</em></span><span class="lang-fr">Goût traditionnel.<br><em>Ambition d'avenir.</em></span></h2><p class="lang-en">The story keeps growing through every product, every partnership and every customer who chooses Shama.</p><p class="lang-fr">L'histoire continue de grandir à travers chaque produit, chaque partenariat et chaque client qui choisit Shama.</p><a href="catalogue.html"><span class="lang-en">Explore the Shama range</span><span class="lang-fr">Explorer la gamme Shama</span><b>↗</b></a></div>
    </section>`;

  document.title = 'About Us | Shama International';

  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('about-visible');
      reveal.unobserve(entry.target);
    }
  }), { threshold: .08, rootMargin: '0px 0px -40px' });

  document.querySelectorAll('.about-intro-grid,.about-founder-grid,.story-chapter,.timeline-item,.lesson-card,.video-story,.about-vision .about-wrap').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';
    reveal.observe(el);
  });

  const motionStyle = document.createElement('style');
  motionStyle.textContent = '.about-visible{opacity:1!important;transform:none!important}@media(prefers-reduced-motion:reduce){.about-intro-grid,.about-founder-grid,.story-chapter,.timeline-item,.lesson-card,.video-story,.about-vision .about-wrap{opacity:1!important;transform:none!important;transition:none!important}}';
  document.head.appendChild(motionStyle);
})();
