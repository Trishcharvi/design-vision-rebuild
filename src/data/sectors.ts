import { Drill, Route, Factory, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Sector = {
  slug: string;
  title: string;
  navLabel: string;
  short: string;
  icon: LucideIcon;
  lead: string;
  intro: string[];
  assets: string[];
  engineering: string[];
  disciplines: string[];
};

export const SECTORS: Sector[] = [
  {
    slug: 'upstream',
    title: 'Upstream & Production Facilities',
    navLabel: 'Upstream',
    short:
      'Flowlines, gathering networks and production facility engineering from wellhead to processing terminal.',
    icon: Drill,
    lead:
      'Engineering for the collection systems and production facilities that move fluids from the wellhead to processing.',
    intro: [
      'Upstream gathering systems are hydraulically complex and frequently expanded. Multiphase flow, changing well performance and phased development all have to be carried by the same network.',
      'We support operators and engineering teams with the flowline, trunkline and facility engineering that keeps those systems workable as the field develops.'
    ],
    assets: [
      'Well pads, wellhead platforms and manifolds',
      'Flowlines and multiphase gathering networks',
      'Trunklines from gathering stations to central processing',
      'Group gathering stations and test facilities',
      'Separation, dehydration and stabilisation units',
      'Produced water handling and injection systems',
      'Effluent and water injection pipelines'
    ],
    engineering: [
      'Multiphase flowline sizing and network hydraulics',
      'Gathering network capacity and expansion studies',
      'Wax, hydrate and erosion screening',
      'Flowline and trunkline mechanical design',
      'Production facility process and piping engineering',
      'Brownfield tie-ins to live gathering systems',
      'Integrity and corrosion management for wet service lines'
    ],
    disciplines: [
      'pipeline-engineering',
      'hydraulics-flow-assurance',
      'process-engineering',
      'piping-engineering',
      'pipeline-integrity'
    ]
  },
  {
    slug: 'midstream-pipelines',
    title: 'Midstream, Pipelines & Transmission',
    navLabel: 'Midstream & transmission',
    short:
      'Cross-country crude, product and gas transmission pipelines, stations, terminals and city gas networks.',
    icon: Route,
    lead:
      'Our principal sector: long distance transmission pipelines and the stations that run them.',
    intro: [
      'Cross-country pipelines carry the heaviest engineering content of any linear asset: route, land, crossings, hydraulics, stations, control systems and integrity all have to come together as one system.',
      'This is where Design Vision is strongest. We support operators, pipeline companies and EPC contractors across transmission pipelines for crude oil, petroleum products, natural gas and water.'
    ],
    assets: [
      'Cross-country crude oil and petroleum product pipelines',
      'Natural gas transmission and spur lines',
      'Pumping stations, compressor stations and intermediate pigging stations',
      'Sectionalising valve stations and tap-off points',
      'Dispatch, receipt and intermediate terminals',
      'City gas distribution steel networks and CGS',
      'Water transmission and injection pipelines'
    ],
    engineering: [
      'Route selection, alignment sheets and crossing engineering',
      'Steady-state and transient hydraulic analysis',
      'Wall thickness, class location and pressure design',
      'Station process, piping, electrical and instrumentation design',
      'SCADA, telemetry and leak detection engineering',
      'Cathodic protection and coating engineering interface',
      'Integrity management, ILI assessment and life extension',
      'Capacity augmentation and looping studies'
    ],
    disciplines: [
      'pipeline-engineering',
      'hydraulics-flow-assurance',
      'pipeline-integrity',
      'scada-digital',
      'electrical-instrumentation',
      'civil-structural'
    ]
  },
  {
    slug: 'downstream-terminals',
    title: 'Downstream, Terminals & Storage',
    navLabel: 'Downstream & terminals',
    short:
      'Refinery offsites, tank farms, loading facilities, interconnecting piping and brownfield modifications.',
    icon: Factory,
    lead:
      'Engineering for storage, distribution and the dense piping environments of downstream facilities.',
    intro: [
      'Downstream work is characterised by congestion and live operations. Tie-ins, shutdown windows, hazardous area constraints and existing documentation quality often govern the engineering approach.',
      'We support terminal and refinery offsite scopes with process, piping and civil engineering that is realistic about what can be built while the facility continues to run.'
    ],
    assets: [
      'Product terminals, depots and tank farms',
      'Refinery offsites and interconnecting pipe racks',
      'Tanker and wagon loading gantries',
      'Marine loading lines, jetty piping and shore tanks',
      'Pump houses, metering skids and proving systems',
      'Fire water networks and foam systems',
      'Vapour recovery and effluent systems'
    ],
    engineering: [
      'Terminal process and hydraulic design',
      'Tank farm layout, dyke and containment engineering',
      'Loading gantry and metering system engineering',
      'Interconnecting piping layout and stress analysis',
      'Brownfield tie-in and shutdown engineering',
      'Hazardous area classification and safety layout review',
      'Civil, foundation and pipe rack structural design'
    ],
    disciplines: [
      'process-engineering',
      'piping-engineering',
      'civil-structural',
      'electrical-instrumentation',
      'technical-safety'
    ]
  },
  {
    slug: 'power-utilities',
    title: 'Power, Utilities & Industrial Infrastructure',
    navLabel: 'Power & utilities',
    short:
      'Fuel supply lines, cooling and utility systems, industrial pipe racks and water infrastructure.',
    icon: Zap,
    lead:
      'Pipeline and piping engineering for power generation and industrial facilities.',
    intro: [
      'Power plants and industrial facilities depend on the same pipeline and piping engineering as oil and gas assets: fuel supply, cooling water, utility distribution and the structures that carry them.',
      'We apply the same discipline set to these assets, with particular strength where long linear fuel or water systems are involved.'
    ],
    assets: [
      'Fuel gas and liquid fuel supply pipelines to power plants',
      'Cooling water intake, discharge and circulation systems',
      'Raw, treated and demineralised water networks',
      'Compressed air, nitrogen and steam distribution',
      'Industrial pipe racks and utility corridors',
      'Water transmission mains and pumping stations'
    ],
    engineering: [
      'Fuel supply pipeline design and hydraulics',
      'Large diameter water system hydraulic analysis including surge',
      'Utility piping layout and stress analysis',
      'Pipe rack and support structural design',
      'Pump station process, electrical and control engineering',
      'Interface engineering with plant and EPC packages'
    ],
    disciplines: [
      'pipeline-engineering',
      'hydraulics-flow-assurance',
      'piping-engineering',
      'civil-structural',
      'electrical-instrumentation'
    ]
  }
];

export const sectorBySlug = (slug: string): Sector | undefined =>
  SECTORS.find((s) => s.slug === slug);
