# DESIGN.md: the product's visual language, read out of the code

Formed at stage 07 step 1 from the **real code of the coloured screens** plus the draft in `DESIGN-artifacts.md`. It is not a plan and not a proposal: every value below is running on 51 pages right now, and where the code and the draft disagreed the code won and the disagreement is written down.

**The chain.** `DESIGN-artifacts.md` (draft, 06) to **this file** (product, 07) to the two-level token split (08). **Every token carries its origin**, and the origin travels: at stage 08 it goes into the comment on the semantic role. A token without one is not entered.

There is one product `DESIGN.md` and it is this file. There is no `design/docs/`.

---

## 1. Where the values actually live, and one of the three files is frozen

The product is not running on one stylesheet. It is running on three, and saying so is the first thing this file owes.

**Since step 3 there is one, and this section used to say three.**

| File | What it provides | Status |
|---|---|---|
| `design/kit/kit.css` | **everything**: the values, the absorbed stage 04 scales, every component rule, the seven hoisted per-screen blocks, and what the brand adds | the single source |
| `design/_shell.js` | Z1 and Z2, the two elements the page does not carry in its own markup | stage 07 step 6 |

Three files became one. `design/_theme.css` arrived by `git mv`, its `:root` byte for byte identical and verified as such. `wireframes/_wf.css` was absorbed: its component rules were lifted and every value routed through the kit's variables, not one value changed. `design/_screen.css` was folded in and deleted from the tree.

**All 66 pages of the product link `design/system/index.css` for every product value**, and nothing else. It was 52 until stage 12, when the rollout closed the last ten and the sample became the corpus, and 62 until stage 13 built node 7.1 in four states. It was `kit/kit.css` when this was written; stage 08 split that file into two token levels and 73 component files and deleted it, proved safe by a coverage check reporting zero of its 367 selectors declared nowhere. The CSS dependency on a folder stage 05 froze is gone, and it was proved rather than declared: the seed screens were rendered on the old chain and on the kit alone and the screenshots are **byte for byte identical at 1440 and at 360**.

**Two corrections to what this paragraph used to say, both found by the stage 07 audit.** It said 32 pages, which was true when it was written and stopped being true at step 5. **It said 32 in two places and was corrected in one**, so the opening line of this file went on claiming 32 for the whole of stage 07 while the paragraph correcting it said 51 twenty lines below. Both now say 51. The correction landed where the claim was argued and not where it was first made, which is where a reader meets it. And it said *and nothing else*, which was never true: every page also links `../_nav.css`, the panel's stylesheet, which is documentation chrome rather than product and is the reason the kit does not own `--nav-w`. **A claim that is true on the day it is written is not a fact, it is a snapshot**, and this one was wrong for two different reasons at once.

**Until step 6 there was a second stylesheet and it was on 29 pages.** Every screen carried a small `<style>` block inherited from stage 04. Seven distinct blocks, repeated three to seven times each, were hoisted into the kit and deleted from the pages, and the result was pixel compared: 17 of 18 renderings byte identical, and the eighteenth is a rule that had been dead since stage 04 and now works.

**The tie is cut.** Nothing under `design/` reaches into `wireframes/` any more, in a `<link>` or in a `<script>`, and the mechanical check returns zero on both. `design/_shell.js` renders Z1 and Z2, keeping the name `WF_SHELL` and its exact signature on purpose: the call sits inside each page's own markup, so renaming it would have meant editing 51 pages and the structural diff would have stopped being zero. Only the implementation moved.

**It was proved rather than declared:** all 51 pages were rendered at 1440 and at 360 before and after, and **102 of 102 renderings are byte identical**.

**What the old script was actually costing.** It loaded a registry of 19 screens and rendered the wireframe stage panel into `#sidebar`, both of which this stage overwrote immediately, in order to inject two elements.

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

**One step moved at stage 13 and two rules stopped stepping under the scale.** `--t-sm` was `12.5px`, the only fraction on the ladder, and the product also rendered `10.5px` and `9.5px` from literals in three component files, both below the 11px this table declares as the smallest step. A floor that three rules walk under is not a floor. Five sizes render now, every one whole, nothing below `--t-xs`. Grounds and the census in `design/kit/docs/tokens-audit.md`.

| Token | Value | Where it is used | Origin |
|---|---|---|---|
| `--t-xs` | `11px` | column heads, chips, meta | stage 04, `wireframes/_wf.css` |
| `--t-sm` | `12px` | dense data: rows, tables | stage 04 at 12.5px, **whole at stage 13**: it was the only fractional step on the scale and nothing had chosen it |
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

No semantic role names and no two-level token split. Roles are only visible after components have stood on real screens, and naming them before the kit is built means renaming them twice and breaking the origin line on the first rename. **Stage 08 did it: 23 primitives and 27 roles, each with a surface and a pair, in `design/system/tokens.css`, and every one of them is shown at its real value on `design/kit/color.html`.** This section is left as it was written because the reason it gives is still the reason the split waited.

No component anatomy: that is `design/kit/docs/inventory.md` and the **75** component files in `design/system/components/`. It was 73 until stage 12, which added `keyrow` and `miss`, the two the register could not see while the only screens carrying them were grey. **`design/kit/kit.css` was deleted at stage 08 step 8**, proved safe by a coverage check reporting zero of its 367 selectors declared nowhere in the system.

**Two values moved after this file was first written and both are recorded here rather than only in the kit.** `--color-scrim` was `rgba(22,24,26,.28)`, stage 04's light-theme ink at 28 per cent and the one value in the product the remap could never see, because it was a literal `rgba()` rather than a variable. It is now `color-mix(in srgb, var(--color-ground) 78%, transparent)`, the product's own ground. And an icon set of sixteen glyphs entered the system at step 4, applied in three places by CSS mask so that no screen gains an element. **The mask half holds and no screen gained one.** The clause that stood beside it here, that the structural diff stays at zero, does not: it was a measurement taken at stages 06 and 07 rather than a standing property, and the colour moved on after the freeze while the grey could not follow. `design/kit/checks/diverge.mjs` is where that gap is read.

No light theme, when this was written. **It has one now**, and it arrived as a property of the token level rather than as a feature: every role and every state token was written twice at founding, in `:root` and in `[data-theme="dark"]`, and the pair is not a mirror because contrast is computed against the opposite ground. What remains a named debt is shipping it to the analyst: the switch lives in the stand's panel and not in the product, and `docs/decisions.md` says why.

---

## 9. Width

**There is no mobile version, no tablet version and no desktop version.** There is one layout with one named change in it, and everything else grows or stops growing by itself. That sentence is not a style of speaking: it is what decided the shape of the work, because three separate layouts have to be fixed three times and there is always a width between them where none of them looks intended.

### One point, and it is named for its change

| Token | Value | What happens on it |
|---|---|---|
| `--bp-split-panes` | **80rem**, 1280px, written in queries as `max-width:1279.98px` | At and above it the split is a split: the list and the detail pane stand side by side, the queue row keeps its seven tracks, a dialog is anchored beside the pane. Below it: one column, no pane, the row as one track, and a line where the log or the brief would be |

**Three width numbers came into stage 10 and one left it**, and none of the three had been a decision: 900, 1560 and 1400, all literals in px, each written where a defect had been found. The ladder of this work reads top down, fluid then container then a point, and a point is written only where the fluid answer physically cannot work. 1560 was the pane giving up sixty pixels to the list, which is a clamp. 1400 let the annunciator wrap, and measured from 1280 to 2560 the strip is the same height either way, so the query was a decoration on a declaration.

**The one that is left moved 380 pixels.** The split has an arithmetic minimum nobody had added up: the row's seven tracks need 646px, the pane's floor is 320, and this case study's own panel takes 236. Between 910 and 1200 the product rendered a split whose row did not fit its own column, and it had done so since stage 04, because everybody looks at 360, at 1440 and sometimes at 1280, and nobody looks at 1040. It is **1280** rather than 1210 because that is the minimum this document's own Platform section declares.

**The name says the change and not a device.** `--bp-tablet` and `--bp-desktop` are forbidden: a tablet is a different width every year, and the word desktop puts three separate versions back into the reader's head even when the code has none.

### Everything else is fluid, and two things stop growing

- **The pane** is `clamp(20rem, 24vw, 34rem)`: 320px at the declared minimum, 461 at 1920, 544 at 2560. Before this it stopped at 380 and never moved again, so every pixel above 1560 went to two prose columns inside a scannable row, and the verdict cell measured 70 characters at 1920. **The width goes to the surface that is read, not to the one that is scanned.**
- **The row's two prose tracks** take a ceiling in `ch`, 32 and 36, instead of a fraction. Below the ceiling nothing changed.
- **`--measure`, 66ch**, caps the four kinds of prose in this product. It had been in `tokens.css` since stage 08 with the words "0 uses" beside it.
- **The scale is in `rem` and two of its five sizes are fluid.** `--size-lg` runs 17px to 20px and `--size-xl` 21px to 26px, and the two ends of each clamp are this product's own two widths: 1280, the declared minimum, and 1920, the top of the declared primary band. The three small sizes do not grow, because density is the feature and on a wider monitor this analyst wants more rows rather than larger ones. **A `font-size` is never switched at a point**, and the middle term of a clamp always carries a `rem` addend: a pure `vw` term takes the page out of the reader's zoom and fails WCAG 1.4.4.

### Where a width rule may live

A token, a component through `@container`, a pattern, or the shell through `@media`. **In the file of a screen: never.** `@media` cannot read `var()`, so the literal stands in the query and the token is the register, and no other number appears in a query anywhere in the system.

**Stage 12 added the first container threshold and it is still one point.** `miss`, node 8.1's column, steps its two exits up at **30rem** of its own width, and it is the only place in the product where anything gets BIGGER on a phone: the reason is a tap target rather than a reading size, on the one page reachable from a pager at 03:00. Fluid was tried first and cannot do it, because the step runs the wrong way round and a `clamp` whose middle term is `vw` can only run the other way. The threshold is registered in `responsive.md` section 6 and `container-type` is declared on `miss` itself, which is the rule rather than an exception to it: the placer declares it, and `miss` is what places `exits`.

**And `--measure` has a second consumer.** It capped four kinds of prose after stage 10 and it now also widths `miss`, which without it would run the whole of a 1440 viewport, because the zone that centres it does not width it.

---

## 10. Motion

**Nothing in this product moved until stage 11, and that was measured rather than remembered:** 122,458 elements over 282 renderings, zero transitions, zero keyframes, zero animations, source and output agreeing. So every value here is a decision rather than the survivor of a drift, which is the one thing this stage got for free.

### The work is named before the animation is chosen

Three, and there is no fourth. **Connection**: what did that appear out of. **Status**: is it still working. **Response**: did it hear me. A moment for which none of the three can be named does not get animated.

| Work | Moments here | What it got |
|---|---|---|
| **response** | 13 components with a pointer state, plus the focus ring | 120ms, `ease`, on a ground, a boundary, an ink or an underline |
| **status** | 1, the queue's filling bar | a 1.4s sweep in `transform`, and a still state under reduce |
| **connection** | 1, the help on the sign in page | **nothing**, because the only property it could move is a height |

**Almost every appearance in this product is a document navigation.** Every state of every screen is its own html file, so the most important movement the analyst makes, a row becoming a case in the pane, cannot be a transition. That is answered once, in `base.css`, by `@view-transition{ navigation: auto }`: one declaration, and a browser without the feature navigates exactly as it did before.

### The register

`--dur-fast` 120ms, `--dur-cycle` 1.4s, `--ease-standard` `ease`, `--ease-enter` `ease-out`, `--move-sm` 4px. **No `--dur-base`**: it was written for the one connection moment and has no reader, and a token with no reader fails this system's idle control. **No spring and no bounce**: they read as "something went wrong" in exactly the states where the analyst least wants to be asked a question.

### What is forbidden

`transition: all`, which animates what nobody ordered. Any property that makes the browser recalculate layout: `width`, `height`, `top`, `left`, `margin`, `padding`. A duration or a curve written as a literal in a component. **Motion in the file of a screen, of any kind.** And animating a state the component does not have: motion lands on the states stage 08 declared and never invents one.

### Less motion is not an option

One mechanism: `@media (prefers-reduced-motion: reduce)` redefines the same tokens the whole system reads, so a component obeys without knowing the block exists, **and so does a component written at stage 12 that nobody has thought of yet**. Three things it cannot reach are closed by name in `design/kit/docs/motion.md`: a cycle, which is replaced by a still state rather than accelerated into a strobe; a movement between documents; and a surface that redefines a motion token on a class, which beats an override written on the root.

---

## 11. Contributing to the system

**New appears in `design/system/` first and on the screen second. Never the other way round.** That is the rule of growth, and it is what separates a living system from a folder somebody once tidied. It is written in four places because each has a different reader: here, in the root `CLAUDE.md`, in `design/system/CLAUDE.md` which is read on every entry into the package, and in full in section 11 of `design/kit/docs/architecture.md`.

| The new thing | Where it goes | What makes it finished |
|---|---|---|
| a **value** | `design/system/tokens.css`, at its own level. A colour that carries a role goes in the semantic level with an origin comment; a raw value goes in the primitive level | **a token of state is written in both themes at once or it does not exist.** A role declared in one theme looks flawless in that theme and loses its focus ring in the other, and nothing but reading the two declarations side by side finds it |
| a **component** | `design/system/components/<name>.css` | five things: the css, a page in `design/kit/` with all five blocks, an entry in `_nav.js` in the group of its own level, a row in `inventory.md` with its level, and an `@import` in its own level group and not at the end of `index.css`. **The third and the fifth are the two that get skipped**, because appending to an assembled system looks harmless and it is exactly how the ladder comes apart |
| a **composition** | `design/system/patterns/<name>.css`, and only from **three screens** counted on `wireframes/` | the same five things one rung higher, with the `@import` after every component. Two screens is not a pattern: it stays markup and goes into the candidates table on `patterns.html`. **A pattern arranges and does not paint**, so a composition that needs a declaration none of its parts has is a missing component rather than a pattern |
| a **prohibition** | the usage rules, section 10 of `design/kit/docs/architecture.md` | the source column filled in with the count, the earlier decision or the critique it came from. A rule with an empty source is an invention wearing the word rule. Then a **Limits** subsection on the page of every component it names, and a function in `design/kit/checks/rules.mjs`, which is what makes it run rather than be read |
| anything, **on a screen** | nowhere. It is forbidden | a screen carries no style of its own and no inline declaration either. If a screen needs something the system does not have, the something is an order for the system |

**The state tokens, with their pair, are section 2 above.** They are named here again only for the rule they carry: `:hover` reads `--bg-hover`, `:active` reads `--bg-active`, `:focus-visible` reads `--color-focus`, `:disabled` reads `--opacity-disabled`, and none of them appears as a literal in a component file. The contrast of each against its own ground, in both themes, is computed on `design/kit/color.html` in the page rather than transcribed into this one.
