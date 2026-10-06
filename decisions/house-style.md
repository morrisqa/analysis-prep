# House style (#7)

The pass ran as three copy-editors (Modules 1 to 3, 4 to 6, 7 to 9) on one branch, then one consistency pass across the book. The issue suggested three pull requests; one pull request was used, because the three passes had to agree on the same conventions and are easier to compare side by side.

| Where | Decision | Why | Alternative |
|---|---|---|---|
| All modules | Every em-dash removed (138), in prose and titles, rewritten with a colon, comma, parentheses, or a new sentence. "Required — Choose One" is now "Required; Choose One". | House style. | |
| All modules | Every en-dash written as a character or entity is now `<ndash/>` (136); two-person names (Bolzano–Weierstrass, Heine–Cantor, Riemann–Stieltjes, Cantor–Bernstein) always use it. The validator now reports zero messages (it reported 234). | PreTeXt's recommended markup; a clean validation makes any new problem visible. | |
| Assessments, Module 1 bridge reading, Module 1 worked examples | Alerts used as headings ("Part 1: Core Proof (Required)") are titled `<paragraphs>` blocks with new ids `par-modN-as-part1` to `-part3`, `par-mod1-br-part1` to `-part4`, `par-mod1-we-reflection`. The estimated time is the block's first sentence. | Proper structure; headings appear in the page outline. | Leave alerts. |
| Rubrics | One block per assessment, titled "Assessment Rubric (Informational)", holding the lead-in sentence and the table (`par-modN-as-rubric`, id unchanged). | Avoids two headings in a row. | |
| Worked-example solutions | "Proof.", "Strategy.", "Step 1" labels are run-in alerts at the start of their paragraph (the schema does not allow titled blocks inside a solution). | Consistent across modules. | Wrap each proof in `<proof>`. |
| Practice sets | The "Foundational / Standard / Challenge Problems" headings stay alongside the [F]/[S]/[C] labels. The issue asked for a proposal; both are kept. | The label stays with a problem when it is viewed or cited on its own; the heading introduces the level. | Drop the headings, or drop the labels (CLAUDE.md requires the labels). |
| Book-wide | Named results are capitalized ("Archimedean Property", "Heine–Cantor Theorem", "Triangle Inequality", "Ratio Test"); abbreviations (MCT, AST, …) are spelled out at first use in each module. | One form per name; most uses were already capitalized. | Lowercase generic style. |
| Book-wide | Textbook items in possessive form: "Zorn's Theorem 1.19", "Bauldry's Definition 2.15". Sections stay "Zorn §1.4". No item type or number was changed. | One form; numbers unverified (#9). | |
| Book-wide | Serial comma throughout. Expository "we" became "you"; "we" stays in proofs and in Quinn's instructor notes (course-level "we"). | House style. | |
| Module 1 worked examples | Hand-typed `\square` inside `<proof>` removed (four places); the proof draws its own mark. Marks ending a proof inside an answer or solution stay. | Doubled marks. | |
| Banned words | "key takeaway" → "main point" (Module 6); "powerful" → "matters" (Module 8 bridge reading). "Beautiful" and "beautifully transparent" in Modules 8 and 9 stay as Quinn's voice. | House style; rule 5. | |
| Module 6 instructor note | "It is worth writing both definitions out by hand and staring at them" kept as Quinn wrote it (a copy-editor had made it an imperative). | Not a banned phrase; Quinn's voice (rule 5). | |
| `<term>` | Added where a module defines the term (Module 3 topology terms, Module 4 sequence terms, Module 9 pointwise and uniform convergence, and others); removed where nothing was defined (Module 1 study guide). Terms that a module only sends to the textbook for (supremum in Module 2, countable in Module 3, upper and lower sums in Module 8) have no defining sentence in the book to mark. | House style. | Add defining sentences (a content change; not done). |
| Module 7 road map | "Video 1: The Derivative (Definition and Rules)". | Double colon. | |
| Module 5 bridge reading | `ex-mod5-br-2` "The Special Series of Elementary Calculus"; `ex-mod5-br-3` "The Catalog of Tests". | Matches the other bridge-reading titles. | |

## Graded-hint audit, Modules 1 to 4

Applying `policies.md` (graded hints give the approach only). Ten hints were cut back to the approach: `ex-mod2-as-1a`, `-1b`, `-2a`, `-2b`; `ex-mod3-as-1`, `-2a`, `-2b`; `ex-mod4-as-1a`, `-1b`, `-2b`. Each old hint supplied a factorization, a witness, a bijection, a full construction, or the whole scratch work. The old text is in git history (`main` before this PR) if you prefer any of them back. `ex-mod1-as-*`, `ex-mod1-as-2a` and `ex-mod4-as-2a` were already approach-level. No graded item in Modules 1 to 4 has an answer or solution.

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod2-as-2a` hint | No longer says "condition (ii)" for the definition's second condition. | The study guide uses "condition (ii)" for the ε-condition (one name per concept). | |
| `ex-mod2-as-r2` | Statement changed: Option B students compare Bauldry's proof with their own; Option A students read Bauldry's proof on its own and identify the set completeness is applied to, the supremum, and the contradiction. | The old prompt pointed Option A students at the Option B hint, which is now an outline only (math review). | Keep the old prompt. |
| `ex-mod3-as-2b` | Title "Union of Two Countable Sets" (was "Countable Union of Countable Sets", the general result the statement forbids citing); hint made route-neutral. | Math review. | |
| `ex-mod4-as-1b` hint | "a smaller, simpler positive expression". | Replacing a denominator by a smaller one enlarges the fraction only if it stays positive. | |
| `ex-mod7-as-2` | Step (ii) of the statement gives g'(x) = x/(1+x); left. | Scaffolding written into the statement, not a hint. | Ask students to compute it. |
| `ex-mod1-we-2`, `-we-3`, `-we-4` | The bracketed teaching aside after each proof's last sentence now sits after `</proof>` (inside the solution), so the drawn end-of-proof mark falls where the argument ends. | These examples model where a proof ends (math review). | Restore hand-typed marks (doubles them). |
| `ex-mod4-we-2` | "(the denominator's limit is 4)". | "the limit is 4" could be read as the sequence's limit, which is 3/4 (math review). | |
