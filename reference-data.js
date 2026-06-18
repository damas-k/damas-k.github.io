// ═══════════════════════════════════════
// QUESTION BANKS - IBEW Apprentice Curriculum
// ═══════════════════════════════════════
const QUESTION_BANKS = {
  // ── YEAR 1 ──────────────────────────────────────────────────────
  y1_tech_math: [
    {type:'mc',q:'A circuit has 12 ohms of resistance and 10 amps of current flowing through it. What is the voltage?',opts:['1.2V','120V','22V','108V'],ans:1,nec:"Ohm's Law: V=IR",exp:'V = I × R = 10A × 12Ω = 120 volts.'},
    {type:'mc',q:'Using the power wheel, a 120V circuit draws 15 amps. What is the power consumption?',opts:['8 watts','135 watts','1,800 watts','18,000 watts'],ans:2,nec:'Power Formula: P=EI',exp:'P = E × I = 120V × 15A = 1,800 watts.'},
    {type:'tf',q:'In the power wheel formula P = I² × R, the P stands for power measured in watts.',opts:['True','False'],ans:0,nec:'Power Formulas',exp:'True. P = I² × R is one of three power formula forms. Power is always measured in watts.'},
    {type:'fill',q:'The unit of electrical resistance is the ___.',ans:'ohm',nec:'Basic Definitions',exp:'The ohm (Ω) is the SI unit of electrical resistance, named after Georg Simon Ohm.'},
    {type:'mc',q:'What is 3/8 expressed as a decimal?',opts:['0.375','0.38','3.8','0.308'],ans:0,nec:'Technical Math',exp:'3 ÷ 8 = 0.375.'},
    {type:'mc',q:'A load draws 2,400 watts at 240 volts. What is the current?',opts:['240A','10A','576,000A','20A'],ans:1,nec:'P=EI solved for I',exp:'I = P ÷ E = 2,400W ÷ 240V = 10 amperes.'},
    {type:'tf',q:'The square root of 144 is 12.',opts:['True','False'],ans:0,nec:'Technical Math',exp:'True. 12 × 12 = 144, so √144 = 12.'},
    {type:'mc',q:'If R = V/I and V = 120V and I = 8A, what is R?',opts:['960Ω','15Ω','128Ω','112Ω'],ans:1,nec:"Ohm's Law: R=V/I",exp:'R = V ÷ I = 120V ÷ 8A = 15 ohms.'},
    {type:'fill',q:'15% of 80 equals ___.',ans:'12',nec:'Percentages',exp:'15% × 80 = 0.15 × 80 = 12.'},
    {type:'mc',q:'Two resistors of 40Ω and 60Ω are in series. What is the total resistance?',opts:['24Ω','100Ω','50Ω','20Ω'],ans:1,nec:'Series Circuits',exp:'In series: Rtotal = R1 + R2 = 40 + 60 = 100 ohms.'},
    {type:'mc',q:'What is 2⁴ (2 to the 4th power)?',opts:['8','6','16','24'],ans:2,nec:'Powers and Exponents',exp:'2⁴ = 2 × 2 × 2 × 2 = 16.'},
    {type:'tf',q:'If P = 360W and I = 3A, then V = 120V.',opts:['True','False'],ans:0,nec:'Power Wheel',exp:'True. V = P ÷ I = 360W ÷ 3A = 120V.'},
  ],
  y1_print_read: [
    {type:'mc',q:'On an electrical blueprint, what does a circle with an "X" through it typically represent?',opts:['A ceiling fan','An outlet','A light fixture','A junction box'],ans:2,nec:'Blueprint Symbols',exp:'A circle with an X (or crossed lines) is the standard symbol for a ceiling-mounted light fixture on electrical drawings.'},
    {type:'tf',q:'A one-line diagram (single-line diagram) shows every conductor in a circuit individually.',opts:['True','False'],ans:1,nec:'One-Line Diagrams',exp:'False. A one-line diagram uses a single line to represent all conductors in a circuit, simplifying complex systems for clarity.'},
    {type:'mc',q:'If a floor plan is drawn at a scale of 1/4" = 1 foot, how long is a wall that measures 6 inches on the drawing?',opts:['6 feet','12 feet','24 feet','3 feet'],ans:2,nec:'Scale Reading',exp:'6 inches on drawing ÷ 0.25 (1/4") = 24 feet actual length.'},
    {type:'mc',q:'A panel schedule shows all EXCEPT which of the following?',opts:['Circuit breaker size','Load description','Wire gauge used','Permit number'],ans:3,nec:'Panel Schedules',exp:'Panel schedules show breaker sizes, circuit descriptions, calculated loads, and voltages. Permit numbers are not part of a panel schedule.'},
    {type:'fill',q:'On electrical drawings, a dashed line typically represents a ___ element.',ans:'hidden',nec:'Drawing Conventions',exp:'Dashed or hidden lines on construction drawings represent elements not visible in the current view, such as wiring above a ceiling.'},
    {type:'mc',q:'Which symbol on a wiring diagram represents a single-pole switch?',opts:['S','S2','S3','S4'],ans:0,nec:'Electrical Symbols',exp:'A single-pole switch is shown as "S" on electrical plans. S2 = double-pole, S3 = 3-way, S4 = 4-way.'},
    {type:'tf',q:'A schematic diagram shows the physical layout of equipment, not the electrical connections.',opts:['True','False'],ans:1,nec:'Schematic Reading',exp:'False. A schematic shows electrical connections and circuit relationships. A floor plan shows physical layout.'},
    {type:'mc',q:'What do the letters "WP" indicate on a blueprint receptacle symbol?',opts:['Wall Panel','Weatherproof','Wiring Plan','Wire Pull'],ans:1,nec:'Blueprint Symbols',exp:'WP on a receptacle symbol stands for Weatherproof, indicating the receptacle requires a weatherproof cover.'},
    {type:'mc',q:'In a panel schedule, what does "20A/1P" mean?',opts:['20 amps, 1-phase','20 amps, 1-pole','2-pole, 20A','None of the above'],ans:1,nec:'Panel Schedule Reading',exp:'20A/1P means a 20-ampere, 1-pole (single-pole) circuit breaker.'},
    {type:'tf',q:'An elevation drawing shows a view from above looking down.',opts:['True','False'],ans:1,nec:'Drawing Views',exp:'False. An elevation shows a vertical view (front, back, or side). A plan view shows the overhead view.'},
    {type:'fill',q:'The "GFCI" designation on a receptacle symbol means ground ___ circuit interrupter.',ans:'fault',nec:'NEC 210.8',exp:'GFCI = Ground Fault Circuit Interrupter. Required in wet locations, bathrooms, kitchens, garages, and outdoors.'},
  ],
  y1_const_tech: [
    {type:'mc',q:'OSHA 29 CFR 1926.102 requires eye and face protection when there is a danger of:',opts:['Noise exposure','Flying particles or chemical splash','UV radiation only','None of the above'],ans:1,nec:'OSHA 29 CFR 1926.102',exp:'Eye and face protection is required when there is a reasonable probability of injury from flying particles, molten metal, liquid chemicals, acids, or chemical gases.'},
    {type:'tf',q:'A Class E hard hat provides protection against electrical hazards up to 20,000 volts.',opts:['True','False'],ans:0,nec:'ANSI Z89.1',exp:'True. Class E (Electrical) hard hats are tested to 20,000 volts. Class G hard hats protect to 2,200 volts. Class C offers no electrical protection.'},
    {type:'mc',q:'OSHA requires fall protection on construction sites when workers are exposed to falls of how many feet or more?',opts:['4 feet','6 feet','8 feet','10 feet'],ans:1,nec:'OSHA 29 CFR 1926.502',exp:'OSHA 1926.502 requires fall protection at 6 feet or more above a lower level on construction sites.'},
    {type:'mc',q:'What is the maximum angle at which a portable ladder should be set?',opts:['45°','60°','75°','80°'],ans:2,nec:'OSHA 1926.1053',exp:'The correct angle for a portable ladder is approximately 75.5° (4-to-1 rule: for every 4 feet of ladder height, the base should be 1 foot from the wall).'},
    {type:'tf',q:'Lockout/Tagout (LOTO) requires that each worker applies their own personal lock when working on de-energized equipment.',opts:['True','False'],ans:0,nec:'OSHA 29 CFR 1910.147',exp:'True. OSHA 1910.147 requires each authorized employee to attach their own personal lock to ensure individual protection.'},
    {type:'mc',q:'Which document provides health and safety information about hazardous chemicals on a job site?',opts:['MSDS/SDS','Permit','Work order','Plans and specs'],ans:0,nec:'OSHA HazCom Standard',exp:'A Safety Data Sheet (SDS), formerly called MSDS (Material Safety Data Sheet), contains information on chemical hazards, handling, and emergency procedures.'},
    {type:'fill',q:'A Safety Data Sheet must contain ___ sections as required by OSHA HazCom 2012.',ans:'16',nec:'OSHA 29 CFR 1910.1200',exp:'OSHA HazCom 2012 (GHS-aligned) requires SDS documents to have exactly 16 standardized sections.'},
    {type:'mc',q:'What is the purpose of a "toolbox talk"?',opts:['Review project drawings','Brief workers on daily safety topics','Order materials','Complete timesheets'],ans:1,nec:'OSHA Safety Culture',exp:'A toolbox talk is a short, informal safety meeting held at the job site to review specific safety topics relevant to the day\'s work.'},
    {type:'tf',q:'OSHA 10 is a required certification for all electrical apprentices in every state.',opts:['True','False'],ans:1,nec:'OSHA 10 Training',exp:'False. While many contractors and some states require OSHA 10, it is not universally mandated. However, it is strongly encouraged and often required by general contractors.'},
    {type:'mc',q:'When handling heavy materials, you should:',opts:['Bend at the waist and keep legs straight','Lift with your back muscles','Bend at the knees and keep back straight','Twist your torso while lifting'],ans:2,nec:'Ergonomics / Safety',exp:'Proper lifting technique requires bending at the knees, keeping the back straight, holding the load close to the body, and avoiding twisting.'},
    {type:'mc',q:'Which type of fire extinguisher is appropriate for electrical fires?',opts:['Class A','Class B','Class C','Class D'],ans:2,nec:'Fire Safety',exp:'Class C fire extinguishers are rated for electrical fires. Class A is for ordinary combustibles, Class B for flammable liquids, and Class D for combustible metals.'},
  ],
  y1_circuitry: [
    {type:'mc',q:"Kirchhoff's Voltage Law (KVL) states that the sum of all voltages around a closed loop equals:",opts:['The supply voltage','The current times resistance','Zero','The total power'],ans:2,nec:"Kirchhoff's Laws",exp:"KVL states that the algebraic sum of all voltages (EMFs and voltage drops) around any closed loop is zero. Voltage rises equal voltage drops."},
    {type:'tf',q:"Kirchhoff's Current Law (KCL) states that the sum of currents entering a node equals the sum of currents leaving that node.",opts:['True','False'],ans:0,nec:"Kirchhoff's Laws",exp:'True. KCL is based on conservation of charge: charge cannot accumulate at a node. Current in = Current out.'},
    {type:'mc',q:'In a series circuit with a 12V source, a 4Ω resistor and a 2Ω resistor, what is the total current?',opts:['6A','2A','3A','1A'],ans:1,nec:'Series Circuits',exp:'Rtotal = 4 + 2 = 6Ω. I = V/R = 12V ÷ 6Ω = 2 amperes.'},
    {type:'mc',q:'In a parallel circuit, the voltage across each branch is:',opts:['Different for each branch','Equal to the source voltage','The sum of all branch voltages','Divided by number of branches'],ans:1,nec:'Parallel Circuit Theory',exp:'In a parallel circuit, the voltage is the same across every branch. Only current divides among parallel branches.'},
    {type:'tf',q:'If one bulb burns out in a series circuit, all other bulbs will also go out.',opts:['True','False'],ans:0,nec:'Series Circuit Characteristics',exp:'True. In a series circuit, there is only one path for current flow. If any component fails open, current stops flowing through the entire circuit.'},
    {type:'mc',q:'Three 9Ω resistors are connected in parallel. What is the total resistance?',opts:['27Ω','9Ω','3Ω','1/3Ω'],ans:2,nec:'Parallel Resistance',exp:'For equal resistors in parallel: Rt = R/n = 9Ω ÷ 3 = 3Ω.'},
    {type:'fill',q:'In a series circuit, the total resistance equals the ___ of all individual resistances.',ans:'sum',nec:'Series Circuit Formula',exp:'Series: Rtotal = R1 + R2 + R3 + … The total resistance is always greater than any individual resistance.'},
    {type:'mc',q:'A 120V source is connected to two 60Ω resistors in parallel. What is the total current from the source?',opts:['1A','2A','4A','0.5A'],ans:2,nec:'Parallel Circuit Analysis',exp:'Each 60Ω branch draws I = 120V ÷ 60Ω = 2A. Total current = 2 + 2 = 4A. (Or: Rt = 30Ω; I = 120V ÷ 30Ω = 4A.)'},
    {type:'tf',q:'In a parallel circuit, if one branch opens (fails), the other branches continue to operate normally.',opts:['True','False'],ans:0,nec:'Parallel Circuit Characteristics',exp:'True. Each parallel branch is an independent path. Opening one branch only removes that branch from the circuit; remaining branches are unaffected.'},
    {type:'mc',q:'What happens to total resistance when more resistors are added in parallel?',opts:['It increases','It decreases','It stays the same','It doubles'],ans:1,nec:'Parallel Circuit Theory',exp:'Adding parallel resistors provides more paths for current, reducing total resistance. The total is always less than the smallest individual resistor.'},
    {type:'mc',q:'A voltage divider consists of two series resistors (R1 = 30Ω, R2 = 70Ω) with 100V across them. What is the voltage across R2?',opts:['30V','70V','50V','100V'],ans:1,nec:'Voltage Divider',exp:'VR2 = V × (R2 / Rtotal) = 100V × (70 / 100) = 70V.'},
  ],
  y1_bending: [
    {type:'mc',q:'What is the take-up (gain) for a 90° bend in ½" EMT conduit?',opts:['3 inches','4 inches','5 inches','6 inches'],ans:2,nec:'Conduit Bending - Take Up Values',exp:'The take-up for ½" EMT conduit is 5 inches. This is the amount of conduit "used up" by the 90° bend.'},
    {type:'mc',q:'What is the take-up for a 90° bend in ¾" EMT conduit?',opts:['5 inches','6 inches','7 inches','8 inches'],ans:1,nec:'Conduit Bending - Take Up Values',exp:'The take-up for ¾" EMT is 6 inches. Larger conduit has more take-up due to the larger bend radius.'},
    {type:'tf',q:'When bending a 90° stub, you subtract the take-up from the desired height to find where to place your mark on the conduit.',opts:['True','False'],ans:0,nec:'Stub Up Calculation',exp:'True. Mark Location = Stub Height − Take-Up. This ensures the finished stub reaches the desired height.'},
    {type:'mc',q:'For a 30° offset bend, what multiplier do you use to find the distance between bends?',opts:['1.155','2.0','2.6','1.414'],ans:1,nec:'Offset Bend Multipliers',exp:'The multiplier for a 30° offset is 2.0. Distance between bends = Rise × 2.0.'},
    {type:'mc',q:'For a 45° offset bend, what multiplier is used to find the distance between bends?',opts:['2.0','1.414','2.6','3.0'],ans:1,nec:'Offset Bend Multipliers',exp:'The 45° multiplier is 1.414 (√2). Distance = Rise × 1.414.'},
    {type:'fill',q:'The amount the conduit "shrinks" (gets shorter in total run length) when making an offset is called ___.',ans:'shrink',nec:'Offset Bend Calculation',exp:'Shrink is the amount by which a conduit run decreases in total length due to offset bends. Always account for shrink in layout.'},
    {type:'mc',q:'A saddle (three-point) bend is used to:',opts:['Make a 90° turn','Cross over an obstruction','Make a 180° U-bend','Connect two conduits'],ans:1,nec:'Saddle Bend',exp:'A saddle bend allows the conduit to rise up and over an obstruction (like another pipe) and return to the original level.'},
    {type:'mc',q:'According to NEC 358.30, what is the maximum spacing between supports for ½" EMT in a straight horizontal run?',opts:['6 feet','8 feet','10 feet','12 feet'],ans:2,nec:'NEC 358.30',exp:'NEC 358.30 requires EMT to be supported every 10 feet and within 3 feet of each outlet box, panel, or fitting.'},
    {type:'tf',q:'EMT (Electrical Metallic Tubing) is considered a rigid conduit.',opts:['True','False'],ans:1,nec:'Conduit Types',exp:'False. EMT is a thin-wall conduit, stiffer than flexible conduit but NOT considered rigid. RMC (Rigid Metal Conduit) is rigid.'},
    {type:'mc',q:'What tool is used to make bends in EMT conduit?',opts:['Pipe wrench','Conduit bender','PVC heater','Hickey bender (for rigid only)'],ans:1,nec:'Trade Tools',exp:'A conduit bender (hand bender or hydraulic bender) is used to make bends in EMT. Different sizes require matching bender shoes.'},
    {type:'mc',q:'The maximum number of 90° bends allowed between pull points in a conduit run per NEC is equivalent to:',opts:['180°','270°','360°','450°'],ans:2,nec:'NEC 358.26',exp:'NEC 358.26 limits the total angle of bends between pull points to 360°, equivalent to four 90° bends.'},
    {type:'fill',q:'When making a back-to-back 90° bend, the second bend is made ___ from the first (same direction or opposite)?',ans:'opposite',nec:'Conduit Bending Technique',exp:'For a back-to-back (U-shape), the second bend is in the opposite direction. For a Z-offset, the second bend is in the same direction.'},
  ],

  // ── YEAR 2 ──────────────────────────────────────────────────────
  y2_tech_math: [
    {type:'mc',q:'The RMS (root mean square) value of a sinusoidal AC voltage with a peak of 170V is approximately:',opts:['85V','120V','170V','240V'],ans:1,nec:'AC Mathematics',exp:'Vrms = Vpeak × 0.707 = 170V × 0.707 ≈ 120V. RMS is the equivalent DC value for heating effect.'},
    {type:'tf',q:'Power factor is the ratio of true power (watts) to apparent power (volt-amperes).',opts:['True','False'],ans:0,nec:'Power Factor',exp:'True. PF = P(W) / S(VA) = True Power / Apparent Power. Unity (1.0) PF means 100% efficient power use.'},
    {type:'mc',q:'If a circuit has 10Ω resistance and 10Ω inductive reactance (XL), what is the impedance (Z)?',opts:['20Ω','14.14Ω','10Ω','0Ω'],ans:1,nec:'Impedance Calculation',exp:'Z = √(R² + XL²) = √(100 + 100) = √200 ≈ 14.14 ohms.'},
    {type:'mc',q:'Using the sine function, if the opposite side = 6 and the hypotenuse = 10, what is the angle?',opts:['30°','37°','53°','60°'],ans:1,nec:'Trigonometry for Electricians',exp:'sin(θ) = opposite/hypotenuse = 6/10 = 0.6. θ = arcsin(0.6) ≈ 37°.'},
    {type:'fill',q:'The formula for inductive reactance is XL = 2π × f × ___.',ans:'L',nec:'AC Circuits',exp:'XL = 2πfL, where f is frequency in Hz and L is inductance in henries.'},
    {type:'mc',q:'A 120V, 60Hz circuit has a capacitive reactance (XC) of 30Ω and resistance of 40Ω. What is Z?',opts:['70Ω','50Ω','10Ω','30Ω'],ans:1,nec:'Impedance',exp:'Z = √(R² + XC²) = √(1600 + 900) = √2500 = 50 ohms.'},
    {type:'tf',q:'In a purely inductive AC circuit, current lags voltage by 90 degrees.',opts:['True','False'],ans:0,nec:'AC Circuit Theory',exp:'True. In a purely inductive circuit, the inductor opposes changes in current, causing current to lag voltage by exactly 90°.'},
    {type:'mc',q:'What is the peak voltage of a 240V RMS AC system?',opts:['240V','339.4V','170V','480V'],ans:1,nec:'AC Voltage Calculations',exp:'Vpeak = Vrms ÷ 0.707 = 240 ÷ 0.707 ≈ 339.4V.'},
    {type:'mc',q:'A vector with magnitude 5 at 0° and another with magnitude 12 at 90° are added. What is the resultant magnitude?',opts:['17','7','13','10'],ans:2,nec:'Vector Addition',exp:'Resultant = √(5² + 12²) = √(25 + 144) = √169 = 13.'},
    {type:'fill',q:'Power factor angle θ = arccos(PF). If PF = 0.8, the angle is approximately ___ degrees.',ans:'37',nec:'Power Factor Calculations',exp:'cos(37°) ≈ 0.8. So a PF of 0.8 corresponds to approximately 37° phase angle.'},
  ],
  y2_print_read: [
    {type:'mc',q:'A riser diagram on electrical drawings primarily shows:',opts:['Floor plan layout','Vertical routing of circuits and panel connections','Conduit bend calculations','Motor wiring diagrams'],ans:1,nec:'Riser Diagrams',exp:'A riser diagram shows the vertical arrangement of electrical systems, including feeders between floors, panel locations, and service entrance routing.'},
    {type:'tf',q:'Division 26 in the MasterFormat specification system covers electrical work.',opts:['True','False'],ans:0,nec:'CSI MasterFormat',exp:'True. Division 26 is Electrical in the current CSI MasterFormat. The older format used Division 16 for electrical.'},
    {type:'mc',q:'What is an "as-built" drawing?',opts:['The original design drawings','A preliminary sketch','Drawings updated to reflect actual installed conditions','The permit drawings'],ans:2,nec:'Construction Documents',exp:'As-built (or record) drawings show the actual locations and configurations of installed systems, which may differ from original design drawings due to field changes.'},
    {type:'mc',q:'A reflected ceiling plan (RCP) shows:',opts:['The floor as viewed from above','The ceiling as if seen from below looking up','A cross-section of the wall','A perspective view'],ans:1,nec:'Architectural Drawings',exp:'An RCP shows the ceiling layout as if you placed a mirror on the floor and looked at the ceiling reflection — you see the ceiling from below.'},
    {type:'fill',q:'A ___ drawing shows the difference between two design revisions of a project.',ans:'delta',nec:'Engineering Change Orders',exp:'A delta drawing (or revision cloud) highlights changes between drawing versions. The revision triangle (delta symbol) marks modified areas.'},
    {type:'mc',q:'Which sheet designation typically indicates an electrical plan drawing?',opts:['A-100','S-100','E-100','M-100'],ans:2,nec:'Drawing Sheet Numbering',exp:'E-series sheets are Electrical. A = Architectural, S = Structural, M = Mechanical/HVAC.'},
    {type:'tf',q:'A coordination drawing is produced by a single trade showing their work only.',opts:['True','False'],ans:1,nec:'Coordination Drawings',exp:'False. Coordination drawings are produced by combining multiple trades (electrical, mechanical, plumbing, structural) to identify and resolve conflicts before installation.'},
    {type:'mc',q:'On a commercial electrical plan, what does "HID" stand for?',opts:['High Intensity Discharge','Heavy Industrial Device','Horizontal Installation Duct','High Impedance Disconnect'],ans:0,nec:'Lighting Terminology',exp:'HID = High Intensity Discharge. Includes metal halide, high-pressure sodium, and mercury vapor lamps used for high-bay and outdoor lighting.'},
    {type:'mc',q:'A single-line diagram differs from a three-line diagram because it:',opts:['Shows each conductor separately','Uses one line to represent all conductors','Only shows one circuit','Is used only for DC systems'],ans:1,nec:'Electrical Diagrams',exp:'A single-line (one-line) diagram uses one line to represent all conductors (all 3 phases and neutral), simplifying complex power systems.'},
    {type:'tf',q:'Specifications are legally part of the contract documents.',opts:['True','False'],ans:0,nec:'Contract Documents',exp:'True. Specifications, along with drawings, addenda, and other contract documents, are legally binding on contractors who sign the contract.'},
  ],
  y2_motor: [
    {type:'mc',q:'A contactor is different from a relay primarily because:',opts:['Contactors use AC only','Contactors are designed to switch high-power loads like motors','Relays are larger','Contactors only work on DC'],ans:1,nec:'Motor Control Devices',exp:'Contactors are heavy-duty switching devices designed for motor loads with higher current ratings. Relays are for lighter control circuit loads.'},
    {type:'mc',q:'Per NEC Table 430.250, what is the full-load current for a 5 HP, 230V, 3-phase motor?',opts:['10A','15.2A','28A','28A'],ans:1,nec:'NEC Table 430.250',exp:'NEC Table 430.250 lists 15.2 amperes as the full-load current for a 5 HP, 230V, 3-phase motor.'},
    {type:'tf',q:'Motor overload relays protect the motor from short-circuit fault currents.',opts:['True','False'],ans:1,nec:'Motor Protection',exp:'False. Overload relays protect against sustained overcurrents that would overheat the motor (running overloads). Short-circuit protection is provided by fuses or circuit breakers.'},
    {type:'mc',q:'In a motor control ladder diagram, a normally open (NO) contact closes when:',opts:['The coil is de-energized','The coil is energized','The circuit is opened','Manually pushed'],ans:1,nec:'Ladder Diagram Logic',exp:'In ladder logic, a normally open (NO) contact is open when its coil is de-energized and closes when the coil is energized.'},
    {type:'fill',q:'Motor branch circuit conductors must have an ampacity of not less than ___ % of the motor FLA.',ans:'125',nec:'NEC 430.22',exp:'NEC 430.22 requires motor branch circuit conductors to be rated at 125% of the motor\'s full-load ampere rating.'},
    {type:'mc',q:'What type of motor starter reduces starting current by applying reduced voltage during startup?',opts:['Across-the-line (ATL)','Wye-delta (star-delta)','Single-phase','Direct-online'],ans:1,nec:'Motor Starting Methods',exp:'A wye-delta (star-delta) starter reduces voltage to the motor during starting (wye connection), then transitions to full voltage (delta) once the motor is up to speed.'},
    {type:'mc',q:'Per NEC 430.102, the motor disconnecting means must be within ___ of the motor controller.',opts:['10 feet','25 feet','50 feet','100 feet'],ans:2,nec:'NEC 430.102',exp:'NEC 430.102(B) requires the disconnecting means to be within sight of the motor controller and within 50 feet.'},
    {type:'tf',q:'A normally closed (NC) stop button in a motor control circuit must be wired in series with the motor starter coil.',opts:['True','False'],ans:0,nec:'Motor Control Circuits',exp:'True. The NC stop button must be in series so that pressing it breaks the circuit and de-energizes the starter coil, stopping the motor.'},
    {type:'mc',q:'What does "FLA" stand for in motor applications?',opts:['Full Load Amperes','Frequency Limit Adjustment','Fault Level Amps','Forward Load Armature'],ans:0,nec:'Motor Terminology',exp:'FLA = Full Load Amperes. This is the current draw of the motor when running at full rated load, as listed on the nameplate and NEC tables.'},
    {type:'mc',q:'Motor branch circuit overcurrent protection (OCPD) per NEC 430.52 is typically sized at:',opts:['100% of FLA','115% of FLA','125% of FLA','Up to 250% of FLA for inverse time breakers'],ans:3,nec:'NEC 430.52',exp:'NEC Table 430.52 allows inverse time breakers to be sized up to 250% of motor FLA for starting. Fuses for time-delay can be 175%.'},
    {type:'tf',q:'Reversing a 3-phase motor direction requires swapping any two of the three phase leads.',opts:['True','False'],ans:0,nec:'Motor Theory',exp:'True. Swapping any two of the three phase conductors (L1, L2, L3) reverses the phase sequence, which reverses the motor rotation direction.'},
  ],
  y2_bending: [
    {type:'mc',q:'To calculate a rolling offset, the first step is to find the:',opts:['Shrink amount','True offset (diagonal)','Number of bends needed','Multiplier for 45°'],ans:1,nec:'Rolling Offset Calculation',exp:'Step 1: Find the true offset using the Pythagorean theorem: True Offset = √(Rise² + Run²). Then use this as the rise for a standard offset.'},
    {type:'fill',q:'For a rolling offset, the true offset diagonal is calculated using the formula: True Offset = √(Rise² + ___²).',ans:'Run',nec:'Rolling Offset Formula',exp:'The Pythagorean theorem: True Offset = √(Rise² + Run²). This diagonal is then treated as the offset rise for bending calculations.'},
    {type:'mc',q:'When bending concentric conduits around a curve, the outer conduit(s) must be:',opts:['Shorter than the inner conduit','The same length as the inner','Longer than the inner conduit','Bent at a smaller angle'],ans:2,nec:'Concentric Bending',exp:'The outer conduit in a concentric set travels a longer arc radius than the inner, requiring a longer piece of conduit.'},
    {type:'mc',q:'What is the approximate spacing to add between parallel concentric bends for each ½" of conduit size increase?',opts:['3/16"','3/8"','½"','¾"'],ans:0,nec:'Concentric Bend Spacing',exp:'The standard rule is to add approximately 3/16" of additional conduit spacing between concentric bends for each ½" of conduit diameter increase.'},
    {type:'tf',q:'Parallel offset bends for multiple conduits running side-by-side require equal spacing between the bends.',opts:['True','False'],ans:0,nec:'Parallel Offsets',exp:'True. To keep parallel conduits evenly spaced through an offset, the distance between bends must be equal for all conduits.'},
    {type:'mc',q:'A "kick" or "kick bend" is typically used to:',opts:['Make a 90° turn','Adjust conduit level over a short distance','Cross an obstacle','Connect two different conduit types'],ans:1,nec:'Kick Bends',exp:'A kick (small offset) is used to adjust the conduit\'s level or position by a small amount — often to move conduit up, down, or sideways to clear an obstacle or enter a box correctly.'},
    {type:'mc',q:'For a 22.5° rolling offset where Rise = 6" and Run = 6", what is the true offset?',opts:['12"','8.49"','6"','9"'],ans:1,nec:'Rolling Offset - Pythagorean Theorem',exp:'True offset = √(6² + 6²) = √(36 + 36) = √72 ≈ 8.49 inches.'},
    {type:'tf',q:'When making a parallel offset, you bend the outside conduit first, then use it as a template for the inner conduits.',opts:['True','False'],ans:1,nec:'Parallel Offset Technique',exp:'False. You typically start with the innermost (shortest) conduit and work outward, incrementally adding the required spacing to each subsequent conduit.'},
    {type:'fill',q:'In concentric bending, the difference in radius between adjacent conduits is called the ___ allowance.',ans:'spacing',nec:'Concentric Bends',exp:'The spacing allowance is the additional distance added between conduit centerlines for concentric bends to maintain even spacing.'},
    {type:'mc',q:'A parallel offset with a 45° angle has a rise of 4". What is the distance between bends for each conduit?',opts:['4"','5.66"','8"','2.83"'],ans:1,nec:'Parallel Offset - 45° Multiplier',exp:'Distance = Rise × 1.414 (45° multiplier) = 4" × 1.414 ≈ 5.66 inches.'},
  ],
  y2_pv: [
    {type:'mc',q:'What NEC article governs photovoltaic (solar) energy systems?',opts:['Article 480','Article 690','Article 705','Article 700'],ans:1,nec:'NEC Article 690',exp:'NEC Article 690 covers solar photovoltaic (PV) energy systems including panels, inverters, combiners, and wiring.'},
    {type:'tf',q:'Voc (open-circuit voltage) of a PV module is higher than Vmp (voltage at maximum power).',opts:['True','False'],ans:0,nec:'PV Module Characteristics',exp:'True. Voc is the maximum voltage with no load. Vmp is the voltage at which the module produces maximum power (always less than Voc).'},
    {type:'mc',q:'In a PV string, modules wired in series will result in:',opts:['Increased current, same voltage','Increased voltage, same current','Increased both voltage and current','Same voltage and current'],ans:1,nec:'PV String Sizing',exp:'Series wiring adds voltages: Total Voc = Voc per module × number of modules. Current stays the same as a single module.'},
    {type:'mc',q:'What is the primary function of a solar inverter?',opts:['Store solar energy','Convert DC power from panels to AC power for use','Step up voltage','Regulate battery charging only'],ans:1,nec:'PV System Components',exp:'The inverter converts DC power produced by the PV modules into AC power compatible with the electrical grid and building loads.'},
    {type:'fill',q:'NEC 690.12 requires rapid shutdown of PV systems on buildings to limit ___ voltage within the array boundary.',ans:'hazardous',nec:'NEC 690.12 - Rapid Shutdown',exp:'NEC 690.12 Rapid Shutdown reduces hazardous DC voltage to safe levels within 30 seconds for emergency responder safety.'},
    {type:'mc',q:'When PV modules are wired in parallel, the result is:',opts:['Increased voltage, same current','Increased current, same voltage','Decreased voltage and current','Same voltage and current as one module'],ans:1,nec:'PV Parallel Wiring',exp:'Parallel wiring adds currents: Total Isc = Isc per module × number of modules. Voltage remains the same as a single module.'},
    {type:'tf',q:'Net metering allows a grid-tied PV system owner to receive credit for excess electricity sent back to the utility.',opts:['True','False'],ans:0,nec:'Net Metering',exp:'True. Net metering programs allow PV system owners to export excess generation to the grid and receive a credit on their electricity bill.'},
    {type:'mc',q:'Per NEC 690, the maximum DC voltage for a PV system serving a one-family dwelling is:',opts:['300V','600V','1000V','1500V'],ans:1,nec:'NEC 690.7',exp:'NEC 690.7 limits PV system DC voltage to 600V for one-family and two-family dwellings. Commercial/industrial systems may use 1000V or 1500V.'},
    {type:'mc',q:'DC arc fault circuit interrupter (AFCI) protection is required for PV systems per:',opts:['NEC 690.11','NEC 705.12','NEC 210.12','NEC 250.30'],ans:0,nec:'NEC 690.11',exp:'NEC 690.11 requires listed DC AFCI protection for PV systems to detect and interrupt DC arc faults, which can cause fires.'},
    {type:'tf',q:'A string inverter connects to multiple PV strings and converts all DC to AC at a central location.',opts:['True','False'],ans:0,nec:'PV Inverter Types',exp:'True. String inverters take input from one or more PV strings and convert the combined DC power to AC at one central unit.'},
  ],

  // ── YEAR 3 ──────────────────────────────────────────────────────
  y3_hvac: [
    {type:'mc',q:'NEC Article 440 covers electrical installations for:',opts:['Motors','Air-conditioning and refrigeration equipment','Transformers','Generators'],ans:1,nec:'NEC Article 440',exp:'NEC Article 440 covers hermetic refrigerant motor-compressors and other electrical components of HVAC/R equipment.'},
    {type:'mc',q:'In the basic refrigeration cycle, where does heat absorption (cooling) occur?',opts:['Condenser','Compressor','Evaporator','Expansion valve'],ans:2,nec:'Refrigeration Cycle',exp:'The evaporator is where the refrigerant absorbs heat from the space or air being cooled. The refrigerant evaporates (boils) as it absorbs this heat.'},
    {type:'tf',q:'A dual run capacitor serves both the compressor and fan motor of a condensing unit.',opts:['True','False'],ans:0,nec:'HVAC Components',exp:'True. A dual run (dual round) capacitor has three terminals and serves two motors: the compressor and the condenser fan motor, using a single capacitor housing.'},
    {type:'mc',q:'Standard thermostat wiring: the "R" terminal is connected to:',opts:['Return air sensor','24V control power (transformer hot)','Reversing valve','Relay coil'],ans:1,nec:'Control Wiring',exp:'R (or Rh, Rc) is the 24V hot from the transformer. G = fan, Y = cooling, W = heat, C = common (24V return).'},
    {type:'mc',q:'Per NEC 440.22, the branch circuit OCPD for a hermetic motor-compressor shall not exceed ___ % of the nameplate rated-load current.',opts:['125%','150%','175%','225%'],ans:2,nec:'NEC 440.22',exp:'NEC 440.22(A) limits the branch circuit OCPD to 175% of the nameplate rated-load current (or 225% for fuses if 175% does not allow starting).'},
    {type:'fill',q:'In HVAC, "SEER" stands for Seasonal Energy Efficiency ___.',ans:'Ratio',nec:'HVAC Efficiency Ratings',exp:'SEER (Seasonal Energy Efficiency Ratio) measures the cooling output divided by total electrical energy input over a season. Higher SEER = more efficient.'},
    {type:'tf',q:'A heat pump can provide both heating and cooling by reversing the refrigerant cycle direction.',opts:['True','False'],ans:0,nec:'Heat Pump Operation',exp:'True. A reversing valve in a heat pump switches the flow direction of refrigerant so the outdoor coil becomes the evaporator (heating mode) or condenser (cooling mode).'},
    {type:'mc',q:'Low-voltage thermostat wiring typically operates at:',opts:['12V DC','24V AC','120V AC','48V DC'],ans:1,nec:'Control Circuit Voltage',exp:'HVAC control circuits typically use 24V AC stepped down by a transformer from 120V or 240V line voltage.'},
    {type:'mc',q:'What component in a refrigeration system compresses the refrigerant gas?',opts:['Condenser','Evaporator','Expansion valve','Compressor'],ans:3,nec:'Refrigeration Components',exp:'The compressor increases refrigerant pressure, which raises its temperature. This allows the refrigerant to release heat in the condenser.'},
    {type:'tf',q:'NEC Article 440 requires a disconnecting means within sight of the HVAC equipment.',opts:['True','False'],ans:0,nec:'NEC 440.14',exp:'True. NEC 440.14 requires a disconnecting means for HVAC equipment that is within sight of and readily accessible from the equipment.'},
  ],
  y3_power: [
    {type:'mc',q:'A transformer has a primary of 480V and a secondary of 120V with 200 turns on the primary. How many turns are on the secondary?',opts:['800','50','200','400'],ans:1,nec:'Transformer Turns Ratio',exp:'Turns ratio: Np/Ns = Vp/Vs. 200/Ns = 480/120 = 4. Ns = 200/4 = 50 turns.'},
    {type:'mc',q:'In a 3-phase wye (Y) connected system with 120V phase-to-neutral, what is the line-to-line voltage?',opts:['120V','208V','240V','277V'],ans:1,nec:'Three-Phase Wye Voltage',exp:'Vline = Vphase × √3 = 120V × 1.732 ≈ 208V. This is the standard 208Y/120V system.'},
    {type:'tf',q:'In a delta-connected system, line voltage equals phase voltage.',opts:['True','False'],ans:0,nec:'Delta Connection',exp:'True. In a delta system, each winding is connected directly between two line conductors, so Vline = Vphase. Current: Iline = Iphase × √3.'},
    {type:'mc',q:'Three-phase power formula is P = √3 × VL × IL × PF. What is the power of a 480V system drawing 50A at 0.9 PF?',opts:['21,600W','37,422W','24,000W','72,000W'],ans:1,nec:'Three-Phase Power',exp:'P = √3 × 480 × 50 × 0.9 = 1.732 × 480 × 50 × 0.9 ≈ 37,422 watts (37.4 kW).'},
    {type:'mc',q:'What is the primary purpose of power factor correction capacitors?',opts:['Reduce voltage','Reduce reactive power (kVAR) and improve PF','Increase current','Step up voltage'],ans:1,nec:'Power Factor Correction',exp:'Capacitors supply leading reactive power that offsets the lagging reactive power of inductive loads (motors), bringing power factor closer to unity and reducing line current.'},
    {type:'fill',q:'A current transformer (CT) is used to measure large currents by reducing them to a safe ___ level for metering.',ans:'5A',nec:'Current Transformers',exp:'Standard CTs have a secondary rating of 5A. A 500:5 CT steps down a 500A primary current to 5A for safe meter connection.'},
    {type:'tf',q:'A 480V delta/208Y-120V transformer is commonly used in commercial buildings to supply both lighting (120V) and HVAC (208V) loads.',opts:['True','False'],ans:0,nec:'Commercial Distribution',exp:'True. Step-down transformers reduce 480V distribution voltage to the 208Y/120V system used for receptacles (120V) and HVAC equipment (208V 3-phase).'},
    {type:'mc',q:'Transformer KVA is calculated as:',opts:['KVA = V × A','KVA = (V × A) / 1000','KVA = kW / PF','KVA = kW × PF'],ans:1,nec:'Transformer Sizing',exp:'KVA = (Voltage × Amperes) / 1000. For 3-phase: KVA = (1.732 × VL × IL) / 1000.'},
    {type:'mc',q:'What NEC article covers transformers?',opts:['Article 430','Article 440','Article 450','Article 480'],ans:2,nec:'NEC Article 450',exp:'NEC Article 450 covers the installation of transformers, except current transformers and certain special applications.'},
    {type:'tf',q:'An open-delta (V-V) transformer bank delivers 86.6% of the power of a full delta bank.',opts:['True','False'],ans:0,nec:'Delta Transformer Connections',exp:'True. An open-delta bank (two transformers in delta) delivers √3/2 ≈ 86.6% of the power that a full delta (three transformer) bank would deliver.'},
  ],
  y3_blueprint: [
    {type:'mc',q:'A coordination drawing in commercial construction is used to:',opts:['Coordinate overtime schedules','Overlay multiple trades to identify conflicts before installation','Show material delivery schedules','Document punch list items'],ans:1,nec:'Coordination Drawings',exp:'Coordination drawings (often BIM-produced) overlay all trades (electrical, mechanical, plumbing, fire protection) to find and resolve conflicts before work begins.'},
    {type:'tf',q:'CSI Division 16 and Division 26 both refer to electrical work — just in different MasterFormat editions.',opts:['True','False'],ans:0,nec:'CSI MasterFormat',exp:'True. Division 16 = Electrical in the 16-division format. Division 26 = Electrical in the current 48-division MasterFormat (2004+).'},
    {type:'mc',q:'A "change order" on a construction project:',opts:['Changes the safety plan','Modifies the original contract scope, schedule, or cost','Provides daily work logs','Lists material deliveries'],ans:1,nec:'Contract Administration',exp:'A change order is a written amendment to the construction contract that changes the scope of work, contract price, or schedule after the original contract is executed.'},
    {type:'mc',q:'BIM stands for:',opts:['Building Information Modeling','Basic Instruction Manual','Blueprint Inspection Method','Building Infrastructure Management'],ans:0,nec:'Construction Technology',exp:'BIM = Building Information Modeling. It creates a digital 3D model containing all project information for design coordination and construction management.'},
    {type:'fill',q:'The electrical symbol "XFMR" on a commercial drawing stands for ___.',ans:'transformer',nec:'Electrical Drawing Symbols',exp:'XFMR is the standard abbreviation for transformer on electrical drawings and schedules.'},
    {type:'mc',q:'On a commercial electrical plan, "480/277V 3Φ 4W" means:',opts:['480V single-phase','3-phase, 4-wire, with 480V line-to-line and 277V line-to-neutral','4 wires, 277V only','480V with 4 separate circuits'],ans:1,nec:'Power System Notation',exp:'480/277V 3Φ 4W = Three-phase, 4-wire wye system. 480V between line conductors; 277V from any line to neutral. Used for commercial fluorescent and HID lighting.'},
    {type:'tf',q:'A submittals log tracks shop drawings and product data submitted by the contractor for engineer approval.',opts:['True','False'],ans:0,nec:'Project Management',exp:'True. Submittals include shop drawings, product data sheets, and samples. The engineer reviews them to confirm conformance with design specifications.'},
    {type:'mc',q:'What does "RFI" stand for in construction?',opts:['Request for Inspection','Request for Information','Required Field Installation','Record of Final Installation'],ans:1,nec:'Construction Communication',exp:'RFI = Request for Information. Used by contractors to ask the design team for clarification on drawings, specs, or conditions not addressed in the contract documents.'},
    {type:'mc',q:'A "punch list" is created:',opts:['Before construction starts','During rough-in inspections','Near project completion to list unfinished or deficient items','When materials are ordered'],ans:2,nec:'Project Closeout',exp:'A punch list is a list of items that must be completed or corrected before the project achieves substantial completion and final payment.'},
    {type:'tf',q:'As-built drawings are the responsibility of the installing contractor to produce.',opts:['True','False'],ans:0,nec:'Record Drawings',exp:'True. As-built drawings are typically produced by the installing contractor, who marks up the original design drawings to show all field changes made during construction.'},
  ],
  y3_lv: [
    {type:'mc',q:'NEC Article 725 covers:',opts:['Power-limited and remote-control circuits','Fire alarm systems','Communications circuits','Data cabling'],ans:0,nec:'NEC Article 725',exp:'NEC Article 725 covers Class 1, Class 2, and Class 3 remote-control, signaling, and power-limited circuits.'},
    {type:'mc',q:'NEC Article 760 covers:',opts:['Optical fiber cables','Fire alarm systems','Data network cabling','Security systems'],ans:1,nec:'NEC Article 760',exp:'NEC Article 760 covers fire alarm systems, including circuit wiring, equipment, and installation requirements.'},
    {type:'tf',q:'A Class 2 circuit (NEC 725) is considered inherently safe because power and voltage levels are limited.',opts:['True','False'],ans:0,nec:'NEC 725.41',exp:'True. Class 2 circuits are limited to 100VA and 30V (or less under various conditions), making them inherently safe for shock and fire hazards.'},
    {type:'mc',q:'What does "NPLFA" stand for in fire alarm system terminology?',opts:['National Portable Low-Frequency Alarm','Non-Power-Limited Fire Alarm circuit','Non-Plenum Listed Fire Alarm','National Panel for Life-safety Fire Applications'],ans:1,nec:'NEC 760 / NFPA 72',exp:'NPLFA = Non-Power-Limited Fire Alarm circuit. These circuits are not limited in power and require wire in conduit or approved cable types.'},
    {type:'mc',q:'For wiring installed in air-handling spaces (plenums), the cable must be rated:',opts:['CL2','CMR','CMP or higher','CATV'],ans:2,nec:'NEC 800 / 725',exp:'Cable installed in plenum air-handling spaces must be CMP (Communications Plenum) or equivalent to resist spread of fire in the airstream.'},
    {type:'fill',q:'NEC Article ___ covers communications circuits including telephone and data cabling.',ans:'800',nec:'NEC Article 800',exp:'NEC Article 800 covers communications circuits — telephone, data, intercom, and internet — entering a building from outside.'},
    {type:'mc',q:'Cat 6 network cable is rated for data transmission up to:',opts:['100 Mbps','1 Gbps (1,000 Mbps)','10 Gbps at long distances','Unlimited'],ans:1,nec:'TIA/EIA Standards',exp:'Cat 6 cable supports 1 Gbps (Gigabit Ethernet) at up to 100 meters. Cat 6A supports 10 Gbps at full 100m distance.'},
    {type:'tf',q:'Fire alarm system initiating devices include smoke detectors, heat detectors, and pull stations.',opts:['True','False'],ans:0,nec:'NFPA 72',exp:'True. Initiating devices are the "input" side of a fire alarm system — they detect a condition and signal the FACP (Fire Alarm Control Panel).'},
    {type:'mc',q:'A security system magnetic door contact is an example of a:',opts:['Notification device','Initiating device','Suppression device','Control unit'],ans:1,nec:'Security Systems',exp:'A magnetic door contact detects when a door opens (initiates an alarm condition) — it is an initiating device in the security system.'},
    {type:'tf',q:'Class A fire alarm circuit wiring provides a supervised loop that can continue to operate even if one wire is broken.',opts:['True','False'],ans:0,nec:'NFPA 72 / NEC 760',exp:'True. Class A wiring (Style D or E) is a closed loop — if one section of wire is broken or shorted, the system can still operate by sending signals the other direction.'},
  ],
  y3_plc: [
    {type:'mc',q:'A PLC (Programmable Logic Controller) is used in industrial settings to:',opts:['Store electrical energy','Control machinery and processes through programmable logic','Convert AC to DC','Measure power factor'],ans:1,nec:'PLC Basics',exp:'A PLC is a digital computer used for automation of industrial processes. It monitors inputs and controls outputs based on a stored program.'},
    {type:'mc',q:'In ladder logic, a normally open (NO) contact that represents a push button:',opts:['Is always closed unless pressed','Closes only when the button is pressed','Opens when button is pressed','Does not change state'],ans:1,nec:'Ladder Logic',exp:'A normally open (NO) contact in ladder logic represents a button that is normally open and only closes (allowing current "flow") when physically pressed.'},
    {type:'tf',q:'In PLC ladder logic, a normally closed (NC) contact passes power when its associated coil (or input) is NOT energized.',opts:['True','False'],ans:0,nec:'Ladder Logic',exp:'True. An NC contact is closed in its normal (de-energized) state. When the associated coil energizes, the NC contact opens.'},
    {type:'mc',q:'A PLC input module:',opts:['Energizes motors and solenoids','Receives signals from sensors, switches, and other field devices','Processes the program logic','Communicates with the HMI only'],ans:1,nec:'PLC I/O Modules',exp:'Input modules receive signals from the field (sensors, switches, transmitters) and convert them to logic signals the PLC processor can read.'},
    {type:'fill',q:'The repetitive process by which a PLC reads inputs, executes the program, and updates outputs is called the ___ cycle.',ans:'scan',nec:'PLC Operation',exp:'The scan cycle is the PLC\'s continuous loop: (1) Read all inputs, (2) Execute program logic, (3) Write all outputs, (4) Housekeeping — then repeat.'},
    {type:'mc',q:'An industrial control panel NEMA 12 enclosure provides protection against:',opts:['Water immersion','Corrosive environments only','Dust and dripping liquids','Explosion hazards'],ans:2,nec:'NEMA Enclosure Ratings',exp:'NEMA 12 protects against dust, dirt, and dripping or splashing non-corrosive liquids. It is for indoor industrial use without corrosive or hazardous conditions.'},
    {type:'mc',q:'A PLC timer instruction (TON - Timer On Delay) begins timing when:',opts:['Power is applied to the PLC','The rung goes false','The rung goes true (input conditions are met)','The output coil energizes'],ans:2,nec:'PLC Timer Instructions',exp:'A TON (Timer On Delay) begins accumulating time when the rung goes TRUE (enabling input conditions are met). The output energizes after the preset time is reached.'},
    {type:'tf',q:'A Safety PLC (SIL-rated) must be used for control circuits where a failure could cause injury or death.',opts:['True','False'],ans:0,nec:'Functional Safety',exp:'True. Safety PLCs meet IEC 61508/61511 SIL (Safety Integrity Level) requirements. They use redundant processing and diagnostics to ensure safe operation even with component failures.'},
    {type:'mc',q:'An HMI (Human-Machine Interface) in a PLC system is used to:',opts:['Program the PLC logic','Monitor system status and adjust setpoints','Provide power to the PLC','Connect sensors to the input module'],ans:1,nec:'Industrial Control Systems',exp:'An HMI is a touchscreen or display panel that allows operators to monitor process status, view alarms, and adjust operating parameters without a programming terminal.'},
    {type:'tf',q:'Discrete (digital) I/O in a PLC deals with ON/OFF signals only.',opts:['True','False'],ans:0,nec:'PLC I/O Types',exp:'True. Discrete I/O handles only two states: ON (1) or OFF (0). Analog I/O handles variable signals (4-20mA, 0-10V) for continuous measurements like temperature and pressure.'},
  ],

  // ── LEGACY/GENERAL BANKS (backward compatible) ───────────────
  nec: [
    {type:'mc',q:'According to NEC Article 210, what is the required minimum ampacity for a 20-ampere branch circuit conductor?',opts:['12 AWG copper','14 AWG copper','10 AWG copper','8 AWG copper'],ans:0,nec:'NEC 210.19',exp:'NEC 210.19 requires branch circuit conductors have an ampacity not less than the maximum load. A 20A circuit requires minimum 12 AWG copper.'},
    {type:'tf',q:'NEC Article 250 requires that all grounding electrode conductors be copper only.',opts:['True','False'],ans:1,nec:'NEC 250.62',exp:'False. NEC 250.62 permits grounding electrode conductors to be of copper, aluminum, or copper-clad aluminum.'},
    {type:'mc',q:'What is the maximum distance between supports for RMC in a straight run?',opts:['8 feet','10 feet','12 feet','15 feet'],ans:1,nec:'NEC 344.30',exp:'NEC 344.30 requires RMC to be supported every 10 feet and within 3 feet of each outlet box.'},
    {type:'fill',q:'NEC Article ___ covers the installation of electrical systems in hazardous (classified) locations.',ans:'500',nec:'NEC Article 500',exp:'Article 500 covers electrical installations in Class I, II, and III hazardous locations.'},
    {type:'mc',q:'What NEC article governs the installation of transformers?',opts:['Article 400','Article 450','Article 460','Article 480'],ans:1,nec:'NEC Article 450',exp:'NEC Article 450 covers the installation of all transformers except current transformers and special applications.'},
    {type:'tf',q:'GFCI protection is required for all 125V, 15A and 20A receptacles installed in bathrooms per NEC 210.8.',opts:['True','False'],ans:0,nec:'NEC 210.8',exp:'True. NEC 210.8(A)(1) requires GFCI protection for all receptacle outlets in bathrooms.'},
    {type:'mc',q:'The maximum number of current-carrying conductors permitted in a conduit without derating is:',opts:['2','3','4','6'],ans:1,nec:'NEC 310.15(C)(1)',exp:'NEC 310.15(C)(1) requires derating when there are more than 3 current-carrying conductors in a raceway.'},
    {type:'mc',q:'Per NEC 230.79, a single-family dwelling must have a service with a minimum rating of:',opts:['60A','100A','150A','200A'],ans:1,nec:'NEC 230.79(C)',exp:'NEC 230.79(C) requires a minimum 100-ampere, 3-wire service for a single-family dwelling.'},
  ],
  ohm: [
    {type:'mc',q:'A circuit has a resistance of 24 ohms and a current of 5 amperes. What is the voltage?',opts:['4.8 volts','120 volts','19 volts','29 volts'],ans:1,nec:"Ohm's Law: V=IR",exp:'V = I × R = 5A × 24Ω = 120 volts.'},
    {type:'fill',q:'The formula for electrical power using current and resistance is P = ___ × R.',ans:'I²',nec:'Power Formula',exp:'P = I² × R. Also expressed as P = V × I or P = V²/R.'},
    {type:'mc',q:'Three resistors of 6Ω, 12Ω, and 4Ω are connected in series. What is the total resistance?',opts:['2Ω','22Ω','3Ω','12Ω'],ans:1,nec:'Series Circuits',exp:'In series: Rtotal = 6 + 12 + 4 = 22 ohms.'},
    {type:'tf',q:'In a parallel circuit, the total resistance is always less than the smallest individual resistance.',opts:['True','False'],ans:0,nec:'Parallel Circuits',exp:'True. Each parallel path provides an additional route for current, always reducing total resistance.'},
  ],
  safety: [
    {type:'mc',q:'NFPA 70E requires an Energized Electrical Work Permit when exposure to electrical hazards exceeds:',opts:['50 volts','120 volts','240 volts','480 volts'],ans:0,nec:'NFPA 70E 130.2',exp:'NFPA 70E 130.2 requires an Energized Electrical Work Permit for work on energized conductors at 50 volts or greater.'},
    {type:'tf',q:'Lockout/Tagout (LOTO) procedures are covered under OSHA 29 CFR 1910.147.',opts:['True','False'],ans:0,nec:'OSHA 29 CFR 1910.147',exp:'True. OSHA 29 CFR 1910.147 covers the control of hazardous energy (lockout/tagout).'},
    {type:'mc',q:'Arc Flash PPE Category 2 requires a minimum arc rating of:',opts:['4 cal/cm²','8 cal/cm²','12 cal/cm²','25 cal/cm²'],ans:1,nec:'NFPA 70E Table 130.7(C)(15)(a)',exp:'PPE Category 2 requires minimum 8 cal/cm². Category 1 = 4 cal/cm², Category 3 = 25 cal/cm², Category 4 = 40 cal/cm².'},
    {type:'mc',q:'GFCIs are required for all 125V receptacles on construction sites per:',opts:['OSHA 29 CFR 1926.404','NEC 210.8','NFPA 70E','ANSI Z89.1'],ans:0,nec:'OSHA 29 CFR 1926.404',exp:'OSHA 1926.404(b)(1) requires GFCI protection on all 120V 15A and 20A receptacles on construction sites.'},
  ],
  motors: [
    {type:'mc',q:'Motor branch circuit conductors must have an ampacity of at least ___ of motor FLA.',opts:['100%','115%','125%','150%'],ans:2,nec:'NEC 430.22',exp:'NEC 430.22 requires motor branch circuit conductors at 125% of the motor full-load current rating.'},
    {type:'tf',q:'A 3-phase motor rotating in the wrong direction can be corrected by swapping any two of the three line conductors.',opts:['True','False'],ans:0,nec:'Motor Theory',exp:'True. Swapping any two phase leads reverses the phase sequence and thus the motor rotation direction.'},
    {type:'mc',q:'Motor disconnecting means must be within ___ of the motor per NEC 430.102.',opts:['25 feet','50 feet','100 feet','Within sight'],ans:3,nec:'NEC 430.102',exp:'NEC 430.102 requires the disconnect to be within sight and readily accessible from the motor location.'},
  ],
  conduit: [
    {type:'mc',q:'What is the shrink for a 30-degree bend in conduit?',opts:['3/16" per inch','3/8" per inch','1/2" per inch','5/8" per inch'],ans:1,nec:'Offset Shrink',exp:'The shrink for a 30° offset is 3/8" per inch of rise.'},
    {type:'tf',q:'The maximum total bends between pull points in a conduit run is 360 degrees.',opts:['True','False'],ans:0,nec:'NEC 358.26',exp:'True. NEC 358.26 limits EMT to 360° total bends between pull points (equal to four 90° bends).'},
    {type:'mc',q:'What is the 45° offset multiplier to find distance between bends?',opts:['2.0','1.414','2.6','1.155'],ans:1,nec:'Offset Bend Multipliers',exp:'The 45° multiplier is 1.414 (√2). Distance = Rise × 1.414.'},
  ],
  grounding: [
    {type:'mc',q:'The primary purpose of equipment grounding conductors (EGC) is to:',opts:['Reduce electrical noise','Carry fault current back to the source','Provide a neutral return path','Balance phase loads'],ans:1,nec:'NEC 250.4(A)(5)',exp:'The EGC provides a low-impedance path for fault current to trip overcurrent devices, preventing dangerous voltages on metal enclosures.'},
    {type:'mc',q:'Per NEC Table 250.66, a 2/0 AWG copper service requires a minimum ___ AWG copper GEC.',opts:['6 AWG','4 AWG','2 AWG','1/0 AWG'],ans:1,nec:'NEC Table 250.66',exp:'Per NEC Table 250.66, 2/0 AWG copper service conductors require a minimum 4 AWG copper grounding electrode conductor.'},
  ],
  load: [
    {type:'mc',q:'For residential load calculations, the general lighting load is calculated at ___ per square foot.',opts:['1 VA','2 VA','3 VA','4 VA'],ans:2,nec:'NEC 220.12 Table 220.12',exp:'NEC Table 220.12 lists the general lighting load for dwellings as 3 volt-amperes per square foot.'},
    {type:'mc',q:'The standard demand factor applied to the first 10 kVA of general loads in a residential calculation is:',opts:['50%','75%','100%','80%'],ans:2,nec:'NEC 220.42',exp:'Per NEC Table 220.42, the first 3,000 VA of lighting load is at 100% demand. Larger loads use demand factors of 35%.'},
  ],
  wiring: [
    {type:'mc',q:'Type NM-B cable (Romex) may be used in:',opts:['Wet locations','One- and two-family dwellings and multi-family dwellings up to 3 stories','Commercial high-rises','All of the above'],ans:1,nec:'NEC 334.10',exp:'NEC 334.10 permits NM cable in one- and two-family dwellings, multi-family dwellings up to 3 stories, and other structures as listed.'},
    {type:'mc',q:'The maximum percentage of conduit fill for 3 or more conductors in a raceway is:',opts:['40%','50%','60%','53%'],ans:0,nec:'NEC Chapter 9 Table 1',exp:'NEC Chapter 9, Table 1 limits conduit fill to 40% for 3 or more conductors, 31% for 2 conductors, and 53% for 1 conductor.'},
  ],
};

// ═══════════════════════════════════════
// TOPIC INFO & YEAR CURRICULUM
// ═══════════════════════════════════════
const TOPIC_INFO = [
  {id:'y1_tech_math',icon:'🔢',title:'Technical Math I',desc:"Ohm's Law, power wheel, basic algebra, fractions, decimals, percentages."},
  {id:'y1_print_read',icon:'📐',title:'Print Reading I',desc:'Blueprint symbols, one-line diagrams, panel schedules, scale reading.'},
  {id:'y1_const_tech',icon:'🏗️',title:'Construction Technology',desc:'Trade tools, jobsite safety, OSHA basics, material handling.'},
  {id:'y1_circuitry',icon:'⚡',title:'Electrical Circuitry',desc:"Series, parallel, combination circuits, Kirchhoff's laws, circuit theory."},
  {id:'y1_bending',icon:'🔧',title:'Conduit Bending I',desc:'90° bends, take-up, stub ups, offsets, shrink, saddle bends, NEC support rules.'},
];

const ALL_YEAR_TOPICS = [
  {id:'y1_math',    bankId:'y1_tech_math',  year:1,  displayName:'Technical Math I',        icon:'🔢', desc:"Ohm's Law, power wheel, basic algebra, fractions, and percentages."},
  {id:'y1_print',   bankId:'y1_print_read', year:1,  displayName:'Print Reading I',          icon:'📐', desc:'Blueprint symbols, one-line diagrams, panel schedules, and scale reading.'},
  {id:'y1_const',   bankId:'y1_const_tech', year:1,  displayName:'Construction Technology',  icon:'🏗️', desc:'Trade tools, jobsite safety, OSHA 10 fundamentals, and construction documents.'},
  {id:'y1_circuit', bankId:'y1_circuitry',  year:1,  displayName:'Electrical Circuitry',     icon:'⚡', desc:"Series, parallel, combination circuits, Kirchhoff's laws, and basic circuit theory."},
  {id:'y1_conduit', bankId:'y1_bending',    year:1,  displayName:'Conduit Bending I',        icon:'🔧', desc:'90° bends, take-up values, stub ups, offsets, shrink, and NEC support rules.'},
  {id:'y2_math',    bankId:'y2_tech_math',  year:2,  displayName:'Technical Math II',        icon:'📊', desc:'Trigonometry, AC sine waves, RMS values, power factor, impedance.'},
  {id:'y2_print',   bankId:'y2_print_read', year:2,  displayName:'Print Reading II',         icon:'📋', desc:'Commercial blueprints, riser diagrams, specifications, coordination drawings.'},
  {id:'y2_motor',   bankId:'y2_motor',      year:2,  displayName:'Motor Control',            icon:'⚙️', desc:'Motor starters, contactors, overloads, ladder diagrams, NEC Article 430.'},
  {id:'y2_conduit', bankId:'y2_bending',    year:2,  displayName:'Conduit Bending II',       icon:'🔧', desc:'Rolling offsets, parallel bends, concentric bends, advanced offset calculations.'},
  {id:'y2_pv',      bankId:'y2_pv',         year:2,  displayName:'Photovoltaics',            icon:'☀️', desc:'Solar panel theory, string sizing, inverters, NEC Article 690, net metering.'},
  {id:'y3_hvac',    bankId:'y3_hvac',       year:3,  displayName:'HVAC',                     icon:'🌡️', desc:'Refrigeration cycle, HVAC electrical components, thermostats, NEC 440.'},
  {id:'y3_power',   bankId:'y3_power',      year:3,  displayName:'Electrical Power Systems', icon:'🔋', desc:'Transformers, three-phase power, delta/wye, power factor correction, metering.'},
  {id:'y3_blueprint',bankId:'y3_blueprint', year:3,  displayName:'Commercial Blueprints',    icon:'🏢', desc:'Advanced plan reading, coordination drawings, as-builts, specifications.'},
  {id:'y3_lv',      bankId:'y3_lv',         year:3,  displayName:'Low Voltage Systems',      icon:'📡', desc:'Fire alarm, data/telecom, security systems, NEC Articles 725/760/800.'},
  {id:'y3_plc',     bankId:'y3_plc',        year:3,  displayName:'Programmable Control',     icon:'🖥️', desc:'PLC basics, ladder logic, inputs/outputs, program structure, industrial control.'},
  {id:'y4_nec',     bankId:'nec',           year:4,  displayName:'NEC Code Review',          icon:'📗', desc:'Comprehensive NEC review for the journeyman licensing exam.'},
  {id:'y4_ground',  bankId:'grounding',     year:4,  displayName:'Grounding & Bonding',      icon:'🌍', desc:'Advanced grounding systems, GES, NEC Article 250.'},
  {id:'y4_load',    bankId:'load',          year:4,  displayName:'Service & Feeders',        icon:'⚡', desc:'Service entrance sizing, feeder calcs, demand factors.'},
  {id:'y4_motor',   bankId:'motors',        year:4,  displayName:'Advanced Motor Control',   icon:'⚙️', desc:'Industrial motor control, drives, VFDs, and automation.'},
  {id:'y5_safety',  bankId:'safety',        year:5,  displayName:'Safety & NFPA 70E',        icon:'🦺', desc:'Advanced PPE, arc flash, LOTO, hazardous locations.'},
  {id:'y5_wiring',  bankId:'wiring',        year:5,  displayName:'Advanced Wiring Methods',  icon:'🔌', desc:'All wiring methods, conduit fill, ampacity, derating.'},
  {id:'jm_ohm',     bankId:'ohm',           year:99, displayName:"Ohm's Law Master",         icon:'🎓', desc:'Complete electrical calculations master review.'},
];

function getNumericYear() {
  return ({'Year 1':1,'Year 2':2,'Year 3':3,'Year 4':4,'Year 5':5,'Journeyman':99})[state.year] || 1;
}
function getUnlockLabel(yr) { return yr >= 99 ? 'Journeyman' : 'Year ' + yr; }

function buildTopicsGrid() {
  const grid = document.getElementById('topicsGrid');
  if (!grid) return;
  const numYear = getNumericYear();
  const isJourneyman = numYear >= 99;
  let html = '';

  if (numYear >= 2) {
    html += '<div class="mega-quiz-bar">';
    html += '<button class="btn btn-primary btn-full" onclick="startMegaQuiz(1,25)">🏆 Year 1 Mega Quiz — 25 Questions</button>';
    if (numYear >= 3) html += '<button class="btn btn-primary btn-full" onclick="startMegaQuiz(2,30)">🏆 Years 1 &amp; 2 Mega Quiz — 30 Questions</button>';
    if (numYear >= 4 || isJourneyman) html += '<button class="btn btn-primary btn-full" onclick="startMegaQuiz(3,40)">🏆 Years 1–3 Mega Quiz — 40 Questions</button>';
    html += '</div>';
  }

  const seen = new Set();
  html += '<div class="grid-2" style="gap:14px;">';
  ALL_YEAR_TOPICS.forEach(t => {
    if (t.year >= 99 && !isJourneyman) return;
    if (seen.has(t.displayName)) return;
    seen.add(t.displayName);
    const unlocked = isJourneyman || t.year <= numYear;
    if (unlocked) {
      html += `<div class="card" style="cursor:pointer;transition:all 0.2s;" onmouseenter="this.style.borderColor='rgba(201,168,76,0.4)'" onmouseleave="this.style.borderColor='var(--border)'" onclick="startTopicQuiz('${t.bankId}','${escHtml(t.displayName)}')">
        <div style="font-size:28px;margin-bottom:12px;">${t.icon}</div>
        <div style="font-size:15px;font-weight:700;color:var(--cream);margin-bottom:6px;">${escHtml(t.displayName)}</div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:14px;">${escHtml(t.desc)}</div>
        <button class="btn btn-secondary btn-sm btn-full">Start Quiz →</button>
      </div>`;
    } else {
      html += `<div class="card locked-topic-card">
        <div style="font-size:28px;margin-bottom:12px;opacity:0.45;">${t.icon}</div>
        <div style="font-size:15px;font-weight:700;color:var(--muted);margin-bottom:6px;">${escHtml(t.displayName)}</div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:14px;opacity:0.7;">${escHtml(t.desc)}</div>
        <div class="locked-badge">🔒 Unlocks in ${getUnlockLabel(t.year)}</div>
      </div>`;
    }
  });
  html += '</div>';
  grid.innerHTML = html;
}

function startMegaQuiz(throughYear, count) {
  const bankIds = new Set();
  ALL_YEAR_TOPICS.filter(t => t.year <= throughYear).forEach(t => bankIds.add(t.bankId));
  let pool = [];
  bankIds.forEach(id => { if (QUESTION_BANKS[id]) pool.push(...QUESTION_BANKS[id]); });
  pool = shuffle(pool).slice(0, Math.min(count, pool.length));
  if (!pool.length) { showToast('No questions available', 'error'); return; }
  state.isReDrill = false;
  state.currentAISubject = 'Mega Quiz (Years 1–' + throughYear + ')';
  updateAISubjectLock();
  startQuiz(pool);
  navigate('quiz');
  showToast('Mega Quiz started — ' + pool.length + ' questions! ⚡', 'success');
}

function startTopicQuiz(bankId, displayName) {
  const bank = generateFromBank(bankId, 10, ['mc','tf','fill']);
  state.currentAISubject = displayName;
  updateAISubjectLock();
  if (state.aiChatHistory.length > 0) { aiClearChat(); }
  startQuiz(bank);
  navigate('quiz');
  showToast('Starting: ' + displayName, 'success');
}

function renderQuickStart() {
  const el = document.getElementById('quickStartButtons');
  if (!el) return;
  const numYear = getNumericYear();
  const isJourneyman = numYear >= 99;
  const seen = new Set();
  const yearTopics = ALL_YEAR_TOPICS.filter(t => {
    if (t.year >= 99) return false;
    if (!isJourneyman && t.year !== numYear) return false;
    if (seen.has(t.displayName)) return false;
    seen.add(t.displayName);
    return true;
  }).slice(0, 5);
  let html = yearTopics.map(t =>
    `<button class="btn btn-secondary btn-full" onclick="startTopicQuiz('${t.bankId}','${escHtml(t.displayName)}')">${t.icon} ${escHtml(t.displayName)}</button>`
  ).join('');
  if (numYear >= 2) {
    const mg = Math.min(numYear - 1, 3);
    const labs = {1:'Year 1 Mega Quiz', 2:'Years 1 & 2 Mega Quiz', 3:'Years 1–3 Mega Quiz'};
    const cnts = {1:25, 2:30, 3:40};
    html += `<button class="btn btn-primary btn-full" onclick="startMegaQuiz(${mg},${cnts[mg]})">🏆 ${labs[mg]}</button>`;
  }
  el.innerHTML = html || '<div class="text-muted text-sm" style="padding:8px 0;">No topics found for current year.</div>';
}
