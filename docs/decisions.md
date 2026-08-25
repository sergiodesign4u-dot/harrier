# Decision log

What we did, why it was done this way, what was rejected and on what grounds. Newest entry on top, each one dated. This file is never loaded into a session automatically; it is read when the grounds for a decision need to be recalled. Rules that must hold every session belong in `CLAUDE.md`, not here.

## 2026-08-23 - `Upheld` retired, `Accept` is the word in both the control and the record

Stage 05, step 3. One act carried three words: the control said `Accept`, the banner said `Accepted by R. Idrissi`, the log entry said `Upheld by R. Idrissi`, and the fleet record said `34 of 36 upheld`.

**`Uphold` had the better case on register.** The whole product runs on an adjudication metaphor named in `CLAUDE.md`: a clerk prepares the file, the judge rules. `Upheld / Rejected / Amended` is the judicial set and it reads as a record of standing rather than of receipt.

**It lost on a rule that outranks register.** Design principle 3 of this project is that the control teaches. The control says `Accept`, so a record that says `Upheld` prints a word no control ever taught, and the reader has to learn that two words are one act. And `accept, amend or reject` is already the canonical triple in `CLAUDE.md`, written in the file that binds every session.

**What it costs:** `Upheld by <name>` on 5.1 and 5.6, the chip `upheld`, `upheld over 30 days`, and both annunciator records. **What it also costs:** an upward fix in `ia/docs/pages/reading-conventions.md`, which had to declare its second chip taxonomy before the value could be removed from it.

## 2026-08-23 - The annunciator answered two different questions in one fixed slot

Stage 05, step 1 found it by reading the call sites rather than the pages: 0.3 is passed an object from an inline `<script>` on 36 of 55 screens, so a text extractor skips it and a reader sees only the rendered result.

Two fleet readings existed and neither was wrong. The default in `wireframes/_nav.js` said `40 tenants · acts alone up to contain network at 3 · 1 moved down`, the ceiling and what moved. The override on 5.1, 5.6 and 2.1 said `40 TENANTS · 7 of 40 act alone above investigate · 219 of 231 upheld, 30 days`, how many sit above a floor and how accurate the agent has been.

**The default wins because a fixed slot answers one question.** 0.3 is the element `CLAUDE.md` binds stage 04 and stage 07 to carry, and its question is how much rope Clerk has here and what has moved. The second version is a report: correct, useful, and not the thing a glance is for. It retires on five screens. `OVRD` retires with it, the only invented abbreviation in a product that otherwise uses six acronyms the analyst already owns.

## 2026-08-23 - `tenant` and `client` are two words for two things, not one thing

Stage 05, step 3. The drawings carried `tenant` 409 times and `client` 98, including `Client` as the queue column header and `Normal at this client` as a pane heading three rows from a reject option reading `Normal at this tenant`.

**`tenant` is the word wherever the sentence is about a scope, a row, a boundary or a latitude.** It is what the differentiator is built on, and it is what the category uses for the isolation boundary: Simbian gives each tenant its own Context Lake, Microsoft ships multitenant management.

**`client` survives only where there is a person or a contract on the other end.** `A call to the client before 08:00` is not a call to a boundary, and cluster 6 of the IA is called tell the client for the same reason. Rejected: collapsing to one word, which would have made either the commercial relationship or the isolation boundary unsayable.

## 2026-08-23 - The competitor language source did not fall away, and what it settled

Stage 05, step 2. Nine pages opened live on 2026-08-23. The pack allows for a category with no readable public language, and this is not that category: marketing pages are public and Expel publishes its **interface** language in its own documentation.

**What it settled, and it is mostly restraint.** `verdict` is Simbian's word verbatim, so it is not a coinage. `contain` is Expel's, in `Contain Hosts`. Expel writes its record as answers to questions, `What is it? Where is it? When did it get here?`, so this product's question headings are **a pattern with a precedent and must not be presented as an invention**, the same discipline stage 03b applied to split-pane review.

**What it settled in the other direction.** Nobody in the category has a word for a per-tenant ceiling: Prophet says *scope*, Simbian says *authority*, Expel says *access*. `latitude` is this product's one coinage and it carries the differentiator, which is what makes it worth its cost. And of eight lines read live, **not one addresses the person who will sit in front of the screen**, which is why Principle 1 is speak to the analyst.

## 2026-08-23 - No brand platform, so the voice is derived rather than reconciled

Stage 05, step 2 asks whether a brand platform, tone-of-voice guide or editorial policy exists, because without the fork the stage silently produces a second voice beside an existing one. There is none, and this is a record rather than an assumption: `CLAUDE.md` states `brand or existing design system none` in the project boundary. If one ever arrives it becomes a fourth source, and conflicts get written out as "the brand says X, the data say Y" rather than smoothed.

## 2026-08-23 - Stage 04 closed, and what left CLAUDE.md

Sixty two grey pages across thirteen screens plus the hub. What goes into `CLAUDE.md` is a rule and a **path**, never a copy: the reference screen and the first flow live in `wireframes/docs/screens.md`, the fixtures in `ia/docs/pages/reading-conventions.md`, the contract in `wireframes/docs/conventions.md`, and the root file carries only the one rule whose forgetting costs the whole artefact.

**Added, one rule:** `wireframes/` is grey and stays grey, colour arrives on copies under `design/`. It is deliberately the same sentence as `wireframes/CLAUDE.md` rule 1, because a nested `CLAUDE.md` loads only when Claude reads something in that folder and does not survive a compaction.

**Deleted:** the Structure block's line that eight screens became forty six nodes with twenty three specifications. That was stage 03b's status and it is now two stages old; the count that matters is in `screens.md` and in the coverage map, both of which are generated from `_nav.js` and cannot go stale the way a sentence can.

## 2026-08-23 - The estimate was 58 pages and the product is 62, and three of the four are one mistake

The step 8 estimate counted screens and read **inside a host** as **zero pages**. Three of the four extra pages come from that single reading: node 8.4 renders inside zone Z6 and still needed two pages, because a notice layer never drawn at capacity is one whose cap nobody has decided; 0.4 renders as a strip and still needed a third page, because `CONNECTING` is a declared `readyState` and not a mood; 0.7 renders as a list inside 4.4 and its seventh value lived in a state matrix rather than in the list.

**Recorded because it will recur at stage 07.** A node that renders inside a host still has states, and its states still need pages. The count is now in `screens.md` section 5 with the estimate beside it, rather than replaced by it.

## 2026-08-23 - Author rationale gets its own register, settled by the author rather than by an instrument

Two instruments found the same thing independently and neither could fix it: the prototype argued for its own decisions in the same typographic slot as product hints, in the second person, addressed to a reviewer. A clean context reader given stage 05's real job could not tell which sentences stage 05 was supposed to rewrite, which is the question stage 05 opens with.

Three options were on the table: strip the rationale to a document, leave it and mark the file, or **split it visually**. The third was chosen. `.anote` on 35 pages carries a dotted rail and a `WHY` label; `.gnote` on 27 carries product copy; stage 05 owns everything that is not `.anote`.

**The rejected option worth recording is the first.** Moving the argument into `critique.md` would have made the screens cleaner and the case worse: the reason a decision was made is most persuasive next to the thing it decided, and a reviewer reads the screen before they read the folder.

## 2026-08-23 - 151 links were browser blue for the whole stage, and no instrument could have found them

`_wf.css` opens with *no colour, no brand, no icons, no shadows, no images* and never declared a rule for `a`. Twenty seven of sixty two screens rendered their prose links and their evidence source chips in the user agent default blue, from the first day.

**The instrument lesson is the entry.** grep reads rules that exist, Codex reads source, the clean context reader reads meaning, and a defect whose cause is an **absent** rule is invisible to all three. It took asking a live browser for a computed `color`. And the first version of that question, `r === g === b`, returned 832 findings, every one of them the palette's own near greys: a test with the wrong threshold is worse than no test, because it reads as a broken product rather than a broken instrument.

## 2026-08-23 - The grep instrument had never failed, and that was the problem

The duplicate rule grep compared inline against inline and never inline against `_wf.css`. Ten rules were declared in both, with the inline copy winning the cascade, and one of them is why a sticky rail stayed unstuck through two attempted fixes. The instrument had reported clean for two steps.

Worse, section 2 of `_wf.css` **declared** `.only-desk` the survivor of three private names for one utility and migrated neither of the other two, while a generator still carried a comment saying the complement does not exist. A comment that describes a fix is not the fix, and a file that asserts something false about itself is worse than one that says nothing.

**What changes for later stages:** an instrument that has never produced a finding has not been tested, and every declared list gets an idle control. That is how the unused `reconnecting` strip variant was found, and it is why it was drawn rather than deleted.

## 2026-08-22 - Seventy seven open questions, counted together for the first time and given verdicts

Twenty three node specifications each ended with a list of open questions and nobody had ever added them up. **Seventy seven.** Read as one set rather than one node at a time, most were not open: the answer already followed from something the product had decided, and nobody had written it down.

**Fifty two settled, seven handed to stage 04 as drawings, eighteen genuinely open.** A question was settled only where the answer follows from an existing decision; where it does not, the row names who can answer and what it blocks.

**Four decisions closed more than one question each.** Harrier reads the rota rather than owning it, which answers 4.6 and 2.1 together and makes 8.2's fallback contact the recipient when the rota is unreachable. An escalation is delivered out of band with Harrier recording that it was sent, which unblocks the `[?]` over whether the secondary persona uses the console at all. Clerk being down is 0.4's fourth state rather than a new node. Retention is two windows with the number left to the provider's contract, and the rule that makes the unchosen number harmless is that the log entry renders how long its own snapshot will remain retrievable.

**Three answers changed a drawing rather than a paragraph.** A fleet row narrows the queue to its tenant, which turns the most likely dead end in the product into an entry. A second analyst picking up a case changes the row for the first, which gave 0.8 a sixth chip and a fourth pair, and which records a collision through 5.1 rather than preventing it with a lock. The queue is a grid with one tab stop rather than a list, because the row is columnar and its cells have to be addressable.

**Rejected along the way, each for a reason rather than a taste.** Showing only the tenants that need attention, because deciding what she does not see is the more dangerous kind of decision. Redirecting the standalone case route on a desk, because a permalink that bounces cannot be quoted in a ticket. Taking an escalation back, because nothing in this product is undone and the case comes back as a new event instead. Exposing reject at 360, because a rejection needs the taxonomy and the evidence in view and neither fits on a phone.

**What the eighteen still open have in common.** Four of them point at one hole: 0.5, 0.6, 0.7 and 0.8 all end on the missing settings surface, and four nodes naming one absence is stronger than any of them alone. Six need a person in front of the screen. The rest belong to somebody else: a contract term, an ingestion mapping, an engineer's choice of transport.

**One got worse rather than better, and it is recorded that way.** 0.7 asks whether the analyst ever learns what happened to a rejection reason. Step 9 counted that R3 is carried by two nodes out of forty six and neither closes the loop. A rejection that never visibly changes anything stops being filled in honestly, so the thinnest job in the product is the one design principle 3 depends on.

## 2026-08-21 - Stage 03b closed, and what left CLAUDE.md

**Deleted as no longer true:** "No competitor publishes a page of this type outside a login, so the domain half of that bank is our own research." Vendor documentation publishes real product screenshots and that is where most of the block bank came from. The claim was written before the bank was built and read as context afterwards, which is the exact failure mode the `PREMISE` rule exists for, applied to a claim about the market rather than about the product. Narrowed to the one page type where it is true.

**Deleted as chronicle:** the two layer preamble under Structure, which explained which layer was settled at which stage. Both exist now, so the provenance decides nothing. "After stage 02 this is the only surviving differentiator" lost its date for the same reason.

**Converted rather than deleted:** "whether the secondary persona uses the console at all is `[?]`, and stage 02 made it less likely" was a chronicle sentence. It now says that 4.6 depends on the answer, because an escalation names a recipient. The same open question, stated as a live dependency instead of a past event.

**Corrected as stale:** four navigation items to three in the MVP, eight screens to forty six nodes, six clusters to six intents plus three that are not intents, two critique instruments to four.

**Added, four rules and each one a path rather than a copy:** a number in a drawing is a fixture and not a finding, with the canon in 0.8; a container node is redrawn whenever a node inside it settles something, prose and drawing together; page-local CSS takes a page-local prefix, because five class names belong to the shared sheet and silently restyle anything that reuses them; and a measurement attached to design principle 3, that reject costs four taps against accept's two and stage 04 draws against that number.

**Kept after being considered for deletion:** the tech stack hypothesis, for the second stage running. Virtualised tables produced 3.1's list and server-sent events produced 0.4's stale queue. ClickHouse, Postgres and Claude have still shaped nothing, and they stay on the same condition as last time rather than on habit.

CLAUDE.md went from 107 to 108 lines against a 200 ceiling. Four deletions, four corrections, four additions, and the file grew by one line, which is the shape a ritual should have.

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

## 2026-08-23 &middot; `Open <the destination>`, and the limit on `Back to`

Step 1 found seven wordings for going to the queue and seven for going to the log, and step 3 ruled neither: **the dictionary rules words, and where a link goes is a shape.** The ruling: `Open <the destination>` for any control that moves to another screen; `Back to X` only for a return the product can guarantee, meaning a sub-view or dialog opened from X in this session. Every top-level screen in this product is reachable from a pager link at 03:00, so `Back to the queue` on the log is a claim about where she came from that the product does not hold. Ten screens changed. Grounds: `voice/docs/voice.md`, the rulings.

## 2026-08-23 &middot; `decision`, `ruling`, and why an escalation is one and not the other

Node 5.6's `h1` read `every action and every override` above three entries containing no override, and the human half of the stream was called four things on one screen. **`decision`** is what a person did to a case, and it is already the product's word: `Decision log`, `waiting on a decision`. **`ruling`** is narrower and covers the three that answer Clerk's verdict: accept, amend, reject. **An escalation is a decision and not a ruling**, which is why `Clerk's verdict stands unruled` was true of an escalated case before this ruling existed. `override` stays the class of act rather than one act.

## 2026-08-23 &middot; The three machine entry chips lost the word `Clerk`

`Clerk opened the case`, `Clerk filed a verdict` and `Clerk acted alone` became `opened`, `filed`, `acted alone`. **A taxonomy stage 05 declared at step 3 broke a rule stage 05 wrote at step 4**, and neither step could see it, because the collision is between a closed list and a column width: in a browser those three were the only chips in the column that wrapped to two lines, 40px against every sibling at 25px. The cell to the chip's left names the actor on every row, so the word bought nothing. §6b's definition survives intact: an entry chip says what the entry is, and the actor is beside it. Fixed upward in `ia/docs/pages/reading-conventions.md` §6b and `decision-log.md`, prose and drawing together.

## 2026-08-23 &middot; The generators were swept, because `wireframes/` freezes after this stage

Stage 04 built the pages from ten Python generators in `wireframes/docs/`, and they still carried 93 occurrences of the retired vocabulary. **A generator that reproduces retired words is a trap rather than a leftover:** one rerun undoes the stage and looks like a harmless build step. No agent in the fan-out could have found it, because each was given a list of pages, which is the correct boundary.

## 2026-08-23 &middot; The `h1` on 19 screens is wrong and stage 05 did not fix it

`console-shell.md` says the `h1` belongs to whatever fills Z4 plus Z5, so a case open in the pane makes the case the heading of the page, and `case-file.md` §7 requires one `h1` carrying the case and its client. On all 19 case, reject and escalate pages the `h1` is the queue readout and the case identity is an `h2`. **Carried rather than fixed, because the defect is which element carries the heading and this stage changes text.** Step 6 accepted the reference screen with it live, because it checked the words in the `h1` and not which element was the `h1`. Recorded in `voice/docs/critique.md` §5a.

## 2026-08-23 &middot; The console ground is dark, and the reading research says the opposite

**Decision: dark is the default ground of the console. Light is a named debt, not a nicety.** Taken by the user at stage 06 after the evidence was put on the table, and recorded here because the evidence points the other way and a later reader will otherwise assume this was a style choice.

**What the research actually says, from pages opened on 2026-08-23.** Piepenbrock et al., 2013, cited by NN/g: light mode won across all dimensions, on visual acuity and on proofreading, irrespective of age. And the finding that lands on us specifically: *"the positive-polarity advantage increased linearly as the font size was decreased: namely, the smaller the font, the better it is for users to see the text in light mode."* Design principle 5 makes this product small type on purpose, so the advantage of the ground we did **not** choose grows with our own density. NN/g does not recommend dark mode for normal-vision users.

**The second argument against.** A dark ground opens the iris, and for astigmatism that produces halation, where light text bleeds. Prevalence figures differ by source, from one in three to 47%, but the order of magnitude is the same: a large minority, not an edge case.

**What carried it anyway, and it is not taste.**

- **The shift, which is sourced.** 79% of SOCs are operational 24/7 [SANS SOC Survey 2025], so night work is half the rota rather than an exception, and `CLAUDE.md` already carries the on-call scenario of a case opened from a phone at 03:00. A bright field at night is a glare source and destroys dark adaptation.
- **Aleman et al., 2018**, cited by NN/g: significant thinning of the choroid when reading in light mode and significant thickening in dark mode, the thinning being the direction associated with myopia. This is the only long-term measure in the set, and this operator sits here six hours a day for years.
- **Attribute A2, saturation is scarce.** On a near-black ground one accent reads at less area and less saturation. A light ground needs more of it, which is the thing A2 forbids.
- **Attribute A4, depth by tone.** Axiom demonstrates three near-black surfaces separated by tone alone. **That a light ground offers fewer usable tonal steps before it reads as grey on grey is our reasoning, not a measurement**, and it is marked as reasoning.

**The counter-argument is answered rather than dismissed.** Piepenbrock measures reading and proofreading of text. This screen is mostly scanning counts and chips and then deciding, and voice Principle 2 already made prose the exception rather than the substance. The one thing she genuinely reads is a short verdict line, whose size is not under pressure. **If that reading of the task is wrong, the ground is wrong**, and this paragraph is where a later stage should come back to.

**Dark does not lift the ban.** Eight of ten style results at step 1 were dark plus an electric blue or violet accent. **The reflex was the palette, not the ground.** Dark plus electric blue is still rejected on sight.

**Three constraints the halation evidence forces on the dark theme**, without which dark is done badly: never pure white on pure black, both ends are pulled in; body text at weight 400 or above, never 300 on dark; monospace at small sizes gets slightly open tracking.

**What it settles immediately.** Plates A and B propose light product surfaces and fall on the ground. Plate C is the only dark one of the three.

**Sources, opened in session:** `https://www.nngroup.com/articles/dark-mode/`, `https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone`.

---

## 2026-08-24 &middot; Plate J, and why the field of nine collapsed into one sheet

**Decision.** The brand is plate J, `design/concept/assets/brand-plate-j.png`. Plate K is the same sheet in the signal colourway and is kept rather than discarded.

**How the choice was reached, because it was not a pick from nine.** Nine plates were built over four rounds. The user named `c` and `d` as the two that landed and said neither was quite it. Read together they are **halves of one sheet**: `c` had a graphic identity and almost no product, `d` had the product at half the sheet and no graphic idea of its own beyond the screenshot. J was built to resolve them rather than to add a tenth idea, and K exists so that the ground and accent can be re-argued in one variable without re-composing anything.

**The defect both shared, and it is the reason neither read as tasteful.** Applications on every plate up to that point were flat skewed rectangles under one hard offset shadow. The NEO MIRAI toolkit the user supplied as the form reference has objects with **material and presence**. On J they are objects: real perspective, two shadow layers, one light direction, brushed metal, uncoated stock, woven lanyard, die cut matte. That single zone is what separates a brand sheet from an infographic.

**What was rejected and survives anyway.** Plate I stated the invariant as a rule of motion: the evidence pane never animates, and no overlay may hide what is being ruled on. In `CLAUDE.md` that had only ever been a rule of layout. It binds stage 07 as written.

**Three rounds of measured correction on top.** Codex cannot start Chromium under the macOS sandbox and verifies geometry arithmetically, so every round was measured in a real browser and the exact pixels handed back. Found and fixed: the dek printing over the console top bar, a 126px band of dead space under the type specimen, the fleet reduced to a sparkline in a corner, and objects cropped by the canvas edge.

---

## 2026-08-24 &middot; Archivo over Space Grotesk, and the plate drew the loser

**Decision.** `Archivo` for display and body, `IBM Plex Mono` for anything counted.

**Why this needed an argument at all.** The usual reason to replace a plate's typography is that a generated plate draws a font name that may not exist. Plate J loads real Google Fonts and Chromium confirmed the computed families, so the face on the sheet was real and the swap had to be justified on evidence instead.

**Measured, in a browser, on the working strings.** The same sentence at 15px: Archivo 737.6px, Instrument Sans 768.6px, Chivo 808.0px, Space Grotesk 819.5px. Default line box at 100px: 109px against 127px. Archivo sets the same prose **11 per cent narrower on a line box 14 per cent shorter**, which in an 829px detail pane is one line instead of two on a sentence read forty times a shift. That is design principle 5 stated as a number.

**And the taste argument runs the same way.** Space Grotesk is the face this category reaches for by reflex right now, and `concept.md` section 2b bans that class of choice. The ban does not stop being true because the plate is handsome.

**The mono was decided by a missing weight.** DM Mono and IBM Plex Mono set the same 9px string to the same 255.4px, so width decided nothing. Chromium was asked for DM Mono at 600 and at 700 and returned the 500 file both times: **it has no bold.** Counts and chips live in the mono and design principle 1 requires one thing in a row to win, so emphasis has to exist in that family. Martian Mono was rejected on the width test at 294.1px, 15 per cent wider.

**One value moved with the face.** Archivo collides at the plate's `-.055em`, the `t`, `i` and `d` of `latitude` touching at 82px. Rendered at three values and settled at `-.038em`. The mono keeps `.06em`, which is a halation constraint rather than a preference.

**The cost, named rather than hidden.** Archivo has none of Space Grotesk's personality in the `a`, the `y` and the `G`. The brand's character is therefore carried entirely by the accent economy, the square corner, the fleet drawing and the object language. Reversing this is one line in `design/_theme.css`.

---

## 2026-08-24 &middot; Direction A, chosen against the recommendation

**Decision.** Layout direction **A, Ledger**, for the reference screen and for the language. Recommended direction was **C, Wide bench**. The user chose A.

**What C was recommended for.** C splits horizontally, so the queue takes the full 1440 and the fleet at rest becomes seven tenants side by side. Per tenant earned latitude is the only surviving differentiator, and C is the only one of the three where it is read **across** in one glance rather than traversed down a list.

**Why A is the safer choice and that is a real argument, not a consolation.** A is the wireframe's own composition, so the structural diff of the coloured copy is near zero and the promise that the copy owns only the visual layer stays cheap to prove. C changes the split axis, the largest diff of the three, and puts the case file in a 1440 by 232 band that nothing in stage 04 was drawn against.

**Two things the choice leaves open, and they are recorded as debts rather than settled.**

- **Nothing in A's row wins on typography.** Design principle 1 says every row is a decision and the verdict is the decision, yet in A the verdict is set at the same size as the tenant and the description. Direction B bought the emphasis with a second line. Step 6 has to buy it inside one line with weight, colour or position. If it cannot, B's argument returns as a finding.
- **The differentiator is still a list in a 38 per cent pane.** Choosing A does not make the objection to it wrong, it moves it. The fleet has to earn **legible at one glance** some other way, and stage 07 is required to check that it did.

---

## 2026-08-24 &middot; Severity reads as colour, and attribute A2 was amended to allow it

**Decision.** Severity carries a closed ramp of three: high `#d9704f`, medium `#9d9182`, low `#828e96`. The word and the bars take the same value. **Attribute A2 changed for this**, from *saturation is scarce, not decorative* to *saturation is spent on two closed sets, and on nothing else*.

**Why the attribute had to change rather than stretch.** Severity was readable only by counting bars, and the user asked for it to read as colour. Three coloured elements per row, on every row, is exactly the economy the old A2 refused. There is no honest way to grant the request inside the old wording, so the wording moved and the move is written into `concept.md` where A2 lives.

**Section 5 of `concept.md` predicted this before it happened.** It recorded the conflict between Bloomberg's colour-as-code and A2, and said that if the user's real taste put Bloomberg's economy above A2 then A2 is what changes, in writing rather than quietly on a plate. That is what happened, so section 5 is closed. What was taken from Bloomberg is colour as a code **on a scale**; what still was not taken is colour on many elements at once, since the code is three values on one cell of a row rather than a wall of coloured cells.

**Five treatments were rendered on real rows before one was chosen, and the first attempt was wrong.** An early candidate put a bright bone tone on Medium, and the render showed the inversion at once: on a dark ground brightness is the strongest attention cue, so Medium out-shouted High. That is why the shipped ramp **descends in chroma rather than in loudness**. Loudness was never available: every value has to clear 4.5:1 against all three grounds, which compresses the whole ramp into 4.6 to 6.5 and leaves chroma and hue as the only carriers.

**Three constraints the ramp obeys.**

- **It never reaches green.** A low severity case is not a resolved one, and green would say it was. This is the same rule that keeps the six state chips uncoloured: they are positions, not outcomes.
- **It never touches the accent hue.** The amber is reserved for latitude, the live strip and the primary action, and a severity value in the same family would make the row's most important colour ambiguous.
- **One cool value enters a warm palette, deliberately.** `#828e96` is the only cool colour in the system. It is what makes low severity recede without dropping below the contrast floor.

**Contrast, computed against all three grounds including the selected row, which is the worst case:** 5.74 / 6.13 / 5.63 on the board, and 4.68 / 4.99 / 4.59 on the selected row. All above the AA floor for text, so the word can carry the colour and not only the bars.

**These three are the only derived values in the palette.** Everything else was sampled as pixels off plate J. The plate drew no severity scale, so there was no pixel to take, and the exception is recorded in `DESIGN-artifacts.md` section 2 rather than hidden by giving them a plausible origin.

---

## 2026-08-24 &middot; The coloured copy is a remap, not a repaint

**Decision.** `design/queue.html` is the coloured reference screen, and the whole of its colour is `design/_screen.css`, which is mostly a **remap of the wireframe's own variables** rather than a set of new rules.

**Why that was possible, and it is the return on a decision made two stages earlier.** `wireframes/_wf.css` is written entirely through variables: `--ink`, `--soft`, `--hair`, `--fill`, `--paper`, `--bg`, `--radius`, `--ui`, `--mono`, `--line-ink`, `--focus`. Colouring the copy is therefore nine assignments plus a short list of things the brand adds. The grey contract was worth keeping for exactly this.

**The structural diff is zero and it is asserted rather than believed.** Everything between `<body>` and the first `<script>` is byte for byte identical in the two files, 7566 bytes each, checked after every edit. What differs is three stylesheet links, the title, and the panel bootstrap.

**Severity is selected on the drawing, not on a class.** The wireframe's markup has no severity level in it: a row carries three bars and some of them are lit. `:has()` reads the count, so the ramp lands without adding a single attribute to the copy. That is what keeps the diff at zero rather than merely small.

**Three defects the browser found and a read would not have.**

- **The project panel was invisible.** `_nav.css` was written for the documentation pages, which are light, so the panel rendered near-black text on the console ground. Remapped to three steps, all above the AA floor.
- **The accent was doing five jobs, not three.** Counted in the DOM on the finished screen rather than asserted from the plate. The solid `unrecorded` chip had picked it up; inverting that chip through the remap already makes it the loudest thing on the screen, so the accent came off it. The honest list is four: latitude on the fleet and on the case, the live state, where you are, and the row being decided with its primary action. **The stand said three, which was true of a poster and false of a screen**, and the number was corrected in both files rather than defended.
- **What the browser also proved was NOT a regression.** The fleet pane wraps `Meridian Health` onto two lines and the first row's chips wrap. Both do exactly the same thing in the grey wireframe, so they are the wireframe's, not the colour layer's, and they are left where they belong.

**The debt direction A left open at step 4 is paid.** Design principle 1 says every row is a decision and the verdict is the decision, and in direction A the verdict was set at the same size as everything else. It is now one step larger and at full text brightness while the description steps back to dim. **The tenant was deliberately not dimmed**, because that is the rule direction B was at risk of breaking, and buying principle 1 by breaking principle 4 would not be a fix.

**A known limitation of a seed copy, recorded rather than discovered later.** Links inside the screen resolve relative to `design/`, so `case.html`, `shift.html` and the rest point at siblings that are not coloured yet. Fixing it would mean editing text in the copy, which would end the zero diff, or editing `wireframes/_nav.js`, which stage 05 froze. It stays as it is until stage 07 colours the rest.

---

## 2026-08-24 &middot; The language is proved by what the second screen cost

**Decision.** The contrast screen is **4.1 Case File in the detail pane**, and **2.1 Shift brief** was coloured as well, because the cost of the third screen is the actual evidence that a language exists.

**Why the case file and not the log.** The pack asks for the same card at a different density on a screen that contrasts with the reference. `5.1 Decision log` shares the queue's whole row anatomy, so it would have proved density and added nothing new. The case file does both at once: the queue is compressed into a narrower column, so the same row stands at a different density, and next to it is a prose surface the reference screen does not have, with what Clerk filed, what happened, nine evidence lines with their sources, and the four verdict actions.

**Why the shift brief was added anyway.** It is the harder test and it was nearly free. It shares almost nothing with the queue: no severity, no bars, no fleet rows, a different block system, a handover table and a who-is-on panel. `screens.md` records it as the one page type in the whole bank with **no domain reference anywhere**, which makes it the screen most likely to expose a language that only works on a table.

**The measure, and this is the finding rather than the prose around it.**

| Screen | New CSS it needed |
|---|---|
| Case queue, the reference | the remap, nine assignments, plus what the brand adds |
| Case file, the contrast | **one rule** |
| Shift brief | **zero rules** |

The one rule is `.btn--primary`. `_wf.css` inverts the primary action to the text colour, which is right on white and made the loudest thing on the case file a button rather than the evidence it is a verdict on. It takes the accent instead, which is the fourth of the accent's four jobs and the first time it renders anywhere.

**All three carry a zero structural diff**, asserted byte for byte after every edit: 7566, 10441 and 8511 bytes between `<body>` and the first `<script>`, identical to the grey originals.

**One thing the browser proved was not a regression, and it looked like one.** At 360 the case file's verdict bar wraps to two rows and overlays the text behind it. Measured in both files: `.pane-foot` is `position:sticky` at 89px in the grey wireframe and in the colour copy, with the buttons at the same offsets and within 2px of the same widths. It is the wireframe's own behaviour, so it is a stage 04 question rather than a colour defect, and it is left where it belongs.

---

## 2026-08-24 &middot; What the second instrument found, and the two findings that were worth the whole pass

**Critique ran on two instruments.** Codex read-only took the classes an author cannot see, because an author looks at a page as a screen rather than as a difference: structural desync between a copy and its wireframe, `concept.html` against `DESIGN-artifacts.md`, the same component with different values in two places, a literal where a variable belongs, and contrast recomputed rather than trusted. The browser class, what breaks at 360, stayed here.

**`/impeccable audit` did not run, and the reason I gave for it was wrong.**

At the time I wrote that the plugin was not installed, having checked `~/.claude/plugins`. **It is installed**, as a user skill at `~/.claude/skills/impeccable`, version 4.0.4, `user-invocable: true`, with `audit`, `critique`, `document` and `extract` in its argument hint. It was verified working at the start of stage 07 by invoking it.

**The check answered a different question from the one being asked.** The pack names it as a marketplace plugin, `pbakaus/impeccable`, so I looked where a plugin lives and reported the answer as though I had looked where the tool lives. One directory returning nothing was read as the tool being absent. **That is this project's own recurring failure, the third time: an instrument that was never pointed at the artefact, reporting clean.** It is the same shape as the grep that compared inline against inline at stage 04 and the formatter that printed 2.997 as 3.00 at stage 06.

What was actually run in its place was the pack's fallback, its laws applied by hand: the anti-slop pass, the colour strategy and the WCAG check. Those findings stand on their own and are not withdrawn. **What is withdrawn is the claim that the tool was unavailable.** The audit is re-run at stage 07 and anything it finds in the stage 06 surfaces is recorded there.

**Sixteen findings across five classes: three, six, three and four, with the structural class clean. Fourteen fixed, two accepted with the reason written down, and five separate literals judged legitimate and said why.** The count here was written before the tally and said seventeen; it is corrected rather than left, which is the same discipline the 2.997 finding is about. Two were worth the pass on their own.

**A threshold reported as met when it was not.** `--color-rule` was recorded as sitting at "exactly 3.00 against the ground, the 1.4.11 limit". Recomputed: **2.997**, and 2.848 on the surface and 2.441 on the selected row. My own script had printed `3.00` because it formatted to two decimals, and a rounded number was then written into four files as a threshold met. The fix is not to raise the value, which is a pixel of the plate: 1.4.11 covers what identifies a **control**, not a divider, so `--color-rule` keeps separators and panel edges, and a new `--color-edge` at `#7b7260` takes every chip, button and `kbd` boundary at 3.98, 3.78 and 3.24. **A formatter is not a threshold, and this is the second time in this project that a clean-looking number came from the instrument rather than the artefact.**

**The stand was a claim about a screen rather than a picture of one.** `concept.html` held a hand-built replica of the queue, and six components had drifted from the product: chip family and size, button geometry, row density, fleet row tracks, bar heights, and a solid chip that was on the accent in the replica and not on the real screen. One of them was worse than drift: the replica accented the fleet's latitude column and the product did not, so the stand was showing the differentiator working in a way it did not work. The replica is gone. **The stand now embeds `design/queue.html` in an iframe**, so it cannot drift from the product because it is the product. The drawings on `directions.html` are left as they are and labelled as a record of a decision taken before any real screen existed.

**Two values were living in four files and in no variable.** `#232219`, the line between rows, and the control boundary that had been borrowing `--color-rule`. Both are variables now. **A value in a page and not in `_theme.css` is the exact defect this stage exists to prevent, and it still took a second instrument to see it.**

**Three contradictions inside one page.** `concept.html` said the accent did three jobs in three places and four in one, after the count had been corrected at step 6; the A5 row still said severity is bars rather than colour, after severity became colour at step 5; and the palette heading said nine values above twelve swatches. All three are the same failure: a claim written once and not re-read when the thing it described changed.

**What was checked and came back clean, said explicitly so the instrument is not mistaken for a result.** The structural diff on all three copies, byte for byte including whitespace, 7566, 10441 and 8511 bytes. All twelve hex values, three tracking values, both radii and both font families agreeing across `_theme.css`, `concept.html` and `DESIGN-artifacts.md`. No literal font family anywhere in the product CSS. Every text pair above the AA floor on all three grounds.

**What was judged legitimate rather than fixed.** The literals inside `_theme.css` itself, which is the declaration file. `transparent` and `currentColor`, which are contextual keywords rather than tokens. The documentation chrome, which belongs to `research/_page.css` and not to the product theme. And every literal in the brandbook plates under `design/concept/assets/plates/`, which are self-contained artefacts rather than product CSS.

---

## 2026-08-24 &middot; The sample was picked by what each screen adds, and the kit was already saturated

**Decision.** Nine screens in colour, 51 pages, chosen by a count rather than by judgement: each candidate was scored on how many classes it brings that the already painted screens do not have, and the ones that add nothing were left out **by that rule**.

`reject` adds sixteen and is the only overlay in the product. `entry` adds twelve and is the retained record with its `?as-of` snapshot, which is the one compliance requirement that shapes the design. `index` adds seven and is the whole door. `unavailable` adds twelve including the signed-out shell. **`log` was measured and not taken**: it adds two classes, and the rule says a screen adding no component proves nothing. `escalate` was not taken either: seventeen on paper, but the dialog, the optlist and the field all arrive with `reject`.

**The saturation signal arrived on the first new screen rather than the fourth.** Nothing had to be added to the kit for any of the four. That is the return on taking the inventory from **all 62 wireframes** instead of from the painted sample: the kit already knew about `optlist`, `dialog`, `door` and `outage` before a single screen was coloured.

---

## 2026-08-24 &middot; Three stylesheets became one, and the proof was a screenshot rather than a claim

**Decision.** `design/kit/kit.css` is the single stylesheet of the product. `design/_theme.css` arrived by `git mv` with its `:root` byte for byte identical, `wireframes/_wf.css` was absorbed with every value routed onto the kit's names and **not one value changed**, and `design/_screen.css` was folded in and deleted.

**Why it could be proved instead of argued.** The seed screens were rendered on the old chain and on the kit alone, and the screenshots are byte identical at 1440 and at 360. Getting there took two rounds and both were found by measurement: a computed-style diff showed the panel remap had been stripped, and then two elements still differed because the frozen generator writes one inline `style="font-size:var(--t-xs)"` and every screen carried its own block of stage 04 names.

**That is why a compatibility alias block exists at all**, and at step 6 it was measured rather than assumed: lifted out, everything re-rendered, and five renderings changed on three pages. **Two aliases survive out of thirty**, and the three files that need them are named in the file.

---

## 2026-08-24 &middot; The last tie to the frozen folder is cut

**Decision.** `design/_shell.js` renders Z1 and Z2. Nothing under `design/` reaches into `wireframes/` any more, in a link or in a script.

**The function keeps the name `WF_SHELL` and its exact signature on purpose.** The call sits inside each page's own markup, so renaming it would have meant editing 51 pages and the structural diff would have stopped being zero. Only the implementation moved. The same markup is written a second time in `design/kit/shell.html` where a person can read it, and if the two ever disagree, the html is the specification and the script is the bug.

**Proved rather than declared:** 102 renderings compared before and after, 102 byte identical.

**What the old script was costing.** It loaded a registry of 19 screens and rendered the wireframe stage panel into `#sidebar`, both of which this stage overwrote immediately, in order to inject two elements.

---

## 2026-08-24 &middot; A stranger found the bug that nobody watching could see

**The reader with clean context was given the next stage's real task**, not "find defects": you are about to build the design system, say from these files how many components there are, what level each has, what variants the button has, and which control forms are unresolved. Repository only, no chat.

**It returned sixteen things the documents do not let a person understand, and one live product bug.** `.btn--primary-narrow` is the class that exists so node 4.4 has a primary action at 360, and it was the one class the brand layer's accent never reached: the main action rendered amber at 1440 and bone at 360.

**Nobody who had watched the stage being built could have found it**, because everybody who watched it knew what the class was supposed to be. That is the whole argument for the instrument, and this is the second stage where it was the one that paid.

**Its other fifteen are the brief for stage 08** rather than a defect list: 78 of the 150 qualifying classes have no row in any table; the level rule contradicts its own level column on about ten components and the column is what later stages read; `optlist` was filed at two different levels in two files; and nothing anywhere decides the import order of the cross-cutting layers, which is the first thing a split needs.

---

## 2026-08-24 &middot; Six tokens with no consumer, and forcing them would have been the wrong fix

**Decision.** Five stay declared and unused, marked `UNUSED` in `kit.css` with the reason. One had a real job and was given it.

`--track-display`, `--track-mono` and `--track-wordmark` were measured on the brandbook plate. The product's type came whole from stage 04 and its mono tracking is a spread of `.04em`, `.08em`, `.09em`, `.1em` and `.14em`, **all of them open**, so the halation constraint in `CLAUDE.md` is met by stage 04's values rather than by the token. **Forcing `.06em` onto them would have changed stage 04 typography to make a token look used**, which is the wrong way round. `--radius-object` is for printed and physical objects, which the interface does not render. `--color-failure` has no failure-coloured element to sit on: the degraded strip underlines and the alert toast thickens its border, and neither reaches for a colour, which is a product finding rather than a token one.

`--rule-control` was the sixth. It was created at stage 06 for WCAG 1.4.11 control boundaries and the same result was being reached by overriding a colour, so it was given the job it was made for.

---

## The closing sweep, after stage 07

Run on the user's instruction to close every open defect before anything else starts. Not a stage. What follows is what was decided rather than what was found; the numbers are in `docs/audit-07.md`.

### The stale critique was read as a to-do list and was not one

The Codex pass held from stage 07 named 29 pages carrying six repeated families of inline CSS and a `DESIGN.md` that claimed 32 pages. **Both had already been fixed at steps 5 and 6 of that stage.** Measured before acting: exactly **one** page under `design/` still carries a non-empty inline `<style>`, and it is `overview.html`, the hub, which is a document rather than a screen.

**A report is a photograph of a moment, and acting on it without re-measuring repairs a thing that is already whole.** The cost of checking was one command.

### The stand documenting the visual language was the page least covered by it

`design/concept/concept.html` and `directions.html` are **dark** pages that link `research/_page.css`, a **light** documentation theme, for their column, heading scale and paragraph rhythm. That sheet declares eleven variables and owns a dozen bare element selectors. `kit.css` declares none of the eleven.

So the page that presents the palette had a lede at **1.42:1**, file paths at **1.14:1**, its section headings in a teal that appears in no Harrier palette, and its own mono labels rendered in the system mono rather than in IBM Plex Mono. All of it live since stage 06, through a stage 06 critique in two instruments and a stage 07 audit.

**Why none of the three caught it.** Codex reads file text and the pages contain no wrong value, only names that resolve elsewhere. The clean-context reader was given the next stage's task, which is the system and not the stand. The detector was pointed at the 51 product pages, which is what stage 07 produced. **Each instrument was correctly aimed and the page fell between all three.**

The fix is not a patch per symptom: the four variable names were replaced with kit names on both pages, and `_stand.css` grew one block that reassigns what the light sheet still paints. **The block is commented with what each value measured**, so the next reader does not have to rediscover why it exists.

### The freeze on `wireframes/` was opened for exactly one line, and the user decided it

`--soft:#9aa0a6` in `wireframes/_wf.css` was the single cause of every remaining contrast failure in the project: 2.64:1 on the paper, 2.38:1 on the fill, 46 of its 48 uses text, 62 pages.

The rule in `CLAUDE.md` freezes the folder after stage 05. **The question was put to the user rather than resolved by argument**, because a standing rule is not something a sweep gets to reinterpret on its own. The decision was to change the value: grey to grey, no structure, no string, no state, one line, one command to revert.

**The tie stayed cut.** Nothing under `design/` reads `--soft` or links `_wf.css`; the only mentions are prose in comments naming the file. The edit reached 62 wireframe pages and zero coloured ones, which is the detachment of step 6 proving itself on a change nobody made to test it.

### A count of renderings is not a count of causes

1018 contrast failures across 128 pages came from **four values**. Reporting the large number would have been accurate and would have hidden the fact that the whole thing was a morning's work.

### Correcting a claim in one of the two places it stands leaves it wrong

`DESIGN.md` said 32 pages in its opening line and 51 twenty lines below, in the same file, for the whole of stage 07. The correction at step 6 had landed on the paragraph that **argued** the claim and not on the sentence that **made** it, and the correcting paragraph then asserted the number was "in one place".

Found by Codex, on the diff of the fix rather than on the original. **The same shape as `concept.md`**, which went on saying the accent carries three things for two stages after the count became four everywhere else. Both are now right, and in `concept.md` the old sentence is kept standing with the distinction written next to it: three is true of **the sheet** and four is true of **a screen**, and that is the finding rather than a typo.

### Verification before repair caught three of six

Codex returned six items on the fix diff. **Three were confirmed and fixed** and are above. **Three were withdrawn on measurement**: links were said to keep the light accent and render bone at `rgb(233,228,218)`; `body` and `h1` were said to be uncovered and take their ground, colour and family from `kit.css`; and `kit.css` was said not to carry the four accent jobs, which it does, at line 777 rather than the line quoted.

**An instrument that reads text cannot see what the cascade resolves to**, which is the same division of labour that made it worth running.

## 2026-08-24 &middot; The track continues past 07, and the entry above is superseded

The 2026-08-20 entry stopped the pipeline after UI + Visual on the grounds that stages 08 to 13 would produce a token architecture with no reader. The user reopened it and the track now runs into 08, Tokens + Components. The old entry stays where it is rather than being edited: it was right on the day it was written and the reason it was overturned is a decision in its own right, not a typo.

Two things about this project turned out not to match what the shortened track assumed. The kit is not a sketch: it was read out of all 62 wireframes and it covers 55 components across three levels, so the material for the split exists whether or not the split happens. And the sample is not five to seven screens but **51 in colour**, which is what the pipeline expects a rollout to produce, not a sample. The cost is named where it lands: the browser census at step 1, the reconciliation at step 6 and the pixel comparison at step 8 walk 51 pages in two viewports rather than a handful, which is 102 renderings per measurement.

`CLAUDE.md` carries the old sentence and it is corrected at the closing ritual of the stage, not before: the file is a set of rules that must hold next session, and rewriting it mid stage would state a boundary the stage has not yet reached.

## 2026-08-24 &middot; One roadmap item for the design system, and it costs the declared thirteen

`Tokens + Components` and `Design System` stood as two top-level items and a reader asked the obvious question: why are there two design systems. There are not. Both stages write into one folder, `design/kit/`, onto one stand, and the roadmap was the only place claiming otherwise.

They are now one item, `Design System`, with two children: `Tokens + Components` and `Patterns + Guide`. This is the same gesture already applied to the two layers of IA and to the two halves of User Research, and for the same reason: one thing built in two passes is one item with two children, not two items.

**What separates the two passes, so the grouping does not hide it.** The first builds bricks: the unit is a component, and the output is `design/system/` with two token levels, a file per component, four states in both themes and a documentation page for each. The second turns that into a product for people who were not in the session: the unit is a **pattern**, a composition that repeated on three or more screens, and a **prohibition**, which cannot be written as an antirule on any single component page because the component is right and its count or its neighbour is wrong. Nothing the second pass produces is producible by the first.

**The cost, named rather than absorbed.** The pipeline declares thirteen top-level roadmap items and this project now renders **twelve**. The two stages keep their own status rows in `README.md`, exactly as CJM does while living under the User Research divider: the sidebar tracks whether a page **exists**, the README tracks whether a stage is **finished**. The `wip` flag sits on the group and is cleared by the last of the two passes, which is the rule already written for a group stage.

## 2026-08-24 &middot; A stage in progress with no page yet rendered as a dead link

Setting `wip:true` at step 1 of stage 08 made the roadmap paint the item in the ordinary link colour, because the rule `.nav-item.is-wip > .nav-top` was written assuming a stage in progress already has a page. It does not: the page arrives at step 4, three steps later. The renderer was right and emitted a `<span>` so nothing could point at a missing file; the stylesheet then coloured that span as though it were clickable, and it was clicked.

Fixed in `/_nav.css` by splitting the rule on the element rather than adding a flag: `a.nav-top` under `is-wip` keeps the link colour, `span.nav-top` under `is-wip` takes the muted colour and `cursor:default`. The badge still separates it from SOON, in the accent rather than in grey. The defect was live for exactly the window the two flags were designed to describe, and it is the first time anything has occupied that window: every previous stage built its registry page in the same step that raised the flag.

## 2026-08-25 &middot; The documentation panel travels with the scroll, and stage 07 had disabled it on purpose

Stage 07 gave `design/_nav.js` two branches. A **screen** got `position:sticky` on the panel; a **document** got `.wf-shell{align-items:flex-start}` and then `#sidebar{position:static}`. The comment there names a real defect and a correct first half: the shell is a flex row with `align-items:stretch`, which is right for a screen and wrong for a document, because it pinned both columns to one viewport and let the article overflow.

**The second half was not needed and it cost the thing the panel is for.** Top aligning the row is what fixes the overflow; making the panel static as well is what scrolled it out of reach. A component page on the stage 08 stand is two thousand pixels long and the panel is how you reach the next component, so every move between components became a scroll back to the top. The stand inherited the same shape and had the same defect.

**One more declaration was hiding under it, and it was found by measuring rather than by reading.** With the branch removed, `position` computed to `sticky` on the document pages and the panel still scrolled away, because `kit.css` pins `.wf-shell` to `height:100vh`. A sticky element sticks only inside its containing block, so the panel travelled for exactly one viewport and then left with the row that held it. A document now gets `height:auto; min-height:100vh` as well, and a screen keeps the viewport pin it needs.

Verified on sixteen combinations, four surfaces at two viewports in the stand and two product screens: sticky and held at the top while the page scrolls at the desk, static and stacked at 360, no horizontal overflow anywhere. The mechanism now also lives in `design/system/base.css` for the pages that are already on the system; the injected copy in `design/_nav.js` covers the pages that are not, and step 8 removes it.

## 2026-08-25 &middot; `color-scheme` follows the theme, because the browser draws things this system does not

A native `select` on the console ground opened a **white** list. Nothing in the stylesheets is wrong: the popup, the scrollbar, the caret in a field and the default ring on an unstyled control are drawn by the browser, and the only way to tell it which way they go is `color-scheme`.

It is declared in `tokens.css` beside the roles rather than in `base.css`, because it is a value that changes with the theme and it belongs with the values that change with the theme: `dark` on `:root, [data-theme="dark"]` and `light` on `[data-theme="light"]`. It is the one declaration in that file that is not a token, and the comment there says so.

This is the same class of defect as the light theme that leaked into two dark documents at stage 06: the value is never wrong in any file, and what is wrong is what the browser does with what the file did not say.

## 2026-08-25 &middot; Stage 08 closed, and what it cost to be sure

**The register was wrong three times and each correction came from a different instrument.** It was 62 at step 2, built from a browser census of controls. Writing `input` found that `input`, `textarea` and `select` have the same anatomy, which is none, and it went to 60. Scanning every class that owns a rule block against the register found **thirteen components the census had never seen**, including `claim` at 131 instances and `lat`, which is the latitude ladder and therefore the differentiator itself. It is 73.

**The census missed them because it counted CONTROLS.** Every one of the thirteen is a container or a text composition, and the anatomy column was measured only for rows the control census had already produced. A component with no control inside it never entered the list to be measured. That is the finding to carry forward: **an inventory takes the shape of the instrument that made it**, and the cure is a second instrument with a different shape, not a more careful reading of the first.

**Six of the seven defects this stage found are invisible to reading.** A `font` shorthand that resets `line-height`. A chip standing at three heights in one bar because the element decided them. A readout at weight 700 on 35 screens because it is an `h1` and nothing said otherwise. A utility losing to a component because the system loaded later. A narrow only rule hoisted to the top level. A scrim that did not pair by theme because `var()` resolves where it is declared. In every one of them **both files are correct and what is wrong is what the browser does with them**, which is why the answer was always another measurement and never another review.

**And one instrument was wrong out loud on its first run, which is the only reason it got fixed.** The theme stress test assumed a token resolves to `rgb()`; these resolve to hex, so every ratio was `NaN` and it printed FAIL fifteen times. A check that fails loudly when it is broken is worth more than one that passes quietly.

**The stage is a refactor and the product moved on purpose in five named places**, each a row in `design/kit/docs/tokens-audit.md`: the chip and state height, the readout weight, the field boundary at 3.98 rather than 2.997, the key border following its host, and the source icon only on the sources that open. 862 elements moved across 102 renderings and **not one of them is unattributed**.

---

## 2026-08-25 &middot; A pattern here is a filling, and that definition is what kept the level to four files

Stage 09 had to find the compositions that repeat on three or more screens and give them a level of their own. The counter found 104 distinct compositions across the 62 grey pages, **68 standing on two screens or more and 54 on three or more**, which is far too many to be a level: almost all of the 54 are a component's own anatomy. `claim` is a text and a source on 24 screens, and that is what `claim` **is**.

What separated the real thing from the noise was one sentence, and it came out of a rule stage 08 had already written for a level below:

> **A pattern here is a FILLING.** One container component, filled with a set of zones, where the container's other filling drops zones and grows different ones.

Stage 08's anatomy rule says a zone that disappears means a different component rather than a variant of the same one. Applied one level up, it produces **exactly four** compositions in this product and no others: the split has two zones, each zone has two fillings. `z4` is either the queue list or the shift brief; `z5` is either a case pane or the fleet.

**`z5.css` had predicted this before this stage existed.** It argued in its own header that the fleet is a pattern rather than a variant of the case pane, because writing it as a variant would have written it as a pane with no body, which is to say as an empty case, and `CLAUDE.md` forbids exactly that reading of the pane. The stage did not invent the criterion, it found the criterion already applied once and generalised it.

**The five other fillings are not patterns and the test says why.** `frame` on the entry screens, `outage` on the system states, `door` on the sign in states: each is one wrapper with one job. **A filling with one wrapper is a component, and the wrapper is its name.**

### What moved, and the criterion for moving it was mechanical

Fourteen rules left three component files, and none was copied. A rule was a candidate if, and only if, **its selector was written inside one component, named another component, and was conditioned on which filling the host was carrying**. `.z4 > .banner` failed that test and stayed: it places the banner whichever filling the column carries, so it belongs to the zone.

**One rule turned out to be doing two jobs and neither was named.** `.z5{ display:none }` at 900 hid the fleet at rest and the desk only case pane of the log and shift screens on one line, for two unrelated reasons. It is two rules now, one in each pattern.

**Two things tried to move and were sent back, and a read only audit against the files' own headers caught both.** `.pane-head--standalone h1` was a rule stage 08 had written in **two** places, with the second winning on specificity so the first looked like it worked. And `.sa-fresh` and `.sa-route` carry a line, a family and an ink: a pattern that paints is a second folder of components wearing a new name, so they stayed in `places.css`. **The level's defining rule was broken in the level's own file, under a header saying the opposite**, which is why an audit that reads a file against its own claims is worth more than one that reads it against a checklist.

### The prohibitions came from the same counter read backwards

A pattern is what repeated three times or more; a prohibition is what **never happened once, although it could**. Eleven rules, and every one carries the count, the earlier decision or the critique log it came from. A rule with an empty source is an invention wearing the word rule.

**The stage 04 convention that had waited four stages for a reader is one of them, and the counter corrected it on the way in.** `conventions.md` says "exactly one primary action per screen". Measured on what renders, eight of the 62 screens show two, and every one of the eight is a modal over a pane: the screen's own primary sits under a scrim with `aria-modal`, unreachable. The rule is **per layer**, and a second primary is also legitimate when it is the viewport twin of the first. The wording that went four stages without a reader would have failed eight screens on its first run.

**Every rule is also a function**, in `design/kit/checks/rules.mjs`, measured at both viewports on what renders rather than on the markup. Three of the eleven are true at one width and false at the other, and one of them only became correct when the counter stopped reading the file and started reading the box.

Two rules the corpus breaks, and both are recorded rather than smoothed. **R11: sixteen coloured screens have no `h1` at all at 360**, because the heading is the queue readout, the readout lives in the list column, and a case screen hides that column at that width. Stage 05 had already found the contradiction underneath it, between two node specifications, and could not see this consequence, because the consequence is a computed style at one viewport. **R3: the escalate family draws a dialog pinned to the viewport over a pane still rendered behind it at 360.** That one was fixed, on the composition, when the stage built its first screen.

### The self sufficiency test cost the product one screen and bought four honest rows

`design/escalate.html`, the fourth verdict and the only one of the four with no coloured rendering. It was assembled with no style of its own, no inline declaration and nothing added to the system on the way, which is the whole point: **the screen shows what came out of what already exists**, and what it could not reach goes to the backlog rather than being drawn.

It reached three things and not the fourth. The recipient of an escalation is `.rcpt` in the grey corpus and `contact` in the system, the same anatomy under two names, so the screen uses `contact` and the recipient's name renders one step larger. The state where the recipient has left the rota has no home at all. And running the usage rules against it found the R3 violation **on a screen nobody had built yet**, which is the strongest argument available for writing prohibitions as functions.

### What was deliberately not done

**No section of stage 09 on a pixel proof page, because that page does not exist and will not.** At stage 08 the user ruled that nothing in the design system may be a screenshot, and the pixel proof became live instruments. The stage's evidence is `checks/refactor.mjs`, which renders the tree as it stood before the first edit against the tree as it stands now and reports **which element moved** rather than how many pixels changed. 102 renderings, 0 tree shape changes, 0 boxes moved. The deviation from the contract is recorded in `design/kit/docs/critique.md` rather than satisfied by renaming something.

**IA was not touched**, and that is the contract rather than an omission: the screen came from a wireframe that already carries node 4.6, so the three IA surfaces stay as they are. They move only when a screen arrives without a node.

---

## 2026-08-25 &middot; One breakpoint, and it moved 380 pixels because nobody had added the split up

Stage 10 began with a census rather than a plan, and the census is the reason the rest of the stage was possible: **three distinct width values existed in a query anywhere in this project, and not one of them was a decision.** 900px on 29 rules, 1560px on 3, 1400px on 2. All literals, all in `px`, none named, none in a token, each written at the moment a defect had been found and never revisited. A fourth number written on top of those would have given a product with four widths in which none was a decision.

### Two of the three had a fluid answer, and the ladder is what asked the question

The rule of the stage reads top down: **fluid, then container, then a point**, and a point is written only where the fluid answer physically cannot work.

**1560 was the pane giving up sixty pixels to the list.** The pane and the list were competing for a fixed budget and the pane was told to give way once, at a number nobody had named. `clamp(20rem, 24vw, 34rem)` says the same thing continuously.

**1400 let the annunciator wrap**, and it was doing nothing at all. Measured at every width from 1280 to 2560, the strip is the same height with the query and without it, because above 1400 there had never been anything to wrap. **A query whose effect cannot be observed is not a breakpoint, it is a decoration on a declaration.**

### The one that is left moved, and that is the finding of the stage

The split has an arithmetic minimum and nobody had added it up: the queue row's seven tracks need 646px, the pane's floor is 320, and this case study's own documentation panel takes 236. **The split cannot exist below about 1200, and the point stood at 900.** Between 910 and 1200 the product rendered a split whose row did not fit its own column and whose cells ran past the edge. It had been doing that since stage 04.

Nobody had seen it because nobody looks at 1040. The measurement everybody takes is 360, 1440 and sometimes 1280, and this defect is invisible at all three. It was found by a sweep from 320 to 2560 in steps of 40, ten near the point, which is the one instrument that reads the widths between the widths.

**It is 1280 rather than 1210, and that is a decision rather than arithmetic.** `CLAUDE.md` declares the platform as desktop first with a minimum of 1280. The split now begins exactly where the product says it needs to begin, and below it the single column rendering that stage 04 designed takes over. That rendering is correct at 1024 in a way the broken split never was, and **a half screen window on a two monitor desk is 960 wide**: this product's own analyst is the person most likely to open one.

### What that cost, and it was worth naming

Moving the point exposed a second defect it had been hiding. **The top bar was three lines tall from 320 all the way to 1279**, because two of its elements claimed a whole line each with `width:100%` below the point: a phone's bar rendered on a 1200px screen. Both are fluid now, and the bar measures 181px at 360, 116 at 600, 65 at 768 and 55 from 1024 up, unchanged at 360 to the pixel.

### The width now goes to the surface that is read

The audit put 39 of the 62 screens in one category, "wider", with one mechanism behind all of them, and it was decided by a measurement taken before a word of it was written. The pane stopped at 380 and never moved again, so every pixel above 1560 went to two prose columns inside a scannable row: **the verdict cell measured 34 characters at 1440 and 70 at 1920**, in a row 30 pixels tall, at the width `CLAUDE.md` names as the primary target. Design principle 1 says a row is a decision rather than a record.

So the pane is fluid and the row's two prose tracks take a ceiling counted in characters. And `--measure`, which had been in `tokens.css` since stage 08 with the words "0 uses" beside it, finally has a consumer: it caps the four kinds of prose in this product and only bites above about 1700, because until this stage nothing could grow that far.

### What was considered and rejected

**A third column of tenant context.** No job. The annunciator already carries tenant context in the top bar at every width, which is cheaper than a column that is empty most of the time.

**The fleet and a case at once.** It would be the "empty case" reading of the pane that `CLAUDE.md` forbids in as many words.

**The log's reading pane beside the queue.** Two scopes on one screen, and the readout can make only one counted claim.

**Split-view as new behaviour**, which is the usual answer at this stage. Harrier has been split-view since stage 03b: it is the chosen UX pattern of the whole product and it stands on 48 of the 62 screens. **There is nothing a wider screen can reveal that this product does not already show at its declared minimum**, and that is an answer rather than a gap.

### Container queries were expected and are not there

The queue row genuinely does not know whether it stands in a 724px column or a 1223px one, which is the textbook case for `@container`. It turned out not to need one: what the row needed was for its two prose tracks to stop growing, and a track carries its own ceiling in `ch`. `container-type` is declared nowhere in `design/system/`, which is worth knowing, because a `@container` rule with no `container-type` above it never fires, silently, and the component simply always looks as though it stands in a wide place.

### The scale is in rem, and two of five sizes are fluid

Everything adaptive left `px`: the type scale, the space scale, the zone heights and every width. At a 16px root the numbers are identical, so nothing moved; for a reader who set a larger font, a `px` scale ignores the setting, which is how a layout fails WCAG 1.4.4 quietly. The only `px` left in `tokens.css` are the three 1px rules, the 2px focus ring and a print radius: the things that do not scale.

`--size-lg` runs 17px to 20px and `--size-xl` 21px to 26px, and **the two ends of each clamp are this product's own two widths**, 1280 and 1920. The three small sizes do not grow at all, and that is a decision: design principle 5 makes density the feature, so on a wider monitor this analyst wants more rows rather than larger ones, and what makes dense text readable is the measure.

**Both clamps were wrong on the first draft and a measurement said so.** The middle terms were solved for 360 rather than for 1280, so the floor stopped winning at about 414px and the declared minimum rendered at 19.4px instead of 17. The 360 rendering was identical either way, which is exactly why it took a second width to see it.

---

## 2026-08-25 &middot; The census came back empty, so every duration is a decision

Stage 11 opened the way every stage in this track opens, with a measurement rather than a plan, and the measurement came back at zero on every line: a search over all four corpora and computed style on **122,458 elements over 282 renderings** at two widths returned **zero transitions, zero keyframes, zero animations**. Source and output agreed, which is the only condition under which agreeing means anything.

**That is the opposite of the usual position at this stage and it did not happen by luck.** `arriving.css` had not merely omitted an animation, it had written down that it was omitting one and which stage would owe it. The absence was a decision with a date on it, and this is the date.

### Three works, and the inventory came out small

A movement earns its place by doing one of exactly three jobs: **connection** (what did that appear out of), **status** (is it still working), **response** (did it hear me). A moment for which none can be named does not get animated.

**Response: 13 components, plus one global focus ring.** That is nearly all the motion in this product, and it is exactly the set of states stage 08 declared. The corpus that produced it is the register of states rather than the flow map, and the two are not interchangeable: **a flow map never names the hover of a button.** It describes a route between screens, so an inventory built from screens sees connection and status in full and sees response almost not at all. The level it would have hit hardest is the bottom one, where atoms are made of response almost entirely.

**Status: one.** The queue's filling bar. It sweeps rather than pulsing, and the difference is what the bar claims: a pulse in opacity says a thing is present and uncertain, a sweep says work is moving through.

**Connection: one, and it got nothing.** The help on the sign in page opening. The only property a `details` can open with is a height, and a height is the property this stage forbids by name.

### The finding that shaped the stage

**Almost every appearance in this product is a document navigation.** Every state of every screen is its own html file, 62 of them: the queue with a notice and the queue without one, the case before a verdict and after it, the reject dialog open and the same dialog with a reason chosen. So the panel that "slides out from under the button that opened it" cannot exist here, because the button and the panel are on different pages, and **the single most important movement the analyst makes, a row becoming a case in the pane, is a navigation.**

Three answers were legal. Not animating between documents leaves the product's main move with no connection at all; a decision per flow buys nothing, because every flow here is the same move. The middle one was taken: **one declaration in `base.css`**, and the browser cross fades the old document into the new. A browser without the feature ignores the at-rule and navigates exactly as it did before: no error, no fallback to write, **no half working promise**, and that property is what made the answer legal rather than a guess.

### Two durations rather than three, and the third was removed rather than never written

`--dur-base` was written at step 2, for the one moment of connection. It has no reader, because that moment turned out to have nothing cheap to move. **A token with no reader fails this system's own idle control**, so it was removed rather than carried for later, and the moment became an order for a state instead: `.doorhelp summary` carries `cursor: pointer` and its file says "NO STATES", which makes it the only control in this product with no hover at all. **Motion lands on states and never creates them**, so that is a row in the backlog rather than a class this stage may draw.

`--dur-fast` is 120ms, and the number has a measured neighbour. The live benchmark half of the character work went to `lichess.org`, which `research.md` named at stage 01 as one of four out-of-category benchmarks for calibrated trust in a machine, and it was measured in session rather than remembered: **150ms and `ease` on every one of its controls**. This product is denser and read for six hours a day, so it takes one step quicker rather than copying a number that carries somebody else's context. The same page's evaluation gauge, the closest living relative of our filling bar, **carries no CSS motion at all**, which is itself the answer for the character of a status: the nearest product solving the same problem does not animate it.

**The other half of the character work was unavailable and is recorded as unavailable.** The MotionSites integration allows three free prompts to an account with no plan and they were already spent; `get_prompt` returned `free_limit_reached`. The decision was to proceed on the live benchmark alone and write the row, rather than to fall back on what a model remembers about how such things are usually done, which is not a source.

### The check found three defects in itself before it found one in the product

**It could not see the one animation in the project.** It lives on `.arriving::after`, and `querySelectorAll('*')` does not return a pseudo element: the queue's filling bar read as motionless on the four screens that carry it, and read as obeying reduced motion for the same reason. **An instrument that cannot see the thing the stage was written for is the most expensive kind of clean result.**

**It answered the wrong question about disappearance.** Reducing motion must remove the movement and never the thing, and the check asked that by comparing the two lists of moving elements: an element that correctly stopped moving left the list and was reported as vanished. The one animation in the product failed that check by obeying it.

**And it called a two property transition a drift**, because a transition over two properties reports one duration per property.

### And the demonstration broke the mechanism it demonstrates, twice

`motion.html` carries a box that slows the real components down so the movement can be seen at all. It redefines `--dur-fast` on a class, and the reduced motion block redefines it on the root: **for one measurement the one thing on this stand that exists to show the override reaching everything was the only thing in the project it did not reach.** Any surface that redefines a motion token has to carry its own query.

The second was better, and it came from an instrument that is not a motion instrument at all. **A response in this product is a colour transition, so a change of theme is a change of colour**: with two seconds in force, every component in that box spends two seconds crossing from one ground to the other, and the contrast sweep caught three of them mid crossing at **3.64:1 against a floor of 4.5**, on a page that had been clean a minute before. At 120ms the same crossing happens and nobody can read anything in 120ms. **That is the argument for 120 rather than 200 that nobody would have thought to make.**

### The safety net was not written, and that is the answer

The pack allows a blanket rule on `*` as a last resort, after an audit passes without it. The audit passed without it. Writing it then would only make it impossible to see a component that reads no token, which is the defect the net is supposed to insure against: **an instrument must not hide the thing it is looking for.**

---

## 2026-08-25 &middot; The rollout decided nothing, and that is why what it found is worth reading

Stage 12 built the last 10 of the product's 62 pages in colour. It drew nothing new: three batches of subagents dressed what stage 04 had already structured and stage 05 had already worded, in a system that stages 08 to 11 had already finished. **The rule the whole stage stands on is that a rollout multiplies rather than decides**, so anything left open reaches the fan out and gets answered ten different ways by ten agents, each of them plausibly.

That rule is also what makes the stage's output a list of defects rather than a list of screens.

### What had to be closed before an agent was launched

Three declared lists, and the third took most of the day.

- **`census.md`, a control with no form: empty**, and the five forms with no coloured rendering were verified in the system rather than in the document. **One of the five was verified wrongly**: a search for `block--rcpt` returned `contact.css`, and it returns that file's HEADER. The name is in a comment describing the grey markup, and no stylesheet declares it. The ruling was executed by dropping the modifier rather than by giving it a form, so the conclusion held and the evidence did not. **A grep for a name in a folder whose stylesheets carry more prose than rules is not evidence that the name is declared**, which is the same defect the tenth sign of the new screen instrument was written to avoid, made by the person who wrote it.
- **`motion.md`, needs a state: one row**, `.doorhelp summary`, on five screens that have been in colour since stage 07. No agent of this stage meets it, so it keeps its owner.
- **`backlog.md`, twelve rows naming this stage.** Two closed by measurement and stage 10 had already closed one of them without noticing. Four were rulings. One was closed by reading the screen instead of the pattern file that complained about it: the log's narrow banner, which the backlog asked for, was written at stage 04 and worded at stage 05.

### R11 was in the way, and it would have grown before anybody noticed

**Seventeen coloured screens had no `h1` at 360.** At that width a case screen does not render the queue column, the readout is the `h1`, and the heading leaves with what carries it. Underneath it two node specifications disagreed: `case-file.md` section 7 says "one h1, the case and its client", and nineteen screens made the readout the `h1` and the case an `h2`.

**Ruled in favour of the node, and the rule is measurable rather than editorial: exactly one heading renders at every width, and that one is the `h1`.** Where the pane carries a case, the pane head takes it and the readout drops to `h2`. Where the pane is at rest, the readout keeps it. Where the dialog takes the whole screen at 360, the dialog title takes it.

Three declarations changed and no pixel moved: two `h2` selectors became `:is(h1, h2)`. **One value did move and it is the interesting one.** `.readout` had no `margin` of its own and was taking the browser's `0.67em` for an `h1`, which would have become `0.83em` under the new tag and pushed two hundred rows down four pixels on seventeen screens. It declares `var(--space-2)` now, 8px against the 8.375 the element was deciding, and that 0.375 per side is the whole of the deliberate change. **It is the fourth time in this project the ELEMENT was deciding a value nobody had written**, and the class is one instrument short by construction: the value is not wrong in any file, so nothing that reads a file can see it, and it only shows up when the tag changes underneath it.

The rule then caught the parent twice more. The heading ruling handed to batch 2 was wrong for three of the five log states, and the one handed to batch 3 was wrong for the keyboard map, which would have shipped with no `h1` at 360, the exact defect just closed on seventeen. **Both were caught, one by the rule's own function and one by the agent reading the corpus, and neither was derivable from the documents.** That is the argument for a prohibition being a function rather than a paragraph, made twice in one stage against the person who wrote the paragraph.

### The worst defect of the stage was in the instrument

The canonical fixture table exists so that ten agents do not drift on the numbers. It listed **six** log entries where the screen draws seven, dropped one, and gave the fourth as `Meridian Health rejected by R. Idrissi`.

That is not a transcription slip like the other two. It is **word for word the one log entry the product's central claim requires not to exist**: the queue draws Meridian Health wearing `decided` and `unrecorded`, a verdict whose write did not land, and an entry for it would break the thing the whole product rests on. **The table would have handed the forbidden fixture to every agent that read it.** It was caught by an agent doing what the contract tells every agent to do and the author of the table had not: hold the table against the screen.

### Three batches, cut by flow, and the last one stopped

The first was the contract gate rather than a drawing: three states of a screen whose fourth was already accepted, which is the one shape in which a defect of the CONTRACT is separable from a defect of a screen. It returned three, and all three changed the contract:

- **`microcopy.md` is the inventory as it stood BEFORE stage 05 and the frozen wireframe is the corrected copy**, which is the reverse of what the pack assumes. Sections 3 and 4 of that file are the step 1 inventory and everything stage 05 ruled is held as a delta in section 8, so a string looked up by key gives the wording that was replaced. Batch 1 found six disagreements on three screens and got all six right by following the screen. **This is the single most expensive thing in the contract to get wrong, because the wrong answer is invisible**: a screen carrying pre stage 05 wording looks perfectly well written.
- **`<meta name="description">` does not exist anywhere in this product** and the contract asked for one. Every node is behind authentication and `noindex`, so stage 03b wrote no SEO block. The agent produced a question rather than a description, which is the right outcome and a line that should not have been in the contract.
- The title rule for a state file was written nowhere and had to be derived from the accepted corpus.

The second built the whole of node 5.1 in one hand, so that five screens sharing a row grammar and one set of fixtures could not disagree about their timestamps.

**The third stopped and built nothing**, which was the expected outcome and is the reason the stage has an enrichment journal at all. Its two screens carried fifteen classes the system did not declare, and the census had seen every one of them and ruled them out on "one use is not a role". **What the rule could not see is that most of the fifteen were one thing written twice.** They collapsed into two molecules and two variants:

| The one-offs | Where they went |
|---|---|
| seven classes on the keyboard map | **`keyrow`**, one molecule with five zones and one variant. Two of the seven differ only by a margin, one is another component's zone under a different name, and one is a whole container that already existed |
| two more | **`key--none`**, one variant of an atom that already existed. The two rules compute to the same thing |
| five on `not-found` | **`miss`**, one molecule with four zones, which is the shape `outage` already has one node along |
| one | **`addr`**, whose own header had been naming that exact instance since stage 08 |

**A threshold that counts NAMES cannot tell eleven components from four**, and that is the finding rather than the components.

### `opt` was left alone, and the refusal is the decision

The keyboard map's seventeen rows could have been `opt`, and building them that way would have taken that component from 62 instances, all interactive, to 79 with 17 that are not. `opt.css` says in as many words "IT IS A LINK, AND THAT WAS A DECISION, and that is also why it has states at all". **Seventeen unanswerable rows inside it would have flipped a fifth of its population into a lie**, which is the same argument stage 08 used to split `state` out of `chip`. So `optlist` has two fillings now and is still not a pattern: that needs three screens and both fillings stand on two.

### The product contradicted itself, and the last screen is what made it visible

`design/case.html` rendered all four verdict controls at 360. `design/reject.html` carries a banner in product copy reading **"Reject is a desk action. On a phone the exit is escalate, and only escalate."** Both were accepted screens, and pressing Reject from a phone landed on the screen that says Reject does not exist on a phone.

Node 4.1 section 8 says "**4.1 does not render at 360**" and node 4.2 owns that width as "the read and escalate surface". `CLAUDE.md` says mobile is a read and escalate surface, not the full console. And `case-standalone.html`, which is node 4.2, already had the correct markup: all four `only-desk` plus a narrow twin carrying escalate alone. **The pattern was in the corpus and four screens had not taken it.** Fixed in the coloured copies, which is what the stage's rule requires: a defect found in the frozen grey is named out loud and cured in colour, never upstream.

### What the stage refused to build

Three orders, and the refusals are worth as much as the components. A 12px margin between two blocks on one screen: refused, because a place class for one instance is what the register exists to prevent, and the drawing is four pixels tighter than the grey deliberately. A `block--rcpt` modifier carrying an order at 360: refused for the same reason, and recorded, because what it protects is real and no rule measures it. And `claim--against`, on 41 pages and drawing nothing since stage 04: ruled to stay undrawn, because the `tag` inside it says "points the other way" in words, which is the cheapest correct thing.

### Three instruments were written, and each found something on its first run

**`screens.mjs`** asks whether a screen file is only markup, and it is the only instrument in the folder that reads a file rather than a browser: the defect it looks for is a line of authorship, and a rule that never fires is still a rule in the wrong file. Its first run reported 59 hex values and 51 unknown classes and almost all of it was the instrument, which is the point of running it before trusting it. One was real: `qbanner`, removed from five screens by the stage 08 rename map and left on the sixth.

**`coverage-map.mjs`** walks the registry and the disk in both directions, because the coverage map is a declared list and reading the table cannot check the table. **It does not require the map to be all green**: a green row over an unfinished screen and a vanished row for something we chose not to build are the same lie told two ways.

**`census.mjs`** is the walk that section 6 of `census.md` had said "Reserved" about for four stages. The honest reading of that absence is not that the measurement was skipped but that it was a script written from scratch each time somebody remembered to run it. It found the stage's most invisible defect on its first run: **twelve textareas on the escalate family had been rendering as raw browser controls, monospace at 13.3px with the user agent's grey border, inside a dark dialog, since stage 09.** `input.css` is class based and those screens wrote bare elements. It survived stages 09, 10 and 11 and every instrument in the folder, because contrast passes when the browser's own colours happen to clear the floor, the usage rules do not look at fields, and **a class that is missing is not a forbidden sign**. The stage's own example screen was one of the four.

### What is not here, and it was never in scope

Six nodes have no wireframe: the two client summary screens, the three autonomy screens and permission denied. A rollout dresses what exists, and drawing a wireframe for them would mean unfreezing a folder frozen since stage 05, which is a decision above this stage. They are work **outside** the rollout rather than work after the handoff, and stage 13 takes one of them for its own exam.

### And the critique found twenty four things, three of which were this stage's own corrections

The reader with clean context was pointed at the half a grep cannot do, and the highest value class it returned is the one the stage had already met once. **`escalate-from-expired` drew `Accept` as the primary action four inches under its own sentence saying a verdict filed now would rest on evidence nobody can produce in April.** `keyboard`'s narrow banner promised a phone two exits and rendered one, and said the keyboard trigger is dropped at 360 while the trigger stood in the bar on every authenticated screen. **And the queue said Clerk contained a case at Norsk Marine 52 minutes ago while the log's newest entries did not have it**, inside the window and required by the append only rule: the canonical table reasoned carefully about the one entry that must NOT exist and never asked which queue rows REQUIRE one.

**Three of the nine stale counts it found were corrections this stage had just made.** `key.css` was rewritten to fix a count and its new decomposition double counted six keys. `motion.md` was rewritten to add a screen to a list of four and did not check the four already there, one of which had never carried the component. `census.md` published a measured table before the last edits landed. **A count is not fixed by being rewritten. It is fixed by being measured at the moment it is written down, and re-measured after the last edit**, which is a rule this project had for its instruments and not for its prose.

Two instruments then found one more each, after every fix was in. The box comparison found **a place utility deciding a component's display**: `.only-desk` declares `display: block`, which on a button whose own value is `inline-flex` turns its label and its key from flex items into inline text. It was cured once at stage 09 for the standalone route, and putting viewport twins on the paired pane made it four more. And the width sweep found **`miss` putting the measure on the column instead of on the text**, which is the mistake `base.css` warns about by name: the notes ran 89 characters at 520, and the rule and the reason had both been written down at stage 10.

**The mechanical half of the critique ran without Codex**, whose own job state records that the CLI is not installed. The instruments in `design/kit/checks/` covered the same ten classes with a count against each, and the substitution is named rather than made quietly, because this project has already paid once for a dependency reported unavailable that was not.

## 2026-08-26 &middot; The chevron promised a control that did not exist, and it did so on 21 screens for two stages

The owner read a rendered case file and asked what the block under the second claim was for. The answer is that it is the end of design principle 2: the claim reads on its own, and the working behind it lives one key away, so the analyst who trusts the verdict never pays for it. `Field correlationId matches across both sign ins` is what she says months later when the decision is taken apart, and `read from the tenant's own log, 04:08 to 04:12 UTC` is where she says she read it.

**The block was not one key away. It was always open.** `expand` shipped as a `div` with the chevron drawn on it and nothing behind it: 21 instances on 21 screens, every one of them charging its depth to every read, which is the exact thing the principle calls harmful. Step 2 of stage 08 ruled the move to a native `details`; step 6 did not execute it. The component page has described `details.expand` ever since, down to a **Copy this** line the product does not match.

**No instrument could see it, and the reason is worth more than the fix.** Every check in `design/kit/checks/` measures the product against itself: the rendered box against the declared token, the file against the register, one width against another. Not one of them measures the product against its own showcase. A component page is prose to a detector and a rendered page to a browser, and the sentence in it that says which ELEMENT to write is neither. The class is now named in `backlog.md` with an owner, because the cure is a check and not a correction.

**The backlog priced it at 23 invented sentences and that is why it sat for two stages.** The real count of distinct bodies is 7. Six are handover notes that already carry their own head. One sentence was invented, `How this was read`, and it names what is inside rather than saying more, which is what a summary is for.

**Two fillings, and the second is a decision rather than an exception.** A handover note on `shift` keeps no head and never closes. It is read because the shift was taken, so hiding it would hide the reason the screen exists; and its head carries a link to the case, which inside a `summary` cannot be reached, because the click belongs to the disclosure. The chevron therefore hangs off `> summary` and not off the box, so the filling with no head loses the mark **by construction** rather than by a second class somebody has to remember. That is R13, and it is a function in `rules.mjs` rather than a sentence: 39 held, 0 broken, over the coloured corpus at both widths.

**A count that was a plan, not a reading.** The same rename map claimed the door's five `summary` elements as this component under another name. They are not. The door's help is a question on a full page with one form on it; this is depth on a claim inside a list of evidence, and giving the door a bordered surface with a left rail would say there is working to check where there is only an answer. The plan is dropped out loud, and the component's count falls from **32 across 28 screens to 27 across 23**, which is a number anybody can now reproduce with one grep.

**Print cost a different rule than anyone had written.** The block in `base.css` said `.expand{ display:block }`, which was enough while nothing was ever hidden. A native `details` hides its body in `::details-content`, so that is what is unhidden now, and the mark goes, because a chevron on paper points at a control nobody can press. Verified with print media emulation: the closed expansion renders at its full open height.

## 2026-08-26 &middot; The box was in the right place and the browser painted it somewhere else

Two findings from the owner reading a rendered case file, and the first is the more interesting of the two because **no instrument in this project could have found it.**

`text-indent` INHERITS. The hanging indent on the narrative is `padding-left: 46px` with `text-indent: -46px`, which pulls the first line back so the time hangs to the left of the sentence and the wrapped line lands under the sentence rather than under the clock. The time is an `inline-block`, and an `inline-block` starts its own block formatting context, so the inherited negative indent applied a SECOND time inside the time itself. The glyphs painted 46px left of their own box. That is past the left edge of the detail pane, and the pane clipped all but the last digit: `04:08` rendered as `8`, hard against the queue column.

**Every geometry check in `design/kit/checks/` reads `getBoundingClientRect`,** and the rectangle was correct to the pixel on all 66 screens at ten widths. A probe written specifically to hunt this reported 0 misplaced times before a screenshot of the same page showed three of them outside the pane. This is the same class as the contrast defect stage 09 found: the value is never wrong in any file, and it resolves wrong. Here the box is never wrong either, and only the ink moves. It was found the one way it can be found, by looking at the picture.

The second is a state that ran in the wrong state. `margin-bottom` on the expansion's head is the gap between the head and the working, and it was declared on the head rather than on `[open]`, so it also ran while the expansion was closed: 8px of padding above the line and 16 below it, and the component whose whole job is to cost nothing until it is asked was the tallest quiet thing in the block. Closed now measures 40px against 48, with 8 above and 8 below.

## 2026-08-26 &middot; The exam screen stays, and node 7.1 is outside the MVP with a built screen

Stage 13 step 7 built `design/tenant.html` and its three states as an **exam**: a subagent with clean context, given nothing but the handoff package, to find out whether that package is enough to build from. The stage pack requires the fate of an exam artefact to be settled out loud, branch A keep it as work or branch B delete it as a probe. **The owner chose A.** The four pages stay, they carry a record in `design/_nav.js`, and the coverage map counts them.

**Grounds, and there are four.**

**It is the detail behind the only surviving differentiator.** `CLAUDE.md` names per-tenant earned latitude made readable where the analyst works, and says stages 04 and 07 carry the whole of it. Until now the product could show the fleet and could not show one tenant. A probe deleted here would have deleted the one screen that answers *why this ceiling*, which is the question the fleet raises and cannot close.

**The map already pointed at it.** `ia/docs/sitemap.md` gives node 3.5 the transition `7.1 for the detail, when it exists`. The screen is not an invention beside the structure; it is the destination the structure had been naming since stage 03b.

**It was built from the handoff package alone, which is what the exam was for.** The agent had never seen the project. A screen that arrives that way is evidence about `handoff/`, and deleting the evidence to keep the corpus tidy would have thrown away the result of the test along with the artefact.

**It measures clean.** `node design/kit/checks/coverage-map.mjs` reports 66 records against 66 files, clean in both directions, 66 opened with one `h1` and the panel rendered, and 0 in one and not the other. The four pages carry no `<style>`, no `style` attribute and no `svg`, and each links `design/system/index.css`.

**What accepting it does not do, and this half matters more than the first.**

**The node's scope is still LATER.** Nothing about the MVP changed. `ia/docs/sitemap.md` has no column that can say *outside the MVP and built*, so the Scope cell keeps **LATER** and the fact is written as a sentence next to the cluster 7 table rather than as an invented status value. `ia/_nav.js` keeps `file: null` for the same reason: `file` there names the node's own **specification** page under `ia/`, and the tally on `ia/structure.html` counts written specifications. A filename in that field would be a 404 in the panel and a specification claimed where none exists.

**It has no `ia/docs/pages/7.1.md` and no grey wireframe.** The state set is **derived** rather than specified: the four columns of 3.5's state matrix that survive being asked about one tenant instead of forty. There is no grey original, so `grey` stays `false` in the registry and **no pixel comparison is claimed**. `coverage-map.mjs` still counts 7.1 among the six LATER screens with no grey original, and that is correct.

**The count moves and one of the two numbers is not the one people will guess.** The product is **66 pages across 14 screens**. `ls design/*.html | wc -l` returns 67, of which `overview.html` is the hub and not a page. The screen count is IA nodes with a built screen, which is the records in `design/_nav.js` whose `colour` is above zero: 14. **`wireframes/` stays 62 and always will**, because the grey corpus is frozen and node 7.1 never had a wireframe, so every sentence about the grey pages keeps its number and every dated record of a run that covered 62 keeps its number too.

## 2026-08-26 &middot; The panel defect of 2026-08-25 was on two more stages by two more roads, and a label carried markup

**The panel did not travel on the concept stand, and the cause was a class name rather than a declaration.** Both stand pages take their document column from `research/_page.css .shell` and both link `design/system/index.css` after it, which brings `components/shell.css`. That file claims the same generic `.shell` for the PRODUCT shell: `align-items:stretch` and `height:100vh`, which is right for a screen that scrolls inside its own zones. Same specificity, later sheet, so it won, and `.shell` computed to 900px while the document ran to 4747px and 6333px. A sticky element sticks only inside its containing block, so `#sidebar` computed `position:sticky` and still left the page: its top went 56 to **-3544** over 3600px of scroll, against 56 to 56 on `research/research.html` and 0 to 0 on `design/kit/btn.html`. The reader was handed an empty column for the remaining 3847px.

The system also took the panel's OFFSET with it. `base.css` sets `top:0` because the surfaces it was written for carry no top padding; `research/_page.css` sets `top:56px` because it does. With the system loaded last the stuck panel measured `top 0`, its first roadmap link glued to the window edge. The offset is restored from the sheet that owns the column rather than invented, in `design/concept/_stand.css`, which is the file that already exists for exactly this collision one rung lower down.

**Then the same defect turned up on a third road, and the fix there is deliberately NOT the same.** `design/overview.html`, the UI + Visual hub, wears `.shell` and links `system/index.css` with no `research/_page.css` at all. Measured at 1440: shell 900px against a 3340px document, panel top 0 to **-2440**. Cured with the same three declarations and **without** the offset, because this page has no sheet carrying top padding and `base.css`'s own `top:0` is correct for it: `design/kit/btn.html` measures 0 to 0 on that exact chrome. Copying the concept stand's `top:56px` here would have been copying a cure rather than reading one. After: **3340 against 3340, top 0 to 0**, identical to the kit.

**Three stages had this, and the count is the finding.** The entry of 2026-08-25 closed it where stage 07 had disabled it on purpose. It was still open on the concept stand and on the UI + Visual hub, reached by inheritance rather than by a branch, which is why looking for the disabled declaration a second time would never have found it. What the two have in common is not a value, it is that both are documentation pages wearing a class the product owns.

**And a label carried markup.** Three section labels on `design/concept/directions.html` were written `'A &middot; Ledger'`. A label is a JavaScript string, `/_nav.js` writes every one of them with `textContent`, and `textContent` does not decode a character reference, so the sidebar printed seventeen characters instead of three words. Both cures are honest and they cure different things: the three strings now carry the real character, because the source of a data field should read as what it means, and `/_nav.js` decodes before it writes, because that file is one registry against which **133 pages** declare labels and only the second cure cannot recur. The decoder cannot introduce markup: the only string ever handed to `innerHTML` is a match of a pattern admitting nothing but `&`, `#`, letters, digits and `;`, from which no tag, attribute or url can be built, and the result then goes to `textContent` like every label before it. A label carrying a real `<` prints as itself, which is why neither `innerHTML = label` nor a bare parse of the whole string was used: both would silently swallow a `<b>` a label might legitimately contain.

**All 133 files declaring `NAV_SECTIONS` were swept and exactly one carried an entity.** Verified on 32 assertions at 1440 and at a measured 360 in the shipped dark theme, including the decoder against named, numeric and hex references and against an injection attempt that printed byte for byte. `contrast.mjs`: 364 renderings over 91 pages, 0 failures, 0 overflow, 0 page errors.
