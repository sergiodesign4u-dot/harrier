/* design/kit/checks/attribute.mjs :: every difference, attributed to a class
   ============================================================================
   The pixel comparison says HOW MUCH moved. This says WHAT moved and on which
   class, which is what a row in docs/tokens-audit.md has to be written against.

     node design/kit/checks/attribute.mjs            every coloured screen
     node design/kit/checks/attribute.mjs case.html  one of them

   It loads each screen twice in the same browser, once with the system stylesheet
   disabled and once with it enabled, walks every element in document order and
   compares a fixed set of computed properties. The result is grouped by CLASS, so
   a change that touches 194 elements is reported once with its count rather than
   194 times.

   A GROUP THAT IS NOT IN `EXPLAINED` BELOW IS A DEFECT. That is the rule the whole
   stage rests on: a difference with a row is a decision, a difference without one
   is something nobody decided.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const PROPS = ['color','backgroundColor','borderTopColor','borderBottomColor','borderLeftColor',
               'borderRightColor','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth',
               'borderTopStyle','fontSize','fontWeight','fontFamily','lineHeight','letterSpacing',
               'textTransform','textDecorationLine','paddingTop','paddingBottom','paddingLeft','paddingRight',
               'marginTop','marginBottom','display','opacity','gridTemplateColumns','position','overflowY'];

/* Each entry names a row in docs/tokens-audit.md. Anything not matched is unexplained. */
const EXPLAINED = [
  { on: /(^|\s)(chip|chip--ghost|chip--solid|chip--state)(\s|$)/, why: 'chip and state declare line-height and text-decoration, because the element was deciding them. Three heights in one scope bar' },
  { on: /(^|\s)readout(\s|$)/,  why: 'readout is an h1 and the UA weight of 700 reached the whole line, including a qualifier that is not a counted value' },
  { on: /(^|\s)(field|input|textarea|select|rmp-row)(\s|$)/, why: 'the field boundary moves from --color-edge at 2.997 to --rule-control at 3.98. A text field is identified by nothing but its boundary' },
  { on: /(^|\s)key(\s|$)/,      why: 'one atom, one declaration: the key border follows the host rather than a fixed rule colour' },
  { on: /(^|\s)(src|expand|kmap)(\s|$)/, why: 'the applied icon masks paint at the weight the set declares, 1.5 rather than 1.8' },
  { on: /(^|\s)(row|frow|sev|bars|states|client|cost|age|concluded|dim|sup|when|why)(\s|$)/, why: 'downstream of the chip and state height: a shorter state makes a shorter row, and every row below it moves' },
];

const root = process.cwd();
const only = process.argv[2];
const screens = (only ? [only] : fs.readdirSync(path.join(root, 'design'))
  .filter(f => f.endsWith('.html') && f !== 'overview.html').sort());

const b = await chromium.launch();
const groups = new Map();   /* key -> {n, props:Set, screens:Set} */
let elements = 0;

for (const vw of [1440, 360]) {
  const ctx = await b.newContext({ viewport: { width: vw, height: 900 } });
  const page = await ctx.newPage();
  for (const f of screens) {
    await page.goto('file://' + path.join(root, 'design', f));
    await page.waitForLoadState('networkidle');
    const res = await page.evaluate((props) => {
      const sheet = [...document.styleSheets].find(s => s.href && s.href.includes('/system/index.css'));
      const link = [...document.querySelectorAll('link')].find(l => l.href.includes('/system/index.css'));
      const read = () => [...document.querySelectorAll('body *')].map(e => {
        const cs = getComputedStyle(e); const o = {};
        props.forEach(p => o[p] = cs[p]); return o;
      });
      /* THE ENABLED STATE IS READ FIRST AND THE DISABLED ONE SECOND, and the order is not
         cosmetic: re-enabling a stylesheet does not take effect inside the same task, so
         reading in the other order returns the same numbers twice and the instrument
         reports a clean run on a page that changed by fifteen per cent. It did exactly
         that on its first execution. */
      const after = read();
      link.disabled = true;
      const before = read();
      link.disabled = false;
      const els = [...document.querySelectorAll('body *')];
      const out = [];
      for (let i = 0; i < els.length; i++) {
        const d = props.filter(p => before[i][p] !== after[i][p]);
        if (d.length) out.push({ cls: (els[i].className || '').toString() || els[i].tagName.toLowerCase(), props: d });
      }
      return { out, total: els.length };
    }, PROPS);
    elements += res.total;
    for (const r of res.out) {
      const g = groups.get(r.cls) || { n: 0, props: new Set(), screens: new Set() };
      g.n++; r.props.forEach(p => g.props.add(p)); g.screens.add(f);
      groups.set(r.cls, g);
    }
  }
  await ctx.close();
}
await b.close();

const rows = [...groups.entries()].sort((a, b) => b[1].n - a[1].n);
const named = [], loose = [];
for (const [cls, g] of rows) {
  const ex = EXPLAINED.find(e => e.on.test(cls));
  (ex ? named : loose).push([cls, g, ex]);
}
console.log(`screens: ${screens.length} at two viewports   elements walked: ${elements}`);
console.log(`classes with a difference: ${rows.length}`);
console.log(`\nEXPLAINED, by the row that decided it:`);
[...new Set(named.map(r => r[2].why))].forEach(w => {
  const mine = named.filter(r => r[2].why === w);
  console.log(`  ${w}`);
  console.log(`    ${mine.length} classes, ${mine.reduce((a, r) => a + r[1].n, 0)} elements`);
  mine.slice(0, 6).forEach(([c, g]) => console.log(`      .${c.slice(0, 50).padEnd(50)} ${String(g.n).padStart(5)} el  ${[...g.props].slice(0,4).join(' ')}`));
});
console.log(`\nUNEXPLAINED: ${loose.length} classes, ${loose.reduce((a, r) => a + r[1].n, 0)} elements`);
loose.slice(0, 40).forEach(([c, g]) =>
  console.log(`  .${(c || '(no class)').slice(0, 46).padEnd(46)} ${String(g.n).padStart(5)} el on ${String(g.screens.size).padStart(3)} screens   ${[...g.props].slice(0, 6).join(' ')}`));
