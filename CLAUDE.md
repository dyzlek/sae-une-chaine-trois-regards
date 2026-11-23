# SAÉ 5.D01 · Une chaîne, trois regards

Projet d'étude (BUT MMI 3, développement web) : blockchain de messages à trois nœuds, traitement IA via OpenRouter, génération d'une œuvre d'art par binôme.

@README.md
@docs/00-sujet.md

## Mémoire automatique du projet
- À chaque ouverture de session, un hook (`.claude/hooks/session_context.py`) injecte : journal récent, décisions, liste des docs, derniers prompts, état git.
- À chaque prompt, un hook (`.claude/hooks/log_prompt.py`) l'enregistre dans `docs/prompts/AAAA-MM-JJ-<auteur>.md` (secrets masqués). Ne pas modifier ces fichiers à la main.
- Prérequis : Python 3 (`python`) installé, projet ouvert depuis la racine du dépôt.

## Règles
- Semaine S48 : **pas de code**, uniquement des documents (spec, dossier, charte, bible DA, backlog).
- Ne jamais committer de secret (clé Tailscale, clé OpenRouter, `.env`).
- OpenRouter : modèles gratuits uniquement ; si `openrouter/free`, enregistrer le modèle qui a réellement répondu.
- Chaque choix technique est justifié (pourquoi celui-ci, ce qui a été écarté) dans `docs/decisions.md`.
- Chaque terme est défini une fois (spec commune) et utilisé partout pareil.
- Fin de chaque séance de travail : ajouter une entrée en haut de `docs/journal.md`.

## Langue
Documents en français.
