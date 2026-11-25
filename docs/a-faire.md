# À faire avant les rendus (état au 25/11/2026)

Liste de travail du binôme 3 après le **pivot vers *Terre commune*** (carte marine 3D procédurale en Three.js, `D-023` et `D-024`). On coche au fur et à mesure ; quand tout est coché, ce fichier peut être supprimé (le backlog reste la référence).

Légende : ☐ à faire · ◐ commencé · ☑ fait. **D** = Dylan, **N** = Nicolas.

## 0. Les échéances

| Quand | Quoi | Où |
| --- | --- | --- |
| **jeu. 26/11, 12h30** | Spec commune (les six) | Moodle |
| **ven. 27/11, 17h** | Dossier de binôme, charte éditoriale, bible DA (3 PDF) + backlog et plan S50 / S2 (PDF ou lien) | Moodle |
| avant le lun. 07/12 | S49 : environnement prêt sur nos postes (section 5) | chez soi |
| jeu. 10/12 | Les trois nœuds rejoignent la chaîne | en salle |

## 1. Visuels Figma à produire pour *Terre commune* (le gros du travail restant)

Les textes de la bible DA v1.3, de la charte v1.3, du dossier v0.12 et du backlog v1.7 sont synchronisés et gelés. Il reste les **trois livrables Figma** :

### 1.1 Moodboard *Terre commune* (C4, bible §2) · D + N · ☐
- ☐ Rassembler 8 à 12 images libres/créditées (archipels volcaniques, *Wind Waker*, *Dorfromantik*, *Dredge*, cartes topographiques, low-poly) dans Figma.
- ☐ Mettre à jour [moodboard-sources.md](moodboard-sources.md) avec les sources et mentions de licence exactes.
- ☐ Exporter en PNG (`docs/moodboard-planche.png`) et mettre le lien Figma dans la bible §2.

### 1.2 Symbole *Terre commune* (C5, bible §5) · D + N · ☐
- ☐ Dessiner le symbole dans Figma (piste : courbes topographiques / île minimaliste ou phare + les **3 formes-nœuds** : pyramide Cyan `#38BDF8`, cube Ambre `#FBBF24`, losange Violet `#A78BFA`).
- ☐ Exporter en SVG/PNG (16 px et 64 px) et intégrer le lien dans la bible §5.

### 1.3 Trois esquisses 16:9 (C6, bible §7) · D + N · ☐
- ☐ Dessiner dans Figma les trois états de l'application complète : **1 · Vide** (océan vierge), **2 · Quelques messages (10)** (premiers îlots, phare, voilier, zone filaire en prévision), **3 · Beaucoup (300)** (continent complet avec forêts, lagons, volcan, voiliers et phares des 3 nœuds).
- ☐ Exporter dans `docs/esquisses/1-vide.png`, `2-quelques.png`, `3-beaucoup.png` et mettre le lien Figma dans la bible §7.

## 2. Validations, archivage et tests avant vendredi

- ☐ **Conduite de projet (prioritaire) :** **Nicolas** relit la bible DA v1.3, la charte v1.3 et le dossier v0.12, **co-valide D-023, D-024 et D-025** et **ajoute sa propre entrée dans [journal.md](journal.md)**.
- ☑ **Archiver les anciens visuels *Front commun*** : déplacés dans [archives-front-commun/](archives-front-commun/README.md) le 25/11/2026.
- ☐ **Spec commune (C1, demain jeu. 26/11, 12h30) :** vérifier qui des six dépose la v1.0 sur Moodle.
- ☐ **Dépôt commun aux six (C11) :** créer le repo commun et y pousser nos vecteurs `cas-20` à `cas-26`.
- ☐ **Test de la charte (C7) :** faire passer [test-charte.md](test-charte.md) à 3 personnes extérieures et remplir le tableau.
- ☐ **Export PDF Mermaid :** tester dès jeudi que le schéma Mermaid du dossier s'affiche bien dans le PDF.

## 3. Le vendredi 27/11, avant 17h

1. ☐ Les 3 livrables Figma (moodboard, symbole, esquisses) sont intégrés dans `05-bible-da.md`.
2. ☐ Export PDF (C10) des 4 rendus : vérifier schémas, tableaux, images, liens.
3. ☐ Relire les 4 PDF à deux (10 min chacun).
4. ☐ Déposer sur Moodle, puis noter le dépôt dans `docs/journal.md`.
5. ☐ Commit et push propres sur GitHub (vérifier qu'aucun fichier hors-sujet comme `art-generatif.pdf` n'est commité par erreur).

## 4. Questions à poser aux enseignants (daily)

- ☐ Peut-on alterner les clés de signature (une par personne) ou une seule clé par nœud ?
- ☐ A-t-on le droit d'écrire du code pendant la S49 (sans SAÉ) ou seulement d'installer ?
- ☐ Le backlog peut-il être rendu sous forme de lien vers GitHub ?

## 5. La S49 (30/11 au 04/12) : préparer l'environnement

- ☐ Tailscale installé, poste nommé `noeud-c`, connexion vérifiée avec un autre binôme.
- ☐ Node.js 24 installé ; `better-sqlite3` qui compile sous Windows ; `three` installé en local.
- ☐ Police variable **Recursive** téléchargée en local (`app/fonts/`).
- ☐ Fichier `.env` local (clé OpenRouter, jamais dans Git).
- ☐ T7, test du prompt `p2` : le lot des six exemples de la charte §3 envoyé 10 fois ; noter `model_used` et l'heure de remise à zéro du quota (50 req/jour).
- ☐ **Point ouvert O3 de la spec :** publier notre clé publique Ed25519 avant le lun. 07/12.
