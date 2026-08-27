/* design/kit/checks/route.mjs :: does the handoff actually lead anywhere
   ============================================================================
   Added at stage 13. A dead route is the pattern this stage exists to close, and
   it is not findable by reading: a link to a file that moved at stage 08 looks
   exactly like a link to a file that did not.

     node design/kit/checks/route.mjs

   FOUR SIGNS, and each one is a defect this project has already paid for.
   1. EVERY LINK RESOLVES. Every href in README.md and in handoff/handoff.html,
      followed to a file on disk or to an external host, with nothing missing.
   2. TWO CLICKS. From the root index.html to any artefact of the handoff, and no
      more. An artefact three clicks deep and behind knowledge of the layout is an
      artefact nobody opens.
   3. NO MARKDOWN SURVIVING THE RENDER. The sign is `](` in the built html: a link
      written in markdown inside an html file renders as its own source code.
   4. A MEASURED 360. Not an intended one. The instrument prints clientWidth and it
      has to read 360, because a scrollbar turns an intended 360 into an actual 345.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const ROOT = process.cwd();
const bad = [];

/* ---- 1. every link resolves ---------------------------------------------- */
/* CODE IS NOT A LINK, and this cost a false failure on 2026-08-27. The row in
   onboarding-gaps.md that RECORDS the `](` finding writes those two characters inside
   backticks, which is exactly how design/kit/checks.html was cleared of the same thing:
   inside a code element they are the name of the check rather than a link. The regex
   below could not tell the difference and reported a dead link whose href was half a
   table row. Fenced blocks and inline spans come out of a markdown file before either
   pattern is run over it; an html file is left alone, because `](` in rendered html is
   sign 3 of this check and is measured separately on the page itself. */
function links(file) {
  let src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  if (file.endsWith('.md')) src = src.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  const out = [];
  for (const m of src.matchAll(/href="([^"]+)"/g)) out.push(m[1]);
  for (const m of src.matchAll(/\]\(([^)]+)\)/g)) out.push(m[1]);          // markdown
  return out;
}
const surfaces = ['README.md', 'handoff/handoff.html', 'handoff/docs/behaviour.md',
                  'handoff/docs/map.md', 'handoff/docs/a11y.md', 'handoff/docs/onboarding-gaps.md'];
let checked = 0, external = 0;
for (const s of surfaces) {
  if (!fs.existsSync(path.join(ROOT, s))) { bad.push({ kind: 'surface missing', s }); continue }
  for (const href of links(s)) {
    if (href.startsWith('#')) continue;
    if (/^https?:/.test(href)) { external++; continue }
    checked++;
    const target = path.resolve(path.dirname(path.join(ROOT, s)), href.split('#')[0]);
    if (!fs.existsSync(target)) bad.push({ kind: 'dead link', s, href });
  }
}

/* ---- 2. two clicks from the root ----------------------------------------- */
const ARTEFACTS = ['handoff/handoff.html', 'handoff/docs/behaviour.md', 'handoff/docs/map.md',
                   'handoff/docs/a11y.md', 'handoff/docs/one-shot.md', 'handoff/docs/onboarding-gaps.md'];
const depth = {};
for (const s of ['index.html', 'README.md']) depth[s] = 0;
/* the roadmap of the root index is rendered from /_nav.js, so a page registered there
   is one click from the root even though index.html contains no href to it. This has to
   be seeded BEFORE the walk rather than after it, or everything the roadmap reaches
   comes back unreachable. */
const navsrc = fs.readFileSync(path.join(ROOT, '_nav.js'), 'utf8');
for (const m of navsrc.matchAll(/page:\s*'([^']+)'/g)) if (depth[m[1]] === undefined) depth[m[1]] = 1;
for (let round = 0; round < 3; round++) {
  for (const [f, d] of Object.entries({ ...depth })) {
    if (d !== round) continue;
    if (!fs.existsSync(path.join(ROOT, f))) continue;
    if (!/\.(html|md|js)$/.test(f)) continue;
    for (const href of links(f)) {
      if (/^https?:|^#/.test(href)) continue;
      const rel = path.relative(ROOT, path.resolve(path.dirname(path.join(ROOT, f)), href.split('#')[0]));
      if (depth[rel] === undefined) depth[rel] = d + 1;
    }
  }
}
for (const a of ARTEFACTS) {
  if (!fs.existsSync(path.join(ROOT, a))) { bad.push({ kind: 'artefact missing', a }); continue }
  if (depth[a] === undefined || depth[a] > 2) bad.push({ kind: 'more than two clicks', a, d: depth[a] ?? 'unreachable' });
}

/* ---- 3 and 4. the rendered page ------------------------------------------ */
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 360, height: 780 } });
await page.goto('file://' + path.join(ROOT, 'handoff/handoff.html'));
await page.waitForTimeout(120);
const r = await page.evaluate(() => ({
  clientWidth: document.documentElement.clientWidth,
  scrollWidth: document.documentElement.scrollWidth,
  markdown: (document.body.innerText.match(/\]\(/g) || []).length,
  h1: document.querySelectorAll('h1').length,
  sections: document.querySelectorAll('section[id]').length,
  navItems: document.querySelectorAll('#sidebar a').length
}));
if (r.clientWidth !== 360) bad.push({ kind: 'viewport not measured at 360', got: r.clientWidth });
if (r.scrollWidth > r.clientWidth + 1) bad.push({ kind: 'horizontal overflow at 360', ...r });
if (r.markdown) bad.push({ kind: 'markdown survived the render', n: r.markdown });
if (r.h1 !== 1) bad.push({ kind: 'not exactly one h1', n: r.h1 });
await browser.close();

console.log('surfaces read:', surfaces.length, ' internal links resolved:', checked, ' external:', external);
console.log('handoff page at a measured', r.clientWidth + ':', r.h1, 'h1,', r.sections, 'sections,', r.navItems, 'links in the panel, scrollWidth', r.scrollWidth);
console.log('clicks from the root:', ARTEFACTS.map(a => a.replace('handoff/', '') + '=' + (depth[a] ?? 'x')).join(' '));
console.log('\nFAILURES:', bad.length);
for (const b of bad) console.log('  ' + JSON.stringify(b));
