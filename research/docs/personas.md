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
