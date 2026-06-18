// ═══════════════════════════════════════
// NEC ARTICLES REFERENCE
// ═══════════════════════════════════════
const NEC_ARTICLES = [
  {num:'90',title:'Introduction',points:['NEC sets minimum safety standards — not design specs','Mandatory rules: "shall"; advisory: "shall be permitted"','Enforcement by local AHJ (Authority Having Jurisdiction)','Covers premises wiring only'],sections:[{s:'90.1',d:'Purpose'},{s:'90.2',d:'Scope'},{s:'90.4',d:'Enforcement'}]},
  {num:'100',title:'Definitions',points:['Ampacity: maximum current conductor can carry continuously','Bonding jumper: connects metal parts for continuity','Dwelling unit: single living space for one household','Grounded conductor: intentionally connected to ground (neutral)'],sections:[{s:'100',d:'All key electrical definitions'}]},
  {num:'110',title:'Requirements for Electrical Installations',points:['36" minimum working clearance (up to 150V to ground)','42" minimum for 150V–600V equipment','90" headroom required for service equipment','Unused openings in enclosures must be closed'],sections:[{s:'110.26',d:'Spaces About Electrical Equipment'},{s:'110.12',d:'Mechanical Execution of Work'}]},
  {num:'200',title:'Use and Identification of Grounded Conductors',points:['White or gray insulation required for grounded (neutral) conductors','White with colored stripe permitted','6 AWG or larger: re-identification permitted','Terminals for grounded conductors must be identified (white/silver)'],sections:[{s:'200.6',d:'Identifying Grounded Conductors'},{s:'200.10',d:'Identification of Terminals'}]},
  {num:'210',title:'Branch Circuits',points:['15A circuits: 14 AWG minimum; 20A: 12 AWG minimum','GFCI required: bathrooms, garages, outdoors, crawlspaces, kitchens','AFCI required: bedrooms, living rooms, dining rooms, kitchens (most 120V 15/20A)','Two 20A small appliance circuits required in kitchen area','Receptacle placement: every 12 feet along wall in dwellings'],sections:[{s:'210.8',d:'GFCI Required Locations'},{s:'210.12',d:'AFCI Protection'},{s:'210.19',d:'Conductor Sizing'},{s:'210.52',d:'Dwelling Unit Receptacle Placement'}]},
  {num:'215',title:'Feeders',points:['Feeder conductors sized by calculated load (Article 220)','Tap rules: 1/3 rule, 10-foot tap, 25-foot tap','Feeder neutral sizing may be reduced in some cases'],sections:[{s:'215.2',d:'Minimum Rating and Size'},{s:'215.10',d:'Ground-Fault Protection'}]},
  {num:'220',title:'Branch-Circuit, Feeder, and Service Calculations',points:['General lighting: 3 VA/sq ft for dwellings','Small appliance circuits: 1,500 VA each for load calc','Laundry circuit: 1,500 VA','Add 25% of largest motor FLA to total load','Demand factors may reduce calculated loads'],sections:[{s:'220.12',d:'General Lighting Loads'},{s:'220.42',d:'Lighting Demand Factors'},{s:'220.52',d:'Small Appliance and Laundry Loads'},{s:'220.55',d:'Ranges and Cooking Equipment'}]},
  {num:'225',title:'Outside Branch Circuits and Feeders',points:['Overhead conductors: 10 ft min above grade','12 ft min over driveways','18 ft min over public streets','Separate buildings need a disconnecting means'],sections:[{s:'225.18',d:'Clearance for Overhead Conductors'},{s:'225.32',d:'Location of Disconnect'}]},
  {num:'230',title:'Services',points:['Minimum 100A, 3-wire service for single-family dwellings','Maximum 6 service disconnects','Service entrance conductors: overhead (SE) or underground (USE)','Service equipment must be readily accessible'],sections:[{s:'230.24',d:'Service Drop Clearances'},{s:'230.70',d:'Disconnect Location'},{s:'230.79',d:'Rating of Service Disconnect'},{s:'230.42',d:'Minimum Size and Ampacity'}]},
  {num:'240',title:'Overcurrent Protection',points:['OCPD must not exceed conductor ampacity','Standard ratings: 15, 20, 30, 40, 50, 60, 70, 80, 90, 100A...','Breakers must be located at point conductor receives supply','Motors and transformers have specific OCPD rules'],sections:[{s:'240.4',d:'Protection of Conductors'},{s:'240.6',d:'Standard Ampere Ratings'},{s:'240.21',d:'Tap Conductor Requirements'}]},
  {num:'250',title:'Grounding and Bonding',points:['All service equipment must be grounded','EGC provides low-impedance fault current path','Grounding electrode system: water pipe, rod, concrete-encased electrode','Main bonding jumper connects neutral to ground at service','Ground rod minimum 8 ft; two rods if resistance >25 ohms'],sections:[{s:'250.4',d:'General Grounding Requirements'},{s:'250.50',d:'Grounding Electrode System'},{s:'250.52',d:'Grounding Electrodes'},{s:'250.66',d:'GEC Sizing Table'},{s:'250.122',d:'EGC Sizing Table'}]},
  {num:'300',title:'General Requirements for Wiring Methods',points:['All conductors must be protected from physical damage','360° maximum bends between pull points','Underground wiring depth per Table 300.5','12" free conductor required at each outlet/switch box'],sections:[{s:'300.4',d:'Protection Against Physical Damage'},{s:'300.5',d:'Underground Installations'},{s:'300.14',d:'Length of Free Conductors'}]},
  {num:'310',title:'Conductors for General Wiring',points:['NEC Table 310.16 is the main ampacity table (most tested)','Ampacity based on: conductor size, insulation type, ambient temp','Derating required for 4+ current-carrying conductors in raceway','THHN/THWN-2: 90°C, most common commercial conductor','Neutral may not count as CCC in most circuits'],sections:[{s:'310.15',d:'Ampacity Tables and Adjustment Factors'},{s:'Table 310.16',d:'Allowable Ampacities (the main table)'}]},
  {num:'314',title:'Outlet, Device, Pull and Junction Boxes',points:['Box fill calculated in cubic inches per NEC 314.16','Each conductor, clamp, device counts toward fill','Ceiling boxes must be rated for fan support (35 lb min)','Pull boxes: straight pull = 8× conduit diameter'],sections:[{s:'314.16',d:'Number of Conductors in Boxes'},{s:'314.27',d:'Fan Support Requirements'},{s:'314.28',d:'Pull and Junction Box Sizing'}]},
  {num:'320',title:'Armored Cable (Type AC)',points:['Interlocking steel armor; dry locations only','Requires anti-short bushing (red insulating insert) at each end','Support: every 4.5 ft and within 12" of boxes','NOT permitted in wet/damp locations or direct earth burial'],sections:[{s:'320.10',d:'Uses Permitted'},{s:'320.30',d:'Securing and Supporting'}]},
  {num:'330',title:'Metal-Clad Cable (Type MC)',points:['Interlocking metal armor — stronger than Type AC','Contains green insulated EGC','Permitted in wet locations if listed MC is used','Support: every 6 ft and within 12" of boxes'],sections:[{s:'330.10',d:'Uses Permitted'},{s:'330.30',d:'Securing and Supporting'}]},
  {num:'334',title:'Nonmetallic-Sheathed Cable (NM-B / Romex)',points:['Permitted in residential 1- and 2-family dwellings and multi-family up to 3 stories','NOT permitted in commercial high-rises, wet/damp locations, or concrete','Support: every 4.5 ft and within 12" of boxes','14-2 for 15A, 12-2 for 20A, 10-2 for 30A circuits'],sections:[{s:'334.10',d:'Uses Permitted'},{s:'334.12',d:'Uses NOT Permitted'},{s:'334.30',d:'Securing and Supporting'}]},
  {num:'344',title:'Rigid Metal Conduit (RMC)',points:['Heaviest wall of all metal conduit types','Permitted everywhere including concrete, wet, hazardous locations','Support: every 10 ft and within 3 ft of outlet boxes','Can be used as EGC'],sections:[{s:'344.10',d:'Uses Permitted'},{s:'344.30',d:'Securing and Supporting'}]},
  {num:'358',title:'Electrical Metallic Tubing (EMT)',points:['Thin-wall; cannot be threaded — uses compression/set-screw fittings','Support: every 10 ft, within 3 ft of boxes','360° maximum total bends between pull points','Most common conduit type for commercial work'],sections:[{s:'358.10',d:'Uses Permitted'},{s:'358.12',d:'Uses NOT Permitted'},{s:'358.26',d:'Bends — 360° Maximum'},{s:'358.30',d:'Securing and Supporting'}]},
  {num:'400',title:'Flexible Cords and Cables',points:['NOT a substitute for fixed wiring','Cannot run through walls, ceilings, or floors','Cannot be attached to building for support','Extension cords are temporary only'],sections:[{s:'400.8',d:'Uses NOT Permitted'},{s:'400.10',d:'Uses Permitted'}]},
  {num:'410',title:'Luminaires, Lampholders, and Lamps',points:['Recessed fixtures in insulated ceilings must be IC-rated','Clearances required from combustible materials','Damp/wet location fixtures must be listed for that use','Track lighting has specific installation requirements'],sections:[{s:'410.10',d:'Specific Locations'},{s:'410.16',d:'Luminaires in Clothes Closets'},{s:'410.22',d:'Support Requirements'}]},
  {num:'430',title:'Motors, Motor Circuits, and Controllers',points:['Branch circuit conductors: 125% of motor FLA','Inverse time breaker OCPD: up to 250% of FLA','Overload protection: 115% or 125% of nameplate current','Disconnect: within sight and within 50 ft of motor','NEC Table 430.250: 3-phase FLA values'],sections:[{s:'430.22',d:'Single Motor Conductor Sizing'},{s:'430.32',d:'Overload Protection'},{s:'430.52',d:'Branch Circuit OCPD Rating'},{s:'430.102',d:'Disconnect Location'},{s:'Table 430.250',d:'3-Phase Motor FLA Values'}]},
  {num:'440',title:'Air-Conditioning and Refrigerating Equipment',points:['Covers hermetic refrigerant motor-compressors','Branch circuit OCPD: up to 175% of nameplate current','Disconnect required within sight of unit','Must be lockable in open position'],sections:[{s:'440.14',d:'Location of Disconnecting Means'},{s:'440.22',d:'Application of OCPD'}]},
  {num:'445',title:'Generators',points:['Generator nameplate must show kW/kVA, voltage, frequency, PF','Portable generators need GFCI on 120V receptacles','Transfer equipment prevents parallel with utility (unless approved)','Neutral must be properly bonded or floating per transfer switch type'],sections:[{s:'445.11',d:'Marking'},{s:'445.18',d:'Disconnecting Means'},{s:'445.20',d:'GFCI for Portable Generators'}]},
  {num:'450',title:'Transformers and Transformer Vaults',points:['Overcurrent protection required on primary side','Dry-type up to 112.5 kVA can be installed indoors without vault','Oil-filled over 112.5 kVA requires a vault','Separately derived system grounding per NEC 250.30'],sections:[{s:'450.3',d:'Overcurrent Protection'},{s:'450.9',d:'Ventilation'},{s:'450.21',d:'Dry-Type Indoors'}]},
  {num:'480',title:'Storage Batteries',points:['Ventilation required — hydrogen gas prevention','Disconnecting means required','Eye wash facilities where electrolyte may be released','Covers all rechargeable battery types'],sections:[{s:'480.9',d:'Wiring from Batteries'},{s:'480.10',d:'Vented Lead-Acid'},{s:'480.11',d:'Sealed Lead-Acid'}]},
  {num:'500',title:'Hazardous (Classified) Locations',points:['Class I: flammable gases (Div 1=normally present, Div 2=abnormal)','Class II: combustible dust','Class III: ignitable fibers','Equipment must be listed for specific class and division','Zone system (Zone 0,1,2) is alternative classification'],sections:[{s:'500.5',d:'Classifications'},{s:'500.7',d:'Protection Techniques'},{s:'500.8',d:'Equipment Requirements'}]},
  {num:'517',title:'Health Care Facilities',points:['Patient care areas: strict grounding reliability requirements','Essential electrical system: critical branch + life safety branch','Generator backup required for life safety','Isolated power systems in wet procedure locations'],sections:[{s:'517.13',d:'Grounding in Patient Care Areas'},{s:'517.30',d:'Essential Electrical Systems'}]},
  {num:'700',title:'Emergency Systems',points:['Power within 10 seconds of normal failure','Legally required by governmental authority','Annual testing with written record required','Includes exit signs, egress lighting, fire alarm power'],sections:[{s:'700.12',d:'Sources of Power'},{s:'700.17',d:'Transfer Equipment'},{s:'700.27',d:'Coordination'}]},
  {num:'701',title:'Legally Required Standby Systems',points:['60-second restoration time maximum','Required by government codes (HVAC, pumps, etc.)','Annual testing required'],sections:[{s:'701.12',d:'Sources of Power'},{s:'701.17',d:'Transfer Equipment'}]},
  {num:'702',title:'Optional Standby Systems',points:['Owner-selected loads; not code-required','No specific restoration time','Portable generators common for optional standby'],sections:[{s:'702.12',d:'Sources of Power'},{s:'702.17',d:'Transfer Equipment'}]}
];

// ═══════════════════════════════════════
// WIRE DATA - Ampacity Table
// ═══════════════════════════════════════
const WIRE_DATA = [
  {awg:'14',cu60:15,cu75:20,cu90:25,al75:'—',use:'Lighting, 15A circuits'},
  {awg:'12',cu60:20,cu75:25,cu90:30,al75:20,use:'General purpose, 20A circuits'},
  {awg:'10',cu60:30,cu75:35,cu90:40,al75:30,use:'A/C, dryers (smaller)'},
  {awg:'8',cu60:40,cu75:50,cu90:55,al75:40,use:'Ranges, water heaters'},
  {awg:'6',cu60:55,cu75:65,cu90:75,al75:50,use:'Subpanels, larger ranges'},
  {awg:'4',cu60:70,cu75:85,cu90:95,al75:65,use:'Large A/C, small feeders'},
  {awg:'3',cu60:85,cu75:100,cu90:115,al75:75,use:'Service entrance, feeders'},
  {awg:'2',cu60:95,cu75:115,cu90:130,al75:90,use:'Service entrance, feeders'},
  {awg:'1',cu60:110,cu75:130,cu90:145,al75:100,use:'Service conductors'},
  {awg:'1/0',cu60:125,cu75:150,cu90:170,al75:120,use:'Service, 150A feeders'},
  {awg:'2/0',cu60:145,cu75:175,cu90:195,al75:135,use:'200A service'},
  {awg:'3/0',cu60:165,cu75:200,cu90:225,al75:155,use:'200A+ service, feeders'},
  {awg:'4/0',cu60:195,cu75:230,cu90:260,al75:180,use:'200A+ service'},
  {awg:'250',cu60:215,cu75:255,cu90:290,al75:205,use:'Large feeders, 400A service'},
  {awg:'300',cu60:240,cu75:285,cu90:320,al75:230,use:'Large feeders'},
  {awg:'350',cu60:260,cu75:310,cu90:350,al75:250,use:'400A+ feeders'},
  {awg:'400',cu60:280,cu75:335,cu90:380,al75:270,use:'400A+ feeders'},
  {awg:'500',cu60:320,cu75:380,cu90:430,al75:310,use:'Large services, switchgear'}
];

// ═══════════════════════════════════════
// CONDUIT FILL DATA
// ═══════════════════════════════════════
const CONDUIT_FILL_DATA = [
  {size:'½"',type:'EMT',w14:4,w12:3,w10:2,w8:1,w6:1,w4:0,w3:0,w2:0,w1_0:0,w2_0:0,w3_0:0,w4_0:0},
  {size:'¾"',type:'EMT',w14:7,w12:5,w10:4,w8:2,w6:1,w4:1,w3:1,w2:1,w1_0:1,w2_0:0,w3_0:0,w4_0:0},
  {size:'1"',type:'EMT',w14:12,w12:9,w10:7,w8:4,w6:3,w4:2,w3:1,w2:1,w1_0:1,w2_0:1,w3_0:1,w4_0:1},
  {size:'1¼"',type:'EMT',w14:20,w12:15,w10:11,w8:7,w6:5,w4:3,w3:3,w2:2,w1_0:1,w2_0:1,w3_0:1,w4_0:1},
  {size:'1½"',type:'EMT',w14:27,w12:20,w10:15,w8:9,w6:7,w4:4,w3:4,w2:3,w1_0:2,w2_0:2,w3_0:1,w4_0:1},
  {size:'2"',type:'EMT',w14:45,w12:34,w10:25,w8:15,w6:11,w4:7,w3:6,w2:5,w1_0:4,w2_0:3,w3_0:3,w4_0:2},
  {size:'2½"',type:'RMC',w14:60,w12:45,w10:34,w8:20,w6:15,w4:10,w3:9,w2:7,w1_0:6,w2_0:5,w3_0:4,w4_0:3},
  {size:'3"',type:'RMC',w14:96,w12:72,w10:54,w8:32,w6:24,w4:16,w3:14,w2:11,w1_0:9,w2_0:8,w3_0:6,w4_0:5},
  {size:'3½"',type:'RMC',w14:130,w12:98,w10:73,w8:44,w6:33,w4:22,w3:19,w2:15,w1_0:12,w2_0:11,w3_0:9,w4_0:7},
  {size:'4"',type:'RMC',w14:170,w12:128,w10:96,w8:57,w6:43,w4:29,w3:25,w2:20,w1_0:16,w2_0:14,w3_0:11,w4_0:9}
];

// ═══════════════════════════════════════
// FORMULA DATA
// ═══════════════════════════════════════
const FORMULA_DATA = [
  {category:"Ohm's Law",formulas:[
    {name:'Voltage',formula:'V = I × R',vars:[{s:'V',d:'Voltage (volts)'},{s:'I',d:'Current (amperes)'},{s:'R',d:'Resistance (ohms)'}],example:'I=5A, R=24Ω → V=5×24=120V'},
    {name:'Current',formula:'I = V ÷ R',vars:[{s:'I',d:'Current (A)'},{s:'V',d:'Voltage (V)'},{s:'R',d:'Resistance (Ω)'}],example:'V=120V, R=15Ω → I=120÷15=8A'},
    {name:'Resistance',formula:'R = V ÷ I',vars:[{s:'R',d:'Resistance (Ω)'},{s:'V',d:'Voltage (V)'},{s:'I',d:'Current (A)'}],example:'V=240V, I=20A → R=240÷20=12Ω'}
  ]},
  {category:'Power Formulas',formulas:[
    {name:'Power (basic)',formula:'P = V × I',vars:[{s:'P',d:'Power (watts)'},{s:'V',d:'Voltage (V)'},{s:'I',d:'Current (A)'}],example:'V=120V, I=15A → P=120×15=1,800W'},
    {name:'Power (I and R)',formula:'P = I² × R',vars:[{s:'P',d:'Power (W)'},{s:'I',d:'Current (A)'},{s:'R',d:'Resistance (Ω)'}],example:'I=10A, R=12Ω → P=100×12=1,200W'},
    {name:'3-Phase Power',formula:'P = √3 × VL × IL × PF',vars:[{s:'VL',d:'Line voltage'},{s:'IL',d:'Line current'},{s:'PF',d:'Power factor'}],example:'480V, 50A, PF=0.9 → P=1.732×480×50×0.9≈37,422W'}
  ]},
  {category:'Series Circuits',formulas:[
    {name:'Total Resistance',formula:'RT = R1 + R2 + R3...',vars:[{s:'RT',d:'Total resistance'},{s:'R1..n',d:'Individual resistances'}],example:'10+15+5=30Ω total'},
    {name:'Series Current',formula:'IT = V ÷ RT',vars:[{s:'IT',d:'Total current (same through all)'},{s:'V',d:'Source voltage'}],example:'V=120V, RT=30Ω → IT=4A'}
  ]},
  {category:'Parallel Circuits',formulas:[
    {name:'Total Resistance (2)',formula:'RT = (R1 × R2) ÷ (R1 + R2)',vars:[{s:'RT',d:'Total resistance'},{s:'R1,R2',d:'Parallel resistors'}],example:'R1=6Ω, R2=12Ω → RT=(72)÷18=4Ω'},
    {name:'Total Current',formula:'IT = I1 + I2 + I3...',vars:[{s:'IT',d:'Total from source'},{s:'I1..n',d:'Branch currents'}],example:'3A+5A+2A=10A total'}
  ]},
  {category:'Conduit Bending',formulas:[
    {name:'Stub Up Mark',formula:'Mark = Height − Take-Up',vars:[{s:'Mark',d:'Distance from end to bend point'},{s:'Take-Up',d:'Bender take-up value'}],example:'24" stub, ¾" EMT take-up=6" → Mark=18"'},
    {name:'Offset Distance',formula:'Distance = Rise × Multiplier',vars:[{s:'Multiplier',d:'30°=2.0, 45°=1.414, 22°=2.6'}],example:'Rise=6", 30° → Distance=6×2.0=12"'},
    {name:'Rolling Offset',formula:'True Offset = √(Rise² + Run²)',vars:[{s:'True Offset',d:'Use as rise for offset calc'}],example:'Rise=6", Run=8" → √(36+64)=10"'}
  ]},
  {category:'Voltage Drop',formulas:[
    {name:'Voltage Drop',formula:'VD = (2 × K × I × L) ÷ CM',vars:[{s:'K',d:'Cu=12.9, Al=21.2'},{s:'I',d:'Current (A)'},{s:'L',d:'One-way length (ft)'},{s:'CM',d:'Circular mils'}],example:'20A, 100ft, #12 Cu → VD=(2×12.9×20×100)÷6530≈7.9V'},
    {name:'VD Percentage',formula:'VD% = (VD ÷ V) × 100',vars:[{s:'VD%',d:'NEC recommends ≤3% branch, ≤5% total'}],example:'VD=3.6V, 120V → 3.6÷120×100=3%'}
  ]},
  {category:'Motor Calculations',formulas:[
    {name:'Motor Branch Conductor',formula:'Conductor = FLA × 1.25',vars:[{s:'FLA',d:'From NEC Table 430.250'},{s:'1.25',d:'125% per NEC 430.22'}],example:'10HP, 230V, 3Φ FLA=28A → 28×1.25=35A min'},
    {name:'Transformer kVA (3Φ)',formula:'kVA = (√3 × VL × IL) ÷ 1000',vars:[{s:'VL',d:'Line voltage'},{s:'IL',d:'Line current'}],example:'480V, 60A → (1.732×480×60)÷1000≈49.9 kVA'}
  ]},
  {category:'Lighting',formulas:[
    {name:'Footcandles',formula:'FC = Lumens ÷ Area (sq ft)',vars:[{s:'FC',d:'Illuminance level'},{s:'Lumens',d:'Total light output'}],example:'2,000 lumens over 100 sq ft → 20 FC'},
    {name:'Dwelling Lighting Load (NEC)',formula:'Load (VA) = Area × 3',vars:[{s:'3',d:'VA/sq ft per NEC Table 220.12'}],example:'1,500 sq ft → 1,500×3=4,500 VA'}
  ]}
];

// ═══════════════════════════════════════
// CONDUIT BENDING CONSTANTS
// ═══════════════════════════════════════
const CONDUIT_TAKEUP = {'0.5':5,'0.75':6,'1':8,'1.25':11,'1.5':13,'2':16,'0.5r':6,'0.75r':8,'1r':11};
const OFFSET_DATA = {'10':{mult:6.0,shrink:0.0625},'22':{mult:2.6,shrink:0.1875},'30':{mult:2.0,shrink:0.375},'45':{mult:1.414,shrink:0.5},'60':{mult:1.155,shrink:0.75}};

// ═══════════════════════════════════════
// REFERENCE RENDERING FUNCTIONS
// ═══════════════════════════════════════
function renderNECReference() {
  const container = document.getElementById('necArticleList');
  if (!container) return;
  renderNECList(NEC_ARTICLES, container);
}

function renderNECList(articles, container) {
  container.innerHTML = articles.map((a, idx) => `<div class="nec-article-card" id="nec-card-${idx}"><div class="nec-article-header" onclick="toggleNECArticle(${idx})"><div class="nec-article-num">Art. ${escHtml(a.num)}</div><div class="nec-article-title">${escHtml(a.title)}</div><div class="nec-article-toggle" id="nec-toggle-${idx}">▼</div></div><div class="nec-article-body" id="nec-body-${idx}"><div class="nec-key-points"><h5>Key Requirements</h5><ul>${a.points.map(p => `<li>${escHtml(p)}</li>`).join('')}</ul></div><div><h5 style="font-size:11px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">Most Tested Sections</h5><div class="nec-section-chips">${a.sections.map(s => `<div class="nec-section-chip"><strong>${escHtml(s.s)}</strong> — ${escHtml(s.d)}</div>`).join('')}</div></div></div></div>`).join('');
}

function toggleNECArticle(idx) {
  const body = document.getElementById('nec-body-' + idx);
  const toggle = document.getElementById('nec-toggle-' + idx);
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  if (toggle) toggle.textContent = isOpen ? '▼' : '▲';
}

function filterNEC() {
  const query = document.getElementById('necSearchInput').value.toLowerCase().trim();
  const container = document.getElementById('necArticleList');
  if (!query) { renderNECList(NEC_ARTICLES, container); return; }
  const filtered = NEC_ARTICLES.filter(a => a.num.includes(query) || a.title.toLowerCase().includes(query) || a.points.some(p => p.toLowerCase().includes(query)) || a.sections.some(s => s.d.toLowerCase().includes(query) || s.s.toLowerCase().includes(query)));
  renderNECList(filtered, container);
  if (filtered.length === 0) container.innerHTML = '<div class="empty-state"><span class="empty-icon">🔍</span><div class="empty-title">No articles found</div></div>';
}

function switchWireTab(tab, btn) {
  document.querySelectorAll('[id^="wire-panel-"]').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#page-wire-reference .tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('wire-panel-' + tab);
  if (panel) panel.classList.add('active');
  btn.classList.add('active');
}

function renderWireTable() {
  renderWireRows(WIRE_DATA);
  renderConduitFill();
}

function renderWireRows(data) {
  const tbody = document.getElementById('wireAmpacityBody');
  if (!tbody) return;
  tbody.innerHTML = data.map(r => `<tr><td class="hl">${escHtml(r.awg)}</td><td>${r.cu60}</td><td class="hl">${r.cu75}</td><td>${r.cu90}</td><td>${r.al75}</td><td style="font-size:12px;color:var(--muted);">${escHtml(r.use)}</td></tr>`).join('');
}

function renderConduitFill() {
  const tbody = document.getElementById('conduitFillBody');
  if (!tbody) return;
  tbody.innerHTML = CONDUIT_FILL_DATA.map(r => `<tr><td class="hl">${escHtml(r.size)}</td><td style="font-size:11px;color:var(--muted);">${escHtml(r.type)}</td><td>${r.w14||'—'}</td><td>${r.w12||'—'}</td><td>${r.w10||'—'}</td><td>${r.w8||'—'}</td><td>${r.w6||'—'}</td><td>${r.w4||'—'}</td><td>${r.w3||'—'}</td><td>${r.w2||'—'}</td><td>${r.w1_0||'—'}</td><td>${r.w2_0||'—'}</td><td>${r.w3_0||'—'}</td><td>${r.w4_0||'—'}</td></tr>`).join('');
}

function filterWire() {
  const q = document.getElementById('wireSearchInput').value.toLowerCase().trim();
  if (!q) { renderWireRows(WIRE_DATA); return; }
  const filtered = WIRE_DATA.filter(r => r.awg.toLowerCase().includes(q) || r.use.toLowerCase().includes(q));
  renderWireRows(filtered);
}

function renderFormulaSheet() {
  const container = document.getElementById('formulaSheetContent');
  if (!container) return;
  container.innerHTML = FORMULA_DATA.map(cat => `<div class="formula-category">${escHtml(cat.category)}</div>${cat.formulas.map(f => `<div class="formula-card"><div class="formula-name">${escHtml(f.name)}</div><div class="formula-expression">${escHtml(f.formula)}</div><div class="formula-vars">${f.vars.map(v => `<div class="formula-var-item"><strong>${escHtml(v.s)}</strong> = ${escHtml(v.d)}</div>`).join('')}</div><div class="formula-example"><strong style="color:var(--gold);">Example:</strong> ${escHtml(f.example)}</div></div>`).join('')}`).join('');
}
