// Supplied Flour & Lentils product imagery. Keeps all dal/lentil products intact.
(() => {
  if (document.body.dataset.category !== 'flour') return;

  const suppliedImages = {
    'Shama Wheat Flour': [
      'assets/flour/shama-wheat-flour-1kg.webp',
      'assets/flour/shama-wheat-flour-25kg.webp'
    ],
    'Shama Multigrain Atta': [
      'assets/flour/shama-multigrain-atta-5kg.webp'
    ],
    'Shama Gram Flour': [
      'assets/flour/shama-gram-flour.webp'
    ],
    'Shama Chakki Gold Atta': [
      'assets/flour/shama-chakki-gold-atta-2kg.webp',
      'assets/flour/shama-chakki-gold-atta-5kg.webp',
      'assets/flour/shama-chakki-gold-atta-10kg.webp'
    ],
    'Shama Chapati Atta T110': [
      'assets/flour/shama-chapati-atta-t110-10kg.webp',
      'assets/flour/shama-chapati-atta-t110-20kg.webp'
    ]
  };

  const packLabels = {
    'Shama Wheat Flour': '1kg / 25kg',
    'Shama Multigrain Atta': '5kg',
    'Shama Gram Flour': 'Contact us for available pack sizes',
    'Shama Chakki Gold Atta': '2kg / 5kg / 10kg',
    'Shama Chapati Atta T110': '10kg / 20kg'
  };

  Object.entries(suppliedImages).forEach(([name, sources]) => {
    let product = productData.find(item => item.category === 'flour' && item.title === name);
    if (!product) {
      product = { category: 'flour', title: name, pack: packLabels[name], image: sources[0] };
      productData.push(product);
    }
    product.image = sources[0];
    product.pack = packLabels[name] || product.pack;
  });

  // Keep the supplied flour/atta lines together at the top, then retain every existing dal/lentil item.
  const featuredNames = [
    'Shama Wheat Flour',
    'Shama Multigrain Atta',
    'Shama Gram Flour',
    'Shama Chakki Gold Atta',
    'Shama Chapati Atta T110'
  ];
  const featured = featuredNames.map(name => productData.find(item => item.category === 'flour' && item.title === name)).filter(Boolean);
  const remainingFlour = productData.filter(item => item.category === 'flour' && !featuredNames.includes(item.title));
  const flourIndexes = productData.map((item, index) => item.category === 'flour' ? index : -1).filter(index => index >= 0);
  [...featured, ...remainingFlour].forEach((item, index) => {
    if (flourIndexes[index] !== undefined) productData[flourIndexes[index]] = item;
  });

  renderProducts(document.querySelector('#page-content'));
  [...document.querySelectorAll('link[href^="product-runway.css"]')].slice(1).forEach(link => link.remove());

  const image = document.querySelector('#runway-image');
  const title = document.querySelector('#runway-title');
  const stage = document.querySelector('.runway-stage');
  if (!image || !title || !stage) return;

  const style = document.createElement('style');
  style.textContent = `
    .flour-image-options{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:14px auto 0}
    .flour-image-options[hidden]{display:none}
    .flour-image-options button{width:74px;height:74px;padding:5px;border:1px solid rgba(21,45,82,.18);border-radius:14px;background:#fff;cursor:pointer;box-shadow:0 7px 20px rgba(10,28,55,.08);transition:transform .2s ease,border-color .2s ease}
    .flour-image-options button:hover{transform:translateY(-2px)}
    .flour-image-options button[aria-pressed="true"]{outline:2px solid #5d4fe4;outline-offset:2px;border-color:transparent}
    .flour-image-options img{display:block;width:100%;height:100%;object-fit:contain;border-radius:9px}
    @media(max-width:600px){.flour-image-options{justify-content:flex-start;overflow-x:auto;flex-wrap:nowrap;padding:2px 3px 7px}.flour-image-options button{flex:0 0 66px;width:66px;height:66px}}
  `;
  document.head.appendChild(style);

  const options = document.createElement('div');
  options.className = 'flour-image-options';
  options.setAttribute('role', 'group');
  options.setAttribute('aria-label', 'Available pack images');
  stage.after(options);

  function updateOptions() {
    const name = title.textContent.trim();
    const sources = suppliedImages[name] || [];
    if (options.dataset.product !== name) {
      options.dataset.product = name;
      options.replaceChildren();
      options.hidden = sources.length < 2;
      sources.forEach((src, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('aria-label', `${name}: pack image ${index + 1}`);
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.alt = '';
        thumb.width = 64;
        thumb.height = 64;
        button.appendChild(thumb);
        button.addEventListener('click', () => {
          image.src = src;
          image.alt = name;
          updateOptions();
        });
        options.appendChild(button);
      });
    }
    [...options.children].forEach((button, index) => {
      button.setAttribute('aria-pressed', String(image.getAttribute('src') === sources[index]));
    });
  }

  new MutationObserver(updateOptions).observe(image, { attributes: true, attributeFilter: ['src', 'alt'] });
  updateOptions();
})();
