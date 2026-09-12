(() => {
  'use strict';
  if (document.getElementById('shama-chatbot')) return;

  const CONTACT = {
    phone: '+33 1 43 42 05 79',
    email: 'info@shamafr.com',
    whatsapp: '33143420579',
    address: "3, allée de l’Espérance, 93110 Rosny Sous Bois – France"
  };

  const categories = [
    ['Rice', 'rice.html'],
    ['Spices', 'spices.html'],
    ['Sauces, Pickle & Pastes', 'sauces-pastes.html'],
    ['Miscellaneous', 'miscellaneous.html'],
    ['Beverages', 'beverages.html'],
    ['Flour & Lentiles', 'flour-lentiles.html'],
    ['Frozen', 'frozen.html'],
    ['Oils', 'oils.html'],
    ['Dry Fruits', 'dry-fruits.html']
  ];

  const style = document.createElement('style');
  style.id = 'shama-chatbot-style';
  style.textContent = `
    #shama-chatbot{position:fixed;right:18px;bottom:22px;z-index:2147482500;font-family:"DM Sans",Arial,sans-serif;color:#152039}
    .shama-chat-launcher{width:58px;height:58px;border:0;border-radius:19px;background:linear-gradient(135deg,#102a43,#5f45d1);color:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 18px 45px rgba(16,42,67,.28);transition:.22s;position:relative}
    .shama-chat-launcher:hover{transform:translateY(-3px)}
    .shama-chat-launcher svg{width:27px;height:27px;fill:none;stroke:currentColor;stroke-width:1.9}
    .shama-chat-launcher:after{content:"";position:absolute;right:5px;top:5px;width:10px;height:10px;border-radius:50%;background:#35d399;border:2px solid #fff}
    .shama-chat-panel{position:absolute;right:0;bottom:72px;width:min(380px,calc(100vw - 24px));height:min(590px,calc(100vh - 120px));display:none;grid-template-rows:auto 1fr auto;border:1px solid rgba(52,67,111,.12);border-radius:24px;overflow:hidden;background:#fff;box-shadow:0 30px 90px rgba(16,28,66,.28)}
    .shama-chat-panel.open{display:grid}
    .shama-chat-head{padding:17px 18px;background:linear-gradient(135deg,#0b1f3a,#4938ae);color:#fff;display:flex;align-items:center;gap:12px}
    .shama-chat-logo{width:42px;height:42px;border-radius:13px;background:#fff;display:grid;place-items:center;padding:5px;flex:0 0 auto}
    .shama-chat-logo img{width:100%;height:100%;object-fit:contain}
    .shama-chat-head-copy{min-width:0;flex:1}.shama-chat-head-copy strong{display:block;font:800 15px Manrope,Arial,sans-serif}.shama-chat-head-copy small{display:flex;align-items:center;gap:6px;margin-top:3px;color:rgba(255,255,255,.75);font-size:10px}.shama-chat-head-copy small:before{content:"";width:7px;height:7px;border-radius:50%;background:#35d399}
    .shama-chat-close{width:34px;height:34px;border:0;border-radius:10px;background:rgba(255,255,255,.1);color:#fff;font-size:22px;cursor:pointer}
    .shama-chat-body{padding:17px;overflow:auto;background:linear-gradient(180deg,#f8f9ff 0,#fff 35%);scroll-behavior:smooth}
    .shama-msg{max-width:87%;padding:11px 13px;border-radius:15px;margin:0 0 10px;font-size:12px;line-height:1.55;white-space:pre-line;overflow-wrap:anywhere}
    .shama-msg.bot{background:#fff;border:1px solid rgba(53,68,112,.1);box-shadow:0 8px 24px rgba(40,53,96,.06);border-bottom-left-radius:5px}
    .shama-msg.user{margin-left:auto;background:#182d50;color:#fff;border-bottom-right-radius:5px}
    .shama-chat-actions{display:flex;flex-wrap:wrap;gap:7px;margin:3px 0 14px}
    .shama-chat-chip{border:1px solid rgba(91,70,211,.14);border-radius:999px;background:#f1efff;color:#5540c6;padding:8px 10px;font:800 10px Manrope,Arial,sans-serif;cursor:pointer}
    .shama-chat-link{display:inline-flex;margin-top:7px;padding:8px 10px;border-radius:10px;background:#eff2ff;color:#4f3fc1;font-weight:800;text-decoration:none;font-size:10px}
    .shama-chat-form{padding:12px;border-top:1px solid rgba(52,67,111,.1);background:#fff;display:grid;grid-template-columns:1fr 44px;gap:8px}
    .shama-chat-input{min-width:0;height:44px;border:1px solid rgba(52,67,111,.14);border-radius:13px;padding:0 13px;outline:0;font:500 12px "DM Sans",Arial,sans-serif;background:#f9faff}
    .shama-chat-input:focus{border-color:#7560df;box-shadow:0 0 0 3px rgba(117,96,223,.08);background:#fff}
    .shama-chat-send{width:44px;height:44px;border:0;border-radius:13px;background:#172d51;color:#fff;cursor:pointer;font-size:18px}
    @media(max-width:600px){
      #shama-chatbot{right:10px;bottom:14px}
      .shama-chat-launcher{width:54px;height:54px;border-radius:17px}
      .shama-chat-panel{position:fixed;left:8px;right:8px;bottom:76px;width:auto;height:min(620px,calc(100vh - 100px));border-radius:21px}
    }
  `;
  document.head.appendChild(style);

  const root = document.createElement('div');
  root.id = 'shama-chatbot';
  root.innerHTML = `
    <section class="shama-chat-panel" aria-hidden="true" aria-label="Shama assistant">
      <header class="shama-chat-head">
        <span class="shama-chat-logo"><img src="assets/shama-logo.png" alt="Shama"></span>
        <span class="shama-chat-head-copy"><strong>Shama Assistant</strong><small>Online · Product & wholesale help</small></span>
        <button class="shama-chat-close" type="button" aria-label="Close chat">×</button>
      </header>
      <div class="shama-chat-body" aria-live="polite"></div>
      <form class="shama-chat-form">
        <input class="shama-chat-input" type="text" autocomplete="off" placeholder="Ask about products, order, delivery…" aria-label="Type your message">
        <button class="shama-chat-send" type="submit" aria-label="Send">➤</button>
      </form>
    </section>
    <button class="shama-chat-launcher" type="button" aria-label="Open Shama chat" aria-expanded="false">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 18.5 3 21l.8-4A8.4 8.4 0 0 1 2.5 12C2.5 7 6.7 3 12 3s9.5 4 9.5 9-4.2 9-9.5 9c-2.4 0-4.7-.8-6.5-2.5Z"/><path d="M7.5 12h.01M12 12h.01M16.5 12h.01" stroke-linecap="round" stroke-width="2.5"/></svg>
    </button>`;
  document.body.appendChild(root);

  const panel = root.querySelector('.shama-chat-panel');
  const launcher = root.querySelector('.shama-chat-launcher');
  const close = root.querySelector('.shama-chat-close');
  const body = root.querySelector('.shama-chat-body');
  const form = root.querySelector('.shama-chat-form');
  const input = root.querySelector('.shama-chat-input');

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const msg = (text, who='bot') => {
    const el = document.createElement('div');
    el.className = `shama-msg ${who}`;
    el.innerHTML = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  };
  const chips = items => {
    const wrap = document.createElement('div');
    wrap.className = 'shama-chat-actions';
    wrap.innerHTML = items.map(([label,value]) => `<button type="button" class="shama-chat-chip" data-chat-value="${esc(value)}">${esc(label)}</button>`).join('');
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  };

  function productSearch(query) {
    if (typeof productData === 'undefined' || !Array.isArray(productData)) return [];
    const terms = query.toLowerCase().split(/\s+/).filter(x => x.length > 2);
    if (!terms.length) return [];
    return productData.filter(p => {
      const hay = `${p.title || ''} ${p.pack || ''} ${p.category || ''}`.toLowerCase();
      return terms.some(term => hay.includes(term));
    }).slice(0,4);
  }

  function answer(raw) {
    const q = raw.trim();
    const lower = q.toLowerCase();
    if (!q) return;
    msg(esc(q), 'user');

    const found = productSearch(q);
    if (found.length && !/(contact|address|phone|whatsapp|hours|timing|order|delivery|price|quote)/.test(lower)) {
      msg(`I found ${found.length} matching product${found.length > 1 ? 's' : ''}:`);
      found.forEach(p => {
        const file = ({rice:'rice.html',spices:'spices.html',sauces:'sauces-pastes.html',misc:'miscellaneous.html',beverages:'beverages.html',flour:'flour-lentiles.html',frozen:'frozen.html',oils:'oils.html','dry-fruits':'dry-fruits.html'})[p.category] || 'catalogue.html';
        msg(`<strong>${esc(p.title)}</strong>${p.pack ? `<br>${esc(p.pack)}` : ''}<br><a class="shama-chat-link" href="${file}">View range ↗</a>`);
      });
      return;
    }

    if (/(hi|hello|hey|salam|bonjour|help)/.test(lower)) {
      msg('Hello! 👋 I can help you find Shama products, browse ranges, prepare a bulk enquiry, or contact our team.');
      chips([['Browse products','products'],['Bulk order','bulk order'],['Contact','contact'],['Delivery','delivery']]);
    } else if (/(product|catalog|catalogue|range|rice|spice|flour|lentil|frozen|beverage|drink|oil|dry fruit|paste|pickle)/.test(lower)) {
      msg('You can browse the Shama range by category:');
      chips(categories.map(([name,href]) => [name, `go:${href}`]));
    } else if (/(bulk|wholesale|quote|quotation|price|pricing|order)/.test(lower)) {
      msg('For wholesale orders, select the products you need and use “Add to bulk order”. You can also send your full requirement directly to our team.');
      msg(`<a class="shama-chat-link" href="contact.html">Open bulk enquiry ↗</a> <a class="shama-chat-link" target="_blank" rel="noopener" href="https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hello Shama International, I would like a wholesale quotation.')}">WhatsApp ↗</a>`);
    } else if (/(contact|phone|call|email|whatsapp)/.test(lower)) {
      msg(`You can contact Shama International here:\n<strong>Phone:</strong> ${CONTACT.phone}\n<strong>Email:</strong> ${CONTACT.email}\n<a class="shama-chat-link" target="_blank" rel="noopener" href="https://wa.me/${CONTACT.whatsapp}">Open WhatsApp ↗</a>`);
    } else if (/(address|location|where|visit)/.test(lower)) {
      msg(`<strong>Shama International</strong><br>${CONTACT.address}<br><a class="shama-chat-link" href="contact.html">Contact page ↗</a>`);
    } else if (/(hour|timing|open|close|schedule)/.test(lower)) {
      msg('<strong>Opening hours</strong><br>Mon–Fri: 09:00–13:00, 14:00–18:00<br>Sat: 09:00–13:00, 14:00–16:00');
    } else if (/(deliver|delivery|ship|shipping)/.test(lower)) {
      msg('Delivery availability depends on your location, product and order quantity. Send the products, quantity/cases and delivery city/postcode and our wholesale team can confirm availability.');
      msg('<a class="shama-chat-link" href="contact.html">Send delivery enquiry ↗</a>');
    } else if (lower.startsWith('go:')) {
      location.href = q.slice(3);
    } else {
      msg('I can help with product ranges, wholesale orders, delivery, opening hours and contact details. For a specific product, type its name — for example “Basmati rice” or “Falooda”.');
      chips([['Products','products'],['Bulk order','bulk order'],['Contact','contact']]);
    }
  }

  function openChat(open) {
    panel.classList.toggle('open', open);
    panel.setAttribute('aria-hidden', open ? 'false' : 'true');
    launcher.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) setTimeout(() => input.focus(), 50);
  }

  launcher.addEventListener('click', () => openChat(!panel.classList.contains('open')));
  close.addEventListener('click', () => openChat(false));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const value = input.value;
    input.value = '';
    answer(value);
  });
  body.addEventListener('click', e => {
    const button = e.target.closest('[data-chat-value]');
    if (!button) return;
    const value = button.dataset.chatValue;
    if (value.startsWith('go:')) location.href = value.slice(3);
    else answer(value);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') openChat(false); });

  msg('Hi! I’m the <strong>Shama Assistant</strong>. How can I help you today?');
  chips([['Find a product','products'],['Bulk order','bulk order'],['Contact team','contact']]);
})();
