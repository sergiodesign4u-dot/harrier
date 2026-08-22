# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, '/private/tmp/claude-501/-Users-sergiyshevchenko-Claud-Projects-B2B-AI-flow-/ca733e22-18c6-48ed-bd85-19994527642b/scratchpad')
import genqueue as Q   # reuse the row builders so the list cannot drift between screens
OUT = Q.OUT

INLINE = Q.INLINE + """
.nar{margin:0;font-size:var(--t-sm)}
.nar + .nar{margin-top:var(--s2)}
.nar b{font-weight:600}
.nar .when{font-family:var(--mono);font-size:var(--t-xs);color:var(--soft);
           display:inline-block;min-width:46px}
.lat{display:flex;flex-direction:column;border:var(--line);border-radius:var(--radius)}
.lat > div{display:flex;gap:var(--s2);align-items:baseline;padding:var(--s2) var(--s3);
           border-bottom:var(--line);font-size:var(--t-sm)}
.lat > div:last-child{border-bottom:none}
.lat .mark{font-family:var(--mono);font-size:var(--t-xs);flex:0 0 20px}
.lat .off{color:var(--soft)}
.lat .off .why{margin-left:auto;text-align:right;font-size:var(--t-xs);flex:0 0 auto}
.lat .ceiling{background:var(--fill);font-weight:600}
.stamp{font-family:var(--mono);font-size:var(--t-xs);color:var(--soft);
       border-top:var(--line);padding-top:var(--s2);overflow-wrap:anywhere}
.chips-hd{display:flex;gap:var(--s1);flex-wrap:wrap;margin-top:var(--s2)}"""
Q.INLINE = INLINE   # page() renders the module level constant, so hand it ours

def z4_with_case(selected_href, rows=None, sel_state=None):
    items = []
    preselected = any((len(r) > 9 and r[9] == 'is-selected') for r in (rows or []))
    for i, r in enumerate(rows if rows else Q.BASE_ROWS):
        r = list(r)
        if r[1] == 'Larkfield Logistics' and not preselected:
            r[8] = selected_href
            r[9] = 'is-selected'
            if sel_state is not None: r[6] = sel_state
        items.append(tuple(r))
    return Q.z4(Q.CHIPS_DEFAULT,
                '<b>18 waiting</b> <span class="dim">across 12 of 40 tenants in scope</span>',
                Q.grid(Q.rows_html(items)),
                Q.FOOT % '7 of 18 shown, one selected')

EVIDENCE = """        <section class="block">
          <h3>Evidence, 9 signals</h3>
          <div class="claim"><span class="txt">A refresh token was presented from <b>ASN 41xxx</b>, first time for this tenant</span><a class="src" href="case.html">Entra sign in</a></div>
          <div class="claim"><span class="txt">The same token was used from the corporate range <b>4 minutes earlier</b></span><a class="src" href="case.html">Entra sign in</a></div>
          <div class="expand">Field <code>correlationId</code> matches across both sign ins, which is what makes it the same token rather than two. Read from the tenant&rsquo;s own log, 04:08 to 04:12 UTC.</div>
          <div class="claim"><span class="txt">No MFA prompt on the second use</span><a class="src" href="case.html">Entra sign in</a></div>
          <div class="claim"><span class="txt">An inbox rule was created <b>90 seconds later</b>, forwarding to an external address</span><a class="src" href="case.html">Exchange audit</a></div>
          <div class="claim claim--absence"><span class="txt">no password change, and no new device enrolment</span><a class="src" href="case.html">Entra, EDR</a></div>
          <div class="claim claim--against"><span class="txt">this user has travelled to this region twice in 90 days</span><a class="src" href="case.html">tenant baseline</a></div>
          <p class="dim" style="margin:var(--s2) 0 0;font-size:var(--t-xs)"><a href="case-expired.html">3 more signals</a></p>
        </section>
"""
PROV = """        <p class="prov"><b>6 sources</b> queried over <b>24h</b>: Entra ID, Exchange audit, EDR, proxy, threat intel, tenant baseline. Count first, never a bare percentage.</p>
"""
def tenant_ctx(text='<b>2 token replays</b> at Larkfield Logistics in 90 days, both real'):
    return """        <section class="block">
          <h3>Normal at this client</h3>
          <p class="nar">%s</p>
        </section>
""" % text

def latitude(ceiling='Contain endpoint'):
    rows = [('Investigate','on',''), ('Contain endpoint','on',''),
            ('Contain identity','off','above this tenant&rsquo;s latitude, so it waited for you'),
            ('Contain network','off','above this tenant&rsquo;s latitude'),
            ('Remove content','off','above this tenant&rsquo;s latitude'),
            ('Change policy','off','above this tenant&rsquo;s latitude')]
    out = '        <section class="block">\n          <h3>What Clerk may do here, on this tenant</h3>\n          <div class="lat">\n'
    for label, st, why in rows:
        if st == 'on':
            cls = ' class="ceiling"' if label == ceiling else ''
            out += '            <div%s><span class="mark">yes</span><span>%s</span></div>\n' % (cls, label)
        else:
            out += ('            <div class="off"><span class="mark">no</span><span>%s</span>'
                    '<span class="why">%s</span></div>\n') % (label, why)
    out += ('          </div>\n          <p class="dim" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">'
            'Out of reach actions are shown disabled with the ceiling stated, not hidden. '
            'A hidden control teaches nothing.</p>\n        </section>\n')
    return out

def stamp(extra=''):
    return ('        <p class="stamp">Filed by Clerk <b>27m</b> ago &middot; '
            '<code>?as-of=2026-08-22T04:12:38Z</code>%s</p>\n' % extra)

def foot(buttons):
    return '      <div class="pane-foot">\n' + ''.join(
        '        <a class="btn%s" href="%s">%s <span class="key">%s</span></a>\n' % (c, h, l, k)
        for l, k, h, c in buttons) + '      </div>\n'

ALL_FOUR = [('Accept','a','queue-decided.html',' btn--primary'), ('Amend','m','case-amend.html',''),
            ('Reject','r','reject.html',''), ('Escalate','e','escalate.html','')]

def pane(head_sub, chips, body, footer, extra_class=' is-paper', title='C-4417 &middot; Larkfield Logistics'):
    return ('    <aside class="z5%s" aria-labelledby="ph">\n'
            '      <div class="pane-head">\n'
            '        <h2 id="ph">' + title + '</h2>\n'
            '        <p class="sub">%s</p>\n%s      </div>\n'
            '      <div class="pane-body">\n%s      </div>\n%s    </aside>\n'
            ) % (extra_class, head_sub, chips, body, footer)

def chiprow(items):
    if not items: return ''
    return '        <p class="chips-hd">' + ''.join(
        '<i class="chip chip--state%s">%s</i>' % (' chip--solid' if s.endswith('!') else '', s.rstrip('!')) for s in items) + '</p>\n'

SUB = 'Token replay from a new ASN &middot; High &middot; 9 signals &middot; 6 sources, 24h'
VERDICT = """        <section class="block">
          <h3>What Clerk concluded</h3>
          <p class="nar"><b>Real, and it wants to contain the identity.</b> A refresh token issued to this user is in use from an ASN the tenant has never seen, and an inbox rule was created from it.</p>
        </section>
        <section class="block">
          <h3>What happened</h3>
          <p class="nar"><span class="when">04:08</span>Sign in from the corporate range, token issued.</p>
          <p class="nar"><span class="when">04:12</span>The same token presented from <b>ASN 41xxx</b>, no MFA prompt.</p>
          <p class="nar"><span class="when">04:13</span>Inbox rule created, forwarding to an external address.</p>
        </section>
"""

# ---------------------------------------------------------------- 1. filed and waiting
Q.page('case.html', 'Case file, filed and waiting', 'live',
       z4_with_case('case.html'),
       pane(SUB, '', VERDICT + EVIDENCE + PROV + tenant_ctx() + latitude() + stamp(), foot(ALL_FOUR)),
       extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

# ---------------------------------------------------------------- 2. Clerk still working, 4.3
Q.page('case-investigating.html', 'Case file, Clerk still working', 'live',
       z4_with_case('case-investigating.html', sel_state=['investigating?']),
       pane('Token replay from a new ASN &middot; High &middot; counting',
            chiprow(['investigating']),
            '        <div class="arriving" aria-label="Clerk is working"></div>\n'
            '        <section class="block">\n          <h3>What is being checked</h3>\n'
            '          <p class="nar">Whether the token was also used from the corporate range, and whether a mailbox rule followed. <b>Four of six sources answered.</b></p>\n'
            '          <p class="dim" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">There is no verdict yet, so there is nothing to accept. What is being checked is shown instead, which is what makes waiting legible rather than blank.</p>\n        </section>\n'
            + '        <section class="block">\n          <h3>Evidence, arriving</h3>\n'
              '          <div class="claim"><span class="txt">A refresh token was presented from <b>ASN 41xxx</b>, first time for this tenant</span><a class="src" href="case-investigating.html">Entra sign in</a></div>\n'
              '          <div class="claim"><span class="txt">The same token was used from the corporate range <b>4 minutes earlier</b></span><a class="src" href="case-investigating.html">Entra sign in</a></div>\n'
              '        </section>\n'
            + '        <p class="prov"><b>4 of 6 sources</b> answered, 24h window. Counting up.</p>\n'
            + tenant_ctx() + latitude() + stamp(),
            foot([('Escalate','e','escalate.html',' btn--primary')])),
       extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

# ---------------------------------------------------------------- 3. Clerk already acted
Q.page('case-acted.html', 'Case file, Clerk already acted', 'live',
       z4_with_case('case-acted.html', sel_state=['acted']),
       pane(SUB, chiprow(['acted']),
            '        <div class="banner"><b>Clerk isolated LK-WS-0042, 24m ago.</b> Contain endpoint, which is inside this tenant&rsquo;s latitude. <b>Reversible by you</b>, and it reverses itself in 4h if nobody acts.<span class="act"><a class="btn" href="case-acted.html">Undo the isolation</a></span></div>\n'
            + VERDICT.replace('it wants to contain the identity', 'it contained the endpoint on its own')
            + EVIDENCE + PROV + tenant_ctx() + latitude() + stamp(),
            foot(ALL_FOUR)),
       extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days','<span class=\\\"ovrd\\\">ACTED</span> 24m ago'] }")

# ---------------------------------------------------------------- 4. amending, 4.5
AMEND = """        <section class="block">
          <h3>Amend the verdict</h3>
          <div class="field">
            <label for="amend">Your wording</label>
            <textarea id="amend" rows="4">Real, but the containment should be the endpoint rather than the identity: the account is shared by the depot shift and disabling it stops four people working.</textarea>
            <p class="hint">While this field has focus, letters are text and nothing else. The verdict keys are inert.</p>
          </div>
          <div class="banner banner--quiet"><b>Clerk wrote:</b> Real, and it wants to contain the identity. <b>Kept beside yours</b>, never replaced, because an amendment is only defensible next to what it amended.</div>
          <p class="dim" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">No reason code. The amended text is the reason, and asking you to classify your own writing would add a step that teaches nobody.</p>
        </section>
"""
Q.page('case-amend.html', 'Case file, amending', 'live',
       z4_with_case('case-amend.html'),
       pane(SUB, '', AMEND + EVIDENCE + PROV + tenant_ctx() + latitude() + stamp(),
            foot([('File the amendment','&crarr;'.replace('&crarr;','Enter'),'queue-decided.html',' btn--primary'),
                  ('Cancel','Esc','case.html',' btn--quiet')])),
       extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

# ---------------------------------------------------------------- 5. no baseline, 4.8
NOBASE_VERDICT = """        <section class="block">
          <h3>What Clerk concluded</h3>
          <p class="nar"><b>Real, and it wants to contain the identity.</b> A first sign in for this account from a device the tenant has never enrolled, followed by a mailbox rule ninety seconds later.</p>
        </section>
        <section class="block">
          <h3>What happened</h3>
          <p class="nar"><span class="when">05:31</span>Sign in from an unenrolled device, MFA satisfied by push.</p>
          <p class="nar"><span class="when">05:33</span>Inbox rule created, forwarding to an external address.</p>
        </section>
"""
NOBASE_EVIDENCE = EVIDENCE.replace('Evidence, 9 signals', 'Evidence, 9 signals').replace(
    'A refresh token was presented from <b>ASN 41xxx</b>, first time for this tenant',
    'A sign in from a device with no enrolment record, first for this account')
Q.page('case-no-baseline.html', 'Case file, no baseline', 'live',
       z4_with_case('case-no-baseline.html', rows=[
         r if r[1] != 'Aubrey Dental Group' else (r[:9] + ('is-selected',))
         for r in Q.BASE_ROWS]),
       pane('Sign in from an unseen device &middot; Medium &middot; 9 signals &middot; 6 sources, 24h', '',
            NOBASE_VERDICT + NOBASE_EVIDENCE + PROV
            + tenant_ctx('<b>No baseline for this tenant yet.</b> Aubrey Dental Group was onboarded 9 days ago, so there is nothing to compare this against. Not a zero, and not a comparison that would mean nothing.')
            + latitude('Investigate') + stamp(),
            foot(ALL_FOUR), title='C-4482 &middot; Aubrey Dental Group'),
       extra_script=", annun:{ lead:'AUBREY DENTAL GROUP', parts:['acts alone up to <b>investigate</b>','<b>no rulings yet</b>, 9 days'] }")

# ---------------------------------------------------------------- 6. evidence expired, 4.7
Q.page('case-expired.html', 'Case file, evidence expired', 'live',
       z4_with_case('case-expired.html'),
       pane(SUB + ' &middot; snapshot no longer retrievable', '',
            VERDICT
            + '        <section class="block">\n          <h3>Evidence, 9 signals</h3>\n'
              '          <div class="tomb"><b>The snapshot is gone.</b> Nine signals stood behind this verdict and the sources aged out of retention on <b>2026-08-14</b>. What was here is recorded; what it said is not retrievable.<br><br>'
              'A verdict filed now would rest on evidence nobody can produce in April, which is the one thing this product exists to prevent.</div>\n        </section>\n'
            + '        <p class="prov">6 sources queried, 24h window, <b>as of the last good read</b>.</p>\n'
            + tenant_ctx() + latitude() + stamp(),
            foot([('Escalate','e','escalate-from-expired.html',' btn--primary')])),
       extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

# ---------------------------------------------------------------- 7. verdict did not write, 4.9
Q.page('case-write-failed.html', 'Case file, the verdict did not write', 'live',
       z4_with_case('case-write-failed.html'),
       pane(SUB, '',
            '        <div class="banner"><b>The verdict did not write.</b> You accepted 40s ago and the log did not take it, so <b>nothing is recorded</b>. The decision exists only on this screen.<span class="act"><a class="btn btn--primary" href="queue-decided.html">Try again</a></span></div>\n'
            + VERDICT + EVIDENCE + PROV + tenant_ctx() + latitude() + stamp(),
            foot([('Try again','&#8635;','queue-decided.html',' btn--primary'),
                  ('Hold it locally','h','case-unrecorded.html','')])),
       extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

# ---------------------------------------------------------------- 8. held locally, 4.10
Q.page('case-unrecorded.html', 'Case file, held locally', 'live',
       z4_with_case('case-unrecorded.html', sel_state=['decided','unrecorded!']),
       pane(SUB, chiprow(['decided','unrecorded!']),
            '        <div class="banner"><b>Held locally, unrecorded.</b> You accepted 6m ago, the write has failed twice, and the case stays open. <b>This console is the only place the decision exists.</b> The row keeps its place in the queue and will not leave until the write lands.<span class="act"><a class="btn" href="queue-decided.html">Try again</a></span></div>\n'
            + VERDICT + EVIDENCE + PROV + tenant_ctx() + latitude()
            + stamp(' &middot; <b>no log entry yet</b>'),
            foot([('Try again','&#8635;','queue-decided.html',' btn--primary'),
                  ('Escalate','e','escalate.html','')])),
       extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days','<span class=\\\"ovrd\\\">OVRD</span> human decided'] }")

print('generated 8 case pages')
