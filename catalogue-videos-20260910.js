(function(){
  if(document.body.dataset.page !== 'catalogue') return;

  const fallbackCategories = [
    {slug:'rice', name:'Rice'},
    {slug:'spices', name:'Spices'},
    {slug:'sauces', name:'Sauces & Pastes'},
    {slug:'misc', name:'Miscellaneous'},
    {slug:'beverages', name:'Beverages'},
    {slug:'flour', name:'Flour & Lentiles'},
    {slug:'frozen', name:'Frozen'},
    {slug:'oils', name:'Oils'},
    {slug:'dry-fruits', name:'Dry Fruits'}
  ];

  const rangeVideos = {
    rice: 'https://www.pexels.com/download/video/7235046/',
    spices: 'https://www.pexels.com/download/video/28283517/',
    sauces: 'https://www.pexels.com/download/video/28283517/',
    misc: 'https://videos.pexels.com/video-files/29824279/12809900_4096_2160_25fps.mp4',
    beverages: 'https://www.pexels.com/download/video/8165885/',
    flour: 'https://www.pexels.com/download/video/7235046/',
    frozen: 'https://videos.pexels.com/video-files/29824279/12809900_4096_2160_25fps.mp4',
    oils: 'https://www.pexels.com/download/video/8165885/',
    'dry-fruits': 'https://www.pexels.com/download/video/28283517/'
  };

  const style = document.createElement('style');
  style.textContent = `
    body[data-page="catalogue"] .catalogue-preview .preview-frame{background:#071527;isolation:isolate;}
    body[data-page="catalogue"] .catalogue-preview .preview-frame #preview-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.28;filter:blur(1px) saturate(.9);transform:scale(1.04);}
    body[data-page="catalogue"] .catalogue-preview .preview-frame.video-ready #preview-image{opacity:0;}
    body[data-page="catalogue"] .catalogue-preview-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.02);transition:opacity .55s ease,transform .8s cubic-bezier(.2,.8,.2,1);z-index:1;}
    body[data-page="catalogue"] .preview-frame.video-ready .catalogue-preview-video{opacity:1;transform:scale(1);}
    body[data-page="catalogue"] .preview-gradient{z-index:2;background:linear-gradient(180deg,rgba(5,12,28,.05) 0%,rgba(5,12,28,.18) 45%,rgba(5,12,28,.82) 100%)!important;}
    body[data-page="catalogue"] .preview-number,
    body[data-page="catalogue"] .preview-tag{z-index:4;}
    body[data-page="catalogue"] .preview-tag{display:flex;align-items:center;gap:10px;}
    body[data-page="catalogue"] .preview-tag:before{content:'▶';width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.92);color:#17234a;font-size:9px;letter-spacing:0;}
    body[data-page="catalogue"] .preview-video-pill{position:absolute;z-index:4;right:20px;top:20px;padding:10px 12px;border-radius:999px;background:rgba(255,255,255,.88);color:#17234a;font:900 10px/1 Manrope,sans-serif;letter-spacing:.12em;text-transform:uppercase;backdrop-filter:blur(12px);box-shadow:0 16px 36px rgba(0,0,0,.18);}
    body[data-page="catalogue"] .catalogue-row.active,
    body[data-page="catalogue"] .catalogue-row:hover{cursor:pointer;}
    @media(max-width:600px){body[data-page="catalogue"] .preview-video-pill{right:14px;top:14px;font-size:9px;padding:8px 10px;}}
  `;
  document.head.appendChild(style);

  function setupCatalogueVideos(){
    const page = document.querySelector('.catalogue-index');
    const frame = document.querySelector('.catalogue-preview .preview-frame');
    const image = document.querySelector('#preview-image');
    if(!page || !frame || !image) return;

    const allCategories = (typeof categories !== 'undefined' && Array.isArray(categories)) ? categories : fallbackCategories;

    const video = document.createElement('video');
    video.className = 'catalogue-preview-video';
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('muted','');
    video.setAttribute('playsinline','');
    frame.insertBefore(video, image);

    const pill = document.createElement('span');
    pill.className = 'preview-video-pill';
    pill.textContent = 'Video';
    frame.appendChild(pill);

    function setVideo(index){
      const cat = allCategories[index] || allCategories[0];
      if(!cat) return;
      const src = rangeVideos[cat.slug] || rangeVideos.rice;
      frame.classList.remove('video-ready');
      video.pause();
      if(video.getAttribute('src') !== src){
        video.src = src;
        video.load();
      }
      if(cat.image){
        image.src = cat.image;
        video.poster = cat.image;
      }
      video.play().catch(function(){});
    }

    video.addEventListener('loadeddata', function(){ frame.classList.add('video-ready'); });
    video.addEventListener('canplay', function(){ frame.classList.add('video-ready'); });
    video.addEventListener('error', function(){ frame.classList.remove('video-ready'); });

    page.addEventListener('mouseover', function(event){
      const row = event.target.closest('.catalogue-row');
      if(!row) return;
      setVideo(Number(row.dataset.catalogue || 0));
    });

    page.addEventListener('focusin', function(event){
      const row = event.target.closest('.catalogue-row');
      if(!row) return;
      setVideo(Number(row.dataset.catalogue || 0));
    });

    setVideo(0);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupCatalogueVideos);
  }else{
    setupCatalogueVideos();
  }
})();
