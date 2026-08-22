# Step 8 fan-out: the contract every agent works to

One agent, one screen. Seven agents at once. This file is the whole contract, and it exists so that the same rules are given to all seven rather than paraphrased seven times.

---

## 1. What you own, and what you must not touch

**Yours to create and edit:**

- `wireframes/docs/gen<screen>.py`, your generator
- the html files it writes into `wireframes/`, and only those

**Read only, and editing any of them breaks another agent's work:**

- `wireframes/_wf.css`, the shared stylesheet. The parent reconciles it after everyone is done
- `wireframes/_nav.js`, the registry. The parent flips your screen to `built`
- `wireframes/docs/genqueue.py` and `gencase.py`, which you import
- every other agent's generator and html
- `wireframes/docs/screens.md` and `conventions.md`

**Do not run git.** The parent commits once, after reconcile.

---

## 2. Your generator, and why it is a generator

Hand edits to a generated page do not survive the next run, so the page is never the source. Start your file exactly like this:

```python
# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C
```

`Q.page(fname, title, strip, z4, z5, extra_script='', current='queue')` writes one page: it renders the shell, the stage panel, zone 1, zone 2 and the two columns. Importing `genqueue` or `gencase` emits nothing, so you can use their builders freely.

What you get from them, and what you must therefore never re-invent: `Q.BASE_ROWS` and `Q.FLEET_ROWS` (the canonical list), `Q.row`, `Q.grid`, `Q.rows_html`, `Q.bars`, `Q.SEV`, `Q.fleet`, `Q.FOOT`, `Q.z4`, `Q.CHIPS_DEFAULT`, and from `gencase`: `C.pane`, `C.foot`, `C.chiprow`, `C.latitude`, `C.tenant_ctx`, `C.stamp`, `C.EVIDENCE`, `C.PROV`, `C.VERDICT`, `C.SUB`, `C.z4_with_case`.

Set `Q.INLINE = INLINE` after you build your own `INLINE` string, because `Q.page` renders the module level constant.

Set `current=` to the global navigation item your screen sits under: `'queue'`, `'shift'` or `'log'`.

Run it with `python3 wireframes/docs/gen<screen>.py` and check the page count it prints.

---

## 3. Inline CSS is transport, not a home

Every rule you add goes in one `<style>` block that opens with the marker, so the parent can find all of them mechanically:

```
/* INLINE: <screen> :: for reconcile into _wf.css */
```

Two hard rules:

- **A token value never appears inline.** `--ink`, `--s3`, `--t-sm`, `--radius`, `--pane` and the rest are already variables in `_wf.css`. Write `var(--s3)`, never `12px`
- **A rule you can see on another screen is not yours to redefine.** Reuse the class. If you find yourself writing a second version of a card, a row or a banner, you have found a defect: say so in your report rather than styling around it

Build your `INLINE` on top of what you inherit: `C.INLINE` if your screen uses the case pane, otherwise `Q.INLINE`.

---

## 4. What you may draw

**Nothing that is not in your node's specification.** Your states come from the state matrix of your own `ia/docs/pages/*.md`, and from nowhere else. A block, a state or a control that appears first here is a defect in the IA: **report it, do not draw it.**

The one exception is interface strings. Button labels, field labels and the text of a state are draft here and owned by stage 05. Write them short, say what the thing does, and do not sell.

**A live screen, not a schematic.** A real page filling the viewport, which clicks and scrolls. Never two frames on one page, never annotations labelling the zones, never grey boxes standing in for content.

**One page per state.** Each state is its own file, `<screen>-<state>.html`, and the base state is `<screen>.html`. Every state has a way out.

**Desktop first, from 1280, with 1440 as the target.** Then narrow the browser to 360 and prove the same page holds. Not a second file and not a second frame. Remember the prototype carries a 244px stage panel the product does not, so the screen itself runs in about 1040 at a 1280 window.

---

## 5. The canonical fixtures, and they are not yours to extend

Full canon in `ia/docs/pages/reading-conventions.md`, sections 3 to 7. Short form:

| | |
|---|---|
| **Tenants** | Larkfield Logistics, Bramber Retail, Meridian Health, Norsk Marine, Halcyon Care, Halden Freight, Aubrey Dental Group. **These seven and no others** |
| **People** | `R. Idrissi`, the analyst. `D. Okonkwo`, a peer analyst. `S. Varga`, SOC lead, who receives escalations |
| **Cases** | `C-4417` at Larkfield, the canonical one. `C-4482` at Aubrey, the tenant with no baseline. `C-3180` at Norsk Marine, June 2026, whose snapshot did not survive |
| **Severity** | Three levels, glyph **and** word: `High`, `Medium`, `Low` |
| **Elapsed time** | Bare unit, one unit, no `ago` in a column: `27m`, `4h`, `3d`. In prose, `ago` is fine |
| **Absolute time** | ISO 8601 in UTC, and only in the log: `2026-08-22T04:41:12Z` |
| **Wall clock** | `19:00 to 07:00`, and **only on 2.1** |
| **Effort** | `9 signals` is what checking will cost her. `6 sources, 24h` is what Clerk spent |
| **State chips** | A closed set of six: `unrecorded`, `taken`, `escalated`, `decided`, `acted`, `investigating`. **At most two on a row, highest first** |
| **Today** | 2026-08-22 |

**A number in a drawing is a fixture, not a finding.** It is sample content chosen to make a layout decidable. It must be internally consistent with every other surface, and it is never quotable as evidence. **Do not invent a policy number** (a retention window, a price, a percentage of anything real): name the value's owner instead.

**No em dash anywhere.** Not in the html, not in the python, not in your report. Commas, full stops, or a hyphen with spaces.

---

## 6. When you are done

Report back, in this order:

1. The pages you wrote, one line each: filename, state, what it proves
2. Anything your node's specification did not answer, and what you did instead
3. Anything you had to draw that is **not** in the specification, which is an IA defect and the parent will fix it upward
4. Any rule you wrote inline that you believe belongs in `_wf.css`, with the reason
5. What you measured: page width and horizontal overflow at 1440 and at a real 360

For point 5, measure rather than assert. A local check is enough at this stage, the parent verifies on the live URL:

```
python3 - <<'PY'
import re
h = open('wireframes/<your page>.html').read()
# the rule has no exceptions, so the detector spells the character by code point
print('em dash:', h.count(chr(8212)), '| h1:', h.count('<h1'), '| inline marker:', 'INLINE:' in h)
PY
```
