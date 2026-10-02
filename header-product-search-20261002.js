(() => {
'use strict';
const ROOT_ID='shama-product-search';
const STYLE_ID='shama-product-search-style';
const DESKTOP_ID='shama-header-search-toggle';
const MOBILE_ID='shama-mobile-search-toggle';

function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]})}
function norm(v){return String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim()}
function icon(){return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="2"/><path d="M16 16l4.2 4.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'}

function injectStyles(){
 if(document.getElementById(STYLE_ID))return;
 const s=document.createElement('style');s.id=STYLE_ID;
 s.textContent=
 '.shama-search-trigger{width:42px;height:42px;min-width:42px;display:grid;place-items:center;border:1px solid rgba(44,55,105,.10);border-radius:13px;background:#f5f6fb;color:#172342;cursor:pointer;transition:.2s ease;flex:0 0 auto}'+
 '.shama-search-trigger:hover{transform:translateY(-1px);background:#fff;box-shadow:0 8px 22px rgba(28,42,88,.10)}'+
 '.shama-search-trigger svg{width:18px;height:18px;display:block}'+
 '#'+DESKTOP_ID+'{margin-left:8px}#'+MOBILE_ID+'{display:none}'+
 '#'+ROOT_ID+'{position:fixed;inset:0;z-index:2147483300;display:flex;align-items:flex-start;justify-content:center;padding:105px 18px 24px;background:rgba(8,16,35,.46);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s ease,visibility .18s ease}'+
 '#'+ROOT_ID+'.open{opacity:1;visibility:visible;pointer-events:auto}'+
 '.shama-search-dialog{width:min(760px,100%);max-height:min(720px,calc(100dvh - 130px));display:flex;flex-direction:column;overflow:hidden;border-radius:24px;background:#fff;box-shadow:0 30px 90px rgba(8,18,50,.28);border:1px solid rgba(38,50,88,.08);transform:translateY(-10px) scale(.985);transition:transform .18s ease}'+
 '#'+ROOT_ID+'.open .shama-search-dialog{transform:none}'+
 '.shama-search-head{display:flex;align-items:center;gap:12px;padding:14px 14px 14px 18px;border-bottom:1px solid #edf0f6}'+
 '.shama-search-input-wrap{flex:1;min-width:0;display:flex;align-items:center;gap:10px;min-height:52px;padding:0 14px;border:1px solid #e5e8f1;border-radius:15px;background:#f8f9fd}'+
 '.shama-search-input-wrap svg{width:18px;height:18px;color:#6b7591;flex:0 0 auto}'+
 '#shama-product-search-input{width:100%;border:0;outline:0;background:transparent;color:#14213f;font:700 15px/1.2 Manrope,"DM Sans",Arial,sans-serif}'+
 '#shama-product-search-input::placeholder{color:#9aa2b6;font-weight:600}'+
 '.shama-search-close{width:44px;height:44px;border:0;border-radius:13px;background:#f2f4f9;color:#172342;cursor:pointer;font:500 24px/1 Arial,sans-serif}'+
 '.shama-search-meta{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 18px 9px;color:#7b8498;font:700 10px/1.2 "DM Sans",Arial,sans-serif;text-transform:uppercase;letter-spacing:.08em}'+
 '.shama-search-results{overflow-y:auto;padding:8px 12px 16px;-webkit-overflow-scrolling:touch}'+
 '.shama-search-result{display:grid;grid-template-columns:60px minmax(0,1fr) 28px;align-items:center;gap:13px;min-height:76px;padding:8px;border-radius:15px;color:inherit;text-decoration:none;transition:.16s ease}'+
 '.shama-search-result:hover,.shama-search-result:focus-visible{background:#f4f6fb;outline:none}'+
 '.shama-search-thumb{width:60px;height:60px;display:grid;place-items:center;border-radius:12px;background:#f0f2f7;overflow:hidden}'+
 '.shama-search-thumb img{width:100%;height:100%;object-fit:contain;display:block;padding:3px}'+
 '.shama-search-copy{min-width:0}.shama-search-copy strong{display:block;color:#172342;font:800 14px/1.25 Manrope,"DM Sans",Arial,sans-serif;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'+
 '.shama-search-copy span{display:block;margin-top:5px;color:#7c859b;font:700 10px/1.25 "DM Sans",Arial,sans-serif;text-transform:uppercase;letter-spacing:.06em}'+
 '.shama-search-arrow{color:#6757f6;font:800 19px/1 Manrope,sans-serif;text-align:center}'+
 '.shama-search-empty{padding:38px 20px 44px;text-align:center;color:#7d879b;font:600 14px/1.6 "DM Sans",Arial,sans-serif}.shama-search-empty b{display:block;margin-bottom:6px;color:#172342;font:800 18px/1.2 Manrope,sans-serif}'+
 'body.shama-search-open{overflow:hidden!important}'+
 '@media(max-width:920px){#'+DESKTOP_ID+'{display:none!important}#'+MOBILE_ID+'{display:grid!important;width:38px;height:38px;min-width:38px;margin:0!important;border-radius:11px}.shama-mobile-actions #'+MOBILE_ID+'{order:0!important}#'+ROOT_ID+'{padding:72px 8px 8px}.shama-search-dialog{max-height:calc(100dvh - 80px);border-radius:19px}.shama-search-head{padding:10px}.shama-search-input-wrap{min-height:48px}}'+
 '@media(max-width:620px){.shama-search-result{grid-template-columns:52px minmax(0,1fr) 22px;min-height:68px;gap:10px;padding:7px}.shama-search-thumb{width:52px;height:52px}.shama-search-copy strong{font-size:13px}.shama-search-copy span{font-size:9px}}';
 document.head.appendChild(s);
}

function getIndex(){
 const rows=[];
 try{
  if(typeof categories!=='undefined'&&Array.isArray(categories)){
   categories.forEach(function(c){
    const href=(typeof fileMap!=='undefined'&&fileMap[c.slug])||'catalogue.html';
    rows.push({type:'Category',title:c.name,subtitle:c.desc||'Shama range',image:c.image||'',href:href,haystack:norm([c.name,c.desc,c.slug].join(' '))});
   });
  }
  if(typeof productData!=='undefined'&&Array.isArray(productData)){
   productData.forEach(function(p){
    let cat=null;
    if(typeof categories!=='undefined')cat=categories.find(function(x){return x.slug===p.category});
    const base=(typeof fileMap!=='undefined'&&fileMap[p.category])||'catalogue.html';
    rows.push({type:'Product',title:p.title,subtitle:[cat?cat.name:p.category,p.pack].filter(Boolean).join(' · '),image:p.image||(cat&&cat.image)||'',href:base+'?product='+encodeURIComponent(p.title||''),haystack:norm([p.title,p.pack,p.category,cat&&cat.name].filter(Boolean).join(' '))});
   });
  }
 }catch(e){}
 return rows;
}

function resultHtml(item){
 return '<a class="shama-search-result" href="'+esc(item.href)+'">'+
 '<span class="shama-search-thumb">'+(item.image?'<img src="'+esc(item.image)+'" alt="">':'')+'</span>'+
 '<span class="shama-search-copy"><strong>'+esc(item.title)+'</strong><span>'+esc(item.type)+' · '+esc(item.subtitle||'')+'</span></span>'+
 '<span class="shama-search-arrow">↗</span></a>';
}

function renderResults(){
 const input=document.getElementById('shama-product-search-input');
 const results=document.getElementById('shama-search-results');
 const count=document.getElementById('shama-search-count');
 if(!input||!results)return;
 const all=getIndex(),q=norm(input.value);
 let matches=[];
 if(!q){
  matches=all.filter(function(x){return x.type==='Category'}).slice(0,8);
  if(count)count.textContent='Popular ranges';
 }else{
  const terms=q.split(/\s+/).filter(Boolean);
  matches=all.map(function(item){
   let score=0,title=norm(item.title);
   if(title===q)score+=100;
   if(title.indexOf(q)===0)score+=55;
   if(title.indexOf(q)!==-1)score+=35;
   terms.forEach(function(t){if(title.indexOf(t)!==-1)score+=18;if(item.haystack.indexOf(t)!==-1)score+=7});
   if(item.type==='Product')score+=3;
   return {item:item,score:score};
  }).filter(function(r){return r.score>0}).sort(function(a,b){return b.score-a.score||a.item.title.localeCompare(b.item.title)}).slice(0,12).map(function(r){return r.item});
  if(count)count.textContent=matches.length?matches.length+' results':'No results';
 }
 results.innerHTML=matches.length?matches.map(resultHtml).join(''):'<div class="shama-search-empty"><b>No product found</b>Try another product name or browse the full catalogue.</div>';
}

function buildRoot(){
 let root=document.getElementById(ROOT_ID);if(root)return root;
 root=document.createElement('div');root.id=ROOT_ID;root.setAttribute('aria-hidden','true');
 root.innerHTML='<div class="shama-search-dialog" role="dialog" aria-modal="true" aria-label="Search Shama products">'+
 '<div class="shama-search-head"><label class="shama-search-input-wrap">'+icon()+'<input id="shama-product-search-input" type="search" inputmode="search" autocomplete="off" placeholder="Search rice, spices, samosa, tea..." aria-label="Search products"></label><button class="shama-search-close" type="button" aria-label="Close search">×</button></div>'+
 '<div class="shama-search-meta"><span>Search products & categories</span><span id="shama-search-count"></span></div><div class="shama-search-results" id="shama-search-results"></div></div>';
 document.body.appendChild(root);
 root.addEventListener('click',function(e){if(e.target===root)closeSearch()});
 root.querySelector('.shama-search-close').addEventListener('click',closeSearch);
 root.querySelector('#shama-product-search-input').addEventListener('input',renderResults);
 return root;
}

function openSearch(){
 injectStyles();const root=buildRoot();root.classList.add('open');root.setAttribute('aria-hidden','false');document.body.classList.add('shama-search-open');renderResults();
 requestAnimationFrame(function(){const i=root.querySelector('#shama-product-search-input');if(i){i.focus();i.select()}});
}
function closeSearch(){const root=document.getElementById(ROOT_ID);if(!root)return;root.classList.remove('open');root.setAttribute('aria-hidden','true');document.body.classList.remove('shama-search-open')}

function makeButton(id){
 const b=document.createElement('button');b.id=id;b.className='shama-search-trigger';b.type='button';b.setAttribute('aria-label','Search products');b.title='Search products';b.innerHTML=icon();b.addEventListener('click',openSearch);return b;
}

function mountButtons(){
 injectStyles();buildRoot();
 const nav=document.querySelector('#site-header .nav-shell');if(!nav)return false;
 const navlinks=nav.querySelector(':scope > .navlinks');
 if(navlinks&&!document.getElementById(DESKTOP_ID)){
  const b=makeButton(DESKTOP_ID),lang=navlinks.querySelector('#shama-language-switch');
  if(lang)navlinks.insertBefore(b,lang);else navlinks.appendChild(b);
 }
 const actions=nav.querySelector(':scope > .shama-mobile-actions');
 if(actions&&!document.getElementById(MOBILE_ID)){
  const b=makeButton(MOBILE_ID);actions.insertBefore(b,actions.firstChild);
 }
 return true;
}

document.addEventListener('keydown',function(e){if(e.key==='Escape')closeSearch();if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}});
function mount(){let tries=0;function run(){tries++;mountButtons();if(tries<80&&(!document.getElementById(DESKTOP_ID)||!document.querySelector('.shama-mobile-actions')))setTimeout(run,60)}run()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
window.addEventListener('load',mount,{once:true});
if('MutationObserver'in window){let queued=false;new MutationObserver(function(){if(queued)return;queued=true;requestAnimationFrame(function(){queued=false;mountButtons()})}).observe(document.documentElement,{childList:true,subtree:true})}
})();