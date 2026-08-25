/* design/kit/checks/coverage-map.mjs :: the map against the disk, and both ways round
   ============================================================================
   The coverage map on design/overview.html is a DECLARED LIST, which means the
   idle control applies to it in both directions: a row can be green over a page
   that does not open, and a page can exist that no row mentions. Reading the table
   catches neither, because the table is the thing being checked.

     node design/kit/checks/coverage-map.mjs

   IT WALKS design/_nav.js AND design/, and reports three numbers: records, pages
   that opened, and pages with their own states. A record marked `colour:true` whose
   file is not on disk is the worst of the failures, because that is the map saying
   a thing is done. A file on disk that no record mentions is the same failure with
   the sign reversed: it is in the product and it is in nobody's count.

   IT ALSO OPENS THEM, rather than testing for a file. A half assembled page is a
   file too. Every page is loaded in a browser at the declared minimum width, and a
   page that throws, 404s a stylesheet, or renders no h1 is not covered whatever the
   registry says about it.

   AND IT DOES NOT REQUIRE THE MAP TO BE ALL GREEN. What the stage promises is that
   nothing was lost, not that everything was done: a screen deliberately left out of
   scope stays on the map as its own state with a reason and is counted. A green row
   over an unfinished screen and a vanished row for something we chose not to build
   are the same lie told two ways.
   ============================================================================ */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const src = fs.readFileSync('design/_nav.js', 'utf8');
/* the DECLARATION, not the first mention of the name: this file's own header talks
   about `window.DESIGN_NAV` three lines before it assigns it, and slicing from the
   first occurrence hands a paragraph of prose to the parser. */
const body = src.slice(src.indexOf('window.DESIGN_NAV = {'), src.indexOf('/* ------'));
const NAV = Function('window', body + '; return window.DESIGN_NAV')({});

const dir = path.resolve('design') + '/';
const onDisk = new Set(fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'overview.html'));

const records = [];
for (const s of NAV.screens)
  for (const st of s.states)
    records.push({ file: s.screen + (st.slug ? '-' + st.slug : '') + '.html',
                   screen: s.screen, node: s.node, scope: s.scope, colour: !!st.colour, label: st.label });

const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
const errs = [];
p.on('pageerror', e => errs.push(String(e).slice(0, 80)));
p.on('response', r => { if (r.status() >= 400) errs.push(r.status() + ' ' + r.url().split('/').pop()); });

const claimedMissing = [], opened = [], broken = [], notClaimed = [];
for (const r of records) {
  if (!r.colour) continue;
  if (!onDisk.has(r.file)) { claimedMissing.push(r); continue; }
  errs.length = 0;
  await p.goto('file://' + dir + r.file);
  await p.waitForLoadState('networkidle');
  const ok = await p.evaluate(() => ({
    h1: document.querySelectorAll('h1').length,
    css: !!getComputedStyle(document.body).backgroundColor,
    panel: !!document.querySelector('#sidebar')?.children.length,
  }));
  if (errs.length || ok.h1 !== 1 || !ok.panel) broken.push({ ...r, why: errs.slice(0, 2).join(' ') || `h1=${ok.h1} panel=${ok.panel}` });
  else opened.push(r);
}
await b.close();

const claimed = new Set(records.map(r => r.file));
for (const f of onDisk) if (!claimed.has(f)) notClaimed.push(f);

const declaredNot = records.filter(r => !r.colour);
const later = NAV.screens.filter(s => s.scope === 'LATER');

console.log('\nCOVERAGE MAP :: design/_nav.js against design/\n');
console.log('  records in the registry        : ' + records.length);
console.log('  of them declared in colour     : ' + records.filter(r => r.colour).length);
console.log('  opened, one h1, panel rendered : ' + opened.length);
console.log('  declared NOT in colour, counted: ' + declaredNot.length +
  (declaredNot.length ? '  (' + declaredNot.map(r => r.file).join(' ') + ')' : ''));
console.log('  LATER screens, no grey original: ' + later.length + '  (' + later.map(s => s.node).join(' ') + ')');
console.log('');
console.log('  GREEN OVER NOTHING             : ' + claimedMissing.length);
claimedMissing.forEach(r => console.log('    ' + r.file + '  <- the map says done and the file is not there'));
console.log('  OPENS BADLY                    : ' + broken.length);
broken.forEach(r => console.log('    ' + r.file + '  ' + r.why));
console.log('  ON DISK AND IN NOBODY\'S COUNT  : ' + notClaimed.length);
notClaimed.forEach(f => console.log('    ' + f));

const bad = claimedMissing.length + broken.length + notClaimed.length;
console.log(bad ? '' : '\n  The map and the disk agree, in both directions.\n');
process.exitCode = bad ? 1 : 0;
