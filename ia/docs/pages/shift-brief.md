# 2.1 Shift brief

The node with the largest verified market gap and no reference to copy. **Those are the same fact seen twice**, and it is worth saying before the design: nobody builds this, which is why there was nothing to open.

---

## 1. Identity

| | |
|---|---|
| **Number** | 2.1 |
| **Name** | Shift brief |
| **Type** | page |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | A1 on the concept map. Scope carried |
| **Page type for the bank** | **C, a shift digest.** The type with no reference |
| **Contains** | 2.2 assembling, 2.3 nothing carried over, 2.4 sealed, 2.5 close failed |
| **Route** | `/shift` |
| **Permission** | authenticated analyst. Covers the tenants inside her provider scope for the window of the shift |
| **Job** | **R1** |
| **Depended on by** | **4.6**, which needs the rota to name an escalation recipient |

---

## 2. Two findings that are the same finding

**In the market:** `jtbd.md` scores R1 at **3 for the primary persona** and records gap 6 as **verified across all thirteen products**. Nobody ships it.

**In the bank:** type C returned nothing. Three Refero searches produced calendars, changelogs and analytics dashboards; PagerDuty's on call handoff article is gone from the live knowledge base. There is no page of this type to open.

**Those are one fact.** The reason the bank came back empty is the reason the job scored a gap. This node is designed from evidence about the work rather than from evidence about interfaces, and everything below cites which.

**And there is a third, from inside our own files.** `jtbd.md` records the mirror finding: *"R1 has a job, has a product decision in `aarrr.md` for the shift handoff, and has no line in the canonical list of eight."* A job with importance 3 and a verified gap had **no feature behind it**. This node is that feature.

---

## 3. Three findings from the UCL study, three requirements

The evidence is the shift handover study quoted in `jtbd.md`. Each finding produces one constraint, and the constraint is not a preference.

### Finding 1: the pile accumulates and stops being readable

> *"say there's been [an incident across] three days and three nights. Unless you go back and read, what, 6 handovers? You don't actually have that context of the week."*

**Requirement: the brief is not a document. It is pointers into cases.** Every line resolves to a case or to a narrowed queue. Nothing in it is prose the incoming analyst has to hold in her head, because holding it in her head is the failure the quote describes.

### Finding 2: older handovers get ignored

> *"The first day, second day, third day, they will start to ignore [the older handovers]."*

**Requirement: a brief covers one shift and never chains.** There is no "previous brief" link and no stack to work back through. **Continuity lives in the case**, where 5.6 already holds every action in order, so a three day incident is read once on the case rather than six times across briefs.

### Finding 3: it depends on one person's diligence

> *"it's still reliant on the person writing the handover. In a way, it's not foolproof: if they don't put down what they should be putting down, then the next team isn't aware, right?"*

**Requirement: Clerk assembles the brief, the analyst seals it.** The same contract as the case. The structured half cannot be forgotten because a machine builds it from what actually happened; the prose half can be forgotten, and only the prose half is optional.

**That is the resolution of an apparent inconsistency with 4.6.** In 4.6 free text is the carrier, because a person reads it and nothing routes on it. Here the structure carries **coverage** and the prose carries **nuance**. Coverage is what "not foolproof" was about, and coverage is the half a machine can guarantee.

**Context:** 79% of SOCs run 24 by 7 [SANS SOC Survey 2025], and among UCL participants who work remotely the written handover has permanently replaced the verbal one. This is not an edge case; it happens several times a day and it is the only channel.

---

## 4. One screen in two roles

Settled at the base layer and worth restating, because it is unusual: **2.1 is one screen in two roles, not two screens.**

| Role | What the screen is |
|---|---|
| **Outgoing analyst, during the shift** | An object that **accumulates**. Clerk adds to it as things happen; she adds notes to cases, not to the brief |
| **Outgoing analyst, at the end** | A thing to **seal**. Sealing is 2.4, a state, not a separate page |
| **Incoming analyst** | A set of **pointers** to work, read once and left behind |

Closing is a state rather than a screen, which is why 2.4 is a state node and 2.5 is its failure.

---

## 5. Blocks, in priority order

Type C has no reference half, so every row names its origin honestly: **transfer** from a banked type, **evidence** from the UCL study, or **ours** with the barrier it answers.

| # | Block | Origin | Traces to | Scope |
|---|---|---|---|---|
| **1** | **Shift identity.** Who is coming on, who went off, and the window covered | Ours | R1 | MVP |
| **2** | **What waits on a decision**, counted, resolving into 3.1 narrowed to the window | Transfer, type A counts | R1, MAIN | MVP |
| **3** | **What Clerk closed alone**, counted | Evidence, finding 3, and `aarrr.md` | R1 | MVP |
| **4** | **What moved**, cases whose state changed during the shift, each a pointer | Evidence, finding 1 | R1 | MVP |
| **5** | **Which tenants changed latitude**, resolving into 3.5 | Ours, and HJ1 | HJ1, P2-MAIN | MVP |
| **6** | **Notes the outgoing analyst left**, attached to cases rather than to the brief | Evidence, finding 1 | R1 | MVP |
| **7** | **The rota: who is on next.** Added because 4.6 needs a recipient | Ours, from 4.6 | R1, and 4.6 | MVP |
| **8** | **Seal**, one action, which produces 2.4 | Evidence, finding 3 | R1 | MVP |

**Deliberately absent:** a prose summary paragraph, a link to the previous brief, and any metric card. The first two are the failures findings 1 and 2 describe; the third was ruled out three times in the bank already.

**Block 3 is honest about a hole rather than closing it.** `jtbd.md` records that the analyst side review lane maps to no formulated job, so this brief can say **how many** cases Clerk closed alone and cannot offer anywhere to review them. Naming the count with no destination is uncomfortable and correct: it is the shape of the gap, visible.

---

## 6. State matrix

| Element | Incoming, default | Outgoing, during the shift | Assembling, 2.2 | Nothing carried, 2.3 | Sealed, 2.4 | Close failed, 2.5 |
|---|---|---|---|---|---|---|
| **Shift identity** | Both names, the window | Own name, window open | Same | Same | **Who sealed it and when** | Same, unsealed |
| **Counted lines** | Counts, each a pointer | Counts, growing | **What is being gathered, named**, not a spinner | `Nothing waiting` and what was quiet | Frozen | Frozen |
| **Notes** | Read only | Editable, on cases | n/a | n/a | Read only | Editable |
| **Seal** | Absent | Available at any time | Absent | Available | Done | **Retry, and both analysts are warned** |
| **Route out** | 4.1 by a pointer, 3.1 otherwise | 3.1 | n/a | 3.1 | 1.1 out | Stays |

**2.3 is a real answer, not a failure.** A quiet shift is the good outcome. The empty state says **what was quiet**, which is information, rather than "nothing to show", which is an apology.

**2.5 warns both analysts.** This is the only place in the product where a failure is addressed to two people, and it is deliberate: an unsealed brief is a problem for the person leaving and for the person arriving, and telling only one of them recreates the diligence dependency finding 3 describes.

---

## 7. Addressing and permission

| | |
|---|---|
| **Route** | `/shift` |
| **A past shift** | `/shift/{shiftId}`. Read only and sealed. **Not linked from the current brief**, per finding 2: reachable by address, never by a chain of "previous" links |
| **Permission** | Tenants inside her provider scope, for the window of the shift. A tenant she did not cover does not appear even if a colleague covered it |
| **Heading** | One `h1`, the shift and its window |
| **Indexing** | `noindex`, no schema |

---

## 8. At 360

**Not rendered.** The platform line gives mobile one scenario, a paged case read and escalated. Coming on shift happens at a desk with two monitors, which is the whole premise in `CLAUDE.md`.

**One dependency crosses the boundary and it is data, not screen.** 4.6 renders at 360 and needs to name who is on the rota. The rota is a value this node displays, not a thing it owns, so 4.6 can read it without 2.1 rendering.

---

## 9. Emotional support

| Job | Mechanism | Where |
|---|---|---|
| **Social, P1.** Look like the work of someone who knew what they were doing | The brief is composed from **structured parts rather than free text**, so its quality does not depend on how tired the author was at 07:00 | Blocks 2 to 5, which Clerk assembles |

The UCL evidence behind this mechanism is the same quote as finding 3, and this is the node where it does the most work: **the analyst's reputation for a good handover stops depending on her diligence at the end of a twelve hour shift.**

---

## 10. Not this node

- **0.8** the reading conventions. Severity, time, the effort units, the chip set and the tenant fixtures are defined there and read here
- **2.2 to 2.5** the states, each its own node. Sealing is 2.4 and it is a state, not a page
- **3.1** the queue every pointer resolves into, and **4.1** the case a case pointer resolves into
- **3.5** the fleet, which block 5 points at
- **5.6** the history of one case, which is what makes finding 2's rule affordable
- **4.6** which reads the rota this node shows
- **1.1** where the outgoing analyst leaves after sealing

---

## 11. Grounding

| Claim | Source |
|---|---|
| An incoming team faces an unreadable pile of handovers | UCL handover study, quoted verbatim in `jtbd.md` |
| Older handovers stop being read | Same |
| Handover quality depends on one person's diligence and is not foolproof | Same |
| 79% of SOCs run 24 by 7 | SANS SOC Survey 2025 |
| Remote work has replaced the verbal handover for some participants | UCL, via `jtbd.md` |
| R1 scores 3 for the primary persona and gap 6 is verified across thirteen products | `jtbd.md`, the matrix |
| R1 had no feature in the canonical eight | `jtbd.md`, the mirror finding |
| **No product of this page type could be opened** | `blocks.md`, type C. Three Refero searches and a dead PagerDuty article |

---

## 12. Open questions

1. **What happens to a brief nobody sealed?** 2.5 covers sealing that **failed**. Sealing that was never **attempted**, because the analyst simply left, is a different state and it does not exist yet. Given finding 3, it is the most likely real world failure of this node.
2. **Is the brief per analyst or per rotation?** If two analysts cover overlapping tenants on the same shift, whose brief is it and does a case appear in both? Unspecified, and it is the same family as the shared tenant question 3.1 and 5.1 both left open.
3. **Does the incoming analyst acknowledge the brief?** UCL says handovers are read or ignored, and an acknowledgement is the only way to know which. It also adds a step to the start of every shift. Not decided.
4. **Where does the rota come from?** Same question 4.6 raised. If it lives in the provider's on call tool, this node reads it rather than owning it, and that integration is undescribed.
