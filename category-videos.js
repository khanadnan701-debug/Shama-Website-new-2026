(()=>{
  const root=document.querySelector('#featured-categories.flavour-explorer');
  if(!root)return;

  const stage=root.querySelector('.flavour-image-wrap');
  const poster=stage&&stage.querySelector('#flavour-image');
  if(!stage||!poster)return;

  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='category-videos.css?v=20260908-2';
  document.head.appendChild(css);

  const clips=[
    {
      name:'Rice',
      sources:['https://www.pexels.com/download/video/36886083/','assets/videos/rice.mp4'],
      poster:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      name:'Spices',
      sources:['https://www.pexels.com/download/video/4068140/','assets/videos/spices.mp4'],
      poster:'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      name:'Sauces & Pastes',
      sources:['https://www.pexels.com/download/video/34129129/','assets/videos/sauces-pastes.mp4'],
      poster:'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      name:'Miscellaneous',
      sources:['https://www.pexels.com/download/video/35821202/','assets/videos/miscellaneous.mp4'],
      poster:'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      name:'Beverages',
      sources:['https://www.pexels.com/download/video/4752326/','assets/videos/beverages.mp4'],
      poster:'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      name:'Flour & Lentils',
      sources:['https://www.pexels.com/download/video/10977367/','assets/videos/flour-lentils.mp4'],
      poster:'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
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
  let sourceIndex=0;

  function showPoster(clip){
    poster.src=clip.poster;
    poster.alt=clip.name;
    poster.classList.remove('is-hidden');
    video.classList.remove('is-ready');
    badge.classList.remove('is-ready');
  }

  function trySource(clip,index,currentToken){
    if(currentToken!==token||activeIndex!==index)return;
    const src=clip.sources[sourceIndex];
    if(!src){
      video.removeAttribute('src');
      video.load();
      return;
    }
    video.pause();
    video.src=src;
    video.poster=clip.poster;
    video.load();
  }

  function loadClip(index){
    activeIndex=index;
    const clip=clips[index]||clips[0];
    const currentToken=++token;
    sourceIndex=0;
    showPoster(clip);

    if(reduceMotion||saveData){
      video.removeAttribute('src');
      video.load();
      return;
    }

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

    const onCanPlay=()=>ready();
    video.addEventListener('canplay',onCanPlay,{once:true});
    trySource(clip,index,currentToken);
  }

  video.addEventListener('error',()=>{
    const clip=clips[activeIndex]||clips[0];
    sourceIndex+=1;
    if(sourceIndex<clip.sources.length){
      trySource(clip,activeIndex,token);
      return;
    }
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