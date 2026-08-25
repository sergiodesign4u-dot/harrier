# Critique log of the design system

One file, one section per stage. It exists because the alternative is the chat: a session ends, the critique starts from nothing, and the summary of what changed has to be invented again from the diff.

**This file was named by the stage 07 contract and never created.** Stage 09 is the first stage to write into it, and that absence is the first row of its own contract checklist below rather than a thing quietly fixed. Stages 07 and 08 kept their critique in `docs/decisions.md` and in the README status row, which is why this file opens at stage 09 with no back sections: writing them now would be reconstruction, and a reconstructed log is worth less than an admitted gap.

---

# Stage 10, Responsive

The promise of this stage is **asymmetric**, unlike the two before it. A refactor at 08 and 09 moved nothing anywhere. A width stage moves the wide rendering **on purpose** and must move the narrow one **not at all**, and a single total hides exactly the number that matters. Every measurement below is reported per viewport for that reason.

## 1. What the census found before anything was written

Three distinct width values existed in a query anywhere in this project, and not one of them was a decision: **900px** on 29 rules, **1560px** on 3, **1400px** on 2. All literals, all in `px`, none named, none in a token, each written where a defect had been found. The rule that made the census come first is narrow and load bearing: a fourth number written on top of three unnoticed ones gives a product where none of them is a decision.

**Zero queries in a screen file, before and after.** That is inherited rather than earned, from stage 07 folding three stylesheets into one and stage 08 moving every screen onto `system/index.css`, and it is written down as a rule at this stage because stage 12 builds twenty screens at once.

## 2. Defects

| # | Class | Where | What | Found by | Status |
|---|---|---|---|---|---|
| 1 | breaks between the points | every screen carrying a queue, **at every width from 910 to 1200** | **The split had an arithmetic minimum nobody had added up.** The queue row's seven tracks need 646px, the pane's floor is 320 and this case study's panel takes 236, so the split cannot exist below about 1200. The point stood at 900. For 290 pixels of width the product rendered a split whose row did not fit its own column and whose cells ran past the edge, **and it had done so since stage 04** | the width sweep, on its first run | fixed: the point moved to 1280, which is the minimum `CLAUDE.md` declares. Below it the single column rendering that stage 04 designed takes over, and it is correct at 1024 in a way the broken split never was |
| 2 | a phone's layout on a desk width | the top bar, **from 320 to 1279** | Two elements claimed a whole line each with `width:100%` the moment the window was narrower than the point, so the bar was **three lines tall** at 1200 as well as at 360 | measurement, after the point moved and made it visible | fixed, and fluidly: the annunciator takes a basis of 22rem and the navigation fills whatever line it lands on. 181px at 360, 116 at 600, 65 at 768, **55 from 1024 up**, and unchanged at 360 to the pixel |
| 3 | a clamp solved for the wrong end | `--size-lg` and `--size-xl`, first draft | The middle terms were solved for 360 rather than for 1280, so the floor stopped winning at about 414px and **the declared minimum rendered at 19.4px instead of 17**. The 360 rendering was identical either way | the second width. It is invisible at the only width the promise is measured on | fixed: both clamps are anchored on the product's own two widths, 1280 and 1920 |
| 4 | a query that cannot be observed | `annun.css` and `z1.css`, `@media (max-width:1400px)` | The annunciator was allowed to wrap below 1400. Measured at every width from 1280 to 2560 the strip is the same height either way, because above 1400 there had never been anything to wrap | the ladder, asked as a question rather than assumed | removed. **A query whose effect cannot be observed is not a breakpoint, it is a decoration on a declaration** |
| 5 | a size where a clamp belonged | `tokens.css`, `row.css`, `row-moved.css`, `@media (max-width:1560px)` | The pane dropped 380 to 320 and two rows gave back four pixels of padding, at a number nobody had named. The pane and the list were competing for a fixed budget and the pane was told to give way once | the ladder | removed. `clamp(22.5rem, 24vw, 34rem)` and two `padding-inline` clamps say the same thing continuously |
| 6 | the width went to the wrong surface | the whole product above 1600 | The pane stopped at 380 and never moved again, so **every pixel above 1560 went to two prose columns inside a scannable row**: the verdict cell measured 34 characters at 1440 and **70 at 1920**, in a row 30 pixels tall, at the width `CLAUDE.md` names as primary | the audit, measured before it was written | fixed: the pane is fluid and the row's two prose tracks take a ceiling in `ch`. The width goes to the surface that is read rather than the one that is scanned |
| 7 | a token with no consumer | `--measure`, since stage 08 | 66ch, carried with the words "0 uses" beside it and a row in the backlog | the audit, looking for a container answer | closed. It caps the four kinds of prose in `base.css`, and it only bites above about 1700 because until this stage nothing could grow that far |
| 8 | the same rule in two places | `case-pane.css` and `base.css` | `.nar{ max-width: 68ch }` in the pattern against `--measure` at 66ch in base: two answers two characters apart | writing the second one | fixed: the pattern's rule is gone and the sentence it stood on moved with the measure |
| 9 | px where rem belonged | the whole primitive level | The type scale, the space scale, every zone height and every width were in `px` from stage 04. At a 16px root they are the same numbers; for a reader who set a larger font a px scale simply ignores the setting, which is how a layout fails WCAG 1.4.4 quietly | the stage's own taxonomy | fixed. The only `px` left in `tokens.css` are the three 1px rules, the 2px focus ring and a print radius: the things that do not scale |
| 10 | an instrument that lost its input | `checks/coverage.mjs` | It reads the deleted `kit.css` out of git as `HEAD:design/kit/kit.css`. Once stage 09 was committed **the deletion went with it** and the path stopped resolving, so the instrument that proves the deletion was safe broke on the commit that made the deletion real | running it | fixed: it asks git which commit last touched the path and reads the version from that commit's parent |
| 11 | a check keyed on a number that moved | `checks/coverage.mjs` again | Every selector is keyed by its media condition, so moving the point turned **56 covered selectors into 56 misses overnight** without a single rule being lost | the same run | fixed with two declared rows rather than by loosening the check: the point's move is a rename, and the rules that became fluid are named one by one with what they are now |
| 12 | a bench that is not the product | `checks/geometry.mjs`, `rec` | The record cell measures 34.06 in the product and 36.25 on its stand page, because the pane is fluid now and the bench is a fixed width box | the geometry check | declared rather than fixed. A bench should be a fixed width; what it means is that a component standing inside the pane can legitimately measure differently there, and `rec` is the only one of the 42 pairs where it shows |

## 3. What the promise measured

| | |
|---|---|
| **at 360** | **0 boxes moved**, over 52 screens. The narrow rendering is the mobile first base and it was not supposed to change |
| at 1440 | 2781 boxes moved, every one of them the audit's own mechanism: the pane wider, the row's prose narrower, the two fluid sizes larger |
| **the width sweep, final** | 2548 readings over 52 screens and 49 widths: **nothing breaks at any width from 360 to 2560.** 24 findings below 360, on 12 screens, all at 320, reported and not counted because the product promises 360 |
| contrast, both corpora | 212 renderings on 53 coloured screens and 352 on 88 stand pages: **0 failures, 0 page errors, 0 horizontal overflow** |
| widths where something broke and no point was near | **every width from 910 to 1200 on every screen carrying a queue.** None now |
| distinct width values in a query | **3 coming in, 1 going out** |
| queries in a screen file | 0, and now a rule rather than a habit |

## 3b. The reader with clean context

A subagent with no history of the project, given the repository and the two rules files, forbidden every critique log and the backlog, and asked to do stage 12's real job: **build three named screens** and answer four questions about each. `log`, the decision log with nothing selected. `amend`, a dialog over a case. `not-found`, one centred message. Three screens with three different rows of the audit, on purpose.

**It returned twenty things it could not work out, and four of them were defects I had made in the last hour.**

| # | What it could not work out | Fixed |
|---|---|---|
| 1 | **`--pane-w` said one thing in the token and another on six pages.** The floor moved from 20rem to 22.5rem when the sweep found the pane was narrower than a phone, and `responsive.md`, `responsive.html`, `z5.html`, `case-pane.html`, `fleet.html` and `scrim.html` all still said 320px. `scrim.html` said a third thing, the pre stage 10 value. **It is the number the log's column width is derived from**, and the reader had to compute it from the token | yes, in all six, and in the geometry check's own comment |
| 2 | **The audit table put the reject family in two rows and lost the five log screens.** It claimed 62 while covering 57 and double counting 6, and row 5 said eleven and listed twelve | yes. The categories underneath were produced by a browser reading the zones of every grey screen and they were right: what was wrong was the **hand written list of names beside the count** rather than out of it |
| 3 | **The reader was asked to build the log and could not find its row**, which is how the row above was found | yes, the same fix |
| 4 | The only blank cell in the audit was `not-found`'s "which job" | yes: none, and that is the point. It is the screen a job takes you to when the job has already failed |
| 5 | Whether the 236px documentation panel is part of the width budget: the arithmetic counts it, `base.css` calls it not product | yes, named on `responsive.html`. The product's own split fits from about 1000; the point is set for the artefact as published, because that is the thing anybody can open |
| 6 to 9 | **`amend` is a dialog in one document and a case screen in four others**, and whether its scrim is `--desk-only` decides whether the screen exists below 1280 at all | not fixed, and it should not be here: it is a question about the flow rather than about width. Four rows in `backlog.md`, with the node that owns the answer |
| 10 to 20 | The log's foot, `--row-tracks-log` with no narrow value, the scope bar going while the readout keeps claiming a scope, `not-found`'s markup being declared out of the system without ever being enumerated | the first three are rows in `backlog.md`. The last is a real inconsistency in two component files, attributing the same "eleven one-off classes" to two different nodes, and it predates this stage |

**Its second list contained no misreading of anything this stage decided.** It worked out the one point and its reason, both widths of all three screens, which of the eleven files the point fires in on each, what every component does, and the whole of what a screen file may not contain, including three things the rules only imply. It also reached a conclusion the artefacts had not: that `not-found` should be built out of `outage` rather than the eleven one-off classes, **and that doing so makes the audit's own "same, nothing" verdict for that screen wrong the moment it is built.** That is a better reading of this system's rules than the row it corrects.

## 4. The contract as a checklist

The third instrument. Both passes above read what **exists**, so neither can see a step that never happened.

| Contract line | Done | Note |
|---|---|---|
| Census before audit, and the headline number named | yes | Three distinct width values, listed with their uses and their corpora. The census came first precisely so that a fourth would not be written on top of them |
| The audit covers the whole product | yes | All 62 grey screens in nine categories, one verdict each, and the mechanism behind the 39 "wider" rows was measured before it was written |
| Every "new behaviour" row carries a job | not applicable | There are none, and the reason is named: this product has been split-view since stage 03b |
| Two points at most, in `rem`, each with its reason | **one**, and it is said out loud | The ceiling is two and this is not a quota. Two of the three original numbers had a fluid answer, so writing a second point would have been writing a number the ladder had already refused |
| No name says a device | yes | `--bp-split-panes`. `--bp-tablet` and `--bp-desktop` are named as forbidden in the token's own comment |
| The number of columns is not a token | yes, and there is no grid | This product has no card grid at all: the queue and the fleet are rows and the log is a table. `--grid-col-min` and `--grid-gap` were **not** written, because a token with no consumer fails this system's own idle control |
| Type is fluid through `clamp()`, never switched at a point | yes | Two of five sizes, both anchored on 1280 and 1920, both with a `rem` addend in the middle term. `typography.html` rebuilt |
| The floor of each clamp equals the stage 08 scale | yes | Verified at 360 and at 1280: 17px and 21px exactly |
| No adaptive `px` left | yes | The only `px` in `tokens.css` are three 1px rules, the 2px focus ring and a print radius |
| Every query in the system gives the registered number | yes | 29 queries, all `max-width:1279.98px`, counted by search |
| No query in a screen file, and the rule written in two places | yes | Zero before and after; the rule is in `architecture.md` and in `design/system/CLAUDE.md` |
| `container-type` declared by whoever places the component | not applicable, and said out loud | No container query was needed. The row's problem was a measure, and a track carries its own ceiling in `ch`. There is no `@container` in `design/system/`, which also means there is none that silently never fires |
| The shell resolved by the fork, one carrier at any width | yes, form C | Three items, no permanent second level, no screen taking side space. Verified by computed style at 49 widths, on screens that have a shell and on the seven that do not |
| The width sweep run, chasm widths named | yes | 2548 readings over 52 screens and 49 widths. The chasm was every width from 910 to 1200 |
| Zero difference at 360, every difference above explained | yes | **0 boxes at 360** over 52 screens; 2762 at 1440, all of them the audit's own mechanism |
| The inventory column filled on every row, each "does not adapt" with a reason | yes | 73 rows: 39 fluid, 21 the point, 11 do not adapt, 2 measure their container |
| "Behaviour at width" only on components that adapt | yes | 24 pages. The other 49 get nothing, because an empty note on 49 pages is noise |
| `wireframes/` unchanged | yes | Read as the audit corpus and not touched |
| The roadmap flag and the README row | yes | |

**One line is answered "not applicable" three times and each one is a real answer rather than a skipped step:** there is no new behaviour, there is no grid, and there is no container query. Two of the three were the expected shape of this stage and the product turned out not to have the problem they solve.

**And one thing this stage did that the contract does not ask for.** The sweep was written to fail on anything at any width, and it reported the five sign in states and the two full outage states as defects for having no navigation carrier. They have no shell at all, by usage rule R5. **An instrument that is red about a promise nobody made gets ignored about the promises somebody did make**, so it knows about the shell now, and it reports anything below the declared minimum of 360 separately rather than counting it.

---

# Stage 09, Design System

Two taxonomies, kept apart on purpose. **Defects** are things that are wrong in an artefact. **The contract checklist** is things that never happened, and no instrument that reads what exists can see one: a step that was skipped is absent from every file and every page.

## 1. Defects

Four passes, and the column says which found each. A finding that did not survive verification against the current file is kept with the reason rather than deleted, because an unverified finding removed silently is indistinguishable from one that was never made.

| # | Class | Where | What | Found by | Status |
|---|---|---|---|---|---|
| 1 | pattern with its own paint | `patterns/case-pane.css` | Seven declarations carrying `--rule-hair`, `--text-secondary`, `--text-primary` and two families, in the two rules taken from `places.css`. **The level's defining rule, broken in the level's own file**, under a header saying the opposite | audit | fixed: `.sa-fresh` and `.sa-route` went back to `places.css`, and the header now says the test is checked rather than promised |
| 2 | the same rule in two places | `components/pane-head.css` and `components/z5.css` | `.pane-head--standalone h1` and `.z5.is-standalone .pane-head h1` were both live and both correct. **The second won on specificity, so the first looked like it was working.** The next edit would have landed on one of them | audit, on the extraction | fixed: the component's own class keeps it, plus the one declaration the duplicate had that it did not. The dead rule went with the duplicate |
| 3 | a rule doing two jobs | `components/z5.css` | `.z5{ display:none }` at 900 hid the fleet at rest AND the desk only case pane of the log and shift screens, on one line, for two unrelated reasons | the extraction | fixed: two rules, one per pattern, each naming its own reason. 102 renderings say the result is identical |
| 4 | usage rule broken by the product | 16 coloured screens, 21 grey | **No `h1` at all at 360.** The heading is the queue readout, the readout stands in the list column, and at 360 a case screen hides that column | R11 in `checks/rules.mjs` | open, in `backlog.md` with every screen named. Stage 05 found the contradiction underneath it and could not see this: the consequence is a computed style at one viewport |
| 5 | usage rule broken by the product | `design/escalate.html` at 360 | **A dialog pinned to the viewport over a pane still rendered behind it.** Design principle 5 forbids an overlay that hides the evidence being ruled on | R3, on the first screen built out of the system | fixed on the composition: `z45.css` stops rendering the pane at 360 while a live scrim is over it. `reject` had solved the same thing by dropping its scrim, and escalate cannot, because escalating from a phone is the product's one mobile scenario |
| 6 | an instrument reporting a false pass | `checks/rules.mjs`, R3 | It compared two rectangles at scroll zero, so a fixed dialog and a pane below the fold read as clear of each other. **The pane passed under the dialog the moment anybody scrolled** | verifying a pass that looked too good | fixed: a fixed overlay is measured across the columns rather than the rows. Then it caught defect 5 |
| 7 | an instrument not measuring its own rule | `checks/rules.mjs`, R10 | It asked whether `.fleet-more` sat outside the pane and never asked about `.fleet`, and never asked about a navigation item at all, **which is the half the rule is named after.** It reported held on 10 screens while testing neither | audit | fixed: it reads both classes and both corpora's forms of the global navigation. It now runs on 16 screens rather than 10 |
| 8 | a counter counting the wrong corpus | `checks/compose.mjs` | It read `wireframes/overview.html`, the contents page of the grey corpus, as a screen. Every total was one too high and the panel's own furniture entered the composition table | audit | fixed. 104 distinct compositions over 62 pages, not 123 over 63. The four patterns and their counts did not change |
| 9 | a declared list with nothing in it | `checks/coverage.mjs` | A rename row that could never fire: an earlier row rewrote its prefix first, and its target no longer existed in any file | audit | fixed: removed. A row that never fires is the defect this file exists to find |
| 10 | documentation that lies | `design/kit/z4.html` | It documented `.z4--log` and `.z4--shift` as live modifiers with instance counts, and said "the five modifiers below", after both had left for the pattern level | audit | fixed: three modifiers, and a paragraph saying where the other two went and why |
| 11 | documentation that lies | `DESIGN.md` section 8 | Three claims stale since stage 07: no two level token split, component anatomy in `design/kit/kit.css`, and no light theme. The split exists, the file is deleted, and the theme has been a property of the token level since stage 08 | the contract read | fixed, and each correction says what was true when it was written |
| 12 | a rule with a source that does not hold | `architecture.md`, R11 | It pointed at `backlog.md` for the open item, and `backlog.md` had no such row. **A forward reference to a record that does not exist reads exactly like a record** | audit | fixed: the row exists, with all eighteen screens named |
| 13 | two documents disagreeing | `architecture.md` and `architecture.html` | The rendered table dropped `qfoot` from R1 and `scrim` from R8, and both of those pages carry a Limits block naming exactly those rules. On the rendered page two blocks pointed back at rules that disowned them | audit | fixed both, and the column now names patterns as well as components |
| 14 | a count that disagreed with itself | `architecture.md`, `patterns.html`, `inventory.md`, `case-pane.css` | Four documents said twelve moved rules, eleven, and eight. The real number is fourteen across four files, nine of them in one | audit, then a count of the rule blocks | fixed everywhere |
| 15 | a rule restated as a different rule | `toast.html`, `z6.html` | The Limits blocks read "shows three notices at the desk and one at 360" where the rule is a **cap**. `rules.mjs` implements a cap | audit | fixed: "at most" in both places |
| 16 | dead code | `wireframes/escalate.html` and two siblings | `.esc-first` is declared in a page local style block on three screens and worn by no element on any of them | building the screen | not fixed, and cannot be: `wireframes/` is frozen. Recorded in `backlog.md`, and it proves stage 08 was right to drop the rule rather than lucky |
| 17 | an inline declaration on a product screen | `design/entry-gone.html` | `style="margin:var(--s2) 0 0"`, kept alive by a compatibility token in `tokens.css` whose own comment says stage 08 step 6 removes it | the contract read | fixed: it had an exact home already, `.wrapline` in `places.css`, at the same value. No pixel moved |
| 18 | an inline declaration on a product screen | `queue-streaming.html`, `queue-empty.html` | The other two of the same three | the contract read | open, in `backlog.md`. Each is a one instance value, and a variant on one instance breaks the rule that one use is not a role |
| 19 | a grid track sized by its content | `design/kit/_page.css` | The two halves of the theme bench grew to 1776px on `queue-list.html` and pushed the page sideways at 1440, because a grid track is at least its min content and a pattern's min content is a seven track row | the contrast sweep, which measures horizontal overflow | fixed, scoped to benches that hold a stage so the other 73 component pages keep the sizing they were measured with |

### The mechanical audit, and its six best findings

A read-only pass over the whole system and both corpora, given the taxonomy as a checklist. It returned 17 findings, and these six were things no other instrument here looks at.

| # | Class | Where | What | Status |
|---|---|---|---|---|
| 20 | a value that resolves to nothing | `design/_nav.js`, 18 references | **The design panel on all 53 coloured screens read five tokens that do not exist.** `--color-ground`, `--color-text`, `--color-text-dim`, `--color-accent`, `--color-rule` and `--color-edge` are stage 06 DRAFT names: they live in `DESIGN-artifacts.md` and were never declared in any stylesheet the product links. The panel's ground computed to `rgba(0,0,0,0)` and every link in it took the inherited primary ink, so the current item, the muted items and the rules were one colour | fixed: they read the semantic roles and the `--nav-*` bridges, which had existed in `tokens.css` the whole time, declared for exactly this and read by nothing |
| 21 | a state without a pair in the theme | `tokens.css`, nine tokens | **Four composites and five bridges were declared only in the dark block.** `var()` resolves where it is written, so an expression that reads a role is not paired by the role's pair: `--focus-ring` computed to `2px solid #d29c3f` in a light subtree, the dark accent, which the comment five lines above `--color-focus` says is 2.29 on the light page and would fail 1.4.11. **The defect that comment warns about was present one level above the token it warns about** | fixed: all nine declared in both blocks and measured. `--bg-scrim` had been found and fixed for this exact reason at stage 08 and the composites were beside it and were not looked at |
| 22 | a declared list with empty cells | `docs/inventory.md` | The build register held **98 rows against a register of 73**. Nineteen organisms were listed as a plan before round 3, with empty State and Built columns and no link, and then listed again as they were finished | fixed: 73 rows, and the header now says the register is 73 rather than sixty two |
| 23 | documentation that lies | `row-moved.html` twice, `inventory.md` once | Three documents said the handover line has no states, no hover and no href. **Its own CSS says the first reading had it wrong**, it writes hover and active, and eighteen instances on three coloured screens are anchors | fixed in all three, and what survived the correction is named: there is no SELECTED state, and that is still the real difference from `row` |
| 24 | a class declared nowhere | `claim--against`, 41 pages | Written on 19 coloured screens and 22 grey ones, listed in the register as a variant beside `claim--absence`, and **never declared in any stylesheet at any stage**. It has drawn nothing since stage 04 | recorded, not drawn. What contradicting evidence should look like is a question about attribute A2's closed sets, and a stage forbidden to draw is the wrong place to answer it. The register is corrected and the row is in `backlog.md` |
| 25 | a claim that ages | `scrim.css`, `places.css`, `tomb.html`, `fleet.html`, `z4.css`, `DESIGN.md` | Six sentences that were true when written and false when read: a fill "never seen on a coloured screen" that stands on seven, a registered organism named as a place with no page, a page saying "no variants" beside a variant on a screen, a pattern claiming to be the only one whose counts match, a header saying five modifiers change the children two lines above a rule on the host, and a document pointing at a stylesheet deleted a stage ago | all six fixed, each as a correction that says what was true when it was written rather than as a silent overwrite |

### The one I did to myself, and the instrument it bought

| # | Class | Where | What | Status |
|---|---|---|---|---|
| 26 | an unterminated comment | `tokens.css` | Fixing finding 10 above, an edit to a comment **dropped its terminator**. The comment swallowed two declarations and the closing brace of the semantic block, so everything after it became nested inside that block. Two media queries then read `:root` as a DESCENDANT of the root, which nothing can be, and **both of the system's responsive primitives went dead**: the detail pane stopped narrowing below 1560 and the queue row stopped collapsing to one column at 360 | fixed, and it is the reason `checks/syntax.mjs` exists |

**Every other instrument passed while it was broken**, and that is the whole argument for the twelfth one. The contrast sweep passed, because nothing about colour changed. The overflow check passed, because a row that is suddenly 646px wide sits inside a scroll container and clips rather than pushing the page. The usage rules passed, because none of the eleven is about a track. The comparison against the pre-stage baseline passed, because it hides the panel and reads the product's boxes and at 1440 they were unchanged. **It was found by counting braces**, and the instrument that now counts them is thirty lines long. The defects worth an instrument are usually not the ones worth a clever one.

## 1b. The reader with clean context

The fourth instrument, and the only one that measures what this stage exists for. A subagent with no history of the project, given the repository plus the two rules files and forbidden every critique log, every decision record and the backlog, and asked to do the next stage's real job: **build the decision log with nothing selected**, out of this system, and say what to take, what is forbidden, and how to add what is missing.

**Its second list is the one that counts.** Where it concluded something other than what the artefacts meant, that is the defect, and it weighs triple, because it is the only reader who does not already know the answer.

**Twelve things it could not work out, and nine were real.** Each is a defect of the artefacts rather than of the reader.

| # | What it could not work out | Where it looked | Fixed |
|---|---|---|---|
| 1 | **What the pane holds on the log with nothing selected.** The fleet page says "whenever the pane has no case to show" and then lists only queue states. R7 forbids an `empty`. So the rules said what it may not do and no page said what it should | `fleet.html`, `case-pane.html` | yes, and this was the most useful finding of the pass. The log at rest is the **case pane carrying what the view covers**, not the fleet: a `covers` list and two blocks under a head reading "what this view covers". Both pages now say it, and the fleet's says why the fleet would be the wrong answer there |
| 2 | Which component carries the log's narrow only line, and what it says | `queue-list.css` keeps a rule for it | no. It is a microcopy question and the string does not exist yet, so answering it here would be inventing product copy. It belongs to whoever writes the log screen |
| 3 | **What a NEW screen should do about R11**, given that the rule is recorded as open with the existing screens named | `architecture.html` | yes. "Open" is not an instruction: ship the same structure the sixteen have, add the screen to the backlog row, do not invent a local cure |
| 4 | What the log's scope bar and keyboard strip contain | `queue-list.html`, `chip.html`, `qfoot.html` | no, same reason as 2 |
| 5 | **Where a screen of the product goes and what it is called.** The folder tree shows `design/system/` and `design/kit/` and no third thing, and the screens are flat files beside them | `architecture.html` | yes. Contributing now has a section for a screen: the path, the one stylesheet, the panel, the shell, the registry, and the acceptance run |
| 6 | The vocabulary of the shell's three parameters. One example was given and no lists | `z1.html` | yes. All three parameters with every value each takes, and what happens to a screen that draws no shell |
| 7 | **`.screen` or `.wf-screen`.** The page said the rename was ruled and "step 6 executes it", in the present tense, two stages after it was executed | `screen.html` | yes, on the page and in the component's own header. All 53 coloured screens carry `.screen`, the grey corpus keeps the old name because it is frozen, and that asymmetry is named |
| 8 | **Whether a screen writes `z4 queue-list queue-list--log` or drops one of the three.** The copyable markup showed only the base | `queue-list.html` | yes. Both forms are copyable now, with a line saying that the three classes are three levels |
| 9 | **"Stays markup" was never defined.** A composition on two screens stays markup, a screen may carry no style, and nothing said what markup with no file behind it is | `patterns.html` | yes. It means written out of the classes that already exist, with no file describing the arrangement, and it licenses nothing on a screen |
| 10 | **`places.css` had no contribution route.** Contributing lists four kinds of new thing and places is a fifth | `architecture.html` vs `places.css` | yes. It has its own section, with the one question that decides it and the reason it gets no page |
| 11 | **Whether a new screen has to move the pattern counts**, which are hard coded in four places | `patterns.html` | yes. It does, and the two commands that recount are named |
| 12 | Whether a product screen may carry `data-theme`, and where `prefers-color-scheme` is | `why.html`, `tokens.css` | yes. A screen carries no theme code at all, the switch lives on this stand, and there is no `prefers-color-scheme` on purpose: the ground is a decision about a room at 03:00 rather than about an operating system setting |

**Its "worked out as" list contained no misreading.** It took both patterns correctly, named the log as the queue list's variant from the right sentence, chose the fleet for the pane and said out loud that it was doing so against a gap rather than a statement, walked all eleven rules and gave a concrete check for each, and reproduced the five things and the two that get skipped with their reason. It also got the theme model right from `base.css` rather than from any page that explains it. **That is the result the class is for**, and the nine gaps above are what it cost to find out.

## 2. The contract as a checklist

The third instrument. Both passes above read what **exists**, so neither can see a step that never happened: it is absent from every file and every page at once. This table walks the stage's own contract line by line.

| Contract line | Done | Note |
|---|---|---|
| Entry gate: every named input exists | **partly** | Three were missing and named rather than assumed: `design/kit/docs/critique.md` (this file, created here), `design/kit/pixel-proof.html` (never created, because the user forbade screenshots in the system at stage 08; the evidence is live instruments instead) and `research/docs/cjm-to-be.md` (the CJM stage is out of track by decision) |
| Counter runs on the grey corpus, proof on colour | yes | `compose.mjs` reads `wireframes/`, 62 pages. `refactor.mjs` and `rules.mjs design` read the colour corpus. Both numbers are on every pattern page and neither is passed off as the other |
| A pattern needs three named screens | yes | 38, 7, 38 and 10. The smallest is more than three times the threshold |
| Six candidates on two screens listed, not forgotten | yes | `patterns.html`, the last section |
| A pattern writes no new style | yes | Fourteen rules, all cut from three component files, each named in the file that received it. Checked again after defect 1 |
| `@import` of patterns after components | yes | `index.css`, after `shell.css` and before `places.css` |
| Coloured screens moved onto the patterns, pixel proof | yes | 38 screens, 102 renderings at 1440 and 360, **0 tree shape changes and 0 boxes moved** |
| A pattern with no coloured instance named out loud | **not applicable, and said so** | All four already stand in colour. `patterns.html` says this explicitly rather than leaving the reader to notice |
| Prohibitions derived by the same pass | yes | The same counter read backwards: the maximum instances of every class on any one screen |
| Every rule has a filled source column | yes | Eleven rules, eleven sources, each verified against the file it cites by an independent read |
| The stage 04 convention with no reader is taken here | yes | "Exactly one primary action per screen" became R1, **and the counter corrected it**: it is per layer, and the eight screens the stage 04 wording would have failed are a modal over a pane |
| Limits subsection on every component a rule names | yes | 22 component pages plus the four pattern pages, each linking back to the section |
| `patterns.html` plus a page per pattern | yes | Five pages, and a Patterns group in the registry after Organisms |
| `why.html` exists, carries the stand panel, is registered | yes | Second in the System group, `done:true` in the root registry |
| `references.md` read and used | yes | Its measured finding is on `why.html`: eight of ten style results for a dense operator console were dark plus an electric blue accent, which is the reflex the five attributes were written against |
| Growth rule in four places | yes | `architecture.md` section 11 and its page, root `CLAUDE.md` with the old wording replaced rather than doubled, `design/system/CLAUDE.md` at nine lines, `DESIGN.md` section 9 |
| Next screen built purely from the system | yes | `design/escalate.html`, the fourth verdict and the only one with no coloured rendering. No style block, no inline declaration, no component added on the way |
| Backlog not empty after the test | yes | Four rows from the screen, four from the rules, and the file says which pass opened each |
| Rules checked by name on the new screen | yes | Eleven rules, eight applicable, seven held and one broke. The one that broke was fixed on the composition and is defect 5 |
| IA untouched | yes, deliberately | The screen came from a wireframe that already carries node 4.6, so the standard branch applies and the three IA surfaces are not touched. Said out loud rather than skipped quietly |
| `wireframes/` unchanged | yes | `git status` on the folder is empty |
| No folder moved, no `git mv` | yes | `design/system/` was already the package. `patterns/` is a second shelf beside `components/` |
| Critique log written to `docs/critique.md` | yes | The file the stage 07 contract named and nobody created. It opens at stage 09 with no back sections, because writing them now would be reconstruction |
| `/impeccable` detector run | yes | 0 anti-patterns across `design/system/`, the five new stand pages and the new screen. Its one advisory counted BEM modifiers as em dashes, which is a false positive, and checking it found the 129 real ones |
| README status and the roadmap flag | yes | Done, with a section linking the showcase, and `wip` cleared from the roadmap entry |

**One line of the contract is answered "no".** The pack asks for a section of stage 09 on `design/kit/pixel-proof.html`. That page does not exist and will not: at stage 08 the user ruled that nothing in the design system may be a screenshot, and the pixel proof became live instruments instead. The stage's evidence is `checks/refactor.mjs`, which compares a rendered tree against a copy of the tree taken before the first edit and reports which element moved rather than how many pixels changed. The deviation is recorded here and on `overview.html` rather than quietly satisfied by renaming something.

## 3. What the instruments say now

| Instrument | Result |
|---|---|
| `refactor.mjs` | 102 renderings, 51 screens, both viewports: **0 tree shape changes, 0 boxes moved** |
| `rules.mjs design` | 11 rules over 52 screens at both viewports: **1 broken, and it is R11 on 17 screens** including the one this stage built, open in the backlog with a reason and with an instruction for the next screen |
| `rules.mjs` (grey) | 11 rules over 62 screens: **2 broken**, R11 on 21 and R3 on the four uncoloured escalate states |
| `contrast.mjs` | every text node, both themes, both viewports: **0 failures, 0 page errors, 0 horizontal overflow**, on 87 stand pages and again on the 53 coloured screens. Generalised at this stage to take a folder: it was hard wired to the stand, and the product screens were being swept by a script rewritten from scratch each time somebody remembered to |
| `coverage.mjs` | 367 selectors of the deleted `kit.css`: **0 declared nowhere in the system** |
| `compose.mjs` | 104 distinct compositions over 62 grey pages, 68 on two screens or more, 54 on three |
| `geometry.mjs` | 42 pairs of component against product: **0 unexplained** |
| `themes.mjs` | four failure modes in both themes: **0 failures**, two declared ramp collapses |
| `icons.mjs` | masks against their source, character for character: **0 differences** |
| `syntax.mjs` | 83 stylesheets: **every comment terminates and every block closes**. Written at this stage because a dropped terminator got past the other eleven |
