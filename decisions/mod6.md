# Module 6 math fixes (#10)

Source review: [#10 Module 6 comment](https://github.com/morrisqa/analysis-prep/issues/10#issuecomment-6008851610). Items 1 to 15 fixed; none judged wrong. Item 16 (citations) below.

## New material
- **`par-mod6-sg-32-seq-cont`, "Sequential Characterization of Continuity"** (study guide, after `ex-mod6-sg-32-1`): statement, comparison with the limit version, and a proof of both directions. The converse is proved by contrapositive with δ = 1/n.
- **`ex-mod6-we-4`, "What to notice"** (replaces a false claim): a Lipschitz condition is sufficient but not necessary for uniform continuity. Heine–Cantor does not give a Lipschitz condition (√x on [0, 1], shown inline). A continuously differentiable function on [a, b] is Lipschitz, via the Extreme Value Theorem and the Mean Value Theorem.
- **`ex-mod6-sg-34-2`:** the non-uniform-continuity criterion is stated as "≥ ε₀ for all n" and proved from the definition.
- **`ex-mod6-ps-f1`(c):** a brief definition of a limit as x → ∞.
- **Explicit domains and quantifiers:** `ex-mod6-sg-31-1` (∀x ∈ D, and a plain-words limit-point condition), `ex-mod6-sg-32-1` (a ∈ D, ∀x ∈ D), and `ex-mod6-sg-34-1`(a).

## Decisions

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod6-we-4` | One example, √x on [0, 1], shows both that Heine–Cantor doesn't give Lipschitz and that "not Lipschitz" doesn't imply "not uniformly continuous". It points to `as-2` for [0, ∞). | One well-chosen example; `as-2` already states its result. | Use √x on [0, ∞). |
| `ex-mod6-we-4` | "C¹ on [a, b] ⇒ Lipschitz" proved with the Extreme Value Theorem and the Mean Value Theorem (forward reference to Module 7, where it is proved). | Rule 4. | Omit the claim. |
| `par-mod6-sg-32-seq-cont` | A visible block after `sg-32-1`, both directions proved. | `ps-s5` needs both; `br-5`(b) needs a study-guide proof to compare with; placing it before `sg-32-1` would give that answer away. | Cite Zorn. |
| `ex-mod6-sg-34-2` | "≥ ε₀ for all n" instead of "↛ 0". | The "↛ 0" form needs subsequences, which Module 6 doesn't develop. | Keep "↛ 0". |
| `ex-mod6-ps-f1`(c) | Define the limit as x → ∞ in the statement. | Keeps Quinn's problem. | Replace (c). |
| `ex-mod6-ps-f3` | A remark that many texts define continuity only at points of the domain (so 1/x is "continuous"). | Prepares students for MAT 5610 without claiming what Zorn does. | Leave it. |
| `ex-mod6-ps-f4` | Statement points to f(0) and f(1); the answer notes why [0, 2] gives nothing. | Smallest change consistent with the answer. | |
| `ex-mod6-ps-s2` | Hint trimmed (no δ given); [S] kept. | The trimmed hint leaves real work; relabelling would reorder the set. | Relabel [F]. |
| Graded hints: `ex-mod6-as-1`, `-as-2`(ii) and (iii), `-as-r3` | Cut back to the approach (`policies.md`); "set δ = ε²" removed from as-2's required structure; as-r3's "partial answer" replaced. | Policy; the rubric grades finding δ. | Keep them. |
| Orientation, second paragraph | Rewritten to say what uniform continuity actually does in the integrability proof (after Heine–Cantor); "crucial" removed in the corrected sentence. | The old sentence overstated ("exactly the hypothesis needed"). | |

## After review (PR #31 follow-ups)

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod6-sg-34-3`(c) | Heine–Cantor sketch corrected: ε/2 at each point, half-radius intervals, δ = the smallest half-radius, triangle inequality through the shared center. | The original "take the minimum of the δ's" is the classic invalid argument (already in Quinn's text). | Say less. |
| `ex-mod6-sg-31-3`, `obj-mod6` | "in the domain of f" added to the sequential characterization of limits. | f(xₙ) needs xₙ in the domain; the new continuity block made the gap visible. | |
| `ex-mod6-ps-f3` | The remark now matches the module's definition (continuity at a requires a in the domain); 1/x is continuous at every point of its domain. | The first version contrasted the module with texts that, in fact, it agrees with. | |
| Whole module | The method for proving non-uniform continuity is called the **sequential criterion** everywhere, in the "≥ ε₀ for all n" form the module proves (`we-2`, `we-3`, `we-4`, `ps-s4`, and Quinn's worked-examples intro). | One name per concept (`policies.md`); the "↛ 0" form needs subsequences. | |
| Whole module | "closed bounded interval" everywhere (Quinn's majority wording); one "bounded closed" in `we-4` changed. | One name per concept. | "bounded closed". |
| `par-mod6-sg-32-seq-cont` | The definition of continuity is recalled briefly in prose rather than displayed in full. | The full display restated `sg-32-1`'s answer directly below it; the proof still needs the definition in view. | Bare pointer to the hidden answer. |

## Unverified citations
- **Zorn:**
  - "Theorem 3.3 or its analogue" (study-guide intro);
  - the Heine–Cantor sketch in §3.4 (pacing note);
  - pages 151–164 and 164–198;
  - §3.2 on the algebra of continuous functions;
  - the Heine–Cantor statement attributed to Zorn in `sg-34-3`.
- **Bauldry:** the contents of §1.2 and §2.2 as described in `ex-mod6-br-1` to `-br-8`.
