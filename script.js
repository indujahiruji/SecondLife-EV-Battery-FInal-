
// ── Weekly Day-based Scenario Data ─────────────────────────────────────────
const dayScenarios = {
  Monday: {
    name: 'Monday — Weekday (Low)',
    vbus:   { min: 45.1, mean: 51.2, max: 56.7 },
    ipack:  { min: -6.1, mean: 22.6, max: 36.0 },
    vinv:   { mean: 229.6 },
    soc:    { start: 97, end: 17.8, min_module: 15.2 },
    temp:   36.8,
    thd:    { mean: 3.0, max: 4.5 },
    energy: 1710, efficiency: 87.5, duration: 88,
    apparent: 2610,
    socSegments: [
      { pct: 34, color: '#22C55E', label: 'Full' },
      { pct: 28, color: '#84CC16', label: '>70%' },
      { pct: 20, color: '#F59E0B', label: 'Shed L1' },
      { pct: 18, color: '#EF4444', label: 'Cutoff' },
    ]
  },
  Tuesday: {
    name: 'Tuesday — Weekday',
    vbus:   { min: 44.8, mean: 51.0, max: 56.7 },
    ipack:  { min: -6.1, mean: 23.3, max: 37.1 },
    vinv:   { mean: 229.5 },
    soc:    { start: 97, end: 16.5, min_module: 14.1 },
    temp:   37.5,
    thd:    { mean: 3.1, max: 4.6 },
    energy: 1760, efficiency: 87.4, duration: 85,
    apparent: 2690,
    socSegments: [
      { pct: 33, color: '#22C55E', label: 'Full' },
      { pct: 28, color: '#84CC16', label: '>70%' },
      { pct: 20, color: '#F59E0B', label: 'Shed L1' },
      { pct: 13, color: '#EF4444', label: 'Cutoff' },
      { pct: 6,  color: '#7f1d1d', label: '' },
    ]
  },
  Wednesday: {
    name: 'Wednesday — Max Demand Day',
    vbus:   { min: 44.2, mean: 50.8, max: 56.7 },
    ipack:  { min: -6.1, mean: 24.3, max: 38.7 },
    vinv:   { mean: 229.4 },
    soc:    { start: 97, end: 15.2, min_module: 13.4 },
    temp:   38.4,
    thd:    { mean: 3.2, max: 4.8 },
    energy: 1840, efficiency: 87.3, duration: 82,
    apparent: 2810,
    socSegments: [
      { pct: 32, color: '#22C55E', label: 'Full' },
      { pct: 28, color: '#84CC16', label: '>70%' },
      { pct: 20, color: '#F59E0B', label: 'Shed L1' },
      { pct: 12, color: '#EF4444', label: 'Cutoff' },
      { pct: 8,  color: '#7f1d1d', label: '' },
    ]
  },
  Thursday: {
    name: 'Thursday — Max Demand Day (14 Aug 2025)',
    vbus:   { min: 44.2, mean: 50.8, max: 56.7 },
    ipack:  { min: -6.1, mean: 24.3, max: 38.7 },
    vinv:   { mean: 229.4 },
    soc:    { start: 97, end: 15.2, min_module: 13.4 },
    temp:   38.4,
    thd:    { mean: 3.2, max: 4.8 },
    energy: 1840, efficiency: 87.3, duration: 82,
    apparent: 2810,
    socSegments: [
      { pct: 32, color: '#22C55E', label: 'Full' },
      { pct: 28, color: '#84CC16', label: '>70%' },
      { pct: 20, color: '#F59E0B', label: 'Shed L1' },
      { pct: 12, color: '#EF4444', label: 'Cutoff' },
      { pct: 8,  color: '#7f1d1d', label: '' },
    ]
  },
  Friday: {
    name: 'Friday — Weekday',
    vbus:   { min: 44.5, mean: 51.1, max: 56.7 },
    ipack:  { min: -6.1, mean: 23.6, max: 37.5 },
    vinv:   { mean: 229.5 },
    soc:    { start: 97, end: 16.0, min_module: 13.8 },
    temp:   37.9,
    thd:    { mean: 3.1, max: 4.7 },
    energy: 1780, efficiency: 87.4, duration: 84,
    apparent: 2720,
    socSegments: [
      { pct: 33, color: '#22C55E', label: 'Full' },
      { pct: 28, color: '#84CC16', label: '>70%' },
      { pct: 21, color: '#F59E0B', label: 'Shed L1' },
      { pct: 12, color: '#EF4444', label: 'Cutoff' },
      { pct: 6,  color: '#7f1d1d', label: '' },
    ]
  },
  Saturday: {
    name: 'Saturday — Weekend (08 Nov 2025)',
    vbus:   { min: 47.8, mean: 53.1, max: 56.7 },
    ipack:  { min: -6.1, mean: 14.2, max: 22.8 },
    vinv:   { mean: 230.4 },
    soc:    { start: 97, end: 28.7, min_module: 24.3 },
    temp:   31.8,
    thd:    { mean: 2.7, max: 4.1 },
    energy: 1420, efficiency: 89.0, duration: 120,
    apparent: 1870,
    socSegments: [
      { pct: 45, color: '#22C55E', label: 'Full' },
      { pct: 35, color: '#84CC16', label: '>70%' },
      { pct: 20, color: '#84CC16', label: '>60%' },
    ]
  },
  Sunday: {
    name: 'Sunday — Lowest Demand Day',
    vbus:   { min: 49.2, mean: 54.0, max: 56.7 },
    ipack:  { min: -6.1, mean: 11.8, max: 18.9 },
    vinv:   { mean: 230.6 },
    soc:    { start: 97, end: 35.4, min_module: 30.1 },
    temp:   29.5,
    thd:    { mean: 2.5, max: 3.8 },
    energy: 1180, efficiency: 89.5, duration: 145,
    apparent: 1560,
    socSegments: [
      { pct: 50, color: '#22C55E', label: 'Full' },
      { pct: 35, color: '#84CC16', label: '>70%' },
      { pct: 15, color: '#84CC16', label: '>60%' },
    ]
  }
};

// ── Poya Day Scenario Data ─────────────────────────────────────────────────
dayScenarios['Poya'] = {
  name: 'Poya Day — Public Holiday',
  vbus:   { min: 46.1, mean: 52.3, max: 56.7 },
  ipack:  { min: -6.1, mean: 18.4, max: 29.2 },
  vinv:   { mean: 230.1 },
  soc:    { start: 97, end: 21.4, min_module: 18.1 },
  temp:   34.1,
  thd:    { mean: 2.9, max: 4.3 },
  energy: 1650, efficiency: 88.1, duration: 105,
  apparent: 2190,
  socSegments: [
    { pct: 40, color: '#22C55E', label: 'Full' },
    { pct: 30, color: '#84CC16', label: '>70%' },
    { pct: 18, color: '#F59E0B', label: 'Shed L1' },
    { pct: 12, color: '#F97316', label: '>22%' },
  ]
};

// ── Sri Lanka Poya Days 2025–2027 ──────────────────────────────────────────
const poyaDates = new Set([
  // 2025
  '2025-01-13','2025-02-12','2025-03-13','2025-04-12',
  '2025-05-12','2025-06-11','2025-07-10','2025-08-09',
  '2025-09-07','2025-10-06','2025-11-05','2025-12-04',
  // 2026
  '2026-01-03','2026-02-01','2026-03-03','2026-04-01',
  '2026-05-01','2026-05-31','2026-06-29','2026-07-29',
  '2026-08-28','2026-09-26','2026-10-26','2026-11-24','2026-12-24',
  // 2027
  '2027-01-22','2027-02-21','2027-03-23','2027-04-21',
  '2027-05-21','2027-06-19','2027-07-19','2027-08-17',
  '2027-09-16','2027-10-15','2027-11-14','2027-12-13',
]);

function isPoyaDay(dateStr) {
  return poyaDates.has(dateStr);
}

const dayOrder = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let currentDay = 'Tuesday';
let currentDateStr = '';

function getDayFromDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[d.getDay()];
}

function getScenarioForDate(dateStr) {
  if (isPoyaDay(dateStr)) return 'Poya';
  return getDayFromDate(dateStr);
}

function updateBadge(dateStr) {
  const badge = document.getElementById('selectedDayName');
  const dayName = getDayFromDate(dateStr);
  const isPoya = isPoyaDay(dateStr);
  if (isPoya) {
    badge.textContent = '🌕 Poya Day';
    badge.style.background = 'linear-gradient(135deg, #F59E0B33, #F97316333)';
    badge.style.borderColor = '#F59E0B';
    badge.style.color = '#F59E0B';
  } else {
    badge.textContent = dayName;
    badge.style.background = '';
    badge.style.borderColor = '';
    badge.style.color = '';
  }

  // Update poya indicator
  const ind = document.getElementById('poyaIndicator');
  if (ind) {
    if (isPoya) {
      ind.style.display = 'flex';
      // Find next poya from today
    } else {
      ind.style.display = 'none';
    }
  }

  // Show next poya
  const nextEl = document.getElementById('nextPoya');
  if (nextEl) {
    const next = getNextPoya(dateStr);
    nextEl.textContent = next ? `Next Poya: ${next}` : '';
  }
}

function getNextPoya(fromDateStr) {
  const sorted = [...poyaDates].sort();
  for (const d of sorted) {
    if (d > fromDateStr) return d;
  }
  return null;
}

function onDateChange() {
  const val = document.getElementById('datePicker').value;
  if (!val) return;
  currentDateStr = val;
  const scenario = getScenarioForDate(val);
  const dayName = getDayFromDate(val);
  updateBadge(val);
  highlightDayTab(dayName);
  currentDay = scenario;
  renderDashboard(scenario);
}

function selectDay(dayName, btn) {
  // When manually clicking a day tab, use that day's data
  // but keep date picker in sync if possible
  currentDay = dayName;
  document.getElementById('selectedDayName').textContent = dayName;
  const badge = document.getElementById('selectedDayName');
  badge.style.background = '';
  badge.style.borderColor = '';
  badge.style.color = '';
  highlightDayTab(dayName);
  renderDashboard(dayName);
}

function highlightDayTab(dayName) {
  document.querySelectorAll('#dayTabs .tab').forEach((t, i) => {
    t.classList.toggle('active', dayOrder[i] === dayName);
  });
}

// Legacy setScenario kept for compatibility
function setScenario(n, btn) {
  const map = {1:'Thursday', 2:'Wednesday', 3:'Saturday'};
  selectDay(map[n] || 'Thursday', btn);
}

function renderDashboard(n) {
  let key = n;
  if (typeof n === 'number') key = ['Thursday','Wednesday','Saturday'][n-1];
  const d = dayScenarios[key];
  if (!d) return;

  // metric cards
  const cards = [
    { label: 'DC Bus Voltage', value: d.vbus.mean.toFixed(1), unit: 'V',
      sub: `Min ${d.vbus.min}V · Max ${d.vbus.max}V`, accent: '#00D4FF',
      trend: 'good', trendText: 'Within range' },
    { label: 'Inverter Output', value: d.vinv.mean.toFixed(1), unit: 'V rms',
      sub: '230 V nominal · 50 Hz', accent: '#22C55E',
      trend: 'good', trendText: '≈ Nominal' },
    { label: 'Pack Current', value: d.ipack.mean.toFixed(1), unit: 'A',
      sub: `Peak ${d.ipack.max} A discharge`, accent: '#F59E0B',
      trend: 'warn', trendText: `+ = discharge` },
    { label: 'Backup Duration', value: d.duration, unit: 'min',
      sub: `${d.energy} Wh delivered`, accent: '#A855F7',
      trend: 'good', trendText: `Eff. ${d.efficiency}%` },
    { label: 'Pack SoC End', value: d.soc.end.toFixed(1), unit: '%',
      sub: `Weakest module: ${d.soc.min_module}%`, accent: '#EF4444',
      trend: d.soc.end < 22 ? 'bad' : d.soc.end < 30 ? 'warn' : 'good',
      trendText: d.soc.end < 22 ? 'Shed L2 triggered' : d.soc.end < 30 ? 'Shed L1 triggered' : 'Above shed' },
    { label: 'Mean THD', value: d.thd.mean.toFixed(1), unit: '%',
      sub: `Peak ${d.thd.max}% · IEEE 519 limit 5%`, accent: '#00D4FF',
      trend: d.thd.max < 5 ? 'good' : 'bad',
      trendText: d.thd.max < 5 ? 'IEEE 519 PASS' : 'IEEE 519 FAIL' },
    { label: 'Peak Temperature', value: d.temp.toFixed(1), unit: '°C',
      sub: 'Trip at 55°C · Inhibit at 45°C', accent: '#F97316',
      trend: d.temp < 45 ? 'good' : 'bad',
      trendText: d.temp < 45 ? 'Thermal OK' : 'Charge inhibited' },
    { label: 'Peak Apparent Power', value: d.apparent, unit: 'VA',
      sub: '3000 VA inverter rated', accent: '#22C55E',
      trend: d.apparent < 3000 ? 'good' : 'bad',
      trendText: `${(d.apparent/3000*100).toFixed(0)}% of rated` },
  ];

  document.getElementById('metricCards').innerHTML = cards.map(c => `
    <div class="metric-card" style="--accent:${c.accent}">
      <div class="label">${c.label}</div>
      <div class="value">${c.value}<span class="unit">${c.unit}</span></div>
      <div class="sublabel">${c.sub}</div>
      <span class="trend ${c.trend}">${c.trendText}</span>
    </div>
  `).join('');

  // gauges
  document.getElementById('gaugeRow').innerHTML = `
    ${makeGauge('State of Charge', d.soc.end, 100, '%', d.soc.end < 22 ? '#EF4444' : d.soc.end < 30 ? '#F59E0B' : '#22C55E')}
    ${makeGauge('Inverter THD', d.thd.mean, 10, '%', d.thd.mean < 5 ? '#22C55E' : '#EF4444')}
    ${makeGauge('System Efficiency', d.efficiency, 100, '%', '#00D4FF')}
  `;

  // soc timeline
  const timeline = document.getElementById('socTimeline');
  timeline.innerHTML = d.socSegments.map(s => `
    <div class="soc-seg" style="width:${s.pct}%;background:${s.color};color:${s.pct > 10 ? '#000' : 'transparent'}">
      ${s.pct > 10 ? s.label : ''}
    </div>
  `).join('');
}

function makeGauge(label, val, max, unit, color) {
  const pct   = Math.min(val / max, 1);
  const angle = pct * 180;               // 0–180 deg arc
  const r = 75, cx = 90, cy = 85;
  // compute arc endpoint
  const rad   = (angle - 180) * Math.PI / 180;
  const ex    = cx + r * Math.cos(rad);
  const ey    = cy + r * Math.sin(rad);
  const large = angle > 180 ? 1 : 0;
  return `
    <div class="gauge-card">
      <div class="g-label">${label}</div>
      <div class="gauge-wrap">
        <svg viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M15,85 A75,75 0 0,1 165,85" fill="none" stroke="#1E2F4A" stroke-width="12" stroke-linecap="round"/>
          <path d="M15,85 A75,75 0 ${large},1 ${ex.toFixed(1)},${ey.toFixed(1)}"
                fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round"/>
          <text x="90" y="72" text-anchor="middle"
                font-family="Space Grotesk" font-size="22" font-weight="700" fill="#E8F0FE">
            ${val.toFixed(1)}
          </text>
          <text x="90" y="88" text-anchor="middle"
                font-family="Inter" font-size="10" fill="#7A90B0">${unit}</text>
        </svg>
      </div>
    </div>
  `;
}

// ── Module grid ────────────────────────────────────────────────────────────
const sohVec = [0.3503,0.3888,0.4110,0.4147,0.4375,0.4378,0.4634,0.4714,0.4827,0.4830,
  0.4833,0.4846,0.4929,0.4965,0.4980,0.5010,0.5163,0.5187,0.5219,0.5239,
  0.5251,0.5323,0.5416,0.5436,0.5443,0.5499,0.5664,0.5696,0.5728,0.5788,
  0.5791,0.5827,0.5875,0.5888,0.5916,0.5968,0.6008,0.6023,0.6044,0.6097,
  0.6347,0.6351,0.6356,0.6413,0.6419,0.6498,0.6565,0.6635,0.6938,0.6964,
  0.7013,0.7021,0.7058,0.7089,0.7117,0.7200,0.7202,0.7244,0.7270,0.7279,
  0.7285,0.7298,0.7352,0.7363,0.7412,0.7425,0.7429,0.7432,0.7542,0.7565,
  0.7571,0.7594,0.7631,0.7791,0.7806,0.7844,0.7850,0.7867,0.7926,0.8031,
  0.8038,0.8057,0.8120,0.8343];

function sohColor(s) {
  if (s >= 0.70) return '#22C55E';
  if (s >= 0.60) return '#84CC16';
  if (s >= 0.50) return '#F59E0B';
  if (s >= 0.40) return '#F97316';
  return '#EF4444';
}
function textColor(c) { return '#000'; }

function buildModuleGrid() {
  const grid = document.getElementById('moduleGrid');
  // sohVec is sorted by SoH; lay out 7 rows × 12 cols (string × position)
  grid.innerHTML = sohVec.map((s, i) => {
    const str = Math.floor(i / 7) + 1;
    const pos = (i % 7) + 1;
    const pct = (s * 100).toFixed(1);
    const bg  = sohColor(s);
    return `<div class="mod-cell" style="background:${bg};color:#000"
              data-tip="Str ${str} Pos ${pos} · SoH ${pct}%">${pct}%</div>`;
  }).join('');
}

// ── Counter animation ──────────────────────────────────────────────────────
function animateCounter(id, target, duration=1800) {
  const el = document.getElementById(id);
  const start = performance.now();
  function step(now) {
    const p = Math.min((now-start)/duration, 1);
    const ease = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(ease * target);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── Scroll reveal ──────────────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ── Init ───────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Set today's date and auto-detect day / poya
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth()+1).padStart(2,'0');
  const dd = String(today.getDate()).padStart(2,'0');
  const todayStr = `${yyyy}-${mm}-${dd}`;
  currentDateStr = todayStr;
  document.getElementById('datePicker').value = todayStr;

  const scenario = getScenarioForDate(todayStr);
  const dayName  = getDayFromDate(todayStr);
  currentDay = scenario;

  updateBadge(todayStr);
  highlightDayTab(dayName);

  // Show poya alert if today is poya
  if (isPoyaDay(todayStr)) {
    document.getElementById('poyaIndicator').style.display = 'flex';
  }

  renderDashboard(scenario);
  buildModuleGrid();
  initReveal();
  setTimeout(() => {
    animateCounter('ctr-modules', 84);
    animateCounter('ctr-strings', 12);
    animateCounter('ctr-kva', 3);
    animateCounter('ctr-volt', 230);
  }, 400);
});

  function openLightbox(src, cap) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-cap').textContent = cap;
    document.getElementById('lightbox').classList.add('open');
  }
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
  }



/* Optional customer system designer; legacy dashboard JavaScript retained above. */
(function(){
'use strict';
const $=id=>document.getElementById(id),groups='ABCDEF'.split('');
// Assumed tested 7.2 V NiMH modules (6 cells x 1.2 V); grade capacity is an editable planning assumption.
// Prices are deliberately low illustrative used-module values, NOT verified local market quotations.
const defaults=[[6.2,2500],[5.9,2200],[5.6,1900],[5.3,1600],[5.0,1400],[4.7,1200]];
const body=$('battery-rows');if(!body)return;
body.innerHTML=groups.map((g,i)=>`<tr><td><strong>${g}</strong></td><td><input id="g-${g}-count" type="number" min="0" step="1" value="0" aria-label="Group ${g} owned modules"></td><td><input id="g-${g}-ah" type="number" min="0.1" max="6.5" step="0.1" value="${defaults[i][0]}" aria-label="Group ${g} tested usable capacity in Ah"></td><td><input id="g-${g}-price" type="number" min="0" step="100" value="${defaults[i][1]}" aria-label="Group ${g} used module price in LKR"></td></tr>`).join('');
const ownedChoice=()=>document.querySelector('input[name="battery-owned"]:checked').value==='yes';
function updateOwnership(){const owned=ownedChoice();$('owned-battery-fields').hidden=!owned;$('no-battery-note').hidden=owned;calculate();}
document.querySelectorAll('input[name="battery-owned"]').forEach(el=>el.addEventListener('change',updateOwnership));
let last=null;const n=id=>Number($(id).value),money=x=>'LKR '+Math.round(x).toLocaleString('en-US'),fmt=(x,d=1)=>Number(x).toLocaleString('en-US',{maximumFractionDigits:d});
function compute(){
const applianceMode=document.querySelector('input[name="load-mode"]:checked').value==='appliances';
const applianceData=applianceMode?getApplianceTotals():null;
const load=applianceMode?applianceData.running:n('p-load'),hours=n('p-hours'),surge=applianceMode?applianceData.peak:n('p-surge');
const eff=n('p-eff')/100,dod=n('p-dod')/100,reserve=n('p-reserve')/100,bus=n('p-bus');
if(applianceMode&&(!applianceData.running||!applianceData.energy))throw Error('Please select at least one appliance with a positive quantity and operating time.');
if(![load,hours,surge,eff,dod,reserve,bus].every(Number.isFinite)||load<=0||hours<=0||surge<load||eff<.5||eff>.99||dod<.1||dod>.95||reserve<0||reserve>.8)throw Error('Please check the load, backup duration and advanced settings.');
const demandWh=applianceMode?applianceData.energy:load*hours;
const requiredUsable=demandWh*(1+reserve)/eff,nominalNeeded=requiredUsable/dod;
const owned=ownedChoice();
const inventory=groups.map(g=>({g,count:owned?n(`g-${g}-count`):0,ah:n(`g-${g}-ah`),price:n(`g-${g}-price`)}));
for(const x of inventory)if(!Number.isInteger(x.count)||x.count<0||!Number.isFinite(x.ah)||x.ah<=0||!Number.isFinite(x.price)||x.price<0)throw Error('Invalid battery inventory in group '+x.g+'.');
// One homogeneous grade per pack. Higher capacity A grade is preferred if its price premium is reasonable.
// Existing modules count only when they belong to the same chosen grade; no cross-grade strings.
const series=Math.max(1,Math.round(bus/7.2));
const options=inventory.map(x=>{
 const stringWh=series*7.2*x.ah;
 const parallel=Math.max(1,Math.ceil(requiredUsable/(stringWh*dod)));
 const total=series*parallel,used=Math.min(total,x.count),extra=total-used;
 const nominalV=series*7.2,achievedWh=total*7.2*x.ah*dod;
 const cost=extra*x.price;
 return {...x,chem:'NiMH',v:7.2,series,parallel,total,used,extra,nominalV,achievedWh,cost,existingStrings:Math.floor(x.count/series)};
});
// Prefer best tested performance (capacity grade A first) if its module cost is within 20% of cheapest.
const cheapest=Math.min(...options.map(x=>x.cost));
const eligible=options.filter(x=>x.cost<=cheapest*1.20+1);
const best=eligible[0]||options[0];
const fixedIds=['c-inverter','c-bms','c-protect','c-cabinet','c-charger','c-labor'];
if(fixedIds.some(id=>!Number.isFinite(n(id))||n(id)<0))throw Error('Please check component costs.');
const fixed=fixedIds.reduce((sum,id)=>sum+n(id),0),totalCost=fixed+best.cost;
const inverterKw=Math.max(load*1.25,surge)/1000;
return {load,hours,surge,applianceMode,applianceData,eff,dod,reserve,bus,demandWh,requiredUsable,nominalNeeded,options,best,fixed,totalCost,inverterKw,owned,ac:230,inventory,available:inventory.reduce((s,x)=>s+x.count,0)};
}
function render(d){
const b=d.best,lines=[['Inverter (editable estimate)',n('c-inverter')],['NiMH monitoring and controls',n('c-bms')],['DC/AC protection',n('c-protect')],['Cabinet, busbars & wiring',n('c-cabinet')],['NiMH-compatible charging equipment',n('c-charger')],['Testing & commissioning',n('c-labor')],['Additional group '+b.g+' modules',b.cost]];
const inventoryText=d.owned?`You own <b>${d.available}</b> tested modules across A–F. This proposed homogeneous Grade ${b.g} pack uses <b>${b.used}</b> of your <b>${b.count}</b> Grade ${b.g} modules. Other grades are not counted as interchangeable.`:'No existing modules selected. All modules in the candidate pack must be sourced and tested.';
$('designer-results').innerHTML=`<div class="result-stat"><small>Household AC energy requirement</small><strong>${fmt(d.demandWh/1000,2)} kWh</strong></div>
<div class="result-stat"><small>Required nominal battery capacity (planning)</small><strong>${fmt(d.nominalNeeded/1000,2)} kWh</strong></div>
<div class="result-stat"><small>Recommended minimum inverter rating</small><strong>${fmt(d.inverterKw,2)} kW · 230 V single-phase</strong></div>
<h4 class="result-sub">Recommended battery option · Grade ${b.g} / 7.2 V NiMH</h4>
<p class="result-note">Priority: higher tested usable capacity, provided the additional module purchase estimate is within 20% of the lowest-cost group option. A–F grade capacities and prices are editable assumptions, not verified offers.</p>
<div class="result-line"><span>Provisional inverter DC class</span><b>${d.bus} V class · ${fmt(b.nominalV)} V pack nominal</b></div>
<div class="result-line"><span>Series × parallel topology</span><b>${b.series}S × ${b.parallel}P</b></div>
<div class="result-line"><span>Total modules needed</span><b>${b.total}</b></div>
<div class="result-line"><span>Customer's modules (all groups)</span><b>${d.available}</b></div>
<div class="result-line"><span>Customer's Grade ${b.g} modules usable in this design</span><b>${b.used}</b></div>
<div class="result-line"><span>Additional Grade ${b.g} modules to purchase</span><b class="accent">${b.extra}</b></div>
<div class="result-line"><span>Estimated price per additional module</span><b>${money(b.price)}</b></div>
<div class="result-stat"><small>Additional battery module cost</small><strong>${money(b.cost)}</strong></div>
<p class="result-note">${inventoryText} ${b.count>b.used?`${b.count-b.used} Grade ${b.g} modules are left unused.`:''}</p>
<h4 class="result-sub">A–F alternative matched-grade packs</h4>
${d.options.map(x=>`<div class="result-line"><span>Grade ${x.g} · ${x.series}S × ${x.parallel}P · ${x.total} total · ${x.used} owned used · +${x.extra} to buy</span><b>${money(x.cost)}</b></div>`).join('')}
<h4 class="result-sub">Functional architecture</h4><div class="topology-visual"><div class="topology-block">${b.series} matched NiMH modules in series × ${b.parallel} matched parallel strings</div><div class="topology-arrow">↓</div><div class="topology-block">Per-string protection + NiMH monitoring + DC disconnect</div><div class="topology-arrow">↓</div><div class="topology-block">Compatible DC input inverter → 230 V single-phase AC → grid-isolating transfer switch → home loads</div></div>
<h4 class="result-sub">Additional project budget</h4>${lines.map(x=>`<div class="result-line"><span>${x[0]}</span><b>${money(x[1])}</b></div>`).join('')}
<div class="result-stat"><small>Total indicative additional cost (owned batteries excluded)</small><strong class="accent">${money(d.totalCost)}</strong></div>
<div class="result-warning">Preliminary academic estimate, NOT a validated wiring plan. Verify inverter minimum/maximum DC voltage, charge limits, NiMH charging profile, module current rating, temperature, internal resistance and grade matching. Grade A–F does not guarantee a safe usable cell. Parallel strings require individually engineered protection. Never backfeed the CEB grid. Prices are editable assumptions, not market quotations.</div>`;
}
function calculate(){try{last=compute();render(last)}catch(e){last=null;$('designer-results').innerHTML='<div class="error"></div>';$('designer-results').firstChild.textContent=e.message;console.error('System design:',e);}}
$('calculate-design').addEventListener('click',calculate);

// A4 quotation: browser-native print / Save as PDF, no external PDF libraries.
function printQuotation(){
  // Recompute so the quotation always reflects the latest form values.
  try{last=compute();render(last);}catch(e){calculate();alert('Please correct the system design inputs before printing: '+e.message);return;}
  const d=last,b=d.best;
  const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text=id=>escapeHTML(($(id)?.value||'').trim());
  const customer=text('q-customer')||'Customer / project',location=text('q-location')||'Not specified';
  const ref=text('q-ref')||'BMS-'+new Date().toISOString().slice(0,10).replace(/-/g,'');
  const validity=Math.max(1,Math.min(365,Number($('q-validity')?.value)||14));
  const today=new Date(),expiry=new Date(today);expiry.setDate(today.getDate()+validity);
  const dateFormat=x=>x.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  const moneyCell=x=>'Rs. '+Math.round(x).toLocaleString('en-LK');
  const items=[
    ['Additional Grade '+b.g+' used NiMH modules (7.2 V)',b.extra,b.price,b.cost,'Battery modules'],
    ['230 V single-phase inverter (provisional)',1,n('c-inverter'),n('c-inverter'),'Equipment'],
    ['NiMH BMS, monitoring & controls',1,n('c-bms'),n('c-bms'),'Equipment'],
    ['DC / AC breakers, fuses & protection',1,n('c-protect'),n('c-protect'),'Electrical works'],
    ['Cabinet, busbars, cables & wiring',1,n('c-cabinet'),n('c-cabinet'),'Electrical works'],
    ['NiMH-compatible charger / charging interface',1,n('c-charger'),n('c-charger'),'Equipment'],
    ['Installation, testing & commissioning',1,n('c-labor'),n('c-labor'),'Services']
  ];
  const subtotal=items.reduce((a,r)=>a+r[3],0);
  const applianceRows=d.applianceMode?getApplianceRows().filter(a=>a.enabled&&a.qty>0).map(a=>`<tr><td>${escapeHTML(a.name)}</td><td class="right">${a.qty}</td><td class="right">${a.w} W</td><td class="right">${Math.min(a.hours,d.hours)} h</td></tr>`).join(''):'';
  const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Quotation ${ref}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>
@page{size:A4;margin:13mm}*{box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif;color:#17283a;margin:0;font-size:11px;line-height:1.48;background:#fff}.sheet{max-width:850px;margin:auto}.top{display:flex;justify-content:space-between;gap:20px;border-bottom:3px solid #087e93;padding-bottom:17px}.brand{font-size:24px;font-weight:800;letter-spacing:-.6px;color:#0b3547}.brand span{color:#0c9db4}.eyebrow{color:#527287;font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:bold}.quote-title{text-align:right;font-size:25px;font-weight:800;color:#102e43}.meta{margin-top:6px;color:#546a79}.columns{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:20px 0}.box{border:1px solid #d8e5ec;border-radius:9px;padding:13px;background:#f7fbfd}.box h3{margin:0 0 9px;font-size:10px;letter-spacing:1px;color:#4b7489;text-transform:uppercase}.box strong{font-size:13px;color:#15364a}.summary{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 20px}.stat{border-radius:9px;padding:12px;background:#eaf6f9}.stat small{display:block;color:#4b7082;font-size:10px}.stat b{display:block;font-size:16px;margin-top:3px;color:#0b4054}h2{font-size:13px;margin:21px 0 9px;color:#113a50;border-left:4px solid #0d9eb4;padding-left:9px}table{width:100%;border-collapse:collapse;table-layout:fixed}th{background:#103b50;color:#fff;font-size:10px;text-align:left;padding:9px 8px}td{padding:9px 8px;border-bottom:1px solid #e4edf2;vertical-align:top}tr:nth-child(even) td{background:#f7fafc}.right{text-align:right}.money{white-space:nowrap}.total{margin:16px 0 8px;display:flex;justify-content:space-between;align-items:center;background:#103b50;color:white;padding:16px;border-radius:9px}.total strong{font-size:21px}.note{border-left:3px solid #e3a440;background:#fff9ec;padding:11px 13px;margin-top:14px;color:#594d35}.footer{margin-top:24px;border-top:1px solid #d5e2e9;padding-top:11px;color:#607889;font-size:10px;display:flex;justify-content:space-between}.muted{color:#5d7483}.tiny{font-size:10px}tr{break-inside:avoid}h2{break-after:avoid}@media print{.no-print{display:none!important}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}.sheet{max-width:none}}@media screen{body{background:#e9f1f5;padding:25px}.sheet{background:#fff;padding:35px;box-shadow:0 8px 32px #b8c9d4}.no-print{max-width:850px;margin:0 auto 18px;display:flex;gap:10px;align-items:center}.no-print button{background:#0b8197;color:white;border:0;border-radius:7px;padding:11px 18px;font-weight:700;cursor:pointer}}
</style></head><body><div class="no-print"><button onclick="window.print()">Print / Save as PDF</button><span>In the print dialog, select <b>Save as PDF</b> and A4 paper.</span></div><main class="sheet">
<div class="top"><div><div class="eyebrow">Second-life energy storage research</div><div class="brand">SecondLife <span>Lab BMS</span></div><div class="meta">NiMH battery backup system • Preliminary quotation</div></div><div><div class="quote-title">QUOTATION</div><div class="meta">Ref: ${ref}<br>Issued: ${dateFormat(today)}<br>Valid until: ${dateFormat(expiry)}</div></div></div>
<div class="columns"><div class="box"><h3>Prepared for</h3><strong>${customer}</strong><br>${location}<br><span class="muted">230 V AC · single-phase backup</span></div><div class="box"><h3>Design overview</h3><strong>${fmt(d.load,0)} W running load</strong><br>${fmt(d.hours,1)} hours backup requested<br>${fmt(d.demandWh/1000,2)} kWh estimated AC energy</div></div>
<div class="summary"><div class="stat"><small>Recommended inverter</small><b>${fmt(d.inverterKw,2)} kW min.</b></div><div class="stat"><small>Battery configuration</small><b>${b.series}S × ${b.parallel}P</b></div><div class="stat"><small>Additional modules</small><b>${b.extra} units</b></div></div>
<h2>Battery module allocation</h2><table><thead><tr><th>Specification</th><th class="right">Quantity / value</th></tr></thead><tbody>
<tr><td>Selected used NiMH battery grade</td><td class="right">Grade ${b.g} · 7.2 V nominal</td></tr><tr><td>Total matched modules required</td><td class="right">${b.total}</td></tr><tr><td>Customer-owned modules across all grades</td><td class="right">${d.available}</td></tr><tr><td>Selected Grade ${b.g} modules allocated from customer stock</td><td class="right">${b.used}</td></tr><tr><td>Additional Grade ${b.g} modules to purchase</td><td class="right"><b>${b.extra}</b></td></tr><tr><td>Nominal battery pack voltage / target DC class</td><td class="right">${fmt(b.nominalV)} V / ${d.bus} V class</td></tr></tbody></table>
<h2>Itemized estimated project costs</h2><table><thead><tr><th style="width:45%">Description</th><th class="right" style="width:11%">Qty</th><th class="right" style="width:22%">Unit price</th><th class="right" style="width:22%">Amount (LKR)</th></tr></thead><tbody>${items.map(r=>`<tr><td>${escapeHTML(r[0])}<div class="tiny muted">${escapeHTML(r[4])}</div></td><td class="right">${r[1]}</td><td class="right money">${moneyCell(r[2])}</td><td class="right money">${moneyCell(r[3])}</td></tr>`).join('')}</tbody></table>
<div class="total"><span>ESTIMATED ADDITIONAL PROJECT TOTAL<br><small>Existing customer-owned batteries excluded</small></span><strong>${moneyCell(subtotal)}</strong></div>
${applianceRows?`<h2>Selected home appliances</h2><table><thead><tr><th>Appliance</th><th class="right">Qty</th><th class="right">Power each</th><th class="right">Run time</th></tr></thead><tbody>${applianceRows}</tbody></table>`:''}
<div class="note"><b>Important — indicative estimate only.</b> Prices are editable research assumptions, not verified supplier offers. The configuration is preliminary and must be checked against tested module capacity, current and thermal limits, NiMH charging profile, inverter operating voltage range, protection and safe CEB isolation. Taxes, delivery and permit costs are not included unless entered in component amounts. This is not a tax invoice or a certified installation design.</div>
<div class="footer"><span>SecondLife Lab BMS · Academic research estimate</span><span>Quotation ${ref} · Generated ${dateFormat(today)}</span></div></main></body></html>`;
  const win=window.open('','_blank');
  if(!win){alert('Your browser blocked the quotation window. Please allow pop-ups for this website and try again.');return;}
  win.document.open();win.document.write(html);win.document.close();win.focus();
}
$('print-quotation').addEventListener('click',printQuotation);

$('export-design').addEventListener('click',()=>{if(!last)calculate();if(!last)return;const d=last,b=d.best;const rows=[['Metric','Value','Unit'],['Maximum running load',d.load,'W'],['Load calculation mode',d.applianceMode?'Appliances':'Manual',''],['Backup duration',d.hours,'hours'],['Peak load',d.surge,'W'],['Battery usable requirement',d.requiredUsable/1000,'kWh'],['Nominal energy requirement',d.nominalNeeded/1000,'kWh'],['Inverter sizing floor',d.inverterKw,'kW'],['Existing modules available',d.owned?'Yes':'No',''],['Selected battery group',b.g,''],['Chemistry',b.chem,''],['Modules in series',b.series,''],['Parallel strings',b.parallel,''],['Modules total',b.total,''],['Modules owned used',b.used,''],['Additional modules',b.extra,''],['Estimated nominal pack voltage',b.nominalV,'V'],['Estimated usable pack energy',b.achievedWh/1000,'kWh'],['Extra module cost',b.cost,'LKR'],['Fixed component estimate',d.fixed,'LKR'],['Total additional budget',d.totalCost,'LKR'],['Disclaimer','Preliminary estimate; engineering validation required','']];d.options.forEach(x=>rows.push(['Group '+x.g+' candidate',`${x.series}S${x.parallel}P; extra ${x.extra}; cost ${x.cost}`,'']));if(d.applianceMode){rows.push(['Appliance','Quantity','Watts each / Hours / Energy Wh']);getApplianceRows().filter(a=>a.enabled&&a.qty>0).forEach(a=>rows.push([a.name,a.qty,`${a.w} W / ${Math.min(a.hours,d.hours)} h / ${Math.round(a.qty*a.w*Math.min(a.hours,d.hours))} Wh`]));}const csv=rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='second_life_bms_design_estimate.csv';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)});

// Household appliance mode — independently estimates maximum power and energy.
const applianceCatalog=[
 ['LED bulb',10,4,1],['Ceiling fan',75,4,2.5],['Pedestal fan',50,4,2.5],
 ['LED television',100,3,1],['Wi-Fi router',15,4,1],['Phone charger',15,2,1],
 ['Refrigerator',150,2,4],['Rice cooker',750,0.5,1],['Electric kettle',1000,0.2,1],
 ['Electric iron',1000,0.5,1],['Laptop',65,3,1],['Desktop PC',200,3,1],
 ['Water pump',500,0.5,3],['Washing machine',500,1,2.5],['Microwave',1200,0.2,1],
 ['Air conditioner',1100,3,3],['Electric cooker',1500,0.5,1],['Security camera / DVR',35,4,1]
];
let appliances=applianceCatalog.map(([name,w,h,surge])=>({name,w,hours:h,surge,qty:0,enabled:false}));
const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function getApplianceRows(){return appliances;}
function getApplianceTotals(){const duration=n('p-hours');if(!Number.isFinite(duration)||duration<=0)throw Error('Enter a valid backup duration.');let running=0,energy=0,maxSurgeExtra=0;for(const a of appliances){if(!a.enabled||a.qty===0)continue;if(!Number.isInteger(a.qty)||a.qty<0||!Number.isFinite(a.w)||a.w<=0||!Number.isFinite(a.hours)||a.hours<0)throw Error('Check appliance quantity, watts and hours.');running+=a.qty*a.w;energy+=a.qty*a.w*Math.min(a.hours,duration);maxSurgeExtra=Math.max(maxSurgeExtra,a.w*(a.surge-1));}return {running,energy,peak:Math.ceil(running+maxSurgeExtra)};}
function updateApplianceTotals(){const duration=Number($('p-hours').value)||0;for(let i=0;i<appliances.length;i++){const a=appliances[i],cell=$('app-energy-'+i);if(cell)cell.textContent=(a.enabled?a.qty*a.w*Math.min(a.hours,Math.max(0,duration)):0).toLocaleString('en-US',{maximumFractionDigits:1});}try{const t=getApplianceTotals();$('appliance-running').textContent=fmt(t.running,0)+' W';$('appliance-energy').textContent=fmt(t.energy/1000,3)+' kWh';$('appliance-peak').textContent=fmt(t.peak,0)+' W';}catch(e){$('appliance-energy').textContent='Check inputs';}}
function renderAppliances(){ $('appliance-rows').innerHTML=appliances.map((a,i)=>`<tr><td><input aria-label="Use ${esc(a.name)}" type="checkbox" data-i="${i}" data-k="enabled" ${a.enabled?'checked':''}></td><td><b>${esc(a.name)}</b></td><td><input aria-label="${esc(a.name)} quantity" type="number" min="0" max="1000" step="1" data-i="${i}" data-k="qty" value="${a.qty}"></td><td><input aria-label="${esc(a.name)} watts" type="number" min="1" max="50000" step="1" data-i="${i}" data-k="w" value="${a.w}"></td><td><input aria-label="${esc(a.name)} operating hours" type="number" min="0" max="168" step="0.1" data-i="${i}" data-k="hours" value="${a.hours}"></td><td id="app-energy-${i}">0</td></tr>`).join('');updateApplianceTotals();}
$('appliance-rows').addEventListener('input',e=>{const t=e.target;if(!t.dataset.k)return;const a=appliances[Number(t.dataset.i)];a[t.dataset.k]=t.type==='checkbox'?t.checked:Number(t.value);updateApplianceTotals();});
$('appliance-rows').addEventListener('change',e=>{if(e.target.type==='checkbox'){$('appliance-rows').dispatchEvent(new Event('input',{bubbles:false}));updateApplianceTotals();}});
document.querySelectorAll('input[name="load-mode"]').forEach(x=>x.addEventListener('change',()=>{const mode=document.querySelector('input[name="load-mode"]:checked').value;$('manual-load-panel').hidden=mode!=='manual';$('appliance-load-panel').hidden=mode!=='appliances';calculate();}));
$('appliance-essentials').addEventListener('click',()=>{appliances.forEach(a=>{a.enabled=false;a.qty=0;});[['LED bulb',10],['Ceiling fan',1],['Wi-Fi router',1],['Refrigerator',1],['LED television',1]].forEach(([name,qty])=>{const a=appliances.find(x=>x.name===name);a.enabled=true;a.qty=qty;});renderAppliances();calculate();});
$('appliance-clear').addEventListener('click',()=>{appliances.forEach(a=>{a.enabled=false;a.qty=0;});renderAppliances();});
$('add-appliance').addEventListener('click',()=>{const name=$('custom-appliance-name').value.trim(),w=Number($('custom-appliance-w').value);if(!name||!Number.isFinite(w)||w<=0||w>50000){alert('Enter an appliance name and valid wattage.');return;}appliances.push({name,w,hours:Math.min(1,Number($('p-hours').value)||1),surge:1,qty:1,enabled:true});$('custom-appliance-name').value='';renderAppliances();});
$('p-hours').addEventListener('input',()=>{updateApplianceTotals();calculate();});
$('designer').addEventListener('change',e=>{if(e.target.matches('input,select'))calculate();});
$('designer').addEventListener('input',e=>{if(e.target.matches('input[type=number]')&&!e.target.closest('#appliance-rows'))calculate();});
$('appliance-rows').addEventListener('input',()=>calculate());
renderAppliances();
updateOwnership();
})();
