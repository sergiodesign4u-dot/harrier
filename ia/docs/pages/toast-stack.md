# 8.4 Toast stack

**Two things in this node contradict what was drawn at 0.1, and both corrections make the product simpler rather than richer.** Toasts do not disappear on a timer, and filing a verdict does not produce one at all.

---

## 1. Identity

| | |
|---|---|
| **Number** | 8.4 |
| **Name** | Toast stack |
| **Type** | section |
| **Group** | `global` |
| **Scope** | MVP |
| **Parent** | none. Discovered at the detail layer |
| **Lives in** | 0.1 zone Z6, bottom left, above the list and never over the detail pane |
| **Fed by** | 0.4 on recovery, 4.9 on a failed write, and events that happen off screen |
| **Never fed by** | anything whose result is already visible where the analyst is looking |

---

## 2. What earns a toast

An analyst rules on dozens of cases a shift. If filing produces a notice, the product produces dozens of notices, and a notification the operator learns to dismiss without reading is worse than none: it trains the reflex that later dismisses the one that mattered.

**The rule: a toast only when the outcome is not visible where the analyst is looking.**

| Event | Toast | Why |
|---|---|---|
| Verdict filed | **No** | The row changes to decided **in place**, under her hand, and leaves only when the selection moves off it. That is the feedback, and it is in the field of view already. **Corrected at the stage 08 audit**: this row used to say the row leaves the queue on filing, which contradicted 3.1. Grounds in 3.1 section 4b |
| Case escalated | **No** | The row stays and changes state visibly, which the map already requires |
| Connection recovered, cases replayed | **Yes** | It happened off screen and carries a count the analyst cannot otherwise get |
| A write failed | **Yes**, and it persists | 4.9 owns the state. The toast is how the analyst learns while looking elsewhere |
| A case being read was taken by another analyst | **Yes** | Off screen, and it changes what the analyst is about to do |
| Grant changed on a tenant | **Yes**, later | Off screen, and it changes latitude. Belongs with cluster 7 |

**Three of the six are no.** That count is the point of the node.

---

## 3. Toasts do not disappear on a timer

A toast that dismisses itself is a time limit set by the content, which puts it under WCAG 2.2 SC 2.2.1 Timing Adjustable, **Level A**. Verbatim: "For each time limit that is set by the content, at least one of the following is true", followed by turn off, adjust over a range at least ten times the default, extend with a warning and at least 20 seconds, and three exceptions.

**None of the three exceptions fits a toast.**

| Exception | Verbatim | Fits? |
|---|---|---|
| Real-time | "The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible" | No. Nothing about a notice is an auction |
| Essential | "The time limit is essential and extending it would invalidate the activity" | No. A notice that stays does not invalidate anything |
| 20 hours | "The time limit is longer than 20 hours" | No |

And the extend route is absurd here: warning the analyst that a toast is about to close, and offering twenty seconds to keep it, is more interruption than the toast.

**So they persist until dismissed or replaced.** The Understanding document names who this is for: "People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls."

**And the stack is capped rather than allowed to grow.** Three visible, older ones collapse into a single count. The cap is a layout decision; the persistence is a compliance one, and they must not be confused when someone later argues for a timer.

---

## 4. There is no undo, and that is not a gap

0.1 drew `Verdict filed, undo`. Both halves were wrong, and the second is the more interesting.

**An undo on an append-only log is a contradiction.** The compliance requirement in the project context is that every Clerk action and every human override writes to an append-only log carrying the evidence snapshot as it stood at decision time. A verdict that can be silently retracted is not that.

**The alternative that was considered and rejected:** hold the write for a few seconds so undo cancels an uncommitted action. It fails twice. It puts a deliberate delay on the one operation the product exists to make fast, and it contradicts 4.9, which assumes a write attempt the analyst can watch fail.

**What replaces it.** A wrong verdict is corrected by a **new logged action** that supersedes the first, visible in 5.6 as the history of that case. The correction is a record rather than an erasure, which is what an audit trail is for. Slower to type and impossible to lose.

---

## 5. Role, and the one that must not be overused

| Case | Role | Why |
|---|---|---|
| Connection recovered, replay count | `status` | Polite. It is information, and the analyst may be mid sentence |
| Case taken by another analyst | `status` | Polite. Changes what happens next, not what is on screen now |
| Write failed | `alert` | Assertive. The analyst believes a decision was recorded and it was not |

**Only failure is assertive.** SC 4.1.3, already carried at 0.4, requires status messages to be announced without receiving focus, and that holds for all three. The difference is politeness, not focus: nothing here ever takes focus, because focus belongs to the evidence being read.

---

## 6. State matrix

| Element | None | One | Three or more | Failure present | Connection stale | At 360 |
|---|---|---|---|---|---|---|
| **Stack** | Absent | One notice | Three visible plus `n more` | The failure sits at the bottom, nearest the eye, and does not collapse | **Suppressed.** 0.4 owns one persistent strip instead | Bottom, full width, above the safe area |
| **Dismiss** | n/a | Explicit, keyboard reachable | Per notice, plus dismiss all | **Not dismissible** while the case is unrecorded | n/a | Same |
| **Detail pane** | Unchanged | Never covered | Never covered | Never covered | Unchanged | n/a |
| **Focus** | Untouched | Untouched | Untouched | Untouched | Untouched | Untouched |

**The failure notice is not dismissible while the condition holds.** A dismissible warning about a verdict that was never recorded is a way of forgetting it. The state clears when 4.10 resolves, not when the analyst clicks.

**Toasts are suppressed while the connection is degraded.** One persistent strip beats a queue of notices about the same fault, and 0.4 already carries it.

---

## 6b. Where it is anchored, settled by drawing it at stage 04

This node was specified as MVP with three notices marked **yes** and stage 04 drew none of them, which is how a whole node came to live only in prose. Drawing it settled one thing the specification had stated as a location rather than as a rule.

**Zone Z6 is anchored to the list column, not to the viewport.** Section 1 says bottom left, above the list and never over the detail pane. Anchored to the viewport, a notice at 1440 sits over the pane, which is where the evidence being decided on is. Anchored inside the list, it scrolls away with the rows, because the list is a scrollport. It hangs off the row that contains both columns, and its width is capped below the point where it could reach the pane.

**At 360 it is anchored to the viewport, and that is not an exception.** At that width there is no pane to cover: 4.2 settles that a case takes the whole screen there.

| Drawn | Where |
|---|---|
| One notice, dismissible | 3.1, connection recovered with a replay count |
| Three visible, two collapsed, failure pinned | 3.1, the cap and the pinning rule together |

The full stack is drawn on purpose rather than as an edge case. **The cap and the pinning rule are only decidable when the stack is full**, and a notice layer specified but never drawn at capacity is how three visible turns into six in the build.

---

## 7. Not this node

| Not here | Lives at |
|---|---|
| The connection state itself | 0.4 |
| The unrecorded verdict as a case state | 4.9, 4.10 |
| The escalated case as a row state | 3.1, 4.6 |
| The history that replaces undo | 5.6 |

---

## 8. Grounding and open questions

**Every question below carries a verdict at the end of this file.** 3 settled, 0 drawn at stage 04, 0 still open, decided at the close of stage 03b so that stage 04 draws against answers rather than against a list.

| Claim | Source | Standing |
|---|---|---|
| An auto dismissing notice is a time limit and falls under SC 2.2.1, Level A | W3C, Understanding SC 2.2.1, opened this session | **Fact, and a launch condition** |
| None of the three exceptions applies to a toast | same page, all three quoted | Fact, reasoned |
| Some people need more time to read and locate | same page, verbatim | Fact |
| Status messages announced without focus | SC 4.1.3, opened this session at 0.4 | Fact |
| A toast only when the outcome is not visible on screen | this node | Decision, and it removes three of six candidate toasts |
| No undo, correction is a superseding logged action | this node, from the compliance requirement | Decision, argued |
| Cap of three visible | this node | Decision, layout |

1. **How long does a `status` toast persist if never dismissed?** Persistence is required, but a notice from six hours ago is noise. Clearing on section change is the obvious answer and it is untested.
2. **Does the analyst want to know that another analyst took a case?** Assumed yes. The premise of a shared console with forty tenants makes collisions likely, but no flow covers one, which is already recorded as an open question at 0.1.
3. **Where do grant change notices go before cluster 7 exists?** Nowhere in the MVP. Recorded so the gap is visible when 7.3 arrives.

---

## Settled before stage 04

Taken at the close of stage 03b. A question is settled here only when the answer follows from something the product already decided; where it does not, it says who can answer and what it blocks.

| # | Question | Verdict |
|---|---|---|
| 1 | How long does a status notice persist if never dismissed? | **Settled**. **Until the condition ends, never on a timer.** This node already gives notices only to conditions, and a condition that has ended has no notice. Nothing is dismissed by age. |
| 2 | Does the analyst want to know a case was taken by someone else? | **Settled**. **Yes, and it changes the row rather than raising a toast.** Settled at 0.1. The row is where she is looking, and a toast about a case she cannot see is noise. |
| 3 | Where do grant change notices go before cluster 7 exists? | **Settled**. **Nowhere, and correctly:** there are no grant changes in the MVP because 7.3 is LATER. Recorded so the gap is visible when it arrives. |
