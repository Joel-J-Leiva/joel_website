import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Copies text and exposes a short-lived status: 'idle' | 'copied' | 'failed'.
 * Falls back to a hidden textarea where the async Clipboard API is missing.
 */
export default function useCopyToClipboard(resetMs = 2500) {
  const [status, setStatus] = useState('idle');
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text) => {
      let ok;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          ok = true;
        } else {
          const area = document.createElement('textarea');
          area.value = text;
          area.setAttribute('readonly', '');
          area.style.position = 'absolute';
          area.style.left = '-9999px';
          document.body.appendChild(area);
          area.select();
          ok = document.execCommand('copy');
          document.body.removeChild(area);
        }
      } catch {
        ok = false;
      }
      setStatus(ok ? 'copied' : 'failed');
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus('idle'), resetMs);
      return ok;
    },
    [resetMs],
  );

  return [status, copy];
}
