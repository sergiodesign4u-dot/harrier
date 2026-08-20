# Harrier

Project boundary: languages 1 (English); brand or existing design system none; screens approx 9.
Scope decision: built as a portfolio case for a Design Lead home assignment, so the pipeline runs a shortened track 01 to 07 and stops after UI + Visual. Two screens go to full colour: Case Queue (main dashboard) and Case File (AI-assisted case view). The rest of the IA stays as wireframes.

## Product overview

Harrier is an adjudication console for analysts at managed detection and response (MDR) providers. One analyst covers 40 or more client tenants.

The core move: the analyst never works raw alerts. An AI agent called Clerk collects signals, correlates them into a case, runs the first pass of the investigation and files a written verdict with its evidence. The human job is to rule on it: accept, amend or reject, in seconds, with the evidence in view and the override always one key away.

Differentiation, narrowed twice by research: **the fleet of earned trust, made readable where the analyst works.** Per-tenant earned autonomy is not ours. Prophet sells earned autonomy; Simbian sells it per tenant and per action class, in those words. What nothing found publishes is every client's current latitude and accuracy trend legible at one glance in the operator console rather than on a configuration page. This is a design claim rather than a capability claim, so stages 04 and 07 carry the whole differentiator. Grounds in `docs/decisions.md`.

Named agent: Clerk. The name is the contract. A clerk prepares the case file and drafts the opinion; the judge rules. Clerk never issues a verdict in the analyst's name.

## Platform

Desktop-first responsive web, minimum 1280. Primary layout target is 1440 to 1920 on two monitors, where the operator actually sits. Responsive down to 360 for one real scenario: an on-call analyst opening a paged case from a phone at 03:00 to read it and escalate. Mobile is a read-and-escalate surface, not the full console.

## Audience

Primary: Tier-2 SOC analyst at an MDR provider. Tenure three to five years is measured [SANS SOC Survey 2025]; two monitors and 40 or more client tenants stay `PREMISE`. Main driver: speed without being wrong. She arrives distrusting AI tooling, which is the starting point every trust mechanism in this product argues with rather than builds on.

Secondary: SOC lead or service delivery manager, who owns SLA and the decision to give Clerk more rope. Whether this person uses the console at all is `[?]`, and stage 02 made it less likely rather than more. Full personas in `research/docs/personas.md`, which has one writer.

## Decisions that bind later stages

- **Strategic dimension: calibrated trust in an automated agent.** The operator knows exactly how much to trust Clerk right now, on this tenant, and that trust is earned and visible rather than asserted. **After stage 02 this is the only surviving differentiator.** Stage 04 must carry it with a concrete element on the reference screen; stage 07 must check it did not dissolve. If the fleet does not read at a glance, nothing distinguishes this product.
- **Riskiest assumption:** an analyst carrying 40 tenants decides faster and more defensibly when the agent's latitude varies per client than under one flat policy. If false, per-tenant trust is 40 things to remember and the differentiator is overhead. First test in `research/docs/lean-ux-canvas.md`, section 8.
- **UX pattern: split-pane review, with the fleet as the resting state of the detail pane.** Two of its three reasons now stand on evidence: satisficing is supported and the structural argument holds, while pattern-matching before reading is still `[?]`. Microsoft ships split-pane with keyboard traversal of the queue, so the pattern carries no novelty and must not be presented as one. Alternative and full reasoning in `research/docs/ux-patterns.md`.

## Rules of evidence

- **A product premise repeated three times starts to read as a market fact.** Harrier is invented, so statements about tenants per analyst, MDR margin, liability and the analyst profile are decisions, not measurements. Every one carries `PREMISE` where it stands. This rule exists because a self-audit cannot see them: they were decisions when written and read as context afterwards.
- Every fact about a competitor, a market or a benchmark comes from a page opened in the current session. Model memory has a cutoff, so anything from it is `[?]`, not a fact.
- No invented numbers. No real figure means `[?]`, never a plausible one.
- Critique runs on two instruments, Claude and Codex read-only, sets taken independently and deduplicated after. A third pass reads the stage contract as a checklist, because neither instrument can see a step that never happened.
- **A search-result summary is not a source.** A search tool paraphrasing a page is a claim about a page, not the page. Quoting it and citing a different source that was opened is how a fabricated attribution reads as sourced. Open the page, or mark it `[?]`. The existing rule above does not cover this: the cited source really had been opened, and that is why it did not catch it.
- **A page is accepted on the live URL, not on localhost.** A local static server serves the tree as-is and cannot reproduce host behaviour. GitHub Pages runs Jekyll, which drops underscore-prefixed files, and this project keeps `/_nav.js` and `/_nav.css` at the root; `.nojekyll` holds that open. Grounds in `docs/decisions.md`.

## People

Primary persona: **Rasha Idrissi**, Tier-2 analyst, four years in operations. `research/docs/personas.md` is the only file that describes her. Stages 03a, 03b, 05, 06 and 07 read it read-only and return a contradiction as a finding rather than writing their own version.

Main job: **when Clerk hands me a case it has already investigated, I want to decide whether its verdict holds, so that the decision is made and I can still defend it months later.**

MVP core, three jobs: rule on the case; pick up and hand off a shift; know where the agent's record has earned latitude. **The third is a bet, not a qualified job**, and it is the riskiest assumption above.

Conflict rule: a conflict between decisions is resolved in favour of the primary persona. She carries the higher risk and holds fewer levers. Secondary scenarios must work; the interface is not built around them.

Jobs in `research/docs/jtbd.md`. The steps of the journey inside the main job are owned by the stage 03a user flow, because CJM is not in this track.

## MVP scope

Canonical feature list in `research/docs/lean-ux-canvas.md`, section 5. Narrowed at stage 02 to the three core jobs named under People above. Not duplicated here: a second copy is the one that goes stale.

## Business model

Sold to the provider: platform fee per analyst seat plus a metered component per monitored asset. Autonomy is never a paid tier. `[?]` contested by market practice, which prices machine work by investigation volume or per endpoint. Open question in `research/docs/research.md`, section 7.

## Geo and compliance

United States and EU, SOC 2 Type II, tenant data isolation, EU residency option, GDPR. The one requirement that shapes the design: every Clerk action and every human override writes to an append-only log carrying the evidence snapshot as it stood at decision time.

## Design principles

1. Every row is a decision, not a record. If a line in the queue does not tell the analyst what to do next, it does not earn its height.
2. Clerk shows its work, up to a ceiling. An evidence trail alone is table stakes; the difference is that the number names its claim, its scope and its window, and comes with an absolute count. But more explanation is not more trust: past a point it reduces it. Cheapest correct thing first, depth one key away.
3. Override is one key, and it teaches. Rejecting Clerk is a first-class action, not a fallback path, and the reason goes straight into tuning.
4. Tenant context is never more than a glance away. The same signal is a Tuesday at one client and an incident at another.
5. Density is the feature. Six hours a day means no decorative whitespace, keyboard before mouse, and no overlay that hides the evidence the analyst is deciding on.

## Tech stack hypothesis

React with TypeScript. Virtualised tables for lists in the hundreds. Server-sent events for live queue updates. ClickHouse for telemetry, Postgres for cases, verdicts and the audit log. Claude for case narrative, verdict drafting and client summaries.

## Where things live

- Rules that must hold every session: this file. Budget 200 lines. No statuses, no chronicle.
- Statuses: the table in `README.md` and `done` flags in `/_nav.js`.
- Grounds for decisions: `docs/decisions.md`. Never auto-loaded.
- Everything known about the market and the people: `research/`.
