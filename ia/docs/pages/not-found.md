# 8.1 Not found

A small page carrying one rule that is not small: **in a multi tenant security console, "no such case" and "not your tenant" must render identically.** Otherwise the address bar becomes a way to enumerate other providers' clients.

---

## 1. Identity

| | |
|---|---|
| **Number** | 8.1 |
| **Name** | Not found |
| **Type** | state |
| **Group** | `pages`, systemic |
| **Scope** | MVP |
| **Page type for the bank** | **G, a systemic state** |
| **Route** | any address that does not resolve. Rendered inside 0.1 when authenticated, standalone when not |
| **Permission** | reachable authenticated and unauthenticated |
| **Job** | none. It is what happens when a job's address fails |

---

## 2. The rule, and it is the whole node

Three different situations must produce **one identical page**:

1. The case id does not exist at all
2. The case exists at a tenant the analyst's provider does not cover
3. The case exists at a tenant her provider covers but her role does not

**If any of the three renders differently from the others, the difference is the leak.** An outsider with a list of ids learns which are real; an insider learns which clients another provider holds.

**This is testable rather than aspirational, and stage 04 should test it that way:** the three renderings must be byte identical, including the page title.

Grounded in the tenant data isolation requirement in `CLAUDE.md`, and it is the same rule 1.1 applies to sign in copy and 3.6 applies to facet values. **Three nodes, one rule, and this is where it is written down.**

---

## 3. Blocks

From `ia/docs/blocks.md`, type G. The source is PagerDuty's live 404, opened this session.

| # | Block | Origin |
|---|---|---|
| **1** | A plain statement, and nothing above it | PagerDuty: `Page Not Found` / *"The page you're looking for can't be found."* |
| **2** | **Two named exits in the sentence**, not a lone button | PagerDuty: *"You can view or search all articles, or contact our Support Team"* |
| **3** | The address that failed, shown | Ours. She may have been sent it, and she may need to send it back |

**Ours are `Search the queue` and `Open the log`**, because those are the two places a case id that did not resolve could still be found: it may be closed and in the log rather than open and in the queue.

**Left:** the `More options` list of six further destinations (a sitemap in a dead end), an illustration, any humour, and a lone `Go home`.

---

## 4. What it must not say

| Never | Because |
|---|---|
| `You do not have access to this case` | Confirms the case exists. The leak, in one sentence |
| `This case belongs to another tenant` | Worse: confirms the case exists **and** that it is somebody's |
| Any client or tenant name | The page can be reached unauthenticated |
| `Check the link and try again` | Blames the sender when the cause may be scope. It also implies the link was malformed, which is a false lead at 03:00 |

Stage 05 writes the words. This node fixes the constraints.

---

## 5. State matrix

| Arrived from | What changes | What does not |
|---|---|---|
| A mistyped address | nothing | the two exits |
| A pager link to a case that closed | nothing | nothing |
| A pager link to another provider's case | **nothing, and that is the point** | nothing |
| **After 1.1**, having signed in for a deep link | The page is inside 0.1, so the queue is one click away rather than one exit | the copy, exactly |
| A log entry that no longer resolves | nothing. 5.5 covers a snapshot that failed; a missing entry is this | nothing |

**The fourth row is the one that costs something.** She was paged, she signed in, and she arrives here. The copy must not imply the link was bad, because the link may have been fine and the scope wrong, and she cannot be told which.

---

## 6. At 360

**Renders.** It is reachable from a pager link, so it is reachable at 03:00 on a phone. One statement, two exits, the failed address. Nothing to reduce.

---

## 7. Not this node

- **1.1** where the same non disclosure rule shapes sign in copy
- **3.6** where it shapes which facet values are offered
- **5.5** a snapshot that did not survive, which is a different failure with a different page
- **8.3** permission denied, which in this product is mostly unreachable **because of this node.** See 8.3

---

## 8. Grounding and open questions

**Every question below carries a verdict at the end of this file.** 2 settled, 0 drawn at stage 04, 0 still open, decided at the close of stage 03b so that stage 04 draws against answers rather than against a list.

| Claim | Source |
|---|---|
| A plain statement with two named exits and no illustration | PagerDuty 404, opened this session, screen in `research/screens/pagerduty-404-2026-08-21.png` |
| Tenant data isolation | `CLAUDE.md`, Geo and compliance |
| The same rule at sign in and in facets | 1.1 section 6, 3.6 section 8 |

1. **Does the audit actually diff the three renderings?** The rule is only as real as the test. Stage 04 draws one page; **Step 8 of this stage should assert that no branch produces a second one.**
2. Should the failed address be shown at all? It helps her send it back to whoever sent it. It also puts a possibly foreign id on screen. The id is opaque, so the disclosure is small, but it is not zero.

---

## Settled before stage 04

Taken at the close of stage 03b. A question is settled here only when the answer follows from something the product already decided; where it does not, it says who can answer and what it blocks.

| # | Question | Verdict |
|---|---|---|
| 1 | Does the audit actually diff the three renderings? | **Settled**. **It did, at step 8 of this stage, and they disagreed.** Three files routed an out of scope tenant to 8.3; all three were corrected upward to 8.1. The rule is tested rather than asserted. |
| 2 | Should the failed address be shown at all? | **Settled**. **Yes.** 0.8 settled that a case id carries no meaning and no tenant, so showing it discloses nothing and lets her send it back to whoever sent it. |
