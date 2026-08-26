/* design/kit/checks/icons.mjs :: the icon set against the copy that cannot read it
   ============================================================================
   THE SET IS WRITTEN ONCE, IN design/system/icons.js, AND STILL EXISTS TWICE.
   A CSS mask cannot read JavaScript, so the three glyphs that are applied to the
   product are carried a second time as `-webkit-mask`/`mask` data URIs inside the
   files that use them. Two copies of one drawing is exactly the arrangement that
   drifts, and it drifts silently: nothing renders the two side by side, so the
   day one is corrected the other keeps the old geometry and no page looks wrong.

     node design/kit/checks/icons.mjs

   WHAT IT DOES. It decodes every mask data URI in the CSS it scans, parses the
   SVG back into the same primitives design/system/icons.js declares, and compares
   them CHARACTER FOR CHARACTER against the glyph they claim to be. A path is
   compared on its `d` string, a rect on its four numbers, a circle on its three,
   in order.

   IT DISCOVERS RATHER THAN ASSUMES. There is no table here of which mask ought to
   be which glyph: every mask found is matched against the whole set, and a mask
   that matches nothing is reported as an unregistered glyph rather than passing
   quietly. That is the case this check exists for, and a declared table would be
   blind to it.

   IT ALSO COMPARES THE STROKE, and this is the second copy's other half. The
   drawing is only half a glyph: the weight it is painted at is the other half,
   and the mask carries its own `stroke-width` attribute that nothing else in the
   project reads. The declared width of the set lives in icons.js; the stand and
   the product declare theirs in CSS. All three are printed together, because a
   glyph that is the right shape at the wrong weight is a different glyph.
   ============================================================================ */

import fs from 'fs';
import path from 'path';
import vm from 'vm';

/* ---- the source ----------------------------------------------------------- */

const SRC = 'design/system/icons.js';
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.resolve(SRC), 'utf8'), sandbox);
const ICONS = sandbox.window.HARRIER_ICONS;
const ORDER = sandbox.window.HARRIER_ICON_ORDER;
const GRID  = sandbox.window.HARRIER_ICON_GRID;

/* One canonical string per glyph. Both sides of every comparison are built by
   this function, so nothing is normalised on one side and not the other. */
const serialise = shapes => shapes.map(s => {
  if (s.d) return `path d="${s.d}"`;
  if (s.rect) return `rect x="${s.rect[0]}" y="${s.rect[1]}" width="${s.rect[2]}" height="${s.rect[3]}"`;
  if (s.circle) return `circle cx="${s.circle[0]}" cy="${s.circle[1]}" r="${s.circle[2]}"`;
  return `UNKNOWN ${JSON.stringify(s)}`;
}).join('\n');

const CANON = {};
Object.keys(ICONS).forEach(n => CANON[n] = serialise(ICONS[n].shapes));

/* ---- what is scanned ------------------------------------------------------ */

/* kit.css IS DELETED AT STEP 8 and its three masks moved into the component files that own
   the glyphs. Nothing outside design/system/ paints one now, which is the state this check
   was built to make reachable: one source, and every consumer of it in one folder. */
const CSS = [
  ...fs.readdirSync(path.resolve('design/system/components'))
       .filter(f => f.endsWith('.css'))
       .map(f => 'design/system/components/' + f)
];

/* Where the two consumers declare the weight they paint the set at. */
const DECLARED = [
  { file: 'design/kit/_page.css', sel: '.k-icon', what: 'the stand' }
];

/* ---- parse a decoded mask back into primitives ---------------------------- */

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
  return m ? m[1] : null;
};

function parseSvg(svg) {
  const root = svg.match(/<svg[^>]*>/)[0];
  const shapes = [];
  const re = /<(path|rect|circle|line|polyline|polygon|ellipse)\b[^>]*>/g;
  let m;
  while ((m = re.exec(svg))) {
    const [tag, kind] = [m[0], m[1]];
    if (kind === 'path') shapes.push({ d: attr(tag, 'd') });
    else if (kind === 'rect') shapes.push({ rect: [attr(tag,'x'), attr(tag,'y'), attr(tag,'width'), attr(tag,'height')].map(Number) });
    else if (kind === 'circle') shapes.push({ circle: [attr(tag,'cx'), attr(tag,'cy'), attr(tag,'r')].map(Number) });
    else shapes.push({ unsupported: tag });
  }
  return {
    shapes,
    strokeWidth: attr(root, 'stroke-width'),
    cap: attr(root, 'stroke-linecap'),
    join: attr(root, 'stroke-linejoin'),
    viewBox: attr(root, 'viewBox')
  };
}

/* ---- run ------------------------------------------------------------------ */

const found = new Map();   /* decoded svg -> { files:Set, count, prop:Set } */
const parseErrs = [];

for (const file of CSS) {
  const abs = path.resolve(file);
  if (!fs.existsSync(abs)) continue;
  const text = fs.readFileSync(abs, 'utf8');
  /* THE LONGHAND COUNTS TOO. The pattern read `mask:` and `-webkit-mask:` only, and the
     `glyph` atom declares `mask-image` on its own because its repeat, position and size are
     shared by every value of the set. Three glyphs were applied to 140 places and this check
     reported four masks and no change: it was not comparing them because it could not see
     them, which is the failure mode a discovering check exists to avoid. */
  const re = /(-webkit-mask|mask)(-image)?\s*:\s*url\("(data:image\/svg\+xml,[^"]+)"\)/g;
  let m;
  while ((m = re.exec(text))) {
    let svg;
    try { svg = decodeURIComponent(m[3].replace(/^data:image\/svg\+xml,/, '')); }
    catch (e) { parseErrs.push(`${file}: could not decode a mask URI, ${e.message}`); continue; }
    if (!found.has(svg)) found.set(svg, { files: new Set(), count: 0, prop: new Set() });
    const rec = found.get(svg);
    rec.files.add(file); rec.count++; rec.prop.add(m[1]);
  }
}

const matched = [], unmatched = [], strokes = [];

for (const [svg, rec] of found) {
  let parsed;
  try { parsed = parseSvg(svg); }
  catch (e) { parseErrs.push(`could not parse a decoded mask: ${e.message}`); continue; }
  const canon = serialise(parsed.shapes);
  const hit = Object.keys(CANON).find(n => CANON[n] === canon);
  const where = `${[...rec.files].join(' + ')}  ${rec.count} declarations (${[...rec.prop].join(', ')})`;
  if (hit) {
    matched.push({ glyph: hit, where, parsed });
    strokes.push({ glyph: hit, width: parsed.strokeWidth, where: [...rec.files].join(' + '), cap: parsed.cap, join: parsed.join, viewBox: parsed.viewBox });
  } else {
    /* nearest, so the report says WHICH glyph drifted rather than only that one did */
    let best = null, bestScore = -1;
    for (const n of Object.keys(CANON)) {
      const a = CANON[n], b = canon;
      let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++;
      if (i > bestScore) { bestScore = i; best = n; }
    }
    unmatched.push({ where, canon, best, bestScore });
  }
}

/* the declared weights, all three in one place */
const declared = DECLARED.map(d => {
  const abs = path.resolve(d.file);
  if (!fs.existsSync(abs)) return { ...d, width: 'file not found' };
  const text = fs.readFileSync(abs, 'utf8').replace(/url\("data:[^"]*"\)/g, 'url(...)');
  const rule = new RegExp(`\\${d.sel}\\s*\\{[^}]*\\}`, 'g');
  const hit = text.match(rule);
  const w = hit && hit.join(' ').match(/stroke-width\s*:\s*([\d.]+)/);
  return { ...d, width: w ? w[1] : 'not declared' };
});

/* ---- report --------------------------------------------------------------- */

const problems = [];

console.log(`source: ${SRC}`);
console.log(`glyphs declared: ${Object.keys(ICONS).length}   draw order: ${ORDER.length}`);
const missingFromOrder = Object.keys(ICONS).filter(n => !ORDER.includes(n));
const missingFromSet   = ORDER.filter(n => !ICONS[n]);
if (Object.keys(ICONS).length !== 17) problems.push(`the set is ${Object.keys(ICONS).length} glyphs, not 17`);
missingFromOrder.forEach(n => problems.push(`${n} is in the set and not in the draw order`));
missingFromSet.forEach(n => problems.push(`${n} is in the draw order and not in the set`));

console.log(`\ncss files scanned: ${CSS.length}`);
CSS.forEach(f => console.log('  ' + f));
console.log(`distinct mask glyphs found: ${found.size}`);

console.log(`\nmatched, character for character: ${matched.length}`);
matched.forEach(m => console.log(`  ${m.glyph.padEnd(10)} ${m.where}`));

console.log(`\nstroke, and it is the other half of a glyph:`);
console.log(`  icons.js declares the set at        ${GRID.stroke}, caps ${GRID.cap}, joins ${GRID.join}`);
declared.forEach(d => console.log(`  ${d.sel.padEnd(8)} in ${d.file.padEnd(24)} ${String(d.width).padEnd(6)} ${d.what}`));
strokes.forEach(s => {
  const flag = Number(s.width) === GRID.stroke ? '' : `   <- DIFFERS from the declared ${GRID.stroke}`;
  console.log(`  mask ${s.glyph.padEnd(9)} ${String(s.width).padEnd(6)} caps ${s.cap}, joins ${s.join}, viewBox ${s.viewBox}${flag}`);
  if (Number(s.width) !== GRID.stroke) problems.push(`mask ${s.glyph} in ${s.where} paints at stroke-width ${s.width}, the set declares ${GRID.stroke}`);
  if (s.cap !== GRID.cap)  problems.push(`mask ${s.glyph} uses cap ${s.cap}, the set declares ${GRID.cap}`);
  if (s.join !== GRID.join) problems.push(`mask ${s.glyph} uses join ${s.join}, the set declares ${GRID.join}`);
});
declared.forEach(d => {
  if (String(d.width) !== String(GRID.stroke)) problems.push(`${d.sel} declares stroke-width ${d.width}, the set declares ${GRID.stroke}`);
});

console.log(`\nparse errors: ${parseErrs.length}`);
parseErrs.forEach(e => console.log('  ' + e));

console.log(`\nGEOMETRY DIFFERENCES: ${unmatched.length}`);
unmatched.forEach(u => {
  console.log(`  ${u.where}`);
  console.log(`    matches no glyph in the set. Nearest is ${u.best}, agreeing for the first ${u.bestScore} characters.`);
  console.log(`    mask:   ${u.canon.replace(/\n/g, ' | ')}`);
  console.log(`    ${u.best}: ${CANON[u.best].replace(/\n/g, ' | ')}`);
});

console.log(`\nSTROKE AND BOOKKEEPING FINDINGS: ${problems.length}`);
problems.forEach(p => console.log('  ' + p));
