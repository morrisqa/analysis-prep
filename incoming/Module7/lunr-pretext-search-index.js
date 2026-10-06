var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-mod7-orientation",
  "level": "1",
  "url": "ws-mod7-orientation.html",
  "type": "Section",
  "number": "1",
  "title": "Module 7: Differentiation",
  "body": " Module 7: Differentiation  Orientation     State the limit definition of the derivative and interpret it geometrically as the slope of the tangent line.    Prove that differentiability implies continuity.    State and apply the sum rule, product rule, quotient rule, and chain rule; prove the sum and product rules from the limit definition.    State and prove Rolle's Theorem.    State and prove the Mean Value Theorem (using Rolle's Theorem).    Apply the MVT to prove analytic inequalities (e.g., ) and to deduce monotonicity from the sign of .    State Taylor's Theorem with Lagrange remainder; identify it as a pointer to MAT 5610.       Differentiation is where calculus begins, but what we do here is different from what you did in Calculus I: every statement becomes a theorem to be proved, not a rule to be applied. The derivative, which you once computed mechanically via the power rule, is now defined as a specific limit, and every differentiation rule —sum, product, chain—must be deduced from that definition using the limit laws of Module 6.  The central result of this module—the Mean Value Theorem—is one of the most-used theorems in all of MAT 5610. It connects the local (the derivative at a point) to the global (values of on an interval). Once you have the MVT, you can bound how much a function changes by bounding its derivative—an argument form that appears in the proofs of the Fundamental Theorem of Calculus, Taylor's theorem, error estimates for numerical methods, and many results in Bauldry Chapter 2.  The self-assessment questions below are not graded . They are designed to help you locate yourself within the module. Write informally; a sentence or two per question is fine.    The Limit Definition   Write the limit definition of from memory. What does measure geometrically?     Differentiability Implies Continuity   Do you believe that every differentiable function is continuous? Give an intuitive argument for why this should be true, or attempt to construct a counterexample.     Computing Derivatives   Compute for using the limit definition (not the power rule). Show your algebra in full.     The MVT   State the Mean Value Theorem as you remember it from calculus. What does it guarantee? Draw a picture to accompany your statement.     Your Background   Have you seen a proof of the Mean Value Theorem before? Describe what you remember about it. If you have not seen a proof, describe what you expect one would require.      A Note from the Instructor  The most important thing to take away from this module is the Mean Value Theorem—not as a formula but as an argument form : to bound how much can change on an interval, bound on that interval. This is a template you will use dozens of times in MAT 5610. The proof of Rolle's Theorem (which depends on the Extreme Value Theorem from Module 6) is worth memorizing; the derivation of the MVT from Rolle's (the tilt the function trick) is worth understanding so well that you could reconstruct it under pressure.  Students who found Module 6 challenging should revisit the definition of continuity and the Extreme Value Theorem before starting this module: differentiability is a stronger condition than continuity, and Rolle's Theorem depends critically on the EVT. If you are solid on continuity, this module should feel like a natural next step—the definitions and proof strategies are of the same character.    A Note on Pacing   A note on pacing. If you are coming in with prior real analysis experience, the definition of the derivative and the basic rules will likely feel very familiar. Skim Zorn §4.1–4.2 quickly, focus your attention on §4.3 (the MVT and Taylor's theorem), and work the Bridge Reading in Bauldry §2.3 carefully—pay particular attention to how Bauldry uses the MVT in the results that follow it, since those are the results MAT 5610 will develop. If proof-based analysis is newer to you, work carefully through Worked Examples 1 and 2 (derivative from the definition, differentiability implies continuity) before attempting the MVT, and spend extra time on the proof of Rolle's Theorem in the Study Guide before tackling the Practice Set. The chain of reasoning definition Rolle's MVT is the logical spine of the module; make sure each link is clear before moving on.    Module Road Map (estimated time: 5 hours)       Component  Time  Purpose    Orientation (this document)  15 min  Goals, self-assessment, context    Video 1: The Derivative—Definition and Rules  9 min  Core instruction via lightboard    Video 2: The Mean Value Theorem  10 min  Core instruction via lightboard    Companion Reading and Study Guide  55 min  Zorn §4.1–4.3 with guided questions    Worked Examples  40 min  Four annotated proof walkthroughs    Practice Problem Set  105 min  Scaffolded practice by difficulty    Bridge Reading Guide  40 min  Bauldry §1.3 and §2.3 with guided questions    Module Assessment  40 min  Submitted proofs and reflection     "
},
{
  "id": "obj-mod7",
  "level": "2",
  "url": "ws-mod7-orientation.html#obj-mod7",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   State the limit definition of the derivative and interpret it geometrically as the slope of the tangent line.    Prove that differentiability implies continuity.    State and apply the sum rule, product rule, quotient rule, and chain rule; prove the sum and product rules from the limit definition.    State and prove Rolle's Theorem.    State and prove the Mean Value Theorem (using Rolle's Theorem).    Apply the MVT to prove analytic inequalities (e.g., ) and to deduce monotonicity from the sign of .    State Taylor's Theorem with Lagrange remainder; identify it as a pointer to MAT 5610.    "
},
{
  "id": "ex-mod7-sa-1",
  "level": "2",
  "url": "ws-mod7-orientation.html#ex-mod7-sa-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "The Limit Definition.",
  "body": " The Limit Definition   Write the limit definition of from memory. What does measure geometrically?   "
},
{
  "id": "ex-mod7-sa-2",
  "level": "2",
  "url": "ws-mod7-orientation.html#ex-mod7-sa-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "Differentiability Implies Continuity.",
  "body": " Differentiability Implies Continuity   Do you believe that every differentiable function is continuous? Give an intuitive argument for why this should be true, or attempt to construct a counterexample.   "
},
{
  "id": "ex-mod7-sa-3",
  "level": "2",
  "url": "ws-mod7-orientation.html#ex-mod7-sa-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "Computing Derivatives.",
  "body": " Computing Derivatives   Compute for using the limit definition (not the power rule). Show your algebra in full.   "
},
{
  "id": "ex-mod7-sa-4",
  "level": "2",
  "url": "ws-mod7-orientation.html#ex-mod7-sa-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "The MVT.",
  "body": " The MVT   State the Mean Value Theorem as you remember it from calculus. What does it guarantee? Draw a picture to accompany your statement.   "
},
{
  "id": "ex-mod7-sa-5",
  "level": "2",
  "url": "ws-mod7-orientation.html#ex-mod7-sa-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Your Background.",
  "body": " Your Background   Have you seen a proof of the Mean Value Theorem before? Describe what you remember about it. If you have not seen a proof, describe what you expect one would require.   "
},
{
  "id": "ws-mod7-study-guide",
  "level": "1",
  "url": "ws-mod7-study-guide.html",
  "type": "Section",
  "number": "2",
  "title": "Module 7: Companion Reading and Study Guide",
  "body": " Module 7: Companion Reading and Study Guide  Zorn §4.1–4.3 — Estimated time: 55 minutes   This guide accompanies three sections of Zorn's Understanding Real Analysis . Section 4.1 ( Derivatives ) introduces the formal limit definition and establishes differentiability as a condition stronger than continuity. Section 4.2 ( Differentiation Rules ) develops the standard rules as theorems proved from the definition. Section 4.3 ( The Mean Value Theorem ) builds from Rolle's Theorem to the MVT and applies it to prove monotonicity results and Taylor's theorem.  Read each section before working its questions. The theme running through all three sections is that every statement about derivatives is ultimately a statement about limits , and every proof uses the limit machinery from Modules 5 and 6. When you encounter a rule you learned mechanically in calculus, ask: which limit law is doing the work here?     Section 4.1: The Derivative (Zorn pp. 163–172)  Read Zorn's definition of differentiability at a point carefully. The difference quotient is a function of ; the derivative is the limit of this function as . Make sure you can translate between the form and the form: .    The Difference Quotient   Write the difference quotient for at a point in both the and the form. Then, for , compute the difference quotient at in simplified form and evaluate its limit.    The two forms are as and as . For at : So .     Differentiability Implies Continuity     State the definition of differentiability of at a point .  Prove: if is differentiable at , then is continuous at . Write the proof in full. The key algebraic step is to write and apply the product rule for limits as .      (a) is differentiable at if exists (as a finite real number); its value is called .  (b) Suppose is differentiable at . For , write As , the first factor tends to (by differentiability) and the second factor tends to . By the product rule for limits, , so , confirming continuity.      The Sum Rule from the Definition   Prove from the limit definition that (the sum rule), assuming both and are differentiable at . Your proof must explicitly write the difference quotient for , split it into two separate difference quotients, and invoke the sum rule for limits.    The difference quotient for at is As , the first term tends to and the second tends to , by differentiability of and at . By the sum rule for limits, .       Section 4.2: Differentiation Rules (Zorn pp. 172–182)  Section 4.2 develops the product rule, quotient rule, and chain rule as theorems. The product rule proof is a model of the add and subtract a clever term technique that appears repeatedly in analysis. The chain rule proof requires more care because of a subtle division-by-zero issue.    The Product Rule   State the product rule: . Then prove it from the limit definition. The key step is to add and subtract the term in the numerator of the difference quotient for .    The difference quotient for at is Add and subtract : As : (since is continuous at , by differentiability), the second factor tends to , and is a constant times a factor tending to . By the sum and product rules for limits, .      The Chain Rule and Its Proof     State the chain rule: if is differentiable at and is differentiable at , then .  Explain in words why the obvious proof attempt—multiply and divide by —has a gap.  Describe the auxiliary function approach that fixes the gap. Define for and , and explain why this function is continuous at .      (a) The chain rule statement is given. (b) The obvious approach writes intending to take limits to get . The gap: might equal for arbitrarily small , making the first fraction undefined at those values of . (c) The auxiliary function rewrites for all , including . Substituting gives a valid expression with no division by zero. Since is differentiable at , as , and is continuous at .     Applying the Rules   Apply the product and chain rules to differentiate each function. State which rule you use at each step.         , assuming .      (a) Product rule: . (b) Chain rule: . (c) Chain rule: .      Section 4.3: The Mean Value Theorem (Zorn pp. 182–196)  Section 4.3 is the heart of Module 7. Read the proof of Rolle's Theorem carefully: it uses the Extreme Value Theorem (Module 6) in an essential way. The MVT proof derives from Rolle's by a geometric trick (subtracting the secant line) that you should be able to reconstruct from memory by the end of this module.    Rolle's Theorem   State Rolle's Theorem in full (all three hypotheses and the conclusion). Then, for on , verify that all three hypotheses hold and find the value guaranteed by the conclusion.    Rolle's Theorem: if is continuous on , differentiable on , and , then there exists with . For on : (i) is a polynomial, hence continuous on and differentiable on . (ii) and , so . By Rolle's, there exists with . Since , we get .     Proof of the MVT from Rolle's Theorem   State the Mean Value Theorem. Then prove it using Rolle's Theorem by defining the auxiliary function Verify that , apply Rolle's Theorem to , and interpret the conclusion for .    MVT: If is continuous on and differentiable on , then there exists such that .  Proof: Define . Then is continuous on and differentiable on (being a difference of such functions), and , . By Rolle's Theorem, there exists with . Since , we get .      MVT Application: Zero Derivative   Use the MVT to prove: if for all , then is constant on . (Hint: take any two points with , apply the MVT on , and use for the resulting .)    Let with . Since is differentiable on , it is continuous on and differentiable on . By the MVT, there exists such that . Hence . Since were arbitrary, is constant on .     "
},
{
  "id": "ex-mod7-sg-41-1",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-41-1",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "The Difference Quotient.",
  "body": " The Difference Quotient   Write the difference quotient for at a point in both the and the form. Then, for , compute the difference quotient at in simplified form and evaluate its limit.    The two forms are as and as . For at : So .   "
},
{
  "id": "ex-mod7-sg-41-2",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-41-2",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "Differentiability Implies Continuity.",
  "body": " Differentiability Implies Continuity     State the definition of differentiability of at a point .  Prove: if is differentiable at , then is continuous at . Write the proof in full. The key algebraic step is to write and apply the product rule for limits as .      (a) is differentiable at if exists (as a finite real number); its value is called .  (b) Suppose is differentiable at . For , write As , the first factor tends to (by differentiability) and the second factor tends to . By the product rule for limits, , so , confirming continuity.    "
},
{
  "id": "ex-mod7-sg-41-3",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-41-3",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "The Sum Rule from the Definition.",
  "body": " The Sum Rule from the Definition   Prove from the limit definition that (the sum rule), assuming both and are differentiable at . Your proof must explicitly write the difference quotient for , split it into two separate difference quotients, and invoke the sum rule for limits.    The difference quotient for at is As , the first term tends to and the second tends to , by differentiability of and at . By the sum rule for limits, .    "
},
{
  "id": "ex-mod7-sg-42-1",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-42-1",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "The Product Rule.",
  "body": " The Product Rule   State the product rule: . Then prove it from the limit definition. The key step is to add and subtract the term in the numerator of the difference quotient for .    The difference quotient for at is Add and subtract : As : (since is continuous at , by differentiability), the second factor tends to , and is a constant times a factor tending to . By the sum and product rules for limits, .    "
},
{
  "id": "ex-mod7-sg-42-2",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-42-2",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "The Chain Rule and Its Proof.",
  "body": " The Chain Rule and Its Proof     State the chain rule: if is differentiable at and is differentiable at , then .  Explain in words why the obvious proof attempt—multiply and divide by —has a gap.  Describe the auxiliary function approach that fixes the gap. Define for and , and explain why this function is continuous at .      (a) The chain rule statement is given. (b) The obvious approach writes intending to take limits to get . The gap: might equal for arbitrarily small , making the first fraction undefined at those values of . (c) The auxiliary function rewrites for all , including . Substituting gives a valid expression with no division by zero. Since is differentiable at , as , and is continuous at .   "
},
{
  "id": "ex-mod7-sg-42-3",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-42-3",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "Applying the Rules.",
  "body": " Applying the Rules   Apply the product and chain rules to differentiate each function. State which rule you use at each step.         , assuming .      (a) Product rule: . (b) Chain rule: . (c) Chain rule: .   "
},
{
  "id": "ex-mod7-sg-43-1",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-43-1",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "Rolle’s Theorem.",
  "body": " Rolle's Theorem   State Rolle's Theorem in full (all three hypotheses and the conclusion). Then, for on , verify that all three hypotheses hold and find the value guaranteed by the conclusion.    Rolle's Theorem: if is continuous on , differentiable on , and , then there exists with . For on : (i) is a polynomial, hence continuous on and differentiable on . (ii) and , so . By Rolle's, there exists with . Since , we get .   "
},
{
  "id": "ex-mod7-sg-43-2",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-43-2",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "Proof of the MVT from Rolle’s Theorem.",
  "body": " Proof of the MVT from Rolle's Theorem   State the Mean Value Theorem. Then prove it using Rolle's Theorem by defining the auxiliary function Verify that , apply Rolle's Theorem to , and interpret the conclusion for .    MVT: If is continuous on and differentiable on , then there exists such that .  Proof: Define . Then is continuous on and differentiable on (being a difference of such functions), and , . By Rolle's Theorem, there exists with . Since , we get .    "
},
{
  "id": "ex-mod7-sg-43-3",
  "level": "2",
  "url": "ws-mod7-study-guide.html#ex-mod7-sg-43-3",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "MVT Application: Zero Derivative.",
  "body": " MVT Application: Zero Derivative   Use the MVT to prove: if for all , then is constant on . (Hint: take any two points with , apply the MVT on , and use for the resulting .)    Let with . Since is differentiable on , it is continuous on and differentiable on . By the MVT, there exists such that . Hence . Since were arbitrary, is constant on .    "
},
{
  "id": "ws-mod7-worked-examples",
  "level": "1",
  "url": "ws-mod7-worked-examples.html",
  "type": "Section",
  "number": "3",
  "title": "Module 7: Worked Examples",
  "body": " Module 7: Worked Examples  Annotated Proof Walkthroughs — Estimated time: 40 minutes   Read each example slowly. The goal is not just to see what the answer is, but to internalize the proof template . Example 1 shows how to compute a derivative directly from the limit definition. Example 2 proves differentiability implies continuity—a result that looks obvious but requires a specific algebraic trick. Example 3 is a full proof of Rolle's Theorem, the key lemma for the MVT. Example 4 demonstrates the MVT used to produce an inequality, the most common application pattern in MAT 5610.     Example 1: Derivative from the Definition   Prove that is differentiable at every and that .     Strategy.   Compute the difference quotient , simplify the numerator algebraically, cancel the factor of , and evaluate the resulting limit as .   Scratch work.   Expand the numerator: Dividing by leaves , which tends to as .   Proof.   Let . For , compute: By the sum and product rules for limits (Module 6), By the definition of the derivative, . Since was arbitrary, is differentiable at every point and .    What to notice.   The entire work is in the algebra of the numerator: expanding and identifying the factor of that cancels the denominator. Once that cancellation is done, the limit is immediate from the limit laws. This is the standard template for every computation of a derivative from the definition: simplify, cancel, then take the limit .      Example 2: Differentiability Implies Continuity   Prove that if is differentiable at , then is continuous at .     Strategy.   Write as a product involving the difference quotient, then apply the product rule for limits. The key algebraic insight is that we can insert the factor in the denominator as long as we also put it in the numerator.   Proof.   Suppose is differentiable at . For , we may write As , the first factor tends to by the hypothesis of differentiability, and the second factor tends to . By the product rule for limits, Hence , so is continuous at .    What to notice.   The key algebraic trick is writing as a product with the difference quotient. This is valid for , and the limit as only looks at anyway. The theorem is one-directional: continuity does not imply differentiability. The function is continuous at but not differentiable there (the left- and right-hand difference quotients both exist but are and respectively, so the limit does not exist).      Example 3: Proof of Rolle's Theorem   Prove Rolle's Theorem: if is continuous on , differentiable on , and , then there exists with .     Strategy.   The Extreme Value Theorem (Module 6) guarantees that attains its maximum and minimum on . If is constant, we are immediately done. If not, at least one extremum must occur at an interior point , and at an interior extremum of a differentiable function, the derivative must be zero.   Step 1: Handle the trivial case.    (i) If is constant on . Then for every , and the conclusion holds immediately.   Step 2: Handle the nontrivial case.    (ii) If is not constant on . By the Extreme Value Theorem (EVT, Module 6), attains its maximum at some point in . Since is not constant and , the maximum cannot equal at both endpoints simultaneously; there must be some with . Hence the maximum of is attained at some point .   Step 3: Conclude at the interior maximum.   At the interior maximum : for small, , so ; taking the right-hand limit, . For small, , so ; taking the left-hand limit, . Since both inequalities hold and the derivative exists, . (A symmetric argument applies if attains its minimum at an interior point.)    What to notice.   The proof has two cases; the key one requires to be non-constant. The Extreme Value Theorem (from Module 6) is the tool that produces the interior extremum, and differentiability is what forces at that point. The argument for at an interior extremum (comparing left-hand and right-hand difference quotients) is itself a standard template in real analysis.      Example 4: An MVT Inequality   Use the Mean Value Theorem to prove that for all .     Strategy.   Apply the MVT to on the interval between and , then use the bound to control the result. This converts a question about how much can change into a question about how large its derivative can be.   Proof.   Fix . If , both sides are and the inequality holds trivially. Assume WLOG that . The function is continuous on and differentiable on , with . By the Mean Value Theorem, there exists such that Taking absolute values: since for all . This gives .    What to notice.   The MVT converts how much does change on ? into how large is ? —and the answer is at most 1. This is the prototype of the MVT inequality template : whenever . This template recurs throughout MAT 5610: in the proof of the Fundamental Theorem of Calculus, in error bounds for Taylor polynomials, and in the definition of Lipschitz continuity.    "
},
{
  "id": "ex-mod7-we-1",
  "level": "2",
  "url": "ws-mod7-worked-examples.html#ex-mod7-we-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "Example 1: Derivative from the Definition.",
  "body": " Example 1: Derivative from the Definition   Prove that is differentiable at every and that .     Strategy.   Compute the difference quotient , simplify the numerator algebraically, cancel the factor of , and evaluate the resulting limit as .   Scratch work.   Expand the numerator: Dividing by leaves , which tends to as .   Proof.   Let . For , compute: By the sum and product rules for limits (Module 6), By the definition of the derivative, . Since was arbitrary, is differentiable at every point and .    What to notice.   The entire work is in the algebra of the numerator: expanding and identifying the factor of that cancels the denominator. Once that cancellation is done, the limit is immediate from the limit laws. This is the standard template for every computation of a derivative from the definition: simplify, cancel, then take the limit .   "
},
{
  "id": "ex-mod7-we-2",
  "level": "2",
  "url": "ws-mod7-worked-examples.html#ex-mod7-we-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "Example 2: Differentiability Implies Continuity.",
  "body": " Example 2: Differentiability Implies Continuity   Prove that if is differentiable at , then is continuous at .     Strategy.   Write as a product involving the difference quotient, then apply the product rule for limits. The key algebraic insight is that we can insert the factor in the denominator as long as we also put it in the numerator.   Proof.   Suppose is differentiable at . For , we may write As , the first factor tends to by the hypothesis of differentiability, and the second factor tends to . By the product rule for limits, Hence , so is continuous at .    What to notice.   The key algebraic trick is writing as a product with the difference quotient. This is valid for , and the limit as only looks at anyway. The theorem is one-directional: continuity does not imply differentiability. The function is continuous at but not differentiable there (the left- and right-hand difference quotients both exist but are and respectively, so the limit does not exist).   "
},
{
  "id": "ex-mod7-we-3",
  "level": "2",
  "url": "ws-mod7-worked-examples.html#ex-mod7-we-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "Example 3: Proof of Rolle’s Theorem.",
  "body": " Example 3: Proof of Rolle's Theorem   Prove Rolle's Theorem: if is continuous on , differentiable on , and , then there exists with .     Strategy.   The Extreme Value Theorem (Module 6) guarantees that attains its maximum and minimum on . If is constant, we are immediately done. If not, at least one extremum must occur at an interior point , and at an interior extremum of a differentiable function, the derivative must be zero.   Step 1: Handle the trivial case.    (i) If is constant on . Then for every , and the conclusion holds immediately.   Step 2: Handle the nontrivial case.    (ii) If is not constant on . By the Extreme Value Theorem (EVT, Module 6), attains its maximum at some point in . Since is not constant and , the maximum cannot equal at both endpoints simultaneously; there must be some with . Hence the maximum of is attained at some point .   Step 3: Conclude at the interior maximum.   At the interior maximum : for small, , so ; taking the right-hand limit, . For small, , so ; taking the left-hand limit, . Since both inequalities hold and the derivative exists, . (A symmetric argument applies if attains its minimum at an interior point.)    What to notice.   The proof has two cases; the key one requires to be non-constant. The Extreme Value Theorem (from Module 6) is the tool that produces the interior extremum, and differentiability is what forces at that point. The argument for at an interior extremum (comparing left-hand and right-hand difference quotients) is itself a standard template in real analysis.   "
},
{
  "id": "ex-mod7-we-4",
  "level": "2",
  "url": "ws-mod7-worked-examples.html#ex-mod7-we-4",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "Example 4: An MVT Inequality.",
  "body": " Example 4: An MVT Inequality   Use the Mean Value Theorem to prove that for all .     Strategy.   Apply the MVT to on the interval between and , then use the bound to control the result. This converts a question about how much can change into a question about how large its derivative can be.   Proof.   Fix . If , both sides are and the inequality holds trivially. Assume WLOG that . The function is continuous on and differentiable on , with . By the Mean Value Theorem, there exists such that Taking absolute values: since for all . This gives .    What to notice.   The MVT converts how much does change on ? into how large is ? —and the answer is at most 1. This is the prototype of the MVT inequality template : whenever . This template recurs throughout MAT 5610: in the proof of the Fundamental Theorem of Calculus, in error bounds for Taylor polynomials, and in the definition of Lipschitz continuity.   "
},
{
  "id": "ws-mod7-practice-set",
  "level": "1",
  "url": "ws-mod7-practice-set.html",
  "type": "Section",
  "number": "4",
  "title": "Module 7: Practice Problem Set",
  "body": " Module 7: Practice Problem Set  Estimated time: 105 minutes   Problems are labeled (Foundational), (Standard), and (Challenge). Work in order within each level; later problems often build on earlier ones.  These problems are not submitted, but you should write out complete solutions. For any problem that asks you to prove something, apply the standards from the Worked Examples: state your strategy, write in complete sentences, invoke each theorem by name, and justify every step.     Foundational Problems    Derivative by Definition   Compute from the limit definition for each of the following. Show the full difference quotient algebra in each case.   at    at    at    at       (a) ; so . (b) ; so . (c) ; so . (d) ; so .     Applying Differentiation Rules   Differentiate each function using the differentiation rules (no need to use the limit definition). State which rule you use at each step.         for          (a) (sum and power rules). (b) Product rule: . (c) Quotient rule: . (d) Chain rule: .     MVT: Finding c   For each function and interval, verify that the hypotheses of the Mean Value Theorem hold, then find all values guaranteed by the conclusion.   on    on       (a) is a polynomial, continuous on , differentiable on . . Set : . (b) is continuous on , differentiable on . . Set : .      Rolle's Theorem   For on , verify all three hypotheses of Rolle's Theorem and find all values with .     is a polynomial, hence continuous on and differentiable on . Also and , so . By Rolle's Theorem, there exists with . Since , the roots are and , both in .      Standard Problems    Differentiability from the Definition   Prove from the limit definition that is differentiable on and compute .    Expand using the binomial theorem or direct multiplication. After subtracting and dividing by , each remaining term still has a factor of except the leading term.     MVT Application: An Exponential Inequality   Use the MVT to prove that for all .  Consider the cases , , and separately. In each nontrivial case, apply the MVT to on the appropriate interval and use the fact that for and for .    For : apply MVT on to get for some . Since , , so . For : apply MVT on to get for some . Since , , so , i.e., . Check separately: equality holds.     MVT and Monotonicity   Prove: if is differentiable on and for all , then is strictly increasing on . (Apply the MVT on any subinterval with .)    Let with . Apply the MVT on to get for some . Since and , conclude .     A Limit via L'Hôpital   Evaluate by applying L'Hôpital's rule twice. At each application, verify that the limit has the indeterminate form and that the numerator and denominator are differentiable. What is the answer?    First application: as , and ( form); both are differentiable. Differentiate top and bottom: . Second application: as , and ( form). Differentiate: . As , this tends to . The limit is .     Taylor Polynomial   Write the second-order Taylor polynomial for at . Compute , , and explicitly. Then write the Lagrange form of the remainder and identify what represents.     , so , so . Thus . The third derivative is . The Lagrange remainder is for some between and . Here is an unknown intermediate value; its existence is guaranteed by Taylor's theorem (an iterated application of the MVT).      Challenge Problems    A Proof of the Chain Rule   Prove the chain rule: if is differentiable at and is differentiable at , then .  Use the auxiliary function approach: define Show that is continuous at , write for all , substitute , and take the limit as .    With , the difference quotient for becomes As : by differentiability of ; by continuity of at (from differentiability); so by continuity of at . The product limit gives .     MVT Applied Twice   Let be twice differentiable on an open interval containing . Suppose and there exists with . Prove that there exists with .  (Apply Rolle's Theorem to on and on to obtain points and with . Then apply Rolle's Theorem to on .)    For the first application of Rolle's to on : check that is continuous on , differentiable on (both hold since is twice differentiable on the larger interval), and . The conclusion gives with . Similarly for . Then apply Rolle's to on : and is differentiable (since is twice differentiable). The conclusion gives with .    "
},
{
  "id": "ex-mod7-ps-F1",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-F1",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Derivative by Definition.",
  "body": " Derivative by Definition   Compute from the limit definition for each of the following. Show the full difference quotient algebra in each case.   at    at    at    at       (a) ; so . (b) ; so . (c) ; so . (d) ; so .   "
},
{
  "id": "ex-mod7-ps-F2",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-F2",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Applying Differentiation Rules.",
  "body": " Applying Differentiation Rules   Differentiate each function using the differentiation rules (no need to use the limit definition). State which rule you use at each step.         for          (a) (sum and power rules). (b) Product rule: . (c) Quotient rule: . (d) Chain rule: .   "
},
{
  "id": "ex-mod7-ps-F3",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-F3",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> MVT: Finding c.",
  "body": " MVT: Finding c   For each function and interval, verify that the hypotheses of the Mean Value Theorem hold, then find all values guaranteed by the conclusion.   on    on       (a) is a polynomial, continuous on , differentiable on . . Set : . (b) is continuous on , differentiable on . . Set : .    "
},
{
  "id": "ex-mod7-ps-F4",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-F4",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "<span class=\"process-math\">\\([\\mathbf{F}]\\)<\/span> Rolle’s Theorem.",
  "body": " Rolle's Theorem   For on , verify all three hypotheses of Rolle's Theorem and find all values with .     is a polynomial, hence continuous on and differentiable on . Also and , so . By Rolle's Theorem, there exists with . Since , the roots are and , both in .   "
},
{
  "id": "ex-mod7-ps-S1",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-S1",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Differentiability from the Definition.",
  "body": " Differentiability from the Definition   Prove from the limit definition that is differentiable on and compute .    Expand using the binomial theorem or direct multiplication. After subtracting and dividing by , each remaining term still has a factor of except the leading term.   "
},
{
  "id": "ex-mod7-ps-S2",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-S2",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> MVT Application: An Exponential Inequality.",
  "body": " MVT Application: An Exponential Inequality   Use the MVT to prove that for all .  Consider the cases , , and separately. In each nontrivial case, apply the MVT to on the appropriate interval and use the fact that for and for .    For : apply MVT on to get for some . Since , , so . For : apply MVT on to get for some . Since , , so , i.e., . Check separately: equality holds.   "
},
{
  "id": "ex-mod7-ps-S3",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-S3",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> MVT and Monotonicity.",
  "body": " MVT and Monotonicity   Prove: if is differentiable on and for all , then is strictly increasing on . (Apply the MVT on any subinterval with .)    Let with . Apply the MVT on to get for some . Since and , conclude .   "
},
{
  "id": "ex-mod7-ps-S4",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-S4",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> A Limit via L’Hôpital.",
  "body": " A Limit via L'Hôpital   Evaluate by applying L'Hôpital's rule twice. At each application, verify that the limit has the indeterminate form and that the numerator and denominator are differentiable. What is the answer?    First application: as , and ( form); both are differentiable. Differentiate top and bottom: . Second application: as , and ( form). Differentiate: . As , this tends to . The limit is .   "
},
{
  "id": "ex-mod7-ps-S5",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-S5",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "<span class=\"process-math\">\\([\\mathbf{S}]\\)<\/span> Taylor Polynomial.",
  "body": " Taylor Polynomial   Write the second-order Taylor polynomial for at . Compute , , and explicitly. Then write the Lagrange form of the remainder and identify what represents.     , so , so . Thus . The third derivative is . The Lagrange remainder is for some between and . Here is an unknown intermediate value; its existence is guaranteed by Taylor's theorem (an iterated application of the MVT).   "
},
{
  "id": "ex-mod7-ps-C1",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-C1",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> A Proof of the Chain Rule.",
  "body": " A Proof of the Chain Rule   Prove the chain rule: if is differentiable at and is differentiable at , then .  Use the auxiliary function approach: define Show that is continuous at , write for all , substitute , and take the limit as .    With , the difference quotient for becomes As : by differentiability of ; by continuity of at (from differentiability); so by continuity of at . The product limit gives .   "
},
{
  "id": "ex-mod7-ps-C2",
  "level": "2",
  "url": "ws-mod7-practice-set.html#ex-mod7-ps-C2",
  "type": "Checkpoint",
  "number": "4.11",
  "title": "<span class=\"process-math\">\\([\\mathbf{C}]\\)<\/span> MVT Applied Twice.",
  "body": " MVT Applied Twice   Let be twice differentiable on an open interval containing . Suppose and there exists with . Prove that there exists with .  (Apply Rolle's Theorem to on and on to obtain points and with . Then apply Rolle's Theorem to on .)    For the first application of Rolle's to on : check that is continuous on , differentiable on (both hold since is twice differentiable on the larger interval), and . The conclusion gives with . Similarly for . Then apply Rolle's to on : and is differentiable (since is twice differentiable). The conclusion gives with .   "
},
{
  "id": "ws-mod7-bridge-reading",
  "level": "1",
  "url": "ws-mod7-bridge-reading.html",
  "type": "Section",
  "number": "5",
  "title": "Module 7: Bridge Reading Guide",
  "body": " Module 7: Bridge Reading Guide  Bauldry §1.3 and §2.3 — Estimated time: 40 minutes   Every module ends with a bridge reading in Bauldry's Introduction to Real Analysis . For this module the reading covers two sections: §1.3 ( Differentiation ) in Bauldry's informal Chapter 1, and §2.3 ( Differentiation ) in his rigorous Chapter 2. The pair gives you the same mathematical content at two levels of formality—exactly the shift you are preparing for in MAT 5610.  Treat §1.3 as a compressed review : Bauldry lists the standard differentiation rules and applies them to examples, with only minimal proof. Treat §2.3 as a preview of MAT 5610 content: pay careful attention to how Bauldry uses the MVT as the engine for subsequent results. Those results—monotonicity, Taylor's theorem, connections to the integral—are the ones MAT 5610 will develop in detail.   For this module, read: Bauldry §1.3 (informal differentiation review, approximately pp. 9–14) and §2.3 (rigorous differentiation, approximately pp. 59–75).     Bauldry §1.3 — Differentiation (informal)  Section 1.3 presents differentiation as it would appear in a rigorous calculus course: rules stated clearly, applied to examples, but not proved from the limit definition. Read it quickly, noting how Bauldry organizes the material and which results he takes as known.    Bauldry's Organization of the Differentiation Rules   Bauldry §1.3 lists the standard differentiation rules. Which rule does he treat as most fundamental, and how does his organization compare to the approach in the Module 7 Study Guide (which begins with the limit definition and derives sum and product rules from it)?     Differentiability and Continuity in §1.3     Does Bauldry prove that differentiability implies continuity in §1.3, or does he state it without proof?  Compare the treatment in §1.3 to Worked Example 2 in this module. What is present in the worked example that is absent in §1.3?       Taylor's Theorem in §1.3   Bauldry §1.3 mentions Taylor's theorem. Quote his statement. How does it compare to the version in the Module 7 Study Guide (the Lagrange form of the remainder, stated in terms of an intermediate value )? Does Bauldry prove the theorem or merely state it?      Bauldry §2.3 — Differentiation (rigorous)  Section 2.3 is the version of differentiation theory you will see in MAT 5610. Read it carefully; it is more compressed than Zorn but contains more results. Focus especially on how the MVT appears as a hypothesis or tool in the theorems that follow it.    The Opening Theorem of §2.3   Bauldry §2.3 opens with a theorem. What is it, and how does it compare to Rolle's Theorem as stated in this module? Is there any hypothesis in Bauldry's version that differs from what you proved in Worked Example 3?     Bauldry's Statement of the MVT     Find Bauldry's statement of the Mean Value Theorem in §2.3. Write the theorem number and state it precisely.  Does Bauldry's proof strategy match the one in the Module 7 Study Guide (define the auxiliary function that subtracts the secant line from , verify , apply Rolle's)? Note one similarity and one difference.       A Theorem Beyond the MVT   Bauldry §2.3 contains several theorems beyond the MVT itself. Identify one such theorem that did not appear explicitly in this module's Study Guide or Worked Examples. State what the theorem says and describe the role the MVT plays in its proof.     Differentiation and Integration: The Connection Ahead     Does Bauldry §2.3 contain any results that connect differentiation to integration (a preview of the Fundamental Theorem of Calculus)? If so, describe what is stated.  Module 8 will develop the Riemann integral and the Fundamental Theorem of Calculus. Based on what you now know about the MVT, describe in two or three sentences how you expect the MVT to play a role in the proof of the FTC. (You do not need to know the proof; articulating the question is the point.)      "
},
{
  "id": "ex-mod7-br-1",
  "level": "2",
  "url": "ws-mod7-bridge-reading.html#ex-mod7-br-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "Bauldry’s Organization of the Differentiation Rules.",
  "body": " Bauldry's Organization of the Differentiation Rules   Bauldry §1.3 lists the standard differentiation rules. Which rule does he treat as most fundamental, and how does his organization compare to the approach in the Module 7 Study Guide (which begins with the limit definition and derives sum and product rules from it)?   "
},
{
  "id": "ex-mod7-br-2",
  "level": "2",
  "url": "ws-mod7-bridge-reading.html#ex-mod7-br-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "Differentiability and Continuity in §1.3.",
  "body": " Differentiability and Continuity in §1.3     Does Bauldry prove that differentiability implies continuity in §1.3, or does he state it without proof?  Compare the treatment in §1.3 to Worked Example 2 in this module. What is present in the worked example that is absent in §1.3?     "
},
{
  "id": "ex-mod7-br-3",
  "level": "2",
  "url": "ws-mod7-bridge-reading.html#ex-mod7-br-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "Taylor’s Theorem in §1.3.",
  "body": " Taylor's Theorem in §1.3   Bauldry §1.3 mentions Taylor's theorem. Quote his statement. How does it compare to the version in the Module 7 Study Guide (the Lagrange form of the remainder, stated in terms of an intermediate value )? Does Bauldry prove the theorem or merely state it?   "
},
{
  "id": "ex-mod7-br-4",
  "level": "2",
  "url": "ws-mod7-bridge-reading.html#ex-mod7-br-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "The Opening Theorem of §2.3.",
  "body": " The Opening Theorem of §2.3   Bauldry §2.3 opens with a theorem. What is it, and how does it compare to Rolle's Theorem as stated in this module? Is there any hypothesis in Bauldry's version that differs from what you proved in Worked Example 3?   "
},
{
  "id": "ex-mod7-br-5",
  "level": "2",
  "url": "ws-mod7-bridge-reading.html#ex-mod7-br-5",
  "type": "Checkpoint",
  "number": "5.5",
  "title": "Bauldry’s Statement of the MVT.",
  "body": " Bauldry's Statement of the MVT     Find Bauldry's statement of the Mean Value Theorem in §2.3. Write the theorem number and state it precisely.  Does Bauldry's proof strategy match the one in the Module 7 Study Guide (define the auxiliary function that subtracts the secant line from , verify , apply Rolle's)? Note one similarity and one difference.     "
},
{
  "id": "ex-mod7-br-6",
  "level": "2",
  "url": "ws-mod7-bridge-reading.html#ex-mod7-br-6",
  "type": "Checkpoint",
  "number": "5.6",
  "title": "A Theorem Beyond the MVT.",
  "body": " A Theorem Beyond the MVT   Bauldry §2.3 contains several theorems beyond the MVT itself. Identify one such theorem that did not appear explicitly in this module's Study Guide or Worked Examples. State what the theorem says and describe the role the MVT plays in its proof.   "
},
{
  "id": "ex-mod7-br-7",
  "level": "2",
  "url": "ws-mod7-bridge-reading.html#ex-mod7-br-7",
  "type": "Checkpoint",
  "number": "5.7",
  "title": "Differentiation and Integration: The Connection Ahead.",
  "body": " Differentiation and Integration: The Connection Ahead     Does Bauldry §2.3 contain any results that connect differentiation to integration (a preview of the Fundamental Theorem of Calculus)? If so, describe what is stated.  Module 8 will develop the Riemann integral and the Fundamental Theorem of Calculus. Based on what you now know about the MVT, describe in two or three sentences how you expect the MVT to play a role in the proof of the FTC. (You do not need to know the proof; articulating the question is the point.)     "
},
{
  "id": "ws-mod7-assessment",
  "level": "1",
  "url": "ws-mod7-assessment.html",
  "type": "Section",
  "number": "6",
  "title": "Module 7: Assessment",
  "body": " Module 7: Assessment  Submitted Proofs and Reflection — Estimated time: 40 minutes    This assessment has three parts. Parts 1 and 2 ask you to write complete mathematical proofs, submitted for feedback. Part 3 is a short reflection. Submit all three parts together as a single document (PDF or typed file) through the course management system.   Write-up standard. All proofs must be written in complete mathematical prose. Use the style modeled in the Worked Examples: announce your strategy, include scratch work (clearly labeled) before the formal proof, write in complete grammatical sentences, invoke each theorem by name, and justify every step. Work consisting only of symbolic manipulations without explanation will not receive full credit.   A note on Part 2. Part 2 is a single required proof problem; there are no options to choose between. All students complete the same Part 2 problem.   Academic integrity. Your proofs must be your own work. You may refer to your notes, the textbooks, and the worked examples from this module. You may not collaborate with other students on the written proofs or use AI writing tools to draft your arguments.   Part 1: Derivative from the Definition (Required) (Estimated time: 15 minutes)    Differentiating 1\/x from the Definition   Prove that is differentiable on and that .  Your proof must have the following structure:   Set up the difference quotient. Write and simplify the numerator by combining the two fractions over a common denominator, showing that .   Simplify the difference quotient. Cancel the factor of to obtain the simplified form .   Take the limit. As , the expression tends to . Justify using the limit laws: as , and the quotient and product rules for limits apply since .   State the conclusion. By the definition of the derivative, for all .         Part 2: An MVT Inequality (Required) (Estimated time: 20 minutes)    Using the MVT to Prove an Inequality   Prove that for all .  Your proof must have the following structure:   Set up the auxiliary function. Define for . Compute .   Compute the derivative. Show that for . State the values of for which , , and .   Apply monotonicity (an application of the MVT). For : , so by the MVT, is strictly increasing on ; hence , i.e., . For : , so is strictly decreasing on ; hence , i.e., . State and invoke the MVT by name in at least one of these cases.   State the conclusion. Combine the cases to conclude that for all , i.e., , with equality only at .         Part 3: Reflection (Estimated time: 5 minutes)  Write 3–5 sentences for each question. These are graded for thoughtfulness, not for mathematical correctness.    Differentiability and Continuity   In your own words, why does differentiability imply continuity? Write the key idea of the proof from memory—do not look at your notes. If you cannot reproduce it, explain which step you are stuck on and what tool you think is missing.     Bauldry's MVT   In the Bridge Reading you found Bauldry's statement of the MVT in §2.3. Describe in 3–5 sentences how Bauldry uses the MVT in the subsequent results of §2.3 that go beyond what this module explicitly covered. What theorems appear, and what role does the MVT play in each?     Looking Ahead to Module 8   The Fundamental Theorem of Calculus (Module 8) has a proof that uses the MVT (or a closely related result called the MVT for Integrals). Based on what you now know about the MVT, describe in 2–3 sentences how you expect this connection to work. What does the MVT control in such an argument, and what would the bound on correspond to?       Assessment Rubric (Informational)   The following rubric describes how submitted proofs will be evaluated.    Grading Criteria        Criterion  Full credit  Partial credit  Minimal credit    Logical correctness  All steps are valid; the argument proves exactly the stated claim  Mostly correct with one fixable gap  Significant logical errors or wrong claim proved    Limit definition mechanics  Difference quotient set up correctly, numerator simplified, factor of cancelled, limit taken with justification  Algebra correct but limit step not fully justified  Difference quotient not set up, or algebra contains errors    MVT application  Hypotheses of MVT (or monotonicity corollary) verified explicitly; conclusion correctly drawn and connected to the inequality  MVT cited but one hypothesis unchecked, or conclusion not connected clearly  MVT not cited by name, or applied in a setting where its hypotheses fail    Mathematical prose  Complete grammatical sentences; strategy stated up front; every step connected by logical connectives  Mostly prose with some missing connective sentences  Primarily symbolic with no connecting narrative    Reflection  Specific, thoughtful, and engages with the mathematical content of the module  General but relevant observations  Vague or too brief to be informative     "
},
{
  "id": "assess-mod7-1",
  "level": "2",
  "url": "ws-mod7-assessment.html#assess-mod7-1",
  "type": "Checkpoint",
  "number": "6.1",
  "title": "Differentiating 1\/x from the Definition.",
  "body": " Differentiating 1\/x from the Definition   Prove that is differentiable on and that .  Your proof must have the following structure:   Set up the difference quotient. Write and simplify the numerator by combining the two fractions over a common denominator, showing that .   Simplify the difference quotient. Cancel the factor of to obtain the simplified form .   Take the limit. As , the expression tends to . Justify using the limit laws: as , and the quotient and product rules for limits apply since .   State the conclusion. By the definition of the derivative, for all .     "
},
{
  "id": "assess-mod7-2",
  "level": "2",
  "url": "ws-mod7-assessment.html#assess-mod7-2",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "Using the MVT to Prove an Inequality.",
  "body": " Using the MVT to Prove an Inequality   Prove that for all .  Your proof must have the following structure:   Set up the auxiliary function. Define for . Compute .   Compute the derivative. Show that for . State the values of for which , , and .   Apply monotonicity (an application of the MVT). For : , so by the MVT, is strictly increasing on ; hence , i.e., . For : , so is strictly decreasing on ; hence , i.e., . State and invoke the MVT by name in at least one of these cases.   State the conclusion. Combine the cases to conclude that for all , i.e., , with equality only at .     "
},
{
  "id": "assess-mod7-r1",
  "level": "2",
  "url": "ws-mod7-assessment.html#assess-mod7-r1",
  "type": "Checkpoint",
  "number": "6.3",
  "title": "Differentiability and Continuity.",
  "body": " Differentiability and Continuity   In your own words, why does differentiability imply continuity? Write the key idea of the proof from memory—do not look at your notes. If you cannot reproduce it, explain which step you are stuck on and what tool you think is missing.   "
},
{
  "id": "assess-mod7-r2",
  "level": "2",
  "url": "ws-mod7-assessment.html#assess-mod7-r2",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "Bauldry’s MVT.",
  "body": " Bauldry's MVT   In the Bridge Reading you found Bauldry's statement of the MVT in §2.3. Describe in 3–5 sentences how Bauldry uses the MVT in the subsequent results of §2.3 that go beyond what this module explicitly covered. What theorems appear, and what role does the MVT play in each?   "
},
{
  "id": "assess-mod7-r3",
  "level": "2",
  "url": "ws-mod7-assessment.html#assess-mod7-r3",
  "type": "Checkpoint",
  "number": "6.5",
  "title": "Looking Ahead to Module 8.",
  "body": " Looking Ahead to Module 8   The Fundamental Theorem of Calculus (Module 8) has a proof that uses the MVT (or a closely related result called the MVT for Integrals). Based on what you now know about the MVT, describe in 2–3 sentences how you expect this connection to work. What does the MVT control in such an argument, and what would the bound on correspond to?   "
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
