import type { Metadata } from 'next';
import { Mail, Phone, MapPin, ArrowUpRight, Clock } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { DISCIPLINES } from '@/data/services';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Design Vision in Pune, India for pipeline and oil and gas engineering enquiries, specialist studies and engineering capacity.',
  alternates: { canonical: '/contact/' }
};

export default function Contact() {
  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <span className="eyebrow">DESIGN VISION / CONTACT</span>
          <h1>
            Let&apos;s start with
            <br />
            <em>a conversation.</em>
          </h1>
          <p>
            Share a little about your project, technical requirement or engineering support needs. We
            will be pleased to hear from you.
          </p>
        </div>
      </section>

      <section className="section-pad contact-section">
        <div className="container contact-layout">
          <div className="contact-details">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>
              Connect with
              <br />
              Design Vision.
            </h2>
            <p>
              For project enquiries, collaboration opportunities and general questions, contact us
              using the details below or send a message through the form.
            </p>
            <a href={`mailto:${SITE.email}`}>
              <Mail />{' '}
              <span>
                <small>EMAIL</small>
                {SITE.email}
              </span>
            </a>
            <a href={`tel:${SITE.phoneHref}`}>
              <Phone />{' '}
              <span>
                <small>PHONE</small>
                {SITE.phoneDisplay}
              </span>
            </a>
            <div>
              <MapPin />{' '}
              <span>
                <small>OFFICE</small>
                {SITE.addressLines.join(', ')}
              </span>
            </div>
            <div>
              <Clock />{' '}
              <span>
                <small>RESPONSE</small>
                We aim to respond to enquiries promptly.
              </span>
            </div>
            <p className="contact-aside">
              For a faster reply, include the asset type, the project phase and the deliverables you
              need. If the enquiry is confidential, say so and we will respond with our
              non-disclosure terms first.
            </p>
          </div>

          <form
            className="contact-form"
            name="project-enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/contact/thank-you/"
          >
            <input type="hidden" name="form-name" value="project-enquiry" />
            <p className="hidden-field">
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="form-heading">
              <span className="eyebrow">PROJECT ENQUIRY</span>
              <h2>How can we help?</h2>
              <p>Fields marked * are required.</p>
            </div>
            <label>
              Your name *<input name="name" type="text" required placeholder="Full name" />
            </label>
            <label>
              Work email *
              <input name="email" type="email" required placeholder="name@company.com" />
            </label>
            <label>
              Company
              <input name="company" type="text" placeholder="Company / organisation" />
            </label>
            <div className="form-row">
              <label>
                Area of interest
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a discipline
                  </option>
                  {DISCIPLINES.map((d) => (
                    <option key={d.slug}>{d.title}</option>
                  ))}
                  <option>Other / multidisciplinary support</option>
                </select>
              </label>
              <label>
                Project phase
                <select name="phase" defaultValue="">
                  <option value="" disabled>
                    Select a phase
                  </option>
                  <option>Feasibility / concept</option>
                  <option>Tender / bid stage</option>
                  <option>FEED / basic engineering</option>
                  <option>Detailed design</option>
                  <option>Construction / commissioning</option>
                  <option>Operations / integrity</option>
                </select>
              </label>
            </div>
            <label>
              How can we support you? *
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Briefly describe your project or requirement"
              />
            </label>
            <button className="button button-primary" type="submit">
              Send enquiry <ArrowUpRight size={18} />
            </button>
            <p className="form-note">
              Your details will be used only to respond to this enquiry.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
