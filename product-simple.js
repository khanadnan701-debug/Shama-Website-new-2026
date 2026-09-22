(() => {
  'use strict';
  if (document.body.dataset.page !== 'product') return;

  const FALLBACK_IMAGE = 'assets/shama-logo.png';

  let style = document.querySelector('#product-simple-style');
  if (!style) {
    style = document.createElement('link');
    style.id = 'product-simple-style';
    style.rel = 'stylesheet';
    style.href = 'product-simple.css?v=20260922-details2';
    document.head.appendChild(style);
  }

  if (!document.querySelector('#product-zoom-force-style')) {
    const forceStyle = document.createElement('style');
    forceStyle.id = 'product-zoom-force-style';
    forceStyle.textContent = `
      body.product-lightbox-open{overflow:hidden!important}
      #product-lightbox.product-lightbox{position:fixed!important;z-index:2147483000!important;inset:0!important;display:grid!important;place-items:center!important;padding:24px!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;transition:opacity .2s ease,visibility .2s ease!important}
      #product-lightbox.product-lightbox.open{visibility:visible!important;opacity:1!important;pointer-events:auto!important}
      #product-lightbox .product-lightbox-backdrop{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;border:0!important;background:rgba(5,12,28,.88)!important;backdrop-filter:blur(9px)!important;cursor:zoom-out!important}
      #product-lightbox .product-lightbox-panel{position:relative!important;z-index:2!important;width:min(1120px,94vw)!important;max-height:92vh!important;display:grid!important;grid-template-columns:minmax(0,1.15fr) minmax(360px,.85fr)!important;overflow:hidden!important;border-radius:26px!important;background:#fff!important;box-shadow:0 38px 120px rgba(0,0,0,.45)!important}
      #product-lightbox .product-lightbox-media{position:relative!important;min-height:0!important;display:grid!important;place-items:center!important;padding:28px 76px!important;background:#f4f6fb!important;overflow:hidden!important}
      #product-lightbox .product-lightbox-media img{display:block!important;max-width:100%!important;max-height:72vh!important;width:auto!important;height:auto!important;object-fit:contain!important}
      #product-lightbox .product-lightbox-close{position:absolute!important;z-index:5!important;top:16px!important;right:16px!important;width:44px!important;height:44px!important;border:0!important;border-radius:50%!important;background:#17233d!important;color:#fff!important;cursor:pointer!important;font:400 30px/1 Arial,sans-serif!important}
      #product-lightbox .product-lightbox-nav{position:absolute!important;z-index:4!important;top:50%!important;transform:translateY(-50%)!important;width:48px!important;height:58px!important;border:0!important;border-radius:16px!important;background:rgba(23,35,61,.92)!important;color:#fff!important;cursor:pointer!important;font:400 34px/1 Arial,sans-serif!important}
      #product-lightbox .product-lightbox-nav.prev{left:14px!important}
      #product-lightbox .product-lightbox-nav.next{right:14px!important}
      #product-lightbox .product-lightbox-copy{min-width:0!important;padding:34px 30px 28px!important;border-left:1px solid rgba(31,44,75,.08)!important;background:#fff!important;overflow:auto!important}
      #product-lightbox .product-lightbox-copy span{display:block!important;margin-bottom:4px!important;color:#ff5b88!important;font-weight:800!important;font-size:9px!important;text-transform:uppercase!important;letter-spacing:.12em!important}
      #product-lightbox .product-lightbox-copy h3{margin:0!important;color:#152039!important;font:800 clamp(21px,3vw,31px)/1.15 Manrope,Arial,sans-serif!important}
      #product-lightbox .product-lightbox-pack{margin:8px 0 18px!important;color:#5e6880!important;font-weight:800!important;font-size:12px!important}
      #product-lightbox .product-lightbox-summary{margin:0!important;color:#66728a!important;font-weight:500!important;font-size:14px!important;line-height:1.72!important}
      #product-lightbox .product-lightbox-benefits-title{display:block!important;margin:22px 0 10px!important;color:#152039!important;font:900 10px/1 Manrope,Arial,sans-serif!important;letter-spacing:.11em!important;text-transform:uppercase!important}
      #product-lightbox .product-lightbox-benefits{display:grid!important;grid-template-columns:1fr!important;gap:8px!important;margin:0 0 20px!important;padding:0!important;list-style:none!important}
      #product-lightbox .product-lightbox-benefits li{position:relative!important;padding:11px 12px 11px 38px!important;border-radius:12px!important;background:#f4f6fb!important;color:#526079!important;font:800 11px/1.35 Manrope,Arial,sans-serif!important}
      #product-lightbox .product-lightbox-benefits li:before{content:"✓"!important;position:absolute!important;left:11px!important;top:50%!important;transform:translateY(-50%)!important;display:grid!important;place-items:center!important;width:18px!important;height:18px!important;border-radius:50%!important;background:#e7e4ff!important;color:#5f49d8!important;font-size:10px!important}
      #product-lightbox .product-lightbox-add{width:100%!important;min-height:46px!important;border:0!important;border-radius:13px!important;background:#17233d!important;color:#fff!important;cursor:pointer!important;font:800 12px/1 Manrope,Arial,sans-serif!important}
      .simple-product-card{cursor:pointer!important}
      .simple-product-media,.simple-product-media *{cursor:zoom-in!important}
      @media(max-width:760px){#product-lightbox.product-lightbox{padding:10px!important}#product-lightbox .product-lightbox-panel{width:100%!important;max-height:96vh!important;grid-template-columns:1fr!important;grid-template-rows:300px minmax(0,1fr)!important;border-radius:18px!important}#product-lightbox .product-lightbox-media{padding:48px 16px 56px!important}#product-lightbox .product-lightbox-media img{max-height:250px!important}#product-lightbox .product-lightbox-copy{padding:22px 18px 20px!important;border-left:0!important;border-top:1px solid rgba(31,44,75,.08)!important}#product-lightbox .product-lightbox-nav{top:auto!important;bottom:10px!important;transform:none!important;width:42px!important;height:42px!important;border-radius:50%!important}}
    `;
    document.head.appendChild(forceStyle);
  }

  if (!document.querySelector('#product-pack-style')) {
    const packStyle = document.createElement('style');
    packStyle.id = 'product-pack-style';
    packStyle.textContent = '.simple-product-content>p{color:#152c6b!important;font-weight:800!important}';
    document.head.appendChild(packStyle);
  }

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
  const cleanPack = value => String(value || 'Contact us for available pack sizes').replace(/\\n/g, ' · ').replace(/\n/g, ' · ');

  function productInfo(item) {
    const title = String(item?.title || 'Shama product').trim();
    const slug = document.body.dataset.category || 'misc';
    const lower = title.toLowerCase();

    if (slug === 'cosmetics') {
      if (/rose water/.test(lower)) return {
        label:'Shama product',
        summary:`${title} is a classic everyday care essential presented in a convenient format for simple personal-care routines. It is easy to keep at home, simple to display in retail and practical for customers who prefer familiar, straightforward products. The clearly marked pack size makes comparison and stock planning easy, while the product fits naturally alongside soaps, lotions, oils and other beauty-care items. For wholesale buyers, it is a useful addition to a complete personal-care assortment and can support regular repeat purchases. Always follow the directions and storage guidance printed on the individual pack.`,
        benefits:['Everyday care essential','Easy retail display','Clear pack sizing']
      };
      if (/dettol|lifebuoy/.test(lower)) return {
        label:'Hygiene & care',
        summary:`${title} is suited to everyday cleansing and hygiene routines in a familiar, easy-to-understand format. It fits naturally into household, pharmacy-style and general retail personal-care sections and is simple for customers to identify. The pack format makes shelf placement, storage and replenishment straightforward, while the product can be combined with soaps, lotions and other hygiene essentials to create a more complete assortment. For wholesale buyers, it offers an easy way to strengthen a practical personal-care category with products customers recognise for regular use. Follow the usage instructions and warnings printed on the pack.`,
        benefits:['Everyday hygiene use','Familiar product format','Wholesale-friendly range']
      };
      if (/johnson/.test(lower)) return {
        label:'Baby care',
        summary:`${title} is designed for everyday baby-care routines and comes in a familiar, convenient format. It fits naturally alongside baby oils, lotions, powders and other daily essentials, making it easy for retailers to build a complete baby-care section. The pack is straightforward to identify, store and merchandise, while different sizes across the range can help customers choose what suits their routine. For wholesale buyers, this product is a practical addition to a broader family-care assortment and works well in supermarkets, cash-and-carry and general retail. Use only as directed on the pack and follow all label guidance.`,
        benefits:['Baby-care essential','Easy to merchandise','Multiple size options']
      };
      if (/vaseline/.test(lower)) return {
        label:'Skin care',
        summary:`${title} is a straightforward skin-care essential designed for simple everyday moisture-care routines. The compact jar format is easy to store, carry and display, making it a practical addition to personal-care shelves. It can be used as part of a regular routine for areas that feel dry, following the directions on the label. Different pack sizes make the range useful for both household and retail choice. For wholesale buyers, it pairs naturally with soaps, lotions and other care products to create a balanced skin-care assortment. Always use according to the instructions shown on the pack.`,
        benefits:['Simple moisture care','Compact jar format','Easy range building']
      };
      if (/henna/.test(lower)) return {
        label:'Henna & hair colour',
        summary:`${title} is part of a traditional henna and hair-colour range, supplied in a clearly labelled pack for easy identification. It is suitable for customers specifically looking for henna-based colour products and can be merchandised by shade or type for a clean, easy-to-shop display. The compact format is simple to store and replenish, while multiple variants help retailers build a more complete hair-care section. For best results and safe use, customers should follow the directions, warnings and patch-test guidance printed on the pack. A practical wholesale option for beauty and personal-care retailers.`,
        benefits:['Traditional henna range','Easy shade merchandising','Compact retail pack']
      };
      if (/oil|amla|coconut|castor|mustard|sesame|black seed/.test(lower)) return {
        label:'Hair & body care',
        summary:`${title} is presented in a practical bottle format that fits easily into everyday hair-care, body-care or personal-care routines depending on the product. The clearly marked pack size makes it simple for customers to compare options and for retailers to organise shelves by brand and volume. It works well as part of a wider oils and beauty-care assortment, giving wholesale buyers an easy way to expand choice without complicating the category. Store the bottle as directed and always follow the specific usage instructions printed on the label for that individual oil.`,
        benefits:['Versatile care format','Easy size comparison','Strong range complement']
      };
      return {
        label:'Personal care',
        summary:`${title} is a practical personal-care product selected for everyday household and retail needs. Its familiar format is easy to understand, simple to store and suitable for building a clear beauty, bathing or care assortment. The defined pack size helps customers compare options while making shelf planning easier for retailers and wholesalers. It can be combined with complementary care lines to create a more complete category and support regular repeat-purchase occasions. For best results, customers should follow the directions, storage advice and any warnings printed on the individual pack. A straightforward addition to a well-rounded personal-care range.`,
        benefits:['Everyday personal care','Retail-ready format','Easy assortment building']
      };
    }

    const data = {
      rice:['Rice', `${title} is selected for dependable everyday cooking and the grain quality customers expect from a specialist rice range. It is well suited to dishes such as biryani, pulao, curries, rice bowls and side portions, depending on the variety. The pack format makes it practical for homes, restaurants, caterers and retail shelves. For trade customers, it offers an easy way to build a complete rice selection across different grain styles and pack sizes. Store in a cool, dry place and follow the cooking guidance on the pack for the best texture and serving result.`, ['Versatile cooking use','Retail & foodservice ready','Multiple pack options']],
      spices:['Spices', `${title} brings focused spice flavour to everyday cooking and helps customers build authentic South Asian dishes with better control over seasoning. It can be used in marinades, curries, rice dishes, vegetables, snacks and other recipes depending on the spice. The clearly defined pack makes it easy to store, merchandise and measure during preparation. For retailers and foodservice buyers, it fits naturally into a broader spice assortment and gives customers more choice across whole spices, powders and everyday seasonings. Use according to taste and the recipe being prepared, and store as directed on the pack.`, ['Focused authentic flavour','Flexible recipe use','Easy pantry storage']],
      frozen:['Frozen', `${title} is a convenient frozen option created for quick preparation and dependable portion control. It is well suited to busy households, restaurants, cafés and foodservice operations that want to reduce preparation time while keeping popular South Asian-style favourites available. Frozen storage makes it easy to hold stock until needed and prepare only the required quantity. For retailers, the product adds variety to the freezer section and can be grouped with breads, snacks, appetisers and ready-to-cook items. Keep frozen as directed and cook or reheat fully according to the preparation instructions printed on the pack.`, ['Quick preparation','Convenient frozen storage','Useful portion control']],
      beverages:['Beverages', `${title} is a convenient beverage option for customers looking for familiar flavours in an easy-to-serve format. It fits well in retail chillers, grocery shelves, restaurants and takeaway menus depending on the product. The defined pack size makes stock planning and display straightforward, while the ready-to-serve nature supports quick service with minimal preparation. For wholesale buyers, beverages are a useful category for building impulse, meal-pairing and family-use ranges alongside snacks and pantry products. Serve and store according to the instructions on the pack, and chill before serving where appropriate for the specific product.`, ['Easy to serve','Retail & foodservice friendly','Simple stock planning']],
      oils:['Oils', `${title} is supplied in a practical bottle format that makes storage, pouring and stock control straightforward. Depending on the specific oil and the directions on the label, it can support a range of kitchen or household uses. Different oil types give customers more choice within a focused category, while clearly marked pack sizes make comparison easy. For retailers and wholesalers, the range is simple to merchandise alongside pantry staples or relevant personal-care lines. Keep the bottle sealed when not in use, store it as directed on the pack and always follow the specific usage guidance for that individual oil.`, ['Practical bottle format','Easy range comparison','Wholesale-ready sizing']],
      'dry-fruits':['Dry Fruits', `${title} is a versatile dry-fruit or nut product that works well for snacking, cooking, desserts, breakfast toppings and gifting depending on the variety. Its pantry-friendly format makes it easy to store and serve, while the product can be used in both everyday recipes and more premium occasions. For retailers, dry fruits add choice to snack, baking and speciality-food sections and can be merchandised alongside dates, spices and festive products. For wholesale customers, the clear pack format supports straightforward stock planning. Store in a cool, dry place and keep sealed after opening to maintain quality.`, ['Snack & recipe versatility','Pantry-friendly storage','Strong retail category fit']],
      agarbatti:['Agarbatti', `${title} is an incense product designed to bring a familiar fragrance experience to homes, prayer spaces and everyday ambience. The compact pack is easy to store, display and offer as part of a wider fragrance or cultural-products range. Different fragrance options make it simple for customers to choose according to personal preference, while retailers can merchandise multiple variants together in a clear, compact section. Use only in a suitable holder, keep away from flammable materials and never leave burning incense unattended. For wholesale buyers, the small pack format is convenient for shelf display, storage and repeat ordering.`, ['Home fragrance use','Compact shelf footprint','Easy variant merchandising']],
      dates:['Dates', `${title} offers a naturally sweet date option that is easy to serve for everyday snacking, sharing, gifting and dessert use. Dates fit naturally into household pantry ranges, festive displays and speciality-food sections, and they pair well with nuts, drinks and other traditional products. The pack format makes portioning, storage and retail presentation straightforward, while wholesale customers can use the range to build seasonal and year-round date selections. Serve as desired and store according to the instructions on the pack. A simple, versatile product for customers looking for a familiar fruit-based snack or ingredient.`, ['Naturally sweet taste','Snack & gifting versatility','Easy seasonal merchandising']]
    };

    if (slug === 'laziza') {
      const dessert = /custard|jelly|falooda|kheer|firni|kulfi|halwa|dessert/i.test(lower);
      return dessert ? {
        label:'Laziza · Desserts',
        summary:`${title} is a convenient dessert mix designed to make familiar South Asian-style sweets easier to prepare at home or in foodservice. The ready-measured format helps reduce preparation time while keeping the recipe process simple and consistent. It works well for family occasions, festive menus, retail shelves and restaurant dessert offerings, depending on the product. The compact pack is easy to store and merchandise alongside other dessert mixes, drinks and pantry essentials. Follow the preparation quantities, cooking steps and storage guidance printed on the pack for the best result and serving consistency.`,
        benefits:['Easy dessert preparation','Consistent recipe results','Festive & retail friendly']
      } : {
        label:'Laziza · Recipe Mix',
        summary:`${title} is a convenient recipe and seasoning mix created to make traditional South Asian dishes easier to prepare with consistent flavour. It combines a practical ready-mixed format with straightforward cooking guidance, helping home cooks and professional kitchens reduce measuring and preparation time. Depending on the variety, it can support biryani, pulao, kebab, curry, meat or traditional speciality dishes. For retailers, the compact pack is easy to display by recipe type and encourages customers to explore multiple meal solutions. Follow the preparation instructions on the pack and adjust additional ingredients to the recipe being prepared.`,
        benefits:['Ready-mixed seasoning','Faster recipe preparation','Easy recipe selection']
      };
    }

    if (slug === 'ahmed') {
      if (/pickle|achar/i.test(lower)) return {
        label:'Ahmed · Pickles',
        summary:`${title} is a ready-to-serve pickle option that brings bold, tangy flavour to everyday meals with minimal preparation. It pairs naturally with rice dishes, curries, breads, snacks and traditional meal combinations, making it useful for both household and foodservice use. The jar or pack format is simple to store, merchandise and serve, while different varieties help retailers create a broader condiment selection. For wholesale customers, it is an easy companion product to rice, sauces and meal mixes. Follow the storage guidance on the label, especially after opening, and serve in portions according to taste.`,
        benefits:['Bold meal accompaniment','Ready to serve','Easy condiment merchandising']
      };
      if (/jelly|custard|dessert|falooda|kheer|pudding|mix/i.test(lower)) return {
        label:'Ahmed · Desserts & Mixes',
        summary:`${title} is a convenient dessert or preparation mix made for customers who want familiar results with less measuring and preparation. The ready-mixed format supports quick household use, festive occasions and foodservice menus while keeping the process straightforward. It is easy to store, simple to merchandise and can be grouped with other dessert mixes, beverages and pantry products for a complete category. For wholesale buyers, the compact pack format supports efficient shelf use and repeat ordering. Prepare according to the quantities, cooking method and storage instructions printed on the individual pack for the best result.`,
        benefits:['Convenient preparation','Simple shelf storage','Family & foodservice use']
      };
      if (/flour|atta|besan|maida/i.test(lower)) return {
        label:'Ahmed · Flour',
        summary:`${title} is a practical flour product for everyday cooking and traditional recipe preparation. Depending on the variety, it can be used for breads, doughs, batters, snacks and other pantry recipes, making it useful in both household kitchens and foodservice. The clear pack size supports easy storage, portioning and stock planning, while retailers can merchandise it alongside rice, lentils, spices and other staple foods. For wholesale customers, the straightforward format makes repeat ordering and category planning simple. Store in a cool, dry place and follow the recipe or preparation guidance appropriate to the specific flour.`,
        benefits:['Everyday pantry staple','Flexible cooking use','Easy stock planning']
      };
      return {
        label:'Ahmed · Sauces',
        summary:`${title} is a convenient sauce or cooking accompaniment designed to add familiar flavour with minimal preparation. It can be used as a serving sauce, cooking ingredient or meal companion depending on the variety, making it useful for households, restaurants and takeaway service. The ready-to-use format supports quick portioning and consistent results, while the pack is easy to store and merchandise alongside pickles, pastes and meal solutions. For retailers and wholesalers, it adds variety to a practical condiment range. Follow the serving and storage instructions printed on the pack, particularly after opening.`,
        benefits:['Ready-to-use convenience','Consistent serving flavour','Retail & foodservice friendly']
      };
    }

    if (slug === 'pataks' || slug === 'sauces' || slug === 'sauces-pastes') return {
      label: slug === 'pataks' ? "Patak's" : 'Sauces, Pickle & Pastes',
      summary:`${title} is designed to make flavourful cooking faster and more consistent. It works as a convenient base, accompaniment or recipe shortcut depending on the product, helping home cooks and professional kitchens reduce preparation time while keeping a familiar South Asian taste profile. The ready-to-use format is easy to portion and simple to keep on hand for busy service. For retailers, it adds variety to the cooking-sauce, paste, pickle or meal-solution section and pairs naturally with rice, breads, meats and vegetables. Follow the serving and storage directions printed on the pack after opening.`,
      benefits:['Faster meal preparation','Consistent flavour base','Easy portioning']
    };

    if (slug === 'misc') return {
      label:'Miscellaneous',
      summary:`${title} is part of Shama International's wider pantry and speciality range, selected to complement everyday South Asian cooking and retail needs. Depending on the product, it can support meal preparation, serving, snacking or traditional household use. The pack format is designed for straightforward storage and shelf presentation, helping customers find useful essentials alongside rice, spices, flour, sauces and other core categories. For retailers and wholesalers, miscellaneous products help complete the assortment and provide extra choice beyond the main ranges. Store, prepare and use the product according to the specific directions and guidance printed on its pack.`,
      benefits:['Useful pantry essential','Complements core ranges','Easy retail stocking']
    };

    if (slug === 'flour' || slug === 'flour-lentiles') return {
      label:'Flour & Lentiles',
      summary:`${title} is an everyday pantry staple suited to traditional and modern cooking. Depending on the product, it can be used for rotis, doughs, batters, dals, curries, soups, side dishes and batch preparation. The pack is practical for household kitchens, restaurants and wholesale customers who need reliable ingredients in clear sizes. It also pairs naturally with rice, spices and other core pantry products to build complete meal solutions. Store in a cool, dry place and prepare according to the recipe and the specific instructions shown on the pack before serving.`,
      benefits:['Everyday pantry staple','Flexible meal use','Easy bulk stocking']
    };

    const chosen = data[slug];
    if (chosen) return {label:chosen[0],summary:chosen[1],benefits:chosen[2]};
    return {
      label:'Shama product',
      summary:`${title} is selected as part of the Shama International range for customers looking for dependable everyday products with clear pack sizing and easy availability. The format is simple to store, display and use, making it suitable for households, retailers, restaurants or foodservice depending on the item. It can be combined with complementary Shama products to create a more complete shopping or menu solution. For wholesale buyers, the straightforward pack information supports easier stock planning and repeat ordering. Always follow the preparation, storage and usage directions printed on the individual product pack for the best experience.`,
      benefits:['Easy everyday use','Clear pack information','Suitable for wholesale']
    };
  }

  let lightboxItems = [];
  let lightboxIndex = 0;
  let lightboxLastFocus = null;

  function ensureLightbox() {
    let lightbox = document.querySelector('#product-lightbox');
    if (lightbox) return lightbox;

    document.body.insertAdjacentHTML('beforeend', `
      <div id="product-lightbox" class="product-lightbox" aria-hidden="true">
        <button class="product-lightbox-backdrop" type="button" aria-label="Close image viewer" data-lightbox-close></button>
        <div class="product-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="product-lightbox-title">
          <button class="product-lightbox-close" type="button" aria-label="Close image viewer" data-lightbox-close>×</button>
          <div class="product-lightbox-media">
            <button class="product-lightbox-nav prev" type="button" aria-label="Previous product">‹</button>
            <img id="product-lightbox-image" src="" alt="">
            <button class="product-lightbox-nav next" type="button" aria-label="Next product">›</button>
          </div>
          <div class="product-lightbox-copy">
            <span id="product-lightbox-label">Shama product</span>
            <h3 id="product-lightbox-title"></h3>
            <p class="product-lightbox-pack" id="product-lightbox-pack"></p>
            <p class="product-lightbox-summary" id="product-lightbox-summary"></p>
            <b class="product-lightbox-benefits-title">Key benefits</b>
            <ul class="product-lightbox-benefits" id="product-lightbox-benefits"></ul>
            <button class="bulk-buy product-lightbox-add" type="button">Add to bulk order</button>
          </div>
        </div>
      </div>`);

    lightbox = document.querySelector('#product-lightbox');
    lightbox.querySelectorAll('[data-lightbox-close]').forEach(button => button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      closeLightbox();
    }));
    lightbox.querySelector('.product-lightbox-nav.prev').addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      stepLightbox(-1);
    });
    lightbox.querySelector('.product-lightbox-nav.next').addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      stepLightbox(1);
    });
    return lightbox;
  }

  function updateLightbox() {
    const item = lightboxItems[lightboxIndex];
    if (!item) return;
    const lightbox = ensureLightbox();
    const image = lightbox.querySelector('#product-lightbox-image');
    image.onerror = () => {
      image.onerror = null;
      image.src = FALLBACK_IMAGE;
    };
    image.src = item.image || FALLBACK_IMAGE;
    image.alt = item.title || 'Shama product';
    const info = productInfo(item);
    lightbox.querySelector('#product-lightbox-label').textContent = info.label;
    lightbox.querySelector('#product-lightbox-title').textContent = item.title || 'Shama product';
    lightbox.querySelector('#product-lightbox-pack').textContent = cleanPack(item.pack);
    lightbox.querySelector('#product-lightbox-summary').textContent = info.summary;
    lightbox.querySelector('#product-lightbox-benefits').innerHTML = info.benefits.map(x => '<li>' + escapeHtml(x) + '</li>').join('');
    const addButton = lightbox.querySelector('.product-lightbox-add');
    addButton.dataset.product = item.title || 'Shama product';
    addButton.dataset.pack = item.pack || '';
    lightbox.querySelectorAll('.product-lightbox-nav').forEach(button => {
      button.hidden = lightboxItems.length < 2;
    });
  }

  function openLightbox(items, index, trigger) {
    if (!Array.isArray(items) || !items.length) return;
    lightboxItems = items;
    lightboxIndex = Math.max(0, Math.min(Number(index) || 0, items.length - 1));
    lightboxLastFocus = trigger || document.activeElement;
    const lightbox = ensureLightbox();
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('product-lightbox-open');
  }

  function closeLightbox() {
    const lightbox = document.querySelector('#product-lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('product-lightbox-open');
    if (lightboxLastFocus && typeof lightboxLastFocus.focus === 'function') {
      try { lightboxLastFocus.focus({ preventScroll: true }); } catch (_) { lightboxLastFocus.focus(); }
    }
  }

  function stepLightbox(direction) {
    if (lightboxItems.length < 2) return;
    lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
    updateLightbox();
  }

  function visibleProductButtons() {
    return Array.from(document.querySelectorAll('.simple-product-zoom')).filter(button => {
      const card = button.closest('.simple-product-card');
      return !card || (!card.hidden && getComputedStyle(card).display !== 'none');
    });
  }

  function itemsFromVisibleCards() {
    return visibleProductButtons().map(button => ({
      image: button.dataset.zoomImage || button.querySelector('img')?.src || FALLBACK_IMAGE,
      title: button.dataset.zoomTitle || button.querySelector('img')?.alt || 'Shama product',
      pack: button.dataset.zoomPack || ''
    }));
  }

  document.addEventListener('click', event => {
    const trigger = event.target.closest?.('.simple-product-zoom');
    if (!trigger) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    const buttons = visibleProductButtons();
    const index = Math.max(0, buttons.indexOf(trigger));
    const items = itemsFromVisibleCards();
    if (!items.length) return;
    openLightbox(items, index, trigger);
  }, true);

  /* Open the same detail view when the customer clicks the product card, not only the image. */
  document.addEventListener('click', event => {
    const card = event.target.closest?.('.simple-product-card');
    if (!card) return;
    if (event.target.closest('.simple-product-zoom,.bulk-buy,.simple-product-btn,a,input,select,textarea')) return;

    const trigger = card.querySelector('.simple-product-zoom');
    if (!trigger) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const buttons = visibleProductButtons();
    const index = Math.max(0, buttons.indexOf(trigger));
    const items = itemsFromVisibleCards();
    if (!items.length) return;
    openLightbox(items, index, card);
  }, true);

  document.addEventListener('keydown', event => {
    const lightbox = document.querySelector('#product-lightbox');
    if (lightbox && lightbox.classList.contains('open')) {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') stepLightbox(-1);
      if (event.key === 'ArrowRight') stepLightbox(1);
      return;
    }
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches?.('.simple-product-card')) {
      event.preventDefault();
      const trigger = event.target.querySelector('.simple-product-zoom');
      const buttons = visibleProductButtons();
      const index = Math.max(0, buttons.indexOf(trigger));
      const items = itemsFromVisibleCards();
      if (items.length) openLightbox(items, index, event.target);
    }
  });

  function renderSimpleProducts(main) {
    if (!main || typeof categories === 'undefined' || typeof productData === 'undefined') return;

    const slug = document.body.dataset.category;
    const category = categories.find(item => item.slug === slug);
    if (!category) return;

    const items = productData.filter(item => item.category === slug);
    if (typeof activeCatalog !== 'undefined') activeCatalog = items;
    document.title = `${category.name} | Shama International`;

    main.innerHTML = hero(
      `${category.name}.`,
      `${category.desc} — explore the complete Shama range.`,
      `Products / ${category.name}`
    ) + `<section class="simple-catalogue"><div class="wrap"><div id="simple-product-grid" class="simple-product-grid"></div></div></section>`;

    const grid = main.querySelector('#simple-product-grid');
    if (!grid) return;

    grid.innerHTML = items.map((item, index) => `
      <article class="simple-product-card">
        <button class="simple-product-media simple-product-zoom" type="button" data-index="${index}" data-zoom-image="${escapeHtml(item.image || FALLBACK_IMAGE)}" data-zoom-title="${escapeHtml(item.title)}" data-zoom-pack="${escapeHtml(cleanPack(item.pack))}" aria-label="Open ${escapeHtml(item.title)} image">
          <span class="simple-product-index">${String(index + 1).padStart(2, '0')}</span>
          <span class="simple-zoom-hint" aria-hidden="true">⌕</span>
          <img loading="lazy" decoding="async" draggable="false" src="${escapeHtml(item.image || FALLBACK_IMAGE)}" alt="${escapeHtml(item.title)}">
        </button>
        <div class="simple-product-content">
          <div class="simple-product-meta">Shama ${escapeHtml(category.name)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(cleanPack(item.pack))}</p>
          <button class="bulk-buy simple-product-btn" type="button" data-product="${escapeHtml(item.title)}" data-pack="${escapeHtml(item.pack || '')}"><span>Add to bulk order</span><b>+</b></button>
        </div>
      </article>`).join('');

    grid.querySelectorAll('.simple-product-media img').forEach(image => {
      image.addEventListener('error', () => {
        image.src = FALLBACK_IMAGE;
      }, { once: true });
    });

    grid.querySelectorAll('.simple-product-card').forEach(card => {
      card.setAttribute('tabindex','0');
      card.setAttribute('role','button');
      const title = card.querySelector('h3')?.textContent || 'product';
      card.setAttribute('aria-label', 'View details for ' + title);
    });

    document.dispatchEvent(new CustomEvent('shama:product-simple-rendered'));
  }

  window.shamaRerenderSimpleProducts = () => renderSimpleProducts(document.querySelector('#page-content'));
  renderSimpleProducts(document.querySelector('#page-content'));
})();
