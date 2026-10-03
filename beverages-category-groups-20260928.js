(() => {
  'use strict';
  if (document.body.dataset.category !== 'beverages') return;

  const GROUPS = [
    {key:'falooda',label:'Falooda',short:'Falooda',note:'Shama Falooda drink flavours.'},
    {key:'basil-seed',label:'Basil Seed Drinks',short:'Basil Seed',note:'Shama Basil Seed drink range.'},
    {key:'coconut-shama',label:'Coconut & Shama Drinks',short:'Coconut',note:'Shama Coconut Milk drink range.'},
    {key:'best',label:'Best Nectar',short:'Best Nectar',note:'Best Nectar cans, bottles and tetra packs.'},
    {key:'shezan',label:'Shezan Juices',short:'Shezan',note:'Shezan mango, lychee, apple and fruit punch drinks.'},
    {key:'energy',label:'Energy Drinks',short:'Energy',note:'MANA, Ginseng and Carabao energy drinks.'},
    {key:'syrups',label:'Syrups',short:'Syrups',note:'Rose syrups and traditional beverage concentrates.'},
    {key:'other',label:'Other Drinks',short:'Other',note:'Other beverage selections.'}
  ];

  function keyForTitle(title) {
    const value=String(title||'').trim();
    if (/^Shama\s+Falooda\b/i.test(value)) return 'falooda';
    if (/^Shama\s+Basil\s+Seed\s+Drink\b/i.test(value)) return 'basil-seed';
    if (/^Shama\s+Coconut\s+Milk\s+Drink\b/i.test(value)) return 'coconut-shama';
    if (/^Best\s+Nectar\b/i.test(value)) return 'best';
    if (/^Shezan\b/i.test(value)) return 'shezan';
    if (/^(MANA|Ginseng|Carabao)\b/i.test(value)) return 'energy';
    if (/Syrup/i.test(value)) return 'syrups';
    return 'other';
  }

  function brandFor(title) {
    const value=String(title||'').trim();
    if (/^Shama\b/i.test(value)) return 'Shama';
    if (/^Best\b/i.test(value)) return 'Best';
    if (/^Shezan\b/i.test(value)) return 'Shezan';
    if (/^MANA\b/i.test(value)) return 'MANA';
    if (/^Ginseng\b/i.test(value)) return 'Ginseng';
    if (/^Carabao\b/i.test(value)) return 'Carabao';
    if (/^Rooh\s+Afza\b/i.test(value)) return 'Rooh Afza';
    if (/^TG\s+Kiat\b/i.test(value)) return 'TG Kiat';
    if (/^Alokozai\b/i.test(value)) return 'Alokozai';
    return 'Beverages';
  }

  function organise() {
    const wrap=document.querySelector('.simple-catalogue .wrap');
    const grid=wrap?.querySelector('#simple-product-grid');
    if(!wrap||!grid) return false;
    if(wrap.dataset.beverageGrouped==='true') return true;
    const cards=[...grid.querySelectorAll(':scope > .simple-product-card')];
    if(!cards.length) return false;

    const grouped=Object.fromEntries(GROUPS.map(g=>[g.key,[]]));
    cards.forEach(card=>{
      const title=card.querySelector('.simple-product-content h3')?.textContent||'';
      const key=keyForTitle(title);
      card.dataset.beverageGroup=key;
      grouped[key].push(card);
      const meta=card.querySelector('.simple-product-meta');
      if(meta) meta.textContent=brandFor(title);
    });

    const controls=document.createElement('div');
    controls.className='rice-category-controls';
    controls.innerHTML=`
      <div class="rice-category-intro">
        <div><span class="rice-category-kicker">Browse by drink type</span><h2>Choose your beverage range.</h2></div>
        <p>Browse Shama drinks, nectars, juices, energy drinks and syrups by category.</p>
      </div>
      <div class="rice-category-tabs" role="tablist" aria-label="Beverage categories">
        <button class="rice-category-tab active" type="button" data-beverage-filter="all" aria-pressed="true"><span>All Products</span><b>${cards.length}</b></button>
        ${GROUPS.filter(g=>grouped[g.key].length).map(g=>`<button class="rice-category-tab" type="button" data-beverage-filter="${g.key}" aria-pressed="false"><span>${g.short}</span><b>${grouped[g.key].length}</b></button>`).join('')}
      </div>`;

    const sections=document.createElement('div');
    sections.className='rice-category-sections';

    GROUPS.forEach((group,index)=>{
      if(!grouped[group.key].length) return;
      const section=document.createElement('section');
      section.className='rice-category-section';
      section.dataset.beverageSection=group.key;
      section.innerHTML=`
        <div class="rice-category-head">
          <div><span class="rice-category-number">${String(index+1).padStart(2,'0')}</span><div><span class="rice-category-label">Beverage category</span><h2>${group.label}</h2><p>${group.note}</p></div></div>
          <span class="rice-category-count">${grouped[group.key].length} products</span>
        </div>
        <div class="simple-product-grid rice-category-grid"></div>`;
      const sectionGrid=section.querySelector('.rice-category-grid');
      grouped[group.key].forEach((card,cardIndex)=>{
        const number=card.querySelector('.simple-product-index');
        if(number) number.textContent=String(cardIndex+1).padStart(2,'0');
        sectionGrid.appendChild(card);
      });
      sections.appendChild(section);
    });

    grid.replaceWith(sections);
    wrap.prepend(controls);
    wrap.dataset.beverageGrouped='true';

    const tabs=[...controls.querySelectorAll('[data-beverage-filter]')];
    const allSections=[...sections.querySelectorAll('[data-beverage-section]')];
    tabs.forEach(tab=>tab.addEventListener('click',()=>{
      const filter=tab.dataset.beverageFilter;
      tabs.forEach(x=>{const active=x===tab;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active));});
      allSections.forEach(s=>{s.hidden=filter!=='all'&&s.dataset.beverageSection!==filter;});
      const first=allSections.find(s=>!s.hidden);
      if(first&&filter!=='all') first.scrollIntoView({behavior:'smooth',block:'start'});
    }));

    const heroCopy=document.querySelector('.page-hero p');
    if(heroCopy) heroCopy.textContent='Browse Falooda, Basil Seed, Coconut Milk, nectars, juices, energy drinks and syrups.';
    return true;
  }

  function boot(){
    if(organise()) return;
    let attempts=0;
    const timer=setInterval(()=>{attempts++;if(organise()||attempts>50)clearInterval(timer);},100);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
  document.addEventListener('shama:product-simple-rendered',boot);
})();