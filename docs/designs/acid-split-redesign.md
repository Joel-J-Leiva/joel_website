# Acid Split Redesign: Black and Lime Visual System

| Field | Value |
| --- | --- |
| Author | Joel Leiva (drafted with Claude Code) |
| Date | 2026-11-03 (all owner decisions in this document were made on this date) |
| Status | Reviewed (EGM consolidated review, 2026-11-03; see `reviews/acid-split/consolidated_review_report.md`) |
| Components | `index.html`, `tailwind.config.js`, `src/styles/*`, `src/index.css`, `src/hooks/`, `src/components/**`, the 9 routed pages in `src/pages/`, `src/data/{profile,experience}.js`, `src/test/app.test.jsx`, `public/favicon.svg`, `docs/designs/BUILD_BRIEF.md` |
| Approved reference | [`reference/hero-4b-split.html`](./reference/hero-4b-split.html) (hero "4B, Split" with the rotating asterisk) |
| Predecessor | [`portfolio-refactor.md`](./portfolio-refactor.md) (data-driven pages, Console theme) |

## Terms used in this document

- **Hallmark**: a design-system tool used to build the current "Console" theme. Its rules are written into `docs/designs/BUILD_BRIEF.md` (hard rules 1-12) and into comments at the top of `src/index.css`. The owner no longer uses it.
- **EGM (Elephant-Goldfish Model)**: the owner's design-doc workflow.
  - A main session (the Elephant) writes the doc.
  - Fresh subagents with no history (Goldfish) review it and then build it in parallel.
  - The "drift report" compares the finished code against this doc.
- **SCA**: Security Configuration Assessment, the Wazuh feature behind the "395 CIS checks" figure.
- **Saturated colour**: a colour with oklch chroma above 0.06. Lime is the only saturated colour used for decoration or meaning. The single exception is the status pair `ok` and `bad`, used on pass/fail data, form errors and the existing status chips (for example "Earned").
- **Banner header**: the top block (the `h1` plus one lead sentence) of six inner pages: About, Achievements, Contact, Experience, Photography and Projects. Each of these pages writes it by hand today, with a `SignalBar` above it. This design turns it into one component, `PageHeader` (see "Inner pages").
- **Hello line**: the mixed-case line "Hi, I'm Joel Leiva" above the Home `h1`, with a small lime asterisk. It is not a `.label` and is never uppercased.
- **Circle bloom / photo reveal**: the two one-time entrance animations of the Home portrait. The lime circle scales up from 0.8, and a cover panel slides off the photo.
- **Parallel page groups**: Phase 2 is built by several agents at once. Each one edits only its group's files. Phase 1 files are locked, which means no Phase 2 agent may edit them.

## Overview

The owner ran the hero design process (5 directions, then 3 refinements) and approved one hero: **4B, Split**. Its elements are:

- a near-black ground with one acid-lime accent;
- Anton (a condensed uppercase display face) paired with Instrument Serif italic;
- a black-and-white rectangular portrait over an offset lime circle;
- a rotating "JOEL LEIVA · SECURITY OPERATIONS ·" badge;
- a slowly rotating outlined lime asterisk behind the headline;
- a fixed left rail with "Open to work" and LinkedIn, GitHub and resume icons;
- a bento grid (an About tile and three stat tiles) that starts inside the first screen.

This design applies that system to the whole site. All content already lives in `src/data/`, and all colour, type and spacing already come from tokens in `src/styles/tokens.css`, which `tailwind.config.js` maps into Tailwind. The change therefore sits mostly in four places:

- the design-system layer;
- the shell (nav, rail and footer);
- a rebuilt Home hero and bento;
- a styling pass on the other pages, with their content unchanged.

## The Problem

1. **The owner selected a replacement direction.** The live site uses the "Console" theme: navy graphite, four saturated signal colours and Host Grotesk. The owner approved a different direction as a concrete hero file.
2. **The reference covers one hero only.** It does not define inner pages, case studies, forms, the photo archive, filters or the 404 page. Without written rules, parallel agents would restyle each page differently, and type, colour and spacing would become inconsistent between pages.
3. **The reference breaks the codebase's current rules.** `BUILD_BRIEF.md` bans the following, and the approved hero uses each on purpose:
   - uppercase, tracking and eyebrows (rule 3);
   - middle dots and status dots (rule 5);
   - shadows (rule 6);
   - pill radii and a second typeface.

   Agents that follow the brief as written would strip these from the ported code. The brief must be rewritten with an explicit verdict on each rule (see "Rule changes").
4. **Category coding needs saturated colour today.** The current theme colours four project categories, three roles and six skill domains with four saturated hues. That conflicts with a system that has one saturated accent. The owner chose to keep colour-coding with lime plus three desaturated tints.
5. **Continuous motion must be pausable.** The owner wants the asterisk and badge to keep spinning. WCAG 2.2.2 (Pause, Stop, Hide) requires a visitor control for motion that starts automatically and lasts more than 5 seconds. The owner chose a pause button.

## Goals

- G1. Every page uses the approved system:
  - near-black ground and off-white ink;
  - Anton for display lines, Instrument Serif italic for secondary heads, and Archivo for body text;
  - lime as the only saturated colour, except the `ok`/`bad` status pair (see "Saturated colour" in Terms).
- G2. Every fact, link, PDF, form field and behaviour on the current site still works. The 37 existing tests pass. The one test that changes is the Home `h1` text check in `app.test.jsx`, because the Home `h1` text changes on purpose (see "Home page"). Group A updates it in the same change. `routes.test.jsx` does not check the Home `h1`, so it needs no change.
- G3. The left rail is visible on every page at 900px and wider. Below 900px CSS hides it, and the same links appear in the mobile menu. On Home they also appear in a status row under the hero buttons.
- G4. Only `src/components/ui/tones.js` references the tint colours (`sage`, `stone`, `dusk`). Measured values such as dates and paths use a neutral colour.
- G5. At 1440x900, the Home first screen matches the reference. It shows the hero, the portrait plate, the badge, the rotating asterisk, and the top of the bento (the About tile and the 25,000+ tile).
- G6. Accessibility holds:
  - WCAG AA contrast for text;
  - a visible lime focus ring;
  - full keyboard use;
  - a pause control for continuous motion (WCAG 2.2.2);
  - every animation stopped under `prefers-reduced-motion`;
  - no horizontal scroll at 375px.
- G7. Performance holds:
  - no new JavaScript dependencies;
  - CLS of 0.1 or less;
  - LCP of 2.5s or less (Lighthouse mobile preset) on `/`;
  - the portrait is painted on the first frame, so it can be the LCP element.

## Non-Goals

- **Content:** no content rewrite outside Home. Inner-page copy, case-study modules, project data and photography data stay as they are.
- **Routes and SEO:** no changes to routes, URLs, the sitemap or SEO metadata, except the `theme-color` meta and the favicon.
- **New features:** no new pages or features (blog, light theme, CMS).
- **Legacy files:** the untracked legacy files are not touched:
  - `src/App.css` and `src/assets/`;
  - `src/components/{BackToProjects,Navbar,ScrollToTop,SocialIcons}.jsx`;
  - the 8 old per-project pages in `src/pages/`.

  Commit `adbe9a9` removed them. They are back as untracked files, and the cause is unverified. Nothing imports them, and lint passes with them present. Deleting them is a separate owner decision.
- **Photograph colour:** photographs keep their colour. The photography archive and the project photos stay in full colour. Only the owner's two portraits (Home and About) become black and white.

## Open Questions

- None blocking. The owner decided colour, rail placement, the motion pause and the process.

## Critical User Journeys (CUJs)

### CUJ 1: A recruiter lands on Home

- **Given**: a desktop browser at 1440x900, no cache.
- **When**: they open `/`.
- **Then**:
  - they see the nav, the rail, the hello line, the "SECURITY OPERATIONS" display line over the serif "analyst, SIEM & threat intel." line, the 25,000+ sentence, "Download resume" and "See projects", the black-and-white portrait plate with the rotating badge, the turning outlined asterisk, and the top of the bento;
  - "Download resume" downloads `/documents/joel-leiva-resume.pdf`;
  - "See projects" goes to `/projects`.

### CUJ 2: A phone visitor browses a case study

- **Given**: a 375px-wide phone.
- **When**: they open `/`, open the menu, go to Projects and then to `/projects/wazuh-siem-lab`.
- **Then**:
  - there is no horizontal scroll at any step;
  - the menu lists all primary links, Contact, LinkedIn, GitHub, Resume and the motion pause button;
  - the category filter on `/projects` still writes `?filter=`;
  - on the case study, the `h1` is Anton uppercase, the `h2` heads are Instrument Serif italic, and the reading figures are Anton.

### CUJ 3: A keyboard user pauses motion

- **Given**: keyboard only, with no reduced-motion preference.
- **When**: they tab through Home, press the rail's "Pause motion" button, reload, then go to Contact and submit the form empty.
- **Then**:
  - "Skip to content" is the first tab stop;
  - every control shows a lime focus ring;
  - after the press, the asterisk and badge stop;
  - the button keeps its label "Pause motion", reports `aria-pressed="true"` and shows a Play icon;
  - the paused state survives the reload;
  - the form shows its existing error alert and `aria-invalid` fields.

### CUJ 4: A reduced-motion user

- **Given**: `prefers-reduced-motion: reduce`.
- **When**: they open `/`.
- **Then**:
  - nothing animates;
  - count-ups show their final values;
  - the pause button is hidden, because nothing moves.

### CUJ 5: Category colour on the project index

- **Given**: `/projects` with all four categories.
- **When**: the visitor filters by category.
- **Then**:
  - each category keeps one tone, always next to its text label, in the row edge bar, the area label, the pressed filter and the case-study header;
  - security operations is lime, infrastructure is sage, home lab is dusk, and threat intel is stone.

## Proposed Architecture

### Source of truth for exact values

`reference/hero-4b-split.html` is the source of truth for exact sizes, spacing, opacities, durations, shapes, filters and shadows on Home. "Port from the reference" means copying the rule and replacing every colour literal with a token. This document gives values only in three cases:

- where the site departs from the reference (listed in "Departures from the reference");
- where the reference says nothing, such as inner pages;
- where a value is a budget.

### Layers

```text
index.html (fonts, theme-color)
   │
src/styles/tokens.css ──► tailwind.config.js (token() mapping, screens rail=900px nav=1100px)
   │                         │
src/styles/base.css          │   element defaults: h1 Anton uppercase, h2 serif italic, h3 Archivo
   │                         │
src/index.css ◄──────────────┘   component classes and the motion-pause rules
   │
src/hooks/useMotionPause.js      paused state, stored per viewer, mirrored on <html data-motion>
src/components/ui/tones.js       the only place a category maps to a colour (class strings)
src/components/ui/Asterisk.jsx   the 12-point star mark
src/components/ui/PageHeader.jsx the Banner header
src/components/ProfileLinks.jsx  LinkedIn, GitHub and Resume links
src/components/MotionToggle.jsx  the pause/play button
   │
src/components/{Layout,Nav,Rail,Footer}.jsx   the shell on every route
   │
src/pages/*.jsx                  classes and components only; no colour literals
```

### Design tokens

The neutral and accent token names stay the same, so most Tailwind usages restyle without edits. Three tint tokens are renamed so each name says its colour: `cool` becomes `sage`, `violet` becomes `dusk`, and `sky` becomes `stone`, together with their `-soft` partners. Today they appear 51 times in 12 files. Most of those uses are not category colour: they colour measured values in pages (`measured text-cool`). Those uses move to `text-ink-2`, and the tints remain only in `tones.js`.

| Token | Value (sRGB approximation; authored as `oklch`) | Role |
| --- | --- | --- |
| `--color-paper` | #0d0d0d | Page ground |
| `--color-paper-2` | #141414 | Tiles and panels |
| `--color-paper-3` | #0a0a0a | Nav, footer, inset bands |
| `--color-ink` | #f2f0ea | Main text |
| `--color-ink-2` | #d6d3ca | Secondary text and measured values |
| `--color-muted` | #a9a69c | Tertiary text (8:1 on paper) |
| `--color-rule` / `--color-rule-2` | #2a2a2a / #3a3a3a | Hairlines |
| `--color-accent` | #c6f432 (lime) | Primary action, marks, status dot, security operations category |
| `--color-focus` | #c6f432 | Focus ring (was cyan) |
| `--color-accent-ink` | #0d0d0d | Text on lime |
| `--color-accent-soft` | lime at about 14% on paper | Pressed filter and chip ground |
| `--color-sage` | about #9fb59a | Infrastructure tone |
| `--color-stone` | about #b8ad9c | Threat intel tone |
| `--color-dusk` | about #a99cc4 | Home lab tone |
| `--color-{sage,stone,dusk}-soft` | each tint at about 14% on paper | Tint grounds |
| `--color-ok` | about #6cc7b0, `oklch(76% 0.09 175)` | Pass data only; teal, clearly apart from lime |
| `--color-bad` | about #f0766a, `oklch(70% 0.16 25)` | Fail data and form errors |
| `--color-ok-soft` / `--color-bad-soft` | `ok` / `bad` at about 14% on paper | `.chip--ok` ground, Contact error alert |
| `--shadow-plate` / `--shadow-badge` | The reference's `.photo img` and `.badge` shadows, in oklch | The only shadow tokens: the portrait wrapper and the badge |

Measured contrast (one-off calculation from the final `tokens.css` oklch values, 2026-11-03; WCAG ratio on `paper` / `paper-2` / `paper-3`):

| Text token | Authored value | sRGB | paper | paper-2 | paper-3 |
| --- | --- | --- | --- | --- | --- |
| `ink` | `oklch(95.5% 0.008 91.5)` | #f2f0ea | 17.06 | 16.17 | 17.37 |
| `ink-2` | `oklch(86.7% 0.013 91.5)` | #d6d3ca | 13.00 | 12.33 | 13.24 |
| `muted` | `oklch(72.5% 0.015 93)` | #a9a69c | 7.99 | 7.57 | 8.13 |
| `accent` | `oklch(90.3% 0.208 122.9)` | #c6f433 | 15.15 | 14.37 | 15.43 |
| `sage` | `oklch(75% 0.056 145)` | #98b898 | 8.93 | 8.46 | 9.09 |
| `stone` | `oklch(76% 0.04 70)` | #c2ad96 | 9.00 | 8.54 | 9.17 |
| `dusk` | `oklch(71.8% 0.059 300)` | #a99cc4 | 7.64 | 7.24 | 7.78 |
| `ok` | `oklch(76% 0.09 175)` | #6fc4ae | 9.42 | 8.93 | 9.60 |
| `bad` | `oklch(70% 0.16 25)` | #f2716a | 6.78 | 6.43 | 6.90 |

`accent-ink` on `accent`: 15.15:1. OKLab distances: sage to stone 0.061, sage to dusk 0.117, stone to dusk 0.099, sage to lime 0.220, stone to lime 0.235, dusk to lime 0.325. All pairs pass (4.5:1 and 0.05). The first tint candidates (#9fb59a and #b8ad9c) were only 0.040 apart, so sage and stone were moved apart in hue and chroma.

Tint rules:
- Each tint has oklch chroma of 0.06 or less.
- Each tint reaches 4.5:1 on `paper` and on `paper-2`.
- The OKLab distance between any two tints, and between each tint and lime, is at least 0.05.
- A tint never carries meaning on its own: a text label always sits next to it.

| Type and shape token | Value | Use |
| --- | --- | --- |
| `--font-display` | Anton | `h1`, figures, brand |
| `--font-serif` | Instrument Serif (new token) | `h2`, accents |
| `--font-body` | Archivo | Body text |
| `--font-outlier` | Atkinson Hyperlegible Mono (unchanged; Tailwind `font-mono`) | Measured values only |
| `--radius-round` | 999px (new) | `.btn`, `.pill`, `.filter`, `.chip` |
| `--radius-pill` | 6px (unchanged) | Existing `rounded-pill` users: thumbnails, alerts, skeleton bars, focus outlines |
| `--radius-card` | 14px | Panels and tiles |
| `--container` / `--gutter` | 1320px / `clamp(16px, 4vw, 56px)` | Matches the reference `.wrap` |
| `--rail` | 88px at 900px and up, 0 below | Rail width and page offset |

### Typography rules

- `h1`: Anton, uppercase, weight 400. Home sizes come from the reference. Inner pages use `--text-display`.
- `h2`: Instrument Serif italic, sentence case. Base CSS sets it, and components add no font classes to `h2`.
- `h3`: Archivo 600, sentence case.
- Uppercase appears only in these places:
  - `h1`;
  - the `.label` class (small tracked text for rail status, pills and figcaption small caps);
  - the `.pill` class;
  - the `.brand` wordmark;
  - the badge ring text, a fixed string in data.
- `.label` is never placed directly above a heading as an eyebrow. The hello line is mixed case and is not a `.label`.
- Big figures (`.reading` and the stat tiles) are Anton with a lime `+` suffix.

### Rule changes (old BUILD_BRIEF hard rules)

| Old rule | Verdict |
| --- | --- |
| 1 No colour literals | Kept |
| 2 No `transition-all`; transform/opacity only | Kept |
| 3 No eyebrows, no uppercase, no tracking | Replaced by the uppercase list above |
| 4 Mono only for measured values | Kept |
| 5 No middle dots, status dots, glued arrows or emoji | Middle dots: allowed only in the badge string and the degree pill. Status dots: allowed only as `.status-dot` beside "Open to work" and the availability line. Arrows and emoji: still banned. |
| 6 No card in card, glows, shadows, gradients or blur | Shadows: allowed only on the Home portrait wrapper and `.badge`. Card in card, glows (including the reference's lime hover glow and dot halo), gradients and blur: still banned. |
| 7 Keyboard reach, focus, reduced motion | Kept. The motion pause control is added. |
| 8 `minmax(0,1fr)` grid tracks, `min-w-0` | Kept |
| 9 Never invent facts | Kept |
| 10, 11 Copy rules | Kept |
| 12 Image loading; duotone from base.css | Loading rules kept. Duotone removed. |

### Shell

**Breakpoints** (Tailwind screens `rail: 900px` and `nav: 1100px`, declared in order among the default screens):

| Width | Rail | Desktop nav links | Menu button |
| --- | --- | --- | --- |
| Below 900px | Hidden | Hidden | Shown |
| 900 to 1099px | Shown | Hidden | Shown |
| 1100px and up | Shown | Shown | Hidden |

Every width therefore has a way to reach every link.

- **Rail (`Rail.jsx`)**:
  - Always in the DOM. CSS shows it fixed (88px wide, full height, right hairline) from 900px, and sets `display: none` below 900px. jsdom ignores media queries, so tests see it.
  - Contents, top to bottom:
    - the lime asterisk, which links home;
    - the rotated "Open to work" with a status dot;
    - `ProfileLinks variant="icon"`;
    - `MotionToggle`.
  - At heights of 560px or less, the rail shrinks its gaps and scrolls its own content (`overflow-y: auto`), so short landscape screens do not clip it.
  - `Layout` gives the page wrapper `padding-left: var(--rail)`. The rail is the last element in the DOM, so "Skip to content" and then the nav come first in the tab order.
- **ProfileLinks**:
  - Renders LinkedIn, GitHub and Resume from `profile.links`.
  - Each link opens in a new tab with `rel="noopener noreferrer"` and visually hidden "(opens in a new tab)" text.
  - `variant="icon"`: 44px round buttons with accessible names. `variant="text"`: icon plus label.
  - Used by Rail, the mobile menu, the Home status row and the Home closing panel.
- **MotionToggle**:
  - A `button` with the fixed label "Pause motion" and `aria-pressed`; its icon changes between Pause and Play.
  - Reads and writes `useMotionPause`.
  - Not rendered when `usePrefersReducedMotion()` is true.
  - 44px icon-only in the rail, labelled in the menu.
- **Nav**:
  - The brand: a lime asterisk, then "Joel" in `.brand` (Anton, uppercase), then "Leiva" in serif italic.
  - Links: muted pills that turn ink on a `paper-2` ground on hover. The active link gets a lime underline.
  - Contact is an outlined pill. The header stays sticky.
  - The menu panel ends with `ProfileLinks variant="text"` and `MotionToggle`.
- **Footer**:
  - Keeps today's `footerColumns` and `profile` data.
  - Column heads are plain `h2` elements, so they come out serif italic.
  - The name line keeps `profile.name` in the body face at weight 600, and a decorative lime asterisk sits top-right.

### Motion pause

- `useMotionPause()` returns `[paused, toggle]`.
- It stores `paused` in `localStorage` under `motion-paused`. Every read and write is wrapped in try/catch, and the default is "not paused".
- It mirrors the state as `data-motion="paused"` on `<html>`.
- CSS sets `animation-play-state: paused` on `.star-xl` and `.badge__ring` under `[data-motion='paused']`.
- They also pause while the pointer is over `.copy` (for the asterisk) or `.plate` (for the badge). `.star-xl` has `pointer-events: none`, so it cannot be hovered itself.
- Persistence and the hover pause were both part of the option the owner chose. Persistence spares visitors with motion sensitivity from pausing again on every visit.
- The site's CSP allows no inline scripts. So the stored state is applied after React mounts, and a stored pause can show one frame of rotation first. This is accepted.

### Home page

- **Hero**: ported from the reference. The copy column holds:
  - the hello line, built from `profile.shortName`;
  - the `h1`;
  - the lede;
  - the actions;
  - below 900px only, a status row: the status dot, "Open to work" and `ProfileLinks variant="icon"`.
- **`h1` structure**: a visually hidden `Joel Leiva,`, then the Anton line, then the serif line, joined by explicit space text nodes. The JSX wraps the `&` of the serif line in a lime span. The accessible name is "Joel Leiva, Security operations analyst, SIEM & threat intel."
- **Actions**:
  - "Download resume" is the primary lime button with the `download` attribute. The hero's main action saves the file. Every other resume link opens it in a new tab, and this difference is intended.
  - "See projects" is a `.btn-round` link to `/projects`, with `profile.hero.projectsNote` as its second line.
- **Portrait plate**: ported from the reference: the offset lime circle, the portrait, the figcaption and the badge.
  - The portrait `img` sits in `<div data-slot="portrait" class="aspect-[2/3]">`.
  - The shadow (`--shadow-plate`) and the reveal panel (`::after`) sit on the `[data-slot="portrait"]` wrapper, so the figcaption is outside both.
  - The figcaption shows `profile.location` in serif italic and `profile.org` as a `.label`.
  - The badge ring text is `profile.hero.badge`, a fixed string, because the ring's `textLength` is tuned to it.
- **Rotating asterisk**: `Asterisk variant="outline"` with class `.star-xl`, as in the reference.
- **Bento**:
  - The About tile: an `h2` "About", a degree pill built from `profile.education`, `profile.aboutShort`, the four `profile.focus` bullets with lime asterisk markers, and the availability line with a "Get in touch" link to `/contact`.
  - Three stat tiles: `profile.readings` through `Reading`, each with its `tag`. The tiles have no tone colour.
  - Each tile keeps its `source` as a small line at the bottom. The 395 tile's source stays a link to `/projects/wazuh-siem-lab` (G2).
- **The rest of Home**: featured projects, where I work, the SCA case and the closing call keep their structure and data. The closing panel uses `ProfileLinks variant="text"`.
- **Removed**:
  - The typed `whoami` line and the `record` list. Their facts remain elsewhere: role and org in the lede and the About tile, scope in the 25,000+ tile, graduation in the degree pill, and the start date on `/experience`.
  - `profile.whoami`, `profile.record`, and the `.typed` and `.caret` CSS are deleted.

### Data model changes (`src/data/profile.js`)

| Field | Value | Source |
| --- | --- | --- |
| `hero.display` | 'Security operations' | `role` ("Junior Security Operations Analyst") |
| `hero.serif` | 'analyst, SIEM & threat intel.' | `role`, plus the skill domains "Security operations and SIEM" and "Threat intelligence and research" |
| `hero.projectsNote` | 'Labs, research & write-ups' | The approved hero. It summarises the project categories. |
| `hero.badge` | 'JOEL LEIVA · SECURITY OPERATIONS ·' | `shortName`, `role` |
| `hero.monogram` | 'JL' | The initials of `shortName` |
| `heroLede` | `{ before: 'I triage SIEM alerts for ', strong: '25,000+ students, faculty and staff', after: ' at Kean University.' }` | `heroSentence`, split so that one phrase can be bold |
| `status` | 'Open to work' | `availability` |
| `education.short` | 'BS Computer Science, Cybersecurity' | `education.degree` and `education.focus`. The abbreviation "bs cs" already appears in `record`. |
| `aboutShort` | `{ before, strong, after }` holding the reference's About paragraph, with `strong` = 'Junior Security Operations Analyst with Kean University IT' | It restates `bio[0]` (role, tools) and `bio[2]` (internship). No new facts. |
| `focus` | The four bullets from the reference | `skillDomains` 1-5 in `skills.js` |
| `readings[].tag` | 'SIEM', 'Threat intel', 'Wazuh lab' | Each reading's `source` |
| `readings[].tone` | Removed | The stat tiles have no tone |
| `whoami`, `record`, `headline`, `heroSentence` | Removed in Phase 3, after Home stops reading them | Home is their only reader. `Seo` does not use `headline`. |

Where a label in the reference differs from the data, the data label wins. For example, the 25,000+ tile keeps "Students, faculty and staff in the environment I monitor".

### Photographs

- `base.css` today turns every `[data-slot] > img` into a duotone, and `index.css` then undoes it. Both are deleted: the duotone block in `base.css` and the override block in `index.css`.
- The `[data-slot]` layout rules (positioning, `object-fit`) stay, because galleries need them. Its gradient background becomes flat `paper-2`, because rule 6 bans gradients.
- One rule is added: `[data-slot='portrait'] > img` uses the reference's portrait filter.
- Two elements carry `data-slot="portrait"`: the Home plate and the About bio figure. Every other image renders in full colour, with no filter.

### Motion

Continuous motion:
- the badge ring;
- the asterisk.

Both run only under `prefers-reduced-motion: no-preference`, and both respond to the motion pause.

One-time motion, also only under `no-preference`:
- **Circle bloom**: a transform.
- **Photo reveal**: a `::after` cover panel on the portrait wrapper, in `paper` colour, shrinks with `transform: scaleY(1)` to `scaleY(0)` from a bottom origin (1.5s, 0.12s delay), so the photo appears top to bottom. The image itself is never clipped or hidden, so it paints on the first frame.

Existing motion keeps its current pattern (on by default, with a `reduce` override):
- the count-up;
- the `.enter` filter reflow;
- the `.proportion` bar grow;
- the route cross-fade.

Removed: the faint 40px body grid from the Console theme.

### Fonts

- One Google Fonts request with `display=swap`. The CSP in `vercel.json` already allows `fonts.googleapis.com` and `fonts.gstatic.com`.
- First, measure CLS on `/` with plain `display=swap`.
- Only if CLS is above 0.1, add metric-matched fallback faces in `index.css` using `size-adjust` and `ascent-override`: "Anton Fallback" over local Arial Narrow (then Arial), and "Instrument Serif Fallback" over local Georgia.

### Inner pages

- **Header**: `PageHeader({ title, lead })` replaces the hand-written `SignalBar`, `h1` and lead block on the six Banner pages. It renders `section.container` with top padding, then a small solid lime `Asterisk`, then the `h1`, then `p.lead`. `NotFound` and `ProjectCaseStudy` keep their own header markup, with the `h1` restyled by base CSS.
- **Section heads**: the `h2` heads in `SectionHead` are serif italic automatically.
- **Panels**: `.panel` and `.panels` use `paper-2`, a 1px `rule` and `--radius-card`.
- **Chips and filters**: pill-shaped. A pressed filter takes its colour from the existing `tones[x].pressed` class string. With no tone class, a pressed filter shows an ink border on `paper-2`. The `instrument` chip, used for "active" status, becomes neutral: `ink-2` text on `paper-3` with a `rule-2` border.
- **Measured values**: `text-ink-2` in mono.
- **Case-study readings**: Anton figures. Pass and fail use `ok` and `bad`.
- **Photography**: the grid and lightbox change only through tokens. The photos stay in colour.
- **Contact**: `.field` keeps a 10px radius, so multi-line inputs stay legible.

### Departures from the reference

- **The rail is a shell component, hidden below 900px.** In the reference it reflows inside the hero instead. See Alternative F.
- **Profile links are reachable at every width.** They appear in the menu below 1100px.
- **The photo reveal is an overlay, not a `clip-path` on the image.** This keeps LCP intact.
- **No lime hover glow and no dot halo.** Rule 6 still bans glows.
- **The portrait shadow sits on the image wrapper.** In the reference it sits on the `img`. The badge keeps its own shadow.
- **`ok` and `bad` exist.** The reference has no pass/fail data.
- **The stat labels come from the data.** See "Data model changes".

## Risks and Mitigations

| Risk | Effect | Mitigation |
| --- | --- | --- |
| The swap from fallback to Anton or Instrument Serif shifts layout | CLS above 0.1, and the hero moves after load | Measure CLS first. Add metric-matched fallback faces only if the budget fails. |
| A web font fails to load | The hero renders in a system fallback | The layout uses `minmax(0,1fr)` tracks and `text-wrap: balance`, so a wider fallback wraps instead of overflowing. |
| Continuous motion distracts, or fails WCAG 2.2.2 | Accessibility failure | Pause control, pause on hover, and the reduced-motion stop. |
| Tints fail contrast or are hard to tell apart (colour blindness) | Unreadable labels or a lost category cue | The contrast script and an OKLab distance check. A text label always sits next to the tone. |
| A Phase 2 agent needs a missing Phase 1 class | Agents invent local CSS, and pages drift | Agents report the gap instead of editing locked files. The Elephant adds the class to Phase 1 and re-briefs. |
| Two agents edit the same file | Lost work | Each group has a disjoint file list. Phase 1 files are locked. |
| The `cool`/`violet`/`sky` rename leaves an old class behind | That element silently loses its colour | `rg` gate: no `cool`, `violet` or `sky` class names in `src` after Phase 1. `SignalBar` is updated in Phase 1. |
| Untracked legacy files get imported or linted | Build or lint failure | They are left alone. Lint passes today with them present. Owner decision pending. |
| A token restyle regresses a page that no CUJ covers | A visual bug on, for example, `/achievements` | Screenshots of every route at two widths. |
| The CSP blocks something new | Fonts or styles fail in production | No new origins and no inline scripts. Checked on a Vercel preview. |

## Alternatives Considered

### Alternative A: Rebuild every page as new JSX

- **Pros**: each page could get its own layout.
- **Cons**:
  - It rewrites about 1,500 lines of page code that pass tests.
  - It reopens the risks the predecessor refactor closed: lost facts, broken links and duplicated styling.
- **Reason for rejection**: a token-level change reaches the same visible result with fewer edits, and G2 is easier to verify.

### Alternative B: Keep the tint token names `cool`, `violet` and `sky`

- **Pros**: no class edits outside the token files.
- **Cons**: `violet` and `sky` would hold dusk and stone values, so a reader translates through three names.
- **Reason for rejection**: the measured-value usages must change anyway (G4), so renaming at the same time costs little. `accent` keeps its name because it is a role.

### Alternative C: The rail on Home only

- **Pros**: inner pages get the full width, and Layout stays as it is.
- **Cons**: the shell differs between Home and other pages, and the profile links are one click away only on Home.
- **Reason for rejection**: the owner chose a consistent shell, with the profile links always one click away.

### Alternative D: Lime only, no category tints

- **Pros**: closest to the reference's single accent.
- **Cons**: the Projects index, Experience and About lose colour scanning by category.
- **Reason for rejection**: the owner chose to keep colour scanning, with tints quiet enough that lime stays the only saturated colour.

### Alternative E: Drive filter colour with inline CSS custom properties

- **Pros**: one `.filter` rule could serve every tone.
- **Cons**: it adds a second colour channel next to the `pressed` class strings that `Projects.jsx` already uses.
- **Reason for rejection**: it duplicates a mechanism that already works.

### Alternative F: Reflow the rail in place below 900px, as the reference does

- **Pros**: identical to the reference on Home.
- **Cons**:
  - The reference rail lives inside one hero, but a shell rail has no single place to reflow into on 9 different pages.
  - Reflowing it into each page's content would put a status row on every inner page.
- **Reason for rejection**: hiding it, with the links in the menu (and in a status row on Home only), gives every page the same behaviour.

### Alternative G: Self-host the fonts

- **Pros**:
  - no third-party request;
  - preload control;
  - no Google request leaking visitor IPs.
- **Cons**:
  - it adds four font families of files to the repo;
  - someone has to maintain them, with their licence notices, by hand;
  - it changes the build and the CSP.
- **Reason for rejection**: it is not needed to meet the CLS and LCP budgets once the fallbacks are metric-matched. It is recorded as a future improvement.

## Non-Functional Requirements

- **Performance**: on `/`, LCP of 2.5s or less, CLS of 0.1 or less, and Lighthouse performance (median of 3 runs) no more than 3 points below the baseline median. No font is preloaded.
- **Accessibility**: AA contrast for every text and tint pair. Lime and #0d0d0d have a contrast ratio of about 14:1. WCAG 2.2.2 is met through the pause control.
- **Security**: no new dependencies. External links keep `rel="noopener noreferrer"`. No inline scripts, so the CSP is unchanged.
- **Rollout and rollback**: one branch, `feat/acid-split-redesign`. Vercel builds a preview deploy before the merge. Rollback is a revert of the merge commit.

## Additional Resources

- [`reference/hero-4b-split.html`](./reference/hero-4b-split.html): the approved hero. It loads the portrait from `public/`.
- [`portfolio-refactor.md`](./portfolio-refactor.md): the data model and components this design builds on.

## Future Improvements

- Delete the untracked legacy files, once the owner confirms.
- Self-host the fonts (see Alternative G).

--------------------------------------------------------------------------------

## Detailed Implementation Plan

All work happens on the branch `feat/acid-split-redesign`. There are three phases, and the build and tests must pass at the end of each one.

- **Phase 1 (foundation and shell)**: one agent does this phase. It also makes the mechanical renames in page files listed in item 22, so that nothing breaks before Phase 2.
- **Phase 2 (pages)**: parallel groups. Each group edits only the files listed for it.
- **Phase 3 (clean-up and tests)**: the Elephant does this phase.

Compatibility rules between phases:
- `profile.js` keeps `headline`, `heroSentence`, `whoami` and `record` until Phase 3, so `Home.jsx` keeps rendering until Group A replaces it.
- `SignalBar.jsx` stays, with recoloured classes, until Phase 3.

### Phase 1: Foundation and shell

Exit gates (all four must pass before Phase 2 starts):
1. `npm run build` and `npm run lint` pass.
2. `npm test` passes all 37 existing tests.
3. `rg -n "\b(text|bg|border)-(cool|violet|sky)\b|tones\.(blue|green|violet|sky)|'(blue|green|violet|sky)'" src --glob '!src/pages/{CyberRadio,DFIRTriage,HomeLab,NCyTEChallenge,NGOThreatIntel,PhysicalServer,PiHole,WazuhLab}.jsx' --glob '!src/components/{Navbar,BackToProjects,ScrollToTop,SocialIcons}.jsx'` returns nothing.
4. `theme.screens` in `tailwind.config.js` is declared in the order `sm, md, rail, lg, nav, xl, 2xl`, and `corePlugins.container` is `false`.

#### 1. `index.html` (Modify)

- **Type / Scope**: HTML head.
- **Proposed Changes**:
  - Replace the font link with one request: `family=Anton&family=Instrument+Serif:ital@0;1&family=Archivo:wght@400;500;600;700&family=Atkinson+Hyperlegible+Mono:wght@400;500&display=swap`.
  - Set `theme-color` to `#0d0d0d`.

#### 2. `src/styles/tokens.css` (Modify)

- **Type / Scope**: design tokens.
- **Proposed Changes**:
  - **Values**: apply both token tables.
    - Each `-soft` token is `color-mix(in oklab, var(--color-X) 14%, var(--color-paper))`.
  - **Renames**: `--color-cool` becomes `--color-sage`, `--color-violet` becomes `--color-dusk` and `--color-sky` becomes `--color-stone`, each with its `-soft` partner.
  - **Additions**:
    - `--color-focus` becomes lime.
    - `--font-serif` is added.
    - `--radius-round: 999px` is added. `--radius-pill` stays at 6px (thumbnails, alerts, skeleton bars and nav focus outlines keep their current small radius).
    - `--shadow-plate` and `--shadow-badge` are added, with values from the reference `.photo img` and `.badge` rules, written in oklch.
    - `--rail: 0px` is added.
  - **Font stacks**:
    - `--font-display: "Anton", "Arial Narrow", sans-serif`
    - `--font-serif: "Instrument Serif", Georgia, serif`
    - `--font-body: "Archivo", ui-sans-serif, system-ui, sans-serif`
  - **Removals**: delete `--color-success`, `--color-error` and the unused `--shadow-card`.
  - **Other settings**:
    - Set `--display-weight: 400`.
    - Set `--tracking-display: .005em`. Only `h1` uses it.
    - Set `--container: 1320px` and `--gutter: clamp(16px, 4vw, 56px)`.

#### 3. `src/styles/base.css` (Modify)

- **Type / Scope**: element defaults.
- **Proposed Changes**:
  - `h1`: Anton, uppercase, weight 400, line-height .9, letter-spacing `var(--tracking-display)`. Keep `max-width: 20ch`. The Home `h1` overrides it with `max-w-none`.
  - `h2`: `--font-serif`, italic, weight 400, letter-spacing 0, line-height 1.
  - `h3`: `--font-body`, weight 600, letter-spacing -0.01em.
  - `::selection`: a lime ground with `accent-ink` text.
  - `[data-slot]`: replace the gradient background with a flat `var(--color-paper-2)`. Rule 6 bans gradients.
  - Delete the duotone block (the comment plus three rules at the end of the file).
  - Delete the two `--gutter` declarations in the `60rem` and `40rem` media queries, because the clamp replaces them. Keep the `--section-gap*` and `--gap-columns` overrides.
  - Add `@media (min-width: 900px) { :root { --rail: 88px } }`.

#### 4. `tailwind.config.js` (Modify)

- **Type / Scope**: build config.
- **Proposed Changes**:
  - Rename the colour keys `cool`, `violet` and `sky` to `sage`, `dusk` and `stone`, each with `soft`.
  - Add `fontFamily.serif`.
  - Add `borderRadius.round`.
  - Set `corePlugins: { container: false }`. Tailwind's container plugin otherwise emits `max-width` caps at every screen after base.css, which overrides `--container`. The `.container` class in base.css stays the only definition.
  - Declare the full, ordered `theme.screens`, not under `extend`: `{ sm: '640px', md: '768px', rail: '900px', lg: '1024px', nav: '1100px', xl: '1280px', '2xl': '1536px' }`. Tailwind 3 emits extended screens after `2xl`, which would make them override `lg:` and `xl:` at 1280px and wider.

#### 5. `src/index.css` (Modify)

- **Type / Scope**: component classes.
- **Proposed Changes**:
  - **Header comment**: replace the Hallmark/Console block at the top with one line pointing to this document.
  - **Port**: port every component rule in the reference `<style>` block, including its media queries at 1100, 900, 640 and 400px. Replace every colour literal with a token, and apply the changes listed in "Departures from the reference".
  - **Not ported** (base.css and tokens.css already own these): `:root`, `*`, `html`, `body`, `a`, `img`, `h1`, the global `:focus-visible`, the `::-webkit-scrollbar*` rules, the global reduced-motion rule, `.sr-only`, `.skip`, `.wrap`, `.nav`, `.nav > nav` and the 900px block's `:root { --rail }` line.
  - **Renames during the port**:

    | Reference | Site |
    | --- | --- |
    | `.btn-acid` | `.btn--primary` |
    | `.btn-acid .ico` | `.btn__ico` |
    | `.dot` | `.status-dot` |
    | `.badge svg.ring` | `.badge__ring` |
    | `.sr-only` | `.visually-hidden` (already exists; do not port) |
    | `.wrap` | `.container` (already exists) |
    | `.skip` | the existing skip-link classes in `Layout` |

  - **Ported as they are**: `.page` (with `padding-left: var(--rail)` in place of `margin-left`), `.hero`, `.copy`, `.hello`, `.h1__a`, `.h1__b`, `.amp`, `.lede`, `.actions`, `.btn-round`, `.label`, `.brand`, `.plate`, `.photo`, `.badge`, `.badge__core`, `.star-xl`, `.rail`, `.rail__mark`, `.rail__status`, `.social`, `.bento`, `.tile`, `.about`, `.about__head`, `.skills`, `.avail`, `.pill`, `.stat`, `.stat__num`, `.stat__label` and the nav pill rules. The nav pill rules come from `.nav__links a` and `.nav__cta`, and attach to `Nav.jsx` as `.nav__link` and `.nav__cta`.
  - **New classes** (not in the reference):
    - `.stat__source { grid-column: 1 / -1 }`, for the source line;
    - `.status-row`: `display: flex; flex-wrap: wrap; align-items: center; gap: 16px 28px; margin-top: 28px`, set to `display: none` from 900px;
    - `.social`: a row of 44px round icon links (44px is a departure from the reference's 40px, to meet the target size), with `.rail .social { flex-direction: column }`.
  - **Bento grid**: the grid spans live only under `.bento > .about` and `.bento > .stat`. The `.stat` rule itself carries the inner layout only: pill at the top right, figure, label and source line. That way `Reading` also works inside the Achievements `.panels`.
  - **Rail**:
    - `.rail` is `display: none` by default and `display: flex` from 900px.
    - Add `@media (min-width: 900px) and (max-height: 560px) { .rail { justify-content: flex-start; gap: 16px; padding: 16px 0; overflow-y: auto } }`.
  - **Portrait**:
    - `.plate [data-slot='portrait']` carries `aspect-ratio: 2/3` and `box-shadow: var(--shadow-plate)`.
    - Its `::after` is the reveal panel: `inset: 0`, `background: var(--color-paper)`, `transform-origin: bottom`, `z-index: 2`. It has `content: ''` and `position: absolute`, and it animates `transform: scaleY(1)` to `scaleY(0)` over 1.5s, with a 0.12s delay, the reference easing and `animation-fill-mode: both`, inside `no-preference`. Its static state is `scaleY(0)`.
    - Under reduced motion the panel is `display: none`.
  - **Photographs**: add `[data-slot='portrait'] > img { filter: grayscale(1) contrast(1.08) brightness(.98); object-position: 50% 20% }`.
  - **Motion pause**: add `[data-motion='paused'] .star-xl, [data-motion='paused'] .badge__ring, .copy:hover .star-xl, .plate:hover .badge__ring { animation-play-state: paused }`.
  - **Changed component classes**:
    - `.btn`: an outlined pill using `--radius-round`.
    - `.btn--primary`: a lime ground, weight 700, the reference's `translateY(-2px)` hover lift, and no glow. It keeps the `.btn` padding. The reference's asymmetric padding applies only to `.btn--primary:has(.btn__ico)`.
    - `.chip` and `.filter`: `--radius-round`.
    - `.chip--instrument`: neutral (`ink-2` on `paper-3`, `rule-2` border).
    - `.filter[aria-pressed='true']`: neutral (ink border, `paper-2` ground), so a tone class wins.
    - `.link:hover`: lime.
    - `.reading`: Anton, with a lime `sup`.
    - `.field`: radius 10px.
  - **Deleted**: `.typed`, `.caret`, the body grid, and the photograph override block (`[data-slot] > img`, `[data-slot]:has(> img)::before` and the portrait brightness rule).
  - **Kept, using tokens only**: `.panel`, `.panels`, `.measured`, `.chip--person`, `.chip--ok`, `.trail`, `.trail-mark`, `.trail-mark--current`, `.enter`, `.proportion`, `.row-link` and the view-transition rules.

#### 6. `src/hooks/useMotionPause.js` (Create)

- **Type / Scope**: React hook and module store.
- **Proposed Changes**:
  - **Module state**:
    - `memory` holds the in-memory value, used when storage throws.
    - `listeners` is a `Set` of subscribers.
  - **`read()`**: returns `localStorage.getItem('motion-paused') === '1'` inside try/catch. If storage throws, it returns `memory`.
  - **`apply(paused)`**: sets `document.documentElement.dataset.motion = 'paused'` when paused, and deletes the attribute otherwise.
  - **`setPaused(next)`**:
    - Writes `'1'` when pausing, or removes the key when playing, inside try/catch.
    - Sets `memory`.
    - Calls `apply`.
    - Notifies the listeners.
  - **On module load**: calls `apply(read())`, guarded by `typeof document`.
  - **The hook**: `useMotionPause()` returns `[useSyncExternalStore(subscribe, read, () => false), () => setPaused(!read())]`.

#### 7. `src/components/MotionToggle.jsx` (Create)

- **Type / Scope**: React component.
- **Proposed Changes**:
  - `MotionToggle({ compact = false })` renders `null` when `usePrefersReducedMotion()` is true.
  - Otherwise it renders a `<button type="button" className="btn" aria-pressed={paused}>`.
  - The label is always "Pause motion". `aria-pressed` reports the state.
  - The icon is lucide `Pause` when playing and `Play` when paused.
  - With `compact`, the label is wrapped in `.visually-hidden` and the button is a 44px circle.

#### 8. `src/components/ui/Asterisk.jsx` (Create)

- **Type / Scope**: React component.
- **Proposed Changes**:
  - `Asterisk({ variant = 'solid', className })`, where `variant` is `'solid'` or `'outline'`.
  - It renders the reference's 12-point polygon in `viewBox="-102 -102 204 204"` and is always `aria-hidden="true"`.
  - The outline variant uses `fill: none`, `stroke: currentColor`, `stroke-width: 1.1` and `vector-effect: non-scaling-stroke`.

#### 9. `src/components/ui/PageHeader.jsx` (Create)

- **Type / Scope**: React component.
- **Proposed Changes**: `PageHeader({ title, lead })` renders:
  - `<section className="container pt-16 pb-[var(--section-gap-s)] sm:pt-24 lg:pt-[var(--section-gap-s)]">`;
  - `<Asterisk className="mb-6 h-5 w-5 text-accent" />`;
  - `<h1>{title}</h1>`;
  - `<p className="lead mt-6 max-w-[56ch] text-ink-2">{lead}</p>`.

  These are the classes the six pages use today.

#### 10. `src/components/ProfileLinks.jsx` (Create)

- **Type / Scope**: React component.
- **Proposed Changes**:
  - `ProfileLinks({ variant = 'icon', className })`, where `variant` is `'icon'` or `'text'`.
  - It renders a `ul` of three anchors, for LinkedIn, GitHub and Resume, using `LinkedinIcon`, `GithubIcon` and lucide `FileText`.
  - The hrefs come from `profile.links`.
  - Each anchor has `target="_blank"`, `rel="noopener noreferrer"` and a visually hidden "(opens in a new tab)".
  - With `icon`, the `ul` gets `.social` and each anchor is a 44px circle whose name is set by its visually hidden label. With `text`, each anchor is a `.btn` with an icon and a visible label.
  - An optional `omit` array leaves out any of the three links. The Home closing panel uses it.

#### 11. `src/components/ui/tones.js` (Modify)

- **Type / Scope**: tone map.
- **Proposed Changes**:
  - Keys `lime`, `sage`, `dusk` and `stone`, with class strings on `accent`, `sage`, `dusk` and `stone`.
  - `toneCycle = ['lime','sage','stone','dusk']`.
  - `categoryTone = { secops: 'lime', infrastructure: 'sage', homelab: 'dusk', intel: 'stone' }`, exported.
  - The `toneFor` fallback is `'lime'`.

#### 12. `src/data/profile.js` (Modify)

- **Type / Scope**: content data.
- **Proposed Changes**:
  - Add the new fields in "Data model changes".
  - Remove `readings[].tone`.
  - Keep `headline`, `heroSentence`, `whoami` and `record` until Phase 3.

#### 13. `src/data/experience.js` (Modify)

- **Type / Scope**: content data.
- **Proposed Changes**: tone values change from `blue`, `green` and `violet` to `lime`, `sage` and `dusk`.

#### 14. `src/components/Rail.jsx` (Create)

- **Type / Scope**: React component.
- **Proposed Changes**: `<aside aria-label="Status and profiles" className="rail">` contains, in order:
  - `<Link to="/" className="rail__mark">` with a solid `Asterisk` and a visually hidden "Joel Leiva, home";
  - `<p className="rail__status label"><span className="status-dot" aria-hidden="true" />{profile.status}</p>`;
  - `<ProfileLinks variant="icon" />`;
  - `<MotionToggle compact />`.

#### 15. `src/components/Layout.jsx` (Modify)

- **Type / Scope**: React component.
- **Proposed Changes**:
  - The DOM order is:
    1. `ScrollToTop` (the inline function already in `Layout.jsx`, not the untracked file);
    2. the skip link, now a lime pill;
    3. `<div className="page">` holding `Nav`, `Suspense` (`main` and `Footer`);
    4. `<Rail />`, last.
  - The rail is fixed, so where it sits in the DOM does not change its position on screen. With this order, "Skip to content" is the first tab stop and the nav is the second.

#### 16. `src/components/Nav.jsx` (Modify)

- **Type / Scope**: React component.
- **Proposed Changes**:
  - The brand is `<Link className="brand">`, containing an `Asterisk`, `Joel` and `<em>Leiva</em>`.
  - Desktop links use `nav__link`, and Contact uses `nav__cta`.
  - Change `md:block` to `nav:block`, and `md:hidden` to `nav:hidden`, in all four places.
  - The menu panel's list ends with `<li>` items holding a rule, `<ProfileLinks variant="text" />` and `<MotionToggle />`.
  - Keep the menu logic, the Escape handling, the active-link lime underline and both `aria-label="Primary"` navs.

#### 17. `src/components/Footer.jsx` (Modify)

- **Type / Scope**: React component.
- **Proposed Changes**:
  - The footer gets `relative`.
  - Column headings become plain `<h2 className="mb-4 text-xl">`, without the inline style.
  - The name line keeps `profile.name` in `--font-body` at weight 600.
  - An `Asterisk` with `absolute right-[var(--gutter)] top-10 h-6 w-6 text-accent` is added.

#### 18. `src/components/ui/Reading.jsx` (Modify)

- **Type / Scope**: React component.
- **Proposed Changes**:
  - The root's class string becomes exactly `stat tile`, replacing `relative flex h-full flex-col gap-3 p-6 sm:p-8`. `.tile` supplies the padding, the surface and `position: relative`.
  - Remove the tone bar and the `tone` prop. After item 22, no caller passes it.
  - Add an optional `tag` prop, rendered as `<span className="pill">`.
  - The figure is `<p className="stat__num">`, with the suffix in `<sup>`. `.reading` stays for case-study readings.
  - Then the label, as `<p className="stat__label">`.
  - Then `source` in `<p className="stat__source text-sm text-muted">`, as text or as a `Link className="link"` when `to` is set.
  - Remove the `-mx-[0.22em]` comma tightening.
  - Keep the count-up and the visually hidden exact value.

#### 19. `src/components/ui/Button.jsx`, `Chip.jsx`, `SectionHead.jsx`, `SignalBar.jsx`, `src/components/ProjectRow.jsx` (Modify)

- **Type / Scope**: React components.
- **Proposed Changes**:
  - `Button` gains `icon`, a React element (for example `<Download size={16} />`). On the primary variant it is rendered inside `<span className="btn__ico">`.
  - `Chip` and `SectionHead`: comments only. `CopyEmail` needs no change, because it has no tint classes.
  - `SignalBar`: `bg-cool` becomes `bg-sage` and `bg-violet` becomes `bg-dusk`.
  - `ProjectRow`: the hover title uses `group-hover:text-accent`. The thumbnail keeps `rounded-pill`, which is still 6px.

#### 20. `src/components/case/ReadingsSection.jsx`, `src/components/case/PipelineSection.jsx` (Modify)

- **Type / Scope**: React components.
- **Proposed Changes**:
  - In `ReadingsSection`, `measured ... text-cool` becomes `text-ink-2`.
  - In `PipelineSection`, `step.detail`'s `text-cool` becomes `text-muted`.
  - `ok` and `bad` are unchanged.

#### 21. `public/favicon.svg` (Modify)

- **Type / Scope**: static asset.
- **Proposed Changes**: a lime (`#c6f432`) 12-point asterisk on a `#0d0d0d` square with a 6px radius.

#### 22. Mechanical renames in page files (Modify, Phase 1 only)

- **Type / Scope**: one-line edits that keep pages working after items 4 and 11.
- **Proposed Changes**:
  - `measured ... text-cool` becomes `text-ink-2` in:
    - `Home.jsx` (3 places);
    - `About.jsx` (2 places);
    - `Achievements.jsx` (1 place);
    - `NotFound.jsx` (1 place).
  - In `Achievements.jsx`, `issuerTone` becomes `{ CompTIA: 'lime', Fortinet: 'sage', Zscaler: 'dusk', Cisco: 'stone' }` and the `toneOf` fallback becomes `'dusk'`. Its `readings` lose their `tone` fields, because those readings have no `source` line, so the tone has no visible effect.
  - In `Experience.jsx`, the measured date's `${t.text}` becomes `text-ink-2`. The trail mark keeps the tone.

  No other change goes into these files in Phase 1.

#### 23. `docs/designs/BUILD_BRIEF.md` (Modify)

- **Type / Scope**: agent brief.
- **Proposed Changes**: a rewrite for this system. It contains:
  - the locked file list: every file in items 1-21, plus `src/test/setup.js`. The page files touched in item 22 are unlocked for their Phase 2 groups;
  - the classes from item 5, the components and hooks from items 6-10 and 14, and the tone keys;
  - the hard rules: the "Rule changes" table, the uppercase list in "Typography rules", the `h2` rule, G4, and no horizontal scroll at 375px;
  - the Phase 2 groups and their files;
  - the definition of done:
    - `npm run build`, `npm run lint` and `npm test` pass;
    - no new colour literals;
    - a missing class or token is reported to the Elephant, not written as local CSS or arbitrary values.

### Phase 2: Pages (parallel groups; each group edits only its own files)

Exit gate: `npm run build`, `npm run lint` and `npm test` pass, and `rg -n "SignalBar" src/pages` returns nothing.

#### 24. Group A: `src/pages/Home.jsx`, `src/test/app.test.jsx` (Modify)

- **Type / Scope**: page and its hero test.
- **Proposed Changes**:
  - **`Hero`**:
    - `section.hero` contains:
      - `div.copy`, holding `Asterisk variant="outline" className="star-xl"`, the hello line `p.hello` (a solid `Asterisk`, then "Hi, I’m {profile.shortName}"), the `h1` (as in "Home page", with `className="max-w-none"`), `p.lede` from `profile.heroLede` (the `strong` segment wrapped in `<strong>`), and `div.actions`;
      - the mobile status row `div.status-row`, holding `<span className="status-dot" aria-hidden="true" />`, `<span className="label">{profile.status}</span>` and `<ProfileLinks variant="icon" />`;
      - `div.plate`.
    - The serif line is split on `' & '`, and the `&` is wrapped in `<span className="amp">`.
    - `section.hero` sits inside `div.container`.
    - `div.actions` holds two items:
      - `Button variant="primary" href={profile.links.resume} download icon={<Download size={16} />}` with the text "Download resume". The icon follows the label.
      - a `Link` with class `btn-round` to `/projects`, which holds `<span className="disc"><Play /></span>` and `<span>See projects<small>{profile.hero.projectsNote}</small></span>`.
  - **Plate**:
    - `figure.photo` holds `<div data-slot="portrait"><img …portraitHome srcSet sizes="(min-width: 900px) 340px, 84vw" fetchPriority="high" width="900" height="1350"></div>` and a figcaption (`span.place` showing `profile.location`, `span.label` showing `profile.org`).
    - Next to the figure, `div.badge` holds an SVG `textPath` ring with class `badge__ring` and the text `profile.hero.badge`, plus `span.badge__core` showing `profile.hero.monogram`.
  - **`Bento`** replaces `Readings`. It is `<section className="bento" aria-label="About and impact">` inside `div.container`.
    - `article.tile.about` holds:
      - `div.about__head` with an `h2` "About" and `span.pill` reading `{profile.education.short} · {month and year of profile.education.expected}`;
      - `p` from `profile.aboutShort`, the same shape as the lede;
      - `ul.skills` from `profile.focus`, each item led by a solid `Asterisk`;
      - `p.avail` with a `status-dot`, `profile.availability` and `<Link to="/contact">Get in touch</Link>`.
    - Then the three `Reading` tiles, with their `tag`, `source` and `to`.
  - **Other sections**:
    - `FeaturedProjects`, `Trail` and `CaseSca`: no class change is expected after item 22. Check them in the screenshots.
    - In `Close`, keep the primary "Read my resume" `Button` and `CopyEmail`, and replace the LinkedIn and GitHub buttons with `<ProfileLinks variant="text" />` minus Resume. To allow this, `ProfileLinks` accepts `omit={['resume']}`; this is the only extra prop.
  - **Imports and fields**: remove the imports of `SignalBar`, `LinkedinIcon` and `GithubIcon`, and stop reading `profile.whoami`, `profile.record`, `profile.headline` and `profile.heroSentence`.
  - **Test**: in `app.test.jsx`, the hero test's expected name becomes `'Joel Leiva, Security operations analyst, SIEM & threat intel.'`, as an exact string.

#### 25. Group B: `src/pages/Projects.jsx`, `src/pages/ProjectCaseStudy.jsx`, `src/components/case/{CaseSection,GallerySection,ItemList,LessonsSection,LinksSection,ListSection,NoteSection,PairSection,ProseSection,ReposSection,RichText,SectionRenderer}.jsx` (Modify)

- **Type / Scope**: project index, case study and case sections.
- **Proposed Changes**:
  - `Projects`:
    - Replace the `SignalBar`, `h1` and lead block with `<PageHeader title=… lead=…/>`, using the same strings.
    - The filter uses `toneFor(c.value).pressed` except for `'all'`, which takes no tone class, so its pressed state is neutral.
  - `ProjectCaseStudy` and the case components: no class change is expected after Phase 1. Check the screenshots of every case route, and replace only classes that render wrong.
  - The logic stays the same: `?filter=`, `getProject` and the lazy content modules.

#### 26. Group C: `src/pages/Experience.jsx`, `src/pages/Achievements.jsx` (Modify)

- **Type / Scope**: pages.
- **Proposed Changes**:
  - Replace the `SignalBar`, `h1` and lead block with `PageHeader`, using the same strings.
  - Panels use `.panel` or `.panels` as they do today.

#### 27. Group D: `src/pages/About.jsx`, `src/pages/Contact.jsx`, `src/pages/Photography.jsx`, `src/pages/NotFound.jsx` (Modify)

- **Type / Scope**: pages.
- **Proposed Changes**:
  - About, Contact and Photography: replace the `SignalBar`, `h1` and lead block with `PageHeader`, using the same strings.
  - About: the bio figure keeps `data-slot="portrait"`, so it renders black and white, and its skill domains keep using `toneAt`.
  - Contact: the behaviour, fields, `mailto` and error alert stay the same. The alert keeps `rounded-pill`, which is still 6px.
  - Photography: the lightbox close button becomes `btn btn--primary`.
  - NotFound: the `h1` text stays the same.

### Phase 3: Clean-up and tests (Elephant)

#### 28. Font CLS check (Elephant)

- **Type / Scope**: measurement, with a conditional CSS change.
- **Proposed Changes**:
  - Run Lighthouse (mobile preset, 3 runs) on `/` and read the median CLS.
  - If it is above 0.1, add `@font-face` fallbacks to `src/index.css`: `"Anton Fallback"` using `src: local("Arial Narrow"), local("Arial")`, and `"Instrument Serif Fallback"` using `src: local("Georgia")`. Insert them second in the stacks in `tokens.css`.
  - Derive `size-adjust` from the ratio of the rendered width of the Home `h1` line in the web font to its width in the fallback, measured in a headless browser. Derive `ascent-override` and `descent-override` from each font's `hhea` metrics.
  - Measure again.

#### 29. `src/data/profile.js` (Modify)

- **Type / Scope**: content data.
- **Proposed Changes**:
  - Delete `headline`, `heroSentence`, `whoami` and `record`.
  - Gate: before deleting, `rg -n "profile\.(headline|heroSentence|whoami|record)" src` returns nothing.

#### 30. `src/components/ui/SignalBar.jsx` (Delete)

- **Type / Scope**: component.
- **Proposed Changes**: delete it. Gate: `rg -n "SignalBar" src` returns only this file.

#### 31. `src/test/setup.js`, `src/test/app.test.jsx` (Modify)

- **Type / Scope**: unit tests.
- **Proposed Changes**:
  - **`setup.js`**: after each test, also call `vi.restoreAllMocks()`, `localStorage.clear()` and `delete document.documentElement.dataset.motion`.
  - **New tests in `app.test.jsx`, each rendering `/` through the router**:
    1. The `complementary` landmark named "Status and profiles" contains links whose names match `/^LinkedIn/`, `/^GitHub/` and `/^Resume/`, with the hrefs from `profile.links`.
    2. `categoryTone` equals `{ secops: 'lime', infrastructure: 'sage', homelab: 'dusk', intel: 'stone' }`, and every distinct `projects[].category` is a key in it.
    3. Pressing the rail's "Pause motion" button sets `aria-pressed="true"`, sets `document.documentElement.dataset.motion` to `'paused'`, and sets `localStorage['motion-paused']` to `'1'`. Pressing it again reverses all three.
    4. With `localStorage['motion-paused'] = '1'` set before the render, the button renders with `aria-pressed="true"`.
    5. With `Storage.prototype.getItem` and `setItem` mocked to throw, the page renders, and pressing the button still sets `aria-pressed="true"` using the in-memory value.
    6. With `matchMedia('(prefers-reduced-motion: reduce)')` mocked to match, no "Pause motion" button renders.

### Verification Plan

- **Build and lint**: `npm run build` and `npm run lint` pass at each phase gate.
- **Unit tests**: `npm test`. All 43 tests pass: 37 existing (1 updated) and 6 new.
- **Literal scan**: `rg -n "#[0-9a-fA-F]{3,8}\b|rgba?\(" src --glob '!**/data/**'`, with the same legacy-file exclusions as the Phase 1 gate, returns matches only in `src/styles/tokens.css`.
- **Tint scan**: `rg -n "\b(text|bg|border)-(sage|stone|dusk)" src` returns matches only in `src/components/ui/tones.js` and `SignalBar.jsx` (until item 30).
- **Contrast**: a one-off calculation, not committed, run when the Phase 1 tokens are final. Each text token (`ink`, `ink-2`, `muted`, `accent`, `sage`, `stone`, `dusk`, `ok`, `bad`) is measured against `paper`, `paper-2` and `paper-3`.
  - Each pair must reach at least 4.5:1.
  - Each pair of tints, and each tint against lime, must be at least 0.05 apart in OKLab.
  - The measured values are recorded in the token table of this document.
- **Visual**: headless Chrome or Edge screenshots of every route at 1440x900, at 1000x800, and at 375px wide with full-page height. The 375px shots are taken inside a 375px iframe, because headless Chrome will not make a window narrower than about 500px.
  - Pass: at 1440x900, Home shows every element listed in G5 in the reference's arrangement, and every difference is listed in "Departures from the reference".
  - Pass: at each width, `document.documentElement.scrollWidth <= innerWidth`.
- **Owner workflow checks** (from the owner's global instructions). The final report lists every remaining finding. Pass criteria for each check:
  - `security-review` of the branch diff: no high-severity finding is left unresolved.
  - `npm audit`: no high or critical vulnerability.
  - `/impeccable critique`, `/impeccable audit` and `npx impeccable detect src`: no unresolved high-severity finding.
  - Lighthouse, median of 3 runs on `/` and `/projects/wazuh-siem-lab`:
    - accessibility, best practices and SEO each score at least 95;
    - performance, LCP and CLS meet the budgets in the Non-Functional Requirements.
  - `claude-seo` technical and page checks: no high-severity issue that is absent from the baseline run on `main`.
  - EGM drift report: every item is implemented as written, or the report records why it was not.
