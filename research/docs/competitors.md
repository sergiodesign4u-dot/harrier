# Competitors

All facts below were read on pages opened live on 2026-08-20. Nothing here comes from model memory. Where a page did not answer a question, the line says so and carries `[?]` rather than a plausible guess.

Collection guardrail: public and pre-login pages only. No accounts were created and nothing was logged into. Working SOC consoles sit behind login across all five HARD competitors, so interface evidence comes from marketing pages, public product documentation and help centres. Where that is the source, the finding says which.

Status: all three groups collected.

## HARD: same product, same audience

| Product | Why it is in this group | What to study | Source read 2026-08-20 |
|---|---|---|---|
| **Simbian** | The only vendor found that sells a multi-tenant AI SOC explicitly to MSSPs and MDRs. Every tenant gets a dedicated "Context Lake" holding its telemetry, escalation rules, SOPs and analyst feedback, and agents reason only on the requesting tenant's data. Claims 92% of alerts auto-resolved, one analyst covering 200 to 300% more clients, 5x lower service-delivery cost, 3 to 9x faster MTTR | How a tenant boundary is made visible, how the auto-resolve number is presented to an operator rather than to a buyer, whether trust in the agent varies per client | [simbian.ai/solutions/mssp-mdr](https://simbian.ai/solutions/mssp-mdr) |
| **Prophet Security** | Agentic AI SOC analyst, autonomous investigation and response. Deploys as a dedicated single-tenant environment, so multi-tenancy is explicitly not their shape. Sells "Autonomy on your terms": investigates autonomously from day one, acts only within approved scope, and the customer widens that scope when the track record justifies it | Earned autonomy as a mechanism, how a track record is shown, and how "nothing is learned silently" is made visible | [prophetsecurity.ai/ai-soc-analyst](https://www.prophetsecurity.ai/ai-soc-analyst) |
| **Dropzone AI** | Mirrors how a human analyst investigates and produces a report with conclusion, summary and findings. Deployed at 300+ organisations. Claims 5x faster MTTR and 85% reduction in manual alert investigation. Sells an MSSP plan with a dedicated multi-tenant environment and pooled AI analysts | The shape of the case narrative and the "Glass Box, Not Black Box" claim: every question asked, every tool queried, every finding generated | [dropzone.ai/ai-soc-analyst](https://www.dropzone.ai/ai-soc-analyst) |
| **Expel** | 99.9% reduction in investigative leads from raw alerts ingested, stated in the alt text of the security operations funnel image on the Workbench page, not in body copy. The incumbent human-led MDR. Its Workbench console is the reference point for what an analyst console already looks like, and the customer sees the same screen the Expel SOC analyst sees, with the same actions available. Their AI agent is named Ruxie and gathers telemetry from over 160 integrated tools before an alert reaches the queue | The real interface, available in public documentation. What the incumbent pays for having built AI on top of an older platform | [expel.com/workbench-operations-platform](https://expel.com/workbench-operations-platform/), [docs.expel.io](https://docs.expel.io/workbench-reference/investigations-and-incidents/view-an-investigation) |
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

## ASPIRATIONAL: category benchmarks

Not competitors. Products that solve one part of Harrier's problem better than the security market does, in any category.

| Product | What we are going after | Source read 2026-08-20 |
|---|---|---|
| **Linear** | How a tool holds humans and agents in one workflow without hiding either. Now positioned as "the product development system for teams and agents" | [linear.app](https://linear.app/) |
| **Cursor** | The accept, edit or reject moment over an agent's work, and the queue of work waiting for a human decision | [cursor.com](https://cursor.com/en-US) |
| **Datadog Cloud SIEM** | The anatomy of a signal panel: what a dense investigation surface puts where, and how it answers "is this normal here" | [docs.datadoghq.com, Investigate Security Signals](https://docs.datadoghq.com/security/cloud_siem/triage_and_investigate/investigate_security_signals/) |
| **Superhuman** | Shaping a queue so the operator meets it already sorted, and keeping an agent present without blocking the work | [superhuman.com](https://superhuman.com/) |

### Cursor: the queue of work awaiting a verdict

Screenshot: `screens/cursor-ready-for-review-2026-08-20.jpg`.

- **The list is titled "READY FOR REVIEW 5".** The header counts what is waiting on a human, not what exists. A queue named after the decision it is asking for
- **Each row carries four things and stops:** title, elapsed time, a size measure (`+20 -3`, `+135 -21`), and one line of what the agent did or is asking. The size measure is the interesting one, it tells the reviewer how much attention this will cost before they open it
- **The work trail is compact verbs with objects:** `Read about-acme.md`, `Read brand-guidelines.pdf`, `Thought 6s`. Not a transcript, not a spinner
- **The agent closes with a measured outcome, not a claim:** "Fonts preload in the head, critical CSS is inlined, and I added a color-scheme meta tag so dark mode renders instantly without flash. 280ms first paint"
- **When it is unsure, it does not guess.** It stops and offers a numbered fork: "How should Mission Control be triggered? 1 Gesture, 2 Keyboard shortcut, 3 Both", with Skip and Continue. Uncertainty becomes a question with options, not a lower confidence number

### Linear: agents in the open

Screenshot: `screens/linear-home-agents-2026-08-20.jpg`.

- **"Reviews" is a top-level sidebar item**, alongside Inbox and My issues. Reviewing an agent's work is a place you go, not a mode you enter
- **Agent actions sit in the normal activity feed with a named actor:** "Linear created the issue via Slack on behalf of karri", "Triage Intelligence added the label Performance and iOS". Compare with Expel's "Hide Ruxie actions" checkbox. Same problem, opposite answer: Linear attributes the agent, Expel hides it
- **The agent's draft waits:** "Changed 2 files. Draft PR awaiting your review"
- **Effort is summarised with details on demand:** "Worked for 7s" with a disclosure caret, and a live status line "Examining the startup path..." while it runs
- The running agent carries a model badge, `Linear · Opus 5`, so the operator knows what produced the work

### Datadog: the anatomy of a signal panel

Screenshot: `screens/datadog-cloud-siem-signal-panel-2026-08-20.jpg`.

- **Base rate sits in the header:** under the title, "Past month signal count: 1 | Past day signal count: 1". Before reading anything else the analyst knows whether this is routine here. This is the single most useful thing on the panel and the closest published analogue to what Harrier needs per tenant
- **First section is "WHAT HAPPENED", in prose**, with "Detection Method: Impossible Travel" set to the right. Explanation before evidence
- **RULE DETAILS renders the query as readable clauses**, each with its own filter control: "Impossible travel activity on 2 different IPs", "for usr.name: vault-aws-secrets-backend", "and userIdentity.accessKeyId: AKIA2SRH3KYOTPOPHZ4N". The analyst can read why it fired without reading query syntax
- **Actions live in a fixed right rail titled "NEXT STEPS"**, split in two: Triage (status dropdown, Assign Signal) and Take action (Create Case, Declare Incident, Edit Suppressions, Run Workflow). State and action are separated and always in the same place
- Evidence is layered: chips for context, a sparkline plus table for IP activity, then tabs for Playbook, Logs, Related Tags, Entities, Related Signals, Suppressions, Workflows, JSON

### Superhuman: meeting a queue that is already sorted

- **Split Inbox:** the inbox surfaces what matters and filters distraction automatically, so the operator meets a shaped queue rather than shaping one
- **Daily Briefs** pull deadlines, commitments and meetings into one view "so nothing slips". The shift-start briefing pattern, which Harrier's dashboard needs and no security competitor showed
- **Inline suggestions:** "As you type, your agents underline what needs your attention. Mid-sentence. Mid-argument. Mid-mistake." The agent is present without taking the turn
- Claim: 4+ hours saved per week on email and scheduling

## Comparison matrix

Five most relevant, on the axes that decide Harrier's shape.

| | Simbian | Prophet Security | Expel | Cursor | Datadog Cloud SIEM |
|---|---|---|---|---|---|
| **Who operates it** | MSSP or MDR analyst across tenants | In-house SOC in one organisation | Expel's own analysts, client watching the same screen | Developer reviewing agent work | In-house security engineer |
| **What the core object is** | Alert auto-resolved by an agent | Alert investigated end to end | Investigation, promoted to incident | Task with a diff awaiting review | Signal, promoted to case |
| **Where the human sits** | Reviews the 8% the agent could not close | Approves the scope of actions, not each case | Works the case, client observes | Rules on every diff before it lands | Triages every signal |
| **How autonomy is set** | One platform-wide auto-resolve rate, tenant data isolated but policy shared | Per organisation, widened as the track record earns it | Auto remediations configured per organisation | Per action, developer accepts or rejects each one | Per rule, with suppressions |
| **How the agent's work is shown** | `[? behind login]` | Every question, query and reasoning step documented | An action in the log, with a checkbox to hide it | Compact verb trail, diff, measured outcome | `[?]` for the AI layer; the rule renders as readable clauses |
| **What is charged for** | `[?]`, not published | `[?]`, not published | `[?]`, not published, MDR packages by request | `[?]` not opened this session | `[?]` not opened this session |

## Three shared patterns

1. **The evidence trail is the product.** Everyone who lets an agent make a determination also publishes the trail behind it. Dropzone calls it "Glass Box, Not Black Box", Prophet documents every question and query, Sift calls it "Clearbox control", Datadog renders the rule as readable clauses. Nobody in this set defends an unexplained verdict
2. **The list is narrowing, not browsing.** PagerDuty spells the active filter out in editable chips, Superhuman shapes the inbox before the operator arrives, Cursor names the list after the decision it wants. In all three the list is a proposal about what deserves attention, not a table of everything
3. **Volume claims are the standard sales unit.** 92% auto-resolved, 91% noise cut, 85% less manual investigation, 99.9% reduction in leads, 70% fewer manual reviews. Every vendor sells the number of things the human no longer sees

## Three differences

1. **Multi-tenancy is either isolation or switching, never a fleet.** Simbian isolates each tenant's data. Expel switches tenant through a dropdown in the top bar. Neither shows the operator all clients at once as one working surface. Prophet is single-tenant by design and says so
2. **Two opposite answers on what to do with agent output.** Linear puts agent actions in the shared activity feed with a named actor. Expel gives the analyst a checkbox to hide them. Cursor makes the agent's output the thing you look at first
3. **Uncertainty is either a number or a question.** The security market reports confidence as a score. Cursor stops and asks a numbered question with options. The second is far more useful under time pressure, and nobody in security is doing it

## Our gaps, the openings we take

1. **Nobody sells a fleet view of trust.** Simbian isolates tenant data but sells one 92% across all clients. Prophet earns autonomy per organisation, but there is only one. An MDR carries 40 clients with 40 different risk appetites, and no product found shows where the agent has earned latitude and where it has not
2. **Every competitor optimises for the human seeing less. None designs the moment the human still has to decide.** The queue that remains after 92% is auto-resolved is the hardest work in the SOC, and it is what the analyst spends the whole shift on. Nobody's marketing has a screenshot of it
3. **Base rate is per environment everywhere, and it should be per tenant here.** Datadog's "Past month signal count: 1" answers "is this normal here" for one organisation. In a multi-tenant console that question has 40 different answers and is the difference between a Tuesday and an incident
4. **Nobody has moved the accept, edit or reject atom from code review into security.** Cursor solved it: a queue named for the decision, a size measure before you open, a compact work trail, and a fork when the agent is unsure. The security market is still shipping confidence percentages

## Open questions

Carried forward from all three groups, each with an owner and what changes when it is answered.

| Question | Addressed to | What changes in the product when it is answered |
|---|---|---|
| Does an MDR analyst want one cross-tenant queue, or is switching client context one at a time a safety feature that stops them mixing up environments? | SOC analyst with MDR experience. No such person on hand, so it stands to me as product owner until stage 02 | If switching is safety rather than friction, the dashboard stops being a merged queue and becomes a fleet view that hands off into a single tenant |
| Who moves a tenant's autonomy level: the analyst, the SOC lead, or the client? | SOC lead or service delivery manager, same caveat | Decides whether the autonomy control lives in the operator console at all, or only in an admin surface the analyst can read but not change |
| The market charges for machine work, by investigation volume or by endpoint. Can a product that deliberately routes work back to humans charge that way? | Me as product owner, resolved at Lean UX Canvas | If not, the business model line in `CLAUDE.md` is wrong and the product has to justify what a human decision is worth |
| Is the queue shaped by named saved views, or by one opinionated ordering the product owns and explains? | Me as product owner, revisited at stage 03a | Saved views put the burden of a good queue on the operator. One ordering means the product must be right and must show its reasoning. This decides what the main dashboard is |
| Will an analyst accept liability for a client-facing summary that Clerk wrote and they approved? | SOC lead, same caveat | If not, the summary stops being a draft to approve and becomes a structured record the analyst assembles from parts |
| Should per-tenant autonomy read as one slider or as three named lanes, the way Sift routes to Allow, Step-up and Block? | Me as product owner, resolved at wireframes | A slider asks how much you trust the agent. Lanes say where the work goes. The second is easier to hold under pressure and easier to audit |
