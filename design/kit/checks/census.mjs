/* design/kit/checks/census.mjs :: every control in the product, snapshot first
   ============================================================================
   The third measurement of stage 08's census, and the first one taken on the
   whole product. Stage 08 ran the same walk twice and both times over the 52
   coloured screens, which was the sample. This runs over 62.

     node design/kit/checks/census.mjs             the coloured product
     node design/kit/checks/census.mjs wireframes  the grey corpus, for list two

   TWO CORPORA, AND ONE OF THE THREE LISTS IS IMPOSSIBLE FROM ONE OF THEM. The
   coloured corpus gives the FORMS: what a control looks like, and where two
   controls doing one job look different. "A control with no form" asks about
   something that is NOT in colour, so it can only be produced by holding the grey
   corpus, which is the whole product, against the coloured one.

   THE CONTROL CRITERION, applied in the page rather than in the source: `a`,
   `button`, `label`, `[role=button]`, `[onclick]`, or an element introducing
   `cursor:pointer` that its parent does not have. The second half catches a div
   acting as a control without counting an `svg` inside a button as a second button.

   THE PANEL IS SUBTRACTED, AND THE FIRST PASS OF STAGE 08 DID NOT SUBTRACT IT.
   The documentation sidebar was 61 per cent of the visible controls, which put a
   family called `nav-link` above `btn` in the ranking and reported four sizes of
   drift on a bare anchor that was the panel's own state list.

   SNAPSHOT FIRST, COLLAPSE AFTERWARDS. Twenty three properties are taken from
   every node and nothing is keyed during the walk. Keying while walking decides
   that two controls are the same before it has looked at the properties by which
   they differ, and the collapse is then a description of the key rather than of
   the product. What each table collapses by is named in the table.
   ============================================================================ */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const dirArg = process.argv[2] || 'design';
const dir = path.resolve(dirArg) + '/';
const PAGES = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'overview.html').sort();

const walk = () => {
  const out = [];
  const isControl = el => {
    const t = el.tagName.toLowerCase();
    if (['a','button','label','select','input','textarea'].includes(t)) return true;
    if (el.getAttribute('role') === 'button') return true;
    if (el.hasAttribute('onclick')) return true;
    const cs = getComputedStyle(el);
    const par = el.parentElement && getComputedStyle(el.parentElement);
    return cs.cursor === 'pointer' && (!par || par.cursor !== 'pointer');
  };
  for (const el of document.querySelectorAll('*')) {
    if (!isControl(el)) continue;
    const b = el.getBoundingClientRect();
    const visible = b.width > 0 && b.height > 0 && !!el.offsetParent;
    const cs = getComputedStyle(el);
    out.push({
      panel: !!el.closest('#sidebar'),
      visible,
      tag: el.tagName.toLowerCase(),
      cls: (el.className || '').toString().trim(),
      txt: (el.textContent || '').trim().slice(0, 40),
      /* twenty three properties, none of them keyed here */
      p: [cs.paddingTop, cs.paddingRight, cs.borderRadius, cs.borderTopWidth, cs.borderRightWidth,
          cs.borderBottomWidth, cs.borderLeftWidth, cs.borderTopColor, cs.borderRightColor,
          cs.borderBottomColor, cs.borderStyle, cs.backgroundColor, cs.backgroundImage, cs.color,
          cs.transform, cs.boxShadow, cs.textDecorationLine, cs.display, cs.cursor,
          cs.fontSize, cs.fontWeight, Math.round(b.width), Math.round(b.height)].join('|'),
      fs: cs.fontSize, fw: cs.fontWeight, bg: cs.backgroundColor, ink: cs.color,
    });
  }
  return { out, cw: document.documentElement.clientWidth };
};

const b = await chromium.launch();
const all = [];
const widthErr = [];
for (const vw of [1440, 360]) {
  const ctx = await b.newContext({ viewport: { width: vw, height: 900 } });
  const p = await ctx.newPage();
  for (const f of PAGES) {
    await p.goto('file://' + dir + f);
    await p.waitForLoadState('networkidle');
    const r = await p.evaluate(walk);
    if (r.cw !== vw) widthErr.push(`${f} asked ${vw} got ${r.cw}`);
    for (const x of r.out) all.push({ f, vw: r.cw, ...x });
  }
  await ctx.close();
}
await b.close();

const product = all.filter(x => !x.panel && x.visible);
console.log(`\nCENSUS :: ${PAGES.length} pages in ${dirArg}/, at 1440 and 360\n`);
if (widthErr.length) console.log('  MEASUREMENT ERROR: ' + widthErr.length + ' readings at the wrong width\n');
console.log('  nodes matching the criterion : ' + all.length);
console.log('  visible                      : ' + all.filter(x => x.visible).length);
console.log('  of those, PRODUCT            : ' + product.length +
  '  (' + product.filter(x => x.vw === 1440).length + ' at 1440, ' + product.filter(x => x.vw === 360).length + ' at 360)');
console.log('  documentation chrome, excluded: ' + all.filter(x => x.panel && x.visible).length);

/* ---- one job, several forms. Collapsed by TEXT, at 1440 only ---------------
   The narrow rendering is deliberately left out of this one: a control that
   changes shape between widths is the responsive design working, and folding the
   two together reports it as a divergence. */
const byText = new Map();
for (const x of product.filter(x => x.vw === 1440 && x.txt)) {
  const k = x.txt.toLowerCase().replace(/\s+/g, ' ');
  if (!byText.has(k)) byText.set(k, new Map());
  const m = byText.get(k);
  /* the form is the tag and its VARIANTS. `only-` twins are the responsive design
     working, and `is-` classes are states: a row that is selected is not a second
     form of a row, and folding them in reported nine of the first eighteen rows. */
  const form = x.tag + '.' + x.cls.split(' ')
    .filter(c => !c.startsWith('only-') && !c.startsWith('is-')).join('.');
  m.set(form, (m.get(form) || 0) + 1);
}
const multi = [...byText.entries()].filter(([, m]) => m.size > 1)
  .sort((a, b) => b[1].size - a[1].size);
console.log('\n  ONE JOB, SEVERAL FORMS (collapsed by text, at 1440, viewport twins folded): ' + multi.length);
for (const [t, m] of multi.slice(0, 12))
  console.log('    "' + t.slice(0, 34).padEnd(34) + '"  ' + [...m.entries()].map(([f, n]) => f + ' x' + n).join('   '));

/* ---- a class the product wears that the register does not know -------------- */
const worn = new Set();
for (const x of product) for (const c of x.cls.split(/\s+/)) if (c) worn.add(c);
console.log('\n  classes worn by a control: ' + worn.size);
console.log('  ' + [...worn].sort().join(' '));
