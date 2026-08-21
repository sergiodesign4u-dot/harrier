# 0.3 Tenant autonomy annunciator

**This is the node the differentiator lives or dies on.** After stage 02 nothing else distinguishes the product: per-tenant earned autonomy is sold by others, and what is ours is that every client's current latitude is legible at a glance in the operator console rather than on a configuration page. That claim is either true in this element or it is not true anywhere.

---

## 1. Identity

| | |
|---|---|
| **Number** | 0.3 |
| **Name** | Tenant autonomy annunciator |
| **Type** | section |
| **Group** | `global` |
| **Scope** | MVP, **readable and not settable** |
| **Parent** | none. Discovered at the detail layer |
| **Lives in** | 0.1 zone Z3, fixed position, present on every authenticated screen |
| **Reads from** | the selection in Z5. With nothing selected, 3.5 the fleet |
| **Written by** | 7.2, which is LATER. In the MVP nothing in the product changes it |

---

## 2. Purpose

Mode confusion is not a knowledge failure, it is a display failure. Operators do not forget what the automation can do, they lose track of which mode is live because the state was inferable rather than readable. A fixed position turns a memory task into a glance.

The mechanism comes from the Flight Mode Annunciator, recorded in `benchmark.md` at stage 01 from SKYbrary. Three things are taken from it and one is left behind.

**Taken.**

1. **It lives permanently in the same place**, across the top of the display, never in a panel you open.
2. **It carries two states at once, armed and active.** SKYbrary: "The aircraft tells the pilots what it's doing, and what it's about to do, by the symbols on the FMA."
3. **Override is itself an annunciated mode.** When a pilot pushes the thrust levers manually the FMA displays `OVRD`. Human control is not the absence of a state, it is a state with a name, shown in the same place in the same language.

**Left behind.** Colour. Stage 06 decides colour, and an annunciator that only works in colour fails for the analyst who cannot separate green from blue. Shape, weight and position carry the state here; colour reinforces it later.

---

## 3. What it shows

| Slot | Reads | Maps to the FMA as |
|---|---|---|
| **Tenant** | The client this reading is about | context, not a state |
| **Permitted** | What Clerk may do here, without asking | **armed** |
| **Doing now** | What Clerk is actually doing on this case right now | **active** |
| **OVRD** | An analyst override is in force on this tenant or this case | **override, a named state** |
| **Record** | How the permission was earned, count first | the evidence under the mode |

**Permitted and doing now are separate slots and must never be collapsed.** A tenant permitted to act autonomously on containment, where Clerk is currently only proposing, is a different situation from one where it is executing. Collapsing them is precisely the display failure the FMA exists to prevent.

---

## 4. The compression problem, and it is the real design problem here

**Latitude is not one value per tenant.** Simbian, opened again this session to keep the claim current: "Progression from Read-only to Autopilot is not linear and not global. A mature deployment might run Autopilot on brute-force account containment, Guided on DLP violations, Dry-run on new EDR alert types, and Read-only on identity-provider actions that touch privileged accounts, all at once."

So a tenant carries **a latitude per action class**, not a latitude. An annunciator that says "Meridian Freight: Guided" is a comforting lie.

Two readings are needed, and they are different objects.

**Reading A, a case is selected.** The annunciator shows the latitude **for this case's action class**, because that is the only one that bears on this decision. Nothing else is shown. This is the reading that does the work.

**Reading B, nothing is selected.** The annunciator summarises the tenant, and a summary needs a rule. **The rule is: show the highest latitude in force, with the number of action classes standing at it.**

Highest rather than lowest, and the reason is a safety reason rather than an aesthetic one. The operator's question at rest is "what could Clerk have done here without me". The lowest latitude answers a question nobody asked and understates exposure. A summary that understates exposure on a trust display is worse than no summary.

**This rule is a decision, not a finding.** It is recorded so that it can be argued with, and it is the first thing to test if the fleet turns out not to read at a glance.

---

## 5. The number, and why it is not a percentage

Design principle 2 is explicit: the number names its claim, its scope and its window, and comes with an absolute count. `benchmark.md` states the reason: "90% reads identically whether it stands on 9 cases or 900, and the analyst needs to know which."

**So the annunciator never shows a bare percentage.** It shows a count first.

| Not this | This |
|---|---|
| `94% accuracy` | `34 of 36 upheld, 30 days` |
| `Accuracy trending up` | `up from 28 of 33, previous 30 days` |
| `High confidence` | nothing. Confidence in a case belongs to 4.1, not here |

**Count first is also shorter than a qualified percentage**, which is the part that makes it survive in a fixed-height strip. The honest form and the compact form turn out to be the same form, which is not usually how this goes and is worth saying out loud.

**A small record is shown as small rather than hidden.** `3 of 3 upheld, 30 days` is a weak record and must read as one. Suppressing it until the sample is large would leave the newest tenants, which are exactly the risky ones, looking identical to the settled ones.

---

## 6. State matrix

| Slot | Case selected | Nothing selected, fleet | Override in force | New tenant, no record | Connection stale | Permission denied |
|---|---|---|---|---|---|---|
| **Tenant** | This case's client | Fleet count | Unchanged | Unchanged | Unchanged, marked as of last sync | **Hidden** |
| **Permitted** | Latitude for this case's action class | Highest in force, with the count of classes at it | Unchanged. The permission has not changed | `Read-only`, which is the floor for a tenant with no record | Unchanged, marked | Hidden |
| **Doing now** | What Clerk is doing on this case | Not shown. There is no single answer across a fleet | `OVRD`, and it replaces this slot rather than sitting beside it | Nothing | Last known, marked | Hidden |
| **OVRD** | Present when in force | Count of tenants under override | The state itself | Absent | Marked as of last sync | Hidden |
| **Record** | `n of m upheld, 30 days` for this tenant | Distribution across the fleet | Unchanged | `no record yet`, in words | Unchanged, marked | Hidden |

**The cell that matters most is Permitted under "new tenant, no record".** A tenant with no record shows `Read-only` and the words `no record yet`, never a blank and never a hopeful default. Latitude that has not been earned is the exact thing this product refuses to assert.

**Permission denied hides the whole element rather than emptying it.** The latitude of a tenant that is not yours is not yours to read, and an emptied annunciator would still tell you the tenant exists.

---

## 7. At 360

One line under the top bar, and it is **the only zone protected from collapse** at 360. Everything else may compress.

At that width the line carries three things and drops the rest: tenant, permitted for this case's action class, and `OVRD` when in force. The record moves into the case body.

The reason is the mobile scenario itself: reading a case at 03:00 without knowing how much rope Clerk has on that client is the exact failure this product exists to prevent.

---

## 8. Addressing and permission

No route. The annunciator is never a destination, which is the point: the fleet has no navigation item and this element is why that costs nothing.

**Read only in the MVP.** Changing a grant is 7.2 and it is LATER. The gap between watching, which should be constant, and moving, which should be rare and considered, is deliberate and is stated on the map.

**Scope.** Only tenants inside the analyst's provider scope render. A route naming a tenant outside it renders 8.3 rather than a hidden annunciator with a visible page.

**Not in the audit log.** Reading the annunciator writes nothing. Changing a grant writes to 5.1 with the evidence that justified it, and that is 7.3.

---

## 9. Not this node

| Not here | Lives at |
|---|---|
| The fleet reading itself, the per-tenant rows | 3.5 |
| Changing a grant, and the evidence under the change | 7.2, 7.3 |
| Clerk's confidence in this case | 4.1, the provenance strip |
| The tenant's base rate for a signal | 4.1, 4.8 |
| Whether the connection is live | 0.4 |

**The distinction between this node and 3.5 is the one to keep clean.** This is the **reading**, one line, always present. 3.5 is the **view**, the whole fleet, in the pane at rest. If they drift into two versions of the same thing, the one that survives is this one, because it is present on every screen.

---

## 10. Grounding and open questions

| Claim | Source | Standing |
|---|---|---|
| Armed and active shown at once; override is an annunciated mode; permanent fixed position | SKYbrary via `benchmark.md`, stage 01 | Fact |
| Latitude is per action class, progression not linear and not global | Simbian, opened again this session, quoted verbatim | Fact |
| Per-tenant autonomy configuration exists for MSSP and MDR | same page | Fact, and it is why ours must be a view rather than configuration |
| A bare percentage cannot be checked and hides sample size | `benchmark.md`, principle 2 | Decision, argued |
| Highest latitude is the right fleet summary | this node | **Decision, first to test if the fleet fails to read** |
| `Read-only`, `Dry-run`, `Guided`, `Autopilot` as the level names | Simbian's published vocabulary | **Placeholder.** These are a competitor's exact words, used here because they are legible in the market and because naming is stage 05's job, not this layer's. Recorded so it is a decision rather than an accident |

1. **Does the annunciator change when the analyst changes selection, or only when the tenant changes?** A line that redraws on every arrow key is noise; one that lags is wrong. This is a stage 04 motion decision with a real failure mode on both sides.
2. **What does "doing now" mean between cases?** Clerk works continuously across 40 tenants. The active slot is well defined for a selected case and ambiguous at rest, which is why reading B drops it. Whether that is a gap or the right answer is untested.
3. **Is 30 days the right window?** Chosen for legibility, not measured. It interacts with the evidence retention window that is still unchosen in `research.md` section 10.
