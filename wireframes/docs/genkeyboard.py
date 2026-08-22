# -*- coding: utf-8 -*-
# 0.5 Keyboard map. ONE page: the dialog open over the queue, with C-4417 in the pane.
#
# Why it renders over the queue with a case selected rather than over a bare list:
# node 0.5 section 4 says teaching happens AT THE CONTROL and the map is only the lookup.
# The scrim is anchored clear of the pane, so the verdict footer with a, m, r and e printed
# on the controls themselves stays in view beside the map. The drawing therefore proves the
# rule instead of asserting it, and a row here that no control shows is visibly the map
# covering for a control, which is what section 4 calls a failure.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

INLINE = C.INLINE + """
/* INLINE: keyboard :: for reconcile into _wf.css
   The list itself reuses .optlist and .opt from 4.4: same component, a key chip with a label
   and a right hand meta cell. Only the two-line label, the wider dialog and the remap foot
   are new. Every value through var(). */
.dialog--map{width:min(720px,100%)}
.keys{flex:0 0 118px;display:flex;flex-wrap:wrap;gap:var(--s1)}
.keys .key{font-family:var(--mono);font-size:var(--t-xs);border:var(--line-ink);
           border-radius:var(--radius);padding:0 var(--s1);flex:0 0 auto;white-space:nowrap}
.keys .key.is-none{border-style:dashed;color:var(--soft)}
.keys .ksep{font-family:var(--mono);font-size:var(--t-xs);color:var(--soft);align-self:center}
.kwhere{display:block;margin-top:var(--s1);font-family:var(--mono);font-size:var(--t-xs);color:var(--soft)}
.kgap{border:1px dashed var(--soft);border-radius:var(--radius);padding:0 var(--s1);white-space:nowrap}
.opt .routes.kscope{flex:0 0 152px;white-space:normal;line-height:1.3}
.rmp{display:flex;flex-direction:column;border:var(--line-ink);border-radius:var(--radius)}
.rmp-row{display:flex;gap:var(--s3);align-items:center;padding:var(--s2) var(--s3);
         border-bottom:var(--line);font-size:var(--t-sm)}
.rmp-row:last-child{border-bottom:none}
.rmp-row .what{flex:1 1 auto;min-width:0}
.rmp-row .what .kk{display:block;font-family:var(--mono);font-size:var(--t-xs);color:var(--soft)}
.rmp-row select{flex:0 0 auto;font:var(--t-sm)/1.3 var(--ui);color:var(--ink);background:var(--paper);
                border:var(--line-ink);border-radius:var(--radius);padding:var(--s1) var(--s2)}"""
Q.INLINE = INLINE


# ---------------------------------------------------------------- builders
def krow(keys, what, where, scope, gap=False, none=False, tail=''):
    ks = ''.join(('<span class="ksep">%s</span>' % k[1:]) if k.startswith(':')
                 else ('<span class="key%s">%s</span>' % (' is-none' if none else '', k))
                 for k in keys)
    w = ('<span class="kgap">%s</span>' % where) if gap else where
    return ('            <div class="opt">\n'
            '              <span class="keys">%s</span>\n'
            '              <span class="lbl">%s<span class="kwhere">shown on: %s%s</span></span>\n'
            '              <span class="routes kscope">%s</span>\n'
            '            </div>\n') % (ks, what, w, tail, scope)


def kgroup(title, rows, note=''):
    out = '        <section class="block">\n          <h3>%s</h3>\n' % title
    out += '          <div class="optlist">\n' + ''.join(rows) + '          </div>\n'
    if note:
        out += '          <p class="gnote">%s</p>\n' % note
    return out + '        </section>\n'


SEL = ('<select aria-label="%s"><option>On, the letter alone</option>'
       '<option>On, but it needs Ctrl</option><option>Off</option></select>')


def rmp_row(label, keys, aria):
    return ('            <div class="rmp-row"><span class="what">%s<span class="kk">%s</span></span>%s</div>\n'
            ) % (label, keys, SEL % aria)


# ---------------------------------------------------------------- the map
LEDE = ('        <div class="banner banner--quiet"><b>Every key below is inert right now.</b> '
        'The map holds focus, the screen behind it is inert while it is open, and Escape closes '
        'the map without touching the case you had selected.</div>\n')

MOVE = kgroup('Move in the list', [
    krow(['&uarr;', '&darr;'], 'Move the selection. The pane follows, so reading costs nothing.',
         'the list foot, 3.1', 'the list has focus'),
    krow(['Home', 'End'], 'First and last row in view.',
         'nowhere yet', 'the list has focus', gap=True),
    krow(['Ctrl + Home', 'Ctrl + End'], 'First and last row of the whole list.',
         'nowhere yet', 'the list has focus', gap=True),
], 'None of these is a letter, a number or a symbol, so SC 2.1.4 does not reach them and they are '
   'not in the control at the foot of this map.')

OPENCLOSE = kgroup('Open and close', [
    krow(['Enter'], 'Moves focus into the pane. Arrows read, <b>Enter</b> decides, and that is what '
                    'arms the three keys below.',
         'the list foot, 3.1', 'the list has focus'),
    krow(['Escape'], 'Deselects the case and returns the pane to the fleet.',
         'nowhere yet', 'the list or the pane has focus, and no dialog is open', gap=True),
    krow(['Escape'], 'Closes the dialog and <b>does not go any further</b>. One press closes, a second '
                     'press deselects, so dismissing a dialog never costs you the case you had open.',
         'the Cancel control on 4.4, 4.5 and 4.6', 'a dialog is open'),
], 'Escape carries two meanings and this map says both, because the collision is real: the dialog '
   'pattern claims it and 0.1 already had it.')

RULE = kgroup('Rule on the case', [
    krow(['a'], 'Accept Clerk&rsquo;s verdict as filed.',
         'the Accept control, 4.1', 'a case is in the pane &middot; SC 2.1.4'),
    krow(['m'], 'Amend the narrative in place, 4.5. Once the field has focus, letters are letters.',
         'the Amend control, 4.1', 'a case is in the pane &middot; SC 2.1.4'),
    krow(['r'], 'Reject and say what Clerk got wrong, 4.4.',
         'the Reject control, 4.1', 'a case is in the pane &middot; SC 2.1.4'),
    krow(['1', ':to', '6'], 'Pick what Clerk got wrong. One selection, one key.',
         'each reason row, 4.4', 'the reject dialog has focus and no text field does &middot; SC 2.1.4'),
    krow(['Enter'], 'Files the rejection, and only once a reason is chosen.',
         'the Reject and tune button, 4.4', 'the reject dialog, outside the note field'),
], 'Live only while <b>a case</b> is in the pane. With the fleet at rest there is no case, so all of '
   'these are dead. That is the third route through SC 2.1.4 and it is what makes the set legal at all.')

LEAVE = kgroup('Leave the case open', [
    krow(['e'], 'Escalate to the person on the rota, 4.6. Also the only live control on a case whose '
                'evidence has aged out, 4.7.',
         'the Escalate control, 4.1', 'a case is in the pane &middot; SC 2.1.4'),
    krow(['Enter'], '<b>Makes a line. It does not file.</b> The button files.',
         'the footer note, 4.6', 'the escalate dialog, inside a prompt'),
])

INCONSISTENCY = (
    '        <div class="banner"><span><b>Enter is not the same key in 4.4 and 4.6, and that was chosen.</b> '
    'In <b>reject</b> the input is a selection, so <b>Enter</b> completes it. In <b>escalate</b> the input '
    'is prose, and <b>Enter</b> inside prose has to make a line. Making the two agree would break one of '
    'them, and the one it would break is the handover written at 03:00. It is listed here rather than '
    'smoothed away, because a person who learns one and is surprised by the other is owed the reason.'
    '</span></div>\n')

SECTIONS = kgroup('Sections', [
    krow(['none'], 'Queue, Shift and Log. 0.2 gives each a destination and binds no key to any of them, '
                   'so there is nothing to press. Listed so the absence is a decision you can see rather '
                   'than a line somebody forgot.',
         'the navigation in Z1, as a click', 'always, and it is a pointer', none=True),
])

THISMAP = kgroup('This map', [
    krow(['?'], 'Opens this map from anywhere. The map is found from the control in Z1; the key is for '
                'people who already know it is here.',
         'nowhere yet', 'no text field has focus &middot; SC 2.1.4', gap=True,
         tail=', and 0.2 puts the trigger in Z1'),
    krow(['Escape'], 'Closes it. Nothing behind it changed and the selection is where you left it.',
         'the Close control below', 'the map has focus'),
    krow(['Tab', 'Shift + Tab'], 'Cycles through this map and wraps at either end. Nothing outside it is '
                                 'reachable while it is open.',
         'nowhere, and Tab is not a shortcut', 'the map has focus'),
])

LEGEND = ('        <p class="gnote"><b>shown on</b> names the control that teaches the key. Principle 3 '
          'says the control teaches and this map is only the lookup, so a row reading '
          '<span class="kgap">nowhere yet</span> is the map covering for a control that never printed its '
          'own key. <b>Four rows read that way.</b> Each one is a defect in that control, not in this list.</p>\n')

REMAP = ('        <section class="block">\n'
         '          <h3>Turn them off, or make them need a modifier</h3>\n'
         '          <div class="rmp">\n'
         + rmp_row('<b>Every single character shortcut</b>', 'a &nbsp; m &nbsp; r &nbsp; e &nbsp; 1 to 6 &nbsp; ?',
                   'All single character shortcuts')
         + rmp_row('Rule on the case', 'a &nbsp; m &nbsp; r &nbsp; 1 to 6', 'Rule on the case shortcuts')
         + rmp_row('Leave the case open', 'e', 'Escalate shortcut')
         + rmp_row('This map', '?', 'Keyboard map shortcut')
         + '          </div>\n'
         '          <p class="gnote">SC 2.1.4 is Level A and it asks for one of three things. The focus '
         'rule on every row above is the first. This is the second, and it is here because without it a '
         'speech user has no way to stop <b>a</b> meaning accept while the pane is focused, which is the '
         'exact person the criterion was written for.</p>\n'
         '          <p class="gnote"><b>Whole set and per group, never per key.</b> Forty two nodes of '
         'surface and a bespoke keymap is a support burden with no job behind it.</p>\n'
         '          <p class="gnote">Arrows, Home, End, Enter, Escape and Tab are not in this control. '
         'The criterion covers letter, punctuation, number and symbol keys, and none of those is one.</p>\n'
         '          <p class="gnote">This control sits in the map while the map is the only place keys are '
         'listed. Where it belongs once there is a settings surface is <b>open</b>, and it is the same '
         'missing surface 0.6, 0.7 and 0.8 already point at.</p>\n'
         '        </section>\n')

BODY = (LEDE + MOVE + OPENCLOSE + RULE + LEAVE + INCONSISTENCY + SECTIONS + THISMAP + LEGEND + REMAP)

FOOTER = ('        <span class="dim" style="font-size:var(--t-xs)">Nothing here rules on a case. '
          'The control that turns these keys off, or makes them need a modifier, is at the foot of the list.</span>'
          '<span class="grow"></span>'
          '<a class="btn btn--primary" href="case.html">Close <span class="key">Esc</span></a>')

DIALOG = ("""  <div class="scrim scrim--desk-only">
    <section class="dialog dialog--map" role="dialog" aria-modal="true" aria-labelledby="dh">
      <header>
        <h2 id="dh">Keyboard map</h2>
        <p class="dim" style="margin:var(--s1) 0 0;font-size:var(--t-sm)">Grouped by what the key does, not by which key it is. <b>Every row says when the key is live</b>, because a key that fires while you are typing a rejection reason is a trap rather than a shortcut.</p>
      </header>
      <div class="body">
%s      </div>
      <footer>%s</footer>
    </section>
  </div>
""") % (BODY, FOOTER)

# ---------------------------------------------------------------- the host screen
NARROW = ('        <div class="banner only-narrow"><b>There is no keyboard here, so there is no map.</b> '
          'The keyboard map is a desk surface and its trigger is dropped at this width rather than moved. '
          'On a phone the exits are accept and escalate, and both are buttons.</div>\n')

z4 = C.z4_with_case('keyboard.html')
z5 = C.pane(C.SUB, '',
            NARROW + C.VERDICT + C.EVIDENCE + C.PROV + C.tenant_ctx() + C.latitude() + C.stamp(),
            C.foot(C.ALL_FOUR))

Q.page('keyboard.html', 'Keyboard map', 'live', z4, z5 + DIALOG,
       extra_script=", annun:{ lead:'LARKFIELD LOGISTICS', parts:['acts alone up to <b>contain endpoint</b>','<b>34 of 36</b> upheld, 30 days'] }")

print('generated 1 keyboard page')
