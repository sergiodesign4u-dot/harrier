# 4.6 Escalate

The exit for a case the analyst cannot close. It is the smallest node in cluster 4 by surface and one of the most load bearing by dependency: **4.2 makes it the only control at 360, and 4.7 makes it the only exit at all.**

It is also where a hole in the research became visible, and the node says so rather than routing around it.

---

## 1. Identity

| | |
|---|---|
| **Number** | 4.6 |
| **Name** | Escalate |
| **Type** | dialog, anchored inside 4.1 and 4.2 |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | C1, through 4.1. Scope carried |
| **Page type for the bank** | **E, a dialog** |
| **Opened by** | `e`, or the Escalate control in the verdict footer |
| **Route** | none |
| **Writes to** | the case, which stays open and is flagged `escalated`, and the log in 5.1 |
| **Job** | MAIN, in the branch where the case cannot be closed |

---

## 2. What escalating is, and what it is not

**It is not a verdict.** No ruling is filed, nothing is tuned, the case does not close. The case stays open, gains the visible state `escalated`, and keeps its place in 3.1.

**It is a handover of one case to one person.** That framing decides everything else in this node, and it is the reason this dialog looks nothing like 4.4.

| | 4.4 Reject | 4.6 Escalate |
|---|---|---|
| Closes the case | Yes | **No** |
| Produces a ruling | Yes | No |
| Routes to | tuning, by taxonomy | **a person, by rota** |
| What it collects | a structured reason | **a structured handover** |
| Cost target | cheaper than accepting | as cheap as the handover allows |

---

## 3. The hole this node found

Escalation implies a recipient. `personas.md` describes two people: **P1**, the Tier 2 analyst, and **P2**, the SOC lead or service delivery manager. There is no third role in the research, and whether P2 uses the console at all is recorded as `[?]`.

So "escalate to tier 3" would be an invented role wearing a confident label. **This node does not invent one.**

**The decision taken here instead:** an escalation targets **a named person on the current rota**, not an abstract tier. The product already knows about shifts, because cluster 2 exists, so a rota is a thing it can hold. The dialog **names the recipient before the analyst confirms**, and it never files an escalation with nobody attached.

That converts an unanswerable question into a dependency: **4.6 depends on 2.1 knowing who is on.** Recorded as such.

---

## 4. Blocks, in priority order

From `ia/docs/blocks.md`, type E.

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **What is being escalated**, one line: the case and Clerk's verdict as filed | Ours, same reason as in 4.4 | MAIN | MVP |
| **2** | **The recipient, named, with their rota window and how they will be told** | Ours, from section 3 | MAIN | MVP |
| **3** | **A structured handover, three short prompts**: what I checked, what I could not do, what I need from you | UCL: structure removes the variation in handover quality | MAIN, HJ2 | MVP |
| **4** | **The consequence line**: the case stays open, gains `escalated`, and is written to the log either way | Webflow's consequence stating dialog | MAIN | MVP |
| **5** | **One primary action naming the outcome and the person**, and `Cancel` | Ours, against Copy.ai's `OK` | MAIN | MVP |

**Deliberately absent:** a taxonomy, a severity picker, a `Next`, a warning icon, and a verification code.

**No taxonomy is the interesting absence.** A rejection routes to a machine, so it must be machine readable, which is why 0.7 exists. **An escalation routes to a person who will read it**, so structure serves comprehension rather than routing. Three prompts do that; a dropdown of escalation reasons would produce a value nobody consumes.

**Free text is the carrier here, and that is the opposite of 4.4.** Stated plainly because it looks like an inconsistency and is not: the difference is who reads the output.

---

## 5. Nobody on the next level, and it is grounded

The hardest state is the one at 03:00: the on call analyst **is** the rota.

PagerDuty documents the same failure at the platform level, opened this session: *"Incidents are only created when an escalation policy has an on-call user. If there is no one to assign an incident to when an event is sent to PagerDuty, due to a coverage gap on a schedule for example, no incident is created."*

Their answer is to drop the incident. **Ours cannot be**, because the case already exists and the analyst is holding it.

So when there is no one on the next level:

- The dialog **says so, and names who it would have gone to**
- It offers the provider's declared fallback contact, which is a configuration value rather than a guess
- **It never files the state `escalated` with nobody attached.** An escalation to nobody is a case that looks handed over and is not, which is worse than an open case

---

## 6. State matrix

| Element | Default | Opened from 4.7 | Nobody on the next level | At 360 | Write failed, 4.9 |
|---|---|---|---|---|---|
| **What is being escalated** | Case and Clerk's verdict | Same | Same | Same, one line | Same |
| **Recipient** | Named, with the rota window | Named | **Named as who it would have been, plus the fallback contact** | Named | Frozen |
| **Handover prompts** | Three, all optional but prompted | **First prompt pre-filled**: the evidence is no longer retrievable | Three | **One**: what I need from you | Preserved |
| **Consequence line** | Stays open, gains `escalated`, written to the log | Same, and it says 4.7 left no other exit | **Says no one is on, and what will happen instead** | Same, shortened | Last shown |
| **Primary action** | `Escalate to <name>` | Same | Disabled until a recipient exists | `Escalate to <name>` | `Retry`, and the case stays open and unescalated |

**Filing is allowed on a degraded connection**, the same rule 0.4 settled for verdicts. A case that cannot be handed over because the network is poor is the case most likely to need handing over.

---

## 7. Keyboard

| Key | Does | Note |
|---|---|---|
| `e` | Opens this dialog from 4.1 or 4.2 | Declared in 0.5, live only while the pane has focus |
| `Tab` | Moves between the three prompts | They are text fields, so letters are letters |
| `Enter` | **Does not file.** It is a newline inside a prompt | Deliberate difference from 4.4, where `Enter` files, because here the primary input is prose |
| `Escape` | Closes without filing | The dialog consumes it and does not propagate, from 0.5 |

**`Enter` behaving differently in 4.4 and 4.6 is a real inconsistency, and it is chosen.** In 4.4 the input is a selection and `Enter` completes it. In 4.6 the input is prose and `Enter` inside prose must make a line. Making them the same would break one of the two. Recorded here so 0.5 can carry it and stage 05 does not smooth it away.

---

## 8. At 360, and it is the only dialog that renders there

4.4 does not render at 360. **4.6 does, and it is the whole reason 4.2 exists**: the named scenario is read and escalate.

Reduced to what a person types on a phone at 03:00:

- The recipient, named, first. Before anything else, because "who gets this" is the question
- **One prompt, not three**: what I need from you
- The consequence line, shortened
- One action, naming the person

**The cost:** the handover is thinner from a phone than from a desk. That is honest rather than ideal, and it is better than three empty fields nobody fills at 03:00 producing a handover that looks complete and is not.

---

## 9. Emotional support

| Job | Mechanism | Where |
|---|---|---|
| **Social, P1.** Look like the work of someone who knew what they were doing | Structure removes the variation. Three prompts produce a handover whose quality does not depend on how tired the author was | Block 3 |

The UCL finding behind it is the strongest evidence in this node: handover quality varies widely between individuals, no organisation trains it formally, and seniors read newer analysts' notes. **The person on the other end of this dialog is one of those seniors.**

---

## 10. Not this node

- **4.4** reject, which closes the case and routes to a machine. Different shape for a different reader
- **4.1, 4.2** the case, and the Escalate control that opens this
- **4.7** evidence expired, where this dialog is the only exit and arrives pre-filled
- **4.10** held locally. A failed escalation leaves the case open and **unescalated**, which is not the same state
- **2.1** the shift, which is where the rota this node depends on comes from
- **0.5** the keyboard mechanism. **8.4** the toast, and the no undo rule
- **5.1** where the escalation appears as an entry, and where un-escalating would appear as a second one

---

## 11. Grounding

| Claim | Source |
|---|---|
| A dialog that states what it will do before it does it | Webflow ecommerce confirmation, Refero `59ddb501`, opened this session |
| `OK` as a confirm label names nothing | Copy.ai bulk delete, Refero `913dc6cb`. Left |
| Escalation policies fail when nobody is on call | PagerDuty Incidents: *"Incidents are only created when an escalation policy has an on-call user... no incident is created"*, opened this session |
| Structure removes variation in written handover | UCL handover study, stage 02, quoted in `jtbd.md` |
| The case stays open and wears a visible state | `CLAUDE.md`, the visible states rule, and the base layer row for 4.6 |
| A degraded connection does not block filing | 0.4 |
| There is no third persona | `personas.md`. P2's use of the console is `[?]` |

---

## 12. Open questions

1. **Does the recipient see it in Harrier, or somewhere else?** If P2 does not use the console, an escalation that only appears in Harrier is a message sent to a room nobody is in. **The `[?]` on P2 is now blocking a real mechanism**, which is a stronger reason to resolve it than it had at stage 02.
2. **Can an escalation be taken back?** 8.4 forbids undo, so the honest answer is a second logged action. What that looks like on the case and in 5.1 is unspecified, and it is the same shape as the superseded entry question 5.1 left open.
3. **Does the rota come from Harrier or from the provider's existing on call tool?** Section 3 assumes the product knows who is on. If the rota lives in PagerDuty or Opsgenie, 2.1 is reading it rather than owning it, and that is an integration this layer has not described.
4. Are three prompts the right number at 1440? Two would be cheaper and one of the three is doing less work than the others. Not settled; stage 04 draws it and stage 05 writes them.
