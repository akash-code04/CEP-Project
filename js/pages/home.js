/* ============================================
   js/pages/home.js — Home tab renderer
   ============================================ */

function renderHome() {
  const container = document.getElementById('page-home');
  container.innerHTML = `
    <!-- HERO -->
    <div class="hero">
      <span class="hero-eyebrow" id="hero-eyebrow">Pimpri Chinchwad · PCMC</span>
      <h1 id="hero-title">Healthcare for every citizen of Pimpri Chinchwad</h1>
      <p class="hero-sub" id="hero-sub">
        Arogya Sahayak helps PCMC residents find government hospitals, understand health schemes,
        and learn about organ donation — all in one place, completely free.
      </p>
      <div class="cta-row">
        <button class="cta-btn btn-teal" data-goto="hospitals">
          <span class="cta-icon cta-icon-teal">+</span>
          <span id="cta-btn1-text">Find nearby hospital</span>
        </button>
        <button class="cta-btn btn-amber" data-goto="schemes">
          <span class="cta-icon cta-icon-amber">✓</span>
          <span id="cta-btn2-text">View govt. schemes</span>
        </button>
        <button class="cta-btn btn-coral" data-goto="organ">
          <span class="cta-icon cta-icon-coral">♥</span>
          <span id="cta-btn3-text">Organ donation</span>
        </button>
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

    <!-- PURPOSE STRIP -->
    <div class="purpose-strip">
      <p id="purpose-text">
        Arogya Sahayak is a student-built platform to bridge the information gap between
        PCMC residents and the healthcare resources they deserve. Currently serving
        Pimpri Chinchwad — with plans to expand across Maharashtra.
      </p>
      <span class="expand-badge" id="expand-badge">Currently: PCMC · Expanding soon</span>
    </div>

    <!-- HOW TO USE -->
    <div class="how-section">
      <h2 class="section-title">How Arogya Sahayak helps you</h2>
      <div class="how-grid">
        <div class="how-card fade-up" style="animation-delay:0.05s">
          <div class="how-icon" style="background:#E1F5EE">🏥</div>
          <h3 id="how1-title">Find hospitals</h3>
          <p id="how1-desc">Search or use your location to find the nearest PCMC government hospital with available services.</p>
        </div>
        <div class="how-card fade-up" style="animation-delay:0.15s">
          <div class="how-icon" style="background:#FAEEDA">📋</div>
          <h3 id="how2-title">Explore schemes</h3>
          <p id="how2-desc">Browse government health schemes you may be eligible for — free care, maternity benefits, and more.</p>
        </div>
        <div class="how-card fade-up" style="animation-delay:0.25s">
          <div class="how-icon" style="background:#FAECE7">❤️</div>
          <h3 id="how3-title">Learn &amp; pledge</h3>
          <p id="how3-desc">Understand organ donation and register your pledge through NOTTO in under 5 minutes.</p>
        </div>
      </div>
    </div>
  `;

  // Animate counters
  animateCounter('stat1-num', 12, 1200);
  animateCounter('stat2-num', 8,  1400);
  animateCounterText('stat3-num', '4.2L+', 1600);
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
  setTimeout(() => { el.textContent = finalText; }, delay);
}
