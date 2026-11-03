import CaseSection from './CaseSection';
import RichText from './RichText';

export default function ProseSection({ heading, paragraphs = [] }) {
  return (
    <CaseSection heading={heading}>
      <div className="max-w-[52ch] space-y-5 text-ink-2">
        {paragraphs.map((p) => (
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}
      </div>
    </CaseSection>
  );
}
