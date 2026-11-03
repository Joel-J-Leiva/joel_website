import CaseSection from './CaseSection';
import ItemList from './ItemList';

/** Two lists side by side (for example, what was designed and what I implemented). */
export default function PairSection({ heading, text, left, right }) {
  const sides = [left, right].filter(Boolean);
  return (
    <CaseSection heading={heading} text={text} label={sides.map((s) => s.heading).join(' and ')}>
      <div className="panels md:grid-cols-2">
        {sides.map((side) => (
          <div key={side.heading} className="p-6 sm:p-8">
            <h3>{side.heading}</h3>
            <ItemList items={side.items} ordered={side.ordered} className="mt-6" />
          </div>
        ))}
      </div>
    </CaseSection>
  );
}
