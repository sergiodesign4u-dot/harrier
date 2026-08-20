# Competitors

All facts below were read on pages opened live on 2026-08-20. Nothing here comes from model memory. Where a page did not answer a question, the line says so and carries `[?]` rather than a plausible guess.

Collection guardrail: public and pre-login pages only. No accounts were created and nothing was logged into. Working SOC consoles sit behind login across all five HARD competitors, so interface evidence comes from marketing pages, public product documentation and help centres. Where that is the source, the finding says which.

Status: HARD and SOFT collected. ASPIRATIONAL pending.

## HARD: same product, same audience

| Product | Why it is in this group | What to study | Source read 2026-08-20 |
|---|---|---|---|
| **Simbian** | The only vendor found that sells a multi-tenant AI SOC explicitly to MSSPs and MDRs. Every tenant gets a dedicated "Context Lake" holding its telemetry, escalation rules, SOPs and analyst feedback, and agents reason only on the requesting tenant's data. Claims 92% of alerts auto-resolved, one analyst covering 200 to 300% more clients, 5x lower service-delivery cost, 3 to 9x faster MTTR | How a tenant boundary is made visible, how the auto-resolve number is presented to an operator rather than to a buyer, whether trust in the agent varies per client | [simbian.ai/solutions/mssp-mdr](https://simbian.ai/solutions/mssp-mdr) |
| **Prophet Security** | Agentic AI SOC analyst, autonomous investigation and response. Deploys as a dedicated single-tenant environment, so multi-tenancy is explicitly not their shape. Sells "Autonomy on your terms": investigates autonomously from day one, acts only within approved scope, and the customer widens that scope when the track record justifies it | Earned autonomy as a mechanism, how a track record is shown, and how "nothing is learned silently" is made visible | [prophetsecurity.ai/ai-soc-analyst](https://www.prophetsecurity.ai/ai-soc-analyst) |
| **Dropzone AI** | Mirrors how a human analyst investigates and produces a report with conclusion, summary and findings. Deployed at 300+ organisations. Claims 5x faster MTTR and 85% reduction in manual alert investigation. Sells an MSSP plan with a dedicated multi-tenant environment and pooled AI analysts | The shape of the case narrative and the "Glass Box, Not Black Box" claim: every question asked, every tool queried, every finding generated | [dropzone.ai/ai-soc-analyst](https://www.dropzone.ai/ai-soc-analyst) |
| **Expel** | The incumbent human-led MDR. Its Workbench console is the reference point for what an analyst console already looks like, and the customer sees the same screen the Expel SOC analyst sees, with the same actions available. Their AI agent is named Ruxie and gathers telemetry from over 160 integrated tools before an alert reaches the queue | The real interface, available in public documentation. What the incumbent pays for having built AI on top of an older platform | [expel.com/workbench-operations-platform](https://expel.com/workbench-operations-platform/), [docs.expel.io](https://docs.expel.io/workbench-reference/investigations-and-incidents/view-an-investigation) |
| **Intezer** | AI SOC positioned as closing MDR gaps, trusted by over 150 enterprises. States the goal plainly: "human SOC teams review outcomes, not tickets", shifting humans from investigating alerts to supervising outcomes. Endpoint-based pricing with no volume fees | The explicit framing of trust as a threshold to be crossed, and what evidence they think crosses it | [intezer.com](https://intezer.com/) |

Bench, held in reserve if one of the five turns out to be entirely behind login: Critical Start SOC AI, which announced a ten-agent framework for AI-led MDR in June 2026 ([helpnetsecurity.com](https://www.helpnetsecurity.com/2026/06/03/critical-start-soc-ai/)), and Radiant Security.

### The one interface we could actually read

Expel publishes real screenshots of Workbench in its documentation, which makes it the only HARD competitor whose working console can be examined without an account. Screenshot: `screens/expel-view-an-investigation-ui-2026-08-20.jpg`.

What the screenshot shows, element by element:

- **Tenant is a dropdown in the top bar** (`PBNJ · PBnJ`). The analyst is inside one client at a time. Multi-tenancy here means switching context, not holding a fleet in one view
- **Severity counts sit in the header as five coloured chips** (`1 5 22 31 19`) above a filter row: sort, status, assignment, tag chips
- **The list reads as records, not decisions.** Row columns are Last updated, Initial lead and Last action. Nothing in a row says what the analyst should do with it
- **The case screen splits into three columns.** Left: a section list of Investigative Actions, Timeline, Involved Hosts, Data Viewer, History, Custom Rules. Middle: comments plus an Initial Lead card with alert times, vendor, source ID, message, IP flow evidence and user evidence. Right: the action log
- **Evidence is written as question and answer.** "What do we know about IP 173.50.73.31?" followed by bullets: is it a TOR node, a VPN server, a proxy, a hosting provider, what ASN, what GreyNoise says and why. This is a good pattern and worth taking
- **Above that log sit two checkboxes: "Hide Ruxie actions" and "Hide actions with no results".** The incumbent's answer to AI output is a checkbox that hides it. The agent's work is treated as clutter to filter, not as a draft to rule on
- Investigations retained for 15 months, then permanently deleted

### What every HARD competitor is saying at once

Five vendors, five different products, one shared position: **the human should stop looking at cases and start supervising outcomes.**

- Simbian: "Your analysts review the 8% that need judgment, not the 92% that don't"
- Intezer: "human SOC teams review outcomes, not tickets", "shifting humans from investigating alerts to supervising outcomes"
- Dropzone: "100% Software Execution. No vendor-provided human safety drivers behind the scenes"
- Prophet: investigates 100% of alerts autonomously from day one, actions gated by approved scope
- Expel: Ruxie enriches every alert before it reaches the queue, and its actions can be hidden with a checkbox

This is the market consensus, and it is the thing Harrier argues with. Not because autonomy is wrong, but because the consensus skips the question of who earns it and on whose behalf. An MDR provider carries liability for 40 different clients with 40 different risk appetites, and a single auto-resolve percentage cannot represent that.

### Where the honest overlap is

Prophet already sells earned autonomy: "you decide when its track record justifies widening that scope". So earned autonomy is not the differentiator, and claiming it would be dishonest. What no one found on these pages does is make that earned trust **per tenant and visible on a fleet view**, so an operator can see at a glance that the agent has earned latitude at eleven clients and none at three. Simbian isolates tenant data but sells one flat 92% across all of them. `[?]` whether any of these products has a per-tenant trust level inside the product, since the working consoles are behind login.

### Open questions from this group

| Question | Addressed to | What changes in the product when it is answered |
|---|---|---|
| Does an MDR analyst actually want one cross-tenant queue, or does switching client context deliberately, one at a time, protect them from mixing up environments? | SOC analyst with MDR experience. No such person on hand, so it stands to me as product owner until stage 02 | If context switching is a safety feature rather than friction, the main dashboard stops being one merged queue and becomes a fleet view that hands off into a single tenant |
| Who moves a tenant's autonomy level: the analyst, the SOC lead, or the client themselves? | SOC lead or service delivery manager, same caveat as above | Decides whether the autonomy control lives in the operator console at all, or only in an admin surface the analyst can read but not change |
| Is the market's per-investigation pricing (Dropzone: up to 4,000 investigations per year per AI analyst) or per-endpoint pricing (Intezer) incompatible with a product that deliberately routes more work back to humans? | Me as product owner | If volume pricing is the norm, the business model line in `CLAUDE.md` is wrong and the product has to justify why a human decision is worth paying for |

## SOFT: different product, same job to be done

The job held constant across this group: **one operator rules on a queue of machine-prepared cases across many accounts, and every verdict has to survive being questioned later.** Different industries, same shape.

| Product | Why it is in this group | What to study | Source read 2026-08-20 |
|---|---|---|---|
| **Sift** | Fraud decisioning across 700+ brands, 1.11 trillion events evaluated per year, 70% fewer manual reviews. Sells "Clearbox control": visibility into the signals, models and workflows behind every decision, with real-time control over thresholds | The evidence chip pattern and the routing model: a risk score that splits into Allow, Step-up and Block with a tunable share on each | [sift.com/platform](https://sift.com/platform/) |
| **Alloy** | Identity and financial crime decisions for 900+ banks and fintechs, 90% of account openings automated. Their AI Assistant is sold on the analyst quote "gives me the confidence to quickly review and close watchlist alerts based on the insights it provides" | Confidence framed as the thing the analyst gets, not the thing the model has. And how decisions stay defensible in front of a regulator | [alloy.com/actionable-ai](https://www.alloy.com/actionable-ai) |
| **Intercom Copilot** | AI drafts, human sends under their own name, across many customer accounts. Claims 31% agent efficiency. "Every answer links its top sources, so agents can validate them right in the inbox" | Inline citation on every generated claim, plus a separate manager dashboard that reviews how agents actually use the AI | [intercom.com/helpdesk/copilot](https://www.intercom.com/helpdesk/copilot) |
| **PagerDuty** | Operations Console for high-pressure moments across many services, alert noise cut by 91%, 750+ integrations. The closest public analogue to Harrier's main screen, and its real interface is documented publicly | Queue mechanics: saved views, live toggle, density control, and what a row is allowed to carry | [pagerduty.com/platform/aiops](https://www.pagerduty.com/platform/aiops/), [support.pagerduty.com/main/docs/operations-console](https://support.pagerduty.com/main/docs/operations-console) |

### The second interface we could read

PagerDuty publishes a real screenshot of the Operations Console. Screenshot: `screens/pagerduty-operations-console-ui-2026-08-20.jpg`.

- **Live is a toggle, not a default.** A green "Live" switch sits next to the page title. Real-time updating is opt in, so rows do not move under the cursor while an operator is reading one. Worth taking directly
- **The queue is shaped by named views, not by filters alone.** A tab row reads My teams, All, Assigned to me, Open, Acknowledged, Triggered. Under it, the active filter is spelled out as editable chips: "[Created] in last 24 hours", "[Status] is Acknowledged, Triggered", "Sorted by Created". The operator can always read why this list contains what it contains
- **Row density is a first-class control**, three icons in the top right of the table
- **Columns:** number, Status, Priority, Title, Latest alert at, Alerts, Assigned to, Assigned team, Last Note. Status and Priority are coloured pills
- **"Last Note" is the interesting column.** A free-text human field surfaced in the list, carrying lines like "running diagnostics". It is the only column that says what is happening rather than what happened, and it exists because the rest of the row could not carry it
- Sample content: `#161332 Triggered P2 AWS SECURITY ALERT: GuardDuty Finding: Connection to SSO broken`, `Alert - Synthetic failure on 10.44.55.112`

### What SOFT teaches that HARD did not

- **Sift and Alloy both frame confidence as something the operator gets, not something the model reports.** Alloy's own customer quote is "gives me the confidence to quickly review and close". None of the five HARD competitors said it that way. A confidence percentage is a property of the model; confidence to act is a property of the person, and the second one is what the interface is actually for
- **Sift shows the evidence as named chips before it shows a score.** "Impossible travel", "New device", "Email age 2d", "12 logins / min", under the heading "Why Sift decided, full signal trail". Cheap to read, hard to argue with, and it survives being pasted into an email to a client
- **A score can route instead of rank.** Sift's decision workflow takes one risk score and splits it three ways, Allow, Step-up, Block, with a tunable share on each. Harrier's per-tenant autonomy dial is the same mechanism, moved from one product-wide policy to one policy per client
- **Intercom puts a source link on every generated claim, in the inbox, at the moment of validation.** Not in an audit tab, not behind a details drawer
- **PagerDuty makes the filter legible rather than hiding it.** In a dense queue the operator's first question is not "what is here" but "what is missing from this list", and editable filter chips answer it without a trip to settings

### Open questions from this group

| Question | Addressed to | What changes in the product when it is answered |
|---|---|---|
| Should Harrier's queue be shaped by named saved views the way PagerDuty does, or by one opinionated ordering the product owns? | Me as product owner, revisited at stage 03a | Named views make the product configurable and put the burden of a good queue on the operator. One opinionated order means the product has to be right, and has to explain its ranking. This decides what the main dashboard is |
| Does a client-facing summary written by Clerk and sent under an analyst's name create liability the analyst will not accept? | SOC lead or service delivery manager. No such person on hand, so it stands to me until stage 02 | If the analyst refuses to own generated text, the client summary stops being a draft to approve and becomes a structured record the analyst assembles from parts |
| Is a per-tenant autonomy dial actually the same mechanism as Sift's Allow / Step-up / Block routing, and if so should Harrier show it as three lanes rather than one slider? | Me as product owner, resolved at wireframes | A slider says "how much do I trust this". Three lanes say "where does the work go". The second is easier to reason about under pressure and easier to audit |
