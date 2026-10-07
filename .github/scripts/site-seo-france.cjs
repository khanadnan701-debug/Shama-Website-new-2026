'use strict';

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const ORIGIN = 'https://shamaonline.com';
const LASTMOD = '2026-10-07';

const pages = {
  'catalogue.html': {
    slug:'catalogue',
    title:'Catalogue grossiste alimentaire en France | Shama International',
    h1:'Catalogue grossiste alimentaire en France',
    desc:'Découvrez le catalogue Shama International pour professionnels en France : riz, épices, surgelés, thé, boissons, huiles et produits d\'épicerie.',
    intro:'Shama International accompagne les épiceries, supermarchés, grossistes et professionnels de la restauration avec un catalogue de produits alimentaires d\'Asie du Sud. Parcourez nos gammes et contactez notre équipe pour les conditionnements, disponibilités et solutions de livraison.'
  },
  'rice.html': {
    slug:'rice',
    title:'Grossiste riz basmati en France | Shama International',
    h1:'Grossiste riz basmati et riz asiatique en France',
    desc:'Riz basmati, sella, extra long, jasmin et autres références en gros pour épiceries, restaurants et revendeurs en France.',
    intro:'Découvrez notre gamme de riz pour professionnels : basmati, sella, extra long, jasmin et autres références adaptées aux épiceries, restaurants et revendeurs. Shama International fournit les professionnels en France avec plusieurs formats et un accompagnement sur les disponibilités.'
  },
  'spices.html': {
    slug:'spices',
    title:'Grossiste épices en France | Shama International',
    h1:'Grossiste épices et masalas en France',
    desc:'Épices entières, poudres, graines et masalas en gros pour professionnels en France. Découvrez la gamme Shama International.',
    intro:'Retrouvez nos épices entières, poudres, graines et mélanges masala destinés aux professionnels. Shama International accompagne les épiceries, restaurateurs et revendeurs en France avec une large sélection de références et de conditionnements.'
  },
  'frozen.html': {
    slug:'frozen',
    title:'Grossiste produits surgelés asiatiques | Shama France',
    h1:'Grossiste produits surgelés asiatiques en France',
    desc:'Samosas, rolls, parathas et spécialités surgelées en gros pour restaurants, commerces et distributeurs en France.',
    intro:'Notre gamme surgelée réunit des spécialités adaptées aux besoins des restaurants, commerces et distributeurs. Consultez les références Shama disponibles et contactez notre équipe pour les cartons, quantités minimales et possibilités de livraison en France.'
  },
  'flour-lentiles.html': {
    slug:'flour-lentiles',
    title:'Grossiste farines & lentilles en France | Shama',
    h1:'Grossiste farines, lentilles et légumes secs en France',
    desc:'Farines, lentilles, dals, pois chiches et légumes secs en gros pour professionnels en France.',
    intro:'Shama International propose une sélection de farines, lentilles, dals, pois chiches et légumes secs pour les professionnels. Nos références sont pensées pour les épiceries, restaurants, grossistes et revendeurs qui recherchent un approvisionnement fiable en France.'
  },
  'beverages.html': {
    slug:'beverages',
    title:'Grossiste boissons asiatiques en France | Shama',
    h1:'Grossiste boissons asiatiques en France',
    desc:'Boissons asiatiques et spécialités rafraîchissantes en gros pour épiceries, restaurants et revendeurs en France.',
    intro:'Découvrez les boissons et spécialités rafraîchissantes de notre catalogue professionnel. Shama International fournit les commerces et professionnels de la restauration en France avec des références adaptées à la revente et au foodservice.'
  },
  'tea.html': {
    slug:'tea',
    title:'Grossiste thé en France | Shama International',
    h1:'Grossiste thé noir, thé vert et thé rose en France',
    desc:'Thé noir, thé vert, thé rose et sachets de thé en gros pour commerces et professionnels en France.',
    intro:'Notre gamme de thés couvre plusieurs références destinées aux commerces, restaurants et revendeurs. Retrouvez notamment des thés noirs, verts et roses ainsi que différents conditionnements pour les besoins professionnels en France.'
  },
  'oils.html': {
    slug:'oils',
    title:'Grossiste huiles alimentaires en France | Shama',
    h1:'Grossiste huiles alimentaires en France',
    desc:'Huiles alimentaires en gros pour épiceries, restaurants, revendeurs et professionnels en France.',
    intro:'Shama International propose des huiles alimentaires destinées aux professionnels de l\'épicerie et de la restauration. Consultez les formats disponibles et contactez notre équipe pour les besoins de gros et la livraison en France.'
  },
  'dry-fruits.html': {
    slug:'dry-fruits',
    title:'Grossiste fruits secs en France | Shama International',
    h1:'Grossiste fruits secs et noix en France',
    desc:'Amandes, noix et fruits secs en gros pour épiceries, restaurants et revendeurs en France.',
    intro:'Découvrez notre sélection de fruits secs, noix et références associées pour la vente au détail et la restauration. Shama International accompagne les professionnels avec différents formats et un service de distribution en France.'
  },
  'sauces-pastes.html': {
    slug:'sauces-pastes',
    title:'Grossiste sauces & pâtes asiatiques | Shama France',
    h1:'Grossiste sauces, pickles et pâtes asiatiques en France',
    desc:'Sauces, pickles, chutneys et pâtes culinaires en gros pour commerces et professionnels en France.',
    intro:'Notre gamme de sauces, pickles et pâtes culinaires aide les professionnels à compléter leur offre d\'épicerie asiatique. Consultez les références disponibles pour la revente, la restauration et l\'approvisionnement professionnel en France.'
  },
  'miscellaneous.html': {
    slug:'miscellaneous',
    title:'Épicerie asiatique en gros en France | Shama International',
    h1:'Produits d\'épicerie asiatique en gros en France',
    desc:'Produits d\'épicerie, spécialités, papads, graines et références diverses en gros pour professionnels en France.',
    intro:'Cette gamme rassemble des produits d\'épicerie et spécialités complémentaires pour les commerces et professionnels. Shama International propose de nombreuses références destinées à la revente et au foodservice en France.'
  },
  'sugar.html': {
    slug:'sugar',
    title:'Grossiste sucre en France | Shama International',
    h1:'Grossiste sucre et produits sucrants en France',
    desc:'Sucre et références sucrantes en gros pour commerces, restauration et revendeurs professionnels en France.',
    intro:'Retrouvez nos références de sucre et produits sucrants pour les besoins professionnels. Nous accompagnons les épiceries, restaurants et revendeurs avec des conditionnements adaptés à la vente en gros en France.'
  },
  'dates.html': {
    slug:'dates',
    title:'Grossiste dattes en France | Shama International',
    h1:'Grossiste dattes en France',
    desc:'Dattes en gros pour épiceries, commerces alimentaires, restaurants et revendeurs professionnels en France.',
    intro:'Shama International propose des dattes pour les professionnels de l\'épicerie et de la restauration. Consultez notre sélection et contactez notre équipe pour connaître les références, formats et disponibilités en France.'
  },
  'bakery.html': {
    slug:'bakery',
    title:'Grossiste biscuits & boulangerie asiatique | Shama France',
    h1:'Grossiste biscuits et produits de boulangerie asiatique',
    desc:'Biscuits, rusks et produits de boulangerie en gros pour épiceries et professionnels en France.',
    intro:'Notre gamme boulangerie et biscuits comprend des références adaptées aux épiceries et revendeurs. Shama International accompagne les professionnels en France sur les formats, disponibilités et approvisionnements.'
  },
  'preserves.html': {
    slug:'preserves',
    title:'Grossiste conserves & pulpes en France | Shama',
    h1:'Grossiste conserves, pulpes et produits préservés en France',
    desc:'Conserves, pulpes de fruits et produits préservés en gros pour commerces et professionnels en France.',
    intro:'Découvrez nos conserves, pulpes et produits préservés destinés aux professionnels. Une sélection pensée pour les épiceries, restaurants et revendeurs recherchant des références adaptées au marché français.'
  },
  'savoury-snacks.html': {
    slug:'savoury-snacks',
    title:'Grossiste snacks salés asiatiques | Shama France',
    h1:'Grossiste snacks salés asiatiques en France',
    desc:'Snacks salés et spécialités asiatiques en gros pour épiceries, commerces et revendeurs en France.',
    intro:'Shama International propose des snacks salés et spécialités pour les commerces et revendeurs. Consultez notre sélection professionnelle et les conditionnements disponibles pour l\'approvisionnement en France.'
  },
  'sea-food.html': {
    slug:'sea-food',
    title:'Grossiste produits de la mer en France | Shama',
    h1:'Grossiste produits de la mer en France',
    desc:'Produits de la mer en gros pour restaurants, commerces alimentaires et professionnels en France.',
    intro:'Notre sélection de produits de la mer s\'adresse aux restaurants, commerces et professionnels. Contactez Shama International pour connaître les références, conditionnements et disponibilités pour la France.'
  },
  'agarbatti.html': {
    slug:'agarbatti',
    title:'Grossiste encens Agarbatti en France | Shama',
    h1:'Grossiste encens Agarbatti en France',
    desc:'Encens Agarbatti et références non alimentaires en gros pour commerces et revendeurs en France.',
    intro:'Shama International propose également une sélection d\'encens Agarbatti pour les commerces et revendeurs. Consultez les références disponibles et contactez notre équipe pour les conditions de vente en gros en France.'
  },
  'cosmetics.html': {
    slug:'cosmetics',
    title:'Grossiste cosmétiques asiatiques en France | Shama',
    h1:'Grossiste cosmétiques asiatiques en France',
    desc:'Cosmétiques et produits de soin en gros pour commerces spécialisés et revendeurs en France.',
    intro:'Découvrez notre sélection de cosmétiques et produits de soin destinée aux commerces spécialisés et revendeurs. Shama International accompagne les professionnels sur les références et conditionnements disponibles en France.'
  },
  'non-foods.html': {
    slug:'non-foods',
    title:'Grossiste produits non alimentaires asiatiques | Shama',
    h1:'Produits non alimentaires en gros en France',
    desc:'Produits non alimentaires et accessoires en gros pour commerces et revendeurs professionnels en France.',
    intro:'Notre catalogue comprend aussi une sélection de produits non alimentaires pour les commerces et professionnels. Contactez notre équipe pour les références disponibles, conditionnements et besoins de gros en France.'
  },
  'divers.html': {
    slug:'divers',
    title:'Produits alimentaires divers en gros | Shama France',
    h1:'Produits alimentaires divers en gros en France',
    desc:'Sélection de produits alimentaires et spécialités diverses en gros pour professionnels en France.',
    intro:'Cette sélection regroupe des références alimentaires complémentaires pour les épiceries, restaurants et revendeurs. Shama International vous accompagne pour les disponibilités et besoins d\'approvisionnement en France.'
  },
  'ahmed.html': {
    slug:'ahmed',
    title:'Grossiste produits Ahmed Foods en France | Shama',
    h1:'Produits Ahmed Foods en gros en France',
    desc:'Produits Ahmed Foods en gros pour épiceries, commerces et professionnels en France.',
    intro:'Retrouvez notre sélection de produits Ahmed Foods pour les commerces et professionnels. Consultez le catalogue et contactez l\'équipe Shama International pour les références et conditionnements disponibles en France.'
  },
  'pataks.html': {
    slug:'pataks',
    title:'Grossiste Patak\'s en France | Shama International',
    h1:'Produits Patak\'s en gros en France',
    desc:'Sauces, pâtes et spécialités Patak\'s en gros pour épiceries, restaurants et revendeurs en France.',
    intro:'Shama International distribue une sélection de produits Patak\'s destinée aux professionnels. Consultez les références disponibles pour les épiceries, restaurants et revendeurs en France.'
  },
  'wines.html': {
    slug:'wines',
    title:'Grossiste vins en France | Shama International',
    h1:'Sélection de vins en gros en France',
    desc:'Sélection de vins en gros pour commerces et professionnels. Contactez Shama International pour les références disponibles.',
    intro:'Consultez notre sélection de vins destinée aux professionnels et contactez notre équipe pour les références, conditionnements et disponibilités. Shama International accompagne ses clients professionnels en France.'
  },
  'about.html': {
    slug:'about',
    type:'AboutPage',
    title:'Shama International France | Importateur & grossiste alimentaire',
    h1:'Shama International, grossiste alimentaire en France',
    desc:'Découvrez Shama International, importateur et grossiste de produits alimentaires d\'Asie du Sud pour les professionnels en France.',
    intro:'Depuis 2003, Shama International développe une offre destinée aux professionnels de l\'alimentation en France. Notre objectif est de proposer des produits authentiques, un catalogue varié et un service fiable aux épiceries, restaurants, revendeurs et partenaires.'
  },
  'contact.html': {
    slug:'contact',
    type:'ContactPage',
    title:'Contact grossiste alimentaire France | Shama International',
    h1:'Contactez Shama International en France',
    desc:'Contactez Shama International pour vos demandes de gros, disponibilité produits, conditionnements et livraison en France.',
    intro:'Vous recherchez un fournisseur pour votre commerce, restaurant ou activité de distribution ? Contactez Shama International pour vos demandes de prix, quantités, formats, disponibilité et livraison en France.'
  }
};

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function json(o){return JSON.stringify(o).replace(/</g,'\\u003c');}
function removeManaged(html){
  return html
    .replace(/<!-- SHAMA FR SEO START -->[\s\S]*?<!-- SHAMA FR SEO END -->\s*/g,'')
    .replace(/<!-- SHAMA FR INTRO START -->[\s\S]*?<!-- SHAMA FR INTRO END -->\s*/g,'');
}
function stripHead(html){
  return html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>\s*/gi,'')
    .replace(/<meta\b[^>]*name=["']description["'][^>]*>\s*/gi,'')
    .replace(/<meta\b[^>]*name=["']shama-seo-managed["'][^>]*>\s*/gi,'')
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>\s*/gi,'')
    .replace(/<meta\b[^>]*property=["']og:(title|description|url|type)["'][^>]*>\s*/gi,'')
    .replace(/<meta\b[^>]*name=["']twitter:(card|title|description)["'][^>]*>\s*/gi,'');
}
function headBlock(cfg){
  const url=ORIGIN+'/'+cfg.slug;
  const schema={
    '@context':'https://schema.org',
    '@graph':[
      {'@type':cfg.type||'CollectionPage','@id':url+'#page',url,name:cfg.h1,description:cfg.desc,inLanguage:['fr','en'],isPartOf:{'@id':ORIGIN+'/#website'},about:{'@id':ORIGIN+'/#organization'}},
      {'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:[
        {'@type':'ListItem',position:1,name:'Accueil',item:ORIGIN+'/'},
        {'@type':'ListItem',position:2,name:cfg.h1,item:url}
      ]}
    ]
  };
  return `<!-- SHAMA FR SEO START -->
<meta name="shama-seo-managed" content="france-20261007">
<title>${esc(cfg.title)}</title>
<meta name="description" content="${esc(cfg.desc)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Shama International">
<meta property="og:title" content="${esc(cfg.title)}">
<meta property="og:description" content="${esc(cfg.desc)}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(cfg.title)}">
<meta name="twitter:description" content="${esc(cfg.desc)}">
<script type="application/ld+json">${json(schema)}</script>
<style id="shama-fr-seo-style">.shama-seo-intro{padding:28px 0 20px;background:#f7f9ff;border-bottom:1px solid rgba(20,35,65,.08)}.shama-seo-intro .wrap{max-width:1180px}.shama-seo-intro .seo-kicker{display:block;margin-bottom:8px;font:800 11px/1 Manrope,Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#ff4c78}.shama-seo-intro h1{margin:0 0 10px;max-width:980px;font:800 clamp(28px,3.2vw,42px)/1.08 Manrope,Arial,sans-serif;letter-spacing:-.035em;color:#17233f}.shama-seo-intro p{max-width:980px;margin:0 0 12px;font:500 15px/1.65 'DM Sans',Arial,sans-serif;color:#526079}.shama-seo-intro nav{display:flex;gap:18px;flex-wrap:wrap}.shama-seo-intro a{font-weight:800;color:#17233f;text-underline-offset:4px}@media(max-width:700px){.shama-seo-intro{padding:22px 0 16px}.shama-seo-intro h1{font-size:28px}.shama-seo-intro p{font-size:14px}}</style>
<script>window.addEventListener('DOMContentLoaded',function(){var t=${JSON.stringify(cfg.title)};document.title=t;requestAnimationFrame(function(){var h=document.querySelector('#page-content .page-hero h1');if(h){var h2=document.createElement('h2');for(var i=0;i<h.attributes.length;i++){var a=h.attributes[i];h2.setAttribute(a.name,a.value)}h2.innerHTML=h.innerHTML;h.replaceWith(h2)}})});</script>
<!-- SHAMA FR SEO END -->`;
}
function introBlock(cfg){
  return `<!-- SHAMA FR INTRO START -->
<section class="shama-seo-intro" lang="fr" aria-labelledby="shama-seo-h1-${cfg.slug}"><div class="wrap"><span class="seo-kicker">Shama International · France</span><h1 id="shama-seo-h1-${cfg.slug}">${esc(cfg.h1)}</h1><p>${esc(cfg.intro)}</p><nav aria-label="Liens utiles"><a href="/catalogue">Voir le catalogue</a><a href="/contact">Demander un devis professionnel</a><a href="/">Accueil</a></nav></div></section>
<!-- SHAMA FR INTRO END -->`;
}

function build(rootDir){
  const root=path.resolve(rootDir);
  const built=[];
  for(const [file,cfg] of Object.entries(pages)){
    const full=path.join(root,file);
    if(!fs.existsSync(full)) continue;
    let html=fs.readFileSync(full,'utf8');
    html=stripHead(removeManaged(html));
    assert(/<\/head>/i.test(html),file+' has no closing head');
    html=html.replace(/<\/head>/i,headBlock(cfg)+'\n</head>');
    const header=/<div\s+id=["']site-header["']><\/div>/i;
    assert(header.test(html),file+' has no site-header anchor');
    html=html.replace(header,m=>m+'\n'+introBlock(cfg));
    fs.writeFileSync(full,html);
    built.push('/'+cfg.slug);
  }

  const urls=['/'].concat(built);
  const sitemap=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    .concat(urls.map(u=>`  <url><loc>${ORIGIN}${u}</loc><lastmod>${LASTMOD}</lastmod></url>`))
    .concat(['</urlset>','']).join('\n');
  fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);
  fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
  return {optimizedPages:built.length,sitemapUrls:urls.length,urls};
}

async function verifyLive(){
  const checks=['/','/catalogue','/rice','/spices','/frozen','/tea','/contact'];
  for(const u of checks){
    const r=await fetch(ORIGIN+u+'?seo_verify='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(20000)});
    assert(r.ok,u+' HTTP '+r.status);
    const html=await r.text();
    if(u!=='/'){
      assert(html.includes('name="shama-seo-managed"'),u+' missing managed SEO meta');
      assert(html.includes('class="shama-seo-intro"'),u+' missing static SEO intro');
      assert(html.includes('rel="canonical" href="'+ORIGIN+u+'"'),u+' missing canonical');
    }
  }
  const sm=await fetch(ORIGIN+'/sitemap.xml?seo_verify='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(20000)});
  assert(sm.ok,'sitemap HTTP '+sm.status);
  const xml=await sm.text();
  assert(xml.includes(ORIGIN+'/rice'),'sitemap missing rice');
  assert(xml.includes(ORIGIN+'/spices'),'sitemap missing spices');
  assert(xml.includes(ORIGIN+'/contact'),'sitemap missing contact');
  console.log('SITE_SEO_VERIFIED '+JSON.stringify({checks:checks.length,sitemap:true}));
}

if(require.main===module){
  if(process.argv[2]==='--verify-live') verifyLive().catch(e=>{console.error(e.message);process.exitCode=1;});
  else console.log('SITE_SEO_BUILD '+JSON.stringify(build(process.argv[2]||'dist')));
}
module.exports={build};
