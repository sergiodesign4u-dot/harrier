/* design/kit/checks/themes.mjs :: the dark theme as a stress test of the system
   ============================================================================
   Step 7 does not write pairs. Every role got one at step 3 and every state token
   at step 5. What this asks is the question one component cannot answer: does the
   system READ AS A SYSTEM in the other theme.

     node design/kit/checks/themes.mjs

   Four failures it looks for, and each is invisible from inside one file:

   MERGED SURFACES. Two fills that are a step apart in one theme and the same step
   in the other, so a raised plane stops reading as raised.
   COLLAPSED ROLES. Two roles that hold different values in one theme and the same
   value in the other. They are then one role in that theme and nobody notices
   until a rebrand pulls them apart.
   A THRESHOLD THAT ONLY HOLDS ONE WAY. 4.6 in light and 3.9 in dark is the exact
   shape of the defect the pack names, and it is what a pair written as a mirror
   produces.
   A PAIR THAT IS A MIRROR. Not a failure by itself, but a role whose two values
   sit at the same distance from their own ground in both themes has probably been
   copied rather than measured, and it is worth reading.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';

const INK   = ['--text-primary','--text-secondary','--text-accent','--text-on-invert','--text-on-action',
               '--text-sev-high','--text-sev-medium','--text-sev-low','--text-hover'];
const FILL  = ['--bg-page','--bg-surface','--bg-selected','--bg-invert','--bg-action','--bg-quiet',
               '--bg-hover','--bg-active'];
const LINE  = ['--line-separator','--line-edge','--line-control','--line-current','--line-record',
               '--line-hover','--color-focus'];
const EXEMPT = { '--text-divider': 'a divider drawn as a character. WCAG 1.4.1 does not cover a decorative glyph',
                 '--line-separator': 'it separates and carries no meaning, deliberately below every floor',
                 '--line-edge': 'a panel edge. 1.4.11 covers what identifies a CONTROL, not a divider',
                 '--bg-page': 'a ground answers to nothing; what sits on it does' };
const GROUNDS = ['--bg-page','--bg-surface','--bg-selected'];

/* TWO COLLAPSES ARE DECLARED, AND THEY ARE THE SAME FINDING SEEN TWICE: the warm ramp
   has four usable steps above the page in each theme and the fill level wants five.
   The collision lands on a different pair in each theme, which is itself the proof that
   the roles are two rather than one. Both are tolerable for the same reason and both are
   in backlog.md as a question about a fifth step rather than a fix invented here. */
const DECLARED = [
  { pair: ['--bg-selected','--bg-active'],
    why: 'in dark, being ruled on and being pressed take the same ground. They never paint the same element and one of them lasts as long as a click; light separates them, which is what says they are two roles' },
  { pair: ['--bg-quiet','--bg-active'],
    why: 'in light, out of reach and being pressed take the same ground. Same shortage at the other end of the ramp, and dark separates them' },
];

const b = await chromium.launch();
const ctx = await b.newContext();
const page = await ctx.newPage();
await page.goto('file://' + path.resolve('design/kit/color.html'));
await page.waitForLoadState('networkidle');

const data = await page.evaluate(([ink, fill, line, grounds]) => {
  const probe = t => { const e = document.createElement('span'); e.setAttribute('data-theme', t);
                       document.body.appendChild(e); return getComputedStyle(e); };
  const P = { dark: probe('dark'), light: probe('light') };
  const val = (t, n) => P[t].getPropertyValue(n).trim();
  /* A TOKEN RESOLVES TO WHATEVER IT WAS WRITTEN AS, and in this file that is a hex
     literal, not an rgb() string. The first version of this check assumed rgb() and
     reported NaN for every role, which is the failure mode of an instrument that is
     never wrong out loud: it printed FAIL fifteen times and meant nothing. */
  const parse = c => {
    c = c.trim();
    if (c[0] === '#') { const h = c.length === 4
      ? [...c.slice(1)].map(x => parseInt(x + x, 16))
      : [1,3,5].map(i => parseInt(c.substr(i, 2), 16)); return h; }
    const m = c.match(/-?\d*\.?\d+/g).map(Number);
    return c.startsWith('color(') ? [m[0]*255, m[1]*255, m[2]*255] : [m[0], m[1], m[2]];
  };
  const lum = c => { const f = v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); };
    return .2126*f(c[0]) + .7152*f(c[1]) + .0722*f(c[2]); };
  const cr = (a, b) => { const A = lum(parse(a)), B = lum(parse(b));
    return (Math.max(A,B)+.05)/(Math.min(A,B)+.05); };
  const out = { values: {}, ratios: {} };
  for (const t of ['dark','light']) {
    out.values[t] = {};
    for (const n of [...ink, ...fill, ...line, '--text-divider']) out.values[t][n] = val(t, n);
    out.ratios[t] = {};
    for (const n of [...ink, ...line]) {
      out.ratios[t][n] = grounds.map(g => +cr(val(t, n), val(t, g)).toFixed(2));
    }
    out.ratios[t]['__fills'] = fill.map(f => grounds.map(g => +cr(val(t, f), val(t, g)).toFixed(3)));
  }
  return out;
}, [INK, FILL, LINE, GROUNDS]);
await b.close();

let fails = 0;
const say = (t, s) => { console.log(`  ${t}  ${s}`); };

console.log('1. THRESHOLDS IN BOTH THEMES');
for (const n of [...INK, ...LINE]) {
  const need = INK.includes(n) ? 4.5 : 3;
  const d = data.ratios.dark[n], l = data.ratios.light[n];
  if (EXEMPT[n]) { console.log(`  ${n.padEnd(20)} exempt: ${EXEMPT[n]}`); continue; }
  /* an ink that lives on its own plate is measured against that plate, which colour.html
     records; here the three grounds are the console's, so those two are reported and skipped */
  if (n === '--text-on-invert' || n === '--text-on-action') {
    console.log(`  ${n.padEnd(20)} measured against its own plate, see colour.html`); continue;
  }
  const worstD = Math.min(...d), worstL = Math.min(...l);
  const ok = worstD >= need && worstL >= need;
  if (!ok) fails++;
  say(ok ? 'ok  ' : 'FAIL', `${n.padEnd(20)} dark ${worstD.toFixed(2)}  light ${worstL.toFixed(2)}  needs ${need}` +
      (ok ? '' : `   <- holds in ${worstD >= need ? 'dark' : 'light'} only`));
}

console.log('\n2. TWO ROLES THAT COLLAPSE TO ONE VALUE IN ONE THEME AND NOT THE OTHER');
/* ONLY ROLES THAT PAINT THE SAME SURFACE ARE COMPARED. An ink and a fill sharing a
   value is the design rather than a collapse: --bg-action and --text-accent are the
   same amber on purpose, and the surface rule is what keeps them two roles. Comparing
   across surfaces produced eleven false failures on the first run. */
let collapsed = 0;
for (const group of [INK, FILL, LINE]) for (let i = 0; i < group.length; i++) for (let j = i+1; j < group.length; j++) {
  const a = group[i], b2 = group[j];
  const sameD = data.values.dark[a] === data.values.dark[b2];
  const sameL = data.values.light[a] === data.values.light[b2];
  if (sameD !== sameL) {
    const known = DECLARED.find(x => x.pair.includes(a) && x.pair.includes(b2));
    if (known) console.log(`  declared  ${a} and ${b2} are one value in ${sameD ? 'dark' : 'light'}: ${known.why}`);
    else { collapsed++; fails++;
      console.log(`  FAIL  ${a} and ${b2} are one value in ${sameD ? 'dark' : 'light'} and two in the other`); } }
  else if (sameD && sameL) console.log(`  note  ${a} and ${b2} hold the same value in BOTH themes. Two roles, one value, and the surface rule is what keeps them apart`);
}
if (!collapsed) console.log('  none');

console.log('\n3. FILLS THAT MERGE');
for (const t of ['dark','light']) {
  const f = data.ratios[t].__fills;
  FILL.forEach((n, i) => {
    const offPage = f[i][0];
    if (n !== '--bg-page' && offPage < 1.04) { fails++;
      console.log(`  FAIL  ${t}: ${n} is ${offPage} off the page, which does not read as a step`); }
  });
}
console.log('  fills off the page, dark: ' + FILL.map((n,i)=>`${n.replace('--bg-','')} ${data.ratios.dark.__fills[i][0]}`).join(', '));
console.log('  fills off the page, light: ' + FILL.map((n,i)=>`${n.replace('--bg-','')} ${data.ratios.light.__fills[i][0]}`).join(', '));

console.log('\n4. PAIRS THAT LOOK COPIED RATHER THAN MEASURED');
for (const n of [...INK, ...LINE]) {
  if (EXEMPT[n] || n === '--text-on-invert' || n === '--text-on-action') continue;
  const d = data.ratios.dark[n][0], l = data.ratios.light[n][0];
  if (Math.abs(d - l) < 0.02 && data.values.dark[n] !== data.values.light[n])
    console.log(`  note  ${n} measures ${d} in dark and ${l} in light on different primitives. Deliberate or a coincidence worth reading`);
  if (data.values.dark[n] === data.values.light[n])
    console.log(`  note  ${n} is the SAME primitive in both themes: ${data.values.dark[n]}  dark ${d}  light ${l}`);
}

console.log(`\nFAILURES: ${fails}`);
