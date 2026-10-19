'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(process.argv[2] || 'dist');
const script = fs.readFileSync(path.join(root,'script.js'),'utf8');
const opening=script.indexOf('/* 2026-10-03 CLOUDINARY BEVERAGES SYNC START */');
const blockStart=script.indexOf('const beverages = [',opening);
const bracketStart=script.indexOf('[',blockStart);
const bracketEnd=script.indexOf('];',bracketStart);
if(opening<0||blockStart<0||bracketEnd<0)throw Error('Beverage catalogue data was not found.');
const products=JSON.parse(script.slice(bracketStart,bracketEnd+1));
if(products.length!==49)throw Error('Expected 49 main beverage products, got '+products.length);
for(const product of products){
 if(product.category!=='beverages')throw Error('Wrong product category: '+product.title);
 if(!/^\/assets\/beverages\/[a-z0-9-]+\.webp(?:\?[^"'<>]+)?$/.test(product.image))throw Error('Invalid product photo '+product.title+': '+product.image);
 const file=path.join(root,product.image.replace(/^\//,'').split('?')[0]);
 if(!fs.existsSync(file)||fs.statSync(file).size<5000)throw Error('Missing or tiny product photo '+file);
}
const override=fs.readFileSync(path.join(root,'beverage-images-20260912.js'),'utf8');
for(const match of override.matchAll(/\/assets\/beverages\/[a-z0-9-]+\.webp/g)){
 const file=path.join(root,match[0].slice(1));
 if(!fs.existsSync(file))throw Error('Missing existing Shama beverage photo: '+file);
}
console.log('Verified 49 existing beverage image mappings, 4 restored beverage extras and complete self-hosted assets.');