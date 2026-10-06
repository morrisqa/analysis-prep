var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-mod3-orientation",
  "level": "1",
  "url": "ws-mod3-orientation.html",
  "type": "Section",
  "number": "1",
  "title": "Module 3: Sets, Functions, and Cardinality",
  "body": " Module 3: Sets, Functions, and Cardinality  Orientation     Read and write fluent set notation: membership, subsets, union, intersection, set difference, Cartesian product, and power set.    Prove set equalities by the element-chasing method, using the Axiom of Extensionality ( if and only if and ).    Distinguish domain, codomain, and range of a function, and explain why the codomain and range need not coincide.    Prove from the definition that a function is injective, surjective, or bijective.    Prove that a composition of two injections (respectively, surjections) is an injection (respectively, a surjection).    Determine when an inverse function exists and describe it explicitly.    Define cardinality via bijection and apply the definition to compare the sizes of infinite sets.    Prove that a set is countably infinite by constructing an explicit bijection with , or by using the countable union and product theorems.    Explain the logic of Cantor's diagonal argument and use it to conclude that is uncountable.       Modules 1 and 2 gave you the tools of mathematical logic and the structure of the real number system. This module supplies the remaining foundational vocabulary that real analysis depends on: sets , functions , and cardinality .  You have seen sets and functions in every mathematics course. What changes here is the level of rigor. A function is no longer just a formula or a graph; it is a precisely defined three-part package (domain, codomain, rule), and properties like injectivity and surjectivity are defined by quantified statements that admit formal proof. Similarly, sets are not just collections to be described informally; they are objects governed by axioms, and the central technique for proving set equalities—element-chasing—is a proof strategy you will use throughout the course.  The module ends with cardinality, which is one of the genuinely surprising results of nineteenth-century mathematics: not all infinite sets are the same size. The rationals and the integers are the same size (both countable), but the reals are strictly larger (uncountable). The proof of uncountability, Cantor's diagonal argument, is one of the most elegant proofs in mathematics and reappears in logic, computer science, and set theory. Understanding it now pays dividends throughout MAT 5610.  The self-assessment questions below are not graded . Use them to locate yourself within the module and flag areas that need extra attention.    Set Notation   Let and . Compute , , and . How many elements does have?     Functions: Domain, Codomain, Range   Consider the function defined by . What is the domain? What is the codomain? What is the range? Is the range equal to the codomain?     Injective and Surjective   For each function below, decide (without formal proof) whether it is injective, surjective, both, or neither. Explain briefly.  ,  ,  ,       Inverse Functions   Does (from the previous problem, with domain and codomain ) have an inverse function? What, if anything, must change about the domain or codomain to make an inverse possible?     Infinite Sets   In your own words: what does it mean for two infinite sets to have the same number of elements ? Do you believe and have the same cardinality? What about and ?      A Note from the Instructor  The material in this module is foundational in the most literal sense: every subsequent module rests on it. The - definitions in Module 4 are statements about functions from to . The continuity definitions in Module 6 require you to work fluently with function composition and preimages. Cardinality shows up implicitly any time a proof distinguishes between countably many and uncountably many objects.  Of all the ideas in this module, the one that pays off most immediately in MAT 5610 is the distinction between countable and uncountable sets. Bauldry Chapter 2 uses it constantly: countable unions of measure-zero sets have measure zero; the rationals are dense in but countable; the reals (being uncountable) cannot be exhausted by any list. If you arrive at MAT 5610 comfortable with Cantor's diagonal argument, you will find that the hardest ideas in Chapter 2 become significantly more accessible.  The element-chasing technique for set equality is worth mastering completely. The technique is always the same: to show , pick an arbitrary element of and show it belongs to (giving ), then reverse (giving ). The template never changes; what changes is the algebra needed to execute each direction. Every set equality proof in this module—and in MAT 5610—follows this template.    A Note on Pacing   A note on pacing. If you are coming in with prior real analysis experience, the set notation in Part A of the Study Guide and the function definitions in Part B will likely feel familiar. Skim those sections to confirm your notation is aligned with Zorn's, then invest your time in Part D (cardinality) and the Worked Examples for countability. The diagonal argument, even if you have seen it before, is worth re-reading slowly with attention to the logical structure of the contradiction. If analysis-style proofs are newer territory for you, work through all four parts of the Study Guide in order, doing the reading-check questions before moving on. Prioritize the element-chasing examples (Worked Example 1) and the bijectivity proof (Worked Example 2) before attempting the practice problems; those two techniques underlie everything else in the module.    Module Road Map (estimated time: 5 hours)       Component  Time  Purpose    Orientation (this document)  15 min  Goals, self-assessment, context    Video 1: Sets and Functions  9 min  Core instruction via lightboard    Video 2: Cardinality  9 min  Core instruction via lightboard    Companion Reading and Study Guide  55 min  Zorn §1.2–1.3, §1.6; Hirst Ch. 5 with guided questions    Worked Examples  40 min  Annotated proof walkthroughs    Practice Problem Set  90 min  Scaffolded practice by difficulty    Bridge Reading Guide  35 min  Connecting Module 3 to Bauldry §2.1    Module Assessment  40 min  Submitted proofs and reflection     "
},
{
  "id": "obj-mod3",
  "level": "2",
  "url": "ws-mod3-orientation.html#obj-mod3",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   Read and write fluent set notation: membership, subsets, union, intersection, set difference, Cartesian product, and power set.    Prove set equalities by the element-chasing method, using the Axiom of Extensionality ( if and only if and ).    Distinguish domain, codomain, and range of a function, and explain why the codomain and range need not coincide.    Prove from the definition that a function is injective, surjective, or bijective.    Prove that a composition of two injections (respectively, surjections) is an injection (respectively, a surjection).    Determine when an inverse function exists and describe it explicitly.    Define cardinality via bijection and apply the definition to compare the sizes of infinite sets.    Prove that a set is countably infinite by constructing an explicit bijection with , or by using the countable union and product theorems.    Explain the logic of Cantor's diagonal argument and use it to conclude that is uncountable.    "
},
{
  "id": "ex-mod3-sa-1",
  "level": "2",
  "url": "ws-mod3-orientation.html#ex-mod3-sa-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "Set Notation.",
  "body": " Set Notation   Let and . Compute , , and . How many elements does have?   "
},
{
  "id": "ex-mod3-sa-2",
  "level": "2",
  "url": "ws-mod3-orientation.html#ex-mod3-sa-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "Functions: Domain, Codomain, Range.",
  "body": " Functions: Domain, Codomain, Range   Consider the function defined by . What is the domain? What is the codomain? What is the range? Is the range equal to the codomain?   "
},
{
  "id": "ex-mod3-sa-3",
  "level": "2",
  "url": "ws-mod3-orientation.html#ex-mod3-sa-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "Injective and Surjective.",
  "body": " Injective and Surjective   For each function below, decide (without formal proof) whether it is injective, surjective, both, or neither. Explain briefly.  ,  ,  ,     "
},
{
  "id": "ex-mod3-sa-4",
  "level": "2",
  "url": "ws-mod3-orientation.html#ex-mod3-sa-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "Inverse Functions.",
  "body": " Inverse Functions   Does (from the previous problem, with domain and codomain ) have an inverse function? What, if anything, must change about the domain or codomain to make an inverse possible?   "
},
{
  "id": "ex-mod3-sa-5",
  "level": "2",
  "url": "ws-mod3-orientation.html#ex-mod3-sa-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Infinite Sets.",
  "body": " Infinite Sets   In your own words: what does it mean for two infinite sets to have the same number of elements ? Do you believe and have the same cardinality? What about and ?   "
},
{
  "id": "ws-mod3-study-guide",
  "level": "1",
  "url": "ws-mod3-study-guide.html",
  "type": "Section",
  "number": "2",
  "title": "Module 3: Companion Reading and Study Guide",
  "body": " Module 3: Companion Reading and Study Guide  Zorn §1.2–1.3, §1.6 — Estimated time: 55 minutes   This study guide is organized into four reading blocks. For each block, read the assigned pages in Zorn and\/or Hirst before answering the reading-check questions. The questions are designed to confirm comprehension and surface any notation differences between sources. Write your answers in your notebook; these are not submitted.   Reading-check questions are not graded. They are checkpoints: if you cannot answer a question after reading the section, re-read with that question in mind before moving on.     Part A: Sets   Read: Zorn §1.2 (pp. 10–18); Hirst §5.1–5.2.  Zorn §1.2 develops set notation and operations informally but rigorously, with examples drawn from analysis (intervals, number systems). Hirst §5.1–5.2 covers the same ground using the Axiom of Extensionality and the formal set-builder notation from predicate logic. After reading both, you should be able to move fluently between the two presentations.   Key definitions to identify as you read: membership ( ), subset ( ), proper subset ( ), the empty set ( ), union ( ), intersection ( ), set difference ( ), Cartesian product ( ), power set ( ), and De Morgan's laws.    Axiom of Extensionality   State the Axiom of Extensionality (Hirst Theorem 47) in your own words. Then explain why it implies the standard proof strategy for set equality: to show , prove and separately.    The Axiom says two sets are equal if and only if they have exactly the same elements. What does and together guarantee about membership?     De Morgan's Laws   State both of De Morgan's laws for sets (Zorn p. 12 or Hirst §5.2). Then, for the law (where denotes the complement of in some universal set), write out the first direction of the element-chasing proof: assume and show . What logical connective converts into two separate statements?     Cartesian Product Size   If and (where denotes the number of elements of a finite set ), how many elements does have? How many elements does have? Verify your formulas with and .     and . For the given sets: and .      Part B: Functions   Read: Zorn §1.3 (pp. 19–31); Hirst §5.3–5.4.  Zorn §1.3 defines functions as three-part packages (domain, codomain, rule) and develops injectivity, surjectivity, bijectivity, composition, and inverse functions. Hirst §5.3–5.4 provides the set-theoretic foundation: functions as sets of ordered pairs, and images and preimages as derived sets. Both presentations are important; Zorn gives you the working definitions and Hirst makes the underlying structure explicit.   Key definitions to identify: function as a three-part package, range vs. codomain, injective (one-to-one), surjective (onto), bijective, composition , inverse function , image , preimage .    Range versus Codomain   Let be defined by .  What is the range of ?  Is surjective? Explain using the definition.  How would you change the codomain to make surjective (without changing the domain or the rule)?      (a) The range is the set of even integers, . (b) Not surjective: is not in the range (there is no integer with ). (c) Change the codomain to the even integers.     Reading the Injectivity Definition   Zorn defines injectivity by the implication: .  Write the contrapositive of this implication and explain why it gives an equivalent condition for injectivity.  Use the original implication to prove that , , is injective. Write every step as a complete sentence.       Inverse Functions and Bijectivity   State the relationship between bijectivity and the existence of an inverse function (Zorn Definition 1.11 or Hirst §5.4). Then: for , , find explicitly and verify that for all and for all .    To find , set and solve for in terms of .     Preimage   Let , . Compute the following preimages:     Notice that here denotes the preimage operator (a set-valued function), not an inverse function (which does not exist for this ). Why does the preimage of any set always exist, even when the inverse function does not?    (a) . (b) . (c) (since for all ). The preimage is defined purely in terms of which elements of the domain map into the target set; it does not require the function to be injective or surjective.      Part C: Equivalence Relations   Read: Zorn §1.3, the final two pages on relations (following the discussion of inverse functions).  A relation on a set is a subset . We write (or ) when . An equivalence relation is a relation that is reflexive, symmetric, and transitive. Equivalence relations partition a set into disjoint equivalence classes; this structure reappears in abstract algebra and topology. For our purposes in real analysis, the most important equivalence relation is the one defining cardinality in Part D: iff there exists a bijection .    Checking Equivalence Relation Axioms   Define a relation on by: if is even (i.e., divisible by 2).  Is reflexive? (Is for all ?)  Is symmetric? (If , does it follow that ?)  Is transitive? (If and , does it follow that ?)  Describe the equivalence classes of .      (a) Yes: is even. (b) Yes: if is even, then is also even. (c) Yes: if and , then is even. (d) There are two equivalence classes: the even integers and the odd integers.      Part D: Cardinality   Read: Zorn §1.6 (pp. 52–61); Hirst §5.5.  Zorn §1.6 defines cardinality via bijection and develops the main countability results: Propositions 1.17–1.19 (subsets of countable sets; countable products; countable unions), Corollary 1.20 ( is countable), and Theorem 1.21 ( is uncountable). Read each proof carefully; the proofs of the propositions use bijection constructions that are themselves important techniques.  Hirst §5.5 covers related material including the Cantor–Bernstein theorem ( and imply ). You are not required to prove Cantor–Bernstein, but reading its statement gives you important context for how cardinality comparisons work in MAT 5610.    Same Cardinality via Bijection   State Definition 1.13 (Zorn) for two sets having the same cardinality. Then verify: does (the set of positive even integers)? Exhibit an explicit bijection and verify it is both injective and surjective.    Consider .     Countable Union   State Proposition 1.19 (Zorn): a countable union of countable sets is countable. The proof uses the diagonal enumeration argument. In one or two sentences, describe the idea of the proof. You do not need to write the full proof; describe the geometric picture (the grid and the diagonal path).     The Diagonal Argument   In Cantor's proof (Zorn Theorem 1.21) that is uncountable, identify the following components:  What is assumed for contradiction?  How is the diagonal number constructed?  Why does differ from every element in the supposed list? Which property of (at which decimal place) guarantees ?  What is the contradiction?       Cantor–Bernstein (Statement Only)   State the Cantor–Bernstein theorem (Hirst Theorem 55). In one sentence, explain why this theorem is useful: what does it allow you to conclude about the cardinality of two sets if you can find injections in both directions?    "
},
{
  "id": "ex-mod3-sg-A1",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-A1",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "Axiom of Extensionality.",
  "body": " Axiom of Extensionality   State the Axiom of Extensionality (Hirst Theorem 47) in your own words. Then explain why it implies the standard proof strategy for set equality: to show , prove and separately.    The Axiom says two sets are equal if and only if they have exactly the same elements. What does and together guarantee about membership?   "
},
{
  "id": "ex-mod3-sg-A2",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-A2",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "De Morgan’s Laws.",
  "body": " De Morgan's Laws   State both of De Morgan's laws for sets (Zorn p. 12 or Hirst §5.2). Then, for the law (where denotes the complement of in some universal set), write out the first direction of the element-chasing proof: assume and show . What logical connective converts into two separate statements?   "
},
{
  "id": "ex-mod3-sg-A3",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-A3",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "Cartesian Product Size.",
  "body": " Cartesian Product Size   If and (where denotes the number of elements of a finite set ), how many elements does have? How many elements does have? Verify your formulas with and .     and . For the given sets: and .   "
},
{
  "id": "ex-mod3-sg-B1",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-B1",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "Range versus Codomain.",
  "body": " Range versus Codomain   Let be defined by .  What is the range of ?  Is surjective? Explain using the definition.  How would you change the codomain to make surjective (without changing the domain or the rule)?      (a) The range is the set of even integers, . (b) Not surjective: is not in the range (there is no integer with ). (c) Change the codomain to the even integers.   "
},
{
  "id": "ex-mod3-sg-B2",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-B2",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "Reading the Injectivity Definition.",
  "body": " Reading the Injectivity Definition   Zorn defines injectivity by the implication: .  Write the contrapositive of this implication and explain why it gives an equivalent condition for injectivity.  Use the original implication to prove that , , is injective. Write every step as a complete sentence.     "
},
{
  "id": "ex-mod3-sg-B3",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-B3",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "Inverse Functions and Bijectivity.",
  "body": " Inverse Functions and Bijectivity   State the relationship between bijectivity and the existence of an inverse function (Zorn Definition 1.11 or Hirst §5.4). Then: for , , find explicitly and verify that for all and for all .    To find , set and solve for in terms of .   "
},
{
  "id": "ex-mod3-sg-B4",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-B4",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "Preimage.",
  "body": " Preimage   Let , . Compute the following preimages:     Notice that here denotes the preimage operator (a set-valued function), not an inverse function (which does not exist for this ). Why does the preimage of any set always exist, even when the inverse function does not?    (a) . (b) . (c) (since for all ). The preimage is defined purely in terms of which elements of the domain map into the target set; it does not require the function to be injective or surjective.   "
},
{
  "id": "ex-mod3-sg-C1",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-C1",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "Checking Equivalence Relation Axioms.",
  "body": " Checking Equivalence Relation Axioms   Define a relation on by: if is even (i.e., divisible by 2).  Is reflexive? (Is for all ?)  Is symmetric? (If , does it follow that ?)  Is transitive? (If and , does it follow that ?)  Describe the equivalence classes of .      (a) Yes: is even. (b) Yes: if is even, then is also even. (c) Yes: if and , then is even. (d) There are two equivalence classes: the even integers and the odd integers.   "
},
{
  "id": "ex-mod3-sg-D1",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-D1",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "Same Cardinality via Bijection.",
  "body": " Same Cardinality via Bijection   State Definition 1.13 (Zorn) for two sets having the same cardinality. Then verify: does (the set of positive even integers)? Exhibit an explicit bijection and verify it is both injective and surjective.    Consider .   "
},
{
  "id": "ex-mod3-sg-D2",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-D2",
  "type": "Checkpoint",
  "number": "2.10",
  "title": "Countable Union.",
  "body": " Countable Union   State Proposition 1.19 (Zorn): a countable union of countable sets is countable. The proof uses the diagonal enumeration argument. In one or two sentences, describe the idea of the proof. You do not need to write the full proof; describe the geometric picture (the grid and the diagonal path).   "
},
{
  "id": "ex-mod3-sg-D3",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-D3",
  "type": "Checkpoint",
  "number": "2.11",
  "title": "The Diagonal Argument.",
  "body": " The Diagonal Argument   In Cantor's proof (Zorn Theorem 1.21) that is uncountable, identify the following components:  What is assumed for contradiction?  How is the diagonal number constructed?  Why does differ from every element in the supposed list? Which property of (at which decimal place) guarantees ?  What is the contradiction?     "
},
{
  "id": "ex-mod3-sg-D4",
  "level": "2",
  "url": "ws-mod3-study-guide.html#ex-mod3-sg-D4",
  "type": "Checkpoint",
  "number": "2.12",
  "title": "Cantor–Bernstein (Statement Only).",
  "body": " Cantor–Bernstein (Statement Only)   State the Cantor–Bernstein theorem (Hirst Theorem 55). In one sentence, explain why this theorem is useful: what does it allow you to conclude about the cardinality of two sets if you can find injections in both directions?   "
},
{
  "id": "ws-mod3-worked-examples",
  "level": "1",
  "url": "ws-mod3-worked-examples.html",
  "type": "Section",
  "number": "3",
  "title": "Module 3: Worked Examples",
  "body": " Module 3: Worked Examples  Annotated Proof Walkthroughs — Estimated time: 40 minutes   Read each example slowly, attending to the proof strategy and the annotations as much as to the algebra. The goal is to internalize templates that you will reproduce in varied form on the practice set and the assessment.  The five examples cover the two main proof techniques of this module: element-chasing (for set equalities) and definition-unpacking (for injectivity, surjectivity, and countability). Examples 4 and 5 show that the same definition-unpacking approach applies to infinite sets, where the conclusion is far less obvious.     Example 1: Element-Chasing a Set Equality   Prove: for all sets , , ,      Strategy. To prove two sets are equal, we use the Axiom of Extensionality: show each set is a subset of the other. We argue in both directions by picking an arbitrary element of each side and chasing it through the definitions.   Direction 1: .   Let . By definition of intersection: and .  By definition of union, means or . We consider the two cases separately.   Case 1:  . Then (from above) and , so . Therefore .   Case 2:  . Then and , so . Therefore .  In both cases, . Since was arbitrary, .   Direction 2: .   Let . By definition of union, either or .   Case 1:  . Then and . Since , we have . So and , giving .   Case 2:  . Then and . Since , we have . So .  In both cases, . Since was arbitrary, .  By both directions, .    What to notice. Every set equality proof follows this template: two subset arguments, each starting with let and ending with therefore . The only thing that changes from problem to problem is which definitions you unpack and which cases you consider. When the union or intersection of three or more sets appears, a case split on the or in the union definition is almost always the right move.      Example 2: Proving Bijectivity and Finding the Inverse   Let be defined by . Prove that is bijective. Then find explicitly.     Step 1: Prove injectivity.   Suppose . We must show .   means . Adding 5 to both sides gives , and dividing by 3 gives . So is injective.    Step 2: Prove surjectivity.   We must show that for every , there exists such that .   Scratch work: Setting and solving for gives . This is a real number for any , so it is a valid preimage.   Formal proof: Let . Define . Then (since is closed under addition and division by nonzero reals), and So as required. Since was arbitrary, is surjective.    Step 3: Bijectivity and the inverse.   Since is both injective and surjective, it is bijective. By Definition 1.11 (Zorn), an inverse function exists. The scratch work in Step 2 gives us its formula:    Verification:      What to notice. The proof of surjectivity always has two parts: scratch work to find the preimage, and a formal verification that the preimage actually works. Do not skip the formal verification; in more complex examples the scratch work may suggest a candidate that fails a domain check. Also note that solving for is exactly how you find —this is not a coincidence.      Example 3: Composition Preserves Injectivity   Let and . Prove: if and are both injective, then is injective.     Strategy. To prove is injective, we must show: if , then . We will use the injectivity of first, then the injectivity of .   Proof.   Suppose . By definition of composition, this means .  Since is injective, implies .  Since is injective, implies .  Therefore is injective.    What to notice. The proof has a clean three-step structure: unpack composition, apply injectivity of , apply injectivity of . The order matters: acts on the outputs of , so we peel back the outer function first. This outside-in order is the right reflex for any composition proof.  An important partial converse is also true: if is injective, then must be injective (try proving this on the practice set). However, need not be injective; the practice set asks you to find a counterexample.      Example 4: The Integers Are Countably Infinite   Prove that is countably infinite by constructing an explicit bijection , where .     Idea. We need a bijection that visits every integer exactly once. The natural approach is to alternate between nonnegative and negative integers: This is the sequence indexed by    Construction. Define by: Checking the first several values: , , , , , , . The pattern alternates: even inputs map to nonnegative integers, odd inputs map to negative integers.   Proof of injectivity. Suppose . If both are even, then , so . If both are odd, then , so . If one is even and the other odd, then and (or vice versa), contradicting . In all cases, , so is injective.   Proof of surjectivity. Let . We exhibit an with :  If : set . Then is even, , and .  If : set . Since , we have , so . Also is odd (since is even). Then .  In both cases, , so is surjective. Therefore is a bijection and , so is countably infinite.    What to notice. The hardest part of a countability proof is constructing the bijection. Once you have a candidate, proving injectivity and surjectivity follows by applying the definitions. The construction here uses even\/odd parity to separate two halves of and map each half to a separate piece of . A similar strategy (interleaving two countable sets) appears in the proof that is countable.      Example 5: Is Countably Infinite   Prove that is countably infinite.     Idea: the diagonal enumeration. Arrange the elements of in a two-dimensional grid, with rows indexed by the first coordinate and columns by the second:  Row 1:   Row 2:   Row 3:   ⋮  We traverse the grid along diagonals where the sum is constant. Along the diagonal with : . Along : . Along : . And so on. Traversing each finite diagonal in order gives a sequence that visits every pair exactly once.   Formal argument. The number of pairs with (for ) is . The total number of pairs with is .  Define by: This formula assigns to its position in the diagonal enumeration: the first term counts how many pairs appear on earlier diagonals (diagonals with sum ), and the second term gives the position of within its diagonal (where pairs are ordered by increasing first coordinate).  It can be verified that is a bijection . We verify the first few values: , , , , , . This matches the diagonal order. Since is a bijection, , so is countably infinite.    What to notice. The bijection formula is worth remembering as a technique, but the key insight is the geometric picture : every infinite grid can be enumerated by walking along its diagonals. This picture underlies the proof of Proposition 1.18 (Zorn) and Corollary 1.20 ( countable). When you need to show that a product or union of countable sets is countable, the diagonal picture is the right mental model, even if the formal proof uses the abstract propositions rather than re-deriving the bijection formula.    "
},
{
  "id": "ex-mod3-we-1",
  "level": "2",
  "url": "ws-mod3-worked-examples.html#ex-mod3-we-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "Example 1: Element-Chasing a Set Equality.",
  "body": " Example 1: Element-Chasing a Set Equality   Prove: for all sets , , ,      Strategy. To prove two sets are equal, we use the Axiom of Extensionality: show each set is a subset of the other. We argue in both directions by picking an arbitrary element of each side and chasing it through the definitions.   Direction 1: .   Let . By definition of intersection: and .  By definition of union, means or . We consider the two cases separately.   Case 1:  . Then (from above) and , so . Therefore .   Case 2:  . Then and , so . Therefore .  In both cases, . Since was arbitrary, .   Direction 2: .   Let . By definition of union, either or .   Case 1:  . Then and . Since , we have . So and , giving .   Case 2:  . Then and . Since , we have . So .  In both cases, . Since was arbitrary, .  By both directions, .    What to notice. Every set equality proof follows this template: two subset arguments, each starting with let and ending with therefore . The only thing that changes from problem to problem is which definitions you unpack and which cases you consider. When the union or intersection of three or more sets appears, a case split on the or in the union definition is almost always the right move.   "
},
{
  "id": "ex-mod3-we-2",
  "level": "2",
  "url": "ws-mod3-worked-examples.html#ex-mod3-we-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "Example 2: Proving Bijectivity and Finding the Inverse.",
  "body": " Example 2: Proving Bijectivity and Finding the Inverse   Let be defined by . Prove that is bijective. Then find explicitly.     Step 1: Prove injectivity.   Suppose . We must show .   means . Adding 5 to both sides gives , and dividing by 3 gives . So is injective.    Step 2: Prove surjectivity.   We must show that for every , there exists such that .   Scratch work: Setting and solving for gives . This is a real number for any , so it is a valid preimage.   Formal proof: Let . Define . Then (since is closed under addition and division by nonzero reals), and So as required. Since was arbitrary, is surjective.    Step 3: Bijectivity and the inverse.   Since is both injective and surjective, it is bijective. By Definition 1.11 (Zorn), an inverse function exists. The scratch work in Step 2 gives us its formula:    Verification:      What to notice. The proof of surjectivity always has two parts: scratch work to find the preimage, and a formal verification that the preimage actually works. Do not skip the formal verification; in more complex examples the scratch work may suggest a candidate that fails a domain check. Also note that solving for is exactly how you find —this is not a coincidence.   "
},
{
  "id": "ex-mod3-we-3",
  "level": "2",
  "url": "ws-mod3-worked-examples.html#ex-mod3-we-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "Example 3: Composition Preserves Injectivity.",
  "body": " Example 3: Composition Preserves Injectivity   Let and . Prove: if and are both injective, then is injective.     Strategy. To prove is injective, we must show: if , then . We will use the injectivity of first, then the injectivity of .   Proof.   Suppose . By definition of composition, this means .  Since is injective, implies .  Since is injective, implies .  Therefore is injective.    What to notice. The proof has a clean three-step structure: unpack composition, apply injectivity of , apply injectivity of . The order matters: acts on the outputs of , so we peel back the outer function first. This outside-in order is the right reflex for any composition proof.  An important partial converse is also true: if is injective, then must be injective (try proving this on the practice set). However, need not be injective; the practice set asks you to find a counterexample.   "
},
{
  "id": "ex-mod3-we-4",
  "level": "2",
  "url": "ws-mod3-worked-examples.html#ex-mod3-we-4",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "Example 4: The Integers Are Countably Infinite.",
  "body": " Example 4: The Integers Are Countably Infinite   Prove that is countably infinite by constructing an explicit bijection , where .     Idea. We need a bijection that visits every integer exactly once. The natural approach is to alternate between nonnegative and negative integers: This is the sequence indexed by    Construction. Define by: Checking the first several values: , , , , , , . The pattern alternates: even inputs map to nonnegative integers, odd inputs map to negative integers.   Proof of injectivity. Suppose . If both are even, then , so . If both are odd, then , so . If one is even and the other odd, then and (or vice versa), contradicting . In all cases, , so is injective.   Proof of surjectivity. Let . We exhibit an with :  If : set . Then is even, , and .  If : set . Since , we have , so . Also is odd (since is even). Then .  In both cases, , so is surjective. Therefore is a bijection and , so is countably infinite.    What to notice. The hardest part of a countability proof is constructing the bijection. Once you have a candidate, proving injectivity and surjectivity follows by applying the definitions. The construction here uses even\/odd parity to separate two halves of and map each half to a separate piece of . A similar strategy (interleaving two countable sets) appears in the proof that is countable.   "
},
{
  "id": "ex-mod3-we-5",
  "level": "2",
  "url": "ws-mod3-worked-examples.html#ex-mod3-we-5",
  "type": "Checkpoint",
  "number": "3.5",
  "title": "Example 5: <span class=\"process-math\">\\(\\N \\times \\N\\)<\/span> Is Countably Infinite.",
  "body": " Example 5: Is Countably Infinite   Prove that is countably infinite.     Idea: the diagonal enumeration. Arrange the elements of in a two-dimensional grid, with rows indexed by the first coordinate and columns by the second:  Row 1:   Row 2:   Row 3:   ⋮  We traverse the grid along diagonals where the sum is constant. Along the diagonal with : . Along : . Along : . And so on. Traversing each finite diagonal in order gives a sequence that visits every pair exactly once.   Formal argument. The number of pairs with (for ) is . The total number of pairs with is .  Define by: This formula assigns to its position in the diagonal enumeration: the first term counts how many pairs appear on earlier diagonals (diagonals with sum ), and the second term gives the position of within its diagonal (where pairs are ordered by increasing first coordinate).  It can be verified that is a bijection . We verify the first few values: , , , , , . This matches the diagonal order. Since is a bijection, , so is countably infinite.    What to notice. The bijection formula is worth remembering as a technique, but the key insight is the geometric picture : every infinite grid can be enumerated by walking along its diagonals. This picture underlies the proof of Proposition 1.18 (Zorn) and Corollary 1.20 ( countable). When you need to show that a product or union of countable sets is countable, the diagonal picture is the right mental model, even if the formal proof uses the abstract propositions rather than re-deriving the bijection formula.   "
},
{
  "id": "ws-mod3-practice-set",
  "level": "1",
  "url": "ws-mod3-practice-set.html",
  "type": "Section",
  "number": "4",
  "title": "Module 3: Practice Problem Set",
  "body": " Module 3: Practice Problem Set  Estimated time: 90 minutes   Problems are labeled (Foundational), (Standard), and (Challenge). Work in order within each level; later problems in a level often build on earlier ones.  These problems are not submitted, but you should write out complete solutions. For any problem that asks you to prove something, apply the standards from the Worked Examples: complete sentences, quantifiers stated explicitly, every step justified.     Foundational Problems    Set Operations   Let , , and .  Is ? Is ? Justify each answer.  Describe in words. (Hint: what integers are both even and divisible by 3?)  Describe in words.  Give an element of . Give an element of .      (a) (since 6 is even and divisible by 3); (since 9 is not even). (b) is the set of multiples of 6. (c) is the set of positive multiples of 6: . (d) ; .     Membership and Subsets   For each of the following, decide whether the statement is true or false. If true, give a brief justification; if false, give a counterexample.     If and , then .         (a) True: the empty set is a subset of every set. (b) True: is one of the three elements of this set. (c) False: the elements of are sets, not numbers; is not one of them. (d) True: this is the Axiom of Extensionality. (e) True: , , , , so the set is exactly .     Identifying Function Properties   For each function, determine (with a brief justification but without a formal proof) whether it is injective, surjective, bijective, or none of these. If it is bijective, describe the inverse function.   ,    ,    ,    ,       (a) Bijective. Every real number has a unique real cube root; . (b) Not injective (since ), but surjective (every nonneg. real is the square of its square root). (c) Injective but not surjective: has no preimage (there is no with , since by the convention ). (d) Bijective; .     Countable or Uncountable?   For each set below, state (without proof) whether it is finite, countably infinite, or uncountable. Briefly explain your reasoning.  The set of prime numbers.  The set of irrational numbers.  The set .  The interval .  The set .      (a) Countably infinite (a subset of ; infinite by Euclid's theorem). (b) Uncountable (if it were countable, then would be a countable union of countable sets, contradicting Theorem 1.21). (c) Countably infinite (in bijection with via ). (d) Uncountable (bijection with via, e.g., ; or directly from Theorem 1.21). (e) Countably infinite (product of two countable sets by Prop. 1.18).      Standard Problems    Element-Chasing: De Morgan's Law   Let , , and be subsets of a universal set , with complements taken relative to . Prove: Your proof must use the element-chasing method: show each set is a subset of the other.    Recall that means and . Use the fact that is equivalent to and .     Proving Injectivity and Non-surjectivity   Let be defined by .  Prove that is injective.  Prove that is not surjective.  Identify the range of and describe it as a familiar subset of .       Proving Bijectivity and Finding the Inverse   Define by   Verify on the first six values: .  Prove that is injective.  Prove that is surjective.  Find . (You may be surprised by the answer.)      For part (b): if , consider the cases where and are both odd, both even, or have different parity.     Even Integers Are Countably Infinite   Let be the set of all even integers. Prove that is countably infinite by constructing an explicit bijection . Verify that your function is both injective and surjective.    Use the bijection from Worked Example 4, then compose with . Alternatively, define a direct bijection by interleaving positive and negative even integers.      Challenge Problems    A Partial Converse for Composition   Let and .  Prove: if is injective, then is injective.  Give a specific example showing that need not be injective: find sets , , and functions , such that is injective but is not.  State and prove the analogous partial converse for surjectivity: if is surjective, which of or must be surjective?      For (a): suppose and apply to both sides; use injectivity of . For (c): the answer is ; to prove it, let and use surjectivity of to find with , then conclude about .     Cantor's Diagonal Argument — Guided Proof   In this problem you will write a complete proof that the interval is uncountable, following Cantor's diagonal argument. Fill in each step with a complete mathematical justification.    State the assumption for contradiction: what are you assuming about ?    Under this assumption, how can you represent the elements of ? (Describe the list and the grid of decimal digits.)    Describe the construction of the diagonal number . Be specific: for each position , how do you choose the th digit of ? Why do you avoid using 0 or 9? (Hint: think about .)    Prove that .    Prove that is not equal to any element in the list. For a specific , at which decimal digit does differ from ? Why does this guarantee ?    State the contradiction and conclude.      "
},
{
  "id": "ex-mod3-ps-F1",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-F1",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Set Operations.",
  "body": " Set Operations   Let , , and .  Is ? Is ? Justify each answer.  Describe in words. (Hint: what integers are both even and divisible by 3?)  Describe in words.  Give an element of . Give an element of .      (a) (since 6 is even and divisible by 3); (since 9 is not even). (b) is the set of multiples of 6. (c) is the set of positive multiples of 6: . (d) ; .   "
},
{
  "id": "ex-mod3-ps-F2",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-F2",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Membership and Subsets.",
  "body": " Membership and Subsets   For each of the following, decide whether the statement is true or false. If true, give a brief justification; if false, give a counterexample.     If and , then .         (a) True: the empty set is a subset of every set. (b) True: is one of the three elements of this set. (c) False: the elements of are sets, not numbers; is not one of them. (d) True: this is the Axiom of Extensionality. (e) True: , , , , so the set is exactly .   "
},
{
  "id": "ex-mod3-ps-F3",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-F3",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Identifying Function Properties.",
  "body": " Identifying Function Properties   For each function, determine (with a brief justification but without a formal proof) whether it is injective, surjective, bijective, or none of these. If it is bijective, describe the inverse function.   ,    ,    ,    ,       (a) Bijective. Every real number has a unique real cube root; . (b) Not injective (since ), but surjective (every nonneg. real is the square of its square root). (c) Injective but not surjective: has no preimage (there is no with , since by the convention ). (d) Bijective; .   "
},
{
  "id": "ex-mod3-ps-F4",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-F4",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Countable or Uncountable?",
  "body": " Countable or Uncountable?   For each set below, state (without proof) whether it is finite, countably infinite, or uncountable. Briefly explain your reasoning.  The set of prime numbers.  The set of irrational numbers.  The set .  The interval .  The set .      (a) Countably infinite (a subset of ; infinite by Euclid's theorem). (b) Uncountable (if it were countable, then would be a countable union of countable sets, contradicting Theorem 1.21). (c) Countably infinite (in bijection with via ). (d) Uncountable (bijection with via, e.g., ; or directly from Theorem 1.21). (e) Countably infinite (product of two countable sets by Prop. 1.18).   "
},
{
  "id": "ex-mod3-ps-S1",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-S1",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Element-Chasing: De Morgan’s Law.",
  "body": " Element-Chasing: De Morgan's Law   Let , , and be subsets of a universal set , with complements taken relative to . Prove: Your proof must use the element-chasing method: show each set is a subset of the other.    Recall that means and . Use the fact that is equivalent to and .   "
},
{
  "id": "ex-mod3-ps-S2",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-S2",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Proving Injectivity and Non-surjectivity.",
  "body": " Proving Injectivity and Non-surjectivity   Let be defined by .  Prove that is injective.  Prove that is not surjective.  Identify the range of and describe it as a familiar subset of .     "
},
{
  "id": "ex-mod3-ps-S3",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-S3",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Proving Bijectivity and Finding the Inverse.",
  "body": " Proving Bijectivity and Finding the Inverse   Define by   Verify on the first six values: .  Prove that is injective.  Prove that is surjective.  Find . (You may be surprised by the answer.)      For part (b): if , consider the cases where and are both odd, both even, or have different parity.   "
},
{
  "id": "ex-mod3-ps-S4",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-S4",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Even Integers Are Countably Infinite.",
  "body": " Even Integers Are Countably Infinite   Let be the set of all even integers. Prove that is countably infinite by constructing an explicit bijection . Verify that your function is both injective and surjective.    Use the bijection from Worked Example 4, then compose with . Alternatively, define a direct bijection by interleaving positive and negative even integers.   "
},
{
  "id": "ex-mod3-ps-C1",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-C1",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> A Partial Converse for Composition.",
  "body": " A Partial Converse for Composition   Let and .  Prove: if is injective, then is injective.  Give a specific example showing that need not be injective: find sets , , and functions , such that is injective but is not.  State and prove the analogous partial converse for surjectivity: if is surjective, which of or must be surjective?      For (a): suppose and apply to both sides; use injectivity of . For (c): the answer is ; to prove it, let and use surjectivity of to find with , then conclude about .   "
},
{
  "id": "ex-mod3-ps-C2",
  "level": "2",
  "url": "ws-mod3-practice-set.html#ex-mod3-ps-C2",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> Cantor’s Diagonal Argument — Guided Proof.",
  "body": " Cantor's Diagonal Argument — Guided Proof   In this problem you will write a complete proof that the interval is uncountable, following Cantor's diagonal argument. Fill in each step with a complete mathematical justification.    State the assumption for contradiction: what are you assuming about ?    Under this assumption, how can you represent the elements of ? (Describe the list and the grid of decimal digits.)    Describe the construction of the diagonal number . Be specific: for each position , how do you choose the th digit of ? Why do you avoid using 0 or 9? (Hint: think about .)    Prove that .    Prove that is not equal to any element in the list. For a specific , at which decimal digit does differ from ? Why does this guarantee ?    State the contradiction and conclude.     "
},
{
  "id": "ws-mod3-bridge-reading",
  "level": "1",
  "url": "ws-mod3-bridge-reading.html",
  "type": "Section",
  "number": "5",
  "title": "Module 3: Bridge Reading Guide",
  "body": " Module 3: Bridge Reading Guide  Bauldry §2.1 — Estimated time: 35 minutes    Read: Bauldry §2.1 (Introduction to Real Analysis, pp. 37–52, approximately): The Topology of .   This reading is your first direct encounter with the material you will study in MAT 5610. Bauldry §2.1 develops the topology of the real line: neighborhoods, open and closed sets, interior and boundary points, and limit points (accumulation points). Every definition in this section is written in the set and function language of Module 3. The goal of this reading is not to master topology—that is MAT 5610's job—but to see concretely how the vocabulary you have built is deployed in graduate-level analysis.  As you read, notice the following:   Neighborhoods are defined using absolute value (from Module 2) and described as open intervals, which are sets.     Deleted neighborhoods are formed using set difference (a Module 3 operation).    Open and closed sets are defined in terms of set-theoretic properties (every point is an interior point; the complement is open).    Accumulation points involve a quantified statement about neighborhoods, and the distinction between finite and infinite sets (cardinality) is used in the definition.     The guided questions below are not submitted. Write your answers in your notebook as you read; they are designed to ensure you engage actively with the text rather than reading passively.     Neighborhoods as Sets   Bauldry defines the -neighborhood of a point as the set .  What interval (in standard notation) is ?  Bauldry also defines the deleted -neighborhood  . Write this set using the Module 3 notation for set difference. Why is the point removed?  Is an open set, a closed set, or neither? (Look up Bauldry's definition of open set and apply it.)       Set Operations in Topology   Bauldry defines the interior of a set as the set of all interior points of , where is an interior point if some neighborhood of is contained in (i.e., such that ).  Using Module 3 set notation, what does mean in terms of membership?  Bauldry states that an open set equals its own interior. What does this say about the relationship between a set and the subsets used to define it?  Find one set from Zorn Chapter 1 that is open and one that is closed (in the Bauldry sense). Verify your choices by checking the definition.       Accumulation Points and Cardinality   A point is an accumulation point (or limit point ) of a set if every deleted neighborhood of contains at least one point of :   Write this definition out using the set-builder and quantifier notation from Modules 1 and 3.  Is 0 an accumulation point of the set ? Explain by checking the definition: for any , can you find such that ?  The set is countably infinite (it is in bijection with ). Its set of accumulation points, however, contains only one point. What is that point? Why does the size (cardinality) of the set not determine how many accumulation points it has?       Notation and Vocabulary Alignment   As you read Bauldry §2.1, you will encounter notation and terminology that may differ slightly from Zorn's.  Does Bauldry use or for the subset relation? Is the distinction important here?  Identify one place in Bauldry §2.1 where a set-theoretic operation (union, intersection, complement, or set difference) appears in a definition or theorem. Write out the statement using Module 3 notation and explain what the operation is doing in context.  In 2–3 sentences: what is one concept or proof technique from Bauldry §2.1 that you expect will be important in MAT 5610, based on what you have seen so far in this course?        Looking Ahead  The topology developed in Bauldry §2.1 is the setting for the definitions of limit and continuity in Bauldry §2.2. When Bauldry writes is continuous at , the definition quantifies over neighborhoods: for every -neighborhood of , there is a -neighborhood of that maps into it. This is a statement about preimages of sets under a function—exactly the preimage language from Hirst §5.4 that you read in the Study Guide.  You will return to these ideas in Module 6 (Limits, Continuity, and Uniform Continuity). For now, the goal is recognition: the set-theoretic vocabulary you built in Module 3 is not abstract machinery; it is the language of the definitions you will be working with throughout MAT 5610.   "
},
{
  "id": "ex-mod3-br-1",
  "level": "2",
  "url": "ws-mod3-bridge-reading.html#ex-mod3-br-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "Neighborhoods as Sets.",
  "body": " Neighborhoods as Sets   Bauldry defines the -neighborhood of a point as the set .  What interval (in standard notation) is ?  Bauldry also defines the deleted -neighborhood  . Write this set using the Module 3 notation for set difference. Why is the point removed?  Is an open set, a closed set, or neither? (Look up Bauldry's definition of open set and apply it.)     "
},
{
  "id": "ex-mod3-br-2",
  "level": "2",
  "url": "ws-mod3-bridge-reading.html#ex-mod3-br-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "Set Operations in Topology.",
  "body": " Set Operations in Topology   Bauldry defines the interior of a set as the set of all interior points of , where is an interior point if some neighborhood of is contained in (i.e., such that ).  Using Module 3 set notation, what does mean in terms of membership?  Bauldry states that an open set equals its own interior. What does this say about the relationship between a set and the subsets used to define it?  Find one set from Zorn Chapter 1 that is open and one that is closed (in the Bauldry sense). Verify your choices by checking the definition.     "
},
{
  "id": "ex-mod3-br-3",
  "level": "2",
  "url": "ws-mod3-bridge-reading.html#ex-mod3-br-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "Accumulation Points and Cardinality.",
  "body": " Accumulation Points and Cardinality   A point is an accumulation point (or limit point ) of a set if every deleted neighborhood of contains at least one point of :   Write this definition out using the set-builder and quantifier notation from Modules 1 and 3.  Is 0 an accumulation point of the set ? Explain by checking the definition: for any , can you find such that ?  The set is countably infinite (it is in bijection with ). Its set of accumulation points, however, contains only one point. What is that point? Why does the size (cardinality) of the set not determine how many accumulation points it has?     "
},
{
  "id": "ex-mod3-br-4",
  "level": "2",
  "url": "ws-mod3-bridge-reading.html#ex-mod3-br-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "Notation and Vocabulary Alignment.",
  "body": " Notation and Vocabulary Alignment   As you read Bauldry §2.1, you will encounter notation and terminology that may differ slightly from Zorn's.  Does Bauldry use or for the subset relation? Is the distinction important here?  Identify one place in Bauldry §2.1 where a set-theoretic operation (union, intersection, complement, or set difference) appears in a definition or theorem. Write out the statement using Module 3 notation and explain what the operation is doing in context.  In 2–3 sentences: what is one concept or proof technique from Bauldry §2.1 that you expect will be important in MAT 5610, based on what you have seen so far in this course?     "
},
{
  "id": "ws-mod3-assessment",
  "level": "1",
  "url": "ws-mod3-assessment.html",
  "type": "Section",
  "number": "6",
  "title": "Module 3: Assessment",
  "body": " Module 3: Assessment  Submitted Proofs and Reflection — Estimated time: 40 minutes    This assessment has three parts. Parts 1 and 2 ask you to write complete mathematical proofs, submitted for feedback. Part 3 is a short reflection. Submit all three parts together as a single document (PDF or typed file) through the course management system.   Write-up standard. All proofs must be written in complete mathematical prose. Use the style modeled in the Worked Examples: include scratch work (clearly labeled) before the formal proof, announce your strategy, write in complete grammatical sentences, and justify every step. Work consisting only of symbolic manipulations without explanation will not receive full credit.   A note on Part 2. All students complete all three parts. For Part 2, choose the option that best matches your background: if you have prior real analysis experience, challenge yourself with Option B. If this is newer territory, Option A is the right starting point.   Academic integrity. Your proofs must be your own work. You may refer to your notes, the textbooks, and the worked examples from this module. You may not collaborate with other students on the written proofs or use AI writing tools to draft your arguments.   Part 1: Core Proof (Required) (Estimated time: 15 minutes)  The following set equality is one of De Morgan's laws for set difference. It is structurally similar to Worked Example 1, but involves a different operation and requires a different case analysis.     De Morgan's Law for Set Difference   Let , , and be sets. Prove: Your proof must use the element-chasing method: show each set is a subset of the other. Write the proof in two clearly labeled directions.    Recall that means and . The statement means it is not the case that ( and ). By De Morgan's law for logic, this is equivalent to: or . Now consider the two cases.       Part 2: Proof Choice (Required — Choose One) (Estimated time: 20 minutes)  Choose one of the following two proof problems. Both ask for a complete proof; they differ in difficulty and the techniques required. Label your submission clearly with Option A or Option B.     Option A (Standard): Multiples of 3 Are Countably Infinite   Let be the set of all integer multiples of 3.  Construct an explicit bijection . (Use the bijection from Worked Example 4 as a guide, or construct a direct bijection by interleaving positive and negative multiples of 3.)  Prove that your function is injective.  Prove that your function is surjective.  Conclude that is countably infinite.      One approach: define by , where is the bijection from Worked Example 4. Then verify that is a bijection .     Option B (More Challenging): Countable Union of Countable Sets   Let and be countable sets. Prove that is countable.  You may use the following facts without proof: is countably infinite (since it is in bijection with ), and any subset of a countable set is finite or countably infinite (Zorn Proposition 1.17). You may not invoke Proposition 1.19 (Zorn) directly, as that is the general version of the result you are proving.  Your proof should:  Handle the case where at least one of or is finite separately, or explain why it suffices to assume both are countably infinite.  Construct an explicit surjection from onto , or an explicit injection from into a known countable set.  Use Proposition 1.17 to conclude.      Since and are countably infinite, there exist surjections (or bijections) and . Define by sending even to and odd to . Show is a surjection and apply Proposition 1.17.       Part 3: Reflection (Estimated time: 5 minutes)  Write 3–5 sentences for each question. These are graded for thoughtfulness, not for mathematical correctness.    Bauldry §2.1 in Set-Theoretic Language   Identify one place in Bauldry §2.1 where a set-theoretic argument from Module 3 (membership, subset, union, intersection, set difference, or element-chasing) is used. Describe in 2–3 sentences what the argument is and why the set operation involved matters in that context.     Element-Chasing as a Proof Template   In Part 1 and Worked Example 1, you used the element-chasing method. Describe the template in your own words: what is the general structure of an element-chasing proof of a set equality? Then reflect: was there a step in your Part 1 proof where you had to make a choice about how to proceed? What guided that choice?     Looking Ahead   In Module 4, you will prove convergence of sequences using - arguments. A sequence is a function . Based on what you learned in Module 3 about functions, injectivity, and countability, describe one connection you see between the material of Module 3 and the idea of a convergent sequence. What properties of the function (if any) are relevant to whether the sequence converges?       Assessment Rubric (Informational)   The following rubric describes how submitted proofs will be evaluated.    Grading Criteria        Criterion  Full credit  Partial credit  Minimal credit    Logical correctness  All steps valid; the argument proves exactly the stated claim  Mostly correct with one fixable gap  Significant logical errors or wrong claim proved    Use of definitions  Set operations and function properties invoked by name and unpacked from definition  Definitions cited but not fully unpacked in at least one step  Definitions not cited; argument proceeds by intuition only    Element-chasing structure (Part 1)  Both subset directions clearly labeled and complete; arbitrary element introduced correctly  One direction complete; the other sketched or reversed  Element-chasing structure missing; equality claimed without proof of both directions    Bijection construction (Part 2)  Explicit bijection given; both injectivity and surjectivity verified  Bijection described informally; one of the two properties verified  No explicit bijection; conclusion asserted without construction    Mathematical prose  Complete grammatical sentences; scratch work labeled and separate from proof  Mostly prose with some missing connective sentences  Primarily symbolic with no connecting narrative    Reflection  Specific, thoughtful, and engages with the mathematical content  General but relevant observations  Vague or too brief to be informative     "
},
{
  "id": "assess-mod3-1",
  "level": "2",
  "url": "ws-mod3-assessment.html#assess-mod3-1",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "De Morgan’s Law for Set Difference.",
  "body": " De Morgan's Law for Set Difference   Let , , and be sets. Prove: Your proof must use the element-chasing method: show each set is a subset of the other. Write the proof in two clearly labeled directions.    Recall that means and . The statement means it is not the case that ( and ). By De Morgan's law for logic, this is equivalent to: or . Now consider the two cases.   "
},
{
  "id": "assess-mod3-2a",
  "level": "2",
  "url": "ws-mod3-assessment.html#assess-mod3-2a",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "Option A (Standard): Multiples of 3 Are Countably Infinite.",
  "body": " Option A (Standard): Multiples of 3 Are Countably Infinite   Let be the set of all integer multiples of 3.  Construct an explicit bijection . (Use the bijection from Worked Example 4 as a guide, or construct a direct bijection by interleaving positive and negative multiples of 3.)  Prove that your function is injective.  Prove that your function is surjective.  Conclude that is countably infinite.      One approach: define by , where is the bijection from Worked Example 4. Then verify that is a bijection .   "
},
{
  "id": "assess-mod3-2b",
  "level": "2",
  "url": "ws-mod3-assessment.html#assess-mod3-2b",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "Option B (More Challenging): Countable Union of Countable Sets.",
  "body": " Option B (More Challenging): Countable Union of Countable Sets   Let and be countable sets. Prove that is countable.  You may use the following facts without proof: is countably infinite (since it is in bijection with ), and any subset of a countable set is finite or countably infinite (Zorn Proposition 1.17). You may not invoke Proposition 1.19 (Zorn) directly, as that is the general version of the result you are proving.  Your proof should:  Handle the case where at least one of or is finite separately, or explain why it suffices to assume both are countably infinite.  Construct an explicit surjection from onto , or an explicit injection from into a known countable set.  Use Proposition 1.17 to conclude.      Since and are countably infinite, there exist surjections (or bijections) and . Define by sending even to and odd to . Show is a surjection and apply Proposition 1.17.   "
},
{
  "id": "assess-mod3-r1",
  "level": "2",
  "url": "ws-mod3-assessment.html#assess-mod3-r1",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "Bauldry §2.1 in Set-Theoretic Language.",
  "body": " Bauldry §2.1 in Set-Theoretic Language   Identify one place in Bauldry §2.1 where a set-theoretic argument from Module 3 (membership, subset, union, intersection, set difference, or element-chasing) is used. Describe in 2–3 sentences what the argument is and why the set operation involved matters in that context.   "
},
{
  "id": "assess-mod3-r2",
  "level": "2",
  "url": "ws-mod3-assessment.html#assess-mod3-r2",
  "type": "Checkpoint",
  "number": "6.5",
  "title": "Element-Chasing as a Proof Template.",
  "body": " Element-Chasing as a Proof Template   In Part 1 and Worked Example 1, you used the element-chasing method. Describe the template in your own words: what is the general structure of an element-chasing proof of a set equality? Then reflect: was there a step in your Part 1 proof where you had to make a choice about how to proceed? What guided that choice?   "
},
{
  "id": "assess-mod3-r3",
  "level": "2",
  "url": "ws-mod3-assessment.html#assess-mod3-r3",
  "type": "Checkpoint",
  "number": "6.6",
  "title": "Looking Ahead.",
  "body": " Looking Ahead   In Module 4, you will prove convergence of sequences using - arguments. A sequence is a function . Based on what you learned in Module 3 about functions, injectivity, and countability, describe one connection you see between the material of Module 3 and the idea of a convergent sequence. What properties of the function (if any) are relevant to whether the sequence converges?   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
