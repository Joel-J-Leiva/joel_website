import { useEffect, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from 0 to `target` once `start` is true.
 * Before start, and under reduced motion, it returns the final value, so the first
 * render always shows the real number. Once it starts, the first frame shows 0, not the final value.
 * State is only set from animation frames.
 */
export default function useCountUp(target, { start = false, duration = 900 } = {}) {
  const reduced = usePrefersReducedMotion();
  const animate = start && !reduced && typeof requestAnimationFrame !== 'undefined';
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!animate) return undefined;
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      setProgress(t);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, duration]);

  return animate ? Math.round(easeOut(progress) * target) : target;
}
