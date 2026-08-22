# Stage 04: screens of the main flow, and their states

**Reference screen: `3.1 Case Queue`. First flow to assemble: the main job, Queue to Case File to verdict to log.** Both chosen at step 1 and argued in section 4. Stages 05 and 06 read the reference from this line and do not re-derive it.

---

## 1. What this file is

Rows are screens of the **main flow only**. The rest of the product is estimated and rolled out at step 8, and the deferred list lives in section 6 so that nothing is quietly dropped.

A `✓` means the state is real and gets **its own page**, because the prototype has to navigate between states rather than describe them. A `-` means the scenario does not produce that state here, and **every `-` carries a reason**, because without one it cannot be told apart from a state somebody forgot. Stage 05 step 4 and stage 07 step 2 read this matrix as the complete list of states in the product.

**Two things this stage inherits and does not re-decide.** Scope labels come from `ia/docs/sitemap.md`; a label that looks wrong is fixed upward in the IA rather than here. State sets come from the state matrix of each node's own specification, and a state that is not in one is not drawn.

---

## 2. The screens

| # | Node | Screen | Job | Place in the flow | Scope |
|---|---|---|---|---|---|
| 1 | **3.1** | Case Queue | **MAIN**, and it is the landing | `Queue`, the spine of the diagram | MVP |
| 2 | **4.1** | Case File in the detail pane | **MAIN** | `Case`, everything after `Enter` | MVP |
| 3 | **4.4** | Reject with a reason | **R3**, teach the agent | `Reject` and `Route` | MVP |
| 4 | **4.6** | Escalate | **MAIN**, the honest exit | `Esc`, the way out of the one dead end | MVP |
| 5 | **5.1** | Decision log | **R2**, answer for it later | `Log` | MVP |
| 6 | **5.4** | Log entry, `?as-of` | **R2** | `Log`, the snapshot itself | MVP |

**3.5 Fleet and 3.6 Scope bar are not rows.** Both are sections of 3.1 rather than screens of their own: the fleet is what the pane holds at rest, which is the decision that gives it zero taps, and the scope bar is a band inside the same page. They are drawn as part of 3.1 and they appear in its states.

**2.1 Shift brief is deliberately not first.** It is on the main flow, but it is page type C, the one type in the whole bank with **no domain reference anywhere**, so it is the screen most likely to need iteration. It is drawn at step 6, after the reference has set the pattern, not at the front where it would set one.

---

## 3. The matrix

Column groups: the four system states are the floor, then the states each node's own specification actually declares.

### 3.1 Case Queue

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `queue.html` | Cases waiting on a decision, the fleet at rest in the pane |
| ✓ Loading, 3.2 | `queue-streaming.html` | Rows arrive as Clerk correlates them; the readout is provisional and says so |
| ✓ Error, 3.3 | `queue-stale.html` | The live connection dropped. The list stays readable and marked, never blanked |
| ✓ Empty, 3.4 | `queue-empty.html` | Nothing waiting. **The test of the base layer's biggest decision**: it must read as the fleet, not as an empty screen |
| ✓ Empty, second kind | `queue-no-match.html` | A narrowing returned nothing, and 3.6 names the chip responsible |
| ✓ Success | `queue-decided.html` | The instant after a verdict is filed: the row stays in place and changes to decided, section 4b of the node |
| ✓ Source stopped | `queue-clerk-down.html` | 0.4's fourth state. The connection is fine and Clerk is not investigating, so **the queue is complete** |
| ✓ Taken by another analyst | `queue-taken.html` | A colleague is deciding a row. Settled at the close of 03b, and it is what the `taken` chip is for |
| - Out of scope | none | **Not a state of the page.** Tenants outside her provider scope are never rendered, not even greyed, so there is nothing to draw. It is an absence in the data |

### 4.1 Case File in the detail pane

| State | Page | Why it exists |
|---|---|---|
| ✓ Default, success | `case.html` | Filed and waiting on her. All four verdict controls live |
| ✓ Loading, 4.3 | `case-investigating.html` | Clerk still working. **What is being checked** replaces the verdict line, so waiting is legible |
| ✓ Clerk already acted | `case-acted.html` | A banner naming the action and its class, and whether it can be undone |
| ✓ Amending, 4.5 | `case-amend.html` | The verdict line is editable and Clerk's original stays visible beside it |
| ✓ Empty, 4.8 | `case-no-baseline.html` | No baseline for this tenant yet. Not a zero and not a meaningless comparison |
| ✓ Error, 4.7 | `case-expired.html` | Evidence aged out. Tombstone rather than blank, and escalate is the only exit |
| ✓ Error, 4.9 | `case-write-failed.html` | The verdict did not write. Retry, or hold locally |
| ✓ Held, 4.10 | `case-unrecorded.html` | 4.9 unresolved. The decision exists and only she can see it |

### 4.4 Reject with a reason

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `reject.html` | Opened, nothing chosen, the primary action disabled and saying why |
| ✓ Success | `reject-chosen.html` | One of the five reasons that need no second question. One selection, one key, done |
| ✓ Axis B required | `reject-axis-b.html` | The sixth reason, where the pairing needs a second answer |
| ✓ Domain, never routes | `reject-tenant-normal.html` | `Normal at this tenant` and its consequence line. **The most consequential rule in the taxonomy** |
| ✓ Error, 4.9 | `reject-write-failed.html` | Retry, and 4.10 holds locally |
| - Loading | none | Nothing is fetched. The taxonomy is a canonical list already in the client, from 0.7 |

### 4.6 Escalate

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `escalate.html` | The recipient named first, with their rota window and how they will be told |
| ✓ Domain, from 4.7 | `escalate-from-expired.html` | Opened from the one dead end, where escalate is the only control left |
| ✓ Empty, no recipient | `escalate-no-recipient.html` | Nobody on the next level. Falls back to the provider's declared contact, and **never files with nobody attached** |
| ✓ Error, 4.9 | `escalate-write-failed.html` | The case stays open and unescalated |
| - Loading | none | The rota is read with the case, not on opening the dialog |
| - At 360 | none | **A viewport, not a state.** The same page narrowed, which is what the responsive rule means |

### 5.1 Decision log

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `log.html` | The current shift and the one before it, the pane stating what the view covers |
| ✓ Loading, 5.2 | `log-narrowing.html` | Narrowing before rendering |
| ✓ Empty, 5.3 | `log-not-found.html` | Case not findable. **Written as the search affordance rather than a shrug** |
| ✓ Entry selected | `log-selected.html` | 5.4 in the pane, which is the same split as 3.1 |
| ✓ Error, 5.5 | `log-snapshot-gone.html` | The snapshot did not survive |
| - Success | none | Nothing is submitted here. The log is read only, and the write happened at 4.1 |

### 5.4 Log entry, `?as-of`

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `entry.html` | The full snapshot as it stood, with its own address on the page |
| ✓ Partly gone | `entry-partial.html` | Some sources retrievable and some not, and the frame says which |
| ✓ Error, 5.5 | `entry-gone.html` | Nothing survived |
| ✓ Domain, drift | `entry-changed.html` | The live case has changed since. Both are true and the entry says so |
| ✓ Domain, retention | `entry-beyond-retention.html` | Beyond the window. **The analyst learns the window from the entry, never from a failure** |
| - Loading | none | It resolves as a page load; a spinner inside a permalink is a second wait for one navigation |
| - Success | none | Nothing is submitted. This is the record, not a form |

---

## 4. The two choices

### Reference screen: 3.1 Case Queue

**It is the workhorse by a distance, and the arithmetic is in the block bank.** Type A, a list in a split pane, is the largest type in `ia/docs/blocks.md` at eight nodes, and 3.1 is its fullest instance. Drawing it once produces:

| What it defines | Reused by |
|---|---|
| The shell, all five zones of 0.1 | Every authenticated screen in the product |
| The connection strip 0.4 and the annunciator 0.3 | Every authenticated screen |
| **The canonical row** | 3.1, 5.1, and anything that lists cases |
| The split, and the pane's resting state | 3.1, 5.1, and the pane that holds 4.1, 5.4 and 3.5 |
| The scope bar 3.6 | 3.1, 5.1, 3.5 |

**The honest objection, named rather than avoided:** the pack warns the reference need not be the first screen of the flow, and here it is. That is a coincidence rather than laziness, and the test is reuse: no other candidate defines the shell, and both other candidates render **inside** the thing 3.1 draws.

**4.1 Case File was the other candidate** and it loses on one fact. Type B is ten nodes, more than type A, but 4.1 renders **in 3.1's pane**, so drawing it first means drawing the shell anyway and then calling the smaller half the reference.

### First flow: the main job, Queue to Case File to verdict to log

It is the flow that reuses the reference most, and every screen in it is a variant of the reference or of something the reference contains:

- **4.1** renders in the pane the reference already drew. No new shell
- **4.4 and 4.6** are dialogs over that pane
- **5.1** is the same type A, and it reuses the canonical row rather than defining one
- **5.4** renders in 5.1's pane and reuses the three canonical components 4.1 defines

**It is also the flow the case is judged on.** The two screens that go to full colour at stage 07 are the first two in it, so the reference and the deliverable are the same object.

---

## 5. Page count for the main flow

| Screen | Pages |
|---|---|
| 3.1 Case Queue | 8 |
| 4.1 Case File in the pane | 8 |
| 4.4 Reject | 5 |
| 4.6 Escalate | 4 |
| 5.1 Decision log | 5 |
| 5.4 Log entry | 5 |
| **Total, main flow** | **35** |

Plus `overview.html`, the hub. **7 cells marked `-`, each with its reason above**, and 35 states drawn.

---

## 6. Deferred to step 8, and not forgotten

The main flow is the pattern. These are on the map with scope already carried, and the estimate for them is made at step 8 before anything is rolled out:

| Node | Screen | Scope |
|---|---|---|
| 1.1, 1.2 | Sign in, session expired | MVP |
| 2.1 to 2.5 | Shift brief and its four states. **Page type C, no domain reference** | MVP |
| 3.5, 3.6 | Fleet and scope bar, drawn inside 3.1 and listed here so the coverage map counts them | MVP |
| 4.2 | Case File standalone, the permalink and the 360 rendering | MVP |
| 5.6 | History of one case | MVP |
| 8.1, 8.2, 8.4 | Not found, service unavailable, toast stack | MVP |
| 0.5 | Keyboard map, a dialog over any screen | MVP |
| 6.1, 6.2, 7.1, 7.2, 7.3, 8.3 | Client summary, autonomy, permission denied | **LATER**, and they are not drawn in this round |

---

## 7. One inherited rule that contradicts the pack, resolved in favour of the project

The pack says mobile-first, and reasons block priority from the phone. **`CLAUDE.md` says the opposite in its own words**, and the whole detail layer was built on it: the stance is desktop first, block priority is reasoned from the desk at 1440, and the 360 rendering is then **proved** for one scenario, an on-call analyst reading and escalating a paged case at 03:00.

The project rule wins, because forty nodes were specified under it and re-deriving priority from a phone would contradict every one of them.

**What survives from the pack unchanged, and it is the part that matters:** one live responsive screen per state, never two frames on a page, and the narrow rendering checked by narrowing the browser rather than by building a second file.
