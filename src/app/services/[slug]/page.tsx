import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowRight, CircleCheck, FileText, BookOpen } from 'lucide-react';
import { DISCIPLINES, disciplineBySlug } from '@/data/services';
import { SITE } from '@/data/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DISCIPLINES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const d = disciplineBySlug(slug);
  if (!d) return { title: 'Service' };
  return {
    title: d.title,
    description: d.short,
    alternates: { canonical: `/services/${d.slug}/` },
    openGraph: {
      title: `${d.title} | ${SITE.name}`,
      description: d.short,
      url: `${SITE.url}/services/${d.slug}/`
    }
  };
}

export default async function DisciplinePage({ params }: Params) {
  const { slug } = await params;
  const d = disciplineBySlug(slug);
  if (!d) notFound();

  const related = DISCIPLINES.filter((x) => x.slug !== d.slug).slice(0, 4);
  const Icon = d.icon;

  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services', href: '/services/' }, { label: d.title }]} />
          <span className="eyebrow">
            <Icon size={14} /> ENGINEERING DISCIPLINE
          </span>
          <h1>{d.title}</h1>
          <p>{d.lead}</p>
          <div className="hero-phase-row">
            {d.phases.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container discipline-layout">
          <div className="prose discipline-intro">
            {d.intro.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <Link className="text-link" href="/contact/">
              Discuss this scope <ArrowUpRight size={17} />
            </Link>
          </div>

          <aside className="spec-card">
            <span className="eyebrow">AT A GLANCE</span>
            <dl>
              <div>
                <dt>Discipline</dt>
                <dd>{d.title}</dd>
              </div>
              <div>
                <dt>Typical phases</dt>
                <dd>{d.phases.join(' / ')}</dd>
              </div>
              <div>
                <dt>Scope items</dt>
                <dd>{d.scope.length} defined activities</dd>
              </div>
              <div>
                <dt>Primary code basis</dt>
                <dd>{d.codes.slice(0, 3).join(', ')}</dd>
              </div>
            </dl>
            <Link className="spec-card-link" href="/standards/">
              Full code register <ArrowRight size={15} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-pad scope-section">
        <div className="container">
          <div className="scope-head">
            <span className="eyebrow">
              <CircleCheck size={14} /> SCOPE OF WORK
            </span>
            <h2>What this discipline covers.</h2>
          </div>
          <ul className="scope-list">
            {d.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container two-col-wide">
          <div>
            <span className="eyebrow">
              <FileText size={14} /> TYPICAL DELIVERABLES
            </span>
            <h2 className="block-title">Documents you receive.</h2>
            <ul className="deliverable-list">
              {d.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">
              <BookOpen size={14} /> CODES &amp; STANDARDS
            </span>
            <h2 className="block-title">Design basis references.</h2>
            <div className="code-chips">
              {d.codes.map((code) => (
                <span key={code}>{code}</span>
              ))}
            </div>
            <p className="code-note">
              Applicable editions, client specifications and statutory requirements are confirmed for
              each assignment and recorded in the design basis.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad related-section">
        <div className="container">
          <div className="section-row">
            <div className="section-heading">
              <span className="eyebrow">CONNECTED DISCIPLINES</span>
              <h2>Engineering rarely sits alone.</h2>
            </div>
            <Link className="text-link section-more" href="/services/">
              All services <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="related-grid">
            {related.map(({ slug: s, navLabel, short, icon: RelIcon }) => (
              <Link key={s} href={`/services/${s}/`} className="related-card">
                <RelIcon size={20} />
                <h3>{navLabel}</h3>
                <p>{short}</p>
                <span className="related-more">
                  View discipline <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="NEED THIS CAPABILITY ON YOUR PROJECT?"
        title={`Let's scope your ${d.navLabel.toLowerCase()} requirement.`}
        text="Tell us the asset, the phase and the decisions the work has to support. We will come back with a clear scope and deliverable list."
        label="Send an enquiry"
      />
    </>
  );
}
