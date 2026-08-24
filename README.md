# Harrier

Adjudication console for analysts at managed detection and response providers. One analyst carries 40 or more client tenants. An AI agent named Clerk assembles cases and files a draft verdict; the human rules on it.

Built as a design engineering case study. Rules of the project live in `CLAUDE.md`, the decision log lives in `docs/decisions.md`.

**Live: https://sergiodesign4u-dot.github.io/harrier/**
Stage 01: https://sergiodesign4u-dot.github.io/harrier/research/research.html
Stage 02: https://sergiodesign4u-dot.github.io/harrier/research/personas.html and https://sergiodesign4u-dot.github.io/harrier/research/jtbd.html
Stage 03a: https://sergiodesign4u-dot.github.io/harrier/ia/flows.html and https://sergiodesign4u-dot.github.io/harrier/ia/concept-map.html
Stage 03b: https://sergiodesign4u-dot.github.io/harrier/ia/sitemap.html and https://sergiodesign4u-dot.github.io/harrier/ia/structure.html
Stage 06: https://sergiodesign4u-dot.github.io/harrier/design/concept/concept.html and https://sergiodesign4u-dot.github.io/harrier/design/queue.html

## Status

| Stage | Status |
|---|---|
| Foundation Research | Done. 13 competitors read live, 20 screenshots, benchmark on calibrated trust across 4 out-of-category products, Lean UX Canvas, AARRR, 5 UX patterns with one chosen, critique in two instruments |
| User Research | Done. Two personas from three practitioner studies, 5 verbatim analyst quotes where stage 01 had none, one main job and four related, MVP core narrowed to three, critique on three instruments with 20 findings and one overlap |
| CJM (As-Is + To-Be) | Out of track. The shortened track runs 01 to 07. The steps of the journey are owned by the stage 03a user flow instead |
| Information Architecture (IA) | Done. Base layer: eleven entities, eight screens in six intent clusters, three user flows with states and semantic colour, traceability with no orphans. Detail layer: **46 nodes, 40 MVP, 23 with a written specification and a black-and-white mockup at 1440 and 360**, a block bank of nine page types from 19 pages opened in session, critique on **four** instruments including a reader with clean context, and one node orphan named rather than hidden |
| Wireframes | Done. 62 grey pages across 13 screens plus the hub, every state of the MVP map with a visible exit, the flow clickable in both directions, all look in one `_wf.css` and four inline declarations left, each used once. Critique on five instruments, second pass run, and 63 pages measured live at 1440, 1024 and a true 360. [Overview](https://sergiodesign4u-dot.github.io/harrier/wireframes/overview.html) &middot; [Case Queue](https://sergiodesign4u-dot.github.io/harrier/wireframes/queue.html) |
| Voice | Done. Every unique string in the product inventoried in two sections, 21 of them living only in `_nav.js`. Five principles with four fields each, tone by phase, a dictionary that rules 15 divergences, and 20 microcopy rules by element type. Text rewritten on all 62 pages plus the ten generators that build them, the reference screen accepted on screen and the fan-out closed at **13 screens returned of 13 built**. Critique on four instruments, 25 findings, two rejected on verification, three browser passes at 1440 and a measured 360. [Voice](https://sergiodesign4u-dot.github.io/harrier/voice/voice.html) &middot; [Case Queue](https://sergiodesign4u-dot.github.io/harrier/wireframes/queue.html) |
| Concept | Done. Nine brandbook plates over four rounds, resolved into one and chosen with the palette taken as **pixels** and checked against the plate's own stylesheet, which agreed at every role. Two Google Fonts chosen on a rendered comparison of four candidates each rather than on the name drawn on the plate. Three layout directions, one chosen against the recommendation with both debts recorded. Severity became a colour ramp, and **attribute A2 was amended in writing rather than stretched**. Three real screens coloured by a **remap** of the wireframe variables, at a **zero structural diff asserted byte for byte**, and the second screen cost one CSS rule while the third cost none. Critique in two instruments, and a third that was wrongly reported as unavailable and is re-run at stage 07: Codex returned 16 findings across five classes, 14 fixed and 2 accepted with the reason, and its two hardest were a contrast threshold reported as met when it was 2.997, and six components where the stand had drifted from the product. [Concept](https://sergiodesign4u-dot.github.io/harrier/design/concept/concept.html) &middot; [Case queue in colour](https://sergiodesign4u-dot.github.io/harrier/design/queue.html) &middot; [Case file](https://sergiodesign4u-dot.github.io/harrier/design/case.html) &middot; [Shift brief](https://sergiodesign4u-dot.github.io/harrier/design/shift.html) |
| UI + Visual | Not started |
| Tokens + Components | Not started |
| Design System | Not started |
| Responsive | Not started |
| Animation | Not started |
| Rollout | Not started |
| Handoff | Not started |
