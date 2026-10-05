(() => {
  'use strict';
  if (document.body.dataset.category !== 'wines') return;

  const order=['Red Wines','White Wines','Rosé Wines','Meera Liqueurs','Beers & Lager'];
  const slug=v=>String(v).toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

  function groupFor(title){
    const t=String(title||'').toLowerCase();
    if (/liqueur/.test(t)) return 'Meera Liqueurs';
    if (/beer|lager/.test(t)) return 'Beers & Lager';
    if (/rosé|rose/.test(t)) return 'Rosé Wines';
    if (/white/.test(t)) return 'White Wines';
    return 'Red Wines';
  }

  function render(){
    const wrap=document.querySelector('.simple-catalogue .wrap');
    const grid=wrap?.querySelector('#simple-product-grid');
    if(!wrap||!grid||wrap.querySelector('.wine-groups')) return;

    const cards=[...grid.querySelectorAll('.simple-product-card')];
    if(!cards.length) return;
    const buckets=new Map(order.map(x=>[x,[]]));

    cards.forEach(card=>{
      const title=card.querySelector('h3')?.textContent||'';
      const group=groupFor(title);
      buckets.get(group).push(card);
      const meta=card.querySelector('.simple-product-meta');
      if(meta) meta.textContent='WINES · '+group.toUpperCase();
    });

    const nav=document.createElement('nav');
    nav.className='wine-subnav';
    nav.setAttribute('aria-label','Wine categories');
    nav.innerHTML='<span>Browse by type</span><div class="wine-chips">'+
      order.filter(g=>buckets.get(g)?.length).map((g,i)=>
        '<a href="#wine-'+slug(g)+'" class="'+(i===0?'is-active':'')+'"><b>'+g+'</b><em>'+buckets.get(g).length+'</em></a>'
      ).join('')+'</div>';

    const sections=document.createElement('div');
    sections.className='wine-groups';

    order.forEach((g,idx)=>{
      const list=buckets.get(g)||[];
      if(!list.length) return;
      const section=document.createElement('section');
      section.className='wine-group';
      section.id='wine-'+slug(g);
      section.innerHTML='<div class="wine-group-head"><div><span>'+String(idx+1).padStart(2,'0')+' · Wines</span><h2>'+g+'</h2></div><b>'+list.length+' products</b></div><div class="simple-product-grid wine-grid"></div>';
      const target=section.querySelector('.wine-grid');
      list.forEach((card,i)=>{
        const num=card.querySelector('.simple-product-index');
        if(num) num.textContent=String(i+1).padStart(2,'0');
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