# À faire avant les rendus (état au 23/11/2026)

Liste de travail du binôme 3. On coche au fur et à mesure ; quand tout est coché, ce fichier peut être supprimé (le backlog reste la référence).

Légende : ☐ à faire · ◐ commencé · ☑ fait. **D** = Dylan, **N** = Nicolas.

## 0. Les échéances

| Quand | Quoi | Où |
| --- | --- | --- |
| **jeu. 26/11, 12h30** | Spec commune (les six) | Moodle |
| **ven. 27/11, 17h** | Dossier de binôme, charte éditoriale, bible DA (3 PDF) + backlog et plan S50 / S2 (PDF ou lien) | Moodle |
| avant le lun. 07/12 | S49 : environnement prêt sur nos postes (section 6) | chez soi |
| jeu. 10/12 | Les trois nœuds rejoignent la chaîne | en salle |

Pas de PDF pour l'instant : l'export (C10) se fait en dernier, le vendredi, quand tout le reste est coché.

## 1. Direction artistique (le gros du travail restant)

### 1.1 Esquisses à refaire (C6, bible §7) · D + N · ☐

Les esquisses actuelles (Figma, page « Esquisses », et `docs/esquisses/*.png`) ne nous plaisent pas. À reprendre :

- ☐ Décider ensemble ce qui ne va pas, avant de redessiner : formes trop petites ? trop de vide ? fond trop plat ? le bleu (`eau`, froid) qui disparaît sur la Nuit ?
- ☐ Trancher la question du bleu (voir 1.4) **avant** de redessiner, sinon on refait deux fois.
- ☐ Redessiner les trois états imposés par la bible : **vide**, **quelques messages** (10), **beaucoup** (300), au même cadrage carré.
- ☐ Garder les données réelles : les positions de `docs/esquisses/positions-10.csv` et `positions-300.csv` (spirale r = 0,028√k, angle n × 137,5078°). Si on change une règle (taille, opacité), changer **d'abord** la bible §6, puis regénérer les CSV.
- ☐ Montrer au moins une fois : une prévision (pointillés), un message masqué (brume), les satellites des trois nœuds, le vieillissement après k = 100.
- ☐ Exporter les 3 PNG dans `docs/esquisses/` (mêmes noms) et mettre à jour le lien Figma de la bible §7.
- ☐ Récrire les deux paragraphes « Ce que montrent les esquisses » et « Données utilisées » de la bible §7.

### 1.2 Moodboard à améliorer (C4, bible §2) · D · ☐

Planche actuelle : v5 (Figma, nœud 20:79, `docs/moodboard-planche.png`) : la v4 avec les quatre polices par temps (24/11). La v4 (nœud 11:2) reste dans le fichier.

- ☐ Lister avec Nicolas ce qui ne va pas encore (retour : « trop propre, trop IA » sur la v1 ; la v4 reste à juger).
- ☐ Rendre lisible le lien entre chaque image et une règle de l'œuvre (spirale, éléments, chaleur, brume) : c'est ce que le correcteur cherche.
- ☐ Recopier la **mention de licence exacte** de chaque image depuis sa page Wikimedia Commons (`docs/moodboard-sources.md`, ligne « À faire avant le PDF »).
- ☐ Exporter la nouvelle planche en PNG (`docs/moodboard-planche.png`) et mettre à jour le lien de la bible §2.
- ☐ N valide la planche.

### 1.3 Symbole (C5, bible §5) · N · ◐

- ☐ Symbole à refaire : toutes les pistes (v1 à v9) ont été retirées du dépôt le 24/11 ; elles restent dans Figma. D-018 et D-021 sont écartées.

### 1.4 Points à trancher à deux · D + N · ☐

- ☐ **Le bleu froid** (#3F7FD6) est trop discret sur le fond Nuit (#0E1424) : on garde, on éclaircit la clé, ou on ajoute un contour ? Si une couleur change, mettre à jour les 11 vecteurs de la bible §3.1 et ajouter une décision.

- ☐ **Les quatre polices par temps** (bible §4 v0.4, D-020, proposée par Dylan le 24/11) : N valide ou refuse, en s'appuyant sur la planche d'essai (`docs/typo-planche.png`, Figma nœud 19:2). La planche du moodboard v5 utilise déjà ces polices. Si oui : D-020 passe à « validée ». Si non : revenir à la v0.3 (Recursive, D-009) et à la planche v4.

### 1.5 Relire toute la bible (C3) · D puis N · ☐

La bible contient encore **28 ✎** (passages à relire). Pour chaque section, vérifier : c'est clair, c'est chiffré, ça ne contredit ni la spec, ni la charte, ni le dossier.

| § | Élément imposé | À vérifier |
| --- | --- | --- |
| 1 | Intention | Le « regard » est le même que dans le dossier §1 et la charte §1 |
| 2 | Moodboard | Après 1.2 : lien, PNG et sources à jour |
| 3 | Ambiance colorée | 3.1 (œuvre) et 3.2 (interface) ; contraste du texte (WCAG AA) ; décision sur le bleu |
| 4 | Typographie | v0.4 : les quatre temps (règle 4.1, vecteurs), les interactions (4.2), ce qui reste fixe (4.3) |
| 5 | Symbole | Après 1.3 : version choisie par Nicolas |
| 6 | Règles génératives | 6.1 spirale et 6.2 rendu : mêmes chiffres que le dossier §6 et D-013 à D-015 |
| 7 | Esquisses | Après 1.1 : trois états, liens, textes |
| 8 | Design system | 8.1 grille, 8.2 composants : cohérents avec l'application décrite dans le dossier |

- ☐ D relit et note les corrections.
- ☐ N retire les ✎ une fois d'accord.
- ☐ Vérifier qu'aucune image ni lien n'est cassé (`esquisses/`, `moodboard-planche.png`, liens Figma).

## 2. Contrôle des rendus contre les consignes officielles

Pour chaque rendu, la consigne du sujet, ce que nos documents ont déjà, et ce qui manque.

### 2.1 Dossier de binôme (`03-dossier-binome.md`) · PDF · ven. 27/11

| Consigne | État |
| --- | --- |
| 1. Le projet en bref | ☑ présent |
| 2. L'architecture, avec un schéma (rôle, où il tourne, comment il parle) | ☑ schéma Mermaid ; ☐ vérifier qu'il s'affiche bien dans le PDF |
| 3. Le parcours d'un message | ☑ |
| 4. Les données (dont le modèle d'IA qui a répondu) | ☑ |
| 5. L'IA (quand, quel modèle, pas de réponse / trop lente / hors format) | ☑ ; quota de 50 requêtes par jour confirmé |
| 6. Des valeurs à l'œuvre (lien avec la bible) | ☐ revérifier après les changements de la bible (1.1, 1.4) |
| 7. Les choix techniques (pourquoi, alternative écartée) | ☑ |
| 8. Les tests (nœud seul, à trois, de bout en bout) | ☑ |
| 9. Les risques (technique, temps, binôme) | ☑ |
| 10. L'organisation (qui, à deux, Git, IA pour coder) | ☑ |
| Rien ne contredit la spec ni la bible | ☐ relecture croisée (C9) |
| **Test :** un autre binôme reprend le projet seul | ☐ faire lire le dossier à quelqu'un d'un autre binôme ; la section 11 « Démarrer le projet » aide |

- ☐ C9 : N relit le dossier en entier.

### 2.2 Charte éditoriale (`04-charte-editoriale.md`) · PDF · ven. 27/11

| Consigne | État |
| --- | --- |
| 1. Consigne : sujet, forme, longueur, langue, pourquoi | ☑ (§1 : 1 à 280 caractères, 20 à 200 conseillé ; français conseillé) |
| 2. Lecture par l'IA : nom, mesure, forme et bornes de chaque valeur | ☑ (§2, tableau des 5 valeurs) |
| 3. Le prompt, avec au moins 3 messages d'exemple et les valeurs attendues | ☑ (§3, six exemples) |
| 4. Limites : ce qu'on refuse, ce qu'on fait d'un message qui ne s'efface pas | ☑ (§4.1 à 4.4) |
| Cohérente avec la spec | ☑ §5 ; ☐ revérifier si la spec passe en v1.1 (C12) |
| **Test :** on sait ce qu'on peut écrire et ce que l'IA en tirera | ☐ C7 : faire passer le test à 3 personnes ([test-charte.md](test-charte.md)) et remplir le tableau |

- Le test du prompt avec un vrai modèle (T7) est prévu en S49 (section 6), pas avant le rendu.
- ☐ C9 : N relit la charte.

### 2.3 Bible DA (`05-bible-da.md`) · PDF · ven. 27/11

Les 8 éléments sont présents (voir 1.5). Reste : esquisses (1.1), moodboard (1.2), symbole (1.3), bleu (1.4), relecture et ✎ (1.5).

### 2.4 Backlog et plan S50 / S2 (`06-backlog.md`) · PDF ou lien · ven. 27/11

| Consigne | État |
| --- | --- |
| 1. Backlog estimé et classé (indispensable / en plus) | ☑ colonnes estimation et I / + |
| 2. Répartition | ☑ §2 |
| 3. Plan de chaque journée de S50 et de S2, avec le jalon du jeudi 10/12 | ☑ §3 |
| 4. La S49 | ☑ §4 |
| 5. L'oral | ☑ §5 |
| **Test :** on sait ce qui doit marcher chaque soir, et qui s'en occupe | ☐ relire le §3 en vérifiant que **chaque** soir a un « ce qui marche » et un nom |

- ☐ Mettre à jour les statuts S48 (C1 à C12) juste avant le dépôt.
- ☐ Retirer les 3 ✎ restants du backlog.
- ☐ Choisir : PDF ou lien vers le dépôt GitHub (le lien demande que les profs aient accès au dépôt).

### 2.5 Spec commune (`spec-commune.md`) · jeu. 26/11, 12h30

- ☐ **C1 :** déposer la v1.0 sur Moodle (une personne des six ; vérifier qui le fait).
- ☐ **C11 :** créer le dépôt GitHub commun aux six (point ouvert O1 de la spec) et y mettre la spec.
- ☐ **C12 :** proposer la v1.1 aux autres binômes (corrections relevées pendant nos relectures).

## 3. Les tâches du backlog S48 encore ouvertes

| Tâche | Qui | Quand | État |
| --- | --- | --- | --- |
| C1 Déposer la spec commune | les six | jeu. 26/11, 12h30 | ◐ |
| C3 Relecture de la bible, retrait des ✎ | D puis N | jeu. 26/11 | ☐ |
| C4 Moodboard | D, validé par N | jeu. 26/11 | ◐ à améliorer |
| C5 Symbole | N | jeu. 26/11 | ☐ à refaire |
| C6 Esquisses | D + N | jeu. 26/11 | ◐ à refaire |
| C7 Test de la charte | D + N | jeu. 26/11 | ◐ fiche prête |
| C9 Relecture du dossier et de la charte | N | jeu. 26/11 | ☐ |
| C10 Export des 4 PDF | D | ven. 27/11 matin | ☐ (en dernier) |
| C11 Dépôt commun aux six | D | jeu. 26/11 | ☐ |
| C12 Spec v1.1 | D | ven. 27/11 | ☐ |

## 4. Le vendredi 27/11, avant 17h

1. ☐ Tout ce qui précède est coché, plus aucun ✎ dans les quatre documents.
2. ☐ Export PDF (C10) : vérifier dans chaque PDF les schémas, les tableaux coupés, les images, les liens.
3. ☐ Relire les 4 PDF à deux (10 min chacun).
4. ☐ Déposer sur Moodle, puis noter le dépôt dans `docs/journal.md`.
5. ☐ Commit et push du dépôt.

## 5. Questions à poser aux enseignants (daily)

- ☐ Peut-on alterner les clés de signature (une par personne) ou une seule clé par nœud ?
- ☐ A-t-on le droit d'écrire du code pendant la S49 (sans SAÉ) ou seulement d'installer ?
- ☐ Le backlog peut-il être rendu sous forme de lien vers GitHub ?

## 6. La S49 (30/11 au 04/12) : préparer l'environnement

Détail dans le [backlog §4](06-backlog.md). En bref :

- ☐ Tailscale installé, poste nommé `noeud-c`, connexion vérifiée avec un autre binôme.
- ☐ Node.js 24 installé ; `better-sqlite3` qui compile sous Windows.
- ☐ Fichier `.env` local (clé OpenRouter, jamais dans Git ; `.env` déjà dans `.gitignore`).
- ☐ T7, test du prompt : le lot des six exemples de la charte §3 envoyé 10 fois (10 requêtes) ; noter le modèle qui a répondu.
- ☐ Noter l'heure de remise à zéro du quota OpenRouter (50 requêtes par jour).
- ☐ **Point ouvert O3 de la spec :** publier notre clé publique Ed25519 avant le lun. 07/12.
