# Stage 6: Comprehension Report

Target: `docs/designs/acid-split-redesign.md`. FeatureRange is 1-204 and DetailedRange is 205-393, both as of the review. Reviewer: egm-comprehension. Status: completed.

## What this proposes

The site moves from the "Console" theme to the near-black and acid-lime look of the approved hero "4B, Split": Anton display type, Instrument Serif italic, Archivo body text and a 12-point asterisk mark. Content lives in `src/data/` and colours come from tokens, so most of the work is:
- new token values;
- new element defaults and component classes;
- a fixed left rail on every page at 900px and up;
- a rebuilt Home hero with a portrait plate, rotating badge, rotating asterisk and a bento grid.

Category colour becomes lime plus three muted tints through `tones.js`. `BUILD_BRIEF.md` is rewritten. The work runs in three phases (foundation, parallel pages, tests), with verification by build, tests, lint, a literal scan, contrast, screenshots and the owner's checks.

## How the existing system works, per this document

The site is a data-driven React SPA. Content sits in `src/data/*.js`, and tokens live in `tokens.css`, which `tailwind.config.js` maps to role-named classes. `tones.js` maps the tones blue, green, violet and sky to class strings. Home has a typed `whoami` line, a `record` list, a duotone portrait, a SignalBar and a Readings band. `BUILD_BRIEF.md` holds the Hallmark rules. There are 37 tests.

## Findings

| # | Sev | Where | Finding |
|---|---|---|---|
| C1 | Major | CUJ 4 L71 | The category-to-tint mapping contradicts the token table and item 8. |
| C2 | Major | L131, L279, L372 | Rail "not rendered" contradicts "hidden by CSS", and this affects the jsdom test. |
| C3 | Major | L158, L318, L346-359 | "Banner header" is never defined (component, class or convention). |
| C4 | Major | L383-389 | The owner workflow checks are not defined and have no pass criteria. |
| C5 | Major | L41, L138, L243 | There are two greyscale mechanisms, and which elements carry `data-slot='portrait'` is not stated. |
| C6 | Nit | L22, L108, L224 | "Hallmark", "Floor" and "the person" are not defined. |
| C7 | Nit | L7, L389 | "EGM", "condensed" and "drift report" are not defined. |
| C8 | Nit | L267, L299 | Reading tone after the tone bar is removed is unclear, and the intel reading tone does not match the intel category. |
| C9 | Nit | L177-178 | The merge-risk claim is unexplained, and the rename rationale is circular. |
| C10 | Nit | L28, L378 | G2 points to G5 by mistake, and the impact on routes.test is unstated. |
| C11 | Nit | L265, L337 | The reason for the serif array is not stated, and the source of the `.btn-round` second line is missing. |
| C12 | Nit | L119, L141, L318, L382 | `--font-outlier`, SCA, "file lock list" and the iframe reason are not explained. |
