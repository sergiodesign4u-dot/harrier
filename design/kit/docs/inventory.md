# The component inventory of the whole product

Stage 07 step 2. Read **out of all 62 wireframe screens plus `wireframes/_nav.js`**, mechanically rather than by eye, and not from the coloured sample. The sample narrows what gets **painted**; it never narrows what we **know about the product**. A component not counted here surfaces at the rollout, where it drags its states, its pattern and its adaptive behaviour along with it.

**Level is born here, in one column, and every later stage only reads it.** `atom` contains nothing else from the kit. `molecule` contains atoms. `organism` contains molecules or is the shell of a screen, and that is the ceiling. Grouping by purpose is forbidden: by purpose a button and a sign-in dialog are both "forms", and the `@import` order would then put the dialog above its own parts in the cascade.

**The rule and the Level column disagree on about ten rows, and the rule is the one that is wrong.** A reader with clean context applied it literally at step 6 and got a different answer for `row` (it contains `sev`, which is a molecule, so by the rule it is an organism), for `readout`, `pane-head`, `qfoot`, `rota` and `expand` (they contain only html elements and text roles, so by the rule they are atoms), and for `block` (its Contains column says *anything*). **The column is what stages 08 and 12 read, so the column stands and the rule is amended here:** a level is decided by what a component contains **from the kit or from the text roles**, and by whether it is addressed as one thing by a screen. `row` is a molecule because a screen places a row, not a severity. `pane-head` is a molecule because it is a titled block, not a word. Where the two readings still differ, the column wins and this paragraph is why.

**Sections 1 to 8 are the stage 07 census and they stand as written. Sections 9 to 11 are the stage 08 consolidation, and where the two disagree, 9 wins.** The counts did not change; what changed is what counts as a component and what counts as a variant. The register of 62 is section 9, the rename map that step 6 executes is section 10, and section 11 says what was left and where each left thing is addressed.

**Inclusion criterion: two or more pages.** One page goes to `## 8. One-off`. **One exception, and it is deliberate:** a form control enters the kit at a single occurrence, because it is a primitive of interaction and a system without it is incomplete.

---

## 1. What was counted

| | |
|---|---|
| Pages read | **62** product screens. `overview.html` is the stage hub, not a product screen, and is excluded |
| The generator | `wireframes/_nav.js` renders Z1, Z2 and the panel. **`z1` and `z2` appear in zero html files as a class**, and ten further classes exist only there. Stage 05 learned this the expensive way: an inventory taken from the screens alone has no header and no footer in it and does not notice |
| Distinct classes found | **175** |
| Meeting the criterion | **150** |
| **Of those, components** | **55**, the three tables below |
| Text roles, counted and not components | **17**, named in section 2 |
| **Unaccounted for** | **78**, and that is a hole rather than a rounding |
| One-off | **25**, and 18 of them sit on two pages: `keyboard.html` (11) and `not-found.html` (7) |

---

## 2. Atoms

| Component | Uses | Pages | Variants | Note |
|---|---|---|---|---|
| `btn` | 157 | 57 | `--primary`, `--quiet`, `[disabled]` | the emphasis axis, section 5 |
| `key` | 307 | 51 | inside `btn`, inside `opt`, in `qfoot` | the keyboard letter on a control, on a `kbd` element. `.key:empty` collapses. 2026-08-26: absorbed `.qfoot kbd`, the second form, 147 of them |
| `chip` | 316 | 44 | `--solid`, `--ghost`, `--state` | `--state` is **not interactive**: `cursor:default` |
| `bars` | 225 | 34 | 3 levels, `on` / off | severity, and the colour ramp of stage 06 hangs on it |
| `src` | 131 | 24 | | the source behind an evidence line. The control census counts 118 of them as `<a>`; the other 13 are not links |
| `mark` | 153 | 26 | | |
| `tag` | 44 | 22 | | |
| `stamp` | 24 | 24 | `stampline` | |
| `anote` | 75 | 40 | | the annotation register: node numbers, zone labels, WCAG criteria |
| `was` | 72 | 16 | | the previous count beside the current one |
| `rec` | 88 | 16 | | a count, mono, right aligned |
| `hint` | 18 | 18 | | field help |
| `label` | 30 | 15 | | **form primitive** |
| `input` | 9 | 6 | `text`, `email` | **form primitive** |
| `textarea` | 21 | 9 | | **form primitive** |
| `select` | 4 | **1** | | **form primitive, and it is in the kit on the exception rather than the criterion** |

**78 of the 150 are in none of the three tables, and a reader building the system from this file said so.** They are modifiers (`row--head`, `chip--solid`, `is-selected`), parts that only exist inside a named component (`doormark`, `out-line`, `sa-offer`, `lbl`, `routes`), and layout utilities (`only-desk`, `only-narrow`, `grow`, `spacer`). Each is real and none is a component in its own right, which is why none has a row. **The tables should have carried them in a Parts column and do not**, and the count above says so rather than letting 150 and 55 sit on the same page unexplained. Stage 08 needs that column before it can split one file per component.

**Text roles are counted but are not components.** `dim`, `client`, `cost`, `age`, `when`, `why`, `lat`, `ceiling`, `claim`, `txt`, `k`, `v`, `n`, `who`, `role`, `sub`, `meta` are how a cell is read, not a thing that can be assembled. They belong to the typography section of `DESIGN.md`, not to the kit, and they are listed here so nobody counts them twice.

---

## 3. Molecules

| Component | Uses | Pages | Contains | Variants |
|---|---|---|---|---|
| `row` | 294 | 39 | `sev`+`bars`, `client`, `concluded`, `states`+`chip`, `cost`, `age` | `--head`, `is-selected`, `is-superseded`, `is-standalone` |
| `sev` | 225 | 34 | `bars` + label | three levels |
| `frow` | 88 | 16 | `rec`, `was` | `--head` |
| `banner` | 54 | 44 | text + `act`+`btn` | `--quiet` |
| `block` | 227 | 50 | anything | `--rcpt` |
| `nar` | 151 | 37 | `claim`, `txt`, `src` | `--sep`, `claim--absence`. **`claim--against` is not a variant and never was**: it is written on 41 pages across both corpora and has never been declared in any stylesheet at any stage. Stage 09 found it and left it undrawn on purpose, see the backlog |
| `field` | 30 | 15 | `label` + `input`/`textarea`/`select` + `hint` | |
| `opt` | 62 | 8 | `key` + `lbl` + `routes` | `is-chosen` |
| `scopebar` | 38 | 38 | `chip` | |
| `readout` | 45 | 45 | text + `dim` | |
| `pane-head` | 48 | 48 | `h2` + `sub` | |
| `qfoot` | 45 | 45 | `kbd` | |
| `prov` | 36 | 33 | | |
| `empty` | 6 | 6 | | `--tight` |
| `tomb` | 7 | 7 | | the record that is gone |
| `gnote` | 48 | 27 | | |
| `expand` | 27 | 23 | `summary` on 21, and the body. The 6 that carry no head hold a `link` instead | **filling:** a head 21, no head 6. The depth-one-key-away control, and **this census count is the one that held**: section 9b's 32 over 28 was a plan rather than a reading |
| `rota` | 7 | 7 | `who` + `role`, and `is-now` | who is on shift. `who` alone is 28 uses on 14 pages |
| `toast` | 4 | 2 | | `--alert` |
| `doorcard` | 5 | 5 | `doormark`, `doorform`, `doorbtn`, `doorhelp` | the sign-in card |
| `outage` | 3 | 3 | `out-line`, `out-act`, `out-contact` | |
| `chips-hd` | 7 | 7 | `chip` | |
| `fleet-more` | 10 | 10 | | |

---

## 4. Organisms

| Component | Uses | Pages | Note |
|---|---|---|---|
| `wf-shell` | 62 | **62** | the page shell. Every screen |
| `wf-screen` | 62 | 62 | |
| `z1` | **0 in html** | 62 at runtime | **the class appears in no html file.** `_nav.js` injects it into `<header id="wf-z1">` on every authenticated screen. Two pages carry `z1--out` in markup, the signed-out door |
| `z2` | **0 in html** | 62 at runtime | same, the annunciator strip |
| `z45` | 57 | 57 | the split |
| `z4` | 54 | 54 | `--log`, `--shift`, `--entry`, `--sys`, `--solo` |
| `z5` | 48 | 48 | `is-paper`, `z5--paper` |
| `z6` | 2 | 2 | notices |
| `rows` | 43 | 43 | `--log`, `--moved` |
| `optlist` | 13 | 8 | contains `opt`. **The showcase files it as a molecule and this table as an organism.** It is an organism: it is a whole single-choice control that a screen places, and `opt` is its part |
| `pane-body` | 38 | 38 | |
| `pane-foot` | 35 | 35 | `position:sticky` |
| `dialog` + `scrim` | 11 | 11 | `--map`, `scrim--desk-only` |
| `rail` | 10 | 5 | `--foot`, `rail-out` |
| `brief` | 7 | 7 | the shift digest |
| `door` | 5 | 5 | the sign-in surface |

**Coverage by level, and this is the number the sample at step 5 is judged against:** 16 atoms, 23 molecules, 16 organisms.

**Every number in this file was checked back against the source by script after it was written**, and four were wrong: `src` had the control-census count where the class count belonged, `gnote` still carried the hub page in its total, `rota` had been merged with `who` and took its numbers, and `z1` was written as 62 pages when the class is in **none** of them. The last one is the rule of stage 05 catching this stage: an inventory taken from the screens alone has no header in it and does not notice.

---

## 5. The control census, on three axes

A list of components without the controls enumerated gives a flat kit, and every remaining difference in the product then settles as a context patch that nobody ever named a variant.

### Axis 1, emphasis

| Form | Class | Uses | Meaning |
|---|---|---|---|
| filled | `btn--primary` | 53 | **the main action of its zone, and there is exactly one per zone** |
| outline | `btn` | 157 total | the ordinary action |
| soft outline | `btn--quiet` | 33 | the action you are not being pushed towards |
| disabled | `btn[disabled]`, `[aria-disabled]` | | out of reach, **shown rather than hidden**: a hidden control teaches nothing |
| inverse | `chip--solid` | 57 | the chip that demands attention. On the coloured product it inverts to the text colour and **not** to the accent |
| dashed outline | `chip--ghost` | 47 | the filter that is not applied |
| non-interactive | `chip--state` | 194 | a position, not an action. `cursor:default` |

### Axis 2, content

| Form | Where | Count |
|---|---|---|
| label only | everywhere | the default |
| label + keyboard letter | `btn .key`, `opt .key` | 152 |
| label + `▾` | `chip` on a filter that opens | ~14 |
| label + `×` | `chip` on a filter that is applied | ~10 |
| **icon + label** | **nowhere** | **0** |
| **icon only** | **nowhere** | **0** |

**The product contains zero SVG.** Not one of the 62 screens has an icon, so two thirds of this axis is empty. That is a finding rather than a gap in the count: the kit at step 3 introduces the icon set, and **every icon in the product will be a new decision with no wireframe behind it**, which is exactly the class of thing that drifts if it is not decided once in the kit.

### Axis 3, size

**Empty, and correctly so.** `.btn` has one size in `_wf.css`. `btn--primary-narrow`, `only-desk` and `only-narrow` look like sizes and are not: they are **viewport twins**, the same control declared twice so the narrow rendering can differ. Width is not on this axis either: `100%` against `auto` is layout.

---

## 6. Counter-check A: one job, several forms

The same visible action carried by different class signatures. **21 found.** The split was written here as ten legitimate and eleven not, and **that arithmetic is wrong**: the table below has five rows, and the five cover 16 of the 21 signatures between them, with the remaining five being row states and viewport twins. The finding is five jobs wearing more than one form, not eleven. Corrected at step 6 after a reader counted the rows.

**Legitimate, and not a variant:** `a.row` against `a.is-selected.row` and `a.is-superseded.row` is **state**. `a.btn` against `a.btn.only-desk` is a **viewport twin**. Neither is a second form of the same control.

**Real divergence, and it goes into the kit as a decision:**

| Job | Forms it wears | Reading |
|---|---|---|
| **`Escalate e`** | `a.btn`, `a.btn.btn--primary`, `a.btn.btn--primary-narrow`, `a.btn.btn--primary.only-narrow`, `a.btn.only-desk` | **five.** The same action is the main action of its zone on some screens and an ordinary one on others. That may be right, because escalation is the only exit from one dead end and the main action elsewhere, but it has never been decided out loud |
| **`Open the queue`** | `a`, `a.btn`, `a.btn.btn--quiet`, `a.btn.btn--primary.only-desk`, `a.btn.btn--primary.only-narrow` | **five**, including a bare `<a>` with no class at all |
| `Open the log` | `a`, `a.btn`, `a.btn.btn--quiet`, `a.rail-out` | four |
| `Try again` | `a.btn`, `a.btn.btn--primary`, `button.btn.btn--primary.doorbtn` | three, and **one of them is a `<button>` while two are links** |
| `All tenants ▾`, `Any actor ▾`, `Any decision ▾`, `Meridian Health ×` | `a.chip…` and `button.chip…` | **the same filter chip is a link on some screens and a button on others.** That is a semantics divergence, not a style one, and it changes what a screen reader announces and what the keyboard does |

### Counter-check B: a control without a family

| Control | Why it is alone |
|---|---|
| `select` | four uses on **one** page. In the kit on the form-primitive exception |
| `summary` / `expand` | 27 uses over 23 pages and **no styled family of its own**: it is the depth-one-key-away control of design principle 2 and it has never been given a component. **Closed in two moves.** Stage 08 gave it `components/expand.css` and a page; stage 13 gave it the element, because until then it was a `div` that never closed and the control the principle promises did not exist. 21 of the 27 now carry a `summary`; the 6 handover notes on `shift` and `shift-sealed` do not, by decision, and section 9b says why |
| `a.bline` | 3 uses, 3 pages, a link form that belongs to nothing |
| `a.t-x` | 3 uses, 2 pages |
| **checkbox, radio, toggle** | **absent from the whole product.** `optlist`/`opt` is the radio pattern implemented as a list of links with a keyboard letter. It works and it is not a radio, so the kit owes a decision: keep the pattern and name it, or introduce the primitive |

---

## 7. What this stage takes and what stage 08 will take

This inventory reads **jobs** off the grey wireframes: what is clickable at all, and how many forms one job wears today. Stage 08 will read **forms** off the assembled coloured screens. **The difference between the two lists is the brief for the rollout**, and it is the reason this list is taken now rather than after the sample is painted.

---

### A note on which corpus a number came from, added at stage 12

**Every count in this file was taken on a corpus, and until now no row said which.** Stage 08 counted the grey, because colour held 52 pages of 62 and a count on the sample would have been a statement about the sample. Stage 12 closed that gap, so the two corpora now agree about which screens exist, and they still disagree about the numbers on a handful of components: the rollout renamed classes, split one component in two, and dressed markup that had been standing bare.

The rows corrected at stage 12 against a browser census over all 62 coloured screens are `key`, `optlist`, `opt`, `contact`, `link`, `addr` and `arriving`. **Everything else in this file still carries a stage 08 number**, and a reader who needs an exact one should take it from `design/kit/checks/census.mjs` rather than from here. Divergences a browser reports today, none of them a defect and all of them the product moving: `chip` 122 on 38 rather than 44, `btn` 160 on 57, `navitem` 165 on 55, `row` 260 on 34, `state` 195 on 40.

## 8. One-off, 25 classes

Not in the kit. 18 of the 25 sit on two pages: `keyboard.html` carries 11 (`keys`, `kwhere`, `kscope`, `kgap`, `kk`, `ksep`, `legend`, `pal`, `d`, `t`, `do`) and `not-found.html` carries 7 (`nf`, `nf-note`, `nf-say`, `nf-exits`, `nf-addr`, `nf-note--sep`, `seek`). The rest are single state helpers: `gone-all`, `is-gone`, `esc-first`, `dialog--map`, `is-none`, `rmp`, `rmp-row`.

**`keyboard.html` is worth naming.** Eleven one-off classes on one page means the keyboard map is effectively its own small design system, and design principle 5 puts keyboard before mouse. If it ever gets a second page, all eleven become kit candidates at once.

### And the two lists above are both wrong, found at stage 12 by the agent sent to build those two screens

**This is the failure mode this project keeps paying for: a list written beside a count instead of out of it.** The count of eleven is right and five of the eleven names are not on that page at all.

| What the paragraph says | What is on the page |
|---|---|
| `keyboard.html`: `keys`, `kwhere`, `kscope`, `kgap`, `kk`, `ksep`, **`legend`, `pal`, `d`, `t`, `do`** | The last five are on **`wireframes/overview.html`**, the stage 04 hub, and appear **zero times** on the keyboard map. What is on it and filed elsewhere: `rmp`, `rmp-row`, `is-none`, and **`.what`, which is named in no list in this document at all** |
| `not-found.html` carries 7, including **`seek`** | `seek` is on **`log-not-found.html`**, a different screen and a different node. The real count is **6**, one of which is `nf-addr`, which `addr.css` had already claimed by name |
| The single state helpers include `rmp`, `rmp-row`, `is-none` | They are keyboard map classes and belong in that row, which is what makes the eleven a coincidence rather than a count |

**The real numbers, measured rather than transcribed: 10 undeclared classes on `keyboard` and 5 on `not-found`.** Both lists were the input to the stage 12 batching, which is the one thing that makes the error expensive rather than untidy.

### What stage 12 did with them

The paragraph above guessed right about the shape and wrong about the threshold: it said a second page would make all eleven kit candidates at once. What happened instead is that **the eleven collapsed into two components and two variants**, because most of the eleven were one thing written twice.

| The one-offs | Where they went |
|---|---|
| `keys`, `ksep`, `kwhere`, `kk`, `kscope`, `.what`, `rmp-row` | **`keyrow`**, one new molecule with five zones and one variant. `kwhere` and `kk` differ only by a margin and are one zone; `.what` is `opt`'s `lbl` under another name; `rmp-row` is the `--set` form |
| `is-none`, `kgap` | **`key--none`**, one variant of an atom that already existed. The two rules compute to the same thing: a dashed boundary at the secondary ink around a mono word |
| `rmp` | **`optlist`**, character for character. The only obstacle was prose, and the prose was corrected |
| `nf`, `nf-say`, `nf-exits`, `nf-note`, `nf-note--sep` | **`miss`**, one new molecule with four zones, which is the shape `outage` already has one node along |
| `nf-addr` | **`addr`**, whose own header had been naming this instance since stage 08 |
| `dialog--map`, `esc-first`, `is-gone`, `gone-all` | already ruled: declared, dropped as dead, entered as `contact.is-gone`, and awaiting a second instance |

---

## 9. The register after consolidation, stage 08 step 2

**55 rows became 62, and the number went up on purpose.** Consolidation did not shorten the list. It gave names to things already standing on the screens without one, and it took names away from things that were never components. Both movements are below, and the second is the larger of the two.

**What was measured, and with what.** Every count in this section was taken in a browser, from the rendered DOM, on both corpora: the 62 grey screens for the product count and the 52 coloured ones for the sample. The anatomy column is the set of child zones and their order, read off the rendering rather than off the markup, which is why a zone injected by a generator appears here at all. Fourteen of the counts reproduce section 1 exactly, which is the check that the two instruments agree.

**The split criterion is anatomy and nothing else.** A zone that disappeared means a different component. A zone whose content class changed means a variant. "It looks different" is the definition of a variant, not a reason to split.

### 9a. Atoms, 19

| Component | Product | Pages | Variants, by axis | Where it stands |
|---|---|---|---|---|
| `btn` | 157 | 57 | **emphasis:** outline 65, filled `--primary` 53, soft `--quiet` 33, out of reach `[aria-disabled]` 5. **content:** label 74, label + key 83 | `pane-foot` 86, `act` 23, dialog `footer` 21, `wrapline` 6, `doorform` 6, `addr` 5, `out-act` 4 |
| `navitem` | **132** | 44 | **state:** current 44, not current 88 | Z1 only, injected by `design/_shell.js` |
| `link` | **24** | 24 | **size, set by the container:** 11px in `gnote` 15, 12px in `expand` 6, `nar` 2, `empty` 2, Z6 1 | inline, inside whatever encloses it |
| `key` | 152 | 34 | **kind, seven values, and every one is a census:** letter 56, digit 47, named 36 (Enter, Esc, Home, End, Tab), combination 3 (`Ctrl + Home`), arrow 2, symbol 2, `--none` 5. **The border follows the host**, which is the whole point of the component | `btn` 85, `opt` 45, `keys` 22 on the keyboard map |
| `glyph` | **140** | **46** | **icon:** `--menu` 81, `--dismiss` 56, `--next` 3. New on 2026-08-26, and every instance replaced a character that had been typed into product copy | `chip` 137, `t-x` 3, `bline` 3, and the drawn `select`'s mark |
| `chip` | **122** | 44 | **emphasis:** outline, filled `--solid`, dashed `--ghost`. **content:** label, label + `▾` 77, label + `×` 45 | `scopebar` 122 |
| `state` | **194** | 44 | **emphasis:** outline, filled `--solid` 46 | `states` inside a row 185, `chips-hd` 9 |
| `bars` | 225 | 34 | **severity:** high 56, medium 71, low 46, read by `:has()` off the count of lit bars | `sev` 225, and `sev` is only ever inside `row` |
| `src` | 131 | 24 | **element:** link 118, plain 13. **Colour is not a variant:** the 18 dim ones inherit `claim--absence` | `claim` 131 |
| `mark` | 153 | 26 | **three readings from the parent:** `off` 101, plain 26, `ceiling` 26 | `lat` 153 |
| `tag` | 44 | 22 | none | `txt` inside `claim` 44 |
| `stamp` | 24 | 24 | none | `pane-body` 24 |
| `anote` | 75 | 40 | none. Not product copy, and it carries its own register | `block` 55, `outage` 8, `doc` 5, `body` 4, `z4` 3 |
| `was` | 72 | 16 | none | `rec` 72 |
| `rec` | 88 | 16 | **head:** body 72, `frow--head` 16 | `frow` 88 |
| `hint` | 18 | 18 | **element:** `p` 7, `span` 11, one computed form | `field` 7, dialog `footer` 11 |
| `label` | 31 | 15 | none | `field` 30, `optlist` 1 |
| `input` | 9 | 6 | **type:** text, email | `field` 9 |
| `textarea` | 21 | 9 | none | `field` 21 |
| `select` | 4 | **1** | **state:** closed, open, out of reach. **It left `input` on 2026-08-26** and became its own component: drawn, it has a control, a value, a mark and a list, which is four zones and an order, and anatomy is the splitting criterion. Its keyboard is `design/system/select.js` | `keyrow--set` on the keyboard map |

**Three atoms are new and none of them is new work.** `navitem` and `link` were already standing on the screens with no class at all, 132 and 24 times, painted by descendant selectors. `state` is the half of `chip` that is not a control. Naming them is the whole of the change.

**Nine atoms had no declaration of their own** and existed only as a descendant of their parent: `src`, `tag`, `rec`, `was`, `hint`, `mark`, `key`, `label`, `input`, `textarea`. Each now gets its own, and the parent keeps only what is genuinely contextual, meaning grid placement and flex behaviour.

### 9b. Molecules, 24

| Component | Product | Pages | Variants, by axis | Where it stands |
|---|---|---|---|---|
| `row` | **259** | 39 | **state:** base, `is-selected` 23, `is-superseded` 3. **head:** `row--head` 39. **list:** queue 200, log 25, which keeps the seven zones and changes their widths | `rows` in Z4 |
| `row-moved` | **35** | 7 | **head:** body 30, head 5 | `rows-moved` inside `brief` |
| `sev` | 225 | 34 | severity, three levels | `row` 225, and nowhere else |
| `frow` | 88 | 16 | **head:** body 72, `frow--head` 16 | `z5` 76, `block` 12 |
| `banner` | 54 | 44 | **emphasis:** base, `--quiet` 4. Nothing else on this axis | `z4` 20, `pane-body` 16, `brief` 5, `body` 4 |
| `block` | 227 | 50 | **none. This is a slot**, 43 distinct zone sets and one computed form | `pane-body` 141, `body` 31, `doc` 28, `brief` 20 |
| `nar` | 151 | 37 | **separator:** base 147, `--sep` 4. Otherwise a slot, 7 zone sets | `block` 151 |
| `field` | 30 | 15 | **control:** textarea 21, input 9. **hint:** present 7, absent 23 | `prompts` 12, `block` 7, `doorform` 5, `seek` 4 |
| `opt` | 62 | 8 | **state:** base 57, `is-chosen` 5 | `optlist` 60, `axisb` 2 |
| `scopebar` | 38 | 38 | none. Three or four chips is a count, not a variant | `z4` 38 |
| `readout` | 45 | 45 | none | `z4` 45 |
| `pane-head` | 48 | 48 | **route:** in the pane 45, **standalone 3**, which swaps `h2` for `h1` and adds three zones | `z5` 48 |
| `qfoot` | 45 | 45 | none | `z4` 45 |
| `prov` | 36 | 33 | **none. A slot**, 5 zone sets, one form | `pane-body` 26, `doc` 7, `block` 3 |
| `empty` | 6 | 6 | **density:** base 4, `--tight` 2. **A slot**, 5 zone sets on 6 instances | `rows` 5, `block` 1 |
| `tomb` | 7 | 7 | **none. A slot**, 5 zone sets on 7 instances | `block` 7 |
| `gnote` | 48 | 27 | **none. A slot**, 8 zone sets, one form | `block` 46, and four others |
| `expand` | **27** | **23** | **filling:** a head 21, no head 6. The component is a native `details` and the head is its `summary` | `block` 27 |
| `rota` | 7 | 7 | **state:** `is-now` on one row | `block` 7 |
| `toast` | 4 | 2 | **kind:** base 3, `--alert` 1, which swaps the dismiss control for a hold | `z6` 4 |
| `doorcard` | 5 | 5 | banner and block are optional zones | `door` 5 |
| `outage` | 3 | 3 | none | `z4` 3 |
| `chips-hd` | 7 | 7 | none | `pane-head` 7 |
| `fleet-more` | 10 | 10 | none | `z5` 10 |

**Six molecules stopped pretending to be compositions.** `block`, `nar`, `prov`, `gnote`, `empty` and `tomb` between them show 71 distinct zone sets and **one computed form each**. They are slots: a heading and a free space. Their pages say so in as many words, so nobody looks for a variant matrix that does not exist.

**`expand` read 32 over 28 and that was a plan, not a reading. Corrected at stage 13 to 27 over 23.** The row counted the five `summary` on the sign in door as this component under another name, and **that absorption is dropped rather than deferred**. The line is corrected here instead of deleted, because a plan that quietly disappears reads as a plan that was carried out. The door's help is a question on a full page with one form on it; `expand` is depth on a claim inside a list of evidence. Giving the door this component's bordered surface would tell the reader there is working to check where there is only an answer, so `doorhelp` stays a zone of `doorcard` and is declared in `door.css`. The corrected count is `grep -ro 'class="expand"' design/*.html | wc -l` = 27 and `grep -rl` = 23, and section 1 above had it right all along.

**The two fillings, and the second is a decision.** 21 instances carry a head, a `summary` reading `How this was read`, and close by default. **6 carry no head and never close:** the three handover notes on `shift` and the three on `shift-sealed`. A handover note is read because the shift was taken, so hiding it would hide the reason the screen exists, and its own head is a link to the case, which inside a `summary` cannot be reached because the click belongs to the disclosure. The mark hangs off `> summary` rather than off the box, so the headless filling loses the chevron **by construction** and not by a second class anybody has to remember. That is rule R13 in `architecture.md`, and it is a function in `rules.mjs`.

### 9c. Organisms, 19

| Component | Product | Pages | Variants, by axis | Where it stands |
|---|---|---|---|---|
| `shell` | 62 | 62 | none | `body` |
| `screen` | 62 | 62 | **route:** authenticated 55, door 5, no strip 2 | `shell` |
| `z1` | 57 | 57 | **session:** signed in 55, `z1--out` 2, which drops the nav, the map, the annunciator and the theme control. **The two are the outage pages and not the door:** a door screen carries no Z1 at all, which is why 55 plus 2 plus 5 accounts for the 62 | `screen`. **The class is in no html file:** `design/_shell.js` injects it |
| `z2` | 55 | 55 | **health:** live 51, `is-degraded` 4 | `screen`. Injected the same way |
| `z45` | 57 | 57 | none. This is layout: both panes 32, with a scrim 11, list only 9, pane only 3 | `screen` |
| `z4` | 54 | 54 | **none. Context, not variants:** `--log` 7, `--shift` 7, `--entry` 5, `--sys` 3, `--solo` 1 switch how the children paint, not how `z4` paints. One computed form across all nine zone sets | `z45` 54 |
| `z5` | 48 | 48 | **surface:** `is-paper` 21, `is-standalone` 3. **What fills it is a pattern, not a variant:** the case pane 38 and the fleet 10 | `z45` 48 |
| `z6` | 2 | 2 | none | `z45` 2 |
| `rows` | 43 | 43 | **list:** queue 31, `--log` 7 | `z4` 38, `block` 5 |
| `rows-moved` | 5 | 5 | none. **The container the row split also created**, and it is the reason organisms went from 16 to 19 rather than 18 | `block` inside `brief` |
| `optlist` | 13 | 8 | none. The count of options is a count | `block` 13 |
| `pane-body` | 38 | 38 | **none. A slot**, 13 zone sets, one form | `z5` 38 |
| `pane-foot` | 35 | 35 | none. One to four buttons is a count | `z5` 35 |
| `dialog` | 11 | 11 | **width:** base 10, `--map` 1, which reads `--width-dialog-wide` | `scrim` 11, always |
| `scrim` | 11 | 11 | **viewport:** `--desk-only` 7, base 4 | `z45` 11 |
| `rail` | 5 | 5 | none | `frame` 5 |
| `rail-foot` | 5 | 5 | none. **Zero zones**, which is why it is not a variant of `rail` | `frame` 5 |
| `brief` | 7 | 7 | none | `z4` 7 |
| `door` | 5 | 5 | none | `screen` 5 |

**The fleet is not here, and that is the decision rather than an omission.** `z5` holds two compositions with no zone in common past the head: the case pane, 38 uses, and the fleet, 10. Both are **patterns**, produced by stage 09, not components. Making the fleet a variant of the case pane would have written it as a pane with no body, which is to say as an empty case, and `CLAUDE.md` requires the resting state of that pane to read as the fleet rather than as empty. The requirement would have failed in the architecture rather than in the pixels.

### 9d. What stopped counting as a variant

Named so the count of 62 is legible, and so nobody reinstates them.

| What | Uses | Why it is not a variant |
|---|---|---|
| `only-desk`, `only-desk-i`, `only-narrow` | many | viewport twins. Width is layout, and layout is not an axis |
| `btn--primary-narrow` | 6 | the same twin with the emphasis folded into its name. Becomes `btn--primary` plus `only-narrow` |
| `z4--log`, `--shift`, `--entry`, `--sys`, `--solo` | 23 | context. They change the children, not `z4`. **Two of the five left at stage 09**: `--log` and `--shift` named a filling rather than a form of the host, and section 14 says where they went |
| `qbanner` | 6 | a margin. Placement belongs to the parent |
| `esc-first` | 5 | an `order`. Declared in the `<style>` block of three grey escalate screens, which is why the stage 07 reconcile never lifted it |
| `z5--paper` | 3 | a second name for `is-paper`. One state, one name |
| `chip--state` | 194 | promoted to a component of its own, `state` |

---

## 10. The rename map

**Decided here at step 2 and executed by step 6.** Four steps separate the two, and without this table the reconcile would have to guess a second time what `.cart-foot .btn` collapsed into. The last column is the one that matters after this stage: `wireframes/` is frozen and stage 12 builds the rest of the product from it, so a row that does not travel to 12 renames half a product.

| Old class or selector | New class and variant | Coloured screens `design/` | Grey screens `wireframes/`, for stage 12 |
|---|---|---|---|
| `.wf-shell` | `.shell` | 52 | 62 |
| `.wf-screen` | `.screen` | 52 | 62 |
| `.chip.chip--state` | `.state` | 155 | 194 |
| `.chip--state.chip--solid` | `.state.state--solid` | 41 | 46 |
| `.btn.btn--primary-narrow` | `.btn.btn--primary.only-narrow` | 6 | 6 |
| `.z1 nav a` | `.navitem` | 132 | 132 at runtime, injected by the generator |
| `.z1 nav a[aria-current="page"]` | `.navitem.is-current` | 44 | 44 at runtime |
| `.gnote a`, `.expand a`, `.nar a`, `.empty a`, Z6 `a` | `.link` | 24 | 26 |
| `.rows--moved` | `.rows-moved` | 5 | 5 |
| `.rows--moved .row` | `.row-moved` | 5 | 30 |
| `.rows--log` | `.rows--log`, unchanged, a variant of `rows` | 2 | 7 |
| `.z5--paper` | `.is-paper` | 0 | 3 |
| `div.expand` | `details.expand` | 21 of 27, executed at stage 13 | 27 in grey, and the grey is frozen | *the 6 handover notes stay a `div` and keep no head, which is R13's second half rather than an exception* |
| `.doorhelp summary` | **nothing. The absorption is dropped** | 0 | 0 | *added at stage 13: the door's help is a question on a full page, not depth on a claim in an evidence list, and this component's bordered surface would say there is working to check where there is only an answer. `doorhelp` stays a zone of `doorcard`* |
| `.opt .key` | `.key`, one declaration, border on `currentColor` | 39 | 45 |
| `.pane-body .frow` | `.frow.frow--flush` | 12 | 12 |
| `.dialog > footer .hint` | `.hint`, one declaration | 6 | 11 |
| `.qbanner` | **nothing. The margin moves to `.z4 > .banner`** | 5 | 6 | *added at step 8: step 2 took it off the variant list as a margin, and the margin then belonged to nobody. Placement belongs to the parent* |
| `.gone-all` | `.tomb.tomb--all` | 1 | 1 | *added at step 8: a whole record tombstone is the same component at a bigger size, and one instance is one short of a variant. Carried rather than dropped, and step 9 rules on it* |
| `.claim .src`, `.claim .tag`, `.frow .rec`, `.frow .was`, `.lat .mark`, `.field > label`, `.field .hint` | the same class, declared on its own rather than through the parent | all | all |
| `.field input`, `.field textarea`, `.field select` | `.input`, one class on the element itself | 34 | 38 | *added round 1: the three are one component, and the class goes on the element so they stay one* |
| `.z1 nav span` | **nothing. Deleted** | 0 | 0 | *added round 1: a rule for a nav item that cannot be opened, struck through in the hairline colour. The generator emits an `a` every time and has never emitted a span. A class nobody wears, and it goes to list three of the reconciliation* |

**Two rows change markup and not one pixel**, so the comparison at step 8 will not see them and they are recorded here instead: the move to `details.expand` and the naming of `navitem` and `link`. **One row changes appearance and is entered as consolidated drift** in `tokens-audit.md`: `.opt .key` moves from a rule-coloured border to the host's colour, 39 places.

**The `details.expand` half of that sentence turned out to be wrong, and stage 13 is what proved it.** The row did not execute at step 6, so nothing was there to compare; and when it finally executed it changed the drawing rather than only the markup. A closed disclosure is 48px where the open box was 100px, measured on `design/case.html` at 1440 in the dark theme, and the mark moved from the box to the head. **A markup change nobody executes has no pixel cost and no pixel proof either**, which is how it survived two stages inside a sentence that said it was harmless.

---

## 11. What stage 08 took, and what it left

Section 7 above said the difference between the two lists is the brief for the rollout. It is now measured rather than predicted.

**Taken.** Every one of the 55 rows has a level, a variant matrix built from axes rather than from occurrences, and a place where it stands. Six components stopped claiming variants they never had. Three components were added that had been standing unnamed on 156 nodes between them.

**Left, and each with an address.** `select`, `block--rcpt`, `z4--solo`, `z5--paper` and `dialog--map` have no coloured rendering; each takes its form from its nearest relative rather than from an invention, and the four that wait belong to screens that are still grey. The keyboard map keeps its eleven one-off classes and stays out of the system. Checkbox, radio and toggle are absent from the product and are not introduced: `optlist` is the radio pattern, and it is named as one rather than replaced.

---

## 12. The build register, stage 08 step 5

**Order is the ladder and it is not the alphabet.** Alphabetically `dialog.css` comes before `field.css` and `form.css` before `input.css`, which puts the composed thing above its own parts in the cascade; a contextual fix is then cured with `!important` and the system carries it for years. Bottom up removes that by construction. The same order protects the documentation: a subagent writing a molecule before its atoms gives them a hover of their own and a name of their own, and the system ends up with a second dictionary.

**All three levels exceed eight, so all three carry a second sort by purpose**, agreed before the build. Inside `Organisms` the split is not by purpose but by containment: an organism may contain another organism and the ladder has no fourth rung, so the ones that contain none go first.

**This table is the checklist and it is not shortened.** A component with no file, no page, no registry entry or no `@import` in its own group does not exist, and step 5 ends with all of them closed. **The register is 75**: it was 62 when this line was first written, lost two in round 1 when `input` absorbed `textarea` and `select`, gained thirteen at step 5 that the browser census had never seen, and gained two more at **stage 12**, `keyrow` and `miss`, which the census HAD seen and ruled out because the only screens carrying them were still grey.

**Nineteen rows were here twice and are here once.** The organisms were listed as a plan before round 3 was built, with empty State and Built columns and no link, and then listed again as they were finished. The table read 98 rows against a register of 73, and **a checklist with nineteen empty cells in it is the exact class of defect this file is meant to catch in other people's work**. Found at stage 09 by a mechanical audit counting the rows against the register.

| Level | Group | Component | css file | Page | States | Built | Behaviour at width | Motion |
|---|---|---|---|---|---|---|---|---|
| Atoms | controls | `btn` | `components/btn.css` | [`btn.html`](../btn.html) | 4 states | **round 0** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, a ground and a boundary at 120ms |
|  |  | `navitem` | `components/navitem.css` | [`navitem.html`](../navitem.html) | hover, active, focus | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, ink at 120ms |
|  |  | `link` | `components/link.css` | [`link.html`](../link.html) | hover, focus | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, an underline at 120ms |
|  |  | `chip` | `components/chip.css` | [`chip.html`](../chip.html) | hover, active, focus | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, a ground and a boundary at 120ms |
|  |  | `input` | `components/input.css` | [`input.html`](../input.html) | hover, focus | **round 1**, and it absorbed `textarea` and `select` | **fluid**. grows and wraps with the pane or the column it stands in | **response**, a boundary at 120ms |
| Atoms | marks | `key` | `components/key.css` | [`key.html`](../key.html) | none, not interactive | **round 0** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `state` | `components/state.css` | [`state.html`](../state.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `bars` | `components/bars.css` | [`bars.html`](../bars.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `mark` | `components/mark.css` | [`mark.html`](../mark.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `tag` | `components/tag.css` | [`tag.html`](../tag.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `stamp` | `components/stamp.css` | [`stamp.html`](../stamp.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Atoms | the parts of a text | `src` | `components/src.css` | [`src.html`](../src.html) | hover, focus | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, an underline at 120ms |
|  |  | `anote` | `components/anote.css` | [`anote.html`](../anote.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `was` | `components/was.css` | [`was.html`](../was.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `rec` | `components/rec.css` | [`rec.html`](../rec.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `hint` | `components/hint.css` | [`hint.html`](../hint.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `label` | `components/label.css` | [`label.html`](../label.html) | none, not interactive | **round 1** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Molecules | the row family | `row` | `components/row.css` | [`row.html`](../row.html) | hover, selected, superseded | **round 2** | **container**. measures its own column rather than the window: its two prose tracks take a ceiling in `ch` | **response**, a ground at 120ms |
|  |  | `row-moved` | `components/row-moved.css` | [`row-moved.html`](../row-moved.html) | hover, active. **Corrected at stage 09**: three documents said none and every instance is a link | **round 2** | **container**. measures its own column rather than the window: its two prose tracks take a ceiling in `ch` | **response**, a ground at 120ms |
|  |  | `sev` | `components/sev.css` | [`sev.html`](../sev.html) | none, not interactive | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `frow` | `components/frow.css` | [`frow.html`](../frow.html) | hover | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, a ground at 120ms |
|  |  | `opt` | `components/opt.css` | [`opt.html`](../opt.html) | chosen, hover, active, focus | **round 2** | **does not adapt**. a row of a reason list inside a dialog | **response**, a ground at 120ms |
|  |  | `keyrow` | `components/keyrow.css` | [`keyrow.html`](../keyrow.html) | none, not interactive, and that is the whole reason it is not an `opt` | **stage 12**, ordered by node 0.5 | **does not adapt**, and it has a floor of about 450px. Two fixed cells so the key column reads down. Node 0.5 is not rendered below the width point at all | **does not move**. Nothing on it is answerable, and the `select` on the `--set` form carries its own as an `input` |
|  |  | `rota` | `components/rota.css` | [`rota.html`](../rota.html) | none, not interactive | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Molecules | slots | `block` | `components/block.css` | [`block.html`](../block.html) | none, a slot | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `nar` | `components/nar.css` | [`nar.html`](../nar.html) | none, a slot | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `prov` | `components/prov.css` | [`prov.html`](../prov.html) | none, a slot | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `gnote` | `components/gnote.css` | [`gnote.html`](../gnote.html) | none, a slot | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `empty` | `components/empty.css` | [`empty.html`](../empty.html) | none, a slot | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `tomb` | `components/tomb.css` | [`tomb.html`](../tomb.html) | none, a slot | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Molecules | the furniture of a zone | `scopebar` | `components/scopebar.css` | [`scopebar.html`](../scopebar.html) | none, not interactive | **round 2** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `readout` | `components/readout.css` | [`readout.html`](../readout.html) | none, not interactive | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `pane-head` | `components/pane-head.css` | [`pane-head.html`](../pane-head.html) | none, not interactive | **round 2** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `qfoot` | `components/qfoot.css` | [`qfoot.html`](../qfoot.html) | none, not interactive | **round 2** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `chips-hd` | `components/chips-hd.css` | [`chips-hd.html`](../chips-hd.html) | none, not interactive | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `fleet-more` | `components/fleet-more.css` | [`fleet-more.html`](../fleet-more.html) | none, not interactive | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Molecules | notices and input | `banner` | `components/banner.css` | [`banner.html`](../banner.html) | none, not interactive | **round 2** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `toast` | `components/toast.css` | [`toast.html`](../toast.html) | the dismiss only | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, a boundary and ink, on the close control at 120ms |
|  |  | `outage` | `components/outage.css` | [`outage.html`](../outage.html) | none, not interactive | **round 2** | **does not adapt**. a centred message. A wider outage notice is not a better one | **does not move**. No interactive state to move between |
|  |  | `miss` | `components/miss.css` | [`miss.html`](../miss.html) | none, not interactive. Two links and one button inside it carry their own | **stage 12**, ordered by node 8.1 | **container**, and it is the only component in the system that gets BIGGER at the narrow width: the two exits take a tap target below 30rem. The threshold is registered in `responsive.md` section 6. It is also the only consumer of `--measure` outside `base.css` | **does not move**. The column is read |
|  |  | `field` | `components/field.css` | [`field.html`](../field.html) | none, not interactive | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
|  |  | `expand` | `components/expand.css` | [`expand.html`](../expand.html) | the element’s own, `[open]`, and it became real at **stage 13** | **round 2** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, the mark rotating at 120ms. Added at stage 13 with the state: until then there was no state to move between |
|  |  | `doorcard` | `components/doorcard.css` | [`doorcard.html`](../doorcard.html) | none, not interactive | **round 2** | **does not adapt**. the card on it, capped by its own width | **does not move**. No interactive state to move between |

| Atoms | the parts of a text | `arriving` | `components/arriving.css` | [`arriving.html`](../arriving.html) | none, not interactive | **step 5, and it was not in the register** | **fluid**. grows and wraps with the pane or the column it stands in | **a cycle**, 1.4s, and a still state under reduce |
| Molecules | the ten the census missed | `claim` | `components/claim.css` | [`claim.html`](../claim.html) | none, a slot | **step 5, and it was not in the register** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Molecules |  | `lat` | `components/lat.css` | [`lat.html`](../lat.html) | **`withdrawn`, `unearned`**, two domain states and no interaction states | **step 5, and it was not in the register**. Both states arrived at **stage 13**, ordered by `tenant-moved-down` and `tenant-no-record` | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. A domain state is a fact about the world, not a response, so there is nothing to move between |
| Molecules |  | `bline` | `components/bline.css` | [`bline.html`](../bline.html) | hover, active, focus | **step 5, and it was not in the register** | **fluid**. grows and wraps with the pane or the column it stands in | **response**, a ground at 120ms |
| Molecules |  | `cons` | `components/cons.css` | [`cons.html`](../cons.html) | is-empty | **step 5, and it was not in the register** | **does not adapt**. inside a dialog, and it takes the measure with the rest of the prose | **does not move**. No interactive state to move between |
| Molecules |  | `contact` | `components/contact.css` | [`contact.html`](../contact.html) | **`is-gone`**, one domain state and no interaction states | **step 5, and it was not in the register**. The state arrived at **stage 12**, ordered by `escalate-no-recipient` | **does not adapt**. Seven instances, three on a system state and four inside the escalate dialog, and width adds nothing to either | **does not move**. A domain state is a fact about the world, not a response, so there is nothing to move between |
| Molecules |  | `covers` | `components/covers.css` | [`covers.html`](../covers.html) | none, not interactive | **step 5, and it was not in the register** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Molecules |  | `axisb` | `components/axisb.css` | [`axisb.html`](../axisb.html) | none, not interactive | **step 5, and it was not in the register** | **does not adapt**. the second axis of a rejection, inside a dialog | **does not move**. No interactive state to move between |
| Molecules |  | `sa-offer` | `components/sa-offer.css` | [`sa-offer.html`](../sa-offer.html) | none, not interactive | **step 5, and it was not in the register** | **does not adapt**. the standalone route, capped at `--width-sheet` on purpose | **does not move**. No interactive state to move between |
| Molecules |  | `addr` | `components/addr.css` | [`addr.html`](../addr.html) | none, not interactive | **step 5, and it was not in the register** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Molecules |  | `annun` | `components/annun.css` | [`annun.html`](../annun.html) | none, read only in the MVP | **step 5, and it was not in the register** | **fluid**. grows and wraps with the pane or the column it stands in | **does not move**. No interactive state to move between |
| Organisms | containing no other organism | `doc` | `components/doc.css` | [`doc.html`](../doc.html) | none, not interactive | **step 5, and it was not in the register** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
| Organisms | containing another organism | `frame` | `components/frame.css` | [`frame.html`](../frame.html) | none, not interactive | **step 5, and it was not in the register** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `z1` | `components/z1.css` | [`z1.html`](../z1.html) | none itself. Two controls inside it carry the same one, and the second arrived 2026-08-27 | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport. At 360 it drops the keyboard trigger and KEEPS the theme control | **response**, a boundary and ink, on both controls at 120ms |
|  |  | `z2` | `components/z2.css` | [`z2.html`](../z2.html) | is-degraded | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `z6` | `components/z6.css` | [`z6.html`](../z6.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `rows` | `components/rows.css` | [`rows.html`](../rows.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `rows-moved` | `components/rows-moved.css` | [`rows-moved.html`](../rows-moved.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `optlist` | `components/optlist.css` | [`optlist.html`](../optlist.html) | none, not interactive | **round 3** | **does not adapt**. the list of them, inside a dialog | **does not move**. No interactive state to move between |
|  |  | `pane-body` | `components/pane-body.css` | [`pane-body.html`](../pane-body.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `pane-foot` | `components/pane-foot.css` | [`pane-foot.html`](../pane-foot.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `dialog` | `components/dialog.css` | [`dialog.html`](../dialog.html) | none, not interactive | **round 3** | **does not adapt**. a modal layer asks the same question at every width, and `--width-dialog` already caps it | **does not move**. No interactive state to move between |
|  |  | `rail` | `components/rail.css` | [`rail.html`](../rail.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `rail-foot` | `components/rail-foot.css` | [`rail-foot.html`](../rail-foot.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `door` | `components/door.css` | [`door.html`](../door.html) | none, not interactive | **round 3** | **does not adapt**. the sign in surface. A wider sign in form is a wider sign in form | **does not move**. No interactive state to move between |
|  |  | `brief` | `components/brief.css` | [`brief.html`](../brief.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `scrim` | `components/scrim.css` | [`scrim.html`](../scrim.html) | none, not interactive | **round 3** | **does not adapt**. one rule at the point: at a narrow width the dialog it holds becomes the screen | **does not move**. No interactive state to move between |
|  |  | `z4` | `components/z4.css` | [`z4.html`](../z4.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `z5` | `components/z5.css` | [`z5.html`](../z5.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `z45` | `components/z45.css` | [`z45.html`](../z45.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `screen` | `components/screen.css` | [`screen.html`](../screen.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |
|  |  | `shell` | `components/shell.css` | [`shell.html`](../shell.html) | none, not interactive | **round 3** | **the point**. a zone of the shell, and the shell is the only thing that measures the viewport | **does not move**. No interactive state to move between |

**75 rows, 75 built. Every component is closed, and `kit.css` is deleted.** The register grew and shrank three times and section 13 says why. Round 0 was two components together rather than one: the button is the reference component, and its dominant content form is label plus key at 83 of 157, so a reference that could not show its own dominant form would not have been one. `key` therefore leaves the marks group with five rather than six.

**The register lost two rows in round 1, and the reason is the splitting criterion rather than a cut.** `input`, `textarea` and `select` were three rows with the same anatomy, which here is none at all: no child zones, no order, and one declaration between them. What differs is which element the browser needs for the kind of answer being collected, and that is a variant axis. The register already treated it as one a level up, where `field` carries "control: textarea 21, input 9". **Atoms go from 19 to 17 and the total from 62 to 60.** Consolidation runs in both directions: step 2 split `chip` in two and took seven things off the variant list, and this is the same criterion reaching a row it had not.

---

## 13. Thirteen components the register did not have, found at step 5

**The register was built at step 2 from a browser census and it missed thirteen.** They were found by a systematic scan rather than by noticing: every class that owns a rule block in `kit.css`, minus the register, minus the declared zones, minus the declared places, minus the viewport twins. Twenty one classes came back and thirteen of them are components by the register's own criterion, which is that a thing has its own set of child zones and stands on a screen.

**Why the census missed them.** It counted CONTROLS, and every one of these is a container or a text composition. Section 9 says the anatomy column was read off the rendering, and it was, but only for the rows the control census had already produced. A component with no control in it never entered the list to be measured.

| Level | Component | Grey | Pages | Its zones | What it is |
|---|---|---|---|---|---|
| Molecule | `claim` | 131 | 24 | `.txt`, `.tag`, `.src` | **the line of evidence**, and the second most common thing in the case pane after the block. It is what `tag` and `src` stand inside, and both their pages already name it |
| Molecule | `lat` | 26 | 26 | `.mark`, the label, `.why`, and the row states `.off` and `.ceiling`, joined at stage 13 by `.withdrawn` and `.unearned` | **the latitude ladder.** `CLAUDE.md` names calibrated trust as the only surviving differentiator and this is the element that carries it. `mark` is written and the ladder it lives in was not |
| Molecule | `bline` | 19 | 7 | `.n`, `.go`, `.ex` | the counted line in the shift brief. A LINE and not a card, and the brief's block table rules out the alternative |
| Molecule | `cons` | 9 | 9 | `.is-empty`, `b` | the consequence box on reject and escalate: what happens if you file this |
| Molecule | `contact` | **3** | 3 | `.who`, `.meta`, `p` | who a systemic notice tells you to call. **The first count here said 6 on 3 and named the escalate dialog, and both halves were wrong:** a reader with clean context counted the class and found three, all on the outage pages. The other three were `out-contact`, a zone of `outage`, merged by a word boundary in the count. The escalate dialog carries its recipient under `block--rcpt`, which has no coloured rendering at all |
| Molecule | `addr` | **5** | 5 | `code` | the address block. `kit.css` calls it **one component** in as many words: it existed twice, on 5.4 and on 8.1, with the same hairline and the same wrapping. The count said six; the sixth is node 8.1's `nf-addr`, which section 11 keeps out of the kit. `kit.css` also says the sign in page **can** adopt it, and no door page has |
| Molecule | `covers` | 4 | 4 | `.k`, `.v` | a label and its value, stacked. **In the LOG's reading pane, not the shift brief:** `log`, `log-narrowing`, `case-history` and `case-history-superseded`. The first reading put it in the brief and no shift screen carries the class |
| Molecule | `axisb` | 3 | 3 | `.locked` | the second axis of a rejection, and the reason four taps never became five |
| Molecule | `sa-offer` | 3 | 3 | `.why` | the standalone route's offer to open the case in the queue |
| Molecule | `annun` | **0 in any file** | 55 at runtime | `b`, `.sep`, `.ovrd` | the annunciator. Injected by `design/_shell.js`, exactly like `navitem`, `z1` and `z2`, which is why an inventory taken from the screens alone cannot see it |
| Atom | `arriving` | 4 | 4 | `::after` | **loading, and it is a shape that fills.** Never a spinner and never a skeleton of the whole screen |
| Organism | `doc` | 5 | 5 | `h1`, `.stampline` | the document body of a log entry: a screen that is a page rather than a console |
| Organism | `frame` | 5 | 5 | holds `rail` and `rail-foot` | **the framed record.** `--width-frame` is a token in `tokens.css` and its consumer was not in the register. The marking is a frame and not a banner: a banner scrolls away, and somebody who arrives by permalink and reads the middle must still know what they are reading |

**The register is 75: 18 atoms, 36 molecules, 21 organisms.** It was 62 at step 2, went to 60 in round 1 when `input` absorbed `textarea` and `select`, went to 73 here, and to 75 at stage 12 with `keyrow` and `miss`. **The scope is not cut:** the pack is explicit that a system without a component that stands on a screen is incomplete by definition, and every one of these stands on at least three.

**Eight of the twenty one were not components and each has a home.** `doorbtn`, `doormark` and `doordest` are zones of `doorcard`; `out-contact` is a zone of `outage`; `sa-fresh` and `sa-route` are zones of the standalone pane head; `z6-more` is a zone of Z6; `gone-all` is one instance and becomes `tomb--all`. **`icon` has zero instances anywhere** and goes to list three of the reconciliation as a class nobody wears: it is the stage 07 icon class, superseded by the CSS masks.

---

## 14. Patterns, stage 09

**A pattern is a level, not a folder of more components.** It is a composition that already stands on three or more screens, it owns no colour, and every declaration in it was CUT out of a component file rather than written for it. The counter runs on `wireframes/`, because colour holds 52 pages of 62 until stage 12 and three occurrences there would be a statement about the sample wearing the name of a rule.

**All four are the same shape, and naming it is what kept this level to four files.** A pattern here is a FILLING: one container component, filled with a set of zones, where the container's other filling drops zones and grows different ones. Stage 08 ruled that a zone which disappears means a different thing rather than a variant; applied one level up, that rule produces exactly these four and no others.

| Pattern | File | Page | Host | Its zones | Grey | Colour | Rules moved in |
|---|---|---|---|---|---|---|---|
| `queue-list` | `patterns/queue-list.css` | `queue-list.html` | `z4` | scopebar, readout, banner, rows, qfoot | 38 | 29 | 2, from `z4.css` |
| &nbsp;&nbsp;`--tenant` | the same file | the same page | `z4` | the same five | &ndash; | 3 | 3, written here |
| `shift-brief` | `patterns/shift-brief.css` | `shift-brief.html` | `z4` | readout, banner, brief, qfoot | 7 | 7 | 2, from `z4.css` |
| `case-pane` | `patterns/case-pane.css` | `case-pane.html` | `z5` | pane-head, pane-body, pane-foot | 38 | 29 | 9, from `z5.css` and `z45.css` |
| `fleet` | `patterns/fleet.css` | `fleet.html` | `z5` | pane-head, frow, fleet-more | 10 | 10 | 1, from `z5.css` |

**What made a rule a candidate was mechanical rather than a judgement:** a selector, written inside one component, that names another component AND is conditioned on which filling the host is carrying. Fourteen matched, across three component files. `.z4 > .banner` did not, and the difference is the point: it places the banner whichever filling the column carries, so it belongs to the zone.

**Two classes were renamed with their rules.** `.z4--log` became `.queue-list--log` on two coloured screens and `.z4--shift` became `.shift-brief` on seven: both named the host rather than the thing they were filling it with. `wireframes/` keeps the old names, because it is frozen, and the coverage check carries the map.

**Two things tried to move in and were sent back, and an audit against these files' own headers is what caught both.** `.pane-head--standalone h1` turned out to be a rule stage 08 had written in TWO places, the component's own file and `z5.css`, with the second winning on specificity so the first looked like it worked; the component keeps it and the duplicate is gone. `.sa-fresh` and `.sa-route` carry a line, a family and an ink, so moving them would have broken the one rule that makes this a level rather than a second folder of components; they stayed in `places.css`.

**One variant arrived after this table was closed, and it is the only row with a dash under Grey.** `queue-list--tenant` has no grey original because node 7.1 was never drawn at stage 04: it is one of the six nodes `CLAUDE.md` names as work outside the rollout, and it arrived straight into colour. Its three rules came from nowhere else, which is the second thing that makes it unlike every other row here, and the reason they are on this level rather than in `z4.css` is the same mechanical test the paragraph above states: two of the three name a component the file does not host, and all three are conditioned on which filling the column is carrying. What it forbids on a screen is what it makes possible in the system: a width in a screen file, which is what a designer reaches for when a split is wrong on one node.

**`fleet.css` has one rule and that is the finding rather than the shortfall.** The composition is carried entirely by its parts. A pattern that needs no arrangement is a pattern whose components were drawn to fit each other, which is the outcome this level is for.

**Six candidates stand on two screens and are listed on `patterns.html`** rather than forgotten: they are not patterns today and the next round finds a list instead of starting the count again.

**Nothing moved.** 102 renderings of 51 screens at 1440 and 360, before the extraction and after it: 0 tree shape changes, 0 boxes moved. `design/kit/checks/refactor.mjs`.
