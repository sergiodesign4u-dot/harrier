# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

INLINE = C.INLINE + """
.rcpt{border:var(--line);border-radius:var(--radius);padding:var(--s3);
      display:flex;flex-direction:column;gap:var(--s1)}
.rcpt .who{font-size:var(--t-md);font-weight:600}
.rcpt .meta{font-size:var(--t-sm);color:var(--soft)}
.rcpt .how{font-size:var(--t-sm)}
.rcpt.is-gone{border-style:dashed}
.rcpt.is-gone .who{color:var(--soft);text-decoration:line-through}
.prompts{display:flex;flex-direction:column;gap:var(--s3)}
.dialog > .body > .block--rcpt{order:-1}
@media (max-width:900px){
  .esc-desk{display:none}
  .dialog > .body > .esc-first{order:-2}
}"""
Q.INLINE = INLINE

RCPT_NAME = 'S. Varga'
DUTY = 'the service delivery duty line'

# ---------------------------------------------------------------- shared parts
def rcpt(window='on for another <b>3h</b>'):
    return ('        <section class="block block--rcpt">\n          <h3>Who this goes to</h3>\n'
            '          <div class="rcpt">\n'
            '            <span class="who">%s</span>\n'
            '            <span class="meta">SOC lead &middot; %s</span>\n'
            '            <span class="how">Paged through the provider&rsquo;s on call tool. '
            '<b>Harrier reads the rota, it does not own it</b>, and it records that this was sent rather than delivering it.</span>\n'
            '          </div>\n        </section>\n') % (RCPT_NAME, window)

def prompts(first='', second='', third='', first_label='What I checked'):
    def fld(fid, label, value, ph, cls=''):
        return ('            <div class="field%s"><label for="%s">%s</label>'
                '<textarea id="%s" rows="2" placeholder="%s">%s</textarea></div>\n'
                ) % (cls, fid, label, fid, ph, value)
    out = '        <section class="block">\n          <h3>The handover</h3>\n          <div class="prompts">\n'
    out += fld('p1', first_label, first, 'Optional, and prompted anyway', ' esc-desk')
    out += fld('p2', 'What I could not do', second, 'Optional, and prompted anyway', ' esc-desk')
    out += fld('p3', 'What I need from you', third, 'Optional, and prompted anyway')
    out += '          </div>\n'
    out += ('          <p class="dim esc-desk" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">'
            'Three prompts, all optional. <b>No taxonomy and no severity picker:</b> a rejection routes to a machine '
            'so it must be machine readable, and this routes to a person who will read it. Structure here serves '
            'comprehension, and it is what stops the quality of a handover depending on how tired its author was.</p>\n')
    out += ('          <p class="dim only-narrow" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">'
            '<b>One prompt here, not three.</b> Three empty fields at 03:00 produce a handover that looks complete '
            'and is not. The handover is thinner from a phone, and that is honest rather than ideal.</p>\n')
    out += '        </section>\n'
    return out

CONS_DESK = ('The case <b>stays open</b> and gains <b>escalated</b>, so it keeps its place in the queue and stops '
             'looking like a case nobody has touched. <b>No verdict is filed and nothing is tuned.</b> '
             'The escalation is written to the log either way, and it cannot be taken back: if it comes back to you, '
             'that is a new entry rather than an erased one.')
CONS_NARROW = 'The case <b>stays open</b> and gains <b>escalated</b>. No verdict is filed. It is written to the log.'

def cons(text_desk=CONS_DESK, text_narrow=CONS_NARROW, extra_class=''):
    return ('        <section class="block">\n          <h3>What happens when you send it</h3>\n'
            '          <div class="cons%s"><span class="esc-desk">%s</span>'
            '<span class="only-narrow">%s</span></div>\n        </section>\n'
            ) % (extra_class, text_desk, text_narrow)

def foot(primary, cancel='case.html', note='<b>Enter</b> makes a line here, it does not file. The button files.'):
    return ('        <span class="dim esc-desk" style="font-size:var(--t-xs)">%s</span>'
            '<span class="grow"></span>'
            '<a class="btn btn--quiet" href="%s">Cancel <span class="key">Esc</span></a>'
            '%s') % (note, cancel, primary)

def dialog(sub, body, footer, title='Escalate C-4417'):
    return ("""  <div class="scrim">
    <section class="dialog" role="dialog" aria-modal="true" aria-labelledby="dh">
      <header>
        <h2 id="dh">%s</h2>
        <p class="dim" style="margin:var(--s1) 0 0;font-size:var(--t-sm)">%s</p>
      </header>
      <div class="body">
%s      </div>
      <footer>%s</footer>
    </section>
  </div>
""") % (title, sub, body, footer)

SUB_DEFAULT = ('C-4417 &middot; Larkfield Logistics &middot; Clerk filed <b>real, contain identity</b>, '
               'and it is still open')

def page(fname, title, sub, body, footer, case_href='escalate.html', pane_body=None, pane_sub=None, sel_state=None):
    z4 = C.z4_with_case(case_href, sel_state=sel_state)
    z5 = C.pane(pane_sub or C.SUB, '',
                pane_body if pane_body is not None
                else C.VERDICT + C.EVIDENCE + C.PROV + C.tenant_ctx() + C.latitude() + C.stamp(),
                C.foot([('Accept','a','queue-decided.html',' btn--primary'),
                        ('Escalate','e',fname,'')]))
    Q.page(fname, title, 'live', z4, z5 + dialog(sub, body, footer),
           extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

# ---------------------------------------------------------------- 1. default
page('escalate.html', 'Escalate, default', SUB_DEFAULT,
     rcpt() + prompts() + cons(),
     foot('<a class="btn btn--primary" href="queue-escalated.html">Escalate to %s</a>' % RCPT_NAME))

# ---------------------------------------------------------------- 2. opened from 4.7
page('escalate-from-expired.html', 'Escalate, opened from evidence expired',
     'C-4417 &middot; Larkfield Logistics &middot; Clerk filed <b>real, contain identity</b> against a snapshot that is gone',
     rcpt()
     + prompts(first='The evidence snapshot aged out of retention on 2026-08-14, so the nine signals behind '
                     'Clerk&rsquo;s verdict are no longer retrievable.')
     + cons(CONS_DESK + ' <b>4.7 left no other exit:</b> a verdict filed now would rest on evidence nobody can '
                        'produce in April, which is the one thing this product exists to prevent.',
            CONS_NARROW + ' There is no other exit from an expired case.'),
     foot('<a class="btn btn--primary" href="queue-escalated.html">Escalate to %s</a>' % RCPT_NAME,
          cancel='case-expired.html'),
     case_href='escalate-from-expired.html',
     pane_sub=C.SUB + ' &middot; snapshot no longer retrievable',
     pane_body=C.VERDICT
       + '        <section class="block">\n          <h3>Evidence, 9 signals</h3>\n'
         '          <div class="tomb"><b>The snapshot is gone.</b> The sources aged out of retention on '
         '<b>2026-08-14</b>. What was here is recorded; what it said is not retrievable.</div>\n        </section>\n'
       + '        <p class="prov">6 sources queried, 24h window, <b>as of the last good read</b>.</p>\n'
       + C.tenant_ctx() + C.latitude() + C.stamp())

# ---------------------------------------------------------------- 3. nobody on the rota
NOBODY = ('        <section class="block block--rcpt">\n          <h3>Who this goes to</h3>\n'
          '          <div class="rcpt is-gone">\n'
          '            <span class="who">%s</span>\n'
          '            <span class="meta">SOC lead &middot; rota window ended <b>2h</b> ago, and nobody picked it up</span>\n'
          '            <span class="how"><b>Nobody is on the next level.</b> Named anyway, because who it would '
          'have gone to is the first thing you need in order to chase it.</span>\n'
          '          </div>\n'
          '          <div class="optlist" role="radiogroup" aria-label="Fallback recipient" style="margin-top:var(--s3)">\n'
          '            <label class="opt"><span class="key">1</span><span class="lbl">%s</span>'
          '<span class="routes">the provider&rsquo;s declared fallback</span></label>\n'
          '          </div>\n'
          '          <p class="dim" style="margin:var(--s2) 0 0;font-size:var(--t-xs)">A configuration value the '
          'provider declared, not a guess, and the same one 8.2 shows when the console itself is down. '
          '<b>Choosing it is what makes a recipient exist.</b></p>\n'
          '        </section>\n') % (RCPT_NAME, DUTY[0].upper() + DUTY[1:])
page('escalate-no-recipient.html', 'Escalate, nobody on the rota', SUB_DEFAULT,
     NOBODY + prompts()
     + cons('Nothing is sent yet, and the case does not gain <b>escalated</b>. '
            '<b>An escalation filed with nobody attached is a case that looks handed over and is not</b>, '
            'which is worse than a case that is plainly still open. Pick the fallback above and this becomes '
            'the same sentence as everywhere else.',
            'Nothing is sent yet. The case does not gain <b>escalated</b> until somebody is attached to it.',
            extra_class=' is-empty'),
     foot('<span class="btn" aria-disabled="true">Escalate</span>',
          note='<b>Disabled until a recipient exists.</b> <b>Enter</b> makes a line here in any case.'),
     case_href='escalate-no-recipient.html')

# ---------------------------------------------------------------- 4. the escalation did not write, 4.9
page('escalate-write-failed.html', 'Escalate, it did not write', SUB_DEFAULT,
     '        <div class="banner esc-first"><b>The escalation did not write.</b> You sent it 40s ago and the log did not '
     'take it, so <b>nobody has been told</b>. The case stays open and <b>unescalated</b>, which is not the same '
     'state as held locally: there, a decision exists and is unrecorded; here, no handover happened at all.'
     '<span class="act"><a class="btn btn--primary" href="queue-escalated.html">Try again</a></span></div>\n'
     + rcpt(window='frozen at the last good read of the rota')
     + prompts(first='Correlated the token against the corporate range and confirmed the same correlationId on both sign ins.',
               second='Could not reach the tenant&rsquo;s mail admin to confirm whether the forwarding rule is sanctioned.',
               third='A call to the client, and a decision on whether to disable the account before 08:00.')
     + cons('<b>Last shown, and it did not happen.</b> The case stays open and unescalated. Your three answers '
            'are preserved on this screen and nowhere else, so leaving now loses them.',
            '<b>It did not happen.</b> The case stays open and unescalated. Your answer is preserved here and nowhere else.'),
     foot('<a class="btn btn--primary" href="queue-escalated.html">Try again <span class="key">&#8635;</span></a>',
          note='<b>Enter</b> makes a line here, it does not file. The button retries.'),
     case_href='escalate-write-failed.html')

print('generated 4 escalate pages')
