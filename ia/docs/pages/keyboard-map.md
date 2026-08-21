# 0.5 Keyboard map

**This node is load bearing, and it did not look it on the map.** It was registered as a reference overlay. Specifying it found that the product's central interaction, one key to override, is regulated by a Level A success criterion, and that this node is where the required mechanism lives.

---

## 1. Identity

| | |
|---|---|
| **Number** | 0.5 |
| **Name** | Keyboard map |
| **Type** | dialog, modal |
| **Group** | `global` |
| **Scope** | MVP |
| **Parent** | none. Discovered at the detail layer |
| **Opened from** | 0.1 zone Z1, and by shortcut |
| **Owns** | the remap and disable mechanism for every single character shortcut in the product |
| **At 360** | not rendered. There is no keyboard |

---

## 2. Purpose, corrected

Design principle 5 puts keyboard before mouse and design principle 3 says override is one key. A keyboard first product with no way to discover the keys is keyboard first only for people who read documentation.

That was the reason this node was registered. It is not the important one.

**The important one:** WCAG 2.2 SC 2.1.4 Character Key Shortcuts is **Level A**, the strictest tier, and it regulates exactly the interaction this product is built on. Verbatim: "If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true", followed by three conditions: a mechanism to turn the shortcut off, a mechanism to remap it to include a non-printable key, or the shortcut being active only when the component has focus.

Accept, amend and reject on single keys are precisely the case. The criterion is not optional and it is not AA. **So this node is the mechanism, not the manual.**

The reason is not bureaucratic. The Understanding document is blunt about who it breaks: single key shortcuts "are disastrous for speech users", because dictation is interpreted as commands, and "keyboard-only users who have dexterity challenges can also be prone to accidentally hitting keys". In a product where one key files a verdict against a client, an accidental keypress is not an annoyance.

---

## 3. Which of the three routes the product takes

**Primary route: active only on focus.** Verdict keys are live only while the detail pane holds focus. This is the third condition, it is the cheapest to hold, and it falls out of the split pane the product already has: the list is a grid with its own key handling, and the case pane is a separate focus scope. Nothing is bolted on.

**Second route, also shipped: remap and disable.** Offered here, in the map, because the map is already the one place that lists every key. The first route alone would leave a speech user with no way to stop `a` from meaning accept while the pane is focused, which is the exact scenario the criterion describes.

**Not taken: nothing.** Recorded because "we will handle it in engineering" is how a Level A criterion becomes a launch blocker discovered at the end.

| Route | Status | Where it lives |
|---|---|---|
| Active only on focus | Primary | The focus model in 0.1, enforced per cluster 4 |
| Remap to include a modifier | Shipped | This node |
| Turn off entirely | Shipped | This node |

**Consequence for cluster 4, stated here so it is inherited rather than rediscovered.** Every node that binds a single character key declares it in this map and honours the focus rule. A key that works while a text field has focus is a defect, not a convenience: while 4.5 amend or 4.4 reject reason has focus, letters are text.

---

## 4. The overlay exception

Design principle 5 forbids an overlay that hides the evidence the analyst is deciding on. This node is an overlay. The contradiction is real and is resolved rather than ignored.

**It is allowed because it is the one overlay that carries no decision.** It is opened deliberately, it asks nothing, and it leaves on one key. Nothing is lost behind it because nothing behind it is being read at that moment: an analyst opening a shortcut list is not mid sentence in a verdict.

**And it is not the teaching mechanism.** Principle 3 says override is one key **and it teaches**. Teaching happens at the control: every action that has a key shows that key on itself, in place. The map is a lookup for the whole set, not the way a person learns the one key they are about to press. If the map is the only place a key is visible, the control has failed and the map is covering for it.

---

## 5. A collision this node found

**Escape is already taken.** At 0.1, Escape deselects and returns the detail pane to the fleet. The dialog pattern says Escape closes the dialog.

Resolved as: **while the map is open, Escape closes the map and does not propagate.** One press closes the map, a second press deselects. Without that rule an analyst dismissing the map would silently lose their case selection, which is the kind of loss that gets blamed on the person rather than on the interface.

Recorded as a rule for every future dialog in the product, not just this one: **a modal consumes Escape.** 4.4 and 4.6 inherit it.

---

## 6. Dialog behaviour

From the W3C ARIA Authoring Practices, modal dialog pattern, opened this session.

| Requirement | Verbatim |
|---|---|
| Tab | "Moves focus to the next tabbable element inside the dialog. If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog" |
| Shift plus Tab | Reverse of the above, wrapping to the last |
| Escape | "Closes the dialog" |
| Focus on open | "When a dialog opens, focus moves to an element inside the dialog" |
| Focus on close | "When a dialog closes, focus returns to the element that invoked the dialog" |
| Outside the dialog | "Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window" |

**Focus returns to the invoker, and the invoker is often a key rather than a button.** When the map is opened by shortcut rather than from Z1, there is no invoking element. Focus returns to whatever held it before, which is the reading the pattern intends when it says the invoking element may no longer exist.

---

## 7. What the map contains

Grouped by what the key does, not by which key it is. An alphabetical list of keys is a lookup for someone who already knows the key and has forgotten the action, which is the rarer direction.

| Group | Keys | Notes |
|---|---|---|
| **Move** | Up, Down, Home, End, Ctrl plus Home, Ctrl plus End | The list grid, from 0.1 |
| **Open and close** | Enter, Escape | Escape carries two meanings, and the map says both |
| **Rule on the case** | accept, amend, reject | **Active only while the detail pane has focus.** Stated on the row, not in a footnote |
| **Leave the case open** | escalate | Same focus rule |
| **Sections** | the three navigation destinations | From 0.2 |
| **This map** | the key that opened it | |

**Every row carries its own scope.** A shortcut list that does not say when a key is live is a list of traps for the analyst who is typing a rejection reason.

**The remap and disable controls sit at the foot of the map**, applying to the whole set at once and per group. Per key remapping is not offered in the MVP: forty two nodes of surface and a bespoke keymap is a support burden with no job behind it.

---

## 8. State matrix

| Element | Closed | Open | Open, remap active | Text field had focus | At 360 |
|---|---|---|---|---|---|
| Trigger in Z1 | Present | Pressed state | Pressed | Present | **Not rendered** |
| Map body | Absent | Grouped by action | Same, rows editable | Absent. The key typed a character instead | n/a |
| Underlying screen | Interactive | **Inert**, per the dialog pattern | Inert | Interactive | n/a |
| Escape | Deselects the case | Closes the map, does not propagate | Cancels the edit, then closes | Deselects | n/a |
| Verdict keys | Live only when the detail pane has focus | Inert. The map has focus | Inert | **Inert. Letters are text** | n/a |

**The column that matters is "text field had focus".** It is the accidental verdict, and it is the one this node exists to make impossible.

---

## 9. Not this node

| Not here | Lives at |
|---|---|
| What each key actually does to a case | cluster 4 |
| The grid traversal model itself | 0.1 |
| The inline key hint on each control | the control, wherever it lives |
| Screen reader announcements of state changes | 0.4, and each node that changes state |

---

## 10. Grounding and open questions

**Every question below carries a verdict at the end of this file.** 2 settled, 0 drawn at stage 04, 1 still open, decided at the close of stage 03b so that stage 04 draws against answers rather than against a list.

| Claim | Source | Standing |
|---|---|---|
| Single character shortcuts must be disableable, remappable, or focus scoped. Level A | W3C, Understanding SC 2.1.4, opened this session | **Fact, and it is a launch condition** |
| Single key shortcuts "are disastrous for speech users" | same page, verbatim | Fact |
| Modal dialog keyboard model, inert background, focus return | W3C ARIA Authoring Practices, opened this session | Fact |
| Escape is consumed by a modal and does not propagate | this node | Decision, inherited by 4.4 and 4.6 |
| Grouping by action rather than alphabetically by key | this node | Decision |
| No per key remapping in the MVP | this node | Decision, scope |

1. **Which key opens the map?** `?` is the convention and `?` is Shift plus slash on most layouts, which makes it a two key gesture on the keyboards this analyst probably uses. Not resolved, and it is a stage 05 and stage 04 decision together.
2. **Does the focus rule survive the fleet?** The detail pane at rest holds 3.5, not a case. Verdict keys must be inert there, which means the focus scope is not "the pane" but "a case in the pane". A distinction with a real bug behind it.
3. **Where does the disable setting live once there is a settings surface?** There is no settings node on the map. Today it lives here, which is defensible while the map is the only place keys are listed and indefensible once it is not.

---

## Settled before stage 04

Taken at the close of stage 03b. A question is settled here only when the answer follows from something the product already decided; where it does not, it says who can answer and what it blocks.

| # | Question | Verdict |
|---|---|---|
| 1 | Which key opens the map? | **Settled**. **`?`, and the chord is not the discovery path.** The map is discovered from a visible control in the shell; `?` is the shortcut for people who already know it exists. That removes the problem rather than solving a keyboard layout. |
| 2 | Does the focus rule survive the fleet? | **Settled**. **The scope is the case in the pane, not the pane.** With 3.5 at rest there is no case, so the verdict keys are inert. It is a sharper statement of the same SC 2.1.4 condition, and it is exactly what 3.1's `Enter` arms. |
| 3 | Where does the disable setting live once a settings surface exists? | **Still open**. The same missing settings surface as 0.6, 0.7 and 0.8. |
