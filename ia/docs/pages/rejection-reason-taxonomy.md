# 0.7 Rejection reason taxonomy

**The interface to a person who never opens this product.** Entity 8 in the inventory names the detection engineer as the recipient of a rejection reason, and the inventory also records that this person is a non-user with no screen in the MVP. So the taxonomy is the only thing that reaches them, and if it carries nothing actionable, design principle 3 is a slogan.

---

## 1. Identity

| | |
|---|---|
| **Number** | 0.7 |
| **Name** | Rejection reason taxonomy |
| **Type** | section, and the underlying object is data |
| **Group** | `global` |
| **Scope** | MVP |
| **Parent** | none. Discovered at the gate that closed the global elements |
| **Written at** | 4.4, reject with a reason |
| **Read by** | 5.1 the log, 5.6 the history of a case, and a tuning pipeline outside the product |
| **Recipient** | the detection engineer, who has no screen here |

---

## 2. What the market captures, and where it loses the useful half

Microsoft Defender, manage incidents page opened this session, offers these classification values verbatim: **Not set** the default, **True positive** with a type of threat, **Informational, expected activity** with a type of activity, and **False positive** "for types of incidents that you determine can be ignored because they're technically inaccurate or misleading". The page states the purpose plainly: "Classifying incidents and specifying their status and type helps tune Microsoft Defender to provide better detection determination over time."

Alongside it sits a free text resolution note, and comments where "Each comment is limited to 30,000 characters."

**That shape has a hole, and the hole is the whole reason this node exists.** `False positive` says the alert was wrong. It does not say **what should change**, and the thing that would say it is thirty thousand characters of prose that no tuning pipeline can read. The structured half is auditable and useless; the useful half is unstructured and unreadable at scale.

**And our object is not the same object.** Defender classifies an alert. Harrier rejects **an agent's conclusion**. Clerk has already classified; the analyst is ruling on the classification. A taxonomy borrowed unchanged would record what the alert was and lose what Clerk got wrong.

---

## 3. Two axes, and the pairing is the point

| Axis | Question | Consumer |
|---|---|---|
| **A. What was wrong** | What did Clerk get wrong about this case | The auditor in April, and the record |
| **B. What should change** | What has to be different next time, and where | The detection engineer, the tenant baseline, or Clerk itself |

**Axis A alone is a complaint. Axis B alone is unaudited.** Together they are the only form in which a rejection both defends the decision months later and does something before the next shift.

### Axis A, what Clerk got wrong

| Value | Means |
|---|---|
| **Real, called benign** | Clerk closed something that is a threat. The most expensive error in the product |
| **Benign, called a threat** | The ordinary false positive, seen from the agent's side |
| **Right answer, wrong reasoning** | The verdict holds but the evidence does not support it. Accepting it would put an unsound argument in the record |
| **Right answer, wrong scope** | Correct about the event, wrong about how many assets or accounts it touched |
| **Not enough evidence either way** | Clerk should have escalated rather than concluded. A verdict is being rejected for existing, not for being wrong |
| **Normal at this tenant** | Correct in general, wrong here. The base rate answer, and it is the one that must not be routed to the detection engineer |
| **Other, and say why** | None of the six fits. Free text becomes required, nothing is routed, and the value is counted |

**The seventh value was written in the state matrix below and left out of this list, and stage 04 found it by trying to draw the list.** It is last on purpose and it is named rather than blank: a taxonomy whose easiest answer is `other` stops describing anything, and a count is the only thing that can tell you it has happened.

### Axis B, where it goes

| Value | Routed to | Effect |
|---|---|---|
| **Detection is too broad** | detection engineering | The rule fires on things it should not |
| **Detection is too narrow** | detection engineering | It missed, and only Clerk's wider correlation caught it |
| **Tenant context missing** | the tenant baseline | This asset, user or application is expected here. Nothing outside this client changes |
| **Clerk weighted the wrong signal** | agent tuning | The evidence was present and read wrongly |
| **Nothing to change** | nowhere | A genuine one off. Recorded so the count of these is visible |

**`Normal at this tenant` must pair with `Tenant context missing`, never with a detection change.** Sending one client's normality to detection engineering is how a rule gets weakened for thirty nine other tenants who did need it. This is the single most consequential pairing rule in the taxonomy, and it comes straight from design principle 4: the same signal is a Tuesday at one client and an incident at another.

---

## 4. What it costs the analyst, which is the constraint

Design principle 3 says override is one key. A rejection that asks for two dropdowns and a paragraph is not one key, and at 03:00 it will be answered with whatever is at the top of the list.

**So the interaction is: one keystroke picks axis A. Axis B is derived from it and only asked when the pairing is genuinely ambiguous.**

| Axis A | Axis B, derived | Asked? |
|---|---|---|
| Real, called benign | Detection is too narrow | No |
| Benign, called a threat | ambiguous: too broad, or tenant context | **Yes, one choice of two** |
| Right answer, wrong reasoning | Clerk weighted the wrong signal | No |
| Right answer, wrong scope | Clerk weighted the wrong signal | No |
| Not enough evidence either way | Nothing to change | No |
| Normal at this tenant | Tenant context missing | No, and it is locked |
| Other, and say why | Held, not routed | No, and the free text becomes required |

**Five of six need no second question.** That count is what makes the structure affordable, and it is why the taxonomy was designed as a pairing rather than as two independent lists.

**Free text stays, and it is never the carrier.** Optional everywhere except under `Other`, additive, and read by humans only. Stage 02 found that handover quality varies widely between individuals and that no organisation trains it; structure is what removes the variation, so nothing downstream may depend on the prose.

---

## 5. State matrix

| Situation | 4.4 reject | 5.1 log | Tuning route |
|---|---|---|---|
| Ordinary rejection | Axis A by keystroke, axis B derived | Both axes recorded with the evidence snapshot | Routed on write |
| Ambiguous pairing | Second question, two options, still keyboard | Both recorded | Routed on write |
| `Normal at this tenant` | Axis B locked and shown as locked | Both recorded | Tenant baseline only. **Never detection** |
| Analyst disagrees with every value | Free text required, axis A set to a named `other` | Recorded and **counted** | Held, not routed |
| Rejection while the verdict fails to write | Reason held with the verdict | Nothing yet | Deferred until 4.10 resolves |

**`Other` is counted rather than swallowed.** A taxonomy where five per cent of rejections are `other` is working; one where thirty per cent are is a taxonomy that describes the wrong product, and the only way to know is to count. This is the idle control on this list.

---

## 6. Not this node

| Not here | Lives at |
|---|---|
| The interaction that captures it, keys and layout | 4.4 |
| Accepting or amending, which are not rejections | 4.1, 4.5 |
| Where the reason appears months later | 5.4, 5.6 |
| What Clerk does with the feedback | outside the product |
| The class of action Clerk proposed | 0.6 |

---

## 7. Grounding and open questions

**Every question below carries a verdict at the end of this file.** 0 settled, 0 drawn at stage 04, 3 still open, decided at the close of stage 03b so that stage 04 draws against answers rather than against a list.

| Claim | Source | Standing |
|---|---|---|
| The four classification values a major XDR ships | Microsoft Learn, manage incidents, opened this session, verbatim | Fact |
| Classification exists to tune detection over time | same page, verbatim | Fact |
| Free text notes run to 30,000 characters alongside it | same page, verbatim | Fact |
| Rejecting an agent's conclusion is a different object from classifying an alert | this node | Decision, argued |
| Two axes, paired rather than independent | this node | Decision |
| `Normal at this tenant` never routes to detection | this node, from design principle 4 | **Decision, and the most consequential one here** |
| Six values on axis A, five on axis B | this node | Decision. Untested with an analyst, like everything else in this project |

1. **Does the analyst ever learn what happened to the reason?** Principle 3 says override teaches. Today the reason leaves the product and nothing comes back. A rejection that never visibly changes anything stops being filled in honestly, and there is no node on the map that closes this loop.
2. **Who maintains the list?** Same question as 0.6, and probably the same answer, which means the same missing settings surface.
3. **Is `Real, called benign` even reachable?** The analyst sees cases Clerk filed a verdict on. A case Clerk closed on its own never reaches the queue, and that is the review sample with no job, already recorded twice in the inventory. So the most expensive error in the product is one this taxonomy can only catch by accident.

---

## Settled before stage 04

Taken at the close of stage 03b. A question is settled here only when the answer follows from something the product already decided; where it does not, it says who can answer and what it blocks.

| # | Question | Verdict |
|---|---|---|
| 1 | Does the analyst ever learn what happened to the reason? | **Still open**. **The sharpest hole in the product, and step 9 made it sharper.** R3 is carried by two nodes out of forty six, and neither closes the loop: the reason leaves the product and nothing comes back. A rejection that never visibly changes anything stops being filled in honestly. |
| 2 | Who maintains the list? | **Still open**. The missing settings surface, for the third time. |
| 3 | Is `Real, called benign` even reachable? | **Still open**. The review lane that has no job. Recorded in the inventory twice and still unowned. |
