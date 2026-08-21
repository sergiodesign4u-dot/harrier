# 8.3 Permission denied

**This node's finding is that it may not exist.**

It was specified expecting a page. Specifying it found that two decisions taken elsewhere have between them removed almost every route to it, and the honest output is a test rather than a design.

---

## 1. Identity

| | |
|---|---|
| **Number** | 8.3 |
| **Name** | Permission denied |
| **Type** | state |
| **Group** | `pages`, systemic |
| **Scope** | **MVP in `sitemap.md`. This specification disputes that.** See section 4 |
| **Page type for the bank** | **G, a systemic state** |
| **Route** | none of its own |
| **Job** | none |

---

## 2. Two decisions ate its routes

**Decision one, from 4.1 and the type B bank.** Permission is answered **at the control**: an action the analyst's role does not permit is rendered disabled with its reason, not hidden and not clicked into an error. Taken from Microsoft Learn: *"Grayed out action buttons mean these actions are limited by your permission."*

So no control in the console leads here. The refusal happens before the click.

**Decision two, from 8.1.** A resource outside the analyst's scope **must render as not found**, identically to a resource that does not exist. That is the tenant isolation rule, and it is not negotiable.

So no address leads here either. Out of scope resolves to 8.1.

**Between them, the two decisions leave one gap:** a resource that exists, is inside the analyst's provider scope, and is forbidden by her **role** rather than by tenancy. The page would be honest there, because nothing is being disclosed that she does not already know exists.

---

## 3. Is there such a resource in the MVP?

| Candidate | Verdict |
|---|---|
| 7.1 tenant detail, 7.2 grants, 7.3 grant change | **LATER.** Not in the MVP at all |
| Settings for the two taxonomies, 0.6 and 0.7 | **No surface exists.** Recorded as an open hole at both nodes |
| Anything in cluster 6, client summary | **LATER** |
| The log, 5.1 | No. Every analyst reads every entry inside provider scope, decided at 5.1 |
| Verdict controls | No. Answered at the control, decision one |

**Nothing in the MVP reaches it.** Every candidate is either LATER or answered before the click.

---

## 4. The scope label is in dispute, and it is not changed here

`ia/docs/sitemap.md` marks 8.3 as **MVP**. This specification finds no route to it in the MVP.

**The mark is not changed unilaterally.** Scope labels are carried, not re-derived, and that rule exists exactly so a node cannot quietly shrink the product on its own page. So the disagreement is recorded and handed on:

> **8.3 is specified. Whether it ships is decided by Step 8, and the test is a coverage question, not a taste question: does any flow in `flows.md` or any state in any node's matrix reach it?**
>
> If none does, 8.3 becomes LATER and arrives with cluster 7, which is where its first real route lives.

**This is the idle control working.** A declared list that never returns "not reachable" is being read formally, and here it returned one.

---

## 5. What it says, if it ships

Short, because the honest version is short.

| # | Block |
|---|---|
| **1** | What is forbidden, named as a **capability** rather than as a resource: *"Changing what Clerk may do needs a lead's role"* |
| **2** | **Who can**, by role rather than by name. A named person on a permission page is a directory leak and a stale value |
| **3** | One exit, back to where she was |

**Never:** the resource's contents in any form, a tenant name, or an invitation to request access. Requesting access is a provisioning flow, and there is no provisioning in this product.

---

## 6. At 360

**Renders if it ships.** No layout question: three lines.

---

## 7. Not this node

- **8.1** which absorbs every out of scope address, and is the reason this node is nearly empty
- **4.1** where permission is answered at the control, and is the other reason
- **0.6** the action classes, whose ceilings are about **Clerk's** latitude, not the analyst's role. Two different limits that look alike on screen and must not be confused
- **7.1, 7.2, 7.3** LATER, and where this node's first real route lives

---

## 8. Grounding and open questions

| Claim | Source |
|---|---|
| Permission answered at the control, greyed with its reason | Microsoft Learn, guided responses, opened this session and banked in type B |
| Out of scope renders as not found | 8.1, from the tenant isolation requirement |
| Cluster 7 is LATER | `ia/docs/sitemap.md` |
| Scope labels are carried, not re-derived | The stage gate in `CLAUDE.md` |

1. **Does 8.3 ship?** Section 4. The answer is a coverage test at Step 8.
2. **Do the two kinds of limit read differently?** Clerk's latitude ceiling (0.6) and the analyst's role limit (this node) both render as a control that cannot be used. **If they look the same, the analyst cannot tell whether the agent is restrained or she is.** That is a stage 04 drawing question and it is more important than this page.
3. If provisioning ever enters the product, block 3 grows a request path. It does not today.
