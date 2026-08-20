# Benchmark

**The dimension: calibrated trust in an automated agent.** The operator knows exactly how much to trust Clerk right now, on this tenant, and that trust is earned and visible rather than asserted.

That one line is the load-bearing sentence of this file. Stage 04 has to show it with a concrete element on the reference screen, and stage 07 has to check it did not dissolve.

Why this dimension and not another: the competitor pass found that every vendor in the category sells the number of things the human no longer sees, and none designs the moment the human still has to decide. Defensibility of a decision and speed under volume both matter, but both are consequences. An analyst is fast because they trust the case file in front of them, and a verdict is defensible because the evidence behind it was visible when it was made.

These are not category leaders. They come from outside security, from fields that have been calibrating human trust in automation on real people for decades.

## Criteria

Eight criteria, scored 1 to 5.

| # | Criterion | What a 5 looks like |
|---|---|---|
| 1 | **Stated scope of competence** | The system says where it works and where it does not, before you rely on it, in terms you can check |
| 2 | **Mode legibility** | At any moment the operator can read what the automation is doing and who holds control, without inferring it |
| 3 | **Evidence on demand** | The reasoning behind an output is one step away and readable without understanding the model |
| 4 | **Calibration measured and published** | The confidence number is checked against outcomes and the track record is public |
| 5 | **Graceful handoff** | At its limit the system hands control back with enough warning and context to act |
| 6 | **Cost of override** | Disagreeing is cheap, immediate, and recorded rather than discarded |
| 7 | **Failure disclosure** | Errors are surfaced by the system rather than discovered by the operator |
| 8 | **Trust moves with evidence** | Latitude given to the system changes over time on measured performance, not on a setting someone forgot |

## Scores

| Criterion | Waymo | NWS forecast | Aviation FMA | Stockfish on Lichess |
|---|---|---|---|---|
| 1 Stated scope | 5 | 5 | 4 | 3 |
| 2 Mode legibility | 2 | 3 | **5** | 3 |
| 3 Evidence on demand | 3 | 4 | 2 | **5** |
| 4 Calibration published | 5 | **5** | 1 | 3 |
| 5 Graceful handoff | 1 | 2 | **5** | 2 |
| 6 Cost of override | 1 | 3 | 5 | **5** |
| 7 Failure disclosure | 4 | 4 | 4 | 2 |
| 8 Trust moves with evidence | **5** | 4 | 1 | 2 |

Four products, not five. A fifth candidate, clinical triage AI, was opened at [aidoc.com](https://www.aidoc.com/platform/aios/) and dropped: the public pages carry solution marketing and no examinable mechanism for how a radiologist is shown what to trust. Rather than pad the table with a product whose relevant behaviour is behind a hospital deployment, the entry is left out and the reason recorded.

## Observations

**Waymo** ([waymo.com/safety](https://waymo.com/safety/), read 2026-08-20). The mission statement is literally "Be the world's most trusted driver", and the safety page is built as an argument rather than a claim: a Safety Case Framework, a public dashboard, and comparative results against a human driver over the same distance in the same cities. The detail worth stealing is the number formatting. Every percentage is paired with an absolute count: "94% fewer serious injury or worse crashes" sits next to "47 FEWER". A percentage alone is unfalsifiable and reads as marketing; the absolute count makes it checkable and, oddly, more modest. Trust is earned geographically, one city at a time, which is the strongest real-world example of criterion 8.

**National Weather Service probability of precipitation** ([weather.gov/lmk/pops](https://www.weather.gov/lmk/pops), read 2026-08-20). The most precise definition of a confidence number in public use. "30% chance of showers" unpacks to: a 30% chance that at least 0.01 inches of rain falls **at the point** the forecast is valid for, **over the stated period**, typically 12 hours. Three qualifiers, all mandatory: what event, where, over what window. Remove any one and the number means nothing and cannot be checked. Calibration is then measured with reliability diagrams, plotting observed frequency against forecast probability; a calibrated forecast sits on the diagonal. This is the standard a confidence score in a product should be held to, and almost none are.

**Flight Mode Annunciator** ([skybrary.aero](https://skybrary.aero/articles/flight-mode-annunciator-fma), read 2026-08-20). The best mode legibility mechanism that exists, refined against decades of mode confusion accidents. It lives permanently across the top of the Primary Flight Display, never in a panel you open. It carries two states at once, armed and active, colour coded: green for active, white or blue for armed, so the pilot sees both what the automation is doing and what it is about to do. SKYbrary states the direction of communication plainly: "pilots tell the aircraft what they want it to do by making selections on the Guidance Panel. The aircraft tells the pilots what it's doing, and what it's about to do, by the symbols on the FMA." And the detail that matters most for Harrier: **override is itself an annunciated mode.** When a pilot pushes the thrust levers manually, the FMA displays OVRD. Human control is not the absence of a state, it is a state with a name, shown in the same place in the same language. Training codifies the discipline: do not press a button and assume, press it and then read the annunciator.

**Stockfish evaluation on Lichess** ([lichess.org/analysis](https://lichess.org/analysis), read 2026-08-20). One horizontal strip carries four separate things: the estimate `+0.2`, the engine identity and configuration `SF 18 dev, 85MB NNUE`, the effort spent `Depth 75`, and the provenance `CLOUD`, meaning the answer came from a shared precomputed store rather than this browser. Below it, the reasoning is a concrete line of play, `1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.d3 Bc5 5.O-O d6`, not a paragraph about it. Depth is the idea worth taking: it answers **how hard did it look**, which is a different and often more useful question than how sure it is. A shallow confident answer and a deep confident answer are not the same object, and only one of the two deserves a fast accept.

## Top three mechanisms into the MVP

**1. Armed and active, in a fixed place, with override as a named state.** From the FMA.

Per-tenant autonomy renders two states, always in the same position on both screens: what Clerk is **permitted** to do at this client, and what it is **doing** right now. Colour separates them the way green and blue separate active from armed. When an analyst overrides, that becomes its own annunciated state rather than the quiet absence of automation.

Why it works: mode confusion is not a knowledge failure, it is a display failure. Operators do not forget what the automation can do, they lose track of which mode is live because the state was inferable rather than readable. A fixed position turns a memory task into a glance. Aviation learned this by crashing aircraft, which is a stronger form of evidence than a usability study.

**2. A confidence number that names its claim, its scope and its window, paired with an absolute count.** From NWS and Waymo.

Clerk never shows a bare percentage. It shows what event, at which tenant, over what window, in a form that can be checked afterwards: not "87% confident", but "at Meridian Dental, 9 of the last 11 cases matching this pattern in 30 days were benign". Where a rate is shown, the count comes with it.

Why it works: a bare probability cannot be wrong, so it cannot earn trust either. Give it a claim, a scope and a window and it becomes falsifiable, and a number that can be caught being wrong is the only kind worth believing. The absolute count also defeats the small-sample illusion: 90% reads identically whether it stands on 9 cases or 900, and the analyst needs to know which.

**3. A provenance strip: what produced this, how hard it looked, and where the answer came from.** From Lichess.

Every Clerk output carries a compact line naming the model, the effort spent, and the source: which sources were queried, how many, over what time. Read once, ignored thereafter, present when it matters.

Why it works: it separates two questions the interface usually collapses. "How sure is it" and "how hard did it look" are different, and the second predicts the first badly. A high confidence produced from one source in two seconds and a high confidence produced from six sources over four minutes deserve different amounts of the analyst's attention, and no confidence score distinguishes them.

## One mechanism that will not work here

**Waymo's path to trust: earn it by removing the human, one bounded geography at a time.**

It works there for reasons Harrier does not have. The geography is mapped and bounded, one operator owns all the liability, the fleet is homogeneous, and the rider has no decision to make and no expertise to apply. Trust accrues to the company, not to a person inside a shift.

In Harrier the operator is accountable to 40 different clients with 40 different risk appetites, the "geography" is 40 environments that change every week as tools are added and staff turn over, and the entire premise is that a human still rules. Designing toward the analyst's eventual absence would put the product back on the market consensus it exists to argue with, and would make every screen a waiting room.

Take Waymo's honesty about a published track record. Do not take its endgame.
