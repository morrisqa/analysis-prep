# Front matter (#40)

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `source/frontmatter.ptx` | New title page (author, department, university in `<bibinfo>`) and preface "About This Text" (`preface-about`): audience, the nine modules in order, the six components and their order, difficulty labels, hidden hints and answers, the textbooks, videos and submission through the course, links to the site and the PDF. | A reader arriving at the public site had no introduction; the road maps name videos that are not in the text. | No front matter. |
| Preface, textbooks | Zorn named with the title the source uses (*Understanding Real Analysis*); Hirst and Bauldry by surname only. | The source gives no title for Hirst, and uses "Introduction to Real Analysis" both as Bauldry's title (Modules 2, 4 to 9) and as Bauldry's Chapter 2 title (Module 1). One of those is wrong; see `citations.md`. | Add full bibliographic entries (Quinn: a references section would help students find the books). |
| Preface | "apart from a few short quotations, does not reproduce them". | The Module 1 bridge reading quotes Bauldry briefly. | |
| Preface | No license statement. | Rule 6; see `publishing.md`. | |

## Public-readiness (#46, from the pre-publication audit)

| Where | Decision | Why | Alternative |
|---|---|---|---|
| `par-mod1-pacing` to `par-mod9-pacing` | The run-in `<alert>A note on pacing.</alert>` removed; the block's title "A Note on Pacing" is the label. CLAUDE.md updated to describe the block. Ids unchanged. | The label rendered twice ("A Note on Pacing. A note on pacing."). The schema requires the title. | Retitle the block and keep the alert. |
| Preface | Says MAT 5610 is at Appalachian State; page and item numbers refer to the editions used in the course, and to find material by name if a reference does not match; how to report an error. | The book is public before the citations are checked (#9). | Wait for #9 before publishing. |
| `README.md` (new) | Description, links, textbooks, "no license yet; all rights reserved", build instructions, repository map, one sentence on AI-assisted editing. | Public visitors would otherwise land on CLAUDE.md. | |
| `ROADMAP.md` (new) | What is done, and what needs Quinn. | Listed in CLAUDE.md; was missing. | |
| `.gitignore` | `incoming/` ignored. | About 4,700 leftover local build files in Quinn's working copy. | Delete the folder (Quinn's files; left alone). |
