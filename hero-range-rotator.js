(() => {
  if (document.body?.dataset.page !== 'home') return;

  const getProducts = (slug) => {
    if (typeof productData === 'undefined' || !Array.isArray(productData)) return [];
    const seen = new Set();
    return productData
      .filter((item) => item && item.category === slug && item.image)
      .filter((item) => {
        if (seen.has(item.image)) return false;
        seen.add(item.image);
        return true;
      })
      .slice(0, 6);
  };

  const doors = [
    { selector: '.range-rice', slug: 'rice' },
    { selector: '.range-frozen', slug: 'frozen' },
    { selector: '.range-spices', slug: 'spices' },
    { selector: '.range-daal', slug: 'flour-lentiles' }
  ];

  doors.forEach((config, doorIndex) => {
    const door = document.querySelector(config.selector);
    const img = door?.querySelector('img');
    const caption = door?.querySelector('.range-caption small');
    if (!door || !img) return;

    const items = getProducts(config.slug);
    if (!items.length) return;

    let index = Math.max(0, items.findIndex((item) => item.image === img.src || img.src.includes(item.image)));
    let paused = false;
    let switching = false;

    const show = (nextIndex) => {
      if (switching || paused || items.length < 2) return;
      const item = items[nextIndex % items.length];
      if (!item) return;
      switching = true;

      const preload = new Image();
      preload.decoding = 'async';
      preload.src = item.image;
      preload.onload = () => {
        img.classList.add('range-image-out');
        window.setTimeout(() => {
          img.src = item.image;
          img.alt = item.title || img.alt;
          if (caption && item.title) caption.textContent = item.title.replace(/^Shama\s+/i, '');
          img.classList.remove('range-image-out');
          img.classList.add('range-image-in');
          window.setTimeout(() => img.classList.remove('range-image-in'), 480);
          index = nextIndex % items.length;
          switching = false;
        }, 220);
      };
      preload.onerror = () => { switching = false; };
    };

    const interval = window.setInterval(() => show(index + 1), 3800 + (doorIndex * 160));
    window.setTimeout(() => show(index + 1), 1500 + (doorIndex * 700));

    door.addEventListener('pointerenter', () => { paused = true; });
    door.addEventListener('pointerleave', () => { paused = false; });

    document.addEventListener('visibilitychange', () => {
      paused = document.hidden;
    });

    window.addEventListener('pagehide', () => window.clearInterval(interval), { once: true });
  });
})();
