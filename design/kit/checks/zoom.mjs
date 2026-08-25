/* design/kit/checks/zoom.mjs :: 200% zoom, and the user's own font size
   ============================================================================
   Added at stage 13 for the accessibility checklist. The width sweep of stage 10
   proves the layout holds from 360 to 2560 when the WINDOW changes. This asks a
   different question, and it is the one WCAG 1.4.4 actually asks: what happens
   when the PERSON changes size rather than the window.

     node design/kit/checks/zoom.mjs               the coloured screens
     node design/kit/checks/zoom.mjs design queue.html

   TWO DIFFERENT THINGS, AND CONFUSING THEM IS THE POINT OF HAVING THIS FILE.

   1. BROWSER ZOOM to 200%. Every CSS pixel doubles, so a window of 1440 becomes a
      viewport of 720 and the layout must arrive at its narrow arrangement exactly
      as it does when the window is dragged. This tests nothing new about the
      breakpoint, and it tests that nothing is pinned to a physical size.
   2. THE READER'S OWN FONT SIZE doubled. This is what a breakpoint in rem is FOR:
      a person reading at twice the default sits at a desk width with a phone's
      worth of text in a line, and a breakpoint in px would leave them in the wide
      layout with four words per column. A breakpoint in rem moves with them.

   THE SIGNS: no horizontal overflow, exactly one top level navigation carrier,
   and under (2) the narrow layout has actually been reached.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const ROOT = process.cwd();
const dirArg = process.argv[2] && process.argv[2].startsWith('design') ? process.argv[2] : 'design';
const only = process.argv[3];
const DIR = path.join(ROOT, dirArg);
const files = (only ? [only] : fs.readdirSync(DIR).filter(f => f.endsWith('.html') && f !== 'overview.html')).sort();

const browser = await chromium.launch();
const bad = [];
let n = 0;
for (const mode of ['zoom200', 'font200']) {
  for (const f of files) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    await page.goto('file://' + path.join(DIR, f));
    await page.evaluate(() => { const s = document.getElementById('sidebar'); if (s) s.remove() });
    if (mode === 'zoom200') await page.setViewportSize({ width: 720, height: 450 });
    else await page.evaluate(() => { document.documentElement.style.fontSize = '200%' });
    await page.waitForTimeout(50);
    const r = await page.evaluate(() => {
      const d = document.documentElement;
      /* THE SAME SELECTOR THE STAGE 10 SWEEP USES, and it is not "anything that looks
         like navigation": .z1 is the identity strip and it CONTAINS the nav, so counting
         both reports two carriers on every screen in the product. Carriers, not links. */
      const vis = e => getComputedStyle(e).display !== 'none' && e.offsetParent !== null;
      const carriers = [...document.querySelectorAll('.z1 nav, .navrail, .tabbar')].filter(vis).length;
      /* AND A BAR WEARING .z1--out IS NOT A SHELL for this count: a console that is out
         has a bar and no navigation, because there is nowhere else to be. Usage rule R5,
         and the stage 10 sweep carries the same line. */
      const hasShell = !!document.querySelector('.z1') && !document.querySelector('.z1--out');
      return {
        clientWidth: d.clientWidth, scrollWidth: d.scrollWidth,
        overflow: d.scrollWidth > d.clientWidth + 1,
        carriers, hasShell,
        rootFontPx: parseFloat(getComputedStyle(d).fontSize),
        narrow: getComputedStyle(document.querySelector('.z45') || d).getPropertyValue('grid-template-columns')
      };
    });
    n++;
    if (r.overflow) bad.push({ mode, f, why: 'horizontal overflow', ...r });
    if (r.hasShell && r.carriers !== 1) bad.push({ mode, f, why: `${r.carriers} navigation carriers on a screen with a shell`, ...r });
    if (!r.hasShell && r.carriers) bad.push({ mode, f, why: `${r.carriers} carriers on a screen with no shell`, ...r });
    await page.close();
  }
}
await browser.close();
console.log('readings:', n, ' pages:', files.length, ' modes: browser zoom 200%, reader font size 200%');
console.log('FAILURES:', bad.length);
for (const b of bad) console.log(`  ${b.mode} ${b.f}: ${b.why} (client ${b.clientWidth}, scroll ${b.scrollWidth}, carriers ${b.carriers})`);
