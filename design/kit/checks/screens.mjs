/* design/kit/checks/screens.mjs :: is a screen file only markup?
   ============================================================================
   The stage 12 instrument, and the one the whole fan out stands on. The rollout
   builds ten pages with subagents, and the single failure mode that would survive
   every other check in this folder is an agent writing appearance into the file it
   was told to write. Twenty screens each carrying their own media query look right
   in a browser, pass contrast, pass the usage rules, and are twenty products.

     node design/kit/checks/screens.mjs              design/, every page
     node design/kit/checks/screens.mjs wireframes/  the grey corpus, for comparison
     node design/kit/checks/screens.mjs design/ log.html

   TEN SIGNS, NINE OF THEM DECLARED IN THE CONTRACT. `@media`, `transition`,
   `animation`, `@keyframes`, a `<style>` tag, a `style` attribute, a hex, a `px`,
   a font family named outside a token, and a class that is declared nowhere in
   design/system/. The tenth, the unknown class, is the one that catches the agent
   who drew rather than stopped, and it is the reason this file parses the
   stylesheets instead of grepping for a word list.

   ONE EXCEPTION, NAMED IN ADVANCE, and without it the instrument is useless from
   its first run. Icons are inline SVG by the stage 07 decision, so they arrive
   carrying `fill`, `stroke`, `width`, `height` and `viewBox` with their own
   numbers and their own hex. Everything INSIDE an `<svg>` element is exempt; a hex
   outside one is a defect. An instrument that reports a legitimate non-zero on
   every page teaches everybody to ignore it.

   AND THE NAVIGATION LAYER IS NOT THE PRODUCT'S APPEARANCE. Every page of this
   stage carries the documentation panel: `_nav.css`, the `_nav.js` registry and
   the `DESIGN_NAV_BASE` global. That is the case study looking at the product, not
   the product, so `_nav.css` is not counted as a second stylesheet and the
   registry's own script tags are not counted as content. What IS counted: the
   screen may link `system/index.css` and `../_nav.css` and nothing else.

   IT READS THE FILE, DELIBERATELY, and that is the whole difference from the rest
   of this folder. Every other instrument here asks the browser what it resolved,
   because the browser is the only witness to what renders. This one asks what is
   WRITTEN, because the defect it looks for is a line of authorship: a rule that
   never fires is still a rule somebody wrote in the wrong file, and it will fire
   the day somebody changes a class name.
   ============================================================================ */

import fs from 'fs';
import path from 'path';

const dirArg = process.argv[2] || 'design/';
const only = process.argv[3];
const dir = path.resolve(dirArg) + '/';
const PAGES = only ? [only] : fs.readdirSync(dir)
  .filter(f => f.endsWith('.html') && f !== 'overview.html').sort();

/* every class the system declares, from the system itself. A hand kept list is a
   list that goes stale the first time a component is added, which at this stage is
   the same afternoon. */
const sysDir = 'design/system/';
const cssFiles = [];
(function walk(d){ for (const e of fs.readdirSync(d, {withFileTypes:true})) {
  const p = path.join(d, e.name);
  if (e.isDirectory()) walk(p); else if (e.name.endsWith('.css')) cssFiles.push(p);
} })(sysDir);
const css = cssFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');
/* strip comments first: this project's stylesheets carry more prose than rules, and
   a class name QUOTED in a comment would otherwise declare itself. */
const cssLive = css.replace(/\/\*[\s\S]*?\*\//g, '');
const declared = new Set([...cssLive.matchAll(/\.(-?[A-Za-z_][\w-]*)/g)].map(m => m[1]));

/* the panel's own classes, which belong to /_nav.css and to the case study */
const PANEL = /^(nav-|dnav-|k-)/;
const PANEL_EXACT = new Set(['sidebar']);

/* DECLARED EXEMPTIONS, each naming the file that carries the reason. Written here
   rather than skipped, so a thing that stops being exempt returns as a new line
   instead of staying quiet. Every one of these was found by the first run of this
   instrument, which is the only defence a declared list has against being a
   convenience. */
const EXEMPT_CLASS = new Map([
  ['queue-list', 'the pattern NAME on the host, and the only one of the four whose base declares nothing: every rule it owns is conditioned on the --log filling, and what the base would have declared already lives in z4.css. Kept because the markup reads base plus variant everywhere else, and because compose.mjs counts the composition by this name. Reason in patterns/queue-list.css'],
  ['rows--log', 'a name doing no work since stage 08, when the log widths moved from the container to the row. rows.css says so and sends it to list three of the reconciliation: it is a hook a rollout may want, and this stage is the rollout'],
  ['claim--against', 'the evidence that points the other way, worn on 41 pages and drawn by nothing since stage 04. claim.css carries the reason, and stage 12 ruled it stays undrawn: the tag inside it says `points the other way` in words, and attribute A2 spends its saturation on two closed sets'],
]);
/* and the two attributes that stage 08 wrote down and did not remove */
const EXEMPT_STYLE = new Map([
  ['queue-streaming.html', 'padding on an `empty`, with a compatibility token in tokens.css section 2g that names step 6 of stage 08 as its remover'],
  ['queue-empty.html',     'margin-top on a `btn`, the same pair. Both are one instance values, and a variant on one instance breaks the rule that one use is not a role'],
]);

const rows = [];
const exemptions = new Set();
let pagesRead = 0;

for (const f of PAGES) {
  const raw = fs.readFileSync(dir + f, 'utf8');
  pagesRead++;
  /* everything inside an <svg> is exempt, by the one named exception */
  const src = raw.replace(/<svg[\s\S]*?<\/svg>/g, '<svg></svg>');
  /* and the script blocks: the shell call and the registry are the navigation
     layer, and a fixture string inside them is data rather than appearance */
  const markup = src.replace(/<script[\s\S]*?<\/script>/g, '<script></script>');

  const hit = (name, re, where) => {
    const m = (where || markup).match(re);
    if (m) rows.push({ f, name, n: m.length, eg: m[0].slice(0, 60) });
  };

  hit('@media',            /@media/g);
  hit('transition',        /\btransition\s*:/g);
  hit('animation',         /\banimation\s*:/g);
  hit('@keyframes',        /@keyframes/g);
  hit('<style> tag',       /<style[\s>]/g);
  if (!EXEMPT_STYLE.has(f)) hit('style attribute', /\sstyle\s*=/g);
  else exemptions.add('style attribute on ' + f + ': ' + EXEMPT_STYLE.get(f));
  /* NOT a numeric character reference. `&#9662;` is the down pointing triangle on
     every filter chip in the product, and the first run of this file reported it as
     a hex on twenty three pages: a legitimate non-zero on every page is how an
     instrument teaches people to ignore it. */
  hit('a hex',             /(?<!&)#[0-9a-fA-F]{3,8}\b/g);
  hit('a px value',        /\b\d+(\.\d+)?px\b/g);
  hit('a font family',     /font-family|Archivo|IBM Plex|system-ui|sans-serif/g);

  /* a second stylesheet is the quietest of the ten: it passes every word search */
  const links = [...markup.matchAll(/<link[^>]+href="([^"]+)"/g)].map(m => m[1]);
  const stray = links.filter(h => h !== 'system/index.css' && h !== '../_nav.css');
  if (stray.length) rows.push({ f, name: 'a stylesheet that is not the system', n: stray.length, eg: stray.join(' ') });

  /* and the class nobody declared */
  const used = new Set();
  for (const m of markup.matchAll(/class="([^"]*)"/g))
    for (const c of m[1].split(/\s+/)) if (c) used.add(c);
  let unknown = [...used].filter(c => !declared.has(c) && !PANEL.test(c) && !PANEL_EXACT.has(c));
  for (const c of unknown) if (EXEMPT_CLASS.has(c)) exemptions.add('.' + c + ': ' + EXEMPT_CLASS.get(c));
  unknown = unknown.filter(c => !EXEMPT_CLASS.has(c));
  if (unknown.length) rows.push({ f, name: 'a class the system does not declare', n: unknown.length, eg: unknown.join(' ') });
}

console.log(`\nSCREEN FILES :: ${pagesRead} pages in ${dirArg}, read as written\n`);
const byKind = new Map();
for (const r of rows) byKind.set(r.name, (byKind.get(r.name) || 0) + r.n);
const KINDS = ['@media','transition','animation','@keyframes','<style> tag','style attribute',
               'a hex','a px value','a font family','a stylesheet that is not the system',
               'a class the system does not declare'];
for (const k of KINDS) console.log('  ' + (byKind.get(k) || 0 ? '  ' : '  ') + String(byKind.get(k) || 0).padStart(4) + '  ' + k);

if (exemptions.size) {
  console.log('\n  EXEMPT, WITH THE REASON DECLARED: ' + exemptions.size);
  for (const e of [...exemptions].sort()) console.log('    ' + e);
}

if (rows.length) {
  console.log('');
  for (const r of rows) console.log(`  ${r.f.padEnd(30)} ${r.name.padEnd(38)} ${r.eg}`);
  console.log('');
} else {
  console.log('\n  Nothing but markup. Every pixel on these pages comes from system/index.css.\n');
}
process.exitCode = rows.length ? 1 : 0;
