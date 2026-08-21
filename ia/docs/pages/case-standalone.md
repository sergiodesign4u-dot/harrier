# 4.2 Case File, standalone route

The same case at its own URL, with no list beside it. It exists for **exactly two reasons**, and both are worth stating before anything else, because a node that exists for two reasons is the easiest kind to quietly grow a third.

1. **A permalink.** The log, a ticket, a pager, a client email. An address that travels
2. **The only rendering at 360.** 4.1 is the right pane of a split, and at 360 there is no split

Everything below follows from those two and from one platform line: **mobile is a read and escalate surface, not the full console.**

---

## 1. Identity

| | |
|---|---|
| **Number** | 4.2 |
| **Name** | Case File, standalone route |
| **Type** | page |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | C1. Scope carried |
| **Page type for the bank** | **B, record detail with an AI narrative** |
| **Contains** | the same three canonical components as 4.1, defined there |
| **Route** | `/case/{caseId}` |
| **Permission** | same as 4.1: tenant inside provider scope, actions bounded by role and shown disabled with the reason |
| **Job** | MAIN, and the mobile scenario |

---

## 2. What it inherits, and the one thing it cannot

4.2 is 4.1 without the list. The blocks are the same ten, in the same order, from the same bank rows. Repeating them here would create a second edition that drifts, so this node **references** rather than restates.

**What it cannot inherit is 0.1's guarantee.** The whole reason the shell exists is that *the list survives the decision*. On `/case/{caseId}` there is no list, so filing a verdict here leaves the analyst on a case she has already ruled on, with nowhere to go next.

That is not a defect of this node. It is the cost of a permalink, and it produces the desktop rule below.

---

## 3. At 1440: it lands, and its first offer is the queue

An analyst arriving at `/case/{caseId}` on a desk almost always came from somewhere else: a ticket, a message, the log. She is about to do the main job in the one place the main job is worse.

So **the first control on the page at 1440 is `Open in the queue`**, which resolves to `/queue/case/{caseId}` and puts the case back in the pane with the list beside it.

| | |
|---|---|
| **Not blocked** | All four verdict controls work here. Blocking would be worse than the problem: an analyst who is sure does not need to be routed |
| **But offered first** | Because the analyst who is not sure will want the next case, and this page cannot give her one |
| **After filing here** | The page states the outcome and stays. It does not pretend to advance, because there is nothing to advance to |

**This is the only place in the product where the same job has a better and a worse surface, and the product says so out loud.**

---

## 4. At 360, and this is the node that owns that decision

`CLAUDE.md`: *"Responsive down to 360 for one real scenario: an on-call analyst opening a paged case from a phone at 03:00 to read it and escalate."*

Taken literally, and the consequences named.

### What is on the page

| Block | At 360 |
|---|---|
| Header, client, state chips | **Kept, first.** Identity before anything |
| Action banner, if Clerk already acted | **Kept.** At 03:00 this is the single most valuable line on the screen |
| Clerk's verdict, one sentence | **Kept, second** |
| The narrative | Kept, prose lead and dated bullets |
| Evidence, supports and disagrees | Kept. **Disagreeing signals collapsed by default** |
| What Clerk looked for and did not find | **Capped at three, with a count of the rest** |
| Provenance strip | **Compressed to one line** |
| Tenant context | Kept, one line. Principle 4 does not weaken on a phone |
| Latitude on this case | **Kept.** See below |
| Verdict controls | **Escalate only** |
| `?as-of` stamp | Kept |

### Latitude stays, and that is deliberate

It would be the easy thing to drop: a six row table on a 360 screen. It stays because at 03:00 the question *"what has Clerk already done to this client, and what could it still do without me"* is the fastest route to knowing whether this needs waking someone up. Compressed to the classes in force plus the ones it had to ask about, without the reasons.

### Escalate is pinned to the bottom edge, and the tension is real

Design principle 5 says no overlay hides the evidence the analyst is deciding on. A pinned bar covers a strip of text.

**We pin it anyway, and here is the argument rather than a shrug:** the named scenario is read and escalate, and an action that requires scrolling past a full narrative to reach is not the primary action of the surface. The bar is one control tall, it never covers the block currently being read because the page scrolls under it, and **she is not deciding here, she is handing over.** Principle 5 protects a decision being made on evidence; this surface makes no decision.

### What is lost, said plainly

**A case she reads at 03:00 and knows to be benign cannot be closed from the phone.** It stays in the queue until she is at a desk. That is the platform line applied honestly, and 4.4 records the same cost from the other side.

---

## 5. Emotional support is reduced at 360, and that is coherent

At 4.1 the evidence block carries **Emotional, P1, thorough rather than lucky** through rendering what Clerk looked for and did not find with the same weight as what it found.

At 360 that list is capped at three. **The mechanism is weakened, and it is the right trade**, because the job at 360 is not to decide. The feeling of thorough against lucky attaches to a ruling, and no ruling is made here. What she needs instead is enough to justify waking someone up, which is a lower bar and an honest one.

**Social, P1** is untouched: the verdict record is structured wherever it is written, and nothing is written here.

---

## 6. State matrix

| Element | 1440, arrived by link | 1440, after filing | 360, default | 360, Clerk already acted | 360, connection stale |
|---|---|---|---|---|---|
| **First control** | `Open in the queue` | `Open in the queue` | Escalate, pinned | Escalate, pinned | Escalate, pinned |
| **Verdict controls** | All four | Replaced by the outcome, stated | Escalate only | Escalate only | **Escalate only, and still allowed.** 0.4 settled that a degraded connection does not block a decision |
| **Latitude** | Full, six classes with reasons | Full | Compressed, classes only | **What it did, and whether it can be undone** | As of last sync |
| **Did not find** | Full list | Full | Three, with a count of the rest | Same | Same |
| **Live freshness** | 0.4 in the shell | Same | **On the page**, because there is no shell strip to carry it at 360 | Same | Names the age in words |

**The last row is a real inheritance break.** At 1440 freshness lives in 0.1 zone Z2. At 360 the shell is compressed and the strip has nowhere to be, so this node carries it. Recorded rather than assumed, because a stale case at 03:00 is the worst version of that failure.

---

## 7. Addressing and permission

| | |
|---|---|
| **Route** | `/case/{caseId}` |
| **The other route** | `/queue/case/{caseId}` is 4.1, the same case with the list. **Both resolve; neither redirects** |
| **Which one the product generates** | Notifications, pager links and log links emit `/case/{caseId}`, because it is the address that travels. The queue emits `/queue/case/{caseId}`, because it has a list to preserve |
| **Case id** | Opaque. A sequential id in a URL that travels through pager, chat and ticket is an enumeration surface |
| **Through authentication** | The destination survives 1.1 and lands **on this case**, not on a bare queue. The mechanism belongs to 1.1; the requirement is recorded here because this is the node that breaks if it is missed |
| **Snapshot** | `?as-of` on this route resolves to 5.4, which is a different node with a different frame. This one is always the live case |
| **Indexing** | `noindex`, no schema |

---

## 8. Not this node

- **4.1** the pane rendering, and where all ten blocks and the three canonical components are defined
- **0.1** the shell. At 360 it is compressed and this node picks up the freshness line
- **4.3 to 4.10** the states, which apply to both renderings
- **4.4, 4.6** reject and escalate. 4.4 does not render at 360; 4.6 does, and it is the only one that does
- **5.4** the same case frozen at a timestamp, with a frame and no controls
- **1.1** where the deep link survives authentication

---

## 9. Grounding

| Claim | Source |
|---|---|
| Mobile is a read and escalate surface | `CLAUDE.md`, Platform |
| The list must survive the decision | `ux-patterns.md` reason 2, carried into 0.1 |
| No overlay hides the evidence being decided on | Design principle 5, and the argument in section 4 is against it rather than around it |
| A degraded connection does not block filing | 0.4 |
| Permission limited actions shown disabled with the reason | Microsoft Learn guided responses, banked in type B |
| The narrative, evidence and latitude blocks | 4.1, from `blocks.md` type B |

---

## 10. Open questions

1. **Should `/case/{caseId}` redirect to `/queue/case/{caseId}` on a desk?** Section 3 says no and offers instead. The alternative is one fewer decision for the analyst and one broken promise for the permalink, since a redirect means the address she copied is not the address that opens. **Not reopened without reopening that.**
2. **Is a pinned escalate bar the right call, given principle 5?** The argument is in section 4 and it is an argument, not a proof. Stage 04 draws it at 360 and the tension is visible or it is not.
3. **What does the page do after a verdict is filed at 1440?** It states the outcome and stays. Whether it should then offer the queue more loudly, or the next case in the same tenant, is unspecified and is the most likely dead end in this node.
4. Does the compressed latitude at 360 still read as latitude, or does it read as a list of capabilities? The differentiator survives compression or it does not, and 360 is where that is tested hardest.
