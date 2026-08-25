/* design/kit/checks/sweep.mjs :: the width sweep, because the defect lives between the points
   ============================================================================
   Three screenshots at three widths prove three widths. The width that breaks a
   product is almost never one of them: it is the one where something has already
   stopped fitting and the breakpoint has not yet fired.

     node design/kit/checks/sweep.mjs                the coloured screens
     node design/kit/checks/sweep.mjs design/kit     the stand
     node design/kit/checks/sweep.mjs design queue.html

   FROM 320 TO 1600 IN STEPS OF 40, AND IN STEPS OF 10 WITHIN 80 EITHER SIDE OF THE
   REGISTERED POINT, because that is where it breaks most often. Then four widths
   above 1600 that the product's own spec names: 1680, 1920, 2200 and 2560, the last
   two past the declared band, where a layout that only knew how to stretch shows it.

   THE WIDTH IS MEASURED, NOT INTENDED. A scrollbar turns a requested 360 into an
   actual 345, and a whole row of results is then taken at a width nobody asked
   about. Every reading carries the document's own clientWidth, and a disagreement
   with the requested width is an error of measurement to be fixed and retaken
   rather than a result to be reported. The class "it breaks at 360" does not
   reproduce at 375.

   WHAT IS READ AT EVERY WIDTH:
     horizontal overflow      scrollWidth against clientWidth, no tolerance
     an element past its box  any visible element whose right edge is outside the shell
     navigation carriers      how many are visible AT ONCE. Exactly one wherever there
                              is a shell, and none where there is not: the sign in
                              states and the full outage states carry no shell at all
     the measure              the longest run of prose, counted in characters
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const dirArg = process.argv[2] || 'design';
const only = process.argv[3];
const dir = path.resolve(dirArg) + '/';
const PAGES = only ? [only] : fs.readdirSync(dir)
  .filter(f => f.endsWith('.html') && f !== 'overview.html').sort();

/* the registered point, read from the token rather than repeated here */
const tokens = fs.readFileSync('design/system/tokens.css', 'utf8');
const bp = Math.round(parseFloat((tokens.match(/--bp-split-panes:\s*([\d.]+)rem/) || [])[1] || 56.25) * 16);

/* THE PRODUCT'S DECLARED NARROW MINIMUM. CLAUDE.md says the platform is responsive
   down to 360 for one real scenario: an on call analyst opening a paged case from a
   phone at 03:00. The sweep still starts below it, because information about a width
   nobody promised is still information, but a finding there is reported as BELOW THE
   DECLARED MINIMUM rather than as a defect. Calling it a defect would make the suite
   red about a promise nobody made, and a suite that is red about nothing gets ignored
   about everything. */
const FLOOR = 360;

const widths = [];
for (let w = 320; w <= 1600; w += 40) widths.push(w);
for (let w = bp - 80; w <= bp + 80; w += 10) widths.push(w);
for (const w of [1680, 1920, 2200, 2560]) widths.push(w);
const WIDTHS = [...new Set(widths)].sort((a, b) => a - b);

/* A measure over this many characters is a finding. --measure is the token and it is
   66ch; the check is deliberately looser than the token, because a line that runs to
   80 is bad and a line that runs to 68 is a rounding argument. */
const MEASURE_MAX = 80;

const b = await chromium.launch();
const findings = [], mismatched = [];
let readings = 0;

/* ONE CONTEXT PER WIDTH, PAGES INSIDE IT. The first version opened a browser context
   per reading, which is 2548 of them over the coloured screens and takes longer than
   anybody will wait for. A context is the expensive object and the viewport is the
   thing that changes, so the loops are the other way round: 49 contexts, not 2548. */
for (const w of WIDTHS) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
  const p = await ctx.newPage();
  for (const f of PAGES) {
    await p.goto('file://' + dir + f);
    await p.waitForLoadState('networkidle');
    const r = await p.evaluate(() => {
      const doc = document.documentElement;
      const vis = el => {
        if (!el.offsetParent && getComputedStyle(el).position !== 'fixed') return false;
        const b = el.getBoundingClientRect();
        return b.width > 0 && b.height > 0;
      };
      /* the navigation carriers of this product: the bar's own nav, and anything that
         would replace it. Counted as CARRIERS, not as links. */
      /* EXACTLY ONE CARRIER WHERE THERE IS A SHELL, and none where there is not. The
         first version asserted one everywhere and reported the five sign in states
         and the two full outage states as defects: those screens carry no shell at
         all, by usage rule R5, and a shell that is absent has no carrier to count. */
      /* A CONSOLE THAT IS OUT HAS A BAR AND NO NAVIGATION, by usage rule R5: the
         annunciator is gone and so is the way to anywhere else, because there is
         nowhere else to be. `.z1--out` is the marker, and a bar wearing it is not a
         shell for the purposes of counting carriers. */
      const hasShell = !!document.querySelector('.z1') && !document.querySelector('.z1--out');
      const carriers = [...document.querySelectorAll('.z1 nav, .navrail, .tabbar')].filter(vis).length;
      /* THE LONGEST RUN OF PROSE, in characters of its own font. What counts as prose
         is narrower than "every paragraph": the shell's own strips are one line of
         status separated by rules, read as a glance rather than as a sentence, and
         counting them reported 95ch on the annunciator at 520 on every screen in the
         product. A measure is a property of something somebody READS ACROSS. */
      let measure = 0, measureOn = '';
      /* `.rail .soft` IS IN THE CORPUS AND `.rail` IS NOT, and the pair is the whole
         point of the rule. The record band is a full bleed plate carrying a label, a
         timestamp, a sentence and a way out on one line; it is not read across, its
         SENTENCE is, and the sentence has its own element. Measuring the plate reported
         148 characters at 1290 while the sentence inside it sat at the measure, and
         obeying that reading would have capped the plate at 53 per cent of the framed
         record, which is the one thing rail.css says must never happen. Same reasoning
         as `.wrapline` below: a measure is a property of a run of text somebody reads
         across. Stage 13. */
      for (const el of document.querySelectorAll('.nar, .cons, .sub, .k-lede, .k-note, .rail .soft, p')) {
        if (!vis(el) || !el.textContent.trim()) continue;
        if (el.querySelector('p, div, section')) continue;
        if (el.closest('.z1, .z2, .qfoot, .readout, .stamp, .fleet-more, .annun')) continue;
        /* and not the documentation panel: it is this case study's chrome, it is not
           shipped, and its own adaptation lives in design/kit/_page.css by decision */
        if (el.closest('#sidebar')) continue;
        /* AND NOT A ROW OF CONTROLS WEARING A PARAGRAPH. `.wrapline` is a place, a
           flex row of actions under a sentence, and its only text is the label inside
           a button. A measure is a property of a run of text somebody reads across,
           so an element whose text lives entirely inside a control is not one: it
           measured 86 characters at 640 and there is no line there to be long. */
        if (el.querySelector('a, button, .btn') &&
            ![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) continue;
        if (el.matches('.z1, .z2, .qfoot, .readout, .stamp, .fleet-more, .annun, .rail, .rail-foot')) continue;
        /* THE MEASURE IS THE LONGEST LINE THE BROWSER LAID OUT, NOT THE WIDTH OF THE BOX,
           and the difference is the whole reason this reading was wrong three times.
           A box is a container the moment anything inside it carries its own cap: the
           record plate at 148ch, the row of controls at 86, the closing note on the 404
           at 89, and in every one of them the line somebody reads across was inside the
           declared limit. A Range over the element's contents returns one rect per LINE
           BOX, which is exactly the run of text a measure is a property of, so the widest
           of them is the measure and no skip list is needed to say so. Stage 13. */
        const fs2 = parseFloat(getComputedStyle(el).fontSize);
        const r = document.createRange();
        r.selectNodeContents(el);
        const rects = [...r.getClientRects()];
        if (!rects.length) continue;
        const widest = Math.max(...rects.map(x => x.width));
        const ch = widest / (fs2 * 0.5);
        if (ch > measure) { measure = ch; measureOn = (el.className || el.tagName).toString().slice(0, 24); }
      }
      /* anything sticking out of the page box */
      let past = null;
      const lim = doc.clientWidth + 1;
      for (const el of document.querySelectorAll('.screen *, .k-main *')) {
        if (!vis(el)) continue;
        const b = el.getBoundingClientRect();
        if (b.right > lim && getComputedStyle(el).position !== 'fixed') {
          past = el.tagName + '.' + (el.className || '').toString().slice(0, 30) + ' right ' + Math.round(b.right);
          break;
        }
      }
      return {
        cw: doc.clientWidth, sw: doc.scrollWidth,
        overflow: doc.scrollWidth > doc.clientWidth,
        carriers, hasShell, measure: Math.round(measure), measureOn, past,
      };
    });
    readings++;
    if (r.cw !== w) mismatched.push(`${f} asked ${w} got ${r.cw}`);
    if (r.overflow) findings.push({ f, w: r.cw, kind: 'overflow', what: `scrollWidth ${r.sw} > ${r.cw}` });
    if (r.past) findings.push({ f, w: r.cw, kind: 'past the box', what: r.past });
    if (r.hasShell && r.carriers !== 1) findings.push({ f, w: r.cw, kind: 'navigation carriers', what: `${r.carriers} visible at once, and this screen has a shell` });
    if (!r.hasShell && r.carriers) findings.push({ f, w: r.cw, kind: 'navigation carriers', what: `${r.carriers} on a screen with no shell` });
    if (r.measure > MEASURE_MAX) findings.push({ f, w: r.cw, kind: 'measure', what: `${r.measure}ch on .${r.measureOn}` });
  }
  await ctx.close();
}
await b.close();

console.log(`\nWIDTH SWEEP :: ${PAGES.length} pages over ${WIDTHS.length} widths, ${readings} readings`);
console.log(`  from ${WIDTHS[0]} to ${WIDTHS[WIDTHS.length - 1]}, in tens within 80 of the point at ${bp}\n`);
if (mismatched.length) {
  console.log(`  MEASUREMENT ERROR, not a result: ${mismatched.length} readings taken at a width other than the one asked for`);
  mismatched.slice(0, 5).forEach(m => console.log('    ' + m));
}
const below = findings.filter(x => x.w < FLOOR);
const real  = findings.filter(x => x.w >= FLOOR);
const byKind = {};
for (const x of real) byKind[x.kind] = (byKind[x.kind] || 0) + 1;
console.log('  findings at or above the declared minimum of ' + FLOOR + ': ' +
  (real.length || 'none') + (real.length ? '  ' + JSON.stringify(byKind) : ''));
if (below.length) {
  const k2 = {}; for (const x of below) k2[x.kind] = (k2[x.kind] || 0) + 1;
  console.log('  below it, reported and not counted: ' + below.length + '  ' + JSON.stringify(k2));
  const s2 = new Set(below.map(x => x.f));
  console.log('    on ' + s2.size + ' screens, at ' + [...new Set(below.map(x => x.w))].join(', '));
}

/* THE HARVEST OF THIS INSTRUMENT IS THE LIST OF CHASM WIDTHS: widths that are not the
   point and at which something is nonetheless wrong. A finding at the point is a bug in
   the point; a finding between points is the thing three screenshots cannot see. */
const chasms = [...new Set(real.filter(x => Math.abs(x.w - bp) > 12).map(x => x.w))].sort((a, b) => a - b);
if (chasms.length) console.log('\n  CHASM WIDTHS (not the point, and something is wrong): ' + chasms.join(', '));
/* TWO LINES PER PAGE AND PER KIND, AND THE REST IS COUNTED OUT LOUD. A cap that does
   not say it capped reads as coverage: 45 readings of one defect printed as two lines,
   and the run looked like a page with a couple of loose widths rather than one element
   wrong at every width above 480. Stage 13. */
const shown = {};
let hidden = 0;
for (const x of real) {
  const k = x.kind + '|' + x.f;
  if ((shown[k] = (shown[k] || 0) + 1) > 2) { hidden++; continue; }
  console.log(`  ${String(x.w).padStart(5)}  ${x.kind.padEnd(20)} ${x.f.padEnd(30)} ${x.what}`);
}
if (hidden) console.log(`\n  ${hidden} further reading(s) NOT LISTED: two per page and per kind are printed, and the rest of a repeat is the same finding at another width. Distinct page and kind pairs above: ${Object.keys(shown).length}.`);
if (!real.length) console.log('\n  Nothing breaks at any width from ' + FLOOR + ' to 2560.\n');
process.exitCode = real.length ? 1 : 0;
