import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Layers3,
  Workflow
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCards from '@/components/ServiceCards';
import Lifecycle from '@/components/Lifecycle';
import CTA from '@/components/CTA';
import { SECTORS } from '@/data/sectors';
import { DISCIPLINES } from '@/data/services';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid-lines" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">
              <i /> INDEPENDENT PIPELINE &amp; OIL AND GAS ENGINEERING
            </span>
            <h1>
              Engineering clarity for <em>critical</em> energy infrastructure.
            </h1>
            <p>
              Design Vision supports operators, EPC contractors and engineering teams with practical,
              multidisciplinary engineering services across pipelines, facilities and offshore assets.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact/">
                Discuss your project <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link light-link" href="/services/">
                Explore our capabilities <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-proof">
              <span>
                <ShieldCheck size={17} /> Independent technical support
              </span>
              <span>
                <Compass size={17} /> Multidiscipline perspective
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-core">
              <div className="core-ring">DV</div>
              <span>
                ENGINEERING
                <br />
                INTEGRATION
              </span>
            </div>
            <div className="visual-label label-top">01 / DEFINE</div>
            <div className="visual-label label-right">02 / ENGINEER</div>
            <div className="visual-label label-bottom">03 / DELIVER</div>
            <div className="visual-coordinate">
              18&deg;31&apos; N
              <br />
              73&deg;51&apos; E
            </div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>ENGINEERING &bull; INTEGRITY &bull; PERFORMANCE</span>
          <span>BUILT AROUND YOUR ASSET</span>
        </div>
      </section>

      <section className="discipline-bar">
        <div className="container discipline-bar-inner">
          <span className="discipline-bar-label">DISCIPLINES</span>
          <div className="discipline-bar-track">
            {DISCIPLINES.map((d) => (
              <Link key={d.slug} href={`/services/${d.slug}/`}>
                {d.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-layout">
          <div className="intro-aside">
            <span className="eyebrow">01 / WHO WE ARE</span>
            <div className="vertical-rule" />
            <span className="side-note">
              TECHNICAL THINKING.
              <br />
              PRACTICAL OUTCOMES.
            </span>
          </div>
          <div className="intro-main">
            <SectionHeading
              eyebrow="ENGINEERING THAT CONNECTS THE DETAIL TO THE BIG PICTURE"
              title="A dependable engineering partner for complex energy assets."
            >
              We bring together engineering disciplines, project understanding and operational
              perspective to help clients make informed decisions throughout the asset lifecycle.
            </SectionHeading>
            <Link className="text-link" href="/about/">
              Discover Design Vision <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="02 / OUR CAPABILITIES"
              title="Engineering services across the asset lifecycle."
            >
              Focused technical support, from early studies and design development through project
              execution and operational integrity.
            </SectionHeading>
            <Link className="text-link section-more" href="/services/">
              All services <ArrowUpRight size={17} />
            </Link>
          </div>
          <ServiceCards limit={6} />
        </div>
      </section>

      <section className="section-pad lifecycle-section">
        <div className="container">
          <div className="section-row">
            <div className="section-heading light">
              <span className="eyebrow">03 / PIPELINE LIFECYCLE</span>
              <h2>From corridor study to life extension.</h2>
              <p>
                A pipeline passes through the same sequence of engineering decisions whatever it
                carries. We can join at any stage and pick up the deliverables that stage needs.
              </p>
            </div>
            <Link className="text-link section-more light-link" href="/services/">
              Services by discipline <ArrowUpRight size={17} />
            </Link>
          </div>
          <Lifecycle />
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="container approach-layout">
          <div>
            <span className="eyebrow">04 / HOW WE WORK</span>
            <h2>
              Sound engineering.
              <br />
              <em>Clear decisions.</em>
            </h2>
            <p className="approach-lead">
              Good engineering is more than producing documents. It is understanding the problem,
              making assumptions visible and delivering work that can be used with confidence.
            </p>
            <Link className="button button-outline" href="/about/">
              Our approach <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="approach-steps">
            <div>
              <span>01</span>
              <div>
                <h3>Understand the asset</h3>
                <p>
                  Establish objectives, constraints, interfaces and the decisions the work must
                  support.
                </p>
              </div>
              <Layers3 />
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Engineer with context</h3>
                <p>Apply appropriate methods, standards and multidisciplinary coordination.</p>
              </div>
              <Workflow />
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Deliver usable outcomes</h3>
                <p>
                  Communicate assumptions, findings and recommendations in a clear, traceable way.
                </p>
              </div>
              <ShieldCheck />
            </div>
          </div>
        </div>
      </section>

      <section className="industries-strip section-pad">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="05 / BUSINESS AREAS"
              title="Supporting the people behind essential energy."
            >
              Upstream gathering systems, cross-country transmission pipelines, downstream terminals
              and industrial infrastructure.
            </SectionHeading>
            <Link href="/industries/" className="text-link section-more">
              View industries <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="sector-row">
            {SECTORS.map(({ slug, navLabel, short, icon: Icon }) => (
              <Link key={slug} href={`/industries/${slug}/`} className="sector-tile">
                <Icon size={22} />
                <h3>{navLabel}</h3>
                <p>{short}</p>
                <span>
                  Explore <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="assurance-strip">
        <div className="container assurance-strip-inner">
          <div>
            <span className="eyebrow">06 / ASSURANCE</span>
            <h2>Checked, coordinated, issued under revision control.</h2>
            <p>
              Every deliverable is produced against a stated design basis, independently checked and
              approved before issue. Codes, client specifications and statutory requirements are
              confirmed and recorded at the start of each assignment.
            </p>
            <div className="assurance-strip-links">
              <Link className="text-link" href="/quality-hse/">
                Quality &amp; HSE <ArrowUpRight size={16} />
              </Link>
              <Link className="text-link" href="/standards/">
                Codes &amp; standards <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <ul className="assurance-strip-list">
            <li>Design basis agreed and recorded</li>
            <li>Independent discipline check</li>
            <li>Interdiscipline coordination</li>
            <li>Approval by a lead engineer</li>
            <li>Controlled revision and comment close-out</li>
          </ul>
        </div>
      </section>

      <CTA
        title="Have an engineering challenge?"
        text="Tell us about your asset, scope or technical requirement. We would be pleased to discuss how Design Vision can support your team."
      />
    </>
  );
}
