# Behaviour

Stage 13, step 2.

The product is assembled and you can look at it. What you cannot look at is **when** anything happens: under which condition the error appears, what counts as valid, what stands in the pane when nothing is selected, where success goes. That is the whole content of this file. Everything else about a screen is already readable at a link, and this file links rather than repeats.

**Reader: the new developer.** Second reader: yourself in a year, when a row in the queue behaves in a way you no longer remember deciding.

---

## 0. Two rules before the first row

### Precedence, written once because it was stated three different ways in three files

The reader of step 1 could not find a single rule and had to assemble one out of `wireframes/docs/conventions.md`, the preamble of `voice/docs/microcopy.md` and section 10 of `design/kit/docs/architecture.md`. It is settled here and repeated nowhere:

| Question | Who owns the answer |
|---|---|
| What states exist, what is valid, what a screen must not say | **`ia/docs/pages/<node>.md`**, the node specification |
| What markup a screen carries, and what its strings actually say | **the built colour screen in `design/`**, which is the applied text |
| Why a string reads the way it does | **`voice/docs/microcopy.md` section 8**, the ruling table. Sections 3 and 4 of that file are the inventory as it stood BEFORE stage 05 and a lookup there returns the wording that was replaced |
| Which heading is the `h1` | **the browser at 360.** R11 in `architecture.md` is a measurement and `design/kit/checks/rules.mjs` performs it |

### The source column, and a row without one is not written here

Every row below names where its behaviour comes from, and there are four legal values:

- **screen** plus a filename: the state exists in the markup of that file
- **flow**: the transition exists in `ia/docs/flows.md`
- **node** plus a node number: a requirement of `ia/docs/pages/<node>.md`
- **grey, screen in the backlog**: the step exists only in the frozen `wireframes/` original because its coloured screen was not built. **This value is used zero times in this file**, and that is worth saying: stage 12 closed the rollout with an empty list, so every step of every flow has a coloured screen behind it

A behaviour with no source does not get a row. It goes to section 6, NOT SETTLED, and waits for a decision. Behaviour is exactly the place where a model with no source returns a plausible median, and the median looks flawless.

---

## 1. Main job: decide whether Clerk's verdict holds

> When Clerk hands me a case it has already investigated, I want to decide whether its verdict holds, so that the decision is made and I can still defend it months later.

**Activation node `File`, two screens from the start.**

### Steps

| # | From | Action | To | Source |
|---|---|---|---|---|
| 1 | Shift starts | First screen of this shift | `shift.html`, brief | flow |
| 1b | Shift starts | Any later screen of the shift | `queue.html` | flow |
| 2 | `shift.html` | A pointer straight into a waiting case | `case.html` | flow, node 2.1 |
| 3 | `queue.html` | Up and Down move the selected row **and the pane follows**. Focus stays in the list | `queue.html`, pane redrawn | node 3.1 section 6 |
| 4 | `queue.html` | `Enter` moves focus INTO the pane, which is what makes the verdict keys live | `case.html` in the pane | node 3.1 section 6 |
| 4b | `queue.html` at 360 | `Enter` navigates instead, because there is no second pane | `case-standalone.html` | node 3.1 section 6, node 4.2 section 4 |
| 5 | `case.html` | `a` accepts | `queue-decided.html` | screen `case.html`, node 4.1 section 6 |
| 6 | `case.html` | `r` rejects and opens the reason dialog | `reject.html` | screen `case.html` |
| 7 | `case.html` | `m` amends the narrative **in place**. No dialog and no scrim | `case-amend.html` | screen `case-amend.html`, node 4.1 section 5 |
| 8 | `case.html` | `e` escalates | `escalate.html` | screen `case.html` |
| 9 | `case.html` | `[` and `]` move to the previous and next case without returning to the list | `case.html` | node 4.1 section 6 |
| 10 | `case.html` | `Escape` returns focus to the list and **keeps the selection** | `queue.html` | node 4.1 section 6 |
| 11 | any verdict | The verdict is filed with the evidence snapshot as it stood | `queue-decided.html`, then the log | flow |

### States

| State | Where | What it does | Source |
|---|---|---|---|
| Loading | `queue-streaming.html` | Rows arrive as Clerk correlates them. The scope readout is **provisional and says so**, because the count is still arriving | screen, node 3.1 section 5 |
| Error, connection | `queue-reconnecting.html`, `queue-stale.html` | The list stays **readable and marked stale, never blanked**. The readout names the age of the count rather than a fresh number | screen, node 3.1 section 5 |
| **Filing on a degraded connection is allowed** | `queue-stale.html` | A poor network does not block a decision. This is settled at node 0.4 and it holds for verdicts and for escalations alike | node 3.1 section 5, node 4.6 section 6 |
| Empty, nothing waiting | `queue-empty.html` | The pane reads as **the fleet**, not as an empty screen. This is the test of the biggest decision of the structure: the fleet has no menu item because it is the resting state of this pane | node 3.1 section 5 |
| Empty, filtered to nothing | `queue-no-match.html` | `No case matches this scope`, **and the chip that emptied it is identifiable** | screen, node 3.1 section 5 |
| Empty, no baseline | `case-no-baseline.html` | `No baseline for this tenant yet`. Not a zero and not a comparison that means nothing | node 4.1 section 5 |
| Domain, Clerk working | `case-investigating.html` | The verdict line is **absent** and what is being checked is shown instead, so waiting is legible. Escalate is the only live control | node 4.1 section 5 |
| Domain, Clerk already acted | `case-acted.html` | A banner names the action and its class. Latitude shows **what it did and whether it can be undone** | node 4.1 section 5 |
| Domain, amending | `case-amend.html` | The field is editable and **Clerk's original stays visible beside it**, never replaced. The evidence block does not move. While the field has focus, letters are text and nothing else | node 4.1 section 5, node 0.5 section 8 |
| Error, evidence expired | `case-expired.html` | The evidence block is a **tombstone**: what was there, that it is gone, when. Never a blank. Escalate is the only live control | node 4.1 section 5 |
| Error, the verdict did not write | `case-write-failed.html` | Retry, or hold locally | screen, flow |
| Domain, held locally | `case-unrecorded.html` | After a retry still fails the verdict is held, the case stays open, and the row in the queue wears `unrecorded`. **The retry does not loop** | flow, node 4.1 section 5 |
| Domain, just filed | `queue-decided.html` | The row **stays in place and reads decided**. It leaves the list when the selection moves off it, not when the verdict is filed. No toast: the row changed under her hand | screen, node 3.1 section 4b |
| Domain, escalated | `queue-escalated.html` | The case stays open and wears `escalated`. A case that left her hands must not look like one that did not | flow, node 3.1 |
| Domain, taken | `queue-taken.html` | The row wears `taken`, with a name and since when. **Filing is still allowed**: a real collision is recorded by the log rather than prevented by a lock | node 3.1 section 5 |
| Domain, Clerk not investigating | `queue-clerk-down.html` | The queue is **complete** and says so: nothing is missing and nothing new arrives until Clerk is back | screen |
| Systemic, notices | `queue-notice.html`, `queue-notices.html` | One notice, and the stack at its ceiling | screen, node 8.4 |

### Validation

| Rule | Where it renders | Source |
|---|---|---|
| **A rejection requires a reason.** With nothing chosen the primary is `aria-disabled` and the hint reads that a reason is required | `reject.html` | screen |
| **Five of the six reasons derive the second axis silently. One does not**, and then the second axis is required and the primary stays disabled until it is answered | `reject-axis-b.html` | screen, node 4.4 section 6 |
| **Axis B is shown when it is locked, not hidden.** Deriving it silently would be faster and would teach nothing | `reject-tenant-normal.html` | node 4.4 section 6 |
| **There is no confirmation step and no `Next`.** The fourth keystroke is `Enter`, not a dialog. If rejecting costs more than accepting, the analyst accepts | `reject.html` | node 4.4 section 5, screen |
| **The note is optional** in every reject state | `reject*.html` | node 4.4 section 6 |
| **An escalation requires a recipient.** With nobody on the rota the primary is `aria-disabled` and the footer says so | `escalate-no-recipient.html` | screen |
| **`Enter` inside a handover prompt makes a line, it does not file.** The button files. Stated in the footer of every escalate state | `escalate*.html` | screen |
| **The handover prompts are optional but prompted.** Three of them, one at 360 | node 4.6 section 6 |
| **An amendment carries no reason code.** The amended text is the reason, and it is already structured by being the verdict record's own field | node 4.1 section 5 |
| **The log has no editing control at all.** Not disabled: absent | node 5.1 section 6 |

### Edge cases

- **The evidence aged out.** The job cannot close, because the decision will not be defensible in April. The only exit is escalate, the case stays open flagged `escalated`, and the analyst returns to the queue. The node stays a failure of the job, not a trap for the person. Source: flow, node 4.1 section 5
- **The verdict did not write.** After one retry still fails, the verdict is held locally and the case stays open flagged `unrecorded`. **Unbounded retry on the most critical operation in the product was itself a defect** and the floor is deliberate. Source: flow
- **`4.7` and `4.9` must not share a treatment.** One is evidence that aged out, the other a write that did not land. The first leaves a decidable case with an undefendable record; the second leaves a decision nobody can see. Source: node 4.1 section 5
- **Single letter keys are live only while the pane has focus**, which is the third condition of WCAG SC 2.1.4 Level A, and all of them are remappable and can be disabled from the foot of the keyboard map. Source: node 4.1 section 6, node 0.5
- **A text field wins over a verdict key.** With focus in a field, `a` types the letter `a`. This is the accidental verdict, and it is the column node 0.5 exists to make impossible. Source: node 0.5 section 8

---

## 2. R1: pick up and hand off a shift

> When I take over a rotation somebody else was working, I want to know what changed and what is waiting on a decision, so that I do not spend my first hour rebuilding what the last shift already knew.

### Steps

| # | From | Action | To | Source |
|---|---|---|---|---|
| 1 | During the shift | The brief **accumulates all shift**. It is not written at the end | `shift-outgoing.html` | flow, node 2.1 section 6 |
| 2 | `shift-outgoing.html` | Seal, available at any time | `shift-sealed.html` | screen, node 2.1 section 6 |
| 3 | `shift.html` incoming | A counted line is a pointer into a case | `case.html` | node 2.1 section 6 |
| 4 | `shift.html` incoming | No pointer taken | `queue.html` | node 2.1 section 6 |
| 5 | `shift-sealed.html` | Route out is sign in, the shift is over | `index.html` | node 2.1 section 6 |

### States

| State | Where | What it does | Source |
|---|---|---|---|
| Loading | `shift-assembling.html` | **What is being gathered, named**, rather than a spinner | node 2.1 section 6 |
| Empty | `shift-nothing-carried.html` | `Nothing waiting`, **and what was quiet**, which is information rather than an apology. A quiet shift is the good outcome and must not look like a broken screen | node 2.1 section 6, flow |
| Error | `shift-close-failed.html` | The brief stays open and **warns both analysts**. The only failure in the product addressed to two people, because an unsealed brief is a problem for the one leaving and the one arriving | node 2.1 section 6 |
| Domain, nobody sealed it | `shift-unsealed.html` | The incoming analyst arrives at a brief the outgoing one never closed. Notes are editable again | screen |
| Domain, sealed | `shift-sealed.html` | Who sealed it and when. Counted lines frozen, notes read only | node 2.1 section 6 |

### Edge cases

- **Overlap or written only.** If the incoming analyst arrives before the brief closes there is a chance to ask; if not, the written handover is all there is, and that is the common case. Neither is a separate screen: the difference lives in whether anyone is there, not in the interface. Source: flow
- **The dead end of this job is that the first hour goes to rebuilding.** It cannot be unspent, so the job failed, and the exit is the queue, which is exactly the expensive path the job existed to avoid. Source: flow
- **Notes are editable on the outgoing brief and read only on the incoming one.** Source: node 2.1 section 6

---

## 3. R2: answer for a decision made months ago

> When a client or an auditor questions a decision made months ago, I want to show what was known at the time, so that the answer comes from the record instead of my memory.

### Steps

| # | From | Action | To | Source |
|---|---|---|---|---|
| 1 | A client question | Open the log | `log.html` | flow |
| 2 | `log.html` | Narrow by tenant, asset or date | `log-narrowing.html` | screen, node 5.1 section 6 |
| 3 | `log.html` | Select an entry | `log-selected.html`, the entry in the pane | screen |
| 4 | the entry | Open it at its own address | `entry.html`, route `/log/{entryId}?as-of={timestamp}` | node 5.4 section 6 |
| 5 | an entry | Follow the case backwards | `case-history.html` | screen |

### States

| State | Where | What it does | Source |
|---|---|---|---|
| Loading | `log-narrowing.html` | **The log narrows before it draws.** A progressive render would invite reading a partial answer, and the query stays visible while it runs | node 5.1 section 6 |
| Empty | `log-not-found.html` | **This is the search affordance, not an empty state.** The only reason anyone is on this screen is that somebody asked a question, so "nothing found" is the start of the next attempt rather than the end of this one | node 5.1 section 6 |
| Error | `log-snapshot-gone.html`, `entry-gone.html` | The snapshot did not survive and the log **says so** rather than rendering a gap that looks like an answer | node 5.1 section 6, flow |
| Domain, partly gone | `entry-partial.html` | Part of the snapshot survived. Different from nothing surviving, and drawn differently | screen |
| Domain, the live case changed | `entry-changed.html` | The snapshot is intact and the case has moved on since. Both are true and both are shown | screen |
| Domain, beyond retention | `entry-beyond-retention.html` | The log does not reach back this far | screen |
| Domain, superseded | `case-history-superseded.html` | **Superseded entries are shown and marked, never hidden**, and both entries are reachable from either | node 5.1 section 6 |

### Edge cases

- **A snapshot that did not survive is not the same failure as a source that aged out**, and the log carries both separately. Source: flow, node 5.1 section 6
- **`?as-of` is explicit in every link the product generates**, so a copied address never depends on a default. Without it the address resolves to the entry's own decision time. Source: node 5.4 section 6
- **A snapshot for a tenant outside scope resolves exactly as one that does not exist.** Anything else would let the address enumerate another provider's clients. Source: node 5.4 section 6, node 8.1
- **The same dead end appears here and in the main flow**, and that is the point: both routes fail at evidence that no longer exists. Source: flow
- **`escalate-from-expired` keeps its `stamp` and its `?as-of` address** while the pane above says the snapshot is not retrievable. This is correct and was written nowhere until now: the address is still the address, and only the payload is gone. Source: node 4.6 section 6, screen
- **Node 5.1 says "at 360, not rendered" and three of its five states do render a surface there**, one of them an editable search form. The node's sentence is true of the LIST and reads as being about the screen. The pattern hides the list below the point; the pane is a different zone. Source: node 5.1 section 8, screen
- **`entry-beyond-retention` is where `Try 2024 instead` on `log-not-found` points**, and `wireframes/docs/screens.md` describes that screen as meaning the log does not reach back at all, which is a different claim from the one the button makes. **Kept as built**, and recorded here because the link resolves now and the mismatch is visible for the first time. Source: screen

---

## 4. Flow 4: get in, and arrive where the link pointed

> A pager at 03:00, a link in a ticket, or the start of a shift.

### Steps

| # | From | Action | To | Source |
|---|---|---|---|---|
| 1 | Any address, not signed in | Redirect to the only public URL in the product | `index.html` | flow, node 1.1 |
| 2 | `index.html` | Identifier first, then the provider's identity provider decides | the destination | node 1.1 section 3 |
| 3 | `index-deep-link.html` | **The destination is held across the round trip** | the case that was named | node 1.1 section 7 |
| 4 | `index.html`, no destination | Success | `queue.html` | node 1.1 section 7 |
| 5 | signed in, address does not resolve | | `not-found.html` | node 8.1 |

### States

| State | Where | What it does | Source |
|---|---|---|---|
| Domain, arrived by a link | `index-deep-link.html` | **The case is named**, so she knows the link worked. Destination held | node 1.1 section 7 |
| Domain, session expired | `index-expired.html` | `Your session ended. You will come back to where you were`. Email prefilled if known. **Destination held** | node 1.1 section 7 |
| Domain, signed out | `index-signed-out.html` | `You signed out`. Email empty. **Destination cleared**, because signing out is a deliberate exit | node 1.1 section 7 |
| Error | `index-idp-error.html` | What failed, in plain words, and **it is not her password**. Destination held, retry | node 1.1 section 7, flow |
| **No empty state** | | One field and one button hold no collection that can be empty | flow |

### Edge cases

- **Expiry and a deliberate sign out look alike and are not.** Treating them the same would either strand her after an expiry or return her somewhere she chose to leave. Source: node 1.1 section 7
- **`Keep` is the load bearing node of this flow, not `Ok`.** If the destination does not survive the round trip she lands on the queue at three in the morning and has to find the case by hand, which is the failure the permalink exists to prevent. Source: flow
- **A missing case, a case that closed, another provider's case and a mistyped address all render `not-found.html` identically**, and the copy must not imply the link was bad: the link may have been fine and the scope wrong, and she cannot be told which. Source: node 8.1 section 5
- **A refusal by role is node 8.3, which is LATER.** A tenant outside scope is node 8.1, which is already inside. Source: flow

---

## 5. Systemic, and they belong to no single flow

| State | Where | What it does | Source |
|---|---|---|---|
| Unplanned outage | `unavailable.html` | What is unavailable, named, without a window. Duration in the connection language of node 0.4. `No estimate`. Fallback contact. Retry available | node 8.2 section 5 |
| Planned maintenance | `unavailable-planned.html` | Named, with the published window. **Since when is not shown: it started on time** | node 8.2 section 5 |
| Partial | `unavailable-partial.html` | The part, named. The fallback contact is shown **only if the down part matters to a decision** | node 8.2 section 5 |
| Not found | `not-found.html` | Two exits, and the copy does not change with how she arrived | node 8.1 section 5 |
| Keyboard map | `keyboard.html` | Opening it makes the underlying screen **inert**, per the dialog pattern. `Escape` closes the map and **does not propagate**, so it does not also deselect the case. Verdict keys are inert while the map has focus. **Not rendered at 360** | node 0.5 section 8 |

---

## 6. NOT SETTLED

Behaviour with no source. **Two rows**, both raised by the readers rather than by this file, and each needs a decision rather than a guess.

| # | Question | Why it has no source | What it blocks |
|---|---|---|---|
| 1 | **Who receives an escalation when the recipient is the SOC lead?** `CLAUDE.md` carries the secondary persona with an open question against whether that person uses the console at all, and node 4.6 depends on the answer: an escalation names a recipient. `escalate-no-recipient.html` renders the case where nobody is on the rota, which is a different question from who is on it | The persona question is open in `research/docs/personas.md` and was never closed | Nothing in the built product. It blocks the FIRST feature that changes the rota, and node 7.x when cluster 7 arrives |
| 2 | **What does the queue do when a case is escalated by somebody else while she is reading it?** `queue-taken.html` covers a case taken for a decision and the log records a collision rather than a lock preventing it. An escalation performed elsewhere is neither | No flow raises it and no node matrix has a column for it | Nothing today. It becomes real the moment more than one analyst is modelled |

**Neither is a defect of the product.** Both are questions the product has not been asked yet, and writing a plausible answer here is exactly what this section exists to prevent.

---

## 7. Roll call

**Flows in `ia/docs/flows.md`: 4. Described here: 4. Deliberately not: 0.**

| Flow | Described | Steps | States | Validation rules | Edge cases |
|---|---|---|---|---|---|
| Main job, rule on the case | yes | 12 | 17 | 10 | 5 |
| R1, pick up and hand off a shift | yes | 5 | 5 | in the main table | 3 |
| R2, answer for it later | yes | 5 | 7 | in the main table | 7 |
| Flow 4, get in and arrive | yes | 5 | 5 | in the main table | 4 |

**R3, teach the agent, has no flow of its own and that is deliberate**, recorded in `flows.md`: it lives on `Reject` and `Route`, and the rest of the job leaves the analyst's screen entirely and lands on a detection engineer, who is not a user here. It is therefore not a fifth row and not a gap.

**Zero rows in this file carry the source value `grey, screen in the backlog`**, because stage 12 closed with an empty list of screens not built. Every step of every flow has a coloured screen behind it, and `wireframes/` is named in this project exactly once, in the route on `handoff.html`, as history.

**Recorded debt, carried from `flows.md` rather than restated as new:** the deferred screens of clusters 6 and 7 have no flows, so when they come off the backlog they will arrive with no empty, error or loading state defined, and whichever stage picks them up owes that work before drawing them.
