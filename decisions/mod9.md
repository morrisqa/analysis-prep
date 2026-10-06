# Module 9 math fixes (#10)

Source review: [#10 Module 9 comment](https://github.com/morrisqa/analysis-prep/issues/10#issuecomment-6008973175). All 19 findings fixed; none judged wrong.

## New material
- **`par-mod9-sg-interchange-fails`, "When the Interchange Fails"** (study guide, after `ex-mod9-sg-5`). It works through gₙ(x) = 2n²x e^(−n²x²) on [0, 1]:
  - the pointwise limit is 0, using eᵘ ≥ u²/2 from Taylor's Theorem;
  - the integrals tend to 1;
  - so the convergence is not uniform.

  Until now the module claimed that pointwise convergence fails to preserve integrals, but no example showed it.
- **Integrability of a uniform limit:** proved in full in the `ex-mod9-sg-5`(b) answer, via the integrability criterion. `ex-mod9-ps-c1` gains the corresponding required step.
- **The value π/4 of the arctan series** (`ex-mod9-we-4`) and **ln 2 for the alternating harmonic series** (`ex-mod9-sg-8`(c)): proved by a direct estimate of the remainder of the geometric sum (error at most 1/(2n + 3)). They had been called "beyond this course"; Abel's theorem is now mentioned only as the general result.

## Decisions

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod9-as-2` (graded) | Example changed to n²x e^(−nx) on [0, 1], which has a genuine discrepancy (∫ → 1 ≠ 0). The hint is approach-only and suggests a polynomial lower bound for eᵘ via Taylor's Theorem. | The old example had no discrepancy to explain; Module 7 proves only the 0/0 form of L'Hôpital at a point. | Keep the old function and reword the question. |
| Visible example vs as-2 | Different functions (2n²x e^(−n²x²) in the study guide; n²x e^(−nx) in the assessment). | The visible example must not hand out the graded computations. | One function in both. |
| `ex-mod9-sa-3` | Keeps xⁿ and adds a second comparison with gₙ, where the integrals do disagree. | The self-assessment now shows both outcomes. | |
| `ex-mod9-ps-s4` | Asks for which r the M-Test (with Mₙ = \|aₙ\|rⁿ) gives uniform convergence on [−r, r], and whether r = R is allowed; (c) corrected to r ≤ 1. | "The largest set" was ill-defined; (c) understated the result. | |
| `ex-mod9-ps-c2` | Bounds terms of a convergent series at a point x₁ with \|x₁\| > r, then compares with a geometric series. | The book never establishes absolute convergence inside the radius. | Prove absolute convergence first. |
| Course summaries (orientation intro, instructor note, bridge wrap-up) | Modules 3 and 5 included; all eight earlier modules linked. The new short descriptions of Modules 1, 2, 3 and 7 are agent wording. | They omitted Modules 3 and 5 while claiming to summarize the course. | Soften "every major idea". |
| `ex-mod9-ps-f4`(a) | Convergence by the Ratio Test; the sum e⁵ − 1 relies on eˣ = Σxⁿ/n!, which the book uses but never proves (as before). | | |

## Unverified citations
- Rudin, *Principles of Mathematical Analysis*, 3rd ed., Theorem 8.2 (Abel's theorem); an aside only, not used in any proof.
- Zorn §4.4 (definitions in the bridge reading, now "check them against").
- Bauldry: claims in the bridge intro and `ex-mod9-br-4`(b) softened into questions.
