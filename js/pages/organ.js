/* ============================================
   js/pages/organ.js
   ============================================ */

const MYTHS = [
  {
    myth: 'Doctors won\'t try as hard to save me if I\'m a donor.',
    fact:  'Donor status is never shared with trauma teams. Saving your life is always the first priority.',
  },
  {
    myth: 'My religion prohibits organ donation.',
    fact:  'All major religions in India — Hindu, Muslim, Christian, Sikh — support voluntary organ donation.',
  },
  {
    myth: 'Only young and healthy people can donate.',
    fact:  'There is no age limit. Medical professionals assess each case individually. Elderly donors regularly save lives.',
  },
  {
    myth: 'Rich people get organs first through the system.',
    fact:  'NOTTO allocates organs purely on medical urgency, blood type match, and waiting time — never on wealth.',
  },
  {
    myth: 'Donating organs disfigures the body.',
    fact:  'Organ recovery is a surgical procedure performed with full respect. The body is restored and suitable for open-casket services.',
  },
  {
    myth: 'My family will be charged for organ donation.',
    fact:  'There is absolutely no cost to donor families. All expenses are covered by the recipient\'s side.',
  },
];

function renderOrgan() {
  const container = document.getElementById('page-organ');
  container.innerHTML = `
    <div class="organ-page">

      <!-- Hero -->
      <div class="organ-hero">
        <h2>One donor can save up to 8 lives</h2>
        <p>Learn how to register as an organ donor in India and help people waiting right here in Maharashtra.</p>
        <div class="organ-stats">
          <div class="organ-stat">
            <span class="organ-stat-num">5 lakh+</span>
            <span class="organ-stat-label">Patients waiting in India</span>
          </div>
          <div class="organ-stat">
            <span class="organ-stat-num">8</span>
            <span class="organ-stat-label">Lives one donor can save</span>
          </div>
          <div class="organ-stat">
            <span class="organ-stat-num">Free</span>
            <span class="organ-stat-label">NOTTO registration</span>
          </div>
        </div>
      </div>

      <!-- Steps -->
      <div class="steps-section">
        <h3>How to register as an organ donor</h3>
        <div class="step-list">
          <div class="step-item fade-up" style="animation-delay:0.05s">
            <div class="steps-visual-grid">
  <div class="step-visual-card fade-up" style="animation-delay:0.05s">
    <div class="step-visual-top">
      <div class="step-num">1</div>
      <span class="step-badge">Open website</span>
    </div>
    <div class="step-image-placeholder">Screenshot 1</div>
    <div class="step-content">
      <h4>Visit NOTTO online</h4>
      <p>Go to <a class="step-link" href="https://notto.abdm.gov.in" target="_blank" rel="noopener">notto.abdm.gov.in</a> — the official organ donation portal.</p>
    </div>
  </div>

  <div class="step-visual-card fade-up" style="animation-delay:0.10s">
    <div class="step-visual-top">
      <div class="step-num">2</div>
      <span class="step-badge">Fill details</span>
    </div>
    <div class="step-image-placeholder">Screenshot 2</div>
    <div class="step-content">
      <h4>Fill the pledge form</h4>
      <p>Enter your basic details and choose the organs/tissues you wish to donate.</p>
    </div>
  </div>

  <div class="step-visual-card fade-up" style="animation-delay:0.15s">
    <div class="step-visual-top">
      <div class="step-num">3</div>
      <span class="step-badge">Tell family</span>
    </div>
    <div class="step-image-placeholder">Screenshot 3</div>
    <div class="step-content">
      <h4>Inform your family</h4>
      <p>Family consent matters in India, so make sure your close relatives know your decision.</p>
    </div>
  </div>

  <div class="step-visual-card fade-up" style="animation-delay:0.20s">
    <div class="step-visual-top">
      <div class="step-num">4</div>
      <span class="step-badge">Save donor card</span>
    </div>
    <div class="step-image-placeholder">Screenshot 4</div>
    <div class="step-content">
      <h4>Download your donor card</h4>
      <p>Save the donor card on your phone and keep a copy for future reference.</p>
    </div>
  </div>
</div>
        </div>
      </div>

      <!-- Pledge button -->
      <div class="pledge-section">
        <a class="pledge-btn" href="https://notto.abdm.gov.in" target="_blank" rel="noopener">
          Pledge to donate — visit NOTTO →
        </a>
      </div>

      <div class="section-divider"></div>

      <!-- Myths vs Facts -->
      <div class="myths-section">
        <h3>Myths vs facts</h3>
        <p class="myths-subtitle">Tap any card to reveal the truth behind common misconceptions.</p>
        <div class="myths-grid" id="myths-grid"></div>
      </div>

    </div>
  `;

  renderMythCards();
}

function renderMythCards() {
  const grid = document.getElementById('myths-grid');
  MYTHS.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'flip-card fade-up';
    card.style.animationDelay = (i * 0.07) + 's';
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          <div>
            <div class="flip-label">MYTH</div>
            <div class="flip-text">${item.myth}</div>
          </div>
          <div class="flip-hint">Tap to reveal the fact →</div>
        </div>
        <div class="flip-back">
          <div>
            <div class="flip-label">FACT</div>
            <div class="flip-text">${item.fact}</div>
          </div>
          <div class="flip-hint">Tap to see the myth</div>
        </div>
      </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });
}
