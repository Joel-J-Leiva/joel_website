/** @type {import('tailwindcss').Config} */
// Every value is a var() of a token in src/styles/tokens.css (Acid Split system, docs/designs/acid-split-redesign.md).
// Add colours there, never here, so CSS and utilities stay in one system.
const token = (name) => `var(--${name})`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // The Tailwind container plugin would emit max-width caps per screen after base.css; base.css owns .container.
  corePlugins: { container: false },
  theme: {
    // Full ordered list (not under extend), so rail/nav sit between the defaults instead of after 2xl.
    screens: { sm: '640px', md: '768px', rail: '900px', lg: '1024px', nav: '1100px', xl: '1280px', '2xl': '1536px' },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      paper: { DEFAULT: token('color-paper'), 2: token('color-paper-2'), 3: token('color-paper-3') },
      ink: { DEFAULT: token('color-ink'), 2: token('color-ink-2') },
      muted: token('color-muted'),
      rule: { DEFAULT: token('color-rule'), 2: token('color-rule-2') },
      accent: { DEFAULT: token('color-accent'), ink: token('color-accent-ink'), soft: token('color-accent-soft') },
      sage: { DEFAULT: token('color-sage'), soft: token('color-sage-soft') },
      dusk: { DEFAULT: token('color-dusk'), soft: token('color-dusk-soft') },
      stone: { DEFAULT: token('color-stone'), soft: token('color-stone-soft') },
      ok: { DEFAULT: token('color-ok'), soft: token('color-ok-soft') },
      bad: { DEFAULT: token('color-bad'), soft: token('color-bad-soft') },
    },
    fontFamily: {
      sans: token('font-body'),
      display: token('font-display'),
      serif: token('font-serif'),
      mono: token('font-outlier'),
    },
    extend: {
      fontSize: {
        lead: token('text-lead'),
        title: token('text-title'),
        section: token('text-section'),
        display: token('text-display'),
        'display-s': token('text-display-s'),
      },
      borderRadius: {
        card: token('radius-card'),
        pill: token('radius-pill'),
        round: token('radius-round'),
      },
      maxWidth: {
        container: token('container'),
      },
      transitionTimingFunction: {
        out: token('ease-out'),
      },
      transitionDuration: {
        micro: '120ms',
        short: '220ms',
        long: '420ms',
      },
    },
  },
  plugins: [],
};
