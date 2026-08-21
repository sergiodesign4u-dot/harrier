# Block bank, by page type

**Why this file exists.** Every other artefact in this pipeline has a rule of origin: a research fact cites a source, a job traces to evidence, a colour comes from a pixel. The composition of a page did not. A node template that says "blocks: 1, 2, 3" and does not say where they came from gets the median of everything the model has seen, and that median only becomes visible at stage 04, when the structure is already rolled out.

So the source is fixed here, **per page type** rather than per node. Forty six nodes are nine types, and seven of them are in round one.

**Two sources answering two different questions.**

| Source | Question | How |
|---|---|---|
| **Domain** | What actually holds a person in our category | Playwright on public, pre-login pages |
| **Craft** | How a page of this type is built in best in class outside our category | Refero, searched by page type and job |

**A correction to what was said at the entry gate.** At the gate I said no competitor publishes a page of this type outside a login, so the domain half would be our own research. That was wrong in a useful way: **vendor documentation publishes screenshots of the real product**, and those are public pages of exactly the right type. The domain half of this bank is therefore real, not a substitute.

**Four rules of filling.** A block with no trace is not taken. The comparison column is filled rather than skipped. A reference is an input, not an output: a composition that matches one source one to one is a copy. Every block carries a scope label, because a denser IA silently doubles stages 04 and 07.

---

## Type A: a list in a split pane

**Nodes:** 3.1 Case Queue, 3.2 streaming, 3.3 stale, 3.4 nothing waiting, 5.1 Decision log, 5.2 narrowing, 5.3 not findable, 5.6 history of one case. **Eight nodes, all MVP.**

### Sources opened this session

| Source | What it is | Where |
|---|---|---|
| **PagerDuty Operations Console** | Documented incident console, the closest public analogue to our main screen | [support.pagerduty.com](https://support.pagerduty.com/main/docs/operations-console), screens in `research/screens/pagerduty-*-2026-08-21.webp` |
| **Microsoft Defender incident queue** | The same split pane with an AI assessment in the panel | [learn.microsoft.com](https://learn.microsoft.com/en-us/defender-xdr/incident-queue), screens in `research/screens/defender-*-2026-08-21.png` |
| **Rox opportunities** | Craft: table plus an AI analysis side panel, dark, dense | Refero `f76773ad-5963-4985-8cc0-cf9b7e78dd6c` |
| **Fingerprint events** | Craft: dense event table, column toggling, row detail | Refero `0e472ed6-9efa-43cc-842d-eb034c2540aa` |

### The bank

| Source | Block | Verdict | Traces to | Scope | Where we are better, and which barrier |
|---|---|---|---|---|---|
| Defender | **Summary cards above the list** (`Attack disruptions: None, last 30 days`, `Queue reduction: 71%, last 30 days`) | **DIFFERENT** | HJ1, the fleet bet | MVP | Their two cards are marketing inside the console: `71%` with a window and **no absolute count**, which design principle 2 forbids in its own words. Our equivalent is 0.3, which shows `34 of 36 upheld, 30 days`, and it is per tenant rather than per portal |
| PagerDuty | **Live and Paused toggle beside the page title** | **DIFFERENT** | MAIN. A stale queue is a wrong decision | MVP | Theirs is a control the operator sets, ours is a state the system reports, and both are needed. 0.4 reports; a deliberate pause during a storm is a real need we do not yet cover. **Recorded as a gap rather than taken** |
| PagerDuty, Defender | **Filter chips above the list, each removable, with the sort as a chip** | **TAKE** | MAIN, and 3.6 | MVP | Nothing to improve. Both do it, it is right, and it is not presented as ours |
| Defender | **Saved filter sets** (`Selected filter set: None, Save`) | **LEAVE** | nothing | n/a | No formulated job, already decided at the base layer against the entity inventory. Defender ships it, and we still do not |
| PagerDuty | **Column selector, drag to reorder, up to ten custom fields, sort on three columns** | **LEAVE** in the MVP | nothing yet | LATER | Configurability is what a product ships when it cannot decide what the row should say. Design principle 1 says every row is a decision: **we owe the analyst an opinionated row, not a column builder.** If we are wrong, this is the first thing to add |
| PagerDuty | **Density toggle, two list icons** | **LEAVE** | nothing | n/a | Density is design principle 5, not an option. A product that lets you turn density off has not committed to it |
| Defender | **Row: name, id, priority score `100`, tags, severity as bars plus a word, investigation state, categories** | **DIFFERENT** | MAIN, design principle 1 | MVP | Two faults to avoid. `100` is a bare score with no claim, scope or window. And the incident name is a generated sentence that **truncates in the row**, so the row's widest column carries the least decidable content. Our row carries what Clerk concluded and what checking it will cost |
| Defender | **Severity as a three bar glyph plus the word** | **TAKE** | a11y, and speed of scan | MVP | Redundant coding, correct. Colour is not the only carrier, which is also what stage 06 will need |
| Defender | **Prev and next arrows in the panel header** | **TAKE** | MAIN, and the grid model in 0.1 | MVP | Traversal without returning to the list. It is the mouse equivalent of the keyboard model we already specified, and it makes the pattern discoverable |
| Defender | **The panel ends in `Open incident page`** | **LEAVE, and it is the differentiator** | MAIN, reason 2 of the chosen pattern | n/a | Their panel is a **preview**; the work happens on a full page, and the list does not survive the decision. Ours is the workspace: 4.1 is where the verdict is filed, and 4.2 exists only for a permalink and for mobile |
| Defender | **AI assessment as named factors with counts, each expandable** (`3 Notable Alert Types`, `1 High Risk Threats: Ransomware`, `3 Critical tags involved`) | **TAKE** | design principle 2, depth one key away | MVP | The best thing on the reference. Cheapest correct thing first, depth one key away, and every factor carries a count. We add the scope and the window that they leave off |
| Rox | **`Thought for 20s` above the AI output** | **DIFFERENT** | design principle 2, the provenance strip | MVP | Effort is the right idea, taken from Lichess `Depth` at stage 01 and confirmed here as shipped practice. Time alone is thin: ours names sources queried, how many, over what window, alongside the effort |
| Rox, Intercom | **Inline source chip attached to the claim** (`Cnbc +1`) | **TAKE** | design principle 2, and the trust barrier in `personas.md` | MVP | Citation at the claim rather than a bibliography at the end. This is what makes a narrative checkable in seconds instead of read in minutes |
| Rox | **Composer at the foot of the panel** (`Ask about the selected account`) | **LEAVE** | nothing | n/a | A chat with Clerk is a different product and a different job. The foot of our panel belongs to the verdict, because that is what the analyst came to do. **The strongest LEAVE in this table**: it is the most tempting block on the reference |
| Rox | **Filter icon inside each column header** | **LEAVE** | 3.6 covers it | n/a | Two filtering surfaces teach two habits. One scope bar, named once |
| Fingerprint, PagerDuty | **Export the current view to CSV** | **TAKE** | R2, and the compliance requirement | LATER | An auditor asks for a list, not a screen. Not MVP because 5.4 already answers the single case question, which is the one with a job behind it |
| PagerDuty | **Side panel width draggable, and the width remembered per user** | **TAKE** | MAIN, and it closes an open question | MVP | Not an improvement on them, a **correction to us**: node 0.1 recorded "is the split resizable, and is the position remembered" as unanswered. A shipped console in this exact category does both. The question is now closed with evidence rather than carried to stage 04 |
| PagerDuty | **Bulk actions on checked rows** | **LEAVE** | nothing | n/a | A verdict is a judgement on one case with its own evidence. Bulk accept is the single fastest way to destroy the audit trail this product exists to produce, and it would make design principle 3 a lie |

### What the comparison column found, stated rather than implied

Three of our advantages are the same advantage: **the references show numbers without their claim, their scope, their window or their count.** `71%`, `100`, `Thought for 20s`. Each is legible and none is checkable. That is not a small differentiator, but it is one differentiator, and calling it three would be inflating the count.

The one genuinely structural difference is the panel. **Defender's panel previews and ours decides.** Everything downstream of that, no bulk actions, no chat composer, verdict controls at the foot, follows from it.

### Composition for 3.1, assembled from more than one source

Top to bottom. No single reference has this order, which is the test the pack sets for a bank rather than a copy.

1. Scope and filter chips, removable, sort as a chip. **PagerDuty and Defender**
2. Connection strip with the age of the data. **Ours, 0.4**
3. The list. Row carries: what the case is, which client, what Clerk concluded, what checking it will cost, and the visible states `escalated` and `unrecorded`. **Ours, from design principle 1**
4. Severity as glyph plus word. **Defender**
5. The pane, resizable and remembered, with prev and next in its header. **PagerDuty and Defender**
6. In the pane at rest: the fleet. **Ours, and it is where a reference would have put an empty state**

**What is deliberately absent:** summary cards, saved views, a column builder, a density toggle, bulk actions, and a chat composer. Six blocks that all four references ship and we do not, each with a reason above.

---

## Type B: a record detail with an AI narrative

**Nodes:** 4.1 Case File in the detail pane, 4.2 Case File standalone, 4.3 Clerk still investigating, 4.5 amend the narrative, 4.7 evidence expired, 4.8 no baseline, 4.9 verdict did not write, 4.10 held locally, 5.4 log entry `?as-of`, 5.5 snapshot did not survive. **Ten nodes, all MVP.**

This is the type the whole product is for. 4.1 is the screen where the analyst rules on Clerk, and it is the second of the two screens that go to full colour.

### Sources opened this session

| Source | What it is | Where |
|---|---|---|
| **Defender, Copilot incident summary** | An AI narrative filed on a real record, with its own timestamp and its own controls | [learn.microsoft.com](https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-incident-summary), screen in `research/screens/defender-copilot-incident-summary-2026-08-21.png` |
| **Defender, Copilot guided response** | The AI recommending actions on entities, with status per card and permission visible on the control | [learn.microsoft.com](https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response), screen in `research/screens/defender-guided-response-2026-08-21.png` |
| **PagerDuty, Incidents** | The non AI half of a record detail: timeline, actors, channels, and what redaction leaves behind | [support.pagerduty.com](https://support.pagerduty.com/main/docs/incidents), screens in `research/screens/pagerduty-incident-timeline-2026-08-21.webp` |
| **Parallel, Deep Research** | Craft: a generated finding where every sentence carries a chip that opens its source, its schema field and its reasoning | Refero `bb40b82c-4f98-41c2-bbbf-6fdb143a1612` |
| **Rox opportunities** | Craft, carried from type A: the AI analysis pane beside the record | Refero `f76773ad-5963-4985-8cc0-cf9b7e78dd6c` |

### The bank

| Source | Block | Verdict | Traces to | Scope | Where we are better, and which barrier |
|---|---|---|---|---|---|
| Defender | **Tabs on the record header, each carrying a count** (`Alerts (3)`, `Evidence and Response (24)`, `Similar incidents (1)`) | **TAKE, reduced** | design principle 2 | MVP | The count is the block, not the tabs. A number on the label prices the check before the click. We take the counts and not the eight tabs: eight is what a console ships when nobody decided what the analyst opens first |
| Defender | **AI narrative as a prose lead then dated bullets, entities quoted and linked inline** (`'mapo77'`, `'sada23'`, IPs as links) | **TAKE** | MAIN | MVP | The right shape for a case narrative: one paragraph to decide from, bullets to check against, and every entity a link rather than a string to copy out. Nothing to improve, and it is not ours |
| Defender | **`Last updated: Jun 9, 2025 6:27 PM` stamped on the AI summary itself** | **TAKE, and mandatory for us** | the compliance requirement, and 5.4 | MVP | For them it is a courtesy. For us it is load bearing: 5.4 addresses an evidence snapshot as it stood at a time, so the narrative that carries no time cannot be addressed at all |
| Defender | **Banner at the top of the record when the machine already acted** (`A potentially compromised account was disabled automatically by attack disruption`) | **TAKE** | the visible states rule, and 0.6 | MVP | This is what our rule "a case that left the analyst's hands must not look identical to one that did not" looks like when someone ships it. Ours adds the action class and whether it can still be undone, which 0.6 already ranks |
| Defender | **`Completed recommendations 2/4` plus a status on each card** (`New`, `Completed`) | **TAKE** | 4.3, and design principle 2 | MVP | The agent's own progress, counted rather than spun. 4.3 needs exactly this: Clerk is still working, and the analyst can see how much of it is done |
| Defender | **Each recommendation names the entity it applies to and why it is recommended** | **TAKE** | design principle 2 | MVP | A recommendation without its reason is an instruction. Ours goes one step further and names what would happen if it is wrong, because that is the question a Tier 2 analyst is actually asking |
| Defender | **Permission limited actions are shown greyed out, not hidden** (`Grayed out action buttons mean these actions are limited by your permission`) | **TAKE, and it is a find** | 0.3, 0.6, 8.3 | MVP | The best answer we have seen to how latitude renders. A hidden action teaches nothing; a disabled one with its reason teaches the ceiling. This is the block that makes per tenant autonomy legible **on the case** rather than on a settings page, and it is the differentiator doing real work |
| Parallel | **A chip on the sentence that opens a panel carrying the source, the schema field and the reasoning for that one value** | **TAKE** | design principle 2, and the trust barrier | MVP | Deeper than the inline chip we took in type A: the panel explains not just where the claim came from but what kind of claim it is. That is what makes a narrative auditable rather than merely cited |
| Parallel | **`HUMAN` and `MACHINE` tabs over the same result** | **TAKE** | R2, and the compliance requirement | LATER | One finding, two renderings: prose for a person, structure for a system. The auditor's copy and the analyst's copy stop drifting because they are the same object. LATER because the MVP ships the human rendering and 5.4 already answers the single case question |
| PagerDuty | **Timeline rows written as sentences naming the actor and the channel** (`Resolved by Mark Phillips through the website`) | **TAKE** | 5.6, and the append only log | MVP | The channel is the part most logs drop, and it is the part that answers "was this a considered decision or a thumb on a phone at 03:00". Our 4.10 depends on exactly that distinction |
| PagerDuty | **Machine actions in the same stream as human ones** (`Incident Workflow ... started via Conditional Trigger`) | **TAKE** | the append only log, and the Clerk contract | MVP | One log, both actors. A separate "automation log" would let the two histories disagree, and the whole product rests on them not disagreeing |
| PagerDuty | **Redaction leaves a record of who redacted and when, and cannot be undone** | **TAKE** | 4.7, 5.5 | MVP | The tombstone pattern, shipped. Our 4.7 and 5.5 are the same shape: the evidence is gone and the record of it being gone is not. A blank would read as a bug; a tombstone reads as a fact |
| PagerDuty | **`Show All Details` with a per row `Hide Details` on composite events** | **TAKE** | design principle 2 | MVP | Depth one key away, at row level. Cheap, correct, and it keeps a long history scannable |
| Defender | **`Classification: Not set` as an ordinary optional field** | **DIFFERENT** | 4.10, and the visible states rule | MVP | For them the ruling is metadata that defaults to unset and nothing changes if it stays that way. For us the ruling is why the record exists: `unrecorded` is a state the row and the case both wear, and it is 4.10 |
| Parallel | **`Basis` chip carrying a bare number** (`Basis 69`, `Basis 72`) | **DIFFERENT** | design principle 2 | MVP | Reading the page I cannot tell whether 69 is a citation index or a score, and **that ambiguity is the finding**. Same family as `100` and `71%` in type A: a number that does not name its claim. Ours names the claim first and the number second |
| Defender | **`AI-generated content may be incorrect. Check for accuracy.` on every card** | **DIFFERENT** | design principle 2, and the trust barrier | MVP | The same sentence whether Clerk is on firm ground or guessing, which means it carries no information and trains the analyst to stop reading footers. Ours puts uncertainty on the claim that is uncertain, and 4.8 makes "no baseline for this tenant" a state rather than a disclaimer |
| Defender | **Thumbs up and thumbs down under each card** | **DIFFERENT** | design principle 3, and 0.7 | MVP | A thumb cannot tune a detection. Our feedback is the rejection reason from 0.7, structured on two axes and routed, and it is the same keystroke as the override rather than a second chore afterwards |
| PagerDuty | **Field change rendered as `resolution_category to "1"`** | **DIFFERENT** | 5.6 | MVP | A raw column name and a raw code value in a human timeline, with no previous value. The log is showing the database rather than the decision. Ours renders both sides in product words |
| Defender | **Summary cached for a week, redisplayed unchanged at no cost** | **DIFFERENT, and it names our hole** | 4.7, 5.4 | MVP | A published retention window on AI output, and it is the **third** time this layer has hit the retention question that `research.md` section 10 still carries unanswered. Theirs expires quietly; ours cannot, because 5.4 promises an address that resolves. 4.7 exists because of this row |
| Defender | **The incident graph as the default tab** | **LEAVE** | nothing | n/a | The largest object on the screen and it does not answer "does the verdict hold". Worth naming out loud: it is also the most portfolio friendly thing in this bank, which is exactly why leaving it out has to be a decision rather than an omission |
| Defender | **`See prompts` and suggested follow up questions** | **LEAVE** | nothing | n/a | Same ruling as the chat composer in type A, and for the same reason. A conversation with Clerk is a different product |
| Defender | **`Open in Security Copilot`, leaving the console for the agent's own portal** | **LEAVE** | design principle 5 | n/a | The verdict is filed where the evidence is. Sending the analyst to the agent's home to understand the agent is the same fault as the panel that ends in `Open incident page` |
| Defender | **`Regenerate` the summary** | **LEAVE, and it is the most consequential LEAVE here** | the append only log, design principle 3 | n/a | Regenerating a verdict before ruling on it means the thing accepted is not the thing that was filed, and the log cannot say which one it was. If Clerk is wrong the path is 4.4, reject with a reason, which teaches. Regeneration is the path that teaches nothing and erases the disagreement |
| Defender | **`+ Add task`, `Completed tasks 0/7` task pane** | **LEAVE** | nothing | n/a | Case management is a job we did not qualify. The three MVP jobs do not include running the work of the incident, only ruling on it |
| Defender | **Auto generation settings with an estimated cost per severity** (`estimated SCU consumption`) | **LEAVE** | nothing here | n/a | Putting a price on the agent thinking makes checking feel expensive, which is the opposite of what this product needs. If any node owns it, it is 7.2 with the SOC lead, not the case with the analyst |

### What the comparison column found

**One block was worth the whole type: the greyed out action with its reason.** Defender uses it for role based access, and it is the answer to a question our differentiator has been carrying since 0.3. Per tenant autonomy is legible when the analyst can see, on this case, what Clerk could have done here and could not. A hidden control says nothing; a disabled control with a stated ceiling says everything. That block goes into 4.1 and it is what 0.3 points at.

**The other finding is a repeat, and repeats are worth counting once.** `Basis 69` joins `100`, `71%` and `Thought for 20s`. Four references, four numbers, none of which names its claim. Type A called this one differentiator. Type B does not make it a second one; it makes it better evidenced.

**And one honest note about scope.** Three of the five LEAVE rows in this table are the same instinct in different clothes: `See prompts`, `Open in Security Copilot` and `Regenerate` all invite the analyst to keep talking to the agent instead of ruling on it. We are not leaving them because they are bad. We are leaving them because Clerk prepares and the analyst rules, and every one of the three blurs which of those is happening.

### Composition for 4.1, assembled from more than one source

Top to bottom. As with 3.1, no single reference has this order.

1. Case header: what it is, which client, and the state chips including `escalated` and `unrecorded`. **Ours, plus Defender's chip row**
2. If Clerk already acted, a banner naming the action, its class from 0.6 and whether it can still be undone. **Defender, plus 0.6**
3. Clerk's verdict in one sentence, before the evidence. **Ours, design principle 2**
4. The narrative: prose lead, then dated bullets, entities linked inline. **Defender**
5. Every claim carries its chip, and the chip opens the source, the field and the reasoning. **Parallel, deeper than Rox**
6. Provenance strip: sources queried, how many, over what window, and the effort. **Ours, from the `Thought for 20s` row in type A**
7. Tenant context: is this normal at this client. **Ours, design principle 4**
8. What Clerk could have done here without asking, with out of latitude actions **disabled and explained** rather than hidden. **Defender, plus 0.3 and 0.6**
9. Verdict controls at the foot: accept, amend, reject, escalate, each one key. **Ours, design principle 3**
10. `Last updated` stamp, and the `?as-of` address of this snapshot. **Defender, plus the compliance requirement**

**What is deliberately absent:** the incident graph, suggested prompts, `Regenerate`, the task pane, `Open in Security Copilot`, thumbs up and down, and the blanket AI disclaimer. Seven blocks the references ship and we do not.

---

## Type C: a shift digest

**Nodes:** 2.1 Shift brief, 2.2 assembling, 2.3 nothing carried over, 2.4 closed by the outgoing analyst, 2.5 close failed. **Five nodes, all MVP.**

### The half that is missing, said out loud

**This is the type with no reference, and the pack anticipated the case.** Three Refero searches (`shift handover daily digest`, `what changed since you were away`, `on call schedule handoff`) returned calendars, changelogs and analytics dashboards. None is a page of this type. On the domain side, PagerDuty's on call handoff article is gone from the current knowledge base (`/main/docs/on-call-handoff-notifications` returns 404, checked this session) and nothing in the live tree replaces it.

So type C has **no craft half and no domain half**, and the substitute is named rather than silent: our own research from stage 01, the shift handover study in `research/screens/ucl-shift-handover-study.jpeg` and `research/screens/ucl-handover-difficulties.jpeg`, plus blocks already sourced in types A and B. **The comparison column below carries the barrier, not a comparison.** Nothing here should be read as "better than the market", because for this type we did not find the market.

This is the pack's stop condition, and it goes to the user rather than being decided here.

### The bank, from transfer and from the barrier

| Source | Block | Verdict | Traces to | Scope | The barrier it answers |
|---|---|---|---|---|---|
| Transfer, type B | Prose lead then dated bullets, entities linked | **TAKE** | HJ2, pick up a shift | MVP | The brief is a narrative about a period, which is the same shape as a narrative about a case. One component, two uses |
| Transfer, type B | `Last updated` stamp on generated text | **TAKE** | HJ2 | MVP | A brief with no time cannot be trusted at 07:00 to describe 03:00 |
| Transfer, type A | Counts on every claim | **TAKE** | design principle 2 | MVP | `9 cases carried over` is decidable, `several open items` is not |
| Transfer, type B | Machine and human actions in one stream | **TAKE** | HJ2, the append only log | MVP | What Clerk did overnight and what the outgoing analyst did are one history, or the incoming analyst reads two |
| Own research | **What the outgoing analyst could not finish, and why** | **TAKE** | HJ2 | MVP | The barrier: handover fails on what was left implicit, not on what was recorded. This block has no reference because no product we opened has this job |
| Own research | **The brief is generated and then edited by the outgoing analyst before it closes** | **TAKE** | HJ2, and the Clerk contract | MVP | Same contract as the case: Clerk drafts, the human signs. 2.4 and 2.5 exist because that signature can fail |
| Barrier | An empty brief must read as `nothing carried over`, not as a failure | **TAKE** | 2.3 | MVP | The quiet shift is the good outcome and the interface must not make it look broken |
| Transfer, type A | Live and Paused, saved views, density toggle | **LEAVE** | nothing | n/a | Already ruled on in type A. A digest is read once and closed |

**What we cannot claim for type C.** That our brief is denser, faster or better than anyone's. We have no page of this type to compare against, and inventing one would be the exact failure this file exists to prevent.

---

## Type D: the fleet and the scope bar

**Nodes:** 3.5 Fleet, the resting state of the detail pane, and 3.6 scope and filters. **Two nodes, both MVP.** 3.5 is the node the whole differentiator rides on.

### Sources opened this session

| Source | What it is | Where |
|---|---|---|
| **Defender multitenant management** | A shipped, documented multi tenant console for exactly our operator | [learn.microsoft.com](https://learn.microsoft.com/en-us/unified-secops/mto-overview) |
| **n8n Insights** | Craft: how an automation platform reports its own agents' performance, per unit | Refero `7d7bd040-7dba-4808-9441-a6276ae90db2` |
| **Fingerprint workspace overview** | Craft: status strip plus metric cards plus breakdown tables | Refero `802ff0b1-b86e-4316-8635-52a3e4cad2d3` |
| **PagerDuty and Defender filters** | Carried from type A, same session | see type A |

### The finding that must be stated before the table

Microsoft ships this. Verbatim: multitenant management *"provides your security operations teams with a single, unified view of all the tenants you manage"*, and MSSP partners *"gain visibility into cases, security incidents, alerts, and threat hunting across multiple customers through a **single pane of glass**"*.

**"Single pane of glass across tenants" is therefore not our claim and must never be presented as one.** Stage 02 already narrowed the differentiator once for this reason. What survives is narrower and it is confirmed by this page rather than weakened by it: in Defender the tenant list lives at **`Configuration > Settings`**, described as *"Lists the tenants you have access to. Use this page to view and manage your tenants."* Their fleet is an administration surface. Ours is the resting state of the working pane, at zero taps, showing latitude and accuracy rather than inventory.

That is the whole claim, and this source is the strongest evidence we have for it.

### The bank

| Source | Block | Verdict | Traces to | Scope | Where we are better, and which barrier |
|---|---|---|---|---|---|
| Defender | **A unified cross tenant view of incidents for one operator** | **TAKE, and it is not ours** | MAIN | MVP | Shipped by Microsoft, documented publicly. We take it and we do not claim it |
| Defender | **The tenant list as a settings page** | **DIFFERENT, and it is the differentiator** | P2-MAIN, the fleet bet | MVP | Theirs answers "which tenants do I administer". Ours answers "how much rope does Clerk have here right now, and has it earned it". Same list, different question, different place in the product |
| Defender | **Tenant groups**, *"Organize the tenants you manage into named groups"* | **TAKE** | 3.6 | MVP | Forty tenants need grouping or the scope bar is a scroll. Named groups, not saved filter sets, which type A already left |
| Defender | **Two levels: all tenants, and one tenant** (*"For all tenants and at a tenant-specific level"*) | **TAKE the structure, DIFFERENT on the metric** | 3.5, 7.1 | MVP | The two level shape is right. Their per tenant values are inventory (`device type, device value, onboarding status, risk status`); ours are latitude in force and the upheld count behind it |
| n8n | **Per unit breakdown table with the metric that matters, one row per workflow** | **TAKE** | 3.5, design principle 1 | MVP | A row per tenant beats a chart per tenant at forty rows. Their headline metric is average run time; ours is `34 of 36 upheld, 30 days`, because the operator's question is trust, not throughput |
| n8n, Fingerprint | **KPI card row above the table** | **LEAVE** | nothing | n/a | Third time this bank has ruled against the summary card, and the reason has not changed: a portal wide number is not a per tenant decision |
| Fingerprint | **Charts as the primary reading of the fleet** | **LEAVE in the MVP** | nothing yet | LATER | The fleet must be readable at a glance without decoding a chart. Whether a sparkline earns its width on the trend column is `[?]` until stage 04 draws it |
| Type A | Filter chips, removable, sort as a chip | **TAKE** | 3.6 | MVP | Already banked. 3.6 reuses it rather than inventing a second filtering idiom |

---

## Type E: a dialog

**Nodes:** 1.2 session expired, 4.4 reject with a reason, 4.6 escalate, 7.3 grant change. **Four nodes, three MVP**, 7.3 is LATER.

### Sources opened this session

| Source | What it is | Where |
|---|---|---|
| **YouTube Music, Report video** | Craft: single select reason list inside a dialog, the closest public analogue to 4.4 | Refero `b509a225-cf49-4888-b3f4-9246f7146855` |
| **Webflow, turn site into a store** | Craft: a dialog that states what it will create and warns it cannot be fully undone | Refero `59ddb501-a856-4348-930e-1565b0b67fd9` |
| **Copy.ai, bulk delete** | Craft: destructive confirm with a count | Refero `913dc6cb-3ed4-45a0-a57a-c4f88cf91fef` |
| **Manus, delete account** | Craft: irreversible action gated by a fresh code with a countdown | Refero `aedac041-0b3d-41f9-8824-70c5ed160fbd` |
| **Defender classification values** | Domain, carried from 0.7 | see `ia/docs/pages/rejection-reason-taxonomy.md` |

### The bank

| Source | Block | Verdict | Traces to | Scope | Where we are better, and which barrier |
|---|---|---|---|---|---|
| YouTube Music | **Single select reason list, one radio per reason** | **TAKE the shape** | 4.4, 0.7 | MVP | Right control for a taxonomy. Ours is 0.7's axis A, six values, and five of the six need no second question |
| YouTube Music | **An info affordance on every reason** | **TAKE** | 0.7, design principle 3 | MVP | A reason nobody understands is a reason nobody picks correctly, and the whole tuning loop then runs on noise |
| YouTube Music | **Eleven flat options with no grouping** | **DIFFERENT** | 0.7 | MVP | Eleven flat is a scan. Ours is two paired axes, and the pairing is what makes the second question disappear |
| YouTube Music | **Footer reads `Cancel` and `Next`** (step 3 of 6) | **DIFFERENT, and it matters most** | design principle 3 | MVP | `Next` means the reason costs five more steps. Design principle 3 says override is one key and it teaches. **Rejecting Clerk must be cheaper than accepting it is, not dearer** |
| Copy.ai | **Destructive confirm naming the count** (`4 selected rows`) | **TAKE the count** | 4.6 | MVP | Naming what is affected is right |
| Copy.ai | **Buttons read `Cancel` and `OK`** | **LEAVE** | nothing | n/a | `OK` names nothing, which is how people confirm the wrong thing. Our buttons say the outcome: `Escalate to tier 3`, `Reject and tune` |
| Webflow | **The dialog states what it will create and warns it cannot be fully removed** | **TAKE** | 4.6, and the append only log | MVP | A dialog that names its consequences. 4.6 must say who receives the escalation and that the handover is written to the log either way |
| Manus | **A fresh verification code with a countdown before an irreversible action** | **LEAVE for MVP, keep for 7.3** | 7.3 | LATER | Far too heavy for a verdict taken forty times a shift. Right weight for changing what Clerk may do to a client without asking |
| Ours, 0.5 | **The dialog consumes Escape and does not propagate** | **TAKE, already decided** | 0.5 | MVP | Inherited, not taken from a reference. It is what keeps the keyboard model honest when a dialog is open |
| All four | **Warning icon or illustration in the header** | **LEAVE** | nothing | n/a | Design principle 5. The dialog is small because the evidence behind it must stay visible |

---

## Type F: sign in

**Node:** 1.1 Sign in. **One node, MVP.** This is the one type where the public web is full of real examples, so both halves are real pages rather than documentation.

### Sources opened this session

| Source | What it is | Where |
|---|---|---|
| **PagerDuty identity** | A live pre login page from a product in our category | [identity.pagerduty.com](https://identity.pagerduty.com), screen in `research/screens/` |
| **Microsoft Entra sign in** | The identity provider our persona's employer actually uses | [login.microsoftonline.com](https://login.microsoftonline.com), screen in `research/screens/entra-sign-in-2026-08-21.png` |
| **Shuttle log in** | Craft: a minimal single card sign in | Refero `49bf1064-20ff-4e89-a500-723270919c65` |

### The bank

| Source | Block | Verdict | Traces to | Scope | Where we are better, and which barrier |
|---|---|---|---|---|---|
| PagerDuty, Entra | **Identifier first: one email field, no password on screen one, button reads `Next`** | **TAKE** | 1.1 | MVP | Both vendors, independently. The email decides whether the account goes to SSO or to a password, which is the only sane flow when every provider has its own identity setup. `autocomplete="username"` on the field |
| Entra | **`Can't access your account?` in reach of the field** | **TAKE** | 1.1 | MVP | Recovery beside the failure, not in a footer |
| Entra | **`Sign-in options` and `Continue with Google` / `Continue with Apple`** | **LEAVE** | nothing | n/a | Consumer identity. A Tier 2 analyst reaches Harrier through the provider's SSO, and offering anything else is an invitation to a shadow account |
| PagerDuty, Entra | **`Sign up` / `No account? Create one!`** | **LEAVE** | nothing | n/a | Harrier has no self serve signup. Seats are provisioned by the MDR provider, so a signup link would be a dead end wearing a primary colour |
| Entra | **Passkey support present in the page** (`IsFidoSupported`) | `[?]`, **LATER** | 1.1 | LATER | Whether Harrier offers a passkey path is unsettled. Recorded, not assumed |
| Ours | **The deep link survives authentication** | **TAKE, and it is ours** | 1.1, 0.1 routes, the 03:00 scenario | MVP | Neither reference has our problem. An on call analyst opens `/case/{id}` from a pager at 03:00, hits the sign in, and must land **on that case**, not on the queue. A sign in that drops the destination costs the one minute the whole mobile rendering exists to save |

---

## Type G: a systemic state

**Nodes:** 8.1 not found, 8.2 service unavailable, 8.3 permission denied. **Three nodes, two MVP.** 8.3 became LATER at the stage 08 audit, and the row below says why.

### Sources opened this session

| Source | What it is | Where |
|---|---|---|
| **PagerDuty 404** | A live not found page from a product in our category | `support.pagerduty.com/main/docs/this-page-does-not-exist-harrier-check`, screen in `research/screens/pagerduty-404-2026-08-21.png` |
| **Defender permission behaviour** | Domain, carried from type B: *"Grayed out action buttons mean these actions are limited by your permission"* | see type B |

### The bank

| Source | Block | Verdict | Traces to | Scope | Where we are better, and which barrier |
|---|---|---|---|---|---|
| PagerDuty | **A plain statement and nothing else above it** (`Page Not Found` / *"The page you're looking for can't be found."*) | **TAKE** | 8.1 | MVP | No illustration, no joke, no apology paragraph. Correct |
| PagerDuty | **Two named next actions in the sentence** (*"view or search all articles, or contact our Support Team"*) | **TAKE** | 8.1, 8.2 | MVP | The exits are named actions, not a lone `Go home` button. Ours are `Search the queue` and `Open the log`, because those are the two places a lost case id could still be |
| PagerDuty | **A `More options` list of six further destinations** | **LEAVE** | nothing | n/a | Six links is a sitemap in a dead end. Two exits, chosen |
| Defender | **Permission handled at the control, greyed out with a reason** | **TAKE, and it removed a node** | 8.3, 0.6 | MVP | If permission is answered in place, the only route left to 8.3 was a deep link into another tenant. **The stage 08 audit found that route is itself a defect**: out of scope must render as 8.1 or the address enumerates other providers' clients. With it gone, nothing in the MVP reaches 8.3, and the node moved to LATER. The idle control returned a genuine "not reachable" |
| Ours | **8.1 must not leak whether the case exists** | **TAKE, and it is ours** | 8.1, tenant data isolation | MVP | Neither reference has multi tenant isolation to protect. In an MDR console `no such case` and `not your tenant` must render **identically**, or the 404 becomes a way to enumerate other providers' clients. This is a security requirement expressed as a copy rule, and it goes to stage 05 |
| Ours, 0.4 | **8.2 is the terminal form of the connection strip** | **TAKE** | 8.2, 0.4 | MVP | 0.4 already reports degraded connection in place. 8.2 is only for when nothing renders at all, which means the two must agree on their vocabulary or the analyst sees two different words for one condition |
