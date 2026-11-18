import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Users, GraduationCap, Microscope, Send, Mail } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/CTA';
import { DISCIPLINES } from '@/data/services';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Engineering careers at Design Vision: the disciplines we work across, what we look for in pipeline and oil and gas engineers, and how to send us your CV.',
  alternates: { canonical: '/careers/' }
};

const LOOK_FOR = [
  {
    icon: Microscope,
    title: 'Engineering judgement',
    text: 'Engineers who can state an assumption, justify a method and recognise when a result does not look right. Software output is a starting point, not an answer.'
  },
  {
    icon: Users,
    title: 'Clear communication',
    text: 'The ability to write a calculation, a report or a technical query that another engineer can follow and check without a conversation first.'
  },
  {
    icon: GraduationCap,
    title: 'Willingness to learn the code',
    text: 'Comfort working from codes, standards and client specifications directly, rather than only from precedent drawings.'
  }
];

const OFFER = [
  'Direct exposure to pipeline and facility engineering across the full project lifecycle',
  'Work on real design basis and calculation content rather than drafting alone',
  'Mentoring from senior engineers with long operating and project experience',
  'Involvement in in-house engineering automation and tool development',
  'Flexible engagement: permanent, contract and specialist consulting arrangements'
];

export default function CareersPage() {
  const subject = encodeURIComponent('Career enquiry - Design Vision');
  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Careers' }]} />
          <span className="eyebrow">
            <Users size={14} /> CAREERS AT DESIGN VISION
          </span>
          <h1>
            Engineering work <em>worth doing.</em>
          </h1>
          <p>
            We are a small, technically focused consultancy. That means engineers here work on the
            substance of a project — the design basis, the calculation, the decision — rather than a
            narrow slice of it.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container two-col">
          <div className="section-heading">
            <span className="eyebrow">WORKING HERE</span>
            <h2>Depth over volume.</h2>
          </div>
          <div className="prose">
            <p>
              Design Vision works across pipeline, process, piping, subsea, civil, electrical,
              instrumentation, control and safety engineering. Assignments range from focused
              technical studies to full discipline deliverable packages, which means engineers see how
              their work is used downstream.
            </p>
            <p>
              We care more about how an engineer thinks than how many years are on the CV. Early
              career engineers who are prepared to work from the code and senior engineers who want
              demanding technical work are both welcome to get in touch.
            </p>
            <a className="text-link" href={`mailto:${SITE.email}?subject=${subject}`}>
              Send your CV <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad values-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE LOOK FOR</span>
            <h2>Three things that matter most.</h2>
          </div>
          <div className="commitment-grid">
            {LOOK_FOR.map(({ icon: Icon, title, text }) => (
              <article className="commitment-card" key={title}>
                <span className="service-icon">
                  <Icon size={21} />
                </span>
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
            <span className="eyebrow">DISCIPLINES WE WORK ACROSS</span>
            <h2 className="block-title">Where you would fit.</h2>
            <div className="code-chips">
              {DISCIPLINES.map((d) => (
                <Link key={d.slug} href={`/services/${d.slug}/`}>
                  <span>{d.navLabel}</span>
                </Link>
              ))}
            </div>
            <p className="code-note">
              We also welcome enquiries from engineering designers, draughtspersons and document
              controllers with oil and gas project experience.
            </p>
          </div>
          <div>
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2 className="block-title">What you get in return.</h2>
            <ul className="deliverable-list">
              {OFFER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad apply-section">
        <div className="container">
          <div className="apply-panel">
            <div>
              <span className="eyebrow">
                <Send size={14} /> HOW TO APPLY
              </span>
              <h2>Send us your CV.</h2>
              <p>
                We do not run a formal vacancy list. Email your CV with a short note on the
                disciplines you work in, the codes you have worked to and the kind of assignments you
                are looking for. We review every enquiry and reply when there is a genuine fit.
              </p>
            </div>
            <div className="apply-contact">
              <a className="button button-primary" href={`mailto:${SITE.email}?subject=${subject}`}>
                <Mail size={17} /> Email your CV
              </a>
              <span className="apply-note">{SITE.email}</span>
              <span className="apply-note">
                Please mention your discipline and notice period in the subject line.
              </span>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="NOT LOOKING FOR A ROLE?"
        title="We also collaborate with independent specialists."
        text="If you are an independent consultant or a small engineering practice looking to collaborate on pipeline scopes, we would be glad to hear from you."
        label="Get in touch"
      />
    </>
  );
}
