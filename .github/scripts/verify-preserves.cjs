'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(process.argv[2] || 'dist');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/preserves/image-manifest.json'), 'utf8'));
if (manifest.count !== 18 || !Array.isArray(manifest.files) || manifest.files.length !== 18) {
  throw new Error('Preserves manifest must contain exactly 18 images');
}
for (const file of manifest.files) {
  if (!/^assets\/preserves\/[a-z0-9-]+\.webp$/.test(file) || !fs.existsSync(path.join(root, file))) {
    throw new Error('Missing or invalid Preserves asset: ' + file);
  }
}
const src = fs.readFileSync(path.join(root, 'preserves-products-20260928.js'), 'utf8');
const refs = [...src.matchAll(/"image":\s*"([^"]+)"/g)].map(x => x[1]);
if (refs.length !== 18 || new Set(refs).size !== 18) {
  throw new Error('Expected 18 distinct Preserves product images, found ' + refs.length);
}
for (const ref of refs) {
  if (!ref.startsWith('/assets/preserves/') || !fs.existsSync(path.join(root, ref.slice(1)))) {
    throw new Error('Broken local Preserves product image: ' + ref);
  }
}
if (/res\.cloudinary\.com/.test(src)) throw new Error('Old Cloudinary URL found in Preserves products');
for (const name of ['"title":"Shama Sarson Ka Saag","pack":"850g"', '"title":"Prima Plum Tomatoes","pack":"6 x 2550g"', '"title":"Shama Coconut Milk","pack":"400ml"']) {
  if (!src.replace(/\s+/g, '').includes(name)) throw new Error('Missing new product variant ' + name);
}
console.log('Verified 18 locally hosted Preserves images and 18 product records.');
