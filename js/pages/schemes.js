/* ============================================
   js/pages/schemes.js
   ============================================ */

let activeSchemeFilter = 'all';
let selectedSchemeId   = null;

function isMobileSchemeView() {
  return window.innerWidth <= 860;
}

function renderSchemes() {
  const container = document.getElementById('page-schemes');
  container.innerHTML = `
    <div class="schemes-layout">

      <!-- LEFT: filter + list / dropdown -->
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

        <!-- Desktop list -->
        <div class="schemes-list" id="schemes-list"></div>

        <!-- Mobile dropdown -->
        <div class="schemes-mobile-selector hidden" id="schemes-mobile-selector"></div>
      </div>

      <!-- RIGHT / BELOW: detail view -->
      <div class="schemes-detail-panel" id="schemes-detail-panel">
        <div class="scheme-empty-state" id="scheme-empty-state">
          <div class="scheme-empty-icon">📋</div>
          <p>Please select a scheme</p>
        </div>
      </div>

    </div>
  `;

  renderSchemeList(activeSchemeFilter);

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

  // Re-render correctly if screen size changes
  window.addEventListener('resize', handleSchemesResize);
}

/* ---- Resize handling ---- */
function handleSchemesResize() {
  renderSchemeList(activeSchemeFilter);
}

/* ---- Render left panel list OR mobile dropdown ---- */
function renderSchemeList(filter) {
  const list = document.getElementById('schemes-list');
  const mobileSelector = document.getElementById('schemes-mobile-selector');

  const filtered = filter === 'all'
    ? SCHEMES
    : SCHEMES.filter(s => s.filterKey === filter);

  // Update count
  const countEl = document.getElementById('schemes-count');
  if (countEl) countEl.textContent = `${filtered.length} scheme${filtered.length !== 1 ? 's' : ''}`;

  // MOBILE = dropdown only
  if (isMobileSchemeView()) {
    if (list) list.innerHTML = '';
    if (list) list.classList.add('hidden');

    renderMobileDropdown(filtered);
    if (mobileSelector) mobileSelector.classList.remove('hidden');
    return;
  }

  // DESKTOP = original cards
  if (mobileSelector) {
    mobileSelector.innerHTML = '';
    mobileSelector.classList.add('hidden');
  }
  if (list) list.classList.remove('hidden');

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
}

/* ---- Mobile dropdown renderer ---- */
function renderMobileDropdown(filtered) {
  const mobileSelector = document.getElementById('schemes-mobile-selector');
  if (!mobileSelector) return;

  mobileSelector.innerHTML = `
    <div class="mobile-scheme-selector-wrap">
      <label class="mobile-scheme-label" for="mobile-scheme-select">
        Please select a scheme
      </label>

      <select id="mobile-scheme-select" class="mobile-scheme-select">
        <option value="">Please select a scheme</option>
        ${filtered.map(s => `
          <option value="${s.id}" ${s.id === selectedSchemeId ? 'selected' : ''}>
            ${s.name}
          </option>
        `).join('')}
      </select>
    </div>
  `;

  const select = document.getElementById('mobile-scheme-select');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const id = e.target.value;
    if (!id) {
      selectedSchemeId = null;
      showEmptyState();
      return;
    }
    selectScheme(id);
  });
}

/* ---- Select a scheme and show detail ---- */
function selectScheme(id) {
  selectedSchemeId = id;

  // Highlight selected item in desktop list
  document.querySelectorAll('.scheme-list-item').forEach(el => {
    el.classList.toggle('selected', el.dataset.id === id);
  });

  const scheme = SCHEMES.find(s => s.id === id);
  if (!scheme) return;

  const panel = document.getElementById('schemes-detail-panel');
  panel.innerHTML = buildSchemeDetail(scheme);

  // Sync mobile dropdown selection if needed
  const mobileSelect = document.getElementById('mobile-scheme-select');
  if (mobileSelect) mobileSelect.value = id;

  // Scroll detail panel to top
  panel.scrollTop = 0;
}

/* ---- Empty state ---- */
function showEmptyState() {
  const panel = document.getElementById('schemes-detail-panel');
  panel.innerHTML = `
    <div class="scheme-empty-state">
      <div class="scheme-empty-icon">📋</div>
      <p>Please select a scheme</p>
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