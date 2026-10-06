# Module 1 alignment (#8)

Issue #8 asked for Quinn's decision on each difference between Module 1 (the prototype) and Modules 2 to 9. Under the autonomous run (#26) these were decided as follows.

| Where | Decision | Why | Alternative |
|---|---|---|---|
| Pacing (`par-mod1-pacing`) | One neutral pacing note in the orientation, in conditionals like the other modules; the colon-led audience labels are gone. The practice set's second pacing note is removed; its one new point ("work [F] first; [S] and [C] build on them") moved into the neutral practice-set introduction. | CLAUDE.md: one neutral pacing note per module, never labelled tracks. | Keep both notes. |
| `par-mod1-instructor-note` | The self-assessment advice ("If you breeze through … spend your time on …") removed from the instructor note; its useful part ("do not skip the Worked Examples") is in the pacing note, addressed to everyone. | It was a second, skip-implying pacing note. | |
| Practice-set introduction | Levels described by what the problems are, not who should do them; "All of the problems are part of the module." | All students do all work (CLAUDE.md). | |
| Bridge reading "A note on approach" | Neutralized ("Work every question in order, with pencil in hand…"). | It was a third background-conditional note. | Leave it. |
| Practice problems | All 19 kept. | Module 1 is foundational; more practice helps. | Cut to 10 or 11 like the other modules. |
| Worked examples | `ex-mod1-we-1` to `-we-5` are `<example>` elements (same ids) with the Claim/Problem as the statement and Quinn's "Try It" prompts kept inside the statement; `-we-6` to `-we-8` (reflection) stay exercises. | Matches Modules 2 to 9; they had been headings plus "Try It" exercises. | Leave the old structure. |
| `ex-mod1-we-1` | The negation's gloss corrected (the numbers 1/N have a positive lower bound); a caution that the statement is not the definition of 1/n → 0. | Math review note 21. | |
| Study guide | Keeps its "Reading 1–4" organization. | It follows the assigned readings. | Reorganize by textbook section. |
| "this summer" | "in this course". | Course-delivery wording in a public text. | |
| Strong induction | New `par-mod1-sg-strong-induction` with Theorem 1.1 (`thm-mod1-strong-induction`), proved from ordinary induction, before `ex-mod1-ps-c4`. | Used but never defined anywhere in the book (rule 4). | |
| `ex-mod1-ps-c2` | IVT pointer and the "proved in Module 6" claim removed; strengthened with (c) uniqueness of the real root of x³ + x = a and (d) the solution of x³ + x = 2; hint and answer added. | Both original parts were one-line exhibitions, far below [C]. | Relabel [F]. |
| `ex-mod1-ps-c3` | Strengthened to 6 \| n(n+1)(n+2) by cases (keeping Quinn's "n² + n is even" as part (a)), compared with the induction proof in s7. Quinn's request for "a one-line proof that avoids cases" dropped (the obvious one-liner is itself a case argument). The f3(a) and s7 answers now justify parity in a clause. | It was [F]-level and its result was used earlier. | Relabel or move. |
| `ex-mod1-ps-s2` | Replaced by negating the definition of a Cauchy sequence (given in the statement) and showing (−1)ⁿ is not Cauchy. | It duplicated `sg-syn-2`/`-3`, whose answers are printed. | Keep the duplicate. |
| `ex-mod1-as-2b` (graded) | √5 → √6, with a remainder-mod-6 lemma in part (a). | The √5 proof is fully worked in the `sg-z15-1` answer. | |
| `par-mod1-sg-archimedean` (new) | The three forms of the Archimedean property used in Module 1 shown equivalent in one line each; the property itself is proved in Module 2. | Three forms were used without saying they agree. It partly answers `br-5`'s "are they the same?", which still asks for the symbolic form and the comparison. | |
| `par-mod1-as-rubric` | New row "Required structure" (labelled scratch work; the prescribed opening of 1(b); labelled induction parts). | Required by the assessment but not graded. | |
| `ex-mod1-as-1b` hint (graded) | Approach only (it gave the whole scratch work). | Graded-hint policy. | |
| Cross-references | All hand-typed references in Module 1 are xrefs; Bauldry's numbered items name the book. | `policies.md`. | |
| Time estimates | Study guide 50 → 55, practice set 90 → 100; road map "about 5 hours" (310 minutes). | New material. | |

## After review (PR #37 follow-ups)
- `par-mod1-pacing`: no longer lets some readers "move quickly through" the Worked Examples while also saying not to skip them; now "Whatever your background, read the Worked Examples closely: they model the proof style expected in every later module."
- `par-mod1-sg-archimedean`: the implications are described as a cycle (i) ⇒ (iii) ⇒ (ii) ⇒ (i); "Module 2 derives it from the Completeness Axiom" (students meet the proof as reading and as a [C] or Option B problem).
- `ex-mod1-as-2b` (√6): Part 2 stays at 15 minutes; the new Option B costs about the same as the √5 version. Raise to 20 if it proves tight.

## Not changed here
- The assessments of Modules 2 to 4 say "if you are coming in with prior real analysis experience, challenge yourself with Option B" (track framing). Handled book-wide in the framing pass.

## Unverified
- Bauldry's Corollary 2.4 (p. 48) and every Bauldry number now prefixed "Bauldry's".
