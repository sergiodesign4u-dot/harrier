# Harrier: information architecture, base layer

Stage 03a. Built on `research/docs/personas.md`, `research/docs/jtbd.md` and `research/docs/research.md`.

**What this file is not.** This is the **concept** layer: entities, screens grouped by intent, a navigation model and a traceability matrix. Per-page specification, node types and dialogue states belong to the detail layer at stage 03b and are deliberately absent here.

**One input is missing and the substitution is declared.** The pipeline traces a step-screen of the main path to a phase in `cjm-to-be.md`, so that a step is not mistaken for an orphan. This project runs a shortened track and CJM is not in it. **Step-screens therefore trace to a node in `flows.md` instead**, which is produced at Step 4, before the matrix at Step 5. Coverage is still proven; the document proving it is different. What is genuinely lost is the emotional curve per phase, so the emotional and social table rests on `personas.md` and the two practitioner studies rather than on phase data.

---

## Entities

Objects before screens. Screens only display objects, and objects grow out of jobs. Every entity below names the job that produces it; an object that no job requires is not invented here.

### 1. Case

The centre of gravity. `aarrr.md` records that every stage of the funnel is answered by this same object: replay shows a queue of them, activation is ruling on one, the trust report aggregates them, referral forwards one.

**Parts:** identifier, tenant, alert class and the shape of the case, Clerk's narrative in prose, the evidence set, the proposed verdict, a confidence that names its claim and scope and window, a provenance strip of effort spent, the per-tenant base rate, status, timestamps.

**Job:** MAIN. **Related to:** Tenant, Signal, Evidence item, Verdict.

### 2. Signal

The raw alert Clerk correlates into a case.

**Parts:** source tool, rule name, the entity involved (asset or account), time, severity as reported, **and whether it agreed or disagreed with the verdict**.

**Job:** MAIN, through the RIT finding that analysts think in incident narratives while tools explain single alerts: "we have to find a connection between the critical and the high alerts to determine if it's an incident or part of an attack process".

**This object deliberately has no screen of its own.** `CLAUDE.md` states that the analyst never works raw alerts. The second pass at Step 2, the one that checks every object has somewhere to be seen, has to stumble on this deliberately rather than quietly.

### 3. Evidence item

One unit of evidence inside a case.

**Parts:** what it is, where it came from, **which claim it supports**, whether it agreed, and whether it is something Clerk looked for and did not find.

**Job:** MAIN. **Related to:** Case, Decision log entry.

Separated from Case rather than left as a field, because design principle 2 with its ceiling, cheapest correct thing first and depth one key away, is a rule about how exactly this object is rendered.

### 4. Verdict

The human ruling.

**Parts:** outcome (accept, amend or reject), the analyst, timestamp, the reason when rejected, the edited narrative when amended, **and the evidence snapshot as it stood at decision time**.

**Jobs:** MAIN, R2, R3.

### 5. Tenant

The client.

**Parts:** name, Clerk's current autonomy state here, accuracy trend, base rates per signal class, assets, security contact.

**Jobs:** P2-MAIN, MAIN (the base rate in the case header), R4.

Design principle 4: the same signal is a Tuesday at one client and an incident at another.

### 6. Autonomy grant

Not a field on Tenant. Its own object, because it carries a history and a reason.

**Parts:** tenant, **action class**, the named lane, when it changed, **on what evidence**, who changed it.

**Jobs:** P2-MAIN, MAIN (the state in a fixed position).

The market confirmed the shape rather than the novelty: Simbian ships four named lanes with progression that "is not linear and not global", per action and per alert type. Nothing found ships a slider.

### 7. Shift handoff

**Parts:** the shift window, who hands over and who takes it, **notes that accumulate through the shift**, pointers to cases, what moved, what waits on a decision, what Clerk closed on its own, which tenants changed autonomy and on what evidence.

**Job:** R1.

Two constraints from the evidence, and both are properties of the object rather than of a screen: it accumulates through the shift and is **closed** at the end rather than written at the end, and it is **signposting into cases, not a document**.

### 8. Rejection reason

The tuning signal.

**Parts:** the case, what Clerk got wrong, the class of error, where it was routed, **and whether a tuning change followed and when**.

**Job:** R3. **Recipient:** the detection engineer, who is not a user.

The last part is not decoration. The business outcome in `research.md` is the share of rejections whose stated reason produced a tuning change within 14 days. Without it, design principle 3 only performs listening.

### 9. Client summary

**Parts:** tenant, period or incident, Clerk's draft, the analyst's edits, sent state, who approved it.

**Job:** R4.

### 10. Decision log entry

**Parts:** actor (Clerk or human), action, timestamp, **the evidence snapshot as it stood at that moment**. Append-only.

**Job:** R2.

Not our choice: a requirement in `CLAUDE.md`, Geo and compliance.

### 11. Analyst

Kept minimal.

**Parts:** name, shift, assigned cases or queue.

**Jobs:** R1, R2 (who ruled), MAIN (assignment).

---

## Under question: objects with no job

**Review sample.** The set of cases Clerk closed on its own, sampled for a human to check. **No job exists**, and that was already recorded at stage 02. The need is real and written in `aarrr.md`, knowing what the agent did while nobody was watching, but nobody formulated the work. The audit side of this object is covered by P2-MAIN; the analyst side is covered by nothing. The fork is resolved at Step 5: either a job is formulated, or the object is not built.

**Saved view.** A stored slice of the queue. `[?]` No formulated job requires it. The market says both forms coexist, since Defender ships an opinionated ordering that explains its own reasoning **and** saved filter sets. We have no job under it, so it stays out of the main list.

**Detection rule.** The detection engineer's object. That person is a non-user with no screen in this MVP. It exists as the **recipient** of entity 8 rather than as something Rasha works with.

---

## Two things this inventory already shows

**Entity 2 has no screen on purpose.** That is a product decision from `CLAUDE.md`, not an omission. The object pass at Step 2 will hit it, and it should hit it consciously.

**Eleven entities against a project boundary of roughly nine screens.** Objects and screens are not one to one, but it does mean several objects must share a screen. Step 2 has to name which ones, rather than opening a screen per object.
