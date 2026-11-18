export const SITE = {
  name: 'Design Vision',
  tagline: 'Pipeline & Oil and Gas Engineering Consultancy',
  url: 'https://designvision-oilandgas.com',
  email: 'designvision-oilandgas@outlook.com',
  phoneDisplay: '+91 86689 14353',
  phoneHref: '+918668914353',
  addressLines: ['Flat B-404, Poorva Shrushti', 'Sinhgad Road, Pune - 411041', 'Maharashtra, India'],
  city: 'Pune',
  country: 'India'
} as const;

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };
