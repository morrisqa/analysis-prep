#!/usr/bin/env bash
# PreToolUse hook for the author and copy-editor agents:
# allow edits only to .ptx files under source/.
input="$(cat)"
file="$(printf '%s' "$input" | python3 -c 'import sys,json; print(json.load(sys.stdin).get("tool_input",{}).get("file_path",""))')"
root="${CLAUDE_PROJECT_DIR:-$(pwd)}"
rel="${file#"$root"/}"
case "$rel" in
  source/*.ptx) exit 0 ;;
  *) echo "Blocked: this agent may edit only .ptx files under source/ (attempted: $rel)." >&2
     exit 2 ;;
esac
