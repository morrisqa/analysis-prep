var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-mod8-orientation",
  "level": "1",
  "url": "ws-mod8-orientation.html",
  "type": "Section",
  "number": "1",
  "title": "Module 8: The Riemann Integral",
  "body": " Module 8: The Riemann Integral  Orientation     Define a partition of and compute the upper sum and lower sum .    Define the upper integral as and the lower integral as over all partitions.    State the definition of Riemann integrability (upper integral equals lower integral) and the Riemann integrability criterion ( ).    Prove that every continuous function on is Riemann integrable, using uniform continuity from Module 6.    State that monotone functions on are Riemann integrable.    State and apply linearity and monotonicity of the Riemann integral.    State and prove the Fundamental Theorem of Calculus, Part 1: if and is continuous, then .    State and prove FTC Part 2: if on , then .       The Riemann integral is the culmination of the first part of real analysis. It connects everything: the completeness of (upper and lower integrals exist by completeness), uniform continuity from Module 6 (the key ingredient in proving that every continuous function is integrable), and the Mean Value Theorem from Module 7 (the engine behind the proof of the Fundamental Theorem of Calculus). If Modules 6 and 7 felt like separate tools, Module 8 is where they snap together.  The definition of the integral via Darboux sums may look unfamiliar even if you have computed integrals before. In a calculus course, the integral is often introduced through Riemann sums with sample points; here we use suprema and infima on each subinterval, which always exist for bounded functions by the completeness of . This approach — upper sums from the top, lower sums from below, squeeze them together — is called the Darboux approach. It is equivalent to the Riemann sum definition but technically cleaner, and it makes the integrability criterion transparent.  The Fundamental Theorem of Calculus is where differentiation and integration meet. Understanding both parts — Part 1 says that differentiating an integral recovers the integrand; Part 2 says that integrating a derivative recovers the boundary values — is essential preparation for MAT 5610. The self-assessment questions below are not graded . Write informally; a sentence or two per question is fine.    Area Intuition   What does represent geometrically? What is your best guess for its value?     Partitions   Let partition . For , compute and by hand.     Integrability   Do you think the function (the Dirichlet function) is Riemann integrable? What happens when you try to compute upper and lower sums?     FTC   State the Fundamental Theorem of Calculus as you remember it from calculus. What are its two parts?     Your Background   Have you seen a proof of the FTC in a previous course? Describe what you remember.      A Note from the Instructor  The definition of the Riemann integral via Darboux sums is elegant but requires care: upper sums use suprema on each subinterval (not function values at sample points), so they always exist for bounded functions. This is not a technical nicety — it is precisely why the definition works. The integrability criterion is the key to everything, and students should memorize it: . If you can state and apply this criterion fluently, the proofs in this module will feel natural rather than mysterious.  The connection to uniform continuity (Module 6) is not coincidental — it is the reason continuous functions are integrable. The key step in the proof of continuous implies integrable is to bound the oscillation on each subinterval, which requires uniform continuity (pointwise continuity does not suffice). If you felt uncertain about the distinction between pointwise and uniform continuity in Module 6, this module provides the payoff for understanding it.    A Note on Pacing   A note on pacing. If you are coming in with prior real analysis experience, move quickly through Zorn §5.1–5.2 (you have likely seen Darboux sums before) and focus your attention on the proof of FTC Part 1 in Worked Example 3 and the Bridge Reading on Bauldry §2.4, which introduces the Riemann-Stieltjes integral — material that will be central in MAT 5610. If you are new to analysis, work carefully through the computation in Worked Example 1 ( on ) before tackling the integrability proofs; it shows the integrability criterion in its simplest possible form. The most common mistake in this module is confusing upper sums (from the sup) with Riemann sums (from a sample point); keep the definitions in front of you until the distinction is automatic.    Module Road Map (estimated time: 5 hours)       Component  Time  Purpose    Orientation (this document)  15 min  Goals, self-assessment, context    Video 1: Partitions and Riemann Sums  9 min  Core instruction via lightboard    Video 2: Integrability Criteria  9 min  Core instruction via lightboard    Video 3: The Fundamental Theorem of Calculus  10 min  Core instruction via lightboard    Companion Reading and Study Guide  55 min  Zorn §5.1–5.4 with guided questions    Worked Examples  40 min  Four annotated proof walkthroughs    Practice Problem Set  100 min  Scaffolded practice by difficulty    Bridge Reading Guide  40 min  Bauldry §1.4 and §2.4 with guided questions    Module Assessment  40 min  Submitted proofs and reflection     "
},
{
  "id": "obj-mod8",
  "level": "2",
  "url": "ws-mod8-orientation.html#obj-mod8",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   Define a partition of and compute the upper sum and lower sum .    Define the upper integral as and the lower integral as over all partitions.    State the definition of Riemann integrability (upper integral equals lower integral) and the Riemann integrability criterion ( ).    Prove that every continuous function on is Riemann integrable, using uniform continuity from Module 6.    State that monotone functions on are Riemann integrable.    State and apply linearity and monotonicity of the Riemann integral.    State and prove the Fundamental Theorem of Calculus, Part 1: if and is continuous, then .    State and prove FTC Part 2: if on , then .    "
},
{
  "id": "ex-mod8-sa-1",
  "level": "2",
  "url": "ws-mod8-orientation.html#ex-mod8-sa-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "Area Intuition.",
  "body": " Area Intuition   What does represent geometrically? What is your best guess for its value?   "
},
{
  "id": "ex-mod8-sa-2",
  "level": "2",
  "url": "ws-mod8-orientation.html#ex-mod8-sa-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "Partitions.",
  "body": " Partitions   Let partition . For , compute and by hand.   "
},
{
  "id": "ex-mod8-sa-3",
  "level": "2",
  "url": "ws-mod8-orientation.html#ex-mod8-sa-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "Integrability.",
  "body": " Integrability   Do you think the function (the Dirichlet function) is Riemann integrable? What happens when you try to compute upper and lower sums?   "
},
{
  "id": "ex-mod8-sa-4",
  "level": "2",
  "url": "ws-mod8-orientation.html#ex-mod8-sa-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "FTC.",
  "body": " FTC   State the Fundamental Theorem of Calculus as you remember it from calculus. What are its two parts?   "
},
{
  "id": "ex-mod8-sa-5",
  "level": "2",
  "url": "ws-mod8-orientation.html#ex-mod8-sa-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Your Background.",
  "body": " Your Background   Have you seen a proof of the FTC in a previous course? Describe what you remember.   "
},
{
  "id": "ws-mod8-study-guide",
  "level": "1",
  "url": "ws-mod8-study-guide.html",
  "type": "Section",
  "number": "2",
  "title": "Module 8: Companion Reading and Study Guide",
  "body": " Module 8: Companion Reading and Study Guide  Zorn §5.1–5.4 — Estimated time: 55 minutes   This guide accompanies four sections of Zorn's Understanding Real Analysis . Section 5.1 introduces partitions and Darboux sums. Section 5.2 develops the integrability criterion. Section 5.3 identifies the main classes of integrable functions (continuous and monotone). Section 5.4 proves the Fundamental Theorem of Calculus.  Read each section before working its questions. The recurring theme is the integrability criterion: a function is Riemann integrable if and only if for every there is a partition with . Every positive result in this module is proved by exhibiting such a partition.     Section 5.1: Partitions and Darboux Sums  Read Zorn's definitions of partition, Darboux sums, and upper and lower integrals carefully. The key notational distinction: is the supremum (not a sample value), and is the infimum. These always exist when is bounded.    Partitions and Mesh   Define a partition of and the mesh . For of , compute .    A partition of is a finite set with . The mesh is where . For , each subinterval has length , so .     Upper Sums for   For on with uniform partition of equal subintervals:  What is and what are the partition points ?  Compute on . Since is increasing, .  Write and use the formula to obtain .      (a) ; for . (b) Since is increasing on , the supremum on is attained at the right endpoint: . (c)       Section 5.2: The Integrability Criterion  The integrability criterion is the workhorse of this module. Read Zorn's statement and proof carefully. Every positive integrability result — continuous functions, monotone functions — is proved by exhibiting a partition that makes small.    Stating the Integrability Criterion   State the Riemann integrability criterion precisely. Why is sometimes called the oscillation sum ?    A bounded function on is Riemann integrable if and only if for every there exists a partition of such that . The quantity is the oscillation sum because measures the oscillation of on the th subinterval — the spread between the largest and smallest values of on that piece. When the total oscillation (weighted by subinterval length) can be made arbitrarily small, the function is integrable.     The Dirichlet Function   For the Dirichlet function if , if :  What is on any subinterval ? (Recall that the rationals are dense in .)  What is on any subinterval? (Recall that the irrationals are also dense in .)  Compute for any partition of .  Is the Dirichlet function Riemann integrable on ?      (a) Since is dense in , every subinterval contains rationals, so . (b) Since is dense in , every subinterval contains irrationals, so . (c) for any partition of . (d) No: since for every partition, the integrability criterion fails (take , for instance). The upper integral equals 1 and the lower integral equals 0, so they are not equal and is not Riemann integrable.      Section 5.3: Classes of Integrable Functions  Zorn establishes two main classes: continuous functions (using uniform continuity) and monotone functions (using a telescoping argument). Read both proofs, paying attention to where each uses special properties of the function class.    Continuous Implies Integrable   Sketch the proof that if is continuous on , then is Riemann integrable on . Which fact from Module 6 is used and where?    The key tool is the Heine-Cantor theorem (Module 6): a continuous function on a closed bounded interval is uniformly continuous. Given , apply uniform continuity to get such that . Choose any partition with mesh . On each subinterval , any two points are within of each other, so by uniform continuity. Then By the integrability criterion, is integrable. Uniform continuity is used to control ; pointwise continuity would not suffice because the same must work everywhere on simultaneously.     Monotone Implies Integrable   Prove that a monotone function on is Riemann integrable.  Assume without loss of generality that is increasing on . For the uniform partition with equal subintervals of width , show that using the telescoping nature of the sum and the fact that and for an increasing function.  Apply the integrability criterion: given , choose to conclude.      (a) For increasing , on the th subinterval the supremum is attained at the right endpoint and the infimum at the left: and . With uniform partition width : since the sum telescopes. (b) Given , choose (or if ). Then . By the integrability criterion, is integrable.      Section 5.4: The Fundamental Theorem of Calculus  Read both parts of the FTC carefully. Part 1 requires differentiating a function defined by an integral; Part 2 uses Part 1 together with the Module 7 corollary that a function with zero derivative on an interval is constant.    FTC Part 1 — Hypotheses and Statement   State FTC Part 1 precisely, including all hypotheses. What does it mean to say that is differentiable at ? (You must compute from the limit definition of the derivative.)     FTC Part 1. Let be continuous on and define for . Then is differentiable on and for all . To say is differentiable at means that the limit exists and equals .     FTC Part 2 — Statement and Proof     State FTC Part 2 precisely, listing all hypotheses.  Prove FTC Part 2 using FTC Part 1 as a lemma: if on , define . By Part 1, , so . By the Module 7 corollary (a function with zero derivative on an interval is constant), for some constant. Evaluate at to find , then at to conclude.      (a) FTC Part 2. Let be continuous on and let be differentiable on with . Then (b) Define . By FTC Part 1, for all . Hence on . By the Module 7 MVT corollary, for some constant . Evaluating at : , so . Thus for all . Evaluating at : .    "
},
{
  "id": "ex-mod8-sg-51-1",
  "level": "2",
  "url": "ws-mod8-study-guide.html#ex-mod8-sg-51-1",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "Partitions and Mesh.",
  "body": " Partitions and Mesh   Define a partition of and the mesh . For of , compute .    A partition of is a finite set with . The mesh is where . For , each subinterval has length , so .   "
},
{
  "id": "ex-mod8-sg-51-2",
  "level": "2",
  "url": "ws-mod8-study-guide.html#ex-mod8-sg-51-2",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "Upper Sums for <span class=\"process-math\">\\(f(x) = x^2\\)<\/span>.",
  "body": " Upper Sums for   For on with uniform partition of equal subintervals:  What is and what are the partition points ?  Compute on . Since is increasing, .  Write and use the formula to obtain .      (a) ; for . (b) Since is increasing on , the supremum on is attained at the right endpoint: . (c)    "
},
{
  "id": "ex-mod8-sg-52-1",
  "level": "2",
  "url": "ws-mod8-study-guide.html#ex-mod8-sg-52-1",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "Stating the Integrability Criterion.",
  "body": " Stating the Integrability Criterion   State the Riemann integrability criterion precisely. Why is sometimes called the oscillation sum ?    A bounded function on is Riemann integrable if and only if for every there exists a partition of such that . The quantity is the oscillation sum because measures the oscillation of on the th subinterval — the spread between the largest and smallest values of on that piece. When the total oscillation (weighted by subinterval length) can be made arbitrarily small, the function is integrable.   "
},
{
  "id": "ex-mod8-sg-52-2",
  "level": "2",
  "url": "ws-mod8-study-guide.html#ex-mod8-sg-52-2",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "The Dirichlet Function.",
  "body": " The Dirichlet Function   For the Dirichlet function if , if :  What is on any subinterval ? (Recall that the rationals are dense in .)  What is on any subinterval? (Recall that the irrationals are also dense in .)  Compute for any partition of .  Is the Dirichlet function Riemann integrable on ?      (a) Since is dense in , every subinterval contains rationals, so . (b) Since is dense in , every subinterval contains irrationals, so . (c) for any partition of . (d) No: since for every partition, the integrability criterion fails (take , for instance). The upper integral equals 1 and the lower integral equals 0, so they are not equal and is not Riemann integrable.   "
},
{
  "id": "ex-mod8-sg-53-1",
  "level": "2",
  "url": "ws-mod8-study-guide.html#ex-mod8-sg-53-1",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "Continuous Implies Integrable.",
  "body": " Continuous Implies Integrable   Sketch the proof that if is continuous on , then is Riemann integrable on . Which fact from Module 6 is used and where?    The key tool is the Heine-Cantor theorem (Module 6): a continuous function on a closed bounded interval is uniformly continuous. Given , apply uniform continuity to get such that . Choose any partition with mesh . On each subinterval , any two points are within of each other, so by uniform continuity. Then By the integrability criterion, is integrable. Uniform continuity is used to control ; pointwise continuity would not suffice because the same must work everywhere on simultaneously.   "
},
{
  "id": "ex-mod8-sg-53-2",
  "level": "2",
  "url": "ws-mod8-study-guide.html#ex-mod8-sg-53-2",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "Monotone Implies Integrable.",
  "body": " Monotone Implies Integrable   Prove that a monotone function on is Riemann integrable.  Assume without loss of generality that is increasing on . For the uniform partition with equal subintervals of width , show that using the telescoping nature of the sum and the fact that and for an increasing function.  Apply the integrability criterion: given , choose to conclude.      (a) For increasing , on the th subinterval the supremum is attained at the right endpoint and the infimum at the left: and . With uniform partition width : since the sum telescopes. (b) Given , choose (or if ). Then . By the integrability criterion, is integrable.   "
},
{
  "id": "ex-mod8-sg-54-1",
  "level": "2",
  "url": "ws-mod8-study-guide.html#ex-mod8-sg-54-1",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "FTC Part 1 — Hypotheses and Statement.",
  "body": " FTC Part 1 — Hypotheses and Statement   State FTC Part 1 precisely, including all hypotheses. What does it mean to say that is differentiable at ? (You must compute from the limit definition of the derivative.)     FTC Part 1. Let be continuous on and define for . Then is differentiable on and for all . To say is differentiable at means that the limit exists and equals .   "
},
{
  "id": "ex-mod8-sg-54-2",
  "level": "2",
  "url": "ws-mod8-study-guide.html#ex-mod8-sg-54-2",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "FTC Part 2 — Statement and Proof.",
  "body": " FTC Part 2 — Statement and Proof     State FTC Part 2 precisely, listing all hypotheses.  Prove FTC Part 2 using FTC Part 1 as a lemma: if on , define . By Part 1, , so . By the Module 7 corollary (a function with zero derivative on an interval is constant), for some constant. Evaluate at to find , then at to conclude.      (a) FTC Part 2. Let be continuous on and let be differentiable on with . Then (b) Define . By FTC Part 1, for all . Hence on . By the Module 7 MVT corollary, for some constant . Evaluating at : , so . Thus for all . Evaluating at : .   "
},
{
  "id": "ws-mod8-worked-examples",
  "level": "1",
  "url": "ws-mod8-worked-examples.html",
  "type": "Section",
  "number": "3",
  "title": "Module 8: Worked Examples",
  "body": " Module 8: Worked Examples  Annotated Proof Walkthroughs — Estimated time: 40 minutes   Read each example slowly. The goal is to internalize the proof template, not just to see the answer. Example 1 is the archetype of a direct Darboux argument; Example 2 shows the proof that continuous implies integrable; Example 3 proves FTC Part 1 in full; Example 4 shows FTC Part 2 in a computation.     Example 1: is Riemann Integrable on and   Prove from the Darboux definition that is Riemann integrable on and .     Strategy.   Use uniform partitions with equal subintervals, compute upper and lower sums explicitly, show their difference tends to zero, and use the integrability criterion. The common limit of and will identify the integral.   Proof.   Let be the uniform partition with points for , so each subinterval has width . Since is increasing, on the th subinterval : The upper and lower sums are: Therefore By the integrability criterion, is Riemann integrable on . Moreover, since the upper and lower integrals are equal (both squeezed between and ), and the common value of the upper and lower integrals is . Hence .    What to notice. This is the simplest possible integrability proof from the definition: the function is increasing, so and are just the values at the right and left endpoints. The difference has a beautifully transparent form. In Worked Example 2, the same strategy — bound on each subinterval — is applied to continuous functions, where uniform continuity does the bounding.      Example 2: Continuous Functions are Riemann Integrable   Prove that if is continuous on , then is Riemann integrable on .     Strategy.   Use the Heine-Cantor theorem (uniform continuity of continuous functions on closed bounded intervals, proved in Module 6) to bound the oscillation on each subinterval, then sum up and apply the integrability criterion.   Proof.   Since is continuous on the closed bounded interval , the Heine-Cantor theorem (Module 6) gives that is uniformly continuous on . Let be given. By uniform continuity, there exists such that for all with , Choose any partition of with (such a partition exists; take, for instance, a uniform partition with ).  On each subinterval , any two points satisfy , so . Taking the supremum over and infimum over (or vice versa) gives . Therefore: Since was arbitrary and we exhibited a partition with , the integrability criterion is satisfied. Hence is Riemann integrable on .    What to notice. Uniform continuity is indispensable: the same must work at every point of simultaneously, which is exactly the guarantee uniform continuity provides. Pointwise continuity gives a different at each point, which could tend to zero and prevent us from finding a single partition that works. The proof template is: (1) invoke Heine-Cantor; (2) choose a partition with mesh smaller than ; (3) bound ; (4) sum up; (5) invoke the criterion.      Example 3: FTC Part 1   Prove FTC Part 1: if is continuous on and for , then is differentiable and .     Strategy.   Compute using the additivity of the integral, and show that it approaches as . The key is that can be written as the average value of the constant over , so the difference quotient minus is controlled by how close is to for near — which is exactly what continuity of at gives.   Proof.   Fix and consider small enough that . By the additivity of the integral, (for ; the case is analogous). Dividing by : Since is constant with respect to , , so Let . Since is continuous at , there exists such that . For and between and , we have , so . Therefore: Since was arbitrary, the limit of the difference quotient is , i.e., .    What to notice. The proof has two moving parts: the additivity identity , and the continuity estimate that makes small when is small. The bound (averaging an estimate over a small interval preserves the estimate) is the analytic core of the argument.      Example 4: A Computation Using FTC   Compute using FTC Part 2.     Strategy.   Find an antiderivative with , verify that is continuous on , and apply FTC Part 2.   Proof.   Take . We verify: (by the standard differentiation formula, proved in Module 7 or calculus). The function is continuous on (it is continuous everywhere). Since on , FTC Part 2 applies:     What to notice. The proof template for applying FTC Part 2 has three steps: (1) exhibit an antiderivative and verify ; (2) check that is continuous on (the hypothesis of FTC Part 2); (3) compute . Step (2) is often omitted in calculus courses but is essential for the theorem to apply. In this example, is continuous everywhere, so there is nothing to check, but for a piecewise-defined function the continuity condition would require verification.    "
},
{
  "id": "ex-mod8-we-1",
  "level": "2",
  "url": "ws-mod8-worked-examples.html#ex-mod8-we-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "Example 1: <span class=\"process-math\">\\(f(x) = x\\)<\/span> is Riemann Integrable on <span class=\"process-math\">\\([0,1]\\)<\/span> and <span class=\"process-math\">\\(\\int = 1\/2\\)<\/span>.",
  "body": " Example 1: is Riemann Integrable on and   Prove from the Darboux definition that is Riemann integrable on and .     Strategy.   Use uniform partitions with equal subintervals, compute upper and lower sums explicitly, show their difference tends to zero, and use the integrability criterion. The common limit of and will identify the integral.   Proof.   Let be the uniform partition with points for , so each subinterval has width . Since is increasing, on the th subinterval : The upper and lower sums are: Therefore By the integrability criterion, is Riemann integrable on . Moreover, since the upper and lower integrals are equal (both squeezed between and ), and the common value of the upper and lower integrals is . Hence .    What to notice. This is the simplest possible integrability proof from the definition: the function is increasing, so and are just the values at the right and left endpoints. The difference has a beautifully transparent form. In Worked Example 2, the same strategy — bound on each subinterval — is applied to continuous functions, where uniform continuity does the bounding.   "
},
{
  "id": "ex-mod8-we-2",
  "level": "2",
  "url": "ws-mod8-worked-examples.html#ex-mod8-we-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "Example 2: Continuous Functions are Riemann Integrable.",
  "body": " Example 2: Continuous Functions are Riemann Integrable   Prove that if is continuous on , then is Riemann integrable on .     Strategy.   Use the Heine-Cantor theorem (uniform continuity of continuous functions on closed bounded intervals, proved in Module 6) to bound the oscillation on each subinterval, then sum up and apply the integrability criterion.   Proof.   Since is continuous on the closed bounded interval , the Heine-Cantor theorem (Module 6) gives that is uniformly continuous on . Let be given. By uniform continuity, there exists such that for all with , Choose any partition of with (such a partition exists; take, for instance, a uniform partition with ).  On each subinterval , any two points satisfy , so . Taking the supremum over and infimum over (or vice versa) gives . Therefore: Since was arbitrary and we exhibited a partition with , the integrability criterion is satisfied. Hence is Riemann integrable on .    What to notice. Uniform continuity is indispensable: the same must work at every point of simultaneously, which is exactly the guarantee uniform continuity provides. Pointwise continuity gives a different at each point, which could tend to zero and prevent us from finding a single partition that works. The proof template is: (1) invoke Heine-Cantor; (2) choose a partition with mesh smaller than ; (3) bound ; (4) sum up; (5) invoke the criterion.   "
},
{
  "id": "ex-mod8-we-3",
  "level": "2",
  "url": "ws-mod8-worked-examples.html#ex-mod8-we-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "Example 3: FTC Part 1.",
  "body": " Example 3: FTC Part 1   Prove FTC Part 1: if is continuous on and for , then is differentiable and .     Strategy.   Compute using the additivity of the integral, and show that it approaches as . The key is that can be written as the average value of the constant over , so the difference quotient minus is controlled by how close is to for near — which is exactly what continuity of at gives.   Proof.   Fix and consider small enough that . By the additivity of the integral, (for ; the case is analogous). Dividing by : Since is constant with respect to , , so Let . Since is continuous at , there exists such that . For and between and , we have , so . Therefore: Since was arbitrary, the limit of the difference quotient is , i.e., .    What to notice. The proof has two moving parts: the additivity identity , and the continuity estimate that makes small when is small. The bound (averaging an estimate over a small interval preserves the estimate) is the analytic core of the argument.   "
},
{
  "id": "ex-mod8-we-4",
  "level": "2",
  "url": "ws-mod8-worked-examples.html#ex-mod8-we-4",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "Example 4: A Computation Using FTC.",
  "body": " Example 4: A Computation Using FTC   Compute using FTC Part 2.     Strategy.   Find an antiderivative with , verify that is continuous on , and apply FTC Part 2.   Proof.   Take . We verify: (by the standard differentiation formula, proved in Module 7 or calculus). The function is continuous on (it is continuous everywhere). Since on , FTC Part 2 applies:     What to notice. The proof template for applying FTC Part 2 has three steps: (1) exhibit an antiderivative and verify ; (2) check that is continuous on (the hypothesis of FTC Part 2); (3) compute . Step (2) is often omitted in calculus courses but is essential for the theorem to apply. In this example, is continuous everywhere, so there is nothing to check, but for a piecewise-defined function the continuity condition would require verification.   "
},
{
  "id": "ws-mod8-practice-set",
  "level": "1",
  "url": "ws-mod8-practice-set.html",
  "type": "Section",
  "number": "4",
  "title": "Module 8: Practice Problem Set",
  "body": " Module 8: Practice Problem Set  Estimated time: 100 minutes   Problems are labeled (Foundational), (Standard), and (Challenge). Work in order within each level.  These problems are not submitted, but you should write out complete solutions. For any problem that asks you to prove something, apply the standards from the Worked Examples: strategy stated up front, complete sentences, every step justified, and every theorem invoked by name.     Foundational Problems    Darboux Sums by Hand   For on with partition :  Compute on and on .  Compute on and on .  Compute and .  Compute .      Since is increasing on , the supremum on each subinterval is at the right endpoint and the infimum at the left. (a) ; . (b) ; . (c) Each subinterval has width , so and . (d) .     FTC Evaluations   Use FTC Part 2 to evaluate each integral. For each one, state the antiderivative , verify , and compute .          (a) ; ; . (b) ; ; . (c) ; ; . (d) ; ; .     FTC Part 1 Application   Use FTC Part 1 to compute . Then use FTC Part 1 and the chain rule to compute .    By FTC Part 1 (since is continuous), . For the second integral, write , so the integral equals . By FTC Part 1, . By the chain rule:      Linearity   Given and , compute:         (a) By linearity: . (b) . (c) .      Standard Problems    Integrability of   Prove that is Riemann integrable on using the integrability criterion. Use the uniform partition and show that as .  Your proof should: (i) compute and using the formula ; (ii) compute the difference; (iii) invoke the integrability criterion.    For with : since is increasing, and . Then Compute the difference and take .     Integration by Parts   Prove integration by parts from FTC: if and are differentiable on with and continuous, then   Your proof must start from the product rule for derivatives and apply FTC Part 2 to .    By the product rule, . Since are continuous and are differentiable, is continuous on . Integrating both sides using FTC Part 2 (with antiderivative for ): By linearity of the integral: Rearranging:      Bounding Integrals   Prove: if is Riemann integrable on and for all , then   Use the monotonicity of the Riemann integral (if on then ) and the computation for a constant.    Since for all , monotonicity of the integral gives Since and are constants, their integrals are and respectively (by the assessment, constant functions are integrable with ). Hence .     Monotone Implies Integrable   Prove: if is increasing on , then is Riemann integrable on . Follow the strategy of Study Guide Exercise sg-53-2.    For the uniform partition with subinterval width , note that and (since is increasing). Then      An Integral Inequality   Prove: if is Riemann integrable on , then is also Riemann integrable on and   For the inequality, use and apply monotonicity of the integral twice.    From , monotonicity gives , which is equivalent to . (The integrability of follows from the integrability criterion applied to , using the fact that the oscillation of on any interval is bounded by the oscillation of : by the reverse triangle inequality.)      Challenge Problems    FTC Part 2 from First Principles   Prove FTC Part 2 in full, using FTC Part 1 as a lemma and the Module 7 corollary that a function with zero derivative on an open interval is constant on that interval.  Your proof must have the following steps: (i) define and invoke FTC Part 1 to conclude ; (ii) apply the Module 7 corollary to ; (iii) evaluate at to determine the constant; (iv) evaluate at to conclude.    At step (iii): and . So the constant is , giving . At step (iv): .     A Non-Integrable Function   Prove that the Dirichlet function is not Riemann integrable on .  Your proof must: (i) show that and for every subinterval of every partition, citing density of and in ; (ii) conclude that and for every partition ; (iii) state that the upper integral equals 1 and the lower integral equals 0, so they are unequal and is not integrable.    "
},
{
  "id": "ex-mod8-ps-F1",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-F1",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Darboux Sums by Hand.",
  "body": " Darboux Sums by Hand   For on with partition :  Compute on and on .  Compute on and on .  Compute and .  Compute .      Since is increasing on , the supremum on each subinterval is at the right endpoint and the infimum at the left. (a) ; . (b) ; . (c) Each subinterval has width , so and . (d) .   "
},
{
  "id": "ex-mod8-ps-F2",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-F2",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> FTC Evaluations.",
  "body": " FTC Evaluations   Use FTC Part 2 to evaluate each integral. For each one, state the antiderivative , verify , and compute .          (a) ; ; . (b) ; ; . (c) ; ; . (d) ; ; .   "
},
{
  "id": "ex-mod8-ps-F3",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-F3",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> FTC Part 1 Application.",
  "body": " FTC Part 1 Application   Use FTC Part 1 to compute . Then use FTC Part 1 and the chain rule to compute .    By FTC Part 1 (since is continuous), . For the second integral, write , so the integral equals . By FTC Part 1, . By the chain rule:    "
},
{
  "id": "ex-mod8-ps-F4",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-F4",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Linearity.",
  "body": " Linearity   Given and , compute:         (a) By linearity: . (b) . (c) .   "
},
{
  "id": "ex-mod8-ps-S1",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-S1",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Integrability of <span class=\"process-math\">\\(f(x) = x^2\\)<\/span>.",
  "body": " Integrability of   Prove that is Riemann integrable on using the integrability criterion. Use the uniform partition and show that as .  Your proof should: (i) compute and using the formula ; (ii) compute the difference; (iii) invoke the integrability criterion.    For with : since is increasing, and . Then Compute the difference and take .   "
},
{
  "id": "ex-mod8-ps-S2",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-S2",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Integration by Parts.",
  "body": " Integration by Parts   Prove integration by parts from FTC: if and are differentiable on with and continuous, then   Your proof must start from the product rule for derivatives and apply FTC Part 2 to .    By the product rule, . Since are continuous and are differentiable, is continuous on . Integrating both sides using FTC Part 2 (with antiderivative for ): By linearity of the integral: Rearranging:    "
},
{
  "id": "ex-mod8-ps-S3",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-S3",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Bounding Integrals.",
  "body": " Bounding Integrals   Prove: if is Riemann integrable on and for all , then   Use the monotonicity of the Riemann integral (if on then ) and the computation for a constant.    Since for all , monotonicity of the integral gives Since and are constants, their integrals are and respectively (by the assessment, constant functions are integrable with ). Hence .   "
},
{
  "id": "ex-mod8-ps-S4",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-S4",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Monotone Implies Integrable.",
  "body": " Monotone Implies Integrable   Prove: if is increasing on , then is Riemann integrable on . Follow the strategy of Study Guide Exercise sg-53-2.    For the uniform partition with subinterval width , note that and (since is increasing). Then    "
},
{
  "id": "ex-mod8-ps-S5",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-S5",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> An Integral Inequality.",
  "body": " An Integral Inequality   Prove: if is Riemann integrable on , then is also Riemann integrable on and   For the inequality, use and apply monotonicity of the integral twice.    From , monotonicity gives , which is equivalent to . (The integrability of follows from the integrability criterion applied to , using the fact that the oscillation of on any interval is bounded by the oscillation of : by the reverse triangle inequality.)   "
},
{
  "id": "ex-mod8-ps-C1",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-C1",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> FTC Part 2 from First Principles.",
  "body": " FTC Part 2 from First Principles   Prove FTC Part 2 in full, using FTC Part 1 as a lemma and the Module 7 corollary that a function with zero derivative on an open interval is constant on that interval.  Your proof must have the following steps: (i) define and invoke FTC Part 1 to conclude ; (ii) apply the Module 7 corollary to ; (iii) evaluate at to determine the constant; (iv) evaluate at to conclude.    At step (iii): and . So the constant is , giving . At step (iv): .   "
},
{
  "id": "ex-mod8-ps-C2",
  "level": "2",
  "url": "ws-mod8-practice-set.html#ex-mod8-ps-C2",
  "type": "Checkpoint",
  "number": "4.11",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> A Non-Integrable Function.",
  "body": " A Non-Integrable Function   Prove that the Dirichlet function is not Riemann integrable on .  Your proof must: (i) show that and for every subinterval of every partition, citing density of and in ; (ii) conclude that and for every partition ; (iii) state that the upper integral equals 1 and the lower integral equals 0, so they are unequal and is not integrable.   "
},
{
  "id": "ws-mod8-bridge-reading",
  "level": "1",
  "url": "ws-mod8-bridge-reading.html",
  "type": "Section",
  "number": "5",
  "title": "Module 8: Bridge Reading Guide",
  "body": " Module 8: Bridge Reading Guide  Bauldry §1.4 and §2.4 — Estimated time: 40 minutes   Every module ends with a bridge reading in Bauldry's Introduction to Real Analysis . For this module the reading covers two sections: Bauldry §1.4 ( The Integral ) and Bauldry §2.4 ( The Riemann-Stieltjes Integral ). Section §1.4 is Bauldry's informal review of integration, parallel to what you have just built via Darboux sums. Section §2.4 is the rigorous graduate treatment — and it goes substantially further than Zorn by introducing the Riemann-Stieltjes integral , which replaces the length element with a more general measure .  This generalization is the correct setup for many applications in graduate analysis and probability. MAT 5610 will spend significant time on Bauldry §2.4. The module you have just completed gives you the Darboux framework; the graduate course adds the Stieltjes measure. The exercises below help you build a bridge between these two presentations.   For this module, read: Bauldry §1.4 ( The Integral , approximately pp. 18–24) and §2.4 ( The Riemann-Stieltjes Integral , approximately pp. 71–88).     Bauldry §1.4 — The Riemann Integral (informal)  Section §1.4 is Bauldry's informal treatment of the integral, parallel to Zorn §5.1–5.2. Bauldry introduces the integral with an eye toward the rigorous Riemann-Stieltjes theory that follows in §2.4. Notice whether his setup emphasizes Darboux sums, Riemann sums, or both; the choice of approach shapes what the FTC proof looks like.    Bauldry's Definition   What definition of the integral does Bauldry use in §1.4 — Riemann sums (with sample points), Darboux sums (with sup and inf), or something else? Quote the key definition.     FTC in Bauldry §1.4     Does Bauldry prove the FTC in §1.4, or does he merely state it? What level of rigor does he use?  Compare the presentation of FTC in §1.4 to Worked Examples 3 and 4 in this module. What is made explicit in the module that is implicit in Bauldry's §1.4?       Beyond Area   Bauldry §1.4 mentions applications of the integral that go beyond area computation. Identify one such application and describe briefly how the integral is used.      Bauldry §2.4 — The Riemann-Stieltjes Integral (rigorous)  Section §2.4 is the starting point of MAT 5610's integration theory. The Riemann-Stieltjes integral replaces (the length element) with (determined by an integrator function ). When , the Riemann-Stieltjes integral reduces to the ordinary Riemann integral. The generalization is powerful because it unifies the integral with Stieltjes-type weighted averages and connects naturally to measure theory.  Read §2.4 carefully. The definitions mirror what you have learned — upper sums, lower sums, integrability criterion — but with replacing . Pay attention to where the hypotheses on enter.    The Stieltjes Measure   Bauldry defines the Riemann-Stieltjes integral . What plays the role of in this definition? How does the ordinary Riemann integral arise as a special case?    The role of is played by , which in the Darboux upper and lower sums amounts to replacing with . The upper Stieltjes sum is and the lower sum is . The Riemann integral arises as the special case , which gives and recovers the ordinary Darboux upper and lower sums.     Stieltjes Integrability Criterion and Bounded Variation     State Bauldry's integrability criterion for the Riemann-Stieltjes integral. How does it compare to the Darboux integrability criterion in the Module 8 study guide?  Bauldry requires that the integrator is of bounded variation . What does this mean? Why might an integrator of unbounded variation cause problems?      (a) The Stieltjes integrability criterion has the same structure as the Darboux criterion: is Riemann-Stieltjes integrable with respect to on if and only if for every there exists a partition with . The difference is that the weights are instead of . (b) A function is of bounded variation on if the total variation is finite. If has unbounded variation, the weights could alternate wildly in sign or grow without bound, making the upper and lower sums meaningless as approximations to a limit.     Continuous Functions are Stieltjes-Integrable   Find the theorem in Bauldry §2.4 corresponding to the statement continuous functions are Riemann integrable (Worked Example 2 of this module). What additional hypothesis does the Stieltjes setting require on ?    The corresponding theorem in §2.4 typically states: if is continuous on and is of bounded variation on , then is Riemann-Stieltjes integrable with respect to . The additional hypothesis beyond the Riemann setting is that must be of bounded variation; in the Riemann integral, automatically has this property (it is monotone increasing), but a general integrator may not.     Integration by Parts in the Stieltjes Setting     Bauldry §2.4 contains a version of integration by parts for Stieltjes integrals. State it. How does it differ from the version you proved in Practice Problem S2?  Why does the Stieltjes setting make integration by parts more symmetric between and ?      (a) The Stieltjes integration by parts formula is: This differs from the ordinary version in that both integrals are Stieltjes integrals, and the roles of and are completely symmetric: acts as integrand in one and as integrator in the other. (b) In the ordinary Riemann setting, integration by parts involves (a Riemann integral of against the derivative of ), which breaks the symmetry between and . In the Stieltjes setting, and appear symmetrically without requiring differentiability — just that the Stieltjes integrals exist, which happens when and have no common discontinuities.      Looking Ahead to MAT 5610  MAT 5610 will begin its integration theory with Bauldry §2.4. The module you have just completed gives you the Darboux framework: partitions, upper and lower sums, the integrability criterion, the main classes of integrable functions, and the Fundamental Theorem of Calculus. The graduate course adds the Stieltjes measure , develops the theory of bounded variation, and proves deeper results including the Lebesgue criterion for Riemann integrability (a bounded function is Riemann integrable if and only if it is continuous except on a set of measure zero). Come in knowing the integrability criterion cold, and be ready to extend it to the Stieltjes setting on the first day.   "
},
{
  "id": "ex-mod8-br-1",
  "level": "2",
  "url": "ws-mod8-bridge-reading.html#ex-mod8-br-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "Bauldry’s Definition.",
  "body": " Bauldry's Definition   What definition of the integral does Bauldry use in §1.4 — Riemann sums (with sample points), Darboux sums (with sup and inf), or something else? Quote the key definition.   "
},
{
  "id": "ex-mod8-br-2",
  "level": "2",
  "url": "ws-mod8-bridge-reading.html#ex-mod8-br-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "FTC in Bauldry §1.4.",
  "body": " FTC in Bauldry §1.4     Does Bauldry prove the FTC in §1.4, or does he merely state it? What level of rigor does he use?  Compare the presentation of FTC in §1.4 to Worked Examples 3 and 4 in this module. What is made explicit in the module that is implicit in Bauldry's §1.4?     "
},
{
  "id": "ex-mod8-br-3",
  "level": "2",
  "url": "ws-mod8-bridge-reading.html#ex-mod8-br-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "Beyond Area.",
  "body": " Beyond Area   Bauldry §1.4 mentions applications of the integral that go beyond area computation. Identify one such application and describe briefly how the integral is used.   "
},
{
  "id": "ex-mod8-br-4",
  "level": "2",
  "url": "ws-mod8-bridge-reading.html#ex-mod8-br-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "The Stieltjes Measure.",
  "body": " The Stieltjes Measure   Bauldry defines the Riemann-Stieltjes integral . What plays the role of in this definition? How does the ordinary Riemann integral arise as a special case?    The role of is played by , which in the Darboux upper and lower sums amounts to replacing with . The upper Stieltjes sum is and the lower sum is . The Riemann integral arises as the special case , which gives and recovers the ordinary Darboux upper and lower sums.   "
},
{
  "id": "ex-mod8-br-5",
  "level": "2",
  "url": "ws-mod8-bridge-reading.html#ex-mod8-br-5",
  "type": "Checkpoint",
  "number": "5.5",
  "title": "Stieltjes Integrability Criterion and Bounded Variation.",
  "body": " Stieltjes Integrability Criterion and Bounded Variation     State Bauldry's integrability criterion for the Riemann-Stieltjes integral. How does it compare to the Darboux integrability criterion in the Module 8 study guide?  Bauldry requires that the integrator is of bounded variation . What does this mean? Why might an integrator of unbounded variation cause problems?      (a) The Stieltjes integrability criterion has the same structure as the Darboux criterion: is Riemann-Stieltjes integrable with respect to on if and only if for every there exists a partition with . The difference is that the weights are instead of . (b) A function is of bounded variation on if the total variation is finite. If has unbounded variation, the weights could alternate wildly in sign or grow without bound, making the upper and lower sums meaningless as approximations to a limit.   "
},
{
  "id": "ex-mod8-br-6",
  "level": "2",
  "url": "ws-mod8-bridge-reading.html#ex-mod8-br-6",
  "type": "Checkpoint",
  "number": "5.6",
  "title": "Continuous Functions are Stieltjes-Integrable.",
  "body": " Continuous Functions are Stieltjes-Integrable   Find the theorem in Bauldry §2.4 corresponding to the statement continuous functions are Riemann integrable (Worked Example 2 of this module). What additional hypothesis does the Stieltjes setting require on ?    The corresponding theorem in §2.4 typically states: if is continuous on and is of bounded variation on , then is Riemann-Stieltjes integrable with respect to . The additional hypothesis beyond the Riemann setting is that must be of bounded variation; in the Riemann integral, automatically has this property (it is monotone increasing), but a general integrator may not.   "
},
{
  "id": "ex-mod8-br-7",
  "level": "2",
  "url": "ws-mod8-bridge-reading.html#ex-mod8-br-7",
  "type": "Checkpoint",
  "number": "5.7",
  "title": "Integration by Parts in the Stieltjes Setting.",
  "body": " Integration by Parts in the Stieltjes Setting     Bauldry §2.4 contains a version of integration by parts for Stieltjes integrals. State it. How does it differ from the version you proved in Practice Problem S2?  Why does the Stieltjes setting make integration by parts more symmetric between and ?      (a) The Stieltjes integration by parts formula is: This differs from the ordinary version in that both integrals are Stieltjes integrals, and the roles of and are completely symmetric: acts as integrand in one and as integrator in the other. (b) In the ordinary Riemann setting, integration by parts involves (a Riemann integral of against the derivative of ), which breaks the symmetry between and . In the Stieltjes setting, and appear symmetrically without requiring differentiability — just that the Stieltjes integrals exist, which happens when and have no common discontinuities.   "
},
{
  "id": "ws-mod8-assessment",
  "level": "1",
  "url": "ws-mod8-assessment.html",
  "type": "Section",
  "number": "6",
  "title": "Module 8: Assessment",
  "body": " Module 8: Assessment  Submitted Proofs and Reflection — Estimated time: 40 minutes    This assessment has three parts. Parts 1 and 2 ask you to write complete mathematical proofs, submitted for feedback. Part 3 is a short reflection. Submit all three parts together as a single document (PDF or typed file) through the course management system.   Write-up standard. All proofs must be written in complete mathematical prose. Use the style modeled in the Worked Examples: announce your strategy, include scratch work (clearly labeled) before the formal proof, write in complete grammatical sentences, invoke each theorem by name, and justify every step. Work consisting only of symbolic manipulations without explanation will not receive full credit.   A note on Part 2. Part 2 is a single required proof problem; there are no options to choose between. All students complete the same Part 2 problem.   Academic integrity. Your proofs must be your own work. You may refer to your notes, the textbooks, and the worked examples from this module. You may not collaborate with other students on the written proofs or use AI writing tools to draft your arguments.   Part 1: Riemann Integrability from the Definition (Required) (Estimated time: 15 minutes)    Proving a Constant Function is Integrable   Prove that (a constant) is Riemann integrable on and .  Your proof must have the following structure:   Setup. Let be any partition of with subintervals. Compute on and on .   Compute upper and lower sums. Show that and for every partition .   Apply the criterion. Conclude that for every and every partition , so the integrability criterion is satisfied.   Identify the integral. Since all upper and lower sums equal , conclude that the upper and lower integrals both equal , and hence .      This is the simplest possible integrability proof: since is identically , the supremum and infimum of on every subinterval are both equal to . Therefore for every partition, which is a much stronger condition than the integrability criterion requires.       Part 2: Applying the Fundamental Theorem (Required) (Estimated time: 20 minutes)    FTC in Action   This problem has two parts.   Applying FTC Part 2. State FTC Part 2 precisely, listing all three hypotheses (continuity of ; existence of an antiderivative ; the relation ). Then evaluate by: exhibiting an antiderivative of ; verifying that ; verifying that is continuous on ; and applying FTC Part 2 to compute . Show every step.   Applying FTC Part 1 with the chain rule. State FTC Part 1 precisely. Then compute . Identify the antiderivative function , apply FTC Part 1 to find , and apply the chain rule to compute the derivative of with respect to . Show every step.         Part 3: Reflection (Estimated time: 5 minutes)  Write 3–5 sentences for each question. These are graded for thoughtfulness, not for mathematical correctness.    Uniform Continuity and Integrability   Explain in your own words, in 3–5 sentences, how uniform continuity (Module 6) appears in the proof that continuous functions are Riemann integrable. What specific role does it play, and could the proof work with only pointwise continuity?     Bauldry §2.4 — First Impressions   In the Bridge Reading you encountered the Riemann-Stieltjes integral. In 3–5 sentences, describe what is new in the Stieltjes setting compared to the Riemann integral. What does the integrator add, and why might this generalization be useful?     FTC as a Bridge   The FTC connects differentiation (Module 7) and integration (Module 8). In 2–3 sentences, describe this connection in your own words. Which direction — Part 1 (differentiating an integral gives the integrand) or Part 2 (integrating a derivative gives the boundary values) — do you find more surprising, and why?       Assessment Rubric (Informational)   The following rubric describes how submitted proofs will be evaluated.    Grading Criteria        Criterion  Full credit  Partial credit  Minimal credit    Logical correctness  All steps are valid; the argument proves exactly the stated claim  Mostly correct with one fixable gap  Significant logical errors or wrong claim proved    Darboux mechanics  and computed correctly; integrability criterion applied by name  Sums set up correctly but criterion invocation incomplete  Upper and lower sums confused, or criterion not used    FTC application  All hypotheses verified; chain rule applied correctly in Part 2 (ii)  Correct antiderivative found but one hypothesis unchecked  FTC invoked without checking hypotheses; chain rule missing or incorrect    Mathematical prose  Complete grammatical sentences; strategy stated up front; every step justified  Mostly prose with some missing connective sentences  Primarily symbolic with no connecting narrative    Reflection  Specific, thoughtful, and engages with the mathematical content  General but relevant observations  Vague or too brief to be informative     "
},
{
  "id": "assess-mod8-1",
  "level": "2",
  "url": "ws-mod8-assessment.html#assess-mod8-1",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "Proving a Constant Function is Integrable.",
  "body": " Proving a Constant Function is Integrable   Prove that (a constant) is Riemann integrable on and .  Your proof must have the following structure:   Setup. Let be any partition of with subintervals. Compute on and on .   Compute upper and lower sums. Show that and for every partition .   Apply the criterion. Conclude that for every and every partition , so the integrability criterion is satisfied.   Identify the integral. Since all upper and lower sums equal , conclude that the upper and lower integrals both equal , and hence .      This is the simplest possible integrability proof: since is identically , the supremum and infimum of on every subinterval are both equal to . Therefore for every partition, which is a much stronger condition than the integrability criterion requires.   "
},
{
  "id": "assess-mod8-2",
  "level": "2",
  "url": "ws-mod8-assessment.html#assess-mod8-2",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "FTC in Action.",
  "body": " FTC in Action   This problem has two parts.   Applying FTC Part 2. State FTC Part 2 precisely, listing all three hypotheses (continuity of ; existence of an antiderivative ; the relation ). Then evaluate by: exhibiting an antiderivative of ; verifying that ; verifying that is continuous on ; and applying FTC Part 2 to compute . Show every step.   Applying FTC Part 1 with the chain rule. State FTC Part 1 precisely. Then compute . Identify the antiderivative function , apply FTC Part 1 to find , and apply the chain rule to compute the derivative of with respect to . Show every step.     "
},
{
  "id": "assess-mod8-r1",
  "level": "2",
  "url": "ws-mod8-assessment.html#assess-mod8-r1",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "Uniform Continuity and Integrability.",
  "body": " Uniform Continuity and Integrability   Explain in your own words, in 3–5 sentences, how uniform continuity (Module 6) appears in the proof that continuous functions are Riemann integrable. What specific role does it play, and could the proof work with only pointwise continuity?   "
},
{
  "id": "assess-mod8-r2",
  "level": "2",
  "url": "ws-mod8-assessment.html#assess-mod8-r2",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "Bauldry §2.4 — First Impressions.",
  "body": " Bauldry §2.4 — First Impressions   In the Bridge Reading you encountered the Riemann-Stieltjes integral. In 3–5 sentences, describe what is new in the Stieltjes setting compared to the Riemann integral. What does the integrator add, and why might this generalization be useful?   "
},
{
  "id": "assess-mod8-r3",
  "level": "2",
  "url": "ws-mod8-assessment.html#assess-mod8-r3",
  "type": "Checkpoint",
  "number": "6.5",
  "title": "FTC as a Bridge.",
  "body": " FTC as a Bridge   The FTC connects differentiation (Module 7) and integration (Module 8). In 2–3 sentences, describe this connection in your own words. Which direction — Part 1 (differentiating an integral gives the integrand) or Part 2 (integrating a derivative gives the boundary values) — do you find more surprising, and why?   "
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
