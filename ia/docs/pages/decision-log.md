# 5.1 Decision log

The node that makes the main job's second half true. `jtbd.md` R2: *"When a client or an auditor questions a decision made months ago, I want to show what was known at the time, so that the answer comes from the record instead of my memory."*

It is in the MVP **by compliance, not by preference**, and the base layer says so. That is worth keeping visible, because it changes what this node optimises for: it is not a screen anyone opens daily.

---

## 1. Identity

| | |
|---|---|
| **Number** | 5.1 |
| **Name** | Decision log |
| **Type** | page |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | D1 on the concept map. Scope carried |
| **Page type for the bank** | **A, a list in a split pane** |
| **Contains** | the canonical row, redefined in section 4. 5.2 narrowing, 5.3 not findable |
| **Route** | `/log`. Also `/log/{entryId}?as-of={timestamp}`, which is 5.4 |
| **Permission** | authenticated analyst. Every entry for every tenant inside the provider scope, **not only her own decisions** |
| **Job** | R2 |

---

## 2. Purpose, and what append only actually costs

The compliance requirement in `CLAUDE.md` is one sentence: **every Clerk action and every human override writes to an append only log carrying the evidence snapshot as it stood at decision time.**

Three consequences, and they are constraints rather than features:

| Consequence | What it forbids |
|---|---|
| **Nothing is edited** | No inline correction, no "fix a typo". A mistake becomes a second entry |
| **Nothing is deleted** | No row disappears. 5.5 exists because a snapshot can fail to survive, and even that is recorded rather than hidden |
| **Both actors write to one stream** | No separate "automation log". Two streams could disagree, and the whole product rests on them not disagreeing |

**Corrections are superseding entries.** A rejection filed in error appears twice: the original, and the correction, both with their times, both readable. 8.4 already ruled out undo for the same reason, and 4.4 inherits it.

---

## 3. Blocks, in priority order

From `ia/docs/blocks.md`, type A, plus four rows banked under type B while the PagerDuty timeline was open. **A source informs whatever page type it fits**; the bank is organised by type, not fenced by it.

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **Narrowing bar.** Tenant or group, actor, decision, date range. Same chips as 3.6, same idiom | PagerDuty and Defender chips; groups from Defender multitenant | R2, 5.2 | MVP |
| **2** | **The entry row**, redefined from the canonical row in section 4 | 3.1, with three slots changed | R2 | MVP |
| **3** | **Rows written as sentences naming the actor and the channel** | PagerDuty: `Resolved by Mark Phillips through the website` | R2 | MVP |
| **4** | **Machine and human actions in one stream** | PagerDuty: `Incident Workflow ... started via Conditional Trigger` | the compliance requirement | MVP |
| **5** | **Nested detail per row**, expanded in place | PagerDuty `Show All Details` and per row `Hide Details` | design principle 2 | MVP |
| **6** | **The pane**, holding 5.4 on selection | 0.1 Z5, and the split from 3.1 | R2 | MVP |
| **7** | **Tombstones rather than blanks** when a snapshot is gone | PagerDuty redaction: the page records who and when | 5.5 | MVP |
| **8** | Export the current view | Fingerprint and PagerDuty CSV | R2 | **LATER** |

**Deliberately absent:** everything 3.1 already refused, plus **any control that edits an entry**. On this node that absence is not a design preference, it is the definition of the artefact.

---

## 4. The canonical row, reused with three slots changed

3.1 defined the row and said every other list either uses it or says why it does not. This is the "says why" case, and being precise about it is what makes "canonical" mean something.

| Slot | In 3.1 | In 5.1 |
|---|---|---|
| Severity | Severity of the case | **Kept**, unchanged |
| Client | Tenant, same position always | **Kept**, unchanged. Principle 4 does not stop applying because the decision is old |
| What it is | The shape of the case | **Kept**, unchanged |
| What Clerk concluded | The draft verdict, awaiting a ruling | **Redefined: what was decided, and by whom.** A draft becomes a ruling with an actor. This is the slot that changes meaning most |
| What checking it will cost | Size of the evidence behind the verdict | **Dropped.** There is nothing left to check. **Replaced by the reason**, when the decision carried one from 0.7 |
| State | `escalated`, `unrecorded`, Clerk acted | **Kept, different values**: `upheld`, `amended`, `rejected`, `escalated`, `superseded`, `Clerk acted alone` |
| Age | How long it has waited | **Redefined: an absolute timestamp.** Relative time answers "what is going cold"; the log answers "what happened on the ninth of June", and only an absolute time answers that |

**Three changes, one drop, three untouched.** Anything more than that and it would not be the same row, and 3.1 would owe an explanation rather than this node.

---

## 5. What the pane shows at rest, and it was a hole

0.1 zone Z5 lists the pane's contents as 3.5, 4.1 and 5.4. On `/queue` the resting state is settled: the fleet, and 3.4 is where that decision gets tested.

**On `/log` the resting state was never specified.** Found here rather than at stage 04, which is the point of specifying nodes before drawing them.

An empty pane on the log would repeat exactly the mistake the fleet decision was made to avoid: a large empty area that reads as "broken" rather than "nothing selected". So:

**At rest the pane states what this view covers**: the narrowing in words, the number of entries it contains, the date range it spans, and how far back the log can answer at all. That last line is the one an auditor's question actually depends on, and it is the only place in the product where the retention window is visible to a person.

This is a decision taken at this node. It is recorded as such rather than presented as inherited.

---

## 6. State matrix

| Element | Default | Narrowing, 5.2 | Not findable, 5.3 | Entry selected | Snapshot gone, 5.5 |
|---|---|---|---|---|---|
| **Narrowing bar** | Chips, all removable | Same, and the query is visible while it runs | Same, and the chip that emptied it is identifiable | Same | Same |
| **List** | Entries, newest first | **Narrows before it draws.** The log is large and a progressive render would invite reading a partial answer | Empty | Entries, selection held | Entries |
| **Pane at rest** | What this view covers, section 5 | Same | **The search affordance itself.** 5.3 is where narrowing is offered, not a shrug | 5.4, the entry | 5.5 |
| **Superseded entries** | Shown, marked, **never hidden** | Same | n/a | Both entries reachable from either | Same |
| **Editing** | **Impossible.** There is no control | Same | Same | Same | Same |

**5.3 is the search affordance, not an empty state.** The base layer wrote it that way and it is right: the only reason an analyst is on this screen is that someone asked a question, so "nothing found" has to be the start of the next attempt rather than the end of this one.

---

## 7. Addressing and permission

| | |
|---|---|
| **Route** | `/log` |
| **Entry** | `/log/{entryId}?as-of={timestamp}`, which is 5.4. **The address is the feature**: "show what was known at the time" is a URL rather than a mode |
| **Narrowing in the URL** | Addressable, so a scope can be handed to a colleague or pasted into a ticket. Tenant by opaque id, never by client name |
| **Permission** | Every entry for every tenant inside the provider scope, **including decisions made by other analysts**. A log that shows only your own decisions cannot answer a client's question about a shift you did not work |
| **Heading** | One `h1`, the log and its narrowing. The list is a labelled region |
| **Retention** | **This node is bounded arithmetically by a number nobody has chosen.** `research.md` section 10 records the retention window as open. Section 5 makes it visible instead of letting an auditor discover it by getting nothing back |

---

## 8. At 360

**Not rendered.** The platform line in `CLAUDE.md` gives mobile one scenario: a paged case, read and escalate. Answering an auditor from a phone is not that scenario, and pretending otherwise would mean designing a second console.

**5.4 is the boundary case and it is different.** A single entry is a permalink, and a permalink can arrive anywhere, including in a message at 03:00. Whether 5.4 renders at 360 belongs to 5.4; this node only records that the boundary is there and that it was not drawn by accident.

---

## 9. Emotional support

One mechanism from the `sitemap.md` table lands here.

| Job | Mechanism | Where |
|---|---|---|
| **Social, P1.** Look like the work of someone who knew what they were doing | The verdict record is composed from **structured parts rather than free text**, so its quality does not depend on how tired the author was at 07:00 | The entry row and the entry itself. Free text is present and additive; nothing downstream reads it |

The mechanism is written at 4.1 and 4.4, and **read here**. That is the whole argument for structure: the person who benefits from it is not the person who produced it, and often not even the same shift.

---

## 10. Not this node

- **3.1** the queue, and the canonical row this one redefines
- **3.6** the narrowing chips. Same control, defined there
- **0.1** the shell and the pane. **0.4** the freshness strip
- **5.2, 5.3** narrowing and not findable, each its own node
- **5.4** the entry at a point in time, and **5.5** when the snapshot did not survive
- **5.6** the log narrowed to one case, which is this node with one chip applied
- **4.4** where a rejection reason is written. This node only reads it back

---

## 11. Grounding

| Claim | Source |
|---|---|
| Timeline rows as sentences naming the actor and the channel | PagerDuty Incidents: `Resolved by Mark Phillips through the website`, opened this session |
| Machine actions in the same stream as human ones | Same page: `Incident Workflow "Custom Fields - Status Update" started via Conditional Trigger` |
| A destructive removal leaves who and when, and cannot be undone | Same page, redaction: *"Redaction cannot be undone, not even by PagerDuty Support"*, and the page records who redacted and when |
| Nested detail expanded in place | Same page: `Show All Details` and per row `Hide Details` |
| Filter chips as the narrowing idiom | PagerDuty and Defender, banked in type A |
| A field change rendered as a raw column name is not a decision | Same page: `resolution_category to "1"`, banked DIFFERENT |
| Append only, with the snapshot as it stood | `CLAUDE.md`, the compliance requirement |
| The retention window is unchosen | `research.md` section 10 |

---

## 12. Open questions

1. **How far back does the log render by default?** A date range chosen for us by performance is a compliance answer chosen by accident. Tied to the retention window, so it cannot be settled before that number exists.
2. **What does a superseded entry look like beside the original?** Both must be readable and it must be obvious which is current. Two rows, a nested pair, or one row with a marker; not decided, and stage 04 draws it.
3. **Does an analyst see decisions made by analysts at other providers?** No, because tenant scope forbids it. But the same tenant can be covered by more than one analyst inside one provider, and whether that is visible on the row is unspecified. **It is the same question 3.1 left about a second analyst taking a case.**
4. **Is the resting pane in section 5 read, or is it furniture?** It carries the only person facing statement of retention in the product, which makes it load bearing for R2 and easy to skip past. Same class of risk as the consequence line in 4.4.
