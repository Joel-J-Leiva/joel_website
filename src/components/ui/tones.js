// One colour vocabulary for the site: blue (cyan, the primary), green, violet and sky.
// Full class strings so Tailwind keeps them; pick a tone by name, never build a class.
export const tones = {
  blue: { text: 'text-accent', soft: 'bg-accent-soft', bar: 'bg-accent', border: 'border-accent', hover: 'group-hover:text-accent', pressed: 'aria-pressed:border-accent aria-pressed:bg-accent-soft' },
  green: { text: 'text-cool', soft: 'bg-cool-soft', bar: 'bg-cool', border: 'border-cool', hover: 'group-hover:text-cool', pressed: 'aria-pressed:border-cool aria-pressed:bg-cool-soft' },
  violet: { text: 'text-violet', soft: 'bg-violet-soft', bar: 'bg-violet', border: 'border-violet', hover: 'group-hover:text-violet', pressed: 'aria-pressed:border-violet aria-pressed:bg-violet-soft' },
  sky: { text: 'text-sky', soft: 'bg-sky-soft', bar: 'bg-sky', border: 'border-sky', hover: 'group-hover:text-sky', pressed: 'aria-pressed:border-sky aria-pressed:bg-sky-soft' },
};

export const toneCycle = ['blue', 'green', 'violet', 'sky'];

/** Tone by position, so lists of peers (skill domains, issuers) share the palette evenly. */
export function toneAt(i) {
  return tones[toneCycle[i % toneCycle.length]];
}

/** Project categories keep the same colour everywhere: index rows, filters, case-study headers. */
export const categoryTone = {
  secops: 'blue',
  infrastructure: 'green',
  homelab: 'violet',
  intel: 'sky',
};

export function toneFor(category) {
  return tones[categoryTone[category] ?? 'blue'];
}
