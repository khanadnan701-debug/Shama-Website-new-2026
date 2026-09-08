(()=>{
  const root=document.querySelector('#featured-categories.flavour-explorer');
  if(!root)return;

  const stage=root.querySelector('.flavour-image-wrap');
  const poster=stage&&stage.querySelector('#flavour-image');
  if(!stage||!poster)return;

  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='category-videos.css?v=20260908-4';
  document.head.appendChild(css);

  const scenes=[
    {name:'Rice',image:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1600',tone:'gold',label:'Basmati • Biryani • Everyday rice'},
    {name:'Spices',image:'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1600',tone:'spice',label:'Aromatic • Colourful • Authentic'},
    {name:'Sauces & Pastes',image:'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600',tone:'sauce',label:'Rich curry • Ready flavour • Kitchen ease'},
    {name:'Miscellaneous',image:'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1600',tone:'snack',label:'Snacks • Pantry • Everyday favourites'},
    {name:'Beverages',image:'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1600',tone:'drink',label:'Refreshing • Familiar • Ready to serve'},
    {name:'Flour & Lentils',image:'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600',tone:'flour',label:'Atta • Dal • Everyday staples'}
  ];

  poster.classList.add('flavour-motion-image');
  poster.removeAttribute('loading');

  const glow=document.createElement('span');
  glow.className='flavour-motion-glow';
  const grain=document.createElement('span');
  grain.className='flavour-motion-grain';
  const chip=document.createElement('span');
  chip.className='flavour-motion-chip';
  const caption=document.createElement('span');
  caption.className='flavour-motion-caption';

  stage.appendChild(glow);
  stage.appendChild(grain);
  stage.appendChild(chip);
  stage.appendChild(caption);

  const nodes=[...root.querySelectorAll('.flavour-node')];
  let activeIndex=Math.max(0,nodes.findIndex(n=>n.classList.contains('active')));

  function applyScene(index){
    const scene=scenes[index]||scenes[0];
    activeIndex=index;
    root.dataset.flavourTone=scene.tone;
    poster.classList.remove('is-entering');
    void poster.offsetWidth;
    poster.src=scene.image;
    poster.alt=scene.name;
    chip.textContent=scene.name;
    caption.textContent=scene.label;
    requestAnimationFrame(()=>poster.classList.add('is-entering'));
  }

  poster.addEventListener('error',()=>{
    const fallback=scenes[0];
    poster.src=fallback.image;
  });

  root.addEventListener('click',e=>{
    const node=e.target.closest('.flavour-node');
    if(!node)return;
    const index=nodes.indexOf(node);
    if(index<0||index===activeIndex)return;
    applyScene(index);
  });

  applyScene(activeIndex);
})();