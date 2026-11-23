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
