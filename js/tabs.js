/* ============================================
   js/tabs.js — Tab switching logic
   ============================================ */

let hospitalsRendered = false;

function showTab(tabName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Deactivate all nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Show selected page
  const page = document.getElementById('page-' + tabName);
  if (page) page.classList.add('active');

  // Activate matching nav links (desktop + mobile)
  document.querySelectorAll(`[data-tab="${tabName}"]`).forEach(l => l.classList.add('active'));

  // Close mobile nav
  document.getElementById('mobile-nav').classList.remove('open');

  // Lazily render + init hospitals the first time that tab opens
  // (map needs a visible, sized div to initialise correctly)
  if (tabName === 'hospitals') {
    if (!hospitalsRendered) {
      renderHospitals();
      hospitalsRendered = true;
    }
    // Small delay so the page is visible and the #map div has dimensions
    setTimeout(() => initMap(), 50);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initTabs() {
  // Desktop + mobile nav links
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // CTA buttons on home page navigate to tabs
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-goto]');
    if (btn) showTab(btn.dataset.goto);
  });
}
