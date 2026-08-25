/* design/kit/checks/coverage.mjs :: every rule kit.css had, and where it went
   ============================================================================
   Step 8 deletes design/kit/kit.css. Before that can be true, everything it
   declared has to exist somewhere under design/system/, or be named as deliberately
   dropped. This walks both stylesheets, normalises the selectors and reports what
   the old file has and the new one does not.

     node design/kit/checks/coverage.mjs

   It is a text comparison and it is deliberately blunt: a selector that moved to a
   different name is reported as missing, and the rename map in docs/inventory.md is
   the answer. What it catches is the other kind, the rule nobody moved at all, and
   it found forty of those on its first run.
   ============================================================================ */

import fs from 'fs';
import path from 'path';

const strip = s => s.replace(/\/\*[\s\S]*?\*\//g, '');
const rules = css => {
  const out = new Map();
  const walk = (text, media) => {
    let i = 0;
    while (i < text.length) {
      const at = text.indexOf('@media', i);
      const br = text.indexOf('{', i);
      if (br < 0) break;
      if (at >= 0 && at < br) {
        const cond = text.slice(at + 6, text.indexOf('{', at)).trim();
        let d = 1, j = text.indexOf('{', at) + 1;
        while (d && j < text.length) { if (text[j] === '{') d++; else if (text[j] === '}') d--; j++; }
        walk(text.slice(text.indexOf('{', at) + 1, j - 1), cond);
        i = j; continue;
      }
      const sel = text.slice(i, br).trim();
      let d = 1, j = br + 1;
      while (d && j < text.length) { if (text[j] === '{') d++; else if (text[j] === '}') d--; j++; }
      const body = text.slice(br + 1, j - 1);
      if (sel && !sel.startsWith('@')) {
        for (const s of sel.split(',')) {
          const k = s.trim().replace(/\s+/g, ' ') + (media ? ' @' + media.replace(/\s+/g, '') : '');
          out.set(k, (out.get(k) || '') + body);
        }
      }
      i = j;
    }
  };
  walk(strip(css), '');
  return out;
};

/* kit.css IS DELETED AT THE END OF STEP 8, which is what this check exists to make safe.
   It reads the file out of the last commit that had it, so the comparison survives the
   deletion and can still be run afterwards to prove nothing was lost. */
import { execSync } from 'child_process';
/* THE DELETED FILE IS READ OUT OF HISTORY, and the fallback needed a second fallback.
   While the deletion was uncommitted, HEAD still carried the file. Once stage 09 was
   committed the deletion went with it, and `git show HEAD:` stopped resolving: the
   instrument that proves the deletion was safe lost the thing it compares against, on
   the commit that made the deletion real. It now asks git which commit last touched the
   path and reads the version from that commit's parent, so it keeps working for as long
   as the history does. */
let kitText;
try { kitText = fs.readFileSync('design/kit/kit.css', 'utf8'); }
catch {
  try { kitText = execSync('git show HEAD:design/kit/kit.css', { maxBuffer: 1 << 24 }).toString(); }
  catch {
    const gone = execSync('git log --format=%H -1 -- design/kit/kit.css').toString().trim();
    kitText = execSync(`git show ${gone}^:design/kit/kit.css`, { maxBuffer: 1 << 24 }).toString();
  }
}
const kit = rules(kitText);
let sys = '';
for (const f of ['design/system/base.css', 'design/system/tokens.css', 'design/system/utilities.css',
                 'design/system/places.css',
                 ...fs.readdirSync('design/system/patterns').map(f => 'design/system/patterns/' + f),
                 ...fs.readdirSync('design/system/components').map(f => 'design/system/components/' + f)])
  sys += fs.readFileSync(f, 'utf8') + '\n';
const system = rules(sys);

/* the rename map: an old selector answered by a new name is covered.
   THE STAGE 09 ROWS ARE A LEVEL RATHER THAN A RENAME. A composition rule that left a
   component file for a pattern file answers the old selector under the pattern's name,
   and this map is where that is declared: without these six rows the coverage check
   reports the move as a loss, which is exactly what it should do for a rule that was
   deleted rather than moved. */
const RENAMED = [
  /* STAGE 10 MOVED THE ONE BREAKPOINT AND THE KEY CARRIES ITS CONDITION. Every
     selector here is keyed by its media condition as well as its text, so moving the
     point from 900 to 1279.98 turned 56 covered selectors into 56 misses overnight
     without a single rule being lost. The move is a declared change and this is the
     row that declares it: the check is about whether a rule still EXISTS, not about
     the width at which it fires, and that width has its own register in tokens.css. */
  [/@\(max-width:900px\)/g, '@(max-width:1279.98px)'],
  /* the most specific first: kit.css scoped the ladder's reason column on the split,
     stage 08 rescoped it on the pane, and stage 09 moved it to the pattern. Three
     homes for one rule, and the map has to name the first and the last. */
  [/\.z45:has\(> \.z5\.is-standalone\) \.lat \.off \.why/g, '.case-pane.is-standalone .lat .off .why'],
  /* stage 09 found the standalone head declared twice, in z5.css and in pane-head.css
     under the component's own class. The duplicate went and the component's kept it. */
  [/\.z5\.is-standalone \.pane-head h1/g, '.pane-head--standalone h1'],
  [/\.z5\.is-standalone \.pane-head/g, '.pane-head--standalone'],
  [/\.z5\.is-paper/g, '.case-pane.is-paper'],
  [/\.z5\.is-standalone/g, '.case-pane.is-standalone'],
  [/\.z45:has\(> \.z5\.is-standalone\)/g, '.z45:has(> .case-pane.is-standalone)'],
  [/\.z4--log/g, '.queue-list--log'], [/\.z4--shift/g, '.shift-brief'],
  [/\.wf-shell/g, '.shell'], [/\.wf-screen/g, '.screen'],
  [/\.chip--state\.chip--solid/g, '.state--solid'], [/\.chip--state\.chip--ghost/g, '.state--ghost'],
  [/\.chip\.chip--state/g, '.state'], [/\.chip--state/g, '.state'],
  [/\.rows--moved \.row/g, '.row-moved'], [/\.rows--moved \./g, '.row-moved .'], [/\.rows--moved/g, '.rows-moved'],
  [/\.gone-all/g, '.tomb--all'],
  [/^\.out-line/g, '.outage .out-line'], [/^\.out-contact/g, '.outage .out-contact'],
  [/\.rows--log \./g, '.row--log .'],
  [/\.rows--log \.row/g, '.row--log'],
  [/\.rail--foot/g, '.rail-foot'], [/\.btn--primary-narrow/g, '.btn--primary'],
  [/\.field (input|textarea|select)/g, '.input'], [/\.field > label/g, '.label'],
  [/\.z1 nav a\[aria-current="page"\]/g, '.navitem.is-current'], [/\.z1 nav a/g, '.navitem'],
  [/\.pane-body \.frow/g, '.frow--flush'],
  /* NINE ATOMS HAD NO DECLARATION OF THEIR OWN and existed only as a descendant of their
     parent. The map's last row gives each one its own, so `.claim .tag` is answered by
     `.tag` and the parent keeps only what is genuinely contextual. */
  [/^\.(row|claim|frow|field|lat|dialog > footer|btn|z1) (\.)?/g, '.'],
  [/^\.states \.chip/g, '.state'], [/ \.states \.chip$/g, ' .states .state'],
  [/\.chip:empty/g, '.key:empty'], [/\.key:empty/g, '.key:empty'],
  [/^\.src::after/g, 'a.src::after'],
  [/\.annun b/g, '.annun b'],
  [/^a\.opt:hover/g, '.opt:hover'],
  [/^\.banner > \.act/g, '.banner:not(.only-narrow) > .act'],
  [/^\.brief \.rows/g, '.rows-moved'],
  [/\.btn--primary-narrow \.key/g, '.btn--primary .key'],
  [/\.row:has\(\.bars[^)]*\)[^,]*/g, '.sev'],
];
const norm = k => { let s = k; for (const [a, b] of RENAMED) s = s.replace(a, b); return s; };
/* AND THE SAME KEY WITH ONLY THE POINT MOVED. The rename map also rewrites selector
   TEXT, and several of its rows exist to give an atom its own declaration: `.row .cost`
   normalises to `.cost`, which was harmless while the raw key still matched the system
   verbatim. Moving the point broke the raw match for every one of those at once, and
   eleven rules that had not changed at all read as missing. This is the raw key with
   the point moved and nothing else touched. */
const movedPoint = k => k.replace(/@\(max-width:900px\)/g, '@(max-width:1279.98px)');

/* selectors this stage deliberately does not carry, each with its reason */
const DROPPED = [
  /* -- STAGE 10, and every one of these is a rule that became FLUID ------------
     A rule that stopped being a query has no query to be found under, so it reads
     as missing to a check keyed by the media condition. Each row names what the
     rule is now, and `docs/responsive.md` section 8 is the full list. */
  { on: /@\(max-width:1560px\)$/,  why: 'stage 10: the 1560 point is gone. The row and the handover line trade side padding through a clamp now, continuously instead of once at a number nobody had named' },
  { on: /@\(max-width:1400px\)$/,  why: 'stage 10: the 1400 point is gone. The annunciator and the bar wrap through one unconditional declaration each, and the strip measures the same height from 1280 to 2560 either way' },
  { on: /^\.z5\.is-standalone \.nar$/, why: 'stage 10: the measure moved out of the pattern and into base.css as `--measure`, which caps four kinds of prose rather than one. Two answers two characters apart is the duplication this system rules against' },
  { on: /^\.z5\.is-standalone \.pane-head @/, why: 'stage 09: the standalone head was static at 900 in kit.css and static at every width in pane-head.css, and the narrow rule was a duplicate of the wide one. Collapsed to the unconditional rule, and 102 renderings say nothing moved' },
  { on: /^:root/,                        why: 'the token block, which is tokens.css' },
  { on: /^(\*|html|body|a|a:hover|:focus-visible)( |$|,|@)/, why: 'the reset and the document, which are base.css' },
  { on: /\.only-(desk|narrow|desk-i)/,   why: 'the viewport twins, which are utilities.css' },
  { on: /^\.(dim|mono|vh|grow)( |$|@)/,  why: 'the three text utilities and the spacer, which are utilities.css' },
  { on: /\.z1 nav span/,                 why: 'a nav item that cannot be opened. Zero instances in either corpus, and it is list three of the reconciliation' },
  { on: /\.icon/,                        why: 'the stage 07 icon class, superseded by the CSS masks. Zero instances anywhere' },
  { on: /\.z5--paper/,                   why: 'a second name for is-paper. One state, one name' },
  { on: /\.esc-first|\.qbanner/,         why: 'an order and a margin. Placement belongs to the parent, and step 2 took both off the list' },
  { on: /@media print/,                  why: 'the printed surface, which is base.css' },
  { on: /:has\(\.bars/,                   why: 'the severity ramp moved off .row and onto .sev and .bars, so a component drawn anywhere else is coloured' },
  { on: /^\.block > h[23]/,               why: 'one rule, .block > :is(h2,h3). A section heading is not always an h3 and the two had to be written twice' },
  { on: /^a\.opt:hover/,                  why: '.opt:hover:not(.is-chosen), because a ground that is already the answer must not move under the pointer' },
  { on: /\.btn--primary-narrow/,          why: 'deleted by the rename map. It was the same primary with a viewport twin folded into its name, and .btn--primary already carries the accent at every width' },
  { on: /^\.rows--log/,                   why: 'the log widths moved to .row--log reading --row-tracks-log. The container class survives on two screens as a name doing no work, and it is list three of the reconciliation' },
  { on: /^#sidebar|^\.nav-|^\.d-/,       why: 'the documentation panel, which is base.css and /_nav.css' },
];

const missing = [];
for (const [k] of kit) {
  const n = norm(k);
  if (system.has(n) || system.has(k) || system.has(movedPoint(k))) continue;
  /* the reason DROPPED is tested against BOTH the raw key and its normalised form:
     some rows describe a selector as kit.css wrote it and some as the system wrote
     it, and a row that silently never fires is the defect this whole file is for. */
  const d = DROPPED.find(x => x.on.test(k) || x.on.test(n));
  if (d) continue;
  missing.push(k);
}
console.log(`selectors in kit.css: ${kit.size}`);
console.log(`selectors in design/system/: ${system.size}`);
console.log(`DECLARED IN kit.css AND NOWHERE IN THE SYSTEM: ${missing.length}`);
missing.forEach(m => console.log('  ' + m));
