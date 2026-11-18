import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Factory, Globe2, Construction, Ship, Building2, Workflow } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';
import { SECTORS } from '@/data/sectors';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Design Vision supports upstream production, midstream pipelines and transmission, downstream terminals and storage, and power and utilities infrastructure.',
  alternates: { canonical: '/industries/' }
};

const clients = [
  {
    icon: Factory,
    title: 'Oil & gas operators',
    text: 'Engineering support for operating companies managing pipeline, terminal and production assets.'
  },
  {
    icon: Construction,
    title: 'EPC contractors',
    text: 'Additional engineering capacity, specialist studies and technical deliverables for project teams.'
  },
  {
    icon: Globe2,
    title: 'Pipeline companies',
    text: 'Pipeline design, hydraulic performance, integrity and life-cycle engineering.'
  },
  {
    icon: Ship,
    title: 'Offshore & subsea developers',
    text: 'Engineering studies and interface support for offshore pipeline and subsea infrastructure.'
  },
  {
    icon: Building2,
    title: 'Engineering consultants',
    text: 'Collaborative discipline support for consultancies delivering complex engineering scopes.'
  },
  {
    icon: Workflow,
    title: 'Asset owners & developers',
    text: 'Independent technical input to support concept selection, project development and asset decisions.'
  }
];

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Industries' }]} />
          <span className="eyebrow">DESIGN VISION / INDUSTRIES</span>
          <h1>
            Engineering for the
            <br />
            <em>energy value chain.</em>
          </h1>
          <p>
            We work alongside organisations responsible for developing, delivering and operating
            critical oil and gas infrastructure.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="BUSINESS AREAS"
              title="Four areas where our engineering is applied."
            >
              Each business area has its own assets, hydraulic behaviour and engineering emphasis.
            </SectionHeading>
          </div>
          <div className="sector-grid">
            {SECTORS.map(({ slug, title, short, icon: Icon, assets }) => (
              <Link key={slug} href={`/industries/${slug}/`} className="sector-card">
                <div className="sector-card-top">
                  <span className="service-icon">
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{title}</h3>
                <p>{short}</p>
                <ul>
                  {assets.slice(0, 4).map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <span className="sector-card-link">Explore business area</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad values-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHO WE SUPPORT"
            title="A flexible engineering partner across the industry."
          />
          <div className="industry-grid">
            {clients.map(({ icon: Icon, title, text }, i) => (
              <article className="industry-card" key={title}>
                <span className="industry-index">{String(i + 1).padStart(2, '0')}</span>
                <Icon size={27} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="YOUR PROJECT. OUR ENGINEERING SUPPORT."
        title="Tell us what your team is working on."
        label="Get in touch"
      />
    </>
  );
}
