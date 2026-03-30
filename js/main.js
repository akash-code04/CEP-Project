/* ============================================
   js/main.js — Entry point, boots everything
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render page content (hospitals rendered lazily on first tab visit)
  renderHome();
  renderSchemes();
  renderOrgan();

  // 2. Wire up tab switching BEFORE showing any tab
  initTabs();

  // 3. Wire up language toggle
  initLang();

  // 4. Show home tab by default
  showTab('home');
});
