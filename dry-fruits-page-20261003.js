(() => {
  'use strict';
  if (document.body.dataset.category !== 'dry-fruits') return;

  const order = ['Almonds','Cashews','Pistachios','Raisins','Coconut','Peanuts & Gram','Mixes','Prunes & Others'];
  const slug = value => String(value).toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

  function groupFor(title){
    const t=String(title||'').toLowerCase();
    if (/almond|amande/.test(t)) return 'Almonds';
    if (/cashew|cajou/.test(t)) return 'Cashews';
    if (/pistach/.test(t)) return 'Pistachios';
    if (/raisin|munakka/.test(t)) return 'Raisins';
    if (/coconut|coco/.test(t)) return 'Coconut';
    if (/peanut|arachide|chana|gram|makhana/.test(t)) return 'Peanuts & Gram';
    if (/mix|mélange|melange|sport/.test(t)) return 'Mixes';
    return 'Prunes & Others';
  }

  function render(){
    const wrap=document.querySelector('.simple-catalogue .wrap');
    const grid=wrap?.querySelector('#simple-product-grid');
    if(!wrap||!grid||wrap.querySelector('.dry-fruit-groups')) return;

    const cards=[...grid.querySelectorAll('.simple-product-card')];
    if(!cards.length) return;

    const buckets=new Map(order.map(x=>[x,[]]));
    cards.forEach(card=>{
      const title=card.querySelector('h3')?.textContent||'';
      const g=groupFor(title);
      (buckets.get(g)||buckets.get('Prunes & Others')).push(card);
    });

    const nav=document.createElement('nav');
    nav.className='dry-fruit-nav';
    nav.setAttribute('aria-label','Dry fruit categories');
    nav.innerHTML='<span>Browse by type</span><div class="dry-fruit-chips">'+
      order.filter(g=>buckets.get(g)?.length).map((g,i)=>
        '<a href="#dry-'+slug(g)+'" class="'+(i===0?'is-active':'')+'"><b>'+g+'</b><em>'+buckets.get(g).length+'</em></a>'
      ).join('')+'</div>';

    const sections=document.createElement('div');
    sections.className='dry-fruit-groups';

    order.forEach((g,idx)=>{
      const list=buckets.get(g)||[];
      if(!list.length) return;
      const section=document.createElement('section');
      section.className='dry-fruit-group';
      section.id='dry-'+slug(g);
      section.innerHTML='<div class="dry-fruit-group-head"><div><span>'+String(idx+1).padStart(2,'0')+' · Dry Fruits</span><h2>'+g+'</h2></div><b>'+list.length+' products</b></div><div class="simple-product-grid dry-fruit-grid"></div>';
      const target=section.querySelector('.dry-fruit-grid');
      list.forEach(card=>target.appendChild(card));
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