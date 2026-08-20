# Lean UX Canvas v2

Jeff Gothelf's format, filled from `CLAUDE.md`, `competitors.md` and `benchmark.md`. Every claim taken from those files carries its source. Targets are marked as hypotheses, because none of them has been measured.

## 1 Business problem

An MDR provider's margin is set by how many client tenants one analyst can carry. The market has one answer, and it is unanimous: let the agent close most of the work. Simbian sells 92% of alerts auto-resolved and one analyst covering 200 to 300% more clients, Dropzone sells an 85% reduction in manual alert investigation, PagerDuty sells 91% less alert noise, Expel sells a 99.9% reduction in investigative leads (`competitors.md`, HARD and SOFT).

**Liability does not automate.** The provider signs the contract, and when a closed case turns out to have been an incident, the provider answers for it, not the vendor. `PREMISE`: this is our reading of how a managed service contract works, not a legal finding and not a sourced industry claim. It is load-bearing for the whole business problem, so it is the first thing to check with a service delivery manager at stage 02. Two things follow that nobody in the category is selling into:

- The residual queue, whatever is left after auto-resolution, is where every hard decision now lives. It is the analyst's whole shift, and no competitor publishes so much as a screenshot of it (`competitors.md`, gap 2)
- Autonomy is being sold as one number across every client. A provider carrying 40 tenants carries 40 different risk appetites, and one auto-resolve rate cannot represent a regional bank and a dental group at the same time (`competitors.md`, gap 1)

So the business problem is not "reduce alert volume". It is: **an MDR provider cannot safely give an agent more work without a way to show, per client, how much latitude it has earned and what it did with it.** Until that exists, growth is capped by how much risk a service delivery lead is willing to carry blind.

## 2 Business outcomes

All targets are hypotheses. Baselines are `[?]` until we can measure a real deployment.

| Outcome | Metric | Target (hypothesis) |
|---|---|---|
| An analyst carries more tenants without more reversals | Tenants per analyst at a constant rate of reversed verdicts | +40% tenants with reversal rate flat |
| Agent latitude grows because it was earned, not because someone raised a global setting | Share of tenants at an autonomy level above the entry level after 90 days | 60% of tenants above entry level |
| Verdicts survive being questioned | Share of client escalations where the original evidence answered the question without new investigation | 90% |
| The residual queue stops being the bottleneck | Median time from case ready to verdict filed | Under 4 minutes |
| Overrides are worth something | Share of Clerk rejections whose stated reason produced a tuning change within 14 days | 50% |

The fifth one is the honest test of whether principle 3 in `CLAUDE.md` is real. If a rejection is cheap to make and nothing happens afterwards, the product only performs listening.

## 3 Users

**Primary: Tier-2 SOC analyst at an MDR provider.** `PREMISE` for every number in this paragraph: 26 to 40, two to six years in security operations, 10-hour shifts on two monitors, 6+ hours inside the tool, 40 or more client tenants at once. This is an assumed profile we chose, not a researched one. No analyst has been interviewed. Stage 02 builds the real persona and every number here is a candidate to be replaced. Paid to be fast, judged on being right, and the thing that actually slows them down is the fear of the one true positive closed as noise.

**Secondary: SOC lead or service delivery manager.** Owns SLA, client trust, and the decision to give Clerk more rope at a given client. Does not work the queue daily but is accountable for what came out of it. This is the person a client calls when something was missed.

**Tertiary: detection engineer.** Does not live in the console but consumes what comes out of it. Every rejection reason an analyst files is an input to tuning, and this is the person who acts on it.

**Non-user beneficiary: the client's security contact.** Never logs in, and receives what Clerk drafted and an analyst approved. Their trust in the provider is built almost entirely out of those messages, which is why the summary is a product surface and not an export.

## 4 User outcomes and benefits

In the analyst's language, as jobs.

- *When a case lands from a client I do not work every day, I want to know immediately whether this is normal there, so I can stop treating every tenant as a stranger.* Benefit: context without a research detour. Mechanism: per-tenant base rate, taken from Datadog's "Past month signal count" (`benchmark.md`)
- *When Clerk has already investigated, I want to see how hard it looked before I decide how hard I look, so I spend my attention where it changes the outcome.* Benefit: attention allocated on evidence rather than on order of arrival
- *When I disagree with Clerk, I want to say so in one action and have it matter, so overriding does not feel like paperwork.* Benefit: disagreement stays cheap, which is the only condition under which it keeps happening
- *When a client asks me in April why we closed something in February, I want the answer to be the case file, not my memory.* Benefit: a defensible verdict without after-the-fact reconstruction
- *When I start a shift, I want to know where the agent has earned latitude and where it has not, so I know which clients need me and which do not.* Benefit: a shift that starts with a decision about where to look

## 5 Solutions, the MVP scope

Narrowed to three core jobs at stage 02. This is the intent, not the final list.

1. **Fleet view.** All tenants at once, showing per-client: cases waiting on a human, Clerk's current autonomy state, and whether accuracy is trending toward more latitude or less
2. **Cross-tenant case queue.** One working list, ordered by what needs a decision now. Every row carries what Clerk concluded, how much attention it will cost, and which tenant it belongs to
3. **Case file.** Clerk's assembled narrative first in prose, then the evidence, the per-tenant base rate, the provenance strip, and the signals that disagreed
4. **Verdict.** Accept, amend or reject in one keystroke, with the rejection reason routed to tuning
5. **Client summary.** Drafted by Clerk, edited by the analyst, sent under the analyst's name
6. **Autonomy state, armed and active**, in a fixed position on both screens, with override as its own named state
7. **Review lane** for cases Clerk closed on its own, sampled rather than exhaustive
8. **Append-only decision log** covering both Clerk's actions and human overrides, with the evidence snapshot as it stood at decision time

## 6 Hypotheses

Format: we believe [outcome] will be achieved if [user] attains [benefit] with [feature].

- We believe **an analyst will carry more tenants without more reversals** if the **Tier-2 analyst** attains **context on an unfamiliar client without leaving the case** with the **per-tenant base rate in the case header**
- We believe **time from case ready to verdict will fall below four minutes** if the **Tier-2 analyst** attains **the ability to see how hard Clerk looked before deciding how hard to look** with the **provenance strip: model, sources queried, time spent**
- We believe **rejections will keep being filed rather than quietly accepted** if the **Tier-2 analyst** attains **disagreement that costs one keystroke and visibly changes something** with the **one-key reject carrying a structured reason routed to detection engineering**
- We believe **agent latitude will grow on measured accuracy rather than on a forgotten setting** if the **SOC lead** attains **a view of where trust has been earned** with the **fleet view showing autonomy state and accuracy trend per tenant**
- We believe **verdicts will survive being questioned months later** if the **analyst and the SOC lead** attain **an answer that is the case file rather than a memory** with the **append-only log holding the evidence snapshot as it stood at decision time**
- We believe **an analyst will accept a Clerk output faster and with fewer second guesses** if the **Tier-2 analyst** attains **an unambiguous read of what the agent is permitted to do here and what it is doing now** with the **armed and active autonomy state in a fixed position, override included as a named state**

## 7 Riskiest assumption

**We assume that an analyst carrying 40 tenants makes faster and better-defended decisions when the agent's latitude varies per client than when it is one flat policy.**

This is the assumption the whole product rests on. Per-tenant earned autonomy is the one thing the competitor pass found nobody selling (`competitors.md`, gap 1), and it is the reason the fleet view exists, the reason the case header carries a tenant base rate, and the reason the autonomy state is on screen at all.

It could easily be false. Varying trust across 40 clients is 40 things to hold in working memory, and cognitive load is exactly what an operator in hour six does not have spare. If per-tenant autonomy reads as configuration rather than as context, the differentiator becomes overhead and Harrier is a worse Simbian with more chrome to maintain.

Note what the risk is not. It is not whether analysts want to look at the residual queue at all: Expel's entire human-led business and Simbian's own residual 8% both say someone is working it (`competitors.md`, HARD). And it is not technical. It is a value risk: whether varying trust per client helps the person or burdens them.

## 8 First test

The smallest test that can falsify it, with no engineering.

**A recall and verdict test on a clickable prototype, eight to ten SOC analysts with MDR experience, two conditions.**

- Condition A: one flat autonomy policy across all tenants
- Condition B: per-tenant autonomy shown as armed and active state in a fixed position

Each participant works twelve cases drawn from five fictional tenants with deliberately different risk profiles. Three measures:

1. **Recall.** After 60 seconds on the queue, hide it and ask: at which clients may Clerk close benign cases on its own? If they cannot answer in condition B, the display failed and the idea fails with it, because per-tenant trust that has to be looked up is not context, it is a lookup table
2. **Time to verdict**, per case, both conditions
3. **Reversal.** After all twelve verdicts, show the full evidence for each and count how many they change

The assumption survives if condition B beats condition A on recall and reversal without losing on time. It dies if B is slower and no more accurate, and in that case the honest response is to collapse autonomy to a small number of named tenant tiers rather than a continuous per-client level.

Cost: a prototype and a week of recruiting. Everything downstream of the fleet view depends on the answer, so it is worth running before stage 04 commits a screen to it.

## Open question this canvas does not resolve

The market charges for machine work: Dropzone by investigation volume, up to 4,000 full investigations per year per AI analyst; Intezer per endpoint with no volume fees (`competitors.md`). A product that deliberately routes work back to humans cannot honestly price on volume avoided.

The working position in `CLAUDE.md` is a platform fee per analyst seat plus a metered component per monitored asset, with autonomy deliberately not sold as a paid tier. That is a defensible stance but it is not evidence. It stays an open question addressed to me as product owner, and it does not block design: pricing changes who signs, not what the analyst sees on screen.
