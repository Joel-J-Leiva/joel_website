## acid-split-redesign.md

- **Item 2 / "Design tokens" table (`src/styles/tokens.css`)** [known/accepted pending owner]: `--color-sage` is `oklch(75% 0.056 145)` (#98b898) and `--color-stone` is `oklch(76% 0.04 70)` (#c2ad96). The first token table still lists "about #9fb59a" and "about #b8ad9c". The values were moved to meet the 0.05 OKLab separation and match the measured-contrast table, but the two tables in the doc now disagree.
- **Items 2 and 28 / "Fonts" (`src/styles/tokens.css`, `src/index.css`)** [known/accepted pending owner]: there are two Anton fallback faces, `"Anton Fallback"` (local Arial Narrow) and `"Anton Fallback Arial"` (local Arial), and both are in `--font-display`. Item 28 specifies one face, `"Anton Fallback"`, with `src: local("Arial Narrow"), local("Arial")`.
- **Item 28 (`src/index.css`)**: `"Instrument Serif Fallback"` is also two faces, an italic one on `local("Georgia Italic"), local("Georgia-Italic")` and a normal one on `local("Georgia")`. Item 28 specifies one face on `local("Georgia")`. This is a second departure in the same item and is not in the known list.
- **Item 28 / G7 / Non-Functional Requirements** [known/accepted pending owner]: the Lighthouse LCP medians are 2.68s on `/` and 2.82s on `/projects/wazuh-siem-lab`. Both are above the 2.5s budget. The pre-redesign baseline was 2.83s and 2.68s, so `/` improved and the case study got slower. The code does not record the CLS measurement that would justify adding the fallbacks under item 28's condition.
- **Item 31 (`src/test/setup.js`)** [known/accepted pending owner]: `configure({ asyncUtilTimeout: 5000 })` was added. Item 31 lists only `vi.restoreAllMocks()`, `localStorage.clear()` and deleting `dataset.motion`.
- **Item 14 / "Shell: Rail" (`src/components/Rail.jsx`, `src/index.css`)** [known/accepted pending owner]: `ProfileLinks variant="icon"` and `MotionToggle compact` are wrapped in a new `div.rail__tools`, with a new `.rail__tools` class. The spec makes them direct children of the `aside`, and `.rail__tools` is not in item 5's class list.
- **Item 16 (`src/components/Nav.jsx`)** [known/accepted pending owner]: the brand is built by splitting `profile.shortName` (`{firstName} <em>{restName}</em>`). The spec says the literal `Joel` and `<em>Leiva</em>`.
- **Out of plan (`src/components/icons.jsx`)** [known/accepted pending owner]: `LinkedinIcon` and `GithubIcon` were changed from stroked to filled marks, copied from the reference. No item covers `icons.jsx`, and `BUILD_BRIEF.md` lists it as "untouched by everyone".
- **Item 19 (`src/components/ProjectRow.jsx`)** [known/accepted pending owner]: the row index number changed from the category tone (`t.text`) to `text-muted`. Item 19 changes only the hover title to `group-hover:text-accent`.
- **Item 5 (`src/index.css`)** [known/accepted pending owner]: `.badge__core` has `position: relative; z-index: 1`. In the reference it has no positioning, and item 5 says it is ported as is.
- **Item 5 (`src/index.css`)**: these classes and rules are not in item 5's "New classes" or "Changed component classes" lists:
  - `.btn--icon` (a 44px circle), used by `MotionToggle compact` and the Nav menu button;
  - `.btn[aria-pressed='true']` and its hover, which give the pressed motion toggle a lime border, lime text and a lime fill on hover.

  `BUILD_BRIEF.md` documents `.btn--icon`, but the design doc does not.
- **Item 19 (`src/components/ui/Button.jsx`)**: `icon` also renders on the secondary variant, as a bare element before the label. Item 19 defines `icon` only for the primary variant (inside `.btn__ico`).
- **Items 24 and 31 / G7 (`src/pages/Home.jsx`)**: the LCP portrait `img` has `decoding="async"`. It is not in the item 24 attribute list, and it works against "the portrait is painted on the first frame". The LCP budget is currently missed (see above).
- **Item 24 (`src/pages/Home.jsx`)**: in `div.status-row`, the `status-dot` and the `.label` sit inside an extra `<span className="inline-flex items-center gap-3">`. Item 24 places them, and `ProfileLinks`, directly in `div.status-row`.
- **Item 16 (`src/components/Nav.jsx`)**: the header bar height changed from `h-16` to the arbitrary value `h-[72px]`. No item specifies this change. `BUILD_BRIEF.md` "Definition of done" forbids arbitrary values in place of tokens.
- **"Typography rules" (h3 is Archivo 600) / Group B (`src/components/case/PipelineSection.jsx`)**: `<h3 className="mt-3 text-lg font-medium">` still forces weight 500. Group B removed `font-medium` from the `h3` elements in `LessonsSection.jsx` and `ListSection.jsx` for this rule, but `PipelineSection.jsx` (a locked Phase 1 file, item 20) keeps it.
- **"Design tokens" table (`src/styles/tokens.css`)**: `--color-ok` is listed as "about #6cc7b0", but the measured-contrast table gives #6fc4ae for the same `oklch(76% 0.09 175)`, and `--color-bad` is listed as "about #f0766a" against a measured #f2716a. The code matches the oklch values, but the doc gives two sRGB values for each.

## Post-review fixes (2026-11-04, owner-approved)

Applied after the critique, audit and finish review. Small fixes, so no new EGM draft; step 5 checks were re-run.

- Removed every decorative tone stripe: `ProjectRow`, certification rows, About skill cards, and `NoteSection` (now a top hairline).
- Removed the decorative `01`, `02` row numbers from `ProjectRow`.
- Case-study header: the tone bar is replaced by a tinted `Asterisk`, and the area and status line moved below the `h1`.
- `PageHeader` is compact. On `lg` the lead sits beside the `h1`.
- Home About tile: a "Certified" row (`headlineCerts` in `certifications.js`) linking to `/achievements`.
- `profile.location` is "Elizabeth, New Jersey", matching the JSON-LD. Kean's own address stays Union, NJ.
- Case-study galleries use the existing WebP files. Server-1's slot is now portrait, because the JPEG was EXIF-rotated.
- `Layout`: on route change, focus moves to `<main>` and the new `h1` is announced in a polite live region. `<main>` now sits outside `Suspense`. A test covers this.
- Count-up: tiles visible on load never animate, and animated tiles start at 0 (no flash of the final value).
- `li, figcaption, dd { text-wrap: pretty }`.
- A portrait `<link rel="preload">` was tried and removed, because it raised LCP and FCP on both pages under Lighthouse throttling.
- The `PipelineSection` `font-medium` drift item and the portrait `decoding="async"` item are resolved.

Lighthouse 12.8.2, mobile, median of 3. The baseline was re-measured in the same session, because machine speed drifted between sessions:

| Page | Build | Perf | LCP | FCP | TBT |
|---|---|---|---|---|---|
| `/` | pre-redesign | 78 | 4.12s | 3.51s | 122ms |
| `/` | this build | 89 | 3.08s | 2.80s | 0ms |
| `/projects/wazuh-siem-lab` | pre-redesign | 81 | 3.92s | 3.40s | 14ms |
| `/projects/wazuh-siem-lab` | this build | 92 | 2.93s | 2.29s | 16ms |

LCP is still above the 2.5s budget. In every run the LCP breakdown is 83–86% render delay (JS boot and route chunk), with no image load delay. The remaining lever is prerendering the routes (SSG), which needs its own design decision.
