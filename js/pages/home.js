/* ============================================
   js/pages/home.js — Home tab renderer
   ============================================ */

function renderHome() {
  const container = document.getElementById('page-home');
  container.innerHTML = `
    <section class="home-page">
      <!-- HERO -->
      <div class="hero">
        <span class="hero-eyebrow" id="hero-eyebrow">Pimpri Chinchwad · PCMC</span>
        <h1 id="hero-title">Healthcare for every citizen of Pimpri Chinchwad</h1>

        <div class="how-section">
          <h2 class="section-title">How Arogya Sahayak helps you</h2>

          <div class="how-grid">
            <div class="how-card">
              <div class="how-icon">🏥</div>
              <h3>Find hospitals</h3>
              <p>Search or use your location to find the nearest PCMC government hospital with available services.</p>
              <button class="cta-pill cta-pill--teal" data-tab-target="hospitals">
                Find nearby hospital
              </button>
            </div>

            <div class="how-card">
              <div class="how-icon">📋</div>
              <h3>Explore schemes</h3>
              <p>Browse government health schemes you may be eligible for — free care, maternity benefits, and more.</p>
              <button class="cta-pill cta-pill--gold" data-tab-target="schemes">
                View govt. schemes
              </button>
            </div>

            <div class="how-card">
              <div class="how-icon">💗</div>
              <h3>Learn & pledge</h3>
              <p>Understand organ donation and register your pledge through NOTTO in under 5 minutes.</p>
              <button class="cta-pill cta-pill--rose" data-tab-target="organ">
                Organ donation
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- STATS BAR -->
      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-num" id="stat1-num">0</span>
          <span class="stat-label" id="stat1-label">Govt. hospitals in PCMC</span>
        </div>
        <div class="stat-item">
          <span class="stat-num" id="stat2-num">0</span>
          <span class="stat-label" id="stat2-label">Active health schemes</span>
        </div>
        <div class="stat-item">
          <span class="stat-num" id="stat3-num">0</span>
          <span class="stat-label" id="stat3-label">Registered donors in MH</span>
        </div>
        <div class="stat-item">
          <span class="stat-num" id="stat4-num">Free</span>
          <span class="stat-label" id="stat4-label">All services listed</span>
        </div>
      </div>
    </section>
  `;

  // Animate counters
  animateCounter('stat1-num', 12, 1200);
  animateCounter('stat2-num', 8, 1400);
  animateCounterText('stat3-num', '4.2L+', 1600);

  // Make card buttons work
  document.querySelectorAll('#page-home [data-tab-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab-target');
      if (!tab) return;

      // Trigger matching nav tab if available
      const targetTabBtn = document.querySelector(`[data-tab="${tab}"]`);
      if (targetTabBtn) {
        targetTabBtn.click();
      }
    });
  });
}

function animateCounter(id, target, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);

    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }

  requestAnimationFrame(step);
}

function animateCounterText(id, finalText, delay) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = '0';
  setTimeout(() => {
    el.textContent = finalText;
  }, delay);
}