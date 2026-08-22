# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q, gencase as C

# ---------------------------------------------------------------------------------------------
# 8.1 Not found. One page, and the node says why there is only one: it is itself an error state,
# and a state of a state is a node the map does not have.
#
# The rule the page exists to make true, from section 2 of the node: three different situations
# must produce ONE identical page. A case id that does not exist, a case at a tenant this
# provider does not cover, and a case at a tenant this role does not open. If any of the three
# rendered differently, the difference would be the leak, and the address bar would become a
# way to enumerate another provider's clients. So the renderer below takes the arrival as an
# argument and then throws it away, and the script asserts that it did.
# ---------------------------------------------------------------------------------------------

INLINE = Q.INLINE + """
/* INLINE: not-found :: for reconcile into _wf.css
   One column, no pane, no fixtures. Every value through var() except the measure, which has
   no token in the sheet yet: see point 4 of the report. */
.z4--solo{border-right:none;overflow-y:auto;align-items:center}
.nf{width:min(66ch,100%);margin:0 auto;padding:var(--s7) var(--s4);
    display:flex;flex-direction:column;gap:var(--s5)}
.nf h1{margin:0;font:600 var(--t-xl)/var(--lh-tight) var(--ui)}
.nf-say{margin:0;font-size:var(--t-lg);line-height:var(--lh)}
.nf-say b{font-weight:700}
/* Block 2 of the bank is TWO NAMED EXITS IN THE SENTENCE, not a lone button, so they are
   links. inline-block buys them a real tap height at 360 without turning them into a pair
   of buttons, which is the thing the bank ruled out. */
.nf-exits{margin:0;font-size:var(--t-md)}
.nf-exits a{display:inline-block;padding:var(--s1) 0;color:var(--ink);font-weight:600;
            text-underline-offset:3px}
.nf-addr{display:flex;gap:var(--s2);align-items:center;flex-wrap:wrap;
         border:var(--line);border-radius:var(--radius);padding:var(--s2) var(--s3);
         background:var(--fill)}
.nf-addr code{font-family:var(--mono);font-size:var(--t-sm);overflow-wrap:anywhere;
              flex:1 1 auto;min-width:0}
.nf-note{margin:0;font-size:var(--t-xs);color:var(--soft)}
.nf-note b{color:var(--ink)}
.nf-note--sep{border-top:var(--line);padding-top:var(--s3)}
/* 360, and this page is reachable from a pager at 03:00 so it is a real width, not a proof.
   Desktop first: the two exits are text in a sentence at the desk, and at a phone they keep
   being text in a sentence and simply get bigger, which is what makes them tappable without
   becoming the pair of buttons the block bank ruled out. */
@media (max-width:900px){
  .nf{padding:var(--s5) var(--s3) var(--s7);gap:var(--s4)}
  .nf-exits{font-size:var(--t-lg)}
  .nf-exits a{padding:var(--s2) 0}
}"""
Q.INLINE = INLINE

# The address that failed. Same short opaque format as the canon, and it names nothing: 0.8
# settled that a case id carries no tenant and no date, which is the only reason it is safe to
# print on a page reachable without signing in. It is deliberately NOT one of the three
# canonical cases, because all three of those resolve.
FAILED = '/case/C-4419'


def render(arrival):
    """Build the page for one arrival, and ignore which arrival it was.

    `arrival` is accepted so the caller can prove the parameter changes nothing. Every branch
    that would read it is the branch that leaks, so there is no branch."""
    del arrival

    z4 = (
        '    <section class="z4 z4--solo" aria-labelledby="nfh">\n'
        '      <div class="nf">\n'

        # Block 1: a plain statement, and nothing above it.
        '        <h1 id="nfh">Not found</h1>\n'
        '        <p class="nf-say"><b>Harrier has nothing to show at this address.</b> '
        'That is all this page can tell you, and it is all it tells anyone who opens it.</p>\n'

        # Block 2: two named exits, in the sentence.
        '        <p class="nf-exits">A case id that did not resolve here is still worth two '
        'looks. <a href="queue.html">Search the queue</a> if it is open, or '
        '<a href="log.html">Open the log</a> if it was ruled on and closed.</p>\n'

        # Block 3: the address that failed, shown. Settled verdict 2 of the node.
        '        <section class="block">\n'
        '          <h3>The address you asked for</h3>\n'
        '          <div class="nf-addr"><code>%s</code>'
        '<a class="btn" href="not-found.html">Copy</a></div>\n'
        '          <p class="nf-note">Shown so you can send it back to whoever sent it. '
        '<b>A case id carries no tenant and no date</b>, which is what makes it safe to print '
        'on a page that can be reached without signing in.</p>\n'
        '        </section>\n'

        # Why the page is this thin, said once. It discloses nothing about this address:
        # it discloses that the page is the same for everybody, which is the point.
        '        <p class="nf-note nf-note--sep"><b>Three different situations render this '
        'exact page.</b> '
        'An address that never existed, a record outside what this console covers, and a '
        'record this account does not open. The words do not change between them and neither '
        'does the title in the tab, because a page that changed would let anyone holding a '
        'list of ids work out which clients another provider holds. '
        '<b>Which of the three you are looking at is not something this page will say.</b> '
        'A record that resolved and then aged out of retention is a different page, and that '
        'one can name the window it fell outside. This one cannot name anything at all.</p>\n'

        '      </div>\n'
        '    </section>\n\n'
    ) % FAILED

    # The title is part of the identity test: the node says the three renderings must match
    # including it, so it is returned from here rather than passed in beside it.
    return ('Not found', z4)


# ------------------------------------------------------------------ the test the node asked for
# Section 8, question 1: "the rule is only as real as the test", and step 8 of this stage should
# assert that no branch produces a second page. Here it is, run every time the page is built.
ARRIVALS = [
    'the case id does not exist at all',
    'the case is at a tenant this provider does not cover',
    'the case is at a tenant this provider covers and this role does not',
]
RENDERS = [render(a) for a in ARRIVALS]
assert len(set(RENDERS)) == 1, 'the three renderings differ, and the difference is the leak'

TITLE, Z4 = RENDERS[0]

# current is left empty on purpose. She is not in Queue, Shift or Log: the address resolved to
# none of them, and marking one would be the page claiming to know where she meant to be.
# The annunciator falls back to the fleet reading, which names no tenant, so it cannot leak.
Q.page('not-found.html', TITLE, 'live', Z4, '', current='')

print('generated 1 page, 3 arrivals, renderings identical: %s' % (len(set(RENDERS)) == 1))
