/* design/kit/checks/syntax.mjs :: an unterminated comment, and the block it swallows
   ============================================================================
   The cheapest instrument here and the last one written, because it took a
   self-inflicted wound to see the need for it.

     node design/kit/checks/syntax.mjs

   WHAT IT CATCHES. A comment whose terminator is missing does not fail loudly. It eats
   whatever follows it up to the NEXT comment terminator, which in a well commented
   file is a few dozen lines away, and everything in between disappears: a
   declaration, a
   closing brace, whole rules. The file still parses. The page still renders. The
   only symptom is that some rules stopped existing.

   THE ONE IT WAS WRITTEN FOR, at stage 09, in tokens.css. An edit to a comment
   dropped its terminator. The comment swallowed two token declarations and the
   closing brace of the semantic block, so everything after it became NESTED
   inside that block. Two media queries then read `:root` as a DESCENDANT of the
   root, which nothing can be, and both of the system's responsive primitives went
   dead: the detail pane stopped narrowing below 1560 and the queue row stopped
   collapsing to one column at 360.

   AND EVERY OTHER INSTRUMENT STILL PASSED. The contrast sweep passed, because
   nothing about colour changed. The overflow check passed, because the row that
   was suddenly 646px wide sits inside a scroll container. The usage rules passed,
   because none of them is about a track. The comparison against the pre-stage
   baseline passed, because it hides the panel and reads the product's boxes, and
   the product's boxes at 1440 were the same. It was found by counting braces.

   IT IS TWO COUNTS AND NOTHING ELSE, and that is the point: the defects worth an
   instrument are usually not the ones worth a clever one.
   ============================================================================ */

import fs from 'fs';
import path from 'path';

/* THE LIST WAS THE SYSTEM AND THE STAND, AND IT MISSED THE TWO SHEETS THAT PAINT THE
   DOCUMENTS. `research/_page.css` and `design/concept/_stand.css` are the two page-local
   sheets this project has already been bitten by twice: the first silently restyles
   anything reusing `.note`, `.lede` or `.s1` to `.s5`, and the second exists only because
   of it. An instrument whose corpus is the code it trusts is checking the half that was
   never the problem. Both added at stage 13, after an agent editing `_stand.css` found it
   had to count its own braces by hand. */
const FILES = [
  'design/system/tokens.css',
  'design/system/base.css',
  'design/system/index.css',
  'design/system/places.css',
  'design/system/utilities.css',
  'design/kit/_page.css',
  'research/_page.css',
  'design/concept/_stand.css',
  ...fs.readdirSync('design/system/components').map(f => 'design/system/components/' + f),
  ...fs.readdirSync('design/system/patterns').map(f => 'design/system/patterns/' + f),
];

const findings = [];
for (const f of FILES) {
  const src = fs.readFileSync(f, 'utf8');

  /* 1. an unterminated comment. Count the openers against the terminators: a file with
        more of the first has one that never ends, and the line of the opener with no
        terminator after it is where to look. */
  const opens = [...src.matchAll(/\/\*/g)];
  const closes = [...src.matchAll(/\*\//g)];
  if (opens.length !== closes.length) {
    let depth = 0, at = null;
    const marks = [...opens.map(m => ({ i: m.index, k: 1 })), ...closes.map(m => ({ i: m.index, k: -1 }))]
      .sort((a, b) => a.i - b.i);
    for (const m of marks) {
      if (m.k === 1 && depth === 0) at = m.i;
      depth += m.k;
      if (depth < 0) depth = 0;
    }
    const line = at === null ? '?' : src.slice(0, at).split('\n').length;
    findings.push(`${f}: ${opens.length} comment openers and ${closes.length} terminators. The unterminated one starts at line ${line}`);
    continue;                       /* the brace count would be nonsense on this file */
  }

  /* 2. brace balance, with comments neutralised. A file that ends at depth 1 has a
        block that never closed, and everything after it is nested inside it. */
  const bare = src.replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[{}]/g, ' '));
  let depth = 0, line = 1, deepest = 0, openedAt = null;
  for (const ch of bare) {
    if (ch === '\n') line++;
    else if (ch === '{') { if (depth === 0) openedAt = line; depth++; deepest = Math.max(deepest, depth); }
    else if (ch === '}') { depth--; if (depth < 0) { findings.push(`${f}: a closing brace with nothing open, line ${line}`); depth = 0; } }
  }
  if (depth !== 0) findings.push(`${f}: ends at brace depth ${depth}. The block that never closed opens at line ${openedAt}, and everything after it is nested inside it`);
}

console.log(`\nSYNTAX :: ${FILES.length} stylesheets\n`);
if (!findings.length) console.log('  Every comment terminates and every block closes.\n');
for (const x of findings) console.log('  FOUND  ' + x);
process.exitCode = findings.length ? 1 : 0;
