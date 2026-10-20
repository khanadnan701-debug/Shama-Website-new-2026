/* Self-contained brand explorer for Shama International. No Next.js/third-party renderer. */
(() => {
  'use strict';
  if (document.body.dataset.page !== 'brands') return;
  const cardsHost = document.getElementById('sbr-orbit-cards');
  const orbit = document.getElementById('sbr-orbit');
  const grid = document.getElementById('sbr-brand-grid');
  const search = document.getElementById('sbr-search');
  const panel = document.getElementById('sbr-selection');
  const productGrid = document.getElementById('sbr-product-grid');
  const productFooter = document.getElementById('sbr-product-footer');
  if (!cardsHost || !orbit || !grid || !search || !panel) return;

  const defs = [
    ['Shama','#184b8b','#bc9853','Shama'],
    ['Sunrise','#176e9c','#e4a736','Sunrise'],
    ['Shaheen','#1d442e','#c59c47','Shaheen'],
    ['Ahmed','#9c171d','#ccaa67','Ahmed','ahmed.html'],
    ['Laziza','#db2748','#e6a454','Laziza','laziza.html'],
    ['TRS','#d92920','#f8c856','TRS'],
    ['Heera','#154c81','#b28b3d','Heera'],
    ['National','#d83231','#d83231','National'],
    ['BEST','#18519a','#e4a354','Best'],
    ['Sher-e-Punjab','#2b6939','#ad9741','Sher-e-Punjab'],
    ["Patak's",'#a21a28','#bd8e33',"Patak's",'pataks.html'],
    ['Mazedaar','#317255','#d4ad5b','Mazedar'],
    ["Haldiram's",'#bc2429','#e8ab48','Haldiram'],
    ['Khanum','#547836','#cb9e56','Khanum'],
    ['Schani','#206d62','#e4a14c','Schani'],
    ['MDH','#b8191a','#dea22d','MDH'],
    ['Maggi','#ba2424','#f3c23a','Maggi'],
    ['Knorr','#26823c','#e0a62d','Knorr'],
    ['Shezan','#ce1e2d','#eabd6d','Shezan'],
    ['Alokozai','#38695c','#c1a05a','Alokozai'],
    ["Lay's",'#b52928','#e6b637',"Lay's"],
    ['Kurkure','#b54120','#e8a32b','Kurkure'],
    ['Dabur','#2a8b48','#9fbd64','Dabur'],
    ['Dettol','#117542','#8da745','Dettol'],
    ['Lux','#9b543a','#dba976','Lux'],
    ['Dove','#245b99','#c7a979','Dove'],
    ["Johnson's",'#d74f87','#f1aec7','Johnson'],
    ['Kody','#205f63','#b2a469','Kody'],
    ['TCC','#276571','#b79d56','TCC'],
    ['Lijjat','#b43e30','#d4ae65','Lijjat'],
    ['Telephone','#7a3a83','#d7b184','Telephone'],
    ['Metro','#8a2635','#d7a461','Metro','agarbatti.html'],
    ['Pure','#207246','#b5b563','Pure','agarbatti.html'],
    ['Malka','#976638','#b7a46b','Malka'],
    ['Hashmi','#63472e','#be9e56','Hashmi'],
    ['Orienco','#304977','#b6a359','Orienco'],
    ['Le Renard','#a53d3a','#d5ae61','Le Renard'],
    ['Bikaneri Bites','#c95e20','#e2a445','Bikaneri Bites'],
    ['Punjabi','#276341','#d1ad53','Punjabi'],
    ['Shahi','#234d74','#c7a05f','Shahi'],
    ['Rooh Afza','#b12539','#dfa760','Rooh Afza'],
    ['Carabao','#21593e','#b2a263','Carabao'],
    ['NescafÃ©','#473328','#b39d83','Nescafe'],
    ['Supreme Henna','#784927','#bf9365','Supreme'],
    ['Tata Tea','#bb3035','#c58c45','Tata'],
    ['Pride','#385a78','#b99b5f','Pride'],
    ['Maniarrs','#aa3929','#dfb75d','Maniarr']
  ];

  const CATEGORY_PAGES = {
    rice:'rice.html',spices:'spices.html',sauces:'sauces-pastes.html',misc:'miscellaneous.html',
    beverages:'beverages.html',tea:'tea.html',sugar:'sugar.html',wines:'wines.html',
    flour:'flour-lentiles.html','flour-lentils':'flour-lentiles.html',frozen:'frozen.html',
    oils:'oils.html','dry-fruits':'dry-fruits.html',laziza:'laziza.html',ahmed:'ahmed.html',
    agarbatti:'agarbatti.html',dates:'dates.html',pataks:'pataks.html',cosmetics:'cosmetics.html',
    'non-foods':'non-foods.html',divers:'divers.html',preserves:'preserves.html',
    'sea-food':'sea-food.html','savoury-snacks':'savoury-snacks.html',bakery:'bakery.html',
    paste:'sauces-pastes.html'
  };
  const lower = t => String(t||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[â`]/g,"'").trim();
  const slug = t => lower(t).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const esc = t => String(t || '').replace(/[&<>"']/g, a => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[a]));
  const brandModels = defs.map(([name,ink,accent,prefix,fallback],index) => ({
    name,ink,accent,prefix,fallback,slug:slug(name),order:index,items:[],
    isSerif: ['Shama','Shaheen','Sher-e-Punjab','Khanum','Heera','Le Renard','Malka'].includes(name),
    isNarrow: name.length > 13
  }));
  const bySlug = new Map(brandModels.map(b => [b.slug,b]));
  const sorted = [...brandModels].sort((a,b) => b.prefix.length - a.prefix.length);
  const isMatch = (item, model) => {
    const title = lower(item.title);
    const brand = lower(item.brand || '');
    const key = lower(model.prefix);
    if (model.slug === 'mazedaar') return /^(mazedaar|mazedar)\b/.test(title) || /^(mazedaar|mazedar)$/.test(brand);
    if (model.slug === 'sher-e-punjab') return /^sher[ -]?e[ -]?punjab\b/.test(title) || brand === 'sher-e-punjab';
    if (model.slug === 'shama') return /^shama\b/.test(title) || brand === 'shama';
    if (model.slug === 'tata-tea') return /^tata\b/.test(title) || brand === 'tata tea';
    if (model.slug === 'best') return /^best(?:\b|\s)/.test(title) || brand === 'best';
    if (model.slug === 'rooh-afza') return /^rooh afza\b/.test(title) || brand === 'rooh afza';
    if (model.slug === 'laziza') return /^laziza\b/.test(title) || brand === 'laziza';
    if (model.slug === 'patak-s') return /^patak['s\s]/.test(title) || brand === "patak's";
    if (model.slug === 'haldiram-s') return /^haldiram\b/.test(title) || brand.startsWith('haldiram');
    if (model.slug === 'johnson-s') return /^johnson\b/.test(title) || brand.startsWith('johnson');
    if (model.slug === 'maniarrs') return /^maniar/.test(title) || brand.startsWith('maniar');
    return title.startsWith(key + ' ') || title === key || brand === key;
  };
  const data = typeof productData !== 'undefined' && Array.isArray(productData) ? productData : [];
  for (const item of data) {
    if (!item || !item.title) continue;
    const model = sorted.find(b => isMatch(item,b));
    if (model) model.items.push(item);
  }
  const brands = brandModels.filter(b => b.items.length || b.fallback);
  // Reserve favourite spots at the top while keeping the visual globe varied.
  const featured = [...brands].sort((a,b) => a.order-b.order);
  const count = document.getElementById('sbr-count');
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let selected = null;
  let spinPaused = reducedMotion;
  let interacting = false;
  let pointerStart = null;
  let isDragging = false;
  let lastFrame = 0;
  let rotX = -0.14, rotY = 0.5;
  let onScreen = true;
  const nodes = [];
  let orbRect = null;

  function createWordmark(brand, element) {
    const mark = document.createElement('span');
    mark.className = 'sbr-wordmark' + (brand.isSerif ? ' sbr-wordmark-serif' : '') + (brand.isNarrow ? ' sbr-wordmark-narrow' : '');
    mark.textContent = brand.name;
    const line = document.createElement('span');
    line.className = 'sbr-mini';
    line.textContent = 'EST. IN OUR RANGE';
    element.append(mark,line);
  }
  function choiceButton(brand, orb=false) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = orb ? 'sbr-orbit-card' : 'sbr-brand-choice';
    btn.dataset.brand = brand.slug;
    btn.style.setProperty('--sbr-ink',brand.ink);
    btn.style.setProperty('--sbr-accent',brand.accent);
    btn.setAttribute('aria-label','Explore '+brand.name+' products');
    if (orb) {
      createWordmark(brand,btn);
    } else {
      const title = document.createElement('strong');title.textContent = brand.name;
      const subtitle = document.createElement('small');subtitle.textContent = brand.items.length ? brand.items.length+' products' : 'View range';
      btn.append(title,subtitle);
    }
    btn.addEventListener('click',() => {if(orb && isDragging)return;selectBrand(brand.slug,true);});
    return btn;
  }

  function makeSphere() {
    cardsHost.replaceChildren();nodes.length=0;
    const n=featured.length;
    featured.forEach((brand,i) => {
      const y=1-2*(i+.5)/n;
      const rad=Math.sqrt(Math.max(0,1-y*y));
      const theta=i*Math.PI*(3-Math.sqrt(5));
      const point={x:Math.cos(theta)*rad,y,z:Math.sin(theta)*rad};
      const tile=choiceButton(brand,true);
      cardsHost.appendChild(tile);
      nodes.push({tile,point,brand});
    });
    renderSphere();
  }
  function renderSphere() {
    const w=orbit.clientWidth, h=orbit.clientHeight;
    if (!w || !h) return;
    const mobile = w < 600;
    const radius=Math.min(w*(mobile?.398:.373),h*(mobile?.38:.433),mobile?188:392);
    const cosY=Math.cos(rotY),sinY=Math.sin(rotY),cosX=Math.cos(rotX),sinX=Math.sin(rotX);
    for (const {tile,point,brand} of nodes) {
      const rx=point.x*cosY + point.z*sinY;
      const rz=point.z*cosY - point.x*sinY;
      const ry=point.y*cosX - rz*sinX;
      const dz=point.y*sinX + rz*cosX;
      const depth=(dz+1)/2;
      const scale=.67+depth*.50;
      const opacity=.24+depth*.76;
      const xp=rx*radius*(.95+depth*.13);
      const yp=ry*radius*(mobile?1.12:1.04);
      tile.style.transform=`translate(-50%,-50%) translate3d(${xp.toFixed(1)}px,${yp.toFixed(1)}px,0) scale(${scale.toFixed(3)})`;
      tile.style.opacity=opacity.toFixed(3);
      tile.style.zIndex=String(Math.floor(depth*1000));
      tile.style.filter=depth<.2?'saturate(.57)':'none';
      tile.classList.toggle('is-selected',selected===brand.slug);
      tile.setAttribute('aria-hidden',depth<.09?'true':'false');
      tile.tabIndex=depth<.09?-1:0;
    }
  }
  function animate(ts) {
    const delta=Math.min(48,ts-(lastFrame||ts));lastFrame=ts;
    if(!spinPaused && !interacting && onScreen && !document.hidden)rotY+=delta*.00016;
    renderSphere();
    requestAnimationFrame(animate);
  }
  function selectBrand(key,shouldScroll) {
    const brand=bySlug.get(key);
    if (!brand || !brands.includes(brand)) return;
    selected=key;
    const name=document.getElementById('sbr-selection-name');
    const meta=document.getElementById('sbr-selection-meta');
    name.textContent=brand.name;
    meta.textContent=brand.items.length ? brand.items.length+' products shown from our current catalogue' : 'Explore this brand range';
    productGrid.replaceChildren();
    productFooter.replaceChildren();
    const unique = [];
    const seen=new Set();
    brand.items.forEach(item => {
      const tag=lower(item.title)+'|'+lower(item.pack)+'|'+(item.category||'');
      if(!seen.has(tag)){seen.add(tag);unique.push(item);}
    });
    unique.slice(0,12).forEach(item => {
      const link=document.createElement('a');link.className='sbr-product';
      link.href=CATEGORY_PAGES[item.category] || brand.fallback || 'catalogue.html';
      const picture=document.createElement('div');picture.className='sbr-product-picture';
      const img=document.createElement('img');img.src=item.image||'assets/shama-logo.png';img.alt=item.title;img.loading='lazy';img.decoding='async';
      img.addEventListener('error',()=>{if(!img.dataset.fallback){img.dataset.fallback='true';img.src='assets/shama-logo.png';}});
      picture.append(img);
      const copy=document.createElement('div');copy.className='sbr-product-copy';
      const category=document.createElement('small');category.textContent=String(item.category||'products').replace(/[-_]/g,' ');
      const title=document.createElement('strong');title.textContent=item.title;
      const pack=document.createElement('em');pack.textContent=(item.pack||'Ask about pack sizes')+' Â· View range â';
      copy.append(category,title,pack);link.append(picture,copy);productGrid.append(link);
    });
    if (!unique.length) {
      const message=document.createElement('p');message.className='sbr-empty';message.textContent='Browse the full range for this brand.';productGrid.append(message);
    }
    const categoriesSeen = new Set(unique.map(item=>item.category).filter(Boolean));
    for (const category of [...categoriesSeen].slice(0,7)) {
      const a=document.createElement('a');a.href=CATEGORY_PAGES[category]||'catalogue.html';a.textContent='Explore '+String(category).replace(/[-_]/g,' ')+' â';productFooter.append(a);
    }
    if(brand.fallback){const a=document.createElement('a');a.href=brand.fallback;a.textContent='View '+brand.name+' range â';productFooter.prepend(a);}
    panel.hidden=false;
    document.querySelectorAll('[data-brand]').forEach(el=>{
      const active=el.dataset.brand===selected;
      el.classList.toggle('active',active);
      el.setAttribute('aria-pressed',String(active));
    });
    renderSphere();
    if (shouldScroll) panel.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'});
    try { history.replaceState(null,'','#brand-'+encodeURIComponent(key)); } catch(_){ }
  }
  function renderList(term='') {
    const filtered=brands.filter(b=>lower(b.name).includes(lower(term)));
    grid.replaceChildren();
    const sortedNames=[...filtered].sort((a,b)=>a.name.localeCompare(b.name));
    sortedNames.forEach(b => grid.appendChild(choiceButton(b)));
    if (!filtered.length){const no=document.createElement('p');no.className='sbr-empty';no.textContent='No brands found. Try another name.';grid.append(no);}
    count.textContent=filtered.length+' brands';
    const totalLine=document.querySelector('.sbr-intro');
    if (totalLine && !totalLine.dataset.ready){totalLine.dataset.ready='true';totalLine.innerHTML=`Explore <strong>${brands.length}</strong> selected brands from our wholesale range.<br class="sbr-desktop-break"> Drag the globe or select a name to discover the products.`;}
  }
  function rotateBy(x,y) {rotX=Math.max(-.68,Math.min(.68,rotX+x));rotY+=y;renderSphere();}
  orbit.addEventListener('pointerdown',event => {if(event.button!==0)return;pointerStart={id:event.pointerId,x:event.clientX,y:event.clientY};interacting=true;isDragging=false;});
  window.addEventListener('pointermove',event=>{
    if(!pointerStart || pointerStart.id!==event.pointerId)return;
    const dx=event.clientX-pointerStart.x,dy=event.clientY-pointerStart.y;
    if(Math.abs(dx)+Math.abs(dy)>7)isDragging=true;
    if(isDragging){rotateBy(-dy*.003,dx*.0045);pointerStart.x=event.clientX;pointerStart.y=event.clientY;}
  },{passive:true});
  const endDrag=()=>{pointerStart=null;interacting=false;setTimeout(()=>{isDragging=false;},50);};
  window.addEventListener('pointerup',endDrag);window.addEventListener('pointercancel',endDrag);
  orbit.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();rotateBy(0,-.18);}if(event.key==='ArrowRight'){event.preventDefault();rotateBy(0,.18);}if(event.key==='ArrowUp'){event.preventDefault();rotateBy(-.15,0);}if(event.key==='ArrowDown'){event.preventDefault();rotateBy(.15,0);}});
  document.getElementById('sbr-rotate-left').addEventListener('click',()=>rotateBy(0,-.32));
  document.getElementById('sbr-rotate-right').addEventListener('click',()=>rotateBy(0,.32));
  const play=document.getElementById('sbr-play-toggle');
  const syncPlay=()=>{play.textContent=spinPaused?'â¶':'â¡';play.setAttribute('aria-label',spinPaused?'Resume rotating globe':'Pause rotating globe');};
  play.addEventListener('click',()=>{spinPaused=!spinPaused;syncPlay();});syncPlay();
  document.getElementById('sbr-clear').addEventListener('click',()=>{
    panel.hidden=true;selected=null;
    document.querySelectorAll('[data-brand]').forEach(el=>{el.classList.remove('active');el.setAttribute('aria-pressed','false');});
    try{history.replaceState(null,'',location.pathname);}catch(_){ }
    document.getElementById('sbr-collection').scrollIntoView({behavior:reducedMotion?'auto':'smooth'});
  });
  search.addEventListener('input',()=>renderList(search.value));
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{onScreen=entries[0].isIntersecting;},{rootMargin:'100px'});observer.observe(orbit);}
  const onSize=()=>renderSphere();window.addEventListener('resize',onSize,{passive:true});
  makeSphere();renderList();requestAnimationFrame(animate);
  const hash=decodeURIComponent(location.hash.replace(/^#brand-/,''));
  if (location.hash.startsWith('#brand-') && bySlug.has(hash)) selectBrand(hash,false);
})();
