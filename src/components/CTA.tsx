import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CTA({
  eyebrow = "LET'S MOVE YOUR PROJECT FORWARD",
  title,
  text,
  label = 'Start a conversation'
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  label?: string;
}) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <Link className="button button-light" href="/contact/">
          {label} <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
