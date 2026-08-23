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

**One thing this section does not reopen.** NEO MIRAI's sheet is ivory. **The board's own ground is a presentation choice; the console's ground is decided in section 4 and stays dark.** A light board carrying dark product screens is legitimate, and the two are not the same decision.

---

## 3. Attributes

Five pairs of visual opposites. Each carries the **line of data** it stands on and the **borrowed technique** from `references.md` it licenses. A pair without both is an invention, and a technique without a pair is a clone at the level of the detail.

### A1. Precise, not soft

**Source.** Design principle 5, `CLAUDE.md`: *"Density is the feature. Six hours a day means no decorative whitespace, keyboard before mouse."* Under it, `personas.md` section E: satisficing under volume is **Supported** by analyst quotes in both studies.

**Technique it licenses.** Axiom's 2px radius on every interactive element and content card, and the 1px solid separator that Linear and Axiom independently arrive at.

**What it rejects.** Linear's 9999px pill buttons, and Axiom's own 32px card padding: that is a marketing page breathing, not a console at 1440 carrying eighteen rows and a pane.

### A2. Saturation is scarce, not decorative

**Source.** `personas.md` section C, the first row of the table: *"The fear of the one true positive closed as noise"*, marked `PREMISE` **and the single most load-bearing anxiety in the product**.

**Technique it licenses.** Rox's rule that the status pill is the only saturated thing in the row, taken **inverted**: the technique is the scarcity of saturation, not the green, because our closed chip set has no success value to colour. Plus Axiom's own prohibition, quoted at step 1: *"Avoid using Highlight Orange for decorative purposes, as it dilutes its impact."*

**What it decides.** Colour spent on chrome cannot also mean **this one**. If severity, tenant, verdict and state all compete in colour, design principle 1 fails: the row stops telling her what to do next.

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

---

## 6. What this file deliberately does not commit

No hex, no radius value, no font name, no spacing scale. Step 3 generates the plates, and the palette is read off **pixels**, with each value carrying its origin. The five pairs above are what a plate will be judged against, and the two lists in section 2 are what its prompt will be written from.

**Every technique carried out of `references.md` now lands on a pair:** Axiom's 2px on A1, its one accent on A2, its tone layering on A4, its monospace on A5; Linear's weight 500 on A3 and its 1px separator on A1; Rox's scarcity on A2. Nothing was borrowed that has no reason of ours behind it.
