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

`_wf.css` stays grey for the rest of the pipeline. The rule is repeated in the root `CLAUDE.md` and in `wireframes/CLAUDE.md` on purpose: a nested `CLAUDE.md` only loads when Claude reads something in its folder, and forgetting this one costs the whole artefact of the stage.

### The named exemptions, because a rule with unnamed exceptions is a rule nobody can check

Four things in this stage look like violations of the sentence above and are not. They are listed so that the next instrument to sweep this folder finds an answer instead of a finding, and so that anything **not** on this list is a real defect.

| Looks like | Where | Why it stands |
|---|---|---|
| **A type family is declared** | `--ui` is the system font stack, `--mono` the system mono | Not a typeface choice. It is the operating system's own, which is the absence of a choice, and 06 replaces it. A wireframe with no font family declared renders in Times, which is a choice and a worse one |
| **An icon** | the `&#9662;` caret on filter chips, 38 pages | A text character, not an icon set. The chip has to say it opens something, and drawing that with a border alone puts a shape in the file that 07 would then have to unlearn |
| **A shadow** | `.row.is-selected{box-shadow:inset 3px 0 0 var(--ink)}` | `inset`, zero blur, one palette colour. It is a 3px rule down the left edge of the selected row, drawn with the one property that does not add a box. Nothing about it is a shadow |
| **Off scale sizes** | `10.5px` on the annunciator below 1400, `9.5px` on the `WHY` and `ALERT` labels, `8.5px` and `5px` on the severity bars | Below `--t-xs`, and deliberately. Two are eyebrow labels that must not compete with the sentence under them, one is a three bar glyph whose bars are a drawing rather than text, and one is the annunciator wrapping at the product's declared minimum width. **Four uses, all named here.** A fifth would mean the scale is short by one step, and the fix would be the scale |

**The idle control on this list is the list itself.** Every entry was verified against the file at step 9, and one that had been written from memory, `#000` and `#fff` under `@media print`, was struck: there is no print stylesheet in this stage and there never was.

---

## 10. The panel

One navigation for the stage, and every page carries it, the hub included.

`wireframes/_nav.js` holds the screens in `window.WF_NAV`, its own namespace, because `NAV*` and the `nav-*` classes belong to the root registry and a name collision silently renders the wrong array. Structure, top to bottom: `← Design process` out to the root, the `WIREFRAMES` badge with one line of subtitle, `All screens` first, then a three level tree of IA cluster to screen to state, accordion with only the current screen open, and at the bottom, quietly, `← IA specification` for the node this screen came from.

**No roadmap on any page of this stage, and no thin state strip above a screen.** Two panels on one page give two left gutters and the text slides under one of them.

---

## 11. What gets a link, settled at step 7

Step 7 asked for the flow to be clickable in both directions, and it produced a question the pack does not answer: which of thirty six state pages should be reachable by clicking, and which should be reachable only from the panel. Answering it case by case would have produced thirty six arguments, so it is one rule.

> **A state the analyst produces by acting gets a real link from the control that produces it. A state the world produces gets an exit and the panel as its entry.**

Choosing a rejection reason is an act, so the six options in 4.4 are `<a>` and each opens the state it produces. Narrowing the log is an act, so the scope chips link to 5.2. Asking for the rest of the evidence is an act, so `3 more signals` opens the case whose sources aged out, which is the `no` branch of the flow's own decision node. Selecting an entry is an act, so the log's rows open the entry in the pane.

A dropped connection, a colleague opening your case, a write that did not land and a snapshot that failed its integrity check are not acts. **There is no control that means "let the write fail", and inventing one would be inventing product.** Those states keep their exits and are entered from the panel, which is what the pack means by navigation between states also being available there.

**Measured on the live pages rather than asserted:**

| | |
|---|---|
| Built state pages | 36 |
| Reachable by clicking from the queue | **23** |
| Reachable only from the panel | 13, and **every one of them is a condition the world raises** |
| Dead ends | **0** |
| Pages with no route back to the queue | **0** |
| Broken links | **0** |
| Clicks from the queue to the activation node | **2**, which is the number `CLAUDE.md` claims |

Two routing errors were found by drawing the graph rather than by reading the files. A row wearing `decided` and `unrecorded` opened `queue-decided.html`, so **a row in the list opened another rendering of the list**; rows open cases now, and nothing else. And `queue-clerk-down` linked to `unavailable.html`, which is 8.2 and is not drawn until step 8, so the control renders disabled rather than resolving to a 404.

---

## 12. The reconcile, step 8

Seven agents drew seven screens at once. Each kept its own look inline behind the marker
`/* INLINE: <screen> :: for reconcile into _wf.css */`, so the parent could find every rule
mechanically instead of reading twenty files by eye. This is what came back.

### What moved, and it moved verbatim

| Block | Selectors | Was inline on |
|---|---|---|
| The shell chrome and the queue foot | `#sidebar`, `.qfoot`, `.qfoot kbd`, `.fleet-more`, `.qbanner` | **58 pages** |
| The case pane: narrative, latitude ladder, snapshot stamp | `.nar` and its three, `.lat` and its six, `.stamp`, `.chips-hd` | **44 pages** |
| The consequence box | `.cons`, `.cons.is-empty`, `.cons b` | 9 pages, reject and escalate |
| The log row and the resting pane | `.rows--log` and its four, `.row.is-superseded`, `.row .sup`, `.covers` and its two, `.seek`, `.z5--paper` | 7 pages, log and history |

**34 selectors, and not one of them was edited on the way.** A rule tidied while it moves is a
change of appearance wearing the clothes of a refactor, and there is no way to catch it
afterwards. `.lat` is the latitude ladder, which is to say the differentiator itself, and it was
living inline on forty four pages.

### The proof, and it is pixels rather than an assurance

Three screens at two viewports, shot on the live URL before the move and again after it, then
diffed in a canvas rather than by eye:

| Pair | Size | Differing pixels |
|---|---|---|
| Case Queue at 1440 | 1440x900 | **0** |
| Case File at 1440 | 1440x900 | **0** |
| Shift brief at 1440 | 1440x900 | **0** |
| Case Queue at 360 | 375x760 | **0** |
| Case File at 360 | 375x760 | **0** |
| Shift brief at 360 | 375x760 | **0** |

Pairs in `wireframes/screens/`. Inline CSS on the reference screen fell from 685 bytes to 206,
which is the marker comment and nothing else, and the classifier that reads the **output** rather
than the generators now reports **zero rules living on two or more screens**.

**The first run of that diff reported four of six pairs differing, and it was wrong.** The
after shots had been taken against a cached stylesheet: forcing `_wf.css` on one page caches it
under a different URL, so the next navigation still gets the stale one. Re-shot with the plain
URL revalidated on every page, all six pairs are identical. It is the third time in this stage
that a sub-resource cache has produced a confident false measurement, so it is written here:
**a `?v=` on the HTML does not bust the stylesheet, and a measurement taken without forcing it
is a measurement of the last deploy.**

### One correctness fix the reconcile could not avoid

Five generators carried an absolute path to a scratch folder on `sys.path`, so `import genqueue`
resolved to a stale copy that still emitted its pages on import. The symptom was that
`queue.html` kept reappearing with the pre-reconcile stylesheet no matter how often it was
regenerated. Every generator now resolves its imports from its own folder.

---

## 13. The twenty one, and what each one cost

The reconcile pairs matched first, then this list was worked. Groups A, B and C are closed.
Group D is upward work on the IA and is listed at the end of `screens.md`.

### A. Shared components, twelve fixes in one file

The banner was a flex container, so a bold run mid sentence became its own flex item. Thirty
pages carried one. `.only-narrow` had no complement, so three generators privately invented the
same class. `.pane-foot` was sticky and had nothing to stick to, because the shell grew with its
content instead of the columns scrolling. The annunciator overflowed at 1280, which is the
product's declared minimum. An empty key slot rendered as an empty box. The source chip parked
at the top right of a wrapping claim at 360. A section heading could not be an `h2`. The small
soft note, the address block and the pane-less column each existed twice. The fleet row got
double padding inside a pane. Six tokens the stage had been writing as raw lengths.

**Measured after: 58 pages at 1280, 1440 and a real 360, 174 runs, zero failures. The pane foot
now sits inside the viewport on 34 of the 34 pages that have one, where it had never once
stuck.** That is design principle 3 becoming true rather than stated: the four verdict controls
are on screen without scrolling to them.

### B. Nine keyboard defects, and eight of them were mine

The map was one page and one static list, and drawing it audited the whole stage, because every
row had to match a key a built control already claimed.

| Was | Now |
|---|---|
| `h` for "hold it locally", in no specification. A single character shortcut under **SC 2.1.4**, which 0.5 claims to own every one of | The control keeps its place and loses the key |
| `a` and `b` on the second axis of 4.4, unspecified, and **`a` collided with Accept** | `1` and `2`, which is the grammar the first axis already uses |
| `Enter` filed the amendment while the only input was prose, a **third** `Enter` behaviour beside the one chosen inconsistency | The button files, and the hint says so in 4.6's words |
| A retry glyph inside a key slot, which reads as a key that does not exist | Gone |
| `Next case` on the down arrow, where 4.1 section 6 says `[` and `]` | `]` |
| **The keyboard map had no trigger in Z1** although 0.2 section 4 puts it there, so nothing in the product opened 0.5 | `?` in the top bar, on 51 of 58 pages |

The seven pages without it are the five sign in states, which have no shell before
authentication, and the two full outage states, where a console that is down cannot draw its own
navigation. Both are the node's own reasoning, not an omission.

**Measured: every key rendered on a control across 58 pages is now one of `a m r e 1..6 Enter
Esc ] [`, and nothing else.** The map itself is excluded from that check, because it is the one
page that lists navigation keys as well as shortcuts.

### C. Four fixtures that contradicted each other, all four mine

- **The snapshot was stamped before the last event it records.** `?as-of` read `04:12:38Z` while
  the narrative it carries ends with an inbox rule at `04:13`. It moves to `04:14:05Z`
- **The case was filed after it was escalated.** `Filed by Clerk 27m ago` put now at `04:39`,
  before the `04:41:12` escalation that two other screens show as already written. `26m` puts
  now one minute before she escalates, which is what that screen is
- **The log said 7 entries and the queue said 21 were ruled this shift.** The log's list is
  virtualised like the queue's, so the readout names what it holds, `34`, and the foot says
  `7 of 34 shown`. The shift brief's Clerk count moves with it
- **Halden Freight was in three states at once.** 0.8 reserves it for the case carried over a
  shift boundary, and the log had it ruled at 01:44 while the queue had it open and four minutes
  old. The log entry is Bramber Retail's now
- **4.4 and 4.2 disagreed in print about the exits at 360.** 4.4's narrow banner offered accept
  and escalate; 4.2 settles that a case known to be benign cannot be closed from a phone either.
  4.4 was wrong, the banner says escalate only, and the pane behind it now obeys the sentence
  above it rather than contradicting it

---

## 14. Two sections the hub was missing, and one collision they found

Added after the twenty one, from a reader arriving at `overview.html` cold and being unable to say what the product was. That is the reader instrument working outside a scheduled pass: the hub listed screens, coverage and conventions, and never said what any of it was for.

**`01 Read this first`** carries the product in three paragraphs, Clerk and why the name is the contract, the canonical case walked through its seven blocks, the four verdict keys, the seven step route as real links, and what gets filed at the end. It also carries two things written against us: that override still costs four taps against accept's two, and that interface wording here is a draft owned by stage 05, so a flat label is not yet a defect.

**`02 Reading the fixtures`** is the whole cast: seven tenants with the state each one exists for, three people, three cases, three severity levels, four grammars of time, the two numbers that were wearing the word `effort`, and the closed set of six state chips with the four pairs that genuinely occur. Source of every value is `ia/docs/pages/reading-conventions.md`; nothing is restated with a second edition, and where the canon carries a reason the reason comes with it.

### The sixth collision, and this one is not a class name

`CLAUDE.md` records four collisions where a page-local class reused a name owned by `research/_page.css`. **This one is a bare element selector:**

```
table{border-collapse:collapse;width:100%;font-size:14px;line-height:1.5;min-width:560px}
```

`min-width:560px` applies to every table on every page that links that stylesheet, and a card in a two column grid is 413px wide at 1440. The table pushed the page to a horizontal scroll of 1442, and `table-layout:fixed` did not fix it because the constraint was a minimum rather than a width. **A page-local table has to unset it, not just set its own width.**

Both new sections were then measured on the live URL at 1440, 1024 and a genuine 360, with `document.documentElement.clientWidth === 360` asserted rather than assumed. Two more defects were caught only by looking at the render: `overflow-wrap:anywhere` split the ISO timestamp the legend exists to teach, and a 92px label column at 360 broke words mid token, so the legend stacks label over value below 900.

**Measured after the fix, whole site:** 58 wireframe pages, 27 IA pages, 3 research pages and the root, each at three widths, **zero elements outside the viewport and zero horizontal scroll**.

---

## 15. The canon fixed upward, and the defect that only a computed style could see

Four of the step 9 findings were not defects in a drawing. They were places where the drawing was right and **the layer above it did not say so**, which is the class the pipeline rule about fixing upward exists for. All four are closed in `ia/docs/pages/`, and each IA render carries a visible note saying what changed.

| Hole | Where it was | What it is now |
|---|---|---|
| 0.8 section 8 listed 5.1 as a reader of the six state chips | `reading-conventions.md` | 5.1 runs a **second vocabulary**. Both sets stand side by side, with the one word that appears in both named as stage 05's work |
| `C-0441` and `C-4419` were drawn and never declared | `reading-conventions.md` section 7 | Both declared, with why the canon needs each and the rule that `C-4419` must never gain a tenant |
| Axis A had seven values and the list showed six | `rejection-reason-taxonomy.md` | `Other, and say why` is the seventh, drawn at `reject-other.html` |
| Node 8.4 was MVP with three notices marked `yes` and nothing drawn | `toast-stack.md` section 6b | Zone Z6 exists, and two queue states draw all three |

### What drawing 8.4 settled that the specification could not

**Zone Z6 hangs off the row that holds both columns, not off the viewport and not inside the list.** Fixed to the viewport, a notice sits over the detail pane at 1440, which section 1 of the node forbids in as many words. Inside the list, it scrolls away with the rows, because the list is a scrollport. Neither is visible from prose; both are obvious the moment the thing is on screen.

**The cap is one notice at 360, not three.** Measured: three notices took 408 of 760 pixels, so the notice layer covered more of the phone than the case did. The node says the cap is a layout decision and the persistence is the compliance one, so the cap may differ per width and the persistence may not. The failure wins the single slot because it is the one that cannot be dismissed. The count line is then a **different number** at that width, so it is a second element rather than one string edited by CSS: a count hidden by a media query is a count that lies.

### 151 links in a stage whose contract says there is no colour

Found while looking at the toast stack, and it is the most instructive finding of the step.

`_wf.css` opens by saying *no colour, no brand, no icons, no shadows, no images*. It never declared a rule for `a`. So every bare link in prose and every evidence source chip rendered in the user agent's default blue, on **27 of 62 screens**, from the first day of the stage.

**Nothing declared it, so nothing could flag it.** The grep instrument reads rules that exist. Codex reads source. The reader reads meaning. A defect whose cause is an **absent** rule is invisible to all three, and it took asking the live browser for a computed `color` and testing it for saturation to see it. The first version of that test asked whether `r === g === b` and reported 832 findings, every one of them the palette's own near greys: **a test whose threshold is wrong is worse than no test**, because 832 findings read as a broken page rather than as a broken test.

The fix is one rule at the lowest specificity in the file, placed above every component so anything with a class still wins:

```css
a{color:inherit;text-decoration-color:var(--soft);text-underline-offset:2px}
```

Re-measured on the live URL: **zero coloured elements on 62 pages.**

**Whole site after the step:** 62 wireframe pages at three widths, zero overflow and zero horizontal scroll; 62 pages at two widths, one clipping finding, which is the known 3px line box rounding on the hub's own `h1` and was dismissed at verification.

---

## 16. Everything that was still inline, and a fix that had only been written down

### Section 2 declared the survivor and never migrated the other two

`_wf.css` section 2 says `.esc-desk`, `.out-desk` and `.only-desk` were three private names for one utility, calls it *one hole in this file found three times*, and declares `.only-desk`. It declared it and stopped. Both other generators still shipped their own copy, and `genunavailable` still carried the comment *"the complement of `_wf.css`'s `.only-narrow`, which has no complement"*, which had stopped being true the moment section 2 was written.

**A comment that describes a fix is not the fix**, and a file that asserts something false about itself is worse than one that says nothing at all. Both callers use `.only-desk` and `.only-desk-i` now, and the two private definitions are gone. Verified live at both widths: every desk only element computes `block` or `inline` at 1440 and `none` at 360.

### What moved, and what is allowed to stay

| Was inline on | Is now | Pages |
|---|---|---|
| `<p class="dim" style="margin:var(--s1) 0 0;font-size:var(--t-sm)">` | `.dialog > header .sub`, merged with the pane's identical rule | 11 |
| `<span class="dim" style="font-size:var(--t-xs)">` | `.dialog > footer .hint` | 11 |
| `<p class="nar" style="margin-top:var(--s3)">` | `.nar--sep` | 4 |
| `<div class="cons" style="margin-top:var(--s2)">` | `.cons--gap` | 2 |
| `<p class="empty" style="padding:var(--s5)">` | `.empty--tight` | 2 |
| `<b style="display:inline;font-size:inherit">` | `.empty b.run` | 2 |
| `<p style="margin:var(--s2) 0 0;display:flex;...">` | `.wrapline` | 3 |
| `<p style="margin:0">` | `.nar`, which is what that paragraph already was | 4 |
| the three `.z4--log` rules | `_wf.css` section 17 | 5 |
| eleven soft notes still wearing `class="dim"` plus a style | `.anote` or `.gnote`, the two registers group 1 settled | 16 |

**Four inline declarations remain and each is used exactly once**, each written through `var()`. That is the criterion, not zero.

### Two interface strings were living in a stylesheet

`not found` and `points the other way` were `content:` strings on `.claim--absence` and `.claim--against`. Stage 05 owns every interface string in this product, and a string in a stylesheet cannot be found by reading the screens, cannot be changed without touching the shared file, and is exposed to assistive technology inconsistently. Both are markup now, on the surface the whole product exists for.

**And the move nearly changed the drawing.** Written as a sibling of `.txt` the tag became a flex item of `.claim` and took a line of its own at 360, one extra line on every tagged claim on the densest screen in the product. It belongs inside `.txt`, where the pseudo element was. **A move changes where a thing is declared and nothing about how it looks**, and the only reason that was caught is that the row was measured before and after: 240px against 98px at 1440.

### Three declarations that existed and did nothing

- **`--measure` and `--dialog-w-wide`** were declared in section 12 and used zero times, while `66ch` and `720px` sat as literals on the two pages that needed them. Both applied. Every one of the 37 declared tokens is now used at least once.
- **`--bg`** was declared in `_wf.css` and published in neither the hub palette nor this file. The contract a subagent works to was missing the value that decides what a screen sits on. Six swatches on the hub now, not five.
- **The `reconnecting` strip** was a declared `readyState` of 0.4, with a variant written for it in `_nav.js`, used by **zero pages**. This is exactly the idle control the pipeline asks for: a declared entry that renders nowhere is indistinguishable from one nobody needed.

**It is drawn rather than deleted, because CONNECTING is real and it is not stale.** Stale is CLOSED: the transport has given up, so the page offers a retry. Reconnecting is already retrying under exponential backoff, so its control is disabled and says why, and its count says it is 40 seconds old rather than presenting 18 as though it were still 18.

**Whole site after the group:** 63 wireframe pages at three widths, zero overflow and zero horizontal scroll; at two widths, one clipping finding, the known 3px line box rounding on the hub's own `h1`.
