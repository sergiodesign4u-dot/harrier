/* LAYOUT PROPERTY DIFF, GREY AGAINST COLOUR.
   The arrangement diff before this one measured GEOMETRY, and geometry has two problems. It
   cannot see a leaf: `14 signals` is a cell with no element children, so a container walk never
   reaches it, and the owner found that wrap by eye after the instrument reported clean. And it
   cannot tell a decision from a consequence: a box is narrower because somebody capped it or
   because the glyphs are smaller, and the reading is the same either way.

   This one reads the DECISIONS. For every element that both sides have, it compares the
   computed properties that control layout and wrapping. A difference in `white-space` is
   something a person wrote; it cannot be produced by a type face or a palette. Values that
   resolve to pixels are compared only as a KIND (`none` against set, `auto` against a length),
   because the pixel is where the font gets back in. */
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
  const near = e => {
    let a = e.parentElement;
    while (a && a !== document.body && !a.classList.length) a = a.parentElement;
    return a && a !== document.body ? sig(a) : 'body';
  };
  /* KIND rather than value wherever the font can reach the number. */
  const kind = v => (v === 'none' || v === 'auto' || v === 'normal' || v === '0px') ? v : 'set';
  const tracks = v => (v === 'none' ? 'none' : String(v.trim().split(/\s+/).length) + ' tracks');

  const FLAT = ['white-space', 'overflow-wrap', 'word-break', 'text-align', 'text-overflow',
                'display', 'position', 'float', 'flex-direction', 'flex-wrap', 'justify-content',
                'align-items', 'align-self', 'align-content', 'flex-grow', 'flex-shrink',
                'overflow-x', 'overflow-y', 'grid-column-start', 'grid-column-end', 'order',
                'text-transform', 'writing-mode', 'box-sizing'];
  const KIND = ['max-width', 'min-width', 'max-height', 'flex-basis'];

  const out = {}, seen = {};
  const walk = e => {
    for (const k of e.children) {
      const cs = getComputedStyle(k);
      if (cs.display !== 'none' && k.classList.length) {
        const base = near(k) + ' > ' + sig(k);
        seen[base] = (seen[base] || 0) + 1;
        /* A FLEX PROPERTY ON A GRID ITEM IS INERT AND SO IS A GRID PROPERTY OFF A GRID.
           The first version reported `flex-basis` on 26 pages for a mark that is a grid item
           on both sides: a declaration doing nothing is not a divergence, and reporting it
           buries the ones that are. */
        const pd = getComputedStyle(k.parentElement).display;
        const inFlex = /flex/.test(pd), inGrid = /grid/.test(pd);
        const rec = {};
        for (const p of FLAT) {
          if (/^(flex-grow|flex-shrink|align-self|order)$/.test(p) && !inFlex && !inGrid) continue;
          if (/^(flex-grow|flex-shrink)$/.test(p) && !inFlex) continue;
          if (/^grid-column/.test(p) && !inGrid) continue;
          rec[p] = cs.getPropertyValue(p);
        }
        for (const p of KIND) {
          if (p === 'flex-basis' && !inFlex) continue;
          rec[p] = kind(cs.getPropertyValue(p));
        }
        rec['grid-template-columns'] = tracks(cs.getPropertyValue('grid-template-columns'));
        out[base + ' #' + seen[base]] = rec;
      }
      walk(k);
    }
  };
  walk(document.body);
  return out;
};

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();

const hits = [];
let compared = 0, elements = 0;
for (const f of pages) {
  await p.goto('file://' + path.join(G, f)); const g = await p.evaluate(READ);
  await p.goto('file://' + path.join(C, f)); const c = await p.evaluate(READ);
  compared++;
  for (const key of Object.keys(g)) {
    if (!(key in c)) continue;
    elements++;
    for (const prop of Object.keys(g[key])) {
      if (g[key][prop] !== c[key][prop]) {
        hits.push({ f, sel: key.replace(/ #\d+$/, ''), prop, g: g[key][prop], c: c[key][prop] });
      }
    }
  }
}
await b.close();

const key = h => h.sel + ' :: ' + h.prop + ' :: ' + h.g + ' -> ' + h.c;
const grouped = hits.reduce((m, h) => ((m[key(h)] = m[key(h)] || new Set()).add(h.f), m), {});
const rows = Object.entries(grouped).sort((a, b) => b[1].size - a[1].size);

console.log(`\nLAYOUT PROPERTY DIFF :: ${compared} paired pages at 1440, ${elements} shared elements compared\n`);
console.log(`  ELEMENTS WHOSE LAYOUT DECISION DIFFERS: ${hits.length} readings, ${rows.length} distinct\n`);
for (const [k, v] of rows) {
  const [sel, prop, change] = k.split(' :: ');
  console.log(`  ${String(v.size).padStart(3)} pages  ${sel}`);
  console.log(`             ${prop}:  grey ${change.split(' -> ')[0]}   colour ${change.split(' -> ')[1]}`);
  console.log(`             e.g. ${[...v][0]}`);
}
if (!rows.length) console.log('  The two sides make the same layout decision on every shared element.\n');
