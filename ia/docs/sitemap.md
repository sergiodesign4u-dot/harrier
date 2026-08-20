# Harrier: information architecture, base layer

Stage 03a. Built on `research/docs/personas.md`, `research/docs/jtbd.md` and `research/docs/research.md`.

**What this file is not.** This is the **concept** layer: entities, screens grouped by intent, a navigation model and a traceability matrix. Per-page specification, node types and dialogue states belong to the detail layer at stage 03b and are deliberately absent here.

**One input is missing and the substitution is declared.** The pipeline traces a step-screen of the main path to a phase in `cjm-to-be.md`, so that a step is not mistaken for an orphan. This project runs a shortened track and CJM is not in it. **Step-screens therefore trace to a node in `flows.md` instead**, which is produced at Step 4, before the matrix at Step 5. Coverage is still proven; the document proving it is different. What is genuinely lost is the emotional curve per phase, so the emotional and social table rests on `personas.md` and the two practitioner studies rather than on phase data.

---

## Entities

Objects before screens. Screens only display objects, and objects grow out of jobs. Every entity below names the job that produces it; an object that no job requires is not invented here.

### 1. Case

The centre of gravity. `aarrr.md` records that every stage of the funnel is answered by this same object: replay shows a queue of them, activation is ruling on one, the trust report aggregates them, referral forwards one.

**Parts:** identifier, tenant, alert class and the shape of the case, Clerk's narrative in prose, the evidence set, the proposed verdict, a confidence that names its claim and scope and window, a provenance strip of effort spent, the per-tenant base rate, status, timestamps.

**Job:** MAIN. **Related to:** Tenant, Signal, Evidence item, Verdict.

### 2. Signal

The raw alert Clerk correlates into a case.

**Parts:** source tool, rule name, the entity involved (asset or account), time, severity as reported, **and whether it agreed or disagreed with the verdict**.

**Job:** MAIN, through the RIT finding that analysts think in incident narratives while tools explain single alerts: "we have to find a connection between the critical and the high alerts to determine if it's an incident or part of an attack process".

**This object deliberately has no screen of its own.** `CLAUDE.md` states that the analyst never works raw alerts. The second pass at Step 2, the one that checks every object has somewhere to be seen, has to stumble on this deliberately rather than quietly.

### 3. Evidence item

One unit of evidence inside a case.

**Parts:** what it is, where it came from, **which claim it supports**, whether it agreed, and whether it is something Clerk looked for and did not find.

**Job:** MAIN. **Related to:** Case, Decision log entry.

Separated from Case rather than left as a field, because design principle 2 with its ceiling, cheapest correct thing first and depth one key away, is a rule about how exactly this object is rendered.

### 4. Verdict

The human ruling.

**Parts:** outcome (accept, amend or reject), the analyst, timestamp, the reason when rejected, the edited narrative when amended, **and the evidence snapshot as it stood at decision time**.

**Jobs:** MAIN, R2, R3.

### 5. Tenant

The client.

**Parts:** name, Clerk's current autonomy state here, accuracy trend, base rates per signal class, assets, security contact.

**Jobs:** P2-MAIN, MAIN (the base rate in the case header), R4.

Design principle 4: the same signal is a Tuesday at one client and an incident at another.

### 6. Autonomy grant

Not a field on Tenant. Its own object, because it carries a history and a reason.

**Parts:** tenant, **action class**, the named lane, when it changed, **on what evidence**, who changed it.

**Jobs:** P2-MAIN, MAIN (the state in a fixed position).

The market confirmed the shape rather than the novelty: Simbian ships four named lanes with progression that "is not linear and not global", per action and per alert type. Nothing found ships a slider.

### 7. Shift handoff

**Parts:** the shift window, who hands over and who takes it, **notes that accumulate through the shift**, pointers to cases, what moved, what waits on a decision, what Clerk closed on its own, which tenants changed autonomy and on what evidence.

**Job:** R1.

Two constraints from the evidence, and both are properties of the object rather than of a screen: it accumulates through the shift and is **closed** at the end rather than written at the end, and it is **signposting into cases, not a document**.

### 8. Rejection reason

The tuning signal.

**Parts:** the case, what Clerk got wrong, the class of error, where it was routed, **and whether a tuning change followed and when**.

**Job:** R3. **Recipient:** the detection engineer, who is not a user.

The last part is not decoration. The business outcome in `research.md` is the share of rejections whose stated reason produced a tuning change within 14 days. Without it, design principle 3 only performs listening.

### 9. Client summary

**Parts:** tenant, period or incident, Clerk's draft, the analyst's edits, sent state, who approved it.

**Job:** R4.

### 10. Decision log entry

**Parts:** actor (Clerk or human), action, timestamp, **the evidence snapshot as it stood at that moment**. Append-only.

**Job:** R2.

Not our choice: a requirement in `CLAUDE.md`, Geo and compliance.

### 11. Analyst

Kept minimal.

**Parts:** name, shift, assigned cases or queue.

**Jobs:** R1, R2 (who ruled), MAIN (assignment).

---

## Under question: objects with no job

**Review sample.** The set of cases Clerk closed on its own, sampled for a human to check. **No job exists**, and that was already recorded at stage 02. The need is real and written in `aarrr.md`, knowing what the agent did while nobody was watching, but nobody formulated the work. The audit side of this object is covered by P2-MAIN; the analyst side is covered by nothing. The fork is resolved at Step 5: either a job is formulated, or the object is not built.

**Saved view.** A stored slice of the queue. `[?]` No formulated job requires it. The market says both forms coexist, since Defender ships an opinionated ordering that explains its own reasoning **and** saved filter sets. We have no job under it, so it stays out of the main list.

**Detection rule.** The detection engineer's object. That person is a non-user with no screen in this MVP. It exists as the **recipient** of entity 8 rather than as something Rasha works with.

---

## Two things this inventory already shows

**Entity 2 has no screen on purpose.** That is a product decision from `CLAUDE.md`, not an omission. The object pass at Step 2 will hit it, and it should hit it consciously.

**Eleven entities against a project boundary of roughly nine screens.** Objects and screens are not one to one, but it does mean several objects must share a screen. Step 2 has to name which ones, rather than opening a screen per object.

---

## Concept sitemap

Screens grouped by the intent of the person, not by sections of a product. Structure is derived from jobs; no competitor's menu was copied.

**Language fork resolved.** `CLAUDE.md` line 3 records one language, English. Nodes do not multiply per language.

**Second declared substitution.** The MVP and LATER label normally comes from the backlog in `cjm-to-be.md`. That file is out of track, so the source here is the **MVP core in `jtbd.md`** (three jobs) plus the compliance requirement in `CLAUDE.md`. Different source, same test: what breaks the path if removed.

### A. Take the shift

*What happened here while I was away.*

| Screen | Job | Persona | Scope |
|---|---|---|---|
| **A1 Shift brief.** What moved, what waits on a decision, what Clerk closed on its own, which tenants changed latitude | R1 | primary | **MVP** |

One screen, two roles: the incoming analyst reads it, the outgoing one closes it. Not split into two screens, because closing is a state rather than a screen. Both constraints from the evidence live in the object rather than in the screen: it accumulates through the shift, and it is signposting into cases rather than a document.

### B. Work the queue

*What to touch next.*

| Screen | Job | Persona | Scope |
|---|---|---|---|
| **B1 Case Queue.** A cross-tenant list where the row carries the shape of the case, the client, what Clerk concluded and what checking it will cost | MAIN | primary | **MVP** |
| **B2 Fleet.** Latitude and accuracy trend per tenant | P2-MAIN | primary reads, secondary acts | **MVP** |

**B2 is not a separate route.** It is the resting state of B1's detail pane, inherited from the pattern chosen at stage 01 and confirmed by the choice of primary persona at stage 02.

### C. Rule on the case

*Decide in a way I can defend later.*

| Screen | Job | Persona | Scope |
|---|---|---|---|
| **C1 Case File.** Clerk's narrative in prose, the evidence, the tenant's base rate, the provenance strip, the signals that disagreed, and the verdict itself | MAIN | primary | **MVP** |

**Rejecting with a reason does not become a screen.** Design principle 3 says one key. A separate screen for rejection is not one key, it is a route. R3 therefore lives inside C1, which is exactly what stage 02 concluded when it gave R3 no slot of its own in the core.

### D. Answer for it later

*Show what was known at the time.*

| Screen | Job | Persona | Scope |
|---|---|---|---|
| **D1 Decision log.** The append-only record with evidence snapshots, readable across cases, from which a case can be opened **as it stood** | R2 | primary and secondary | **MVP** |

In the MVP not on importance but because it is a compliance requirement in `CLAUDE.md`, which is not our decision to defer.

### E. Tell the client

| Screen | Job | Persona | Scope |
|---|---|---|---|
| **E1 Client summary.** Clerk's draft, the analyst's edits, sending | R4 | primary writes, secondary owns | **LATER** |

### F. Grant the rope

| Screen | Job | Persona | Scope |
|---|---|---|---|
| **F1 Tenant autonomy.** Grants per action class, the evidence under each, the history of changes | P2-MAIN | secondary | **LATER** `[?]` |
| **F2 Tenant detail.** One client: their cases, base rates, accuracy trend | P2-MAIN, context for R4 | secondary | **LATER** |

**F1 is deliberately LATER, and it is the most consequential decision on this map.** Open question 2, whether the autonomy control lives in the operator console at all, is still `[?]`, and stage 02 established that the market treats latitude as configuration under a permission rather than as a distinct job.

So the MVP core carries the fleet **as a view (B2)** rather than as a control (F1). That is precisely what is left of the differentiator after stage 02: Simbian's per-tenant autonomy is configuration, and ours has to be a view. The map now enacts that sentence instead of repeating it.

**Five screens in the MVP, three LATER.** The project boundary said roughly nine.

### Pass 1: against the chosen UX pattern

The pattern is split-pane review with the fleet as the resting state of the detail pane. **One thing works against it, and it is named rather than smoothed over.**

**C1 as its own full-page route breaks reason 2 of the pattern**, which is that cheap override needs the list to survive the decision. A full page for the case does not leave the list standing.

**The map is corrected, not the pattern.** C1 has **two renderings of one screen**: the detail pane inside the console, which is the primary one, and a standalone route for a permalink and for mobile. The console never leaves the split.

**A1 does not hold the split, and that is deliberate.** It is the one screen read once and then abandoned, and it sits before the review loop rather than inside it. The pattern governs the review loop, not the entry.

**At 360 the split collapses and the pattern stops being itself**, which `ux-patterns.md` already said at stage 01. Our mobile scenario is read and escalate, which is C1 as a standalone route. The two agree, so there is nothing to reconcile.

### Pass 2: against the entity inventory

The pass that is easy to skip, and without which the Step 1 inventory has no check at all.

| Entity | Where it is seen or acted on |
|---|---|
| 1 Case | B1 as a row, C1 in full |
| **2 Signal** | **only inside C1** |
| 3 Evidence item | C1 |
| 4 Verdict | made on C1, recorded in D1 |
| 5 Tenant | a column on B1, a row on B2, in full on F2 |
| 6 Autonomy grant | state on B2, changed on F1, history in D1 |
| 7 Shift handoff | A1 |
| 8 Rejection reason | entered on C1, recorded in D1, routed onward to a non-user |
| 9 Client summary | E1 |
| 10 Decision log entry | D1 |
| 11 Analyst | seen on A1 and D1, needs no screen of its own |

**The pass produced one finding: entity 2 is the only object with no screen where it is the subject.** That is not an omission. `CLAUDE.md` states the analyst never works raw alerts, and this pass was meant to hit that consciously rather than let it pass in silence.

**The constraint that follows, and stage 04 inherits it.** If the signal is not readable inside the case, the object disappears from the product entirely. There is no other place for it.

---

## Navigation

The concept map says which screens exist and by which intent they are grouped. This says how a person moves between them. Global navigation here is the shortest path for the primary persona to the main job, not a list of what to put in a menu.

### Global navigation, four items

| Item | Leads to | The job behind it |
|---|---|---|
| **Queue** | B1, with B2 as the resting state of the pane and C1 in it when a case is selected | MAIN. The activation node, First Verdict |
| **Shift** | A1 | R1 |
| **Log** | D1 | R2, and the compliance requirement |
| **Clients** | F2, and F1 deeper | P2-MAIN in action. LATER |

**The fleet gets no item of its own, deliberately.** It is the resting state of the Queue's right pane, so it costs **zero taps**: it is already on screen when nothing is selected. A menu item would turn it into a place you have to **go**, and the whole point is that looking at it should not be a trip.

**The price of that decision, named rather than hidden.** Returning to the fleet is a deselection, an interaction rather than a navigation, which is a discoverability risk. Stage 04 inherits this explicitly: if the empty state of the pane does not read as "this is the fleet" rather than "this is empty", the decision fails.

### Levels, assigned deliberately

The concept sitemap at Step 2 is deliberately without levels, so without this assignment there is nothing to count taps against.

| Level | Screens |
|---|---|
| **1**, straight from global navigation | B1 Queue, A1 Shift brief, D1 Decision log, F2 Tenant detail (LATER) |
| **1 without a tap**, present rather than opened | **B2 Fleet** |
| **2**, opened from level 1 | C1 Case File, from a B1 row or an A1 pointer |
| **3**, rare actions | F1 Tenant autonomy (LATER), E1 Client summary (LATER) |

### Depth, counted against those levels

The primary persona's main job is to decide whether Clerk's verdict holds, and it closes when a verdict is filed.

**The ordinary path**

```
B1 Queue (landing, 0)  ->  select a case (1)  ->  file the verdict (2)
```

**Two taps.**

**The start-of-shift path**

```
A1 Shift brief (landing, 0)  ->  a pointer into the case (1)  ->  file the verdict (2)
```

**Two taps.**

The second number is the more interesting one, because it does not rest on trimming a menu. It rests on a **property of the object**: the handoff is signposting into cases rather than a document, which four of six interviewed responders described. So the pointers on A1 lead **straight into a case** rather than through the queue.

Had the handoff stayed the prose document the stage 01 decision originally described, this path would be **three taps**, because a step would appear: find that case in the queue. Evidence, then structure, then a measurable outcome.

**The secondary persona's main job** reads at **zero taps**, because the fleet is on the landing screen, and acts at **three**: Clients, then tenant, then autonomy. The gap is deliberate. Watching should be constant; moving latitude should be rare and considered.

**No restructuring was needed**, and the three-tap limit is not breached. But flattening is never free, and this is what was paid:

| Paid | With what |
|---|---|
| Discoverability of the fleet | No menu item; the way back is a deselection |
| Depth of the secondary persona's action | Changing latitude sits at level 3, three taps |
| E1 at level 3 | The client summary is far from the case it grows out of |

### Global, contextual, deep

**Global, always visible.** The four navigation items, **plus the tenant's autonomy state in a fixed position**. That is an element rather than a menu item, taken in `benchmark.md` from the Flight Mode Annunciator, where armed and active are read from a fixed place and `OVRD` is its own annunciated state. The fixed position is a requirement rather than a preference: a mode that has to be inferred from context is a display failure.

**Contextual.** C1 in the detail pane. The rejection reason inline on C1. E1 from a case or from a client.

**Deep.** Changing a grant on F1. The log narrowed to the history of one case.

---

## Traceability

Rows are the functional jobs from `jtbd.md`. Columns are every screen in the concept sitemap. A tick means the screen actually takes part in closing the job. Emotional and social jobs are not in this matrix; they have their own table below, because asking "where does the person do this" of a quality is a question with no answer.

**Step-screens trace to flow nodes, not to CJM phases.** The substitution was declared at the entry gate and the flows were built at Step 4 precisely so that this column has something to point at.

| Job | A1 Shift brief | B1 Case Queue | B2 Fleet | C1 Case File | D1 Decision log | E1 Client summary | F1 Tenant autonomy | F2 Tenant detail |
|---|---|---|---|---|---|---|---|---|
| **MAIN** rule on the case | ✓ *(flow node `Point`)* | ✓ | | ✓ | ✓ *(flow node `Log`)* | | | |
| **R1** pick up and hand off a shift | ✓ | | | | | | | |
| **R2** answer for a past decision | | | | ✓ *(the case as it stood)* | ✓ | | | |
| **R3** teach the agent | | | | ✓ *(flow nodes `Reject`, `Route`)* | ✓ | | | |
| **R4** tell the client `LATER` | | | | ✓ *(entry point)* | | ✓ | | ✓ |
| **P2-MAIN** where latitude was earned | | | ✓ *(read)* | | ✓ *(history)* | | ✓ *(act)* | ✓ |

**Scope row**

| | A1 | B1 | B2 | C1 | D1 | E1 | F1 | F2 |
|---|---|---|---|---|---|---|---|---|
| **Scope** | MVP | MVP | MVP | MVP | MVP | LATER | LATER | LATER |

**Estimate: 5 screens in the MVP, 3 later.** Stages 03b, 04 and 07 all start from the MVP subset rather than from the whole map.

### Orphans

**Screen orphans: none.** Every column carries at least one tick.

**Job orphans: none.** Every row carries at least one tick.

**Reported honestly rather than celebrated.** A check that returns zero in both directions proves nothing about itself. So the matrix was pushed harder, and it gave up two findings that a tick count alone would have hidden.

### What the matrix found instead

**1. Two of six jobs cannot close inside the MVP.**

- **R4** carries ticks only on C1, which is an entry point, and on E1 and F2, which are both LATER. The job is genuinely deferred, and the matrix says so rather than implying coverage.
- **P2-MAIN** carries its read on B2, which is MVP, and its act on F1, which is LATER. Only half of the job is buildable in the first round.

**2. And the second one goes straight at the MVP core.** P2-MAIN is one of the three core jobs, entered as the bet. The matrix shows the bet is narrower than it read at stage 02.

> The bet is not that an analyst will change latitude from the console. It is that **seeing** where latitude stands changes the decisions they make on cases. F1 is deferred precisely because whether the control belongs here at all is still `[?]`.

That is a sharper statement of H1 than stage 02 had, and it came from counting cells rather than from thinking harder.

**3. No screen labelled MVP is without a tick**, so there is no inflated label to report.

### Emotional and social jobs: what carries them

Not closed by a screen. The mechanism column is written so that something can be built from it, because the detail layer takes states and trust evidence from here and stage 05 takes its entry into tone.

| Job | Mechanism | Where it lives | What supports it |
|---|---|---|---|
| **Emotional, P1.** Feel I was thorough rather than lucky | The evidence block renders **what Clerk looked for and did not find** as explicitly as what it found. Absence gets the same weight as presence. Beside it the provenance strip says how much effort was spent, so a fast decision is attributable to the agent's work rather than to skipping | C1, the evidence block and the provenance strip | The pains in `personas.md` and the RIT trust-explainability curve. The feeling of thorough against lucky is itself `PREMISE` |
| **Emotional, P1**, the part with no mechanism | For cases Clerk closed **on its own**, which the analyst never sees, there is **nothing yet**. The review sample has no job and is not built | Nowhere | Open. This is the same unresolved question recorded in the entity inventory, and it is a backlog entry rather than an error |
| **Social, P1.** Look like the work of someone who knew what they were doing | The verdict record is composed from **structured parts rather than free text**, so its quality does not depend on how tired the author was at 07:00. Structure is what removes the variation | C1 verdict, A1 brief, D1 log entry | UCL: handover quality varies widely between individuals, no organisation trains it formally, and seniors read and feed back on newer analysts' notes. The reputational motive itself is `[?]` |
| **Emotional, P2.** Be able to point at why, so I am not the person who guessed | Every autonomy grant carries **the evidence that justified it and the date**, so the answer to "why did you widen this" is a record rather than a memory | F1 and the grant history in D1. **In the MVP this is readable but not settable** | `PREMISE` on liability. The shape is confirmed by Simbian, which describes latitude as earned when the agent "has demonstrated enough accuracy against your data" |

### Concept map reconciled with the flows

The flows produced **no new screens**. Every screen node in every flow already existed on the map: A1, B1, B2, C1, D1. `Pointer`, `Overlap` and `Route` are steps or events rather than screens, and `Route` deliberately leaves the product.
