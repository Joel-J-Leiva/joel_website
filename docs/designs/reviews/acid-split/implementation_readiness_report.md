# Stage 9: Implementation Readiness Report (round 1)

Target: DetailedRange (lines 486-762 at review time). Reviewers: egm-implementation-readiness, egm-codebase-details and egm-style. All three completed.

Verdict: NOT READY. 3 distinct Blockers, about 12 distinct Majors and about 30 Nits.

## Blockers
- **R1:** the Phase 1 gate `rg … (cool|violet|sky)` cannot pass, because 7 matches are in Phase 2 page files (Home, About, Achievements, NotFound).
- **R2:** Phase 1 breaks pages at runtime. The tone-key rename crashes Achievements, and deleting `whoami` and `record` crashes Home. So `npm test` cannot pass after Phase 1.
- **R3:** the claim "Seo uses `headline`" is false. Only Home reads `headline` and `heroSentence`.

## Major (merged across reviewers)
- **The test suite is red during Phase 2.** The hero test is only updated in Phase 3.
- **The literal scan fails on the untracked legacy files** (30 matches).
- **The port list leaves out the reference classes** Phase 2 needs. Renames such as `.badge__ring`, `.status-dot` and `.btn__ico` are not stated. Reading's `.stat` spans would break Achievements.
- **Changing `--radius-pill` to 999px** reshapes thumbnails, the Contact alert, skeleton bars and focus outlines.
- **The gutter overrides live in base.css**, not tokens.css, and what to do with them is undefined.
- **The shadow and reveal placement is wrong.** The `.photo` figure includes the figcaption. The reveal timing and origin are missing.
- **The hover pause can't work as specified.** `.star-xl` has `pointer-events: none`.
- **The fallback-font step has no owner,** because the files are locked by the time it can run.
- **Content shapes are undefined:**
  - `strong` emphasis in the lede and the About paragraph;
  - the degree abbreviation;
  - the source for "Open to work";
  - the stat tile `source`/`to` (G2).
- **The Layout order affects the first tab stop,** and the `.page` class is undefined.
- **The hook contract and tests are underspecified.** Missing:
  - the stored value and attribute removal;
  - test isolation;
  - a restore-on-mount test and a storage-throws test;
  - how the reduced-motion hiding works;
  - a `toneFor` test that can actually fail.
- **Mappings and colours are ambiguous:**
  - the Achievements issuer mapping;
  - the `PipelineSection` colour;
  - the Experience date tint;
  - the "All" filter's pressed state.
- **Style:**
  - the visual check has no pass criterion;
  - the OKLab threshold is missing from the verification step;
  - the umbrella pass rule conflicts with the pass rules for each check;
  - several verbs are imprecise ("restyled through classes").

## Resolution (applied)
- **Phasing:**
  - Phase 1 now makes the mechanical page renames (item 22).
  - `profile.js` keeps the old fields until Phase 3, which deletes them behind an `rg` gate.
  - Group A owns the hero test update.
  - Each phase has explicit exit gates.
  - The Phase 1 gate excludes the legacy files, and so does the literal scan.
- **Reference port:** every reference rule is ported, with a rename table. The bento spans sit on `.bento > .stat` only.
- **Tokens:**
  - New `--radius-round` (999px), and `--radius-pill` stays at 6px.
  - The gutter overrides are deleted in base.css.
  - `--rail` is set in base.css.
- **Portrait:** the shadow and reveal sit on the portrait wrapper. The reveal timing and origin are given.
- **Hover pause:** it runs on `.copy:hover` and `.plate:hover`.
- **Fonts:** the fallback faces became an Elephant step (item 28), with the exact stacks and a derivation procedure.
- **Content shapes:** `heroLede`, `aboutShort`, `education.short`, `status` and `hero.monogram` were added. The stat tiles keep `source` and `to`.
- **Layout:** the order is ScrollToTop, skip link, `.page`, then Rail last.
- **Hook and toggle:**
  - The store design and its values are fully specified.
  - The toggle keeps the fixed label "Pause motion", with `aria-pressed`, and is hidden through `usePrefersReducedMotion`.
  - There are 6 new tests, and setup.js cleans up after each test.
- **Mappings:**
  - The issuer mapping is now explicit.
  - The Pipeline colour becomes `text-muted`.
  - The Experience date becomes `text-ink-2`.
  - The "All" filter is neutral.
- **Verification:**
  - The visual check has pass criteria.
  - The contrast check names its OKLab threshold.
  - Each owner check has its own pass criterion.
  - The test total is stated (43).

## Round 2 (re-audit; cap reached)

Reviewers: egm-implementation-readiness and egm-codebase-details. Both completed.

- **Round 1 blockers:** R1, R2 and R3 are confirmed resolved against the code. The test totals (37, then 43) and every Phase 1 gate match were also verified.

### Round 2 findings and resolutions

- **Blocker:** Phase 1 gate 4 could not pass, because Tailwind emits only the screens it uses. It now checks the declared order in `theme.screens`.
- **Majors:**
  - **Locked list contradicted Phase 2:** the locked list now covers items 1-21 only, so the page files in item 22 are unlocked for their groups.
  - **Reading and stat-tile structure:** the root is exactly `stat tile`, the figure uses `.stat__num`, and the new `.stat__source` spans the full row. The `tone` prop is removed.
  - **Undefined classes:** `.status-row` and `.social` (44px) are defined in Phase 1, and the status row's children are listed.
  - **Port scope was ambiguous:** the global and element rules that are not ported are now listed. The asymmetric padding on `.btn--primary` is scoped to `:has(.btn__ico)`.
  - **Container plugin:** Tailwind's container plugin caps `--container`, so it is disabled (`corePlugins.container: false`).
  - **Footer name line:** the plan and the spec now agree. The full `profile.name` stays, in the body face.
- **Nits:**
  - **Gates and tests:**
    - lint added to the Phase 1 gate;
    - regex link names in test 1;
    - `vi.restoreAllMocks` in setup.
  - **Markup and styling:**
    - reveal fill mode;
    - portrait `sizes`;
    - hero button label and icon order;
    - hello and skill asterisks;
    - container wrappers;
    - bento aria-label;
    - unused icon imports removed.
  - **Wording and cleanup:**
    - vague edit lines changed to "no change expected; check screenshots";
    - CopyEmail dropped from the list;
    - `.trail-mark--current` kept;
    - the active nav underline kept.

Status: no open Blocker or Major findings. The re-audit cap is reached. Any nit that comes up during the build is handled in place and recorded in the drift report.
