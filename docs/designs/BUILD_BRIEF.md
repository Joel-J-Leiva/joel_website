# Build brief for page agents: Acid Split (read fully before editing)

Repo: React 19 + Vite 8 + Tailwind 3.4.19 + react-router-dom 7 (data router).
Design doc (binding spec): `docs/designs/acid-split-redesign.md`. Approved hero (visual source of truth for Home values): `docs/designs/reference/hero-4b-split.html`.
Visual system: **Acid Split**. A near-black ground and off-white ink, with acid lime as the only saturated colour. Type is Anton (display, uppercase), Instrument Serif italic (secondary heads) and Archivo (body).

Do not run `npm install`. Do not commit, push or switch branches. Do not start or stop servers unless your task says so.

## Locked files (Phase 1; do NOT edit, report a needed change instead)

`index.html`, `tailwind.config.js`, `src/styles/tokens.css`, `src/styles/base.css`, `src/index.css`, `src/hooks/useMotionPause.js`, `src/components/MotionToggle.jsx`, `src/components/ProfileLinks.jsx`, `src/components/Rail.jsx`, `src/components/Layout.jsx`, `src/components/Nav.jsx`, `src/components/Footer.jsx`, `src/components/ProjectRow.jsx`, `src/components/ui/*` (Asterisk, PageHeader, Button, Chip, Reading, SectionHead, tones.js, status.js), `src/components/case/ReadingsSection.jsx`, `src/components/case/PipelineSection.jsx`, `src/data/profile.js`, `src/data/experience.js`, `public/favicon.svg`, `src/test/setup.js`.
Also untouched by everyone: `vite.config.js`, `eslint.config.js`, `package*.json`, `src/main.jsx`, `src/App.jsx`, `src/components/{Seo,CopyEmail,icons}.jsx`, `src/data/**` other than the files above, and the untracked legacy files (`src/App.css`, `src/assets/`, `src/components/{BackToProjects,Navbar,ScrollToTop,SocialIcons}.jsx`, `src/pages/{CyberRadio,DFIRTriage,HomeLab,NCyTEChallenge,NGOThreatIntel,PhysicalServer,PiHole,WazuhLab}.jsx`). Never import, edit or delete a legacy file.

## Phase 2 groups (each group edits ONLY its own files)

| Group | Files |
| --- | --- |
| A | `src/pages/Home.jsx`, `src/test/app.test.jsx` |
| B | `src/pages/Projects.jsx`, `src/pages/ProjectCaseStudy.jsx`, `src/components/case/{CaseSection,GallerySection,ItemList,LessonsSection,LinksSection,ListSection,NoteSection,PairSection,ProseSection,ReposSection,RichText,SectionRenderer}.jsx` |
| C | `src/pages/Experience.jsx`, `src/pages/Achievements.jsx` |
| D | `src/pages/About.jsx`, `src/pages/Contact.jsx`, `src/pages/Photography.jsx`, `src/pages/NotFound.jsx` |

## Building blocks

### Tailwind tokens (only these exist)
- Colours: `paper`, `paper-2`, `paper-3`, `ink`, `ink-2`, `muted`, `rule`, `rule-2`, `accent`, `accent-ink`, `accent-soft`, `ok`, `ok-soft`, `bad`, `bad-soft`. The tints `sage`, `stone`, `dusk` (and `-soft`) exist but may be named ONLY in `src/components/ui/tones.js`. Pages get category colour from `tones`, `toneFor()`, `toneAt()`.
- Fonts: `font-sans` (Archivo), `font-display` (Anton), `font-serif` (Instrument Serif), `font-mono` (Atkinson Hyperlegible Mono: measured values only).
- Sizes: `text-lead`, `text-title`, `text-section`, `text-display`, `text-display-s`, plus Tailwind `text-sm/lg/xl`.
- Radius: `rounded-card` (14px panels and tiles), `rounded-pill` (6px: thumbnails, alerts, skeletons, focus outlines), `rounded-round` (999px).
- Screens: `sm` 640, `md` 768, `rail` 900, `lg` 1024, `nav` 1100, `xl` 1280, `2xl` 1536. Durations `duration-short`, easing `ease-out`.

### CSS classes (`src/index.css`)
- Surfaces: `.container` (1320px cap, clamp gutter), `.panel`, `.panels` (children get paper-2), `.tile`.
- Type: `.lead`, `.measured` (mono, measured values only), `.reading` (Anton figure; a `<sup>` inside is lime), `.label` (small tracked uppercase), `.pill` (uppercase outlined pill), `.visually-hidden`.
- Status: `.status-dot` (ONLY beside "Open to work" and the availability line).
- Buttons: `.btn` (outlined pill; hover fills ink), `.btn--primary` (lime; one per screen), `.btn__ico` (dark disc inside a primary button), `.btn--icon` (44px icon circle), `.btn-round` + `.disc` (round play-disc link with a `<small>` second line).
- Chips and filters: `.chip`, `.chip--person` (lime), `.chip--instrument` (neutral), `.chip--ok`, `.filter` (use `aria-pressed`; neutral pressed state, a tone `pressed` class wins).
- Links: `.link`, `.row-link`.
- Forms: `.field` (10px radius; supports `aria-invalid`).
- Trail: `.trail`, `.trail-mark`, `.trail-mark--current`.
- Motion: `.enter`, `.proportion`.
- Home only: `.hero`, `.copy`, `.star-xl`, `.hello`, `.h1__a`, `.h1__b`, `.amp`, `.lede`, `.actions`, `.status-row`, `.plate`, `.photo`, `.place`, `.badge`, `.badge__ring`, `.badge__core`, `.bento`, `.about`, `.about__head`, `.skills`, `.avail`, `.stat`, `.stat__num`, `.stat__label`, `.stat__source`.
- Shell (already used by locked components): `.page`, `.brand`, `.nav__link`, `.nav__cta`, `.rail`, `.rail__mark`, `.rail__status`, `.social`.
- Portrait: put `data-slot="portrait"` on the wrapper of the owner's portrait (Home plate, About bio) to get the black-and-white filter. Every other image stays in full colour, with no filter.

### Components and hooks
- `ui/Asterisk` `{ variant: 'solid' | 'outline', className }`: the 12-point star, always `aria-hidden`.
- `ui/PageHeader` `{ title, lead }`: the Banner header (asterisk, `h1`, lead) for About, Achievements, Contact, Experience, Photography, Projects.
- `ui/Button` `{ to | href, external, variant: 'primary' | 'secondary', icon, className }`. `icon` is a React element; on primary it renders after the label inside `.btn__ico`.
- `ui/Reading` `{ value, suffix, label, source, to, tag }`: a stat tile (`stat tile`), with an Anton figure and a lime `sup` suffix. There is no `tone` prop.
- `ui/Chip` + `ui/status.js` `statusTone()`; `ui/SectionHead` `{ id, title, lead, link }`; `Seo`; `CopyEmail`; `ProjectRow`; `icons.jsx` (`LinkedinIcon`, `GithubIcon`).
- `ProfileLinks` `{ variant: 'icon' | 'text', omit: ['linkedin' | 'github' | 'resume'], className }`: LinkedIn, GitHub, Resume; new tab, `rel="noopener noreferrer"`, hidden "(opens in a new tab)".
- `MotionToggle` `{ compact }`, `Rail`: shell only; pages do not render them.
- Hooks: `useMotionPause`, `useInView`, `useCountUp`, `useCopyToClipboard`, `usePrefersReducedMotion`.
- Tone keys: `lime`, `sage`, `dusk`, `stone`. `categoryTone = { secops: 'lime', infrastructure: 'sage', homelab: 'dusk', intel: 'stone' }`. Each tone has `text`, `soft`, `bar`, `border`, `hover` and `pressed` class strings.
- Data (`src/data/profile.js`): `profile.hero.{display, serif, projectsNote, badge, monogram}`, `profile.heroLede` and `profile.aboutShort` (`{ before, strong, after }`), `profile.status`, `profile.focus[]`, `profile.education.short`, `profile.readings[]` (with `tag`). (`headline`, `heroSentence`, `whoami` and `record` were removed in Phase 3.)

## Hard rules

1. No colour literals (hex, `rgb()`, Tailwind palette names, arbitrary `[#...]`). Only token classes or `var(--color-*)`.
2. Never `transition-all`. Transition colours, opacity and transform only. Never animate width, height, top or left.
3. Uppercase appears ONLY in: `h1` (base CSS does it), `.label`, `.pill`, `.brand` and the badge ring text. No `uppercase` or `tracking-*` utilities elsewhere. Never put a `.label` directly above a heading as an eyebrow.
4. `h1` is Anton uppercase and `h2` is Instrument Serif italic, both from base CSS. Add NO font classes to `h2`. `h3` is Archivo 600, sentence case.
5. Mono (`font-mono`, `.measured`) ONLY for measured values: dates, counts, ports, IPs, versions, paths. Measured values use `text-ink-2`, never a tint.
6. Middle dots only in the badge string and the degree pill. Status dots only as `.status-dot` beside "Open to work" or the availability line. No arrows glued into link text. No emoji.
7. No card inside a card. No glows, gradients or blur. Shadows exist only on the Home portrait wrapper and `.badge` (tokens `--shadow-plate`, `--shadow-badge`).
8. Every interactive element is keyboard-reachable with a visible lime focus ring (the classes provide it). Every animation has a reduced-motion fallback.
9. Grid tracks use `minmax(0,1fr)`. Add `min-w-0` to grid children with long text.
10. Never invent, drop or reword a fact, link, image, PDF, form field or behaviour. Content stays exactly as it is in the current files (`git show HEAD:<path>` shows the originals). The only data changes are those in the design doc's "Data model changes" table, and they are already in `profile.js`.
11. Copy: no em dashes; typographic apostrophes (’). Keep proper nouns, figures, dates and links exactly.
12. Images below the fold: `loading="lazy"`, `decoding="async"`, explicit `width` and `height` (or an aspect-ratio box). Photographs stay in colour; only `data-slot="portrait"` is black and white.
13. G4: only `tones.js` names `sage`, `stone` or `dusk`.
14. No horizontal scroll at 375px.

## Definition of done

- `npm run build`, `npm run lint` and `npm test` pass.
- No new colour literals, and no tint class names outside `tones.js`.
- If you need a class or token that does not exist, STOP and report it to the Elephant. Do not write local CSS, inline styles for visuals, or arbitrary values to work around it.
- Report: the files you changed, every class you replaced (before and after), and anything unresolved.
