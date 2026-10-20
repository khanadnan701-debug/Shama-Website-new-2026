/* Shama International | Brand dome v3. Actual supplied logo artwork, no third-party library. */
(() => {
  'use strict';
  if (document.body.dataset.page !== 'brands') return;
  const orbit = document.getElementById('sbr-orbit');
  const host = document.getElementById('sbr-orbit-cards');
  const grid = document.getElementById('sbr-brand-grid');
  const search = document.getElementById('sbr-search');
  const counter = document.getElementById('sbr-count');
  const panel = document.getElementById('sbr-selection');
  const productGrid = document.getElementById('sbr-product-grid');
  const footer = document.getElementById('sbr-product-footer');
  const pauseButton = document.getElementById('sbr-play-toggle');
  if (!orbit || !host || !grid || !search || !panel || !productGrid || !footer) return;

  // The ZIP provided by Shama contains these 36 logos; existing Shama-family
  // and partner logos (Shaheen, Sher-e-Punjab, TRS, Tata Tea) complete the sphere.
  const names = [
    ['Shama','shama','shama'], ['Sunrise','sunrise','sunrise'],
    ['Shaheen','shaheen','shaheen'], ['Sher-e-Punjab','sher-e-punjab','sher-e-punjab'],
    ['Ahmed','ahmed','ahmed'],['Laziza','laziza','laziza'],
    ['TRS','trs','trs'],['Heera','heera','heera'],
    ['National','national','national'],['BEST','best','best'],
    ["Patak's",'patak-s',"patak's"],['Mazedaar','mazedaar','mazedar'],
    ["Haldiram's",'haldiram-s','haldiram'],['Khanum','khanum','khanum'],
    ['Schani','schani','schani'],['MDH','mdh','mdh'],['Maggi','maggi','maggi'],
    ['Knorr','knorr','knorr'],['Shezan','shezan','shezan'],['Alokozai','alokozai','alokozai'],
    ["Lay's",'lay-s',"lay's"],['Kurkure','kurkure','kurkure'],
    ['Dabur','dabur','dabur'],['Dettol','dettol','dettol'],['Lux','lux','lux'],
    ['Dove','dove','dove'],["Johnson's",'johnson-s','johnson'],
    ['Kody','kody','kody'],['Lijjat','lijjat','lijjat'],
    ['Telephone','telephone','telephone'],['Metro','metromilan','metro'],
    ['Malka','malka','malka'],['Hashmi','hashmi','hashmi'],
    ['Orienco','orienco','orienco'],['Bikaneri Bites','bikaneri-bites','bikaneri'],
    ['Rooh Afza','rooh-afza','rooh afza'],['Carabao','carabao','carabao'],
    ['Supreme Henna','supreme-henna','supreme']
  ];
  const extraBrands = [
    ['Tata Tea','tata-tea','tata tea'],['TCC','tcc','tcc'],['Pure','pure','pure'],
    ['Shahi','shahi','shahi'],['Le Renard','le-renard','le renard'],
    ['Punjabi','punjabi','punjabi'],['Pride','pride','pride'],['Nescafe','nescafe','nescafe']
  ];
  const logos = new Map(names.map((entry) => [entry[1], '/assets/brand-globe/' + entry[1] + '.webp']));
  logos.set('shaheen','/assets/brand-logos/shaheen.webp');
  logos.set('trs','/assets/brand-logos/trs.webp');
  logos.set('tata-tea','/assets/brand-logos/tata-tea.webp');
  logos.set('sher-e-punjab','/assets/brand-logos/sher-e-punjab.webp');
  const categories = {
    rice:'rice.html',spices:'spices.html',sauces:'sauces-pastes.html',misc:'miscellaneous.html',
    beverages:'beverages.html',tea:'tea.html',sugar:'sugar.html',wines:'wines.html',
    flour:'flour-lentiles.html','flour-lentils':'flour-lentiles.html',frozen:'frozen.html',
    oils:'oils.html','dry-fruits':'dry-fruits.html',laziza:'laziza.html',ahmed:'ahmed.html',
    agarbatti:'agarbatti.html',dates:'dates.html',pataks:'pataks.html',cosmetics:'cosmetics.html',
    'non-foods':'non-foods.html',divers:'divers.html',preserves:'preserves.html',
    'sea-food':'sea-food.html','savoury-snacks':'savoury-snacks.html',bakery:'bakery.html',
    paste:'sauces-pastes.html'
  };
  const lower = str => String(str ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const brands = [...names,...extraBrands].map(([name,id,prefix]) => ({name,id,prefix,logo:logos.get(id)||'',items:[]}));
  const byId = new Map(brands.map(b=>[b.id,b]));
  const isBrandItem = (item,b) => {
    const name=lower(item.title),label=lower(item.brand),prefix=lower(b.prefix);
    if (b.id==='shama') return /^shama\b/.test(name) || label==='shama';
    if (b.id==='sher-e-punjab') return /^sher[ -]?e[ -]?punjab\b/.test(name) || label==='sher-e-punjab';
    if (b.id==='mazedaar') return /^(mazedar|mazedaar)\b/.test(name)|| /^(mazedar|mazedaar)$/.test(label);
    if (b.id==='patak-s') return /^patak['s ]/.test(name) || label.startsWith('patak');
    if (b.id==='haldiram-s') return /^haldiram/.test(name)||label.startsWith('haldiram');
    if (b.id==='johnson-s') return /^johnson/.test(name)||label.startsWith('johnson');
    if (b.id==='tata-tea')return /^tata\b/.test(name)|| label==='tata tea';
    if (b.id==='bikaneri-bites')return /^bikaneri/.test(name)||label.startsWith('bikaneri');
    if (b.id==='rooh-afza')return /^rooh afza/.test(name)||label.startsWith('rooh afza');
    if (b.id==='best')return /^best\b/.test(name)||label==='best';
    return name===prefix || name.startsWith(prefix+' ') || label===prefix;
  };
  const data = (typeof productData !== 'undefined' && Array.isArray(productData)) ? productData : [];
  // Most specific brands first so a brand name is never incorrectly swallowed by a short prefix.
  const matchOrder=[...brands].sort((a,b)=>b.prefix.length-a.prefix.length);
  data.forEach(item=>{
    if(!item||!item.title)return;
    const brand=matchOrder.find(b=>isBrandItem(item,b));
    if(brand)brand.items.push(item);
  });
  const displayBrands = brands.filter(b=>b.logo||b.items.length);
  const sphereBrands=brands.filter(b=>b.logo);
  const flagship=['shama','sunrise','shaheen','sher-e-punjab'];
  const reducedMotion=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let selected=null;
  let paused=reducedMotion;
  let yaw=0,pitch=-.025,lastTime=0,active=true;
  let dragging=false,dragDistance=0,down=null;
  const tiles=[];
  const PI=Math.PI;
  const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));

  // A tiled globe: consistent bands of cells wrapped around a sphere. The whole
  // mosaic rotates together instead of scattered floating buttons.
  const narrowAtLoad=window.matchMedia && window.matchMedia('(max-width:640px)').matches;
  const latitudes=narrowAtLoad?[-1.04,-.78,-.52,-.26,.02,.28,.53,.78,1.04]:[-1.10,-.90,-.70,-.51,-.32,-.12,.08,.28,.47,.65,.84,1.04];
  const slots=[];
  latitudes.forEach((lat,row)=>{
    const count=Math.max(narrowAtLoad?7:9,Math.round((narrowAtLoad?13:20)*Math.cos(lat)));
    for(let col=0;col<count;col++){
      // Stagger adjacent bands to make a curved tiled-mosaic surface.
      const lon=(col-(count-1)/2)*(2*PI/count)+(row%2?.10:0);
      slots.push({lat,lon,row,col,count});
    }
  });
  // Mix the supplied logos into new positions on every page visit.
  // The flagship four launch near the front; Shama appears only once and
  // stays part of the rotating sphere (not a fixed overlay).
  function shuffleItems(source) {
    const result = source.slice();
    for(let i=result.length-1;i>0;i--) {
      const j=Math.floor(Math.random()*(i+1));
      [result[i],result[j]]=[result[j],result[i]];
    }
    return result;
  }
  const namesAtSlot=new Map();
  function closestFreeSlot(lat,lon) {
    const candidates=slots.filter(slot=>!namesAtSlot.has(slot));
    candidates.sort((a,b)=>
      (a.lat-lat)**2 + Math.atan2(Math.sin(a.lon-lon),Math.cos(a.lon-lon))**2 -
      ((b.lat-lat)**2 + Math.atan2(Math.sin(b.lon-lon),Math.cos(b.lon-lon))**2)
    );
    return candidates[0];
  }
  const shamaSlot=closestFreeSlot(.08,0);
  if(shamaSlot)namesAtSlot.set(shamaSlot,byId.get('shama'));
  const nearFront=[
    ['sunrise',-.30,-.72],
    ['shaheen',.32,-.74],
    ['sher-e-punjab',.32,.74]
  ];
  nearFront.forEach(([id,lat,lon])=>{
    const slot=closestFreeSlot(lat,lon);
    if(slot)namesAtSlot.set(slot,byId.get(id));
  });
  const brandPool=sphereBrands.filter(brand=>!flagship.includes(brand.id));
  const remainingSlots=slots.filter(slot=>!namesAtSlot.has(slot));
  // A shuffled bag uses every supplied logo before it starts repeating.
  // A proximity check prevents identical logos appearing alongside each other.
  let bag=[];
  const placements=new Map();
  function neighbourDistance(a,b){
    const dy=a.lat-b.lat;
    const dx=Math.atan2(Math.sin(a.lon-b.lon),Math.cos(a.lon-b.lon));
    return dy*dy+dx*dx;
  }
  for(const slot of remainingSlots){
    if(!bag.length)bag=shuffleItems(brandPool);
    const eligible=bag.findIndex(brand=>!
      (placements.get(brand.id)||[]).some(other=>neighbourDistance(slot,other)<.21)
    );
    const pick=eligible>=0?eligible:0;
    const brand=bag.splice(pick,1)[0];
    namesAtSlot.set(slot,brand);
    if(!placements.has(brand.id))placements.set(brand.id,[]);
    placements.get(brand.id).push(slot);
  }
  // Distinct flagship logos are always exactly one tile each, including Shama.
  function createTile(slot,index){
    const brand=namesAtSlot.get(slot);
    const button=document.createElement('button');
    button.type='button';
    button.className='sbr3-tile' + (flagship.includes(brand.id)?' sbr3-family':'') + (brand.id==='shama'?' sbr3-shama':'');
    button.dataset.brand=brand.id;
    button.setAttribute('aria-label','Explore '+brand.name+' products');
    button.setAttribute('aria-pressed','false');
    const picture=document.createElement('img');
    picture.src=brand.logo;
    picture.alt=brand.name+' logo';
    picture.loading=index<85?'eager':'lazy';
    picture.decoding='async';
    picture.addEventListener('error',()=>{
      picture.hidden=true;
      const text=document.createElement('strong');text.className='sbr3-fallback';text.textContent=brand.name;
      button.append(text);
    },{once:true});
    button.append(picture);
    button.addEventListener('click',()=>{if(dragDistance>7)return;selectBrand(brand.id,true)});
    host.appendChild(button);
    tiles.push({button,slot,brand});
  }
  slots.forEach(createTile);

  function render(){
    const rect=orbit.getBoundingClientRect();
    if(!rect.width||!rect.height)return;
    const mobile=rect.width<640;
    // Display a bold, large globe which fills its own hero and curves at the edges.
    const radius=Math.min(rect.width*(mobile?.47:.455),rect.height*(mobile?.56:.56),mobile?345:620);
    const fov= mobile?890:1550;
    const sinY=Math.sin(yaw),cosY=Math.cos(yaw),sinX=Math.sin(pitch),cosX=Math.cos(pitch);
    const tileScale=mobile?.69:1;
    for(const {button,slot,brand} of tiles){
      const cl=Math.cos(slot.lat),sl=Math.sin(slot.lat);
      const sx=cl*Math.sin(slot.lon), sy=-sl, sz=cl*Math.cos(slot.lon);
      const rx=sx*cosY+sz*sinY;
      const rz=sz*cosY-sx*sinY;
      const ry=sy*cosX-rz*sinX;
      const dz=sy*sinX+rz*cosX;
      const facing=dz>-.025;
      const perspective=fov/(fov+radius*(1-dz)*.38);
      const x=rx*radius*perspective*1.04;
      const y=ry*radius*perspective;
      const depth=clamp(dz,0,1);
      // Shaded sides and obscured back create a cohesive curved globe.
      const alpha=!facing?0:Math.min(1,.17+depth*1.25);
      const yawAngle=Math.atan2(rx,dz);
      const tiltAngle=Math.asin(clamp(ry,-1,1));
      const scale=(.78+depth*.25)*perspective*tileScale;
      button.style.transform='translate(-50%,-50%) translate3d('+x.toFixed(2)+'px,'+y.toFixed(2)+'px,0) rotateY('+(-yawAngle*.9).toFixed(3)+'rad) rotateX('+(tiltAngle*.27).toFixed(3)+'rad) scale('+scale.toFixed(3)+')';
      button.style.opacity=alpha.toFixed(3);
      button.style.zIndex=String(500+Math.round(dz*500)+(brand.id==='shama'&&dz>.2?90:0));
      button.style.pointerEvents=dz>.1?'auto':'none';
      button.tabIndex=dz>.12?0:-1;
      button.setAttribute('aria-hidden',dz>.12?'false':'true');
      button.classList.toggle('sbr3-selected',selected===brand.id);
    }
  }
  function animate(now){
    const delta=Math.min(64,Math.max(0,now-(lastTime||now)));
    lastTime=now;
    if(!paused&&!down&&active&&!document.hidden)yaw+=delta*.00013;
    if(active&&!document.hidden)render();
    window.requestAnimationFrame(animate);
  }
  function selectBrand(id,scroll){
    const brand=byId.get(id);
    if(!brand)return;
    selected=id;
    document.getElementById('sbr-selection-name').textContent=brand.name;
    document.getElementById('sbr-selection-meta').textContent=brand.items.length
       ?brand.items.length+' products in our current catalogue'
       :'Our team can confirm the current wholesale range';
    productGrid.replaceChildren();footer.replaceChildren();
    const found=new Set();
    let shown=0;
    for(const item of brand.items){
      const signature=[item.category,item.title,item.pack||''].join('|').toLowerCase();
      if(found.has(signature))continue;
      found.add(signature);
      if(shown>=12)continue;
      shown++;
      const a=document.createElement('a');a.className='sbr-product';
      a.href=categories[item.category]||'catalogue.html';
      const photo=document.createElement('div');photo.className='sbr-product-picture';
      const img=document.createElement('img');img.src=item.image||'/assets/shama-logo.png';img.alt=item.title;img.loading='lazy';img.decoding='async';
      img.onerror=()=>{img.onerror=null;img.src='/assets/shama-logo.png'};
      photo.append(img);
      const copy=document.createElement('div');copy.className='sbr-product-copy';
      const cat=document.createElement('small');cat.textContent=String(item.category||'products').replace(/-/g,' ');
      const title=document.createElement('strong');title.textContent=item.title;
      const pack=document.createElement('em');pack.textContent=(item.pack||'Ask about pack sizes')+' - View range';
      copy.append(cat,title,pack);a.append(photo,copy);productGrid.append(a);
    }
    if(!shown){
      const empty=document.createElement('div');empty.className='sbr-brand-no-products';
      const title=document.createElement('strong');title.textContent='Ask us about '+brand.name;
      const p=document.createElement('p');p.textContent='Individual products are not yet listed in our online catalogue. Contact our wholesale team for current availability and prices.';
      const a=document.createElement('a');a.href='contact.html';a.textContent='Contact Shama International';empty.append(title,p,a);productGrid.append(empty);
    }
    const categoriesFound=[...new Set(brand.items.map(i=>i.category).filter(Boolean))];
    categoriesFound.slice(0,7).forEach(cat=>{
      const link=document.createElement('a');link.href=categories[cat]||'catalogue.html';link.textContent='Explore '+cat.replace(/-/g,' ');footer.append(link);
    });
    panel.hidden=false;
    document.querySelectorAll('[data-brand]').forEach(el=>{
      const active=el.dataset.brand===selected;
      el.classList.toggle('active',active);
      el.setAttribute('aria-pressed',String(active));
    });
    if(scroll)panel.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'});
    try{history.replaceState(null,'','#brand-'+encodeURIComponent(id))}catch(_){ }
  }
  function renderList(term=''){
    const filtered=displayBrands.filter(b=>lower(b.name).includes(lower(term))).sort((a,b)=>a.name.localeCompare(b.name));
    grid.replaceChildren();
    filtered.forEach(brand=>{
      const btn=document.createElement('button');btn.className='sbr-brand-choice sbr3-choice';btn.type='button';
      btn.dataset.brand=brand.id;btn.setAttribute('aria-pressed',String(selected===brand.id));
      if(brand.logo){const img=document.createElement('img');img.src=brand.logo;img.alt='';img.loading='lazy';img.decoding='async';btn.append(img)}
      const label=document.createElement('strong');label.textContent=brand.name;
      const qty=document.createElement('small');qty.textContent=brand.items.length?brand.items.length+' products':'Enquire for range';
      btn.append(label,qty);btn.addEventListener('click',()=>selectBrand(brand.id,true));grid.append(btn);
    });
    if(!filtered.length){const p=document.createElement('p');p.className='sbr-empty';p.textContent='No brands found.';grid.append(p)}
    if(counter)counter.textContent=filtered.length+' brands';
  }

  let dragId=null;
  orbit.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'&&e.button!==0)return;
    down={id:e.pointerId,x:e.clientX,y:e.clientY};dragId=e.pointerId;dragDistance=0;
  });
  window.addEventListener('pointermove',e=>{
    if(!down||e.pointerId!==dragId)return;
    const dx=e.clientX-down.x,dy=e.clientY-down.y;
    dragDistance+=Math.abs(dx)+Math.abs(dy);
    if(dragDistance>5){dragging=true; yaw+=dx*.005; pitch=clamp(pitch-dy*.003,-.38,.38);render()}
    down.x=e.clientX;down.y=e.clientY;
  },{passive:true});
  const release=()=>{down=null;dragId=null;window.setTimeout(()=>{dragging=false;dragDistance=0},120)};
  window.addEventListener('pointerup',release);window.addEventListener('pointercancel',release);
  orbit.addEventListener('keydown',e=>{
    const steps={ArrowLeft:[0,-.22],ArrowRight:[0,.22],ArrowUp:[.12,0],ArrowDown:[-.12,0]};
    const step=steps[e.key];if(!step)return;
    e.preventDefault();pitch=clamp(pitch+step[0],-.38,.38);yaw+=step[1];render();
  });
  const left=document.getElementById('sbr-rotate-left');
  const right=document.getElementById('sbr-rotate-right');
  if(left)left.addEventListener('click',()=>{yaw-=.25;render()});
  if(right)right.addEventListener('click',()=>{yaw+=.25;render()});
  function syncPause(){
    if(!pauseButton)return;
    pauseButton.textContent=paused?'Play':'Pause';
    pauseButton.setAttribute('aria-label',paused?'Resume rotating globe':'Pause rotating globe');
  }
  if(pauseButton)pauseButton.addEventListener('click',()=>{paused=!paused;syncPause()});
  syncPause();
  document.getElementById('sbr-clear')?.addEventListener('click',()=>{
    selected=null;panel.hidden=true;
    document.querySelectorAll('[data-brand]').forEach(el=>{el.classList.remove('active');el.setAttribute('aria-pressed','false')});
    history.replaceState(null,'',location.pathname);
    document.getElementById('sbr-collection').scrollIntoView({behavior:reducedMotion?'auto':'smooth'});
  });
  search.addEventListener('input',()=>renderList(search.value));
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{active=entries.some(e=>e.isIntersecting)},{rootMargin:'150px'});io.observe(orbit);
  }
  window.addEventListener('resize',render,{passive:true});
  const intro=document.querySelector('.sbr-intro');
  if(intro)intro.innerHTML='Explore <strong>'+displayBrands.length+'</strong> selected brands from our wholesale range.<br class="sbr-desktop-break"> Drag the globe or select a name to discover the products.';
  renderList();render();window.requestAnimationFrame(animate);
  if(location.hash.startsWith('#brand-')){
    const id=decodeURIComponent(location.hash.slice(7));
    if(byId.has(id))selectBrand(id,false);
  }
})();
