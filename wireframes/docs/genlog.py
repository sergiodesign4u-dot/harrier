# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

# The log's own narrow behaviour lived here on five pages and now lives in _wf.css section 17,
# which is where a rule on more than one page belongs. Nothing is left that is one off.
INLINE = C.INLINE
Q.INLINE = INLINE

# ---------------------------------------------------------------------------- the row
def lrow(when, sev, client, what, decided, why, states, href='log.html', cls='', sup=''):
    st = ''.join('<i class="chip chip--state%s">%s</i>'
                 % (' chip--solid' if s.endswith('!') else (' chip--ghost' if s.endswith('?') else ''), s.rstrip('!?'))
                 for s in states)
    dec = '<b>%s</b>' % decided
    if sup: dec += '<span class="sup">%s</span>' % sup
    return ('        <a class="row%s" role="row" href="%s">\n'
            '          <span class="sev" role="gridcell">%s %s</span>\n'
            '          <span class="client" role="gridcell">%s</span>\n'
            '          <span role="gridcell">%s</span>\n'
            '          <span class="concluded" role="gridcell">%s</span>\n'
            '          <span class="why" role="gridcell">%s</span>\n'
            '          <span class="states" role="gridcell">%s</span>\n'
            '          <span class="when" role="gridcell">%s</span>\n'
            '        </a>\n') % ((' ' + cls) if cls else '', href, Q.bars(Q.SEV[sev]), sev,
                                 client, what, dec, why or '<span class="dim">&ndash;</span>', st, when)

LHEAD = ('        <div class="row row--head" role="row">\n'
         + ''.join('          <span role="columnheader">%s</span>\n' % h for h in
                   ['Sev', 'Client', 'What it was', 'What was decided, and by whom',
                    'Reason', 'State', 'When, UTC'])
         + '        </div>\n')

SHIFT_ROWS = [
  ('2026-08-22T04:41:12Z','High','Larkfield Logistics','Token replay from a new ASN',
   'Escalated to S. Varga by R. Idrissi', None, ['escalated'], ''),
  ('2026-08-22T04:02:55Z','Low','Halcyon Care','Beaconing to a new domain',
   'Contained by Clerk, inside this tenant&rsquo;s latitude', None, ['Clerk acted alone'], ''),
  ('2026-08-22T02:17:30Z','Low','Bramber Retail','Mass mailbox rule creation',
   'Upheld by R. Idrissi: benign, new admin onboarding', None, ['upheld'], ''),
  ('2026-08-22T01:44:09Z','Medium','Bramber Retail','Impossible travel, two offices',
   'Rejected by R. Idrissi', 'Tenant context missing', ['rejected'], ''),
  ('2026-08-21T23:12:41Z','High','Meridian Health','Credential stuffing on the VPN',
   'Amended by D. Okonkwo', None, ['amended'], 'Supersedes the entry below. Both stay.'),
  ('2026-08-21T22:38:16Z','High','Meridian Health','Credential stuffing on the VPN',
   'Rejected by D. Okonkwo', 'Detection is too broad', ['superseded!'],
   'Corrected 34m later by the entry above. Nothing was edited and nothing was removed.'),
  ('2026-08-21T21:05:33Z','Medium','Aubrey Dental Group','Sign in from an unseen device',
   'Upheld by D. Okonkwo', None, ['upheld'], ''),
]

def rows(items, selected=None, href=None):
    out = ''
    for r in items:
        when, sev, client, what, decided, why, states, sup = r
        cls = ''
        if 'superseded!' in states: cls = 'is-superseded'
        if when == selected: cls = (cls + ' is-selected').strip()
        out += lrow(when, sev, client, what, decided, why, states,
                    href=href or HREF, cls=cls, sup=sup)
    return out

HREF = 'log-selected.html'

def grid(rows_html, extra=''):
    return ('      <div class="rows rows--log" role="grid" aria-labelledby="lh" tabindex="0">\n%s%s%s      </div>\n\n'
            % (extra, LHEAD, rows_html))

LFOOT = ('      <p class="qfoot">\n'
         '        <span>%s</span>\n'
         '        <span><kbd>&uarr;</kbd> <kbd>&darr;</kbd> read, the pane follows</span>\n'
         '        <span><kbd>Enter</kbd> opens the entry at its own address</span>\n'
         '        <span>order: newest first, always. Nothing here is sorted by urgency</span>\n'
         '      </p>\n')

CHIPS = ('        <a class="chip" href="log-narrowing.html">All tenants &#9662;</a>\n'
         '        <button class="chip" type="button">This shift and the one before &times;</button>\n'
         '        <a class="chip chip--ghost" href="log-narrowing.html">Any actor &#9662;</a>\n'
         '        <a class="chip chip--ghost" href="log-narrowing.html">Any decision &#9662;</a>\n')

NARROW_NOTE = ('      <div class="banner only-narrow"><b>The decision log is a desk surface.</b> '
               'The phone has one scenario in this product, a paged case read and escalated, and '
               'answering an auditor is not it. Seven columns of record squeezed onto a phone would '
               'be a second console pretending to be this one.<br><br>'
               'The one thing here that does open on a phone is <b>a single entry at its own address</b>, '
               'because a permalink can arrive anywhere.'
               '<span class="act"><a class="btn" href="queue.html">Back to the queue</a></span></div>\n')

def z4(chips, h1, body, foot):
    return ('    <section class="z4 z4--log" aria-labelledby="lh">\n'
            '      <div class="scopebar" role="group" aria-label="Scope and filters">\n%s      </div>\n\n'
            '      <h1 id="lh" class="readout">%s</h1>\n\n%s%s%s    </section>\n\n'
            ) % (chips, h1, NARROW_NOTE, body, foot)

# ---------------------------------------------------------------------------- the pane at rest
def covers(narrowing, count, span, earliest='2026-02-03T08:14:20Z'):
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
            '          <span class="v">The earliest entry held for these tenants is '
            '<b>%s</b>. <b>Nothing is ever deleted from the log.</b> How long the evidence '
            'snapshot behind an entry stays retrievable is set by your provider, and an entry '
            'past that window still tells you what was decided and by whom.</span>\n'
            '        </div>\n'
            '        <section class="block">\n          <h3>Whose decisions are here</h3>\n'
            '          <p class="nar">Every decision on every tenant in your provider scope, '
            '<b>not only your own</b>. A log that showed only yours could not answer a question '
            'about a shift you did not work.</p>\n        </section>\n'
            '        <section class="block">\n          <h3>What cannot be done here</h3>\n'
            '          <p class="nar">Nothing on this screen edits anything, and there is no '
            'control that could. A mistake becomes a <b>second entry</b>, which is why the '
            'Meridian pair above reads as two rows rather than one corrected one.</p>\n        </section>\n'
            '      </div>\n    </aside>\n') % (narrowing, count, span, earliest)

def page(fname, title, chips, h1, body, foot, pane, current='log'):
    Q.page(fname, title, 'live', z4(chips, h1, body, foot), pane, current=current,
           extra_script=", annun:{ lead:'40 TENANTS', parts:['<b>7 of 40</b> act alone above investigate','<b>219 of 231</b> upheld, 30 days'] }")

# ---------------------------------------------------------------------------- 1. default
page('log.html', 'Decision log', CHIPS,
     '<b>34 entries</b> <span class="dim">this shift and the one before, across 6 of 40 tenants</span>',
     grid(rows(SHIFT_ROWS)),
     LFOOT % '7 of 34 shown, newest first',
     covers('All tenants in your provider scope. No actor filter, no decision filter',
            '34', '<b>2026-08-21T19:00:00Z</b> to now'))

# ---------------------------------------------------------------------------- 2. narrowing, 5.2
CHIPS_RUN = ('        <button class="chip chip--solid" type="button">Meridian Health &times;</button>\n'
             '        <button class="chip chip--solid" type="button">Rejected &times;</button>\n'
             '        <button class="chip chip--solid" type="button">2026-06-01 to 2026-06-30 &times;</button>\n'
             '        <button class="chip chip--ghost" type="button">Any actor &#9662;</button>\n')
page('log-narrowing.html', 'Decision log, narrowing', CHIPS_RUN,
     '<b>Narrowing</b> <span class="dim">Meridian Health &middot; rejected &middot; June 2026</span>',
     '      <div class="rows rows--log" role="grid" aria-labelledby="lh" tabindex="0">\n'
     '        <div class="arriving" aria-label="Narrowing"></div>\n'
     '        <p class="empty empty--tight"><b>It narrows before it draws.</b>\n'
     '          The log holds every decision on forty tenants, so a list that fills in while you read '
     'invites answering from a partial one.<br>\n'
     '          The query is on screen while it runs, because a wait you can read is a wait you can '
     'correct.<br><br>\n'
     '          It resolves two ways, and both are drawn: '
     '<a href="log-snapshot-gone.html">it matched, 3 entries</a> or '
     '<a href="log-not-found.html">it matched nothing</a>.</p>\n'
     '      </div>\n\n',
     LFOOT % 'counting, no rows drawn yet',
     covers('<b>Meridian Health</b>, decision <b>rejected</b>, June 2026', 'counting',
            '<b>2026-06-01T00:00:00Z</b> to <b>2026-06-30T23:59:59Z</b>'))

# ---------------------------------------------------------------------------- 3. not findable, 5.3
CHIPS_EMPTY = ('        <button class="chip chip--solid" type="button">Actor: R. Idrissi &times;</button>\n'
               '        <button class="chip chip--solid" type="button">Meridian Health &times;</button>\n'
               '        <button class="chip chip--solid" type="button">2026-06-01 to 2026-06-30 &times;</button>\n'
               '        <button class="chip chip--ghost" type="button">Any decision &#9662;</button>\n')
SEEK = ("""    <aside class="z5 z5--paper" aria-labelledby="ph">
      <div class="pane-head">
        <h2 id="ph">Find the decision</h2>
        <p class="sub">Someone asked you a question, so this is the start of the next attempt rather than the end of this one</p>
      </div>
      <div class="pane-body">
        <div class="seek">
          <div class="field"><label for="cid">Case id, if the client quoted one</label><input id="cid" placeholder="C-4417"></div>
          <div class="field"><label for="ten">Tenant</label><input id="ten" value="Meridian Health"></div>
          <div class="field"><label for="dr">Date range, UTC</label><input id="dr" value="2026-06-01 to 2026-06-30"></div>
          <div class="field"><label for="act">Who decided it</label><input id="act" value="R. Idrissi"><p class="hint">Leave this empty to search every analyst in your provider scope</p></div>
        </div>
        <section class="block">
          <h3>What emptied it</h3>
          <p class="nar"><b>Actor: R. Idrissi.</b> Without it, <b>4 entries</b> match, all of them ruled by D. Okonkwo. You did not work that shift, which is exactly the case the log exists for.</p>
        </section>
      </div>
      <div class="pane-foot">
        <a class="btn btn--primary" href="log.html">Search without the actor <span class="key">Enter</span></a>
        <a class="btn btn--quiet" href="entry-beyond-retention.html">Try 2024 instead</a>
        <a class="btn btn--quiet" href="log.html">Clear all four</a>
      </div>
    </aside>
""")
page('log-not-found.html', 'Decision log, not findable', CHIPS_EMPTY,
     '<b>No entry matches this scope</b> <span class="dim">4 filters, 1 tenant</span>',
     '      <div class="banner qbanner"><b>Actor: R. Idrissi is what emptied it.</b> Remove it and 4 entries '
     'come back, all ruled by D. Okonkwo. The chip is marked in the bar above, where the question was asked.'
     '<span class="act"><a class="btn" href="log.html">Remove Actor: R. Idrissi</a></span></div>\n\n'
     '      <div class="rows rows--log" role="grid" aria-labelledby="lh" tabindex="0">\n'
     '        <p class="empty"><b>Nothing matched, and the pane is the next attempt.</b>\n'
     '          Not a shrug and not an illustration: the fields on the right are the search, prefilled with '
     'what you already narrowed to.</p>\n'
     '      </div>\n\n',
     LFOOT % 'no rows in this scope',
     SEEK)

# ---------------------------------------------------------------------------- 4. entry selected
ENTRY = ("""    <aside class="z5 z5--paper" aria-labelledby="ph">
      <div class="pane-head">
        <h2 id="ph">C-4417 &middot; Larkfield Logistics</h2>
        <p class="sub">Escalated to S. Varga by R. Idrissi &middot; <b>2026-08-22T04:41:12Z</b></p>
        <p class="chips-hd"><i class="chip chip--state chip--solid">escalated</i></p>
      </div>
      <div class="pane-body">
        <section class="block">
          <h3>What was decided</h3>
          <p class="nar"><b>No verdict was filed.</b> The case was handed to S. Varga, SOC lead, through the provider&rsquo;s on call tool. Clerk&rsquo;s conclusion, <b>real, contain identity</b>, stands unruled.</p>
        </section>
        <section class="block">
          <h3>The handover, as it was written</h3>
          <p class="nar"><b>What I checked.</b> Correlated the token against the corporate range and confirmed the same correlationId on both sign ins.</p>
          <p class="nar"><b>What I could not do.</b> Could not reach the tenant&rsquo;s mail admin to confirm whether the forwarding rule is sanctioned.</p>
          <p class="nar"><b>What I need from you.</b> A call to the client, and a decision on whether to disable the account before 08:00.</p>
        </section>
        <section class="block">
          <h3>The evidence as it stood</h3>
          <div class="claim"><span class="txt">A refresh token was presented from <b>ASN 41xxx</b>, first time for this tenant</span><a class="src" href="entry.html">Entra sign in</a></div>
          <div class="claim"><span class="txt">The same token was used from the corporate range <b>4 minutes earlier</b></span><a class="src" href="entry.html">Entra sign in</a></div>
          <p class="gnote"><a href="entry.html">All 9 signals, at the address below</a></p>
        </section>
        <p class="prov"><b>6 sources</b> queried over <b>24h</b>. The snapshot is addressed, not reconstructed: what follows is the state the sources were in when Clerk read them, not what they say today.</p>
        <p class="stamp">Snapshot <code>?as-of=2026-08-22T04:14:05Z</code> &middot; filed 27m before the ruling</p>
      </div>
      <div class="pane-foot">
        <a class="btn btn--primary" href="entry.html">Open at its own address <span class="key">Enter</span></a>
        <a class="btn btn--quiet" href="case.html">The live case</a>
      </div>
    </aside>
""")
page('log-selected.html', 'Decision log, entry selected', CHIPS,
     '<b>34 entries</b> <span class="dim">this shift and the one before, one selected</span>',
     grid(rows(SHIFT_ROWS, selected='2026-08-22T04:41:12Z')),
     LFOOT % '7 of 34 shown, one selected',
     ENTRY)

# ---------------------------------------------------------------------------- 5. snapshot gone, 5.5
JUNE_ROWS = [
  ('2026-06-19T11:26:40Z','Medium','Norsk Marine','Beaconing from a bridge workstation',
   'Rejected by D. Okonkwo', 'Detection is too broad', ['rejected'], ''),
  ('2026-06-08T22:41:03Z','High','Norsk Marine','Ransomware precursor on FS-02',
   'Upheld by D. Okonkwo', None, ['upheld'], ''),
  ('2026-06-02T05:09:57Z','Low','Norsk Marine','Sign in from an unseen device',
   'Contained by Clerk, inside this tenant&rsquo;s latitude', None, ['Clerk acted alone'], ''),
]
CHIPS_JUNE = ('        <button class="chip chip--solid" type="button">Norsk Marine &times;</button>\n'
              '        <button class="chip chip--solid" type="button">2026-06-01 to 2026-06-30 &times;</button>\n'
              '        <button class="chip chip--ghost" type="button">Any actor &#9662;</button>\n'
              '        <button class="chip chip--ghost" type="button">Any decision &#9662;</button>\n')
GONE = ("""    <aside class="z5 z5--paper" aria-labelledby="ph">
      <div class="pane-head">
        <h2 id="ph">C-3180 &middot; Norsk Marine</h2>
        <p class="sub">Upheld by D. Okonkwo &middot; <b>2026-06-08T22:41:03Z</b></p>
        <p class="chips-hd"><i class="chip chip--state">upheld</i></p>
      </div>
      <div class="pane-body">
        <section class="block">
          <h3>What was decided</h3>
          <p class="nar">Clerk concluded <b>real, contain endpoint</b>, and D. Okonkwo upheld it. That is recorded, it is not going anywhere, and no control on this screen can change it.</p>
        </section>
        <section class="block">
          <h3>The evidence as it stood</h3>
          <div class="tomb"><b>The snapshot did not survive.</b> Fourteen signals stood behind this verdict and the stored snapshot failed its integrity check on <b>2026-07-30T03:14:02Z</b>. <b>The failure is itself an entry</b>, written by the system and readable like any other.<br><br>What was decided is here. What it was decided on is not, and this frame says so rather than showing you a blank and letting you assume it was empty.</div>
        </section>
        <p class="prov">6 sources were queried over 24h at decision time. <b>The count survived; the content did not.</b></p>
        <p class="stamp">Snapshot <code>?as-of=2026-06-08T22:39:11Z</code> &middot; unreadable since 2026-07-30</p>
      </div>
      <div class="pane-foot">
        <a class="btn btn--primary" href="entry-gone.html">Open at its own address <span class="key">Enter</span></a>
        <a class="btn btn--quiet" href="log.html">Back to the list</a>
      </div>
    </aside>
""")
page('log-snapshot-gone.html', 'Decision log, the snapshot did not survive', CHIPS_JUNE,
     '<b>3 entries</b> <span class="dim">Norsk Marine, June 2026, one selected</span>',
     grid(rows(JUNE_ROWS, selected='2026-06-08T22:41:03Z', href='log-snapshot-gone.html')),
     LFOOT % '3 of 3 shown, one snapshot unreadable',
     GONE)

print('generated 5 log pages')
