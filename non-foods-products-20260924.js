(() => {
  'use strict';
  if (typeof productData === 'undefined' || !Array.isArray(productData)) return;
  if (typeof categories === 'undefined' || !Array.isArray(categories)) return;

  const items = [
    ['Shahi Charcoal Tandoor 11C','Size 1','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261684/Shahi_Charcoal_Tandoor_11C_Size_1.png'],
    ['Shahi Plate for Tandoor','Accessory · Contact us for dimensions','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261687/Shahi_Plate_For_Tandoor.png'],
    ['Shahi Tandoor Burner','Accessory · Contact us for specification','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261687/Shahi_Tandoor_Burner.png'],
    ['Shahi Tandoor Controller','Accessory · Contact us for specification','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261687/Shahi_tandoor_controler.png'],
    ['Shahi Tandoor Fire Cement','4kg ready mix','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261688/Shahi_Tandoor_Fair_Cement.png'],
    ['Shahi Natural Gas Tandoor 111 CE','Large · Size 3','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261688/Shahi_Tandoor_Natural_Gas_Size_111_Ce_LARG_Size_3.png'],
    ['Shahi Tandoor Rods / Skewers','Accessory · Contact us for available sizes','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261690/Shahi_Tandoor_Rods_Skewers.png'],
    ['Shahi Tandoor Lava Stones','5kg','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261696/Shahi_Tandoor_Lava_Stones_5kg.png'],
    ['Shahi Tandoor Natural Gas Valve','Accessory · Contact us for specification','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261730/Shahi_Tandoor_Natural_Gas_Valve.png'],
    ['Shahi Natural Gas Tandoor 11 CE','Medium · Size 2','https://res.cloudinary.com/wy4nkkqq/image/upload/v1790261730/Shahi_Tandoor_Natural_Gas_Size_11_Ce_M_Size_2.png']
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