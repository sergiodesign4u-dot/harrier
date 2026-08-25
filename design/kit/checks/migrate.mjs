/* design/kit/checks/migrate.mjs :: the migrated screen against the committed original
   ============================================================================
   The pixel comparison says how much moved. The attribution says which class. This
   says WHICH ELEMENT, by walking the two DOMs side by side.

     node design/kit/checks/migrate.mjs            every coloured screen
     node design/kit/checks/migrate.mjs reject.html

   It writes each screen as it stands in the last commit to a temporary file beside
   the live one, renders both with the documentation panel hidden, and compares the
   `screen` subtree element by element in document order. The rename map changes
   class names and never the tree, so the two subtrees have the same element count
   and the same order: an index that does not line up is itself a finding.

   IT IS THE ONLY INSTRUMENT THAT SEES A CASCADE DEFECT. Both stylesheets are
   correct, both declarations are correct, and what is wrong is which of them wins.
   It has already found three: a system component beating a viewport utility because
   the system loads later, a media query written where a class selector belonged,
   and a narrow only rule hoisted to the top level.
   ============================================================================ */

import { chromium } from 'playwright';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const root = process.cwd();
const only = process.argv[2];
const screens = (only ? [only] : fs.readdirSync(path.join(root, 'design'))
  .filter(f => f.endsWith('.html') && f !== 'overview.html').sort());

/* Every difference has to be attributable to a row in docs/tokens-audit.md. These are the
   four the reconciliation left standing, and everything else is unexplained. */
const EXPLAINED = [
  { on: /chip|state|scopebar|chips-hd/, why: 'chip and state stand at 21.00 rather than 22, 23 or 24.84: the element was deciding their height and their underline' },
  { on: /^(a|div)\.row|rows|z45|z4$|z5|pane-body|pane-head|block|brief|states|sev|frow|bline|banner|toast|nar|claim|lat|empty|tomb|prov|gnote|expand|optlist|opt|field|cons|axisb|covers|contact|addr|rota|doc|frame|rail|door|doorcard|out|screen|shell|z1|z2|z6|dialog|scrim|qfoot|readout|fleet-more|arriving|annun|sa-offer/, why: 'downstream of the chip and state height, and of the readout weight: a shorter state makes a shorter row, and every zone that holds one follows' },
  { on: /dim|\.n |\.n$|is-quiet|\.b$|b\.\(none\)/, why: 'the readout is an h1 and the UA weight of 700 reached its qualifier, which is not a counted value' },
  { on: /txt|claim/, why: 'the source icon is on `a.src` now, so the 13 sources that open nothing are 16px narrower and the sentence beside them is 16px wider' },
  { on: /input|textarea|select|label|hint|key|src|kbd/, why: 'the field boundary at 3.98 rather than 2.997, the key border following its host, and the icon masks at the weight the set declares' },
];

const b = await chromium.launch();
const groups = new Map();
let compared = 0, mismatched = [];

const meas = async (page, file) => {
  await page.goto('file://' + path.join(root, 'design', file));
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => { const s = document.getElementById('sidebar'); if (s) s.style.display = 'none'; });
  return page.evaluate(() => {
    const r = document.querySelector('.wf-screen, .screen');
    if (!r) return null;
    return [...r.querySelectorAll('*')].map(e => {
      const b = e.getBoundingClientRect();
      return { t: e.tagName, c: (e.className || '').toString(),
               h: +b.height.toFixed(1), w: +b.width.toFixed(1) };
    });
  });
};

for (const vw of [1440, 360]) {
  const ctx = await b.newContext({ viewport: { width: vw, height: 900 } });
  const page = await ctx.newPage();
  for (const f of screens) {
    const tmp = '_orig-' + f;
    let orig;
    try { orig = execSync(`git show HEAD:design/${f}`, { cwd: root, maxBuffer: 1 << 24 }).toString(); }
    catch { continue; }                       /* a screen this stage added has no original */
    fs.writeFileSync(path.join(root, 'design', tmp), orig);
    try {
      const A = await meas(page, tmp), B = await meas(page, f);
      fs.unlinkSync(path.join(root, 'design', tmp));
      if (!A || !B) continue;
      if (A.length !== B.length) { mismatched.push(`${f} ${vw}: ${A.length} elements before, ${B.length} after`); continue; }
      compared++;
      for (let i = 0; i < A.length; i++) {
        if (Math.abs(A[i].h - B[i].h) > 0.6 || Math.abs(A[i].w - B[i].w) > 0.6) {
          const key = `${A[i].t.toLowerCase()}.${A[i].c || '(none)'}`;
          const g = groups.get(key) || { n: 0, screens: new Set(), dh: 0, dw: 0, now: B[i].c };
          g.n++; g.screens.add(`${f}@${vw}`);
          g.dh = Math.max(g.dh, Math.abs(A[i].h - B[i].h));
          g.dw = Math.max(g.dw, Math.abs(A[i].w - B[i].w));
          groups.set(key, g);
        }
      }
    } catch (e) {
      try { fs.unlinkSync(path.join(root, 'design', tmp)); } catch {}
      throw e;
    }
  }
  await ctx.close();
}
await b.close();

console.log(`renderings compared: ${compared}`);
console.log(`tree shape changed: ${mismatched.length}`);
mismatched.forEach(m => console.log('  ' + m));
const all = [...groups.entries()].sort((a, b) => b[1].n - a[1].n);
const rows = [], named = [];
for (const e of all) (EXPLAINED.find(x => x.on.test(e[0])) ? named : rows).push(e);
console.log(`elements that moved and are EXPLAINED: ${named.length} groups, ${named.reduce((a, r) => a + r[1].n, 0)} elements`);
[...new Set(EXPLAINED.map(e => e.why))].forEach(w => {
  const mine = named.filter(([k]) => EXPLAINED.find(x => x.on.test(k)).why === w);
  if (mine.length) console.log(`  ${mine.length} groups, ${mine.reduce((a, r) => a + r[1].n, 0)} elements  ::  ${w}`);
});
console.log(`UNEXPLAINED: ${rows.length} groups, ${rows.reduce((a, r) => a + r[1].n, 0)} elements`);
rows.slice(0, 30).forEach(([k, g]) =>
  console.log(`  ${k.slice(0, 46).padEnd(46)} ${String(g.n).padStart(5)} el on ${String(g.screens.size).padStart(3)}` +
              `   dh ${g.dh.toFixed(1).padStart(7)}  dw ${g.dw.toFixed(1).padStart(7)}` +
              (g.now && g.now !== k.split('.').slice(1).join('.') ? `   now .${g.now.slice(0, 24)}` : '')));
