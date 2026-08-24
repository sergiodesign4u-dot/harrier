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
| `key` | 152 | 34 | inside `btn`, inside `opt` | the keyboard letter on a control. `.key:empty` collapses |
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
| `nar` | 151 | 37 | `claim`, `txt`, `src` | `--sep`, `claim--absence`, `claim--against` |
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
| `expand` | 27 | 23 | `summary` | the depth-one-key-away control |
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
| `summary` / `expand` | 27 uses over 23 pages and **no styled family of its own**: it is the depth-one-key-away control of design principle 2 and it has never been given a component |
| `a.bline` | 3 uses, 3 pages, a link form that belongs to nothing |
| `a.t-x` | 3 uses, 2 pages |
| **checkbox, radio, toggle** | **absent from the whole product.** `optlist`/`opt` is the radio pattern implemented as a list of links with a keyboard letter. It works and it is not a radio, so the kit owes a decision: keep the pattern and name it, or introduce the primitive |

---

## 7. What this stage takes and what stage 08 will take

This inventory reads **jobs** off the grey wireframes: what is clickable at all, and how many forms one job wears today. Stage 08 will read **forms** off the assembled coloured screens. **The difference between the two lists is the brief for the rollout**, and it is the reason this list is taken now rather than after the sample is painted.

---

## 8. One-off, 25 classes

Not in the kit. 18 of the 25 sit on two pages: `keyboard.html` carries 11 (`keys`, `kwhere`, `kscope`, `kgap`, `kk`, `ksep`, `legend`, `pal`, `d`, `t`, `do`) and `not-found.html` carries 7 (`nf`, `nf-note`, `nf-say`, `nf-exits`, `nf-addr`, `nf-note--sep`, `seek`). The rest are single state helpers: `gone-all`, `is-gone`, `esc-first`, `dialog--map`, `is-none`, `rmp`, `rmp-row`.

**`keyboard.html` is worth naming.** Eleven one-off classes on one page means the keyboard map is effectively its own small design system, and design principle 5 puts keyboard before mouse. If it ever gets a second page, all eleven become kit candidates at once.

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
| `link` | **24** | 24 | **size, set by the container:** 11px in `gnote` 15, 12.5px in `expand` 6, `nar` 2, `empty` 2, Z6 1 | inline, inside whatever encloses it |
| `key` | 152 | 34 | none. **The border follows the host**, which is the whole point of the component | `btn` 85, `opt` 45, `keys` 22 on the keyboard map |
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
| `select` | 4 | **1** | none. **No coloured rendering anywhere**, form taken from `input` | `rmp-row`, a one-off class |

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
| `expand` | 32 | 28 | **none.** Moves to a native `<details>`, absorbing the five `summary` on the door | `block` 27, `doorhelp` 5 |
| `rota` | 7 | 7 | **state:** `is-now` on one row | `block` 7 |
| `toast` | 4 | 2 | **kind:** base 3, `--alert` 1, which swaps the dismiss control for a hold | `z6` 4 |
| `doorcard` | 5 | 5 | banner and block are optional zones | `door` 5 |
| `outage` | 3 | 3 | none | `z4` 3 |
| `chips-hd` | 7 | 7 | none | `pane-head` 7 |
| `fleet-more` | 10 | 10 | none | `z5` 10 |

**Six molecules stopped pretending to be compositions.** `block`, `nar`, `prov`, `gnote`, `empty` and `tomb` between them show 71 distinct zone sets and **one computed form each**. They are slots: a heading and a free space. Their pages say so in as many words, so nobody looks for a variant matrix that does not exist.

### 9c. Organisms, 19

| Component | Product | Pages | Variants, by axis | Where it stands |
|---|---|---|---|---|
| `shell` | 62 | 62 | none | `body` |
| `screen` | 62 | 62 | **route:** authenticated 55, door 5, no strip 2 | `shell` |
| `z1` | 57 | 57 | **session:** signed in 55, `z1--out` 2, which drops the nav, the map and the annunciator | `screen`. **The class is in no html file:** `design/_shell.js` injects it |
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
| `z4--log`, `--shift`, `--entry`, `--sys`, `--solo` | 23 | context. They change the children, not `z4` |
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
| `div.expand` | `details.expand` | 23 | 27 |
| `.doorhelp summary` | `details.expand` | 5 | 5 |
| `.opt .key` | `.key`, one declaration, border on `currentColor` | 39 | 45 |
| `.pane-body .frow` | `.frow.frow--flush` | 12 | 12 |
| `.dialog > footer .hint` | `.hint`, one declaration | 6 | 11 |
| `.claim .src`, `.claim .tag`, `.frow .rec`, `.frow .was`, `.lat .mark`, `.field > label`, `.field .hint` | the same class, declared on its own rather than through the parent | all | all |

**Two rows change markup and not one pixel**, so the comparison at step 8 will not see them and they are recorded here instead: the move to `details.expand` and the naming of `navitem` and `link`. **One row changes appearance and is entered as consolidated drift** in `tokens-audit.md`: `.opt .key` moves from a rule-coloured border to the host's colour, 39 places.

---

## 11. What stage 08 took, and what it left

Section 7 above said the difference between the two lists is the brief for the rollout. It is now measured rather than predicted.

**Taken.** Every one of the 55 rows has a level, a variant matrix built from axes rather than from occurrences, and a place where it stands. Six components stopped claiming variants they never had. Three components were added that had been standing unnamed on 156 nodes between them.

**Left, and each with an address.** `select`, `block--rcpt`, `z4--solo`, `z5--paper` and `dialog--map` have no coloured rendering; each takes its form from its nearest relative rather than from an invention, and the four that wait belong to screens that are still grey. The keyboard map keeps its eleven one-off classes and stays out of the system. Checkbox, radio and toggle are absent from the product and are not introduced: `optlist` is the radio pattern, and it is named as one rather than replaced.
