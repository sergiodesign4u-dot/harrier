/* ia/_nav.js  ---  registry of DETAIL LAYER nodes (stage 03b).
 *
 * Own namespace: window.IA_NAV. The roadmap of stage pages lives in the ROOT /_nav.js
 * (window.NAV, classes nav-*). Both scripts run on structure.html at once, so a name
 * collision here would silently break the roadmap sidebar.
 *
 * One record per node of ia/docs/sitemap.md:
 *   node   'X.Y'                    number in the node map
 *   label  string                   name as it reads in the map
 *   type   page|dialog|state|section|loading|empty|error
 *   group  'global' | 'pages'       which section of the hub it lands in
 *   scope  'MVP' | 'LATER'
 *   file   'name.html' or null      null = registered on the map, page not built yet
 *
 * A node with file:null is NOT a hole. The map is complete from step 1; pages arrive
 * one at a time, and the chip turns into a link the moment its page exists.
 * This file is included by the HUB ONLY (ia/structure.html). Node pages do not include
 * it: they register here with one record and declare NAV_ACTIVE plus NAV_ACTIVE_LABEL.
 */
window.IA_NAV = [
  /* 0 shell and navigation */
  { node:'0.1',  label:'Console shell',                 type:'page',    group:'global', scope:'MVP',   file:'console-shell.html' },
  { node:'0.2',  label:'Global navigation',             type:'section', group:'global', scope:'MVP',   file:'global-navigation.html' },
  { node:'0.3',  label:'Tenant autonomy annunciator',   type:'section', group:'global', scope:'MVP',   file:'autonomy-annunciator.html' },
  { node:'0.4',  label:'Live connection status',        type:'state',   group:'global', scope:'MVP',   file:null },
  { node:'0.5',  label:'Keyboard map',                  type:'dialog',  group:'global', scope:'MVP',   file:null },
  /* 8 systemic, global too */
  { node:'8.1',  label:'Not found',                     type:'state',   group:'global', scope:'MVP',   file:null },
  { node:'8.2',  label:'Service unavailable',           type:'state',   group:'global', scope:'MVP',   file:null },
  { node:'8.3',  label:'Permission denied',             type:'state',   group:'global', scope:'MVP',   file:null },
  { node:'8.4',  label:'Toast stack',                   type:'section', group:'global', scope:'MVP',   file:null },
  /* 1 session */
  { node:'1.1',  label:'Sign in',                       type:'page',    group:'pages',  scope:'MVP',   file:null },
  { node:'1.2',  label:'Session expired',               type:'dialog',  group:'pages',  scope:'MVP',   file:null },
  /* 2 take the shift */
  { node:'2.1',  label:'Shift brief',                   type:'page',    group:'pages',  scope:'MVP',   file:null },
  { node:'2.2',  label:'Assembling',                    type:'loading', group:'pages',  scope:'MVP',   file:null },
  { node:'2.3',  label:'Nothing carried over',          type:'empty',   group:'pages',  scope:'MVP',   file:null },
  { node:'2.4',  label:'Closed by the outgoing analyst',type:'state',   group:'pages',  scope:'MVP',   file:null },
  { node:'2.5',  label:'Close failed',                  type:'error',   group:'pages',  scope:'MVP',   file:null },
  /* 3 work the queue */
  { node:'3.1',  label:'Case Queue',                    type:'page',    group:'pages',  scope:'MVP',   file:null },
  { node:'3.2',  label:'Queue streaming in',            type:'loading', group:'pages',  scope:'MVP',   file:null },
  { node:'3.3',  label:'Queue stale',                   type:'error',   group:'pages',  scope:'MVP',   file:null },
  { node:'3.4',  label:'Nothing waiting on a decision', type:'empty',   group:'pages',  scope:'MVP',   file:null },
  { node:'3.5',  label:'Fleet, resting state of the pane', type:'section', group:'pages', scope:'MVP', file:null },
  { node:'3.6',  label:'Scope and filters',             type:'section', group:'pages',  scope:'MVP',   file:null },
  /* 4 rule on the case */
  { node:'4.1',  label:'Case File in the detail pane',  type:'page',    group:'pages',  scope:'MVP',   file:null },
  { node:'4.2',  label:'Case File, standalone route',   type:'page',    group:'pages',  scope:'MVP',   file:null },
  { node:'4.3',  label:'Clerk still investigating',     type:'loading', group:'pages',  scope:'MVP',   file:null },
  { node:'4.4',  label:'Reject with a reason',          type:'dialog',  group:'pages',  scope:'MVP',   file:null },
  { node:'4.5',  label:'Amend the narrative',           type:'state',   group:'pages',  scope:'MVP',   file:null },
  { node:'4.6',  label:'Escalate',                      type:'dialog',  group:'pages',  scope:'MVP',   file:null },
  { node:'4.7',  label:'Evidence expired',              type:'error',   group:'pages',  scope:'MVP',   file:null },
  { node:'4.8',  label:'No baseline for this tenant',   type:'empty',   group:'pages',  scope:'MVP',   file:null },
  { node:'4.9',  label:'Verdict did not write',         type:'error',   group:'pages',  scope:'MVP',   file:null },
  { node:'4.10', label:'Held locally, unrecorded',      type:'state',   group:'pages',  scope:'MVP',   file:null },
  /* 5 answer for it later */
  { node:'5.1',  label:'Decision log',                  type:'page',    group:'pages',  scope:'MVP',   file:null },
  { node:'5.2',  label:'Narrowing before rendering',    type:'loading', group:'pages',  scope:'MVP',   file:null },
  { node:'5.3',  label:'Case not findable',             type:'empty',   group:'pages',  scope:'MVP',   file:null },
  { node:'5.4',  label:'Log entry, as-of',              type:'page',    group:'pages',  scope:'MVP',   file:null },
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
