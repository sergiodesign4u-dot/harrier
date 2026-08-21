/* ia/_nav.js  ---  the ONE registry of stage 03b, doing TWO jobs from one record.
 *
 * Job 1: the STAGE PANEL, rendered into <aside id="sidebar"> on EVERY page under ia/.
 *        Groups: Base layer, Detail layer, then cluster by cluster with its X.Y nodes.
 *        Node to node is one click; going back to the hub for a chip is not needed.
 * Job 2: the CHIPS, rendered into <div id="ia-structure"> on the hub, structure.html.
 *
 * IA pages do NOT include the root /_nav.js and do NOT render the roadmap. Two panels on
 * one page give two left gutters and the text slides under one of them. The root registry
 * stays the owner of stage status (done, wip, Next) and is read there, not here.
 * The way back out of the stage is the first panel item, because the roadmap is not present.
 *
 * One record per node of ia/docs/sitemap.md:
 *   node   'X.Y'                    number in the node map
 *   label  string                   name as it reads in the map
 *   type   page|dialog|state|section|loading|empty|error
 *   group  'global' | 'pages'       which section of the hub chips it lands in
 *   scope  'MVP' | 'LATER'
 *   file   'name.html' or null      null = on the map, page not built yet
 *
 * A node with file:null is NOT a hole. The map is complete from step 1; pages arrive one
 * at a time, and both the panel item and the chip turn into links the moment a page exists.
 *
 * A page may set window.IA_ACTIVE to name itself; otherwise the panel matches on filename.
 * window.NAV_SECTIONS still carries the in-page sections and is rendered under the
 * current item, exactly as the root registry does it.
 */
window.IA_NAV = [
  /* 0 shell and navigation */
  { node:'0.1',  label:'Console shell',                 type:'page',    group:'global', scope:'MVP',   file:'console-shell.html' },
  { node:'0.2',  label:'Global navigation',             type:'section', group:'global', scope:'MVP',   file:'global-navigation.html' },
  { node:'0.3',  label:'Tenant autonomy annunciator',   type:'section', group:'global', scope:'MVP',   file:'autonomy-annunciator.html' },
  { node:'0.4',  label:'Live connection status',        type:'state',   group:'global', scope:'MVP',   file:'connection-status.html' },
  { node:'0.5',  label:'Keyboard map',                  type:'dialog',  group:'global', scope:'MVP',   file:'keyboard-map.html' },
  { node:'0.6',  label:'Action class taxonomy',         type:'section', group:'global', scope:'MVP',   file:'action-class-taxonomy.html' },
  { node:'0.7',  label:'Rejection reason taxonomy',     type:'section', group:'global', scope:'MVP',   file:'rejection-reason-taxonomy.html' },
  { node:'0.8',  label:'Reading conventions',           type:'section', group:'global', scope:'MVP',   file:'reading-conventions.html' },
  /* 8 systemic, global too */
  { node:'8.1',  label:'Not found',                     type:'state',   group:'global', scope:'MVP',   file:'not-found.html' },
  { node:'8.2',  label:'Service unavailable',           type:'state',   group:'global', scope:'MVP',   file:'service-unavailable.html' },
  { node:'8.3',  label:'Permission denied',             type:'state',   group:'global', scope:'LATER',   file:'permission-denied.html' },
  { node:'8.4',  label:'Toast stack',                   type:'section', group:'global', scope:'MVP',   file:'toast-stack.html' },
  /* 1 session */
  { node:'1.1',  label:'Sign in',                       type:'page',    group:'pages',  scope:'MVP',   file:'sign-in.html' },
  { node:'1.2',  label:'Session expired',               type:'dialog',  group:'pages',  scope:'MVP',   file:null },
  /* 2 take the shift */
  { node:'2.1',  label:'Shift brief',                   type:'page',    group:'pages',  scope:'MVP',   file:'shift-brief.html' },
  { node:'2.2',  label:'Assembling',                    type:'loading', group:'pages',  scope:'MVP',   file:null },
  { node:'2.3',  label:'Nothing carried over',          type:'empty',   group:'pages',  scope:'MVP',   file:null },
  { node:'2.4',  label:'Closed by the outgoing analyst',type:'state',   group:'pages',  scope:'MVP',   file:null },
  { node:'2.5',  label:'Close failed',                  type:'error',   group:'pages',  scope:'MVP',   file:null },
  /* 3 work the queue */
  { node:'3.1',  label:'Case Queue',                    type:'page',    group:'pages',  scope:'MVP',   file:'case-queue.html' },
  { node:'3.2',  label:'Queue streaming in',            type:'loading', group:'pages',  scope:'MVP',   file:null },
  { node:'3.3',  label:'Queue stale',                   type:'error',   group:'pages',  scope:'MVP',   file:null },
  { node:'3.4',  label:'Nothing waiting on a decision', type:'empty',   group:'pages',  scope:'MVP',   file:null },
  { node:'3.5',  label:'Fleet, the resting state of the detail pane', type:'section', group:'pages', scope:'MVP', file:'fleet.html' },
  { node:'3.6',  label:'Scope and filters',             type:'section', group:'pages',  scope:'MVP',   file:'scope-filters.html' },
  /* 4 rule on the case */
  { node:'4.1',  label:'Case File in the detail pane',  type:'page',    group:'pages',  scope:'MVP',   file:'case-file.html' },
  { node:'4.2',  label:'Case File, standalone route',   type:'page',    group:'pages',  scope:'MVP',   file:'case-standalone.html' },
  { node:'4.3',  label:'Clerk still investigating',     type:'loading', group:'pages',  scope:'MVP',   file:null },
  { node:'4.4',  label:'Reject with a reason',          type:'dialog',  group:'pages',  scope:'MVP',   file:'reject.html' },
  { node:'4.5',  label:'Amend the narrative',           type:'state',   group:'pages',  scope:'MVP',   file:null },
  { node:'4.6',  label:'Escalate',                      type:'dialog',  group:'pages',  scope:'MVP',   file:'escalate.html' },
  { node:'4.7',  label:'Evidence expired',              type:'error',   group:'pages',  scope:'MVP',   file:null },
  { node:'4.8',  label:'No baseline for this tenant',   type:'empty',   group:'pages',  scope:'MVP',   file:null },
  { node:'4.9',  label:'Verdict did not write',         type:'error',   group:'pages',  scope:'MVP',   file:null },
  { node:'4.10', label:'Held locally, unrecorded',      type:'state',   group:'pages',  scope:'MVP',   file:null },
  /* 5 answer for it later */
  { node:'5.1',  label:'Decision log',                  type:'page',    group:'pages',  scope:'MVP',   file:'decision-log.html' },
  { node:'5.2',  label:'Narrowing before rendering',    type:'loading', group:'pages',  scope:'MVP',   file:null },
  { node:'5.3',  label:'Case not findable',             type:'empty',   group:'pages',  scope:'MVP',   file:null },
  { node:'5.4',  label:'Log entry, ?as-of',              type:'page',    group:'pages',  scope:'MVP',   file:'log-entry.html' },
  { node:'5.5',  label:'Snapshot did not survive',      type:'error',   group:'pages',  scope:'MVP',   file:null },
  { node:'5.6',  label:'History of one case',           type:'state',   group:'pages',  scope:'MVP',   file:null },
  /* 6 tell the client */
  { node:'6.1',  label:'Client summary draft',          type:'page',    group:'pages',  scope:'LATER', file:null },
  { node:'6.2',  label:'Editing and sending',           type:'state',   group:'pages',  scope:'LATER', file:null },
  /* 7 grant the rope */
  { node:'7.1',  label:'Tenant detail',                 type:'page',    group:'pages',  scope:'LATER', file:null },
  { node:'7.2',  label:'Autonomy grants',               type:'page',    group:'pages',  scope:'LATER', file:null },
  { node:'7.3',  label:'Grant change',                  type:'dialog',  group:'pages',  scope:'LATER', file:null },
];

/* ---------- the panel's own two rules, injected so the shared sheet stays untouched ---------- */
(function(){
  if (document.getElementById('ia-panel-css')) return;
  var st = document.createElement('style'); st.id = 'ia-panel-css';
  st.textContent =
    '#sidebar{position:sticky;top:24px;max-height:calc(100vh - 48px);overflow-y:auto;' +
      'scrollbar-width:thin;padding-right:4px}' +
    '.nav-link .ia-num{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;' +
      'color:var(--nav-muted);min-width:26px;display:inline-block}' +
    '.nav-link.is-current .ia-num{color:var(--nav-active)}' +
    '.nav-item.is-active > .nav-top{color:var(--nav-active)}' +
    '@media (max-width:900px){#sidebar{position:static;max-height:none;overflow:visible}}';
  document.head.appendChild(st);
})();

/* ---------- job 1: the stage panel ---------- */
(function(){
  var el = document.getElementById('sidebar');
  if (!el || !window.IA_NAV) return;

  var SECTIONS = window.NAV_SECTIONS || [];
  var CLUSTERS = {
    '0':'0 \u00b7 Shell and globals', '1':'1 \u00b7 Session',        '2':'2 \u00b7 Take the shift',
    '3':'3 \u00b7 Work the queue',    '4':'4 \u00b7 Rule on the case','5':'5 \u00b7 Answer for it later',
    '6':'6 \u00b7 Tell the client',   '7':'7 \u00b7 Grant the rope',  '8':'8 \u00b7 Systemic'
  };
  var LAYER = [
    { key:'base',   label:'Base layer',   pages:[ {k:'flows',    label:'Flows',       file:'flows.html'},
                                                  {k:'concept',  label:'Concept map', file:'concept-map.html'} ] },
    { key:'detail', label:'Detail layer', pages:[ {k:'sitemap',  label:'Sitemap',     file:'sitemap.html'},
                                                  {k:'structure',label:'Structure',   file:'structure.html'} ] }
  ];

  var here = (location.pathname.split('/').pop() || 'index.html');
  var active = window.IA_ACTIVE || null;
  if (!active) {
    var byFile = IA_NAV.filter(function(n){ return n.file === here; })[0];
    if (byFile) active = byFile.node;
    else LAYER.forEach(function(g){ g.pages.forEach(function(p){ if (p.file === here) active = p.k; }); });
  }

  function badge(text, kind){
    var b = document.createElement('span');
    b.className = 'nav-badge nav-badge-' + (kind || text.toLowerCase());
    b.textContent = text; return b;
  }
  function sectionList(){
    var s = document.createElement('ul'); s.className = 'nav-sections';
    SECTIONS.forEach(function(sec){
      var li = document.createElement('li'), a = document.createElement('a');
      a.href = '#' + sec.id; a.className = 'nav-section';
      a.setAttribute('data-section', sec.id); a.textContent = sec.label;
      li.appendChild(a); s.appendChild(li);
    });
    return s;
  }
  function row(file, num, label, isCur, later){
    var li = document.createElement('li'); li.className = 'nav-subitem';
    var a = document.createElement(file ? 'a' : 'span');
    if (file) a.href = file;
    a.className = 'nav-link' + (isCur ? ' is-current' : '');
    if (num) { var b = document.createElement('b'); b.className = 'ia-num'; b.textContent = num; a.appendChild(b); }
    a.appendChild(document.createTextNode(label));
    if (later) a.appendChild(badge('LATER','soon'));
    li.appendChild(a);
    if (isCur && SECTIONS.length) li.appendChild(sectionList());
    return li;
  }
  function group(label, isActive, rows){
    var li = document.createElement('li');
    li.className = 'nav-item ' + (isActive ? 'is-active' : 'is-done');
    var top = document.createElement('span'); top.className = 'nav-top'; top.textContent = label;
    li.appendChild(top);
    var sub = document.createElement('ul'); sub.className = 'nav-sub';
    rows.forEach(function(r){ sub.appendChild(r); });
    li.appendChild(sub);
    return li;
  }

  var ul = document.createElement('ul'); ul.className = 'nav-roadmap';

  /* the way out, because the roadmap is not rendered on IA pages */
  var out = document.createElement('li'); out.className = 'nav-item is-done';
  var oa = document.createElement('a'); oa.href = '../index.html'; oa.className = 'nav-top';
  oa.textContent = '\u2190 Harrier pipeline';
  out.appendChild(oa); ul.appendChild(out);

  LAYER.forEach(function(g){
    var isAct = g.pages.some(function(p){ return p.k === active; });
    ul.appendChild(group(g.label, isAct, g.pages.map(function(p){
      return row(p.file, null, p.label, p.k === active, false);
    })));
  });

  Object.keys(CLUSTERS).forEach(function(c){
    var nodes = IA_NAV.filter(function(n){ return n.node.split('.')[0] === c; });
    if (!nodes.length) return;
    var isAct = nodes.some(function(n){ return n.node === active; });
    ul.appendChild(group(CLUSTERS[c], isAct, nodes.map(function(n){
      return row(n.file, n.node, n.label, n.node === active, n.scope === 'LATER');
    })));
  });

  el.innerHTML = ''; el.appendChild(ul);

  if (SECTIONS.length && 'IntersectionObserver' in window) {
    var links = {};
    Array.prototype.forEach.call(document.querySelectorAll('.nav-section'), function(a){
      links[a.getAttribute('data-section')] = a;
    });
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        var a = links[e.target.id]; if (!a) return;
        if (e.isIntersecting) {
          Object.keys(links).forEach(function(k){ links[k].classList.remove('is-current'); });
          a.classList.add('is-current');
        }
      });
    }, { rootMargin: '-10% 0px -70% 0px' });
    SECTIONS.forEach(function(sec){ var t = document.getElementById(sec.id); if (t) obs.observe(t); });
  }
})();

/* ---------- job 2: the chips on the hub ---------- */
(function(){
  var el = document.getElementById('ia-structure');
  if (!el || !window.IA_NAV) return;
  var hash = (location.hash || '').replace('#', '');

  function chip(n){
    var isLink = !!n.file;
    var e = document.createElement(isLink ? 'a' : 'span');
    if (isLink) e.href = n.file;
    e.className = 'chip' + (isLink ? '' : ' chip-todo') +
                  (n.scope === 'LATER' ? ' chip-later' : '') +
                  (n.node === hash ? ' chip-active' : '');
    e.id = 'chip-' + n.node;
    var num = document.createElement('b'); num.textContent = n.node;
    var lab = document.createElement('span'); lab.className = 'chip-label'; lab.textContent = n.label;
    var typ = document.createElement('i'); typ.className = 'chip-type'; typ.textContent = n.type;
    e.appendChild(num); e.appendChild(lab); e.appendChild(typ);
    return e;
  }

  function section(title, sub, items){
    var wrap = document.createElement('div'); wrap.className = 'chipgroup';
    var h = document.createElement('h3'); h.textContent = title;
    var p = document.createElement('p'); p.className = 'chipsub'; p.textContent = sub;
    var grid = document.createElement('div'); grid.className = 'chips';
    items.forEach(function(n){ grid.appendChild(chip(n)); });
    wrap.appendChild(h); wrap.appendChild(p); wrap.appendChild(grid);
    return wrap;
  }

  var g = IA_NAV.filter(function(n){ return n.group === 'global'; });
  var p = IA_NAV.filter(function(n){ return n.group === 'pages';  });
  var built = IA_NAV.filter(function(n){ return !!n.file; }).length;

  el.innerHTML = '';
  el.appendChild(section('Global elements', g.length + ' nodes, present on every authenticated screen and specified once', g));
  el.appendChild(section('Pages', p.length + ' nodes across seven clusters, states and dialogs counted as their own', p));

  var tally = document.getElementById('ia-tally');
  if (tally) tally.textContent = built + ' of ' + IA_NAV.length;

  if (hash) {
    var target = document.getElementById('chip-' + hash);
    if (target) target.scrollIntoView({ block: 'center' });
  }
})();
