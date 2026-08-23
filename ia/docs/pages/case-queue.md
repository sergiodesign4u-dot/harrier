# 3.1 Case Queue

**This node is the reference page.** 0.1 fixed the template for the detail layer; this one extends it for pages with two sections a global element does not need: **section 3, the block composition**, which comes from `ia/docs/blocks.md` rather than from taste, and **section 9, emotional support**, which comes from the table in `ia/docs/sitemap.md` and is allowed to say "nothing lives here".

Every page node from here on takes this shape.

---

## 1. Identity

| | |
|---|---|
| **Number** | 3.1 |
| **Name** | Case Queue |
| **Type** | page |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | B1 and B2 on the concept map. Scope carried, not re-derived |
| **Page type for the bank** | **A, a list in a split pane** |
| **Contains** | 3.6 scope and filters, the canonical row. Renders inside 0.1, beside 3.5 or 4.1 |
| **Route** | `/queue`. Also `/queue/case/{caseId}` with a case selected |
| **Permission** | authenticated analyst. Only tenants inside the provider scope that the analyst's role covers |
| **Job** | MAIN. Also the landing surface, so it is where the two taps to `File` are counted from |

This is the main dashboard. Settled at stage 03a by the choice of primary persona and not reopened here.

---

## 2. Purpose

Forty tenants produce more signal than one person can read, so the queue is not a list of things that happened. **It is a list of decisions waiting to be made**, and each line has to be worth the height it takes.

Its guarantee is the one 0.1 exists to protect: the list survives the decision. The analyst rules on a case in the right pane and the queue is still there, still in the same place, still holding the position she was at.

Design principle 1 is written for this screen specifically. If a line does not tell the analyst what to do next, it does not earn its height.

---

## 3. Blocks, in priority order

Priority reasoned from the desk at 1440, which is the stance in `CLAUDE.md`, and then proved at 360 in section 8. Composition from `ia/docs/blocks.md`, type A. **No block below is here without a source or a job.**

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **Scope bar.** Removable chips: tenant or tenant group, severity, what Clerk concluded, `escalated`, `unrecorded`. Sort is a chip like the rest, not a separate control | PagerDuty and Defender filter chips; tenant groups from Defender multitenant | MAIN, 3.6 | MVP |
| **2** | **Scope readout.** What is in scope right now, counted: waiting cases, and how many tenants that covers. Not a metric card, not a percentage | Ours, from design principle 2 and the counts on Defender's tabs | MAIN | MVP |
| **3** | **The list.** Virtualised, keyboard traversable, one row per case, `role="grid"` with one tab stop. Section 4 specifies the row | The pattern itself, shipped by Defender and PagerDuty | MAIN | MVP |
| **4** | **Selection held, and the decided row does not vanish.** It stays in place, marked decided, and leaves the list only when the selection moves off it. See section 4b | Ours, from 0.1's guarantee | MAIN | MVP |
| **5** | **The pane.** Resizable, width remembered per analyst. At rest it holds 3.5, the fleet. With a selection it holds 4.1 | PagerDuty draggable and remembered panel, which closed 0.1's open question | MAIN, P2-MAIN | MVP |
| **6** | **Freshness, not a spinner.** The age of the list in words, carried by 0.4 in the shell rather than repeated here | 0.4, corrected upward from 0.1 | MAIN | MVP |
| **7** | Export the current view | Fingerprint and PagerDuty CSV export | R2, compliance | **LATER** |

**Deliberately absent, each already ruled on in the bank:** summary cards, saved views, a column builder, a density toggle, bulk actions with checkboxes, per column filter icons, a chat composer. Seven blocks that all four type A references ship.

**Bulk actions are the load bearing absence.** A verdict is a judgement on one case with its own evidence. Bulk accept is the fastest way to destroy the audit trail this product exists to produce, and it would make design principle 3 a lie.

---

## 4. The row, and it is the canonical component

Defined once here. Every other list in the product either uses this row or says why it does not.

| Slot | Carries | Why it earns its width |
|---|---|---|
| **Severity** | Glyph plus the word. **Three levels, and the scale is 0.8** | Redundant coding, so colour is not the only carrier. Taken from Defender |
| **Client** | Tenant name, always in the same position | Design principle 4. The same signal is a Tuesday at one client and an incident at another |
| **What it is** | The shape of the case in a short phrase | **Not** a generated sentence. Defender's incident name truncates in the row, which puts the least decidable content in the widest column |
| **What Clerk concluded** | The draft verdict, in a phrase, and **whether the action it proposes is above this tenant's latitude** | This is the thing being ruled on. It is why the row exists. The latitude mark is what makes rank 2 of the order legible instead of mysterious, and it is not a state chip |
| **What checking it will cost** | The size of the evidence behind the verdict, **counted in signals, 0.8**, and it is the same number the evidence block renders in the pane | Ours, and it has no reference. The analyst is choosing what to open next, and the honest input to that choice is how much reading it takes |
| **State** | The chips from **0.8**, at most two, highest first. `taken` among them, naming the colleague deciding it and since when | The visible states rule from `CLAUDE.md`. A case that left the analyst's hands must not look identical to one that did not |
| **Age** | How long it has been waiting. **Elapsed, bare unit, 0.8** | SLA belongs to the secondary persona, but the analyst still needs to know what is going cold |

**What the row must not carry:** a checkbox, a bare priority score, or a truncating generated name. The first three are named refusals from the bank, not omissions.

---

## 4b. What happens the instant a verdict is filed

**Found at the stage 08 audit by a reader trying to draw it.** Two nodes described the same moment and could not both be drawn: this node promised the selection is held *including after a verdict is filed*, and 8.4 said *the row leaves the queue, that is the feedback*. Neither said what the pane does.

**The decision, taken here because this node owns the list:**

| The moment | What happens |
|---|---|
| The verdict is filed | The row **stays exactly where it is** and changes to a decided state: what was decided, by whom, in place of what Clerk had concluded |
| The pane | Holds the same case and states the outcome. It does not advance on its own |
| The next traversal | Moving the selection off the row is what **removes it from the list**. Not the filing |
| Feedback | The row changing under her hand, which is the strongest version of what 8.4 already argued. **Still no toast**, and now for a better reason than before |

**Why not vanish on filing.** A row that disappears at the moment of the keystroke takes the analyst's place in the list with it, and 0.1 exists to stop exactly that. It also removes the only evidence that the right case was ruled on.

**Why not advance the pane automatically.** Deciding forty cases in a row with the pane jumping ahead makes the next case arrive before the last one is understood, and design principle 3 wants the override cheap, not the acceptance automatic.

---

## 4c. Default order, and where a case goes when she is done with it

**Both were missing, and the reader found them together because they are the same question.** The queue is a set with an order, and neither the set nor the order had been written down.

### The set: what the default view holds

**The queue is what is waiting on a decision, in her scope.** That is a narrowing like any other, which is why 3.6 puts `escalated` and `unrecorded` in the scope bar as chips rather than inventing a second surface for them.

| State | Stays in the default view | Where it is otherwise |
|---|---|---|
| Waiting on a decision | **Yes.** This is the set | n/a |
| `investigating` | **Yes.** Clerk is working, and she needs to know it is coming | n/a |
| `decided` | Until the selection moves off the row, then it leaves. Section 4b | 5.1, and the `decided` narrowing |
| `escalated` | **No.** It left her hands, so it is not waiting on her decision | The `escalated` chip, one click. 2.1 carries what she escalated this shift |
| `unrecorded` | **Yes, and it does not leave until the write lands** | Nowhere else. That is the point |

**`unrecorded` staying is the load bearing row in that table.** 4.10 says the verdict is held locally and the case stays open. The console is then the only place that decision exists, so removing the row would remove the last trace of it. It leaves when the write succeeds, and not before.

### The order

| Rank | Sorted by | Why it is above the next one |
|---|---|---|
| **1** | `unrecorded` | Her attention here repairs a record rather than making a decision. Nothing else in the queue is already broken |
| **2** | **Blocked on her.** Clerk proposes an action above this tenant's latitude, so nothing has happened and nothing will until she rules | These are the only rows where waiting has a cost outside the console. It comes straight from 0.6, and no reference orders a queue this way |
| **3** | Severity, high first | 0.8 |
| **4** | Age, oldest first | What is going cold |

Sort is a chip in the scope bar like any other narrowing, so this is a default rather than a constraint. **Rank 2 is a claim about the job and it is falsifiable**, in the same test as the fleet bet: if the analyst's first question is "what is worst" rather than "what is stuck on me", rank 2 and rank 3 swap and the row is unaffected.

### When narrowing returns nothing

3.6 section 4 owns the mechanism and already specifies it: the responsible chip is named **in the bar, where the question was asked**, all of them if more than one, and the bar says so when no single removal helps. This node states the requirement; it does not restate the answer.

---

## 5. State matrix

| Element | Default | Streaming in, 3.2 | Stale, 3.3 | Nothing waiting, 3.4 | Filtered to nothing | Out of scope |
|---|---|---|---|---|---|---|
| **Scope bar** | Chips, all removable | Same | Same | Same | Same, and the chip that emptied it is identifiable | Tenants outside scope are not offered |
| **Scope readout** | `18 waiting, across 12 tenants` | **Provisional and says so**, because the count is still arriving | Names the age of the count rather than a fresh number | `Nothing waiting` | `No case matches this scope` | Counts only what is in scope |
| **List** | Rows, `role="grid"`, one tab stop | Rows arrive as correlated | **Readable and marked stale.** Never blanked | Empty | Empty | Silently narrowed |
| **Pane** | 3.5 the fleet | 3.5 | Whatever it held, marked as of last sync | **3.5, and this is the test:** it must read as the fleet, not as an empty screen | 3.5 | 3.5, narrowed |
| **Filing a verdict** | Allowed | Allowed | **Allowed.** 0.4 settled this: a degraded connection does not block a decision | n/a | n/a | n/a |
| **Row focus** | Held | Held through arrival | Held | n/a | n/a | Held |
| **Taken by another analyst** | The row wears `taken`, with a name and since when | Same | **Marked as of last sync.** Filing is still allowed, and a real collision is recorded by 5.1 rather than prevented by a lock | n/a | n/a | Only inside her scope |

**3.4 is the node that proves the biggest decision of the base layer.** The fleet has no menu item because it is the resting state of this pane. If an analyst with an empty queue reads the screen as "there is nothing here" rather than "here is the fleet", that decision has failed, and it fails here first.

---

## 6. Keyboard

Inherits the grid model from 0.1 and the constraints from 0.5.

| Key | Does | Note |
|---|---|---|
| `Tab` | Moves to the list as **one stop**, not to each row | ARIA APG grid: only one focusable element in the grid is in the page tab sequence |
| `Up` and `Down` | Moves the selected row, **and the pane follows**. Focus stays in the list | The mouse equivalent is prev and next in the pane header, taken from Defender |
| `Enter` | **Moves focus into the pane**, which is what makes the verdict keys live | The case is already there; `Enter` is the step from reading to deciding. At 360 it navigates to 4.2 instead |
| `Escape` | Returns focus to the list without deselecting | A dialog consumes `Escape` first and does not propagate, from 0.5 |
| Single keys for verdicts | **Active only when the case has focus** | WCAG SC 2.1.4, Level A. Remap and disable ship in 0.5 |

Traversal never leaves the list to reach the next case. That is the whole reason the pattern was chosen.

---

## 7. Addressing and permission

Private. `noindex`, no schema, no crawlable surface. What this layer settles instead:

| | |
|---|---|
| **Route** | `/queue` |
| **With a case** | `/queue/case/{caseId}`. The list is part of the address, so the state is shareable and survives a reload |
| **Scope in the URL** | Filters are addressable, so a scope can be handed to another analyst. **Tenant is addressed by opaque id, never by client name**, because a URL travels through pager, chat and ticket |
| **Heading** | One `h1`, the queue and its scope. The list is a labelled region so assistive tech can name it without reading the shell |
| **Permission** | Cases from tenants inside the analyst's provider scope. **A scope that names a tenant outside it returns no results rather than an error**, which is the same rule 8.1 carries: not found and not yours must be indistinguishable, or the URL enumerates other providers' clients |
| **Deep link from a pager** | Lands here after 1.1 with the case selected, not on a bare queue. The block that makes this true belongs to 1.1 |

---

## 8. At 360

Read and escalate, not the full console. The stance is desktop first and this is the proof, not the origin.

- The list **becomes the whole page**. The pane is not rendered
- Selecting a case **navigates to 4.2**, the standalone route, rather than opening a pane that would cover the list
- The row compresses to two lines: severity, client and what it is on the first; what Clerk concluded and the state on the second. **What checking will cost is dropped**, because on a phone the analyst is not choosing what to read next, she was paged about one case
- The scope bar collapses to a single control carrying the count of active filters
- 0.4's freshness line stays, in the same place, because a stale queue on a phone at 03:00 is the worst version of that failure
- The fleet is **not** rendered at 360. It is a desk instrument, and saying so is better than shrinking it into something unreadable
- **The list foot keeps the count and the sort order, and drops the two key hints.** `↑ ↓ read, the pane follows` and `Enter decides, focus moves into the pane` are false at this width twice over: there is no keyboard, and there is no pane. What remains, `7 of 18 shown` and `order: unrecorded, waiting on you, severity, age`, is true at both widths and it is what makes the list she is looking at explainable

**The last line was added at stage 05, step 6, and it was found by opening the screen rather than by reading this file.** Section 8 named what the row, the pane and the scope bar do at 360 and said nothing about the foot, so stage 04 rendered it whole and two strings on the reference screen have been lying on every phone since. The class is the one 360 exists to catch: **a string that is true at the desk and false in the one scenario the narrow rendering was proved for.**

**One gap found with it and deliberately not fixed here.** This section says *the scope bar collapses to a single control carrying the count of active filters*. At 360 it still renders all three chips. That is a stage 04 implementation gap rather than a text defect, and collapsing three controls into one is layout work, not a class attribute. **It is recorded here so it is not lost when `wireframes/` freezes after stage 05**, and it is carried into `voice/docs/critique.md`.

---

## 9. Emotional support

The table in `ia/docs/sitemap.md` lists four emotional and social mechanisms. **None of them lives on this node.** They sit on C1 the case, A1 the brief, D1 the log and F1 the grants.

That is recorded rather than filled. Writing a mechanism here for completeness is exactly what the base layer's table was built to prevent.

One candidate is worth naming for the table's owner rather than claiming here: *what checking it will cost* may support **Emotional, P1, thorough rather than lucky**, because it lets the analyst choose the order of work on evidence instead of on impulse. It is not in the table, so it is a question for stage 03a's table, not an entry in this node.

---

## 10. Not this node

- **The shell, its zones and its fixed strips.** 0.1. The connection strip is Z2 and is not repeated here
- **The annunciator.** 0.3. It reads this screen's selection but it belongs to the shell
- **The fleet.** 3.5. It renders in the pane this node sits beside, and it has its own specification
- **The filters themselves.** 3.6. This node places the scope bar; 3.6 says what is in it
- **The case.** 4.1. Everything that happens after `Enter`
- **The log.** 5.1 is the same page type and reuses this row, which is what "canonical" means
- **How the slots are rendered.** 0.8. Severity scale, time grammar, the signal count and the chip set are defined once there and read here

---

## 11. Grounding

| Claim | Source |
|---|---|
| Split pane with keyboard traversal is shipped practice, not novelty | Microsoft Defender incident queue, opened this session. Recorded as a rule in `CLAUDE.md` |
| Panel width draggable and remembered | PagerDuty Operations Console docs: *"You can also change the width by dragging the side panel horizontally... PagerDuty will remember your settings for later visits."* This closed an open question 0.1 was carrying |
| Severity as glyph plus word | Defender incident queue row |
| Filter chips with sort as a chip | PagerDuty and Defender, both |
| Tenant groups as the unit of scope | Defender multitenant: *"Organize the tenants you manage into named groups"* |
| One tab stop for the whole list | ARIA APG Grid: *"Only one of the focusable elements contained by the grid is included in the page tab sequence"* |
| Single key shortcuts must be conditional | WCAG SC 2.1.4 Character Key Shortcuts, Level A |
| A bare score in a row is not decidable | Defender's `100`, banked as DIFFERENT in type A |
| Not found and not yours must be indistinguishable | Ours, from tenant data isolation in `CLAUDE.md`. Also carried by 8.1 |

---

## 12. Open questions

**Every question below carries a verdict at the end of this file.** 3 settled, 1 drawn at stage 04, 0 still open, decided at the close of stage 03b so that stage 04 draws against answers rather than against a list.

1. **Does the row carry latitude, or only the annunciator?** A per row marker for what Clerk was permitted to do at that tenant would put the differentiator on forty lines at once, which is either the strongest version of the fleet claim or the thing that finally overloads the row. Not settled here. **Stage 04 draws both and one loses.**
2. **Is this a grid or a list?** 0.1 assumed the ARIA grid model, which is right if the row is columnar. If the row turns out to be two lines of mixed content rather than aligned columns, `grid` is the wrong role and the keyboard contract changes with it. Stage 04 settles it by drawing the row.
3. **How many lines is a row?** Density is design principle 5 and there is no density toggle to hide behind, so this is one decision made once. `[?]` until 04.
4. **What is the unit of "what checking will cost"?** Signals, sources, minutes, or something else. No invented number goes in here; the block states the information requirement and stage 04 picks the unit against a drawn row.

---

## Settled before stage 04

Taken at the close of stage 03b. A question is settled here only when the answer follows from something the product already decided; where it does not, it says who can answer and what it blocks.

| # | Question | Verdict |
|---|---|---|
| 1 | Does the row carry latitude, or only the annunciator? | **Settled**. The row carries **whether the action Clerk proposes is above this tenant's latitude**, as a mark on the conclusion. Not the latitude value, which lives in 0.3 and 3.5. It is what makes rank 2 of the default order legible instead of mysterious, and it costs a phrase rather than a column. |
| 2 | Is this a grid or a list? | **Settled**. **A grid**, `role="grid"`, one tab stop. The row is columnar and she reads across it, so the cells have to be individually addressable for assistive tech. A list would turn the state chip and the cost into run-on text. |
| 3 | How many lines is a row? | **Stage 04 draws it**. Stage 04, and it is one decision made once because there is no density toggle to hide behind. |
| 4 | What is the unit of what checking will cost? | **Settled**. Closed by **0.8**: `signals`, and the count is bound to the number of lines the evidence block renders in the pane. |
