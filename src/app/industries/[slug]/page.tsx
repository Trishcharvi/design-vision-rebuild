import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Boxes, SlidersHorizontal } from 'lucide-react';
import { SECTORS, sectorBySlug } from '@/data/sectors';
import { disciplineBySlug } from '@/data/services';
import { SITE } from '@/data/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = sectorBySlug(slug);
  if (!s) return { title: 'Industry' };
  return {
    title: s.title,
    description: s.short,
    alternates: { canonical: `/industries/${s.slug}/` },
    openGraph: {
      title: `${s.title} | ${SITE.name}`,
      description: s.short,
      url: `${SITE.url}/industries/${s.slug}/`
    }
  };
}

export default async function SectorPage({ params }: Params) {
  const { slug } = await params;
  const s = sectorBySlug(slug);
  if (!s) notFound();

  const Icon = s.icon;
  const linked = s.disciplines
    .map((ds) => disciplineBySlug(ds))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Industries', href: '/industries/' }, { label: s.title }]} />
          <span className="eyebrow">
            <Icon size={14} /> BUSINESS AREA
          </span>
          <h1>{s.title}</h1>
          <p>{s.lead}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container two-col">
          <div className="section-heading">
            <span className="eyebrow">SECTOR OVERVIEW</span>
            <h2>Where our engineering applies.</h2>
          </div>
          <div className="prose">
            {s.intro.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <Link className="text-link" href="/contact/">
              Discuss a {s.navLabel.toLowerCase()} scope <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad scope-section">
        <div className="container two-col-wide">
          <div>
            <span className="eyebrow">
              <Boxes size={14} /> ASSETS WE WORK ON
            </span>
            <h2 className="block-title">Typical assets.</h2>
            <ul className="deliverable-list">
              {s.assets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">
              <SlidersHorizontal size={14} /> ENGINEERING PROVIDED
            </span>
            <h2 className="block-title">Engineering content.</h2>
            <ul className="deliverable-list">
              {s.engineering.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad related-section">
        <div className="container">
          <div className="section-row">
            <div className="section-heading">
              <span className="eyebrow">DISCIPLINES APPLIED</span>
              <h2>The engineering behind this sector.</h2>
            </div>
            <Link className="text-link section-more" href="/services/">
              All services <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="related-grid">
            {linked.map(({ slug: ds, navLabel, short, icon: RelIcon }) => (
              <Link key={ds} href={`/services/${ds}/`} className="related-card">
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

      <section className="sector-strip">
        <div className="container sector-strip-inner">
          <span className="eyebrow">OTHER BUSINESS AREAS</span>
          <div className="sector-strip-links">
            {SECTORS.filter((x) => x.slug !== s.slug).map((x) => (
              <Link key={x.slug} href={`/industries/${x.slug}/`}>
                {x.navLabel} <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="YOUR ASSET. OUR ENGINEERING SUPPORT."
        title="Tell us what your team is working on."
        text="Share the asset, the phase and the technical question. We will respond with how Design Vision can support it."
        label="Get in touch"
      />
    </>
  );
}
