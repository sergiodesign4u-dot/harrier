# Map

Stage 13, step 3.

**The question every change to somebody else's product starts with: if I touch this, what moves.** This file answers it from both ends. Downward, from a screen to the components it carries to the tokens they read. Upward, from a token to every screen it stands on.

**Reader: the new developer**, for the forward table. **Second reader: yourself in a year**, for the reverse list, which is the half you will actually open.

---

## 0. How it was taken, because a map written from memory is worth nothing

**Three sources, all of them in the repository, none of them recalled.**

| Chain | Taken from | How |
|---|---|---|
| screen to component | `design/*.html` | **Every screen opened in a real browser** and its DOM walked: for every element, every class the system declares, and the nearest ancestor that is a zone. A regular expression over the file cannot do this, because the zone of a component is its ANCESTRY and not its spelling |
| component to token | `design/system/components/*.css`, `design/system/patterns/*.css` and **`design/system/base.css`** | Every `var(--*)` in the file. `base.css` is in the list on purpose: the page frame reads tokens too and it is not a component, so a token read only by it would land in the dead list without this pass |
| zone to text | `voice/docs/microcopy.md` | The by screen sections, addressed by node number |

**Two cases the three sources do not cover, and both are about the global.**

1. **The strings of the shell, the identity strip and the connection strip** live in section 3 of `microcopy.md`, which has no "screens" column by construction: they stand everywhere. In this map they carry the zone `shell`, `Z1` or `Z2` and the screen column reads **all 62**.
2. **Components rendered by javascript rather than written in the markup** do not appear in a grep over `design/*.html` at all. `design/_shell.js` renders Z1 and Z2, which is where `annun`, `navitem`, `z1` and `z2` come from; `design/_nav.js` renders the documentation panel. **The browser walk catches these anyway**, because it reads the DOM after the scripts have run, and that is the second reason this map was taken with a browser rather than with a regular expression.

**The forward table is per screen family rather than per page**, because 62 pages are the states of 13 screens and a per page table would print the same row 62 times. The column **On every state** carries the difference: `yes` means every page of the family has it, `3 of 12` means three do, and those are the rows where a state actually differs.

**Addressing text:** this product's inventory has no abstract key. A string is addressed by **node section plus page plus zone** in `microcopy.md`, and that is what the text column of every family below names. Never the text itself: a copied string goes stale silently and the documentation starts showing pre correction wording with a confident face. And for a string that does not exist yet, the rules for writing one are `voice/docs/voice.md`, with the ruling table in `microcopy.md` section 8 as its home.

---

## 1. Forward: screen to zone to component

Text for every family below is `voice/docs/microcopy.md`, section 4, under the heading that carries the same node number. Globals, which are Z1, Z2 and the shell on all 62 pages, are section 3.

### 3.1 Case Queue, 12 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | 2 of 12 |
| Z4+Z5 the split | `fleet (pattern)` | `.fleet` | 1 | 10 of 12 |
| Z4+Z5 the split | `queue-list (pattern)` | `.queue-list` | 1 | yes |
| Z4 the list | `anote` | `.anote` | 1 | 3 of 12 |
| Z4 the list | `arriving` | `.arriving` | 1 | 1 of 12 |
| Z4 the list | `banner` | `.banner` `.banner--quiet` | 2 | 5 of 12 |
| Z4 the list | `bars` | `.bars` | 7 | 10 of 12 |
| Z4 the list | `btn` | `.btn` `.btn--primary` | 2 | 5 of 12 |
| Z4 the list | `chip` | `.chip` `.chip--ghost` `.chip--solid` | 6 | yes |
| Z4 the list | `empty` | `.empty` | 1 | 3 of 12 |
| Z4 the list | `qfoot` | `.qfoot` | 1 | yes |
| Z4 the list | `readout` | `.readout` | 1 | yes |
| Z4 the list | `row` | `.row` `.row--head` | 9 | 10 of 12 |
| Z4 the list | `rows` | `.rows` | 1 | yes |
| Z4 the list | `scopebar` | `.scopebar` | 1 | yes |
| Z4 the list | `sev` | `.sev` | 7 | 10 of 12 |
| Z4 the list | `state` | `.state` `.state--solid` `.state--ghost` | 8 | 10 of 12 |
| Z5 the pane | `banner` | `.banner` | 1 | 2 of 12 |
| Z5 the pane | `block` | `.block` | 2 | 2 of 12 |
| Z5 the pane | `btn` | `.btn` `.btn--quiet` | 3 | 2 of 12 |
| Z5 the pane | `chips-hd` | `.chips-hd` | 1 | 1 of 12 |
| Z5 the pane | `fleet-more` | `.fleet-more` | 1 | 10 of 12 |
| Z5 the pane | `frow` | `.frow` `.frow--head` | 9 | 10 of 12 |
| Z5 the pane | `key` | `.key` | 1 | 2 of 12 |
| Z5 the pane | `link` | `.link` | 1 | 2 of 12 |
| Z5 the pane | `nar` | `.nar` | 2 | 2 of 12 |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | 2 of 12 |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | 2 of 12 |
| Z5 the pane | `pane-head` | `.pane-head` | 1 | yes |
| Z5 the pane | `prov` | `.prov` | 1 | 2 of 12 |
| Z5 the pane | `rec` | `.rec` | 8 | 10 of 12 |
| Z5 the pane | `state` | `.state` `.state--solid` | 2 | 1 of 12 |
| Z5 the pane | `was` | `.was` | 7 | 10 of 12 |
| Z6 the toast stack | `link` | `.link` | 1 | 1 of 12 |
| Z6 the toast stack | `toast` | `.toast` `.toast--alert` | 4 | 2 of 12 |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |
| page root | `z6` | `.z6` | 1 | 2 of 12 |

### 4.1 Case File in the detail pane, 8 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | yes |
| Z4+Z5 the split | `queue-list (pattern)` | `.queue-list` | 1 | yes |
| Z4 the list | `bars` | `.bars` | 7 | yes |
| Z4 the list | `chip` | `.chip` `.chip--ghost` | 4 | yes |
| Z4 the list | `qfoot` | `.qfoot` | 1 | yes |
| Z4 the list | `readout` | `.readout` | 1 | yes |
| Z4 the list | `row` | `.row` `.row--head` | 9 | yes |
| Z4 the list | `rows` | `.rows` | 1 | yes |
| Z4 the list | `scopebar` | `.scopebar` | 1 | yes |
| Z4 the list | `sev` | `.sev` | 7 | yes |
| Z4 the list | `state` | `.state` `.state--solid` `.state--ghost` | 8 | yes |
| Z5 the pane | `anote` | `.anote` | 2 | yes |
| Z5 the pane | `arriving` | `.arriving` | 1 | 1 of 8 |
| Z5 the pane | `banner` | `.banner` `.banner--quiet` | 2 | 4 of 8 |
| Z5 the pane | `block` | `.block` | 5 | yes |
| Z5 the pane | `btn` | `.btn` `.btn--primary` `.btn--quiet` | 8 | yes |
| Z5 the pane | `chips-hd` | `.chips-hd` | 1 | 3 of 8 |
| Z5 the pane | `claim` | `.claim` `.claim--absence` `.claim--against` | 8 | 7 of 8 |
| Z5 the pane | `expand` | `.expand` | 1 | 6 of 8 |
| Z5 the pane | `field` | `.field` | 1 | 1 of 8 |
| Z5 the pane | `gnote` | `.gnote` | 1 | 6 of 8 |
| Z5 the pane | `hint` | `.hint` | 1 | 1 of 8 |
| Z5 the pane | `input` | `.input` | 1 | 1 of 8 |
| Z5 the pane | `key` | `.key` | 5 | yes |
| Z5 the pane | `label` | `.label` | 1 | 1 of 8 |
| Z5 the pane | `lat` | `.lat` | 1 | yes |
| Z5 the pane | `link` | `.link` | 1 | 6 of 8 |
| Z5 the pane | `mark` | `.mark` | 6 | yes |
| Z5 the pane | `nar` | `.nar` | 5 | yes |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | yes |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | yes |
| Z5 the pane | `pane-head` | `.pane-head` | 1 | yes |
| Z5 the pane | `prov` | `.prov` | 1 | yes |
| Z5 the pane | `src` | `.src` | 6 | 7 of 8 |
| Z5 the pane | `stamp` | `.stamp` | 1 | yes |
| Z5 the pane | `state` | `.state` `.state--solid` | 3 | 3 of 8 |
| Z5 the pane | `tag` | `.tag` | 2 | 6 of 8 |
| Z5 the pane | `tomb` | `.tomb` | 1 | 1 of 8 |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |

### 4.4 Reject with a reason, 6 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `scrim` | `.scrim--desk-only` | 1 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | yes |
| Z4+Z5 the split | `queue-list (pattern)` | `.queue-list` | 1 | yes |
| Z4 the list | `bars` | `.bars` | 7 | yes |
| Z4 the list | `chip` | `.chip` `.chip--ghost` | 4 | yes |
| Z4 the list | `qfoot` | `.qfoot` | 1 | yes |
| Z4 the list | `readout` | `.readout` | 1 | yes |
| Z4 the list | `row` | `.row` `.row--head` | 9 | yes |
| Z4 the list | `rows` | `.rows` | 1 | yes |
| Z4 the list | `scopebar` | `.scopebar` | 1 | yes |
| Z4 the list | `sev` | `.sev` | 7 | yes |
| Z4 the list | `state` | `.state` `.state--solid` | 7 | yes |
| Z5 the pane | `anote` | `.anote` | 1 | yes |
| Z5 the pane | `banner` | `.banner` | 1 | yes |
| Z5 the pane | `block` | `.block` | 5 | yes |
| Z5 the pane | `btn` | `.btn` `.btn--primary` | 4 | yes |
| Z5 the pane | `claim` | `.claim` `.claim--absence` `.claim--against` | 8 | yes |
| Z5 the pane | `expand` | `.expand` | 1 | yes |
| Z5 the pane | `gnote` | `.gnote` | 1 | yes |
| Z5 the pane | `key` | `.key` | 2 | yes |
| Z5 the pane | `lat` | `.lat` | 1 | yes |
| Z5 the pane | `link` | `.link` | 1 | yes |
| Z5 the pane | `mark` | `.mark` | 6 | yes |
| Z5 the pane | `nar` | `.nar` | 5 | yes |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | yes |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | yes |
| Z5 the pane | `pane-head` | `.pane-head` | 1 | yes |
| Z5 the pane | `prov` | `.prov` | 1 | yes |
| Z5 the pane | `src` | `.src` | 6 | yes |
| Z5 the pane | `stamp` | `.stamp` | 1 | yes |
| Z5 the pane | `tag` | `.tag` | 2 | yes |
| dialog | `anote` | `.anote` | 1 | 5 of 6 |
| dialog | `axisb` | `.axisb` | 1 | 3 of 6 |
| dialog | `banner` | `.banner` | 1 | 1 of 6 |
| dialog | `block` | `.block` | 2 | yes |
| dialog | `btn` | `.btn` `.btn--quiet` `.btn--primary` | 4 | yes |
| dialog | `cons` | `.cons` `.cons--gap` | 2 | 5 of 6 |
| dialog | `field` | `.field` | 1 | 2 of 6 |
| dialog | `gnote` | `.gnote` | 1 | 1 of 6 |
| dialog | `hint` | `.hint` | 1 | yes |
| dialog | `input` | `.input` | 1 | 2 of 6 |
| dialog | `key` | `.key` | 11 | yes |
| dialog | `label` | `.label` | 1 | 2 of 6 |
| dialog | `opt` | `.opt` | 9 | yes |
| dialog | `optlist` | `.optlist` | 1 | yes |
| page root | `dialog` | `.dialog` | 1 | yes |
| page root | `scrim` | `.scrim` | 1 | yes |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |

### 4.6 Escalate, 4 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | yes |
| Z4+Z5 the split | `queue-list (pattern)` | `.queue-list` | 1 | yes |
| Z4 the list | `bars` | `.bars` | 7 | yes |
| Z4 the list | `chip` | `.chip` `.chip--ghost` | 4 | yes |
| Z4 the list | `qfoot` | `.qfoot` | 1 | yes |
| Z4 the list | `readout` | `.readout` | 1 | yes |
| Z4 the list | `row` | `.row` `.row--head` | 9 | yes |
| Z4 the list | `rows` | `.rows` | 1 | yes |
| Z4 the list | `scopebar` | `.scopebar` | 1 | yes |
| Z4 the list | `sev` | `.sev` | 7 | yes |
| Z4 the list | `state` | `.state` `.state--solid` | 5 | yes |
| Z5 the pane | `anote` | `.anote` | 1 | yes |
| Z5 the pane | `block` | `.block` | 5 | yes |
| Z5 the pane | `btn` | `.btn` `.btn--primary` | 3 | yes |
| Z5 the pane | `claim` | `.claim` `.claim--absence` `.claim--against` | 8 | 3 of 4 |
| Z5 the pane | `expand` | `.expand` | 1 | 3 of 4 |
| Z5 the pane | `gnote` | `.gnote` | 1 | 3 of 4 |
| Z5 the pane | `key` | `.key` | 2 | yes |
| Z5 the pane | `lat` | `.lat` | 1 | yes |
| Z5 the pane | `link` | `.link` | 1 | 3 of 4 |
| Z5 the pane | `mark` | `.mark` | 6 | yes |
| Z5 the pane | `nar` | `.nar` | 5 | yes |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | yes |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | yes |
| Z5 the pane | `pane-head` | `.pane-head` | 1 | yes |
| Z5 the pane | `prov` | `.prov` | 1 | yes |
| Z5 the pane | `src` | `.src` | 6 | 3 of 4 |
| Z5 the pane | `stamp` | `.stamp` | 1 | yes |
| Z5 the pane | `tag` | `.tag` | 2 | 3 of 4 |
| Z5 the pane | `tomb` | `.tomb` | 1 | 1 of 4 |
| dialog | `anote` | `.anote` | 3 | yes |
| dialog | `banner` | `.banner` | 1 | 1 of 4 |
| dialog | `block` | `.block` | 3 | yes |
| dialog | `btn` | `.btn` `.btn--primary` `.btn--quiet` | 4 | yes |
| dialog | `cons` | `.cons` | 1 | yes |
| dialog | `contact` | `.contact` | 1 | yes |
| dialog | `field` | `.field` | 3 | yes |
| dialog | `hint` | `.hint` | 1 | yes |
| dialog | `input` | `.input` | 3 | yes |
| dialog | `key` | `.key` | 2 | yes |
| dialog | `label` | `.label` | 3 | yes |
| dialog | `opt` | `.opt` | 1 | 1 of 4 |
| dialog | `optlist` | `.optlist` | 1 | 1 of 4 |
| page root | `dialog` | `.dialog` | 1 | yes |
| page root | `scrim` | `.scrim` | 1 | yes |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |

### 5.1 Decision log, 5 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | yes |
| Z4+Z5 the split | `queue-list (pattern)` | `.queue-list` `.queue-list--log` | 2 | yes |
| Z4 the list | `arriving` | `.arriving` | 1 | 1 of 5 |
| Z4 the list | `banner` | `.banner` | 2 | yes |
| Z4 the list | `bars` | `.bars` | 8 | 3 of 5 |
| Z4 the list | `btn` | `.btn` | 2 | yes |
| Z4 the list | `chip` | `.chip` `.chip--ghost` `.chip--solid` | 8 | yes |
| Z4 the list | `empty` | `.empty` `.empty--tight` | 2 | 2 of 5 |
| Z4 the list | `link` | `.link` | 2 | 1 of 5 |
| Z4 the list | `qfoot` | `.qfoot` | 1 | yes |
| Z4 the list | `readout` | `.readout` | 1 | yes |
| Z4 the list | `row` | `.row` `.row--head` `.row--log` | 19 | 3 of 5 |
| Z4 the list | `rows` | `.rows` `.rows--log` | 2 | yes |
| Z4 the list | `scopebar` | `.scopebar` | 1 | yes |
| Z4 the list | `sev` | `.sev` | 8 | 3 of 5 |
| Z4 the list | `state` | `.state` `.state--solid` | 9 | 3 of 5 |
| Z5 the pane | `block` | `.block` | 3 | yes |
| Z5 the pane | `btn` | `.btn` `.btn--primary` `.btn--quiet` | 6 | 3 of 5 |
| Z5 the pane | `chips-hd` | `.chips-hd` | 1 | 2 of 5 |
| Z5 the pane | `claim` | `.claim` | 2 | 1 of 5 |
| Z5 the pane | `covers` | `.covers` | 1 | 2 of 5 |
| Z5 the pane | `field` | `.field` | 4 | 1 of 5 |
| Z5 the pane | `gnote` | `.gnote` | 1 | 1 of 5 |
| Z5 the pane | `hint` | `.hint` | 1 | 1 of 5 |
| Z5 the pane | `input` | `.input` | 4 | 1 of 5 |
| Z5 the pane | `key` | `.key` | 1 | 3 of 5 |
| Z5 the pane | `label` | `.label` | 4 | 1 of 5 |
| Z5 the pane | `link` | `.link` | 1 | 1 of 5 |
| Z5 the pane | `nar` | `.nar` | 4 | yes |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | yes |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | 3 of 5 |
| Z5 the pane | `pane-head` | `.pane-head` | 1 | yes |
| Z5 the pane | `prov` | `.prov` | 1 | 2 of 5 |
| Z5 the pane | `src` | `.src` | 2 | 1 of 5 |
| Z5 the pane | `stamp` | `.stamp` | 1 | 2 of 5 |
| Z5 the pane | `state` | `.state` `.state--solid` | 2 | 2 of 5 |
| Z5 the pane | `tomb` | `.tomb` | 1 | 1 of 5 |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |

### 5.4 Log entry, ?as-of, 5 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `z4` | `.z4--entry` | 1 | yes |
| Z4 the list | `addr` | `.addr` | 1 | yes |
| Z4 the list | `anote` | `.anote` | 4 | yes |
| Z4 the list | `banner` | `.banner` | 1 | 1 of 5 |
| Z4 the list | `block` | `.block` | 7 | yes |
| Z4 the list | `btn` | `.btn` `.btn--quiet` | 4 | yes |
| Z4 the list | `claim` | `.claim` `.claim--absence` `.claim--against` | 7 | 3 of 5 |
| Z4 the list | `doc` | `.doc` | 1 | yes |
| Z4 the list | `expand` | `.expand` | 1 | 2 of 5 |
| Z4 the list | `frame` | `.frame` | 1 | yes |
| Z4 the list | `lat` | `.lat` | 1 | 4 of 5 |
| Z4 the list | `mark` | `.mark` | 6 | 4 of 5 |
| Z4 the list | `nar` | `.nar` `.nar--sep` | 9 | yes |
| Z4 the list | `prov` | `.prov` | 2 | 4 of 5 |
| Z4 the list | `rail-foot` | `.rail-foot` | 1 | yes |
| Z4 the list | `src` | `.src` | 5 | 3 of 5 |
| Z4 the list | `tag` | `.tag` | 2 | 3 of 5 |
| Z4 the list | `tomb` | `.tomb` `.tomb--all` | 2 | 3 of 5 |
| page root | `rail` | `.rail` | 1 | yes |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |

### 2.1 Shift brief, 7 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | yes |
| Z4+Z5 the split | `shift-brief (pattern)` | `.shift-brief` | 1 | yes |
| Z4 the list | `arriving` | `.arriving` | 1 | 1 of 7 |
| Z4 the list | `banner` | `.banner` `.banner--quiet` | 3 | yes |
| Z4 the list | `bline` | `.bline` | 6 | yes |
| Z4 the list | `block` | `.block` | 3 | yes |
| Z4 the list | `brief` | `.brief` | 1 | yes |
| Z4 the list | `btn` | `.btn` | 1 | yes |
| Z4 the list | `empty` | `.empty` `.empty--tight` | 2 | 1 of 7 |
| Z4 the list | `expand` | `.expand` | 3 | 2 of 7 |
| Z4 the list | `field` | `.field` | 3 | 2 of 7 |
| Z4 the list | `gnote` | `.gnote` | 2 | yes |
| Z4 the list | `input` | `.input` | 3 | 2 of 7 |
| Z4 the list | `label` | `.label` | 3 | 2 of 7 |
| Z4 the list | `link` | `.link` | 3 | 3 of 7 |
| Z4 the list | `nar` | `.nar` | 2 | 1 of 7 |
| Z4 the list | `qfoot` | `.qfoot` | 1 | yes |
| Z4 the list | `readout` | `.readout` | 1 | yes |
| Z4 the list | `row-moved` | `.row-moved` `.row-moved--head` | 8 | 5 of 7 |
| Z4 the list | `rows-moved` | `.rows-moved` | 1 | 5 of 7 |
| Z4 the list | `state` | `.state` `.state--solid` | 8 | 5 of 7 |
| Z4 the list | `tomb` | `.tomb` | 1 | 2 of 7 |
| Z5 the pane | `anote` | `.anote` | 1 | yes |
| Z5 the pane | `block` | `.block` | 2 | yes |
| Z5 the pane | `btn` | `.btn` `.btn--primary` `.btn--quiet` | 4 | 6 of 7 |
| Z5 the pane | `frow` | `.frow` `.frow--flush` `.frow--head` | 5 | 6 of 7 |
| Z5 the pane | `gnote` | `.gnote` | 1 | yes |
| Z5 the pane | `key` | `.key` | 1 | 5 of 7 |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | yes |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | 6 of 7 |
| Z5 the pane | `pane-head` | `.pane-head` | 1 | yes |
| Z5 the pane | `rec` | `.rec` | 2 | 6 of 7 |
| Z5 the pane | `rota` | `.rota` | 1 | yes |
| Z5 the pane | `was` | `.was` | 1 | 6 of 7 |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |

### 5.6 History of one case, 2 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | yes |
| Z4+Z5 the split | `queue-list (pattern)` | `.queue-list` `.queue-list--log` | 2 | yes |
| Z4 the list | `banner` | `.banner` | 1 | yes |
| Z4 the list | `bars` | `.bars` | 5 | yes |
| Z4 the list | `btn` | `.btn` | 1 | yes |
| Z4 the list | `chip` | `.chip` `.chip--ghost` `.chip--solid` | 8 | yes |
| Z4 the list | `qfoot` | `.qfoot` | 1 | yes |
| Z4 the list | `readout` | `.readout` | 1 | yes |
| Z4 the list | `row` | `.row` `.row--head` `.row--log` | 13 | yes |
| Z4 the list | `rows` | `.rows` `.rows--log` | 2 | yes |
| Z4 the list | `scopebar` | `.scopebar` | 1 | yes |
| Z4 the list | `sev` | `.sev` | 5 | yes |
| Z4 the list | `state` | `.state` `.state--solid` | 6 | yes |
| Z5 the pane | `block` | `.block` | 2 | yes |
| Z5 the pane | `btn` | `.btn` `.btn--primary` `.btn--quiet` | 6 | yes |
| Z5 the pane | `covers` | `.covers` | 1 | yes |
| Z5 the pane | `key` | `.key` | 1 | yes |
| Z5 the pane | `nar` | `.nar` | 2 | yes |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | yes |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | yes |
| Z5 the pane | `pane-head` | `.pane-head` | 1 | yes |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |

### 4.2 Case File, standalone route, 3 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | yes |
| Z5 the pane | `anote` | `.anote` | 2 | yes |
| Z5 the pane | `banner` | `.banner` | 2 | yes |
| Z5 the pane | `block` | `.block` | 6 | yes |
| Z5 the pane | `btn` | `.btn` `.btn--primary` `.btn--quiet` | 9 | yes |
| Z5 the pane | `chips-hd` | `.chips-hd` | 1 | 1 of 3 |
| Z5 the pane | `claim` | `.claim` `.claim--absence` `.claim--against` | 8 | yes |
| Z5 the pane | `expand` | `.expand` | 1 | yes |
| Z5 the pane | `gnote` | `.gnote` | 2 | yes |
| Z5 the pane | `key` | `.key` | 5 | yes |
| Z5 the pane | `lat` | `.lat` | 1 | yes |
| Z5 the pane | `link` | `.link` | 1 | yes |
| Z5 the pane | `mark` | `.mark` | 6 | yes |
| Z5 the pane | `nar` | `.nar` | 6 | yes |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | yes |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | yes |
| Z5 the pane | `pane-head` | `.pane-head` `.pane-head--standalone` | 2 | yes |
| Z5 the pane | `prov` | `.prov` | 1 | yes |
| Z5 the pane | `sa-offer` | `.sa-offer` | 1 | yes |
| Z5 the pane | `src` | `.src` | 6 | yes |
| Z5 the pane | `stamp` | `.stamp` | 1 | yes |
| Z5 the pane | `state` | `.state` `.state--solid` | 3 | 1 of 3 |
| Z5 the pane | `tag` | `.tag` | 2 | yes |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |

### 1.1 Sign in, 5 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `banner` | `.banner` `.banner--quiet` | 2 | 4 of 5 |
| shell | `block` | `.block` | 1 | 3 of 5 |
| shell | `btn` | `.btn` `.btn--primary` `.btn--quiet` | 4 | yes |
| shell | `door` | `.door` | 1 | yes |
| shell | `doorcard` | `.doorcard` | 1 | yes |
| shell | `field` | `.field` | 1 | yes |
| shell | `hint` | `.hint` | 1 | yes |
| shell | `input` | `.input` | 1 | yes |
| shell | `label` | `.label` | 1 | yes |
| shell | `prov` | `.prov` | 1 | 3 of 5 |
| shell | `screen` | `.screen` | 1 | yes |
| page root | `shell` | `.shell` | 1 | yes |

### 8.1 Not found, 1 page

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `z4` | `.z4--solo` | 1 | yes |
| Z4 the list | `addr` | `.addr` | 1 | yes |
| Z4 the list | `block` | `.block` | 1 | yes |
| Z4 the list | `btn` | `.btn` | 1 | yes |
| Z4 the list | `link` | `.link` | 2 | yes |
| Z4 the list | `miss` | `.miss` | 1 | yes |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |

### 8.2 Service unavailable, 3 pages

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| shell | `z1` | `.z1--out` | 1 | 2 of 3 |
| Z1 identity strip | `annun` | `.annun` | 1 | 1 of 3 |
| Z1 identity strip | `navitem` | `.navitem` | 3 | 1 of 3 |
| Z4+Z5 the split | `z4` | `.z4--sys` | 1 | yes |
| Z4 the list | `anote` | `.anote` | 4 | yes |
| Z4 the list | `banner` | `.banner` | 1 | yes |
| Z4 the list | `block` | `.block` | 1 | yes |
| Z4 the list | `btn` | `.btn` `.btn--primary` `.btn--quiet` | 4 | yes |
| Z4 the list | `contact` | `.contact` | 1 | yes |
| Z4 the list | `outage` | `.outage` | 1 | yes |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | 1 of 3 |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |

### 0.5 Keyboard map, 1 page

| Zone | Component | Classes as written | Max on one page | On every state |
|---|---|---|---|---|
| shell | `screen` | `.screen` | 1 | yes |
| Z1 identity strip | `annun` | `.annun` | 1 | yes |
| Z1 identity strip | `navitem` | `.navitem` | 3 | yes |
| Z4+Z5 the split | `scrim` | `.scrim--desk-only` | 1 | yes |
| Z4+Z5 the split | `case-pane (pattern)` | `.case-pane` | 1 | yes |
| Z4+Z5 the split | `queue-list (pattern)` | `.queue-list` | 1 | yes |
| Z4 the list | `bars` | `.bars` | 7 | yes |
| Z4 the list | `chip` | `.chip` `.chip--ghost` | 4 | yes |
| Z4 the list | `qfoot` | `.qfoot` | 1 | yes |
| Z4 the list | `readout` | `.readout` | 1 | yes |
| Z4 the list | `row` | `.row` `.row--head` | 9 | yes |
| Z4 the list | `rows` | `.rows` | 1 | yes |
| Z4 the list | `scopebar` | `.scopebar` | 1 | yes |
| Z4 the list | `sev` | `.sev` | 7 | yes |
| Z4 the list | `state` | `.state` `.state--solid` | 5 | yes |
| Z5 the pane | `anote` | `.anote` | 1 | yes |
| Z5 the pane | `banner` | `.banner` | 1 | yes |
| Z5 the pane | `block` | `.block` | 5 | yes |
| Z5 the pane | `btn` | `.btn` `.btn--primary` | 7 | yes |
| Z5 the pane | `claim` | `.claim` `.claim--absence` `.claim--against` | 8 | yes |
| Z5 the pane | `expand` | `.expand` | 1 | yes |
| Z5 the pane | `gnote` | `.gnote` | 1 | yes |
| Z5 the pane | `key` | `.key` | 5 | yes |
| Z5 the pane | `lat` | `.lat` | 1 | yes |
| Z5 the pane | `link` | `.link` | 1 | yes |
| Z5 the pane | `mark` | `.mark` | 6 | yes |
| Z5 the pane | `nar` | `.nar` | 5 | yes |
| Z5 the pane | `pane-body` | `.pane-body` | 1 | yes |
| Z5 the pane | `pane-foot` | `.pane-foot` | 1 | yes |
| Z5 the pane | `pane-head` | `.pane-head` | 1 | yes |
| Z5 the pane | `prov` | `.prov` | 1 | yes |
| Z5 the pane | `src` | `.src` | 6 | yes |
| Z5 the pane | `stamp` | `.stamp` | 1 | yes |
| Z5 the pane | `tag` | `.tag` | 2 | yes |
| dialog | `banner` | `.banner` `.banner--quiet` | 3 | yes |
| dialog | `block` | `.block` | 7 | yes |
| dialog | `btn` | `.btn` `.btn--primary` | 2 | yes |
| dialog | `gnote` | `.gnote` | 8 | yes |
| dialog | `hint` | `.hint` | 1 | yes |
| dialog | `input` | `.input` | 4 | yes |
| dialog | `key` | `.key` `.key--none` | 34 | yes |
| dialog | `keyrow` | `.keyrow` `.keyrow--set` | 25 | yes |
| dialog | `optlist` | `.optlist` | 7 | yes |
| scrim | `dialog` | `.dialog--map` | 1 | yes |
| page root | `dialog` | `.dialog` | 1 | yes |
| page root | `scrim` | `.scrim` | 1 | yes |
| page root | `shell` | `.shell` | 1 | yes |
| page root | `z1` | `.z1` | 1 | yes |
| page root | `z2` | `.z2` | 1 | yes |
| page root | `z4` | `.z4` | 1 | yes |
| page root | `z45` | `.z45` | 1 | yes |
| page root | `z5` | `.z5` | 1 | yes |

---

## 2. Reverse: token to screens, and it is an inversion

**This is the working half of the file.** It is not a second pass over the code, it is the table above turned around: two editions of the same data drift apart, and the one that drifts first is the one nobody opens.

**It has two knees, and without the second one the idle control would raise a false alarm on the entire primitive level.** A component reads colour only through a semantic role, which is the rule of stage 08, so a direct search for `var(--*)` in the components names no primitive at all. The chain therefore opens as **component to semantic role to primitive**, and a token is dead only when NO chain reaches it, not when no component names it directly.

**Read the columns like this.** `Read directly by` is the component that writes the token's own name. `Reached through` is the role that resolves to it. `Screens it stands on` is the count after both knees.

| Token | Read directly by | Reached through | Screens it stands on |
|---|---|---|---|
| `--amber-100` | nothing | `--bg-selected` | 42 |
| `--amber-500` | nothing | `--bg-action`, `--color-focus`, `--line-current`, `--text-accent` | all 62 |
| `--amber-600` | `btn` | read directly only | 57 |
| `--amber-700` | nothing | `--color-focus`, `--line-current`, `--text-accent` | all 62 |
| `--amber-950` | nothing | `--text-on-action` | 57 |
| `--bg-action` | `btn` | read directly only | 57 |
| `--bg-active` | `bline`, `btn`, `chip`, `opt`, `row-moved` | read directly only | 62 |
| `--bg-hover` | `bline`, `btn`, `chip`, `opt`, `row`, `row-moved` | read directly only | 62 |
| `--bg-invert` | `annun`, `arriving`, `chip`, `opt`, `rail`, `state` | read directly only | 51 |
| `--bg-page` | `banner`, `base`, `btn`, `chip`, `dialog`, `doorcard`, `frame`, `input`, `outage`, `screen`, `state`, `toast`, `z1`, `z2`, `z4`, `z5`, `z6` | `--bg-scrim` | all 62 |
| `--bg-quiet` | `arriving` | read directly only | 4 |
| `--bg-scrim` | `scrim` | read directly only | 11 |
| `--bg-selected` | `frow`, `row` | read directly only | 42 |
| `--bg-surface` | `addr`, `door`, `expand`, `frow`, `lat`, `opt`, `rail-foot`, `rota`, `row`, `z2`, `z5` | read directly only | 63 |
| `--bp-split-panes` | nothing | read directly only | 0 |
| `--clay-400` | nothing | `--text-sev-high` | 34 |
| `--clay-500` | nothing | read directly only | 0 |
| `--clay-600` | nothing | `--text-sev-high` | 34 |
| `--color-focus` | nothing | `--focus-ring` | all 62 |
| `--dur-cycle` | `arriving` | read directly only | 4 |
| `--dur-fast` | `bline`, `btn`, `chip`, `frow`, `input`, `link`, `navitem`, `opt`, `row`, `row-moved`, `src`, `toast`, `z1` | read directly only | 63 |
| `--ease-enter` | nothing | read directly only | 0 |
| `--ease-standard` | `arriving`, `bline`, `btn`, `chip`, `frow`, `input`, `link`, `navitem`, `opt`, `row`, `row-moved`, `src`, `toast`, `z1` | read directly only | 63 |
| `--focus-ring` | `base` | read directly only | all 62 |
| `--font-mono` | `annun`, `anote`, `axisb`, `bline`, `block`, `covers`, `doc`, `door`, `fleet-more`, `frow`, `key`, `keyrow`, `label`, `mark`, `nar`, `opt`, `outage`, `prov`, `qfoot`, `rail`, `rail-foot`, `rec`, `rota`, `row`, `row-moved`, `sev`, `src`, `stamp`, `state`, `tag`, `toast`, `z1`, `z2`, `z6` | read directly only | 63 |
| `--font-sans` | `base`, `btn`, `chip`, `contact`, `dialog`, `doc`, `door`, `input`, `miss`, `outage`, `pane-head`, `z1` | read directly only | all 62 |
| `--leading` | `base`, `input`, `miss`, `toast` | read directly only | all 62 |
| `--leading-tight` | `contact`, `dialog`, `doc`, `door`, `keyrow`, `miss`, `outage`, `pane-head` | read directly only | 62 |
| `--line-control` | `chip` | `--rule-control` | 62 |
| `--line-current` | `navitem`, `row` | read directly only | 40 |
| `--line-edge` | `bars` | `--nav-rule`, `--rule-edge` | all 62 |
| `--line-hover` | `btn`, `chip`, `input`, `toast`, `z1` | read directly only | 63 |
| `--line-record` | `frame`, `rail-foot` | `--line-hover` | 63 |
| `--line-separator` | `banner`, `btn`, `expand` | `--rule-hair` | all 62 |
| `--measure` | `base`, `miss` | read directly only | all 62 |
| `--move-sm` | nothing | read directly only | 0 |
| `--nav-active` | nothing | read directly only | 0 |
| `--nav-badge` | nothing | read directly only | 0 |
| `--nav-fg` | nothing | read directly only | 0 |
| `--nav-muted` | nothing | read directly only | 0 |
| `--nav-rule` | nothing | read directly only | 0 |
| `--opacity-disabled` | `btn` | read directly only | 57 |
| `--pane-w` | `scrim`, `z5` | read directly only | 48 |
| `--radius-object` | nothing | read directly only | 0 |
| `--radius-ui` | `addr`, `axisb`, `banner`, `btn`, `chip`, `cons`, `contact`, `dialog`, `doorcard`, `frame`, `input`, `key`, `lat`, `optlist`, `qfoot`, `rail`, `rota`, `state`, `toast`, `tomb`, `z1`, `z6` | read directly only | 63 |
| `--row-tracks` | `row` | read directly only | 39 |
| `--row-tracks-log` | `row` | read directly only | 39 |
| `--row-tracks-moved` | `row-moved` | read directly only | 39 |
| `--rule-control` | `btn`, `chip`, `input`, `qfoot`, `state` | read directly only | 62 |
| `--rule-edge` | `annun`, `banner`, `base`, `contact`, `dialog`, `doorcard`, `frow`, `optlist`, `outage`, `pane-foot`, `pane-head`, `row`, `row-moved`, `toast`, `z1`, `z2`, `z4`, `z5`, `z6` | read directly only | all 62 |
| `--rule-hair` | `addr`, `base`, `bline`, `claim`, `cons`, `door`, `frow`, `keyrow`, `lat`, `miss`, `opt`, `outage`, `prov`, `qfoot`, `readout`, `rota`, `row`, `row-moved`, `rows-moved`, `sa-offer`, `scopebar`, `stamp`, `toast`, `z1`, `z2`, `z6` | read directly only | all 62 |
| `--s2` | nothing | read directly only | 0 |
| `--s4` | nothing | read directly only | 0 |
| `--size-lg` | `bline`, `contact`, `dialog`, `miss`, `pane-head`, `tomb`, `z1` | read directly only | 56 |
| `--size-md` | `base`, `btn`, `empty`, `input`, `miss`, `navitem`, `outage`, `row`, `toast`, `tomb` | read directly only | all 62 |
| `--size-sm` | `addr`, `axisb`, `banner`, `bline`, `cons`, `contact`, `covers`, `dialog`, `doc`, `door`, `empty`, `expand`, `frow`, `keyrow`, `lat`, `nar`, `outage`, `pane-head`, `rail-foot`, `readout`, `rota`, `row`, `row-moved`, `toast`, `tomb` | read directly only | 63 |
| `--size-xl` | `doc`, `door`, `miss`, `outage`, `pane-head` | read directly only | 62 |
| `--size-xs` | `annun`, `anote`, `axisb`, `bline`, `block`, `chip`, `covers`, `fleet-more`, `frow`, `gnote`, `hint`, `key`, `keyrow`, `label`, `lat`, `mark`, `miss`, `nar`, `opt`, `outage`, `prov`, `qfoot`, `rail`, `rota`, `row`, `row-moved`, `sa-offer`, `src`, `stamp`, `state`, `tag`, `toast`, `was`, `z1`, `z2`, `z6` | read directly only | 63 |
| `--slate-300` | nothing | `--text-sev-low` | 34 |
| `--slate-500` | nothing | `--text-sev-low` | 34 |
| `--space-1` | `annun`, `anote`, `bline`, `chip`, `chips-hd`, `covers`, `dialog`, `door`, `field`, `key`, `keyrow`, `miss`, `outage`, `pane-head`, `qfoot`, `row`, `row-moved`, `state`, `toast`, `z6` | read directly only | 63 |
| `--space-2` | `addr`, `annun`, `anote`, `axisb`, `banner`, `bline`, `block`, `btn`, `case-pane`, `chip`, `chips-hd`, `claim`, `cons`, `contact`, `covers`, `dialog`, `doc`, `door`, `empty`, `expand`, `frow`, `gnote`, `input`, `keyrow`, `lat`, `miss`, `nar`, `navitem`, `opt`, `outage`, `pane-foot`, `prov`, `qfoot`, `rail`, `rail-foot`, `readout`, `rota`, `row`, `row-moved`, `scopebar`, `sev`, `stamp`, `state`, `z1`, `z6` | `--s2` | 63 |
| `--space-3` | `addr`, `annun`, `anote`, `axisb`, `banner`, `bline`, `btn`, `case-pane`, `cons`, `contact`, `dialog`, `door`, `expand`, `fleet-more`, `frow`, `input`, `keyrow`, `lat`, `miss`, `nar`, `opt`, `outage`, `pane-body`, `pane-foot`, `pane-head`, `rail`, `rail-foot`, `rota`, `row`, `row-moved`, `sa-offer`, `scopebar`, `toast`, `tomb`, `z1`, `z2`, `z4`, `z6` | read directly only | 63 |
| `--space-4` | `brief`, `dialog`, `doc`, `door`, `doorcard`, `empty`, `expand`, `fleet-more`, `frow`, `miss`, `outage`, `pane-body`, `pane-foot`, `pane-head`, `qfoot`, `queue-list`, `rail`, `rail-foot`, `readout`, `row`, `row-moved`, `scopebar`, `shift-brief`, `z1`, `z2`, `z4`, `z6` | `--s4` | 63 |
| `--space-5` | `brief`, `doc`, `door`, `doorcard`, `empty`, `frame`, `miss`, `outage`, `pane-body`, `scrim`, `toast`, `tomb`, `z1` | read directly only | 58 |
| `--space-6` | `brief`, `outage`, `scrim`, `z6` | read directly only | 23 |
| `--space-7` | `dialog`, `door`, `empty`, `miss`, `outage`, `sa-offer` | read directly only | 58 |
| `--text-accent` | `annun`, `expand`, `frow`, `row`, `z2` | `--nav-active`, `--nav-badge` | 48 |
| `--text-divider` | `annun`, `z2` | read directly only | 1 |
| `--text-hover` | `base`, `link`, `navitem`, `src`, `toast`, `z1` | read directly only | all 62 |
| `--text-on-action` | `btn` | read directly only | 57 |
| `--text-on-invert` | `annun`, `chip`, `opt`, `rail`, `state` | read directly only | 50 |
| `--text-primary` | `axisb`, `banner`, `base`, `bline`, `btn`, `chip`, `cons`, `contact`, `empty`, `input`, `miss`, `nar`, `navitem`, `outage`, `pane-head`, `prov`, `readout`, `rec`, `rota`, `row`, `state`, `tomb` | `--nav-fg`, `--text-hover` | all 62 |
| `--text-secondary` | `anote`, `axisb`, `banner`, `base`, `bline`, `block`, `btn`, `chip`, `claim`, `cons`, `contact`, `covers`, `dialog`, `doc`, `door`, `empty`, `fleet-more`, `frow`, `gnote`, `hint`, `key`, `keyrow`, `label`, `lat`, `link`, `miss`, `nar`, `navitem`, `opt`, `outage`, `pane-head`, `prov`, `qfoot`, `rail-foot`, `readout`, `rota`, `row`, `row-moved`, `sa-offer`, `stamp`, `state`, `tag`, `toast`, `tomb`, `was`, `z1`, `z2`, `z6` | `--nav-muted` | all 62 |
| `--text-sev-high` | `bars`, `sev` | read directly only | 34 |
| `--text-sev-low` | `bars`, `sev` | read directly only | 34 |
| `--text-sev-medium` | `bars`, `sev` | read directly only | 34 |
| `--track-display` | nothing | read directly only | 0 |
| `--track-mono` | `tag` | read directly only | 22 |
| `--track-wordmark` | nothing | read directly only | 0 |
| `--warm-0` | nothing | `--bg-page` | all 62 |
| `--warm-100` | nothing | `--bg-active`, `--bg-quiet`, `--line-separator`, `--text-divider` | all 62 |
| `--warm-200` | nothing | `--text-secondary` | all 62 |
| `--warm-25` | nothing | `--bg-hover`, `--bg-surface` | 63 |
| `--warm-300` | nothing | `--line-edge`, `--text-sev-medium` | all 62 |
| `--warm-400` | nothing | `--line-control` | 62 |
| `--warm-50` | nothing | `--bg-invert`, `--line-record`, `--text-on-invert`, `--text-primary` | all 62 |
| `--warm-500` | nothing | `--line-edge`, `--text-secondary` | all 62 |
| `--warm-600` | nothing | `--text-sev-medium` | 34 |
| `--warm-800` | nothing | `--bg-active`, `--bg-selected` | 62 |
| `--warm-850` | nothing | `--bg-quiet`, `--line-separator`, `--text-divider` | all 62 |
| `--warm-900` | nothing | `--bg-hover`, `--bg-invert`, `--bg-surface` | 63 |
| `--warm-950` | nothing | `--bg-page`, `--line-record`, `--text-on-invert`, `--text-primary` | all 62 |
| `--width-dialog` | `dialog` | read directly only | 51 |
| `--width-dialog-wide` | `dialog` | read directly only | 51 |
| `--width-frame` | `frame` | read directly only | 5 |
| `--width-sheet` | `z5` | read directly only | 48 |
| `--width-toast` | `z6` | read directly only | 2 |
| `--zone-notice-clear` | `z45` | read directly only | 57 |
| `--zone-strip` | `z2` | read directly only | 1 |
| `--zone-top` | `z1` | read directly only | 3 |

### The row the reader of step 1 got wrong, and it is the reason this table exists

A reader with clean context, having read `tokens.css` end to end, concluded that changing the accent means editing `--color-accent` at the primitive level. **There is no such token.** The line above says what is true: the primitive is `--amber-500`, nothing reads it directly, four roles resolve to it, and it stands on **all 62 screens**. The same reader named `--color-rule` for a ratio that belongs to `--line-edge`.

Both are the same failure and it is not a failure of attention: `tokens.css` explains its architecture better than it indexes its own names. **A table of names is the cure, and the reason it is generated rather than typed is that a typed one would have the same two errors in it.**

---

## 3. Idle control

### Tokens that stand on no product screen: 14 of 101

Not one of them is a defect by itself, and **three classes are all it is**. The rule of this project is that a record covering nothing fails the check as loudly as an undeclared case, so all fourteen are named rather than counted.

| Token | Where it is actually read | Verdict |
|---|---|---|
| `--nav-fg`, `--nav-active`, `--nav-muted`, `--nav-rule`, `--nav-badge` | `/_nav.css` and `design/_nav.js`, the documentation chrome | **Alive, and outside the product on purpose.** The panel is how you browse the case study; it is not part of the console |
| `--track-display`, `--track-wordmark`, `--radius-object`, `--clay-500` | `design/overview.html`, `design/kit/color.html`, `design/kit/typography.html`, `design/concept/`. `tokens.css` already says of `--clay-500` that its one use is that swatch | **Alive on the stand.** A token whose only reader is the page that documents it |
| `--s4` | **Inline on two screens**, `queue-streaming.html` and `queue-empty.html`, as `style="padding:var(--s4)"` | **Alive, and it is the one row a search of the component files misses**, because a screen reading a token in an attribute is legal and a screen INVENTING a value is not. Named in `tokens.css`, and its removal is a backlog decision |
| `--s2` | **Nowhere.** `tokens.css` says so itself: it is carried only so that removing the pair is one decision rather than two | **Declared dead, and it was declared before this stage looked** |
| `--bp-split-panes` | **Nowhere, and it cannot be read.** `@media` is resolved before the cascade of custom properties, so the literal stands in the query and the token is the register that every query is checked against | **Alive as a register**, and this is the one row where having no reader is the design |
| **`--ease-enter` and `--move-sm`** | **Nowhere in the repository.** Not a component, not a screen, not the stand, not an inline attribute | **The one finding of this control.** Both were declared at stage 11 for the work motion calls a CONNECTION, and this product has no connection motion: every screen is a separate document, so the one moment that would have used them is answered once by `@view-transition` in `base.css`. `--move-sm` is even overridden to zero under `prefers-reduced-motion`, which is an override of something nobody reads. **Not removed here**, because the handoff documents the product rather than edits it. Row in `design/kit/docs/backlog.md` |

### Components that stand on no screen: 0 of 79

Seventy five components and four patterns, and **every one of them is on at least one page**. This was asked at stage 08 against a sample of five screens and again at stage 12 against the whole product; this pass is the reconciliation and it agrees with stage 12 row for row, which is what it was for. A disagreement here would have meant the map was wrong, not the register.

### Screens in the registry with no row in the map: 0

**Roll call, as this map was taken.** Screens in `design/_nav.js`: **19**. In this map: **13**, which is 62 pages. Deliberately not: **6**, and they were the LATER nodes 6.1, 6.2, 7.1, 7.2, 7.3 and 8.3, which carried a registry record with `colour: 0` and no file on disk. `design/overview.html` renders them as work not done rather than hiding them, so nothing here needed adding to the coverage map.

**Both directions of the reconciliation are clean:** 62 files on disk, 62 records in the registry, 0 in one and not the other. That is `design/kit/checks/coverage-map.mjs`, and it is worth running before believing any of this.

**7.1 was built after this map was taken, and this paragraph is the honest form of that.** `design/tenant.html` and its three states are on disk and in the registry, `coverage-map.mjs` now reports **66 and 66, clean in both directions**, and the count of LATER screens with no grey original is still **6**, because 7.1 never had a wireframe and its record keeps `grey: false`. **It has no row in the forward table above, and that row is owed rather than missing.** Section 0 says every chain in this file was taken by opening the page in a real browser and walking the rendered DOM, because the zone of a component is its ancestry rather than its spelling and two of the components on every screen are rendered by javascript. **A row typed out of the markup would look exactly like a row that was measured**, which is the one thing this file cannot afford. Until the walk is run: 7.1 carries the `queue-list` filling of Z4 and the `case-pane` filling of Z5, and it introduces no component, no pattern and no token that the table above does not already list.

### The census, reconciled

The third census of stage 12 walked every control in the product and recorded 23 computed properties each. **Every control it found has a component in the table above**, because that is what the census closing at zero means: no control in the product renders without a class the system declares. The reconciliation is the count, and the count is the same corpus, 62 pages.

---

## 4. Where the text comes from, and how to write text that does not exist yet

The map names an address in `voice/docs/microcopy.md`. It does not name the string, and it never will.

- **To read what a screen says today:** open the built screen. That is the applied text, and it is the answer the rollout agents reached independently on every disagreement they met.
- **To find out WHY it says that:** `voice/docs/microcopy.md` section 8, the ruling table of stage 05.
- **To write a sentence nobody has written yet:** `voice/docs/voice.md`. Five rules bind every string: speak to the analyst and to the person reading the record months later, never in the third person about her; the cheapest correct thing first and depth one key away; a number names its claim, its scope and its window, count first and never a bare percentage; say what is true about the machine including what it did not find, and Clerk files and proposes rather than thinks or believes; one invented noun, `latitude`, and one invented name, `Clerk`, with no article. The dictionary and the banned list are in the same file.
- **An IA node number, a zone label, a WCAG criterion or an argument for the design belongs in an `.anote` or nowhere.** It is not product copy, and 40 of the 62 pages carry one while 22 have nothing of that kind to say.
