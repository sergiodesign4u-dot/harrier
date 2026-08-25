/* design/kit/checks/contrast.mjs :: a contrast ratio for every text node
   ============================================================================
   The one instrument that finds the class of defect no reader and no grep can
   see: the value is never wrong in any file, it RESOLVES wrong. It found a light
   theme inherited by two dark documents at stage 06, 151 browser blue links at
   07, and at 08 it found a stand class repainting the first product component
   ever placed inside it.

     node design/kit/checks/contrast.mjs            the whole stand
     node design/kit/checks/contrast.mjs btn.html   one page

   TWO THINGS IT GETS RIGHT THAT A NAIVE VERSION DOES NOT.

   1. It COMPOSITES the ground. A background written as color-mix(... transparent)
      or rgba() is not the ground; the ground is that colour over whatever is
      behind it, layer by layer, down to the body. Reading the first three numbers
      of an rgba() and calling it solid reports a panel item at 3.58 that is
      actually 4.87, which is a false failure, and it can just as easily report a
      false pass.
   2. It measures the NARROW viewport by asking the document, not by narrowing a
      window: clientWidth is printed and has to read 360.

   Exemptions are declared here rather than skipped, so a value that stops being
   exempt shows up as a new line instead of staying quiet.
   ============================================================================ */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

/* ANY FOLDER OF PAGES, and the stand by default.
     node design/kit/checks/contrast.mjs                the stand
     node design/kit/checks/contrast.mjs btn.html       one page of it
     node design/kit/checks/contrast.mjs design/        the product's coloured screens
     node design/kit/checks/contrast.mjs design/ case.html
   It was hard wired to design/kit/ until stage 09, and the product screens were being
   swept by a script written from scratch each time somebody remembered to. A page that
   is only ever swept by hand is a page that is not swept. */
const arg0 = process.argv[2];
const dirArg = arg0 && arg0.endsWith('/') ? arg0 : 'design/kit/';
const kit = path.resolve(dirArg) + '/';
/* EVERY PAGE IN THE FOLDER, READ FROM DISK. A hand written list is a list somebody forgets
   to extend, and a page that is never swept is a page that quietly fails. The order is the
   registry's where it can be, and alphabetical after that. */
const PAGES = fs.readdirSync(kit).filter(f => f.endsWith('.html')).sort();

/* Declared exemptions. Each is a role whose own file carries the reason. */
const EXEMPT = [
  /* The strip and the annunciator both separate their parts with a character, and it is
     the same exemption: WCAG 1.4.1 does not cover a purely decorative glyph. The first
     version of this test matched only the pipe, so adding the middot to Z2 turned one
     declared exemption into thirty two failures overnight. The class is what declares it,
     not the character. */
  { why: '--text-divider: the character that separates the parts of Z1 and Z2, a divider drawn as a glyph', test: t => t.txt === '|' || t.txt === '\u00b7' || t.cls.split(' ').includes('sep') },
  { why: '--text-divider: shown on colour.html at its real value, which is the point of the row', test: t => t.cls.includes('k-demo-ink') && t.cr < 1.25 }
];

const only = arg0 && arg0.endsWith('/') ? process.argv[3] : arg0;
const pages = only ? [only] : PAGES;
const b = await chromium.launch();
const fails = [], exempted = [], errs = [], overflow = [], widths = new Set();

for (const theme of ['dark','light']) {
  for (const vw of [1440, 360]) {
    const ctx = await b.newContext({ viewport: { width: vw, height: 900 } });
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(`${theme} ${vw} :: ${e.message}`));
    await p.addInitScript(t => { try { localStorage.setItem('harrier-kit-theme', t); } catch(e){} }, theme);
    for (const f of pages) {
      await p.goto('file://' + kit + f);
      await p.waitForLoadState('networkidle');
      const r = await p.evaluate(() => {
        const parse = c => {
          const m = c.match(/-?\d*\.?\d+/g);
          if (!m) return null;
          if (c.startsWith('color(')) {           /* color(srgb r g b / a), 0 to 1 */
            const v = m.map(Number);
            return [v[0]*255, v[1]*255, v[2]*255, v.length > 3 ? v[3] : 1];
          }
          const v = m.map(Number);
          return [v[0], v[1], v[2], v.length > 3 ? v[3] : 1];
        };
        const over = (fg, bg) => [0,1,2].map(i => fg[i]*fg[3] + bg[i]*(1-fg[3])).concat(1);
        const lum = c => { const f = v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); };
                           return .2126*f(c[0]) + .7152*f(c[1]) + .0722*f(c[2]); };
        const ratio = (a,bg) => { const A=lum(a), B=lum(bg); const hi=Math.max(A,B), lo=Math.min(A,B); return (hi+.05)/(lo+.05); };
        /* THE GROUND IS COMPOSITED, layer by layer, and every partly transparent
           background on the way counts. */
        const groundOf = el => {
          const stack = [];
          for (let n = el; n; n = n.parentElement) {
            const c = parse(getComputedStyle(n).backgroundColor);
            if (c && c[3] > 0) { stack.push(c); if (c[3] === 1) break; }
          }
          if (!stack.length) return [255,255,255,1];
          let out = stack.pop();
          while (stack.length) out = over(stack.pop(), out);
          return out;
        };
        const out = [];
        document.querySelectorAll('*').forEach(el => {
          const txt = [...el.childNodes].filter(n => n.nodeType===3 && n.textContent.trim())
                                        .map(n=>n.textContent.trim()).join(' ');
          if (!txt) return;
          const cs = getComputedStyle(el);
          if (cs.visibility==='hidden' || cs.display==='none' || +cs.opacity === 0) return;
          const rect = el.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const size = parseFloat(cs.fontSize), w = parseInt(cs.fontWeight) || 400;
          const need = (size >= 24 || (size >= 18.66 && w >= 700)) ? 3 : 4.5;
          let fg = parse(cs.color);
          const bg = groundOf(el);
          if (fg[3] < 1) fg = over(fg, bg);
          /* an ancestor's opacity dims the text against the same dimmed ground, so the
             ratio is unchanged by it and the out of reach control is exempt anyway */
          const cr = ratio(fg, bg);
          if (cr < need) out.push({ cr:+cr.toFixed(2), need, size,
                                    txt: txt.slice(0,60),
                                    cls: (el.className||'').toString().slice(0,44),
                                    tag: el.tagName });
        });
        return { bad: out, cw: document.documentElement.clientWidth, sw: document.documentElement.scrollWidth };
      });
      widths.add(r.cw);
      if (r.sw > r.cw + 1) overflow.push(`${f} ${theme} ${vw}: scrollWidth ${r.sw} > clientWidth ${r.cw}`);
      for (const t of r.bad) {
        const row = { ...t, page: f, theme, vw };
        const ex = EXEMPT.find(e => e.test(row));
        (ex ? exempted : fails).push(ex ? { ...row, why: ex.why } : row);
      }
    }
    await ctx.close();
  }
}
await b.close();

const line = x => `  ${x.page} ${x.theme} ${x.vw}  ${x.cr}/${x.need}  ${x.tag}.${x.cls}  "${x.txt}"`;
console.log(`renderings: ${pages.length * 4}   pages: ${pages.length}`);
console.log(`clientWidths measured: ${[...widths].sort((a,b)=>b-a).join(', ')}`);
console.log(`page errors: ${errs.length}`); errs.forEach(e => console.log('  ' + e));
console.log(`horizontal overflow: ${overflow.length}`); overflow.forEach(o => console.log('  ' + o));
console.log(`exempt, with the reason declared: ${exempted.length}`);
[...new Set(exempted.map(x => x.why))].forEach(w => console.log('  ' + w));
console.log(`FAILURES: ${fails.length}`);
fails.forEach(x => console.log(line(x)));
