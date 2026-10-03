(() => {
  'use strict';
  if (document.body.dataset.category !== 'sugar') return;

  const order = ['Shama Desi Gur','Shama Desi Shakkar','Sugar & Sugar Cubes'];
  const slug = value => String(value).toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

  function groupFor(title){
    const t=String(title||'').toLowerCase();
    if (/gur/.test(t)) return 'Shama Desi Gur';
    if (/shakkar/.test(t)) return 'Shama Desi Shakkar';
    return 'Sugar & Sugar Cubes';
  }

  function render(){
    const wrap=document.querySelector('.simple-catalogue .wrap');
    const grid=wrap?.querySelector('#simple-product-grid');
    if(!wrap||!grid||wrap.querySelector('.sugar-groups')) return;

    const cards=[...grid.querySelectorAll('.simple-product-card')];
    if(!cards.length) return;

    const buckets=new Map(order.map(x=>[x,[]]));
    cards.forEach(card=>{
      const title=card.querySelector('h3')?.textContent||'';
      const g=groupFor(title);
      buckets.get(g).push(card);
    });

    const nav=document.createElement('nav');
    nav.className='sugar-subnav';
    nav.setAttribute('aria-label','Sugar categories');
    nav.innerHTML='<span>Browse by type</span><div class="sugar-chips">'+
      order.filter(g=>buckets.get(g)?.length).map((g,i)=>
        '<a href="#sugar-'+slug(g)+'" class="'+(i===0?'is-active':'')+'"><b>'+g+'</b><em>'+buckets.get(g).length+'</em></a>'
      ).join('')+'</div>';

    const sections=document.createElement('div');
    sections.className='sugar-groups';

    order.forEach((g,idx)=>{
      const list=buckets.get(g)||[];
      if(!list.length) return;
      const section=document.createElement('section');
      section.className='sugar-group';
      section.id='sugar-'+slug(g);
      section.innerHTML='<div class="sugar-group-head"><div><span>'+String(idx+1).padStart(2,'0')+' · Sugar</span><h2>'+g+'</h2></div><b>'+list.length+' products</b></div><div class="simple-product-grid sugar-grid"></div>';
      const target=section.querySelector('.sugar-grid');
      list.forEach(card=>{
        const meta=card.querySelector('.simple-product-meta');
        if(meta) meta.textContent='SUGAR · '+g.toUpperCase();
        target.appendChild(card);
      });
      sections.appendChild(section);
    });

    grid.replaceWith(nav,sections);

    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',e=>{
      const target=document.querySelector(a.getAttribute('href'));
      if(!target) return;
      e.preventDefault();
      nav.querySelectorAll('a').forEach(x=>x.classList.toggle('is-active',x===a));
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }));
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(render,0),{once:true});
  else setTimeout(render,0);
  document.addEventListener('shama:product-simple-rendered',()=>setTimeout(render,0));
})();