# Harrier: information architecture, base layer

Stage 03a. Built on `research/docs/personas.md`, `research/docs/jtbd.md` and `research/docs/research.md`.

**What this file is not.** This is the **concept** layer: entities, screens grouped by intent, a navigation model and a traceability matrix. Per-page specification, node types and dialogue states belong to the detail layer at stage 03b and are deliberately absent here.

**One input is missing and the substitution is declared.** The pipeline traces a step-screen of the main path to a phase in `cjm-to-be.md`, so that a step is not mistaken for an orphan. This project runs a shortened track and CJM is not in it. **Step-screens therefore trace to a node in `flows.md` instead**, which is produced at Step 4, before the matrix at Step 5. Coverage is still proven; the document proving it is different. What is genuinely lost is the emotional curve per phase, so the emotional and social table rests on `personas.md` and the two practitioner studies rather than on phase data.

---

## Entities

Objects before screens. Screens only display objects, and objects grow out of jobs. Every entity below names the job that produces it; an object that no job requires is not invented here.

### 1. Case

The centre of gravity. `aarrr.md` records that every stage of the funnel is answered by this same object: replay shows a queue of them, activation is ruling on one, the trust report aggregates them, referral forwards one.

**Parts:** identifier, tenant, alert class and the shape of the case, Clerk's narrative in prose, the evidence set, the proposed verdict, a confidence that names its claim and scope and window, a provenance strip of effort spent, the per-tenant base rate, **status including `escalated` and `unrecorded`**, timestamps.

**`escalated` and `unrecorded` were added at Step 7**, because the fixes at Step 6 gave two dead ends a way out and both exits leave a case in a condition nothing on the map could display. A case that left the analyst's hands and looks identical to one that did not is worse than no escalation at all.

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

**Parts:** actor (Clerk or human), action, timestamp, **the evidence snapshot as it stood at that moment**. Append-only. Actions include a **recorded gap**: evidence that no longer exists, written down as a fact rather than rendered as a blank that looks like an answer.

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

## Node map

The concept sitemap said which screens exist and by which intent they are grouped. This replaces it with the **data behind those screens**: every node carries a number, a type, a group, what it includes, where it goes and what it costs. Dialogs and states are nodes here, not footnotes, which is why eight screens become forty three nodes.

**Numbering.** `X` is a cluster, `Y` is a step or a state inside it. Cluster 0 is the shell, cluster 1 the session, clusters 2 to 7 follow the six intents of the base layer in the order the analyst meets them, cluster 8 is systemic.

**Scope is carried, not re-decided.** MVP and LATER come from the screen each node belongs to, decided at stage 03a against the MVP core in `jtbd.md`. Twelve nodes have no parent screen because they were discovered here; their labels are set in this section and named as such below.

**Language fork resolved.** `CLAUDE.md` line 3 records one language, English. Nodes do not multiply per language.

### Cluster 0: shell and navigation

Group `global`. Present on every authenticated node, specified once.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **0.1 Console shell** | page | Split pane, list on the left and detail on the right, keyboard traversal of the list. Holds 0.2 to 0.5 | Wraps 3.1, and any node the analyst opens without leaving the split | MAIN, structurally | **MVP** |
| **0.2 Global navigation** | section | Queue, Shift, Log, Clients. Four items, no item for the fleet | 3.1, 2.1, 5.1, 7.1 | MAIN, R1, R2, P2-MAIN | **MVP** |
| **0.3 Tenant autonomy annunciator** | section | The current tenant's latitude, its accuracy trend, and whether an override is in force. Fixed position, read only in the MVP | Reads from 3.5, changed only at 7.2 | HJ1, the bet | **MVP** |
| **0.4 Live connection status** | state | Connected, reconnecting, stale. Named age of the data when not connected | 3.3 when stale | MAIN, because a stale queue is a wrong decision | **MVP** |
| **0.5 Keyboard map** | dialog | Every shortcut the console answers to, grouped by what it does rather than by key | Overlays any node, returns to it | MAIN, design principle 5 | **MVP** |
| **0.6 Action class taxonomy** | data | The canonical list of what Clerk can be permitted to do, grouped by what it touches, each class carrying its reversibility | Read by 0.3, 3.6, 7.2 and every queue row | HJ1, and it is what makes per class latitude expressible | **MVP** |
| **0.7 Rejection reason taxonomy** | data | The canonical list of why a verdict was rejected, structured rather than free text | Written at 4.4, read by 5.1, leaves the product for tuning | R3, design principle 3 | **MVP** |

**0.6 and 0.7 arrived discover-as-you-go**, at the gate that closes the global elements. Neither is a screen. Both are canonical lists of values that several nodes read, which is exactly the class the pipeline says to define once and reference rather than restate. They are marked MVP here because the nodes that read them are MVP: per class latitude is not expressible without 0.6, and a rejection reason that routes to tuning is not possible without 0.7.

**0.3 is the whole differentiator in one element.** It is an annunciator rather than a menu item, taken in `benchmark.md` from the Flight Mode Annunciator where armed and active are read from a fixed place and `OVRD` is its own annunciated state. A mode that has to be inferred from context is a display failure.

### Cluster 1: session

Group `pages`. Serves no job. It exists because the append-only log in `CLAUDE.md` records who decided, and because tenant isolation has to start somewhere.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **1.1 Sign in** | page | Provider identity, the shift being joined | 2.1 at the start of a shift, otherwise 3.1 | None. Compliance | **MVP** |
| **1.2 Session expired** | dialog | Says what was unsaved and holds it. Never discards a verdict in progress | Back to the node it interrupted, or 1.1 | None. Compliance | **MVP** |

**1.1 is the only public URL this product has.** Everything below it is behind authentication, `noindex`, no schema.

### Cluster 2: take the shift, expands A1

Group `pages`. Route in `flows.md`, R1.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **2.1 Shift brief** | page | What moved, what waits on a decision, what Clerk closed alone, which tenants changed latitude. Pointers lead **straight into a case** | 4.1 by a pointer, 3.1 otherwise | R1 | **MVP** |
| **2.2 Assembling** | loading | What is being gathered, not a spinner | 2.1 | R1 | **MVP** |
| **2.3 Nothing carried over** | empty | A short brief is a real answer, not a failure. Says what was quiet | 3.1 | R1 | **MVP** |
| **2.4 Closed by the outgoing analyst** | state | The brief accumulated through the shift and is now sealed, with who closed it and when | 1.1 out | R1 | **MVP** |
| **2.5 Close failed** | error | The brief stays open and warns **both** analysts, incoming and outgoing | Retry into 2.4 | R1 | **MVP** |

**2.1 is one screen in two roles rather than two screens.** Closing is a state, which is why 2.4 is a state node. Both constraints from the evidence live in the object rather than the screen: it accumulates through the shift, and it is signposting into cases rather than a document.

### Cluster 3: work the queue, expands B1 and B2

Group `pages`. The landing surface. Route in `flows.md`, main job.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **3.1 Case Queue** | page | Cross-tenant list. The row is the canonical component: shape of the case, client, what Clerk concluded, what checking it will cost | 4.1 on selection | MAIN | **MVP** |
| **3.2 Queue streaming in** | loading | Rows arrive as they are correlated. The count is provisional and says so | 3.1 | MAIN | **MVP** |
| **3.3 Queue stale** | error | Connection lost. The list stays readable and carries the age of what is shown, because a silently frozen queue is worse than an empty one | Recovers into 3.2 | MAIN | **MVP** |
| **3.4 Nothing waiting on a decision** | empty | The list is empty, the pane is not: this is where 3.5 does its work | 3.5 | MAIN | **MVP** |
| **3.5 Fleet, the resting state of the pane** | section | Every tenant's current latitude and accuracy trend, legible at a glance. **Readable, not settable** | 7.1 for the detail, when it exists | HJ1 and P2-MAIN | **MVP** |
| **3.6 Scope and filters** | section | Tenant, severity, what Clerk concluded, what is escalated or unrecorded. Narrowing, **not saved views** | 3.1 | MAIN | **MVP** |

**3.5 is not a route and never gets one.** It is what the detail pane shows when nothing is selected, so it costs zero taps. The price is named at stage 03a: returning to it is a deselection, and if 3.4 reads as "this is empty" rather than "this is the fleet", the decision has failed.

**Saved views are deliberately absent from 3.6.** Defender ships them, but the entity inventory found no job under them. Narrowing serves the main job; storing a slice serves nothing we can name.

### Cluster 4: rule on the case, expands C1

Group `pages`. The product. Route in `flows.md`, main job.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **4.1 Case File in the detail pane** | page | Clerk's narrative in prose, the evidence block, the provenance strip, the tenant's base rate, the signals that disagreed, the verdict control. The primary rendering | 4.4 to 4.10, back to 3.1 on file | MAIN | **MVP** |
| **4.2 Case File, standalone route** | page | The same case at its own URL. Permalink for the log, and the only rendering at 360 | 4.6 from a phone at 03:00 | MAIN, mobile scenario | **MVP** |
| **4.3 Clerk still investigating** | loading | A case that exists but is not yet filed. Says what is being checked, so waiting is legible | 4.1 | MAIN | **MVP** |
| **4.4 Reject with a reason** | dialog | Inline, one key, structured reasons rather than free text. The reason routes to tuning and leaves the screen | 5.1 through the filed verdict | R3, inside MAIN | **MVP** |
| **4.5 Amend the narrative** | state | Clerk's prose becomes editable in place. What the analyst changed stays visible against what Clerk wrote | 5.1 through the filed verdict | MAIN | **MVP** |
| **4.6 Escalate** | dialog | The case stays open and is flagged **escalated**, which is a visible state on the row in 3.1 | 3.1 | MAIN, when the case cannot be closed | **MVP** |
| **4.7 Evidence expired** | error | The source no longer retrievable. A dead end for the job, and the only honest exit is 4.6 | 4.6 | MAIN | **MVP** |
| **4.8 No baseline for this tenant** | empty | This client has no base rate yet. Says so rather than rendering a comparison that means nothing | Back into the decision | MAIN, principle 4 | **MVP** |
| **4.9 Verdict did not write** | error | Nothing was recorded, and the screen says exactly that rather than implying success | Retry, or 4.10 | MAIN | **MVP** |
| **4.10 Held locally, unrecorded** | state | The verdict is kept, the case stays open and is flagged **unrecorded**, visible on the row in 3.1 | 3.1 | MAIN | **MVP** |

**Sections of 4.1 are not nodes, they are canonical components.** The evidence block, the provenance strip and the verdict record appear again on 4.2 and on 5.4. Each is defined once and referenced; three editions of the provenance strip would diverge first.

**Rejecting does not become a screen.** Design principle 3 says one key. A screen is a route, not a key, so 4.4 is a dialog inside the case.

**4.7 and 4.9 are different failures and must not share a treatment.** One is evidence that aged out, the other is a write that did not land. Both leave the analyst holding an open case, and both had no exit at all until the second critique at stage 03a.

### Cluster 5: answer for it later, expands D1

Group `pages`. Route in `flows.md`, R2. In the MVP by compliance, not by preference.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **5.1 Decision log** | page | Append-only, readable across cases and tenants. Every Clerk action and every human override | 5.4 | R2 | **MVP** |
| **5.2 Narrowing before rendering** | loading | The log is large. Narrows before it draws | 5.1 | R2 | **MVP** |
| **5.3 Case not findable** | empty | Narrow by tenant, asset or date. The empty state is the search affordance | 5.1 | R2 | **MVP** |
| **5.4 Log entry, `?as-of`** | page | The evidence snapshot as it stood at decision time, addressable by URL. Opens a case **as it was**, not as it is | 4.2 for the live case | R2 | **MVP** |
| **5.5 Snapshot did not survive** | error | The log says so rather than rendering a gap that reads like an answer | 5.4 with the gap logged | R2 | **MVP** |
| **5.6 History of one case** | state | The log narrowed to a single case, every action and override in order | 5.4 | R2 | **MVP** |

**`?as-of` is the addressing decision of this layer.** It is what makes "show what was known at the time" a URL rather than a feature, and it is why the retention window recorded as an open question in `research.md` section 10 bounds this cluster arithmetically.

### Cluster 6: tell the client, expands E1

Group `pages`. **LATER**, inherited from E1.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **6.1 Client summary draft** | page | Clerk's draft from the filed verdict | 6.2 | R4 | **LATER** |
| **6.2 Editing and sending** | state | The analyst's edits, then sending | 5.1 | R4 | **LATER** |

### Cluster 7: grant the rope, expands F1 and F2

Group `pages`. **LATER**, inherited. The most consequential deferral on the map.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **7.1 Tenant detail** | page | One client: their cases, base rates, accuracy trend | 7.2 | P2-MAIN, context for R4 | **LATER** |
| **7.2 Autonomy grants** | page | Grants per action class, the evidence under each, the history of changes | 7.3 | P2-MAIN | **LATER** `[?]` |
| **7.3 Grant change** | dialog | Carries the evidence that justified the change and the date, so the answer to "why did you widen this" is a record rather than a memory | 5.1, because a grant change is a logged action | P2-MAIN | **LATER** |

**The fleet ships as a view before it ships as a control.** 3.5 and 0.3 are MVP, 7.2 is LATER. That is what is left of the differentiator after stage 02: Simbian's per-tenant autonomy is configuration, and ours has to be a view. The map enacts that sentence instead of repeating it.

### Cluster 8: systemic

Group `global`. No node here is a dead end.

| Node | Type | Includes | Goes to | Job | Scope |
|---|---|---|---|---|---|
| **8.1 Not found** | state | A case number that does not resolve, usually a stale link out of a chat | 3.1 | None. Systemic | **MVP** |
| **8.2 Service unavailable** | state | Names what is down and whether verdicts can still be filed | Retry | None. Systemic | **MVP** |
| **8.3 Permission denied** | state | A tenant that is not this analyst's. Tenant isolation is a stated requirement, so this is compliance rather than courtesy | 3.1 | None. Compliance | **MVP** |
| **8.4 Toast stack** | section | Filed, escalated, connection recovered. Never covers the evidence being decided on, per principle 5 | Dismisses in place | MAIN | **MVP** |

### The count

**Forty five nodes, forty of them MVP.** Five LATER, all of them in clusters 6 and 7. The map opened at forty three; 0.6 and 0.7 were added at the gate that closed the global elements, which is what discover-as-you-go is for.

Fourteen nodes arrived without a parent screen and had their scope set here rather than inherited: the whole of cluster 0 including the two taxonomies, both of cluster 1, 3.6, and the whole of cluster 8. All twelve are MVP, and each has a stated reason. 8.3 is not a nicety, it is tenant isolation from `CLAUDE.md`. 0.3 is the differentiator itself.

**One inheritance looks contradictory and is not.** 7.2 is LATER while 0.3 and 3.5 are MVP. Latitude is read everywhere and changed nowhere in the MVP, which is the deliberate gap between watching, which should be constant, and moving, which should be rare.

### Two passes, run at the concept level and still standing

Both checks below were made at stage 03a against the eight screens. They are kept rather than rerun: the node map expands those screens, it does not move them, so a pass that held for A1 to F2 holds for the clusters that expand them. What the node map adds is where each check now lands, named in the pass itself.

### Pass 1: against the chosen UX pattern

The pattern is split-pane review with the fleet as the resting state of the detail pane. **One thing works against it, and it is named rather than smoothed over.**

**C1 as its own full-page route breaks reason 2 of the pattern**, which is that cheap override needs the list to survive the decision. A full page for the case does not leave the list standing.

**The map is corrected, not the pattern.** C1 has **two renderings of one screen**: the detail pane inside the console, which is the primary one, and a standalone route for a permalink and for mobile. The console never leaves the split.

In the node map those two renderings are **4.1 and 4.2**, separate nodes rather than one node with a note, because they differ in navigation, in what surrounds them and in what they must survive at 360.

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
| **R1** pick up and hand off a shift | ✓ | ✓ *(rebuild path)* | | | | | | |
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

**4. B2 Fleet sits on the primary persona's landing screen and serves no job of hers.** Its only tick comes from P2-MAIN, which belongs to the secondary persona. The explanation exists and it sharpens the bet rather than excusing it: **HJ1** in `jtbd.md`, "when I start a shift, I want to know where the agent has earned latitude and where it has not", is assigned to P1. But HJ1 lives in the hypotheses section, and this matrix carries only functional jobs, so the link was invisible.

> **The fleet on the primary's landing screen rests on an unverified hypothesis.** That is the honest statement, and it is now written next to the matrix rather than hidden behind a tick that is not there. HJ1 is what stage 04 has to make readable, and what a first test would have to kill.


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
