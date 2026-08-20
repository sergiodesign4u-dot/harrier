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
| 26 to 40, two to six years in operations, 10-hour shifts, two monitors | `PREMISE`. `CLAUDE.md` states it as an assumed profile, not a researched one | `research.md` 2 |
| The tool is not chosen, it is issued. Sold to the provider, entered through a bake-off | Grounded in the business model, not in an analyst | `aarrr.md`, Acquisition |
| A 24/7 rotation, and a shift begins with a handoff | The rotation is `PREMISE`. That no product serves the handoff is **verified** across thirteen | `research.md` 7, Gaps |
| Secondary: SOC lead or service delivery manager, owns SLA and the decision to give Clerk more rope | `PREMISE` for the role | `research.md` 2 |
| Tertiary: detection engineer, consumes rejection reasons | `PREMISE` | `research.md` 2 |
| Non-user beneficiary: the client's security contact, never logs in, trust built entirely from the summaries received | `PREMISE` | `research.md` 2 |

### B. What drives them

| Observation | Status |
|---|---|
| Speed without being wrong. Paid to be fast, judged on being right | `PREMISE`, `CLAUDE.md` |
| The five jobs written in the analyst's words in `research.md` 2 | All derived from premise. **None heard from an analyst** |
| The market believes the driver is volume: five vendors sell 92%, 91%, 85%, 99.9% and 70% reductions | **Verified.** But this is evidence about what the **buyer** responds to, not about what the operator wants |

The last line is the important one in this block. The only hard evidence we hold about motivation is about a different person.

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
| "gives me the confidence to quickly review and close watchlist alerts" | **The only verbatim line from a working practitioner in the whole package.** And it is a fraud analyst at Alloy, not a SOC analyst |
| Trust calibration mechanisms: FMA armed and active, NWS probability of precipitation, the Lichess provenance strip, Waymo's paired absolute counts | Verified, but these are evidence **about display**, not about people |

Step 2 asks for a quote that holds the mood and forbids synthesising one. Verbatim SOC analyst quotes currently held: zero.

### E. Where they break today

**Verified:**

- Nobody publishes the residual queue. The moment the human still has to decide is unserved across thirteen products
- Expel makes the tenant a top-bar dropdown, so the analyst is inside one client at a time
- Expel's queue columns describe a record rather than a shape: Last updated, Initial lead, Last action
- Datadog puts "Past month signal count" in the signal header. One environment, not forty

**Inferences `[?]`, all five from `ux-patterns.md`:**

1. Pattern-matching before reading. `ENTRY POINT`, the most load-bearing inference in the package
2. Satisficing under volume. H4 rests on it
3. Trust set by the last failure. H5 rests on it
4. Tenant switching resets context. H2 rests on it, and it is the watch item on the chosen pattern
5. Writing for the future auditor

### Gaps: what we do not know about people

**Four open questions from stage 01 that concern people.** Three of the four are addressed to a person we do not have.

| Gap | What it changes |
|---|---|
| One cross-tenant queue, or is switching one client at a time a **safety feature** | If switching is safety rather than friction, the main dashboard stops being a merged queue |
| Who moves a tenant's autonomy level: the analyst, the SOC lead, or the client | Whether the autonomy control lives in the operator console at all |
| Whether an analyst will accept liability for a summary Clerk wrote | Whether the summary is a draft to approve or a record assembled from parts |
| Are tenants owned by an analyst, or is the queue shared | Whether the shift handoff is composed per tenant or per shift |

**Plus five behaviours**, each currently holding up a design decision: 1 and 2 hold two of the three reasons for the chosen pattern, 3 holds H5, 4 holds H2.

**Plus the profile itself:** forty tenants, age, tenure, shift length, two monitors, paid for speed and judged on being right. All of it is our decision.

**Plus the claim that the handoff is the riskiest hour**, marked `[?]`, which `research.md` names as the first thing stage 02 should ask an analyst.

**Plus the question Step 2 turns on:** we do not know how many behavioural groups are here. The analyst and the SOC lead may be one behaviour with different rights, in which case there is one persona.

**Four open questions that do not concern people stay unresolved in `research.md`:** pricing, saved views against one opinionated ordering, a slider against three named lanes, and whether MDR providers treat their tooling as a competitive secret.
