# Harrier: the voice

Stage 05. The rules by which every string in this product is written, by a person or by Claude. A rule with no example is an adjective, and an adjective cannot write a button or reject somebody else's line, so every principle below carries four fields: the rule, a line that obeys it, a line that breaks it, and the row of research it comes from.

**Sections.** Principles · Tone by phase · Dictionary · Never · Microcopy. The last three arrive at steps 3 and 4.

---

## Two forks, answered out loud before the first principle

**There is no brand platform, no tone-of-voice guide and no editorial policy to reconcile with.** This is recorded rather than assumed: `CLAUDE.md`, in the project boundary line, says `brand or existing design system none`. So the voice is derived from data, and this document is the first one. If a brand voice ever arrives, it becomes a fourth source and the conflicts get written out as "the brand says X, the data say Y" rather than smoothed.

**The fourth source that did not fall away.** The pack allows for a product where the category has no public language at all. That is not this product. Working consoles sit behind login across all five direct competitors, but their marketing language is public and Expel publishes its **interface** language in its own documentation. Nine pages were opened live on 2026-08-23 and the reading is `research/docs/research.md` §11, with three screenshots in `research/screens/`. Principles 1 and 5 rest on it directly.

---

## Principles

### Principle 1 . Speak to the analyst, and to the one after her

**Rule.** The product addresses the person at the console directly, as `you`, and everything it writes down is phrased as it would be said to the analyst taking the next shift. It never describes her to a third party and never writes for an imagined auditor.

**Example.**
> You accepted 6m ago, the write has failed twice, and the case stays open. This console is the only place the decision exists.

> Could not reach the tenant's mail admin to confirm whether the forwarding rule is sanctioned. S. Varga has it now and wanted a call to the client before 08:00.

**Counterexample.**
> order: unrecorded, blocked on her, severity, age

> The analyst was unable to establish contact with the tenant's mail administration function for the purposes of verification.

**Grounds.** Two rows, and they point the same way.

`research.md` §11.1: of eight competitor lines read live, **not one addresses the person who will sit in front of the screen.** Prophet says "Free your SOC Analysts to focus on real threats", Dropzone says "Your team can't investigate every alert", Simbian says "The last analyst you'll hire". The category's second person is the buyer. Speaking to the operator in her own second person costs nothing and nobody else is doing it.

`personas.md`, behaviour 5, **corrected at stage 02**: "Writing for the future auditor. **Corrected.** The reader is the next analyst, not an auditor." And UCL, verbatim: "Technical details would be in a ticket... Handovers are more for signposting."

**The first counterexample is live on 31 screens** and is recorded as D12 in `microcopy.md`.

### Principle 2 . The cheapest correct thing first, and depth is one key away

**Rule.** Every string says the smallest true thing that lets her decide. Anything more goes one keystroke deeper, never onto the resting screen. Length is a cost paid by the reader, and this reader is paying it forty times a shift.

**Example.**
> Real, contain identity
> above latitude here

Seven words in the row. The nine signals, the six sources and the base rate are behind `Enter`.

**Counterexample.**
> Clerk correlated nine signals across six sources over the last 24 hours and concluded with high confidence that this represents a genuine token replay requiring identity containment.

**Grounds.** `personas.md`, Pains, verbatim from the RIT study of 248 surveyed and 24 interviewed analysts: **"During triage, I ignore lengthy explanations. What I need most are straightforward next steps."** And: "diving into deep algorithm explanations slows me down."

And there is a ceiling, not just a preference: **more explanation can reduce trust** once it introduces confusion or doubt [RIT, the trust-explainability curve, `research.md` §8].

### Principle 3 . A number names its claim, its scope and its window

**Rule.** No bare number and no bare percentage. Every count says what was counted, across what population, over what period, and it is an absolute rather than a rate. Where a rate is unavoidable it is printed as the pair it came from.

**Example.**
> 6 sources queried over 24h: Entra ID, Exchange audit, EDR, proxy, threat intel, tenant baseline. Count first, never a bare percentage.

> 31 of 36, was 34 of 36

> 4 retained, and 2 no longer retrievable: Exchange audit and proxy aged out of the tenant's own retention on 2026-08-14. The two counts are kept apart on purpose, because "4 sources" and "4 of 6 sources" are different claims and only one of them is true here.

**Counterexample.**
> 92% confidence

> High confidence, 9 signals

**Grounds.** `personas.md`, Pains, verbatim: an explanation is more meaningful **"if I have some context about how that percentage was generated"**. The pain is a percentage without an account of where it came from, stated by an analyst rather than inferred by us.

And the category is the counterexample at scale: five vendors sell 92%, 91%, 85%, 99.9% and 70% [`competitors.md`], every one of them a rate with no scope and no denominator, sold to a buyer rather than to an operator.

This is design principle 2 of `CLAUDE.md` written as a sentence rule.

### Principle 4 . Say what is true about the machine, including what it did not find

**Rule.** Absence, failure and limit are written in the same register as success, at the same size, in the same place. Clerk never claims more than it did. The product never covers a failure with a softer word, never apologises, and never fills a value it does not have.

**Example.**
> not found: no password change, and no new device enrolment

> The verdict did not write. You accepted 40s ago and the log did not take it, so nothing is recorded.

> Your provider's service delivery owns this line. Harrier will not fill it with a plausible one while waiting.

> The address resolved. The record behind it is outside the retention window. This is not a 404.

**Counterexample.**
> Oops, something went wrong. Please try again.

> We're having trouble saving your verdict right now.

> No issues found.

**Grounds.** **She arrives sceptical, and that is measured rather than assumed.** AI/ML tools rank at the bottom of the SOC satisfaction list; of three AI/ML technologies measured two rank at the very bottom, and generative language tools score **2 out of 4**, while EDR/XDR is the only technology above 3 because it is fully deployed, effective and backed by training [SANS SOC Survey 2025, `personas.md`].

**And what flips her is not accuracy.** Participants were "consistently willing to accept XAI outputs, even in cases of lower predictive accuracy, when explanations were perceived as relevant and evidence-backed" [RIT]. A product that softens a failure hands a sceptic exactly the evidence she came in expecting.

`ia/docs/sitemap.md` turns this into a mechanism rather than a mood, and stage 05 takes it as an order: the evidence block renders **what Clerk looked for and did not find** as explicitly as what it found. Absence gets the same weight as presence.

### Principle 5 . One invented noun, and it is Clerk

**Rule.** Clerk is the only word this product coins. Every other term is one an analyst already owns, taken from the category where the category has settled it. And one thing keeps one name on every screen: a term that changes between two columns is two terms.

**Example.**
> Contain endpoint · Contain identity · Contain network · Remove content · Change policy · Investigate

Verb plus object, imperative, no abstraction. And one word that is ours: **latitude**.

**Counterexample.**
Expel teaches its own customer ten proper nouns: Assembler, DUET, Detection Strategy, Event, Expel Alert, Lead Alert, Finding, Remediation Action, Suppression, Auto Remediation.

And this product's own version of the same failure, live today: the queue column header says `Client`, the fleet column header two panes away says `Tenant`.

**Grounds.** `research.md` §11.2, §11.3 and §11.6, all read live on 2026-08-23.

The category has settled `verdict` (Simbian, "applies the verdict"), `contain` (Expel's **Contain Hosts**), `evidence`, `escalate`. It has **not** settled the word for how much rope an agent has: Prophet says *scope*, Simbian says *authority*, Expel says *access*. `latitude` is ours, and it carries the differentiator, which is what makes it the one coinage worth its cost.

Expel's nine auto remediations confirm the naming rule rather than inspire it: **Block Bad Hashes, Contain Hosts, Deactivate Access Keys, Delete Malicious Files, Delete Registry Key, Disable Accounts, Kill Processes, Remove Malicious Email, Reset Credentials.** Harrier's 0.6 taxonomy already reads this way.

`personas.md`, on why the product does not get to teach: analysts with three or more years want the system to augment their speed rather than reiterate fundamentals [RIT]. **Clerk does not explain what she already knows**, and a coined noun is something she has to be taught.

---

## Tone by phase

### The substitution, declared for the third time in this project

The pipeline builds this table from `cjm-to-be.md` for the target emotion and `cjm-as-is.md` for the barrier. **Both files are out of track**, by the scope decision in `CLAUDE.md`, and the same substitution has already been declared twice inside this project, in `ia/docs/flows.md` line 5 and `ia/docs/sitemap.md` line 7. This is the third, in the same terms:

- **Phases** come from the four flows in `ia/docs/flows.md`, which is what the step-screens trace to here.
- **Barriers** come from the pains in `personas.md`, which are practitioner quotes rather than phase data.
- **Target emotions** come from the emotional and social jobs table in `ia/docs/sitemap.md` and from `jtbd.md`.

**What is genuinely lost, and it is not papered over: there is no measured emotional curve, so there is no measured bottom.** A phase cannot be marked as the low point of a curve nobody drew, and inventing one would be exactly the plausible number this project forbids.

**What can be named with evidence is different and narrower: the one phase where the record is measured to degrade.** UCL, verbatim: *"Over-utilised analysts are just gonna be ready to just get out and head home. So they just wanna get it done fast, and rush."* That is the **hand off the shift** phase, and it is marked below as `HARDEST` on that evidence rather than on a curve.

### The table

| Phase | Screens, from `flows.md` | Target emotion | Barrier the words remove | How it sounds, a real string |
|---|---|---|---|---|
| **Get in** | 1.1 and its four states | Nothing to solve. The door is not the product | A link paged at 03:00 must not cost a search. And a failure here must not read as her fault | `Your provider's sign in did not finish. It is not your password.` |
| **Take the shift** | 2.1 incoming, assembling, nothing carried | Handed something complete, not something written in a hurry | "I do not spend my first hour rebuilding what the last shift already knew" [R1] | `Being assembled from the record, not written from memory` |
| **Work the queue** | 3.1 and its twelve states | In command of forty tenants at a glance. Not drowning, not skimming | Tools explain a single alert while she needs the incident: "we have to find a connection between the critical and the high alerts" [RIT] | `18 waiting across 12 of 40 tenants in scope` |
| **Read the case** | 4.1, 4.2, 4.3, 4.7, 4.8 | **Thorough rather than lucky**, taken verbatim from the emotional job | The explanation is missing or too long [RIT]. And the confidence number with no account of where it came from [RIT] | `not found: no password change, and no new device enrolment` |
| **Rule** | 4.1 controls, 4.4, 4.5 | Decided, and able to defend it in April | The one true positive closed as noise, the single most load-bearing anxiety in the product [`personas.md`] | `Real, but the containment should be the endpoint rather than the identity` |
| **Escalate** | 4.6, 4.7 | An honest exit, not a failure | An escalation with nobody attached is a case that looks handed over and is not | `It cannot be taken back. If S. Varga hands it back, that is a second entry rather than an erased one.` |
| **File, and see it recorded** | 4.9, 4.10, 3.1 decided and escalated | The record took it, and I can see that it did | A decision that exists nowhere is the failure this product is built to prevent | `Written to the log against the snapshot as it stood.` |
| **Hand off the shift** `HARDEST` | 2.1 outgoing, sealed, close failed, unsealed | Signposting the next person can act on, not a document written at 07:00 | Measured: "they just wanna get it done fast, and rush" [UCL]. Handover quality varies widely between individuals and no organisation trains it [UCL] | `This has been accumulating since 19:00. It is not written at the end of the shift, which is where handovers fail.` |
| **Answer for it later** | 5.1, 5.4, 5.6 | The answer comes from the record instead of my memory [R2] | **Social job, verbatim:** it must look like the work of someone who knew what they were doing, and that must not depend on how tired the author was at 07:00 | `A record of what was known then. This is not the live case.` |
| **When something is wrong** | 8.1, 8.2, 0.4 degraded states | Told the truth about what is broken and what still works | Trust is set by the last failure, not the average [`ux-patterns.md`, still `[?]`] | `The queue is complete. The connection is fine and Clerk stopped investigating 11m ago, so nothing is missing.` |

### The mechanisms this table is ordered to carry

`ia/docs/sitemap.md` names three, and two of them are microcopy's job rather than layout's:

1. **Absence gets the same weight as presence** in the evidence block, and the provenance strip says how much effort was spent, so a fast decision reads as attributable to Clerk's work rather than to skipping. This is Principle 4 with a screen attached.
2. **The verdict record is composed from structured parts rather than free text**, so its quality does not depend on how tired the author was. Structure is what removes the variation. This binds the **hand off** and **answer for it later** phases: a field label there is doing the work a person's writing discipline would otherwise have to do.
3. **The part with no mechanism, and it stays named.** For cases Clerk closed on its own, which she never sees, there is nothing yet. No string can fix that and none pretends to.

### One conflict, and it is not smoothed

**Principle 2 says the cheapest correct thing first. The Read the case phase asks for "thorough rather than lucky".** These pull against each other: the feeling of thoroughness is usually bought with words, and this reader punishes words.

The resolution is not a compromise between them, it is the mechanism above: thoroughness is carried by **what Clerk looked for and did not find**, which is a short line, not a long one. `not found: no password change, and no new device enrolment` is six words and it is the evidence of thoroughness. If a phase ever needs length to feel thorough, Principle 2 wins, because the phase's emotion is `PREMISE` and the pain behind Principle 2 is a verbatim quote.

**Recorded because the conflict is real and a later stage will meet it again**, most likely at 07 when the evidence block gets colour and the temptation is to spend space on it.

---

## Dictionary

One thing, one word. Fourteen divergences were marked in `microcopy.md` §6 and every one of them is decided here. Nothing new was searched for: this section is the ruling on what step 1 found.

### The terms

| Word | Not this | Why this one | What it costs |
|---|---|---|---|
| **tenant** | *client*, when the sentence is about a scope, a row, a boundary or a latitude | It is the word the differentiator is built on, it is already 409 uses against 98, and the category uses it for the isolation boundary. Simbian gives each tenant a Context Lake, Microsoft ships multitenant management | Queue column header `Client` becomes `Tenant`, on **29 files**. `Normal at this client` becomes `Normal at this tenant`, on **22** |
| **client** | *tenant*, when there is a person or a contract on the other end | The commercial relationship is real and it has people in it. `A call to the client before 08:00` is not a call to a boundary | `the tenant's mail admin` becomes `the client's mail admin`. `your provider's contract` stays |
| **verdict** | *determination*, *conclusion* | Simbian uses `verdict` verbatim; Prophet's `determination` is the same word and the product needs one. `Conclusion` was this product's own second word for it | Column header `What Clerk concluded` becomes **`What Clerk filed`**. `Clerk's conclusion stands unruled` becomes `Clerk's verdict stands unruled` |
| **file** | *submit*, *save*, *commit* | It is what you do to a verdict, and it is already the product's word: `Filed by Clerk`, `File the amendment` | Nothing. It is confirmed rather than changed |
| **accept** | **upheld** | The control teaches the word, and the control says `Accept`. A record that says `Upheld` is a word the control never taught. And `accept, amend or reject` is the canonical triple in `CLAUDE.md`. `Uphold` fits the judicial metaphor and loses on this rule, which is written down in `docs/decisions.md` | `Upheld by D. Okonkwo` becomes `Accepted by D. Okonkwo`. Chip `upheld` becomes `accepted`. `34 of 36 upheld, 30 days` becomes `34 of 36 accepted, 30 days` |
| **amend** | *edit*, *revise* | An amendment stands beside what it amended rather than replacing it, which is what the word already carries | Nothing |
| **reject** | *decline*, *dismiss*, *override* | Already consistent, and `override` is taken: it is the class of act, not this act | Nothing |
| **escalate** | *hand off*, *pass on*, *assign* | Universal in the category | Nothing. `Handed to S. Varga` stays, because that is the state after the act rather than the act |
| **latitude** | *autonomy*, *scope*, *authority*, *permission*, *rope* | The one invented term in the product, and it carries the differentiator. Prophet says *scope*, Simbian says *authority*, Expel says *access*, and none of the three is about a per-tenant ceiling | The accessible name `Tenant autonomy` becomes **`Clerk's latitude on this tenant`**. A screen reader currently gets a word the screen does not use |
| **scope** | reserved | `scope` in this product is **hers**: which tenants and filters are in view. It is not Clerk's rope. Both meanings are live and they must not merge | Nothing. Recorded so nothing merges them later |
| **signal** | *alert*, *event*, *finding* | `alert` is what the category calls the raw thing Clerk consumes and she never sees. `finding` is Expel's word for a whole block. `signal` is what the count counts | Nothing. `alert` appears in the product only as an ARIA role |
| **case** | *incident*, *investigation*, *ticket* | Expel splits investigation and incident, which is a distinction this product does not have and does not want | Nothing |
| **entry** | *record*, for one row of the log | An entry is one row. The record is what the log holds | `The verdict record above is kept for the life of the record` uses one word twice for two things. Becomes `The verdict above is kept for the life of the record` |
| **user** | **never the analyst** | `user` already means the account holder at the tenant, the person whose token was replayed. Calling the reader `the user` collides with the subject of the case she is reading | Nothing today, and it is the strongest reason in this table to keep the rule |
| **analyst** | *operator*, *reviewer*, *agent* | Her job title. `agent` is Clerk | Nothing |
| **brief** and **handover** | not synonyms | The **brief** is the whole screen and the whole document. The **handover** is the half only a person writes. 2.1 already depends on the distinction | Nothing. Recorded so a later stage does not collapse them |
| **fleet** | *portfolio*, *estate*, *overview* | The forty tenants read as one surface. Common English, not a coinage | Nothing |
| **snapshot** | *copy*, *archive* | The evidence as it stood at decision time, which is the compliance requirement in `CLAUDE.md` | Nothing |
| **rota** | *schedule*, *on-call list* | The provider owns it and Harrier reads it | Nothing |

### The other four rulings

**On the two grammars of freshness.** 0.8 §4 declares two grammars of time. Freshness needs two as well, and step 1 found seven phrasings for them.

- **`as of <time>`** when the reading is still the best one available and only time has passed. `as of the last sync`, `as of 40s ago`, `as of 6m`.
- **`frozen at <event>`** when a **named event** stopped the counting, not the passage of time. `frozen at the seal`, `frozen at the attempt`.

So `frozen at the last sync` becomes `as of the last sync`, `Frozen 40s ago` becomes `as of 40s ago`, and `Frozen as of the last sync` becomes `as of the last sync`. The two `frozen at` uses on 2.1 are correct and stay.

**On retrying.** `Try again` when **her own last action** failed. `Reconnect` when the **connection** is what is being retried. `Retrying` only as a description of the transport doing it by itself, where there is no button. So `Try to reconnect` becomes `Reconnect`, on 3.3 and 4.2.

**On the state chip vocabulary, and it is fixed upward.** 0.8 §6 closes the case chip set at six. The log and the case history render seven more, and they are not a break in the set: they are **a second taxonomy on a different axis.** A case chip says what is true of the case now. An entry chip says what the entry is. Both are closed lists and 0.8 must declare both, which this stage does rather than leaving the contradiction for a later reader. The entry set is `accepted`, `rejected`, `amended`, `escalated`, `superseded`, plus the three Clerk actions `Clerk opened the case`, `Clerk filed a verdict`, `Clerk acted alone`. **`upheld` leaves this set with the ruling above.**

**On the annunciator saying two things.** 0.3 answers one question: **how much rope does Clerk have here, and what has moved.** The two parts after the lead are the **ceiling** and, beside it, the thing that cannot be read at a glance any other way.

- Nothing selected, forty tenants: `40 tenants · acts alone up to contain network at 3 · 1 moved down`. The ceiling, and **what moved**, because forty records cannot be read at once.
- One tenant selected: `LARKFIELD LOGISTICS · acts alone up to contain endpoint · 34 of 36 accepted, 30 days`. The ceiling, and **the record**, because one record can.

The version on 5.1, 5.6 and 2.1, `40 TENANTS · 7 of 40 act alone above investigate · 219 of 231 accepted, 30 days`, retires on five screens. It answers a different question, how many sit above a floor and how accurate the agent is overall, and that is a report rather than a reading. A fixed slot answers one question.

`OVRD` retires with it. It is the only invented abbreviation in the product, against six the analyst already owns.

### Address, and the mechanics

| Rule | Verified against the 62 pages |
|---|---|
| **Second person, `you`.** Never `the user`, never third person about the reader | Two counterexamples live, D12, on 31 screens and 1 |
| **`Clerk`, no article.** Never `the Clerk`, never `the agent`, never `the AI`, never `the assistant` | Already 100% consistent |
| **`Harrier` speaks of itself by name, in the third person.** Never `we`, never `our` | **0** occurrences of `we` or `our` across 62 pages. `Harrier does not hold your password`, `Harrier will not fill it with a plausible one while waiting` |
| **No verb contractions.** Possessives only | **0** verb contractions across 62 pages. Already unanimous, so the rule is free, and it keeps the interface level with the record it writes |
| **Sentence case** for headings, buttons and labels | Consistent. Four label slots are deliberately upper case and stay: the annunciator lead, the toast role (`STATUS`, `ALERT`), the rail (`AS IT STOOD`), the stage badge |
| **Acronyms the analyst owns need no expansion:** ASN, VPN, UTC, EDR, MFA, SOC, IP, MDR, IdP | Six of them are already in the text. **No acronym this product invented is allowed**, which retires `OVRD` |
| **`·` is the separator.** Never an em dash, never a hyphen doing a dash's job | **0** em dashes across the whole project, and this rule is inherited rather than new |
| **The key rides inside the label, after the words:** `Accept a`, `Reject r`, `Cancel Esc`, `Seal the brief Enter` | 13 controls. This is design principle 3 working, the control teaching its own key, and step 7 must not tidy it away |

---

## Never

Each line with the shape it takes when it slips in. The first four blocks are what the model reaches for by default when a string has to be written fast, which is exactly the condition steps 6 and 7 run under.

### 1. The apology, and the vague failure

| Never | Instead |
|---|---|
| Oops, something went wrong | `The verdict did not write. You accepted 40s ago and the log did not take it, so nothing is recorded` |
| We're sorry, please try again | `Try again` |
| An unexpected error occurred | Name what failed and what is now true of the case |
| Failed to save your changes | `The escalation did not write. The case stays open and unescalated` |

**Why this block exists.** She arrives with a measured low opinion of this category, and a failure covered by a soft word is the first confirmation she is looking for.

### 2. The celebration

| Never | Instead |
|---|---|
| Verdict filed successfully! | `Written to the log against the snapshot as it stood` |
| Success! | The fact, and the next step |
| Great work, you cleared the queue | `Nothing is waiting on a decision` |
| Any exclamation mark, anywhere | **0** in the product today, and this is what keeps it there |
| Any emoji in a system message | **0** in the product today |

### 3. The empty state that states, and the loader that chatters

**This block is the one that survives every other filter.** These lines are not clichés, they are not motivational and they carry no exclamation mark, so nothing above catches them.

| Never | Instead |
|---|---|
| Nothing here yet | `Nothing is waiting on a decision. 21 cases were ruled on this shift and Clerk is investigating 3 more` |
| It's quiet in here | Say why it is quiet and what that means |
| No items to display | `Nothing here, and it is the narrowing rather than the queue. 18 cases are waiting outside this scope` |
| You're all caught up | Never. It is a claim about her, and the product does not make claims about her |
| Loading... | Name what is being fetched: `4 of 6 sources answered, 24h window. Counting up.` |
| Working our magic | Never |
| Preparing something special | Never |
| Hang tight, this won't take long | Never. It is a promise about a duration the product does not know |

**The rule underneath:** an empty state says **why** it is empty and what to do next. A loader either says **what** is being fetched or says nothing at all.

### 4. The vendor adjective

| Never | Why |
|---|---|
| AI-powered, intelligent, smart, advanced | The product has one agent and it has a name |
| seamless, effortless, powerful, robust | Adjectives about the product, addressed to a buyer. `research.md` §11.1 |
| simply, just, easy | Every one of them tells the reader the thing she is struggling with is not hard |
| Unlock, supercharge, transform, revolutionise | Never |
| Let's get started, You're all set, Welcome back | The category's onboarding register. This product is issued to her, not sold to her |

### 5. Claims the machine cannot support

| Never | Instead |
|---|---|
| 92% confidence | `9 signals correlated from 6 sources, queried over 24h` |
| High confidence | The count and its scope |
| No issues found | `not found: no password change, and no new device enrolment`, naming what was looked for |
| Clerk thinks, Clerk believes, Clerk feels | `Clerk filed`, `Clerk concluded`, `Clerk looked for and did not find` |
| This is probably benign | Either the verdict or the absence of one. `No verdict yet` is a real state |
| An estimate the product does not have | `No estimate. Your provider's service delivery owns this line. Harrier will not fill it with a plausible one while waiting` |

**This block is the banned list with the most weight**, because it is the one that would undo the differentiator. Principle 3 and Principle 4 are both enforced here.

### 6. The register that belongs in `.anote`

| Never in a product string | Where it goes |
|---|---|
| An IA node number: `4.6`, `0.4`, `5.1` | `.anote`, or nowhere. **33 occurrences live in 14 files**, D11 |
| A WCAG criterion: `SC 2.1.4` | `.anote`. It is addressed to whoever builds this, not to whoever uses it |
| An argument for the design: `because a number that settles later without saying it was provisional is a number she acted on` | `.anote`, or cut. Stage 04 settled the register and this is the prose it did not sweep |
| A sentence in the third person about the reader | Rewrite in the second person. D12 |

---

## Microcopy

Rules by element type. Every rule carries one real string from this product, so a later stage can check a line against a line rather than against an adjective. After this section `voice.md` is complete and every string in the product is written from it.

### The controls

| Element | Rule | Example from this product |
|---|---|---|
| **Control that acts immediately** | The bare verb, plus the key. Nothing else | `Accept a` |
| **Control that opens a dialog** | The same bare verb, plus the key. It does not promise the outcome, because the dialog can still be cancelled | `Reject r` &middot; `Escalate e` &middot; `Amend m` |
| **Button that commits inside a dialog** | **Say what will be true after the press.** Not the act, the state after it | `File the amendment` &middot; `Escalate to S. Varga` &middot; `Seal the brief Enter` &middot; `Search without the actor Enter` |
| **Any button** | A verb phrase, never a bare noun. A noun is a place, and a button is a change | `Open the whole log`, not `The whole log`. `Open the live case`, not `The live case` |
| **Where the routing is printed** | **On the option that determines it, at the moment of choosing.** Never in the button, because the button cannot know which option was picked | The reason rows print `agent tuning`, `detection engineering`, `the tenant baseline, locked`, `nowhere yet, and counted` |
| **The key** | Rides inside the label, after the words, in its own element | `Cancel Esc` &middot; `Next case ]` |
| **A control the product cannot honour** | Shown disabled with the ceiling stated, never hidden | `Disabled until a recipient exists.` |

**One correction this rule forces.** `Reject and tune Enter` names a route in the button, and **the route is `agent tuning` for two of the seven reasons.** For the other five it is detection engineering, the tenant baseline, or nowhere. The button is wrong five times out of seven, and the option row already prints the true route. It becomes **`File the rejection Enter`**.

### The headings

| Element | Rule | Example |
|---|---|---|
| **Screen heading, `h1`** | **The readout, not the label.** It answers what is in front of you right now, as a count and a scope, and it changes with the state | `18 waiting across 12 of 40 tenants in scope` &middot; `No case matches this scope` &middot; `Nothing waiting` |
| **Pane heading, `h2`** | What this pane holds, named as a thing | `Fleet` &middot; `C-4417 · Larkfield Logistics` &middot; `Find the decision` |
| **Block heading, `h3`** | **A question the block answers, in her words.** This is the category's own pattern, not an invention | `What happened` &middot; `What Clerk filed` &middot; `What Clerk may do here, on this tenant` &middot; `What emptied it` &middot; `What cannot be done here` |
| **Column header** | The shortest noun phrase that says what the cell holds. A question where the cell holds a judgement | `Sev` &middot; `Tenant` &middot; `What it is` &middot; `What Clerk filed` &middot; `To check` &middot; `State` &middot; `Age` |
| **Sub-heading, `p.sub`** | Says what is true of this pane that the heading could not carry | `Nothing is selected, and this is not an empty pane. It is the answer to the question you are about to be asked` |

**A heading never states the obvious identity of the screen.** `Case queue` as an `h1` would spend the most valuable line on the page telling her which screen she opened, which she knows. The `h1` is the readout.

### The fields

| Element | Rule | Example |
|---|---|---|
| **Label** | What to type, in the fewest words | `Who decided it` &middot; `Date range, UTC` &middot; `What Clerk got wrong, in your words` |
| **Hint** | **How, or what it costs.** Never a repeat of the label | `Leave this empty to search every analyst in your provider scope` &middot; `No password here. Your email decides which provider signs you in.` |
| **Placeholder** | A real example of the value, or the field's own condition. Never the label again | `C-4417` &middot; `you@yourprovider` &middot; `Nothing downstream depends on this` |
| **Validation** | Name the specific thing to fix, in the same sentence as what is blocked | `A reason is required` &middot; `Where it goes is required` |
| **Optional, and asked anyway** | Say both, because the product is asking for something it will not enforce | `Optional, and prompted anyway` &middot; `Anything else, optional` |

### The states

| State | Rule | Example |
|---|---|---|
| **Empty** | **Why it is empty, and what to do next.** Never a statement of the emptiness alone. And it distinguishes *nothing here* from *nothing matched* | `Nothing here, and it is the narrowing rather than the queue. 18 cases are waiting outside this scope.` |
| **Empty, second kind** | Where two kinds of nothing exist, name which one | `Two kinds of nothing, and they are not interchangeable. A brief that showed one blank for both would be telling the incoming analyst something untrue.` |
| **Loading** | **Name what is being fetched, or say nothing.** A count that will settle says it is provisional | `4 of 6 sources answered, 24h window. Counting up.` &middot; `14 waiting so far, provisional, Clerk is still correlating` |
| **Error** | What failed, when, and **what is now true of the case**. No apology, no cause the product cannot name | `The verdict did not write. You accepted 40s ago and the log did not take it, so nothing is recorded.` |
| **Degraded, not broken** | Say what still works, in the same breath as what does not | `The list is readable and it is not fresh. Filing a verdict is still allowed: a degraded connection does not block a decision.` |
| **Success** | The fact and where it went. Never a celebration, never an adverb | `Written to the log against the snapshot as it stood.` |
| **Success with no toast** | Where the change itself is the feedback, say so once and move on | `No toast: the row wears escalated, which is the feedback.` |
| **Absence, retained** | Absence of evidence gets the same weight and the same slot as evidence | `not found: no password change, and no new device enrolment` |
| **Absence, lost** | Name what stood here, what happened to it and when, and what survives | `The snapshot did not survive. Fourteen signals stood behind this verdict and the stored snapshot failed its integrity check on 2026-07-30T03:14:02Z.` |
| **Dangerous, before the press** | Say what will happen and what cannot be taken back, **before** the control, not after | `The escalation is written to the log either way, and it cannot be taken back: if it comes back to you, that is a new entry rather than an erased one.` |
| **Refused, and not a 404** | Where an address resolves and the answer does not exist, say which | `The address resolved. The record behind it is outside the retention window. This is not a 404.` |

### The small slots

| Element | Rule | Example |
|---|---|---|
| **Filter chip, applied** | The value, then `×`. Never the field name where the value implies it | `Meridian Health ×` &middot; `Severity: High ×` |
| **Filter chip, unapplied** | The field name and the current breadth, with the caret | `All tenants ▾` &middot; `Any actor ▾` |
| **State chip** | One word, lower case, from the closed set in 0.8 §6 | `unrecorded` &middot; `taken` &middot; `escalated` |
| **List foot** | Three things in one line: how much is shown of how much, the keys, and the sort order. The order is stated because a list she cannot explain is a list she cannot trust | `7 of 18 shown, virtualised · ↑ ↓ read, the pane follows · Enter decides, focus moves into the pane · order: unrecorded, waiting on you, severity, age` |
| **Provenance line** | The absolute count, the window, and the named sources. Count first, never a bare percentage | `6 sources queried over 24h: Entra ID, Exchange audit, EDR, proxy, threat intel, tenant baseline.` |
| **Consequence line** | What this choice causes, in the present tense, before it is made | `The case stays open and gains escalated. No verdict is filed.` |
| **Notice** | The role, the fact, then what she can do. A notice that must not be dismissed says why | `ALERT · The verdict on C-4417 did not write. This console is the only place that decision exists. Open the case · stays until the write lands` |
| **Accessible name** | The same words the screen uses. **Never a second vocabulary** | `Clerk's latitude on this tenant`, not `Tenant autonomy` |
| **Narrow-only banner** | Say what this surface is for, and where the thing you cannot do here lives | `Reject is a desk action. It needs the six reasons and the evidence in view at the same time, and neither fits here. On a phone the exit is escalate.` |

---

## Two checks this section had to pass

### Check 1. Every rule against the phase it lands on

Each screen sits on a phase of `flows.md`, and a rule for a state cannot contradict the target emotion of its phase. Ten phases, checked against the state rules above.

| Phase | The rule that could have fought it | Verdict |
|---|---|---|
| Get in | Error: no apology | Holds. `Your provider's sign in did not finish. It is not your password.` names the fault as elsewhere without apologising for it |
| Take the shift | Empty: why, and what next | Holds, and the phase sharpens it. `Nothing carried over, and that is the good outcome` is an empty state that has to say the emptiness is **good**, which the generic rule would not have produced |
| Work the queue | Empty: never a statement of emptiness alone | Holds, and this is the screen the whole base layer is judged on: the empty queue must read as **the fleet**, not as a blank |
| Read the case | **Conflict, and it is the one from the tone table.** Absence gets the same slot as evidence, against Principle 2's cheapest correct thing | **Resolved, not smoothed.** The absence line is six words: `not found: no password change, and no new device enrolment`. Thoroughness is bought with a short line here, not a long one |
| Rule | Dangerous action warns before the press | Holds, and the phase raises the bar: the anxiety is the one true positive closed as noise, so the warning is about **what cannot be taken back**, not about effort |
| Escalate | Success does not celebrate | Holds. The phase's emotion is *an honest exit, not a failure*, and `No verdict was filed. Clerk's verdict stands unruled` refuses both a celebration and an apology |
| File, and see it recorded | Error names what is now true of the case | Holds, and it is the sharpest example in the product: `the case stays open` is the state, and it appears in every write failure |
| Hand off the shift `HARDEST` | Labels do the work a person's discipline would | Holds. The phase is measured to degrade, so `What I checked` / `What I could not do` / `What I need from you` are the mechanism, and a free text box would not be |
| Answer for it later | Heading is a question in her words | Holds. `What was decided, and by whom` is the auditor's question asked in the analyst's grammar |
| When something is wrong | Degraded says what still works | Holds. `The queue is complete` is the whole rule in three words |

**No rule had to be bent for a phase, and one conflict was already known and already resolved.** That conflict is recorded in the tone table rather than discovered here, which is what a check is supposed to produce when the earlier step did its job.

### Check 2. One main action per screen

`wireframes/docs/conventions.md` §3: **exactly one primary action per screen, and nothing in a foot competes with it.** Text can break this quietly, by giving two neighbouring controls the same strength of verb.

**What was compared.** All 62 pages, every container that holds two or more buttons, classified by weight (`primary`, plain, quiet) and by viewport (`only-desk`, `only-narrow`, both). Viewport-exclusive pairs were excluded, because they are never on screen together.

**What it found: one real pair, and one examined and kept.**

| Screen | What it is | Ruling |
|---|---|---|
| `case-standalone-filed` | `.sa-offer` at the top says **`Open in the queue`**, the pane foot at the bottom says **`Open the queue`**. Nearly the same words, and **they go to different places**: the offer opens this case in the pane, the foot opens the queue | **Cured by text.** The offer becomes **`Open this case in the queue`**. Two labels that read the same and do different things is worse than a duplicate |
| `log-not-found` | The banner ends `Remove Actor: R. Idrissi` and the pane foot's primary is `Search without the actor`. Same act, two places | **Kept, and the rule is written down.** A shortcut and its full form may both exist **when the shortcut names the specific thing it undoes.** The banner names the chip, the pane names the query. One click against an edited form |

**What it did not find, and this is the interesting half.** The four verdict controls, `Accept a` `Amend m` `Reject r` `Escalate e`, all carry a strong result verb and sit in one foot. That is not a defect: design principle 3 of `CLAUDE.md` requires that rejecting Clerk read as first class rather than as a fallback, and exactly one of the four is primary. **The rule and the principle agree, and the check confirms it rather than discovering it.**

**One false positive is recorded because it will recur.** `btn--primary-narrow` contains the string `primary`, so a naive match reports `Accept a` and `Escalate e` as two primaries on all six reject states. They are mutually exclusive by viewport: at 360 the only exit is escalate, which is 4.2's rule. Anyone running this check again should match the class, not the substring.
