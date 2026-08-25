/* design/kit/checks/pixels.mjs :: the product did not move, proved rather than asserted
   ============================================================================
   Stage 08 is a refactor. The promise is that the product looks the same after it
   as before, and the only honest form of that promise is two images and a diff.

     node design/kit/checks/pixels.mjs before   the coloured screens as they stand
     node design/kit/checks/pixels.mjs after    the same screens once they moved
     node design/kit/checks/pixels.mjs diff     compare, and report every difference

   EVERY DIFFERENCE HAS TO BE EXPLAINED BY A ROW in docs/tokens-audit.md, under one
   of the named origins. A difference with no row is a defect, and it is fixed in
   tokens.css or in a component file, never on a screen. Without that rule "well we
   did change some things" eats the whole comparison.

   Two viewports, because a refactor that holds at the desk and breaks at 360 has
   not held. Full page, because a fold is not a boundary of correctness.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const mode = process.argv[2];
if (!['before', 'after', 'diff'].includes(mode)) {
  console.error('usage: pixels.mjs before|after|diff'); process.exit(1);
}
const root = process.cwd();
const dir = f => path.join(root, 'design/kit/screens', f);
const screens = fs.readdirSync(path.join(root, 'design'))
  .filter(f => f.endsWith('.html') && f !== 'overview.html').sort();

if (mode === 'diff') {
  /* A BYTE COMPARISON IS TOO BLUNT FOR THIS. Two renderings that differ by one pixel and
     two that differ by half the page both come back "different", and this stage changes
     things ON PURPOSE in named places. What the comparison has to answer is HOW MUCH moved
     and WHERE, so each region can be attributed to a row in docs/tokens-audit.md.
     The images are decoded in a browser canvas rather than with a PNG library, because the
     browser is already a dependency here and a second one would be a second thing to trust. */
  const b = await chromium.launch();
  const ctx = await b.newContext();
  const page = await ctx.newPage();
  const rows = [];
  for (const f of screens) {
    for (const vw of [1440, 360]) {
      const nameA = dir(`before/${f.replace('.html','')}-${vw}.png`);
      const nameB = dir(`after/${f.replace('.html','')}-${vw}.png`);
      if (!fs.existsSync(nameA) || !fs.existsSync(nameB)) { rows.push({ f, vw, miss: true }); continue; }
      const A = 'data:image/png;base64,' + fs.readFileSync(nameA).toString('base64');
      const B = 'data:image/png;base64,' + fs.readFileSync(nameB).toString('base64');
      const r = await page.evaluate(async ([a, b]) => {
        const load = src => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.src = src; });
        const [ia, ib] = await Promise.all([load(a), load(b)]);
        const w = Math.max(ia.width, ib.width), h = Math.max(ia.height, ib.height);
        const get = img => { const c = document.createElement('canvas'); c.width = w; c.height = h;
          const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0);
          return x.getImageData(0, 0, w, h).data; };
        const pa = get(ia), pb = get(ib);
        let n = 0, x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
        for (let i = 0; i < pa.length; i += 4) {
          if (pa[i] !== pb[i] || pa[i+1] !== pb[i+1] || pa[i+2] !== pb[i+2]) {
            n++; const px = (i / 4) % w, py = Math.floor((i / 4) / w);
            if (px < x0) x0 = px; if (px > x1) x1 = px;
            if (py < y0) y0 = py; if (py > y1) y1 = py;
          }
        }
        return { n, w, h, sizeChanged: ia.width !== ib.width || ia.height !== ib.height,
                 box: x1 < 0 ? null : [x0, y0, x1, y1] };
      }, [A, B]);
      rows.push({ f, vw, ...r });
    }
  }
  await b.close();
  const same = rows.filter(r => r.n === 0).length;
  const total = rows.reduce((a, r) => a + (r.n || 0), 0);
  const px = rows.reduce((a, r) => a + (r.w || 0) * (r.h || 0), 0);
  console.log(`renderings compared: ${rows.length}`);
  console.log(`pixel identical: ${same}`);
  console.log(`changed pixels: ${total} of ${px}  (${(100 * total / px).toFixed(3)} per cent)`);
  console.log(`renderings that grew or shrank: ${rows.filter(r => r.sizeChanged).length}`);
  console.log(`DIFFERENT: ${rows.length - same}`);
  rows.filter(r => r.n > 0).sort((a, b) => b.n - a.n).slice(0, 24).forEach(r =>
    console.log(`  ${(r.f + ' ' + r.vw).padEnd(38)} ${String(r.n).padStart(8)} px` +
                `  ${(100 * r.n / (r.w * r.h)).toFixed(2)}%` +
                (r.sizeChanged ? '  SIZE CHANGED' : '') +
                (r.box ? `  y ${r.box[1]}..${r.box[3]}` : '')));
  process.exit(0);
}

fs.mkdirSync(dir(mode), { recursive: true });
const b = await chromium.launch();
let n = 0;
for (const vw of [1440, 360]) {
  const ctx = await b.newContext({ viewport: { width: vw, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const f of screens) {
    await page.goto('file://' + path.join(root, 'design', f));
    await page.waitForLoadState('networkidle');
    /* the panel is documentation and not the product, and it is the one thing this
       stage is allowed to change: it is hidden so the comparison is of the screen */
    await page.evaluate(() => { const s = document.getElementById('sidebar'); if (s) s.style.display = 'none'; });
    await page.screenshot({ path: dir(`${mode}/${f.replace('.html','')}-${vw}.png`), fullPage: true });
    n++;
  }
  await ctx.close();
}
await b.close();
console.log(`${mode}: ${n} renderings of ${screens.length} screens at two viewports`);
