import { Pause, Play } from 'lucide-react';
import useMotionPause from '../hooks/useMotionPause';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/** Pause/play for the continuous motion. Hidden under reduced motion, because nothing moves then. */
export default function MotionToggle({ compact = false }) {
  const reduced = usePrefersReducedMotion();
  const [paused, toggle] = useMotionPause();
  if (reduced) return null;
  const Icon = paused ? Play : Pause;
  return (
    <button type="button" className={compact ? 'btn btn--icon' : 'btn'} aria-pressed={paused} onClick={toggle}>
      <Icon size={17} aria-hidden="true" />
      {compact ? <span className="visually-hidden">Pause motion</span> : 'Pause motion'}
    </button>
  );
}
