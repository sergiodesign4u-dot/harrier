/* design/system/theme.js :: which ground the console is read on
 * ===========================================================================
 * THE ONE PIECE OF PRODUCT CODE THAT RUNS BEFORE ANYTHING PAINTS, and that is
 * the whole reason it is a file of its own rather than four lines in
 * design/_shell.js. The shell is loaded at the foot of the body, after the
 * browser has already drawn the page: a theme applied there is applied to a
 * screen the reader has seen in the other one. This file is linked from the
 * head of every screen, above the stylesheet, so the attribute is on the root
 * element before the first frame exists.
 *
 * WHAT IT DOES NOT DO, and this is a decision rather than an omission. It never
 * reads prefers-color-scheme. The ground of this console is dark, it was argued
 * for against the reading research and settled on the rota, and a machine whose
 * operating system happens to be light is not an argument that reopens it. With
 * nothing stored, the console is dark. The light theme is reached by asking for
 * it, once, and it is then remembered.
 *
 * ONE KEY FOR THE WHOLE PROJECT. It was `harrier-kit-theme` until this file
 * existed, and the name was accurate then: the only switch in the repository was
 * in the panel of the documentation stand. It is a preference of the person
 * rather than a property of the surface, so the stand and the product now
 * remember the same answer, and every check that seeds a theme seeds one key.
 *
 * data-theme MEANS "this subtree renders in this theme" and it may mean nothing
 * else. The same sentence is in design/kit/_nav.js and it is the same rule: the
 * stand puts both themes on one page by putting the attribute on a wrapper, so
 * nothing may use it to mark a state, a selection or a button that is pressed.
 * ========================================================================== */
window.HARRIER_THEME = (function () {
  var KEY = 'harrier-theme';
  var LIGHT = 'light', DARK = 'dark';
  var watchers = [];

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  /* The attribute is written for light and REMOVED for dark, never written as
     `dark`. :root carries the dark theme, so the absence of the attribute is the
     shipped state and an element with no attribute inherits whatever subtree it
     stands in. Writing `dark` on the root would be harmless; writing it anywhere
     else would pin a subtree out of a theme it was meant to follow. */
  function paint(t) {
    if (t === LIGHT) document.documentElement.setAttribute('data-theme', LIGHT);
    else document.documentElement.removeAttribute('data-theme');
  }

  function current() {
    return document.documentElement.getAttribute('data-theme') === LIGHT ? LIGHT : DARK;
  }

  function set(t) {
    t = (t === LIGHT) ? LIGHT : DARK;
    paint(t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    for (var i = 0; i < watchers.length; i++) watchers[i](t);
    return t;
  }

  paint(stored());

  return {
    KEY: KEY,
    get: current,
    set: set,
    toggle: function () { return set(current() === LIGHT ? DARK : LIGHT); },
    /* Called once on subscription as well as on every change, so a control that
       renders its own label from the theme has one code path and not two. */
    onChange: function (fn) { watchers.push(fn); fn(current()); }
  };
})();
