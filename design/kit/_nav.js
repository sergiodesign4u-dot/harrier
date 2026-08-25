/* design/kit/_nav.js :: the stand's ONE registry, and the only navigation its pages carry.
 * ============================================================================
 * Own namespace, window.KIT_NAV. The roadmap globals NAV, NAV_BASE and NAV_SECTIONS belong
 * to the root /_nav.js, exactly as design/_nav.js keeps to DESIGN_NAV and wireframes/_nav.js
 * to WF_NAV. A local registry that declared window.NAV would silently render the wrong array
 * on any page that actually draws the roadmap, and these files get copied between stages.
 *
 * The file renders two things from one array: the panel on every stand page, and the cards on
 * the hub. That is why adding a component is one entry here and not two.
 *
 * GROUP ORDER IS THE LADDER, NOT THE ALPHABET. Foundations first because a component page is
 * unreadable without them; then atoms, molecules, organisms, bottom up, the same order as the
 * @import in index.css and the same order the rounds are built in. Grouping by purpose is
 * forbidden at the top level: by purpose a button and a sign-in dialog are both "forms", and
 * the panel would put one beside the other while one lives inside the other.
 *
 * ARCHITECTURE IS THE FIRST FOUNDATION, not the last. It carries the RULES of the system, and
 * a system is read starting from its rules. The audit, the inventory and the coverage map are
 * EVIDENCE about the system, and they belong to the "Checks" group that step 9 adds. Mixed
 * into one group at the bottom, the rules hide behind the reporting.
 */

window.KIT_NAV = {
  groups: [
    { key:'system', label:'System', pages:[
        { file:'overview.html', label:'Overview',
          card:false },
        /* the roadmap's stage 09 entry, and it is a DOOR into the stand rather than a
           second sidebar: it carries this panel like every other page here. Second in
           the group because Overview says what the system contains and this says why. */
        { file:'why.html', label:'Why it is like this',
          card:false }
    ]},
    { key:'foundations', label:'Foundations', pages:[
        { file:'architecture.html', label:'Architecture',
          blurb:'Two ladders that both use the word level, what a component may read, and the five things it takes to add one.' },
        { file:'color.html', label:'Colour',
          blurb:'Twenty two primitives, twenty one roles, every role in both themes side by side, and a contrast table computed in the page rather than transcribed.' },
        { file:'typography.html', label:'Typography',
          blurb:'Two families, five sizes, three weights, two line heights, and the eight tracking values the product actually writes.' },
        { file:'geometry.html', label:'Geometry',
          blurb:'The space scale shown as space, a radius of zero and why, three line tokens separated by WCAG, and the measures that stop growing.' },
        { file:'icons.html', label:'Icons',
          blurb:'Sixteen glyphs from one source file, every box and centre measured in the page, and two audits. Three are applied to the product and thirteen are not.' }
    ]},
    { key:'atoms', label:'Atoms', pages:[
        { file:'btn.html', label:'Button',
          mini:'<span class="btn btn--primary">Accept <span class="key">a</span></span>',
          blurb:'The reference component of the stage: 157 instances, three emphases, and the five state tokens were founded on it.' },
        { file:'navitem.html', label:'Navigation item',
          mini:'<a class="navitem is-current">Queue</a> <a class="navitem">Shift</a>',
          blurb:'The whole global navigation, three items, and 132 instances that live in no html file at all.' },
        { file:'chip.html', label:'Chip',
          mini:'<span class="chip">All tenants &#9662;</span> <span class="chip chip--ghost">Sort &#9662;</span>',
          blurb:'The scope of what you are looking at. Half of it left at step 2, because a word you cannot press is not a chip.' },
        { file:'input.html', label:'Input',
          mini:'<span class="input" style="width:120px;padding:4px 8px">r.idrissi</span>',
          blurb:'Three rows of the register turned out to be one component: input, textarea and select have the same anatomy, which is none.' },
        { file:'link.html', label:'Link',
          mini:'<a class="link">Okta system log</a>',
          blurb:'It takes the ink of its host and colours nothing but its own underline. It had no declaration anywhere, and that cost 151 blue links.' },
        { file:'state.html', label:'State',
          mini:'<i class="state">decided</i> <i class="state state--solid">unrecorded</i>',
          blurb:'The largest component in the product by count, and thirteen words on three surfaces rather than the six the kit page claimed.' },
        { file:'bars.html', label:'Severity bars',
          mini:'<span class="bars"><i class="on"></i><i class="on"></i><i class="on"></i></span> <span class="bars"><i class="on"></i><i class="on"></i><i></i></span> <span class="bars"><i class="on"></i><i></i><i></i></span>',
          blurb:'Three slots and how many are lit. The severity is selected on the drawing rather than on a class, which is why the ramp needed no markup at all.' },
        { file:'mark.html', label:'Latitude mark',
          mini:'<span class="mark">yes</span> <span class="mark">no</span>',
          blurb:'Two letters wide, and it carries the differentiator. The second component here that reads no colour role.' },
        { file:'tag.html', label:'Claim tag',
          mini:'<span class="tag">identity</span><span class="tag">not found</span>',
          blurb:'The first two words of a claim, set in a different voice so the eye can use them as an index. First consumer of --track-mono.' },
        { file:'stamp.html', label:'Stamp',
          mini:'<span style="font:400 var(--size-xs)/1.4 var(--font-mono);color:var(--text-secondary)">Filed by Clerk 26m ago</span>',
          blurb:'Who filed it, when, and the address of the evidence as it stood. The line that has to still be true months later.' },
        { file:'key.html', label:'Key',
          mini:'<span class="key">a</span> <span class="key">Esc</span> <span class="key">Enter</span>',
          blurb:'The one component that reads no colour role. It takes the ink of its host and draws its border out of that.' },
        { file:'src.html', label:'Source',
          mini:'<a class="src">Entra sign in</a>',
          blurb:'It carries the only icon this product really needed, and 13 of the 131 were wearing it while opening nothing.' },
        { file:'anote.html', label:'Argument note',
          mini:'<span style="font:700 9.5px/1 var(--font-mono);letter-spacing:.14em;color:var(--text-secondary)">WHY</span>',
          blurb:'Not product copy. The one register on the screen that speaks to whoever is reading the case for the argument.' },
        { file:'rec.html', label:'Record',
          mini:'<span class="rec" style="font-size:var(--size-sm)">31 of 36</span>',
          blurb:'A count of what the agent got right on one tenant, and the reason the fleet is the differentiator.' },
        { file:'was.html', label:'Trend',
          mini:'<span class="was">was 34 of 36</span>',
          blurb:'Without it the count is not evidence. It is the direction, and the direction is the whole of the claim.' },
        { file:'hint.html', label:'Hint',
          mini:'<span class="hint">A reason is required</span>',
          blurb:'One line saying what the interface will not do for you. Two declarations collapsed into one.' },
        { file:'arriving.html', label:'Arriving',
          mini:'<span class="arriving" style="width:90px"></span>',
          blurb:'Loading is a shape that fills. Never a spinner and never a skeleton of the whole screen.' },
        { file:'label.html', label:'Label',
          mini:'<span class="label">Why you are rejecting</span>',
          blurb:'The name of an answer, never a heading, and a real label element with a for on all 31.' }
    ]},
    { key:'molecules', label:'Molecules', pages:[
        { file:'row.html', label:'Queue row',
          mini:'<span style="font-size:11px;color:var(--text-secondary);font-family:var(--font-mono)">MERIDIAN &middot; 31 of 36</span>',
          blurb:'259 instances and the largest component in the product. Design principle 1 is this component: every row is a decision, not a record.' },
        { file:'row-moved.html', label:'Handover line',
          mini:'<span style="font-size:11px;color:var(--text-secondary);font-family:var(--font-mono)">4 zones, not 7</span>',
          blurb:'Four zones where the queue row has seven, which is why it is a component rather than a variant. It is read, never opened.' },
        { file:'sev.html', label:'Severity',
          mini:'<span class="sev" style="font-size:12.5px"><span class="bars"><i class="on"></i><i class="on"></i><i></i></span> Medium</span>',
          blurb:'The smallest molecule in the system, and it is what makes the unlit slot legal below 3:1.' },
        { file:'frow.html', label:'Fleet row',
          mini:'<span style="font-size:11px;color:var(--text-accent);font-family:var(--font-mono)">contain endpoint</span>',
          blurb:'This is the fleet, one line of it. Three zones, and the middle one is selected by position.' },
        { file:'opt.html', label:'Option',
          mini:'<span class="key">1</span> <span style="font-size:12.5px">Not a threat</span>',
          blurb:'Taps two and three of the four that rejecting costs. It is a link, and that was a decision.' },
        { file:'rota.html', label:'Rota',
          mini:'<span style="font-size:12.5px;font-weight:600">S. Varga</span>',
          blurb:'Harrier reads this and never owns it, so there is no control anywhere in it.' },
        { file:'block.html', label:'Block',
          mini:'<span style="font:600 11px/1 var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--text-secondary)">Evidence</span>',
          blurb:'227 instances, 43 sets of child zones and one computed form. It is a slot, and that is the finding.' },
        { file:'nar.html', label:'Narration',
          mini:'<span style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary)">04:14</span>',
          blurb:'What Clerk found, in order. The time column is fixed so a column of times reads down.' },
        { file:'prov.html', label:'Provenance',
          mini:'<span style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary)">Entra, EDR &middot; 6h</span>',
          blurb:'Where the numbers came from. The scope and the window that voice.md requires a number to name.' },
        { file:'gnote.html', label:'Ground note',
          mini:'<span style="font-size:11px;color:var(--text-secondary)">Not checked: the tenant baseline</span>',
          blurb:'The quietest line on the case pane, and where most of the product\u2019s links live.' },
        { file:'empty.html', label:'Empty state',
          mini:'<span style="font-size:12.5px;color:var(--text-primary)">Nothing waiting</span>',
          blurb:'An empty queue is not a failure and must not look like one.' },
        { file:'tomb.html', label:'Tombstone',
          mini:'<span style="border:1px dashed var(--text-secondary);padding:2px 8px;font-size:11px;color:var(--text-secondary)">The snapshot is gone</span>',
          blurb:'Where something used to be. A dashed boundary and not a colour, because nothing has gone wrong.' },
        { file:'scopebar.html', label:'Scope bar',
          mini:'<span class="chip">All tenants &#9662;</span>',
          blurb:'What am I looking at, answered before the first row is read.' },
        { file:'readout.html', label:'Readout',
          mini:'<span style="font-size:12.5px"><b style="font-weight:700">18</b> waiting across <b style="font-weight:700">12</b> of 40</span>',
          blurb:'The one sentence that sums the list, and one of two places in the product allowed weight 700.' },
        { file:'pane-head.html', label:'Pane head',
          mini:'<span style="font:600 17px/1 var(--font-sans)">Fleet</span>',
          blurb:'It names what the pane is showing and stays while the evidence scrolls under it.' },
        { file:'qfoot.html', label:'Queue foot',
          mini:'<span style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary)">j k &middot; move</span>',
          blurb:'Where the keyboard is taught, and it carries an open row the reconciliation rules on.' },
        { file:'chips-hd.html', label:'Head states',
          mini:'<i class="state">escalated</i>',
          blurb:'The case\u2019s condition next to the case\u2019s name. One declaration, and it still earns a name.' },
        { file:'fleet-more.html', label:'Fleet more',
          mini:'<span style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary)">34 more tenants</span>',
          blurb:'It says what is not on the screen, and it is deliberately not a control.' },
        { file:'banner.html', label:'Banner',
          mini:'<span style="border:1px solid var(--line-edge);padding:4px 8px;font-size:11px">Clerk is down</span>',
          blurb:'It says something about the whole screen, never about one row. flow-root rather than flex, and that is a bug fix.' },
        { file:'toast.html', label:'Toast',
          mini:'<span style="border:2px solid var(--line-edge);padding:4px 8px;font-size:11px">Write failed</span>',
          blurb:'A zone specified in prose and drawn nowhere until stage 07 step 9 found it.' },
        { file:'outage.html', label:'Outage',
          mini:'<span style="font:600 17px/1 var(--font-sans)">Service unavailable</span>',
          blurb:'The product is down and the page still has to be useful. The only component that carries a mark.' },
        { file:'field.html', label:'Field',
          mini:'<span class="label">Email</span>',
          blurb:'Three atoms in one order, and the order is the component.' },
        { file:'expand.html', label:'Expansion',
          mini:'<span style="border-left:2px solid var(--line-separator);padding-left:8px;font-size:12.5px">the working</span>',
          blurb:'Design principle 2 ends here: the expansion is the depth. It becomes a native details.' },
        { file:'doorcard.html', label:'Door card',
          mini:'<span style="font:600 17px/1 var(--font-sans);letter-spacing:-.01em">Harrier</span>',
          blurb:'The only centred thing in the product, on the one surface that is not behind authentication.' },
        { file:'claim.html', label:'Claim',
          mini:'<span class="tag">identity</span><span style="font-size:12.5px">Token replay</span>',
          blurb:'The line of evidence, 131 instances, and it was not in the register at all.' },
        { file:'lat.html', label:'Latitude ladder',
          mini:'<span class="mark">yes</span> <span style="font-size:12.5px">Contain endpoint</span>',
          blurb:'This is the differentiator, and it is a component. mark was written and the ladder it lives in was not.' },
        { file:'bline.html', label:'Brief line',
          mini:'<span style="font:700 17px/1 var(--font-mono)">18</span>',
          blurb:'A line and not a card. The one place a figure gets 17px mono at 700.' },
        { file:'cons.html', label:'Consequence',
          mini:'<span style="font-size:12.5px;color:var(--text-secondary)">The case closes</span>',
          blurb:'What will happen if you file this. The only fixed height in the system, and it says why.' },
        { file:'contact.html', label:'Contact',
          mini:'<span style="font:600 17px/1 var(--font-sans)">S. Varga</span>',
          blurb:'Who the escalation goes to, and where an open question about the secondary persona lands.' },
        { file:'covers.html', label:'Covers',
          mini:'<span class="label">Window</span>',
          blurb:'A label above its value, the only place in the product that stacks them.' },
        { file:'axisb.html', label:'Second axis',
          mini:'<span style="border:1px dashed var(--text-secondary);padding:2px 8px;font-size:11px;color:var(--text-secondary)">closes</span>',
          blurb:'The reason four taps never became five. Locked, not disabled.' },
        { file:'sa-offer.html', label:'Standalone offer',
          mini:'<span style="font-size:11px;color:var(--text-secondary)">open it in the queue</span>',
          blurb:'The standalone route admitting what it is, and it is hidden at 360 on purpose.' },
        { file:'addr.html', label:'Address',
          mini:'<span style="font-family:var(--font-mono);font-size:12.5px">?as-of=2026-08-22</span>',
          blurb:'kit.css calls it one component in as many words, and it still was not in the register.' },
        { file:'annun.html', label:'Annunciator',
          mini:'<span style="font-family:var(--font-mono);font-size:11px"><b style="font-weight:700;color:var(--text-accent)">34 of 36</b></span>',
          blurb:'Zero html files and 55 renderings. An inventory taken from the screens cannot see it.' }
    ]},
    { key:'organisms', label:'Organisms', pages:[
        { file:'z1.html', label:'Z1, the top bar',
          mini:'<span style="font:600 17px/1 var(--font-sans);letter-spacing:-.01em">Harrier</span>',
          blurb:'56px, four things in a fixed order, and the class is in no html file.' },
        { file:'z2.html', label:'Z2, the strip',
          mini:'<span style="font-family:var(--font-mono);font-size:11px">Clerk <b style="color:var(--text-accent)">live</b></span>',
          blurb:'Never silent when connected, because silence would teach that silence means nothing.' },
        { file:'z6.html', label:'Z6, the notices',
          mini:'<span style="border:1px solid var(--line-edge);padding:2px 8px;font-size:11px">notice</span>',
          blurb:'A zone specified in prose and drawn nowhere until step 9 read the contract as a checklist.' },
        { file:'rows.html', label:'Rows',
          mini:'<span style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary)">the scroll box</span>',
          blurb:'Three declarations, and the reason the head row sticks and the strip below it does not move.' },
        { file:'rows-moved.html', label:'Moved rows',
          mini:'<span style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary)">no scroll</span>',
          blurb:'The container the row split also created, and it is why organisms went to 19 rather than 18.' },
        { file:'optlist.html', label:'Option list',
          mini:'<span class="key">1</span> <span class="key">2</span> <span class="key">3</span>',
          blurb:'The radio pattern, named as one rather than replaced. Checkbox, radio and toggle are absent from this product.' },
        { file:'pane-body.html', label:'Pane body',
          mini:'<span style="font-size:12.5px;color:var(--text-secondary)">five steps, then two</span>',
          blurb:'The surface the whole product exists for. Thirteen zone sets and one computed form.' },
        { file:'pane-foot.html', label:'Pane foot',
          mini:'<a class="btn btn--primary" style="pointer-events:none">Accept</a>',
          blurb:'Where the analyst rules. Sticky and never stuck, twice over, and both were found by measurement.' },
        { file:'dialog.html', label:'Dialog',
          mini:'<span style="border:1px solid var(--line-edge);padding:4px 10px;font-size:11px">anchored</span>',
          blurb:'Anchored, not centred, and it never covers the evidence being decided on.' },
        { file:'rail.html', label:'Rail',
          mini:'<span style="background:var(--bg-invert);color:var(--text-on-invert);padding:2px 8px;font:600 11px/1 var(--font-mono);letter-spacing:.09em">RECORD</span>',
          blurb:'The marking is a frame and not a banner, and this is the sticky half of it.' },
        { file:'rail-foot.html', label:'Rail foot',
          mini:'<span style="background:var(--bg-surface);color:var(--text-secondary);padding:2px 8px;font-size:12.5px">closes it</span>',
          blurb:'Zero zones, which is why it is not a variant of rail. The clearest instance of the splitting rule.' },
        { file:'door.html', label:'Door',
          mini:'<span style="font-size:12.5px">the one public surface</span>',
          blurb:'The only screen not behind authentication, and the only one carrying a photograph.' },
        { file:'doc.html', label:'Document',
          mini:'<span style="font:600 21px/1 var(--font-sans)">Entry</span>',
          blurb:'A screen that is a page rather than a console, and one of the thirteen the census missed.' },
        { file:'frame.html', label:'Frame',
          mini:'<span style="border:2px solid var(--line-record);padding:2px 10px;font-size:11px">the record</span>',
          blurb:'The record that leaves the building. --width-frame had a token and no consumer in the register.' },
        { file:'brief.html', label:'Brief',
          mini:'<span style="font-size:12.5px">pick up and hand off</span>',
          blurb:'The second of the three MVP jobs, and the only surface that is neither a list nor a case.' },
        { file:'scrim.html', label:'Scrim',
          mini:'<span style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary)">anchors, not centres</span>',
          blurb:'Right padding equal to the pane, so the dialog lands beside the case rather than on it.' },
        { file:'z4.html', label:'Z4, the list',
          mini:'<span style="font-size:12.5px">the main dashboard</span>',
          blurb:'The queue, with the fleet in the pane, and not the other way round. Five modifiers and none is a variant.' },
        { file:'z5.html', label:'Z5, the pane',
          mini:'<span style="font-size:12.5px">and its resting state is the fleet</span>',
          blurb:'The decision the whole navigation hangs on, and the rule CLAUDE.md binds on this layer.' },
        { file:'z45.html', label:'Z45, the split',
          mini:'<span style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary)">list | detail</span>',
          blurb:'The UX pattern of the product in one declaration, and it carries no novelty.' },
        { file:'screen.html', label:'Screen',
          mini:'<span style="font-size:12.5px">every one of the 62</span>',
          blurb:'The column the product lives in, and the largest single row in the rename map.' },
        { file:'shell.html', label:'Shell',
          mini:'<span style="font-size:12.5px">two columns</span>',
          blurb:'The one place something that is not the product sits in the same box as the product.' }
    ]},
    /* ---- PATTERNS, and they come after Organisms ---------------------------
       The panel repeats the ladder the system is built in, and a pattern is built
       from the components above it: bottom up in the panel is bottom up in
       index.css. Put here rather than beside Foundations, where it would have read
       as a rule about the system instead of a level of it. */
    { key:'patterns', label:'Patterns', pages:[
        { file:'patterns.html', label:'The four, and the rule',
          blurb:'When to take a pattern and when to take the components, what made these four and only these four, and the two screen candidates waiting for a third.' },
        { file:'queue-list.html', label:'Queue list',
          mini:'<span class="chip">All tenants &#9662;</span> <span class="chip chip--ghost">Sort &#9662;</span>',
          blurb:'The main dashboard: scope, a counted claim, the rows, and the keyboard taught at the foot. 38 grey screens, 29 of them in colour.' },
        { file:'shift-brief.html', label:'Shift brief',
          mini:'<span class="bline" style="border:0;padding:0"><span class="n">18</span><span>waiting</span></span>',
          blurb:'The same column filled with the handover instead of the waiting, and the one page type in the block bank with no reference anywhere.' },
        { file:'case-pane.html', label:'Case pane',
          mini:'<span class="btn btn--primary">Accept <span class="key">a</span></span>',
          blurb:'Where the analyst rules. Two routes, a head that stays and a foot that sticks, and eleven rules moved into it from three files.' },
        { file:'fleet.html', label:'Fleet',
          mini:'<span class="mark">contain endpoint</span>',
          blurb:'The resting state of the pane and the only surviving differentiator. One rule in its file, and that is the finding rather than the shortfall.' }
    ]},

    { key:'checks', label:'Checks', pages:[
        { file:'docs/tokens-audit.md', label:'Token audit', card:false },
        { file:'docs/inventory.md',    label:'Inventory',   card:false },
        { file:'docs/census.md',       label:'Census of forms', card:false },
        { file:'docs/backlog.md',      label:'Backlog',     card:false },
        { file:'checks.html',          label:'The instruments',
          blurb:'Twelve of them, each written because a class of defect got past everything else. What each one finds, what it says today, and the one that exists because a defect got past the other eleven.' },
        { file:'docs/critique.md',     label:'Critique log', card:false },
        { file:'docs/architecture.md', label:'Architecture, in prose', card:false }
    ]}
    /* SEVENTY THREE: 18 atoms, 34 molecules, 21 organisms. It was 62 at step 2 and the
       inventory's section 13 says what happened to it twice.
       ORDER INSIDE A GROUP IS NOT ALPHABETICAL. Atoms follow the three subgroups agreed
       before the build, controls then marks then the parts of a text; molecules follow
       four; organisms are split by CONTAINMENT rather than purpose, because an organism
       may hold another one and the ladder has no fourth rung.
       CHECKS ARE LAST AND THEY ARE EVIDENCE ABOUT THE SYSTEM rather than part of it. The
       four documents are here because a reader can open them; the six instruments live in
       design/kit/checks/ and are RUN rather than read, which is the whole point of them. */
  ]
};

(function () {
  var N = window.KIT_NAV;
  var here = location.pathname.split('/').pop() || 'overview.html';

  /* ---- theme, before anything paints ------------------------------------
     Read first so the stand does not flash the shipped theme on its way to the
     one the reader chose two pages ago. The product's own switcher is a step 8
     decision; this one belongs to the stand and travels with it. */
  /* data-theme MEANS "this subtree renders in this theme" and it may mean nothing else.
     The selector in tokens.css is a bare attribute selector on purpose, so that color.html
     can put both themes on one page side by side; the cost is that any element wearing the
     attribute for another reason silently redefines every role on itself. The switch buttons
     did exactly that for one render: the unpressed one identified itself with data-theme and
     came back painted in the light theme's secondary ink, at 3.0 on the panel ground. Found by
     a contrast sweep over every text node, which is the only instrument that sees it, because
     the file is correct and it is the CASCADE that is wrong. They carry data-theme-set now. */
  var KEY = 'harrier-kit-theme';
  function apply(t) {
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    var b = document.querySelectorAll('.k-theme button');
    for (var i = 0; i < b.length; i++) {
      b[i].setAttribute('aria-pressed', String(b[i].getAttribute('data-theme-set') === (t || 'dark')));
    }
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* private mode, and the stand still works */ }
  apply(saved);

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  /* ---- the panel ---------------------------------------------------------- */
  var host = document.getElementById('sidebar');
  if (host) {
    var frag = document.createDocumentFragment();

    /* 1. out of the stage, and it is the first row on every panel in this project */
    var out = el('div', 'k-out');
    var outA = el('a', null, '← Design process');
    outA.href = '../../index.html';
    out.appendChild(outA);
    frag.appendChild(out);

    /* 2. where am I */
    frag.appendChild(el('span', 'k-badge', 'Design system'));
    frag.appendChild(el('p', 'k-sub', 'tokens and components'));

    /* 3. groups and pages. The accordion is the group, and only the current one is open. */
    N.groups.forEach(function (g) {
      var open = g.pages.some(function (p) { return p.file === here; });
      frag.appendChild(el('div', 'k-group', g.label + (open ? '' : '')));
      var ul = el('ul', 'nav-roadmap');
      g.pages.forEach(function (p) {
        var isCur = (p.file === here);
        var li = el('li', 'nav-item' + (isCur ? ' is-active' : ''));
        var a = el(isCur ? 'span' : 'a', 'nav-top', p.label);
        if (!isCur) a.href = p.file;
        li.appendChild(a);
        /* the current page opens into its own sections, which is the job the roadmap used
           to do for these pages and no longer does, because they do not render it */
        if (isCur && window.NAV_SECTIONS && window.NAV_SECTIONS.length) {
          var secs = el('ul', 'nav-sections');
          window.NAV_SECTIONS.forEach(function (s) {
            var x = el('a', 'nav-section', s.label);
            x.href = '#' + s.id;
            x.setAttribute('data-section', s.id);
            var lis = el('li'); lis.appendChild(x); secs.appendChild(lis);
          });
          li.appendChild(secs);
        }
        ul.appendChild(li);
      });
      frag.appendChild(ul);
    });

    /* 4. the theme switch, and the stand carries it from the day the roles were written.
          Without it the pairs declared at step 3 would go unseen until step 7. */
    var th = el('div', 'k-theme');
    [['dark', 'Dark'], ['light', 'Light']].forEach(function (t) {
      var b = el('button', null, t[1]);
      b.type = 'button';
      b.setAttribute('data-theme-set', t[0]);
      b.addEventListener('click', function () {
        try { localStorage.setItem(KEY, t[0]); } catch (e) {}
        apply(t[0]);
      });
      th.appendChild(b);
    });
    frag.appendChild(th);

    /* 5. the way out of the artefact, muted and last */
    var cross = el('div', 'k-cross');
    var c1 = el('a', null, '← Product, all screens'); c1.href = '../overview.html';
    var c2 = el('a', null, 'Visual language, Concept ↗'); c2.href = '../concept/concept.html';
    cross.appendChild(c1); cross.appendChild(c2);
    frag.appendChild(cross);

    host.innerHTML = '';
    host.appendChild(frag);
    apply(saved);
  }

  /* ---- the hub's cards, from the same array --------------------------------
     Two containers rather than one, and the split is by LEVEL. #k-cards takes the
     foundations, #k-components takes atoms, molecules and organisms with a heading
     per group. One container would have put a button under a heading that says
     Foundations, which is the ladder collapsing in the one place a reader looks
     first. Both are filled from the same registry, so a component still costs one
     entry and never two. */
  var cards = document.getElementById('k-cards');
  var comps = document.getElementById('k-components');
  var pats  = document.getElementById('k-patterns');
  if (cards || comps || pats) {
    N.groups.forEach(function (g) {
      var isFoundation = (g.key === 'foundations');
      /* THREE HOSTS NOW, AND THE ROUTING IS THE LADDER. Patterns are a level of the
         system and not a group of components, so they get their own section rather
         than a fourth heading under Components. A group where every page declares
         card:false draws nothing at all: Checks is reporting ABOUT the system and
         its heading with no cards under it read as a level that had gone missing. */
      var host = isFoundation ? cards : (g.key === 'patterns' ? pats : comps);
      if (!host || g.key === 'system') return;
      var shown = g.pages.filter(function (p) { return p.card !== false; });
      if (!shown.length) return;
      var grid = el('div', 'k-cards');
      if (!isFoundation) {
        var h = el('h3', 'k-h2', g.label + ' \u00b7 ' + shown.length);
        host.appendChild(h);
      }
      host.appendChild(grid);
      g.pages.forEach(function (p) {
        if (p.card === false) return;
        var a = el('a', 'k-card');
        a.href = p.file;
        var mini = el('div', 'k-mini');
        /* a live miniature rather than a picture of one: the strip is painted by the same
           roles the page it leads to documents, so a changed token changes the card too */
        if (p.file === 'color.html') {
          ['--bg-page', '--bg-surface', '--bg-selected', '--bg-action', '--text-sev-high',
           '--text-sev-medium', '--text-sev-low', '--bg-invert'].forEach(function (v) {
            var i = el('i'); i.style.background = 'var(' + v + ')'; i.style.border = '1px solid var(--line-separator)';
            mini.appendChild(i);
          });
          a.appendChild(mini);
        } else if (p.file === 'typography.html') {
          a.appendChild(el('div', 'k-mini-t', 'Aa 34 of 36'));
        } else if (p.file === 'geometry.html') {
          [4, 8, 12, 16, 24, 32, 48].forEach(function (n) {
            var i = el('i');
            i.style.background = 'var(--bg-invert)';
            i.style.flex = '0 0 ' + n + 'px';
            mini.appendChild(i);
          });
          a.appendChild(mini);
        } else if (p.file === 'icons.html') {
          mini.innerHTML =
            '<svg class="k-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>' +
            '<svg class="k-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>' +
            '<svg class="k-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V4"/><path d="M5 11l7-7 7 7"/></svg>' +
            '<svg class="k-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18"/><path d="M6 18V9M11 18V5M16 18v-7M21 18v-3"/></svg>';
          mini.style.gap = '10px';
          mini.style.color = 'var(--text-accent)';
          a.appendChild(mini);
        } else if (p.mini) {
          /* a component card carries the component itself, alive, painted by the same
             index.css the page it leads to uses. A picture of it would be a second copy */
          mini.innerHTML = p.mini;
          mini.style.height = 'auto';
          mini.style.gap = '6px';
          mini.style.alignItems = 'center';
          a.appendChild(mini);
        }
        a.appendChild(el('b', null, p.label));
        a.appendChild(el('span', null, p.blurb || ''));
        grid.appendChild(a);
      });
    });
  }

  /* ---- section highlighting, the one thing the roadmap gave these pages ----- */
  if (window.NAV_SECTIONS && window.NAV_SECTIONS.length && 'IntersectionObserver' in window) {
    var links = {};
    Array.prototype.forEach.call(document.querySelectorAll('.nav-section'), function (a) {
      links[a.getAttribute('data-section')] = a;
    });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var a = links[e.target.id];
        if (a && e.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('is-current'); });
          a.classList.add('is-current');
        }
      });
    }, { rootMargin: '-10% 0px -80% 0px' });
    window.NAV_SECTIONS.forEach(function (s) {
      var t = document.getElementById(s.id);
      if (t) obs.observe(t);
    });
  }
})();
