(() => {
  'use strict';

  const STORAGE_KEY = 'shama-language';
  const CATEGORIES = {
    'Rice': 'Riz',
    'Spices': 'Épices',
    'Sauces & Pastes': 'Sauces & Pâtes',
    'Miscellaneous': 'Divers',
    'Beverages': 'Boissons',
    'Flour & Lentiles': 'Farines & Lentilles',
    'Frozen': 'Surgelés',
    'Oils': 'Huiles',
    'Dry Fruits': 'Fruits secs'
  };

  const FR = {
    'Home': 'Accueil',
    'About us': 'À propos',
    'Catalogue': 'Catalogue',
    'Products': 'Produits',
    'Contact': 'Contact',
    'Contact us': 'Nous contacter',
    'Bulk order': 'Commande en gros',
    'Wholesale enquiries open': 'Demandes professionnelles ouvertes',
    'Authentic flavour across France since 2003': 'Des saveurs authentiques en France depuis 2003',
    'Explore by range': 'Explorer par gamme',
    'Full catalogue': 'Catalogue complet',
    'Need help choosing?': 'Besoin d’aide pour choisir ?',
    'Talk to our team': 'Parler à notre équipe',
    'Quick links': 'Liens rapides',
    'Headquarters': 'Siège social',
    'Order now': 'Commander maintenant',
    'All rights reserved.': 'Tous droits réservés.',

    'From our table to yours': 'De notre table à la vôtre',
    'Tradition you can': 'Une tradition à',
    'taste.': 'savourer.',
    'Authentic South Asian flavours, carefully selected and brought to homes and businesses across France since 2003.': 'Des saveurs authentiques d’Asie du Sud, soigneusement sélectionnées et proposées aux particuliers et aux professionnels partout en France depuis 2003.',
    'Explore catalogue': 'Explorer le catalogue',
    'Our story': 'Notre histoire',
    'Years of trust': 'Années de confiance',
    'Product ranges': 'Gammes de produits',
    'Flavour focused': 'Dédié aux saveurs',
    'Authentic ranges': 'Gammes authentiques',
    'AUTHENTIC TASTE': 'GOÛT AUTHENTIQUE',
    'PREMIUM QUALITY': 'QUALITÉ PREMIUM',
    'TRUSTED SINCE 2003': 'UNE MARQUE DE CONFIANCE DEPUIS 2003',
    'WHOLESALE ACROSS FRANCE': 'VENTE EN GROS PARTOUT EN FRANCE',
    'Meet Shama': 'Découvrez Shama',
    'Good food starts with': 'La bonne cuisine commence par de',
    'good ingredients.': 'bons ingrédients.',
    'Welcome to Shama International S.A.S — committed to building long-term, mutually beneficial relationships since our foundation by Sardar Zahoor Iqbal in 2003.': 'Bienvenue chez Shama International S.A.S — engagée à construire des relations durables et mutuellement bénéfiques depuis sa fondation par Sardar Zahoor Iqbal en 2003.',
    'Discover who we are': 'Découvrir qui nous sommes',
    'Shop by category': 'Explorer par catégorie',
    'A world of flavour': 'Un monde de saveurs',
    'View all products': 'Voir tous les produits',
    'Customer favourites': 'Les favoris de nos clients',
    'Made to move': 'Pensé pour le',
    'in bulk.': 'gros.',
    'Popular Shama essentials for restaurants, retailers and food businesses.': 'Les incontournables Shama pour les restaurants, les commerçants et les professionnels de l’alimentation.',
    'Wholesale, made simple': 'Le gros, en toute simplicité',
    'From our warehouse': 'De notre entrepôt',
    'to your business.': 'à votre entreprise.',
    'Choose a product, send your requirement and our team will help with MOQ, pricing and delivery availability.': 'Choisissez un produit, envoyez votre besoin et notre équipe vous accompagnera sur les quantités minimales, les tarifs et les disponibilités de livraison.',
    'Explore': 'Explorer',
    'Browse nine ranges and find the right products for your customers.': 'Parcourez nos neuf gammes et trouvez les produits adaptés à vos clients.',
    'Enquire': 'Demander',
    'Share cases and delivery details instantly by email or WhatsApp.': 'Partagez vos quantités et informations de livraison directement par e-mail ou WhatsApp.',
    'Receive': 'Recevoir',
    'Our team confirms price, availability and the next delivery step.': 'Notre équipe confirme le prix, la disponibilité et la prochaine étape de livraison.',
    'Our philosophy': 'Notre philosophie',
    'Quality without compromise.': 'La qualité sans compromis.',
    'We always strive to offer the best quality and the best service to our customers—combining trusted sourcing with the traditional taste you remember.': 'Nous nous efforçons toujours d’offrir la meilleure qualité et le meilleur service, en associant un approvisionnement fiable aux saveurs traditionnelles que vous connaissez.',
    'Carefully selected': 'Soigneusement sélectionné',
    'Rich in tradition': 'Riche en tradition',
    'Reliable service': 'Service fiable',
    'Learn more': 'En savoir plus',
    'Ready to order?': 'Prêt à commander ?',
    'Bring authentic flavour home.': 'Invitez les saveurs authentiques chez vous.',

    'Explore the range': 'Explorer la gamme',
    'Move through': 'Parcourez',
    'our flavours': 'nos saveurs',
    'Now exploring': 'En cours d’exploration',
    'Category': 'Catégorie',
    'Select a favourite': 'Choisissez un favori',
    'Explore all rice': 'Voir tous les riz',
    'Choice': 'Sélection',
    'Bestseller · Wholesale': 'Best-seller · Vente en gros',
    'Authentic quality': 'Qualité authentique',
    'Bulk availability': 'Disponibilité en gros',
    'Delivery support': 'Assistance livraison',
    'Request bulk quote': 'Demander un devis en gros',
    'Multiple pack sizes available': 'Plusieurs formats disponibles',

    'Our story.': 'Notre histoire.',
    'Building long-term, mutually beneficial business relationships since 2003.': 'Nous construisons des relations commerciales durables et mutuellement bénéfiques depuis 2003.',
    'Company profile': 'Profil de l’entreprise',
    'Rooted in trust, growing through taste.': 'Fondée sur la confiance, portée par les saveurs.',
    'The foundations of Shama International were laid by Sardar Zahoor Iqbal in 2003. Since then, our commitment has stayed simple: understand our customers, extend our product variety, and offer excellent quality with dependable service.': 'Shama International a été fondée par Sardar Zahoor Iqbal en 2003. Depuis, notre engagement reste simple : comprendre nos clients, élargir notre gamme et offrir une excellente qualité avec un service fiable.',
    'We ensure that our products deliver the flavour and traditional taste our customers know and love. Every relationship matters to us—from our suppliers and partners to the families enjoying Shama products.': 'Nous veillons à ce que nos produits offrent les saveurs traditionnelles que nos clients connaissent et apprécient. Chaque relation compte, de nos fournisseurs et partenaires jusqu’aux familles qui choisissent Shama.',
    'Explore our range': 'Explorer notre gamme',
    'What guides us': 'Ce qui nous guide',
    'Made around our values': 'Construits autour de nos valeurs',
    'Philosophy': 'Philosophie',
    'We always strive to offer the best quality and the best service to our customers.': 'Nous nous efforçons toujours d’offrir la meilleure qualité et le meilleur service à nos clients.',
    'Vision': 'Vision',
    'To grow our variety by listening closely and understanding customer requirements.': 'Faire évoluer notre offre en écoutant attentivement et en comprenant les besoins de nos clients.',
    'Mission': 'Mission',
    'To deliver authentic flavour, traditional taste and long-lasting value in every product.': 'Offrir des saveurs authentiques, un goût traditionnel et une valeur durable dans chaque produit.',
    'Built on belief.': 'Bâtie sur une conviction.',
    'A story of courage, relationships and authentic flavour—growing from one vision in 2003.': 'Une histoire de courage, de relations et de saveurs authentiques, née d’une vision en 2003.',
    'Our beginning': 'Nos débuts',
    'More than food.': 'Bien plus que des produits.',
    'A promise kept.': 'Une promesse tenue.',
    'Discover our products': 'Découvrir nos produits',
    'The journey': 'Notre parcours',
    'One vision.': 'Une vision.',
    'Three decades of courage.': 'Trois décennies de courage.',
    'A new beginning': 'Un nouveau départ',
    'Shama is born': 'Naissance de Shama',
    'Today': 'Aujourd’hui',
    'Growing together': 'Grandir ensemble',
    'The man behind Shama': 'L’homme derrière Shama',
    'Founder & Chairman': 'Fondateur & Président',
    'What stays constant': 'Ce qui reste constant',
    'Relationships': 'Relations',
    'Quality': 'Qualité',
    'Progress': 'Progrès',
    'Vision & mission': 'Vision & mission',
    'Traditional taste.': 'Goût traditionnel.',
    'Worldwide ambition.': 'Ambition internationale.',
    'Build with us': 'Construire avec nous',

    'Our catalogue.': 'Notre catalogue.',
    'Nine delicious ranges. Hundreds of ways to make every meal feel special.': 'Neuf gammes savoureuses. Des centaines de façons de rendre chaque repas spécial.',
    'The flavour index.': 'L’index des saveurs.',
    'Nine distinctive ranges. One trusted name. Move through the complete Shama collection.': 'Neuf gammes distinctes. Un nom de confiance. Découvrez toute la collection Shama.',
    'Range': 'Gamme',
    'Selected range': 'Gamme sélectionnée',
    'Shama collection': 'Collection Shama',
    'Enter the range': 'Voir la gamme',
    'Can’t find what you need?': 'Vous ne trouvez pas ce qu’il vous faut ?',
    'Tell us what belongs': 'Dites-nous ce qui doit',
    'on your shelves.': 'être sur vos rayons.',

    'Let’s talk food.': 'Parlons produits.',
    'Orders, trade enquiries or a simple hello—our team would love to hear from you.': 'Commandes, demandes professionnelles ou simple prise de contact : notre équipe est à votre écoute.',
    'Get in touch': 'Contactez-nous',
    'We’re here to help.': 'Nous sommes là pour vous aider.',
    'Visit': 'Adresse',
    'Call': 'Téléphone',
    'Email': 'E-mail',
    'Opening hours': 'Horaires d’ouverture',
    'First name': 'Prénom',
    'Last name': 'Nom',
    'Phone': 'Téléphone',
    'Message': 'Message',
    'Send message': 'Envoyer le message',
    'Thank you!': 'Merci !',
    'We’ll get back to you shortly.': 'Nous vous répondrons rapidement.',
    'Let’s build your order.': 'Construisons votre commande.',
    'Tell us what your business needs. Our wholesale team will help with pricing, MOQ and delivery.': 'Dites-nous ce dont votre entreprise a besoin. Notre équipe grossiste vous accompagnera sur les prix, les quantités minimales et la livraison.',
    'Bulk enquiry': 'Demande professionnelle',
    'Shama trade desk': 'Service commercial Shama',
    'Wholesale,': 'Le gros,',
    'without the': 'sans',
    'guesswork.': 'incertitude.',
    'Choose your range': 'Choisissez votre gamme',
    'Share quantity & location': 'Indiquez quantité et lieu',
    'Receive your quotation': 'Recevez votre devis',
    'Call the trade desk': 'Appeler le service commercial',
    'Email us': 'Nous écrire',
    'Bulk order request': 'Demande de commande en gros',
    'Usually replies within one business day': 'Réponse habituelle sous un jour ouvré',
    'Business / shop name': 'Entreprise / magasin',
    'Company name': 'Nom de l’entreprise',
    'Your name': 'Votre nom',
    'Full name': 'Nom complet',
    'Phone / WhatsApp': 'Téléphone / WhatsApp',
    'Product range': 'Gamme de produits',
    'Choose a range': 'Choisir une gamme',
    'Multiple categories': 'Plusieurs catégories',
    'Estimated cases': 'Nombre estimé de cartons',
    'Products or pack sizes': 'Produits ou formats',
    'Delivery city': 'Ville de livraison',
    'City': 'Ville',
    'Postcode': 'Code postal',
    'Anything else?': 'Autre information ?',
    'Send enquiry by': 'Envoyer la demande par',
    'Send enquiry on': 'Envoyer la demande sur',
    'Visit Shama': 'Visiter Shama',

    'Search the range': 'Rechercher dans la gamme',
    'Type a product name…': 'Saisissez un nom de produit…',
    'products': 'produits',
    'Selected product': 'Produit sélectionné',
    'Contact us for available pack sizes': 'Contactez-nous pour les formats disponibles',
    'Wholesale supply': 'Approvisionnement en gros',
    'Add to bulk order': 'Ajouter à la commande en gros',
    'Product index': 'Index des produits',
    'Pack details': 'Détails du conditionnement',
    'Pack sizes available': 'Formats disponibles',
    'No matching products found.': 'Aucun produit correspondant.',
    'Available in selected pack sizes': 'Disponible dans certains formats',
    'Buy in bulk': 'Acheter en gros',
    'Quantity / cases': 'Quantité / cartons',
    'Business name': 'Nom de l’entreprise',
    'Delivery city / postcode': 'Ville / code postal de livraison',
    'Additional details': 'Informations complémentaires',
    'Send by email': 'Envoyer par e-mail',
    'Send on WhatsApp': 'Envoyer sur WhatsApp',
    'Close': 'Fermer',

    'Fragrant grains for every table': 'Des grains parfumés pour toutes les tables',
    'Bold aroma, vivid colour': 'Arômes intenses, couleurs vives',
    'Instant depth and flavour': 'Une saveur riche en un instant',
    'Everyday pantry essentials': 'Les essentiels du garde-manger',
    'Refreshingly familiar': 'Fraîcheur et saveurs familières',
    'Wholesome kitchen staples': 'Des indispensables sains pour la cuisine',
    'Convenience, without compromise': 'Pratique, sans compromis',
    'The foundation of great food': 'La base d’une bonne cuisine',
    'Naturally rich and satisfying': 'Naturellement riches et savoureux'
  };

  Object.assign(FR, CATEGORIES);

  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const originalTitle = document.title;
  let language = 'en';
  try { language = localStorage.getItem(STORAGE_KEY) === 'fr' ? 'fr' : 'en'; } catch (_) {}

  function withWhitespace(value, replacement) {
    const lead = value.match(/^\s*/)?.[0] || '';
    const tail = value.match(/\s*$/)?.[0] || '';
    return lead + replacement + tail;
  }

  function toFrench(value) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    if (FR[trimmed]) return withWhitespace(value, FR[trimmed]);

    let m = trimmed.match(/^Explore (.+)$/);
    if (m && CATEGORIES[m[1]]) return withWhitespace(value, `Explorer ${CATEGORIES[m[1]]}`);
    m = trimmed.match(/^Products \/ (.+)$/);
    if (m && CATEGORIES[m[1]]) return withWhitespace(value, `Produits / ${CATEGORIES[m[1]]}`);
    m = trimmed.match(/^Shama (.+)$/);
    if (m && CATEGORIES[m[1]]) return withWhitespace(value, `Shama ${CATEGORIES[m[1]]}`);
    m = trimmed.match(/^(.+) — explore the complete Shama range\.$/);
    if (m && CATEGORIES[m[1]]) return withWhitespace(value, `${CATEGORIES[m[1]]} — découvrez toute la gamme Shama.`);
    m = trimmed.match(/^(.+)\. Discover authentic Shama products selected for homes, restaurants and retailers across France\.$/);
    if (m && FR[m[1]]) return withWhitespace(value, `${FR[m[1]]}. Découvrez des produits Shama authentiques sélectionnés pour les particuliers, restaurants et commerçants partout en France.`);
    m = trimmed.match(/^(.+)\. Explore authentic products selected for retailers, restaurants and homes\.$/);
    if (m && FR[m[1]]) return withWhitespace(value, `${FR[m[1]]}. Découvrez des produits authentiques sélectionnés pour les commerçants, restaurants et particuliers.`);
    return value;
  }

  function sourceText(node, target) {
    const current = node.nodeValue || '';
    if (!originalText.has(node)) originalText.set(node, current);
    let source = originalText.get(node);

    if (target === 'fr') {
      const expected = toFrench(source);
      if (current !== source && current !== expected) {
        source = current;
        originalText.set(node, source);
      }
    }
    return source;
  }

  function translateTextNode(node, target) {
    if (!node || !node.nodeValue) return;
    const parent = node.parentElement;
    if (!parent || parent.closest('#shama-language-switch') || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName)) return;
    const source = sourceText(node, target);
    const next = target === 'fr' ? toFrench(source) : source;
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function translateAttributes(root, target) {
    if (!root || root.nodeType !== 1) return;
    const elements = [root, ...root.querySelectorAll('[placeholder],[aria-label],[title]')];
    for (const el of elements) {
      if (el.closest?.('#shama-language-switch')) continue;
      let saved = originalAttrs.get(el);
      if (!saved) {
        saved = {};
        originalAttrs.set(el, saved);
      }
      for (const attr of ['placeholder', 'aria-label', 'title']) {
        const current = el.getAttribute?.(attr);
        if (!current) continue;
        if (!(attr in saved)) saved[attr] = current;
        let source = saved[attr];
        if (target === 'fr') {
          const expected = toFrench(source);
          if (current !== source && current !== expected) {
            source = current;
            saved[attr] = source;
          }
        }
        const next = target === 'fr' ? toFrench(source) : source;
        if (current !== next) el.setAttribute(attr, next);
      }
    }
  }

  function translateRoot(root, target) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root, target);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) translateTextNode(walker.currentNode, target);
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root, target);
  }

  function setTitle(target) {
    if (target === 'en') {
      document.title = originalTitle;
      return;
    }
    const base = {
      'Shama International | Authentic Flavours': 'Shama International | Saveurs Authentiques',
      'About Us | Shama International': 'À propos | Shama International',
      'Catalogue | Shama International': 'Catalogue | Shama International',
      'Bulk Enquiry | Shama International': 'Demande professionnelle | Shama International',
      'Contact Us | Shama International': 'Contact | Shama International'
    };
    if (base[originalTitle]) {
      document.title = base[originalTitle];
      return;
    }
    const m = originalTitle.match(/^(.+) \| (?:Shama|Shama International)$/);
    document.title = m && CATEGORIES[m[1]] ? `${CATEGORIES[m[1]]} | Shama International` : originalTitle;
  }

  function updateControl() {
    const control = document.querySelector('#shama-language-switch');
    if (!control) return;
    control.querySelectorAll('button').forEach(btn => {
      const active = btn.dataset.lang === language;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLanguage(next, save = true) {
    if (next !== 'en' && next !== 'fr') return;
    language = next;
    document.documentElement.lang = next;
    translateRoot(document.body, next);
    setTitle(next);
    updateControl();
    if (save) {
      try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
    }
  }

  const pending = new Set();
  let refreshId = 0;

  function scheduleRefresh(root) {
    if (language !== 'fr' || !root) return;
    pending.add(root);
    if (refreshId) return;
    refreshId = requestAnimationFrame(() => {
      refreshId = 0;
      const roots = [...pending];
      pending.clear();
      for (const item of roots) translateRoot(item, 'fr');
    });
  }

  function relevantRoot(target) {
    if (!target?.closest) return document.body;
    return target.closest('.flavour-explorer,#home-products,.runway-list-wrap,.runway-preview,.catalogue-index,.bulk-modal,.trade-desk,.mega-menu,#page-content') || document.body;
  }

  function mountSwitcher() {
    if (document.querySelector('#shama-language-switch')) return;
    const style = document.createElement('style');
    style.textContent = `
      #shama-language-switch{position:fixed;left:18px;bottom:18px;z-index:2147483000;display:flex;align-items:center;gap:3px;padding:4px;border:1px solid rgba(8,45,37,.16);border-radius:999px;background:rgba(255,255,255,.96);box-shadow:0 8px 28px rgba(0,0,0,.14);font-family:DM Sans,Arial,sans-serif}
      #shama-language-switch button{appearance:none;border:0;background:transparent;color:#123d34;padding:7px 10px;border-radius:999px;font:700 11px/1 DM Sans,Arial,sans-serif;letter-spacing:.08em;cursor:pointer;min-width:36px}
      #shama-language-switch button.active{background:#0d5a49;color:#fff}
      #shama-language-switch button:focus-visible{outline:2px solid #0d5a49;outline-offset:2px}
      @media(max-width:600px){#shama-language-switch{left:10px;bottom:10px;padding:3px}#shama-language-switch button{padding:7px 9px}}
    `;
    document.head.appendChild(style);

    const control = document.createElement('div');
    control.id = 'shama-language-switch';
    control.setAttribute('role', 'group');
    control.setAttribute('aria-label', 'Language');
    control.innerHTML = '<button type="button" data-lang="en" aria-pressed="false">EN</button><button type="button" data-lang="fr" aria-pressed="false">FR</button>';
    control.addEventListener('click', event => {
      const button = event.target.closest('button[data-lang]');
      if (button) setLanguage(button.dataset.lang);
    });
    document.body.appendChild(control);
  }

  function bindSafeDynamicRefresh() {
    document.addEventListener('click', event => {
      if (language !== 'fr' || event.target.closest?.('#shama-language-switch')) return;
      setTimeout(() => scheduleRefresh(relevantRoot(event.target)), 0);
    });

    document.addEventListener('input', event => {
      if (language !== 'fr') return;
      setTimeout(() => scheduleRefresh(relevantRoot(event.target)), 0);
    });

    document.addEventListener('mouseover', event => {
      if (language !== 'fr') return;
      if (!event.target.closest?.('.flavour-node,.showcase-tab,.runway-row,.catalogue-row')) return;
      scheduleRefresh(relevantRoot(event.target));
    }, {passive: true});
  }

  function init() {
    mountSwitcher();
    bindSafeDynamicRefresh();
    setLanguage(language, false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();