/* design/_nav.js :: the panel of stage 07, and it is the ONLY panel these pages carry.
 * Own namespace, window.DESIGN_NAV. The roadmap globals NAV, NAV_BASE, NAV_SECTIONS and the
 * nav-* classes belong to the root /_nav.js, exactly as wireframes/_nav.js keeps to WF_NAV.
 * A local registry that declared window.NAV would silently render the wrong array.
 *
 * The way back out of the stage is the FIRST row, `All screens` is the first item, and the
 * kit stands beside them rather than under them: a screen is assembled FROM the kit, so the
 * kit is not a screen and does not belong in the list of them.
 *
 * `colour` counts the states of a screen that exist in design/. The rest are grey and wait
 * for the rollout, which is a separate stage. The map has to SHOW that the product is not
 * all in colour yet, because a coverage map that hides it is worse than none.
 */
window.DESIGN_NAV = {
  clusters: [{"key": "0", "label": "0 \u00b7 Shell and globals"}, {"key": "1", "label": "1 \u00b7 Session"}, {"key": "2", "label": "2 \u00b7 Take the shift"}, {"key": "3", "label": "3 \u00b7 Work the queue"}, {"key": "4", "label": "4 \u00b7 Rule on the case"}, {"key": "5", "label": "5 \u00b7 Answer for it later"}, {"key": "6", "label": "6 \u00b7 Tell the client"}, {"key": "7", "label": "7 \u00b7 Grant the rope"}, {"key": "8", "label": "8 \u00b7 Systemic"}],
  screens: [
    { screen:"queue", node:"3.1", label:"Case Queue", cluster:"3", scope:"MVP", grey:true, colour:12, total:12,
      states:[
        {slug:"", label:"Default", colour:true},
        {slug:"streaming", label:"Streaming in, 3.2", colour:true},
        {slug:"reconnecting", label:"Reconnecting, 0.4", colour:true},
        {slug:"stale", label:"Stale, 3.3", colour:true},
        {slug:"empty", label:"Nothing waiting, 3.4", colour:true},
        {slug:"no-match", label:"Filtered to nothing", colour:true},
        {slug:"decided", label:"Just filed", colour:true},
        {slug:"clerk-down", label:"Clerk not investigating", colour:true},
        {slug:"taken", label:"Taken by a colleague", colour:true},
        {slug:"escalated", label:"Just escalated, 4.6", colour:true},
        {slug:"notice", label:"One notice, 8.4", colour:true},
        {slug:"notices", label:"Stack full, 8.4", colour:true},
      ]},
    { screen:"case", node:"4.1", label:"Case File in the detail pane", cluster:"4", scope:"MVP", grey:true, colour:8, total:8,
      states:[
        {slug:"", label:"Filed and waiting", colour:true},
        {slug:"investigating", label:"Clerk working, 4.3", colour:true},
        {slug:"acted", label:"Clerk already acted", colour:true},
        {slug:"amend", label:"Amending, 4.5", colour:true},
        {slug:"no-baseline", label:"No baseline, 4.8", colour:true},
        {slug:"expired", label:"Evidence expired, 4.7", colour:true},
        {slug:"write-failed", label:"Did not write, 4.9", colour:true},
        {slug:"unrecorded", label:"Held locally, 4.10", colour:true},
      ]},
    { screen:"reject", node:"4.4", label:"Reject with a reason", cluster:"4", scope:"MVP", grey:true, colour:0, total:6,
      states:[
        {slug:"", label:"Opened, nothing chosen", colour:false},
        {slug:"chosen", label:"Reason chosen", colour:false},
        {slug:"axis-b", label:"Second axis required", colour:false},
        {slug:"tenant-normal", label:"Normal at this tenant", colour:false},
        {slug:"other", label:"None of the six fits", colour:false},
        {slug:"write-failed", label:"Did not write, 4.9", colour:false},
      ]},
    { screen:"escalate", node:"4.6", label:"Escalate", cluster:"4", scope:"MVP", grey:true, colour:0, total:4,
      states:[
        {slug:"", label:"Default", colour:false},
        {slug:"from-expired", label:"Opened from 4.7", colour:false},
        {slug:"no-recipient", label:"Nobody on the rota", colour:false},
        {slug:"write-failed", label:"Did not write, 4.9", colour:false},
      ]},
    { screen:"log", node:"5.1", label:"Decision log", cluster:"5", scope:"MVP", grey:true, colour:0, total:5,
      states:[
        {slug:"", label:"Default", colour:false},
        {slug:"narrowing", label:"Narrowing, 5.2", colour:false},
        {slug:"not-found", label:"Not findable, 5.3", colour:false},
        {slug:"selected", label:"Entry selected", colour:false},
        {slug:"snapshot-gone", label:"Snapshot gone, 5.5", colour:false},
      ]},
    { screen:"entry", node:"5.4", label:"Log entry, ?as-of", cluster:"5", scope:"MVP", grey:true, colour:0, total:5,
      states:[
        {slug:"", label:"Full snapshot", colour:false},
        {slug:"partial", label:"Partly gone", colour:false},
        {slug:"gone", label:"Nothing survived, 5.5", colour:false},
        {slug:"changed", label:"Live case changed", colour:false},
        {slug:"beyond-retention", label:"Beyond retention", colour:false},
      ]},
    { screen:"shift", node:"2.1", label:"Shift brief", cluster:"2", scope:"MVP", grey:true, colour:7, total:7,
      states:[
        {slug:"", label:"Incoming", colour:true},
        {slug:"outgoing", label:"Outgoing, mid shift", colour:true},
        {slug:"assembling", label:"Assembling, 2.2", colour:true},
        {slug:"nothing-carried", label:"Nothing carried, 2.3", colour:true},
        {slug:"sealed", label:"Sealed, 2.4", colour:true},
        {slug:"close-failed", label:"Close failed, 2.5", colour:true},
        {slug:"unsealed", label:"Nobody sealed it", colour:true},
      ]},
    { screen:"case-history", node:"5.6", label:"History of one case", cluster:"5", scope:"MVP", grey:true, colour:2, total:2,
      states:[
        {slug:"", label:"Default", colour:true},
        {slug:"superseded", label:"A superseded entry", colour:true},
      ]},
    { screen:"case-standalone", node:"4.2", label:"Case File, standalone route", cluster:"4", scope:"MVP", grey:true, colour:3, total:3,
      states:[
        {slug:"", label:"Arrived by link", colour:true},
        {slug:"filed", label:"After filing", colour:true},
        {slug:"stale", label:"Connection stale", colour:true},
      ]},
    { screen:"index", node:"1.1", label:"Sign in", cluster:"1", scope:"MVP", grey:true, colour:0, total:5,
      states:[
        {slug:"", label:"Arrived on purpose", colour:false},
        {slug:"deep-link", label:"Arrived by a deep link", colour:false},
        {slug:"expired", label:"Session expired, 1.2", colour:false},
        {slug:"signed-out", label:"Signed out deliberately", colour:false},
        {slug:"idp-error", label:"Identity provider failed", colour:false},
      ]},
    { screen:"not-found", node:"8.1", label:"Not found", cluster:"8", scope:"MVP", grey:true, colour:0, total:1,
      states:[
        {slug:"", label:"Default", colour:false},
      ]},
    { screen:"unavailable", node:"8.2", label:"Service unavailable", cluster:"8", scope:"MVP", grey:true, colour:0, total:3,
      states:[
        {slug:"", label:"Unplanned", colour:false},
        {slug:"planned", label:"Planned maintenance", colour:false},
        {slug:"partial", label:"Part of it is down", colour:false},
      ]},
    { screen:"keyboard", node:"0.5", label:"Keyboard map", cluster:"0", scope:"MVP", grey:true, colour:0, total:1,
      states:[
        {slug:"", label:"Open over a screen", colour:false},
      ]},
    { screen:"client-summary", node:"6.1", label:"Client summary draft", cluster:"6", scope:"LATER", grey:false, colour:0, total:0,
      states:[
      ]},
    { screen:"client-send", node:"6.2", label:"Editing and sending", cluster:"6", scope:"LATER", grey:false, colour:0, total:0,
      states:[
      ]},
    { screen:"tenant", node:"7.1", label:"Tenant detail", cluster:"7", scope:"LATER", grey:false, colour:0, total:0,
      states:[
      ]},
    { screen:"grants", node:"7.2", label:"Autonomy grants", cluster:"7", scope:"LATER", grey:false, colour:0, total:0,
      states:[
      ]},
    { screen:"grant-change", node:"7.3", label:"Grant change", cluster:"7", scope:"LATER", grey:false, colour:0, total:0,
      states:[
      ]},
    { screen:"denied", node:"8.3", label:"Permission denied", cluster:"8", scope:"LATER", grey:false, colour:0, total:0,
      states:[
      ]},
  ],
};

/* ---------------------------------------------------------------------------- render ---- */
(function () {
  var N = window.DESIGN_NAV, host = document.getElementById('sidebar');
  if (!N || !host) return;
  var here = location.pathname.split('/').pop() || 'overview.html';
  var stem = here.replace(/\.html$/, '');

  /* which screen and which state is open. Longest stem first, so `case-history` is not
     read as the `history` state of `case`. */
  var cur = null, curSlug = null;
  N.screens.slice().sort(function (a, b) { return b.screen.length - a.screen.length; })
    .some(function (s) {
      if (stem === s.screen) { cur = s; curSlug = ''; return true; }
      if (stem.indexOf(s.screen + '-') === 0) { cur = s; curSlug = stem.slice(s.screen.length + 1); return true; }
      return false;
    });

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  var frag = document.createDocumentFragment();

  /* 1. out of the stage, first row */
  var back = el('div', 'd-out');
  var backA = el('a', null, '← Design process'); backA.href = '../index.html';
  back.appendChild(backA); frag.appendChild(back);

  /* 2. badge and subtitle */
  frag.appendChild(el('span', 'd-badge', 'UI + VISUAL'));
  frag.appendChild(el('p', 'd-sub', 'the product in colour, assembled from the kit'));

  /* 3. the hub, and the kit beside it rather than under it */
  var top = el('ul', 'nav-roadmap');
  [['overview.html', 'All screens'], ['kit/kit.html', 'Component kit'], ['kit/shell.html', 'The shell']]
    .forEach(function (p) {
      var isHere = (here === p[0].split('/').pop() && location.pathname.indexOf(p[0]) > -1);
      var li = el('li', 'nav-item' + (isHere ? ' is-active' : ''));
      var a = el(isHere ? 'span' : 'a', 'nav-top', p[1]);
      if (!isHere) a.href = (window.DESIGN_NAV_BASE || '') + p[0];
      li.appendChild(a);
      if (isHere && window.NAV_SECTIONS) {
        var secs = el('ul', 'nav-sections');
        window.NAV_SECTIONS.forEach(function (s) {
          var x = el('a', 'nav-section', s.label); x.href = '#' + s.id;
          var lis = el('li'); lis.appendChild(x); secs.appendChild(lis);
        });
        li.appendChild(secs);
      }
      top.appendChild(li);
    });
  frag.appendChild(top);

  /* 4. cluster, screen, states. A screen with no coloured state is shown and is not a link:
        a stage that hides what it has not painted is not a coverage map. */
  var B = window.DESIGN_NAV_BASE || '';
  N.clusters.forEach(function (c) {
    var mine = N.screens.filter(function (s) { return s.cluster === c.key; });
    if (!mine.length) return;
    frag.appendChild(el('div', 'd-clu', c.label));
    var ul = el('ul', 'nav-roadmap');
    mine.forEach(function (s) {
      var isCur = (cur === s), live = s.colour > 0;
      var li = el('li', 'nav-item' + (isCur ? ' is-active' : ''));
      var a = el(live ? 'a' : 'span', 'nav-link' + (isCur && !curSlug ? ' is-current' : ''));
      if (live) a.href = B + s.screen + '.html';
      a.appendChild(el('span', 'd-num', s.node));
      a.appendChild(el('span', null, s.label));
      var badge = el('span', 'nav-badge ' + (live ? 'd-count' : 'nav-badge-soon'),
                     live ? s.colour + '/' + s.total : (s.grey ? 'grey' : 'spec'));
      a.appendChild(badge);
      li.appendChild(a);
      if (isCur) {
        var us = el('ul', 'd-states');
        s.states.forEach(function (st) {
          var f = s.screen + (st.slug ? '-' + st.slug : '') + '.html';
          var on = (st.slug === curSlug);
          var x = el(st.colour ? 'a' : 'span', on ? 'is-current' : (st.colour ? null : 'is-grey'), st.label);
          if (st.colour) x.href = B + f;
          var lis = el('li'); lis.appendChild(x); us.appendChild(lis);
        });
        li.appendChild(us);
      }
      ul.appendChild(li);
    });
    frag.appendChild(ul);
  });

  /* 5. the honest total */
  var col = 0, tot = 0;
  N.screens.forEach(function (s) { col += s.colour; tot += s.total; });
  var foot = el('p', 'd-foot');
  foot.textContent = col + ' of ' + tot + ' pages in colour. The rest are grey and wait for the rollout';
  frag.appendChild(foot);

  host.innerHTML = '';
  host.appendChild(frag);

  /* the panel's own look, injected so no page describes it */
  if (!document.getElementById('d-panel-css')) {
    var st = document.createElement('style'); st.id = 'd-panel-css';
    st.textContent =
      '#sidebar{padding:20px 14px;overflow-y:auto}' +
      '.d-out{margin:0 0 14px}.d-out a{color:var(--color-text-dim);text-decoration:none;font-size:12.5px}' +
      '.d-out a:hover{color:var(--color-text)}' +
      '.d-badge{display:inline-block;font:400 10px/1 var(--font-mono);letter-spacing:.14em;' +
        'border:1px solid var(--color-accent);color:var(--color-accent);padding:4px 7px}' +
      '.d-sub{margin:8px 0 16px;font-size:11.5px;color:var(--color-text-dim);line-height:1.4}' +
      '.d-clu{padding:14px 4px 5px;font:400 10px/1 var(--font-mono);letter-spacing:.09em;' +
        'text-transform:uppercase;color:var(--color-text-dim)}' +
      '.nav-link .d-num{font-family:var(--font-mono);font-size:10.5px;color:var(--color-text-dim);' +
        'min-width:28px;display:inline-block}' +
      '.d-count{font:400 9.5px/1 var(--font-mono);letter-spacing:.06em;color:var(--color-accent);' +
        'border:1px solid var(--color-edge);padding:2px 5px}' +
      '.d-states{list-style:none;margin:4px 0 8px 30px;padding:0;border-left:1px solid var(--color-rule)}' +
      '.d-states li{padding:0}' +
      '.d-states a,.d-states span{display:block;padding:3px 10px;font-size:12px;' +
        'color:var(--color-text-dim);text-decoration:none}' +
      '.d-states a:hover{color:var(--color-text)}' +
      '.d-states .is-current{color:var(--color-accent)}' +
      '.d-states .is-grey{opacity:.45}' +
      '.d-foot{margin:18px 0 0;font-size:11px;line-height:1.45;color:var(--color-text-dim);' +
        'border-top:1px solid var(--color-rule);padding-top:10px}';
    document.head.appendChild(st);
  }
})();
