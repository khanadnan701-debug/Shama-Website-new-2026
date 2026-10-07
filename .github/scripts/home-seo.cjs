'use strict';
// Homepage-only SEO foundation. Does not change category URLs, products or tracking.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const vm = require('node:vm');

const ORIGIN = 'https://shamaonline.com';
const TITLE = 'Shama International | South Asian Food Wholesaler in France';
const TITLE_FR = 'Shama International | Grossiste alimentaire asiatique en France';
const DESCRIPTION = 'France-based wholesale supplier of South Asian groceries: rice, spices, frozen food, tea and pantry essentials. Request a quote from Shama International.';
const DESCRIPTION_FR = 'Grossiste en produits alimentaires d\u2019Asie du Sud en France : riz, epices, surgeles, the et epicerie. Demandez un devis a Shama International.';
const HEADING = 'South Asian food wholesaler in France';
const COPY = 'Shama International supplies retailers and foodservice businesses in France with South Asian groceries. Explore our rice, spices, frozen food, tea and pantry ranges, then request availability, case quantities and delivery options.';
const BROWSE = 'Browse rice, spices, frozen food, tea and grocery ranges for your shop or foodservice business.';
const PAIRS = [
  [HEADING, 'Grossiste en produits alimentaires d\u2019Asie du Sud en France'],
  [COPY, 'Shama International fournit les epiceries et les professionnels de la restauration en France en produits alimentaires d\u2019Asie du Sud. Decouvrez nos gammes de riz, d\u2019epices, de produits surgeles, de thes et d\u2019epicerie, puis demandez les disponibilites, les conditionnements et les options de livraison.'],
  ['Explore the catalogue', 'Decouvrir le catalogue'],
  ['Request a wholesale quote', 'Demander un devis professionnel'],
  [BROWSE, 'Parcourez nos gammes de riz, d\u2019epices, de surgeles, de thes et d\u2019epicerie pour votre commerce ou votre restaurant.'],
  ['Browse our grocery ranges and find the right products for your customers.', 'Parcourez nos gammes alimentaires et trouvez les produits adaptes a vos clients.'],
  ['Specialist', 'Specialiste']
];
// Keep source ASCII while emitting correctly accented French copy.
const accent = s => s.replace(/\bepices\b/g, '\u00e9pices').replace(/\bepiceries\b/g, '\u00e9piceries').replace(/\bepicerie\b/g, '\u00e9picerie').replace(/\bsurgeles\b/g, 'surgel\u00e9s').replace(/\bthe\b/g, 'th\u00e9').replace(/\bthes\b/g, 'th\u00e9s').replace(/\bDecouvrez\b/g, 'D\u00e9couvrez').replace(/\bDecouvrir\b/g, 'D\u00e9couvrir').replace(/\bdisponibilites\b/g, 'disponibilit\u00e9s').replace(/\badaptes\b/g, 'adapt\u00e9s').replace(/\bSpecialiste\b/g, 'Sp\u00e9cialiste').replace(/\b a /g, ' \u00e0 ');
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const json = o => JSON.stringify(o).replace(/</g, '\\u003c');
const stripBlock = (s, name) => s.replace(new RegExp('<!-- SHAMA ' + name + ' START -->[\\s\\S]*?<!-- SHAMA ' + name + ' END -->\\s*', 'g'), '');

function build(directory) {
  const root = path.resolve(directory);
  const filename = path.join(root, 'index.html');
  let html = fs.readFileSync(filename, 'utf8');
  let translation = fs.readFileSync(path.join(root, 'translation.js'), 'utf8');
  assert(/data-page=['"]home['"]/.test(html), 'Refusing to edit a non-home page');
  assert.equal((translation.match(/const FR = \{/g) || []).length, 1, 'Translation dictionary changed; review before release');
  assert.equal((translation.match(/const base = \{/g) || []).length, 1, 'Title dictionary changed; review before release');
  html = stripBlock(stripBlock(html, 'HOME SEO'), 'HOME INTRO');
  assert.equal((html.match(/<h1\b/gi) || []).length, 0, 'Homepage now has an H1; review intro placement instead of duplicating it');
  const schema = {'@context':'https://schema.org','@graph':[
    {'@type':'Organization','@id':ORIGIN+'/#organization',name:'Shama International',legalName:'Shama International S.A.S.',url:ORIGIN+'/',logo:ORIGIN+'/assets/shama-logo.png',telephone:'+33143420579',email:'info@shamafr.com',address:{'@type':'PostalAddress',streetAddress:'3, all\u00e9e de l\u2019Esp\u00e9rance',postalCode:'93110',addressLocality:'Rosny-sous-Bois',addressCountry:'FR'},areaServed:{'@type':'Country',name:'France'}},
    {'@type':'WebSite','@id':ORIGIN+'/#website',url:ORIGIN+'/',name:'Shama International',publisher:{'@id':ORIGIN+'/#organization'},inLanguage:['en','fr']},
    {'@type':'WebPage','@id':ORIGIN+'/#webpage',url:ORIGIN+'/',name:TITLE,description:DESCRIPTION,inLanguage:'en',isPartOf:{'@id':ORIGIN+'/#website'},about:{'@id':ORIGIN+'/#organization'}}
  ]};
  const head = `<!-- SHAMA HOME SEO START -->
<title>${escape(TITLE)}</title>
<meta name="description" content="${escape(DESCRIPTION)}">
<link rel="canonical" href="${ORIGIN}/">
<link rel="preconnect" href="https://res.cloudinary.com">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Shama International">
<meta property="og:title" content="${escape(TITLE)}">
<meta property="og:description" content="${escape(DESCRIPTION)}">
<meta property="og:url" content="${ORIGIN}/">
<meta property="og:image" content="https://res.cloudinary.com/wy4nkkqq/image/upload/v1790947075/shama_home_hero_banner_1_20261002.png">
<meta property="og:image:alt" content="Shama rice range for wholesale customers in France">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escape(TITLE)}">
<meta name="twitter:description" content="${escape(DESCRIPTION)}">
<meta name="twitter:image" content="https://res.cloudinary.com/wy4nkkqq/image/upload/v1790947075/shama_home_hero_banner_1_20261002.png">
<script type="application/ld+json" id="shama-home-structured-data">${json(schema)}</script>
<style id="shama-home-seo-style">#shama-seo-intro{padding:30px 0 12px}#shama-seo-intro h1{max-width:1000px;margin:10px 0 16px;font:800 clamp(28px,3.8vw,48px)/1.14 Manrope,Arial,sans-serif;letter-spacing:-.04em;color:#17233f}#shama-seo-intro p{max-width:980px;margin:0 0 18px;font:400 17px/1.7 'DM Sans',Arial,sans-serif;color:#42516a}#shama-seo-intro .seo-links{display:flex;flex-wrap:wrap;gap:12px 24px;margin-bottom:12px}#shama-seo-intro a{font-weight:700;text-underline-offset:4px;color:#17233f}#shama-seo-intro a:focus-visible{outline:2px solid currentColor;outline-offset:5px}</style>
<noscript><style>html:not(.shama-ready) body{opacity:1!important;visibility:visible!important}</style></noscript>
<!-- SHAMA HOME SEO END -->`;
  html = html.replace(/<head\b[^>]*>([\s\S]*?)<\/head>/i, (all, inner) => {
    inner = inner.replace(/<title\b[^>]*>[\s\S]*?<\/title>\s*/gi, '')
      .replace(/<meta\b[^>]*name=['"]description['"][^>]*>\s*/gi, '')
      .replace(/<link\b[^>]*rel=['"]canonical['"][^>]*>\s*/gi, '');
    return '<head>' + inner + head + '\n</head>';
  });
  const intro = `<!-- SHAMA HOME INTRO START -->
<section id="shama-seo-intro" aria-labelledby="shama-home-h1"><div class="wrap">
<span class="eyebrow">Shama International</span><h1 id="shama-home-h1">${escape(HEADING)}</h1>
<p>${escape(COPY)}</p><nav class="seo-links" aria-label="Wholesale catalogue and enquiries"><a href="catalogue.html">Explore the catalogue</a><a href="contact.html">Request a wholesale quote</a></nav>
</div></section>
<!-- SHAMA HOME INTRO END -->\n`;
  const anchor = /<section\b[^>]*class=['"][^'"]*\bcategory-reels\b[^'"]*['"][^>]*>/i;
  assert(anchor.test(html), 'Catalogue section not found; review intro placement');
  html = html.replace(anchor, m => intro + m);
  html = html.replace('Static product images only. Click any category to open its full product collection.', BROWSE)
    .replace('Browse nine ranges and find the right products for your customers.', 'Browse our grocery ranges and find the right products for your customers.')
    .replace(/alt='Shama Rice Banner 1'/, "alt='Shama rice range for wholesale customers in France'")
    .replace(/<b>9<\/b>\s*Product ranges/, '<b>Specialist</b> Product ranges');
  const entries = PAIRS.map(([en,fr]) => '    '+JSON.stringify(en)+': '+JSON.stringify(accent(fr))+',').join('\n');
  translation = translation.replace('const FR = {', 'const FR = {\n' + entries);
  translation = translation.replace('const base = {', 'const base = {\n      '+JSON.stringify(TITLE)+': '+JSON.stringify(TITLE_FR)+',');
  const descLogic = `\n    if (document.querySelector('#shama-seo-intro')) {\n      const description = target === 'fr' ? ${JSON.stringify(accent(DESCRIPTION_FR))} : ${JSON.stringify(DESCRIPTION)};\n      for (const selector of ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]']) {\n        const meta = document.querySelector(selector); if (meta) meta.content = description;\n      }\n    }`;
  translation = translation.replace('function setTitle(target) {', 'function setTitle(target) {'+descLogic);
  new vm.Script(translation, {filename:'translation-seo-home-20261007.js'});
  const translationRef = /src=['"]translation(?:-seo-home-20261007)?\.js(?:\?[^'"]*)?['"]/;
  assert(translationRef.test(html), 'Home translation script not found');
  html = html.replace(translationRef, 'src="translation-seo-home-20261007.js?v=20261007-home-seo1"');
  assert.equal((html.match(/<title\b/gi)||[]).length,1);
  assert.equal((html.match(/<h1\b/gi)||[]).length,1);
  assert.equal((html.match(/rel=["']canonical["']/g)||[]).length,1);
  assert(html.includes("data-page='home'"));
  fs.writeFileSync(filename, html);
  fs.writeFileSync(path.join(root, 'translation-seo-home-20261007.js'), translation);
  // Preserve the earlier homepage-only sitemap scope until category indexing is approved.
  const robots = 'User-agent: *\nAllow: /\n\nSitemap: '+ORIGIN+'/sitemap.xml\n';
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>'+ORIGIN+'/</loc></url></urlset>\n';
  for (const [name, value] of [['robots.txt',robots],['sitemap.xml',sitemap]]) {
    const file=path.join(root,name);
    if (fs.existsSync(file)) assert.equal(fs.readFileSync(file,'utf8'),value,'Existing '+name+' changed; merge its policies explicitly');
    fs.writeFileSync(file,value);
  }
  return {page:'/',title:TITLE,h1:HEADING,canonical:ORIGIN+'/',structuredData:schema['@graph'].map(x=>x['@type']),sitemapUrls:1,trackingChanged:false,categoryDataChanged:false};
}

async function verifyLive() {
  let last;
  for (let attempt=0;attempt<6;attempt++) {
    try {
      const url=ORIGIN+'/?seo_check=home-seo-20261007-'+Date.now();
      const response=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'Cache-Control':'no-cache'}});
      assert(response.ok,'Homepage HTTP '+response.status);
      const text=await response.text();
      assert(text.includes('id="shama-home-structured-data"'),'Expected structured data not yet served');
      assert(text.includes('id="shama-home-h1"'),'Expected H1 not yet served');
      assert(text.includes('<title>'+TITLE+'</title>'),'Expected page title not yet served');
      assert(text.includes('rel="canonical" href="'+ORIGIN+'/"'),'Expected canonical not yet served');
      for (const name of ['robots.txt','sitemap.xml']) {
        const r=await fetch(ORIGIN+'/'+name,{signal:AbortSignal.timeout(20000),headers:{'Cache-Control':'no-cache'}});
        assert(r.ok,name+' HTTP '+r.status);
        assert((await r.text()).includes(ORIGIN+'/'),name+' has unexpected content');
      }
      console.log('LIVE_HOME_SEO_VERIFIED '+JSON.stringify({url:ORIGIN+'/',status:response.status,title:TITLE,h1:true,canonical:true,sitemap:true,robots:true}));
      return;
    } catch(error) { last=error; if(attempt<5) await new Promise(r=>setTimeout(r,5000)); }
  }
  throw last;
}
if (require.main===module) {
  if (process.argv[2]==='--verify-live') verifyLive().catch(e=>{console.error('SEO verification failed: '+e.message);process.exitCode=1;});
  else console.log('HOME_SEO_BUILD '+JSON.stringify(build(process.argv[2]||'dist')));
}
module.exports={build};
