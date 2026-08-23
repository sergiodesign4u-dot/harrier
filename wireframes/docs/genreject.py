# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

INLINE = C.INLINE + """
.axisb{display:flex;flex-direction:column;gap:var(--s2)}
.axisb .locked{display:flex;gap:var(--s2);align-items:baseline;border:1px dashed var(--soft);
               border-radius:var(--radius);padding:var(--s2) var(--s3);font-size:var(--t-sm);color:var(--soft)}
.axisb .locked b{color:var(--ink)}"""
Q.INLINE = INLINE

AXIS_A = [
  ('1','Real, called benign',            'Detection is too narrow',        'detection engineering', 'reject-chosen.html'),
  ('2','Benign, called a threat',        None,                             None,                    'reject-axis-b.html'),
  ('3','Right answer, wrong reasoning',  'Clerk weighted the wrong signal','agent tuning',          'reject-chosen.html'),
  ('4','Right answer, wrong scope',      'Clerk weighted the wrong signal','agent tuning',          'reject-chosen.html'),
  ('5','Not enough evidence either way', 'Nothing to change',              'nowhere',               'reject-chosen.html'),
  ('6','Normal at this tenant',          'Tenant context missing',         'the tenant baseline, locked', 'reject-tenant-normal.html'),
  # The seventh value is the escape hatch, and 0.7 puts it in the state matrix rather than in
  # the list of six, which is how it went undrawn until step 9. It is last on purpose: a taxonomy
  # whose easiest answer is `other` stops describing anything.
  ('7','Other, and say why',              'Held, not routed',               'nowhere yet, and counted', 'reject-other.html'),
]

def optlist(chosen=None):
    out = '          <div class="optlist" role="radiogroup" aria-label="What Clerk got wrong">\n'
    for key, label, derived, routes, href in AXIS_A:
        sel = ' is-chosen' if label == chosen else ''
        route = ('<span class="routes">%s</span>' % routes) if routes else '<span class="routes">asks one more</span>'
        out += ('            <a class="opt%s" href="%s"><span class="key">%s</span>'
                '<span class="lbl">%s</span>%s</a>\n') % (sel, href, key, label, route)
    out += '          </div>\n'
    return out

def dialog(body, footer, title='Reject Clerk&rsquo;s verdict'):
    return ("""  <div class="scrim scrim--desk-only">
    <section class="dialog" role="dialog" aria-modal="true" aria-labelledby="dh">
      <header>
        <h2 id="dh">%s</h2>
        <p class="sub">C-4417 &middot; Larkfield Logistics &middot; Clerk said <b>real, contain identity</b></p>
      </header>
      <div class="body">
%s      </div>
      <footer>%s</footer>
    </section>
  </div>
""") % (title, body, footer)

def page(fname, title, body, footer, sel_state=None):
    z4 = C.z4_with_case('reject.html', sel_state=sel_state)
    narrow_note = ('        <div class="banner only-narrow"><b>Reject is a desk action.</b> '
                   'It needs the six reasons and the evidence in view at the same time, and neither '
                   'fits here. <b>On a phone the exit is escalate</b>, and only escalate: 4.2 settles that a '
                   'case known to be benign cannot be closed from there either.</div>\n')
    z5 = C.pane(C.SUB, '', narrow_note + C.VERDICT + C.EVIDENCE + C.PROV + C.tenant_ctx() + C.latitude() + C.stamp(),
                C.foot([('Accept','a','queue-decided.html',' btn--primary only-desk'),
                        ('Escalate','e','escalate.html',' btn--primary-narrow')]))
    Q.page(fname, title, 'live', z4, z5 + dialog(body, footer),
           extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

FOOT_DISABLED = ('        <span class="hint">A reason is required</span>'
                 '<span class="grow"></span>'
                 '<a class="btn btn--quiet" href="case.html">Cancel <span class="key">Esc</span></a>'
                 '<span class="btn" aria-disabled="true">Reject and tune <span class="key">Enter</span></span>')
def foot_live(where='queue-decided.html'):
    return ('        <span class="hint">One selection, one key</span>'
            '<span class="grow"></span>'
            '<a class="btn btn--quiet" href="case.html">Cancel <span class="key">Esc</span></a>'
            '<a class="btn btn--primary" href="%s">Reject and tune <span class="key">Enter</span></a>' % where)

WHY = ('          <p class="anote">One keystroke picks what Clerk got wrong. '
       'Where it goes is derived from that and only asked when the pairing is genuinely ambiguous, '
       'which is five of six. <b>No <code>Next</code>, and no confirmation step:</b> if rejecting costs more '
       'than accepting, the analyst accepts.</p>\n')

# ------------------------------------------------- 1. opened, nothing chosen
page('reject.html', 'Reject, nothing chosen',
     '        <section class="block">\n          <h3>What Clerk got wrong</h3>\n'
     + optlist() +
     '        </section>\n'
     '        <section class="block">\n          <h3>What changes because of it</h3>\n'
     '          <div class="cons is-empty">Pick a reason above and this fills in. The space is held so nothing jumps.</div>\n'
     '        </section>\n' + WHY,
     FOOT_DISABLED)

# ------------------------------------------------- 2. one of the five that need no second question
page('reject-chosen.html', 'Reject, reason chosen',
     '        <section class="block">\n          <h3>What Clerk got wrong</h3>\n'
     + optlist('Right answer, wrong reasoning') +
     '        </section>\n'
     '        <section class="block">\n          <h3>What changes because of it</h3>\n'
     '          <div class="cons">Goes to <b>agent tuning</b> as <b>Clerk weighted the wrong signal</b>. '
     'The verdict stands; the argument behind it does not, and accepting it would put an unsound argument in the record.</div>\n'
     '        </section>\n'
     '        <div class="field"><label for="note">Anything else, optional</label>'
     '<textarea id="note" rows="2" placeholder="Nothing downstream depends on this"></textarea></div>\n' + WHY,
     foot_live())

# ------------------------------------------------- 3. the sixth, where axis B is genuinely ambiguous
page('reject-axis-b.html', 'Reject, second axis required',
     '        <section class="block">\n          <h3>What Clerk got wrong</h3>\n'
     + optlist('Benign, called a threat') +
     '        </section>\n'
     '        <section class="block">\n          <h3>Where it goes, and this is the one that has to ask</h3>\n'
     '          <div class="axisb">\n'
     '            <a class="opt" href="reject-chosen.html"><span class="key">1</span><span class="lbl">Detection is too broad</span>'
     '<span class="routes">detection engineering</span></a>\n'
     '            <a class="opt" href="reject-chosen.html"><span class="key">2</span><span class="lbl">Tenant context missing</span>'
     '<span class="routes">the tenant baseline</span></a>\n'
     '          </div>\n'
     '          <p class="anote">Two choices, not five. '
     'The other five reasons derive their answer, so this is the only place a second keystroke is asked for.</p>\n'
     '        </section>\n',
     ('        <span class="hint">Where it goes is required</span>'
      '<span class="grow"></span>'
      '<a class="btn btn--quiet" href="case.html">Cancel <span class="key">Esc</span></a>'
      '<span class="btn" aria-disabled="true">Reject and tune <span class="key">Enter</span></span>'))

# ------------------------------------------------- 4. normal at this tenant, locked
page('reject-tenant-normal.html', 'Reject, normal at this tenant',
     '        <section class="block">\n          <h3>What Clerk got wrong</h3>\n'
     + optlist('Normal at this tenant') +
     '        </section>\n'
     '        <section class="block">\n          <h3>Where it goes</h3>\n'
     '          <div class="axisb"><div class="locked"><b>Tenant context missing</b>'
     '<span class="routes">the tenant baseline, and it is locked</span></div></div>\n'
     '          <div class="cons cons--gap"><b>Nothing outside Larkfield Logistics changes.</b> '
     'Sending one client&rsquo;s normality to detection engineering is how a rule gets weakened for the '
     'thirty nine other tenants who did need it.</div>\n'
     '        </section>\n'
     '          <p class="anote">The most consequential rule in the taxonomy, '
     'and it is enforced by the pairing rather than by a warning nobody reads. Straight from design principle 4: '
     'the same signal is a Tuesday at one client and an incident at another.</p>\n',
     foot_live())

# ------------------------------------------------- 5. the write failed, 4.9
page('reject-write-failed.html', 'Reject, the write failed',
     '        <div class="banner"><b>The rejection did not write.</b> Nothing reached the log and nothing reached tuning, '
     'so the reason you picked exists only on this screen.</div>\n'
     '        <section class="block">\n          <h3>What Clerk got wrong</h3>\n'
     + optlist('Right answer, wrong reasoning') +
     '        </section>\n'
     '        <section class="block">\n          <h3>What changes because of it</h3>\n'
     '          <div class="cons">Goes to <b>agent tuning</b> as <b>Clerk weighted the wrong signal</b>. '
     '<b>Not sent.</b></div>\n        </section>\n',
     ('        <span class="hint">Second attempt</span>'
      '<span class="grow"></span>'
      '<a class="btn btn--quiet" href="case-unrecorded.html">Hold it locally</a>'
      '<a class="btn btn--primary" href="queue-decided.html">Try again <span class="key">Enter</span></a>'),
     sel_state=['unrecorded!'])

# ------------------------------------------------- 6. the seventh value, the escape hatch
page('reject-other.html', 'Reject, none of the six fits',
     '        <section class="block">\n          <h3>What Clerk got wrong</h3>\n'
     + optlist('Other, and say why') +
     '        </section>\n'
     '        <section class="block">\n          <h3>Where it goes</h3>\n'
     '          <div class="axisb"><div class="locked"><b>Held, not routed</b>'
     '<span class="routes">nowhere yet, and counted</span></div></div>\n'
     '          <div class="cons cons--gap"><b>Nothing is sent to detection or to tuning.</b> '
     'A reason the taxonomy cannot name is a reason nobody downstream can act on, so it is recorded, '
     'counted, and read by a person.</div>\n'
     '        </section>\n'
     '        <div class="field"><label for="note">What Clerk got wrong, in your words</label>'
     '<textarea id="note" rows="2">Clerk read the maintenance window as the reason and it was the '
     'wrong window, so the conclusion is right by accident</textarea></div>\n'
     '          <p class="gnote">Required here, and only here.</p>\n'
     '          <p class="anote">This is the <b>idle control on the taxonomy</b>. Five per cent of rejections '
     'landing here means the six values are working; thirty per cent means they describe the wrong product, '
     'and the only way to know is to count. That is why <code>other</code> is a recorded value rather than '
     'a blank box, and why it is the one place free text is required instead of optional.</p>\n',
     foot_live())

print('generated 6 reject pages')
