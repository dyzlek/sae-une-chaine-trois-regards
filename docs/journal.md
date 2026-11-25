# Journal de bord

Plus récent en haut. Un daily par matin : **hier / aujourd'hui / blocages**.

## Modèle d'entrée
```
### AAAA-MM-JJ · Sx
**Hier :** …
**Aujourd'hui :** …
**Blocages :** …
**Décisions :** … (détail dans decisions.md)
```

---

### 2026-11-25 · S48 · Pivot artistique : *Terre commune*, carte 3D procédurale (Dylan)
**Aujourd'hui :**
- Constat partagé : la piste météo en spirale 2D (*Front commun*) manque d'impact visuel et fait trop « déjà vu ». Après plusieurs essais de prototypes jetables (hors dépôt : survol d'archipel, diorama 3D, puis heightmap 3D procédurale), **pivot assumé vers *Terre commune*** (`D-023`) : un océan 3D vierge qui se sculpte message par message en un continent unique (joie → terres vertes, forêts, voiliers, soleil ; calme → criques et phares ; tristesse → lagons, ruines, pluie, brume ; colère → volcans, lave, orage).
- Passage du rendu de Canvas 2D à **Three.js (WebGL)** en low-poly (`D-024`), tout le reste de l'architecture (nœud, SQLite, worker, OpenRouter, SSE) restant intact.
- Tous les documents texte mis à jour et synchronisés : [04-charte-editoriale.md](04-charte-editoriale.md) v1.0 (`emotion`, lexique `l2`, prompt `p2`), [test-charte.md](test-charte.md), [05-bible-da.md](05-bible-da.md) v1.0 (retour à Recursive `D-009`), [03-dossier-binome.md](03-dossier-binome.md) v0.9, [06-backlog.md](06-backlog.md) v1.4, [decisions.md](decisions.md), [a-faire.md](a-faire.md).

**À faire ensuite :** produire les trois éléments Figma sur cette nouvelle direction (moodboard C4, symbole C5, trois esquisses C6), faire passer le test de la charte (C7), relire à deux et exporter les PDF vendredi.
**Décisions :** D-023, D-024 (`decisions.md`).

### 2026-11-25 · S48 · Ciel à l'encre (Dylan, avec Claude Code)
**Aujourd'hui :**
- Rendu « une forme par message » jugé pas assez artistique. Prototypes jetables (hors dépôt) : particules en cyclone, lavis, isobares, cyclone 3D, ciel peint inspiré de *La Nuit étoilée*.
- **Bible v0.5 (proposée, D-022) : un ciel tracé à l'encre sous la spirale.** Un tourbillon par message récent (force = `energie`, rayon = `densite`, couleur = `chaleur`) ; quatre écritures du ciel selon le temps (ensoleillé, nuageux, pluie, brouillard) ; fronts entre voisins de chaleur opposée ; à l'arrivée, le message s'écrit dans l'œil puis se dissout en traits.
- On garde le mouvement de Van Gogh, pas sa matière, sa palette ni sa composition (bible §1 et §2). Aucune couleur nouvelle, aucune règle existante changée.
- Mis à jour : bible §1, §2, §4.3, §6, §6.2, §6.3 (nouvelle), §7, §8.2 ; dossier §6 (point 10) ; backlog v1.3 (O11, O12 en « en plus ») ; `a-faire.md`.

**Blocages :** Nicolas doit valider D-022 (et toujours D-020). Esquisses à refaire avec le ciel.

### 2026-11-24 · S48 · Symboles retirés (Dylan, avec Claude Code)
**Aujourd'hui :** aucune piste de symbole ne convient (v6 à v9 trouvées laides). Toutes les images de symbole sont retirées du dépôt (`symbole-planche.png`, `symbole-spirale.png`) ; bible §5 marquée « à refaire » ; D-021 écartée ; O10 retirée du backlog. Les essais restent dans Figma.

**Blocages :** le symbole (C5) est à refaire avant le rendu du 27/11.

### 2026-11-24 · S48 · Nouveau symbole : l'œil du cyclone (écarté depuis) (Dylan, avec Claude Code)
**Aujourd'hui :**
- Lecture du cours d'art génératif (Moodle, `art-generatif.pdf`). La page « le logo algorithmique » montre *Visit Nordkyn*, un logo qui suit la météo.
- Le nuage-bulle v6 ne plaît pas. Deux essais écartés dans la journée : le nuage-bulle déformé selon les valeurs (v7) et une silhouette de nuage remplie de points (v8).
- **Bible §5 réécrite (proposée, D-021, remplace D-018) : v9 « l'œil du cyclone ».**
  - 34 points (Fibonacci) rangés par l'angle d'or, comme la spirale de l'œuvre ; le plus récent au centre, entouré d'un anneau (l'œil).
  - Logo fixe : du chaud au centre au froid au bord.
  - Logo vivant dans l'en-tête : les 34 derniers messages (couleur = `chaleur`, taille = `densite`, creux = prévision, brume = masqué).
  - Le nombre de points suit la taille : 34, 21, 13, 8.
- Planche dans Figma ([symbole v9](https://www.figma.com/design/o9vW6Uadmu6n6YKKC3tu2I/?node-id=34-2)) ; export retiré depuis.

**Blocages :** aucun ; Nicolas doit valider D-020 (polices) et D-021 (symbole), et trancher la variante « éléments ».

### 2026-11-24 · S48 · Typographie en quatre temps (Dylan, avec Claude Code)
**Aujourd'hui :**
- **Bible §4 v0.4 (proposée, D-020) :** une police par temps. ☀ Ensoleillé : Fraunces ; ☁ Nuageux : Quicksand ; ☂ Pluie : Special Elite ; ≋ Brouillard : IBM Plex Mono.
- Le temps se calcule à partir des valeurs (règle en six étapes). Les six exemples de la charte couvrent les quatre temps.
- La police change à trois moments : pendant l'écriture (temps prévu), quand l'IA répond (prévu → observé) et quand le ciel change (consigne et bulletin). L'interface, les erreurs et les données gardent une police fixe.
- Mises à jour : composants de la bible §8.2, backlog O8 et O8b, S49 de Nicolas, `a-faire.md`.

**Blocages :** D-009 (Recursive) avait été validée par Nicolas : il doit valider ou refuser ce changement.

- **Planche d'essai** dans Figma ([essai typographique](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=19-2), export `docs/typo-planche.png`). **Moodboard v5** : la v4 avec les nouvelles polices ([planche v5](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=20-79)), export dans `docs/moodboard-planche.png`.

**À faire :** Nicolas, valider D-020 à partir de la planche d'essai ; si c'est non, revenir à la v4 du moodboard.

### 2026-11-23 · S48 · Symbole, esquisses, confidentialité, export PDF (Dylan, avec Claude Code)
**Aujourd'hui :**
- **Symbole (C5) :** six pistes dans Figma ; la v6 (un nuage-bulle avec les trois points « quelqu'un écrit… ») est proposée dans la bible §5. Le choix final revient à Nicolas.
- **Esquisses (C6) :** les trois états (vide, 10 messages, 300 messages) dessinés dans la page « Esquisses » de Figma, avec les règles de la bible §6 ; les positions sont dans `docs/esquisses/positions-10.csv` et `positions-300.csv`. Le résultat ne nous plaît pas encore : à reprendre ensemble.
- **Confidentialité d'OpenRouter (C8) :** tous les réglages de partage désactivés sur le compte de Dylan ; essai réussi avec `data_collection: "deny"` (modèle `recursive/flint-v1.0:free`) ; quota confirmé à 50 requêtes par jour (charte §4.3, dossier §5, D-019).
- **Test de la charte (C7) :** fiche prête ([test-charte.md](test-charte.md)).
- **Export PDF (C10) :** reporté, aucun PDF pour l'instant.

**Blocages :** aucun.

**À faire :**
- Dylan : faire passer le test de la charte avec Nicolas ; créer le dépôt commun avec les autres binômes (C11) et y proposer la v1.1 (C12).
- Nicolas : choisir le symbole ; relire le dossier et la charte (C9) ; retirer les ✎ de la bible (C3).

### 2026-11-23 · S48 · Moodboard dans Figma (Dylan, avec Claude Code)
**Aujourd'hui :**
- Moodboard composé dans Figma : un collage de 12 images sur un fond d'isobares, avec un crédit (auteur, année, licence) sur chaque image, quelques notes courtes, trois mots-clés, les trois polices Recursive et les 11 couleurs de la bible avec leur code hex.
- Plusieurs versions : v1 en grille (trop propre), v2 en collage, v3 avec des sous-titres sous les images ; la **v4** (la v2 corrigée, plus rien de coupé) est retenue.
- Lien : [planche v4](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=11-2) ; export PNG dans `docs/moodboard-planche.png` ; sources dans `docs/moodboard-sources.md`.

**Blocages :** limite d'appels du serveur MCP de Figma (offre Starter) atteinte une fois ; ça a remarché un peu plus tard.

**À faire :** Nicolas, valider la planche (C4) ; recopier les mentions de licence exactes avant le PDF.

### 2026-11-23 · S48 · Relecture du commit de Nicolas (Dylan)
**Aujourd'hui :**
- **Vérifié par le calcul** les chiffres de la bible v0.3 : couleurs de référence en OKLab, milieu rose d'OKLCH, courbe en S, déplacement de la spirale (57 % → 0,16 %), voisin le plus proche à 2,8 %. Tout est exact.
- **Incohérences corrigées :**
  - le cas 18 est remis au palier 1 (lundi) ;
  - le cas 22 passe au mercredi, car il a besoin du sondage (N7) ;
  - l'exemple du dossier §6 suit D-016 (valeurs locales par le serveur) ;
  - la bible donne un seul chiffre pour le déplacement (0,16 %) ;
  - la charge du mercredi est corrigée (7 h) ;
  - D-003 et D-007 à D-009 sont marquées validées ;
  - charte v0.5.
- **Backlog v1.2 :**
  - si la jonction réussit, A2b (vraie IA) commence le vendredi 11/12 ;
  - si Nicolas prend du retard, O4 passe au 11/01 ;
  - C3 : Dylan relit la v0.3, puis Nicolas retire les ✎ avant l'export PDF.

**Blocages :** aucun.

**À faire :** Dylan, relire la bible v0.3 (C3) ; le reste est inchangé (C4 à C11).

### 2026-11-23 · S48 · Relecture de la DA, du planning et des vecteurs (Nicolas, avec Claude Code)
**Plus tôt dans la journée :** relu la charte, le dossier et la bible v0.2 de Dylan ; donné mes avis sur le thème, les couleurs et les valeurs locales.
**Aujourd'hui :**
- **Vérifié par le calcul** (scripts hors dépôt, Node.js 24) : les cas 20 à 26 de Dylan sont exacts (cinq chaînes valides, hash, créneaux, producteurs, signatures, cas 22, 23 et 26) ; les contrastes de la bible aussi.
- **Bible DA v0.3 :**
  - la spirale ne tourne plus : l'angle suit le rang absolu et le rayon l'âge (déplacement moyen par message de 57 % à 0,16 % de la largeur, D-013) ;
  - couleurs interpolées en OKLab (le rose parasite d'OKLCH ressemblait à l'alerte, D-014), 11 vecteurs de couleur et courbe en S définie ;
  - échelle de la spirale mesurée (`c = 0,028`, profondeur 300, D-015), contraintes de rendu, bordure des champs, anneau de focus, glyphe de symbole simplifié, polices hébergées chez nous, sources libres de droits pour le moodboard.
- **Dossier v0.8 et backlog v1.1 :** valeurs locales calculées par le serveur de l'application (D-016) ; palier 1 en deux temps, rattrapage relevé à 5 h, appel réel à l'IA en S2 (D-017) ; répartition N1, N8 et T1 reportée dans le dossier §10 ; deux risques ajoutés (estimations, saccades du Canvas).

**Blocages :** aucun.

**À faire :**
- Nicolas : valider les changements ✎ de la bible (C3) ; moodboard, symbole, glyphe et esquisses dessinées (C4 à C6).
- Dylan : relire les décisions D-013 à D-017 ; confidentialité d'OpenRouter (C8) ; export PDF (C10).
- Les six : dépôt commun (O1) ; qui dépose la spec sur Moodle jeudi avant 12h30.

**Décisions :** D-013 à D-017 (decisions.md).

### 2026-11-23 · S48 · Relecture complète et corrections (Dylan)
**Aujourd'hui :**
- **Vecteurs :** nos cas 20 à 26 sont écrits pour la spec v1.0 (`tests/vectors/`), avec une chaîne de hauteur 12 et de vraies signatures. Ils sont vérifiés en Node.js et en Python. Les vecteurs v0.5 et les exemples v0.2 sont archivés (`docs/spec-commune/archives/`).
- **Bible DA v0.2 :**
  - le contour ne sert plus qu'à la prévision ; l'origine est donnée par des satellites ;
  - spirale avec le plus récent au centre (image de dépression satellite), bornée à 400 messages ;
  - typographie Recursive ;
  - couleurs de l'interface séparées de celles de l'œuvre ;
  - grille de l'écran ;
  - nom *Front commun*.
- **Dossier v0.7 :**
  - toutes les `[PROPOSITION]` sont transformées en décisions ;
  - le §6 renvoie à la bible au lieu de la recopier ;
  - un refus de l'IA sur un lot ne masque plus tout le lot.
- **Charte v0.4 :** calcul exact des valeurs locales et lexique `l1` (50 entrées) ; colère froide à `energie` 0,55.
- **Autres documents :**
  - backlog v1.0 complet : tâches estimées, priorités, plan du soir pour S50 et S2, S49, oral ;
  - environnement : la machine du nœud s'appelle `noeud-c` ;
  - décisions D-003 à D-012 ;
  - propositions de précisions pour la spec v1.1.

**Blocages :** aucun.

**À faire :**
- Nicolas : valider les changements ✎ de la bible (C3), puis moodboard, symbole et esquisses.
- Dylan : réglage de confidentialité d'OpenRouter (C8), export PDF (C10).
- Les six : dépôt commun (O1).

**Décisions :** D-003 à D-012 (decisions.md).

### 2026-11-23 · S48 · Bible DA v0.1 et dossier v0.6
**Fait :**
- Premier jet de la bible DA, avec les 8 éléments. Il reprend les choix de Nicolas : palette à couleurs-clés, phyllotaxie, prévision et observation, brume.
- Dossier v0.6 : les 4 incohérences relevées par Nicolas sont corrigées.

**À faire (Nicolas) :** reprendre la bible ; dessiner le moodboard, le symbole et les 3 esquisses ; demander un retour à C. Surribas.

### 2026-11-23 · S48 · Charte v0.3 (avis de Nicolas sur l'œuvre)
**Fait :**
- Charte :
  - météo et éléments réunis (« le ciel est fait des quatre éléments ») ;
  - le ton des messages des autres nœuds est lu, valeurs neutres seulement pour un message vide de sens ;
  - colère froide = feu bleu ;
  - 6 exemples, dont 3 difficiles ;
  - lexique pour les valeurs locales ;
  - brume pour les messages masqués ;
  - mots interdits comparés en mots entiers ;
  - phrase d'exemple qui change ;
  - test auprès de 3 personnes.
- Dossier §6 : prévision puis observation, fond collectif, origine du nœud, courbe de contraste, bulletin météo.

**À faire :** bible DA (palette à couleurs-clés), liste de mots et lexique, test de la charte.

### 2026-11-23 · S48 · Corrections après l'avis de Nicolas
**Fait :**
- Dossier :
  - règle de déclenchement des lots (10 messages, ou 45 s, avec au moins 30 s entre deux requêtes) ;
  - retraitement des messages en valeurs locales ;
  - masquage côté serveur, avec les mêmes règles pour tous les messages ;
  - cas 20 à 26 sous forme de fichiers de scénario ;
  - réessais si l'IP Tailscale n'est pas encore là ;
  - palette renvoyée à la bible DA ;
  - mise en forme de la légende.
- Charte v0.2 : « service d'IA extérieur », extraction du JSON de la réponse, espaces retirés sans message, §4.3 sur la confidentialité.

**À faire :**
- vérifier le réglage de confidentialité d'OpenRouter ;
- bible DA (Nicolas) ;
- transformer les `[PROPOSITION]` en décisions ;
- backlog.

### 2026-11-23 · S48 · Répartition décidée, quota OpenRouter
**Décisions (à deux) :**
- Dylan : nœud, IA et prompt, dossier.
- Nicolas : application, œuvre et bible DA.
- À deux : tableau des valeurs de la charte, cas 20 à 26.
- Chacun relit l'autre.

**Fait :** le dossier passe en v0.5 :
- répartition nominative ;
- IA par lots de 10 messages, un seul nouvel essai, compteur journalier en base, IA simulée en développement, 30 requêtes réservées pour l'oral ;
- application ouverte sur notre PC, avec `APP_HOST` en variante.

Le prompt de la charte passe en lots.
**À faire :** savoir qui dépose la spec sur Moodle jeudi 12h30. Questions aux profs : vecteurs en S49 (fichiers JSON, pas du code) ; alterner nos deux clés OpenRouter.

### 2026-11-23 · S48 · Charte éditoriale v0.1
**Fait :** la charte est écrite. Elle contient :
- la consigne « Quel temps fait-il en vous ? » ;
- 4 valeurs, plus `masquer` ;
- le prompt `p1`, avec 3 exemples ;
- le filtre avant signature, sans IA ;
- le masquage par une trace grise dans l'œuvre.

Le §6 du dossier est aligné sur la charte.
**À faire :** valider la charte à deux ; tester le prompt (10 envois par exemple) avant le 07/12 ; écrire la liste de mots interdits ; bible DA.

### 2026-11-23 · S48 · Dossier de binôme v0.4
**Fait :** corrections après relecture :
- confirmation d'un message par le temps ;
- IA en parallèle, avec un quota journalier et un repli local ;
- `events` lus par sondage, `busy_timeout` ;
- cas de test répartis par palier ;
- port 8080 sur l'IP Tailscale ;
- règles pour beaucoup de messages ;
- nouveaux risques (quota, veille, SQLite).

`02-spec-commune.md` devient un renvoi vers la v1.0, et D-002 est marquée comme remplacée.
**À faire :** répartition nominative ; charte puis bible DA, puis recopie dans le §6 ; vérifier le quota OpenRouter ; demander à l'équipe pour la S49 et un éventuel crédit.

### 2026-11-23 · S48 · Spec commune v1.0
**Fait :** `docs/spec-commune.md` passe en v1.0, la version validée par les six : 20 décisions actées, exemples et justifications dans chaque section. Le PDF et la v0.6 sont archivés dans `docs/spec-commune/`.
**À faire :** déposer sur Moodle avant le jeu. 26/11 à 12h30 ; mieux mettre en page le tableau 6.3 du PDF ; points ouverts O1 à O3 ; D-002 (Google Doc) est remplacée par la décision 14 (dépôt GitHub).

### 2026-11-23 · S48 · Spec commune v0.6
**Fait :** relecture de la v0.5 du groupe et passage en v0.6 : ordre des règles 3.1 corrigé, exceptions et limites écrites, 22 cas de test à répartir. Les anciennes versions sont archivées dans `docs/spec-commune/`.
**À faire :** soumettre la v0.6 aux six ; demander qui est « Ren », cité dans la v0.5.

### 2026-11-23 · S48 · Spec commune : Google Doc
**Décision :** la spec commune sera un Google Doc partagé à six (D-002). Parade à l'historique faible : versions nommées + export dans `docs/spec-commune/` du dépôt.
**À faire :** créer le Google Doc (copier la trame de `02-spec-commune.md`), inviter les cinq autres, coller le lien dans le README et la spec.

### 2026-11-23 · S48 · Binôme 1 connu
**Fait :** binôme 1 = Mouhamed Al Amine Bah + Hugo Delpuech : les six sont connus. Nicolas et les enseignants sont déjà invités sur le dépôt.
**À décider :** où vit la spec commune (dépôt partagé à part ou dossier dans un dépôt).

### 2026-11-23 · S48 · Binômes formés (Moodle)
**Fait :** binôme 3 = Dylan Belledent + Nicolas Rapuzzi--Pisarczyk ; binôme 2 (complet) = Maxens Sevilla + Rahim Tamhaev ; binôme 1 encore vide (0/2).
**Blocages :** il manque deux personnes pour le binôme 1, donc pas encore les « six » de la spec commune.
**À faire :** noms dans le dossier de binôme, accès GitHub à Nicolas et aux enseignants.

### 2026-11-23 · S48 · Lancement
**Fait :** lancement de la SAÉ, lecture du sujet, création du dépôt et de la structure de documents (README, docs/, journal).
**Aujourd'hui :** former les binômes, lancer la spec commune.
**Blocages :** binômes pas encore formés ; clé Tailscale « à venir » sur Moodle.
**Décisions :** voir [decisions.md](decisions.md) (aucune technique pour l'instant : semaine sans code).
