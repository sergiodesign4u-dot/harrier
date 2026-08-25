/* design/kit/checks/refactor.mjs :: the screen before the refactor against the screen after
   ============================================================================
   Stage 09 moves composition rules out of component files and into pattern files
   and adds a class to the markup. The promise is that nothing about the product
   moves, and the only honest form of that promise is a measurement.

     node design/kit/checks/refactor.mjs <baseline-dir>
     node design/kit/checks/refactor.mjs <baseline-dir> queue.html

   The baseline is a COPY of design/ taken before the first edit, kept outside the
   repository so no image and no duplicate tree is committed. It renders both
   trees at both viewports with the documentation panel hidden and walks the two
   `screen` subtrees element by element in document order, comparing width and
   height to a hundredth of a pixel.

   IT REPORTS THE TREE SHAPE FIRST. A pattern class is added to an element that
   already exists, so the two subtrees must have the same element count in the
   same order. A count that does not line up is a bigger finding than any box that
   moved, and it is reported before the boxes rather than drowned among them.

   WHY NOT A PIXEL DIFF. A pixel diff answers "how much" and this stage needs
   "which element", because a composition rule that failed to move shows up as one
   box in one filling at one viewport and as nothing at all in an image.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const base = process.argv[2];
if (!base || !fs.existsSync(path.join(base, 'design'))) {
  console.error('usage: refactor.mjs <dir containing a copy of design/> [one.html]');
  process.exit(1);
}
const only = process.argv[3];
const root = process.cwd();
const screens = (only ? [only] : fs.readdirSync(path.join(root, 'design'))
  .filter(f => f.endsWith('.html') && f !== 'overview.html').sort());

const meas = async (page, file) => {
  await page.goto('file://' + file);
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => { const s = document.getElementById('sidebar'); if (s) s.style.display = 'none'; });
  return page.evaluate(() => {
    const r = document.querySelector('.wf-screen, .screen');
    if (!r) return null;
    return [...r.querySelectorAll('*')].map(e => {
      const b = e.getBoundingClientRect();
      return { t: e.tagName, c: (e.className || '').toString(),
               h: +b.height.toFixed(2), w: +b.width.toFixed(2) };
    });
  });
};

/* The classes this stage adds. A box is allowed to differ only if nothing but one
   of these appears on it, and today nothing is allowed to differ at all: the four
   files carry rules that were CUT rather than rewritten. The list is here so that
   a later stage adding a pattern has somewhere to declare its own difference. */
const ADDED = /\b(case-pane|fleet|queue-list|shift-brief)\b/;

const b = await chromium.launch();
let compared = 0, shape = [], moved = [], missing = [];

for (const vw of [1440, 360]) {
  const ctx = await b.newContext({ viewport: { width: vw, height: 900 } });
  const page = await ctx.newPage();
  for (const f of screens) {
    const before = path.join(base, 'design', f);
    if (!fs.existsSync(before)) { missing.push(f); continue; }
    const A = await meas(page, before);
    const B = await meas(page, path.join(root, 'design', f));
    if (!A || !B) { missing.push(f + ' (no screen root)'); continue; }
    if (A.length !== B.length) { shape.push(`${f} ${vw} :: ${A.length} elements before, ${B.length} after`); continue; }
    compared++;
    for (let i = 0; i < A.length; i++) {
      if (A[i].t !== B[i].t) { shape.push(`${f} ${vw} :: #${i} ${A[i].t} became ${B[i].t}`); break; }
      if (A[i].h !== B[i].h || A[i].w !== B[i].w) {
        moved.push({ f, vw, i, t: B[i].t, c: B[i].c,
                     was: `${A[i].w}x${A[i].h}`, now: `${B[i].w}x${B[i].h}`,
                     addedOnly: ADDED.test(B[i].c) && B[i].c.replace(ADDED, '').trim() === A[i].c.trim() });
      }
    }
  }
  await ctx.close();
}
await b.close();

console.log(`\nREFACTOR COMPARISON :: ${compared} renderings over ${screens.length} screens at 1440 and 360\n`);
console.log(`  tree shape changes   ${shape.length}`);
console.log(`  boxes that moved     ${moved.length}`);
console.log(`  not compared         ${missing.length}`);
for (const s of shape) console.log('  SHAPE  ' + s);
for (const m of moved.slice(0, 60)) console.log(`  MOVED  ${m.f} ${m.vw} #${m.i} ${m.t}.${m.c.slice(0,44)}  ${m.was} -> ${m.now}`);
if (moved.length > 60) console.log(`  ... and ${moved.length - 60} more`);
for (const m of missing) console.log('  SKIP   ' + m);
if (!shape.length && !moved.length) console.log('\n  Nothing moved. The refactor is a refactor.\n');
