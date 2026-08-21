# 1.1 Sign in

The only public URL in the product, and the smallest screen in it. Both facts matter, and the second one is the design: there is almost nothing here, and what little there is has to survive being the door at 03:00.

---

## 1. Identity

| | |
|---|---|
| **Number** | 1.1 |
| **Name** | Sign in |
| **Type** | page |
| **Group** | `pages` |
| **Scope** | MVP |
| **Parent** | none in the concept map. Scope set at the detail layer, and said out loud |
| **Page type for the bank** | **F, sign in.** The one type where both halves of the bank are real live pages |
| **Route** | `/sign-in`, optionally carrying a destination |
| **Permission** | public. The only node in the product that is |
| **Job** | none of its own. It is the cost of every other job |
| **Depended on by** | **4.2** and **5.4**, both of which are addresses that travel and must survive it |

---

## 2. The one node where the SEO block could have applied

0.1 recorded it: *"Harrier has one public URL and it is the sign in page, so what this layer settles ahead is addressing and permission instead."* This is that page, so the question is real here and nowhere else.

**The answer is still `noindex`, and the reason is not laziness.** Nobody arrives at Harrier through a search engine. Seats are provisioned by the MDR provider, so every real arrival is a bookmark, a pager link or a message. A sign in page in the index serves an attacker mapping the estate and nobody else.

So: `noindex`, no schema, no marketing copy, and **the A to E block that a public product would carry here is deliberately not produced.** The loop 0.1 opened is closed with a no.

---

## 2b. Cookies, and why there is no banner

Added at the stage 08 audit, where the contract checklist asked for a cookie node and found none. **The answer is that there is nothing to consent to, and that has to be written down rather than assumed.**

`CLAUDE.md` puts the product under GDPR. This is the only public page, and the only cookie it sets is the session cookie that carries the sign in itself. A cookie strictly necessary to deliver a service the user asked for does not require consent, so **no consent banner is specified anywhere in the product.**

Two conditions keep that true, and both are constraints rather than observations:

- **No analytics, no tag manager, no third party script on this page.** The moment one lands, the answer changes and a banner becomes a real node
- **No cookie behind the login either.** The console is a session, not a tracked visit

**If either condition breaks, this section is where the change starts**, because this is the only page a person can reach without an account.

---

## 3. Identifier first, and it is two vendors deep

Both live pages opened this session do the same thing:

| | PagerDuty identity | Microsoft Entra |
|---|---|---|
| Fields on screen one | **one**, email | **one**, email (`loginfmt`) |
| Password on screen one | no | no |
| Button | `Next` | `Next` |
| Recovery | on the second step | `Can't access your account?` in reach |

**Identifier first is the block, and it is not ours.** Two independent vendors, both in or adjacent to our category, both routing on the email before asking for anything secret.

**Why it is right here specifically:** every MDR provider has its own identity setup. The email domain is what decides whether this person goes to their provider's SSO or to a password, and asking for a password before knowing that is asking a question that might not apply.

The field carries `autocomplete="username"`, which is what makes a password manager useful rather than in the way.

---

## 4. The block that is ours: the destination survives

Neither reference has our problem.

An on call analyst is paged at 03:00. She taps a link to `/case/{caseId}`. She is not signed in. **She must land on that case**, not on a bare queue with the case somewhere in it.

| | |
|---|---|
| **Requirement** | The requested address is held through the whole authentication round trip, including the redirect to a provider's identity provider and back, and restored afterwards |
| **The security cost, and it is real** | A return address held in a URL is an open redirect unless it is validated. **It is validated against the product's own routes only**, and anything else is discarded silently rather than followed |
| **If the destination is out of scope** | She lands on 8.1, not on an error that says "you do not have access to that case". Not found and not yours are indistinguishable, and this is the earliest point where that rule bites |
| **Why it is worth the cost** | 4.2 exists for this scenario and 5.4 exists for permalinks. **A sign in that drops the destination makes both of those nodes half true**, and it costs the one minute the entire 360 rendering was designed to save |

---

## 5. Blocks, in priority order

From `ia/docs/blocks.md`, type F.

| # | Block | Where it came from | Traces to | Scope |
|---|---|---|---|---|
| **1** | **One email field**, `autocomplete="username"`, and one button reading `Next` | PagerDuty and Entra, independently | 1.1 | MVP |
| **2** | **Recovery in reach of the field** | Entra: `Can't access your account?` | 1.1 | MVP |
| **3** | **The destination, held and restored** | Ours, section 4 | 4.2, 5.4 | MVP |
| **4** | **Why you are here**, when you did not arrive on purpose: session expired, signed out, or a link needed you | Ours, from 1.2 | 1.2 | MVP |
| **5** | Passkey path | Entra ships FIDO support in the page | 1.1 | **LATER**, and `[?]` |

**Deliberately absent:** `Sign up`, `Continue with Google`, `Continue with Apple`, any marketing copy, and any product screenshot.

**The signup link is the absence with a reason people forget.** Both references carry one. Harrier has **no self serve signup**: seats are provisioned by the MDR provider. A signup link would be a dead end wearing a primary colour, and on the only public page in a security product a dead end is also an invitation.

---

## 6. What the page must not say

The whole node is three fields long, so the interesting part is the copy it refuses, and each refusal has a reason rather than a preference. **Stage 05 writes the words; this node fixes the constraints.**

| Never | Because |
|---|---|
| `No account with that email` | Account enumeration. The same family as the 8.1 rule, arriving three nodes earlier |
| `Your organisation is not set up` | Tells an outsider that a domain is not a customer, which is the same disclosure in reverse |
| `Wrong password` distinguished from `wrong email` | Same reason again |
| Anything naming a client or a tenant | This page is public. Nothing behind the login may leak in front of it |

**The cost of the first three, stated:** an analyst at a provider whose SSO is not configured yet gets an unhelpful screen. That is a provisioning problem and it is fixed in provisioning, not by making the public page more talkative.

---

## 7. State matrix

| Element | Arrived on purpose | Arrived by a deep link | Session expired, from 1.2 | Signed out deliberately | Identity provider returned an error |
|---|---|---|---|---|---|
| **Why you are here** | Absent | **The case is named**, so she knows the link worked | `Your session ended. You will come back to where you were` | `You signed out` | What failed, in plain words |
| **Email field** | Empty, focused | Empty, focused | **Prefilled if known**, focused | Empty | Prefilled |
| **Destination** | none | **Held** | **Held** | Cleared. Signing out is a deliberate exit | Held |
| **After success** | `/queue` | **The case** | Where she was | `/queue` | Retry |

**Signing out clears the destination and expiry does not.** One is a decision to leave, the other is an interruption. Treating them the same would either strand her after an expiry or return her somewhere she chose to leave.

---

## 8. At 360, and it is not reduced

Every other node in this layer either does not render at 360 or renders reduced. **1.1 renders in full, because there is nothing to reduce.**

That is not a coincidence. The 03:00 scenario passes through this screen, so it is the one place where the mobile rendering is not a compromise: one field, one button, one line saying why she is here. The desktop rendering is the same thing with more space around it.

**Touch target:** WCAG SC 2.5.8, Level AA, 24 by 24 CSS pixels minimum, already carried as a rule from 0.1. On a phone at 03:00, with one hand, that is a floor rather than a target.

---

## 9. Emotional support

**None.** No mechanism in the `ia/docs/sitemap.md` table lives here, and none is written in for completeness.

---

## 10. A note for stage 06

There is no brand yet; the visual language arrives at stage 06. **This is the only screen a person can see before authenticating**, which makes it the one place the product's identity is seen by anyone who is not already inside it.

Recorded here rather than decided: a node specification cannot choose a brand, but it can say which screen carries the whole weight of one.

---

## 11. Not this node

- **1.2** session expired. A dialog inside the console; this page is where she lands after it
- **0.1** the shell. It does not exist yet at this point; the sign in page has no shell
- **4.2, 5.4** the addresses that must survive this page
- **8.1** where an out of scope destination resolves to, and where the same non disclosure rule is written
- **Provisioning**, which is not in the product at all: seats come from the provider

---

## 12. Grounding

| Claim | Source |
|---|---|
| Identifier first: one email field, no password, button reads `Next` | **identity.pagerduty.com** and **login.microsoftonline.com**, both opened this session |
| `autocomplete="username"` on the field | PagerDuty identity, read from the live page |
| `Can't access your account?` beside the field | Microsoft Entra, live page |
| Consumer identity options exist on Entra | Same page: `Continue with Google`, `Continue with Apple`. **Left** |
| Passkey support is present in the page | Entra: `IsFidoSupported` |
| A signup link is shipped by both | Both pages. **Left**, no self serve signup |
| 24 by 24 CSS px minimum target | WCAG SC 2.5.8, Level AA, quoted in 0.1 |
| Not found and not yours are indistinguishable | 8.1, and the tenant isolation requirement in `CLAUDE.md` |

---

## 13. Open questions

1. **How long is a session?** Nobody has chosen it. 1.2 exists because sessions end, and it cannot say anything specific until this number does. **Same family as the retention window**: a value the design depends on and the research never settled.
2. **Does the product support one person at more than one provider?** An analyst contracting to two MDRs has two identities and two scopes. Unaddressed anywhere in the layer, and it changes what "provider scope" means if the answer is yes.
3. **Does a passkey path ship?** `[?]`, LATER. Entra has one, and an operator who signs in every shift is exactly the user it helps most.
4. **What does an unconfigured provider actually see?** Section 6 chooses non disclosure and names the cost. Whether that cost is acceptable belongs to whoever owns onboarding, and this node has not met them.
