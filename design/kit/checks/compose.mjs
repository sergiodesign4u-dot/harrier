/* design/kit/checks/compose.mjs :: the composition counter of stage 09
   ============================================================================
   A pattern is a composition that already stands on three or more screens, and
   the count is taken on the GREY corpus, because grey is where the whole product
   is. Colour holds 52 of 62 pages, so three occurrences there would be a
   statement about the sample wearing the name of a rule.

     node design/kit/checks/compose.mjs            the table
     node design/kit/checks/compose.mjs --raw      every signature, no threshold

   IT READS THE DOM, NOT THE FILE. Two of the corpus's biggest compositions live
   in no html file at all: the whole global navigation is written by _nav.js at
   load, and so is every panel. A grep over the markup would report them absent.

   THE SIGNATURE IS host{child child child}. The first class token of the host,
   then the first class token of each direct child that carries one, with runs of
   the same child collapsed: a queue of eighteen rows and a queue of three are the
   same composition. What the signature deliberately does NOT carry is depth, so
   a composition is counted where it is composed rather than where it is nested.

   The same pass yields the prohibitions, and it is the same counter read
   backwards: for every component, the maximum number of instances found on any
   one screen. A component whose maximum is one across all 62 pages is a
   candidate for a rule, never the rule itself: the counter cannot tell a
   deliberate constraint from a component that has not yet had a second reason.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const wf = path.resolve('wireframes') + '/';
/* THE HUB IS NOT A SCREEN. wireframes/overview.html is the contents page of the
   grey corpus, and counting it made every total one too high and put the panel's
   own furniture into the composition table. The product is 62 pages. */
const PAGES = fs.readdirSync(wf).filter(f => f.endsWith('.html') && f !== 'overview.html').sort();
const raw = process.argv.includes('--raw');

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 1200 } });
const p = await ctx.newPage();
const errs = [];
p.on('pageerror', e => errs.push(e.message));

/* signature -> Set of pages ; signature -> total instances */
const sigPages = new Map(), sigCount = new Map();
/* component class -> page -> instances on that page */
const compMax = new Map(), compPages = new Map(), compTotal = new Map();

for (const f of PAGES) {
  await p.goto('file://' + wf + f);
  await p.waitForTimeout(60);
  const data = await p.evaluate(() => {
    const first = el => {
      const c = (el.getAttribute('class') || '').trim().split(/\s+/)[0] || '';
      return c;
    };
    const sigs = [], comps = {};
    document.querySelectorAll('*').forEach(el => {
      const c = first(el);
      if (c) comps[c] = (comps[c] || 0) + 1;
      const kids = [];
      for (const k of el.children) {
        const kc = first(k);
        if (kc && kids[kids.length - 1] !== kc) kids.push(kc);
      }
      if (kids.length >= 2) sigs.push((c || el.tagName.toLowerCase()) + '{' + kids.join(' ') + '}');
    });
    return { sigs, comps };
  });
  for (const s of data.sigs) {
    if (!sigPages.has(s)) sigPages.set(s, new Set());
    sigPages.get(s).add(f);
    sigCount.set(s, (sigCount.get(s) || 0) + 1);
  }
  for (const [c, n] of Object.entries(data.comps)) {
    compMax.set(c, Math.max(compMax.get(c) || 0, n));
    compTotal.set(c, (compTotal.get(c) || 0) + n);
    if (!compPages.has(c)) compPages.set(c, new Set());
    compPages.get(c).add(f);
  }
}
await b.close();

const rows = [...sigPages.entries()]
  .map(([s, set]) => ({ sig: s, screens: set.size, total: sigCount.get(s), where: [...set].sort() }))
  .sort((a, b) => b.screens - a.screens || b.total - a.total);

console.log(`\nCOMPOSITIONS over ${PAGES.length} grey pages :: ${rows.length} distinct signatures\n`);
const show = raw ? rows : rows.filter(r => r.screens >= 2);
console.log('screens  total  signature');
for (const r of show) {
  console.log(String(r.screens).padStart(7) + String(r.total).padStart(7) + '  ' + r.sig);
}

console.log(`\n\nCOMPONENT MAXIMUM PER SCREEN :: candidates for a composition rule are max = 1\n`);
const comps = [...compMax.entries()].sort((a, b) => a[1] - b[1] || b[0].localeCompare(a[0]));
console.log('max  screens  total  class');
for (const [c, m] of comps) {
  console.log(String(m).padStart(3) + String(compPages.get(c).size).padStart(9) + String(compTotal.get(c)).padStart(7) + '  ' + c);
}
if (errs.length) console.log('\nPAGE ERRORS:', errs.length, errs.slice(0, 5));
