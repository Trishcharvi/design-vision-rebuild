import { LIFECYCLE } from '@/data/services';

export default function Lifecycle() {
  return (
    <div className="lifecycle">
      <div className="lifecycle-rail" aria-hidden="true" />
      <ol className="lifecycle-list">
        {LIFECYCLE.map((phase) => (
          <li key={phase.step}>
            <span className="lifecycle-node" aria-hidden="true" />
            <span className="lifecycle-step">{phase.step}</span>
            <h3>{phase.title}</h3>
            <p>{phase.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
