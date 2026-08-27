# Harrier

Project boundary: languages 1 (English); brand or existing design system none; screens approx 9.
Scope decision: built as a portfolio case for a Design Lead home assignment. The track was declared 01 to 07 and stopping after UI + Visual; it did not stop. **Stage 08 shipped `design/system/`, a two level token package and 73 component files that every screen now links, and stage 12 made it 75**, and the track continues to handoff. What made the extension worth it is in `docs/decisions.md` under 2026-08-24: the kit was not a sketch, and the sample was not five screens but 51. **Stage 12 closed the last ten, so the whole product is in colour, and the sample and the corpus are now the same thing.** It stands at **66 pages across 14 screens**: stage 13 built node 7.1 Tenant detail in four states as the handoff exam, an agent with clean context working from the handoff package alone, and the owner accepted it as work on 2026-08-26 with the node's scope still LATER. The six nodes that never had a wireframe are named as work outside the rollout rather than quietly dropped, and 7.1 is the one of the six with a coloured screen and no grey original.

## Product overview

Harrier is an adjudication console for analysts at managed detection and response (MDR) providers. One analyst covers 40 or more client tenants.

The core move: the analyst never works raw alerts. An AI agent called Clerk collects signals, correlates them into a case, runs the first pass of the investigation and files a written verdict with its evidence. The human job is to rule on it: accept, amend or reject, in seconds, with the evidence in view and the override always one key away.

Differentiation, narrowed twice by research: **the fleet of earned trust, made readable where the analyst works.** Per-tenant earned autonomy is not ours. Prophet sells earned autonomy; Simbian sells it per tenant and per action class, in those words. What nothing found publishes is every client's current latitude and accuracy trend legible at one glance in the operator console rather than on a configuration page. This is a design claim rather than a capability claim, so stages 04 and 07 carry the whole differentiator. Grounds in `docs/decisions.md`.

Named agent: Clerk. The name is the contract. A clerk prepares the case file and drafts the opinion; the judge rules. Clerk never issues a verdict in the analyst's name.

## Platform

Desktop-first responsive web, minimum 1280. Primary layout target is 1440 to 1920 on two monitors, where the operator actually sits. Responsive down to 360 for one real scenario: an on-call analyst opening a paged case from a phone at 03:00 to read it and escalate. Mobile is a read-and-escalate surface, not the full console.

## Audience

Primary: Tier-2 SOC analyst at an MDR provider. Tenure three to five years is measured [SANS SOC Survey 2025]; two monitors and 40 or more client tenants stay `PREMISE`. Main driver: speed without being wrong. She arrives distrusting AI tooling, which is the starting point every trust mechanism in this product argues with rather than builds on.

Secondary: SOC lead or service delivery manager, who owns SLA and the decision to give Clerk more rope. Whether this person uses the console at all is `[?]`, and node 4.6 now depends on the answer: an escalation names a recipient, so the question blocks a mechanism rather than a paragraph. Full personas in `research/docs/personas.md`, which has one writer.

## Decisions that bind later stages

- **Strategic dimension: calibrated trust in an automated agent.** The operator knows exactly how much to trust Clerk right now, on this tenant, and that trust is earned and visible rather than asserted. **It is the only surviving differentiator.** Stage 04 must carry it with a concrete element on the reference screen; stage 07 must check it did not dissolve. If the fleet does not read at a glance, nothing distinguishes this product.
- **Riskiest assumption:** an analyst carrying 40 tenants decides faster and more defensibly when the agent's latitude varies per client than under one flat policy. If false, per-tenant trust is 40 things to remember and the differentiator is overhead. First test in `research/docs/lean-ux-canvas.md`, section 8.
- **UX pattern: split-pane review, with the fleet as the resting state of the detail pane.** Two of its three reasons now stand on evidence: satisficing is supported and the structural argument holds, while pattern-matching before reading is still `[?]`. Microsoft ships split-pane with keyboard traversal of the queue, so the pattern carries no novelty and must not be presented as one. Alternative and full reasoning in `research/docs/ux-patterns.md`.

## Rules of evidence

- **A product premise repeated three times starts to read as a market fact.** Harrier is invented, so statements about tenants per analyst, MDR margin, liability and the analyst profile are decisions, not measurements. Every one carries `PREMISE` where it stands. This rule exists because a self-audit cannot see them: they were decisions when written and read as context afterwards.
- Every fact about a competitor, a market or a benchmark comes from a page opened in the current session. Model memory has a cutoff, so anything from it is `[?]`, not a fact.
- No invented numbers. No real figure means `[?]`, never a plausible one.
- Critique runs on five instruments. Claude and Codex read-only, sets taken independently and deduplicated after. A third pass reads the stage contract as a checklist, because neither instrument can see a step that never happened. A fourth is a reader with clean context, given the **next stage's real task** rather than "find defects": it is the only one that catches a specification that is complete and still not enough to draw from, and verification on its lines weighs triple. The fifth is a grep for one class only, a rule declared twice, where grep beats any model. **An instrument that has never found anything is not a clean result, it is an untested instrument:** that grep compared inline against inline and never inline against the shared sheet, and reported clean for two steps while ten rules were duplicated.
- **A search-result summary is not a source.** A search tool paraphrasing a page is a claim about a page, not the page. Quoting it and citing a different source that was opened is how a fabricated attribution reads as sourced. Open the page, or mark it `[?]`. The existing rule above does not cover this: the cited source really had been opened, and that is why it did not catch it.
- **A number in a drawing is a fixture, not a finding.** Sample content chosen to make a layout decidable, never quotable as evidence about the market or the product, and required to be internally consistent across every surface that shows it. The canon and the fixture set are in `ia/docs/pages/reading-conventions.md`.
- **An expression that reads a role is not paired by the role's pair.** `var()` resolves where it is written, so a composite declared once computes there and carries those values into every subtree that switches theme. Four composites and five bridge tokens did exactly that until stage 09, and the light focus ring was the dark accent at 2.29 on a light ground, four lines below a comment warning about that number. The rule "every role is written twice" does not cover this and is why nobody looked.
- **A prohibition written only in prose is a prohibition nobody runs.** Every usage rule in `design/kit/docs/architecture.md` is also a function in `design/kit/checks/rules.mjs`, measured at both viewports on what RENDERS. Three of the thirteen are true at one width and false at the other, and two only became correct when they stopped reading the file and started reading the box.
- **A page is accepted on the live URL, not on localhost.** A local static server serves the tree as-is and cannot reproduce host behaviour. GitHub Pages runs Jekyll, which drops underscore-prefixed files, and this project keeps `/_nav.js` and `/_nav.css` at the root; `.nojekyll` holds that open. Grounds in `docs/decisions.md`.

## People

Primary persona: **Rasha Idrissi**, Tier-2 analyst, four years in operations. `research/docs/personas.md` is the only file that describes her. Stages 03a, 03b, 05, 06 and 07 read it read-only and return a contradiction as a finding rather than writing their own version.

Main job: **when Clerk hands me a case it has already investigated, I want to decide whether its verdict holds, so that the decision is made and I can still defend it months later.**

MVP core, three jobs: rule on the case; pick up and hand off a shift; know where the agent's record has earned latitude. **The third is a bet, not a qualified job**, and it is the riskiest assumption above.

Conflict rule: a conflict between decisions is resolved in favour of the primary persona. She carries the higher risk and holds fewer levers. Secondary scenarios must work; the interface is not built around them.

Jobs in `research/docs/jtbd.md`. The steps of the journey inside the main job are owned by the stage 03a user flow, because CJM is not in this track.

## Structure

Six clusters by intent: take the shift, work the queue, rule on the case, answer for it later, tell the client, grant the rope. Three more are not intents: the shell, the session, the systemic states. Map in `ia/docs/sitemap.md`, one md per node under `ia/docs/pages/`, hub at `ia/structure.html`.

**A pattern is a filling.** One container component filled with a set of zones, where its other filling drops zones and grows different ones. That is the stage 08 anatomy rule applied one rung up, and it is what keeps `design/system/patterns/` at four files instead of fourteen: 54 compositions stand on three screens or more and almost all of them are a component's own anatomy. **A filling with one wrapper is a component, and the wrapper is its name.**

**Main flow.** Queue to Case File to verdict to log. Activation node `File`, **two taps** from landing.

**Global navigation.** Queue, Shift, Log. **Three items in the MVP**, Clients arrives with cluster 7. **The fleet has no item of its own**: it is the resting state of the Queue's right pane, so it costs zero taps.

**The main dashboard is the queue, with the fleet in the pane. Not the other way round.** Settled by the choice of primary persona, and it is not reopened without reopening that.

Three rules this layer binds on stages 04 and 07:

- **A case that left the analyst's hands must not look identical to one that did not.** `escalated` and `unrecorded` are visible states, not flags in a database
- **The empty state of the detail pane must read as "this is the fleet", not as "this is empty".** If it does not, the decision to keep the fleet out of the menu has failed
- **Split-pane review with keyboard traversal of the queue ships in Microsoft Defender.** The pattern is right for the task and carries no novelty; it is not presented as one

Three decisions bind every node:

- **The stance is the one in Platform above, and it is not mobile-first.** Block priority is reasoned from the desk at 1440, and the 360 rendering is then proved for read and escalate. Every node carries both renderings in black and white; colour arrives at 06
- **What structure decides ahead here is addressing and permission, not SEO.** Every node sits behind authentication, `noindex`, no schema. What this layer settles instead: the URL scheme, the heading hierarchy that gives a screen its identity for assistive tech, deep-link addressability of a case opened from a pager at 03:00, and `?as-of` addressing of an evidence snapshot as it stood. Who may open a node is part of its specification
- **Block composition is data, not taste.** It comes from `ia/docs/blocks.md`, built per page type. Vendor documentation publishes real product screenshots and that is where most of the bank came from. One type, the shift digest, had no reference anywhere, and there the comparison column carries the barrier instead
- **A container node is redrawn whenever a node inside it settles something. Prose and drawing together.** 0.1's prose was corrected three times and its drawing zero, so a stale frame read as current: four navigation items, verdict controls in the wrong half of the pane, a superseded vocabulary

## MVP scope

Canonical feature list in `research/docs/lean-ux-canvas.md`, section 5. Narrowed at stage 02 to the three core jobs named under People above, and at stage 03a to five MVP screens against three deferred, in `ia/docs/sitemap.md`. Not duplicated here: a second copy is the one that goes stale.

## Business model

Sold to the provider: platform fee per analyst seat plus a metered component per monitored asset. Autonomy is never a paid tier. `[?]` contested by market practice, which prices machine work by investigation volume or per endpoint. Open question in `research/docs/research.md`, section 7.

## Geo and compliance

United States and EU, SOC 2 Type II, tenant data isolation, EU residency option, GDPR. The one requirement that shapes the design: every Clerk action and every human override writes to an append-only log carrying the evidence snapshot as it stood at decision time.

## Design principles

1. Every row is a decision, not a record. If a line in the queue does not tell the analyst what to do next, it does not earn its height.
2. Clerk shows its work, up to a ceiling. An evidence trail alone is table stakes; the difference is that the number names its claim, its scope and its window, and comes with an absolute count. But more explanation is not more trust: past a point it reduces it. Cheapest correct thing first, depth one key away.
3. Override is one key, and it teaches. Rejecting Clerk is a first-class action, not a fallback path, and the reason goes straight into tuning. **Measured at 03b, drawn at 04, and it still does not hold:** reject costs four taps against accept's two. What 04 bought is that five of six reasons derive the second axis, so four never became five, and the fourth tap is `Enter` rather than a confirmation step. **The fifth tap is what 07 may not add.**
4. Tenant context is never more than a glance away. The same signal is a Tuesday at one client and an incident at another.
5. Density is the feature. Six hours a day means no decorative whitespace, keyboard before mouse, and no overlay that hides the evidence the analyst is deciding on.

**The console ground is dark, and a light theme is a named debt rather than a nicety.** Decided against the reading research, which favours light and favours it more as the type gets smaller [Piepenbrock 2013 via NN/g], and against halation, which hits a large minority. What carries it is the rota: 79% of SOCs run 24/7 [SANS] and a case is opened from a phone at 03:00. **The reflex measured at 06 was the palette, not the ground:** dark plus an electric blue or violet accent is still rejected on sight. Halation then forces three things, and without them dark is done badly: never pure white on pure black, body text at weight 400 or above, and slightly open tracking on small monospace. Grounds in `docs/decisions.md`.

**One word, `leave`, and it leads into the system.** This replaces the stage 08 wording rather than standing beside it, because the kit it named no longer exists. A value approved on a coloured screen is never carried anywhere by hand. `leave` about a **value** means a token in `design/system/tokens.css` at its own level, in both themes if it is a state. `leave` about a **component** means `design/system/components/<name>.css` plus its page, its registry entry in the group of its own level, its inventory row and its `@import` in its own level group. `leave` about a **composition** means `design/system/patterns/<name>.css` and a pattern page, and only from three screens counted on `wireframes/`. `leave` about a **prohibition** means a row in the usage rules of `design/kit/docs/architecture.md` with its source filled in, a Limits subsection on every component it names, and a function in `design/kit/checks/rules.mjs`. Then sync `DESIGN.md`, sign the attribute in `design/concept/docs/concept.md`, and if the edit contradicts the attribute, change the attribute and say so out loud. **Then check in a browser** that it arrived on the second screen and on every repeat of the component by itself. **A fix made on one screen is a desync, not a fix**, and a value moved by hand is a second copy where the drift starts. The rules of contribution in full are section 11 of `architecture.md`; the ten that must hold inside the package are `design/system/CLAUDE.md`.

**`wireframes/` is grey and stays grey, and since 2026-08-26 it is kept in step rather than frozen.** Colour, type family, icons, shadows and motion still arrive at 06 to 08 on **copies** under `design/`, never by painting `_wf.css`; that half is unchanged and the same sentence stands in `wireframes/CLAUDE.md` on purpose, because a nested file loads only when Claude reads that folder and does not survive a compaction. What changed is the freeze on CONTENT. **A frozen record is worth freezing while it is true**, and this one had gone on asserting things the project ruled false: a ruling for the one client the canon gives none, a containment above a latitude that does not allow it, an expansion promising a control that was not there. The state the freeze protected is the tag `wireframes-frozen-04`. **A contradiction or a defect is carried back; a stage boundary is not**, so interface strings here stay stage 05 drafts and a screen that exists only in colour is not drawn here after the fact. **The generators in `wireframes/docs/` are 61 pages behind the corpus and running one regresses its pages** to their pre stage 05 wording, which is the trap their own rule warned about and then fell into.

## Voice

Rules, not mood, and the whole set is in `voice/docs/voice.md`. Five that must hold every session: **speak to the analyst and to the person who reads the record months later**, second person, never `the user`, never the third person about her; **the cheapest correct thing first, depth one key away**, because length is a cost she pays forty times a shift; **a number names its claim, its scope and its window, count first and never a bare percentage**; **say what is true about the machine, including what it did not find**, and Clerk files and proposes rather than thinks, believes or wants; **one invented noun, `latitude`, and one invented name, `Clerk`**, no article, and no abbreviation this product coined. Two rules about the register carry more weight than they look: an IA node number, a zone label, a WCAG criterion, an argument for the design or a count of the product's own parts belongs in `.anote` or nowhere, and **correcting such a count preserves the defect rather than fixing it**; and a string that is true at 1440 and false at 360, or true in one state and false in another, is the class only a browser finds. The dictionary and the banned list stay in `voice/docs/voice.md`; the inventory of every string, with what changed and why, is `voice/docs/microcopy.md`.

## Tech stack hypothesis

React with TypeScript. Virtualised tables for lists in the hundreds. Server-sent events for live queue updates. ClickHouse for telemetry, Postgres for cases, verdicts and the audit log. Claude for case narrative, verdict drafting and client summaries.

## Handoff

**The product is handed over, so a question that has an answer only in a chat has no answer.** `handoff/` is the exit from the project rather than a part of the design: it does not restate `design/` and `design/kit/`, it LEADS to them and adds the four things no page can answer. How the product behaves, with a source on every row and a list of what is not settled: `handoff/docs/behaviour.md`. What every screen is assembled from, and its reverse list derived by INVERTING the same data rather than by a second pass over the code: `handoff/docs/map.md`. What accessibility was verified and by which command: `handoff/docs/a11y.md`. And the prompt that adds a feature: `handoff/docs/one-shot.md`, which is the prompt itself and not advice about one. The page that leads to all of them is `handoff/handoff.html`.

**Documentation references code and never restates it.** A `#hex`, a pixel figure, a finished interface string or a piece of CSS written inside `handoff/` is a defect with a mechanical instrument, not a shortcut, because the copy goes stale in a week and then shows yesterday's truth with a confident face. Name the token, the component and the variant instead. A measurement the exam took is not a restated value and does not fall under this.

**A solved defect reachable from one caller is an unsolved defect for every other**, and this project has now paid it twice: a materialiser written for the library boards was never called by the screen path, and a check written for one corpus never ran on the other. When something is fixed, name every caller that should reach it.

**An instrument that has never found anything is not a clean result, it is an untested instrument.** Canary it with a file that must fail, or report that it did not run. Two of this project's stages ended with a tool returning an empty list and an exit code of zero while being incapable of returning anything else.

## Where things live

- Rules that must hold every session: this file. Budget 200 lines. No statuses, no chronicle.
- Statuses: the table in `README.md` and `done` flags in `/_nav.js`.
- Grounds for decisions: `docs/decisions.md`. Never auto-loaded.
- Everything known about the market and the people: `research/`.
- Structure, flows and coverage: `ia/`.
- Why the system looks like this, and the four doors into it: `design/kit/why.html`. The rules, the thirteen prohibitions and how to add to it: `design/kit/docs/architecture.md`. What it cannot do yet: `design/kit/docs/backlog.md`. What every pass found: `design/kit/docs/critique.md`.
- Screens, the reference screen, the first flow and the estimate: `wireframes/docs/screens.md`. The stage contract: `wireframes/docs/conventions.md`. What the critique found: `wireframes/docs/critique.md`.
- Every interface string, and what changed at stage 05 with the rule behind it: `voice/docs/microcopy.md`. What that critique found: `voice/docs/critique.md`.
- **A global find-and-replace is the wrong instrument for a state-dependent string.** It looks global because it stands on twenty pages, and it is not, because its truth is decided by the state. Twice at stage 05 it hit a page where the string was correct.
- Page-local CSS takes a page-local prefix. `.note`, `.q`, `.node`, `.lede`, `.tw` and `.s1` to `.s5` belong to `research/_page.css` and silently restyle anything that reuses the name. **Eight collisions, in three shapes that need three different defences.** A class name, cured by a prefix. **An element selector**, `min-width:560px` on a bare `table`, where a prefix is no defence and the page-local component has to unset the property rather than merely set its own. And **a whole light theme inherited by a dark page**: the two stage 06 documents link `research/_page.css` for their column and heading scale and got its palette with it, so `.lede` ran at 1.42:1 and `code` at 1.14:1 for two stages. `design/concept/_stand.css` now reassigns what that sheet still paints, and the comment there records what each value measured.
- **This class is invisible to every instrument that reads.** The value is never wrong in any file; it resolves wrong. Codex sees correct text, a reviewer sees a documentation page looking like documentation, and a detector aimed at the product never opens the document. **It is found by computing a contrast ratio for every text node on every page at both viewports**, which is the one thing no human does. That sweep also found `.s1` to `.s5` reused as column names in an IA node, a grey drawing wearing a teal gradient since stage 03b.
