# Stage 06, the audit that was owed

`/impeccable audit` v4.0.4, run at stage 07 after the tool was found to have been available all along. The reason it was skipped is corrected in `docs/decisions.md`; this file is the audit itself.

**Targets:** the 32 coloured product pages, `design/_theme.css`, `design/_screen.css`, `design/concept/_stand.css`, and the two documentation pages of the concept stand.

---

## The instrument was proved before it was trusted

The bundled detector returned **zero findings** on the 32 product pages and both product stylesheets in static mode. That result was not accepted on its own. A **positive control** was built, a small page carrying a known set of tells, and the detector fired on it correctly. Only then was the zero on the product read as a clean result rather than as a dead instrument.

This project has now been bitten three times by the opposite: a grep that compared inline against inline for two steps, a formatter that printed 2.997 as 3.00, and a check that looked in `~/.claude/plugins` and reported a conclusion about a tool that lives in `~/.claude/skills`. **A control run is cheap and the alternative is a clean report about nothing.**

**Its blind spots, named so the score is not read as more than it is.** The detector's scopes are type and layout. It did not flag a `div` with an `onclick`, a missing `alt`, a glassmorphism stack or a purple gradient on the control page, so accessibility, performance and semantics below were measured separately in a browser and are not the detector's result.

**URL mode needed a browser the skill could not find.** It requires puppeteer, which was not installed; it was resolved against the Chromium already on disk from Playwright rather than downloading a second one.

---

## Audit health score

| # | Dimension | Score | Key finding |
|---|---|---|---|
| 1 | Accessibility | **4** | every text pair clears AA on all three grounds, and the two values that do not carry text are named and constrained in the theme |
| 2 | Performance | **4** | no JavaScript on any product page beyond the shell registry, no animation, no shadow, no filter, no image |
| 3 | Theming | **4** | every value in one file, verified twice by two instruments; the last two strays were caught by Codex and are now variables |
| 4 | Responsive | **3** | 12px body gutters at 360 and a 155 character line on the shift brief, both inherited from the grey wireframe |
| 5 | Implementation integrity | **4** | zero detector findings on 32 product pages, positive control passed, structural diff zero on every copy |
| **Total** | | **19/20** | Excellent, minor polish |

## Implementation integrity verdict: **pass**

The product expresses one system and it is verifiable rather than asserted. Every colour, family, radius and tracking value resolves to `design/_theme.css`; the coloured copies differ from their grey originals by zero bytes of structure; the second screen of the language cost one CSS rule and the third cost none. The detector, pointed at the whole `design/` tree, put **not one finding on a product page**.

---

## Findings

### Fixed

**[P2] `side-tab` on two documentation callouts.** `design/concept/concept.html` and `design/concept/directions.html` each carried a 3px coloured left border on a callout. The detector calls it the most recognisable tell of a generated interface, and it is right. Replaced with a small monospace label over a hairline rule, which is the register `concept.md` section 2c recorded as the form the user actually chose. **Two instruments had now landed on the same element for different reasons**, Codex on the literal colour and the detector on the shape, which is the strongest kind of finding this project gets.

**[P2] `undersized-ui-text`, 10px badges.** The roadmap panel renders `Next` and `SOON` at 10px against an 11px floor for functional text. That panel is chrome this stage put on the coloured copies, so it is ours rather than the wireframe's. Raised to 11px in `design/_screen.css`.

### Verified and rejected

**[P1 claimed] `text-occlusion`, the panel badge covered by the screen at 390.** Reported 32 times across three pages. Measured in a browser: `#sidebar` computes to `max-height:120px; overflow-y:auto` at mobile with a scroll height of 573, **and the grey wireframe does exactly the same at a scroll height of 1422**. The panel is a deliberately clamped scroll region, not an overlap. The finding is what a scrolled-out element looks like to a geometric test. **Removed on verification.**

### Real, and the fix belongs upstream

**[P2] `body-text-viewport-edge`, 12px gutters at 360 and 390.** Nine paragraphs on the case file sit 12px from each edge. Verified, and identical in the grey wireframe: the value is `--s3` from stage 04. Changing it in `design/_screen.css` would make the coloured copy differ from the grey one in **layout**, which ends the promise that the copy owns only the visual layer even though the html diff would stay zero. The case file at 360 is the one real mobile scenario this product has, so this is not dismissed: it is carried to the Responsive stage with the measurement attached.

**[P2] `line-length`, about 155 characters on the shift brief at 1440.** Two paragraphs. Same reasoning, same destination.

### Rejected with reason, and the reason is a decision rather than a preference

**`tiny-text`, 11px body, 35 instances.** The detector's floor is 12px. `--t-xs` is 11px and carries column heads, chips and meta. It was set at stage 04 against **design principle 5, density is the feature**, for a Tier-2 analyst at 1440 on two monitors for six hours a day. Raising it would cost roughly one visible case per screen in a queue whose whole argument is how many decisions are visible at once. **Kept, and the trade is written down here rather than left as a silent disagreement with a tool.**

**`flat-type-hierarchy`, six sizes at a 1.7:1 spread.** The same decision seen from the other side: the scale is short and dense on purpose. A console is not a landing page, and the hierarchy here is carried by weight, colour and position rather than by size jumps.

**`overused-font`, Space Grotesk on plates J and K, Roboto on plate H.** These are brandbook plates, historical artefacts of a choice already made. **The product uses neither.** The finding is worth keeping precisely because it is independent corroboration: the reason Space Grotesk was dropped for Archivo at stage 06 step 3b was that it is the face this category reaches for by reflex, and a tool that has never seen this project's reasoning flagged the same face on the same grounds.

---

## Patterns

- **Every unresolved finding lives in `wireframes/_wf.css`.** Both of the real ones are stage 04 values, and both are responsive rather than visual. That is a clean boundary: this stage's own surface produced two fixable findings and no systemic ones.
- **The two documentation pages produced more findings than all 32 product pages combined.** The product is held by a kit-shaped discipline and the documentation around it is not, which is worth remembering when the kit is built at step 3.

## Positive findings

- Zero detector findings on 32 product pages, against a positive control that proved the instrument fires.
- Every text pair above AA on all three grounds, computed rather than judged.
- No JavaScript, no animation, no shadow, no filter and no image on any product page.
- Structural diff of zero bytes between each coloured copy and its grey original, re-asserted after every edit.

## Recommended next

1. **[P2] `/impeccable extract`** on the coloured screens, which is step 3 of stage 07 and where the kit is built. It should absorb what `_wf.css` provides so the coloured product stops depending on a folder frozen at stage 05.
2. **[P2] `/impeccable adapt`** at the Responsive stage, carrying the two findings above with their measurements.
3. **[P3] `/impeccable polish`** after the kit exists, not before: polishing screens that are about to be rebuilt from kit classes is work done twice.
