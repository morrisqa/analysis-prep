# Book-wide policies

Rules adopted during the autonomous run that apply to every module. Each was
first applied where it arose and is checked across the book in the
structure and house-style passes.

| Policy | Arose in | Why |
|---|---|---|
| **Hints on graded assessment items point to the approach and never supply the answer or the full argument.** Practice-set hints may be fuller, since practice is ungraded. | Module 3 (`ex-mod3-as-2b`), Module 5 (`ex-mod5-as-1`, `-as-2`, `-as-r1`) | Reviewers found several graded hints that a student could copy as the answer. |
| **New exposition goes where students see it**, never only inside a hidden answer, and never before an exercise whose answer it gives. | Module 1 (negation rules), Module 2 (definition of supremum) | Answers are hidden by default in HTML; placing a definition above the exercise that asks for it gives the answer away. |
| **Results a module relies on are stated, with a proof, in the book** (or cited to a checkable reference), rather than assumed or attributed to an earlier module that never proved them. | Module 4 (uniqueness of limits; limits preserve non-strict inequalities), Module 5 (Root Test) | CLAUDE.md rule 4; several modules cited facts that no module stated. |
| **One name per concept.** A term or label (for example "condition (ii)", "ε-characterization") keeps one meaning across a module. | Module 2 | The supremum material used "condition (ii)" for two different conditions. |
| **Cross-references:** a module is named with an `<xref>` to its chapter (renders "Module N"); worked examples are `<example>` elements cited with a plain `<xref>` (renders "Example N.M"); numbered results (theorems, definitions, lemmas) with a plain `<xref>`; a titled `<paragraphs>` block only with custom text (a plain xref to it is a build error); other exercises with a plain `<xref>` (renders "Exercise N.M"). | Modules 1 to 5; revised in the structure pass | Hand-typed references go stale. |
| **Unverifiable textbook claims are not strengthened.** Where a fix touches a claim about what Zorn, Hirst or Bauldry says, it keeps or softens the claim and logs it as unverified. | All modules | The books are not available to the agents. |
