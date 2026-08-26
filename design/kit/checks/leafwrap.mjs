/* LEAF WRAP DIFF, GREY AGAINST COLOUR.
   The third instrument, and the owner found its class by eye before it existed: `14 signals`
   on two lines here and one there. The arrangement diff cannot see it, because a count cell has
   no element children and a container walk never enters it. The layout property diff catches the
   CAUSE only when the cause is a property somebody wrote; it does not catch a string that wraps
   because the column it sits in is eight pixels narrower.

   This one reads the OUTCOME on the leaf: how many lines each run of text occupies. A run that
   takes one line in the product and two here is the defect the owner keeps pointing at, whatever
   produced it.

   IT IS NOISIER THAN THE OTHER TWO BY CONSTRUCTION and it is meant to be read that way. A
   different type face moves a wrap point, so a long paragraph landing on 4 lines here and 5
   there is the boundary working. What is NOT the boundary is a SHORT run, and the threshold is
   the reading: a run that fits on one line in the product and does not here is reported on its
   own, because a string the product never breaks is a string this folder should not break. */
import pw from '../../../node_modules/playwright/index.js';
const { chromium } = pw;
import fs from 'fs'; import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const G = path.join(ROOT, 'wireframes'), C = path.join(ROOT, 'design');
const greyF = fs.readdirSync(G).filter(f => f.endsWith('.html'));
const colourF = new Set(fs.readdirSync(C).filter(f => f.endsWith('.html')));
const pages = greyF.filter(f => colourF.has(f) && !['index.html', 'overview.html'].includes(f));

const READ = () => {
  for (const sel of ['#sidebar', '.wf-nav', '.dp-nav', '#nav']) {
    document.querySelectorAll(sel).forEach(n => n.remove());
  }
  const sig = e => {
    const cls = [...e.classList].filter(c => !/^(is-|has-)/.test(c)).sort().join('.');
    return e.tagName.toLowerCase() + (cls ? '.' + cls : '');
  };
  const out = {}, seen = {};
  const walkText = (root) => {
    const it = document.createNodeIterator(root, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = it.nextNode())) {
      const t = n.textContent.replace(/\s+/g, ' ').trim();
      if (!t) continue;
      const host = n.parentElement;
      if (!host || getComputedStyle(host).display === 'none') continue;
      const r = new Range(); r.selectNodeContents(n);
      const rects = [...r.getClientRects()].filter(x => x.width > 0 && x.height > 0);
      if (!rects.length) continue;
      /* LINES ARE DISTINCT TOPS, NOT RECTS. A `<b>` mid sentence yields three rects on one
         line, and counting rects reported every emphasised sentence as wrapped. */
      const lines = new Set(rects.map(x => Math.round(x.top / 4))).size;
      /* AND THE WIDTH OF THE BOX THAT WRAPPED IT, which is the whole discriminator. A run
         that breaks here and not there inside a line box of the SAME width broke because the
         glyphs are wider, and that is the stage boundary. A run that breaks inside a line box
         this folder made NARROWER broke because of a decision, and that is a defect.

         IT IS NOT THE HOST'S OWN RECT, AND THE FIRST VERSION MEASURED EXACTLY THAT AND WAS
         CIRCULAR. A wrapped INLINE element's rect is the union of its lines, so it is as wide
         as its WIDEST LINE: it reads narrow precisely BECAUSE it wrapped, and every finding
         then proved itself. The line box the browser actually used is the content box of the
         nearest ancestor that is not inline. */
      let blk = host;
      while (blk && blk !== document.body && /^(inline|ruby|contents)/.test(getComputedStyle(blk).display)) {
        blk = blk.parentElement;
      }
      blk = blk || host;
      const hcs = getComputedStyle(blk), hb = blk.getBoundingClientRect();
      const inner = hb.width - parseFloat(hcs.paddingLeft) - parseFloat(hcs.paddingRight);
      const key = sig(host) + ' :: ' + t.slice(0, 60);
      seen[key] = (seen[key] || 0) + 1;
      out[key + ' #' + seen[key]] = { lines, chars: t.length, text: t, box: Math.round(inner) };
    }
  };
  walkText(document.body);
  return out;
};

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();

const broke = [], moved = [];
let compared = 0, runs = 0;
for (const f of pages) {
  await p.goto('file://' + path.join(G, f)); const g = await p.evaluate(READ);
  await p.goto('file://' + path.join(C, f)); const c = await p.evaluate(READ);
  compared++;
  for (const key of Object.keys(g)) {
    if (!(key in c)) continue;
    runs++;
    const G1 = g[key].lines, C1 = c[key].lines;
    if (G1 === C1) continue;
    const rec = { f, sel: key.split(' :: ')[0], t: g[key].text, g: G1, c: C1,
                  n: g[key].chars, gb: g[key].box, cb: c[key].box };
    if (C1 === 1 && G1 > 1) broke.push(rec); else moved.push(rec);
  }
}
await b.close();

console.log(`\nLEAF WRAP DIFF :: ${compared} paired pages at 1440, ${runs} shared runs of text\n`);

/* NARROWER BY MORE THAN 4px IS A DECISION; the rest is the glyphs. */
const narrower = broke.filter(x => x.gb < x.cb - 4);
const sameBox  = broke.filter(x => !(x.gb < x.cb - 4));
const show = (list, head, tail) => {
  console.log(head + ': ' + list.length);
  const gb = list.reduce((m, x) => { const k = x.sel + '  "' + x.t.slice(0, 44) + '"';
    (m[k] = m[k] || []).push(x); return m; }, {});
  for (const [k, v] of Object.entries(gb).sort((a, b) => b[1].length - a[1].length).slice(0, 20)) {
    console.log(`    ${String(v.length).padStart(3)} pages  ${k}`);
    console.log(`               ${v[0].g} lines here in ${v[0].gb}px, 1 there in ${v[0].cb}px   e.g. ${v[0].f}`);
  }
  if (!list.length) console.log('    none.');
  if (tail) console.log('    ' + tail);
};
show(narrower, '  A DECISION. The product keeps it whole and the box here is NARROWER');
console.log('');
show(sameBox, '  THE GLYPHS. The product keeps it whole and the box here is the same or wider',
     'A wider face breaks a string a narrower one does not. This is the stage boundary.');

console.log(`\n  WRAPS AT A DIFFERENT POINT, BOTH SIDES ALREADY ON MORE THAN ONE LINE: ${moved.length}`);
console.log('    (a different type face moves a wrap point; this list is the boundary working)');
