# Module 3 math fixes (#10)

Source review: [#10 Module 3 comment](https://github.com/morrisqa/analysis-prep/issues/10#issuecomment-6008773998). All 17 findings were confirmed against the source and fixed.

## Decisions

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod3-we-4`, `ex-mod3-ps-s4`, `ex-mod3-as-2a` | Keep WE4's bijection f : ℕ₀ → ℤ and add a named bijection φ : ℕ → ℤ, φ(n) = f(n − 1), with its explicit formula and a short proof; ps-s4 and as-2a now use φ. | Keeps Quinn's construction and gives the later exercises an object that exists. | Rewrite WE4 on ℕ directly. |
| `ex-mod3-as-2a` hint | The hint now defines the student's f = 3φ directly (no separate g). | One name for the requested answer; φ avoids the clash with the statement's f. | Keep g; rename only the helper. |
| `ex-mod3-as-2b` hint | Surjection route for nonempty sets, empty case handled separately, least-preimage injection; well-ordering stated in plain words. | Fixes three gaps within Quinn's approach; well-ordering is not named elsewhere in the book. | Use the injection into ℕ × {0, 1} the statement allows. |
| `ex-mod3-we-5` | Full proof of bijectivity (diagonal blocks, position within a block). | Student learning over brevity; the example was labelled "Formal argument". | Relabel as a sketch. |
| `par-mod3-sg-c` | Keep ∼ for "same cardinality", define it, prove reflexive/symmetric/transitive, and say it "behaves like" an equivalence relation. | Avoids claiming a relation on a set of all sets without needing Russell's paradox. | Use ≡ for the parity relation in sg-c1. |
| `par-mod3-sg-d` | Define ≼ in the module's words (injection A → B). | It was used undefined. | Replace ≼ with words. |
| `ex-mod3-we-1`, `par-mod3-instructor-note` | "Most set equality proofs follow this template" (was "Every"). | "Every" is false. | "Every element-chasing proof…" |
| `ex-mod3-br-1`(b) | Task changed to set-builder notation plus a union of two intervals. | The set was already written with set difference. | Delete the sentence. |
| `par-mod3-as-rubric` | Row renamed "Function construction (Part 2)", covering a bijection (Option A) or a surjection/injection (Option B). | The old row fit only Option A. | Separate rows per option. |
| Difficulty labels | No change. | The review found none mismatched. | |
| Cross-references | "Worked Example N" uses `<xref text="custom">`; other exercises use plain `<xref>`. | A plain xref to a worked example renders as "Checkpoint 3.21" (the exercise label is addressed in #6). | |

## Unverified citations
- Bauldry §2.1: what its definition of accumulation point uses (the module now claims only that cardinality "comes up").
- Zorn Theorem 1.21: stated for ℝ or (0, 1)? The module now relies only on "ℝ is uncountable".
- How Zorn proves ℚ is countable (claim removed).
- "Countably infinite means in bijection with ℕ = {1, 2, 3, …}" against Zorn Definition 1.13.
- Hirst's notation for injection comparison (≼ is defined in the module's own words).
- All other Zorn, Hirst and Bauldry page and section references in Module 3.
