# Stage 05 Voice: what the critique found

Step 8. Four instruments, run independently, deduplicated afterwards. Verification before any fix, a second browser pass after every fix, and a third after the last batch.

---

## 1. The instruments, and what each one is for

| Instrument | Class it owns | Why it and not another |
|---|---|---|
| **Codex**, plugin, read-only | Cross-page string comparison over 62 pages: one action under two names, a term outside the dictionary, a banned string that got through, a string on screen and absent from `microcopy.md`, a node constraint broken | It holds 62 pages at once. No single reader does |
| **Claude, tone of state** ×2 | The tone a state takes against the moment the person is standing in | Needs the tone table, the persona and the state read together. A grep cannot reach it |
| **Claude, the browser** | A string that breaks the layout | Provable only by rendering. In a table both versions look fine |

**A fifth instrument was not run and its absence is named.** The stage-contract checklist pass belongs to the pipeline's own review, not to this file.

**Codex had to be restarted twice, and both failures were silent.** `codex exec` without a tty waits on stdin and produced zero bytes for five minutes with exit 0. Then the model named on the command line was refused by the account and it produced zero bytes again, with the refusal only in stderr. **An instrument that returns nothing looks exactly like an instrument that found nothing.** Both times the tell was the byte count, not the exit code.

---

## 2. What was found, by class

**25 findings across the four instruments. 20 fixed, 3 carried, 2 rejected on verification.**

### 2a. The finding no string comparison could make

`case-unrecorded` is the state where the verdict failed to write **twice**, and its banner says `This console is the only place the decision exists.` Its annunciator, the most prominent slot on the screen, said **`DECIDED by you`**, byte-identical to `queue-decided`, the success page.

`CLAUDE.md` binds this layer in those words: *"A case that left the analyst's hands must not look identical to one that did not."*

**Codex cannot find this by construction.** It looks for one meaning under two words. This was **one wording under two meanings**, and the identity is the defect. It became `UNRECORDED`, which is a declared chip value, and the detail stays in the banner two lines below.

### 2b. A rule that a taxonomy this same stage declared could not obey

Three of the eight entry chips read `Clerk opened the case`, `Clerk filed a verdict`, `Clerk acted alone`. The chip rule, written at step 4, says **one word, lower case**. The entry taxonomy, declared at step 3 as a fix upward into `reading-conventions.md` §6b, made three of them three and four words, capitalised.

Neither step could see it. **The collision is between a closed list and a column width**, and only a browser renders both at once: in the state column `CLERK ACTED ALONE` was **40px** tall against every sibling at **25px**, and it set the height of the grid row.

The cell immediately to its left says who on every row, human or machine: `Contained by Clerk, inside this tenant's latitude`. The word `Clerk` in the chip was buying nothing.

They became `opened`, `filed`, `acted alone`. Fixed upward first, in `reading-conventions.md` §6b and `decision-log.md`, **prose and drawing together**, then on the five screens. The pair is `voice/screens/log-chips-before-1440.png` and `-after-1440.png`, and the measurement is above rather than an impression.

### 2c. A class that survived being fixed, on the sentence next to the one that was fixed

`escalate-no-recipient` is the state with nobody on the rota, on the screen where **escalate is the only exit from a phone**. Step 7 fixed exactly this class here: the ceiling lived in a desk-only footer, so at 360 the button was dead with nothing saying why.

The sentence that names the **remedy** stayed desk-only. At 360 she was told the control was disabled and never told the one move that revives it, while the fallback control itself rendered.

Pair: `voice/screens/escalate-360-before.png` and `-after.png`.

### 2d. Volition, on 21 files, invisible to comparison because it is consistent

`Real, and it wants to contain the identity.` The first sentence of the pane, read before she decides whether the agent's ruling holds.

Never §5 bans `Clerk thinks, Clerk believes, Clerk feels`. `wants` is the same move and survived because it is not the literal word in the table. Principle 5 is stronger: **the name is the contract.** A clerk prepares the file and proposes; the judge rules. A clerk that *wants* an outcome has stopped being a clerk. The queue cell for the same case says `Real, contain identity` with no volition, so the register split inside one verdict.

It became `proposes`, on 20 product pages.

### 2e. The register that belongs in `.anote`, still the largest class

Fifth and sixth independent screen families. `and that was chosen` on the keyboard map is the exact shape the widened Never §6 names. `You learn the window from the entry, never from a failure` sat on `entry-beyond-retention`, **which is the failure**, congratulating the product on a promise it is breaking in front of her. `The count above is provisional and says so` was the page praising its own copy. A loader on 5.1 spent three sentences defending the design instead of naming what it was fetching.

And `Three different situations reach this exact page` on 8.1: the step-7 sweep changed `render` to `reach` and left the sentence. **The word was cured and the class was not.** Never §6 names that string almost verbatim, because step 7 put it there as an example.

### 2f. Six rules that were wrong rather than six strings

| The rule | What was wrong | What it says now |
|---|---|---|
| Block heading `h3` | *"A question the block answers"* read as a form requirement and **74 headings on 29 files broke it**, including `Evidence, 9 signals` and `Normal at this tenant`, which are right | Interrogative where the block answers a question; the plainest noun phrase where the block is a **reading rather than an answer** |
| Never §4, `simply, just, easy` | A grep returns `Case queue, just filed`, where `just` is the time adverb | **The ban is on the minimiser, not on the spelling.** Same class as `btn--primary-narrow` matching `primary` at step 6 |
| Provenance line | Requires the named sources, and two renderings legitimately drop them | Two cases named: at 360, and where the sources are exactly what did not survive |
| D8, not losing an unwritten decision | Named one act; the product had **three**. Nothing is held locally after a failed **seal** | `Leave it unsealed` is the third act, with the cost stated before the control |
| Prefilled value | Written at step 7 from the door | Whether to touch it may be carried by a **visible control** beside the field |
| The trailing status slot | Flagged by both instruments as a D6 residue | Stays lower case, and the reasoning is written down: **the whole line is the control** and the slot is its tail. The vocabulary obeys the ruling even where the case does not |

### 2g. Two findings rejected on verification, and the rejections earned their keep

**The `HARDEST` phase has no mechanism.** An instrument read `voice.md` Check 1 as promising three prompts on the shift brief and found three free text boxes. **Rejected.** They are notes left on cases through the shift, and the page says so in its own words: *"The brief is not a document you author: the structured half above is assembled from what actually happened."* The three prompts belong to escalate, 4.6. The phase's mechanism is accumulation, which is stronger than a form at 07:00.

**The shortened chips are a second vocabulary, and `Leave it unsealed` breaks D8.** Both are Codex reading the ruling documents **as they stood before the fix it was reporting on**, because it ran while the reconcile was landing. The chip half is a stale read. The D8 half is not: the ruling really did name one act, and it now names three.

---

## 3. Two mistakes of my own, both caught inside a minute, both worth the record

A global find-and-replace was aimed twice at a string that is **not global**, and it is the same mistake in two shapes.

`DECIDED by you` matched **three** files and was false on one. `queue-decided` and `case-standalone-filed` are states of success where it is correct.

`so it waited for you` matched **22** files and was false on two: `case-acted`, where Clerk did not wait but isolated the host 24 minutes earlier, and `case-investigating`, where no verdict exists to have waited.

**A global replacement is the wrong instrument for a state-dependent string.** It looks global because it stands on twenty pages; it is not, because its truth is decided by the state. Both were restored inside the same step, and the rule is written here rather than in a rule document because it is a rule about the tool, not about the voice.

---

## 4. Measured, not asserted

Three full browser passes, 62 pages at 1440 and at 360.

| | Pass 1 | Pass 2 | Pass 3 |
|---|---|---|---|
| `clientWidth === 360` | 62 / 62 | 62 / 62 | **62 / 62** |
| `scrollWidth === clientWidth` at 360 | 62 / 62 | 62 / 62 | **62 / 62** |
| Elements outside the viewport | 0 | 0 | **0** |
| Script errors | 0 | 0 | **0** |
| Banned strings in product text | 1 | 1 | **1** |
| Controls wrapping to two lines or more | 4 pages | 1 | **1** |

The second pass matters for a reason specific to this stage: **shortening a chip changes the height of a grid row**, and a rewritten global sits on every screen carrying that component.

The one banned string is `conclusion`, inside the rejection note a person typed on `reject-other`. Left deliberately. **A grep cannot tell a fixture from product copy**, so the exception is written down rather than fixed.

**The measuring script was wrong twice before it was right**, and both faults inflated the result. It counted node numbers from the stage panel as product strings, and it set a 360 viewport where the absence of a scrollbar makes `clientWidth` 375. First run: 124 problems out of 124 checks. **An instrument that fails everything is broken, not strict.**

---

## 5. Carried out of this stage, and why each one is carried

### 5a. The `h1` on 19 pages belongs to the queue while a case is open

`console-shell.md`: *"The `h1` belongs to whatever fills Z4 plus Z5, so a case open in the pane makes the case the heading of the page."* `case-file.md` §7: *"One `h1`, the case and its client."*

On all 19 case, reject and escalate pages the `h1` is the queue readout and the case identity is an `h2`. Two node specifications, one screen, and they disagree.

**Carried because the fix is which element carries the heading, not what it says**, and this stage changes text. It is the most consequential thing on this list: it is the identity of the screen for assistive technology, and `CLAUDE.md` binds this layer to settle exactly that.

**Step 6 accepted the reference screen with this live**, because it checked the words in the `h1` and not which element was the `h1`.

### 5b. A label that five lines of wrapping cannot be shortened out of

`The service delivery duty line` on `escalate-no-recipient` at 360 renders on **five lines**. Measured cause: the label is allocated **49px** while the routes span beside it takes **212px**. Thirty characters will wrap in 49 pixels however they are written.

The stage rule says this class is cured by shortening the text. **Here it is not, and substituting a diagnosis would be worse than carrying the defect.** It is a flex allocation that 4.6's option list never received at 360, on the one screen the 360 scenario exists for.

### 5c. The error state that cannot name its `when` without a new fixture

Two instruments reached `reject-write-failed` independently. It now names the time, `40s ago`, because that value is already the canon on both sibling write failures, so it is applying the fixture set rather than inventing a measurement.

### 5d. Everything already listed in `microcopy.md` §9i

Three globals false on one screen of a family, five contradicting fixtures, three layout gaps and the naming debt for stage 07. Unchanged by this step and not repeated here.

### 5e. `microcopy.md` §4 is the inventory as it stood, not as it stands

Codex is right that new strings are absent from §4. The convention this file settles: **§4 is the inventory at step 1 and it is not rewritten**; §7, §8 and §9 carry every delta with its rule, and §9d is the divergence ledger. A reader wanting the current string reads §4 and then the deltas. **A single merged §4 would lose the record of what changed and why**, which is the part stages 07, 08, 12 and 13 need.

---

## 6. What the instruments checked and found sound

Recorded because an instrument that reports only hits cannot be told from one that fires at random.

`queue-reconnecting` against `queue-stale`: one knows what it has and says `as of 6m`, the other does not know what it is missing and refuses to pretend. `unavailable-planned` against `unavailable`: tested as a possible tone-travel failure and **justified**, because a published window makes elapsed time irrelevant and an unplanned outage makes it decisive, so the difference is in the world rather than in the voice. `case-write-failed` escalating into `case-unrecorded` as the world escalates. `queue-no-match` keeping two kinds of nothing apart. The reject dialog printing the route on the option row rather than in the button, and costing four taps after every edit, not five.

The whole set is in the two tone instruments' returns, and the sound states outnumber the findings roughly three to one.
