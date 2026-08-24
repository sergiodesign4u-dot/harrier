# Proposed, and not decided by the extract

`/impeccable extract` pulls **classes**, not values. It may not change an existing value at all, and it may not invent one quietly. Everything it wanted and did not have is written down here as `variable → value → why → which component needs it`, and each row waits for a decision.

**Nothing in this file is in `kit.css` yet**, except where a row says otherwise and explains why.

---

## 1. `--color-scrim`, and it is a light-theme value sitting on a dark ground

| | |
|---|---|
| **In the kit today** | `rgba(22,24,26,.28)`, carried over from stage 04 verbatim |
| **What it is** | the wireframe's `--ink` at 28 per cent, which is `#16181a`, the near-black of a **light** interface |
| **Why it is a problem** | on the console ground it is a dark wash over a dark surface, so the dialog it is supposed to separate from the page barely separates. It is the only value in the whole product that was never remapped, because it was written as a literal `rgba()` rather than through a variable, and the remap could not see it |
| **Which component** | `.scrim`, on 11 pages: reject with a reason, escalate, the keyboard map |
| **Proposal** | `color-mix(in srgb, var(--color-ground) 78%, transparent)`, which is the product's own ground rather than a foreign one |
| **Status** | **DECIDED at step 4 and applied.** It is now the product's own ground, so a dialog separates from the page instead of tinting it with a colour the interface does not otherwise contain. **Not yet visible on a coloured screen:** every page carrying `.scrim` is a reject or an escalate, and none of them is in `design/` until step 5. It will be checked there rather than assumed here |

## 2. The icon set, which the product does not have at all

| | |
|---|---|
| **What exists** | nothing. **Zero SVG across all 62 screens**, confirmed by grep |
| **Why it matters now** | two thirds of the content axis in `inventory.md` section 5 is empty. Every icon in the product will be a decision with no wireframe behind it, and that is the class of thing that drifts if it is not settled once in the kit |
| **Proposal** | one set for the whole product, Solar, inline SVG rather than a CDN script, in the stroke weight the square corner implies |
| **Open** | closed |
| **Status** | **DECIDED at step 4: adopted, and applied in three places.** The set is 16 glyphs. Each application had to earn its space rather than assume it, and the three that did are `.src` (118 uses on 21 pages: an evidence line named its source and nothing said the source **opens** somewhere else), `.expand` (27 uses on 23 pages: design principle 2 is depth one key away, and depth had no mark on it at all), and `.kmap` in Z1 (it rendered a literal question mark, the one glyph in the shell that says nothing about what it opens). **Not applied, and this is the argument rather than an omission:** the four verdict actions already carry a keyboard letter, so an icon would be a third signal for one action; the six state chips are words already in their shortest form; severity is a count of bars **and** a colour and does not need a third; and an icon on a banner or an empty state is decoration on a surface that exists to be read once and left. They are attached as CSS masks rather than markup, because `wireframes/` is frozen and all 32 pages hold a structural diff of exactly zero, which an `<svg>` element on a screen would end. `background:currentColor` keeps the inheritance |

## 3. Checkbox, radio and toggle, which are absent

| | |
|---|---|
| **What exists** | `optlist` / `opt`: a list of links, each with a keyboard letter, one of them `is-chosen`. It is the radio pattern built without a radio |
| **Why it matters** | a form primitive enters the kit at a single occurrence precisely because a system without it is incomplete. This one is at **zero** occurrences and the job it does is being done by something else |
| **Two ways out** | name the pattern and make `optlist` the product's answer to a single choice, so the primitive is deliberately absent. Or introduce the three primitives and let `optlist` become one composition of them |
| **Status** | undecided, and it is a real product decision rather than a token one |

## 4. `--nav-w`, which the kit reads and does not own

| | |
|---|---|
| **Where it lives** | `_nav.css` at the repository root, `236px` |
| **Who reads it** | `#sidebar` inside `kit.css` |
| **The question** | the panel is project chrome, not product. Today the kit depends on a value it does not declare, which is the same shape of problem the kit was built to end |
| **Proposal** | leave it where it is and say so, because the panel belongs to the documentation site and not to Harrier. **The dependency is one value in one direction and it is written down here rather than being invisible** |
| **Status** | proposed as is |

---

## What was NOT proposed, and why

**No new colour, size, space or radius was needed.** `wireframes/_wf.css` turned out to contain **zero hex literals outside its `:root`** and exactly one `rgba()`, which is row 1 above. Every other length in it is a grid track, a breakpoint or a component measure rather than a token. That is why this list is four rows long instead of forty, and it is a result about stage 04 rather than about this stage.
