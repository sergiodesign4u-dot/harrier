# The audit of `kit.css`, against every place it is actually used

Facts, not decisions. What every variable is, where it stands, which role it plays in each place, and where the file and the screens have drifted apart. The consolidation at step 2 rules on this; nothing here rules on anything.

**Two instruments, taken independently.** Claude counted from the source with a script; Codex was given the same corpus read-only and returned its own five lists before seeing this table. Where the two disagreed, the place in the file was reopened and the result is stated, not voted on. The column **found by** carries `Claude`, `Codex` or `both`.

**Corpus.** `design/kit/kit.css`, `design/kit/kit.html`, `design/kit/shell.html`, `design/kit/proposed-variables.md`, all 52 coloured `design/*.html` with their state pages, plus `design/_nav.js` and `design/_shell.js`, which put markup on every screen at runtime. `wireframes/` is not read as a source of tokens: it is a grey prototype on its own `_wf.css` and does not belong to the product's values. It is read for one structural count only, the recount of the one-off list in section 7.

---

## 1. The numbers, for the summary at step 9

| | |
|---|---|
| Names declared in `kit.css` | **58** |
| Declaration sites | **63**: five names are declared more than once, `--row-tracks` five times and `--pane-w` twice |
| Names carrying an origin, in the file or in `DESIGN.md` | **57 of 58** |
| Declaration sites carrying one | **60 of 63** |
| **A value from nowhere** | **3**: `--width-dialog`, and two of the five `--row-tracks` values |
| Used nowhere in the corpus | **9**, of which **4 are true orphans** and 5 are consumed across a file boundary |
| Rule blocks in `kit.css` | **380** |
| Distinct classes in `kit.css` | **164** |
| Components they have to become | **55**, from `docs/inventory.md`: 16 atoms, 23 molecules, 16 organisms |
| Colour values on product controls that are off the palette | **0 of 1308 instances** |
| Literal values found bypassing an existing variable | **10**, and 6 of them are in showcase furniture rather than in the product |
| Off-scale literals inside product rules | **17 sites** across six scales |

---

## 2. Every variable, where it stands and what it does there

`uses` counts `var()` occurrences in the corpus. `rules` counts the rule blocks of `kit.css` that read it.

### Colour, 15 names

| Variable | Value | Uses | Where, and the role it plays there | Surface it paints |
|---|---|---|---|---|
| `--color-ground` | `#11110f` | 34 | `body`, `.wf-screen`, `.z1`, `.z4`, `.chip`, `.btn`, `.dialog`, `.toast`, `.banner`: the page under everything. **And as ink** on `.annun .ovrd`, `.chip--solid`, `.btn--primary-narrow`: the text that sits on an inverted plate | **fill ×24, ink ×5** |
| `--color-surface` | `#171714` | 22 | `.z2`, `.z5`, `.row--head`, `.row:hover`, `.expand`, `.frow--head`, `.opt.is-chosen`, `.rota .is-now`: the raised plane, and the hover ground of two different families | fill only |
| `--color-surface-sel` | `#2a2418` | 3 | `.row.is-selected`, `.frow:hover`: the selected row and one hover | fill only |
| `--color-text` | `#e9e4da` | 40 | `body` and 21 more as ink. **As fill** on `.chip--solid`, `.bars i.on`, `.rail`. **As line** on `.z1 nav a[aria-current]`, `.bars i`, `.frame` | **ink ×22, fill ×9, line ×6** |
| `--color-text-dim` | `#aaa397` | 94 | the most used variable in the product. Secondary ink on 81 sites: `.z1 nav a`, `.row .dim`, `.field > label`, `.hint`, `.anote`, `.stamp`, `.gnote`, every count and every timestamp. **As line** on `.tomb`, `.anote` | **ink ×82, line ×4** |
| `--color-rule` | `#675f50` | 10 | almost entirely through `--rule-edge`. Direct on `.bars i` border and the panel badge | line |
| `--color-accent` | `#d29c3f` | 20 | `.btn--primary` fill, the current nav item's underline, `.z2 b`, `.row.is-selected` inset, `.frow` latitude, `.expand::before`. **The one colour that says "this is the decision"** | **ink ×6, fill ×5, line ×2** |
| `--color-accent-ink` | `#18140e` | 4 | text on `.btn--primary` and on the panel's Next badge. Exists only to sit on the accent | ink |
| `--color-failure` | `#b25d44` | 1 | **the swatch on `kit.html` and nothing else.** Declared, documented as unused, and still unused | fill, in documentation |
| `--color-hairline` | `#232219` | 12 | `--rule-hair`, plus `.expand`, `.btn--quiet`, `.btn[disabled]`, `.banner--quiet`, `.qfoot kbd`: the line that separates and never means anything | **line ×7, fill ×3, ink ×2** |
| `--color-edge` | `#7b7260` | 3 | only through `--rule-control`. The boundary of a control, raised until it clears 3:1 on all three grounds | line |
| `--color-sev-high` | `#d9704f` | 3 | `.sev` and the lit bars, selected by `:has()` on the count of bars | ink, and fill on the bar |
| `--color-sev-medium` | `#9d9182` | 2 | as above | ink and fill |
| `--color-sev-low` | `#828e96` | 2 | as above | ink and fill |
| `--color-scrim` | `color-mix(--color-ground 78%)` | 1 | `.scrim`. The one value changed by a user decision at stage 07 step 4, and **it has never been seen on a coloured screen**: every page carrying `.scrim` is a reject or an escalate | fill |

### Geometry and type, 25 names

| Variable | Value | Uses | Where |
|---|---|---|---|
| `--radius-ui` | `0` | 25 | every control and every plate. The console has no corners |
| `--radius-object` | `5px` | **0** | for printed objects. Orphan by definition |
| `--font-sans` | `Archivo` | 17 | `body`, `.btn`, `.chip`, headings, the wordmark |
| `--font-mono` | `IBM Plex Mono` | 55 | every count, key, timestamp, source, column head, stamp |
| `--size-xs` | `11px` | 49 | column heads, chips, meta, keys, hints, `.anote` |
| `--size-sm` | `12.5px` | 29 | the row, the frow, the narrative, the expansion |
| `--size-md` | `14px` | 13 | body, the nav item, `.btn`, the field |
| `--size-lg` | `17px` | 10 | pane title, dialog title, wordmark |
| `--size-xl` | `21px` | 7 | the one heading a page is allowed |
| `--leading` | `1.45` | 4 | body and the field |
| `--leading-tight` | `1.25` | 10 | every heading |
| `--space-1` to `--space-7` | 4 to 48px | 28, 83, 72, 45, 23, 8, 9 | one scale, 268 uses. `--space-2` and `--space-3` carry the density |
| `--zone-top` | `56px` | 1 | `.z1` |
| `--zone-strip` | `26px` | 1 | `.z2` |
| `--pane-w` | `380px`, `320px` below 1560 | 2 | `.z5` and the scrim's inset |
| `--row-tracks` | five values | 1 | `.row`, redefined per list. Section 6 |
| `--rule-hair` | `1px solid --color-hairline` | 30 | what separates |
| `--rule-edge` | `1px solid --color-rule` | 36 | a panel edge |
| `--rule-control` | `1px solid --color-edge` | 3 | what identifies a control. **Three uses against `--rule-edge`'s 36, and it is the one that clears 3:1** |
| `--focus-ring` | `2px solid --color-accent` | 1 | `:focus-visible` |
| `--measure` | `66ch` | **0** | orphan |
| `--width-sheet` / `-frame` / `-dialog` / `-toast` | 760 / 820 / 520 / 400px | 1 each | the four things that stop growing |
| `--width-dialog-wide` | `720px` | **0** | orphan, and its consumer is the keyboard map, which is not coloured |
| `--zone-notice-clear` | `180px` | 1 | what the page ends above at 360 so a notice hides nothing |
| `--track-display` | `-.038em` | 2 | **both in documentation**, not in the product |
| `--track-mono` | `.06em` | 8 | **all eight in documentation**, not in the product |
| `--track-wordmark` | `.16em` | **0** | orphan |

### The five panel names and the two aliases

| Variable | Uses in corpus | What it really is |
|---|---|---|
| `--nav-fg`, `--nav-active`, `--nav-muted`, `--nav-rule`, `--nav-badge` | **0** | **not orphans.** They are read by `/_nav.css`, which is outside this corpus, and they exist so the light documentation panel survives on the dark ground. A count taken inside the corpus alone calls all five dead, and all five are load bearing |
| `--s2`, `--s4` | 2 and 4 | compatibility aliases pointing at `--space-2` and `--space-4`, kept for **three inline `style` attributes** on `entry-gone.html`, `queue-empty.html` and `queue-streaming.html`, which live in the body and cannot be reached from the stylesheet. Twenty eight of the original thirty were deleted at stage 07 step 6 |

---

## 3. Drift of values

The same role written with values that are close and not identical.

| Class | What drifts | Values found | Against | Found by |
|---|---|---|---|---|
| mono tracking | **six values for one role** | `.04em` (`.chip--state`), `.06em` (`.claim .tag`, literal), `.08em` (`.row--head`, `.frow--head`, `.field label`, `.covers .k`, `.out-line .k`), `.09em` (`.rail`), `.1em` (`.block > h3`, `.block > h2`, shared block heading), `.14em` (`.anote::before`, `.toast .role`) | `--track-mono: .06em`, which no product rule reads | **Codex** |
| display tracking | 2 values | `-.02em` (both showcase headings), `-.01em` (`.wordmark`, `.doormark`) | `--track-display: -.038em`, which no product rule reads | **Codex** |
| font size below the floor | 2 values under `--size-xs` | `9.5px` (`.anote::before`, `.toast .role`), `10.5px` (`.annun` at narrow) | `--size-xs: 11px` | **Codex** |
| line height | **five values** | `1.2` (`.row--head`, `.frow--head`), `1.3` (`.rail`), `1.35` (`.row`), `1.4` (`.z6-more`, `.stampline`, outage sub, `.out-line .k`), `1.55` (`.anote`) | `--leading: 1.45` and `--leading-tight: 1.25` | **Codex** |
| spacing | 4 off-scale steps | `2px` (`.bars` gap), `5px` (`.src::after`), `6px` (`.z1 .kmap` padding), `18px` (generated on the hub) | `--space-1: 4px` is the smallest step | **both** |
| border width | a fourth line width | `2px` on `.z1 nav a`, `.z1 nav span`, `.expand`, `.toast--alert`, `.frame`, `.rail--foot`, `.gone-all` | all three rule tokens are `1px` | **Codex** |
| colour | **none** | | | |

**Colour does not drift, and that is the finding rather than the absence of one.** Every hex in the file is a declaration; the only literal colours anywhere are `#000` and `#fff` inside `@media print`, which are correct and were argued out loud in the file after two instruments flagged them independently. On the rendered product, all 1308 control instances resolve to palette values with nothing off it.

**The drift is in text, not in controls, and that is why the browser census did not see it.** The census walks controls; `.anote::before`, `.row--head`, `.block > h3` and `.stampline` are not controls. Two instruments looking at two different surfaces were needed, and neither alone would have produced this table.

---

## 4. One variable carrying several roles

The third axis of the split at step 3, and the tightest constraint on it. **A role declares the surface it paints**: ink at 4.5:1, fill and line at 3:1. A name that paints two surfaces passes one threshold and fails the other, and no table of text and background pairs can see it, because nobody declared it as text.

| Variable | Surfaces it paints today | The split it forces |
|---|---|---|
| `--color-text` | **ink ×22, fill ×9, line ×6** | the reading ink, the inverted plate under `.chip--solid`, and the lit bar. Three roles under one name |
| `--color-ground` | **fill ×24, ink ×5** | the page under everything, and the text that sits on an inverted plate. `--color-accent-ink` already exists for exactly this job against the accent, and no equivalent exists against the text colour |
| `--color-text-dim` | **ink ×82, line ×4** | secondary reading, and the dashed border of `.tomb` |
| `--color-accent` | **ink ×6, fill ×5, line ×2** | the filled decision, the accented word, and the current-item underline |
| `--color-hairline` | **line ×7, fill ×3, ink ×2** | the separator, the disabled fill, and the `.annun` separator glyph |
| `--color-sev-high/medium/low` | **ink and fill**, both | the severity word and the lit bar. Same value, two thresholds |

Six names, sixteen roles. **This is the whole reason the semantic level exists**, and it is read out of the uses rather than proposed.

---

## 5. Values written past an existing variable

| Where | What is written | The variable that already holds it | Found by |
|---|---|---|---|
| `kit.css:307` `.claim .tag` | `letter-spacing:.06em` | `--track-mono`, exactly `.06em` | Codex |
| `kit.css:483` `.qfoot kbd` | `1px solid var(--color-hairline)` | `--rule-hair`, exactly that | Codex |
| `kit.css:697` `.toast` | `line-height:1.45` | `--leading`, exactly `1.45` | Codex |
| `kit.css:844`, `863` `.nav-badge` | `font-size:11px` twice | `--size-xs` | both |
| `kit.css:949` `.z1 .kmap` | `padding:6px 8px` | `--space-2` holds the `8px` | both |
| `overview.html:29` `.o-map td` | `1px solid var(--color-hairline)` | `--rule-hair` | Codex |
| `overview.html:42` `.o-kit span` | `line-height:1.45` | `--leading` | Codex |
| `kit.html:143`, `155`, `183` | `margin-top:12px`, `16px` twice | `--space-3`, `--space-4` | Codex |
| `kit.html:227` | `max-width:520px` | `--width-dialog` | Codex |

**Six of the ten are showcase furniture** (`kit.html`, `overview.html`), which is documentation rather than product. Four are in the product stylesheet and go to step 3.

**On the screens themselves there is almost nothing left to find.** 52 coloured pages carry **six** inline `style` attributes between them and **one** `<style>` block, and that block is the hub's own furniture under an `o-` prefix. Three of the six inline attributes are the reason `--s2` and `--s4` still exist.

---

## 6. Variables without an origin

The rule from stage 06: every declaration carries where its value came from. Five findings were raised and **four were withdrawn on verification**, which is what verification is for.

| Site | Verdict |
|---|---|
| `--nav-fg`, `--nav-active`, `--nav-muted`, `--nav-rule`, `--nav-badge` | **withdrawn.** No per-line comment, but the block comment above the five states exactly why the panel is remapped and what the three steps are. Origin recorded |
| `kit.css:421` `--pane-w:320px` | **withdrawn.** `DESIGN.md` records `320px below the breakpoint`, stage 04 |
| `kit.css:451` `--row-tracks:1fr` | **withdrawn.** `DESIGN.md` records the collapse to `1fr` at 360 |
| `kit.css:257` `:root{--row-tracks: ...}` | **not an origin problem but a worse one.** A second top-level declaration of the canonical value, byte identical to line 117, sitting in the component section. One name, one home, and this is a second home holding the same thing |
| `kit.css:138` `--width-dialog:520px` | **stands. A value from nowhere.** Its four neighbours all carry a comment and it carries none, and the name is not in `DESIGN.md` |
| `kit.css:517` `.rows--log{--row-tracks: 74px 96px minmax(0,1fr) minmax(0,1.6fr) minmax(0,1fr) 106px 138px}` | **stands. Seven values from nowhere.** `DESIGN.md` holds the canonical tracks and the `1fr` collapse and nothing else |
| `kit.css:1039` `.rows--moved{--row-tracks: 132px minmax(0,1fr) 116px 44px}` | **stands. Four values from nowhere** |

All three surviving rows are Codex findings, and the two `--row-tracks` rows are the ones a script keyed on names alone could not reach: **Claude's own pass counted one declaration per name and therefore never saw the other four.** The second instrument earned its place on this row.

---

## 7. The one-off list, recounted

Stage 07 left 25 classes outside the kit as one-off, with the note that a second page would make them kit candidates at once. Every one was recounted across the whole grey corpus.

**25 of 25 are still one-off. Nothing is promoted.**

The one row that looked like a promotion was `.t` at three pages, and it is a false positive: the other two hits are `.t-x` and `.t-hold`, different classes, and the single real `.t` sits on `wireframes/overview.html`, which is the stage hub rather than a product screen. `.rmp` (5 uses) and `.rmp-row` (4) repeat within one page, and repetition inside one page is not a second page.

`keyboard.html` still carries eleven of the 25 and `not-found.html` seven. Both stay out of the system, and both keep the note attached: eleven one-off classes on one page means the keyboard map is a small design system of its own, and design principle 5 puts keyboard before mouse.

**The check ran and returned nothing, and that is a result rather than a skipped step.** A declared list that is never rechecked is where defects sit under the name of decisions.

---

## 8. Candidates for semantic roles

Read out of section 2 and section 4, not proposed. **A role exists only where the audit shows it on screens.** Names are drawn from `DESIGN.md` and from what the product calls things, never from another system's vocabulary.

Each row states the surface it paints, because that decides its contrast threshold and because a role may not carry two surfaces.

| Candidate role | Surface | The uses it is read from | Points at |
|---|---|---|---|
| page ground | fill | `body`, `.wf-screen`, `.z1`, `.z4`, the dialog and toast grounds: 24 sites | `--color-ground` |
| raised plane | fill | `.z2`, `.z5`, `.row--head`, `.frow--head`, `.expand`, `.addr`: 19 sites | `--color-surface` |
| the selected row's ground | fill | `.row.is-selected`, `.frow:hover`: 3 sites | `--color-surface-sel` |
| primary ink | ink | `body` plus 21 sites | `--color-text` |
| secondary ink | ink | 81 sites, the largest single role in the product | `--color-text-dim` |
| **ink on an inverted plate** | ink | `.chip--solid`, `.annun .ovrd`: today this is `--color-ground` used as text | `--color-ground` |
| **the inverted plate itself** | fill | `.chip--solid` background, `.bars i.on`, `.rail`: today this is `--color-text` used as fill | `--color-text` |
| the decision | ink and fill, **so two roles** | `.btn--primary` fill and its underline; the accented word in `.z2 b` and the latitude figure | `--color-accent` |
| ink on the decision | ink | `.btn--primary` label | `--color-accent-ink` |
| separator line | line | `--rule-hair`, 30 sites | `--color-hairline` |
| panel edge | line | `--rule-edge`, 36 sites | `--color-rule` |
| control boundary | line | `--rule-control`, 3 sites. The only one of the three that clears 3:1, which is why it is separate | `--color-edge` |
| severity, three steps | ink **and** fill, **so six roles or a declared exception** | `.sev` word and `.bars i.on` | `--color-sev-*` |
| out of reach | fill | `.btn[disabled]`, today `--color-hairline` as fill | `--color-hairline` |

**Colours standing in exactly one place, which are therefore not roles.** Named because they must be visible, not because they qualify.

- `--color-failure`, one use, and that use is the swatch on `kit.html`. The product has no failure-coloured element: the degraded strip underlines and the alert toast thickens its border, and neither reaches for colour. Whether the ramp keeps a colour nothing uses is a decision for step 2.
- `--color-scrim`, one use, on `.scrim`, and no coloured screen shows it.
- `--color-surface-sel`, three uses, two of them the same idea.

**Roles that do not exist yet and are declared as absent.** `--color-focus`, `--bg-hover`, `--bg-active`, `--opacity-disabled` are not entered at step 3. There is one `:focus-visible` rule in the whole file and it reads `--focus-ring`; hover is written inline on five families with `--color-surface`; there is no press state anywhere. They arrive at step 5 with the first component that carries them, in both themes.

---

## 9. The layout onto files

Ordered by the level column of `docs/inventory.md`, bottom up. **This order then does four more jobs**: the consolidation at step 2, the round order at step 5, the `@import` order in `index.css`, and the groups of the stand's registry.

**The level column exists in a different shape and no level was guessed.** `inventory.md` carries the level as its section structure (sections 2, 3 and 4 are Atoms, Molecules, Organisms) plus an explicit count line, 16 / 23 / 16. Step 2 turns that into a column so the four consumers above read it from one place. One row contradicts itself today and step 2 has to settle it: **`optlist` is filed as a molecule by the showcase and as an organism by the inventory table**, which also argues for the organism.

### Atoms, 16

`btn`, `key`, `chip`, `bars`, `src`, `mark`, `tag`, `stamp`, `anote`, `was`, `rec`, `hint`, `label`, `input`, `textarea`, `select`

Each becomes `design/system/components/<name>.css` plus `design/kit/<name>.html`. Classes moving in, by rule block: `btn` takes `.btn`, `.btn--primary`, `.btn--quiet`, `.btn--primary-narrow`, `.btn[disabled]`; `chip` takes `.chip`, `.chip--solid`, `.chip--ghost`, `.chip--state`; `bars` takes `.bars`, `.bars i`, `.on` and the three `:has()` severity selectors; and so on down.

**Two atoms have to be added and they are not in the 55.** Section 4b of `census.md` found 132 instances of a global nav item with no class and 24 instances of a bare inline link in three sizes. Both are real controls doing real work on most of the product. Step 2 decides whether each is an atom of its own or a part of `header`, but neither can stay nameless: the rollout at stage 12 will meet them on every screen it builds.

### Molecules, 23

`row`, `sev`, `frow`, `banner`, `block`, `nar`, `field`, `opt`, `scopebar`, `readout`, `pane-head`, `qfoot`, `prov`, `empty`, `tomb`, `gnote`, `expand`, `rota`, `toast`, `doorcard`, `outage`, `chips-hd`, `fleet-more`

### Organisms, 16

`wf-shell`, `wf-screen`, `z1`, `z2`, `z45`, `z4`, `z5`, `z6`, `rows`, `optlist`, `pane-body`, `pane-foot`, `dialog`, `rail`, `brief`, `door`

Inside the level, the ones that contain no other organism go first. `z1` and `z2` are a special case worth stating: **the classes appear in zero html files.** `design/_shell.js` injects them at runtime on every authenticated screen, so their css is real and their markup has no source file. Their component pages have to show the generated markup rather than a copy of it.

### Not a component: `base.css`

Reset, `body`, link defaults, `:focus-visible`, the type primitives, `.mono`, `.dim`, `.vh`, `.grow`, `.spacer`, `@media print`, and the `@font-face` chain. Plus the five panel names, which are neither product nor showcase but a bridge to `/_nav.css` and have to keep working.

### Classes that fall into no component file

Named here rather than assigned, because assigning them is a decision.

- `.only-desk`, `.only-desk-i`, `.only-narrow`: viewport twins, four to seven rules each. They are a layout mechanism used by several components, not a component
- `.is-paper`, `.is-standalone`, `.is-selected`, `.is-superseded`, `.is-chosen`, `.is-degraded`, `.is-now`, `.is-empty`: state classes belonging to their host component, and each has to travel with its host rather than form a file
- `.dim`, `.mono`, `.sub`, `.k`, `.v`, `.n`, `.why`, `.when`, `.who`, `.role`: shared text roles, 17 of them counted at stage 07 and not components. `base.css` or a typography section
- `.frame`, `.doc`, `.gone-all`, `.axisb`, `.sa-offer`, `.sa-route`, `.sa-fresh`, `.covers`, `.cons`, `.lat`, `.seek`, `.contact`, `.addr`: thirteen classes that stage 07 counted under "unaccounted for", 78 in total. **This is the largest open item of the audit** and step 2 has to place every one of them: a component, a part of one, or `base.css`

### The two inherited files

`kit.html` becomes a frozen smoke test on `../system/index.css` and stops taking new components. `shell.html` stays as the assembled shell, and the markup of its parts is owned by the `header` and `tabbar` pages.

**`shell.html` carries a live broken reference and it is the last tie to the frozen folder.** Line 56 writes `style="font-size:var(--t-xs)"`. `--t-xs` is a stage 04 name, it is declared in `wireframes/_wf.css` and **nowhere else**, and stage 07 removed 28 of the 30 compatibility aliases without catching this one. `design/` no longer links that stylesheet, so the variable resolves to nothing and the span renders at the inherited size instead of 11px. `DESIGN.md` states the tie is cut and proves it for `<link>` and `<script>`; a `var()` name reaching for a value that lives only there survived both checks. Found by Claude; `design/_shell.js` mentions the same name in a comment and uses `--size-xs` in the markup, so that second hit was withdrawn on verification.

---

## 10. The layout onto the foundation pages

| Page | What goes on it |
|---|---|
| `color.html` | the primitive palette, 15 values with their origins; the semantic roles from section 8 with the surface each paints; contrast pairs in **both themes** with the threshold named beside the figure and the surface that decides which threshold applies. The three grounds are already computed and recorded in `kit.css`, so the table is transcribed rather than invented |
| `typography.html` | two families and why each was chosen on a rendered comparison; the five sizes; two line heights; the weights actually used, which are 400, 600 and 700 with no 500 anywhere in the product; **and the tracking table, which is where six mono values and two display values have to be reconciled** |
| `geometry.html` | the space scale with its 268 uses; `--radius-ui: 0` and the argument for it; the three rule tokens with the WCAG reasoning that separates them; the structural measures `--zone-top`, `--zone-strip`, `--pane-w`, `--row-tracks` and the five widths |
| `icons.html` | sixteen icons on a 24px grid, 1.5px stroke, square terminals, `currentColor`. **Standing on no screen**, and the page has to say so rather than imply a set in use |
| `architecture.html` | the rules of the system: two levels and why not three, colour through semantic and geometry from primitive, one component one file, the five things a component needs, the usage rules |

**Material that fits none of the four and needs a home named at step 2.** No shadows exist and the grey contract forbids them, so there is no shadow page. No animation exists, and it arrives at stage 11. What is left over is: the `@media print` block, which is a real product surface and belongs on `geometry.html` or a page of its own; the viewport twins `only-desk` / `only-narrow`, which are a mechanism rather than a token and are the natural seed of stage 10; and `proposed-variables.md`, whose two open rows have to be closed or carried, because a proposal that neither ships nor dies is the third state this project does not allow.

---

## ORIGINS OF A CHANGE IN APPEARANCE, NAMED

This stage is a refactor and the product does not move by a pixel. There are exactly three legal sources of a visual change and every one of them writes a row here. The pixel comparison at step 8 checks each difference against these three lists; **a difference with no row here is a defect**, and it is fixed in `tokens.css` or in the component file, never on a screen.

### Consolidated drift (step 3)

Written by the consolidation at step 2, applied when the component file is written at step 5.

| Class | Was | Became | Why |
|---|---|---|---|
| `.opt .key` border colour | `var(--color-rule)`, a fixed line | `currentColor`, the host's colour | **One atom, one declaration.** `key` had two, and in `.btn` it already took its border from whatever encloses it, so the key on a filled button reads as part of the button and the key on a quiet one recedes with it. Inside `.opt` it did not, and took a fixed rule colour instead. **39 places on the coloured screens, 45 across the product.** This is the only appearance change the consolidation makes; everything else it decided is markup |

**One row was proposed and withdrawn after the file was opened.** `.frow` renders with side padding inside `z5` and without it inside `pane-body`, 12 of 88, and it read as a context patch. Line 622 declares it deliberately: `pane-body` already pads its contents, so the row drops its own to avoid doubling. The reason is sound and the expression is not, because the parent reaches into the child. It becomes a variant of the component, `.frow--flush`, carried by the markup rather than by a descendant selector. **No pixel moves**, so this belongs to step 6 and not here. Verification before repair, and it changed the answer.

### Review of the foundations (step 4)

*Empty. Written after the user has looked at the four foundation pages.*

### Moved onto system classes (step 6)

*Empty. Written when the reconciliation moves markup off a local override or an old name.*
