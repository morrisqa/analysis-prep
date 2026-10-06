#!/usr/bin/env bash
# PostToolUse hook: after any edit to a .ptx file, confirm it is well-formed XML.
# Exit 2 sends the error back to Claude so it fixes the file immediately.
input="$(cat)"
file="$(printf '%s' "$input" | python3 -c 'import sys,json; print(json.load(sys.stdin).get("tool_input",{}).get("file_path",""))')"
case "$file" in
  *.ptx|*.xml) ;;
  *) exit 0 ;;
esac
[ -f "$file" ] || exit 0
python3 - "$file" <<'PY' || exit 2
import sys, xml.dom.minidom
try:
    xml.dom.minidom.parse(sys.argv[1])
except Exception as e:
    sys.stderr.write(f"Malformed XML in {sys.argv[1]}: {e}\n")
    sys.exit(1)
PY
exit 0
