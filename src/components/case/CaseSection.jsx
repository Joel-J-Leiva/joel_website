import { useId } from 'react';
import RichText from './RichText';

/** Shared shell for every case-study section: container spacing, an optional h2 and lead line. */
export default function CaseSection({ heading, text, label, children }) {
  const id = useId();
  return (
    <section
      className="container mt-[var(--section-gap-s)]"
      aria-labelledby={heading ? id : undefined}
      aria-label={heading ? undefined : label}
    >
      {heading || text ? (
        <div className="mb-8 max-w-[52ch]">
          {heading ? <h2 id={id}>{heading}</h2> : null}
          {text ? (
            <p className={`${heading ? 'mt-4' : ''} max-w-[52ch] text-ink-2`}>
              <RichText text={text} />
            </p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
