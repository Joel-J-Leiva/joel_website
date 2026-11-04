# Stage 5: Initial Zoom Out Report

Target: `docs/designs/acid-split-redesign.md` (full file, lines 1-393). Reviewer: egm-zoom-out. Status: completed.

Verdict: Context is sufficient, the doc addresses the root problem, and token-level restyling is the minimal approach. Findings: 1 Blocker, 3 Major, 8 Nit.

| # | Sev | Where | Finding | Proposed fix |
|---|---|---|---|---|
| Z1 | Blocker | Item 7, L207/254/341 | `SignalBar` is imported by 7 pages (Home, Projects, About, Experience, Achievements, Contact, Photography), not only Home. Deleting it in Phase 1 breaks the build until all of Phase 2 lands. | Delete it as a final step after Phase 2, or add the removal to every Phase 2 group and to the Banner pattern. |
| Z2 | Major | Item 8 L259, Item 5 L239, Item 20 L347 | The new `vars` / `--tone` inline mechanism duplicates the existing `tones[x].pressed` class string that Projects.jsx:42 already uses. | Keep `pressed`, drop `vars`, and remove or neutralise the hard-coded `cool-soft` pressed rule at index.css:120. |
| Z3 | Major | Item 3 L224, Item 5 L243, Non-Goal L41 | base.css:26-29 still applies a duotone that index.css:196-200 overrides. Deleting the override brings the duotone back to project and archive photos. | Delete the base.css duotone rules, keep only the portrait grayscale rule, and drop BUILD_BRIEF rule 12. |
| Z4 | Major | Alt B L174-178, token table, Item 8 | `violet` and `sky` are colour names, not roles, so this creates a 3-step indirection. The cost estimate is overstated (about 20 usages across 11 files, not about 90), and the merge-risk claim is not real. | Rename the `violet` and `sky` tokens to `dusk` and `stone` too, or state that the names are legacy. |
| Z5 | Nit | CUJ 4 L71 | The home lab and threat intel tint mapping contradicts the token table. | Use one mapping everywhere. |
| Z6 | Nit | Item 9 L265 | `hero.place` duplicates `profile.location`. The hello and badge text can be built from `shortName`. Splitting the serif line into an array puts presentation into data. | Reuse the existing fields, keep the serif line as a string, and colour the `&` in JSX. |
| Z7 | Nit | Item 9 L267, Item 15 L299 | The reading tones are unused once the tone bar is removed. | State what tone does, or drop it. |
| Z8 | Nit | Item 3 L224 | The Hallmark comment block is in the index.css header (L1-18), not in base.css. | Point item 5 at the index.css header. |
| Z9 | Nit | Item 13 L289, Item 14, rule L323 | The brand's `uppercase` breaks the new uppercase rule. The footer `h2.font-serif italic` is redundant with base CSS. | Add a brand exception or class, and drop the redundant classes. |
| Z10 | Nit | L131 vs Item 11 L279 | "Not rendered" contradicts "hidden through CSS" below 900px. | Pick CSS hiding. |
| Z11 | Nit | L121-153, Items 5-6 | Exact values from the reference are repeated, giving two sources of truth. | Say "port from reference" and list only the deliberate departures. |
| Z12 | Nit (optional) | Rail, Nav, Footer, Close | The three profile links are written by hand in 4 places. | Optionally add one shared list. |
