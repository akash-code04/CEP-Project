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
    benefit: 'Up to ₹1.5 lakh/year free',
    description: 'Free medical treatment up to ₹1.5 lakh per year for 996 listed procedures at empanelled government and private hospitals across Maharashtra.',
    eligibility: [
      'Any Maharashtra resident family',
      'Yellow, Orange, or White ration card holders',
      'Aadhaar card required for registration',
      'No income limit for most procedures'
    ],
    documents: ['Aadhaar card', 'Ration card (Yellow/Orange/White)', 'Residence proof'],
    applySteps: [
      { title: 'Visit an empanelled hospital', desc: 'Go to any government or empanelled private hospital. Ask the help desk for the Jeevandayee scheme counter.' },
      { title: 'Show your documents', desc: 'Present your Aadhaar card and ration card at the scheme counter. Staff will verify eligibility on the spot.' },
      { title: 'Get pre-authorisation', desc: 'The hospital submits your case to the scheme authority for approval. This usually happens the same day for most procedures.' },
      { title: 'Receive cashless treatment', desc: 'Once approved, all listed treatment costs are directly settled by the scheme. You pay nothing for covered procedures.' }
    ],
    helpline: '155388',
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
    benefit: '₹5,000 cash benefit',
    description: '₹5,000 cash benefit paid in instalments to pregnant women and lactating mothers for their first live birth, to compensate for wage loss and improve health practices.',
    eligibility: [
      'Pregnant women aged 19 years or above',
      'Applicable for first live birth only',
      'Must register at an Anganwadi Centre (AWC) or health facility',
      'Aadhaar-linked bank account is mandatory'
    ],
    documents: ['Aadhaar card', 'Bank passbook (linked to Aadhaar)', 'MCP card (Mother & Child Protection card)', 'Proof of pregnancy from doctor or ANM'],
    applySteps: [
      { title: 'Register at your local Anganwadi Centre', desc: 'Visit the nearest AWC or government health centre as soon as pregnancy is confirmed. Ask for PMMVY registration.' },
      { title: 'Fill the application form', desc: 'Fill Form 1-A for the first instalment. The AWC worker or ANM will help you fill it.' },
      { title: 'Submit documents', desc: 'Submit Aadhaar, bank passbook, and MCP card copies at the AWC. Keep originals with you.' },
      { title: 'Receive ₹3,000 first instalment', desc: 'After registration and first antenatal check-up, ₹3,000 is credited directly to your bank account.' },
      { title: 'Receive ₹2,000 second instalment', desc: 'After delivery and first round of child vaccinations, the remaining ₹2,000 is transferred.' }
    ],
    helpline: '7905920002',
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
    benefit: 'Major surgeries covered free',
    description: 'Covers expensive surgeries and advanced therapies for BPL families including cardiac, cancer, kidney, and neurological procedures at empanelled hospitals.',
    eligibility: [
      'Below Poverty Line (BPL) families in Maharashtra',
      'Orange or Yellow ration card holders',
      'Cover up to ₹1.5 lakh per family per year',
      'Available at government and empanelled private hospitals'
    ],
    documents: ['BPL ration card (Orange/Yellow)', 'Aadhaar card', 'Income certificate from Tehsildar'],
    applySteps: [
      { title: 'Visit an empanelled hospital', desc: 'Go to a government hospital or empanelled private hospital. Tell the admission desk you want to avail the Jeevandayee scheme.' },
      { title: 'Submit BPL documents', desc: 'Provide your BPL ration card and Aadhaar. The hospital scheme desk will register you.' },
      { title: 'Medical review and approval', desc: 'A doctor confirms the required procedure is on the scheme\'s list of 996 covered treatments. Approval is obtained from the authority.' },
      { title: 'Cashless surgery or treatment', desc: 'The full cost of the approved procedure is covered. You are not charged anything for listed treatments.' }
    ],
    helpline: '155388',
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
    benefit: '50–90% cheaper medicines',
    description: 'Generic medicines available at 50–90% lower prices at PM Janaushadhi Kendras located near PCMC government hospitals. Over 1,900+ medicines available.',
    eligibility: [
      'Open to every citizen — no income limit, no ration card required',
      'Simply walk in to the nearest Janaushadhi Kendra',
      'Doctor prescription required for prescription medicines',
      'Over 1,900 generic medicines and 285 surgical items available'
    ],
    documents: ['Doctor prescription (for prescription medicines only)', 'No documents needed for OTC medicines'],
    applySteps: [
      { title: 'Get a prescription from your doctor', desc: 'Ask your doctor to write generic medicine names instead of brand names. Any PCMC government hospital doctor can do this.' },
      { title: 'Find the nearest Janaushadhi Kendra', desc: 'Use the store locator on the Janaushadhi website or ask at the PCMC hospital pharmacy counter for the nearest kendra.' },
      { title: 'Show your prescription', desc: 'Hand the prescription to the kendra pharmacist. They will check availability and give you the generic equivalent.' },
      { title: 'Pay the discounted price', desc: 'Pay only the Janaushadhi MRP — typically 50–90% cheaper than branded versions of the same medicine.' }
    ],
    helpline: '1800-180-8080',
    applyUrl: 'https://janaushadhi.gov.in/StoreLocater.aspx',
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
    benefit: '₹5 lakh health cover/year',
    description: 'Health insurance cover of ₹5 lakh per family per year for secondary and tertiary hospitalisation for poor and vulnerable families. No cap on family size.',
    eligibility: [
      'Families listed in the SECC 2011 database',
      'No cap on family size or age',
      'Covers pre and post hospitalisation expenses',
      'Cashless treatment at any empanelled hospital in India'
    ],
    documents: ['Aadhaar card', 'Ration card', 'SECC listing proof or PM-JAY e-card'],
    applySteps: [
      { title: 'Check your eligibility', desc: 'Visit pmjay.gov.in or call 14555 and enter your mobile number or ration card number to check if your family is listed.' },
      { title: 'Get your PM-JAY e-card', desc: 'Visit the nearest Common Service Centre (CSC) or empanelled hospital with your Aadhaar. They will generate your PM-JAY Golden Card.' },
      { title: 'Go to an empanelled hospital', desc: 'Visit any PM-JAY empanelled hospital. Show your Golden Card or Aadhaar at the Ayushman Mitra help desk.' },
      { title: 'Receive cashless treatment', desc: 'The hospital directly bills the scheme for all covered treatments. You pay nothing for listed procedures up to ₹5 lakh.' }
    ],
    helpline: '14555',
    applyUrl: 'https://pmjay.gov.in/',
    applyLabel: 'Check eligibility on PM-JAY',
    filterKey: 'bpl'
  },
  {
    id: 'jssk',
    name: 'Janani Shishu Suraksha Karyakram',
    category: 'Maternity',
    categoryClass: 'tag-blue',
    icon: '🤱',
    iconBg: '#E6F1FB',
    benefit: 'Free delivery & transport',
    description: 'Entitles pregnant women to completely free and cashless services at government hospitals — including delivery, medicines, diagnostics, diet, and transport from home.',
    eligibility: [
      'All pregnant women delivering at any government health facility',
      'Covers both normal and C-section deliveries',
      'Free diet during the hospital stay is included',
      'Free drop-back transport from hospital to home after discharge'
    ],
    documents: ['Any government photo ID (Aadhaar preferred)', 'MCP card (Mother & Child Protection card)'],
    applySteps: [
      { title: 'Register at a government hospital or PHC', desc: 'Register your pregnancy at any PCMC government hospital, Primary Health Centre, or sub-centre as early as possible.' },
      { title: 'Attend all antenatal check-ups', desc: 'Attend all scheduled check-ups. The ANM or doctor will maintain your MCP card with health records.' },
      { title: 'Come to the hospital when labour begins', desc: 'Go directly to the nearest government hospital maternity ward. Inform them you want to avail JSSK benefits.' },
      { title: 'All costs are automatically waived', desc: 'Medicines, tests, delivery charges, and food during the hospital stay are all provided free. No bills are raised.' },
      { title: 'Free transport home after discharge', desc: 'Request the hospital for drop-back transport under JSSK. An ambulance or vehicle is arranged at no cost.' }
    ],
    helpline: '102 (Ambulance)',
    applyUrl: 'https://nhm.gov.in/',
    applyLabel: 'Learn more at NHM',
    filterKey: 'maternity'
  },
  {
    id: 'rbsk',
    name: 'Rashtriya Bal Swasthya Karyakram',
    category: 'Children',
    categoryClass: 'tag-green',
    icon: '🧒',
    iconBg: '#E1F5EE',
    benefit: 'Free screening for 0–18 yrs',
    description: 'Free health screening and early intervention for children from birth to 18 years for 4Ds — Defects at birth, Diseases, Deficiencies, and Developmental delays.',
    eligibility: [
      'All children aged 0 to 18 years',
      'Covers children in government schools and Anganwadi centres',
      'Free treatment and follow-up care at District Early Intervention Centres',
      'Referral services for complex conditions are also free'
    ],
    documents: ['Child\'s birth certificate', 'School or Anganwadi enrollment proof', 'Parent or guardian\'s Aadhaar'],
    applySteps: [
      { title: 'Screening comes to your child', desc: 'RBSK Mobile Health Teams visit government schools and Anganwadis regularly. Your child will be screened during school hours — no action needed from parents.' },
      { title: 'Receive a health card', desc: 'Each child screened receives a health card noting any findings. The team will inform parents if follow-up is needed.' },
      { title: 'Visit the District Early Intervention Centre (DEIC)', desc: 'If a condition is detected, the team will refer your child to the nearest DEIC. Visit with the referral slip and documents.' },
      { title: 'Receive free treatment', desc: 'All treatment, surgeries, corrective devices (like spectacles or hearing aids), and medicines under RBSK are completely free.' }
    ],
    helpline: '',
    applyUrl: 'https://nhm.gov.in/index4.php?lang=1&level=0&linkid=406&lid=454',
    applyLabel: 'Learn more at NHM',
    filterKey: 'children'
  },
  {
    id: 'nmhp',
    name: 'National Mental Health Programme',
    category: 'All citizens',
    categoryClass: 'tag-green',
    icon: '🧠',
    iconBg: '#E1F5EE',
    benefit: 'Free mental health care',
    description: 'Free mental health services including counselling, psychiatric treatment, and medicines at district hospitals and community health centres across Maharashtra.',
    eligibility: [
      'Open to all citizens — no income or card requirement',
      'Available at government hospitals and Community Health Centres',
      'Includes free psychiatric medicines under the programme',
      'Covers depression, anxiety, psychosis, addiction, and more'
    ],
    documents: ['Any government ID (Aadhaar preferred)', 'Previous psychiatric prescription if available'],
    applySteps: [
      { title: 'Visit the OPD at a government hospital', desc: 'Go to any PCMC government hospital and visit the OPD. Ask for the psychiatry or mental health department.' },
      { title: 'Consult the doctor', desc: 'Meet the psychiatrist or counsellor. Describe your symptoms honestly. The consultation is free and confidential.' },
      { title: 'Receive diagnosis and treatment plan', desc: 'The doctor will provide a diagnosis and prescribe medicines or therapy as needed.' },
      { title: 'Collect free medicines', desc: 'Medicines prescribed under NMHP are available free at the hospital pharmacy. Collect them with your prescription.' },
      { title: 'Follow up regularly', desc: 'Mental health treatment works best with regular follow-ups. Return as scheduled — all follow-up visits are also free.' }
    ],
    helpline: 'iCall: 9152987821',
    applyUrl: 'https://nhm.gov.in/',
    applyLabel: 'Visit NHM website',
    filterKey: 'all'
  }
];