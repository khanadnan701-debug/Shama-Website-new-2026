(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const founderVideos = [
    {
      id: 'eAk69JajJmI',
      titleEn: 'A day with the founder.',
      titleFr: 'Une journée avec le fondateur.',
      cardTitle: 'Aik Din Geo Ke Saath — Sardar Zahoor Iqbal',
      program: 'Aik Din Geo Ke Saath',
      date: '12 Nov 2023',
      source: 'Aik Din Geo Kay Sath / Geo',
      descriptionEn: 'A long-form television interview with Sardar Zahoor Iqbal as President of Shama International, hosted by Suhail Warraich.',
      descriptionFr: 'Un entretien télévisé long format avec Sardar Zahoor Iqbal, président de Shama International, présenté par Suhail Warraich.'
    },
    {
      id: 'Xa8gZp_M0_8',
      titleEn: 'The overseas business journey.',
      titleFr: 'Le parcours entrepreneurial à l’international.',
      cardTitle: 'Sardar Zahoor Iqbal Exclusive Interview — Dunya News',
      program: 'Overseas Ki Dunya',
      date: '01 Feb 2025',
      source: 'Dunya News',
      descriptionEn: 'An exclusive interview focused on Sardar Zahoor Iqbal’s overseas journey, business experience and community presence.',
      descriptionFr: 'Un entretien exclusif consacré au parcours international de Sardar Zahoor Iqbal, à son expérience entrepreneuriale et à son engagement communautaire.'
    },
    {
      id: '14L2zA2uv_g',
      titleEn: 'Business Forum France — Paris.',
      titleFr: 'Business Forum France — Paris.',
      cardTitle: 'Paris: Sardar Zahoor Iqbal talks to the media — Dunya UK',
      program: 'Dunya UK',
      date: '05 Jul 2025',
      source: 'Dunya News Global Official',
      descriptionEn: 'A public media appearance in Paris featuring Sardar Zahoor Iqbal in his role with Business Forum France.',
      descriptionFr: 'Une intervention publique à Paris présentant Sardar Zahoor Iqbal dans le cadre de ses activités avec Business Forum France.'
    }
  ];

  const mount = () => {
    if (document.querySelector('.about-founder-video')) return;

    const media = document.querySelector('.about-public-media');
    if (!media) return;

    const block = document.createElement('section');
    block.className = 'about-founder-video';
    block.setAttribute('aria-label', 'Founder video interviews and appearances');
    block.innerHTML = `
      <div class="about-founder-video-grid">
        <div class="about-founder-video-frame">
          <iframe
            id="about-founder-main-video"
            src="https://www.youtube-nocookie.com/embed/${founderVideos[0].id}?rel=0&modestbranding=1"
            title="${founderVideos[0].cardTitle}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="about-founder-video-copy">
          <span class="video-badge"><span class="lang-en">Verified public videos</span><span class="lang-fr">Vidéos publiques vérifiées</span></span>
          <h3 id="about-founder-video-title"><span class="lang-en">${founderVideos[0].titleEn}</span><span class="lang-fr">${founderVideos[0].titleFr}</span></h3>
          <p id="about-founder-video-description"><span class="lang-en">${founderVideos[0].descriptionEn}</span><span class="lang-fr">${founderVideos[0].descriptionFr}</span></p>
          <div class="about-founder-video-meta" id="about-founder-video-meta">
            <div><b><span class="lang-en">Date</span><span class="lang-fr">Date</span></b><span>${founderVideos[0].date}</span></div>
            <div><b><span class="lang-en">Program</span><span class="lang-fr">Émission</span></b><span>${founderVideos[0].program}</span></div>
            <div><b><span class="lang-en">Source</span><span class="lang-fr">Source</span></b><span>${founderVideos[0].source}</span></div>
          </div>
          <div class="about-founder-video-links">
            <a id="about-founder-youtube-link" href="https://www.youtube.com/watch?v=${founderVideos[0].id}" target="_blank" rel="noopener"><span class="lang-en">Watch on YouTube</span><span class="lang-fr">Voir sur YouTube</span><b>↗</b></a>
          </div>
        </div>
      </div>
      <div class="about-founder-video-library">
        <div class="about-founder-video-library-head">
          <div><span class="eyebrow light"><span class="lang-en">Video library</span><span class="lang-fr">Vidéothèque</span></span><h4><span class="lang-en">Founder interviews & appearances</span><span class="lang-fr">Interviews et apparitions du fondateur</span></h4></div>
          <p><span class="lang-en">Select any video to play it above.</span><span class="lang-fr">Sélectionnez une vidéo pour la lire ci-dessus.</span></p>
        </div>
        <div class="about-founder-video-list" id="about-founder-video-list" role="list"></div>
      </div>
    `;

    const title = media.querySelector('.public-media-title');
    if (title) {
      title.insertAdjacentElement('afterend', block);
    } else {
      media.prepend(block);
    }

    const iframe = block.querySelector('#about-founder-main-video');
    const titleNode = block.querySelector('#about-founder-video-title');
    const descriptionNode = block.querySelector('#about-founder-video-description');
    const metaNode = block.querySelector('#about-founder-video-meta');
    const youtubeLink = block.querySelector('#about-founder-youtube-link');
    const list = block.querySelector('#about-founder-video-list');

    const selectVideo = (video, button) => {
      iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`;
      iframe.title = video.cardTitle;
      titleNode.innerHTML = `<span class="lang-en">${video.titleEn}</span><span class="lang-fr">${video.titleFr}</span>`;
      descriptionNode.innerHTML = `<span class="lang-en">${video.descriptionEn}</span><span class="lang-fr">${video.descriptionFr}</span>`;
      metaNode.innerHTML = `
        <div><b><span class="lang-en">Date</span><span class="lang-fr">Date</span></b><span>${video.date}</span></div>
        <div><b><span class="lang-en">Program</span><span class="lang-fr">Émission</span></b><span>${video.program}</span></div>
        <div><b><span class="lang-en">Source</span><span class="lang-fr">Source</span></b><span>${video.source}</span></div>`;
      youtubeLink.href = `https://www.youtube.com/watch?v=${video.id}`;
      list.querySelectorAll('.about-founder-video-item').forEach(item => item.classList.remove('active'));
      if (button) button.classList.add('active');
      block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    founderVideos.forEach((video, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `about-founder-video-item${index === 0 ? ' active' : ''}`;
      button.setAttribute('role', 'listitem');
      button.setAttribute('aria-label', `Play ${video.cardTitle}`);
      button.innerHTML = `
        <span class="about-founder-video-thumb">
          <img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="" loading="lazy">
          <i>▶</i>
        </span>
        <span class="about-founder-video-item-copy">
          <small>${video.date} · ${video.source}</small>
          <strong>${video.cardTitle}</strong>
          <em><span class="lang-en">Play video</span><span class="lang-fr">Lire la vidéo</span> →</em>
        </span>`;
      button.addEventListener('click', () => selectVideo(video, button));
      list.appendChild(button);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

  setTimeout(mount, 150);
  setTimeout(mount, 700);
})();
