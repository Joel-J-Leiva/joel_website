import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';
import useCountUp from '../../hooks/useCountUp';

const fmt = new Intl.NumberFormat('en-US');

/**
 * A stat tile: an Anton figure with a lime suffix, its label, and an optional tag pill and source line.
 * Counts up once when it scrolls into view. A reading already on screen at load
 * shows the real number and never animates.
 */
export default function Reading({ value, suffix = '', label, source, to, tag }) {
  const [ref, inView, onLoad] = useInView();
  // Tiles visible on load keep their real number; only tiles scrolled into view count up.
  const shown = useCountUp(value, { start: inView && !onLoad });
  return (
    <div ref={ref} className="stat tile">
      {tag ? <span className="pill">{tag}</span> : null}
      <p className="stat__num">
        <span className="visually-hidden">
          {fmt.format(value)}
          {suffix}
        </span>
        <span aria-hidden="true">
          {fmt.format(shown)}
          {suffix ? <sup>{suffix}</sup> : null}
        </span>
      </p>
      <p className="stat__label">{label}</p>
      {source ? (
        <p className="stat__source text-sm text-muted">
          {to ? (
            <Link to={to} viewTransition className="link">
              {source}
            </Link>
          ) : (
            source
          )}
        </p>
      ) : null}
    </div>
  );
}
