(() => {
  'use strict';
  const root = document.querySelector('#featured-categories.flavour-explorer');
  if (!root) return;

  const stage = root.querySelector('.flavour-image-wrap');
  const poster = stage?.querySelector('#flavour-image');
  const nodes = [...root.querySelectorAll('.flavour-node')];
  if (!stage || !poster || !nodes.length) return;

  const scenes = [
    {name:'Rice',image:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/rice.mp4?v=20260909-stable',tone:'gold'},
    {name:'Spices',image:'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/spices.mp4?v=20260909-stable',tone:'spice'},
    {name:'Sauces & Pastes',image:'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/sauces-pastes.mp4?v=20260909-stable',tone:'sauce'},
    {name:'Miscellaneous',image:'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/miscellaneous.mp4?v=20260909-stable',tone:'snack'},
    {name:'Beverages',image:'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/beverages.mp4?v=20260909-stable',tone:'drink'},
    {name:'Flour & Lentiles',image:'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/flour-lentils.mp4?v=20260909-stable',tone:'flour'}
  ];

  const saveData = Boolean(navigator.connection?.saveData);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktopVideo = matchMedia('(min-width: 769px)').matches && !saveData && !reducedMotion;
  let activeIndex = Math.max(0, nodes.findIndex(node => node.classList.contains('active')));

  const chip = document.createElement('span');
  chip.className = 'flavour-motion-chip';
  stage.appendChild(chip);

  let video = null;
  let visible = true;
  let token = 0;

  if (desktopVideo) {
    video = document.createElement('video');
    video.className = 'flavour-motion-video';
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.disablePictureInPicture = true;
    video.setAttribute('muted','');
    video.setAttribute('loop','');
    video.setAttribute('playsinline','');
    video.setAttribute('webkit-playsinline','');
    video.setAttribute('aria-hidden','true');
    stage.insertBefore(video, poster.nextSibling);

    const status = document.createElement('span');
    status.className = 'flavour-motion-status';
    status.textContent = 'VIDEO';
    stage.appendChild(status);

    const reveal = currentToken => {
      if (currentToken !== token || !video) return;
      video.classList.add('is-ready');
      stage.classList.add('has-playing-video');
    };
    ['loadeddata','canplay','playing'].forEach(eventName => video.addEventListener(eventName, () => reveal(token)));
    video.addEventListener('error', () => {
      stage.classList.remove('has-playing-video');
      video.classList.remove('is-ready');
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        visible = entries.some(entry => entry.isIntersecting);
        if (!video) return;
        if (visible) video.play().catch(() => {});
        else video.pause();
      }, {threshold:0.15});
      observer.observe(root);
    }
  }

  function applyScene(index) {
    const scene = scenes[index] || scenes[0];
    activeIndex = index;
    root.dataset.flavourTone = scene.tone;
    poster.src = scene.image;
    poster.alt = scene.name;
    chip.textContent = scene.name;

    if (!video) return;
    token += 1;
    stage.classList.remove('has-playing-video');
    video.classList.remove('is-ready');
    video.pause();
    video.poster = scene.image;
    video.src = scene.video;
    video.load();
    if (visible) video.play().catch(() => {});
  }

  root.addEventListener('click', event => {
    const node = event.target.closest('.flavour-node');
    if (!node) return;
    const index = nodes.indexOf(node);
    if (index >= 0 && index !== activeIndex) applyScene(index);
  });

  document.addEventListener('visibilitychange', () => {
    if (!video) return;
    if (document.hidden) video.pause();
    else if (visible) video.play().catch(() => {});
  });

  applyScene(activeIndex);
})();