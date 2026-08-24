# DESIGN.md: the product's visual language, read out of the code

Formed at stage 07 step 1 from the **real code of the coloured screens** plus the draft in `DESIGN-artifacts.md`. It is not a plan and not a proposal: every value below is running on 32 pages right now, and where the code and the draft disagreed the code won and the disagreement is written down.

**The chain.** `DESIGN-artifacts.md` (draft, 06) to **this file** (product, 07) to the two-level token split (08). **Every token carries its origin**, and the origin travels: at stage 08 it goes into the comment on the semantic role. A token without one is not entered.

There is one product `DESIGN.md` and it is this file. There is no `design/docs/`.

---

## 1. Where the values actually live, and one of the three files is frozen

The product is not running on one stylesheet. It is running on three, and saying so is the first thing this file owes.

**Since step 3 there is one, and this section used to say three.**

| File | What it provides | Status |
|---|---|---|
| `design/kit/kit.css` | **everything**: the values, the absorbed stage 04 scales, every component rule, and what the brand adds | the single source |

Three files became one. `design/_theme.css` arrived by `git mv`, its `:root` byte for byte identical and verified as such. `wireframes/_wf.css` was absorbed: its component rules were lifted and every value routed through the kit's variables, not one value changed. `design/_screen.css` was folded in and deleted from the tree.

**All 51 coloured pages now link `kit/kit.css` for every product value.** The CSS dependency on a folder stage 05 froze is gone, and it was proved rather than declared: the seed screens were rendered on the old chain and on the kit alone and the screenshots are **byte for byte identical at 1440 and at 360**.

**Two corrections to what this paragraph used to say, both found by the stage 07 audit.** It said 32 pages, which was true when it was written and stopped being true at step 5; it now says 51 and the number is in one place. And it said *and nothing else*, which was never true: every page also links `../_nav.css`, the panel's stylesheet, which is documentation chrome rather than product and is the reason the kit does not own `--nav-w`. **A claim that is true on the day it is written is not a fact, it is a snapshot**, and this one was wrong for two different reasons at once.

**Until step 6 there was a second stylesheet and it was on 29 pages.** Every screen carried a small `<style>` block inherited from stage 04. Seven distinct blocks, repeated three to seven times each, were hoisted into the kit and deleted from the pages, and the result was pixel compared: 17 of 18 renderings byte identical, and the eighteenth is a rule that had been dead since stage 04 and now works.

**One tie is left and it is JavaScript, not CSS.** Every page still carries `<script src="../wireframes/_nav.js">`, because that is what injects Z1 and Z2. The markup it produces is now written once in `design/kit/shell.html`, and the tie is cut at step 5 when the sample screens are assembled from it.

---

## 2. Colour

**Fourteen values.** Nine come from `design/concept/assets/brand-plate-j.png`, eight as **pixels** and one measured, checked against that plate's own stylesheet, which agreed at every role. Five are derived: three for severity and two for the two different jobs a rule does. **This paragraph said twelve, nine and three until stage 07 step 6**, which was true before severity and the two rules were added and was never recounted; the table below always had fourteen rows.

| Token | Value | Role | Origin |
|---|---|---|---|
| `--color-ground` | `#11110f` | the board, and the page behind everything | pixel of plate J, GROUND swatch |
| `--color-surface` | `#171714` | panels inside the console, the raised band, the table head | pixel of plate J, detail pane |
| `--color-surface-sel` | `#2a2418` | the row being ruled on | pixel of plate J, active row |
| `--color-text` | `#e9e4da` | text, and the inverted fill of a chip that demands attention | pixel of plate J, TEXT swatch |
| `--color-text-dim` | `#aaa397` | secondary text, meta, counts at rest | pixel of plate J, SECONDARY swatch |
| `--color-rule` | `#675f50` | separators and panel edges. **Never a control boundary** | pixel of plate J, RULE swatch |
| `--color-accent` | `#d29c3f` | latitude, the live state, where you are, the row being decided with its primary action | pixel of plate J, ACCENT swatch |
| `--color-accent-ink` | `#18140e` | text on the accent | measured on plate J, the Accept button |
| `--color-failure` | `#b25d44` | failure. **Borders and icons only** | pixel of plate J, FAILURE swatch |
| `--color-sev-high` | `#d9704f` | severity, high | derived from the failure hue, user decision at 06 step 5 |
| `--color-sev-medium` | `#9d9182` | severity, medium | derived, warm neutral |
| `--color-sev-low` | `#828e96` | severity, low | derived, cool slate |
| `--color-edge` | `#7b7260` | the boundary of a control: chip, button, `kbd` | derived, the rule's hue raised until it clears 3:1 |
| `--color-hairline` | `#232219` | the line between rows | derived from the ground |

### 2.1 The remap, which is how the grey wireframe became the product

`_wf.css` is written entirely through variables, so colouring a copy is an assignment table rather than a rewrite. This is the whole return on the grey contract of stage 04.

| The wireframe called it | It is now | Note |
|---|---|---|
| `--ink` | `--color-text` | |
| `--soft` | `--color-text-dim` | |
| `--hair` | `--color-hairline` | |
| `--fill` | `--color-surface` | the selected row is overridden separately to `--color-surface-sel` |
| `--paper` | `--color-ground` | |
| `--bg` | `--color-ground` | |
| `--ui` | `--font-sans` | |
| `--mono` | `--font-mono` | |
| `--radius` | `--radius-ui`, which is `0` | the wireframe's 2px was overruled by the plate |
| `--line-ink` | `1px solid var(--color-rule)` | a border in the text colour is right on white and far too loud on the console ground |
| `--focus` | `2px solid var(--color-accent)` | |

### 2.2 Three rules colour has to obey, and none of them is a preference

- **`--color-accent` does four jobs and no fifth**, counted in the DOM on the finished screen rather than asserted: latitude, the live state, where you are in the navigation, and the row being decided with its primary action.
- **Severity is a closed ramp of three** and it descends in **chroma**, not in brightness, because on a dark ground every value has to clear 4.5:1 and that compresses the whole ramp into 4.6 to 6.5. Warm to cool, and **never green**: a low severity case is not a resolved one.
- **Nothing is green anywhere**, including the six state chips, because they are positions and not outcomes.

---

## 3. Type

Two families, chosen on a rendered comparison of four candidates each rather than on the name drawn on the plate.

| Token | Value | Origin |
|---|---|---|
| `--font-sans` | `'Archivo', system-ui, sans-serif` | chosen for character. 11 per cent narrower prose than the runner-up on a 14 per cent shorter line box |
| `--font-mono` | `'IBM Plex Mono', ui-monospace, monospace` | chosen for character. Reserved for anything **counted** |

**The scale is the wireframe's and it is inherited, not re-derived.** It was set at stage 04 against design principle 5, density is the feature, and the coloured screens did not move it.

| Token | Value | Where it is used | Origin |
|---|---|---|---|
| `--t-xs` | `11px` | column heads, chips, meta | stage 04, `wireframes/_wf.css` |
| `--t-sm` | `12.5px` | dense data: rows, tables | stage 04 |
| `--t-md` | `14px` | body, controls, **and the verdict in a row** | stage 04, and step 6 of stage 06 |
| `--t-lg` | `17px` | screen title, pane title | stage 04 |
| `--t-xl` | `21px` | the one heading a page is allowed | stage 04 |
| `--lh` | `1.45` | | stage 04 |
| `--lh-tight` | `1.25` | | stage 04 |

**Tracking**, which the brand added:

| Token | Value | Origin |
|---|---|---|
| `--track-display` | `-.038em` | rendered test: Archivo collides at the plate's `-.055em` |
| `--track-mono` | `.06em` | measured on plate J, and a **halation constraint** rather than a preference |
| `--track-wordmark` | `.16em` | measured on plate J, the HARRIER lockup |

**Weight is where the code and an attribute disagree**, and the disagreement is in section 7 rather than smoothed here. The product runs 600 nineteen times and **700 eight times**; attribute A3 says authority comes at 500 rather than 700.

---

## 4. Space

One scale, inherited from stage 04, used everywhere.

`--s1 4px` · `--s2 8px` · `--s3 12px` · `--s4 16px` · `--s5 24px` · `--s6 32px` · `--s7 48px`

Origin: stage 04, `wireframes/_wf.css`. Nothing at stage 06 or 07 has added a step or used a value off the scale.

---

## 5. Structure

| Token | Value | Origin |
|---|---|---|
| `--radius-ui` | `0` | measured on plate J: every radius the plate draws is on a physical object |
| `--radius-object` | `5px` | measured on plate J, printed and physical applications only |
| `--z-top` | `56px` | stage 04, the Z1 top bar |
| `--z-strip` | `26px` | stage 04, the Z2 connection strip |
| `--pane` | `380px`, and `320px` below the breakpoint | stage 04, the Z5 detail pane |
| `--row-tracks` | `90px 120px minmax(104px,1fr) minmax(120px,1.2fr) 72px 100px 40px` | stage 04. It collapses to `1fr` at 360 |
| `--line` | `1px solid var(--color-hairline)` | separators |
| `--line-ink` | `1px solid var(--color-rule)` | panel edges |
| control boundary | `1px solid var(--color-edge)` | chip, button, `kbd`. WCAG 1.4.11 |
| `--focus` | `2px solid var(--color-accent)`, offset 1px | |

**There is no shadow and no blur anywhere in the interface.** Attribute A4, depth by tone rather than by blur. The only two `box-shadow` declarations in the product are `inset 3px 0` edge markers on a selected row, which draw a line rather than a depth. Every real shadow in the brand lives on the physical objects of the brandbook plate.

---

## 6. Contrast, computed rather than judged

WCAG 2.1 relative luminance, against all three grounds: the board `#11110f`, a panel `#171714`, the selected row `#2a2418`.

| Value | ground | surface | selected | Verdict |
|---|---|---|---|---|
| text | 14.920 | 14.177 | 12.151 | AAA |
| text dim | 7.557 | 7.181 | 6.155 | AAA |
| accent | 7.712 | 7.328 | 6.281 | AAA |
| accent ink on the accent | | | 7.481 | AAA |
| severity high | 5.744 | 5.458 | 4.678 | AA |
| severity medium | 6.127 | 5.822 | 4.990 | AA |
| severity low | 5.634 | 5.354 | 4.589 | AA |
| **failure** | 4.089 | 3.885 | 3.330 | **below AA for text. Borders and icons only** |
| edge | 3.977 | 3.779 | 3.239 | clears 1.4.11 for a control boundary |
| **rule** | 2.997 | 2.848 | 2.441 | **below 3:1. Separators only, never a control** |
| hairline | 1.183 | 1.124 | 1.038 | below every floor by design, carries no meaning |

**`--color-rule` was recorded at stage 06 as sitting at "exactly 3.00", which was a rounded number reported as a threshold met.** It is 2.997. The value is a pixel of the plate and is not raised; instead 1.4.11 is read correctly, it covers what identifies a **control** and not a divider, and `--color-edge` was added for every boundary that does identify one.

---

## 7. Where the code and an attribute disagree

The mockup is the living truth, so the reasoning is fitted to it. But a mockup that contradicts an **attribute**, rather than merely a taste or an anti-reference, is not absorbed in silence: it goes in this table with the line of `personas.md` the attribute stands on, and the decision belongs to the user.

| Attribute | The line it stands on | What the code does | Proposal |
|---|---|---|---|
| **A3. Authority by restraint, not by emphasis.** Its licensed technique is Linear's headline at weight 500 rather than bold | `jtbd.md`, the social job, verbatim: *"When my verdict is read by the next shift or by a client, I want it to look like the work of someone who knew what they were doing, so that nobody has to redo it to be sure."* Plus `personas.md` P1, RIT: analysts with three or more years want the system to augment their speed rather than reiterate fundamentals | The product runs **600 in nineteen places and 700 in eight**. 700 carries `.readout b`, which is the count in the one heading a page is allowed, and the strongest clauses of the shift brief. Nothing anywhere is 500 | **Change the attribute, not the code, and change it narrowly.** 700 here sits on a **count**, which is A5 speaking rather than A3, and stage 04 set it against the same two sources. Proposal: A3 keeps its rule and names its ceiling, *600 is the working emphasis and 700 is allowed on a counted value only*. The Linear technique then stops being quoted as a weight and starts being quoted as what it actually is, a refusal to buy authority with weight. **User decides** |
| **A1. Precise, not soft** | same | Met more strictly than the reference proposed: radius `0` everywhere, against the 2px `references.md` carried in from Axiom | none |
| **A2. Saturation is spent on two closed sets** | same | Met, and counted in the DOM: four accent jobs, three severity levels | none |
| **A4. Depth by tone, not by blur** | same | Met: three grounds, zero shadows and zero blurs in the interface | none |
| **A5. Counted, not estimated** | same | Met: the mono family exists only for counted things, severity is a count of bars and a colour, every count names its window | none |

---

## 8. What this file does not contain

No semantic role names and no two-level token split. Roles are only visible after components have stood on real screens, and naming them before the kit is built means renaming them twice and breaking the origin line on the first rename. That is stage 08.

No component anatomy: that is `design/kit/inventory.md` and `design/kit/kit.css`.

**Two values moved after this file was first written and both are recorded here rather than only in the kit.** `--color-scrim` was `rgba(22,24,26,.28)`, stage 04's light-theme ink at 28 per cent and the one value in the product the remap could never see, because it was a literal `rgba()` rather than a variable. It is now `color-mix(in srgb, var(--color-ground) 78%, transparent)`, the product's own ground. And an icon set of sixteen glyphs entered the system at step 4, applied in three places by CSS mask so that no screen gains an element and the structural diff stays at zero.

No light theme. It is a named debt, recorded in `CLAUDE.md` and in `docs/decisions.md`.
