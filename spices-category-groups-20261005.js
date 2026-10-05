(() => {
  'use strict';
  if (document.body.dataset.category !== 'spices') return;
  const ORDER=['Whole Spices & Seeds','Spice Powders','Masalas & Curry Blends'];
  const slug=s=>s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const classify=title=>{
    const t=String(title||'').toLowerCase();
    if(/garam masala|madras curry|tandoori masala|national biryani/.test(t)) return 'Masalas & Curry Blends';
    if(/powder|crushed/.test(t)) return 'Spice Powders';
    return 'Whole Spices & Seeds';
  };
  function run(){
    const wrap=document.querySelector('.simple-catalogue .wrap');
    const grid=wrap?.querySelector('#simple-product-grid');
    if(!wrap||!grid||wrap.querySelector('.spice-groups')) return;
    const cards=[...grid.querySelectorAll('.simple-product-card')];
    if(!cards.length) return;
    const buckets=new Map(ORDER.map(x=>[x,[]]));
    cards.forEach(card=>{
      const title=card.querySelector('h3')?.textContent||'';
      const g=classify(title); buckets.get(g).push(card);
      const meta=card.querySelector('.simple-product-meta');
      if(meta) meta.textContent='SPICES · '+g.toUpperCase();
    });
    const nav=document.createElement('nav');
    nav.className='spice-subnav';
    nav.innerHTML='<span>Browse by type</span><div class="spice-chips">'+ORDER.map((g,i)=>'<a href="#spice-'+slug(g)+'" class="'+(i===0?'is-active':'')+'"><b>'+g+'</b><em>'+buckets.get(g).length+'</em></a>').join('')+'</div>';
    const sections=document.createElement('div'); sections.className='spice-groups';
    ORDER.forEach((g,idx)=>{
      const list=buckets.get(g); if(!list.length) return;
      const section=document.createElement('section');
      section.className='spice-group'; section.id='spice-'+slug(g);
      section.innerHTML='<div class="spice-group-head"><div><span>'+String(idx+1).padStart(2,'0')+' · Spices</span><h2>'+g+'</h2></div><b>'+list.length+' products</b></div><div class="simple-product-grid spice-grid"></div>';
      const target=section.querySelector('.spice-grid');
      list.forEach((card,i)=>{const n=card.querySelector('.simple-product-index'); if(n)n.textContent=String(i+1).padStart(2,'0'); target.appendChild(card);});
      sections.appendChild(section);
    });
    grid.replaceWith(nav,sections);
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();nav.querySelectorAll('a').forEach(x=>x.classList.toggle('is-active',x===a));document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth',block:'start'});}));
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,0),{once:true});else setTimeout(run,0);
  document.addEventListener('shama:product-simple-rendered',()=>setTimeout(run,0));
})();