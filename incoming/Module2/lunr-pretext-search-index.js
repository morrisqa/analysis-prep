var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-mod2-orientation",
  "level": "1",
  "url": "ws-mod2-orientation.html",
  "type": "Section",
  "number": "1",
  "title": "Module 2: The Real Number System",
  "body": " Module 2: The Real Number System  Orientation     State and apply the key properties of absolute value, and translate inequalities of the form into interval notation.    Prove and apply the Triangle Inequality; use it to bound expressions of the form .    Define upper bound, lower bound, supremum (least upper bound), and infimum (greatest lower bound); identify them for explicitly given sets.    State the Completeness Axiom and explain why it distinguishes from .    Use the -characterization of the supremum in a short proof.    Read a passage from Bauldry that invokes the Completeness Axiom or the Archimedean Property, and identify the role each plays in the argument.       In Module 1 you assembled the logical toolkit: quantifiers, proof strategies, and mathematical prose. This module turns to the object those tools will be applied to for the rest of the course: the real number system .  You already know that contains the rationals, the irrationals, and that it can be visualized as a number line. But real analysis depends on a much more specific fact about : it is complete . Informally, it has no gaps. The rationals do have gaps—the location of is a gap in —and those gaps are exactly what prevent you from doing analysis in . By the end of this module you will know precisely what completeness means and why it matters.  The self-assessment questions below are not graded . They are designed to help you locate yourself within the module and flag concepts that may need extra attention. Write informally; a sentence or two per question is fine.    Absolute Value as Distance   Compute each of the following, then give a one-sentence geometric interpretation of what the expression measures.    (for an arbitrary real number )       Irrationality   Is there a rational number whose square is exactly 2? Answer yes or no, and give a brief reason. (A full proof is not required here; a sentence explaining the key idea is enough.)     Upper Bounds   What does it mean for a real number to be an upper bound of a set ? Give one example of a set that has an upper bound and one example of a set that does not.     Supremum   If you have encountered the terms supremum or least upper bound before, write down what they mean in your own words. If this is new vocabulary, take a guess based on the phrase least upper bound : what property would distinguish the least upper bound from all other upper bounds?     Your Background   Have you seen absolute value inequalities and\/or the concept of supremum in a previous course? If so, how long ago and in what context? What felt most familiar just now, and what felt least familiar?      A Note from the Instructor  The two key ideas in this module are absolute value and completeness . Absolute value is a tool you will use in every single - and - proof from here forward: every definition of convergence, every definition of continuity, every definition of the derivative passes through it. If you are not yet fluent with the algebra of absolute value inequalities, that fluency is the most important thing this module gives you.  Completeness is the deeper idea. It is an axiom—a property we accept as the defining feature of —and it is the reason real analysis works. Every major theorem in Bauldry's Chapter 2 (the Archimedean Property, the Bolzano–Weierstrass Theorem, the Intermediate Value Theorem, the Extreme Value Theorem) ultimately rests on completeness. When you reach those theorems in MAT 5610, you will see the Completeness Axiom invoked again and again, sometimes explicitly and sometimes hidden one or two steps back. This module is where you build the vocabulary and the first proof techniques for working with it.    A Note on Pacing   A note on pacing. If you are coming in with prior real analysis experience, the absolute value material in Section 1.7 will likely feel familiar. Spend a few minutes on the study guide questions to confirm fluency, then focus your attention on the -characterization of the supremum (Section 1.8) and its use in proofs. That characterization is the technical heart of this module and the template for arguments you will write in every subsequent module. If analysis-style proofs are newer territory for you, budget extra time on Section 1.7 and the Worked Examples before moving to the practice set. The triangle inequality proof in the Worked Examples is worth reading carefully regardless of background—the technique of adding and comparing inequalities is used constantly.    Module Road Map (estimated time: 5 hours)       Component  Time  Purpose    Orientation (this document)  15 min  Goals, self-assessment, context    Video 1: Absolute Value and the Triangle Inequality  8 min  Core instruction via lightboard    Video 2: Bounds, Suprema, and Completeness  9 min  Core instruction via lightboard    Companion Reading and Study Guide  50 min  Zorn §1.7–1.9 with guided questions    Worked Examples  40 min  Annotated proof walkthroughs    Practice Problem Set  90 min  Scaffolded practice by difficulty    Bridge Reading Guide  35 min  Connecting Module 2 to Bauldry Ch. 2    Module Assessment  40 min  Submitted proofs and reflection     "
},
{
  "id": "obj-mod2",
  "level": "2",
  "url": "ws-mod2-orientation.html#obj-mod2",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   State and apply the key properties of absolute value, and translate inequalities of the form into interval notation.    Prove and apply the Triangle Inequality; use it to bound expressions of the form .    Define upper bound, lower bound, supremum (least upper bound), and infimum (greatest lower bound); identify them for explicitly given sets.    State the Completeness Axiom and explain why it distinguishes from .    Use the -characterization of the supremum in a short proof.    Read a passage from Bauldry that invokes the Completeness Axiom or the Archimedean Property, and identify the role each plays in the argument.    "
},
{
  "id": "ex-mod2-sa-1",
  "level": "2",
  "url": "ws-mod2-orientation.html#ex-mod2-sa-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "Absolute Value as Distance.",
  "body": " Absolute Value as Distance   Compute each of the following, then give a one-sentence geometric interpretation of what the expression measures.    (for an arbitrary real number )     "
},
{
  "id": "ex-mod2-sa-2",
  "level": "2",
  "url": "ws-mod2-orientation.html#ex-mod2-sa-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "Irrationality.",
  "body": " Irrationality   Is there a rational number whose square is exactly 2? Answer yes or no, and give a brief reason. (A full proof is not required here; a sentence explaining the key idea is enough.)   "
},
{
  "id": "ex-mod2-sa-3",
  "level": "2",
  "url": "ws-mod2-orientation.html#ex-mod2-sa-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "Upper Bounds.",
  "body": " Upper Bounds   What does it mean for a real number to be an upper bound of a set ? Give one example of a set that has an upper bound and one example of a set that does not.   "
},
{
  "id": "ex-mod2-sa-4",
  "level": "2",
  "url": "ws-mod2-orientation.html#ex-mod2-sa-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "Supremum.",
  "body": " Supremum   If you have encountered the terms supremum or least upper bound before, write down what they mean in your own words. If this is new vocabulary, take a guess based on the phrase least upper bound : what property would distinguish the least upper bound from all other upper bounds?   "
},
{
  "id": "ex-mod2-sa-5",
  "level": "2",
  "url": "ws-mod2-orientation.html#ex-mod2-sa-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Your Background.",
  "body": " Your Background   Have you seen absolute value inequalities and\/or the concept of supremum in a previous course? If so, how long ago and in what context? What felt most familiar just now, and what felt least familiar?   "
},
{
  "id": "ws-mod2-study-guide",
  "level": "1",
  "url": "ws-mod2-study-guide.html",
  "type": "Section",
  "number": "2",
  "title": "Module 2: Companion Reading and Study Guide",
  "body": " Module 2: Companion Reading and Study Guide  Zorn §1.7–1.9 — Estimated time: 50 minutes   This guide accompanies three sections of Zorn's Understanding Real Analysis . Section 1.1 is listed in the module syllabus as background reading: skim it to orient yourself to the number systems and to remind yourself of the proof that , which is a model contradiction argument. The active reading and guided questions below begin with Section 1.7, where the analytic content starts.  Read each section before working its questions. The questions are designed to be answered with the text open in front of you.     Section 1.7: Absolute Values (Zorn pp. 62–65)  This section introduces absolute value as a distance function and establishes the properties you will use in every subsequent module. Pay particular attention to Theorem 1.23(c) (which converts an absolute value inequality into an interval) and Theorem 1.24 (the Triangle Inequality).    Absolute Value as Distance   For each expression, (i) compute the value and (ii) describe in one sentence what the expression measures geometrically on the number line.   where  for a general      (a) ; this is the distance between and on the number line. (b) ; the distance from to . (c) is the distance from to , regardless of which side of the point lies on.     Converting Absolute Value Inequalities   Theorem 1.23(c) says: (for ). Use this to rewrite each inequality as a simple interval, then verify your answer geometrically by identifying the center and radius of the interval.         (a) ; center , radius . (b) ; center , radius . (c) ; center , radius .     Key Lemma for the Triangle Inequality   One step in Zorn's proof of the Triangle Inequality uses the fact that for any real number , Prove this directly from the definition of absolute value (considering the cases and separately).    When : , so the right inequality is (trivially true) and the left inequality is (true since ). Handle analogously.     Applying the Triangle Inequality   Let . Apply the Triangle Inequality to the expression to obtain an upper bound on in terms of and .  This result is sometimes called the metric inequality for : the distance from to is at most the sum of the distances from to and from to .     by the Triangle Inequality applied with and .      Section 1.8: Bounds (Zorn pp. 67–73)  This section introduces the vocabulary of upper and lower bounds and defines the supremum (least upper bound) and infimum (greatest lower bound). Two things to focus on: (1) the definition of supremum requires two conditions, and both matter; (2) the -characterization of the supremum is the key proof technique you will use repeatedly.    Identifying Bounds   For each set, determine whether it is bounded above, bounded below, or both. If it is bounded above, give an example of an upper bound (not necessarily the least one).          (a) Bounded below by 1 (or 0); not bounded above. (b) Bounded above and below: all elements satisfy , so is a lower bound and is an upper bound. (c) Bounded above by and below by ; this is the interval . (d) Bounded above by and below by .     Finding Suprema and Infima   For each set in the previous exercise that is bounded above, identify . For each set that is bounded below, identify . (Do not prove your answers yet; just identify them and briefly explain your reasoning.)    (a) (achieved at ); no supremum. (b) (at , odd); (at , even, giving —actually the infimum is since the most negative term is ). (c) and , both achieved. (d) (limit, never achieved); (at , giving , which is achieved).     The Two Conditions for Supremum   According to Zorn's definition, a real number equals if and only if two conditions hold. State both conditions in your own words (not just symbols), and explain why both are needed. In particular: why is it not enough to say that is an upper bound of ?     The -Characterization of the Supremum   Zorn states (or you can derive) the following equivalent condition: if and only if  is an upper bound of , and  for every , there exists with .  Condition (ii) is called the -characterization. In plain English, what does condition (ii) say about how relates to the elements of ? Why does it guarantee that no number smaller than can be an upper bound?      Section 1.9: Completeness (Zorn pp. 74–82)  Section 1.9 delivers the central axiom of real analysis. Read this section carefully. The key question to keep in mind is: what would go wrong if we tried to do analysis in instead of ?     Why is Incomplete   Consider the set .  Explain why is nonempty and bounded above (as a subset of ).  Explain why has no supremum in . (Hint: whatever rational upper bound you propose, you can always find a closer rational that is still above —or use the fact that directly.)  Where does the supremum of live? What is its value?      (a) is nonempty: since . It is bounded above in : for example, and , so for all . (b) Suppose were a supremum of . Then (since is an upper bound). But would mean , contradiction. And if , one can find a rational strictly between and , contradicting being the least upper bound. (c) The supremum is .     Stating the Completeness Axiom   Write the Completeness Axiom (also called the Least Upper Bound Property) in your own words. Your statement should make clear: what kind of set the axiom applies to, and what the axiom guarantees.  Then check: does your statement apply to the set in the previous exercise? What does it tell you?     Completeness and the Archimedean Property   Zorn uses the Completeness Axiom to prove the Archimedean Property of : for every , there exists with .  Read the proof (or sketch) in Zorn's text. What set is considered, and what does the Completeness Axiom apply to? Where is the contradiction reached? Write a two- or three-sentence summary of the argument in your own words.     Using the Archimedean Property   The Archimedean Property implies the following useful fact: for every , there exists such that .  Explain why this follows from the Archimedean Property. (Hint: apply the Archimedean Property to the real number .)  Why will this fact be useful when we work with sequences in Module 4?    By the Archimedean Property applied to , there exists with . Since , this gives . In Module 4, this will allow us to find, for any , an index beyond which terms of sequences like lie within of their limit.    "
},
{
  "id": "ex-mod2-sg-17-1",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-17-1",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "Absolute Value as Distance.",
  "body": " Absolute Value as Distance   For each expression, (i) compute the value and (ii) describe in one sentence what the expression measures geometrically on the number line.   where  for a general      (a) ; this is the distance between and on the number line. (b) ; the distance from to . (c) is the distance from to , regardless of which side of the point lies on.   "
},
{
  "id": "ex-mod2-sg-17-2",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-17-2",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "Converting Absolute Value Inequalities.",
  "body": " Converting Absolute Value Inequalities   Theorem 1.23(c) says: (for ). Use this to rewrite each inequality as a simple interval, then verify your answer geometrically by identifying the center and radius of the interval.         (a) ; center , radius . (b) ; center , radius . (c) ; center , radius .   "
},
{
  "id": "ex-mod2-sg-17-3",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-17-3",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "Key Lemma for the Triangle Inequality.",
  "body": " Key Lemma for the Triangle Inequality   One step in Zorn's proof of the Triangle Inequality uses the fact that for any real number , Prove this directly from the definition of absolute value (considering the cases and separately).    When : , so the right inequality is (trivially true) and the left inequality is (true since ). Handle analogously.   "
},
{
  "id": "ex-mod2-sg-17-4",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-17-4",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "Applying the Triangle Inequality.",
  "body": " Applying the Triangle Inequality   Let . Apply the Triangle Inequality to the expression to obtain an upper bound on in terms of and .  This result is sometimes called the metric inequality for : the distance from to is at most the sum of the distances from to and from to .     by the Triangle Inequality applied with and .   "
},
{
  "id": "ex-mod2-sg-18-1",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-18-1",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "Identifying Bounds.",
  "body": " Identifying Bounds   For each set, determine whether it is bounded above, bounded below, or both. If it is bounded above, give an example of an upper bound (not necessarily the least one).          (a) Bounded below by 1 (or 0); not bounded above. (b) Bounded above and below: all elements satisfy , so is a lower bound and is an upper bound. (c) Bounded above by and below by ; this is the interval . (d) Bounded above by and below by .   "
},
{
  "id": "ex-mod2-sg-18-2",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-18-2",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "Finding Suprema and Infima.",
  "body": " Finding Suprema and Infima   For each set in the previous exercise that is bounded above, identify . For each set that is bounded below, identify . (Do not prove your answers yet; just identify them and briefly explain your reasoning.)    (a) (achieved at ); no supremum. (b) (at , odd); (at , even, giving —actually the infimum is since the most negative term is ). (c) and , both achieved. (d) (limit, never achieved); (at , giving , which is achieved).   "
},
{
  "id": "ex-mod2-sg-18-3",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-18-3",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "The Two Conditions for Supremum.",
  "body": " The Two Conditions for Supremum   According to Zorn's definition, a real number equals if and only if two conditions hold. State both conditions in your own words (not just symbols), and explain why both are needed. In particular: why is it not enough to say that is an upper bound of ?   "
},
{
  "id": "ex-mod2-sg-18-4",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-18-4",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "The <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-Characterization of the Supremum.",
  "body": " The -Characterization of the Supremum   Zorn states (or you can derive) the following equivalent condition: if and only if  is an upper bound of , and  for every , there exists with .  Condition (ii) is called the -characterization. In plain English, what does condition (ii) say about how relates to the elements of ? Why does it guarantee that no number smaller than can be an upper bound?   "
},
{
  "id": "ex-mod2-sg-19-1",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-19-1",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "Why <span class=\"process-math\">\\(\\Q\\)<\/span> is Incomplete.",
  "body": " Why is Incomplete   Consider the set .  Explain why is nonempty and bounded above (as a subset of ).  Explain why has no supremum in . (Hint: whatever rational upper bound you propose, you can always find a closer rational that is still above —or use the fact that directly.)  Where does the supremum of live? What is its value?      (a) is nonempty: since . It is bounded above in : for example, and , so for all . (b) Suppose were a supremum of . Then (since is an upper bound). But would mean , contradiction. And if , one can find a rational strictly between and , contradicting being the least upper bound. (c) The supremum is .   "
},
{
  "id": "ex-mod2-sg-19-2",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-19-2",
  "type": "Checkpoint",
  "number": "2.10",
  "title": "Stating the Completeness Axiom.",
  "body": " Stating the Completeness Axiom   Write the Completeness Axiom (also called the Least Upper Bound Property) in your own words. Your statement should make clear: what kind of set the axiom applies to, and what the axiom guarantees.  Then check: does your statement apply to the set in the previous exercise? What does it tell you?   "
},
{
  "id": "ex-mod2-sg-19-3",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-19-3",
  "type": "Checkpoint",
  "number": "2.11",
  "title": "Completeness and the Archimedean Property.",
  "body": " Completeness and the Archimedean Property   Zorn uses the Completeness Axiom to prove the Archimedean Property of : for every , there exists with .  Read the proof (or sketch) in Zorn's text. What set is considered, and what does the Completeness Axiom apply to? Where is the contradiction reached? Write a two- or three-sentence summary of the argument in your own words.   "
},
{
  "id": "ex-mod2-sg-19-4",
  "level": "2",
  "url": "ws-mod2-study-guide.html#ex-mod2-sg-19-4",
  "type": "Checkpoint",
  "number": "2.12",
  "title": "Using the Archimedean Property.",
  "body": " Using the Archimedean Property   The Archimedean Property implies the following useful fact: for every , there exists such that .  Explain why this follows from the Archimedean Property. (Hint: apply the Archimedean Property to the real number .)  Why will this fact be useful when we work with sequences in Module 4?    By the Archimedean Property applied to , there exists with . Since , this gives . In Module 4, this will allow us to find, for any , an index beyond which terms of sequences like lie within of their limit.   "
},
{
  "id": "ws-mod2-worked-examples",
  "level": "1",
  "url": "ws-mod2-worked-examples.html",
  "type": "Section",
  "number": "3",
  "title": "Module 2: Worked Examples",
  "body": " Module 2: Worked Examples  Annotated Proof Walkthroughs — Estimated time: 40 minutes   Read each example slowly, attending to the marginal annotations and the structure of the argument as much as to the algebra. The goal is not just to see what the answer is, but to internalize the proof strategy —particularly the template in Example 3, which you will reproduce in slightly varied form on the assessment.     Example 1: Absolute Value Algebra   Solve the inequality and express the solution as an interval. Interpret the solution geometrically.     Method. We apply Theorem 1.23(c): . Here and .   Step 1: Convert to a compound inequality.    The solution set is the open interval .   Geometric interpretation. The expression (by the multiplicative property of absolute value). So the inequality says , i.e., : the set of points within distance of the center . This gives the interval , confirming our answer.   What to notice. The conversion rule is mechanical once you identify and . The geometric rewrite (center plus\/minus radius) is useful for building intuition and for checking answers.      Example 2: Proving the Triangle Inequality   Prove: for all , Then deduce the reverse triangle inequality : .     Proof of the Triangle Inequality.   We need a key lemma first.   Lemma. For any : .   Proof of Lemma. Consider two cases.  Case 1: . Then , so the right inequality is , which holds. For the left: , so . □  Case 2: . Then , so , giving (equality). For the right: , so . □   Now the main proof. Apply the Lemma to both and : Adding these inequalities gives This says by Theorem 1.23(c) (with ).    What to notice. The proof has three moves: (1) establish the lemma by cases, (2) apply the lemma to each variable separately, (3) add the inequalities and convert back using Theorem 1.23(c). Each step is short; the proof works because we set up the right lemma first.   Proof of the Reverse Triangle Inequality.   We want to show and (together these say ).  For the first: write and apply the Triangle Inequality: Rearranging: .  For the second: interchange the roles of and in the same argument (or use ):   Since both and are at most , and one of them equals , we have .    What to notice. The reverse triangle inequality is proved by applying the ordinary triangle inequality cleverly—splitting one of the absolute values as a sum and then rearranging. When you need a lower bound on in a proof, this inequality is often the right tool.      Example 3: Proving a Supremum   Let . Prove that .     Scratch work (this section is part of the solution process; always do this before writing the proof).   First, note that . The elements increase toward 1 but never reach it, so 1 is a natural candidate for the supremum.  To confirm, we need to verify two things:  (i) 1 is an upper bound. For all , , so . ✓  (ii) 1 is the least upper bound ( -characterization). Given , we need such that , i.e., , i.e., . By the Archimedean Property, such exists.  Now we write the formal proof.   Proof.   We show that by verifying the two conditions in the definition.   Condition (i): 1 is an upper bound of . Let . Then for some . Since , we have , so , and therefore . Since was arbitrary, is an upper bound of .   Condition (ii): No number smaller than 1 is an upper bound ( -characterization). Let . We must find an element of greater than .  By the Archimedean Property, there exists such that . For this , , so The element belongs to and exceeds , so is not an upper bound of . Since was arbitrary, no number strictly less than 1 is an upper bound.  By conditions (i) and (ii), .    What to notice. This proof has a fixed template that you should internalize: first show the candidate is an upper bound, then use the -characterization to show nothing smaller works. The -characterization step always has the same shape: given , exhibit a specific element of in the interval . In this example the Archimedean Property supplies that element; in other examples you may need to do more algebra to find it. The assessment asks you to apply this template to a different set.    "
},
{
  "id": "ex-mod2-we-1",
  "level": "2",
  "url": "ws-mod2-worked-examples.html#ex-mod2-we-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "Example 1: Absolute Value Algebra.",
  "body": " Example 1: Absolute Value Algebra   Solve the inequality and express the solution as an interval. Interpret the solution geometrically.     Method. We apply Theorem 1.23(c): . Here and .   Step 1: Convert to a compound inequality.    The solution set is the open interval .   Geometric interpretation. The expression (by the multiplicative property of absolute value). So the inequality says , i.e., : the set of points within distance of the center . This gives the interval , confirming our answer.   What to notice. The conversion rule is mechanical once you identify and . The geometric rewrite (center plus\/minus radius) is useful for building intuition and for checking answers.   "
},
{
  "id": "ex-mod2-we-2",
  "level": "2",
  "url": "ws-mod2-worked-examples.html#ex-mod2-we-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "Example 2: Proving the Triangle Inequality.",
  "body": " Example 2: Proving the Triangle Inequality   Prove: for all , Then deduce the reverse triangle inequality : .     Proof of the Triangle Inequality.   We need a key lemma first.   Lemma. For any : .   Proof of Lemma. Consider two cases.  Case 1: . Then , so the right inequality is , which holds. For the left: , so . □  Case 2: . Then , so , giving (equality). For the right: , so . □   Now the main proof. Apply the Lemma to both and : Adding these inequalities gives This says by Theorem 1.23(c) (with ).    What to notice. The proof has three moves: (1) establish the lemma by cases, (2) apply the lemma to each variable separately, (3) add the inequalities and convert back using Theorem 1.23(c). Each step is short; the proof works because we set up the right lemma first.   Proof of the Reverse Triangle Inequality.   We want to show and (together these say ).  For the first: write and apply the Triangle Inequality: Rearranging: .  For the second: interchange the roles of and in the same argument (or use ):   Since both and are at most , and one of them equals , we have .    What to notice. The reverse triangle inequality is proved by applying the ordinary triangle inequality cleverly—splitting one of the absolute values as a sum and then rearranging. When you need a lower bound on in a proof, this inequality is often the right tool.   "
},
{
  "id": "ex-mod2-we-3",
  "level": "2",
  "url": "ws-mod2-worked-examples.html#ex-mod2-we-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "Example 3: Proving a Supremum.",
  "body": " Example 3: Proving a Supremum   Let . Prove that .     Scratch work (this section is part of the solution process; always do this before writing the proof).   First, note that . The elements increase toward 1 but never reach it, so 1 is a natural candidate for the supremum.  To confirm, we need to verify two things:  (i) 1 is an upper bound. For all , , so . ✓  (ii) 1 is the least upper bound ( -characterization). Given , we need such that , i.e., , i.e., . By the Archimedean Property, such exists.  Now we write the formal proof.   Proof.   We show that by verifying the two conditions in the definition.   Condition (i): 1 is an upper bound of . Let . Then for some . Since , we have , so , and therefore . Since was arbitrary, is an upper bound of .   Condition (ii): No number smaller than 1 is an upper bound ( -characterization). Let . We must find an element of greater than .  By the Archimedean Property, there exists such that . For this , , so The element belongs to and exceeds , so is not an upper bound of . Since was arbitrary, no number strictly less than 1 is an upper bound.  By conditions (i) and (ii), .    What to notice. This proof has a fixed template that you should internalize: first show the candidate is an upper bound, then use the -characterization to show nothing smaller works. The -characterization step always has the same shape: given , exhibit a specific element of in the interval . In this example the Archimedean Property supplies that element; in other examples you may need to do more algebra to find it. The assessment asks you to apply this template to a different set.   "
},
{
  "id": "ws-mod2-practice-set",
  "level": "1",
  "url": "ws-mod2-practice-set.html",
  "type": "Section",
  "number": "4",
  "title": "Module 2: Practice Problem Set",
  "body": " Module 2: Practice Problem Set  Estimated time: 90 minutes   Problems are labeled (Foundational), (Standard), and (Challenge). Work in order within each level; later problems in a level often build on earlier ones.  These problems are not submitted, but you should write out complete solutions. For any problem that asks you to prove something, apply the standards from the Worked Examples: complete sentences, explicit quantifiers, every step justified.     Foundational Problems    Absolute Value Computations   Compute each value. In each case, write out the definition of absolute value explicitly (i.e., note whether the argument is negative or nonnegative) before simplifying.     (leave in terms of )      (a) . (b) ; alternatively . (c) . (d) Since , we have , so .     Interval Translation   Rewrite each absolute value inequality as an interval. Identify the center and radius of each interval.     (for and )      (a) ; center 5, radius 3. (b) ; center , radius 1. (c) ; center 2, radius 3. (d) ; center , radius .     Identifying Bounds   For each set, determine whether it is bounded above, bounded below, or both. If it has an upper bound, give one; if it has a lower bound, give one. Do not yet find the exact supremum or infimum.     The interval      (a) Bounded above by 2 (at ); bounded below by 0 (all terms are positive). (b) Bounded: , so is a lower bound and is an upper bound. (c) The terms alternate sign and grow in magnitude ( ); neither bounded above nor below. (d) Bounded above by 1 and below by 0.     Identifying Suprema and Infima   For each set, identify and (if they exist). State whether the supremum or infimum is attained (i.e., belongs to ). Do not write a formal proof; a clear explanation is sufficient.          (a) (attained at ); (not attained; the terms approach 0). (b) , so and , neither attained. (c) (attained); (not attained). (d) Terms are , increasing to 1; (not attained); (attained at ).      Standard Problems    A Triangle Inequality Application   Prove that for any , This is sometimes called the metric inequality for : the distance from to is at most the sum of the distances from to and from to .    Write and apply the Triangle Inequality directly.     Bounding a Product   Suppose .  Use the Triangle Inequality (or Theorem 1.23(c)) to show that . (Hint: write .)  Using part (a), prove that . (Hint: factor and use .)  Conclude: if , then .      For (a): .     Proving a Supremum with the -Characterization   Let . Prove that .  Your proof must follow the two-step structure from Worked Example 3: first show 1 is an upper bound, then use the -characterization to show that no smaller number is an upper bound. Include scratch work before the formal proof.    To show , rearrange to find a condition on , then use the Archimedean Property to guarantee such exists.     Supremum of a Set Defined by an Inequality   Let .  Identify and . (No proof required; explain your reasoning in one or two sentences.)  Prove your answer for by verifying both conditions in the definition of supremum. For condition (ii), you may use the fact that between any real number strictly less than and itself there exist real numbers in . (You do not need to construct an explicit element; the density of near is sufficient.)        Challenge Problems    Uniqueness of the Supremum   Prove that if is a nonempty subset of and both and satisfy the definition of , then . In other words, the supremum, if it exists, is unique.    Since both and are upper bounds of , and both are least upper bounds, use the second condition of the definition to show and .     The Archimedean Property from Completeness   Assume the Completeness Axiom. Prove the Archimedean Property: for every , there exists such that .  (This is the argument you will read in Bauldry as Theorem 2.3. Working through it yourself before the Bridge Reading will make Bauldry's proof much easier to follow.)    Suppose, for contradiction, that no such exists, i.e., that is an upper bound for . Apply the Completeness Axiom to to obtain . Then consider : use the -characterization with to derive a contradiction.    "
},
{
  "id": "ex-mod2-ps-F1",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-F1",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Absolute Value Computations.",
  "body": " Absolute Value Computations   Compute each value. In each case, write out the definition of absolute value explicitly (i.e., note whether the argument is negative or nonnegative) before simplifying.     (leave in terms of )      (a) . (b) ; alternatively . (c) . (d) Since , we have , so .   "
},
{
  "id": "ex-mod2-ps-F2",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-F2",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Interval Translation.",
  "body": " Interval Translation   Rewrite each absolute value inequality as an interval. Identify the center and radius of each interval.     (for and )      (a) ; center 5, radius 3. (b) ; center , radius 1. (c) ; center 2, radius 3. (d) ; center , radius .   "
},
{
  "id": "ex-mod2-ps-F3",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-F3",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Identifying Bounds.",
  "body": " Identifying Bounds   For each set, determine whether it is bounded above, bounded below, or both. If it has an upper bound, give one; if it has a lower bound, give one. Do not yet find the exact supremum or infimum.     The interval      (a) Bounded above by 2 (at ); bounded below by 0 (all terms are positive). (b) Bounded: , so is a lower bound and is an upper bound. (c) The terms alternate sign and grow in magnitude ( ); neither bounded above nor below. (d) Bounded above by 1 and below by 0.   "
},
{
  "id": "ex-mod2-ps-F4",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-F4",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Identifying Suprema and Infima.",
  "body": " Identifying Suprema and Infima   For each set, identify and (if they exist). State whether the supremum or infimum is attained (i.e., belongs to ). Do not write a formal proof; a clear explanation is sufficient.          (a) (attained at ); (not attained; the terms approach 0). (b) , so and , neither attained. (c) (attained); (not attained). (d) Terms are , increasing to 1; (not attained); (attained at ).   "
},
{
  "id": "ex-mod2-ps-S1",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-S1",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> A Triangle Inequality Application.",
  "body": " A Triangle Inequality Application   Prove that for any , This is sometimes called the metric inequality for : the distance from to is at most the sum of the distances from to and from to .    Write and apply the Triangle Inequality directly.   "
},
{
  "id": "ex-mod2-ps-S2",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-S2",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Bounding a Product.",
  "body": " Bounding a Product   Suppose .  Use the Triangle Inequality (or Theorem 1.23(c)) to show that . (Hint: write .)  Using part (a), prove that . (Hint: factor and use .)  Conclude: if , then .      For (a): .   "
},
{
  "id": "ex-mod2-ps-S3",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-S3",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Proving a Supremum with the <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-Characterization.",
  "body": " Proving a Supremum with the -Characterization   Let . Prove that .  Your proof must follow the two-step structure from Worked Example 3: first show 1 is an upper bound, then use the -characterization to show that no smaller number is an upper bound. Include scratch work before the formal proof.    To show , rearrange to find a condition on , then use the Archimedean Property to guarantee such exists.   "
},
{
  "id": "ex-mod2-ps-S4",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-S4",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Supremum of a Set Defined by an Inequality.",
  "body": " Supremum of a Set Defined by an Inequality   Let .  Identify and . (No proof required; explain your reasoning in one or two sentences.)  Prove your answer for by verifying both conditions in the definition of supremum. For condition (ii), you may use the fact that between any real number strictly less than and itself there exist real numbers in . (You do not need to construct an explicit element; the density of near is sufficient.)     "
},
{
  "id": "ex-mod2-ps-C1",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-C1",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> Uniqueness of the Supremum.",
  "body": " Uniqueness of the Supremum   Prove that if is a nonempty subset of and both and satisfy the definition of , then . In other words, the supremum, if it exists, is unique.    Since both and are upper bounds of , and both are least upper bounds, use the second condition of the definition to show and .   "
},
{
  "id": "ex-mod2-ps-C2",
  "level": "2",
  "url": "ws-mod2-practice-set.html#ex-mod2-ps-C2",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> The Archimedean Property from Completeness.",
  "body": " The Archimedean Property from Completeness   Assume the Completeness Axiom. Prove the Archimedean Property: for every , there exists such that .  (This is the argument you will read in Bauldry as Theorem 2.3. Working through it yourself before the Bridge Reading will make Bauldry's proof much easier to follow.)    Suppose, for contradiction, that no such exists, i.e., that is an upper bound for . Apply the Completeness Axiom to to obtain . Then consider : use the -characterization with to derive a contradiction.   "
},
{
  "id": "ws-mod2-bridge-reading",
  "level": "1",
  "url": "ws-mod2-bridge-reading.html",
  "type": "Section",
  "number": "5",
  "title": "Module 2: Bridge Reading Guide",
  "body": " Module 2: Bridge Reading Guide  Bauldry §1.1 and §2.1 — Estimated time: 35 minutes   Every module ends with a bridge reading in Bauldry's Introduction to Real Analysis . These readings serve one purpose: to orient you toward MAT 5610 by showing you how the material you just learned looks in the course's primary text. Bauldry's style is more compressed than Zorn's. A definition that takes Zorn half a page may occupy a single sentence in Bauldry. The goal is not to master Bauldry yet, but to begin reading him fluently.   For this module, read: Bauldry §1.1 (pp. 1–7, informal overview) and §2.1 (pp. 37–51, the formal foundations of ). Section 1.1 is a casual warmup. The real work is §2.1.     The Completeness Axiom in Bauldry  Bauldry presents the real number system as a complete ordered field. The Completeness Axiom appears in §2.1 as one of the axioms that defines ; it is not derived from anything more basic.    Locating the Completeness Axiom   Find the Completeness Axiom in Bauldry §2.1.  Copy Bauldry's exact statement of the axiom (one or two sentences).  Compare it to Zorn's statement (§1.9). Are the wordings identical? If not, what differs? Are the two statements logically equivalent?  Bauldry presents the Completeness Axiom as an axiom . What does that mean for how it can be used in proofs—do you need to justify it, or can you invoke it directly?        The Archimedean Order Property  Theorem 2.3 in Bauldry is the Archimedean Order Property. In the Module 1 assessment you were asked to describe its proof structure in retrospect; now you will read it carefully.    Reading Bauldry's Proof of Theorem 2.3   Read the statement and proof of Bauldry's Theorem 2.3.  State the theorem in your own words. What property of does it assert?  Identify the proof strategy. (One of the strategies from Module 1: direct proof, contrapositive, or contradiction?)  What set does Bauldry construct in the proof, and why is the Completeness Axiom applicable to it?  What is the contradiction that ends the proof? State it in one sentence.       Comparing to Your Practice Set Work   Practice Set Problem 2 asked you to prove the Archimedean Property yourself. Compare your proof to Bauldry's.  Are the logical structures identical, or did Bauldry organize the argument differently?  Bauldry's proof is likely more compressed than what you wrote. Identify one step in Bauldry that you had to fill in or unpack when reading it. What implicit reasoning did Bauldry omit?  (If you did not attempt the challenge problem, answer (b) only, and read your own hint against Bauldry's proof.)      Density of in  Immediately following the Archimedean Property, Bauldry proves that is dense in : between any two distinct real numbers there is a rational number. This result requires both the Archimedean Property and the Completeness Axiom.    Density of   Locate Bauldry's statement and proof (or sketch) of the density of in .  State the result precisely: what does it say, and what are the hypotheses?  Why does this result require the Archimedean Property (and not just the Completeness Axiom alone)?  In plain English, why does density of imply that is not a thin or sparse subset of , even though is uncountable?        Where Does Completeness Appear in Bauldry Chapter 2?   Scan the section headings and theorem statements in the rest of Bauldry §2.1 and beyond. Find at least two theorems or results (other than the Archimedean Property and density) where the Completeness Axiom is invoked, either directly or through one of its consequences.  For each result you find: state its name or number, and write one sentence explaining in what way completeness enters the argument. (You are not expected to read the full proofs yet; identifying where completeness is needed is enough.)    "
},
{
  "id": "ex-mod2-br-1",
  "level": "2",
  "url": "ws-mod2-bridge-reading.html#ex-mod2-br-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "Locating the Completeness Axiom.",
  "body": " Locating the Completeness Axiom   Find the Completeness Axiom in Bauldry §2.1.  Copy Bauldry's exact statement of the axiom (one or two sentences).  Compare it to Zorn's statement (§1.9). Are the wordings identical? If not, what differs? Are the two statements logically equivalent?  Bauldry presents the Completeness Axiom as an axiom . What does that mean for how it can be used in proofs—do you need to justify it, or can you invoke it directly?     "
},
{
  "id": "ex-mod2-br-2",
  "level": "2",
  "url": "ws-mod2-bridge-reading.html#ex-mod2-br-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "Reading Bauldry’s Proof of Theorem 2.3.",
  "body": " Reading Bauldry's Proof of Theorem 2.3   Read the statement and proof of Bauldry's Theorem 2.3.  State the theorem in your own words. What property of does it assert?  Identify the proof strategy. (One of the strategies from Module 1: direct proof, contrapositive, or contradiction?)  What set does Bauldry construct in the proof, and why is the Completeness Axiom applicable to it?  What is the contradiction that ends the proof? State it in one sentence.     "
},
{
  "id": "ex-mod2-br-3",
  "level": "2",
  "url": "ws-mod2-bridge-reading.html#ex-mod2-br-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "Comparing to Your Practice Set Work.",
  "body": " Comparing to Your Practice Set Work   Practice Set Problem 2 asked you to prove the Archimedean Property yourself. Compare your proof to Bauldry's.  Are the logical structures identical, or did Bauldry organize the argument differently?  Bauldry's proof is likely more compressed than what you wrote. Identify one step in Bauldry that you had to fill in or unpack when reading it. What implicit reasoning did Bauldry omit?  (If you did not attempt the challenge problem, answer (b) only, and read your own hint against Bauldry's proof.)   "
},
{
  "id": "ex-mod2-br-4",
  "level": "2",
  "url": "ws-mod2-bridge-reading.html#ex-mod2-br-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "Density of <span class=\"process-math\">\\(\\Q\\)<\/span>.",
  "body": " Density of   Locate Bauldry's statement and proof (or sketch) of the density of in .  State the result precisely: what does it say, and what are the hypotheses?  Why does this result require the Archimedean Property (and not just the Completeness Axiom alone)?  In plain English, why does density of imply that is not a thin or sparse subset of , even though is uncountable?     "
},
{
  "id": "ex-mod2-br-5",
  "level": "2",
  "url": "ws-mod2-bridge-reading.html#ex-mod2-br-5",
  "type": "Checkpoint",
  "number": "5.5",
  "title": "Where Does Completeness Appear in Bauldry Chapter 2?",
  "body": " Where Does Completeness Appear in Bauldry Chapter 2?   Scan the section headings and theorem statements in the rest of Bauldry §2.1 and beyond. Find at least two theorems or results (other than the Archimedean Property and density) where the Completeness Axiom is invoked, either directly or through one of its consequences.  For each result you find: state its name or number, and write one sentence explaining in what way completeness enters the argument. (You are not expected to read the full proofs yet; identifying where completeness is needed is enough.)   "
},
{
  "id": "ws-mod2-assessment",
  "level": "1",
  "url": "ws-mod2-assessment.html",
  "type": "Section",
  "number": "6",
  "title": "Module 2: Assessment",
  "body": " Module 2: Assessment  Submitted Proofs and Reflection — Estimated time: 40 minutes    This assessment has three parts. Parts 1 and 2 ask you to write complete mathematical proofs, submitted for feedback. Part 3 is a short reflection. Submit all three parts together as a single document (PDF or typed file) through the course management system.   Write-up standard. All proofs must be written in complete mathematical prose. Use the style modeled in the Worked Examples: include scratch work (clearly labeled) before the formal proof, announce your strategy, write in complete grammatical sentences, and justify every step. Work consisting only of symbolic manipulations without explanation will not receive full credit.   A note on Part 2. All students complete all three parts. For Part 2, choose the option that best matches your background: if you have prior real analysis experience, challenge yourself with Option B. If this is newer territory, Option A is the right starting point.   Academic integrity. Your proofs must be your own work. You may refer to your notes, the textbooks, and the worked examples from this module. You may not collaborate with other students on the written proofs or use AI writing tools to draft your arguments.   Part 1: Core Proof (Required) (Estimated time: 20 minutes)  Consider the set     Analyzing the Set   Factor the inequality and determine exactly which real numbers belong to . (That is: what familiar interval is ?)  Show your algebra clearly. This scratch work does not need to be in formal proof style; it is the analysis step that precedes the proof.    Factor as and recall that a product of two real numbers is negative exactly when the factors have opposite signs.     Proving the Supremum   Using your work in the previous problem, prove that .  Your proof must have the following structure:   Scratch work (clearly labeled). Verify that 2 is an upper bound. Then: given , find an explicit element of greater than (for small enough ). Show the algebra.   Formal proof. Using your scratch work, write a complete proof that by verifying both conditions in the definition of supremum. The proof should be written in complete mathematical prose.      For the -characterization step: you need to show that for any , the point belongs to (at least when is small). To verify , compute and show it is negative by factoring as . Note that (since for ) and .     The Infimum   State (without proof) the value of , and write one sentence explaining why the Completeness Axiom guarantees that exists in .       Part 2: Proof Choice (Required — Choose One) (Estimated time: 15 minutes)  Choose one of the following two proof problems. Both ask for a complete proof; they differ in difficulty and the techniques required. Label your submission clearly with Option A or Option B.     Option A (Standard): Scaling a Supremum   Let be a nonempty subset of with . Let be a positive real number, and define .  Prove that .  Your proof must verify both conditions in the definition of supremum for the set .    For condition (i): if then ; multiply both sides by . For condition (ii): if is an upper bound of , show that is an upper bound of and use .     Option B (More Challenging): The Archimedean Property   Assuming the Completeness Axiom, prove the Archimedean Property: for every , there exists such that .  Use proof by contradiction. Your proof should clearly identify: what set the Completeness Axiom is applied to, what supremum is obtained, and what contradiction is derived from the -characterization.    Suppose no such exists; then is an upper bound for . Let . Apply the -characterization with : there exists with , so . But …       Part 3: Reflection (Estimated time: 5 minutes)  Write 3–5 sentences for each question. These are graded for thoughtfulness, not for mathematical correctness.    The Role of Completeness   In your Part 1 proof, where exactly did the Completeness Axiom enter? Was it used explicitly, or did it appear implicitly (for example, in a claim about what is)?  Then consider: could you have written the same proof if you were working in instead of ? Why or why not?     Bauldry's Proof Structure   In the Bridge Reading you read Bauldry's proof of Theorem 2.3 (Archimedean Property). Compare its logical structure to the proof you wrote in Part 2 (Option B) or the hint you read for Option B. What is the same? If there are differences, where did your proof and Bauldry's diverge?     Looking Ahead   In Module 4, you will prove that sequences like converge to their limit using an - argument. Based on what you practiced in this module, describe the connection you see between the -characterization of the supremum and the structure of an - convergence proof. What is similar? What will be new?      Assessment Rubric (Informational)   The following rubric describes how submitted proofs will be evaluated.    Grading Criteria        Criterion  Full credit  Partial credit  Minimal credit    Logical correctness  All steps are valid; the argument proves exactly the stated claim  Mostly correct with one fixable gap  Significant logical errors or wrong claim proved    Use of definitions  Both conditions of the supremum definition are verified explicitly  One condition is verified correctly; the other is sketched  Definition not invoked or confused with a different property    -characterization  An explicit element of in is exhibited with full justification  Correct idea but the element is not explicitly verified to be in  The -step is missing or circular    Mathematical prose  Complete grammatical sentences; scratch work labeled and separate from proof  Mostly prose with some missing connective sentences  Primarily symbolic with no connecting narrative    Reflection  Specific, thoughtful, and engages with the mathematical content  General but relevant observations  Vague or too brief to be informative     "
},
{
  "id": "assess-mod2-1a",
  "level": "2",
  "url": "ws-mod2-assessment.html#assess-mod2-1a",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "Analyzing the Set.",
  "body": " Analyzing the Set   Factor the inequality and determine exactly which real numbers belong to . (That is: what familiar interval is ?)  Show your algebra clearly. This scratch work does not need to be in formal proof style; it is the analysis step that precedes the proof.    Factor as and recall that a product of two real numbers is negative exactly when the factors have opposite signs.   "
},
{
  "id": "assess-mod2-1b",
  "level": "2",
  "url": "ws-mod2-assessment.html#assess-mod2-1b",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "Proving the Supremum.",
  "body": " Proving the Supremum   Using your work in the previous problem, prove that .  Your proof must have the following structure:   Scratch work (clearly labeled). Verify that 2 is an upper bound. Then: given , find an explicit element of greater than (for small enough ). Show the algebra.   Formal proof. Using your scratch work, write a complete proof that by verifying both conditions in the definition of supremum. The proof should be written in complete mathematical prose.      For the -characterization step: you need to show that for any , the point belongs to (at least when is small). To verify , compute and show it is negative by factoring as . Note that (since for ) and .   "
},
{
  "id": "assess-mod2-1c",
  "level": "2",
  "url": "ws-mod2-assessment.html#assess-mod2-1c",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "The Infimum.",
  "body": " The Infimum   State (without proof) the value of , and write one sentence explaining why the Completeness Axiom guarantees that exists in .   "
},
{
  "id": "assess-mod2-2a",
  "level": "2",
  "url": "ws-mod2-assessment.html#assess-mod2-2a",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "Option A (Standard): Scaling a Supremum.",
  "body": " Option A (Standard): Scaling a Supremum   Let be a nonempty subset of with . Let be a positive real number, and define .  Prove that .  Your proof must verify both conditions in the definition of supremum for the set .    For condition (i): if then ; multiply both sides by . For condition (ii): if is an upper bound of , show that is an upper bound of and use .   "
},
{
  "id": "assess-mod2-2b",
  "level": "2",
  "url": "ws-mod2-assessment.html#assess-mod2-2b",
  "type": "Checkpoint",
  "number": "6.5",
  "title": "Option B (More Challenging): The Archimedean Property.",
  "body": " Option B (More Challenging): The Archimedean Property   Assuming the Completeness Axiom, prove the Archimedean Property: for every , there exists such that .  Use proof by contradiction. Your proof should clearly identify: what set the Completeness Axiom is applied to, what supremum is obtained, and what contradiction is derived from the -characterization.    Suppose no such exists; then is an upper bound for . Let . Apply the -characterization with : there exists with , so . But …   "
},
{
  "id": "assess-mod2-r1",
  "level": "2",
  "url": "ws-mod2-assessment.html#assess-mod2-r1",
  "type": "Checkpoint",
  "number": "6.6",
  "title": "The Role of Completeness.",
  "body": " The Role of Completeness   In your Part 1 proof, where exactly did the Completeness Axiom enter? Was it used explicitly, or did it appear implicitly (for example, in a claim about what is)?  Then consider: could you have written the same proof if you were working in instead of ? Why or why not?   "
},
{
  "id": "assess-mod2-r2",
  "level": "2",
  "url": "ws-mod2-assessment.html#assess-mod2-r2",
  "type": "Checkpoint",
  "number": "6.7",
  "title": "Bauldry’s Proof Structure.",
  "body": " Bauldry's Proof Structure   In the Bridge Reading you read Bauldry's proof of Theorem 2.3 (Archimedean Property). Compare its logical structure to the proof you wrote in Part 2 (Option B) or the hint you read for Option B. What is the same? If there are differences, where did your proof and Bauldry's diverge?   "
},
{
  "id": "assess-mod2-r3",
  "level": "2",
  "url": "ws-mod2-assessment.html#assess-mod2-r3",
  "type": "Checkpoint",
  "number": "6.8",
  "title": "Looking Ahead.",
  "body": " Looking Ahead   In Module 4, you will prove that sequences like converge to their limit using an - argument. Based on what you practiced in this module, describe the connection you see between the -characterization of the supremum and the structure of an - convergence proof. What is similar? What will be new?   "
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
