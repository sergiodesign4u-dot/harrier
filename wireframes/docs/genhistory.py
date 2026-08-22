# -*- coding: utf-8 -*-
#
# 5.6 History of one case. TWO pages: case-history.html, case-history-superseded.html
#
# This node has NO md of its own. It is one of the twenty three that were never written up,
# so everything below stands on exactly three sentences and nothing else:
#
#   sitemap.md, row 5.6   "state | The log narrowed to a single case, every action and
#                          override in order | goes to 5.4 | job R2 | MVP"
#   decision-log.md, 10   "5.6 the history of one case: every entry for a case in order,
#                          where this is one of them" and "this node with one chip applied"
#   log-entry.md, 9       the same from the other side
#
# So the screen IS 5.1 with one chip applied, and it inherits 5.1's structure rather than
# defining its own. Which is why this file imports genlog and reuses its builders instead of
# writing a second row: two lists of the same rows would diverge, and that divergence is the
# defect this stage exists to catch.
#
# genlog.py writes its five pages at import time rather than under a __main__ guard, and those
# five files belong to another agent. So Q.page is stubbed across the import: we take the
# builders and write nothing. The stub is removed immediately afterwards.

import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

class _Quiet(object):
    def write(self, *a): pass
    def flush(self): pass

_real_page, _real_out = Q.page, sys.stdout
Q.page, sys.stdout = (lambda *a, **kw: None), _Quiet()
import genlog as L          # builders only. Its own five pages are NOT rewritten
Q.page, sys.stdout = _real_page, _real_out

# ---------------------------------------------------------------------------- inline
# Nothing. Every rule this screen needs already exists: the log row and its seven tracks,
# the superseded hatch, the `sup` second line, `.covers` and the 900px rule that refuses to
# render the log on a phone all come from genlog's block, which comes from gencase's, which
# comes from genqueue's. A second version of any of them would be the defect, not the screen.
INLINE = L.INLINE + """
/* INLINE: case-history :: for reconcile into _wf.css
   This screen adds no rules of its own. 5.6 is 5.1 with one chip applied, so it is drawn
   with 5.1's classes; if it had needed a rule, that would have been the first evidence that
   it is not actually a narrowing of 5.1. */"""
Q.INLINE = INLINE

# ---------------------------------------------------------------------------- the fixtures
# Every value below is either lifted from a page already built or is a plausible step of the
# same case that contradicts none of them. Sources, in order:
#   04:41:12Z escalation      log.html, log-selected.html, entry.html, queue-escalated.html
#   04:12:38Z Clerk's verdict entry.html `?as-of=`, gencase.stamp, escalate.html
#   05:58:20Z S. Varga ruled  entry-changed.html, verbatim
# The rest is marked in the report as invented, with what it was invented against.
CASE = 'C-4417'
TENANT = 'Larkfield Logistics'
WHAT = 'Token replay from a new ASN'
SEV = 'High'

OPENED = ('2026-08-22T04:12:09Z', SEV, TENANT, WHAT,
          'Case opened by Clerk', None, ['Clerk opened the case'],
          '9 signals correlated from 6 sources. No verdict yet, and no action taken')
FILED = ('2026-08-22T04:12:38Z', SEV, TENANT, WHAT,
         'Verdict filed by Clerk: real, contain identity', None, ['Clerk filed a verdict'],
         'Above this tenant&rsquo;s latitude, so it waited for a person rather than running')
ESCALATED = ('2026-08-22T04:41:12Z', SEV, TENANT, WHAT,
             'Escalated to S. Varga by R. Idrissi', None, ['escalated'], '')
RULED = ('2026-08-22T05:58:20Z', SEV, TENANT, WHAT,
         'Upheld by S. Varga', None, ['superseded!'],
         'Corrected 13m later by the entry above. Nothing was edited and nothing was removed.')
CORRECTION = ('2026-08-22T06:11:47Z', SEV, TENANT, WHAT,
              'Amended by S. Varga', None, ['amended'],
              'Supersedes the entry below. Both stay.')

BASE_ROWS = [ESCALATED, FILED, OPENED]
SUPERSEDED_ROWS = [CORRECTION, RULED, ESCALATED, FILED, OPENED]

# ---------------------------------------------------------------------------- the chips
# 5.1 block 1 is the narrowing bar and 5.6 is "this node with one chip applied", so the one
# chip is the case and it is solid, because it is the only thing holding this view together.
# Rule 11 of the wireframe contract: narrowing is something she DOES, so a chip is a link.
def chips(case=CASE):
    return ('        <a class="chip chip--solid" href="log.html">Case %s &times;</a>\n'
            '        <a class="chip chip--ghost" href="log-narrowing.html">Any actor &#9662;</a>\n'
            '        <a class="chip chip--ghost" href="log-narrowing.html">Any decision &#9662;</a>\n'
            '        <a class="chip chip--ghost" href="log-narrowing.html">Any date &#9662;</a>\n'
            ) % case

# ---------------------------------------------------------------------------- the pane at rest
# 5.1 section 5, taken literally: at rest the pane states what the view covers, in words, with
# the count, the span, and how far back the log can answer at all. genlog.covers() renders
# exactly that, but its closing sentence names the Meridian pair, which is not on this screen.
# So the shape is reproduced with that one sentence as a parameter, and the report asks for the
# parameter to be pushed back into genlog.covers() at reconcile rather than kept in two places.
RETENTION = ('The earliest entry held for these tenants is <b>2026-02-03T08:14:20Z</b>. '
             '<b>Nothing is ever deleted from the log.</b> How long the evidence snapshot behind '
             'an entry stays retrievable is set by your provider, and an entry past that window '
             'still tells you what was decided and by whom.')

BOTH_ACTORS = ('Both of them, in one stream. Clerk&rsquo;s own actions and every human ruling on '
               'this case. <b>There is no separate automation log</b>, because two streams could '
               'disagree about this case.')

def covers(narrowing, count, span, cannot, whose=BOTH_ACTORS, foot=''):
    return ('    <aside class="z5" aria-labelledby="ph">\n'
            '      <div class="pane-head">\n        <h2 id="ph">What this view covers</h2>\n'
            '        <p class="sub">Nothing is selected, and this is not an empty pane. '
            'It is the answer to the question you are about to be asked</p>\n      </div>\n'
            '      <div class="pane-body">\n'
            '        <div class="covers">\n'
            '          <span class="k">Narrowed to</span><span class="v">%s</span>\n'
            '          <span class="k">Entries</span><span class="v"><b>%s</b></span>\n'
            '          <span class="k">Spanning</span><span class="v">%s</span>\n'
            '          <span class="k">How far back this can answer</span>\n'
            '          <span class="v">%s</span>\n'
            '        </div>\n'
            '        <section class="block">\n          <h3>Whose entries are here</h3>\n'
            '          <p class="nar">%s</p>\n        </section>\n'
            '        <section class="block">\n          <h3>What cannot be done here</h3>\n'
            '          <p class="nar">%s</p>\n        </section>\n'
            '      </div>\n%s    </aside>\n'
            ) % (narrowing, count, span, RETENTION, whose, cannot, foot)

FOOT = ('      <div class="pane-foot">\n'
        '        <a class="btn btn--primary" href="entry.html">Open the newest entry '
        '<span class="key">Enter</span></a>\n'
        '        <a class="btn btn--quiet" href="case.html">The live case</a>\n'
        '        <a class="btn btn--quiet" href="log.html">The whole log</a>\n'
        '      </div>\n')

# ---------------------------------------------------------------------------- the page
# current='log', because 5.6 sits under the Log item of 0.2 and nowhere else.
# 0.3 reads the tenant rather than the fleet: the view is narrowed to one case at one tenant,
# and 0.3 redraws on tenant change. Same two parts entry.html and queue-escalated.html carry.
ANNUN = (", annun:{ lead:'LARKFIELD LOGISTICS', parts:["
         "'acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

def page(fname, title, h1, rows, foot_count, pane):
    Q.page(fname, title, 'live',
           L.z4(chips(), h1, L.grid(L.rows(rows, href='entry.html')), L.LFOOT % foot_count),
           pane, current='log', extra_script=ANNUN)

# ---------------------------------------------------------------------------- 1. default
page('case-history.html', 'History of one case',
     '<b>3 entries</b> <span class="dim">C-4417 at Larkfield Logistics, every action and every '
     'override, both actors, in order</span>',
     BASE_ROWS,
     '3 of 3, the whole life of this case so far',
     covers('Case <b>C-4417</b> at Larkfield Logistics. <b>One chip</b>, and no other filter: '
            'a case is a thing with a beginning',
            '3', '<b>2026-08-22T04:12:09Z</b> to <b>2026-08-22T04:41:12Z</b>',
            'Nothing here edits anything, and there is no control that could. A mistake becomes a '
            '<b>second entry</b> beside the first. This case has not needed one.',
            foot=FOOT))

# ---------------------------------------------------------------------------- 2. superseded
# 5.1 question 2, settled before stage 04: "Both render in place, the superseded one marked."
# log.html draws that pair at Meridian Health. This is the same treatment, not a second one:
# the same is-superseded hatch, the same solid `superseded` chip, the same two sentences under
# the decision, and the original decision text left exactly as it was written.
page('case-history-superseded.html', 'History of one case, a superseded entry',
     '<b>5 entries</b> <span class="dim">C-4417 at Larkfield Logistics, one of them superseded '
     'and both of that pair still here</span>',
     SUPERSEDED_ROWS,
     '5 of 5, including one entry that was corrected rather than changed',
     covers('Case <b>C-4417</b> at Larkfield Logistics. <b>One chip</b>, and the corrected '
            'ruling is inside it rather than filtered out of it',
            '5', '<b>2026-08-22T04:12:09Z</b> to <b>2026-08-22T06:11:47Z</b>',
            'Nothing here edits anything. A mistake becomes a <b>second entry</b>, which is why '
            'the pair above is two rows rather than one corrected one. <b>The 05:58 ruling still '
            'says what it said.</b>',
            whose='Both of them, in one stream, and on this case that is three: Clerk filed it, '
            'R. Idrissi handed it on, S. Varga ruled and then corrected himself. <b>There is no '
            'separate automation log</b>, because two streams could disagree about this case.',
            foot=FOOT))

print('generated 2 case history pages')
