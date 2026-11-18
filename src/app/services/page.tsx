import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import Lifecycle from '@/components/Lifecycle';
import CTA from '@/components/CTA';
import { DISCIPLINES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Engineering Services',
  description:
    'Pipeline, hydraulic, integrity, process, piping, subsea, civil, electrical, instrumentation, SCADA, technical safety and project engineering services for oil and gas assets.',
  alternates: { canonical: '/services/' }
};

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <span className="eyebrow">DESIGN VISION / SERVICES</span>
          <h1>
            Specialist expertise.
            <br />
            <em>Connected disciplines.</em>
          </h1>
          <p>
            Engineering services for pipeline and facility assets, delivered with a practical
            understanding of project, operational and interface requirements.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="services-intro">
            <SectionHeading
              eyebrow="OUR ENGINEERING CAPABILITIES"
              title="The right expertise for each stage of your asset."
            />
            <p>
              Engage Design Vision for a defined technical study, a specific engineering discipline or
              coordinated support across a wider scope. Each discipline below has its own scope of
              work, deliverable list and code basis.
            </p>
          </div>

          <div className="detailed-services">
            {DISCIPLINES.map(({ icon: Icon, title, short, scope, slug, codes }, i) => (
              <article className="detail-service" key={slug}>
                <div className="detail-service-head">
                  <span className="service-icon">
                    <Icon size={23} />
                  </span>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="detail-service-copy">
                  <h2>
                    <Link href={`/services/${slug}/`}>{title}</Link>
                  </h2>
                  <p>{short}</p>
                  <Link className="detail-service-link" href={`/services/${slug}/`}>
                    Scope, deliverables &amp; codes <ArrowRight size={15} />
                  </Link>
                </div>
                <div className="detail-service-detail">
                  <ul>
                    {scope.slice(0, 5).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="detail-service-codes">
                    {codes.slice(0, 4).map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad lifecycle-section">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">ASSET LIFECYCLE</span>
            <h2>Where our engineering fits.</h2>
            <p>
              We can join a pipeline project at any point in its life, and the deliverables change
              accordingly.
            </p>
          </div>
          <Lifecycle />
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="notice-panel">
            <span className="eyebrow">ENGAGEMENT MODELS</span>
            <h2>Three ways clients use us</h2>
            <p>
              <b>Defined study.</b> A single technical question with a fixed scope, method and report
              deliverable. <b>Discipline package.</b> A full set of discipline deliverables for a
              project phase, produced and checked to your document control requirements.{' '}
              <b>Engineering capacity.</b> Ongoing support alongside your own team, including design
              review, vendor document review and technical assurance.
            </p>
          </div>
          <Link className="text-link" href="/quality-hse/">
            How we check and issue deliverables <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <CTA
        eyebrow="NEED A SPECIFIC SCOPE?"
        title="Let's define the engineering support you need."
        text="Describe the asset and the phase, and we will come back with a scope, a deliverable list and a code basis."
        label="Send an enquiry"
      />
    </>
  );
}
