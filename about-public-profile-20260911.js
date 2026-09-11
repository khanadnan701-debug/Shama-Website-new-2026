(() => {
  'use strict';
  if (document.body.dataset.page !== 'about') return;

  const main = document.querySelector('#page-content');
  if (!main) return;

  const mount = () => {
    if (document.querySelector('.about-public-profile')) return;

    const founderSection = document.querySelector('.about-founder');
    const chaptersSection = document.querySelector('.about-chapters');
    const anchor = chaptersSection || founderSection;
    if (!anchor) return;

    const section = document.createElement('section');
    section.className = 'about-public-profile';
    section.innerHTML = `
      <div class="about-public-shell">
        <header class="about-public-head">
          <div>
            <span class="about-public-eyebrow"><span class="lang-en">Publicly documented journey</span><span class="lang-fr">Un parcours documenté publiquement</span></span>
            <h2><span class="lang-en">From entrepreneur to <em>community leader.</em></span><span class="lang-fr">De l'entrepreneur au <em>leader communautaire.</em></span></h2>
          </div>
          <p class="lang-en">Beyond Shama International, public records and official organisations document a wider story of entrepreneurship, community service and business leadership between France, Europe and Pakistan.</p>
          <p class="lang-fr">Au-delà de Shama International, des sources publiques et des organisations officielles retracent un parcours plus large d'entrepreneuriat, de service à la communauté et de leadership économique entre la France, l'Europe et le Pakistan.</p>
        </header>

        <div class="about-public-grid">
          <article class="about-public-card feature">
            <span class="public-number">01</span>
            <div class="public-card-copy">
              <small>1988 → 2003</small>
              <h3 class="lang-en">A new life in France became the foundation for Shama.</h3>
              <h3 class="lang-fr">Une nouvelle vie en France est devenue la base de Shama.</h3>
              <p class="lang-en">Shama's official company history says Sardar Zahoor Iqbal began his journey in business in Fateh Jang, Pakistan, later moved to France in 1988 and, after years of experience across France, the UK and Italy, started the food business in 2003 under the name of his elder daughter, Shama.</p>
              <p class="lang-fr">L'histoire officielle de Shama indique que Sardar Zahoor Iqbal a commencé son parcours commercial à Fateh Jang, au Pakistan, avant de s'installer en France en 1988. Après plusieurs années d'expérience en France, au Royaume-Uni et en Italie, il a lancé l'activité alimentaire en 2003 sous le prénom de sa fille aînée, Shama.</p>
            </div>
          </article>

          <article class="about-public-card metric">
            <span class="public-number">02</span>
            <strong>250 m²</strong>
            <span class="metric-arrow">→</span>
            <strong>10,000 m²</strong>
            <h3 class="lang-en">From a modest warehouse to a major distribution centre.</h3>
            <h3 class="lang-fr">D'un entrepôt modeste à un important centre de distribution.</h3>
            <p class="lang-en">The company's public profile describes growth from a 250 m² warehouse to a 10,000 m² distribution centre in Rosny-sous-Bois.</p>
            <p class="lang-fr">Le profil public de l'entreprise décrit une croissance d'un entrepôt de 250 m² à un centre de distribution de 10 000 m² à Rosny-sous-Bois.</p>
          </article>

          <article class="about-public-card award">
            <span class="public-number">03</span>
            <div class="award-year">2019</div>
            <h3>Pakistan Achievement Awards International</h3>
            <p class="lang-en">Shama's official history records that he received recognition for excellent community services in business at the 10th Pakistan Achievement Awards.</p>
            <p class="lang-fr">L'histoire officielle de Shama indique qu'il a été distingué pour ses services remarquables à la communauté dans le domaine des affaires lors de la 10e édition des Pakistan Achievement Awards.</p>
          </article>

          <article class="about-public-card leadership">
            <span class="public-number">04</span>
            <small>FRANCE · EUROPE</small>
            <h3 class="lang-en">Business leadership beyond the company.</h3>
            <h3 class="lang-fr">Un leadership économique au-delà de l'entreprise.</h3>
            <p class="lang-en">Pakistan Business Forum Europe currently lists Sardar Zahoor Iqbal as its Chairman. Government coverage from Pakistan also identifies him as Chairman of Pakistan Business Forum France and later Pakistan Business Forum Europe.</p>
            <p class="lang-fr">Pakistan Business Forum Europe présente actuellement Sardar Zahoor Iqbal comme son Chairman. Des publications gouvernementales pakistanaises l'ont également identifié comme Chairman de Pakistan Business Forum France, puis de Pakistan Business Forum Europe.</p>
          </article>
        </div>

        <div class="about-public-storyline">
          <div class="public-storyline-intro">
            <span>05</span>
            <div>
              <small class="lang-en">Leadership in action</small><small class="lang-fr">Le leadership en action</small>
              <h3 class="lang-en">Representing business and overseas communities.</h3>
              <h3 class="lang-fr">Représenter les entreprises et les communautés expatriées.</h3>
            </div>
          </div>
          <div class="public-storyline-items">
            <article>
              <b>2023</b>
              <p class="lang-en">At an official meeting reported by Pakistan's Press Information Department, he presented a review of Pakistan Business Forum France's work and spoke about expanding its activities across Europe to strengthen the voice of overseas Pakistani businesspeople.</p>
              <p class="lang-fr">Lors d'une réunion officielle relayée par le Press Information Department du Pakistan, il a présenté le bilan des activités du Pakistan Business Forum France et évoqué l'élargissement de ses actions à l'échelle européenne afin de renforcer la voix des entrepreneurs pakistanais de l'étranger.</p>
            </article>
            <article>
              <b>2024</b>
              <p class="lang-en">Official government and Associated Press of Pakistan coverage records him leading delegations of overseas Pakistani investors from France and other European countries in discussions on investment, facilitation and diaspora issues.</p>
              <p class="lang-fr">Des sources gouvernementales officielles et l'Associated Press of Pakistan le mentionnent à la tête de délégations d'investisseurs pakistanais établis en France et dans d'autres pays européens, lors d'échanges consacrés à l'investissement, à la facilitation et aux enjeux de la diaspora.</p>
            </article>
            <article>
              <b>Today</b>
              <p class="lang-en">PBF Europe's official leadership page lists him as Chairman, reflecting a role that connects entrepreneurship with community networking and Pakistan-Europe business relations.</p>
              <p class="lang-fr">La page officielle de direction de PBF Europe le présente comme Chairman, illustrant un rôle qui relie entrepreneuriat, réseau communautaire et relations économiques entre le Pakistan et l'Europe.</p>
            </article>
          </div>
        </div>

        <section class="about-public-business">
          <div class="public-business-copy">
            <span class="about-public-eyebrow"><span class="lang-en">The company he built</span><span class="lang-fr">L'entreprise qu'il a construite</span></span>
            <h3 class="lang-en">Scale grew. The principle stayed the same: understand the customer.</h3>
            <h3 class="lang-fr">L'échelle a grandi. Le principe est resté le même : comprendre le client.</h3>
            <p class="lang-en">Shama's official profile describes a portfolio spanning the Shama, Shaheen, Shere e Punjab and Sunrise brands, alongside distribution relationships with established ethnic food brands. The company says it expanded its business into the UK and Italy while continuing to introduce new Shama products in response to customer demand.</p>
            <p class="lang-fr">Le profil officiel de Shama présente un portefeuille comprenant les marques Shama, Shaheen, Shere e Punjab et Sunrise, ainsi que des accords de distribution avec des marques reconnues de l'alimentation ethnique. L'entreprise indique avoir développé ses activités au Royaume-Uni et en Italie tout en continuant à lancer de nouveaux produits Shama en réponse aux besoins des clients.</p>
          </div>
          <div class="public-business-stats">
            <div><b>4</b><span class="lang-en">core house brands named publicly</span><span class="lang-fr">marques principales citées publiquement</span></div>
            <div><b>UK + IT</b><span class="lang-en">international business expansion</span><span class="lang-fr">développement international</span></div>
            <div><b>800+</b><span class="lang-en">food lines referenced on the company's LinkedIn profile</span><span class="lang-fr">références alimentaires mentionnées sur le profil LinkedIn de l'entreprise</span></div>
          </div>
        </section>

        <section class="about-public-media">
          <div class="public-media-title">
            <span class="about-public-eyebrow"><span class="lang-en">Media & public record</span><span class="lang-fr">Médias & sources publiques</span></span>
            <h3 class="lang-en">The archive can keep growing.</h3>
            <h3 class="lang-fr">Les archives peuvent continuer à s'enrichir.</h3>
            <p class="lang-en">Verified interviews and event videos can be embedded here as they are found. For now, these public sources document the founder and his wider leadership journey.</p>
            <p class="lang-fr">Des interviews et vidéos d'événements vérifiées pourront être intégrées ici au fur et à mesure de leur découverte. Pour l'instant, ces sources publiques documentent le fondateur et son parcours de leadership.</p>
          </div>
          <div class="public-media-grid">
            <a href="https://www.shamaonline.com/aboutus" target="_blank" rel="noopener"><span>Official</span><h4>Shama International</h4><p class="lang-en">Founder story, company growth and 2019 award.</p><p class="lang-fr">Parcours du fondateur, croissance de l'entreprise et distinction 2019.</p><b>↗</b></a>
            <a href="https://pbfeurope.com/" target="_blank" rel="noopener"><span>Leadership</span><h4>Pakistan Business Forum Europe</h4><p class="lang-en">Current public leadership listing.</p><p class="lang-fr">Présentation publique actuelle de la direction.</p><b>↗</b></a>
            <a href="https://pid.gov.pk/site/press_detail/22857" target="_blank" rel="noopener"><span>Government record</span><h4>Press Information Department</h4><p class="lang-en">Public record of PBF France leadership and European expansion vision.</p><p class="lang-fr">Source publique sur la direction de PBF France et la vision d'expansion européenne.</p><b>↗</b></a>
            <a href="https://www.app.com.pk/domestic/governor-punjab-announces-overseas-facilitation-desk-at-governors-house/" target="_blank" rel="noopener"><span>Public coverage</span><h4>Associated Press of Pakistan</h4><p class="lang-en">Coverage of overseas Pakistani investor delegation activity.</p><p class="lang-fr">Couverture d'une délégation d'investisseurs pakistanais de l'étranger.</p><b>↗</b></a>
          </div>
        </section>

        <div class="about-public-note">
          <span>Verified public information only</span>
          <p class="lang-en">This section uses facts available from Shama International's public website, Pakistan Business Forum Europe, official Pakistani government coverage, Associated Press of Pakistan and the company's LinkedIn profile. New material can be added as more verified interviews, photographs and videos become available.</p>
          <p class="lang-fr">Cette section utilise uniquement des informations publiques disponibles sur le site de Shama International, Pakistan Business Forum Europe, des sources gouvernementales pakistanaises, l'Associated Press of Pakistan et le profil LinkedIn de l'entreprise. De nouveaux éléments pourront être ajoutés à mesure que des interviews, photos et vidéos vérifiées seront disponibles.</p>
        </div>
      </div>
    `;

    anchor.insertAdjacentElement('afterend', section);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

  setTimeout(mount, 120);
})();
