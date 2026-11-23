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

### D-012 · Les anciens vecteurs et exemples sont archivés, pas supprimés
- **Date :** 2026-11-23
- **Contexte :** `tests/vectors/` (v0.5, avec `author`) et `docs/spec-commune/exemples/` (v0.2, autre bloc zéro) ne correspondent plus à la spec v1.0, mais pouvaient être pris pour la référence.
- **Décision :** déplacés dans `docs/spec-commune/archives/` avec un README « périmé » ; `tests/vectors/` ne contient plus que nos cas 20 à 26 pour la v1.0.
- **Pourquoi :** personne ne peut les utiliser par erreur, et l'historique reste visible pour la conduite de projet.
- **Écarté :** les supprimer (perte de l'historique) ; les régénérer tous (les cas 3 à 19 reviennent aux deux autres binômes, spec §10.2).

### D-011 · Un refus de l'IA sur un lot ne masque pas les messages du lot
- **Date :** 2026-11-23
- **Contexte :** avec des lots de 10 messages, un refus du modèle ne dit pas quel message l'a gêné.
- **Décision :** valeurs locales pour tout le lot, sans masquage (le filtre local s'applique quand même) ; au retraitement, le lot est coupé en deux. Un message seul refusé est masqué.
- **Pourquoi :** masquer les dix cacherait neuf messages innocents.
- **Écarté :** retraiter les dix messages un par un (10 requêtes sur 50 par jour).

### D-010 · Valeurs locales : calcul exact et lexique de 50 entrées
- **Date :** 2026-11-23
- **Décision :** formule fixe et lexique `l1` (charte §2).
- **Pourquoi :** l'œuvre doit se reconstruire à l'identique sans IA, et le quota fait que beaucoup de messages n'auront que ces valeurs.
- **Écarté :** une bibliothèque d'analyse de sentiment (lourde, souvent en anglais) ; un grand lexique (long à tester).

### D-009 · DA : une seule famille typographique, Recursive (à valider par Nicolas)
- **Date :** 2026-11-23
- **Décision :** Recursive en trois réglages (Casual pour la poésie, Linear pour le texte, Mono pour les données), bible §4.
- **Pourquoi :** Fraunces, Inter et Plex Mono sont très répandues et faisaient « modèle ». Une famille, trois réglages : « une chaîne, trois regards ». Un seul fichier variable.
- **Écarté :** garder les trois familles ; une écriture manuscrite.

### D-008 · DA : le plus récent au centre de la spirale (à valider par Nicolas)
- **Date :** 2026-11-23
- **Décision :** le rang est compté depuis le message le plus récent (`k = 0` au centre). À chaque message, la spirale tourne d'un cran ; au-delà de `k = 400`, fondu dans le fond (bible §6.1). L'image devient celle d'une dépression vue par satellite.
- **Pourquoi :** la v0.1 mettait les anciens au centre, ce qui contredisait l'esquisse et l'intention, et la spirale n'avait pas de taille maximale.
- **Écarté :** un rayon recalculé selon le nombre de messages (toutes les positions changent d'échelle) ; une grille.

### D-007 · DA : un canal visuel par information (à valider par Nicolas)
- **Date :** 2026-11-23
- **Décision :** le contour ne dit plus que la prévision (pointillés) ; le nœud d'origine passe aux satellites (0, 1 ou 2 points). Les couleurs de l'œuvre ne sont jamais utilisées dans l'interface, qui a ses gris et une seule couleur d'alerte.
- **Pourquoi :** en v0.1, le contour portait deux informations (un message d'un autre nœud avec des valeurs locales n'avait pas de dessin défini), et l'ocre voulait dire à la fois « tiède » et « attention ».
- **Écarté :** une texture par nœud (illisible à 1 % de l'écran) ; une couleur par nœud (la couleur est la `chaleur`).

### D-006 · IA par lots de 10, avec un compteur journalier
- **Date :** 2026-11-23
- **Contexte :** offre Free d'OpenRouter, 50 requêtes par jour, et chaque nœud traite tous les messages.
- **Décision :** lots de 10 ; envoi à 10 messages ou après 45 s ; 30 s au moins entre deux requêtes ; un seul nouvel essai ; compteur en base (dossier §5).
- **Écarté :** un appel par message (quota épuisé en moins d'une heure) ; un crédit payant (le sujet impose les modèles gratuits).

### D-005 · Trois processus (nœud, worker IA, serveur de l'application) et SQLite en WAL
- **Date :** 2026-11-23
- **Décision :** voir dossier §2 et §4.
- **Pourquoi :** une panne ou une lenteur de l'IA ne doit jamais vider un créneau de 20 s ; SQLite tient en un fichier et accepte plusieurs processus en mode WAL.
- **Écarté :** un seul processus (un plantage vide un créneau) ; MySQL ou PostgreSQL (un serveur à installer pour rien) ; des fichiers JSON (écritures non sûres).

### D-004 · Node.js 24 partout, Express 5, `better-sqlite3`, SSE, Canvas 2D
- **Date :** 2026-11-23
- **Décision :** JavaScript pour le nœud, le worker, le serveur et l'œuvre (dossier §7).
- **Pourquoi :** un seul langage et un seul outillage ; SHA-256 et Ed25519 sont dans `node:crypto` ; le code de calcul des `id` est partagé entre le nœud et l'application. SSE suffit pour un flux à sens unique ; Canvas 2D sans dépendance.
- **Écarté :** PHP et Python (aucun gain pour nous) ; WebSocket (flux à double sens inutile) ; p5.js et WebGL ; React et Vue (un seul écran).

### D-003 · Œuvre : météo collective, *Front commun* (nom à valider par Nicolas)
- **Date :** 2026-11-23
- **Décision :** chaque message est un temps qui passe ; l'œuvre est une dépression vue par satellite (bible §1).
- **Pourquoi :** la consigne « Quel temps fait-il en vous ? » et l'œuvre parlent la même langue ; « front » dit à la fois la météo et le collectif.
- **Écarté :** un jardin (trop lent), une ville (trop chargée).

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
