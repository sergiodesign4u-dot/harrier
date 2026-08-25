# Motion

Where this product moves, what each movement is for, and what it does for somebody who has asked their machine to move less.

**Nothing in it moved before this stage, and that is measured rather than assumed.** The census below is the first half of the work and it came back empty on every line, which makes this the one stage in the track with nothing to reconcile: every duration here is a decision rather than the survivor of a drift.

---

## 1. The census, as it stands

**A1, the source.** Every `transition`, `animation`, `@keyframes`, `transition-duration`, `animation-iteration-count` and `scroll-behavior` in the project, by search, over the four corpora.

| Corpus | Transitions | Keyframes | Animations |
|---|---|---|---|
| `design/system/` | **0** | **0** | **0** |
| `design/*.html` | **0** | **0** | **0** |
| `design/kit/` | **0** | **0** | **0** |
| `wireframes/` | **0** | **0** | **0** |

The only two matches anywhere are prose. `arriving.css` says **"there is no animation in this product at stage 08: motion arrives at the motion stage and this is the one place that will ask for it"**, and `overview.html` names the stage in a list. One `overscroll-behavior` in `base.css` is a scroll boundary rather than motion.

**A2, the output.** The half that matters, because a file says one thing and a cascade resolves another. Computed style on **122,458 elements over 282 renderings**, every page of the product and of the stand, at 1440 and at a measured 360: `transitionProperty`, `transitionDuration`, `transitionTimingFunction`, `animationName`, `animationDuration`.

**Zero motion signatures.** Source and output agree, which is the only condition under which agreeing means anything.

### The headline numbers, and every one of them is a floor

| | Coming in |
|---|---|
| Distinct durations in the product | **0** |
| Distinct curves | **0** |
| Transitions animating an expensive property | **0** |
| Transitions written as `transition: all` | **0** |
| Animations that obey `prefers-reduced-motion` | **0 of 0.** Nothing obeys it and nothing disobeys it |

**This is the opposite of the usual position at this stage** and it is worth saying why it happened rather than treating it as luck. Stage 07 folded three stylesheets into one, stage 08 wrote a file per component with a header naming what each reads, and both stages refused to add anything that was not asked for by name. `arriving.css` did not merely omit an animation, it **wrote down that it was omitting one and which stage would owe it**. The absence is a decision with a date on it.

---

## 2. The inventory of moments

Two corpora, and they are not interchangeable: the three works have different origins, so an inventory built from one systematically misses a whole class.

### B1, the screens and the flows: connection and status

Corpus: all 62 grey screens and `ia/docs/flows.md`.

**The finding that shapes this whole stage: almost every appearance in this product is a document navigation.** Every state of every screen is its own html file. The queue with a notice, the queue without one, the case before a verdict and after it, the reject dialog open and the reject dialog with a reason chosen: 62 documents, not 62 states of a few. So the panel that "slides out from under the button that opened it" cannot exist here as a transition, because the button and the panel are on different pages.

What is left inside a document is short and it is honest:

| # | Moment | Work | Component | Level | Duration | Does the state exist? |
|---|---|---|---|---|---|---|
| 1 | The help on the sign in page opens | **connection** | `doorhelp`, a native `details` | molecule | base | yes, the browser's own |
| 2 | The queue is still filling | **status** | `arriving` | atom | a cycle | yes, and its file reserved this |

**Two rows, and the second was written by the product itself two stages ago.** `arriving` is the one place in this product where a process is longer than the 300ms below which a flicker is worse than stillness: rows arrive as Clerk correlates them and the annunciator says when the queue is complete.

**What was considered from B1 and did not qualify:**

- **The detail pane filling with a case.** A navigation. It is the single most important transition in the product and it cannot be a transition; it is the reason the inter-document fork below is a real decision rather than a footnote.
- **The dialog appearing over the split.** A navigation, on all 11 screens that carry one.
- **The notice stack.** A navigation. `queue-notice` and `queue-notices` are separate documents.
- **`expand`, 23 instances on 20 screens.** It looks like a disclosure and it is not: it is a div that is always open, and the backlog carries the row about it not having become a `details`. Nothing opens, so nothing can open with motion.
- **Anything on the point of the breakpoint.** Deliberately not animated: the point fires while somebody is dragging the edge of a window and is not looking at the content, and rebuilding a grid with motion is expensive at exactly that moment. The exception the rule allows, a surface that did not exist at the narrow width, does not arise here: the pane is not a new surface, it is a zone that stops being rendered.

### B2, the register of states: response

Corpus: `docs/inventory.md`, line by line, and the "States" block of each component's page. **This corpus exists because a flow map never names the hover of a button.** It describes a route between screens, so an inventory built from screens sees connection and status in full and sees response almost not at all, and the level it hits hardest is the bottom one: atoms are made of response almost entirely.

**Thirteen of the 77 components and patterns carry an interactive state**, and every one of them is a moment of response:

| Component | Level | States declared at stage 08 | What changes |
|---|---|---|---|
| `btn` | atom | hover, active, disabled | background, border-colour |
| `chip` | atom | hover, active | background, border-colour |
| `navitem` | atom | hover, active, is-current | colour |
| `link` | atom | hover | text-decoration-colour |
| `input` | atom | hover | border-colour |
| `src` | atom | hover | text-decoration-colour |
| `row` | molecule | hover, is-selected | background |
| `row-moved` | molecule | hover, active | background |
| `frow` | molecule | hover | background |
| `opt` | molecule | hover, active, is-chosen | background |
| `bline` | molecule | hover, active | background |
| `toast` | molecule | hover | background |
| `z1` | organism | hover | colour, on the keyboard trigger |

Plus **`:focus-visible`, declared once globally in `base.css`** and reaching every focusable element in the product: it is one moment in one place rather than thirteen.

**Idle control on B2: all 77 rows were read and 64 carry the verdict "does not move", with a reason.** The reason is the same for almost all of them and it is not an oversight: a component with no interactive state has nothing to move between. A divider, a stamp, a claim, a latitude ladder and a provenance strip are readings rather than controls, and stage 08 wrote "NO STATES" in each of their files with the argument beside it.

### The estimate

| | |
|---|---|
| Moments of **response** | 13 components with a pointer state, plus the focus ring on every focusable element |
| Moments of **connection** | **1**, and it is the only in-document appearance in the product |
| Moments of **status** | **1**, reserved by its own component two stages ago |
| Rows marked "needs a state" | **1**, and it was found by trying to animate the one connection moment. `.doorhelp summary` carries `cursor: pointer` and its file says "NO STATES": it is the only control in this product with no hover at all. It is an order for stage 08 rather than something this stage may draw, and it is a row in `backlog.md` |
| By level: atoms | 18 in the register, **6** carry a moment |
| molecules | 34 in the register, **6** carry a moment |
| organisms | 21 in the register, **1** carries a moment |
| patterns | 4 in the register, **0** carry a moment |

**Organisms and patterns are almost empty and that is the honest answer rather than a shortfall of corpus B2.** An organism in this product is a zone: `z4`, `z5`, `pane-body`, `rows`. A zone is a container with a ground and an edge, and it has nothing to respond to. The four patterns are compositions of components and every one of their moments belongs to a part rather than to the arrangement.

---

## 3. Character, and where it came from

Three moments at most, on moments already named in the inventory, and never a duration: a duration is derived from the work and from the census, and a borrowed number carries a borrowed context.

**One of the two sources was unavailable, and the stage did not quietly proceed on the other without saying so.**

| Moment | Work | Source | What was taken | What it gives the work | Against the tone |
|---|---|---|---|---|---|
| The response of every control | response | **Live benchmark, measured in session:** `lichess.org/analysis`, the product `research.md` named at stage 01 as one of four out-of-category benchmarks for calibrated trust in a machine | **150ms and `ease`** on every one of its own controls, read from computed style rather than from a description | It puts a measured neighbour beside the rule that a response slower than about 150ms stops being a response. This product is denser and read for six hours, so it takes one step quicker rather than copying the number | Agrees. `voice.md` asks for the cheapest correct thing first, and a response is the cheapest thing an interface says |
| The status cycle | status | The same page, and it returned **nothing** | Nothing. Its own evaluation gauge, which is the closest living relative of `arriving`, carries **no CSS motion at all**: the bar is redrawn rather than transitioned | That is itself the answer. The nearest product solving the same problem does not animate it, so the character of `arriving` is derived from the work and from the tone instead | `voice.md` on loading: an even repeat, nothing that reads as urgency |
| Any third moment | | **not taken** | | The inventory has two in-document moments and one of them is response, which the rule excludes from this table by name: there is nothing to look at when the work and the duration decide everything | |

**The MotionSites half was unavailable and this is the row that says so.** The account has no plan and the integration allows three free prompts, which were already spent; `get_prompt` returned `free_limit_reached` with `free_prompts_remaining: 0`. Two searches were run and the library returned hero sections, portfolios and SaaS landing pages: no operator console, and the two free entries were an analytics landing page and a data-intelligence landing page. **The decision was to proceed on the live benchmark half alone and to record it here**, rather than to fall back on what a model remembers about how such things are usually done, which is not a source.

**And the benchmark did one thing our own rules forbid**, which is worth recording because it is the argument for having the rules: two of its three measured controls are written `transition: all`. A measured source is evidence about what a good product does, not permission.

---

## 4. The register

| Token | Value | Work | Where the number came from |
|---|---|---|---|
| `--dur-fast` | **120ms** | response | A response slower than about 150ms has stopped being a response and become a lag. The live benchmark writes **150ms and `ease`** on every one of its controls; this product is denser and read for six hours a day, so it takes one step quicker rather than copying a number that carries somebody else's context |
| `--dur-cycle` | **1.4s** | status | The time the filling bar takes to cross once. A period rather than a duration, and a token for the same reason as the other: it was a literal in `arriving.css` for exactly as long as it took to run the check that reads every duration in the product against this table |
| `--ease-standard` | `ease` | both | The browser's own, and it is what the benchmark measured. A curve nobody can name is a decision nobody can check |
| `--ease-enter` | `ease-out` | arriving | Quick to start, long to settle |
| `--move-sm` | **4px** | any | A movement longer than about one and a half times the height of the thing moving stops reading as a connection and starts reading as a journey |

**There is no `--dur-base`, and that is the finding rather than a gap.** It was written first, at step 2, for the one moment of connection the inventory found. It has no reader, because that moment turned out to have nothing cheap to move: a `details` opens by changing a height, and a height is the property this stage forbids by name. **A token with no reader fails this system's own idle control**, so it is not carried for later, and the moment is a row in `backlog.md` instead: an order for a state rather than for a duration.

**No spring and no bounce anywhere.** They read as "something went wrong" in exactly the states where the analyst least wants to be asked a question, and the tone table has no row a spring would satisfy.

**These tokens have no pair of theme**, and it is the same rule as the width tokens: the pair is a property of the semantic level, which is colour. A duration is not a colour.

## 5. Screen to moments

The inventory above is sorted by event, and the rollout at stage 12 will ask about a screen. This is the same information turned round.

| Screens | What moves on them |
|---|---|
| **All 62 coloured screens** | Every control's response: `btn`, `chip`, `navitem`, `link`, `input`, `src` and the rows, whichever of them the screen carries. 120ms, `ease`, one of four properties, and never a size or a position. Plus the focus ring, which does not transition |
| **`queue-streaming`, `shift-assembling`, `case-investigating`, `log-narrowing`** | And the filling bar, `arriving`: a 1.4s sweep, `transform` only, replaced by a still 40 per cent fill under reduce |
| **Everything else about every screen** | Nothing, and each of those is a navigation rather than an absence: a dialog opening, a notice arriving, a verdict filed, a case selected. What carries them is the cross document transition in `base.css`, one declaration for all 62 |

**The first row said 52 and was counting the SAMPLE. The second said four and named five screens, one of which has never carried the component.** The corpus is 62. The filling bar stands on four, and `log-narrowing` is one of them, node 5.2, where the log narrows before it draws: it was grey when this table was written, so it could not be here. **`entry-partial` was in the list and never had an `arriving` at all**, in colour or in grey, which `arriving.css` says beside its own count of four and this table contradicted.

Both halves were found the same way and neither by reading. The first by **the agent that built the log**, which was told to read this section for its own screen, found itself outside a list of four, and reported it rather than editing the file, because a fan out agent does not write to `design/kit/`. The second by a **reader with clean context at the close**, holding the corrected row against a browser count over all 62 screens. **The correction was itself wrong for one measurement**, because it added a screen and did not check the four already there, which is the same defect one turn later.

**A screen written at stage 12 gets all of this by linking `system/index.css` and writing no motion of its own.** That is the whole point of the shape: the response of a control is in the control, the cycle is in the component that owns it, and the movement between documents is in `base.css`.

## 6. The tone check

`voice.md` builds tone by phase from the four flows. The check is per phase rather than per screen, because motion here is per component and the components repeat: what changes between phases is which of them the analyst is touching.

| Phase | Target emotion | What moves there | Does the movement say the same thing? |
|---|---|---|---|
| Get in | Nothing to solve, the door is not the product | The sign in form's fields and its one button. 120ms | **Yes.** Nothing announces itself. The one moment that could have been a flourish, the help opening, got no motion at all |
| Take the shift | Handed something complete | The handover lines, 120ms on a ground | **Yes.** A line answers and does not perform |
| Work the queue | In command of forty tenants at a glance, not drowning | Two hundred rows, each 120ms on a ground, and the filling bar when the queue is still assembling | **Yes, and the row is where it was closest to going wrong.** A row that grew, lifted or gained a shadow on hover would be two hundred invitations to look at something other than the verdict. It changes a ground and nothing else |
| Read the case | **Thorough rather than lucky** | Sources and links, 120ms on an underline | **Yes.** The underline is the quietest response available and it is on the one thing that leads out of the case |
| Rule | Decided, and able to defend it in April | The four verdict buttons, 120ms on a ground and a boundary | **Yes.** No spring, no scale, nothing that reads as celebration: filing a verdict is not a success state, it is a decision somebody signs |
| Escalate | An honest exit, not a failure | The dialog's fields and its two buttons | **Yes**, and the absence matters more than the presence: nothing about escalating is dressed up |
| File, and see it recorded | The record took it | Nothing. The filed state is a different document | **Not applicable**, and it is the clearest case of the product's shape: the most emotionally loaded moment in the flow is a navigation |
| Hand off the shift `HARDEST` | Signposting the next person can act on | The handover lines, 120ms | **Yes** |
| Answer for it later | The answer comes from the record instead of my memory | The log's rows and the record's rails, 120ms | **Yes** |
| When something is wrong | Told the truth about what is broken and what still works | Nothing, except the response of whatever control is still live | **Yes, and deliberately.** `voice.md` asks for an error to be short, with no spring and a small amplitude. Zero amplitude is the strictest reading, and a degraded console that animated its own failure would be performing the failure |

**No row required the text to change**, so `microcopy.md` is untouched by this stage. The one row worth naming is the queue: it is where the tone and the cheapest implementation happen to agree, and if they had not, the tone would have won.

## 7. The fork between documents

**Answer B: one declaration, and it degrades to nothing.**

Every state of every screen in this product is its own html file, 62 of them. So the single most important movement the analyst makes, a row in the queue becoming a case in the pane, **is a navigation**, and a navigation cannot be a transition. That is not a limitation of the prototype: a case has its own address by decision, because somebody opens one from a pager at 03:00.

| Answer | What it would mean here | Taken |
|---|---|---|
| **A.** Do not animate between documents | The product's main move keeps no connection at all, and the work of connection is left with nothing to do in a product where almost every appearance is a navigation | no |
| **B.** `@view-transition{ navigation: auto }` in `base.css` | One declaration. The browser cross fades the old document into the new, and a browser without the feature ignores the at-rule and navigates exactly as it did before: no error, no fallback to write, **no half working promise** | **yes** |
| **C.** A decision per flow | Buys nothing here, because every flow in this product is the same move: a list to a detail and back | no |

**It obeys reduce explicitly**, beside the declaration that turns it on, because the token override cannot reach it: a view transition has its own default animation, owned by the browser, and no custom property of ours is inside it.

**Motion at the breakpoint was considered and refused.** The point fires while somebody is dragging the edge of a window and is not looking at the content, and rebuilding a layout with motion is expensive at exactly that moment. The exception the rule allows, a surface that did not exist at the narrow width, does not arise: the pane is not a new surface, it is a zone that stops being rendered.

## 8. What the token override does not reach

The override redefines the tokens, so anything reading `var()` obeys without knowing the block exists. **Three classes do not read `var()`, and each is closed by name.**

| Class | In this product | Closed by |
|---|---|---|
| **A cycle** | One: `arriving-sweep` | Its own `@media (prefers-reduced-motion: reduce)` in `arriving.css`, which sets `animation: none` and restores the still 40 per cent fill. **Not by making the period 1ms**: a pulse at 1ms is a strobe, which is worse than what it replaced. A cycle under reduce is replaced by a still state, never accelerated |
| **A movement between documents** | One: the view transition in `base.css` | An explicit `@view-transition{ navigation: none }` and `animation: none` on the three view transition pseudo elements, in the same file, beside the rule that turned it on |
| **A literal inside `@keyframes`** | **None**, and the check cannot see one if there ever is: it reads computed style, and a keyframe's own values never appear there. Closed by search, and this row is why the search is written down | a search, run at step 6 |

**And a fourth that is not a class but a shape**, found by the check on this project's own stand rather than in the product: **a surface that redefines a motion token on a class beats the override**, which redefines it on the root. The one place that happens is the demonstration on `motion.html` that exists to show the override reaching everything, and for one measurement it was the only thing in the project it did not reach. It carries its own query now, and **any surface redefining a motion token has to**.
