(()=>{
  const root=document.querySelector('#featured-categories.flavour-explorer');
  if(!root)return;

  const stage=root.querySelector('.flavour-image-wrap');
  const poster=stage&&stage.querySelector('#flavour-image');
  if(!stage||!poster)return;

  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='category-videos.css?v=20260908-1';
  document.head.appendChild(css);

  const clips=[
    {name:'Rice',video:'assets/videos/rice.mp4',poster:'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1600&q=88'},
    {name:'Spices',video:'assets/videos/spices.mp4',poster:'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1600&q=88'},
    {name:'Sauces & Pastes',video:'assets/videos/sauces-pastes.mp4',poster:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1600&q=88'},
    {name:'Miscellaneous',video:'assets/videos/miscellaneous.mp4',poster:'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1600&q=88'},
    {name:'Beverages',video:'assets/videos/beverages.mp4',poster:'https://images.unsplash.com/photo-1692620609860-be6717812f71?auto=format&fit=crop&w=1600&q=88'},
    {name:'Flour & Lentils',video:'assets/videos/flour-lentils.mp4',poster:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=88'}
  ];

  poster.classList.add('flavour-video-poster');
  poster.removeAttribute('loading');

  const video=document.createElement('video');
  video.className='flavour-video';
  video.muted=true;
  video.defaultMuted=true;
  video.loop=true;
  video.autoplay=true;
  video.playsInline=true;
  video.preload='metadata';
  video.setAttribute('muted','');
  video.setAttribute('playsinline','');
  video.setAttribute('aria-hidden','true');

  const shade=document.createElement('span');
  shade.className='flavour-video-shade';
  const badge=document.createElement('span');
  badge.className='flavour-video-badge';
  badge.textContent='Live flavour';

  stage.insertBefore(video,poster);
  stage.appendChild(shade);
  stage.appendChild(badge);

  const reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData=!!(navigator.connection&&navigator.connection.saveData);
  let activeIndex=0;
  let token=0;

  function showPoster(clip){
    poster.src=clip.poster;
    poster.alt=clip.name;
    poster.classList.remove('is-hidden');
    video.classList.remove('is-ready');
    badge.classList.remove('is-ready');
  }

  function loadClip(index){
    activeIndex=index;
    const clip=clips[index]||clips[0];
    const currentToken=++token;
    showPoster(clip);

    if(reduceMotion||saveData){
      video.removeAttribute('src');
      video.load();
      return;
    }

    video.pause();
    video.src=clip.video;
    video.poster=clip.poster;
    video.load();

    const ready=()=>{
      if(currentToken!==token||activeIndex!==index)return;
      video.classList.add('is-ready');
      poster.classList.add('is-hidden');
      badge.classList.add('is-ready');
      const p=video.play();
      if(p&&typeof p.catch==='function')p.catch(()=>{
        if(currentToken===token){
          video.classList.remove('is-ready');
          poster.classList.remove('is-hidden');
          badge.classList.remove('is-ready');
        }
      });
    };

    if(video.readyState>=3)ready();
    else video.addEventListener('canplay',ready,{once:true});
  }

  video.addEventListener('error',()=>{
    video.classList.remove('is-ready');
    poster.classList.remove('is-hidden');
    badge.classList.remove('is-ready');
  });

  root.addEventListener('click',e=>{
    const node=e.target.closest('.flavour-node');
    if(!node)return;
    const nodes=[...root.querySelectorAll('.flavour-node')];
    const index=nodes.indexOf(node);
    if(index<0)return;
    setTimeout(()=>loadClip(index),0);
  });

  const initial=[...root.querySelectorAll('.flavour-node')].findIndex(n=>n.classList.contains('active'));
  loadClip(initial>=0?initial:0);
})();
