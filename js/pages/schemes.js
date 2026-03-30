/* ============================================
   js/pages/schemes.js
   ============================================ */

let activeFilter = 'all';

function renderSchemes() {
  const container = document.getElementById('page-schemes');
  container.innerHTML = `
    <div class="schemes-page">
      <div class="schemes-header">
        <h2>Government Health Schemes</h2>
        <p>Find schemes you or your family may be eligible for — all free, all verified.</p>
      </div>
      <div class="filter-row" id="filter-row">
        <button class="filter-pill active" data-filter="all">All schemes</button>
        <button class="filter-pill" data-filter="maternity">Maternity</button>
        <button class="filter-pill" data-filter="bpl">BPL families</button>
        <button class="filter-pill" data-filter="children">Children</button>
        <button class="filter-pill" data-filter="all">All citizens</button>
      </div>
      <div class="schemes-grid" id="schemes-grid"></div>
    </div>
  `;

  renderSchemeCards('all');

  // Filter pill clicks
  document.getElementById('filter-row').addEventListener('click', e => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeFilter = pill.dataset.filter;
    renderSchemeCards(activeFilter);
  });
}

function renderSchemeCards(filter) {
  const grid = document.getElementById('schemes-grid');
  const filtered = filter === 'all'
    ? SCHEMES
    : SCHEMES.filter(s => s.filterKey === filter);

  grid.innerHTML = '';
  filtered.forEach((s, i) => {
    const card = createSchemeCard(s, i);
    grid.appendChild(card);
  });
}

function createSchemeCard(s, delay) {
  const div = document.createElement('div');
  div.className = 'scheme-card fade-up';
  div.dataset.id = s.id;
  div.style.animationDelay = (delay * 0.08) + 's';

  const eligibilityItems = s.eligibility.map(e => `<li>${e}</li>`).join('');
  const documentItems = s.documents.map(d => `<li>${d}</li>`).join('');

  div.innerHTML = `
    <div class="scheme-card-top">
      <div class="scheme-card-header">
        <div class="scheme-icon" style="background:${s.iconBg}">${s.icon}</div>
        <span class="scheme-card-title">${s.name}</span>
      </div>
      <span class="scheme-category-badge ${s.categoryClass}">${s.category}</span>
      <p class="scheme-desc">${s.description}</p>
      <div class="scheme-expand-btn">
        Eligibility &amp; apply
        <span class="scheme-expand-arrow">›</span>
      </div>
    </div>
    <div class="scheme-card-body">
      <div class="scheme-detail-section">
        <h4>Who can apply</h4>
        <ul>${eligibilityItems}</ul>
      </div>
      <div class="scheme-detail-section">
        <h4>Documents needed</h4>
        <ul>${documentItems}</ul>
      </div>
      <a class="scheme-apply-link" href="${s.applyUrl}" target="_blank" rel="noopener">
        ${s.applyLabel} →
      </a>
    </div>
  `;

  div.querySelector('.scheme-card-top').addEventListener('click', () => {
    div.classList.toggle('open');
  });

  return div;
}
