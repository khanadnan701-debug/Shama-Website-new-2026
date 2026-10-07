'use strict';

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const GTM_ID = 'GTM-5T87JG9';
const GA4_ID = 'G-0LHPF61EE7';
const ORIGIN = 'https://shamaonline.com';

function headBlock(){
  return \`<!-- SHAMA GOOGLE TAGS START -->
<script>
(function(){
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
  var saved = null;
  try { saved = localStorage.getItem('shama_cookie_consent'); } catch(e) {}
  var analyticsGranted = saved === 'granted';
  gtag('consent','default',{
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
})();
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=\${GA4_ID}"></script>
<script>
gtag('js', new Date());
gtag('config', '\${GA4_ID}', {send_page_view:true,allow_google_signals:false,allow_ad_personalization_signals:false});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','\${GTM_ID}');
</script>
<!-- SHAMA GOOGLE TAGS END -->\`;
}

function bodyBlock(){
  return \`<!-- SHAMA GOOGLE TAGS BODY START -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=\${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe></noscript>
<div id="shama-cookie-consent" hidden style="position:fixed;z-index:2147483000;left:16px;right:16px;bottom:16px;max-width:760px;margin:auto;background:#fff;border:1px solid rgba(20,35,65,.16);border-radius:18px;box-shadow:0 18px 60px rgba(20,35,65,.22);padding:18px 20px;font-family:Arial,sans-serif;color:#17233f">
  <div style="font-weight:800;margin-bottom:6px">Cookies & mesure d'audience</div>
  <div style="font-size:14px;line-height:1.5;color:#536079">Nous utilisons Google Analytics uniquement avec votre accord pour mesurer l'audience et améliorer le site. Vous pouvez accepter ou refuser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
    <button type="button" data-shama-consent="accept" style="border:0;border-radius:999px;padding:10px 16px;font-weight:800;background:#17233f;color:#fff;cursor:pointer">Accepter</button>
    <button type="button" data-shama-consent="reject" style="border:1px solid #17233f;border-radius:999px;padding:10px 16px;font-weight:800;background:#fff;color:#17233f;cursor:pointer">Refuser</button>
  </div>
</div>
<script>
(function(){
  var key='shama_cookie_consent';
  var banner=document.getElementById('shama-cookie-consent');
  var saved=null;
  try { saved=localStorage.getItem(key); } catch(e) {}
  if (!saved && banner) banner.hidden=false;
  function apply(value){
    var granted=value==='granted';
    if (window.gtag) {
      gtag('consent','update',{
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage:'denied',
        ad_user_data:'denied',
        ad_personalization:'denied'
      });
    }
    try { localStorage.setItem(key,value); } catch(e) {}
    if (banner) banner.hidden=true;
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:'shama_consent_update',analytics_consent:granted?'granted':'denied'});
  }
  document.addEventListener('click',function(e){
    var el=e.target.closest('[data-shama-consent]');
    if(el){
      apply(el.getAttribute('data-shama-consent')==='accept'?'granted':'denied');
      return;
    }
    var link=e.target.closest('a[href]');
    if(!link || !window.gtag) return;
    var href=link.getAttribute('href') || '';
    if(/^tel:/i.test(href)) gtag('event','phone_click',{link_url:href});
    else if(/^mailto:/i.test(href)) gtag('event','email_click',{link_url:href});
    else if(/wa\\.me|whatsapp/i.test(href)) gtag('event','whatsapp_click',{link_url:href});
    else if(/contact/i.test(href)) gtag('event','contact_click',{link_url:href});
  });
  document.addEventListener('submit',function(e){
    if(window.gtag) gtag('event','generate_lead',{form_id:e.target && e.target.id ? e.target.id : 'contact_form'});
  },true);
})();
</script>
<!-- SHAMA GOOGLE TAGS BODY END -->\`;
}

function stripManaged(html){
  return html
    .replace(/<!-- SHAMA GOOGLE TAGS START -->[\s\S]*?<!-- SHAMA GOOGLE TAGS END -->\s*/g,'')
    .replace(/<!-- SHAMA GOOGLE TAGS BODY START -->[\s\S]*?<!-- SHAMA GOOGLE TAGS BODY END -->\s*/g,'');
}

function walk(dir){
  const files=[];
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    const full=path.join(dir,entry.name);
    if(entry.isDirectory()) files.push(...walk(full));
    else if(entry.isFile() && /\.html$/i.test(entry.name)) files.push(full);
  }
  return files;
}

function build(rootDir){
  const root=path.resolve(rootDir);
  const files=walk(root);
  assert(files.length>0,'No HTML files found');
  let changed=0;
  for(const file of files){
    let html=stripManaged(fs.readFileSync(file,'utf8'));
    assert(/<head\b[^>]*>/i.test(html),'Missing <head> in '+file);
    assert(/<body\b[^>]*>/i.test(html),'Missing <body> in '+file);
    html=html.replace(/<head\b[^>]*>/i,m=>m+'\n'+headBlock());
    html=html.replace(/<body\b[^>]*>/i,m=>m+'\n'+bodyBlock());
    assert(html.includes(GTM_ID),'GTM ID missing in '+file);
    assert(html.includes(GA4_ID),'GA4 ID missing in '+file);
    assert(html.includes('shama-cookie-consent'),'Consent banner missing in '+file);
    fs.writeFileSync(file,html);
    changed++;
  }
  console.log('GOOGLE_TAGS_BUILD '+JSON.stringify({gtmId:GTM_ID,ga4Id:GA4_ID,htmlFiles:changed,consentMode:true}));
}

async function verifyLive(){
  const urls=[ORIGIN+'/',ORIGIN+'/catalogue',ORIGIN+'/spices',ORIGIN+'/contact'];
  for(const url of urls){
    const r=await fetch(url+'?gtm_verify='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(20000)});
    assert(r.ok,url+' HTTP '+r.status);
    const html=await r.text();
    assert(html.includes('googletagmanager.com/gtm.js?id='),url+' missing GTM loader');
    assert(html.includes(GTM_ID),url+' missing GTM ID');
    assert(html.includes(GA4_ID),url+' missing GA4 measurement ID');
    assert(html.includes('shama-cookie-consent'),url+' missing consent UI');
  }
  console.log('GOOGLE_TAGS_LIVE_VERIFIED '+JSON.stringify({gtmId:GTM_ID,ga4Id:GA4_ID,checked:urls.length}));
}

if(require.main===module){
  if(process.argv[2]==='--verify-live') verifyLive().catch(e=>{console.error('Tag verification failed: '+e.message);process.exitCode=1;});
  else build(process.argv[2]||'dist');
}

module.exports={build};
