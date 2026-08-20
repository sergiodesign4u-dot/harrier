# Harrier: user flows

Stage 03a, Step 4. Routes for the primary persona through the main job and two related ones.

**Declared substitution, third time.** The pack traces flows onto To-Be phases and takes decision points from As-Is barriers. Both CJM files are out of track, so the skeleton comes from `jtbd.md` and the decision points from the pains recorded in `personas.md`, which are quotes from practitioners rather than phases. **These flows are therefore the document that step-screens trace to in the matrix at Step 5.**

**Colour is semantic, not decorative.** Green marks the two ends of the happy path and the arrows along it. Red marks a genuine dead end, a node with no route left to the goal. Grey is everything between, including errors and empty states that recover back into the flow. Tokens are the light ones from `research/_page.css`, not the dark example in the pack.

**These diagrams are versioned as text.** An exported image would tell git that a file changed; the text tells it what changed in the route.

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
    Load --> Any{Anything waiting on a decision?}
    Any -->|no| Fleet["B2 Fleet: the resting state of the pane"]
    Fleet --> Queue
    Any -->|yes| Case[C1 Case File in the detail pane]
    Point --> Case
    Case --> Hold{Does Clerk's verdict hold?}
    Hold -->|not yet| Deeper[Evidence, one key deeper]
    Deeper --> Gone{Is the evidence still retrievable?}
    Gone -->|no| Dead["Dead end: source expired, this decision cannot be defended later"]
    Gone -->|yes| Base{Is this normal at this client?}
    Base -->|no base rate yet| NoBase["Empty: no baseline for this tenant"]
    NoBase --> Hold
    Base -->|answered| Hold
    Hold -->|holds| Accept[Accept]
    Hold -->|holds with changes| Amend[Amend the narrative]
    Hold -->|does not hold| Reject[Reject and name the reason]
    Reject --> Route["Reason routed to tuning, off this screen"]
    Accept --> Filed
    Amend --> Filed
    Route --> Filed
    Filed[Verdict filed with the evidence snapshot] --> Log["D1 Decision log entry written"]
    Log --> Win(["Job closed: decided, and answerable in April"])

    classDef success fill:#e6f4ee,stroke:#1c7a58,color:#123d2d;
    classDef dead fill:#fbeaea,stroke:#b3261e,color:#5c1512;
    classDef neutral fill:#ffffff,stroke:#c9ccce,color:#16181a;
    class Start,Win success;
    class Dead dead;
    class Queue,Brief,Point,Load,Any,Fleet,Case,Hold,Deeper,Gone,Base,NoBase,Accept,Amend,Reject,Route,Filed,Log,Entry neutral;
    linkStyle 0,1,2,3,4,5,8,9,10,18,19,20,21,22,23,24,25,26 stroke:#1c7a58,stroke-width:2px;
```

**Activation node: `Filed`.** From `aarrr.md`: the analyst rules on a Clerk-assembled case, with the evidence in view, and files it. It is a named node above rather than something implied.

**Distance from the start: two screens.** Queue, then Case File. The limit is three, so the route does not defer first value further than the research promised.

**Decisions.** Is this the first screen of the shift. Is anything waiting on a decision. Does Clerk's verdict hold. Is the evidence still retrievable. Is this normal at this client.

**States.** `Loading` while the queue streams. `Empty` when nothing waits, in which case the fleet fills the pane rather than a blank. `Empty` again when a tenant has no baseline yet, which is a real case for a newly onboarded client and recovers back into the decision.

**The dead end is deliberate and it is only one.** If the underlying source has aged out, the analyst can still escalate, but the job as written cannot close: the decision will not be defensible in April. Everything else in this diagram recovers.

**All three verdicts are green.** Accept, amend and reject all lead to `Win`, and the highlighted arrows say so. This is design principle 3 rendered in a diagram: rejecting Clerk is a first-class outcome, not a fallback path. A flow that painted only `Accept` as the happy path would be arguing against the product.

**R3 has no separate flow, on purpose.** Teaching the agent lives on the `Reject` and `Route` nodes above. The rest of that job leaves the analyst's screen entirely and lands on a detection engineer, who is not a user of this product. Drawing a flow for it would be drawing somebody else's product.

---

## R1: pick up and hand off a shift

> When I take over a rotation somebody else was working, I want to know what changed and what is waiting on a decision, so that I do not spend my first hour rebuilding what the last shift already knew.

```mermaid
flowchart TD
    S1([End of shift approaching]) --> Acc[A1 has been accumulating all shift]
    Acc --> Open{Anything still open?}
    Open -->|no| Thin["Empty: nothing carried over, the brief is short"]
    Open -->|yes| List[Pointers to open cases and what each waits on]
    Thin --> Close
    List --> Auto{Did any tenant change latitude this shift?}
    Auto -->|yes| Grants[Autonomy changes, each with the evidence behind it]
    Auto -->|no| Close
    Grants --> Close[A1 Shift brief closed by the outgoing analyst]
    Close --> Sync{Does the incoming analyst arrive before it closes?}
    Sync -->|yes| Overlap[Overlap: questions asked while both are present]
    Sync -->|no| Written["Written only: no chance to ask"]
    Overlap --> Take
    Written --> Take[A1 read by the incoming analyst]
    Take --> Ready{Is what waits on a decision clear?}
    Ready -->|no| Rebuild["Dead end: the first hour goes to rebuilding context"]
    Ready -->|yes| Go(["Job closed: the shift starts already oriented"])

    classDef success fill:#e6f4ee,stroke:#1c7a58,color:#123d2d;
    classDef dead fill:#fbeaea,stroke:#b3261e,color:#5c1512;
    classDef neutral fill:#ffffff,stroke:#c9ccce,color:#16181a;
    class S1,Go success;
    class Rebuild dead;
    class Acc,Open,Thin,List,Auto,Grants,Close,Sync,Overlap,Written,Take,Ready neutral;
    linkStyle 0,1,3,5,7,9,10,12,14,16 stroke:#1c7a58,stroke-width:2px;
```

**The first node carries the correction from stage 02.** The brief has been accumulating all shift; it is not written at the end. The interviewed responders put the failure mode exactly at the end of the shift, and one of them had already solved it by letting the notes accumulate through the day.

**Decisions.** Is anything still open. Did any tenant change latitude. Does the incoming analyst overlap with the outgoing one. Is what waits on a decision clear.

**States.** `Empty` when nothing carries over, which is a good outcome and should not look like a broken screen. `Written only` when there is no overlap, which is the common case: 73% of organisations allow remote work at least some of the time, and the interviewed responders working remotely described the written handover permanently replacing the verbal one.

**Why the dead end is red rather than grey.** The goal of this job is not to spend the first hour rebuilding. Once the hour is spent it cannot be unspent, so there is no route back to the goal. The analyst still works; the job still failed.

---

## R2: answer for a decision made months ago

> When a client or an auditor questions a decision made months ago, I want to show what was known at the time, so that the answer comes from the record instead of my memory.

```mermaid
flowchart TD
    S2([A client questions a decision from February]) --> Log[D1 Decision log]
    Log --> Find{Is the case findable?}
    Find -->|no| Search["Empty: narrow by tenant, asset or date"]
    Search --> Find
    Find -->|yes| Entry2[Log entry carrying the evidence snapshot]
    Entry2 --> Snap{Does the snapshot answer the question?}
    Snap -->|no| Live[Try the live evidence instead]
    Live --> Ret{Still retrievable?}
    Ret -->|no| Dead2["Dead end: the answer rests on memory rather than the record"]
    Ret -->|yes| Entry2
    Snap -->|yes| Answer[Answer assembled from the record]
    Answer --> Won(["Job closed: answered without a new investigation"])

    classDef success fill:#e6f4ee,stroke:#1c7a58,color:#123d2d;
    classDef dead fill:#fbeaea,stroke:#b3261e,color:#5c1512;
    classDef neutral fill:#ffffff,stroke:#c9ccce,color:#16181a;
    class S2,Won success;
    class Dead2 dead;
    class Log,Find,Search,Entry2,Snap,Live,Ret,Answer neutral;
    linkStyle 0,1,4,5,10,11 stroke:#1c7a58,stroke-width:2px;
```

**Decisions.** Is the case findable. Does the snapshot answer the question. Is the live evidence still retrievable.

**States.** `Empty` on a search that returns nothing, which recovers by narrowing on tenant, asset or date.

**The same dead end appears twice, in this flow and in the main one**, and that is the point. Both routes fail at the same place: evidence that no longer exists. The business outcome in `research.md` is the share of client escalations where the original evidence answered the question without new investigation, and this is the node that decides it.

---

## What the flows did not change

**No new screens appeared.** Every node that is a screen already exists in the concept sitemap: A1, B1, B2, C1, D1. `Pointer`, `Overlap` and `Route` are steps or events rather than screens, and `Route` deliberately leaves the product.

**R4 has no flow** because it is scoped LATER, and drawing a route for a deferred screen would imply it is being built.
