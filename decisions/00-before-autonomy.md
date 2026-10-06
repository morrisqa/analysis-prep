# Decisions before the autonomous run

These were made between 2026-10-05 and 2026-10-06, either by Quinn
delegating a choice ("use your judgement") or by the main session where a
fix needed one. Quinn has seen most of them in pull requests; they are
collected here so the record is complete.

## Structure and migration (#3, #4)

| Decision | Where | Why | Alternative |
|---|---|---|---|
| One book, modules as chapters; id mapping applied once at migration | Whole book | Quinn's decision (2026-10-05) | Nine articles |
| Single displays use `<md>` without `<mrow>`; `<me>` dropped | Every module | PreTeXt 2.55.0 deprecates `<me>`/`<men>` (delegated) | Keep `<me>` and accept 18+ warnings per module |
| Section subtitles moved word for word into a first paragraph; in the orientation, after `<objectives>` | Every section | `<subtitle>` is not allowed in `<section>` (delegated) | Drop the text; reformat it (open, see the structure log) |
| One sentence added under each Foundational/Standard/Challenge heading | Every practice set | `<paragraphs>` must contain a paragraph (delegated). Quinn reviewed all 27 sentences on 2026-10-06 and kept them | Remove the headings |
| Uppercase `par-`/`obj-` ids lowercased with the rest | Whole book | House id scheme is lowercase (delegated) | Leave them uppercase |
| Book title "Intensive Analysis Prep", id `analysis-prep` | `source/main.ptx` | Matches the repository (delegated) | |
| A list directly in a `<statement>` is wrapped in `<p>`, not converted to `<task>`s | `ex-mod3-ps-c2` | Smallest schema fix; `<task>` would change numbering | `<task>` parts |
| `<cmark/>` replaced with `<m>\checkmark</m>` | `ex-mod7-ps-f3` | Not allowed in `<p>`; same symbol | Remove the marks |

## Module 1 math fixes (#24)

| Decision | Where | Why | Alternative |
|---|---|---|---|
| Restated as n² < 2ⁿ for n ≥ 5 | `ex-mod1-ps-s6` | Keeps Quinn's strict inequality | ≤ for n ≥ 4 |
| Corrected to the true limit definition (0 < \|x − a\|, for all x) | `ex-mod1-sa-2` | Keeps the exercise's purpose | Relabel it as continuity |
| Called continuity of x² at 2 rather than adding 0 < | `ex-mod1-ps-f3`(c) | Smaller change | Add 0 < \|x − 2\| |
| "Assume there is a largest prime" (literal negation) instead of "finitely many primes" | `ex-mod1-ps-f4`(d) | In a logic module the assumption should be the literal negation of the claim | Quinn's original framing |
| New paragraph on negating implications and conditioned quantifiers, placed visibly after `ex-mod1-sg-z14-4` | Study guide | The rule was never stated though five exercises need it | Put it in WE1's notes |
| "nonempty" added to the infimum paraphrase | `ex-mod1-br-10` | Without it the statement is false (∅) | **Unverified against Bauldry's wording** |

## Module 2 math fixes (#25)

| Decision | Where | Why | Alternative |
|---|---|---|---|
| ≤ instead of < | `ex-mod2-ps-s2`(b) | Smallest correct change | Assume 0 < \|x − 3\| < 1 |
| Non-strict form \|x\| ≤ k ⟺ −k ≤ x ≤ k stated with a one-clause reason | `ex-mod2-sg-17-2` | Proofs need it; Zorn's Theorem 1.23(c) is quoted only in strict form | Cite Zorn if 1.23 already includes it (**unverified**) |
| The module's definition of supremum stated visibly after `ex-mod2-sg-18-4`; the ε-characterization is the equivalent pair of conditions | Study guide | The module never stated its definition and used "condition (ii)" two ways | **Check against Zorn §1.8** |
| One sentence of Quinn's in `ex-mod2-sg-18-4` changed so "ε-characterization" names the pair | `ex-mod2-sg-18-4` | Resolves the "(ii)" clash with the fewest words | Rename the definition's conditions instead |
| "the case ε = 1 of Bauldry's Theorem 2.3" | `ex-mod2-ps-c2` | Matches how Module 1 quotes Theorem 2.3 | **Unverified against Bauldry** |
| Density of ℚ used in `ex-mod2-sg-19-1`(b) with a forward note to the bridge reading | Study guide | A density-free proof is much longer | Rudin's (2q + 2)/(q + 2) construction |

## Markers removed

The five `TODO(quinn)` comments left by the Module 1 and 2 fixes were removed
from the source in #26. Each is the row above marked "unverified" or "check"
(`ex-mod1-br-10`, the Module 1 negation paragraph, `ex-mod2-sg-17-2`, the
Module 2 definition paragraph, `ex-mod2-ps-c2`).
