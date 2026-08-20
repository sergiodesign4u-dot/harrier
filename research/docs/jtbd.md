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
**Grown from:** the UCL handover study. Three of its findings carry this job. An incoming team on a long incident faces an accumulating pile: "say there's been [an incident across] three days and three nights. Unless you go back and read, what, 6 handovers? You don't actually have that context of the week." The pile then stops being read: "The first day, second day, third day, they will start to ignore [the older handovers]." And the whole thing depends on one person's diligence: "it's still reliant on the person writing the handover. In a way, it's not foolproof: if they don't put down what they should be putting down, then the next team isn't aware, right?" 79% of SOCs are operational 24/7 [SANS SOC Survey 2025], and among the UCL participants who work remotely the handover has permanently replaced the verbal one.

**Corrected at Step 5.** This job originally cited the UCL study for the phrase "you spend your first hour rediscovering context someone else already had". **That phrase does not appear in the paper.** It came from a search-result summary of a blog that was never opened. The job survives on the real quotes above; the attribution did not.

### R2. Answer for a decision made months ago

> **When a client or an auditor questions a decision made months ago, I want to show what was known at the time, so that the answer comes from the record instead of my memory.**

**Persona:** P1, and P2 when the question arrives through the client relationship.
**Grown from:** the compliance requirement in `CLAUDE.md`, an append-only log carrying the evidence snapshot as it stood at decision time, and business outcome 3 in `research.md` section 2.

### R3. Teach the agent where it was wrong

> **When Clerk got it wrong, I want my disagreement to change what it does next time, so that I stop meeting the same mistake.**

**Persona:** P1, with the detection engineer as the recipient.
**Grown from:** design principle 3 in `CLAUDE.md` and the business outcome in `research.md` section 2, the share of rejections whose stated reason produced a tuning change within 14 days.

**Corrected at Step 5.** The first wording said "for the rest of the quarter". The only horizon the source carries is 14 days, so the invented one was removed rather than replaced with another number.

**Recorded tension.** The act of rejecting is a step inside the main job. What is a separate job here is the disagreement going somewhere. If stage 03a finds it cannot separate the two, this collapses back into the main job rather than earning a screen.

### R4. Tell the client what happened

> **When a client needs to hear what we did about something on their estate, I want to give them an account they can understand, so that the work speaks for itself.**

**Persona:** P1 writes it, P2 owns it, the client's security contact reads it and never logs in.
**Grown from:** the non-user beneficiary in `research.md` section 2, the white-labelled tenant trust report in `aarrr.md` Revenue, and the open question of whether an analyst will accept liability for a summary Clerk wrote.

**Corrected at Step 5.** The first wording carried two motivations the source does not: "without my rewriting it" and "explaining the work does not cost more than doing it". Both were assumptions about effort, and both were removed. Whether rewriting is the cost that matters here is `[?]`, and it is the same open question as liability for the summary.

---

## Emotional and social jobs

### Emotional, P1

> **When I clear a case fast, I want to feel I was thorough rather than lucky, so that speed does not cost me my confidence in my own judgment.**

**Mixed grounding.** Satisficing under volume is supported by quotes in both studies [`research.md` section 8]. The specific fear of the one true positive closed as noise remains `PREMISE`.

### Social, P1

> **When my verdict is read by the next shift or by a client, I want it to look like the work of someone who knew what they were doing, so that nobody has to redo it to be sure.**

**Grown from:** UCL, where handover quality varies widely between individuals, no organisation trains it formally, and seniors read and feed back on newer analysts' notes.

**Partly ours.** The source establishes that the record is read by colleagues and judged by seniors. **It does not establish that the analyst is motivated by how competent the record makes them look** `[?]`. Assume the reputational motive; verify by asking analysts whether they write differently when they know who reads it.

### Emotional, P2

> **When I give the agent more rope, I want to be able to point at why, so that I am not the person who guessed.**

`PREMISE` on the liability half. Consistent with the trust trigger recorded for P2 in `personas.md`.

---

## Hypotheses: jobs without data under them

These are not in the main list. They are written as jobs because that is the useful form, and each carries what would close it.

**HJ1.** **Persona:** P1. "When I start a shift, I want to know where the agent has earned latitude and where it has not, so that I know how much to check." `[?]` This comes from `research.md` section 2, which is our own writing rather than an analyst's. Verify by asking three MDR analysts what they check first at shift start.

**HJ2.** **Persona:** P1. "When Clerk files a verdict, I want to see how hard it looked before I decide how hard I look, so that my attention goes where the work was thin." `[?]` **This one is now contested rather than merely unverified.** The RIT study found analysts "rarely mentioned using the fine-grained feature contribution graphs or the prediction uncertainty fields in a real-time setting". That is evidence that a provenance strip may not be read at all under time pressure. **H3 in `research.md` is downgraded from unverified to contested**, and the first test is whether analysts consult effort-spent information when it is one glance away rather than one click away.

---

## What each job has to survive

The solution-agnostic test, applied to every job above: no function name appears, and no single mechanism is locked. "Know what changed and what is waiting on a decision" is a job because a handoff document, a diff view, a verbal briefing or a filtered queue could all be hired for it. "Read the handoff report" would not be a job, because the mechanism is already inside the sentence.

---

## The matrix

Rows are jobs, columns are personas, the cell is importance from 1 to 3.

**Importance is inferred, not measured.** No importance number exists in `research.md`, so each row names the research signal it rests on. Where there is no signal, the cell is `[?]` rather than an average.

Coverage in the COMPETITORS column is derived from the matrix axes and the gaps section of `competitors.md`, not from a per-job table invented for this file.

| Job | P1 | P2 | Signal behind the importance | FUNCTION, from the inventory | COMPETITORS |
|---|---|---|---|---|---|
| **MAIN.** Decide whether Clerk's verdict holds | **3** | 1 | P1: this is her whole shift, and the activation node is First Verdict. P2: reads outcomes rather than adjudicating each case | 3 Case file, 4 Verdict, 6 Autonomy state | **No.** Gap 2: nobody publishes the residual queue. Expel publishes a queue but is human-led |
| **R1.** Pick up and hand off a shift | **3** | 2 | P1: UCL, an incoming team must read six handover reports to hold three days of context, and older reports stop being read; 79% of SOCs run 24/7. P2: owns coverage, and one UCL participant rebuilt shift cycles to cover the busiest hours | **empty**, see the finding below | **No.** Gap 6, verified across thirteen products |
| **R2.** Answer for a decision made months ago | 2 | **3** | P1: rare per case, but it is why the record exists at all. P2: the question arrives through the client relationship and the SLA sits with them | 8 Append-only decision log | **Partly.** An evidence trail is table stakes and every competitor publishes one. Whether any holds a point-in-time snapshot is `[?]`, the consoles are behind login |
| **R3.** Teach the agent where it was wrong | 2 | **3** | P1: under satisficing this happens only if it is cheap. P2: tuning quality is what lets them widen latitude | 4 Verdict, with the rejection reason routed to tuning | **Partly.** Dropzone shows a context-memory update in a worked narrative and Prophet says "nothing is learned silently". Whether a human rejection routes to tuning is `[?]` |
| **R4.** Tell the client what happened | 2 | **3** | P1: writes it. P2: owns it, and it is the Revenue lever in `aarrr.md` | 5 Client summary | **Partly.** At Expel the client sees the same screen as the analyst. A summary drafted by the agent and sent under the analyst's name is `[?]` |
| **P2-MAIN.** Know where the record has earned latitude | **`[?]`** | **3** | P1: `[?]` **whether an analyst needs the fleet at all is unverified.** HJ1 is our own writing, not an analyst's. P2: this is the job | 1 Fleet view, 6 Autonomy state, 7 Review lane | **No.** Gap 1: nobody sells a fleet view of trust. This is the differentiator |

**Emotional and social jobs are not scored here.** They are satisfied by *how* the functional jobs are done rather than by functions of their own, and a row with no FUNCTION cell would only be pretending to be a job.

---

## Conclusion 1: the MVP core

Derived from the matrix. The rule is: important to the primary persona **and** not closed by the market.

**Two jobs qualify honestly, not three.**

| In the core | The cell that proves it |
|---|---|
| **MAIN** | P1 = 3, COMPETITORS = No |
| **R1, the shift** | P1 = 3, COMPETITORS = No. Gap 6 is verified across all thirteen products, as is gap 2 behind the main job |

The third slot does not qualify under the rule, and it is not filled with invented importance. It enters as a **deliberate exception**, named as one:

> **P2-MAIN, the fleet view of trust, enters the core as an exception.** Not on importance to the primary persona, which is `[?]`.
>
> **Corrected at Step 5.** The first version justified this by the rule binding stage 04 to carry the strategic dimension on the reference screen. That rule governs what stage 04 must **show**, not what belongs in an MVP core, so the chain did not reach the conclusion.
>
> **The reasoning that does reach it.** The strategic dimension recorded in `CLAUDE.md` is calibrated trust that is earned and visible per tenant, and gap 1 says nobody sells it. A core built only of MAIN and R1 is a good residual queue with a good handoff, and it is a product the market gap does not distinguish. The fleet job is what the differentiation rests on, so it enters the core **as the bet**, and it is named as a bet rather than as a qualified job.
>
> **This is H1, the riskiest hypothesis in the project.** The MVP core therefore holds the risk in the open rather than hiding it. If H1 falls, this is the job that leaves the core, and the product becomes a better residual queue rather than a fleet of earned trust.

**Why the rest are out, and why little is lost:**

- **R3** does not need its own slot. Its function is **4 Verdict**, which is already in the core through MAIN. Design principle 3 does not end up without a feature behind it
- **R2** likewise. Its function, **8 Append-only decision log**, is a compliance requirement in `CLAUDE.md` and ships regardless of core status
- **R4** is the only one genuinely deferred. The client summary is a Revenue lever rather than something the analyst does every shift

---

## Conclusion 2: orphan features

**A different input and a different check.** This is not derived from the matrix. It is the eight features in `lean-ux-canvas.md` section 5 checked one by one against the jobs formulated above. Features outside that inventory are not invented here.

| # | Feature | Job it serves |
|---|---|---|
| 1 | Fleet view | P2-MAIN |
| 2 | Cross-tenant case queue | MAIN, R1 |
| 3 | Case file | MAIN |
| 4 | Verdict | MAIN, R3 |
| 5 | Client summary | R4 |
| 6 | Autonomy state, armed and active | MAIN, P2-MAIN |
| 7 | Review lane for cases Clerk closed on its own, sampled rather than exhaustive | P2-MAIN, **on the audit side only**. See the correction below |
| 8 | Append-only decision log | R2 |

**Corrected at Step 5.** The first version of this check called feature 7 an orphan that "appears in no FUNCTION cell". **The matrix two sections above assigns it to P2-MAIN**, so the file contradicted itself, and the contradiction was the only thing holding up the claim below it.

**No orphan features.** All eight map to a formulated job.

**What survives of the finding, in a smaller and more accurate form.** Feature 7 maps to P2-MAIN on the **audit** side: sampling what the agent closed alone is how a record earns latitude. Its **analyst** side, an operator checking work she never saw, maps to no job anybody formulated. The need is written in `aarrr.md` as knowing what the agent did while nobody was watching. Either that job is formulated at stage 03a, or the analyst-side review lane is not built.

**Idle control, reported honestly.** This check returned **zero** orphans. A check that returns zero proves nothing about itself. The only thing that tested it here was the false positive it produced, and that was caught by the critique rather than by the check.

**The mirror finding.** R1 has a job, has a product decision in `aarrr.md` for the shift handoff, and has **no line in the canonical list of eight**. One feature without a job, one job without a feature, both gaps in the same file.

**A third defect found by this cross-check.** `CLAUDE.md` points the MVP scope at "`research/docs/research.md`, section 2, Solutions". No section called Solutions exists anywhere in `research.md`. The real list is `lean-ux-canvas.md` section 5. The pointer is corrected at the closing ritual.

---

## Narrowing, not adding

The stage 01 scope was eight features held as intent. It is now **three jobs in the core**, carrying features 1, 2, 3, 4, 6 and 8.

Deferred: 5, the client summary. Held pending a decision: 7, the review lane.

---

## Assumptions and open risks

Stage 02, Step 5. Critique on two instruments, sets taken independently and merged afterwards. Claude ran a pass on broken chains from data to conclusion; Codex ran read-only over `personas.md` and `jtbd.md` against `research.md`, looking for claims without support, drift from the source, and orphans in both directions. Neither saw the other's table before both were complete.

**Twenty findings, one overlap, nineteen distinct.** Nothing is fixed yet: fixes happen at Step 6 and only after re-reading the place in the file.

### First, the divergences

The most valuable thing a second instrument gives at this stage is a line one instrument called confirmed and the other could not find support for. Four such lines, all four resolved in Codex's favour.

| Line | Claude's verdict when writing | Codex | Resolution |
|---|---|---|---|
| `personas.md` "It is the first and last screen of her shift" | Treated as a consequence of the 24/7 and remote-work data | No support. `research.md` establishes 24/7, remote work and a written handoff, and says nothing about first or last screens | **Codex is right.** This is a design decision wearing the clothes of a finding |
| `personas.md` "69% of SOCs still report metrics manually. This is the person who does it" | Treated as sourced from SANS | The figure appears nowhere in `research.md`, and nothing says the lead is the one who does it | **Both halves stand.** The figure is real and was read in the SANS PDF, but it never entered `research.md`, so inside this repository it has no chain. The attribution to the lead is mine and has no source at all |
| `personas.md` "62% of SOC professionals say their organisation is not doing enough to retain top talent" | Treated as sourced from SANS | The figure appears nowhere in `research.md` | **Same class.** Real number, missing chain |
| `jtbd.md` R4 "without my rewriting it, so that explaining the work does not cost more than doing it" | Treated as grounded in the non-user beneficiary | Neither motivation exists in the source; the cited support only establishes that a beneficiary reads summaries, and that liability for them is explicitly open | **Codex is right.** Two motivations invented inside a job formulation |

### The merged table

| # | Class | Where | Finding | Who found it |
|---|---|---|---|---|
| 1 | Source that does not exist | `jtbd.md:54`, `jtbd.md:130` | "you spend your first hour rediscovering context someone else already had" is attributed to the UCL handover study. **The phrase does not appear in that paper**: "first hour", "rediscovering context" and "rediscover" are all absent. It came from a search-result summary of a blog that was never opened | **Both**. Codex saw a quote with no support in `research.md`; Claude verified against the paper itself |
| 2 | File contradicts itself | `jtbd.md:134` against `jtbd.md:177` | The matrix lists feature 7, the review lane, in the FUNCTION cell for P2-MAIN. The orphan check then calls the same feature an orphan that "appears in no FUNCTION cell". One of the two is wrong, **and the idle control claim rests on it** | Claude |
| 3 | One piece of evidence doing two contradictory jobs | `personas.md`, P1 facts and P2 behaviour | RIT Finding 4, analysts with three or more years find step-by-step guidance irrelevant, is used both to characterise P1 (four years) and to separate P2 from P1. If it describes P1 it cannot be what distinguishes P2. **P2's core claim, that they audit the explanation rather than consume it, has no source at all** | Claude |
| 4 | Conclusion stronger than the data | `personas.md`, Observations B | "She starts sceptical, and that is measured." SANS measures satisfaction ratings for a tool category across SOCs, not an individual's prior attitude toward a new tool. Direction holds, strength does not, and this line was marked as outranking everything else in the section | Claude |
| 5 | One case rendered as a role attribute | `personas.md`, P1 facts | "12-hour shifts [UCL participant]" sits in a facts table as a characteristic of the role. In the source it is one person. **And `CLAUDE.md` still says 10-hour shifts**, so two project files disagree | Claude |
| 6 | Chain does not connect | `jtbd.md`, MVP core | The fleet job enters the core citing the rule that binds stage 04 to carry the strategic dimension on the reference screen. That rule governs what stage 04 must show, not what belongs in an MVP core. The conclusion may be right; the stated reasoning does not reach it | Claude |
| 7 | Overstated uniqueness | `jtbd.md:130` | The handoff gap is called "the one gap verified across all thirteen products". Gap 2, nobody publishes the residual queue, is equally across thirteen | Claude |
| 8 | Population mismatch | `personas.md`, P1 facts | 79% operational 24/7 is SANS across SOCs generally, including internal ones. The persona is at a provider | Claude |
| 9 | A correction left a neighbouring file stale | `research.md:210` | The handoff decision was corrected in `aarrr.md` to composed continuously. **H6 still reads "If a shift handoff is composed at the end of every shift"** | Claude |
| 10 | Material about people that never reached the persona | `research.md:241` | The evidence index records that Intercom Copilot ships "a separate manager dashboard reviewing AI use". This is the closest thing in the whole package to evidence that the rope-holder needs a surface of their own rather than a permission level, and it is absent from P2 | Claude |
| 11 | Claim without support | `personas.md:131` | "It is the first and last screen of her shift", stated as fact with no `[?]` | Codex |
| 12 | Claim without support | `personas.md:214` | "69% of SOCs still report metrics manually. This is the person who does it". Figure absent from `research.md`; the attribution to the lead has no source | Codex |
| 13 | Claim without support | `personas.md:215` | "62% of SOC professionals say their organisation is not doing enough to retain top talent". Figure absent from `research.md` | Codex |
| 14 | Claim without support | `jtbd.md:74` | R4 adds two motivations the source does not carry: "without my rewriting it" and "explaining the work does not cost more than doing it" | Codex |
| 15 | Claim without support | `jtbd.md:91` | The social job attributes a reputational motive and a wish to avoid being re-checked. The cited support establishes only variation in handover quality, no formal training, and senior feedback | Codex |
| 16 | Drift from the source | `jtbd.md:65` | R3 says "for the rest of the quarter". Its own cited support is the metric "produced a tuning change **within 14 days**". The horizon was widened without grounds | Codex |
| 17 | Structural orphan | `jtbd.md:103-109` | HJ1 and HJ2 are written as jobs but carry no `Persona:` line, unlike MAIN and R1 to R4 | Codex |
| 18 | Material about people that never reached the persona | `research.md:298` | "The handoff is composed continuously and closed at the end", together with the observed practice "you can actually write it in Teams as the day's going on", is absent from the persona, which describes the handoff only as a screen and as an end-of-shift problem | Codex |
| 19 | Material about people that never reached the persona | `research.md:300` | "The handoff is signposting, not a document", and the ticket-reference practice behind it, never reached the persona at all | Codex |

### What each instrument could not see

Codex found nothing in classes 2, 3, 4 and 6, which need a reading of what the product is trying to do rather than a comparison of files. Claude found nothing in classes 12 to 17, which need patient line-by-line comparison against the source and no memory of what was meant.

**Codex also missed two findings inside its own radius**, both cross-file contradictions it was equipped to catch: the 10-hour against 12-hour disagreement between `CLAUDE.md` and `personas.md`, and the stale H6 in `research.md`. A second instrument widens coverage; it does not make it complete.

### The three questions that would close the most dangerous gaps

Ordered by danger.

**Q1. Does an analyst carrying many tenants actually consult a cross-tenant view of trust, or work case by case and never look up?** This decides whether the third job in the MVP core exists at all, and it is H1. Honest answer on where to look: this needs a working MDR analyst, and stage 02 does not have one. It cannot be closed from public sources.

**Q2. What does a Tier-2 analyst read in a queue row before deciding to open it?** Closes behaviour 1, the entry point, which carries reason 1 of the chosen pattern and decides what the first glance must deliver. Where to look: published default column sets in shipping consoles, Defender and Sentinel and Expel already read, plus any study of triage cognition.

**Q3. Is the person who moves autonomy a different behaviour, or only a different permission level?** Decides whether P2 is a persona or a role. Where to look: pre-login documentation on roles and access in Prophet, Dropzone and Simbian, plus the RIT finding that access level changes what a person can see, plus the Intercom manager dashboard already in the evidence index.

### Verification rule for Step 6

Every line above is re-read in the file before it is touched. A finding that does not hold on re-reading stays in this table marked **dropped on verification**, with the reason. A false finding deleted quietly comes back next time in the same words.

---

## Third instrument: the stage contract read as a checklist

A separate table, deliberately not merged into the one above. Claude with the files and Codex with the source both read what **exists**. Neither can see a step that never happened, because a step that never happened leaves no line in any file. This pass reads the stage 02 contract, its gates and its "done when" list, and answers each line with done, not done, or knowingly skipped.

| Contract line | Verdict |
|---|---|
| Entry gate as the first move, before Step 1 | **Done.** All six declared inputs verified present, and the weakness of the people material named rather than passed over |
| One step, then show, then wait | **Done.** Every step was shown before it was written |
| From data, not from the head | **Not done, and this is what the critique found.** Nineteen distinct findings, of which at least six are statements that stood as sourced and were not |
| Hypotheses in the form "assume X, verify via Y" | **Done for the persona hypotheses. Not done for HJ1 and HJ2**, which carry no persona, finding 17 |
| Ballast test on every persona block | **Done.** Every block answers its design question, and three groups were excluded because they had none |
| Split by behaviour, not demography | **Done**, with a caveat now visible: finding 3 shows P2's behavioural separation rests on evidence that actually describes P1 |
| Persona counts as guidance, not a minimum | **Done and said out loud.** Two groups, third named and excluded, and the reason recorded |
| Job is not a feature | **Done.** Every job passes the solution-agnostic test. Findings 14 and 16 are about motivations and horizons, not about mechanisms leaking in |
| Related jobs are adjacent tasks, not steps of the journey | **Done, and the missing owner was declared.** Stage 02+ CJM is not in this track, so the steps were assigned to the stage 03a user flow with the decision recorded in the file |
| `PRIMARY` records what it does, not only what it means | **Done.** The conflict-resolution rule is written and stages 03a, 04 and 07 will read it |
| Critique on two instruments, sets taken independently | **Done.** Codex read-only, its table not shown to Claude before both were complete. First run stalled and produced nothing for fifteen minutes; it was restarted rather than silently skipped |
| Verification before fixing | **Pending, Step 6.** The rule is written into the table above |
| Follow-up research on public, pre-login pages only | **Done.** Four sources, none behind a login, and one paper deliberately excluded as evidence about people because it is a simulation |
| Every md gets a visible place in html at the step that creates it | **Not done, knowingly deferred.** `personas.md` was created at Step 1 and `jtbd.md` at Step 3; neither has a page yet. The pack schedules both for Step 7, so this is the pack's own deferral rather than an omission, but the base rule says "at the step that creates it" and it is recorded here rather than left unsaid |
| A living md does not leave its html frozen | **Done for `research.md`**, which received a new section 09 on `research.html` in the same step that changed it |
| Rough MVP scope narrowed rather than added alongside | **Done.** Eight features held as intent became three jobs in the core carrying six of them, with one deferred and one held pending |
| Both pages deployed, `done:true` in `/_nav.js` | **Not done.** Step 7 |
| Closing ritual | **Not done.** Step 8 |

**Idle control on this checklist.** It contains four "not done" and one "knowingly deferred". A contract checklist that never returns "not done" is being read as a formality rather than as an instrument.

### Step 6: verification and what became of each finding

Every line was re-read in the file before it was touched. **All nineteen held on verification. None was dropped.** That is worth saying plainly rather than treating as a good result: a critique where nothing is dropped means the findings were specific, and it also means the writing had that many real defects in it.

| # | Was | Became | Status |
|---|---|---|---|
| 1 | A UCL attribution for a phrase that is not in the paper | Three real quotes from the paper carry R1 instead, and the false attribution is recorded above the job rather than deleted | Fixed |
| 2 | The orphan check called feature 7 an orphan while the matrix assigned it to P2-MAIN | Feature 7 maps to P2-MAIN on the audit side. **No orphan features.** What survives is smaller and true: the analyst-side review lane has no job | Fixed |
| 3 | RIT Finding 4 used both to characterise P1 and to separate P2 from P1 | Removed from P2. The claim that P2 audits rather than consumes is marked unsupported with a verification, and the Intercom manager dashboard replaces it as real evidence | Fixed |
| 4 | "She starts sceptical, and that is measured" | What is measured is satisfaction with a tool category across SOCs. The leap to her personal starting point is marked as ours | Fixed |
| 5 | "12-hour shifts" as a role attribute | "One UCL participant describing 12-hour shifts". The 10-hour line in `CLAUDE.md` is reconciled at the closing ritual | Fixed |
| 6 | The fleet job entered the MVP core on a rule about what stage 04 must show | Reasoning rebuilt on gap 1 and the strategic dimension, and the job is named **as a bet** rather than as a qualified one | Fixed |
| 7 | "the one gap verified across all thirteen products" | Gap 6 and gap 2 are both across thirteen | Fixed |
| 8 | 79% 24/7 applied to a provider | Marked as measured across SOCs generally | Fixed |
| 9 | H6 still read "composed at the end of every shift" | Corrected in `research.md`, with the original wording and the reason for the change kept | Fixed |
| 10 | Intercom's separate manager dashboard absent from P2 | Now the lead row of P2's evidence table | Fixed |
| 11 | "It is the first and last screen of her shift" as a finding | Marked as a design decision, with what the sources actually carry stated beside it | Fixed |
| 12 | "69% report metrics manually. This is the person who does it" | The figure now has a chain in `research.md` section 8. The attribution to the lead is marked as inference with a verification | Fixed |
| 13 | 62% retention with no chain in `research.md` | Added to `research.md` section 8 | Fixed |
| 14 | R4 carried two invented motivations about effort | Removed. R4 now reads "so that the work speaks for itself", and the effort question is marked `[?]` alongside the liability question | Fixed |
| 15 | The social job asserted a reputational motive | The motive is marked as ours, with a verification, beside what the source does establish | Fixed |
| 16 | R3 said "for the rest of the quarter" against a 14-day source | The invented horizon was removed rather than swapped for another number | Fixed |
| 17 | HJ1 and HJ2 written as jobs with no persona | Both now carry **Persona: P1** | Fixed |
| 18 | The corrected behaviour "composed continuously" never left `research.md` | Carried into P1 with the participant's own quote | Fixed |
| 19 | "The handoff is signposting, not a document" never left `research.md` | Carried into P1 with the participant's own quote | Fixed |

**Job wording is verified in sync** between `personas.md` and `jtbd.md` after the changes to R3 and R4: four related jobs plus the main job, matched line for line.
