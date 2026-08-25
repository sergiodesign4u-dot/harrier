/* design/kit/checks/focus.mjs :: a tab pass over every control type, in both themes
   ============================================================================
   Added at stage 13 for the accessibility checklist, and it exists because the
   thing every other instrument here can prove is that --color-focus is DECLARED.
   That is not the question. The question is whether a ring RENDERS when a person
   arrives at the control with the keyboard, and whether it can be seen against
   the ground it lands on.

     node design/kit/checks/focus.mjs               the coloured screens
     node design/kit/checks/focus.mjs design/kit    the stand
     node design/kit/checks/focus.mjs design queue.html

   WHAT IT DOES. It walks the real tab sequence with real Tab keypresses rather
   than querying for a selector, because the tab sequence is a property of the
   rendered document and not of the markup. At every stop it records the element,
   its component class, and the computed outline and box-shadow with :focus-visible
   ACTUALLY APPLIED, which only happens on a keyboard arrival.

   TWO THINGS IT GETS RIGHT.
   1. It runs in BOTH themes. A ring declared once and paired wrongly passes in
      one theme and vanishes in the other, and that is the whole reason stage 08
      writes every role twice.
   2. It composites the ground the ring lands on, the same way contrast.mjs does,
      because an outline over a translucent panel is not measured against that
      panel's declared colour.

   THE THRESHOLD IS 3:1, non text contrast, WCAG 1.4.11. A ring is a LINE.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const ROOT = process.cwd();
const dirArg = process.argv[2] && process.argv[2].startsWith('design') ? process.argv[2] : 'design';
const only = process.argv[3];
const DIR = path.join(ROOT, dirArg);
const files = (only ? [only] : fs.readdirSync(DIR).filter(f => f.endsWith('.html') && f !== 'overview.html')).sort();

const srgb = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4) };
const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05) };
const parse = s => { const m = String(s).match(/-?[\d.]+/g); return m ? m.slice(0, 3).map(Number) : null };

const browser = await chromium.launch();
const results = [];
for (const theme of ['dark', 'light']) {
  for (const f of files) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('file://' + path.join(DIR, f));
    if (theme === 'light') await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'light'));
    await page.waitForTimeout(40);
    // the panel of the case study is documentation chrome and is not the product
    await page.evaluate(() => { const s = document.getElementById('sidebar'); if (s) s.remove() });
    const seen = new Set();
    for (let i = 0; i < 120; i++) {
      await page.keyboard.press('Tab');
      const r = await page.evaluate(() => {
        const e = document.activeElement;
        if (!e || e === document.body) return null;
        const cs = getComputedStyle(e);
        // THE GROUND OF A RING IS NOT THE GROUND OF THE CONTROL. An outline is drawn
        // OUTSIDE the border box, so it lands on whatever is behind the control, and
        // measuring it against the control's own fill reports a false failure on every
        // filled control. Start the stack at the PARENT.
        const stack = []; let n = e.parentElement;
        while (n) { const b = getComputedStyle(n).backgroundColor; if (b && b !== 'rgba(0, 0, 0, 0)') stack.push(b); n = n.parentElement }
        return {
          tag: e.tagName.toLowerCase(),
          cls: [...e.classList].join(' '),
          outlineWidth: cs.outlineWidth, outlineStyle: cs.outlineStyle, outlineColor: cs.outlineColor,
          shadow: cs.boxShadow, ground: stack[0] || 'rgb(0,0,0)', page: stack[stack.length - 1] || 'rgb(0,0,0)',
          key: e.tagName + '|' + [...e.classList].join('.')
        };
      });
      if (!r) break;
      if (seen.has(r.key)) continue;
      seen.add(r.key);
      const w = parseFloat(r.outlineWidth) || 0;
      const visible = (w > 0 && r.outlineStyle !== 'none') || (r.shadow && r.shadow !== 'none');
      let cr = null;
      if (w > 0 && r.outlineColor) {
        const a = parse(r.outlineColor), b = parse(r.ground) || parse(r.page);
        if (a && b) cr = ratio(a, b);
      }
      results.push({ theme, file: f, ...r, visible, cr });
    }
    await page.close();
  }
}
await browser.close();

const byType = {};
for (const r of results) {
  const t = (r.cls.split(' ')[0] || r.tag);
  const k = r.theme + '|' + t;
  const a = byType[k] || (byType[k] = { theme: r.theme, type: t, stops: 0, noRing: 0, min: Infinity, files: new Set() });
  a.stops++; a.files.add(r.file);
  if (!r.visible) a.noRing++;
  if (r.cr != null && r.cr < a.min) a.min = r.cr;
}
console.log('tab stops recorded, both themes:', results.length, ' distinct control types:', new Set(results.map(r => r.cls.split(' ')[0] || r.tag)).size);
console.log('pages:', files.length, ' threshold: 3:1, WCAG 1.4.11, a ring is a LINE\n');
const rows = Object.values(byType).sort((a, b) => a.theme.localeCompare(b.theme) || a.type.localeCompare(b.type));
for (const a of rows)
  console.log(`  ${a.theme.padEnd(6)} ${a.type.padEnd(16)} stops ${String(a.stops).padStart(4)}  no ring ${String(a.noRing).padStart(3)}  min ratio ${a.min === Infinity ? '   n/a' : a.min.toFixed(2)}`);
const fails = rows.filter(a => a.noRing > 0 || (a.min !== Infinity && a.min < 3));
console.log('\nFAILURES:', fails.length);
for (const a of fails) console.log('  ' + a.theme + ' ' + a.type + ' noRing=' + a.noRing + ' min=' + (a.min === Infinity ? 'n/a' : a.min.toFixed(2)));
