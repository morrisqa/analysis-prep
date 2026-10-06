#!/usr/bin/env python3
"""Migrate one module from incoming/Module N/ into a chapter of the book.

Usage:
    python3 tools/migrate_module.py N OUTDIR [--incoming DIR] [--force]

Reads   incoming/Module N/modN-main.ptx and the six section files it includes.
Writes  OUTDIR/ch-modN.ptx                (the <article> as <chapter xml:id="ch-modN">)
        OUTDIR/sec-modN-<component>.ptx   (one file per section, named for its new id)

The approved id mapping (CLAUDE.md, "This project") is applied to every
xml:id and to every reference attribute.  Everything else is copied byte for
byte: the script works on the text, not on a parsed and re-serialized tree,
so prose, math, comments, and whitespace are untouched.  After writing, it
re-reads every file and checks that the only differences from the source are
the id values (and, in the chapter file, the article -> chapter wrapper).

The video-outline file (modN-video-outlines.ptx) is not part of the module's
article and is not migrated.

Standard library only.
"""

from __future__ import annotations

import argparse
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

COMPONENTS = (
    "orientation",
    "study-guide",
    "worked-examples",
    "practice-set",
    "bridge-reading",
    "assessment",
)

# Attributes whose values are xml:id values (or lists of them) in PreTeXt.
REF_ATTRS = (
    "ref",
    "first",
    "last",
    "provisional",
)
ID_ATTR = "xml:id"
ATTR_RE = re.compile(
    r'(?P<pre>\s(?P<name>xml:id|' + "|".join(REF_ATTRS) + r')\s*=\s*)'
    r'(?P<q>["\'])(?P<val>.*?)(?P=q)'
)
TAG_RE = re.compile(r"<(?![!?/])(?P<elem>[A-Za-z_][\w:.-]*)(?P<body>[^<>]*)>")
COMMENT_RE = re.compile(r"<!--.*?-->", re.S)
NEW_ID_RE = re.compile(r"^[a-z][a-z0-9]*(-[a-z0-9]+)*$")


class MigrationError(Exception):
    pass


def map_id(old: str, n: int, elem: str | None) -> tuple[str, str]:
    """Return (new_id, rule) for an old id under the approved mapping."""
    m = re.fullmatch(r"module-(\d+)", old)
    if m:
        if int(m.group(1)) != n:
            raise MigrationError(f"{old}: module id for a different module")
        return f"ch-mod{n}", "module-N -> ch-modN"
    m = re.fullmatch(r"ws-mod(\d+)-(.+)", old)
    if m:
        return f"sec-mod{m.group(1)}-{m.group(2)}", "ws- -> sec-"
    m = re.fullmatch(r"assess-mod(\d+)-rubric", old)
    if m:
        if elem not in (None, "paragraphs"):
            raise MigrationError(f"{old}: rubric id on <{elem}>, expected <paragraphs>")
        return f"par-mod{m.group(1)}-as-rubric", "assess- rubric -> par-"
    m = re.fullmatch(r"assess-mod(\d+)-(.+)", old)
    if m:
        if elem not in (None, "exercise"):
            raise MigrationError(f"{old}: assess- id on <{elem}>, expected <exercise>")
        return f"ex-mod{m.group(1)}-as-{m.group(2).lower()}", "assess- -> ex-...-as-"
    if old.startswith(("ex-", "par-", "obj-")):
        new = old.lower()
        return new, ("lowercased" if new != old else "unchanged")
    raise MigrationError(f"{old}: no rule in the approved mapping covers this id")


def strip_comments(text: str) -> str:
    # Replace comments with same-length blanks so offsets stay valid.
    return COMMENT_RE.sub(lambda m: " " * len(m.group(0)), text)


def collect_ids(text: str) -> list[tuple[str, str, int]]:
    """(id, element name, line) for every xml:id outside comments."""
    out = []
    clean = strip_comments(text)
    for t in TAG_RE.finditer(clean):
        for a in ATTR_RE.finditer(t.group("body")):
            if a.group("name") == ID_ATTR:
                line = clean.count("\n", 0, t.start()) + 1
                out.append((a.group("val"), t.group("elem"), line))
    return out


def rewrite_attrs(text: str, mapping: dict[str, str], n: int, notes: list[str],
                  fname: str) -> str:
    """Rewrite xml:id and reference attribute values inside tags (not comments)."""
    comments = [(m.start(), m.end()) for m in COMMENT_RE.finditer(text)]

    def in_comment(pos: int) -> bool:
        return any(s <= pos < e for s, e in comments)

    def fix_tag(t: re.Match) -> str:
        if in_comment(t.start()):
            return t.group(0)

        def fix_attr(a: re.Match) -> str:
            name, val = a.group("name"), a.group("val")
            if name == ID_ATTR:
                new = mapping[val]
            else:
                toks = re.split(r"(\s+|,\s*)", val)
                new_toks = []
                for tok in toks:
                    if not tok or re.fullmatch(r"\s+|,\s*", tok):
                        new_toks.append(tok)
                    elif tok in mapping:
                        new_toks.append(mapping[tok])
                    else:
                        try:
                            mapped, _ = map_id(tok, n, None)
                        except MigrationError:
                            mapped = tok
                            notes.append(f"{fname}: {name}=\"{tok}\" is not an id in this "
                                         "module and fits no rule; left unchanged")
                        else:
                            notes.append(f"{fname}: {name}=\"{tok}\" points outside this "
                                         f"module; mapped by rule to {mapped}")
                        new_toks.append(mapped)
                new = "".join(new_toks)
            return a.group("pre") + a.group("q") + new + a.group("q")

        return "<" + t.group("elem") + ATTR_RE.sub(fix_attr, t.group("body")) + ">"

    return TAG_RE.sub(fix_tag, text)


def mask_ids(text: str) -> str:
    """Replace every id/ref attribute value with a placeholder (for verification)."""
    return ATTR_RE.sub(lambda a: a.group("pre") + a.group("q") + "@" + a.group("q"), text)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("module", type=int, help="module number, 1-9")
    ap.add_argument("outdir", type=Path, help="directory for the chapter and section files")
    ap.add_argument("--incoming", type=Path,
                    default=Path(__file__).resolve().parent.parent / "incoming",
                    help="directory holding 'Module N' folders (default: ./incoming)")
    ap.add_argument("--force", action="store_true", help="overwrite existing output files")
    args = ap.parse_args()
    n = args.module
    src = args.incoming / f"Module {n}"
    out = args.outdir

    # ---- read the main file -------------------------------------------------
    main_path = src / f"mod{n}-main.ptx"
    main_text = main_path.read_text(encoding="utf-8")
    art = re.search(r"^([ \t]*)<article\b.*?</article>[ \t]*$", main_text, re.S | re.M)
    if not art:
        raise MigrationError(f"{main_path}: no <article> element found")
    indent = art.group(1)
    article = art.group(0)
    hrefs = re.findall(r'<xi:include\s+href="([^"]+)"\s*/>', article)
    expected = [f"mod{n}-{c}.ptx" for c in COMPONENTS]
    if hrefs != expected:
        raise MigrationError(f"{main_path}: includes {hrefs}, expected {expected}")
    macros = re.search(r"<macros>(.*?)</macros>", main_text, re.S)

    # ---- read sections, collect ids ----------------------------------------
    texts = {"main": article}
    for h in hrefs:
        texts[h] = (src / h).read_text(encoding="utf-8")

    occurrences = []  # (old, elem, file, line)
    for fname, text in texts.items():
        for old, elem, line in collect_ids(text):
            occurrences.append((old, elem, fname if fname != "main" else main_path.name, line))

    mapping: dict[str, str] = {}
    rules: dict[str, str] = {}
    errors: list[str] = []
    seen_old: dict[str, str] = {}
    for old, elem, fname, line in occurrences:
        where = f"{fname}:{line}"
        if old in seen_old:
            errors.append(f"duplicate old id {old} at {where} and {seen_old[old]}")
            continue
        seen_old[old] = where
        try:
            new, rule = map_id(old, n, elem)
        except MigrationError as e:
            errors.append(f"{where}: {e}")
            continue
        if not NEW_ID_RE.match(new):
            errors.append(f"{where}: new id {new!r} is not lowercase-hyphenated")
        mapping[old] = new
        rules[old] = rule

    # Collisions: new ids must be unique, and must not clash with ids already
    # present in other .ptx files of the output directory.
    inverse: dict[str, list[str]] = {}
    for old, new in mapping.items():
        inverse.setdefault(new, []).append(old)
    for new, olds in inverse.items():
        if len(olds) > 1:
            errors.append(f"collision: {', '.join(olds)} all map to {new}")

    sec_names = {h: f"{mapping[collect_ids(texts[h])[0][0]]}.ptx" for h in hrefs
                 if collect_ids(texts[h]) and collect_ids(texts[h])[0][0] in mapping}
    out_names = {f"ch-mod{n}.ptx", *sec_names.values()}
    if out.exists():
        for other in out.glob("*.ptx"):
            if other.name in out_names:
                continue
            for oid, _, line in collect_ids(other.read_text(encoding="utf-8")):
                if oid in inverse:
                    errors.append(f"collision: {inverse[oid][0]} -> {oid} already "
                                  f"defined in {other.name}:{line}")

    # Each section file must be exactly one <section> whose id is ws-modN-<component>.
    for h, comp in zip(hrefs, COMPONENTS):
        first = collect_ids(texts[h])[:1]
        if not first or first[0][1] != "section" or first[0][0] != f"ws-mod{n}-{comp}":
            errors.append(f"{h}: expected root <section xml:id=\"ws-mod{n}-{comp}\">")

    if errors:
        print("Migration stopped; nothing written.", file=sys.stderr)
        for e in errors:
            print("  " + e, file=sys.stderr)
        return 1

    # ---- rewrite --------------------------------------------------------------
    notes: list[str] = []
    outputs: dict[str, str] = {}

    # Chapter file: the article element, renamed, with its own namespace
    # declaration and includes pointing at the renamed section files.
    lines = article.split("\n")
    lines = [ln[len(indent):] if ln.startswith(indent) else ln for ln in lines]
    chapter = "\n".join(lines)
    chapter = re.sub(r"^<article\b", '<chapter xmlns:xi="http://www.w3.org/2001/XInclude"',
                     chapter, count=1)
    chapter = re.sub(r"</article>\s*$", "</chapter>", chapter)
    for h in hrefs:
        chapter = chapter.replace(f'href="{h}"', f'href="{sec_names[h]}"')
    chapter = rewrite_attrs(chapter, mapping, n, notes, f"ch-mod{n}.ptx")
    outputs[f"ch-mod{n}.ptx"] = '<?xml version="1.0" encoding="UTF-8"?>\n' + chapter + "\n"

    for h in hrefs:
        outputs[sec_names[h]] = rewrite_attrs(texts[h], mapping, n, notes, h)

    # ---- verify before writing -----------------------------------------------
    problems = []
    for h in hrefs:
        if mask_ids(texts[h]) != mask_ids(outputs[sec_names[h]]):
            problems.append(f"{sec_names[h]}: differs from {h} in more than id values")
    new_ids = []
    for name, text in outputs.items():
        try:
            ET.fromstring(text.encode("utf-8"))
        except ET.ParseError as e:
            problems.append(f"{name}: not well-formed XML: {e}")
        new_ids += [i for i, _, _ in collect_ids(text)]
    if sorted(new_ids) != sorted(mapping.values()):
        problems.append("ids in output do not match the mapped ids one for one")
    # Old ids that changed should no longer appear in any attribute.
    for name, text in outputs.items():
        for t in TAG_RE.finditer(strip_comments(text)):
            for a in ATTR_RE.finditer(t.group("body")):
                for tok in re.split(r"[\s,]+", a.group("val")):
                    if tok in mapping and mapping[tok] != tok:
                        problems.append(f"{name}: old id {tok} still in {a.group('name')}")
    # Mentions of renamed ids in comments or text are reported, not changed.
    for name, text in outputs.items():
        for old, new in mapping.items():
            if old != new and re.search(r"(?<![\w-])" + re.escape(old) + r"(?![\w-])", text):
                notes.append(f"{name}: old id {old} appears in a comment or text; left as is")
    if problems:
        print("Verification failed; nothing written.", file=sys.stderr)
        for p in problems:
            print("  " + p, file=sys.stderr)
        return 1

    # ---- write ----------------------------------------------------------------
    out.mkdir(parents=True, exist_ok=True)
    existing = [name for name in outputs if (out / name).exists()]
    if existing and not args.force:
        print(f"Refusing to overwrite {', '.join(existing)} in {out} (use --force).",
              file=sys.stderr)
        return 1
    for name, text in outputs.items():
        (out / name).write_text(text, encoding="utf-8")

    # ---- report -----------------------------------------------------------
    w = max(len(o) for o in mapping)
    print(f"Module {n}: {len(mapping)} ids, "
          f"{sum(1 for o in mapping if mapping[o] != o)} renamed, "
          f"{sum(1 for o in mapping if mapping[o] == o)} unchanged, no collisions.\n")
    print(f"{'old id'.ljust(w)}  {'new id'.ljust(w + 4)}  rule")
    for old, elem, fname, line in occurrences:
        print(f"{old.ljust(w)}  {mapping[old].ljust(w + 4)}  {rules[old]}")
    print("\nFiles written to", out.resolve())
    for name in outputs:
        print("  " + name)
    if macros:
        print("\nMacros in the module's docinfo (must be present in source/main.ptx):")
        for ln in macros.group(1).strip().splitlines():
            print("  " + ln.strip())
    video = src / f"mod{n}-video-outlines.ptx"
    if video.exists():
        notes.append(f"{video.name} is not included by the article; not migrated")
    if notes:
        print("\nNotes:")
        for note in dict.fromkeys(notes):
            print("  " + note)
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except MigrationError as e:
        print(f"Migration stopped: {e}", file=sys.stderr)
        sys.exit(1)
