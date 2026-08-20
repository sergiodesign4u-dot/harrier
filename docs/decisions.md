# Decision log

What we did, why it was done this way, what was rejected and on what grounds. Newest entry on top, each one dated. This file is never loaded into a session automatically; it is read when the grounds for a decision need to be recalled. Rules that must hold every session belong in `CLAUDE.md`, not here.

## 2026-08-21 - Stage 02 closed, and what left CLAUDE.md

Deleted as chronicle rather than rule: "Prophet Security already sells it" and "Codex found four; the first pass found none". Both describe how we arrived somewhere; the rules stand without them and the stories live here.

Deleted as refuted: "What no competitor found does is make earned trust per client and readable at a glance across all of them." Stage 02 disproved the first half. A false rule is worse than a missing one, because a rule gets followed.

Deleted by the ballast test: the analyst's age band, "26 to 40", which produced no design consequence anywhere in stage 02, and "10-hour shifts", which no source supports and which one interviewed responder contradicts with 12. Demography without a consequence is not written.

Added: a People block carrying primary persona, main job, MVP core and the conflict rule, because stages 03a, 04 and 07 read those four things and nothing else settles a tie between personas. CLAUDE.md went from 69 to 82 lines against a 200 ceiling.

## 2026-08-21 - The differentiator narrowed a second time, and what is left is a design claim

Stage 01 recorded that whether any competitor carries a per-tenant trust level inside the product was `[?]`, because the consoles sit behind login. Simbian publishes it on a public page: four named autonomy modes (Read-only, Dry-run, Guided, Autopilot), latitude earned "on this specific action, on this specific alert type, inside these specific guardrails", progression that "is not linear and not global", and for MSSP and MDR deployments "per-tenant autonomy configuration".

Prophet took "earned" at stage 01. Simbian takes "per tenant" at stage 02.

What survives: nothing found publishes the fleet as a readable operator surface. Simbian's per-tenant autonomy is configuration; ours has to be a view. That moves the differentiator from a capability claim to a design claim, which means stages 04 and 07 now carry all of it. If the fleet does not read at a glance there is nothing left.

Two side effects. Open question 6 is resolved by the market: two products ship named lanes, none ships a slider. Open question 4 is resolved as "both": Defender ships an ML-scored ordering that explains its own reasoning and saved filter sets, so treating those as alternatives was our framing rather than the market's.

## 2026-08-21 - A quote was attributed to a paper that does not contain it

R1 cited the UCL handover study for "you spend your first hour rediscovering context someone else already had". The phrase is not in that paper; "first hour", "rediscovering context" and "rediscover" are all absent. It came from a search tool's one-sentence summary of a blog that was never opened, and it was signed with a source that had been.

The existing rule of evidence did not catch it, and could not: it requires facts to come from a page opened in the session, and the cited page had been opened. The failure was laundering a summary through a real source.

New rule: a search-result summary is not a source. Open the page or mark it `[?]`.

The job survived on three real quotes from the same study. The false attribution is recorded above the job in `jtbd.md` rather than deleted, because a defect removed silently returns in the same words.

## 2026-08-21 - Follow-up research was moved ahead of drafting the personas

The pack schedules follow-up research at Step 6, after personas exist. It ran before Step 2 instead.

Reason: a persona built on premise and patched afterwards keeps its shape. A patch fixes wording, not the split. If real practitioners group differently from the way we would group them from the brief, that has to be visible before the split, not after.

It paid. Four sources, three of them studies of practitioners, replaced four premises with measurements, corrected two stage 01 decisions about the shift handoff, and supplied the first verbatim SOC analyst quotes in the project. The persona split that came out (behaviour, not seniority) was not the one the brief implied.

## 2026-08-21 - The steps of the journey belong to the stage 03a user flow

Related jobs in this pipeline are adjacent tasks, and the steps toward the main job are CJM phases. The shortened track has no CJM, so those steps would have had no owner.

They are assigned to `ia/flows.html` at stage 03a, which already has to describe the path to the activation node. Recorded so stage 03a knows what it inherited, and so the related jobs are not read as a sequence.

## 2026-08-21 - The MVP core is two qualified jobs and one named bet

The rule was: important to the primary persona and not closed by the market. Two jobs qualified, ruling on the case and the shift handoff. The third slot was not filled with invented importance.

The fleet job entered as a declared exception, because a core of the first two is a good residual queue with a good handoff and the market gap does not distinguish that product. It is also H1, the riskiest hypothesis in the project, so the core holds the risk in the open rather than hiding it. If H1 falls, this is the job that leaves.

## 2026-08-21 - Shared page stylesheet, and CJM marked out of track in the registry

`research/_page.css` was extracted from `research.html` and is now read by all three research pages. Three copies of the theme tokens would have diverged first and been noticed last.

Separately, the sidebar was putting its `Next` badge on CJM As-Is, which this track does not build, so the roadmap was lying about what comes next. Pages can now carry `skip:true`, which the renderer treats as neither done nor pending and badges `OFF`. README says "Out of track" rather than "Not started".

## 2026-08-21 - `codex exec` piped into `tail` returns nothing

The first Codex critique run stayed alive for fifteen minutes and produced zero bytes, because the pipeline buffered everything until exit and the process never got there. Rerunning with output redirected straight to a file worked and produced ten findings.

Recorded because the pipeline rule says an unavailable Codex means stopping and asking, and the failure looked exactly like unavailability while being a plumbing problem.

## 2026-08-20 - `.nojekyll` in the repository root, and why acceptance on localhost is not acceptance

GitHub Pages runs Jekyll by default, and Jekyll silently drops any file or directory whose name starts with an underscore. `/_nav.css` and `/_nav.js` were therefore never built, and both returned 404 on the live site while every page returned 200. The sidebar did not render at all in production: no roadmap, no badges, no section links, just the content column.

Nothing showed this locally. The `python3 -m http.server` used for acceptance serves the tree as-is, so every check passed there. This is a rule-of-evidence failure, not a hosting accident: acceptance was run against an instrument that could not reproduce the defect, which is the same class of mistake as measuring 360px in a 375px viewport.

Fixed by adding an empty `.nojekyll` to the repository root, which disables Jekyll processing and serves files verbatim. Verified in a browser against the live URL, not the local one: 13 roadmap items, Foundation Research active, Next on User Research, 9 section links, 20 images loaded, muted colour resolving to `rgb(107, 113, 118)`, so the WCAG fix reached production too.

Standing consequence for every later stage: this project's navigation lives in underscore-prefixed files at the root, and stage pages are only accepted after the **live** URL has been opened in a browser. The one remaining console error site-wide is a 404 on `/favicon.ico`, which stage 06 will resolve.

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
