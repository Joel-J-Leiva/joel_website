/** @type {import('tailwindcss').Config} */
// Every value is a var() of a token in src/styles/tokens.css (Hallmark Console theme).
// Add colours there, never here, so CSS and utilities stay in one system.
const token = (name) => `var(--${name})`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      paper: { DEFAULT: token('color-paper'), 2: token('color-paper-2'), 3: token('color-paper-3') },
      ink: { DEFAULT: token('color-ink'), 2: token('color-ink-2') },
      muted: token('color-muted'),
      rule: { DEFAULT: token('color-rule'), 2: token('color-rule-2') },
      accent: { DEFAULT: token('color-accent'), ink: token('color-accent-ink'), soft: token('color-accent-soft') },
      cool: { DEFAULT: token('color-cool'), soft: token('color-cool-soft') },
      violet: { DEFAULT: token('color-violet'), soft: token('color-violet-soft') },
      sky: { DEFAULT: token('color-sky'), soft: token('color-sky-soft') },
      ok: { DEFAULT: token('color-ok'), soft: token('color-ok-soft') },
      bad: { DEFAULT: token('color-bad'), soft: token('color-bad-soft') },
    },
    fontFamily: {
      sans: token('font-body'),
      display: token('font-display'),
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
