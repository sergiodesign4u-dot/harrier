# 4.1 Case File in the detail pane

The node the product exists for. Everything before it is arrangement; this is where the analyst rules on Clerk.

It is also the node where the differentiator either does work or does not. 0.3 asserts that a tenant's latitude is legible at a glance; **4.1 is where that assertion is spent**, because this is the one screen where the analyst is about to act on a specific client.

---

## 1. Identity

| | |
|---|---|
| **Number** | 4.1 |
| **Name** | Case File in the detail pane |
| **Type** | page, rendered as the right pane of 0.1 |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | C1 on the concept map. Scope carried |
| **Page type for the bank** | **B, record detail with an AI narrative** |
| **Contains** | the evidence block, the provenance strip, the verdict record. All three are canonical components, defined in section 4 |
| **Route** | `/queue/case/{caseId}`. The list is in the address, which is the whole point |
| **Permission** | authenticated analyst, tenant inside provider scope. Actions further limited by role, and the limit is shown rather than hidden |
| **Job** | MAIN, and it is the activation node. Two taps from landing |

---

## 2. Purpose

Clerk has already investigated. It collected the signals, correlated them, and filed a written verdict with its evidence. **The analyst's job is not to investigate; it is to rule.**

So the screen is built around one question, asked as early as possible: *does this verdict hold?* Everything above the fold serves answering it in seconds, and everything below serves defending the answer months later.

Two rules from `CLAUDE.md` land here and shape the whole layout:

- **Clerk shows its work, up to a ceiling.** More explanation is not more trust. Cheapest correct thing first, depth one key away
- **Override is one key, and it teaches.** Rejecting is a first class action, not a fallback path, and it must cost less than accepting, not more

---

## 3. Blocks, in priority order

From `ia/docs/blocks.md`, type B. Ten blocks, assembled from four references, matching none of them.

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **Case header.** What it is, which client, and the state chips including `escalated`, `unrecorded` and whether Clerk acted | Ours, plus Defender's chip row | MAIN, the visible states rule | MVP |
| **2** | **Action banner, only when Clerk already acted.** Names the action, its class from 0.6, and whether it can still be undone and by whom | Defender: *"A potentially compromised account was disabled automatically by attack disruption"*, plus 0.6 | The visible states rule | MVP |
| **3** | **Clerk's verdict, one sentence, before the evidence** | Ours, design principle 2 | MAIN | MVP |
| **4** | **The narrative.** Prose lead, then dated bullets. Entities quoted and linked inline rather than listed at the end | Defender Copilot incident summary | MAIN | MVP |
| **5** | **The evidence block.** Every claim carries a chip; the chip opens source, field and the reasoning for that one value. **And it renders what Clerk looked for and did not find** | Parallel Deep Research for the chip; the absence half is ours | MAIN, and Emotional P1 | MVP |
| **6** | **Provenance strip.** Sources queried, how many, over what window, and the effort spent | Ours, from the `Thought for 20s` row banked DIFFERENT in type A | design principle 2, Emotional P1 | MVP |
| **7** | **Tenant context.** Is this normal at this client, with the base rate. No baseline is a state, 4.8, not a blank | Ours, design principle 4 | MAIN | MVP |
| **8** | **Latitude on this case.** What Clerk could have done here without asking, with out of scope actions **disabled and explained** rather than hidden | Defender: *"Grayed out action buttons mean these actions are limited by your permission"*, plus 0.3 and 0.6 | P2-MAIN, the differentiator | MVP |
| **9** | **Verdict controls at the foot.** Accept, amend, reject, escalate. Each one key, each showing its key on itself | Ours, design principle 3 | MAIN | MVP |
| **10** | **Time stamp and address.** `Last updated` on the narrative, and the `?as-of` address of this snapshot | Defender's stamped summary, plus the compliance requirement | R2, 5.4 | MVP |

**Deliberately absent, seven blocks the references ship:** the incident graph, suggested prompts, `Regenerate`, the task pane, `Open in Security Copilot`, thumbs up and down, and the blanket AI disclaimer.

**`Regenerate` is the load bearing absence here**, the way bulk actions were on 3.1. Regenerating a verdict before ruling on it means the thing accepted is not the thing that was filed, and an append only log cannot say which one it was. If Clerk is wrong, the path is 4.4, and 4.4 teaches.

**Block 8 is the differentiator, and it is a find rather than an invention.** Defender greys out actions the operator's role does not permit and says why. We use the same affordance for a different bound: not what the analyst may do, but what Clerk may do here, on this tenant, on this action class. A hidden control teaches nothing. A disabled control with its ceiling stated teaches the ceiling.

---

## 4. Three canonical components, defined here

Each appears again on 4.2 and 5.4. Defined once, referenced after. Three editions of the provenance strip would diverge first.

### The evidence block

| Part | Requirement |
|---|---|
| Claim | One line, in product words, never a raw field |
| Chip | Attached to the claim, not collected at the end. Opens the source, what kind of claim it is, and the reasoning behind that value |
| **Absence** | **What Clerk looked for and did not find, rendered with the same weight as what it found.** This is the half no reference has, and it is the mechanism the emotional job depends on |
| Disagreement | Signals that pointed the other way, kept visible rather than resolved away |

### The provenance strip

Sources queried, how many, over what window, and the effort spent. **Count first, never a bare percentage.** This is the shape 0.3 already fixed for the record: `34 of 36 upheld, 30 days`, not `94%`.

It exists because `Thought for 20s` is the right instinct badly executed. Time alone says the agent was busy. It does not say what it read.

### The verdict record

Composed from **structured parts, never free text**. The parts: what was decided, on what grounds, against which snapshot, by whom, when, and if rejected, the reason from 0.7 on both axes.

Free text stays as an optional addition and nothing downstream ever depends on it. Stage 02 found handover quality varies widely between individuals and that no organisation trains it. Structure is what removes the variation.

---

## 5. State matrix

| Element | Filed and waiting | Clerk still working, 4.3 | Clerk already acted | No baseline, 4.8 | Evidence expired, 4.7 | Write failed, 4.9 |
|---|---|---|---|---|---|---|
| **Header** | State chips | `investigating` | Banner above, naming the action and its class | Unchanged | Unchanged | Unchanged |
| **Verdict line** | Present | Absent. **What is being checked** is shown instead, so waiting is legible | Present | Present | Present, and marked as resting on evidence that can no longer be retrieved | Present, unfiled |
| **Evidence block** | Full | Partial, arriving | Full | Full | **Tombstone.** What was there, that it is gone, and when. Never a blank | Full |
| **Provenance** | Full | Counting up | Full | Full | As of the last good read | Full |
| **Tenant context** | Base rate | Pending | Base rate | **`No baseline for this tenant yet`.** Not a zero and not a comparison that means nothing | Base rate | Base rate |
| **Latitude** | Permitted and doing now | Doing now | **What it did, and whether it can be undone** | Permitted, and the record says how thin it is | Unchanged | Unchanged |
| **Verdict controls** | All four live | Escalate only | All four live | All four live | **Escalate only.** The honest exit, and 4.7 has no other | Retry, or hold locally into 4.10 |

**4.7 and 4.9 must not share a treatment**, and the base layer already said so. One is evidence that aged out, the other is a write that did not land. The first leaves a decidable case with an undefendable record; the second leaves a decision nobody can see. Both leave the analyst holding an open case.

**4.10 is what happens when 4.9 is not resolved.** The verdict is held, the case stays open, and the row in 3.1 wears `unrecorded`. That flag is not cosmetic: it is the difference between a decision that exists and one that only the analyst remembers making.

---

## 6. Keyboard

0.5 owns the mechanism and hands cluster 4 the meanings. **Every key below is live only while the detail pane holds focus**, which is the third condition of WCAG SC 2.1.4, Level A. While 4.4 or 4.5 holds a text field, letters are text and nothing else.

| Key | Does | Note |
|---|---|---|
| `a` | Accept Clerk's verdict as filed | Shown on the control itself. The map is a lookup, not the teacher |
| `r` | Reject, opening 4.4 | The reason is the action, not a step towards it. One dialog, no wizard |
| `m` | Amend the narrative in place, 4.5 | On entry, letters become text |
| `e` | Escalate, opening 4.6 | Also the only live control in 4.7 |
| `[` `]` | Previous and next case without returning to the list | Mouse equivalent is prev and next in the pane header, taken from Defender |
| `Escape` | Returns focus to the list, keeping the selection | A dialog consumes it first and does not propagate, from 0.5 |

**Every one of these is remappable and can be disabled**, from the foot of 0.5. The first route alone would leave a speech user with no way to stop `a` from meaning accept while the pane is focused, which is the exact scenario the criterion describes.

---

## 7. Addressing and permission

| | |
|---|---|
| **Route** | `/queue/case/{caseId}` |
| **Standalone** | `/case/{caseId}` is 4.2, the same case without the list. Permalink, and the only rendering at 360 |
| **Snapshot** | `?as-of={timestamp}` addresses the evidence as it stood. 5.4 is that address resolved from the log |
| **Heading** | One `h1`, the case and its client. The pane is a labelled region, so traversing from the list announces where focus went |
| **Permission** | Tenant inside provider scope. Actions bounded by role, **shown disabled with the reason** rather than hidden. A case outside scope resolves the same as a case that does not exist, from the 8.1 rule |
| **Retention** | `?as-of` promises an address that resolves. How long it resolves for is the retention window `research.md` section 10 still records as unchosen. **4.7 exists because that number does not** |

---

## 8. At 360

**4.1 does not render at 360.** The pane is the right half of a split, and at 360 there is no split.

Selecting a case at 360 navigates to **4.2**, which is the same case at its own URL with the list not present. That is not a fallback, it is the reason 4.2 exists: a permalink for the log, and the read and escalate surface for an on call analyst opening a paged case at 03:00.

What 4.2 keeps and what it drops belongs to 4.2. Recorded here so nobody looks for a mobile rendering of this node and concludes it was forgotten.

---

## 9. Emotional support

Unlike 3.1, this node carries mechanisms, and two of the four in `ia/docs/sitemap.md` live here.

| Job | Mechanism | Where on this node |
|---|---|---|
| **Emotional, P1.** Feel I was thorough rather than lucky | The evidence block renders **what Clerk looked for and did not find** as explicitly as what it found, so absence carries the same weight as presence. Beside it the provenance strip says how much effort was spent, which makes a fast decision attributable to the agent's work rather than to skipping | Block 5 and block 6, section 4 |
| **Social, P1.** Look like the work of someone who knew what they were doing | The verdict record is composed from **structured parts rather than free text**, so its quality does not depend on how tired the author was at 07:00 | The verdict record, section 4 |

Both mechanisms are structural, which is the point: neither depends on tone, so neither can be undone at stage 05 by a wording change.

The remaining two live elsewhere. **Emotional, P1, the part with no mechanism**, cases Clerk closed on its own and the analyst never sees, still has nothing and is still a backlog entry rather than an error.

---

## 10. Not this node

- **0.1** the shell and its zones. **0.3** the annunciator, which reads this node's selection but belongs to the shell
- **0.5** the keyboard mechanism. This node declares meanings; 0.5 owns remap, disable and the map itself
- **0.6** the action classes. This node shows the latitude on one case; the ladder is defined there
- **0.7** the rejection reasons. This node opens 4.4; the taxonomy is defined there
- **4.2** the standalone route and everything at 360. **4.3 to 4.10** the states, each its own node
- **5.4** the same components rendered from the log at a past `?as-of`

---

## 11. Grounding

| Claim | Source |
|---|---|
| Permission limited actions greyed out with their reason | Microsoft Learn, guided responses: *"Grayed out action buttons mean these actions are limited by your permission"* |
| The machine's completed action announced on the record | Defender: *"A potentially compromised account was disabled automatically by attack disruption"* |
| Narrative as prose lead then dated bullets, entities linked inline | Defender Copilot incident summary, screen in `research/screens/` |
| A stamp on generated text | Defender: `Last updated: Jun 9, 2025 6:27 PM` |
| A chip on the claim that opens source, field and reasoning | Parallel Deep Research, Refero `bb40b82c` |
| Latitude is per action class, not global | Simbian, quoted in 0.3 |
| Reversibility, not severity, orders the classes | Microsoft Learn response actions, quoted in 0.6 |
| Single character shortcuts must be focus scoped, remappable or disableable | WCAG SC 2.1.4, Level A, quoted in 0.5 |
| Structure removes variation in written handover | UCL handover study, stage 02 |

---

## 12. Open questions

1. **Is `a` an acceptable key for accept, even focus scoped?** SC 2.1.4 is satisfied by the focus rule, so this is not a compliance question. It is a question about a key that files a verdict against a client sitting under the analyst's resting hand. **Stage 04 and stage 05 together.**
2. **Where does the latitude block sit, above the verdict or below it?** Above says "here is how much rope Clerk had before you read anything". Below says "here is what it could have done, now that you know what it concluded". These teach different things and only one can be first.
3. **How much of the narrative is visible before scrolling in a pane that is roughly a third of the window?** Design principle 2 says cheapest correct thing first, and this is where that gets measured rather than asserted. Stage 04.
4. **Does the evidence block show disagreeing signals expanded or collapsed by default?** Collapsed protects the ceiling in principle 2; expanded protects the emotional job in section 9. They pull opposite ways and the tie is not broken here.
