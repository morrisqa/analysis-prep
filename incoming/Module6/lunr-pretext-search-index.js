var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-mod6-orientation",
  "level": "1",
  "url": "ws-mod6-orientation.html",
  "type": "Section",
  "number": "1",
  "title": "Module 6: Limits, Continuity, and Uniform Continuity",
  "body": " Module 6: Limits, Continuity, and Uniform Continuity  Orientation     State the - definition of and explain what each quantifier means.    Use the sequential characterization of limits: if and only if for every sequence with and .    Apply limit laws for functions to compute limits.    Define continuity of at a point ( ) and on a set.    State and apply the Intermediate Value Theorem and the Extreme Value Theorem.    Define uniform continuity and distinguish it from pointwise continuity by identifying the quantifier order.    Apply the Lipschitz condition as a sufficient condition for uniform continuity; state the Heine–Cantor theorem (continuous on a compact set implies uniformly continuous) as a pointer to MAT 5610.       Modules 2 through 5 built a complete toolkit for sequences and series of real numbers. This module lifts those ideas to functions of a real variable. The central question changes from what does approach as ? to what does approach as the real variable approaches a fixed value ? The formal answer—the - definition of a limit—is structurally identical to the - definition from Module 4. The only change is that the index set is now a continuous interval of real numbers rather than the discrete set . Writing both definitions side by side before watching the videos is strongly recommended.  From limits we build continuity, and from continuity we reach two of the most important theorems in undergraduate analysis: the Intermediate Value Theorem and the Extreme Value Theorem. Both theorems rely, at their core, on the completeness of that was established in Module 2. The module closes with uniform continuity —a strengthening of pointwise continuity that swaps the order of two quantifiers. This quantifier swap is subtle but mathematically crucial: uniform continuity is exactly the hypothesis needed to prove that continuous functions are Riemann integrable (Module 8).  The self-assessment questions below are not graded . Write informally; a sentence or two per question is fine. Their purpose is to help you locate yourself within the material and identify which ideas are genuinely new versus which are variations on what you already know.    Limit Intuition   Based on your prior calculus experience, what is ? What happens at exactly (is the function defined there)? What is the right way to define this limit rigorously?     The Sequence Connection   Write the definition of from Module 4. How would you modify the quantifiers and the condition on the independent variable to produce a definition of ?     Continuity vs. Limit   Can exist but not equal ? Give a specific example if you think yes, or explain why you think not.     Uniform vs. Pointwise   The function is continuous on . For a given , do you think a single can work for all points simultaneously? What about if you restrict to the interval ? Record your guess; you do not need to prove anything yet.     Your Background   Have you seen - proofs in a previous course? Rate your comfort level from 1 (never seen them) to 5 (very comfortable) and describe what feels most unfamiliar about the limit definition as you currently understand it.      A Note from the Instructor  The - definition is the notational hurdle that stops many students in their first analysis course. The most important reframe is to see it as a cosmetic variation on the - definition from Module 4. Place both side by side: in the sequence case, you need ; in the function case, you need . The part is new (it excludes itself), but everything else is the same logical structure. If the Module 4 definition felt manageable, this one will too with a bit of practice.  The most important conceptual new idea in this module is the distinction between uniform and pointwise continuity. The quantifier order swap is genuinely subtle, and it is worth writing both definitions out by hand and staring at them: in pointwise continuity, is allowed to depend on both and the point ; in uniform continuity, must depend only on . This is the kind of subtlety that separates an informal calculus course from a rigorous analysis course, and understanding it deeply will make Module 8 (the Riemann integral) much more transparent.    A Note on Pacing   A note on pacing. If you are coming in with prior real analysis experience, you likely know the - definition of a limit already. Skim Zorn §3.1 quickly (confirm the definition matches what you remember), and spend your time instead on the Heine–Cantor theorem sketch in §3.4 and on the uniform continuity examples in the worked examples and practice set. If proof-based function limits are new to you, work slowly through Worked Example 1: read the scratch work, reproduce the -finding algebra on your own paper, and only then read the formal proof. The most common mistake with - proofs is writing the formal proof before doing the scratch work; the scratch work is not optional, it is where you find .    Module Road Map (estimated time: 5 hours)       Component  Time  Purpose    Orientation (this document)  15 min  Goals, self-assessment, context    Video 1: – Limits of Functions  9 min  Core instruction via lightboard    Video 2: Continuity  9 min  Core instruction via lightboard    Video 3: Uniform Continuity  9 min  Core instruction via lightboard    Companion Reading and Study Guide  55 min  Zorn §3.1–3.4 with guided questions    Worked Examples  40 min  Four annotated proof walkthroughs    Practice Problem Set  100 min  Scaffolded practice by difficulty    Bridge Reading Guide  40 min  Bauldry §1.2 and §2.2 with guided questions    Module Assessment  40 min  Submitted proofs and reflection     "
},
{
  "id": "obj-mod6",
  "level": "2",
  "url": "ws-mod6-orientation.html#obj-mod6",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   State the - definition of and explain what each quantifier means.    Use the sequential characterization of limits: if and only if for every sequence with and .    Apply limit laws for functions to compute limits.    Define continuity of at a point ( ) and on a set.    State and apply the Intermediate Value Theorem and the Extreme Value Theorem.    Define uniform continuity and distinguish it from pointwise continuity by identifying the quantifier order.    Apply the Lipschitz condition as a sufficient condition for uniform continuity; state the Heine–Cantor theorem (continuous on a compact set implies uniformly continuous) as a pointer to MAT 5610.    "
},
{
  "id": "ex-mod6-sa-1",
  "level": "2",
  "url": "ws-mod6-orientation.html#ex-mod6-sa-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "Limit Intuition.",
  "body": " Limit Intuition   Based on your prior calculus experience, what is ? What happens at exactly (is the function defined there)? What is the right way to define this limit rigorously?   "
},
{
  "id": "ex-mod6-sa-2",
  "level": "2",
  "url": "ws-mod6-orientation.html#ex-mod6-sa-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "The Sequence Connection.",
  "body": " The Sequence Connection   Write the definition of from Module 4. How would you modify the quantifiers and the condition on the independent variable to produce a definition of ?   "
},
{
  "id": "ex-mod6-sa-3",
  "level": "2",
  "url": "ws-mod6-orientation.html#ex-mod6-sa-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "Continuity vs. Limit.",
  "body": " Continuity vs. Limit   Can exist but not equal ? Give a specific example if you think yes, or explain why you think not.   "
},
{
  "id": "ex-mod6-sa-4",
  "level": "2",
  "url": "ws-mod6-orientation.html#ex-mod6-sa-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "Uniform vs. Pointwise.",
  "body": " Uniform vs. Pointwise   The function is continuous on . For a given , do you think a single can work for all points simultaneously? What about if you restrict to the interval ? Record your guess; you do not need to prove anything yet.   "
},
{
  "id": "ex-mod6-sa-5",
  "level": "2",
  "url": "ws-mod6-orientation.html#ex-mod6-sa-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Your Background.",
  "body": " Your Background   Have you seen - proofs in a previous course? Rate your comfort level from 1 (never seen them) to 5 (very comfortable) and describe what feels most unfamiliar about the limit definition as you currently understand it.   "
},
{
  "id": "ws-mod6-study-guide",
  "level": "1",
  "url": "ws-mod6-study-guide.html",
  "type": "Section",
  "number": "2",
  "title": "Module 6: Companion Reading and Study Guide",
  "body": " Module 6: Companion Reading and Study Guide  Zorn §3.1–3.4 — Estimated time: 55 minutes   This guide accompanies four sections of Zorn's Understanding Real Analysis . Section 3.1 ( Limits of Functions ) introduces the - definition and the sequential characterization of limits. Sections 3.2 and 3.3 develop the theory of continuous functions, including the Intermediate Value Theorem and Extreme Value Theorem. Section 3.4 introduces uniform continuity and the Heine–Cantor theorem.  As you read, keep in mind the central structural theme: the - definition is a direct analogue of the - definition from Module 4. Every theorem about limits of functions has a counterpart for sequences, and the sequential characterization (Theorem 3.3 or its analogue in Zorn) is the bridge that lets you use Module 4 tools here.     Section 3.1: Limits of Functions (Zorn pp. 151–164)  Read the - definition of carefully. Compare it line by line with the - definition of sequence convergence from Module 4. The structural parallel is the key takeaway from this section.    Parsing the - Definition   Write the - definition of symbolically. Then answer:  What is the geometric meaning of the condition ? In particular, why does (rather than alone) appear?  In the sequence definition, the condition was . What is the analogue here, and what is the role of compared to ?      The definition: means such that .  (a) The condition describes a punctured open interval around : is within of but not equal to  . The strict inequality is essential because the limit concerns the behavior of  near  , not at  ; in particular, need not even be defined at .  (b) In Module 4, is a threshold index past which the sequence stays within of . Here, plays the same role: it is a threshold distance from within which stays within of . The two definitions have exactly parallel logical structure.     A Basic - Verification   Prove from the definition that . Show your scratch work (finding ) separately from the formal proof.     Scratch work.  . For this to be less than , we need . Set .   Proof. Let . Set . Suppose . Then . By definition, .     Sequential Characterization of Limits   Read Zorn's sequential characterization of limits (sometimes called the Heine criterion): if and only if for every sequence with and for all , we have .  Explain in one sentence how this theorem connects Module 4 to Module 6.  Use the sequential characterization to argue that does not exist. (Hint: find two sequences approaching 0 along which the function values approach different values.)      (a) The sequential characterization reduces questions about function limits to questions about sequence limits, so every Module 4 tool (Algebra of Limits, Squeeze Theorem, etc.) applies directly to function limits via this bridge.  (b) Let and . Both satisfy and with and . We have and . Since two sequences approaching 0 give different function values, the sequential characterization implies the limit does not exist.      Sections 3.2–3.4: Continuity and Uniform Continuity (Zorn pp. 164–198)  Section 3.2 defines continuity at a point and on a set, and develops the algebra of continuous functions. Section 3.3 proves the Intermediate Value Theorem and Extreme Value Theorem. Section 3.4 introduces uniform continuity and the Heine–Cantor theorem. Read all three before working the exercises below.    Continuity at a Point   Write the - definition of continuity of at . Then prove that is continuous at .  (Hint: . Restrict first to bound , then set .)     Definition.  is continuous at if such that . (Note: unlike the limit definition, we do not need , because continuity includes the requirement that is the right value.)   Scratch work.  . If then , so . So . Set .   Proof. Let . Set . Suppose . Since , we have , so . Thus .     Intermediate Value Theorem   State the Intermediate Value Theorem (IVT). Then use it to show that the equation has at least one solution in the interval .  Identify the function and verify it is continuous on .  Compute and and verify they have opposite signs.  Invoke the IVT by name to conclude.       IVT. If is continuous on and (or ), then there exists with .  (a) Let . As a polynomial, is continuous everywhere, hence on .  (b) and .  (c) Since is continuous on with , the Intermediate Value Theorem guarantees a with , i.e., .     Extreme Value Theorem and Compactness   State the Extreme Value Theorem (EVT). Then give an example showing the EVT can fail if the interval is not closed and bounded.  Let on . Does attain a maximum value? Does it attain a minimum?  What hypothesis of the EVT fails for this example?       EVT. If is continuous on (a closed bounded interval), then there exist with for all . That is, attains both its minimum and maximum values.  (a) on has minimum value (attained) but no maximum: as , , so is unbounded above.  (b) The interval is not closed (it does not contain its left endpoint 0), violating the hypothesis of the EVT.     Definition of Uniform Continuity   Write the definition of uniform continuity of on a set . Then prove that is uniformly continuous on .  Identify the key difference in quantifier order between the definition of pointwise continuity on and the definition of uniform continuity on .  Prove uniform continuity of on by finding in terms of only (not depending on any point or ).       Definition.  is uniformly continuous on if such that for all with , we have .  (a) In pointwise continuity on , the definition reads: for all , for all , there exists (which may depend on both and ) such that . In uniform continuity, the quantifier is moved inside the : for all , there exists (depending only on ) such that for all  with , we have .  (b) . Given , set . Then for any with , we get . The same works for all , so is uniformly continuous.     Failure of Uniform Continuity   Show that is not uniformly continuous on . Use the sequential criterion for non-uniform continuity: find sequences and in with but .    Let and . Both lie in for . We have But for all . Since , the definition of uniform continuity fails for (say): no single can prevent from exceeding for pairs near 0.     Heine–Cantor Theorem   Read Zorn's statement of the Heine–Cantor theorem: if is continuous on a closed bounded interval , then is uniformly continuous on .  Why does the theorem require closed and bounded rather than just bounded? (Think about what fails for on .)  Why does the theorem require continuity on all of  rather than just continuity at each interior point?  The proof of Heine–Cantor uses the theory of compact sets and open covers. Zorn may prove it differently. Identify the key property of that the proof uses, and note that this is a topic developed fully in MAT 5610.      (a) is continuous on but not uniformly continuous (Exercise sg-34-2): the interval is bounded but not closed (0 is missing), and the function blows up near the missing endpoint.  (b) If continuity fails at even one point in , the function may have a jump discontinuity, which would prevent uniform continuity near that point.  (c) The key property is compactness of : every open cover has a finite subcover (Heine–Borel theorem). The proof extracts a finite cover from the family of -neighborhoods that work pointwise, then takes the minimum of the finitely many values. Compactness is developed rigorously in MAT 5610.    "
},
{
  "id": "ex-mod6-sg-31-1",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-31-1",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "Parsing the <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-<span class=\"process-math\">\\(\\delta\\)<\/span> Definition.",
  "body": " Parsing the - Definition   Write the - definition of symbolically. Then answer:  What is the geometric meaning of the condition ? In particular, why does (rather than alone) appear?  In the sequence definition, the condition was . What is the analogue here, and what is the role of compared to ?      The definition: means such that .  (a) The condition describes a punctured open interval around : is within of but not equal to  . The strict inequality is essential because the limit concerns the behavior of  near  , not at  ; in particular, need not even be defined at .  (b) In Module 4, is a threshold index past which the sequence stays within of . Here, plays the same role: it is a threshold distance from within which stays within of . The two definitions have exactly parallel logical structure.   "
},
{
  "id": "ex-mod6-sg-31-2",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-31-2",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "A Basic <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-<span class=\"process-math\">\\(\\delta\\)<\/span> Verification.",
  "body": " A Basic - Verification   Prove from the definition that . Show your scratch work (finding ) separately from the formal proof.     Scratch work.  . For this to be less than , we need . Set .   Proof. Let . Set . Suppose . Then . By definition, .   "
},
{
  "id": "ex-mod6-sg-31-3",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-31-3",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "Sequential Characterization of Limits.",
  "body": " Sequential Characterization of Limits   Read Zorn's sequential characterization of limits (sometimes called the Heine criterion): if and only if for every sequence with and for all , we have .  Explain in one sentence how this theorem connects Module 4 to Module 6.  Use the sequential characterization to argue that does not exist. (Hint: find two sequences approaching 0 along which the function values approach different values.)      (a) The sequential characterization reduces questions about function limits to questions about sequence limits, so every Module 4 tool (Algebra of Limits, Squeeze Theorem, etc.) applies directly to function limits via this bridge.  (b) Let and . Both satisfy and with and . We have and . Since two sequences approaching 0 give different function values, the sequential characterization implies the limit does not exist.   "
},
{
  "id": "ex-mod6-sg-32-1",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-32-1",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "Continuity at a Point.",
  "body": " Continuity at a Point   Write the - definition of continuity of at . Then prove that is continuous at .  (Hint: . Restrict first to bound , then set .)     Definition.  is continuous at if such that . (Note: unlike the limit definition, we do not need , because continuity includes the requirement that is the right value.)   Scratch work.  . If then , so . So . Set .   Proof. Let . Set . Suppose . Since , we have , so . Thus .   "
},
{
  "id": "ex-mod6-sg-32-2",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-32-2",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "Intermediate Value Theorem.",
  "body": " Intermediate Value Theorem   State the Intermediate Value Theorem (IVT). Then use it to show that the equation has at least one solution in the interval .  Identify the function and verify it is continuous on .  Compute and and verify they have opposite signs.  Invoke the IVT by name to conclude.       IVT. If is continuous on and (or ), then there exists with .  (a) Let . As a polynomial, is continuous everywhere, hence on .  (b) and .  (c) Since is continuous on with , the Intermediate Value Theorem guarantees a with , i.e., .   "
},
{
  "id": "ex-mod6-sg-32-3",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-32-3",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "Extreme Value Theorem and Compactness.",
  "body": " Extreme Value Theorem and Compactness   State the Extreme Value Theorem (EVT). Then give an example showing the EVT can fail if the interval is not closed and bounded.  Let on . Does attain a maximum value? Does it attain a minimum?  What hypothesis of the EVT fails for this example?       EVT. If is continuous on (a closed bounded interval), then there exist with for all . That is, attains both its minimum and maximum values.  (a) on has minimum value (attained) but no maximum: as , , so is unbounded above.  (b) The interval is not closed (it does not contain its left endpoint 0), violating the hypothesis of the EVT.   "
},
{
  "id": "ex-mod6-sg-34-1",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-34-1",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "Definition of Uniform Continuity.",
  "body": " Definition of Uniform Continuity   Write the definition of uniform continuity of on a set . Then prove that is uniformly continuous on .  Identify the key difference in quantifier order between the definition of pointwise continuity on and the definition of uniform continuity on .  Prove uniform continuity of on by finding in terms of only (not depending on any point or ).       Definition.  is uniformly continuous on if such that for all with , we have .  (a) In pointwise continuity on , the definition reads: for all , for all , there exists (which may depend on both and ) such that . In uniform continuity, the quantifier is moved inside the : for all , there exists (depending only on ) such that for all  with , we have .  (b) . Given , set . Then for any with , we get . The same works for all , so is uniformly continuous.   "
},
{
  "id": "ex-mod6-sg-34-2",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-34-2",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "Failure of Uniform Continuity.",
  "body": " Failure of Uniform Continuity   Show that is not uniformly continuous on . Use the sequential criterion for non-uniform continuity: find sequences and in with but .    Let and . Both lie in for . We have But for all . Since , the definition of uniform continuity fails for (say): no single can prevent from exceeding for pairs near 0.   "
},
{
  "id": "ex-mod6-sg-34-3",
  "level": "2",
  "url": "ws-mod6-study-guide.html#ex-mod6-sg-34-3",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "Heine–Cantor Theorem.",
  "body": " Heine–Cantor Theorem   Read Zorn's statement of the Heine–Cantor theorem: if is continuous on a closed bounded interval , then is uniformly continuous on .  Why does the theorem require closed and bounded rather than just bounded? (Think about what fails for on .)  Why does the theorem require continuity on all of  rather than just continuity at each interior point?  The proof of Heine–Cantor uses the theory of compact sets and open covers. Zorn may prove it differently. Identify the key property of that the proof uses, and note that this is a topic developed fully in MAT 5610.      (a) is continuous on but not uniformly continuous (Exercise sg-34-2): the interval is bounded but not closed (0 is missing), and the function blows up near the missing endpoint.  (b) If continuity fails at even one point in , the function may have a jump discontinuity, which would prevent uniform continuity near that point.  (c) The key property is compactness of : every open cover has a finite subcover (Heine–Borel theorem). The proof extracts a finite cover from the family of -neighborhoods that work pointwise, then takes the minimum of the finitely many values. Compactness is developed rigorously in MAT 5610.   "
},
{
  "id": "ws-mod6-worked-examples",
  "level": "1",
  "url": "ws-mod6-worked-examples.html",
  "type": "Section",
  "number": "3",
  "title": "Module 6: Worked Examples",
  "body": " Module 6: Worked Examples  Annotated Proof Walkthroughs — Estimated time: 40 minutes   Read each example slowly. The goal is not just to see what the answer is, but to internalize the proof template . Example 1 is the archetype of an - limit proof; Example 2 shows how to prove continuity at every point of using the same method; Example 3 demonstrates the sequential technique for proving non-uniform continuity; Example 4 shows the Lipschitz method for proving uniform continuity on a bounded interval.     Example 1: An - Limit Proof   Prove that .     Strategy.   We use the - definition directly. The proof has two phases: scratch work to find  in terms of , and a formal proof that verifies that choice works.   Scratch work.   We need when . Compute: For this to be less than , we need , i.e., . Set .   Proof.   Let . Set . Suppose . Then By the definition of limit, .    What to notice.   The scratch work determines ; the formal proof simply verifies the chain of inequalities. This two-phase structure is the standard template for all - proofs. Notice that in this linear example the expression simplified to a constant times immediately. In Example 2, the function is quadratic and we need an extra step to bound the remaining factor.      Example 2: Proving Continuity Using the - Definition   Prove that is continuous at every .     Strategy.   We must show whenever . The key is to factor and bound by first restricting .   Scratch work.   Restrict first. Then , so . Therefore For this to be less than , we need . Set .   Proof.   Let . Set . Suppose . Since , we have , which gives and hence . Therefore Since was arbitrary, is continuous at every .    What to notice.   The restrict to a neighborhood first step is the essential technical move in continuity proofs for nonlinear functions. By requiring , we get a bound on that does not blow up. Note that depends on both and ; this is perfectly fine for continuity (pointwise). The same function is not uniformly continuous on , because the factor grows without bound as , so no single works for all points. On any bounded interval, however, is bounded above, and uniform continuity follows (see Example 4).      Example 3: Proving is Not Uniformly Continuous on   Prove that is not uniformly continuous on .     Strategy.   To negate uniform continuity, we must exhibit such that for every , there exist with but . The cleanest way is to produce explicit sequences with but .   Proof.   Let and for . Both sequences lie in and we compute However, for all . Therefore .  To make the argument formal: take . For any , choose large enough that . Then satisfy but . Since was arbitrary, no single works for this , and is not uniformly continuous on .    What to notice.   The negation of uniform continuity ( ) is most cleanly verified with an explicit pair of sequences. The key is that and both approach 0 (where blows up), so the function values diverge even though the inputs become arbitrarily close.      Example 4: Uniform Continuity via a Lipschitz Condition   Prove that is uniformly continuous on .     Strategy.   On the bounded closed interval , we can bound uniformly for all . This gives a Lipschitz condition with a fixed constant , which immediately implies uniform continuity with .   Proof.   For any , Since , we have . Therefore This is a Lipschitz condition with constant . Given , set . Then for all with , Since the same works for all , is uniformly continuous on .    What to notice.   The Lipschitz constant comes from the global bound on . On all of , no such global bound exists (as , can be made arbitrarily large), which is why is not uniformly continuous on . The Heine–Cantor theorem explains why boundedness and closedness together guarantee uniform continuity: every continuous function on a compact set is Lipschitz on that set (or at least uniformly continuous, which Heine–Cantor guarantees even without a Lipschitz bound). The proof of Heine–Cantor is a topic for MAT 5610.    "
},
{
  "id": "ex-mod6-we-1",
  "level": "2",
  "url": "ws-mod6-worked-examples.html#ex-mod6-we-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "Example 1: An <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-<span class=\"process-math\">\\(\\delta\\)<\/span> Limit Proof.",
  "body": " Example 1: An - Limit Proof   Prove that .     Strategy.   We use the - definition directly. The proof has two phases: scratch work to find  in terms of , and a formal proof that verifies that choice works.   Scratch work.   We need when . Compute: For this to be less than , we need , i.e., . Set .   Proof.   Let . Set . Suppose . Then By the definition of limit, .    What to notice.   The scratch work determines ; the formal proof simply verifies the chain of inequalities. This two-phase structure is the standard template for all - proofs. Notice that in this linear example the expression simplified to a constant times immediately. In Example 2, the function is quadratic and we need an extra step to bound the remaining factor.   "
},
{
  "id": "ex-mod6-we-2",
  "level": "2",
  "url": "ws-mod6-worked-examples.html#ex-mod6-we-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "Example 2: Proving Continuity Using the <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-<span class=\"process-math\">\\(\\delta\\)<\/span> Definition.",
  "body": " Example 2: Proving Continuity Using the - Definition   Prove that is continuous at every .     Strategy.   We must show whenever . The key is to factor and bound by first restricting .   Scratch work.   Restrict first. Then , so . Therefore For this to be less than , we need . Set .   Proof.   Let . Set . Suppose . Since , we have , which gives and hence . Therefore Since was arbitrary, is continuous at every .    What to notice.   The restrict to a neighborhood first step is the essential technical move in continuity proofs for nonlinear functions. By requiring , we get a bound on that does not blow up. Note that depends on both and ; this is perfectly fine for continuity (pointwise). The same function is not uniformly continuous on , because the factor grows without bound as , so no single works for all points. On any bounded interval, however, is bounded above, and uniform continuity follows (see Example 4).   "
},
{
  "id": "ex-mod6-we-3",
  "level": "2",
  "url": "ws-mod6-worked-examples.html#ex-mod6-we-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "Example 3: Proving <span class=\"process-math\">\\(f(x) = 1\/x\\)<\/span> is Not Uniformly Continuous on <span class=\"process-math\">\\((0,1)\\)<\/span>.",
  "body": " Example 3: Proving is Not Uniformly Continuous on   Prove that is not uniformly continuous on .     Strategy.   To negate uniform continuity, we must exhibit such that for every , there exist with but . The cleanest way is to produce explicit sequences with but .   Proof.   Let and for . Both sequences lie in and we compute However, for all . Therefore .  To make the argument formal: take . For any , choose large enough that . Then satisfy but . Since was arbitrary, no single works for this , and is not uniformly continuous on .    What to notice.   The negation of uniform continuity ( ) is most cleanly verified with an explicit pair of sequences. The key is that and both approach 0 (where blows up), so the function values diverge even though the inputs become arbitrarily close.   "
},
{
  "id": "ex-mod6-we-4",
  "level": "2",
  "url": "ws-mod6-worked-examples.html#ex-mod6-we-4",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "Example 4: Uniform Continuity via a Lipschitz Condition.",
  "body": " Example 4: Uniform Continuity via a Lipschitz Condition   Prove that is uniformly continuous on .     Strategy.   On the bounded closed interval , we can bound uniformly for all . This gives a Lipschitz condition with a fixed constant , which immediately implies uniform continuity with .   Proof.   For any , Since , we have . Therefore This is a Lipschitz condition with constant . Given , set . Then for all with , Since the same works for all , is uniformly continuous on .    What to notice.   The Lipschitz constant comes from the global bound on . On all of , no such global bound exists (as , can be made arbitrarily large), which is why is not uniformly continuous on . The Heine–Cantor theorem explains why boundedness and closedness together guarantee uniform continuity: every continuous function on a compact set is Lipschitz on that set (or at least uniformly continuous, which Heine–Cantor guarantees even without a Lipschitz bound). The proof of Heine–Cantor is a topic for MAT 5610.   "
},
{
  "id": "ws-mod6-practice-set",
  "level": "1",
  "url": "ws-mod6-practice-set.html",
  "type": "Section",
  "number": "4",
  "title": "Module 6: Practice Problem Set",
  "body": " Module 6: Practice Problem Set  Estimated time: 100 minutes   Problems are labeled (Foundational), (Standard), and (Challenge). Work in order within each level; later problems in a level often build on earlier ones.  These problems are not submitted, but you should write out complete solutions. For any problem that asks you to prove something, apply the standards from the Worked Examples: state your strategy up front, write in complete sentences, justify every step, and cite each test or theorem by name.  The - proofs will take longer than they look. Allow extra time for the scratch work phase, which is not optional—it is where you find .     Foundational Problems    Limit Intuition   For each, state the limit or state that it does not exist. No formal proof is required; use your calculus intuition or algebra to evaluate.                  (a) Factor: as .  (b) For , ; for , . The left and right limits disagree, so the limit does not exist.  (c) Divide numerator and denominator by : .  (d) This is a standard limit from calculus: .     Finding   Let . The limit as is . For each given , find the largest valid (in terms of for part (d)).     General .      Note that , so we need , i.e., .  (a) . (b) . (c) . (d) .     Continuity Check   For each function and point, determine whether is continuous at by checking whether . State your conclusion with a brief justification.   at .   at .   at .   at .      (a) . As a polynomial, is continuous everywhere; . Continuous at .  (b) is undefined (division by zero), so is not continuous at . The limit exists, but there is no value of to equal it.  (c) . For , ; for , . So . Continuous.  (d) is undefined, so is not continuous at .     IVT Application   Show that has at least one solution in . Identify the function , compute and , and invoke the IVT by name.    Let . As a polynomial, is continuous on . We compute and .  Since both endpoints give positive values, we cannot yet apply IVT directly. Check an interior point: . Now and , so by the Intermediate Value Theorem, there exists with .      Standard Problems    An - Limit Proof   Prove that .  Your proof must follow this structure:   Scratch work. Compute and find a value of in terms of that will work.   Formal proof. State Let and Set , assume , and verify the chain of inequalities concluding .       Continuity from the Definition   Prove that is continuous at every .     . Set .     Uniform Continuity via Lipschitz   Prove that is uniformly continuous on by showing it satisfies a Lipschitz condition on that domain.    For , write (rationalize the numerator). Since , , so . This gives a Lipschitz constant , so works.     Not Uniformly Continuous   Prove that is not uniformly continuous on .    Let and . Then . Compute and show this does not tend to 0.     Composition of Continuous Functions   State and prove: if is continuous at and is continuous at , then is continuous at .  You may use the sequential characterization of continuity for both and .    Let be any sequence with . Since is continuous at , . Since is continuous at and , we get . That is, for every sequence , so is continuous at .      Challenge Problems    Uniformly Continuous Functions Extend to the Boundary   Prove: if is uniformly continuous, then both limits and exist. (That is, extends continuously to the closed interval .)    Let be any sequence in with . Show that is a Cauchy sequence using the definition of uniform continuity: given , pick from uniform continuity; since , eventually , so . By Cauchy completeness of (Module 4), converges. One then checks that every sequence approaching gives the same limit, which defines .     Composition of Uniformly Continuous Functions   Prove: if is uniformly continuous and is uniformly continuous, then is uniformly continuous.    Given , use uniform continuity of to find such that for all . Then use uniform continuity of with to find such that for all . Chain the two implications.    "
},
{
  "id": "ex-mod6-ps-F1",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-F1",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Limit Intuition.",
  "body": " Limit Intuition   For each, state the limit or state that it does not exist. No formal proof is required; use your calculus intuition or algebra to evaluate.                  (a) Factor: as .  (b) For , ; for , . The left and right limits disagree, so the limit does not exist.  (c) Divide numerator and denominator by : .  (d) This is a standard limit from calculus: .   "
},
{
  "id": "ex-mod6-ps-F2",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-F2",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Finding <span class=\"process-math\">\\(\\delta\\)<\/span>.",
  "body": " Finding   Let . The limit as is . For each given , find the largest valid (in terms of for part (d)).     General .      Note that , so we need , i.e., .  (a) . (b) . (c) . (d) .   "
},
{
  "id": "ex-mod6-ps-F3",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-F3",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Continuity Check.",
  "body": " Continuity Check   For each function and point, determine whether is continuous at by checking whether . State your conclusion with a brief justification.   at .   at .   at .   at .      (a) . As a polynomial, is continuous everywhere; . Continuous at .  (b) is undefined (division by zero), so is not continuous at . The limit exists, but there is no value of to equal it.  (c) . For , ; for , . So . Continuous.  (d) is undefined, so is not continuous at .   "
},
{
  "id": "ex-mod6-ps-F4",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-F4",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> IVT Application.",
  "body": " IVT Application   Show that has at least one solution in . Identify the function , compute and , and invoke the IVT by name.    Let . As a polynomial, is continuous on . We compute and .  Since both endpoints give positive values, we cannot yet apply IVT directly. Check an interior point: . Now and , so by the Intermediate Value Theorem, there exists with .   "
},
{
  "id": "ex-mod6-ps-S1",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-S1",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> An <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-<span class=\"process-math\">\\(\\delta\\)<\/span> Limit Proof.",
  "body": " An - Limit Proof   Prove that .  Your proof must follow this structure:   Scratch work. Compute and find a value of in terms of that will work.   Formal proof. State Let and Set , assume , and verify the chain of inequalities concluding .     "
},
{
  "id": "ex-mod6-ps-S2",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-S2",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Continuity from the Definition.",
  "body": " Continuity from the Definition   Prove that is continuous at every .     . Set .   "
},
{
  "id": "ex-mod6-ps-S3",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-S3",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Uniform Continuity via Lipschitz.",
  "body": " Uniform Continuity via Lipschitz   Prove that is uniformly continuous on by showing it satisfies a Lipschitz condition on that domain.    For , write (rationalize the numerator). Since , , so . This gives a Lipschitz constant , so works.   "
},
{
  "id": "ex-mod6-ps-S4",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-S4",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Not Uniformly Continuous.",
  "body": " Not Uniformly Continuous   Prove that is not uniformly continuous on .    Let and . Then . Compute and show this does not tend to 0.   "
},
{
  "id": "ex-mod6-ps-S5",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-S5",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Composition of Continuous Functions.",
  "body": " Composition of Continuous Functions   State and prove: if is continuous at and is continuous at , then is continuous at .  You may use the sequential characterization of continuity for both and .    Let be any sequence with . Since is continuous at , . Since is continuous at and , we get . That is, for every sequence , so is continuous at .   "
},
{
  "id": "ex-mod6-ps-C1",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-C1",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> Uniformly Continuous Functions Extend to the Boundary.",
  "body": " Uniformly Continuous Functions Extend to the Boundary   Prove: if is uniformly continuous, then both limits and exist. (That is, extends continuously to the closed interval .)    Let be any sequence in with . Show that is a Cauchy sequence using the definition of uniform continuity: given , pick from uniform continuity; since , eventually , so . By Cauchy completeness of (Module 4), converges. One then checks that every sequence approaching gives the same limit, which defines .   "
},
{
  "id": "ex-mod6-ps-C2",
  "level": "2",
  "url": "ws-mod6-practice-set.html#ex-mod6-ps-C2",
  "type": "Checkpoint",
  "number": "4.11",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> Composition of Uniformly Continuous Functions.",
  "body": " Composition of Uniformly Continuous Functions   Prove: if is uniformly continuous and is uniformly continuous, then is uniformly continuous.    Given , use uniform continuity of to find such that for all . Then use uniform continuity of with to find such that for all . Chain the two implications.   "
},
{
  "id": "ws-mod6-bridge-reading",
  "level": "1",
  "url": "ws-mod6-bridge-reading.html",
  "type": "Section",
  "number": "5",
  "title": "Module 6: Bridge Reading Guide",
  "body": " Module 6: Bridge Reading Guide  Bauldry §1.2 and §2.2 — Estimated time: 40 minutes   Every module ends with a bridge reading in Bauldry's Introduction to Real Analysis . For Module 6 the reading covers two sections from different chapters: §1.2 ( Continuous Functions ) from Bauldry's informal Chapter 1, and §2.2 ( Limits and Continuity ) from his rigorous Chapter 2. The contrast between the two sections is itself instructive: §1.2 treats continuity informally, as in a calculus course; §2.2 is the graduate-level rigorous treatment that you will encounter in MAT 5610.  Read §1.2 first as a review and orientation; then read §2.2 as a preview of where the material is going. Focus especially on how Bauldry's §2.2 assumes more background and moves faster than Zorn §3.1–3.4.     Bauldry §1.2 — Continuous Functions (informal)  Section 1.2 reviews the main results about continuity in an informal calculus-style presentation: limits, the definition of continuity, the Intermediate Value Theorem, the Extreme Value Theorem, and a brief mention of uniform continuity. Unlike Zorn, Bauldry keeps the proofs at a sketch level here, reserving full rigor for Chapter 2.    Bauldry's Definition of Continuity   Read Bauldry's definition of continuity in §1.2. Is it given in terms of - , in terms of limits, or in some more informal phrasing?  Quote the key sentence or definition from the text.  Compare this to the definition you used in the Module 6 study guide (from Zorn §3.2). Which is more formal? What does the less formal version omit?       IVT and EVT in Bauldry §1.2     Bauldry states both the Intermediate Value Theorem and the Extreme Value Theorem in §1.2. For which of the two does he provide even a proof sketch, and for which does he simply state the result?  Compare Bauldry's statement of the IVT to Zorn's version in §3.3. Do they have the same hypotheses and conclusion, or does one state a more general version?       Uniform Continuity in Bauldry §1.2   Locate Bauldry's treatment of uniform continuity in §1.2. How does his presentation compare to Zorn's §3.4?  Does Bauldry give the formal quantifier-order definition of uniform continuity in §1.2, or does he present it more informally?  Does Bauldry state the Heine–Cantor theorem in §1.2? If so, what name does he use for it?        Bauldry §2.2 — Limits and Continuity (rigorous)  Section 2.2 is the version of this material you will encounter in MAT 5610. It opens with the formal - definition, develops the sequential characterization, and proves the main theorems (IVT, EVT, and Heine–Cantor). The presentation is more compressed than Zorn; Bauldry assumes you are already fluent with the - machinery.    Bauldry's Formal Definition   Write out the - definition that Bauldry gives at the opening of §2.2.  Compare it to Zorn's definition in §3.1 and to the definition you used in the Module 6 study guide. Are they logically equivalent?  Does Bauldry's notation or phrasing differ from Zorn's? Note any differences in the variable names, the direction of quantifiers, or what object is called the limit.        Sequential Characterization in Bauldry §2.2     Find the theorem in §2.2 that gives the sequential characterization of continuity (the theorem that says is continuous at if and only if for every sequence ). Write the theorem number and the statement.  Does the proof strategy in Bauldry match the approach in the Module 6 study guide? Identify the main step in the proof of the forward direction (from - continuity to the sequential property).       Heine–Cantor in Bauldry §2.2   Find the theorem in §2.2 that corresponds to the Heine–Cantor theorem (continuous on a compact set implies uniformly continuous).  What does Bauldry call this theorem? Does he use the word compact explicitly?  What is the key property of that the proof uses? (Even if Bauldry's proof is sketch-level, identify the step where compactness or some equivalent property is invoked.)       Looking Ahead to Integration     Identify one result in Bauldry §2.2 about uniform continuity that will be used in the treatment of the Riemann integral in Bauldry §2.4 (and Module 8 of this course). State the result and explain in one sentence how you expect it to enter the integration theory.  What is the first topic in MAT 5610 that builds directly on the material in Bauldry §2.2? (Scan the beginning of Bauldry §2.3 or §2.4 briefly if needed.)        Topology Preview   Bauldry's rigorous treatment of continuity in §2.2 makes implicit or explicit use of topological notions: open sets, closed sets, and compact sets. In MAT 5610 these will be developed carefully.  What does it mean for a subset of to be compact ? (Give an informal answer based on your reading; you are not expected to know the topology yet.)  How does compactness appear as a hypothesis in the theorems you have read in §2.2 (EVT, Heine–Cantor)? Why can these theorems fail on non-compact sets?      "
},
{
  "id": "ex-mod6-br-1",
  "level": "2",
  "url": "ws-mod6-bridge-reading.html#ex-mod6-br-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "Bauldry’s Definition of Continuity.",
  "body": " Bauldry's Definition of Continuity   Read Bauldry's definition of continuity in §1.2. Is it given in terms of - , in terms of limits, or in some more informal phrasing?  Quote the key sentence or definition from the text.  Compare this to the definition you used in the Module 6 study guide (from Zorn §3.2). Which is more formal? What does the less formal version omit?     "
},
{
  "id": "ex-mod6-br-2",
  "level": "2",
  "url": "ws-mod6-bridge-reading.html#ex-mod6-br-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "IVT and EVT in Bauldry §1.2.",
  "body": " IVT and EVT in Bauldry §1.2     Bauldry states both the Intermediate Value Theorem and the Extreme Value Theorem in §1.2. For which of the two does he provide even a proof sketch, and for which does he simply state the result?  Compare Bauldry's statement of the IVT to Zorn's version in §3.3. Do they have the same hypotheses and conclusion, or does one state a more general version?     "
},
{
  "id": "ex-mod6-br-3",
  "level": "2",
  "url": "ws-mod6-bridge-reading.html#ex-mod6-br-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "Uniform Continuity in Bauldry §1.2.",
  "body": " Uniform Continuity in Bauldry §1.2   Locate Bauldry's treatment of uniform continuity in §1.2. How does his presentation compare to Zorn's §3.4?  Does Bauldry give the formal quantifier-order definition of uniform continuity in §1.2, or does he present it more informally?  Does Bauldry state the Heine–Cantor theorem in §1.2? If so, what name does he use for it?     "
},
{
  "id": "ex-mod6-br-4",
  "level": "2",
  "url": "ws-mod6-bridge-reading.html#ex-mod6-br-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "Bauldry’s Formal Definition.",
  "body": " Bauldry's Formal Definition   Write out the - definition that Bauldry gives at the opening of §2.2.  Compare it to Zorn's definition in §3.1 and to the definition you used in the Module 6 study guide. Are they logically equivalent?  Does Bauldry's notation or phrasing differ from Zorn's? Note any differences in the variable names, the direction of quantifiers, or what object is called the limit.      "
},
{
  "id": "ex-mod6-br-5",
  "level": "2",
  "url": "ws-mod6-bridge-reading.html#ex-mod6-br-5",
  "type": "Checkpoint",
  "number": "5.5",
  "title": "Sequential Characterization in Bauldry §2.2.",
  "body": " Sequential Characterization in Bauldry §2.2     Find the theorem in §2.2 that gives the sequential characterization of continuity (the theorem that says is continuous at if and only if for every sequence ). Write the theorem number and the statement.  Does the proof strategy in Bauldry match the approach in the Module 6 study guide? Identify the main step in the proof of the forward direction (from - continuity to the sequential property).     "
},
{
  "id": "ex-mod6-br-6",
  "level": "2",
  "url": "ws-mod6-bridge-reading.html#ex-mod6-br-6",
  "type": "Checkpoint",
  "number": "5.6",
  "title": "Heine–Cantor in Bauldry §2.2.",
  "body": " Heine–Cantor in Bauldry §2.2   Find the theorem in §2.2 that corresponds to the Heine–Cantor theorem (continuous on a compact set implies uniformly continuous).  What does Bauldry call this theorem? Does he use the word compact explicitly?  What is the key property of that the proof uses? (Even if Bauldry's proof is sketch-level, identify the step where compactness or some equivalent property is invoked.)     "
},
{
  "id": "ex-mod6-br-7",
  "level": "2",
  "url": "ws-mod6-bridge-reading.html#ex-mod6-br-7",
  "type": "Checkpoint",
  "number": "5.7",
  "title": "Looking Ahead to Integration.",
  "body": " Looking Ahead to Integration     Identify one result in Bauldry §2.2 about uniform continuity that will be used in the treatment of the Riemann integral in Bauldry §2.4 (and Module 8 of this course). State the result and explain in one sentence how you expect it to enter the integration theory.  What is the first topic in MAT 5610 that builds directly on the material in Bauldry §2.2? (Scan the beginning of Bauldry §2.3 or §2.4 briefly if needed.)     "
},
{
  "id": "ex-mod6-br-8",
  "level": "2",
  "url": "ws-mod6-bridge-reading.html#ex-mod6-br-8",
  "type": "Checkpoint",
  "number": "5.8",
  "title": "Topology Preview.",
  "body": " Topology Preview   Bauldry's rigorous treatment of continuity in §2.2 makes implicit or explicit use of topological notions: open sets, closed sets, and compact sets. In MAT 5610 these will be developed carefully.  What does it mean for a subset of to be compact ? (Give an informal answer based on your reading; you are not expected to know the topology yet.)  How does compactness appear as a hypothesis in the theorems you have read in §2.2 (EVT, Heine–Cantor)? Why can these theorems fail on non-compact sets?     "
},
{
  "id": "ws-mod6-assessment",
  "level": "1",
  "url": "ws-mod6-assessment.html",
  "type": "Section",
  "number": "6",
  "title": "Module 6: Assessment",
  "body": " Module 6: Assessment  Submitted Proofs and Reflection — Estimated time: 40 minutes    This assessment has three parts. Parts 1 and 2 ask you to write complete mathematical proofs, submitted for feedback. Part 3 is a short reflection. Submit all three parts together as a single document (PDF or typed file) through the course management system.   Write-up standard. All proofs must be written in complete mathematical prose. Use the style modeled in the Worked Examples: announce your strategy, include scratch work (clearly labeled) before the formal proof, write in complete grammatical sentences, invoke each definition or theorem by name, and justify every step. Work consisting only of symbolic manipulations without explanation will not receive full credit.   A note on Part 2. Part 2 is a single required proof problem; there are no options to choose between. All students complete the same Part 2 problem.   Academic integrity. Your proofs must be your own work. You may refer to your notes, the textbooks, and the worked examples from this module. You may not collaborate with other students on the written proofs or use AI writing tools to draft your arguments.   Part 1: An - Limit Proof (Required) (Estimated time: 15 minutes)    Proving a Limit from the Definition   Prove that .  Your proof must have the following structure:   Scratch work. Compute and find the value of (in terms of ) that will make the proof work. Show the algebra explicitly.   Formal proof. State Let and Set . Assume and verify the chain of inequalities concluding .   Conclusion. Invoke the definition of limit by name.    (Hint: ; set .)       Part 2: Uniform Continuity (Required) (Estimated time: 20 minutes)    Proving Uniform Continuity   Prove that is uniformly continuous on .  Your proof must have the following structure:   Strategy. State that you will use the inequality for all .   Verify the key inequality. Prove that for all . (Hint: it suffices to prove that the square of the left side is at most the square of the right side when both are nonnegative. Assume without loss of generality ; then , and the inequality is equivalent to , i.e., , i.e., , which holds since .)   Formal uniform continuity proof. Given , set . Suppose with . Use the key inequality to conclude , and invoke the definition of uniform continuity by name.         Part 3: Reflection (Estimated time: 5 minutes)  Write 3–5 sentences for each question. These are graded for thoughtfulness, not for mathematical correctness.    The Sequence–Function Parallel   Compare the - definition of to the - definition of from Module 4. What is structurally identical between the two definitions? What is genuinely different?     Bauldry's Presentation   In the Bridge Reading you compared Zorn §3.1–3.4 to Bauldry §2.2. Identify one place where Bauldry's treatment in §2.2 is more compressed than Zorn's. What background knowledge does Bauldry assume that Zorn develops explicitly?     Looking Ahead to Module 8   Uniform continuity will appear in the proof that continuous functions are Riemann integrable (Module 8). Based on what you know now about uniform continuity, describe in two or three sentences how you expect uniform continuity to enter that argument. (A partial answer is: to approximate the integral, we need to control on small subintervals; uniform continuity gives us a single that works everywhere at once. Articulating this connection is the point.)      Assessment Rubric (Informational)   The following rubric describes how submitted proofs will be evaluated.    Grading Criteria        Criterion  Full credit  Partial credit  Minimal credit    Logical correctness  All steps are valid; the argument proves exactly the stated claim  Mostly correct with one fixable gap  Significant logical errors or wrong claim proved    - mechanics  found correctly in scratch work; chain of inequalities complete in formal proof  Correct but chain of inequalities has a gap  incorrect or formal proof missing    Uniform continuity reasoning  Key inequality verified; quantifiers in the definition correctly ordered  Correct approach but quantifier order not stated explicitly  Key inequality missing or uniform and pointwise continuity conflated    Mathematical prose  Complete grammatical sentences; strategy stated up front; theorems cited by name  Mostly prose with some missing connective sentences  Primarily symbolic with no connecting narrative    Reflection  Specific, thoughtful, and engages with the mathematical content  General but relevant observations  Vague or too brief to be informative     "
},
{
  "id": "assess-mod6-1",
  "level": "2",
  "url": "ws-mod6-assessment.html#assess-mod6-1",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "Proving a Limit from the Definition.",
  "body": " Proving a Limit from the Definition   Prove that .  Your proof must have the following structure:   Scratch work. Compute and find the value of (in terms of ) that will make the proof work. Show the algebra explicitly.   Formal proof. State Let and Set . Assume and verify the chain of inequalities concluding .   Conclusion. Invoke the definition of limit by name.    (Hint: ; set .)   "
},
{
  "id": "assess-mod6-2",
  "level": "2",
  "url": "ws-mod6-assessment.html#assess-mod6-2",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "Proving Uniform Continuity.",
  "body": " Proving Uniform Continuity   Prove that is uniformly continuous on .  Your proof must have the following structure:   Strategy. State that you will use the inequality for all .   Verify the key inequality. Prove that for all . (Hint: it suffices to prove that the square of the left side is at most the square of the right side when both are nonnegative. Assume without loss of generality ; then , and the inequality is equivalent to , i.e., , i.e., , which holds since .)   Formal uniform continuity proof. Given , set . Suppose with . Use the key inequality to conclude , and invoke the definition of uniform continuity by name.     "
},
{
  "id": "assess-mod6-r1",
  "level": "2",
  "url": "ws-mod6-assessment.html#assess-mod6-r1",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "The Sequence–Function Parallel.",
  "body": " The Sequence–Function Parallel   Compare the - definition of to the - definition of from Module 4. What is structurally identical between the two definitions? What is genuinely different?   "
},
{
  "id": "assess-mod6-r2",
  "level": "2",
  "url": "ws-mod6-assessment.html#assess-mod6-r2",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "Bauldry’s Presentation.",
  "body": " Bauldry's Presentation   In the Bridge Reading you compared Zorn §3.1–3.4 to Bauldry §2.2. Identify one place where Bauldry's treatment in §2.2 is more compressed than Zorn's. What background knowledge does Bauldry assume that Zorn develops explicitly?   "
},
{
  "id": "assess-mod6-r3",
  "level": "2",
  "url": "ws-mod6-assessment.html#assess-mod6-r3",
  "type": "Checkpoint",
  "number": "6.5",
  "title": "Looking Ahead to Module 8.",
  "body": " Looking Ahead to Module 8   Uniform continuity will appear in the proof that continuous functions are Riemann integrable (Module 8). Based on what you know now about uniform continuity, describe in two or three sentences how you expect uniform continuity to enter that argument. (A partial answer is: to approximate the integral, we need to control on small subintervals; uniform continuity gives us a single that works everywhere at once. Articulating this connection is the point.)   "
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
