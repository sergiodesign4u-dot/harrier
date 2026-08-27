# Concept: taste, and the attributes the visual language is answerable to

Stage 06, step 2. Written before any plate is generated, because a prompt without these lists returns the model's default.

Read for this: `research/docs/personas.md`, `research/docs/jtbd.md`, `voice/docs/voice.md`, `design/concept/docs/references.md`, and the project boundary line in `CLAUDE.md`.

---

## 1. The brand fork, answered from the record rather than re-asked

`CLAUDE.md`, first line: **`brand or existing design system none`**. Stage 01 asked and wrote the answer down, so this step does not ask again.

**Route: nothing exists.** Said out loud rather than passed over, because everything downstream depends on it:

- the stage runs as written, three plates are generated at step 3, and the language is found from scratch
- there is no `existing brand` origin available to any value in `DESIGN-artifacts.md`, so the palette can only come from **the pixels of the chosen plate**
- there is no existing design system to fit into, so stages 06 to 08 are not building a second system beside a live one

---

## 2. Designer's taste

**Status: mixed, and the difference is marked per row.** Section 2c is the user's own, supplied on 2026-08-23 as two images rather than as names, which is a better answer than names. Sections 2a and 2b were drafted by Claude with reasons attached and still carry `PROPOSED`: correctable, but not the user's taste.

**2c outranks 2a and 2b where they disagree**, because it is the only part supplied by the person whose taste this is.

Taste is written down here rather than held in a head for one reason: every generation prompt is written from this section, and a prompt without it returns the model's default.

### 2a. Liked, named products rather than adjectives

| Product | What is liked, in one line | Why it is defensible here |
|---|---|---|
| **Bloomberg Terminal** | A professional instrument that never apologises for looking like one. Keyboard first, monospace, unfashionable and unbeaten at its job | The nearest thing in software to a surface someone sits in front of for a full shift. It settles that "looks like a tool" is a goal here, not a failure |
| **Linear** | Character without corporate polish. Nothing decorative, restraint instead of emphasis, and the keyboard is the primary input | Named in `research.md` section 4's aspirational row, so the research chose it before this step did |
| **The Lichess analysis board** | A machine's opinion sits beside a human's without shouting: the evaluation, the line it came from, and how much work went into it, all in one strip | It is the one product already benchmarked at stage 01 for the exact display problem this product has, and it happens to also have a visual character worth wanting |

### 2b. Anti-references, what this must not become

| Not this | Why it is on the list |
|---|---|
| **The dark canvas with an electric blue or violet accent** | Step 1 measured it: eight of ten style results for a dense operator console described themselves in nearly the same words. It is the category reflex, and it is the dangerous kind, because it looks correct for security tooling specifically and would survive a review. `references.md` section 4 |
| **Warm cream with terracotta, the "considered and human" palette** | The model's first reflex for a trustworthy AI product. It is also a glare source on a surface read for six hours and opened on a phone at 03:00 |
| **Frosted glass, blurred cards, stacked shadows** | The split pane carries a list, a detail pane, a dialog and a notice stack live at once. Depth by blur on four layers is how a dense screen turns to soup |
| **Icons in circles, gradient heroes, illustrated empty states** | Decoration bought with the vertical space of a queue row. And the empty state of the detail pane has a job already: it must read as "this is the fleet", not as "this is empty" |
| **Confidence as a large coloured ring or gauge** | A number with no claim, no scope and no window, which is exactly what a verbatim analyst asked for the opposite of: an explanation is more meaningful "if I have some context about how that percentage was generated" [RIT, `personas.md`]. Voice Principle 3 forbids the bare percentage in words; it must not come back as a picture |

### 2c. The form of a brandbook, named by the user with two images

Supplied on 2026-08-23, and the first real taste input this file has. Both are kept in `design/concept/assets/refs/`.

**`ref-neo-mirai-toolkit.jpg`, the NEO MIRAI AI Design Conference brand toolkit.** The stage pack already used this artefact as its verbal benchmark for **density**. The user has now named it for something else: **the form of the sheet itself**. What is taken from it, and none of it is its palette:

| Technique | What it replaces in our plates |
|---|---|
| **Zones divided by a hairline rule with a small label above it**, in the manner of an editorial page | Twelve framed boxes with a border and a corner number, which reads as a spreadsheet about a brand rather than a brand |
| **One large illustrated key visual occupying a full quadrant**, with atmosphere and depth | A key visual zone that is another table |
| **Applications shown as objects with real presence**: a ticket, a lanyard badge, a tote, a notebook | Four small screenshots in a row |
| **A row of vertical poster concepts** with their own composition | Nothing. Our sheets had no posters at all |
| **The mark shown on its construction geometry**, with lockups laid out as a family | A single glyph repeated at three sizes |
| **A motion frame row, and a UI component direction block** kept small and calm at the foot of the sheet | UI components given the same weight as identity |
| **Air.** The sheet is dense and still breathes, because the rules do the separating and the boxes are gone | Uniform density with no hierarchy, so nothing leads |

**`ref-impeccable-deck.jpg`, the deck this project's `impeccable` skill publishes.** Taken from it: the dark editorial card, the gold hairline, the small monospace category label above a plain-language title. It is the register of a place that shows work rather than sells it.

**`ref-lexend-console.jpg`, a delivery-pipeline console, added 2026-08-23.** Named by the user as a register worth having. **It has to be recorded with its conflict, because it is the reflex we measured.** Dark navy canvas, electric blue accent, and a status column in green, red and blue: this is the palette that eight of ten style results at step 1 described in nearly the same words, and `references.md` section 4 marks it as the dangerous kind because it looks correct for this category specifically.

**What is taken from it, and none of it is the palette:**

| Technique | Why it is worth having |
|---|---|
| **The product screen is the hero, shown at full fidelity and full size** rather than as a row of thumbnails | Our sheets show four postage stamps. This product is a console, and a brand sheet for a console that never shows the console at size is arguing with itself |
| **A very large geometric display line over dense monospace data** | A3 says authority by restraint, and this shows restraint can still be large. Scale contrast is not the same as emphasis |
| **A row of stage boxes carrying state**, each with its own outline and its own colour | The queue has a closed set of six chips, and this is what a state row looks like when it is doing work rather than decorating |
| **Confident, calm sidebar and a single generous heading** | Our sheets have no single place the eye lands first |

**What is not taken, and the user decides if that changes:** the navy ground with an electric blue accent. Taking it would mean adopting the measured category reflex knowingly. That is a decision available to the user, and it is not one that gets made by accident inside a prompt.

**One thing this section does not reopen.** NEO MIRAI's sheet is ivory. **The board's own ground is a presentation choice; the console's ground is decided in section 4 and stays dark.** A light board carrying dark product screens is legitimate, and the two are not the same decision.

---

## 3. Attributes

Five pairs of visual opposites. Each carries the **line of data** it stands on and the **borrowed technique** from `references.md` it licenses. A pair without both is an invention, and a technique without a pair is a clone at the level of the detail.

### A1. Precise, not soft

**Source.** Design principle 5, `CLAUDE.md`: *"Density is the feature. Six hours a day means no decorative whitespace, keyboard before mouse."* Under it, `personas.md` section E: satisficing under volume is **Supported** by analyst quotes in both studies.

**Technique it licenses.** Axiom's 2px radius on every interactive element and content card, and the 1px solid separator that Linear and Axiom independently arrive at.

**What it rejects.** Linear's 9999px pill buttons, and Axiom's own 32px card padding: that is a marketing page breathing, not a console at 1440 carrying eighteen rows and a pane.

### A2. Saturation is spent on two closed sets, not decorative

**Amended at stage 06 step 5 by user decision, and the previous wording is kept below rather than deleted.**

Was: *saturation is scarce, not decorative.* The accent carried three things and nothing else in the interface was allowed a saturated value.

Now: **saturation is spent on two closed sets and on nothing else.** The accent carries latitude, the live strip and the primary action. The severity ramp carries High, Medium and Low. Both sets are closed and countable, and a fourth use of colour anywhere is a defect rather than a variation.

**What forced the change.** Severity was readable only by counting bars, and the user asked for it to read as colour. There is no way to grant that inside the old wording: three more coloured elements per row, on every row, is exactly the economy the old A2 refused.

**Section 5 of this file predicted this and left the decision where it belonged.** It said that if the user's real taste put Bloomberg's colour economy above A2, then A2 is what changes, and it changes in writing rather than quietly on a plate. That is what happened, so section 5 is now closed rather than open.

**What did not change, and it is the part that was load bearing.** Colour still has to be countable. The ramp is three values, derived from the failure hue, verified against all three grounds at the AA floor, and it **descends in chroma rather than in brightness**, because on a dark ground every value has to clear 4.5:1 and loudness cannot carry a ramp. It runs warm to cool and never reaches green: a low severity case is not a resolved one, and green would say it was.

**Data source.** User decision, stage 06 step 5. The values and their contrast are in `DESIGN-artifacts.md`, section 2.

### A3. Authority by restraint, not by emphasis

**Source.** `jtbd.md`, the social job, verbatim: *"When my verdict is read by the next shift or by a client, I want it to look like the work of someone who knew what they were doing, so that nobody has to redo it to be sure."* Alongside it, `personas.md` P1: RIT found analysts with three or more years want the system to augment their speed rather than reiterate fundamentals, so **Clerk does not explain what she already knows**.

**Technique it licenses.** Linear's headline at weight 500 rather than bold, which the service itself explains as *"authority through subtle refinement rather than bold weight"*.

**Why it is more than typography.** It is the same argument the product makes about Clerk: it files a verdict, it does not insist on one. A console that shouts at its operator is a consumer product wearing a uniform.

### A4. Depth by tone, not by blur

**Source.** Design principle 5 again, its second half: *"no overlay that hides the evidence the analyst is deciding on."* And the structure the wireframes settled: Z1 top bar, Z2 connection strip, Z4 list, Z5 detail pane, Z6 notice stack, all live at once on one screen.

**Technique it licenses.** Axiom's three surfaces separated by tone rather than by shadow, and Linear's explicit don't: *"Do not use heavy shadows for visual depth; rely on background color layering."* Two independent sources reaching the same rule is why this is a discipline rather than a preference.

**It is also the answer to an anti-reference**, which is what makes the pair load-bearing in both directions.

### A5. Counted, not estimated

**Source.** Voice Principle 3: *a number names its claim, its scope and its window, count first and never a bare percentage.* Under it, verbatim from RIT via `personas.md`: an explanation is more meaningful *"if I have some context about how that percentage was generated"*.

**Technique it licenses.** Axiom's monospace as the **primary** face rather than a garnish for timestamps. Every load-bearing value in this product is a count: `9 signals`, `34 of 36`, `6 sources over 24h`. Proportional digits make a column of counts unreadable, and this product is mostly columns of counts.

**What it rejects.** The gauge in section 2b, and any treatment that makes a rounded score look more designed than the count behind it.

---

## 4. The ground, decided rather than assumed

**The console is dark. Light is a named debt.** Decided by the user on 2026-08-23, after the evidence was put on the table, and written here rather than left to the plate, because **the reading research points the other way** and a later reader would otherwise take this for a style choice.

**Against dark, and it is the stronger literature.** Piepenbrock et al., 2013, cited by NN/g: light mode won on visual acuity and on proofreading, irrespective of age, and *"the positive-polarity advantage increased linearly as the font size was decreased"*. A1 makes this product small type on purpose, so the advantage of the ground we did not choose **grows with our own density**. Add halation: a dark ground opens the iris, and for astigmatism, which sources put between one in three and 47%, light text bleeds.

**For dark, and none of it is taste.**

| What carries it | Where it comes from |
|---|---|
| Night work is half the rota, and a case is opened from a phone at 03:00 | 79% of SOCs run 24/7 [SANS SOC Survey 2025]; the on-call scenario is in `CLAUDE.md`, Platform |
| The only long-term measure in the set runs the other way: choroid thinning in light mode, thickening in dark, thinning being the myopia direction | Aleman et al., 2018, cited by NN/g. She sits here six hours a day for years |
| **A2.** One accent reads at less area and less saturation on near black. A light ground needs more colour, which is what A2 forbids | This file, section 3 |
| **A4.** Axiom separates three near-black surfaces by tone alone. That a light ground gives fewer usable steps before grey on grey is **our reasoning, not a measurement** | This file, section 3, and `references.md` |

**The counter is answered, not dismissed.** Piepenbrock measures reading. This screen is mostly scanning counts and chips and then deciding, and voice Principle 2 already made prose the exception. **If that reading of the task is wrong, the ground is wrong.**

**Signed 2026-08-27, and the attribute did not change.** The light theme is now reachable from the top bar, so the first sentence of this section reads `The console is dark by default` rather than `Light is a named debt`. **The decision above is untouched**: with nothing stored the ground is dark, and `prefers-color-scheme` is deliberately never read, because a machine that happens to be light is not evidence about the rota that carried this choice. What changed is the last line of the section rather than the section: the reading of the task can now be wrong for one analyst without the ground being wrong for the product. A2 is unaffected. The control spends no accent at all, taking `--text-secondary` like the keyboard trigger beside it, so the closed sets are still two and still the same two.

**Dark does not lift the ban.** Eight of ten results at step 1 were dark plus electric blue or violet. **The reflex was the palette, not the ground.**

**Three constraints halation forces, without which dark is done badly:** never pure white on pure black, both ends pull in; body text at weight 400 or above, never 300 on dark; monospace at small sizes gets slightly open tracking.

**Full grounds and the sources in `docs/decisions.md`, entry of 2026-08-23.**

---

## 5. One conflict between the data and the taste, and it is not smoothed

**Bloomberg Terminal is in section 2a. A2 says saturation is scarce. Bloomberg's colour economy is the opposite:** colour there is a **code**, carried by many elements at once, amber and cyan and red across a wall of cells.

They cannot both be the language, so the split is named rather than averaged:

- **taken from Bloomberg: the stance.** An instrument that does not apologise, keyboard before mouse, monospace as a working face, no decoration bought with row height
- **not taken: colour as a code across many elements.** A2 stands on the most load-bearing anxiety in the product, and Bloomberg's economy stands on a different task: continuous scanning of a wall where every cell changes. Our queue has a closed set of six state chips and one thing per row that must win

**If the user's real taste puts Bloomberg's colour economy above A2**, then A2 is what changes, and it changes here in writing rather than quietly on a plate. That decision belongs to the user.

**Settled at step 5, and partly the other way.** The user asked for severity to read as colour. A2 was amended above rather than quietly stretched, so this section is closed. What was taken from Bloomberg after all is **colour as a code on a scale**, and what still is not taken is colour on many elements at once: the code is three values on one cell of the row, not a wall of coloured cells. The stance in section 2a and the economy in A2 both survive, and only the count moved from one closed set to two.

---

## 6. What this file deliberately does not commit

No hex, no radius value, no font name, no spacing scale. Step 3 generates the plates, and the palette is read off **pixels**, with each value carrying its origin. The five pairs above are what a plate will be judged against, and the two lists in section 2 are what its prompt will be written from.

**Every technique carried out of `references.md` now lands on a pair:** Axiom's 2px on A1, its one accent on A2, its tone layering on A4, its monospace on A5; Linear's weight 500 on A3 and its 1px separator on A1; Rox's scarcity on A2. Nothing was borrowed that has no reason of ours behind it.

---

## 7. The brand, chosen

**Plate J.** `design/concept/assets/brand-plate-j.png`, built by resolving the two plates the user picked out of nine, `c` and `d`. Grounds, the eight not taken, and every value with its origin are in `DESIGN-artifacts.md` at the root. **They are not repeated here, because a second copy is the one that goes stale.**

Three things this section owes back to the file above it.

**A2 held, and it is now a number rather than a stance.** The accent carries exactly three things on the sheet and no fourth: latitude, the live stage, the primary action. Section 5 above asked whether the user's real taste would put Bloomberg's colour economy over A2. On plate J it did not, so A2 stands unchanged.

**Three became four at step 6 and this paragraph was not corrected with the rest.** Counted in a browser on the finished screen rather than on the sheet, the accent does **four jobs and no fifth**: latitude, the live state, where you are in the navigation, and the row being decided together with its primary action. `DESIGN-artifacts.md`, `DESIGN.md`, `kit.css` and the stand all carry four; this file carried three for two stages. The sentence above is left standing because it is true of **the sheet**, which is what it describes, and false of a screen. That distinction is the whole finding: a count taken from a poster does not survive contact with a running interface, and the place it was written first is the place the correction does not reach.

**A1 got sharper than `references.md` proposed, and the plate overruled the reference.** Axiom's 2px radius was carried into A1 at step 1. Plate J draws `0` on every interface element and keeps radius for physical objects only. Under the rule that the drawing wins over the caption, `0` stands. A1 is not amended, it is met more strictly than the reference met it.

**One attribute is not yet proved on a screen.** A4, depth by tone rather than by blur, is carried on plate J by three grounds, `#11110f`, `#171714`, `#2a2418`, with no blur and no shadow anywhere in the console. Whether three tones are enough to separate a queue, a detail pane and a selected row **at 1440 in a real browser** is decided at step 6, not on a poster. If they are not, A4 is what changes.

---

## 8. Reconciled against the mockups, stage 07 step 1

**The role of this file inverts here, and the rule does not.** Up to stage 06 the attributes judged the mockup. From here the mockup is the living truth and the reasoning is fitted to it. What does **not** change is that a mockup contradicting an **attribute**, rather than merely a taste or an anti-reference, is never absorbed in silence.

`DESIGN.md` section 7 carries the divergence table in full. One row is open and it is the only one:

**A3 says authority comes at weight 500 rather than bold, and nothing in the product is 500.** The code runs 600 in nineteen places and 700 in eight. The 700s sit on `.readout b`, the count inside the one heading a page is allowed, and on the strongest clauses of the shift brief. Stage 04 set both against the same two sources this attribute stands on.

**Proposed: change the attribute, narrowly.** A3 keeps its rule and gains a ceiling: *600 is the working emphasis, and 700 is allowed on a counted value only.* Linear's technique then stops being quoted as a number and is quoted as what it is, a refusal to buy authority with weight. **The decision is the user's, and until it is made A3 stands as written and the code stands as built.**

**Four attributes needed no row.** A1 is met more strictly than `references.md` proposed, radius `0` against Axiom's 2px. A2 is met and countable, four accent jobs and three severity levels. A4 is met with zero shadows and zero blurs in the interface. A5 is met in the mono family, in the severity ramp and in every count naming its window.
