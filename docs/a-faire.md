# À faire avant les rendus (état au 27/11/2026)

Liste de travail du binôme 3 pour ***Terre commune*** (carte marine 3D procédurale en Three.js, `D-023` à `D-028`). On coche au fur et à mesure ; quand tout est coché, ce fichier peut être supprimé (le backlog reste la référence).

Légende : ☐ à faire · ◐ commencé · ☑ fait. **D** = Dylan, **N** = Nicolas.

## 0. Les échéances

| Quand | Quoi | Où |
| --- | --- | --- |
| **jeu. 26/11, 12h30** | Spec commune (les six) — v1.1 validée le 26/11 | Moodle |
| **ven. 27/11, 17h** | Dossier de binôme (v0.15), charte éditoriale (v1.5), bible DA (v1.5) (3 PDF) + backlog et plan S50 / S2 (v2.0, PDF ou lien) | Moodle |
| avant le lun. 07/12 | S49 : environnement prêt sur nos postes (section 5) | chez soi |
| jeu. 10/12 | Les trois nœuds rejoignent la chaîne | en salle |

## 1. Visuels Figma pour *Terre commune*

Les textes de la bible DA v1.5, de la charte v1.5, du dossier v0.15 et du backlog v2.1 sont synchronisés sur la **spec v1.1 validée**.

### 1.1 Moodboard *Terre commune* (C4, bible §2) · D + N · ☑ (27/11)
- ☑ v6 critiquée par l'enseignante le 27/11 (trop centrée sur les îles, pas assez de domaines culturels).
- ☑ **v8 retenue** (Dylan, Figma) : 12 références, 10 domaines, sources et licences dans [moodboard-sources.md](moodboard-sources.md), export `docs/moodboard-terre/moodboard-planche.png`. La v7 HTML de Nicolas reste en archive.

### 1.2 Symbole *Terre commune* (C5, bible §5) · D + N · ☑ (27/11)
- ☑ Le cristal-île unifié (un seul bloc continu, couleur unie selon l'émotion majoritaire, sans trait bleu, `D-026`). Planche [symbole/planche-symbole.png](symbole/planche-symbole.png) et 4 SVG exportés.

### 1.3 Trois esquisses 16:9 (C6, bible §7) · D + N · ☑ (27/11)
- ☑ Maquette HTML ([esquisses/index.html](esquisses/index.html)) reprenant exactement les règles §6, la typo *Bricolage Grotesque + Recursive* et le symbole vivant.
- ☑ Exportées en 1920 × 1080 : `docs/esquisses/1-vide.png`, `2-quelques.png`, `3-beaucoup.png` et liées dans la bible §7.

## 2. Validations et tests restants avant vendredi 17h

- ☑ **Conduite de projet :** **Nicolas** a validé à l'oral le 27/11 la bible DA v1.5 (C3), la charte v1.4, le dossier v0.14 (C9) et les décisions `D-023` à `D-028`.
- ☑ **Archiver les anciens visuels *Front commun*** : déplacés dans [archives-front-commun/](archives-front-commun/README.md) le 25/11/2026 ; fichiers hors-sujet (`art-generatif.pdf`, `LAST_CLICK*`) retirés le 27/11.
- ☑ **Spec commune v1.1 (C1, C12) :** validée par les trois binômes le 26/11/2026 et déposée sur Moodle.
- ☑ **Partage de la spec aux six (C11) :** PDF v1.1 partagé directement (pas de dépôt commun créé ; nos vecteurs restent dans `tests/vectors/` de notre dépôt et se partagent sur Discord).
- ☑ **Test mesuré du prompt (C16) :** fait le 27/11, [test-prompt/](test-prompt/README.md) ; modèle fixe ernie (D-029).
- ☐ **Relecture par Nicolas (C15) :** dossier v0.15 et charte v1.5 (D-029, D-030, message de détresse).
- ☑ **Test de la charte (C7) :** fait le 27/11, 3/3 réussis ([test-charte.md](test-charte.md)).
- ☑ **Allègement des rendus (~−10 %)** : fait le 27/11 (journal).
- ☑ **Code des visuels en S48 justifié** (D-031).
- ☑ **Schéma d'architecture PDF :** [architecture.svg](architecture.svg) généré et intégré dans le dossier §2 (plus de risque Mermaid à l'export PDF).

## 3. Le vendredi 27/11, avant 17h

1. Livrables visuels intégrés dans `05-bible-da.md` : ☑ symbole (§5) · ☑ esquisses (§7) · ☑ moodboard v8 (§2).
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
- ☐ Polices variables **Bricolage Grotesque** et **Recursive** téléchargées en local (`app/fonts/`, D-028).
- ☐ Fichier `.env` local (clé OpenRouter, jamais dans Git).
- ☐ T7, test du prompt `p2` : le lot des six exemples de la charte §3 envoyé 10 fois ; noter `model_used` et l'heure de remise à zéro du quota (50 req/jour).
- ☐ **Point ouvert O3 de la spec :** publier notre clé publique Ed25519 avant le lun. 07/12.
