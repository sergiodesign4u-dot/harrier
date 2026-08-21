# Decision log

What we did, why it was done this way, what was rejected and on what grounds. Newest entry on top, each one dated. This file is never loaded into a session automatically; it is read when the grounds for a decision need to be recalled. Rules that must hold every session belong in `CLAUDE.md`, not here.

## 2026-08-21 - Two of the eight screens were never screens, and the node map says so

Eight screens became forty six nodes because a dialog you have to design and a state you have to survive cost the same as a screen. The two that changed shape rather than multiplying are the ones the case turns on.

**The fleet is a section, not a screen.** 3.5 has no route and never gets one. A route would give it a tap, and costing zero taps is the entire reason it is the resting state of the pane rather than a menu item. Rejected: a `/fleet` route "for a permalink", which would have made the differentiator a place you go.

**The case file is one screen in two renderings.** 4.1 is the detail pane, 4.2 is the standalone route. They share three canonical components defined once at 4.1. Rejected: writing 4.2 as its own specification, which is how three editions of a provenance strip start.

## 2026-08-21 - The block bank has one honest hole, and it is the domain half of type C

Composition came from a bank built per page type, two sources per type: competitors for domain truth, Refero for craft. Nineteen pages were opened in session.

**Type C, the shift digest, has no domain reference at all.** No competitor publishes a shift handover page outside a login, and we do not log in. The option taken, after showing three: leave it on named own research with the barrier stated in the comparison column, rather than hunting cross-industry analogues that answer a different question or cutting the type. What that costs is recorded in `blocks.md` rather than smoothed over.

**A related claim was corrected during the stage.** Earlier text said no competitor publishes pages of these types outside a login at all. Vendor documentation publishes real product screenshots, which is where most of the bank came from, so the claim was wrong and is now narrowed to type C.

## 2026-08-21 - A fourth critique instrument: a reader with clean context, given the next stage's real task

Three instruments were already running: Codex on the source, the browser on the render, the stage contract as a checklist. All three read what exists, so none of them can see a specification that is complete and still not enough to draw from.

The fourth is a subagent with no history of the project, given stage 04's actual job rather than "find defects". With "find defects" it correlates with Codex and returns the same list. It was allowed the repository, `CLAUDE.md` and `AGENTS.md`, and denied the chat and the critique log.

**It returned 44 items it could not determine.** Roughly twenty were correctly recorded open questions, which is the system working. The rest were four contradictions and eleven missing rules, and every one had been read past by all three earlier instruments. Verification on its lines weighs triple, and it earned that: none of its four contradictions failed verification.

## 2026-08-21 - The frame after a verdict is filed, and why the row does not vanish

Two nodes described the same moment and could not both be drawn. 3.1 promised the selection is held including after a verdict is filed; 8.4 said the row leaves the queue and that is the feedback. Neither said what the pane does, and it is the most important moment in the product.

**Settled at 3.1 because that node owns the list.** The row stays in place and changes to decided. It leaves only when the selection moves off it. The pane holds the case, states the outcome, and does not advance on its own.

Rejected, and each for a reason rather than a taste: vanishing on the keystroke, because it takes the analyst's place in the list with it and removes the only evidence that the right case was ruled on; advancing the pane, because forty cases with the pane jumping ahead makes the next case arrive before the last one is understood, and principle 3 wants the override cheap, not the acceptance automatic; a toast, which 8.4 had already refused and now refuses for a better reason.

## 2026-08-21 - One vocabulary for latitude, two axes that compose

0.3 said `Read-only / Dry-run / Guided / Autopilot`, 3.5 listed action classes, 4.1 said `Acts alone / Asks first / Never`. 0.6 forbids exactly this in its own words, and the split made 3.5's hard constraint undrawable: the annunciator counted levels while the fleet listed classes, so the two could not be compared even in principle.

**Resolved as two axes that compose:** the action class from 0.6, and one of three levels. Every surface says `acts alone up to <class>`. Simbian's four words go back to being a quotation, with three of them mapping onto ours and `Dry-run` having no equivalent because it is a rollout mode rather than a latitude.

## 2026-08-21 - 0.8 Reading conventions, and the rule that numbers in a wireframe are fixtures

Five things every surface renders had no definition anywhere: severity, time, effort, state chips, and the fixtures the mockups are drawn with. Each node was internally consistent and the set was not enough to draw from.

They became a node rather than eleven scattered edits, for the same reason 0.6 and 0.7 are nodes: several surfaces read them, so they are defined once and referenced.

**The drift was measured before the canon was written**, and the measurement found more than the reader had. Twelve tenant names across fourteen mockups, five of them second names for a client already in the set. `1h 03m`, two units and a leading zero, in both renderings. A selected row in a wireframe whose own caption said nothing was selected.

**The rule the node exists to state:** numbers in a wireframe are fixtures, not findings. Sample content chosen to make a layout decidable, never quotable as evidence, and required to be internally consistent across every surface that shows them. It is the project's rule about written claims, applied to the drawings, because the drawings are what stage 07 puts in colour and colour is what people believe.

## 2026-08-21 - One stage panel, one registry, two jobs

The stage started with the roadmap in the sidebar of every IA page and the nodes as chips on the hub only, which meant node to node was two clicks through the hub.

**Changed:** every page under `ia/` renders the stage panel and none renders the roadmap. `ia/_nav.js` does both jobs from one record, the panel and the hub chips. The hub is not an exception; it is an item of its own panel. The way back out of the stage is the first panel item.

Two panels on one page give two left gutters and the text slides under one of them, which is why this is exclusive rather than additive. The root `/_nav.js` stays the owner of stage status and is not included on IA pages.

## 2026-08-21 - An out of scope tenant renders 8.1, not 8.3, and that emptied 8.3

Three files routed a tenant outside the analyst's provider scope to 8.3 permission denied, while 8.1, 3.1, 4.1, 1.1 and 3.6 all required 8.1. 0.1 had argued it explicitly: an empty result is indistinguishable from a quiet client.

**Corrected upward in all three.** A permission error confirms the tenant exists, so a URL becomes an enumeration tool for other providers' clients. That removed 8.3's last three routes, so 8.3 moved to LATER. What is left for it is a refusal by role on a resource she can see exists, and the first one lives in cluster 7.

## 2026-08-21 - The keyboard path costs one more keystroke than the mouse, on purpose

Recounted at the close of the stage from the tree rather than from the concept sketch. Accept is two taps with a mouse and three keystrokes: arrows read, `Enter` decides, then the verdict key.

**The third keystroke is an interlock.** A click names its target and a keystroke does not, so without it `A` pressed while scanning forty rows files a verdict into an append only log with no undo. It is also what makes single letter verdict keys legal: WCAG SC 2.1.4 allows a character key shortcut only if it can be turned off, remapped, or is active only on focus, and this is the third condition and the cheapest of the three.

**The measurement also produced a finding rather than a reassurance.** Rejecting costs four taps against accepting's two, and design principle 3 says override must cost less than acceptance. Two of the extra steps are the teaching, which is the half of the principle worth collecting, so the count is handed to stage 04 as a constraint on how 4.4 is drawn rather than deleted.

## 2026-08-21 - Stage 03a closed, and what left CLAUDE.md

Deleted as no longer accurate: "Two screens go to full colour: Case Queue (main dashboard) and Case File (AI-assisted case view)." The information architecture established that Case File is the detail pane of the queue plus a standalone route, not a second page. Left as written, stage 04 would have drawn two pages.

Nothing was deleted as chronicle this round, because the stage 02 ritual had already swept it. That is reported rather than dressed up: a ritual that always finds something to cut is being performed rather than run.

Kept after being considered for deletion: the tech stack hypothesis. It earned its place this stage. Server-sent events for the live queue is what produced the screen state "connection lost, the queue is stale and says so", and a hypothesis that yields a screen state is no longer decoration.

Added: a Structure block carrying the six intent clusters, the main flow, the global navigation, the depth in taps, and three rules that bind stages 04 and 07. CLAUDE.md went from 82 to 99 lines against a 200 ceiling.

## 2026-08-21 - Why the clusters are these six, and what was rejected

Screens were grouped by what the person is trying to do, not by sections of a product. Two alternatives were rejected.

**By object**, a screen per entity: cases, tenants, grants, summaries. Rejected because eleven entities against a boundary of roughly nine screens forces a screen per object, and the analyst's work does not decompose that way. Ruling on a case touches four objects at once.

**By competitor menu**, the shape Expel and Defender ship. Rejected on the entry gate rule: structure comes from jobs. Their menus are also built for a single tenant at a time, which is the thing this product argues with.

The six that survived are named as verbs because the cluster has to answer "what am I here to do", and a noun cannot.

## 2026-08-21 - The fleet has no menu item, and what that cost

The fleet is the resting state of the queue's right pane, so it costs zero taps: it is already on screen when nothing is selected. A menu item would make it a place you travel to, and the point is that checking it should not be a trip.

Paid for it in three places, all recorded rather than discovered later: the way back to the fleet is a deselection rather than a navigation, which is a discoverability risk handed to stage 04; the secondary persona's action sits at level three; and the client summary ends up far from the case it grows out of.

The two-tap figure for the start-of-shift path does not rest on trimming a menu. It rests on the handoff being signposting into cases rather than a document, which four of six interviewed responders described. Had the handoff stayed the prose document the original stage 01 decision described, that path would be three taps.

## 2026-08-21 - F1 is deferred while B2 stays in the MVP, and why that is the whole differentiator

Tenant autonomy, the screen where latitude is changed, is scoped LATER. The fleet, the screen where latitude is read, is in the MVP.

This is what is left of the differentiator after stage 02 put into structure rather than into a sentence. Simbian publishes per-tenant autonomy configuration; what nothing found publishes is the fleet as a readable operator surface. Their version is configuration. Ours has to be a view.

It also matches the evidence about who moves latitude: Simbian says "L3 analysts keep containment authority", and whether the control belongs in an operator console at all is still open.

The traceability matrix then sharpened the bet further, and from counting cells rather than from thinking harder: B2 is on the primary persona's landing screen and carries no tick from any job of hers. The explanation is HJ1, a hypothesis assigned to her, which the matrix does not include because it carries only functional jobs. So the bet is not that an analyst will change latitude from the console. It is that seeing where latitude stands changes the decisions they make on cases.

## 2026-08-21 - Two critiques, eighteen findings, and one divergence settled on evidence

Critique #1 hunted defects. Critique #2 checked that the first round's fixes had not broken anything next door. The second round earned its keep twice over.

**The divergence.** Claude called the three red dead ends a defect; Codex called them deliberate. Neither was voted down. Re-reading settled it: the prose beside the nodes already promised that "the analyst can still escalate", and the diagram had no such edge. The file contradicted itself, so the nodes kept their red, because the job still fails, and gained the exit the prose had already promised.

**The fix that created a defect.** Adding an error state for a verdict that does not write produced an unbounded retry loop on the most critical operation in the product. Only the second round could see it, because it did not exist before the first.

**The finding one instrument could not have made.** The activation node was renamed `Filed` to `File` while adding the write check, and the prose was not updated. Claude's own consequence pass missed it because that pass checked structure and not names. Codex reached into that axis and found it.

**What the exits then required.** Two dead ends given a way out left cases in conditions nothing on the map could display. `escalated` and `unrecorded` became named case states, and a recorded gap became a named log action, because a case that left the analyst's hands and looks identical to one that did not is worse than no escalation at all.

## 2026-08-21 - The detail layer is out of track, and the registry now says so

Stage 03b would have produced the node-level sitemap and the structure hub. The shortened track runs 01 to 07 and does not include it.

Left alone, the sidebar would have put its Next badge on Sitemap, the same way it had pointed at CJM before stage 02 closed. Both detail-layer pages now carry `skip:true`, the IA group loses its work-in-progress flag, and Next moves to Wireframes. README says "Detail layer out of track" rather than "Not started".

The consequence is real and belongs here rather than in a footnote: stage 04 draws wireframes from a **concept** layer. It gets clusters, screens, jobs, flows and scope labels, and it does not get per-page node specification. Whatever the detail layer would have settled, wireframes will settle by drawing, and that is a heavier decision than the flag change that records it.

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
