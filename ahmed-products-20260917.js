(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const GROUPS = {
    sauces: {
      label: 'Sauces',
      ids: [
        'Ahmed_soy_sauce_300ml','Ahmed_mind_sauce_300g','Ahmed_plum_sauce_300g','Ahmed_sweet_tangy_sauce_300g',
        'Green_chilli_sauce_800g','Coriandar_sauce_300g','Green_chilli_sauce_300g','Mnago_chilli_sauce_800g',
        'Mnago_chilli_sauce_300g','Ahmed_tamarind_sauce_300g'
      ]
    },
    pickles: {
      label: 'Pickles',
      ids: ['Chilli_pickle_1kg','Ahmed_mixed_pickle_1kg','Mango_pickle_400g','Mango_pickle_1kg','Chilli_pickle_400g','Garlic_pickle_1kg','Lime_pickle_1kg']
    },
    desserts: {
      label: 'Desserts & Mixes',
      ids: ['Ahmed_kheer_mix_pistachio_160g','Ahmed_pheni_150g','Banana_custard_powder_250g','Strawberry_custard_powder_250g','Vanilla_custard_powder_250g','Mango_custard_powder_250g']
    },
    jelly: {
      label: 'Jelly',
      ids: ['Ahmed_mango_jelly_80g','Ahmed_orange_jelly_80g','Ahmed_apple_jelly_80g','Ahmed_strawberry_jelly_80g','Ahmed_rasberry_jelly_80g','Ahmed_pineapple_jelly_80g','Ahmed_mixed_fruit_jelly_80g','Ahmed_lychee_jelly_80g','Ahmed_cherry_jelly_80g']
    },
    flour: {
      label: 'Flour',
      ids: ['Corn_flour_285g']
    }
  };

  const VERSION_MAP = {
    Ahmed_soy_sauce_300ml:1789651121,
    Ahmed_kheer_mix_pistachio_160g:1789651122,
    Chilli_pickle_1kg:1789651123,
    Ahmed_mind_sauce_300g:1789651141,
    Ahmed_mixed_pickle_1kg:1789651274,
    Mango_pickle_400g:1789651362,
    Corn_flour_285g:1789651363,
    Ahmed_plum_sauce_300g:1789651363,
    Mango_pickle_1kg:1789651364,
    Ahmed_sweet_tangy_sauce_300g:1789651365,
    Ahmed_pheni_150g:1789651366,
    Banana_custard_powder_250g:1789651367,
    Green_chilli_sauce_800g:1789651368,
    Coriandar_sauce_300g:1789651369,
    Chilli_pickle_400g:1789651369,
    Garlic_pickle_1kg:1789651370,
    Green_chilli_sauce_300g:1789651371,
    Lime_pickle_1kg:1789651858,
    Mnago_chilli_sauce_800g:1789651860,
    Strawberry_custard_powder_250g:1789651860,
    Vanilla_custard_powder_250g:1789651861,
    Mnago_chilli_sauce_300g:1789651862,
    Mango_custard_powder_250g:1789651866,
    Ahmed_tamarind_sauce_300g:1789652169,
    Ahmed_mango_jelly_80g:1789652190,
    Ahmed_orange_jelly_80g:1789652192,
    Ahmed_apple_jelly_80g:1789652193,
    Ahmed_strawberry_jelly_80g:1789652193,
    Ahmed_rasberry_jelly_80g:1789652195,
    Ahmed_pineapple_jelly_80g:1789652198,
    Ahmed_mixed_fruit_jelly_80g:1789652199,
    Ahmed_lychee_jelly_80g:1789652200,
    Ahmed_cherry_jelly_80g:1789652240
  };

  const corrections = {
    'mind':'Mint',
    'coriandar':'Coriander',
    'mnago':'Mango',
    'rasberry':'Raspberry'
  };

  function splitId(id){
    const clean=id.replace(/^Ahmed_/i,'');
    const match=clean.match(/_(\d+(?:\.\d+)?(?:g|kg|ml|l))$/i);
    const pack=match?match[1]:'Contact us for available pack sizes';
    const stem=match?clean.slice(0,-match[0].length):clean;
    return {stem,pack};
  }

  function titleFromId(id){
    const {stem}=splitId(id);
    let raw=stem.replace(/_/g,' ').toLowerCase();
    Object.entries(corrections).forEach(([from,to])=>{ raw=raw.replace(new RegExp(`\\b${from}\\b`,'g'),to.toLowerCase()); });
    return raw.replace(/\b\w/g,ch=>ch.toUpperCase());
  }

  function imageUrl(id){
    const version=VERSION_MAP[id];
    return `https://res.cloudinary.com/wy4nkkqq/image/upload/${version?`v${version}/`:''}${id}.png`;
  }

  const ahmedProducts=Object.entries(GROUPS).flatMap(([type,group])=>group.ids.map(id=>{
    const {pack}=splitId(id);
    return {
      category:'ahmed',
      brand:'Ahmed',
      subcategory:type,
      itemTypeLabel:group.label,
      title:`Ahmed ${titleFromId(id)}`,
      pack,
      image:imageUrl(id)
    };
  }));

  const existing=new Set(productData.map(item=>`${item.category}|${item.title}|${item.pack}`));
  ahmedProducts.forEach(item=>{
    const key=`${item.category}|${item.title}|${item.pack}`;
    if(!existing.has(key)){ productData.push(item); existing.add(key); }
  });

  if(!categories.some(item=>item.slug==='ahmed')){
    categories.push({
      slug:'ahmed',
      name:'Ahmed',
      desc:'Sauces, pickles, dessert mixes, custards, jellies and pantry favourites',
      image:imageUrl('Ahmed_tamarind_sauce_300g')
    });
  }

  window.ahmedCatalogue={
    total:ahmedProducts.length,
    groups:Object.fromEntries(Object.entries(GROUPS).map(([key,group])=>[key,{label:group.label,count:group.ids.length}])),
    titleMeta:Object.fromEntries(ahmedProducts.map(item=>[item.title,{type:item.subcategory,typeLabel:item.itemTypeLabel}]))
  };
})();
