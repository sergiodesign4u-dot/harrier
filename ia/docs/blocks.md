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

