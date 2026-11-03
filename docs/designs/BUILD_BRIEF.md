# Build brief for page agents (read fully before editing)

Repo: React 19 + Vite 8 + Tailwind 3.4.19 + react-router-dom 7 (data router). Design doc: `docs/designs/portfolio-refactor.md`.
Visual system: Hallmark **Console** theme. The Home page (`src/pages/Home.jsx`) is the reference implementation: read it first and match its patterns.

## Files you must NOT edit (shared foundation; report needed changes instead)
`src/styles/*`, `src/index.css`, `tailwind.config.js`, `vite.config.js`, `eslint.config.js`, `package.json`, `package-lock.json`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/hooks/*`, `src/components/ui/*`, `src/components/{Nav,Footer,Layout,Seo,CopyEmail,ProjectRow,icons}.jsx`, `src/data/{site,profile,nav,experience}.js`, `src/data/projects/index.js`, `src/pages/Home.jsx`, `src/pages/NotFound.jsx`. Do not run `npm install`. Do not commit. Do not stop or start the dev server (it runs at http://127.0.0.1:5173).

## Available building blocks
- Tailwind colours (only these exist): `paper`, `paper-2`, `paper-3`, `ink`, `ink-2`, `muted`, `rule`, `rule-2`, `accent`, `accent-ink`, `accent-soft`, `cool`, `cool-soft`, `ok`, `ok-soft`, `bad`, `bad-soft`. Fonts: `font-sans` (Host Grotesk), `font-mono` (Atkinson Hyperlegible Mono). Sizes: `text-lead`, `text-title`, `text-section`, `text-display`, `text-display-s`, plus Tailwind's `text-sm/lg/xl`. Radius: `rounded-card` (10px), `rounded-pill` (6px). Durations `duration-short`, easing `ease-out`.
- CSS classes in `src/index.css`: `.container` (capped, centred, gutters), `.panel` (hairline surface), `.panels` (grid of panels joined by 1px seams; children get paper-2), `.measured` (mono, for measured values only), `.reading` (large mono value), `.btn`, `.btn--primary`, `.chip`, `.chip--person|instrument|ok`, `.filter` (toggle button; use `aria-pressed`), `.link`, `.row-link`, `.field` (inputs; supports `aria-invalid`), `.trail`/`.trail-mark`/`.trail-mark--current` (audit-trail spine), `.enter` (fade/translate-in for items entering), `.proportion` (bar), `.lead`, `.visually-hidden`.
- Base CSS already styles `h1` (display size), `h2` (section size), `h3` (title size), all weight 500, sentence case. Don't restyle headings except size when you must.
- Components: `ui/Button` (`to` | `href` + `external` | button; `variant="primary"` at most once per screen), `ui/Chip` + `ui/status.js` `statusTone()`, `ui/SectionHead` ({id,title,lead,link}), `ui/Reading` (count-up value), `Seo` ({title, description, noindex}) – every page renders one `<Seo>`, `CopyEmail`, `ProjectRow`, `icons.jsx` (LinkedinIcon, GithubIcon). Hooks: `useInView`, `useCountUp`, `useCopyToClipboard`, `usePrefersReducedMotion`. Icons: `lucide-react` (always `aria-hidden="true"`).
- Data: `profile`, `experience` + `formatMonth`, `projects` + `categories`, `normalizeCategory`, `getProject`, `getNeighbours`, `featuredProjects`.
- Router: use `Link`/`NavLink` from `react-router-dom` with the `viewTransition` prop on internal links.

## Hard rules (Hallmark Floor; the linter fails the build on these)
1. No colour literals (no hex, rgb, `slate-*`, `cyan-*`, arbitrary `[#...]`). Only the token classes above or `var(--color-*)`.
2. Never `transition-all`; only `transition-colors`, `transition-opacity`, `transition-transform`. Never animate width/height/top/left.
3. No eyebrows: no small uppercase/tracked label above a heading. No `uppercase`, no `tracking-*` classes anywhere. Labels are sentence case, body face, a step smaller, `text-muted`.
4. Mono (`font-mono`/`.measured`/`.reading`) ONLY for measured values: dates, counts, ports, IPs, versions, command lines, file paths, subnet. Never on labels, headings, buttons, chips or tags.
5. No middle-dot (`•`, `·`) joined meta strings; no decorative status dots; no arrows glued into link text (`View &gt;`). No emoji.
6. No card inside a card (no `.panel` inside `.panel`; a `.panels` group is one surface). No glows, shadows, gradients, backdrop blur.
7. Every interactive element keyboard-reachable with visible focus (the provided classes already have `:focus-visible`). Every animation has a reduced-motion fallback (`motion-reduce:` or the CSS class's media query).
8. Grids holding images: `grid-cols-[minmax(0,1fr)]`-style tracks / `minmax(0,1fr)`; add `min-w-0` on grid children with long text.
9. Never invent a metric, quote, logo or fact. Every fact comes from the old page files (read them from `git show HEAD:<path>` if already deleted).
10. Copy: tighten wordy/buzzword lines using only facts already on the old page; no em dashes (—) in copy, use commas/colons/periods; typographic apostrophes (’). Keep proper nouns, figures, dates, links exactly.
11. ~80 words per visible screen in intros; page h1 ≤ 7 words where possible, with one lead sentence under it.
12. Images: `loading="lazy"` + `decoding="async"` + explicit `width`/`height` (or an aspect-ratio box) below the fold. Project photos sit in a `data-slot` box (duotone treatment comes from base.css) with a caption.

## Page header pattern (non-home pages: "Banner" posture)
```jsx
<section className="container pt-16 pb-12 sm:pt-24">
  <h1>Short head</h1>
  <p className="lead mt-6 max-w-[56ch] text-ink-2">One sentence.</p>
</section>
```
Sections below use `className="container mt-[var(--section-gap)]"` and `SectionHead`.

## Done means
`npx eslint <your files>` clean; `npx vite build` passes; your route renders with no console errors. Report: files created/modified/deleted, every copy line you reworded (before → after), anything you needed in a shared file.
