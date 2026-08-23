# References: where this visual language comes from

Stage 06, step 1. Read through the Refero MCP server on 2026-08-23. Four styles and three screens were searched; two styles and one screen were pulled in full and read whole, which is what this file is built from.

**No new research was done here.** `research/docs/research.md` named the benchmark at stage 01, and this step looks for its visual language rather than choosing a new one.

---

## 1. The rule this file stands on, from the tool rather than from me

Refero's own instruction, quoted verbatim from the `refero_get_style` response:

> "Do not copy a style wholesale. Treat each style as a reference ingredient.
> Recommended synthesis:
> 1. Pick one primary style as the foundation for overall mood and density.
> 2. Borrow 1-2 specific details from other styles, such as button treatment..."

It is quoted rather than paraphrased because the stage rule and the service agree, and a rule that stands on a first source is harder to talk yourself out of than one that stands on a pack.

**The stage adds one clause the tool does not have.** A borrowed technique is legitimate **only when it lands on a pair of attributes**. `references.md` says HOW something is made; an attribute says WHY it is right for us. A technique with no attribute behind it is a clone at the level of the detail.

---

## 2. Which benchmark, and the split this step had to name

`research.md` §5 names the strategic dimension, **calibrated trust in an automated agent**, and benchmarks it on four products **from outside software**: Waymo, the NWS forecast, the aviation Flight Mode Annunciator, and Stockfish on Lichess.

**Three of those four have no visual language to search.** An FMA is a strip of glass in a cockpit; a probability of precipitation is a definition. They were chosen for **mechanisms**, and stage 04 already took the top three into the product: the fixed-position annunciator, the number that names its claim and window, the provenance strip.

So this step reads the other row `research.md` wrote, §4's **ASPIRATIONAL, category benchmarks: Linear, Cursor, Datadog Cloud SIEM, Superhuman.** That row exists precisely to say what good looks like for an operator surface, and it is where a search for visual language belongs.

**Both rows are named here so a later reader does not think one was overlooked.** The mechanism benchmarks paid out at stage 04 and are in the wireframes already. The visual benchmarks pay out now.

---

## 3. What was found, and what is taken from each

### 3a. The base: Axiom

| | |
|---|---|
| Style | Axiom, `axiom.co` |
| Refero calls it | *"Dark Matter Console: a vast, organized digital workspace with critical data highlighted by a vibrant, focused glow"* |
| Why the base | It is the only result in ten that reads as an **instrument** rather than as a landing page about an instrument. Near-black surfaces layered by tone rather than by shadow, **2px radius everywhere**, monospace as the primary face rather than as a garnish for timestamps, and a single accent used as a spotlight |

**Taken, and each one carries the anxiety it answers:**

| Technique | As Refero states it | Which anxiety it removes |
|---|---|---|
| **One accent, and it is not blue** | `#DA5C2C`, and the rule beside it: *"Apply Highlight Orange exclusively for primary calls to action and active states"*, plus the don't: *"Avoid using Highlight Orange for decorative purposes, as it dilutes its impact"* | *"The fear of the one true positive closed as noise"*, the load-bearing anxiety in `personas.md`. A colour spent on decoration cannot also mean **this one**. And see §4: a security console that is dark plus blue is the category reflex, and this is not it |
| **2px radius, not 8, not 12** | *"Maintain a 2px border-radius for all interactive elements and content cards to preserve the precise, defined aesthetic"* | She works this six hours a day, and design principle 5 says density is the feature. Soft corners cost horizontal space per row and read as a consumer product asking to be liked |
| **Depth by tone, not by shadow** | *"creates a deep, layered surface system without relying on heavy shadows"*, three surfaces at `#000000`, `#111111`, `#191919` | The split-pane has a list, a pane, a dialog and a notice stack live at once. Shadow stacking on four layers is how a dense screen becomes soup |
| **Monospace as the primary face** | *"Its monospace nature grounds the design in a technical, precise aesthetic"* | Every load-bearing value in this product is a count: `9 signals`, `34 of 36`, `6 sources over 24h`. Principle 3 of the voice makes the count the thing that carries the claim, and proportional digits make columns of counts unreadable |

**Not taken from Axiom:** the 32px card padding and the 40px section gaps. That is a marketing page breathing; this is a console at 1440 carrying eighteen rows and a pane.

### 3b. Detail one: Linear, the changelog

| | |
|---|---|
| Style | Linear, `linear.app/changelog`. **Named in `research.md` §4's aspirational row**, so it is the benchmark the research chose rather than one found here |
| Refero calls it | *"Midnight command center behind frosted glass"* |

**One technique, and only one:**

**The headline that is not bold.** Refero's own words: *"Signature anti-conventional headlines use weight 500 at larger sizes, conveying authority through subtle refinement rather than bold weight"*, with the explicit don't: *"Do not use standard, bold font weights for large headlines."*

**The anxiety:** `jtbd.md`'s social job, verbatim, *"I want it to look like the work of someone who knew what they were doing."* A console that shouts at its operator is a consumer product wearing a uniform. Authority carried by restraint is the same argument the product makes about Clerk: it files a verdict, it does not insist on one.

**Also taken, as a discipline rather than a value:** *"Use a 1px solid border for subtle visual separation of components"* and *"Do not use heavy shadows for visual depth; rely on background color layering."* It agrees with Axiom, which is why it is a discipline: two independent sources reached the same rule.

**Not taken:** the 9999px pill buttons. Pills and 2px radius cannot both be the language, and the 2px has an attribute behind it while the pill has only a fashion.

### 3c. Detail two: Rox, the accounts table

| | |
|---|---|
| Screen | `run.rox.com/customers`, dark-mode dense data grid |
| Why a screen and not a style | Refero's styles cover marketing and product **pages**; the tool says so itself. The one thing they cannot show is a real row of a real table at real density. This screen is the queue's nearest living relative |

**One technique:**

**The status pill is the only saturated thing in the row.** Refero's reading: *"Accent green for status draws attention, whereas muted grays keep the overall surface quiet"*, on a row height of 52 to 60px with *"row separators faint or absent"* and column dividers at 1px.

**The anxiety:** design principle 1, *"Every row is a decision, not a record."* The queue has seven columns and a closed set of six state chips; if severity, tenant, verdict and state all compete in colour, the row stops telling her what to do next. One saturated element per row, and it is the state.

**Deliberately inverted:** Rox uses `#23D160`, a vivid green, for a **success** state. Our closed chip set has no success value: `unrecorded`, `taken`, `escalated`, `decided`, `acted`, `investigating` are positions, not outcomes. The technique is the **scarcity of saturation**, not the green.

---

## 4. The reflex this search was run against, and what it looked like

Ten style results came back for a query about a dense operator console. **Eight were dark plus an electric blue or violet accent.** Dovetail, Doppler, Checkly, OpenSea, Henry, and the second Dovetail all describe themselves in nearly the same words: midnight canvas, thin borders, a single blue accent, 8px radius, frosted glass.

That is the **category reflex**, and it is the dangerous kind: it is not the universal blue-violet gradient that anyone can spot, it is a palette that looks **correct for security tooling specifically**. It would be defensible in a review and it would be guessable from the category before any of our research existed.

**Two of the ten were not that**, and both are in this file: Axiom, which spends its one accent on orange, and Perplexity, which is warm ivory and clinical calm. The second is recorded here as the **anti-reference** rather than as a source: it is the correct language for a search box a person opens twice a day, and the wrong one for a surface she reads for six hours, where a bright field is a glare source at 03:00.

**This is the finding of step 1**, and it is more useful than any single hex: the search proved the reflex exists in the corpus rather than only in the model.

---

## 5. What is deliberately not here

**No hex, radius or font is committed by this file.** Step 2 writes the attributes and step 3 generates the plates; the palette is read off the **pixels** of the chosen plate, not off this table. A value taken from a reference and carried straight into the product would have a reference as its origin, and a reference is not an origin. It says how, not why.

**The techniques above are candidates.** Each one survives into the product only if step 2 gives it a pair of attributes to stand on.

---

## 6. Sources, all opened in this session

| Source | Kind | URL | Read |
|---|---|---|---|
| Axiom | style | `https://axiom.co` | Full reference, whole |
| Linear changelog | style | `https://linear.app/changelog` | Full reference, whole |
| Rox accounts | screen | `https://run.rox.com/customers` | Full reference, whole |
| Perplexity | style | `https://perplexity.ai` | Preview only, kept as the anti-reference |
| Dovetail, Doppler, Checkly, OpenSea, Henry, Warp, shadcn, Cron, gt-planar, Superlative, Mode, Desktop.fm, imgs.so, Uniswap Cup, Design Full-Time | style | | Preview only, and §4 is what they were for |
| Cron calendar, Enode dashboard ×2, Rox outreach, Rox accounts light, Programa ×2, Anam, The Athletic | screen | | Preview only |
