# Portfolio Refactor: Data-Driven Pages on the Console System

| Field | Value |
| --- | --- |
| Author | Joel Leiva (drafted with Claude Code) |
| Date | 2026-11-02 |
| Status | Draft, condensed EGM run (owner chose no per-section gates) |
| Components | `src/` (all), `index.html`, `tailwind.config.js`, `public/` (SEO files, image thumbnails) |

## The Problem

The site is a React 19 + Vite 8 + Tailwind 3.4.19 single-page app with 15 routes. It has three problems.

1. **Content is welded to markup.** Every page holds its copy inside JSX. The 8 project pages are separate 190 to 330 line files that repeat the same blocks (header, two-column "what I did / what it shows", tech chips, lessons) with three different styling dialects (`slate-*` literals, `dark-*`/`cyber-*` tokens, raw hex). Changing one card style means editing 8 files. The email-copy logic is duplicated in `Footer.jsx` and `Contact.jsx`.
2. **It looks generated.** Hallmark's linter recorded 304 Floor failures on the current site: monospace on every label, uppercase tracked labels (78), colour literals (76), `transition-all` (45), five competing neon accents, glows, and fake status chrome ("SEC_OPS // ACTIVE" pulsing dots) on every page. Recruiters read it as a template.
3. **It is static and has defects.** Nothing responds to the visitor beyond hover colour. Defects: `PiHole.jsx` links to `/projects/home-lab-network` (no such route); there is no 404 route; `index.html` sets `className` (invalid on `<html>`); every route shares one `<title>`; the photography page loads 41 full-size JPEGs (104 MB on disk) as grid thumbnails; deep links 404 on Vercel without an SPA rewrite; `App.css` and `src/assets/hero.png` are unused.

## Overview

Move all content into typed data modules, render the 8 project case studies from one template at `projects/:slug`, and rebuild the visual layer on Hallmark's **Console** theme (graphite ground, Host Grotesk, Atkinson Hyperlegible Mono only for measured values, amber = a person, cool blue = an instrument). Add motion that responds to the visitor without decoration: values count up when they enter view, the project index filters live with an animated reflow, route changes use the View Transitions API, and the hero carries one terminal touch: a typed `whoami` line under the portrait.

## Goals

- G1. Every fact on the current site survives (names, dates, numbers, links, PDFs, form fields and the mailto handler). Verified by Hallmark's `--kept` check against `.hallmark/before.json` (29 links, 4 fields, 10 handlers).
- G2. Content lives in `src/data/`; pages are layout only. Adding a project means adding one object.
- G3. All URLs keep working, including the 8 `/projects/<slug>` paths.
- G4. Hallmark `sloplint --render`: 0 Floor FAIL; every Reflex fixed or waived with a reason.
- G5. Lighthouse (mobile, production build): Performance >= 90, Accessibility >= 95, SEO >= 95.
- G6. Lint, build and a new Vitest suite pass; `npm audit` reports no high or critical issues.

## Non-Goals

- No backend. The contact form stays a `mailto:` composer.
- No CMS, no MDX, no TypeScript migration (the repo is JSX; a TS migration is a separate decision).
- No new facts, metrics, testimonials or logos. Copy is tightened from facts already on the site; every changed line is listed in the handoff.
- No change to the Tailwind major version (3.4.19 is pinned on purpose, see commit f905e03).

## Technical Plan

### Layers

```
src/data/*.js          plain objects: profile, experience, projects, certifications, skills, photos
      │
src/components/ui/*    primitives: Button, Chip, Panel, Reading, SectionHead, Prose
src/components/*       chrome: Nav, Footer, Layout, ScrollToTop, CopyEmail
src/hooks/*            useCopyToClipboard, useInView, useCountUp, usePrefersReducedMotion
      │
src/pages/*            Home, Projects, ProjectCaseStudy, Experience, Certifications,
                       About, Photography, Contact, NotFound  (layout only, read data)
      │
src/App.jsx            routes, lazy-loaded pages, `projects/:slug` → ProjectCaseStudy
```

### Styling

- `src/styles/tokens.css` (Hallmark scaffold, Console tokens) and `src/styles/base.css` are imported at the top of `src/index.css`, above the `@tailwind` directives.
- `tailwind.config.js` replaces the 60-entry legacy colour map with the Console roles, each a `var()` of its token: `paper`, `paper-2`, `paper-3`, `ink`, `ink-2`, `muted`, `rule`, `rule-2`, `accent`, `accent-ink`, `accent-soft`, `cool`, `cool-soft`, `ok`, `ok-soft`, `bad`, `bad-soft`. Fonts: `font-sans` = Host Grotesk, `font-mono` = Atkinson Hyperlegible Mono. Radius: `rounded-card` (10px), `rounded-pill` (6px). No raw hex or Tailwind palette class (`slate-*`, `cyan-*`) remains in `src/`.
- Rules from the Floor: no `transition-all`; only `transform`/`opacity`/colour transitions; every interactive element has `:focus-visible`; every animation has a reduced-motion fallback; mono only for measured values (ports, IPs, counts, dates, versions, command lines).

### Data model (shapes, not code)

- `profile`: name, shortName, role, org, location, email, links {linkedin, github, resume, coverLetter}, summary, bio[] (paragraphs), readings[] {value, unit?, label, source}.
- `experience[]`: id, role, org, unit, location, start, end|null, scope, summary, highlights[], tools[].
- `projects[]`: slug, title, category (`secops` | `infrastructure` | `homelab` | `intel`), status (`Completed` | `Active lab` | `Active project`), summary, tags[], featured (bool), cover? {src, alt}, and `sections[]`, each a tagged block: `prose` {heading, paragraphs[]}, `list` {heading, items[{term?, text}]}, `pair` {left: list, right: list}, `readings` {heading, items[{value, label, tone}]}, `pipeline` {heading, steps[{name, text}]}, `gallery` {heading, images[{src, alt, caption}]}, `repos` {heading, items[{name, text, tags[], href}]}, `links` {items[{label, href}]}, `note` {heading, text}, `lessons` {heading, items[{title, text}]}, plus `stack[]` and `skills[]`.
- `certifications`: earned[], inProgress[], academic[] (each: title, issuer|institution, status|date, description).
- `skills[]`: domain, items[].
- `photos[]`: id, src, thumb, alt.

`ProjectCaseStudy` maps each section `type` to one renderer. Unknown slug → `NotFound`.

### Pages

| Route | Composition |
| --- | --- |
| `/` | Stage hero (name, one sentence, Resume + Email actions; portrait in duotone with the typed `whoami` caption); Readings row (20,000+, 60+, 395, May 2027) counting up on view; Selected work as an index of 4 featured rows; Experience as an audit trail (dates in cool, role in amber); one case opened: the Wazuh SCA baseline as a 395 / 258 / 137 reading with a proportion bar; Contact close (email with copy, LinkedIn, GitHub). |
| `/projects` | Index-first: short head, filter chips (All, SecOps, Infrastructure, Home lab and DFIR, Threat intel), rows that reflow with a FLIP-style opacity/transform transition; filter state in `?filter=` so it is linkable. |
| `/projects/:slug` | Case study from data; previous/next project links; back link. |
| `/experience` | Audit trail of the 3 roles with highlights and tools; AI knowledge-platform note. |
| `/achievements` | Earned, in-progress and academic as three tables (Certifications). |
| `/about` | Bio, education, philosophy, documents (resume, cover letter), skills by domain. |
| `/photography` | Masonry-free square grid of WebP thumbnails (lazy, sized), lightbox with arrow-key navigation, focus trap, Escape to close, full image on open. |
| `/contact` | Email/LinkedIn/GitHub panel + the existing form (same 4 field names, same mailto handler). |
| `*` | NotFound with links home and to projects. |

### Motion ("dynamic" without decoration)

- Count-up readings: `useInView` (IntersectionObserver) + `useCountUp` (requestAnimationFrame, 900ms ease-out). Reduced motion: final value at once. Text is the final value in the DOM before JS runs (no-JS and crawlers see real numbers).
- Typed `whoami`: CSS `steps()` width-free animation using `clip-path` on a mono line; reduced motion shows the full line.
- Project filter reflow: items fade/translate in on filter change (transform/opacity only).
- Route transitions: React Router 7 `viewTransition` on `<Link>`; CSS `::view-transition-old/new(root)` cross-fade 180ms; browsers without the API navigate normally.

### SEO and delivery

- Per-route `<title>` and `<meta name="description">` using React 19's native head hoisting (title/meta rendered inside each page).
- `index.html`: fix the `className` attribute, Google Fonts for Host Grotesk + Atkinson Hyperlegible Mono with `display=swap`, JSON-LD `Person` (name, jobTitle, affiliation Kean University, sameAs LinkedIn/GitHub), `og:image` (the existing home portrait), canonical.
- `public/robots.txt`, `public/sitemap.xml` (15 URLs), `vercel.json` SPA rewrite.
- Routes are lazy-loaded (`React.lazy` + `Suspense`), so the home bundle does not ship 8 case studies.
- `scripts/optimize-images.mjs` (dev-only, uses `sharp`) writes 640px WebP thumbnails to `public/images/joel-photography/thumbs/` and 1600px WebP display copies to `public/images/joel-photography/large/`, and resizes the 4 portraits and project images to WebP beside the originals. Originals stay for download/backup.

## Alternatives Considered

- **Keep 8 hand-written project pages, only restyle.** Rejected: the duplication is the main maintenance cost, and the three styling dialects would need 8 separate restyles.
- **MDX for case studies.** Rejected: adds a compiler plugin and a content format for 8 documents whose structure is already regular; tagged-section data gives the same flexibility with no new toolchain.
- **framer-motion for animation.** Rejected: ~40 KB gzip for count-ups, one reveal and a filter reflow that IntersectionObserver, rAF and the View Transitions API cover natively.
- **Tailwind 4 upgrade.** Rejected: the last two commits pinned 3.4.19 to fix the Vercel build; not this change's risk to take.
- **Light editorial theme.** Rejected by the owner in favour of refined dark technical.

## Risks

- Facts lost in the move from JSX to data. Mitigation: `--kept` check, plus a Vitest test that every project slug renders and every referenced image/PDF path exists in `public/`.
- `sharp` is a native dependency; Windows install can fail. Mitigation: it is a devDependency used only by a manual script; generated WebP files are committed, so the Vercel build never runs it.
- View Transitions are Chromium/Safari-only. Mitigation: progressive enhancement, plain navigation elsewhere.
- Large one-shot diff. Mitigation: nothing is committed until the owner reviews on localhost; work happens on branch `refactor/console-redesign`.

## Detailed Implementation Plan

### Create

| File | What and why |
| --- | --- |
| `src/styles/tokens.css`, `src/styles/base.css` | Hallmark Console scaffold (done). Single source of colour, type, spacing, motion. |
| `src/data/profile.js` | Name, role, contact, links, bio paragraphs, the 4 readings, hero sentence. Moves copy out of Home/About/Footer/Contact. |
| `src/data/experience.js` | The 3 roles from `Experience.jsx` and the Home spotlight, one source for both pages. |
| `src/data/projects.js` | All 8 projects: index fields from `Projects.jsx` plus full case-study sections from the 8 page files. |
| `src/data/certifications.js` | Earned (6), in progress (1), academic (4) from `Achievements.jsx`. |
| `src/data/skills.js` | 6 domains from `About.jsx` and the tooling list from `Home.jsx`. |
| `src/data/photos.js` | 41 photo ids with thumb/large/original paths and alt text. |
| `src/data/nav.js` | Nav and footer link lists (one source). |
| `src/components/ui/Button.jsx` | Primary (amber fill) / secondary (outline) as `Link` or `a`; eight states. |
| `src/components/ui/Chip.jsx` | State chip and filter chip (button with `aria-pressed`). |
| `src/components/ui/Panel.jsx` | Hairline panel and joined panel group. |
| `src/components/ui/Reading.jsx` | Large mono value with count-up, label, source. |
| `src/components/ui/SectionHead.jsx` | h2 + optional one-line lead + optional link. |
| `src/components/ui/Seo.jsx` | Renders `<title>` and description meta for a route (React 19 hoisting). |
| `src/components/CopyEmail.jsx` | One copy-to-clipboard control used by Footer, Home, Contact. |
| `src/components/ProjectRow.jsx` | One row of the project index (Home + Projects). |
| `src/components/case/*.jsx` | One renderer per case-study section type. |
| `src/hooks/useCopyToClipboard.js`, `useInView.js`, `useCountUp.js`, `usePrefersReducedMotion.js` | Shared behaviour. |
| `src/pages/ProjectCaseStudy.jsx` | Template for `projects/:slug`. |
| `src/pages/NotFound.jsx` | 404. |
| `src/test/*.test.jsx`, `vitest.config.js` (or `test` key in `vite.config.js`) | Route render tests, data integrity tests (slugs unique, assets exist, every project reachable). |
| `scripts/optimize-images.mjs` | WebP thumbnails/display copies. |
| `public/robots.txt`, `public/sitemap.xml`, `vercel.json` | Crawling and SPA deep links. |
| `.hallmark/*` | Hallmark records; screenshots ignored by Hallmark's own rules. |

### Modify

| File | Change |
| --- | --- |
| `index.html` | Fix `className`; new font link; JSON-LD; og:image; canonical. |
| `tailwind.config.js` | Console roles mapped to tokens; remove legacy map. |
| `src/index.css` | Hallmark stamp + imports above `@tailwind`; component layer for panels, readings, view transitions, typed line. |
| `src/App.jsx` | Lazy routes, `projects/:slug`, `*` NotFound. |
| `src/components/Layout.jsx`, `Navbar.jsx` → `Nav.jsx`, `Footer.jsx`, `ScrollToTop.jsx` | Rebuilt on primitives; nav adds skip link, `aria-current`, mobile menu with focus return and Escape. |
| `src/pages/Home.jsx`, `Projects.jsx`, `Experience.jsx`, `Achievements.jsx`, `About.jsx`, `Photography.jsx`, `Contact.jsx` | Rebuilt as layout over data. Contact keeps field names `name`, `email`, `subject`, `message` and the mailto handler. |
| `package.json` | Add devDependencies `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `sharp`; scripts `test`, `optimize:images`. |
| `README.md` | Routes table (adds Wazuh, Experience, Contact; documents `projects/:slug`), data-file editing guide, scripts. |
| `.gitignore` | Ignore `.hallmark/before/`, `.hallmark/after/` screenshots. |

### Delete

| File | Why |
| --- | --- |
| `src/pages/NCyTEChallenge.jsx`, `WazuhLab.jsx`, `DFIRTriage.jsx`, `PiHole.jsx`, `HomeLab.jsx`, `PhysicalServer.jsx`, `NGOThreatIntel.jsx`, `CyberRadio.jsx` | Content moved to `src/data/projects.js`; rendered by `ProjectCaseStudy`. Same URLs. |
| `src/components/BackToProjects.jsx` | Folded into `ProjectCaseStudy`. |
| `src/components/SocialIcons.jsx` | Replaced by inline icons with `aria-hidden` inside the components that use them (lucide-react has no brand icons; the two SVG paths move to `src/components/icons.jsx`). |
| `src/App.css`, `src/assets/hero.png` | Unused Vite starter leftovers. |

### Order of work

1. Foundation (one agent): tokens, Tailwind config, `index.css`, primitives, hooks, data files, nav/footer/layout, `App.jsx`, Home.
2. In parallel, against the foundation: (a) Projects + ProjectCaseStudy + case renderers; (b) Experience, Certifications, About; (c) Photography + image script, Contact, NotFound; (d) SEO files, `index.html`, tests, README.
3. Verify: lint, test, build, `npm audit`, `security-review`, `sloplint --render --kept`, Lighthouse, claude-seo technical check, EGM drift report.

## Review Resolutions (Goldfish review, 2026-11-02)

Four fresh-context reviewers ran: zoom-out, design critic, implementation readiness, codebase details. Decisions below supersede the sections above where they differ.

| # | Finding | Decision |
| --- | --- | --- |
| R1 | `viewTransition` is ignored under `<BrowserRouter>` (all four reviewers). | **Accepted.** `App.jsx` uses `createBrowserRouter` + `RouterProvider`; pages are `React.lazy` with `<Suspense>` in `Layout`; `ScrollToTop` moved inside `Layout` (needs router context). |
| R2 | "No-JS and crawlers see real numbers" is false for a client-rendered SPA. | **Accepted, reworded.** Readings render the final value on first render and count up only after `useInView` fires. `index.html` keeps static title/description/og tags (tagged `data-static`) for non-JS crawlers and link previews; `main.jsx` removes them at startup so React's per-route tags are not duplicated. Prerendering is out of scope; listed as a follow-up. |
| R3 | Home bundle would include all case-study content. | **Accepted.** `src/data/projects/index.js` holds index fields only; `src/data/projects/<slug>.js` holds sections and is loaded with `import.meta.glob`. |
| R4 | A single static canonical marks every route as a copy of home. | **Accepted.** No canonical in `index.html`; `Seo.jsx` renders a per-route canonical; `NotFound` renders `noindex` instead (soft-404 mitigation). |
| R5 | Test setup undecided; ESLint lacks test/node globals. | **Accepted.** `test` key in `vite.config.js`, `jsdom`, `src/test/setup.js` imports `@testing-library/jest-dom/vitest`; tests import `describe/it/expect` from `vitest` explicitly; ESLint gives Node globals to `*.config.js` and `scripts/**`. Pinned: vitest 5.1.0, @testing-library/react 16.3.3, @testing-library/dom 10.4.2, @testing-library/jest-dom 7.0.1, jsdom 30.1.3, sharp 0.35.5. Unused `@tailwindcss/forms` and `@tailwindcss/container-queries` removed. |
| R6 | No test cases listed. | **Accepted.** Cases: each route renders its h1; unknown path and unknown slug render NotFound with noindex; `?filter=` unknown → all 8, `intel` → 2; slugs unique; every `/`-rooted asset path exists in `public/`; `useCountUp` returns the final value under reduced motion; CopyEmail success and failure; Contact keeps 4 field names, validation and mailto output; Photography renders 41 thumbnails; sitemap lists every slug. |
| R7 | Slugs and filter vocabulary unspecified. | **Accepted.** Slugs unchanged: `ncyte-career-challenge`, `wazuh-siem-lab`, `dfir-triage-station`, `home-lab-networking`, `pi-hole-dns-filtering`, `physical-server-nvr`, `ngo-threat-intel`, `cyber-radio`. Filter values = category enum `all | secops | infrastructure | homelab | intel`. "FLIP" dropped: entering rows fade/translate in; nothing else moves. |
| R8 | Phase 1 not buildable. | **Accepted.** Phase 1 shipped `ProjectCaseStudy` and `NotFound` stubs and `ProjectRow`; build verified before phase 2 started. Old pages are deleted by the agent that replaces them. All shared files (styles, config, primitives, data foundation) are owned by phase 1 only (`docs/designs/BUILD_BRIEF.md`). |
| R9 | PiHole link target unstated; `--kept` will flag it. | **Accepted.** Becomes `/projects/home-lab-networking`; recorded as an intentional change in the Hallmark stamp. |
| R10 | Production origin unknown. | **Open, owner.** `SITE_URL = https://joel-website.vercel.app` in `src/data/site.js` (also in `index.html`, `public/sitemap.xml`, `public/robots.txt`), flagged TODO. |
| R11 | Commit each phase (zoom-out M4, design M6). | **Contested.** The owner asked to review on localhost before anything is committed. The work is isolated on branch `refactor/console-redesign`; commits follow owner approval. |
| R12 | Photography originals (104 MB) still deploy (zoom-out M6). | **Contested.** Originals are never requested by the page (thumbs/large WebP are), so they cost deploy size, not visitor bandwidth. Moving or deleting the owner's photos is the owner's call; listed in the handoff. |
| R13 | Merge `useCopyToClipboard` into `CopyEmail`; drop `usePrefersReducedMotion` (nits). | **Contested.** The hook keeps the clipboard fallback testable on its own; `usePrefersReducedMotion` subscribes to changes, which an inline `matchMedia` read does not. |
| R14 | Google Fonts third-party request (design nit 11). | **Accepted as a risk.** Kept with `preconnect` and `display=swap`, matching the previous site; self-hosting is a follow-up if Lighthouse flags it. |
| R15 | Name mismatch "Certifications" vs `Achievements.jsx`. | **Resolved.** Route and file stay `/achievements` / `Achievements.jsx` (URL stability); the visible label is "Certifications". |

## As Built (drift report reconciliation, 2026-11-02)

The EGM drift report (`docs/designs/drift_report.md`) found 13 items, none High. Code-side items were fixed: the home case figures moved to `homeCase` in `src/data/projects/index.js` (G2), Contact reads `profile.school`/`profile.location`, and `src/test/routes.test.jsx` covers `/contact`, `/photography` and the rest through the router plus the unknown-slug noindex check. The design is updated as follows:

- **Readings:** three on Home (20,000+, 60+, 395). The graduation date moved into the hero's measured record (`Graduates 2027-05, bs cs`), following the Hallmark finish review.
- **Primitives:** panels are the `.panel` / `.panels` classes in `src/index.css`, not `ui/Panel.jsx`; there is no `Prose` primitive. `Seo.jsx` lives in `src/components/` (route chrome). Filter toggles are `<button className="filter" aria-pressed>` in `Projects.jsx`; `Chip` is state only, with `ui/status.js` mapping status to tone.
- **Filter labels:** All, SecOps and detection, Network defense and infrastructure, Home lab and DFIR, Threat intel and research.
- **Hero actions:** "Read my resume" (primary) and "Get in touch" (to `/contact`); the email with copy sits in the closing panel, with resume, LinkedIn and GitHub beside it.
- **Data model additions:** project `area`; `homeCase`; profile `headline`, `heroSentence`, `whoami`, `record`, `school`, `education`, `philosophy`; readings `suffix` and `to`; `skills.js` exports `skillDomains` and `toolkit`; photos carry `thumbSm` (320w), `thumb` (640w), `large` (1600w), `original`, `width`, `height`.
- **Case-study helpers:** `case/CaseSection.jsx` (section shell), `case/ItemList.jsx`, `case/RichText.jsx` (backtick text renders as `<code class="measured">`; no HTML parsing).
- **Images:** `scripts/optimize-images.mjs` also writes `thumbs-sm/` and regenerates `src/data/photos.js`; the home portrait ships as 640/900/1200w WebP with `srcset`; a 1200x630 `public/images/og-joel-leiva.jpg` is the social image.
- **`vercel.json`:** SPA rewrite limited to paths without a file extension (missing files 404), `trailingSlash: false`, immutable caching for `/assets/*`, and security headers including a CSP: `default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; style-src-attr 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests`. **Any new third-party script, font, image host or inline script must be added to this CSP or it will be blocked.**
- **JSON-LD:** `Person` with `worksFor` and `alumniOf` (Kean University), `address`, `email`, `sameAs`.
- **Layout:** the footer renders inside the route `<Suspense>` boundary so lazy pages never shift it (CLS 0.234 → 0); Home is eagerly imported.

### Follow-ups (not in this change)

1. Prerender the 15 routes so non-JS crawlers and link previews get per-route titles, descriptions and real 404 status.
2. Confirm the production origin (`SITE_URL`) and replace it in `site.js`, `index.html`, `robots.txt`, `sitemap.xml`.
3. ESLint's `minimatch` chain has 6 moderate dev-only advisories with no non-breaking fix.
4. Decide whether the 104 MB of original photographs should keep deploying from `public/`.
