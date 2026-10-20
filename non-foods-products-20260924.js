(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    ['Shahi Charcoal Tandoor 11C','AR00064 - Size 1','/assets/cloudinary-shama/non-foods/shahi-charcoal-tandoor-11c-size-1-b0fd2000467a.webp'],
    ['Shahi Plate for Tandoor','AR00065 - Accessory · Contact us for dimensions','/assets/cloudinary-shama/non-foods/shahi-plate-for-tandoor-c9b6c96f99bb.webp'],
    ['Shahi Tandoor Burner','AR00067 - Accessory · Contact us for specification','/assets/cloudinary-shama/non-foods/shahi-tandoor-burner-945afdbbd335.webp'],
    ['Shahi Tandoor Controller','AR00066 - Accessory · Contact us for specification','/assets/cloudinary-shama/non-foods/shahi-tandoor-controler-f24fd7ad0d21.webp'],
    ['Shahi Tandoor Fire Cement','AR00068 - 4kg ready mix','/assets/cloudinary-shama/non-foods/shahi-tandoor-fair-cement-512b9384fca9.webp'],
    ['Shahi Natural Gas Tandoor 111 CE','AR00071 - Large · Size 3','/assets/cloudinary-shama/non-foods/shahi-tandoor-natural-gas-size-111-ce-larg-size-3-cb3fbac7d740.webp'],
    ['Shahi Tandoor Rods / Skewers','AR00073 - Accessory · Contact us for available sizes','/assets/cloudinary-shama/non-foods/shahi-tandoor-rods-skewers-4e782124224d.webp'],
    ['Shahi Tandoor Lava Stones','AR00069 - 5kg','/assets/cloudinary-shama/non-foods/shahi-tandoor-lava-stones-5kg-fb1961c3278e.webp'],
    ['Shahi Tandoor Natural Gas Valve','AR00072 - Accessory · Contact us for specification','/assets/cloudinary-shama/non-foods/shahi-tandoor-natural-gas-valve-70de27fe7a20.webp'],
    ['Shahi Natural Gas Tandoor 11 CE','AR00070 - Medium · Size 2','/assets/cloudinary-shama/non-foods/shahi-tandoor-natural-gas-size-11-ce-m-size-2-2fc3a3fefc70.webp'],
    ['Shama Plastic Containers','2268 - 650ml x 250 pcs','/assets/cloudinary-shama/non-foods/shama-plastic-containers-650ml-x-250ps-e4e10d0d363b.webp'],
    ['TCC 35 PP Sauce Cups','0109U - 50 pcs x 20','/assets/cloudinary-shama/non-foods/tcc-35-pp-sauce-cup-50p-x20-429983755cc8.webp'],
    ['Shama Plastic Containers','2251 - 500ml x 300 pcs','/assets/cloudinary-shama/non-foods/shama-plastic-container-500ml-x-300-pcs-e0246de445c9.webp'],
    ['Shama Plastic Sauce Cups','6099B - 1000 pcs','/assets/cloudinary-shama/non-foods/shama-plastic-sauce-cup-x-1000-51b7697550d1.webp']
  ].map(([title,pack,image]) => ({category:'non-foods',title,pack,image}));

  productData.push(...items);

  if (!categories.some(item => item.slug === 'non-foods')) {
    categories.push({
      slug:'non-foods',
      name:'Non Foods',
      desc:'Commercial tandoors, parts and accessories',
      image:items[0].image
    });
  }
})();