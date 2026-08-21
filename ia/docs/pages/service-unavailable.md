# 8.2 Service unavailable

The terminal form of 0.4. The connection strip reports degradation **in place**, while the analyst keeps working; 8.2 is for when nothing renders at all.

Its hardest requirement is not visual. **A console this operator cannot open is an incident at the provider**, so the page has to tell her what to do instead of using it.

---

## 1. Identity

| | |
|---|---|
| **Number** | 8.2 |
| **Name** | Service unavailable |
| **Type** | state |
| **Group** | `pages`, systemic |
| **Scope** | MVP |
| **Page type for the bank** | **G, a systemic state** |
| **Route** | none. It replaces whatever was requested |
| **Permission** | reachable authenticated and unauthenticated |
| **Job** | none, and every job depends on it being rare |

---

## 2. It must agree with 0.4, word for word

0.4 already names three connection states and their vocabulary. **If 8.2 invents its own words, the analyst sees two different names for one condition** and learns that the product does not know which is true.

| 0.4, degraded but working | 8.2, nothing renders |
|---|---|
| `Live, last case 4s ago` | n/a |
| `Reconnecting, last case 6m ago` | The same duration language, in a page instead of a strip |
| `Stale, showing what was known at 04:12` | The same timestamp language |

**The rule:** 8.2 borrows 0.4's vocabulary and adds only what a strip cannot say. It never renames a state that already has a name.

---

## 3. Blocks

| # | Block | Why |
|---|---|---|
| **1** | **What is unavailable**, named: the console, or a part of it | "Something went wrong" is not a state, it is an apology |
| **2** | **Since when**, in the duration language 0.4 already uses | An analyst who has been staring at this for four minutes needs a different answer than one who just arrived |
| **3** | **Whether there is an estimate**, and `no estimate` when there is not | An invented time is worse than none. The rule about invented numbers applies to interfaces too |
| **4** | **What to do instead: the provider's declared fallback contact** | The same value 4.6 uses when nobody is on the rota. **One configuration value, two nodes** |
| **5** | Retry, as an action she takes | Not an automatic spinner. A spinner hides whether anything is being attempted |

**Left:** an illustration, an apology paragraph, and a status page link that may itself be down.

**Block 4 is the one that makes this page useful.** Every other error page in the world ends at "try again later". This one ends at a phone number, because the person reading it is on shift and the clients are still generating signal.

---

## 4. The state nobody owns yet

Three things can be unavailable and only two of them are this page.

| What is down | What the analyst sees | Which node |
|---|---|---|
| The console | Nothing renders | **8.2** |
| The connection between her and the console | Degraded, working | **0.4**, and 3.3 for the queue |
| **Clerk** | The console works. The queue works. Verdicts file. **But nothing new is being correlated** | **Nobody** |

**The third row is a real gap found here.** Clerk being unavailable is not the console being unavailable: every screen still renders and every control still works, and the only symptom is that the queue stops growing while the world does not.

A quiet queue is supposed to be good news, and 2.3 says so. **If Clerk is down, a quiet queue is the worst possible news, and the product currently cannot tell the two apart.** That is a missing state rather than a missing page, and it belongs to 0.4 or to a new node. Recorded, not resolved.

---

## 5. State matrix

| | Planned maintenance | Unplanned | Partial |
|---|---|---|---|
| **What is unavailable** | Named, with the window | Named, without one | The part, named |
| **Since when** | Not shown. It started on time | Duration, in 0.4's language | Duration |
| **Estimate** | The published window | `No estimate` | If known |
| **Fallback contact** | Shown | Shown | Shown only if the down part matters to a decision |
| **Retry** | Available | Available | Available |

---

## 6. At 360

**Renders, and it is the worst screen to see at 03:00.** She was paged, she tapped, and the console is gone.

So at 360 the order inverts: **the fallback contact comes first**, above what is unavailable and since when. On a desk she wants to understand; on a phone at 03:00 she wants a number.

---

## 7. Not this node

- **0.4** the connection strip, which owns the vocabulary and the degraded cases
- **3.3** the stale queue, which is 0.4's effect on one surface
- **4.6** which uses the same fallback contact when nobody is on the rota
- **8.1** a page that did not resolve, which is a different failure

---

## 8. Grounding and open questions

| Claim | Source |
|---|---|
| Three connection states and their wording | 0.4, from the EventSource `readyState` mapping |
| A degraded connection does not block a decision | 0.4 |
| The provider's declared fallback contact exists | 4.6, where it was introduced |
| No invented numbers | `CLAUDE.md`, rules of evidence, applied here to estimates |

1. **Who owns the Clerk down state?** Section 4. It is a real hole and it makes 2.3 dangerous.
2. **Is the fallback contact the right thing to show unauthenticated?** A phone number on a page anyone can reach is a small disclosure and a large convenience. Not resolved.
3. Does planned maintenance ever happen during a shift? If the answer is no, the first column of section 5 is furniture. Nobody has said.
