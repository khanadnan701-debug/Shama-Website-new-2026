(() => {
  'use strict';

  const categories = [
    {name:'Rice',desc:'Fragrant grains for every table',image:'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85'},
    {name:'Spices',desc:'Bold aroma, vivid colour',image:'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85'},
    {name:'Sauces & Pastes',desc:'Instant depth and flavour',image:'https://static.wixstatic.com/media/00ae33_261dadfa73a749ff9b9316f6e1517c17~mv2.jpg'},
    {name:'Miscellaneous',desc:'Everyday pantry essentials',image:'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85'},
    {name:'Beverages',desc:'Refreshingly familiar',image:'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85'},
    {name:'Flour & Lentiles',desc:'Wholesome kitchen staples',image:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85'}
  ];

  const ricePicks = [
    {title:'Shama Basmati Rice (Extra Long)',pack:'1878B - 20kg x 1',image:'https://static.wixstatic.com/media/00ae33_e80d132ea86142d2905cb13ebabbc2dd~mv2.jpg'},
    {title:'Shama Basmati Rice (Extra Long)',pack:'2189A - 10kg x 1',image:'https://static.wixstatic.com/media/00ae33_77fb393f1d7a4d3ebafe6317a6d5e37a~mv2.jpg'},
    {title:'Shama Basmati Rice (Extra Long)',pack:'1892A - 5kg x 1',image:'https://static.wixstatic.com/media/00ae33_cbb20ad4190147e9b14dcec2cc55082f~mv2.jpg'},
    {title:'Shama White Gold Basmati Rice',pack:'0116A - 20kg x 1',image:'https://static.wixstatic.com/media/00ae33_83cfce532ff74030acdc69fce9e410e9~mv2.jpg'}
  ];

  const siteHeader = document.querySelector('#site-header');
  const siteFooter = document.querySelector('#site-footer');

  if (siteHeader) {
    siteHeader.innerHTML = `
      <div class="announce">
        <div class="wrap announce-inner">
          <span><i></i> Wholesale enquiries open</span>
          <p>Authentic flavour across France since 2003</p>
          <a href="mailto:info@shamafr.com">info@shamafr.com ↗</a>
        </div>
      </div>
      <header class="header">
        <nav class="nav-shell wrap" aria-label="Primary navigation">
          <a class="brand brand-studio" href="#top" aria-label="Shama International home">
            <span class="official-logo-frame"><img src="assets/shama-logo.png" alt="Shama International"></span>
          </a>
          <button class="mobile-toggle" type="button" aria-label="Open menu" aria-expanded="false"><i></i><i></i></button>
          <div class="navlinks" id="primary-nav">
            <a class="active" href="#top"><span>Home</span></a>
            <a href="#about"><span>About us</span></a>
            <a href="#catalogue"><span>Catalogue</span></a>
            <a href="#catalogue"><span>Products</span></a>
            <a href="#contact"><span>Contact</span></a>
          </div>
          <button class="header-cta js-open-bulk" type="button"><span>Bulk order</span><b>↗</b></button>
        </nav>
      </header>`;
  }

  if (siteFooter) {
    siteFooter.innerHTML = `
      <footer class="footer" id="footer">
        <div class="wrap">
          <div class="footer-grid">
            <div>
              <a class="brand" href="#top"><span class="official-logo-frame footer-logo"><img src="assets/shama-logo.png" alt="Shama International"></span></a>
              <p>Authentic foods, trusted quality and traditional flavour—bringing people together since 2003.</p>
            </div>
            <div>
              <h4>Quick links</h4>
              <a href="#about">About us</a>
              <a href="#catalogue">Catalogue</a>
              <a href="#contact">Contact us</a>
              <button class="footer-order-link js-open-bulk" type="button">Order now</button>
            </div>
            <div>
              <h4>Headquarters</h4>
              <p>Shama International S.A.S.<br>3, allée de l’Espérance<br>93110 Rosny Sous Bois – France</p>
              <p><a href="tel:+33143420579">01 43 42 05 79</a> · <a href="mailto:info@shamafr.com">info@shamafr.com</a></p>
            </div>
          </div>
          <div class="footer-bottom"><span>© Shama International 2026. All rights reserved.</span><span>SIRET: 449 548 395 00036 · TVA FR71 449 548 395</span></div>
        </div>
      </footer>`;
  }

  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.navlinks');
  const closeMenu = () => {
    if (!mobileToggle || !navLinks) return;
    navLinks.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    });
    navLinks.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); }, {passive:true});
  }

  const featured = document.querySelector('#featured-categories');
  if (featured) {
    featured.className = 'flavour-explorer';
    featured.innerHTML = `
      <div class="flavour-orbit">
        <div class="orbit-glow"></div>
        <div class="flavour-image-wrap">
          <span class="flavour-index" id="flavour-index">01</span>
          <img id="flavour-image" src="${categories[0].image}" alt="${categories[0].name}">
          <div class="flavour-scan"></div>
        </div>
        ${categories.map((category,index)=>`<button type="button" class="flavour-node ${index===0?'active':''}" data-flavour="${index}"><b>0${index+1}</b><span>${category.name}</span></button>`).join('')}
        <span class="orbit-caption">Move through<br>our flavours</span>
      </div>
      <div class="flavour-story">
        <span class="eyebrow">Now exploring</span>
        <div class="flavour-line"></div>
        <h3 id="flavour-title">${categories[0].name}</h3>
        <p id="flavour-desc">${categories[0].desc}. Discover authentic Shama products selected for homes, restaurants and retailers across France.</p>
        <div class="flavour-meta"><span><b>01</b> Category</span><span><b>20+</b> Years of trust</span></div>
        <button id="flavour-link" class="flavour-cta js-open-bulk" type="button"><span>Ask about ${categories[0].name}</span><b>↗</b></button>
        <div class="flavour-dots">${categories.map((_,index)=>`<i class="${index===0?'active':''}"></i>`).join('')}</div>
      </div>`;

    featured.addEventListener('click', event => {
      const node = event.target.closest('.flavour-node');
      if (!node) return;
      const index = Number(node.dataset.flavour);
      const category = categories[index];
      if (!category) return;
      featured.querySelectorAll('.flavour-node').forEach(el => el.classList.toggle('active', el === node));
      featured.querySelectorAll('.flavour-dots i').forEach((dot,i)=>dot.classList.toggle('active',i===index));
      const image = document.querySelector('#flavour-image');
      if (image) { image.src = category.image; image.alt = category.name; }
      document.querySelector('#flavour-index').textContent = `0${index+1}`;
      document.querySelector('#flavour-title').textContent = category.name;
      document.querySelector('#flavour-desc').textContent = `${category.desc}. Discover authentic Shama products selected for homes, restaurants and retailers across France.`;
      const label = document.querySelector('#flavour-link span');
      if (label) label.textContent = `Ask about ${category.name}`;
      const button = document.querySelector('#flavour-link');
      if (button) button.dataset.product = category.name;
    });
  }

  const homeProducts = document.querySelector('#home-products');
  if (homeProducts) {
    const first = ricePicks[0];
    homeProducts.innerHTML = `
      <div class="product-showcase">
        <div class="showcase-tabs">
          <span class="showcase-label">Select a favourite</span>
          ${ricePicks.map((item,index)=>`<button type="button" class="showcase-tab ${index===0?'active':''}" data-showcase="${index}"><b>0${index+1}</b><span>${item.title}</span><i>→</i></button>`).join('')}
          <button type="button" class="showcase-all js-open-bulk" data-product="Shama Rice"><span>Ask for rice catalogue</span><b>↗</b></button>
        </div>
        <div class="showcase-stage">
          <div class="stage-ring one"></div><div class="stage-ring two"></div>
          <span class="stage-badge">Shama<br><b>Choice</b></span>
          <img id="showcase-image" src="${first.image}" alt="${first.title}">
          <span class="stage-shadow"></span>
        </div>
        <div class="showcase-copy">
          <span class="eyebrow">Bestseller · Wholesale</span>
          <div class="showcase-count"><strong id="showcase-number">01</strong><span>/ 04</span></div>
          <h3 id="showcase-title">${first.title}</h3>
          <p id="showcase-pack">${first.pack}</p>
          <div class="showcase-benefits"><span>✓ Authentic quality</span><span>✓ Bulk availability</span><span>✓ Delivery support</span></div>
          <button class="bulk-buy showcase-buy js-open-bulk" type="button" data-product="${first.title}" data-pack="${first.pack}"><span>Request bulk quote</span><b>↗</b></button>
        </div>
      </div>`;

    homeProducts.addEventListener('click', event => {
      const tab = event.target.closest('.showcase-tab');
      if (!tab) return;
      const index = Number(tab.dataset.showcase);
      const item = ricePicks[index];
      if (!item) return;
      homeProducts.querySelectorAll('.showcase-tab').forEach(el => el.classList.toggle('active', el === tab));
      const image = document.querySelector('#showcase-image');
      if (image) { image.src = item.image; image.alt = item.title; }
      document.querySelector('#showcase-number').textContent = `0${index+1}`;
      document.querySelector('#showcase-title').textContent = item.title;
      document.querySelector('#showcase-pack').textContent = item.pack;
      const buy = homeProducts.querySelector('.showcase-buy');
      if (buy) { buy.dataset.product = item.title; buy.dataset.pack = item.pack; }
    });
  }

  const modalMarkup = `
    <div class="bulk-modal" id="bulk-modal" aria-hidden="true">
      <div class="bulk-backdrop" data-close-bulk></div>
      <section class="bulk-dialog" role="dialog" aria-modal="true" aria-labelledby="bulk-title">
        <button class="bulk-close" type="button" data-close-bulk aria-label="Close">×</button>
        <div class="bulk-intro"><span class="eyebrow">Wholesale enquiry</span><h2 id="bulk-title">Order in bulk</h2><p>Tell us what you need. Send the prepared enquiry directly by email or WhatsApp.</p></div>
        <form id="bulk-form" class="bulk-form">
          <div class="selected-product"><small>Selected product</small><strong id="bulk-product">General wholesale enquiry</strong><span id="bulk-pack">Please advise available pack sizes</span></div>
          <label>Quantity / cases<input name="quantity" type="number" min="1" value="10" required></label>
          <label>Business name<input name="business" placeholder="Your shop or company"></label>
          <label>Your name<input name="name" required placeholder="Full name"></label>
          <label>Phone / WhatsApp<input name="phone" type="tel" required placeholder="+33 …"></label>
          <label class="bulk-full">Delivery city / postcode<input name="location" required placeholder="Paris 75001"></label>
          <label class="bulk-full">Additional details<textarea name="notes" placeholder="Preferred pack size, delivery date, etc."></textarea></label>
          <div class="bulk-actions bulk-full"><button class="send-email" type="button">✉ <span>Send by email</span></button><button class="send-whatsapp" type="button">◉ <span>Send on WhatsApp</span></button></div>
          <small class="bulk-note bulk-full">This opens your email or WhatsApp app with the complete enquiry ready to send.</small>
        </form>
      </section>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', modalMarkup);

  const modal = document.querySelector('#bulk-modal');
  const bulkForm = document.querySelector('#bulk-form');
  const openBulk = (product='General wholesale enquiry', pack='Please advise available pack sizes') => {
    document.querySelector('#bulk-product').textContent = product;
    document.querySelector('#bulk-pack').textContent = pack || 'Please advise available pack sizes';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    requestAnimationFrame(()=>modal.querySelector('.bulk-close')?.focus());
  };
  const closeBulk = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
  };

  document.addEventListener('click', event => {
    const opener = event.target.closest('.js-open-bulk');
    if (opener) {
      event.preventDefault();
      openBulk(opener.dataset.product || 'General wholesale enquiry', opener.dataset.pack || '');
      return;
    }
    if (event.target.closest('[data-close-bulk]')) closeBulk();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); closeBulk(); } });

  function enquiryText() {
    if (!bulkForm.reportValidity()) return null;
    const data = new FormData(bulkForm);
    return `Hello Shama International,\n\nI would like a bulk quotation.\n\nProduct: ${document.querySelector('#bulk-product').textContent}\nPack details: ${document.querySelector('#bulk-pack').textContent}\nQuantity / cases: ${data.get('quantity')}\nBusiness: ${data.get('business') || 'Not provided'}\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nDelivery location: ${data.get('location')}\nAdditional details: ${data.get('notes') || 'None'}\n\nPlease share price, MOQ and delivery availability.`;
  }
  document.querySelector('.send-email')?.addEventListener('click', () => {
    const text = enquiryText();
    if (text) location.href = `mailto:info@shamafr.com?subject=${encodeURIComponent('Shama wholesale enquiry')}&body=${encodeURIComponent(text)}`;
  });
  document.querySelector('.send-whatsapp')?.addEventListener('click', () => {
    const text = enquiryText();
    if (text) window.open(`https://wa.me/33143420579?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
    });
  });

  document.body.insertAdjacentHTML('afterbegin','<div class="scroll-progress" aria-hidden="true"></div>');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--scroll', `${max ? Math.min(100, Math.max(0, scrollY / max * 100)) : 0}%`);
  };
  window.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();

  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.08, rootMargin:'0px 0px -30px'});
    document.querySelectorAll('section .section-head,section .split,.product-showcase,.steps-grid article,.wholesale-head,.values-card,.cta-box').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  }
})();