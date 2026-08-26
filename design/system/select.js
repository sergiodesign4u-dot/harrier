/* Harrier design system :: the drawn select, and the half of it that CSS cannot do
   ============================================================================
   THE COMPONENT THIS SERVES ARGUED AGAINST ITSELF, and the argument is worth
   repeating here because this is the file that has to answer it. `input.css`
   said: a drawn select has to reimplement the popup, the keyboard and the screen
   reader, and gets one of the three right. The owner decided on 2026-08-26 that
   the platform's popup does not belong inside a console whose whole claim is
   that it is calibrated. So all three are implemented, and this file is the
   receipt for two of them.

   THE PATTERN IS `combobox` OWNING A `listbox`, NOT ROVING TABINDEX. Focus never
   leaves the control: the list is announced through `aria-activedescendant`, the
   options are never focusable, and Tab therefore behaves the way it does on the
   native control rather than trapping somebody inside a list of three rows.

   WHAT IT ANSWERS TO, and every one of these is something the native control
   does that a click handler does not:
     Enter, Space, Alt+Down    open, with the chosen option active
     Down, Up                  open if closed; otherwise move by one
     Home, End                 first and last
     Escape                    close, keep the value, keep focus on the control
     Enter, Space              commit the active option and close
     Tab                       commit nothing, close, and leave
     a printable character     type ahead, and a repeat of the same character
                               cycles the options that begin with it
     pointer down outside      close, keep the value
   ARROWS DO NOT COMMIT WHILE THE LIST IS OPEN, which is where this differs from
   the platform on Windows and agrees with it on macOS. A shortcut map is a set of
   settings, and a person moving down a list of them with the keyboard must not
   change four of them on the way past.

   IT NEVER RUNS UNDER THE POINT. Below --bp-split-panes the CSS hands the control
   back to the native `select`, because a phone puts a wheel under one that no
   list of rows can beat. The number is read FROM THE TOKEN rather than written
   here: two copies of a breakpoint is how a script and a stylesheet come to
   disagree about which one is showing.

   THE NATIVE ELEMENT IS THE VALUE, ALWAYS. It stays in the markup, it holds the
   answer, and a form would submit it. This file paints a control over it and
   writes back to it, so nothing downstream has to know the drawing exists.
   ============================================================================ */
(function () {
  'use strict';

  var POINT = 1280;   /* replaced below by the token; this is only the fallback */

  function readPoint() {
    var raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--bp-split-panes').trim();
    if (!raw) return POINT;
    var n = parseFloat(raw);
    if (!isFinite(n)) return POINT;
    if (/rem$/.test(raw)) {
      var root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      return n * root;
    }
    return n;
  }

  function drawn() { return window.innerWidth >= readPoint(); }

  var uid = 0;

  function build(native) {
    if (native.dataset.selectDrawn) return;
    native.dataset.selectDrawn = '1';
    uid++;

    var wrap = document.createElement('div');
    wrap.className = 'select';
    native.parentNode.insertBefore(wrap, native);
    native.classList.add('select__native');
    wrap.appendChild(native);

    var listId = 'sel-list-' + uid;
    var opts = Array.prototype.slice.call(native.options);

    var control = document.createElement('button');
    control.type = 'button';
    control.className = 'select__control';
    control.setAttribute('role', 'combobox');
    control.setAttribute('aria-haspopup', 'listbox');
    control.setAttribute('aria-expanded', 'false');
    control.setAttribute('aria-controls', listId);
    /* THE NAME COMES FROM THE NATIVE ELEMENT AND IS NOT REWRITTEN. Whatever named
       the select names the control: an aria-label, or a label that points at it. */
    if (native.getAttribute('aria-label')) control.setAttribute('aria-label', native.getAttribute('aria-label'));
    if (native.id) {
      var lab = document.querySelector('label[for="' + native.id + '"]');
      if (lab) {
        if (!lab.id) lab.id = 'sel-lab-' + uid;
        control.setAttribute('aria-labelledby', lab.id);
      }
    }
    if (native.disabled) control.setAttribute('aria-disabled', 'true');

    var value = document.createElement('span');
    value.className = 'select__value';
    var mark = document.createElement('span');
    mark.className = 'select__mark';
    mark.setAttribute('aria-hidden', 'true');
    control.appendChild(value);
    control.appendChild(mark);

    var list = document.createElement('ul');
    list.className = 'select__list';
    list.id = listId;
    list.setAttribute('role', 'listbox');
    list.hidden = true;

    var rows = opts.map(function (o, i) {
      var li = document.createElement('li');
      li.className = 'select__opt';
      li.id = listId + '-' + i;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(i === native.selectedIndex));
      li.textContent = o.text;
      list.appendChild(li);
      return li;
    });

    wrap.appendChild(control);
    wrap.appendChild(list);

    var active = native.selectedIndex < 0 ? 0 : native.selectedIndex;
    var typed = '', typedAt = 0;

    function paintValue() { value.textContent = opts[native.selectedIndex] ? opts[native.selectedIndex].text : ''; }

    function paintActive() {
      rows.forEach(function (r, i) { r.classList.toggle('is-active', i === active); });
      if (list.hidden) { control.removeAttribute('aria-activedescendant'); return; }
      control.setAttribute('aria-activedescendant', rows[active].id);
      /* keep the active row in view without moving the page */
      var r = rows[active], top = r.offsetTop, bot = top + r.offsetHeight;
      if (top < list.scrollTop) list.scrollTop = top;
      else if (bot > list.scrollTop + list.clientHeight) list.scrollTop = bot - list.clientHeight;
    }

    function open() {
      if (control.getAttribute('aria-disabled') === 'true' || !list.hidden) return;
      active = native.selectedIndex < 0 ? 0 : native.selectedIndex;
      list.hidden = false;
      control.setAttribute('aria-expanded', 'true');
      paintActive();
    }

    function close() {
      if (list.hidden) return;
      list.hidden = true;
      control.setAttribute('aria-expanded', 'false');
      control.removeAttribute('aria-activedescendant');
    }

    /* COMMIT IS THE ONLY PLACE THE VALUE CHANGES, and it fires the events a form
       and any listener already expect from the native element. */
    function commit(i) {
      if (i < 0 || i >= opts.length) return;
      if (native.selectedIndex !== i) {
        native.selectedIndex = i;
        native.dispatchEvent(new Event('input', { bubbles: true }));
        native.dispatchEvent(new Event('change', { bubbles: true }));
      }
      rows.forEach(function (r, k) { r.setAttribute('aria-selected', String(k === i)); });
      paintValue();
    }

    function move(to) {
      active = Math.max(0, Math.min(opts.length - 1, to));
      paintActive();
    }

    function typeAhead(ch) {
      var now = Date.now();
      if (now - typedAt > 700) typed = '';
      typedAt = now;
      /* A REPEAT OF ONE CHARACTER CYCLES, which is what the native control does
         and what a person pressing `o` twice on a list of `On, On, Off` means. */
      var all = typed && typed.split('').every(function (c) { return c === typed[0]; });
      typed += ch.toLowerCase();
      var needle = (all && typed.length > 1) ? typed[0] : typed;
      var from = (all && typed.length > 1) ? active + 1 : active;
      for (var n = 0; n < opts.length; n++) {
        var i = (from + n) % opts.length;
        if (opts[i].text.toLowerCase().indexOf(needle) === 0) {
          if (list.hidden) commit(i); else move(i);
          if (list.hidden) { active = i; }
          return;
        }
      }
    }

    /* A KEYBOARD CLICK IS NOT A CLICK. A `button` fires `click` on Enter and on Space
       as well as on the pointer, so the keydown handler below would commit and close
       and this line would immediately reopen. Chromium's `preventDefault` on the
       keydown already stops it and this does not rely on that.
       THE FIRST GUARD READ `detail === 0` AND IT WAS TOO WIDE. A click dispatched by
       script also carries `detail: 0`, so the guard swallowed every programmatic
       `.click()` as well: correct for a person, and it silently blocked the one thing
       that opens this list for a test, a screenshot or a compiler. The keydown says so
       itself instead, which is narrower and true. */
    var byKey = false;
    control.addEventListener('click', function () {
      if (byKey) { byKey = false; return; }
      list.hidden ? open() : close();
    });

    control.addEventListener('keydown', function (e) {
      if (control.getAttribute('aria-disabled') === 'true') return;
      var k = e.key;
      if (k === 'Escape') { if (!list.hidden) { close(); e.preventDefault(); } return; }
      if (k === 'Tab') { close(); return; }
      if (k === 'Enter' || k === ' ' || k === 'Spacebar') {
        e.preventDefault();
        byKey = true;                       /* the click this key is about to fire */
        if (list.hidden) open(); else { commit(active); close(); }
        return;
      }
      if (k === 'ArrowDown' || k === 'Down') {
        e.preventDefault();
        if (list.hidden) { if (e.altKey) open(); else { open(); } } else move(active + 1);
        return;
      }
      if (k === 'ArrowUp' || k === 'Up') {
        e.preventDefault();
        if (list.hidden) open(); else move(active - 1);
        return;
      }
      if (k === 'Home') { if (!list.hidden) { e.preventDefault(); move(0); } return; }
      if (k === 'End') { if (!list.hidden) { e.preventDefault(); move(opts.length - 1); } return; }
      if (k.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { typeAhead(k); }
    });

    /* THE POINTER SETS THE SAME ROW THE KEYBOARD WOULD, rather than painting a
       `:hover` of its own. Two ways of saying which row is under consideration,
       one row. */
    rows.forEach(function (r, i) {
      r.addEventListener('mouseenter', function () { move(i); });
      r.addEventListener('mousedown', function (e) { e.preventDefault(); });
      r.addEventListener('click', function () { commit(i); close(); control.focus(); });
    });

    document.addEventListener('mousedown', function (e) {
      if (!wrap.contains(e.target)) close();
    });

    paintValue();
    paintActive();
  }

  function init() {
    if (!drawn()) return;
    Array.prototype.forEach.call(document.querySelectorAll('select.input'), build);
  }

  /* IT BUILDS ONCE AND DOES NOT UNBUILD. Crossing the point with a window drag is
     not a scenario the product has: the stance is desktop first and the phone
     case is a case opened from a pager, not a window being resized past 1280.
     Building on load and letting the CSS decide which of the two shows keeps the
     value in one place and costs nothing. */
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
