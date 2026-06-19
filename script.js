const ecoBoatData = {
  projectName: 'EcoBoat Suquía',
  version: '1.0',
  year: 2025,
  theme: 'electrónica y medioambiente',
  nav: [
    { label: 'Inicio', href: 'index.html' },
    { label: 'Problema', href: 'problema.html' },
    { label: 'Solución', href: 'solucion.html' },
    { label: 'Investigación', href: 'investigacion.html' },
    { label: 'Impacto', href: 'impacto.html' },
    { label: 'Galería', href: 'galeria.html' },
    { label: 'Acerca', href: 'acerca.html' }
  ]
};

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
  });
}

function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('link-active');
    }
  });
}

function initInteractiveEffects() {
  const interactiveCards = document.querySelectorAll('.blueprint-card, .gallery-card, .feature-image, .flow-step, .card-photo, .footer-section');
  interactiveCards.forEach((card) => {
    card.addEventListener('mouseenter', () => card.classList.add('interact-active'));
    card.addEventListener('mouseleave', () => card.classList.remove('interact-active'));
  });

  const actionElements = document.querySelectorAll('a, button');
  actionElements.forEach((item) => {
    item.addEventListener('mousedown', () => item.classList.add('link-active'));
    item.addEventListener('mouseup', () => item.classList.remove('link-active'));
    item.addEventListener('mouseleave', () => item.classList.remove('link-active'));
  });
}

function initPageBanners() {
  const banners = document.querySelectorAll('[data-banner-color]');
  banners.forEach((banner) => {
    const color = banner.dataset.bannerColor;
    banner.style.background = `radial-gradient(circle at top left, ${color}22, transparent 40%), radial-gradient(circle at bottom right, ${color}14, transparent 40%), rgba(255,255,255,0.92)`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  window.projectData = ecoBoatData;
  initMobileMenu();
  initActiveNavLink();
  initInteractiveEffects();
  initPageBanners();
  console.info('EcoBoat Suquía cargado con script.js', ecoBoatData);
});
