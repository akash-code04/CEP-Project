/* ============================================
   js/lang.js — Language toggle (EN / MR)
   ============================================ */

let currentLang = 'en';

// Map of element IDs to string keys
const LANG_MAP = {
  'nav-sub':       'navSub',
  'lang-toggle':   'langBtn',
  'footer-note':   'footerNote',
  'hero-eyebrow':  'eyebrow',
  'hero-title':    'heroTitle',
  'hero-sub':      'heroSub',
  'cta-btn1-text': 'btn1',
  'cta-btn2-text': 'btn2',
  'cta-btn3-text': 'btn3',
  'stat1-label':   'stat1Label',
  'stat2-label':   'stat2Label',
  'stat3-label':   'stat3Label',
  'stat4-label':   'stat4Label',
  'purpose-text':  'purposeText',
  'expand-badge':  'expandBadge',
  'how1-title':    'how1Title',
  'how1-desc':     'how1Desc',
  'how2-title':    'how2Title',
  'how2-desc':     'how2Desc',
  'how3-title':    'how3Title',
  'how3-desc':     'how3Desc',
};

function applyLanguage(lang) {
  const s = STRINGS[lang];
  for (const [id, key] of Object.entries(LANG_MAP)) {
    const el = document.getElementById(id);
    if (el && s[key] !== undefined) el.textContent = s[key];
  }
  // Update html lang attribute
  document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';
}

function initLang() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'mr' : 'en';
    applyLanguage(currentLang);
  });
}
