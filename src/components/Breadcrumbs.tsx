import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.label} className="crumb">
          <ChevronRight size={12} />
          {item.href ? <Link href={item.href}>{item.label}</Link> : <b>{item.label}</b>}
        </span>
      ))}
    </nav>
  );
}
