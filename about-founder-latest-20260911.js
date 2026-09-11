(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const mount = () => {
    if (document.querySelector('.about-founder-latest')) return;
    const media = document.querySelector('.about-public-media');
    if (!media) return;

    const section = document.createElement('section');
    section.className = 'about-founder-latest';
    section.innerHTML = `
      <div class="about-founder-latest-head">
        <div>
          <small><span class="lang-en">Recent public activity</span><span class="lang-fr">Activité publique récente</span></small>
          <h3><span class="lang-en">The journey is still moving.</span><span class="lang-fr">Le parcours continue d'avancer.</span></h3>
        </div>
        <p class="lang-en">Recent public records show Sardar Zahoor Iqbal continuing to work across business, diaspora engagement and Pakistan-France economic relations beyond Shama International.</p>
        <p class="lang-fr">Des sources publiques récentes montrent que Sardar Zahoor Iqbal poursuit son engagement dans les affaires, la diaspora et les relations économiques Pakistan-France au-delà de Shama International.</p>
      </div>
      <div class="about-founder-latest-grid">
        <article class="about-founder-latest-card">
          <time>Dec 2024</time>
          <h4 class="lang-en">Pakistan-France trade dialogue</h4><h4 class="lang-fr">Dialogue commercial Pakistan-France</h4>
          <p class="lang-en">Associated Press of Pakistan reported a meeting with French Ambassador Nicolas Galey focused on stronger trade, investment and private-sector cooperation between Pakistan and France.</p>
          <p class="lang-fr">L'Associated Press of Pakistan a relaté une rencontre avec l'ambassadeur de France Nicolas Galey consacrée au commerce, à l'investissement et à la coopération entre les secteurs privés pakistanais et français.</p>
          <a href="https://www.app.com.pk/diplomatic-corner/pakistan-france-ties-strengthen-with-focus-on-trade-investment/" target="_blank" rel="noopener"><span class="lang-en">Official coverage</span><span class="lang-fr">Source officielle</span><b>↗</b></a>
        </article>
        <article class="about-founder-latest-card">
          <time>Nov 2025</time>
          <h4 class="lang-en">Building business bridges in Paris</h4><h4 class="lang-fr">Créer des ponts économiques à Paris</h4>
          <p class="lang-en">During a visit to the Islamabad Chamber of Commerce & Industry, he publicly invited business leaders to a Pakistan Business Forum convention in Paris and highlighted B2B networking, matchmaking and joint ventures.</p>
          <p class="lang-fr">Lors d'une visite à la Chambre de commerce et d'industrie d'Islamabad, il a invité des chefs d'entreprise à une convention du Pakistan Business Forum à Paris et mis en avant les rencontres B2B et les coentreprises.</p>
          <a href="https://islamabadpost.com.pk/icci-president-highlights-urgent-need-for-expanding-pakistans-export-footprint/" target="_blank" rel="noopener"><span class="lang-en">Public report</span><span class="lang-fr">Article public</span><b>↗</b></a>
        </article>
        <article class="about-founder-latest-card">
          <time>Feb 2026</time>
          <h4 class="lang-en">Diaspora, investment and development</h4><h4 class="lang-fr">Diaspora, investissement et développement</h4>
          <p class="lang-en">The Governor House Khyber Pakhtunkhwa recorded a meeting with Sardar Zahoor Iqbal as Chairman Business Forum France, discussing diaspora contribution, investment opportunities and socio-economic development.</p>
          <p class="lang-fr">Le Gouverneur du Khyber Pakhtunkhwa a publié le compte rendu d'une rencontre avec Sardar Zahoor Iqbal, Chairman Business Forum France, autour de la contribution de la diaspora, de l'investissement et du développement socio-économique.</p>
          <a href="https://governor.kp.gov.pk/node/600" target="_blank" rel="noopener"><span class="lang-en">Government record</span><span class="lang-fr">Source gouvernementale</span><b>↗</b></a>
        </article>
      </div>
    `;

    media.insertAdjacentElement('beforebegin', section);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

  setTimeout(mount, 180);
  setTimeout(mount, 800);
})();
