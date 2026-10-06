# CLAUDE.md

This repository holds a PreTeXt project by Quinn Morris (Department of Mathematical
Sciences, Appalachian State University). The goal is a finished, freely available
book or course text, built from source and published to GitHub Pages.

Quinn is the author and final editor. Agents draft, review, and maintain; Quinn
decides what the text argues, approves outlines, and merges every pull request.

## Repository layout

- `project.ptx`: the project manifest (targets `web` and `print`).
- `source/`: all PreTeXt source. `main.ptx` is the root; content files are pulled
  in with `xi:include`.
- `publication/publication.ptx`: publication settings.
- `assets/`: images and other static files referenced by the source.
- `incoming/`: the original per-module sources (`Module N/`), kept only until
  migration into `source/` is complete (#3, #4), then removed. Read from it;
  never edit it.
- `output/`: build output. Never commit it; never edit it by hand.
- `.claude/agents/`: the agent team (auditor, author, math-reviewer, copy-editor,
  publisher).
- `.github/workflows/pretext.yml`: builds every pull request; builds and deploys
  `main` to GitHub Pages.
- `ROADMAP.md`: the current plan, maintained from the auditor's reports.

## Commands

```bash
pip install -r requirements.txt   # install the pinned PreTeXt CLI
pretext build web                 # HTML build; this is the check that matters
pretext build print               # PDF build (needs a TeX installation)
pretext view web                  # local preview server
```

A change is not finished until `pretext build web` completes without errors and
without new warnings. If a build fails, read the full error, fix the cause, and
rebuild. Do not suppress warnings to make a build pass.

## Working rules

1. Work on a branch named for its issue (`issue-12-limits-chapter`). Never commit
   to `main`. Never run `pretext deploy`; publishing happens through the workflow
   when Quinn merges.
2. One issue, one pull request. Keep pull requests small enough to review in a
   single sitting (roughly one section).
3. Never change or remove an existing `xml:id`. Published URLs and cross-references
   depend on them. If an id is wrong, flag it in the pull request instead.
   One exception, approved by Quinn: while a module moves from `incoming/` into
   `source/` (#3, #4), its ids are renamed once by the id mapping under "This
   project", by script and nowhere else. Once a module is in `source/`, this
   rule applies to it without exception.
4. Never state a mathematical result without either a proof in the text or a
   citation. If you are unsure whether a claim is true, say so with a comment:
   `<!-- TODO(quinn): verify ... -->`. Do not guess.
5. Do not rewrite text Quinn wrote unless the issue asks for it. Copy edits are
   fine; changes of argument, emphasis, or voice are not.
6. Do not add a license, change the license, or add third-party material
   (figures, problems, quoted text) without an explicit instruction in the issue.

## House style (prose)

- Formal but direct. State the point, then support it.
- No em-dashes. Use a colon, a comma, parentheses, or a new sentence.
- No motivational framing ("Let's dive in", "exciting", "powerful tool",
  "journey") and no filler vocabulary ("delve", "crucial", "robust",
  "leverage", "seamless", "it's worth noting").
- Address the reader as "you" in exposition; use "we" in proofs and derivations.
- Define a term at first use with `<term>`, and use it consistently afterward.

## PreTeXt conventions

- Inline math `<m>`; single display `<md>` with no `<mrow>`; multi-line display
  `<md><mrow>...</mrow></md>`. `<me>` and `<men>` are deprecated (PreTeXt 2.55.0):
  do not use them. Number a display only if it is referenced (`<md number="yes"
  xml:id="...">`, or `<mrow xml:id="...">`).
- Use the macros in `<docinfo><macros>`; add new macros there, never inline
  `\newcommand`. Use `\varepsilon`, not `\epsilon`.
- Cross-reference with `<xref ref="id"/>`; never type "Section 3.2" by hand.
- `xml:id` scheme: lowercase, hyphenated, prefixed by type
  (`ch-` chapter, `sec-` section, `thm-`, `def-`, `ex-` exercise, `exm-` example,
  `fig-`, `eq-`, `par-` paragraphs, `obj-` objectives), then a short topic slug.
- Every image needs a `<shortdescription>`; complex figures also need a
  `<description>`. HTML is the primary, accessible format; never put content
  only in the PDF.
- One division per file; the parent file pulls children in with `xi:include`.
- Validate against the PreTeXt schema. If the build reports an element in the
  wrong place, fix the structure; do not work around it.

## This project

Rewrite this section for each repository. Current contents: the pilot,
Intensive Analysis Prep course materials (Modules 1 to 9).

- Audience: incoming graduate students, some refreshing real analysis and some
  meeting analysis-style proof for the first time. All students do all work.
  Express the difference with one neutral pacing note per module
  (`<alert>A note on pacing.</alert>`), never as labeled tracks.
- Each module has six student-facing components, each a `<section>`:
  orientation, study guide, worked examples, practice set, bridge reading,
  assessment. No nested sections or `<exercises>` wrappers inside them.
- Exercises: `<title>`, `<statement>`, and optional `<hint>`, `<answer>`,
  `<solution>`. No `workspace` attribute. No `<page>` elements.
- Practice problems carry difficulty labels `<m>[\mathbf{F}]</m>`,
  `<m>[\mathbf{S}]</m>`, `<m>[\mathbf{C}]</m>`. No stars or other importance markers.
- Bridge readings make the connection to the MAT 5610 text explicit.
- Video scripts are plain `.txt` files in `scripts/` and are not part of the build.
- Structure (decided by Quinn, 2026-10-05): one book, each module a chapter.
  The modules were originally nine separate articles. The book gives one site,
  one table of contents, and working cross-references between modules. Each
  chapter is one file in `source/` that pulls in one file per section.
- Id mapping (approved by Quinn, 2026-10-05; applied once, at migration). The
  old pages were never published, so these renames break no URLs:

  | Old (`incoming/`) | New (`source/`) |
  |---|---|
  | `module-N` (article) | `ch-modN` (chapter) |
  | `ws-modN-<component>` | `sec-modN-<component>` |
  | `ex-`, `par-`, `obj-` with uppercase (`ex-mod1-ps-F1`, `par-mod1-ps-F`) | lowercase (`ex-mod1-ps-f1`, `par-mod1-ps-f`) |
  | `assess-modN-<x>` (exercises) | `ex-modN-as-<x>` |
  | `assess-modN-rubric` (paragraphs) | `par-modN-as-rubric` |
  | other `par-...`, `obj-...` | unchanged |

  The mapping is implemented by `tools/migrate_module.py`.
- Legacy workarounds from the old `pretextbook` 0.8.3 builds (the `<executables>`
  block, the `extpfeil.sty` stub, post-build CSS injection to hide section
  numbers) should not be carried forward until the publisher confirms the
  current CLI still needs them. Prefer publication-file settings to
  post-processing.

## How the team works

- Main session: reads the issue, delegates, collects reports, opens the pull
  request, and posts review findings as PR comments with `gh`.
- `auditor`: assesses the state of the project; proposes issues. Read-only on source.
- `author`: drafts and revises content in `source/` only.
- `math-reviewer`: checks mathematics. Read-only; reports findings.
- `copy-editor`: house style, consistency, accessibility. Edits wording only.
- `publisher`: build, manifest, publication file, workflow, releases.

Run the author and the reviewers as separate subagents so the review starts from
a fresh context. A reviewer never fixes what it reports; the author or Quinn does.
