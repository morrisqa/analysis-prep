var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-mod9-orientation",
  "level": "1",
  "url": "ws-mod9-orientation.html",
  "type": "Section",
  "number": "1",
  "title": "Module 9: Sequences and Series of Functions",
  "body": " Module 9: Sequences and Series of Functions  Orientation     Define pointwise convergence of a sequence of functions to a function on a set : for each fixed , the sequence of numbers converges to .    Define uniform convergence : uniformly on if , and explain why the single working for all simultaneously is the key distinction from pointwise convergence.    Use the sup-norm criterion to determine whether a sequence converges uniformly: uniformly on if and only if .    Produce and analyze the canonical non-uniform example: on converges pointwise to a discontinuous limit, demonstrating that pointwise convergence alone does not preserve continuity.    State and prove: if uniformly on and each is continuous, then is continuous.    State and apply the term-by-term integration theorem: if uniformly on and each is integrable, then .    State and apply the Weierstrass -Test: if for all and , then converges absolutely and uniformly on .       This module is the capstone of the course. Every major idea from the preceding eight modules converges here: the - framework (Module 4), series as sequences of partial sums (Module 5), continuity and uniform continuity (Module 6), integration (Module 8). Sequences of functions ask a new kind of question: not does this sequence of numbers converge? but does this sequence of functions converge, and if so, what properties does the limit function inherit?   The central discovery of this module is that the answer depends entirely on how the convergence happens. Pointwise convergence—where each value converges to separately for each —is too weak to preserve continuity, integrability, or the interchange of limits and integrals. Uniform convergence, where a single controls the approximation for all  simultaneously, is strong enough. The difference between these two notions is exactly a quantifier swap—the same kind of swap that distinguished continuity from uniform continuity in Module 6.  The self-assessment questions below are not graded . They are designed to help you locate yourself within the module. Write informally; a sentence or two per question is fine.    What Does Convergence of Functions Mean?   Suppose someone says: the sequence of functions converges to as . What do you think they mean? What would you need to check to verify this claim?     The Discontinuous Limit   Consider for . Compute , , , and for . What does the pointwise limit appear to be? Is the limit function continuous on ?     Interchanging Limits and Integrals   For on , compute exactly. What is ? Is this equal to ? What does the discrepancy (if any) suggest about interchanging limits and integrals?     Power Series Radius   You have seen power series in Module 5. For , what is the radius of convergence? Does the series converge for ? For ? For ? Record your best recollection from prior courses.     Your Background   Have you seen uniform convergence before—either in a real analysis course or in a complex analysis or differential equations course? If so, describe your prior exposure. If not, what feels most unfamiliar about the definition you just read?      A Note from the Instructor  Uniform convergence is, by consensus, the hardest conceptual leap in undergraduate real analysis. The definition looks nearly identical to pointwise convergence—the only change is a quantifier swap—but its consequences are profound. My recommendation: before watching the videos, write out the two definitions side by side with the quantifiers spelled out explicitly, and circle the one symbol ( ) that moves. Everything else in this module flows from that observation.  This module also closes the loop on the entire prep course. The arc is: we built logical and proof-writing foundations (Module 1), established the real number system (Module 2), developed sequences (Module 4), extended to functions (Modules 6–8), and now we ask what happens to all those properties—continuity, integrability—when functions themselves vary. The answer is: they survive under uniform convergence. This is the organizing principle of MAT 5610's treatment of function spaces.    A Note on Pacing   A note on pacing. If you are coming in with prior real analysis experience, the definitions here will be familiar, but push yourself to prove the theorems rather than just recall them—the proofs of the continuity theorem and the term-by-term integration theorem are both on the Module Assessment, and writing them cleanly requires internalizing the argument structure. If this is your first encounter with uniform convergence, slow down at Worked Example 1 (the analysis) and Worked Example 2 (the continuity proof): read each one twice, then close the document and try to reproduce the argument on paper before moving to the practice set.    Module Road Map (estimated time: 5 hours)       Component  Time  Purpose    Orientation (this document)  15 min  Goals, self-assessment, context    Video 1: Pointwise vs. Uniform Convergence  10 min  Core instruction via lightboard    Video 2: Consequences of Uniform Convergence  10 min  Core instruction via lightboard    Companion Reading and Study Guide  60 min  Zorn §4.4 with guided questions    Worked Examples  45 min  Four annotated proof walkthroughs    Practice Problem Set  100 min  Scaffolded practice by difficulty    Bridge Reading Guide  40 min  Bauldry §2.6 with guided questions    Module Assessment  40 min  Submitted proofs and reflection     "
},
{
  "id": "obj-mod9",
  "level": "2",
  "url": "ws-mod9-orientation.html#obj-mod9",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   Define pointwise convergence of a sequence of functions to a function on a set : for each fixed , the sequence of numbers converges to .    Define uniform convergence : uniformly on if , and explain why the single working for all simultaneously is the key distinction from pointwise convergence.    Use the sup-norm criterion to determine whether a sequence converges uniformly: uniformly on if and only if .    Produce and analyze the canonical non-uniform example: on converges pointwise to a discontinuous limit, demonstrating that pointwise convergence alone does not preserve continuity.    State and prove: if uniformly on and each is continuous, then is continuous.    State and apply the term-by-term integration theorem: if uniformly on and each is integrable, then .    State and apply the Weierstrass -Test: if for all and , then converges absolutely and uniformly on .    "
},
{
  "id": "ex-mod9-sa-1",
  "level": "2",
  "url": "ws-mod9-orientation.html#ex-mod9-sa-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "What Does Convergence of Functions Mean?",
  "body": " What Does Convergence of Functions Mean?   Suppose someone says: the sequence of functions converges to as . What do you think they mean? What would you need to check to verify this claim?   "
},
{
  "id": "ex-mod9-sa-2",
  "level": "2",
  "url": "ws-mod9-orientation.html#ex-mod9-sa-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "The Discontinuous Limit.",
  "body": " The Discontinuous Limit   Consider for . Compute , , , and for . What does the pointwise limit appear to be? Is the limit function continuous on ?   "
},
{
  "id": "ex-mod9-sa-3",
  "level": "2",
  "url": "ws-mod9-orientation.html#ex-mod9-sa-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "Interchanging Limits and Integrals.",
  "body": " Interchanging Limits and Integrals   For on , compute exactly. What is ? Is this equal to ? What does the discrepancy (if any) suggest about interchanging limits and integrals?   "
},
{
  "id": "ex-mod9-sa-4",
  "level": "2",
  "url": "ws-mod9-orientation.html#ex-mod9-sa-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "Power Series Radius.",
  "body": " Power Series Radius   You have seen power series in Module 5. For , what is the radius of convergence? Does the series converge for ? For ? For ? Record your best recollection from prior courses.   "
},
{
  "id": "ex-mod9-sa-5",
  "level": "2",
  "url": "ws-mod9-orientation.html#ex-mod9-sa-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Your Background.",
  "body": " Your Background   Have you seen uniform convergence before—either in a real analysis course or in a complex analysis or differential equations course? If so, describe your prior exposure. If not, what feels most unfamiliar about the definition you just read?   "
},
{
  "id": "ws-mod9-study-guide",
  "level": "1",
  "url": "ws-mod9-study-guide.html",
  "type": "Section",
  "number": "2",
  "title": "Module 9: Companion Reading and Study Guide",
  "body": " Module 9: Companion Reading and Study Guide  Zorn §4.4 — Estimated time: 60 minutes   This guide accompanies Zorn's §4.4 ( Sequences and Series of Functions ). Section 4.4 introduces pointwise and uniform convergence, proves the two main preservation theorems (continuity and integrability), and develops the Weierstrass -Test for series of functions. Read the section before working the questions below.  The theme running through all of §4.4 is interchange of limits: when can we move past , past , past ? The answer in every case is: when the convergence is uniform . Keep this organizing question in mind as you read.     Pointwise and Uniform Convergence (Zorn §4.4, opening definitions)  Read Zorn's definitions of pointwise and uniform convergence carefully. The key structural difference is in the quantifier order.    Writing Out the Quantifiers   Write both definitions with all quantifiers spelled out explicitly, using the format .    pointwise on (the may depend on both and ).     uniformly on (the depends only on ).    Circle the one quantifier block that changes between (a) and (b). Explain in one sentence why this change makes uniform convergence stronger than pointwise convergence.       (a) pointwise: .  (b) uniformly: .  (c) The block moves before in the uniform case. This forces a single to control the approximation simultaneously for every , rather than allowing to grow without bound as varies.     The Sup-Norm Criterion   Zorn states that uniformly on if and only if as .   Explain in words why this criterion is equivalent to the definition of uniform convergence.    Use the sup-norm criterion to verify that converges uniformly to on .    Use the sup-norm criterion to show that does not converge uniformly to its pointwise limit on .       (a) The sup over is the worst-case error at stage . Saying this sup means the worst-case error can be made smaller than any —exactly what one works for all means.  (b) . Uniform.  (c) The pointwise limit is for and . Then for . As , , so the sup is at least for every . Hence the sup does not go to ; not uniform.     Examples: Uniform or Not?   For each sequence of functions, find the pointwise limit and determine (using the sup-norm criterion) whether convergence is uniform on the given set.    on .     on .     on .     on .       (a) Pointwise limit . . Uniform on .  (b) Pointwise limit (for each fixed , ). But (max at ), which does not go to . Not uniform on .  (c) Pointwise limit . On : , so . Uniform on .  (d) pointwise. Sup-norm: on . Uniform on .      Preservation of Continuity and Integrability  Read Zorn's proofs that uniform convergence preserves continuity and allows interchange of limit and integral.    Uniform Limit Preserves Continuity      State the theorem: if uniformly on and each is continuous, then is continuous.    Outline the proof strategy: for fixed and given , name the three terms that appear in the triangle inequality and identify which piece of information controls each term.    Why does the proof fail if convergence is only pointwise? Trace through the argument and identify the step that breaks.       (a) Standard statement: uniform limit of continuous functions is continuous.  (b) . Term 1 and Term 3 are controlled by uniform convergence (choose so that ). Term 2 is controlled by continuity of (choose so that ).  (c) With only pointwise convergence, the chosen in Step 1 depends on —a different is needed near and away from it. In particular, the selected to control Terms 1 and 3 may not be continuous at  , because was chosen for , not for .     Term-by-Term Integration      State the term-by-term integration theorem precisely.    Prove it. Hint: estimate .    Compute and compare to . Does this contradict the theorem? Why or why not?       (a) If uniformly on and each is Riemann integrable, then is integrable and .  (b) by uniform convergence.  (c) . But where on and : this integral also equals (the single point does not affect the integral). So the two agree—no contradiction. But the convergence is not uniform, so the theorem does not apply; this is a case where the interchange happens to work despite non-uniform convergence.      The Weierstrass -Test and Power Series  Read Zorn's statement and proof of the Weierstrass -Test, and his treatment of power series as a special case.    Applying the -Test   Apply the Weierstrass -Test to each series. State the bound , verify , and conclude.    on .     on for any fixed .     on .       (a) ; ; . Uniform and absolute convergence on .  (b) ; for ; . Uniform convergence on .  (c) ; on ; . Uniform convergence on .     Radius of Convergence   For each power series, use the Ratio Test to find the radius of convergence . Then state (without proof, citing the -Test) that the series converges uniformly on for any .         (this is the power series for )            (a) Ratio . Converges for ; .  (b) The general term ; ratio . Converges for ; .  (c) Ratio . Converges for , i.e., ; .     Term-by-Term Integration of a Power Series   The geometric series gives for , and the convergence is uniform on for any .   Integrate both sides from to (for ) using the term-by-term integration theorem to obtain a power series for .    Verify that the result agrees with the Taylor series for at .    At , the power series becomes . What does the alternating series test tell you about the convergence of this series (from Module 5)?       (a) . Since , we get for .  (b) Taylor series: , so , so , etc. The pattern gives . Agrees.  (c) At : . Terms decrease to 0, alternating; by the Alternating Series Test (Module 5), this converges. Its sum is (by continuity of , a result proved via Abel's theorem in MAT 5610).    "
},
{
  "id": "ex-mod9-sg-1",
  "level": "2",
  "url": "ws-mod9-study-guide.html#ex-mod9-sg-1",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "Writing Out the Quantifiers.",
  "body": " Writing Out the Quantifiers   Write both definitions with all quantifiers spelled out explicitly, using the format .    pointwise on (the may depend on both and ).     uniformly on (the depends only on ).    Circle the one quantifier block that changes between (a) and (b). Explain in one sentence why this change makes uniform convergence stronger than pointwise convergence.       (a) pointwise: .  (b) uniformly: .  (c) The block moves before in the uniform case. This forces a single to control the approximation simultaneously for every , rather than allowing to grow without bound as varies.   "
},
{
  "id": "ex-mod9-sg-2",
  "level": "2",
  "url": "ws-mod9-study-guide.html#ex-mod9-sg-2",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "The Sup-Norm Criterion.",
  "body": " The Sup-Norm Criterion   Zorn states that uniformly on if and only if as .   Explain in words why this criterion is equivalent to the definition of uniform convergence.    Use the sup-norm criterion to verify that converges uniformly to on .    Use the sup-norm criterion to show that does not converge uniformly to its pointwise limit on .       (a) The sup over is the worst-case error at stage . Saying this sup means the worst-case error can be made smaller than any —exactly what one works for all means.  (b) . Uniform.  (c) The pointwise limit is for and . Then for . As , , so the sup is at least for every . Hence the sup does not go to ; not uniform.   "
},
{
  "id": "ex-mod9-sg-3",
  "level": "2",
  "url": "ws-mod9-study-guide.html#ex-mod9-sg-3",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "Examples: Uniform or Not?",
  "body": " Examples: Uniform or Not?   For each sequence of functions, find the pointwise limit and determine (using the sup-norm criterion) whether convergence is uniform on the given set.    on .     on .     on .     on .       (a) Pointwise limit . . Uniform on .  (b) Pointwise limit (for each fixed , ). But (max at ), which does not go to . Not uniform on .  (c) Pointwise limit . On : , so . Uniform on .  (d) pointwise. Sup-norm: on . Uniform on .   "
},
{
  "id": "ex-mod9-sg-4",
  "level": "2",
  "url": "ws-mod9-study-guide.html#ex-mod9-sg-4",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "Uniform Limit Preserves Continuity.",
  "body": " Uniform Limit Preserves Continuity      State the theorem: if uniformly on and each is continuous, then is continuous.    Outline the proof strategy: for fixed and given , name the three terms that appear in the triangle inequality and identify which piece of information controls each term.    Why does the proof fail if convergence is only pointwise? Trace through the argument and identify the step that breaks.       (a) Standard statement: uniform limit of continuous functions is continuous.  (b) . Term 1 and Term 3 are controlled by uniform convergence (choose so that ). Term 2 is controlled by continuity of (choose so that ).  (c) With only pointwise convergence, the chosen in Step 1 depends on —a different is needed near and away from it. In particular, the selected to control Terms 1 and 3 may not be continuous at  , because was chosen for , not for .   "
},
{
  "id": "ex-mod9-sg-5",
  "level": "2",
  "url": "ws-mod9-study-guide.html#ex-mod9-sg-5",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "Term-by-Term Integration.",
  "body": " Term-by-Term Integration      State the term-by-term integration theorem precisely.    Prove it. Hint: estimate .    Compute and compare to . Does this contradict the theorem? Why or why not?       (a) If uniformly on and each is Riemann integrable, then is integrable and .  (b) by uniform convergence.  (c) . But where on and : this integral also equals (the single point does not affect the integral). So the two agree—no contradiction. But the convergence is not uniform, so the theorem does not apply; this is a case where the interchange happens to work despite non-uniform convergence.   "
},
{
  "id": "ex-mod9-sg-6",
  "level": "2",
  "url": "ws-mod9-study-guide.html#ex-mod9-sg-6",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "Applying the <span class=\"process-math\">\\(M\\)<\/span>-Test.",
  "body": " Applying the -Test   Apply the Weierstrass -Test to each series. State the bound , verify , and conclude.    on .     on for any fixed .     on .       (a) ; ; . Uniform and absolute convergence on .  (b) ; for ; . Uniform convergence on .  (c) ; on ; . Uniform convergence on .   "
},
{
  "id": "ex-mod9-sg-7",
  "level": "2",
  "url": "ws-mod9-study-guide.html#ex-mod9-sg-7",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "Radius of Convergence.",
  "body": " Radius of Convergence   For each power series, use the Ratio Test to find the radius of convergence . Then state (without proof, citing the -Test) that the series converges uniformly on for any .         (this is the power series for )            (a) Ratio . Converges for ; .  (b) The general term ; ratio . Converges for ; .  (c) Ratio . Converges for , i.e., ; .   "
},
{
  "id": "ex-mod9-sg-8",
  "level": "2",
  "url": "ws-mod9-study-guide.html#ex-mod9-sg-8",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "Term-by-Term Integration of a Power Series.",
  "body": " Term-by-Term Integration of a Power Series   The geometric series gives for , and the convergence is uniform on for any .   Integrate both sides from to (for ) using the term-by-term integration theorem to obtain a power series for .    Verify that the result agrees with the Taylor series for at .    At , the power series becomes . What does the alternating series test tell you about the convergence of this series (from Module 5)?       (a) . Since , we get for .  (b) Taylor series: , so , so , etc. The pattern gives . Agrees.  (c) At : . Terms decrease to 0, alternating; by the Alternating Series Test (Module 5), this converges. Its sum is (by continuity of , a result proved via Abel's theorem in MAT 5610).   "
},
{
  "id": "ws-mod9-worked-examples",
  "level": "1",
  "url": "ws-mod9-worked-examples.html",
  "type": "Section",
  "number": "3",
  "title": "Module 9: Worked Examples",
  "body": " Module 9: Worked Examples  Annotated Proof Walkthroughs — Estimated time: 45 minutes   Read each example slowly. Example 1 dissects the canonical non-uniform example . Example 2 proves the uniform-limit continuity theorem using the trick. Example 3 applies the Weierstrass -Test. Example 4 uses term-by-term integration to derive a classical series identity.     Example 1: Pointwise but Not Uniform Convergence   Let for . Show that converges pointwise but not uniformly on .     Strategy. For pointwise convergence, fix and compute . For non-uniform convergence, compute the sup-norm and show it does not go to .   Pointwise limit.   For : , so as . For : for all , so . Define for and . Then pointwise on . Note that is discontinuous at , even though each is continuous on .   Non-uniform convergence (sup-norm argument).   For any and any , . As , . Therefore for every . (The sup is not attained in but equals since the function approaches as ; at , , so the sup over is still by continuity of on .) Since the sup is for every , it does not converge to , and the convergence is not uniform.    What to notice. The failure of uniform convergence here has a visible consequence: the pointwise limit is discontinuous. The theorem in Example 2 says this cannot happen under uniform convergence of continuous functions. The non-uniform behavior of on is the prototypical counterexample for this entire module.      Example 2: Uniform Convergence Preserves Continuity   Prove: if uniformly on and each is continuous on , then is continuous on .     Strategy. Fix and . Split into three pieces using the triangle inequality, and control each piece separately.   Proof.   Since uniformly, there exists such that for all and all , . Fix such an ; the function is continuous at , so there exists such that .  Now suppose . By the triangle inequality, Since was arbitrary, is continuous on .    What to notice. This is the trick. The three terms are controlled by: (1) uniform convergence applied at ; (2) continuity of ; (3) uniform convergence applied at . The key is that is chosen before  —this is exactly what uniform convergence buys. With only pointwise convergence, the from (1) would depend on , making the argument circular.      Example 3: The Weierstrass -Test   Show that converges absolutely and uniformly on .     Strategy. Find a bound independent of with and . Then invoke the Weierstrass -Test.   Proof.   Set . For all and all , The series is a convergent -series ( ). By the Weierstrass -Test, converges absolutely and uniformly on .    What to notice. The -Test is essentially a comparison test for series of functions, with the dominating series playing the role of the known convergent series. The uniformity of the bound (no in ) is what delivers uniform convergence. Notice also that we used —a global bound available precisely because the domain is all of .      Example 4: Term-by-Term Integration   Use the geometric series and the term-by-term integration theorem to show that      Strategy. Start from the geometric series for , integrate term by term (justified by uniform convergence on a compact interval), and evaluate at .   Proof.   For , the geometric series gives For any , the series converges uniformly on by the Weierstrass -Test (with and ). Each partial-sum function is continuous, and the uniform limit of continuous functions is continuous (Example 2). By the term-by-term integration theorem, for , The left side equals . Setting : since the series converges by the Alternating Series Test (terms positive, decreasing to ), and , we conclude     What to notice. The passage from to uses a continuity argument (Abel's theorem) that is beyond this course—we have stated the result but not proved this final step rigorously. The term-by-term integration part is fully rigorous on any with ; extending to the boundary is a topic for MAT 5610. The punchline— as an alternating series of unit fractions—is one of the most beautiful results in elementary analysis.    "
},
{
  "id": "ex-mod9-we-1",
  "level": "2",
  "url": "ws-mod9-worked-examples.html#ex-mod9-we-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "Example 1: Pointwise but Not Uniform Convergence.",
  "body": " Example 1: Pointwise but Not Uniform Convergence   Let for . Show that converges pointwise but not uniformly on .     Strategy. For pointwise convergence, fix and compute . For non-uniform convergence, compute the sup-norm and show it does not go to .   Pointwise limit.   For : , so as . For : for all , so . Define for and . Then pointwise on . Note that is discontinuous at , even though each is continuous on .   Non-uniform convergence (sup-norm argument).   For any and any , . As , . Therefore for every . (The sup is not attained in but equals since the function approaches as ; at , , so the sup over is still by continuity of on .) Since the sup is for every , it does not converge to , and the convergence is not uniform.    What to notice. The failure of uniform convergence here has a visible consequence: the pointwise limit is discontinuous. The theorem in Example 2 says this cannot happen under uniform convergence of continuous functions. The non-uniform behavior of on is the prototypical counterexample for this entire module.   "
},
{
  "id": "ex-mod9-we-2",
  "level": "2",
  "url": "ws-mod9-worked-examples.html#ex-mod9-we-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "Example 2: Uniform Convergence Preserves Continuity.",
  "body": " Example 2: Uniform Convergence Preserves Continuity   Prove: if uniformly on and each is continuous on , then is continuous on .     Strategy. Fix and . Split into three pieces using the triangle inequality, and control each piece separately.   Proof.   Since uniformly, there exists such that for all and all , . Fix such an ; the function is continuous at , so there exists such that .  Now suppose . By the triangle inequality, Since was arbitrary, is continuous on .    What to notice. This is the trick. The three terms are controlled by: (1) uniform convergence applied at ; (2) continuity of ; (3) uniform convergence applied at . The key is that is chosen before  —this is exactly what uniform convergence buys. With only pointwise convergence, the from (1) would depend on , making the argument circular.   "
},
{
  "id": "ex-mod9-we-3",
  "level": "2",
  "url": "ws-mod9-worked-examples.html#ex-mod9-we-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "Example 3: The Weierstrass <span class=\"process-math\">\\(M\\)<\/span>-Test.",
  "body": " Example 3: The Weierstrass -Test   Show that converges absolutely and uniformly on .     Strategy. Find a bound independent of with and . Then invoke the Weierstrass -Test.   Proof.   Set . For all and all , The series is a convergent -series ( ). By the Weierstrass -Test, converges absolutely and uniformly on .    What to notice. The -Test is essentially a comparison test for series of functions, with the dominating series playing the role of the known convergent series. The uniformity of the bound (no in ) is what delivers uniform convergence. Notice also that we used —a global bound available precisely because the domain is all of .   "
},
{
  "id": "ex-mod9-we-4",
  "level": "2",
  "url": "ws-mod9-worked-examples.html#ex-mod9-we-4",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "Example 4: Term-by-Term Integration.",
  "body": " Example 4: Term-by-Term Integration   Use the geometric series and the term-by-term integration theorem to show that      Strategy. Start from the geometric series for , integrate term by term (justified by uniform convergence on a compact interval), and evaluate at .   Proof.   For , the geometric series gives For any , the series converges uniformly on by the Weierstrass -Test (with and ). Each partial-sum function is continuous, and the uniform limit of continuous functions is continuous (Example 2). By the term-by-term integration theorem, for , The left side equals . Setting : since the series converges by the Alternating Series Test (terms positive, decreasing to ), and , we conclude     What to notice. The passage from to uses a continuity argument (Abel's theorem) that is beyond this course—we have stated the result but not proved this final step rigorously. The term-by-term integration part is fully rigorous on any with ; extending to the boundary is a topic for MAT 5610. The punchline— as an alternating series of unit fractions—is one of the most beautiful results in elementary analysis.   "
},
{
  "id": "ws-mod9-practice-set",
  "level": "1",
  "url": "ws-mod9-practice-set.html",
  "type": "Section",
  "number": "4",
  "title": "Module 9: Practice Problem Set",
  "body": " Module 9: Practice Problem Set  Estimated time: 100 minutes   Problems are labeled (Foundational), (Standard), and (Challenge). Work in order within each level; later problems often build on earlier ones.  These problems are not submitted, but write out complete solutions. For any problem asking you to prove something, apply the standards from the Worked Examples: strategy stated up front, complete sentences, every step justified, and each theorem cited by name.     Foundational Problems    Pointwise Limits   Find the pointwise limit of each sequence of functions on the given set. No proof of convergence is required; a sentence of justification is enough.    on .     on .     on .     on .       (a) For : , so . Pointwise limit: on .  (b) At : for all , so . For : . Pointwise limit: , for .  (c) . Pointwise limit: on .  (d) Standard limit: . Pointwise limit: .     Sup-Norm Computations   For each sequence in F1, compute (where is the pointwise limit from F1) and determine whether .   Part (a) of F1, on .    Part (b) of F1, on and on .    Part (c) of F1, on .       (a) ; (approaching as ). for all . Not uniform on .  (b) On : at , ; for , , approaching as . So . Not uniform. On : . Uniform on .  (c) . Uniform on .     Uniform Convergence: Quick Checks   For each, state whether the convergence is uniform on the given set, and give a one-sentence justification.    on .     on .     on .     on .       (a) . Uniform.  (b) for every (unbounded domain). Not uniform.  (c) ; but is unbounded on . More directly: for all (limit as ). Not uniform on .  (d) Pointwise limit is . (as ). Not uniform on .      -Test Warm-Up   Apply the Weierstrass -Test to each series. State the bound and verify .    on .     on .     on .       (a) ; . Uniform on .  (b) for all ; . Uniform on .  (c) on ; . Uniform on .      Standard Problems    Proving Uniform Convergence   Prove that converges uniformly to on .  Your proof must: (i) identify the pointwise limit; (ii) compute exactly; (iii) show this sup tends to and invoke the sup-norm criterion.    On , , so .     Non-Uniform: Using a Sequence   Prove that does not converge uniformly to on .  Your proof must exhibit a sequence of points such that , thereby showing .    Find the maximizer of by taking the derivative in and setting it to zero. The max is at with value .     Term-by-Term Integration   Let be the th partial sum of the geometric series for .   Show that uniformly on for any .    Use term-by-term integration to compute and take the limit as to recover the formula for .        Radius of Convergence and Uniform Convergence   Find the radius of convergence of each power series using the Ratio Test. Then for each, state the largest set on which the -Test guarantees uniform convergence.                     (a) Ratio . . Uniform on for any (by -Test with ).  (b) Ratio for any . : the series converges only at .  (c) Ratio . . Uniform on for any .     Uniform Convergence and Differentiation   Let on .   Show that uniformly on .    Compute . Does converge pointwise to ?    What does this example show about whether uniform convergence of implies convergence of ?       (a) . Uniform.  (b) . At : . So does not converge to pointwise at .  (c) Uniform convergence of does NOT imply convergence of the derivatives . Differentiating term by term requires an additional condition (e.g., uniform convergence of the derivatives; this is a theorem for MAT 5610).      Challenge Problems    Proof of the Term-by-Term Integration Theorem   Prove: if uniformly on and each is Riemann integrable on , then is Riemann integrable and .  Your proof must use the following steps: (i) show is bounded (since each is bounded and convergence is uniform); (ii) estimate ; (iii) conclude by the definition of limit.    For step (ii), use . For step (i): there exists such that for all and ; so where bounds .     Uniform Convergence of a Power Series   Let be a power series with radius of convergence . Prove that for any , the series converges uniformly on .  Your proof must: (i) observe that for ; (ii) show (use the definition of radius of convergence: the series converges absolutely because ); (iii) apply the Weierstrass -Test with .    The key fact: since , we can pick with such that . Then for some , and .    "
},
{
  "id": "ex-mod9-ps-F1",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-F1",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Pointwise Limits.",
  "body": " Pointwise Limits   Find the pointwise limit of each sequence of functions on the given set. No proof of convergence is required; a sentence of justification is enough.    on .     on .     on .     on .       (a) For : , so . Pointwise limit: on .  (b) At : for all , so . For : . Pointwise limit: , for .  (c) . Pointwise limit: on .  (d) Standard limit: . Pointwise limit: .   "
},
{
  "id": "ex-mod9-ps-F2",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-F2",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Sup-Norm Computations.",
  "body": " Sup-Norm Computations   For each sequence in F1, compute (where is the pointwise limit from F1) and determine whether .   Part (a) of F1, on .    Part (b) of F1, on and on .    Part (c) of F1, on .       (a) ; (approaching as ). for all . Not uniform on .  (b) On : at , ; for , , approaching as . So . Not uniform. On : . Uniform on .  (c) . Uniform on .   "
},
{
  "id": "ex-mod9-ps-F3",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-F3",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Uniform Convergence: Quick Checks.",
  "body": " Uniform Convergence: Quick Checks   For each, state whether the convergence is uniform on the given set, and give a one-sentence justification.    on .     on .     on .     on .       (a) . Uniform.  (b) for every (unbounded domain). Not uniform.  (c) ; but is unbounded on . More directly: for all (limit as ). Not uniform on .  (d) Pointwise limit is . (as ). Not uniform on .   "
},
{
  "id": "ex-mod9-ps-F4",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-F4",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> <span class=\"process-math\">\\(M\\)<\/span>-Test Warm-Up.",
  "body": "  -Test Warm-Up   Apply the Weierstrass -Test to each series. State the bound and verify .    on .     on .     on .       (a) ; . Uniform on .  (b) for all ; . Uniform on .  (c) on ; . Uniform on .   "
},
{
  "id": "ex-mod9-ps-S1",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-S1",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Proving Uniform Convergence.",
  "body": " Proving Uniform Convergence   Prove that converges uniformly to on .  Your proof must: (i) identify the pointwise limit; (ii) compute exactly; (iii) show this sup tends to and invoke the sup-norm criterion.    On , , so .   "
},
{
  "id": "ex-mod9-ps-S2",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-S2",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Non-Uniform: Using a Sequence.",
  "body": " Non-Uniform: Using a Sequence   Prove that does not converge uniformly to on .  Your proof must exhibit a sequence of points such that , thereby showing .    Find the maximizer of by taking the derivative in and setting it to zero. The max is at with value .   "
},
{
  "id": "ex-mod9-ps-S3",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-S3",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Term-by-Term Integration.",
  "body": " Term-by-Term Integration   Let be the th partial sum of the geometric series for .   Show that uniformly on for any .    Use term-by-term integration to compute and take the limit as to recover the formula for .      "
},
{
  "id": "ex-mod9-ps-S4",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-S4",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Radius of Convergence and Uniform Convergence.",
  "body": " Radius of Convergence and Uniform Convergence   Find the radius of convergence of each power series using the Ratio Test. Then for each, state the largest set on which the -Test guarantees uniform convergence.                     (a) Ratio . . Uniform on for any (by -Test with ).  (b) Ratio for any . : the series converges only at .  (c) Ratio . . Uniform on for any .   "
},
{
  "id": "ex-mod9-ps-S5",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-S5",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Uniform Convergence and Differentiation.",
  "body": " Uniform Convergence and Differentiation   Let on .   Show that uniformly on .    Compute . Does converge pointwise to ?    What does this example show about whether uniform convergence of implies convergence of ?       (a) . Uniform.  (b) . At : . So does not converge to pointwise at .  (c) Uniform convergence of does NOT imply convergence of the derivatives . Differentiating term by term requires an additional condition (e.g., uniform convergence of the derivatives; this is a theorem for MAT 5610).   "
},
{
  "id": "ex-mod9-ps-C1",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-C1",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> Proof of the Term-by-Term Integration Theorem.",
  "body": " Proof of the Term-by-Term Integration Theorem   Prove: if uniformly on and each is Riemann integrable on , then is Riemann integrable and .  Your proof must use the following steps: (i) show is bounded (since each is bounded and convergence is uniform); (ii) estimate ; (iii) conclude by the definition of limit.    For step (ii), use . For step (i): there exists such that for all and ; so where bounds .   "
},
{
  "id": "ex-mod9-ps-C2",
  "level": "2",
  "url": "ws-mod9-practice-set.html#ex-mod9-ps-C2",
  "type": "Checkpoint",
  "number": "4.11",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> Uniform Convergence of a Power Series.",
  "body": " Uniform Convergence of a Power Series   Let be a power series with radius of convergence . Prove that for any , the series converges uniformly on .  Your proof must: (i) observe that for ; (ii) show (use the definition of radius of convergence: the series converges absolutely because ); (iii) apply the Weierstrass -Test with .    The key fact: since , we can pick with such that . Then for some , and .   "
},
{
  "id": "ws-mod9-bridge-reading",
  "level": "1",
  "url": "ws-mod9-bridge-reading.html",
  "type": "Section",
  "number": "5",
  "title": "Module 9: Bridge Reading Guide",
  "body": " Module 9: Bridge Reading Guide  Bauldry §2.6 — Estimated time: 40 minutes   Every module ends with a bridge reading in Bauldry's Introduction to Real Analysis . For this final module the reading is Bauldry §2.6 ( Sequences and Series of Functions , approximately pp. 101–116). This section is the graduate treatment of everything you have just studied: pointwise and uniform convergence, preservation of continuity and integrability, the Weierstrass -Test, and power series as the payoff application. Reading it now, after working through Zorn §4.4 and the module exercises, should feel like recognition—you already know the ideas; Bauldry is showing you how a graduate text frames them.  Pay particular attention to two things as you read. First, Bauldry's definition of uniform convergence and the -norm criterion: are they identical to Zorn's formulation, or phrased differently? Second, Bauldry's treatment of power series at the end of §2.6: he shows that a power series converges uniformly on any closed disk strictly inside its radius of convergence, and derives term-by-term differentiation and integration as corollaries. This is the framework MAT 5610 will use throughout Chapter 2.   For this module, read: Bauldry §2.6 ( Sequences and Series of Functions , approximately pp. 101–116).     Definitions and Sup-Norm Criterion  Bauldry opens §2.6 by giving the definitions of pointwise and uniform convergence and the sup-norm criterion for uniform convergence. These match Zorn §4.4 precisely. Read the definitions carefully; then answer the exercises below.    Comparing Definitions   Write out Bauldry's definition of uniform convergence (§2.6, Definition or Theorem 2.6.x). Compare it word-for-word with the definition in the module orientation. Are they identical? If not, identify the difference in phrasing or quantifier order. Which formulation do you find clearer, and why?     The Sup-Norm Criterion in Bauldry     State the sup-norm criterion as Bauldry gives it. How does his statement compare to the version in the module study guide (Exercise sg-2)?  Bauldry may phrase the criterion as a theorem or as an equivalent definition. Whichever form he uses, explain why it is logically equivalent to the - definition.        Preservation of Continuity and Integrability  Bauldry proves (or states as theorems) that uniform convergence preserves continuity and permits the interchange of limits and integrals. In the module you proved the continuity theorem (Worked Example 2) and applied the integration theorem (Worked Example 4). Now see how a graduate text presents these results.    The Continuity Theorem in Bauldry   Locate the theorem in §2.6 that says uniform convergence of continuous functions implies the limit is continuous.    Does Bauldry's proof use the same -trick structure as Worked Example 2 in this module? Describe any differences in presentation.  Bauldry may state a stronger version: that the limit of a uniformly convergent sequence of continuous functions on a closed interval is uniformly continuous. Does he state this? What additional hypothesis is needed?       Term-by-Term Integration in Bauldry   Find the theorem in §2.6 that justifies swapping the limit and the integral under uniform convergence.    State the theorem exactly as Bauldry gives it. What hypotheses does he require beyond uniform convergence?  The derivation of the Leibniz formula in Worked Example 4 used this theorem on for , with a continuity argument (Abel's theorem) to reach . Does Bauldry address this boundary extension? What does he say?        The Weierstrass -Test and Power Series  The second half of Bauldry §2.6 applies the -Test to power series, showing that every power series converges uniformly on any closed interval strictly inside its radius of convergence. This result justifies term-by-term differentiation and integration of power series—one of the most important tools in graduate analysis.    The -Test in Bauldry   State the Weierstrass -Test as Bauldry gives it. Compare it to the statement in the module orientation. Are the hypotheses the same? Does Bauldry include the absolute convergence conclusion explicitly?     Power Series Uniform Convergence     Bauldry uses the -Test to prove that the power series with radius of convergence converges uniformly on for any . Sketch the argument: what are the 's, and why does converge?  Why is the uniform convergence restricted to with , rather than the full interval of convergence ? Give a specific example where the series converges at every point of but not uniformly.       Term-by-Term Differentiation   Bauldry's treatment of power series culminates in term-by-term differentiation: if on , then on .    Does this module cover differentiation of function series? (Check the orientation.) Why does the prep course omit term-by-term differentiation while including term-by-term integration?  Bauldry uses this theorem to show that the exponential function satisfies . Walk through the argument in one or two sentences.        Course Wrap-Up  This is the final bridge reading of the prep course. Over nine modules, you have built every foundational tool that MAT 5610 will use in Bauldry Chapter 2: the logic and proof-writing infrastructure (Module 1), the completeness of (Module 2), the theory of sequences including Cauchy sequences and subsequences (Module 4), series including absolute and conditional convergence (Module 5), limits, continuity, and uniform continuity of functions (Module 6), differentiation and the Mean Value Theorem (Module 7), Riemann integration and the Fundamental Theorem (Module 8), and now uniform convergence of function sequences and series (Module 9).  Bauldry Chapter 2 is the rigorous version of all of that— written at graduate speed, with proofs that assume you can fill in details that would have been spelled out at the undergraduate level. The prep course was designed so that when you encounter a definition or theorem in MAT 5610, you will have already seen the idea once: in the lightboard videos, in Zorn, and now in Bauldry. The goal was never to replace the graduate course but to lower the activation energy for engaging with it.  Before MAT 5610 begins, consider reviewing: the - definition of continuity and the - definition of sequence convergence, the statement and proof of the Bolzano-Weierstrass theorem, the proof of the Fundamental Theorem of Calculus (both parts), and today's uniform convergence definitions. These four clusters are the joints at which the graduate course will bend. If you can write their proofs cleanly from memory, you are well prepared.   "
},
{
  "id": "ex-mod9-br-1",
  "level": "2",
  "url": "ws-mod9-bridge-reading.html#ex-mod9-br-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "Comparing Definitions.",
  "body": " Comparing Definitions   Write out Bauldry's definition of uniform convergence (§2.6, Definition or Theorem 2.6.x). Compare it word-for-word with the definition in the module orientation. Are they identical? If not, identify the difference in phrasing or quantifier order. Which formulation do you find clearer, and why?   "
},
{
  "id": "ex-mod9-br-2",
  "level": "2",
  "url": "ws-mod9-bridge-reading.html#ex-mod9-br-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "The Sup-Norm Criterion in Bauldry.",
  "body": " The Sup-Norm Criterion in Bauldry     State the sup-norm criterion as Bauldry gives it. How does his statement compare to the version in the module study guide (Exercise sg-2)?  Bauldry may phrase the criterion as a theorem or as an equivalent definition. Whichever form he uses, explain why it is logically equivalent to the - definition.     "
},
{
  "id": "ex-mod9-br-3",
  "level": "2",
  "url": "ws-mod9-bridge-reading.html#ex-mod9-br-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "The Continuity Theorem in Bauldry.",
  "body": " The Continuity Theorem in Bauldry   Locate the theorem in §2.6 that says uniform convergence of continuous functions implies the limit is continuous.    Does Bauldry's proof use the same -trick structure as Worked Example 2 in this module? Describe any differences in presentation.  Bauldry may state a stronger version: that the limit of a uniformly convergent sequence of continuous functions on a closed interval is uniformly continuous. Does he state this? What additional hypothesis is needed?     "
},
{
  "id": "ex-mod9-br-4",
  "level": "2",
  "url": "ws-mod9-bridge-reading.html#ex-mod9-br-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "Term-by-Term Integration in Bauldry.",
  "body": " Term-by-Term Integration in Bauldry   Find the theorem in §2.6 that justifies swapping the limit and the integral under uniform convergence.    State the theorem exactly as Bauldry gives it. What hypotheses does he require beyond uniform convergence?  The derivation of the Leibniz formula in Worked Example 4 used this theorem on for , with a continuity argument (Abel's theorem) to reach . Does Bauldry address this boundary extension? What does he say?     "
},
{
  "id": "ex-mod9-br-5",
  "level": "2",
  "url": "ws-mod9-bridge-reading.html#ex-mod9-br-5",
  "type": "Checkpoint",
  "number": "5.5",
  "title": "The <span class=\"process-math\">\\(M\\)<\/span>-Test in Bauldry.",
  "body": " The -Test in Bauldry   State the Weierstrass -Test as Bauldry gives it. Compare it to the statement in the module orientation. Are the hypotheses the same? Does Bauldry include the absolute convergence conclusion explicitly?   "
},
{
  "id": "ex-mod9-br-6",
  "level": "2",
  "url": "ws-mod9-bridge-reading.html#ex-mod9-br-6",
  "type": "Checkpoint",
  "number": "5.6",
  "title": "Power Series Uniform Convergence.",
  "body": " Power Series Uniform Convergence     Bauldry uses the -Test to prove that the power series with radius of convergence converges uniformly on for any . Sketch the argument: what are the 's, and why does converge?  Why is the uniform convergence restricted to with , rather than the full interval of convergence ? Give a specific example where the series converges at every point of but not uniformly.     "
},
{
  "id": "ex-mod9-br-7",
  "level": "2",
  "url": "ws-mod9-bridge-reading.html#ex-mod9-br-7",
  "type": "Checkpoint",
  "number": "5.7",
  "title": "Term-by-Term Differentiation.",
  "body": " Term-by-Term Differentiation   Bauldry's treatment of power series culminates in term-by-term differentiation: if on , then on .    Does this module cover differentiation of function series? (Check the orientation.) Why does the prep course omit term-by-term differentiation while including term-by-term integration?  Bauldry uses this theorem to show that the exponential function satisfies . Walk through the argument in one or two sentences.     "
},
{
  "id": "ws-mod9-assessment",
  "level": "1",
  "url": "ws-mod9-assessment.html",
  "type": "Section",
  "number": "6",
  "title": "Module 9: Assessment",
  "body": " Module 9: Assessment  Submitted Proofs and Reflection — Estimated time: 40 minutes    This assessment has three parts. Parts 1 and 2 ask you to write complete mathematical proofs, submitted for feedback. Part 3 is a short reflection. Submit all three parts together as a single document (PDF or typed file) through the course management system.   Write-up standard. All proofs must be written in complete mathematical prose. Use the style modeled in the Worked Examples: announce your strategy, include scratch work (clearly labeled) before the formal proof, write in complete grammatical sentences, invoke each theorem by name, and justify every step. Work consisting only of symbolic manipulations without explanation will not receive full credit.   A note on Part 2. Part 2 is a single required proof problem; there are no options to choose between. All students complete the same Part 2 problem.   Academic integrity. Your proofs must be your own work. You may refer to your notes, the textbooks, and the worked examples from this module. You may not collaborate with other students on the written proofs or use AI writing tools to draft your arguments.   Part 1: Uniform Convergence Preserves Continuity (Required) (Estimated time: 15 minutes)    The Continuity Theorem   Prove the following theorem: If uniformly on and each is continuous on , then is continuous on .   Your proof must have the following structure:   Setup. Fix and . State what you need to show and identify the three quantities you will bound.   Choose from uniform convergence. Use the definition of uniform convergence to obtain such that for all and all . Specify the value of you fix.   Choose from continuity of . Use continuity of at to obtain such that .   The triangle inequality. Suppose . Write out the split and bound each term by , citing the source of each bound.   Conclusion. State why is continuous at , and why this implies is continuous on all of .      The critical step is (ii): the you obtain from uniform convergence must not depend on —it works simultaneously for all . This is exactly the content of the quantifier structure of uniform convergence, and it is what makes the proof work. If you find yourself choosing a different for each , you are using only pointwise convergence.       Part 2: Analyzing a Non-Uniform Sequence (Required) (Estimated time: 20 minutes)    The Sequence   Let for .     Pointwise limit. Compute for each fixed . (Handle and separately.) Call the pointwise limit and state it explicitly.   Supremum of . For each , find the maximum of over . (Use single-variable calculus: differentiate, set equal to zero, check the critical point.) Compute and determine whether this supremum tends to as .   Uniform convergence verdict. Does uniformly on ? Justify your answer using the result of (ii).   Comparing integrals. Compute and . Are they equal? What does the discrepancy (if any) illustrate about the relationship between pointwise convergence and interchange of limits and integrals?      For part (i): recall that as when , so you need as —which follows from L'Hôpital's rule or the standard limit . For part (ii): differentiate with respect to and set . For part (iv): use integration by parts .       Part 3: Reflection (Estimated time: 5 minutes)  Write 3–5 sentences for each question. These are graded for thoughtfulness, not for mathematical correctness.    The Quantifier Swap   The only formal difference between pointwise and uniform convergence is the order of two quantifiers. In 3–5 sentences, explain in your own words why this single quantifier swap has such dramatic consequences—why does moving outside the change what properties the limit function inherits?     Bauldry §2.6 — First Impressions   After reading Bauldry §2.6, describe in 3–5 sentences what feels most different about the graduate presentation compared to the module material. Was there a result in Bauldry that surprised you, or that the module did not fully prepare you for?     Course Capstone Reflection   This is the final assessment of the prep course. In 4–6 sentences, reflect on the following: Which module or topic represented the biggest conceptual leap for you? What single idea from the course do you expect to use most in MAT 5610? Is there any topic from the nine modules that you feel you would benefit from revisiting before the semester begins?       Assessment Rubric (Informational)   The following rubric describes how submitted proofs will be evaluated.    Grading Criteria        Criterion  Full credit  Partial credit  Minimal credit    Logical correctness  All steps are valid; the argument proves exactly the stated claim  Mostly correct with one fixable gap  Significant logical errors or wrong claim proved    Quantifier structure  chosen before in Part 1; uniform vs. pointwise distinction explicit throughout  Correct idea but quantifier order not made explicit  Pointwise and uniform convergence conflated; depending on    Supremum computation  Critical point found correctly in Part 2 (ii); sup computed and limit evaluated  Maximum found with minor computational error  Supremum not computed or wrong method used    Mathematical prose  Complete grammatical sentences; strategy stated up front; every step justified  Mostly prose with some missing connective sentences  Primarily symbolic with no connecting narrative    Reflection  Specific, thoughtful, and engages with the mathematical content and course arc  General but relevant observations  Vague or too brief to be informative     "
},
{
  "id": "assess-mod9-1",
  "level": "2",
  "url": "ws-mod9-assessment.html#assess-mod9-1",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "The Continuity Theorem.",
  "body": " The Continuity Theorem   Prove the following theorem: If uniformly on and each is continuous on , then is continuous on .   Your proof must have the following structure:   Setup. Fix and . State what you need to show and identify the three quantities you will bound.   Choose from uniform convergence. Use the definition of uniform convergence to obtain such that for all and all . Specify the value of you fix.   Choose from continuity of . Use continuity of at to obtain such that .   The triangle inequality. Suppose . Write out the split and bound each term by , citing the source of each bound.   Conclusion. State why is continuous at , and why this implies is continuous on all of .      The critical step is (ii): the you obtain from uniform convergence must not depend on —it works simultaneously for all . This is exactly the content of the quantifier structure of uniform convergence, and it is what makes the proof work. If you find yourself choosing a different for each , you are using only pointwise convergence.   "
},
{
  "id": "assess-mod9-2",
  "level": "2",
  "url": "ws-mod9-assessment.html#assess-mod9-2",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "The Sequence <span class=\"process-math\">\\(f_n(x) = nx\\,e^{-nx}\\)<\/span>.",
  "body": " The Sequence   Let for .     Pointwise limit. Compute for each fixed . (Handle and separately.) Call the pointwise limit and state it explicitly.   Supremum of . For each , find the maximum of over . (Use single-variable calculus: differentiate, set equal to zero, check the critical point.) Compute and determine whether this supremum tends to as .   Uniform convergence verdict. Does uniformly on ? Justify your answer using the result of (ii).   Comparing integrals. Compute and . Are they equal? What does the discrepancy (if any) illustrate about the relationship between pointwise convergence and interchange of limits and integrals?      For part (i): recall that as when , so you need as —which follows from L'Hôpital's rule or the standard limit . For part (ii): differentiate with respect to and set . For part (iv): use integration by parts .   "
},
{
  "id": "assess-mod9-r1",
  "level": "2",
  "url": "ws-mod9-assessment.html#assess-mod9-r1",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "The Quantifier Swap.",
  "body": " The Quantifier Swap   The only formal difference between pointwise and uniform convergence is the order of two quantifiers. In 3–5 sentences, explain in your own words why this single quantifier swap has such dramatic consequences—why does moving outside the change what properties the limit function inherits?   "
},
{
  "id": "assess-mod9-r2",
  "level": "2",
  "url": "ws-mod9-assessment.html#assess-mod9-r2",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "Bauldry §2.6 — First Impressions.",
  "body": " Bauldry §2.6 — First Impressions   After reading Bauldry §2.6, describe in 3–5 sentences what feels most different about the graduate presentation compared to the module material. Was there a result in Bauldry that surprised you, or that the module did not fully prepare you for?   "
},
{
  "id": "assess-mod9-r3",
  "level": "2",
  "url": "ws-mod9-assessment.html#assess-mod9-r3",
  "type": "Checkpoint",
  "number": "6.5",
  "title": "Course Capstone Reflection.",
  "body": " Course Capstone Reflection   This is the final assessment of the prep course. In 4–6 sentences, reflect on the following: Which module or topic represented the biggest conceptual leap for you? What single idea from the course do you expect to use most in MAT 5610? Is there any topic from the nine modules that you feel you would benefit from revisiting before the semester begins?   "
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
