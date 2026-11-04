// One colour vocabulary for categories: lime (the accent) plus three muted tints (sage, dusk, stone).
// This is the only file that names the tints. Full class strings so Tailwind keeps them; pick a tone by name, never build a class.
// A tone never carries meaning alone: a text label always sits next to it.
export const tones = {
  lime: { text: 'text-accent', soft: 'bg-accent-soft', bar: 'bg-accent', border: 'border-accent', hover: 'group-hover:text-accent', pressed: 'aria-pressed:border-accent aria-pressed:bg-accent-soft' },
  sage: { text: 'text-sage', soft: 'bg-sage-soft', bar: 'bg-sage', border: 'border-sage', hover: 'group-hover:text-sage', pressed: 'aria-pressed:border-sage aria-pressed:bg-sage-soft' },
  dusk: { text: 'text-dusk', soft: 'bg-dusk-soft', bar: 'bg-dusk', border: 'border-dusk', hover: 'group-hover:text-dusk', pressed: 'aria-pressed:border-dusk aria-pressed:bg-dusk-soft' },
  stone: { text: 'text-stone', soft: 'bg-stone-soft', bar: 'bg-stone', border: 'border-stone', hover: 'group-hover:text-stone', pressed: 'aria-pressed:border-stone aria-pressed:bg-stone-soft' },
};

export const toneCycle = ['lime', 'sage', 'stone', 'dusk'];

/** Tone by position, so lists of peers (skill domains, issuers) share the palette evenly. */
export function toneAt(i) {
  return tones[toneCycle[i % toneCycle.length]];
}

/** Project categories keep the same tone everywhere: index rows, filters, case-study headers. */
export const categoryTone = {
  secops: 'lime',
  infrastructure: 'sage',
  homelab: 'dusk',
  intel: 'stone',
};

export function toneFor(category) {
  return tones[categoryTone[category] ?? 'lime'];
}
