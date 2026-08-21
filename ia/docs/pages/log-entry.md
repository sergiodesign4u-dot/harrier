# 5.4 Log entry, `?as-of`

**The addressing decision of this layer.** The base layer wrote it in one line and it is worth taking literally: `?as-of` is what makes "show what was known at the time" **a URL rather than a feature**.

Everything else in cluster 5 is a list. This is the artefact those lists point at.

---

## 1. Identity

| | |
|---|---|
| **Number** | 5.4 |
| **Name** | Log entry, `?as-of` |
| **Type** | page |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | D1 on the concept map. Scope carried |
| **Page type for the bank** | **B, record detail with an AI narrative** |
| **Contains** | the evidence block, the provenance strip, the verdict record. All three canonical, defined at 4.1, **rendered frozen** |
| **Route** | `/log/{entryId}?as-of={timestamp}`. Also renders in the pane of 5.1 |
| **Permission** | any entry for any tenant inside the provider scope. Same rule as 5.1 |
| **Job** | R2 |

---

## 2. The one design problem, and everything follows from it

An analyst or an auditor is looking at **a case as it was**. The live case has moved on. If those two are ever confused, the record is worse than useless: it produces a confident wrong answer to a question about liability.

So the whole node is one requirement expressed five ways.

| # | Mechanism | Why not the obvious alternative |
|---|---|---|
| 1 | **The historical marking is a frame, not a banner** | A banner scrolls away. Someone who arrives by permalink, scrolls, and reads the middle must still know what they are reading |
| 2 | **The timestamp is in the heading**, not in a footnote | It is part of the identity of the thing, the same way the case id is |
| 3 | **The live case is named and linked**, never inlined | Showing current values beside historical ones is the confusion, not the cure |
| 4 | **There are no verdict controls at all** | You cannot rule on the past. An `Accept` here would be a second decision wearing the first one's date |
| 5 | **The address is visible and copyable** | The address is the artefact. If it cannot be handed to someone, `?as-of` was a mode after all |

**Mechanism 3 has a cheaper and a dearer version, and the MVP takes the cheaper one.** Cheaper: state that the live case has moved on since this snapshot, and link to it. Dearer: count what differs. Counting means diffing the snapshot against the current case on every render, which is real work for a screen nobody opens daily. **The count is LATER**, and the statement ships.

---

## 3. Blocks, in priority order

From `ia/docs/blocks.md`, type B. The three canonical components come from 4.1 unchanged in structure and frozen in content.

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **Historical frame**, persistent, present at every scroll position | Ours, from mechanism 1 | R2 | MVP |
| **2** | **Heading: the case, the client, and the timestamp** | Defender's stamped summary, made load bearing | R2 | MVP |
| **3** | **The verdict record.** What was decided, by whom, on what grounds, and the reason from 0.7 if there was one | 4.1, canonical | R2 | MVP |
| **4** | **The evidence block as it stood**, including **what Clerk looked for and did not find** | 4.1, canonical | R2, Emotional P1 | MVP |
| **5** | **The provenance strip as it stood** | 4.1, canonical | design principle 2 | MVP |
| **6** | **Tenant context as it stood.** The base rate on that date, which is not the base rate now | 4.1, and design principle 4 | R2 | MVP |
| **7** | **Latitude as it stood.** What Clerk was permitted to do at this tenant **on that date** | 0.3, 0.6, and section 4 below | **R2, and the differentiator** | MVP |
| **8** | **The address**, shown and copyable | Ours, from mechanism 5 | R2 | MVP |
| **9** | **Link to the live case**, 4.2, named as a different thing | Ours, from mechanism 3 | R2 | MVP |
| **10** | `HUMAN` and `MACHINE` renderings of the same entry | Parallel Deep Research, banked TAKE in type B | R2, compliance | **LATER** |

**Deliberately absent:** every verdict control, `Regenerate`, and any control that edits anything. Block 10 is the only LATER, and it is the auditor's export in a nicer form.

---

## 4. Latitude as it stood, and it is the strongest R2 block

An auditor's question is rarely "was this the right call". It is usually **"why was the machine allowed to do that"**.

A configuration page cannot answer it. A settings screen shows the grant **now**, and the grant may have been widened twice since. The only artefact that can answer is a snapshot that carried the grant at decision time, which is exactly what the compliance requirement in `CLAUDE.md` asks for: *the evidence snapshot as it stood at decision time*.

So block 7 renders, for the date in the address:

- which action classes Clerk could act on alone at this tenant
- which it had to ask about, and why, using the reversibility reasons from 0.6
- the record that stood behind the grant on that date, count first

**This is the fleet's historical form**, and it is the answer to the differentiator's hardest question: not "is latitude visible", but "was it visible, and can you prove what it was". 3.5 shows the present. This shows the past, and only one of the two is evidence.

---

## 5. State matrix

| Element | Full snapshot | Partly gone | Nothing survived, 5.5 | Live case has changed | Beyond retention |
|---|---|---|---|---|---|
| **Historical frame** | Present | Present | Present | Present | Present |
| **Heading** | Case, client, timestamp | Same | Same | Same | Same, and the timestamp is the thing being refused |
| **Verdict record** | Full | Full. **The decision is always retained**, whatever happened to the evidence | Full | Full | Absent |
| **Evidence** | As it stood | **Tombstones for what is gone**: what was there, that it is gone, and when. Never a blank | 5.5 takes over the node | As it stood | Absent |
| **Provenance** | As it stood | Counts what was retained and what was not, separately | 5.5 | As it stood | Absent |
| **Latitude then** | As it stood | As it stood | As it stood if retained | As it stood | Absent |
| **Live case link** | Present | Present | Present | **Present, and it says the live case has moved on** | Present if the case still exists |
| **The page itself** | Renders | Renders | Renders | Renders | **Renders, and states that the log does not reach back this far, naming the window** |

**Beyond retention is not a 404**, and that is a decision. A 404 says the address is wrong. The truth is that the address is right and the answer no longer exists, which is a different sentence and a different thing for an auditor to write down.

**This is the second place the unchosen retention window bites**, after the resting pane in 5.1. Both name it rather than rendering a plausible number.

---

## 6. Addressing and permission

| | |
|---|---|
| **Route** | `/log/{entryId}?as-of={timestamp}` |
| **Without `?as-of`** | Resolves to the entry's own decision time. The parameter is explicit in every link the product generates, so a copied address never depends on a default |
| **In the pane** | The same node renders inside 5.1's pane with the frame and the heading intact. **Not a reduced version**: the pane is narrower, the content is the same |
| **Permission** | Any entry for any tenant inside the provider scope, same as 5.1. A snapshot for a tenant outside scope resolves the same as one that does not exist, from the 8.1 rule |
| **Heading** | One `h1` carrying the case and the timestamp together |
| **Indexing** | `noindex`, no schema. Private, like every node here |

---

## 7. At 360, and this one does render

5.1 is not rendered at 360. **5.4 is, and the reason is internal to the node rather than a platform exception.**

A permalink can arrive anywhere: in a ticket, in a chat, in an email from a client at any hour. **The whole promise of `?as-of` is that the address resolves.** An address that resolves only on a desk is a mode with a URL painted on it, which is exactly what section 2 says this node must not be.

So at 360:

- The frame, the heading and the timestamp survive first. They are the identity
- The verdict record, then the evidence, then provenance, then tenant context, then latitude. Same order, one column
- **No controls, which is easy here because there were none at 1440 either**
- The address stays copyable, because handing it on is the most likely thing to do next from a phone

---

## 8. Emotional support

| Job | Mechanism | Where |
|---|---|---|
| **Emotional, P1.** Feel I was thorough rather than lucky | The evidence block renders what Clerk looked for and did not find, and the provenance strip says how much effort was spent | Blocks 4 and 5, **read back rather than produced** |
| **Social, P1.** Look like the work of someone who knew what they were doing | The verdict record is composed from structured parts rather than free text | Block 3 |

Both are written at 4.1 and 4.4 and **redeemed here**. That is the case for structure stated as plainly as it gets: the value of the parts is collected months later, by someone who was not there.

---

## 9. Not this node

- **0.8** the reading conventions. Severity, time, the effort units, the chip set and the tenant fixtures are defined there and read here
- **5.1** the log itself, and the pane this renders in
- **5.5** when the snapshot did not survive. It takes over this node rather than sitting inside it
- **5.6** the history of one case: every entry for a case in order, where this is one of them
- **4.1** where the three canonical components are defined, and **4.2** the live case this links to
- **0.3, 0.6** the annunciator and the action classes. Block 7 renders their historical values
- **3.5** the fleet, which shows the present. This shows the past, and only one of the two is evidence

---

## 10. Grounding

| Claim | Source |
|---|---|
| A stamp on generated text | Defender Copilot incident summary: `Last updated: Jun 9, 2025 6:27 PM` |
| Generated output expires on a published window | Defender: the summary is cached for a week and redisplayed unchanged |
| A destructive removal leaves who and when | PagerDuty redaction, opened this session |
| Two renderings of one result, for a person and for a system | Parallel Deep Research `HUMAN` and `MACHINE` tabs, Refero `bb40b82c` |
| The snapshot as it stood at decision time | `CLAUDE.md`, the compliance requirement |
| Latitude is per action class and per tenant | Simbian, quoted in 0.3; classes in 0.6 |
| The retention window is unchosen | `research.md` section 10 |

---

## 11. Open questions

1. **Does the frame survive print and PDF?** An auditor's most likely next action is to save or print this page, and a frame that only exists on screen loses the one marking that keeps as-was from reading as as-is. **Nobody has drawn a print stylesheet in this pipeline**, and this is the first node that genuinely needs one.
2. **How is the timestamp written?** UTC, the analyst's zone, or the tenant's. All three are defensible and only one can be first. It is a stage 05 decision with a real consequence for R2.
3. **What happens to an entry whose tenant has been offboarded?** The client is gone, the record is still ours to answer for. Scope says tenants inside provider scope, and an offboarded tenant is outside it. **That rule and this node disagree**, and the disagreement is not resolved here.
4. Does the count of what changed since ever ship, or does the statement suffice? Section 2 defers it. Revisit only if someone asks the question the count answers.
