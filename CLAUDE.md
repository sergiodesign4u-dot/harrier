# Harrier

Project boundary: languages 1 (English); brand or existing design system none; screens approx 9.
Scope decision: built as a portfolio case for a Design Lead home assignment, so the pipeline runs a shortened track 01 to 07 and stops after UI + Visual. Two screens go to full colour: Case Queue (main dashboard) and Case File (AI-assisted case view). The rest of the IA stays as wireframes.

## Product overview

Harrier is an adjudication console for analysts at managed detection and response (MDR) providers. One analyst covers 40 or more client tenants.

The core move: the analyst never works raw alerts. An AI agent called Clerk collects signals, correlates them into a case, runs the first pass of the investigation and files a written verdict with its evidence. The human job is to rule on it: accept, amend or reject, in seconds, with the evidence in view and the override always one key away.

Differentiation, as narrowed by research: **earned autonomy per tenant, visible across the fleet.** Earned autonomy alone is not the differentiator, Prophet Security already sells it. What no competitor found does is make earned trust per client and readable at a glance across all of them.

Named agent: Clerk. The name is the contract. A clerk prepares the case file and drafts the opinion; the judge rules. Clerk never issues a verdict in the analyst's name.

## Platform

Desktop-first responsive web, minimum 1280. Primary layout target is 1440 to 1920 on two monitors, where the operator actually sits. Responsive down to 360 for one real scenario: an on-call analyst opening a paged case from a phone at 03:00 to read it and escalate. Mobile is a read-and-escalate surface, not the full console.

## Audience

Primary: Tier-2 SOC analyst at an MDR provider. `PREMISE`, an assumed profile, not a researched one: 26 to 40, two to six years in security operations, 10-hour shifts on two monitors, 40 or more client tenants. Main driver: speed without being wrong.

Secondary: SOC lead or service delivery manager, who owns SLA and the decision to give Clerk more rope. Full audience in `research/docs/research.md`, section 2.

## Decisions that bind later stages

- **Strategic dimension: calibrated trust in an automated agent.** The operator knows exactly how much to trust Clerk right now, on this tenant, and that trust is earned and visible rather than asserted. Stage 04 must carry it with a concrete element on the reference screen; stage 07 must check it did not dissolve.
- **Riskiest assumption:** an analyst carrying 40 tenants decides faster and more defensibly when the agent's latitude varies per client than under one flat policy. If false, per-tenant trust is 40 things to remember and the differentiator is overhead. First test in `research/docs/lean-ux-canvas.md`, section 8.
- **UX pattern: split-pane review, with the fleet as the resting state of the detail pane.** `CONDITIONAL`: only one of its three reasons stands on evidence collected so far. Stage 04 must not inherit it as settled. Alternative and full reasoning in `research/docs/ux-patterns.md`.

## Rules of evidence

- **A product premise repeated three times starts to read as a market fact.** Harrier is invented, so statements about tenants per analyst, MDR margin, liability and the analyst profile are decisions, not measurements. Every one carries `PREMISE` where it stands. This rule exists because a self-audit cannot see them: they were decisions when written and read as context afterwards. Codex found four; the first pass found none.
- Every fact about a competitor, a market or a benchmark comes from a page opened in the current session. Model memory has a cutoff, so anything from it is `[?]`, not a fact.
- No invented numbers. No real figure means `[?]`, never a plausible one.
- Critique runs on two instruments, Claude and Codex read-only, sets taken independently and deduplicated after. A third pass reads the stage contract as a checklist, because neither instrument can see a step that never happened.
- **A page is accepted on the live URL, not on localhost.** A local static server serves the tree as-is and cannot reproduce host behaviour. GitHub Pages runs Jekyll, which drops underscore-prefixed files, and this project keeps `/_nav.js` and `/_nav.css` at the root; `.nojekyll` holds that open. Grounds in `docs/decisions.md`.

## MVP scope

Canonical list in `research/docs/research.md`, section 2, Solutions. Narrowed to three core jobs at stage 02. Not duplicated here: a second copy is the one that goes stale.

## Business model

Sold to the provider: platform fee per analyst seat plus a metered component per monitored asset. Autonomy is never a paid tier. `[?]` contested by market practice, which prices machine work by investigation volume or per endpoint. Open question in `research/docs/research.md`, section 7.

## Geo and compliance

United States and EU, SOC 2 Type II, tenant data isolation, EU residency option, GDPR. The one requirement that shapes the design: every Clerk action and every human override writes to an append-only log carrying the evidence snapshot as it stood at decision time.

## Design principles

1. Every row is a decision, not a record. If a line in the queue does not tell the analyst what to do next, it does not earn its height.
2. Clerk shows its work or it shows nothing. An evidence trail alone is table stakes; the difference is that the number names its claim, its scope and its window, and comes with an absolute count.
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
