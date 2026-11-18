import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Crosshair, ShieldCheck, Handshake, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';
import { DISCIPLINES } from '@/data/services';
import { SECTORS } from '@/data/sectors';

export const metadata: Metadata = {
  title: 'About Design Vision',
  description:
    'Design Vision is an independent engineering consultancy in Pune, India, focused on pipeline, facility and offshore engineering for the oil and gas industry.',
  alternates: { canonical: '/about/' }
};

const values = [
  {
    icon: Crosshair,
    title: 'Purposeful engineering',
    text: 'We focus on the engineering question that matters and the decision the work needs to enable.'
  },
  {
    icon: ShieldCheck,
    title: 'Technical integrity',
    text: 'Clear assumptions, disciplined methods and traceable engineering judgement underpin our work.'
  },
  {
    icon: Handshake,
    title: 'Collaborative delivery',
    text: 'We work constructively with client teams, contractors and other disciplines.'
  },
  {
    icon: Lightbulb,
    title: 'Practical perspective',
    text: 'Recommendations are shaped by constructability, operability, maintainability and project context.'
  }
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <span className="eyebrow">DESIGN VISION / ABOUT</span>
          <h1>
            Independent thinking.
            <br />
            <em>Integrated engineering.</em>
          </h1>
          <p>
            Design Vision is an engineering consultancy focused on the technical challenges of oil and
            gas pipelines, facilities and energy infrastructure.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container two-col">
          <SectionHeading
            eyebrow="OUR PURPOSE"
            title="Engineering support built around your objectives."
          />
          <div className="prose">
            <p>
              We support oil and gas clients, asset owners, EPC contractors and engineering
              organisations with focused technical services. Our work is shaped by the needs of each
              project: sound engineering fundamentals, clear communication and deliverables that help
              teams progress with confidence.
            </p>
            <p>
              From pipeline and hydraulic engineering to process facilities, subsea systems, integrity
              and digital engineering, Design Vision brings a multidisciplinary view to interconnected
              engineering challenges.
            </p>
            <p>
              We aim to be a responsive extension of your engineering team, supporting defined scopes,
              specialist studies and additional capacity when it is needed.
            </p>
            <Link className="text-link" href="/contact/">
              Talk to our team <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="metric-strip">
        <div className="container metric-grid">
          <div>
            <b>{DISCIPLINES.length}</b>
            <span>Engineering disciplines</span>
          </div>
          <div>
            <b>{SECTORS.length}</b>
            <span>Business areas served</span>
          </div>
          <div>
            <b>Pune</b>
            <span>Engineering base, India</span>
          </div>
          <div>
            <b>Independent</b>
            <span>No vendor or contractor tie</span>
          </div>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="WHAT GUIDES US" title="Principles behind every assignment." />
          <div className="value-grid">
            {values.map(({ icon: Icon, title, text }, i) => (
              <article className="value-card" key={title}>
                <span className="value-no">{String(i + 1).padStart(2, '0')}</span>
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container two-col-wide">
          <div>
            <span className="eyebrow">WHY INDEPENDENCE MATTERS</span>
            <h2 className="block-title">No stake in the outcome but the engineering.</h2>
            <div className="prose">
              <p>
                We do not supply equipment, construct, or represent vendors. A recommendation from
                Design Vision reflects what the engineering supports, not what would be convenient to
                sell. That matters most on route selection, material choice, repair strategy and
                technical bid evaluation, where the commercially easy answer and the technically right
                answer are not always the same.
              </p>
              <p>
                Where an assignment needs specialist capability beyond our team, we say so and
                recommend it rather than stretching our scope.
              </p>
            </div>
          </div>
          <div>
            <span className="eyebrow">COMPANY STATEMENTS</span>
            <h2 className="block-title">Vision, mission and assurance.</h2>
            <p className="code-note">
              Our vision, mission, quality statement and HSE statement are published in full, together
              with the technical assurance route every deliverable follows before it is issued.
            </p>
            <div className="link-stack">
              <Link href="/quality-hse/">
                Quality &amp; HSE statements <ArrowUpRight size={16} />
              </Link>
              <Link href="/standards/">
                Codes &amp; standards basis <ArrowUpRight size={16} />
              </Link>
              <Link href="/services/">
                Engineering services <ArrowUpRight size={16} />
              </Link>
              <Link href="/careers/">
                Careers at Design Vision <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="WORK WITH DESIGN VISION"
        title="Let's discuss your engineering needs."
        label="Contact us"
      />
    </>
  );
}
