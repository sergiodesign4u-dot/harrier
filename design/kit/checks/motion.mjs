/* design/kit/checks/motion.mjs :: what actually moves, and what stops when asked
   ============================================================================
   A screenshot shows a frame, not a movement. The only way to read motion is to ask
   the browser what it resolved, and to ask it twice.

     node design/kit/checks/motion.mjs              the coloured screens
     node design/kit/checks/motion.mjs design/kit   the stand
     node design/kit/checks/motion.mjs design queue.html

   EVERY ELEMENT, TWICE, IN TWO VIEWPORTS. Once normally and once with the browser
   emulating `prefers-reduced-motion: reduce`, at 1440 and at a measured 360. A
   duration does not depend on width and a direction does, and this product's narrow
   rendering hides whole zones, so an element that moves at one width may not exist
   at the other.

   THE SIGN UNDER reduce IS "MORE THAN 1ms", NOT "ZERO". A transition of exactly zero
   and a transition that was never declared read identically in computed style, so a
   check demanding zero cannot tell an element that obeyed from an element nobody
   asked. 1ms is invisible to a person and distinguishable to this file, and it is the
   value the token override writes.

   IT ALSO GROUPS BY ROLE. Two components at 180ms and 220ms look fine in two files
   and look like two different systems in one column. The same defect as the drift of
   form at stage 08, and the same cure: put them in one table.

   IT READS PSEUDO ELEMENTS TOO, and the first version did not. The one animation in
   this product lives on `.arriving::after`, and `querySelectorAll('*')` does not
   return a pseudo element: the check reported the queue's filling bar as motionless
   on the four screens that carry it, and reported it as obeying reduce for the same
   reason. An instrument that cannot see the thing the stage was written for is the
   most expensive kind of clean result.

   WHAT IT STILL CANNOT SEE, and the reason section 8 of motion.md exists: a value
   written as a literal INSIDE a `@keyframes` block, and a transition between two
   documents. Those are closed by name rather than by this file.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const dirArg = process.argv[2] || 'design';
const only = process.argv[3];
const dir = path.resolve(dirArg) + '/';
const PAGES = only ? [only] : fs.readdirSync(dir)
  .filter(f => f.endsWith('.html') && f !== 'overview.html').sort();

/* the registered durations, read from the token file rather than repeated here */
const tokens = fs.readFileSync('design/system/tokens.css', 'utf8');
const REGISTER = [...tokens.matchAll(/--dur-([a-z]+):\s*(\d+)ms/g)]
  .filter(m => !/1ms/.test(m[0]))
  .map(m => ({ name: '--dur-' + m[1], ms: +m[2] }));
const allowed = new Set(REGISTER.map(r => r.ms / 1000 + 's'));

const collect = () => {
  const out = [];
  /* AND THE PSEUDO ELEMENTS, WHICH THE FIRST VERSION OF THIS FILE COULD NOT SEE.
     `querySelectorAll('*')` does not return `::before` and `::after`, and the ONE
     animation in this product lives on `.arriving::after`: the check reported the
     queue's filling bar as motionless on the four screens that carry it, and
     reported it as obeying reduce for the same reason. An instrument that cannot
     see the thing the stage was written for is the most expensive kind of clean
     result. */
  for (const el of document.querySelectorAll('*')) {
    for (const pseudo of [null, '::before', '::after']) {
      const cs = getComputedStyle(el, pseudo);
      if (pseudo && cs.content === 'none') continue;
      const td = cs.transitionDuration, an = cs.animationName;
      const moves = (td && td !== '0s') || (an && an !== 'none');
      if (!moves) continue;
      if (!el.offsetParent && getComputedStyle(el).position !== 'fixed') continue;
      out.push({
        /* A DECLARED DEMONSTRATION, and there is one. motion.html shows the real
           components at a deliberately wrong duration so the movement can be seen at
           all, which is a second value on a role and therefore a drift by every
           definition this file has. It is exempt from the register and from the
           drift comparison and NOT from obeying reduce, which is the half that
           matters and the half it failed on its first run. */
        demo: !!el.closest('.m-slow, [data-motion-demo]'),
        tag: el.tagName + (pseudo || ''),
        cls: (el.className || '').toString().split(' ').slice(0, 2).join('.'),
        prop: cs.transitionProperty,
        dur: td,
        ease: cs.transitionTimingFunction,
        anim: an,
        adur: cs.animationDuration,
        iter: cs.animationIterationCount,
      });
    }
  }
  /* AND A CENSUS OF WHAT RENDERS AT ALL, which is a different question from what
     moves. Section 5 below asks whether anything STOPPED EXISTING under reduce, and
     the first version answered it by comparing the two lists of moving things: an
     element that correctly stopped moving left the list and was reported as having
     vanished. The one animation in the product failed that check by obeying it. */
  const rendered = [];
  for (const el of document.querySelectorAll('*')) {
    if (!el.offsetParent && getComputedStyle(el).position !== 'fixed') continue;
    const b = el.getBoundingClientRect();
    if (b.width <= 0 || b.height <= 0) continue;
    rendered.push(el.tagName + '.' + (el.className || '').toString().split(' ')[0]);
  }
  return { out, rendered, cw: document.documentElement.clientWidth };
};

const b = await chromium.launch();
const normal = [], reduced = [], widthErr = [];
const seenNormal = new Set(), seenReduced = new Set();

for (const reduce of [false, true]) {
  for (const vw of [1440, 360]) {
    const ctx = await b.newContext({
      viewport: { width: vw, height: 900 },
      reducedMotion: reduce ? 'reduce' : 'no-preference',
    });
    const p = await ctx.newPage();
    for (const f of PAGES) {
      await p.goto('file://' + dir + f);
      await p.waitForLoadState('networkidle');
      const r = await p.evaluate(collect);
      if (r.cw !== vw) widthErr.push(`${f} asked ${vw} got ${r.cw}`);
      for (const x of r.out) (reduce ? reduced : normal).push({ f, vw: r.cw, ...x });
      for (const k of r.rendered) (reduce ? seenReduced : seenNormal).add(f + '|' + r.cw + '|' + k);
    }
    await ctx.close();
  }
}
await b.close();

const ms = s => Math.round(parseFloat(s) * 1000);
/* A TRANSITION OVER TWO PROPERTIES REPORTS ONE DURATION PER PROPERTY, so `btn` comes
   back as "0.12s, 0.12s" and a naive comparison calls that a different value from
   "0.12s" and reports a drift that is not there. This collapses a list whose entries
   all agree, and leaves a list that genuinely disagrees alone, because that one IS a
   drift: two properties of one component moving at two speeds. */
const one = s => {
  const parts = s.split(',').map(x => x.trim());
  return parts.every(x => x === parts[0]) ? parts[0] : s;
};

console.log(`\nMOTION :: ${PAGES.length} pages in ${dirArg}/, every element, at 1440 and 360, normally and with reduce\n`);
if (widthErr.length) console.log('  MEASUREMENT ERROR: ' + widthErr.length + ' readings at the wrong width');

/* ---- 1. what moves, grouped by role. Same role, same number, or it is a drift -- */
const byRole = new Map();
for (const x of normal.filter(x => !x.demo)) {
  const role = x.anim !== 'none' ? 'status: ' + x.anim
             : x.prop.includes('background') ? 'response: a ground'
             : x.prop.includes('border') || x.prop.includes('outline') ? 'response: a boundary'
             : x.prop.includes('text-decoration') ? 'response: an underline'
             : x.prop.includes('color') ? 'response: ink'
             : 'other: ' + x.prop.slice(0, 30);
  if (!byRole.has(role)) byRole.set(role, new Map());
  const key = x.anim !== 'none' ? `${one(x.adur)} ${one(x.ease)} x${x.iter}` : `${one(x.dur)} ${one(x.ease)}`;
  const m = byRole.get(role);
  m.set(key, (m.get(key) || 0) + 1);
}
console.log('  WHAT MOVES, BY ROLE');
const drifts = [];
for (const [role, m] of byRole) {
  const values = [...m.entries()].sort((a, b) => b[1] - a[1]);
  console.log('    ' + role.padEnd(28) + values.map(([k, n]) => `${k} x${n}`).join('   '));
  if (values.length > 1) drifts.push(role + ': ' + values.map(v => v[0]).join(' and '));
}
console.log('  elements moving, normally: ' + normal.length +
  (normal.some(x => x.demo) ? '  (' + normal.filter(x => x.demo).length + ' of them a declared demonstration on motion.html, exempt from the register and not from reduce)' : ''));

/* ---- 2. anything outside the register -------------------------------------- */
const strays = normal.filter(x => !x.demo && x.anim === 'none' && !allowed.has(one(x.dur)));
console.log('\n  DURATIONS OUTSIDE THE REGISTER (' + REGISTER.map(r => r.ms + 'ms').join(', ') + '): ' + strays.length);
[...new Set(strays.map(x => x.dur + ' on ' + x.tag + '.' + x.cls))].slice(0, 8).forEach(x => console.log('    ' + x));

/* ---- 3. transition: all, and expensive properties --------------------------- */
const EXPENSIVE = /\b(width|height|top|left|right|bottom|margin|padding|box-shadow|filter)\b/;
/* `transition-property` computes to `all` on anything with no transition declared,
   so it only means what the taxonomy means by it when a duration comes with it. */
const alls = normal.filter(x => x.prop === 'all' && ms(one(x.dur)) > 0);
const heavy = normal.filter(x => EXPENSIVE.test(x.prop));
console.log('  transition: all                : ' + alls.length);
console.log('  animating an expensive property: ' + heavy.length);
[...new Set(heavy.map(x => x.prop.slice(0, 40) + ' on ' + x.tag + '.' + x.cls))].slice(0, 6).forEach(x => console.log('    ' + x));

/* ---- 4. the one that matters: does it stop when asked ----------------------- */
const disobeys = reduced.filter(x => {
  if (x.anim !== 'none') return x.iter !== '1' || ms(x.adur) > 1;
  return ms(one(x.dur)) > 1;
});
console.log('\n  UNDER reduce');
console.log('    elements still carrying motion: ' + reduced.length);
console.log('    of them, MORE THAN 1ms         : ' + disobeys.length);
for (const x of [...new Map(disobeys.map(x => [x.tag + x.cls + x.anim, x])).values()].slice(0, 10))
  console.log(`      ${x.f} @${x.vw}  ${x.tag}.${x.cls}  ${x.anim !== 'none' ? x.anim + ' ' + x.adur + ' x' + x.iter : x.dur}`);

/* ---- 5. and the reverse: something that stopped EXISTING under reduce --------
   Reducing motion removes the movement and never the thing. An element that appears
   normally and is simply absent under reduce is a worse defect than any amount of
   extra animation, and it is measured against what RENDERS rather than against what
   moves: a thing that correctly went still is still there. */
const vanished = [...seenNormal].filter(k => !seenReduced.has(k));
console.log('    elements that stopped existing : ' + vanished.length +
  (vanished.length ? '  <- worse than any extra animation' : ''));
vanished.slice(0, 6).forEach(x => console.log('      ' + x));

console.log('');
if (drifts.length) drifts.forEach(d => console.log('  DRIFT  ' + d));
const bad = disobeys.length + alls.length + heavy.length + strays.length + vanished.length + drifts.length;
if (!bad) console.log('  One number per role, nothing expensive, nothing outside the register, and everything stops when asked.\n');
process.exitCode = bad ? 1 : 0;
