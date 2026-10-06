# Citations (#9)

The textbooks (Zorn, Hirst, Bauldry; Rudin, Apostol, and Bartle and Sherbert in asides) were not available during the run, so **no page, section, or item number in the book has been checked.** This file is the complete list for checking with the books in hand. Fix a wrong number in the source (`<xref>` is not involved; these are plain text), then tick its row.

## Decisions

| Where | Decision | Why | Alternative |
|---|---|---|---|
| 24 places in Modules 2, 4, 5, 6, 8, 9 | References that showed students a guess ("Theorem 2.16 or near Proposition 2.24", "Definition 2.15 (or nearby)", "Theorem 2.6.x", "typically states", "Bauldry's proof is likely more compressed", "Zorn may prove it differently") now name the result without a number, or ask the student to look ("Find Bauldry's version in §2.4 and compare"). Unhedged numbers were left as they were and are listed below. | A student should never be sent to a number the text itself doubts. | Keep the guesses until checked. |
| `ex-mod2-br-3`(b), `ex-mod4-br-2`(b), `ex-mod4-br-4`(d) | Guesses about how a proof looks became questions ("Compare the length and level of detail …"). | Same. | |
| `ex-mod9-br-3`(b), `ex-mod8-br-6`, `ex-mod5-sg-26-6` | Math review of this change: the uniform-continuity statement now says "closed, bounded interval [a,b]" (it is false on [0, ∞)); the Riemann–Stieltjes answer says bounded variation is the standard hypothesis and increasing α a special case; "check whether and where Zorn mentions" the Integral Test. | Correctness; no assumption about the book. | |
| `ex-mod4-sg-23-3` | Asks which strategy Zorn's proof uses; the parts that follow are about the monotone-subsequence strategy whatever Zorn's choice. | The old text guessed Zorn's strategy. | |
| Page ranges | "approximately" kept. | Removing it would make unchecked pages look exact. #9 asked for its removal once pages are verified. | Remove now. |
| `sec-mod1-bridge-reading` | Short, attributed quotations of Bauldry (Definition 2.1, Theorem 2.3, Corollary 2.4 Item 3, a sentence of the chapter introduction, a quotation of Arnold Ross) kept. | They were in Quinn's original files; rule 6 forbids adding third-party material, not keeping it. Whether to keep quotations in a public text is Quinn's call. | Paraphrase them. |
| Pronouns for textbook authors | "he"/"his" for Zorn and Bauldry removed only in edited sentences; the rest is Quinn's text and stays. | Rule 5. | Replace with the book or surname throughout. |

## Known inconsistencies (check these first)

- **Bauldry §2.1 pages:** pp. 45–50 (Module 1 bridge reading: chapter opening and §2.1), pp. 37–51 (Module 2), pp. 37–52 "approximately" (Module 3, titled "The Topology of ℝ").
- **Bauldry numbering:** Theorems 2.2 and 2.3 and Definitions 2.2 and 2.3 are all cited (Module 1). Fine if the book numbers theorems and definitions separately; otherwise one of each pair is wrong. Module 4 cites Definitions 2.15 and 2.16 near Theorems 2.48 to 2.55, which suggests separate sequences.
- **Zorn pages:** §§3.2 to 3.4 as pp. 164–198 (Module 6) overlaps §4.1 as pp. 163–172 (Module 7).
- **Zorn §4.4** is cited for uniform convergence (Module 9), which would place it before the Chapter 5 integration material used in Module 8.
- **Zorn's Monotone Convergence Theorem:** cited as Theorem 2.3 (in §2.1) and also placed in §2.3 (Module 4).
- **Hirst's Theorem 47** is the Axiom of Extensionality (`ex-mod3-sg-a1`): an axiom numbered as a theorem.
- **Zorn's Theorem 1.21** (Module 3): stated for ℝ or for (0, 1)? The module relies only on "ℝ is uncountable".
- **(1 + 1/n)ⁿ → e** (Module 5 Ratio Test example, used again in `ex-mod9-as-2`): the guessed location "Zorn §2.3 or its problem set" was removed; the text now calls it a standard limit from calculus and asks the student to check where Zorn proves it. Add the location once found.

## Claims about what a book does (unverified, not numbers)

- `ex-mod4-br-2`: Bauldry "states and proves [uniqueness of limits] immediately after the definition".
- `par-mod4-br-cauchy`: the Cauchy material "close[s] out the book's treatment of sequences".
- `par-mod4-br-mct`, `par-mod4-br-defn`: Bauldry's Monotone Convergence Theorem uses the Completeness Axiom; Bauldry's definition of convergence is symbolically identical to Zorn's.
- `ex-mod8-br-5`(b): Bauldry requires bounded variation.
- `par-mod9-br-mtest`, `ex-mod9-br-6`(a): what Bauldry says about the M-test.
- Module 3 bridge reading: what Bauldry's §2.1 definition of accumulation point uses.
- The per-module files (`mod3.md` to `mod9.md`, `mod1-alignment.md`) list a few more under "Unverified".

## Checklist

Generated from the source on 2026-10-06: every paragraph, title, list item, or table cell that names a book together with a section, page, or numbered item. "Where" is the nearest `xml:id` (search the source for it). Context is truncated.

### Module 1

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod1-as-1b` | Bauldry | Corollary 2.4, p. 48 | Bauldry's Corollary 2.4, p. 48) guarantees that the N you choose exists in \N. |
| ☐ | `ex-mod1-as-r2` | Bauldry | Theorem 2.3 | Bauldry's proof of Theorem 2.3 (Archimedean Order Property). The proof used contradiction and the Least Upper |
| ☐ | `sec-mod1-bridge-reading` | Bauldry | Chapter 2 | Bauldry, Chapter 2, pages 45–50. Estimated time: 35 minutes. |
| ☐ | `sec-mod1-bridge-reading` | Bauldry | Chapter 2, §2.1 | Bauldry Chapter 2 (Introduction to Real Analysis), specifically pages 45–50, which cover the chapter introduct |
| ☐ | `ex-mod1-br-1` | Bauldry | Chapter 2, Chapter 1 | Bauldry describes Chapter 2 as covering essentially the same topics as Chapter 1… but now from a perspective b |
| ☐ | `ex-mod1-br-2` | Zorn | §1.4 | Zorn §1.4 (Reading 1 of the Study Guide)? Identify one specific rule from |
| ☐ | `par-mod1-br-part2` | Bauldry | pp. 46–49 | Bauldry's definitions using the quantifier machinery from Module 1. Work through the questions below as you re |
| ☐ | `sec-mod1-bridge-reading` | Bauldry | Definition 2.1, p. 47 | Bauldry's Definition 2.1: Least Upper Bound Property (p. 47). |
| ☐ | `sec-mod1-bridge-reading` | Bauldry | Theorem 2.3, p. 48 | Bauldry's Theorem 2.3: Archimedean Order Property (p. 48). Theorem 2.3 states: If \varepsilon and x are positi |
| ☐ | `sec-mod1-bridge-reading` | Bauldry | Corollary 2.4 | Bauldry's Corollary 2.4, Item 3: For any positive real number x, there is an n \in \N such that 1/n \lt x. |
| ☐ | `ex-mod1-br-5` | Bauldry | Theorem 2.3 | Bauldry's Theorem 2.3 in full quantifier notation, identifying: (a) the universal quantifiers and their domain |
| ☐ | `ex-mod1-br-6` | Bauldry | Theorem 2.3 | Bauldry's Proof of Theorem 2.3 |
| ☐ | `ex-mod1-br-6` | Bauldry | Theorem 2.3 | Bauldry's proof of Theorem 2.3 carefully. What proof strategy does |
| ☐ | `ex-mod1-br-7` | Bauldry | Corollary 2.4 | Bauldry's Corollary 2.4, Item 3: Negation and Structure |
| ☐ | `ex-mod1-br-7` | Bauldry | Corollary 2.4 | Bauldry's Corollary 2.4 lists four equivalent forms of the Archimedean Property. For Item 3 (\forall x \gt 0 \ |
| ☐ | `sec-mod1-bridge-reading` | Bauldry | Definitions 2.2 and 2.3, pp. 48–49 | Bauldry's Definitions 2.2 and 2.3: Metric Spaces and Neighborhoods (pp. 48–49). |
| ☐ | `ex-mod1-br-9` | Bauldry | Definition 2.3 | Bauldry's Definition 2.3 defines a point x to be an accumulation point (or limit point) of a set E if every de |
| ☐ | `ex-mod1-br-9` | Bauldry | Definition 2.3 | Bauldry calls a point x \in E that is not an accumulation point of E an isolated point of E. Does your negatio |
| ☐ | `ex-mod1-br-10` | Bauldry | Theorem 2.2 | Bauldry's Theorem 2.2: Infimum Theorem |
| ☐ | `ex-mod1-br-10` | Bauldry | Theorem 2.2 | Bauldry's Theorem 2.2 on page 47 (the infimum theorem: if B \subseteq U is nonempty and bounded below in a set |
| ☐ | `ex-mod1-br-11` | Bauldry | Theorem 2.7 | Bauldry's Theorem 2.7: Open Sets Under Union |
| ☐ | `ex-mod1-br-11` | Bauldry | Theorem 2.7, p. 50 | Bauldry's Theorem 2.7 (p. 50) states four results about unions and intersections of open and closed sets. Cons |
| ☐ | `ex-mod1-br-15` | Bauldry | Theorem 2.3 | Bauldry's proof of Theorem 2.3: Suppose no such n exists. What proof strategy does this sentence signal? Write |
| ☐ | `par-mod1-map` | Hirst | Ch. 2–3 | Hirst Ch. 2–3 and |
| ☐ | `par-mod1-map` | Zorn | §1.4–1.5 | Zorn §1.4–1.5 |
| ☐ | `par-mod1-map` | Bauldry | Ch. 2 | Bauldry Ch. 2 |
| ☐ | `sec-mod1-study-guide` | Hirst | Chapters 2–3 | Hirst, Chapters 2–3; |
| ☐ | `sec-mod1-study-guide` | Zorn | Sections 1.4–1.5. | Zorn, Sections 1.4–1.5. Estimated time: 55 minutes. |
| ☐ | `par-mod1-sg-z14` | Zorn | §1.4 | Zorn §1.4 Proofs 101 (Suggested time: 20 minutes) |
| ☐ | `par-mod1-sg-archimedean` | Bauldry | Theorem 2.3 | Bauldry's Theorem 2.3, which you will write in symbols in ). They are different statements, but the implicatio |
| ☐ | `par-mod1-sg-z15` | Zorn | §1.5 | Zorn §1.5 Types of Proof (Suggested time: 20 minutes) |
| ☐ | `par-mod1-sg-h2` | Hirst | Ch. 2, §2.1–2.2, §2.4 | Hirst Ch. 2, §2.1–2.2 and §2.4 (Suggested time: 10 minutes) |
| ☐ | `par-mod1-sg-h2` | Hirst | §2.1–2. | Hirst formalizes the components of mathematical statements: predicates (P(x,y)), terms, connectives (\wedge, \ |
| ☐ | `par-mod1-sg-h3` | Hirst | Ch. 3, §3.5–3.6 | Hirst Ch. 3, §3.5–3.6 (Suggested time: 5 minutes) |
| ☐ | `par-mod1-sg-h3` | Hirst | §3.6 | Hirst presents proof strategies in a more formal framework. Pay particular attention to §3.6 (existence, uniqu |
| ☐ | `ex-mod1-sg-h3-1` | Hirst | §3.6 | Hirst §3.6 lists strategies for proving existence, uniqueness, iff statements, and equalities. Summarize each |
| ☐ | `ex-mod1-sg-h3-3` | Hirst | §3.6 | Hirst §3.6, to prove C \to (A \wedge B) directly, what must you show? What does the contrapositive look like f |
| ☐ | `par-mod1-sg-syn` | Bauldry | Ch. 2 | Bauldry Ch. 2). A sequence (a_n)_{n=1}^\infty of real numbers converges to a limit L \in \R if and only if \fo |

### Module 2

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod2-as-r2` | Bauldry | Theorem 2.3 | Bauldry's proof of Theorem 2.3 (Archimedean Property). If you chose Option B, compare its logical structure to |
| ☐ | `sec-mod2-bridge-reading` | Bauldry | Sections 1.1 and 2.1. | Bauldry, Sections 1.1 and 2.1. Estimated time: 35 minutes. |
| ☐ | `sec-mod2-bridge-reading` | Bauldry | §1.1, pp. 1–7, §2.1, pp. 37–51, Section 1.1, §2.1. | Bauldry §1.1 (pp. 1–7, informal overview) and §2.1 (pp. 37–51, the formal foundations of \R). Section 1.1 is a |
| ☐ | `par-mod2-br-completeness` | Bauldry | §2.1 | Bauldry presents the real number system as a complete ordered field. The Completeness Axiom appears in §2.1 as |
| ☐ | `ex-mod2-br-1` | Bauldry | §2.1. | Bauldry §2.1. Copy |
| ☐ | `ex-mod2-br-1` | Zorn | §1.9 | Zorn's statement (§1.9). Are the wordings identical? If not, what differs? Are the two statements logically eq |
| ☐ | `par-mod2-br-archimedean` | Bauldry | Theorem 2.3 | Bauldry's Theorem 2.3 is the Archimedean Order Property. In you read the proof for its logical structure; now |
| ☐ | `ex-mod2-br-2` | Bauldry | Theorem 2.3 | Bauldry's Proof of Theorem 2.3 |
| ☐ | `ex-mod2-br-2` | Bauldry | Theorem 2.3. | Bauldry's Theorem 2.3. State the theorem in your own words. What property of \R does it assert? Identify the p |
| ☐ | `ex-mod2-br-5` | Bauldry | Chapter 2 | Bauldry Chapter 2? |
| ☐ | `ex-mod2-br-5` | Bauldry | §2.1 | Bauldry §2.1 and beyond. Find at least two theorems or results (other than the Archimedean Property and densit |
| ☐ | `par-mod2-instructor-note` | Bauldry | Chapter 2 | Bauldry's Chapter 2 (the Archimedean Property, the Bolzano–Weierstrass Theorem, the Intermediate Value Theorem |
| ☐ | `par-mod2-pacing` | Zorn | §1.7 | Zorn §1.7 will likely feel familiar. Spend a few minutes on the study guide questions to confirm fluency, then |
| ☐ | `par-mod2-pacing` | Zorn | §1.8 | Zorn §1.8) and its use in proofs. That characterization is the technical heart of this module and the template |
| ☐ | `par-mod2-pacing` | Zorn | §1.7 | Zorn §1.7 and the Worked Examples before moving to the practice set. The Triangle Inequality proof in the Work |
| ☐ | `par-mod2-map` | Zorn | §1.7–1.9 | Zorn §1.7–1.9 with guided questions |
| ☐ | `par-mod2-map` | Bauldry | Ch. 2 | Bauldry Ch. 2 |
| ☐ | `ex-mod2-ps-s2` | Zorn | Theorem 1.23 | Zorn's Theorem 1.23(c)) to show that \|x + 3\| \lt 7. (Hint: write x + 3 = (x - 3) + 6.) Using part (a), prove t |
| ☐ | `ex-mod2-ps-c2` | Bauldry | Theorem 2.3 | Bauldry's Theorem 2.3, stated for every real x rather than only x \gt 0. Working through the argument yourself |
| ☐ | `sec-mod2-study-guide` | Zorn | Sections 1.7–1.9. | Zorn, Sections 1.7–1.9. Estimated time: 50 minutes. |
| ☐ | `sec-mod2-study-guide` | Zorn | Section 1.1 | Zorn's Understanding Real Analysis. Section 1.1 is listed in the module syllabus as background reading: skim i |
| ☐ | `par-mod2-sg-17-intro` | Zorn | pp. 62–65 | Zorn pp. 62–65) |
| ☐ | `par-mod2-sg-17-intro` | Zorn | Theorem 1.23 | Zorn's Theorem 1.23(c) (which converts an absolute value inequality into an interval) and |
| ☐ | `par-mod2-sg-17-intro` | Zorn | Theorem 1.24 | Zorn's Theorem 1.24 (the Triangle Inequality). |
| ☐ | `ex-mod2-sg-17-2` | Zorn | Theorem 1.23 | Zorn's Theorem 1.23(c) says: \|x\| \lt k \iff -k \lt x \lt k (for k \gt 0). The non-strict form \|x\| \leq k \iff |
| ☐ | `par-mod2-sg-18-intro` | Zorn | pp. 67–73 | Zorn pp. 67–73) |
| ☐ | `par-mod2-sg-19-intro` | Zorn | pp. 74–82 | Zorn pp. 74–82) |
| ☐ | `ex-mod2-we-1` | Zorn | Theorem 1.23 | Zorn's Theorem 1.23(c): \|u\| \lt k \iff -k \lt u \lt k. Here u = 2x - 3 and k = 5. |
| ☐ | `ex-mod2-we-2` | Zorn | Theorem 1.23 | Zorn's Theorem 1.23(c) (see ), with u = x + y and k = \|x\| + \|y\|. \square |
| ☐ | `ex-mod2-we-2` | Zorn | Theorem 1.23 | Zorn's Theorem 1.23(c). Each step is short; the proof works because it sets up the right lemma first. |

### Module 3

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod3-as-2b` | Zorn | Proposition 1.17 | Zorn's Proposition 1.17). You may not invoke |
| ☐ | `ex-mod3-as-2b` | Zorn | Proposition 1.19 | Zorn's Proposition 1.19 directly, as that is the general version of the result you are proving. |
| ☐ | `ex-mod3-as-2b` | Zorn | Proposition 1.17 | Zorn's Proposition 1.17 to conclude. |
| ☐ | `ex-mod3-as-2b` | Zorn | Proposition 1.17 | Zorn's Proposition 1.17 applies. |
| ☐ | `ex-mod3-as-r1` | Bauldry | §2.1 | Bauldry §2.1 in Set-Theoretic Language |
| ☐ | `ex-mod3-as-r1` | Bauldry | §2.1 | Bauldry §2.1 where a set-theoretic argument from Module 3 (membership, subset, union, intersection, set differ |
| ☐ | `sec-mod3-bridge-reading` | Bauldry | Section 2.1. | Bauldry, Section 2.1. Estimated time: 35 minutes. |
| ☐ | `sec-mod3-bridge-reading` | Bauldry | §2.1, pp. 37–52 | Bauldry §2.1 (Introduction to Real Analysis, pp. 37–52, approximately): The Topology of \R. |
| ☐ | `sec-mod3-bridge-reading` | Bauldry | §2.1 | Bauldry §2.1 develops the topology of the real line: neighborhoods, open and closed sets, interior and boundar |
| ☐ | `ex-mod3-br-2` | Zorn | Chapter 1 | Zorn Chapter 1 that is open and one that is closed (in the |
| ☐ | `ex-mod3-br-4` | Bauldry | §2.1 | Bauldry §2.1, you will encounter notation and terminology that may differ slightly from |
| ☐ | `ex-mod3-br-4` | Bauldry | §2.1 | Bauldry §2.1 where a set-theoretic operation (union, intersection, complement, or set difference) appears in a |
| ☐ | `ex-mod3-br-4` | Bauldry | §2.1 | Bauldry §2.1 that you expect will be important in MAT 5610, based on what you have seen so far in this course? |
| ☐ | `par-mod3-br-ahead` | Bauldry | §2.1 | Bauldry §2.1 is the setting for the definitions of limit and continuity in |
| ☐ | `par-mod3-br-ahead` | Bauldry | §2.2. | Bauldry §2.2. When |
| ☐ | `par-mod3-br-ahead` | Hirst | §5.4 | Hirst §5.4 that you read in the Study Guide. |
| ☐ | `par-mod3-instructor-note` | Bauldry | Chapter 2 | Bauldry Chapter 2 uses it constantly: countable unions of measure-zero sets have measure zero; the rationals a |
| ☐ | `par-mod3-map` | Zorn | §1.2–1.3, §1.6 | Zorn §1.2–1.3, §1.6; |
| ☐ | `par-mod3-map` | Hirst | Ch. 5 | Hirst Ch. 5 with guided questions |
| ☐ | `par-mod3-map` | Bauldry | §2.1 | Bauldry §2.1 |
| ☐ | `ex-mod3-ps-f4` | Zorn | Theorem 1.21 | Zorn's Theorem 1.21). (c) Countably infinite (in bijection with \N via n \mapsto 1/n). (d) Uncountable. It is |
| ☐ | `ex-mod3-ps-f4` | Zorn | Theorem 1.21. | Zorn's Theorem 1.21. Cantor's diagonal argument in also proves it directly. (e) Countably infinite (product of |
| ☐ | `ex-mod3-ps-f4` | Zorn | Proposition 1.18 | Zorn's Proposition 1.18). |
| ☐ | `sec-mod3-study-guide` | Zorn | Sections 1.2–1.3 | Zorn, Sections 1.2–1.3 and 1.6; |
| ☐ | `sec-mod3-study-guide` | Hirst | Sections 5.1–5.5. | Hirst, Sections 5.1–5.5. Estimated time: 55 minutes. |
| ☐ | `par-mod3-sg-a` | Zorn | §1.2, pp. 10–18 | Zorn §1.2 (pp. 10–18); |
| ☐ | `par-mod3-sg-a` | Hirst | §5.1–5.2. | Hirst §5.1–5.2. |
| ☐ | `par-mod3-sg-a` | Zorn | §1.2 | Zorn §1.2 develops set notation and operations informally but rigorously, with examples drawn from analysis (i |
| ☐ | `par-mod3-sg-a` | Hirst | §5.1–5.2 | Hirst §5.1–5.2 covers the same ground using the Axiom of Extensionality and the formal set-builder notation fr |
| ☐ | `ex-mod3-sg-a1` | Hirst | Theorem 47 | Hirst's Theorem 47) in your own words. Then explain why it implies the standard proof strategy for set equalit |
| ☐ | `ex-mod3-sg-a2` | Zorn | p. 12 | Zorn p. 12 or |
| ☐ | `ex-mod3-sg-a2` | Hirst | §5.2 | Hirst §5.2). Then, for the law (A \cup B)^c = A^c \cap B^c (where X^c denotes the complement of X in some univ |
| ☐ | `par-mod3-sg-b` | Zorn | §1.3, pp. 19–31 | Zorn §1.3 (pp. 19–31); |
| ☐ | `par-mod3-sg-b` | Hirst | §5.3–5.4. | Hirst §5.3–5.4. |
| ☐ | `par-mod3-sg-b` | Zorn | §1.3 | Zorn §1.3 defines functions as three-part packages (domain, codomain, rule) and develops injectivity, surjecti |
| ☐ | `par-mod3-sg-b` | Hirst | §5.3–5.4 | Hirst §5.3–5.4 provides the set-theoretic foundation: functions as sets of ordered pairs, and images and preim |
| ☐ | `ex-mod3-sg-b3` | Zorn | Definition 1.11 | Zorn's Definition 1.11 or |
| ☐ | `ex-mod3-sg-b3` | Hirst | §5.4 | Hirst §5.4). Then: for f : \R \to \R, f(x) = 3x - 5, find f^{-1} explicitly and verify that f(f^{-1}(y)) = y f |
| ☐ | `par-mod3-sg-c` | Zorn | §1.3 | Zorn §1.3, the final two pages on relations (following the discussion of inverse functions). |
| ☐ | `par-mod3-sg-d` | Zorn | §1.6, pp. 52–61 | Zorn §1.6 (pp. 52–61); |
| ☐ | `par-mod3-sg-d` | Hirst | §5.5. | Hirst §5.5. |
| ☐ | `par-mod3-sg-d` | Zorn | §1.6, Propositions 1.17–1.19 | Zorn §1.6 defines cardinality via bijection and develops the main countability results: Propositions 1.17–1.19 |
| ☐ | `par-mod3-sg-d` | Hirst | §5.5 | Hirst §5.5 covers related material including the Cantor–Bernstein theorem. Write A \preceq B when there is an |
| ☐ | `ex-mod3-sg-d1` | Zorn | Definition 1.13 | Zorn's Definition 1.13 for two sets having the same cardinality. Then verify: does \N \sim \{2, 4, 6, 8, \ldot |
| ☐ | `ex-mod3-sg-d2` | Zorn | Proposition 1.19 | Zorn's Proposition 1.19: a countable union of countable sets is countable. The proof uses the diagonal enumera |
| ☐ | `ex-mod3-sg-d3` | Zorn | Theorem 1.21 | Zorn's Theorem 1.21) that \R is uncountable, identify the following components: What is assumed for contradict |
| ☐ | `ex-mod3-sg-d4` | Hirst | Theorem 55 | Hirst's Theorem 55). In one sentence, explain why this theorem is useful: what does it allow you to conclude a |
| ☐ | `ex-mod3-we-2` | Zorn | Definition 1.11 | Zorn's Definition 1.11, an inverse function f^{-1} : \R \to \R exists. The scratch work in Step 2 gives us its |
| ☐ | `ex-mod3-we-5` | Zorn | Proposition 1.18, Corollary 1.20 | Zorn's Proposition 1.18 and Corollary 1.20 (\Q countable). When you need to show that a product or union of co |

### Module 4

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod4-as-2a` | Zorn | Theorem 2.5 | Zorn's Theorem 2.5) and the known limit 1/n \to 0. Do not write an \varepsilon-N proof. |
| ☐ | `ex-mod4-as-r2` | Bauldry | §2.5 | Bauldry's treatment of sequences (§2.5). Compare the presentation style to |
| ☐ | `sec-mod4-bridge-reading` | Bauldry | Section 2.5. | Bauldry, Section 2.5. Estimated time: 40 minutes. |
| ☐ | `sec-mod4-bridge-reading` | Bauldry | §2.5, pp. 88–99 | Bauldry §2.5 (Sequences, approximately pp. 88–99). This single section covers everything you studied in |
| ☐ | `sec-mod4-bridge-reading` | Zorn | §2.1–2.4. | Zorn §2.1–2.4. |
| ☐ | `par-mod4-br-defn` | Bauldry | §2.5 | Bauldry's definition of convergence in §2.5 is the \varepsilon-N definition. Its symbolic content is identical |
| ☐ | `ex-mod4-br-1` | Bauldry | §2.5. | Bauldry's \varepsilon-N definition of convergence in §2.5. Copy |
| ☐ | `par-mod4-br-cauchy` | Zorn | §2.4 | Zorn §2.4, but |
| ☐ | `ex-mod4-br-6` | Bauldry | §2.5., Chapter 2 | Bauldry beyond §2.5. Find at least two theorems elsewhere in Chapter 2 whose statements or proofs invoke seque |
| ☐ | `obj-mod4` | Bauldry | §2.5 | Bauldry §2.5 carefully and identify where the results above appear in his presentation, noting differences in |
| ☐ | `sec-mod4-orientation` | Bauldry | Chapter 2 | Bauldry Chapter 2 rests. |
| ☐ | `par-mod4-map` | Zorn | §2.1–2.4 | Zorn §2.1–2.4 with guided questions |
| ☐ | `par-mod4-map` | Bauldry | §2.5 | Bauldry §2.5 |
| ☐ | `ex-mod4-ps-s2` | Zorn | Theorem 2.6 | Zorn's Theorem 2.6). Your proof should (i) explicitly identify two bounding sequences a_n \leq b_n \leq c_n, ( |
| ☐ | `sec-mod4-study-guide` | Zorn | Sections 2.1–2.4. | Zorn, Sections 2.1–2.4. Estimated time: 60 minutes. |
| ☐ | `sec-mod4-study-guide` | Zorn | §2.1 | Zorn's Understanding Real Analysis, which together cover the full story of convergent sequences of real number |
| ☐ | `par-mod4-sg-21-intro` | Zorn | pp. 83–95 | Zorn pp. 83–95) |
| ☐ | `par-mod4-sg-21-intro` | Zorn | Definition 2.1 | Zorn's Definition 2.1 (convergence) more than once; understanding its quantifier structure is the main learnin |
| ☐ | `par-mod4-sg-21-intro` | Zorn | Definition 2.2, Theorem 2.3 | Zorn's Definition 2.2 (bounded, monotone) and Theorem 2.3 (a bounded monotone sequence converges). |
| ☐ | `ex-mod4-sg-21-1` | Zorn | Definition 2.1 | Zorn's Definition 2.1 of convergence (a_n \to L) symbolically, using quantifiers (\forall, \exists) and the ab |
| ☐ | `par-mod4-sg-two-facts` | Zorn | Definition 2.1 | Zorn's Definition 2.1 says what it means for L to be a limit of (a_n). The first fact below justifies speaking |
| ☐ | `ex-mod4-sg-21-3` | Zorn | §2.1 | Zorn's worked examples in §2.1, the author often first performs algebraic manipulation (finding the relationsh |
| ☐ | `ex-mod4-sg-21-3` | Zorn | §2.1, §2.1. | Zorn's proof that 1/n \to 0 or, if §2.1 does not give one, the first explicit \varepsilon-N argument in §2.1. |
| ☐ | `ex-mod4-sg-21-4` | Zorn | Theorem 2.4 | Zorn's Theorem 2.4 informally: if a_n \to L, then (a_n) is bounded. |
| ☐ | `par-mod4-sg-22-intro` | Zorn | pp. 96–105 | Zorn pp. 96–105) |
| ☐ | `par-mod4-sg-22-intro` | Zorn | Theorem 2.5 | Zorn's Theorem 2.5) and the Squeeze Theorem ( |
| ☐ | `par-mod4-sg-22-intro` | Zorn | Theorem 2.6 | Zorn's Theorem 2.6). |
| ☐ | `ex-mod4-sg-22-1` | Zorn | Theorem 2.5 | Zorn's Theorem 2.5 (sum, product, quotient). |
| ☐ | `ex-mod4-sg-22-4` | Zorn | §2.2 | Zorn §2.2 in your own words. Then apply it to show that a_n = \dfrac{\cos(n^2)}{n} converges, and identify the |
| ☐ | `par-mod4-sg-23-intro` | Zorn | pp. 106–113 | Zorn pp. 106–113) |
| ☐ | `par-mod4-sg-24-intro` | Zorn | pp. 114–120 | Zorn pp. 114–120) |
| ☐ | `par-mod4-sg-24-intro` | Zorn | Definition 2.17, Theorem 2.20 | Zorn's Definition 2.17 and Theorem 2.20 carefully. The equivalence of convergent and Cauchy in \R is another f |
| ☐ | `ex-mod4-we-2` | Zorn | Theorem 2.5 | Zorn's Theorem 2.5) directly. |
| ☐ | `ex-mod4-we-3` | Zorn | Theorem 2.5 | Zorn's Theorem 2.5): the left side converges to L \cdot L = L^2 by the product rule, and the right side conver |
| ☐ | `ex-mod4-we-3` | Zorn | §2.3 | Zorn (§2.3) takes the direct route, using continuity of the square root informally. |

### Module 5

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod5-as-r2` | Bauldry | §1.5–1.6. | Bauldry's §1.5–1.6. Compare the presentation style to |
| ☐ | `ex-mod5-as-r2` | Zorn | §2.5–2.6 | Zorn's §2.5–2.6: what is more compressed in |
| ☐ | `ex-mod5-as-r3` | Bauldry | §1.6. | Bauldry §1.6. In you will return to these objects in the language of sequences and series of functions. Based |
| ☐ | `sec-mod5-bridge-reading` | Bauldry | Sections 1.5–1.6. | Bauldry, Sections 1.5–1.6. Estimated time: 40 minutes. |
| ☐ | `sec-mod5-bridge-reading` | Bauldry | §1.5, §1.6 | Bauldry's Introduction to Real Analysis. For this module the reading covers two sections: §1.5 (Sequences and |
| ☐ | `sec-mod5-bridge-reading` | Bauldry | Chapter 1 | Bauldry's informal Chapter 1, which reviews elementary calculus with a gentle lean toward proof. The rigorous |
| ☐ | `sec-mod5-bridge-reading` | Bauldry | §2.5 | Bauldry §2.5, which is the starting point of MAT 5610. |
| ☐ | `sec-mod5-bridge-reading` | Bauldry | §1.6 | Bauldry lists every test in a few pages, with examples but without full proofs. Treat §1.6 as a preview: power |
| ☐ | `sec-mod5-bridge-reading` | Bauldry | §1.5, pp. 25–30, §1.6, pp. 31–36 | Bauldry §1.5 (Sequences and Series of Constants, approximately pp. 25–30) and §1.6 (Power Series and Taylor Se |
| ☐ | `par-mod5-br-15` | Bauldry | §1.5 | Bauldry §1.5: Sequences and Series of Constants |
| ☐ | `par-mod5-br-15` | Bauldry | §1.5, Definition 1.13, Theorem 1.32, Theorems 1.35–1.39. | Bauldry's §1.5 opens with sequences (Definition 1.13, Theorem 1.32 Algebra of Sequence Limits) and then pivots |
| ☐ | `ex-mod5-br-2` | Bauldry | Example 1.11 | Bauldry's Example 1.11 (Special Series of Elementary Calculus), which catalogs geometric, harmonic, p-series, |
| ☐ | `ex-mod5-br-3` | Bauldry | Theorem 1.35, Theorem 1.36, Theorem 1.37, Theorem 1.38 | Bauldry states five convergence tests in quick succession: Ratio (Theorem 1.35), Root (Theorem 1.36), Comparis |
| ☐ | `ex-mod5-br-3` | Bauldry | Theorem 1.38 | Bauldry's Theorem 1.38) is stated, but not proved, in this module's Study Guide (). State |
| ☐ | `par-mod5-br-16` | Bauldry | §1.6 | Bauldry §1.6: Power Series and Taylor Series |
| ☐ | `ex-mod5-br-4` | Bauldry | Definition 1.17 | Bauldry's Definition 1.17 (Power Series). For a fixed value of x, what kind of object is \sum_{n=0}^{\infty} a |
| ☐ | `ex-mod5-br-4` | Bauldry | Definition 1.18 | Bauldry's Definition 1.18) is the key summary statistic for a power series. State the three possibilities: R = |
| ☐ | `ex-mod5-br-5` | Bauldry | Example 1.14 | Bauldry's Example 1.14 uses the Ratio Test on the Maclaurin series for e^x: \sum_{n=0}^{\infty} \frac{x^n}{n!} |
| ☐ | `ex-mod5-br-6` | Bauldry | Theorem 1.40 | Bauldry's Theorem 1.40 states that a convergent power series can be differentiated and integrated term by term |
| ☐ | `ex-mod5-br-6` | Bauldry | Theorem 1.40, §1.6. | Bauldry does not prove Theorem 1.40 in §1.6. of this course (on sequences and series of functions) will develo |
| ☐ | `ex-mod5-br-7` | Bauldry | §1.5 | Bauldry §1.5 to |
| ☐ | `ex-mod5-br-7` | Bauldry | §2.5 | Bauldry §2.5 |
| ☐ | `ex-mod5-br-7` | Bauldry | §2.5, p. 88 | Bauldry §2.5 (Sequences, Series, and Convergence Tests, starting around p. 88). You are not expected to read § |
| ☐ | `ex-mod5-br-7` | Bauldry | §2.5 | Bauldry §2.5 is the starting point of MAT 5610. Based on what you have built in Modules 4 and 5, what fraction |
| ☐ | `par-mod5-instructor-note` | Zorn | §2.5–2.6 | Zorn §2.5–2.6 redevelops them from the ground up, and the worked examples show you what a clean written argume |
| ☐ | `par-mod5-pacing` | Zorn | §2.5, §2.6 | Zorn §2.5 quickly, spend focused time on the proofs of the Comparison Test and the Limit Comparison Test in §2 |
| ☐ | `par-mod5-pacing` | Bauldry | §1.5–1.6 | Bauldry §1.5–1.6 with full attention: |
| ☐ | `par-mod5-pacing` | Bauldry | Ch. 1, §2.5 | Bauldry's informal Ch. 1 presentation is preparation for his rigorous §2.5 treatment, which is where MAT 5610 |
| ☐ | `par-mod5-map` | Zorn | §2.5–2.6 | Zorn §2.5–2.6 with guided questions |
| ☐ | `par-mod5-map` | Bauldry | §1.5–1.6 | Bauldry §1.5–1.6 and a power-series preview |
| ☐ | `sec-mod5-study-guide` | Zorn | Sections 2.5–2.6. | Zorn, Sections 2.5–2.6. Estimated time: 55 minutes. |
| ☐ | `sec-mod5-study-guide` | Zorn | Section 2.5 | Zorn's Understanding Real Analysis. Section 2.5 (Series 101: Basic Ideas) introduces the formal definition of |
| ☐ | `par-mod5-sg-25-intro` | Zorn | pp. 119–134 | Zorn pp. 119–134) |
| ☐ | `par-mod5-sg-25-intro` | Zorn | Definition 2.22 | Zorn's Definition 2.22 (series convergence) very carefully. This is the definition on which all of Module 5 re |
| ☐ | `ex-mod5-sg-25-1` | Zorn | Definition 2.22 | Zorn's Definition 2.22 (convergence of a series) symbolically. Your statement should involve the partial sums |
| ☐ | `ex-mod5-sg-25-5` | Zorn | Theorem 2.23 | Zorn's Theorem 2.23 (algebra with convergent series). State the results for sums and constant multiples, and e |
| ☐ | `par-mod5-sg-26-intro` | Zorn | pp. 134–146 | Zorn pp. 134–146) |
| ☐ | `ex-mod5-sg-26-2` | Zorn | Theorem 2.29 | Zorn's Limit Comparison Test (Theorem 2.29): for series \sum a_k and \sum b_k with positive terms, if \lim_{k |
| ☐ | `ex-mod5-sg-26-6` | Zorn | §2.6 | Zorn mentions it (start with §2.6). |
| ☐ | `ex-mod5-we-2` | Zorn | Theorem 2.29 | Zorn's exact statement of Theorem 2.29), but the case of a finite nonzero limit is the most commonly useful. T |
| ☐ | `ex-mod5-we-4` | Rudin | Theorem 3.54 | Rudin, Principles of Mathematical Analysis, 3rd ed., Theorem 3.54). |

### Module 6

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod6-as-r2` | Zorn | §3.1–3.4 | Zorn §3.1–3.4 to |
| ☐ | `ex-mod6-as-r2` | Bauldry | §2.2. | Bauldry §2.2. Identify one place where |
| ☐ | `ex-mod6-as-r2` | Bauldry | §2.2 | Bauldry's treatment in §2.2 is more compressed than |
| ☐ | `sec-mod6-bridge-reading` | Bauldry | Sections 1.2 and 2.2. | Bauldry, Sections 1.2 and 2.2. Estimated time: 40 minutes. |
| ☐ | `sec-mod6-bridge-reading` | Bauldry | §1.2 | Bauldry's Introduction to Real Analysis. For Module 6 the reading covers two sections from different chapters: |
| ☐ | `sec-mod6-bridge-reading` | Bauldry | Chapter 1, §2.2, Chapter 2., §1.2 | Bauldry's informal Chapter 1, and §2.2 (Limits and Continuity) from his rigorous Chapter 2. The contrast betwe |
| ☐ | `sec-mod6-bridge-reading` | Bauldry | §2.2 | Bauldry's §2.2 assumes more background and moves faster than |
| ☐ | `sec-mod6-bridge-reading` | Zorn | §3.1–3.4. | Zorn §3.1–3.4. |
| ☐ | `par-mod6-br-12` | Bauldry | §1.2 | Bauldry §1.2: Continuous Functions (informal) |
| ☐ | `par-mod6-br-12` | Bauldry | Chapter 2. | Bauldry keeps the proofs at a sketch level here, reserving full rigor for Chapter 2. |
| ☐ | `ex-mod6-br-1` | Bauldry | §1.2. | Bauldry's definition of continuity in §1.2. Is it given in terms of \varepsilon-\delta, in terms of limits, or |
| ☐ | `ex-mod6-br-1` | Zorn | §3.2 | Zorn §3.2). Which is more formal? What does the less formal version omit? |
| ☐ | `ex-mod6-br-2` | Bauldry | §1.2 | Bauldry §1.2 |
| ☐ | `ex-mod6-br-2` | Bauldry | §1.2. | Bauldry states both the Intermediate Value Theorem and the Extreme Value Theorem in §1.2. For which of the two |
| ☐ | `ex-mod6-br-2` | Zorn | §3.3. | Zorn's version in §3.3. Do they have the same hypotheses and conclusion, or does one state a more general vers |
| ☐ | `ex-mod6-br-3` | Bauldry | §1.2 | Bauldry §1.2 |
| ☐ | `ex-mod6-br-3` | Bauldry | §1.2. | Bauldry's treatment of uniform continuity in §1.2. How does his presentation compare to |
| ☐ | `ex-mod6-br-3` | Zorn | §3.4 | Zorn's §3.4? Does |
| ☐ | `ex-mod6-br-3` | Bauldry | §1.2 | Bauldry give the formal quantifier-order definition of uniform continuity in §1.2, or does he present it more |
| ☐ | `ex-mod6-br-3` | Bauldry | §1.2 | Bauldry state the Heine–Cantor Theorem in §1.2? If so, what name does he use for it? |
| ☐ | `par-mod6-br-22` | Bauldry | §2.2 | Bauldry §2.2: Limits and Continuity (rigorous) |
| ☐ | `ex-mod6-br-4` | Bauldry | §2.2. | Bauldry gives at the opening of §2.2. Compare it to |
| ☐ | `ex-mod6-br-4` | Zorn | §3.1 | Zorn's definition in §3.1 and to the definition you used in the Module 6 study guide. Are they logically equiv |
| ☐ | `ex-mod6-br-5` | Bauldry | §2.2 | Bauldry §2.2 |
| ☐ | `ex-mod6-br-6` | Bauldry | §2.2 | Bauldry §2.2 |
| ☐ | `ex-mod6-br-7` | Bauldry | §2.2 | Bauldry §2.2 about uniform continuity that will be used in the treatment of the Riemann integral in |
| ☐ | `ex-mod6-br-7` | Bauldry | §2.4 | Bauldry §2.4 (and of this course). State the result and explain in one sentence how you expect it to enter the |
| ☐ | `ex-mod6-br-7` | Bauldry | §2.2 | Bauldry §2.2? (Scan the beginning of |
| ☐ | `ex-mod6-br-7` | Bauldry | §2.3, §2.4 | Bauldry §2.3 or §2.4 briefly if needed.) |
| ☐ | `ex-mod6-br-8` | Bauldry | §2.2 | Bauldry's rigorous treatment of continuity in §2.2 makes implicit or explicit use of topological notions: open |
| ☐ | `par-mod6-pacing` | Zorn | §3.1, §3.4 | Zorn §3.1 quickly (confirm the definition matches what you remember), and spend your time instead on the Heine |
| ☐ | `par-mod6-map` | Zorn | §3.1–3.4 | Zorn §3.1–3.4 with guided questions |
| ☐ | `par-mod6-map` | Bauldry | §1.2, §2.2 | Bauldry §1.2 and §2.2 with guided questions |
| ☐ | `sec-mod6-study-guide` | Zorn | Sections 3.1–3.4. | Zorn, Sections 3.1–3.4. Estimated time: 55 minutes. |
| ☐ | `sec-mod6-study-guide` | Zorn | Section 3.1 | Zorn's Understanding Real Analysis. Section 3.1 (Limits of Functions) introduces the \varepsilon-\delta defini |
| ☐ | `sec-mod6-study-guide` | Zorn | Theorem 3.3 | Zorn's Theorem 3.3 or its analogue) is the bridge that lets you use tools here. |
| ☐ | `par-mod6-sg-31-intro` | Zorn | pp. 151–164 | Zorn pp. 151–164) |
| ☐ | `par-mod6-sg-32-intro` | Zorn | pp. 164–198 | Zorn pp. 164–198) |

### Module 7

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod7-as-r2` | Bauldry | §2.3. | Bauldry's statement of the MVT in §2.3. Describe in 3–5 sentences how |
| ☐ | `ex-mod7-as-r2` | Bauldry | §2.3 | Bauldry uses the MVT in the subsequent results of §2.3 that go beyond what this module explicitly covered. Wha |
| ☐ | `sec-mod7-bridge-reading` | Bauldry | Sections 1.3 and 2.3. | Bauldry, Sections 1.3 and 2.3. Estimated time: 40 minutes. |
| ☐ | `sec-mod7-bridge-reading` | Bauldry | §1.3 | Bauldry's Introduction to Real Analysis. For this module the reading covers two sections: §1.3 (Differentiatio |
| ☐ | `sec-mod7-bridge-reading` | Bauldry | Chapter 1, §2.3, Chapter 2. | Bauldry's informal Chapter 1, and §2.3 (Differentiation) in his rigorous Chapter 2. The pair gives you the sam |
| ☐ | `sec-mod7-bridge-reading` | Bauldry | §2.3 | Bauldry lists the standard differentiation rules and applies them to examples, with only minimal proof. Treat |
| ☐ | `sec-mod7-bridge-reading` | Bauldry | §1.3, pp. 9–14, §2.3, pp. 59–75 | Bauldry §1.3 (informal differentiation review, approximately pp. 9–14) and §2.3 (rigorous differentiation, app |
| ☐ | `par-mod7-br-13` | Bauldry | §1.3 | Bauldry §1.3: Differentiation (informal) |
| ☐ | `ex-mod7-br-1` | Bauldry | §1.3 | Bauldry §1.3 lists the standard differentiation rules. Which rule does he treat as most fundamental, and how d |
| ☐ | `ex-mod7-br-2` | Bauldry | §1.3 | Bauldry prove that differentiability implies continuity in §1.3, or does he state it without proof? Compare th |
| ☐ | `ex-mod7-br-3` | Bauldry | §1.3 | Bauldry §1.3 mentions Taylor's Theorem. Quote his statement. How does it compare to (the Lagrange form of the |
| ☐ | `par-mod7-br-23` | Bauldry | §2.3 | Bauldry §2.3: Differentiation (rigorous) |
| ☐ | `ex-mod7-br-4` | Bauldry | §2.3 | Bauldry §2.3 opens with a theorem. What is it, and how does it compare to Rolle's Theorem as stated in this mo |
| ☐ | `ex-mod7-br-5` | Bauldry | §2.3. | Bauldry's statement of the Mean Value Theorem in §2.3. Write the theorem number and state it precisely. Does |
| ☐ | `ex-mod7-br-6` | Bauldry | §2.3 | Bauldry §2.3 contains several theorems beyond the MVT itself. Identify one such theorem that did not appear ex |
| ☐ | `ex-mod7-br-7` | Bauldry | §2.3 | Bauldry §2.3 contain any results that connect differentiation to integration (a preview of the Fundamental The |
| ☐ | `sec-mod7-orientation` | Bauldry | Chapter 2. | Bauldry Chapter 2. |
| ☐ | `par-mod7-pacing` | Zorn | §4.1–4.2, §4.3 | Zorn §4.1–4.2 quickly, focus your attention on §4.3 (the MVT and Taylor's Theorem), and work the Bridge Readin |
| ☐ | `par-mod7-pacing` | Bauldry | §2.3 | Bauldry §2.3 carefully. Pay particular attention to how |
| ☐ | `par-mod7-map` | Zorn | §4.1–4.3 | Zorn §4.1–4.3 with guided questions |
| ☐ | `par-mod7-map` | Bauldry | §1.3, §2.3 | Bauldry §1.3 and §2.3 with guided questions |
| ☐ | `sec-mod7-study-guide` | Zorn | Sections 4.1–4.3. | Zorn, Sections 4.1–4.3. Estimated time: 75 minutes. |
| ☐ | `sec-mod7-study-guide` | Zorn | Section 4.1 | Zorn's Understanding Real Analysis. Section 4.1 (Derivatives) introduces the formal limit definition and estab |
| ☐ | `par-mod7-sg-41-intro` | Zorn | pp. 163–172 | Zorn pp. 163–172) |
| ☐ | `par-mod7-sg-42-intro` | Zorn | pp. 172–182 | Zorn pp. 172–182) |
| ☐ | `par-mod7-sg-43-intro` | Zorn | pp. 182–196 | Zorn pp. 182–196) |

### Module 8

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod8-as-r2` | Bauldry | §2.4 | Bauldry §2.4: First Impressions |
| ☐ | `sec-mod8-bridge-reading` | Bauldry | Sections 1.4 and 2.4. | Bauldry, Sections 1.4 and 2.4. Estimated time: 40 minutes. |
| ☐ | `sec-mod8-bridge-reading` | Bauldry | §1.4 | Bauldry §1.4 (The Integral) and |
| ☐ | `sec-mod8-bridge-reading` | Bauldry | §2.4, Section 1.4 | Bauldry §2.4 (The Riemann–Stieltjes Integral). Section 1.4 is |
| ☐ | `sec-mod8-bridge-reading` | Bauldry | Section 2.4 | Bauldry's informal review of integration, parallel to what you have just built via Darboux sums. Section 2.4 i |
| ☐ | `sec-mod8-bridge-reading` | Bauldry | §2.4. | Bauldry §2.4. The module you have just completed gives you the Darboux framework; the graduate course adds the |
| ☐ | `sec-mod8-bridge-reading` | Bauldry | §1.4, pp. 18–24, §2.4, pp. 71–88 | Bauldry §1.4 (The Integral, approximately pp. 18–24) and §2.4 (The Riemann–Stieltjes Integral, approximately p |
| ☐ | `par-mod8-br-14` | Bauldry | §1.4 | Bauldry §1.4: The Riemann Integral (informal) |
| ☐ | `par-mod8-br-14` | Zorn | §5.1–5.2. | Zorn §5.1–5.2. |
| ☐ | `par-mod8-br-14` | Bauldry | §2.4. | Bauldry introduces the integral with an eye toward the rigorous Riemann–Stieltjes theory that follows in §2.4. |
| ☐ | `ex-mod8-br-1` | Bauldry | §1.4 | Bauldry use in §1.4: Riemann sums (with sample points), Darboux sums (with sup and inf), or something else? Qu |
| ☐ | `ex-mod8-br-2` | Bauldry | §1.4 | Bauldry §1.4 |
| ☐ | `ex-mod8-br-2` | Bauldry | §1.4 | Bauldry prove the FTC in §1.4, or does he merely state it? What level of rigor does he use? Compare the presen |
| ☐ | `ex-mod8-br-2` | Bauldry | §1.4 | Bauldry's §1.4? |
| ☐ | `ex-mod8-br-3` | Bauldry | §1.4 | Bauldry §1.4 mentions applications of the integral that go beyond area computation. Identify one such applicat |
| ☐ | `par-mod8-br-24` | Bauldry | §2.4 | Bauldry §2.4: The Riemann–Stieltjes Integral (rigorous) |
| ☐ | `par-mod8-br-24` | Apostol | Chapters 6 and 7, Chapter 6. | Apostol, Mathematical Analysis, 2nd edition, Chapters 6 and 7; the total-variation decomposition is in Chapter |
| ☐ | `ex-mod8-br-4` | Bauldry | §2.4 | Bauldry §2.4: The Riemann–Stieltjes Integral.) The Riemann integral arises as the special case \alpha(x) = x, |
| ☐ | `ex-mod8-br-5` | Bauldry | §2.4 | Bauldry §2.4: The Riemann–Stieltjes Integral). (b) A function \alpha is of bounded variation on [a,b] if the t |
| ☐ | `ex-mod8-br-6` | Bauldry | §2.4 | Bauldry §2.4 corresponding to the statement continuous functions are Riemann integrable (). What additional hy |
| ☐ | `ex-mod8-br-6` | Bauldry | §2.4 | Bauldry's version in §2.4 and compare. In the standard form, the additional hypothesis beyond the Riemann sett |
| ☐ | `ex-mod8-br-7` | Bauldry | §2.4 | Bauldry §2.4 contains a version of integration by parts for Stieltjes integrals. State it. How does it differ |
| ☐ | `ex-mod8-br-7` | Apostol | Chapter 7. | Apostol, Mathematical Analysis, 2nd edition, Chapter 7. How do its hypotheses compare with the version in |
| ☐ | `ex-mod8-br-7` | Apostol | Chapter 7 | Apostol, Chapter 7). Having no common discontinuities is not enough: \alpha(x) = x is continuous everywhere, s |
| ☐ | `par-mod8-br-closing` | Bauldry | §2.4. | Bauldry §2.4. The module you have just completed gives you the Darboux framework: partitions, upper and lower |
| ☐ | `sec-mod8-orientation` | Bartle | Section 7.4 | Bartle and Sherbert, Introduction to Real Analysis, 4th edition, Section 7.4), but it is technically cleaner, |
| ☐ | `par-mod8-pacing` | Zorn | §5.1–5.2 | Zorn §5.1–5.2 (you have likely seen Darboux sums before) and focus your attention on the proof of FTC Part 1 i |
| ☐ | `par-mod8-pacing` | Bauldry | §2.4 | Bauldry §2.4, which introduces the Riemann–Stieltjes integral, material that will be central in MAT 5610. If y |
| ☐ | `par-mod8-map` | Zorn | §5.1–5.4 | Zorn §5.1–5.4 with guided questions |
| ☐ | `par-mod8-map` | Bauldry | §1.4, §2.4 | Bauldry §1.4 and §2.4 with guided questions |
| ☐ | `sec-mod8-study-guide` | Zorn | Sections 5.1–5.4. | Zorn, Sections 5.1–5.4. Estimated time: 65 minutes. |
| ☐ | `sec-mod8-study-guide` | Zorn | Section 5.1, Section 5.2, Section 5.3 | Zorn's Understanding Real Analysis. Section 5.1 introduces partitions and Darboux sums. Section 5.2 develops t |
| ☐ | `par-mod8-sg-54-props` | Zorn | §5.1–5.4 | Zorn's statements and proofs of these properties (§5.1–5.4). A second source is |
| ☐ | `par-mod8-sg-54-props` | Rudin | Theorem 6.12. | Rudin, Principles of Mathematical Analysis, 3rd edition, Theorem 6.12. |
| ☐ | `ex-mod8-we-2` | Zorn | §3.4 | Zorn §3.4) gives that f is uniformly continuous on [a,b]. Let \varepsilon \gt 0 be given. By uniform continuit |

### Module 9

| ✓ | Where | Book | Items | Context |
|---|---|---|---|---|
| ☐ | `ex-mod9-as-r2` | Bauldry | §2.6 | Bauldry §2.6: First Impressions |
| ☐ | `ex-mod9-as-r2` | Bauldry | §2.6 | Bauldry §2.6, describe in 3–5 sentences what feels most different about the graduate presentation compared to |
| ☐ | `sec-mod9-bridge-reading` | Bauldry | Section 2.6. | Bauldry, Section 2.6. Estimated time: 40 minutes. |
| ☐ | `sec-mod9-bridge-reading` | Bauldry | §2.6, pp. 101–116 | Bauldry §2.6 (Sequences and Series of Functions, approximately pp. 101–116). This section is the graduate trea |
| ☐ | `sec-mod9-bridge-reading` | Zorn | §4.4 | Zorn §4.4 and the module exercises, should feel like recognition: you already know the ideas; |
| ☐ | `sec-mod9-bridge-reading` | Bauldry | §2.6, Theorem 1.40 | Bauldry derive term-by-term differentiation and integration from it in §2.6, or does he rely on the statement |
| ☐ | `sec-mod9-bridge-reading` | Bauldry | §2.6, pp. 101–116 | Bauldry §2.6 (Sequences and Series of Functions, approximately pp. 101–116). |
| ☐ | `par-mod9-br-defs` | Bauldry | §2.6 | Bauldry opens §2.6 by giving the definitions of pointwise and uniform convergence and the sup-norm criterion f |
| ☐ | `par-mod9-br-defs` | Zorn | §4.4 | Zorn §4.4 and the module orientation; then answer the exercises below. |
| ☐ | `ex-mod9-br-1` | Bauldry | §2.6 | Bauldry's definition of uniform convergence (§2.6). Compare it word-for-word with the definition in the module |
| ☐ | `par-mod9-br-mtest` | Bauldry | §2.6 | Bauldry §2.6 applies the M-Test to power series, showing that every power series converges uniformly on any cl |
| ☐ | `par-mod9-course-wrapup` | Bauldry | Chapter 2 | Bauldry Chapter 2: the logic and proof-writing infrastructure (), the completeness of \R (), sets, functions, |
| ☐ | `par-mod9-course-wrapup` | Bauldry | Chapter 2 | Bauldry Chapter 2 is the rigorous version of all of that, written at graduate speed, with proofs that assume y |
| ☐ | `par-mod9-map` | Zorn | §4.4 | Zorn §4.4 with guided questions |
| ☐ | `par-mod9-map` | Bauldry | §2.6 | Bauldry §2.6 with guided questions |
| ☐ | `sec-mod9-study-guide` | Zorn | Section 4.4. | Zorn, Section 4.4. Estimated time: 60 minutes. |
| ☐ | `sec-mod9-study-guide` | Zorn | §4.4, Section 4.4 | Zorn's §4.4 (Sequences and Series of Functions). Section 4.4 introduces pointwise and uniform convergence, pro |
| ☐ | `par-mod9-sg-ptwise` | Zorn | §4.4 | Zorn §4.4, opening definitions) |
| ☐ | `ex-mod9-we-4` | Rudin | Theorem 8.2 | Rudin, Principles of Mathematical Analysis, 3rd edition, Theorem 8.2). Here a direct estimate suffices, and it |
