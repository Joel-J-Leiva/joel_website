import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';
import useCountUp from '../../hooks/useCountUp';
import { tones } from './tones';

const fmt = new Intl.NumberFormat('en-US');

/**
 * A measured value set large. Counts up once when it scrolls into view.
 * The first render is the final value, so a reading already on screen shows the real number.
 */
export default function Reading({ value, suffix = '', label, source, to, tone }) {
  const t = tone ? tones[tone] : null;
  const toneText = t ? t.text : '';
  const [ref, inView] = useInView();
  const shown = useCountUp(value, { start: inView });
  return (
    <div ref={ref} className="relative flex h-full flex-col gap-3 p-6 sm:p-8">
      {t ? <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${t.bar}`} /> : null}
      <p className={`reading ${toneText}`}>
        <span className="visually-hidden">
          {fmt.format(value)}
          {suffix}
        </span>
        <span aria-hidden="true">
          {fmt
            .format(shown)
            .split(',')
            .map((part, i) => (
              <span key={i}>
                {i > 0 ? <span className="-mx-[0.22em]">,</span> : null}
                {part}
              </span>
            ))}
          {suffix}
        </span>
      </p>
      <p className="text-ink-2">{label}</p>
      {source ? (
        to ? (
          <Link to={to} viewTransition className={`link mt-auto self-start text-sm ${toneText}`}>
            {source}
          </Link>
        ) : (
          <p className={`mt-auto text-sm ${toneText || 'text-cool'}`}>{source}</p>
        )
      ) : null}
    </div>
  );
}
