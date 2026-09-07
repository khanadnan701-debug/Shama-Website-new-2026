// Supplied Frozen product images; existing product names and packs are preserved.
(() => {
  if (document.body.dataset.category !== 'frozen') return;
  const suppliedImages = {
  "Shama Lahori Chicken Charcoal Seekh Kebab": [
    "assets/frozen/shama-lahori-chicken-kebab-15.webp"
  ],
  "Shama Lahori Meat Charcoal Seekh Kebab": [
    "assets/frozen/shama-lahori-meat-kebab-15.webp"
  ],
  "Shama Vegetable Samosa": [
    "assets/frozen/shama-vegetable-samosa-20-lifestyle.webp",
    "assets/frozen/shama-vegetable-samosa-50.webp"
  ],
  "Shama Lamb Meat Samosa": [
    "assets/frozen/shama-lamb-meat-samosa-50.webp"
  ],
  "Shama Lamb Meat Spring Roll": [
    "assets/frozen/shama-lamb-meat-spring-roll-20.webp",
    "assets/frozen/shama-lamb-meat-spring-roll-50.webp"
  ],
  "Shama Vegetable Spring Rolls": [
    "assets/frozen/shama-vegetable-spring-roll-20.webp"
  ],
  "Mazedar Methi Masala Paratha": [
    "assets/frozen/mazedar-methi-masala-paratha.webp"
  ],
  "Mazedar Onion Paratha": [
    "assets/frozen/mazedar-onion-paratha.webp"
  ],
  "Shama Plain Paratha": [
    "assets/frozen/shama-plain-paratha-30.webp",
    "assets/frozen/mazedar-plain-paratha-20.webp",
    "assets/frozen/mazedar-plain-paratha-5.webp"
  ],
  "Mazedar Potato Paratha": [
    "assets/frozen/mazedar-potato-paratha.webp"
  ],
  "Mazedar Vegetable Paratha": [
    "assets/frozen/mazedar-vegetable-paratha.webp"
  ],
  "Shama Chicken Samosa": [
    "assets/frozen/shama-chicken-samosa-20.webp",
    "assets/frozen/shama-chicken-samosa-50.webp"
  ],
  "Punjabi Style Cocktail Samosa 30Pcs": [
    "assets/frozen/shama-punjabi-cocktail-samosa.webp"
  ],
  "Shama Chicken Spring Roll": [
    "assets/frozen/shama-chicken-spring-roll-20.webp",
    "assets/frozen/shama-chicken-spring-roll-50.webp"
  ],
  "Karela 400g": [
    "assets/frozen/shama-karela.webp"
  ],
  "Cut Okra 400g": [
    "assets/frozen/shama-cut-okra.webp"
  ],
  "Falsa 454g": [
    "assets/frozen/shama-falsa.webp"
  ],
  "Green Chilli 400g": [
    "assets/frozen/shama-green-chilli.webp"
  ],
  "Punjabi Aloo (Potato) Samosa 12Pcs": [
    "assets/frozen/shama-punjabi-aloo-samosa-12.webp"
  ],
  "Shama Crispy Paratha": [
    "assets/frozen/shama-crispy-paratha-20.webp"
  ]
};
  for (const product of productData) {
    if (product.category === 'frozen' && suppliedImages[product.title]) {
      product.image = suppliedImages[product.title][0];
    }
  }
  for (const [name, sources] of Object.entries(suppliedImages)) {
    if (!productData.some(product => product.category === 'frozen' && product.title === name)) {
      productData.push({category: 'frozen', title: name,
        pack: 'Frozen · Contact us for case quantity', image: sources[0]});
    }
  }
  // Reuse the existing product renderer, search, bulk-order and zoom behavior.
  renderProducts(document.querySelector('#page-content'));
  // The shared renderer appends its stylesheet; retain only the original copy.
  [...document.querySelectorAll('link[href^="product-runway.css"]')].slice(1).forEach(link => link.remove());
  const image = document.querySelector('#runway-image');
  const title = document.querySelector('#runway-title');
  const options = document.createElement('div');
  options.className = 'frozen-image-options';
  options.setAttribute('role', 'group');
  options.setAttribute('aria-label', 'Product images');
  document.querySelector('.runway-stage').after(options);

  function updateOptions() {
    const name = title.textContent;
    const sources = suppliedImages[name] || [];
    if (options.dataset.product !== name) {
      options.dataset.product = name;
      options.replaceChildren();
      options.hidden = sources.length < 2;
      sources.forEach((src, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('aria-label', `${name}: image ${index + 1}`);
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.alt = '';
        thumb.width = 64;
        thumb.height = 64;
        button.append(thumb);
        button.addEventListener('click', () => {
          image.src = src;
          updateOptions();
        });
        options.append(button);
      });
    }
    [...options.children].forEach((button, index) => {
      button.setAttribute('aria-pressed', String(image.getAttribute('src') === sources[index]));
    });
  }
  new MutationObserver(updateOptions).observe(image, {attributes: true, attributeFilter: ['src', 'alt']});
  updateOptions();
})();
