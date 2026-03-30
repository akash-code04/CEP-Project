/* ============================================
   js/data/schemes.js — Government schemes data
   ============================================ */

const SCHEMES = [
  {
    id: 'mjpjay',
    name: 'Mahatma Jyotiba Phule Jan Arogya Yojana',
    category: 'All families',
    categoryClass: 'tag-green',
    icon: '🏥',
    iconBg: '#E1F5EE',
    description: 'Free medical treatment up to ₹1.5 lakh per year for 996 listed procedures at empanelled hospitals across Maharashtra.',
    eligibility: [
      'Any Maharashtra resident family',
      'Yellow / Orange / White ration card holders',
      'Aadhaar card required',
      'No income limit for many procedures'
    ],
    documents: ['Aadhaar card', 'Ration card', 'Residence proof'],
    applyUrl: 'https://www.jeevandayee.gov.in/',
    applyLabel: 'Visit Jeevandayee Portal',
    filterKey: 'all'
  },
  {
    id: 'pmmvy',
    name: 'Pradhan Mantri Matru Vandana Yojana',
    category: 'Maternity',
    categoryClass: 'tag-blue',
    icon: '👶',
    iconBg: '#E6F1FB',
    description: '₹5,000 cash benefit in instalments for pregnant women and lactating mothers for their first live birth.',
    eligibility: [
      'Pregnant women aged 19 years or above',
      'First live birth only',
      'Must be registered at an AWC / health facility',
      'Aadhaar-linked bank account required'
    ],
    documents: ['Aadhaar card', 'Bank passbook', 'MCP card', 'Pregnancy proof'],
    applyUrl: 'https://pmmvy.wcd.gov.in/',
    applyLabel: 'Apply on PMMVY Portal',
    filterKey: 'maternity'
  },
  {
    id: 'rgjay',
    name: 'Rajiv Gandhi Jeevandayee Arogya Yojana',
    category: 'BPL families',
    categoryClass: 'tag-amber',
    icon: '👴',
    iconBg: '#FAEEDA',
    description: 'Covers expensive surgeries and advanced therapies for BPL families — including cardiac, cancer, kidney, and neurological procedures.',
    eligibility: [
      'Below Poverty Line (BPL) families',
      'Orange / Yellow ration card holders',
      'Covers up to ₹1.5 lakh per family per year',
      'Available at government and empanelled private hospitals'
    ],
    documents: ['BPL ration card', 'Aadhaar card', 'Income certificate'],
    applyUrl: 'https://www.jeevandayee.gov.in/',
    applyLabel: 'Visit Jeevandayee Portal',
    filterKey: 'bpl'
  },
  {
    id: 'janaushadhi',
    name: 'PM Janaushadhi — Affordable Medicines',
    category: 'All citizens',
    categoryClass: 'tag-pink',
    icon: '💊',
    iconBg: '#FBEAF0',
    description: 'Generic medicines available at 50–90% lower prices at PM Janaushadhi Kendras located near PCMC government hospitals.',
    eligibility: [
      'Open to all citizens — no income or card requirement',
      'Simply visit the nearest Janaushadhi Kendra',
      'Over 1,900+ generic medicines available'
    ],
    documents: ['Doctor prescription (for specific medicines)'],
    applyUrl: 'https://janaushadhi.gov.in/',
    applyLabel: 'Find Kendra near you',
    filterKey: 'all'
  },
  {
    id: 'ayushman',
    name: 'Ayushman Bharat — PM-JAY',
    category: 'BPL families',
    categoryClass: 'tag-amber',
    icon: '🛡️',
    iconBg: '#FAEEDA',
    description: 'Health insurance cover of ₹5 lakh per family per year for secondary and tertiary care hospitalisation for poor and vulnerable families.',
    eligibility: [
      'Families listed in SECC 2011 database',
      'No cap on family size',
      'Covers pre and post hospitalisation expenses',
      'Cashless treatment at empanelled hospitals'
    ],
    documents: ['Aadhaar card', 'Ration card', 'SECC listing proof'],
    applyUrl: 'https://pmjay.gov.in/',
    applyLabel: 'Check eligibility on PM-JAY',
    filterKey: 'bpl'
  },
  {
    id: 'jssk',
    name: 'Janani Shishu Suraksha Karyakram (JSSK)',
    category: 'Maternity',
    categoryClass: 'tag-blue',
    icon: '🤱',
    iconBg: '#E6F1FB',
    description: 'Entitles pregnant women to free and cashless services including delivery, caesarean section, medicines, diagnostics, and diet at government hospitals.',
    eligibility: [
      'All pregnant women delivering at government facilities',
      'Free normal and C-section deliveries',
      'Free diet during hospital stay',
      'Free transport from home to hospital and back'
    ],
    documents: ['Any government ID', 'Pregnancy card (MCP card)'],
    applyUrl: 'https://nhm.gov.in/',
    applyLabel: 'Learn more at NHM',
    filterKey: 'maternity'
  },
  {
    id: 'rbsk',
    name: 'Rashtriya Bal Swasthya Karyakram (RBSK)',
    category: 'Children',
    categoryClass: 'tag-green',
    icon: '🧒',
    iconBg: '#E1F5EE',
    description: 'Free health screening and early intervention for children from birth to 18 years for 4Ds — Defects at birth, Diseases, Deficiencies, and Developmental delays.',
    eligibility: [
      'Children aged 0–18 years',
      'Covers all children in government schools and anganwadis',
      'Free treatment and follow-up care',
      'Referral to District Early Intervention Centres (DEICs)'
    ],
    documents: ['Birth certificate', 'School/anganwadi enrollment proof'],
    applyUrl: 'https://nhm.gov.in/index4.php?lang=1&level=0&linkid=406&lid=454',
    applyLabel: 'Learn more at NHM',
    filterKey: 'children'
  },
  {
    id: 'nmhp',
    name: 'National Mental Health Programme (NMHP)',
    category: 'All citizens',
    categoryClass: 'tag-green',
    icon: '🧠',
    iconBg: '#E1F5EE',
    description: 'Free mental health services including counselling, psychiatric treatment, and medicines at district hospitals and community health centres.',
    eligibility: [
      'Open to all citizens',
      'Available at government hospitals and CHCs',
      'Includes free medicines under NMHP',
      'Covers depression, anxiety, psychosis and more'
    ],
    documents: ['Any government ID'],
    applyUrl: 'https://nhm.gov.in/',
    applyLabel: 'Visit NHM website',
    filterKey: 'all'
  }
];
