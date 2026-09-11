(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const mount = () => {
    if (document.querySelector('.about-founder-video')) return;

    const media = document.querySelector('.about-public-media');
    if (!media) return;

    const block = document.createElement('section');
    block.className = 'about-founder-video';
    block.setAttribute('aria-label', 'Featured founder interview');
    block.innerHTML = `
      <div class="about-founder-video-grid">
        <div class="about-founder-video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/s5Xb1zEhAjY?rel=0&modestbranding=1"
            title="Aik Din Geo Ke Saath - Sardar Zahoor Iqbal, President Shama International"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="about-founder-video-copy">
          <span class="video-badge"><span class="lang-en">Verified television interview</span><span class="lang-fr">Interview télévisé vérifié</span></span>
          <h3 class="lang-en">A day with the <em>founder.</em></h3>
          <h3 class="lang-fr">Une journée avec le <em>fondateur.</em></h3>
          <p class="lang-en">In this 2023 episode of <strong>Aik Din Geo Ke Saath</strong>, Sardar Zahoor Iqbal appears as President of Shama International in a long-form interview hosted by Suhail Warraich. It gives the About page a direct, personal layer alongside the written company history.</p>
          <p class="lang-fr">Dans cet épisode 2023 de <strong>Aik Din Geo Ke Saath</strong>, Sardar Zahoor Iqbal apparaît en tant que président de Shama International dans un entretien long format présenté par Suhail Warraich. Cette vidéo apporte une dimension plus personnelle à l'histoire écrite de l'entreprise.</p>
          <div class="about-founder-video-meta">
            <div><b>Date</b><span>12 Nov 2023</span></div>
            <div><b>Program</b><span>Aik Din Geo Ke Saath</span></div>
            <div><b>Host</b><span>Suhail Warraich</span></div>
            <div><b>Source</b><span>Geo News / Aik Din Geo Kay Sath</span></div>
          </div>
          <div class="about-founder-video-links">
            <a href="https://www.youtube.com/watch?v=s5Xb1zEhAjY" target="_blank" rel="noopener"><span class="lang-en">Watch on YouTube</span><span class="lang-fr">Voir sur YouTube</span><b>↗</b></a>
            <a href="https://www.geo.tv/shows/aik-din-geo-ke-saath/518675-interview-with-pakistani-businessman-sardar-zahoor-iqbal" target="_blank" rel="noopener"><span class="lang-en">Geo interview page</span><span class="lang-fr">Page de l'interview Geo</span><b>↗</b></a>
          </div>
          <p class="about-founder-video-note lang-en">This video is embedded from a verified Geo News publication and can be joined later by additional verified interviews, speeches and event footage.</p>
          <p class="about-founder-video-note lang-fr">Cette vidéo provient d'une publication vérifiée de Geo News. D'autres interviews, discours et vidéos d'événements vérifiés pourront être ajoutés ensuite.</p>
        </div>
      </div>
    `;

    const title = media.querySelector('.public-media-title');
    if (title) {
      title.insertAdjacentElement('afterend', block);
    } else {
      media.prepend(block);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

  setTimeout(mount, 150);
  setTimeout(mount, 700);
})();
