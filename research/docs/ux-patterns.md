# UX patterns

**The key task, in one sentence:** rule on cases the agent has already assembled, fast enough to keep up and well enough to defend, across forty clients whose normal is different.

Derived from the goal and audience in `CLAUDE.md` and the User outcomes block in `lean-ux-canvas.md`. Everything below is judged against that sentence and nothing else.

## Behavioural patterns of the audience

Five behaviours of a Tier-2 analyst carrying many tenants. **All five were inferences when written**, drawn from the competitor pass and the operator description in `CLAUDE.md`. None was observed, because no analyst had been interviewed.

**Updated at stage 02.** Follow-up research reached studies of practitioners, so three of the five have moved. Behaviour 2 is now supported by analyst quotes, behaviour 4 is supported in structure but not in cost, and behaviour 5 was corrected: the reader of the written record is the next analyst, not an auditor. Behaviours 1 and 3 remain unverified. Sources and quotes in `research.md`, section 8. Status is marked on each behaviour below.

**1. Pattern-matching before reading.** `ENTRY POINT` `[?]` `STILL UNVERIFIED AT STAGE 02` The analyst recognises the shape of a case before reading it: alert class, asset type, time of day, which client. The details then either confirm the match or break it. Reading comes second and only exists to check the match.

This is the entry point because it decides what the first glance has to deliver. If the shape of a case is not readable in a row without opening it, every downstream second is spent recovering. It is also why Expel's queue columns fail on our task: Last updated, Initial lead and Last action describe a record, not a shape (`competitors.md`, HARD). And it is why Cursor's row works: title, elapsed time, size of change and one line of what happened is exactly a shape (`competitors.md`, ASPIRATIONAL).

**2. Satisficing under volume.** `SUPPORTED AT STAGE 02` They look for the cheapest sufficient reason to close or escalate and stop there rather than optimising each case. Rational under load rather than sloppy, on the argument that perfect work on each case loses to a queue that grows faster than it is cleared. The design consequence, if the behaviour is real: whatever is cheapest to read becomes the reason, so the cheapest thing on screen had better be the most load-bearing.

**3. Trust set by the last failure, not the average.** `[?]` `STILL UNVERIFIED, BUT THE STARTING LEVEL IS NOW KNOWN AND IT IS LOW` Confidence in automation is not an average over time. One bad auto-close resets months of accumulated trust, and the analyst reverts to opening everything. If true, it means a published accuracy rate cannot carry trust on its own, which is what `benchmark.md` concluded from a different direction: latitude has to be visibly earned and visibly lost.

**4. Tenant switching resets context.** `SUPPORTED IN STRUCTURE, COST STILL [?]` Every change of client resets what counts as normal: which assets matter, which hours are odd, which service accounts are noisy. We further assume analysts batch by tenant where they can, to avoid paying this cost repeatedly. Both halves are unverified. This is the behaviour behind the open question in `competitors.md` about whether a merged queue helps or harms.

**5. Writing for the future auditor.** `CORRECTED AT STAGE 02: THE READER IS THE NEXT ANALYST` Anything that might be questioned later gets over-documented; anything that will not gets nothing. The analyst is not documenting for themselves and knows it. This is why a verdict interface that asks for free-text justification gets either a paragraph or the word "benign", with nothing in between.

## Five patterns, structurally different

Not variations. Five different answers to where the work lives on screen.

### A. Split-pane review

**How it works.** A persistent list on one side, full detail on the other. Keyboard moves between items without leaving the list. The detail pane is the workspace; the list is the context.

**Where it is used.** Mail clients, GitHub pull request review, Datadog's signal side panel, Expel Workbench (`competitors.md`).

**When it fits.** Decisions made in sequence, each needing deep evidence, where the operator benefits from seeing what is around the current item.

**When it breaks.** Detail content that genuinely needs full width, such as wide log tables or timelines. Small screens, where the split has to collapse and the pattern stops being itself.

### B. Focused card stack

**How it works.** One item fills the screen. Decide, and the next arrives. No list, no browsing, no sense of the pile.

**Where it is used.** Radiology worklists, content moderation queues, spaced-repetition study apps.

**When it fits.** Throughput above all, items genuinely independent, and comparison between items never useful. Removing the pile also removes the dread of it, which is a real effect on decision fatigue.

**When it breaks.** The moment the operator needs to defer, skip, or compare two cases. It also removes any sense of the whole, which for an operator responsible for forty clients is not a side effect but a loss of the job.

### C. Fleet map, overview to drill-down

**How it works.** Objects laid out spatially by state. The operator scans the field, senses where the trouble is, and dives in.

**Where it is used.** Datadog host maps, network operations video walls, air traffic control displays.

**When it fits.** The operator must hold the whole estate in their head and the important question is *where*, not *what next*.

**When it breaks.** Serial work. A map answers where attention is needed and then abandons the operator at the moment of deciding. It also scales badly downward: forty tenants is too few to need a map and too many to ignore.

### D. Conversational agent workspace

**How it works.** The operator talks to the agent. It surfaces work, answers questions, executes actions. The transcript is the interface.

**Where it is used.** Dropzone's built-in chatbot for ad-hoc Tier-2 investigation, Simbian, general assistant products (`competitors.md`).

**When it fits.** Open-ended investigation where the operator does not know the schema and cannot name what they want in advance. Genuinely good at the long tail.

**When it breaks.** Repetitive high-volume adjudication. Chat has no scannable state, no stable position for anything, and no keyboard rhythm. It also inverts the roles: the operator composes and the agent responds, when the product needs the agent to have already worked and the operator to judge.

### E. Command-driven console

**How it works.** No persistent list. The operator summons what they need by typing. The palette is the navigation, the search and the action layer at once.

**Where it is used.** Linear's command menu, Superhuman, developer tools generally.

**When it fits.** Expert operators with known intent, doing named things to named objects, many times an hour.

**When it breaks.** When the operator does not know what to ask for. In triage the entire problem is discovering what deserves attention, and a blank prompt cannot answer that. Excellent as an accelerator on top of another pattern, fatal as the pattern itself.

## The choice

**Split-pane review, with the fleet as the resting state of the detail pane.**

Concretely: the left side holds one cross-tenant queue that never leaves the screen. The right side holds the case when a case is selected, and holds the fleet, meaning per-tenant autonomy state and accuracy trend, when nothing is. The empty state of the detail pane is not empty; it is the dashboard. One pattern, two screens. `DESIGN DECISION`: the resting-state idea is an invention, not something the research found. It follows from the pattern rather than from evidence, and it should be tested like anything else.

**Reason 1. It is the only pattern that matches the entry-point behaviour.** The analyst pattern-matches first and reads second (behaviour 1). A persistent list beside the detail lets them confirm or break a match against what is around it, then move on without rebuilding context. A card stack removes the comparison, a map removes the detail, and a chat removes both.

**Reason 2. It is the only pattern that makes cheap override structurally possible.** The user outcome from `lean-ux-canvas.md` is that disagreement costs one action and keeps happening. That requires a keyboard rhythm: move, read, rule, move. Split-pane is the only one of the five where the list survives the decision, so the rhythm survives it too. In a card stack the rhythm exists but the context does not; in chat there is no rhythm at all.

**Reason 3. It is the structural expression of the gap we found.** Expel makes the tenant a dropdown in the top bar, so multi-tenancy means switching context one client at a time. Simbian isolates tenant data but sells one policy across all of them (`competitors.md`, difference 1). A cross-tenant list that persists beside the detail is what "one fleet, one queue" actually looks like in layout, rather than in a marketing sentence. The pattern is the argument.

**What this choice rests on, honestly.** Reason 1 rests on behaviour 1 and reason 2 on behaviour 2, and both behaviours are unverified inferences. **Only reason 3 stands on evidence collected this session**, the Expel tenant dropdown and Simbian's single public rate. The choice is therefore conditional: if stage 02 finds that analysts do not pattern-match before reading, or that they optimise rather than satisfice, reasons 1 and 2 fall and the pattern has to be re-argued from reason 3 alone. Reason 3 is strong enough to survive that, but the argument would be a different and narrower one, and stage 04 should not inherit this as settled.

**One thing to watch.** Behaviour 4 says tenant switching resets context, and a merged queue switches tenant on every row. That is the sharpest risk in this choice, and it is why the per-tenant base rate in the case header is not a nice-to-have but the thing that pays for the merged queue. If it does not work, the queue has to group by tenant and the fleet becomes the primary navigation rather than the resting state.

## The alternative, and when it wins

**Focused card stack.**

It wins if the first test in `lean-ux-canvas.md` shows analysts are slower with a persistent list because the list invites browsing instead of deciding, or if the residual queue turns out to be homogeneous enough that comparison never helps. Under either condition, forced one-at-a-time beats split-pane on raw throughput and reduces the decision fatigue that comes from watching a pile.

The switch would be cheap at this stage and expensive after stage 04, which is another argument for running that test first.

## The pattern that does not fit, and why

**Conversational agent workspace, as the spine of the product.**

Three reasons, in order of severity.

1. **It inverts the contract.** Harrier's premise is that Clerk has already worked and the analyst rules on it. In a chat the operator asks and the agent answers, which puts the human back in the position of doing the investigating through a slower interface. The name Clerk is the contract, and a chat-first product breaks it on the first screen.
2. **It has no state to scan.** Behaviours 1 and 2 both depend on reading a shape cheaply. A transcript has no stable positions, so nothing can be cheap to read twice, and the analyst pays full price for every glance.
3. **It cannot carry a queue.** Forty tenants and a residual queue need an ordering the operator can see and question. Chat can only ever show what was most recently said.

**What is not being rejected.** Chat *inside* the case file, as a way to ask Clerk a follow-up about evidence already on screen, is a good idea and probably necessary. Dropzone ships exactly that and it works there as a supplement to Tier-2 work, not as the spine (`competitors.md`, HARD). The rejection is of chat as the structure of the product, not of conversation as an element within it.
