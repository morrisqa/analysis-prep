# Intensive Analysis Prep

Quinn Morris, Department of Mathematical Sciences, Appalachian State University

Course materials for incoming graduate students preparing for MAT 5610 (real
analysis): nine modules on proof, the real numbers, sets and cardinality,
sequences, series, continuity, differentiation, integration, and sequences and
series of functions. Some students are refreshing real analysis and some are
meeting analysis-style proof for the first time; all students do all the work.

- **Read online:** <https://morrisqa.github.io/analysis-prep/>
- **PDF:** <https://morrisqa.github.io/analysis-prep/book.pdf>
- **Report an error:** [open an issue](https://github.com/morrisqa/analysis-prep/issues)

Each module has six parts: orientation, study guide, worked examples, practice
set, bridge reading, and assessment. The study guides follow Zorn's
*Understanding Real Analysis* (and Hirst in Modules 1 and 3); the bridge
readings connect each module to Bauldry, the text for MAT 5610. The text cites
these books and does not reproduce them. Textbook page and item numbers are
still being checked against the books (see
[decisions/citations.md](decisions/citations.md)).

## License

No license has been chosen yet, so all rights are reserved by the author.

## Building

The text is written in [PreTeXt](https://pretextbook.org).

```bash
pip install -r requirements.txt   # the pinned PreTeXt CLI
pretext build web                 # HTML in output/web
pretext build print               # PDF (needs a TeX installation)
pretext view web                  # local preview
```

Every pull request is built and validated by
`.github/workflows/pretext.yml`; merges to `main` are deployed to GitHub Pages.

## Repository

| Path | Contents |
|---|---|
| `source/` | The PreTeXt source: `main.ptx`, front matter, one file per module and per section |
| `publication/` | Publication settings |
| `scripts/` | Outlines for the course videos (not part of the build) |
| `decisions/` | Log of editorial decisions made during migration and review, for the author's review |
| `ROADMAP.md` | What remains to be done |
| `CLAUDE.md`, `.claude/` | Instructions for the AI agents that assist with editing |
| `tools/` | The one-time script that migrated the original module files |

The materials were migrated into one book, reviewed, and copy-edited with AI
assistance (Claude Code) under the author's direction. Every change after the
initial import went through a pull request, and the decisions that needed the
author's judgment are recorded in `decisions/`.
