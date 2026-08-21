# 0.8 Reading conventions

Five things every surface in this product renders, and none of them had a definition. Severity, time, effort, state chips and the fixtures the mockups are drawn with.

**This node exists because a reader with clean context tried to draw from the specification and could not.** Not one of the twenty two nodes was wrong. Each one said `severity`, `27m`, `9 signals`, `escalated`, `Meridian Health` as though the reader already knew what those meant, and nowhere did anything say. That is the class of defect no consistency check finds: every file agrees, and the set is still not enough to draw from.

---

## 1. Identity

| | |
|---|---|
| **Number** | 0.8 |
| **Name** | Reading conventions |
| **Type** | section, data. Not a screen and it never gets one |
| **Group** | `global` |
| **Scope** | MVP |
| **Parent** | none. Arrived discover-as-you-go at the stage 08 audit, like 0.6 and 0.7 |
| **Route** | **none** |
| **Read by** | 3.1, 3.5, 3.6, 4.1, 4.2, 5.1, 5.4, 2.1, and every node stage 04 draws |
| **Job** | none of its own. It serves design principles 1, 2 and 5 |

**Sibling to 0.6 and 0.7.** Those two are canonical lists of *values*. This one is the canonical list of *renderings*. Same reason for existing: several nodes read it, so it is defined once rather than restated, and a second edition would diverge first.

---

## 2. The drift, measured rather than suspected

Before writing the canon, the stage was counted. Before writing the canon, the stage was counted:

| Found | Where | Verdict |
|---|---|---|
| `Meridian Health` and `Meridian Freight` | 3.1, 0.1, 3.5 against 0.6, 0.3, 0.4, 0.7 | **Collision.** One prefix, two industries, and no node meant two clients |
| `Bramber Retail` and `Cadence Retail` | 3.1, 5.1, 3.5, 5.4, 2.1 against 0.4, 0.1 | **Collision** |
| `Halden Freight` and `Meridian Freight` | 3.5, 2.1 against 0.6, 0.3, 0.4 | Same client, two names |
| `Northwind`, with no industry at all | 0.6, 0.1, 0.4, 8.4 | The only name whose shape was never stated |
| `Vestry Capital` and `Aubrey Dental Group` | 3.1, 3.5, 2.1 and 0.1, 0.4 | Two more names, each carrying no role that another was not already carrying |
| `6m ago`, `as of 6m ago`, and `27m` | 0.4, 0.1, 3.1 | One value, three forms, and the middle one says the same thing twice |
| `1h 03m` | 3.1, both renderings | Two units where the glance can take one, and a leading zero on the smaller |

**Twelve tenant names across fourteen mockups.** None of this is visible reading one node. It is visible only reading the stage, which is what the fourth instrument is for.

**One thing this table does not say, because it was checked and did not hold.** The two ISO timestamps in the stage, `2026-06-08T22:41:03Z` on 5.4 and `2026-08-21T04:12:38Z` on 4.1, looked like one entry under two dates. They are two different records, and a log that holds only entries from today would be the stranger artefact. Logged here rather than deleted, because a finding that does not survive verification is still worth one line.

---

## 3. Severity, and it is three levels

| Level | Glyph | Rendered as |
|---|---|---|
| **High** | three bars filled | `High` |
| **Medium** | two bars filled | `Medium` |
| **Low** | one bar filled | `Low` |

**Glyph plus the word, always both.** Banked at step 4 from the Defender incident row, and taken for the reason recorded there: colour is not the only carrier, which is what stage 06 will need when colour arrives.

**Why three and not four or five.** Every level has to change what the analyst does next, or it is noise in a column that costs width on forty rows. Three is what the queue's ordering can actually act on. A fourth level would be a distinction she reads and then resolves the same way, and design principle 1 says a line that does not tell her what to do next has not earned its height.

**What severity is not.** It is not the action class from 0.6, and 0.6 says so in its own words: that ladder orders by reversibility, not severity, and isolating a production server is severe and cheap to undo. Two axes, and they are allowed to disagree on the same case.

**Open, and it is a real product question:** an MDR provider ingests severity from many source tools with incompatible scales. How a source scale maps onto these three is `[?]` and belongs to whoever owns ingestion, not to this stage.

---

## 4. Time, and there are two grammars because there are two questions

| Question | Grammar | Where |
|---|---|---|
| **How long has this been true?** | Elapsed, bare unit, no `ago`: `27m`, `4h`, `3d` | Queue rows, freshness, the age of a case, the annunciator window |
| **When exactly did this happen?** | ISO 8601 in UTC: `2026-08-21T04:12:38Z` | 5.1, 5.4, the snapshot, anything that leaves the product |
| **Which shift?** | Wall clock, and the surface names the zone: `19:00 to 07:00` | 2.1 only |

Four rules fall out and each is checkable on a drawing:

1. **Bare unit in a column, `ago` only in a sentence.** `ago` repeated down forty rows carries nothing and costs the width of a word forty times. In prose a duration needs its preposition, so prose keeps it.
2. **One unit, never two.** `1h 20m` is two numbers where the glance can take one. Round to the larger unit; precision that changes no decision is not precision.
3. **An absolute time never appears alone on a working surface, and an elapsed time never appears alone in the log.** She decides on elapsed. She defends on absolute. 4.1 carries elapsed with the absolute available, because it is the one surface that does both jobs.
4. **UTC in the log, and it is not a preference.** One analyst covers tenants across the United States and the EU, so a local rendering in an append only record makes two entries incomparable at the exact moment someone is trying to compare them.

---

## 5. Effort, and it is two different numbers that were wearing one word

The reader could not tell what unit `effort` was in. Reading the stage, there were two of them, owned by two nodes, meaning opposite things.

| Number | Whose cost | Unit | Where | Form |
|---|---|---|---|---|
| **What checking will cost** | **hers** | correlated **signals** in the case | the queue row, 3.1 | `9 signals` |
| **What Clerk spent** | **its** | **sources** queried, and the window | the provenance strip, 4.1 | `6 sources, 24h` |

**The two are bound by a constraint, and it is the useful part.** The signal count in the row is the number of lines the evidence block renders in the pane. The row is making a promise about how much reading is behind the verdict, and the pane is where that promise is kept or broken. Stage 04 draws the two together and checks the number is the same one.

**Never seconds.** 4.1 already ruled that `Thought for 20s` is the right instinct badly executed: time alone says the agent was busy, not what it read. So no duration is the headline of the provenance strip, and in the MVP it carries none at all.

**Count first, never a bare percentage.** Already the rule in design principle 2 and in 0.3. Restated here only because this is the node stage 04 will have open.

---

## 6. State chips, a closed set and a stacking rule

Five values, and the order below is the order they render in, because it is the order in which they change what she does next.

| Chip | Means | Set by |
|---|---|---|
| **`unrecorded`** | A verdict exists and the write did not land | 4.9, held at 4.10 |
| **`escalated`** | It left her hands | 4.6 |
| **`decided`** | Ruled, and still in place until the selection moves off it | 4.1, and see 3.1 section 4b |
| **`acted`** | Clerk already did something under its latitude | 0.6 |
| **`investigating`** | Clerk is still working, no verdict yet | 4.3 |

**A row renders at most two, highest first.** That is not a truncation rule, it is a claim about the taxonomy, and it is checkable: three of these can never be true at once. `investigating` excludes everything below a verdict, and `unrecorded` presupposes a verdict so it excludes `investigating`. The pairs that genuinely occur are three:

- `decided` and `unrecorded`, which is exactly 4.10
- `escalated` and `acted`
- `decided` and `acted`

**`blocked on her` is not one of these, and that is deliberate.** 3.1 sorts by it, so it has to be legible, but it is read from what Clerk concluded against the tenant's latitude and it renders as a mark on that phrase rather than a sixth chip. A chip would put a derived value in the slot reserved for facts about the case.

**If stage 04 finds a fourth pair, this rule is wrong and the taxonomy is what gets fixed, not the row.** A row that silently drops a state would break the rule from `CLAUDE.md` that a case which left the analyst's hands must not look identical to one that did not.

---

## 7. Fixtures, and the standing of every number in a mockup

**Seven tenants. These names and no others.**

| Tenant | Shape | Why it is in the set |
|---|---|---|
| **Larkfield Logistics** | mid market logistics | The canonical case belongs to this tenant. It appears on 3.1, 4.1, 4.2, 4.4, 5.1 |
| **Bramber Retail** | retail, many endpoints | The high volume tenant. Carries the fleet's best record |
| **Meridian Health** | healthcare, tight change control | The tenant where latitude is deliberately narrow |
| **Norsk Marine** | shipping, assets offline for days at a time | **The tenant where a stale reading is normal**, which is what makes 0.4's states concrete rather than hypothetical |
| **Halcyon Care** | care provider | The tenant with too few rulings to compare |
| **Halden Freight** | freight | Carried over a shift boundary on 2.1 |
| **Aubrey Dental Group** | small, few assets | The quiet tenant, which is what makes an empty result ambiguous |

Retired at this node, with where each one goes: `Meridian Freight` to **Halden Freight**, `Cadence Retail` to **Bramber Retail**, `Northwind` to **Norsk Marine**, `Vestry Capital` to **Meridian Health**, `Ashgrove Legal` to **Aubrey Dental Group**. Five names, none of which carried a role another was not already carrying.

**One canonical case: `C-4417`, at Larkfield Logistics.** Every node that draws a case draws this one, and the same case shows the same severity, the same signal count and the same verdict on 3.1, 4.1, 4.2 and 5.4.

**The case id carries no meaning, and that is a decision rather than laziness.** An id that encodes the tenant or the date leaks across tenant isolation the moment a link is pasted into a channel someone else can read, and it defeats 8.1, which requires that not found and not yours are indistinguishable. The id is short because it gets read aloud on a phone at 03:00.

**The standing of every number in a mockup, said once so no later stage has to ask:**

> Numbers in a wireframe are **fixtures, not findings**. They are sample content, chosen to make a layout decidable, and none of them is a measurement. No fixture may be quoted anywhere as evidence about the market, about analysts, or about this product's performance. What they must be is **internally consistent**: the same case, the same tenant and the same count read the same on every surface that shows them.

This is the same rule the project already runs on written claims, applied to the drawings, because the drawings are what stage 07 puts in colour and colour is what people believe.

---

## 8. Where each convention is read

| Convention | Read by |
|---|---|
| Severity | 3.1, 3.6, 5.1, 4.1, 2.1 |
| Time, elapsed | 3.1, 3.5, 0.3, 0.4, 4.1 |
| Time, absolute | 5.1, 5.4, 4.1 secondary |
| Time, wall clock | 2.1 |
| Effort, signals | 3.1 |
| Effort, sources | 4.1, 4.2, 5.4 |
| State chips | 3.1, 5.1, 4.1, 3.6 as a facet |
| Fixtures | every mockup, and every stage after this one |

---

## 9. Not this node

- **0.6** action classes. What Clerk may do, ordered by reversibility. A different axis from severity, and both may be on screen at once
- **0.7** rejection reasons. Written at 4.4
- **3.1** the row itself. This node says what the slots are rendered in; 3.1 says which slots exist and why each earns its width
- **3.5** the fleet's own ordering, which is a claim about the job rather than a rendering convention
- **05 Voice** owns the wording of interface strings. This node owns units, scales and forms. When 05 runs, a label may change wording; the unit behind it does not

---

## 10. Grounding

| Claim | Source | Standing |
|---|---|---|
| Severity as a three bar glyph plus the word | Defender incident row, banked at step 4 from a page opened this session | Fact about a reference |
| Reversibility rather than severity orders the action classes | 0.6, from Microsoft Learn response actions | Fact, argued there |
| `Thought for 20s` is time without content | 4.1, from the reference bank | Decision, argued |
| Three severity levels | this node | **Decision.** Untested with an analyst |
| Elapsed bare, absolute in UTC | this node | Decision |
| Signals for her cost, sources for Clerk's | this node, reconciling two existing usages | Decision |
| At most two chips, and only three pairs occur | this node | **Decision, and falsifiable at stage 04** |
| The seven tenants and `C-4417` | this node | Fixtures. Not findings, see section 7 |

---

## 11. Open questions

1. **How does a source tool's severity map onto three levels?** Belongs to ingestion, not to this stage. `[?]`
2. **Does the queue row need both the severity word and the glyph at 360?** Section 8 of 3.1 already drops the cost of checking on a phone. Whether the word survives is drawn, not argued.
3. **Is `acted` one chip or does it need the class with it?** `acted` alone says something happened; `acted, contained endpoint` says what. The second costs width on every row. Stage 04 decides by drawing forty of them.
4. **Who owns these conventions after the MVP?** Same question 0.6 and 0.7 both ended on, and still the same missing settings surface.
