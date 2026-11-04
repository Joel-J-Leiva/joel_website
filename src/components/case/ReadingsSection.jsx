import CaseSection from './CaseSection';
import RichText from './RichText';

const fmt = new Intl.NumberFormat('en-US');
const toneText = { bad: 'text-bad', ok: 'text-ok' };
const toneFill = { bad: 'bg-bad', ok: 'bg-ok' };

/**
 * Large measured values. Items marked `part` are drawn as a proportion bar of their sum
 * (for example, failing and passing checks out of the total assessed).
 */
export default function ReadingsSection({ heading, text, items = [], paragraphs = [] }) {
  const parts = items.filter((i) => i.part);
  const total = parts.reduce((sum, p) => sum + p.value, 0);
  const label = parts.map((p) => `${fmt.format(p.value)} ${p.label.toLowerCase()}`).join(', ');

  return (
    <CaseSection heading={heading} text={text}>
      <div className="panel p-6 sm:p-8">
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,9rem),1fr))] gap-6">
          {items.map((item) => (
            <div key={item.label} className="min-w-0">
              <dt className="visually-hidden">{item.label}</dt>
              <dd className={`reading ${toneText[item.tone] ?? ''}`}>{fmt.format(item.value)}</dd>
              <dd className="mt-2 text-sm text-muted" aria-hidden="true">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
        {total > 0 ? (
          <>
            <div className="proportion mt-8" role="img" aria-label={`${label}, of ${fmt.format(total)}`}>
              {parts.map((p, i) => (
                <span
                  key={p.label}
                  className={toneFill[p.tone] ?? 'bg-muted'}
                  style={{ width: `${(p.value / total) * 100}%`, animationDelay: `${i * 120}ms` }}
                />
              ))}
            </div>
            <p className="measured mt-4 text-ink-2">
              {Math.round((parts[0].value / total) * 100)}% {parts[0].label.toLowerCase()}
            </p>
          </>
        ) : null}
      </div>
      {paragraphs.length ? (
        <div className="mt-8 max-w-[52ch] space-y-5 text-ink-2">
          {paragraphs.map((p) => (
            <p key={p}>
              <RichText text={p} />
            </p>
          ))}
        </div>
      ) : null}
    </CaseSection>
  );
}
