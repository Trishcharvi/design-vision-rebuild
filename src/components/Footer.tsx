import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { DISCIPLINES } from '@/data/services';
import { SECTORS } from '@/data/sectors';
import { SITE } from '@/data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col footer-col-brand">
            <Link href="/" className="brand footer-brand">
              <span className="brand-mark">DV</span>
              <span className="brand-copy">
                <b>DESIGN VISION</b>
                <small>ENGINEERING CONSULTANCY</small>
              </span>
            </Link>
            <p className="footer-intro">
              Independent pipeline and oil and gas engineering support for the systems that move and
              process energy.
            </p>
            <div className="footer-contact">
              <a href={`mailto:${SITE.email}`}>
                <Mail size={15} /> {SITE.email}
              </a>
              <a href={`tel:${SITE.phoneHref}`}>
                <Phone size={15} /> {SITE.phoneDisplay}
              </a>
              <span className="footer-address">
                <MapPin size={15} />
                <span>
                  {SITE.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Engineering services</h4>
            <nav className="footer-nav">
              {DISCIPLINES.slice(0, 7).map((d) => (
                <Link key={d.slug} href={`/services/${d.slug}/`}>
                  {d.navLabel}
                </Link>
              ))}
              <Link className="footer-more" href="/services/">
                All services <ArrowUpRight size={13} />
              </Link>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Industries</h4>
            <nav className="footer-nav">
              {SECTORS.map((s) => (
                <Link key={s.slug} href={`/industries/${s.slug}/`}>
                  {s.navLabel}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <nav className="footer-nav">
              <Link href="/about/">About Design Vision</Link>
              <Link href="/projects/">Project experience</Link>
              <Link href="/standards/">Codes &amp; standards</Link>
              <Link href="/quality-hse/">Quality &amp; HSE</Link>
              <Link href="/careers/">Careers</Link>
              <Link href="/contact/">Contact</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Design Vision. All rights reserved.</span>
          <Link href="/privacy/">Privacy notice</Link>
          <span className="footer-sign">
            Engineering with purpose <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </footer>
  );
}
