# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C   # C is imported per the contract header; 8.2 has no case pane

# ---------------------------------------------------------------------------------------------
# 8.2 Service unavailable.
#
# Two chrome variants on purpose, and the reason is the node's own first sentence: 8.2 is for
# when nothing renders at all.
#
#   full outage  (unplanned, planned)  -> the console is NOT running, so it cannot draw its own
#                                         navigation, its annunciator or 0.4's strip. What answers
#                                         is a page with the wordmark on it and nothing else.
#                                         Rendering a working Z1 here would offer live links to
#                                         the thing the page has just said is gone.
#   partial                            -> the console IS running, one part of it is not. The full
#                                         shell is correct, Z2 reads Live, and that contrast is the
#                                         whole distinction between this node and 0.4.
# ---------------------------------------------------------------------------------------------

INLINE = Q.INLINE + """
/* INLINE: unavailable :: for reconcile into _wf.css */
/* 8.2 has no pane and no list. One column, centred, and the same block furniture as everywhere. */
.z4--sys{border-right:none;overflow-y:auto;align-items:center}
.outage{width:min(660px,100%);margin:var(--s5) auto var(--s7);padding:0 var(--s4);
        display:flex;flex-direction:column;gap:var(--s4)}
.outage h1{margin:0;font:600 var(--t-xl)/var(--lh-tight) var(--ui)}
.outage h1 .sub{display:block;margin-top:var(--s2);font:400 var(--t-sm)/1.4 var(--mono);
                color:var(--soft);overflow-wrap:anywhere}
/* a fact and its label. Not a table: there are three of them and they read as sentences */
.out-line{display:flex;gap:var(--s3);align-items:baseline;border-top:var(--line);padding-top:var(--s3)}
.out-line .k{flex:0 0 128px;font:600 var(--t-xs)/1.4 var(--mono);letter-spacing:.08em;
             text-transform:uppercase;color:var(--soft)}
.out-line .v{flex:1 1 auto;min-width:0;font-size:var(--t-sm)}
.out-line .v b{font-weight:700;font-size:var(--t-md)}
.out-line .v .why{display:block;margin-top:var(--s1);color:var(--soft)}
/* block 4, the one that makes the page useful. It is the only bordered thing here */
.contact{border:var(--line-ink);border-radius:var(--radius);padding:var(--s3);
         display:flex;flex-direction:column;gap:var(--s2)}
.contact .who{font:600 var(--t-lg)/var(--lh-tight) var(--ui)}
.contact p{margin:0;font-size:var(--t-sm)}
.contact .meta{color:var(--soft)}
.out-act{display:flex;gap:var(--s2);flex-wrap:wrap;align-items:center}
/* the reduced top bar. The console is what is down, so this is not the console's top bar */
.z1--out .note{margin:0;font-family:var(--mono);font-size:var(--t-xs);color:var(--soft)}
/* Section 6 of the node, in one property. On a desk she wants to understand; on a phone at
   03:00 she wants a number, so the contact leaves its place in the reading order and goes
   first. One live page narrowed, not a second file. DOM order is untouched, so the heading
   structure and the tab order both stay as written. */
@media (max-width:900px){
  .outage{margin:var(--s4) auto var(--s6);gap:var(--s4)}
  .out-contact{order:-1}
  /* a 128px label column costs a third of a phone. The label goes above its value instead */
  .out-line{flex-direction:column;gap:var(--s1)}
  .out-line .k{flex:none}
  /* the contact goes first, so it has to be SHORT first. What is trimmed is the reasoning
     about who owns the disclosure decision, which is a desk reading and not a 03:00 one. */
  /* The contact reads first here by choice, which put the only action a viewport and a half
     down. So the action pins to the bottom edge, the same device the pane foot uses at 360.
     Both things are then true at once: the number is what she reads, and the retry is always
     under her thumb. Found by the browser pass at step 9. */
  /* hand the scrollport back to the document, or the sticky below pins to this column
     instead of to the viewport. Same defect the pane foot had, same cause. */
  .z4--sys{overflow:visible}
  .out-act{position:sticky;bottom:0;z-index:2;order:99;
           margin:0 calc(var(--s4) * -1) calc(var(--s6) * -1);
           padding:var(--s3) var(--s4);background:var(--paper);border-top:var(--line-ink)}
  .out-act .btn{flex:1 1 auto;justify-content:center}
}"""
Q.INLINE = INLINE

DUTY = 'The service delivery duty line'   # 4.6 renders the same value. One configuration value, two nodes.

SKELETON = """<!doctype html>
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
  <header class="z1 z1--out">
    <span class="wordmark">Harrier</span>
    <span class="spacer"></span>
    <p class="note">%s</p>
  </header>
  <main class="z45">
%s  </main>
</div>
</div>
<script src="_nav.js"></script>
</body>
</html>
"""


def dark_page(fname, title, note, z4):
    """A page served while the console is not running. The stage panel and _nav.js stay,
       because that is the prototype's own chrome; WF_SHELL is not called, because the
       product's chrome is precisely what is unavailable."""
    open(os.path.join(Q.OUT, fname), 'w').write(SKELETON % (title, INLINE, note, z4))
    return fname


# ---------------------------------------------------------------------------------------------
# blocks, in the order of section 3 of the node
# ---------------------------------------------------------------------------------------------

def head(h1, sub):
    return '        <h1>%s\n          <span class="sub">%s</span>\n        </h1>\n' % (h1, sub)


def filing(lede, body):
    """Block 1, second half, and it is first on the page. Screens.md: this screen names what is
       down AND whether verdicts can still be filed. It is the only line that changes what she
       does in the next minute, so nothing stands above it.
       .banner is a flex container, so the body is ONE child: an inline <b> left loose in a
       flex parent becomes its own flex item and takes a line of its own, which orphans the
       punctuation on either side of it."""
    return ('        <div class="banner"><b>%s</b><span>%s</span></div>\n') % (lede, body)


def line(k, v, why):
    return ('        <div class="out-line"><span class="k">%s</span>'
            '<span class="v"><b>%s</b><span class="why">%s</span></span></div>\n') % (k, v, why)


def contact(meta, tail=''):
    return ('        <section class="block out-contact">\n          <h3>What to do instead</h3>\n'
            '          <div class="contact">\n'
            '            <span class="who">%s</span>\n'
            '            <p class="meta">%s</p>\n'
            '            <p><b>The number is a value your provider declares.</b> Harrier does not carry one of its '
            'own, and a wrong number at 03:00 costs more than no number.</p>\n'
            '            <p>Tell them the console is not answering and for how long. The clients are still '
            'generating signal while this page is up.</p>\n'
            '%s'
            '          </div>\n'
            '          <p class="anote only-desk"><b>Shown here because you '
            'are signed in.</b> Whether it is shown to somebody who is not is a disclosure call for the provider '
            'rather than for us, and nobody has made it. The page is reachable either way, so the block either '
            'appears twice or it appears once, and that is the decision still outstanding.</p>\n'
            '        </section>\n') % (DUTY, meta, tail)


def retry(primary_label, primary_href, second=None, note=None):
    out = '        <div class="out-act">\n'
    out += '          <a class="btn btn--primary" href="%s">%s</a>\n' % (primary_href, primary_label)
    if second:
        out += '          <a class="btn btn--quiet" href="%s">%s</a>\n' % (second[1], second[0])
    out += '        </div>\n'
    out += ('        <p class="anote"><b>Retry is a button, not a spinner.</b> A spinner at four minutes looks '
            'exactly like a spinner at four seconds, so it never says whether anything is being attempted. '
            'You press this, and it tells you what happened.%s</p>\n') % ((' ' + note) if note else '')
    return out


LEFT_OUT = ('        <p class="anote"><b>No illustration, no apology paragraph and no status page link.</b> '
            'A status page that lives beside the thing which is down can be down with it, and a dead link at '
            '03:00 costs a minute nobody has. What this page owes you is a name, a duration and somebody to '
            'call, and at 360 it hands them over in the other order.</p>\n')


def sys_page(body, cls=''):
    return ('    <section class="z4 z4--sys%s">\n      <div class="outage">\n%s      </div>\n    </section>\n\n'
            ) % (cls, body)


# ---------------------------------------------------------------------------------------------
# 1. unplanned, the base state
# ---------------------------------------------------------------------------------------------
dark_page(
    'unavailable.html', 'Service unavailable, unplanned',
    'This page is all that answered. The console is not running.',
    sys_page(
        head('Harrier is unavailable',
             'Unplanned &middot; every screen, every tenant &middot; it is not your connection')
        + filing('No verdict can be filed until this is over.',
                 'There is no console to file from, so a decision you reach in the next few minutes exists only in '
                 'your head. A degraded connection does not block a decision and still records the snapshot you '
                 'saw. <b>This is not that.</b>')
        + line('What is down', 'The whole console.',
               'Every screen and every tenant. Not the connection dropping and not Clerk stopping: both of those '
               'leave the console up, and the strip under the top bar says which one you have.')
        + line('Unreachable for', '4m',
               'The same duration language the connection strip uses, for the same question. Four minutes in is a '
               'different situation from four seconds in.')
        + line('Estimate', 'No estimate',
               'Your provider&rsquo;s service delivery owns this line. Harrier will not fill it with a plausible '
               'one while waiting.')
        + retry('Try again', 'queue.html')
        + contact('The provider&rsquo;s declared fallback, and the same one an escalation reaches for when nobody '
                  'is on the rota. One configuration value, two places it shows up.')
        + LEFT_OUT))

# ---------------------------------------------------------------------------------------------
# 2. planned maintenance
# ---------------------------------------------------------------------------------------------
WINDOW_END = '2026-08-22T04:00:00Z'
dark_page(
    'unavailable-planned.html', 'Service unavailable, planned maintenance',
    'This page is all that answered. The console is down to plan.',
    sys_page(
        head('Harrier is down for planned maintenance',
             'Published window 2026-08-22T02:00:00Z to ' + WINDOW_END)
        + filing('No verdict can be filed inside the window.',
                 'The same sentence as any other outage, and the only difference is that this one was on a '
                 'calendar. Anything you decide before it closes goes to the duty line by voice, or it waits.')
        + line('What is down', 'The whole console, by plan.',
               'Every screen and every tenant, for the length of the published window. Nothing is broken.')
        + line('Started', 'On time.',
               '<b>No duration here, and that is deliberate.</b> &ldquo;Unreachable for 58m&rdquo; is the wrong '
               'sentence about something running to plan, and the only number that changes what you do is below.')
        + line('Window closes', WINDOW_END,
               'The provider&rsquo;s published window, not an estimate Harrier made. UTC, because you carry tenants '
               'in the United States and the EU and a local rendering makes two people disagree about when this ends.')
        + retry('Try again', 'queue.html', note='The window can close early, and this is how you find out.')
        + contact('The provider&rsquo;s declared fallback, and the same one an escalation reaches for when nobody '
                  'is on the rota. Shown during a planned window too: the clients did not agree to the window.')
        + '        <p class="anote"><b>Whether maintenance is ever scheduled inside a shift is still open.</b> '
          'It is the provider&rsquo;s call rather than ours, and nobody has made it. If the answer turns out to be '
          'never, this state is furniture: an analyst would only ever meet it between shifts, and the page would be '
          'the unplanned one and the partial one and nothing else.</p>\n'
        + LEFT_OUT))

# ---------------------------------------------------------------------------------------------
# 3. part of it is down. The console IS up, so this one wears the real shell.
# ---------------------------------------------------------------------------------------------
Q.page(
    'unavailable-partial.html', 'Service unavailable, part of it is down', 'live',
    sys_page(
        head('The decision log is unavailable',
             'Part of Harrier is down &middot; the queue is live and 18 cases are waiting on a decision')
        + filing('A verdict filed now will not be recorded.',
                 'You can open a case and rule on it, and the write will fail. The decision is then held on this '
                 'machine, marked <b>unrecorded</b>, and you are the only person who can see it until the log is '
                 'back. Same state a single failed write produces, except that here it is certain rather than '
                 'possible.')
        + line('What is down', 'The decision log.',
               'Reading past entries and writing new ones. The queue, the case file and the fleet are answering '
               'normally. <b>Both halves are named</b>, because &ldquo;partly unavailable&rdquo; on its own says '
               'nothing about whether to keep working.')
        + line('Unavailable for', '12m',
               'The same duration language the connection strip uses. The strip is not what is wrong here, which is '
               'why it still reads Live above and this page is what says otherwise.')
        + line('Estimate', 'No estimate',
               'Your provider&rsquo;s service delivery owns this line, and nothing is published yet.')
        + retry('Try again', 'log.html',
                second=('Open the queue', 'queue.html'),
                note='The queue is a real exit here rather than a consolation: it is up, and the cases on it are '
                     'the same cases.')
        + contact('<b>Shown because the part that is down blocks a decision.</b> If what were unavailable did not '
                  'touch one, this block would not be on the page and it would tell you to come back later '
                  'instead. Same value as an escalation with nobody on the rota.',
                  tail='            <p>Two things worth saying on the call: the log is not taking writes, and you '
                       'are still ruling, so there will be decisions to reconcile.</p>\n')
        + '        <p class="anote"><b>This is the state where the log&rsquo;s own rule bites.</b> Every Clerk action '
          'and every human override writes to an append only record carrying the evidence as it stood. When that '
          'record is unreachable, ruling is still possible and <b>defending the ruling later is what is at risk</b>, '
          'which is why the line at the top of this page is the first thing on it.</p>\n'
        + LEFT_OUT),
    '', current='log')

print('generated 3 pages')
