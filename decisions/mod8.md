# Module 8 math fixes (#10)

Source review: [#10 Module 8 comment](https://github.com/morrisqa/analysis-prep/issues/10#issuecomment-6008936919). All 19 findings fixed; none judged wrong.

## New material
- **`par-mod8-sg-54-props`, "Properties of the Integral Used in the FTC Proofs"** (study guide, before the FTC exercises). It includes:
  - linearity, monotonicity and additivity over intervals, cited to Zorn Chapter 5 and to Rudin, *Principles of Mathematical Analysis*, 3rd ed., Theorem 6.12;
  - the integral of a constant, proved in one line;
  - the orientation convention ∫ₐᵃ = 0 and ∫ᵦᵃ = −∫ₐᵇ, with additivity in any order.
- **`par-mod8-we-base-point`, "FTC Part 1 with Any Base Point":** used when the upper limit can fall below the base point (as-2(ii), ps-f3).
- **FTC Part 2 at the endpoints** (`ex-mod8-sg-54-2`(b), and a new step (iii) in `ex-mod8-ps-c1`): F and G are continuous on [a, b], so the constant extends to a and b.

## Decisions

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod8-we-2`, `ex-mod8-sg-53-1` | Use ε/(2(b − a)) to get strict U − L < ε. | No extra theorem; teaches the "leave room for ≤" move. | Attainment of max and min on closed subintervals. |
| `par-mod8-sg-54-props` | One visible block of integral properties, before their first use. | The FTC answers and we-3 need them; one place to cite. | Inline in we-3. |
| Integral of a constant vs graded `ex-mod8-as-1` | Keep the one-line proof in the study guide. as-1 becomes the step-function variant (c on [a, b), another value at b), which still needs a partition with a small last subinterval. | The book's correctness should not depend on graded work, and the graded item should not be answered in the study guide (`policies.md`). | Cite Zorn and leave as-1 unchanged. |
| `ex-mod8-we-3` bound | Monotonicity plus the integral of a constant instead of \|∫g\| ≤ ∫\|g\|. | \|∫g\| ≤ ∫\|g\| is proved only later (ps-s5). | Forward citation. |
| `ex-mod8-ps-c1`, `-ps-c2` | Keep [C] and the approved C-block sentence (the author had relabelled them [S]). | Writing complete, careful proofs, now including endpoint continuity, is the challenge; the study-guide versions are hidden answers. Relabelling left a Challenge block with no [C] problems. | [S], with a retitled block. |
| `ex-mod8-br-7`, `-br-5`, `-br-4`, `par-mod8-br-24` (Stieltjes) | A correct sufficient condition (f continuous, α of bounded variation) with the α(x) = x and Dirichlet counterexample. The parts formula's hypothesis is stated. Darboux sums are used only for increasing α; the bounded-variation case is pointed to Apostol. "Course text" is used instead of claims about what Bauldry does. | The original claims were false or unsupported. | |
| `ex-mod8-as-1` hint | Approach only. | Graded-hint policy. | |
| Orientation | Equivalence of Darboux and Riemann-sum definitions cited to Bartle and Sherbert. | Rule 4. | Drop the claim. |

## After review (PR #34 follow-ups)

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod8-as-1` (graded) | Now "A Function That Is Constant Except at an Endpoint" (c on [a, b), d at b). The steps ask students to compute U, L and U − L themselves (no formulas given). Approach-only hint: only the last subinterval can have M_k ≠ m_k; make it short. Part 1 time 15 → 20 min; assessment 40 → 45 min. | The study guide now proves the constant case, so the graded item needed new content; stated formulas would have given the answer. | Leave the formulas in the structure. |
| `ex-mod8-ps-f2`(c) | ∫₁⁴ (1/√x) dx = 2 (after a first change to ∫₁² 1/x). | The old integral duplicated graded `as-2`(i) with its answer shown; any 1/x integral still did. | |
| `par-mod8-as-rubric` | "Darboux mechanics" credits as-1 step (iv) explicitly. | The new as-1 step had no rubric row. | |
| `ex-mod8-ps-f3`, graded `as-2`(ii) | Point to "FTC Part 1 with Any Base Point" where the upper limit can fall below the base point. | They needed it but did not cite it. | |
| `ex-mod8-br-5`(a), `par-mod8-br-24` | The criterion refers to the Darboux-style definition (upper integral = lower integral) for increasing α; bounded variation reduces to it by the total-variation decomposition (Apostol, Chapter 6). | The "if and only if" depends on the definition. | |
| Bridge reading | "Integrator" defined at first use; α (not dα) is the integrator; "the course text" replaced by questions about Bauldry. | Accuracy without claiming Bauldry's content. | |

## Unverified citations
- Rudin, 3rd ed., Theorem 6.12 (properties of the integral).
- Zorn Chapter 5 as the reading for these properties; Zorn §3.4 (Heine–Cantor statement).
- Apostol, *Mathematical Analysis*, 2nd edition, Chapters 6 and 7 (chapter-level only), including "the total-variation decomposition is in Chapter 6".
- Zorn §5.1–5.4 as where the integral properties are proved.
- Bartle and Sherbert, *Introduction to Real Analysis*, 4th ed., Section 7.4.
- Bauldry: page ranges and the claim in `ex-mod8-br-5`(b) that Bauldry requires bounded variation.
