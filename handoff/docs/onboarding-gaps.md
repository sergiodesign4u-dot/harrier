# Onboarding gaps

Stage 13, step 1, and step 7 writes into it again.

**This is the critique log of the handoff and it is also its work order.** Every row is a question somebody with clean context had to ask, and every row names the step of this stage that answers it. A row without a step is not a finding, it is a complaint, and it goes to the user instead.

**Two halves, counted separately and never added together.** The first half was taken from `design/kit/docs/rollout.md` section 7: twenty agents built the last ten pages of the product from a contract, each one reading the documentation of stages 08 to 11 for the first time, and each one recorded what it had to ask. That is a mass run of the fourth instrument and it was already paid for. The second half is this stage's own reader, and it read something else: the whole product from `README.md` down, rather than one screen from a briefing. Mixing the two would make the gate of the second exam compare different quantities.

---

## 0. The reader of step 1, and how the isolation was proved

**What it was given:** the working folder, `AGENTS.md`, `CLAUDE.md`. It was told to start at `README.md`.

**What was forbidden, by path** rather than in a bundle, because "no critique logs" is not a prohibition when the logs sit inside the folder just handed over: `wireframes/docs/critique.md`, `design/kit/docs/critique.md`, `voice/docs/critique.md`, `design/kit/docs/tokens-audit.md`, `design/kit/docs/census.md`, `design/kit/docs/rollout.md`, `design/kit/checks.html`, and everything under `handoff/`.

**And one line without which the run returns confident nonsense:** read files from disk, and a file already present in context is a snapshot taken earlier rather than a source.

**Three reconciliations, all three clean.**

| Check | Result |
|---|---|
| Reading log against the forbidden paths | **38 files opened, 0 of them forbidden.** It opened the SOURCE of nine instruments in `design/kit/checks/`, which is not the same artefact as the page that reports what they found |
| Every "where I looked" names a file from the log | **9 of 9.** No row answered from priors |
| Terms that exist in no file | **Two candidates, both traced.** It knew stage 12 found six text disagreements on three screens and that a batch stopped and built nothing. Both facts are in files it opened and was allowed: the first is the preamble of `voice/docs/microcopy.md`, the second is the `Rollout` row of `README.md`. Neither came from `rollout.md` |

**Idle control on the reader itself:** the list of things it could not understand has nine rows, so the run was not formal. What it read is listed above.

---

## 1. First half: the twenty readers of the rollout

Taken whole from `design/kit/docs/rollout.md` section 7. **Fifteen rows, and most were closed by stage 12 itself**, because a rollout that finds a defect in its own contract fixes the contract before the next batch. They are here because a question that was answered inside one stage is still a question the next reader will ask.

| Question | Who found | Verdict at verification | Closed by | What closed it |
|---|---|---|---|---|
| The canonical fixture table disagreed with the frozen screen, and one disagreement was the one log entry the product forbids | rollout | really absent, at the time | stage 12 | The table in `rollout.md` section 2 was rewritten against the screen. **Carried here because the class is not closed:** the cure was a corrected table and not an instrument |
| Does `microcopy.md` or the frozen wireframe win when they disagree? | rollout | so deliberately, and nowhere written at the time | stage 12, then **step 5 of this stage** | The preamble of `voice/docs/microcopy.md` now says the inventory is the draft and the frozen grey is the applied text. **The general precedence rule is still not in one place**, see row 5 of the second half |
| `<meta name="description">` exists nowhere in this product | rollout | so deliberately, and it was the contract that was wrong | stage 12 | Every node is behind authentication and `noindex`, so stage 03b wrote no SEO block. Removed from the contract |
| How is a state file's `<title>` formed? | rollout | really absent | stage 12 | Derived from the accepted corpus and written into the contract |
| The briefing said `design/escalate.html` puts `contact` inside `block--rcpt`, and it does not | rollout | really absent: a stale file header | stage 12 | `contact.css`'s header corrected. The precedence it established, file over briefing, is now a line in `one-shot.md` |
| `<label class="opt">` or `<a class="opt">` on the fallback list? | rollout | really absent | stage 12 | Kept as the grey has it, and the consequence is a row in `backlog.md`: the one control that makes a recipient exist takes no focus ring |
| Where does the banner stand inside a dialog? | rollout | really absent | stage 12 | Placed first in `.body`, confirmed by reading a built screen. `design/kit/banner.html` still does not say it |
| `escalate-from-expired` keeps its `stamp` and its `?as-of` address while the pane says the snapshot is unretrievable | rollout | **so deliberately, and nowhere written** | **step 2** | Row in `behaviour.md`: the address is still the address, only the payload is gone |
| Node 5.1 says "At 360: not rendered" and three of its five states render a surface there | rollout | really absent | stage 12, then **step 2** | The node's sentence is true of the LIST and reads as being about the screen. Row in `behaviour.md` |
| `class="input"` and `class="label"` on a field, or bare elements? | rollout | really absent | stage 12 | Twelve textareas had rendered as raw browser controls since stage 09. Fixed on four screens; the census instrument that found it is now in the suite |
| `class="link"` on an anchor inside an `.empty`? | rollout | really absent | stage 12 | Both dressed. The file's own count was the evidence |
| The heading ruling the parent gave was wrong, and the agent refused it with the corpus in hand | rollout | really absent | stage 12 | R11 became a function in `rules.mjs` rather than a paragraph. **The rule is in `one-shot.md` as a step you perform, not a fact you look up** |
| `inventory.md` section 8 named eleven one-off classes and five of the eleven are on a different page | rollout | really absent | stage 12 | Section 8 rewritten out of a count instead of beside one |
| Are seventeen inert rows allowed inside a component whose file says it is a link? | rollout | really absent | stage 12 | Ruled no, and `keyrow` became a component |
| `entry-beyond-retention` is where `Try 2024 instead` points, and `screens.md` makes a different claim about that screen | rollout | really absent | **step 2** | Kept as the grey has it. Row in `behaviour.md`, and the mismatch is visible for the first time now that the link resolves to a coloured screen |

**Fifteen rows. Closed by stage 12: eleven. Landing on this stage: four**, three of them in step 2 and one in step 5.

---

## 2. Second half, list one: could not understand

Nine rows. **Verdict is the whole value of this table**, and three of the four verdicts are defects.

| # | Question | Where it looked | Verdict | Closed by | What closed it |
|---|---|---|---|---|---|
| 1 | **How do I run this, and how does a change reach the live URL?** `package.json` carries a `playwright` devDependency and zero scripts, there is no `.github/`, and the only mention of a server anywhere is a retrospective line saying acceptance on localhost is invalid | `README.md`, `package.json`, `CLAUDE.md`, `docs/decisions.md`, a grep for `http.server` and `npm run`, `ls .github` | **really absent.** The branch is `main` and Pages serves the repository root, and no file says so | **step 5** | The route section of `handoff.html` and the "how to run" section of `README.md`. There is no build: open the file, and accept on the live URL |
| 2 | **Where does a NEW interface string get written down?** `microcopy.md` says of itself that sections 3 and 4 are the inventory as it stood before stage 05 and that a lookup by key returns the wording that was replaced. `wireframes/` is frozen. So the home of a sentence nobody has written yet is nowhere stated | `voice/docs/microcopy.md` preamble and sections 1 to 2, `voice/docs/voice.md`, `wireframes/CLAUDE.md`, `wireframes/docs/conventions.md`, `CLAUDE.md` | **really absent.** This is the single most expensive row in the table, because it is the first thing every new feature needs | **step 7** | The text section of `one-shot.md`: a new string is written against `voice.md`, lands in `microcopy.md` section 8 as a ruled row rather than in sections 3 and 4, and the screen carries it verbatim |
| 3 | **Are the coloured screens generated or hand authored, and what happens if a grey generator is re-run?** `wireframes/` is built by thirteen Python generators and its own `CLAUDE.md` says a hand edit is lost on the next run. `design/` has no generator | `wireframes/CLAUDE.md`, `wireframes/docs/`, `genqueue.py`, `agent-contract.md`, `design/not-found.html` against `wireframes/not-found.html` | **so deliberately, and nowhere written** | **step 5**, and `docs/decisions.md` | The grey is frozen: the generators produced it once and have not run since stage 05. The colour corpus is authored and is now the product. Re-running a generator would rebuild the frozen witness, not the product |
| 4 | **Where is the grey to colour class rename map?** `wireframes/not-found.html` carries `.nf`, `.nf-say`, `.nf-exits`; `design/not-found.html` carries `.miss`, `.say`, `.exits` | `wireframes/not-found.html`, `design/not-found.html`, `inventory.md` sections 1 to 2, `design/system/index.css` | **present, and not where it looked.** A route defect. `inventory.md` section 10 is called "The rename map" and holds the stage 08 map; the stage 12 renames, `nf` to `miss` among them, are in section 8 under a different heading | **step 5** | Both named in the route section, with what each covers |
| 5 | **Which wins when a node specification and the built screen disagree?** The precedence is stated three different ways in three files and never as one rule | `wireframes/docs/conventions.md` section 8, `microcopy.md` preamble, `architecture.md` section 10, `ia/docs/pages/case-file.md` | **so deliberately, and nowhere written as one rule** | **step 2**, and `docs/decisions.md` | Written once, at the head of `behaviour.md`: the IA node owns behaviour and states, the built colour screen owns markup and applied text, and `microcopy.md` section 8 owns why a string reads the way it does |
| 6 | **What language do I write code comments in?** The root `_nav.js` is commented in Ukrainian, `AGENTS.md` rule 6 orders instruments to reply in Ukrainian, and every other comment in the repository is English | `_nav.js`, `AGENTS.md`, `design/_nav.js`, `_shell.js`, `tokens.css` | **so deliberately, and nowhere written.** The reader also conflated two things: rule 6 is about replies to the user, not about comments | `docs/decisions.md` | Code and documents are English. Ukrainian survives only in the root roadmap's own comments, which are stage 01 and were never rewritten |
| 7 | **What will the handoff demand of a feature I add tomorrow?** `README.md` said Handoff not started and `backlog.md` assigns it three items | `README.md`, `CLAUDE.md`, `backlog.md` | **really absent at the moment it was asked**, and it is the row this stage exists to close | **steps 5 and 7** | `handoff.html` and `one-shot.md`. The three backlog items owned by stage 13 are named on the page rather than left inside the file |
| 8 | **Should a new coloured screen carry `.anote` annotations?** | `voice.md` section 6, `wireframes/CLAUDE.md`, `backlog.md`, `design/queue.html`, `design/not-found.html` | **present, and it did not see it**, because the answer is a count and not a sentence: **40 of the 62 coloured pages carry one and 22 do not**, and it happened to open two of the 22 | **step 7** | `one-shot.md`: an `.anote` is where an IA node number, a zone label or an argument for the design goes, and a screen that has nothing of that kind to say carries none |
| 9 | **What are the six LATER nodes supposed to look like?** Clusters 6 and 7 plus 8.3 have a row in the node map and nothing else | `ia/docs/sitemap.md`, `ls ia/docs/pages/`, `design/_nav.js` | **so deliberately, and half written.** `sitemap.md` says "Node map only" and `rollout.md` names them as work outside the rollout. What is missing is that **8.3 is the one of the six with a written specification**, which is exactly what makes it the exam feature of step 7 | **step 7** | The exam is run on 8.3, and the answer is demonstrated rather than asserted |

**Nine rows. Really absent: four. Present but not where it looked: one. Present and not seen: one. So deliberately and nowhere written: three.**

---

## 3. Second half, list two: understood it as

**The expensive list.** A question that stopped the reader is a known hole. A reader that read the page, concluded confidently, and concluded wrong is a hole no other instrument in this project can see, because every other one measures what is there.

Twenty three conclusions were returned. **Twenty one are right**, and several are righter than the documents they came from: it derived the component ladder, the three corpora, the rule of growth, the five-fold for a new component, the ban on a fleet route, the absence of `--dur-base`, the single breakpoint and the reason the query carries a literal, the fixture canon, and the fact that interface text is taken from the frozen screen rather than from the inventory. **Two are wrong, and both are the same mistake in the same place.**

| # | It concluded | The truth | Why it matters | Closed by |
|---|---|---|---|---|
| A | "To change the accent I would edit **`--color-accent`** at the primitive level of `tokens.css`, section 1" | **There is no `--color-accent`.** The primitive is `--amber-500`, and four semantic roles read it: `--bg-action`, `--text-accent`, `--line-current` and `--color-focus`. The name it invented sounds like a role and it placed it at the primitive level, so the sentence is wrong in both halves at once | This is the exact move a real developer makes on day two, and it fails silently: the declaration is added, nothing changes, and the next step is to write the colour into a component. **And the second half of the answer is worse than the name:** the light theme keeps the SAME primitive for `--bg-action` on purpose, so "write the pair" is not automatic here | **step 3.** The reverse list answers "what moves if I touch this" for `--amber-500` by name, in two knees |
| B | "I would expect **`--color-rule`** (2.997:1) to be off limits" | **There is no `--color-rule`.** The role is `--line-edge`, and 2.997 is its measured ratio. The ratio it quoted is exactly right and the name it quoted does not exist | The same class as A and it proves A was not a slip. A reader who has read `tokens.css` still leaves with role names that are plausible rather than real, which means the file teaches the SYSTEM well and the NAMES badly | **step 3.** Every token in the reverse list is named as it is written |

**Both rows are the same finding stated twice: the token file explains its architecture better than it indexes its own names.** That is what the reverse list of step 3 is for, and it is why the reverse list is inverted from the forward table rather than written a second time.

---

## 4. Third half: what the exam found

Written by step 7, after the first run and again after the second.


### Run 1: node 7.1 Tenant detail, four states, built from `one-shot.md` alone

The agent had never seen this project. What it returned is the measurement, and it splits cleanly in two.

**What the prompt could make checkable came back essentially perfect**, and this half is not a footnote: 0 classes the system does not declare (55 used against 204 declared), 0 colour literals, 0 broken links of 28, 0 `@media`, `transition`, `animation`, `@keyframes`, `<style>`, `style=`, hex, px literal or `font-family`, exactly one `h1` per page, 34 tab stops at 1440 and 11 at 360 all reachable with a ring in both themes, 0 contrast failures, 0 overflow at any width from 360 to 2560, and both ISO timestamps plus every count lifted correctly from `log.html` and the fixture canon. Four state files, a registry entry, and a registry comment saying its own derivation out loud exactly as instructed.

**What it could not make checkable is what a screen is FOR.** `one-shot.md` is a manufacturing specification. The critique of the screen is therefore a critique of that file, and the gaps are below with what closed each one.

| # | The gap | How it showed | Chosen by | Closed with |
|---|---|---|---|---|
| E1 | Nothing says that when the scope of a screen changes, **every `href` in a copied block becomes a claim about that scope** | two rows on a screen scoped to one tenant open a case at a different tenant. Every file exists, so the link check passes and no instrument can see it | critique A, P0 | `one-shot.md`, new block WHAT YOU COPY, YOU ALSO CLAIM |
| E2 | No vocabulary for **proportions**. The instruction to copy a skeleton verbatim, which exists to prevent invention, imports a ratio reasoned for another screen's content | the split reasoned for eighteen rows landed on a screen with one: 94 per cent of the wide column empty while the pane hid 478 to 667px at 1440 and 199 to 389px at 1920 | critique A P1, measured by B | same block, second paragraph |
| E3 | No statement of what a **main action owes**. R1 counts one main action whether or not it does anything | `Open the queue at this tenant` shipped as the primary on a screen whose left half already is that queue, with a byte identical duplicate of a link above it | critique A, P0 | same block, third paragraph |
| E4 | A **Limits block is read as a description of the drawing** rather than as a condition on the data | `chip--ghost`, whose own Limits say NOT SET YET, worn on an APPLIED filter: the chip tells the analyst the filter is off while it is on | critique A, P1 | same block, fourth paragraph |
| E5 | **What changed is not required to look different** anywhere outside the case rule | the one latitude row that moved computes byte for byte identically to four rows that did not | critique A, P2 | same block, fifth paragraph, and a state modifier in `lat.css` |
| E6 | The derivation instruction frames a missing specification as a **state matrix and nothing else** | the agent reasoned correctly about which of node 3.5's state columns survive being asked about one tenant, and never once about proportions, actions or entrances, because the prompt gave it no place to put that thought | critique A, section 10 | reading list item 8 now names four things to derive, not one |

**The deterministic half of this critique was degraded and said so.** `impeccable`'s `detect.mjs` returned `[]` with exit 0 on all four files. Assessment B refused it, canaried the instrument with a file carrying `#777` on `#fff`, an inline style, `transition: all`, an empty button, two `h1` and a marketing phrase, and got `[]` again. Cause: the static HTML engine imports four packages inside a `try` and silently falls back to regex when they do not resolve, and none of them resolve here; the browser engine has no Chrome. Only the text analyzers ran, and these files carry no `<style>` block, so every CSS rule read nothing. **An instrument that has never found anything is not a clean result, it is an untested instrument**, and this is the second time that rule paid this stage.

**Two findings were retracted by the finder before reporting**, which is the discipline the fourth instrument is supposed to have: a `pageerror` on every rendering turned out to be a null dereference in B's own init script, and a list of "visible but not reached by Tab" turned out to be a descriptor mismatch in B's own collector while the counts already agreed exactly. A finding that is not a defect is a defect of the finder.

**One finding is not about this screen and is not closed by documentation.** The fleet gives Norsk Marine a ceiling of `Investigate` while the queue two hundred pixels to its left gives the same tenant a case reading `Real, contained` with the state `acted`, which `reading-conventions.md` line 109 defines as Clerk having already acted **under its latitude**. The fixture therefore says Clerk contained a host at a tenant where it may only look, which contradicts the product's only surviving differentiator. It stands on 32 screens with the queue against 9 with the fleet row, it has survived five stages of critique on five instruments, and **the first two readers to find it were both agents with clean context**. It is a fixture decision with two legal cures that tell different product stories, so it is the owner's and it is raised rather than fixed.
