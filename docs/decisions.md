# Décisions

Un choix = un bloc court : contexte, décision, pourquoi, ce qui est écarté. Plus récent en haut.

## Modèle
```
### D-00X · Titre
- **Date :** AAAA-MM-JJ
- **Contexte :** …
- **Décision :** …
- **Pourquoi :** …
- **Écarté :** … (et pourquoi)
```

---

### D-002 · La spec commune vit dans un Google Doc partagé
> **Remplacée** le 23/11/2026 par la décision 14 de la spec v1.0 : la référence est un dépôt GitHub privé commun aux six.

- **Date :** 2026-11-23
- **Contexte :** la spec est écrite à six (3 binômes) et rendue jeudi 26/11 à 12h30 ; il faut un seul document de référence.
- **Décision :** un Google Doc unique, édité à six. Lien : _à renseigner dans docs/02-spec-commune.md_.
- **Pourquoi :** écriture simultanée à six, très rapide, pas de friction Git pour les non-techniques de l'équipe.
- **Écarté :** dépôt GitHub partagé à part (neutre et bien versionné, mais plus long à mettre en place et à écrire à six en direct) ; dossier dans le dépôt d'un binôme (un binôme « propriétaire »).
- **Limite et parade :** historique/versions peu exploitables → on **nomme les versions** dans Google Docs (Fichier › Historique des versions › Nommer la version actuelle : `v0.1`, `v1.0`…) et on **dépose un export** (`.md` ou PDF) dans `docs/spec-commune/` du dépôt à chaque version. La version, la date et les six noms figurent en tête du document.

### D-001 · Documents en Markdown versionnés sur GitHub
- **Date :** 2026-11-23
- **Contexte :** cinq rendus en S48, dont des PDF ; il faut un suivi clair et historisé.
- **Décision :** on rédige en Markdown dans `docs/` puis on exporte en PDF au moment du rendu.
- **Pourquoi :** versionné, relisible à deux, diff lisible.
- **Écarté :** Google Docs seul (historique moins exploitable, pas relié au code).
