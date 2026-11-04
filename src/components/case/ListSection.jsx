import CaseSection from './CaseSection';
import RichText from './RichText';

/** A list of {term?, text} items, each in its own cell of one joined surface. */
export default function ListSection({ heading, text, items = [] }) {
  return (
    <CaseSection heading={heading} text={text}>
      <ul className="panels md:grid-cols-2" role="list">
        {items.map((item) => (
          <li key={item.term ?? item.text} className="p-6 sm:p-8">
            {item.term ? <h3 className="text-lg text-ink">{item.term}</h3> : null}
            <p className={`${item.term ? 'mt-2' : ''} max-w-[52ch] text-muted`}>
              <RichText text={item.text} />
            </p>
          </li>
        ))}
      </ul>
    </CaseSection>
  );
}
