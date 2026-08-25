# Critique log of the design system

One file, one section per stage. It exists because the alternative is the chat: a session ends, the critique starts from nothing, and the summary of what changed has to be invented again from the diff.

**This file was named by the stage 07 contract and never created.** Stage 09 is the first stage to write into it, and that absence is the first row of its own contract checklist below rather than a thing quietly fixed. Stages 07 and 08 kept their critique in `docs/decisions.md` and in the README status row, which is why this file opens at stage 09 with no back sections: writing them now would be reconstruction, and a reconstructed log is worth less than an admitted gap.

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
