/* ==========================================
   SafeGuard - Interactive JavaScript Logic
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. STICKY NAVBAR SCROLL EFFECT
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Navigation Highlight
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. INTERSECTION OBSERVER FOR FADE-UP ANIMATIONS
  const fadeElements = document.querySelectorAll('.fade-up');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  // 3. MOBILE MENU TOGGLE
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.style.display = navLinksContainer.style.display === 'flex' ? 'none' : 'flex';
      navLinksContainer.style.flexDirection = 'column';
      navLinksContainer.style.position = 'absolute';
      navLinksContainer.style.top = '100%';
      navLinksContainer.style.left = '0';
      navLinksContainer.style.right = '0';
      navLinksContainer.style.backgroundColor = '#FAFAF8';
      navLinksContainer.style.padding = '20px';
      navLinksContainer.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
  }

});

// 4. INTERACTIVE DIGIPIN ENCODER
function updateDigipin() {
  const latInput = document.getElementById('lat-input').value.trim();
  const lngInput = document.getElementById('lng-input').value.trim();
  const output = document.getElementById('digipin-output');

  if (!latInput || !lngInput) {
    output.textContent = 'ENTER LAT & LNG';
    return;
  }

  const lat = parseFloat(latInput);
  const lng = parseFloat(lngInput);

  if (isNaN(lat) || isNaN(lng)) {
    output.textContent = 'INVALID COORDS';
    return;
  }

  // Simulated DIGIPIN Grid Algorithm (10-character code)
  const charSet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let hash = Math.abs(Math.floor((lat * 100000 + lng * 100000))) % (charSet.length ** 8);
  
  let codeStr = '';
  for (let i = 0; i < 8; i++) {
    codeStr += charSet[hash % charSet.length];
    hash = Math.floor(hash / charSet.length);
  }

  const formatted = `${codeStr.substring(0,3)}-${codeStr.substring(3,6)}-${codeStr.substring(6,8)}5M`;
  output.textContent = formatted;
}

function presetCoordinates() {
  document.getElementById('lat-input').value = '28.931079';
  document.getElementById('lng-input').value = '79.957836';
  document.getElementById('digipin-output').textContent = '383-CFF-5L5M';
}

// 5. INTERACTIVE SOS MODAL SIMULATION
function openSosModal() {
  const modal = document.getElementById('sosModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeSosModal() {
  const modal = document.getElementById('sosModal');
  if (modal) {
    modal.classList.remove('active');
  }
}
