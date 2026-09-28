(() => {
  'use strict';
  if (document.body.dataset.category !== 'flour') return;

  const isAttaFlour = title => /\b(atta|flour|besan|semoule|semolina|corn flour|wheat flour|rice flour)\b/i.test(title || '');

  function groupProducts() {
    const grid = document.querySelector('#simple-product-grid');
    if (!grid || grid.dataset.grouped === '1') return false;

    const cards = Array.from(grid.querySelectorAll(':scope > .simple-product-card'));
    if (!cards.length) return false;

    const attaCards = [];
    const daalCards = [];

    cards.forEach(card => {
      const title = card.querySelector('.simple-product-content h3')?.textContent?.trim() || '';
      (isAttaFlour(title) ? attaCards : daalCards).push(card);
    });

    if (!attaCards.length || !daalCards.length) return false;

    const shell = document.createElement('div');
    shell.className = 'flour-lentile-groups';
    shell.innerHTML = `
      <nav class="flour-lentile-tabs" aria-label="Flour and lentil sections">
        <a href="#atta-flour-section"><span>Atta & Flour</span><b>${String(attaCards.length).padStart(2,'0')}</b></a>
        <a href="#daal-lentils-section"><span>Daal & Lentils</span><b>${String(daalCards.length).padStart(2,'0')}</b></a>
      </nav>

      <section class="flour-lentile-section atta-section" id="atta-flour-section">
        <div class="flour-lentile-heading">
          <div>
            <span class="flour-lentile-kicker">01 · Flour range</span>
            <h2>Atta & Flour</h2>
            <p>Atta, besan, wheat flour, rice flour, semoule and corn flour.</p>
          </div>
          <span class="flour-lentile-count">${attaCards.length} products</span>
        </div>
        <div class="simple-product-grid flour-lentile-grid" data-flour-grid="atta"></div>
      </section>

      <section class="flour-lentile-section daal-section" id="daal-lentils-section">
        <div class="flour-lentile-heading">
          <div>
            <span class="flour-lentile-kicker">02 · Pulses range</span>
            <h2>Daal & Lentils</h2>
            <p>Dals, lentils, beans, chickpeas and peas in one dedicated section.</p>
          </div>
          <span class="flour-lentile-count">${daalCards.length} products</span>
        </div>
        <div class="simple-product-grid flour-lentile-grid" data-flour-grid="daal"></div>
      </section>
    `;

    const attaGrid = shell.querySelector('[data-flour-grid="atta"]');
    const daalGrid = shell.querySelector('[data-flour-grid="daal"]');

    attaCards.forEach((card,index) => {
      const badge = card.querySelector('.simple-product-index');
      if (badge) badge.textContent = String(index + 1).padStart(2,'0');
      attaGrid.appendChild(card);
    });

    daalCards.forEach((card,index) => {
      const badge = card.querySelector('.simple-product-index');
      if (badge) badge.textContent = String(index + 1).padStart(2,'0');
      daalGrid.appendChild(card);
    });

    grid.dataset.grouped = '1';
    grid.replaceWith(shell);

    shell.querySelectorAll('.flour-lentile-tabs a').forEach(link => {
      link.addEventListener('click', event => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      });
    });

    const heroCopy = document.querySelector('.page-hero p');
    if (heroCopy) {
      heroCopy.textContent = 'Browse Atta & Flour separately from Daal & Lentils for faster product selection.';
    }

    return true;
  }

  const regroup = () => {
    setTimeout(() => {
      groupProducts();
    }, 0);
  };

  if (!groupProducts()) {
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (groupProducts() || tries > 30) clearInterval(timer);
    }, 100);
  }

  document.addEventListener('shama:product-simple-rendered', regroup);
  window.addEventListener('load', regroup, { once:true });
})();