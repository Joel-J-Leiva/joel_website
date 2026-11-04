# Remediation applied between stages (Elephant)

Applied after Stages 5 and 6, before Stage 7. Each line gives the finding, then the resolution.

- **Z1** (SignalBar used by 7 pages): `SignalBar` now stays through Phase 1. Each Phase 2 group replaces it with the new `PageHeader`. Phase 3 item 25 deletes it once `rg -n SignalBar src` returns nothing.
- **Z2** (duplicate filter colour channel): `vars` is dropped. The existing `tones[x].pressed` class string is kept, and the `.filter` pressed rule is made neutral. Recorded as Alternative E.
- **Z3 and C5** (photo filters): the duotone in base.css and its override in index.css are both deleted. One rule, `[data-slot='portrait'] > img`, is added, and the two elements that carry it (Home plate, About figure) are named. All other photos stay in colour.
- **Z4 and C9** (tint names): the tokens are renamed `cool` to `sage`, `violet` to `dusk` and `sky` to `stone`, at token, Tailwind and usage level. The real cost (about 20 usages across 11 files) is stated. The merge-risk claim is removed.
- **Z5 and C1** (category mapping): CUJ 4 now states the mapping explicitly, matching the token table and `tones.js`.
- **Z6 and C11** (hero data): the hero data reuses `location`, `shortName`, `org` and `education`. The serif line is a single string, with the `&` wrapped in JSX. `projectsNote` is added for the second line of `.btn-round`.
- **Z7 and C8** (reading tones): `tone` is removed from `profile.readings`. `Reading` keeps an optional `tone` only for the colour of its source line, which Achievements uses.
- **Z8** (comment location): the index.css header comment block is named in item 5.
- **Z9** (uppercase rule): `.brand` is added as an allowed uppercase exception. The redundant `h2` classes are removed from Footer, and a "no added font classes on `h2`" rule is added.
- **Z10 and C2** (rail rendering): the rail is always rendered and hidden by CSS below 900px. jsdom tests see it.
- **Z11** (duplicated reference values): a new "Source of truth for exact values" section says the reference rules; most duplicated values are removed.
- **Z12** (repeated profile links): a new `ProfileLinks` component is used by Rail, Nav, Home status and Close.
- **C3** (Banner header undefined): it is defined in Terms and under Inner pages, and `PageHeader` is a component (item 7). The pages that use it and the two that do not are listed.
- **C4** (verification checks undefined): each owner check is now defined with a pass criterion.
- **C6, C7 and C12** (jargon): Terms covers Hallmark, EGM, SCA, Banner header and parallel groups. `--font-outlier` and the iframe reason are explained.
- **C10** (G2 reference): G2 is fixed, and it states that routes.test needs no change.

## After Stage 7 (critic review)

**Owner decision:** use a pause button for the continuous motion (WCAG 2.2.2). The design adds `useMotionPause`, `MotionToggle`, CUJ 3 and CUJ 4, and a test.

| Finding | Resolution |
| --- | --- |
| Blocker S1 / D3 | Added a "Risks and Mitigations" section (10 risks). |
| D1 | `--color-focus` is now lime. The `success`/`error` aliases point at `ok`/`bad`. |
| D2 | Measured values move to `text-ink-2`. Tints are allowed only in `tones.js`, enforced by a tint scan. `.chip--instrument` becomes neutral. |
| D4 | LCP: the reveal is now a `::after` overlay, so the image is never clipped. Fonts: metric-matched fallback faces. Budgets set at CLS of 0.1 or less and LCP of 2.5s or less. |
| D5 | Pause control, per the owner's choice. |
| D6 | Tailwind screens `rail` (900px) and `nav` (1100px), with a breakpoint table. Links are reachable at every width. |
| D7 | Added a "Rule changes" table with a verdict on each of the 12 old rules. |
| D8 | Added a "Data model changes" table with a source for each field. Data labels win over reference labels. |
| D9 | The portrait wrapper carries `aspect-[2/3]`, and the shadow sits on the parent `.photo`. |
| D10 | `ok` is now teal `oklch(76% 0.09 175)` and `bad` is `oklch(70% 0.16 25)`. G1 and Terms state the exception. |
| S2 | Alternatives C and D now have Pros, Cons and Reason fields. |
| S3 | Added Alternative F (the rail reflow) and Alternative G (self-hosted fonts). |
| S4 | Additional Resources and Future Improvements are now H2. The horizontal rule moved to just before the implementation plan. |
| Y1–Y6 | Wording fixes: <ul><li>uppercase list, including the badge;</li><li>"saturated colour" defined once in Terms;</li><li>"edited reference" removed;</li><li>Problem 4 reworded;</li><li>spec text no longer refers to item numbers;</li><li>the footer data source named.</li></ul> |
| Nits | <ul><li>Behaviour: the hello line is mixed case; the badge string is pinned; the motion wording is fixed; the comma tightening is removed; the h1 has explicit spaces; the two resume behaviours are explained; the rail scrolls on short screens.</li><li>Measurement: the Lighthouse check is the median of 3 runs with a tolerance; the container matches the reference at 1320px; the OKLab tint distance is at least 0.05; the grayscale values come from the reference; the duotone deletion scope is stated; SignalBar is updated in Phase 1; the usage count is exact (51 in 12 files).</li><li>Doc style: the Banner pages are listed; the type and shape tokens are in a table; the heading is now "Proposed Architecture"; the date is recorded once; the jargon in Status is removed; the intensifiers are removed; the OneDrive cause is marked unverified.</li></ul> |
