# Cross-references, numbering and framing (#5, #6)

| Decision | Where | Why | Alternative |
|---|---|---|---|
| Every hand-typed reference to another module or to a specific exercise is an `<xref>` (109 new links). All module links use the plain form `<xref ref="ch-modN"/>` (46 custom links changed; identical output). A module naming itself stays plain text. | All modules | `policies.md`; hand-typed references go stale. | Leave plain text. |
| Kept as plain text: whole-Part references inside an assessment ("Part 1"), exercise titles, road-map cells, "FTC Part 1/2", relative references ("the previous problem"), "Option A/B", outside-book numbers, video references. | All modules | Headings without ids, titles, or not internal cross-references. | |
| Module 3 study guide "Part A/B/D" are custom-text links to their titled blocks. | Module 3 | They have ids. | |
| #6: no prose relies on per-article numbering or says "Checkpoint" as a label (one ordinary use of "checkpoints" in the Module 3 study guide stays). | All modules | Checked. | |
| Assessment notes on Part 2 (Modules 1 to 4) describe what each option asks and say "Choose the option that will stretch you", instead of choosing by background. | `sec-mod1..4-assessment.ptx` | CLAUDE.md: one neutral pacing note per module, never tracks; these were second, background-sorting notes. | Keep the background guidance. |
| `par-mod7-instructor-note`: "Students who found Module 6 challenging…" → "If you found Module 6 challenging…". | Module 7 | Addresses the reader; readiness, not background. | |
| Orientation pacing notes keep their background conditionals. | All modules | CLAUDE.md asks for one neutral pacing note expressing the difference; these are those notes. | |

## Module 2 decisions (items from the Module 2 review)

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `ex-mod2-as-1c`, `ex-mod2-as-r1` (graded) | as-1c asks why, for this set, completeness was not needed; as-r1 asks where in the module completeness is genuinely needed. | S = (−3, 2) has explicit bounds; the old wording credited completeness wrongly. | |
| `ex-mod2-ps-c2` and graded `ex-mod2-as-2b` | Both kept (practice before assessment); the practice hint is approach-level. | Intended rehearsal. **The graded as-2b hint gives nearly the whole argument: cut in the graded-hint audit (#7).** | Change one problem. |
| `ex-mod2-ps-c1` | Keep [C]. | Consistent with Module 4. | [S]. |
