(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const founderVideos = [
    {
      id: 'eAk69JajJmI',
      title: 'Aik Din Geo Ke Saath — Sardar Zahoor Iqbal',
      program: 'Aik Din Geo Ke Saath',
      date: '12 Nov 2023',
      source: 'Geo / Aik Din Geo Kay Sath',
      descriptionEn: 'Long-form founder interview hosted by Suhail Warraich.',
      descriptionFr: 'Entretien long format du fondateur présenté par Suhail Warraich.'
    },
    {
      id: 'Xa8gZp_M0_8',
      title: 'Exclusive Interview — Overseas Ki Dunya',
      program: 'Overseas Ki Dunya',
      date: '01 Feb 2025',
      source: 'Dunya News',
      descriptionEn: 'Business, overseas journey and community leadership.',
      descriptionFr: 'Parcours entrepreneurial, diaspora et leadership communautaire.'
    },
    {
      id: '14L2zA2uv_g',
      title: 'Paris Media Talk — Business Forum France',
      program: 'Dunya UK',
      date: '05 Jul 2025',
      source: 'Dunya News Global',
      descriptionEn: 'Public media appearance in Paris as Chairman Business Forum France.',
      descriptionFr: 'Intervention publique à Paris en tant que Chairman Business Forum France.'
    }
  ];

  const publicHighlights = [
    {
      year: '2019',
      tagEn: 'Award',
      tagFr: 'Distinction',
      titleEn: 'Pakistan Achievement Awards International',
      titleFr: 'Pakistan Achievement Awards International',
      copyEn: 'Recognition for excellent community services in business at the 10th PAA.',
      copyFr: 'Distinction pour les services remarquables rendus à la communauté dans le domaine des affaires.',
      href: 'https://www.shamaonline.com/aboutus'
    },
    {
      year: '2023',
      tagEn: 'Business leadership',
      tagFr: 'Leadership économique',
      titleEn: 'Pakistan Business Forum France',
      titleFr: 'Pakistan Business Forum France',
      copyEn: 'Official government coverage records his leadership and vision to expand the forum across Europe.',
      copyFr: 'Une source gouvernementale officielle documente son leadership et sa vision d’expansion du forum en Europe.',
      href: 'https://pid.gov.pk/site/press_detail/22857'
    },
    {
      year: '2024',
      tagEn: 'Overseas investment',
      tagFr: 'Investissement diaspora',
      titleEn: 'European investor delegation',
      titleFr: 'Délégation d’investisseurs européens',
      copyEn: 'Led a Pakistan Business Forum delegation in discussions on investment and overseas facilitation.',
      copyFr: 'A dirigé une délégation du Pakistan Business Forum lors d’échanges sur l’investissement et la facilitation de la diaspora.',
      href: 'https://pid.gov.pk/site/press_detail/26017'
    },
    {
      year: '2024',
      tagEn: 'Community',
      tagFr: 'Communauté',
      titleEn: 'Overseas Facilitation Desk dialogue',
      titleFr: 'Dialogue sur la facilitation des expatriés',
      copyEn: 'A European overseas Pakistani investor delegation led by him met the Governor Punjab on diaspora support.',
      copyFr: 'Une délégation d’investisseurs pakistanais d’Europe qu’il dirigeait a rencontré le Gouverneur du Pendjab.',
      href: 'https://www.app.com.pk/domestic/governor-punjab-announces-overseas-facilitation-desk-at-governors-house/'
    },
    {
      year: '2025',
      tagEn: 'Trade & investment',
      tagFr: 'Commerce & investissement',
      titleEn: 'Building business bridges in Paris',
      titleFr: 'Créer des ponts économiques à Paris',
      copyEn: 'Invited business leaders to a Paris convention focused on B2B networking, matchmaking and joint ventures.',
      copyFr: 'Invitation de dirigeants à une convention parisienne axée sur le networking B2B et les coentreprises.',
      href: 'https://islamabadpost.com.pk/icci-president-highlights-urgent-need-for-expanding-pakistans-export-footprint/'
    },
    {
      year: 'Today',
      tagEn: 'Europe',
      tagFr: 'Europe',
      titleEn: 'Chairman — Pakistan Business Forum Europe',
      titleFr: 'Chairman — Pakistan Business Forum Europe',
      copyEn: 'PBF Europe’s official leadership page currently lists Sardar Zahoor Iqbal as Chairman.',
      copyFr: 'La page officielle de PBF Europe présente actuellement Sardar Zahoor Iqbal comme Chairman.',
      href: 'https://www.pbfeurope.com/founders'
    }
  ];

  const mount = () => {
    if (document.querySelector('.about-founder-video')) return;
    const media = document.querySelector('.about-public-media');
    if (!media) return;

    const block = document.createElement('section');
    block.className = 'about-founder-video';
    block.setAttribute('aria-label', 'Founder media and public journey');
    block.innerHTML = `
      <header class="about-founder-media-head">
        <div>
          <span class="about-founder-media-kicker"><span class="lang-en">Founder media & public journey</span><span class="lang-fr">Médias & parcours public du fondateur</span></span>
          <h3><span class="lang-en">More than one interview. <em>A documented journey.</em></span><span class="lang-fr">Plus qu’une interview. <em>Un parcours documenté.</em></span></h3>
        </div>
        <p class="lang-en">Interviews, awards, business leadership and public records — collected in one place.</p>
        <p class="lang-fr">Interviews, distinctions, leadership économique et sources publiques — réunis au même endroit.</p>
      </header>

      <div class="about-founder-media-stage">
        <div class="about-founder-player-side">
          <div class="about-founder-video-frame">
            <iframe id="about-founder-main-video"
              src="https://www.youtube-nocookie.com/embed/${founderVideos[0].id}?rel=0&modestbranding=1"
              title="${founderVideos[0].title}"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div class="about-founder-now-playing">
            <div>
              <small><span class="lang-en">Now playing</span><span class="lang-fr">Lecture en cours</span> · <span id="about-founder-video-date">${founderVideos[0].date}</span></small>
              <strong id="about-founder-video-title">${founderVideos[0].title}</strong>
              <p id="about-founder-video-description"><span class="lang-en">${founderVideos[0].descriptionEn}</span><span class="lang-fr">${founderVideos[0].descriptionFr}</span></p>
            </div>
            <a id="about-founder-youtube-link" href="https://www.youtube.com/watch?v=${founderVideos[0].id}" target="_blank" rel="noopener"><span class="lang-en">YouTube</span><span class="lang-fr">YouTube</span> ↗</a>
          </div>
        </div>

        <aside class="about-founder-video-archive">
          <div class="about-founder-video-archive-head">
            <span><span class="lang-en">Video archive</span><span class="lang-fr">Vidéothèque</span></span>
            <b>${founderVideos.length}</b>
          </div>
          <div class="about-founder-video-list" id="about-founder-video-list" role="list"></div>
        </aside>
      </div>

      <div class="about-founder-public-block">
        <div class="about-founder-public-head">
          <div><span><span class="lang-en">Public highlights</span><span class="lang-fr">Temps forts publics</span></span><h4><span class="lang-en">Awards, leadership & business activity</span><span class="lang-fr">Distinctions, leadership & activité économique</span></h4></div>
          <p><span class="lang-en">Verified records beyond the videos.</span><span class="lang-fr">Sources vérifiées au-delà des vidéos.</span></p>
        </div>
        <div class="about-founder-public-grid" id="about-founder-public-grid"></div>
      </div>
    `;

    const title = media.querySelector('.public-media-title');
    if (title) title.insertAdjacentElement('afterend', block);
    else media.prepend(block);

    const iframe = block.querySelector('#about-founder-main-video');
    const currentTitle = block.querySelector('#about-founder-video-title');
    const currentDate = block.querySelector('#about-founder-video-date');
    const currentDescription = block.querySelector('#about-founder-video-description');
    const youtubeLink = block.querySelector('#about-founder-youtube-link');
    const list = block.querySelector('#about-founder-video-list');
    const publicGrid = block.querySelector('#about-founder-public-grid');

    const selectVideo = (video, button) => {
      iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`;
      iframe.title = video.title;
      currentTitle.textContent = video.title;
      currentDate.textContent = video.date;
      currentDescription.innerHTML = `<span class="lang-en">${video.descriptionEn}</span><span class="lang-fr">${video.descriptionFr}</span>`;
      youtubeLink.href = `https://www.youtube.com/watch?v=${video.id}`;
      list.querySelectorAll('.about-founder-video-item').forEach(item => item.classList.remove('active'));
      if (button) button.classList.add('active');
    };

    founderVideos.forEach((video, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `about-founder-video-item${index === 0 ? ' active' : ''}`;
      button.setAttribute('role', 'listitem');
      button.setAttribute('aria-label', `Play ${video.title}`);
      button.innerHTML = `
        <span class="about-founder-video-thumb">
          <img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="" loading="lazy">
          <i>▶</i>
        </span>
        <span class="about-founder-video-item-copy">
          <small>${video.date}</small>
          <strong>${video.title}</strong>
          <em>${video.source}</em>
        </span>`;
      button.addEventListener('click', () => selectVideo(video, button));
      list.appendChild(button);
    });

    publicHighlights.forEach(item => {
      const card = document.createElement('a');
      card.className = 'about-founder-public-card';
      card.href = item.href;
      card.target = '_blank';
      card.rel = 'noopener';
      card.innerHTML = `
        <div class="about-founder-public-card-top"><b>${item.year}</b><span><span class="lang-en">${item.tagEn}</span><span class="lang-fr">${item.tagFr}</span></span></div>
        <h5><span class="lang-en">${item.titleEn}</span><span class="lang-fr">${item.titleFr}</span></h5>
        <p><span class="lang-en">${item.copyEn}</span><span class="lang-fr">${item.copyFr}</span></p>
        <strong class="about-founder-public-open"><span class="lang-en">View source</span><span class="lang-fr">Voir la source</span> ↗</strong>`;
      publicGrid.appendChild(card);
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
  setTimeout(mount, 150);
  setTimeout(mount, 700);
})();
