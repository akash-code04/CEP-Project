# Arogya Sahayak — आरोग्य सहायक

Government hospital & healthcare awareness platform for Pimpri Chinchwad (PCMC).

---

## How to run locally

You MUST use a local server because the site fetches `hospitals.json`.
Simply double-clicking `index.html` will NOT work (CORS block on fetch).

### Option A — Python (easiest, no install needed)
```bash
cd arogya-sahayak
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option B — VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

### Option C — Node.js
```bash
npx serve .
```

---

## File structure

```
arogya-sahayak/
│
├── index.html              ← Main entry point
├── hospitals.json          ← All 12 PCMC hospital records
│
├── css/
│   ├── base.css            ← Variables, reset, shared utilities
│   ├── navbar.css          ← Top navigation bar
│   ├── home.css            ← Home page styles
│   ├── hospitals.css       ← Hospitals tab (map + cards)
│   ├── schemes.css         ← Schemes tab
│   ├── organ.css           ← Organ donation tab
│   └── footer.css          ← Footer
│
└── js/
    ├── main.js             ← Boots everything on DOMContentLoaded
    ├── tabs.js             ← Tab switching logic
    ├── lang.js             ← EN / Marathi language toggle
    ├── data/
    │   ├── strings.js      ← All EN + MR text strings
    │   └── schemes.js      ← Government schemes data
    └── pages/
        ├── home.js         ← Home page renderer + counter animation
        ├── hospitals.js    ← Map, cards, search, geolocation
        ├── schemes.js      ← Schemes cards + filter
        └── organ.js        ← Steps, pledge button, flip cards
```

---

## How to update hospital data

Open `hospitals.json` and edit any entry. Each hospital looks like:

```json
{
  "id": "unique-id",
  "name": "Hospital Name",
  "area": "Area Name",
  "address": "Full address",
  "pincode": "411018",
  "lat": 18.6275,
  "lng": 73.7992,
  "phone": "020-XXXXXXXX",
  "timing": "24 Hours",
  "emergency": true,
  "hospital_type": "Major Hospital",
  "best_for": ["General Care", "Emergency Care"],
  "tags": ["24hr Emergency", "OPD", "ICU"],
  "city": "PCMC",
  "gmaps_url": "https://maps.google.com/?q=..."
}
```

**hospital_type options:** `Major Hospital` · `General Hospital` · `Maternity Hospital` · `OPD Centre`

**Verify coordinates:** Open Google Maps → find the hospital → right-click the pin → copy the lat/lng shown.

---

## How to add a new scheme

Open `js/data/schemes.js` and copy-paste an existing object, then change the values.

**filterKey options:** `all` · `maternity` · `bpl` · `children`

---

## How to add a new language string

1. Add the key-value pair to both `en` and `mr` objects in `js/data/strings.js`
2. Add a matching `id` to your HTML element
3. Add the id → key mapping in `js/lang.js` inside the `LANG_MAP` object

---

## Expanding beyond PCMC

When you add hospitals from another city:
1. Add entries to `hospitals.json` with `"city": "Pune"` (or whatever)
2. Add a city filter pill in `js/pages/hospitals.js` `renderHospitals()`
3. Filter by `h.city` in the `filterHospitals()` function

The `city` field is already in every hospital record for exactly this reason.
