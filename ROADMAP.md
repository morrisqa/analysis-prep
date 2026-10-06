# Roadmap

Maintained from the auditor's reports. Last updated 2026-10-06, after the
pre-publication audit.

## Done

- Nine modules migrated into one book, modules as chapters (#1 to #4, #10 to #21).
- Math review and fixes for every module; structure pass; cross-references
  (#5, #6); Module 1 alignment (#8); house style and graded-hint audit (#7).
- Guessed textbook references removed; citation checklist (#9, partly).
- Front matter (#40); video outlines restored to `scripts/` (#41).
- CI builds, validates (zero messages), and deploys to GitHub Pages (#45).

## Now

1. Make the repository public and enable GitHub Pages (workflow build);
   verify the site and `book.pdf` (#26).

## Next: needs Quinn

1. Review the decision log, starting with `decisions/README.md`, then
   `policies.md`, `publishing.md`, and `citations.md`. Reverse anything you
   disagree with through a normal pull request.
2. Verify the textbook citations with the books (#9): the "Known
   inconsistencies" first, then the checklist in `decisions/citations.md`;
   then remove "approximately" from page ranges.
3. Choose a license (rule 6). Then add `LICENSE`, a notice in the front
   matter, and the README line.
4. Decide on the short Bauldry quotations in the Module 1 bridge reading
   (keep or paraphrase).
5. Give full bibliographic entries (author, title, edition, publisher) for
   Zorn, Hirst, and Bauldry, and decide whether to add a references section.

## Later

- PDF layout: overfull assessment-rubric tables and the Module 4 road map.
- CI: consider the `pretextbook/pretext-full` image; bump the Pages actions
  when Node 24 releases exist.
- Content (Quinn's call): more answers or solutions for [S] and [C] practice
  problems for self-study readers; links to the videos if they become public.
