/* design/_shell.js :: Z1 and Z2, and the last thing that tied the coloured product to a
 * folder stage 05 froze.
 *
 * Every page under design/ was loading wireframes/_nav.js for one reason: it defines
 * WF_SHELL, which injects the top bar and the connection strip. That script also renders the
 * wireframe stage panel into #sidebar and injects the panel's stylesheet, both of which this
 * stage immediately overwrote, so 51 pages were running a registry of 19 screens and a panel
 * they then threw away, to get two elements.
 *
 * THE FUNCTION KEEPS ITS NAME AND ITS SIGNATURE ON PURPOSE. Every screen carries
 * `<script>WF_SHELL({ current:'queue', strip:'live', annun:{...} });</script>` inside its own
 * markup, and that call is part of the page. Renaming it would mean editing 51 pages and the
 * structural diff against the grey originals would stop being zero. So the contract is
 * identical and only the implementation moved.
 *
 * The markup below is the same markup, and it is written a second time in kit/shell.html
 * where a person can read it. Since stage 08 that page is also the component page for
 * `shell`, and the skeleton lives in its Copy this block. If the two ever disagree,
 * shell.html is the specification and
 * this file is the bug.
 */
window.WF_SHELL = function (o) {
  o = o || {};

  /* Three items in the MVP. Clients arrives with cluster 7 and is deliberately not here. */
  var NAVITEMS = [
    { id: 'queue', label: 'Queue', href: 'queue.html' },
    { id: 'shift', label: 'Shift', href: 'shift.html' },
    { id: 'log',   label: 'Log',   href: 'log.html'   },
  ];

  /* 0.3. With nothing selected it reads the fleet; with a case selected it reads that tenant.
     It redraws on TENANT change, never on every arrow key. */
  var FLEET = { kind: 'fleet', lead: 'FLEET', parts: ['40 tenants',
                'acts alone up to <b>contain network</b> at 3', '<b>1</b> moved down'] };
  var a = o.annun || FLEET;
  if (a === 'fleet') a = FLEET;

  var STRIPS = {
    live:        { cls: '',            html: '<b>Live</b> last case 4s <span class="sep">&middot;</span> Clerk investigating 3' },
    arriving:    { cls: '',            html: '<b>Live</b> last case 1s <span class="sep">&middot;</span> <b>3 arriving</b>' },
    reconnecting:{ cls: 'is-degraded', html: '<b>Reconnecting</b> the queue has stood still for 40s <span class="sep">&middot;</span> how many cases were missed is not known' },
    stale:       { cls: 'is-degraded', html: '<b>Stale</b> nothing has arrived for 6m <span class="sep">&middot;</span> decide on what is here, it is marked as of the last sync' },
    clerkdown:   { cls: 'is-degraded', html: '<b>Clerk is not investigating</b> since 11m <span class="sep">&middot;</span> the connection is fine, so <b>the queue is complete</b>' },
  };
  var st = o.strip || 'live';
  if (typeof st === 'string') st = STRIPS[st] || STRIPS.live;

  var z1 = document.getElementById('wf-z1');
  if (z1) {
    z1.className = 'z1';
    z1.innerHTML =
      '<span class="wordmark">Harrier</span>' +
      '<nav aria-label="Sections">' + NAVITEMS.map(function (n) {
        /* The wireframe asked its own registry whether a screen was built yet, so an item
           that would 404 rendered as plain text instead of a link. Every MVP item is built,
           so that branch was already unreachable there; here the registry is not loaded at
           all and the three items are always links. When Clients arrives with cluster 7 this
           is where it is decided again. */
        /* the class arrives at stage 08 step 6. `.z1 nav a` painted 132 nodes through a
           descendant selector, so the component had no name and could not travel. */
        return '<a class="navitem' + (n.id === o.current ? ' is-current' : '') + '" href="' + n.href + '"' +
               (n.id === o.current ? ' aria-current="page"' : '') + '>' + n.label + '</a>';
      }).join('') + '</nav>' +
      '<span class="spacer"></span>' +
      /* 0.2 section 4 puts the keyboard map in Z1. The kit paints this one as an icon. */
      '<a class="kmap" href="keyboard.html" title="Keyboard map" aria-label="Keyboard map">?</a>' +
      /* The accessible name follows the STATE, because the element has two readings: with a
         tenant selected it is that tenant's latitude, with nothing selected it is the
         fleet's. One fixed name would be false in one of the two. */
      '<p class="annun" aria-label="Clerk’s latitude ' +
        (a.kind === 'fleet' ? 'across the fleet' : 'on this tenant') + '"><b>' + a.lead + '</b>' +
        a.parts.map(function (p) {
          /* Each part is its own element on purpose. As bare text runs, hiding the separator
             at 360 merged the neighbours into one anonymous flex item and the fleet reading
             rendered as `40 tenantsacts alone up to`. */
          return '<span class="sep">|</span><span class="part">' + p + '</span>';
        }).join('') +
      '</p>' +
      /* The one inline style in the whole shell, and it is the wireframe's. It wrote
         font-size:var(--t-xs), a stage 04 name, which is why kit.css carries a compatibility
         alias block. Written here through the kit's own name instead, and the alias stays
         only for the per-screen blocks that still use the old names. */
      '<span class="mono dim" style="font-size:var(--size-xs)">R. Idrissi</span>';
  }

  var z2 = document.getElementById('wf-z2');
  if (z2) {
    z2.className = 'z2 ' + st.cls;
    z2.innerHTML = st.html;
  }
};
