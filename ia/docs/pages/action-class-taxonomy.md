# 0.6 Action class taxonomy

**Not a screen. A canonical list of values that four nodes read.** It exists because latitude is granted per action class, so without an agreed list of classes the annunciator, the filters and the grants drift into three vocabularies for one idea.

---

## 1. Identity

| | |
|---|---|
| **Number** | 0.6 |
| **Name** | Action class taxonomy |
| **Type** | section, and the underlying object is data |
| **Group** | `global` |
| **Scope** | MVP |
| **Parent** | none. Discovered at the gate that closed the global elements |
| **Read by** | 0.3 reading A, 3.6 filters, 7.2 grants, and the queue row on 3.1 |
| **Written by** | nobody in the product. It is provider level configuration, not tenant level |

---

## 2. Why a class rather than an action

Vendors publish actions. Microsoft Defender for Endpoint, response actions page opened this session, ships at least these: `Initiate automated investigation`, `Initiate live response session`, `Collect investigation package`, `Run Microsoft Defender Antivirus scan`, `Restrict app execution`, `Isolate devices from the network`, `Contain devices from the network`, `Contain IP addresses of undiscovered devices`, `Contain a user from the network`, `Consult a threat expert`.

**An MDR provider cannot grant latitude per vendor button.** One analyst covers 40 tenants running different tool stacks, and a grant expressed as "acts alone on `Restrict app execution`" is meaningless at a client that does not run that product. So the taxonomy is deliberately **coarser than any one vendor's list and vendor neutral**, and every integration maps its own actions onto these classes.

That is a cost, and it is worth naming: the mapping is where precision leaks. A class is only as honest as the worst action mapped into it.

---

## 3. The ordering axis is reversibility, not severity

This is the finding of the node, and it is not an opinion. Reversibility is a **published property** of a response action, and it varies.

| Evidence, opened this session | What it establishes |
|---|---|
| "Time-limited isolation: Isolation is automatically undone after a defined time window. You can also release isolation earlier after completing investigation and remediation." | Endpoint containment is reversible, and can even reverse itself |
| "You can stop an IP address' containment at any time. To stop containment, select the Contain IP action in the Action center. In the flyout, select Undo." | Network containment is reversible on demand, by the same operator |
| "Undoing contain user actions requires membership in the **Global Administrator** role" | Identity containment is reversible **only by someone else**. The analyst who did it cannot undo it |
| "Undoing the Contain user action reverts the GPO changes to their previous state, which will then start another AD GPO synchronization in your environment" | Policy level actions have a blast radius that outlasts the undo |

**Severity would have ordered these differently and worse.** Isolating a production server is severe and cheap to undo. Containing a user is less dramatic and, for this analyst, effectively permanent until someone with more rights is found at 03:00.

**So the rule this taxonomy hands to 7.2: Clerk's latitude ceiling on a class is bounded by who can undo it.** An action the analyst cannot personally reverse does not sit at the top of the ladder on a tenant with a short record.

---

## 4. The classes

Six, grouped by what they touch. Ordered by how cheaply a human can put it back.

| Class | What it covers | Reversible | By whom | Latitude ceiling |
|---|---|---|---|---|
| **Investigate** | Enrich, query, collect an investigation package, run a scan. Changes nothing in the environment | n/a. Nothing to reverse | n/a | No ceiling. Investigating changes nothing, so there is nothing to withhold |
| **Contain endpoint** | Isolate a device, restrict app execution | Yes, and it can be time limited so it reverses itself | The analyst | High |
| **Contain network** | Block an address, a domain, an indicator | Yes, on demand | The analyst | High |
| **Contain identity** | Disable an account, revoke sessions or tokens | Yes | **Someone with more rights than the analyst** | Medium. The person who acts cannot undo |
| **Remove content** | Quarantine or delete mail, remove a file | Only while the item is recoverable | The analyst, inside the retention window | Medium, and it depends on a number nobody has chosen yet |
| **Change policy** | Modify a rule, a group, a policy object | Yes, but the change propagates and the propagation does not un-happen | The analyst, with a second sync | Low |

**`Remove content` is the class that exposes an open hole in the research.** Its reversibility depends on the retention window, which `research.md` section 10 records as unchosen. Until that number exists, the ceiling on this class cannot be set honestly, and the taxonomy says so rather than guessing.

---

## 5. Where each reader uses it

| Reader | Uses | Shows |
|---|---|---|
| **0.3, reading A** | The class of the selected case's proposed action | `PERMITTED, CONTAIN IDENTITY: Acts alone`. The class name is half the sentence |
| **0.3, reading B** | All classes on a tenant | The highest latitude in force, with the count of classes at it |
| **3.6 filters** | Class as a facet | Narrow the queue to what Clerk proposes to do, which is a different question from severity |
| **7.2 grants, LATER** | Class as the row of the grant grid | Tenant against class is the whole screen |
| **3.1 queue row** | Class as a compact tag | What checking it will cost, which is partly what it will do |

**One vocabulary, five places.** If the filter says "identity" and the annunciator says "account containment" for the same class, the product has two taxonomies and the analyst has to translate.

**Two axes, and the stage 08 audit found them collapsed into one.** A reader preparing stage 04 could not letter the wireframes, because three surfaces named latitude three different ways. The axes are separate and they compose:

| Axis | Values | Owned by |
|---|---|---|
| **The action class** | Investigate, Contain endpoint, Contain network, Contain identity, Remove content, Change policy | this node, section 4 |
| **The latitude on that class** | **`Acts alone`, `Asks first`, `Never`** | this row, and nowhere else |

`Read-only`, `Dry-run`, `Guided` and `Autopilot` are **Simbian's words**, quoted in 0.3 as the evidence that latitude varies per class. They stay a quotation and stop being our labels. Three of the four map onto ours (`Read-only` is `Never`, `Guided` is `Asks first`, `Autopilot` is `Acts alone`) and `Dry-run` is a rollout mode rather than a latitude, so it has no equivalent and is not invented one.

**Every surface now says the same two things:** which class, and which of the three levels. 0.3 reading A, 0.3 reading B, 3.5, 4.1 and 5.4.

---

## 6. State matrix

A data node still has states, because the readers do.

| Situation | 0.3 | 3.6 | 7.2 |
|---|---|---|---|
| Class known for this case | Named in full | Available as a facet | Row present |
| Class not yet determined, Clerk still investigating | `Investigate` and nothing more | n/a | n/a |
| A class the tenant's tooling does not support | **Not shown.** A grant on a capability the client does not have is noise | Facet absent for that tenant | Row present but marked unavailable, because a grant may precede an integration |
| Vendor action that maps to no class | **Named as unmapped and treated as `Change policy`** | Grouped as unmapped | Flagged for the provider |

**The unmapped case defaults to the least latitude, never the most.** An action nobody has classified is not an action Clerk should be allowed to take unsupervised.

---

## 7. Not this node

| Not here | Lives at |
|---|---|
| How much latitude a tenant actually has | 0.3 reads it, 7.2 sets it |
| Which actions Clerk proposed on this case | 4.1 |
| The severity of the case | 3.1, and it is a different axis |
| The rejection reason | 0.7 |

---

## 8. Grounding and open questions

**Every question below carries a verdict at the end of this file.** 2 settled, 0 drawn at stage 04, 1 still open, decided at the close of stage 03b so that stage 04 draws against answers rather than against a list.

| Claim | Source | Standing |
|---|---|---|
| The named response actions a real EDR ships | Microsoft Learn, respond to a device, opened this session | Fact |
| Endpoint isolation is reversible and can be time limited | same page, verbatim | Fact |
| Network containment is reversible on demand | same page, verbatim | Fact |
| Undoing user containment requires a Global Administrator | same page, verbatim | **Fact, and it sets a ceiling** |
| Policy changes propagate and the propagation outlasts the undo | same page, on GPO sync | Fact |
| Latitude is granted per action class | Simbian, opened this session | Fact |
| Six classes, this grouping | this node | Decision. A different provider would draw five or eight |
| Reversibility rather than severity as the ordering axis | this node, from the evidence above | **Decision, argued** |
| Unmapped actions default to the lowest ceiling | this node | Decision |

1. **Who owns the taxonomy, the provider or the product?** Written here as provider level configuration, which means a settings surface that does not exist on the map. If it is product level, forty tenants share one list and integrations have to bend to it.
2. **What is the retention window?** `Remove content` cannot be ceilinged without it, and it is the same unchosen number that bounds 5.4 and the business outcome. Second time this layer has hit it.
3. **Does the analyst ever see the class to vendor action mapping?** Hidden today. When Clerk proposes something and the analyst asks what exactly will happen, the class is not a sufficient answer, and that question belongs to 4.1.

---

## Settled before stage 04

Taken at the close of stage 03b. A question is settled here only when the answer follows from something the product already decided; where it does not, it says who can answer and what it blocks.

| # | Question | Verdict |
|---|---|---|
| 1 | Who owns the taxonomy, the provider or the product? | **Still open**. The same missing settings surface 0.7 and 0.8 both end on. Three nodes now point at one hole, which is the strongest form the question has taken. |
| 2 | What is the retention window? | **Settled**. **Settled in shape, and the number stays `[?]` because it is a contract term.** Two windows, not one: the verdict record is kept for the life of the record, and the **evidence snapshot** has a shorter one, which is why 4.7 exists. The rule that removes the blocker: **5.4 renders how long its snapshot will remain retrievable**, so the analyst learns the window from the entry and never from a failure. |
| 3 | Does the analyst ever see the class to vendor action mapping? | **Settled**. **Yes, on demand.** Principle 2: the cheapest correct thing first, depth one key away. The class is what the row says; what exactly will happen at this tenant sits behind the same in place expansion 4.1 section 04b defines. |
