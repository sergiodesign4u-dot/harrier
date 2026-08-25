/* design/kit/checks/rules.mjs :: the usage rules, as a measurement rather than a table
   ============================================================================
   A prohibition written only in prose is a prohibition nobody runs. Every rule in
   the "Usage rules" section of design/kit/docs/architecture.md is a function here,
   and the section and this file are the same eleven rules in the same order.

     node design/kit/checks/rules.mjs                  the grey corpus, 62 screens
     node design/kit/checks/rules.mjs design           the coloured screens
     node design/kit/checks/rules.mjs design new.html  one screen, by name

   THE RULES WERE DERIVED FROM THIS CORPUS, so a clean run on it proves nothing on
   its own: it is the screens the counter read. What it does prove is that no rule
   was written down in a shape the corpus contradicts, which is the failure this
   catches. The run that means something is the one on a screen that did not exist
   when the rules were written, and that is what stage 09 step 5 is for.

   EVERY RULE IS MEASURED AT BOTH VIEWPORTS AND ON WHAT RENDERS. Three of the
   eleven are true at 1440 and false at 360 or the other way round, and one of them
   only became correct when the counter stopped reading the markup and started
   reading the box: two primary actions in the document are one primary action on
   the screen when the second is the viewport twin of the first.

   A RULE IS ALLOWED TO SAY "not applicable". A screen with no dialog does not pass
   or fail the dialog rule; it is not asked. Counting those as passes is how a suite
   reports green while testing nothing.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const dirArg = process.argv[2] || 'wireframes';
const dir = path.resolve(dirArg) + '/';
const only = process.argv[3];
const PAGES = only ? [only] : fs.readdirSync(dir)
  .filter(f => f.endsWith('.html') && f !== 'overview.html').sort();

/* ---- the eleven, in the order of the section ------------------------------
   Each returns null when the rule does not apply to this screen, a string when it
   is broken, and true when it held. The `where` field is what a person reads when
   it breaks: the rule's name is not enough to find the element. */
const RULES = [
  { id: 'R1', name: 'one main action per layer',
    run: d => {
      const outside = d.primary.filter(p => !p.inScrim).length;
      const inside  = d.primary.filter(p => p.inScrim).length;
      if (!d.primary.length) return null;
      if (outside > 1) return `${outside} visible .btn--primary outside the scrim`;
      if (inside  > 1) return `${inside} visible .btn--primary inside the dialog`;
      return true;
    } },
  { id: 'R2', name: 'a dialog never stands without a scrim',
    run: d => {
      if (!d.dialogs && !d.scrims) return null;
      if (d.dialogs > 1) return `${d.dialogs} dialogs`;
      if (d.scrims  > 1) return `${d.scrims} scrims`;
      if (d.dialogsOutsideScrim) return `${d.dialogsOutsideScrim} dialog not inside a scrim`;
      return true;
    } },
  { id: 'R3', name: 'no overlay covers the detail pane',
    run: d => (d.overlapWithPane === null ? null
              : d.overlapWithPane ? `the pane is covered across ${d.overlapWithPane}` : true) },
  { id: 'R4', name: 'three notices at the desk, one at 360',
    run: (d, vw) => {
      if (!d.toasts) return null;
      const cap = vw <= 900 ? 1 : 3;
      return d.toasts > cap ? `${d.toasts} notices against a cap of ${cap}` : true;
    } },
  { id: 'R5', name: 'no shell before authentication, no annunciator when Clerk cannot be read',
    /* THE SECOND HALF OF THIS RULE WAS WRONG ON ITS FIRST RUN, and the corpus said
       so: it asked every outage screen for an absent annunciator and the partial
       outage has one, correctly, because a partial outage is a console that is up.
       What marks the difference is `.z1--out`, which is the top bar of a console
       that cannot speak for Clerk, and that is what the rule reads now. */
    run: d => {
      if (!d.isDoor && !d.barOut) return null;
      if (d.isDoor  && (d.z1 || d.z45)) return 'the door draws the shell';
      if (d.barOut  && d.z2)            return 'a console that is out draws the annunciator';
      return true;
    } },
  { id: 'R6', name: 'one readout per screen',
    run: d => (d.readouts ? (d.readouts > 1 ? `${d.readouts} readouts` : true) : null) },
  { id: 'R7', name: 'the detail pane never renders an empty state',
    run: d => (d.z5 ? (d.emptyInPane ? 'the pane renders .empty' : true) : null) },
  { id: 'R8', name: 'a viewport twin renders at one width only',
    run: (d, vw) => {
      if (!d.twinDesk && !d.twinNarrow) return null;
      if (vw <= 900 && d.twinDesk)   return `${d.twinDesk} .only-desk visible at 360`;
      if (vw >  900 && d.twinNarrow) return `${d.twinNarrow} .only-narrow visible at the desk`;
      return true;
    } },
  { id: 'R9', name: 'one selected row, and none at 360',
    run: (d, vw) => {
      if (!d.rows) return null;
      if (vw <= 900 && d.selected) return `${d.selected} selected rows at 360`;
      if (d.selected > 1) return `${d.selected} selected rows`;
      return true;
    } },
  { id: 'R10', name: 'the fleet has no route of its own',
    /* THE FIRST VERSION OF THIS ONE DID NOT MEASURE ITS OWN RULE. It asked whether
       `.fleet-more` sat outside the pane and never asked about `.fleet`, and never
       asked about a navigation item at all, which is the half the rule is named
       after. It was reporting held on 10 screens while testing neither. */
    run: d => {
      if (!d.fleet && !d.navLabels.length) return null;
      if (d.fleetOutsidePane) return 'the fleet stands outside the detail pane';
      if (d.navToFleet) return `a navigation item points at the fleet: ${d.navToFleet}`;
      return d.fleet ? true : null;
    } },
  { id: 'R11', name: 'one h1 per screen',
    run: d => (d.h1 > 1 ? `${d.h1} h1 elements` : d.h1 === 0 ? 'no h1' : true) },
];

const collect = () => {
  const vis = el => {
    if (!el.offsetParent && getComputedStyle(el).position !== 'fixed') return false;
    const b = el.getBoundingClientRect();
    return b.width > 0 && b.height > 0;
  };
  const all = s => [...document.querySelectorAll(s)].filter(vis);
  const root = document.querySelector('.wf-screen, .screen');
  const pane = all('.z5')[0] || null;
  const overlays = [...all('.dialog'), ...all('.z6')];
  let overlap = null;
  if (pane && overlays.length) {
    const p = pane.getBoundingClientRect();
    overlap = false;
    for (const o of overlays) {
      const r = o.getBoundingClientRect();
      const w = Math.min(p.right, r.right) - Math.max(p.left, r.left);
      if (w <= 1) continue;                       /* beside it, which is the point of anchoring */
      /* A FIXED OVERLAY IS MEASURED HORIZONTALLY AND NOT VERTICALLY, and the first
         version of this got it wrong. It compared two rectangles at scroll zero, so
         a dialog pinned to the viewport and a pane sitting below the fold read as
         clear of each other, and the pane passed under the dialog the moment anybody
         scrolled. If the overlay does not move with the page and their columns
         intersect, the overlay covers the pane. */
      let fixed = false;
      for (let e = o; e && e !== document.body; e = e.parentElement)
        if (getComputedStyle(e).position === 'fixed') { fixed = true; break; }
      const h = Math.min(p.bottom, r.bottom) - Math.max(p.top, r.top);
      if (fixed) overlap = `${Math.round(w)}px of its width with an overlay pinned to the viewport`;
      else if (h > 1) overlap = `${Math.round(w)}x${Math.round(h)}px`;
    }
  }
  return {
    primary: all('.btn--primary').map(e => ({ inScrim: !!e.closest('.scrim') })),
    dialogs: all('.dialog').length,
    scrims:  all('.scrim').length,
    dialogsOutsideScrim: all('.dialog').filter(e => !e.closest('.scrim')).length,
    overlapWithPane: overlap,
    toasts:  all('.toast').length,
    isDoor:  !!(root && root.querySelector('.door')),
    barOut: all('.z1--out').length > 0,
    z1: all('.z1').length, z2: all('.z2').length, z45: all('.z45').length,
    z5: all('.z5').length,
    readouts: all('.readout').length,
    emptyInPane: pane ? [...pane.querySelectorAll('.empty')].length > 0 : false,
    twinDesk:   all('.only-desk, .only-desk-i').length,
    twinNarrow: all('.only-narrow').length,
    rows: all('.rows').length,
    selected: all('.is-selected').length,
    fleet: all('.fleet, .fleet-more, .frow').length,
    fleetOutsidePane: all('.fleet, .fleet-more').filter(e => !e.closest('.z5')).length > 0,
    /* the grey corpus writes the global navigation as bare anchors in Z1 and the
       coloured one as `.navitem`, so the rule reads both or it reads five screens */
    navLabels: [...document.querySelectorAll('.z1 nav a, .navitem')].map(e => e.textContent.trim()),
    navToFleet: ([...document.querySelectorAll('.z1 nav a, .navitem')]
      .find(e => /fleet/i.test(e.textContent) || /fleet/i.test(e.getAttribute('href') || '')) || {}).textContent || '',
    h1: all('h1').length,
  };
};

const b = await chromium.launch();
const broken = [], tally = new Map();
RULES.forEach(r => tally.set(r.id, { held: 0, na: 0, broke: 0 }));

for (const vw of [1440, 360]) {
  const p = await (await b.newContext({ viewport: { width: vw, height: 1000 } })).newPage();
  for (const f of PAGES) {
    await p.goto('file://' + dir + f);
    await p.waitForTimeout(60);
    const d = await p.evaluate(collect);
    for (const r of RULES) {
      const v = r.run(d, vw);
      const t = tally.get(r.id);
      if (v === null) t.na++;
      else if (v === true) t.held++;
      else { t.broke++; broken.push(`${r.id} ${f} @${vw} :: ${v}`); }
    }
  }
}
await b.close();

console.log(`\nUSAGE RULES over ${PAGES.length} screens in ${dirArg}/ at 1440 and 360\n`);
console.log('rule  held  n/a  broken  what it forbids');
for (const r of RULES) {
  const t = tally.get(r.id);
  console.log(`${r.id.padEnd(5)}${String(t.held).padStart(5)}${String(t.na).padStart(5)}${String(t.broke).padStart(8)}  ${r.name}`);
}
console.log('');
for (const x of broken) console.log('  BROKEN  ' + x);
const untested = RULES.filter(r => tally.get(r.id).held === 0 && tally.get(r.id).broke === 0);
for (const r of untested) console.log(`  UNTESTED  ${r.id}: no screen in this corpus asks it`);
if (!broken.length) console.log(`  ${PAGES.length * 2} renderings, nothing broken.`);
