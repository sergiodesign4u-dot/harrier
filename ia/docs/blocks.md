# Block bank, by page type

**Why this file exists.** Every other artefact in this pipeline has a rule of origin: a research fact cites a source, a job traces to evidence, a colour comes from a pixel. The composition of a page did not. A node template that says "blocks: 1, 2, 3" and does not say where they came from gets the median of everything the model has seen, and that median only becomes visible at stage 04, when the structure is already rolled out.

So the source is fixed here, **per page type** rather than per node. Forty five nodes are nine types, and seven of them are in round one.

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
