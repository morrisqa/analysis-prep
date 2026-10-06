# Module 4 math fixes (#10)

Source review: [#10 Module 4 comment](https://github.com/morrisqa/analysis-prep/issues/10#issuecomment-6008802441). Items 1 to 6 and 8 to 15 fixed; items 7 and 16 are textbook numbering (unverified, below). No finding was judged wrong; item 14 named the wrong paragraph ("What to notice" for "Set-up") but its point was right.

## Decisions

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod4-ps-c1` | Keep the [C] label. | Labels describe the problem, not its hint; a first two-index Cauchy proof is a genuine new move for students new to analysis. Relabelling would also mean moving the problem between groups. | Relabel [S] and move it to the Standard group (as the review suggested). |
| `ex-mod4-ps-c2` | Improve the hint (construction from the negated definition; why a sub-subsequence is a subsequence); no `<solution>` added. | No practice set in the book has solutions: answers for [F], hints for [S] and [C]. | Add a concise solution. |
| `ex-mod4-we-3` Step 3 | Self-contained ε argument for L ∈ [1, 2]. | The module never states that limits preserve non-strict inequalities, so there is nothing to cite. | Cite Zorn's order-limit result (number unverified). |
| `ex-mod4-we-3` Step 4 | Use a²ₙ₊₁ = 2 + aₙ and the Algebra of Limits instead of continuity of √. | Removes an unproved step; continuity comes in Module 6. | Keep continuity with a forward reference. |
| `ex-mod4-we-3`, √2 remark | Uniqueness of limits used without a number. | Already relied on implicitly; Module 4's bridge reading asks about it. | Cite once Zorn's number is verified. |
| `ex-mod4-we-3` "What to notice" | Decimal truncations of √2 as the example of a bounded monotone sequence with no limit in ℚ, described as "each is at least the one before". | A genuine example already familiar from the study guide; truncations repeat when a digit is 0, so not strictly increasing. | Another example. |
| `par-mod4-sg-24-intro` | Did not add "convergent sequences are Cauchy in ℚ". | It would answer `ex-mod4-sg-24-2`, which follows. | State both directions. |

| Study guide, after `ex-mod4-sg-21-2` (new) | Added "Two facts you will use constantly": uniqueness of limits and limits preserve non-strict inequalities, each with a short proof, plus the constant-sequence corollary and a strict-inequality warning. | Module 4 relied on both without stating them, and Module 5 cites them as proved in Module 4 (math review of PR #29). | Cite Zorn (numbers unverified). |
| `ex-mod4-we-3` Steps 3 and 4 | Cite the two new facts instead of arguing inline; justify that (a_{n+1}) shares the limit. | Shorter and consistent once the facts are stated. | Keep the inline argument. |
| `ex-mod4-br-2` | Kept, with a pointer to compare Bauldry's uniqueness proof with the study guide's. | The new study-guide proof answers part of it in advance; comparing proofs is still worthwhile. | Rewrite the exercise. |
| `ex-mod4-we-3` "What to notice" | Restored Quinn's pointer to Zorn §2.3 in corrected form ("Zorn takes the direct route, using continuity of the square root informally"). | The proof no longer uses continuity, but the pointer to the text was deliberate. | Drop it. |
| `ex-mod4-ps-c2` hint | Kept close to complete after review. | Practice problem, not graded; a full hint serves learning. | Trim to the setup. |

## Unverified citations
- Zorn: whether "bounded monotone ⇒ convergent" is Theorem 2.3 in §2.1 (`par-mod4-sg-21-intro`, `ex-mod4-sg-23-2`) or a §2.3 result (`par-mod4-sg-23-intro`).
- Bauldry: Definitions 2.15 and 2.16, Theorems 2.48 and 2.53 to 2.55, pp. 88–99 (`par-mod4-br-defn`, `ex-mod4-br-2`, `par-mod4-br-mct`, `ex-mod4-br-4`, `par-mod4-br-cauchy`). Suspicious unless Bauldry numbers definitions and theorems separately.
- Zorn Theorems 2.4 to 2.6 and 2.20, Definition 2.17, Proposition 2.18.

## Left as is
- `ex-mod4-we-2` "What to notice": the degree claims (higher numerator degree diverges; equal degrees give the ratio of leading coefficients) are stated without proof. Not flagged by the review; they are remarks about technique, not results used later.
