# The visual layer, and it is a system rather than a folder of pictures

Stage 07 step 4. Two things live here: **what an image of this product is allowed to be**, stated so a picture can be rejected without arguing about taste, and the **reproducible prompt** behind every file, so a second image can be made two years from now and belong to the first.

**A style that cannot be reproduced is a one-off, not a system.** That is why the prompt is checked in beside the file rather than living in a chat log.

---

## 1. Where this product may carry an image, and it is almost nowhere

The console is a working surface read six hours a day. Design principle 5 says density is the feature and there is no decorative whitespace, so **imagery has to earn its space rather than assume it**. Counted across all 62 screens, exactly two surfaces can carry one:

| Surface | Screens | What it is for |
|---|---|---|
| **the door**, `index.html` and `index-signed-out.html` | 2 | the only screen a person meets before they are working. It is allowed atmosphere because nothing is being decided on it |
| **the systemic states**, `unavailable.html`, `not-found.html` | 2 | a page with no product on it. It may carry a mark, never a scene |

**Everywhere else the answer is no.** The queue, the case file, the log, the shift brief and every state of them carry zero images, and that is the decision rather than an omission. An image on a screen where a verdict is made would be an overlay on the evidence in all but name.

---

## 2. Image language, taken from plate J and stated as a rule

**Allowed.** The fleet at a glance. A console in low light. Counted evidence. Retained paper and operational objects with edge, weight and one upper-left light. Geometry before drama. Long exposure, where motion is a trace rather than a blur.

**Never.** Threat theatre. Anonymous hooded figures. Code rain. Padlocks and shields. Floating glass panels. A world map with arcs on it. Faces. Any image that separates latitude from the working console.

**One sentence to reject a picture with:** *show systems under load, never cyber theatre.*

---

## 3. The colourway, locked to the palette rather than described

Every image in this product is graded to the tokens in `design/kit/kit.css`. No image introduces a hue the interface does not have.

| Role in the image | Token | Value |
|---|---|---|
| deepest shadow | `--color-ground` | `#11110f` |
| mid tone, the body of the scene | `--color-surface` | `#171714` |
| structure, edges, hairlines in the scene | `--color-rule` | `#675f50` |
| the one warm light source | `--color-accent` | `#d29c3f` |
| the only other chroma allowed, sparingly | `--color-failure` | `#b25d44` |
| highlight, never pure white | `--color-text` | `#e9e4da` |

**Two constraints carry over from the ground decision and they are not stylistic.** Never pure white against pure black, because halation hits a large minority. And no image may be brighter overall than the interface around it: a case is opened from a phone at 03:00, and a bright plate at that hour is worse than no plate.

---

## 4. The prompts, reproducible

Generator: **Google Nano Banana 2 via Magnific**, 4k, aspect 3:2 for the door, 1:1 for a systemic mark. Model and settings are part of the prompt: a different model is a different image, not the same image again.

### 4.1 `door.jpg`, the sign-in surface

> A night operations floor photographed at 03:00 from a low three-quarter angle. Long exposure. Rows of dark desks recede into the depth of the frame; two distant monitors glow warm amber and are the only light source in the picture. Everything else resolves in near-black and warm charcoal. Hard horizon lines and rectangular geometry, no curves, no lens flare, no bokeh circles. A single faint amber trace across the middle distance suggests one person moved through the frame during the exposure; no face, no figure is legible. Colour graded to a warm near-black palette: deepest shadow #11110f, body #171714, structure #675f50, one warm light #d29c3f, highlight never brighter than #e9e4da. Documentary, observed, unglamorous. No text, no logos, no screens showing readable content, no padlocks, no code rain, no world maps, no hooded figures.

**Where it goes:** behind `.doorcard` on `index.html` and `index-signed-out.html`, at a low opacity with the card fully opaque over it, so nothing that is read sits on a picture.

### 4.2 `outage.jpg`, the systemic mark

> A single square, drawn not photographed: a fine amber contour line breaking once in the middle of an otherwise continuous rectangular grid, on a warm near-black ground. Nothing else in the frame. Line weight even and hairline thin. Colour: ground #11110f, grid #675f50, the break #d29c3f. No gradient, no glow, no shadow, no text, no icon vocabulary, no illustration style.

**Where it goes:** `unavailable.html` and `not-found.html`, at a small fixed size beside the text, never as a background.

---

## 5. Icons, and the decision is deliberately not made here

**The product contains zero SVG across all 62 screens**, confirmed by grep and recorded in `design/kit/inventory.md` section 5. Two thirds of the content axis is therefore empty, and every icon added will be a decision with no wireframe behind it.

**Adopted at step 4, and applied in exactly three places.** Sixteen glyphs are in `design/kit/kit.html`. Each application had to earn its space: `.src`, because an evidence line named its source and nothing said the source **opens** somewhere else; `.expand`, because design principle 2 is depth one key away and depth had no mark at all; and the keyboard affordance in Z1, which rendered a literal question mark. Everything else was argued down and the reasons are in row 2 of `design/kit/proposed-variables.md`.

**They are attached as CSS masks rather than markup.** `wireframes/` is frozen and all 32 coloured pages hold a structural diff of exactly zero, which an `<svg>` element on a screen would end. `background:currentColor` on the mask keeps the inheritance, so a glyph still takes the severity or the accent of whatever it sits in.

**The spec, if they are adopted:** one set for the whole product, Solar, **inline SVG rather than a CDN script**, 1.5px stroke on a 24px grid, square terminals to match a radius of zero, `currentColor` so an icon inherits the severity or accent of whatever it sits in, and never an icon alone where a word would fit.

---

## 6. Files

Nothing is generated yet. Both prompts are ready and both cost credits, so the decision to spend them is the user's.

| File | Prompt | Where it goes | 4k | 2k | Status |
|---|---|---|---|---|---|
| `door.jpg` | 4.1 | the ground behind the sign in card, 5 pages | 150 | 75 | **generated and wired**, 2048 wide |
| `outage.png` | 4.2 | a 120px mark above the heading, 3 pages | 150 | 75 | **generated and wired**, 1024 square |

**Both came back on brief on the first attempt, which is worth recording because it is the prompt being specific rather than luck.** The door is a night floor with two amber monitors as the only light and one faint amber trace where a person crossed the frame during the exposure: no face, no threat theatre, nothing readable on a screen. The mark is an amber square with one break in its top edge over a rule-coloured grid.

**Both are wired now, and neither is under text that has to be read.** The door is the ground of the whole screen column with the card fully opaque over it; the mark is a fixed 120px square above the heading, 84px below the breakpoint.

**The rule that the page may not be brighter than the console was measured rather than trusted.** Mean luminance across the working area: the door at **18.67** against the console's **23.53** on a 0 to 255 scale. It is darker, and the first attempt was so dark the room was invisible, so it was lifted and measured again rather than judged by eye.

**One thing the wiring taught.** The ground is attached with `:has()` to the screen column that contains the door, not to `.door` itself. `.door` is only as tall as its own content, and giving it `flex:1` to fill would change the layout of the copy against its grey original, which ends the zero diff. The column already fills the viewport, so nothing about the layout moves.

**2k is enough for both and the reason is not thrift.** The door image is a background behind an opaque card at a low opacity, and the outage mark is drawn at a small fixed size. A 4k plate for either would be paying for resolution that is thrown away on the way to the screen, and this project's own rule is that a fixture exists to make a decision, not to be impressive.
