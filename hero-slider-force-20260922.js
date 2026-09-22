(() => {
  'use strict';

  const hero = document.querySelector('.hero-video-only');
  const wall = hero?.querySelector('.fmcg-video-wall');
  const shell = hero?.querySelector('.video-wall-shell');
  if (!hero || !wall || !shell) return;

  const slides = [
    {
      theme:'rice',
      number:'01',
      title:'RICE',
      href:'rice.html',
      label:'Explore Rice',
      video:'https://www.pexels.com/download/video/4912725/'
    },
    {
      theme:'spices',
      number:'02',
      title:'SPICES',
      href:'spices.html',
      label:'Explore Spices',
      video:'https://www.pexels.com/download/video/7540760/'
    },
    {
      theme:'drinks',
      number:'03',
      title:'DRINKS',
      href:'beverages.html',
      label:'Explore Drinks',
      video:'https://www.pexels.com/download/video/8677740/'
    },
    {
      theme:'frozen',
      number:'04',
      title:'FROZEN',
      href:'frozen.html',
      label:'Explore Frozen',
      video:'https://www.pexels.com/download/video/29824279/'
    }
  ];

  const style = document.createElement('style');
  style.id = 'shama-force-hero-slider-style';
  style.textContent = `
    .hero-video-only .fmcg-video-wall{
      display:block!important;
      position:absolute!important;
      inset:0!important;
      overflow:hidden!important;
    }
    .hero-video-only .fmcg-video-wall .fmcg-panel{
      position:absolute!important;
      inset:0!important;
      width:100%!important;
      height:100%!important;
      min-width:100%!important;
      max-width:none!important;
      border:0!important;
      opacity:1!important;
      will-change:transform!important;
      transition:transform .68s cubic-bezier(.22,.72,.18,1)!important;
    }
    .hero-video-only .fmcg-video-wall .fmcg-panel video{
      width:100%!important;
      height:100%!important;
      object-fit:cover!important;
    }
    .hero-video-only .hero-slider-controls{
      position:absolute!important;
      inset:0!important;
      z-index:30!important;
      pointer-events:none!important;
    }
    .hero-video-only .hero-slider-arrow{
      position:absolute!important;
      top:50%!important;
      transform:translateY(-50%)!important;
      width:60px!important;
      height:60px!important;
      border:1px solid rgba(255,255,255,.52)!important;
      border-radius:50%!important;
      display:grid!important;
      place-items:center!important;
      background:rgba(5,16,31,.38)!important;
      backdrop-filter:blur(12px)!important;
      -webkit-backdrop-filter:blur(12px)!important;
      color:#fff!important;
      font:500 38px/1 Arial,sans-serif!important;
      cursor:pointer!important;
      pointer-events:auto!important;
      box-shadow:0 16px 40px rgba(0,0,0,.24)!important;
    }
    .hero-video-only .hero-slider-prev{left:24px!important}
    .hero-video-only .hero-slider-next{right:24px!important}
    .hero-video-only .hero-slider-dots{
      position:absolute!important;
      left:50%!important;
      bottom:28px!important;
      transform:translateX(-50%)!important;
      display:flex!important;
      gap:8px!important;
      align-items:center!important;
      padding:9px 12px!important;
      border-radius:999px!important;
      background:rgba(5,16,31,.34)!important;
      backdrop-filter:blur(10px)!important;
      -webkit-backdrop-filter:blur(10px)!important;
      pointer-events:auto!important;
    }
    .hero-video-only .hero-slider-dots button{
      width:34px!important;
      height:7px!important;
      padding:0!important;
      border:0!important;
      border-radius:99px!important;
      background:rgba(255,255,255,.28)!important;
      cursor:pointer!important;
      overflow:hidden!important;
    }
    .hero-video-only .hero-slider-dots button span{
      display:block!important;
      width:0!important;
      height:100%!important;
      background:#fff!important;
      border-radius:inherit!important;
      transition:width .25s ease!important;
    }
    .hero-video-only .hero-slider-dots button.active span{width:100%!important}
    @media(max-width:640px){
      .hero-video-only .hero-slider-arrow{
        top:auto!important;
        bottom:18px!important;
        transform:none!important;
        width:44px!important;
        height:44px!important;
        font-size:30px!important;
      }
      .hero-video-only .hero-slider-prev{left:14px!important}
      .hero-video-only .hero-slider-next{right:14px!important}
      .hero-video-only .hero-slider-dots{bottom:23px!important}
      .hero-video-only .hero-slider-dots button{width:22px!important}
    }
  `;
  document.head.appendChild(style);

  // Remove any controls created by an older hero script.
  shell.querySelectorAll('.hero-slider-controls').forEach(node => node.remove());

  // Rebuild the hero so stale four-column markup can never remain visible.
  wall.replaceChildren();

  const panels = slides.map((slide,index) => {
    const panel = document.createElement('a');
    panel.className = `fmcg-panel fmcg-panel-${slide.theme}${index === 0 ? ' active' : ''}`;
    panel.href = slide.href;
    panel.dataset.heroPanel = '';
    panel.dataset.theme = slide.theme;
    panel.setAttribute('aria-label', slide.label);
    panel.style.position = 'absolute';
    panel.style.inset = '0';
    panel.style.width = '100%';
    panel.style.height = '100%';
    panel.style.transform = `translate3d(${index * 100}%,0,0)`;
    panel.innerHTML = `
      <video muted playsinline preload="metadata" aria-hidden="true"></video>
      <span class="fmcg-panel-label"><small>${slide.number}</small><b>${slide.title}</b></span>
      <i class="fmcg-panel-link">↗</i>
    `;

    const video = panel.querySelector('video');
    const source = document.createElement('source');
    source.src = slide.video;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.dataset.src = slide.video;
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = index === 0;
    video.loop = false;
    video.playsInline = true;
    video.setAttribute('muted','');
    video.setAttribute('playsinline','');
    video.removeAttribute('loop');
    wall.appendChild(panel);
    return panel;
  });

  const controls = document.createElement('div');
  controls.className = 'hero-slider-controls';
  controls.innerHTML = `
    <button class="hero-slider-arrow hero-slider-prev" type="button" aria-label="Previous category">‹</button>
    <div class="hero-slider-dots" role="tablist" aria-label="Hero categories">
      ${slides.map((slide,index) => `
        <button type="button" role="tab" aria-label="Show ${slide.title}" data-force-hero-dot="${index}">
          <span></span>
        </button>
      `).join('')}
    </div>
    <button class="hero-slider-arrow hero-slider-next" type="button" aria-label="Next category">›</button>
  `;
  shell.appendChild(controls);

  const dots = Array.from(controls.querySelectorAll('[data-force-hero-dot]'));
  let current = 0;
  let locked = false;
  let touchStartX = null;

  function play(index, reset = true) {
    panels.forEach((panel,i) => {
      const video = panel.querySelector('video');
      if (!video) return;
      video.loop = false;
      video.removeAttribute('loop');
      if (i === index) {
        if (reset) {
          try { video.currentTime = 0; } catch (_) {}
        }
        const promise = video.play();
        if (promise && typeof promise.catch === 'function') promise.catch(() => {});
      } else {
        video.pause();
        try { video.currentTime = 0; } catch (_) {}
      }
    });
  }

  function render(index) {
    panels.forEach((panel,i) => {
      panel.style.transform = `translate3d(${(i - index) * 100}%,0,0)`;
      panel.classList.toggle('active', i === index);
      panel.setAttribute('aria-hidden', String(i !== index));
      panel.tabIndex = i === index ? 0 : -1;
    });

    dots.forEach((dot,i) => {
      const active = i === index;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-selected', String(active));
      dot.tabIndex = active ? 0 : -1;
    });

    hero.dataset.heroCategory = slides[index].theme;
  }

  function goTo(index) {
    if (locked) return;
    locked = true;
    current = (index + slides.length) % slides.length;
    render(current);
    play(current, true);
    window.setTimeout(() => { locked = false; }, 720);
  }

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  panels.forEach((panel,index) => {
    const video = panel.querySelector('video');
    video?.addEventListener('ended', () => {
      if (index === current) next();
    });
  });

  controls.querySelector('.hero-slider-prev')?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    prev();
  });

  controls.querySelector('.hero-slider-next')?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    next();
  });

  dots.forEach((dot,index) => {
    dot.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      goTo(index);
    });
  });

  wall.addEventListener('touchstart', event => {
    touchStartX = event.changedTouches?.[0]?.clientX ?? null;
  }, { passive:true });

  wall.addEventListener('touchend', event => {
    if (touchStartX == null) return;
    const endX = event.changedTouches?.[0]?.clientX ?? touchStartX;
    const delta = endX - touchStartX;
    touchStartX = null;
    if (Math.abs(delta) < 45) return;
    if (delta < 0) next();
    else prev();
  }, { passive:true });

  document.addEventListener('visibilitychange', () => {
    const video = panels[current]?.querySelector('video');
    if (!video) return;
    if (document.hidden) video.pause();
    else video.play().catch(() => {});
  });

  render(0);
  play(0, true);
})();