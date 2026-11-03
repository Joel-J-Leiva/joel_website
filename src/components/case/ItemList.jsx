import RichText from './RichText';

/**
 * Items of {term?, text}. Used by the list and pair sections.
 * `ordered` numbers each item (numbers are measured values, so mono).
 */
export default function ItemList({ items = [], ordered = false, className = '' }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`space-y-4 ${className}`.trim()} role="list">
      {items.map((item, i) => (
        <li key={item.term ?? item.text} className="flex gap-4">
          {ordered ? (
            <span className="measured shrink-0 pt-0.5 text-muted" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
          ) : null}
          <p className="min-w-0 max-w-[52ch] text-ink-2">
            {item.term ? <span className="font-medium text-ink">{item.term}. </span> : null}
            <RichText text={item.text} />
          </p>
        </li>
      ))}
    </Tag>
  );
}
