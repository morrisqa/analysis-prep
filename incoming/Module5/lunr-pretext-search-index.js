var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-mod5-orientation",
  "level": "1",
  "url": "ws-mod5-orientation.html",
  "type": "Section",
  "number": "1",
  "title": "Module 5: Series as Sequences of Partial Sums",
  "body": " Module 5: Series as Sequences of Partial Sums  Orientation     Define an infinite series as the limit of its sequence of partial sums , and state the relation the series converges   the sequence converges.     Compute the sum of a geometric series (for ) from first principles via the closed-form partial sum, and evaluate telescoping series by identifying cancellation in .    State and apply the Divergence Test (if then diverges), and explain why the converse is false (harmonic series as counterexample).    Apply the Comparison Test (direct and limit forms), the Ratio Test, and the Root Test to determine convergence of a series of nonnegative terms.    Distinguish absolute from conditional convergence, state and apply the Alternating Series Test, and know that absolute convergence implies convergence.    Read the Integral Test as a bridge between series convergence and improper integrals, and recognize where it will be sharpened in MAT 5610.    Articulate the central structural claim of this module: every theorem about series is a theorem about sequences , obtained by applying Module 4 results to the partial-sum sequence .       Module 4 built a toolkit for sequences: the - definition of convergence, the Algebra of Limits, the Squeeze Theorem, the Monotone Convergence Theorem, Bolzano–Weierstrass, and Cauchy sequences. Module 5 asks you to apply that toolkit to one specific family of sequences: the partial sums of a series. Every convergence test in this module is, at its core, a statement about the partial-sum sequence .  Keeping the partial-sums framing in view does two things. First, it demystifies the named tests. The Divergence Test, for instance, is just the observation that if converges then —an immediate corollary of limit laws from Module 4. Second, it clarifies what absolute and conditional convergence really mean: the question is whether (a new series, with its own partial-sum sequence ) also converges. The Module is organized around this structural simplification.  The self-assessment questions below are not graded . They are designed to help you locate yourself within the module. Write informally; a sentence or two per question is fine.    What Is a Series?   In your own words, what does it mean for the infinite series to equal the number ? Which previously-studied object (from Module 4) is really doing the work in that definition?     Partial Sums   For the series , write out explicitly (as fractions). What number do the partial sums appear to approach, and what closed-form expression for would you conjecture?     Intuition for Convergence   Based on intuition or prior exposure, decide whether each of the following series converges or diverges. Record your best guess; you are not yet expected to prove anything.           The Divergence Test Reversed?   Suppose someone tells you: If , then converges. Based on your answers above, is this claim true? What would serve as a counterexample?     Your Background   Have you seen the Ratio Test, Root Test, or Alternating Series Test in a previous course (possibly Calculus II)? If so, how comfortable are you applying them? If this is your first exposure in a proof-based setting, what do you already know about these tests from calculation practice, and what feels new about framing them as theorems to prove or justify?      A Note from the Instructor  The single most important habit to cultivate in this module is to translate every series question into a sequence question about . Most students come in having seen the named tests in a calculus course, where they are presented as a list of recipes to apply. The recipes are fine—you should be able to apply them fluently by the end of the module—but what makes the material feel rigorous instead of procedural is the recognition that each test is a statement you could, in principle, prove by using the - machinery on or . The study guide walks through this translation for the Divergence Test and the Comparison Test; the worked examples model it for telescoping and alternating series.  If your calculus recall of these tests is rusty, that is fine. The reading in Zorn §2.5–2.6 redevelops them from the ground up, and the worked examples show you what a clean written argument looks like. If your recall is sharp, use this module as an opportunity to strengthen your grip on the underlying statement: for each test, be able to identify the partial-sum sequence, the hypothesis you are using about that sequence, and the Module 4 theorem that makes the argument go.    A Note on Pacing   A note on pacing. If you are coming in with prior real analysis experience, the definition of a series via partial sums and the standard tests will likely feel familiar. Skim Zorn §2.5 quickly, spend focused time on the proofs of Comparison Test and Limit Comparison Test in §2.6, and work the Bridge Reading on Bauldry §1.5–1.6 with full attention—Bauldry's informal Ch. 1 presentation is preparation for his rigorous Ch. 2.5 treatment, which is where MAT 5610 will begin. If proof-based series work is newer to you, slow down at Worked Example 1 (telescoping from partial sums): read it twice, reproduce the partial-sum computation on paper, and then work Practice Set problems F1–F4 before attempting the Ratio and Root Tests. The single most common mistake in this module is to treat a test as a black box rather than as a claim about the sequence ; if you can always name the partial-sum sequence you are secretly studying, the tests will feel less like magic and more like bookkeeping.    Module Road Map (estimated time: 5 hours)       Component  Time  Purpose    Orientation (this document)  15 min  Goals, self-assessment, context    Video 1: Series as Sequences of Partial Sums  9 min  Core instruction via lightboard    Video 2: Convergence Tests for Series  10 min  Core instruction via lightboard    Companion Reading and Study Guide  55 min  Zorn §2.5–2.6 with guided questions    Worked Examples  40 min  Telescoping, comparison, ratio, alternating    Practice Problem Set  100 min  Scaffolded practice by difficulty    Bridge Reading Guide  40 min  Bauldry §1.5–1.6 and a power-series preview    Module Assessment  40 min  Submitted proofs and reflection     "
},
{
  "id": "obj-mod5",
  "level": "2",
  "url": "ws-mod5-orientation.html#obj-mod5",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   Define an infinite series as the limit of its sequence of partial sums , and state the relation the series converges   the sequence converges.     Compute the sum of a geometric series (for ) from first principles via the closed-form partial sum, and evaluate telescoping series by identifying cancellation in .    State and apply the Divergence Test (if then diverges), and explain why the converse is false (harmonic series as counterexample).    Apply the Comparison Test (direct and limit forms), the Ratio Test, and the Root Test to determine convergence of a series of nonnegative terms.    Distinguish absolute from conditional convergence, state and apply the Alternating Series Test, and know that absolute convergence implies convergence.    Read the Integral Test as a bridge between series convergence and improper integrals, and recognize where it will be sharpened in MAT 5610.    Articulate the central structural claim of this module: every theorem about series is a theorem about sequences , obtained by applying Module 4 results to the partial-sum sequence .    "
},
{
  "id": "ex-mod5-sa-1",
  "level": "2",
  "url": "ws-mod5-orientation.html#ex-mod5-sa-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "What Is a Series?",
  "body": " What Is a Series?   In your own words, what does it mean for the infinite series to equal the number ? Which previously-studied object (from Module 4) is really doing the work in that definition?   "
},
{
  "id": "ex-mod5-sa-2",
  "level": "2",
  "url": "ws-mod5-orientation.html#ex-mod5-sa-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "Partial Sums.",
  "body": " Partial Sums   For the series , write out explicitly (as fractions). What number do the partial sums appear to approach, and what closed-form expression for would you conjecture?   "
},
{
  "id": "ex-mod5-sa-3",
  "level": "2",
  "url": "ws-mod5-orientation.html#ex-mod5-sa-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "Intuition for Convergence.",
  "body": " Intuition for Convergence   Based on intuition or prior exposure, decide whether each of the following series converges or diverges. Record your best guess; you are not yet expected to prove anything.         "
},
{
  "id": "ex-mod5-sa-4",
  "level": "2",
  "url": "ws-mod5-orientation.html#ex-mod5-sa-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "The Divergence Test Reversed?",
  "body": " The Divergence Test Reversed?   Suppose someone tells you: If , then converges. Based on your answers above, is this claim true? What would serve as a counterexample?   "
},
{
  "id": "ex-mod5-sa-5",
  "level": "2",
  "url": "ws-mod5-orientation.html#ex-mod5-sa-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Your Background.",
  "body": " Your Background   Have you seen the Ratio Test, Root Test, or Alternating Series Test in a previous course (possibly Calculus II)? If so, how comfortable are you applying them? If this is your first exposure in a proof-based setting, what do you already know about these tests from calculation practice, and what feels new about framing them as theorems to prove or justify?   "
},
{
  "id": "ws-mod5-study-guide",
  "level": "1",
  "url": "ws-mod5-study-guide.html",
  "type": "Section",
  "number": "2",
  "title": "Module 5: Companion Reading and Study Guide",
  "body": " Module 5: Companion Reading and Study Guide  Zorn §2.5–2.6 — Estimated time: 55 minutes   This guide accompanies two sections of Zorn's Understanding Real Analysis . Section 2.5 ( Series 101: Basic Ideas ) introduces the formal definition of series convergence via partial sums, the geometric series, and the basic algebra of convergent series. Section 2.6 ( Series 102: Testing for Convergence ) develops the named tests: Comparison, Limit Comparison, Ratio, Root, and Alternating Series, along with a brief treatment of absolute convergence.  Read each section before working its questions. Because many of the tests may be familiar from a calculus course, pay particular attention to the statements and proofs —not just the recipes. The recurring theme, which you should be able to articulate by the end of this guide, is that every test is ultimately a statement about the partial-sum sequence or (for absolute convergence) .     Section 2.5: Series 101 — Basic Ideas (Zorn pp. 119–134)  Read Definition 2.22 (series convergence) very carefully. This is the definition on which all of Module 5 rests. Notice that it is not a new kind of limit—it is the old Module 4 limit, applied to the partial-sum sequence.    Parsing the Definition   Write Zorn's Definition 2.22 (convergence of a series) symbolically. Your statement should involve the partial sums and the - definition of sequence convergence from Module 4.    What is the type of the object ? (Is it a number? A sequence? A symbol for a limit?)  If asked to prove converges to , which specific sequence must you show converges to , and by what definition?      (a) When the series converges, denotes the real number . When it diverges, the symbol has no numerical value (though we sometimes write loosely for divergence to infinity). (b) You must show that the partial-sum sequence converges to in the - sense: .     The Geometric Series Computation   Zorn derives the formula and then takes to evaluate the infinite sum when .    Prove the closed-form partial-sum identity by induction on . (The base case is .)  Explain why when . (You do not need to prove this rigorously, but you should be able to point at the Module 4 tool that does the work; in Zorn it appears as Theorem 2.16 or near Proposition 2.24.)  Conclude: when , .      (a) Base: gives . Induction step: if the formula holds for , add to both sides and simplify to get the formula with in place of . (b) For , the sequence is decreasing and bounded below by 0; MCT gives a limit . Since , passing to the limit on both sides gives , so , so . (c) Using the sum and quotient rules from the Algebra of Limits together with gives .     The Divergence Test as a Corollary of Module 4   Read Zorn's statement of the Divergence Test (the nth-term test ): if converges, then .  Prove this from scratch, using the definition of series convergence and a Module 4 limit law of your choice.  (Hint: .)    Assume converges, so for some . The sequence is obtained by shifting back by one index; every subsequence of has the same limit, so as well. By the difference rule (Algebra of Limits), .     The Harmonic Series as Counterexample   The converse of the Divergence Test is false: there exist series with that still diverge. Zorn emphasizes the harmonic series as the standard example.  Reproduce one of the proofs that diverges. The cleanest is the classical grouping argument (sometimes attributed to Oresme in the 14th century): Show that each parenthesized block is bounded below by , and conclude that , so , hence diverges.    In the block , each of the summands is at least , so the block is at least . Summing such blocks, . Since , so does , and the harmonic series diverges.     Algebra with Convergent Series   Read Zorn's Theorem 2.23 (algebra with convergent series). State the results for sums and constant multiples, and explain in one sentence why each is a direct consequence of the Algebra of Limits from Module 4 applied to partial sums.    If and , then and for any constant . Each follows by applying the sum rule (resp. constant-multiple rule) from Module 4 to the partial-sum sequences and : the partial sum of is , and limits of sums are sums of limits.      Section 2.6: Series 102 — Testing for Convergence (Zorn pp. 134–146)  Section 2.6 is a catalog of convergence tests. Read slowly, because this is where the recipes get proved. For each test, identify: the hypothesis on the terms, the conclusion about the series, and the Module 4 fact (MCT, comparison of bounded sequences, geometric decay) that drives the proof.    The Comparison Test   State Zorn's Comparison Test (Theorem 2.26 or its analogue): if for all , then (i) converges  converges, and (ii) diverges  diverges.  Then answer:  Why is (i) the contrapositive of (ii)?  In the proof of (i), where is the Monotone Convergence Theorem used, and what object does it produce?  Why is the hypothesis essential? What could go wrong if the terms could be negative?      (a) Direct restatement: and are logically equivalent. (b) The partial sums and are both increasing (because terms are nonnegative). If , then for all , so , so is increasing and bounded above. MCT delivers a limit. (c) Without nonnegativity, need not be monotone, so MCT does not apply; moreover the inequality by itself does not prevent partial sums from oscillating wildly.     The Limit Comparison Test   State Zorn's Limit Comparison Test (Theorem 2.29): for series and with positive terms, if , then and either both converge or both diverge.  Apply the test to determine whether converges, by comparison with . (You may take as a known convergent series; Zorn proves this both directly and via the -series theorem.)    Let and . Then by the algebra of limits. Since converges, Limit Comparison implies converges.     The Ratio Test   State Zorn's Ratio Test: for with positive terms, if , then the series converges if , diverges if , and the test is inconclusive at .    Sketch the proof of the case. The idea is to pick any with , use the hypothesis to produce an index past which , and then bound . Invoke the geometric series.  Why does the test fail at ? Give one series with that converges and one that diverges.      (a) Given , choose . Pick with for . Induction gives . Then . Comparison with this geometric bound yields convergence of (the first terms are a finite sum and do not affect convergence). (b) Harmonic series : ratio ; diverges. -series : ratio ; converges.     Absolute Convergence   Read Zorn's discussion of absolute convergence. A series converges absolutely if the series of absolute values converges.  The central theorem is: absolute convergence implies convergence. Outline the proof in two or three sentences. (Hint: use the Cauchy criterion for the partial sums , together with the triangle inequality applied to finite sums.)    Let . If converges, it is Cauchy: for every there exists with for . By the triangle inequality, , so is Cauchy, and by Cauchy completeness of (Module 4), converges.     The Alternating Series Test   State the Alternating Series Test: if is a positive, decreasing sequence with , then converges.  Read Zorn's proof and answer:  What is the sequence of even partial sums, ? Is it monotone, and bounded? Conclusion?  Same question for the odd partial sums .  Why do the two subsequences have the same limit, and why does that imply the full sequence converges?      (a) ; each group is nonnegative, so is increasing. Also , so bounded above. MCT gives a limit . (b) ; since , as well. Directly: is decreasing and bounded below by 0, also by MCT. (c) Both subsequences have limit ; since every term of is either an even or odd partial sum, and both subsequences converge to , the whole sequence does. (Formally: for any , pick so that both and are less than for .)     Reading Ahead: The Integral Test   Zorn §2.6 (or §2.5 problem set) mentions the Integral Test: if is continuous and decreasing on , then converges if and only if the improper integral converges.  Without proving anything: use the Integral Test (informally) to argue that converges for and diverges for . (You may appeal to calculus-level facts about .)  Note: the Integral Test will not be used in the worked examples or on the module assessment. It is covered here because Bauldry states it in the Bridge Reading, and it foreshadows the precise integral\/series comparisons developed in MAT 5610 via the Riemann integral.     converges if (to ) and diverges if . So by the Integral Test, converges exactly when . This recovers the -series theorem.    "
},
{
  "id": "ex-mod5-sg-25-1",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-25-1",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "Parsing the Definition.",
  "body": " Parsing the Definition   Write Zorn's Definition 2.22 (convergence of a series) symbolically. Your statement should involve the partial sums and the - definition of sequence convergence from Module 4.    What is the type of the object ? (Is it a number? A sequence? A symbol for a limit?)  If asked to prove converges to , which specific sequence must you show converges to , and by what definition?      (a) When the series converges, denotes the real number . When it diverges, the symbol has no numerical value (though we sometimes write loosely for divergence to infinity). (b) You must show that the partial-sum sequence converges to in the - sense: .   "
},
{
  "id": "ex-mod5-sg-25-2",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-25-2",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "The Geometric Series Computation.",
  "body": " The Geometric Series Computation   Zorn derives the formula and then takes to evaluate the infinite sum when .    Prove the closed-form partial-sum identity by induction on . (The base case is .)  Explain why when . (You do not need to prove this rigorously, but you should be able to point at the Module 4 tool that does the work; in Zorn it appears as Theorem 2.16 or near Proposition 2.24.)  Conclude: when , .      (a) Base: gives . Induction step: if the formula holds for , add to both sides and simplify to get the formula with in place of . (b) For , the sequence is decreasing and bounded below by 0; MCT gives a limit . Since , passing to the limit on both sides gives , so , so . (c) Using the sum and quotient rules from the Algebra of Limits together with gives .   "
},
{
  "id": "ex-mod5-sg-25-3",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-25-3",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "The Divergence Test as a Corollary of Module 4.",
  "body": " The Divergence Test as a Corollary of Module 4   Read Zorn's statement of the Divergence Test (the nth-term test ): if converges, then .  Prove this from scratch, using the definition of series convergence and a Module 4 limit law of your choice.  (Hint: .)    Assume converges, so for some . The sequence is obtained by shifting back by one index; every subsequence of has the same limit, so as well. By the difference rule (Algebra of Limits), .   "
},
{
  "id": "ex-mod5-sg-25-4",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-25-4",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "The Harmonic Series as Counterexample.",
  "body": " The Harmonic Series as Counterexample   The converse of the Divergence Test is false: there exist series with that still diverge. Zorn emphasizes the harmonic series as the standard example.  Reproduce one of the proofs that diverges. The cleanest is the classical grouping argument (sometimes attributed to Oresme in the 14th century): Show that each parenthesized block is bounded below by , and conclude that , so , hence diverges.    In the block , each of the summands is at least , so the block is at least . Summing such blocks, . Since , so does , and the harmonic series diverges.   "
},
{
  "id": "ex-mod5-sg-25-5",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-25-5",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "Algebra with Convergent Series.",
  "body": " Algebra with Convergent Series   Read Zorn's Theorem 2.23 (algebra with convergent series). State the results for sums and constant multiples, and explain in one sentence why each is a direct consequence of the Algebra of Limits from Module 4 applied to partial sums.    If and , then and for any constant . Each follows by applying the sum rule (resp. constant-multiple rule) from Module 4 to the partial-sum sequences and : the partial sum of is , and limits of sums are sums of limits.   "
},
{
  "id": "ex-mod5-sg-26-1",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-26-1",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "The Comparison Test.",
  "body": " The Comparison Test   State Zorn's Comparison Test (Theorem 2.26 or its analogue): if for all , then (i) converges  converges, and (ii) diverges  diverges.  Then answer:  Why is (i) the contrapositive of (ii)?  In the proof of (i), where is the Monotone Convergence Theorem used, and what object does it produce?  Why is the hypothesis essential? What could go wrong if the terms could be negative?      (a) Direct restatement: and are logically equivalent. (b) The partial sums and are both increasing (because terms are nonnegative). If , then for all , so , so is increasing and bounded above. MCT delivers a limit. (c) Without nonnegativity, need not be monotone, so MCT does not apply; moreover the inequality by itself does not prevent partial sums from oscillating wildly.   "
},
{
  "id": "ex-mod5-sg-26-2",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-26-2",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "The Limit Comparison Test.",
  "body": " The Limit Comparison Test   State Zorn's Limit Comparison Test (Theorem 2.29): for series and with positive terms, if , then and either both converge or both diverge.  Apply the test to determine whether converges, by comparison with . (You may take as a known convergent series; Zorn proves this both directly and via the -series theorem.)    Let and . Then by the algebra of limits. Since converges, Limit Comparison implies converges.   "
},
{
  "id": "ex-mod5-sg-26-3",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-26-3",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "The Ratio Test.",
  "body": " The Ratio Test   State Zorn's Ratio Test: for with positive terms, if , then the series converges if , diverges if , and the test is inconclusive at .    Sketch the proof of the case. The idea is to pick any with , use the hypothesis to produce an index past which , and then bound . Invoke the geometric series.  Why does the test fail at ? Give one series with that converges and one that diverges.      (a) Given , choose . Pick with for . Induction gives . Then . Comparison with this geometric bound yields convergence of (the first terms are a finite sum and do not affect convergence). (b) Harmonic series : ratio ; diverges. -series : ratio ; converges.   "
},
{
  "id": "ex-mod5-sg-26-4",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-26-4",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "Absolute Convergence.",
  "body": " Absolute Convergence   Read Zorn's discussion of absolute convergence. A series converges absolutely if the series of absolute values converges.  The central theorem is: absolute convergence implies convergence. Outline the proof in two or three sentences. (Hint: use the Cauchy criterion for the partial sums , together with the triangle inequality applied to finite sums.)    Let . If converges, it is Cauchy: for every there exists with for . By the triangle inequality, , so is Cauchy, and by Cauchy completeness of (Module 4), converges.   "
},
{
  "id": "ex-mod5-sg-26-5",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-26-5",
  "type": "Checkpoint",
  "number": "2.10",
  "title": "The Alternating Series Test.",
  "body": " The Alternating Series Test   State the Alternating Series Test: if is a positive, decreasing sequence with , then converges.  Read Zorn's proof and answer:  What is the sequence of even partial sums, ? Is it monotone, and bounded? Conclusion?  Same question for the odd partial sums .  Why do the two subsequences have the same limit, and why does that imply the full sequence converges?      (a) ; each group is nonnegative, so is increasing. Also , so bounded above. MCT gives a limit . (b) ; since , as well. Directly: is decreasing and bounded below by 0, also by MCT. (c) Both subsequences have limit ; since every term of is either an even or odd partial sum, and both subsequences converge to , the whole sequence does. (Formally: for any , pick so that both and are less than for .)   "
},
{
  "id": "ex-mod5-sg-26-6",
  "level": "2",
  "url": "ws-mod5-study-guide.html#ex-mod5-sg-26-6",
  "type": "Checkpoint",
  "number": "2.11",
  "title": "Reading Ahead: The Integral Test.",
  "body": " Reading Ahead: The Integral Test   Zorn §2.6 (or §2.5 problem set) mentions the Integral Test: if is continuous and decreasing on , then converges if and only if the improper integral converges.  Without proving anything: use the Integral Test (informally) to argue that converges for and diverges for . (You may appeal to calculus-level facts about .)  Note: the Integral Test will not be used in the worked examples or on the module assessment. It is covered here because Bauldry states it in the Bridge Reading, and it foreshadows the precise integral\/series comparisons developed in MAT 5610 via the Riemann integral.     converges if (to ) and diverges if . So by the Integral Test, converges exactly when . This recovers the -series theorem.   "
},
{
  "id": "ws-mod5-worked-examples",
  "level": "1",
  "url": "ws-mod5-worked-examples.html",
  "type": "Section",
  "number": "3",
  "title": "Module 5: Worked Examples",
  "body": " Module 5: Worked Examples  Annotated Proof Walkthroughs — Estimated time: 40 minutes   Read each example slowly. The goal is not just to see what the answer is, but to internalize the proof template . Example 1 is the archetype of a direct partial-sums argument (telescoping); Example 2 shows the Limit Comparison Test in action; Example 3 demonstrates the Ratio Test on a factorial series; Example 4 treats conditional convergence via the Alternating Series Test.     Example 1: A Telescoping Series from Partial Sums   Prove directly from the definition of series convergence that      Strategy. To prove a series equals a specific number, we must show its partial-sum sequence converges to that number. Here we will find an explicit closed form for and then take a limit using Module 4 tools.   Scratch work. The summand admits the partial-fraction decomposition which one checks by combining the right-hand side over a common denominator. The intermediate terms in the partial sum will cancel in pairs.   Proof.   Using the partial-fraction identity, the th partial sum is since all intermediate terms cancel. By the Algebra of Limits (Module 4) together with the standard limit , By the definition of series convergence, .    What to notice. This is the only example in the module in which the sum is computed exactly from the definition. Two features were critical: (1) a closed form for the summand (partial fractions) that made the cancellation visible, and (2) a closed form for that reduced the problem to a Module 4 limit. When neither is available—which is nearly always the case—we must use convergence tests to determine whether a limit exists, without being able to identify its value.      Example 2: The Limit Comparison Test   Determine whether converges. Use the Limit Comparison Test. You may take as known that converges (this is Zorn's -series theorem with ).     Strategy. For large , the summand behaves like , so we compare to . The Limit Comparison Test avoids the work of producing an explicit inequality required by direct comparison.   Proof.   Set and . Both are positive for . We compute By the quotient rule from the Algebra of Limits and the standard limit , Since the limit is finite and nonzero, the Limit Comparison Test applies: and either both converge or both diverge. Because converges, so does .    What to notice. The rhythm of the proof is standard: (1) identify a known series with similar-looking large- behavior; (2) compute the ratio of summands and take its limit; (3) verify the limit lies in ; (4) invoke the test by name. If the ratio limit had been or , a weaker conclusion would follow (see Zorn's exact statement of Theorem 2.29), but the case of a finite nonzero limit is the most commonly useful. The hypothesis of positive terms must be checked: Limit Comparison is a test for positive series, so we note explicitly that .      Example 3: The Ratio Test on a Factorial Series   Determine whether converges. Use the Ratio Test.     Strategy. Series involving factorials are almost always attacked with the Ratio Test, because the factorial and exponential ratios simplify cleanly. We compute .   Proof.   Let . Then It is a standard limit (proved in Zorn §2.3 or its problem set; also a limit students know from calculus) that as . By the quotient rule, Since , the Ratio Test implies converges.    What to notice. The algebraic simplification in the second step is the whole game: , and , so a single factor of in numerator and denominator cancels and leaves a clean ratio. Recognizing the pattern—rather than fumbling with binomial expansions—is what makes the test feel routine. The Ratio Test delivers a yes\/no verdict only; it does not tell you what the sum is. For , there is no known closed form for the sum.      Example 4: Conditional Convergence via the Alternating Series Test   Prove that converges, and then show that it does not converge absolutely. Conclude that the series converges conditionally.     Strategy. Absolute convergence is the stronger condition, so we handle it in stages. First, use the Alternating Series Test to get convergence. Then, look at and show it diverges via comparison with the harmonic series (or directly as a -series with ).   Step 1: Convergence via AST.   Write the series as with . To apply the Alternating Series Test we verify two conditions:   (i) is decreasing. For , , so , i.e., .   (ii) . For any , by the Archimedean Property pick . Then for , , so .  Both hypotheses of the Alternating Series Test are satisfied, so converges.   Step 2: Absolute divergence.   Consider the series of absolute values, . We show this diverges by direct comparison with the harmonic series. Since for all , The harmonic series diverges (Study Guide Exercise 4 of §2.5). By the contrapositive form of the Comparison Test, also diverges.   Conclusion.   The series converges (Step 1) but not absolutely (Step 2). By definition, it converges conditionally .    What to notice. The proof template for classifying an alternating series has three parts: (1) apply AST to establish convergence, carefully verifying both hypotheses on ; (2) check absolute convergence separately, usually via comparison with a known series; (3) declare whether the convergence is absolute or conditional. The order matters: you cannot conclude conditional convergence from AST alone —you must also rule out absolute convergence. Conditional convergence is a delicate property: rearranging the terms of a conditionally convergent series can change its sum (Riemann's rearrangement theorem, a topic for MAT 5610).    "
},
{
  "id": "ex-mod5-we-1",
  "level": "2",
  "url": "ws-mod5-worked-examples.html#ex-mod5-we-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "Example 1: A Telescoping Series from Partial Sums.",
  "body": " Example 1: A Telescoping Series from Partial Sums   Prove directly from the definition of series convergence that      Strategy. To prove a series equals a specific number, we must show its partial-sum sequence converges to that number. Here we will find an explicit closed form for and then take a limit using Module 4 tools.   Scratch work. The summand admits the partial-fraction decomposition which one checks by combining the right-hand side over a common denominator. The intermediate terms in the partial sum will cancel in pairs.   Proof.   Using the partial-fraction identity, the th partial sum is since all intermediate terms cancel. By the Algebra of Limits (Module 4) together with the standard limit , By the definition of series convergence, .    What to notice. This is the only example in the module in which the sum is computed exactly from the definition. Two features were critical: (1) a closed form for the summand (partial fractions) that made the cancellation visible, and (2) a closed form for that reduced the problem to a Module 4 limit. When neither is available—which is nearly always the case—we must use convergence tests to determine whether a limit exists, without being able to identify its value.   "
},
{
  "id": "ex-mod5-we-2",
  "level": "2",
  "url": "ws-mod5-worked-examples.html#ex-mod5-we-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "Example 2: The Limit Comparison Test.",
  "body": " Example 2: The Limit Comparison Test   Determine whether converges. Use the Limit Comparison Test. You may take as known that converges (this is Zorn's -series theorem with ).     Strategy. For large , the summand behaves like , so we compare to . The Limit Comparison Test avoids the work of producing an explicit inequality required by direct comparison.   Proof.   Set and . Both are positive for . We compute By the quotient rule from the Algebra of Limits and the standard limit , Since the limit is finite and nonzero, the Limit Comparison Test applies: and either both converge or both diverge. Because converges, so does .    What to notice. The rhythm of the proof is standard: (1) identify a known series with similar-looking large- behavior; (2) compute the ratio of summands and take its limit; (3) verify the limit lies in ; (4) invoke the test by name. If the ratio limit had been or , a weaker conclusion would follow (see Zorn's exact statement of Theorem 2.29), but the case of a finite nonzero limit is the most commonly useful. The hypothesis of positive terms must be checked: Limit Comparison is a test for positive series, so we note explicitly that .   "
},
{
  "id": "ex-mod5-we-3",
  "level": "2",
  "url": "ws-mod5-worked-examples.html#ex-mod5-we-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "Example 3: The Ratio Test on a Factorial Series.",
  "body": " Example 3: The Ratio Test on a Factorial Series   Determine whether converges. Use the Ratio Test.     Strategy. Series involving factorials are almost always attacked with the Ratio Test, because the factorial and exponential ratios simplify cleanly. We compute .   Proof.   Let . Then It is a standard limit (proved in Zorn §2.3 or its problem set; also a limit students know from calculus) that as . By the quotient rule, Since , the Ratio Test implies converges.    What to notice. The algebraic simplification in the second step is the whole game: , and , so a single factor of in numerator and denominator cancels and leaves a clean ratio. Recognizing the pattern—rather than fumbling with binomial expansions—is what makes the test feel routine. The Ratio Test delivers a yes\/no verdict only; it does not tell you what the sum is. For , there is no known closed form for the sum.   "
},
{
  "id": "ex-mod5-we-4",
  "level": "2",
  "url": "ws-mod5-worked-examples.html#ex-mod5-we-4",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "Example 4: Conditional Convergence via the Alternating Series Test.",
  "body": " Example 4: Conditional Convergence via the Alternating Series Test   Prove that converges, and then show that it does not converge absolutely. Conclude that the series converges conditionally.     Strategy. Absolute convergence is the stronger condition, so we handle it in stages. First, use the Alternating Series Test to get convergence. Then, look at and show it diverges via comparison with the harmonic series (or directly as a -series with ).   Step 1: Convergence via AST.   Write the series as with . To apply the Alternating Series Test we verify two conditions:   (i) is decreasing. For , , so , i.e., .   (ii) . For any , by the Archimedean Property pick . Then for , , so .  Both hypotheses of the Alternating Series Test are satisfied, so converges.   Step 2: Absolute divergence.   Consider the series of absolute values, . We show this diverges by direct comparison with the harmonic series. Since for all , The harmonic series diverges (Study Guide Exercise 4 of §2.5). By the contrapositive form of the Comparison Test, also diverges.   Conclusion.   The series converges (Step 1) but not absolutely (Step 2). By definition, it converges conditionally .    What to notice. The proof template for classifying an alternating series has three parts: (1) apply AST to establish convergence, carefully verifying both hypotheses on ; (2) check absolute convergence separately, usually via comparison with a known series; (3) declare whether the convergence is absolute or conditional. The order matters: you cannot conclude conditional convergence from AST alone —you must also rule out absolute convergence. Conditional convergence is a delicate property: rearranging the terms of a conditionally convergent series can change its sum (Riemann's rearrangement theorem, a topic for MAT 5610).   "
},
{
  "id": "ws-mod5-practice-set",
  "level": "1",
  "url": "ws-mod5-practice-set.html",
  "type": "Section",
  "number": "4",
  "title": "Module 5: Practice Problem Set",
  "body": " Module 5: Practice Problem Set  Estimated time: 100 minutes   Problems are labeled (Foundational), (Standard), and (Challenge). Work in order within each level; later problems in a level often build on earlier ones.  These problems are not submitted, but you should write out complete solutions. For any problem that asks you to prove something, apply the standards from the Worked Examples: strategy stated up front, complete sentences, every step justified, and the test or theorem invoked by name.     Foundational Problems    Partial Sums by Hand   For each series, write out as fractions. Then guess (no proof required) whether the series converges and, if so, to what.         (a) , , , ; approaches (geometric, ratio ). (b) , , , ; approaches 1 (telescoping, cf. Worked Example 1). (c) , , , ; oscillates, diverges.     Geometric Series   For each series, determine whether it converges, and if so compute its sum. Identify the first term and common ratio , then apply the geometric-series formula .          (a) , ; sum . (b) First term , ratio ; sum . (c) , ; sum . (d) ; diverges.     The Divergence Test   Use the Divergence Test to show that each of the following series diverges, or state that the test is inconclusive.          (a) ; diverges. (b) ; Divergence Test is inconclusive. (The harmonic series does diverge, but by a different argument.) (c) , so (the terms oscillate between values close to ); diverges. (d) ; diverges.     Direct Comparison   Use the Direct Comparison Test to determine convergence or divergence of each series. Identify the known series you are comparing to.         (a) , and converges; so converges. (b) for (since ); diverges; so diverges. (c) ; converges (geometric); so converges.      Standard Problems    A Telescoping Proof   Prove directly from the definition of series convergence that   Your proof must follow the template of Worked Example 1: (i) identify a partial-fraction decomposition of the summand; (ii) find a closed form for the partial sum by telescoping; (iii) take the limit using the Algebra of Limits.    Verify that Then .     Ratio Test Applications   Use the Ratio Test to determine convergence or divergence of each series. Show the ratio computation explicitly.         (a) Ratio ; converges. (b) Ratio ; converges. (c) Ratio ; converges.     Limit Comparison   Use the Limit Comparison Test to determine convergence or divergence of   Identify your comparison series, compute the ratio of terms, evaluate its limit, and invoke the test by name.    Leading-order behavior is ; compare with . The ratio limit is 3.     An Alternating Series   Prove that converges. Does it converge absolutely or conditionally? Justify your answer in full.  Your proof should (i) verify both hypotheses of the Alternating Series Test; (ii) separately investigate absolute convergence by testing ; (iii) conclude with a classification.    For AST: is positive, decreasing (since ), and tends to 0. For absolute: converges by direct comparison with . Hence the series converges absolutely.     The Divergence Test is One-Way   Give one example of a series with that converges , and one example with that diverges . For each, cite the reason for convergence or divergence.  Use this pair of examples to explain, in your own words, why the Divergence Test has the one-way structure if , then diverges and not the stronger two-way statement.    Convergent with terms : ( -series, ). Divergent with terms : (harmonic; see Study Guide). The pair shows that is necessary (because convergent sequences of partial sums force their differences to 0) but not sufficient : the rate at which determines whether the partial sums stay bounded, and for they do not.      Challenge Problems    Absolute Convergence Implies Convergence   Prove: if converges, then converges.  Your proof must use the Cauchy criterion for sequences (Module 4). Let and . Use that is Cauchy (it converges by hypothesis) together with the triangle inequality on finite sums to show is Cauchy, and invoke Cauchy completeness of .    Let . Since converges, it is Cauchy: there is with for . Note . Then Hence is Cauchy, hence convergent in .     A Series That Needs the Root Test   Consider the series     Compute if it exists. What does the Ratio Test say?  Compute . What does the Root Test say?  Which test was decisive here, and why? What does this tell you about the relative strength of the Root and Ratio Tests?      (a) The ratio oscillates: for odd, , which grows without bound ; for even, , which tends to 0. The limit does not exist; Ratio Test inconclusive. (b) For even, ; for odd, . These are bounded above by ; a more careful version of the Root Test (using ) concludes convergence. Less formally: every term satisfies , and converges. (c) The Root Test (with ) is strictly more powerful: it can handle series where the ratio oscillates but the th root still stays bounded.    "
},
{
  "id": "ex-mod5-ps-F1",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-F1",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Partial Sums by Hand.",
  "body": " Partial Sums by Hand   For each series, write out as fractions. Then guess (no proof required) whether the series converges and, if so, to what.         (a) , , , ; approaches (geometric, ratio ). (b) , , , ; approaches 1 (telescoping, cf. Worked Example 1). (c) , , , ; oscillates, diverges.   "
},
{
  "id": "ex-mod5-ps-F2",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-F2",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Geometric Series.",
  "body": " Geometric Series   For each series, determine whether it converges, and if so compute its sum. Identify the first term and common ratio , then apply the geometric-series formula .          (a) , ; sum . (b) First term , ratio ; sum . (c) , ; sum . (d) ; diverges.   "
},
{
  "id": "ex-mod5-ps-F3",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-F3",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> The Divergence Test.",
  "body": " The Divergence Test   Use the Divergence Test to show that each of the following series diverges, or state that the test is inconclusive.          (a) ; diverges. (b) ; Divergence Test is inconclusive. (The harmonic series does diverge, but by a different argument.) (c) , so (the terms oscillate between values close to ); diverges. (d) ; diverges.   "
},
{
  "id": "ex-mod5-ps-F4",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-F4",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Direct Comparison.",
  "body": " Direct Comparison   Use the Direct Comparison Test to determine convergence or divergence of each series. Identify the known series you are comparing to.         (a) , and converges; so converges. (b) for (since ); diverges; so diverges. (c) ; converges (geometric); so converges.   "
},
{
  "id": "ex-mod5-ps-S1",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-S1",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> A Telescoping Proof.",
  "body": " A Telescoping Proof   Prove directly from the definition of series convergence that   Your proof must follow the template of Worked Example 1: (i) identify a partial-fraction decomposition of the summand; (ii) find a closed form for the partial sum by telescoping; (iii) take the limit using the Algebra of Limits.    Verify that Then .   "
},
{
  "id": "ex-mod5-ps-S2",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-S2",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Ratio Test Applications.",
  "body": " Ratio Test Applications   Use the Ratio Test to determine convergence or divergence of each series. Show the ratio computation explicitly.         (a) Ratio ; converges. (b) Ratio ; converges. (c) Ratio ; converges.   "
},
{
  "id": "ex-mod5-ps-S3",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-S3",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Limit Comparison.",
  "body": " Limit Comparison   Use the Limit Comparison Test to determine convergence or divergence of   Identify your comparison series, compute the ratio of terms, evaluate its limit, and invoke the test by name.    Leading-order behavior is ; compare with . The ratio limit is 3.   "
},
{
  "id": "ex-mod5-ps-S4",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-S4",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> An Alternating Series.",
  "body": " An Alternating Series   Prove that converges. Does it converge absolutely or conditionally? Justify your answer in full.  Your proof should (i) verify both hypotheses of the Alternating Series Test; (ii) separately investigate absolute convergence by testing ; (iii) conclude with a classification.    For AST: is positive, decreasing (since ), and tends to 0. For absolute: converges by direct comparison with . Hence the series converges absolutely.   "
},
{
  "id": "ex-mod5-ps-S5",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-S5",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> The Divergence Test is One-Way.",
  "body": " The Divergence Test is One-Way   Give one example of a series with that converges , and one example with that diverges . For each, cite the reason for convergence or divergence.  Use this pair of examples to explain, in your own words, why the Divergence Test has the one-way structure if , then diverges and not the stronger two-way statement.    Convergent with terms : ( -series, ). Divergent with terms : (harmonic; see Study Guide). The pair shows that is necessary (because convergent sequences of partial sums force their differences to 0) but not sufficient : the rate at which determines whether the partial sums stay bounded, and for they do not.   "
},
{
  "id": "ex-mod5-ps-C1",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-C1",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> Absolute Convergence Implies Convergence.",
  "body": " Absolute Convergence Implies Convergence   Prove: if converges, then converges.  Your proof must use the Cauchy criterion for sequences (Module 4). Let and . Use that is Cauchy (it converges by hypothesis) together with the triangle inequality on finite sums to show is Cauchy, and invoke Cauchy completeness of .    Let . Since converges, it is Cauchy: there is with for . Note . Then Hence is Cauchy, hence convergent in .   "
},
{
  "id": "ex-mod5-ps-C2",
  "level": "2",
  "url": "ws-mod5-practice-set.html#ex-mod5-ps-C2",
  "type": "Checkpoint",
  "number": "4.11",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> A Series That Needs the Root Test.",
  "body": " A Series That Needs the Root Test   Consider the series     Compute if it exists. What does the Ratio Test say?  Compute . What does the Root Test say?  Which test was decisive here, and why? What does this tell you about the relative strength of the Root and Ratio Tests?      (a) The ratio oscillates: for odd, , which grows without bound ; for even, , which tends to 0. The limit does not exist; Ratio Test inconclusive. (b) For even, ; for odd, . These are bounded above by ; a more careful version of the Root Test (using ) concludes convergence. Less formally: every term satisfies , and converges. (c) The Root Test (with ) is strictly more powerful: it can handle series where the ratio oscillates but the th root still stays bounded.   "
},
{
  "id": "ws-mod5-bridge-reading",
  "level": "1",
  "url": "ws-mod5-bridge-reading.html",
  "type": "Section",
  "number": "5",
  "title": "Module 5: Bridge Reading Guide",
  "body": " Module 5: Bridge Reading Guide  Bauldry §1.5–1.6 — Estimated time: 40 minutes   Every module ends with a bridge reading in Bauldry's Introduction to Real Analysis . For this module the reading covers two sections: §1.5 ( Sequences and Series of Constants ) and §1.6 ( Power Series and Taylor Series ). Both sit in Bauldry's informal Chapter 1, which reviews elementary calculus with a gentle lean toward proof. The rigorous redevelopment of sequences and series happens in Bauldry §2.5—which is the starting point of MAT 5610.  Treat §1.5 as a compressed review : Bauldry lists every test in a few pages, with examples but without full proofs. Treat §1.6 as a preview : power series and Taylor series are topics you saw in calculus; reading them in Bauldry's style sets you up for Module 9, where sequences and series of functions (uniform convergence, power series) take center stage.   For this module, read: Bauldry §1.5 ( Sequences and Series of Constants , approximately pp. 25–30) and §1.6 ( Power Series and Taylor Series , approximately pp. 31–36).     Bauldry §1.5 — Sequences and Series of Constants  Bauldry's §1.5 opens with sequences (Definition 1.13, Theorem 1.32 Algebra of Sequence Limits ) and then pivots to series via partial sums. The section lists the named tests—Ratio, Root, Comparison, Integral, Alternating—in rapid succession as Theorems 1.35–1.39. Unlike Zorn, who proves each test in detail, Bauldry mostly states them and refers to exercises for proofs.    Series as a Special Sequence   Read Bauldry's definition of a series (it begins A series is a special sequence… and defines ).  Quote Bauldry's one-sentence definition precisely.  Notice that Bauldry treats the partial-sum sequence as the primary object—he writes , not , for the series. How does this align with the framing of Video 1 ( a series is a sequence in disguise )?  Bauldry's notation makes it typographically obvious that convergence of the series is convergence of a sequence. What does this suggest about the role of §1.5 in setting up §2.5 (the rigorous treatment)?       Example 1.11: Special Series   Read Example 1.11 ( Special Series of Elementary Calculus ), which catalogs geometric, harmonic, -series, and telescoping series as a reference set.  For the two telescoping series Bauldry lists ( and ), are the closed-form partial sums Bauldry gives consistent with your Worked Example 1 and Practice Set S1? (They should be: 1 and 1\/2 respectively.)  Bauldry credits Oresme (14th century) with the harmonic series divergence argument. Reconstruct the argument from Bauldry's exposition and identify the central idea. (It is the grouping argument from Study Guide §2.5 Ex. 4.)       The Catalog of Tests (Theorems 1.35–1.39)   Bauldry states five convergence tests in quick succession: Ratio (Thm 1.35), Root (Thm 1.36), Comparison (Thm 1.37), Integral (Thm 1.38), Alternating Series (Thm 1.39).    For each of Ratio, Root, Comparison, and Alternating: is Bauldry's statement consistent with Zorn's? Note one small difference in phrasing you notice (e.g., whether is assumed to exist, or replaced by ; whether positive or nonnegative terms are assumed).  Bauldry's Integral Test (Thm 1.38) is the one named test you have not seen proved in this module's Study Guide or Worked Examples. State the hypotheses precisely: must be continuous, positive, and decreasing on . Why are each of these hypotheses required?  Bauldry remarks that the Alternating Series Test has a useful remainder bound : the tail is bounded in absolute value by . Why is this plausible? (Think about the squeezing of even and odd partial sums between consecutive .)        Bauldry §1.6 — Power Series and Taylor Series  Section 1.6 extends the idea of a series by letting the terms depend on a variable : a power series centered at is an expression For a fixed value of , this is just a series of numbers, and the Module 5 tests apply. For ranging over an interval, we get a function defined wherever the series converges. This is the subject of Module 9.   A preview, not a full treatment. The questions below are designed to help you read §1.6 for orientation, not to master it. Skim for the main ideas; you will return to them when power series reappear in the rigorous setting.    Definition of a Power Series   Quote Bauldry's Definition 1.17 ( Power Series ).  For a fixed value of , what kind of object is , and which of the Module 5 tests could you, in principle, apply to decide whether it converges?  The radius of convergence (Definition 1.18) is the key summary statistic for a power series. State the three possibilities: (converges only at ), (converges for all ), and (converges for , diverges for ).       Finding the Radius of Convergence via the Ratio Test   Bauldry's Example 1.14 uses the Ratio Test on the Maclaurin series for :   Reproduce the ratio-test computation: the ratio of consecutive terms (in absolute value) is , which tends to 0 for every fixed .  Conclude the interval of convergence: the series converges for every , so the radius of convergence is .  Now apply the same technique to the geometric series . What ratio do you compute, and what radius of convergence do you obtain? (You should recover .)      (c) Ratio . The Ratio Test says the series converges when , diverges when , and is inconclusive at . Hence . (At the series diverges for reasons outside the Ratio Test—at , ; at , the alternating partial sums oscillate.)     What Gets Harder in the Functional Setting   Bauldry's Theorem 1.40 states that a convergent power series can be differentiated and integrated term by term inside its radius of convergence.  Read the theorem and answer, in one or two sentences each:  Why is term-by-term differentiation of an infinite sum a nontrivial operation? (Think about what sum means for an infinite series.)  Bauldry does not prove Theorem 1.40 in §1.6. Module 9 of this course (on sequences and series of functions ) will develop the tool required to prove it: uniform convergence . Without reading ahead, make a guess: why might pointwise convergence for each not be enough to justify switching a derivative with an infinite sum?        From Bauldry §1.5 to Bauldry §2.5   Scan the first page or two of Bauldry §2.5 ( Sequences, Series, and Convergence Tests , starting around p. 88). You are not expected to read §2.5 in full—this is a one-paragraph orientation exercise.    Compare the typographic density of §2.5 with that of §1.5. Which is more compressed?  Bauldry §2.5 is the starting point of MAT 5610. Based on what you have built in Modules 4 and 5, what fraction of §2.5 do you expect will be review (at a higher level of formality) versus new material ? One or two sentences of impression is enough.      "
},
{
  "id": "ex-mod5-br-1",
  "level": "2",
  "url": "ws-mod5-bridge-reading.html#ex-mod5-br-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "Series as a “Special Sequence”.",
  "body": " Series as a Special Sequence   Read Bauldry's definition of a series (it begins A series is a special sequence… and defines ).  Quote Bauldry's one-sentence definition precisely.  Notice that Bauldry treats the partial-sum sequence as the primary object—he writes , not , for the series. How does this align with the framing of Video 1 ( a series is a sequence in disguise )?  Bauldry's notation makes it typographically obvious that convergence of the series is convergence of a sequence. What does this suggest about the role of §1.5 in setting up §2.5 (the rigorous treatment)?     "
},
{
  "id": "ex-mod5-br-2",
  "level": "2",
  "url": "ws-mod5-bridge-reading.html#ex-mod5-br-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "Example 1.11: Special Series.",
  "body": " Example 1.11: Special Series   Read Example 1.11 ( Special Series of Elementary Calculus ), which catalogs geometric, harmonic, -series, and telescoping series as a reference set.  For the two telescoping series Bauldry lists ( and ), are the closed-form partial sums Bauldry gives consistent with your Worked Example 1 and Practice Set S1? (They should be: 1 and 1\/2 respectively.)  Bauldry credits Oresme (14th century) with the harmonic series divergence argument. Reconstruct the argument from Bauldry's exposition and identify the central idea. (It is the grouping argument from Study Guide §2.5 Ex. 4.)     "
},
{
  "id": "ex-mod5-br-3",
  "level": "2",
  "url": "ws-mod5-bridge-reading.html#ex-mod5-br-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "The Catalog of Tests (Theorems 1.35–1.39).",
  "body": " The Catalog of Tests (Theorems 1.35–1.39)   Bauldry states five convergence tests in quick succession: Ratio (Thm 1.35), Root (Thm 1.36), Comparison (Thm 1.37), Integral (Thm 1.38), Alternating Series (Thm 1.39).    For each of Ratio, Root, Comparison, and Alternating: is Bauldry's statement consistent with Zorn's? Note one small difference in phrasing you notice (e.g., whether is assumed to exist, or replaced by ; whether positive or nonnegative terms are assumed).  Bauldry's Integral Test (Thm 1.38) is the one named test you have not seen proved in this module's Study Guide or Worked Examples. State the hypotheses precisely: must be continuous, positive, and decreasing on . Why are each of these hypotheses required?  Bauldry remarks that the Alternating Series Test has a useful remainder bound : the tail is bounded in absolute value by . Why is this plausible? (Think about the squeezing of even and odd partial sums between consecutive .)     "
},
{
  "id": "ex-mod5-br-4",
  "level": "2",
  "url": "ws-mod5-bridge-reading.html#ex-mod5-br-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "Definition of a Power Series.",
  "body": " Definition of a Power Series   Quote Bauldry's Definition 1.17 ( Power Series ).  For a fixed value of , what kind of object is , and which of the Module 5 tests could you, in principle, apply to decide whether it converges?  The radius of convergence (Definition 1.18) is the key summary statistic for a power series. State the three possibilities: (converges only at ), (converges for all ), and (converges for , diverges for ).     "
},
{
  "id": "ex-mod5-br-5",
  "level": "2",
  "url": "ws-mod5-bridge-reading.html#ex-mod5-br-5",
  "type": "Checkpoint",
  "number": "5.5",
  "title": "Finding the Radius of Convergence via the Ratio Test.",
  "body": " Finding the Radius of Convergence via the Ratio Test   Bauldry's Example 1.14 uses the Ratio Test on the Maclaurin series for :   Reproduce the ratio-test computation: the ratio of consecutive terms (in absolute value) is , which tends to 0 for every fixed .  Conclude the interval of convergence: the series converges for every , so the radius of convergence is .  Now apply the same technique to the geometric series . What ratio do you compute, and what radius of convergence do you obtain? (You should recover .)      (c) Ratio . The Ratio Test says the series converges when , diverges when , and is inconclusive at . Hence . (At the series diverges for reasons outside the Ratio Test—at , ; at , the alternating partial sums oscillate.)   "
},
{
  "id": "ex-mod5-br-6",
  "level": "2",
  "url": "ws-mod5-bridge-reading.html#ex-mod5-br-6",
  "type": "Checkpoint",
  "number": "5.6",
  "title": "What Gets Harder in the Functional Setting.",
  "body": " What Gets Harder in the Functional Setting   Bauldry's Theorem 1.40 states that a convergent power series can be differentiated and integrated term by term inside its radius of convergence.  Read the theorem and answer, in one or two sentences each:  Why is term-by-term differentiation of an infinite sum a nontrivial operation? (Think about what sum means for an infinite series.)  Bauldry does not prove Theorem 1.40 in §1.6. Module 9 of this course (on sequences and series of functions ) will develop the tool required to prove it: uniform convergence . Without reading ahead, make a guess: why might pointwise convergence for each not be enough to justify switching a derivative with an infinite sum?     "
},
{
  "id": "ex-mod5-br-7",
  "level": "2",
  "url": "ws-mod5-bridge-reading.html#ex-mod5-br-7",
  "type": "Checkpoint",
  "number": "5.7",
  "title": "From Bauldry §1.5 to Bauldry §2.5.",
  "body": " From Bauldry §1.5 to Bauldry §2.5   Scan the first page or two of Bauldry §2.5 ( Sequences, Series, and Convergence Tests , starting around p. 88). You are not expected to read §2.5 in full—this is a one-paragraph orientation exercise.    Compare the typographic density of §2.5 with that of §1.5. Which is more compressed?  Bauldry §2.5 is the starting point of MAT 5610. Based on what you have built in Modules 4 and 5, what fraction of §2.5 do you expect will be review (at a higher level of formality) versus new material ? One or two sentences of impression is enough.     "
},
{
  "id": "ws-mod5-assessment",
  "level": "1",
  "url": "ws-mod5-assessment.html",
  "type": "Section",
  "number": "6",
  "title": "Module 5: Assessment",
  "body": " Module 5: Assessment  Submitted Proofs and Reflection — Estimated time: 40 minutes    This assessment has three parts. Parts 1 and 2 ask you to write complete mathematical proofs, submitted for feedback. Part 3 is a short reflection. Submit all three parts together as a single document (PDF or typed file) through the course management system.   Write-up standard. All proofs must be written in complete mathematical prose. Use the style modeled in the Worked Examples: announce your strategy, include scratch work (clearly labeled) before the formal proof, write in complete grammatical sentences, invoke each test or theorem by name, and justify every step. Work consisting only of symbolic manipulations without explanation will not receive full credit.   A note on Part 2. Part 2 is a single required proof problem; there are no options to choose between. All students complete the same Part 2 problem.   Academic integrity. Your proofs must be your own work. You may refer to your notes, the textbooks, and the worked examples from this module. You may not collaborate with other students on the written proofs or use AI writing tools to draft your arguments.   Part 1: Partial-Sums Proof (Required) (Estimated time: 15 minutes)    A Telescoping Series from the Definition   Prove directly from the definition of series convergence that and find the sum. Your proof must not use any of the named convergence tests; it must instead identify a closed form for the partial sums and take a limit using Module 4 tools.  Your proof must have the following structure:   Strategy (one or two sentences). State that you will compute in closed form via telescoping and pass to the limit.   Partial-fraction decomposition. Exhibit constants and such that , and verify your decomposition by combining the right-hand side over a common denominator.   Closed form for . Use the decomposition to write as a telescoping sum, identify the surviving terms, and obtain a closed form in terms of .   Take the limit. Apply the Algebra of Limits from Module 4 to conclude , and invoke the definition of series convergence.      Partial fractions give The partial sum then telescopes to Take .       Part 2: Classification of an Alternating Series (Required) (Estimated time: 20 minutes)    Absolute, Conditional, or Divergent?   Consider the series   Classify this series as absolutely convergent , conditionally convergent , or divergent . Justify your answer with a complete proof.  Your proof must have the following structure:   Absolute convergence: investigate . Write out . Determine whether converges or diverges, using a named test from the module (Comparison Test or Limit Comparison Test is the natural choice). State your comparison series and show the relevant computation or inequality explicitly.   Plain convergence. Based on your answer to (i), decide whether the series might still converge conditionally. If absolute convergence holds , you are done (absolute convergence implies convergence). If absolute convergence fails , apply the Alternating Series Test to check for conditional convergence: verify that is positive, decreasing (for all sufficiently large ), and tends to 0.   Classification. State whether the series is absolutely convergent, conditionally convergent, or divergent, and cite the results you used to justify this classification.      For (i): use Limit Comparison with . The ratio , and diverges, so diverges. Hence the original series does not converge absolutely. For (ii): the function has derivative for (computed via the quotient rule, treating as a real variable to check monotonicity), so is eventually decreasing. It tends to 0 by dividing numerator and denominator by . Hence by AST the series converges. Classification: conditionally convergent.       Part 3: Reflection (Estimated time: 5 minutes)  Write 3–5 sentences for each question. These are graded for thoughtfulness, not for mathematical correctness.    Divergence Test and Sequence Uniqueness   In Module 4 you proved that a convergent sequence has a unique limit, and you also learned to use the Algebra of Limits (in particular, the difference rule) to compute limits of combinations of sequences.  In one paragraph, explain why the Divergence Test ( if converges, then ) is, in a precise sense, the same theorem as the fact that convergent sequences have a unique limit combined with the difference rule. (Hint: start from the identity and unpack what uniqueness of the limit of tells you about .)     Bauldry's Presentation   In the Bridge Reading you encountered Bauldry's §1.5–1.6. Compare the presentation style to Zorn's §2.5–2.6: what is more compressed in Bauldry, and what feels more like the Zorn text you worked through in the study guide? If there is a single place where Bauldry's phrasing left you unsure whether he was stating a theorem or its proof sketch, quote it and describe what was implicit.     Looking Ahead to Module 9   The Bridge Reading included a preview of power series via Bauldry §1.6. In Module 9 you will return to these objects in the language of sequences and series of functions . Based on the preview, describe in two or three sentences what you think will be new in the functional setting. (A partial answer is: the series defines a function of , and we will need to be careful about which operations—differentiation, integration, interchange of limits—can be moved past the infinite sum. You do not need to know the answers yet; articulating the question is the point.)      Assessment Rubric (Informational)   The following rubric describes how submitted proofs will be evaluated.    Grading Criteria        Criterion  Full credit  Partial credit  Minimal credit    Logical correctness  All steps are valid; the argument proves exactly the stated claim  Mostly correct with one fixable gap  Significant logical errors or wrong claim proved    Partial-sums framing  The role of (or for absolute convergence) is explicit throughout  Partial sums mentioned but their role obscured  Tests applied as black-box recipes, with no reference to partial sums    Invocation of tests  Each test cited by name, with all hypotheses verified  Correct test used, but one hypothesis unchecked  Test misapplied or applied to a series where its hypotheses fail    Mathematical prose  Complete grammatical sentences; strategy stated up front  Mostly prose with some missing connective sentences  Primarily symbolic with no connecting narrative    Reflection  Specific, thoughtful, and engages with the mathematical content  General but relevant observations  Vague or too brief to be informative     "
},
{
  "id": "assess-mod5-1",
  "level": "2",
  "url": "ws-mod5-assessment.html#assess-mod5-1",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "A Telescoping Series from the Definition.",
  "body": " A Telescoping Series from the Definition   Prove directly from the definition of series convergence that and find the sum. Your proof must not use any of the named convergence tests; it must instead identify a closed form for the partial sums and take a limit using Module 4 tools.  Your proof must have the following structure:   Strategy (one or two sentences). State that you will compute in closed form via telescoping and pass to the limit.   Partial-fraction decomposition. Exhibit constants and such that , and verify your decomposition by combining the right-hand side over a common denominator.   Closed form for . Use the decomposition to write as a telescoping sum, identify the surviving terms, and obtain a closed form in terms of .   Take the limit. Apply the Algebra of Limits from Module 4 to conclude , and invoke the definition of series convergence.      Partial fractions give The partial sum then telescopes to Take .   "
},
{
  "id": "assess-mod5-2",
  "level": "2",
  "url": "ws-mod5-assessment.html#assess-mod5-2",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "Absolute, Conditional, or Divergent?",
  "body": " Absolute, Conditional, or Divergent?   Consider the series   Classify this series as absolutely convergent , conditionally convergent , or divergent . Justify your answer with a complete proof.  Your proof must have the following structure:   Absolute convergence: investigate . Write out . Determine whether converges or diverges, using a named test from the module (Comparison Test or Limit Comparison Test is the natural choice). State your comparison series and show the relevant computation or inequality explicitly.   Plain convergence. Based on your answer to (i), decide whether the series might still converge conditionally. If absolute convergence holds , you are done (absolute convergence implies convergence). If absolute convergence fails , apply the Alternating Series Test to check for conditional convergence: verify that is positive, decreasing (for all sufficiently large ), and tends to 0.   Classification. State whether the series is absolutely convergent, conditionally convergent, or divergent, and cite the results you used to justify this classification.      For (i): use Limit Comparison with . The ratio , and diverges, so diverges. Hence the original series does not converge absolutely. For (ii): the function has derivative for (computed via the quotient rule, treating as a real variable to check monotonicity), so is eventually decreasing. It tends to 0 by dividing numerator and denominator by . Hence by AST the series converges. Classification: conditionally convergent.   "
},
{
  "id": "assess-mod5-r1",
  "level": "2",
  "url": "ws-mod5-assessment.html#assess-mod5-r1",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "Divergence Test and Sequence Uniqueness.",
  "body": " Divergence Test and Sequence Uniqueness   In Module 4 you proved that a convergent sequence has a unique limit, and you also learned to use the Algebra of Limits (in particular, the difference rule) to compute limits of combinations of sequences.  In one paragraph, explain why the Divergence Test ( if converges, then ) is, in a precise sense, the same theorem as the fact that convergent sequences have a unique limit combined with the difference rule. (Hint: start from the identity and unpack what uniqueness of the limit of tells you about .)   "
},
{
  "id": "assess-mod5-r2",
  "level": "2",
  "url": "ws-mod5-assessment.html#assess-mod5-r2",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "Bauldry’s Presentation.",
  "body": " Bauldry's Presentation   In the Bridge Reading you encountered Bauldry's §1.5–1.6. Compare the presentation style to Zorn's §2.5–2.6: what is more compressed in Bauldry, and what feels more like the Zorn text you worked through in the study guide? If there is a single place where Bauldry's phrasing left you unsure whether he was stating a theorem or its proof sketch, quote it and describe what was implicit.   "
},
{
  "id": "assess-mod5-r3",
  "level": "2",
  "url": "ws-mod5-assessment.html#assess-mod5-r3",
  "type": "Checkpoint",
  "number": "6.5",
  "title": "Looking Ahead to Module 9.",
  "body": " Looking Ahead to Module 9   The Bridge Reading included a preview of power series via Bauldry §1.6. In Module 9 you will return to these objects in the language of sequences and series of functions . Based on the preview, describe in two or three sentences what you think will be new in the functional setting. (A partial answer is: the series defines a function of , and we will need to be careful about which operations—differentiation, integration, interchange of limits—can be moved past the infinite sum. You do not need to know the answers yet; articulating the question is the point.)   "
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
