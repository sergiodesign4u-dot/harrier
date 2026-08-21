# 0.4 Live connection status

---

## 1. Identity

| | |
|---|---|
| **Number** | 0.4 |
| **Name** | Live connection status |
| **Type** | state, rendered as a persistent strip |
| **Group** | `global` |
| **Scope** | MVP |
| **Parent** | none. Discovered at the detail layer |
| **Lives in** | 0.1 zone Z2, directly under the top bar |
| **Feeds** | 3.3 the stale queue, 8.4 one recovery notice |
| **Transport** | server-sent events, the transport named in the project tech hypothesis |

---

## 2. Purpose

A queue that has stopped updating looks exactly like a queue where nothing is happening. That is the whole problem. The analyst is deciding at speed on a list whose freshness is invisible, and a stale list does not produce a slow decision, it produces a **wrong** one.

**This node reverses a decision made at 0.1.** The shell originally specified the strip as silent when connected. That is inconsistent with the argument this product makes everywhere else: mode confusion is a display failure, and a state that is inferred from absence is not read, it is assumed. If it is worth a fixed position for Clerk's latitude, it is worth one for whether the data is real.

**The strip is therefore always present, and always carries a number that is doing work.** `Live, last case 4s ago` is not decoration: it is the freshness of the queue, useful while healthy and the same slot that degrades. One line, one place, one grammar.

---

## 3. Three states, and they are not invented

The states map onto the transport rather than onto a mood. WHATWG HTML, server-sent events, opened this session:

| `readyState` | Spec text | Strip reads |
|---|---|---|
| **OPEN (1)** | "The user agent has an open connection and is dispatching events as it receives them" | `Live` plus the age of the last event |
| **CONNECTING (0)** | "The connection has not yet been established, or it was closed and the user agent is reconnecting" | `Reconnecting` plus how long the queue has been standing still |
| **CLOSED (2)** | "The connection is not open, and the user agent is not trying to reconnect" | `Stale` plus how long, and what to do |

**Reconnecting is not a spinner, and the spec explains why.** "User agents might introduce an exponential backoff delay to avoid overloading a potentially already overloaded server." Backoff means the gap can stretch from a second to minutes while the state name stays the same. A spinner would say the same thing at four seconds and at four minutes. The **duration** is the information, not the activity.

---

## 4. What the queue can honestly say about what it missed

The transport carries a resumption mechanism. WHATWG: "The `Last-Event-ID` HTTP request header reports an EventSource object's last event ID string to the server when the user agent is to reestablish the connection."

That produces an honest split, and the product must not blur it.

| When | What can be said | What must not be said |
|---|---|---|
| While disconnected | **How long.** The gap is known | How many cases were missed. It is not known, and a guess here is a lie about the size of the risk |
| On reconnection | **How many.** The replay from the last event id gives an exact count | Nothing softer. `12 cases arrived while you were disconnected` is the whole message |

**One notice on recovery, not a flood.** Twelve replayed cases must not produce twelve toasts. 8.4 receives one notice carrying the count.

---

## 5. Age in words rather than a timestamp

`4 minutes behind`, not `14:32:07`.

The log records clock time, because an audit answers "when". The strip answers a different question, "can I trust what I am looking at right now", and that is a duration. Forcing the analyst to subtract two times at 03:00 to learn whether the screen is real is arithmetic the interface should have done.

This is a decision rather than a sourced fact, and it is written as one.

---

## 6. State matrix

| Element | Live | Reconnecting | Stale | Recovered, last 30s | At 360 |
|---|---|---|---|---|---|
| **Strip** | `Live, last case 4s ago` | `Reconnecting, 40s behind` | `Stale, 6m behind` plus a retry control | `Live, 12 cases arrived while you were disconnected` | Same line, same place |
| **Queue, 3.1** | Normal | Readable, marked as standing still | Readable, marked stale. **Not blanked and not blurred** | Normal, the new rows marked as arrived during the gap | Same |
| **Detail pane** | Normal | Unchanged. A case already open does not go stale by itself | Unchanged, marked as of last sync | Unchanged | n/a |
| **Verdict filing** | Allowed | Allowed | **Allowed.** Filing writes to the server; if that write fails it is 4.9, which is a different failure with its own state | Allowed | Escalate only |
| **Annunciator, 0.3** | Normal | Marked as of last sync | Marked as of last sync | Normal | Same |
| **Toasts, 8.4** | Normal | Suppressed. One persistent strip beats repeated toasts | Suppressed | One notice with the count | Same |

**The row that is easy to get wrong is verdict filing.** A stale read connection is not a broken write path. Blocking the analyst from filing because the stream dropped would invent an outage that does not exist, and the real write failure already has its own node.

**The cell that carries the honesty of the whole node is the queue under `Stale`.** Readable and marked. A frozen list that looks live is worse than no list; a blanked list throws away work the analyst can still do.

---

## 7. Semantics

The strip changes without the analyst doing anything, which is exactly the case WCAG 2.2 SC 4.1.3 Status Messages, Level AA, exists for: "In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus."

| Requirement | Detail |
|---|---|
| Role | `role="status"`, so the change is announced without stealing focus |
| Politeness | Polite. The analyst is reading evidence; an assertive interruption mid case is the opposite of the point |
| Focus | Never moved. SC 4.1.3 is explicit about this and it is also the product rule: no overlay, no interruption over the evidence being decided on |
| Retry control | A real control in the strip, reachable by keyboard, at least 24 by 24 CSS pixels |

---

## 8. At 360

Same line, same place, same grammar. It is not dropped, because the mobile scenario is reading a case at 03:00 and a stale read there is the same wrong decision it is at a desk.

What is dropped is the retry control: at 360 a reload is the gesture the platform already provides.

---

## 9. Not this node

| Not here | Lives at |
|---|---|
| What the stale queue itself looks like, row by row | 3.3 |
| A verdict that failed to write | 4.9, and its held state 4.10 |
| The recovery notice as an object | 8.4 |
| Whether Clerk is still investigating a case | 4.3, which is a case level state and not a transport one |

**The distinction to keep is transport against work.** This node knows whether data is arriving. It does not know whether Clerk is working, and conflating the two would let a healthy connection imply a working agent.

---

## 10. Grounding and open questions

| Claim | Source | Standing |
|---|---|---|
| Three connection states and their exact meanings | WHATWG HTML, server-sent events, opened this session | Fact |
| Exponential backoff during reconnection | same spec | Fact |
| `Last-Event-ID` resumption, which is what makes an exact missed count possible | same spec | Fact |
| Status messages announced without focus, Level AA | W3C, Understanding SC 4.1.3, opened this session | Fact |
| Always present rather than silent when healthy | this node, **reverses 0.1** | Decision, argued |
| Duration rather than clock time | this node | Decision |

1. **What is the threshold between `Reconnecting` and `Stale`?** The transport distinguishes them exactly, but the analyst needs a moment where the wording escalates. Not measured, and it decides how often the strip cries wolf.
2. **Does a case already open go stale?** Specified here as no: an open case is a snapshot being decided on. If new evidence arrives on that case during the gap, nothing currently tells the analyst. That is a real hole, and it belongs to 4.1.
3. **Is the transport actually server-sent events?** It is a hypothesis in the project context, not a decision made with an engineer. If it becomes a socket, the three states survive but the resumption story changes.
