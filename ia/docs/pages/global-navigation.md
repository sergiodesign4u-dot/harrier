# 0.2 Global navigation

---

## 1. Identity

| | |
|---|---|
| **Number** | 0.2 |
| **Name** | Global navigation |
| **Type** | section |
| **Group** | `global` |
| **Scope** | MVP |
| **Parent** | none. Discovered at the detail layer |
| **Lives in** | 0.1 zone Z1 on the desktop, a tab bar at 360 |
| **Route** | none of its own |
| **Permission** | authenticated analyst. Items are not role gated in the MVP, because only one role has a product |

---

## 2. Purpose

Global navigation here is **the shortest path for the primary persona to the main job**, not a list of what to put in a menu. That was settled at the base layer and it is what makes this node small.

**The fleet gets no item, deliberately.** It is the resting state of the detail pane, so it costs zero taps: it is already on screen when nothing is selected. A menu item would turn it into a place you have to go, and the whole point is that looking at it should not be a trip. The price was named at the base layer and is inherited here: returning to the fleet is a deselection, which is an interaction rather than a navigation, and therefore a discoverability risk that 3.4 has to carry.

---

## 3. The items, and a contradiction this node found

| Item | Route | Leads to | Job | Scope |
|---|---|---|---|---|
| **Queue** | `/queue` | 3.1 in Z4, 3.5 in Z5 | MAIN. The activation node | MVP |
| **Shift** | `/shift` | 2.1 | R1 | MVP |
| **Log** | `/log` | 5.1 | R2, and the compliance requirement | MVP |
| **Clients** | `/clients` | 7.1 | P2-MAIN | **LATER** |

**`CLAUDE.md` says the global navigation has four items. In the MVP it has three.**

Clients leads to 7.1, and the whole of cluster 7 is LATER. An item that leads nowhere is a promise with no product behind it, and design principle 4 is already satisfied without it: tenant context is a glance away because the fleet sits in the pane at zero taps, not because there is a menu item for clients.

**Resolution proposed, not taken here.** The MVP navigation carries three items, and Clients appears when cluster 7 ships. This contradicts one line of the project context, so the correction belongs to the stage closing ritual rather than to this node. It is recorded here because the detail layer is where it became visible.

**Three is a floor rather than a comfortable number**, and the guidance says so in as many words. Material Design 3, navigation bar guidelines, opened this session: "Navigation bars provide access to three to five destinations" and "Don't use a navigation bar for fewer than three destinations." We are exactly at the minimum. When Clients ships we are at four, still inside the range, so the deferral does not create a problem it would later have to undo.

---

## 4. Anatomy

| Element | Behaviour | Goes to |
|---|---|---|
| Product mark | Not a link to a marketing site, because there is no public product surface behind the login. Returns to `/queue` | 3.1 |
| Queue, Shift, Log | One is always active. The active one carries `aria-current="page"` | 3.1, 2.1, 5.1 |
| Clients | Absent in the MVP | 7.1, later |
| Analyst identity and shift | Not a menu. A statement of what the audit log will record against | 2.1 |
| Keyboard map trigger | Opens 0.5 | 0.5 |

**Icons carry labels, always.** Material Design 3, same page: "Each destination is represented by an icon and label text. One navigation destination is always active." An icon only navigation in a console used six hours a day saves pixels the product does not need and costs recognition it does.

---

## 5. State matrix

| Element | Desktop, default | Desktop, this section is current | At 360 | Connection stale | Permission limited |
|---|---|---|---|---|---|
| Product mark | Present | Present | Present, compressed | Present | Present |
| Queue | Link | Active, `aria-current="page"` | Tab, active by default | Unchanged. Navigation is not what broke | Unchanged |
| Shift | Link | Active | Tab | Unchanged | Unchanged |
| Log | Link | Active | Tab | Unchanged | Unchanged |
| Clients | **Not rendered in the MVP** | n/a | n/a | n/a | n/a |
| Identity and shift | Full | Full | Behind the menu control | Full | Full |
| Keyboard map trigger | Present | Present | **Not rendered.** No keyboard at 360 | Present | Present |

**Navigation does not react to a stale connection.** The strip in Z2 does, and the list in Z4 does. Making the menu react as well would spread one fault across three places and teach the analyst to read three things to learn one.

---

## 6. Keyboard and semantics

| Requirement | Detail | Source |
|---|---|---|
| Landmark | `<nav aria-label="Global">`, because a second navigation exists at 360 and unlabelled landmarks are indistinguishable | Convention `[?]` |
| Active item | `aria-current="page"`. MDN: "Represents the current page within a set of pages such as the link to the current document in a breadcrumb." Only one element in the set carries it | MDN, opened this session |
| Not `aria-current="true"` | The specific token is used because a more specific one applies | MDN, opened this session |
| Tab order | The navigation comes before the list grid, so Tab from the navigation lands on the list as a single stop | 0.1, APG grid |
| Target size | At least 24 by 24 CSS pixels, Level AA | Inherited from 0.1, SC 2.5.8 |

---

## 7. Addressing and permission

Navigation has no route of its own. What it does own is the **entry route of each section**, listed in section 3, and one rule: the product mark returns to `/queue` rather than to a home page, because there is no home page. The landing surface is the queue, which was settled by the choice of primary persona.

**Indexing.** Inherited from 0.1: every destination is `noindex`. Navigation is not an internal linking surface here, which is the one job it does carry on a public product and does not carry on this one.

**Permission.** Items are not role gated in the MVP. The secondary persona has no product in the MVP, so gating would be a mechanism guarding nothing, and an empty allow list is worse than none: it reads as a rule that has been thought about.

---

## 8. At 360

A tab bar with three destinations, icon plus label, one always active. Positioned at the bottom, which is where Material puts it: "The nav bar is positioned at the bottom of windows for convenient access."

**The keyboard map trigger is dropped rather than moved.** There is no keyboard.

**The identity and shift line moves behind the menu control.** It is still recorded against every action; it is just not what the analyst needs in view while reading a case at 03:00.

---

## 9. Not this node

| Not here | Lives at |
|---|---|
| The autonomy annunciator. It sits beside the navigation and is not part of it | 0.3 |
| The fleet, which has no item at all and never gets one | 3.5 |
| Filters and scope inside the queue, which are not navigation | 3.6 |
| The connection strip | 0.4 |

---

## 10. Grounding and open questions

**Every question below carries a verdict at the end of this file.** 3 settled, 0 drawn at stage 04, 0 still open, decided at the close of stage 03b so that stage 04 draws against answers rather than against a list.

| Claim | Source | Standing |
|---|---|---|
| Three to five destinations in a bottom navigation bar | Material Design 3, navigation bar guidelines, opened this session | Fact |
| Icon plus label, one destination always active | same page, verbatim | Fact |
| `aria-current="page"` marks the current item, one per set | MDN, opened this session | Fact |
| The fleet costs zero taps because it is the resting state | base layer decision | Decision |
| `<nav aria-label>` on multiple landmarks | convention | `[?]` |

1. **Does Queue carry a count?** A badge saying how many cases wait is either the most useful number in the product or a permanent alarm that stops being read. Nothing in the research answers it, and it is a stage 04 decision.
2. **Does Shift stay visible mid shift?** The brief is read once and abandoned. An item that is useful for four minutes of a ten hour shift may be occupying one of three slots that the guidance says are scarce.
3. **What happens to the three item bar when Clients arrives?** Four items still fits the range. Recorded so that the change is a planned step rather than a surprise.

---

## Settled before stage 04

Taken at the close of stage 03b. A question is settled here only when the answer follows from something the product already decided; where it does not, it says who can answer and what it blocks.

| # | Question | Verdict |
|---|---|---|
| 1 | Does Queue carry a count? | **Settled**. **No.** A permanent badge over a queue that is never empty is an alarm that stops being read. The count already exists where it is decidable, in 3.1's scope readout, narrowed to what she is actually looking at. |
| 2 | Does Shift stay visible mid shift? | **Settled**. **Yes.** R1 says the brief is written across the shift rather than read once at the start, so hiding the item would make the outgoing half of the job invisible for nine hours of ten. |
| 3 | What happens to the three item bar when Clients arrives? | **Settled**. A planned step rather than a surprise: four items still fits, and cluster 7 is when it happens. |
