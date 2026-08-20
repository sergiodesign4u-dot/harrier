# Notes for an external auditor

1. Project rules live in `CLAUDE.md`. Read it first. Without it any finding is a median, not a decision about this project.
2. The audit is READ-ONLY. Return findings as a list, each with proof in `file:line` form. The repository owner applies fixes after an explicit go-ahead.
3. A finding without proof is not a finding. Every claim quotes a line that actually exists in the file. If it does not hold up on a re-read, it is not submitted.
4. General advice is not wanted: no "structure this better", "add examples", "consider automation". Only falsifiable discrepancies: a quote that contradicts another quote, a promise with no owner, a file with no reader.
5. Deliberate project decisions are not defects. When in doubt, read `CLAUDE.md` and `docs/decisions.md`; the reason is there.
6. Reply in Ukrainian.
