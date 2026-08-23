# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

INLINE = C.INLINE + """
/* 5.4 has no pane. It is the artefact the lists point at, so it is one column and a frame. */
.frame{width:min(var(--frame),100%);margin:var(--s5) auto;border:2px solid var(--ink);
       border-radius:var(--radius);background:var(--paper);display:flex;flex-direction:column}
/* Mechanism 1 of the node, in one property: the marking is a FRAME, not a banner.
   A banner scrolls away, and someone who arrives by permalink and reads the middle must
   still know what they are reading. So the top rail sticks and the border never leaves. */
.rail{position:sticky;top:0;z-index:2;background:var(--ink);color:var(--paper);
      font:600 var(--t-xs)/1.3 var(--mono);letter-spacing:.09em;text-transform:uppercase;
      padding:var(--s2) var(--s4);display:flex;gap:var(--s3);flex-wrap:wrap;align-items:baseline}
.rail .soft{font-weight:400;text-transform:none;letter-spacing:0;opacity:.72}
.rail .rail-out{margin-left:auto;color:inherit;white-space:nowrap;
                border:1px solid currentColor;border-radius:var(--radius);padding:0 var(--s2)}
.rail--foot .rail-out{display:none}
.rail--foot{position:static;background:var(--fill);color:var(--soft);border-top:2px solid var(--ink);
            text-transform:none;letter-spacing:0;font-weight:400;font-size:var(--t-sm)}
.doc{padding:var(--s5) var(--s4);display:flex;flex-direction:column;gap:var(--s5)}
.doc h1{margin:0;font:600 var(--t-xl)/var(--lh-tight) var(--ui)}
.doc h1 .stampline{display:block;font:400 var(--t-sm)/1.4 var(--mono);color:var(--soft);
                   margin-top:var(--s2);overflow-wrap:anywhere}
.gone-all{border:2px dashed var(--soft);border-radius:var(--radius);padding:var(--s5);
          text-align:center;color:var(--soft)}
.gone-all b{color:var(--ink);display:block;font-size:var(--t-lg);margin-bottom:var(--s3)}
/* 7b, settled at the close of 03b: this is the artefact that leaves the building.
   In print every expansion is open, the address is on the page, and the panel is gone. */
@media print{
  #sidebar,.z1,.z2{display:none}
  /* true black on true white, and not the screen greys: --ink is #16181a, which prints as
     a wash. The one place in the stage where a literal colour is correct, said out loud
     here because two critique instruments flagged it independently at step 9. */
  .frame{border:2px solid #000;margin:0}
  .rail{position:static;background:#fff;color:#000;border-bottom:2px solid #000}
  .expand{display:block}
  .doc{padding:16pt}
}"""
Q.INLINE = INLINE

ADDR_ID = 'e-88214'

def rail(asof, extra=''):
    # The record runs to three viewports at 360 and its only exits were at the foot of it.
    # The rail is the one element that never leaves, so the way back rides in it.
    return ('      <p class="rail">AS IT STOOD <b>%s</b><span class="soft">%s</span>'
            '<a class="rail-out" href="log.html">Open the log</a></p>\n'
            ) % (asof, extra or 'A record of what was known then. This is not the live case.')

def foot_rail(asof):
    return ('      <p class="rail rail--foot">End of the record as it stood %s. Nothing below this line, '
            'and nothing on this page, can be edited.</p>\n') % asof

def page(fname, title, asof, body, rail_extra='', current='log'):
    z4 = ('    <section class="z4 z4--entry">\n'
          '      <article class="frame">\n%s%s%s      </article>\n    </section>\n\n'
          ) % (rail(asof, rail_extra), body, foot_rail(asof))
    Q.page(fname, title, 'live', z4, '', current=current,
           extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> accepted, 30 days'] }")

# ---------------------------------------------------------------------------- reusable blocks
def heading(case, client, when, sub=''):
    return ('        <h1>%s &middot; %s\n          <span class="stampline">Decided <b>%s</b>%s</span>\n        </h1>\n'
            ) % (case, client, when, sub)

VERDICT_ESC = """        <section class="block">
          <h3>What was decided, and by whom</h3>
          <p class="nar"><b>Escalated, not ruled.</b> Handed to S. Varga, SOC lead, by R. Idrissi through the provider&rsquo;s on call tool. Clerk&rsquo;s conclusion, <b>real, contain identity</b>, stands unruled.</p>
          <p class="nar"><b>No reason code, and that is correct rather than missing.</b> The taxonomy in 0.7 routes rejections to tuning. An escalation routes to a person, so what it carries is the handover below.</p>
        </section>
        <section class="block">
          <h3>The handover, as it was written</h3>
          <p class="nar"><b>What I checked.</b> Correlated the token against the corporate range and confirmed the same correlationId on both sign ins.</p>
          <p class="nar"><b>What I could not do.</b> Could not reach the client&rsquo;s mail admin to confirm whether the forwarding rule is sanctioned.</p>
          <p class="nar"><b>What I need from you.</b> A call to the client, and a decision on whether to disable the account before 08:00.</p>
        </section>
"""

def evidence(gone=None):
    out = '        <section class="block">\n          <h3>The evidence as it stood, 9 signals</h3>\n'
    out += ('          <div class="claim"><span class="txt">A refresh token was presented from <b>ASN 41xxx</b>, '
            'first time for this tenant</span><span class="src">Entra sign in</span></div>\n')
    if gone == 'entra':
        out += ('          <div class="tomb">Two signals from <b>Exchange audit</b> stood here and are no longer '
                'retrievable. The source aged out of the tenant&rsquo;s own retention on <b>2026-08-14</b>. '
                'What was here is recorded; what it said is not.</div>\n')
    else:
        out += ('          <div class="claim"><span class="txt">The same token was used from the corporate range '
                '<b>4 minutes earlier</b></span><span class="src">Entra sign in</span></div>\n'
                '          <div class="expand">Field <code>correlationId</code> matches across both sign ins, which '
                'is what makes it the same token rather than two. Read from the tenant&rsquo;s own log, '
                '04:08 to 04:12 UTC.</div>\n'
                '          <div class="claim"><span class="txt">An inbox rule was created <b>90 seconds later</b>, '
                'forwarding to an external address</span><span class="src">Exchange audit</span></div>\n')
    out += ('          <div class="claim claim--absence"><span class="txt"><span class="tag">not found</span>no password change, and no new device '
            'enrolment</span><span class="src">Entra, EDR</span></div>\n'
            '          <div class="claim claim--against"><span class="txt"><span class="tag">points the other way</span>this user has travelled to this region '
            'twice in 90 days</span><span class="src">tenant baseline</span></div>\n'
            '          <p class="anote"><b>What Clerk looked for '
            'and did not find is part of the record</b>, and so is the one signal that argued the other way. '
            'An evidence trail that keeps only the supporting half is an argument, not a record.</p>\n'
            '        </section>\n')
    return out

def latitude_then(date='2026-08-22', record='<b>34 of 36</b> accepted over the 30 days to 2026-08-22'):
    rows = [('Investigate','on',''), ('Contain endpoint','on',''),
            ('Contain identity','off','not reversible without the client, so it asked'),
            ('Contain network','off','not reversible without the client, so it asked'),
            ('Remove content','off','destructive, so it always asks'),
            ('Change policy','off','destructive, so it always asks')]
    out = ('        <section class="block">\n          <h3>What Clerk was permitted to do here, on %s</h3>\n'
           '          <div class="lat">\n') % date
    for label, st, why in rows:
        if st == 'on':
            cls = ' class="ceiling"' if label == 'Contain endpoint' else ''
            out += '            <div%s><span class="mark">yes</span><span>%s</span></div>\n' % (cls, label)
        else:
            out += ('            <div class="off"><span class="mark">no</span><span>%s</span>'
                    '<span class="why">%s</span></div>\n') % (label, why)
    out += ('          </div>\n'
            '          <p class="nar nar--sep">The record that stood behind the grant on that '
            'date: %s.</p>\n'
            '          <p class="anote">An auditor rarely asks '
            'whether this was the right call. They ask <b>why the machine was allowed to do that</b>, and a settings '
            'page cannot answer it: it shows the grant now, and the grant may have been widened twice since. '
            '<b>3.5 shows the present. This shows the past, and only one of the two is evidence.</b></p>\n'
            '        </section>\n') % record
    return out

def address(asof, entry=ADDR_ID):
    return ('        <section class="block">\n          <h3>The address of this record</h3>\n'
            '          <div class="addr"><code>/log/%s?as-of=%s</code>'
            '<a class="btn" href="entry.html">Copy the address</a></div>\n'
            '          <p class="anote">The address is the artefact. '
            'Without <code>?as-of</code> it resolves to this entry&rsquo;s own decision time, and the product writes '
            'the parameter into every link it generates so a copied address never depends on a default.</p>\n'
            '        </section>\n') % (entry, asof)

def retention(until='2026-11-20T04:14:05Z'):
    return ('        <p class="prov"><b>This snapshot stays retrievable until %s</b>, from your provider&rsquo;s '
            'contract. The verdict record above is kept for the life of the record. '
            '<b>You learn the window here rather than from a failure.</b></p>\n') % until

def live(text=None):
    return ('        <section class="block">\n          <h3>Open the live case</h3>\n'
            '          <p class="nar">%s</p>\n'
            '          <p class="wrapline">'
            '<a class="btn" href="case.html">Open C-4417 as it is now</a>'
            '<a class="btn btn--quiet" href="log-selected.html">Open this entry in the log</a></p>\n'
            '        </section>\n'
            ) % (text or 'A different thing, named and linked rather than shown beside this one. '
                         'Current values next to historical ones is the confusion, not the cure.')

NO_CONTROLS = ('        <p class="anote">'
               '<b>There are no verdict controls on this page, at any width.</b> You cannot rule on the past, and an '
               '<code>Accept</code> here would be a second decision wearing the first one&rsquo;s date.</p>\n')

ASOF = '2026-08-22T04:14:05Z'
WHEN = '2026-08-22T04:41:12Z'

# ---------------------------------------------------------------------------- 1. full snapshot
page('entry.html', 'Log entry, the full snapshot', ASOF,
     '      <div class="doc">\n'
     + heading('C-4417', 'Larkfield Logistics', WHEN,
               ' &middot; snapshot read 27m before the ruling')
     + VERDICT_ESC + evidence()
     + '        <p class="prov"><b>6 sources</b> queried over <b>24h</b> as it stood: Entra ID, Exchange audit, EDR, '
       'proxy, threat intel, tenant baseline.</p>\n'
     + '        <section class="block">\n          <h3>Normal at this tenant, on that date</h3>\n'
       '          <p class="nar"><b>2 token replays</b> at Larkfield Logistics in the 90 days to 2026-08-22, both '
       'real. That is the base rate <b>on that date</b>, and it is not the base rate now.</p>\n        </section>\n'
     + latitude_then() + retention() + address(ASOF) + live() + NO_CONTROLS
     + '      </div>\n')

# ---------------------------------------------------------------------------- 2. partly gone
page('entry-partial.html', 'Log entry, partly gone', ASOF,
     '      <div class="doc">\n'
     + heading('C-4417', 'Larkfield Logistics', WHEN, ' &middot; 4 of 6 sources retained')
     + VERDICT_ESC
     + '        <div class="banner"><b>The decision is always retained, whatever happened to the evidence.</b> '
       'Two of the six sources are gone and the record above is untouched by that.</div>\n'
     + evidence(gone='entra')
     + '        <p class="prov"><b>6 sources</b> were queried over <b>24h</b>. <b>4 retained</b>, and <b>2 no longer '
       'retrievable</b>: Exchange audit and proxy aged out of the tenant&rsquo;s own retention on 2026-08-14. '
       'The two counts are kept apart on purpose, because &ldquo;4 sources&rdquo; and &ldquo;4 of 6 sources&rdquo; are '
       'different claims and only one of them is true here.</p>\n'
     + '        <section class="block">\n          <h3>Normal at this tenant, on that date</h3>\n'
       '          <p class="nar"><b>2 token replays</b> at Larkfield Logistics in the 90 days to 2026-08-22, both '
       'real. Retained.</p>\n        </section>\n'
     + latitude_then() + retention() + address(ASOF) + live() + NO_CONTROLS
     + '      </div>\n')

# ---------------------------------------------------------------------------- 3. nothing survived, 5.5
ASOF_OLD = '2026-06-08T22:39:11Z'
page('entry-gone.html', 'Log entry, nothing survived', ASOF_OLD,
     '      <div class="doc">\n'
     + heading('C-3180', 'Norsk Marine', '2026-06-08T22:41:03Z', ' &middot; the snapshot did not survive')
     + '        <section class="block">\n          <h3>What was decided, and by whom</h3>\n'
       '          <p class="nar">Clerk concluded <b>real, contain endpoint</b>, and D. Okonkwo accepted it. '
       '<b>That is recorded and it is not going anywhere.</b> No control on this page could change it if anyone '
       'wanted to.</p>\n        </section>\n'
     + '        <section class="block">\n          <h3>The evidence as it stood, 14 signals</h3>\n'
       '          <div class="tomb"><b>None of it survived.</b> The stored snapshot failed its integrity check on '
       '<b>2026-07-30T03:14:02Z</b>. <b>That failure is itself an entry</b>, written by the system and readable like '
       'any other, because a record that can lose things quietly is not a record.<br><br>'
       'What was decided is above. What it was decided on is gone, and this frame says so rather than showing a blank '
       'and letting you assume there was nothing here.</div>\n        </section>\n'
     + '        <p class="prov">6 sources were queried over 24h at decision time. <b>The count survived; the content '
       'did not.</b></p>\n'
     + '        <section class="block">\n          <h3>What Clerk was permitted to do here, on 2026-06-08</h3>\n'
       '          <div class="lat">\n'
       '            <div><span class="mark">yes</span><span>Investigate</span></div>\n'
       '            <div class="ceiling"><span class="mark">yes</span><span>Contain endpoint</span></div>\n'
       '            <div class="off"><span class="mark">no</span><span>Contain identity</span>'
       '<span class="why">not reversible without the client, so it asked</span></div>\n'
       '          </div>\n'
       '          <p class="nar nar--sep"><b>Retained.</b> The grant is stored with the entry '
       'rather than with the evidence, so it outlives the snapshot. On that date the record behind it was '
       '<b>18 of 20</b> accepted over 30 days.</p>\n        </section>\n'
     + address(ASOF_OLD, entry='e-71903')
     + '        <section class="block">\n          <h3>Open the live case</h3>\n'
       '          <p class="nar">C-3180 closed on 2026-06-09 and its page still resolves.</p>\n'
       '          <p style="margin:var(--s2) 0 0"><a class="btn" href="log-snapshot-gone.html">Open the log, June 2026</a></p>\n'
       '        </section>\n'
     + NO_CONTROLS + '      </div>\n')

# ---------------------------------------------------------------------------- 4. the live case has changed
page('entry-changed.html', 'Log entry, the live case has changed', ASOF,
     '      <div class="doc">\n'
     + heading('C-4417', 'Larkfield Logistics', WHEN, ' &middot; the live case has moved on since')
     + VERDICT_ESC + evidence()
     + '        <p class="prov"><b>6 sources</b> queried over <b>24h</b> as it stood.</p>\n'
     + '        <section class="block">\n          <h3>Normal at this tenant, on that date</h3>\n'
       '          <p class="nar"><b>2 token replays</b> at Larkfield Logistics in the 90 days to 2026-08-22, both '
       'real.</p>\n        </section>\n'
     + latitude_then() + retention() + address(ASOF)
     + live('<b>The live case has moved on since this snapshot.</b> S. Varga ruled on it at '
            '<b>2026-08-22T05:58:20Z</b>, one hour and seventeen minutes after this record was written.<br><br>'
            '<b>What changed is not counted here, and that is a decision.</b> Counting means diffing this snapshot '
            'against the live case on every render, which is real work for a page nobody opens daily. More '
            'importantly, current values shown beside historical ones is the confusion this whole node exists to '
            'prevent. The statement ships; the count is later.')
     + NO_CONTROLS + '      </div>\n',
     rail_extra='A record of what was known then. The live case has changed since, and it is linked rather than shown.')

# ---------------------------------------------------------------------------- 5. beyond retention
page('entry-beyond-retention.html', 'Log entry, beyond retention', '2024-11-02T09:20:44Z',
     '      <div class="doc">\n'
     + '        <h1>C-0441 &middot; Bramber Retail\n'
       '          <span class="stampline">Asked for <b>2024-11-02T09:20:44Z</b> &middot; '
       'this is the part being refused</span>\n        </h1>\n'
     + '        <div class="gone-all"><b>The log does not reach back this far.</b>\n'
       '          Entries before <b>2026-02-03T08:14:20Z</b> are outside the window your provider set, so there is '
       'no verdict record, no evidence and no grant to show you.<br><br>\n'
       '          <b class="run">This is not a 404.</b> A 404 says the address is wrong. '
       'The address is right and the answer no longer exists, which is a different sentence and a different thing '
       'for an auditor to write down.</div>\n'
     + '        <section class="block">\n          <h3>What you can still be told</h3>\n'
       '          <p class="nar">The window is named above rather than left for you to infer from an empty page. '
       '<b>You learn the window from the entry, never from a failure</b>, and this is the second place in the product '
       'that carries it: 5.1&rsquo;s resting pane carries it for a whole view, this carries it for one address.</p>\n'
       '        </section>\n'
     + '        <section class="block">\n          <h3>The address you asked for</h3>\n'
       '          <div class="addr"><code>/log/e-04417?as-of=2024-11-02T09:20:44Z</code>'
       '<a class="btn" href="log.html">Open the log</a></div>\n        </section>\n'
     + NO_CONTROLS + '      </div>\n',
     rail_extra='The address resolved. The record behind it is outside the retention window.')

print('generated 5 entry pages')
