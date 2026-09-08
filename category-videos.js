(()=>{
  const root=document.querySelector('#featured-categories.flavour-explorer');
  if(!root)return;

  const stage=root.querySelector('.flavour-image-wrap');
  const poster=stage&&stage.querySelector('#flavour-image');
  if(!stage||!poster)return;

  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='category-videos.css?v=20260909-3';
  document.head.appendChild(css);

  const scenes=[
    {
      name:'Rice',
      image:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1600',
      video:'/video/rice?v=20260909-3',
      tone:'gold',
      label:'Basmati • Biryani • Everyday rice'
    },
    {
      name:'Spices',
      image:'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1600',
      video:'/video/spices?v=20260909-3',
      tone:'spice',
      label:'Aromatic • Colourful • Authentic'
    },
    {
      name:'Sauces & Pastes',
      image:'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600',
      video:'/video/sauces-pastes?v=20260909-3',
      tone:'sauce',
      label:'Rich curry • Ready flavour • Kitchen ease'
    },
    {
      name:'Miscellaneous',
      image:'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1600',
      video:'/video/miscellaneous?v=20260909-3',
      tone:'snack',
      label:'Snacks • Pantry • Everyday favourites'
    },
    {
      name:'Beverages',
      image:'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1600',
      video:'/video/beverages?v=20260909-3',
      tone:'drink',
      label:'Refreshing • Familiar • Ready to serve'
    },
    {
      name:'Flour & Lentils',
      image:'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600',
      video:'/video/flour-lentils?v=20260909-3',
      tone:'flour',
      label:'Atta • Dal • Chapati • Everyday staples'
    }
  ];

  poster.classList.add('flavour-motion-image');
  poster.removeAttribute('loading');

  const video=document.createElement('video');
  video.className='flavour-motion-video';
  video.autoplay=true;
  video.muted=true;
  video.defaultMuted=true;
  video.loop=true;
  video.playsInline=true;
  video.preload='auto';
  video.disablePictureInPicture=true;
  video.setAttribute('autoplay','');
  video.setAttribute('muted','');
  video.setAttribute('loop','');
  video.setAttribute('playsinline','');
  video.setAttribute('webkit-playsinline','');
  video.setAttribute('aria-hidden','true');
  stage.insertBefore(video,poster.nextSibling);

  const glow=document.createElement('span');
  glow.className='flavour-motion-glow';
  const grain=document.createElement('span');
  grain.className='flavour-motion-grain';
  const chip=document.createElement('span');
  chip.className='flavour-motion-chip';
  const status=document.createElement('span');
  status.className='flavour-motion-status is-loading';
  status.textContent='LOADING VIDEO';
  const caption=document.createElement('span');
  caption.className='flavour-motion-caption';

  stage.appendChild(glow);
  stage.appendChild(grain);
  stage.appendChild(chip);
  stage.appendChild(status);
  stage.appendChild(caption);

  const nodes=[...root.querySelectorAll('.flavour-node')];
  let activeIndex=Math.max(0,nodes.findIndex(n=>n.classList.contains('active')));
  let loadToken=0;
  let timeoutId=null;

  function showPoster(message='VIDEO LOADING'){
    stage.classList.remove('has-playing-video');
    video.classList.remove('is-ready');
    status.classList.add('is-loading');
    status.textContent=message;
  }

  function revealVideo(token){
    if(token!==loadToken)return;
    clearTimeout(timeoutId);
    video.classList.add('is-ready');
    stage.classList.add('has-playing-video');
    status.classList.remove('is-loading');
    status.textContent='LIVE VIDEO';
    const p=video.play();
    if(p&&typeof p.catch==='function')p.catch(()=>{});
  }

  function loadVideo(scene){
    loadToken+=1;
    const token=loadToken;
    clearTimeout(timeoutId);
    showPoster('LOADING VIDEO');
    video.pause();
    video.poster=scene.image;
    video.src=scene.video;
    video.load();

    timeoutId=setTimeout(()=>{
      if(token!==loadToken)return;
      if(video.readyState>=2){
        revealVideo(token);
      }else{
        showPoster('VIDEO RETRY');
        video.load();
        const retry=video.play();
        if(retry&&typeof retry.catch==='function')retry.catch(()=>{});
      }
    },5000);

    const p=video.play();
    if(p&&typeof p.catch==='function')p.catch(()=>{});
  }

  ['loadeddata','canplay','playing'].forEach(evt=>{
    video.addEventListener(evt,()=>revealVideo(loadToken));
  });

  video.addEventListener('error',()=>{
    showPoster('VIDEO RETRY');
  });

  function applyScene(index){
    const scene=scenes[index]||scenes[0];
    activeIndex=index;
    root.dataset.flavourTone=scene.tone;
    poster.classList.remove('is-entering');
    void poster.offsetWidth;
    poster.src=scene.image;
    poster.alt=scene.name;
    chip.textContent=scene.name;
    caption.textContent=scene.label;
    requestAnimationFrame(()=>poster.classList.add('is-entering'));
    loadVideo(scene);
  }

  poster.addEventListener('error',()=>{
    poster.src=scenes[0].image;
  });

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
      video.pause();
    }else{
      const p=video.play();
      if(p&&typeof p.catch==='function')p.catch(()=>{});
    }
  });

  root.addEventListener('click',e=>{
    const node=e.target.closest('.flavour-node');
    if(!node)return;
    const index=nodes.indexOf(node);
    if(index<0||index===activeIndex)return;
    applyScene(index);
  });

  applyScene(activeIndex);
})();
