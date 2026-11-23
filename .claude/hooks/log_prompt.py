#!/usr/bin/env python3
"""Hook UserPromptSubmit : ajoute chaque prompt à docs/prompts/AAAA-MM-JJ-<auteur>.md.

Un fichier par jour et par auteur (évite les conflits Git entre membres).
Les secrets courants (clés OpenRouter, Tailscale, GitHub, .env) sont masqués.
Ne bloque jamais : en cas d'erreur, on sort silencieusement avec le code 0.
"""
import json
import os
import re
import subprocess
import sys
from datetime import datetime

SECRETS = [
    (re.compile(r"sk-or-[A-Za-z0-9_\-]{10,}"), "[CLÉ-OPENROUTER-MASQUÉE]"),
    (re.compile(r"tskey-[A-Za-z0-9_\-]{8,}"), "[CLÉ-TAILSCALE-MASQUÉE]"),
    (re.compile(r"\b(?:ghp|gho|ghs|ghu|github_pat)_[A-Za-z0-9_]{10,}"), "[TOKEN-GITHUB-MASQUÉ]"),
    (re.compile(r"(?i)(bearer\s+)[A-Za-z0-9._\-]{16,}"), r"\1[MASQUÉ]"),
    (re.compile(r"(?i)((?:api[_-]?key|auth[_-]?key|secret|token|password)\s*[=:]\s*)\S+"), r"\1[MASQUÉ]"),
    (re.compile(r"--auth-key=\S+"), "--auth-key=[MASQUÉ]"),
]


def redact(text):
    for pattern, repl in SECRETS:
        text = pattern.sub(repl, text)
    return text


def author(root):
    try:
        name = subprocess.run(
            ["git", "config", "user.name"], cwd=root, capture_output=True, text=True, timeout=5
        ).stdout.strip()
    except Exception:
        name = ""
    name = name or os.environ.get("USERNAME") or os.environ.get("USER") or "inconnu"
    return re.sub(r"[^A-Za-z0-9_-]+", "-", name).strip("-").lower() or "inconnu"


def main():
    sys.stdin.reconfigure(encoding="utf-8")
    data = json.load(sys.stdin)
    prompt = (data.get("prompt") or "").strip()
    if not prompt:
        return
    root = os.environ.get("CLAUDE_PROJECT_DIR") or data.get("cwd") or os.getcwd()
    now = datetime.now()
    who = author(root)
    folder = os.path.join(root, "docs", "prompts")
    os.makedirs(folder, exist_ok=True)
    path = os.path.join(folder, f"{now:%Y-%m-%d}-{who}.md")
    new = not os.path.exists(path)
    session = (data.get("session_id") or "")[:8]
    with open(path, "a", encoding="utf-8", newline="\n") as f:
        if new:
            f.write(f"# Prompts du {now:%Y-%m-%d} · {who}\n\n")
        f.write(f"## {now:%H:%M:%S} · session {session}\n\n~~~~text\n{redact(prompt)}\n~~~~\n\n")


if __name__ == "__main__":
    try:
        main()
    except Exception:
        pass
    sys.exit(0)
