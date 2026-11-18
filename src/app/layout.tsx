import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/data/site';
import { DISCIPLINES } from '@/data/services';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: { icon: '/favicon.png', shortcut: '/favicon.png' },
  verification: {
    google: 'Oj22Mbiai8vFv3E-t9oElcgWQWwWfNJNjexFf0KPg4g'
  },
  title: {
    default: 'Design Vision | Pipeline & Oil and Gas Engineering Consultancy',
    template: '%s | Design Vision'
  },
  description:
    'Independent pipeline and oil and gas engineering consultancy supporting operators, EPC contractors and engineering teams across pipelines, facilities, subsea systems and asset integrity.',
  keywords: [
    'pipeline engineering consultancy',
    'oil and gas engineering services',
    'pipeline hydraulic analysis',
    'pipeline integrity management',
    'subsea pipeline design',
    'pipe stress analysis',
    'ASME B31.4 B31.8 design',
    'DNV subsea pipeline',
    'engineering consultancy Pune India'
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Design Vision | Pipeline & Oil and Gas Engineering Consultancy',
    description: 'Engineering clarity for critical energy infrastructure.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_IN',
    type: 'website'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.name,
  description:
    'Independent pipeline and oil and gas engineering consultancy providing pipeline, hydraulic, integrity, process, piping, subsea, civil, electrical, instrumentation, SCADA and technical safety engineering services.',
  url: SITE.url,
  email: SITE.email,
  telephone: `+${SITE.phoneHref.replace('+', '')}`,
  areaServed: ['India', 'Middle East', 'Africa', 'Worldwide'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Flat B-404, Poorva Shrushti, Sinhgad Road',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411041',
    addressCountry: 'IN'
  },
  knowsAbout: DISCIPLINES.map((d) => d.title),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Engineering services',
    itemListElement: DISCIPLINES.map((d) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: d.title,
        description: d.short,
        url: `${SITE.url}/services/${d.slug}/`
      }
    }))
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
