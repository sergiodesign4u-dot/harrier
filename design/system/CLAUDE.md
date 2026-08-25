# design/system/ is the system's CODE. The stand that shows it is design/kit/.
1. Two token levels only: primitive is which value, semantic is why this colour is here. Geometry gets no second rung, and a component reads colour ONLY through a semantic role.
2. Every role and every state token is written twice, in `:root` and in `[data-theme="dark"]`, and the pair is not a mirror.
3. A state is a token, never a style: `:hover` reads `--bg-hover`, `:focus-visible` reads `--color-focus`, `:disabled` reads `--opacity-disabled`. `focus-visible`, not `focus`, and a state never moves the layout.
4. A component that is not interactive has no states, and its page says so.
5. Adding a component is five things: css, page in `design/kit/`, entry in `_nav.js` in its own level group, row in `inventory.md` with its level, `@import` in its own level group and NOT at the end of `index.css`.
6. `@import` order is the ladder: tokens, base, atoms, molecules, organisms, patterns, places, utilities last.
7. A pattern exists from three screens counted on `wireframes/`. It is built from components, it arranges and it does not paint: no colour token, no family, no new visual decision.
8. New appears here first and on a screen second. A screen carries no style of its own, inline declarations included.
9. Nothing in here is a showcase, and nothing in `design/kit/` is shipped.
