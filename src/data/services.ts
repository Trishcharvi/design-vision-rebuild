import {
  Route,
  Gauge,
  Activity,
  Factory,
  Wrench,
  Waves,
  DraftingCompass,
  Cable,
  Network,
  ShieldAlert,
  ClipboardCheck
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Discipline = {
  slug: string;
  title: string;
  navLabel: string;
  short: string;
  icon: LucideIcon;
  lead: string;
  intro: string[];
  scope: string[];
  deliverables: string[];
  codes: string[];
  phases: string[];
};

export const DISCIPLINES: Discipline[] = [
  {
    slug: 'pipeline-engineering',
    title: 'Pipeline Engineering',
    navLabel: 'Pipeline engineering',
    short:
      'Route selection, design basis, wall thickness, crossings and construction engineering for onshore and cross-country pipelines.',
    icon: Route,
    lead:
      'Engineering for onshore and cross-country pipelines carrying crude oil, petroleum products, natural gas and water.',
    intro: [
      'Pipeline engineering is the core of our practice. We take a pipeline from an early corridor study through design basis, mechanical design and construction engineering, keeping route reality, constructability and operability visible at every stage.',
      'Our work is organised around the decisions a project actually has to make: which corridor, what diameter and wall thickness, how each crossing is executed, and which deliverables the construction contractor will build from.'
    ],
    scope: [
      'Route selection, corridor optimisation and constraint mapping',
      'Design basis, design philosophy and basis-of-design memoranda',
      'Wall thickness and pressure design to ASME B31.4 and B31.8',
      'Class location, design factor and population density assessment',
      'Crossing engineering: road, rail, canal, river, HDD and utility crossings',
      'Buried and above-ground pipeline stress and flexibility analysis',
      'Expansion loop, anchor block and thrust restraint sizing',
      'Line pipe, coating and field joint specification',
      'Cathodic protection design philosophy and interface',
      'Sectionalising valve, pig launcher and receiver station engineering',
      'Material take-off, BOQ and construction drawing packages'
    ],
    deliverables: [
      'Pipeline design basis and design philosophy',
      'Route maps, alignment sheets and crossing schedules',
      'Wall thickness and pressure design calculations',
      'Pipeline stress and crossing analysis reports',
      'Line pipe, coating and valve specifications',
      'Typical and crossing construction drawings',
      'Material take-off and bill of quantities',
      'Technical specifications and datasheets'
    ],
    codes: [
      'ASME B31.4',
      'ASME B31.8',
      'API 5L',
      'API 1104',
      'API RP 1102',
      'ISO 13623',
      'IS 15663',
      'OISD-GDN-141',
      'PNGRB T4S'
    ],
    phases: ['Feasibility', 'Route selection', 'FEED', 'Detailed design', 'Construction support']
  },
  {
    slug: 'hydraulics-flow-assurance',
    title: 'Hydraulics & Flow Assurance',
    navLabel: 'Hydraulics & flow assurance',
    short:
      'Steady-state and transient hydraulics, station spacing, surge protection and operating envelope definition.',
    icon: Gauge,
    lead:
      'Analysis of how a pipeline system actually behaves: capacity, pressure profile, transients and the limits of safe operation.',
    intro: [
      'Hydraulic analysis sets the diameter, the station spacing and the pressure rating of a pipeline system. We build the model, test the operating cases that matter and define the envelope the pipeline can be run within.',
      'For existing systems we use the same models to answer capacity, debottlenecking and modification questions without disturbing safe operation.'
    ],
    scope: [
      'Steady-state hydraulic modelling and pressure profile development',
      'Diameter optimisation and pumping or compressor station spacing',
      'Transient and surge analysis, including valve closure and pump trip cases',
      'Surge protection and relief requirement definition',
      'Slack line, column separation and hydraulic gradient checks',
      'Multi-product batching, interface tracking and contamination estimates',
      'Thermal-hydraulic analysis for waxy, viscous and heavy crude service',
      'Wax, hydrate and slugging screening for multiphase lines',
      'Drag reducing agent and capacity augmentation evaluation',
      'Debottlenecking studies and MAOP or operating envelope definition'
    ],
    deliverables: [
      'Hydraulic design basis and modelling report',
      'System and pump curves with operating cases',
      'Surge and transient analysis report',
      'Station spacing and configuration study',
      'Pump and compressor duty requirements',
      'Capacity augmentation and debottlenecking report',
      'Operating envelope and operating philosophy input'
    ],
    codes: [
      'ASME B31.4',
      'ASME B31.8',
      'API 520 / API 521',
      'API RP 14E',
      'AGA flow equations',
      'API MPMS (measurement)'
    ],
    phases: ['Feasibility', 'FEED', 'Detailed design', 'Operations support']
  },
  {
    slug: 'pipeline-integrity',
    title: 'Pipeline Integrity Management',
    navLabel: 'Pipeline integrity',
    short:
      'Integrity management plans, threat and risk assessment, ILI data review and fitness-for-service engineering.',
    icon: Activity,
    lead:
      'Engineering support that helps operators understand pipeline threats, prioritise them and act on inspection data with confidence.',
    intro: [
      'An integrity programme is only as good as the engineering behind it. We help build integrity management plans, assess the threats that apply to a specific line, and translate inspection data into decisions about repair, re-rating and remaining life.',
      'The emphasis is on traceability: assumptions, data quality and acceptance criteria stated clearly enough that the assessment can be defended and repeated.'
    ],
    scope: [
      'Integrity management plan development and review',
      'Threat identification and applicability screening',
      'Qualitative and semi-quantitative risk assessment and risk ranking',
      'In-line inspection planning, tool selection input and data review',
      'Metal loss, dent and gouge fitness-for-service assessment',
      'Corrosion growth rate estimation and remaining life calculation',
      'Repair method selection: composite sleeve, Type A and B sleeves, replacement',
      'Pressure test, re-rating and de-rating engineering support',
      'Cathodic protection survey interpretation and remediation input',
      'Geohazard, river crossing and depth-of-cover assessment'
    ],
    deliverables: [
      'Integrity management plan',
      'Threat and risk assessment register',
      'ILI data review and anomaly assessment report',
      'Fitness-for-service assessment calculations',
      'Remaining life and reassessment interval recommendations',
      'Repair and rehabilitation recommendation reports',
      'Inspection and monitoring programme'
    ],
    codes: [
      'API 1160',
      'ASME B31.8S',
      'ASME B31G',
      'API 579',
      'API 1163',
      'NACE SP0169',
      'NACE SP0502'
    ],
    phases: ['Operations support', 'Integrity', 'Life extension']
  },
  {
    slug: 'process-engineering',
    title: 'Process Engineering',
    navLabel: 'Process engineering',
    short:
      'Process design for pump stations, terminals, metering and facility systems, from heat and material balance to P&IDs.',
    icon: Factory,
    lead:
      'Process engineering for the stations, terminals and facilities that make a pipeline system work.',
    intro: [
      'Pipelines do not exist on their own. Pumping and compressor stations, metering skids, tank farms, loading facilities and utility systems all need process definition before any other discipline can proceed.',
      'We develop that definition — balances, sizing, P&IDs and control intent — and keep it consistent with the hydraulic model and the operating philosophy.'
    ],
    scope: [
      'Process design basis and heat and material balance',
      'Process flow diagram and P&ID development',
      'Equipment sizing: separators, heaters, pumps, exchangers, filters and tanks',
      'Pressure relief, blowdown and flare or vent system design',
      'Metering, proving and custody transfer system definition',
      'Pump station, compressor station and terminal process design',
      'Utility system definition: air, nitrogen, water, fuel gas and drainage',
      'Line sizing, line list and hydraulic consistency checks',
      'Control philosophy, cause and effect and operating procedures input',
      'HAZOP preparation and technical support'
    ],
    deliverables: [
      'Process design basis',
      'Process flow diagrams and P&IDs',
      'Heat and material balance',
      'Equipment list and process datasheets',
      'Line list and relief load summary',
      'Control philosophy and cause and effect matrix',
      'Utility summary and consumption schedule'
    ],
    codes: [
      'API 520 / API 521 / API 2000',
      'API 610',
      'API 650 / API 620',
      'ASME Section VIII',
      'ISO 5167',
      'OISD 118',
      'OISD 244'
    ],
    phases: ['FEED', 'Detailed design', 'Brownfield modification']
  },
  {
    slug: 'piping-engineering',
    title: 'Piping Engineering',
    navLabel: 'Piping engineering',
    short:
      'Layouts, 3D modelling, pipe stress analysis, supports, isometrics and piping material specification.',
    icon: Wrench,
    lead:
      'Station and facility piping engineering, from plot plan through stress analysis to construction isometrics.',
    intro: [
      'Piping engineering turns a P&ID into something that can be built, supported, operated and maintained. We cover layout, modelling, stress and material engineering as one connected scope.',
      'Deliverables are produced with construction in mind: access, supportability, clash-free routing and take-offs that match the drawings.'
    ],
    scope: [
      'Plot plan, equipment layout and piping general arrangement',
      'Three-dimensional piping modelling and clash review',
      'Pipe stress and flexibility analysis to ASME B31.3 and B31.4',
      'Thermal, seismic, slug, settlement and wind load cases',
      'Nozzle load and equipment allowable checks',
      'Pipe support design, selection and support drawings',
      'Piping material specification and valve selection',
      'Isometric generation and material take-off extraction',
      'Tie-in schedules and brownfield connection engineering',
      'Specialty item specification and requisition support'
    ],
    deliverables: [
      'Plot plans and piping general arrangement drawings',
      'Three-dimensional piping model',
      'Pipe stress analysis reports',
      'Pipe support standards and support drawings',
      'Piping material specifications and valve datasheets',
      'Construction isometrics and material take-off',
      'Tie-in schedule and interface drawings'
    ],
    codes: [
      'ASME B31.3',
      'ASME B31.4',
      'ASME B16 series',
      'ASME Section VIII',
      'API 610',
      'WRC 537',
      'OISD 118'
    ],
    phases: ['FEED', 'Detailed design', 'Construction support']
  },
  {
    slug: 'subsea-offshore',
    title: 'Subsea & Offshore Pipeline Engineering',
    navLabel: 'Subsea & offshore',
    short:
      'DNV-based subsea pipeline design: wall thickness, on-bottom stability, free spans, expansion and installation.',
    icon: Waves,
    lead:
      'Subsea pipeline and offshore engineering built on the DNV design framework.',
    intro: [
      'Subsea pipelines are governed by a different design philosophy to onshore lines. We work to the DNV limit state framework, covering wall thickness, stability, spans, expansion and installation as an integrated set of checks.',
      'Shore approaches, crossings and tie-in spools are treated as part of the same system, so the interfaces between offshore and onshore scopes stay consistent.'
    ],
    scope: [
      'Subsea route selection, bathymetry and seabed feature review',
      'Wall thickness design to DNV-ST-F101 limit states',
      'Collapse, propagation buckling and local buckling checks',
      'On-bottom stability assessment to DNV-RP-F109',
      'Free span screening and fatigue assessment to DNV-RP-F105',
      'Lateral buckling, upheaval buckling and pipeline walking',
      'Expansion, end expansion and tie-in spool design',
      'Installation feasibility for S-lay, reel-lay and tow methods',
      'Crossing, protection, rock dump and mattress design input',
      'Shore approach, landfall and HDD interface engineering',
      'Cathodic protection and anode sizing to DNV-RP-F103'
    ],
    deliverables: [
      'Subsea pipeline design basis',
      'Wall thickness and limit state design report',
      'On-bottom stability analysis report',
      'Free span and fatigue assessment report',
      'Expansion and buckling analysis report',
      'Installation feasibility and analysis report',
      'Spool, tie-in and crossing design drawings',
      'Anode sizing and cathodic protection report'
    ],
    codes: [
      'DNV-ST-F101',
      'DNV-RP-F105',
      'DNV-RP-F109',
      'DNV-RP-F110',
      'DNV-RP-F103',
      'DNV-ST-F201',
      'API RP 1111',
      'API RP 2RD'
    ],
    phases: ['Feasibility', 'FEED', 'Detailed design', 'Installation engineering']
  },
  {
    slug: 'civil-structural',
    title: 'Civil & Structural Engineering',
    navLabel: 'Civil & structural',
    short:
      'Right-of-way civil works, crossings, foundations, pipe supports and station structures.',
    icon: DraftingCompass,
    lead:
      'Civil and structural engineering for pipeline corridors, crossings and station infrastructure.',
    intro: [
      'Pipeline projects carry a substantial civil scope: the corridor itself, the crossings, bank protection, foundations and the structures that carry pipe and equipment.',
      'We engineer that scope in coordination with the pipeline and piping disciplines, so restraint, settlement and support assumptions stay consistent across the design.'
    ],
    scope: [
      'Right-of-way grading, drainage and restoration design',
      'River and canal crossing bank protection and scour assessment',
      'Thrust block, anchor block and restraint foundation design',
      'Pipe sleeper, pipe rack and support structure design',
      'Station foundations, equipment plinths and containment',
      'Retaining structures, culverts and road crossing civil works',
      'HDD entry and exit pit and working area civil design',
      'Station buildings, enclosures and boundary works',
      'Constructability and site engineering support',
      'Civil and structural bill of quantities'
    ],
    deliverables: [
      'Civil and structural design basis',
      'Grading, drainage and layout drawings',
      'Foundation design calculations and drawings',
      'Structural steel design and fabrication drawings',
      'Crossing and bank protection drawings',
      'Pipe support and sleeper standards',
      'Civil and structural bill of quantities'
    ],
    codes: [
      'IS 456',
      'IS 800',
      'IS 875',
      'IS 1893',
      'ACI 318',
      'AISC 360',
      'ASCE 7'
    ],
    phases: ['FEED', 'Detailed design', 'Construction support']
  },
  {
    slug: 'electrical-instrumentation',
    title: 'Electrical & Instrumentation Engineering',
    navLabel: 'Electrical & instrumentation',
    short:
      'Station power, hazardous area classification, field instrumentation, metering and control system interfaces.',
    icon: Cable,
    lead:
      'Electrical and instrumentation engineering for pipeline stations, terminals and remote facilities.',
    intro: [
      'Pipeline stations are electrically simple in principle and demanding in practice: remote locations, hazardous areas, long cable routes and control systems that must work unattended.',
      'We cover load definition through to instrument datasheets and control system interface, including the hazardous area and earthing basis that governs equipment selection.'
    ],
    scope: [
      'Electrical load list, single line diagram and distribution design',
      'Station power, transformer, DG set and UPS sizing',
      'HV and LV switchgear, motor control and protection coordination input',
      'Earthing, bonding and lightning protection design',
      'Hazardous area classification and equipment selection basis',
      'Cable sizing, routing, trench and cable schedule development',
      'Lighting, small power and heat tracing design',
      'Field instrumentation selection, sizing and datasheets',
      'Flow metering and custody transfer instrumentation definition',
      'Control and safety system architecture: DCS, PLC and ESD interfaces',
      'Fire and gas detection layout and detector mapping',
      'Telecommunication and optical fibre along the right-of-way'
    ],
    deliverables: [
      'Electrical load list and single line diagrams',
      'Hazardous area classification drawings',
      'Earthing and lightning protection layouts',
      'Cable schedules, routing and trench sections',
      'Instrument index and instrument datasheets',
      'Input and output list and loop diagrams',
      'Fire and gas detector layout',
      'Control system architecture diagram'
    ],
    codes: [
      'IEC 60079',
      'IEC 61508 / IEC 61511',
      'IS 3043',
      'IS 5572',
      'API RP 551',
      'ISA 5.1',
      'OISD 116',
      'OISD 137'
    ],
    phases: ['FEED', 'Detailed design', 'Commissioning support']
  },
  {
    slug: 'scada-digital',
    title: 'SCADA & Digital Engineering',
    navLabel: 'SCADA & digital engineering',
    short:
      'Pipeline SCADA architecture, leak detection concepts, alarm rationalisation and engineering data management.',
    icon: Network,
    lead:
      'The control, monitoring and data layer that makes a pipeline operable from a central control room.',
    intro: [
      'A pipeline is operated through its SCADA system. We define the architecture, the point database, the alarm philosophy and the leak detection approach, and keep them tied to the hydraulic model they depend on.',
      'Alongside the control layer, we help structure engineering data and documentation so information handed over at the end of a project remains usable through operations.'
    ],
    scope: [
      'Pipeline SCADA architecture and functional design specification',
      'RTU, flow computer and station automation specification',
      'Point database, tag naming and input and output definition',
      'Leak detection concept selection: mass balance and real-time transient model',
      'Human machine interface design and graphics standards',
      'Alarm rationalisation and alarm management philosophy',
      'Historian, reporting and data architecture definition',
      'Telecommunication bandwidth and availability planning',
      'Control system cyber security design basis input',
      'Engineering data, document control and handover specification',
      'Digital twin and asset information model concepts',
      'Engineering workflow automation and in-house tool development'
    ],
    deliverables: [
      'SCADA functional design specification',
      'System architecture and communication diagrams',
      'Point and tag database',
      'Leak detection concept and performance expectation report',
      'Alarm philosophy and rationalisation register',
      'HMI graphics standard',
      'Data handover and asset information specification'
    ],
    codes: [
      'API 1130',
      'API 1165',
      'API 1167',
      'ISA 18.2',
      'IEC 62443',
      'ISO 19650'
    ],
    phases: ['FEED', 'Detailed design', 'Operations support']
  },
  {
    slug: 'technical-safety',
    title: 'Technical Safety & Risk',
    navLabel: 'Technical safety & risk',
    short:
      'HAZID and HAZOP support, QRA, SIL studies, fire and explosion assessment and safety design philosophy.',
    icon: ShieldAlert,
    lead:
      'Safety engineering that shapes the design rather than reviewing it after the fact.',
    intro: [
      'Technical safety work is most valuable when it feeds the design: layout, spacing, detection, isolation and relief decisions all follow from it.',
      'We provide the studies and the engineering judgement behind them, and translate findings into actions a design team can implement and close out.'
    ],
    scope: [
      'Hazard identification and HAZOP preparation and support',
      'Pipeline route risk and population density assessment',
      'Quantitative risk assessment and consequence modelling',
      'Fire, explosion and dispersion assessment',
      'Safety integrity level determination and verification',
      'Relief, blowdown, depressurisation and isolation philosophy',
      'Emergency shutdown hierarchy and philosophy',
      'Fire and gas detection and mapping philosophy',
      'Layout, spacing and escape route safety review',
      'Regulatory and statutory submission technical support'
    ],
    deliverables: [
      'Safety design philosophy',
      'HAZID and HAZOP support documentation and action register',
      'Quantitative risk assessment report',
      'Fire and explosion risk assessment',
      'SIL determination and verification report',
      'Fire and gas detector mapping report',
      'Emergency shutdown and isolation philosophy'
    ],
    codes: [
      'IEC 61508 / IEC 61511',
      'ISO 17776',
      'API RP 752 / API RP 753',
      'OISD 116',
      'OISD 118',
      'PNGRB regulations'
    ],
    phases: ['Feasibility', 'FEED', 'Detailed design', 'Operations support']
  },
  {
    slug: 'project-engineering-assurance',
    title: 'Project Engineering & Technical Assurance',
    navLabel: 'Project engineering & assurance',
    short:
      'Engineering management, tender and bid engineering, design review, technical bid evaluation and interface control.',
    icon: ClipboardCheck,
    lead:
      'Engineering capacity and independent assurance through tender, design and execution phases.',
    intro: [
      'Projects often need engineering management and review capacity rather than another discipline. We provide that: deliverable planning, interdiscipline coordination, design review and independent technical assurance.',
      'We also support tender and bid phases, where engineering definition, deviation handling and technical evaluation decide the quality of what gets built.'
    ],
    scope: [
      'Engineering execution planning and deliverable register development',
      'Master deliverable register and progress measurement',
      'Interdiscipline check and squad check coordination',
      'Tender and bid engineering, including technical write-ups',
      'Technical bid evaluation and deviation assessment',
      'Vendor document and supplier drawing review',
      'Design review, gate review and engineering assurance',
      'Constructability and operability review facilitation',
      'Interface management and interface register control',
      'Third party verification and independent check support'
    ],
    deliverables: [
      'Engineering execution plan',
      'Master deliverable register and progress reports',
      'Technical bid evaluation report',
      'Design review and squad check reports',
      'Interface register and interface control documents',
      'Deviation and concession registers',
      'Independent verification statements'
    ],
    codes: [
      'ISO 9001 principles',
      'ISO 21500',
      'Client and PSU tender specifications',
      'Project specific engineering procedures'
    ],
    phases: ['Tender', 'FEED', 'Detailed design', 'Execution']
  }
];

export const disciplineBySlug = (slug: string): Discipline | undefined =>
  DISCIPLINES.find((d) => d.slug === slug);

export const LIFECYCLE = [
  {
    step: '01',
    title: 'Feasibility & concept',
    text: 'Corridor options, capacity screening, order-of-magnitude sizing and the technical case for the project.'
  },
  {
    step: '02',
    title: 'Route selection & survey basis',
    text: 'Constraint mapping, crossing strategy, alignment development and survey scope definition.'
  },
  {
    step: '03',
    title: 'FEED & design basis',
    text: 'Hydraulics, wall thickness, station configuration, philosophies and the specifications that frame detailed design.'
  },
  {
    step: '04',
    title: 'Detailed design',
    text: 'Discipline deliverables, alignment sheets, isometrics, stress and support design, and construction packages.'
  },
  {
    step: '05',
    title: 'Construction & commissioning support',
    text: 'Field queries, tie-in engineering, as-built updates, pre-commissioning and handover documentation.'
  },
  {
    step: '06',
    title: 'Operations & integrity',
    text: 'Capacity studies, modification engineering, inspection assessment, fitness-for-service and life extension.'
  }
];
