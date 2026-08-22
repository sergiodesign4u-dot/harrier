# -*- coding: utf-8 -*-
# Node 2.1, Shift brief. Seven pages, one per state of the node's own state matrix.
#
# Page type C, and it is the ONE type in the whole block bank with no domain reference
# anywhere: three Refero searches returned calendars and changelogs, and PagerDuty's on call
# handoff article is gone. So nothing below is copied from a page somebody opened. Every block
# traces to a row of the node's own block table, which names its origin as transfer, evidence
# or ours, and the eight are drawn in that table's priority order.
#
# Two things this screen does that no other screen in the product does:
#   1. it has TWO readers. `shift.html` is the incoming analyst and `shift-outgoing.html` is
#      the outgoing one reading the same node mid shift. One screen in two roles, not two screens
#   2. it is the only surface allowed wall clock time, `19:00 to 07:00 UTC`, because it is the
#      only one answering "which shift". Everywhere else time is elapsed or ISO 8601 UTC
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

INLINE = C.INLINE + """
/* INLINE: shift :: for reconcile into _wf.css
   The brief has no list to scroll and no scope bar, so Z4 is a column of sections rather
   than a grid. Everything a queue or a log already owns is reused, not restated. */

/* Z4 body. One scroller, so a section never gets its own scrollbar inside the page */
.brief{flex:1 1 auto;overflow-y:auto;min-height:0;padding:var(--s5) var(--s4);
       display:flex;flex-direction:column;gap:var(--s6)}
.brief .rows{flex:0 0 auto;overflow:visible;border-top:var(--line)}
/* `.block > h3` is the pane's heading, and in the pane it sits under the pane title. Here
   there is no pane title above it, so the section heading is an h2 and takes the same face. */
.block > h2{margin:0;font:600 var(--t-xs)/1 var(--mono);letter-spacing:.1em;
            text-transform:uppercase;color:var(--soft)}

/* Blocks 2 and 3, the counted lines. A LINE and not a card: the block table rules out the
   metric card by name, and a number in a box is one. The count sits in a column so the eye
   reads down the numbers, and the destination sits at the end of the line or says there is none. */
.bline{display:grid;grid-template-columns:52px minmax(0,1fr) auto;gap:var(--s3);
       align-items:baseline;padding:var(--s3) var(--s2);border-bottom:var(--line);
       text-decoration:none;color:inherit;font-size:var(--t-sm)}
.bline:first-of-type{border-top:var(--line)}
a.bline:hover{background:var(--fill)}
.bline .n{font:700 var(--t-lg)/1 var(--mono);text-align:right}
.bline .n.is-quiet{color:var(--soft)}
.bline .go{font-family:var(--mono);font-size:var(--t-xs);color:var(--soft);white-space:nowrap}
.bline .ex{display:block;color:var(--soft);margin-top:var(--s1)}

/* Block 4, what moved. The canonical row with four slots instead of seven. No severity and
   no `to check`: a pointer is not a thing to triage, it is a thing that already happened. */
.rows--moved{--row-tracks:132px minmax(0,1fr) 116px 44px}
.rows--moved .when{font-family:var(--mono);font-size:var(--t-xs);color:var(--soft);text-align:right}
.rows--moved .states{display:flex;flex-wrap:wrap;gap:var(--s1);align-content:start}
.rows--moved .states .chip{white-space:normal;text-align:center}

/* Block 7, the rota. Harrier READS this from the provider's on call tool and never owns it,
   so there is no control in it, only the name 4.6 needs. */
.rota{display:flex;flex-direction:column;border:var(--line);border-radius:var(--radius)}
.rota > div{display:flex;gap:var(--s2);align-items:baseline;padding:var(--s2) var(--s3);
            border-bottom:var(--line);font-size:var(--t-sm)}
.rota > div:last-child{border-bottom:none}
.rota .who{font-weight:600;white-space:nowrap}
.rota .role{color:var(--soft);font-size:var(--t-xs)}
.rota .when{margin-left:auto;font-family:var(--mono);font-size:var(--t-xs);color:var(--soft);
            white-space:nowrap}
.rota .is-now{background:var(--fill)}

/* The fleet row, block 5, reused inside a padded pane body instead of directly in the aside */
.pane-body .frow{padding-left:0;padding-right:0}

/* 2.1 section 8: NOT rendered at 360. Coming on shift happens at a desk with two monitors,
   which is the premise in CLAUDE.md, and the phone has one scenario that is not this one.
   One dependency crosses the boundary and it is DATA, not screen: 4.6 renders at 360 and
   names a recipient from the rota this node displays. It reads the value; it does not need
   the page. So the narrowed rendering says that rather than folding eight blocks into a column. */
@media (max-width:900px){
  .z4--shift .brief,.z4--shift .qfoot{display:none}
  .z4--shift .only-narrow{margin:var(--s4)}
}"""
Q.INLINE = INLINE   # page() renders the module level constant, so hand it ours

WINDOW = '19:00 to 07:00 UTC'

# ---------------------------------------------------------------------------- Z4 furniture
NARROW_NOTE = ('      <div class="banner only-narrow"><span><b>The shift brief is a desk surface.</b> '
               'Coming on shift happens at a desk with two monitors, which is the premise the '
               'whole product is drawn from. The phone has one scenario here, a paged case read '
               'and escalated, and reading a twelve hour handover is not it.<br><br>'
               'One thing on this page does cross to the phone, and it is <b>data rather than '
               'screen</b>: the escalate dialog names <b>S. Varga</b> from the rota this node holds, and it '
               'reads that value without this page rendering.</span>'
               '<span class="act"><a class="btn" href="queue.html">Open the queue</a></span></div>\n')


def z4(h1, body, foot):
    return ('    <section class="z4 z4--shift" aria-labelledby="sh">\n'
            '      <h1 id="sh" class="readout">%s</h1>\n\n%s'
            '      <div class="brief">\n%s      </div>\n\n%s    </section>\n\n'
            ) % (h1, NARROW_NOTE, body, foot)


def h1(role, tail=''):
    return '<b>%s</b> <span class="dim">%s%s</span>' % (WINDOW, role, tail)


def foot(lead):
    return ('      <p class="qfoot">\n        <span>%s</span>\n'
            '        <span><kbd>&uarr;</kbd> <kbd>&darr;</kbd> read the pointers</span>\n'
            '        <span><kbd>Enter</kbd> opens the case a line points at</span>\n'
            '        <span>order: what waits, then what moved, newest first</span>\n'
            '      </p>\n') % lead


def sect(title, inner):
    return '        <section class="block">\n          <h2>%s</h2>\n%s        </section>\n' % (title, inner)


# ---------------------------------------------------------------------------- block 2 and 3
def bline(n, label, go, href=None, quiet=False, ex=''):
    tag = 'a' if href else 'div'
    attr = ' href="%s"' % href if href else ''
    exhtml = '<span class="ex">%s</span>' % ex if ex else ''
    return ('          <%s class="bline"%s><span class="n%s">%s</span>'
            '<span>%s%s</span><span class="go">%s</span></%s>\n'
            ) % (tag, attr, ' is-quiet' if quiet else '', n, label, exhtml, go, tag)


WAITS_LABEL = 'waiting on a decision <b>across 12 of 40 tenants</b> in your scope'
WAITS_EX = ('One of the eighteen has been waiting since before this shift: <b>Halden Freight</b>, '
            'impossible travel across two offices, still open on the client&rsquo;s VPN rollout.')
WAITS = bline('18', WAITS_LABEL, 'open the queue &rarr;', href='queue.html', ex=WAITS_EX)
# Sealed and close failed freeze the counts, so the same line loses its destination and says so
def waits_frozen(go='frozen at the seal'):
    return bline('18', WAITS_LABEL, go, ex=WAITS_EX)
WAITS_FROZEN = waits_frozen()

# Block 3 names a count and has nowhere to send you, and that is the specification rather than
# an omission: the analyst side review lane maps to no formulated job, so the shape of the gap
# is drawn instead of being closed with an invented screen.
CLERK_ALONE = bline('1', 'closed by Clerk alone, inside that tenant&rsquo;s latitude',
                    'nowhere to review', quiet=True,
                    ex='<b>There is nowhere to review these.</b> The count is here because a shift '
                       'where Clerk closed nothing alone and a shift where it closed a dozen are '
                       'different shifts. No screen in this product lists them, and this line does '
                       'not invent one.')


# ---------------------------------------------------------------------------- block 4
MOVED_HEAD = ('        <div class="row row--head" role="row">\n'
              + ''.join('          <span role="columnheader">%s</span>\n' % h for h in
                        ['Client', 'What changed', 'State', 'When'])
              + '        </div>\n')

# Client, what changed, chips, the case it points at. The actor is NOT named: the brief is per
# analyst, settled at the close of 03b, so everything in it is the work of the one person whose
# name is in the heading. Clerk is named because Clerk is the exception.
MOVED = [
    ('Larkfield Logistics',
     'Token replay from a new ASN. <b>Escalated to S. Varga</b>, and no verdict was filed, so it is still open',
     ['escalated'], 'case.html'),
    ('Meridian Health',
     'Mass file rename on one host. Rejected, and <b>the write did not land</b>. The decision exists in this console and nowhere else',
     ['decided', 'unrecorded!'], 'case-unrecorded.html'),
    ('Halcyon Care',
     'Beaconing to a new domain. <b>Contained by Clerk</b>, inside this tenant&rsquo;s latitude, and still open on a person',
     ['acted'], 'case.html'),
    ('Bramber Retail',
     'Mass mailbox rule creation. Upheld: benign, new admin onboarding',
     ['decided'], 'case.html'),
    ('Meridian Health',
     'Credential stuffing on the VPN. Rejected, then amended 34m later. <b>Both entries stand</b>, and the second says what it corrected',
     ['decided'], 'case.html'),
    ('Aubrey Dental Group',
     'Sign in from an unseen device. Upheld, and this tenant still has no baseline to compare against',
     ['decided'], 'case-no-baseline.html'),
]

INCOMING_WHEN = ['2h', '3h', '3h', '5h', '8h', '10h']
OUTGOING_WHEN = ['31m', '1h', '1h', '3h', '6h', '8h']


def moved_rows(whens, frozen=False):
    out = ''
    for (client, what, states, href), when in zip(MOVED, whens):
        st = ''.join('<i class="chip chip--state%s">%s</i>'
                     % (' chip--solid' if s.endswith('!') else '', s.rstrip('!')) for s in states)
        tag, attr = ('div', '') if frozen else ('a', ' href="%s"' % href)
        out += ('        <%s class="row" role="row"%s>\n'
                '          <span class="client" role="gridcell">%s</span>\n'
                '          <span role="gridcell">%s</span>\n'
                '          <span class="states" role="gridcell">%s</span>\n'
                '          <span class="when" role="gridcell">%s</span>\n'
                '        </%s>\n') % (tag, attr, client, what, st, when, tag)
    return out


def moved_grid(whens, frozen=False):
    return ('          <div class="rows rows--moved" role="grid" tabindex="0">\n%s%s          </div>\n'
            % (MOVED_HEAD, moved_rows(whens, frozen)))


MOVED_TAIL = ('          <p class="dim" style="margin:0;font-size:var(--t-xs)">Six moved, and '
              '<b>the Meridian rejection has no log entry</b> because its write never landed. That is '
              'exactly why it is a line here: the log cannot tell the next analyst about a decision '
              'the log never received.</p>\n')


# ---------------------------------------------------------------------------- block 6
NOTES = [
    ('Larkfield Logistics, C-4417', 'case.html',
     'Could not reach the tenant&rsquo;s mail admin to confirm whether the forwarding rule is '
     'sanctioned. S. Varga has it now and wanted a call to the client before 08:00.'),
    ('Meridian Health', 'case-unrecorded.html',
     'The write has failed twice. <b>Do not rule it again:</b> the decision is made and it is the '
     'log entry that is missing, not the verdict.'),
    ('Halden Freight', 'case.html',
     'Nobody at the client answers before 08:00, so the VPN rollout schedule is still unconfirmed. '
     'Sanctioned is the likely answer and it is not the recorded one.'),
]

NOTES_TAIL = ('          <p class="dim" style="margin:0;font-size:var(--t-xs)">A note lives on the '
              '<b>case</b>, not on this page. This is where they can be seen at once, and opening one '
              'opens the case it is attached to.</p>\n')


def notes_read(author='D. Okonkwo'):
    # The author is the analyst whose brief this is: D. Okonkwo on the two pages the incoming
    # analyst reads, R. Idrissi on the one she sealed herself.
    out = ''
    for label, href, text in NOTES:
        out += ('          <div class="expand"><a href="%s">%s</a> <span class="dim">&middot; '
                '%s</span><br>%s</div>\n') % (href, label, author, text)
    return out + NOTES_TAIL


def notes_edit():
    out = ''
    for i, (label, href, text) in enumerate(NOTES, 1):
        plain = text.replace('<b>', '').replace('</b>', '')
        out += ('          <div class="field"><label for="n%d">On %s</label>'
                '<textarea id="n%d" rows="3">%s</textarea></div>\n') % (i, label, i, plain)
    out += ('          <p class="dim" style="margin:0;font-size:var(--t-xs)">What you type here is '
            'written <b>on the case</b>. The brief is not a document you author: the structured half '
            'above is assembled from what actually happened, and this is the half only a person can '
            'write.</p>\n')
    return out


# ---------------------------------------------------------------------------- the pane
def latitude_block(rows=None, tail=None):
    rows = rows if rows is not None else [
        ('Meridian Health', 'Investigate', '31 of 36', 'was 34 of 36')]
    inner = ''
    if rows:
        inner = ('          <div class="frow frow--head"><span>Tenant</span>'
                 '<span>Acts alone up to</span><span class="rec">Record</span></div>\n')
    for t, lat, rec, was in rows:
        inner += ('          <a class="frow" href="queue.html"><span>%s</span><span>%s</span>'
                  '<span class="rec">%s<span class="was">%s</span></span></a>\n') % (t, lat, rec, was)
    inner += ('          <p class="dim" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">%s</p>\n'
              % (tail if tail is not None else
                 '<b>Meridian Health moved down</b>, from contain endpoint to investigate, after two '
                 'rulings went against Clerk here. 1 of 40 tenants moved this shift and the other 39 '
                 'held. A row opens the fleet at that tenant.'))
    return sect('Latitude that changed', inner)


def rota_block(now_who='R. Idrissi', now_role='analyst, on the console'):
    inner = ('          <div class="rota">\n'
             '            <div class="is-now"><span class="who">%s</span>'
             '<span class="role">%s</span><span class="when">%s</span></div>\n'
             '            <div><span class="who">D. Okonkwo</span>'
             '<span class="role">analyst, next on</span><span class="when">from 07:00</span></div>\n'
             '            <div><span class="who">S. Varga</span>'
             '<span class="role">SOC lead, takes escalations</span>'
             '<span class="when">until 07:00</span></div>\n'
             '          </div>\n'
             '          <p class="dim" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">'
             '<b>Read from the provider&rsquo;s on call tool, never owned here.</b> There is no control '
             'in this block because Harrier cannot change who is on. This is the value the escalate '
             'dialog names when it says who a case goes to.</p>\n') % (now_who, now_role, WINDOW)
    return sect('Who is on', inner)


def pane(sub, blocks, footer):
    return ('    <aside class="z5" aria-labelledby="ph">\n'
            '      <div class="pane-head">\n        <h2 id="ph">The shift</h2>\n'
            '        <p class="sub">%s</p>\n      </div>\n'
            '      <div class="pane-body">\n%s      </div>\n%s    </aside>\n') % (sub, blocks, footer)


def pfoot(buttons):
    return '      <div class="pane-foot">\n' + ''.join(
        '        <a class="btn%s" href="%s">%s%s</a>\n'
        % (cls, href, label, (' <span class="key">%s</span>' % key) if key else '')
        for label, key, href, cls in buttons) + '      </div>\n'


def page(fname, title, strip, h1_html, body, footlead, pane_sub, pane_blocks, pane_foot):
    return Q.page(fname, title, strip,
                  z4(h1_html, body, foot(footlead)),
                  pane(pane_sub, pane_blocks, pane_foot),
                  current='shift')


PANE_REST = latitude_block() + rota_block()

# ============================================================================ 1. incoming
page('shift.html', 'Shift brief', 'live',
     h1('R. Idrissi coming on &middot; D. Okonkwo going off'),
     sect('What waits on a decision', WAITS + CLERK_ALONE)
     + sect('What moved this shift', moved_grid(INCOMING_WHEN) + MOVED_TAIL)
     + sect('Notes left on cases', notes_read()),
     '6 pointers, and every one of them opens a case',
     'Handed from D. Okonkwo. Twelve hours, and what is left of them',
     PANE_REST,
     pfoot([('Start on the queue', 'Enter', 'queue.html', ' btn--primary'),
            ('Open the case S. Varga has', '', 'case.html', ' btn--quiet')]))

# ============================================================================ 2. outgoing, role
# The same node, read by the analyst handing over. Not a different screen: the counts are the
# same counts still growing, the notes are the same notes still editable, and Seal appears.
page('shift-outgoing.html', 'Shift brief, handing over', 'live',
     h1('R. Idrissi, open &middot; 2h to go &middot; D. Okonkwo takes it at 07:00'),
     '        <div class="banner banner--quiet"><span><b>This has been accumulating since 19:00.</b> '
     'It is not written at the end of the shift, which is where handovers fail. Clerk has been '
     'adding to it all night and you add to the <b>cases</b>, never to this page.</span></div>\n'
     + sect('What waits on a decision', WAITS + CLERK_ALONE)
     + sect('What moved this shift, so far', moved_grid(OUTGOING_WHEN) + MOVED_TAIL)
     + sect('Notes you left on cases', notes_edit()),
     '6 pointers so far, and the count is still moving',
     'Yours, open, and it seals when you say so',
     PANE_REST,
     pfoot([('Seal the brief', 'Enter', 'shift-sealed.html', ' btn--primary'),
            ('Back to the queue', '', 'queue.html', ' btn--quiet')]))

# ============================================================================ 3. assembling, 2.2
GATHER = (bline('7', 'entries read from the decision log for this window', 'done', quiet=True)
          + bline('6', 'cases whose state changed, correlated', 'done', quiet=True)
          + bline('&ndash;', 'counting what waits on a decision', 'counting', quiet=True)
          + bline('1', 'tenant whose latitude moved, read from the fleet', 'done', quiet=True)
          + bline('&ndash;', 'the rota, read from the provider&rsquo;s on call tool', 'counting', quiet=True)
          + bline('3', 'notes left on cases', 'done', quiet=True))

page('shift-assembling.html', 'Shift brief, assembling', 'arriving',
     h1('assembling &middot; R. Idrissi coming on &middot; D. Okonkwo going off'),
     '        <div class="arriving" aria-label="Assembling the brief"></div>\n'
     + sect('What is being gathered', GATHER
            + '          <p class="dim" style="margin:0;font-size:var(--t-xs)">'
              '<b>Named, not a spinner.</b> A brief is a claim about coverage, so what it is still '
              'reading is the one thing worth showing while it reads. Two lines are outstanding and '
              'both say which.</p>\n')
     + sect('What this resolves into', '          <p class="empty" style="padding:var(--s5)">'
            '<b>It resolves two ways, and both are drawn.</b>\n'
            '          Either <a href="shift.html">six cases moved and eighteen are waiting</a>, '
            'or <a href="shift-nothing-carried.html">nothing carried over</a>, which is the good '
            'outcome and not a failure.</p>\n'),
     'assembling, no pointers drawn yet',
     'Being assembled from the record, not written from memory',
     latitude_block(tail='<b>Answered first.</b> The fleet reads a 30 day window rather than this '
                         'shift, so it does not have to wait for the shift to finish being counted.')
     + rota_block(),
     # 2.2 has no seal. The brief cannot be sealed while it is still being assembled, so the
     # pane carries no footer at all rather than a control that would have to be explained away.
     '')

# ============================================================================ 4. nothing carried, 2.3
# A quiet shift is the good outcome. The empty state says WHAT WAS QUIET, which is information,
# rather than "nothing to show", which is an apology.
QUIET = (bline('0', 'waiting on a decision, across 40 tenants in scope', 'nothing to open', quiet=True)
         + bline('0', 'cases moved', 'nothing to open', quiet=True)
         + bline('3', 'closed by Clerk alone, inside each tenant&rsquo;s latitude', 'nowhere to review',
                 quiet=True,
                 ex='Same line as on a busy shift, and it still has nowhere to go.'))

page('shift-nothing-carried.html', 'Shift brief, nothing carried over', 'live',
     h1('R. Idrissi, open &middot; nothing carried over &middot; D. Okonkwo takes it at 07:00'),
     '        <div class="banner"><span><b>Nothing carried over, and that is the good outcome.</b> '
     'Twelve hours, three cases Clerk closed on its own, and nothing that needed a person. The '
     'brief is short because the shift was quiet, not because something failed.</span></div>\n'
     + sect('What the shift came to', QUIET)
     + sect('What was quiet, and what was only silent',
            '          <p class="nar"><b>Meridian Health and Bramber Retail produced nothing.</b> '
            'Both are usually the loudest tenants overnight, so their silence is the part of this '
            'worth reading.</p>\n'
            '          <p class="nar"><b>Norsk Marine is silent for a different reason.</b> Its '
            'assets were offline for <b>6h</b>, which is normal at that tenant and is not the same '
            'as quiet. Nothing was reported, so nothing can be said about it.</p>\n'
            '          <p class="dim" style="margin:0;font-size:var(--t-xs)">Two kinds of nothing, '
            'and they are not interchangeable. A brief that showed one blank for both would be '
            'telling the incoming analyst something untrue.</p>\n')
     + sect('Notes left on cases',
            '          <div class="tomb"><b>No notes, because there were no cases.</b> Nothing is '
            'missing here: the prose half of a brief is written on cases, and this shift produced '
            'none to write on.</div>\n'),
     'no pointers, and that is the answer rather than an empty list',
     'Yours, open, and short because the shift was quiet',
     latitude_block(rows=[], tail='<b>No tenant moved.</b> Forty held their latitude for twelve '
                                  'hours, which is what a quiet shift looks like in the fleet.')
     + rota_block(),
     pfoot([('Seal the brief', 'Enter', 'shift-sealed.html', ' btn--primary'),
            ('Back to the queue', '', 'queue.html', ' btn--quiet')]))

# ============================================================================ 5. sealed, 2.4
page('shift-sealed.html', 'Shift brief, sealed', 'live',
     h1('sealed by R. Idrissi, 2m ago &middot; D. Okonkwo takes it at 07:00'),
     '        <div class="banner"><span><b>Sealed. D. Okonkwo reads it as it stands.</b> Nothing here '
     'changes now, and taking the shift is how he acknowledges it: there is no second control to '
     'press, because the busiest minute of the day does not need one.</span></div>\n'
     + sect('What waits on a decision', WAITS_FROZEN + CLERK_ALONE)
     + sect('What moved this shift', moved_grid(OUTGOING_WHEN, frozen=True)
            + '          <p class="dim" style="margin:0;font-size:var(--t-xs)"><b>Frozen.</b> '
              'Nothing on this page changes now. D. Okonkwo reads it as it stands, and his own '
              'pointers are live because the brief he opens is his.</p>\n')
     + sect('Notes left on cases', notes_read(author='R. Idrissi')),
     '6 pointers, frozen at the seal',
     'Sealed by R. Idrissi, 2m ago',
     PANE_REST,
     pfoot([('Sign out', '', 'index.html', ' btn--primary'),
            ('Back to the queue', '', 'queue.html', ' btn--quiet')]))

# ============================================================================ 6. close failed, 2.5
# The ONLY failure in the product addressed to two people. An unsealed brief is a problem for
# the person leaving and for the person arriving, and telling only one of them recreates exactly
# the diligence dependency the handover evidence describes.
page('shift-close-failed.html', 'Shift brief, the close did not write', 'live',
     h1('R. Idrissi, <b>unsealed</b> &middot; the close did not write &middot; D. Okonkwo takes it at 07:00'),
     '        <div class="banner"><span><b>The brief did not seal, 40s ago.</b> It stays open and it stays '
     'readable, and <b>both of you have been told</b>: you, and D. Okonkwo, who is about to read it. '
     'Telling only the person leaving would put the handover back on one person remembering.</span>'
     '<span class="act"><a class="btn btn--primary" href="shift-sealed.html">Try again</a></span></div>\n'
     + sect('What waits on a decision', waits_frozen('frozen at the attempt') + CLERK_ALONE)
     + sect('What moved this shift', moved_grid(OUTGOING_WHEN, frozen=True)
            + '          <p class="dim" style="margin:0;font-size:var(--t-xs)"><b>Frozen at the '
              'attempt.</b> The counts stopped when the seal was tried, so what is on screen is what '
              'would have been sealed. Nothing was lost.</p>\n')
     + sect('Notes you left on cases', notes_edit()),
     '6 pointers, frozen at the attempt. The brief is still open',
     'Yours, and still open. The seal is what failed, not the brief',
     PANE_REST,
     pfoot([('Try again', 'Enter', 'shift-sealed.html', ' btn--primary'),
            ('Leave it open and go', '', 'shift-outgoing.html', ' btn--quiet')]))

# ============================================================================ 7. nobody sealed it
# Settled at the close of 03b: the incoming analyst gets it MARKED UNSEALED, assembled by Clerk
# from the record with the prose half missing. Worse than a sealed brief and not nothing, and
# the difference is visible, which is the same rule that governs `escalated` and `unrecorded`.
page('shift-unsealed.html', 'Shift brief, nobody sealed it', 'live',
     h1('<b>never sealed</b> &middot; R. Idrissi coming on &middot; D. Okonkwo went off'),
     '        <div class="banner"><span><b>Nobody sealed this brief.</b> D. Okonkwo left without closing '
     'it, so what you are reading was assembled by Clerk from the record alone. <b>The counted half '
     'is complete and the written half is missing</b>, and this page says which is which rather '
     'than reading like a brief somebody wrote.</span></div>\n'
     + sect('What waits on a decision, from the record', WAITS + CLERK_ALONE)
     + sect('What moved this shift, from the record', moved_grid(INCOMING_WHEN)
            + '          <p class="dim" style="margin:0;font-size:var(--t-xs)"><b>This half did not '
              'depend on anyone.</b> Clerk builds it from what happened, which is the whole reason '
              'the brief is structured rather than written.</p>\n')
     + sect('Notes left on cases',
            '          <div class="tomb"><b>Nothing here, and it is a loss rather than a blank.</b> '
            'Three cases moved with something a person would have had to explain: why Larkfield went '
            'to S. Varga, why the Meridian write is still unrecorded, and what the client said about '
            'Halden Freight. None of it was written down.<br><br>'
            'The cases themselves still hold their own history, so the answer is on <b>each case</b> '
            'rather than here, and it costs a case at a time instead of one page.</div>\n'),
     '6 pointers from the record, and no notes',
     'Never sealed. Assembled by Clerk, unsigned by anyone',
     PANE_REST,
     pfoot([('Start on the queue', 'Enter', 'queue.html', ' btn--primary'),
            ('Open the case S. Varga has', '', 'case.html', ' btn--quiet')]))

print('generated 7 shift pages')
