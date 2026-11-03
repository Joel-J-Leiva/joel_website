import CaseSection from './CaseSection';
import RichText from './RichText';

/** Numbered takeaways (numbers are counts, so mono). */
export default function LessonsSection({ heading, items = [] }) {
  return (
    <CaseSection heading={heading}>
      <ol className="max-w-[72ch] space-y-8" role="list">
        {items.map((item, i) => (
          <li key={item.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
            <span className="measured pt-1 text-accent" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 max-w-[52ch] text-muted">
                <RichText text={item.text} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </CaseSection>
  );
}
