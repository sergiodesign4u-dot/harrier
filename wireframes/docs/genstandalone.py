# -*- coding: utf-8 -*-
# Node 4.2, Case File on its standalone route: /case/{caseId}.
#
# 4.2 is 4.1 without the list, so every block below comes from gencase unchanged. What differs
# is the FRAME: there is no queue beside it, so the exits the queue normally provides have to be
# on the page, and at 360 this is the only rendering the product has.
import sys, os, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

INLINE = C.INLINE + """
/* INLINE: case-standalone :: for reconcile into _wf.css */
/* The pane IS the page. At the desk it is one centred sheet standing in the space the split
   used to hold; at 360 it is the same sheet, full bleed. _wf.css already reserves
   .z5.is-standalone for the narrow half of that, so this only adds the desk half. */
                          it has no list beside it. Declared as a token so nothing reads a raw px */
.z45:has(> .z5.is-standalone){justify-content:center}
.z5.is-standalone{flex:1 1 auto;max-width:var(--sheet);
                  border-left:var(--line-ink);border-right:var(--line-ink)}
.z5.is-standalone .pane-head h1{margin:0;font:600 var(--t-xl)/var(--lh-tight) var(--ui);
                                letter-spacing:-.01em}
.z5.is-standalone .nar{max-width:68ch}
/* The first control at 1440, above the identity, because the queue is the better surface
   for this job and the page says so rather than redirecting. */
.sa-offer{display:flex;gap:var(--s3);align-items:baseline;flex-wrap:wrap;
          margin:0 0 var(--s3);padding:0 0 var(--s3);border-bottom:var(--line)}
.sa-offer .why{flex:1 1 var(--s7);min-width:0;font-size:var(--t-xs);color:var(--soft)}
.sa-route{margin:var(--s2) 0 0;font-family:var(--mono);font-size:var(--t-xs);color:var(--soft);
          overflow-wrap:anywhere}
/* 0.4 carries freshness in the shell strip at 1440. At 360 this node carries it, which is the
   one inheritance break its own state matrix records. */
.sa-fresh{margin:var(--s2) 0 0;font-family:var(--mono);font-size:var(--t-xs);color:var(--soft);
          border:var(--line);border-radius:var(--radius);padding:var(--s1) var(--s2)}
.sa-fresh b{color:var(--ink)}
/* The complement of .only-narrow, which _wf.css already carries on its own. */
.pane-foot .btn.only-desk{display:inline-flex}
@media (max-width:900px){
  /* overflow:visible hands the sticky foot back to the viewport, which is what pins escalate
     to the bottom edge. Inside a scrolling pane it would only stick to the pane. */
  .z5.is-standalone{max-width:none;border-left:none;border-right:none;overflow:visible}
  .z5.is-standalone .pane-head{position:static}
  .z5.is-standalone .pane-head h1{font-size:var(--t-lg)}
  .z5.is-standalone .pane-foot{padding:var(--s2) var(--s3)}
  /* the address is what she arrived BY, so at 03:00 it is three mono lines above the case
     identity that tell her nothing she does not already have. Kept at the desk, where the
     permalink is the thing being copied into a ticket. */
  .sa-route{display:none}
  .sa-offer{display:none}
  .only-desk,.only-desk-i,.pane-foot .btn.only-desk{display:none}
  .pane-foot .btn.only-narrow{display:flex;width:100%;justify-content:space-between}
  /* latitude compressed to the classes in force plus the ones it had to ask about,
     without the reasons. Section 4 of the node. */
  .lat .off .why{display:none}
}"""
Q.INLINE = INLINE

TITLE = 'C-4417 &middot; Larkfield Logistics'
ROUTE = ('        <p class="sa-route"><code>/case/C-4417</code> &middot; the address that travels. '
         '<code>/queue/case/C-4417</code> is the same case with the list, and neither redirects '
         'to the other</p>\n')

# The provenance strip compressed to one line at 360, from 4.1's own words rather than a second
# edition of them: the long form is lifted out of C.PROV so the two cannot drift.
PROV_INNER = re.search(r'<p class="prov">(.*?)</p>', C.PROV, re.S).group(1).strip()

def prov(long_inner=PROV_INNER, short_inner='<b>6 sources</b>, 24h'):
    return ('        <p class="prov"><span class="only-desk-i">%s</span>'
            '<span class="only-narrow">%s</span></p>\n') % (long_inner, short_inner)

def offer(why):
    return ('        <div class="sa-offer">\n'
            '          <a class="btn" href="case.html">Open in the queue</a>\n'
            '          <span class="why">%s</span>\n'
            '        </div>\n') % why

def head(offer_html, chips='', fresh='', sub=C.SUB):
    return ('      <div class="pane-head">\n%s'
            '        <h1 id="ph">%s</h1>\n'
            '        <p class="sub">%s</p>\n%s%s%s      </div>\n'
            ) % (offer_html, TITLE, sub, ROUTE, chips, fresh)

def pane(head_html, body, footer):
    return ('    <aside class="z5 is-paper is-standalone" aria-labelledby="ph">\n%s'
            '      <div class="pane-body">\n%s      </div>\n%s    </aside>\n'
            ) % (head_html, body, footer)

ANNUN = (", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>',"
         "'<b>34 of 36</b> upheld, 30 days'] }")
ANNUN_DECIDED = (", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>',"
                 "'<b>34 of 36</b> upheld, 30 days','<span class=\\\"ovrd\\\">OVRD</span> human decided'] }")

# What 360 cannot do, said on the page rather than left to be discovered at the foot.
LOST = ('        <div class="banner only-narrow"><b>Escalate is the only exit from a phone.</b> '
        'Accept, amend and reject need the evidence and the reasons in view at once, so they are '
        'desk actions. A case you read at 03:00 and know to be benign <b>cannot be closed from '
        'here</b>: it keeps its place in the queue until you are at a desk.</div>\n')

VERDICT_CONTROLS = [
    ('Accept',   'a', 'case-standalone-filed.html', ' btn--primary only-desk'),
    ('Amend',    'm', 'case-amend.html',            ' only-desk'),
    ('Reject',   'r', 'reject.html',                ' only-desk'),
    ('Escalate', 'e', 'escalate.html',              ' only-desk'),
    ('Escalate', 'e', 'escalate.html',              ' btn--primary only-narrow'),
]

if __name__ == '__main__':
    # ------------------------------------------------------------------ 1. arrived by link
    Q.page('case-standalone.html', 'Case file, arrived by link', 'live', '',
           pane(head(offer('Puts this case back in the pane with the list beside it, which is 4.1. '
                           'All four verdict controls work here, and they are offered second rather '
                           'than blocked: filing on this page leaves you on a case you have already '
                           'ruled on, because there is no list for the row to change in.'),
                     fresh='        <p class="sa-fresh only-narrow"><b>Live</b> &middot; last checked 4s</p>\n'),
                C.VERDICT + C.EVIDENCE + prov() + C.tenant_ctx() + C.latitude() + C.stamp() + LOST,
                C.foot(VERDICT_CONTROLS)),
           extra_script=ANNUN)

    # ------------------------------------------------------------------ 2. after filing
    FILED_BANNER = ('        <div class="banner"><b>Accepted by R. Idrissi, 4s ago.</b> Written to the '
                    'log against the snapshot as it stood. <b>This page holds the case and states the '
                    'outcome.</b> It does not advance, because there is no list here to advance to and '
                    'a permalink that walks away is not a permalink.'
                    '<span class="act"><a class="btn" href="entry.html">The log entry</a></span></div>\n')
    FILED_WHAT = ('        <section class="block">\n          <h3>What was decided</h3>\n'
                  '          <p class="nar">Clerk concluded <b>real, contain identity</b>. The action was '
                  'above this tenant&rsquo;s latitude, so it waited for a person, and it has now run.</p>\n'
                  '          <p class="dim" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">On 4.1 the row '
                  'changes under your hand and that is the feedback. There is no row here, so the outcome '
                  'is stated instead and the queue is offered rather than taken.</p>\n        </section>\n')
    Q.page('case-standalone-filed.html', 'Case file, filed from the standalone route', 'live', '',
           pane(head(offer('The next case is there. This page stayed on the one you just ruled on '
                           'because it has no list to move you into, which is the cost of an address '
                           'that travels.'),
                     chips=C.chiprow(['decided', 'acted!']),
                     fresh='        <p class="sa-fresh only-narrow"><b>Live</b> &middot; last checked 4s</p>\n'),
                FILED_BANNER + FILED_WHAT + C.VERDICT + C.EVIDENCE + prov()
                + C.tenant_ctx() + C.latitude()
                + C.stamp(' &middot; ruled by <b>R. Idrissi</b> 4s ago'),
                C.foot([('Open the queue',    '', 'queue.html', ' btn--primary only-desk'),
                        ('Open the log entry','', 'entry.html', ' btn--quiet only-desk'),
                        ('Open the queue',    '', 'queue.html', ' btn--primary only-narrow')])),
           extra_script=ANNUN_DECIDED)

    # ------------------------------------------------------------------ 3. connection stale
    STALE_BANNER = ('        <div class="banner"><span class="only-desk-i"><b>Marked as of the last '
                    'sync.</b> Nothing has arrived for 6m. The case is readable and it is not fresh. '
                    'Filing a verdict is still allowed, because a degraded connection does not block a '
                    'decision and the log records the snapshot you actually saw. <b>There is no list '
                    'here to fall back to</b>, so this page carries the age itself.</span>'
                    '<span class="only-narrow"><b>Stale, 6m.</b> Escalating is still allowed. Everything '
                    'below is as of the last sync.</span>'
                    '<span class="act"><a class="btn" href="case-standalone.html">Try to reconnect</a></span>'
                    '</div>\n')
    # the matrix asks for latitude "as of last sync", so the note goes INSIDE 4.1's block rather
    # than floating after it. One tail, one substitution, so the block itself never forks.
    STALE_LAT = C.latitude().replace(
        '        </section>\n',
        '          <p class="dim" style="margin:0;font-size:var(--t-xs)">Read <b>as of the last sync, '
        '6m ago</b>. A grant changed since then would not show here yet.</p>\n        </section>\n')
    Q.page('case-standalone-stale.html', 'Case file, connection stale on the standalone route', 'stale', '',
           pane(head(offer('The queue is stale too, and it is still the better surface: it has the '
                           'other seventeen cases beside this one. All four verdict controls work here '
                           'either way, because 0.4 settled that a degraded connection does not block '
                           'a decision.'),
                     sub=C.SUB + ' &middot; as of the last sync'),
                STALE_BANNER + C.VERDICT + C.EVIDENCE
                + prov(PROV_INNER + ' <b>As of the last sync, 6m ago.</b>',
                       '<b>6 sources</b>, 24h &middot; as of the last sync')
                + C.tenant_ctx() + STALE_LAT
                + C.stamp(' &middot; <b>frozen at the last sync</b>') + LOST,
                C.foot(VERDICT_CONTROLS)),
           extra_script=ANNUN)

    print('generated 3 case-standalone pages')
