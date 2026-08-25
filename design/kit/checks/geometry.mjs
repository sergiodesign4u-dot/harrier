/* design/kit/checks/geometry.mjs :: the stand against the product, box for box
   ============================================================================
   A component moved by five pixels and NOTHING IN EITHER FILE LOOKED WRONG.

   kit.css declared the chip with a family and a size and let it inherit --leading
   from the body. The component file wrote the same two values as a `font`
   shorthand, which resets line-height to 1, and every chip in the product went
   from 25.94px tall to 21.00. Both declarations read as correct. A reviewer sees
   the same family and the same size. A grep for a literal finds nothing, because
   there is no literal. The only instrument that sees it is one that MEASURES THE
   BOX on both sides and compares.

     node design/kit/checks/geometry.mjs

   It is the cheap per-component version of the pixel comparison at step 8, and it
   runs now rather than then for the same reason the foundations were accepted
   before the components: a difference costs one file today and sixty afterwards.
   Every pair below is the same markup on two entry points, kit.css on the product
   screen and design/system/index.css on the stand.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';

/* component -> [product page, selector there] and [stand page, selector there].
   The label has to match on both sides or the width is not comparable. */
const PAIRS = [
  { name: 'btn',          from: ['design/case.html',    '.pane-foot .btn:not(.btn--primary)'], to: ['design/kit/btn.html', '.k-bench-half .btn:not(.btn--primary):not(.btn--quiet):not([aria-disabled])'] },
  { name: 'btn--primary', from: ['design/case.html',    '.pane-foot .btn--primary'], to: ['design/kit/btn.html',   '.k-bench-half .btn--primary'] },
  { name: 'key',          from: ['design/case.html',    '.pane-foot .btn--primary .key'], to: ['design/kit/btn.html', '.k-bench-half .btn--primary .key'] },
  { name: 'chip',         from: ['design/queue.html',   '.scopebar a.chip'],       to: ['design/kit/chip.html',     '.k-bench-half .chip'] },
  { name: 'chip--ghost',  from: ['design/queue.html',   '.scopebar .chip--ghost'], to: ['design/kit/chip.html',    '.k-bench-half .chip--ghost'] },
  { name: 'chip, as a button', from: ['design/queue.html', '.scopebar button.chip'], to: ['design/kit/chip.html', '.k-bench-half button.chip'] },
  { name: 'navitem',      from: ['design/queue.html',   '.z1 nav a[aria-current]'], to: ['design/kit/navitem.html','.k-bench-half .navitem.is-current'] },
  { name: 'input',        from: ['design/reject-other.html', '.field textarea'],  to: ['design/kit/input.html',    '.k-bench-half textarea.input[rows="2"]'] },
  { name: 'state',        from: ['design/queue.html',   '.states .state:not(.state--solid)'],  to: ['design/kit/state.html',    '.k-bench-half .state'] },
  { name: 'state--solid', from: ['design/queue.html',   '.states .state--solid'],  to: ['design/kit/state.html',    '.k-bench-half .state--solid'] },
  { name: 'bars',         from: ['design/queue.html',   '.sev .bars'],            to: ['design/kit/bars.html',     '.k-bench-half .bars'] },
  { name: 'tag',          from: ['design/case.html',    '.claim .tag'],           to: ['design/kit/tag.html',      '.k-bench-half .tag'] },
  { name: 'stamp',        textFlow: ['_h'],
                          from: ['design/case.html',    '.stamp'],                to: ['design/kit/stamp.html',    '.k-bench-half .stamp'] },
  { name: 'mark',         from: ['design/case.html',    '.lat .mark'],            to: ['design/kit/mark.html',     '.k-bench-half .mark'] },
  { name: 'src',          from: ['design/case.html',    '.claim a.src'],          to: ['design/kit/src.html',      '.k-bench-half a.src'] },
  { name: 'anote',        textFlow: ['_h'],
                          from: ['design/case.html',    '.anote'],                to: ['design/kit/anote.html',    '.k-bench-half .anote'] },
  { name: 'rec',          from: ['design/queue.html',   '.frow:not(.frow--head) .rec'], to: ['design/kit/rec.html', '.k-bench-half .rec'] },
  { name: 'was',          from: ['design/queue.html',   '.frow .was'],            to: ['design/kit/was.html',      '.k-bench-half .was'] },
  { name: 'hint',         from: ['design/reject.html',  '.hint'],                 to: ['design/kit/hint.html',     '.k-bench-half .hint'] },
  { name: 'label',        from: ['design/reject-other.html', '.field > label'],   to: ['design/kit/label.html',    '.k-bench-half .label'] },

  /* -- molecules, round 2 ---------------------------------------------------- */
  { name: 'row',          textFlow: ['_h'],
                          from: ['design/queue.html',   '.row:not(.row--head)'],  to: ['design/kit/row.html',       '.k-bench-half .row:not(.is-selected)'] },
  { name: 'row--head',    textFlow: ['_h'],
                          from: ['design/queue.html',   '.row--head'],            to: ['design/kit/row.html',       '.k-bench-half .row'] , skipAll:true },
  { name: 'sev',          from: ['design/queue.html',   '.sev'],                  to: ['design/kit/sev.html',       '.k-bench-half .sev'] },
  { name: 'frow',         textFlow: ['_h'],
                          from: ['design/queue.html',   '.frow:not(.frow--head)'], to: ['design/kit/frow.html',     '.k-bench-half .frow:not(.frow--head)'] },
  { name: 'opt',          textFlow: ['_h'],
                          from: ['design/reject.html',  '.opt:not(.is-chosen)'],  to: ['design/kit/opt.html',       '.k-bench-half .opt:not(.is-chosen)'] },
  { name: 'rota',         textFlow: ['_h'],
                          from: ['design/shift.html',   '.rota > div'],           to: ['design/kit/rota.html',      '.k-bench-half .rota > div'] },
  { name: 'block',        textFlow: ['_h'],
                          from: ['design/case.html',    '.block'],                to: ['design/kit/block.html',     '.k-bench-half .block'] },
  { name: 'nar',          textFlow: ['_h'],
                          from: ['design/case.html',    '.nar'],                  to: ['design/kit/nar.html',       '.k-bench-half .nar'] },
  { name: 'prov',         textFlow: ['_h'],
                          from: ['design/case.html',    '.prov'],                 to: ['design/kit/prov.html',      '.k-bench-half .prov'] },
  { name: 'gnote',        textFlow: ['_h'],
                          from: ['design/case.html',    '.gnote'],                to: ['design/kit/gnote.html',     '.k-bench-half .gnote'] },
  { name: 'empty',        textFlow: ['_h'],
                          from: ['design/queue-empty.html', '.empty'],            to: ['design/kit/empty.html',     '.k-bench-half .empty'] },
  { name: 'tomb',         textFlow: ['_h'],
                          from: ['design/entry-gone.html', '.tomb'],  to: ['design/kit/tomb.html',      '.k-bench-half .tomb'] },
  { name: 'scopebar',     textFlow: ['_h'],
                          from: ['design/queue.html',   '.scopebar'],             to: ['design/kit/scopebar.html',  '.k-bench-half .scopebar'] },
  { name: 'readout',      textFlow: ['_h'],
                          from: ['design/queue.html',   '.readout'],              to: ['design/kit/readout.html',   '.k-bench-half .readout'] },
  { name: 'qfoot',        textFlow: ['_h'],
                          from: ['design/queue.html',   '.qfoot'],                to: ['design/kit/qfoot.html',     '.k-bench-half .qfoot'] },
  { name: 'chips-hd',     textFlow: ['_h'],
                          from: ['design/case-unrecorded.html', '.chips-hd'],     to: ['design/kit/chips-hd.html',  '.k-bench-half .chips-hd'] },
  { name: 'fleet-more',   textFlow: ['_h'],
                          from: ['design/queue.html',   '.fleet-more'],           to: ['design/kit/fleet-more.html','.k-bench-half .fleet-more'] },
  { name: 'banner',       textFlow: ['_h'],
                          from: ['design/queue-clerk-down.html', '.banner:not(.banner--quiet)'], to: ['design/kit/banner.html', '.k-bench-half .banner:not(.banner--quiet)'] },
  { name: 'toast',        textFlow: ['_h'],
                          from: ['design/queue-notice.html', '.toast:not(.toast--alert)'], to: ['design/kit/toast.html', '.k-bench-half .toast:not(.toast--alert)'] },
  { name: 'field',        textFlow: ['_h'],
                          from: ['design/reject-other.html', '.field'],           to: ['design/kit/field.html',     '.k-bench-half .field'] },
  { name: 'expand',       textFlow: ['_h'],
                          from: ['design/case.html',    '.expand'],               to: ['design/kit/expand.html',    '.k-bench-half .expand'] },
  { name: 'doorcard',     textFlow: ['_h'],
                          from: ['design/index-signed-out.html', '.doorcard'],    to: ['design/kit/doorcard.html',  '.k-bench-half .doorcard'] }
];

/* DECLARED DIFFERENCES. A difference that is EXPLAINED is not a failure; a difference
   with no row here is. Every entry names the row in docs/tokens-audit.md that decided
   it, exactly as the pixel comparison at step 8 will. Nothing is silenced: an expected
   difference is still printed, under its own heading and with its reason. */
const EXPECTED = [
  { on: /^readout$/, keys: ['fontWeight'],
    why: 'the readout is an `h1` on all 35 screens, and the UA weight of 700 reached the whole line including the qualifier, which is not a counted value. Attribute A3 allows 700 on a counted value only. It declares 400 now and the `b` carries the 700 it was always meant to be the only thing carrying. tokens-audit.md, step 5' },
  { on: /^state/, keys: ['_h','lineHeight'],
    why: 'state carried the same defect as chip and takes the same cure: it was `chip chip--state` and inherited the body line-height, so it stood at 24.84 instead of padding plus one line. 21.00 now, and it matches chip exactly, which is the point of them being one box. tokens-audit.md, step 5' },
  { on: /^rec$/, keys: ['_h'],
    why: 'STAGE 10 MADE THE PANE FLUID, and this component stands inside it. The pane was a fixed 380 dropping to 320; it is clamp(22.5rem, 24vw, 34rem) now, so at 1440 it is 360 rather than 320 and the record cell no longer needs the second line it needed before. The stand shows the component in a fixed width bench, which is right for a bench and means a component inside the pane can legitimately measure differently there. It is the only one of the 42 pairs where that shows. responsive.md, section 8' },
  { on: /^chip/, keys: ['_h','lineHeight','textDecorationLine'],
    why: 'the chip rendered at THREE heights in one scope bar, 25.94 / 23.00 / 22.00, depending on whether it was written as an `a` or a `button` and which glyph it carried, and the `a` was underlined. It declares line-height and text-decoration now and stands at 21.00 everywhere. tokens-audit.md, step 5' }
];

/* What is compared. Height and the box, never width: the stand's container is not
   the product's and a different width is the bench, not a defect. */
const PROPS = ['fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','textTransform',
               'paddingTop','paddingRight','paddingBottom','paddingLeft',
               'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
               'borderTopStyle','borderRadius','display','gap','textDecorationLine'];

import fs from 'fs';

const read = async (page, file, sel) => {
  if (!fs.existsSync(file)) return undefined;   /* not written yet, and that is not a failure */
  await page.goto('file://' + path.resolve(file));
  await page.waitForLoadState('networkidle');
  return page.evaluate(s => {
    const el = document.querySelector(s);
    if (!el) return null;
    const cs = getComputedStyle(el), r = el.getBoundingClientRect(), out = { _h: r.height.toFixed(2) };
    ['fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','textTransform',
     'paddingTop','paddingRight','paddingBottom','paddingLeft',
     'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
     'borderTopStyle','borderRadius','display','gap','textDecorationLine']
      .forEach(p => out[p] = cs[p]);
    return out;
  }, sel);
};

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
let checked = 0, missing = [], diffs = [], expected = [];

for (const pair of PAIRS) {
  const A = await read(page, pair.from[0], pair.from[1]);
  const B = await read(page, pair.to[0],   pair.to[1]);
  if (A === undefined || B === undefined) { missing.push(`${pair.name}: not written yet`); continue; }
  if (!A || !B) { missing.push(`${pair.name}: ${!A ? 'PRODUCT' : 'STAND'} instance not found, ${!A ? pair.from.join(' ') : pair.to.join(' ')}`); continue; }
  checked++;
  /* A WRAPPING PARAGRAPH'S HEIGHT IS A FUNCTION OF ITS COLUMN, and the bench column is not
     the detail pane. Comparing it would report a defect every time the stand is wider than
     the product, which is always. Named per component rather than dropped globally, so a
     box that SHOULD be a fixed height still gets checked. */
  if (pair.skipAll) { missing.push(pair.name + ': not comparable, the bench has no head instance'); continue; }
  const skip = (pair.textFlow || []);
  const bad = ['_h', ...PROPS].filter(k => A[k] !== B[k] && !skip.includes(k));
  bad.forEach(k => {
    const ex = EXPECTED.find(e => e.on.test(pair.name) && e.keys.includes(k));
    const line = `${pair.name}  ${k}:  product ${A[k]}  ->  system ${B[k]}`;
    (ex ? expected : diffs).push(ex ? { line, why: ex.why } : line);
  });
}

await b.close();
console.log(`pairs compared: ${checked} of ${PAIRS.length}`);
console.log(`not built yet or no instance: ${missing.length}`);
missing.forEach(m => console.log('  ' + m));
console.log(`expected, with the row that decided it: ${expected.length}`);
[...new Set(expected.map(e => e.why))].forEach(w => console.log('  ' + w));
expected.forEach(e => console.log('    ' + e.line));
console.log(`UNEXPLAINED DIFFERENCES: ${diffs.length}`);
diffs.forEach(d => console.log('  ' + d));
