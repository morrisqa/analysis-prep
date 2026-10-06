# Book-wide structure (#26)

Each setting was verified with a scratch build of PreTeXt 2.55.0 before it was adopted.

## Publication settings and labels

| Decision | Where | Why | Alternative |
|---|---|---|---|
| Chapters are labelled **"Module"** (`<rename element="chapter">Module</rename>`). Headings read "Module 1 Mathematical Language and Proof Strategies"; plain links to a chapter read "Module 4". | `source/main.ptx` docinfo | The course is organized in modules; avoids "Chapter 1" beside "Module 1". | Keep "Chapter". |
| Inline exercises are labelled **"Exercise"** instead of PreTeXt's default "Checkpoint" (`<rename element="exercise-inline">`). | `source/main.ptx` docinfo | "Checkpoint" was confusing for practice problems and study-guide questions. | "Problem". |
| **Exercises have their own counter** (`<exercises distinct="yes"/>`), so theorems, definitions and examples share a separate sequence (Theorem 4.1, Example 4.2, …). | `publication/publication.ptx` | Clean numbering once results and examples become numbered blocks. | One shared counter. |
| In HTML, **proofs, examples and exercise statements display open**; hints, answers and solutions stay collapsible (`<knowl proof="no" example="no" exercise-inline="no"/>`). | `publication/publication.ptx` | Students were having to click every exercise to read its statement, and the study guide asks them to read proofs; solutions should still wait for an attempt. | PreTeXt's defaults (all collapsed). |
| Sections stay unnumbered (`<divisions level="1"/>`). | `publication/publication.ptx` | Decided at #3; the six components are named, not numbered. | Number sections. |
| No `xml:lang` on the renames. | `source/main.ptx` | The document is single-language; the fallback applies. | |

## Titles and section openings

| Decision | Where | Why | Alternative |
|---|---|---|---|
| Chapter and section titles drop the "Module N:" prefix; each orientation section is titled "Orientation" (it repeated the chapter title). Module 4's chapter title is "Sequences: Convergence and Key Theorems" (no em-dash). | All `ch-modN.ptx`, `sec-modN-*.ptx` | With chapters labelled "Module", the prefix doubled ("Module 1 Module 1: …"). | Keep the prefixes and the "Chapter" label. |
| The former subtitle line of each section has one form: "Reading: … Estimated time: N minutes." (or just the time), in full sentences, with "Chapter", "Section" and "pages" spelled out. Descriptive phrases that the opening paragraph repeats ("Annotated Proof Walkthroughs", "Submitted Proofs and Reflection") are dropped. The bare "Orientation" line is removed. | Every section | Consistent, readable openings (copy-edit recommendation from the migration). | Keep the migrated subtitles as they were. |
| Time estimates: Module 7 study guide 55 → 75 minutes and Module 8 study guide 55 → 65 minutes (both gained proofs); Module 8 Part 1 of the assessment 15 → 20 minutes. Road-map totals recomputed: Modules 1, 2, 3, 5 "about 5 hours"; Modules 4, 6, 7, 8, 9 "about 5.5 hours". | Orientation road maps, section openings | The math fixes added material; the stated totals no longer matched the component times. | Leave Quinn's figures. |
| "this document" → "this section" where a section was meant. | Module 1 worked examples, all road maps | Leftover from the nine separate articles. | |

## Worked examples and numbered results

| Decision | Where | Why | Alternative |
|---|---|---|---|
| The 31 worked examples in Modules 2 to 9 are `<example>` elements (same ids), titled without the "Example K:" prefix, rendering "Example N.M" with collapsible hints and solutions. Links to them are plain xrefs. | `sec-mod2..9-worked-examples.ptx` | They are examples, not exercises; they had been labelled "Checkpoint". | Keep them as exercises. |
| Module 1's worked examples (headings plus "Try It" exercises, and reflection questions) are not converted here. | `sec-mod1-worked-examples.ptx` | Different structure; handled with the Module 1 alignment (#8). | |
| The results added during the math fixes are numbered: Theorems 4.1–4.2 (uniqueness of limits; limits preserve non-strict inequalities), 5.1–5.2 (Root Test, two forms), Lemma 5.3 (Bernoulli), Theorem 6.1 (sequential characterization of continuity), Definition 7.1 (Taylor polynomial), Theorems 7.2–7.4 (Taylor, Cauchy MVT, L'Hôpital). Each sits inside its original titled block, whose id is unchanged; the new elements have `thm-`/`def-` ids (the lemma uses `thm-`, since the scheme has no `lem-`). Sentences citing them use "Theorem N.M". | Modules 4 to 7 study guides | Results should look like results and be citable by number. | Leave them as emphasized paragraphs. |
| The Module 2 supremum-definition paragraph and the Module 1 negation-rules paragraph stay prose. | Modules 1 and 2 | Neither is a single result; a formal block would need rewording. | `<definition>`. |

## After review (PR #36 follow-ups)

| Decision | Where | Why | Alternative |
|---|---|---|---|
| Hand-typed references to worked examples ("Example 3", "Worked Example 2") in Modules 2 to 9 replaced by 58 xrefs. | Section intros, pacing notes, practice sets, bridge readings, assessments | With one shared counter, the hand-typed numbers pointed at the wrong block. | Leave until #5 (would have left misleading text on `main`). |
| Numbered items of the outside books name their book ("Zorn's Theorem 2.5", "Bauldry's Definition 1.18"); 26 changed. | Modules 2 to 9 | They read as the book's own Theorem 4.1-style numbers. The numbers themselves are unverified (see each module's log). | |
| Theorem titles that exactly repeat their block's title are removed (Theorems 6.1, 7.3). | Modules 6, 7 | "Sequential Characterization of Continuity" twice in a row. | Rename the blocks. |
| The road-map row "Module Assessment" is "Assessment" (matches the section title). | All nine orientations | Consistency. | |
