/* Harrier design system :: the icon set, and the only place its geometry is written
   ============================================================================
   THE SET EXISTED TWICE. Sixteen glyphs stood as inline <svg> markup inside
   design/kit/icons.html, and three of them stood again, independently, as
   -webkit-mask/mask data URIs inside design/kit/kit.css and
   design/system/components/src.css. Two copies of one drawing, with nothing
   comparing them. This file is the first copy and icons.html now draws every
   glyph from it rather than from markup of its own.

   THE SECOND COPY SURVIVES, AND IT IS NAMED RATHER THAN HIDDEN. A CSS mask
   cannot read JavaScript, so the three applied glyphs stay as data URIs in the
   component files that use them. design/kit/checks/icons.mjs decodes those URIs
   and compares them against this file shape by shape, character for character,
   so the copy is checked rather than trusted.

   THE SHAPE OF THIS FILE, AND WHY IT IS NOT A LIST OF PATH STRINGS.
   Four of the sixteen are drawn with a <rect> or a <circle>, and the masks in
   the product are drawn with a <rect> too. Flattening those to path data here
   would make the comparison report a difference on every one of them: a real
   difference in the text, none at all in the drawing, which is the kind of noise
   that gets a check switched off. So a glyph is an ordered list of PRIMITIVES,
   each one of exactly the form the SVG carries:

     { d: 'M4 12.5l5 5L20 6.5' }   a <path>, compared on its d attribute
     { rect: [x, y, w, h] }        a <rect>, compared on its four numbers
     { circle: [cx, cy, r] }       a <circle>, compared on its three

   Nothing here carries a colour, a stroke width or a size. Those belong to the
   consumer: .icon in the product and .k-icon on the stand both declare
   stroke:currentColor and the set's 1.5px, and the mask URIs declare their own.
   That the two do not agree today is a finding on design/kit/icons.html, not
   something this file papers over.

   THE FOUR RULES THE SET OBEYS: a 24 unit grid, a 1.5px stroke, square terminals
   (butt caps, miter joins) and currentColor. Two more were added at the rebuild
   of icons.html, both of them measured rather than asserted: paint stays inside
   the safe field of 2 to 22, and the centre a glyph is balanced on is the centre
   of its ink, not the centre of its box.
   ============================================================================ */

window.HARRIER_ICONS = {

  /* -- the case, and the things it is made of ------------------------------ */

  'case': {
    label: 'a correlated case, the object the analyst rules on',
    applied: null,
    shapes: [ { rect: [4, 4, 16, 16] }, { d: 'M4 9h16' } ]
  },

  file: {
    label: 'the case file, the written record of one case',
    applied: null,
    shapes: [ { d: 'M6 3h9l3 3v15H6z' }, { d: 'M15 3v3h3' }, { d: 'M9 12h6M9 16h6' } ]
  },

  evidence: {
    label: 'evidence checked, the shield Clerk files its verdict on',
    applied: null,
    shapes: [ { d: 'M12 3l8 4v6c0 4-3.5 6.5-8 8-4.5-1.5-8-4-8-8V7z' }, { d: 'M9 12l2 2 4-4' } ]
  },

  /* -- the four verdict actions -------------------------------------------- */

  accept: {
    label: 'accept, the verdict that agrees with Clerk',
    /* two consumers now, and the second is not a verdict: the tick on the chosen
       option of a drawn select is the same drawing doing the same job, which is
       saying THIS ONE. A second glyph for it would be two drawings of one word. */
    applied: '.select__opt[aria-selected="true"]::before',
    shapes: [ { d: 'M4 12.5l5 5L20 6.5' } ]
  },

  amend: {
    label: 'amend, the verdict that keeps the case and changes the finding',
    applied: null,
    shapes: [ { d: 'M4 20v-4L16 4l4 4L8 20z' }, { d: 'M14 6l4 4' } ]
  },

  reject: {
    label: 'reject, the override, one key away',
    /* AND IT DISMISSES, which is the same reading one rung down: reject a case,
       dismiss a filter, dismiss a notice. 56 crosses were typed as U+00D7. */
    applied: '.glyph--dismiss',
    shapes: [ { d: 'M5 5l14 14M19 5L5 19' } ]
  },

  escalate: {
    label: 'escalate, the case that leaves your hands',
    applied: null,
    shapes: [ { d: 'M12 20V4' }, { d: 'M5 11l7-7 7 7' } ]
  },

  /* -- the fleet and the record -------------------------------------------- */

  latitude: {
    label: 'latitude, how much rope Clerk has earned on this tenant',
    applied: null,
    /* THE LAST BAR STOOD ON THE END OF ITS OWN BASELINE. Bars at 6, 11, 16 and 21 against a
       baseline running 3 to 21: three units of rule before the first bar and none at all after
       the last, whose 1.5 stroke then hung three quarters of a unit past the end of the line it
       is standing on. Read as a drawing that had slipped, and it had. The bars are at 6, 10, 14
       and 18 now: same four heights, same baseline, three units of rule at both ends, and the
       group's centre is the baseline's centre. Found by the owner on a board at 40x, which is
       the magnification no check in this project runs at. */
    shapes: [ { d: 'M3 18h18' }, { d: 'M6 18V9M10 18V5M14 18V11M18 18V15' } ]
  },

  fleet: {
    label: 'the fleet, every tenant at once',
    applied: null,
    shapes: [ { d: 'M3 20h4V9H3zM10 20h4V4h-4zM17 20h4v-8h-4z' } ]
  },

  log: {
    label: 'the append-only log, what you answer with months later',
    applied: null,
    shapes: [ { d: 'M4 4h16v16H4z' }, { d: 'M8 9h8M8 12h8M8 15h5' } ]
  },

  window: {
    label: 'the window a number was measured over',
    applied: null,
    shapes: [ { rect: [3, 5, 18, 14] }, { d: 'M12 9v3l2 2' } ]
  },

  shift: {
    label: 'the shift, what you pick up and hand off',
    applied: null,
    shapes: [ { circle: [12, 12, 8] }, { d: 'M12 7v5l3 2' } ]
  },

  /* -- working the queue ---------------------------------------------------- */

  filter: {
    label: 'the filter on the queue',
    applied: null,
    shapes: [ { d: 'M3 5h18l-7 8v6l-4 2v-8z' } ]
  },

  /* -- the three that are applied to the product ---------------------------- */

  source: {
    label: 'the source of an evidence line, and that it opens somewhere else',
    applied: '.src::after',
    shapes: [ { d: 'M10 14L20 4' }, { d: 'M14 4h6v6' }, { d: 'M20 13v7H4V4h7' } ]
  },

  expand: {
    label: 'depth, one key away',
    /* AND THE SELECT TOOK IT TOO, on 2026-08-26, when the platform's arrow left.
       Down means the same thing on both: there is more under this. */
    applied: '.expand::before, .select__mark, .glyph--menu',
    shapes: [ { d: 'M4 8l8 8 8-8' } ]
  },

  next: {
    label: 'the line is a route: open the queue, open the log',
    applied: '.glyph--next',
    shapes: [ { d: 'M4 12h16' }, { d: 'M13 5l7 7-7 7' } ]
  },

  keyboard: {
    label: 'the keyboard map in Z1',
    applied: '.z1 .kmap::before',
    shapes: [ { rect: [2, 6, 20, 12] }, { d: 'M6 10h1M10 10h1M14 10h1M18 10h1M6 14h12' } ]
  },

  /* -- the ground the console is read on ------------------------------------
     TWO GLYPHS FOR ONE CONTROL, and they are two rather than one because the
     control has two readings and the drawing is the only thing that carries the
     difference at a glance. The button names the theme it will GIVE you, so the
     sun stands while the dark theme is running and the moon stands while the
     light one is. The accessible name says the same sentence in words, which is
     why the two never disagree: one state writes both.

     The sun is the only glyph in the set built out from the centre rather than
     drawn as an object. Its rays start at radius 7 and end at radius 10, which
     puts their outer ends on 2 and 22 exactly, the safe field, and the disc at
     radius 5 leaves a gap of two units all the way round. Every number in it is
     an integer, including the four diagonals, because 5 and 7 are the pair whose
     radii come closest to 7 and 10 without a decimal.

     The moon is two arcs and it is the only closed curve in the set. Its outer
     edge is a circle of radius 8.5 whose centre lands within a fifth of a unit of
     the box centre, so the crescent balances on its own ink without being nudged
     there by hand. */

  sun: {
    label: 'the light theme, offered by the one control in Z1 that changes the ground',
    applied: '.z1 .theme::before',
    shapes: [ { circle: [12, 12, 5] },
              { d: 'M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M5 19l2-2' } ]
  },

  moon: {
    label: 'the dark theme, offered by the same control while the light one is running',
    applied: '[data-theme="light"] .z1 .theme::before',
    shapes: [ { d: 'M20 14.5A8.5 8.5 0 1 1 9.5 4 7.5 7.5 0 0 0 20 14.5z' } ]
  }
};

/* The order the stand draws them in. Declared rather than left to object key
   order, because the grouping above is by intent and the page shows the set as a
   set. Nineteen names since 2026-08-27, and the check script asserts the count.
   `next` was the first addition, and it is the only glyph in the set that was not
   already drawn when the set was written: the digest's routes ended in a typed
   arrow and there was nothing to replace it with. `sun` and `moon` are the second
   and they arrived together, because the control they are applied to has two
   states and a glyph that stood for only one of them would be half a control. */
window.HARRIER_ICON_ORDER = [
  'case', 'file', 'accept', 'amend', 'reject', 'escalate', 'latitude', 'window',
  'fleet', 'log', 'source', 'expand', 'filter', 'shift', 'keyboard', 'evidence',
  'next', 'sun', 'moon'
];

/* The declared geometry of the set. Read by the stand so that the numbers on the
   page and the numbers in the check come from one place. */
window.HARRIER_ICON_GRID = {
  grid: 24,          /* the module grid, in user units */
  stroke: 1.5,       /* the declared stroke width of the set */
  safe: [2, 22],     /* the safe field: no paint outside it */
  cap: 'butt',
  join: 'miter'
};

if (typeof module === 'object' && module.exports) {
  module.exports = {
    ICONS: window.HARRIER_ICONS,
    ORDER: window.HARRIER_ICON_ORDER,
    GRID: window.HARRIER_ICON_GRID
  };
}
