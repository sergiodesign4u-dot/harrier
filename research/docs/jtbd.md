# Harrier: jobs to be done

Stage 02. Built on `personas.md` and `research.md`, including the follow-up research in section 8 of that file.

Format: **when [situation], I want [motivation], so that [outcome]**. Every job here is solution-agnostic: no function is named, and no single mechanism is locked in. The test applied to each one is whether a completely different product could be hired for it.

**Wording is canonical here.** `personas.md` carries the same formulations word for word. A job that exists in two editions is a job that will be built twice.

---

## A decision this file records: who owns the steps of the journey

The pipeline separates two things. **Related jobs** are separate adjacent tasks a person does in the same context alongside the main job. **The steps of the journey** toward the main job are CJM phases, and they belong to `cjm-to-be.md` at stage 02+.

**This project runs a shortened track, 01 to 07, and stage 02+ is not in it.** So the steps inside the main job, understanding whether this is normal at this client, seeing how hard the agent looked, disagreeing, would have no owner.

**Decision: the steps of the journey are owned by the user flow at stage 03a**, in `ia/flows.html`. That flow already has to describe the path to the activation node, First Verdict, so it is the natural holder. Related jobs below are therefore genuinely adjacent tasks, not stages of one task, and stage 03a should not read them as a sequence.

---

## The main job

**One main job, and it belongs to P1.**

> **When Clerk hands me a case it has already investigated, I want to decide whether its verdict holds, so that the decision is made and I can still defend it months later.**

**Persona:** P1, the adjudicator `PRIMARY`.

**Grown from:** the product definition in `research.md` section 1, the activation node First Verdict in `aarrr.md`, and the RIT finding that analysts think in incident narratives while tools explain single alerts, "we have to find a connection between the critical and the high alerts to determine if it's an incident or part of an attack process".

**Solution-agnostic check.** No function is named. Another product could be hired for this job: a peer review process, a checklist, a second analyst reading over a shoulder. The job does not lock the answer.

### P2 has a different main job, and that is recorded rather than merged

> **When I am accountable for what the agent did across all my clients, I want to know where its record has earned more latitude and where it has lost it, so that I can widen or narrow its scope without guessing.**

Two main jobs is a signal of two products, so it is named here rather than glued into one formulation.

**The reading taken.** The product has **one** main job, P1's, because P1 is primary and the activation node is First Verdict. P2's job is real and is served by the **same substrate** read at a different scale: P1 reads one case, P2 reads the trail across many. It stays one product for as long as the record underneath them is one record.

**The alternative, rejected with a reason.** Treating them as co-equal main jobs makes the information architecture build two navigations, and the product splits into a case console and a fleet console that happen to share a database.

---

## Related jobs

Four, not five. Each has its own trigger and is a task alongside the main job rather than a stage of it. A fifth was not written, because a related job added to reach a number arrives at stage 03a asking for its own screen and by then nobody can tell it from a real one.

### R1. Pick up and hand off a shift

> **When I take over a rotation somebody else was working, I want to know what changed and what is waiting on a decision, so that I do not spend my first hour rebuilding what the last shift already knew.**

**Persona:** P1.
**Grown from:** UCL handover study, where a bad handover means "you spend your first hour rediscovering context someone else already had", and where the record goes stale inside the shift. 79% of SOCs are operational 24/7 and 73% allow remote work at least some of the time [SANS SOC Survey 2025], so this handoff is written and asynchronous.

### R2. Answer for a decision made months ago

> **When a client or an auditor questions a decision made months ago, I want to show what was known at the time, so that the answer comes from the record instead of my memory.**

**Persona:** P1, and P2 when the question arrives through the client relationship.
**Grown from:** the compliance requirement in `CLAUDE.md`, an append-only log carrying the evidence snapshot as it stood at decision time, and business outcome 3 in `research.md` section 2.

### R3. Teach the agent where it was wrong

> **When Clerk got it wrong, I want my disagreement to change what it does next time, so that I am not correcting the same mistake for the rest of the quarter.**

**Persona:** P1, with the detection engineer as the recipient.
**Grown from:** design principle 3 in `CLAUDE.md` and the business outcome in `research.md` section 2, the share of rejections whose stated reason produced a tuning change within 14 days.

**Recorded tension.** The act of rejecting is a step inside the main job. What is a separate job here is the disagreement going somewhere. If stage 03a finds it cannot separate the two, this collapses back into the main job rather than earning a screen.

### R4. Tell the client what happened

> **When a client needs to hear what we did about something on their estate, I want to hand them an account they can understand without my rewriting it, so that explaining the work does not cost more than doing it.**

**Persona:** P1 writes it, P2 owns it, the client's security contact reads it and never logs in.
**Grown from:** the non-user beneficiary in `research.md` section 2, the white-labelled tenant trust report in `aarrr.md` Revenue, and the open question of whether an analyst will accept liability for a summary Clerk wrote.

---

## Emotional and social jobs

### Emotional, P1

> **When I clear a case fast, I want to feel I was thorough rather than lucky, so that speed does not cost me my confidence in my own judgment.**

**Mixed grounding.** Satisficing under volume is supported by quotes in both studies [`research.md` section 8]. The specific fear of the one true positive closed as noise remains `PREMISE`.

### Social, P1

> **When my verdict is read by the next shift or by a client, I want it to look like the work of someone who knew what they were doing, so that nobody has to redo it to be sure.**

**Grown from:** UCL, where handover quality varies widely between individuals, no organisation trains it formally, and seniors read and feed back on newer analysts' notes.

### Emotional, P2

> **When I give the agent more rope, I want to be able to point at why, so that I am not the person who guessed.**

`PREMISE` on the liability half. Consistent with the trust trigger recorded for P2 in `personas.md`.

---

## Hypotheses: jobs without data under them

These are not in the main list. They are written as jobs because that is the useful form, and each carries what would close it.

**HJ1.** "When I start a shift, I want to know where the agent has earned latitude and where it has not, so that I know how much to check." `[?]` This comes from `research.md` section 2, which is our own writing rather than an analyst's. Verify by asking three MDR analysts what they check first at shift start.

**HJ2.** "When Clerk files a verdict, I want to see how hard it looked before I decide how hard I look, so that my attention goes where the work was thin." `[?]` **This one is now contested rather than merely unverified.** The RIT study found analysts "rarely mentioned using the fine-grained feature contribution graphs or the prediction uncertainty fields in a real-time setting". That is evidence that a provenance strip may not be read at all under time pressure. **H3 in `research.md` is downgraded from unverified to contested**, and the first test is whether analysts consult effort-spent information when it is one glance away rather than one click away.

---

## What each job has to survive

The solution-agnostic test, applied to every job above: no function name appears, and no single mechanism is locked. "Know what changed and what is waiting on a decision" is a job because a handoff document, a diff view, a verbal briefing or a filtered queue could all be hired for it. "Read the handoff report" would not be a job, because the mechanism is already inside the sentence.
