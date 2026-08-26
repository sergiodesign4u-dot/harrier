/* Every character in the rendered product that is not a letter, a digit or ordinary
   punctuation: the candidates for an icon typed as text. Read off what RENDERS, on both
   corpora, with the element it sits in and the class of that element, because whether a
   character is an icon or a word is decided by its JOB and not by its code point. */
import pw from '../../../node_modules/playwright/index.js';
const { chromium } = pw; import fs from 'fs'; import path from 'path';
const dir = process.argv[2];
import { fileURLToPath } from 'url';
/* THE PATH IS DECODED, NOT THE URL'S. This repository lives under a directory with spaces in
   it, so `new URL(...).pathname` hands back `Claud%20Projects` and `readdirSync` looks for a
   folder with a per cent sign in its name. */
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..', dir);
const files = fs.readdirSync(ROOT).filter(f => f.endsWith('.html') && !['index.html','overview.html'].includes(f)).sort();
const b = await chromium.launch(); const p = await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
const found = {};
for (const f of files) {
  await p.goto('file://' + path.join(ROOT, f));
  await p.evaluate(()=>{const s=document.querySelector('#sidebar'); if(s) s.remove();});
  const r = await p.evaluate(() => {
    const out = [];
    const ok = /[A-Za-z0-9 .,;:!?'"()\[\]{}\/\\@#$%&*_+=<>|~`^’‘“”-]/;
    const it = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = it.nextNode())) {
      const t = n.textContent; if (!t.trim()) continue;
      const host = n.parentElement; if (!host || getComputedStyle(host).display === 'none') continue;
      for (const ch of t) {
        if (ok.test(ch)) continue;
        out.push({ ch, tag: host.tagName.toLowerCase(), cls: String(host.className||'').slice(0,26),
                   near: t.replace(/\s+/g,' ').trim().slice(0,40) });
      }
    }
    return out;
  });
  for (const x of r) {
    const k = x.ch + ' :: ' + x.tag + (x.cls ? '.' + x.cls : '');
    (found[k] = found[k] || { n: 0, pages: new Set(), near: x.near });
    found[k].n++; found[k].pages.add(f);
  }
}
await b.close();
const rows = Object.entries(found).map(([k,v]) => [k, v.n, v.pages.size, v.near]).sort((a,b)=>b[1]-a[1]);
console.log('\n' + dir + ' :: characters that are not letters, digits or ordinary punctuation\n');
for (const [k,n,pg,near] of rows)
  console.log('  ' + String(n).padStart(4) + ' on ' + String(pg).padStart(3) + ' pages   ' + k.padEnd(34) + '  ' + JSON.stringify(near));
