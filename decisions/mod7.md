# Module 7 math fixes (#10)

Source review: [#10 Module 7 comment](https://github.com/morrisqa/analysis-prep/issues/10#issuecomment-6008895068). All 12 findings fixed; none judged wrong.

## New material (study guide, after `ex-mod7-sg-43-3`)
- **`par-mod7-sg-43-taylor`:** Taylor polynomial and remainder defined; Taylor's Theorem with the Lagrange remainder, proved by one application of Rolle's Theorem to G(t) = F(t) − ((x − t)/(x − a))^(n+1) F(a); the error bound |f(x) − T_n(x)| ≤ M|x − a|^(n+1)/(n+1)!.
- **`par-mod7-sg-43-cauchy`:** the Cauchy Mean Value Theorem, proved with Rolle's Theorem on h(t) = (f(b) − f(a))g(t) − (g(b) − g(a))f(t).
- **`par-mod7-sg-43-lhopital`:** L'Hôpital's rule, 0/0 form at a point, with four explicit hypotheses and a proof via the Cauchy MVT. The example f = x² sin(1/x), g = x shows why the limit of f′/g′ must be known first.

## Decisions

| Where | Decision | Why | Alternative |
|---|---|---|---|
| Placement of the three blocks | At the end of the study guide, after `sg-43-3`. | Visible; before ps-s4, ps-s5 and br-3, which use them; after the MVT proof exercise, so its method isn't given away. | Before the §4.3 exercises. |
| Taylor's proof | One application of Rolle to an auxiliary function. | Short, and doesn't give away `ps-c2`'s repeated-Rolle argument. | Repeated Rolle. |
| L'Hôpital's statement | Hypotheses on an open interval I containing a, nothing assumed at a; only the 0/0 form at a point. | Makes "near a" precise; it's the only form the module uses. | "Near a" informally; more forms. |
| L'Hôpital's boundary example | x² sin(1/x) over x. | Shows concretely why the justification in `ps-s4` runs backward (the review's point). | Omit. |
| `ex-mod7-we-3` (Rolle) | Case split (maximum or minimum interior); minimum case reduced to the maximum via −f; the one-sided limit step proved via sequences and Module 4's "limits preserve non-strict inequalities". | The original Step 2 was false; the limit step was an unverified dependency. | "A symmetric argument". |
| `ex-mod7-as-2`(iii), graded | Apply the MVT on [0, x] or [x, 0], required in each case; the algebra is left to the student. | Fixes the invalid inference without giving the proof; one case could otherwise rest on an unproved monotonicity claim. | Monotonicity on [0, ∞) via continuity at 0. |
| `ex-mod7-as-1`, graded | Intermediate results removed from the required structure (the simplified difference quotient and its limit justification). | Graded-hint policy (`policies.md`). | Leave them. |
| `ex-mod7-ps-c2` | Retitled "Rolle's Theorem Applied Three Times"; hint notes f′ is continuous because it is differentiable. | The title didn't match the proof. | |
| `ex-mod7-we-4` | The MVT gives a Lipschitz condition from a bounded derivative (linked to Module 6's WE4); the FTC proof uses the MVT equality, not the inequality. | Lipschitz is not part of the MVT's definition. | |

## Noted, not changed
- `ex-mod7-br-6` asks for a Bauldry theorem "that did not appear explicitly in this module's Study Guide". With Taylor, the Cauchy MVT and L'Hôpital now in the study guide, fewer answers qualify. The exercise still works.

## Unverified citations
- Zorn §§4.1 to 4.3, including page ranges and "applies it to prove … Taylor's theorem".
- Bauldry §§1.3 and 2.3 (`br-1` to `br-7`, `as-r2`).
