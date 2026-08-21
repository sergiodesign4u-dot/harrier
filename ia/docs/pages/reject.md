# 4.4 Reject with a reason

Design principle 3 says **override is one key, and it teaches.** This node is where both halves are either true or false. Everything else in the product can be right and this one dialog can still make the principle a slogan.

---

## 1. Identity

| | |
|---|---|
| **Number** | 4.4 |
| **Name** | Reject with a reason |
| **Type** | dialog, anchored inside 4.1 |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | C1, through 4.1. Scope carried |
| **Page type for the bank** | **E, a dialog** |
| **Opened by** | `r` in 4.1, or the Reject control in the verdict footer |
| **Route** | none. A dialog is not a route |
| **Writes to** | the verdict record in 5.1, and the tuning route in R3 |
| **Job** | **R3**, inside MAIN |

**Rejecting does not become a screen.** A screen is a route, not a key. That was settled at the base layer and it is why this is a dialog rather than node 4.11.

---

## 2. Purpose, and the number that makes it affordable

Clerk was wrong. The analyst has to say so in a way that (a) defends the decision months later and (b) does something before the next shift. Free text does neither: `jtbd.md` records that handover quality varies widely between individuals and that no organisation trains it.

So the reason is structured, on the two paired axes from 0.7. The number that makes the structure affordable is this one:

**Five of six values on axis A need no second question.** The pairing does the work, so for five of six reasons this dialog is one selection and one confirmation. That is the whole reason a structured taxonomy is cheaper here than a text box.

| Axis A, what Clerk got wrong | Axis B, where it goes | Second question |
|---|---|---|
| Real, called benign | Detection is too narrow | No |
| **Benign, called a threat** | ambiguous: too broad, or tenant context | **Yes, one choice of two** |
| Right answer, wrong reasoning | Clerk weighted the wrong signal | No |
| Right answer, wrong scope | Clerk weighted the wrong signal | No |
| Not enough evidence either way | Nothing to change | No |
| Normal at this tenant | Tenant context missing, **locked** | No |

---

## 3. How it teaches, and that is the second half of the principle

Principle 3 does not say "override is cheap". It says override is one key **and it teaches**. A dialog that only collects a reason satisfies half a principle.

**The mechanism: each reason states its consequence, in place, before it is chosen.** Selecting a value changes one line under the list.

| Selected | The line says |
|---|---|
| Real, called benign | Goes to the detection engineer. The rule that missed this is too narrow |
| Benign, called a threat, too broad | Goes to the detection engineer. The rule fires on too much |
| Benign, called a threat, tenant context | Stays with this client. Nothing changes for anyone else |
| Right answer, wrong reasoning | Goes to Clerk's weighting. The verdict stands, the argument does not |
| Right answer, wrong scope | Goes to Clerk's weighting. Correct event, wrong blast radius |
| Not enough evidence either way | Nothing is tuned. Clerk should have escalated instead of concluding |
| **Normal at this tenant** | **Updates this client's context. It never changes a detection** |

The last row is the most consequential rule in 0.7 and this is where the analyst meets it. Without the line, an analyst who believes `normal here` retunes a detection for forty clients would have no way to learn otherwise from the interface.

**Taken from Webflow**, whose confirmation dialog states what it will create and warns the change cannot be fully removed. Stating consequences is the block; the consequences are ours.

---

## 4. Blocks, in priority order

From `ia/docs/blocks.md`, type E.

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **What is being rejected**, one line: Clerk's verdict as filed | Ours. You cannot disagree with something you cannot see | R3 | MVP |
| **2** | **Axis A as a single select list**, six values, one control | YouTube Music report dialog | 0.7 | MVP |
| **3** | **An info affordance on every value** | Same reference | 0.7 | MVP |
| **4** | **The consequence line**, changing with the selection | Webflow's consequence stating dialog; the content is ours | design principle 3, the teaching half | MVP |
| **5** | **Axis B, shown only when asked**, and shown **locked** when derived | Ours, from 0.7's pairing | 0.7 | MVP |
| **6** | **Optional note**, labelled optional, read by humans only | 0.7: free text stays and is never the carrier | R2 | MVP |
| **7** | **One primary action naming the outcome**, and `Cancel` | Ours, against Copy.ai's `OK` | design principle 3 | MVP |

**Deliberately absent:** a `Next` button, a warning icon, an illustration, a confirmation step, and a verification code.

**`Next` is the load bearing absence.** YouTube Music's report dialog ends in `Cancel` and `Next` because picking a reason is step 3 of 6. **If rejecting Clerk costs more steps than accepting it, the analyst accepts.** Principle 3 inverts that: reject must cost less. One selection, one key, done.

---

## 5. There is no confirmation, and no undo

Two absences that look like oversights and are not.

**No confirmation step.** A second "are you sure" would make rejection cost two keys and acceptance one, which is the exact asymmetry principle 3 exists to remove. The dialog itself is the deliberate act.

**No undo.** 8.4 already settled it: an append only log cannot unwrite an entry. A rejection filed in error is corrected by a **superseding logged action**, visible in 5.6 as two entries with their times, not by erasing the first.

**And there is no toast after a rejection at all.** 8.4 rules a filed verdict **No**: the row changes to decided **in place**, under her hand, and that is the feedback, already in the field of view. So the no undo constraint attaches to the record, not to a notification. **Corrected at the stage 08 audit**, where this sentence still assumed a toast that 8.4 had ruled out.

---

## 6. State matrix

| Element | Opened, nothing chosen | Five of six chosen | `Benign, called a threat` chosen | `Normal at this tenant` chosen | Write failed, 4.9 |
|---|---|---|---|---|---|
| **What is being rejected** | Clerk's verdict, one line | Same | Same | Same | Same |
| **Axis A** | Six values, none selected | One selected | One selected | One selected | Frozen, selection kept |
| **Consequence line** | Empty, and the space is held so nothing jumps | The consequence for that value | Empty until axis B is answered | **The tenant context line, and it says it never changes a detection** | Last shown |
| **Axis B** | Hidden | Hidden, derived silently | **Visible, two options, one required** | **Visible and locked**, shown so the analyst can see what was derived | Frozen |
| **Note** | Empty, optional | Same | Same | Same | Preserved |
| **Primary action** | Disabled, and it says a reason is required | `Reject and tune` | Disabled until axis B is answered | `Reject and tune` | `Retry`, and 4.10 holds locally |

**Axis B is shown when it is locked, not hidden.** Deriving it silently would be faster and would teach nothing. The analyst sees what the system concluded on her behalf, which is the same contract Clerk operates under.

---

## 7. Keyboard

| Key | Does | Note |
|---|---|---|
| `r` | Opens this dialog from 4.1 | Declared in 0.5, live only while the pane has focus |
| `Up` `Down` | Moves within the axis A list | Standard radio group behaviour. The list is a radio group, not a menu |
| `1` to `6` | Jumps to a value | A single character shortcut, so it is declared in 0.5 and can be remapped or disabled |
| `Enter` | Files the rejection | Only when the primary action is enabled |
| `Escape` | Closes without filing | **The dialog consumes it and does not propagate**, from 0.5 |
| Any letter, in the note | A letter | While the note has focus, letters are text. A key that acts while a text field has focus is a defect, not a convenience |

Focus moves into the dialog on open and returns to the Reject control on close. **The dialog is anchored, not centred**, and it never covers the evidence block: design principle 5 forbids an overlay over the evidence the analyst is deciding on, and the thing being disagreed with is the least acceptable thing to hide.

---

## 8. At 360, and the cost of the decision

**Not rendered.** `CLAUDE.md` sets the platform line: mobile exists for one scenario, an on call analyst opening a paged case at 03:00 **to read it and escalate**. 4.2 exposes escalate only, so there is no Reject control for this dialog to open.

**The cost, stated rather than buried:** a case an analyst reads at 03:00 and knows to be benign cannot be closed from the phone. It stays in the queue until she is at a desk.

That is the platform line applied honestly rather than an omission, and it is a candidate to revisit if the on call scenario turns out to include closing rather than only escalating. Recorded as open question 3.

---

## 9. Emotional support

One mechanism from the `sitemap.md` table lands here, through what this dialog writes rather than what it shows.

| Job | Mechanism | Where |
|---|---|---|
| **Social, P1.** Look like the work of someone who knew what they were doing | The verdict record is composed from **structured parts rather than free text**, so its quality does not depend on how tired the author was at 07:00 | Blocks 2, 5 and 6. The note is additive and nothing downstream reads it |

Nothing else in the table lives here, and nothing is written in for completeness.

---

## 10. Not this node

- **0.7** the taxonomy itself: the six values, the five derivations, the pairing rule. This node renders it and opens it, it does not define it
- **0.5** the keyboard mechanism, the remap and disable controls, and the rule that a modal consumes `Escape`
- **8.4** the no undo rule. **Not a toast**: a filed verdict produces none, because the row leaving the queue is the feedback
- **4.1** the case, the verdict footer and the Reject control that opens this
- **4.6** escalate, which is a different dialog with a different shape: it does not close the case
- **5.1 and 5.6** where the rejection is read back later, and where a superseding correction appears beside it

---

## 11. Grounding

| Claim | Source |
|---|---|
| Single select reason list inside a dialog, with an info affordance per value | YouTube Music report dialog, Refero `b509a225`, opened this session |
| A dialog that states what it will do and warns it cannot be fully undone | Webflow ecommerce confirmation, Refero `59ddb501`, opened this session |
| `OK` as a confirm label on a destructive action | Copy.ai bulk delete, Refero `913dc6cb`. **Left**, because `OK` names nothing |
| Four classification values with a `Not set` default | Microsoft Learn, Manage incidents, quoted in 0.7 |
| Five of six values need no second question | 0.7, derived from the pairing |
| Structure removes variation in written handover | UCL handover study, stage 02, quoted in `jtbd.md` |
| Single character shortcuts must be focus scoped, remappable or disableable | WCAG SC 2.1.4, Level A, quoted in 0.5 |
| An append only log cannot offer undo | 8.4, from WCAG SC 2.2.1 and the compliance requirement |

---

## 12. Open questions

1. **Is `Real, called benign` reachable often enough to matter?** From this dialog it is reachable whenever Clerk filed a benign verdict that reached the queue. What remains unreachable is the larger set: **cases Clerk closed on its own and the analyst never sees.** 0.7 recorded that hole; this node does not close it, and the analyst side review lane still has no job.
2. **Does the consequence line get read?** It is the mechanism carrying the teaching half of principle 3, and the RIT finding quoted in `jtbd.md` is that analysts "rarely mentioned using the fine-grained feature contribution graphs" under time pressure. **A line nobody reads teaches nothing**, and this is the first thing to test on the dialog rather than to assert.
3. **Should 4.2 expose reject at 360 after all?** The platform line says read and escalate. The cost is in section 8. Revisit only with evidence about what on call analysts actually do at 03:00.
4. **Do the digit shortcuts survive stage 05?** Six values with stable numbering is fast for a daily user and fragile if the taxonomy ever grows. The taxonomy is a decision of 0.7, so the numbering is only as stable as that list.
