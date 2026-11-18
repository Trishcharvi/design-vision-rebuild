import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  ClipboardCheck,
  FileSearch,
  ChartNoAxesCombined,
  Compass,
  Waves,
  Wrench
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Project Experience',
  description:
    'Representative engineering scopes delivered by Design Vision across pipeline route studies, hydraulic analysis, subsea design, stress analysis, integrity assessment and design documentation.',
  alternates: { canonical: '/projects/' }
};

const work = [
  {
    icon: Compass,
    title: 'Pipeline route & feasibility studies',
    text: 'Structured engineering assessment of route alternatives, constraints, crossings and project interfaces, concluding in a recommended corridor with the reasoning recorded.',
    outputs: ['Route comparison matrix', 'Constraint and crossing register', 'Alignment development', 'Feasibility report']
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Hydraulic performance & surge studies',
    text: 'Modelling and assessment to understand capacity, pressure behaviour, station requirements and transient response under upset conditions.',
    outputs: ['Steady-state model', 'Surge analysis', 'Station spacing study', 'Operating envelope']
  },
  {
    icon: Waves,
    title: 'Subsea pipeline design packages',
    text: 'DNV-based design covering wall thickness, on-bottom stability, free spans, expansion and installation feasibility for offshore and shore approach sections.',
    outputs: ['Wall thickness report', 'Stability and span analysis', 'Expansion and buckling checks', 'Installation feasibility']
  },
  {
    icon: Wrench,
    title: 'Piping layout & stress analysis',
    text: 'Station and facility piping engineering from layout and 3D model through stress analysis, support design and construction isometrics.',
    outputs: ['Piping GA drawings', 'Stress analysis reports', 'Support drawings', 'Isometrics and MTO']
  },
  {
    icon: ClipboardCheck,
    title: 'Engineering design & documentation',
    text: 'Development and review of engineering deliverables, specifications and discipline interfaces to client document control requirements.',
    outputs: ['Design basis', 'Specifications and datasheets', 'Deliverable register', 'Issued-for-construction packages']
  },
  {
    icon: FileSearch,
    title: 'Integrity & technical assurance',
    text: 'Technical reviews and engineering input supporting integrity, risk and asset-management decisions, including inspection data assessment.',
    outputs: ['ILI data review', 'Fitness-for-service assessment', 'Remaining life estimate', 'Repair recommendations']
  }
];

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Projects' }]} />
          <span className="eyebrow">DESIGN VISION / PROJECTS</span>
          <h1>
            Focused work.
            <br />
            <em>Meaningful outcomes.</em>
          </h1>
          <p>
            Our engineering assignments are shaped around client requirements, project context and the
            technical decisions that need to be made.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="notice-panel">
            <span className="eyebrow">PROJECT EXPERIENCE</span>
            <h2>Representative engineering scopes</h2>
            <p>
              We are developing this section to share approved project references and case studies.
              Until client permissions and project details are confirmed, the examples below describe
              service types and typical outputs rather than claiming named client engagements.
            </p>
          </div>
          <div className="project-grid">
            {work.map(({ icon: Icon, title, text, outputs }, i) => (
              <article className="project-card" key={title}>
                <div>
                  <span>ENGINEERING SCOPE / {String(i + 1).padStart(2, '0')}</span>
                  <Icon size={25} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="project-outputs">
                  {outputs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad values-section">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="HOW A SCOPE IS SET UP"
              title="What we agree before engineering starts."
            >
              Clear framing at the outset is what keeps a study useful and a deliverable package
              auditable.
            </SectionHeading>
            <Link className="text-link section-more" href="/quality-hse/">
              Assurance process <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="setup-grid">
            <article>
              <span>01</span>
              <h3>The question</h3>
              <p>What decision does this work have to support, and by when.</p>
            </article>
            <article>
              <span>02</span>
              <h3>The basis</h3>
              <p>Codes, client specifications, statutory requirements and acceptance criteria.</p>
            </article>
            <article>
              <span>03</span>
              <h3>The inputs</h3>
              <p>Available data, its quality, and the assumptions needed where data is missing.</p>
            </article>
            <article>
              <span>04</span>
              <h3>The deliverables</h3>
              <p>Document list, format, revision control and review and comment cycle.</p>
            </article>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="HAVE A SCOPE TO DISCUSS?"
        title="Let's talk about your next project."
        label="Contact Design Vision"
      />
    </>
  );
}
