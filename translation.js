(() => {
  'use strict';

  const STORAGE_KEY = 'shama-language';
  const CATEGORIES = {
    'Rice': 'Riz',
    'Spices': 'Epices',
    'Sauces & Pastes': 'Sauces & Pates',
    'Miscellaneous': 'Divers',
    'Beverages': 'Boissons',
    'Flour & Lentiles': 'Farines & Lentilles',
    'Frozen': 'Surgeles',
    'Oils': 'Huiles',
    'Dry Fruits': 'Fruits secs'
  };

  const EN_TO_FR = {
    'Home': 'Accueil',
    'About us': 'A propos',
    'Catalogue': 'Catalogue',
    'Products': 'Produits',
    'Contact': 'Contact',
    'Contact us': 'Nous contacter',
    'Bulk order': 'Commande en gros',
    'Wholesale enquiries open': 'Demandes professionnelles ouvertes',
    'Authentic flavour across France since 2003': 'Des saveurs authentiques en France depuis 2003',
    'Explore by range': 'Explorer par gamme',
    'Full catalogue': 'Catalogue complet',
    'Need help choosing?': 'Besoin d aide pour choisir ?',
    'Talk to our team': 'Parler a notre equipe',
    'Quick links': 'Liens rapides',
    'Headquarters': 'Siege social',
    'Order now': 'Commander maintenant',
    'All rights reserved.': 'Tous droits reserves.',

    'From our table to yours': 'De notre table a la votre',
    'Tradition you can': 'Une tradition a',
    'taste.': 'savourer.',
    'Authentic South Asian flavours, carefully selected and brought to homes and businesses across France since 2003.': 'Des saveurs authentiques d Asie du Sud, soigneusement selectionnees et proposees aux particuliers et aux professionnels partout en France depuis 2003.',
    'Explore catalogue': 'Explorer le catalogue',
    'Our story': 'Notre histoire',
    'Years of trust': 'Annees de confiance',
    'Product ranges': 'Gammes de produits',
    'Flavour focused': 'Dedie aux saveurs',
    'AUTHENTIC TASTE': 'GOUT AUTHENTIQUE',
    'PREMIUM QUALITY': 'QUALITE PREMIUM',
    'TRUSTED SINCE 2003': 'UNE MARQUE DE CONFIANCE DEPUIS 2003',
    'WHOLESALE ACROSS FRANCE': 'VENTE EN GROS PARTOUT EN FRANCE',
    'Meet Shama': 'Decouvrez Shama',
    'Good food starts with': 'La bonne cuisine commence par de',
    'good ingredients.': 'bons ingredients.',
    'Welcome to Shama International S.A.S — committed to building long-term, mutually beneficial relationships since our foundation by Sardar Zahoor Iqbal in 2003.': 'Bienvenue chez Shama International S.A.S — engages a construire des relations durables et mutuellement benefiques depuis notre fondation par Sardar Zahoor Iqbal en 2003.',
    'Discover who we are': 'Decouvrir qui nous sommes',
    'Shop by category': 'Explorer par categorie',
    'A world of flavour': 'Un monde de saveurs',
    'View all products': 'Voir tous les produits',
    'Customer favourites': 'Les favoris de nos clients',
    'Made to move': 'Pense pour le',
    'in bulk.': 'gros.',
    'Popular Shama essentials for restaurants, retailers and food businesses.': 'Les incontournables Shama pour les restaurants, les commercants et les professionnels de l alimentation.',
    'Wholesale, made simple': 'Le gros, en toute simplicite',
    'From our warehouse': 'De notre entrepot',
    'to your business.': 'a votre entreprise.',
    'Choose a product, send your requirement and our team will help with MOQ, pricing and delivery availability.': 'Choisissez un produit, envoyez votre besoin et notre equipe vous accompagnera sur les quantites minimales, les tarifs et les disponibilites de livraison.',
    'Explore': 'Explorer',
    'Browse nine ranges and find the right products for your customers.': 'Parcourez nos neuf gammes et trouvez les produits adaptes a vos clients.',
    'Enquire': 'Demander',
    'Share cases and delivery details instantly by email or WhatsApp.': 'Partagez vos quantites et informations de livraison directement par e-mail ou WhatsApp.',
    'Receive': 'Recevoir',
    'Our team confirms price, availability and the next delivery step.': 'Notre equipe confirme le prix, la disponibilite et la prochaine etape de livraison.',
    'Our philosophy': 'Notre philosophie',
    'Quality without compromise.': 'La qualite sans compromis.',
    'We always strive to offer the best quality and the best service to our customers—combining trusted sourcing with the traditional taste you remember.': 'Nous nous efforcons toujours d offrir la meilleure qualite et le meilleur service, en associant un approvisionnement fiable aux saveurs traditionnelles que vous connaissez.',
    'Carefully selected': 'Soigneusement selectionne',
    'Rich in tradition': 'Riche en tradition',
    'Reliable service': 'Service fiable',
    'Learn more': 'En savoir plus',
    'Ready to order?': 'Pret a commander ?',
    'Bring authentic flavour home.': 'Invitez les saveurs authentiques chez vous.',

    'Explore the range': 'Explorer la gamme',
    'Move through': 'Parcourez',
    'our flavours': 'nos saveurs',
    'Now exploring': 'En cours d exploration',
    'Category': 'Categorie',
    'Select a favourite': 'Choisissez un favori',
    'Explore all rice': 'Voir tous les riz',
    'Choice': 'Selection',
    'Bestseller · Wholesale': 'Best-seller · Vente en gros',
    'Authentic quality': 'Qualite authentique',
    'Bulk availability': 'Disponibilite en gros',
    'Delivery support': 'Assistance livraison',
    'Request bulk quote': 'Demander un devis en gros',
    'Multiple pack sizes available': 'Plusieurs formats disponibles',

    'Our story.': 'Notre histoire.',
    'Building long-term, mutually beneficial business relationships since 2003.': 'Nous construisons des relations commerciales durables et mutuellement benefiques depuis 2003.',
    'Company profile': 'Profil de l entreprise',
    'Rooted in trust, growing through taste.': 'Fondee sur la confiance, portee par les saveurs.',
    'The foundations of Shama International were laid by Sardar Zahoor Iqbal in 2003. Since then, our commitment has stayed simple: understand our customers, extend our product variety, and offer excellent quality with dependable service.': 'Shama International a ete fondee par Sardar Zahoor Iqbal en 2003. Depuis, notre engagement reste simple : comprendre nos clients, elargir notre gamme et offrir une excellente qualite avec un service fiable.',
    'We ensure that our products deliver the flavour and traditional taste our customers know and love. Every relationship matters to us—from our suppliers and partners to the families enjoying Shama products.': 'Nous veillons a ce que nos produits offrent les saveurs traditionnelles que nos clients connaissent et apprecient. Chaque relation compte, de nos fournisseurs et partenaires jusqu aux familles qui choisissent Shama.',
    'Explore our range': 'Explorer notre gamme',
    'What guides us': 'Ce qui nous guide',
    'Made around our values': 'Construits autour de nos valeurs',
    'Philosophy': 'Philosophie',
    'We always strive to offer the best quality and the best service to our customers.': 'Nous nous efforcons toujours d offrir la meilleure qualite et le meilleur service a nos clients.',
    'Vision': 'Vision',
    'To grow our variety by listening closely and understanding customer requirements.': 'Faire evoluer notre offre en ecoutant attentivement et en comprenant les besoins de nos clients.',
    'Mission': 'Mission',
    'To deliver authentic flavour, traditional taste and long-lasting value in every product.': 'Offrir des saveurs authentiques, un gout traditionnel et une valeur durable dans chaque produit.',
    'Built on belief.': 'Batie sur une conviction.',
    'A story of courage, relationships and authentic flavour—growing from one vision in 2003.': 'Une histoire de courage, de relations et de saveurs authentiques, nee d une vision en 2003.',
    'Our beginning': 'Nos debuts',
    'More than food.': 'Bien plus que des produits.',
    'A promise kept.': 'Une promesse tenue.',
    'Shama International was founded with a clear belief: ethnic foods would become an everyday part of the French market. What began with courage and a small warehouse grew through trust, consistency and a deep respect for traditional taste.': 'Shama International est nee d une conviction claire : les produits alimentaires du monde prendraient une place quotidienne sur le marche francais. Une aventure commencee avec courage dans un petit entrepot et developpee grace a la confiance, la regularite et le respect des saveurs traditionnelles.',
    'Discover our products': 'Decouvrir nos produits',
    'The journey': 'Notre parcours',
    'One vision.': 'Une vision.',
    'Three decades of courage.': 'Trois decennies de courage.',
    'A new beginning': 'Un nouveau depart',
    'Shama is born': 'Naissance de Shama',
    'Today': 'Aujourd hui',
    'Growing together': 'Grandir ensemble',
    'The man behind Shama': 'L homme derriere Shama',
    'Pakistan Achievement Award': 'Pakistan Achievement Award',
    'Founder & Chairman': 'Fondateur & President',
    'What stays constant': 'Ce qui reste constant',
    'Our beliefs move': 'Nos convictions font',
    'the business forward.': 'avancer l entreprise.',
    'Relationships': 'Relations',
    'Good business begins with respect—for suppliers, customers and every co-worker.': 'Une bonne relation commerciale commence par le respect des fournisseurs, des clients et de chaque collaborateur.',
    'Quality': 'Qualite',
    'We strive to offer the best products with service our customers can depend on.': 'Nous cherchons a offrir les meilleurs produits avec un service sur lequel nos clients peuvent compter.',
    'Progress': 'Progres',
    'Listening to customers helps us introduce better products and grow with purpose.': 'Ecouter nos clients nous aide a proposer de meilleurs produits et a grandir avec un objectif clair.',
    'Vision & mission': 'Vision & mission',
    'Traditional taste.': 'Gout traditionnel.',
    'Worldwide ambition.': 'Ambition internationale.',
    'We believe in extending our variety by understanding what customers truly need—bringing the strength of Shama to more tables, every day.': 'Nous croyons au developpement de notre gamme en comprenant les besoins reels de nos clients afin d apporter chaque jour la force de Shama a davantage de tables.',
    'Build with us': 'Construire avec nous',

    'Our catalogue.': 'Notre catalogue.',
    'Nine delicious ranges. Hundreds of ways to make every meal feel special.': 'Neuf gammes savoureuses. Des centaines de facons de rendre chaque repas special.',
    'The flavour index.': 'L index des saveurs.',
    'Nine distinctive ranges. One trusted name. Move through the complete Shama collection.': 'Neuf gammes distinctes. Un nom de confiance. Decouvrez toute la collection Shama.',
    'Range': 'Gamme',
    'Selected range': 'Gamme selectionnee',
    'Shama collection': 'Collection Shama',
    'Enter the range': 'Voir la gamme',
    'Can’t find what you need?': 'Vous ne trouvez pas ce qu il vous faut ?',
    'Tell us what belongs': 'Dites-nous ce qui doit',
    'on your shelves.': 'etre sur vos rayons.',

    'Let’s talk food.': 'Parlons produits.',
    'Orders, trade enquiries or a simple hello—our team would love to hear from you.': 'Commandes, demandes professionnelles ou simple prise de contact : notre equipe est a votre ecoute.',
    'Get in touch': 'Contactez-nous',
    'We’re here to help.': 'Nous sommes la pour vous aider.',
    'Visit': 'Adresse',
    'Call': 'Telephone',
    'Email': 'E-mail',
    'Opening hours': 'Horaires d ouverture',
    'First name': 'Prenom',
    'Last name': 'Nom',
    'Phone': 'Telephone',
    'Message': 'Message',
    'Send message': 'Envoyer le message',
    'Thank you!': 'Merci !',
    'We’ll get back to you shortly.': 'Nous vous repondrons rapidement.',
    'Let’s build your order.': 'Construisons votre commande.',
    'Tell us what your business needs. Our wholesale team will help with pricing, MOQ and delivery.': 'Dites-nous ce dont votre entreprise a besoin. Notre equipe grossiste vous accompagnera sur les prix, les quantites minimales et la livraison.',
    'Bulk enquiry': 'Demande professionnelle',
    'Shama trade desk': 'Service commercial Shama',
    'Wholesale,': 'Le gros,',
    'without the': 'sans',
    'guesswork.': 'incertitude.',
    'Send one clear requirement and our team will return with availability, minimum quantity and delivery guidance.': 'Envoyez-nous un besoin clair et notre equipe vous repondra avec la disponibilite, la quantite minimale et les options de livraison.',
    'Choose your range': 'Choisissez votre gamme',
    'Share quantity & location': 'Indiquez quantite et lieu',
    'Receive your quotation': 'Recevez votre devis',
    'Call the trade desk': 'Appeler le service commercial',
    'Email us': 'Nous ecrire',
    'Bulk order request': 'Demande de commande en gros',
    'Usually replies within one business day': 'Reponse habituelle sous un jour ouvre',
    'Business / shop name': 'Entreprise / magasin',
    'Company name': 'Nom de l entreprise',
    'Your name': 'Votre nom',
    'Full name': 'Nom complet',
    'Phone / WhatsApp': 'Telephone / WhatsApp',
    'Product range': 'Gamme de produits',
    'Choose a range': 'Choisir une gamme',
    'Multiple categories': 'Plusieurs categories',
    'Estimated cases': 'Nombre estime de cartons',
    'Products or pack sizes': 'Produits ou formats',
    'Delivery city': 'Ville de livraison',
    'City': 'Ville',
    'Postcode': 'Code postal',
    'Anything else?': 'Autre information ?',
    'Send enquiry by': 'Envoyer la demande par',
    'Send enquiry on': 'Envoyer la demande sur',
    'Your details are used only to respond to this wholesale enquiry.': 'Vos informations sont utilisees uniquement pour repondre a cette demande professionnelle.',
    'Visit Shama': 'Visiter Shama',

    'Search the range': 'Rechercher dans la gamme',
    'Type a product name…': 'Saisissez un nom de produit…',
    'products': 'produits',
    'Selected product': 'Produit selectionne',
    'Contact us for available pack sizes': 'Contactez-nous pour les formats disponibles',
    'Wholesale supply': 'Approvisionnement en gros',
    'Add to bulk order': 'Ajouter a la commande en gros',
    'Product index': 'Index des produits',
    'Pack details': 'Details du conditionnement',
    'Pack sizes available': 'Formats disponibles',
    'No matching products found.': 'Aucun produit correspondant.',
    'Available in selected pack sizes': 'Disponible dans certains formats',
    'Buy in bulk': 'Acheter en gros',
    'Products are being prepared for this category. Please contact us for the current range.': 'Les produits de cette categorie sont en cours de preparation. Contactez-nous pour connaitre la gamme actuelle.',

    'Wholesale enquiry': 'Demande professionnelle',
    'Order in bulk': 'Commander en gros',
    'Tell us what you need. Send the prepared enquiry directly by email or WhatsApp.': 'Indiquez-nous votre besoin. Envoyez directement la demande preparee par e-mail ou WhatsApp.',
    'Quantity / cases': 'Quantite / cartons',
    'Business name': 'Nom de l entreprise',
    'Your shop or company': 'Votre magasin ou entreprise',
    'Delivery city / postcode': 'Ville / code postal de livraison',
    'Additional details': 'Informations complementaires',
    'Preferred pack size, delivery date, etc.': 'Format prefere, date de livraison, etc.',
    'Send by email': 'Envoyer par e-mail',
    'Send on WhatsApp': 'Envoyer sur WhatsApp',
    'This opens your email or WhatsApp app with the complete enquiry ready to send.': 'Votre application e-mail ou WhatsApp s ouvrira avec la demande complete prete a etre envoyee.',
    'Close': 'Fermer',

    'Fragrant grains for every table': 'Des grains parfumes pour toutes les tables',
    'Bold aroma, vivid colour': 'Aromes intenses, couleurs vives',
    'Instant depth and flavour': 'Une saveur riche en un instant',
    'Everyday pantry essentials': 'Les essentiels du garde-manger',
    'Refreshingly familiar': 'Fraicheur et saveurs familieres',
    'Wholesome kitchen staples': 'Des indispensables sains pour la cuisine',
    'Convenience, without compromise': 'Pratique, sans compromis',
    'The foundation of great food': 'La base d une bonne cuisine',
    'Naturally rich and satisfying': 'Naturellement riches et savoureux'
  };

  Object.assign(EN_TO_FR, CATEGORIES);
  const FR_TO_EN = Object.fromEntries(Object.entries(EN_TO_FR).map(([en, fr]) => [fr, en]));

  let language = localStorage.getItem(STORAGE_KEY) === 'fr' ? 'fr' : 'en';
  let observer;

  function preserveWhitespace(original, replacement) {
    const lead = original.match(/^\s*/)?.[0] || '';
    const tail = original.match(/\s*$/)?.[0] || '';
    return lead + replacement + tail;
  }

  function dynamicTranslate(value, target) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const map = target === 'fr' ? EN_TO_FR : FR_TO_EN;
    if (map[trimmed]) return preserveWhitespace(value, map[trimmed]);

    if (target === 'fr') {
      let m = trimmed.match(/^Explore (.+)$/);
      if (m && CATEGORIES[m[1]]) return preserveWhitespace(value, `Explorer ${CATEGORIES[m[1]]}`);
      m = trimmed.match(/^Products \/ (.+)$/);
      if (m && CATEGORIES[m[1]]) return preserveWhitespace(value, `Produits / ${CATEGORIES[m[1]]}`);
      m = trimmed.match(/^Shama (.+)$/);
      if (m && CATEGORIES[m[1]]) return preserveWhitespace(value, `Shama ${CATEGORIES[m[1]]}`);
      m = trimmed.match(/^(.+) — explore the complete Shama range\.$/);
      if (m && EN_TO_FR[m[1]]) return preserveWhitespace(value, `${EN_TO_FR[m[1]]} — decouvrez toute la gamme Shama.`);
      m = trimmed.match(/^(.+)\. Discover authentic Shama products selected for homes, restaurants and retailers across France\.$/);
      if (m && EN_TO_FR[m[1]]) return preserveWhitespace(value, `${EN_TO_FR[m[1]]}. Decouvrez des produits Shama authentiques selectionnes pour les particuliers, restaurants et commercants partout en France.`);
      m = trimmed.match(/^(.+)\. Explore authentic products selected for retailers, restaurants and homes\.$/);
      if (m && EN_TO_FR[m[1]]) return preserveWhitespace(value, `${EN_TO_FR[m[1]]}. Decouvrez des produits authentiques selectionnes pour les commercants, restaurants et particuliers.`);
    }
    return value;
  }

  function translateTextNode(node, target) {
    if (!node || !node.nodeValue) return;
    const parent = node.parentElement;
    if (!parent || parent.closest('#shama-language-switch') || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName)) return;
    const next = dynamicTranslate(node.nodeValue, target);
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  function translateAttributes(root, target) {
    const map = target === 'fr' ? EN_TO_FR : FR_TO_EN;
    const elements = root.nodeType === 1 ? [root, ...root.querySelectorAll('*')] : [];
    for (const el of elements) {
      if (el.closest?.('#shama-language-switch')) continue;
      for (const attr of ['placeholder', 'aria-label', 'title']) {
        const value = el.getAttribute?.(attr);
        if (!value) continue;
        const trimmed = value.trim();
        if (map[trimmed]) el.setAttribute(attr, map[trimmed]);
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
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => translateTextNode(node, target));
    translateAttributes(root, target);
  }

  function translateTitle(target) {
    const categoryReverse = Object.fromEntries(Object.entries(CATEGORIES).map(([en, fr]) => [fr, en]));
    const base = {
      'Shama International | Authentic Flavours': 'Shama International | Saveurs Authentiques',
      'About Us | Shama International': 'A propos | Shama International',
      'Catalogue | Shama International': 'Catalogue | Shama International',
      'Contact Us | Shama International': 'Contact | Shama International'
    };
    if (target === 'fr') {
      if (base[document.title]) document.title = base[document.title];
      else {
        const m = document.title.match(/^(.+) \| Shama International$/);
        if (m && CATEGORIES[m[1]]) document.title = `${CATEGORIES[m[1]]} | Shama International`;
      }
    } else {
      const reverse = Object.fromEntries(Object.entries(base).map(([en, fr]) => [fr, en]));
      if (reverse[document.title]) document.title = reverse[document.title];
      else {
        const m = document.title.match(/^(.+) \| Shama International$/);
        if (m && categoryReverse[m[1]]) document.title = `${categoryReverse[m[1]]} | Shama International`;
      }
    }
  }

  function setLanguage(next, save = true) {
    if (next !== 'en' && next !== 'fr') return;
    if (observer) observer.disconnect();
    language = next;
    document.documentElement.lang = next;
    translateRoot(document.body, next);
    translateTitle(next);
    const control = document.querySelector('#shama-language-switch');
    if (control) {
      control.querySelectorAll('button').forEach(btn => {
        const active = btn.dataset.lang === next;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }
    if (save) localStorage.setItem(STORAGE_KEY, next);
    startObserver();
  }

  function startObserver() {
    if (!observer) {
      observer = new MutationObserver(mutations => {
        if (language !== 'fr') return;
        observer.disconnect();
        for (const mutation of mutations) {
          if (mutation.type === 'characterData') translateTextNode(mutation.target, 'fr');
          mutation.addedNodes?.forEach(node => translateRoot(node, 'fr'));
        }
        startObserver();
      });
    }
    observer.observe(document.body, {subtree: true, childList: true, characterData: true});
  }

  function mountSwitcher() {
    if (document.querySelector('#shama-language-switch')) return;
    const style = document.createElement('style');
    style.textContent = `
      #shama-language-switch{position:fixed;left:18px;bottom:18px;z-index:2147483000;display:flex;align-items:center;gap:3px;padding:4px;border:1px solid rgba(8,45,37,.16);border-radius:999px;background:rgba(255,255,255,.96);box-shadow:0 8px 28px rgba(0,0,0,.14);backdrop-filter:blur(10px);font-family:DM Sans,Arial,sans-serif}
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

  function init() {
    mountSwitcher();
    setLanguage(language, false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
