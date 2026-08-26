/* ARRANGEMENT DIFF, GREY AGAINST COLOUR.
   Not a pixel diff and not a string diff: it compares HOW CHILDREN ARE ARRANGED inside every
   container that holds two or more of them. Two readings per container, both scale free, so a
   different type face and a different palette cannot register as a difference:
     ROWS  - how many rows the children wrap into, and which child sits in which row
     SHARE - each child's width as a fraction of the container's content width
   A container whose children sit in one row grey and two rows colour is a structural
   divergence, and that is the class the owner pointed at in the pane foot. */
import pw from '../../../node_modules/playwright/index.js';
const { chromium } = pw;
import fs from 'fs'; import path from 'path';

const ROOT = '/Users/sergiyshevchenko/Claud Projects/B2B AI flow ';
const grey = fs.readdirSync(path.join(ROOT, 'wireframes')).filter(f => f.endsWith('.html'));
const colour = new Set(fs.readdirSync(path.join(ROOT, 'design')).filter(f => f.endsWith('.html')));
const pages = grey.filter(f => colour.has(f) && !['index.html', 'overview.html'].includes(f));

const READ = () => {
  /* The nav panel is a different component on the two sides by design, so it is out. */
  for (const sel of ['#sidebar', '.wf-nav', '.dp-nav', '#nav', 'nav.panel']) {
    document.querySelectorAll(sel).forEach(n => n.remove());
  }
  const sig = e => {
    const cls = [...e.classList].filter(c => !/^(is-|has-)/.test(c)).sort().join('.');
    return e.tagName.toLowerCase() + (cls ? '.' + cls : '');
  };
  const out = {};
  /* THE TRAIL FROM body DOES NOT MATCH ACROSS THE TWO SIDES, because the two shells wrap the
     page differently. The key is local instead: the container's own signature plus its nearest
     CLASSED ancestor, plus which occurrence of that pair it is on the page. That anchors on
     what both sides really share and ignores the wrappers only one of them has. */
  const near = e => {
    let a = e.parentElement;
    while (a && a !== document.body && !a.classList.length) a = a.parentElement;
    return a && a !== document.body ? sig(a) : 'body';
  };
  const seenKey = {};
  const walk = (e) => {
    const kids = [...e.children].filter(k => {
      const s = getComputedStyle(k);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      if (s.position === 'absolute' || s.position === 'fixed') return false;
      const r = k.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    });
    /* ONLY WHERE THERE IS A LAYOUT TO COMPARE. A `b` inside a paragraph has no box: its
       rect is the union of the lines it happens to span, so its share of the paragraph is a
       reading about the TYPE FACE and not about the arrangement. The first version measured
       those too and reported 212 divergences, almost all of them the same sentence set in a
       different face. A container qualifies if it lays its children out itself (flex or
       grid) or if every child is block level. */
    const ed = getComputedStyle(e).display;
    const laysOut = /flex|grid/.test(ed) ||
      kids.every(k => !/^(inline|ruby|contents)/.test(getComputedStyle(k).display));
    if (kids.length >= 2 && e !== document.body && laysOut) {
      const box = e.getBoundingClientRect();
      const cs = getComputedStyle(e);
      const inner = box.width - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      if (inner > 1) {
        const base = near(e) + ' > ' + sig(e);
        seenKey[base] = (seenKey[base] || 0) + 1;
        const trail = base + ' #' + seenKey[base];
        /* A ROW IS A CLUSTER, NOT AN EXACT TOP. Baseline alignment puts three children of one
           flex row at three tops a pixel apart when their font sizes differ, and the first
           version of this counted that as three rows: it reported 101 pages of divergence on
           a ladder whose children were already on one line. Tops within 6px are one row. */
        const raw = [...new Set(kids.map(k => Math.round(k.getBoundingClientRect().top)))].sort((a, b) => a - b);
        const tops = [];
        for (const t of raw) if (!tops.length || t - tops[tops.length - 1] > 6) tops.push(t);
        const band = t => { let i = 0; while (i + 1 < tops.length && tops[i + 1] <= t) i++; return i; };
        const rec = kids.map(k => {
          const r = k.getBoundingClientRect();
          return { n: sig(k), row: band(Math.round(r.top)), share: Math.round((r.width / inner) * 100) };
        });
        out[trail] = { rows: tops.length, kids: rec };
      }
    }
    for (const k of kids) walk(k);
  };
  walk(document.body);
  return out;
};

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();

const rowDiff = [], shareDiff = [];
let compared = 0, containers = 0;

for (const f of pages) {
  await p.goto('file://' + path.join(ROOT, 'wireframes', f));
  const g = await p.evaluate(READ);
  await p.goto('file://' + path.join(ROOT, 'design', f));
  const c = await p.evaluate(READ);
  compared++;
  for (const key of Object.keys(g)) {
    if (!(key in c)) continue;
    containers++;
    const G = g[key], C = c[key];
    if (G.kids.length !== C.kids.length) continue;      /* a different child count is not this instrument's class */
    if (G.rows !== C.rows) {
      rowDiff.push({ f, key, g: G.rows, c: C.rows, kids: G.kids.map(k => k.n).join(' ') });
      continue;                                          /* the rows already say it; do not also count every share */
    }
    for (let i = 0; i < G.kids.length; i++) {
      const a = G.kids[i], d = C.kids[i];
      if (a.n !== d.n) continue;
      if (a.row !== d.row) { rowDiff.push({ f, key, g: 'order', c: 'order', kids: a.n }); break; }
      if (Math.abs(a.share - d.share) >= 12) shareDiff.push({ f, key, n: a.n, g: a.share, c: d.share });
    }
  }
}
await b.close();

const group = (arr, k) => arr.reduce((m, x) => ((m[k(x)] = m[k(x)] || []).push(x), m), {});

console.log(`\nARRANGEMENT DIFF :: ${compared} paired pages at 1440, ${containers} shared containers compared\n`);

console.log(`  CHILDREN WRAP INTO A DIFFERENT NUMBER OF ROWS: ${rowDiff.length}`);
const rg = group(rowDiff, x => x.key.replace(/ #\d+$/, '') + '  [' + x.kids + ']');
for (const [k, v] of Object.entries(rg).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`    ${String(v.length).padStart(3)} pages  ${k}`);
  console.log(`              grey ${v[0].g} row(s), colour ${v[0].c} row(s)   e.g. ${v[0].f}`);
}

console.log(`\n  A CHILD TAKES A DIFFERENT SHARE OF ITS CONTAINER, 12 points or more: ${shareDiff.length}`);
const sg = group(shareDiff, x => x.key.replace(/ #\d+$/, '') + ' > ' + x.n);
for (const [k, v] of Object.entries(sg).sort((a, b) => b[1].length - a[1].length).slice(0, 20)) {
  console.log(`    ${String(v.length).padStart(3)} pages  ${k}`);
  console.log(`              grey ${v[0].g}%, colour ${v[0].c}%   e.g. ${v[0].f}`);
}
if (!rowDiff.length && !shareDiff.length) console.log('\n  The two sides arrange every shared container the same way.\n');
