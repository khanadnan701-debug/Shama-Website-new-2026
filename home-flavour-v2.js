(() => {
  if (document.body.dataset.page !== 'home') return;
  const host = document.querySelector('#featured-categories');
  if (!host) return;

  const ranges = [
    {
      slug:'rice', name:'Rice', kicker:'Basmati • Sella • Jasmine', title:'Biryani-worthy grains.',
      desc:'Long, fragrant rice made for biryani, pulao, everyday meals and professional kitchens.',
      image:'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1600&q=88',
      tag:'Biryani & basmati', href:'rice.html'
    },
    {
      slug:'spices', name:'Spices', kicker:'Aroma • Colour • Character', title:'Real spice. Real depth.',
      desc:'A vivid pantry of whole spices, powders and masalas that brings warmth and colour to every recipe.',
      image:'https://images.unsplash.com/photo-1771541897176-44a3e01dc484?auto=format&fit=crop&w=1600&q=88',
      tag:'Indian spice selection', href:'spices.html'
    },
    {
      slug:'sauces', name:'Sauces & Pastes', kicker:'Ready flavour • Big impact', title:'From the jar to the bowl.',
      desc:'Rich curry pastes, chutneys and sauces made to turn simple ingredients into deeply flavoured dishes.',
      image:'https://unsplash.com/photos/e75FKtu30fQ/download?force=true',
      tag:'Curry & cooking pastes', href:'sauces-pastes.html'
    },
    {
      slug:'misc', name:'Miscellaneous', kicker:'Pantry • Everyday • Essential', title:'The extras every kitchen needs.',
      desc:'Useful pantry favourites and speciality products that complete the Shama range for home and trade.',
      image:'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1600&q=88',
      tag:'Pantry favourites', href:'miscellaneous.html'
    },
    {
      slug:'beverages', name:'Beverages', kicker:'Cool • Creamy • Refreshing', title:'Refreshment with character.',
      desc:'Familiar South Asian-style drinks and refreshing favourites made for shops, restaurants and homes.',
      image:'https://images.unsplash.com/photo-1692620609860-be6717812f71?auto=format&fit=crop&w=1600&q=88',
      tag:'Rose lassi & drinks', href:'beverages.html'
    },
    {
      slug:'flour', name:'Flour & Lentils', kicker:'Atta • Daal • Pulses', title:'Fresh rotis start here.',
      desc:'Flours, atta, lentils and pulses selected for everyday cooking, traditional recipes and wholesale supply.',
      image:'https://unsplash.com/photos/G5w8OSzHDhI/download?force=true',
      tag:'Flour, atta & lentils', href:'flour-lentiles.html'
    },
    {
      slug:'frozen', name:'Frozen', kicker:'Paratha • Samosa • Rolls', title:'Crisp favourites, ready faster.',
      desc:'Frozen parathas, samosas, spring rolls and more—convenient to prepare without losing the comfort-food feel.',
      image:'https://unsplash.com/photos/8T9AVksyt7s/download?force=true',
      tag:'Frozen savouries', href:'frozen.html'
    },
    {
      slug:'oils', name:'Oils', kicker:'Pure • Versatile • Essential', title:'The start of great cooking.',
      desc:'Everyday cooking oils and speciality oils chosen for dependable quality across home and professional kitchens.',
      image:'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1600&q=88',
      tag:'Cooking & speciality oils', href:'oils.html'
    },
    {
      slug:'dry-fruits', name:'Dry Fruits', kicker:'Naturally rich • Premium', title:'A better kind of pantry snack.',
      desc:'Nutritious dry fruits and rich pantry favourites for snacking, gifting, cooking and retail shelves.',
      image:'https://images.unsplash.com/photo-1600189020840-e9918c25269d?auto=format&fit=crop&w=1600&q=88',
      tag:'Dry fruits & nuts', href:'dry-fruits.html'
    }
  ];

  host.className = 'flavour-explorer-v2';
  host.innerHTML = `
    <div class="flavour-v2-visual">
      <div class="flavour-v2-backdrop" id="flavour-v2-backdrop" style="background-image:url('${ranges[0].image}')"></div>
      <img class="flavour-v2-main" id="flavour-v2-image" src="${ranges[0].image}" alt="${ranges[0].name}">
      <div class="flavour-v2-shade"></div>
      <div class="flavour-v2-top"><b id="flavour-v2-number">01</b><span>Shama food range</span></div>
      <div class="flavour-v2-copy"><span id="flavour-v2-kicker">${ranges[0].kicker}</span><h3 id="flavour-v2-visual-title">${ranges[0].title}</h3><p id="flavour-v2-visual-desc">${ranges[0].desc}</p></div>
      <span class="flavour-v2-photo-tag" id="flavour-v2-tag">${ranges[0].tag}</span>
    </div>
    <aside class="flavour-v2-panel">
      <span class="eyebrow">Now exploring</span>
      <h3 id="flavour-v2-name">${ranges[0].name}</h3>
      <p id="flavour-v2-desc">${ranges[0].desc}</p>
      <a class="flavour-v2-cta" id="flavour-v2-link" href="${ranges[0].href}"><span>Explore ${ranges[0].name}</span><b>↗</b></a>
      <div class="flavour-v2-range-label">Explore all 9 ranges</div>
      <div class="flavour-v2-switcher">${ranges.map((r,i)=>`<button type="button" class="${i===0?'active':''}" data-v2-range="${i}" aria-label="Show ${r.name}"><b>${String(i+1).padStart(2,'0')}</b><span>${r.name}</span></button>`).join('')}</div>
      <div class="flavour-v2-progress">${ranges.map((_,i)=>`<i class="${i===0?'active':''}"></i>`).join('')}</div>
    </aside>`;

  const image = document.querySelector('#flavour-v2-image');
  const backdrop = document.querySelector('#flavour-v2-backdrop');
  let current = 0;

  function applyRange(i){
    if (!ranges[i] || i === current && image.dataset.ready === '1') return;
    current = i;
    const r = ranges[i];
    host.querySelectorAll('[data-v2-range]').forEach((b,j)=>b.classList.toggle('active',j===i));
    host.querySelectorAll('.flavour-v2-progress i').forEach((dot,j)=>dot.classList.toggle('active',j===i));
    document.querySelector('#flavour-v2-number').textContent = String(i+1).padStart(2,'0');
    document.querySelector('#flavour-v2-kicker').textContent = r.kicker;
    document.querySelector('#flavour-v2-visual-title').textContent = r.title;
    document.querySelector('#flavour-v2-visual-desc').textContent = r.desc;
    document.querySelector('#flavour-v2-tag').textContent = r.tag;
    document.querySelector('#flavour-v2-name').textContent = r.name;
    document.querySelector('#flavour-v2-desc').textContent = r.desc;
    const link = document.querySelector('#flavour-v2-link');
    link.href = r.href;
    link.querySelector('span').textContent = `Explore ${r.name}`;

    image.classList.add('is-changing');
    const preload = new Image();
    preload.onload = () => {
      image.src = r.image;
      image.alt = r.name;
      backdrop.style.backgroundImage = `url('${r.image}')`;
      requestAnimationFrame(()=>image.classList.remove('is-changing'));
      image.dataset.ready = '1';
    };
    preload.onerror = () => image.classList.remove('is-changing');
    preload.src = r.image;
  }

  image.dataset.ready = '1';
  host.addEventListener('click',e=>{
    const btn = e.target.closest('[data-v2-range]');
    if (!btn) return;
    applyRange(Number(btn.dataset.v2Range));
  });
})();