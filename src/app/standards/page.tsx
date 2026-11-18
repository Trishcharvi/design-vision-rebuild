import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Ruler, Database, GitBranch } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Codes & Standards',
  description:
    'The codes, standards and statutory references that form the design basis of Design Vision pipeline and facility engineering, with the analysis and automation tools we work with.',
  alternates: { canonical: '/standards/' }
};

const REGISTERS = [
  {
    group: 'Onshore pipelines',
    items: [
      'ASME B31.4 — Pipeline transportation systems for liquids and slurries',
      'ASME B31.8 — Gas transmission and distribution piping systems',
      'ASME B31.8S — Managing system integrity of gas pipelines',
      'ASME B31G — Remaining strength of corroded pipelines',
      'API 5L — Line pipe specification',
      'API 1104 — Welding of pipelines and related facilities',
      'API RP 1102 — Steel pipelines crossing railroads and highways',
      'API 1160 — Managing system integrity for hazardous liquid pipelines',
      'API 1163 — In-line inspection systems qualification',
      'ISO 13623 — Pipeline transportation systems'
    ]
  },
  {
    group: 'Subsea & offshore',
    items: [
      'DNV-ST-F101 — Submarine pipeline systems',
      'DNV-RP-F105 — Free spanning pipelines',
      'DNV-RP-F109 — On-bottom stability design',
      'DNV-RP-F110 — Global buckling of submarine pipelines',
      'DNV-RP-F103 — Cathodic protection of submarine pipelines',
      'DNV-ST-F201 — Dynamic risers',
      'API RP 1111 — Design of offshore hydrocarbon pipelines',
      'API RP 2RD — Dynamic risers for floating production systems'
    ]
  },
  {
    group: 'Process, equipment & piping',
    items: [
      'ASME B31.3 — Process piping',
      'ASME Section VIII — Pressure vessels',
      'ASME B16 series — Flanges, fittings and valves',
      'API 520 / API 521 — Pressure relieving and depressuring systems',
      'API 2000 — Venting of atmospheric and low pressure storage tanks',
      'API 610 — Centrifugal pumps for petroleum service',
      'API 650 / API 620 — Welded steel tanks for oil storage',
      'WRC 537 — Local stresses in cylindrical shells',
      'ISO 5167 — Flow measurement by differential pressure devices'
    ]
  },
  {
    group: 'Civil & structural',
    items: [
      'IS 456 — Plain and reinforced concrete',
      'IS 800 — General construction in steel',
      'IS 875 — Design loads for buildings and structures',
      'IS 1893 — Criteria for earthquake resistant design',
      'ACI 318 — Building code requirements for structural concrete',
      'AISC 360 — Specification for structural steel buildings',
      'ASCE 7 — Minimum design loads and associated criteria'
    ]
  },
  {
    group: 'Electrical, instrumentation & control',
    items: [
      'IEC 60079 — Explosive atmospheres and equipment selection',
      'IEC 61508 / IEC 61511 — Functional safety and SIL',
      'IS 3043 — Code of practice for earthing',
      'IS 5572 — Classification of hazardous areas',
      'API RP 551 — Process measurement instrumentation',
      'ISA 5.1 — Instrumentation symbols and identification',
      'ISA 18.2 — Alarm systems management',
      'IEC 62443 — Industrial automation and control system security'
    ]
  },
  {
    group: 'SCADA & pipeline operations',
    items: [
      'API 1130 — Computational pipeline monitoring for liquids',
      'API 1165 — SCADA display recommended practice',
      'API 1167 — Pipeline SCADA alarm management',
      'ISO 19650 — Information management using building information modelling'
    ]
  },
  {
    group: 'Indian statutory & industry references',
    items: [
      'PNGRB T4S — Technical standards and specifications including safety standards',
      'OISD-GDN-141 — Inspection of onshore pipelines',
      'OISD-STD-116 — Fire protection facilities for petroleum refineries',
      'OISD-STD-118 — Layouts for oil and gas installations',
      'OISD-STD-137 — Inspection of electrical installations',
      'OISD-STD-244 — Storage and handling of petroleum products',
      'IS 15663 — Design and installation of gas pipelines',
      'Petroleum Rules and Gas Cylinder Rules as applicable',
      'Factories Act and state statutory approvals'
    ]
  },
  {
    group: 'Corrosion & materials',
    items: [
      'NACE SP0169 — Control of external corrosion on buried pipelines',
      'NACE SP0502 — Pipeline external corrosion direct assessment',
      'NACE MR0175 / ISO 15156 — Materials for sour service',
      'API 579 / ASME FFS-1 — Fitness-for-service'
    ]
  }
];

const TOOLING = [
  {
    icon: Ruler,
    title: 'Analysis & simulation',
    text: 'Steady-state and transient hydraulic simulation, pipe stress and flexibility analysis, finite element checks, structural analysis and subsea limit state calculation.'
  },
  {
    icon: Database,
    title: 'Spatial & terrain data',
    text: 'GIS and terrain modelling for route selection, alignment development, crossing identification, depth of cover and elevation profile generation.'
  },
  {
    icon: GitBranch,
    title: 'Modelling & drafting',
    text: 'Two and three dimensional modelling for piping and station layouts, isometric extraction, clash review and drawing production.'
  },
  {
    icon: BookOpen,
    title: 'In-house engineering automation',
    text: 'Internally developed tools that generate alignment sheets, isometrics and repeatable design calculations, reducing manual effort and keeping deliverables consistent across a project.'
  }
];

export default function StandardsPage() {
  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Codes & standards' }]} />
          <span className="eyebrow">
            <BookOpen size={14} /> DESIGN BASIS
          </span>
          <h1>
            Codes, standards <em>and tools.</em>
          </h1>
          <p>
            Every assignment is anchored to a stated design basis. These are the references our
            engineering is normally built on, together with the analysis and automation tools we work
            with.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="notice-panel">
            <span className="eyebrow">HOW WE APPLY THEM</span>
            <h2>Stated, agreed, then applied</h2>
            <p>
              Applicable codes, editions, client specifications and statutory requirements are
              confirmed with the client at the start of each assignment and recorded in the design
              basis. Where a client specification is more onerous than the code, the client
              specification governs. Deviations are raised, assessed and recorded rather than
              absorbed quietly into the design.
            </p>
          </div>

          <div className="register-grid">
            {REGISTERS.map((reg) => (
              <article className="register-card" key={reg.group}>
                <h3>{reg.group}</h3>
                <ul>
                  {reg.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad tooling-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">ENGINEERING TOOLS</span>
            <h2>Methods and tools behind the deliverables.</h2>
            <p>
              Tool selection is confirmed per project and aligned to client requirements. Calculations
              are presented so that inputs, assumptions and results can be checked independently of
              the software used.
            </p>
          </div>
          <div className="tooling-grid">
            {TOOLING.map(({ icon: Icon, title, text }) => (
              <article className="tooling-card" key={title}>
                <span className="service-icon">
                  <Icon size={21} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <Link className="text-link tooling-link" href="/quality-hse/">
            See how we check and approve work <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <CTA
        eyebrow="WORKING TO A SPECIFIC STANDARD?"
        title="Tell us the code basis for your project."
        text="If your project runs to a client specification or a statutory framework, we will work to it and state exactly how it has been applied."
        label="Discuss your design basis"
      />
    </>
  );
}
