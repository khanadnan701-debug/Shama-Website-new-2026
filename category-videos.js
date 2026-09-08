(()=>{
  const root=document.querySelector('#featured-categories.flavour-explorer');
  if(!root)return;

  const stage=root.querySelector('.flavour-image-wrap');
  const poster=stage&&stage.querySelector('#flavour-image');
  if(!stage||!poster)return;

  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='category-videos.css?v=20260909-5';
  document.head.appendChild(css);

  const scenes=[
    {name:'Rice',image:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/rice.mp4?v=20260909-5',tone:'gold',label:'Basmati • Biryani • Everyday rice'},
    {name:'Spices',image:'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/spices.mp4?v=20260909-5',tone:'spice',label:'Aromatic • Colourful • Authentic'},
    {name:'Sauces & Pastes',image:'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/sauces-pastes.mp4?v=20260909-5',tone:'sauce',label:'Rich curry • Ready flavour • Kitchen ease'},
    {name:'Miscellaneous',image:'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/miscellaneous.mp4?v=20260909-5',tone:'snack',label:'Snacks • Pantry • Everyday favourites'},
    {name:'Beverages',image:'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/beverages.mp4?v=20260909-5',tone:'drink',label:'Refreshing • Familiar • Ready to serve'},
    {name:'Flour & Lentils',image:'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600',video:'/videos/flour-lentils.mp4?v=20260909-5',tone:'flour',label:'Atta • Dal • Chapati • Everyday staples'}
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

  const chip=document.createElement('span');
  chip.className='flavour-motion-chip';
  const status=document.createElement('span');
  status.className='flavour-motion-status is-loading';
  status.textContent='VIDEO LOADING';
  stage.appendChild(chip);
  stage.appendChild(status);

  const nodes=[...root.querySelectorAll('.flavour-node')];
  let activeIndex=Math.max(0,nodes.findIndex(n=>n.classList.contains('active')));
  let loadToken=0;
  let timeoutId=null;

  function setStatus(text,loading=false){
    status.textContent=text;
    status.classList.toggle('is-loading',loading);
  }

  function showPoster(){
    stage.classList.remove('has-playing-video');
    video.classList.remove('is-ready');
  }

  function revealVideo(token){
    if(token!==loadToken)return;
    clearTimeout(timeoutId);
    video.classList.add('is-ready');
    stage.classList.add('has-playing-video');
    setStatus('LIVE VIDEO',false);
  }

  function start(scene){
    loadToken+=1;
    const token=loadToken;
    clearTimeout(timeoutId);
    showPoster();
    setStatus('VIDEO LOADING',true);
    video.pause();
    video.poster=scene.image;
    video.src=scene.video;
    video.load();

    const playPromise=video.play();
    if(playPromise&&typeof playPromise.catch==='function'){
      playPromise.catch(()=>setStatus('TAP TO PLAY',true));
    }

    timeoutId=setTimeout(()=>{
      if(token!==loadToken)return;
      if(video.readyState>=2){
        revealVideo(token);
      }else{
        setStatus('VIDEO RETRY',true);
        video.load();
        const retry=video.play();
        if(retry&&typeof retry.catch==='function')retry.catch(()=>{});
      }
    },4500);
  }

  ['loadeddata','canplay','playing'].forEach(evt=>video.addEventListener(evt,()=>revealVideo(loadToken)));
  video.addEventListener('error',()=>{
    showPoster();
    setStatus('VIDEO RETRY',true);
  });

  stage.addEventListener('click',()=>{
    if(video.paused){
      const p=video.play();
      if(p&&typeof p.catch==='function')p.catch(()=>{});
    }
  });

  function applyScene(index){
    const scene=scenes[index]||scenes[0];
    activeIndex=index;
    root.dataset.flavourTone=scene.tone;
    poster.src=scene.image;
    poster.alt=scene.name;
    chip.textContent=scene.name;
    start(scene);
  }

  root.addEventListener('click',e=>{
    const node=e.target.closest('.flavour-node');
    if(!node)return;
    const index=nodes.indexOf(node);
    if(index<0||index===activeIndex)return;
    applyScene(index);
  });

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
      video.pause();
    }else{
      const p=video.play();
      if(p&&typeof p.catch==='function')p.catch(()=>{});
    }
  });

  applyScene(activeIndex);
})();
