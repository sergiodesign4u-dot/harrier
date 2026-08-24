# Design artifacts: the draft the visual system is built from

Stage 06 writes this file. Stage 07 reads it, plus the code, and forms the product's `DESIGN.md`. The chain is `DESIGN-artifacts.md` (draft, 06) to `DESIGN.md` (product, 07), and **every value in both carries its origin.**

**A value without an origin is not entered here at all.** Origins used in this file:

| Origin | Means |
|---|---|
| `pixel of plate j` | sampled out of `design/concept/assets/brand-plate-j.png` with a canvas read, with the sample point named |
| `measured on plate j` | read off the rendered plate in Chromium at 2400 by 1600 |
| `chosen for character` | not on the plate, picked to match what the plate's drawing establishes |
| `attribute Ax` | derived from a pair in `design/concept/docs/concept.md`, section 3 |
| `user decision` | named by the person whose taste this is |

---

## 1. The plate, and the eight that were not taken

**Route: nothing exists.** `CLAUDE.md` line 1, `brand or existing design system none`. Nine plates were built and two were carried forward as a pair.

**Chosen: plate J, `design/concept/assets/brand-plate-j.png`.** Origin `user decision`.

Plate J is not a tenth idea. It resolves the two plates the user picked, and it was built because those two were **halves of one sheet**:

- **plate C, Fleet Semaphore**, had an identity and no product. The radial fleet map was a real graphic idea and the product appeared once, small, in a corner
- **plate D, The console is the identity**, had the product and no identity. The console at half the sheet is the strongest single move in the set, and the sheet's key visual **was** the screenshot, so it had no graphic idea of its own

J keeps D's console at full density and D's six-stage state row, takes C's fleet as the graphic idea and C's economy of accent, and fixes the defect both shared: applications were flat skewed rectangles with one hard offset shadow, and are now objects with perspective, two shadow layers, one light direction and drawn material.

**Not taken, and why, so the reasons survive:**

| Plate | Bet | Why not |
|---|---|---|
| a, Night Ledger | ledger register, amber and ember | the product was apparatus around a drawing, not the subject |
| b, Case Registry | light archive board | the ground decision is dark, and a light board argues with it on first sight |
| c, Fleet Semaphore | latitude as dispatch | identity without product. **Its fleet reading is carried into J** |
| d, The console is the identity | product as hero | product without identity. **Its console and state row are carried into J** |
| e, The White Sheet | Bodoni, paper, catalogue rhythm | same objection as b, and the display face carries a register the product does not have |
| f, Counted, not estimated | numeric scale as identity | true to A5 and mechanical past the point where anyone wants to read it |
| g, Night Contact | image language leads | the strongest image system of the nine, and it does not explain the workflow by itself |
| h, Evidence Terrain | latitude as contour map | the best metaphor produced, and it asks for a second look, which the queue never gets |
| i, Decisive Interval | motion as identity | **its FORBIDDEN line survives the rejection** and is carried below, section 7 |

**Plate K exists and is not a rejected idea.** It is plate J in the signal colourway, structurally identical, kept so the ground rule can be re-argued in one variable if the accent is ever reopened. Recorded in `docs/decisions.md`.

---

## 2. Palette, taken as pixels

**The rule ran even though this plate is authored HTML rather than a generated image.** On a generated plate the drawn hex can disagree with the swatch beside it, which is why the rule exists. Here a `:root` block was also available, so the pixels were sampled anyway and then compared against it. **They agree exactly at every one of the six roles.** That agreement is the finding: it is what makes the CSS safe to quote, and it was not assumed.

Sampled by drawing `brand-plate-j.png` to a canvas at its native 4800 by 3200 and reading single pixels at named points, coordinates given in plate space at 2400 by 1600.

| Role | Value | Sample point | Origin |
|---|---|---|---|
| ground, the board | `#11110f` | 1979, 357 · GROUND swatch | `pixel of plate j`, palette zone |
| surface, panels inside the console | `#171714` | 1200, 800 · detail pane | `pixel of plate j`, console |
| surface selected, the row being ruled on | `#2a2418` | 645, 416 · active queue row | `pixel of plate j`, console |
| text | `#e9e4da` | 2131, 357 · TEXT swatch | `pixel of plate j`, palette zone |
| text dim, secondary | `#aaa397` | 2283, 357 · SECONDARY swatch | `pixel of plate j`, palette zone |
| rule, separators and panel edges | `#675f50` | 1979, 427 · RULE swatch | `pixel of plate j`, palette zone |
| edge, the boundary of a control | `#7b7260` | not on the plate | `derived`, the rule's hue raised until it clears 3:1 |
| hairline, the line between rows | `#232219` | not on the plate | `derived` from the ground |
| accent: latitude, live, primary action | `#d29c3f` | 747, 568 · Accept button fill | `pixel of plate j`, palette zone and console agree |
| accent ink, text on the accent | `#18140e` | plate `:root`, no flat pixel available | `measured on plate j` |
| failure | `#b25d44` | 2283, 427 · FAILURE swatch | `pixel of plate j`, palette zone |
| severity high | `#d9704f` | not on the plate | `user decision`, derived from the failure hue |
| severity medium | `#9d9182` | not on the plate | `user decision`, derived, warm neutral |
| severity low | `#828e96` | not on the plate | `user decision`, derived, cool slate |

**Not taken, and it is not an omission.** The plate's paper and lanyard materials have no flat pixel anywhere: every paper plane on the sheet sits under a perspective shade, by design. They are application materials rather than console colours, and the console is dark, so nothing needs them yet. They are deferred to the light theme debt.

**The accent is spent, not applied.** `--color-accent` does **four jobs and no fifth**, counted in a browser on the finished screen at step 6 rather than asserted from the plate: latitude, on the fleet and on the case; the live state; where you are in the navigation; and the row being decided together with its primary action. Origin `attribute A2`. The earlier wording said three, which was true of a poster and false of a screen.

**Three values here are derived rather than sampled, and that is a real exception to the rule above.** The plate drew no severity scale, so there was no pixel to take. They were added at step 5 by user decision: severity had to read as colour rather than as a count of bars. **Attribute A2 was amended for it**, in `concept.md` where it lives, from *saturation is scarce* to *saturation is spent on two closed sets and nothing else*. The ramp is built from the failure hue, verified against all three grounds at the AA floor for text, and it **descends in chroma rather than in brightness**, because on a dark ground every value has to clear 4.5:1 and loudness cannot carry a ramp. It runs warm to cool and never reaches green: a low severity case is not a resolved one.

---

## 3. Naming convention, set here with the first value

Prefix by **kind** of value. Every value in `:root`, none in a class, an origin comment on each line. This block moves to `design/kit/kit.css` at stage 07 by `git mv`, byte for byte, and stage 08 audits these names, so they are not born casually.

```css
:root{
  /* colour, six roles plus three surfaces, pixels of plate j */
  --color-ground:        #11110f; /* pixel of plate j, palette zone, GROUND */
  --color-surface:       #171714; /* pixel of plate j, console, detail pane */
  --color-surface-sel:   #2a2418; /* pixel of plate j, console, active row */
  --color-text:          #e9e4da; /* pixel of plate j, palette zone, TEXT */
  --color-text-dim:      #aaa397; /* pixel of plate j, palette zone, SECONDARY */
  --color-rule:          #675f50; /* pixel of plate j, palette zone, RULE */
  --color-accent:        #d29c3f; /* pixel of plate j, palette zone, ACCENT */
  --color-accent-ink:    #18140e; /* measured on plate j, text on Accept */
  --color-failure:       #b25d44; /* pixel of plate j, palette zone, FAILURE */

  /* geometry */
  --radius-ui:           0;       /* measured on plate j, no console element carries a radius */
  --radius-object:       5px;     /* measured on plate j, physical applications only */

  /* tracking */
  --track-display:       -.038em; /* rendered test: Archivo collides at the plate's -.055em */
  --track-mono:          .06em;   /* measured on plate j, small data and labels */
  --track-wordmark:      .16em;   /* measured on plate j, HARRIER lockup */

  /* families */
  --font-sans:  'Archivo', system-ui, sans-serif;   /* chosen for character, see section 6 */
  --font-mono:  'IBM Plex Mono', ui-monospace, monospace; /* chosen for character, see section 6 */
}
```

**Semantic role names are not invented here.** Roles become visible only after components have stood on real screens, which is stage 08. What this stage owes is the convention and the origin line, not a token layer.

---

## 4. Contrast, computed rather than assumed

WCAG 2.1 relative luminance, computed on the values in section 2.

| Pair | Ratio | Verdict |
|---|---|---|
| text on ground | 14.92 | AAA |
| text on surface | 14.18 | AAA |
| text on selected row | 12.15 | AAA |
| accent on ground | 7.71 | AAA |
| accent on surface | 7.33 | AAA |
| accent ink on accent, the primary button | 7.48 | AAA |
| text dim on ground | 7.56 | AAA |
| text dim on surface | 7.18 | AAA |
| accent on selected row | 6.28 | AA |
| **failure on ground** | **4.09** | **below AA for body text** |
| severity high on ground | 5.74 | AA, worst case 4.68 on the selected row |
| severity medium on ground | 6.13 | AA, worst case 4.99 |
| severity low on ground | 5.63 | AA, worst case 4.59 |
| **rule on ground** | **2.997** | **below 3:1. Separators only** |
| edge on the selected row, worst case | 3.24 | clears 1.4.11 for a control boundary |
| hairline on ground | 1.18 | below every floor by design, carries no meaning |

**Two constraints fall out of this table and they bind stage 07.**

- **`--color-failure` may not carry small body text.** At 4.09 it clears 3:1 for large text, borders, icons and chip edges, and it does not clear 4.5:1. Every use of it on the plate is a chip border or a rule, and that is now a rule rather than a coincidence.
- **`--color-rule` is 2.997 against the ground, and the earlier note here said "exactly 3.00".** That was a rounded number reported as a threshold met, and the stage 06 audit recomputed it: 2.997 on the board, 2.848 on the surface, 2.441 on the selected row, so it is **below 3:1 on all three**. It is allowed for what it does and only for that. 1.4.11 covers what identifies a **control**, not a divider, and `--color-rule` draws separators and panel edges. Every boundary that identifies a control, which is a chip, a button and a `kbd`, takes **`--color-edge`** at `#7b7260` instead, which clears 3:1 on all three grounds at 3.98, 3.78 and 3.24.
- **Two values were living in four files and in no variable.** `#232219`, the line between rows, and the control boundary that had been sharing `--color-rule`. Both are variables now. A value in a page and not in `_theme.css` is the exact defect this stage exists to prevent, and it took an audit to see it.

**The halation constraint holds by construction.** `#e9e4da` on `#11110f` is 14.92 rather than the 21 of pure white on pure black. Origin `CLAUDE.md`, the dark ground rule.

---

## 5. Geometry, measured

**Radius on the interface is `0`.** Origin `measured on plate j`: every `border-radius` on the sheet is on a physical object, `8px` on the display bezel, `70px` on the lanyard, `5px` on the badge, `50%` on a status dot. No chip, button, panel, stage box or row carries one.

**This overrules a technique carried in from `references.md`.** Axiom's 2px was recorded there and landed on A1. The plate drew 0 instead. Under the rule that the drawing wins over the caption, 0 stands, and it lands on A1 and A3 rather than contradicting them: a square corner is the more precise and the less ingratiating of the two.

**Tracking** is in the `:root` block above. The one value worth naming out loud: **small monospace runs at `.06em`**, which is the third of the three halation constraints in `CLAUDE.md` and is therefore not a stylistic choice.

**The type scale on the plate is a poster scale, not a UI scale.** The sheet is 2400 wide and the console drawn inside it is about 1510 wide standing in for 1440 and up. The sizes measured on it, 82 for the display line down through 15 for body and 9 for data, are the right **proportions** and the wrong absolute numbers. Section 6 carries this forward.

---

## 6. Typography, decided on a rendered comparison

**The character was measured rather than inferred.** On a generated plate a font name is drawn pixels and cannot be trusted, which is why the pack forbids copying it. Plate J loads real Google Fonts and Chromium confirmed the computed families, so the sheet establishes a real rendering. What it establishes:

- **display:** a geometric grotesque set at weight 500, tracked negative at large size, so a heading states rather than shouts. Origin `attribute A3`
- **data:** a low contrast monospace legible at 8 to 9px with open tracking, carrying counts, chips, stage names and evidence lines. Origin `attribute A5`
- **two families, not three.** The sans carries display and body. Monospace is reserved for anything counted

**Adopted: `Archivo` for display and body, `IBM Plex Mono` for data.** Origin `chosen for character`. Four sans and four mono candidates were rendered side by side at the working sizes and measured in Chromium, `design/concept/screens/type-candidates.png` and `design/concept/screens/type-adopted.png`.

**Why Archivo and not Space Grotesk, which is what the plate draws.** Three measured reasons and one about taste.

| Face | Same sentence at 15px | Default line box at 100px |
|---|---|---|
| **Archivo** | **737.6px** | **109px** |
| Instrument Sans | 768.6px | 122px |
| Chivo | 808.0px | 119px |
| Space Grotesk | 819.5px | 127px |

- **Archivo sets the same prose 11 per cent narrower and on a line box 14 per cent shorter.** In a detail pane 829px wide that is the difference between one line and two on a sentence the analyst reads forty times a shift. Origin `design principle 5, density is the feature`
- **Archivo serves 200 to 700 and a variable weight axis with true italics**, confirmed by a live request to the Google Fonts API in this session. It also has a real condensed sibling if the fleet band ever needs one
- **Space Grotesk is the face this category reaches for by reflex right now.** Section 2b of `concept.md` bans that class of choice, and the ban does not stop being true because the plate happens to be handsome

**The cost is named rather than hidden.** Space Grotesk has personality in the `a`, the `y` and the `G` that Archivo does not. Giving it up means the brand's character is carried entirely by the accent economy, the square corner, the fleet drawing and the object language. **That is what plate J established, so the load is already carried.** Reversing this is one line in `:root`.

**Why IBM Plex Mono and not DM Mono, which is what the plate draws.** Both set the same string at 9px to the same 255.4px, so this is not about width. **DM Mono stops at weight 500:** Chromium was asked for 600 and 700 and returned the 500 file both times. IBM Plex Mono serves 200 through 700. Design principle 1 says every row is a decision and one thing in it must win, and counts and chips live in the mono, so emphasis has to exist in that family. Martian Mono was measured and rejected on the same test: 294.1px against 255.4px, **15 per cent wider for the same string.**

**One value changed because of the swap.** Archivo at the plate's `-.055em` **collides** at 82px, the `t`, `i` and `d` of `latitude` touching. Rendered at three values and settled at `-.038em`, which is tight and clean. The mono keeps `.06em`, which is not a preference: it is the third of the three halation constraints in `CLAUDE.md`.

**What is still not decided here:** the absolute UI type scale. The sizes on the plate are poster sizes on a 2400px sheet. The scale is set at step 6 on the real screen at 1440 and proved at 360.

---

## 7. Carried in from a rejected plate

**Plate I was not chosen and one line of it outlives the rejection.** It stated the invariant as a rule of motion rather than a rule of layout:

> The evidence pane never animates. No overlay, cross-fade or slide may hide what you are deciding on.

That is design principle 5 in `CLAUDE.md`, which until now existed only as a constraint on layout. It binds stage 07 as written. Origin `plate i`, kept by decision.

---

## 8. What this file does not decide

No spacing scale, no component anatomy, no semantic token names, no absolute UI type sizes, no light theme. Steps 4 through 7 of this stage decide layout, the stand and the two coloured screens; stage 07 forms `DESIGN.md` from the code and this draft.
