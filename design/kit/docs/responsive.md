# Width

What the product does with a wider screen, decided per screen and per component, and where the rule for it lives.

**The product had three breakpoints and none of them was a decision.** They were three literal numbers in `px`, written where a defect was found, none named, none in a token, none in `rem`. This file is the pass that names them, and the first thing it did was count them.

---

## 1. The census, as it stands

Mechanical, by search, over four corpora with four different fates. The point of doing it first is narrow and load bearing: **a new breakpoint written on top of an unnoticed old one gives a product with five width numbers in which none is a decision.**

| Corpus | Points | Fluid | Container | Fate |
|---|---|---|---|---|
| `design/system/` | 34 | 27 | 53 | **the home.** This is where it belongs and where the rest arrives |
| `design/*.html` | **0** | 3 | 4 | **clean already**, and the three fluid signs are all in `design/overview.html`, which is the stand for the screens rather than a screen |
| `design/kit/` | 48 | 145 | 364 | **the stand, not the product.** Its adaptation stays in `_page.css` and enters no rule here |
| `wireframes/` | 26 | 65 | 70 | **frozen since stage 05.** Read as evidence of what the product already does, and nothing is carried out of it automatically. That happens at stage 12, when those screens are built in colour |

**The headline number: three distinct width values exist in a query anywhere in this project.**

| Value | Uses | Where | What it does |
|---|---|---|---|
| **900px** | 29 in the system, 24 in grey, 48 on the stand | everywhere | The real change of behaviour: the pane is not rendered, the log column is not rendered, the queue row collapses to one track, the dialog becomes the screen, the shift brief is replaced by a line saying why |
| **1560px** | 3 | `tokens.css`, `row.css`, `row-moved.css` | The pane drops from 380 to 320 and the row loses side padding. **A number written where a defect was found**, and the defect is that the pane and the list were competing for a fixed budget |
| **1400px** | 2 | `annun.css`, `z1.css` | The annunciator is allowed to wrap. Its own comment says why: it overflowed at 1280, the product's declared minimum |

**Zero `@media` in a product screen file, before this stage and after it.** That is inherited rather than earned: stage 07 folded three stylesheets into one and stage 08 moved every screen onto `system/index.css`. The rule is written down at this stage so that the twenty screens of stage 12 cannot undo it.

---

## 2. The audit, as it should be

Corpus: all 62 grey screens, which is the whole product. Read against `research/docs/jtbd.md`. The question is not how to stretch a phone layout but **what a wider screen gives the analyst in the work she is doing here.**

**The measurement that decided every row of this table**, taken on `design/queue.html` before anything was changed:

| Viewport | The pane | The list | "What it is" cell | "The verdict" cell |
|---|---|---|---|---|
| 1280 | 320 | 724 | 104 | 125 |
| 1440 | 320 | 884 | 177 | 212 |
| 1600 | **380** | 984 | 219 | 262 |
| 1920 | **380** | 1304 | 364 | **437** |
| 2560 | **380** | 1944 | 655 | **786** |

**Every pixel of extra width goes to two prose columns inside a scannable row, and none of it goes to the pane.** The verdict cell runs about 34 characters at 1440 and **70 at 1920**, inside a row 30 pixels tall. `CLAUDE.md` names 1440 to 1920 on two monitors as the primary layout target, so that is not an edge case, it is where the analyst sits. Design principle 1 says every row is a decision rather than a record, and a 70 character line is not read at a glance. Meanwhile the pane, which is the one surface in this product that is **read** rather than scanned, stops growing at 380 and never moves again.

That single finding is the mechanism behind all 39 "wider" rows below: **the width goes to the pane, and the row's prose stops growing.**

### The table

| # | Screens | What she does here | Category | How | Which job |
|---|---|---|---|---|---|
| 1 | **17** a list with a reading pane beside it: `case`, `case-acted`, `case-amend`, `case-expired`, `case-investigating`, `case-no-baseline`, `case-unrecorded`, `case-write-failed`, `case-history`, `case-history-superseded`, `queue-decided`, `queue-escalated`, and **the five log screens**, `log`, `log-selected`, `log-narrowing`, `log-not-found`, `log-snapshot-gone` | Rules on a case with the list beside it | **WIDER, air** | container. The pane takes the extra width; the row's two prose columns take a ceiling in `ch` | The main job: decide whether Clerk's verdict holds, and still be able to defend it |
| 2 | **10** queue with the fleet at rest: `queue`, `queue-empty`, `queue-no-match`, `queue-taken`, `queue-stale`, `queue-reconnecting`, `queue-clerk-down`, `queue-streaming`, `queue-notice`, `queue-notices` | Scans what is waiting and glances at the fleet | **WIDER, air** | the same one rule, because it is the same two zones | The main job, plus the third: know where the agent's record has earned latitude |
| 3 | **7** the handover: `shift`, `shift-assembling`, `shift-sealed`, `shift-unsealed`, `shift-outgoing`, `shift-nothing-carried`, `shift-close-failed` | Picks up or hands off a shift | **WIDER, air** | container: the brief's prose stops at its measure and the case beside it grows | The second job: pick up and hand off a shift |
| 4 | **5** the record: `entry`, `entry-changed`, `entry-gone`, `entry-partial`, `entry-beyond-retention` | Answers for a decision months later | **WIDER, air** | container, and it already has one: `--width-frame` at 820 caps the document. What changes is that the column around it stops being a fixed 380 plus the rest | The fourth job: answer for it later |
| 5 | **11** a dialog over the split: `reject`, `reject-axis-b`, `reject-chosen`, `reject-other`, `reject-tenant-normal`, `reject-write-failed`, `escalate`, `escalate-from-expired`, `escalate-no-recipient`, `escalate-write-failed`, `keyboard` | Answers one question inside a modal layer | **SAME** | nothing. `--width-dialog` is a container already and the dialog is anchored rather than centred, by node 4.4 | Width adds nothing: the question is the same size at every width |
| 6 | **5** the door: `index` and its four states | Signs in | **SAME** | nothing. The card is a form with six fields | A wider sign in form is a wider sign in form |
| 7 | **3** the case on its own address: `case-standalone`, `case-standalone-filed`, `case-standalone-stale` | Reads a case reached by a permalink or a pager | **SAME** | nothing, and it is deliberate: `--width-sheet` at 760 already caps it, because this is the one surface in the product read as a document | The measure is the point of this route. Width must not undo it |
| 8 | **3** the console is down: `unavailable`, `unavailable-planned`, `unavailable-partial` | Learns that Clerk cannot answer | **SAME** | nothing. Centred, one message | A wider outage notice is not a better one |
| 9 | **1** `not-found` | Arrived at an address that resolves to nothing | **SAME** | nothing. One centred message in a column with no pane beside it | None, and that is the point: it is the screen a job takes you to when the job has already failed. Width cannot help |

**The estimate: 39 wider, 23 the same, zero new behaviour.** 17 + 10 + 7 + 5 = 39 and 11 + 5 + 3 + 3 + 1 = 23, which is 62 with every screen in exactly one row.

**The first draft of this table put the reject family in row 1 and again in row 5, and lost the five log screens entirely**, so it counted 62 while covering 57 and double counting 6. Found by a reader with clean context who was asked to build the log screen and could not find its row. The categories themselves were produced by a browser reading the zones of every grey screen, and they were right: what was wrong was the hand written table of names beside them, which is the failure mode of writing a list next to a count instead of out of it.

### Why there is no new behaviour, said out loud

The usual answer at this stage is split-view: a list and a detail side by side instead of one after the other. **Harrier has been split-view since stage 03b.** It is the chosen UX pattern of the whole product, it is what the two zones of `z45` are, and it stands on 48 of the 62 screens at every width above 900. There is nothing a wider screen can reveal that this product does not already show at its declared minimum of 1280.

What was considered and did not qualify:

- **A third column**, tenant context beside the case. It has no job. `CLAUDE.md` requires tenant context never to be more than a glance away and the annunciator already carries it in the top bar at every width, which is cheaper than a column that is empty most of the time.
- **The fleet and a case at once.** They are the two fillings of one zone by decision, recorded at stage 09: they share no zone past the head, and a pane showing both would be the "empty case" reading that `CLAUDE.md` forbids.
- **The log's reading pane opening beside the queue.** The log is its own screen with its own scope; putting it beside the queue would mean two scopes on one screen, and the readout can only make one counted claim.

Each of those is a job away from being real. None has one.

---

## 3. The component register

A third list, and it is not derivable from the second. **The audit is sorted by screen and adaptation lives in the component.** A component standing only on screens in the "same" category never appears in the audit at all, and would reach stage 12 with no verdict about width, to be placed on a screen that is wider than anything it has met.

Source: the 73 components and 4 patterns of `docs/inventory.md`, every one of them, in order of level.

**Fourteen of the 77 carry a stage 08 name the grey corpus does not have**, and each resolves through the rename map rather than being left blank: `screen` is `wf-screen` there, `shell` is `wf-shell`, `state` is `chip--state`, `navitem` is `.z1 nav a`, `input` and `label` are `.field input` and `.field > label`, `link` is a bare anchor, `rail-foot` is `rail--foot`, `row-moved` and `rows-moved` are `row` and `rows--moved` inside the brief, and the four patterns are classes stage 09 added to colour only. A missing row and an empty row are different things, and it is the second that slips through.

| Verdict | Count | What it means |
|---|---|---|
| **fluid** | 52 | Stands on at least one screen the audit calls wider. Its own width is a percentage, a fraction or a wrap already, or becomes one |
| **same** | 11 | Stands only on screens the audit calls the same: `dialog`, `scrim`, `cons`, `opt`, `optlist`, `axisb` inside a modal layer; `door` and `doorcard` on the door; `contact` and `outage` on a system state; `sa-offer` on the standalone route |
| **container** | the two that measure their place | `row` and `row-moved`: a row does not know whether it is in a 724px column or a 1223px one, and the answer changes what its prose columns are allowed to do |
| **the point** | `z1`, `z2`, `z4`, `z5`, `z45`, `screen`, `shell` | The shell, and the shell alone, measures the viewport, because the shell **is** the viewport |

Every one of the 77 carries a verdict in the "behaviour at width" column of `docs/inventory.md`, and every "does not adapt" carries a reason beside it. A verdict with no reason is a gap wearing the name of a verdict.

---

## 4. The three ways, and the point comes last

Read top down. A point is written only when the fluid answer physically cannot work, and the reason is a line in the audit above.

| | Fluid | Container | Point |
|---|---|---|---|
| The question | will the content stretch by itself? | is the line too long? | is the behaviour different? |
| The mechanism | `clamp()`, `%`, `minmax(auto-fit)`, `flex-wrap` | `max-width` and a measure in `ch` | `@media` for the shell, `@container` for a component |
| How many here | unlimited | two, plus the caps a row's prose takes | **one** |
| What proves it | drag the width and nothing breaks | the measure, counted in `ch` | a line of the audit saying why fluid could not |

**The number of columns is never a token.** A grid counts its own columns from `--grid-col-min` and `auto-fit`, so it keeps working at a width nobody planned for.

---

## 5. The point register

**One point.** `@media` cannot read `var()`: a query is resolved before the cascade of custom properties, so there is no error and the rule simply never fires. The literal stands in the query and the token is the register, and step 6 counts every query in the system against it.

| Token | Value | Written in a query as | What changes on it | Why fluid could not |
|---|---|---|---|---|
| `--bp-split-panes` | **80rem**, 1280px | `max-width: 1279.98px`, on 29 rules in 28 files | The pane is rendered or not. The queue row keeps its seven tracks or collapses to one. A dialog is anchored beside the pane or becomes the screen. The log column exists or is a line saying it does not. The shift brief exists or is a line saying the handover is a desk reading | **There is no continuous version of "not rendered".** Every other width decision in this product turned out to be a size, and a size can be a clamp. This one is a change of what is on the screen, and the audit could not write it any other way |

**The queries say 1279.98 rather than 1280**, because a max-width query includes its own value: at exactly 1280 both a `max-width:1280px` rule and a split beginning at 1280 would be true, and source order would decide the layout.

**Two points were removed and one moved.**

| Was | What it did | What it is now |
|---|---|---|
| 1560px | The pane dropped from 380 to 320 and the row gave back four pixels of side padding | `--pane-w: clamp(22.5rem, 24vw, 34rem)` and `padding-inline: clamp(...)`. The same trade, made continuously instead of once at a number nobody had named |
| 1400px | The annunciator was allowed to wrap and the bar with it | One declaration each, with no query. Measured from 1280 to 2560 the strip is the same height either way: above 1400 there had never been anything to wrap. **A query whose effect cannot be observed is not a breakpoint** |
| 900px | Everything the one point now does | 1280px. See the audit above: between 910 and 1200 the split did not fit and had not since stage 04 |

## 5b. What the sweep found, and it is the point of the instrument

2548 readings: 52 screens at 49 widths, from 320 to 2560 in steps of 40 and in tens within 80 of the point. Every reading carries the document's own `clientWidth`, because a scrollbar turns a requested 360 into an actual 345 and a whole row of results is then taken at a width nobody asked about.

**Four classes came out of it, and only one was the defect anybody expected.**

| What it found | Where | What it was |
|---|---|---|
| **The split did not fit, at every width from 910 to 1200** | every screen carrying a queue | The finding of the stage. The point moved to 1280 |
| **The pane at its floor was narrower than a phone** | 13 screens, from 1280 to about 1300 | The latitude ladder's reason column is 224px and does not fit beside its mark at 320. Every way of making it fit inside 320 also changed the 360 rendering, because at 360 the same content already has more room than 1280 was giving it. **The floor is 22.5rem now, which is the width the phone gives the case** |
| **The longest line in this product is not at 2560, it is at 520** | 8 kinds of prose, on most screens | Below the point the layout is one column and the SMALLEST text fills it: 11px type in a 520px column is 83 characters wide. At 360 the same elements measure 65 and are fine; at 1280 they are inside the pane. **Eleven of the fourteen elements now carrying `--measure` were added for that band alone**, and none of them would have been found at 360, 1440 or 2560 |
| **Two screens sit below the declared minimum** | `case*` and `reject*` at 320 | The reason column again, 8px past the edge. `CLAUDE.md` promises 360 and not 320, so the sweep reports these separately and does not count them. **A suite that is red about a promise nobody made gets ignored about the promises somebody did make** |

**And three findings were the instrument's own.** It asserted exactly one navigation carrier at every width and reported the five sign in states as defects: those screens carry no shell at all, by usage rule R5. It then reported the two full outage states, which carry a bar with no navigation because there is nowhere else to be. And it counted `.wrapline`, a flex row of buttons, as an 86 character line of prose. An instrument gets the same verification as the product: **a finding that is not a defect is a defect of the finder.**

## 6. Container thresholds

**None, and that is a finding rather than an omission.** A container query was the expected answer for the queue row, which genuinely does not know whether it stands in a 724px column at the declared minimum or a 1223px one at 1920. It turned out not to need one: what the row needed was for its two prose tracks to stop growing, and a track can carry its own ceiling in `ch`. `minmax(6.5rem, 32ch)` says the same thing as a container query about a measure and says it continuously.

`container-type` is therefore declared nowhere in `design/system/`, and that is checkable: a `@container` rule with no `container-type` above it never fires, silently, and the component simply always looks as though it stands in a wide place. There is no such rule here to fire.

The one place a container query does stand is `design/kit/responsive.html`, in the live demonstration of what a container query is. That is the stand rather than the product, and it declares its own `container-type` on the same element.

## 7. The shell

**Form C: the shell does not change, and it never had a second form to change from.**

| The question, to the navigation model of stage 03a | The answer |
|---|---|
| How many items at the top level? | **Three.** Queue, Shift, Log. Clients arrives with cluster 7, and the fleet never gets one: it is the resting state of the queue's pane, so it costs zero taps |
| Is there a second level that must stay permanently visible? | **No.** The scope bar is per screen and belongs to the list, not to the navigation |
| Does any screen take side space for new behaviour? | **No.** There is no new behaviour at this stage, and the split it would have introduced has been this product's shape since stage 03b |

This product has no tab bar and never had one. Three items have lived in the top bar at every width since stage 04, so there is no carrier to move and no second carrier to hide.

**What did change is the bar's behaviour, and it was wrong.** Two of its elements claimed a whole line each with `width:100%` the moment the window was narrower than the point, which is a phone's bar rendered on a 1200px screen: the top bar was three lines tall from 320 all the way to 1279. Both are fluid now, the annunciator with a basis of 22rem and the navigation filling whatever line it lands on. Measured: **181px at 360, 116 at 600, 65 at 768, 55 from 1024 up**, and unchanged at 360 to the pixel.

**Exactly one navigation carrier at every width**, verified by computed style at 49 widths rather than by being written down, with three items visible and three in the accessibility tree at 360 and at 1920 alike. The usual form of this defect is a hidden second carrier that a screen reader still walks; there is none.

## 8. What moved

| From | To | Why |
|---|---|---|
| `tokens.css`, the type scale in px | the same numbers in `rem`, and the two headings in `clamp()` | A px scale ignores a reader who set a larger font, which is how a layout fails WCAG 1.4.4 quietly |
| `tokens.css`, the space scale and every width in px | `rem` | The same, for spacing: a reader at 20px on a px scale gets exactly the crowding they were escaping |
| `tokens.css`, `@media (max-width:1560px){ --pane-w: 320px }` | `--pane-w: clamp(22.5rem, 24vw, 34rem)` | The pane and the list were competing for a fixed budget and the pane was told to give way once |
| `row.css` and `row-moved.css`, `@media (max-width:1560px)` padding | `padding-inline: clamp(...)` on both | The same trade, continuous |
| `annun.css` and `z1.css`, `@media (max-width:1400px)` | two unconditional declarations | The query could not be observed at any width |
| `annun.css` and `z1.css`, `width:100%` under the point | `flex: 1 1 22rem` and `flex: 1 1 auto` | The bar was three lines tall on a 1200px screen |
| `case-pane.css`, `.nar{ max-width: 68ch }` | `--measure` on four kinds of prose in `base.css` | It was written as the one place in the product with a measure, and the measure now reaches all of them. Two answers two characters apart is the duplication this system rules against |
| 29 queries at `max-width:900px` | `max-width:1279.98px` | The split did not fit below about 1200 and never had |

**Nothing moved out of a screen file, because there was nothing there to move.** The census found zero queries and zero inline width rules in `design/*.html`, inherited from stage 07 folding three stylesheets into one and stage 08 moving every screen onto `system/index.css`. The rule is written down at this stage anyway, in `architecture.md` and in `design/system/CLAUDE.md`, because stage 12 builds twenty screens at once and a habit that is not a rule does not survive twenty authors.
