# The census of forms, measured in a browser

Stage 07 read **jobs** off the grey wireframes: what is clickable at all, and how many class signatures one job wears. This file reads **forms** off the assembled coloured screens: which are decided, where they drift, and which have no drawn form at all.

The difference between the two is what the consolidation at step 2 has to rule on, and what the rollout at stage 12 would otherwise invent again on every screen it builds.

**The instrument is the computed style, not the stylesheet.** Every number below comes from `getComputedStyle` on a rendered node. A rule read out of a file says what was written; a computed value says what arrived, and the two part company wherever a later selector wins. Reading the file would also have missed the whole class of finding in section 4, because the controls there carry no class to look up.

---

## 1. What was measured

| | |
|---|---|
| Pages | **52**, every coloured screen in `design/`, states included |
| Viewports | **360** and **1440**, so **104 renderings** |
| Width, measured not intended | `document.documentElement.clientWidth === 360` on all 52. Not one rendering came back 345 or 375 |
| Horizontal overflow | `scrollWidth > clientWidth` on **zero** renderings, both widths |
| Nodes matching the control criterion | **3784** |
| Visible | **3394** (1880 at 1440, 1514 at 360) |
| **Of those, product** | **1308** (837 at 1440, 471 at 360) |
| Documentation chrome, excluded | **2086**, the `design/_nav.js` panel that travels with every page |

**The control criterion**, applied in the page rather than in the source: `a`, `button`, `label`, `[role=button]`, `[onclick]`, **or** an element introducing `cursor:pointer` that its parent does not have. The second half catches div controls without counting an `svg` inside a button as a second button.

**The panel had to be subtracted, and the first pass did not subtract it.** The documentation sidebar is 2086 of the 3394 visible controls, which is 61 per cent, and it is not the product. Left in, it put a family called `nav-link` above `btn` in the ranking and reported four font sizes of drift on a bare `<a>` that turned out to be the panel's own state list. Every control now carries whether it sits inside `#sidebar`, and the tables below are the product only.

**Snapshot first, collapse afterwards.** Twenty three properties were taken from every node (type, both axes of padding, radius, four border widths, three border colours, border style, background, background image, colour, transform, box shadow, text decoration, display, cursor, box size) and nothing was keyed or deduplicated during the walk. The collapsing happened on the full set, and what it collapsed by is named in each table. Keying during the walk would have decided that two controls were the same before it had looked at the properties by which they differ.

---

## 2. Drift inside a family, at 1440

Per family, a property with more than one distinct value. **More than one value is a candidate for drift, not a verdict**: it is drift until an axis from `docs/inventory.md` accounts for it. The census counts; step 2 rules.

| Family | n | Property | Distinct values | Reading |
|---|---|---|---|---|
| `row` | 191 | background, box shadow | 2 each: transparent ×175 / `--color-surface-sel` ×16, none ×175 / accent inset ×16 | **state**, `is-selected`. Accounted for |
| `row` | 191 | background image | 2: none ×190, diagonal hatch ×1 | **state**, `is-superseded`. Accounted for |
| **unclassed `a` in Z1** | **132** | weight, colour, both border colours | 2 each | **the global nav item, and it has no class at all.** Section 4 |
| `btn` | 106 | weight, background | 2: 400/`--color-ground` ×68, 600/`--color-accent` ×38 | **axis 1, emphasis**. Accounted for |
| `btn` | 106 | colour | 3: `--color-text` ×43, `--color-accent-ink` ×38, `--color-text-dim` ×25 | three emphases, accounted for |
| `btn` | 106 | **display** | **3: flex ×92, inline-flex ×8, block ×6** | **not on any axis. Drift** |
| `src` | 92 | colour and both border colours | 2: `--color-text` ×77, `--color-text-dim` ×15 | **not on any axis.** The inventory says 118 of the `src` are links and 13 are not; the dim 15 line up with the non-links. **Drift or an undeclared axis, and step 2 must say which** |
| `chip` | 87 | border style | 2: solid ×55, dashed ×32 | **axis 1**, `chip--ghost`. Accounted for |
| `chip` | 87 | background, colour | 2 and 3 | `chip--solid` inverts to the text colour. Accounted for |
| `chip` | 87 | **line height** | **2: normal ×78, 15.95px ×9** | **drift** |
| `chip` | 87 | **text decoration** | **2: none ×78, underline ×9** | **drift.** The same 9. A chip that is a link keeps the link underline |
| `frow` | 72 | padding left and right | 2: 16px ×66, 0px ×6 | `frow--head`. Accounted for |
| `opt` | 44 | border width, border colour, background | 2 each | **state**, `is-chosen`. Accounted for |
| `kmap` | 44 | none | | no drift |
| `rail-out`, `t-x`, `bline` | 5, 3, 3 | none | | no drift |

**Border colour, the property the pack calls the most expensive, is clean.** Three lines exist and each is a token: `--rule-hair` for what separates, `--rule-edge` for a panel edge, `--rule-control` for what identifies a control. No family carries a fourth. A product that had four lines on one role would show it here, and this one does not.

### The result that reframes step 2

Across all **1308** product control instances at both widths:

| Property | Distinct computed values | Off the scale |
|---|---|---|
| colour | 4 | **none** |
| background | 6 | **none** |
| border top colour | 6 | **none** |
| border bottom colour | 8 | **none** |
| radius | 1 | **none** |
| border widths | 2 and 3 | **none** |
| font size | 4 | **one:** `0px`, the `.kmap` glyph button, 88 instances |
| padding top and bottom | 6 | **one:** `6px`, the same `.kmap`, 88 instances |

**Not one colour on a control in the coloured product is off the palette.** The consolidation at step 2 is therefore not about values on controls. It is about class families, about the controls in section 4 that have no family, and about the drift in section 5 of `tokens-audit.md`, which lives in text and rules rather than on controls.

---

## 3. One job, several forms

The same visible label carried by different class signatures. Taken from the rendered label, so a control that changes signature between the two widths is caught as such rather than read as a second form.

**17 labels of 118 wear more than one signature. Five are real divergence.**

| Job | Forms | Pages | Verdict |
|---|---|---|---|
| `Escalate e` | `a.btn`, `a.btn.btn--primary`, `a.btn.btn--primary-narrow`, `a.btn.btn--primary.only-narrow`, `a.btn.only-desk` | 14 | **five.** The main action of its zone on some screens and an ordinary action on others, never decided out loud |
| `Open the queue` | `a.btn`, `a.btn.btn--quiet`, `a.btn.btn--primary.only-desk`, `a.btn.btn--primary.only-narrow` | 11 | **four**, and the emphasis flips between the two widths on the same screen |
| `Try again` | `a.btn`, `a.btn.btn--primary`, `button.btn.btn--primary.doorbtn` | 6 | **three, and one is a `<button>` while two are links** |
| `Open the log` | `a.btn`, `a.btn.btn--quiet`, `a.rail-out` | 7 | **three**, one of them a different component |
| `All tenants ▾` | `a.chip`, `button.chip` | 25 | **the same filter chip is a link on some screens and a button on others.** A semantics divergence, not a style one: it changes what a screen reader announces and what the keyboard does |

**Twelve rows are legitimate and are not a second form.**

- **State, 7 rows.** `a.row` against `a.is-selected.row` and `a.is-superseded.row`; `a.opt` against `a.is-chosen.opt`, four labels.
- **Viewport twin, 5 rows.** `Accept a`, `Amend m`, `Reject r`, `Open the log entry`, `Hold it locally`: the same control declared twice so the narrow rendering can differ. Each pair shows one signature at 1440 and one at 360 and never both at one width.

This is an independent measurement of stage 07's finding, taken from the coloured product with a different instrument, and it lands on the same number: **five jobs wearing more than one form**. Stage 07 first wrote eleven, corrected itself to five after a reader counted the rows, and the browser agrees with the correction.

---

## 4. A control without a form

Two lists, and they answer different questions. The first is what the inventory declares and the coloured screens do not draw. The second is what the coloured screens draw and no component covers.

### 4a. Declared and not drawn

Counted by class across the whole grey corpus (`wireframes/*.html`, hub excluded) against the coloured screens.

| What | Grey corpus | Coloured | Why it is missing |
|---|---|---|---|
| `select` | 4 uses, 1 page | **0** | the only form primitive with no coloured rendering anywhere. It is in the kit on the form-primitive exception rather than on the criterion |
| `block--rcpt` | 4 pages | **0** | the receipt block, and all four pages are the escalate family, none of which is coloured |
| `z5--paper` | 3 pages | **0** | the pane standing as a sheet |
| `z4--solo` | 1 page | **0** | |
| `dialog--map` | 1 page | **0** | the keyboard map, which is also the page carrying eleven one-off classes |
| **checkbox, radio, toggle** | **0** | **0** | absent from the entire product. `optlist`/`opt` is the radio pattern built as a list of links with a keyboard letter. It works and it is not a radio |
| **icon + label, icon only** | **0** | **0** | two thirds of axis 2 is empty. Sixteen icons exist in the kit and stand on no screen |

**51 of the 55 components in the inventory are drawn in colour**, and the four that first read as missing were an artefact of counting by class: `label`, `input` and `textarea` are styled as elements, not classes, and the element count finds them on 10, 5 and 5 coloured pages. Only `select` survives verification.

**Verified before being written down.** The pack warns that a walk cannot see what a state switches on, so every row above was checked against the source for a `display:none` that a class or a scroll turns on. None of the five was hidden that way; all five are genuinely absent from the coloured corpus because the screens that carry them are still grey.

### 4b. Drawn and covered by no component

This list is the one the file-reading half of the audit could not produce, because the finding is the **absence** of a class.

**190 of the 837 product controls at 1440 carry no class at all.**

| n | What it is | Where | Reading |
|---|---|---|---|
| **132** | **the global navigation item**, Queue / Shift / Log | Z1, 44 pages | The most repeated control in the product, and the only styling it has is the descendant selectors `.z1 nav a` and `.z1 nav a[aria-current="page"]`. It is not in the inventory as a component, it has no name, and stage 08 has to give it one. Its two forms, current and not, are a real state axis carried entirely by an attribute |
| 15 | `Show 3 more signals` | `.gnote > a`, 15 pages | the depth-one-key-away link of design principle 2, at 11px |
| 6 | the expansion link | `.expand > a`, 2 pages | at 12.5px |
| 14 | the form label | `label` in `.field`, 10 pages | the element form of the `label` primitive. Expected, and it is why 4a undercounted |
| 5 | `Cannot get in?` | `summary` in `.doorhelp`, 5 pages | the `summary`/`expand` control that the inventory already names as a control without a family |
| 2 | an inline link in a narrative line | `.nar > a` | 12.5px |
| 2 | an inline link in an empty state | `.empty > a` | 12.5px |
| 1 | `Open the case` | in Z6, the toast | 12.5px |
| 13 | hub furniture | `design/overview.html` | a document, not a product screen |

**The inline link is a control without a family, in three sizes.** Counting the 15 at 11px, the 6 and 2 and 2 and 1 at 12.5px, the product has a bare inline link doing real work on 24 nodes across the screens, and its size is decided by whatever encloses it. There is no `link` component and nothing in the inventory names one.

---

## 5. What step 2 has to rule on

Eleven rows. Every one of them is a decision, and none of them is taken here.

1. The global nav item, 132 instances with no class. A component, or a part of `header`.
2. The inline link, 24 instances in three sizes. A component, or a rule in `base.css`.
3. `btn` display: flex, inline-flex, block on one class. One value, or a named axis.
4. `src` in two colours. An axis, or drift.
5. `chip` line height and underline, 9 instances. Drift.
6. `Escalate e`, five forms.
7. `Open the queue`, four forms, emphasis flipping by width.
8. `Try again`, a `<button>` and two `<a>` for one job.
9. `Open the log`, three forms across two components.
10. The filter chip as link and as button on 25 pages.
11. `select`, `block--rcpt`, `z5--paper`, `z4--solo`, `dialog--map`: forms with no coloured rendering, which stage 12 will otherwise invent screen by screen.

### Closed at step 2

Every row above was ruled on. Three were withdrawn on verification, which is the point of verifying before repairing.

| Row | Ruling |
|---|---|
| 1. the global nav item, 132 unclassed | a component, `navitem`, with a state axis of current and not current |
| 2. the inline link, 24 in three sizes | a component, `link`, and the size is set by the container rather than by importance |
| 3. `btn` display in three values | **withdrawn.** `.btn` declares `inline-flex`; `pane-foot`, `wrapline`, `out-act` and `doorform` are flex containers and blockify their items, and `block` is `only-narrow`. Nothing was written twice |
| 4. `src` in two colours | **withdrawn.** The 18 dim ones inherit `claim--absence`, the state where Clerk found nothing. Inherited from the parent's state, not a second form |
| 5. `chip` line height and underline, 9 | drift, and it dissolves with row 10: the nine are the chips that are links |
| 6. `Escalate e`, five forms | three of the five are `only-desk` and `only-narrow` twins of the other two. One emphasis decision remains and it is the screen's, not the system's: escalation is the main action where it is the only exit and an ordinary one elsewhere. Recorded, not flattened |
| 7. `Open the queue`, four forms | the same, and the emphasis flip between widths is deliberate on those screens |
| 8. `Try again`, a button and two links | the `<button>` submits a form on the door and is correct. The two links are correct. **Not a divergence**, and the same reading clears `span.btn[aria-disabled]`, since a disabled link cannot be a link |
| 9. `Open the log`, three forms across two components | `a.rail-out` is a different component doing the same job. It stays: the rail is the printed record's furniture, not a button bar |
| 10. the filter chip as link and as button, 25 pages | **the real one.** 107 buttons against 15 links for one job, and it changes what a screen reader announces. Settled at step 6 with the markup: a chip that filters is a `<button>`, a chip that navigates is an `<a>`, and which one each is comes from where it goes |
| 11. five forms with no coloured rendering | each takes its form from its nearest relative: `select` from `input`, `block--rcpt` from `block`, `z4--solo` from `z4`, `dialog--map` from `dialog` with `--width-dialog-wide`, and `z5--paper` collapses into `is-paper` because it is the same state under a second name |

---

## Measurement after the system (step 6)

Reserved. The same walk, the same two widths, the same instrument, run again once the system is in place. Every row of section 5 has to come back closed, and the closing is what the second measurement proves rather than asserts.
