# Rollout

Stage 12. The stage that makes no drawings: it dresses what is already drawn in what is already built. Fifty two of the product's sixty two pages have been in colour since stages 07 and 09; ten are still grey, and this file is how they arrive without ten different people inventing ten different products.

**The rule the whole stage stands on: a rollout multiplies, it does not decide.** Every open row that reaches the fan out is answered separately by every agent that meets it, and twenty plausible answers look correct on twenty screens and read as twenty different systems in one product. So section 3 closes the debts before section 4 starts, and section 5 is written once and passed verbatim.

**One exception to the language rule, taken the other way round.** The pack keeps the contract in the language of the session because the contract is text for agents. Every document the contract points at is in English, and so is every file the agents write, so the contract is in English too: a Ukrainian instruction addressing English sources is exactly the seam the rule exists to prevent.

---

## 1. The estimate, and it covers the whole product

Not only what is still grey. The column that matters for two later stages is **node**: the link between a screen and its IA specification is written in the stage 04 registry inside a JavaScript array, and this is the one place it is readable. Stage 13 reads it too.

| Screen | Node | Flow | Scope | Pages | State | Grey original |
|---|---|---|---|---|---|---|
| `queue` | **3.1** | 1 · rule on the case | MVP | 12 | in colour | yes |
| `case` | **4.1** | 1 · rule on the case | MVP | 8 | in colour | yes |
| `reject` | **4.4** | 1 · rule on the case | MVP | 6 | in colour | yes |
| `escalate` | **4.6** | 1 · rule on the case | MVP | 4 | **1 in colour, 3 roll out here** | yes |
| `log` | **5.1** | 1 · rule on the case | MVP | 5 | **rolls out here** | yes |
| `entry` | **5.4** | 1 · rule on the case | MVP | 5 | in colour | yes |
| `case-standalone` | **4.2** | 1 · rule on the case | MVP | 3 | in colour | yes |
| `shift` | **2.1** | 2 · take and hand off a shift | MVP | 7 | in colour | yes |
| `case-history` | **5.6** | 3 · answer for it later | MVP | 2 | in colour | yes |
| `index` | **1.1** | 4 · get in | MVP | 5 | in colour | yes |
| `unavailable` | **8.2** | 5 · when something is wrong | MVP | 3 | in colour | yes |
| `not-found` | **8.1** | 5 · when something is wrong | MVP | 1 | **rolls out here** | yes |
| `keyboard` | **0.5** | 5 · when something is wrong | MVP | 1 | **rolls out here** | yes |

**Screens left: 4** (`escalate` partly, `log`, `not-found`, `keyboard`). **Pages left: 10. Of them in the MVP scope: 10.**

**K equals N, so there is one round of batches and no second one.** Every page this stage builds is in the MVP, said out loud because the pack allows a deferred round and there is nothing to defer into it.

### The six nodes with no grey original, and they are not a rollout

| Node | Screen | Why it is not here |
|---|---|---|
| **6.1** | Client summary draft | LATER at stage 03a. No wireframe was ever drawn |
| **6.2** | Editing and sending | the same |
| **7.1** | Tenant detail | the same, and cluster 7 is the one that brings a fourth navigation item |
| **7.2** | Autonomy grants | the same |
| **7.3** | Grant change | the same |
| **8.3** | Permission denied | LATER, and the only one of the six with an IA specification written |

A rollout dresses what exists. Drawing a wireframe for any of these means unfreezing `wireframes/`, frozen since stage 05, which is a decision above this stage. **They are work outside the rollout, not work after the handoff**, and stage 13 takes one of them for its own exam.

---

## 2. The batches, and they are cut by flow

Three batches, cut so that screens sharing a pattern, a set of states and a set of fixtures are built by one agent with one reading of them.

| # | Pages | Node | The pattern that carries it | Why these together |
|---|---|---|---|---|
| **1** | `escalate-from-expired`, `escalate-no-recipient`, `escalate-write-failed` | 4.6 | `case-pane` under `scrim` + `dialog` | Three states of one dialog whose fourth state is already in colour. **This batch is the contract gate**: it has a finished sibling to be measured against, so a defect that shows up here is a defect of the contract rather than of the screen |
| **2** | `log`, `log-narrowing`, `log-not-found`, `log-selected`, `log-snapshot-gone` | 5.1 | `queue-list--log` + `case-pane` | The whole of node 5.1 in one hand. The five share a row grammar, a scope bar and one set of log fixtures, and split across two agents they would disagree about the timestamps |
| **3** | `keyboard`, `not-found` | 0.5, 8.1 | `dialog--map`; a centred column | Neither has a list, neither has a pane, and both carry the stage's enrichment: eleven one-off classes on one and six on the other. Put together because they are the batch that will stop and order |

### Canonical data, named once for the whole stage

Derived, not invented: from `ia/docs/pages/reading-conventions.md` section 7, which is the canon, and from the grey screens where the canon does not reach. **Agents read this list and nothing else for fixtures.**

| | |
|---|---|
| **Tenants, and no others** | Larkfield Logistics · Bramber Retail · Meridian Health · Norsk Marine · Halcyon Care · Halden Freight · Aubrey Dental Group |
| **The one case** | **C-4417**, at Larkfield Logistics. Token replay from a new ASN · High · 9 signals · 6 sources over 24h · filed 26m ago · `?as-of=2026-08-22T04:14:05Z` |
| **The people** | **R. Idrissi**, the analyst, Tier 2 · **D. Okonkwo**, the analyst going off · **S. Varga**, SOC lead, the escalation recipient |
| **The shift** | 19:00 to 07:00 UTC. R. Idrissi coming on, D. Okonkwo going off |
| **The queue readout** | **18 waiting**, across 12 of 40 tenants in your scope |
| **The fleet readout** | 40 tenants · acts alone up to **contain network** at 3 · **1** moved down |
| **Larkfield's annunciator** | acts alone up to **contain endpoint** · **34 of 36** accepted, 30 days |
| **The log readout** | **34 entries**, this shift and the one before, across 6 of 40 tenants |
| **The log's EIGHT entries, in order**, and the foot reads `8 of 34 shown, newest first`. It was seven until the critique | `04:41:12` Larkfield Logistics, escalated to S. Varga by R. Idrissi · `04:02:55` Halcyon Care, contained by Clerk inside the tenant's latitude · `03:48:20` **Norsk Marine, ransomware precursor on FS-02, contained by Clerk inside the tenant's latitude** · `02:17:30` Bramber Retail, accepted by R. Idrissi, benign, new admin onboarding · `01:44:09` **Bramber Retail**, rejected by R. Idrissi · `23:12:41` Meridian Health, amended by D. Okonkwo, superseding the entry below · `22:38:16` Meridian Health, rejected by D. Okonkwo, corrected 34m later · `21:05:33` Aubrey Dental Group, accepted by D. Okonkwo. The first four are 2026-08-22, the last three 2026-08-21, all `Z` |
| **AND THIS ROW WAS WRONG UNTIL BATCH 2 READ IT AGAINST THE SCREEN** | It said six entries where there are seven, dropped the Aubrey Dental Group line, and gave the fourth as **Meridian Health rejected by R. Idrissi**. That is not a slip like the other two: it is **word for word the entry the row below forbids**. The queue draws Meridian Health wearing `decided` and `unrecorded`, a verdict by R. Idrissi whose write did not land, and a log entry for it would break the claim the product rests on. A canonical data table is written to stop twenty agents from drifting, and this one would have handed every agent that read it the one fixture that must not exist. Caught by holding the table against the frozen screen, which the contract tells every agent to do and which the person who wrote the table did not |
| **The one gap that must stay a gap** | `queue` shows Meridian Health wearing `decided` and `unrecorded`: the verdict exists and the write did not land, **so there is no log entry for it.** Drawing one would break the claim the product rests on |

---

## 3. The debts, closed before the fan out

Three declared lists have to be empty before an agent is launched, because an open row is not answered once here, it is answered ten times out there.

### `census.md`, a control with no form: **empty**

All eleven rows of section 5 were ruled at stage 08 step 2, and the five forms with no coloured rendering were the eleventh. Verified in the system rather than in the document: `select` reads `input`, `z4--solo` stands in `z4.css`, `dialog--map` and `--width-dialog-wide` in `dialog.css`, and `z5--paper` collapsed into `is-paper`, which stands in three files.

**And the fifth was verified wrongly, which is worth more than the four that were right.** This paragraph first said `block--rcpt` stands in `contact.css`, because a search for the name returned that file. It returns the file's HEADER: the name is in a comment describing the grey markup, and no stylesheet in the system declares it. The ruling was executed by DROPPING the modifier rather than by giving it a form, so the recipient is a plain `block` on all four escalate screens and the form does exist. The claim was right and the evidence for it was not, and **a grep for a name in a folder whose stylesheets carry more prose than rules is not evidence that the name is declared** - which is the same defect the tenth sign of `screens.mjs` was written to avoid, made by the person who wrote it. Found by the first agent of the fan out, on the screen the modifier belongs to.

### `motion.md`, needs a state: **one row, and it is not on this stage's path**

`.doorhelp summary` is the only control in the product with no hover. It stands on the five sign in screens, all of which have been in colour since stage 07, so no agent of this stage meets it. It keeps its owner and its reason.

### `backlog.md`, read row by row

Twelve of the rows have an owner naming this stage. Each is either closed here, closed by measurement, or given a ruling that an agent will not have to invent.

| Row | What the rollout does with it |
|---|---|
| **R11, seventeen screens with no `h1` at 360** | **Closed, and it was the largest thing in the way.** See the section below: it would have grown to twenty three had the fan out started first |
| **Four escalate screens draw a dialog over a pane at 360** | **Closed by measurement, and stage 10 had already closed it.** `.scrim` drops its padding and stretches below the point, and `z5` is not rendered there at all: `rules.mjs` reports R3 held on `escalate.html` at both widths. The three new states copy the sibling and inherit the answer |
| **`rcpt` is not a component and `contact` is the nearest** | **Ruled.** `contact` is the component and keeps its name. The recipient's name at 17px is the better drawing and the backlog already said so. What was genuinely absent is the state below |
| **The recipient has no `is-gone` state** | **Enrichment, entered by the parent.** Section 6 carries the row |
| **`.seek` has no consumer** | **Closed by use.** It stands on `log-not-found`, which is in batch 2 |
| **`--row-tracks-log` has no narrow value** | **Closed by measurement, and it stays unreachable.** `queue-list--log` does not render the list below the point at all, so the seven tracks are never asked for. The row's own condition, a log row rendered somewhere else, does not arise: the third census at step 5 is what proves it |
| **The log at rest has no decision about its foot** | **Ruled: no `pane-foot`.** The three case panes with no foot are cases already ruled on; the log's pane is a view that was never a case, and there is nothing on it to rule on. Both readings ended at the same drawing, and what was missing was the reason |
| **The scope bar goes below the point while the readout still claims a scope** | **Closed by reading the screen rather than the pattern.** The grey `log` already carries a `banner only-narrow` saying the decision log is a desk surface and naming the one thing that does open on a phone. The narrow line the backlog asked for was written at stage 04 and worded at stage 05. The readout's claim stays true, because the scope is still applied |
| **`claim--against` is declared in no stylesheet** | **Ruled: it stays undrawn, and the count is now known.** 19 coloured pages and 22 grey. Attribute A2 spends saturation on two closed sets, and the `tag` inside the claim says `points the other way` in words, which is the cheapest correct thing. Closed by naming |
| **Two inline `style` attributes on two coloured screens** | **Scheduled to step 5, not left open.** No agent may write a `style` attribute, so the fan out cannot multiply this one. What the rollout supplies is the answer to whether a second instance exists, and that is what the third census measures |
| **`div.expand` does not become `details.expand`** | **Not this stage's.** It needs 23 summary sentences, which is microcopy and not markup. The rollout writes `div.expand` like the twenty screens beside it, and the row moves to the handoff |
| **`.qfoot kbd` and `.key` do the same job in two forms** | **Closed here as two jobs, and REVERSED on 2026-08-26; this row is kept as the record of what stage 12 decided rather than as what the product does.** The reason given was that `keyboard` uses `.key` because every key on it is a key you are being taught, while the foot holds a key you could press right now. `qfoot.css` opens by saying the foot of the queue is where the keyboard is TAUGHT, so the line was drawn through the middle of one job. One component now, `key` on a `kbd` element, 307 of them. The ruling is in `backlog.md` |

Nothing else in `backlog.md` stands on this stage's path.

### The one that was in the way: R11

**Seventeen coloured screens had no `h1` at 360**, and the rollout would have added four to six more before anybody noticed. The screens are the eight case states, the six reject states, `queue-decided`, `queue-escalated` and `escalate`. At 360 a case screen does not render the queue column, the readout is the `h1`, and the heading leaves with what carries it.

Underneath it, two node specifications disagreed: `case-file.md` section 7 says "one h1, the case and its client", and nineteen screens made the readout the `h1` and the case an `h2`.

**Ruled in favour of the node, and the rule is measurable rather than editorial: exactly one heading renders at every width, and that one is the `h1`.**

| Where the pane carries | The `h1` is | Screens |
|---|---|---|
| a case | the pane head, and the readout drops to `h2` | the 8 case states, the 6 reject states, `queue-decided`, `queue-escalated` |
| the fleet, a shift, a case history, a log | the readout, unchanged | `queue` and its 10 states, `shift` and its 6, `case-history`, `log` and its states |
| nothing, because the dialog takes the screen at 360 | the dialog title | `escalate` and its three states |
| itself, by permalink | `pane-head--standalone h1`, unchanged | `case-standalone` and its two states |

Three declarations changed and no pixel moved: `.pane-head h2` and `.dialog > header h2` became `:is(h1, h2)`, one rule serving both levels. One value did move, by design: `.readout` had no `margin` of its own and was taking the browser's `0.67em` for an `h1`, which would have become `0.83em` the moment the tag changed. It declares `var(--space-2)` now, **8px against the 8.375 the element was deciding**, which is the whole of the change and is a row in `tokens-audit.md`.

`rules.mjs` over 52 screens at both widths: **104 renderings of R11, nothing broken**, where it was 87 held and 17 broken.

---

## 4. The batch log

Filled in as each batch closes.

| Batch | Pages ordered | Built | Deliberately not | Components first placed in the product |
|---|---|---|---|---|
| 1 | 3 | **3** | 0 | `contact` with `is-gone`, its first coloured rendering outside the outage pages. Nothing else: the escalate family stands entirely on components the queue and the case already wear |
| 2 | 5 | **5** | 0 | **`arriving` outside the queue and the shift**, `seek`, `tomb`, and the log's own row grammar in colour for the first time. No new component: the log is the queue's pattern with a different filling, which is what stage 09 said it was |
| 3 | 2 | **2**, after a stop and a relaunch | 0 | `keyrow`, `key--none`, `miss`, and the first coloured rendering of `select`, which was the one value of `input`'s axis that had never been drawn |

---

## 5. The contract

Every agent of this stage receives the text below **verbatim**, with the five substitutions filled in by the parent. Nothing here is paraphrased per launch: twenty agents given twenty phrasings build twenty products.

```
You are building one or more screens of Harrier in colour, from a system that is already
complete. You are NOT designing. Every pixel you produce comes from design/system/index.css,
and your job is to put the right classes in the right order around the right text.

READ FIRST, ALL OF IT
  wireframes/<your screen>.html        structure, block order, the full set of states
  wireframes/_nav.js                   THE SHELL LIVES HERE, not in the html. The header,
                                       the connection strip and the filter panel are render
                                       functions. A screen assembled from the html alone
                                       comes out with no top bar at all
  wireframes/docs/screens.md           the rows for your screens
  wireframes/docs/conventions.md       what stage 04 fixed as a state and what as a global
  voice/docs/microcopy.md              every interface string, by key
  ia/docs/pages/<your node>.md         title, description, H1, the body of block C
  design/kit/docs/responsive.md        THE ROW FOR YOUR SCREEN in the section 2 table
  design/kit/docs/motion.md            section 5, screen to moments
  design/kit/docs/architecture.md      the Usage rules section, R1 to R11
  design/kit/<component>.html          for every component on your screen: the blocks
                                       When to use and Limits. They are what stops you
                                       reaching for the wrong one
  design/kit/shell.html                the shell's markup
  design/system/CLAUDE.md              ten rules, two of them prohibitions
  <the example screen named below>     one accepted screen, in full

MOMENTS. motion.md section 5 is an index of screen to moments and your screen is in it. If
it is not, derive your moments from the components and patterns standing on your screen, by
the `motion` column of design/kit/docs/inventory.md, and invent none. A component with an
empty `motion` column is not permission to animate, it is a reason to stop and ask.

THE SHELL. Take the header, the connection strip and the footer from shell.html, and the
markup there is ONE markup: the two forms this product shows above and below its point are
the same elements at two widths, not two blocks to choose between. You write two empty
elements and one call:
    <header id="wf-z1"></header>
    <p id="wf-z2"></p>
    <script src="_shell.js"></script>
    <script>WF_SHELL({ current:'<queue|shift|log>', strip:'live', annun:<the object> });</script>
Do not copy a rendered header out of another screen. Twenty copies of a header pass every
grep there is, because the classes are all system classes.

THE PANEL. <aside id="sidebar"></aside>, window.DESIGN_NAV_BASE and the two script tags at
the foot: copy them from the example screen, character for character. The panel lives in the
file you write, so you write it. The registry design/_nav.js is the parent's and you never
touch it.

THE FRAME OF THE FILE
  <!doctype html> · <html lang="en"> · <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">   REQUIRED. Without
    it the 360 measurement at acceptance is void and your screen fails for a reason that is
    not in your file
  <meta name="robots" content="noindex">
  <title> AND NO <meta name="description">. The product does not carry one: every node in
    this IA sits behind authentication and is `noindex`, so stage 03b wrote no SEO block and
    none of the 52 accepted screens has the tag. Asking for it produced a question from the
    first agent of this stage rather than a description, which is the right outcome and a
    line that should not have been in the contract.
  THE TITLE, and the rule is read off the accepted corpus rather than invented: the grey
    original's <title> verbatim, plus `, in colour`. The BASE screen of a family is the one
    exception, because its grey title says `, default` and the coloured one drops that:
    `Escalate, default` becomes `Escalate, in colour`, while `Escalate, nobody on the rota`
    becomes `Escalate, nobody on the rota, in colour`.
  A STATE file carries `<meta name="robots" content="noindex">` like every other page here,
    and it does NOT get an IA node of its own: a node is one screen, and a state is a
    demonstration of it
  <link rel="stylesheet" href="../_nav.css">  then  <link rel="stylesheet" href="system/index.css">
  NO font link, ever. The families are declared inside the system.

NAMING. A state file takes the grey original's suffix exactly: <screen>-<state>.html, one
for one. An invented suffix breaks the registry the parent keeps.

LINKS. Every internal href points at the design/ copy. Nothing in the body of your screen
links wireframes/ - the grey original is reachable from the panel, and the panel is built
by _nav.js rather than by you.

YOU WRITE
  design/<your screen>.html and design/<your screen>-<state>.html. Nothing else.
YOU NEVER WRITE
  design/_nav.js · design/system/** · design/kit/** · voice/docs/** · ia/docs/** ·
  wireframes/** · any screen that is not yours.

FORBIDDEN IN A SCREEN FILE, zero tolerance, nine signs
  @media · transition · animation · @keyframes · a <style> tag · a style attribute ·
  any hex · any px · any font family named outside a token · any class that is not in the
  system.
  ONE EXCEPTION, named in advance: the attributes inside an inline <svg> icon - fill,
  stroke, width, height, viewBox. An icon is inline SVG by the stage 07 decision and it
  arrives with its own numbers. A hex OUTSIDE an <svg> is a defect.
  The navigation layer - the panel's stylesheet and the registry script - is not the
  product's appearance and is taken from the example verbatim. Everything the PRODUCT
  looks like comes from system/index.css and from nowhere else.

HOW YOU BUILD
  structure and block order            from the grey original
  appearance                           from system classes
  a settled composition                CONNECT the pattern, do not rebuild it from parts.
                                       A screen that reassembles queue-list or case-pane
                                       out of components looks identical and gets neither
                                       the width behaviour nor the motion, and nobody sees
                                       that until the window is resized
  width                                the row of responsive.md, read not decided
  motion                               the index of motion.md, read not decided
  interface text                       THE FROZEN GREY SCREEN, and read on for why that
                                       is not the same as microcopy.md. See TEXT below
  SEO copy                             your IA node, VERBATIM. If it contains an em dash
                                       that is a stage 03b defect and not your licence to
                                       edit: changing it desynchronises the screen from the
                                       node, and the gate compares them. Set it as it stands
                                       and hand the line in as a question
  states                               ALL of them from your screens.md row, not only the base

TEXT, AND THE ORDER IS THE OPPOSITE OF WHAT IT LOOKS LIKE. voice/docs/microcopy.md calls
itself "every string in the product, AS IT STOOD BEFORE STAGE 05" in its own first line, and
that is literally true: sections 3 and 4 are the inventory taken at step 1 of that stage, and
everything stage 05 then RULED is held as a delta in section 8, table by table. So a string
looked up by key in the big tables gives you the wording that was replaced.
  The applied text is in the frozen wireframe. `wireframes/` is the output of stage 05 and has
  not moved since, so the grey screen is the corrected copy and the inventory is the draft.
  TAKE THE GREY SCREEN. Use microcopy.md to check that a line exists and to read section 8
  when you want to know why it reads the way it does, never as the source to copy from.
  This is the reverse of what the pack assumes, it was found by the first batch of this stage
  finding six disagreements on three screens and getting all six right, and it is the single
  most expensive thing in this contract to get wrong, because the wrong answer is invisible:
  a screen carrying pre stage 05 wording looks perfectly well written.

IF SOMETHING IS MISSING, YOU STOP
  A component, a variant, a state, a token or a line of text that is not in the system:
  do not draw it, do not reach for something similar, do not leave a hole. Hand in one line:
      what is missing -> on which screen -> in which zone -> what the grey original says
  And do not leave a half assembled file in design/. Delete the draft and hand in the order.
  A half built screen goes into the registry and into the coverage map and reads as done,
  which is worse than a screen that is plainly absent.

WHAT YOU CHECK YOURSELF, and it is only the mechanical half
  grep your own files for the nine forbidden signs above, plus any class that is not
  declared anywhere in design/system/. THREE NAMES WILL COME BACK AND ALL THREE ARE
  DECLARED EXEMPTIONS, so do not chase them and do not report them as findings:
  `queue-list`, the pattern's own name on the host, whose every rule is conditioned
  on the `--log` filling so the base declares nothing; `rows--log`, a hook kept
  deliberately; and `claim--against`, ruled at this stage to stay undrawn. Each
  carries its reason in the file that owns it and in design/kit/checks/screens.mjs. Acceptance - the browser, both themes, the measured
  360, the critique - is the parent's and you do not run it.

WHAT YOU HAND IN
  1. the files you wrote
  2. a roll call of your screens and states, as a number
  3. orders on the system, one line each
  4. THE QUESTIONS YOU HAD TO ASK, or had to guess at
  5. any line of text you could not find in microcopy.md
Items 4 and 5 are the most valuable things you produce and the easiest to skip. An agent
that guessed silently looks more efficient than one that asked, and costs more.
```

### The five substitutions, filled in before every launch

| # | What | Where it comes from |
|---|---|---|
| 1 | the names of the screens and states | section 2 above |
| 2 | **the IA node** and the path `ia/docs/pages/<node>.md` | the estimate in section 1. It is the only readable map of screen to node |
| 3 | the canonical data, verbatim | section 2 above |
| 4 | **the example screen, one for the whole stage: `design/escalate.html`** | it is the one screen in the product **assembled from the system rather than migrated into it**, at stage 09, so its frame carries no inheritance from stage 07. It also carries all four things an agent has to copy: the page frame, the shell call, the panel, and a pattern with a dialog over it. Two examples would make two templates |
| 5 | the language for `lang`: **English** | declared once on `research.html` and named in no file an agent reads |

---

## 6. The journal of enrichment

Every row carries the column that matters more than the component: **why the inventory that was built from the whole product did not see it.**

| What was added | Ordered by | Level | Why the stage 07 and 08 inventory missed it |
|---|---|---|---|
| **`contact.is-gone`**, one domain state: the boundary goes dashed, the name is struck and drops to `--text-secondary`, and the name STAYS | `escalate-no-recipient`, batch 1. Named in `backlog.md` since stage 09 and unplaceable until the screen existed | a state on an existing molecule, so no new `@import` and no new registry row: css, the component page's States block, the variants table, the inventory row | **The census read the whole grey corpus and still could not count it.** The four screens that draw a recipient who left the rota are the escalate family, and all four were grey, so the only rendering of `contact` the count could see was the outage page's duty line, which is a staffed number and is never gone. A component whose every instance in the sample is the calm case gets documented as having no states, correctly, from evidence that is complete and unrepresentative |
| **Two component headers corrected, and a class kept rather than removed.** `tomb.css` named `log-snapshot-gone` as the one screen carrying `tomb--all`; the instance is on `entry-beyond-retention`, and `log-snapshot-gone` carries a plain `tomb`. `rows.css` said `.rows--log` survives on two screens; it is seven | batch 2, which was the first reader with both screens in front of it | documentation, not code | **A count written inside prose ages the moment the sample grows**, and both of these were written when the log was grey. The first is worse than a stale count: it names the wrong screen, so a reader looking for the difference between a snapshot that died and a window that never reached back would have gone to the wrong page to find it |
| **Twelve textareas and twelve labels dressed, on four screens** | the census instrument, at step 5, and confirmed by batch 2 as a question | markup on four accepted screens, no system change | **`input.css` is class based and the escalate family wrote bare elements**, so its three prompts had been rendering as raw browser controls, monospace at 13.3px with the user agent's grey border, inside a dark dialog, **since stage 09**. It survived stages 09, 10 and 11 and every instrument in the folder: contrast passes because the browser's own colours happen to clear the floor, geometry compares stand pairs, the usage rules do not look at fields, and **a class that is missing is not a forbidden sign**, so the file reading instrument could not see it either. The stage's own example screen was one of the four |
| **`keyrow`**, a new molecule with five zones and one variant, plus its page, its registry row, its `@import` in the row family and its inventory row | batch 3, node 0.5, which stopped with 10 undeclared classes and built nothing | molecule | **The census SAW these and ruled them out, correctly.** `inventory.md` filed eleven one-off classes on the keyboard map and "one use is not a role" kept every one of them out of the register. What the rule could not see is that **most of the eleven were one thing written twice**: `kwhere` and `kk` differ by a margin, `.what` is `opt`'s `lbl` under another name, and `rmp` is `optlist` character for character. A threshold counting NAMES cannot tell eleven components from four |
| **`key--none`**, one variant of an atom that already existed | the same batch, and it closed two orders with one variant | a variant on an atom | The grey declares `.keys .key.is-none` in the key cell and `.kgap` inline in prose, in two rules that **compute to the same thing**: a dashed boundary at the secondary ink around a mono word. Two of the eleven were one variant. `.key` also gained `white-space: nowrap`, which no earlier screen needed because every earlier key was a single character and node 0.5 is the only one that prints `Ctrl + Home` |
| **`miss`**, a new molecule with four zones, plus its page, its registry row, its `@import` beside `outage` and its inventory row. It is **the only consumer of `--measure` outside `base.css`** and the only container query in the system | batch 3, node 8.1 | molecule | **The fourth systemic screen, and the first the system could not dress.** Node 8.2 has `outage`, one molecule with four zones, built because it had three coloured renderings. Node 8.1 had ONE, in grey. Same anatomy, same argument, and the only difference between them is how many times the sample happened to show it |
| **Nothing, on `addr`, `optlist` and `opt`, and the refusals were as valuable as the components** | batch 3 | | Five of the fifteen orders were things that already existed under another name, and the agent was asked to mark which. `nf-addr` is `addr`, whose own header had been naming this instance since stage 08. `rmp` is `optlist`, and the only obstacle was a sentence. And `opt` was left alone: the map's 17 rows are inert, and putting them inside a component whose file says "IT IS A LINK, AND THAT WAS A DECISION" would have flipped a fifth of its population into a lie |
| **Nothing, on two orders that were refused, and the refusals are the row** | `escalate-no-recipient`, batch 1 | | The grey puts `style="margin-top:var(--s3)"` between the recipient and the fallback list, 12px where `.block`'s own gap gives 8. **Refused: one instance is not a role**, which is the rule stage 08 wrote and the reason `esc-first` was dropped before it. The system's gap stands and the drawing is 4px tighter than the grey, deliberately. The second is `block--rcpt`, which carried an `order:-1` at 360 and is now held by source order alone: **refused for the same reason and recorded in `backlog.md`**, because what it protects is real and no rule measures it |

---

## 7. Questions from the agents

The half of this stage that stage 13 takes. Every agent reads the documentation of stages 08 to 11 with clean context and sees it for the first time, so a fan out is a mass run of the fourth instrument. A thing an agent had to ask, or had to guess at, is a defect of that documentation and a direct input to the handoff.

| Question | Where the answer should have been | Class |
|---|---|---|
| **The canonical data table in this file disagreed with the frozen screen**, and one of the three disagreements was the fixture the product's central claim requires not to exist | section 2 of this file, written by the parent from a partial reading of the screen | **THE WORST DEFECT OF THE STAGE, and it was in the instrument rather than in the work.** The table said six log entries where there are seven, dropped one, and gave the fourth as `Meridian Health rejected by R. Idrissi`, which is word for word the queue's `decided` plus `unrecorded` row: a verdict whose write did not land, and therefore the one entry the log must not have. A canonical data table exists to stop drift, and this one would have handed the fixture to every agent that read it. **Found by an agent doing what the contract tells it to do and the author of the table did not**, which is hold the table against the screen |
| **Does `microcopy.md` or the frozen wireframe win when they disagree?** They disagreed on six strings across three screens of batch 1 | `voice/docs/microcopy.md`'s own preamble, and the contract's `interface text` line | **THE MOST EXPENSIVE ONE, and the only one that changed the contract.** The inventory is the draft and the frozen grey is the applied text, which is the reverse of what the pack assumes. Every one of the six is a stage 05 ruling from section 8 of that file: `frozen at` became `as of`, `Back to the queue` became `Open the queue`, an IA node number came out of product copy. The agent got all six right by following the screen, and a rule the agent had to derive is a rule the next twenty would derive differently |
| **`<meta name="description">` does not exist anywhere in this product**, and the contract asked for one | the contract, which asked for a tag the product decided not to have | **A defect of the contract, and the right outcome anyway.** The agent produced a question rather than a description. Every node here is behind authentication and `noindex`, so stage 03b wrote no SEO block. Fixed in the contract |
| **How is a state file's `<title>` formed?** | the contract, or `wireframes/docs/conventions.md` | **Derived correctly from the accepted corpus** and now written down: the grey title verbatim plus `, in colour`, with the base of a family as the one exception because its grey says `, default` |
| **The briefing said `design/escalate.html` puts `contact` inside `block--rcpt`. It does not** | `contact.css`'s header, which described the grey markup as if it were current | **A stale header, and it was still stale after the same file gained a state at this stage.** The agent followed the file rather than the briefing, which is the right precedence and was not stated anywhere |
| **`<label class="opt">` or `<a class="opt" href>` on the fallback list?** `opt.css` says outright that it is a link and that the ring exists for it, and 44 of the 45 instances in the product are anchors. The grey draws the one `<label>`, inside a `role="radiogroup"` with no input | `design/kit/opt.html`, the Limits block, which does not say what to do when the grey hands you a non anchor | **Kept as the grey has it**, because changing an element is not a colour decision. The consequence is real: the one control that makes a recipient exist takes no focus ring. Row in `backlog.md` |
| **Where does the banner stand inside a dialog** now that `esc-first` is gone? | `design/kit/banner.html`, Limits, which says a banner is about the whole screen and not where it stands inside one | Placed first in `.body`, confirmed by reading `reject-write-failed` rather than by a rule |
| **`escalate-from-expired` keeps its `stamp` and its `?as-of` address** while the pane above says the snapshot is not retrievable | `ia/docs/pages/escalate.md` section 6 | It may well be right, since the address is still the address and only the payload is gone, and **nothing anywhere says so** |
| **Node 5.1 says "At 360: not rendered" and three of its five states do render a surface there**, one of them an editable search form | `ia/docs/pages/decision-log.md` section 8, which rules the node out at the narrow width without excepting its paper states | The pattern hides the LIST below the point and the pane is a different zone. The node's sentence was true of the list and reads as being about the screen. **It is also what made the parent's own heading ruling wrong for three of the five**, see the row below |
| **`class="input"` and `class="label"` on a field, or bare elements?** The corpus was split: ten coloured screens class them, the four escalate screens did not | `design/kit/field.html`, the Limits block | **The split was a live defect and the split was the finding.** `input.css` is class based, so twelve textareas on the escalate family had been rendering as raw browser controls, monospace at 13.3px with the user agent's grey border and grey ground, inside a dark themed dialog, **since stage 09**. Contrast passed them, the usage rules do not look at fields, and a MISSING class is not a forbidden sign, so `screens.mjs` could not see it either. Found by the census instrument on its first run |
| **`class="link"` on an anchor inside an `.empty`?** `link.css` counts two and `shift-assembling` writes them bare | `design/kit/link.html`, the Limits block | The same shape one size smaller, and the file's own count was the evidence. Both dressed |
| **The heading ruling the parent gave batch 3 was wrong, and the agent refused it with the corpus in hand.** I said `keyboard` keeps the readout as its `h1` because its scrim is `--desk-only`; `z45.css` hides Z4 entirely when the pane is `is-paper`, which that screen's is, so the briefing would have shipped a screen with **no `h1` at 360**, the exact defect this stage had just closed on seventeen | the R11 table in `architecture.md` section 10 and in section 3 of this file, neither of which listed `keyboard` in any row | **The second time the parent got this wrong, and both times an instrument or an agent caught it.** The first was the log, where three of five states hide the readout and `rules.mjs` reported it. The rule is right and it is not derivable by reading: **the only way to know which heading survives is to render the screen at 360.** That is what makes R11 a measurement rather than an editorial preference, and it is why it is a function rather than a paragraph |
| **`inventory.md` section 8 named eleven one-off classes on the keyboard map and five of the eleven are on a different page**, the stage 04 hub. It also filed `seek` under `not-found`, where it is on `log-not-found` | `inventory.md` section 8 | **A list written beside a count instead of out of it**, which is the failure mode this project has now paid for four times. The count of eleven was right and the names were not, and three classes that ARE on the page were filed in a different sentence while a fourth is named nowhere in the document at all. **It was the input to this stage's batching**, which is what makes it expensive rather than untidy |
| **Are seventeen inert rows allowed inside a component whose file says it is a link?** | `design/kit/opt.html`, the Limits block, where batch 1's smaller version of the same question was already filed | **Ruled: no, and it became a component.** Batch 1 met one non anchor `opt` and it was kept as the grey had it, on the ground that changing an element is not a colour decision. That ruling covers one instance. Seventeen would have flipped a fifth of `opt`'s population, which is the same argument stage 08 used to split `state` out of `chip` |
| **`entry-beyond-retention` is where `Try 2024 instead` on `log-not-found` points**, and `screens.md` says that screen means the log does not reach back this far at all, which is a different claim from the one the button makes | `ia/docs/pages/` for node 5.4, which `screens.md` says is "for 5.4 to settle" | Kept as the grey has it. The link resolves to a coloured screen now, so the mismatch is visible for the first time |


---

## 8. What the stage closed, measured

| | |
|---|---|
| Pages in colour | **62 of 62**, and 52 of them were already in colour before this stage |
| Screens | **13 of 13**, every state of every screen the MVP map drew |
| Nodes with no wireframe, named and out of scope | **6** |
| CSS in a screen file, all ten signs, all 62 pages | **0**, with 5 declared exemptions carrying their reasons |
| Usage rules R1 to R12, 62 screens at both widths | **124 renderings, 0 broken.** R11 was 17 broken when the stage opened, and R12 is new: a list holds one filling or the other |
| Width sweep, 320 to 2560 in steps of 40 and of 10 near the point | **3038 readings on 62 pages at 49 widths. Nothing breaks at any width from 360 up.** It found 45 at 42 widths on the newest component and they were one selector |
| Box comparison of every component against its own page | **42 pairs, 0 unexplained.** It found 4 and they were one cause: a place utility deciding a component's display |
| Coverage map, walked in both directions | **62 records, 62 opened with one `h1` and a panel, 0 green over nothing, 0 on disk in nobody's count** |
| Contrast, every text node, both themes, both widths | **252 renderings on the product and 364 on the stand, 0 failures** |
| Motion | **1681 elements move, one number per role, 0 outside the register, 0 above 1ms under reduce, 0 that stopped existing** |
| Dead internal links in the product | **0**, from 24 at the start of the stage. The `?` in the top bar and the Log item in the global navigation had pointed at pages that did not exist since stage 07 |
| Links into `wireframes/` from the body of a screen | **0**, and the folder is unchanged |
| Components | **73 to 75**, and the two new ones absorbed fifteen one-off classes |
| Coverage of the deleted `kit.css` | **367 selectors, 0 declared nowhere.** Two of them are the heading selectors R11 rewrote, declared with the reason |
| Em dashes in the 71 files this stage touched | **0** |

**There are no pixel comparisons in this stage and there cannot be.** These ten pages had no coloured version to compare against: they never existed. What replaces the pixel promise is the purity measurement in the first rows of this table, which is a stronger claim about a different thing: not that nothing moved, but that nothing on any of the 62 pages decides its own appearance.

## 9. The critique, and one instrument of the two was unavailable

**Codex could not run.** The plugin's own job state records `Codex CLI is not installed or is missing required runtime support`, verified in the job file rather than assumed, which is the failure mode this project already paid for once at stage 06 when a dependency was reported unavailable and was not. **The mechanical half was run instead by the instruments in `design/kit/checks/`**, which cover the same ten classes and measure rather than search: the substitution is named here rather than made silently, and each class carries its count so that a class nobody checked cannot read like a class that is clean.

| Class | Instrument | Result |
|---|---|---|
| CSS in a screen file, ten signs | `screens.mjs` | 62 pages, **0** |
| A class the system does not declare | `screens.mjs` | **0**, 3 exempt with reasons |
| A component without its five things | a walk of the register against `index.css`, `_nav.js`, `inventory.md` and the pages | 75 components, **0** incomplete, and neither new `@import` at the foot of the file |
| A screen with no record, a record with no file | `coverage-map.mjs` | **0** in both directions |
| A dead link, or a link into `wireframes/` | a walk of every `href` in every screen body | **0** and **0** |
| A query number outside the register | a read of every `@media` and `@container` in the system | 34 queries: 31 at the one registered point, 2 `prefers-reduced-motion`, 2 `print`, and **1 container query at the one registered threshold** |
| `@container` with no `container-type` | the same read | **0**. `miss` declares its own |
| A motion literal outside a token | a read of every `transition` and `animation` in the system | **0** |
| `wireframes/` modified | `git status` | **unchanged** |
| An em dash | a read of all 71 files this stage touched | **0** |

The second instrument was a reader with clean context given the half a grep cannot do: whether the product now contradicts itself, and whether the documents say what the code does. **And the fan out itself was the third**, run three times: every agent read the documentation of stages 08 to 11 for the first time, and what it had to ask is section 7 above.
