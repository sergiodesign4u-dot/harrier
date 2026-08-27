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

**Ruled and closed, after this stage.** The owner kept the ceiling at `Investigate` and changed what Clerk did, on the ground that §7 of `reading-conventions.md` makes Norsk the tenant where a stale reading is normal, and a tenant whose picture is routinely out of date is the last one that should hold rope. The row now reads `Real, contain endpoint` with `above latitude here` and no state chip, on all 30 screens that carry it, following the Larkfield and Aubrey rows already beside it; the log entry claiming Clerk contained inside latitude was removed and the counter went from `8 of 34` to `7 of 34`, restoring the seven rows the frozen grey corpus draws. The full record is section 10 of `voice/docs/microcopy.md`, and the instrument that would have caught it is a new row in `design/kit/docs/backlog.md`: **nothing in `design/kit/checks/` reads one half of a split pane against the other.**

### Run 2: node 6.1 Client summary draft, four states, a different agent and a different feature

**The second list is LONGER than the first, and the rule says to say so.** Run 1 produced six gaps against the handoff package. Run 2 returned **nine** under "could not understand" and **thirteen** under "understood it this way". By the letter of the stage contract that reads as a handoff that is not ready. The count is misleading and the analysis is the finding, so both are below and neither is softened.

**None of run 1's six recurred, and the agent cites the block that closed them.** It reasoned the proportions BEFORE copying a frame and did not take the 844 to 360 split, on the ground that "the subject of this screen is the draft, so there is no list beside it". It shipped **zero `btn--primary`** with a reason rather than by default: this node's real main action is 6.2, which has no screen, so faking a primary would be worse than having none. And it walked every `href` by hand **"as the WHAT YOU COPY block requires"**, reporting six targets, all resolving, all branch matched, none reaching another tenant's case. Run 1 committed all three of those defects and noticed none of them. The block works.

**What grew is not handoff gaps. It is the count of things nobody ever wrote for a deferred cluster.** Of the nine, roughly three are the package (F4, F9, and half of F3). Five are the IA and voice layers being genuinely empty for cluster 6. One is a contradiction inside the system.

| # | Class | The gap |
|---|---|---|
| F1 | IA | **No node specification.** `one-shot.md` item 8 points at `ia/docs/pages/<node>.md`; there is no 6.1 file. All the node has is one table row in `sitemap.md` and a five part entity sketch. A three column state matrix would have been enough |
| F2 | IA | **No route and no permission.** Every node spec that exists carries an addressing section; 6.1 has no URL, no `?as-of` ruling and no statement of who may open it. The agent therefore could not put an `addr` block on a screen whose whole subject is a record that leaves the building |
| F3 | package + IA | **The entrances cannot be wired.** `sitemap.md` says 6.1 is reached from a case or from a client. No built screen carries a control to it, so the level 3 claim is untestable. Run 1 shipped this defect silently; run 2 named it, which is the fix working |
| F4 | **package** | **Which navigation item a cluster 6 screen lights up.** `_shell.js` ships three items and says Clients arrives with cluster 7. The agent used `current:''`, copying `not-found.html`, the only other screen with no home |
| F5 | **voice** | **There is no rule for a string the product writes for somebody who is not the analyst.** `voice.md` is 474 lines and every one assumes the reader is at the console. The body of this draft is addressed to a client's security contact who never signs in. Every rule about person, register and coinage either does not apply or applies in reverse. The agent invented the split and wrote down that it had invented it |
| F6 | IA | **Who approves a summary and whose name goes on it.** `jtbd.md` marks the liability `[?]`; `behaviour.md`'s NOT SETTLED list names the analogous question for cluster 7 and not for cluster 6, which has the same shape of hole |
| F7 | IA | **Incident scoped or period scoped.** `sitemap.md` says "period or incident" and 6.1's own row says "from the filed verdict", singular. If period scoping is legal, the empty state derived here is the wrong one |
| F8 | **system** | **Two sources disagree about the heading level inside a `doc`.** `block.css` says a block heading with no pane title above it has to be an `h2` or the outline skips a level. All five node 5.4 screens put `h3` under the `doc`'s `h1`. Neither is marked as the authority |
| F9 | **package** | **`map.md` does not distinguish a census from a constraint.** It records `covers` standing in the log's reading pane on 4 screens; `covers.css` has no Limits block. The file is full of counts that read like rules and says nowhere that they are not |

**Three entries from the second list are worth more than the whole first list.**

**It caught itself inventing a finding.** A first draft of the client facing body said the mail rule was removed with the containment, which **no action class Clerk held at that tenant could do**. It found this, removed it, and recorded it in `microcopy.md` rather than deleting it quietly, on the ground that this is precisely the failure mode of a node that drafts prose about what a machine did.

**It named its own edit a desync.** It changed the rail's way out from `Open the log` to `Open the queue` while five sibling screens say the first, and wrote: "that is me re deciding a string that is identical on five screens, which is the shape of a desync".

**It reported a known WCAG failure that it had made larger.** Using `rail` as documented took the `rail-out` focus ring debt from 5 pages to 9, and it said so with the number and added "if the right answer was do not multiply a known failure, I got it wrong, and I did not hesitate".

**The isolation held, and the disclosure is why it can be said.** Five greps used the mask `design/*.html`, which mechanically includes the four `tenant*.html` files of run 1. The agent disclosed this itself and accounted for it: three of the five produced aggregate counts with no filenames, two returned no tenant rows, and the eight check commands read the whole directory by construction because the prompt instructs them to. **The run stands.** No content from a forbidden file entered the agent's context, and the rule is amended here to say what it always meant: a match voids a run when a forbidden file is READ, not when a glob could have touched it.

**The fate of the screen is branch B and it was decided out loud.** The four files are deleted. Node 6.1 has no route, no permission, no flow and no control leading to it from anywhere in the product, so accepting it would have knowingly repeated the P0 the critique of node 7.1 had just found: a screen nothing reaches. The corpus returns to 66 pages across 14 screens, `coverage-map.mjs` agrees in both directions, and the `rail-out` debt returns to 5 pages. **The twenty two findings above are the yield of the run, and they are kept.**

---

## 5. The critique of the stage, step 8

**This is the log of the closing pass, not another reader.** The step takes no third run: the reader's set was already taken twice, at step 1 and at step 7, and both are above. What enters here is an independent read only pass, this session's own pass over the code and in the browser, and one instrument that returned nothing because it cannot run.

**Radius, and why it is wider than usual.** Almost every class of this stage is mechanical: a path that resolves to nothing, a value restated instead of referenced, a token or a component named that does not exist, a status table that diverged from the registry, an em dash in an output file, a markdown marker that survived into a page. What is left for a person is whether the route leads anywhere, whether a page reads, and whether a line of the specification matches what the screen actually does in a browser.

| Class | Where | What | Who found it | Verified | Outcome |
|---|---|---|---|---|---|
| **A section of this page never filled** | `handoff.html`, section `feature` | The section carried the literal words `Section filled by step 7.` The stylesheet rule written for its prompt block, `.ho-prompt`, had **zero users** in the file that declares it | Claude | yes | **Fixed.** The section now carries the opening of the prompt, the block about the file and its registration, and the two step rule about growth. It leads to all three documents this stage produced |
| **A section waiting on this step** | `handoff.html`, section `was` | `The summary of what the exam found is filled by step 8` | Claude | yes | **Fixed.** Numbers, five pairs and the critique by class |
| **A token that does not exist** | `a11y.md` | Claimed that `--color-edge` was added rather than raise `--line-edge`. **No such token is in `tokens.css` and none was added.** The real answer was one role away: the boundary of a CONTROL is `--line-control` and it already carries 3:1, while `--line-edge` is a divider, which 1.4.11 does not cover | Codex | yes, against `tokens.css` sections 2 and 3 | **Fixed**, and the row now says the true thing rather than a smaller wrong one |
| **A status the file's own rule forbids** | `a11y.md`, 5 rows | The file opens by declaring **two** values and no third, then uses four: `confirmed as specified`, `confirmed by inspection`, `confirmed as a written decision`. Codex found three; counting the phrase found five | Codex, then a count | yes | **Fixed.** The four rows that no instrument can run are now `specified`, the preamble declares three values, and it says why the third exists: a static prototype cannot demonstrate a key yielding to a text field, so that line is a requirement on the implementation rather than a property of this repository |
| **A table row missing a cell** | `behaviour.md`, 3 rows in Validation | Three rows carried 2 cells where the table declares 3. The missing one is `Where it renders`, which is exactly the column that makes a rule checkable | Codex | yes, by counting separators | **Fixed.** All three now name their screens |
| **A rule quoted after it was replaced** | `README.md` and `handoff.html` | Both said the grey folder is `frozen since stage 05` and `do not edit them`. `CLAUDE.md` has said since 2026-08-26 that it is **kept in step rather than frozen**: a defect is carried back, a stage boundary is not | Codex | yes, against `CLAUDE.md` | **Fixed in both.** The prohibition that matters, never read a behaviour out of them, is kept and made the emphasis |
| **Form** | `README.md` | No closing line break. The last row of the status table, which is this stage's own, falls out of any parser that reads the table as lines | Claude | yes | **Fixed** |
| **Duplicate instead of a reference** | `one-shot.md`, `map.md`, `behaviour.md`, 5 places | Two pixel figures, one quoted inline attribute, two interface strings | Codex | yes | **Cleared, with a reason on each.** The pixel figures are what the exam MEASURED a copied proportion costing, not a restated token. The inline attribute is the evidence the row exists to give. Both strings still match the inventory exactly, and this product addresses a string by its text because it has **no keys**: the one-shot prompt says so in as many words |
| **A markdown marker in a page** | `design/kit/checks.html` | The two characters `](` | Claude, by grep | yes | **Cleared.** They sit inside a `code` element where they are the NAME of the check that looks for them |
| **A path naming no file** | `README.md`, `onboarding-gaps.md`, 5 places | `_theme.css`, `kit/kit.css`, `_screen.css`, `design/kit/kit.css`, `detect.mjs` | Claude | yes | **Cleared.** The first four are named in the record of their own deletion; the fifth is a file of an external tool |
| **A status that diverged** | `README.md` against `/_nav.js` | Handoff read `In progress` against `done:true` | Codex | yes, and **refuted** | **Cleared.** The two flags answer different questions and the registry says so at the top of itself: `done` is whether the page exists, `wip` is whether the stage is closed. `wip:true` and `In progress` were in agreement, and they come off together, here |
| **The product changed after it was accepted** | `git diff 585e97e..HEAD` over `design/*.html`, `design/system/**`, `design/kit/*.html` | **147 files, 3075 lines added and 916 removed.** The contract allows one exception, the exam screen of step 7 | Claude | yes | **Carried to `docs/decisions.md` with the baseline named.** None of it is this stage inventing: it is owner accepted work that landed after stage 12 closed, and every piece has its own entry in the decision record |
| **A source of truth that is a page-local literal** | `handoff.html` | Three hex values and a width query in the page's own style block, beside `var()` in the same rules | Codex | yes | **Kept, with the reason recorded.** The block is a DARK panel on a light documentation page, and the light page's roles are the wrong ones to reuse for it: taking `--fg` as a background is the exact class this project has already paid for twice. Measured instead: **14.27:1** for the body and **11.05:1** for the emphasis |

### The instrument that returned nothing, for the second time this stage

`impeccable`'s `audit` reads two pages, and its deterministic half returned an empty list with exit 0. **It was canaried rather than believed**, with a file carrying `#777` on `#fff`, `transition: all`, an empty button, two `h1` and a marketing sentence. Empty list, exit 0 again. The cause is the one recorded higher up this file: its static engine imports four packages inside a `try` and falls back to a regex when they do not resolve, and none of them resolve here. **An instrument that has never found anything is not a clean result, it is an untested instrument**, and this stage has now paid that rule twice.

### What the browser pass reports

10 links on the live handoff page, **all 200**. From the root of the site to this page: **one click**. Every markdown and href link in the package, 14 of them, resolves on disk: **0 broken**. The page at a **measured 360**: no horizontal overflow, `scrollWidth` equal to `clientWidth`, **0 page errors**. Em dash across every output file in the repository, md, css, html, js, mjs and py: **0**.
