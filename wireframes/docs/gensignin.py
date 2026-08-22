# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import genqueue as Q
QUEUE_INLINE = Q.INLINE   # captured BEFORE gencase, which rebinds genqueue.INLINE to its own
import gencase as C       # noqa: E402,F401  imported per the contract; 1.1 has no case pane

OUT = Q.OUT

# ---------------------------------------------------------------------------
# 1.1 has no shell. The node says so in section 11: "0.1 the shell. It does not
# exist yet at this point; the sign in page has no shell." So zones 1 to 5 are
# absent, Q.page is not used, and the page is written here: the stage panel, and
# one column holding one card. Nothing else may render in front of authentication.
# ---------------------------------------------------------------------------

INLINE = QUEUE_INLINE + """
/* INLINE: signin :: for reconcile into _wf.css
   The only public URL in the product, and the only page with no shell. One card,
   centred by auto margins rather than by justify-content, because a card taller than
   the viewport must scroll rather than lose its top edge. */
.door{flex:1 1 auto;display:flex;overflow-y:auto;padding:var(--s7) var(--s4)}
.doorcard{margin:auto;width:min(440px,100%);display:flex;flex-direction:column;gap:var(--s4);
          border:var(--line-ink);border-radius:var(--radius);background:var(--paper);padding:var(--s5)}
.door p{margin:0}
/* the wordmark is a paragraph, not the heading: the h1 names the screen, and the one
   public page in a security product does not put a brand where the page title belongs */
.doormark{font:600 var(--t-lg)/1 var(--ui);letter-spacing:-.01em}
/* .banner makes a flex item of every element child, so a second <b> starts its own line and
   the punctuation after it orphans. Seen at 1440 and fixed by giving the banner ONE child. */
.door .banner > p{font-size:inherit}
.door h1{margin:0;font:600 var(--t-xl)/var(--lh-tight) var(--ui)}
.door code{font-family:var(--mono);font-size:var(--t-sm);background:var(--fill);
           padding:0 var(--s1);overflow-wrap:anywhere}
.doorform{display:flex;flex-direction:column;gap:var(--s3)}
.doorbtn{width:100%;justify-content:center}
.doordest{gap:var(--s2)}
/* recovery, in reach of the field. Depth one key away rather than a link to a page the
   product does not own: identity belongs to the provider, and so does getting back in.
   var(--s5) is 24px, the WCAG SC 2.5.8 floor the node names for a phone at 03:00. */
.doorhelp{border-top:var(--line);padding-top:var(--s3);font-size:var(--t-sm)}
.doorhelp summary{cursor:pointer;min-height:var(--s5);display:flex;align-items:center;
                  text-decoration:underline;text-underline-offset:2px}
.doorhelp p{margin:var(--s2) 0 0;color:var(--soft)}"""

PAGE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Harrier &middot; %(title)s</title>
<link rel="stylesheet" href="../_nav.css">
<link rel="stylesheet" href="_wf.css">
<style>
%(inline)s
</style>
</head>
<body>
<div class="wf-shell">
<aside id="sidebar"></aside>
<div class="wf-screen">
  <main class="door">
%(card)s  </main>
</div>
</div>
<script>window.WF_ACTIVE = '%(file)s';</script>
<script src="_nav.js"></script>
</body>
</html>
"""

HELP = ("      <details class=\"doorhelp\">\n"
        "        <summary>Cannot get in?</summary>\n"
        "        <p>Harrier does not hold your password and it does not create accounts. Your seat comes from "
        "your provider, and so does the way you sign in. If you cannot get in, the person who provisioned your "
        "seat is the one who can fix it.</p>\n"
        "      </details>\n")

HINT_DEFAULT = "No password here. Your email decides which provider signs you in."


def banner(text, quiet=False):
    return ('      <div class="banner%s"><p>%s</p></div>\n'
            % (' banner--quiet' if quiet else '', text))


def dest(addr, lead, note):
    return ('      <section class="block doordest">\n'
            '        <h3>After you sign in</h3>\n'
            '        <p>%s <code>%s</code></p>\n'
            '        <p class="prov">%s</p>\n'
            '      </section>\n') % (lead, addr, note)


def page(fname, title, cta, action, why='', destblock='', value='', focus=True,
         hint=HINT_DEFAULT, alt=''):
    val = ' value="%s"' % value if value else ''
    auto = ' autofocus' if focus else ''
    # Order on the card: why she is here, where she will land, the field, the way back in.
    # Blocks 1 and 2 of the node sit together at the bottom so recovery stays in reach of
    # the field; the destination is part of WHY she is looking at a door, so it reads first.
    card = ('    <div class="doorcard">\n'
            '      <p class="doormark">Harrier</p>\n'
            '      <h1>Sign in</h1>\n'
            '%s%s'
            '      <form class="doorform" action="%s">\n'
            '        <div class="field">\n'
            '          <label for="email">Email</label>\n'
            '          <input id="email" type="email" autocomplete="username" '
            'placeholder="you@yourprovider"%s%s>\n'
            '          <p class="hint">%s</p>\n'
            '        </div>\n'
            '        <button class="btn btn--primary doorbtn" type="submit">%s</button>\n'
            '%s'
            '      </form>\n'
            '%s'
            '    </div>\n') % (why, destblock, action, val, auto, hint, cta, alt, HELP)
    open(os.path.join(OUT, fname), 'w').write(
        PAGE % {'title': title, 'inline': INLINE, 'card': card, 'file': fname})
    return fname


# ---------------------------------------------------------------- 1. arrived on purpose
page('index.html', 'Sign in', 'Next', 'queue.html')

# ---------------------------------------------------------------- 2. arrived by a deep link
# The matrix says the case is NAMED. Section 6 says nothing on this page may name a client.
# Both hold at once because the case id carries no meaning by design (0.8, section 7):
# the id is what she recognises from the pager, and it discloses no tenant.
page('index-deep-link.html', 'Sign in, arrived by a link', 'Next', 'case-standalone.html',
     why=banner('<b>You followed a link to case C-4417.</b> The link worked. It needs you signed in first.'),
     destblock=dest('/case/C-4417', 'You land on',
                    'Held through your provider&rsquo;s sign in and restored on the way back, so a case paged '
                    'at 03:00 costs one sign in rather than a search. Nothing about the case is shown until '
                    'then, and the id names no client.'))

# ---------------------------------------------------------------- 3. session expired, 1.2
page('index-expired.html', 'Sign in, session ended', 'Next', 'case-standalone.html',
     value='r.idrissi@example.com',
     why=banner('<b>Your session ended.</b> You will come back to where you were.<br>'
                'It ended after a stretch without activity, never on a clock, and never while a verdict was '
                'unfiled. A verdict you had written and not filed is still held on this device.'),
     destblock=dest('/case/C-4417', 'You land back on',
                    'Held through the sign in. An interruption does not clear where you were; '
                    'signing out would have.'))

# ---------------------------------------------------------------- 4. signed out deliberately
page('index-signed-out.html', 'Sign in, signed out', 'Next', 'queue.html', focus=False,
     why=banner('<b>You signed out.</b> Where you were has been cleared, because leaving was a decision '
                'rather than an interruption. Signing in again starts at the queue.', quiet=True))

# ---------------------------------------------------------------- 5. the identity provider failed
page('index-idp-error.html', 'Sign in, provider error', 'Try again', 'case-standalone.html',
     value='r.idrissi@example.com', focus=False,
     hint='Your email is the one you came back with. Nothing about it needs changing.',
     alt='        <a class="btn btn--quiet doorbtn" href="index.html">Use a different email</a>\n',
     why=banner('<b>Your provider&rsquo;s sign in did not finish.</b> Their identity service returned an error '
                'on the way back.<br>'
                '<b>It is not your password.</b> Nothing about your account changed. Trying again is the right '
                'next step. If it fails again the fault is at your provider and Harrier cannot clear it '
                'from here.'),
     destblock=dest('/case/C-4417', 'You still land on',
                    'Still held. It survived the failure, so a retry goes to the case rather than starting '
                    'you at the queue.'))

print('generated 5 sign in pages')
