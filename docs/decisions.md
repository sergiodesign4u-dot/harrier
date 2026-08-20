# Decision log

What we did, why it was done this way, what was rejected and on what grounds. Newest entry on top, each one dated. This file is never loaded into a session automatically; it is read when the grounds for a decision need to be recalled. Rules that must hold every session belong in `CLAUDE.md`, not here.

## 2026-08-20 - Stage 01 closed, and what left CLAUDE.md

Added as rules: the strategic dimension, the riskiest assumption, the chosen UX pattern with its `CONDITIONAL` mark, the corrected differentiation (earned autonomy per tenant and visible across the fleet, not earned autonomy as such), and a new rule of evidence about product premises.

Removed, and this was half the work. The eight-bullet MVP scope became a pointer: the canonical list lives in `research.md` section 2, and a second copy is the one that goes stale. The six-line Goal block went out as description rather than rule; `research.md` section 1 holds it better. Business model shrank from three lines to one plus a contested marker. Geo and compliance kept only the line that shapes the design, the append-only log with an evidence snapshot.

Budget: 74 lines to 68. The point was not the six lines saved but the eighteen that would have drifted from their source.

## 2026-08-20 - Sidebar muted colour failed WCAG AA, caught by the contract checklist

The stage-10 instruction to check panel contrast against WCAG AA had not been run. Measured after the fact: `--nav-muted #9aa0a6` on `#fbfbfa` gave 2.55:1 against a 4.5:1 requirement, so SOON badges and dimmed roadmap entries were below the line. Raised to `#6b7176`, 4.77:1. The same token fed `--faint` on both pages, so three files changed.

Worth recording because of how it was found. Neither critique instrument could see it: the browser pass looks at what was drawn and Codex at what was written, and a step that never happened exists in neither. Only reading the stage contract as a checklist surfaces it, which is the argument for keeping that third pass even when everything looks green.

## 2026-08-20 - Stage 01 critique, two instruments, 17 findings

Codex ran read-only over `research/docs` and returned 12 findings. A separate Claude pass ran on a class Codex cannot reach, conclusions whose chain back to a fact is broken, and returned 5. Zero overlap between the two sets.

Sixteen confirmed and fixed. One removed on verification: Codex flagged Expel's 15-month retention as unsourced at `competitors.md:33`; on re-reading, the source is the docs.expel.io page cited in the same table row and the text is visible in the cited screenshot. Codex read a text snapshot and could not see the screenshot.

The heaviest finding was a contradiction between files. `competitors.md` honestly recorded `[?]` on whether any competitor has a per-tenant trust level inside the product, since the consoles are behind login. `research.md` had promoted that unknown to a flat statement that Simbian sells one policy across all tenants, in two places, and the product's main differentiation gap rested on it. Now downgraded in both places to what a pre-login pass can actually establish: what is sold and shown publicly.

What the Claude pass systematically misses: four of Codex's findings were unsourced **premises of our own product**, tenants per analyst, how MDR margin works, who carries liability, the analyst profile. They are invisible to a self-audit because they were decisions when written and read as context afterwards. All are now marked `PREMISE` where they appear.

## 2026-08-20 - Chosen UX pattern: split-pane review, four rejected

Considered five structurally different patterns: split-pane review, focused card stack, fleet map with drill-down, conversational agent workspace, command-driven console. Full analysis in `research/docs/ux-patterns.md`.

Chose split-pane review with the fleet as the resting state of the detail pane. Rejected the card stack because it removes any sense of the whole, which for an operator responsible for forty clients is a loss of the job rather than a side effect; held as the alternative if the first test shows a persistent list invites browsing over deciding. Rejected the fleet map because it answers where and then abandons the operator at the moment of deciding, and forty tenants is too few to need a map. Rejected the command-driven console because in triage the whole problem is discovering what deserves attention, and a blank prompt cannot answer that; kept as an accelerator on top. Rejected chat as the spine because it inverts the product contract, has no scannable state and cannot carry a queue; chat inside the case file is not rejected.

Only one of the three reasons for the chosen pattern rests on evidence collected this session. The other two rest on unverified behavioural inferences, and the choice is marked conditional on stage 02.

## 2026-08-20 - Benchmark dimension: calibrated trust, and why these four products

Chose calibrated trust in an automated agent over defensibility of a decision and speed under volume, on the argument that both of those are consequences of trust. That causal argument is reasoning, not a finding, and is now labelled as such in `benchmark.md`.

Benchmarked outside security entirely: Waymo for a published track record and for pairing every percentage with an absolute count, the NWS probability of precipitation for a confidence number defined by three mandatory qualifiers, the aviation Flight Mode Annunciator for mode legibility and for override as its own annunciated state, and Stockfish on Lichess for a provenance strip that separates how sure from how hard it looked. A fifth candidate, clinical triage AI at aidoc.com, was opened and dropped because the public pages carry solution marketing and no examinable mechanism.

## 2026-08-20 - Competitor set: thirteen products, three groups

HARD picked for being multi-tenant AI SOC or the incumbent analyst console: Simbian, Prophet Security, Dropzone AI, Expel, Intezer. Critical Start and Radiant Security held on the bench and not needed. SOFT picked by holding the job constant and changing the domain, one operator ruling on machine-prepared cases across many accounts: Sift, Alloy, Intercom Copilot, PagerDuty. ASPIRATIONAL picked for solving one part of the problem better than security does: Linear, Cursor, Datadog Cloud SIEM, Superhuman.

Collection guardrail held throughout: public and pre-login pages only, no accounts created. All five HARD consoles sit behind login, so interface evidence came from documentation and help centres. Only two working interfaces were readable anywhere: Expel Workbench and the PagerDuty Operations Console.

## 2026-08-20 - `_nav.js` and `_nav.css` keep em dashes in their comments

The project rule bans em dashes in output files. These two files are inserted verbatim from the pipeline pack, which states the code must not be edited. The dashes sit in Ukrainian source comments, never in rendered product copy. Rejected: rewriting the comments, which would fork the file from its source and make the next pack update a manual merge.

## 2026-08-20 - Autonomy is a per-tenant setting, not a product-wide threshold

Each client tenant sits somewhere between "Clerk closes nothing" and "Clerk closes benign cases and shows a sample". The level moves as measured accuracy on that tenant earns it. Rejected: a single confidence threshold across the product, which is simpler to explain but turns multi-tenancy into decoration, since a regional bank and a dental group would then live under one rule. Rejected: no autonomy at all, which is honest for a regulator but does not answer the volume problem that MDR providers actually have.

## 2026-08-20 - The AI agent is named Clerk

A clerk prepares the case file and drafts the opinion; the judge rules. The name carries the product contract, so the interface does not have to keep restating that the agent never decides. Rejected: a generic "AI Assistant" label, which says nothing about the boundary of the agent's authority.

## 2026-08-20 - Domain is MDR / SOC, product is invented (Option B)

Chosen deliberately adjacent to Flamingo's market rather than inside it. Flamingo's OpenFrame serves MSPs and its Mingo agent does alert triage, so everything said about triage, trust in an agent and human override reads as understanding of their market. But the product is not a copy of OpenFrame, so it will not be compared screen for screen. Rejected: MSP IT operations, too close for comfort. Rejected: fraud and AML operations, a strong story about accountability but far from their world.

## 2026-08-20 - Shortened pipeline track, 01 to 07

The deliverable is two screens plus a written response, so the track runs Research, User Research, IA base, Wireframes, Voice, Concept, UI + Visual and stops. Stages 08 to 13 would produce a token architecture and a design system that the deliverable has no reader for.
