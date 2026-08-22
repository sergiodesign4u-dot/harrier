/* wireframes/_nav.js  ---  the ONE registry of stage 04, doing THREE jobs from one record.
 *
 * Job 1: the STAGE PANEL, rendered into <aside id="sidebar"> on EVERY page of this stage,
 *        overview.html included. The hub is not an exception: it is the first item of its own panel.
 * Job 2: the COVERAGE MAP on the hub, into <div id="wf-coverage">.
 * Job 3: the STATE MATRIX on the hub, into <div id="wf-matrix">, from the same records,
 *        so the matrix and the panel cannot disagree about which states exist.
 *
 * Own namespace, window.WF_NAV. The globals NAV* and the nav-* classes belong to the root
 * /_nav.js; a local registry that declared window.NAV would silently render the wrong array
 * on any page that carries the roadmap. No page of this stage carries the roadmap: the way
 * back into the project is the first panel row, not a second sidebar.
 *
 * The registry is filled BEFORE the screens are drawn, on purpose. It is a coverage tracker:
 * every screen on the map stands in it from the start with status 'spec', and turns 'built'
 * when its pages exist. How much is left is then visible in the browser at every step,
 * rather than counted at the end, and a screen cannot be lost in the step 8 fan out because
 * an empty row is noticeable and a missing file is not.
 *
 * One record per SCREEN, that is, per thing that gets an html file:
 *   screen  'stem'          file stem. Base page is <stem>.html, states are <stem>-<slug>.html
 *   node    'X.Y'           the IA node it renders
 *   ia      'file.html'     the node's specification under ../ia/, or null
 *   label   string
 *   cluster string          IA cluster, from ia/docs/sitemap.md
 *   flow    'main' | ...    which flow it belongs to
 *   scope   'MVP'|'LATER'
 *   status  'built'|'spec'
 *   states  [{slug,label,kind}]  kind: base|loading|error|empty|success|domain|role
 *   noState [{label,why}]        every '-' in the matrix, with its reason. Read by the hub
 */
window.WF_NAV = {

  flows: [
    { id:'main',  label:'Flow 1 · Rule on the case',
      note:'Queue to Case File to verdict to log. The main job, and the flow the case is judged on' },
    { id:'shift', label:'Flow 2 · Take and hand off a shift', note:'R1. Page type C, the one type with no domain reference' },
    { id:'answer',label:'Flow 3 · Answer for it later',       note:'R2, and the compliance requirement' },
    { id:'door',  label:'Flow 4 · Get in',                    note:'The only public URL in the product' },
    { id:'sys',   label:'Flow 5 · When something is wrong',   note:'Systemic states. None of them is a dead end' },
  ],

  clusters: [
    { key:'0', label:'0 · Shell and globals' },
    { key:'1', label:'1 · Session' },
    { key:'2', label:'2 · Take the shift' },
    { key:'3', label:'3 · Work the queue' },
    { key:'4', label:'4 · Rule on the case' },
    { key:'5', label:'5 · Answer for it later' },
    { key:'6', label:'6 · Tell the client' },
    { key:'7', label:'7 · Grant the rope' },
    { key:'8', label:'8 · Systemic' },
  ],

  /* Nodes that are NOT screens. They render inside a host, and the coverage map says so,
     because a node with no file has to be distinguishable from a node nobody built. */
  inside: [
    { node:'0.1', label:'Console shell',              host:'Every authenticated screen' },
    { node:'0.2', label:'Global navigation',          host:'Z1 of the shell' },
    { node:'0.3', label:'Tenant autonomy annunciator',host:'Z3 of the shell' },
    { node:'0.4', label:'Live connection status',     host:'Z2 of the shell' },
    { node:'0.6', label:'Action class taxonomy',      host:'A canonical list. Read by 3.1, 3.5, 4.1' },
    { node:'0.7', label:'Rejection reason taxonomy',  host:'A canonical list. Rendered by 4.4' },
    { node:'0.8', label:'Reading conventions',        host:'A canonical list. Read by every screen' },
    { node:'3.5', label:'Fleet',                      host:'The resting state of the pane on 3.1' },
    { node:'3.6', label:'Scope and filters',          host:'A band inside 3.1 and 5.1' },
    { node:'8.4', label:'Toast stack',                host:'A layer over any screen that raises a condition' },
  ],

  screens: [
    /* ---------- flow 1, the main job. Step 1 chose these six ---------- */
    { screen:'queue', node:'3.1', ia:'case-queue.html', label:'Case Queue',
      cluster:'3', flow:'main', scope:'MVP', status:'built', reference:true,
      states:[
        {slug:'',            label:'Default',              kind:'base'},
        {slug:'streaming',   label:'Streaming in, 3.2',    kind:'loading'},
        {slug:'stale',       label:'Stale, 3.3',           kind:'error'},
        {slug:'empty',       label:'Nothing waiting, 3.4', kind:'empty'},
        {slug:'no-match',    label:'Filtered to nothing',  kind:'empty'},
        {slug:'decided',     label:'Just filed',           kind:'success'},
        {slug:'clerk-down',  label:'Clerk not investigating', kind:'domain'},
        {slug:'taken',       label:'Taken by a colleague', kind:'domain'},
        {slug:'escalated',   label:'Just escalated, 4.6', kind:'success'},
      ],
      noState:[{label:'Out of scope', why:'Not a state of the page. Tenants outside her provider scope are never rendered, not even greyed, so there is nothing to draw. It is an absence in the data'}] },

    { screen:'case', node:'4.1', ia:'case-file.html', label:'Case File in the detail pane',
      cluster:'4', flow:'main', scope:'MVP', status:'built',
      states:[
        {slug:'',              label:'Filed and waiting',   kind:'base'},
        {slug:'investigating', label:'Clerk working, 4.3',  kind:'loading'},
        {slug:'acted',         label:'Clerk already acted', kind:'domain'},
        {slug:'amend',         label:'Amending, 4.5',       kind:'domain'},
        {slug:'no-baseline',   label:'No baseline, 4.8',    kind:'empty'},
        {slug:'expired',       label:'Evidence expired, 4.7',kind:'error'},
        {slug:'write-failed',  label:'Did not write, 4.9',  kind:'error'},
        {slug:'unrecorded',    label:'Held locally, 4.10',  kind:'domain'},
      ], noState:[] },

    { screen:'reject', node:'4.4', ia:'reject.html', label:'Reject with a reason',
      cluster:'4', flow:'main', scope:'MVP', status:'built',
      states:[
        {slug:'',              label:'Opened, nothing chosen', kind:'base'},
        {slug:'chosen',        label:'Reason chosen',          kind:'success'},
        {slug:'axis-b',        label:'Second axis required',   kind:'domain'},
        {slug:'tenant-normal', label:'Normal at this tenant',  kind:'domain'},
        {slug:'write-failed',  label:'Did not write, 4.9',     kind:'error'},
      ],
      noState:[{label:'Loading', why:'Nothing is fetched. The taxonomy is a canonical list already in the client, from 0.7'}] },

    { screen:'escalate', node:'4.6', ia:'escalate.html', label:'Escalate',
      cluster:'4', flow:'main', scope:'MVP', status:'built',
      states:[
        {slug:'',             label:'Default',              kind:'base'},
        {slug:'from-expired', label:'Opened from 4.7',      kind:'domain'},
        {slug:'no-recipient', label:'Nobody on the rota',   kind:'empty'},
        {slug:'write-failed', label:'Did not write, 4.9',   kind:'error'},
      ],
      noState:[
        {label:'Loading', why:'The rota is read with the case, not on opening the dialog'},
        {label:'At 360',  why:'A viewport, not a state. The same page narrowed, which is what the responsive rule means'}] },

    { screen:'log', node:'5.1', ia:'decision-log.html', label:'Decision log',
      cluster:'5', flow:'main', scope:'MVP', status:'built',
      states:[
        {slug:'',              label:'Default',            kind:'base'},
        {slug:'narrowing',     label:'Narrowing, 5.2',     kind:'loading'},
        {slug:'not-found',     label:'Not findable, 5.3',  kind:'empty'},
        {slug:'selected',      label:'Entry selected',     kind:'domain'},
        {slug:'snapshot-gone', label:'Snapshot gone, 5.5', kind:'error'},
      ],
      noState:[{label:'Success', why:'Nothing is submitted here. The log is read only, and the write happened at 4.1'}] },

    { screen:'entry', node:'5.4', ia:'log-entry.html', label:'Log entry, ?as-of',
      cluster:'5', flow:'main', scope:'MVP', status:'spec',
      states:[
        {slug:'',                 label:'Full snapshot',    kind:'base'},
        {slug:'partial',          label:'Partly gone',      kind:'domain'},
        {slug:'gone',             label:'Nothing survived, 5.5', kind:'error'},
        {slug:'changed',          label:'Live case changed',kind:'domain'},
        {slug:'beyond-retention', label:'Beyond retention', kind:'domain'},
      ],
      noState:[
        {label:'Loading', why:'It resolves as a page load. A spinner inside a permalink is a second wait for one navigation'},
        {label:'Success', why:'Nothing is submitted. This is the record, not a form'}] },

    /* ---------- flow 2, the shift ---------- */
    { screen:'shift', node:'2.1', ia:'shift-brief.html', label:'Shift brief',
      cluster:'2', flow:'shift', scope:'MVP', status:'spec',
      states:[
        {slug:'',                label:'Incoming',            kind:'base'},
        {slug:'outgoing',        label:'Outgoing, mid shift', kind:'role'},
        {slug:'assembling',      label:'Assembling, 2.2',     kind:'loading'},
        {slug:'nothing-carried', label:'Nothing carried, 2.3',kind:'empty'},
        {slug:'sealed',          label:'Sealed, 2.4',         kind:'success'},
        {slug:'close-failed',    label:'Close failed, 2.5',   kind:'error'},
        {slug:'unsealed',        label:'Nobody sealed it',    kind:'domain'},
      ], noState:[] },

    /* ---------- flow 3, answer for it later ---------- */
    { screen:'case-history', node:'5.6', ia:null, label:'History of one case',
      cluster:'5', flow:'answer', scope:'MVP', status:'spec',
      states:[
        {slug:'',           label:'Default',          kind:'base'},
        {slug:'superseded', label:'A superseded entry', kind:'domain'},
      ],
      noState:[{label:'Loading, error, success', why:'It is a narrowing of 5.1 and inherits all three from it'}] },

    /* ---------- flow 1 at 360 and by permalink ---------- */
    { screen:'case-standalone', node:'4.2', ia:'case-standalone.html', label:'Case File, standalone route',
      cluster:'4', flow:'main', scope:'MVP', status:'spec',
      states:[
        {slug:'',      label:'Arrived by link', kind:'base'},
        {slug:'filed', label:'After filing',    kind:'success'},
        {slug:'stale', label:'Connection stale',kind:'error'},
      ],
      noState:[{label:'The three 360 columns of the node matrix', why:'Viewports, not states. The same three pages narrowed, which is what one live responsive screen means'}] },

    /* ---------- flow 4, the door ---------- */
    { screen:'index', node:'1.1', ia:'sign-in.html', label:'Sign in',
      cluster:'1', flow:'door', scope:'MVP', status:'spec',
      states:[
        {slug:'',           label:'Arrived on purpose', kind:'base'},
        {slug:'deep-link',  label:'Arrived by a deep link', kind:'role'},
        {slug:'expired',    label:'Session expired, 1.2',   kind:'domain'},
        {slug:'signed-out', label:'Signed out deliberately',kind:'domain'},
        {slug:'idp-error',  label:'Identity provider failed',kind:'error'},
      ],
      noState:[{label:'Empty', why:'One field and one button. There is no collection here that can be empty'}] },

    /* ---------- flow 5, systemic ---------- */
    { screen:'not-found', node:'8.1', ia:'not-found.html', label:'Not found',
      cluster:'8', flow:'sys', scope:'MVP', status:'spec',
      states:[{slug:'', label:'Default', kind:'base'}],
      noState:[{label:'Everything else', why:'It is itself an error state. A state of a state is a node the map does not have'}] },

    { screen:'unavailable', node:'8.2', ia:'service-unavailable.html', label:'Service unavailable',
      cluster:'8', flow:'sys', scope:'MVP', status:'spec',
      states:[
        {slug:'',         label:'Unplanned',          kind:'base'},
        {slug:'planned',  label:'Planned maintenance',kind:'domain'},
        {slug:'partial',  label:'Part of it is down', kind:'domain'},
      ], noState:[] },

    { screen:'keyboard', node:'0.5', ia:'keyboard-map.html', label:'Keyboard map',
      cluster:'0', flow:'sys', scope:'MVP', status:'spec',
      states:[{slug:'', label:'Open over a screen', kind:'base'}],
      noState:[{label:'Loading, error, empty', why:'A static list rendered from the client. None of the three can occur'}] },

    /* ---------- LATER. On the map, not drawn this round ---------- */
    { screen:'client-summary', node:'6.1', ia:null, label:'Client summary draft',
      cluster:'6', flow:'answer', scope:'LATER', status:'spec', states:[], noState:[] },
    { screen:'client-send',    node:'6.2', ia:null, label:'Editing and sending',
      cluster:'6', flow:'answer', scope:'LATER', status:'spec', states:[], noState:[] },
    { screen:'tenant',         node:'7.1', ia:null, label:'Tenant detail',
      cluster:'7', flow:'answer', scope:'LATER', status:'spec', states:[], noState:[] },
    { screen:'grants',         node:'7.2', ia:null, label:'Autonomy grants',
      cluster:'7', flow:'answer', scope:'LATER', status:'spec', states:[], noState:[] },
    { screen:'grant-change',   node:'7.3', ia:null, label:'Grant change',
      cluster:'7', flow:'answer', scope:'LATER', status:'spec', states:[], noState:[] },
    { screen:'denied',         node:'8.3', ia:'permission-denied.html', label:'Permission denied',
      cluster:'8', flow:'sys', scope:'LATER', status:'spec', states:[], noState:[] },
  ],
};

/* ---------- the global shell, rendered once here so every page is thin ----------
 * Z1 (0.1 zone 1 with 0.2 navigation and 0.3 annunciator) and Z2 (0.4 connection strip)
 * are identical on every authenticated screen, so they are written once and called with
 * what differs. A page that redraws the header is a page that will drift from it.
 *
 *   WF_SHELL({ current:'queue', annun:<fleet|tenant object>, strip:'live'|<object> })
 */
window.WF_SHELL = function(o){
  o = o || {};
  var NAVITEMS = [
    { id:'queue', label:'Queue', href:'queue.html' },
    { id:'shift', label:'Shift', href:'shift.html' },
    { id:'log',   label:'Log',   href:'log.html'   },
  ];

  /* 0.3. With nothing selected it reads the fleet; with a case selected it reads that tenant.
     It redraws on TENANT change, never on every arrow key. */
  var FLEET = { kind:'fleet', lead:'FLEET', parts:['40 tenants',
                'acts alone up to <b>contain network</b> at 3', '<b>1</b> moved down'] };
  var a = o.annun || FLEET;
  if (a === 'fleet') a = FLEET;

  var STRIPS = {
    live:        { cls:'',            html:'<b>Live</b> last case 4s <span class="sep">&middot;</span> Clerk investigating 3' },
    arriving:    { cls:'',            html:'<b>Live</b> last case 1s <span class="sep">&middot;</span> <b>3 arriving</b>' },
    reconnecting:{ cls:'is-degraded', html:'<b>Reconnecting</b> the queue has stood still for 40s <span class="sep">&middot;</span> how many cases were missed is not known' },
    stale:       { cls:'is-degraded', html:'<b>Stale</b> nothing has arrived for 6m <span class="sep">&middot;</span> decide on what is here, it is marked as of the last sync' },
    clerkdown:   { cls:'is-degraded', html:'<b>Clerk is not investigating</b> since 11m <span class="sep">&middot;</span> the connection is fine, so <b>the queue is complete</b>' },
  };
  var st = o.strip || 'live';
  if (typeof st === 'string') st = STRIPS[st] || STRIPS.live;

  var z1 = document.getElementById('wf-z1');
  if (z1) {
    z1.className = 'z1';
    z1.innerHTML =
      '<span class="wordmark">Harrier</span>' +
      '<nav aria-label="Sections">' + NAVITEMS.map(function(n){
        /* the registry decides whether this is a link yet. A global item that 404s is worse
           than one that is plainly not built, and this heals itself as screens are built */
        var rec = (window.WF_NAV.screens || []).filter(function(x){ return x.screen === n.id; })[0];
        if (rec && rec.status !== 'built')
          return '<span title="not drawn yet">' + n.label + '</span>';
        return '<a href="' + n.href + '"' + (n.id === o.current ? ' aria-current="page"' : '') + '>' + n.label + '</a>';
      }).join('') + '</nav>' +
      '<span class="spacer"></span>' +
      '<p class="annun" aria-label="Tenant autonomy"><b>' + a.lead + '</b>' +
        a.parts.map(function(p){ return '<span class="sep">|</span>' + p; }).join('') +
      '</p>' +
      '<span class="mono dim" style="font-size:var(--t-xs)">R. Idrissi</span>';
  }
  var z2 = document.getElementById('wf-z2');
  if (z2) {
    z2.className = 'z2 ' + st.cls;
    z2.innerHTML = st.html + ' <span class="sep">&middot;</span> 0.4';
  }
};

/* ---------- the panel's own rules, injected so the shared sheet stays untouched ---------- */
(function(){
  if (document.getElementById('wf-panel-css')) return;
  var st = document.createElement('style'); st.id = 'wf-panel-css';
  st.textContent =
    '#sidebar{position:sticky;top:20px;max-height:calc(100vh - 40px);overflow-y:auto;' +
      'scrollbar-width:thin;padding-right:4px}' +
    '.wf-badge{display:inline-block;font:600 10px/1 var(--mono,monospace);letter-spacing:.14em;' +
      'border:1px solid var(--nav-active);color:var(--nav-active);border-radius:3px;padding:3px 6px}' +
    '.wf-sub{margin:6px 0 14px;font-size:11.5px;color:var(--nav-muted)}' +
    '.wf-clu{padding:12px 10px 4px;font-size:10.5px;letter-spacing:.09em;text-transform:uppercase;' +
      'color:var(--nav-muted)}' +
    '.nav-link .wf-num{font-family:var(--mono,monospace);font-size:11px;color:var(--nav-muted);' +
      'min-width:26px;display:inline-block}' +
    '.nav-link.is-current .wf-num{color:var(--nav-active)}' +
    '.wf-states{list-style:none;margin:2px 0 6px;padding-left:22px;' +
      'border-left:1px solid var(--nav-rule)}' +
    '.wf-states a,.wf-states span{display:block;padding:3px 8px;border-radius:5px;font-size:12.5px;' +
      'color:var(--nav-fg);text-decoration:none}' +
    '.wf-states span{color:var(--nav-muted)}' +
    '.wf-states a:hover{background:color-mix(in srgb, var(--nav-active) 8%, transparent)}' +
    '.wf-states .is-current{color:var(--nav-active);font-weight:600}' +
    '.wf-out{margin-top:18px;padding-top:12px;border-top:1px solid var(--nav-rule);font-size:12px}' +
    '.wf-out a{color:var(--nav-muted);text-decoration:none;display:block;padding:3px 10px}' +
    '.wf-out a:hover{color:var(--nav-active)}' +
    '@media (max-width:900px){#sidebar{position:static;max-height:none;overflow:visible}}';
  document.head.appendChild(st);
})();

/* ---------- job 1: the stage panel, on every page ---------- */
(function(){
  var host = document.getElementById('sidebar');
  if (!host || !window.WF_NAV) return;
  var N = window.WF_NAV;

  var file = (location.pathname.split('/').pop() || 'overview.html');
  if (!/\.html$/.test(file)) file = 'overview.html';
  var here = window.WF_ACTIVE || file;

  /* which screen and which state is this page */
  var cur = null, curSlug = null;
  N.screens.forEach(function(s){
    (s.states || []).forEach(function(st){
      var f = s.screen + (st.slug ? '-' + st.slug : '') + '.html';
      if (f === here) { cur = s; curSlug = st.slug; }
    });
  });

  function el(t, cls, txt){ var e = document.createElement(t); if (cls) e.className = cls;
                            if (txt != null) e.textContent = txt; return e; }

  var frag = document.createDocumentFragment();

  /* 1. the way back out of the stage */
  var back = el('div', 'wf-out'); back.style.cssText = 'margin:0 0 14px;padding:0;border:none';
  var backA = el('a', null, '← Design process'); backA.href = '../index.html';
  back.appendChild(backA); frag.appendChild(back);

  /* 2. badge and subtitle */
  frag.appendChild(el('span', 'wf-badge', 'WIREFRAMES'));
  frag.appendChild(el('p', 'wf-sub', 'grey clickable prototype'));

  /* 3. all screens, first item */
  var top = el('ul', 'nav-roadmap');
  var hubLi = el('li', 'nav-item' + (here === 'overview.html' ? ' is-active' : ''));
  var hubA = el(here === 'overview.html' ? 'span' : 'a', 'nav-top', 'All screens');
  if (here !== 'overview.html') hubA.href = 'overview.html';
  hubLi.appendChild(hubA);
  if (here === 'overview.html' && window.NAV_SECTIONS) {
    var secs = el('ul', 'nav-sections');
    window.NAV_SECTIONS.forEach(function(s){
      var a = el('a', 'nav-section', s.label); a.href = '#' + s.id;
      a.setAttribute('data-sec', s.id);
      var li = el('li'); li.appendChild(a); secs.appendChild(li);
    });
    hubLi.appendChild(secs);
  }
  top.appendChild(hubLi);
  frag.appendChild(top);

  /* 4. the tree: cluster, screen, states */
  var built = 0, total = 0;
  N.clusters.forEach(function(c){
    var mine = N.screens.filter(function(s){ return s.cluster === c.key; });
    if (!mine.length) return;
    frag.appendChild(el('div', 'wf-clu', c.label));
    var ul = el('ul', 'nav-roadmap');
    mine.forEach(function(s){
      total++;
      if (s.status === 'built') built++;
      var isCur = (cur === s);
      var li = el('li', 'nav-item' + (isCur ? ' is-active' : ''));
      var base = s.screen + '.html';
      var live = s.status === 'built';
      var a = el(live ? 'a' : 'span', 'nav-link' + (isCur && !curSlug ? ' is-current' : ''));
      if (live) a.href = base;
      a.appendChild(el('span', 'wf-num', s.node));
      a.appendChild(el('span', null, s.label));
      if (!live) { var b = el('span', 'nav-badge nav-badge-soon', s.scope === 'LATER' ? 'later' : 'spec');
                   a.appendChild(b); }
      li.appendChild(a);
      if (isCur && s.states.length) {
        var us = el('ul', 'wf-states');
        s.states.forEach(function(st){
          var f = s.screen + (st.slug ? '-' + st.slug : '') + '.html';
          var on = (st.slug === curSlug);
          var x = el(live ? 'a' : 'span', on ? 'is-current' : null, st.label);
          if (live) x.href = f;
          var lis = el('li'); lis.appendChild(x); us.appendChild(lis);
        });
        li.appendChild(us);
      }
      ul.appendChild(li);
    });
    frag.appendChild(ul);
  });

  /* 5. the way out of the prototype, quietly, at the bottom */
  var out = el('div', 'wf-out');
  if (cur && cur.ia) {
    var ia = el('a', null, '← IA specification (' + cur.node + ')');
    ia.href = '../ia/' + cur.ia; out.appendChild(ia);
  }
  var map = el('a', null, '← Node map'); map.href = '../ia/structure.html'; out.appendChild(map);
  frag.appendChild(out);

  host.innerHTML = '';
  host.appendChild(frag);

  /* section highlight on the hub, the same behaviour the root registry has */
  var secLinks = host.querySelectorAll('.nav-section[data-sec]');
  if (secLinks.length && 'IntersectionObserver' in window) {
    var byId = {}; secLinks.forEach(function(a){ byId[a.getAttribute('data-sec')] = a; });
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        var a = byId[e.target.id]; if (!a) return;
        if (e.isIntersecting) { secLinks.forEach(function(x){ x.classList.remove('is-current'); });
                                a.classList.add('is-current'); }
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    Object.keys(byId).forEach(function(id){ var n = document.getElementById(id); if (n) io.observe(n); });
  }

  window.WF_TALLY = { built: built, total: total };
})();

/* ---------- jobs 2 and 3: the hub's coverage map and state matrix ---------- */
(function(){
  var N = window.WF_NAV;
  if (!N) return;

  var cov = document.getElementById('wf-coverage');
  if (cov) {
    var pagesOf = function(s){ return s.states.length || 0; };
    var out = '';
    N.clusters.forEach(function(c){
      var mine = N.screens.filter(function(s){ return s.cluster === c.key; });
      var ins  = N.inside.filter(function(i){ return i.node.charAt(0) === c.key; });
      if (!mine.length && !ins.length) return;
      out += '<h3 class="cov-h">' + c.label + '</h3><div class="cov-grid">';
      mine.forEach(function(s){
        var cls = 'cov' + (s.status === 'built' ? ' is-built' : '') + (s.scope === 'LATER' ? ' is-later' : '');
        out += '<div class="' + cls + '"><b>' + s.node + '</b> ' + s.label +
               '<span class="cov-meta">' + (s.status === 'built'
                 ? pagesOf(s) + ' pages'
                 : (s.scope === 'LATER' ? 'LATER' : pagesOf(s) + ' pages specified')) + '</span></div>';
      });
      ins.forEach(function(i){
        out += '<div class="cov is-inside"><b>' + i.node + '</b> ' + i.label +
               '<span class="cov-meta">renders inside: ' + i.host + '</span></div>';
      });
      out += '</div>';
    });
    cov.innerHTML = out;
    var t = document.getElementById('wf-tally');
    if (t) {
      var b = N.screens.filter(function(s){ return s.status === 'built'; }).length;
      var mvp = N.screens.filter(function(s){ return s.scope === 'MVP'; }).length;
      var pages = N.screens.filter(function(s){ return s.scope === 'MVP'; })
                           .reduce(function(a,s){ return a + s.states.length; }, 0);
      t.textContent = b + ' built of ' + mvp + ' MVP screens, ' + pages + ' state pages specified';
    }
  }

  var mx = document.getElementById('wf-matrix');
  if (mx) {
    var kinds = ['base','loading','error','empty','success'];
    var head = '<thead><tr><th>Screen</th><th>Scope</th>' +
      kinds.map(function(k){ return '<th>' + k + '</th>'; }).join('') +
      '<th>Also, from the node matrix</th><th>Not here, and why</th></tr></thead>';
    var body = N.screens.filter(function(s){ return s.states.length; }).map(function(s){
      var cells = kinds.map(function(k){
        var hit = s.states.filter(function(st){ return st.kind === k; });
        return '<td class="' + (hit.length ? 'yes' : 'no') + '">' +
               (hit.length ? hit.map(function(h){ return h.label; }).join('<br>') : '-') + '</td>';
      }).join('');
      var extra = s.states.filter(function(st){ return kinds.indexOf(st.kind) < 0; })
                          .map(function(st){ return st.label; }).join(' &middot; ') || '<span class="dim">none</span>';
      var why = (s.noState || []).map(function(n){
                  return '<b>' + n.label + ':</b> ' + n.why; }).join('<br>') || '<span class="dim">nothing missing</span>';
      return '<tr><td><b>' + s.node + '</b> ' + s.label + '</td><td>' + s.scope + '</td>' +
             cells + '<td>' + extra + '</td><td class="why">' + why + '</td></tr>';
    }).join('');
    mx.innerHTML = '<table>' + head + '<tbody>' + body + '</tbody></table>';
  }
})();
