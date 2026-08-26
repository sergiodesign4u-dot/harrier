# Harrier: every string in the product, as it stood before stage 05

Stage 05, step 1. This is the inventory, not the rewrite: nothing here has been changed yet. Two sections, **Globals** and **By screen**, plus the fixture canon and the divergences the two sections make visible.

By the end of this stage this file is the source of truth for interface text. Stage 07 builds its kit showcase from it, stage 08 sets type on real strings from it, stage 12 takes each screen's text from it rather than writing it on the spot, and stage 13 hands it to a developer so nobody has to ask in a chat what a button says.

> **Read this before looking a string up here, and it was written at stage 12 after three batches of agents met it.** The sentence above is the intention and it is not how this file is shaped. **Sections 3 and 4 are the inventory as it stood BEFORE stage 05**, exactly as the title says, and everything this stage then RULED is held as a delta in section 8, table by table. So a string looked up by key in the big tables gives you **the wording that was replaced**, not the wording that shipped.
>
> **The applied text is in `wireframes/`**, which is the output of stage 05 and has not moved since. Two examples of the shape, both from section 8's ruling table: `Back to the queue` became `Open the queue` on ten screens, and a sentence arguing for the design was cut out of the log's narrow banner on seven. The inventory rows still carry the first version of each.
>
> **Take the frozen screen. Use this file to check that a string exists and to read section 8 for why it reads the way it does.** Stage 12's first batch found six disagreements across three screens and was right to follow the screen on all six; the second and third found more, in the same direction, every time. The wrong answer here is invisible, because a screen carrying pre stage 05 wording looks perfectly well written.

---

## 1. What was read, and the count

| | |
|---|---|
| Pages read | **62** product pages, every state of every built screen in `wireframes/_nav.js` |
| Read separately, and it is not optional | **`wireframes/_nav.js`**, which holds Z1 and Z2 as render functions. Those strings are in no html file |
| Unique interface strings | **667** at block level, plus **21** in `_nav.js` and **5** annunciator overrides passed from inline scripts |
| Of them, globals | **80** appear on five screens or more |
| Of them, unique to one screen or a handful | **587** |
| SEO strings, owned by the IA node | **62** `<title>` and **13** `h1.readout`, marked in the type column |

A row is one **unique string**, not one occurrence. The product was 62 pages when this inventory was taken, because stage 04 gave every state its own page, so an inventory of occurrences would be several thousand rows of the same column header. **It is 66 now**, and the four that arrived are node 7.1, accepted on 2026-08-26: their strings are in section 8d rather than in the tables above, which are declared to be the inventory as it stood before stage 05 and are not rewritten. The gain is not only size: two rows with the same meaning and different words are now visible side by side, which is how section 6 was produced.

**A string is the text of one block**, so a queue row reads as one row of this table rather than seven. Where a sentence is broken by `<b>` or `<a>` in the markup, it is reassembled here.

## 2. What is out of scope, and why

**`.anote`, the author's note.** Stage 04 settled this in `wireframes/_wf.css` §14, in those words: *"Stage 05 owns everything that is NOT `.anote`; `.anote` belongs to whoever is presenting the case."* The prototype argues for its own decisions in the second person, addressed to a reviewer, and it took a register of its own, a dotted rail and a `WHY` label, precisely so this stage would know what not to touch. Every `.anote` is stripped before extraction.

**`wireframes/overview.html`.** The stage hub, 351 unique strings of coverage map, state matrix and colour legend. It documents the prototype to a reviewer, the same job `research.html` does. It is not the product and this stage does not write it.

**Fixtures.** Tenant names, case ids, timestamps, counts, signal titles, evidence sentences and the prose a person typed into a note field. This product has no user-generated content in the ordinary sense, and fixtures are its equivalent: sample content chosen to make a layout decidable. They are governed by `ia/docs/pages/reading-conventions.md` §7 and they are **not rewritten here**. They are marked `fixture instance` in the type column and listed as a canon in section 5, because a rule of voice can still bind their **grammar** even when it does not touch the instance.

---

## 3. Globals

Strings that repeat across the product. Each is described **once**. The `Lives in` column is what step 7 opens.

### 3a. The shell, and it lives in `wireframes/_nav.js`

Stage 04 moved Z1 and Z2 into `WF_SHELL` as render functions, so these 21 strings exist in **no** html file and are on **every one of the 55 authenticated screens**. An inventory built by reading the screens would miss the header, the navigation and the connection strip, and would not notice the gap.

| Zone | String | Type | Lives in | Screens |
|---|---|---|---|---|
| Z1 | Harrier | wordmark | `_nav.js` `WF_SHELL` | 55 |
| Z1 | Queue | global navigation | `_nav.js` `NAVITEMS` | 55 |
| Z1 | Shift | global navigation | `_nav.js` `NAVITEMS` | 55 |
| Z1 | Log | global navigation | `_nav.js` `NAVITEMS` | 55 |
| Z1 | Sections | accessible name, `<nav>` | `_nav.js` `WF_SHELL` | 55 |
| Z1 | Not in this release | tooltip, unreachable today, kept for `Clients` in cluster 7 | `_nav.js` `WF_SHELL` | 0 |
| Z1 | ? | keyboard map trigger | `_nav.js` `WF_SHELL` | 55 |
| Z1 | Keyboard map, 0.5 | tooltip | `_nav.js` `WF_SHELL` | 55 |
| Z1 | Keyboard map | accessible name | `_nav.js` `WF_SHELL` | 55 |
| Z1 | Tenant autonomy | accessible name, the annunciator | `_nav.js` `WF_SHELL` | 55 |
| Z1 | FLEET | annunciator lead, nothing selected | `_nav.js` `FLEET` | 19 |
| Z1 | 40 tenants | annunciator, fixture instance | `_nav.js` `FLEET` | 19 |
| Z1 | acts alone up to **contain network** at 3 | annunciator, the differentiator in one line | `_nav.js` `FLEET` | 19 |
| Z1 | **1** moved down | annunciator, the trend | `_nav.js` `FLEET` | 19 |
| Z1 | R. Idrissi | signed in as, fixture instance | `_nav.js` `WF_SHELL` | 55 |
| Z2 | **Live** last case 4s · Clerk investigating 3 | connection strip, healthy | `_nav.js` `STRIPS.live` | 49 |
| Z2 | **Live** last case 1s · **3 arriving** | connection strip, streaming | `_nav.js` `STRIPS.arriving` | 2 |
| Z2 | **Reconnecting** the queue has stood still for 40s · how many cases were missed is not known | connection strip, degraded | `_nav.js` `STRIPS.reconnecting` | 1 |
| Z2 | **Stale** nothing has arrived for 6m · decide on what is here, it is marked as of the last sync | connection strip, degraded | `_nav.js` `STRIPS.stale` | 2 |
| Z2 | **Clerk is not investigating** since 11m · the connection is fine, so **the queue is complete** | connection strip, source stopped | `_nav.js` `STRIPS.clerkdown` | 1 |
| Z2 | · 0.4 | node reference appended to every strip | `_nav.js` `WF_SHELL` | 55 |

The last row is a finding, not a string: see D11.

### 3a bis. The annunciator, overridden per screen, and it is not in the html either

**These five were nearly missed and the reason is worth writing down.** 0.3 is the element that carries the whole differentiator, and 36 of the 55 screens override its default by passing an object into `WF_SHELL` from an inline `<script>`. A text extractor skips `<script>`, and a person reading the screens sees the rendered result rather than the string. They were found by reading the call sites, not the pages.

| String | Type | Lives in | Screens |
|---|---|---|---|
| `LARKFIELD LOGISTICS` / acts alone up to **contain endpoint** / **34 of 36** upheld, 30 days | annunciator, one tenant selected | inline `WF_SHELL` call | 26 |
| The same, plus `OVRD` human decided | annunciator, after an override | inline `WF_SHELL` call | 3 |
| The same, plus `ACTED` 24m | annunciator, Clerk acted under latitude | inline `WF_SHELL` call | 1 |
| `40 TENANTS` / **7 of 40** act alone above investigate / **219 of 231** upheld, 30 days | annunciator, the fleet reading on the log and the brief | inline `WF_SHELL` call | 5 |
| `AUBREY DENTAL GROUP` / acts alone up to **investigate** / **no rulings yet**, 9 days | annunciator, a tenant with no record | inline `WF_SHELL` call | 1 |

Two readings of the fleet exist and they do not agree: `_nav.js` defaults to `40 tenants · acts alone up to contain network at 3 · 1 moved down`, and the five screens that state it themselves say `40 TENANTS · 7 of 40 act alone above investigate · 219 of 231 upheld, 30 days`. Same element, same product, two sentences. Recorded as **D14** below.

### 3b. Everything else that repeats, and it is inlined

**Every one of these lives in the screen files, not in a component.** The scope bar, the queue list, the queue foot, the fleet pane and the detail pane were written out in each page. A one-word change to a queue column header is 29 file edits, not one, and step 7 has to plan for that rather than discover it.

| Zone | String | Type | Lives in | Screens |
|---|---|---|---|---|
| `Z4 list` | Scope and filters | accessible name | inlined in each screen | 38 |
| `Z4 list` | Sort: default ▾ | filter chip | inlined in each screen | 31 |
| `Z4 list` | Waiting on a decision × | filter chip | inlined in each screen | 30 |
| `Z4 list` | All tenants ▾ | filter chip | inlined in each screen | 29 |
| `Z4 list` | High Norsk Marine Ransomware precursor on FS-02 Real, contained 14 signals acted 52m | row, fixture instance | inlined in each screen | 29 |
| `Z4 list` | Medium Aubrey Dental Group Sign in from an unseen device Real, contain identity / above latitude here 9 signals 6m | row, fixture instance | inlined in each screen | 29 |
| `Z4 list` | Medium Meridian Health Mass file rename on one host Rejected by R. Idrissi 4 signals decided unrecorded 1h | row, fixture instance | inlined in each screen | 29 |
| `Z4 list` | Sev Client What it is What Clerk concluded To check State Age | column headers | inlined in each screen | 29 |
| `Z4 list` | Low Bramber Retail Mass mailbox rule creation Benign, new admin onboarding 3 signals 41m | row, fixture instance | inlined in each screen | 28 |
| `Z4 list` | Low Halcyon Care Beaconing to a new domain Real, contained 5 signals acted 2h | row, fixture instance | inlined in each screen | 28 |
| `Z4 list` | Medium Halden Freight Impossible travel, two offices Benign, sanctioned VPN rollout 6 signals 4m | row, fixture instance | inlined in each screen | 28 |
| `Z4 list` | 18 waiting across 12 of 40 tenants in scope | SEO / IA-owned, H1 readout | inlined in each screen | 25 |
| `Z5 detail pane` | Normal at this client | heading | inlined in each screen | 22 |
| `Z5 detail pane` | What Clerk may do here, on this tenant | heading | inlined in each screen | 22 |
| `Z5 detail pane` | no Change policy above this tenant’s latitude | latitude ladder, out of reach | inlined in each screen | 22 |
| `Z5 detail pane` | no Contain identity above this tenant’s latitude, so it waited for you | latitude ladder, out of reach | inlined in each screen | 22 |
| `Z5 detail pane` | no Contain network above this tenant’s latitude | latitude ladder, out of reach | inlined in each screen | 22 |
| `Z5 detail pane` | no Remove content above this tenant’s latitude | latitude ladder, out of reach | inlined in each screen | 22 |
| `Z5 detail pane` | 2 token replays at Larkfield Logistics in 90 days, both real | Clerk narrative, fixture instance | inlined in each screen | 21 |
| `Z5 detail pane` | C-4417 · Larkfield Logistics | heading | inlined in each screen | 21 |
| `Z5 detail pane` | Evidence, 9 signals | heading | inlined in each screen | 21 |
| `Z4 list` | High Larkfield Logistics Token replay from a new ASN Real, contain identity / above latitude here 9 signals 27m | row, fixture instance | inlined in each screen | 21 |
| `Z5 detail pane` | The same token was used from the corporate range 4 minutes earlier Entra sign in | evidence claim, fixture instance | inlined in each screen | 21 |
| `Z5 detail pane` | yes Contain endpoint | latitude ladder, the ceiling | inlined in each screen | 21 |
| `Z5 detail pane` | yes Investigate | latitude ladder | inlined in each screen | 21 |
| `Z5 detail pane` | A refresh token was presented from ASN 41xxx , first time for this tenant Entra sign in | evidence claim, fixture instance | inlined in each screen | 20 |
| `Z5 detail pane` | What Clerk concluded | heading | inlined in each screen | 20 |
| `Z5 detail pane` | What happened | heading | inlined in each screen | 20 |
| `Z5 detail pane` | 04:08 Sign in from the corporate range, token issued. | Clerk narrative, fixture instance | inlined in each screen | 19 |
| `Z5 detail pane` | 04:12 The same token presented from ASN 41xxx , no MFA prompt. | Clerk narrative, fixture instance | inlined in each screen | 19 |
| `Z5 detail pane` | 04:13 Inbox rule created, forwarding to an external address. | Clerk narrative, fixture instance | inlined in each screen | 19 |
| `Z5 detail pane` | 3 more signals | note under a block | inlined in each screen | 19 |
| `Z4 list` | 7 of 18 shown, one selected ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | inlined in each screen | 19 |
| `Z5 detail pane` | An inbox rule was created 90 seconds later , forwarding to an external address Exchange audit | evidence claim, fixture instance | inlined in each screen | 19 |
| `Z5 detail pane` | Field correlationId matches across both sign ins, which is what makes it the same token rather than two. Read from the tenant’s own log, 04:08 to 04:12 UTC. | expanded detail | inlined in each screen | 19 |
| `Z5 detail pane` | Filed by Clerk 26m ago · ?as-of=2026-08-22T04:14:05Z | stamp line | inlined in each screen | 19 |
| `Z5 detail pane` | How this was read | expansion head, **new at stage 13** and the head of the row above | inlined in each screen | 19 |
| `Z5 detail pane` | No MFA prompt on the second use Entra sign in | evidence claim, fixture instance | inlined in each screen | 19 |
| `Z5 detail pane` | not found no password change, and no new device enrolment Entra, EDR | evidence claim, fixture instance | inlined in each screen | 19 |
| `Z5 detail pane` | points the other way this user has travelled to this region twice in 90 days tenant baseline | evidence claim, fixture instance | inlined in each screen | 19 |
| `Z5 detail pane` | Real, and it wants to contain the identity. A refresh token issued to this user is in use from an ASN the tenant has never seen, and an inbox rule was created from it. | Clerk narrative, fixture instance | inlined in each screen | 18 |
| `Z5 detail pane` | Token replay from a new ASN · High · 9 signals · 6 sources, 24h | sub-heading | inlined in each screen | 17 |
| `Z5 detail pane` | 6 sources queried over 24h : Entra ID, Exchange audit, EDR, proxy, threat intel, tenant baseline. Count first, never a bare percentage. | provenance line | inlined in each screen | 16 |
| `Z5 detail pane` | Accept a Escalate e | div.pane-foot | inlined in each screen | 10 |
| `Z5 detail pane` | Fleet | heading | inlined in each screen | 10 |
| `Z5 detail pane` | Halcyon Care Contain endpoint 4 of 4 too few to compare | fleet row, fixture instance | inlined in each screen | 10 |
| `Z5 detail pane` | Larkfield Logistics Contain endpoint 34 of 36 was 33 of 36 | fleet row, fixture instance | inlined in each screen | 10 |
| `Z5 detail pane` | Meridian Health Investigate 31 of 36 was 34 of 36 | fleet row, fixture instance | inlined in each screen | 10 |
| `Z5 detail pane` | Tenant Acts alone up to Record | fleet column headers | inlined in each screen | 10 |
| `Z5 detail pane` | Aubrey Dental Group Investigate – no rulings yet | fleet row, fixture instance | inlined in each screen | 9 |
| `Z5 detail pane` | Bramber Retail Contain network 51 of 52 was 49 of 51 | fleet row, fixture instance | inlined in each screen | 9 |
| `Z5 detail pane` | Halden Freight Contain endpoint 27 of 29 was 26 of 29 | fleet row, fixture instance | inlined in each screen | 9 |
| `Z5 detail pane` | Norsk Marine Investigate 18 of 20 was 18 of 20 | fleet row, fixture instance | inlined in each screen | 9 |
| `Z5 detail pane` | 33 more, 30 day window · a row narrows the queue to that tenant | p.fleet-more | inlined in each screen | 8 |
| `Z5 detail pane` | D. Okonkwo analyst, next on from 07:00 | rota, fixture instance | inlined in each screen | 7 |
| `Z5 detail pane` | Latitude that changed | heading | inlined in each screen | 7 |
| `Z5 detail pane` | R. Idrissi analyst, on the console 19:00 to 07:00 UTC | rota, fixture instance | inlined in each screen | 7 |
| `Z5 detail pane` | S. Varga SOC lead, takes escalations until 07:00 | rota, fixture instance | inlined in each screen | 7 |
| `Z4 list` | The decision log is a desk surface. The phone has one scenario in this product, a paged case read and escalated, and answering an auditor is not it. Seven columns of record squeezed onto a phone would be a second console pretending to be this one. / / The one thing here that does open on a phone is a single entry at its own address , because a permalink can arrive anywhere. Back to the queue | banner, state message | inlined in each screen | 7 |
| `Z5 detail pane` | The shift | heading | inlined in each screen | 7 |
| `Z4 list` | The shift brief is a desk surface. Coming on shift happens at a desk with two monitors, which is the premise the whole product is drawn from. The phone has one scenario here, a paged case read and escalated, and reading a twelve hour handover is not it. / / One thing on this page does cross to the phone, and it is data rather than screen : the escalate dialog names S. Varga from the rota this node holds, and it reads that value without this page rendering. Open the queue | banner, state message | inlined in each screen | 7 |
| `Z5 detail pane` | Who is on | heading | inlined in each screen | 7 |
| `dialog` | 1 Real, called benign detection engineering 2 Benign, called a threat asks one more 3 Right answer, wrong reasoning agent tuning 4 Right answer, wrong scope agent tuning 5 Not enough evidence either way nowhere 6 Normal at this tenant the tenant baseline, locked 7 Other, and say why nowhere yet, and counted | div.optlist | inlined in each screen | 6 |
| `Z5 detail pane` | 40 tenants, nothing selected. Ordered by where attention is owed | sub-heading | inlined in each screen | 6 |
| `dialog` | C-4417 · Larkfield Logistics · Clerk said real, contain identity | sub-heading | inlined in each screen | 6 |
| `Z5 detail pane` | Meridian Health Investigate 31 of 36 was 34 of 36 | fleet row, fixture instance | inlined in each screen | 6 |
| `dialog` | Reject Clerk’s verdict | heading | inlined in each screen | 6 |
| `Z5 detail pane` | Reject is a desk action. It needs the six reasons and the evidence in view at the same time, and neither fits here. On a phone the exit is escalate , and only escalate: 4.2 settles that a case known to be benign cannot be closed from there either. | banner, state message | inlined in each screen | 6 |
| `Z5 detail pane` | Tenant Acts alone up to Record | fleet column headers | inlined in each screen | 6 |
| `dialog` | What Clerk got wrong | heading | inlined in each screen | 6 |
| `dialog` | What Clerk got wrong | accessible name | inlined in each screen | 6 |
| `Z4 brief` | 6 closed by Clerk alone, inside that tenant’s latitude There is nowhere to review these. The count is here because a shift where Clerk closed nothing alone and a shift where it closed a dozen are different shifts. No screen in this product lists them, and this line does not invent one. nowhere to review | brief line | inlined in each screen | 5 |
| `the door` | Cannot get in? | disclosure | inlined in each screen | 5 |
| `Z4 brief` | Client What changed State When | column headers | inlined in each screen | 5 |
| `the door` | Email | field label | inlined in each screen | 5 |
| `the door` | Harrier | wordmark | inlined in each screen | 5 |
| `the door` | Harrier does not hold your password and it does not create accounts. Your seat comes from your provider, and so does the way you sign in. If you cannot get in, the person who provisioned your seat is the one who can fix it. | sign in help | inlined in each screen | 5 |
| `Z5 detail pane` | Meridian Health moved down , from contain endpoint to investigate, after two rulings went against Clerk here. 1 of 40 tenants moved this shift and the other 39 held. A row opens the fleet at that tenant. | note under a block | inlined in each screen | 5 |
| `Z4 list` | Sev Client What it was What was decided, and by whom Reason State When, UTC | column headers | inlined in each screen | 5 |
| `the door` | Sign in | SEO / IA-owned, H1 | inlined in each screen | 5 |
| `the door` | you@yourprovider | placeholder | inlined in each screen | 5 |

**One row in this table did not exist before stage 05, and it says so in its own type column.** `How this was read` was written at stage 13, when the expansion under an evidence claim became a real disclosure and needed a head. It stands here because a reader looks for the head beside the body it opens, and its full record, with the page, the zone and the rule that decided it, is section 8e. The count column is this table's, so it reads 19: the string stands on **21** screens under `design/`, and the two `entry` screens are carried in section 5.4 with the body.

---

## 4. By screen

Only what is unique to one screen or to a handful. Anything already described in section 3 is not repeated here. Screens are in registry order.


### 3.1 Case Queue (70 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `queue` | 7 of 18 shown, virtualised ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue` | Harrier · Case queue | SEO / IA-owned, `<title>` | - |
| `queue-clerk-down` | 7 of 18 shown, and 18 is all of them ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-clerk-down` | Harrier · Case queue, Clerk not investigating | SEO / IA-owned, `<title>` | - |
| `queue-clerk-down` | The queue is complete. The connection is fine and Clerk stopped investigating 11m ago, so nothing is missing and nothing new will arrive until it is back. Every case in front of you is every case there is. What is down nothing to open: the outage page is what Clerk would have reported to, and it is not answering either | banner, state message | - |
| `queue-decided` | 17 waiting across 12 of 40 tenants in scope | SEO / IA-owned, H1 readout | - |
| `queue-decided` | 7 of 17 shown, the decided row holds its place ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-decided` | Accepted by R. Idrissi, 4s ago. Written to the log against the snapshot as it stood. | banner, state message | - |
| `queue-decided` | Harrier · Case queue, just filed | SEO / IA-owned, `<title>` | - |
| `queue-decided` | High Larkfield Logistics Token replay from a new ASN Accepted by R. Idrissi, 4s ago / was: Real, contain identity 9 signals decided acted 27m | row, fixture instance | - |
| `queue-decided` | Next case ] Open the log | div.pane-foot | queue-escalated |
| `queue-decided` | The log entry, with the evidence as it stood | Clerk narrative, fixture instance | - |
| `queue-decided` | The row stays in place and reads decided . It leaves the list when the selection moves off it, not when the verdict is filed. No toast: the row changed under your hand, which says more. | provenance line | - |
| `queue-decided` | Token replay from a new ASN · 9 signals · 6 sources, 24h | sub-heading | queue-escalated |
| `queue-decided` | Where it is now | heading | queue-escalated |
| `queue-empty` | 40 tenants. This is the resting state of the pane, and it is what an empty queue looks like | sub-heading | - |
| `queue-empty` | Harrier · Case queue, nothing waiting | SEO / IA-owned, `<title>` | - |
| `queue-empty` | Nothing is waiting on a decision. 21 cases were ruled on this shift and Clerk is investigating 3 more. / The pane on the right is the fleet, which is where this screen rests. / Widen the scope to all tenants | empty state | - |
| `queue-empty` | Nothing waiting across 12 of 40 tenants in scope | SEO / IA-owned, H1 readout | - |
| `queue-empty` | nothing waiting, and the fleet holds the pane ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-escalated` | 7 of 18 shown, the escalated row holds its place ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-escalated` | Handed to S. Varga, 4s ago. Sent through the provider’s on call tool. Harrier recorded that it was sent; it is not the thing that delivered it. | banner, state message | - |
| `queue-escalated` | Harrier · Case queue, just escalated | SEO / IA-owned, `<title>` | - |
| `queue-escalated` | High Larkfield Logistics Token replay from a new ASN Real, contain identity / handed to S. Varga, 4s ago 9 signals escalated 27m | row, fixture instance | - |
| `queue-escalated` | It cannot be taken back. If S. Varga hands it back, that is a second entry rather than an erased one. No toast: the row wears escalated , which is the feedback. | provenance line | - |
| `queue-escalated` | No verdict was filed. Clerk’s conclusion stands unruled, the case is still open, and the count above is still 18. What changed is that the row no longer looks like a case nobody has touched. | Clerk narrative, fixture instance | - |
| `queue-escalated` | The log entry, with the handover as it was written | Clerk narrative, fixture instance | - |
| `queue-escalated` | What changed, and what did not | heading | - |
| `queue-no-match` | 12 tenants in scope. The fleet narrows with the queue | sub-heading | - |
| `queue-no-match` | Clerk: needs a human × | filter chip | - |
| `queue-no-match` | Harrier · Case queue, no case matches | SEO / IA-owned, `<title>` | - |
| `queue-no-match` | No case matches this scope 3 filters, 1 tenant | SEO / IA-owned, H1 readout | - |
| `queue-no-match` | Nothing here, and it is the narrowing rather than the queue. 18 cases are waiting outside this scope. | empty state | - |
| `queue-no-match` | Severity: High is what emptied it. Remove it and 6 cases come back. The chip is marked in the bar above, where the question was asked. Remove Severity: High | banner, state message | - |
| `queue-no-match` | Severity: High × | filter chip | - |
| `queue-no-match` | no rows in this scope ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-notice` | 7 of 18 shown, 3 of them replayed ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-notice` | Dismiss this notice | accessible name | queue-notices |
| `queue-notice` | Harrier · Case queue, one notice | SEO / IA-owned, `<title>` | - |
| `queue-notice` | Notices | accessible name | queue-notices |
| `queue-notice` | STATUS Reconnected. 3 cases replayed. They arrived while the strip was up and are in the list now, in their place. | notice | queue-notices |
| `queue-notice` | × | notice | queue-notices |
| `queue-notices` | 2 earlier notices | notice stack | - |
| `queue-notices` | 4 earlier notices | notice stack | - |
| `queue-notices` | 7 of 18 shown, 1 unrecorded and held ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-notices` | ALERT The verdict on C-4417 did not write. This console is the only place that decision exists. Open the case | notice | - |
| `queue-notices` | Harrier · Case queue, the stack is full | SEO / IA-owned, `<title>` | - |
| `queue-notices` | STATUS D. Okonkwo took C-4417. You had it open. Nothing is locked, and the log records both if you both file. | notice | - |
| `queue-notices` | stays until the write lands | notice | - |
| `queue-reconnecting` | 18 waiting, and that number is 40s old how many arrived since is not known | SEO / IA-owned, H1 readout | - |
| `queue-reconnecting` | 33 more · frozen as of the last sync | p.fleet-more | queue-stale |
| `queue-reconnecting` | 40 tenants, nothing selected. Frozen 40s ago | sub-heading | - |
| `queue-reconnecting` | 7 of 18 as of 40s ago ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-reconnecting` | Harrier · Case queue, reconnecting | SEO / IA-owned, `<title>` | - |
| `queue-reconnecting` | The connection dropped and is being re established. Nothing here is wrong and something may be missing. Filing a verdict is still allowed : a degraded connection does not block a decision, and the log records the snapshot you actually saw. Retrying the transport backs off and retries on its own, so there is nothing for a button to do that is not already happening | banner, state message | - |
| `queue-stale` | 18 waiting as of 6m, across 12 of 40 tenants in scope | SEO / IA-owned, H1 readout | - |
| `queue-stale` | 40 tenants, nothing selected. Frozen as of the last sync | sub-heading | - |
| `queue-stale` | 7 of 18 shown, frozen at the last sync ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-stale` | Harrier · Case queue, stale | SEO / IA-owned, `<title>` | - |
| `queue-stale` | Marked as of the last sync. The list is readable and it is not fresh. Filing a verdict is still allowed: a degraded connection does not block a decision, and the log records the snapshot you actually saw. Try to reconnect | banner, state message | - |
| `queue-streaming` | 14 waiting so far provisional, Clerk is still correlating | SEO / IA-owned, H1 readout | - |
| `queue-streaming` | 4 of 14 so far, more arriving ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-streaming` | Cases arriving | accessible name | - |
| `queue-streaming` | Harrier · Case queue, streaming in | SEO / IA-owned, `<title>` | - |
| `queue-streaming` | High Larkfield Logistics Token replay from a new ASN no verdict yet counting investigating 27m | row, fixture instance | - |
| `queue-streaming` | Rows arrive as Clerk correlates them. The count above is provisional and says so , because a number that settles later without saying it was provisional is a number she acted on. | empty state | - |
| `queue-taken` | 7 of 18 shown, 1 taken by a colleague ↑ ↓ read, the pane follows Enter decides, focus moves into the pane order: unrecorded, blocked on her, severity, age | list foot, keys and order | - |
| `queue-taken` | D. Okonkwo has had this case open for 2m. It is still yours to rule on if you need to: nothing is locked, and if you both file, the log records both and marks the second as arriving after the first. | banner, state message | - |
| `queue-taken` | Harrier · Case queue, taken by a colleague | SEO / IA-owned, `<title>` | - |
| `queue-taken` | High Larkfield Logistics Token replay from a new ASN Real, contain identity / above latitude here 9 signals taken 27m | row, fixture instance | - |

### 4.1 Case File in the detail pane (47 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `case` | Harrier · Case file, filed and waiting | SEO / IA-owned, `<title>` | - |
| `case-acted` | Accept a Amend m Reject r Escalate e | div.pane-foot | case-no-baseline, case, keyboard |
| `case-acted` | Clerk isolated LK-WS-0042, 24m ago. Contain endpoint, which is inside this tenant’s latitude. Reversible by you , and it reverses itself in 4h if nobody acts. Undo the isolation | banner, state message | - |
| `case-acted` | Harrier · Case file, Clerk already acted | SEO / IA-owned, `<title>` | - |
| `case-acted` | High Larkfield Logistics Token replay from a new ASN Real, contain identity / above latitude here 9 signals acted 27m | row, fixture instance | - |
| `case-acted` | Real, and it contained the endpoint on its own. A refresh token issued to this user is in use from an ASN the tenant has never seen, and an inbox rule was created from it. | Clerk narrative, fixture instance | - |
| `case-acted` | acted | p.chips-hd | - |
| `case-amend` | Amend the verdict | heading | - |
| `case-amend` | Clerk wrote: Real, and it wants to contain the identity. Kept beside yours , never replaced, because an amendment is only defensible next to what it amended. | banner, state message | - |
| `case-amend` | File the amendment Cancel Esc | div.pane-foot | - |
| `case-amend` | Harrier · Case file, amending | SEO / IA-owned, `<title>` | - |
| `case-amend` | Real, but the containment should be the endpoint rather than the identity: the account is shared by the depot shift and disabling it stops four people working. | sample input, fixture instance | - |
| `case-amend` | While this field has focus, letters are text and nothing else, and Enter makes a line rather than filing , which is the rule 4.6 keeps and the one place the product allows itself an inconsistency. The button files. | field hint | - |
| `case-amend` | Your wording | field label | - |
| `case-expired` | 6 sources queried, 24h window, as of the last good read . | provenance line | escalate-from-expired |
| `case-expired` | Escalate e | div.pane-foot | case-investigating |
| `case-expired` | Harrier · Case file, evidence expired | SEO / IA-owned, `<title>` | - |
| `case-expired` | The snapshot is gone. Nine signals stood behind this verdict and the sources aged out of retention on 2026-08-14 . What was here is recorded; what it said is not retrievable. / / A verdict filed now would rest on evidence nobody can produce in April, which is the one thing this product exists to prevent. | absence block | - |
| `case-expired` | Token replay from a new ASN · High · 9 signals · 6 sources, 24h · snapshot no longer retrievable | sub-heading | escalate-from-expired |
| `case-investigating` | 4 of 6 sources answered, 24h window. Counting up. | provenance line | - |
| `case-investigating` | Clerk is working | accessible name | - |
| `case-investigating` | Evidence, arriving | heading | - |
| `case-investigating` | Harrier · Case file, Clerk still working | SEO / IA-owned, `<title>` | - |
| `case-investigating` | High Larkfield Logistics Token replay from a new ASN Real, contain identity / above latitude here 9 signals investigating 27m | row, fixture instance | - |
| `case-investigating` | Token replay from a new ASN · High · counting | sub-heading | - |
| `case-investigating` | What is being checked | heading | - |
| `case-investigating` | Whether the token was also used from the corporate range, and whether a mailbox rule followed. Four of six sources answered. | Clerk narrative, fixture instance | - |
| `case-investigating` | investigating | p.chips-hd | - |
| `case-no-baseline` | 05:31 Sign in from an unenrolled device, MFA satisfied by push. | Clerk narrative, fixture instance | - |
| `case-no-baseline` | 05:33 Inbox rule created, forwarding to an external address. | Clerk narrative, fixture instance | - |
| `case-no-baseline` | A sign in from a device with no enrolment record, first for this account Entra sign in | evidence claim, fixture instance | - |
| `case-no-baseline` | C-4482 · Aubrey Dental Group | heading | - |
| `case-no-baseline` | Harrier · Case file, no baseline | SEO / IA-owned, `<title>` | - |
| `case-no-baseline` | No baseline for this tenant yet. Aubrey Dental Group was onboarded 9 days ago, so there is nothing to compare this against. Not a zero, and not a comparison that would mean nothing. | Clerk narrative, fixture instance | - |
| `case-no-baseline` | Real, and it wants to contain the identity. A first sign in for this account from a device the tenant has never enrolled, followed by a mailbox rule ninety seconds later. | Clerk narrative, fixture instance | - |
| `case-no-baseline` | Sign in from an unseen device · Medium · 9 signals · 6 sources, 24h | sub-heading | - |
| `case-no-baseline` | yes Contain endpoint | latitude ladder | - |
| `case-no-baseline` | yes Investigate | latitude ladder, the ceiling | - |
| `case-unrecorded` | Filed by Clerk 26m ago · ?as-of=2026-08-22T04:14:05Z · no log entry yet | stamp line | - |
| `case-unrecorded` | Harrier · Case file, held locally | SEO / IA-owned, `<title>` | - |
| `case-unrecorded` | Held locally, unrecorded. You accepted 6m ago, the write has failed twice, and the case stays open. This console is the only place the decision exists. The row keeps its place in the queue and will not leave until the write lands. Try again | banner, state message | - |
| `case-unrecorded` | High Larkfield Logistics Token replay from a new ASN Real, contain identity / above latitude here 9 signals decided unrecorded 27m | row, fixture instance | - |
| `case-unrecorded` | Try again Escalate e | div.pane-foot | - |
| `case-unrecorded` | decided unrecorded | p.chips-hd | - |
| `case-write-failed` | Harrier · Case file, the verdict did not write | SEO / IA-owned, `<title>` | - |
| `case-write-failed` | The verdict did not write. You accepted 40s ago and the log did not take it, so nothing is recorded . The decision exists only on this screen. | banner, state message | - |
| `case-write-failed` | Try again Hold it locally | div.pane-foot | - |

### 4.4 Reject with a reason (28 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `reject` | A reason is required Cancel Esc Reject and tune Enter | footer | - |
| `reject` | Harrier · Reject, nothing chosen | SEO / IA-owned, `<title>` | - |
| `reject` | Pick a reason above and this fills in. The space is held so nothing jumps. | consequence line | - |
| `reject-axis-b` | 1 Detection is too broad detection engineering 2 Tenant context missing the tenant baseline | div.axisb | - |
| `reject-axis-b` | Harrier · Reject, second axis required | SEO / IA-owned, `<title>` | - |
| `reject-axis-b` | Where it goes is required Cancel Esc Reject and tune Enter | footer | - |
| `reject-axis-b` | Where it goes, and this is the one that has to ask | heading | - |
| `reject-chosen` | Anything else, optional | field label | - |
| `reject-chosen` | Goes to agent tuning as Clerk weighted the wrong signal . The verdict stands; the argument behind it does not, and accepting it would put an unsound argument in the record. | consequence line | - |
| `reject-chosen` | Harrier · Reject, reason chosen | SEO / IA-owned, `<title>` | - |
| `reject-chosen` | Nothing downstream depends on this | placeholder | - |
| `reject-chosen` | One selection, one key Cancel Esc Reject and tune Enter | footer | reject-other, reject-tenant-normal |
| `reject-chosen` | What changes because of it | heading | reject-write-failed, reject |
| `reject-other` | Clerk read the maintenance window as the reason and it was the wrong window, so the conclusion is right by accident | sample input, fixture instance | - |
| `reject-other` | Harrier · Reject, none of the six fits | SEO / IA-owned, `<title>` | - |
| `reject-other` | Held, not routed nowhere yet, and counted | consequence, locked | - |
| `reject-other` | Nothing is sent to detection or to tuning. A reason the taxonomy cannot name is a reason nobody downstream can act on, so it is recorded, counted, and read by a person. | consequence line | - |
| `reject-other` | Required here, and only here. | note under a block | - |
| `reject-other` | What Clerk got wrong, in your words | field label | - |
| `reject-other` | Where it goes | heading | reject-tenant-normal |
| `reject-tenant-normal` | Harrier · Reject, normal at this tenant | SEO / IA-owned, `<title>` | - |
| `reject-tenant-normal` | Nothing outside Larkfield Logistics changes. Sending one client’s normality to detection engineering is how a rule gets weakened for the thirty nine other tenants who did need it. | consequence line | - |
| `reject-tenant-normal` | Tenant context missing the tenant baseline, and it is locked | consequence, locked | - |
| `reject-write-failed` | Goes to agent tuning as Clerk weighted the wrong signal . Not sent. | consequence line | - |
| `reject-write-failed` | Harrier · Reject, the write failed | SEO / IA-owned, `<title>` | - |
| `reject-write-failed` | High Larkfield Logistics Token replay from a new ASN Real, contain identity / above latitude here 9 signals unrecorded 27m | row, fixture instance | - |
| `reject-write-failed` | Second attempt Hold it locally Try again Enter | footer | - |
| `reject-write-failed` | The rejection did not write. Nothing reached the log and nothing reached tuning, so the reason you picked exists only on this screen. | banner, state message | - |

### 4.6 Escalate (34 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `escalate` | Harrier · Escalate, default | SEO / IA-owned, `<title>` | - |
| `escalate` | The case stays open and gains escalated , so it keeps its place in the queue and stops looking like a case nobody has touched. No verdict is filed and nothing is tuned. The escalation is written to the log either way, and it cannot be taken back: if it comes back to you, that is a new entry rather than an erased one. The case stays open and gains escalated . No verdict is filed. It is written to the log. | consequence line | - |
| `escalate-from-expired` | C-4417 · Larkfield Logistics · Clerk filed real, contain identity against a snapshot that is gone | sub-heading | - |
| `escalate-from-expired` | Enter makes a line here, it does not file. The button files. Cancel Esc Escalate to S. Varga | footer | escalate |
| `escalate-from-expired` | Escalate C-4417 | heading | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | Harrier · Escalate, opened from evidence expired | SEO / IA-owned, `<title>` | - |
| `escalate-from-expired` | One prompt here, not three. Three empty fields at 03:00 produce a handover that looks complete and is not. The handover is thinner from a phone, and that is honest rather than ideal. | p.anote | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | Optional, and prompted anyway | placeholder | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | S. Varga SOC lead · on for another 3h Paged through the provider’s on call tool. Harrier reads the rota, it does not own it , and it records that this was sent rather than delivering it. | recipient | escalate |
| `escalate-from-expired` | The case stays open and gains escalated , so it keeps its place in the queue and stops looking like a case nobody has touched. No verdict is filed and nothing is tuned. The escalation is written to the log either way, and it cannot be taken back: if it comes back to you, that is a new entry rather than an erased one. 4.7 left no other exit: a verdict filed now would rest on evidence nobody can produce in April, which is the one thing this product exists to prevent. The case stays open and gains escalated . No verdict is filed. It is written to the log. There is no other exit from an expired case. | consequence line | - |
| `escalate-from-expired` | The evidence snapshot aged out of retention on 2026-08-14, so the nine signals behind Clerk’s verdict are no longer retrievable. | sample input, fixture instance | - |
| `escalate-from-expired` | The handover | heading | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | The snapshot is gone. The sources aged out of retention on 2026-08-14 . What was here is recorded; what it said is not retrievable. | absence block | - |
| `escalate-from-expired` | Three prompts, all optional. No taxonomy and no severity picker: a rejection routes to a machine so it must be machine readable, and this routes to a person who will read it. Structure here serves comprehension, and it is what stops the quality of a handover depending on how tired its author was. | p.anote | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | What I checked | field label | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | What I could not do | field label | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | What I need from you | field label | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | What happens when you send it | heading | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-from-expired` | Who this goes to | heading | escalate-no-recipient, escalate-write-failed, escalate |
| `escalate-no-recipient` | 1 The service delivery duty line the provider’s declared fallback | div.optlist | - |
| `escalate-no-recipient` | C-4417 · Larkfield Logistics · Clerk filed real, contain identity , and it is still open | sub-heading | escalate-write-failed, escalate |
| `escalate-no-recipient` | Disabled until a recipient exists. Enter makes a line here in any case. Cancel Esc Escalate | footer | - |
| `escalate-no-recipient` | Fallback recipient | accessible name | - |
| `escalate-no-recipient` | Harrier · Escalate, nobody on the rota | SEO / IA-owned, `<title>` | - |
| `escalate-no-recipient` | Nothing is sent yet, and the case does not gain escalated . An escalation filed with nobody attached is a case that looks handed over and is not , which is worse than a case that is plainly still open. Pick the fallback above and this becomes the same sentence as everywhere else. Nothing is sent yet. The case does not gain escalated until somebody is attached to it. | consequence line | - |
| `escalate-no-recipient` | S. Varga SOC lead · rota window ended 2h ago, and nobody picked it up Nobody is on the next level. Named anyway, because who it would have gone to is the first thing you need in order to chase it. | recipient | - |
| `escalate-write-failed` | A call to the client, and a decision on whether to disable the account before 08:00. | sample input, fixture instance | - |
| `escalate-write-failed` | Correlated the token against the corporate range and confirmed the same correlationId on both sign ins. | sample input, fixture instance | - |
| `escalate-write-failed` | Could not reach the tenant’s mail admin to confirm whether the forwarding rule is sanctioned. | sample input, fixture instance | - |
| `escalate-write-failed` | Enter makes a line here, it does not file. The button retries. Cancel Esc Try again | footer | - |
| `escalate-write-failed` | Harrier · Escalate, it did not write | SEO / IA-owned, `<title>` | - |
| `escalate-write-failed` | Last shown, and it did not happen. The case stays open and unescalated. Your three answers are preserved on this screen and nowhere else, so leaving now loses them. It did not happen. The case stays open and unescalated. Your answer is preserved here and nowhere else. | consequence line | - |
| `escalate-write-failed` | S. Varga SOC lead · frozen at the last good read of the rota Paged through the provider’s on call tool. Harrier reads the rota, it does not own it , and it records that this was sent rather than delivering it. | recipient | - |
| `escalate-write-failed` | The escalation did not write. You sent it 40s ago and the log did not take it, so nobody has been told . The case stays open and unescalated , which is not the same state as held locally: there, a decision exists and is unrecorded; here, no handover happened at all. | banner, state message | - |

### 5.1 Decision log (75 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `log` | 34 entries this shift and the one before, across 6 of 40 tenants | SEO / IA-owned, H1 readout | - |
| `log` | 7 of 34 shown, newest first ↑ ↓ read, the pane follows Enter opens the entry at its own address order: newest first, always. Nothing here is sorted by urgency | list foot, keys and order | - |
| `log` | Harrier · Decision log | SEO / IA-owned, `<title>` | - |
| `log` | Narrowed to All tenants in your provider scope. No actor filter, no decision filter Entries 34 Spanning 2026-08-21T19:00:00Z to now How far back this can answer The earliest entry held for these tenants is 2026-02-03T08:14:20Z . Nothing is ever deleted from the log. How long the evidence snapshot behind an entry stays retrievable is set by your provider, and an entry past that window still tells you what was decided and by whom. | what this view covers | - |
| `log-narrowing` | 2026-06-01 to 2026-06-30 × | filter chip | log-not-found, log-snapshot-gone |
| `log-narrowing` | Any actor ▾ | filter chip | log-snapshot-gone |
| `log-narrowing` | Every decision on every tenant in your provider scope, not only your own . A log that showed only yours could not answer a question about a shift you did not work. | Clerk narrative, fixture instance | log |
| `log-narrowing` | Harrier · Decision log, narrowing | SEO / IA-owned, `<title>` | - |
| `log-narrowing` | It narrows before it draws. The log holds every decision on forty tenants, so a list that fills in while you read invites answering from a partial one. / The query is on screen while it runs, because a wait you can read is a wait you can correct. / / It resolves two ways, and both are drawn: it matched, 3 entries or it matched nothing . | empty state | - |
| `log-narrowing` | Meridian Health × | filter chip | log-not-found, queue-no-match |
| `log-narrowing` | Narrowed to Meridian Health , decision rejected , June 2026 Entries counting Spanning 2026-06-01T00:00:00Z to 2026-06-30T23:59:59Z How far back this can answer The earliest entry held for these tenants is 2026-02-03T08:14:20Z . Nothing is ever deleted from the log. How long the evidence snapshot behind an entry stays retrievable is set by your provider, and an entry past that window still tells you what was decided and by whom. | what this view covers | - |
| `log-narrowing` | Narrowing | accessible name | - |
| `log-narrowing` | Narrowing Meridian Health · rejected · June 2026 | SEO / IA-owned, H1 readout | - |
| `log-narrowing` | Nothing on this screen edits anything, and there is no control that could. A mistake becomes a second entry , which is why the Meridian pair above reads as two rows rather than one corrected one. | Clerk narrative, fixture instance | log |
| `log-narrowing` | Rejected × | filter chip | - |
| `log-narrowing` | Whose decisions are here | heading | log |
| `log-narrowing` | counting, no rows drawn yet ↑ ↓ read, the pane follows Enter opens the entry at its own address order: newest first, always. Nothing here is sorted by urgency | list foot, keys and order | - |
| `log-not-found` | Actor: R. Idrissi is what emptied it. Remove it and 4 entries come back, all ruled by D. Okonkwo. The chip is marked in the bar above, where the question was asked. Remove Actor: R. Idrissi | banner, state message | - |
| `log-not-found` | Actor: R. Idrissi × | filter chip | - |
| `log-not-found` | Actor: R. Idrissi. Without it, 4 entries match, all of them ruled by D. Okonkwo. You did not work that shift, which is exactly the case the log exists for. | Clerk narrative, fixture instance | - |
| `log-not-found` | Any decision ▾ | filter chip | log-snapshot-gone |
| `log-not-found` | Case id, if the client quoted one | field | - |
| `log-not-found` | Date range, UTC | field | - |
| `log-not-found` | Find the decision | heading | - |
| `log-not-found` | Harrier · Decision log, not findable | SEO / IA-owned, `<title>` | - |
| `log-not-found` | Leave this empty to search every analyst in your provider scope | field hint | - |
| `log-not-found` | No entry matches this scope 4 filters, 1 tenant | SEO / IA-owned, H1 readout | - |
| `log-not-found` | Nothing matched, and the pane is the next attempt. Not a shrug and not an illustration: the fields on the right are the search, prefilled with what you already narrowed to. | empty state | - |
| `log-not-found` | R. Idrissi | prefilled value, fixture instance | - |
| `log-not-found` | Search without the actor Enter Try 2024 instead Clear all four | div.pane-foot | - |
| `log-not-found` | Someone asked you a question, so this is the start of the next attempt rather than the end of this one | sub-heading | - |
| `log-not-found` | Tenant | field | - |
| `log-not-found` | What emptied it | heading | - |
| `log-not-found` | Who decided it | field label | - |
| `log-not-found` | no rows in this scope ↑ ↓ read, the pane follows Enter opens the entry at its own address order: newest first, always. Nothing here is sorted by urgency | list foot, keys and order | - |
| `log-selected` | 34 entries this shift and the one before, one selected | SEO / IA-owned, H1 readout | - |
| `log-selected` | 6 sources queried over 24h . The snapshot is addressed, not reconstructed: what follows is the state the sources were in when Clerk read them, not what they say today. | provenance line | - |
| `log-selected` | 7 of 34 shown, one selected ↑ ↓ read, the pane follows Enter opens the entry at its own address order: newest first, always. Nothing here is sorted by urgency | list foot, keys and order | - |
| `log-selected` | All 9 signals, at the address below | note under a block | - |
| `log-selected` | All tenants ▾ | filter chip | log, queue |
| `log-selected` | Any actor ▾ | filter chip | log |
| `log-selected` | Any decision ▾ | filter chip | log |
| `log-selected` | Escalated to S. Varga by R. Idrissi · 2026-08-22T04:41:12Z | sub-heading | - |
| `log-selected` | Harrier · Decision log, entry selected | SEO / IA-owned, `<title>` | - |
| `log-selected` | High Meridian Health Credential stuffing on the VPN Amended by D. Okonkwo Supersedes the entry below. Both stay. – amended 2026-08-21T23:12:41Z | row, fixture instance | log |
| `log-selected` | High Meridian Health Credential stuffing on the VPN Rejected by D. Okonkwo Corrected 34m later by the entry above. Nothing was edited and nothing was removed. Detection is too broad superseded 2026-08-21T22:38:16Z | row, fixture instance | log |
| `log-selected` | Low Bramber Retail Mass mailbox rule creation Upheld by R. Idrissi: benign, new admin onboarding – upheld 2026-08-22T02:17:30Z | row, fixture instance | log |
| `log-selected` | Low Halcyon Care Beaconing to a new domain Contained by Clerk, inside this tenant’s latitude – Clerk acted alone 2026-08-22T04:02:55Z | row, fixture instance | log |
| `log-selected` | Medium Aubrey Dental Group Sign in from an unseen device Upheld by D. Okonkwo – upheld 2026-08-21T21:05:33Z | row, fixture instance | log |
| `log-selected` | Medium Bramber Retail Impossible travel, two offices Rejected by R. Idrissi Tenant context missing rejected 2026-08-22T01:44:09Z | row, fixture instance | log |
| `log-selected` | No verdict was filed. The case was handed to S. Varga, SOC lead, through the provider’s on call tool. Clerk’s conclusion, real, contain identity , stands unruled. | Clerk narrative, fixture instance | - |
| `log-selected` | Open at its own address Enter The live case | div.pane-foot | - |
| `log-selected` | Snapshot ?as-of=2026-08-22T04:14:05Z · filed 27m before the ruling | stamp line | - |
| `log-selected` | The evidence as it stood | heading | log-snapshot-gone |
| `log-selected` | The handover, as it was written | heading | - |
| `log-selected` | This shift and the one before × | filter chip | log |
| `log-selected` | What I checked. Correlated the token against the corporate range and confirmed the same correlationId on both sign ins. | Clerk narrative, fixture instance | - |
| `log-selected` | What I could not do. Could not reach the tenant’s mail admin to confirm whether the forwarding rule is sanctioned. | Clerk narrative, fixture instance | - |
| `log-selected` | What I need from you. A call to the client, and a decision on whether to disable the account before 08:00. | Clerk narrative, fixture instance | - |
| `log-selected` | escalated | p.chips-hd | queue-escalated |
| `log-snapshot-gone` | 3 entries Norsk Marine, June 2026, one selected | SEO / IA-owned, H1 readout | - |
| `log-snapshot-gone` | 3 of 3 shown, one snapshot unreadable ↑ ↓ read, the pane follows Enter opens the entry at its own address order: newest first, always. Nothing here is sorted by urgency | list foot, keys and order | - |
| `log-snapshot-gone` | 6 sources were queried over 24h at decision time. The count survived; the content did not. | provenance line | - |
| `log-snapshot-gone` | C-3180 · Norsk Marine | heading | - |
| `log-snapshot-gone` | Clerk concluded real, contain endpoint , and D. Okonkwo upheld it. That is recorded, it is not going anywhere, and no control on this screen can change it. | Clerk narrative, fixture instance | - |
| `log-snapshot-gone` | Harrier · Decision log, the snapshot did not survive | SEO / IA-owned, `<title>` | - |
| `log-snapshot-gone` | High Norsk Marine Ransomware precursor on FS-02 Upheld by D. Okonkwo – upheld 2026-06-08T22:41:03Z | row, fixture instance | - |
| `log-snapshot-gone` | Low Norsk Marine Sign in from an unseen device Contained by Clerk, inside this tenant’s latitude – Clerk acted alone 2026-06-02T05:09:57Z | row, fixture instance | - |
| `log-snapshot-gone` | Medium Norsk Marine Beaconing from a bridge workstation Rejected by D. Okonkwo Detection is too broad rejected 2026-06-19T11:26:40Z | row, fixture instance | - |
| `log-snapshot-gone` | Norsk Marine × | filter chip | - |
| `log-snapshot-gone` | Open at its own address Enter Back to the list | div.pane-foot | - |
| `log-snapshot-gone` | Snapshot ?as-of=2026-06-08T22:39:11Z · unreadable since 2026-07-30 | stamp line | - |
| `log-snapshot-gone` | The snapshot did not survive. Fourteen signals stood behind this verdict and the stored snapshot failed its integrity check on 2026-07-30T03:14:02Z . The failure is itself an entry , written by the system and readable like any other. / / What was decided is here. What it was decided on is not, and this frame says so rather than showing you a blank and letting you assume it was empty. | absence block | - |
| `log-snapshot-gone` | Upheld by D. Okonkwo · 2026-06-08T22:41:03Z | sub-heading | - |
| `log-snapshot-gone` | upheld | p.chips-hd | - |

### 5.4 Log entry, ?as-of (69 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `entry` | 2 token replays at Larkfield Logistics in the 90 days to 2026-08-22, both real. That is the base rate on that date , and it is not the base rate now. | Clerk narrative, fixture instance | - |
| `entry` | 6 sources queried over 24h as it stood: Entra ID, Exchange audit, EDR, proxy, threat intel, tenant baseline. | provenance line | - |
| `entry` | C-4417 · Larkfield Logistics Decided 2026-08-22T04:41:12Z · snapshot read 27m before the ruling | SEO / IA-owned, H1 | - |
| `entry` | Harrier · Log entry, the full snapshot | SEO / IA-owned, `<title>` | - |
| `entry-beyond-retention` | /log/e-04417?as-of=2024-11-02T09:20:44Z Back to the log | address block | - |
| `entry-beyond-retention` | AS IT STOOD 2024-11-02T09:20:44Z The address resolved. The record behind it is outside the retention window. Back to the log | rail, the frame of a record | - |
| `entry-beyond-retention` | C-0441 · Bramber Retail Asked for 2024-11-02T09:20:44Z · this is the part being refused | SEO / IA-owned, H1 | - |
| `entry-beyond-retention` | End of the record as it stood 2024-11-02T09:20:44Z. Nothing below this line, and nothing on this page, can be edited. | rail, the frame of a record | - |
| `entry-beyond-retention` | Harrier · Log entry, beyond retention | SEO / IA-owned, `<title>` | - |
| `entry-beyond-retention` | The address you asked for | heading | - |
| `entry-beyond-retention` | The log does not reach back this far. Entries before 2026-02-03T08:14:20Z are outside the window your provider set, so there is no verdict record, no evidence and no grant to show you. / / This is not a 404. A 404 says the address is wrong. The address is right and the answer no longer exists, which is a different sentence and a different thing for an auditor to write down. | beyond retention | - |
| `entry-beyond-retention` | The window is named above rather than left for you to infer from an empty page. You learn the window from the entry, never from a failure , and this is the second place in the product that carries it: 5.1’s resting pane carries it for a whole view, this carries it for one address. | Clerk narrative, fixture instance | - |
| `entry-beyond-retention` | What you can still be told | heading | - |
| `entry-changed` | /log/e-88214?as-of=2026-08-22T04:14:05Z Copy | address block | entry-partial, entry |
| `entry-changed` | 2 token replays at Larkfield Logistics in the 90 days to 2026-08-22, both real. | Clerk narrative, fixture instance | - |
| `entry-changed` | 6 sources queried over 24h as it stood. | provenance line | - |
| `entry-changed` | A refresh token was presented from ASN 41xxx , first time for this tenant Entra sign in | evidence claim, fixture instance | entry-partial, entry |
| `entry-changed` | AS IT STOOD 2026-08-22T04:14:05Z A record of what was known then. The live case has changed since, and it is linked rather than shown. Back to the log | rail, the frame of a record | - |
| `entry-changed` | An inbox rule was created 90 seconds later , forwarding to an external address Exchange audit | evidence claim, fixture instance | entry |
| `entry-changed` | C-4417 · Larkfield Logistics Decided 2026-08-22T04:41:12Z · the live case has moved on since | SEO / IA-owned, H1 | - |
| `entry-changed` | End of the record as it stood 2026-08-22T04:14:05Z. Nothing below this line, and nothing on this page, can be edited. | rail, the frame of a record | entry-partial, entry |
| `entry-changed` | Escalated, not ruled. Handed to S. Varga, SOC lead, by R. Idrissi through the provider’s on call tool. Clerk’s conclusion, real, contain identity , stands unruled. | Clerk narrative, fixture instance | entry-partial, entry |
| `entry-changed` | Field correlationId matches across both sign ins, which is what makes it the same token rather than two. Read from the tenant’s own log, 04:08 to 04:12 UTC. | expanded detail | entry |
| `entry-changed` | Harrier · Log entry, the live case has changed | SEO / IA-owned, `<title>` | - |
| `entry-changed` | How this was read | expansion head, **new at stage 13** | entry |
| `entry-changed` | No reason code, and that is correct rather than missing. The taxonomy in 0.7 routes rejections to tuning. An escalation routes to a person, so what it carries is the handover below. | Clerk narrative, fixture instance | entry-partial, entry |
| `entry-changed` | Normal at this client, on that date | heading | entry-partial, entry |
| `entry-changed` | Open C-4417 as it is now Back to this entry in the log | the pair of exits | entry-partial, entry |
| `entry-changed` | The address of this record | heading | entry-gone, entry-partial, entry |
| `entry-changed` | The evidence as it stood, 9 signals | heading | entry-partial, entry |
| `entry-changed` | The handover, as it was written | heading | entry-partial, entry |
| `entry-changed` | The live case | heading | entry-gone, entry-partial, entry |
| `entry-changed` | The live case has moved on since this snapshot. S. Varga ruled on it at 2026-08-22T05:58:20Z , one hour and seventeen minutes after this record was written. / / What changed is not counted here, and that is a decision. Counting means diffing this snapshot against the live case on every render, which is real work for a page nobody opens daily. More importantly, current values shown beside historical ones is the confusion this whole node exists to prevent. The statement ships; the count is later. | Clerk narrative, fixture instance | - |
| `entry-changed` | The record that stood behind the grant on that date: 34 of 36 upheld over the 30 days to 2026-08-22. | Clerk narrative, fixture instance | entry-partial, entry |
| `entry-changed` | The same token was used from the corporate range 4 minutes earlier Entra sign in | evidence claim, fixture instance | entry |
| `entry-changed` | This snapshot stays retrievable until 2026-11-20T04:14:05Z , from your provider’s contract. The verdict record above is kept for the life of the record. You learn the window here rather than from a failure. | provenance line | entry-partial, entry |
| `entry-changed` | What Clerk was permitted to do here, on 2026-08-22 | heading | entry-partial, entry |
| `entry-changed` | What I checked. Correlated the token against the corporate range and confirmed the same correlationId on both sign ins. | Clerk narrative, fixture instance | entry-partial, entry |
| `entry-changed` | What I could not do. Could not reach the tenant’s mail admin to confirm whether the forwarding rule is sanctioned. | Clerk narrative, fixture instance | entry-partial, entry |
| `entry-changed` | What I need from you. A call to the client, and a decision on whether to disable the account before 08:00. | Clerk narrative, fixture instance | entry-partial, entry |
| `entry-changed` | What was decided, and by whom | heading | entry-gone, entry-partial, entry |
| `entry-changed` | no Change policy destructive, so it always asks | latitude ladder, out of reach | entry-partial, entry |
| `entry-changed` | no Contain identity not reversible without the client, so it asked | latitude ladder, out of reach | entry-gone, entry-partial, entry |
| `entry-changed` | no Contain network not reversible without the client, so it asked | latitude ladder, out of reach | entry-partial, entry |
| `entry-changed` | no Remove content destructive, so it always asks | latitude ladder, out of reach | entry-partial, entry |
| `entry-changed` | not found no password change, and no new device enrolment Entra, EDR | evidence claim, fixture instance | entry-partial, entry |
| `entry-changed` | points the other way this user has travelled to this region twice in 90 days tenant baseline | evidence claim, fixture instance | entry-partial, entry |
| `entry-changed` | yes Contain endpoint | latitude ladder, the ceiling | entry-gone, entry-partial, entry |
| `entry-changed` | yes Investigate | latitude ladder | entry-gone, entry-partial, entry |
| `entry-gone` | /log/e-71903?as-of=2026-06-08T22:39:11Z Copy | address block | - |
| `entry-gone` | 6 sources were queried over 24h at decision time. The count survived; the content did not. | provenance line | - |
| `entry-gone` | AS IT STOOD 2026-06-08T22:39:11Z A record of what was known then. This is not the live case. Back to the log | rail, the frame of a record | - |
| `entry-gone` | Back to the log, June 2026 | p | - |
| `entry-gone` | C-3180 closed on 2026-06-09 and its page still resolves. | Clerk narrative, fixture instance | - |
| `entry-gone` | C-3180 · Norsk Marine Decided 2026-06-08T22:41:03Z · the snapshot did not survive | SEO / IA-owned, H1 | - |
| `entry-gone` | Clerk concluded real, contain endpoint , and D. Okonkwo upheld it. That is recorded and it is not going anywhere. No control on this page could change it if anyone wanted to. | Clerk narrative, fixture instance | - |
| `entry-gone` | End of the record as it stood 2026-06-08T22:39:11Z. Nothing below this line, and nothing on this page, can be edited. | rail, the frame of a record | - |
| `entry-gone` | Harrier · Log entry, nothing survived | SEO / IA-owned, `<title>` | - |
| `entry-gone` | None of it survived. The stored snapshot failed its integrity check on 2026-07-30T03:14:02Z . That failure is itself an entry , written by the system and readable like any other, because a record that can lose things quietly is not a record. / / What was decided is above. What it was decided on is gone, and this frame says so rather than showing a blank and letting you assume there was nothing here. | absence block | - |
| `entry-gone` | Retained. The grant is stored with the entry rather than with the evidence, so it outlives the snapshot. On that date the record behind it was 18 of 20 upheld over 30 days. | Clerk narrative, fixture instance | - |
| `entry-gone` | The evidence as it stood, 14 signals | heading | - |
| `entry-gone` | What Clerk was permitted to do here, on 2026-06-08 | heading | - |
| `entry-partial` | 2 token replays at Larkfield Logistics in the 90 days to 2026-08-22, both real. Retained. | Clerk narrative, fixture instance | - |
| `entry-partial` | 6 sources were queried over 24h . 4 retained , and 2 no longer retrievable : Exchange audit and proxy aged out of the tenant’s own retention on 2026-08-14. The two counts are kept apart on purpose, because “4 sources” and “4 of 6 sources” are different claims and only one of them is true here. | provenance line | - |
| `entry-partial` | A different thing, named and linked rather than shown beside this one. Current values next to historical ones is the confusion, not the cure. | Clerk narrative, fixture instance | entry |
| `entry-partial` | AS IT STOOD 2026-08-22T04:14:05Z A record of what was known then. This is not the live case. Back to the log | rail, the frame of a record | entry |
| `entry-partial` | C-4417 · Larkfield Logistics Decided 2026-08-22T04:41:12Z · 4 of 6 sources retained | SEO / IA-owned, H1 | - |
| `entry-partial` | Harrier · Log entry, partly gone | SEO / IA-owned, `<title>` | - |
| `entry-partial` | The decision is always retained, whatever happened to the evidence. Two of the six sources are gone and the record above is untouched by that. | banner, state message | - |
| `entry-partial` | Two signals from Exchange audit stood here and are no longer retrievable. The source aged out of the tenant’s own retention on 2026-08-14 . What was here is recorded; what it said is not. | absence block | - |

### 2.1 Shift brief (106 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `shift` | 19:00 to 07:00 UTC R. Idrissi coming on · D. Okonkwo going off | SEO / IA-owned, H1 readout | - |
| `shift` | 6 pointers, and every one of them opens a case ↑ ↓ read the pointers Enter opens the case a line points at order: what waits, then what moved, newest first | list foot, keys and order | - |
| `shift` | Halden Freight · D. Okonkwo / Nobody at the client answers before 08:00, so the VPN rollout schedule is still unconfirmed. Sanctioned is the likely answer and it is not the recorded one. | expanded detail | - |
| `shift` | Handed from D. Okonkwo. Twelve hours, and what is left of them | sub-heading | - |
| `shift` | Harrier · Shift brief | SEO / IA-owned, `<title>` | - |
| `shift` | Larkfield Logistics, C-4417 · D. Okonkwo / Could not reach the tenant’s mail admin to confirm whether the forwarding rule is sanctioned. S. Varga has it now and wanted a call to the client before 08:00. | expanded detail | - |
| `shift` | Meridian Health · D. Okonkwo / The write has failed twice. Do not rule it again: the decision is made and it is the log entry that is missing, not the verdict. | expanded detail | - |
| `shift-assembling` | 1 tenant whose latitude moved, read from the fleet done | brief line | - |
| `shift-assembling` | 19:00 to 07:00 UTC assembling · R. Idrissi coming on · D. Okonkwo going off | SEO / IA-owned, H1 readout | - |
| `shift-assembling` | 3 notes left on cases done | brief line | - |
| `shift-assembling` | 6 cases whose state changed, correlated done | brief line | - |
| `shift-assembling` | 7 entries read from the decision log for this window done | brief line | - |
| `shift-assembling` | Answered first. The fleet reads a 30 day window rather than this shift, so it does not have to wait for the shift to finish being counted. | note under a block | - |
| `shift-assembling` | Assembling the brief | accessible name | - |
| `shift-assembling` | Being assembled from the record, not written from memory | sub-heading | - |
| `shift-assembling` | Harrier · Shift brief, assembling | SEO / IA-owned, `<title>` | - |
| `shift-assembling` | It resolves two ways, and both are drawn. Either six cases moved and eighteen are waiting , or nothing carried over , which is the good outcome and not a failure. | empty state | - |
| `shift-assembling` | Named, not a spinner. A brief is a claim about coverage, so what it is still reading is the one thing worth showing while it reads. Two lines are outstanding and both say which. | note under a block | - |
| `shift-assembling` | What is being gathered | heading | - |
| `shift-assembling` | What this resolves into | heading | - |
| `shift-assembling` | assembling, no pointers drawn yet ↑ ↓ read the pointers Enter opens the case a line points at order: what waits, then what moved, newest first | list foot, keys and order | - |
| `shift-assembling` | – counting what waits on a decision counting | brief line | - |
| `shift-assembling` | – the rota, read from the provider’s on call tool counting | brief line | - |
| `shift-close-failed` | 18 waiting on a decision across 12 of 40 tenants in your scope One of the eighteen has been waiting since before this shift: Halden Freight , impossible travel across two offices, still open on the client’s VPN rollout. frozen at the attempt | brief line | - |
| `shift-close-failed` | 19:00 to 07:00 UTC R. Idrissi, unsealed · the close did not write · D. Okonkwo takes it at 07:00 | SEO / IA-owned, H1 readout | - |
| `shift-close-failed` | 6 pointers, frozen at the attempt. The brief is still open ↑ ↓ read the pointers Enter opens the case a line points at order: what waits, then what moved, newest first | list foot, keys and order | - |
| `shift-close-failed` | Aubrey Dental Group Sign in from an unseen device. Upheld, and this tenant still has no baseline to compare against decided 8h | column headers | shift-sealed |
| `shift-close-failed` | Bramber Retail Mass mailbox rule creation. Upheld: benign, new admin onboarding decided 3h | column headers | shift-sealed |
| `shift-close-failed` | Could not reach the tenant’s mail admin to confirm whether the forwarding rule is sanctioned. S. Varga has it now and wanted a call to the client before 08:00. | sample input, fixture instance | shift-outgoing |
| `shift-close-failed` | Frozen at the attempt. The counts stopped when the seal was tried, so what is on screen is what would have been sealed. Nothing was lost. | note under a block | - |
| `shift-close-failed` | Halcyon Care Beaconing to a new domain. Contained by Clerk , inside this tenant’s latitude, and still open on a person acted 1h | column headers | shift-sealed |
| `shift-close-failed` | Harrier · Shift brief, the close did not write | SEO / IA-owned, `<title>` | - |
| `shift-close-failed` | Larkfield Logistics Token replay from a new ASN. Escalated to S. Varga , and no verdict was filed, so it is still open escalated 31m | column headers | shift-sealed |
| `shift-close-failed` | Meridian Health Credential stuffing on the VPN. Rejected, then amended 34m later. Both entries stand , and the second says what it corrected decided 6h | column headers | shift-sealed |
| `shift-close-failed` | Meridian Health Mass file rename on one host. Rejected, and the write did not land . The decision exists in this console and nowhere else decided unrecorded 1h | column headers | shift-sealed |
| `shift-close-failed` | Nobody at the client answers before 08:00, so the VPN rollout schedule is still unconfirmed. Sanctioned is the likely answer and it is not the recorded one. | sample input, fixture instance | shift-outgoing |
| `shift-close-failed` | Notes you left on cases | heading | shift-outgoing |
| `shift-close-failed` | On Halden Freight | field label | shift-outgoing |
| `shift-close-failed` | On Larkfield Logistics, C-4417 | field label | shift-outgoing |
| `shift-close-failed` | On Meridian Health | field label | shift-outgoing |
| `shift-close-failed` | The brief did not seal, 40s ago. It stays open and it stays readable, and both of you have been told : you, and D. Okonkwo, who is about to read it. Telling only the person leaving would put the handover back on one person remembering. | banner, state message | - |
| `shift-close-failed` | The write has failed twice. Do not rule it again: the decision is made and it is the log entry that is missing, not the verdict. | sample input, fixture instance | shift-outgoing |
| `shift-close-failed` | Try again Enter Leave it open and go | div.pane-foot | - |
| `shift-close-failed` | What moved this shift | heading | shift-sealed, shift |
| `shift-close-failed` | What waits on a decision | heading | shift-outgoing, shift-sealed, shift |
| `shift-close-failed` | What you type here is written on the case . The brief is not a document you author: the structured half above is assembled from what actually happened, and this is the half only a person can write. | note under a block | shift-outgoing |
| `shift-close-failed` | Yours, and still open. The seal is what failed, not the brief | sub-heading | - |
| `shift-nothing-carried` | 0 cases moved nothing to open | brief line | - |
| `shift-nothing-carried` | 0 waiting on a decision, across 40 tenants in scope nothing to open | brief line | - |
| `shift-nothing-carried` | 19:00 to 07:00 UTC R. Idrissi, open · nothing carried over · D. Okonkwo takes it at 07:00 | SEO / IA-owned, H1 readout | - |
| `shift-nothing-carried` | 3 closed by Clerk alone, inside each tenant’s latitude Same line as on a busy shift, and it still has nowhere to go. nowhere to review | brief line | - |
| `shift-nothing-carried` | Harrier · Shift brief, nothing carried over | SEO / IA-owned, `<title>` | - |
| `shift-nothing-carried` | Meridian Health and Bramber Retail produced nothing. Both are usually the loudest tenants overnight, so their silence is the part of this worth reading. | Clerk narrative, fixture instance | - |
| `shift-nothing-carried` | No notes, because there were no cases. Nothing is missing here: the prose half of a brief is written on cases, and this shift produced none to write on. | absence block | - |
| `shift-nothing-carried` | No tenant moved. Forty held their latitude for twelve hours, which is what a quiet shift looks like in the fleet. | note under a block | - |
| `shift-nothing-carried` | Norsk Marine is silent for a different reason. Its assets were offline for 6h , which is normal at that tenant and is not the same as quiet. Nothing was reported, so nothing can be said about it. | Clerk narrative, fixture instance | - |
| `shift-nothing-carried` | Notes left on cases | heading | shift-sealed, shift-unsealed, shift |
| `shift-nothing-carried` | Nothing carried over, and that is the good outcome. Twelve hours, three cases Clerk closed on its own, and nothing that needed a person. The brief is short because the shift was quiet, not because something failed. | banner, state message | - |
| `shift-nothing-carried` | Seal the brief Enter Back to the queue | div.pane-foot | shift-outgoing |
| `shift-nothing-carried` | Two kinds of nothing, and they are not interchangeable. A brief that showed one blank for both would be telling the incoming analyst something untrue. | note under a block | - |
| `shift-nothing-carried` | What the shift came to | heading | - |
| `shift-nothing-carried` | What was quiet, and what was only silent | heading | - |
| `shift-nothing-carried` | Yours, open, and short because the shift was quiet | sub-heading | - |
| `shift-nothing-carried` | no pointers, and that is the answer rather than an empty list ↑ ↓ read the pointers Enter opens the case a line points at order: what waits, then what moved, newest first | list foot, keys and order | - |
| `shift-outgoing` | 18 waiting on a decision across 12 of 40 tenants in your scope One of the eighteen has been waiting since before this shift: Halden Freight , impossible travel across two offices, still open on the client’s VPN rollout. open the queue → | a.bline | shift-unsealed, shift |
| `shift-outgoing` | 19:00 to 07:00 UTC R. Idrissi, open · 2h to go · D. Okonkwo takes it at 07:00 | SEO / IA-owned, H1 readout | - |
| `shift-outgoing` | 6 pointers so far, and the count is still moving ↑ ↓ read the pointers Enter opens the case a line points at order: what waits, then what moved, newest first | list foot, keys and order | - |
| `shift-outgoing` | Aubrey Dental Group Sign in from an unseen device. Upheld, and this tenant still has no baseline to compare against decided 8h | row, fixture instance | - |
| `shift-outgoing` | Bramber Retail Mass mailbox rule creation. Upheld: benign, new admin onboarding decided 3h | row, fixture instance | - |
| `shift-outgoing` | Halcyon Care Beaconing to a new domain. Contained by Clerk , inside this tenant’s latitude, and still open on a person acted 1h | row, fixture instance | - |
| `shift-outgoing` | Harrier · Shift brief, handing over | SEO / IA-owned, `<title>` | - |
| `shift-outgoing` | Larkfield Logistics Token replay from a new ASN. Escalated to S. Varga , and no verdict was filed, so it is still open escalated 31m | row, fixture instance | - |
| `shift-outgoing` | Meridian Health Credential stuffing on the VPN. Rejected, then amended 34m later. Both entries stand , and the second says what it corrected decided 6h | row, fixture instance | - |
| `shift-outgoing` | Meridian Health Mass file rename on one host. Rejected, and the write did not land . The decision exists in this console and nowhere else decided unrecorded 1h | row, fixture instance | - |
| `shift-outgoing` | Six moved, and the Meridian rejection has no log entry because its write never landed. That is exactly why it is a line here: the log cannot tell the next analyst about a decision the log never received. | note under a block | shift |
| `shift-outgoing` | This has been accumulating since 19:00. It is not written at the end of the shift, which is where handovers fail. Clerk has been adding to it all night and you add to the cases , never to this page. | banner, state message | - |
| `shift-outgoing` | What moved this shift, so far | heading | - |
| `shift-outgoing` | Yours, open, and it seals when you say so | sub-heading | - |
| `shift-sealed` | 18 waiting on a decision across 12 of 40 tenants in your scope One of the eighteen has been waiting since before this shift: Halden Freight , impossible travel across two offices, still open on the client’s VPN rollout. frozen at the seal | brief line | - |
| `shift-sealed` | 19:00 to 07:00 UTC sealed by R. Idrissi, 2m ago · D. Okonkwo takes it at 07:00 | SEO / IA-owned, H1 readout | - |
| `shift-sealed` | 6 pointers, frozen at the seal ↑ ↓ read the pointers Enter opens the case a line points at order: what waits, then what moved, newest first | list foot, keys and order | - |
| `shift-sealed` | A note lives on the case , not on this page. This is where they can be seen at once, and opening one opens the case it is attached to. | note under a block | shift |
| `shift-sealed` | Frozen. Nothing on this page changes now. D. Okonkwo reads it as it stands, and his own pointers are live because the brief he opens is his. | note under a block | - |
| `shift-sealed` | Halden Freight · R. Idrissi / Nobody at the client answers before 08:00, so the VPN rollout schedule is still unconfirmed. Sanctioned is the likely answer and it is not the recorded one. | expanded detail | - |
| `shift-sealed` | Harrier · Shift brief, sealed | SEO / IA-owned, `<title>` | - |
| `shift-sealed` | Larkfield Logistics, C-4417 · R. Idrissi / Could not reach the tenant’s mail admin to confirm whether the forwarding rule is sanctioned. S. Varga has it now and wanted a call to the client before 08:00. | expanded detail | - |
| `shift-sealed` | Meridian Health · R. Idrissi / The write has failed twice. Do not rule it again: the decision is made and it is the log entry that is missing, not the verdict. | expanded detail | - |
| `shift-sealed` | Sealed by R. Idrissi, 2m ago | sub-heading | - |
| `shift-sealed` | Sealed. D. Okonkwo reads it as it stands. Nothing here changes now, and taking the shift is how he acknowledges it: there is no second control to press, because the busiest minute of the day does not need one. | banner, state message | - |
| `shift-sealed` | Sign out Back to the queue | div.pane-foot | - |
| `shift-unsealed` | 19:00 to 07:00 UTC never sealed · R. Idrissi coming on · D. Okonkwo went off | SEO / IA-owned, H1 readout | - |
| `shift-unsealed` | 6 pointers from the record, and no notes ↑ ↓ read the pointers Enter opens the case a line points at order: what waits, then what moved, newest first | list foot, keys and order | - |
| `shift-unsealed` | Aubrey Dental Group Sign in from an unseen device. Upheld, and this tenant still has no baseline to compare against decided 10h | row, fixture instance | shift |
| `shift-unsealed` | Bramber Retail Mass mailbox rule creation. Upheld: benign, new admin onboarding decided 5h | row, fixture instance | shift |
| `shift-unsealed` | Halcyon Care Beaconing to a new domain. Contained by Clerk , inside this tenant’s latitude, and still open on a person acted 3h | row, fixture instance | shift |
| `shift-unsealed` | Harrier · Shift brief, nobody sealed it | SEO / IA-owned, `<title>` | - |
| `shift-unsealed` | Larkfield Logistics Token replay from a new ASN. Escalated to S. Varga , and no verdict was filed, so it is still open escalated 2h | row, fixture instance | shift |
| `shift-unsealed` | Meridian Health Credential stuffing on the VPN. Rejected, then amended 34m later. Both entries stand , and the second says what it corrected decided 8h | row, fixture instance | shift |
| `shift-unsealed` | Meridian Health Mass file rename on one host. Rejected, and the write did not land . The decision exists in this console and nowhere else decided unrecorded 3h | row, fixture instance | shift |
| `shift-unsealed` | Never sealed. Assembled by Clerk, unsigned by anyone | sub-heading | - |
| `shift-unsealed` | Nobody sealed this brief. D. Okonkwo left without closing it, so what you are reading was assembled by Clerk from the record alone. The counted half is complete and the written half is missing , and this page says which is which rather than reading like a brief somebody wrote. | banner, state message | - |
| `shift-unsealed` | Nothing here, and it is a loss rather than a blank. Three cases moved with something a person would have had to explain: why Larkfield went to S. Varga, why the Meridian write is still unrecorded, and what the client said about Halden Freight. None of it was written down. / / The cases themselves still hold their own history, so the answer is on each case rather than here, and it costs a case at a time instead of one page. | absence block | - |
| `shift-unsealed` | Start on the queue Enter Open the case S. Varga has | div.pane-foot | shift |
| `shift-unsealed` | This half did not depend on anyone. Clerk builds it from what happened, which is the whole reason the brief is structured rather than written. | note under a block | - |
| `shift-unsealed` | What moved this shift, from the record | heading | - |
| `shift-unsealed` | What waits on a decision, from the record | heading | - |

### 5.6 History of one case (23 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `case-history` | 3 entries C-4417 at Larkfield Logistics, every action and every override, both actors, in order | SEO / IA-owned, H1 readout | - |
| `case-history` | 3 of 3, the whole life of this case so far ↑ ↓ read, the pane follows Enter opens the entry at its own address order: newest first, always. Nothing here is sorted by urgency | list foot, keys and order | - |
| `case-history` | Both of them, in one stream. Clerk’s own actions and every human ruling on this case. There is no separate automation log , because two streams could disagree about this case. | Clerk narrative, fixture instance | - |
| `case-history` | Harrier · History of one case | SEO / IA-owned, `<title>` | - |
| `case-history` | Narrowed to Case C-4417 at Larkfield Logistics. One chip , and no other filter: a case is a thing with a beginning Entries 3 Spanning 2026-08-22T04:12:09Z to 2026-08-22T04:41:12Z How far back this can answer The earliest entry held for these tenants is 2026-02-03T08:14:20Z . Nothing is ever deleted from the log. How long the evidence snapshot behind an entry stays retrievable is set by your provider, and an entry past that window still tells you what was decided and by whom. | what this view covers | - |
| `case-history` | Nothing here edits anything, and there is no control that could. A mistake becomes a second entry beside the first. This case has not needed one. | Clerk narrative, fixture instance | - |
| `case-history-superseded` | 5 entries C-4417 at Larkfield Logistics, one of them superseded and both of that pair still here | SEO / IA-owned, H1 readout | - |
| `case-history-superseded` | 5 of 5, including one entry that was corrected rather than changed ↑ ↓ read, the pane follows Enter opens the entry at its own address order: newest first, always. Nothing here is sorted by urgency | list foot, keys and order | - |
| `case-history-superseded` | Both of them, in one stream, and on this case that is three: Clerk filed it, R. Idrissi handed it on, S. Varga ruled and then corrected himself. There is no separate automation log , because two streams could disagree about this case. | Clerk narrative, fixture instance | - |
| `case-history-superseded` | Case C-4417 × Any actor ▾ Any decision ▾ Any date ▾ | div.scopebar | case-history |
| `case-history-superseded` | Harrier · History of one case, a superseded entry | SEO / IA-owned, `<title>` | - |
| `case-history-superseded` | High Larkfield Logistics Token replay from a new ASN Amended by S. Varga Supersedes the entry below. Both stay. – amended 2026-08-22T06:11:47Z | row, fixture instance | - |
| `case-history-superseded` | High Larkfield Logistics Token replay from a new ASN Case opened by Clerk 9 signals correlated from 6 sources. No verdict yet, and no action taken – Clerk opened the case 2026-08-22T04:12:09Z | row, fixture instance | case-history |
| `case-history-superseded` | High Larkfield Logistics Token replay from a new ASN Escalated to S. Varga by R. Idrissi – escalated 2026-08-22T04:41:12Z | row, fixture instance | case-history, log-selected, log |
| `case-history-superseded` | High Larkfield Logistics Token replay from a new ASN Upheld by S. Varga Corrected 13m later by the entry above. Nothing was edited and nothing was removed. – superseded 2026-08-22T05:58:20Z | row, fixture instance | - |
| `case-history-superseded` | High Larkfield Logistics Token replay from a new ASN Verdict filed by Clerk: real, contain identity Above this tenant’s latitude, so it waited for a person rather than running – Clerk filed a verdict 2026-08-22T04:14:05Z | row, fixture instance | case-history |
| `case-history-superseded` | Narrowed to Case C-4417 at Larkfield Logistics. One chip , and the corrected ruling is inside it rather than filtered out of it Entries 5 Spanning 2026-08-22T04:12:09Z to 2026-08-22T06:11:47Z How far back this can answer The earliest entry held for these tenants is 2026-02-03T08:14:20Z . Nothing is ever deleted from the log. How long the evidence snapshot behind an entry stays retrievable is set by your provider, and an entry past that window still tells you what was decided and by whom. | what this view covers | - |
| `case-history-superseded` | Nothing here edits anything. A mistake becomes a second entry , which is why the pair above is two rows rather than one corrected one. The 05:58 ruling still says what it said. | Clerk narrative, fixture instance | - |
| `case-history-superseded` | Nothing is selected, and this is not an empty pane. It is the answer to the question you are about to be asked | sub-heading | case-history, log-narrowing, log |
| `case-history-superseded` | Open the newest entry Enter The live case The whole log | div.pane-foot | case-history |
| `case-history-superseded` | What cannot be done here | heading | case-history, log-narrowing, log |
| `case-history-superseded` | What this view covers | heading | case-history, log-narrowing, log |
| `case-history-superseded` | Whose entries are here | heading | case-history |

### 4.2 Case File, standalone route (23 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `case-standalone` | Harrier · Case file, arrived by link | SEO / IA-owned, `<title>` | - |
| `case-standalone` | Open in the queue Puts this case back in the pane with the list beside it, which is 4.1. All four verdict controls work here, and they are offered second rather than blocked: filing on this page leaves you on a case you have already ruled on, because there is no list for the row to change in. | the offer to open in the queue | - |
| `case-standalone-filed` | /case/C-4417 · the address that travels. /queue/case/C-4417 is the same case with the list, and neither redirects to the other | the address that travels | case-standalone-stale, case-standalone |
| `case-standalone-filed` | 6 sources queried over 24h : Entra ID, Exchange audit, EDR, proxy, threat intel, tenant baseline. Count first, never a bare percentage. 6 sources , 24h | provenance line | case-standalone |
| `case-standalone-filed` | Accepted by R. Idrissi, 4s ago. Written to the log against the snapshot as it stood. This page holds the case and states the outcome. It does not advance, because there is no list here to advance to and a permalink that walks away is not a permalink. The log entry | banner, state message | - |
| `case-standalone-filed` | C-4417 · Larkfield Logistics | SEO / IA-owned, H1 | case-standalone-stale, case-standalone |
| `case-standalone-filed` | Clerk concluded real, contain identity . The action was above this tenant’s latitude, so it waited for a person, and it has now run. | Clerk narrative, fixture instance | queue-decided |
| `case-standalone-filed` | Filed by Clerk 26m ago · ?as-of=2026-08-22T04:14:05Z · ruled by R. Idrissi 4s ago | stamp line | - |
| `case-standalone-filed` | Harrier · Case file, filed from the standalone route | SEO / IA-owned, `<title>` | - |
| `case-standalone-filed` | Live · last checked 4s | freshness, narrow | case-standalone |
| `case-standalone-filed` | Open in the queue The next case is there. This page stayed on the one you just ruled on because it has no list to move you into, which is the cost of an address that travels. | the offer to open in the queue | - |
| `case-standalone-filed` | Open the queue Open the log entry Open the queue | div.pane-foot | - |
| `case-standalone-filed` | What was decided | heading | log-selected, log-snapshot-gone, queue-decided |
| `case-standalone-filed` | decided acted | p.chips-hd | - |
| `case-standalone-stale` | 6 sources queried over 24h : Entra ID, Exchange audit, EDR, proxy, threat intel, tenant baseline. Count first, never a bare percentage. As of the last sync, 6m ago. 6 sources , 24h · as of the last sync | provenance line | - |
| `case-standalone-stale` | Accept a Amend m Reject r Escalate e Escalate e | div.pane-foot | case-standalone |
| `case-standalone-stale` | Escalate is the only exit from a phone. Accept, amend and reject need the evidence and the reasons in view at once, so they are desk actions. A case you read at 03:00 and know to be benign cannot be closed from here : it keeps its place in the queue until you are at a desk. | banner, state message | case-standalone |
| `case-standalone-stale` | Filed by Clerk 26m ago · ?as-of=2026-08-22T04:14:05Z · frozen at the last sync | stamp line | - |
| `case-standalone-stale` | Harrier · Case file, connection stale on the standalone route | SEO / IA-owned, `<title>` | - |
| `case-standalone-stale` | Marked as of the last sync. Nothing has arrived for 6m. The case is readable and it is not fresh. Filing a verdict is still allowed, because a degraded connection does not block a decision and the log records the snapshot you actually saw. There is no list here to fall back to , so this page carries the age itself. Stale, 6m. Escalating is still allowed. Everything below is as of the last sync. Try to reconnect | banner, state message | - |
| `case-standalone-stale` | Open in the queue The queue is stale too, and it is still the better surface: it has the other seventeen cases beside this one. All four verdict controls work here either way, because 0.4 settled that a degraded connection does not block a decision. | the offer to open in the queue | - |
| `case-standalone-stale` | Read as of the last sync, 6m ago . A grant changed since then would not show here yet. | note under a block | - |
| `case-standalone-stale` | Token replay from a new ASN · High · 9 signals · 6 sources, 24h · as of the last sync | sub-heading | - |

### 1.1 Sign in (22 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `index` | Harrier · Sign in | SEO / IA-owned, `<title>` | - |
| `index-deep-link` | After you sign in | heading | index-expired, index-idp-error |
| `index-deep-link` | Harrier · Sign in, arrived by a link | SEO / IA-owned, `<title>` | - |
| `index-deep-link` | Held through your provider’s sign in and restored on the way back, so a case paged at 03:00 costs one sign in rather than a search. Nothing about the case is shown until then, and the id names no client. | provenance line | - |
| `index-deep-link` | Next | button | index-expired, index-signed-out, index |
| `index-deep-link` | No password here. Your email decides which provider signs you in. | field hint | index-expired, index-signed-out, index |
| `index-deep-link` | You followed a link to case C-4417. The link worked. It needs you signed in first. | banner, state message | - |
| `index-deep-link` | You land on /case/C-4417 | p | - |
| `index-expired` | Harrier · Sign in, session ended | SEO / IA-owned, `<title>` | - |
| `index-expired` | Held through the sign in. An interruption does not clear where you were; signing out would have. | provenance line | - |
| `index-expired` | You land back on /case/C-4417 | p | - |
| `index-expired` | Your session ended. You will come back to where you were. / It ended after a stretch without activity, never on a clock, and never while a verdict was unfiled. A verdict you had written and not filed is still held on this device. | banner, state message | - |
| `index-expired` | r.idrissi@example.com | prefilled value, fixture instance | index-idp-error |
| `index-idp-error` | Harrier · Sign in, provider error | SEO / IA-owned, `<title>` | - |
| `index-idp-error` | Still held. It survived the failure, so a retry goes to the case rather than starting you at the queue. | provenance line | - |
| `index-idp-error` | Try again | button | - |
| `index-idp-error` | Use a different email | button | - |
| `index-idp-error` | You still land on /case/C-4417 | p | - |
| `index-idp-error` | Your email is the one you came back with. Nothing about it needs changing. | field hint | - |
| `index-idp-error` | Your provider’s sign in did not finish. Their identity service returned an error on the way back. / It is not your password. Nothing about your account changed. Trying again is the right next step. If it fails again the fault is at your provider and Harrier cannot clear it from here. | banner, state message | - |
| `index-signed-out` | Harrier · Sign in, signed out | SEO / IA-owned, `<title>` | - |
| `index-signed-out` | You signed out. Where you were has been cleared, because leaving was a decision rather than an interruption. Signing in again starts at the queue. | banner, state message | - |

### 8.1 Not found (8 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `not-found` | /case/C-4419 Copy | not found, the address | - |
| `not-found` | A case id that did not resolve here is still worth two looks. Search the queue if it is open, or Open the log if it was ruled on and closed. | not found, the exits | - |
| `not-found` | Harrier has nothing to show at this address. That is all this page can tell you, and it is all it tells anyone who opens it. | not found, what it says | - |
| `not-found` | Harrier · Not found | SEO / IA-owned, `<title>` | - |
| `not-found` | Not found | SEO / IA-owned, H1 | - |
| `not-found` | Shown so you can send it back to whoever sent it. A case id carries no tenant and no date , which is what makes it safe to print on a page that can be reached without signing in. | not found, why it says only that | - |
| `not-found` | The address you asked for | heading | - |
| `not-found` | Three different situations render this exact page. An address that never existed, a record outside what this console covers, and a record this account does not open. The words do not change between them and neither does the title in the tab, because a page that changed would let anyone holding a list of ids work out which clients another provider holds. Which of the three you are looking at is not something this page will say. A record that resolved and then aged out of retention is a different page, and that one can name the window it fell outside. This one cannot name anything at all. | not found, why it says only that | - |

### 8.2 Service unavailable (32 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `unavailable` | Estimate No estimate Your provider’s service delivery owns this line. Harrier will not fill it with a plausible one while waiting. | outage fact | - |
| `unavailable` | Harrier is unavailable Unplanned · every screen, every tenant · it is not your connection | SEO / IA-owned, H1 | - |
| `unavailable` | Harrier · Service unavailable, unplanned | SEO / IA-owned, `<title>` | - |
| `unavailable` | No verdict can be filed until this is over. There is no console to file from, so a decision you reach in the next few minutes exists only in your head. A degraded connection does not block a decision and still records the snapshot you saw. This is not that. | banner, state message | - |
| `unavailable` | The provider’s declared fallback, and the same one an escalation reaches for when nobody is on the rota. One configuration value, two places it shows up. | outage, what to do instead | - |
| `unavailable` | This page is all that answered. The console is not running. | outage shell note | - |
| `unavailable` | Unreachable for 4m The same duration language the connection strip uses, for the same question. Four minutes in is a different situation from four seconds in. | outage fact | - |
| `unavailable` | What is down The whole console. Every screen and every tenant. Not the connection dropping and not Clerk stopping: both of those leave the console up, and the strip under the top bar says which one you have. | outage fact | - |
| `unavailable-partial` | A verdict filed now will not be recorded. You can open a case and rule on it, and the write will fail. The decision is then held on this machine, marked unrecorded , and you are the only person who can see it until the log is back. Same state a single failed write produces, except that here it is certain rather than possible. | banner, state message | - |
| `unavailable-partial` | Estimate No estimate Your provider’s service delivery owns this line, and nothing is published yet. | outage fact | - |
| `unavailable-partial` | Harrier · Service unavailable, part of it is down | SEO / IA-owned, `<title>` | - |
| `unavailable-partial` | Shown because the part that is down blocks a decision. If what were unavailable did not touch one, this block would not be on the page and it would tell you to come back later instead. Same value as an escalation with nobody on the rota. | outage, what to do instead | - |
| `unavailable-partial` | Shown here because you are signed in. Whether it is shown to somebody who is not is a disclosure call for the provider rather than for us, and nobody has made it. The page is reachable either way, so the block either appears twice or it appears once, and that is the decision still outstanding. | p.anote | unavailable-planned, unavailable |
| `unavailable-partial` | Tell them the console is not answering and for how long. The clients are still generating signal while this page is up. | outage, what to do instead | unavailable-planned, unavailable |
| `unavailable-partial` | The decision log is unavailable Part of Harrier is down · the queue is live and 18 cases are waiting on a decision | SEO / IA-owned, H1 | - |
| `unavailable-partial` | The number is a value your provider declares. Harrier does not carry one of its own, and a wrong number at 03:00 costs more than no number. | outage, what to do instead | unavailable-planned, unavailable |
| `unavailable-partial` | The service delivery duty line | outage, what to do instead | unavailable-planned, unavailable |
| `unavailable-partial` | Try again Work the queue anyway | div.out-act | - |
| `unavailable-partial` | Two things worth saying on the call: the log is not taking writes, and you are still ruling, so there will be decisions to reconcile. | outage, what to do instead | - |
| `unavailable-partial` | Unavailable for 12m The same duration language the connection strip uses. The strip is not what is wrong here, which is why it still reads Live above and this page is what says otherwise. | outage fact | - |
| `unavailable-partial` | What is down The decision log. Reading past entries and writing new ones. The queue, the case file and the fleet are answering normally. Both halves are named , because “partly unavailable” on its own says nothing about whether to keep working. | outage fact | - |
| `unavailable-partial` | What to do instead | heading | unavailable-planned, unavailable |
| `unavailable-planned` | Harrier | wordmark | unavailable |
| `unavailable-planned` | Harrier is down for planned maintenance Published window 2026-08-22T02:00:00Z to 2026-08-22T04:00:00Z | SEO / IA-owned, H1 | - |
| `unavailable-planned` | Harrier · Service unavailable, planned maintenance | SEO / IA-owned, `<title>` | - |
| `unavailable-planned` | No verdict can be filed inside the window. The same sentence as any other outage, and the only difference is that this one was on a calendar. Anything you decide before it closes goes to the duty line by voice, or it waits. | banner, state message | - |
| `unavailable-planned` | Started On time. No duration here, and that is deliberate. “Unreachable for 58m” is the wrong sentence about something running to plan, and the only number that changes what you do is below. | outage fact | - |
| `unavailable-planned` | The provider’s declared fallback, and the same one an escalation reaches for when nobody is on the rota. Shown during a planned window too: the clients did not agree to the window. | outage, what to do instead | - |
| `unavailable-planned` | This page is all that answered. The console is down to plan. | outage shell note | - |
| `unavailable-planned` | Try again | div.out-act | unavailable |
| `unavailable-planned` | What is down The whole console, by plan. Every screen and every tenant, for the length of the published window. Nothing is broken. | outage fact | - |
| `unavailable-planned` | Window closes 2026-08-22T04:00:00Z The provider’s published window, not an estimate Harrier made. UTC, because you carry tenants in the United States and the EU and a local rendering makes two people disagree about when this ends. | outage fact | - |

### 0.5 Keyboard map (50 strings)

| Page | String | Type | Also on |
|---|---|---|---|
| `keyboard` | 1 to 6 Pick what Clerk got wrong. One selection, one key. shown on: each reason row, 4.4 the reject dialog has focus and no text field does · SC 2.1.4 | key row | - |
| `keyboard` | ? Opens this map from anywhere. The map is found from the control in Z1; the key is for people who already know it is here. shown on: nowhere yet , and 0.2 puts the trigger in Z1 no text field has focus · SC 2.1.4 | key row | - |
| `keyboard` | All single character shortcuts | accessible name | - |
| `keyboard` | Arrows, Home, End, Enter, Escape and Tab are not in this control. The criterion covers letter, punctuation, number and symbol keys, and none of those is one. | note under a block | - |
| `keyboard` | Ctrl + Home Ctrl + End First and last row of the whole list. shown on: nowhere yet the list has focus | key row | - |
| `keyboard` | Enter Files the rejection, and only once a reason is chosen. shown on: the Reject and tune button, 4.4 the reject dialog, outside the note field | key row | - |
| `keyboard` | Enter Makes a line. It does not file. The button files. shown on: the footer note, 4.6 the escalate dialog, inside a prompt | key row | - |
| `keyboard` | Enter Moves focus into the pane. Arrows read, Enter decides, and that is what arms the three keys below. shown on: the list foot, 3.1 the list has focus | key row | - |
| `keyboard` | Enter is not the same key in 4.4 and 4.6, and that was chosen. In reject the input is a selection, so Enter completes it. In escalate the input is prose, and Enter inside prose has to make a line. Making the two agree would break one of them, and the one it would break is the handover written at 03:00. It is listed here rather than smoothed away, because a person who learns one and is surprised by the other is owed the reason. | banner, state message | - |
| `keyboard` | Escalate shortcut | accessible name | - |
| `keyboard` | Escape Closes it. Nothing behind it changed and the selection is where you left it. shown on: the Close control below the map has focus | key row | - |
| `keyboard` | Escape Closes the dialog and does not go any further . One press closes, a second press deselects, so dismissing a dialog never costs you the case you had open. shown on: the Cancel control on 4.4, 4.5 and 4.6 a dialog is open | key row | - |
| `keyboard` | Escape Deselects the case and returns the pane to the fleet. shown on: nowhere yet the list or the pane has focus, and no dialog is open | key row | - |
| `keyboard` | Escape carries two meanings and this map says both, because the collision is real: the dialog pattern claims it and 0.1 already had it. | note under a block | - |
| `keyboard` | Every key below is inert right now. The map holds focus, the screen behind it is inert while it is open, and Escape closes the map without touching the case you had selected. | banner, state message | - |
| `keyboard` | Every single character shortcut a m r e 1 to 6 ? | keyboard control | - |
| `keyboard` | Grouped by what the key does, not by which key it is. Every row says when the key is live , because a key that fires while you are typing a rejection reason is a trap rather than a shortcut. | sub-heading | - |
| `keyboard` | Harrier · Keyboard map | SEO / IA-owned, `<title>` | - |
| `keyboard` | Home End First and last row in view. shown on: nowhere yet the list has focus | key row | - |
| `keyboard` | Keyboard map | heading | - |
| `keyboard` | Keyboard map shortcut | accessible name | - |
| `keyboard` | Leave the case open | heading | - |
| `keyboard` | Leave the case open e | keyboard control | - |
| `keyboard` | Live only while a case is in the pane. With the fleet at rest there is no case, so all of these are dead. That is the third route through SC 2.1.4 and it is what makes the set legal at all. | note under a block | - |
| `keyboard` | Move in the list | heading | - |
| `keyboard` | None of these is a letter, a number or a symbol, so SC 2.1.4 does not reach them and they are not in the control at the foot of this map. | note under a block | - |
| `keyboard` | Nothing here rules on a case. The control that turns these keys off, or makes them need a modifier, is at the foot of the list. Close Esc | footer | - |
| `keyboard` | Off | select option | - |
| `keyboard` | On, but it needs Ctrl | select option | - |
| `keyboard` | On, the letter alone | select option | - |
| `keyboard` | Open and close | heading | - |
| `keyboard` | Rule on the case | heading | - |
| `keyboard` | Rule on the case a m r 1 to 6 | keyboard control | - |
| `keyboard` | Rule on the case shortcuts | accessible name | - |
| `keyboard` | SC 2.1.4 is Level A and it asks for one of three things. The focus rule on every row above is the first. This is the second, and it is here because without it a speech user has no way to stop a meaning accept while the pane is focused, which is the exact person the criterion was written for. | note under a block | - |
| `keyboard` | Sections | heading | - |
| `keyboard` | Tab Shift + Tab Cycles through this map and wraps at either end. Nothing outside it is reachable while it is open. shown on: nowhere, and Tab is not a shortcut the map has focus | key row | - |
| `keyboard` | There is no keyboard here, so there is no map. The keyboard map is a desk surface and its trigger is dropped at this width rather than moved. On a phone the exits are accept and escalate, and both are buttons. | banner, state message | - |
| `keyboard` | This control sits in the map while the map is the only place keys are listed. Where it belongs once there is a settings surface is open , and it is the same missing surface 0.6, 0.7 and 0.8 already point at. | note under a block | - |
| `keyboard` | This map | heading | - |
| `keyboard` | This map ? | keyboard control | - |
| `keyboard` | Turn them off, or make them need a modifier | heading | - |
| `keyboard` | Whole set and per group, never per key. Forty two nodes of surface and a bespoke keymap is a support burden with no job behind it. | note under a block | - |
| `keyboard` | a Accept Clerk’s verdict as filed. shown on: the Accept control, 4.1 a case is in the pane · SC 2.1.4 | key row | - |
| `keyboard` | e Escalate to the person on the rota, 4.6. Also the only live control on a case whose evidence has aged out, 4.7. shown on: the Escalate control, 4.1 a case is in the pane · SC 2.1.4 | key row | - |
| `keyboard` | m Amend the narrative in place, 4.5. Once the field has focus, letters are letters. shown on: the Amend control, 4.1 a case is in the pane · SC 2.1.4 | key row | - |
| `keyboard` | none Queue, Shift and Log. 0.2 gives each a destination and binds no key to any of them, so there is nothing to press. Listed so the absence is a decision you can see rather than a line somebody forgot. shown on: the navigation in Z1, as a click always, and it is a pointer | key row | - |
| `keyboard` | r Reject and say what Clerk got wrong, 4.4. shown on: the Reject control, 4.1 a case is in the pane · SC 2.1.4 | key row | - |
| `keyboard` | shown on names the control that teaches the key. Principle 3 says the control teaches and this map is only the lookup, so a row reading nowhere yet is the map covering for a control that never printed its own key. Four rows read that way. Each one is a defect in that control, not in this list. | note under a block | - |
| `keyboard` | ↑ ↓ Move the selection. The pane follows, so reading costs nothing. shown on: the list foot, 3.1 the list has focus | key row | - |

---

## 5. Fixtures: the canon, and this stage does not rewrite it

Marked `fixture instance` above. The canon is `ia/docs/pages/reading-conventions.md` §7, and the standing of every one of them is set there in one sentence: *"Numbers in a wireframe are fixtures, not findings. They are sample content, chosen to make a layout decidable, and none of them is a measurement."*

| Class | The set | Where it is decided |
|---|---|---|
| Tenants | Larkfield Logistics, Bramber Retail, Meridian Health, Norsk Marine, Halcyon Care, Halden Freight, Aubrey Dental Group. **Seven, and no others** | 0.8 §7 |
| The canonical case | `C-4417` at Larkfield Logistics. Also `C-4482`, `C-3180`, `C-0441`, `C-4419` for the states that need a second | 0.8 §7 |
| People | R. Idrissi, D. Okonkwo, S. Varga | 0.8 §7 |
| Signal titles | Token replay from a new ASN, Ransomware precursor on FS-02, Sign in from an unseen device, Impossible travel two offices, Beaconing to a new domain, Mass mailbox rule creation, Mass file rename on one host, Credential stuffing on the VPN, Beaconing from a bridge workstation | 0.8 |
| Counts, ages, timestamps | `18 waiting`, `9 signals`, `6 sources`, `27m`, `2026-08-22T04:14:05Z`, `31 of 36`, and the rest | 0.8 §§3, 4, 5 |
| Clerk's narrative and its evidence claims | `What happened`, `What Clerk concluded`, the claim lines and their sources | The **grammar** is voice's business and lands in `voice.md`. The instance is a fixture |
| Analyst prose in a note field | The handover notes, the rejection note, the amendment wording | Written by a person. The nearest thing this product has to user content, and it is not rewritten |

**A rule of voice can bind a fixture's grammar without touching the fixture.** "A number names its claim, its scope and its window, and comes with an absolute count" is principle 2 of the project, and `6 sources queried over 24h` obeys it while `92% confidence` would not. That rule is written at step 4; the numbers stay as drawn.

---

## 6. Divergences, marked and not fixed

Step 1 marks. Step 3 decides the dictionary, step 4 decides the microcopy rules, steps 6 and 7 rewrite. Nothing below has been changed.

### 6a. The same thing under two names

| # | The thing | What is written | Where |
|---|---|---|---|
| **D1** | The client organisation | `tenant` **409** occurrences against `client` **98**. The queue column header is `Client`, the fleet column header is `Tenant`, the scope chip is `All tenants`, the H1 is `across 12 of 40 tenants in scope`, the pane heading is `Normal at this client` and the reject option three rows away is `Normal at this tenant` | Everywhere. The two words sit on one screen |
| **D2** | Upholding Clerk | `Accept a` the control, `Accepted by R. Idrissi, 4s ago` the banner, `Upheld by R. Idrissi` and `Upheld by D. Okonkwo` the log record. Three words for one act | 4.1, 3.1, 5.1, 5.6 |
| **D3** | Committing a rejection | `Reject r` the control, `Reject and tune Enter` the commit button, `Rejected by D. Okonkwo` the record. The commit button names the routing; `Accept a` and `Amend m` do not | 4.1, 4.4, 5.1 |
| **D4** | The commit verb | `File the amendment`, `Reject and tune`, `Escalate to S. Varga`, `Seal the brief`, `Search without the actor`, `Try again`. Six commit buttons, no rule shared between them | 4.5, 4.4, 4.6, 2.1, 5.3, 8.2 |
| **D5** | Retrying | `Try again` on five screens, `Try to reconnect` on two, `Retrying` in a banner, `Second attempt` as a footer hint | 8.2, 1.1, 4.4, 4.6, 4.1, 3.3, 4.2 |
| **D6** | Going back to the queue | `Open the queue`, `Back to the queue`, `Work the queue anyway`, `Start on the queue`, `open the queue →`, `Search the queue`, `Widen the scope to all tenants` | 4.2, 4.1, 8.2, 2.1, 3.1, 8.1, 3.4 |
| **D7** | Going to the log | `Open the log`, `Back to the log`, `Back to the list`, `The whole log`, `Back to this entry in the log`, `Open the log entry`, `The log entry, with the evidence as it stood` | 4.1, 5.4, 5.1, 3.1 |
| **D8** | Not losing an unwritten decision | `Hold it locally` on two screens, `Leave it open and go` on one, `Leave the case open` on one | 4.9, 4.4, 2.5, 0.5 |
| **D9** | Freshness | `frozen at the last sync`, `as of the last sync`, `Marked as of the last sync.`, `Frozen as of the last sync`, `Frozen 40s ago`, `as of 40s ago`, `frozen at the attempt`, `frozen at the seal`. 0.8 §4 declares two grammars of **time**. Whether it declares two of **freshness** is the question step 3 has to answer | 3.1, 3.3, 4.2, 2.5 |

### 6a bis. The element that carries the differentiator says two different things

**D14.** 0.3, the tenant autonomy annunciator, is the one element `CLAUDE.md` binds stage 04 and stage 07 to carry, and its fleet reading exists in two versions that were never reconciled:

| Version | String | Where |
|---|---|---|
| The default in `_nav.js` | `40 tenants` · `acts alone up to contain network at 3` · `1 moved down` | 19 screens |
| The override on 5.1, 5.6 and 2.1 | `40 TENANTS` · `7 of 40 act alone above investigate` · `219 of 231 upheld, 30 days` | 5 screens |

They do not say the same thing, and neither is wrong: one names the **ceiling** the fleet reaches and how many moved, the other names how many tenants sit **above a floor** and the aggregate record. Two sentences that answer two different questions in one fixed slot means the analyst learns to read whichever she saw first. A decision, not a typo, and it belongs to step 3.

### 6a ter. A fifteenth, found at step 6 by the reference screen rather than by the inventory

**D15. `record` carries three senses and one of them has no possessive to lean on.**

| Sense | Where | Disambiguated by |
|---|---|---|
| What the log holds | `the record`, `A record of what was known then` | `the` |
| Clerk's track record on a tenant | The fleet's third column header, `Record`. Also `CLAUDE.md`: "where the agent's record has earned latitude" | **Nothing.** A bare column header has no article |
| One verdict as a document | `The verdict record above is kept for the life of the record` | Nothing, and this sentence uses the word twice for two things |

The two prose senses survive, because English separates `the record` from `its record` without help. The bare column header does not, so it becomes **`Accepted`**, which is what the pair underneath it counts.

**Why the inventory missed it and the reference screen did not.** The inventory compares strings to strings, and `Record` collides with nothing: it is the only occurrence of that exact string. The collision is between a **word** and its **senses**, and it is only visible when the column header and the annunciator are in the same eye at the same time, which is what opening the screen does.

### 6b. A closed taxonomy that is not closed on screen

**D10.** 0.8 §6 closes the state chip set at six values: `unrecorded`, `taken`, `escalated`, `decided`, `acted`, `investigating`. The log and the case history also render `upheld`, `rejected`, `amended`, `superseded`, `Clerk filed a verdict`, `Clerk opened the case` and `Clerk acted alone`. That is either a second declared taxonomy for 5.1 and 5.6 or a break in the closed set. **It is fixed upward in `ia/docs/pages/reading-conventions.md`, not in a screen**, and this stage does not settle it alone.

### 6c. The register that was supposed to be separated, and leaked anyway

**D11.** IA node numbers are printed in product copy **outside** `.anote`: **33 occurrences across 14 files**. `4.6` in the amend hint, `0.4` on 4.2, `5.1` on 5.4, `0.7` on three log entry states, `4.7` in the escalate consequence, `4.2` on all six reject states, and 20 in the keyboard map, which is a real product screen. Plus `· 0.4` appended by `_nav.js` to the connection strip on all 45 authenticated screens.

This is the exact register `.anote` was created to hold: a sentence addressed to a reviewer, in a slot the analyst reads. Stage 04 caught it in the notes and did not sweep the prose. Counted by grep against the node numbering, which is the one instrument that beats a model at this.

### 6d. The reader is addressed in two persons

**D12.** Product copy says `you` almost everywhere. Two strings say `her` and `she` about the person reading them:

- `order: unrecorded, blocked on her, severity, age`, the queue foot, on **31 screens**
- `a number that settles later without saying it was provisional is a number she acted on`, `queue-streaming`

The first is the more expensive: it is in the fixed foot of the main screen of the product.

### 6e. A convention, recorded so nothing drops it

**D13.** The key rides inside the label, after the words: `Accept a`, `Amend m`, `Reject r`, `Escalate e`, `Cancel Esc`, `Next case ]`, `Seal the brief Enter`, `Reject and tune Enter`, `Try again Enter`, `Open the newest entry Enter`, `Start on the queue Enter`, `Open at its own address Enter`, `Search without the actor Enter`. This is principle 3 of the project working, the control teaching its own key, and `keyboard.html` names four controls that fail to. It is not a divergence and it is written down here so step 7 does not rewrite it away.

### 6f. What the grep found nothing of, and what it actually compared

Run over all 62 product pages with `.anote` and `<style>`/`<script>` stripped, on visible text:

| Looked for | Found |
|---|---|
| Exclamation marks | **0** |
| `successfully`, `success` as an adverb | **0** |
| `Oops`, `Sorry`, `Welcome`, `Please`, `Congratulations`, `Awesome` | **0** |
| Emoji, U+2600 to U+27BF and U+1F300 to U+1FAFF | **0** |
| `we`, `our`, `us` as the product speaking about itself | **0** |
| Placeholder or lorem text | **0** |
| `the agent` used instead of `Clerk` | **0** in product text. 3 occurrences, all in `overview.html`, which is out of scope |

**This is a clean result from an instrument that did find things elsewhere**, so it is a measurement rather than an untested run: the same pass produced D11's 33 node references and D12's two third-person strings. Stage 04 wrote disciplined copy, and the banned list at step 3 exists to keep the model's defaults out of the rewrite rather than to clean up after stage 04.

---

## 7. Was and became

Step 6, the reference screen. **3.1 Case Queue and its eleven state pages**, taken from the top line of `wireframes/docs/screens.md` rather than re-derived. Step 7 fills the rest.

### What changed, and under which rule

| # | Was | Became | Rule | Files |
|---|---|---|---|---|
| 1 | order: unrecorded, **blocked on her**, severity, age | order: unrecorded, **waiting on you**, severity, age | Principle 1, and it was the most expensive counterexample in the product | 12 |
| 2 | `Client`, queue column header | `Tenant` | D1 | 10 |
| 3 | `What Clerk concluded`, queue column header | **`The verdict`** | D2, and see the correction below | 10 |
| 4 | `Record`, fleet column header | **`Accepted`** | D15, new at this step | 10 |
| 5 | 7 of 18 shown, **virtualised** | 7 of 18 shown | Never §6. `virtualised` is an engineering word in a product slot, the same register as a node number | 1 |
| 6 | 7 of 18 shown, **frozen at** the last sync | 7 of 18 shown, **as of** the last sync | Freshness, grammar 1 | 1 |
| 7 | 40 tenants, nothing selected. **Frozen as of** the last sync | 40 tenants, nothing selected. **As of** the last sync | Freshness, grammar 1 | 1 |
| 8 | 33 more · **frozen as of** the last sync | 33 more · **as of** the last sync | Freshness, grammar 1 | 1 |
| 9 | **Try to reconnect** | **Reconnect** | D5. The connection is what is retried, not her last action | 1 |
| 10 | 40 tenants, nothing selected. **Frozen 40s ago** | 40 tenants, nothing selected. **As of 40s ago** | Freshness, grammar 1 | 1 |
| 11 | 33 more · frozen **as of the last sync**, on `queue-reconnecting` | 33 more · **as of 40s ago** | Freshness, **and it disagreed with the pane heading directly above it**. Reconnecting is not stale | 1 |
| 12 | The count above is provisional and says so, **because a number that settles later without saying it was provisional is a number she acted on** | The count above is provisional and says so. | Principle 1 and Never §6. The clause argued for the design, to a reviewer, in the third person about the reader | 1 |
| 13 | 34 of 36 **upheld**, 30 days | 34 of 36 **accepted**, 30 days | D2 | 2 |
| 14 | `OVRD` human decided | `DECIDED` by you | D14, no invented abbreviation, plus Principle 1. **And it is the layout case, see below** | 1 |
| 15 | Clerk **concluded** real, contain identity | Clerk **filed** real, contain identity | D2. `conclude` retires | 1 |
| 16 | Clerk's **conclusion** stands unruled | Clerk's **verdict** stands unruled | D2 | 1 |
| 17 | The pane on the right is the fleet, which is where this screen rests. | *cut* | **False at 360**, and design commentary at 1440. See below | 1 |
| 18 | 40 tenants. **This is the resting state of the pane, and it is what an empty queue looks like** | 40 tenants, nothing selected. Ordered by where attention is owed | Never §6, and it undercut the decision it described | 1 |
| 19 | nothing waiting, **and the fleet holds the pane** | nothing waiting | Same as 17. The fleet is not rendered at 360 | 1 |
| 20 | `↑ ↓ read, the pane follows` and `Enter decides, focus moves into the pane`, rendered at every width | Both `only-desk` | **False at 360 twice over**: no keyboard, no pane. Fixed upward in `ia/docs/pages/case-queue.md` §8 first | 12 |

### The three findings only the screen could produce

**A. A string that is true at the desk and false in the one scenario 360 exists for.** Rows 17, 19 and 20. `The pane on the right is the fleet` and `the fleet holds the pane` point at nothing on a phone, where the pane is `display:none` by 3.1's own specification. And the two key hints promise a keyboard and a pane, neither of which is there.

**This is the class 360 was proved for, and it survived stage 04 intact** because the strings are impeccable at 1440 and a table of them looks perfect. Row 20 needed a fix upward: §8 of the node named what the row, the pane and the scope bar do at 360 and said nothing about the list foot, so stage 04 rendered it whole. The node now names it.

**B. A string that broke the layout, cured by shortening the text.** Row 14. `OVRD human decided` became `DECIDED by you, 4s ago` on the first pass, which is four characters longer, and `R. Idrissi` wrapped onto two lines in the top bar. `4s ago` is already in the banner two lines below, so Principle 2 removes it and the name is back on one line. **Provable only in a browser**: in this table both versions look fine.

**C. A header that was already false before this stage touched it.** Row 3. `What Clerk concluded` sits above a first row reading `Rejected by R. Idrissi`, which is not what Clerk concluded. The column carries Clerk's verdict while a case is unruled and the human's ruling once it is ruled, and the cell always says whose. The header stops attributing.

### One gap found and deliberately not fixed

§8 of `case-queue.md` says the scope bar **collapses to a single control carrying the count of active filters** at 360. It still renders all three chips. That is a stage 04 implementation gap rather than a text defect, and collapsing three controls into one is layout work rather than a class attribute. It is written into the node and carried into `voice/docs/critique.md` so it is not lost when `wireframes/` freezes after this stage.

### One measurement, and what it actually compared

All twelve pages at a **true 360**, asserted rather than intended: `document.documentElement.clientWidth === 360` and `scrollWidth === clientWidth`. All twelve pass. One page, `queue-clerk-down`, overflows by 14px at **341**, which is below the declared minimum of 360 and is therefore recorded rather than fixed.

### Read aloud, and what it caught

Every heading and every button on all twelve pages, said out loud. **It caught nothing the browser had not already caught**, which is worth writing down: the corpus stage 04 produced has no bureaucratic register in it. One phrase was tested and kept: `Ordered by where attention is owed` is formal but sayable, and rewriting a precise passive into a vaguer active would have been a loss.

### Still on the reference screen, and deferred to step 7 by design

`· 0.4`, appended by `wireframes/_nav.js` to the connection strip on all 55 authenticated screens, and the accessible name `Tenant autonomy`. Both are global strings, both live in `_nav.js`, and step 7 rewrites globals in the parent before any fan-out. They are named here so the acceptance is not read as complete.

---

## 8. Step 7, first move: the globals, rewritten by the parent

Nothing was fanned out before this table existed. A global is a string on five screens or more, which is the definition section 3 is built on, and a wrong one costs fifty-five screens rather than one. Every row below was applied by the parent, in the file the `Lives in` column names.

### 8a. The three that live in `wireframes/_nav.js`

| # | Was | Became | Rule | Screens |
|---|---|---|---|---|
| G1 | `aria-label="Tenant autonomy"` | **`Clerk’s latitude on this tenant`** with a tenant selected, **`Clerk’s latitude across the fleet`** with none | Dictionary, **latitude**. A screen reader was getting a word the screen does not use. And see the correction below: the element has two readings, so one fixed name is false in one of them | 55 |
| G2 | `title="Keyboard map, 0.5"` | `title="Keyboard map"` | Never §6, D11 | 55 |
| G3 | connection strip ends `· 0.4` | *cut* | Never §6, D11. **This was the single most repeated register leak in the product**: one line of `_nav.js`, printed on every authenticated screen | 55 |

### 8b. The annunciator, passed from inline scripts

| # | Was | Became | Rule | Call sites |
|---|---|---|---|---|
| G4 | `34 of 36 upheld, 30 days` and `219 of 231 upheld, 30 days` | `accepted` | Dictionary, **accept**. D2 | 33 |
| G5 | `40 TENANTS · 7 of 40 act alone above investigate · 219 of 231 accepted, 30 days` | *the override is removed and the shell default renders*: `FLEET · 40 tenants · acts alone up to contain network at 3 · 1 moved down` | D14. A fixed slot answers one question, and the ruling is in `voice.md` | 5 |
| G6 | `OVRD` human decided | `DECIDED` by you | D14, no invented abbreviation. Plus Principle 1 | 2 |

`ACTED 24m` stays. It is a word rather than a coinage, and the analyst reads it without being taught.

### 8c. The eleven that are inlined on the screens

| # | Was | Became | Rule | Files |
|---|---|---|---|---|
| G7 | `Client`, column header | `Tenant` | Dictionary, **tenant**. D1 | 29 |
| G8 | `Normal at this client` | `Normal at this tenant` | Same, and it sat three rows from `Normal at this tenant` in the reject list | 25 |
| G9 | `What Clerk concluded`, block `h3` | `What Clerk filed` | Dictionary, **verdict**, and the `h3` rule: a question the block answers | 20 |
| G10 | `What Clerk concluded`, column header | `The verdict` | The same word, **a different slot and therefore a different answer**. The column header rule forbids a header attributing what the cell attributes | 19 |
| G11 | order: unrecorded, **blocked on her**, severity, age | order: unrecorded, **waiting on you**, severity, age | Principle 1, D12 | 19 |
| G12 | `Record`, fleet column header | `Accepted` | D15 | 6 |
| G13 | `↑ ↓ read, the pane follows` and `Enter decides, focus moves into the pane`, rendered at every width | both `only-desk` | False at 360: no keyboard, no pane. **Applied everywhere the string exists, not only where the foot is visible today**, because a class on the string survives a later stage moving the block and an ancestor that happens to be hidden does not | 26 and 19 |
| G14 | `Back to the queue` | `Open the queue` | The new ruling below | 10 |
| G15 | log banner: *"Seven columns of record squeezed onto a phone would be a second console pretending to be this one."* | *cut* | Never §6, an argument for the design in a product slot | 7 |
| G16 | brief banner: *"which is the premise the whole product is drawn from"* and *"from the rota this node holds, and it reads that value without this page rendering"* | *"Coming on shift happens at a desk with two monitors."* and *"the escalate dialog names S. Varga, who takes escalations until 07:00. That comes from the rota, not from this screen."* | Never §6 twice: the design argument, and `node` / `rendering` addressed to whoever builds this | 7 |
| G17 | reject banner: *"the six reasons"*, and *"4.2 settles that a case known to be benign cannot be closed from there either"* | *"the reasons"*, and *"a case you know to be benign cannot be closed from here either"* | Principle 3 and Never §6. **The screen has seven numbered rows**, six reasons and `Other`; a bare `six` names neither set. The count is dropped rather than corrected, because the sentence never needed one | 6 |

### Two corrections this pass made to `voice.md` rather than to a line

**1. A ruling that step 3 never wrote.** D6 and D7 found seven wordings for going to the queue and seven for going to the log, and the dictionary ruled neither: **it ruled words, and this is a shape.** The rule now in `voice.md`, under the rulings: `Open <the destination>` for any control that moves her to another screen, and `Back to <X>` only for a return the product can guarantee, which means a sub-view or a dialog opened from X in this session. Every top-level screen here is reachable from a pager link, so `Back to the queue` is a claim about where she came from that the product does not hold.

**2. An accessible name that follows the state, because the element does.** G1 was written from `voice.md`'s own example, applied, and then read back on `log.html`, where the annunciator says `FLEET · 40 tenants`. The name said `on this tenant` over a reading about forty. The microcopy rule gains the clause **and it follows the state if the element does**, and the shell picks the name from the reading it is about to render. **A sighted reader never had this problem**, because the lead word says which reading it is; the fixed name was the only place the two collapsed.

### What the global pass deliberately did not touch

**The stage panel and the registry labels in `_nav.js`**, including `Tenant autonomy annunciator`, `Reconnecting, 0.4` and every screen label. `_nav.js` says it in its own comment: *"The panel is the STAGE's chrome, not the product's."* It is the same register as `.anote` and section 2 already puts that out of scope. Reading the registry as product copy would have rewritten the prototype's own navigation into the product's voice, which is the opposite of the separation stage 04 built.

### 8d. Strings that never existed before, and why this subsection had to be added

**Every table in section 8 has a `Was` column, and a string written for a screen that did not exist has nothing to put in it.** `handoff/docs/one-shot.md` sends a new feature here to record its strings *"with its page and its zone, which is how a string is addressed in this project"*, and the shape it asks for is not the shape the section has. Rather than leave a `Was` column reading `&ndash;` on every row, new strings take a table of their own: **string, page, zone, and the rule that decided it.** The addressing is the same one section 8 uses, so nothing about how a string is found has changed.

**Node 7.1, Tenant detail. Four pages: `tenant`, `tenant-moved-down`, `tenant-no-record`, `tenant-stale`.** Only strings new to the product are listed. Everything this node draws that already stands elsewhere was taken from the built coloured screen, which is the applied text, and is not re-recorded: the queue rows, the fleet's counts, `Normal at this tenant`, `No baseline for this tenant yet`, the latitude ladder's `above this tenant's latitude` and the order line in the foot all came across unchanged.

| String | Page | Zone | Rule |
|---|---|---|---|
| `1 waiting` + `at <tenant>, and 36 ruled in the 30 days the record covers` | all four | Z4 readout | Principle 3. Count first, and the readout names its scope and its window rather than a bare total. On `tenant-no-record` the second half becomes `and nothing ruled yet at this tenant`, which is Principle 4: say what is true, including what there is none of |
| `1 waiting at this tenant` | all four | Z4 qfoot | Principle 3. On `tenant-stale` it gains `, as of the last sync`, which is the freshness ruling: `as of <time>` when the reading is still the best one available and only time has passed |
| `&uarr; &darr; read` and `Enter opens the case` | all four | Z4 qfoot | **Not** the queue's `read, the pane follows` and `decides, focus moves into the pane`. Here the pane holds a tenant record rather than a case, so the selection does not move it. That is the class `voice.md` names as true on one screen and false on another, and the cure is the string rather than the class |
| `Mid market logistics &middot; in your scope &middot; acts alone up to contain endpoint` | all four | Z5 pane head `sub` | Dictionary, **latitude** and **tenant**. The shape is 0.6's two axes: the class, then the level, in the vocabulary every other surface uses |
| `Accepted` / `The 30 days before that` / `What the count is of` | all four | Z5 `covers` labels | D15 already ruled the fleet's column header from `Record` to `Accepted`, and this label is the same claim in a wider slot. The third is Principle 3: a count that does not say what it excludes has an unstated scope |
| `34 of 36 of Clerk's verdicts, over the 30 days to 2026-08-22` | `tenant` | Z5 `covers` value | Principle 3, and the fleet's own `34 of 36` is the same number in its one line form. Never a percentage |
| `No rulings yet.` and `Too few to compare.` | `tenant-no-record` | Z5 `covers` value | Taken from the fleet, where both already stand inside `was`. Principle 4: a trend drawn from nothing would read as a trend |
| `This latitude stands on no record at this tenant.` | `tenant-no-record` | Z5 `gnote` | 3.5 section 7 calls this the state that most deserves attention, and it renders as a sentence rather than as a warning colour. Principle 4. **It read `This ceiling stands on` until the word was withdrawn:** `ceiling` is a synonym of the one invented noun this product allows, and the dictionary bans the synonyms. It survives on these screens as a css class, which is where the rest of the corpus keeps it |
| `Latitude is read here and it is not set here.` | all four | Z5 `gnote` | 3.5 section 4: readable, not settable. Principle 4 again, and **a disabled control was the alternative and was refused**, because 7.2 does not exist to be disabled. Dictionary, **latitude**, for the same reason as the row above. On `tenant` and `tenant-moved-down` it is followed by the provider sentence, and that sentence lost its opening clause, `Changing what Clerk may do at a tenant is not built yet,`: a roadmap belongs in the provider's surface and not in hers, and what she needs from the sentence is where the change goes, which is what is left. `tenant-no-record` and `tenant-stale` each qualify it with a sentence of their own instead |
| `Every change to Clerk's latitude is an entry.` | `tenant`, `tenant-no-record`, `tenant-stale` | Z5 `gnote` under `How this latitude changed` | 3.5 section 9 puts the grant history in 5.1. Dictionary, **entry**: one row of the log, never `record`. It read `Every change to a ceiling` until the word was withdrawn, and the possessive is what the article had to become: latitude takes no article, and it is always somebody's. **The page column said `all four` and it was wrong when it was written:** `tenant-moved-down` has never carried this sentence. Its slot under that heading is `Two rulings went against Clerk here, and the latitude followed them.`, and a screen whose subject is a movement does not also need telling that a movement is logged |
| `Down, this shift, from contain endpoint to investigate.` | `tenant-moved-down` | Z5 `nar` | Taken from `shift.html`, which already says it in the brief. One fact, one wording |
| `Two rulings went against Clerk here, and the latitude followed them.` | `tenant-moved-down` | Z5 `gnote` | Principle 4, and Principle 5: `Clerk`, no article. It says what the machine's record cost it. `the ceiling followed them` until the word was withdrawn |
| `This whole reading is 6m old.` | `tenant-stale` | Z5 banner | The freshness ruling, and node 3.3. `6m` is the elapsed grammar of 0.8 section 4, bare unit and one unit, and it matches the connection strip the shell renders above it |
| `You can still decide on what is here.` | `tenant-stale` | Z5 banner | Node 0.4 and `behaviour.md`: filing on a degraded connection is allowed, and the screen has to say so or she assumes it is not |
| `Assets offline for 6h is normal here` | `tenant-stale` | Z5 `nar` | Taken from `shift.html`, which already says it about Norsk Marine. Principle 4: silence is not evidence, and the sentence refuses to read it as any |
| `Open the log at this tenant` | all four | Z5 pane foot | The `Open <the destination>` ruling. Never `Back to`, because every screen here is reachable from a pager link. **It stood beside `Open the queue at this tenant` and now stands alone:** that control was the foot's primary and it pointed at the unnarrowed queue, while the left half of this screen already is the queue at this tenant. A primary that offers what the screen is already showing is not a next step. **It also stood twice on every one of the four**, once as a `link` at the end of a Z5 `gnote` and once as the foot's button, and the `link` is gone: the same destination named twice in one pane is one string doing one job and one string doing none. The button that is left moved from `btn--quiet` to `btn--primary`, which is where the queue control used to be |
| `granted at onboarding, on no rulings yet` | `tenant-no-record` | Z5 latitude ladder, the `why` of the ceiling row | 3.5 section 7, which requires this cell **shown and marked** rather than left blank: it is the state that most deserves your attention. The ladder had nothing at all here, so a ceiling standing on no rulings read the same as a ceiling standing on thirty six. Principle 4, say what is true about the machine including what it did not find, and it names both halves, when the grant was made and what it stands on |
| `5h ago, at` and `6h ago, at`, before the two absolute timestamps | `tenant-moved-down` | Z5 `nar` | 0.8 section 4, rule 3: **an absolute time never appears alone on a working surface.** You decide on elapsed and you defend on absolute, so both are here and the elapsed comes first. Rule 1 keeps `ago` in a sentence and out of a column, and rule 2 keeps it to one unit. Both values are derived from this screen's own `?as-of=2026-08-22T04:14:05Z` rather than chosen |

**And a whole zone was written and taken out again, after this table was first filled in.** The Z4 banner these four screens rendered at 360 only, `The record beside this list is a desk reading.` with `What is waiting at this tenant is above, and it opens.` and a button reading `Open the queue`, is gone from all four and its row is gone from the table above. **Three banned registers in one string:** the page describing its own render condition, an argument for the design, and a count of the product's own parts, `Six action classes, a count and the window behind it`. All three belong in `.anote` or nowhere. And the sentence was false where it stood: at 360 the record is not `above` the list, it is below it, so the one width that ever showed the string was the one width at which it did not hold. That is the class `voice.md` names as findable only in a browser, and it is why a row can be correct in this inventory and wrong on the screen.

**Two more strings came out, and one of them was constant copy over a condition that is not.** `which is rope granted on thin evidence` went with the `.anote` it sat in, and `rope` is on the banned list in any case. And `, so it waits for you` was cut from the latitude ladder's reason on `tenant-stale` and `tenant-moved-down`, where the case in the pane is already contained or already rejected and nothing is waiting on anybody. It is correct and it stands on `tenant` and `tenant-no-record`. The preamble above says the ladder's `above this tenant's latitude` came across unchanged, and this is the qualification: the reason is one string on four screens and its tail is true on two of them.

**One string was written and taken out again.** The pane head of `tenant-moved-down` carried a `state` chip reading `moved down`. 0.8 section 6 closes the case chip set at six values and section 6b closes the entry chip set at eight, and a chip about a **tenant** is neither: it would have been a third undeclared taxonomy inside a shared component, which is the exact defect 6b exists to stop. The fact moved into the pane head's `sub`, where it is a sentence rather than a value in a closed list.

### 8e. One string new at stage 13, and it is the only one the whole change needed

**The expansion under an evidence claim became a real disclosure, and a disclosure needs a head.** It had shipped as a box that was always open with a chevron drawn on it, so the depth design principle 2 promises one key away was being charged to every read instead. Closing it is what the principle asks for, and a closed box has to say what is inside it before you spend the key on it.

| String | Page | Zone | Rule |
|---|---|---|---|
| `How this was read` | 21 screens under `design/`: the 9 `case` screens, the 6 `reject` screens, the 3 `escalate` screens, `entry`, `entry-changed` and `keyboard` | Z5 detail pane, the head of the expansion under the second evidence claim | Principle 2, the cheapest correct thing first. It names what is behind the head rather than restating the claim or promising more than the two sentences hold. Second person is not used because there is no instruction in it: the head is a label on a drawer, and `voice.md` gives a label the shortest true form |

**One string, and the count is the argument rather than the economy.** The 21 instances carry one body between them, so one head answers all of them. The other **6** expansions in the product are the handover notes on `shift` and `shift-sealed`, three each, and **they keep no head at all**: each already opens on the tenant and the analyst who wrote it, which is its own label, and that label is a link to the case. A link inside a `summary` cannot be reached, because the click belongs to the disclosure. A handover note is also read **because** the shift was taken, so closing it would hide the reason the screen exists. Six bodies that need no head and one that does is why the backlog's price of 23 invented sentences was wrong by 22.

**Nothing else was written, and two things that look like strings are not.** The chevron is a mark rather than a word, and it now hangs off the head instead of the box, so a filling with no head loses it by construction. And the state the head announces, open or closed, is the element's own: the browser carries it, and there is no second string for the open form.

---

## 9. Step 7, the fan-out, and what it closed

### 9a. Coverage, closed with a number

The list came from `wireframes/_nav.js` as a registry, not from a walk of the folder. Both were built and compared, because a list from the filesystem and a list from the registry are not obliged to agree and a gap between them would itself be a finding.

| | |
|---|---|
| Screens in the registry | **19** |
| Of them built | **13** |
| Pages on disk, excluding `overview.html` | **62** |
| Pages on disk with no registry entry | **0** |
| Screens rewritten at step 6 | 1, node 3.1, 12 pages |
| Screens sent to the fan-out | 12, on 11 agents, 50 pages |
| Screens returned | **12** |
| **N = M** | **13 = 13** |

Two pages were deliberately not touched after the global pass: `queue-reconnecting` and `queue-streaming`, both already rewritten at step 6. Every other page in the product changed.

The six unbuilt screens, 6.1, 6.2, 7.1, 7.2, 7.3 and 8.3, have no pages and are out of scope by the stage decision in `CLAUDE.md`.

### 9b. Four globals the global pass missed, and why it missed them

**Section 8 was built from section 3b, and 3b has a floor of five screens and was extracted at block level.** A string that sits in a nested span, or in one family's foot, falls under the floor even when it is on nineteen pages. Every one of the four was found by an agent, and two of them by two agents independently.

| # | String | Files | Became | Why 3b did not hold it |
|---|---|---|---|---|
| G18 | `Enter opens the entry at its own address` | 7 | wrapped `only-desk` | The log family's exact counterpart of the hint G13 wrapped on 19 files, and it sat below the floor |
| G19 | provenance line ends `Count first, never a bare percentage.` | 19 | *cut* | **The rule printed as product copy.** In `voice.md` that sentence is in the *Rule* column and the *Example* column stops at the source list. The product was printing the instruction next to the example |
| G20 | `3 more signals` | 19 | `Show 3 more signals` | A disclosure control, which the microcopy table had no row for at all |
| G21 | `Copy` | 5 | `Copy the address` | Legal as a bare verb, and three lines from `This snapshot stays retrievable` it reads as the noun the dictionary bans |

**Two agents found G18 and both refused to fix it**, each naming the same reason: at seven files it is a global by section 3's own definition, and fixing five of seven would leave two diverged. That is the boundary in the brief working rather than being obeyed by luck.

### 9c. The generators, which no agent could see

Stage 04 built these pages from **ten Python generators** in `wireframes/docs/`. They still carried the whole retired vocabulary: 93 occurrences of `Client`, `upheld`, `What Clerk concluded`, `blocked on her`, `Reject and tune`, `Count first, never a bare percentage` and the rest.

`wireframes/` freezes after this stage. **A generator that reproduces the retired vocabulary is a trap rather than a leftover**: one rerun undoes the whole stage, and the rerun looks like a harmless build step. Swept with the same replacement set as the pages, and verified clean.

Nobody in the fan-out could have found this: each agent was given a list of html pages, which is the correct boundary and also the reason the parent has to hold one instrument the agents do not.

### 9d. Divergences, and where each one ended

| # | Meaning | Wordings found at step 1 | Kept | Where it was ruled |
|---|---|---|---|---|
| D1 | The client organisation | `tenant` 409, `client` 98 | **tenant** for a scope, boundary or latitude; **client** where there is a person or a contract | Dictionary |
| D2 | Upholding Clerk | `Accept`, `Accepted by`, `Upheld by` | **accept** | Dictionary. `upheld` is now **0** in the product and **0** in the IA |
| D3 | Committing a rejection | `Reject r`, `Reject and tune`, `Rejected by` | **`Reject r`** opens, **`File the rejection Enter`** commits | Controls |
| D4 | The commit verb | six buttons, no shared rule | **Say what will be true after the press** | Controls |
| D5 | Retrying | `Try again` ×5, `Try to reconnect` ×2, `Retrying`, `Second attempt` | **`Try again`** her action, **`Reconnect`** the connection, **`Retrying`** the transport | Rulings |
| D6, D7 | Going to the queue, going to the log | seven each | **`Open <the destination>`**; `Back to X` only for a return the product can guarantee | Rulings, **written at step 7** |
| D8 | Not losing an unwritten decision | `Hold it locally` ×2, `Leave it open and go`, `Leave the case open` | **`Hold it locally`**. `Leave the case open` on the keyboard map is a **different act** and stays | Rulings, **written at step 7** |
| D9 | Freshness | seven phrasings | **`as of <time>`** and **`frozen at <event>`** | Rulings |
| D10 | The chip taxonomy | six declared, thirteen rendered | **Two closed sets on two axes** | Fixed upward in `reading-conventions.md` §6b |
| D11 | The register that belongs in `.anote` | 33 counted in 14 files | **57 removed**, plus 9 WCAG criteria and 3 zone labels | Never §6, widened twice at step 7 |
| D12 | The reader in the third person | 2 strings, 32 screens | **second person** | Address |
| D13 | The key inside the label | not a divergence | **kept, deliberately** | Address |
| D14 | The annunciator saying two things | two readings | **one question per fixed slot**; the 5-screen override retired | Rulings |
| D15 | `record` in three senses | | **`Accepted`** as the column header | Step 6 |

**D11's count was wrong and the direction is worth keeping.** The inventory said 33 in 14 files. Step 7 removed 57, because the grep that produced 33 was built from one slot shape and the leak was not confined to it. **An instrument tuned to the shape of the first instance under-reports the class.**

### 9e. Rules the fan-out proved missing, and none of them was invented quietly

Eleven agents returned **fourteen `NO RULE` rows**. Every one of them names a string that is wrong and a rule that does not exist to say so. Nine were written into `voice.md` at the reconcile; the rest are carried to `critique.md`. The rulings added:

- **`Open <the destination>`** and the limit on `Back to X`, D6 and D7.
- **`Hold it locally`**, D8, with the note that the keyboard map's near-identical phrase is a different act.
- **The collective noun**: `decision` is what a person did to a case, `ruling` is narrower and covers accept, amend and reject, **and an escalation is a decision that is not a ruling.** Found by an `h1` that named a category with no members on the page under it.
- **`stands`** is reserved for a verdict nobody has ruled on. It had two opposite senses one act apart.
- **A commit button that is a retry** keeps the bare retry verb, and one that has nothing to name states the bare verb with the ceiling beside it.
- **Disclosure, in place**: names what is behind it and never takes `Open`.
- **Prefilled value**: say where the value came from, because a prefilled field has no placeholder left to carry its own condition.
- **Any count is a numeral**, including at the start of a sentence.
- **A string that points at something else on screen** must be true in every state and at every width the block renders in. Same shape as the `only-desk` case, one axis over.
- **Never §6 widened three times**: a zone label is a coordinate from the specification; a bare citation of a principle is an argument for the design; **a count of the product's own parts is a specification fact, and correcting the number preserves the defect.**

### 9f. Two self-contradictions inside `voice.md`, found by two agents independently

**`Clerk concluded`.** Never §5 listed it as an *approved* replacement for `Clerk thinks`. The dictionary retires `conclude`. Two agents flagged it and both said the same thing: the Never row has to change or **every later reader takes it as permission.**

**`the tenant's mail admin`.** The dictionary's **client** row names that exact string as what becomes `the client's mail admin`. Principle 1 quotes the same sentence with `tenant's` as its model example. The two agents that met it **acted differently**, one applying the dictionary on three files and one reporting and holding, so the product genuinely diverged for the length of the fan-out. Both are now fixed, and the rule document no longer disagrees with itself in print.

### 9g. Acceptance, measured

All 62 pages, both viewports, asserted rather than intended.

| | |
|---|---|
| Pages | 62, `overview.html` excluded as out of scope |
| Narrow viewport | `document.documentElement.clientWidth === 360` on **62 of 62** |
| `scrollWidth === clientWidth` at 360 | **62 of 62** |
| Elements outside the viewport | **0** |
| JavaScript errors | **0** |
| Banned strings in product text, `.anote` and the stage panel stripped | **1**, and it is correct |

The one hit is `conclusion` inside the analyst's typed rejection note on `reject-other`. The agent left it deliberately: it is prose a person typed, an analyst really would write that word, and the fixture rule puts it out of reach. **A grep cannot tell a fixture from product copy**, which is why the exception is written down here rather than fixed.

### 9h. The ownership sync

SEO strings and node specifications went back to `ia/`, **prose and drawing together**, which is the rule `CLAUDE.md` binds container nodes to.

- **9 node files** under `ia/docs/pages/`: `Reject and tune`, `Search the queue`, `What Clerk concluded`, `upheld` in three closed-value lists, the `reject-other` title, the consequence-line specification, and `tenants in scope`.
- **6 `ia/*.html`** rebuilt for the same strings, plus **18 further occurrences of `upheld` inside the IA layer's own wireframe sketches** on nine pages. A drawing that still says `Upheld` while its own prose says the word is retired is exactly the stale-frame failure `CLAUDE.md` records against node 0.1.
- `upheld` is now **0** across `wireframes/`, `ia/*.html` and every node specification. It survives in exactly two sentences, both in `reading-conventions.md`, both of which are **about** its retirement.
- **`Count first, never a bare percentage.` stayed in the nodes** and was cut only from the screens. The rule is right and the node is where it belongs; it had leaked onto 19 pages.

### 9i. Carried to step 8, found and deliberately not fixed

None of these is a text defect that step 7 could have fixed by writing a better string.

**Strings that are true on most screens of a family and false on one.** All three are globals, so no single agent could touch them.

- `Filed by Clerk 26m ago` on `case-investigating`, where the chip says `investigating` and the page says there is nothing to accept yet. The entry taxonomy already holds the right words: `Clerk opened the case`.
- `above this tenant's latitude, so it waited for you` on `case-acted`, where Clerk did not wait: it isolated the host 24 minutes earlier.
- The annunciator names **Larkfield Logistics** on `entry-gone` and `entry-beyond-retention`, which are Norsk Marine and Bramber Retail. With G1 applied a screen reader is now told `Clerk's latitude on this tenant` over a reading about a different tenant. **Fixing it means inventing a latitude and a record pair for two tenants**, so it stands.

**Fixture instances that contradict each other.** Canon is `reading-conventions.md` §7, which is not this stage's file.

- `case-no-baseline` carries three evidence claims belonging to C-4417, including an absence claim about device enrolment on a case whose own narrative is an unenrolled device.
- `case-acted`'s queue row and its pane disagree about the verdict.
- `case-no-baseline`'s latitude ladder marks `Contain endpoint` as `yes` while its own annunciator caps the tenant at `investigate`.
- `ia/decision-log.html` renders `T. Okafor`, who is not one of the three people §7 closes the set at.
- `entry-beyond-retention`'s entry id is `e-04417`, which reads as a mangled case id where every sibling uses an unrelated one.

**Layout, not text.**

- 3.1's scope bar still renders three chips at 360 where §8 of its node says one control with a filter count. Carried from step 6.
- 4.1 keeps the pane visible at 360 with `Accept a` `Amend m` `Reject r` and keys that do not exist on a phone, while `case-file.md` §8 says the node does not render at 360. 4.2 solves the identical problem with `only-desk` / `only-narrow`.
- `entry-beyond-retention` now carries two controls with identical words and the same destination.

**Naming debt for stage 07.** `class="client"` on every tenant cell and `class="concluded"` on every verdict cell, across the log and case families, plus `class="ovrd"` after `OVRD` retired. These are the last carriers of D1, D2 and D14, and the kit is built from them at stage 07.

**Rules named and not written.** The trailing status slot on a line-link, where one column mixes destinations, absences, freshness and progress. Whether a footer hint may state an attempt number. Whether `.prov` has a second sense on the door, where there is nothing to count.

**Two exemplars that may be wrong.** `voice.md` quotes two strings as models that contain a clause the widened Never §6 would now cut. Either the exemplars change or the rule is narrower than it reads. An agent found this and would not decide it alone, which is correct: **a rule document that quotes a violation as a model teaches the violation.**
