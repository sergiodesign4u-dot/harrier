# design/system/ is the system's CODE. The stand that shows it is design/kit/.
1. Two token levels only: primitive is which value, semantic is why this colour is here. Geometry gets no second rung, and a component reads colour ONLY through a semantic role.
2. Every role and every state token is written twice, in `:root` and in `[data-theme="dark"]`, and the pair is not a mirror.
3. A state is a token, never a style: `:hover` reads `--bg-hover`, `:focus-visible` reads `--color-focus`, `:disabled` reads `--opacity-disabled`. `focus-visible`, not `focus`; a state never moves the layout; a component that is not interactive has none, and its page says so.
4. Adding a component is five things: css, page in `design/kit/`, entry in `_nav.js` in its own level group, row in `inventory.md` with its level, `@import` in its own level group and NOT at the end of `index.css`.
5. `@import` order is the ladder: tokens, base, atoms, molecules, organisms, patterns, places, utilities last.
6. A pattern exists from three screens counted on `wireframes/`. It is built from components, it arranges and it does not paint: no colour token, no family, no new visual decision.
7. New appears here first and on a screen second. A screen carries no style of its own, inline declarations included.
8. Width lives in a token, a component through `@container`, a pattern, or the shell through `@media`. **In the file of a screen: never.** Ladder: fluid, then container, then a point; one point exists and its literal is the only number allowed in a query. Type is fluid through `clamp()` and never switches at a point.
9. Nothing in here is a showcase, and nothing in `design/kit/` is shipped.
