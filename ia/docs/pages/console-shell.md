# 0.1 Console shell

**This node is the template.** Ten sections below are the shape every other node of the detail layer takes. Section 6 replaces the SEO block that a public product would carry here: Harrier has one public URL and it is the sign in page, so what this layer settles ahead is addressing and permission instead.

---

## 1. Identity

| | |
|---|---|
| **Number** | 0.1 |
| **Name** | Console shell |
| **Type** | page, in the sense of a frame rather than a destination |
| **Group** | `global` |
| **Scope** | MVP |
| **Parent** | none. Discovered at the detail layer, scope set there |
| **Contains** | 0.2 global navigation, 0.3 tenant autonomy annunciator, 0.4 live connection status, 0.5 keyboard map, 8.4 toast stack |
| **Route** | not a route of its own. Wraps `/queue`, `/shift`, `/log`, `/clients` |
| **Permission** | authenticated analyst. Every tenant shown is one the analyst's provider scope covers |

---

## 2. Purpose

The shell is the split. `ux-patterns.md` chose split-pane review at stage 01 for three reasons, and the second of them is structural: cheap override needs the list to survive the decision. If the case takes the whole window, rejecting Clerk costs a navigation back, and design principle 3 says override is one key.

So the shell exists to make one guarantee: **the list is never lost.** Everything else it holds, navigation, the annunciator, the connection strip, is there because it must be true on every screen rather than on one.

It serves the main job structurally rather than directly. Nobody opens the shell.

---

## 3. Anatomy

| Zone | Holds | Behaviour | Goes to |
|---|---|---|---|
| **Z1 Top bar** | Product mark, global navigation, analyst identity with the shift they are on, trigger for the keyboard map | Fixed. Never scrolls away, because the shift identity is what the log records against | 0.2, 0.5, 2.1 |
| **Z2 Connection strip** | Connected, reconnecting, or stale with the age of the data in words | Fixed under Z1. Silent when connected, and it is the only zone allowed to change colour before stage 06 decides colour | 0.4, 3.3 |
| **Z3 Autonomy annunciator** | Two states at once: what Clerk is **permitted** to do on this case's action class, and what it is **doing now**. Plus the record, count first. `OVRD` when an override is in force | Fixed position, always the same place. Reads from the selection in the detail pane; when nothing is selected it reads the fleet | 0.3, 3.5, 7.2 when that exists |
| **Z4 List pane** | Whatever list the current section owns | Left, keyboard traversable, survives every decision made in Z5 | 3.1 on `/queue`, 5.1 on `/log` |
| **Z5 Detail pane** | The fleet at rest, a case when one is selected | Right. Never a modal, because principle 5 forbids an overlay over the evidence being decided on | 3.5, 4.1, 5.4 |
| **Z6 Toast region** | Filed, escalated, connection recovered | Bottom left, above the list rather than over the detail pane | 8.4 |

**Z5 is never a modal, and that is a rule rather than a preference.** Design principle 5: no overlay hides the evidence the analyst is deciding on. The two dialogs that do overlay, 4.4 reject and 4.6 escalate, are small, anchored, and never cover the evidence block. That constraint is inherited by every node in cluster 4.

---

## 4. State matrix

Rows are zones, columns are the states the shell has to survive. Cells say what is shown.

| Zone | Nothing selected | Case selected | Connection stale | Permission denied | At 360 |
|---|---|---|---|---|---|
| **Z1 Top bar** | Full | Full | Full | Full | Compressed: mark, one menu control, identity |
| **Z2 Connection strip** | Silent | Silent | **Visible, names the age of the data in words rather than a timestamp** | Silent | Visible in the same place |
| **Z3 Annunciator** | Fleet reading: the highest latitude in force, with how many action classes stand at it | This tenant: permitted for this case's action class, doing now, record | Unchanged, and marked as of the last good sync | Hidden. Latitude of a tenant that is not yours is not yours to read | One line under Z1, never dropped |
| **Z4 List pane** | The list, nothing highlighted | The list, selected row held visible | The list, readable, marked stale | The list minus what is out of scope | Becomes the whole page |
| **Z5 Detail pane** | **3.5 the fleet.** Not an empty state | 4.1 the case | Whatever it held, marked as of last sync | 8.3 | Not rendered. Selection navigates to 4.2 |
| **Z6 Toasts** | Available | Available | One persistent notice rather than repeated toasts | Available | Bottom, full width, above the safe area |

**The cell that carries the differentiator is Z5 under "nothing selected".** If it renders as an empty state, the decision to keep the fleet out of the menu has failed, and the base layer said so before this node existed.

**The cell that is easy to get wrong is Z4 under "connection stale".** A frozen list that looks live is worse than no list. The list stays readable and says how old it is; it is not blanked and not blurred.

---

## 5. Keyboard

Design principle 5 puts keyboard before mouse, so this is specification rather than enhancement.

The list pane is a **grid** in the ARIA sense, not a list of links. The W3C ARIA Authoring Practices define the pattern: "A grid is a composite widget so it: Always contains multiple focusable elements. Only one of the focusable elements contained by the grid is included in the page tab sequence. Requires the author to provide code that manages focus movement inside it."

| Key | Does | Source |
|---|---|---|
| Tab | Moves between zones, **one stop for the whole list** | APG grid, single tab stop |
| Up, Down | Move the selection between rows | APG grid, roving focus |
| Home, End | First and last row in view | APG: "Home: moves focus to the first cell in the row that contains focus" adapted to whole-row selection |
| Control plus Home, End | First and last row of the list | APG: "Control + Home: moves focus to the first cell in the first row" |
| Enter | Opens the selected row into Z5 | Product |
| Escape | Deselects, returns Z5 to the fleet | Product. This is the way back to 3.5, and it is the discoverability risk the base layer named |
| ? | Opens 0.5 keyboard map | Product convention `[?]`, no source opened |

**Verdict keys are not defined here.** Accept, amend and reject belong to 4.1, because a key that files a verdict must not exist on a screen that has no verdict to file.

**Pointer targets.** WCAG 2.2 SC 2.5.8 Target Size (Minimum), Level AA: "The size of the target for pointer inputs is at least 24 by 24 CSS pixels". Every control in the shell meets it. The stronger 44 by 44 figure often quoted is a different criterion which was not opened in this session, so it stands as `[?]` rather than as a requirement.

---

## 6. Addressing and permission

This is the block that a public product would spend on SEO. Harrier is behind a login, so the same slot carries the two things that do bind: where a thing lives, and who may open it.

**Routes wrapped by the shell**

| Route | Renders | Notes |
|---|---|---|
| `/queue` | Z4 = 3.1, Z5 = 3.5 | The landing route. The fleet is the resting state, at zero taps |
| `/queue/case/{caseId}` | Z4 = 3.1, Z5 = 4.1 | The case is addressable **without leaving the split**. This is what makes a permalink and a working console the same product |
| `/case/{caseId}` | 4.2, no shell split | Permalink out of a pager or a chat, and the only rendering at 360 |
| `/shift` | 2.1 | No split. The brief sits before the review loop, not inside it |
| `/log` | Z4 = 5.1, Z5 = 5.4 | |
| `/log/{entryId}?as-of={timestamp}` | 5.4 | The evidence snapshot as it stood. The query parameter is the point of the route |
| `/clients` | 7.1, LATER | |

**Indexing.** Every route above is `noindex`, no schema, no sitemap entry. The only crawlable URL in the product is 1.1 sign in. This is stated once here and inherited by every node rather than repeated.

**Heading hierarchy.** The shell carries no `h1`. The `h1` belongs to whatever fills Z4 plus Z5, so a case open in the pane makes the case the heading of the page. This is identity for assistive technology rather than for search.

**Permission.** The analyst sees the tenants their provider scope covers, and nothing else. A route naming a tenant outside that scope renders 8.3 rather than an empty result, because tenant data isolation is a stated requirement in `CLAUDE.md` and an empty result is indistinguishable from a quiet client.

**What the log records.** Every render of 4.1 and every verdict action carries the analyst identity and the shift from Z1. That is why Z1 never scrolls away: it is not decoration, it is the subject of the audit record.

---

## 7. At 360

The split collapses and the pattern stops being itself, which `ux-patterns.md` said at stage 01 and the base layer accepted rather than argued with.

**What happens.** Z4 becomes the page. Selecting a row navigates to 4.2 rather than filling a pane. Escape has nothing to return to, so the back control does that work.

**What survives, and it is one thing.** Z3, the annunciator, moves to a single line under the top bar and is never dropped. Every other zone may compress. The mobile scenario is read and escalate at 03:00, and reading a case without knowing how much rope Clerk has on that client is the exact failure this product exists to prevent.

**What is not built.** Filing a verdict at 360. The scenario is read and escalate; 4.6 is reachable and 4.4, 4.5 are not. That is a scope decision rather than a limitation to fix later.

---

## 8. Not this node

| Not here | Lives at |
|---|---|
| The items of the navigation and what they lead to | 0.2 |
| What the annunciator actually shows and how trend is drawn | 0.3 |
| Wording of the stale state | 0.4, 3.3 |
| The queue row, which is the canonical component of the product | 3.1 |
| The fleet reading | 3.5 |
| Anything a verdict does | cluster 4 |

---

## 9. Grounding

| Claim | Source | Standing |
|---|---|---|
| Grid keyboard model, single tab stop, roving focus | W3C ARIA Authoring Practices, Grid pattern, opened this session | Fact |
| Minimum pointer target 24 by 24 CSS px, Level AA | W3C, Understanding SC 2.5.8 Target Size (Minimum), opened this session | Fact |
| 44 by 44 as a requirement | not opened | `[?]` |
| Split pane with keyboard traversal of the queue is shipped practice | `ux-patterns.md`, stage 01, Microsoft Defender | Fact, and explicitly not novelty |
| The pane at rest should read as the fleet | `sitemap.md`, base layer decision | Decision |
| `?` opens a shortcut map | convention | `[?]` |

---

## 10. Open questions

1. **Is the split resizable, and is that position remembered per analyst?** Two monitors at 1440 to 1920 make this likely to matter, and nothing in the research answers it. Carried to stage 04.
2. **What does Z5 hold on `/shift`?** The brief does not hold the split. Either the shell has a no-split mode, which weakens the guarantee in section 2, or 2.1 sits outside the shell entirely. Named here rather than settled, because the answer is a drawing decision.
3. **Does a second analyst picking up a case change the row for the first?** The console is multi-analyst by premise, 40 or more tenants per person, but no flow covers a collision. If yes, it is a state that does not exist on the map yet.
