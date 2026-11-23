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

### D-017 · Planning de la semaine du 07/12 : palier 1 en deux temps, estimations du nœud relevées
- **Date :** 2026-11-23
- **Contexte :** le palier 1 du lundi annonçait des cas HTTP (1, 2, 9, 17, 22) alors que les routes et le stockage étaient prévus le mardi ; le palier 2 du mercredi demandait l'écoute sur l'IP Tailscale, prévue le jeudi ; le rattrapage (`SYNCING`, fourches, remise en file) était estimé à 3 h.
- **Décision :** lundi, les cas de calcul et de validité par appel de fonction ; mardi, les cas par HTTP. L'écoute sur `HOST_NODE` passe dans N5, N9 ne garde que les nouvelles tentatives. N7 passe à 5 h (2 h le jeudi matin). Le worker est coupé en A2a (IA simulée, S50) et A2b (appel réel, lun. 11/01). Dylan : 33 h en S50 (2 h de marge).
- **Pourquoi :** un plan sans marge dont les dépendances se contredisent échoue dès le mardi.
- **Écarté :** garder les estimations d'origine (aucune marge) ; laisser A2 en entier en S50 (36 h pour Dylan avec le nouveau N7, soit 1 h de plus que la semaine).

### D-016 · Valeurs locales calculées par le serveur de l'application, pas par le worker
- **Date :** 2026-11-23
- **Décision :** fonction pure du texte et de l'`id` (charte §2), calculée à la volée, sans écriture en base ; seules les valeurs de l'IA sont stockées dans `ai_results`. `values_source` est un champ calculé (dossier §4).
- **Pourquoi :** si le worker plante, plus aucune forme n'aurait de « prévision », ce qui contredit « l'œuvre n'attend jamais l'IA ». Le calcul est déterministe : il n'a pas besoin d'être stocké.
- **Écarté :** valeurs locales écrites par le worker (point de défaillance en plus, lignes inutiles en base).

### D-015 · Échelle de la spirale mesurée : `c = 0,028`, profondeur 300, rayons de 0,6 % à 1,5 %
- **Date :** 2026-11-23
- **Contexte :** avec `c = 0,023` et des rayons jusqu'à 2 %, le voisin le plus proche est à 2,3 % pour un diamètre de forme de 4 % : les formes se chevauchaient, contrairement à ce que disait la bible (« espacement d'environ 4 % » est l'espacement moyen).
- **Décision :** `c = 0,028` (voisin le plus proche à 2,8 %, médiane 4,7 %), vieillissement de `k = 100` à `k = 300`, fondu au-delà, rayons de 0,6 % à 1,5 % du petit côté, mélange additif pour les contacts (bible §6.1 et §6.2).
- **Écarté :** garder 400 messages visibles (formes trop serrées ou trop petites) ; empêcher tout contact (formes minuscules).

### D-014 · Couleurs interpolées en OKLab, pas en OKLCH
- **Date :** 2026-11-23
- **Contexte :** en OKLCH, l'interpolation entre le gris-lavande (teinte 299°) et l'ocre (77°) passe par le rose (`#e69fab` au milieu), presque la couleur de l'alerte (`#F28B9B`).
- **Décision :** interpolation linéaire en OKLab, 11 vecteurs de couleur dans la bible §3.1 (le milieu lavande-ocre devient `#ceaf97`), courbe en S `v²(3 − 2v)`.
- **Pourquoi :** pas de rose parasite, et pas de sens de rotation de teinte à définir : le même résultat dans tous les langages.
- **Écarté :** OKLCH ; la teinte HSL linéaire (le vert du milieu).

### D-013 · Spirale : l'angle suit le rang absolu, le rayon suit l'âge
- **Date :** 2026-11-23
- **Contexte :** en v0.2 (D-008), l'angle suivait l'âge (`k × 137,5°`) : à chaque nouveau message, tous les messages se décalaient de 137,5°, soit en moyenne 57 % de la largeur de l'écran (86 % au plus, calcul sur 400 messages) : un tourbillon permanent, contraire à « calme, lent ».
- **Décision :** angle `n × 137,5°` avec `n` le rang absolu depuis le premier message, rayon `0,028 × √k` avec `k = N − 1 − n` l'âge. Un message ne change jamais d'angle ; il glisse vers le bord (0,16 % de la largeur en moyenne par message).
- **Pourquoi :** c'est la croissance d'un tournesol (les nouveaux éléments naissent au centre et s'écartent) et la seule règle où « les anciens s'éloignent » est vrai sans agitation.
- **Écarté :** l'angle selon l'âge (tourbillon) ; le rayon selon le rang absolu (les anciens au centre, v0.1).

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

### D-009 · DA : une seule famille typographique, Recursive (validée par Nicolas, bible v0.3)
- **Date :** 2026-11-23
- **Décision :** Recursive en trois réglages (Casual pour la poésie, Linear pour le texte, Mono pour les données), bible §4.
- **Pourquoi :** Fraunces, Inter et Plex Mono sont très répandues et faisaient « modèle ». Une famille, trois réglages : « une chaîne, trois regards ». Un seul fichier variable.
- **Écarté :** garder les trois familles ; une écriture manuscrite.

### D-008 · DA : le plus récent au centre de la spirale (validée par Nicolas, puis corrigée)
> **Corrigée en partie** le 23/11/2026 par D-013 (l'angle suit le rang absolu, plus l'âge : « tourne d'un cran » devient « glisse d'un cran ») et D-015 (profondeur 300 au lieu de 400).

- **Date :** 2026-11-23
- **Décision :** le rang est compté depuis le message le plus récent (`k = 0` au centre). À chaque message, la spirale tourne d'un cran ; au-delà de `k = 400`, fondu dans le fond (bible §6.1). L'image devient celle d'une dépression vue par satellite.
- **Pourquoi :** la v0.1 mettait les anciens au centre, ce qui contredisait l'esquisse et l'intention, et la spirale n'avait pas de taille maximale.
- **Écarté :** un rayon recalculé selon le nombre de messages (toutes les positions changent d'échelle) ; une grille.

### D-007 · DA : un canal visuel par information (validée par Nicolas, bible v0.3)
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

### D-003 · Œuvre : météo collective, *Front commun* (nom validé par Nicolas, bible v0.3)
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
