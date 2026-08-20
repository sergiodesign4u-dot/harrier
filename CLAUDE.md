# Harrier

Project boundary: languages 1 (English); brand or existing design system none; screens approx 9.
Scope decision: this product is built as a portfolio case for a Design Lead home assignment, so the pipeline runs a shortened track 01 to 07 and stops after UI + Visual. Two screens are taken to full colour: Case Queue (main dashboard) and Case File (AI-assisted case view). The rest of the IA stays as wireframes.

## Product overview

Harrier is an adjudication console for analysts at managed detection and response (MDR) providers. One analyst covers 40 or more client tenants at once.

The core move: the analyst never works raw alerts. An AI agent called Clerk collects signals, correlates them into a case, runs the first pass of the investigation and files a written verdict with its evidence. The human job is to rule on it: accept, amend or reject, in seconds, with the evidence in view and the override always one key away.

Key difference from the market: autonomy is a per-tenant setting, not a product-wide threshold. Each client sits somewhere on a scale from "Clerk closes nothing on its own" to "Clerk closes benign cases and shows me a sample". The level moves as measured accuracy for that tenant earns it. The same signal means different things at a regional bank and at a dental group, and the console makes that difference visible instead of averaging it away.

Named agent: Clerk. The name is the contract. A clerk prepares the case file and drafts the opinion; the judge rules. Clerk never issues a verdict in the analyst's name.

## Platform

Desktop-first responsive web, minimum 1280. Primary layout target is 1440 to 1920 on two monitors, where the operator actually sits. Responsive down to 360 for one real scenario: an on-call analyst opening a paged case from a phone at 03:00 to read it and escalate. Mobile is a read-and-escalate surface, not the full console.

## Audience

Primary: Tier-2 SOC analyst at an MDR provider. Age 26 to 40, 2 to 6 years in security operations. Works 10-hour shifts on two monitors, 6+ hours inside the tool. Carries 40 or more client tenants at once.

Main driver: speed without being wrong. The daily pain is volume. The career risk is the one true positive that got closed as noise, and the fear of it slows every decision.

Secondary: SOC lead or service delivery manager who owns SLA, client trust and the decision to give Clerk more rope on a given tenant.

## Goal

Two frictions, one risk.

Friction one: the analyst spends most of a shift re-deriving context the system already holds. Which tenant is this, what counts as normal there, what did we decide the last three times we saw this.

Friction two: every verdict has to be explained twice, once to the client and once to whoever audits the account later, and that writing happens after the fact from memory.

Risk: decisions taken under volume pressure that nobody can defend six months later. Harrier moves the assembly to the agent and keeps the judgment with the human, and makes every verdict, every override and every autonomous close leave an immutable record.

## MVP scope (rough)

Refined at Lean UX Canvas (stage 01, step 5) and narrowed to three core jobs at stage 02.

- Cross-tenant case queue: one working list across all tenants, sorted by what needs a decision now, not by time
- Tenant context always present: which client, their autonomy level, their crown jewels, their business hours
- Case File: Clerk's assembled narrative, the evidence behind it, confidence and stated dissent between signals
- Verdict: accept, amend or reject, one keystroke, with the reject reason feeding tuning
- Client-facing summary drafted by Clerk, edited by the analyst, sent under the analyst's name
- Per-tenant autonomy dial plus a review lane for cases Clerk closed on its own
- Immutable decision log covering both AI actions and human overrides

## Business model hypothesis

Sold to the MDR provider, not to the end client. Platform fee per analyst seat plus a metered component per monitored asset across all tenants. Autonomy is not a paid tier: charging for the agent to do more work while the provider carries the liability breaks the trust the product is built on.

## Geo and compliance

United States and EU. SOC 2 Type II, hard tenant data isolation, EU data residency option, GDPR. The compliance requirement that actually shapes the design: every Clerk action and every human override is written to an append-only log with the evidence snapshot that existed at decision time.

## Design principles

1. Every row is a decision, not a record. If a line in the queue does not tell the analyst what to do next, it does not earn its height.
2. Clerk shows its work or it shows nothing. No confidence number appears without the evidence that produced it and the signals that disagreed.
3. Override is one key, and it teaches. Rejecting Clerk is a first-class action, not a fallback path, and the reason goes straight into tuning.
4. Tenant context is never more than a glance away. The same signal is a Tuesday at one client and an incident at another.
5. Density is the feature. Six hours a day means no decorative whitespace, keyboard before mouse, and no overlay that hides the evidence the analyst is deciding on.

## Tech stack hypothesis

React with TypeScript. Virtualised tables for lists in the hundreds. Server-sent events for live signal and queue updates. ClickHouse for telemetry and detection history, Postgres for cases, verdicts and the audit log. Claude for case narrative, verdict drafting and client-facing summaries.

## Where things live

- Rules that must hold in every session: this file. Budget 200 lines. No statuses here, no chronicle here.
- Statuses: the table in `README.md` and `done` flags in `/_nav.js`.
- Decision log, what we did and why and what we rejected: `docs/decisions.md`.
