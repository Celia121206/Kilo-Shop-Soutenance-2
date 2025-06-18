const logo = document.querySelector('.animated-logo');
let isHidden = false;

window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;

  if (scrollY < 300) {
    const scale = 1 + scrollY / 1000;
    const opacity = 1 - scrollY / 300;
    logo.style.transform = `scale(${scale})`;
    logo.style.opacity = opacity;
    logo.style.display = 'block';
    isHidden = false;
  } else if (!isHidden) {
    logo.style.opacity = '0';
    setTimeout(() => {
      logo.style.display = 'none';
    }, 300);
    isHidden = true;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".card-poster img");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.7
  });
  images.forEach((img) => {
    observer.observe(img);
  });

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const carousel = document.querySelector('.affiche-reduite');
  let currentSlide = 0;
  const totalSlides = carousel ? carousel.children.length : 0;

  function updateCarousel() {
    if (carousel) {
      const slideWidth = carousel.offsetWidth / totalSlides;
      carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      console.log('Current slide:', currentSlide);
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlide < 3) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
      updateCarousel();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      console.log('Prev clicked, current:', currentSlide);
      if (currentSlide > 0) {
        currentSlide--;
      } else {
        currentSlide = 3;
      }
      updateCarousel();
    });
  }
});


const imageConfig = {
  fr: {
    img1: 'images/affiche-20-euro-per-kilo-fr.png',
    img2: 'images/affiche-30-euro-per-kilo-fr.png',
    img3: 'images/affiche-40-euro-per-kilo-fr.png',
    img4: 'images/affiche-60-euro-per-kilo-fr.png'
  },
  en: {
    img1: 'images/affiche-20-euro-per-kilo-en.png',
    img2: 'images/affiche-30-euro-per-kilo-en.png',
    img3: 'images/affiche-40-euro-per-kilo-en.png',
    img4: 'images/affiche-60-euro-per-kilo-en.png'
  }
};


function updateImages(lang) {
  const img1 = document.querySelector('.img1');
  const img2 = document.querySelector('.img2');
  const img3 = document.querySelector('.img3');
  const img4 = document.querySelector('.img4');

  if (img1) img1.src = imageConfig[lang].img1;
  if (img2) img2.src = imageConfig[lang].img2;
  if (img3) img3.src = imageConfig[lang].img3;
  if (img4) img4.src = imageConfig[lang].img4;
}

const translations = {
  en: {
    navConcept: "CONCEPT",
    navMission: "OUR MISSION",
    navNews: "NEWS",
    navShops: "SHOPS",
    navLooks: "LOOKS",

    conceptTitle: "Our Concept",
    conceptSubtitle: "Buy by weight, not by piece!",
    conceptDescription:
      "At Kilo Shop, we do things differently. Here, second-hand clothes are sold by weight, not by the piece. It's simple: pick what you like, we weigh it, and boom, the price is based on the weight.",

    functioningTitle: "HOW DOES IT WORK?",
    step1: "Step 1",
    choose: "CHOOSE",
    step2: "Step 2",
    weigh: "WEIGH",
    step3: "Step 3",
    takeaway: "TAKE AWAY",

    posterTitle: "WHAT IS THE PRICE PER KILO?",

    clothesTitle: "WHERE DO OUR CLOTHES COME FROM?",

    brandsTitle: "And what about the brands?",

    newsletterTitle: "NEWS YOU CAN'T MISS!",
    newsletterDescription: "Join our newsletter for a dose of inspiration<br>and positive energy.",
    emailPlaceholder: "Email",
    sendButton: "Send",

    footerLegal: "Legal Notice",
    footerPolicy: "Data Protection Policy",
    footerCGV: "Terms and Conditions",
    footerContact: "Contact & FAQ",
    footerJobs: "Recruitment",
    footerFranchise: "Become a Franchisee",
    copyright: "KILO SHOP - ALL RIGHTS RESERVED 2025"
  },
  fr: {
    navConcept: "CONCEPT",
    navMission: "NOTRE MISSION",
    navNews: "ACTUS",
    navShops: "SHOPS",
    navLooks: "LOOKS",

    conceptTitle: "Notre concept",
    conceptSubtitle: "Achetez au kilo pas à la pièce !",
    conceptDescription:
      "Chez Kilo Shop, on fait les choses autrement. Ici, les vêtements de seconde main se vendent au kilo pas à la pièce. C'est simple : vous choisissez ce que vous aimez, on pèse, et hop, c'est le poids qui fait le prix.",

    functioningTitle: "COMMENT ÇA MARCHE ?",
    step1: "Étape 1",
    choose: "CHOISISSEZ",
    step2: "Étape 2",
    weigh: "PESEZ",
    step3: "Étape 3",
    takeaway: "EMPORTEZ",

    posterTitle: "C'EST QUOI LE PRIX AU KILO ?",

    clothesTitle: "MAIS D'OÚ VIENNENT NOS VÊTEMENTS ?",

    brandsTitle: "Et sinon à propos des marques ?",

    newsletterTitle: "L'ACTU À NE PAS RATER !",
    newsletterDescription: "Rejoignez notre newsletter pour une dose d'inspiration<br />et d'énergie positive.",
    emailPlaceholder: "Email",
    sendButton: "Envoyer",

    footerLegal: "Mentions légales",
    footerPolicy: "Politique de protection de données",
    footerCGV: "Conditions générales de vente",
    footerContact: "Contact & faq",
    footerJobs: "Recrutement",
    footerFranchise: "Devenir Franchisé",
    copyright: "KILO SHOP - TOUS DROITS RÉSERVÉS 2025"
  }
};


document.querySelectorAll('.option-langue').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const lang = e.target.dataset.lang;


    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
          el.placeholder = translations[lang]['emailPlaceholder'];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });


    updateImages(lang);
  });
});

function createMobileMenu() {
  const mobileMenuOverlay = document.createElement('div');
  mobileMenuOverlay.className = 'mobile-menu-overlay';
  mobileMenuOverlay.id = 'mobile-menu-overlay';

  mobileMenuOverlay.innerHTML = `
      <div class="mobile-menu-header">
        <button class="close-menu" id="close-menu">✕</button>
      </div>
      <nav class="mobile-menu-nav">
        <a href="#" data-i18n="navHome">ACCUEIL</a>
        <a href="#" data-i18n="navMission">NOTRE MISSION</a>
        <a href="#" data-i18n="navConcept">CONCEPT</a>
        <a href="#" data-i18n="navActus">ACTUS</a>
        <a href="#" data-i18n="navShops">SHOPS</a>
      </nav>
      <div class="mobile-menu-footer">
        <i class="fa-solid fa-globe"></i>
      </div>
    `;

  document.body.appendChild(mobileMenuOverlay);
}

document.addEventListener('DOMContentLoaded', function () {
  const menuBurger = document.getElementById('menu-burger');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const closeMenu = document.getElementById('close-menu');

  function openMenu() {
    mobileMenuOverlay.classList.add('active');
    mobileMenuBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenuFunction() {
    mobileMenuOverlay.classList.remove('active');
    mobileMenuBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBurger) {
    menuBurger.addEventListener('click', openMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', closeMenuFunction);
  }

  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMenuFunction);
  }

  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeMenuFunction();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
      closeMenuFunction();
    }
  });

  const boutonLangue = document.getElementById('language-button');
  const listeLangues = document.getElementById('language-list');

  if (boutonLangue && listeLangues) {
    boutonLangue.addEventListener('click', function (e) {
      e.stopPropagation();
      listeLangues.style.display = listeLangues.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function () {
      listeLangues.style.display = 'none';
    });

    listeLangues.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
});