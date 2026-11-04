/**
 * Plain copy where `backticked` spans are measured values (ports, paths, IPs) set in mono.
 * Content stays plain strings in the data modules; no HTML is ever injected.
 */
export default function RichText({ text }) {
  const parts = String(text).split('`');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code key={i} className="measured text-ink-2">
        {part}
      </code>
    ) : (
      part
    ),
  );
}
