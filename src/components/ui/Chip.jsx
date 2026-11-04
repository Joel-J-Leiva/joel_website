/** A pill-shaped chip that carries state only. tone: 'neutral' | 'person' (lime) | 'instrument' (neutral, for active status) | 'ok'. */
export default function Chip({ tone = 'neutral', className = '', children }) {
  const toneCls = tone === 'neutral' ? '' : `chip--${tone}`;
  return <span className={`chip ${toneCls} ${className}`.trim()}>{children}</span>;
}
