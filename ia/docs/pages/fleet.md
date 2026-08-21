# 3.5 Fleet, the resting state of the detail pane

The differentiator, in the one place it was promised: not on a configuration page, but in the pane the analyst is already looking at, at zero taps.

It is also **the biggest bet in the product**, and this node says so before it says anything else.

---

## 1. Identity

| | |
|---|---|
| **Number** | 3.5 |
| **Name** | Fleet, the resting state of the detail pane |
| **Type** | section. Renders in the same pane as 4.1 |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | B2 on the concept map. Scope carried |
| **Page type for the bank** | **D, the fleet and the scope bar** |
| **Route** | **none, and it never gets one.** This is the decision that makes it cost zero taps |
| **Permission** | tenants inside the analyst's provider scope, and only those |
| **Job** | **P2-MAIN.** Also HJ1 |

**3.5 has no route on purpose.** The fleet has no navigation item because it is what the detail pane shows when nothing is selected. Giving it a route would give it a tap, and the tap is the thing the decision was made to avoid.

---

## 2. What is not our claim, said first

Microsoft ships a cross tenant console. Opened this session, verbatim: multitenant management *"provides your security operations teams with a single, unified view of all the tenants you manage"*, and MSSP partners *"gain visibility into cases, security incidents, alerts, and threat hunting across multiple customers through a single pane of glass"*.

**So "one view across forty tenants" is not ours, and this node never presents it as one.**

Two things survive that page, and they are the whole node:

| What Defender does | What 3.5 does |
|---|---|
| The tenant list lives at `Configuration > Settings`, described as a page to *"view and manage your tenants"* | The tenant list is the resting state of the working pane. **Administration versus operation** |
| Per tenant values are inventory: *"device counts across different values such as device type, device value, onboarding status, and risk status"* | Per tenant values are **latitude in force and the record that earned it** |

`jtbd.md` records Gap 1 as *"nobody sells a fleet view of trust"*. That still stands. What does not stand, and has been corrected here, is any suggestion that nobody sells a fleet view at all.

---

## 3. And it is a bet, not a finding

`CLAUDE.md` names the riskiest assumption: **an analyst carrying 40 tenants decides faster and more defensibly when the agent's latitude varies per client than under one flat policy.** If that is false, per tenant trust is forty things to remember and this node is overhead with a nice layout.

The supporting evidence is thin and the files say so rather than hiding it:

| Claim | Status in the research |
|---|---|
| An analyst checks where the agent earned latitude at shift start | **HJ1 is `[?]`.** `jtbd.md` records it as *"our own writing rather than an analyst's"*, to be verified by asking three MDR analysts what they check first |
| The fleet matters to the primary persona | **`[?]`.** The matrix scores P2-MAIN importance to P1 as unverified: *"whether an analyst needs the fleet at all is unverified"* |
| Latitude is genuinely per action class, not global | **Fact.** Simbian, quoted in 0.3 |

**What would falsify it, in the form a test can use:** if analysts scan the fleet and then check every case the same amount anyway, the fleet is decoration. First test in `research/docs/lean-ux-canvas.md`, section 8.

This section exists so that stage 07 cannot quietly promote the bet to a feature.

---

## 4. Blocks, in priority order

From `ia/docs/blocks.md`, type D.

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **Pane header.** `Fleet`, the tenant count, and that nothing is selected. It names itself, because the whole decision rests on it not reading as empty | Ours, from the base layer rule | P2-MAIN | MVP |
| **2** | **One row per tenant**, ordered by where attention is owed rather than alphabetically | n8n Insights per unit breakdown table | P2-MAIN | MVP |
| **3** | **Acts alone up to**, the highest action class at which Clerk acts without asking at this tenant. Same two axes as everywhere: the class from 0.6, the level from the three in 0.6 section 5 | 0.3 reading B, plus 0.6 | P2-MAIN, the differentiator | MVP |
| **4** | **The record, count first**: upheld out of ruled, over a stated window | 0.3, and the `71%` row banked DIFFERENT in type A | design principle 2 | MVP |
| **5** | **The trend as two counts, not a line.** This window against the one before it | Ours. Section 5 | design principle 2 | MVP |
| **6** | **Tenant groups** as the unit of narrowing, shared with 3.6 | Defender: *"Organize the tenants you manage into named groups"* | 3.6 | MVP |
| **7** | Per tenant detail on selection | Defender's *"for all tenants and at a tenant-specific level"* | 7.1 | **LATER**, 7.1 is LATER |

**Deliberately absent:** KPI cards above the table, charts as the primary reading, and any control that changes a grant.

**The last one is a scope decision with teeth.** 3.5 is **readable, not settable**. Changing what Clerk may do is 7.2, which is LATER, so in the MVP an analyst who disagrees with a tenant's latitude has **nowhere to go from here**. That is a named gap, not an oversight, and it is recorded in section 9.

---

## 5. The trend is two counts, and that is the finding of this node

Every reference in the bank reaches for a chart or a percentage at exactly this point. Defender shows `Queue reduction: 71%, last 30 days`. Fingerprint and n8n both put a line chart above the table.

**None of those is readable at a glance across forty rows.** A sparkline at row height is a texture, and a percentage without its count is what design principle 2 forbids in its own words.

So the trend renders as **the same count twice**:

```
34 of 36        30 days
was 31 of 36    the 30 days before
```

Three properties fall out of that and none of them needs a chart:

1. The direction is legible without decoding, because the two numbers are the same shape
2. The **denominator is visible**, so `12 of 17` and `120 of 170` never look alike
3. A tenant with too few rulings to compare says `too few to compare` rather than rendering a movement that means nothing. That is the same refusal 4.8 makes about a base rate

**Whether a sparkline earns its width beside the two counts is `[?]`**, and stage 04 decides it by drawing the row at forty rows rather than at five.

---

## 6. Ordering, and it is a decision

Alphabetical is the obvious order and it is wrong: it puts attention wherever the client's name happens to start.

The fleet orders by **where attention is owed**, in this priority:

1. Tenants whose record moved down against the previous window
2. Tenants with latitude in force and too few rulings to compare, which is rope granted on thin evidence
3. Everything else, alphabetically

**This ordering is a claim about the job, so it is falsifiable with the rest of the bet.** If the analyst's actual question at shift start is "what is my worst client doing" rather than "where did trust move", the order is wrong and the row is fine.

---

## 7. State matrix

| Element | Default | Narrowed by 3.6 | Tenant with no record | Connection stale, 3.3 | Out of scope |
|---|---|---|---|---|---|
| **Header** | `Fleet, 40 tenants, nothing selected` | `Fleet, 12 tenants in scope` and the narrowing is named | Unchanged | Unchanged, plus the age of the reading | Counts only what is in scope |
| **Rows** | All in scope, ordered by section 6 | Only the narrowed set | Present, with `no rulings yet` | The last good reading, marked | Tenants outside scope are never rendered, not even greyed |
| **Latitude** | The highest class in force | Same | **Shown, and marked as granted without a record behind it.** This is the state that most deserves the analyst's attention | As of last sync | n/a |
| **Record** | `34 of 36, 30 days` | Same | `no rulings yet` | As of last sync | n/a |
| **Trend** | Two counts | Same | `too few to compare` | Frozen and marked | n/a |
| **Agreement with 0.3** | The annunciator in the shell reads the same highest latitude and the same count | Same | Same | Same, both marked stale | Same |

**The last row is a hard constraint, not a nicety.** 0.3 reading B and this node read the same underlying value in two places on the same screen. If they can disagree, the differentiator is a bug rather than a feature, and the analyst learns to trust neither.

**The stage 08 audit found that constraint was not drawable.** Reading B counted levels in Simbian's vocabulary while this node listed action classes, so the two could not be compared even in principle. Both now say **acts alone up to `<class>`**, and reading B adds how many tenants stand there. The constraint is now a thing a person can check on screen.

---

## 8. At 360

**Not rendered.** 3.1 already settled this: the fleet is a desk instrument, and at 360 the list becomes the whole page with no pane to rest in.

Saying so is better than shrinking forty rows of latitude into something unreadable. The mobile scenario is read and escalate one paged case, and the fleet serves neither half of it.

---

## 9. Emotional support, and the gap in it

One mechanism in the `sitemap.md` table points at this territory, and in the MVP it does not land here.

| Job | Mechanism | Where it lives |
|---|---|---|
| **Emotional, P2.** Be able to point at why, so I am not the person who guessed | Every autonomy grant carries the evidence that justified it and the date | **7.1 and the grant history in 5.1.** Both are LATER for 7.1 |

So in the MVP the fleet shows **that** a tenant has latitude and what record stands behind it, but not **why it was granted or when**. The analyst can see the state; the person who has to defend the state cannot yet reach the reason from here.

That is a real hole and it is the same one section 4 names: readable, not settable, and not yet explainable. It is a backlog entry rather than a defect, because 7.1 is deliberately out of the MVP.

---

## 10. Not this node

- **0.3** the annunciator. It reads the same values into the shell strip; this node is the full reading, the strip is the one line version
- **0.6** the action classes. The ladder and its ceilings are defined there
- **3.1** the queue beside it, and the pane it sits in, which belongs to 0.1
- **3.6** the scope bar. Narrowing the fleet and narrowing the queue are the same control
- **7.1 and 7.2** tenant detail and the grants themselves. LATER, and everything settable lives there
- **5.1** the log, where a grant change would be recorded once 7.3 exists

---

## 11. Grounding

| Claim | Source |
|---|---|
| A cross tenant unified view is shipped, and it is not ours | Microsoft Learn, Defender multitenant management, opened this session |
| Their tenant list is an administration page | Same page: `Configuration > Settings`, *"Lists the tenants you have access to. Use this page to view and manage your tenants."* |
| Their per tenant values are inventory | Same page: *"device counts across different values such as device type, device value, onboarding status, and risk status"* |
| Named tenant groups as the unit of scope | Same page: *"Organize the tenants you manage into named groups"* |
| Latitude is per action class, not global | Simbian, quoted verbatim in 0.3 |
| A percentage without its count fails design principle 2 | `CLAUDE.md`, and the `71%` row in `blocks.md` type A |
| Whether the analyst needs a fleet at all | **`[?]`**, `jtbd.md`. Not resolved, and this node depends on it |

---

## 12. Open questions

1. **Does a sparkline earn its width next to the two counts?** Decided at stage 04 by drawing forty rows, not five. The two count form ships either way; the chart is additive or absent.
2. **Does the fleet show all forty, or only the tenants that need attention?** Forty rows is a scroll inside a pane. Showing eight is a decision about what the analyst does not see, which is the more dangerous kind.
3. **What does a tenant row do on click in the MVP, when 7.1 does not exist?** Options: nothing, filter the queue to that tenant, or a small expansion in place. Currently unspecified, and it is the most likely place for a dead end.
4. **Does the ordering in section 6 match what an analyst actually asks at shift start?** Same test as the bet in section 3, and the same three analysts answer both.
