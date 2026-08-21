# 3.6 Scope and filters

One control, three surfaces. The queue narrows with it, the fleet narrows with it, and the log narrows with it. **The facets differ; the idiom does not.**

It is also where a promise made twice elsewhere finally gets a mechanism.

---

## 1. Identity

| | |
|---|---|
| **Number** | 3.6 |
| **Name** | Scope and filters |
| **Type** | section |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | B2 on the concept map. Scope carried |
| **Page type for the bank** | **D, the fleet and the scope bar** |
| **Renders in** | 3.1 the queue, 3.5 the fleet, 5.1 the log |
| **Route** | none of its own. Its state lives in the URL of whatever surface it sits on |
| **Permission** | tenants inside the analyst's provider scope. **Tenants outside it are never offered as a facet value** |
| **Job** | MAIN, and R2 through 5.1 |

---

## 2. Scope and filter are two things, and the difference is persistence

The node is called scope **and** filters because the bar holds two kinds of narrowing that behave differently. Collapsing them would be simpler and wrong.

| | **Scope** | **Filter** |
|---|---|---|
| Answers | which clients am I working | what within that am I looking at |
| Facet | tenant, or a named tenant group | severity, what Clerk concluded, state, actor, date |
| Persists across surfaces | **Yes.** Queue, fleet and log agree | No |
| Persists across sessions | **Yes** | No |
| Why | forty tenants is a working set, not a query. An analyst covering a region works that region all shift | a filter is a question asked once |

**Persistent scope is dangerous and it is made safe by one rule:** the scope is **always visible and always counted**, on every surface, whether or not it is narrowed. 3.1 already carries `18 waiting, across 12 of 40 tenants in scope`, and 3.5 and 5.1 carry the same shape.

A scope that persists silently is how an analyst misses a client for a whole shift. A scope that persists **out loud** is how she stops re-typing it forty times.

---

## 3. The facets, per surface

| Facet | 3.1 Queue | 3.5 Fleet | 5.1 Log |
|---|---|---|---|
| **Tenant or group** | yes | yes | yes |
| Severity | yes | no | yes |
| What Clerk concluded | yes | no | yes |
| State: `escalated`, `unrecorded`, Clerk acted | yes | no | yes, plus `superseded` |
| Latitude in force | no | **yes** | no |
| Record moved | no | **yes** | no |
| Actor: Clerk, or a named analyst | no | no | **yes** |
| Date range | no, the queue is now | no | **yes** |
| Sort | as a chip | as a chip | as a chip |

**Two facets exist on one surface only, and that is the test that the control is right.** If the fleet's `latitude in force` had to be squeezed into a shared facet list, the shared idiom would be forcing the content instead of carrying it.

---

## 4. The mechanism nobody had yet: which chip emptied it

3.1 and 5.1 both promise that when narrowing returns nothing, **the chip responsible is identifiable**. Neither said how. Here it is:

**Remove each chip in turn and re-count. Any chip whose removal brings results back is named.**

- With six chips that is six counts, on a query the surface already runs. Cheap
- If more than one chip is responsible, all of them are named. "Remove any of these three" is more useful than picking one
- If no single removal helps, the bar says so: the combination is empty, not any one chip

**Why it matters more than it looks:** an empty result is the moment an analyst decides whether the product is broken or her question was wrong. Answering that in the bar, where the question was asked, is the difference between 3.4 and 5.3 being useful states and being shrugs.

---

## 5. Blocks, in priority order

From `ia/docs/blocks.md`, type D and type A.

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **Scope chip, always present**, showing the tenant or group and the count in scope | Ours, from section 2 | MAIN | MVP |
| **2** | **Filter chips, each removable**, one per active narrowing | PagerDuty and Defender, banked TAKE in type A | MAIN | MVP |
| **3** | **Named tenant groups** as the unit of scope | Defender: *"Organize the tenants you manage into named groups"* | MAIN | MVP |
| **4** | **Sort as a chip**, not a separate control | PagerDuty and Defender | MAIN | MVP |
| **5** | **The responsible chip named** when the result is empty | Ours, section 4 | 3.4, 5.3 | MVP |
| **6** | **The whole bar addressable** in the URL of its surface | Ours, and R2 | R2 | MVP |

**Deliberately absent, and each already ruled on:** saved filter sets, per column filter icons, and a separate advanced search.

**Saved views is the one worth restating.** Defender ships `Selected filter set: None, Save`. The base layer checked the entity inventory and **found no job under it**. Narrowing serves the main job; storing a slice serves nothing anybody formulated. It stays out until someone can name the job, and if it is ever added it is a scope change, not a detail.

---

## 6. State matrix

| Element | Nothing narrowed | Narrowed | Empty result | Scope carried in from another surface | Facet with one value |
|---|---|---|---|---|---|
| **Scope chip** | `All tenants` **and the count**, never hidden | The group and the count | Same | **Same, and it says where it came from** | Same |
| **Filter chips** | None | One per narrowing, removable | Same, plus the responsible one named | None, filters do not travel | Present |
| **Sort chip** | Default, shown | Shown | Shown | Default | Shown |
| **Result count** | Full count | Narrowed count | `0`, and section 4 explains it | Narrowed count | Count |
| **The facet itself** | Offered | Offered | Offered | Offered | **Not offered.** A facet with one possible value is not a choice, it is furniture |

**The last cell is a density decision.** Design principle 5 says density is the feature. A severity facet on a surface where every case is `HIGH` is a control that costs width and returns nothing, so it is not rendered. This applies per surface and per moment, not as a static configuration.

---

## 7. Keyboard

| Key | Does | Note |
|---|---|---|
| `f` | Focuses the bar | A single character shortcut, declared in 0.5, remappable and disableable |
| `Tab` | Moves chip to chip | Each chip is one stop. **The bar is not a grid**; unlike the list, every chip is separately reachable |
| `Backspace` on a focused chip | Removes it | The standard token-field behaviour, so nothing new is learned |
| `Escape` | Returns focus to the list | Does not clear the bar. Clearing is an action, not an escape |

**`Escape` never clears narrowing.** An analyst who has built a scope and presses `Escape` to dismiss a popover must not lose it. That is the kind of loss that teaches people not to use a control.

---

## 8. Addressing and permission

| | |
|---|---|
| **In the URL** | Every facet is a parameter on the surface's own route. `/queue?tenant=...&severity=...` |
| **Tenant** | **By opaque id, never by client name.** A URL travels through pager, chat and ticket, and a client name in one is a disclosure |
| **Shareable** | A narrowed view can be handed to a colleague. This is the reason it is in the URL rather than in local state |
| **Permission** | A facet never offers a tenant outside provider scope, and a URL naming one **returns no results rather than an error**, from the 8.1 rule |
| **Persistence** | Scope persists per analyst across sessions. Filters do not persist at all |

---

## 9. At 360

The bar collapses to **one control carrying the count of active narrowings**, which 3.1 already specified. Tapping it opens the facets full width.

Two consequences:

- **The scope count stays visible even collapsed**, because section 2's safety rule does not weaken on a phone
- 3.5 and 5.1 do not render at 360, so at 360 this control exists only on 3.1

---

## 10. Emotional support

**None.** No mechanism in the `ia/docs/sitemap.md` table lives on this node, and none is invented for completeness. It is a control, and its contribution is that the surfaces it serves stay legible.

---

## 11. Not this node

- **0.8** the reading conventions. Severity, time, the effort units, the chip set and the tenant fixtures are defined there and read here
- **3.1** which places the bar and owns the queue. **3.5** and **5.1**, which place the same bar with their own facets
- **3.4** and **5.3**, the empty states this node's section 4 makes useful
- **0.5** the keyboard mechanism and the remap controls
- **0.6** the action classes, which are a facet value here and a taxonomy there
- **7.2** granting latitude. This node **reads** latitude as a facet on the fleet and never sets it

---

## 12. Grounding

| Claim | Source |
|---|---|
| Filter chips above the list, each removable, sort as a chip | PagerDuty Operations Console and Microsoft Defender, both opened this session |
| Named tenant groups as the unit of scope | Defender multitenant: *"Organize the tenants you manage into named groups"* |
| Saved filter sets are shipped by a competitor | Defender: `Selected filter set: None, Save`. **Left**, no job |
| Per column filter icons | Rox, banked LEAVE in type A: two filtering surfaces teach two habits |
| Density is the feature | `CLAUDE.md`, design principle 5 |
| Not found and not yours are indistinguishable | 8.1 and the tenant isolation requirement |

---

## 13. Open questions

1. **Does persistent scope surprise people?** Section 2 argues it is safe because it is always counted. That is an argument, and the failure it guards against, missing a client for a whole shift, is severe enough to be worth testing rather than reasoning about.
2. **Does the log inherit the queue's tenant scope?** Section 2 says yes for tenant, no for everything else. An auditor's question often arrives about a tenant **outside** the current scope, and then the persistence is friction rather than help. The rule may need an exception on 5.1.
3. **Is sort as a chip discoverable?** Both references do it, so it is not novel, but neither has a keyboard first operator who never opens the bar with a mouse.
4. **Multi-select within a facet.** Severity as `High, Medium` is obviously right. Tenant as a list of five clients rather than a group is less obvious, and it is the difference between a group being a shortcut and a group being the only unit.
