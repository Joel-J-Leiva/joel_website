/** A chip carries state only. tone: 'neutral' | 'person' (amber) | 'instrument' (cool) | 'ok'. */
export default function Chip({ tone = 'neutral', className = '', children }) {
  const toneCls = tone === 'neutral' ? '' : `chip--${tone}`;
  return <span className={`chip ${toneCls} ${className}`.trim()}>{children}</span>;
}
