# Module 5 math fixes (#10)

Source review: [#10 Module 5 comment](https://github.com/morrisqa/analysis-prep/issues/10#issuecomment-6008836938). All findings were confirmed and fixed; none was judged wrong. Module 5 now depends on Module 4's "Two facts you will use constantly" (uniqueness of limits; limits preserve non-strict inequalities), so Module 4's fixes merge first.

## New material

**The Root Test** (`par-mod5-sg-26-root`, study guide, after the Ratio Test). Stated and proved in two forms:
- *eventual-bound form:* if a_k ≥ 0 and ᵏ√a_k ≤ r < 1 for all large k, the series converges (comparison with the geometric series and the Monotone Convergence Theorem);
- *limit form:* ᵏ√a_k → ρ gives convergence for ρ < 1 and divergence for ρ > 1.

Inconclusiveness at ρ = 1 is shown with Σ1/k and Σ1/k², which needs k^(1/k) → 1. That limit is proved inline with Bernoulli's inequality, itself proved by a one-line induction. No lim sup is introduced.

## Decisions

| Where | Decision | Why | Alternative |
|---|---|---|---|
| Root Test placement and form | A titled `<paragraphs>` block in the study guide, visible, with full proofs; both forms; Bernoulli's inequality proved inline. | The module's objectives promise the Root Test but it was never stated; rule 4 needs proofs; students meet it before `ps-c2`. | Put it in an exercise answer (hidden); cite k^(1/k) → 1. |
| `ex-mod5-ps-c2` | Rewritten as "Ratio Test versus Root Test". Each part is answerable: (a) the ratios oscillate; (b) the roots are 1/2 and 1/3, so the limit doesn't exist, but the eventual-bound form gives convergence; (c) what the example shows, honestly, including that direct comparison with Σ2^(−k) also works. | The old (b) asked for a limit that does not exist, relied on undefined lim sup, and the title claimed the Root Test was needed. | Replace the series. |
| `ex-mod5-ps-c2` hint (c) | Dropped "strictly more powerful"; shows concretely that no eventual ratio bound works here (3^k/2^(k+1) > 1 for odd k ≥ 3). | The general comparison needs a Cesàro-type argument beyond the module (rule 4). | Prove it, or cite Rudin Theorem 3.37. |
| `ex-mod5-ps-c1` | Keep [C]; keep Quinn's Cauchy-criterion proof as part one; add a second proof via the Comparison Test on Σ(a_k + \|a_k\|) and ask where completeness enters each. `par-mod5-ps-c` updated to match. | The original was fully answered by the study guide; this makes it a real challenge without deleting Quinn's text. | Relabel [S]. |
| `ex-mod5-as-2` hint | Approach-level only ("clear the denominators and compare polynomials; holds for every k ≥ 1"); the derivative argument is gone; "(for all sufficiently large k)" removed. | Graded item; the AST as stated needs decreasing for every k, which holds (k² + k − 1 > 0). | Spell out the computation. |
| `ex-mod5-as-r1` | Retitled "Divergence Test and Shifted Sequences"; credits the shift fact with the difference rule; "you proved" → "you read a proof"; uniqueness kept only as what makes "the sum" well defined. | Uniqueness alone says nothing about (S_(n−1)). | |
| `par-mod5-sg-26-intro` | Lists the actual earlier facts (MCT, the Cauchy criterion, limits preserve non-strict inequalities, or the geometric series) instead of "comparison of bounded sequences". | Module 4 never stated the latter under that name. | |
| `ex-mod5-we-2` | Keep LCT; admit direct comparison works here; give Σ1/(k² − k + 1) as a case where LCT helps. | Honest, and shows the boundary of direct comparison. | Change the series. |
| `ex-mod5-we-3` | "No known closed form" softened to "nothing in this module gives the value". | No verifiable source. | Cite a reference. |
| `ex-mod5-we-4` | Riemann's rearrangement theorem cited to Rudin, *Principles of Mathematical Analysis*, 3rd ed., Theorem 3.54. | Rule 4; a standard reference. **Unverified against the book.** | "A theorem of Riemann". |
| `ex-mod5-br-3`(b) | "Why is each hypothesis required?" → "What role does each hypothesis play?", with a hint toward a counterexample for "decreasing"; notes that the study guide's version asks only f ≥ 0. | Continuity is not strictly required, so "required" misleads. | |
| `ex-mod5-ps-f3`(d) | Continuity of cosine flagged as a calculus fact, with a pointer to Module 6. | Not yet proved at this point. | |

## Left as is
- The hints of `ex-mod5-as-1` and parts of `ex-mod5-as-2` already give full answers to graded items. That wasn't in the review; it is noted for the house-style and structure pass.
- `ex-mod5-br-3`(a) mentions "lim sup" only as possible Bauldry phrasing.

## Unverified citations
- **Zorn:** Definition 2.22; Theorems 2.16, 2.23, 2.26 and 2.29; Proposition 2.24; §2.3; pages 119–134 and 134–146; whether §2.6 covers the Root Test and the Integral Test.
- **Bauldry:** Definitions 1.13, 1.17 and 1.18; Theorems 1.32, 1.35 to 1.40; Examples 1.11 and 1.14; §§1.5 and 1.6 page ranges; §2.5 at about p. 88; the hypotheses of Theorem 1.38.
- **Rudin:** 3rd ed., Theorem 3.54 (new).
