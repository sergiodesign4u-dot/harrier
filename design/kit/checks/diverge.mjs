/* design/kit/checks/diverge.mjs :: the grey corpus against the coloured one
   ============================================================================
   IT EXISTS BECAUSE A CLAIM ASSERTED TWICE AND NEVER RE-RUN WENT FALSE IN
   SILENCE. "Every coloured page holds a structural diff of exactly zero against
   its grey original" was measured at stage 06, re-asserted at stage 07, and then
   stood in seven files in the present tense for two stages while nobody ran it
   again. Nothing in this folder compared the two corpora: census, compose,
   screens and rules all take a corpus as an argument and read one at a time, and
   migrate and refactor compare design/ against a design/ baseline. A claim with
   no instrument behind it is a claim that only reports the day it was written.

     node design/kit/checks/diverge.mjs              every paired page
     node design/kit/checks/diverge.mjs queue.html   one pair, by name

   A DIVERGENCE IS NOT AUTOMATICALLY A LAG, and this is the reading rule the
   number needs. wireframes/ is frozen, so the grey cannot move and every
   difference was made on the coloured side. Three things it can mean, and only a
   person can tell them apart: the colour is AHEAD, because a ruling landed after
   the freeze and the grey cannot carry it; the colour is DELIBERATE, because the
   coloured state says something the grey said wrongly, as when an expired
   evidence snapshot stops offering Accept; or the colour DRIFTED, and that is the
   only one of the three that is a defect. This file measures. It does not judge.

   WHAT IS COMPARED, AND WHERE THE ROOT IS. Grey renders `.wf-screen`, colour
   renders `.screen`, and everything outside that root is the case study looking
   at the product rather than the product: the `#sidebar` documentation panel is
   excluded on both sides. Six measures per pair, and they are deliberately of
   different orders:

     zone signature     the direct children of the screen root, by tag and by the
                        zone name they carry. A zone appearing or disappearing is
                        a different order of event from a tag moving inside one,
                        and it is reported on its own line for that reason.
     element count      every node under the root
     tag diff           the tag-only sequence in document order, aligned by LCS,
                        reported as insertions plus deletions
     heading tree       every h1 to h6 under the root, level and text
     interactive        VISIBLE controls by the census criterion, as a COUNT: the
                        question is whether the colour can still be operated where
                        the grey could, and a label match answers a different one
     text runs          every non-empty text node under the root, as a multiset

   CLASSES ARE IGNORED IN THE TAG DIFF, ON PURPOSE. The stage 08 rename map
   changes class names on every coloured page and changes no tree, so any
   class-keyed count would report the whole corpus as diverged and would be
   measuring the rename rather than the structure. The rename is deliberate; the
   tree is the claim.

   THE NARROW WIDTH IS MEASURED, NOT REQUESTED. A scrollbar turns a requested 360
   into a 345 the document actually lays out at, so every rendering asserts
   `document.documentElement.clientWidth` and a mismatch is RE-TAKEN with the
   viewport corrected rather than reported as a finding. The DOM measures are the
   same at both widths by construction and are read once; the interactive count is
   not, and is read at each.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const root = process.cwd();
const GREY = path.join(root, 'wireframes') + '/';
const COLOUR = path.join(root, 'design') + '/';
const only = process.argv[2];

/* THE PAIR LIST IS AN INTERSECTION READ FROM DISK, never a hand kept list. A page
   that exists in only one corpus is not a divergence, it is a page the rollout has
   not reached or a page the grey never had, and it is named separately. */
const greyPages = fs.readdirSync(GREY).filter(f => f.endsWith('.html') && f !== 'overview.html');
const colourPages = fs.readdirSync(COLOUR).filter(f => f.endsWith('.html') && f !== 'overview.html');
const PAIRS = (only ? [only] : greyPages.filter(f => colourPages.includes(f)).sort());
const greyOnly = greyPages.filter(f => !colourPages.includes(f)).sort();
const colourOnly = colourPages.filter(f => !greyPages.includes(f)).sort();

/* ---- the walk, run inside the page ---------------------------------------- */
const collect = () => {
  const root = document.querySelector('.wf-screen, .screen');
  if (!root) return null;
  const inPanel = el => !!el.closest('#sidebar');

  /* the root itself is the frame, not content: it is `.wf-screen` on one side and
     `.screen` on the other, and counting it would put a guaranteed 1 into every page */
  const els = [...root.querySelectorAll('*')].filter(e => !inPanel(e));

  /* the zone name rather than the class list: `z4` in grey and `z4 queue-list` in
     colour are the same zone, and the second token is the rename map */
  const zoneName = el => {
    if (el.id) return '#' + el.id;
    const z = (el.className || '').toString().split(/\s+/).filter(c => /^z\d/.test(c));
    return z.length ? '.' + z.join('.') : '';
  };
  const zones = [...root.children].filter(e => !inPanel(e))
    .map(e => e.tagName.toLowerCase() + zoneName(e));

  const tags = els.map(e => e.tagName.toLowerCase());

  const headings = els.filter(e => /^H[1-6]$/.test(e.tagName))
    .map(e => e.tagName.toLowerCase() + ' ' + e.textContent.replace(/\s+/g, ' ').trim());

  /* the census criterion, unchanged: an element that is a control by tag or role,
     or one that introduces a pointer cursor its parent does not have */
  const isControl = el => {
    const t = el.tagName.toLowerCase();
    if (['a', 'button', 'label', 'select', 'input', 'textarea'].includes(t)) return true;
    if (el.getAttribute('role') === 'button') return true;
    if (el.hasAttribute('onclick')) return true;
    const cs = getComputedStyle(el);
    const par = el.parentElement && getComputedStyle(el.parentElement);
    return cs.cursor === 'pointer' && (!par || par.cursor !== 'pointer');
  };
  const interactive = els.filter(e => {
    if (!isControl(e)) return false;
    const b = e.getBoundingClientRect();
    return b.width > 0 && b.height > 0 && !!e.offsetParent;
  }).map(e => e.tagName.toLowerCase() + ' :: ' + e.textContent.replace(/\s+/g, ' ').trim().slice(0, 40));

  const runs = [];
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) {
    const p = n.parentElement;
    if (!p || inPanel(p)) continue;
    if (/^(SCRIPT|STYLE)$/.test(p.tagName)) continue;
    const s = n.nodeValue.replace(/\s+/g, ' ').trim();
    if (s) runs.push(s);
  }

  return {
    count: els.length, zones, tags, headings, interactive, runs,
    cw: document.documentElement.clientWidth,
  };
};

/* ---- helpers -------------------------------------------------------------- */
/* insertions plus deletions after a longest common subsequence alignment. The
   sequences are a few hundred long, so the plain table is the right instrument. */
const lcsDiff = (A, B) => {
  const n = A.length, m = B.length;
  const T = [];
  let prev = new Uint32Array(m + 1);
  T.push(prev);
  for (let i = 1; i <= n; i++) {
    const cur = new Uint32Array(m + 1);
    for (let j = 1; j <= m; j++)
      cur[j] = A[i - 1] === B[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
    T.push(cur); prev = cur;
  }
  /* WALK THE TABLE BACK, so the report can say WHICH tags were inserted and which
     deleted rather than only how many. A multiset would cancel the stage 12 heading
     move to nothing: an h1 leaving one element and an h2 arriving on another is one
     h1 out and one h2 in on both sides, and the interesting event is exactly that. */
  const del = [], ins = [];
  let i = n, j = m;
  while (i > 0 && j > 0) {
    if (A[i - 1] === B[j - 1]) { i--; j--; }
    else if (T[i - 1][j] >= T[i][j - 1]) { del.push(A[--i]); }
    else { ins.push(B[--j]); }
  }
  while (i > 0) del.push(A[--i]);
  while (j > 0) ins.push(B[--j]);
  return { del, ins, total: del.length + ins.length };
};

/* what stands in one list and not the other, counted as a multiset */
const multiDiff = (A, B) => {
  const bag = new Map();
  for (const x of A) bag.set(x, (bag.get(x) || 0) + 1);
  const bOnly = [];
  for (const x of B) {
    const n = bag.get(x) || 0;
    if (n > 0) bag.set(x, n - 1); else bOnly.push(x);
  }
  const aOnly = [];
  for (const [x, n] of bag) for (let i = 0; i < n; i++) aOnly.push(x);
  return { aOnly, bOnly };
};

const same = (A, B) => A.length === B.length && A.every((x, i) => x === B[i]);

/* ---- the render, with the width asserted ---------------------------------- */
const read = async (b, want, file, dir) => {
  for (let attempt = 0, req = want; attempt < 5; attempt++) {
    const ctx = await b.newContext({ viewport: { width: req, height: 1000 } });
    const p = await ctx.newPage();
    await p.goto('file://' + dir + file);
    await p.waitForTimeout(60);
    const d = await p.evaluate(collect);
    await ctx.close();
    if (!d) return null;
    if (d.cw === want) return d;
    /* RE-TAKEN, NOT REPORTED. The scrollbar ate the difference; give it back and
       render again, so the reading is of the width the document actually laid out. */
    req += want - d.cw;
  }
  throw new Error(`could not hold clientWidth ${want} on ${file}`);
};

/* ---- the run -------------------------------------------------------------- */
const b = await chromium.launch();
const rows = [];
const tagOnly = { grey: new Map(), colour: new Map() };
let missing = [];

for (const f of PAIRS) {
  const g = { }, c = { };
  for (const vw of [1440, 360]) {
    g[vw] = await read(b, vw, f, GREY);
    c[vw] = await read(b, vw, f, COLOUR);
  }
  if (!g[1440] || !c[1440]) { missing.push(f); continue; }

  const G = g[1440], C = c[1440];
  const tag = lcsDiff(G.tags, C.tags);
  for (const t of tag.del) tagOnly.grey.set(t, (tagOnly.grey.get(t) || 0) + 1);
  for (const t of tag.ins) tagOnly.colour.set(t, (tagOnly.colour.get(t) || 0) + 1);
  const heads = multiDiff(G.headings, C.headings);
  const runs = multiDiff(G.runs, C.runs);
  /* THE CONTROLS ARE COUNTED, NOT MATCHED BY LABEL, and the first version of this
     matched by label and reported 181 movements. A `.kmap` link whose glyph became a
     CSS mask has no text left, and a head that became a `summary` changed tag: both
     read as a control leaving and another arriving when the control never moved. The
     question this measure answers is whether the colour can still be OPERATED where
     the grey could, and that is a count. The labels are printed only where the count
     disagrees, because that is the only place they name something. */
  const inter = {};
  for (const vw of [1440, 360]) inter[vw] = {
    g: g[vw].interactive.length, c: c[vw].interactive.length,
    ...multiDiff(g[vw].interactive, c[vw].interactive),
  };

  rows.push({
    f,
    zonesSame: same(G.zones, C.zones),
    zonesG: G.zones.join(' '), zonesC: C.zones.join(' '),
    nG: G.count, nC: C.count,
    tag,
    headSame: same(G.headings, C.headings),
    headG: heads.aOnly, headC: heads.bOnly,
    inter,
    runsG: runs.aOnly, runsC: runs.bOnly,
    runCountG: G.runs.length, runCountC: C.runs.length,
  });
}
await b.close();

/* ---- the register --------------------------------------------------------- */
const sum = (k) => rows.reduce((a, r) => a + k(r), 0);
console.log(`\nGREY AGAINST COLOUR over ${rows.length} paired pages at 1440 and 360`);
console.log(`root .wf-screen against .screen, #sidebar excluded, classes ignored in the tag diff\n`);

console.log('page                                 el(g)  el(c)  -tag  +tag  head   int   str');
const interDelta = r => (r.inter[1440].c - r.inter[1440].g) + (r.inter[360].c - r.inter[360].g);
for (const r of rows) {
  const clean = !r.tag.total && r.headSame && !r.runsG.length && !r.runsC.length && !interDelta(r);
  if (clean && !only) continue;                      /* the register lists what moved */
  const d = interDelta(r);
  console.log(
    `  ${r.f.padEnd(34)}${String(r.nG).padStart(6)}${String(r.nC).padStart(7)}` +
    `${String(r.tag.del.length).padStart(6)}${String(r.tag.ins.length).padStart(6)}` +
    `${String(r.headSame ? 0 : r.headG.length + r.headC.length).padStart(6)}` +
    `${(d > 0 ? '+' + d : String(d)).padStart(6)}${String(r.runsG.length + r.runsC.length).padStart(6)}` +
    (r.zonesSame ? '' : '   ZONES DIFFER'));
}

const identical = rows.filter(r => !r.tag.total).length;
const zonesSame = rows.filter(r => r.zonesSame).length;
const headSame = rows.filter(r => r.headSame).length;
const runsSame = rows.filter(r => !r.runsG.length && !r.runsC.length).length;

console.log(`\nELEMENTS   grey ${sum(r => r.nG)}, colour ${sum(r => r.nC)}`);
console.log(`TAGS       ${identical} of ${rows.length} pages have a byte for byte identical tag sequence, ${rows.length - identical} do not`);
console.log(`           ${sum(r => r.tag.total)} insertions plus deletions in total after LCS alignment`);

console.log(`\nZONES      ${zonesSame} of ${rows.length} pages carry an identical zone signature` +
  (zonesSame === rows.length
    ? '. ZERO DIVERGENCE: no zone was added and none dropped, and every divergence below is INSIDE a zone.'
    : ':'));
for (const r of rows.filter(x => !x.zonesSame))
  console.log(`  ${r.f}\n    grey   ${r.zonesG}\n    colour ${r.zonesC}`);

const tagLine = (m) => [...m.entries()].sort((a, b) => b[1] - a[1])
  .map(([t, n]) => `${t} ${n}`).join(', ') || 'none';
console.log(`\nTAGS ONLY IN COLOUR   ${tagLine(tagOnly.colour)}`);
console.log(`TAGS ONLY IN GREY     ${tagLine(tagOnly.grey)}`);

console.log(`\nHEADINGS   identical on ${headSame} of ${rows.length}, different on ${rows.length - headSame}`);
const headKinds = new Map();
for (const r of rows.filter(x => !x.headSame)) {
  const k = `grey [${r.headG.join(' | ')}]  ->  colour [${r.headC.join(' | ')}]`;
  headKinds.set(k, (headKinds.get(k) || 0) + 1);
}
for (const [k, n] of [...headKinds.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12))
  console.log(`  ${String(n).padStart(3)} pages  ${k.slice(0, 150)}`);

console.log(`\nSTRINGS    grey ${sum(r => r.runCountG)} text runs, colour ${sum(r => r.runCountC)}`);
console.log(`           ${sum(r => r.runsG.length)} runs stand in grey alone and ${sum(r => r.runsC.length)} in colour alone, across ${rows.length - runsSame} pages`);
console.log(`           ${runsSame} of ${rows.length} pages have zero string divergence`);

const interSame = rows.filter(r => !interDelta(r)).length;
console.log(`\nINTERACTIVE   visible controls, counted at each width`);
console.log(`           grey ${sum(r => r.inter[1440].g + r.inter[360].g)}, colour ${sum(r => r.inter[1440].c + r.inter[360].c)}, over ${rows.length * 2} paired renderings`);
console.log(`           ${interSame} of ${rows.length} pages carry the same count at both widths, ${rows.length - interSame} do not`);
for (const r of rows.filter(x => interDelta(x))) for (const vw of [1440, 360]) {
  const i = r.inter[vw];
  if (i.g === i.c) continue;
  console.log(`  ${r.f} @${vw}  grey ${i.g}, colour ${i.c}`);
  /* the labels, and only here. Elsewhere they name a mask and a tag rather than a control. */
  for (const x of i.aOnly) console.log(`      only in grey    ${x}`);
  for (const x of i.bOnly) console.log(`      only in colour  ${x}`);
}

if (missing.length) console.log(`\nNO SCREEN ROOT FOUND on ${missing.length}: ${missing.join(', ')}`);
if (greyOnly.length) console.log(`\nGREY WITH NO COLOURED TWIN   ${greyOnly.length}: ${greyOnly.join(', ')}`);
if (colourOnly.length) console.log(`COLOUR WITH NO GREY TWIN     ${colourOnly.length}: ${colourOnly.join(', ')}`);

console.log(`\nA divergence is not automatically a lag. wireframes/ is frozen, so every`);
console.log(`difference was made on the coloured side, and it is ahead, deliberate or drifted.`);
console.log(`Only the third is a defect, and this file does not tell them apart.\n`);
