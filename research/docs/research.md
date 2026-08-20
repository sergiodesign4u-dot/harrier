# Harrier: foundation research

Single source of truth for stage 01. Every downstream stage reads this file first. The level files it synthesises are `competitors.md`, `benchmark.md`, `lean-ux-canvas.md`, `aarrr.md` and `ux-patterns.md`; where a claim is compressed here, the level file holds the detail.

All competitor and benchmark pages were opened live on 2026-08-20. Nothing in this document comes from model memory. Anything unverified carries `[?]`.

**One class of statement in this file is neither sourced nor `[?]`, and it is worth naming.** Harrier is an invented product, so its operating premises, how many tenants one analyst carries, how an MDR provider's margin works, who answers when a closed case turns out to be an incident, are **decisions we made**, not market measurements. They are marked `PREMISE` where they appear. A premise repeated three times starts to read as a market fact, which is exactly how it slipped past the first self-audit.

## 1 Introduction

**The product.** Harrier is an adjudication console for analysts at managed detection and response providers. One analyst carries 40 or more client tenants. `PREMISE`, our chosen operating profile, not a measured industry figure. An AI agent named Clerk correlates signals into a case, runs the first pass of the investigation, and files a written verdict with its evidence. The human job is to rule on it.

**The problem.** An MDR provider's margin is set by how many tenants one analyst can carry `PREMISE`. The category's answer is unanimous, and that part is verified: let the agent close most of the work. Liability does not follow. The provider signs the contract, and when a closed case turns out to have been an incident, the provider answers for it `PREMISE`, our reading of how a managed service contract works, not a legal finding or a sourced industry claim.

**The approach.** Seven levels of research, each one narrowing the last: thirteen competitor products across three groups, a benchmark on one chosen dimension drawn from outside security entirely, a Lean UX Canvas, an AARRR funnel, and a deliberate choice among five structurally different UX patterns.

### Five findings

1. **The category has one position and it is unanimous.** Simbian: "Your analysts review the 8% that need judgment, not the 92% that don't". Intezer: "human SOC teams review outcomes, not tickets". Dropzone: "100% Software Execution. No vendor-provided human safety drivers behind the scenes". Prophet investigates 100% of alerts autonomously from day one. Expel's Ruxie enriches every alert before it reaches the queue. Every one of them sells the number of cases the human no longer sees (`competitors.md`, HARD).

2. **Nobody shows the queue that remains.** The residual work after auto-resolution is where every hard decision now lives and where an analyst spends the whole shift. No vendor selling auto-resolution publishes a view of what is left after it. The only working analyst queue published anywhere across the thirteen products is Expel's Workbench, in its documentation, and Expel is human-led rather than auto-resolving, so it is not the residual queue either.

3. **Multi-tenancy in this category means isolation or switching, never a fleet.** Simbian's Context Lake isolates each tenant's data, and what Simbian sells publicly is one 92% auto-resolve rate across all clients. Whether the product carries a per-tenant trust level internally is `[?]`: the working console is behind login. Expel makes the tenant a dropdown in the top bar, so the analyst is inside one client at a time. Prophet is single-tenant by design and says so.

4. **Earned autonomy already exists, and that changes our claim.** Prophet sells "Autonomy on your terms": it acts only within approved scope and "you decide when its track record justifies widening that scope". So earned autonomy is not the differentiator. What nobody does is make earned trust **per tenant and visible on a fleet view**.

5. **Confidence is framed as a property of the model everywhere in security, and as a property of the operator everywhere outside it.** Alloy's own customer quote is that its AI "gives me the confidence to quickly review and close watchlist alerts". Sift calls its version "Clearbox control". None of the five HARD competitors said it that way (`competitors.md`, SOFT).

### What the research changed in the brief

| In the original brief | After research |
|---|---|
| Earned autonomy as the differentiator | Corrected. Prophet already sells earned autonomy. The claim narrows to earned autonomy **per tenant, visible across the fleet** |
| Business model: per analyst seat plus per monitored asset | Challenged, not settled. Dropzone charges per investigation volume, up to 4,000 full investigations per year per AI analyst; Intezer charges per endpoint with no volume fees. The market prices machine work. Left open, addressed to me as product owner |
| Design principle 2, "Clerk shows its work or it shows nothing" | Sharpened. Every competitor publishes an evidence trail, so a trail alone is table stakes. The differentiator is that the number itself names its claim, scope and window |
| Confidence as a model property | Reversed. Confidence is what the operator gets, not what the model reports. The interface exists for the second one |
| Nothing in the brief about shift handoff | Added. No product across the thirteen examined addresses what an incoming analyst is told at shift start. That this is the riskiest hour is our hypothesis `[?]`; that it is unserved is verified |

## 2 Strategy

Detail lives in `lean-ux-canvas.md`. This is the same strategy at reading distance.

**Business problem.** An MDR provider cannot safely give an agent more work without a way to show, per client, how much latitude it has earned and what it did with it. Until that exists, growth is capped by how much risk a service delivery lead is willing to carry blind.

**Audience.** Primary: Tier-2 SOC analyst at an MDR provider, 26 to 40, two to six years in operations, 10-hour shifts on two monitors, 40 or more tenants. Paid to be fast, judged on being right, slowed down by the fear of the one true positive closed as noise. Secondary: SOC lead or service delivery manager, who owns SLA and the decision to give Clerk more rope. Tertiary: detection engineer, who consumes rejection reasons. Non-user beneficiary: the client's security contact, who never logs in and whose trust is built almost entirely out of the summaries they receive.

**Jobs, in the analyst's words.**
- Know immediately whether this is normal at this client, so I stop treating every tenant as a stranger
- See how hard Clerk looked before I decide how hard I look
- Disagree in one action and have it matter
- Answer a question in April about a decision made in February with the case file, not my memory
- Start a shift knowing where the agent has earned latitude and where it has not

**Business model.** Sold to the provider. Platform fee per analyst seat plus a metered component per monitored asset across all tenants. Autonomy is deliberately not a paid tier: charging more for the agent to do more work while the provider carries the liability breaks the trust the product is built on. Contested by market practice, see the open questions table.

**Business outcomes.** Five, all targets hypotheses, baselines `[?]` until a real deployment can be measured.

| Outcome | Metric | Target (hypothesis) |
|---|---|---|
| An analyst carries more tenants without more reversals | Tenants per analyst at a constant rate of reversed verdicts | +40% tenants, reversal rate flat |
| Latitude grows because it was earned, not because a global setting moved | Share of tenants above the entry autonomy level after 90 days | 60% |
| Verdicts survive being questioned | Share of client escalations where the original evidence answered the question without new investigation | 90% |
| The residual queue stops being the bottleneck | Median time from case ready to verdict filed | Under 4 minutes |
| Overrides are worth something | Share of Clerk rejections whose stated reason produced a tuning change within 14 days | 50% |

The last one is the honest test of design principle 3 in `CLAUDE.md`. If rejection is cheap to make and nothing happens afterwards, the product only performs listening.

**The strategic dimension.** Calibrated trust in an automated agent: the operator knows exactly how much to trust Clerk right now, on this tenant, and that trust is earned and visible rather than asserted. Stage 04 must show this with a concrete element on the reference screen. Stage 07 must check it did not dissolve.

**Riskiest assumption.** An analyst carrying 40 tenants makes faster and better-defended decisions when the agent's latitude varies per client than when it is one flat policy. If varying trust across 40 clients is just 40 more things to hold in working memory, the differentiator becomes overhead and Harrier is a worse Simbian. This is a value risk, not a feasibility risk, and the first test that can kill it is in `lean-ux-canvas.md` section 8.

## 3 AARRR

Detail in `aarrr.md`. Read Acquisition and Referral in an enterprise frame: Harrier is sold to a provider, not self-serve.

| Stage | One metric | Target (hypothesis) | One product decision |
|---|---|---|---|
| Acquisition | Bake-offs entered | `[?]` baseline first | Replay: rebuild the residual queue from 30 days of the prospect's own alert history |
| **Activation** | **First verdict within 30 minutes of first login.** The 30-minute threshold is arbitrary and stands until a real distribution replaces it | **80%** | **The first case an analyst ever opens is a replayed case with a known outcome** |
| Retention | Four-week analyst retention | 85% | Shift handoff composed at the end of every shift |
| Revenue | Net revenue retention on assets added | 125% | White-labelled tenant trust report showing both sides of the ledger |
| Referral | New evaluations naming an existing customer | 30% | Shareable redacted case file permalink |

> **ACTIVATION NODE: First Verdict.** The analyst rules on a Clerk-assembled case, with the evidence in view, and files it. The user flow at stage 03a has to reach this node as directly as possible.

Every stage of this funnel is answered by the same object, the case file. Replay shows a prospect a queue of them, activation is ruling on one, the trust report aggregates them, referral forwards one. That is where the product's centre of gravity sits, and it tells stage 03a that the detail screen is not beside the dashboard but underneath everything.

## 4 Competitors

Thirteen products, three groups. Full tables, sources and per-product notes in `competitors.md`.

**HARD, same product and audience:** Simbian, Prophet Security, Dropzone AI, Expel, Intezer.
**SOFT, same job in another domain:** Sift, Alloy, Intercom Copilot, PagerDuty.
**ASPIRATIONAL, category benchmarks:** Linear, Cursor, Datadog Cloud SIEM, Superhuman.

### Matrix

| | Simbian | Prophet Security | Expel | Cursor | Datadog Cloud SIEM |
|---|---|---|---|---|---|
| Who operates it | MSSP or MDR analyst across tenants | In-house SOC in one organisation | Expel's analysts, client watching the same screen | Developer reviewing agent work | In-house security engineer |
| Core object | Alert auto-resolved by an agent | Alert investigated end to end | Investigation, promoted to incident | Task with a diff awaiting review | Signal, promoted to case |
| Where the human sits | Reviews the 8% the agent could not close | Approves the scope of actions, not each case | Works the case, client observes | Rules on every diff before it lands | Triages every signal |
| How autonomy is set | One platform-wide rate in public marketing; tenant data isolated. Whether policy is per tenant inside the product is `[?]` | Per organisation, widened as the track record earns it | Auto remediations per organisation | Per action | Per rule, with suppressions |
| How agent work is shown | `[? behind login]` | Every question, query and reasoning step documented | An action in the log, with a checkbox to hide it | Compact verb trail, diff, measured outcome | `[?]` for the AI layer; the rule renders as readable clauses |
| What is charged for | `[?]` not published | `[?]` not published | `[?]` not published | `[?]` not opened this session | `[?]` not opened this session |

### Three shared patterns

1. **The evidence trail is the product.** Dropzone calls it "Glass Box, Not Black Box", Prophet documents every question and query, Sift calls it "Clearbox control", Datadog renders the rule as readable clauses. Nobody in this set defends an unexplained verdict.
2. **The list narrows rather than browses.** PagerDuty spells the active filter out in editable chips, Superhuman shapes the inbox before the operator arrives, Cursor names the list after the decision it wants.
3. **Volume claims are the sales unit.** 92% auto-resolved, 91% noise cut, 85% less manual investigation, 99.9% fewer leads, 70% fewer manual reviews.

### Three differences

1. **Multi-tenancy is isolation or switching, never a fleet.** Nobody shows all clients at once as one working surface.
2. **Two opposite answers to agent output.** Linear puts agent actions in the shared activity feed with a named actor. Expel gives the analyst a checkbox to hide them.
3. **Uncertainty is a number or a question.** Security reports a confidence score. Cursor stops and asks a numbered question with options.

### Gaps

Held as a table with sources in section 7.

## 5 Benchmark

Dimension: calibrated trust in an automated agent. Four products from outside security, scored on eight criteria. Full scoring in `benchmark.md`.

| Criterion | Waymo | NWS forecast | Aviation FMA | Stockfish on Lichess |
|---|---|---|---|---|
| Stated scope | 5 | 5 | 4 | 3 |
| Mode legibility | 2 | 3 | **5** | 3 |
| Evidence on demand | 3 | 4 | 2 | **5** |
| Calibration published | 5 | **5** | 1 | 3 |
| Graceful handoff | 1 | 2 | **5** | 2 |
| Cost of override | 1 | 3 | 5 | **5** |
| Failure disclosure | 4 | 4 | 4 | 2 |
| Trust moves with evidence | **5** | 4 | 1 | 2 |

Four and not five: clinical triage AI was opened at aidoc.com and dropped, because the public pages carry solution marketing and no examinable mechanism for how a radiologist is shown what to trust.

### Top three mechanisms into the MVP

**1. Armed and active, in a fixed place, with override as a named state.** From the Flight Mode Annunciator, which lives permanently across the top of the Primary Flight Display and carries two colour-coded states at once, armed and active. SKYbrary states the direction of communication plainly: "The aircraft tells the pilots what it's doing, and what it's about to do". When a pilot overrides the autothrottle manually the FMA displays OVRD, so human control is not the absence of a state but a state with a name.

Why it works: mode confusion is a display failure, not a knowledge failure. Operators lose track of which mode is live because the state was inferable rather than readable. A fixed position turns a memory task into a glance, and aviation learned this by crashing aircraft.

**2. A confidence number that names its claim, its scope and its window, paired with an absolute count.** From the NWS definition of probability of precipitation: a 30% chance that at least 0.01 inches falls at the point the forecast is valid for, over the stated period, typically 12 hours. Three mandatory qualifiers. Calibration is then measured against outcomes with reliability diagrams. From Waymo, the number format: every percentage paired with an absolute count, "94% fewer serious injury or worse crashes" beside "47 FEWER".

Why it works: a bare probability cannot be wrong, so it cannot earn trust either. The absolute count also defeats the small-sample illusion, since 90% reads identically on 9 cases and on 900.

**3. A provenance strip: what produced this, how hard it looked, where the answer came from.** From Lichess, where one strip carries the estimate `+0.2`, the engine identity `SF 18 dev, 85MB NNUE`, the effort `Depth 75`, and the provenance `CLOUD`.

Why it works: it separates two questions the interface usually collapses. High confidence from one source in two seconds and high confidence from six sources over four minutes deserve different amounts of attention, and no confidence score distinguishes them.

### What will not work here

**Waymo's path to trust, earning it by removing the human one bounded geography at a time.** It works there because the geography is mapped and bounded, one operator owns all liability, and the rider has no decision to make. In Harrier the operator answers to 40 clients with different risk appetites, the environments change weekly, and the premise is that a human still rules. Take Waymo's honesty about a published track record. Do not take its endgame.

## 6 Patterns

Full analysis of all five in `ux-patterns.md`.

**Key task:** rule on cases the agent has already assembled, fast enough to keep up and well enough to defend, across forty clients whose normal is different.

**Entry-point behaviour:** pattern-matching before reading. The analyst recognises the shape of a case, alert class, asset type, time, client, before reading it, and the details either confirm the match or break it. This is why Expel's columns fail our task, Last updated and Initial lead and Last action describe a record rather than a shape, and why Cursor's row works.

**Considered:** split-pane review, focused card stack, fleet map with drill-down, conversational agent workspace, command-driven console.

**Chosen: split-pane review, with the fleet as the resting state of the detail pane.** A cross-tenant queue on the left that never leaves the screen. The right side holds the case when one is selected, and the fleet, meaning per-tenant autonomy state and accuracy trend, when nothing is. The empty state of the detail pane is the dashboard. That last sentence is a **design decision**, not a research finding: nothing in the competitor or benchmark pass suggested it, and it is offered here because it follows from the chosen pattern, not because evidence points at it.

Three reasons:
1. It is the only pattern that matches the entry-point behaviour. A persistent list beside the detail lets the analyst confirm or break a match against what is around it without rebuilding context.
2. It is the only pattern that makes cheap override structurally possible. One-key disagreement needs a keyboard rhythm, and split-pane is the only one of the five where the list survives the decision.
3. It is the structural expression of the gap. A cross-tenant list persisting beside the detail is what "one fleet, one queue" looks like in layout rather than in a sentence.

**What the choice rests on.** Reason 1 rests on the pattern-matching behaviour and reason 2 on satisficing, and both are unverified inferences. Only reason 3 stands on evidence collected this session. If stage 02 does not confirm those behaviours, the pattern has to be re-argued from reason 3 alone, which it can survive, but as a narrower argument. Stage 04 should not inherit this as settled.

**Watch item.** A merged queue switches tenant on every row, and tenant switching resets context. The per-tenant base rate in the case header is what pays for the merged queue. If it fails, the queue groups by tenant and the fleet becomes primary navigation.

**Alternative:** focused card stack, if the first test shows a persistent list invites browsing rather than deciding, or if the residual queue is homogeneous enough that comparison never helps.

**Rejected:** conversational agent workspace as the spine. It inverts the contract, since Clerk has already worked and the human rules; it has no scannable state; it cannot carry a queue. Chat inside the case file, to ask Clerk a follow-up about evidence already on screen, is not rejected and is probably necessary.

## 7 Conclusions

### Gaps

| Gap | Evidence | Source |
|---|---|---|
| Nobody **sells** a fleet view of trust | Simbian isolates tenant data in a per-tenant Context Lake and markets one 92% auto-resolve rate across all clients; whether a per-tenant trust level exists inside the product is `[?]`. Prophet earns autonomy per organisation, but deploys single-tenant. The gap is in what is sold and shown publicly, which is all a pre-login pass can establish | [simbian.ai/solutions/mssp-mdr](https://simbian.ai/solutions/mssp-mdr), [prophetsecurity.ai/ai-soc-analyst](https://www.prophetsecurity.ai/ai-soc-analyst) |
| Every competitor optimises for the human seeing less; none shows the moment the human still has to decide | Five vendors sell 92%, 91%, 85%, 99.9% and 70% reductions. None publishes a view of what remains after them. Expel publishes a real analyst queue, but Expel is human-led, so that queue is not a residual one | `competitors.md`, HARD and SOFT tables |
| Base rate is per environment and should be per tenant | Datadog puts "Past month signal count" in the signal header, answering "is this normal here" for one organisation. In a 40-tenant console that question has 40 answers | [docs.datadoghq.com, Investigate Security Signals](https://docs.datadoghq.com/security/cloud_siem/triage_and_investigate/investigate_security_signals/) |
| The accept, edit or reject atom has not moved from code review into security | Cursor: a queue titled "READY FOR REVIEW 5", a size measure before opening, a compact work trail, a numbered fork when unsure. Security still ships confidence percentages | [cursor.com](https://cursor.com/en-US) |
| Agent output is treated as clutter rather than as a draft | Expel's action log carries a "Hide Ruxie actions" checkbox. Linear puts agent actions in the shared feed with a named actor | [docs.expel.io](https://docs.expel.io/workbench-reference/investigations-and-incidents/view-an-investigation), [linear.app](https://linear.app/) |
| Nobody addresses the shift handoff | No page examined across thirteen products describes what an incoming analyst on a 24/7 rotation is told. Superhuman's Daily Briefs is the nearest pattern, and it is not a security product. Whether this is the riskiest hour is unverified `[?]` | `competitors.md`, all three groups |

### Six hypotheses

Format: if / then / because [data].

**H1. `RISKIEST`** If per-tenant autonomy is shown as armed and active state in a fixed position, then an analyst carrying 40 tenants will make faster and better-defended decisions than under one flat policy, because mode confusion is a display failure rather than a knowledge failure, and the FMA solved it by making state readable rather than inferable [`benchmark.md`, Flight Mode Annunciator, mode legibility 5 of 5]. **This is the riskiest assumption from section 2. If H1 is false the idea falls: per-tenant trust becomes 40 things to remember, and the differentiator becomes overhead.**

**H2.** `CONDITIONAL` If the case header carries a per-tenant base rate, then an analyst will reach a verdict on an unfamiliar client without a research detour, because Datadog already proves the mechanism works for one environment and the analyst's cost here is tenant switching, which resets what counts as normal [Datadog signal header, "Past month signal count: 1" verified; `ux-patterns.md` behaviour 4 unverified `[?]`]. Half-grounded: the mechanism is evidenced, the need for it is not.

**H3.** If every Clerk output carries a provenance strip naming model, sources queried and time spent, then analysts will allocate attention on evidence rather than on order of arrival, because effort spent and confidence are different questions and only the first predicts how much checking is warranted [`benchmark.md`, Lichess `Depth 75` and `CLOUD`].

**H4.** `CONDITIONAL` If rejecting Clerk costs one keystroke and the reason routes to detection engineering, then rejections will keep being filed rather than quietly absorbed, because analysts satisfice under volume and will take the cheapest sufficient action, so the cheapest action has to be the useful one [`ux-patterns.md` behaviour 2, unverified `[?]`]. Rests entirely on an unverified behaviour. If analysts do not satisfice, the reasoning behind one-key override needs rebuilding, though the feature may still be right for other reasons.

**H5.** `CONDITIONAL` If the fleet view shows autonomy state and accuracy trend per tenant, then latitude will grow on measured accuracy rather than on a forgotten setting, because trust in automation is set by the last failure rather than the average, and latitude that is never seen to fall stops being believed [`ux-patterns.md` behaviour 3, unverified `[?]`].

**H6.** If a shift handoff is composed at the end of every shift, then less information will be lost across a 24/7 rotation, because no product across the thirteen examined addresses the handoff at all and the nearest pattern comes from an email client [`competitors.md`; Superhuman Daily Briefs]. That the handoff is the riskiest hour of the rotation is itself unverified `[?]` and is the first thing stage 02 should ask an analyst.

### Open questions

| Question | Addressee | What changes in the product | Status |
|---|---|---|---|
| Does an MDR analyst want one cross-tenant queue, or is switching client context one at a time a safety feature that stops them mixing up environments? | SOC analyst with MDR experience. No such person on hand, so it stands to me as product owner until stage 02 | If switching is safety rather than friction, the dashboard stops being a merged queue and becomes a fleet view that hands off into a single tenant | Open |
| Who moves a tenant's autonomy level: the analyst, the SOC lead, or the client? | SOC lead or service delivery manager, same caveat | Decides whether the autonomy control lives in the operator console at all, or only in an admin surface the analyst can read but not change | Open |
| The market charges for machine work, by investigation volume or by endpoint. Can a product that routes work back to humans price that way? | Me as product owner | If not, the business model line in `CLAUDE.md` is wrong and the product has to justify what a human decision is worth | Open |
| Is the queue shaped by named saved views, or by one opinionated ordering the product owns and explains? | Me as product owner, revisited at stage 03a | Saved views put the burden of a good queue on the operator. One ordering means the product must be right and must show its reasoning. This decides what the main dashboard is | Open |
| Will an analyst accept liability for a client-facing summary Clerk wrote and they approved? | SOC lead, same caveat | If not, the summary stops being a draft to approve and becomes a structured record the analyst assembles from parts | Open |
| Should per-tenant autonomy read as one slider or as three named lanes, the way Sift routes to Allow, Step-up and Block? | Me as product owner, resolved at wireframes | A slider asks how much you trust the agent. Lanes say where the work goes. The second is easier to hold under pressure and easier to audit | Open |
| Are analysts on a rotation given ownership of specific tenants, or of the queue as a whole? | SOC lead, same caveat | Decides whether the shift handoff is composed per tenant or per shift | Open |
| Do MDR providers treat their tooling as a competitive secret? | Me as product owner | If yes, peer referral is suppressed entirely and the channel is the only route to market, which changes the Referral stage of the funnel | Open |

### Evidence index

Every screenshot in `research/screens/` and the claim it proves. A screenshot that proves nothing is deleted, not archived.

| Screenshot | The claim it proves |
|---|---|
| `simbian-mssp-mdr` | Per-tenant Context Lake, reasoning never crosses tenants, 92% auto-resolved, "your analysts review the 8% that need judgment" |
| `prophet-security-home` | Deploys as a dedicated single-tenant environment, so multi-tenancy is explicitly not their shape |
| `prophet-ai-soc-analyst` | "Autonomy on your terms", scope widened when the track record justifies it; "nothing is learned silently" |
| `dropzone-ai-soc-analyst` | "Glass Box, Not Black Box"; a worked case narrative ending in a benign dismissal and a context-memory update |
| `dropzone-pricing` | Priced by investigation capacity, up to 4,000 full investigations per year per AI analyst; MSSP plan is a dedicated multi-tenant environment |
| `expel-workbench` | Ruxie enriches every alert across 160+ integrated tools before it reaches the queue; client sees the same screen as the Expel analyst |
| `expel-view-an-investigation-ui` | Tenant as a top-bar dropdown; row columns describe a record not a shape; evidence written as question and answer; "Hide Ruxie actions" checkbox |
| `intezer-ai-soc` | "Human SOC teams review outcomes, not tickets"; endpoint-based pricing with no volume fees; trust framed as a threshold to cross |
| `sift-platform` | "Clearbox control"; evidence as named chips under "Why Sift decided, full signal trail"; one risk score routed to Allow, Step-up, Block |
| `alloy-actionable-ai` | Confidence framed as what the operator gets: "gives me the confidence to quickly review and close watchlist alerts" |
| `intercom-copilot` | Every generated answer links its top sources so agents validate in the inbox; a separate manager dashboard reviewing AI use |
| `pagerduty-operations-console-ui` | Live as an explicit toggle; named saved views; active filter spelled out in editable chips; row density control; the "Last Note" column |
| `linear-home-agents` | "Reviews" as a top-level destination; agent actions in the shared activity feed with a named actor; "Draft PR awaiting your review"; "Worked for 7s" |
| `cursor-ready-for-review` | A queue titled "READY FOR REVIEW 5"; a size measure per row; a compact verb work trail; an outcome reported as a measurement |
| `datadog-cloud-siem-signal-panel` | Base rate in the header; "WHAT HAPPENED" first, in prose; the rule rendered as readable clauses; a fixed "NEXT STEPS" rail splitting triage from action |
| `superhuman-go` | Split Inbox, Daily Briefs, and inline suggestions that underline without taking the turn |
| `waymo-safety` | Every percentage paired with an absolute count: "94% fewer serious injury or worse crashes" beside "47 FEWER" |
| `nws-probability-of-precipitation` | A probability defined by three mandatory qualifiers: what event, at which point, over which window |
| `skybrary-flight-mode-annunciator` | Armed and active as two simultaneous colour-coded states in a fixed position; OVRD, override as its own annunciated mode |
| `lichess-eval-depth` | One strip carrying estimate, engine identity, effort spent and provenance: `+0.2`, `SF 18 dev 85MB NNUE`, `Depth 75`, `CLOUD` |
| `ucl-shift-handover-study` | Six incident responders interviewed on shift handovers, five of them at organisations providing cybersecurity as a service (stage 02) |
| `ucl-handover-difficulties` | The handoff fails at the end of the shift: fatigue, rush, information stale within 30 minutes, six reports to read for three days of context (stage 02) |
| `sans-soc-survey-2025-key-findings` | 79% of SOCs operational 24/7; 42% use AI/ML tools out of the box with no customization; 85% triggered by endpoint alerts (stage 02) |
| `rit-xai-soc-findings` | Analysts accept AI output at lower accuracy when the explanation is evidence-backed; a confidence percentage needs the context that generated it; missing organisational perspective is named as the gap (stage 02) |
| `defender-multitenant-incidents` | A shipping cross-tenant queue with Tenant name as a row column, where real work opens a new tab for that tenant and assignment cannot cross tenants (stage 02) |

---

## 8 Follow-up research for stage 02

Run at the start of stage 02, before personas were drafted, and moved ahead of its place in the pack for one reason: a persona built on premise and patched afterwards keeps its shape. Four public sources opened live on 2026-08-20. Guardrail held: public and pre-login only.

**What changed.** Stage 01 had evidence about the market and a frame about people. Three of these four sources are studies of practitioners, two of them with interviews, so several lines that stood as `PREMISE` or `[?]` now stand on data, and two stage 01 decisions turn out to be wrong.

### Sources

| Source | What it is | Why it counts |
|---|---|---|
| Kent, Tuptuk and Becker, "Passing the Baton: Shift Handovers within Cybersecurity Incident Response Teams", UCL, arXiv 2601.07788, 12 Jan 2026 | Interviews with six incident responders, five of whom work at organisations providing cybersecurity as a service | The only study found that examines the handoff directly. Five of six participants work in our exact setting |
| SANS SOC Survey 2025, written by Christopher Crowley, July 2025 | Ninth annual industry survey of how SOCs are built, staffed and run | Industry-scale numbers on staffing, coverage, tenure and satisfaction with tooling |
| Rastogi et al., "Too Much to Trust? Measuring the Security and Cognitive Impacts of Explainability in AI-Driven SOCs", RIT, arXiv 2503.02065v2, ACM CCS 2025 | Three-month mixed-methods study: survey N=248 plus 24 in-depth interviews with SOC analysts | The largest body of analyst voice found anywhere, and it is about exactly our question: what makes an AI explanation trustworthy under time pressure |
| Microsoft Defender multitenant management, incidents and alerts, updated 08 Aug 2026 | Product documentation of a shipping cross-tenant console | The platform most MDR providers actually operate on. What it ships is what our analyst does today |

### What is now sourced that was premise

| Line | Was | Now |
|---|---|---|
| A 24/7 rotation | `PREMISE` | **79% of SOCs are operational 24/7** [SANS 2025, Key Findings] |
| Two to six years in operations | `PREMISE` | **Three to five years is the most common tenure for SOC staff**, and 31% stay three to five years while 4% stay ten or more [SANS 2025] |
| MDR providers carry other companies' triage | `PREMISE` | **183 of 443 respondents outsource alerting, meaning triage and escalation, fully or partially**: 55 fully outsourced, 128 both in-house and outsourced, against 260 in-house only [SANS 2025, Figure 2] |
| The handoff is written | assumed | **73% of organisations allow remote work for SOC team members at least some of the time** [SANS 2025], and the UCL participants working remotely describe written handovers replacing verbal ones permanently: "I'd prefer doing this stuff in-person but that sort of aspect is ruled out. Working from home and you're doing a 7am handover, whispering isn't great" |
| The analyst does not arrive trusting the agent | not stated at all | **AI/ML tools rank at the bottom of the satisfaction list. Of the three AI/ML technologies measured, two ranked at the very bottom, including generative language tools, which scored just a 2 out of 4**, while EDR/XDR is the only technology to score above 3 out of 4. **42% of SOCs use AI/ML tools out of the box with no customization** [SANS 2025] |

The last row is new and it matters more than the others. Harrier's operator does not arrive curious about Clerk. They arrive having already been sold an AI tool that underdelivered, and their most trusted tool is the one that is fully deployed, well trained and boring.

### What the five behaviours look like now

| Behaviour from `ux-patterns.md` | Status after this pass |
|---|---|
| 1. Pattern-matching before reading | Still `[?]`. Nothing found that measures it. It remains the most load-bearing unverified claim in the package |
| 2. Satisficing under volume | **Supported.** UCL: "over-utilised analysts are just gonna be ready to just get out and head home. So they just wanna get it done fast, and rush", and on handover quality, some "only [include what they] feel is the minimum requirement". RIT, from an analyst: "During triage, I ignore lengthy explanations. What I need most are straightforward next steps", and analysts "rarely mentioned using the fine-grained feature contribution graphs or the prediction uncertainty fields in a real-time setting" |
| 3. Trust set by the last failure | Still `[?]` as stated. But the **starting** level is now known and it is low, see the AI/ML satisfaction row above. The design consequence survives on the new evidence rather than the old inference |
| 4. Tenant switching resets context | **Supported in structure, not in cost.** Microsoft's cross-tenant console shows Tenant name and Workspaces as row columns, but real work opens the incident "in a new tab for that tenant", and assignment cannot cross tenants at all: "Currently, you can only assign multiple incidents from same tenant". The boundary is real and hard in the dominant tool. How much it costs the analyst is still `[?]` |
| 5. Writing for the future auditor | **Corrected.** The written record's audience is the next analyst, not an auditor. UCL found no formal training on handover anywhere, wide individual variation, and juniors who "talk about anything and everything that's happened" beside seniors who write almost nothing. The behaviour is real; the reader we named was wrong |

### Two stage 01 decisions that this pass breaks

**1. The handoff cannot be composed at the end of the shift.** `aarrr.md` Retention names the product decision as "shift handoff composed at the end of every shift". The UCL interviews put the failure mode exactly there: "over-utilised analysts are just gonna be ready to just get out and head home. So they just wanna get it done fast, and rush", and information goes stale inside a single shift, "at 9am you've got something to put in the handover. By 9:30, that might have changed. Because the analysts are doing 12 hour shifts, to remember everything that's happened during the day and add it in, there's bound to be something you'll forget". One participant had already solved it by making the notes accumulate during the shift instead: "I've got it set up so it integrates with Teams, so you can actually write it in Teams as the day's going on." The handoff is composed continuously and closed at the end, not written at the end.

**2. The handoff is signposting, not a document.** Four of the six UCL participants described the same division: technical detail lives in the ticket, and the handover points at it. "Technical details would be in a ticket. So quite often when we hand over, we put loads of ticket references in so that way it keeps everything in one location and you can add comments on top with a timestamp to see who's worked on it and at what times. Handovers are more for signposting." This lands on the same conclusion `aarrr.md` reached from a different direction: the case file is the object, and everything else points at it.

### What the analyst actually wants from an explanation

This is the part of the pass that touches design principle 2 most directly, and it sharpens it in a way the competitor pass could not.

**The headline finding of the RIT study:** participants "were consistently willing to accept XAI outputs, even in cases of lower predictive accuracy, when explanations were perceived as relevant and evidence-backed". Trust follows evidence quality, not the accuracy number.

- **A confidence score alone does not work, and the analysts say why.** An explanation is more meaningful "if I have some context about how that percentage was generated", such as which log data or past incidents support a model's 92% confidence in a phishing alert. This is design principle 2 in `CLAUDE.md` almost word for word, now stated by an analyst instead of inferred by us
- **More explanation is not more trust.** The study describes a Trust-Explainability curve: no rationale gives low trust, a minimal clear explanation gives a large gain, and further detail has diminishing returns and "can even reduce trust if they introduce confusion or doubt"
- **Organisational context is the missing piece, named as such.** A popular detection platform "doesn't have the organizational perspective... if that is there then it is like wonders", and missing context such as asset value, user role and historical baselines "limits the usefulness of explanations". **This is the evidence H2 was missing.** H2 said the mechanism was proven at Datadog and the need for it was not. The need is now stated by analysts
- **Analysts think in incident narratives, and tools explain single alerts.** "As an analyst we have to find a connection between the critical and the high alerts to determine if it's an incident or part of an attack process". That correlation is exactly what Clerk is for, which makes this the closest thing to a validation of the product premise found in any source
- **Explanation depth should vary by experience, not only by role.** Participants with three or more years found step-by-step guidance irrelevant while agreeing it is valuable for newcomers, and one described an explainable dashboard as a learning aid that talks to a junior "like another colleague". Access level changes what a person can even see: "Based on their access, the information they can see changes"

### What is still open

- **Behaviour 1, pattern-matching before reading.** Unverified, and three design decisions rest on it
- **Who moves a tenant's autonomy level.** Nothing found. Stays open, addressed to a SOC lead
- **Whether an analyst will accept liability for a summary Clerk wrote.** Nothing found. Stays open
- **The cost of tenant switching in seconds or in errors.** The boundary is documented; its cost is not
- **Forty tenants per analyst.** Still `PREMISE`. SANS gives SOC size, two to ten people is the most common fully staffed SOC, but no analyst-to-client ratio was found in any public source

One further paper was read and is **not** used as evidence about people: Chowdhury and Tanvir, "Decision-Aware Trust Signal Alignment for SOC Alert Triage", arXiv 2601.04486, 8 Jan 2026. Its finding that "false negatives are greatly amplified by the presence of misaligned displays of confidence" comes from simulation on the UNSW-NB15 benchmark with logistic regression and random forest, not from analysts. The paper describes a human study as a plan, not a result. It is cited here only for naming the asymmetry our product rests on, that a missed attack costs far more than a false alarm, and it is `[?]` as a claim about behaviour.
