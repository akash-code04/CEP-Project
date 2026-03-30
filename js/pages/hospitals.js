/* ============================================
   js/pages/hospitals.js
   ============================================ */

let hospitalsData = [];
let leafletMap = null;
let markers = {};
let mapInitialised = false;
let selectedId = null;

/* ---- Render the layout shell ---- */
function renderHospitals() {
  const container = document.getElementById('page-hospitals');
  container.innerHTML = `
    <div class="hospitals-layout">
      <div class="hosp-panel">
        <div class="hosp-search-bar">
          <div class="hosp-search-row">
            <input class="hosp-search-input" id="hosp-search"
              placeholder="Search hospitals, areas, services..." autocomplete="off" />
            <button class="geo-btn" id="geo-btn">Near me</button>
          </div>
          <div class="hosp-count" id="hosp-count">Loading hospitals…</div>
        </div>
        <div class="hosp-list" id="hosp-list"></div>
      </div>
      <div class="map-panel">
        <div id="map"></div>
      </div>
    </div>
  `;

  // Wire up search
  document.getElementById('hosp-search').addEventListener('input', e => {
    filterHospitals(e.target.value.trim().toLowerCase());
  });

  // Wire up geo button
  document.getElementById('geo-btn').addEventListener('click', locateUser);

  // Load data
  loadHospitals();
}

/* ---- Load hospitals.json ---- */
function loadHospitals() {
  fetch('hospitals.json')
    .then(r => r.json())
    .then(data => {
      hospitalsData = data;
      renderCards(data);
      updateCount(data.length, data.length);
    })
    .catch(() => {
      document.getElementById('hosp-list').innerHTML =
        '<p style="padding:16px;color:var(--text-muted);font-size:13px">Could not load hospital data. Make sure hospitals.json is in the same folder.</p>';
    });
}

/* ---- Render hospital cards ---- */
function renderCards(hospitals) {
  const list = document.getElementById('hosp-list');
  if (!list) return;
  list.innerHTML = '';
  hospitals.forEach((h, i) => {
    const card = createCard(h, i);
    list.appendChild(card);
  });
}

function createCard(h, delay) {
  const div = document.createElement('div');
  div.className = 'hosp-card fade-up';
  div.dataset.id = h.id;
  div.style.animationDelay = (delay * 0.04) + 's';

  const typeBadgeClass = {
    'Major Hospital':    'badge-major',
    'Maternity Hospital':'badge-maternity',
    'OPD Centre':        'badge-opd',
    'General Hospital':  'badge-general',
  }[h.hospital_type] || 'badge-general';

  const emergencyDot = h.emergency
    ? '<span class="hosp-emergency-dot"></span>'
    : '';

  const tagsHtml = h.tags.slice(0, 4).map(t => {
    let cls = 'tag-gray';
    if (t.includes('Emergency') || t.includes('ICU')) cls = 'tag-red';
    else if (t.includes('Maternity') || t.includes('Delivery') || t.includes('Women')) cls = 'tag-pink';
    else if (t.includes('OPD') || t.includes('Consultation')) cls = 'tag-blue';
    else if (t.includes('Surgery') || t.includes('Specialist')) cls = 'tag-amber';
    else cls = 'tag-green';
    return `<span class="tag ${cls}">${t}</span>`;
  }).join('');

  div.innerHTML = `
    <div class="hosp-card-header">
      <span class="hosp-card-name">${emergencyDot}${h.name}</span>
      <span class="hosp-type-badge ${typeBadgeClass}">${h.hospital_type}</span>
    </div>
    <div class="hosp-tags">${tagsHtml}</div>
    <div class="hosp-meta">${h.area} · ${h.address}</div>
    ${h.phone ? `<div class="hosp-meta">📞 ${h.phone}</div>` : ''}
    <div class="hosp-meta">🕐 ${h.timing}</div>
    <span class="hosp-distance" id="dist-${h.id}"></span>
    <a class="hosp-gmaps" href="${h.gmaps_url}" target="_blank" rel="noopener">
      Open in Google Maps →
    </a>
  `;

  div.addEventListener('click', () => selectHospital(h.id));
  return div;
}

function selectHospital(id) {
  // Update selected card
  document.querySelectorAll('.hosp-card').forEach(c => c.classList.remove('selected'));
  const card = document.querySelector(`.hosp-card[data-id="${id}"]`);
  if (card) {
    card.classList.add('selected');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  selectedId = id;

  // Pan map to marker
  if (markers[id] && leafletMap) {
    const m = markers[id];
    leafletMap.panTo(m.getLatLng(), { animate: true });
    m.openTooltip();
  }
}

/* ---- Initialise Leaflet map ---- */
function initMap() {
  // Already initialised — just tell Leaflet to recalculate size
  if (mapInitialised && leafletMap) {
    leafletMap.invalidateSize();
    return;
  }

  const mapDiv = document.getElementById('map');
  if (!mapDiv) return; // div not in DOM yet

  mapInitialised = true;

  leafletMap = L.map('map', {
    center: [18.652, 73.810],
    zoom: 13,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(leafletMap);

  // If data already loaded, drop markers immediately
  if (hospitalsData.length > 0) {
    addMarkers(hospitalsData);
  } else {
    // Data still loading — poll until ready
    const interval = setInterval(() => {
      if (hospitalsData.length > 0) {
        addMarkers(hospitalsData);
        clearInterval(interval);
      }
    }, 200);
  }
}

function addMarkers(hospitals) {
  hospitals.forEach(h => {
    const color = {
      'Major Hospital':    '#D85A30',
      'Maternity Hospital':'#D4537E',
      'OPD Centre':        '#185FA5',
      'General Hospital':  '#0F6E56',
    }[h.hospital_type] || '#0F6E56';

    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width:${h.hospital_type === 'Major Hospital' ? '18px' : '14px'};
        height:${h.hospital_type === 'Major Hospital' ? '18px' : '14px'};
        background:${color};
        border:2px solid #fff;
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        box-shadow:0 2px 6px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 18],
    });

    const marker = L.marker([h.lat, h.lng], { icon })
      .addTo(leafletMap)
      .bindTooltip(h.name, { permanent: false, direction: 'top', offset: [0, -10] });

    marker.on('click', () => selectHospital(h.id));
    markers[h.id] = marker;
  });
}

/* ---- Search / Filter ---- */
function filterHospitals(query) {
  const filtered = query === ''
    ? hospitalsData
    : hospitalsData.filter(h => {
        const haystack = [h.name, h.area, h.hospital_type, ...h.tags, ...h.best_for]
          .join(' ').toLowerCase();
        return haystack.includes(query);
      });

  renderCards(filtered);
  updateCount(filtered.length, hospitalsData.length);

  // Show/hide map markers
  hospitalsData.forEach(h => {
    if (!markers[h.id]) return;
    const visible = filtered.some(f => f.id === h.id);
    if (visible) {
      if (!leafletMap.hasLayer(markers[h.id])) markers[h.id].addTo(leafletMap);
    } else {
      if (leafletMap.hasLayer(markers[h.id])) leafletMap.removeLayer(markers[h.id]);
    }
  });

  // Rewire click events
  filtered.forEach(h => {
    const card = document.querySelector(`.hosp-card[data-id="${h.id}"]`);
    if (card) card.addEventListener('click', () => selectHospital(h.id));
  });
}

function updateCount(shown, total) {
  const el = document.getElementById('hosp-count');
  if (el) el.textContent = shown === total
    ? `${total} hospitals in PCMC`
    : `${shown} of ${total} hospitals`;
}

/* ---- Geolocation ---- */
function locateUser() {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser.');
    return;
  }
  const btn = document.getElementById('geo-btn');
  btn.textContent = 'Locating…';
  btn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    pos => {
      btn.textContent = 'Near me';
      btn.disabled = false;
      const userLat = pos.coords.latitude;
      const userLng = pos.coords.longitude;

      // Pan map
      if (leafletMap) {
        leafletMap.setView([userLat, userLng], 14);
        L.circle([userLat, userLng], {
          radius: 500,
          color: '#185FA5',
          fillColor: '#85B7EB',
          fillOpacity: 0.25,
          weight: 1.5,
        }).addTo(leafletMap).bindTooltip('You are here');
      }

      // Sort hospitals by distance and show
      const withDist = hospitalsData.map(h => ({
        ...h,
        distKm: haversine(userLat, userLng, h.lat, h.lng),
      })).sort((a, b) => a.distKm - b.distKm);

      renderCards(withDist);

      // Show distance labels
      withDist.forEach(h => {
        const el = document.getElementById('dist-' + h.id);
        if (el) el.textContent = `~${h.distKm.toFixed(1)} km away`;
      });

      updateCount(withDist.length, hospitalsData.length);
    },
    err => {
      btn.textContent = 'Near me';
      btn.disabled = false;
      alert('Could not get your location. Please allow location access and try again.');
    }
  );
}

/* ---- Haversine distance formula ---- */
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
