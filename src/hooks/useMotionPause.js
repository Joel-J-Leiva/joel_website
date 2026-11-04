import { useSyncExternalStore } from 'react';

// Persisted pause for the continuous motion (asterisk, badge ring). WCAG 2.2.2.
// Stored per viewer in localStorage and mirrored as <html data-motion="paused"> for the CSS.
const KEY = 'motion-paused';
let memory = false;
const listeners = new Set();

function read() {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return memory;
  }
}

function apply(paused) {
  if (typeof document === 'undefined') return;
  if (paused) document.documentElement.dataset.motion = 'paused';
  else delete document.documentElement.dataset.motion;
}

function setPaused(next) {
  try {
    if (next) localStorage.setItem(KEY, '1');
    else localStorage.removeItem(KEY);
  } catch {
    // Storage blocked: keep the state in memory for this visit.
  }
  memory = next;
  apply(next);
  listeners.forEach((l) => l());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

if (typeof document !== 'undefined') apply(read());

/** [paused, toggle]. Default is not paused. */
export default function useMotionPause() {
  const paused = useSyncExternalStore(subscribe, read, () => false);
  return [paused, () => setPaused(!read())];
}
