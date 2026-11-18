'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { DISCIPLINES } from '@/data/services';
import { SECTORS } from '@/data/sectors';
import { SITE } from '@/data/site';

type Child = { label: string; href: string };
type Item = { label: string; href: string; children?: Child[]; wide?: boolean };

const NAV: Item[] = [
  { label: 'About', href: '/about/' },
  {
    label: 'Services',
    href: '/services/',
    wide: true,
    children: [
      { label: 'All engineering services', href: '/services/' },
      ...DISCIPLINES.map((d) => ({ label: d.navLabel, href: `/services/${d.slug}/` }))
    ]
  },
  {
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'All industries', href: '/industries/' },
      ...SECTORS.map((s) => ({ label: s.navLabel, href: `/industries/${s.slug}/` }))
    ]
  },
  { label: 'Projects', href: '/projects/' },
  {
    label: 'Company',
    href: '/quality-hse/',
    children: [
      { label: 'Codes & standards', href: '/standards/' },
      { label: 'Quality & HSE', href: '/quality-hse/' },
      { label: 'Careers', href: '/careers/' }
    ]
  }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href.replace(/\/$/, '') + '/');

  return (
    <header className="site-header" ref={headerRef}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-tag">PIPELINE &amp; OIL AND GAS ENGINEERING CONSULTANCY</span>
          <div className="topbar-links">
            <a href={`mailto:${SITE.email}`}>
              <Mail size={13} /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneHref}`}>
              <Phone size={13} /> {SITE.phoneDisplay}
            </a>
            <span>
              <MapPin size={13} /> {SITE.city}, {SITE.country}
            </span>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Design Vision home">
            <span className="brand-mark">DV</span>
            <span className="brand-copy">
              <b>DESIGN VISION</b>
              <small>ENGINEERING CONSULTANCY</small>
            </span>
          </Link>

          <nav className={mobileOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className={`nav-item has-children${openMenu === item.label ? ' open' : ''}${
                    mobileSection === item.label ? ' mobile-open' : ''
                  }`}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={`nav-trigger${isActive(item.href) ? ' active' : ''}`}
                    aria-expanded={openMenu === item.label || mobileSection === item.label}
                    onClick={() => {
                      setMobileSection(mobileSection === item.label ? null : item.label);
                      setOpenMenu(openMenu === item.label ? null : item.label);
                    }}
                    onFocus={() => setOpenMenu(item.label)}
                  >
                    {item.label} <ChevronDown size={14} />
                  </button>
                  <div className={`nav-panel${item.wide ? ' nav-panel-wide' : ''}`} role="menu">
                    <div className="nav-panel-inner">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} role="menuitem">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item nav-plain${isActive(item.href) ? ' active' : ''}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link className="nav-mobile-cta" href="/contact/">
              Discuss a project <ArrowUpRight size={16} />
            </Link>
          </nav>

          <Link className="nav-cta" href="/contact/">
            Discuss a project <ArrowUpRight size={16} />
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
