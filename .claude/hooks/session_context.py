#!/usr/bin/env python3
"""Hook SessionStart : donne à Claude l'état vivant du projet à chaque ouverture de session.

Le texte imprimé sur stdout est ajouté au contexte de Claude.
(README et sujet sont déjà importés par CLAUDE.md ; ici : le dynamique.)
"""
import glob
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd()


def read(rel):
    try:
        with open(os.path.join(ROOT, rel), encoding="utf-8") as f:
            return f.read()
    except Exception:
        return ""


def git(*args):
    try:
        return subprocess.run(
            ["git", *args], cwd=ROOT, capture_output=True, text=True,
            encoding="utf-8", errors="replace", timeout=10
        ).stdout.strip()
    except Exception:
        return ""


def head(text, n):
    return "\n".join(text.splitlines()[:n])


def main():
    out = ["# Contexte du projet (chargé automatiquement)", ""]
    out.append("Projet : SAÉ 5.D01 « Une chaîne, trois regards » (voir README.md et docs/).")
    out.append("")

    journal = read("docs/journal.md")
    if "---" in journal:
        journal = journal.split("---", 1)[1]
    out += ["## Journal de bord (entrées les plus récentes)", head(journal.strip(), 40), ""]

    decisions = [l for l in read("docs/decisions.md").splitlines() if l.startswith("### D-") and "D-00X" not in l]
    if decisions:
        out += ["## Décisions prises (détail : docs/decisions.md)"] + decisions[:15] + [""]

    docs = sorted(glob.glob(os.path.join(ROOT, "docs", "0*.md")))
    out.append("## Documents du projet")
    for p in docs:
        rel = os.path.relpath(p, ROOT).replace("\\", "/")
        size = len(read(rel).splitlines())
        out.append(f"- {rel} ({size} lignes)")
    out.append("")

    prompts = sorted(glob.glob(os.path.join(ROOT, "docs", "prompts", "*.md")))
    if prompts:
        last = os.path.relpath(prompts[-1], ROOT).replace("\\", "/")
        tail = "\n".join(read(last).splitlines()[-25:])
        out += [f"## Derniers prompts ({last})", tail, ""]

    branch = git("rev-parse", "--abbrev-ref", "HEAD")
    if branch:
        out += [
            "## Git",
            f"Branche : {branch}",
            "Derniers commits :",
            git("log", "--oneline", "-5"),
            "Modifications non commitées :",
            git("status", "--short") or "(aucune)",
            "",
        ]

    out += [
        "## Consignes",
        "- Lis les docs concernés avant de répondre ; ne devine pas l'état d'avancement.",
        "- Avant de finir un travail : ajoute une entrée en haut de docs/journal.md (hier/aujourd'hui/blocages) et, si un choix technique est fait, un bloc dans docs/decisions.md.",
        "- Les prompts sont enregistrés automatiquement dans docs/prompts/ ; ne les modifie pas.",
        "- Jamais de clé ou de secret dans Git.",
    ]
    print("\n".join(out))


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"(contexte automatique indisponible : {e})")
    sys.exit(0)
