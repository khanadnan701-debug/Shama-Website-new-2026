(()=>{
  const root=document.querySelector('#featured-categories.flavour-explorer');
  if(!root)return;

  const stage=root.querySelector('.flavour-image-wrap');
  const poster=stage&&stage.querySelector('#flavour-image');
  if(!stage||!poster)return;

  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='category-videos.css?v=20260909-2';
  document.head.appendChild(css);

  const RICE='https://videos.pexels.com/video-files/10200319/10200319-hd_2160_3840_25fps.mp4';
  const SPICES='https://videos.pexels.com/video-files/28283517/12351606_3840_2160_30fps.mp4';
  const SAUCE='https://videos.pexels.com/video-files/34129129/14472139_2160_3840_60fps.mp4';
  const TEA='https://videos.pexels.com/video-files/855302/855302-hd_1920_1080_24fps.mp4';

  const scenes=[
    {
      name:'Rice',
      image:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1600',
      videos:[RICE,TEA],
      tone:'gold',
      label:'Basmati • Biryani • Everyday rice'
    },
    {
      name:'Spices',
      image:'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1600',
      videos:[SPICES,SAUCE],
      tone:'spice',
      label:'Aromatic • Colourful • Authentic'
    },
    {
      name:'Sauces & Pastes',
      image:'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600',
      videos:[SAUCE,SPICES],
      tone:'sauce',
      label:'Rich curry • Ready flavour • Kitchen ease'
    },
    {
      name:'Miscellaneous',
      image:'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1600',
      videos:['https://www.pexels.com/download/video/35821317/',SAUCE],
      tone:'snack',
      label:'Snacks • Pantry • Everyday favourites'
    },
    {
      name:'Beverages',
      image:'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1600',
      videos:[TEA,RICE],
      tone:'drink',
      label:'Refreshing • Familiar • Ready to serve'
    },
    {
      name:'Flour & Lentils',
      image:'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600',
      videos:['https://www.pexels.com/download/video/7351721/',SAUCE],
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
  status.className='flavour-motion-status';
  status.textContent='LIVE VIDEO';
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
  let sourceIndex=0;
  let currentScene=null;
  let fallbackTimer=null;

  function showPoster(){
    stage.classList.remove('has-playing-video');
    video.classList.remove('is-ready');
  }

  function revealVideo(token){
    if(token!==loadToken)return;
    video.classList.add('is-ready');
    stage.classList.add('has-playing-video');
    const p=video.play();
    if(p&&typeof p.catch==='function')p.catch(()=>{});
  }

  function trySource(token){
    if(token!==loadToken||!currentScene)return;
    const sources=currentScene.videos||[];
    if(sourceIndex>=sources.length){
      showPoster();
      return;
    }

    const src=sources[sourceIndex++];
    showPoster();
    video.pause();
    video.poster=currentScene.image;
    video.src=src;
    video.load();

    clearTimeout(fallbackTimer);
    fallbackTimer=setTimeout(()=>{
      if(token!==loadToken)return;
      if(video.readyState>=2){
        revealVideo(token);
      }else{
        trySource(token);
      }
    },4500);

    const p=video.play();
    if(p&&typeof p.catch==='function')p.catch(()=>{});
  }

  function loadVideo(scene){
    loadToken+=1;
    const token=loadToken;
    currentScene=scene;
    sourceIndex=0;
    trySource(token);
  }

  ['loadeddata','canplay','playing'].forEach(evt=>{
    video.addEventListener(evt,()=>revealVideo(loadToken));
  });

  video.addEventListener('error',()=>{
    if(currentScene)trySource(loadToken);
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