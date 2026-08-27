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

This stage is a refactor and the product does not move by a pixel. Every legal source of a visual change writes a row here, the pixel comparison at step 8 checks each difference against these lists, and **a difference with no row here is a defect**, fixed in `tokens.css` or in the component file and never on a screen.

**The pack names three sources and there are four, and the fourth is said out loud rather than folded into one of the others.** The three are consolidated drift, the review of the foundations, and the move onto system classes. The fourth is the founding of the state tokens at step 5, and it exists because the pack assumes the states are already in the product and this product has almost none: it had no `:active` rule anywhere, one borrowed focus ring, and a disabled form written as a hand repaint. Writing a state that did not exist is a change in appearance, so it takes a list. Folding it into consolidated drift would have been the quiet version of the same thing, and consolidated drift is a step 2 decision that this was not.

### Consolidated drift (step 3)

Written by the consolidation at step 2, applied when the component file is written at step 5.

| Class | Was | Became | Why |
|---|---|---|---|
| `.opt .key` border colour | `var(--color-rule)`, a fixed line | `currentColor`, the host's colour | **One atom, one declaration.** `key` had two, and in `.btn` it already took its border from whatever encloses it, so the key on a filled button reads as part of the button and the key on a quiet one recedes with it. Inside `.opt` it did not, and took a fixed rule colour instead. **39 places on the coloured screens, 45 across the product.** This is the only appearance change the consolidation makes; everything else it decided is markup |

**One row was proposed and withdrawn after the file was opened.** `.frow` renders with side padding inside `z5` and without it inside `pane-body`, 12 of 88, and it read as a context patch. Line 622 declares it deliberately: `pane-body` already pads its contents, so the row drops its own to avoid doubling. The reason is sound and the expression is not, because the parent reaches into the child. It becomes a variant of the component, `.frow--flush`, carried by the markup rather than by a descendant selector. **No pixel moves**, so this belongs to step 6 and not here. Verification before repair, and it changed the answer.

### Review of the foundations (step 4)

**One row before the review, and the page found it rather than a person.** `color.html` computes its contrast table when it renders, by painting each role onto each ground and reading the result back. Four values that had been derived to "4.50" failed it.

| Variable | Was | Became | Why |
|---|---|---|---|
| `--amber-700` | `#845f1f` | `#835e1f` | derived to stop at the first value that reached 4.5 and stopped at **4.4996**, which prints as 4.50 and is a rounded number reported as a threshold met. Re-derived to clear 4.5 with margin: 5.47 / 5.02 / 4.56 |
| `--clay-600` | `#ac4525` | `#aa4525` | the same, severity high. 5.46 / 5.02 / 4.56 |
| `--warm-600` | `#6f6457` | `#6e6356` | the same, severity medium. 5.47 / 5.03 / 4.57 |
| `--slate-500` | `#5d676e` | `#5c666d` | the same, severity low. 5.48 / 5.04 / 4.58 |

**This is the third time this project has made that mistake and the first time an instrument caught it the same day.** Stage 06 recorded `--color-rule` as sitting at "exactly 3.00" and needed a recomputation to find it was 2.997. The cure both times is the same and it is not care: it is computing the figure where it is read, so nobody transcribes it.

**The review was held and it changed no value.** The five pages were opened, narrowed and switched, and the foundations were accepted as they stood: **zero rows below this line**, which is the outcome the section was built to be able to record honestly rather than the outcome it assumed.

**Three questions were carried rather than closed, and carrying them is the decision.** Each is visible on the page that raises it, none of them is a token value, and none of them blocks a component from being written. They go to `docs/backlog.md` at step 6 with the addresses below.

| Open question | Where it stands | Why it is not a token edit | Who closes it |
|---|---|---|---|
| **Neither family is loaded.** No `@font-face` and no font host on any of the 52 coloured pages, so both names resolve from the reader's own machine | `typography.html`, the block with the red rule | The token is correct: it names the family and its fallbacks. What is missing is a link in the document, which is a build decision and a new external dependency | the user, at handoff. It is the one question on this list whose answer costs money and a request |
| **`--width-dialog: 520px` has no origin.** Its four neighbours carry one, in the file or in `DESIGN.md` | `geometry.html`, under What stops growing | A value with no origin is not a wrong value. Inventing an origin now would be the defect, because it would read as measured | step 9, on the same list as `--radius-object` and `--measure` |
| **Eight literal tracking values against three tokens no product rule reads.** Six of the eight are small monospace, .04 to .14em | `typography.html`, the whole last section | Collapsing them would change stage 04's typography to make a token look used, which is the wrong way round. The spread already satisfies what the dark ground needs | the user, and the question is whether six should be six |

### Founded and corrected at step 5, in the component files

Written on the reference component and extended by each round. Three of the five change nothing that a still picture can see, because hover, active and focus do not exist in a screenshot; the fourth changes nine renderings and the row says so.

| Variable or class | Was | Became | Why |
|---|---|---|---|
| `.btn[aria-disabled="true"]` | border to `--color-hairline` at 1.18, ink to `--color-text-dim` at 7.56, ground unchanged | `opacity: var(--opacity-disabled)` on the whole control, .54 in dark and .61 in light | **A repaint part by part had made an out of reach control stop looking like a control.** The boundary fell to 1.18, which is the role declared to carry no meaning, while the label stayed at full secondary strength, so the main action of the reject dialog rendered as a sentence beside a real Cancel button. Dimming the whole control keeps the boundary at 1.99 and takes the ink to 5.00, so it reads as a control that is unavailable. **Nine instances, all of them a plain `.btn`**: no primary and no quiet is ever out of reach anywhere in the product |
| `--bg-hover`, `--line-hover` | nothing on a button. 265 rules elsewhere, all of them a ground | a ground and a boundary, together | The button had no hover at all. A ground alone does not carry it here: `--bg-hover` is 1.05 off the dark page, right for a row the width of a pane and far too quiet for a control 120px wide. The boundary is read off the product rather than invented, from `.z1 .kmap:hover` and `.toast .t-x:hover`, which both raise the border to the reading ink. **Invisible to a still comparison** |
| `--bg-active`, `--amber-600` | nothing, anywhere, on any control | one further step of the ramp, and the accent presses into its own hue | `:active` existed nowhere in the product, so this is the one state with no precedent to read. `--amber-600` is the only value stage 08 adds beyond the light pair, and `tokens.css` says what stopped it going deeper: `--text-on-action` measures 5.03 on it and 4.21 one step further down. **Invisible to a still comparison** |
| `--color-focus` | `--focus-ring` borrowed `--line-current` | a role of its own, same computed value in both themes | Where you ARE and what you are POINTING AT can diverge, and one of them follows the pointer. **No value changed**, so nothing moves anywhere |
| `--text-hover` | nothing. Hover was a ground in 265 rules and an ink in none | an ink role, paired, following `--text-primary` | **Round 1, founded on `navitem` and `link`.** Neither has a surface hover could use: a plate under a nav item in a 56px bar reads as a button, a boundary competes with the underline that means "you are here", and a link lives inside running text and owns nothing but its own underline. It may not borrow `--line-hover` even though the two are the same colour today, because one paints ink at 4.5:1 and the other a line at 3:1. The three together now say one sentence: **hover raises whatever it touches to full strength on its own surface**. **Invisible to a still comparison** |
| `.input` boundary | `--color-edge`, **2.997** against the page | `--rule-control`, 3.98 | **A text field is identified by nothing but its boundary.** The label sits outside it and an empty field has no content to read, which is exactly what WCAG 1.4.11 asks 3:1 of. 2.997 is a number that rounds to the threshold and does not meet it, and this project has now made that mistake three times: `--color-rule` at "exactly 3.00" at stage 06, four light inks at "4.50" at step 4, and this. **34 fields on 15 screens**, and the only difference the pixel comparison will find in that component |
| `.chip` boundary | declared twice, `--rule-edge` at kit.css:243 and `--rule-control` at :837 | one declaration, `--rule-control` | **No pixel moves**: the second was already the one that rendered. The same pair the button carried, and both are recorded because a reader of the new file would otherwise wonder which of the two values was chosen and why |
| `.chip` and `.state` height | **three heights in one scope bar**: 25.94 as an `a`, 22.00 and 23.00 as a `button`. `.state` 24.84 | `line-height: 1` and `text-decoration: none`, declared. **21.00 everywhere** | `kit.css` set only the family and the size, so everything else came from **whichever element the chip happened to be written as**: an `a` inherited `--leading` from the body and was underlined, a `button` took the UA's `line-height: normal`, and the caret glyph is a pixel taller than the cross. On `queue.html` three chips stand side by side at three heights. Both lines are here for the same reason `.btn` has always carried them: a component may not render differently depending on which tag it is written as. **122 chips and 194 states**, and the state now matches the chip exactly, which is the point of them being one box |
| `.bars` severity selector | `.row:has(...) .bars i.on` | `.bars:has(...) i.on` | **No pixel moves inside a row, and a rendering everywhere else.** The old selector produced the same result in a queue row and **no result at all** anywhere outside one, so a severity drawn on the shift brief or in a log entry would have come out colourless. A component may not depend on the container it happens to stand in today |
| `.tag` tracking | `letter-spacing: .06em`, a literal | `var(--track-mono)` | Same computed value. `--track-mono` was measured on plate J and read by **no product rule at all**; this is its first consumer, and the typography page is down to seven unresolved tracking values from eight |
| `.src` icon | on every `.src` | on `a.src` only | **13 of the 131 are a span rather than a link**, and all 13 stand on `entry-changed` and `entry-partial`, the two screens whose entire point is that the evidence as it stood is gone or incomplete. They were carrying an icon that promises the source **opens somewhere else**. Zero pixels move on the other 118 |
| `.hint` | declared twice with identical values, `.field .hint` at kit.css:345 and `.dialog > footer .hint` at :751 | one declaration, `.hint` | **No pixel moves.** Four hundred lines apart, neither wrong, and both the parent reaching into the child |
| the applied icon masks | `stroke-width="1.8"` | `1.5`, which is what the set declares | **One drawing at two weights, 20 per cent apart, and the geometry identical on both sides.** Every CSS rule in the project draws the set at 1.5; the three data URIs carried 1.8 with no comment and no row in `DESIGN.md`. Effective rendered weight on the keyboard trigger was **1.20px against 1.00px** for the same 16px box elsewhere, and the heavier stroke also pushed `keyboard` further outside its safe field, 0.90 units against 0.75. Done in the two files this system owns, `src.css` and `expand.css`; the third lives in Z1 and follows with the organism that owns it |
| `.readout` weight | inherited **700** from the `h1` it is written as, on the whole line | `font-weight: 400`, and the `b` carries the 700 | **The rule was declared and the product was breaking it on 35 screens.** Attribute A3 caps the working emphasis at 600 and allows 700 on a **counted value only**. `.readout` is an `h1` everywhere, which is the right element: the queue's heading names the state of the queue rather than the word Queue. The UA draws an `h1` at 700, the class never said otherwise, and the 700 reached `across 12 of 40 tenants in your scope`. The `.readout b` rule looked like it was doing the work and was overriding nothing. **The third defect this round where the value is correct in every file and the ELEMENT decides it** |
| `.row` side padding below 1560 | not ported | `--space-3` at `max-width:1560px`, as in `kit.css` | **An omission caught by measurement rather than a decision.** The component file carried the 360 rules and not the 1560 one, so the row would have gained four pixels of padding on every single monitor desk below 1560. Zero pixels move now, which is the point |

**A decision about the documentation came out of this round, and it goes against the pack.** The pack asks for rest alive and the four interactive states as SNAPSHOTS, on the grounds that hover, active and focus exclude each other on one element and cannot stand in a row alive. **The user ruled that nothing in this design system is a picture, and the snapshots are gone.** Fourteen files and the script that made them were deleted.

The argument that decided it was produced by the snapshots themselves. The first run reached focus with `element.focus()`, which does not set the keyboard modality, so `:focus-visible` never matched and the picture came back showing **a rest button with no ring**, documenting a state it did not contain. It looked entirely plausible. A picture of a state is a second copy of the component, and this project already has a rule about second copies.

What replaces it is two things and both are alive: **a bench** of real controls standing in both themes at once, which the reader produces every state on with their own pointer and keyboard; and **a readout** that asks the browser what each state resolves to in each theme when the page renders. A changed token changes both by itself.

**The same question turned out to be a defect on `color.html`, and it had been shipped at step 4.** The left half of every role card was labelled "dark, shipped" and declared no theme of its own: it relied on the page being dark. As soon as the reader chose light, **all twenty one cards rendered light twice** while still claiming to show a pair. Found by asking the browser for `--bg-page` in each half. The cure is one line in `tokens.css`: the shipped block is now `:root, [data-theme="dark"]` rather than `:root` alone, so a subtree can be forced back to dark inside a light page. It is the same declaration under two selectors and not a copy, because a copy of twenty one roles would drift and the drift would be invisible until somebody flipped a switch.

**A SECOND INSTRUMENT WAS BUILT IN ROUND 1, AND IT WAS BUILT BECAUSE I SHIPPED THE DEFECT IT FINDS.** Writing `chip.css` I collapsed the family and the size into a `font` shorthand, which resets `line-height` to 1, and every chip in the product moved 4.94px. **Nothing in either file looks wrong.** A reviewer sees the same family and the same size; a grep for a literal finds nothing, because there is no literal; and the contrast sweep passes, because no colour changed. `design/kit/checks/geometry.mjs` measures the box of each component on a product screen and on the stand and compares nineteen computed properties. It found the shorthand, and then it found the three heights the product had been standing at all along, and then it found the same defect in `state`. **A declared difference is not a failure:** each one names the row above that decided it, exactly as the pixel comparison at step 8 will, and an undeclared one is reported as unexplained.


**A THIRD INSTRUMENT ARRIVED IN ROUND 2, AND IT WAS BUILT FOR A SET RATHER THAN FOR A SCREEN.** `design/kit/checks/icons.mjs` decodes every icon mask data URI in the project, parses it back to primitives and compares it against `design/system/icons.js` character for character. It carries **no table of which mask should be which glyph**, so a mask nobody registered is reported rather than passing quietly, and it found the stroke difference above on its first run. Geometry matched exactly on all three, which is what made the finding a weight rather than a redraw.

### Moved onto system classes (step 6)

The rename map of step 2 executed on **52 coloured screens**, plus the generator. Every row below moved markup and none of them moved a pixel by itself: what moved is in the three lists above, and the comparison that proves it is `design/kit/checks/migrate.mjs`.

| Class | Was | Became | Instances |
|---|---|---|---|
| the shell and the screen | `.wf-shell`, `.wf-screen` | `.shell`, `.screen` | 52 and 52 |
| the state | `.chip.chip--state` and its two modifiers | `.state`, `.state--solid`, `.state--ghost` | 115, 38 and 2 |
| the handover line | `.rows--moved`, `.rows--moved .row` | `.rows-moved`, `.row-moved`, `.row-moved--head` | 5, 30 and 5 |
| the log row | `.rows--log .row` | `.row.row--log` | 7 and 2 heads |
| the fleet row in a padded body | `.pane-body .frow`, a parent reaching into a child | `.frow--flush` | 12 |
| the second rail | `.rail.rail--foot` | `.rail-foot` | 5 |
| the narrow primary | `.btn--primary-narrow` | `.btn--primary.only-narrow` | 6 |
| the form atoms | element selectors under `.field` | `.input` on 14, `.label` on 14 | 28 |
| the link | a bare `a` inside `gnote`, `expand`, `nar` and Z6 | `.link` | 24 |
| the standalone head | `.pane-head` under a standalone pane | `.pane-head--standalone` | 3 |
| the navigation item | `.z1 nav a`, a descendant selector on an element | `.navitem`, `.navitem.is-current`, in `design/_shell.js` | 132 at runtime |

**One row of the map was NOT executed and it is in `backlog.md` with the reason.** `div.expand` to `details.expand` is not a rename: a `details` collapses by default and needs a `summary`, and a summary is a **string**. Executing it here would have meant inventing 23 sentences, and a string belongs to `voice/docs/microcopy.md`. **The 23 was never counted. It is 7 distinct bodies and 6 of them already carry a head, so the price was one sentence**, and the row is closed at stage 13. The last section of this file is what happened.

### Found by the migration, and every one is a cascade defect

**A cascade defect is the class of thing where both files are correct and what is wrong is which of them wins.** No reader sees it, no grep sees it, and the contrast sweep passes because no colour changed. `design/kit/checks/migrate.mjs` renders each screen as it stands in the last commit beside the migrated one and walks the two subtrees element by element. It found six.

| What | What it did | Why |
|---|---|---|
| **A utility lost to a component** | a button hidden below 900px appeared at 360 on nine screens | `.btn{display:inline-flex}` and `.only-desk{display:none}` are both one class, and the system loaded after `kit.css`. Utilities now live in `design/system/utilities.css`, imported **last** |
| **A utility lost to itself** | a 360 only banner appeared on seventeen desk screens | inside `utilities.css` the bare `.only-narrow{display:block}` sat after the media query that hides it. The default is hidden and the query turns it on, exactly as `kit.css` writes it |
| **A media query written where a class selector belonged** | the narrow banner stood 42px taller at 360 on seventeen screens | `flow-root` depends on whether the banner is the narrow one, not on the width. `:not(.only-narrow)` is load bearing |
| **Three narrow only rules hoisted to the top level** | the list vanished at 1440 on every case screen; the whole shift brief vanished at every width on seven | `.z45:has(> .z5.is-paper) > .z4`, `.z45:has(> .z6)` and `.z4--shift .brief` are all inside `@media (max-width:900px)` in `kit.css` |
| **Two breakpoints not ported at all** | the pane stood at 380 instead of 320 at 1440, so every row was 60px narrow; and the handover line's head cell was 8px narrow below 1560 | `--pane-w` and the row's side padding both change at 1560 |
| **Four values quietly changed while porting** | the door gradient, the scrim padding, the dialog height and the keyboard trigger's display | 78 per cent against 72, `--space-4` against `--space-5`, two zone heights against `--space-7`, and an `inline-block` that was never there |

**102 renderings, 0 unexplained differences, 0 trees whose shape changed.**

---

## THE DARK THEME AS A STRESS TEST (step 7)

The pairs were written at step 3 and the state tokens at step 5. What this step asks is the question no single component can answer: **does the system read as a system in the other theme.** `design/kit/checks/themes.mjs` asks it four ways, and each one is invisible from inside one file.

**Thresholds hold in both themes on every role that has one.** The worst case across the three grounds: `--text-sev-low` at 4.59 in dark and 4.57 in light, `--line-control` at 3.24 and 3.70. Nothing sits at 4.6 in one theme and 3.9 in the other, which is the exact shape of the defect a mirrored pair produces.

**Two roles collapse, and it is one finding seen twice.** In dark `--bg-selected` and `--bg-active` are the same ground; in light `--bg-quiet` and `--bg-active` are. **The warm ramp has four usable steps above the page in each theme and the fill level wants five.** The collision landing on a different pair in each theme is itself the proof that the roles are two rather than one, which is precisely what the check exists to surface. Both are declared with their reason rather than papered over: the pair never paints the same element and one of them lasts as long as a click. A fifth step of the ramp is a measurement and it is in `backlog.md`.

**No fill merges.** The closest step is `--bg-surface` at 1.052 off the page in dark, which is the value 265 hover rules already stand on.

**One value is the same primitive in both themes and the file says why.** `--line-control` measures 3.98 in dark and 4.44 in light: a value in the middle of the ramp clears the non-text floor against either end, and that was measured from both directions rather than assumed.

**The first run of this instrument reported FAIL fifteen times and meant nothing.** It assumed a token resolves to `rgb()` and these resolve to hex, so every ratio was `NaN` and every comparison failed. An instrument that is never wrong out loud is worse than no instrument, and this one was wrong out loud on its first execution, which is how it got fixed. It also compared roles across surfaces and produced eleven more false failures: an ink and a fill sharing a value is the design, and the surface rule is what keeps them two roles.

---

## THE MIGRATION, MEASURED (step 8)

`kit.css` is deleted. Every one of the 52 coloured screens, the product index, the two kit pages and the two concept pages link `design/system/index.css` and nothing else.

**Coverage: 0.** `design/kit/checks/coverage.mjs` walks all 367 selectors the old file declared and finds every one of them answered, by a component, by the rename map, or by a written reason for being dropped. It reported 60 gaps on its first run.

**Attribution: 0 unexplained.** `design/kit/checks/migrate.mjs` renders each screen as it stands in the last commit beside the migrated one and walks the two subtrees element by element, 102 renderings. **862 elements moved and every one of them belongs to a row above.**

| Row | Groups | Elements |
|---|---|---|
| chip and state stand at 21.00 rather than 22, 23 or 24.84 | 12 | 503 |
| downstream of that height, and of the readout weight | 18 | 252 |
| the readout is an `h1` and the UA weight reached its qualifier | 2 | 56 |
| the field boundary at 3.98, the key border following its host, the icon masks at 1.5 | 2 | 38 |
| the source icon on `a.src` only | 1 | 13 |

**The pixel comparison says 9.0 per cent and that is not a contradiction.** A state four pixels shorter moves everything below it, so every pixel under the first one differs on a full page capture even where nothing is wrong. The pixel measure answers HOW MUCH and the element walk answers WHAT, and only the second can be attributed. Both are in `design/kit/checks/`.

---

## ONE VALUE MOVED AT STAGE 12, AND IT WAS THE ELEMENT DECIDING IT

| Change | Was | Now | Why |
|---|---|---|---|
| `.readout` gains `margin: var(--space-2) 0` | **8.375px**, the browser's `0.67em` for an `h1` at 12.5px | **8px** | Rule R11 moved the `h1` on seventeen screens from the readout to the pane head, and the readout became an `h2`. It had no margin of its own, so the tag change alone would have taken it to `0.83em`, that is 10.375px, and pushed two hundred rows down four pixels on each of those screens. **0.375px per side is the whole of the deliberate change**, and it is here rather than nowhere because the value was never a decision until now |

**It is the fourth time in this project the ELEMENT was deciding a value nobody had written**, after the readout's own weight, the `h1` inside `pane-head--standalone` and the heading levels themselves. The class of defect is one instrument short by construction: the value is not wrong in any file, so nothing that reads a file can see it, and it only shows up when the tag changes underneath it.

---

## THE SCALE STOPPED HAVING A FRACTION IN IT, AND IT HAD THREE (stage 13)

Asked for by the owner, looking at `typography.html`: `--size-sm` read **12.5px**, and a scale with a half pixel in it asks the eye to read a difference the browser resolves differently at every zoom level. What the census then found was worse than the one value.

**The product rendered seven distinct sizes and three of them were fractional**, taken by walking every text node of all 62 screens at both viewports:

| Was | Nodes at 1440 | What it was |
|---|---|---|
| 22.25 / 17.75 | 17 / 149 | the two fluid headings, correct |
| 14 | 1043 | `--size-md`, body |
| **12.5** | **2715** | `--size-sm`, and the largest population in the product |
| 11 | 3490 | `--size-xs`, mostly mono |
| **10.5** | 468, at 360 only | a literal in `annun.css`, below the floor |
| **9.5** | 4 | two literals, in `anote.css` and `toast.css`, below the floor |

**The floor was the finding.** The scale declares 11px as its smallest step and three rules stepped under it, two of them with a comment saying so. A floor that three rules walk under is not a floor, and the two literals had been invisible because four text nodes do not show up in anything that counts.

| Token or rule | Was | Became | Why |
|---|---|---|---|
| `--size-sm` | 0.78125rem, 12.5px | **0.75rem, 12px** | Exact at a 16px root. Holds the step away from 11 that 12.5 held against 14, and moves the largest text population slightly DENSER rather than looser, which is the direction design principle 5 asks for |
| `.anote::before` | literal 9.5px | `var(--size-xs)` | It was never a decision. A label at 9.5 is a duplicated value below the declared floor |
| `.toast .role` | literal 9.5px | `var(--size-xs)` | The same rule, written twice in two files |
| `.annun .part` at 360 | 0.65625rem, 10.5px | `var(--size-xs)` | The comment called it "the second of the two places below the 11px floor", which is a note that the rule is being broken rather than a reason |

**After: five sizes, every one whole, nothing below the declared floor.** 22.25 / 17.75 / 14 / 12 / 11 at the desk, 21 / 17 / 14 / 12 / 11 at 360.

**And the change found a duplicate the token had been hiding.** `design/kit/sev.html` carried `font-size:12.5px` inline **thirteen times**, with three more on `chips-hd`, `geometry` and `outage`: a copy of a value where a reference belongs, which is the one class this project treats as a defect with no tolerance. While the token read 12.5 the copy agreed with it and said nothing. Moving the token is what made all sixteen speak. Plus **27 prose mentions** across the stand and `DESIGN.md` that named a size the system no longer has.

---

## THE VISUAL SWEEP OF STAGE 13, AND TWO ROOT CAUSES UNDER FORTY ONE REPORTS

Three readers with clean context walked all 66 screens at both widths and returned **41 findings between them**. Deduplicated they are far fewer than that, and two causes account for eight of the reports on their own.

### Cause one: `ch` resolves in the font of the element that declares it

The grid tracks of every list were declared on the ROW. A `ch` is the advance of the `0` glyph in that element's own font, and the head row is 11px monospace while the body is 12px Archivo, so the same `28ch` came out 8px wider in one than in the other. **A column header could never sit over its column**, and the gap was 8px on the log, 13px on the shift list and visible on the queue.

Three readers reported it as three separate defects on three separate screens. It is one line of CSS in the wrong place. The list declares the tracks once, in one font; every row is a `subgrid` of them and keeps its own padding, rule and states.

| List | Head boundaries before | Body boundaries before | After |
|---|---|---|---|
| `rows--log` | 12, 94, 198, **391, 622**, 815, 929 | 12, 94, 198, **399, 614**, 815, 929 | identical, both |
| `rows-moved` | 44ch at 290px | 44ch at 302px | identical, both |

### Cause two: a measure on a box is not a measure on text

`base.css` caps fourteen selectors at `--measure`, and its own comment says a measure belongs on the text rather than on the container. **Two of the fourteen were not text at all.** `.rail` is the inverted record header and `.rail-foot` is the rule that closes the frame. Capped inside an 820px framed record both stopped between 53 and 58 per cent of the way across: the loudest surface in the product became a light block in the left half of the record, and two horizontal rules ended in mid air.

The cap stays where it was earned, below the split point, where the sweep found 11px type running 83 characters in a single column at 520.

**`.prov` and `.cons` are the third and fourth, and both went back.** Each carries a border AND its prose on one element. Freed, `.prov` ran 90 and 93 characters at 2200 and 2560 on ten screens, and `.cons` ran 81 inside the dialog on ten more; the width sweep found both the moment the cap came off. **A sentence at 81 characters is a reading defect and a border stopping short is cosmetic**, so the cap wins and the visible cost is a row in `backlog.md`. Holding the rule full width while capping the sentence needs a wrapper neither markup has, and percentage padding resolves against the container rather than the element and did not hold either. That is a markup decision rather than a fix.

### What else the sweep changed

| Component | Was | Why it moved |
|---|---|---|
| `pane-head` | sticky with no `z-index` | Anything in the body establishing a stacking context painted over it. At 360 the evidence box sliced the case heading in half |
| `dialog > footer` | hint with a basis | When the row broke it left `Cancel` at the top right and the primary at the far LEFT of a second line. The hint shrinks first now and the pair stays together |
| `annun` | `white-space: normal` reaching the segments | On the three screens with four segments every one split mid phrase. The strip wraps between parts and never inside one |
| `z2` at 360 | four cells narrower than their contents | `Clerk is not investigating` in two lines of 88px. It wraps between facts now |
| `frow` head | middle track 118px | Its own header needs 132, so `TO` dropped to a second line on every fleet |
| `row` prose tracks | `32ch` and `36ch` caps | The row stopped where its longest sentence stopped: 987px of tracks in a 2015px list at 2560. The tracks take the room, the cells carry the character count |
| `row` tenant track, log | 6rem | Every cell in it wrapped, five of five on one screen |
| `z6` | transparent | A layer with no ground. The list's footer read up through the gaps between the toasts, half a word at a time |
| `toast--alert` | note in a 9em gutter | Two ragged right-aligned lines where the dismiss control used to be. It is a footnote under the message now |
| `nar` | `when` with no hanging indent | Every wrapped timeline line went back under the timestamp, which is the one place this component exists to keep clear |
| `expand` | mark at `left:-11px; top:2px` | Two unmeasured offsets that put the glyph in open space outside the box and above its line |
| `empty` | capped, not centred | Centred inside its own 454px cap and off centre in the visible 1080 |
| `miss .note--sep` | rule capped with the text | The hairline stopped 82px short of the box above it |
| `miss .exits a` | vertical padding at every width | Padding on an inline-block grows the line box, so lines carrying an exit opened to 30.6 against 24.6 |
| `lat` | flex rows | `margin-left:auto` moved the reason with the length of the action beside it. Subgrid, and the reason column capped |
| 13 screens | `</b><span>` with no space | 30 missing spaces after a bold lead. A markup defect, not a styling one |

### One report was refused

`?as-of=2026-08-` breaking across lines was reported at medium-high confidence. `stamp.css` says outright that the address wraps anywhere on purpose, because **a timestamp that is cut off is worse than one that breaks in the middle**. A finding that is not a defect is a defect of the finder.

---

## FOUR MORE FROM THE OWNER'S OWN READING, AND ONE OF THEM WAS MINE (stage 13)

The owner walked the built screens and pointed at four things. Every one turned out to have a cause a stage away from where it showed.

### The corner between the strip and the split was open

`#wf-z2` is written as a `p` by the shell and **carried the browser's paragraph margin**, 11px above and below, which nothing had reset. Two consequences, and the reported one is the second: the strip floated in 22px of dead space on every screen that has one, and the split below it began 11px lower than the strip's own rule, so the vertical divider between the list and the pane started BELOW the horizontal one and the corner between them stayed open.

`annun.css` already records this exact defect on the annunciator, found by a reader with clean context at stage 08. The strip that CARRIES the annunciator had it too, and nobody had looked at the parent after fixing the child.

### The empty state rendered in a 90px column, and that was mine

Moving the grid tracks onto the list closed the header alignment on three lists. It also **made a grid item of every child**, and a list holds more than rows: the empty state, the arriving bar, the annotation. All three were placed in the first track, 90px wide, so `Nothing is waiting on a decision.` came out three words to a line with its button as a tall narrow box.

**The tracks belong to the rows and nothing else in the list knows about them.** One declaration, and it should have been in the first version.

### The banner put its action in the middle of its own sentence

The action zone carries a control and, on one screen, the reason there is nothing for the control to do. Side by side, that reason sat between the banner's text and its button, so the button read as dropped into the middle of the notice. The zone is a column now: control at its head, reason under it, both to the right. And the banner had **no bottom margin at all**, so its border lay directly on the sticky header of the table below it, two rules touching.

### The instrument was wrong about the record band, not the component

The width sweep reported `.rail` at **148 characters** and it was right about the number and wrong about the subject. The record band is a full bleed plate carrying a label, a timestamp, a sentence and a way out on one line. **Nobody reads the plate; they read the sentence**, and the sentence has its own element. Obeying the reading would have capped the plate at 53 per cent of the framed record, which is the one thing `rail.css` says must never happen.

The corpus of the instrument was corrected rather than the component: it measures `.rail .soft` and excludes `.rail` and `.rail-foot` by name. The same reasoning already stands in that file for `.wrapline`, and it is the rule the file opens with: **a measure is a property of a run of text somebody reads across.**

---

## THE COMPONENT THE SHOWCASE DESCRIBED AND THE PRODUCT DID NOT CARRY (stage 13)

`expand` shipped as a `<div>` with a chevron drawn on it and no control behind it. **21 instances on 21 screens, and every one of them charged its depth to every read**, which is the opposite of the principle the component exists to serve: the cheapest correct thing first, depth one key away. Step 2 of stage 08 ruled the move to a native `details`; step 6 did not execute it. `design/kit/expand.html` and section 9b of `inventory.md` have both described `details.expand` ever since, down to a **Copy this** line the product did not match.

### Why no instrument could see it, and that half is worth more than the fix

Every check in `design/kit/checks/` measures the product against itself. The rendered box against the declared token. The file against the register. One width against the other. **Not one of them measures the product against its own showcase**, and this defect lives exactly there: both sides were internally correct and only the pair was wrong. A component page is prose to a text detector and a rendered page to a browser, and the sentence in it that names which ELEMENT to write is neither. The class is now a row in `backlog.md` with an owner, because the cure is a check and not a correction: parse the `k-code` block on each component page, take the element and the class it prescribes, and hold that against what `design/*.html` carries for that class.

### What moved

| What | From | To | Why |
|---|---|---|---|
| the element | `div.expand`, always open | `details.expand`, closed by default, on **21** of the 27 | The disclosure the principle promises did not exist. One head was invented, `How this was read`, and it is the only new string in the change: the 27 instances carry 7 distinct bodies and 6 of them are handover notes that already open on a tenant and an analyst |
| the mark | `.expand::before`, absolutely positioned on the box | `.expand > summary::before`, a flex item of the head | **The rule became structural instead of remembered.** A filling with no head loses the mark by construction, so the chevron now means one thing everywhere: there is depth here and you are not paying for it |
| the motion | none. The component had no state to move between | `transform` on the mark, `--dur-fast` and `--ease-standard`, `rotate(-90deg)` closed to `rotate(0deg)` open | Response, an acknowledgement that the key landed. **No token was created**: the height opens the way the browser opens it, and a height is the property `motion.md` forbids by name. Under reduce the token takes it to 1ms and the disclosure still opens |
| the print block in `base.css` | `.expand{ display:block }` | `.expand::details-content{ content-visibility: visible }`, plus the mark hidden | A native `details` hides its body in `::details-content`, so `display` on the box would have printed a closed disclosure as its own label. Verified in Chromium with print media emulation: the closed expansion renders at its full open height, mark gone |
| the count | **32 instances across 28 screens** | **27 across 23** | The published number was a plan, not a reading: it counted the door's five `summary` as this component under another name. The absorption is dropped rather than deferred, and `doorhelp` stays a zone of `doorcard` |

### The two fillings, and the second is a decision rather than an exception

**6 of the 27 keep no head and never close:** the three handover notes on `shift` and the three on `shift-sealed`. A handover note is read **because** the shift was taken, so hiding it would hide the reason the screen exists. And its head is a link to the case, which inside a `summary` cannot be clicked, because the click belongs to the disclosure. Both halves are rule **R13** in `architecture.md` and a function in `rules.mjs`: an expansion that has a head is a `details`, and no head holds a link. **39 held, 93 not applicable, 0 broken** over the coloured corpus at 1440 and 360.

### Measured on `design/case.html`, 1440, dark

| | |
|---|---|
| Closed | **48px** |
| Open | **100px** |
| Head ink against the expansion ground | **14.18:1** |
| The mark against the same ground | **7.33:1** |
| The head | natively tabbable, and the ring is the global one |

---

## THE TWO FLUID FLOORS, RAISED ON THE OWNER'S RULING (2026-08-27)

The third named source of a visual change is a decision by the owner, and this is one. Nothing
was measured into it and nothing found it: it was asked for.

| Token | Was | Is | Where the value comes from |
|---|---|---|---|
| `--size-lg` | `clamp(1.0625rem, 0.6875rem + 0.469vw, 1.25rem)`, 17px to 20px | `clamp(1.125rem, 0.875rem + 0.3125vw, 1.25rem)`, 18px to 20px | the floor, on the owner's ruling. The ceiling and both anchors are unchanged |
| `--size-xl` | `clamp(1.3125rem, 0.6875rem + 0.781vw, 1.625rem)`, 21px to 26px | `clamp(1.375rem, 0.875rem + 0.625vw, 1.625rem)`, 22px to 26px | the same |

**Only the floors moved, so the ramps narrow rather than shift.** The anchors are still the
product's own two widths, 1280 and 1920, and the ceiling at 1920 was already right. What gains
is the band the product is most often read in: at 360 and at 1280 these two tokens are the
screen title and the one heading a screen is allowed, and those are the widths of the declared
minimum and the on-call phone.

**Both middle terms now share the addend `0.875rem`, and that is arithmetic rather than
tidying.** Solving 18 at 1280 against 20 at 1920, and 22 at 1280 against 26 at 1920, both land
the intercept on 14px. The old pair shared `0.6875rem` for the same reason. An addend that
stops matching is the sign that one end of one ramp was moved and the other was not.

### Measured after, on the whole product

| Instrument | Reading |
|---|---|
| `contrast.mjs design/` | 268 renderings over 67 pages, both themes, 1440 and a measured 360. **0 failures**, 0 overflow, 0 page errors |
| `rules.mjs design` | 132 renderings. **Nothing broken**, R11 included, which is the one a bigger heading could have taken down |
| `screens.mjs design` | 66 pages, **0** in every class |
| `sweep.mjs` | 66 pages over 49 widths, **3234 readings, nothing breaks from 360 to 2560** |
| `zoom.mjs design` | 132 readings at browser zoom 200% and reader font size 200%. **0 failures** |

**The two pages that printed the range stopped transcribing it.** `design/kit/typography.html`
and `design/kit/responsive.html` carried `17px to 20px` and `21px to 26px` as typed text, and
on the day the floors moved both would have gone on printing the old pair with a confident
face. They now parse the floor and the ceiling out of the token's own `clamp` declaration.
