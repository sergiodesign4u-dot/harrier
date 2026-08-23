# Stage 04: the screens of the product, and their states

**Reference screen: `3.1 Case Queue`. First flow to assemble: the main job, Queue to Case File to verdict to log.** Both chosen at step 1 and argued in section 4. Stages 05 and 06 read the reference from this line and do not re-derive it.

---

## 1. What this file is

Rows were the **main flow only** until step 8, which expanded the matrix to the whole product before any estimate was shown. Section 5 now carries the estimate for all thirteen MVP screens, and section 6 carries the six that are not drawn in this round with the reason.

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
| ✓ Escalated, 4.6 | `queue-escalated.html` | The instant after a handover. **Added at step 6 as a correction:** 0.8 closes the chip set at six values and names 4.6 as what sets `escalated`, and `CLAUDE.md` binds it as a visible state, but step 1 drew it nowhere. The count stays 18, because no verdict was filed |
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

**One entry is deliberately absent, and it is the strongest consistency check in the stage.** `queue.html` shows Meridian Health wearing `decided` and `unrecorded`: a verdict exists and the write did not land. So there is **no log entry for it**, and drawing one would break the claim the whole product rests on. The log does not mention the gap either, because no node specifies a surface for that. **Logged as a question for 5.1 rather than invented here:** should the log name what it knows is missing?

**Three fixtures were introduced at this step**, none of them in 0.8's canon, all of them sample content under the fixture rule:

| Fixture | Why it had to exist |
|---|---|
| **S. Varga**, SOC lead | 4.6 files an escalation to a named person on the rota, and there was no second person besides the peer analyst `D. Okonkwo` |
| **C-3180** at Norsk Marine | 5.5 needs an entry old enough for its snapshot to have failed, and `C-4417` is four hours old |
| The June 2026 entries | 5.2 and 5.5 both narrow to a range outside the current shift, which is the only way to show that narrowing does anything |

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

**One contradiction inside 5.4's own node, found by drawing it.** The state matrix gives `Beyond retention` an **absent** verdict record, while section 7b, added at the close of 03b, says the verdict record is **kept for the life of the record** and only the snapshot has a shorter window. Both cannot be true.

Drawn per the matrix, because that is what stage 04 renders, and the reading that makes it coherent is written on the page: **beyond retention means the log does not reach back this far at all**, so there is no entry, not an entry stripped of its evidence. `entry-gone.html` is the other case, where the entry is present and the snapshot died. **For 5.4 to settle which it means.**

---

## 3b. The matrix, the rest of the product

Expanded at step 8, from each node's own state matrix, before the estimate below was shown. Nothing here was invented at this stage: a state that is not in a node's specification is not a row.

### 2.1 Shift brief, flow 2

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `shift.html` | Incoming. Both names, the window, and the counted lines that are each a pointer into a case |
| ✓ Role, outgoing | `shift-outgoing.html` | The same node read by the analyst handing over mid shift. **The one screen in the product with two readers** |
| ✓ Loading, 2.2 | `shift-assembling.html` | Assembling. What is being gathered is named, never a spinner |
| ✓ Empty, 2.3 | `shift-nothing-carried.html` | Nothing carried over, and what was quiet said out loud rather than a blank |
| ✓ Success, 2.4 | `shift-sealed.html` | Sealed by the outgoing analyst: who sealed it and when |
| ✓ Error, 2.5 | `shift-close-failed.html` | The close did not write |
| ✓ Domain | `shift-unsealed.html` | Nobody sealed it. The incoming analyst inherits a brief that was never closed |

**Page type C, and it is the one type in the whole bank with no domain reference anywhere.** Three Refero searches returned calendars and changelogs; PagerDuty's on call handoff article is gone from the live knowledge base. The comparison column in `blocks.md` carries the barrier instead of a reference, so this screen is the most likely of the seven to need a second pass.

### 4.2 Case File, standalone route, flow 1

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `case-standalone.html` | Arrived by link. The same case, no list beside it, because the address resolved on its own |
| ✓ Success | `case-standalone-filed.html` | After filing from the standalone route, where there is no queue to return the row to |
| ✓ Error | `case-standalone-stale.html` | Connection stale on a route that has no list to fall back to |
| - The three 360 columns of the node's matrix | none | **Viewports, not states.** The same three pages narrowed, which is what one live responsive screen means |

**This is the screen the whole 360 promise rests on.** The named mobile scenario is an on call analyst opening a paged case at 03:00, reading it and escalating, and this is the route that arrives in the pager.

### 1.1 Sign in, flow 4

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `index.html` | Arrived on purpose. **The only public URL in the product**, and the product's home screen |
| ✓ Role | `index-deep-link.html` | Arrived by a deep link, which must survive the round trip through the identity provider |
| ✓ Domain, 1.2 | `index-expired.html` | The session expired underneath her, mid decision |
| ✓ Domain | `index-signed-out.html` | Signed out deliberately, which is not the same message as expired |
| ✓ Error | `index-idp-error.html` | The identity provider failed, and it is not her password |
| - Empty | none | One field and one button. There is no collection here that can be empty |

### 5.6 History of one case, flow 3

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `case-history.html` | Every entry for one case in order. 5.1 with one chip applied |
| ✓ Domain | `case-history-superseded.html` | A correction beside what it corrected, which is the shape the whole log is built on |
| - Loading, error, success | none | It is a narrowing of 5.1 and inherits all three from it |

### 8.2 Service unavailable, flow 5

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `unavailable.html` | Unplanned. Names what is down and **whether verdicts can still be filed** |
| ✓ Domain | `unavailable-planned.html` | Planned maintenance, which is a different sentence and a different decision |
| ✓ Domain | `unavailable-partial.html` | Part of it is down, and the fallback contact appears only if the down part matters to a decision |

### 8.1 Not found, flow 5

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `not-found.html` | **A tenant that is not hers renders identically to a case that does not exist.** That is tenant isolation drawn rather than described |
| - Everything else | none | It is itself an error state. A state of a state is a node the map does not have |

### 0.5 Keyboard map, flow 5

| State | Page | Why it exists |
|---|---|---|
| ✓ Default | `keyboard.html` | A dialog over any screen. It carries the one real inconsistency in the product, `Enter` filing in 4.4 and making a line in 4.6 |
| - Loading, error, empty | none | A static list rendered from the client. None of the three can occur |

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

## 5. The estimate for the whole product, and what it missed

| Screen | Node | Scope | States | Pages | Estimated at step 8 | Status |
|---|---|---|---|---|---|---|
| Case Queue | 3.1 | MVP | 12 | 12 | 9 | **built** |
| Case File in the pane | 4.1 | MVP | 8 | 8 | 8 | **built** |
| Reject with a reason | 4.4 | MVP | 6 | 6 | 5 | **built** |
| Escalate | 4.6 | MVP | 4 | 4 | 4 | **built** |
| Decision log | 5.1 | MVP | 5 | 5 | 5 | **built** |
| Log entry, `?as-of` | 5.4 | MVP | 5 | 5 | 5 | **built** |
| Shift brief | 2.1 | MVP | 7 | 7 | 7 | **built** |
| Sign in | 1.1 | MVP | 5 | 5 | 5 | **built** |
| Case File, standalone route | 4.2 | MVP | 3 | 3 | 3 | **built** |
| Service unavailable | 8.2 | MVP | 3 | 3 | 3 | **built** |
| History of one case | 5.6 | MVP | 2 | 2 | 2 | **built** |
| Not found | 8.1 | MVP | 1 | 1 | 1 | **built** |
| Keyboard map | 0.5 | MVP | 1 | 1 | 1 | **built** |
| Client summary, and its sending | 6.1, 6.2 | LATER | 0 | 0 | 0 | not this round |
| Tenant detail, grants, grant change | 7.1, 7.2, 7.3 | LATER | 0 | 0 | 0 | not this round |
| Permission denied | 8.3 | LATER | 0 | 0 | 0 | not this round |

**Together 62 pages, all of them in the MVP scope and all of them drawn**, plus `overview.html`, the hub. **Eleven cells marked `-`, each with its reason above.**

**The estimate was 58 and the product is 62.** The four are named rather than absorbed, because a count that quietly grows is a count nobody can use next time:

| Page | Why it was not in the estimate |
|---|---|
| `queue-notice`, `queue-notices` | Node 8.4 was counted as **inside a host**, and a node inside a host was assumed to need no page. It needs two: a notice layer that is never drawn at capacity is one whose cap nobody has decided |
| `queue-reconnecting` | `CONNECTING` was a declared `readyState` of 0.4 with a strip variant written for it and no page using it. The estimate counted 0.4 as a strip rather than as three strips |
| `reject-other` | Axis A of 0.7 has seven values. The list showed six and the seventh was in the state matrix, so the estimate counted the list |

**Three of the four are the same mistake**, and it is worth naming because it will recur at stage 07: **a node that renders inside a host still has states, and its states still need pages.** The step 8 estimate counted screens and read `inside a host` as `zero pages`.

### Every MVP node is accounted for, and this is the check that says so

The map holds **46 nodes, 40 of them MVP**. A screen count alone cannot prove coverage, because most nodes are not screens.

| How the node renders | Count | Which |
|---|---|---|
| **Its own screen** | 13 | 0.5, 1.1, 2.1, 3.1, 4.1, 4.2, 4.4, 4.6, 5.1, 5.4, 5.6, 8.1, 8.2 |
| **A state of a screen** | 17 | 1.2, 2.2, 2.3, 2.4, 2.5, 3.2, 3.3, 3.4, 4.3, 4.5, 4.7, 4.8, 4.9, 4.10, 5.2, 5.3, 5.5 |
| **Inside a host** | 10 | 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 3.5, 3.6, 8.4. **Three of these turned out to need pages of their own after all**: 0.4's `reconnecting`, 0.7's seventh value and 8.4's two, all drawn as states of their host screen |
| **Not drawn this round** | 6 | 6.1, 6.2, 7.1, 7.2, 7.3, 8.3, all LATER |

13 + 17 + 10 = **40, which is every MVP node**, and the six LATER ones are named rather than missing.

---

## 6. Not drawn in this round, and why

| Node | Screen | Why it waits |
|---|---|---|
| 6.1, 6.2 | Client summary draft, editing and sending | LATER on the map. Cluster 6 is the third job and it is not in the MVP three |
| 7.1, 7.2, 7.3 | Tenant detail, autonomy grants, grant change | LATER, and the whole of cluster 7 arrives with the `Clients` navigation item that the MVP does not have |
| 8.3 | Permission denied | LATER, changed at the stage 03b audit: a tenant that is not hers renders **8.1**, so what is left for 8.3 is a refusal by role, and cluster 7 holds the first one |

**None of these is forgotten and none is a state of something built.** Each is a screen on the map with its scope already carried, so the round that picks them up starts from a specification rather than from a gap.

---

## 7. One inherited rule that contradicts the pack, resolved in favour of the project

The pack says mobile-first, and reasons block priority from the phone. **`CLAUDE.md` says the opposite in its own words**, and the whole detail layer was built on it: the stance is desktop first, block priority is reasoned from the desk at 1440, and the 360 rendering is then **proved** for one scenario, an on-call analyst reading and escalating a paged case at 03:00.

The project rule wins, because forty nodes were specified under it and re-deriving priority from a phone would contradict every one of them.

**What survives from the pack unchanged, and it is the part that matters:** one live responsive screen per state, never two frames on a page, and the narrow rendering checked by narrowing the browser rather than by building a second file.
