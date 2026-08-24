# Stage 07, the closing audit

`/impeccable audit` v4.0.4, run at step 7 on the surfaces this stage produced: the 51 coloured pages, `design/kit/kit.css`, `design/_shell.js`, `design/_nav.js`, and the three documents of the kit.

---

## Audit health score

| # | Dimension | Score | Key finding |
|---|---|---|---|
| 1 | Accessibility | **4** | every text pair clears AA on all three grounds, and the one control whose colour changed between viewports was found and fixed |
| 2 | Performance | **4** | a product page is 115KB in five requests, no animation, no shadow, no filter, and the only page with an image is the one screen a person meets before working |
| 3 | Theming | **4** | one stylesheet, and the compatibility bridge measured down from thirty names to two |
| 4 | Responsive | **3** | 51 pages at 1440 and 360 with no overflow anywhere, and two stage 04 measurements still unresolved upstream |
| 5 | Implementation integrity | **4** | zero detector findings on any product page, zero ties to the frozen folder, zero structural diff on 51 copies, 102 of 102 renderings byte identical after the detach |
| **Total** | | **19/20** | Excellent, minor polish |

## Implementation integrity verdict: **pass**

The product is one system and every claim about it is measured rather than asserted. Every value resolves to `kit.css`. Every coloured page differs from its grey original by **zero bytes of structure**. Nothing under `design/` reaches into a folder frozen at stage 05. And the two largest changes of the stage, folding three stylesheets into one and replacing the shell renderer, were each proved by rendering everything before and after and comparing bytes.

---

## The instrument was proved before it was trusted, again

The detector's positive control was built and passed earlier in this session, so a zero on the product is a result rather than a dead tool. **Zero findings on all 51 product pages.** Everything it reported sits on the brandbook plates, which are historical artefacts of a choice already made, plus two findings on this stage's own surfaces, both verified false.

### Verified and rejected

**`broken-image` on `kit.css:960`.** There are **zero `<img>` tags in the entire design tree**. The match is the word `<img>` inside a comment that explains why the two images are attached as backgrounds *rather than* as elements. A regex reading a comment as code.

**`em-dash-overuse`, 27 in `kit.html`.** The file contains **zero em dashes**, checked for U+2014 directly. What the detector counted is 144 double hyphens, and every one of them is a CSS custom property name shown in the token showcase: `--space-`, `--color-text-dim`, `--rule-edge`. The rule is right about prose and wrong about a page whose subject is CSS variables.

**Both are the same class**, and it is worth naming: a text-pattern instrument pointed at a page about code. Neither is a defect and neither is suppressed, because a suppressed finding is invisible next time.

---

## What the three instruments found at step 6, and what became of it

**Codex, read only, on the text of the files.** Seven distinct `<style>` blocks living on 29 of the 51 pages, three to seven copies each. The kit's own rule says a rule on two pages is a kit component; seven of them were. Hoisted, and the move proved by pixel comparison: 17 of 18 renderings byte identical. **The eighteenth was a rule dead since stage 04**: an orphaned comment tail with no opening made the browser discard `justify-content:center` on the standalone case pane, so it had never been centred on any of its three pages. Found by reading the parsed stylesheet rather than the file.

**The hoist then leaked**, and the pixel comparison caught it in the same pass: four selectors that had been page-local by accident of where they lived went global and took 18px off the verdict bar on two other screens at 360. That is a copy diverging from its grey original in **layout**, which the promise does not allow, so they were scoped back exactly.

**A reader with clean context**, given only the repository and the next stage's real task. Sixteen things the documents do not let a person understand, and **one live product bug**: `.btn--primary-narrow` is the class that exists so 4.4 has a primary action at 360, and it is the one class the brand layer's accent never reached. Amber at 1440, bone at 360. Nobody who had watched the stage being built could have seen it, because everybody who watched it knew what it was supposed to be.

**Six tokens were declared with no consumer**, and the honest answer was not to force them. Three tracking values were measured on the brandbook plate while the product's type came whole from stage 04, whose own mono tracking is a spread of `.04` to `.14em`, all open, so `CLAUDE.md`'s halation constraint is met by stage 04's values. Forcing the token onto them would have changed stage 04 typography to make a token look used. `--radius-object` is for printed objects the product does not render. `--color-failure` has no failure-coloured element to sit on. All five are marked `UNUSED` in the file with the reason; the sixth had a real job and was given it.

**Four documents disagreed with themselves** and now say so out loud, including one number, `.src` at 118 uses, that had already been corrected once and then reused wrongly in three more places.

---

## Real, and the fix belongs upstream

**12px body gutters at 360 and a 155 character line at 1440.** Both are stage 04 values, both identical in the grey originals, and changing them in the colour layer would make the copy differ in layout. Carried to the Responsive stage with their measurements, unchanged from the stage 06 audit.

**Three inline `style` attributes in the body of three pages**, using stage 04 spacing names. `design/queue-empty.html`, `design/queue-streaming.html`, `design/entry-gone.html`. They are the entire reason two compatibility aliases survive out of thirty, and they cannot be rewritten here without ending the zero diff for the sake of a spacing value.

---

## Patterns

- **Every unresolved finding in two stages of auditing lives in `wireframes/`.** That is a clean boundary and it says the freeze is holding.
- **The three instruments did not overlap once.** Codex found duplication across files, the reader found contradictions between documents and one bug in a viewport nobody had looked at, and the detector found nothing on the product at all. Three instruments that all find the same thing are one instrument run three times.

## Positive findings

- 51 coloured pages at a structural diff of exactly zero, re-asserted after every edit.
- 102 of 102 renderings byte identical across the shell detach.
- A product page is 115KB in five requests: one stylesheet, two small scripts, one document.
- Nothing under `design/` reaches into the folder stage 05 froze, in a link or in a script.
- Every text pair above AA on all three grounds, computed rather than judged.
- Accepted on the live URL and not on localhost: eight pages and five assets at 200, zero console errors, zero failed requests, Archivo loaded, `#11110f` everywhere, no horizontal overflow at 360.

## Recommended next

1. **[P1] Stage 08, Tokens and Components.** The kit is flat by design and the reader's sixteen questions are its brief: the 78 classes with no row, the level rule that contradicts its own column, and the cross-cutting layers whose import order nothing decides.
2. **[P2] `/impeccable adapt` at the Responsive stage**, carrying the two stage 04 measurements above.
3. **[P3] `/impeccable polish`** after the split, not before.

---

## Postscript: the same instrument, pointed at the whole site

Run after the stage closed, on the user's instruction to close every open defect.

**The accessibility line above says every text pair clears AA on all three grounds. It was true, and it was scoped.** The surfaces of stage 07 are the 51 coloured pages, and on those 51 the measurement holds: **104 renderings, zero contrast failures, zero overflow.** It never covered the six stage 06 documents, the 30 IA nodes or the 62 wireframes, because those are not what this stage produced.

Pointed at all **151 pages** of the project at 1440 and at 360, the same computation returned **1018 contrast failures on 128 pages**, and every single one of them was outside `design/`.

**What the extra findings were made of is the point.** They were not 1018 decisions. They were **four values**:

| value | where it lived | what it measured | pages |
|---|---|---|---|
| `#9aa0a6` | `--soft` in `wireframes/_wf.css`, and the same literal copied into the `.wf{}` block of 23 IA nodes | 2.64:1 on paper, 2.38:1 on fill, and 46 of its 48 uses are text | 85 |
| the light palette of `research/_page.css` | inherited by two **dark** stage 06 documents that link it for their column and heading scale | `.lede` at **1.42:1**, `code` at **1.14:1**, `.eyebrow` and `h2` at 2.40:1 in a teal that is in no Harrier palette | 2 |
| `#a8adb2` on `.s1`, `#9aa0a6` on `.nav-badge-off`, `#c4c7c9` on `.cell.na` | three separate faded-on-purpose greys | 2.17, 2.55 and **1.70** | 9 |
| `.s1`-`.s5` | a coverage heat scale in `research/_page.css`, reused as **column names** in one IA node | a grey queue drawing wearing a teal gradient since stage 03b | 1 |

**A defect count is a count of renderings, not of causes, and the two numbers differ by two orders of magnitude here.** Reporting 1018 would have been true and useless. Four is what a person can act on.

**The one that could not be seen by looking.** The `.s1`-`.s5` collision had been live for four stages and nobody caught it, including three passes of critique that had the page open. It is invisible by eye precisely because a teal wash on a documentation page reads as documentation. It surfaced only when a contrast number was computed for every text node on every page, which is a thing no reader does and no reviewer is asked to.

After the sweep: **302 renderings across all 151 pages, zero contrast failures, zero horizontal overflow, zero page errors.**

**One deliberate non-fix.** Every page load requests `/favicon.ico` and gets a 404. It is not repaired: the automatic request goes to the **origin** root, `sergiodesign4u-dot.github.io/favicon.ico`, which this repository does not own, and the only complete alternative, injecting a `<link rel="icon">` from the navigators, would cover three of the four and not `wireframes/_nav.js`. A tab mark on three quarters of a site is worse than none.
