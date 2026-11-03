import { useEffect, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from 0 to `target` once `start` is true.
 * Before start, and under reduced motion, it returns the final value, so the first
 * render always shows the real number. State is only set from animation frames.
 */
export default function useCountUp(target, { start = false, duration = 900 } = {}) {
  const reduced = usePrefersReducedMotion();
  const animate = start && !reduced && typeof requestAnimationFrame !== 'undefined';
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!animate) return undefined;
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      setValue(Math.round(easeOut(t) * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, target, duration]);

  return animate ? value : target;
}
