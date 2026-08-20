# AARRR funnel

One metric and one product decision per stage. Several mechanics and hypotheses are allowed; more than one metric per stage is not, because two metrics on a stage means neither is the one that matters.

A note on reading this funnel. Harrier is sold to an MDR provider through an enterprise cycle, not self-serve, so two stages have to be read in that frame: Acquisition is how a provider comes to evaluate the product at all, and Referral is how a service delivery lead ends up recommending it to a peer. Nothing here is a marketing channel plan.

All targets are hypotheses. Baselines are `[?]` until a real deployment can be measured.

## Acquisition

**Mechanics.** MSSP and MDR channel communities and conferences, peer word of mouth between service delivery leads, analyst-relations coverage of the AI SOC category, and above all the competitive bake-off. Simbian sells that motion explicitly: "Run it on the prospect's actual logs the day of the pitch. Same number we'll show their board next quarter. Walk into the bake-off with a working SOC, not a roadmap and a staffing slide" (`competitors.md`, HARD). Proof on the prospect's own data during the evaluation is the category norm, not a differentiator.

**Hypotheses.**
- A provider evaluating this category runs two or three vendors head to head rather than buying the first one seen `[?]`
- The trigger to evaluate at all is a client asking how the provider uses AI, not an internal efficiency initiative `[?]`
- The thing that decides a bake-off is not the auto-resolve percentage, which everyone claims, but what the provider is shown about the cases that were **not** auto-resolved

**Unknown.** How long an MDR provider's evaluation cycle actually runs, and who signs: the SOC lead, the COO, or the founder. `[?]`

**One metric.** Bake-offs entered, meaning evaluations where Harrier runs head to head against at least one named competitor. Target: `[?]` baseline first, then growth.

**One product decision for the MVP.** **Replay.** Point Harrier at 30 days of a prospect's historical alerts and it reconstructs the residual queue as it would have looked: the cases Clerk would have escalated, the verdict it would have proposed, the evidence it would have shown, and what actually happened at the time. Every competitor sells the number of things the analyst never sees. Harrier's pitch is the queue that remains, and this is the only way to show it before a contract exists.

## Activation

> **ACTIVATION NODE: First Verdict.** The analyst rules on a Clerk-assembled case, with the evidence in view, and files it. This is the atomic moment the whole product exists to produce, and it is the node the user flow at stage 03a has to reach as directly as possible.

**Mechanics.** A new analyst is added to a provider already running Harrier. They land in the cross-tenant queue, open one case, read Clerk's narrative and evidence, and accept, amend or reject.

**Hypotheses.**
- An analyst who files a first verdict inside the first 30 minutes will keep working the queue; one who spends the first 30 minutes reading documentation will go back to their old console `[?]`
- The first verdict is an act of trust, and trust given blind does not survive being wrong once. It has to be checkable at the moment it is given
- Activation is not "connected a tenant". Connecting is the provider's act. Activation is the analyst's

**Unknown.** Whether analysts joining an MDR provider are onboarded onto tools individually or in cohorts during a training week, which changes what the first session even looks like. `[?]`

**One metric.** Share of new analysts who file a first verdict within 30 minutes of first login. Target hypothesis: 80%. **The 30-minute threshold is arbitrary.** It was chosen because it is roughly one coffee, not derived from anything. It stands until a first deployment gives a real distribution of time-to-first-verdict, and then it is replaced by a percentile of that distribution.

**One product decision for the MVP.** The first case an analyst ever opens is not a live one. It is a **replayed case from one of their own provider's tenants with a known outcome**, labelled as such. They rule on it, and then see what actually happened. The first act of trust is checkable, which is the only way a first act of trust should ever be asked for. It also seeds the thing `benchmark.md` says trust is made of: a track record the operator has personally verified.

## Retention

**Mechanics.** This is a product people are inside for six hours a day across a 24/7 rotation, so retention is measured in shifts, not in monthly logins. The thing that brings an analyst back is not a feature, it is finding the queue in the state the previous shift left it, plus knowing what the agent did while nobody was watching.

**Hypotheses.**
- The handoff is the riskiest hour of a 24/7 operation `[?]`. What is verified is that no competitor page examined addresses the handoff at all (`competitors.md`), and that 79% of SOCs run 24/7 [SANS SOC Survey 2025], so the rotation the handoff sits in is real
- An analyst abandons a console when they start keeping a parallel record somewhere else, usually a spreadsheet or a Slack thread. That is the leading indicator of churn, before any usage number moves `[?]`
- Autonomy that only ever moves up is not earned trust, it is drift. Latitude has to be seen to fall when accuracy falls, or the fleet view stops being believed

**Unknown.** Whether analysts on a rotation feel ownership of specific tenants or of the queue as a whole. This decides whether the handoff is per tenant or per shift. `[?]`

**One metric.** Four-week analyst retention: share of analysts who filed a verdict in week N who also file one in week N+4. Target hypothesis: 85%.

**One product decision for the MVP.** **Shift handoff, composed continuously and closed at the end.** Through the shift Harrier accumulates the handoff for the incoming analyst: what moved, what is waiting and why, which tenants had autonomy change and on what evidence, and what Clerk closed on its own while nobody was watching. The outgoing analyst closes it rather than writes it. The pattern comes from Superhuman's Daily Briefs, which pull commitments into one view "so nothing slips" (`competitors.md`, ASPIRATIONAL). No security product examined does this, and a 24/7 operation is where it matters most.

**Corrected at stage 02.** This decision originally said the handoff is composed at the end of the shift. Interviews with six incident responders put the failure mode exactly there: "over-utilised analysts are just gonna be ready to just get out and head home. So they just wanna get it done fast, and rush", and the content goes stale inside the shift, "at 9am you've got something to put in the handover. By 9:30, that might have changed." One participant had already solved it by making the notes accumulate as the day goes on. A second correction from the same source: the handoff is **signposting**, not a document. Technical detail stays in the case file and the handoff points at it, "we put loads of ticket references in so that way it keeps everything in one location". Source in `research.md`, section 8.

## Revenue

**Mechanics.** Sold to the provider, not to the end client. Platform fee per analyst seat plus a metered component per monitored asset across all tenants. Autonomy is deliberately not a paid tier: charging more for the agent to do more work while the provider carries the liability breaks the trust the product is built on (`CLAUDE.md`).

**Hypotheses.**
- Expansion comes from tenants added, not seats added. If Harrier works, the provider adds clients faster than analysts, and that is the outcome we want to be paid on
- Renewal is decided by what the provider can show their client, not by what the analyst experienced day to day
- Pricing on assets rather than on investigation volume aligns us with the provider's growth instead of with the amount of machine work generated, which is what Dropzone's per-investigation model and Intezer's per-endpoint model each optimise differently (`competitors.md`)

**Unknown.** Whether a provider will accept per-asset pricing when the category has trained them on per-investigation and per-endpoint. Open question carried from `lean-ux-canvas.md`. `[?]`

**One metric.** Net revenue retention, driven by monitored assets added per existing provider. Target hypothesis: 125%.

**One product decision for the MVP.** **The tenant trust report**, white-labelled by the provider for a quarterly review. Simbian already ships weekly white-labelled reports to a client CISO's inbox, and by renewal "they already know what they're paying for" (`competitors.md`). Ours has to differ in one specific way, or it is a worse copy: it reports **both** sides of the ledger. What Clerk handled on its own, what a human ruled on and why, where latitude went up and on what evidence, and where it went down. It is the defensibility story turned into the renewal artifact.

## Referral

**Mechanics.** `[?]` for this whole paragraph. We assume referral in this market is peer to peer between service delivery leads at non-competing providers, plus the channel and the MSP and MSSP communities, and that nobody posts publicly about an internal SOC console but does forward one thing to one peer. None of this was researched: it is the weakest-evidenced stage in the funnel and it is named as such.

**Hypotheses.**
- What travels between peers is not a demo link, it is an artifact: one case file good enough that a lead wants to show someone `[?]`
- A provider will not refer a tool that made them look automated to their own client. They will refer one that made them look rigorous
- The referral moment is a bad week, not a good one: a lead recommends the tool that made an incident defensible, not the one that saved them time

**Unknown.** Whether providers regard their tooling as a competitive secret, which would suppress peer referral entirely and make the channel the only route. `[?]`

**One metric.** Share of new evaluations that name an existing customer as the source. Target hypothesis: 30%.

**One product decision for the MVP.** **Shareable case file.** A read-only, redacted permalink of one case: Clerk's narrative, the evidence, the verdict, the override if there was one, and the timestamps. Tenant identifiers and customer data are stripped by default and the redaction is visible in the artifact, so what is missing is never mistaken for what did not exist. This is the object that travels, and it is the same object that answers a client in April about a decision made in February.

## Metric summary

| Stage | One metric | Target (hypothesis) | One product decision |
|---|---|---|---|
| Acquisition | Bake-offs entered | `[?]` baseline first | Replay: rebuild the residual queue from 30 days of the prospect's own history |
| **Activation** | **First verdict within 30 minutes of first login** | **80%** | **First case is a replayed case with a known outcome** |
| Retention | Four-week analyst retention | 85% | Shift handoff composed continuously, closed at end of shift |
| Revenue | Net revenue retention on assets added | 125% | White-labelled tenant trust report, both sides of the ledger |
| Referral | New evaluations naming an existing customer | 30% | Shareable redacted case file permalink |

## Conclusions

1. **Every stage of this funnel is answered by the same object: the case file.** Replay shows prospects a queue of them, activation is ruling on one, the trust report aggregates them, and referral forwards one. That is a strong signal the product has a real centre of gravity rather than a list of features, and it tells stage 03a where the detail screen sits in the architecture.

2. **The category's own marketing points at our opening.** Every competitor's funnel is built on the number of cases the human never sees. Ours is built on the ones they do. That makes acquisition harder, because the pitch is less comfortable, and retention easier, because the residual queue is where an analyst actually spends their shift.

3. **Activation belongs to the analyst, not to the buyer.** Connecting tenants is the provider's act and is easy to mistake for activation because it is easy to instrument. The moment that matters is one analyst filing one verdict, and if that takes longer than half an hour the deployment quietly fails while every integration dashboard stays green.

4. **Nobody sells into the handoff.** No product across the thirteen examined addresses what an incoming analyst is told at the start of a shift. That the handoff is the *riskiest* hour is our hypothesis, not a measured fact `[?]`. That it is unserved is verified. It is a genuine gap and it costs one screen, not a platform.
