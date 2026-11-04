import { useEffect, useRef, useState } from 'react';

/**
 * Reports once when the element first enters the viewport. The third value is true when it
 * was already on screen at mount, so callers can skip entrance effects the reader would see jump.
 * Without IntersectionObserver it reports true at once, so content is never stuck hidden.
 */
export default function useInView({ rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return undefined;
    let first = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (first) setOnLoad(true);
          setInView(true);
          observer.disconnect();
        }
        first = false;
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return [ref, inView, onLoad];
}
