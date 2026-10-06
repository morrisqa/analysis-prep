var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-mod4-orientation",
  "level": "1",
  "url": "ws-mod4-orientation.html",
  "type": "Section",
  "number": "1",
  "title": "Module 4: Sequences — Convergence and Key Theorems",
  "body": " Module 4: Sequences — Convergence and Key Theorems  Orientation     State the - definition of convergence precisely, and read its quantifier structure ( ) fluently.    Write a complete - proof that a given explicit sequence converges to a proposed limit, including the scratch work that produces the choice of .    Negate the definition of convergence correctly and use the negation to prove that a sequence diverges.    Apply the Algebra of Limits (sums, products, quotients) and the Squeeze Theorem to evaluate limits of combinations of sequences without returning to the definition each time.    State the Monotone Convergence Theorem, explain precisely where the Completeness Axiom enters its proof, and apply it to show that a bounded monotone sequence converges.    State the Bolzano–Weierstrass Theorem and describe, informally, why every bounded sequence must have a convergent subsequence.    Define a Cauchy sequence and prove that every convergent sequence is Cauchy; recognize that the converse (Cauchy convergent in ) again rests on completeness.    Read Bauldry §2.5 carefully and identify where the results above appear in his presentation, noting differences in notation and compression.       In Module 2 you built the vocabulary of bounds and completeness; in Module 3 you became fluent with sets, functions, and the kinds of indexing that show up in analysis arguments. This module is where those tools first pay off. A sequence is just a function , but the question we ask of it—does it have a limit?—launches the whole - machinery of real analysis.  The central definition is short: if for every there exists an index beyond which every term lies within of . Everything you have studied about absolute value as distance, and everything you will study later about continuity and the derivative, passes through this same quantifier pattern. Learning to write, read, and negate this definition fluently is the single most important technical skill in the course.  Beyond the definition itself, this module introduces the working theorems of sequence convergence: the Algebra of Limits (which lets you combine known limits without rewriting - proofs), the Squeeze Theorem, the Monotone Convergence Theorem (the first major consequence of the Completeness Axiom you will prove with), the Bolzano–Weierstrass Theorem, and the notion of a Cauchy sequence. These are the tools on which all of Bauldry Chapter 2 rests.  The self-assessment questions below are not graded . They are designed to help you locate yourself within the module. Write informally; a sentence or two per question is fine.    What is a Sequence?   In your own words, what is a sequence of real numbers? Give two concrete examples, one of which you expect to have a limit and one of which you expect not to.     Informal Limits   Based on intuition alone, decide whether each of the following sequences converges, and if so, to what value. Do not prove anything; just record your best guess.           Quantifier Reading   The definition of convergence begins: for every , there exists such that for every … Based on your work in Module 1 with quantifier alternation, what kind of dependency do you expect between and ? Does depend on , or the other way around?     Monotone and Bounded   A sequence is monotone increasing if each term is at least as large as the previous one, and bounded above if all terms lie below some fixed real number . Do you expect a monotone increasing, bounded above sequence to have a limit? Why or why not? (You are not yet expected to prove your answer; record your intuition.)     Your Background   Have you seen the - definition of convergence in a previous course? If so, how long ago, and how comfortable are you writing a proof from it? If this is your first exposure, what part of the definition feels most opaque right now?      A Note from the Instructor  This module is the pivot point of the whole course. Everything before it has been setup—logical vocabulary, the real number system, sets and functions—and everything after it (continuity, differentiation, the Riemann integral) is built on the same -style definitions you will write here. If the - pattern feels uncomfortable at first, that is ordinary. The discomfort comes from the quantifier alternation: comes first, is chosen in response. That order is the whole game. Reversing it produces statements that look similar but are mathematically empty.  The theorems in this module have two flavors. The Algebra of Limits and the Squeeze Theorem are labor-saving : once you prove them, you rarely have to return to the - definition for an ordinary rational-function limit. The Monotone Convergence Theorem and the Bolzano–Weierstrass Theorem are structural : they are the first theorems where the Completeness Axiom actively does the work. When you reach those theorems in MAT 5610, they will be invoked repeatedly, and you will want to know not just their statements but where completeness enters. Spend some time on those proofs—in the study guide and in the Bridge Reading—even if the algebra of limits feels more immediately practical.    A Note on Pacing   A note on pacing. If you are coming in with prior real analysis experience, the - definition and the Algebra of Limits will likely feel familiar. Run quickly through the study guide for §2.1 and §2.2, spend careful time on the Monotone Convergence and Bolzano–Weierstrass material in §2.3, and work the Cauchy section (§2.4) and the Bridge Reading with full attention—that is the material you are most likely to have seen least recently and that MAT 5610 will build on most directly. If - proofs are newer territory, slow down at Worked Example 1: read it two or three times, reproduce the scratch-work-then-formal-proof pattern on paper, and then work Practice Set problems F2–F4 and S1–S2 before moving to the more structural theorems. The single most common mistake in this module is writing a proof in which is chosen before ; if the structure of your scratch work gets that order wrong, the formal proof will be wrong too.    Module Road Map (estimated time: 5 hours)       Component  Time  Purpose    Orientation (this document)  15 min  Goals, self-assessment, context    Video 1: The - Definition and First Proofs  9 min  Core instruction via lightboard    Video 2: Limit Laws, Squeeze, and Monotone Convergence  9 min  Core instruction via lightboard    Video 3: Subsequences, Bolzano–Weierstrass, and Cauchy Sequences  10 min  Core instruction via lightboard    Companion Reading and Study Guide  60 min  Zorn §2.1–2.4 with guided questions    Worked Examples  45 min  Annotated - walkthroughs    Practice Problem Set  110 min  Scaffolded practice by difficulty    Bridge Reading Guide  40 min  Connecting Module 4 to Bauldry §2.5    Module Assessment  45 min  Submitted proofs and reflection     "
},
{
  "id": "obj-mod4",
  "level": "2",
  "url": "ws-mod4-orientation.html#obj-mod4",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   State the - definition of convergence precisely, and read its quantifier structure ( ) fluently.    Write a complete - proof that a given explicit sequence converges to a proposed limit, including the scratch work that produces the choice of .    Negate the definition of convergence correctly and use the negation to prove that a sequence diverges.    Apply the Algebra of Limits (sums, products, quotients) and the Squeeze Theorem to evaluate limits of combinations of sequences without returning to the definition each time.    State the Monotone Convergence Theorem, explain precisely where the Completeness Axiom enters its proof, and apply it to show that a bounded monotone sequence converges.    State the Bolzano–Weierstrass Theorem and describe, informally, why every bounded sequence must have a convergent subsequence.    Define a Cauchy sequence and prove that every convergent sequence is Cauchy; recognize that the converse (Cauchy convergent in ) again rests on completeness.    Read Bauldry §2.5 carefully and identify where the results above appear in his presentation, noting differences in notation and compression.    "
},
{
  "id": "ex-mod4-sa-1",
  "level": "2",
  "url": "ws-mod4-orientation.html#ex-mod4-sa-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "What is a Sequence?",
  "body": " What is a Sequence?   In your own words, what is a sequence of real numbers? Give two concrete examples, one of which you expect to have a limit and one of which you expect not to.   "
},
{
  "id": "ex-mod4-sa-2",
  "level": "2",
  "url": "ws-mod4-orientation.html#ex-mod4-sa-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "Informal Limits.",
  "body": " Informal Limits   Based on intuition alone, decide whether each of the following sequences converges, and if so, to what value. Do not prove anything; just record your best guess.         "
},
{
  "id": "ex-mod4-sa-3",
  "level": "2",
  "url": "ws-mod4-orientation.html#ex-mod4-sa-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "Quantifier Reading.",
  "body": " Quantifier Reading   The definition of convergence begins: for every , there exists such that for every … Based on your work in Module 1 with quantifier alternation, what kind of dependency do you expect between and ? Does depend on , or the other way around?   "
},
{
  "id": "ex-mod4-sa-4",
  "level": "2",
  "url": "ws-mod4-orientation.html#ex-mod4-sa-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "Monotone and Bounded.",
  "body": " Monotone and Bounded   A sequence is monotone increasing if each term is at least as large as the previous one, and bounded above if all terms lie below some fixed real number . Do you expect a monotone increasing, bounded above sequence to have a limit? Why or why not? (You are not yet expected to prove your answer; record your intuition.)   "
},
{
  "id": "ex-mod4-sa-5",
  "level": "2",
  "url": "ws-mod4-orientation.html#ex-mod4-sa-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Your Background.",
  "body": " Your Background   Have you seen the - definition of convergence in a previous course? If so, how long ago, and how comfortable are you writing a proof from it? If this is your first exposure, what part of the definition feels most opaque right now?   "
},
{
  "id": "ws-mod4-study-guide",
  "level": "1",
  "url": "ws-mod4-study-guide.html",
  "type": "Section",
  "number": "2",
  "title": "Module 4: Companion Reading and Study Guide",
  "body": " Module 4: Companion Reading and Study Guide  Zorn §2.1–2.4 — Estimated time: 60 minutes   This guide accompanies four sections of Zorn's Understanding Real Analysis , which together cover the full story of convergent sequences of real numbers. The weight of the module falls on §2.1 (the definition of convergence) and §2.3 (the Monotone Convergence and Bolzano–Weierstrass theorems); §2.2 (limit laws) is labor-saving technology, and §2.4 (Cauchy sequences) reframes convergence in a form you will see again in MAT 5610.  Read each section before working its questions. The questions are designed to be answered with the text open in front of you; quote definitions and theorem numbers rather than paraphrasing when you can.     Section 2.1: Sequences and Convergence (Zorn pp. 83–95)  This is the central section of the module. Read Definition 2.1 (convergence) more than once; understanding its quantifier structure is the main learning goal of Video 1 and of the whole module. Pay attention also to Definition 2.2 (bounded, monotone) and Theorem 2.3 (a bounded monotone sequence converges).    Parsing the Definition   Write out Zorn's Definition 2.1 of convergence ( ) symbolically, using quantifiers ( , ) and the absolute value. Then answer:  How many quantifiers appear, and in what order?  Which variable is chosen by the adversary (i.e., you do not get to pick it), and which is chosen in response?  After a proof of convergence is written, what is the natural functional relationship between the adversary's choice and the responder's choice: typically, does get larger or smaller as gets smaller?      (a) Three: . The order is , , . (b) The adversary picks ; we pick in response. The final is a conclusion, not a choice. (c) gets larger as gets smaller: a finer tolerance requires going farther out in the sequence.     Negating the Definition   Write out the negation of convergence—that is, what means—by applying the standard negation rules from Module 1 (push through each quantifier in turn).  Then state what it means, in this same format, for the sequence to be divergent —that is, for no to be its limit.     means: . Divergence is: . The key point is that to disprove convergence to a specific , you exhibit a single that fails for every .     From Scratch Work to Formal Proof   In Zorn's worked examples in §2.1, the author often first performs algebraic manipulation (finding the relationship between and ) and then writes a formal proof. Re-read Zorn's proof that (or whichever first explicit - argument Zorn presents near Definition 2.1).  Identify: where in the formal proof does the Archimedean Property appear, and why is it essential? Which of Module 2's tools is the Archimedean Property a consequence of?     Boundedness   State Zorn's definition of a bounded sequence (Definition 2.2 or nearby). Then prove Theorem 2.4 informally: if , then is bounded.  (Sketch: apply the definition of convergence with to bound the tail; then use the finiteness of the first terms to bound the head. Write this as two or three complete sentences.)    A sequence is bounded if there exists such that for all . If , pick so that for ; then for such . The initial terms form a finite set, so bounds the entire sequence.      Section 2.2: Working with Limits (Zorn pp. 96–105)  Section 2.2 collects the tools that let you evaluate limits of sums, products, quotients, and sandwiched sequences without returning to the definition. The main results are the Algebra of Limits (Theorem 2.5) and the Squeeze Theorem (Theorem 2.6).    The Algebra of Limits   Suppose and . State the three most commonly used conclusions from Theorem 2.5 (sum, product, quotient).  For the quotient, what additional hypothesis is needed beyond and , and why is that hypothesis necessary?    Sum: . Product: . Quotient: , provided (and implicitly the are eventually nonzero). The hypothesis is needed to avoid dividing by 0 both in the limit and, via a tail argument, in the quotient for large .     Reading the Proof of the Sum Rule   Read Zorn's proof that .  What algebraic identity launches the proof? (It is an application of the Triangle Inequality.)  Why is the tolerance split as instead of simply ?  How is chosen in terms of the and coming from and respectively?      (a) . (b) Each summand is bounded by , so their sum is bounded by —the desired bound. (c) , so that both convergence bounds hold simultaneously for .     Using the Algebra of Limits on Rational Expressions   Compute Do not write an - proof. Instead: divide numerator and denominator by , identify each term's limit (using and constants), and apply the Algebra of Limits to assemble the answer.  Write your reasoning in complete sentences. Indicate each step at which the algebra of limits is applied.    Dividing gives . Since and (product rule), we have numerator (sum rule) and denominator (sum rule, twice). Since the denominator's limit is nonzero, the quotient rule gives .     The Squeeze Theorem in Practice   State the Squeeze Theorem from Zorn §2.2 in your own words. Then apply it to show that converges, and identify the limit.  Your solution should explicitly write the two bounding sequences you are squeezing between, explain why each converges (to what), and then invoke the theorem.     , so for all . Both and (by Archimedean Property \/ known limit), so by the Squeeze Theorem .      Section 2.3: Subsequences and the Big Theorems (Zorn pp. 106–113)  Section 2.3 introduces subsequences and proves two of the headline theorems of sequential analysis: the Monotone Convergence Theorem and the Bolzano–Weierstrass Theorem. Both are consequences of completeness; each will be invoked repeatedly in MAT 5610.    Subsequences and Inheritance   Define subsequence precisely: what does it mean for to be a subsequence of ? What is required of the index sequence ?  State (without proof) the inheritance result: if , what is the limit of every subsequence of ? State the contrapositive of the inheritance result and explain how it is used to prove divergence .     is a subsequence of if is a strictly increasing sequence in . Inheritance: if , every subsequence also converges to . Contrapositive: if has two subsequences converging to different limits, then diverges. This is the standard tool for showing that, e.g., diverges: the even terms converge to 1 and the odd terms to .     Where Completeness Enters the Monotone Convergence Theorem   State the Monotone Convergence Theorem as Zorn presents it (Theorem 2.3, or its analogue in your text). Then re-read the proof slowly.    What set does the proof consider, and why is nonempty and bounded above?  At what step is the Completeness Axiom invoked, and what object does it produce?  How is the -characterization of the supremum (from Module 2) used to produce the index needed by the - definition of convergence?  Where in the proof is the hypothesis that is monotone actually used?      (a) , the set of terms. It is nonempty (contains ) and bounded above by the given bound on . (b) Completeness is used to assert . (c) The -characterization provides, for any , an index with . (d) Monotonicity (increasingness) is used to pass from to for all —we need to know later terms do not drop back below .     The Bolzano–Weierstrass Theorem   State the Bolzano–Weierstrass Theorem. Read one of Zorn's proof strategies (whichever he presents; most likely the monotone-subsequence approach).    In the monotone-subsequence strategy, the first step is to show every sequence of reals has a monotone subsequence. Why is that claim not obvious?  Once a monotone subsequence has been produced, how do the hypotheses of the theorem ensure that the subsequence is bounded?  How does Monotone Convergence finish the argument?       Applying Bolzano–Weierstrass   Consider the bounded sequence .  Verify that is bounded.  Bolzano–Weierstrass guarantees a convergent subsequence. Identify one such subsequence explicitly and compute its limit (using limit laws, not - ).  Find a second convergent subsequence with a different limit. What does this show about itself?      (a) , so for all ; the sequence is bounded. (b) The even subsequence (limit laws: divide by ). (c) The odd subsequence . Two subsequences with different limits implies itself diverges.      Section 2.4: Cauchy Sequences (Zorn pp. 114–120)  Section 2.4 reframes convergence without reference to a limit. Read Definition 2.17 and Theorem 2.20 carefully. The equivalence of convergent and Cauchy in is another face of completeness—in it fails.    The Cauchy Definition   State Zorn's definition of a Cauchy sequence symbolically. Identify every quantifier and its type.  Compare to the definition of convergence. Which variable appears in the convergence definition but is absent from the Cauchy definition? What is the conceptual significance of that absence?     . The absent variable is the limit : the Cauchy definition talks only about the terms of the sequence among themselves. Conceptually, this is what makes Cauchy a purely internal notion of convergence, definable without reference to an external candidate limit.     Convergent Implies Cauchy   Read Zorn's proof that every convergent sequence is Cauchy (Proposition 2.18 or its analogue). The core identity is Explain how this identity, combined with the Triangle Inequality and the -split, delivers the Cauchy conclusion.  Is the Completeness Axiom used in this direction of the proof?    By the Triangle Inequality applied to the identity, . If , pick so that for ; then for , . Completeness is not used in this direction: the existence of is given by hypothesis.     Cauchy Implies Convergent (where completeness enters)   Read Zorn's proof that in , every Cauchy sequence converges. The argument has three steps:  Step 1: A Cauchy sequence is bounded. Step 2: By Bolzano–Weierstrass, a bounded sequence has a convergent subsequence. Step 3: A Cauchy sequence with a convergent subsequence converges.  For each step, identify: what theorem or property of does it use, and is completeness needed?  Conclude: In , Cauchy sequences need not converge. Give one familiar example.    Step 1: direct argument using the Cauchy property with ; no completeness needed. Step 2: Bolzano–Weierstrass, which does use completeness (either through MCT or through a nested-intervals argument). Step 3: Triangle-inequality argument; no additional completeness. Thus completeness enters via Step 2. In : any Cauchy sequence of rationals converging to in , e.g., the decimal truncations , is Cauchy in but has no limit in .    "
},
{
  "id": "ex-mod4-sg-21-1",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-21-1",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "Parsing the Definition.",
  "body": " Parsing the Definition   Write out Zorn's Definition 2.1 of convergence ( ) symbolically, using quantifiers ( , ) and the absolute value. Then answer:  How many quantifiers appear, and in what order?  Which variable is chosen by the adversary (i.e., you do not get to pick it), and which is chosen in response?  After a proof of convergence is written, what is the natural functional relationship between the adversary's choice and the responder's choice: typically, does get larger or smaller as gets smaller?      (a) Three: . The order is , , . (b) The adversary picks ; we pick in response. The final is a conclusion, not a choice. (c) gets larger as gets smaller: a finer tolerance requires going farther out in the sequence.   "
},
{
  "id": "ex-mod4-sg-21-2",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-21-2",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "Negating the Definition.",
  "body": " Negating the Definition   Write out the negation of convergence—that is, what means—by applying the standard negation rules from Module 1 (push through each quantifier in turn).  Then state what it means, in this same format, for the sequence to be divergent —that is, for no to be its limit.     means: . Divergence is: . The key point is that to disprove convergence to a specific , you exhibit a single that fails for every .   "
},
{
  "id": "ex-mod4-sg-21-3",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-21-3",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "From Scratch Work to Formal Proof.",
  "body": " From Scratch Work to Formal Proof   In Zorn's worked examples in §2.1, the author often first performs algebraic manipulation (finding the relationship between and ) and then writes a formal proof. Re-read Zorn's proof that (or whichever first explicit - argument Zorn presents near Definition 2.1).  Identify: where in the formal proof does the Archimedean Property appear, and why is it essential? Which of Module 2's tools is the Archimedean Property a consequence of?   "
},
{
  "id": "ex-mod4-sg-21-4",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-21-4",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "Boundedness.",
  "body": " Boundedness   State Zorn's definition of a bounded sequence (Definition 2.2 or nearby). Then prove Theorem 2.4 informally: if , then is bounded.  (Sketch: apply the definition of convergence with to bound the tail; then use the finiteness of the first terms to bound the head. Write this as two or three complete sentences.)    A sequence is bounded if there exists such that for all . If , pick so that for ; then for such . The initial terms form a finite set, so bounds the entire sequence.   "
},
{
  "id": "ex-mod4-sg-22-1",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-22-1",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "The Algebra of Limits.",
  "body": " The Algebra of Limits   Suppose and . State the three most commonly used conclusions from Theorem 2.5 (sum, product, quotient).  For the quotient, what additional hypothesis is needed beyond and , and why is that hypothesis necessary?    Sum: . Product: . Quotient: , provided (and implicitly the are eventually nonzero). The hypothesis is needed to avoid dividing by 0 both in the limit and, via a tail argument, in the quotient for large .   "
},
{
  "id": "ex-mod4-sg-22-2",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-22-2",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "Reading the Proof of the Sum Rule.",
  "body": " Reading the Proof of the Sum Rule   Read Zorn's proof that .  What algebraic identity launches the proof? (It is an application of the Triangle Inequality.)  Why is the tolerance split as instead of simply ?  How is chosen in terms of the and coming from and respectively?      (a) . (b) Each summand is bounded by , so their sum is bounded by —the desired bound. (c) , so that both convergence bounds hold simultaneously for .   "
},
{
  "id": "ex-mod4-sg-22-3",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-22-3",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "Using the Algebra of Limits on Rational Expressions.",
  "body": " Using the Algebra of Limits on Rational Expressions   Compute Do not write an - proof. Instead: divide numerator and denominator by , identify each term's limit (using and constants), and apply the Algebra of Limits to assemble the answer.  Write your reasoning in complete sentences. Indicate each step at which the algebra of limits is applied.    Dividing gives . Since and (product rule), we have numerator (sum rule) and denominator (sum rule, twice). Since the denominator's limit is nonzero, the quotient rule gives .   "
},
{
  "id": "ex-mod4-sg-22-4",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-22-4",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "The Squeeze Theorem in Practice.",
  "body": " The Squeeze Theorem in Practice   State the Squeeze Theorem from Zorn §2.2 in your own words. Then apply it to show that converges, and identify the limit.  Your solution should explicitly write the two bounding sequences you are squeezing between, explain why each converges (to what), and then invoke the theorem.     , so for all . Both and (by Archimedean Property \/ known limit), so by the Squeeze Theorem .   "
},
{
  "id": "ex-mod4-sg-23-1",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-23-1",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "Subsequences and Inheritance.",
  "body": " Subsequences and Inheritance   Define subsequence precisely: what does it mean for to be a subsequence of ? What is required of the index sequence ?  State (without proof) the inheritance result: if , what is the limit of every subsequence of ? State the contrapositive of the inheritance result and explain how it is used to prove divergence .     is a subsequence of if is a strictly increasing sequence in . Inheritance: if , every subsequence also converges to . Contrapositive: if has two subsequences converging to different limits, then diverges. This is the standard tool for showing that, e.g., diverges: the even terms converge to 1 and the odd terms to .   "
},
{
  "id": "ex-mod4-sg-23-2",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-23-2",
  "type": "Checkpoint",
  "number": "2.10",
  "title": "Where Completeness Enters the Monotone Convergence Theorem.",
  "body": " Where Completeness Enters the Monotone Convergence Theorem   State the Monotone Convergence Theorem as Zorn presents it (Theorem 2.3, or its analogue in your text). Then re-read the proof slowly.    What set does the proof consider, and why is nonempty and bounded above?  At what step is the Completeness Axiom invoked, and what object does it produce?  How is the -characterization of the supremum (from Module 2) used to produce the index needed by the - definition of convergence?  Where in the proof is the hypothesis that is monotone actually used?      (a) , the set of terms. It is nonempty (contains ) and bounded above by the given bound on . (b) Completeness is used to assert . (c) The -characterization provides, for any , an index with . (d) Monotonicity (increasingness) is used to pass from to for all —we need to know later terms do not drop back below .   "
},
{
  "id": "ex-mod4-sg-23-3",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-23-3",
  "type": "Checkpoint",
  "number": "2.11",
  "title": "The Bolzano–Weierstrass Theorem.",
  "body": " The Bolzano–Weierstrass Theorem   State the Bolzano–Weierstrass Theorem. Read one of Zorn's proof strategies (whichever he presents; most likely the monotone-subsequence approach).    In the monotone-subsequence strategy, the first step is to show every sequence of reals has a monotone subsequence. Why is that claim not obvious?  Once a monotone subsequence has been produced, how do the hypotheses of the theorem ensure that the subsequence is bounded?  How does Monotone Convergence finish the argument?     "
},
{
  "id": "ex-mod4-sg-23-4",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-23-4",
  "type": "Checkpoint",
  "number": "2.12",
  "title": "Applying Bolzano–Weierstrass.",
  "body": " Applying Bolzano–Weierstrass   Consider the bounded sequence .  Verify that is bounded.  Bolzano–Weierstrass guarantees a convergent subsequence. Identify one such subsequence explicitly and compute its limit (using limit laws, not - ).  Find a second convergent subsequence with a different limit. What does this show about itself?      (a) , so for all ; the sequence is bounded. (b) The even subsequence (limit laws: divide by ). (c) The odd subsequence . Two subsequences with different limits implies itself diverges.   "
},
{
  "id": "ex-mod4-sg-24-1",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-24-1",
  "type": "Checkpoint",
  "number": "2.13",
  "title": "The Cauchy Definition.",
  "body": " The Cauchy Definition   State Zorn's definition of a Cauchy sequence symbolically. Identify every quantifier and its type.  Compare to the definition of convergence. Which variable appears in the convergence definition but is absent from the Cauchy definition? What is the conceptual significance of that absence?     . The absent variable is the limit : the Cauchy definition talks only about the terms of the sequence among themselves. Conceptually, this is what makes Cauchy a purely internal notion of convergence, definable without reference to an external candidate limit.   "
},
{
  "id": "ex-mod4-sg-24-2",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-24-2",
  "type": "Checkpoint",
  "number": "2.14",
  "title": "Convergent Implies Cauchy.",
  "body": " Convergent Implies Cauchy   Read Zorn's proof that every convergent sequence is Cauchy (Proposition 2.18 or its analogue). The core identity is Explain how this identity, combined with the Triangle Inequality and the -split, delivers the Cauchy conclusion.  Is the Completeness Axiom used in this direction of the proof?    By the Triangle Inequality applied to the identity, . If , pick so that for ; then for , . Completeness is not used in this direction: the existence of is given by hypothesis.   "
},
{
  "id": "ex-mod4-sg-24-3",
  "level": "2",
  "url": "ws-mod4-study-guide.html#ex-mod4-sg-24-3",
  "type": "Checkpoint",
  "number": "2.15",
  "title": "Cauchy Implies Convergent (where completeness enters).",
  "body": " Cauchy Implies Convergent (where completeness enters)   Read Zorn's proof that in , every Cauchy sequence converges. The argument has three steps:  Step 1: A Cauchy sequence is bounded. Step 2: By Bolzano–Weierstrass, a bounded sequence has a convergent subsequence. Step 3: A Cauchy sequence with a convergent subsequence converges.  For each step, identify: what theorem or property of does it use, and is completeness needed?  Conclude: In , Cauchy sequences need not converge. Give one familiar example.    Step 1: direct argument using the Cauchy property with ; no completeness needed. Step 2: Bolzano–Weierstrass, which does use completeness (either through MCT or through a nested-intervals argument). Step 3: Triangle-inequality argument; no additional completeness. Thus completeness enters via Step 2. In : any Cauchy sequence of rationals converging to in , e.g., the decimal truncations , is Cauchy in but has no limit in .   "
},
{
  "id": "ws-mod4-worked-examples",
  "level": "1",
  "url": "ws-mod4-worked-examples.html",
  "type": "Section",
  "number": "3",
  "title": "Module 4: Worked Examples",
  "body": " Module 4: Worked Examples  Annotated Proof Walkthroughs — Estimated time: 45 minutes   Read each example slowly. The goal is not just to see what the answer is, but to internalize the proof template . Example 1 is the basic - pattern you will reproduce on the assessment. Example 2 shows how the Algebra of Limits replaces direct - work for rational expressions. Example 3 shows the Monotone Convergence Theorem in its most common use: a recursively defined sequence whose limit is not visible at a glance.     Example 1: A Direct - Proof   Prove directly from the definition that      Scratch work (this section is part of the solution process; always do this before writing the proof).   We want to choose, given , an index such that Solving for : this happens exactly when , i.e., . So we should choose to be any natural number exceeding . The Archimedean Property guarantees such exists.  We could also use the weaker but simpler bound , requiring only . Either choice works; we pick the cleaner Archimedean-style bound.   Proof.   Let . By the Archimedean Property, there exists with . Then for every , where the first inequality uses (so ), the second uses , and the third uses . Since was arbitrary, .    What to notice. The proof has a fixed structure you will reproduce many times: start the formal proof with Let , produce , then verify the bound on for . The scratch work lives outside that formal proof but must be shown; the scratch work is what justifies the specific choice of . The chain of inequalities in the proof does the verification. Each step is labeled with a reason: you should do this in your own proofs too.      Example 2: A Rational Limit via the Algebra of Limits   Evaluate Do not use an - argument; use the Algebra of Limits (Theorem 2.5) directly.     Set-up. The standard technique for a ratio of polynomials in is to divide numerator and denominator by the highest power of appearing, which forces every term to converge. Here that is .   Proof.   Dividing numerator and denominator by , we rewrite the general term: We now evaluate the limits of the numerator and denominator separately, using the Algebra of Limits. Throughout, we use the known limit .   Numerator. By the product rule, The constant sequence 3 has limit 3. Applying the sum rule (twice),    Denominator. The constant 4 has limit 4, and by the product rule applied to . By the sum rule,    Quotient. The limit of the denominator is 4, which is nonzero. By the quotient rule,   Hence     What to notice. Once the basic limit is established (Example 1 covers ; is the classical case), every rational expression in reduces to a short sequence of limit-law applications. The only subtle point is the nonvanishing denominator hypothesis in the quotient rule: you must confirm in the limit that the denominator is nonzero, which we did here (it equals 4). If the numerator's leading degree had exceeded the denominator's, the method would break down (the sequence would diverge to infinity); if the degrees were equal, the limit is always the ratio of leading coefficients.      Example 3: A Recursive Sequence and the Monotone Convergence Theorem   Define the sequence recursively by Prove that converges and find its limit.     Strategy. The formula for is not in closed form, so a direct - proof is impractical. We instead: (1) show is increasing and bounded above, (2) conclude it converges by the Monotone Convergence Theorem, and (3) find the limit by letting in the recursion.   Step 1: The sequence is bounded above by 2.   We claim for every , and prove this by induction. Base case.  . Inductive step. Suppose . Then using that is monotone increasing on . By induction, for all .   Step 2: The sequence is increasing.   We claim for every , again by induction. Base case.  . Inductive step. Suppose . Adding 2 and applying the (strictly monotone) square root, So . By induction, is strictly increasing.   Step 3: Apply the Monotone Convergence Theorem.   By Steps 1 and 2, is monotone increasing and bounded above (by 2). By the Monotone Convergence Theorem, converges to some limit . Because all terms satisfy , we have .   Step 4: Identify the limit.   Letting in the recursion and using the continuity of the square root together with the Algebra of Limits (the subsequence is just shifted by one index, so it shares the limit ), we get Squaring, , i.e., , which factors as . So or . Since , we conclude .    What to notice. This is the archetypal pattern for a recursively defined sequence. Three moves, always in this order: (1) prove boundedness by induction , often guessing the bound by first solving the fixed-point equation informally; (2) prove monotonicity by induction , often driven by a monotone function applied to the recursion; (3) apply MCT to get a limit, then solve a fixed-point equation for its value. Note how the Completeness Axiom enters through MCT: without completeness, Step 3 could fail (the sequence would be Cauchy in but might lack a limit in a smaller ordered field). The continuity of the square root used in Step 4 is a fact we will prove formally in Module 6; here we use it informally, as Zorn does in §2.3.    "
},
{
  "id": "ex-mod4-we-1",
  "level": "2",
  "url": "ws-mod4-worked-examples.html#ex-mod4-we-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "Example 1: A Direct <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-<span class=\"process-math\">\\(N\\)<\/span> Proof.",
  "body": " Example 1: A Direct - Proof   Prove directly from the definition that      Scratch work (this section is part of the solution process; always do this before writing the proof).   We want to choose, given , an index such that Solving for : this happens exactly when , i.e., . So we should choose to be any natural number exceeding . The Archimedean Property guarantees such exists.  We could also use the weaker but simpler bound , requiring only . Either choice works; we pick the cleaner Archimedean-style bound.   Proof.   Let . By the Archimedean Property, there exists with . Then for every , where the first inequality uses (so ), the second uses , and the third uses . Since was arbitrary, .    What to notice. The proof has a fixed structure you will reproduce many times: start the formal proof with Let , produce , then verify the bound on for . The scratch work lives outside that formal proof but must be shown; the scratch work is what justifies the specific choice of . The chain of inequalities in the proof does the verification. Each step is labeled with a reason: you should do this in your own proofs too.   "
},
{
  "id": "ex-mod4-we-2",
  "level": "2",
  "url": "ws-mod4-worked-examples.html#ex-mod4-we-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "Example 2: A Rational Limit via the Algebra of Limits.",
  "body": " Example 2: A Rational Limit via the Algebra of Limits   Evaluate Do not use an - argument; use the Algebra of Limits (Theorem 2.5) directly.     Set-up. The standard technique for a ratio of polynomials in is to divide numerator and denominator by the highest power of appearing, which forces every term to converge. Here that is .   Proof.   Dividing numerator and denominator by , we rewrite the general term: We now evaluate the limits of the numerator and denominator separately, using the Algebra of Limits. Throughout, we use the known limit .   Numerator. By the product rule, The constant sequence 3 has limit 3. Applying the sum rule (twice),    Denominator. The constant 4 has limit 4, and by the product rule applied to . By the sum rule,    Quotient. The limit of the denominator is 4, which is nonzero. By the quotient rule,   Hence     What to notice. Once the basic limit is established (Example 1 covers ; is the classical case), every rational expression in reduces to a short sequence of limit-law applications. The only subtle point is the nonvanishing denominator hypothesis in the quotient rule: you must confirm in the limit that the denominator is nonzero, which we did here (it equals 4). If the numerator's leading degree had exceeded the denominator's, the method would break down (the sequence would diverge to infinity); if the degrees were equal, the limit is always the ratio of leading coefficients.   "
},
{
  "id": "ex-mod4-we-3",
  "level": "2",
  "url": "ws-mod4-worked-examples.html#ex-mod4-we-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "Example 3: A Recursive Sequence and the Monotone Convergence Theorem.",
  "body": " Example 3: A Recursive Sequence and the Monotone Convergence Theorem   Define the sequence recursively by Prove that converges and find its limit.     Strategy. The formula for is not in closed form, so a direct - proof is impractical. We instead: (1) show is increasing and bounded above, (2) conclude it converges by the Monotone Convergence Theorem, and (3) find the limit by letting in the recursion.   Step 1: The sequence is bounded above by 2.   We claim for every , and prove this by induction. Base case.  . Inductive step. Suppose . Then using that is monotone increasing on . By induction, for all .   Step 2: The sequence is increasing.   We claim for every , again by induction. Base case.  . Inductive step. Suppose . Adding 2 and applying the (strictly monotone) square root, So . By induction, is strictly increasing.   Step 3: Apply the Monotone Convergence Theorem.   By Steps 1 and 2, is monotone increasing and bounded above (by 2). By the Monotone Convergence Theorem, converges to some limit . Because all terms satisfy , we have .   Step 4: Identify the limit.   Letting in the recursion and using the continuity of the square root together with the Algebra of Limits (the subsequence is just shifted by one index, so it shares the limit ), we get Squaring, , i.e., , which factors as . So or . Since , we conclude .    What to notice. This is the archetypal pattern for a recursively defined sequence. Three moves, always in this order: (1) prove boundedness by induction , often guessing the bound by first solving the fixed-point equation informally; (2) prove monotonicity by induction , often driven by a monotone function applied to the recursion; (3) apply MCT to get a limit, then solve a fixed-point equation for its value. Note how the Completeness Axiom enters through MCT: without completeness, Step 3 could fail (the sequence would be Cauchy in but might lack a limit in a smaller ordered field). The continuity of the square root used in Step 4 is a fact we will prove formally in Module 6; here we use it informally, as Zorn does in §2.3.   "
},
{
  "id": "ws-mod4-practice-set",
  "level": "1",
  "url": "ws-mod4-practice-set.html",
  "type": "Section",
  "number": "4",
  "title": "Module 4: Practice Problem Set",
  "body": " Module 4: Practice Problem Set  Estimated time: 110 minutes   Problems are labeled (Foundational), (Standard), and (Challenge). Work in order within each level; later problems in a level often build on earlier ones.  These problems are not submitted, but you should write out complete solutions. For any problem that asks you to prove something, apply the standards from the Worked Examples: scratch work labeled and separate from the formal proof, complete sentences, every step justified.     Foundational Problems    Limit Intuition   For each sequence, state (without proof) its limit, or state that it diverges. A one-sentence reason is enough.          (a) Converges to 0 (numerator fixed, denominator ). (b) . (c) Diverges: even subsequence , odd subsequence . (d) , which grows without bound; diverges.     Finding Given   For and each of the given tolerances , find the smallest such that for all . Show your work.     (general) , in terms of .      We need . (a) (smallest integer exceeding 10). (b) . (c) . (d) Any integer ; by the Archimedean Property, such exists, and one standard choice is .     Bounded, Monotone, or Both?   For each sequence, decide whether it is (i) bounded, (ii) monotone (increasing or decreasing), or (iii) neither. Briefly justify each answer.          (a) Monotone increasing; not bounded (above). (b) Bounded; not monotone. (c) Bounded ( ) and monotone increasing (check ). (d) Bounded ( ) and monotone decreasing.     Algebra of Limits   Use the Algebra of Limits (and the known limit ) to evaluate each limit. Write out which limit law you invoke at each step.         (a) (sum\/difference rule). (b) Divide by : (sum, quotient, ). (c) Divide by : (sum, quotient, via product rule, ).      Standard Problems    A Direct - Proof   Prove directly from the definition of convergence that   Your proof must follow the template from Worked Example 1: explicit scratch work, clearly labeled, that derives the relationship between and ; followed by the formal proof written in complete sentences, with every inequality in the verification step justified.    Compute Then find the condition on for this to be less than , and apply the Archimedean Property.     The Squeeze Theorem   Prove that Use the Squeeze Theorem (Theorem 2.6). Your proof should (i) explicitly identify two bounding sequences , (ii) state what each of those sequences converges to (and why), and (iii) invoke the Squeeze Theorem by name.    For any real number , , so . Both outer sequences tend to 0.     Convergent Implies Bounded   Prove that if , then is bounded. Write a complete proof. (This is Theorem 2.4 in Zorn; the argument was sketched in the study guide.)  Your proof should use the definition of convergence with to bound the tail of the sequence, then use the finiteness of the initial segment to bound the whole sequence.    By convergence with , pick so that for . The Triangle Inequality then gives for . Bound by their maximum, and combine.     Proving Divergence via Negation   Prove that the sequence diverges.  Your argument must use the negation of the definition of convergence (as developed in the study guide): for any candidate limit , exhibit a specific for which the convergence definition fails.  A proof via two subsequences with different limits is elegant but not what this problem asks for. Use the raw definition.    Let . Since adjacent terms satisfy , the Triangle Inequality implies , so at least one of the two is at least 1. Use this with .      Challenge Problems    A Cauchy Proof from Definition   Let . Prove directly from the definition of Cauchy sequence that is Cauchy.  You may not use the theorem convergent implies Cauchy even though it would close this problem in one line. The goal is to produce, given , an explicit such that .    Without loss of generality . Then so . Choose .     Applying Bolzano–Weierstrass   Let be a bounded sequence of real numbers. Suppose that every convergent subsequence of converges to the same limit . Prove that .  This is the converse direction of the subsequence-inheritance result, with an extra hypothesis. It illustrates why Bolzano–Weierstrass is the right tool for controlling sequences whose convergence you cannot verify directly.    Proof by contradiction. If , there exists and a subsequence with for all . This subsequence is bounded; by Bolzano–Weierstrass it has a further convergent sub-subsequence, which by hypothesis converges to . But all its terms are at least away from — contradiction.    "
},
{
  "id": "ex-mod4-ps-F1",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-F1",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Limit Intuition.",
  "body": " Limit Intuition   For each sequence, state (without proof) its limit, or state that it diverges. A one-sentence reason is enough.          (a) Converges to 0 (numerator fixed, denominator ). (b) . (c) Diverges: even subsequence , odd subsequence . (d) , which grows without bound; diverges.   "
},
{
  "id": "ex-mod4-ps-F2",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-F2",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Finding <span class=\"process-math\">\\(N\\)<\/span> Given <span class=\"process-math\">\\(\\varepsilon\\)<\/span>.",
  "body": " Finding Given   For and each of the given tolerances , find the smallest such that for all . Show your work.     (general) , in terms of .      We need . (a) (smallest integer exceeding 10). (b) . (c) . (d) Any integer ; by the Archimedean Property, such exists, and one standard choice is .   "
},
{
  "id": "ex-mod4-ps-F3",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-F3",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Bounded, Monotone, or Both?",
  "body": " Bounded, Monotone, or Both?   For each sequence, decide whether it is (i) bounded, (ii) monotone (increasing or decreasing), or (iii) neither. Briefly justify each answer.          (a) Monotone increasing; not bounded (above). (b) Bounded; not monotone. (c) Bounded ( ) and monotone increasing (check ). (d) Bounded ( ) and monotone decreasing.   "
},
{
  "id": "ex-mod4-ps-F4",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-F4",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Algebra of Limits.",
  "body": " Algebra of Limits   Use the Algebra of Limits (and the known limit ) to evaluate each limit. Write out which limit law you invoke at each step.         (a) (sum\/difference rule). (b) Divide by : (sum, quotient, ). (c) Divide by : (sum, quotient, via product rule, ).   "
},
{
  "id": "ex-mod4-ps-S1",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-S1",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> A Direct <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-<span class=\"process-math\">\\(N\\)<\/span> Proof.",
  "body": " A Direct - Proof   Prove directly from the definition of convergence that   Your proof must follow the template from Worked Example 1: explicit scratch work, clearly labeled, that derives the relationship between and ; followed by the formal proof written in complete sentences, with every inequality in the verification step justified.    Compute Then find the condition on for this to be less than , and apply the Archimedean Property.   "
},
{
  "id": "ex-mod4-ps-S2",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-S2",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> The Squeeze Theorem.",
  "body": " The Squeeze Theorem   Prove that Use the Squeeze Theorem (Theorem 2.6). Your proof should (i) explicitly identify two bounding sequences , (ii) state what each of those sequences converges to (and why), and (iii) invoke the Squeeze Theorem by name.    For any real number , , so . Both outer sequences tend to 0.   "
},
{
  "id": "ex-mod4-ps-S3",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-S3",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Convergent Implies Bounded.",
  "body": " Convergent Implies Bounded   Prove that if , then is bounded. Write a complete proof. (This is Theorem 2.4 in Zorn; the argument was sketched in the study guide.)  Your proof should use the definition of convergence with to bound the tail of the sequence, then use the finiteness of the initial segment to bound the whole sequence.    By convergence with , pick so that for . The Triangle Inequality then gives for . Bound by their maximum, and combine.   "
},
{
  "id": "ex-mod4-ps-S4",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-S4",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Proving Divergence via Negation.",
  "body": " Proving Divergence via Negation   Prove that the sequence diverges.  Your argument must use the negation of the definition of convergence (as developed in the study guide): for any candidate limit , exhibit a specific for which the convergence definition fails.  A proof via two subsequences with different limits is elegant but not what this problem asks for. Use the raw definition.    Let . Since adjacent terms satisfy , the Triangle Inequality implies , so at least one of the two is at least 1. Use this with .   "
},
{
  "id": "ex-mod4-ps-C1",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-C1",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> A Cauchy Proof from Definition.",
  "body": " A Cauchy Proof from Definition   Let . Prove directly from the definition of Cauchy sequence that is Cauchy.  You may not use the theorem convergent implies Cauchy even though it would close this problem in one line. The goal is to produce, given , an explicit such that .    Without loss of generality . Then so . Choose .   "
},
{
  "id": "ex-mod4-ps-C2",
  "level": "2",
  "url": "ws-mod4-practice-set.html#ex-mod4-ps-C2",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> Applying Bolzano–Weierstrass.",
  "body": " Applying Bolzano–Weierstrass   Let be a bounded sequence of real numbers. Suppose that every convergent subsequence of converges to the same limit . Prove that .  This is the converse direction of the subsequence-inheritance result, with an extra hypothesis. It illustrates why Bolzano–Weierstrass is the right tool for controlling sequences whose convergence you cannot verify directly.    Proof by contradiction. If , there exists and a subsequence with for all . This subsequence is bounded; by Bolzano–Weierstrass it has a further convergent sub-subsequence, which by hypothesis converges to . But all its terms are at least away from — contradiction.   "
},
{
  "id": "ws-mod4-bridge-reading",
  "level": "1",
  "url": "ws-mod4-bridge-reading.html",
  "type": "Section",
  "number": "5",
  "title": "Module 4: Bridge Reading Guide",
  "body": " Module 4: Bridge Reading Guide  Bauldry §2.5 — Estimated time: 40 minutes   Every module ends with a bridge reading in Bauldry's Introduction to Real Analysis . These readings orient you toward MAT 5610 by showing you how the material you just learned looks in the course's primary text. Bauldry's style is more compressed than Zorn's: a definition that takes Zorn a half-page may occupy a single sentence in Bauldry; a theorem whose proof Zorn laid out in four paragraphs may be dispatched by Bauldry in two. The goal is not to master Bauldry yet, but to begin reading him fluently.   For this module, read: Bauldry §2.5 ( Sequences , approximately pp. 88–99). This single section covers everything you studied in Zorn §2.1–2.4.     Bauldry's Definition of Convergence  Bauldry Definition 2.15 (or nearby) gives the - definition of convergence. Its symbolic content is identical to Zorn's, but Bauldry's wording and typographic style differ. Read it carefully.    Locating and Reading the Definition   Find Bauldry's - definition of convergence in §2.5.  Copy Bauldry's exact statement of the definition (one or two sentences).  Identify each quantifier and its type ( or ), in the order they appear. Is the order identical to Zorn's?  Bauldry and Zorn use slightly different notation for the limit (e.g., vs. ). Note which variants Bauldry uses; you should be able to read all of them.       Bauldry's First Theorem on Sequences   Bauldry states and proves the uniqueness of the limit (Theorem 2.48 or its analogue) immediately after the definition.  State the uniqueness theorem in your own words.  Bauldry's proof is likely a short argument by contradiction using the trick. What is the contradiction, and how is the Triangle Inequality used?  Did the proof depend on completeness, or only on the definition of convergence and the Triangle Inequality?        The Monotone Convergence Theorem in Bauldry  Bauldry states a version of the Monotone Convergence Theorem as Theorem 2.53 (or the numbered theorem whose statement matches a bounded monotone sequence converges ). Read it and its proof carefully; this is one of the key places where Bauldry uses the Completeness Axiom.    Tracking Completeness in Bauldry's MCT Proof   Read Bauldry's proof of the Monotone Convergence Theorem.  What is the analog of the set in Bauldry's proof? Does he work with this set explicitly, or with the sequence directly?  At what sentence does the Completeness Axiom enter, and what object does it produce?  Locate the step that uses the -characterization of the supremum. Is this characterization proved earlier in Bauldry, or stated as part of the axiom itself?  Is Bauldry's proof structurally identical to the one in the Module 4 study guide (ex-mod4-sg-23-2), or does he organize the argument differently? Note one step you had to unpack or fill in when reading it.       The Bolzano–Weierstrass Theorem   Locate Bauldry's statement and proof (or sketch) of Bolzano–Weierstrass (Theorem 2.54 or the numbered theorem whose statement matches every bounded sequence has a convergent subsequence ).  State the theorem precisely in your own words.  Which proof strategy does Bauldry use: the monotone-subsequence approach, the bisection (nested-intervals) approach, or something else?  Identify the step in Bauldry's proof at which completeness is used. Is it used directly (via the Completeness Axiom) or indirectly (via a theorem already proved from completeness)?  Bauldry's proof is likely more compressed than Zorn's. Name one sentence in Bauldry's proof that, if given to someone unfamiliar with the argument, would require them to fill in implicit reasoning.        Cauchy Sequences in Bauldry  Bauldry's definition of Cauchy sequence (Definition 2.16 or its analogue) and the equivalence with convergence in (Theorem 2.55 or its analogue) close out his treatment of sequences. This is the same equivalence you studied in Zorn §2.4, but Bauldry's phrasing is slightly different.    The Cauchy Equivalence   Locate Bauldry's statement of the equivalence Cauchy convergent (in ).   State the theorem precisely. Does Bauldry call  complete (in the Cauchy sense) as a consequence?  Bauldry's proof has two directions. Which one uses completeness, and via which earlier theorem?  The other direction—convergent implies Cauchy—can be proved without completeness. Outline Bauldry's argument in one or two sentences.        Where Do Sequences Reappear in Bauldry?   Scan the section headings and theorem statements in Bauldry beyond §2.5. Find at least two theorems elsewhere in Chapter 2 whose statements or proofs invoke sequences directly (for example, the sequential characterization of continuity, or the use of a sequence to build a point with a desired property).  For each result you find: state its name or number, and write one sentence explaining in what way sequence convergence enters the argument. (You are not expected to read the full proofs yet; identifying where sequences appear is enough.)    "
},
{
  "id": "ex-mod4-br-1",
  "level": "2",
  "url": "ws-mod4-bridge-reading.html#ex-mod4-br-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "Locating and Reading the Definition.",
  "body": " Locating and Reading the Definition   Find Bauldry's - definition of convergence in §2.5.  Copy Bauldry's exact statement of the definition (one or two sentences).  Identify each quantifier and its type ( or ), in the order they appear. Is the order identical to Zorn's?  Bauldry and Zorn use slightly different notation for the limit (e.g., vs. ). Note which variants Bauldry uses; you should be able to read all of them.     "
},
{
  "id": "ex-mod4-br-2",
  "level": "2",
  "url": "ws-mod4-bridge-reading.html#ex-mod4-br-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "Bauldry’s First Theorem on Sequences.",
  "body": " Bauldry's First Theorem on Sequences   Bauldry states and proves the uniqueness of the limit (Theorem 2.48 or its analogue) immediately after the definition.  State the uniqueness theorem in your own words.  Bauldry's proof is likely a short argument by contradiction using the trick. What is the contradiction, and how is the Triangle Inequality used?  Did the proof depend on completeness, or only on the definition of convergence and the Triangle Inequality?     "
},
{
  "id": "ex-mod4-br-3",
  "level": "2",
  "url": "ws-mod4-bridge-reading.html#ex-mod4-br-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "Tracking Completeness in Bauldry’s MCT Proof.",
  "body": " Tracking Completeness in Bauldry's MCT Proof   Read Bauldry's proof of the Monotone Convergence Theorem.  What is the analog of the set in Bauldry's proof? Does he work with this set explicitly, or with the sequence directly?  At what sentence does the Completeness Axiom enter, and what object does it produce?  Locate the step that uses the -characterization of the supremum. Is this characterization proved earlier in Bauldry, or stated as part of the axiom itself?  Is Bauldry's proof structurally identical to the one in the Module 4 study guide (ex-mod4-sg-23-2), or does he organize the argument differently? Note one step you had to unpack or fill in when reading it.     "
},
{
  "id": "ex-mod4-br-4",
  "level": "2",
  "url": "ws-mod4-bridge-reading.html#ex-mod4-br-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "The Bolzano–Weierstrass Theorem.",
  "body": " The Bolzano–Weierstrass Theorem   Locate Bauldry's statement and proof (or sketch) of Bolzano–Weierstrass (Theorem 2.54 or the numbered theorem whose statement matches every bounded sequence has a convergent subsequence ).  State the theorem precisely in your own words.  Which proof strategy does Bauldry use: the monotone-subsequence approach, the bisection (nested-intervals) approach, or something else?  Identify the step in Bauldry's proof at which completeness is used. Is it used directly (via the Completeness Axiom) or indirectly (via a theorem already proved from completeness)?  Bauldry's proof is likely more compressed than Zorn's. Name one sentence in Bauldry's proof that, if given to someone unfamiliar with the argument, would require them to fill in implicit reasoning.     "
},
{
  "id": "ex-mod4-br-5",
  "level": "2",
  "url": "ws-mod4-bridge-reading.html#ex-mod4-br-5",
  "type": "Checkpoint",
  "number": "5.5",
  "title": "The Cauchy Equivalence.",
  "body": " The Cauchy Equivalence   Locate Bauldry's statement of the equivalence Cauchy convergent (in ).   State the theorem precisely. Does Bauldry call  complete (in the Cauchy sense) as a consequence?  Bauldry's proof has two directions. Which one uses completeness, and via which earlier theorem?  The other direction—convergent implies Cauchy—can be proved without completeness. Outline Bauldry's argument in one or two sentences.     "
},
{
  "id": "ex-mod4-br-6",
  "level": "2",
  "url": "ws-mod4-bridge-reading.html#ex-mod4-br-6",
  "type": "Checkpoint",
  "number": "5.6",
  "title": "Where Do Sequences Reappear in Bauldry?",
  "body": " Where Do Sequences Reappear in Bauldry?   Scan the section headings and theorem statements in Bauldry beyond §2.5. Find at least two theorems elsewhere in Chapter 2 whose statements or proofs invoke sequences directly (for example, the sequential characterization of continuity, or the use of a sequence to build a point with a desired property).  For each result you find: state its name or number, and write one sentence explaining in what way sequence convergence enters the argument. (You are not expected to read the full proofs yet; identifying where sequences appear is enough.)   "
},
{
  "id": "ws-mod4-assessment",
  "level": "1",
  "url": "ws-mod4-assessment.html",
  "type": "Section",
  "number": "6",
  "title": "Module 4: Assessment",
  "body": " Module 4: Assessment  Submitted Proofs and Reflection — Estimated time: 45 minutes    This assessment has three parts. Parts 1 and 2 ask you to write complete mathematical proofs, submitted for feedback. Part 3 is a short reflection. Submit all three parts together as a single document (PDF or typed file) through the course management system.   Write-up standard. All proofs must be written in complete mathematical prose. Use the style modeled in the Worked Examples: include scratch work (clearly labeled) before the formal proof, announce your strategy, write in complete grammatical sentences, and justify every step. Work consisting only of symbolic manipulations without explanation will not receive full credit.   A note on Part 2. All students complete all three parts. For Part 2, choose the option that best matches your background: if you have prior real analysis experience, challenge yourself with Option B. If this is newer territory, Option A is the right starting point.   Academic integrity. Your proofs must be your own work. You may refer to your notes, the textbooks, and the worked examples from this module. You may not collaborate with other students on the written proofs or use AI writing tools to draft your arguments.   Part 1: Core Proof (Required) (Estimated time: 25 minutes)  Consider the sequence defined by     Conjecturing the Limit   Based on the Algebra of Limits (or on straightforward algebra on the terms), identify the value of .  Show your algebra clearly. This work does not need to be in formal proof style; it is the analysis step that precedes the - proof.    Divide numerator and denominator by : . Each of and tends to 0.     An - Proof of the Limit   Using your work in the previous problem, prove directly from the - definition that   Your proof must have the following structure:   Scratch work (clearly labeled). Simplify by combining over a common denominator. Determine the condition on under which , and describe how you will choose .   Formal proof. Write a complete proof beginning Let . Produce (invoking the Archimedean Property by name), and verify that implies , with every inequality in the verification labeled with its justification.      A direct calculation gives Requiring is equivalent to . A slightly cleaner choice: since for all , we have , so it is enough to require .     The Role of Completeness   In one or two sentences, explain where the Completeness Axiom enters your proof in the previous problem. (Hint: does it enter directly, or through the Archimedean Property?)       Part 2: Proof Choice (Required — Choose One) (Estimated time: 15 minutes)  Choose one of the following two proof problems. Both ask for a complete proof; they differ in difficulty and the techniques required. Label your submission clearly with Option A or Option B.     Option A (Standard): A Limit via the Algebra of Limits   Evaluate   Write a complete solution using the Algebra of Limits (Theorem 2.5) and the known limit . Do not write an - proof.  Your solution must: (i) begin with an algebraic rewrite of the expression that puts every term in a form whose limit you know, (ii) evaluate the numerator and denominator limits separately, stating which limit law you invoke at each step, and (iii) verify the nonvanishing hypothesis of the quotient rule before applying it.    Divide numerator and denominator by . The limit law on quotients requires the denominator's limit to be nonzero; confirm this before taking the quotient.     Option B (More Challenging): Convergent Implies Cauchy   Prove directly from the definitions that every convergent sequence of real numbers is Cauchy.  That is: suppose is a sequence with . Prove that for every , there exists such that implies .  Your proof must clearly identify: what you assume from the convergence hypothesis, how you split , and where the Triangle Inequality is applied. Your proof should not use any theorem beyond the - definition and the Triangle Inequality.    Apply the convergence definition with tolerance to obtain with for . Then for , write and apply the Triangle Inequality.       Part 3: Reflection (Estimated time: 5 minutes)  Write 3–5 sentences for each question. These are graded for thoughtfulness, not for mathematical correctness.    Quantifier Alternation   In your Part 1(b) proof, where in the proof did you make a choice that depended on  ? What would have broken in the proof if your choice of had been made before seeing ?     Bauldry's Presentation   In the Bridge Reading you read Bauldry's treatment of sequences (§2.5). Compare the presentation style to Zorn's: what is more compressed in Bauldry, and what feels more like the Zorn text you worked through in the study guide? If there is a single Bauldry sentence that you had to read more than once to understand, quote it and describe what was implicit.     Looking Ahead   In Module 6, you will prove that a function is continuous at using an - argument: for every there exists such that implies . Based on what you practiced in this module, describe the connection you see between the - structure of a sequence convergence proof and the - structure of a continuity proof. What is similar? What role does play that will play?      Assessment Rubric (Informational)   The following rubric describes how submitted proofs will be evaluated.    Grading Criteria        Criterion  Full credit  Partial credit  Minimal credit    Logical correctness  All steps are valid; the argument proves exactly the stated claim  Mostly correct with one fixable gap  Significant logical errors or wrong claim proved    Use of definitions  The - definition is invoked correctly; quantifier order is explicit  Definition invoked but quantifier dependency obscured  Definition not invoked or confused with a different property    Choice of  An explicit depending on is produced and shown to work  Correct idea but the verification that works is incomplete  No explicit , or chosen without reference to    Mathematical prose  Complete grammatical sentences; scratch work labeled and separate from proof  Mostly prose with some missing connective sentences  Primarily symbolic with no connecting narrative    Reflection  Specific, thoughtful, and engages with the mathematical content  General but relevant observations  Vague or too brief to be informative     "
},
{
  "id": "assess-mod4-1a",
  "level": "2",
  "url": "ws-mod4-assessment.html#assess-mod4-1a",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "Conjecturing the Limit.",
  "body": " Conjecturing the Limit   Based on the Algebra of Limits (or on straightforward algebra on the terms), identify the value of .  Show your algebra clearly. This work does not need to be in formal proof style; it is the analysis step that precedes the - proof.    Divide numerator and denominator by : . Each of and tends to 0.   "
},
{
  "id": "assess-mod4-1b",
  "level": "2",
  "url": "ws-mod4-assessment.html#assess-mod4-1b",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "An <span class=\"process-math\">\\(\\varepsilon\\)<\/span>-<span class=\"process-math\">\\(N\\)<\/span> Proof of the Limit.",
  "body": " An - Proof of the Limit   Using your work in the previous problem, prove directly from the - definition that   Your proof must have the following structure:   Scratch work (clearly labeled). Simplify by combining over a common denominator. Determine the condition on under which , and describe how you will choose .   Formal proof. Write a complete proof beginning Let . Produce (invoking the Archimedean Property by name), and verify that implies , with every inequality in the verification labeled with its justification.      A direct calculation gives Requiring is equivalent to . A slightly cleaner choice: since for all , we have , so it is enough to require .   "
},
{
  "id": "assess-mod4-1c",
  "level": "2",
  "url": "ws-mod4-assessment.html#assess-mod4-1c",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "The Role of Completeness.",
  "body": " The Role of Completeness   In one or two sentences, explain where the Completeness Axiom enters your proof in the previous problem. (Hint: does it enter directly, or through the Archimedean Property?)   "
},
{
  "id": "assess-mod4-2a",
  "level": "2",
  "url": "ws-mod4-assessment.html#assess-mod4-2a",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "Option A (Standard): A Limit via the Algebra of Limits.",
  "body": " Option A (Standard): A Limit via the Algebra of Limits   Evaluate   Write a complete solution using the Algebra of Limits (Theorem 2.5) and the known limit . Do not write an - proof.  Your solution must: (i) begin with an algebraic rewrite of the expression that puts every term in a form whose limit you know, (ii) evaluate the numerator and denominator limits separately, stating which limit law you invoke at each step, and (iii) verify the nonvanishing hypothesis of the quotient rule before applying it.    Divide numerator and denominator by . The limit law on quotients requires the denominator's limit to be nonzero; confirm this before taking the quotient.   "
},
{
  "id": "assess-mod4-2b",
  "level": "2",
  "url": "ws-mod4-assessment.html#assess-mod4-2b",
  "type": "Checkpoint",
  "number": "6.5",
  "title": "Option B (More Challenging): Convergent Implies Cauchy.",
  "body": " Option B (More Challenging): Convergent Implies Cauchy   Prove directly from the definitions that every convergent sequence of real numbers is Cauchy.  That is: suppose is a sequence with . Prove that for every , there exists such that implies .  Your proof must clearly identify: what you assume from the convergence hypothesis, how you split , and where the Triangle Inequality is applied. Your proof should not use any theorem beyond the - definition and the Triangle Inequality.    Apply the convergence definition with tolerance to obtain with for . Then for , write and apply the Triangle Inequality.   "
},
{
  "id": "assess-mod4-r1",
  "level": "2",
  "url": "ws-mod4-assessment.html#assess-mod4-r1",
  "type": "Checkpoint",
  "number": "6.6",
  "title": "Quantifier Alternation.",
  "body": " Quantifier Alternation   In your Part 1(b) proof, where in the proof did you make a choice that depended on  ? What would have broken in the proof if your choice of had been made before seeing ?   "
},
{
  "id": "assess-mod4-r2",
  "level": "2",
  "url": "ws-mod4-assessment.html#assess-mod4-r2",
  "type": "Checkpoint",
  "number": "6.7",
  "title": "Bauldry’s Presentation.",
  "body": " Bauldry's Presentation   In the Bridge Reading you read Bauldry's treatment of sequences (§2.5). Compare the presentation style to Zorn's: what is more compressed in Bauldry, and what feels more like the Zorn text you worked through in the study guide? If there is a single Bauldry sentence that you had to read more than once to understand, quote it and describe what was implicit.   "
},
{
  "id": "assess-mod4-r3",
  "level": "2",
  "url": "ws-mod4-assessment.html#assess-mod4-r3",
  "type": "Checkpoint",
  "number": "6.8",
  "title": "Looking Ahead.",
  "body": " Looking Ahead   In Module 6, you will prove that a function is continuous at using an - argument: for every there exists such that implies . Based on what you practiced in this module, describe the connection you see between the - structure of a sequence convergence proof and the - structure of a continuity proof. What is similar? What role does play that will play?   "
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
