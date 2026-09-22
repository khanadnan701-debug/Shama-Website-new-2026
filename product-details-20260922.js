(() => {
  'use strict';

  const FALLBACK_IMAGE = 'assets/shama-logo.png';
  const MODAL_ID = 'shama-product-detail';

  const categoryNames = {
    rice:'Rice', spices:'Spices', sauces:'Sauces, Pickle & Pastes',
    'sauces-pastes':'Sauces, Pickle & Pastes', misc:'Miscellaneous',
    beverages:'Beverages', flour:'Flour & Lentiles', 'flour-lentiles':'Flour & Lentiles',
    frozen:'Frozen', oils:'Oils', 'dry-fruits':'Dry Fruits',
    laziza:'Laziza', ahmed:'Ahmed', agarbatti:'Agarbatti', dates:'Dates',
    pataks:'Pataks', cosmetics:'Cosmetics'
  };

  const clean = value => String(value || '').replace(/\\n/g,' · ').replace(/\n/g,' · ').trim();
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[ch]);

  function findProduct(title) {
    if (!title) return null;
    try {
      if (typeof productData !== 'undefined' && Array.isArray(productData)) {
        const exact = productData.find(x => x && x.title === title);
        if (exact) return exact;
        const lower = title.toLowerCase();
        return productData.find(x => x && String(x.title || '').toLowerCase() === lower) || null;
      }
    } catch (_) {}
    return null;
  }

  function inferCategory(item, trigger) {
    return item?.category || document.body.dataset.category ||
      trigger?.closest?.('[data-category]')?.dataset.category || 'misc';
  }

  function cosmeticsText(title, brand) {
    const t = title.toLowerCase();
    if (/rose water/.test(t)) return {
      summary: `${title} is a practical beauty and personal-care staple designed for simple everyday routines. Its familiar format makes it easy to keep at home, display in retail, or include in a wider personal-care assortment. The product is straightforward to use, easy to store and suitable for customers looking for a classic care item without unnecessary complexity. For wholesale buyers, the clearly defined pack size helps with shelf planning and stock management. Pair it with other Shama personal-care products to build a complete, easy-to-shop range for regular household demand.`,
      benefits:['Everyday care essential','Easy retail display','Clear pack sizing']
    };
    if (/dettol|lifebuoy/.test((brand + ' ' + title).toLowerCase())) return {
      summary: `${title} is suited to everyday cleansing and hygiene routines, with a recognisable format that is easy for households and retailers to understand. It works well as part of a practical personal-care selection and can be stocked alongside soaps, body-care and household essentials. The straightforward pack format makes shelf placement and replenishment simple, while the familiar product type supports regular repeat-use occasions. For wholesale customers, it is a convenient item to combine with other hygiene and personal-care lines when building a balanced assortment for shops, supermarkets, cash-and-carry or general retail.`,
      benefits:['Everyday hygiene use','Familiar product format','Wholesale-friendly range']
    };
    if (/johnson/.test((brand + ' ' + title).toLowerCase())) return {
      summary: `${title} is designed for everyday baby-care routines and comes in a convenient, easy-to-recognise format. It fits naturally into a baby-care assortment alongside oils, lotions, powders and other daily essentials. The pack is simple to merchandise, easy for customers to identify and suitable for regular household use according to the directions on the label. For retailers and wholesalers, it helps create a more complete baby-care section with multiple sizes and product types available across the range. A useful choice for customers looking for familiar, straightforward care products for routine use.`,
      benefits:['Baby-care range essential','Easy to merchandise','Multiple size options']
    };
    if (/vaseline/.test((brand + ' ' + title).toLowerCase())) return {
      summary: `${title} is a straightforward skin-care essential for everyday moisture-care routines. The compact jar format is easy to store, carry and display, while the familiar petroleum jelly format makes it a practical addition to personal-care shelves. It can be used as part of a simple routine for areas that feel dry, following the directions on the pack. Different sizes make the range useful for both home use and retail choice. For wholesale buyers, the product is easy to combine with soaps, lotions and other personal-care essentials in a complete skin-care assortment.`,
      benefits:['Simple moisture-care routine','Compact jar format','Easy range building']
    };
    if (/dabur|amla|oil|coconut|castor|mustard|sesame|black seed/.test(t)) return {
      summary: `${title} is a versatile care product presented in a practical bottle format for everyday routines. Depending on the specific product and label directions, it can fit naturally into hair-care, body-care or household personal-care use. The clear pack size makes it easy for customers to compare options and for retailers to organise shelves by brand and volume. It also works well as part of a broader oils and personal-care selection, giving wholesale buyers a simple way to expand choice without complicating the range. Always follow the usage instructions shown on the individual product label.`,
      benefits:['Versatile care format','Easy size comparison','Strong range complement']
    };
    if (/henna/.test(t)) return {
      summary: `${title} is part of a traditional henna and hair-colour range, supplied in a clearly labelled pack for easy identification. It is suitable for customers specifically looking for henna-based colour products and should be used according to the instructions, warnings and patch-test guidance printed on the pack. The product is easy to merchandise by shade or type, helping retailers create a clear hair-colour section. For wholesale buyers, the range offers familiar colour options in compact packs that are simple to store, display and replenish alongside other beauty and personal-care products.`,
      benefits:['Traditional henna range','Easy shade merchandising','Compact retail pack']
    };
    return {
      summary: `${title} is a practical personal-care product selected for everyday household and retail needs. The format is easy to understand, simple to store and suitable for building a clear beauty, bathing or care assortment. Its defined pack size helps customers compare options while making shelf planning easier for retailers and wholesalers. The product can be combined with complementary care lines to create a more complete category section and support regular repeat-purchase occasions. For best use, customers should follow the directions and any warnings printed on the individual pack. A straightforward addition to a well-rounded personal-care range.`,
      benefits:['Everyday personal care','Retail-ready format','Easy assortment building']
    };
  }

  function detailsFor(item, category) {
    const title = clean(item?.title || 'Shama product');
    const pack = clean(item?.pack || 'Contact us for available pack sizes');
    const brand = clean(item?.brand || (title.split(' ')[0] || 'Shama'));

    if (category === 'cosmetics') {
      const d = cosmeticsText(title, brand);
      return { ...d, category: brand || 'Cosmetics', pack };
    }

    if (category === 'rice') return {
      category:'Rice', pack,
      summary:`${title} is selected for dependable everyday cooking and the kind of grain quality customers expect from a specialist rice range. It is well suited to dishes such as biryani, pulao, curries, rice bowls and side portions, depending on the variety. The pack format makes it practical for homes, restaurants, caterers and retail shelves. For trade customers, it offers an easy way to build a complete rice selection across different grain styles and pack sizes. Store in a cool, dry place and follow the cooking guidance on the pack for the best texture and serving result.`,
      benefits:['Versatile cooking use','Retail & foodservice ready','Multiple pack options']
    };

    if (category === 'spices') return {
      category:'Spices', pack,
      summary:`${title} brings a focused spice flavour to everyday cooking and is ideal for customers who want to build authentic South Asian dishes with better control over seasoning. It can be used in marinades, curries, rice dishes, vegetables, snacks and other recipes depending on the spice. The clearly defined pack makes it easy to store, merchandise and measure during preparation. For retailers and foodservice buyers, it fits naturally into a broader spice assortment and helps offer customers more choice across whole spices, powders and everyday seasonings. Use according to taste and the recipe being prepared.`,
      benefits:['Focused authentic flavour','Flexible recipe use','Easy pantry storage']
    };

    if (category === 'sauces' || category === 'sauces-pastes' || category === 'pataks' || category === 'laziza' || category === 'ahmed') return {
      category:categoryNames[category] || 'Sauces & Pastes', pack,
      summary:`${title} is designed to make flavourful cooking faster and more consistent. It works as a convenient base, accompaniment or recipe shortcut depending on the product, helping home cooks and professional kitchens reduce preparation time while keeping a familiar South Asian taste profile. The ready-to-use format is easy to portion and simple to keep on hand for busy service. For retailers, it adds variety to the cooking-sauce, paste or meal-solution section and pairs naturally with rice, breads, meats and vegetables. Follow the serving and storage directions printed on the pack after opening.`,
      benefits:['Faster meal preparation','Consistent flavour base','Easy portioning']
    };

    if (category === 'beverages') return {
      category:'Beverages', pack,
      summary:`${title} is a convenient beverage option for customers looking for familiar flavours in an easy-to-serve format. It fits well in retail chillers, grocery shelves, restaurants and takeaway menus depending on the product. The defined pack size makes stock planning and display straightforward, while the ready-to-serve nature supports quick service with minimal preparation. For wholesale buyers, beverages are a useful category for building impulse, meal-pairing and family-use ranges alongside snacks and pantry products. Serve and store according to the instructions on the pack, and chill before serving where appropriate for the specific product.`,
      benefits:['Easy to serve','Retail & foodservice friendly','Simple stock planning']
    };

    if (category === 'flour' || category === 'flour-lentiles') {
      const pulse = /dal|lentil|bean|peas|chana|chick|urad|moong|toor/i.test(title);
      return {
        category:'Flour & Lentiles', pack,
        summary: pulse
          ? `${title} is an everyday pantry staple suited to a wide range of traditional and modern dishes. It can be used in dals, curries, soups, salads, side dishes and batch cooking depending on the specific pulse or lentil. The pack is practical for household kitchens, restaurants and wholesale customers who need reliable pantry ingredients in clear sizes. It also pairs naturally with rice, spices and breads to build complete meal solutions. Store in a cool, dry place and sort, rinse, soak or cook as required for the specific product and recipe before serving.`
          : `${title} is a practical flour and pantry staple for everyday cooking, baking and traditional bread preparation depending on the product. It is easy to keep on hand for rotis, doughs, batters and other recipes, making it useful for both home kitchens and foodservice. The clear pack format supports simple storage, portioning and stock control, while retailers can merchandise it alongside lentils, rice and other core pantry ingredients. For best results, store in a cool, dry place and follow the recipe or preparation guidance suited to the specific flour being used.`,
        benefits:pulse?['Everyday pantry staple','Flexible meal use','Easy bulk stocking']:['Versatile kitchen staple','Easy portioning','Home & foodservice use']
      };
    }

    if (category === 'frozen') return {
      category:'Frozen', pack,
      summary:`${title} is a convenient frozen option created for quick preparation and dependable portion control. It is well suited to busy households, restaurants, cafés and foodservice operations that want to reduce preparation time while keeping popular South Asian-style favourites available. Frozen storage makes it easy to hold stock until needed and prepare only the required quantity. For retailers, the product adds variety to the freezer section and can be grouped with breads, snacks, appetisers and ready-to-cook items. Keep frozen as directed and cook or reheat fully according to the preparation instructions printed on the pack.`,
      benefits:['Quick preparation','Convenient frozen storage','Useful portion control']
    };

    if (category === 'oils') return {
      category:'Oils', pack,
      summary:`${title} is supplied in a practical bottle format that makes storage, pouring and stock control straightforward. Depending on the specific oil and the directions on the label, it can support a range of kitchen or household uses. Different oil types give customers more choice within a focused category, while clearly marked pack sizes make comparison easy. For retailers and wholesalers, the range is simple to merchandise alongside pantry staples or relevant personal-care lines. Keep the bottle sealed when not in use, store it as directed on the pack and always follow the specific usage guidance for that individual oil.`,
      benefits:['Practical bottle format','Easy range comparison','Wholesale-ready sizing']
    };

    if (category === 'dry-fruits') return {
      category:'Dry Fruits', pack,
      summary:`${title} is a versatile dry-fruit or nut product that works well for snacking, cooking, desserts, breakfast toppings and gifting depending on the variety. Its pantry-friendly format makes it easy to store and serve, while the product can be used in both everyday recipes and more premium occasions. For retailers, dry fruits add choice to snack, baking and speciality-food sections and can be merchandised alongside dates, spices and festive products. For wholesale customers, the clear pack format supports straightforward stock planning. Store in a cool, dry place and keep sealed after opening to maintain quality.`,
      benefits:['Snack & recipe versatility','Pantry-friendly storage','Strong retail category fit']
    };

    if (category === 'agarbatti') return {
      category:'Agarbatti', pack,
      summary:`${title} is an incense product designed to bring a familiar fragrance experience to homes, prayer spaces and everyday ambience. The compact pack is easy to store, display and offer as part of a wider fragrance or cultural-products range. Different fragrance options make it simple for customers to choose according to personal preference, while retailers can merchandise multiple variants together in a clear, compact section. Use only in a suitable holder, keep away from flammable materials and never leave burning incense unattended. For wholesale buyers, the small pack format is convenient for shelf display, storage and repeat ordering.`,
      benefits:['Home fragrance use','Compact shelf footprint','Easy variant merchandising']
    };

    if (category === 'dates') return {
      category:'Dates', pack,
      summary:`${title} offers a naturally sweet date option that is easy to serve for everyday snacking, sharing, gifting and dessert use. Dates fit naturally into household pantry ranges, festive displays and speciality-food sections, and they pair well with nuts, drinks and other traditional products. The pack format makes portioning, storage and retail presentation straightforward, while wholesale customers can use the range to build seasonal and year-round date selections. Serve as desired and store according to the instructions on the pack. A simple, versatile product for customers looking for a familiar fruit-based snack or ingredient.`,
      benefits:['Naturally sweet taste','Snack & gifting versatility','Easy seasonal merchandising']
    };

    return {
      category:categoryNames[category] || 'Shama product', pack,
      summary:`${title} is selected as part of the Shama International range for customers looking for dependable everyday products with clear pack sizing and easy availability. The format is simple to store, display and use, making it suitable for households, retailers, restaurants or foodservice depending on the item. It can be combined with complementary Shama products to create a more complete shopping or menu solution. For wholesale buyers, the straightforward pack information supports easier stock planning and repeat ordering. Always follow the preparation, storage and usage directions printed on the individual product pack for the best experience.`,
      benefits:['Easy everyday use','Clear pack information','Suitable for wholesale']
    };
  }

  function ensureModal() {
    let modal = document.getElementById(MODAL_ID);
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = MODAL_ID;
    modal.className = 'shama-product-detail';
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML = `
      <button class="shama-product-detail-backdrop" type="button" data-product-detail-close aria-label="Close product details"></button>
      <article class="shama-product-detail-panel" role="dialog" aria-modal="true" aria-labelledby="shama-product-detail-title">
        <button class="shama-product-detail-close" type="button" data-product-detail-close aria-label="Close product details">×</button>
        <div class="shama-product-detail-media"><img id="shama-product-detail-image" src="" alt=""></div>
        <div class="shama-product-detail-copy">
          <span class="shama-product-detail-kicker" id="shama-product-detail-category"></span>
          <h2 id="shama-product-detail-title"></h2>
          <span class="shama-product-detail-pack" id="shama-product-detail-pack"></span>
          <p class="shama-product-detail-summary" id="shama-product-detail-summary"></p>
          <span class="shama-product-benefits-title">Key benefits</span>
          <ul class="shama-product-benefits" id="shama-product-detail-benefits"></ul>
          <div class="shama-product-detail-actions">
            <button class="shama-product-detail-add" type="button">Add to bulk order</button>
            <button class="shama-product-detail-close-secondary" type="button" data-product-detail-close>Close</button>
          </div>
        </div>
      </article>`;
    document.body.appendChild(modal);

    modal.querySelectorAll('[data-product-detail-close]').forEach(btn => btn.addEventListener('click', close));
    return modal;
  }

  let lastFocus = null;

  function close() {
    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('product-detail-open');
    if (lastFocus?.focus) {
      try { lastFocus.focus({preventScroll:true}); } catch (_) { lastFocus.focus(); }
    }
  }

  function openProduct(input = {}, trigger) {
    const title = clean(input.title || input.product || 'Shama product');
    const matched = findProduct(title);
    const item = { ...(matched || {}), ...input, title };
    const category = inferCategory(item, trigger);
    const details = detailsFor(item, category);
    const image = clean(item.image || trigger?.querySelector?.('img')?.src || FALLBACK_IMAGE);
    const modal = ensureModal();

    lastFocus = trigger || document.activeElement;
    const imageEl = modal.querySelector('#shama-product-detail-image');
    imageEl.onerror = () => { imageEl.onerror = null; imageEl.src = FALLBACK_IMAGE; };
    imageEl.src = image || FALLBACK_IMAGE;
    imageEl.alt = title;
    modal.querySelector('#shama-product-detail-category').textContent = details.category;
    modal.querySelector('#shama-product-detail-title').textContent = title;
    modal.querySelector('#shama-product-detail-pack').textContent = details.pack;
    modal.querySelector('#shama-product-detail-summary').textContent = details.summary;
    modal.querySelector('#shama-product-detail-benefits').innerHTML =
      details.benefits.map(x => `<li>${esc(x)}</li>`).join('');

    const add = modal.querySelector('.shama-product-detail-add');
    add.dataset.product = title;
    add.dataset.pack = details.pack;
    add.onclick = event => {
      event.preventDefault();
      event.stopPropagation();
      close();
      const source = document.querySelector(`.bulk-buy[data-product="${CSS.escape(title)}"]`);
      if (source) source.click();
      else {
        const temp = document.createElement('button');
        temp.type = 'button';
        temp.className = 'bulk-buy';
        temp.dataset.product = title;
        temp.dataset.pack = details.pack;
        temp.style.display = 'none';
        document.body.appendChild(temp);
        temp.click();
        temp.remove();
      }
    };

    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('product-detail-open');
  }

  window.shamaOpenProductDetails = openProduct;

  window.addEventListener('click', event => {
    const target = event.target;
    if (!target?.closest) return;

    /* Keep order/cart controls and modal controls behaving normally. */
    if (target.closest('.bulk-buy,.simple-product-btn,.shama-product-detail,[data-product-detail-close],a,input,select,textarea')) return;

    const direct = target.closest('[data-product-details]');
    if (direct) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openProduct({
        title: direct.dataset.productTitle || direct.dataset.product || direct.querySelector('h3,strong')?.textContent,
        pack: direct.dataset.productPack || direct.dataset.pack || '',
        image: direct.dataset.productImage || direct.querySelector('img')?.src || ''
      }, direct);
      return;
    }

    /*
      Capture at WINDOW level so older catalogue zoom scripts cannot swallow the
      click at document-capture phase. Image button and the whole card now open
      exactly the same product-detail modal on every range.
    */
    const zoom = target.closest('.simple-product-zoom');
    const card = zoom?.closest('.simple-product-card') ||
      target.closest('.simple-product-card,.product-card,.runway-row');
    if (!card) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const title = clean(
      zoom?.dataset.zoomTitle ||
      card.querySelector('.simple-product-content h3,.product-body h3,h3,.runway-title,strong')?.textContent ||
      card.dataset.product || ''
    );
    if (!title) return;

    openProduct({
      title,
      pack: clean(
        zoom?.dataset.zoomPack ||
        card.querySelector('.simple-product-content>p,.product-body p,.runway-pack')?.textContent ||
        card.dataset.pack || ''
      ),
      image: zoom?.dataset.zoomImage || card.querySelector('img')?.src || ''
    }, card);
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches?.('.simple-product-card,.product-card,.runway-row')) {
      event.preventDefault();
      event.target.click();
    }
  });

  function makeCardsAccessible() {
    document.querySelectorAll('.simple-product-card,.product-card,.runway-row').forEach(card => {
      if (!card.hasAttribute('tabindex')) card.tabIndex = 0;
      if (!card.hasAttribute('role')) card.setAttribute('role','button');
      if (!card.hasAttribute('aria-label')) {
        const title = clean(card.querySelector('h3,.runway-title,strong')?.textContent || '');
        if (title) card.setAttribute('aria-label', `View details for ${title}`);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', makeCardsAccessible, {once:true});
  else makeCardsAccessible();

  document.addEventListener('shama:product-simple-rendered', makeCardsAccessible);
  new MutationObserver(makeCardsAccessible).observe(document.documentElement,{childList:true,subtree:true});
})();