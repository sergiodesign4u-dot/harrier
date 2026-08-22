# Stage 04: the wireframe contract

One contract for every screen and every subagent. It **inherits** from the IA rather than starting over, because these screens continue the black and white node anatomies of stage 03b and a second visual language would make them read as a different product.

What it inherits is **structure**. What it does not inherit is the format: 03b drew node schematics inside a document, this stage draws live screens.

---

## 1. What is inherited, and from where

| What | From | Rule |
|---|---|---|
| **The grey palette** | the `.wf` block in `ia/*.html`, verbatim | `--ink:#16181a`, `--soft:#9aa0a6`, `--hair:#d4d6d8`, `--fill:#f2f3f3`. Four values, unchanged, now variables in `wireframes/_wf.css` |
| **Block order and priority** | the blocks section of each `ia/docs/pages/*.md` | Read as an **order**, rendered as one live screen. Never as two frames |
| **Components** | IA nodes: 0.1 shell, 0.2 nav, 0.3 annunciator, 0.4 strip, 3.1 row, 3.6 scope bar, 4.1 evidence, provenance, verdict record | Included once and reused. The header is not redrawn per screen |
| **States** | the state matrix of each node, collected in `screens.md` | A state that is not in a matrix is not drawn. If one is missing, the matrix is fixed first |
| **Flows and exits** | `ia/docs/flows.md` | Every state has a visible way out, checked against the diagram |
| **Reading conventions** | `ia/docs/pages/reading-conventions.md`, node 0.8 | Severity, time grammar, the effort units, the chip set and the tenant fixtures. **Verbatim, not re-decided here** |
| **Addressing and permission** | section 7 of each node | Route, `h1`, who may open it. Private, `noindex`, no schema |

**What is NOT inherited: the type scale.** The 03b mockups were miniatures inside a document at 10.5px mono. These are live screens at 1440. The scale is set fresh in `_wf.css` and it is short, because density is design principle 5.

---

## 2. Inline CSS is transport, not a home

This is the rule the stage breaks on quietly, so it is second rather than last.

At step 8 parallel subagents build screens. They cannot all write to `_wf.css` without colliding, so each puts its screen's rules **inline**. That is temporary. The reconcile pass of the same step brings them back.

**Two criteria decide every declaration:**

1. **A token value never lives inline. Not once, not on one screen.** Greys, spacing, radii, type sizes are already variables, so the screen writes `var(--s4)`, never `16px`. A literal inline is where drift starts.
2. **A rule that appears on two or more screens moves into `_wf.css`.** The same "two or more" test stage 07 uses to decide what is a component.

Genuinely one-off rules may stay inline, and even those are written through `var()`. Every inline block opens with:

```
/* INLINE: <screen> :: for reconcile into _wf.css */
```

so the parent finds all of them with a grep instead of reading twenty files.

**Why this is not pedantry.** Stage 07 derives the component classes of the kit from these screens. If the structure of twenty screens lives in twenty inline blocks, the extraction honestly collects the disagreements: three versions of a row, two grids, four spacings where there should be one. The token audit at stage 08 then shows forks, which is three stages after they were created.

---

## 3. Fidelity: a live screen, not a schematic

| Do | Do not |
|---|---|
| A real page filling the viewport, that clicks and scrolls | A node schematic with zone labels. That was 03b and it is finished |
| One live screen per state | Two frames, desktop and mobile, on one page |
| Real content in every zone, and a real clickable primary action | Annotation captions describing what a zone would hold |
| The real component | A skeleton placeholder standing in for the screen |
| Semantic elements: `header`, `nav`, `main`, `section`, `button`, `form`, `label` | A pile of divs with click handlers implied |

**Every zone answers "why is it here".** A zone without a role is a defect, not filler. **Exactly one primary action per screen**, and nothing in a foot competes with it.

---

## 4. Stance and the narrow rendering

**Desktop first, from `CLAUDE.md`, and this overrides the pack.** Block priority is reasoned from the desk at 1440, which is where forty nodes were specified. The pack says mobile-first; re-deriving priority from a phone would contradict every one of them, so the project rule wins and the substitution is declared here rather than left silent.

**What survives from the pack unchanged, and it is the part that matters:** one live responsive screen per state, and the narrow rendering checked by **narrowing the browser**, never by building a second file.

**360 is proved, not designed for.** One scenario: an on-call analyst reading a paged case and escalating it at 03:00. What the narrow rendering drops is settled per node, not per taste: the detail pane is not rendered, the cost of checking leaves the row, column heads go, and the scope bar collapses to one control carrying a count.

**Acceptance is measured, not eyeballed.** `document.documentElement.clientWidth === 360` and `scrollWidth === clientWidth`. A viewport that is actually 375 makes the whole class of narrow defects untestable.

---

## 5. Naming

| Thing | Name |
|---|---|
| A screen in its success state | `wireframes/<screen>.html` |
| Each real state | `wireframes/<screen>-<state>.html` |
| The hub with every screen | `wireframes/overview.html`, and never `index.html` |
| The product's own landing screen | `wireframes/index.html`. **The one reserved name in the project** |

Names come from `ia/docs/sitemap.md`, in latin script, lowercase, hyphenated.

**Harrier has no marketing landing page, so `index.html` needs a decision rather than a default.** It renders **1.1 Sign in**: the only public URL in the product, the only screen a person who is not signed in can reach, and therefore the honest front door of the prototype.

**The alternative was 3.1**, and it was rejected on naming rather than on principle. The queue is the landing *after* the door, `CLAUDE.md` says so, and it is also the reference screen with eight state pages. Calling its success state `index.html` while its states stay `queue-stale.html` splits one screen across two stems, and calling them `index-stale.html` names a state after a filename convention instead of after the screen.

---

## 6. States

**Four system states are the floor, not the set.** `empty`, `error`, `loading`, `success`. The real set comes from the node's own matrix and includes role, domain and transient states.

- **Each state is its own page**, so the prototype navigates between them rather than describing them
- **Every state has a visible exit.** No dead ends, checked against `ia/docs/flows.md`
- **Success is not automatic.** A screen that submits nothing has no success state, and the matrix says so with a reason
- **Loading is a shape that fills, never a spinner**, and never a skeleton of the whole screen. 0.4 argued it: a spinner says the same thing at four seconds and at four minutes, and the duration is the information
- **An empty state names what would be there and offers the way to get it.** 3.4 is the test: the empty queue must read as the fleet, not as a blank

---

## 7. Text

**Body text comes from the node.** The A to E block of a public product is not produced here, because every node is behind authentication and `1.1` closed that loop with a reasoned no. What each node does carry is the requirement for **which information** belongs in a place, and that is what gets rendered. No lorem ipsum anywhere.

**Interface strings are DRAFT.** Buttons, field labels, state sentences, banner text: no IA node holds these and none ever will, because a node holds the requirement rather than the phrasing. So here they are written to the point of the action, short, no exclamation marks, no selling. **Stage 05 owns them** and will replace them; they are not pushed back into the IA.

**Fixtures are fixtures.** The seven tenants and the canonical case `C-4417` come from node 0.8 and no screen invents an eighth name. The same case shows the same severity, the same signal count and the same verdict on every screen that shows it. **No number in a wireframe is ever quotable as evidence.**

---

## 8. Nothing is invented here

A block, screen, state or transition that appears for the first time in this stage is **a defect in the IA**. It is fixed upward in `ia/docs/`, then rendered.

The one exception is named above and it is narrow: interface strings, which the IA does not hold and will not be given.

---

## 9. Not in this stage

Colour, type family, brand, icons, illustration, photography, shadows, motion, finished UI. All of it is stages 06 to 08, and all of it arrives on **copies** of these screens under `design/`.

`_wf.css` stays grey for the rest of the pipeline. The rule is repeated in the root `CLAUDE.md` on purpose: a nested `CLAUDE.md` only loads when Claude reads something in its folder, and forgetting this one costs the whole artefact of the stage.

---

## 10. The panel

One navigation for the stage, and every page carries it, the hub included.

`wireframes/_nav.js` holds the screens in `window.WF_NAV`, its own namespace, because `NAV*` and the `nav-*` classes belong to the root registry and a name collision silently renders the wrong array. Structure, top to bottom: `← Design process` out to the root, the `WIREFRAMES` badge with one line of subtitle, `All screens` first, then a three level tree of IA cluster to screen to state, accordion with only the current screen open, and at the bottom, quietly, `← IA specification` for the node this screen came from.

**No roadmap on any page of this stage, and no thin state strip above a screen.** Two panels on one page give two left gutters and the text slides under one of them.
