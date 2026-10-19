'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(process.argv[2] || 'dist');
const manifestPath = path.join(root, 'assets/rice/rice-manifest.json');
if (!fs.existsSync(manifestPath)) throw new Error('Rice asset manifest missing.');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const images = manifest.images || {};
if (manifest.count !== 54 || Object.keys(images).length !== 54) throw new Error('Expected 54 Rice assets.');
for (const [key, location] of Object.entries(images)) {
  if (!/^[a-z0-9]+$/.test(key) || !/^assets\/rice\/[a-z0-9-]+\.webp$/.test(location)) throw new Error('Invalid manifest path: ' + key);
  if (!fs.existsSync(path.join(root, location))) throw new Error('Missing image ' + location);
}
const imageKey = value => (value.split('?')[0].split('/').pop() || '').replace(/\.(png|jpe?g|webp)$/i,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const cloudinary = /https:\/\/res\.cloudinary\.com\/wy4nkkqq\/image\/upload\/[^\s'"<>]+?\.(?:png|jpe?g|webp)/gi;
let replacements = 0;
function visit(folder) {
  for (const entry of fs.readdirSync(folder, {withFileTypes:true})) {
    if (['assets','node_modules','.github','.git','shama-github-pages-clean'].includes(entry.name)) continue;
    const full = path.join(folder, entry.name);
    if (entry.isDirectory()) visit(full);
    else if (entry.isFile() && /\.(html|js|css)$/i.test(entry.name)) {
      const original = fs.readFileSync(full,'utf8');
      const updated = original.replace(cloudinary, url => {
        const asset = images[imageKey(url)];
        if (!asset) return url;
        replacements++;
        return '/' + asset;
      });
      if (updated !== original) fs.writeFileSync(full, updated);
    }
  }
}
visit(root);
const products = fs.readFileSync(path.join(root,'rice-products-20260924.js'),'utf8');
const entries = [...products.matchAll(/\{\s*category:'rice',\s*title:'[^']+',\s*pack:'[^']+',\s*image:'([^']+)'\s*\}/g)].map(a => a[1]);
if (entries.length !== 49) throw new Error('Expected 49 Rice product records; found '+entries.length);
for (const url of entries) {
  if (!/^\/assets\/rice\/[a-z0-9-]+\.webp$/.test(url)) throw new Error('Rice photo still external or invalid: '+url);
  const relative = url.slice(1);
  if (!fs.existsSync(path.join(root,relative))) throw new Error('Product image missing: '+relative);
}
console.log('Verified 54 Rice assets and 49 Rice product images; updated '+replacements+' references.');