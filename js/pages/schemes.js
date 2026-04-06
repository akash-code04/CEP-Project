/* ============================================
   js/pages/schemes.js
   ============================================ */

let activeSchemeFilter = 'all';
let selectedSchemeId   = null;

function renderSchemes() {
  const container = document.getElementById('page-schemes');
  container.innerHTML = `
    <div class="schemes-layout">

      <!-- LEFT: filter + list -->
      <div class="schemes-panel">
        <div class="schemes-filter-bar">
          <div class="schemes-filter-bar-title">Filter by category</div>
          <div class="filter-row" id="scheme-filter-row">
            <button class="filter-pill active" data-filter="all">All</button>
            <button class="filter-pill" data-filter="maternity">Maternity</button>
            <button class="filter-pill" data-filter="bpl">BPL families</button>
            <button class="filter-pill" data-filter="children">Children</button>
          </div>
          <div class="schemes-count" id="schemes-count"></div>
        </div>
        <div class="schemes-list" id="schemes-list"></div>
      </div>

      <!-- RIGHT: detail view -->
      <div class="schemes-detail-panel" id="schemes-detail-panel">
        <div class="scheme-empty-state" id="scheme-empty-state">
          <div class="scheme-empty-icon">📋</div>
          <p>Select a scheme from the list to see full details, eligibility, and how to apply.</p>
        </div>
      </div>

    </div>
  `;

  renderSchemeList('all');

  // Filter pills
  document.getElementById('scheme-filter-row').addEventListener('click', e => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    document.querySelectorAll('#scheme-filter-row .filter-pill')
      .forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeSchemeFilter = pill.dataset.filter;
    selectedSchemeId = null;
    renderSchemeList(activeSchemeFilter);
    showEmptyState();
  });
}

/* ---- Render left panel list ---- */
function renderSchemeList(filter) {
  const list = document.getElementById('schemes-list');
  const filtered = filter === 'all'
    ? SCHEMES
    : SCHEMES.filter(s => s.filterKey === filter);

  list.innerHTML = '';
  filtered.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'scheme-list-item fade-up';
    item.dataset.id = s.id;
    item.style.animationDelay = (i * 0.04) + 's';
    if (s.id === selectedSchemeId) item.classList.add('selected');

    item.innerHTML = `
      <div class="scheme-list-icon" style="background:${s.iconBg}">${s.icon}</div>
      <div class="scheme-list-info">
        <div class="scheme-list-name">${s.name}</div>
        <span class="scheme-list-badge ${s.categoryClass}">${s.category}</span>
      </div>
    `;

    item.addEventListener('click', () => selectScheme(s.id));
    list.appendChild(item);
  });

  // Update count
  const countEl = document.getElementById('schemes-count');
  if (countEl) countEl.textContent = `${filtered.length} scheme${filtered.length !== 1 ? 's' : ''}`;
}

/* ---- Select a scheme and show detail ---- */
function selectScheme(id) {
  selectedSchemeId = id;

  // Highlight selected item in list
  document.querySelectorAll('.scheme-list-item').forEach(el => {
    el.classList.toggle('selected', el.dataset.id === id);
  });

  const scheme = SCHEMES.find(s => s.id === id);
  if (!scheme) return;

  const panel = document.getElementById('schemes-detail-panel');
  panel.innerHTML = buildSchemeDetail(scheme);

  // Scroll detail panel to top
  panel.scrollTop = 0;
}

function showEmptyState() {
  const panel = document.getElementById('schemes-detail-panel');
  panel.innerHTML = `
    <div class="scheme-empty-state">
      <div class="scheme-empty-icon">📋</div>
      <p>Select a scheme from the list to see full details, eligibility, and how to apply.</p>
    </div>
  `;
}

/* ---- Build the full detail view ---- */
function buildSchemeDetail(s) {
  const eligibilityItems = s.eligibility
    .map(e => `<li>${e}</li>`).join('');

  const stepsHtml = s.applySteps
    .map((step, i) => `
      <div class="scheme-step">
        <div class="scheme-step-num">${i + 1}</div>
        <div class="scheme-step-text">
          <strong>${step.title}</strong>
          <span>${step.desc}</span>
        </div>
      </div>
    `).join('');

  return `
    <div class="scheme-detail">

      <!-- Header -->
      <div class="scheme-detail-hero">
        <div class="scheme-detail-icon" style="background:${s.iconBg}">${s.icon}</div>
        <div class="scheme-detail-hero-text">
          <h2>${s.name}</h2>
          <div class="scheme-detail-badges">
            <span class="scheme-detail-badge ${s.categoryClass}">${s.category}</span>
            ${s.benefit ? `<span class="scheme-detail-badge tag-green">${s.benefit}</span>` : ''}
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="scheme-summary-box">${s.description}</div>

      <!-- Eligibility -->
      <div class="scheme-section">
        <div class="scheme-section-title">Who can apply</div>
        <ul class="scheme-eligibility-list">${eligibilityItems}</ul>
      </div>

      <!-- Documents -->
      <div class="scheme-section">
        <div class="scheme-section-title">Documents needed</div>
        <div class="scheme-docs-grid">
          ${s.documents.map(d => `
            <div class="scheme-doc-item">
              <div class="scheme-doc-icon">📄</div>
              <span class="scheme-doc-label">${d}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- How to apply steps -->
      <div class="scheme-section">
        <div class="scheme-section-title">How to apply — step by step</div>
        <div class="scheme-steps">${stepsHtml}</div>
      </div>

      <!-- Apply CTA -->
      <div class="scheme-section">
        <div class="scheme-section-title">Apply now</div>
        <div class="scheme-apply-cta">
          <a class="scheme-apply-btn" href="${s.applyUrl}" target="_blank" rel="noopener">
            ${s.applyLabel} →
          </a>
          ${s.helpline ? `<div class="scheme-helpline">Helpline<br><strong>${s.helpline}</strong></div>` : ''}
        </div>
      </div>

    </div>
  `;
}