# Consolidated Goldfish Review: Acid Split Redesign

- **Target:** [`docs/designs/acid-split-redesign.md`](../../acid-split-redesign.md)
- **Mode:** consolidated (uninterrupted). Remediation was applied between stages, as the EGM stage-dependency rule requires.
- **Date:** 2026-11-03
- **Reviewers:**
  - Stage 5: zoom-out
  - Stage 6: comprehension
  - Stage 7: design, structural, style
  - Stage 8: zoom-out
  - Stage 9: implementation-readiness, codebase-details, style, plus a round-2 re-audit
- **Coverage:** all reviewers completed, and none was recorded as not run.

## Outcome

**The design doc is ready for implementation.** It has no open Blockers or Majors.

| Stage | Blocker | Major | Nit | Report |
|---|---|---|---|---|
| 5 Initial Zoom Out | 1 | 3 | 8 | [zoom_out_report.md](zoom_out_report.md) |
| 6 Comprehension | 0 | 5 | 7 | [comprehension_report.md](comprehension_report.md) |
| 7 Critic (design, structural, style) | 1 | 19 | ~40 | [critic_report.md](critic_report.md) |
| 8 Intermediate Zoom Out | 0 | 1 | 8 | [intermediate_zoom_out_report.md](intermediate_zoom_out_report.md) |
| 9 Implementation Readiness, round 1 | 3 | ~12 | ~30 | [implementation_readiness_report.md](implementation_readiness_report.md) |
| 9 Implementation Readiness, round 2 | 1 | 6 | ~15 | (same file) |

All findings were resolved. The fixes are logged in [remediation_log.md](remediation_log.md) and in the resolution section of each stage report.

## Owner decisions taken during review

1. **Category colour:** lime plus three muted tints (sage, stone, dusk).
2. **Left rail:** shown on every page from 900px.
3. **Doc process:** a condensed doc, followed by a consolidated review.
4. **Continuous motion (WCAG 2.2.2):** a pause button that remembers the visitor's choice, and also pauses while the pointer hovers.

## Key changes the review drove (traceability)

| Raised by | Action item | Where in the doc |
|---|---|---|
| Z1, R1, R2 | Phasing that keeps the build green at every gate: Phase 1 does the mechanical page renames, the old fields stay until Phase 3, and SignalBar is deleted last | Implementation Plan, phase gates and items 22, 29, 30 |
| Z3, C5, D9 | One portrait filter rule. The duotone and its override are deleted. The shadow and the reveal sit on the portrait wrapper. | Photographs; item 5 |
| Z4, D2 | Tint tokens renamed. Measured values become neutral. Tints are allowed only in `tones.js`. | Design tokens; G4; tint scan |
| S1, D3 | A Risks and Mitigations section | Risks and Mitigations |
| D1 | Lime focus token | Token table |
| D4, I4 | The portrait is never clipped, protecting LCP. CLS and LCP budgets are set. Fallback fonts are added only if CLS fails. | Motion; Fonts; item 28 |
| D5 (owner) | The motion pause control and its tests | Motion pause; items 6, 7; tests 3-6 |
| D6, I1 | Ordered Tailwind screens (rail 900px, nav 1100px), and the container plugin disabled | Shell breakpoints; item 4 |
| D7 | A verdict on each of the old BUILD_BRIEF rules | Rule changes |
| D8, readiness | Data model table with a source for each field: the bold-text shapes, `education.short` and `status` | Data model changes |
| Readiness M3/M4 | The full reference port, with a rename table, a list of rules not ported, and the new classes | Item 5 |
| Readiness M10 | `--radius-round` added, so the radius of existing `rounded-pill` users stays the same | Token table |
