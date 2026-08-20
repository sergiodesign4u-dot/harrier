# Harrier: personas

Stage 02. Built on `research.md`, `competitors.md` and `ux-patterns.md` from stage 01.

**One writer rule.** After this stage, only CJM Step 4 edits this file. Stages 03a, 03b, 05, 06 and 07 read it read-only and return a contradiction here as a finding rather than describing the persona their own way in their own file.

---

## Observations

What stage 01 actually established about people, and what it did not. Personas are built under this section, from this section.

### The frame that explains the rest

The twenty screenshots in `research/screens/` prove **what vendors sell to buyers**. Three of the twenty show a working console from the inside: Expel Workbench in its documentation, the PagerDuty Operations Console, and the Datadog signal panel. The other seventeen are marketing pages addressed to a SOC lead with a budget, or out-of-category reference.

**None of the twenty shows an analyst at work.** So everything stage 01 produced about the market is evidence, and everything it produced about people is a frame that marked itself honestly.

### A. Who they are and the situation they come from

| Observation | Status | Source |
|---|---|---|
| Tier-2 SOC analyst at an MDR provider, carrying 40 or more client tenants | `PREMISE` | `research.md` 1, 2 |
| Tenure two to six years | **Replaced by data.** Three to five years is the most common tenure for SOC staff; 31% stay three to five years, 4% stay ten or more [SANS 2025]. Age, monitor count and shift length stay `PREMISE`, and one UCL participant describes 12-hour shifts rather than 10 | `research.md` 8 |
| The tool is not chosen, it is issued. Sold to the provider, entered through a bake-off | Grounded in the business model, not in an analyst. The provider setting itself is real: 183 of 443 SOCs outsource alerting, meaning triage and escalation, fully or partially [SANS 2025, Figure 2] | `aarrr.md`, Acquisition; `research.md` 8 |
| A 24/7 rotation, and a shift begins with a handoff | **Sourced.** 79% of SOCs are operational 24/7 [SANS SOC Survey 2025]. That no product serves the handoff is verified across thirteen | `research.md` 7 and 8 |
| Secondary: SOC lead or service delivery manager, owns SLA and the decision to give Clerk more rope | `PREMISE` for the role | `research.md` 2 |
| Tertiary: detection engineer, consumes rejection reasons | `PREMISE` | `research.md` 2 |
| Non-user beneficiary: the client's security contact, never logs in, trust built entirely from the summaries received | `PREMISE` | `research.md` 2 |

### B. What drives them

| Observation | Status |
|---|---|
| Speed without being wrong. Paid to be fast, judged on being right | `PREMISE`, `CLAUDE.md` |
| The five jobs written in the analyst's words in `research.md` 2 | All derived from premise. **None heard from an analyst** |
| The market believes the driver is volume: five vendors sell 92%, 91%, 85%, 99.9% and 70% reductions | **Verified.** But this is evidence about what the **buyer** responds to, not about what the operator wants |

The last line was the important one in this block when it was written. Follow-up research replaced it.

**Added at stage 02, and it outranks everything else in this section.** The analyst does not arrive curious about Clerk. **AI/ML tools rank at the bottom of the SOC satisfaction list. Of the three AI/ML technologies measured, two ranked at the very bottom, including generative language tools, which scored just a 2 out of 4**, while EDR/XDR is the only technology to score above 3 out of 4, because it is fully deployed, effective and backed by training. **42% of SOCs use AI/ML tools out of the box with no customization** [SANS SOC Survey 2025]. The operator has already been sold an AI tool that underdelivered, and the tool they trust most is the boring one that works.

**And what they will accept from one is now known.** In a study of 248 surveyed and 24 interviewed SOC analysts, participants "were consistently willing to accept XAI outputs, even in cases of lower predictive accuracy, when explanations were perceived as relevant and evidence-backed" [`research.md` 8, RIT]. Trust follows evidence quality, not the accuracy number.

### C. What they fear

| Observation | Status |
|---|---|
| The fear of the one true positive closed as noise | `PREMISE`, and the single most load-bearing anxiety in the product |
| Trust is set by the last failure, not the average | Inference `[?]`, `ux-patterns.md` behaviour 3. H5 rests on it |
| The provider answers when a closed case turns out to have been an incident | `PREMISE`, stated as our reading of a managed service contract, not a legal finding |
| Whether an analyst will accept liability for a client summary Clerk wrote and they approved | Open question, addressed to a SOC lead we do not have |
| Expel ships a "Hide Ruxie actions" checkbox | **Verified.** The strongest real evidence in the package about how humans react to agent output: somebody at Expel asked to be able to hide it |

### D. How they choose and who they trust

| Observation | Status |
|---|---|
| Outside security, confidence is a property of the operator. Inside security it is a property of the model | **Verified**, Alloy and Sift "Clearbox control" |
| "gives me the confidence to quickly review and close watchlist alerts" | Alloy customer quote. A fraud analyst, not a SOC analyst |
| "During triage, I ignore lengthy explanations. What I need most are straightforward next steps" | **Verbatim SOC analyst**, RIT study, `research.md` 8 |
| "I'd focus on the indicators, like where the email came from, and then want to see immediate actions; diving into deep algorithm explanations slows me down" | **Verbatim SOC analyst**, RIT |
| An explanation is more meaningful "if I have some context about how that percentage was generated" | **Verbatim SOC analyst**, RIT. Design principle 2 stated by the operator rather than inferred by us |
| A popular detection platform "doesn't have the organizational perspective... if that is there then it is like wonders" | **Verbatim SOC analyst**, RIT. This is the evidence H2 was missing |
| "Over-utilised analysts are just gonna be ready to just get out and head home. So they just wanna get it done fast, and rush" | **Verbatim incident responder**, UCL handover study |
| Trust calibration mechanisms: FMA armed and active, NWS probability of precipitation, the Lichess provenance strip, Waymo's paired absolute counts | Verified, but these are evidence **about display**, not about people |

Step 2 asks for a quote that holds the mood and forbids synthesising one. **Verbatim SOC analyst quotes now held: five**, from two studies of practitioners. Full context in `research.md`, section 8.

### E. Where they break today

**Verified:**

- Nobody publishes the residual queue. The moment the human still has to decide is unserved across thirteen products
- Expel makes the tenant a top-bar dropdown, so the analyst is inside one client at a time
- Expel's queue columns describe a record rather than a shape: Last updated, Initial lead, Last action
- Datadog puts "Past month signal count" in the signal header. One environment, not forty

**The five behaviours from `ux-patterns.md`, after follow-up research:**

1. Pattern-matching before reading. **Still `[?]`.** The most load-bearing unverified claim in the package, and three design decisions rest on it
2. Satisficing under volume. **Supported** by analyst quotes in both studies. H4 no longer rests on an inference
3. Trust set by the last failure. **Still `[?]` as stated**, but the starting level is now known and it is low
4. Tenant switching resets context. **Supported in structure, not in cost.** Microsoft's cross-tenant console carries Tenant name as a row column, yet opens the real work "in a new tab for that tenant" and refuses to assign across tenants
5. Writing for the future auditor. **Corrected.** The reader is the next analyst, not an auditor

**Added at stage 02:** analysts think in incident narratives while tools explain single alerts. "As an analyst we have to find a connection between the critical and the high alerts to determine if it's an incident or part of an attack process" [RIT]. That correlation is what Clerk is for, which makes it the closest thing to a validation of the product premise found in any source.

**Also added:** explanation depth needs to vary by **experience**, not only by role. Participants with three or more years found step-by-step guidance irrelevant while agreeing it helps newcomers, and access level changes what a person can see at all: "Based on their access, the information they can see changes" [RIT]. This is a behavioural split, and Step 2 has to decide whether it makes a second persona.

### Gaps: what we do not know about people

**Four open questions from stage 01 that concern people.** Three of the four are addressed to a person we do not have.

| Gap | What it changes |
|---|---|
| One cross-tenant queue, or is switching one client at a time a **safety feature** | **Partly answered.** Microsoft ships a merged cross-tenant queue today, with Tenant name and Workspaces as row columns. Its limit is where the work goes deep: "Open incident page to open the incident in a new tab for that tenant", and "Currently, you can only assign multiple incidents from same tenant". So the merged list is for triage, the tenant console is for work. Whether that boundary is a safety feature or a platform limitation is still `[?]` |
| Who moves a tenant's autonomy level: the analyst, the SOC lead, or the client | Whether the autonomy control lives in the operator console at all |
| Whether an analyst will accept liability for a summary Clerk wrote | Whether the summary is a draft to approve or a record assembled from parts |
| Are tenants owned by an analyst, or is the queue shared | Whether the shift handoff is composed per tenant or per shift |

**Plus behaviour 1, pattern-matching before reading**, which after follow-up research is the only one of the five still holding a design decision on nothing. It carries reason 1 of the chosen pattern and it decides what the first glance has to deliver.

**Plus what is left of the profile:** forty tenants per analyst, age, shift length and two monitors. Tenure is now sourced. No public source found gives an analyst-to-client ratio at an MDR provider, so forty stays `PREMISE` and is named as such wherever it appears.

**Plus the claim that the handoff is the riskiest hour**, still `[?]`. What follow-up research did establish is that the handoff is real, written, remote, untrained and highly variable between individuals, and that two of our stage 01 decisions about it were wrong. Details in `research.md`, section 8.

**Plus the question Step 2 turns on:** we do not know how many behavioural groups are here. The analyst and the SOC lead may be one behaviour with different rights, in which case there is one persona.

**Four open questions that do not concern people stay unresolved in `research.md`:** pricing, saved views against one opinionated ordering, a slider against three named lanes, and whether MDR providers treat their tooling as a competitive secret.

---

## How many personas the data gives

**Two.** A third behavioural group is named below and deliberately not made a persona, with the evidence for it and the consequence if that call is wrong. Two further groups, the detection engineer and the client's security contact, fail the ballast test: neither has a screen in this MVP.

Personas are split by behaviour. A demographic fact appears only when it comes with a consequence for the design.

---

## P1. The adjudicator `PRIMARY`

**Rasha Idrissi, Tier-2 analyst at an MDR provider, four years in operations.**

### Facts that change the design

| Fact | What it changes |
|---|---|
| Four years in operations, the most common tenure band, three to five years, at 31% [SANS SOC Survey 2025] | RIT found that analysts with three or more years want the system to augment their speed rather than reiterate fundamentals. **Clerk does not explain what she already knows** |
| A 24/7 rotation [79% of SOCs, SANS], 12-hour shifts [UCL participant], remote at least part of the time [73%, SANS] | The handoff is written and asynchronous. It is the first and last screen of her shift, not an accessory to the product |
| 40 or more tenants `PREMISE` | Every queue row has to carry which client it belongs to |

### Context and trigger

*Answers: where the flow starts and what the first screen is.*

A shift starts with somebody else's unfinished work. She did not choose this tool; the provider bought it and entered through a bake-off (`aarrr.md`, Acquisition).

### Jobs, draft

*Answers: which functions are needed and what enters the MVP. Canonical wording is set at Step 3 and replaces this list.*

- Rule on the case in front of her fast enough to keep up and well enough to defend later
- Know whether this is normal at **this** client
- Disagree with Clerk cheaply and have the disagreement matter
- Pick up a shift without rediscovering context
- Answer a question in April about a decision made in February

### Pains

*Answers: what the product removes, and how we will know it did.*

- The explanation is either missing or too long. An analyst: "During triage, I ignore lengthy explanations. What I need most are straightforward next steps." And: "diving into deep algorithm explanations slows me down" [RIT]
- A confidence percentage with no account of where it came from. An explanation is more meaningful "if I have some context about how that percentage was generated" [RIT]
- No organisational perspective. A detection platform "doesn't have the organizational perspective... if that is there then it is like wonders" [RIT]
- Tools explain a single alert while she needs the incident: "we have to find a connection between the critical and the high alerts to determine if it's an incident or part of an attack process" [RIT]
- The tenant boundary is hard in the tool she uses today. Real work opens "in a new tab for that tenant", and "you can only assign multiple incidents from same tenant" [Microsoft Defender multitenant management]
- The end of the shift corrupts the record: "over-utilised analysts are just gonna be ready to just get out and head home. So they just wanna get it done fast, and rush" [UCL]

### Trust triggers

*Answers: what to show as proof of trustworthiness, and where.*

**She starts sceptical, and that is measured.** AI/ML tools rank at the bottom of the SOC satisfaction list; of three AI/ML technologies measured two rank at the very bottom and generative language tools score 2 out of 4, while EDR/XDR is the only technology above 3 out of 4 because it is fully deployed, effective and backed by training. 42% of SOCs run AI/ML out of the box with no customization [SANS].

What flips her is not accuracy. Participants were "consistently willing to accept XAI outputs, even in cases of lower predictive accuracy, when explanations were perceived as relevant and evidence-backed" [RIT].

And there is a ceiling: more explanation can **reduce** trust once it introduces confusion or doubt [RIT, the trust-explainability curve].

**Design consequence.** The first thing Clerk shows must be the cheapest correct thing. Depth is one keystroke away, not on screen.

### Quote that holds the tone

> "During triage, I ignore lengthy explanations. What I need most are straightforward next steps."

SOC analyst, RIT study, 24 in-depth interviews. Verbatim, not synthesised.

### Open, as hypotheses

- Assume she recognises the shape of a case before reading it. Verify with a timed first-glance test on a queue row with the detail hidden. `[?]` This is behaviour 1, and three design decisions rest on it
- Assume 40 or more tenants per analyst. Verify by asking three MDR providers their analyst-to-client ratio. `PREMISE`
- Assume tenant switching costs her measurably. Verify by timing verdicts on familiar against unfamiliar tenants. `[?]`

---

## P2. The rope-holder `SECONDARY`

**Tomas Berg, SOC lead and service delivery manager.**

### The behaviour that separates them from P1

They do not **consume** Clerk's explanation, they **audit** it. And they decide where the agent earns more latitude. This is a different job, not a different job title.

| Evidence | Source |
|---|---|
| Analysts with three or more years find step-by-step remediation guidance irrelevant and prefer the system to augment speed | RIT, Finding 4 |
| Access level changes what a person can see at all: "Based on their access, the information they can see changes... we want to add all of that into a summarized version" | RIT |
| One participant owns their team's handover procedure and rebuilt shift cycles to put more people on the busiest part of the day; another organisation limits handover writing to senior staff | UCL |
| 69% of SOCs still report metrics manually. This is the person who does it | SANS |
| 62% of SOC professionals say their organisation is not doing enough to retain top talent | SANS |

### Trust trigger

They carry the liability `PREMISE`. They will widen latitude on a record they can show a client, not on a vendor's published rate.

### Quote that holds the tone

`[?]` **None held.** No verbatim line from a SOC lead exists in our sources, and synthesising one is forbidden.

### Open, as a hypothesis about whether this persona uses the product at all

- Assume the autonomy control lives in the operator console and only the lead can move it. Verify by asking three SOC leads who they would let move it. `[?]`

This is open question 2 from stage 01. **Whether P2 is a user of this console is unresolved**, and that is the largest single risk carried into stage 03a.

---

## Named and deliberately not a persona

**1. The junior, or Tier-1 analyst.** The evidence exists: an explainable dashboard could serve as a learning aid by "talking to [them] like another colleague" [RIT], and new analysts writing handovers "talk about anything and everything that's happened" [UCL].

Not a persona, because Harrier's premise is the **residual queue**: the work that survives auto-resolution is precisely the work that needs judgment.

**Consequence if this call is wrong.** If MDR providers staff the residual queue with juniors, the product needs a teaching mode, and P1's pain "do not explain what I already know" inverts into its opposite. Recorded as a risk. No design is built for it.

**2. The detection engineer.** Consumes rejection reasons. No screen in this MVP. Consequence: the rejection interface has to emit something machine-routable, even though we build no surface for the person who receives it.

**3. The client's security contact.** Never logs in `PREMISE`. Their trust is built almost entirely out of the summaries they receive. Consequence: the summary is a product surface even though its reader is not a user.

---

## What `PRIMARY` does

Not what it means. What it does, because stages 03a, 04 and 07 read this line.

> **A conflict between decisions is resolved in favour of P1.** She carries the higher risk and holds fewer levers. P2's scenarios must work, but the interface is not built around them.

**Criterion used to choose.** Primary is the person whose needs are not met by a design built for the other, and who stands closest to the activation node.

**Why P1.** The activation node is First Verdict (`aarrr.md`), and the case file, the product's centre of gravity, is hers. A surface built for P1 serves P2; the reverse does not hold. This also settles what the main dashboard is: **the queue, with the fleet as the resting state of the detail pane**, rather than a fleet view with the queue underneath it.

**Why P2 is secondary rather than absent.** P2 owns the SLA and the decision to widen Clerk's latitude, which is the differentiator itself. They are secondary because their decisions are periodic and considered, while P1 decides continuously under time pressure, and an interface tuned for the second case survives the first better than the reverse.
