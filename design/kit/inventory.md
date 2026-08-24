# The component inventory of the whole product

Stage 07 step 2. Read **out of all 62 wireframe screens plus `wireframes/_nav.js`**, mechanically rather than by eye, and not from the coloured sample. The sample narrows what gets **painted**; it never narrows what we **know about the product**. A component not counted here surfaces at the rollout, where it drags its states, its pattern and its adaptive behaviour along with it.

**Level is born here, in one column, and every later stage only reads it.** `atom` contains nothing else from the kit. `molecule` contains atoms. `organism` contains molecules or is the shell of a screen, and that is the ceiling. Grouping by purpose is forbidden: by purpose a button and a sign-in dialog are both "forms", and the `@import` order would then put the dialog above its own parts in the cascade.

**The rule and the Level column disagree on about ten rows, and the rule is the one that is wrong.** A reader with clean context applied it literally at step 6 and got a different answer for `row` (it contains `sev`, which is a molecule, so by the rule it is an organism), for `readout`, `pane-head`, `qfoot`, `rota` and `expand` (they contain only html elements and text roles, so by the rule they are atoms), and for `block` (its Contains column says *anything*). **The column is what stages 08 and 12 read, so the column stands and the rule is amended here:** a level is decided by what a component contains **from the kit or from the text roles**, and by whether it is addressed as one thing by a screen. `row` is a molecule because a screen places a row, not a severity. `pane-head` is a molecule because it is a titled block, not a word. Where the two readings still differ, the column wins and this paragraph is why.

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
