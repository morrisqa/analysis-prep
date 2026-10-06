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
