# Competitors

All facts below were read on pages opened live on 2026-08-20. Nothing here comes from model memory. Where a page did not answer a question, the line says so and carries `[?]` rather than a plausible guess.

Collection guardrail: public and pre-login pages only. No accounts were created and nothing was logged into. Working SOC consoles sit behind login across all five HARD competitors, so interface evidence comes from marketing pages, public product documentation and help centres. Where that is the source, the finding says which.

Status: HARD collected. SOFT and ASPIRATIONAL pending.

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
