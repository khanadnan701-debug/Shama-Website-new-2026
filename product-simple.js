(() => {
  if (document.body.dataset.page !== 'product') return;

  const FALLBACK_IMAGE = 'assets/shama-logo.png';
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'product-simple.css?v=20260911-pack2';
  document.head.appendChild(style);

  const heroScript = document.createElement('script');
  heroScript.src = 'category-product-hero-video.js?v=20260911-hero1';
  heroScript.defer = true;
  document.head.appendChild(heroScript);

  const packStyle = document.createElement('style');
  packStyle.textContent = '.simple-product-content>p{color:#152c6b!important;font-weight:800!important}';
  document.head.appendChild(packStyle);

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
  const cleanPack = value => String(value || 'Contact us for available pack sizes').replace(/\\n/g, ' · ').replace(/\n/g, ' · ');

  let lightboxItems = [];
  let lightboxIndex = 0;
  let lightboxLastFocus = null;

  function ensureLightbox() {
    let lightbox = document.querySelector('#product-lightbox');
    if (lightbox) return lightbox;
    document.body.insertAdjacentHTML('beforeend', `<div id="product-lightbox" class="product-lightbox" aria-hidden="true"><button class="product-lightbox-backdrop" type="button" data-lightbox-close></button><div class="product-lightbox-panel"><button class="product-lightbox-close" type="button" data-lightbox-close>×</button><div class="product-lightbox-media"><img id="product-lightbox-image" src="" alt=""></div><div class="product-lightbox-copy"><span>Shama product</span><h3 id="product-lightbox-title"></h3><p id="product-lightbox-pack"></p></div></div></div>`);
    lightbox = document.querySelector('#product-lightbox');
    lightbox.querySelectorAll('[data-lightbox-close]').forEach(button => button.addEventListener('click', closeLightbox));
    return lightbox;
  }

  function updateLightbox(){const item=lightboxItems[lightboxIndex];if(!item)return;const lightbox=ensureLightbox();lightbox.querySelector('#product-lightbox-image').src=item.image||FALLBACK_IMAGE;lightbox.querySelector('#product-lightbox-title').textContent=item.title||'';lightbox.querySelector('#product-lightbox-pack').textContent=cleanPack(item.pack)}
  function openLightbox(items,index,trigger){lightboxItems=items;lightboxIndex=index||0;lightboxLastFocus=trigger;updateLightbox();const lightbox=ensureLightbox();lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}
  function closeLightbox(){const lightbox=document.querySelector('#product-lightbox');if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');if(lightboxLastFocus?.focus)lightboxLastFocus.focus()}

  function renderSimpleProducts(main){
    if(!main)return;
    const slug=document.body.dataset.category;
    const category=categories.find(item=>item.slug===slug);
    if(!category)return;
    const items=productData.filter(item=>item.category===slug);
    activeCatalog=items;
    document.title=`${category.name} | Shama International`;
    main.innerHTML=hero(`${category.name}.`,`${category.desc} — explore the complete Shama range.`,`Products / ${category.name}`)+`<section class="simple-catalogue"><div class="wrap"><div id="simple-product-grid" class="simple-product-grid"></div></div></section>`;
    const grid=main.querySelector('#simple-product-grid');
    grid.innerHTML=items.map((item,index)=>`<article class="simple-product-card"><button class="simple-product-media simple-product-zoom" type="button" data-index="${index}"><img loading="lazy" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}"></button><div class="simple-product-content"><div class="simple-product-meta">Shama ${escapeHtml(category.name)}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(cleanPack(item.pack))}</p><button class="bulk-buy simple-product-btn" type="button"><span>Add to bulk order</span><b>+</b></button></div></article>`).join('');
    grid.querySelectorAll('.simple-product-zoom').forEach(btn=>btn.addEventListener('click',()=>{const item=items[Number(btn.dataset.index)];openLightbox([{image:item.image,title:item.title,pack:item.pack}],0,btn)}));
  }

  window.shamaRerenderSimpleProducts=()=>renderSimpleProducts(document.querySelector('#page-content'));
  renderSimpleProducts(document.querySelector('#page-content'));
})();
