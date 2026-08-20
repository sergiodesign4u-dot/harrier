# Harrier: user flows

Stage 03a, Step 4, revised at Step 6 after critique on two instruments.

**Declared substitution, third time this stage.** The pack traces flows onto To-Be phases and takes decision points from As-Is barriers. Both CJM files are out of track, so the skeleton comes from `jtbd.md` and the decision points from pains recorded in `personas.md`, which are practitioner quotes rather than phases. **These flows are the document that step-screens trace to in the matrix.**

**Colour is semantic.** Green marks the two ends of the happy path and the arrows along it. Red marks a dead end **for the job**: the job cannot close from there. Grey is everything between, including errors and empty states that recover. Tokens are the light ones from `research/_page.css`.

**What critique #1 changed here.** Every red node now has a way out. It stays red because the job still fails, but the person is no longer stranded: the prose already promised an escalation the diagram did not have, and that contradiction was the finding. Errors were added where only a happy path existed, including the one that matters most in a product built on an append-only log: a verdict that does not write.

**These diagrams are versioned as text.** An exported image tells git that a file changed; the text tells it what changed in the route.

---

## Main job: decide whether Clerk's verdict holds

> When Clerk hands me a case it has already investigated, I want to decide whether its verdict holds, so that the decision is made and I can still defend it months later.

```mermaid
flowchart TD
    Start([Shift starts]) --> Entry{First screen of this shift?}
    Entry -->|no| Queue[B1 Case Queue]
    Entry -->|yes| Brief[A1 Shift brief]
    Brief --> Point[Pointer straight into a waiting case]
    Queue --> Load["Loading: queue streaming in"]
    Load --> Live{Is the live connection holding?}
    Live -->|no| Stale["Error: connection lost, the queue is stale and says so"]
    Stale --> Load
    Live -->|yes| Any{Anything waiting on a decision?}
    Any -->|no| Fleet["B2 Fleet: the resting state of the pane"]
    Fleet --> Queue
    Any -->|yes| Case[C1 Case File in the detail pane]
    Point --> Case
    Case -.-> Autonomy["Clerk's latitude on this tenant, always on screen in a fixed position"]
    Case --> Hold{Does Clerk's verdict hold?}
    Hold -->|not yet| Deeper[Evidence, one key deeper]
    Deeper --> Gone{Is the evidence still retrievable?}
    Gone -->|no| Dead["Dead end for this job: source expired, the decision cannot be defended later"]
    Dead --> Esc[Escalate, the case stays open and flagged as escalated]
    Esc --> Queue
    Gone -->|yes| Base{Is this normal at this client?}
    Base -->|no base rate yet| NoBase["Empty: no baseline for this tenant"]
    NoBase --> Hold
    Base -->|answered| Hold
    Hold -->|holds| Accept[Accept]
    Hold -->|holds with changes| Amend[Amend the narrative]
    Hold -->|does not hold| Reject[Reject and name the reason]
    Reject --> Route["Reason routed to tuning, off this screen"]
    Accept --> File
    Amend --> File
    Route --> File
    File[File the verdict with the evidence snapshot] --> Ok{Did it write?}
    Ok -->|no| Fail["Error: the verdict did not write, and nothing was recorded"]
    Fail --> Retry{Still failing after a retry?}
    Retry -->|no| File
    Retry -->|yes| Kept["Verdict held locally, the case stays open and flagged as unrecorded"]
    Kept --> Queue
    Ok -->|yes| Log["D1 Decision log entry written"]
    Log --> Win(["Job closed: decided, and answerable in April"])

    classDef success fill:#e6f4ee,stroke:#1c7a58,color:#123d2d;
    classDef dead fill:#fbeaea,stroke:#b3261e,color:#5c1512;
    classDef neutral fill:#ffffff,stroke:#c9ccce,color:#16181a;
    class Start,Win success;
    class Dead dead;
    class Entry,Queue,Brief,Point,Load,Live,Stale,Any,Fleet,Case,Autonomy,Hold,Deeper,Gone,Esc,Base,NoBase,Accept,Amend,Reject,Route,File,Ok,Fail,Retry,Kept,Log neutral;
    linkStyle 0,1,2,3,4,5,8,11,12,14,24,25,26,27,28,29,30,31,37,38 stroke:#1c7a58,stroke-width:2px;
```

**Activation node: `File`.** From `aarrr.md`: the analyst rules on a Clerk-assembled case, with the evidence in view, and files it. It is a named node rather than something implied.

**Distance from the start: two screens.** Queue, then Case File. The limit is three, so the route does not defer first value further than the research promised.

**The element that carries the differentiator is in the diagram, and it is attached rather than traversed.** `Autonomy` hangs off `Case` on a dotted link, because Clerk's latitude on this tenant is a fixed-position element that is always on screen, not a step somebody walks through. Critique #1 found it missing from every route; critique #2 found that drawing it in the chain contradicted the navigation model, which calls it global and always visible. Both corrections are in.

**Decisions.** Is this the first screen of the shift. Is the live connection holding. Is anything waiting on a decision. Does Clerk's verdict hold. Is the evidence still retrievable. Is this normal at this client. Did the verdict write.

**States.** `Loading` while the queue streams. `Error` when the live connection drops, where the queue must say it is stale rather than look healthy and lie. `Empty` when nothing waits, in which case the fleet fills the pane rather than a blank. `Empty` again when a tenant has no baseline yet, which is real for a newly onboarded client. `Error` when the verdict does not write, which in a product built on an append-only log is not an inconvenience, **and it has a floor**: after a retry still fails, the verdict is held locally and the case stays open flagged as unrecorded rather than looping forever. Critique #2 caught that the first fix for dead ends had itself created an unbounded retry loop on the most critical operation in the product.

**One dead end, and it now has a way out.** If the source has aged out the job cannot close, because the decision will not be defensible in April. The analyst escalates and the case **stays open, flagged as escalated**, then returns to the queue. The node stays red because the job failed, not because the person is stuck.

**And the exit created a requirement.** Critique #2 found it: an escalated case has to carry a state that exists nowhere. `escalated` is now a named value of `Case.status` in the entity inventory, and the queue has to show it, because a case that left the analyst's hands and looks identical to one that did not is worse than no escalation at all.

**All three verdicts are green.** Accept, amend and reject all lead to `Win`. This is design principle 3 rendered rather than asserted: rejecting Clerk is a first-class outcome, not a fallback. A flow that painted only `Accept` as the happy path would be arguing against its own product.

**R3 has no separate flow, on purpose.** Teaching the agent lives on `Reject` and `Route`. The rest of that job leaves the analyst's screen entirely and lands on a detection engineer, who is not a user here.

---

## R1: pick up and hand off a shift

> When I take over a rotation somebody else was working, I want to know what changed and what is waiting on a decision, so that I do not spend my first hour rebuilding what the last shift already knew.

```mermaid
flowchart TD
    S1([End of shift approaching]) --> Acc[A1 has been accumulating all shift]
    Acc --> Loading1["Loading: assembling what moved this shift"]
    Loading1 --> Open{Anything still open?}
    Open -->|no| Thin["Empty: nothing carried over, the brief is short"]
    Open -->|yes| List[Pointers to open cases and what each waits on]
    Thin --> Close
    List --> Auto{Did any tenant change latitude this shift?}
    Auto -->|yes| Grants[Autonomy changes, each with the evidence behind it]
    Auto -->|no| Close
    Grants --> Close[A1 Shift brief closed by the outgoing analyst]
    Close --> Saved{Did it close cleanly?}
    Saved -->|no| Err1["Error: close failed, the brief stays open and warns both analysts"]
    Err1 --> Close
    Saved -->|yes| Sync{Does the incoming analyst arrive before it closes?}
    Sync -->|yes| Overlap[Overlap: questions asked while both are present]
    Sync -->|no| Written["Written only: no chance to ask"]
    Overlap --> Take
    Written --> Take[A1 read by the incoming analyst]
    Take --> Ready{Is what waits on a decision clear?}
    Ready -->|no| Rebuild["Dead end for this job: the first hour goes to rebuilding context"]
    Rebuild --> Queue1[B1 Case Queue, rebuilding from the cases themselves]
    Ready -->|yes| Go(["Job closed: the shift starts already oriented"])

    classDef success fill:#e6f4ee,stroke:#1c7a58,color:#123d2d;
    classDef dead fill:#fbeaea,stroke:#b3261e,color:#5c1512;
    classDef neutral fill:#ffffff,stroke:#c9ccce,color:#16181a;
    class S1,Go success;
    class Rebuild dead;
    class Acc,Loading1,Open,Thin,List,Auto,Grants,Close,Saved,Err1,Sync,Overlap,Written,Take,Ready,Queue1 neutral;
    linkStyle 0,1,2,4,6,8,10,13,14,16,18,21 stroke:#1c7a58,stroke-width:2px;
```

**The first node carries the correction from stage 02.** The brief has been accumulating all shift; it is not written at the end. The interviewed responders put the failure mode exactly at the end of the shift, and one of them had already solved it by letting the notes accumulate through the day.

**Decisions.** Is anything still open. Did any tenant change latitude. Did the brief close cleanly. Does the incoming analyst overlap with the outgoing one. Is what waits on a decision clear.

**States.** `Loading` while the brief assembles what moved. `Empty` when nothing carries over, which is a good outcome and must not look like a broken screen. `Error` when the close fails, where the brief stays open and warns **both** analysts rather than one. `Written only` when there is no overlap, which is the common case: 73% of organisations allow remote work at least some of the time, and the responders working remotely described the written handover permanently replacing the verbal one.

**Why the dead end is red, and where it now leads.** The goal of this job is to not spend the first hour rebuilding. Once the hour is spent it cannot be unspent, so the job failed. The analyst still has somewhere to go: the queue, rebuilding from the cases themselves, which is exactly the expensive path the job existed to avoid.

---

## R2: answer for a decision made months ago

> When a client or an auditor questions a decision made months ago, I want to show what was known at the time, so that the answer comes from the record instead of my memory.

```mermaid
flowchart TD
    S2([A client questions a decision from February]) --> Log[D1 Decision log]
    Log --> Load2["Loading: the log is large, narrowing before rendering"]
    Load2 --> Find{Is the case findable?}
    Find -->|no| Search["Empty: narrow by tenant, asset or date"]
    Search --> Find
    Find -->|yes| Entry2[Log entry carrying the evidence snapshot]
    Entry2 --> Intact{Is the snapshot intact?}
    Intact -->|no| Corrupt["Error: the snapshot did not survive, and the log says so rather than showing a gap"]
    Corrupt --> Live
    Intact -->|yes| Snap{Does the snapshot answer the question?}
    Snap -->|no| Live[Try the live evidence instead]
    Live --> Ret{Still retrievable?}
    Ret -->|no| Dead2["Dead end for this job: the answer rests on memory rather than the record"]
    Dead2 --> Own[Say so to the client, and log the gap]
    Ret -->|yes| Entry2
    Snap -->|yes| Answer[Answer assembled from the record]
    Answer --> Won(["Job closed: answered without a new investigation"])

    classDef success fill:#e6f4ee,stroke:#1c7a58,color:#123d2d;
    classDef dead fill:#fbeaea,stroke:#b3261e,color:#5c1512;
    classDef neutral fill:#ffffff,stroke:#c9ccce,color:#16181a;
    class S2,Won success;
    class Dead2 dead;
    class Log,Load2,Find,Search,Entry2,Intact,Corrupt,Snap,Live,Ret,Own,Answer neutral;
    linkStyle 0,1,2,5,6,9,15,16 stroke:#1c7a58,stroke-width:2px;
```

**Decisions.** Is the case findable. Is the snapshot intact. Does the snapshot answer the question. Is the live evidence still retrievable.

**States.** `Loading` before rendering, because the log is large. `Empty` on a search that returns nothing, recovering by narrowing on tenant, asset or date. `Error` when the snapshot itself did not survive, which is a different failure from the source having aged out, and the log has to **say so** rather than render a gap that looks like an answer.

**The dead end now ends in an action rather than in silence.** Saying so to the client and logging the gap is not the job closing; it is the honest version of failing it, and the gap becomes data about how well the record is holding.

**The same dead end appears in this flow and in the main one**, and that is the point. Both routes fail at the same place: evidence that no longer exists. The business outcome in `research.md` is the share of client escalations where the original evidence answered the question without new investigation, and this is the node that decides it.

---

## What the flows did not change, and one debt they record

**No new screens appeared.** Every screen node already exists in the concept sitemap: A1, B1, B2, C1, D1. `Pointer`, `Overlap`, `Esc`, `Own` and `Route` are steps or events rather than screens, and `Route` deliberately leaves the product.

**Recorded debt, found by the second instrument.** E1, F1 and F2 have no flows, because drawing a route for a deferred screen implies it is being built. The consequence is real and is written down here rather than left implicit: **when those screens come off the backlog they will arrive with no empty, error or loading states defined**, and whichever stage picks them up owes that work before drawing them.
