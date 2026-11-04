# Stage 7: Critic Report

Target: `docs/designs/acid-split-redesign.md`, FeatureRange lines 1-272. Reviewers: egm-design, egm-structural and egm-style. All three completed.

Totals: 1 Blocker (raised twice), 19 Major and 40 Nit, before deduplication.

## Blocker
- **S1 / D3:** there is no Risks & Mitigations section, which the feature-spec standard requires. Unaddressed risks: font-swap layout shift, continuous motion against WCAG 2.2.2, tints failing contrast or colour-blind separation, parallel-agent drift, legacy files, CSP compatibility, and the rail on short viewports.

## Major
- **D1:** `--color-focus` is omitted, so focus rings stay cyan. This breaks CUJ 3 and G1.
- **D2:** most `cool` usages colour measured values, not categories. A straight rename turns every date and path the infrastructure tint, which breaks G4.
- **D4:** the LCP claim is unsupported, because the clip-path reveal starts the portrait fully clipped. The 2-to-4 font swap has no CLS budget or fallback metrics.
- **D5:** the continuous badge and asterisk rotation needs a pause mechanism under WCAG 2.2.2. Reduced motion alone is not sufficient.
- **D6:** the nav uses the `md` (768px) breakpoint and the rail uses 900px. At 768-899px the profile links are unreachable. At 900-1100px the nav overflows.
- **D7:** the list of repealed BUILD_BRIEF rules is incomplete. Middle dots, status dots and shadows are not ruled on.
- **D8:** there is no data-model summary in the spec. The sources of the new copy are not cited, and the conflict between the stat label in the reference and in the data is unresolved.
- **D9:** the `[data-slot]` layout rules (overflow hidden, absolute img) clip the portrait shadow and collapse the box.
- **D10:** the saturated `ok` and `bad` colours contradict "lime only", and a lime-leaning `ok` collides with the category colour.
- **S2:** Alternatives C and D have no Pros, Cons or Reason fields.
- **S3:** the rail's departure from the reference (it reflows in place there) and the choice of self-hosted versus Google fonts are not analysed as alternatives.
- **S4:** Additional Resources and Future Improvements are nested under NFRs.
- **Y1:** "exactly four places" for uppercase is false, because the badge is also uppercase. "Never... except" contradicts itself.
- **Y2:** the colour constraint is called "bright", "saturated", "strong" and "loud" in different places. Use one term and tie it to chroma.
- **Y3:** "edited reference" has no defined target.
- **Y4:** Problem 4 states a decision, not a problem, and its sentence is hard to parse.
- **Y5:** "(item 7)" points outside the spec.
- **Y6:** "Footer: the same data" has an unclear antecedent.

## Nit (grouped)
- **Uppercase and hello line:**
  - the hello line is mixed case and does not use `.label`;
  - the badge text should be pinned, not built at runtime.
- **Motion:**
  - the wording around `.enter` and `.proportion` needs fixing;
  - the Reading comma kerning is tuned for mono;
  - the h1 needs explicit whitespace.
- **Behaviour and gates:**
  - the resume opens in two different ways;
  - the rail needs a short-viewport fallback;
  - the Lighthouse variance tolerance is missing;
  - the container width and reference width do not match;
  - tint ΔE separation is unstated.
- **Values and wording:**
  - the grayscale values differ from the reference;
  - the "both rule sets deleted" sentence is ambiguous;
  - the SignalBar tint classes are not in the rename list;
  - the usage count is inexact (the real figure is 51 usages in 12 files).
- **Structure:**
  - the horizontal rule is misplaced;
  - links to the same files are inconsistent;
  - the Banner definition contradicts the page scope;
  - the token table formatting is inconsistent;
  - heading names do not follow the standard.
- **Style:**
  - "and so on" is used where a full list belongs;
  - several phrasings are conversational;
  - one cause is speculation about OneDrive;
  - one claim cannot be verified as written;
  - there are intensifiers;
  - the date is repeated;
  - the font naming is inconsistent;
  - the Status field carries jargon.
