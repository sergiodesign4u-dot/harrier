# How to add a feature

Stage 13, step 7.

**This file is not advice about prompts. It is the prompt.** Copy the block below, put your feature where it says, and paste it. It names every source by a path that exists.

**Reader: the new developer**, and **Claude in a new session**, which are the two who will actually run it.

---

## The prompt

```
You are adding a feature to Harrier, an adjudication console for analysts at managed
detection and response providers. The repository is a fully assembled clickable product
with no data layer, no API and no router: every screen is a static html document showing
canonical fixture data. Your job is to add one more, to the same standard as the 62 that
are already there.

THE FEATURE: <name the node or the job here>

READ THESE FIRST, IN THIS ORDER. Read them from disk. Do not work from memory of them.

  1. CLAUDE.md                          what binds every session in this project
  2. handoff/handoff.html               what the product is and where everything lives
  3. design/system/CLAUDE.md            the ten rules that hold inside the system package
  4. design/kit/docs/architecture.md    the rules of use and the thirteen prohibitions,
                                        section 11 is how to contribute
  5. handoff/docs/behaviour.md          how the product behaves: states, edge cases,
                                        validation, and every row with its source
  6. handoff/docs/map.md                what the neighbouring screens of your own type
                                        are assembled from, and what moves if you touch
                                        a token
  7. handoff/docs/a11y.md               the accessibility your work has to satisfy, with
                                        the command that checks each line
  8. ia/docs/pages/<node>.md            the specification of your node, if it has one:
                                        its state matrix, keyboard model, addressing and
                                        permissions. NO md means you derive the state set
                                        from behaviour.md for the neighbouring flow and
                                        say out loud that you did
  9. voice/docs/voice.md                how a sentence in this product is written
 10. ia/docs/pages/reading-conventions.md   section 7, the fixture canon

THE RULE OF GROWTH, AND IT IS TWO STEPS RATHER THAN A PROHIBITION.

  Step one: IN THE FILE OF A SCREEN, NOTHING IS INVENTED. Not a colour, not a number, not
  a class the system does not declare.
  Step two: WHAT IS MISSING APPEARS IN THE SYSTEM FIRST, WITH ITS WHOLE SET, AND ONLY
  THEN ON THE SCREEN.

  Both halves matter. A flat "create nothing new" would be worse than no prompt at all:
  you would either stop, or do it in the screen file, and the second is how a design
  system dies. The system is meant to grow. It grows in one place.

TEXT
  Tone, person, register and the banned list: voice/docs/voice.md. Five rules bind every
  string: speak to the analyst and to the person who reads the record months later, never
  in the third person about her; the cheapest correct thing first and depth one key away;
  a number names its claim, its scope and its window, count first and never a bare
  percentage; say what is true about the machine including what it did not find, and
  Clerk files and proposes rather than thinks or believes; one invented noun, `latitude`,
  and one invented name, `Clerk`, with no article.
  A string that already exists elsewhere: take it from the built coloured screen, which
  is the applied text. voice/docs/microcopy.md sections 3 and 4 are the inventory as it
  stood BEFORE stage 05, so a lookup there returns the wording that was replaced;
  section 8 is the ruling table and is where a new string is recorded, with its page and
  its zone, which is how a string is addressed in this project. There are no keys.
  An IA node number, a zone label, a WCAG criterion or an argument for the design is not
  product copy. It goes in an `.anote` or nowhere.

MARKUP
  Assemble from design/system/components/ and design/system/patterns/. Every component
  has a page in design/kit/ with five blocks, and its Limits block is the one that tells
  you what it may NOT do.
  A component is missing: add it to the system first, and adding one is five things.
  Copied from design/system/CLAUDE.md rule 4, word for word:
    "Adding a component is five things: css, page in `design/kit/`, entry in `_nav.js` in
    its own level group, row in `inventory.md` with its level, `@import` in its own level
    group and NOT at the end of `index.css`."
  Only then does it go on your screen.
  A composition is not a pattern until it stands on three screens. Below that it is
  markup and it stays markup.

VALUES
  Colour, spacing and type come from design/system/tokens.css through var(). A token is
  missing: add it to tokens.css at its own level, and a COLOUR is written twice in the
  same edit, once per theme, because contrast is computed against the opposite ground and
  the two values are not the same primitive. Then read it through var(). Never a literal.

STATES
  The full set your node requires, from its state matrix in ia/docs/pages/, not just the
  four the system provides. Each state is its own file. Look at what the neighbouring
  screens of your type carry, in handoff/docs/map.md.

WIDTH. Copied from design/system/CLAUDE.md rule 7, word for word:
    "Width lives in a token, a component through `@container`, a pattern, or the shell
    through `@media`. **In the file of a screen: never.** Ladder: fluid, then container,
    then a point; one point exists and its literal is the only number allowed in a query.
    Type is fluid through `clamp()` and never switches at a point."
  The whole picture is design/kit/docs/responsive.md and design/kit/responsive.html.

MOTION. Copied from design/system/CLAUDE.md rule 8, word for word:
    "Motion names its work first, of exactly three: connection, status, response. It
    lands on a state stage 08 declared and never invents one. Duration and curve come
    from `tokens.css`, only `transform` and `opacity` are cheap, `transition: all` is
    forbidden, and **in the file of a screen: never**. A cycle and a cross document
    transition carry their own `prefers-reduced-motion` block, because the token override
    cannot reach them."
  The whole picture is design/kit/docs/motion.md and design/kit/motion.html.

BEHAVIOUR
  handoff/docs/behaviour.md. When does the error appear, what counts as valid, what
  stands in the pane when nothing is selected, where success goes.
  A row that stands in its NOT SETTLED list is NOT to be implemented by common sense.
  Raise it as a question and leave it. That list exists because behaviour is exactly
  where a plausible invention is indistinguishable from a decision.

FIXTURES
  ia/docs/pages/reading-conventions.md section 7. Seven tenants and one canonical case.
  Do not invent an eighth tenant, a new case identifier or a new timestamp: a number in a
  drawing here is a fixture and it has to be identical on every surface that shows it.

THE FILE, AND WITHOUT THIS PART THE SCREEN EXISTS ONLY ON DISK
  - It goes FLAT in design/, beside the others. No subfolder.
  - One file per state, named <screen>-<state>.html. The base state is <screen>.html.
  - It links exactly two stylesheets: ../_nav.css and system/index.css. Copy the head and
    the body skeleton from a neighbouring screen of the same shape, verbatim.
  - It carries the design only panel the other screens carry: <aside id="sidebar"></aside>,
    <script src="_shell.js"></script> with its WF_SHELL call, and <script src="_nav.js">.
  - REGISTER IT in design/_nav.js: the screen's record with its node, cluster, scope, and
    a states array with one entry per file. Without this the coverage map does not know it
    exists and design/overview.html will not render it.
  - Add its strings to voice/docs/microcopy.md section 8, with page and zone.

CHECK YOUR OWN WORK, and these are commands rather than intentions:
    node design/kit/checks/screens.mjs design <file>.html   is my screen file only markup
    node design/kit/checks/rules.mjs design <file>.html     the thirteen usage rules, both widths
    node design/kit/checks/contrast.mjs design/             every text node, both themes
    node design/kit/checks/focus.mjs design                 a real Tab walk, both themes
    node design/kit/checks/zoom.mjs design                  200% zoom and 200% font size
    node design/kit/checks/motion.mjs                       computed style, and under reduce
    node design/kit/checks/sweep.mjs                        every width from 360 up
    node design/kit/checks/coverage-map.mjs                 registry against disk, both ways
  R11 is the one you cannot answer by reading: exactly one heading renders at every width
  and that one is the h1, and the only way to know which survives is to RENDER THE SCREEN
  AT 360. Do that before you decide.

WHAT YOU CANNOT FIND, DO NOT INVENT. Write it in a list at the end of your work: what you
looked for, where you looked, and what you would have needed. That list is worth more than
a guess that looks right, because a guess that looks right is the one nobody catches.
```

---

## Why the prompt is shaped like this

**It leads to all three documents of the handoff.** A prompt that named only the system and the voice would leave `behaviour.md`, `map.md` and `a11y.md` with no reader at all, which would mean they were written for somebody who never finds out they exist.

**It carries three blocks copied word for word** from `design/system/CLAUDE.md`, rules 4, 7 and 8. They are not paraphrased on purpose. Those three sentences are what holds the system together through the next twenty features, and a paraphrase is where the drift starts.

**It ends by asking for a list of what was missing**, because the value of running it on somebody who does not know this product is not the screen. It is that list.
