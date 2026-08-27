# The rules of the system

Not what it looks like. What it is made of, what may read what, and what it takes to add to it. A system is read starting here, which is why `architecture.html` is the first foundation on the stand and not the last.

Visible at `design/kit/architecture.html`.

---

## 1. Two ladders, and both of them use the word level

Confusing them is the most expensive mistake available here, because the fix is a cascade problem rather than a typo.

**The token ladder is about where a value came from.** Two rungs and no third.

| Rung | Answers | Example | Who reads it |
|---|---|---|---|
| **primitive** | which value | `--warm-950`, `--space-4`, `--size-md` | geometry, type and space are read by components **directly** |
| **semantic** | why is this colour here | `--bg-page`, `--text-secondary`, `--line-control` | colour is read by components **only** through here |

**Geometry gets no second rung, and not because it matters less.** A radius and a height have nothing to override: a theme and a rebrand change colour, not the height of a control. A third rung would be a third layer of renaming with no flexibility bought, and changing the colour of a button would cost three files instead of one.

**A component token is founded one at a time, never in bulk**, and only where a state lands on no role at all. The hover of a card and the hover of a list row are one `--bg-hover` and need nothing of their own; the hover of a dangerous button has to darken from the danger colour rather than from the ground, and there `--button-danger-bg-hover` is earned.

**The component ladder is about markup nesting**, and its rule is `level = 1 + the highest level of what it contains`.

| Level | Contains | Harrier |
|---|---|---|
| **atoms** | nothing else from the system | `btn`, `chip`, `state`, `key`, `bars`, `navitem`, `link`, the form primitives |
| **molecules** | atoms | `row`, `frow`, `banner`, `field`, `opt`, `pane-head`, `toast` |
| **organisms** | molecules, or is the shell of a screen | `shell`, `z1`, `z4`, `z5`, `rows`, `dialog`, `door` |

**The third level is the ceiling and the formula stops there.** The sign-in dialog contains a form and a form is an organism too, so the formula would produce a fourth level that does not exist. The fourth rung is patterns, and its criterion is different: repetition, not nesting. Everything that contains an organism stays an organism, and nesting inside the level controls only the ORDER: first the organisms that contain no other organism, then the ones that do.

---

## 2. Grouping by purpose is forbidden at the top level

By purpose a button and a sign-in dialog are both "forms", and they would sit side by side while one lives inside the other. Purpose is a secondary sort **inside** a level, and only once a level holds more than about eight.

The price is paid three times when this is broken, and none of the three is cosmetic:

- an `@import` in alphabetical order puts `dialog.css` before `field.css` and `form.css` before `input.css`, so the whole is assembled above its own parts in the cascade and a contextual fix gets cured with `!important`
- a split that takes the card before the button writes button rules into the card's file
- an agent building a molecule before its atoms draws them a hover of their own and a name of their own

---

## 3. What a component may read

| Kind of value | Read from | Why |
|---|---|---|
| colour | **semantic only** | a theme and a rebrand override colour, and they do it by redefining roles. A component that reads a colour primitive is a hole the first theme finds |
| radius, spacing, size | **primitive directly** | there is nothing to override |
| a state | **a state token**, in both themes | `:hover` reads `--bg-hover`, `:active` reads `--bg-active`, `:focus-visible` reads `--color-focus`, `:disabled` reads `--opacity-disabled` |

**No new hex and no new number appears in a component file.** A state written as a value is the same hole as a component reading a colour primitive, and it is paid for three times: in the theme, where it becomes forty edits instead of three lines; in consistency, where twenty components each get a hover of their own; and at stage 11, which would have to start by collecting the states back together.

---

## 4. How a role is named

**Read out of the audit, never taken from another system.** `--color-primary` and `--surface-2` are somebody else's names. A role exists only where `docs/tokens-audit.md` shows it standing on screens, and its comment carries how many places it was read from. An empty role is not a reserve for the future; it is noise that real roles drown in.

Three axes decide whether a role gets a token, and they are three different questions.

1. **Purpose.** Two purposes are two tokens even when the value is identical today. The question is not what colour it is, it is whether these two places could ever diverge.
2. **Repetition.** One single use does not prove a role. `--clay-500` stands in one place in the whole product and that place is a swatch on this stand, so it stays a primitive and waits.
3. **Surface.** A role declares WHAT it paints: **ink** (text, an icon glyph), **fill** (a ground, a plate, a band) or **line** (a border, a divider, a focus ring). One role may not paint two surfaces even when the purpose is one and the value is the same, because the thresholds differ: ink answers to **4.5:1** (3:1 at 24px, or 19px bold), fill and line answer to **3:1** by WCAG 1.4.11.

**The third axis catches the quietest colour defect there is.** A fill role dropped onto a small bold label passes as a surface and fails as text, and a table of text and background pairs cannot see it, because nobody declared it as text. The cost of getting it wrong is not cosmetic either: if the text role exists, the cure is one word in a declaration; if it does not, the cure is the VALUE, and the band moves along with the label.

---

## 5. The theme pair is a property of the level, not an event

Every role is written twice at the moment it is founded, once in `:root` and once in `[data-theme="light"]`. A role without a pair does not exist, and neither does a state without one: in the second theme the focus ring disappears, the product stops being keyboard passable, and the only way to notice is to switch themes, which is to say never.

**The pair is not a mirror.** Contrast is computed against the opposite ground, so the light theme takes a different step of the same ramp rather than the same primitive. Where a value genuinely clears its threshold from both directions, it stays, and the comment beside it carries both measurements so it can be seen that this was measured rather than skipped.

`:root` carries the **dark** theme, because that is what the product ships with nothing stored. The light theme is the pair, and since 2026-08-27 it is also a feature: the second control in the top bar reaches it, `design/system/theme.js` puts it on the root element before the first frame, and the stand and the product remember the same answer under one key, `harrier-theme`.

**The pair stopped being a proof and became a surface, and that is what the change was worth.** While the only switch was in the stand, the product's own contrast sweep seeded a key nothing under `design/` read, so **134 of its 268 renderings were the dark theme wearing a light label** and it reported clean for both halves. The first pass that actually rendered light returned one failure across 67 pages, in the panel chrome rather than in the system.

---

## 6. Two folders, and one of them can leave

```
design/
├── system/                 the CODE. This whole folder can be lifted into
│   ├── tokens.css          another project and it works there.
│   ├── base.css
│   ├── index.css           the single entry point, @import BY LEVEL
│   └── components/<name>.css
└── kit/                    the SHOWCASE. It stays here.
    ├── docs/*.md           the sources
    ├── overview.html       the hub
    ├── <foundation>.html   architecture, colour, typography, geometry, icons
    ├── <component>.html    one page per component
    ├── _nav.js  _page.css  the stand's registry and its own furniture
    └── kit.html  shell.html  frozen, from stage 07
```

A product class inside the showcase, or a showcase style inside a component file, is a defect either way.

---

## 7. Adding a component is five things, and the last two are the ones that get skipped

1. `design/system/components/<name>.css`
2. `design/kit/<name>.html`, with its five blocks
3. an entry in `design/kit/_nav.js`, **in the group of its own level**
4. a row in `design/kit/docs/inventory.md`, **with its level**
5. an `@import` in `design/system/index.css`, **into the group of its own level and not at the end of the file**

The card on the hub is not a sixth thing: the registry renders it from the same entry.

**Four and five matter most for a component added after the system is built**, which is every component added by a reconciliation, by a new screen, or by the rollout. Appended at the end of the file it looks harmless, and that is exactly how the ladder falls apart.

---

## 8. Where a fix lives

| What changed | Where it goes |
|---|---|
| a colour that carries a role | the semantic level of `tokens.css` |
| a raw value | the primitive level of `tokens.css` |
| how a component looks | that component's file |
| markup | the component's page, and every screen it stands on |

**A fix made on one screen is a desync, not a fix.** A value approved on a coloured screen is never carried anywhere by hand: it goes into a variable, where it reaches every screen by itself, and then it is checked **in a browser** that it arrived on the second screen and on every repeat of the component.

---

## 9. Patterns, and why there are four

A **pattern** is a composition that already stands on three or more screens. The counter runs on `wireframes/`, because that is where the whole product was: colour held 52 pages of 62 until stage 12, so three occurrences there would have been a statement about the sample wearing the name of a rule. **The rollout closed that gap and the rule does not change**: the two corpora agree now, and the counter still runs on the grey one, because the grey is the frozen witness and colour is a copy of it.

Every composition in this product that clears the threshold turned out to be the same thing, and naming it is what kept the level from filling with files nobody would open:

> **A pattern here is a FILLING.** One container component, filled with a set of zones, where the container's other filling drops zones and grows different ones. By the anatomy rule of stage 08, a zone that disappears means a different thing rather than a variant, and applied one level up that rule produces exactly four compositions.

| Pattern | Host | Its zones | Grey screens | In colour |
|---|---|---|---|---|
| `queue-list` | `z4` | scopebar, readout, banner, rows, qfoot | 38 | 29 |
| `shift-brief` | `z4` | readout, banner, brief, qfoot | 7 | 7 |
| `case-pane` | `z5` | pane-head, pane-body, pane-foot | 38 | 29 |
| `fleet` | `z5` | pane-head, frow, fleet-more | 10 | 10 |

The two hosts have three other fillings between them and none of them is a pattern, because each is a single zone with its own class: `frame` on the five entry screens, `outage` on the three system states, and `door` on the five sign in states, which fills the shell rather than either half of the split. A filling with one wrapper is a component, and the wrapper is its name.

**A pattern owns no paint and writes no new rule.** Every declaration in `design/system/patterns/` was cut from a component file, and each file names the file it came out of. What made a rule a candidate was mechanical rather than a judgement: a selector, written inside one component, that names another component AND is conditioned on which filling the host is carrying. Fourteen rules matched, in three of them. A rule that names another component and is NOT conditioned on the filling stayed where it was, and `.z4 > .banner` is the example: it places the banner in the column whichever filling the column carries, so it belongs to the zone.

**One rule was doing two jobs and neither was named.** `.z5{ display: none }` at 900 hid the fleet at rest and the desk-only case pane of the log and shift screens, on one line, for two unrelated reasons. It is two rules now, one in each pattern, and the comparison against the pre-refactor tree says the rendering is identical.

**`fleet.css` has one rule, and that is a finding rather than a shortfall.** The composition is carried entirely by its parts: the head names it, `frow` carries its own grid and its own hover, `fleet-more` is a line of text, and the host is already a column. A pattern that needs no arrangement is a pattern whose components were drawn to fit each other.

---

## 10. Usage rules

Three classes of prohibition, and only the first has a home on a component page:

- **substitution**, "this needs a tag rather than a badge", lives as the rule and antirule block on the component's page and is not repeated here
- **composition**, how many of a thing may stand and next to what
- **context**, where it may not appear at all

The second and the third cannot be written as an antirule, because no other component is the right one to take: the component is correct and its count or its neighbour is not.

The Components column names **patterns as well as components**, because a rule about a count is most often a rule about the filling that does the counting.

**Every rule below is also a function.** `design/kit/checks/rules.mjs` is these thirteen in this order, measured at 1440 and at 360, on what renders rather than on what is in the markup. **The twelfth arrived at stage 12 and it arrived late:** it was written as a sentence in `optlist.css` when the component gained a second filling, and it stayed a sentence until the critique at the close pointed out that this section defines exactly what a new rule costs and the sentence had paid none of it. **The thirteenth arrived at stage 13 and it arrived later still:** the move it enforces was ruled at stage 08 step 2, never executed at step 6, and stood wrong on 21 screens for two stages while the component page described the correct markup. A prohibition written only in prose is a prohibition nobody runs, and three of these are true at one viewport and false at the other.

| # | The rule | Class | Where it came from | Components | How to see it |
|---|---|---|---|---|---|
| R1 | Not more than one `.btn--primary` **per layer**, and a foot does not compete with it. A second one is allowed only when it is the viewport twin of the first, or when it belongs to a modal layer over the screen | composition | `wireframes/docs/conventions.md` "Exactly one primary action per screen, and nothing in a foot competes with it", plus the counter, which corrected it | btn, dialog, scrim, pane-foot, qfoot, case-pane, queue-list, shift-brief, keyrow, miss | count `.btn--primary` outside `.scrim`, then inside `.dialog`; each at most one, at each width |
| R2 | A `dialog` never stands without a `scrim`, and only one of each shows at a time | composition | counter: 11 dialogs on 11 screens, every one inside a scrim; `inventory.md` says the same in its own column | dialog, scrim | count both, and check every dialog has a scrim ancestor |
| R3 | No overlay covers the detail pane | context | `docs/decisions.md` "no overlay may hide what is being ruled on"; node 4.4; design principle 5 | scrim, dialog, z6, toast, z5, z45, case-pane, fleet | intersect the box of every `.dialog` and `.z6` with the box of `.z5` |
| R4 | The notice layer shows at most three notices at the desk and **one** at 360, and a failure takes the single slot | composition | `conventions.md` measured it: three notices took 408 of 760 pixels at 360; the counter agrees, 3 at 1440 and 1 at 360 | z6, toast | count visible `.toast` at each width |
| R5 | The shell does not appear before authentication, and the annunciator does not appear on a console that cannot read Clerk | context | counter: 5 screens carry no `z1`, `z2` or `z45`; two more carry `z1--out` and no `z2`; `conventions.md` names both sets | z1, z2, z45, navitem, annun, miss | a screen with `.door` has no `.z1`; a screen with `.z1--out` has no `.z2` |
| R6 | One `readout` per screen | composition | counter: 45 screens, maximum of one on every one | readout, queue-list, shift-brief | count |
| R7 | The detail pane never renders an `empty` | context | `CLAUDE.md`: the empty state of the pane must read as "this is the fleet", not as "this is empty"; counter: `.empty` on 6 screens, every one inside `rows` | empty, z5, fleet, case-pane | `.z5 .empty` returns nothing |
| R8 | A `.only-desk` element never renders at 360 and a `.only-narrow` element never renders at the desk | context | `wireframes/docs/critique.md`: 22 pages showed the 360 only block at 1440, most visibly a page announcing there is no keyboard above a keyboard map | btn, banner, hint, cons, prov, scrim, shift-brief | computed display at both widths |
| R9 | One selected row at a time, and none at 360 | composition and context | counter: 23 screens, maximum of one; zero at 360, because node 3.1 opens the standalone case instead of selecting | row, rows, queue-list | count `.is-selected` |
| R10 | The fleet has no route and no navigation item | context | `docs/decisions.md`: a route would make the differentiator a place you go; `CLAUDE.md` binds it | fleet, navitem, z5 | the fleet appears only inside `.z5` |
| R11 | One `h1` per screen | composition | `voice/docs/critique.md` found two node specifications disagreeing about which element carries it on 19 screens | readout, pane-head, case-pane, dialog | count `h1` at both widths |
| R12 | An `optlist` holds one filling or the other, never both inside the same border | composition | stage 12: `optlist` gained a second filling, `keyrow`, when node 0.5 was built. An `opt` is a link you answer and a `keyrow` is a row you read, and one border holding both reads as a question with an answer you cannot give | optlist, opt, keyrow | `.optlist:has(.opt):has(.keyrow)` returns nothing |
| R13 | An expansion that has a head is a `details`, and no head holds a link | composition | stage 13: 21 screens carried `div.expand` with a chevron drawn on it and no control behind it, while the component page documented `details.expand`. The second half is why the handover note is the filling with no head: its head links to the case, and a link inside a `summary` cannot be reached, because the click belongs to the disclosure | expand, link | `.expand:has(> summary)` is `DETAILS`, and `.expand > summary a` returns nothing |

**R11 was the one the corpus broke, and it broke it at one width only. Closed at stage 12, before the rollout could multiply it.** On 17 coloured screens and 21 grey ones there was no `h1` at all at 360: the `h1` was the queue readout, the readout lives in the list column, and at 360 a case screen hides that column, so the heading left with what carried it. Stage 05 had already found the contradiction underneath it, two node specifications disagreeing about which element is the heading, and could not see the consequence, because the consequence is a computed style at one viewport.

**The ruling is measurable rather than editorial: exactly one heading renders at every width, and that one is the `h1`.** It settles the contradiction in favour of `case-file.md` section 7.

| What renders at 360 | The `h1` | Screens |
|---|---|---|
| a case in the pane, the list column gone | the pane head, and the readout becomes an `h2` | the 8 case states, the 6 reject states, `queue-decided`, `queue-escalated`, and **`keyboard`**, whose scrim is `--desk-only` so the pane behind it is what survives |
| the list, with the pane at rest or not rendered | the readout, unchanged | `queue` and its 10 states, `shift` and its 6, `case-history` and its state, and **`log` and `log-narrowing`** |
| **the pane, with the log's list not rendered below the point** | the pane head, and the readout becomes an `h2` | **`log-selected`, `log-not-found`, `log-snapshot-gone`** |
| nothing but the dialog, which takes the whole screen | the dialog's title | `escalate` and its 3 states |
| the column, alone, at both widths | its own `h1` | `not-found`, `unavailable` and its 2 states, `index` and its 4 |
| itself, by permalink | `pane-head--standalone h1`, unchanged | `case-standalone` and its 2 states |

**Three of the five log states are in the third row and not the second, and the first draft of this table put all five in the second.** The parent ruled it from the pattern file, which hides the log's list below the point, and did not check that the pane also takes the column on the states where the pane has content. **The rule's own function reported it**, which is the argument for a prohibition being code rather than a paragraph, made against the person who wrote the paragraph. It happened a second time on `keyboard`, and there an agent reading the corpus caught it before it shipped.

Three declarations changed and **no pixel moved**: `.pane-head h2` and `.dialog > header h2` became `:is(h1, h2)`, one rule serving both levels. The one value that did move is in `tokens-audit.md`: `.readout` had no `margin` of its own and was taking the browser's `0.67em` for an `h1`, which would have become `0.83em` under the new tag. **The command and the number have to agree, and this line named a number the command it implies does not print.** `node design/kit/checks/rules.mjs design` reports **140 renderings of R11 and nothing broken** over the 70 coloured screens, where it reported 87 held and 17 broken over 52. The bare `node design/kit/checks/rules.mjs` defaults to `wireframes/` and reports **21 screens with no `h1` at 360**: that is the frozen grey, which is the measured lag of a corpus nobody is allowed to fix rather than a defect list, and `design/kit/checks/diverge.mjs` is where the lag is measured.

**What a NEW screen does about it**, and this paragraph told a screen to work around the defect for one stage after it was closed: **find your screen's row in the table above, and if it is not there, render the screen at 360 and see which heading survives.** That one is the `h1`. Do not invent a local cure and do not promote a heading on one screen and nowhere else, which is the desync this system is built to prevent. If your screen renders no heading at all at 360, the defect is in what the screen hides, not in what it tags.

**R3 was broken on four grey screens, and building one of them in colour answered it.** The escalate family draws a full-width dialog at 360 over a pane still rendered behind it, where `reject` drops its scrim at that width and escalate cannot: escalating from a phone is the product's one mobile scenario. `escalate` was the screen this stage built out of the system, the rule caught it on the first run, and the fix is one line in `z45.css`: at 360 the split stops rendering the pane while a live scrim is over it. **The three grey states closed by being built**, at stage 12, and R3 now reports 13 held and nothing broken over the whole product.

---

## 10b. A note on one glyph

**The em dash is banned in every file of this project**, because saturation of it in prose is a tell rather than a style. It was never in the prose here. What it was in, on 56 stand pages, was 129 table cells meaning "this axis has no values": a placeholder rather than punctuation, written as `&mdash;`, which renders as exactly the character the rule forbids.

They are `&ndash;` now, which is also the right glyph: a dash standing in for a missing value is an en dash, and the product already writes one in the fleet's record column for a tenant with no rulings yet. **A rule that is satisfied everywhere a reader looks and broken everywhere a reader reads is not satisfied**, and the detector that found this counts the character rather than the sentence, which is why it saw it and three stages of human reading did not.

## 11. Contributing to the system

**New appears in `design/system/` first and on the screen second. Never the other way round.**

That is the whole rule. Without it, styles are growing on screens again within a week and the system is another name for a folder somebody once tidied. What follows is the address for each of the four kinds of new thing, and the two steps that get skipped are marked, because they are the two that look harmless.

### A new VALUE

`design/system/tokens.css`, at its own level. A colour that carries a role goes in the semantic level with an origin comment; a raw value goes in the primitive level. **A token of state is written in both themes at once or it does not exist**: the pair is a property of the level rather than an event, and a role declared in one theme looks flawless in that theme and loses a focus ring in the other.

### A new COMPONENT

Five things, and it is not finished until all five are done:

1. `design/system/components/<name>.css`, with four states in both themes if it is interactive, and a header naming what it reads
2. `design/kit/<name>.html`, with all five blocks: anatomy, variants and sizes, when to use it, rule and anti-rule, states
3. an entry in `design/kit/_nav.js` **in the group of its own level**
4. a row in `docs/inventory.md` **with its level**
5. an `@import` in `design/system/index.css` **in its own level group, not at the end of the file**

**Three and five are the two that get skipped.** The system is already assembled and appending a file at the bottom looks harmless, and it is exactly how the ladder comes apart: an atom written at stage 12 would sit below every organism in the cascade, and the first contextual conflict gets cured with `!important`.

### A new COMPOSITION

Count it on `wireframes/`, where the whole product is. **Three screens or more:** a file in `design/system/patterns/`, a page in `design/kit/`, an entry in the Patterns group of the registry, an `@import` after the components, and a row in the inventory. That is the same five things one rung higher.

The **page** carries five blocks like a component's page, and the fifth is different: anatomy, variants, when to use it, rule and anti-rule, and **where it stands**, three or more screens named with links. There is no states block, and there should not be: every component in the composition carries its own states on its own page, so a states block here would either be a second copy or an invented state for the composition, which is the same defect as a pattern with its own paint. **Two screens:** it stays markup and goes into the candidates table on `patterns.html`, so the next round finds a list instead of starting the count again.

A pattern that needs a declaration none of its parts has is not a pattern asking to be born. It is a component or a variant missing, and the component comes first.

### A new USAGE RULE

A row in section 10 above, with the **source column filled in**: counted on the screens, decided at an earlier stage, or caught by a critique. A rule with an empty source is an invention wearing the word rule. Then a **Limits** subsection on the page of every component the rule names, linking back here, and a function in `design/kit/checks/rules.mjs`. One author, three visible places, and the last one is what makes it run rather than be read.

### A new rule about WIDTH

Four homes, and the fifth is forbidden:

- a value shared by more than one thing: **`tokens.css`**, at the primitive level, in `rem`
- how one component behaves in its own place: **its own file**, through `@container`, with a local threshold listed in `docs/responsive.md`
- how a composition behaves: **its pattern file**, one query that reaches every screen the pattern stands on
- how the shell behaves: **`z1.css`, `z45.css` and the zone files**, through `@media`, because the shell is the only thing that measures the viewport
- **in the file of a screen: never.** Not a query, not an inline width, not a media block. This is the rule with the highest price in the whole system and it is not paid here: it is paid at stage 12, where twenty screens are built at once, and twenty authors without this rule grow twenty media queries.

**Read the ladder top down before writing any of them: fluid, then container, then a point.** A point is written only where the fluid answer physically cannot work, and the reason goes in the audit table of `docs/responsive.md`. "It was easier to write" is not a reason. **There is one point in this product**, `--bp-split-panes`, and a second is a decision to be taken deliberately and written down, never a side effect.

**`@media` cannot read `var()`.** The query is resolved before the cascade of custom properties: there is no error and the rule simply never fires. So the literal stands in the query and the token is the register, and no other number may appear in a query anywhere in `design/system/`.

**Never switch a `font-size` at a point.** Type is fluid through `clamp()` with a `rem` addend in the middle term. A pure `vw` middle term takes the page out of the reader's zoom, which is a failure of WCAG 1.4.4.

### A new MOVEMENT

**Name the work first, then take the animation.** There are three and there is no fourth: **connection** (what did that appear out of), **status** (is it still working), **response** (did it hear me). A moment for which none of the three can be named does not get animated, and that is not an impoverishment: it is a band of noise taken off a surface somebody reads for six hours.

Then, and only then, four homes and a fifth that is forbidden:

- a duration, a curve or a distance shared by more than one thing: **`tokens.css`**
- the response of one component: **its own file**, on a state **stage 08 already declared**
- a cycle: **the file of the component that owns it**, with its own `prefers-reduced-motion` block, because the token override cannot reach a cycle
- a movement between documents: **`base.css`**, and there is one
- **in the file of a screen: never.** Not a `transition`, not an `@keyframes`, not an inline duration

**Motion lands on states, it does not create them.** If the moment you want has no state in the component, that is an order against stage 08's five things and not a class invented here: a `.is-hover` the product will never wear animates nothing and documents a lie. There is one such row in `backlog.md` already.

**Only `transform` and `opacity` are cheap.** `width`, `height`, `top`, `left`, `margin` and `padding` make the browser recalculate the layout of the page on every frame. `box-shadow` and `filter` leave the layout alone and load the painting instead: one element survives it and a list of two hundred rows does not. **`transition: all` is forbidden outright**: it animates what nobody ordered and drags the expensive properties in behind it. Properties are named one by one.

**A response is never slower than `--dur-fast`**, and the focus ring is never animated at all: it is the one response whose result cannot be seen until it has finished.

**Anything that redefines a motion token must carry its own reduced motion query.** Redefining on a class beats the override, which redefines on the root. The one place in this project that happens is a demonstration on `motion.html`, and for one measurement it was the only thing the override did not reach.

### A new PLACE

`design/system/places.css`, and it is the fifth kind of thing rather than a fourth kind of component. **The test is one question: does the rule say something about a THING, or about a GAP between things?** A gap, an order or a width is a place. It gets no page, no registry entry and no inventory row, because it is not a thing anybody can be told to reach for: it is where a thing stands. **A place that carries a colour, a line or a family is not a place**, and stage 09 learned that by trying to move two of them into a pattern.

### A new SCREEN of the product

Flat in `design/`, beside the others, named after its node. It links `system/index.css` and nothing else, **it loads `system/theme.js` from its head, above the stylesheet**, it carries the design panel through `design/_nav.js`, its shell comes from `design/_shell.js`, and it is registered in `design/_nav.js` so it appears on the coverage map of `design/overview.html`. **There is no folder of examples**: a screen assembled out of the system is a screen of the product, and the stages after this one adapt it, animate it and hand it over with the rest.

**The head script is the one line of a screen that fails silently, so it is a function rather than a sentence.** `design/system/theme.js` puts the chosen ground on the root element before the first frame; `design/_shell.js` runs at the foot of the body, after the browser has drawn the page. A screen that omits it renders in the shipped dark theme and **the bar comes back with one control instead of two**, because the shell will not render a button that cannot change anything. Nothing about the page looks wrong. `design/kit/checks/screens.mjs` reports it by name, and it was canaried on 2026-08-27 by taking the line out of `log.html`: the check named the page, and the rendered bar carried one control beside a neighbour carrying two.

Before it is accepted, run `node design/kit/checks/rules.mjs design <screen>.html` and answer every rule by name. A rule the screen breaks is fixed **on the screen**, because that is an assembly error rather than a gap in the system; a rule that turns out to be wrong or too narrow comes back to section 10 with a correction and a reason.

### On a SCREEN, with none of the above

Forbidden. A screen carries no style of its own, and it does not carry an inline declaration either. If a screen needs something the system does not have, the something is an order for the system.

---

## Nothing on the stand is a picture

Added at step 5, and it overrides the pack. A component page shows the component by linking the same `design/system/index.css` a screen links, and **a state is produced by the reader rather than photographed for them**: a bench of real controls standing in both themes at once, plus a readout that asks the browser what each state resolves to in each theme when the page renders.

The pack asks for the four interactive states as snapshots, because hover, active and focus exclude each other on one element and cannot stand in a row alive. The trade is not worth it here. A picture of a state is a second copy of the component: it has to be re-taken, it goes stale without saying so, and **the first one taken on this stand documented a focus ring it did not contain**, because focus set from a script does not match `:focus-visible`.

Two mechanisms make it possible, and both are in `tokens.css` rather than in the stand:

- **`:root, [data-theme="dark"]`** carries the shipped theme under two selectors and one declaration, so a subtree can be forced back to dark inside a light page. Without it a page claiming to show both themes shows one of them twice as soon as the reader switches, which is exactly what `color.html` did for one step.
- **Custom properties resolve on any element**, so a hidden probe carrying `data-theme` answers what a token is worth in that theme without the page having to be in it.
