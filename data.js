const ecoBoatData = {
  projectName: 'EcoBoat Suquía',
  version: '1.0',
  year: 2025,
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
  });
}

function initProjectData() {
  if (window.projectData) return;
  window.projectData = ecoBoatData;
}

document.addEventListener('DOMContentLoaded', () => {
  initProjectData();
  initMobileMenu();
  console.info('EcoBoat Suquía data.js cargado', ecoBoatData);
});
