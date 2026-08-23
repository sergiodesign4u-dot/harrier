# wireframes/ is grey, and it stays grey

1. **No colour, type family, icons, illustration, shadows or motion in this folder.** Stages 06 to 08 arrive on **copies** under `design/`, never by painting `_wf.css`. Breaking this loses the stage's whole artefact, which is why the rule is also in the root `CLAUDE.md`.
2. **`_wf.css` is the one home of how a screen looks.** A token value never lives inline. A rule on two or more pages lives there. Anything inline is one use, written through `var()`, under a `/* INLINE: <screen> :: */` marker.
3. **Every state is its own page**, registered in `window.WF_NAV` in `_nav.js`, which also renders the panel, the coverage map and the state matrix. Register the state before drawing it.
4. **Pages come from the generators in `docs/`, not from hand edits.** A hand edit is lost the next time its generator runs.
5. **Nothing is invented here.** A gap is fixed upward in `ia/docs/pages/`, then rendered. Interface strings are stage 05 drafts; author rationale is `.anote`, product copy is `.gnote`, and the two never share a register.
6. **Fixtures are canon.** `ia/docs/pages/reading-conventions.md` owns every name, id, count and timestamp. No new one without declaring it there.
7. **Accepted on the live URL at 1440, 1024 and a measured 360**, never on localhost and never on a resized window.
