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
| **3** | **The list.** Virtualised, keyboard traversable, one row per case. Section 4 specifies the row | The pattern itself, shipped by Defender and PagerDuty | MAIN | MVP |
| **4** | **Selection held.** The selected row stays visible and stays selected through the whole decision, including after a verdict is filed | Ours, from 0.1's guarantee | MAIN | MVP |
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
| **Severity** | Glyph plus the word | Redundant coding, so colour is not the only carrier. Taken from Defender |
| **Client** | Tenant name, always in the same position | Design principle 4. The same signal is a Tuesday at one client and an incident at another |
| **What it is** | The shape of the case in a short phrase | **Not** a generated sentence. Defender's incident name truncates in the row, which puts the least decidable content in the widest column |
| **What Clerk concluded** | The draft verdict, in a phrase | This is the thing being ruled on. It is why the row exists |
| **What checking it will cost** | The size of the evidence behind the verdict, as a count | Ours, and it has no reference. The analyst is choosing what to open next, and the honest input to that choice is how much reading it takes |
| **State** | `escalated`, `unrecorded`, and whether Clerk already acted | The visible states rule from `CLAUDE.md`. A case that left the analyst's hands must not look identical to one that did not |
| **Age** | How long it has been waiting | SLA belongs to the secondary persona, but the analyst still needs to know what is going cold |

**What the row must not carry:** a checkbox, a bare priority score, or a truncating generated name. The first three are named refusals from the bank, not omissions.

---

## 5. State matrix

| Element | Default | Streaming in, 3.2 | Stale, 3.3 | Nothing waiting, 3.4 | Filtered to nothing | Out of scope |
|---|---|---|---|---|---|---|
| **Scope bar** | Chips, all removable | Same | Same | Same | Same, and the chip that emptied it is identifiable | Tenants outside scope are not offered |
| **Scope readout** | `18 waiting, across 12 tenants` | **Provisional and says so**, because the count is still arriving | Names the age of the count rather than a fresh number | `Nothing waiting` | `No case matches this scope` | Counts only what is in scope |
| **List** | Rows | Rows arrive as correlated | **Readable and marked stale.** Never blanked | Empty | Empty | Silently narrowed |
| **Pane** | 3.5 the fleet | 3.5 | Whatever it held, marked as of last sync | **3.5, and this is the test:** it must read as the fleet, not as an empty screen | 3.5 | 3.5, narrowed |
| **Filing a verdict** | Allowed | Allowed | **Allowed.** 0.4 settled this: a degraded connection does not block a decision | n/a | n/a | n/a |
| **Row focus** | Held | Held through arrival | Held | n/a | n/a | Held |

**3.4 is the node that proves the biggest decision of the base layer.** The fleet has no menu item because it is the resting state of this pane. If an analyst with an empty queue reads the screen as "there is nothing here" rather than "here is the fleet", that decision has failed, and it fails here first.

---

## 6. Keyboard

Inherits the grid model from 0.1 and the constraints from 0.5.

| Key | Does | Note |
|---|---|---|
| `Tab` | Moves to the list as **one stop**, not to each row | ARIA APG grid: only one focusable element in the grid is in the page tab sequence |
| `Up` and `Down` | Moves the selected row, and the pane follows | The mouse equivalent is prev and next in the pane header, taken from Defender |
| `Enter` | Opens the case into the pane and moves focus there | At 360 this navigates to 4.2 instead |
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

1. **Does the row carry latitude, or only the annunciator?** A per row marker for what Clerk was permitted to do at that tenant would put the differentiator on forty lines at once, which is either the strongest version of the fleet claim or the thing that finally overloads the row. Not settled here. **Stage 04 draws both and one loses.**
2. **Is this a grid or a list?** 0.1 assumed the ARIA grid model, which is right if the row is columnar. If the row turns out to be two lines of mixed content rather than aligned columns, `grid` is the wrong role and the keyboard contract changes with it. Stage 04 settles it by drawing the row.
3. **How many lines is a row?** Density is design principle 5 and there is no density toggle to hide behind, so this is one decision made once. `[?]` until 04.
4. **What is the unit of "what checking will cost"?** Signals, sources, minutes, or something else. No invented number goes in here; the block states the information requirement and stage 04 picks the unit against a drawn row.
