import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Target, Compass, ShieldCheck, Scale, Lock, FileCheck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Quality & HSE',
  description:
    'Design Vision company statements, engineering quality assurance workflow, document control and health, safety and environment commitments.',
  alternates: { canonical: '/quality-hse/' }
};

const STATEMENTS = [
  {
    icon: Compass,
    label: 'VISION',
    title: 'Engineering that can be relied on',
    text: 'To be a trusted independent engineering partner for pipeline and energy infrastructure, known for technical depth, clarity of thought and dependable delivery.'
  },
  {
    icon: Target,
    label: 'MISSION',
    title: 'Clear answers to technical questions',
    text: 'To deliver engineering that answers the question actually being asked, with visible assumptions, appropriate methods and deliverables that teams can act on with confidence.'
  },
  {
    icon: ShieldCheck,
    label: 'QUALITY STATEMENT',
    title: 'Checked before it leaves us',
    text: 'Every deliverable is produced, checked and approved by named engineers against a stated design basis. Our quality approach follows the principles of ISO 9001 — defined processes, competence, traceability and continual improvement.'
  },
  {
    icon: Scale,
    label: 'HSE STATEMENT',
    title: 'Safety designed in, not added on',
    text: 'Engineering decisions are made with the safety of construction crews, operators and the public in view. We design to the applicable safety codes and raise hazards we identify, whether or not they fall inside our scope.'
  }
];

const ASSURANCE = [
  {
    step: '01',
    title: 'Design basis agreed',
    text: 'Codes, client specifications, statutory requirements, units, software and acceptance criteria are confirmed and recorded before engineering begins.'
  },
  {
    step: '02',
    title: 'Originated by a competent engineer',
    text: 'Work is assigned to an engineer with relevant discipline experience. Inputs, references and assumptions are recorded within the deliverable itself.'
  },
  {
    step: '03',
    title: 'Independent check',
    text: 'A second engineer checks method, inputs, calculation and conclusions. Checks are recorded on the document, not held informally.'
  },
  {
    step: '04',
    title: 'Interdiscipline check',
    text: 'Deliverables that cross disciplines are circulated for interdiscipline comment, with comments and resolutions tracked to closure.'
  },
  {
    step: '05',
    title: 'Approval and issue',
    text: 'Approval is given by a lead engineer. Documents are issued under controlled revision with a clear revision history and reason for issue.'
  },
  {
    step: '06',
    title: 'Comment resolution and close-out',
    text: 'Client and third party comments are logged, answered individually and closed out in a revised issue rather than absorbed silently.'
  }
];

const COMMITMENTS = [
  {
    icon: FileCheck,
    title: 'Document control',
    text: 'Controlled numbering, revision history, hold markings and reason-for-issue on every deliverable, with a master deliverable register maintained through the assignment.'
  },
  {
    icon: Lock,
    title: 'Confidentiality & data security',
    text: 'Client data is handled as confidential, kept to the people working on the assignment, and returned or retained strictly as agreed. We work under client non-disclosure terms where required.'
  },
  {
    icon: ShieldCheck,
    title: 'Competence & development',
    text: 'Engineers work within their demonstrated competence. Where an assignment needs specialist input beyond our team, we say so and bring in or recommend that expertise.'
  }
];

export default function QualityHsePage() {
  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Quality & HSE' }]} />
          <span className="eyebrow">
            <ShieldCheck size={14} /> COMPANY STATEMENTS
          </span>
          <h1>
            Quality, assurance <em>and HSE.</em>
          </h1>
          <p>
            How Design Vision is run: what we are trying to do, how engineering is checked before it
            is issued, and the commitments that sit behind every assignment.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="statement-grid">
            {STATEMENTS.map(({ icon: Icon, label, title, text }) => (
              <article className="statement-card" key={label}>
                <span className="statement-label">{label}</span>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad assurance-section">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">TECHNICAL ASSURANCE</span>
            <h2>The route every deliverable takes.</h2>
            <p>
              A deliverable is not finished when the calculation closes. It is finished when it has
              been checked, coordinated, approved and issued under revision control.
            </p>
          </div>
          <div className="assurance-grid">
            {ASSURANCE.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR COMMITMENTS</span>
            <h2>How we handle your project and your data.</h2>
          </div>
          <div className="commitment-grid">
            {COMMITMENTS.map(({ icon: Icon, title, text }) => (
              <article className="commitment-card" key={title}>
                <span className="service-icon">
                  <Icon size={21} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="honest-note">
            <p>
              <b>A note on certification.</b> Design Vision applies the principles of ISO 9001 to its
              engineering processes. We do not claim third party certification to ISO 9001, ISO 14001
              or ISO 45001. Where a client requires certified processes, we will say so clearly at
              enquiry stage and agree how the work will be assured.
            </p>
            <Link className="text-link" href="/standards/">
              View our code and standards basis <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="WORK WITH DESIGN VISION"
        title="Engineering you can check, challenge and use."
        text="If assurance and traceability matter on your project, we will set out exactly how the work will be produced, checked and issued."
        label="Discuss your requirement"
      />
    </>
  );
}
