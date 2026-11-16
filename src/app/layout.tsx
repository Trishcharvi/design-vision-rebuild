import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://designvision-oilandgas.com'),
  title: { default: 'Design Vision | Oil & Gas Engineering Consultancy', template: '%s | Design Vision' },
  description: 'Independent engineering consultancy supporting oil and gas operators, EPC contractors and engineering teams across pipelines, facilities, subsea systems and asset integrity.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Design Vision | Oil & Gas Engineering Consultancy', description: 'Engineering clarity for critical energy infrastructure.', url: 'https://designvision-oilandgas.com', siteName: 'Design Vision', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
