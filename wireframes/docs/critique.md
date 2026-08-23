# Stage 04 critique

Step 9. Five instruments, one second pass, and the defects grouped by class rather than by screen. Every row carries who found it and what happened to it.

---

## 1. The instruments, and why five rather than two

| # | Instrument | Radius | Weight |
|---|---|---|---|
| 1 | **Claude with a live browser** | What is only visible rendered: breaks at 360, an element that should be hidden and is not, a control that does not reach the bottom of the screen, a computed colour | baseline |
| 2 | **Codex, read only** | Source: a contradiction between two files, a stub, a state with no page, a dead end, drift from a token, a fixture that disagrees with itself | **double** |
| 3 | **The stage contract as a checklist** | Process. Every gate and every line of "Готово, коли" answered done, not done, or deliberately skipped with a reason | baseline |
| 4 | **A clean context reader, given stage 05's real job** | Meaning. Not "find defects", which returns Codex's list from a second model, but "voice this product", which returns what cannot be understood and, more usefully, **what was understood wrongly** | **triple** |
| 5 | **grep for a rule declared twice** | One class only, and it is the one where grep beats any model | baseline |

**The fifth instrument had a hole and step 9 found it.** It compared inline against inline and never inline against `_wf.css`. Ten rules were declared in both, with the inline copy winning the cascade, and one of them is why a sticky rail stayed unstuck through two attempted fixes. The instrument now compares both ways.

**Two instruments converged twice independently**, which is the strongest signal in the set: Codex and the reader both hit the log's `State` vocabulary; the checklist and grep both hit the stale estimate in `screens.md`.

---

## 2. What was found, by class

### Class A: regressions from step 8's own fixes

The two worst findings of the step are self inflicted, and both came from the browser.

| Defect | Instrument | Outcome |
|---|---|---|
| `.banner{display:flow-root}` was appended below `.only-narrow{display:none}` with equal specificity and won on order. **22 pages showed the 360 only block at 1440**, most visibly `keyboard.html` announcing that there is no keyboard above a full keyboard map | browser | Fixed, `.banner:not(.only-narrow)`. Re measured: every `.banner.only-narrow` computes `none` at 1440 |
| Five tokens declared at step 8 and never used, one of them `--tap`, a second name for `--s5` | grep | `--tap` deleted, four applied. Every one of the 37 declared tokens is now used |

**174 checks at step 8 missed both.** They looked for overflow. Neither of these overflows.

### Class B: broken at 360

| Defect | Instrument | Outcome |
|---|---|---|
| `.pane-foot` is sticky and never stuck: `.z5` kept its own `overflow-y`, so `bottom:0` resolved against a box that does not scroll. 4.2 had found this for one screen at step 8 and fixed it privately; every other pane kept the defect | browser | Fixed in `_wf.css`. `Accept` now at y680 in a 760 viewport instead of y1974 |
| The fleet reading fused: `FLEET 40 tenantsacts alone up to`. With the separator at `display:none`, two neighbouring bare text runs merge into **one anonymous flex item** and the gap goes with it | browser | Each part is its own `<span class="part">` |
| The outage page put its only action a viewport and a half down, and the phone number below the reasoning | browser | Actions above the prose at the desk, pinned to the bottom edge at 360 |
| The record pages are three screens tall and their only exits were at the bottom | browser | The `as of` rail carries the exit and does not scroll away |
| The notice stack took 408 of 760 pixels at 360 | browser, after 8.4 was drawn | The cap is one at that width, and the failure wins the slot |

**The first of those was verified wrongly once before it was verified right.** `innerText` was used to check the fused annunciator, and `innerText` never shows a flex gap. It reported the text as separated. A screenshot at 3x showed it fused.

### Class C: colour, in the stage whose contract says there is none

`_wf.css` opens with *no colour, no brand, no icons, no shadows, no images* and never declared a rule for `a`. **151 links on 27 of 62 screens rendered in the browser's default blue**, from the first day of the stage.

**No instrument could have caught it.** grep reads rules that exist; Codex reads source; the reader reads meaning. A defect whose cause is an **absent** rule is invisible to all three. It took asking the live browser for a computed `color`.

And the first version of that test asked whether `r === g === b`, which reported 832 findings, every one of them the palette's own near greys. **A test with the wrong threshold is worse than no test:** 832 findings read as a broken product rather than a broken instrument.

### Class D: the drawing was right and the layer above it did not say so

| Hole | Instrument | Outcome |
|---|---|---|
| 0.8 listed 5.1 as a reader of the six state chips. 5.1 runs a second vocabulary, and one word appears in both meaning different things | Codex **and** the reader, independently | Both vocabularies now stand in 0.8 section 8, with the collision named as stage 05's |
| `C-0441` and `C-4419` were on live pages and in no fixture list | Codex | Declared, with why each is structurally necessary and the rule that `C-4419` must never gain a tenant |
| Axis A of 0.7 has seven values; the list showed six and the seventh lived in the state matrix | reader | `Other, and say why` is the seventh, drawn at `reject-other.html` |
| Node 8.4 was MVP with three notices marked `yes` and **not one drawn** | contract checklist | Zone Z6 exists and two queue states draw all three |
| `CONNECTING` was a declared `readyState` with a strip variant and zero pages | grep, as an idle control | `queue-reconnecting.html` |

### Class E: the same rule declared twice

| Defect | Instrument | Outcome |
|---|---|---|
| Ten rules declared in both `_wf.css` and a generator's inline block, inline winning | grep, after the instrument was repaired | Stripped from six generators |
| Section 2 of `_wf.css` declared `.only-desk` the survivor of three names for one utility **and migrated neither of the other two**, while a generator still carried a comment saying the complement does not exist | grep | Both callers migrated, both private copies gone, the false comment gone |
| Eleven inline declarations repeated across two or more screens | grep | Classes in `_wf.css` section 17. Four inline declarations remain, each used once |
| Two interface strings living in `content:` rules | Codex | Markup. **And the move nearly changed the drawing**: as a flex sibling the tag took its own line at 360, 240px against 98px at 1440, caught only because the row was measured before and after |

### Class F: two primary actions, and other single control defects

Five pages carried two black buttons, twice with the **same label**. One disabled control explained itself only in a `title` attribute and in node numbers. `Retry` and `Try again` were two words for one action. `ACTED 24m ago` put `ago` in a slot the canon says is bare.

All fixed.

**And the final sweep found the same rule broken the other way.** A probe that counts primaries per page and flags **zero** as loudly as two found that `reject.html` at 360 had none at all, while its own banner says *"on a phone the exit is escalate, and only escalate"*. `Accept` carries `only-desk` on that family, so the footer lost its primary along with it and the one action the screen names rendered as an ordinary outlined button. Fixed with `.btn--primary-narrow`, the other half of that pair.

**Verified across all 62 screens at both widths: zero pages with more than one reachable primary.** Twenty three at the desk and thirty two at 360 have none, and that is correct rather than a gap: a queue's action is selecting a row, a log and a record are read only, and a reject dialog with no reason picked has nothing to submit yet.

Two findings in the same sweep were struck. `index*.html` was reported as having no way out, and the door is a `<form action="queue.html">` that the probe could not see because it counted only `<a href>`: clicked live, all four doors open onto the right screen. And eight pages reported two primaries, which is a modal over a pane: the second sits under a 28 per cent scrim and is not reachable.

### Class G: the author was talking to the reviewer in the analyst's voice

The dominant finding of the browser pass, and independently the reader's: **the prototype argued for its own decisions in the same typographic slot as product hints, in the second person.** The clean context reader could not tell which sentences stage 05 was supposed to rewrite, which is precisely the question stage 05 opens with.

Settled by the user rather than by the instrument: the argument stays on the screen and takes a register of its own. `.anote`, a dotted rail and a `WHY` label. **35 pages carry it; 27 carry `.gnote`, which is product copy.** Stage 05 owns everything that is not `.anote`.

The first name written for the class was `.why`, which is **already owned three times over** by the latitude ladder, the log row and the outage line. Renamed before it shipped: the fifth class name collision of the stage and the first caught in advance.

---

## 3. Verification, and what did not survive it

Findings were re read against the file before anything was changed, at double weight on Codex's.

| Struck | Why |
|---|---|
| Eleven `placeholder=""` attributes reported as unlabelled fields | Every one of those fields carries a real visible `<label>`. A category error, not a defect |
| `overview.html @1440 spillY h1 [57>54]` | 3px of line box rounding on the hub's own heading. Reported on every sweep, real in the arithmetic, invisible on the screen |
| `#000` and `#fff` under `@media print`, written into the exemptions list from memory | **There is no print stylesheet in this stage.** Struck from the list before it was published |

---

## 4. The second pass

Re run on every touched screen after the fixes, mechanical classes back to grep and to the browser.

**It found one thing, and it was a fix that had not worked.** The record rail still did not stick after the narrow override was written, for two chained reasons: the override sat above the rule it overrides, and a media query adds no specificity, so only order decides; and the page still carried the old rule inline. That is what exposed class E's first row.

**Final measurement, live URL, cache forced:**

| Sweep | Result |
|---|---|
| 63 pages x 1440, 1024, a measured 360 | **zero elements outside the viewport, zero horizontal scroll** |
| 63 pages x 1440, 360, clipped or spilling text | **one finding**, the 3px rounding above |
| 63 pages, computed colour of every link and control | **zero coloured elements** |
| 63 pages, internal links | **zero dead** |
| the whole tree, em dash | **zero** |
| declared tokens | **37 declared, 37 used** |

360 was asserted, not assumed: `document.documentElement.clientWidth === 360`. Headless Chromium uses overlay scrollbars, so a 375 viewport reports 375 and the entire class would have been tested at a width where it does not reproduce.

---

## 5. What is left open, and to whom

Not defects of this stage. Named so that stage 05 starts from a list rather than from a sweep.

| Open | Owner |
|---|---|
| **Client or Tenant.** The product's most repeated noun, and no file rules which it is. Both are in use | 05 Voice |
| **Node numbers in product copy.** `&middot; 0.4` on 51 pages, node numbers in body text on 16 more. Correct for a prototype, wrong for a product | 05 Voice |
| **Vocabulary collisions.** accept and upheld, three ways; the queue destination, five ways; `escalated` meaning two different things on a row and on an entry | 05 Voice, and 0.8 already names the last one |
| **British against American spelling.** Both present | 05 Voice |
| Every interface string on 62 pages is a **draft** | 05 Voice, and `.anote` is not its business |
