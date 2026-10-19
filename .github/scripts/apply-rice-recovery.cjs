'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(process.argv[2] || 'dist');
const manifestFile = path.join(root, 'assets/rice/rice-manifest.json');

if (!fs.existsSync(manifestFile)) {
  console.log('Rice recovery archive not present; original site assets unchanged.');
  process.exit(0);
}

const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
const images = manifest.images || {};
if (manifest.count !== 54 || Object.keys(images).length !== 54) {
  throw new Error('Expected complete 54-image Rice archive.');
}
for (const [key, relativePath] of Object.entries(images)) {
  if (!/^[a-z0-9]+$/.test(key) || !/^assets\/rice\/[a-z0-9-]+\.webp$/.test(relativePath)) {
    throw new Error('Invalid Rice asset mapping: ' + key);
  }
  if (!fs.existsSync(path.join(root, relativePath))) {
    throw new Error('Missing Rice asset: ' + relativePath);
  }
}

function assetKey(url) {
  let base = url.split('?')[0].split('/').pop() || '';
  try { base = decodeURIComponent(base); } catch {}
  return base.replace(/\.(png|jpg|jpeg|webp)$/i, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}
const urlPattern = /https:\/\/res\.cloudinary\.com\/wy4nkkqq\/image\/upload\/[^\s'"<>]+?\.(?:png|jpe?g|webp)/gi;
const productsPath = path.join(root, 'rice-products-20260924.js');
if (!fs.existsSync(productsPath)) throw new Error('Rice product data missing.');

const productUrls = [...fs.readFileSync(productsPath, 'utf8').matchAll(urlPattern)].map(m => m[0]);
const unmatched = productUrls.filter(url => !images[assetKey(url)]);
if (productUrls.length !== 49 || unmatched.length) {
  throw new Error('Rice products: ' + productUrls.length + ' source images, unmatched: ' + unmatched.join(', '));
}

const matched = new Set();
let replacements = 0;
const changed = [];
function scan(folder) {
  for (const entry of fs.readdirSync(folder, {withFileTypes:true})) {
    if (['assets', 'node_modules', '.github', '.git', 'shama-github-pages-clean'].includes(entry.name)) continue;
    const full = path.join(folder, entry.name);
    if (entry.isDirectory()) {
      scan(full);
    } else if (entry.isFile() && /\.(html|js|css)$/i.test(entry.name)) {
      const original = fs.readFileSync(full, 'utf8');
      let count = 0;
      const updated = original.replace(urlPattern, url => {
        const key = assetKey(url);
        if (!images[key]) return url;
        matched.add(key);
        count++;
        return '/' + images[key];
      });
      if (count) {
        fs.writeFileSync(full, updated);
        replacements += count;
        changed.push(path.relative(root, full) + ': ' + count);
      }
    }
  }
}
scan(root);
if ([...fs.readFileSync(productsPath, 'utf8').matchAll(urlPattern)].length) {
  throw new Error('Some Rice product URLs still require Cloudinary.');
}
if (matched.size < 49) throw new Error('Restored fewer than 49 unique Rice photos.');
console.log('Restored ' + matched.size + ' Rice products using self-hosted WebP, across ' + changed.length + ' pages/scripts. Total references: ' + replacements);
console.log(changed.join('\n'));
