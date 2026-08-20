# Decision log

What we did, why it was done this way, what was rejected and on what grounds. Newest entry on top, each one dated. This file is never loaded into a session automatically; it is read when the grounds for a decision need to be recalled. Rules that must hold every session belong in `CLAUDE.md`, not here.

## 2026-08-20 - `_nav.js` and `_nav.css` keep em dashes in their comments

The project rule bans em dashes in output files. These two files are inserted verbatim from the pipeline pack, which states the code must not be edited. The dashes sit in Ukrainian source comments, never in rendered product copy. Rejected: rewriting the comments, which would fork the file from its source and make the next pack update a manual merge.

## 2026-08-20 - Autonomy is a per-tenant setting, not a product-wide threshold

Each client tenant sits somewhere between "Clerk closes nothing" and "Clerk closes benign cases and shows a sample". The level moves as measured accuracy on that tenant earns it. Rejected: a single confidence threshold across the product, which is simpler to explain but turns multi-tenancy into decoration, since a regional bank and a dental group would then live under one rule. Rejected: no autonomy at all, which is honest for a regulator but does not answer the volume problem that MDR providers actually have.

## 2026-08-20 - The AI agent is named Clerk

A clerk prepares the case file and drafts the opinion; the judge rules. The name carries the product contract, so the interface does not have to keep restating that the agent never decides. Rejected: a generic "AI Assistant" label, which says nothing about the boundary of the agent's authority.

## 2026-08-20 - Domain is MDR / SOC, product is invented (Option B)

Chosen deliberately adjacent to Flamingo's market rather than inside it. Flamingo's OpenFrame serves MSPs and its Mingo agent does alert triage, so everything said about triage, trust in an agent and human override reads as understanding of their market. But the product is not a copy of OpenFrame, so it will not be compared screen for screen. Rejected: MSP IT operations, too close for comfort. Rejected: fraud and AML operations, a strong story about accountability but far from their world.

## 2026-08-20 - Shortened pipeline track, 01 to 07

The deliverable is two screens plus a written response, so the track runs Research, User Research, IA base, Wireframes, Voice, Concept, UI + Visual and stops. Stages 08 to 13 would produce a token architecture and a design system that the deliverable has no reader for.
