import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { DISCIPLINES } from '@/data/services';

export default function ServiceCards({ limit }: { limit?: number }) {
  const items = limit ? DISCIPLINES.slice(0, limit) : DISCIPLINES;
  return (
    <div className="service-grid">
      {items.map(({ icon: Icon, title, short, slug }, i) => (
        <article className="service-card" key={slug}>
          <div className="service-card-top">
            <span className="service-icon">
              <Icon size={22} />
            </span>
            <span className="card-number">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3>{title}</h3>
          <p>{short}</p>
          <Link href={`/services/${slug}/`} aria-label={`Explore ${title}`}>
            Explore capability <ArrowUpRight size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}
