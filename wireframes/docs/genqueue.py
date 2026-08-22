# -*- coding: utf-8 -*-
import os
OUT = '/Users/sergiyshevchenko/Claud Projects/B2B AI flow /wireframes/'

INLINE = """/* INLINE: queue :: for reconcile into _wf.css
   Only what is genuinely one-off for this screen family, every value through var().
   The shell, the row, the chips and the fleet already live in _wf.css. */"""

def bars(n):
    return '<span class="bars">' + ''.join('<i class="on"></i>' if i < n else '<i></i>' for i in range(3)) + '</span>'

SEV = {'High': 3, 'Medium': 2, 'Low': 1}

def row(sev, client, what, concluded, note, cost, states, age, href='case.html', cls=''):
    st = ''.join('<i class="chip chip--state%s">%s</i>' % (' chip--solid' if s.endswith('!') else (' chip--ghost' if s.endswith('?') else ''), s.rstrip('!?')) for s in states)
    conc = ('<b>%s</b>' % concluded) if concluded else '<span class="dim">no verdict yet</span>'
    if note: conc += '<br><span class="dim">%s</span>' % note
    costcell = '<span class="cost%s">%s</span>' % (' dim' if cost == 'counting' else '', cost)
    return ('        <a class="row%s" role="row" href="%s">\n'
            '          <span class="sev" role="gridcell">%s %s</span>\n'
            '          <span class="client" role="gridcell">%s</span>\n'
            '          <span role="gridcell">%s</span>\n'
            '          <span class="concluded" role="gridcell">%s</span>\n'
            '          %s\n'
            '          <span class="states" role="gridcell">%s</span>\n'
            '          <span class="age" role="gridcell">%s</span>\n'
            '        </a>\n') % ((' ' + cls) if cls else '', href, bars(SEV[sev]), sev, client, what, conc,
                                 costcell.replace('<span class="cost', '<span role="gridcell" class="cost'), st, age)

HEAD = ('        <div class="row row--head" role="row">\n'
        + ''.join('          <span role="columnheader">%s</span>\n' % h for h in
                  ['Sev','Client','What it is','What Clerk concluded','To check','State','Age'])
        + '        </div>\n')

BASE_ROWS = [
    ('Medium','Meridian Health','Mass file rename on one host','Rejected by R. Idrissi',None,'4 signals',['decided','unrecorded!'],'1h','case-unrecorded.html',''),
    ('High','Larkfield Logistics','Token replay from a new ASN','Real, contain identity','above latitude here','9 signals',[],'27m','case.html',''),
    ('High','Norsk Marine','Ransomware precursor on FS-02','Real, contained',None,'14 signals',['acted'],'52m','case.html',''),
    ('Medium','Aubrey Dental Group','Sign in from an unseen device','Real, contain identity','above latitude here','9 signals',[],'6m','case-no-baseline.html',''),
    ('Medium','Halden Freight','Impossible travel, two offices','Benign, sanctioned VPN rollout',None,'6 signals',[],'4m','case.html',''),
    ('Low','Halcyon Care','Beaconing to a new domain','Real, contained',None,'5 signals',['acted'],'2h','case.html',''),
    ('Low','Bramber Retail','Mass mailbox rule creation','Benign, new admin onboarding',None,'3 signals',[],'41m','case.html',''),
]

FLEET_ROWS = [
    ('Meridian Health','Investigate','31 of 36','was 34 of 36'),
    ('Halcyon Care','Contain endpoint','4 of 4','too few to compare'),
    ('Aubrey Dental Group','Investigate','&ndash;','no rulings yet'),
    ('Bramber Retail','Contain network','51 of 52','was 49 of 51'),
    ('Halden Freight','Contain endpoint','27 of 29','was 26 of 29'),
    ('Larkfield Logistics','Contain endpoint','34 of 36','was 33 of 36'),
    ('Norsk Marine','Investigate','18 of 20','was 18 of 20'),
]

def fleet(sub='40 tenants, nothing selected. Ordered by where attention is owed', stale=False, rows=None):
    rr = rows if rows is not None else FLEET_ROWS
    out = ('    <aside class="z5" aria-labelledby="fh">\n'
           '      <div class="pane-head">\n        <h2 id="fh">Fleet</h2>\n'
           '        <p class="sub">%s</p>\n      </div>\n'
           '      <div class="frow frow--head"><span>Tenant</span><span>Acts alone up to</span><span class="rec">Record</span></div>\n') % sub
    for t, lat, rec, was in rr:
        out += ('      <a class="frow" href="queue.html"><span>%s</span><span>%s</span>'
                '<span class="rec">%s<span class="was">%s</span></span></a>\n') % (t, lat, rec, was)
    out += ('      <p class="fleet-more">%s</p>\n    </aside>\n'
            % ('33 more &middot; frozen as of the last sync' if stale
               else '33 more, 30 day window &middot; a row narrows the queue to that tenant'))
    return out

FOOT = ('      <p class="qfoot">\n'
        '        <span>%s</span>\n'
        '        <span><kbd>&uarr;</kbd> <kbd>&darr;</kbd> read, the pane follows</span>\n'
        '        <span><kbd>Enter</kbd> decides, focus moves into the pane</span>\n'
        '        <span>order: unrecorded, blocked on her, severity, age</span>\n'
        '      </p>\n')

def page(fname, title, strip, z4, z5, extra_script='', current='queue'):
    html = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Harrier &middot; %s</title>
<link rel="stylesheet" href="../_nav.css">
<link rel="stylesheet" href="_wf.css">
<style>
%s
</style>
</head>
<body>
<div class="wf-shell">
<aside id="sidebar"></aside>
<div class="wf-screen">
  <header id="wf-z1"></header>
  <p id="wf-z2"></p>
  <main class="z45">
%s%s  </main>
</div>
</div>
<script src="_nav.js"></script>
<script>WF_SHELL({ current:'%s', strip:'%s'%s });</script>
</body>
</html>
""" % (title, INLINE, z4, z5, current, strip, extra_script)
    open(os.path.join(OUT, fname), 'w').write(html)
    return fname

def z4(scopebar, h1, body, foot=FOOT % '7 of 18 shown, virtualised'):
    return ('    <section class="z4" aria-labelledby="qh">\n'
            '      <div class="scopebar" role="group" aria-label="Scope and filters">\n%s      </div>\n\n'
            '      <h1 id="qh" class="readout">%s</h1>\n\n%s%s    </section>\n\n') % (scopebar, h1, body, foot)

CHIPS_DEFAULT = ('        <button class="chip" type="button">All tenants &#9662;</button>\n'
                 '        <button class="chip" type="button">Waiting on a decision &times;</button>\n'
                 '        <button class="chip chip--ghost" type="button">Sort: default &#9662;</button>\n')
# On the default queue the scope bar is live: narrowing is something she DOES, so it links.
CHIPS_LIVE = ('        <a class="chip" href="queue-no-match.html">All tenants &#9662;</a>\n'
              '        <button class="chip" type="button">Waiting on a decision &times;</button>\n'
              '        <button class="chip chip--ghost" type="button">Sort: default &#9662;</button>\n')

def grid(rows_html, extra=''):
    return ('      <div class="rows" role="grid" aria-labelledby="qh" tabindex="0">\n%s%s%s      </div>\n\n'
            % (extra, HEAD, rows_html))

def rows_html(items):
    return ''.join(row(*i) for i in items)

if __name__ == '__main__':
    # ---------------------------------------------------------------- 1. default
    page('queue.html', 'Case queue', 'live',
         z4(CHIPS_LIVE, '<b>18 waiting</b> <span class="dim">across 12 of 40 tenants in scope</span>',
            grid(rows_html(BASE_ROWS))),
         fleet())

    # ---------------------------------------------------------------- 2. streaming, 3.2
    page('queue-streaming.html', 'Case queue, streaming in', 'arriving',
         z4(CHIPS_DEFAULT,
            '<b>14 waiting so far</b> <span class="dim">provisional, Clerk is still correlating</span>',
            grid(rows_html([BASE_ROWS[0],
                 ('High','Larkfield Logistics','Token replay from a new ASN',None,None,'counting',
                  ['investigating?'],'27m','case-investigating.html','')] + BASE_ROWS[2:4]) +
                 '        <p class="empty" style="padding:var(--s4)">Rows arrive as Clerk correlates them. '
                 '<b style="display:inline;font-size:inherit">The count above is provisional and says so</b>, '
                 'because a number that settles later without saying it was provisional is a number she acted on.</p>\n',
                 extra='        <div class="arriving" aria-label="Cases arriving"></div>\n'),
            FOOT % '4 of 14 so far, more arriving'),
         fleet())

    # ---------------------------------------------------------------- 3. stale, 3.3
    page('queue-stale.html', 'Case queue, stale', 'stale',
         z4(CHIPS_DEFAULT,
            '<b>18 waiting</b> <span class="dim">as of 6m, across 12 of 40 tenants in scope</span>',
            '      <div class="banner qbanner"><b>Marked as of the last sync.</b> The list is readable and it is '
            'not fresh. Filing a verdict is still allowed: a degraded connection does not block a decision, '
            'and the log records the snapshot you actually saw.'
            '<span class="act"><a class="btn" href="queue-streaming.html">Try to reconnect</a></span></div>\n\n'
            + grid(rows_html(BASE_ROWS)),
            FOOT % '7 of 18 shown, frozen at the last sync'),
         fleet(sub='40 tenants, nothing selected. Frozen as of the last sync', stale=True))

    # ---------------------------------------------------------------- 4. nothing waiting, 3.4
    page('queue-empty.html', 'Case queue, nothing waiting', 'live',
         z4(CHIPS_DEFAULT,
            '<b>Nothing waiting</b> <span class="dim">across 12 of 40 tenants in scope</span>',
            '      <div class="rows" role="grid" aria-labelledby="qh" tabindex="0">\n'
            '        <p class="empty"><b>Nothing is waiting on a decision.</b>\n'
            '          21 cases were ruled on this shift and Clerk is investigating 3 more.<br>\n'
            '          The pane on the right is the fleet, which is where this screen rests.<br>\n          <a class="btn" href="queue.html" style="margin-top:var(--s4)">Widen the scope to all tenants</a></p>\n'
            '      </div>\n\n',
            FOOT % 'nothing waiting, and the fleet holds the pane'),
         fleet(sub='40 tenants. This is the resting state of the pane, and it is what an empty queue looks like'))

    # ---------------------------------------------------------------- 5. filtered to nothing
    CHIPS_NARROW = ('        <button class="chip" type="button">Meridian Health &times;</button>\n'
                    '        <button class="chip chip--solid" type="button">Severity: High &times;</button>\n'
                    '        <button class="chip" type="button">Clerk: needs a human &times;</button>\n'
                    '        <button class="chip chip--ghost" type="button">Sort: default &#9662;</button>\n')
    page('queue-no-match.html', 'Case queue, no case matches', 'live',
         z4(CHIPS_NARROW,
            '<b>No case matches this scope</b> <span class="dim">3 filters, 1 tenant</span>',
            '      <div class="banner qbanner"><b>Severity: High is what emptied it.</b> Remove it and 6 cases come back. '
            'The chip is marked in the bar above, where the question was asked.'
            '<span class="act"><a class="btn btn--primary" href="queue.html">Remove Severity: High</a></span></div>\n\n'
            '      <div class="rows" role="grid" aria-labelledby="qh" tabindex="0">\n'
            '        <p class="empty"><b>Nothing here, and it is the narrowing rather than the queue.</b>\n'
            '          18 cases are waiting outside this scope.</p>\n'
            '      </div>\n\n',
            FOOT % 'no rows in this scope'),
         fleet(sub='12 tenants in scope. The fleet narrows with the queue',
               rows=[r for r in FLEET_ROWS if r[0] in ('Meridian Health','Halcyon Care','Larkfield Logistics')]))

    # ---------------------------------------------------------------- 6. just filed
    DECIDED = [('Medium','Meridian Health','Mass file rename on one host','Rejected by R. Idrissi',None,'4 signals',['decided','unrecorded!'],'1h','case-unrecorded.html','')] + \
              [('High','Larkfield Logistics','Token replay from a new ASN','Accepted by R. Idrissi, 4s ago','was: Real, contain identity','9 signals',['decided','acted!'],'27m','queue-decided.html','is-selected')] + \
              BASE_ROWS[2:]
    CASE_PANE = """    <aside class="z5 is-paper" aria-labelledby="ph">
          <div class="pane-head">
            <h2 id="ph">C-4417 &middot; Larkfield Logistics</h2>
            <p class="sub">Token replay from a new ASN &middot; 9 signals &middot; 6 sources, 24h</p>
          </div>
          <div class="pane-body">
            <div class="banner"><b>Accepted by R. Idrissi, 4s ago.</b> Written to the log against the snapshot as it stood.</div>
            <section class="block">
              <h3>What was decided</h3>
              <p style="margin:0">Clerk concluded <b>real, contain identity</b>. The action was above this tenant&rsquo;s latitude, so it waited for a person, and it has now run.</p>
            </section>
            <section class="block">
              <h3>Where it is now</h3>
              <p style="margin:0"><a href="entry.html">The log entry, with the evidence as it stood</a></p>
            </section>
            <p class="prov">The row stays in place and reads <b>decided</b>. It leaves the list when the selection moves off it, not when the verdict is filed. <b>No toast:</b> the row changed under your hand, which says more.</p>
          </div>
          <div class="pane-foot">
            <a class="btn" href="queue.html">Next case <span class="key">]</span></a>
            <a class="btn btn--quiet" href="log.html">Open the log</a>
          </div>
        </aside>
    """
    page('queue-decided.html', 'Case queue, just filed', 'live',
         z4(CHIPS_DEFAULT, '<b>17 waiting</b> <span class="dim">across 12 of 40 tenants in scope</span>',
            grid(rows_html(DECIDED)), FOOT % '7 of 17 shown, the decided row holds its place'),
         CASE_PANE,
         extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days','<span class=\\\"ovrd\\\">OVRD</span> human decided'] }")

    # ---------------------------------------------------------------- 7. Clerk not investigating
    page('queue-clerk-down.html', 'Case queue, Clerk not investigating', 'clerkdown',
         z4(CHIPS_DEFAULT, '<b>18 waiting</b> <span class="dim">across 12 of 40 tenants in scope</span>',
            '      <div class="banner qbanner"><b>The queue is complete.</b> The connection is fine and Clerk stopped '
            'investigating 11m ago, so nothing is missing and nothing new will arrive until it is back. '
            'Every case in front of you is every case there is.'
            '<span class="act"><span class="btn" aria-disabled="true" title="8.2, not drawn yet">What is down</span></span></div>\n\n'
            + grid(rows_html(BASE_ROWS)),
            FOOT % '7 of 18 shown, and 18 is all of them'),
         fleet())

    # ---------------------------------------------------------------- 8. taken by a colleague
    TAKEN = [BASE_ROWS[0],
             ('High','Larkfield Logistics','Token replay from a new ASN','Real, contain identity','above latitude here','9 signals',['taken!'],'27m','queue-taken.html','')] + BASE_ROWS[2:]
    page('queue-taken.html', 'Case queue, taken by a colleague', 'live',
         z4(CHIPS_DEFAULT, '<b>18 waiting</b> <span class="dim">across 12 of 40 tenants in scope</span>',
            '      <div class="banner banner--quiet qbanner"><b>D. Okonkwo has had this case open for 2m.</b> '
            'It is still yours to rule on if you need to: nothing is locked, and if you both file, the log records '
            'both and marks the second as arriving after the first.</div>\n\n'
            + grid(rows_html(TAKEN)),
            FOOT % '7 of 18 shown, 1 taken by a colleague'),
         fleet())

    # ---------------------------------------------------------------- 9. just escalated, 4.6
    ESCALATED = [BASE_ROWS[0],
       ('High','Larkfield Logistics','Token replay from a new ASN','Real, contain identity',
        'handed to S. Varga, 4s ago','9 signals',['escalated!'],'27m','queue-escalated.html','is-selected')] + BASE_ROWS[2:]
    ESC_PANE = """    <aside class="z5 is-paper" aria-labelledby="ph">
          <div class="pane-head">
            <h2 id="ph">C-4417 &middot; Larkfield Logistics</h2>
            <p class="sub">Token replay from a new ASN &middot; 9 signals &middot; 6 sources, 24h</p>
            <p class="chips-hd"><i class="chip chip--state chip--solid">escalated</i></p>
          </div>
          <div class="pane-body">
            <div class="banner"><b>Handed to S. Varga, 4s ago.</b> Sent through the provider&rsquo;s on call tool. Harrier recorded that it was sent; it is not the thing that delivered it.</div>
            <section class="block">
              <h3>What changed, and what did not</h3>
              <p style="margin:0"><b>No verdict was filed.</b> Clerk&rsquo;s conclusion stands unruled, the case is still open, and the count above is still 18. What changed is that the row no longer looks like a case nobody has touched.</p>
            </section>
            <section class="block">
              <h3>Where it is now</h3>
              <p style="margin:0"><a href="entry.html">The log entry, with the handover as it was written</a></p>
            </section>
            <p class="prov">It cannot be taken back. If S. Varga hands it back, that is a second entry rather than an erased one. <b>No toast:</b> the row wears <b>escalated</b>, which is the feedback.</p>
          </div>
          <div class="pane-foot">
            <a class="btn" href="queue.html">Next case <span class="key">]</span></a>
            <a class="btn btn--quiet" href="log.html">Open the log</a>
          </div>
        </aside>
    """
    page('queue-escalated.html', 'Case queue, just escalated', 'live',
         z4(CHIPS_DEFAULT, '<b>18 waiting</b> <span class="dim">across 12 of 40 tenants in scope</span>',
            grid(rows_html(ESCALATED)), FOOT % '7 of 18 shown, the escalated row holds its place'),
         ESC_PANE,
         extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

    print('generated 9 pages')
