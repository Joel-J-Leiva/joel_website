import { useId } from 'react';

/** A scope disclaimer: what the project is, and what it is not presented as. */
export default function NoteSection({ heading, text }) {
  const id = useId();
  return (
    <aside className="container mt-[var(--section-gap-s)]" aria-labelledby={id}>
      <div className="max-w-[52ch] border-l-2 border-accent pl-6">
        <h2 id={id} className="text-title">
          {heading}
        </h2>
        <p className="mt-3 max-w-[52ch] text-ink-2">{text}</p>
      </div>
    </aside>
  );
}
