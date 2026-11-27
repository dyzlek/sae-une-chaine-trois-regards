# SAÉ 5.D01 · Une chaîne, trois regards

BUT MMI 3 · Parcours Développement web · IUT Béziers (Université de Montpellier)
Enseignants : D. Marill, J. Azé, C. Surribas

> Une blockchain de messages, traités par une IA, pour générer une œuvre d'art.
> Une seule chaîne, trois nœuds (un par binôme), chaque binôme produit sa propre œuvre.

## Le principe

```
Des messages  →  Une blockchain  →  Une IA  →  Une œuvre
(écrits par      (3 nœuds, 1       (traite     (valeurs → rendu
 des gens)        seule chaîne)     chaque msg)  propre à chaque binôme)
```

## Ce qui est imposé

- Une seule chaîne, trois nœuds : un par binôme
- **Tailscale** pour le réseau (eduroam isole les postes, seuls 80/443/8080 sortent)
- **OpenRouter** pour l'IA (modèles gratuits uniquement)
- **GitHub** pour le code (accès donné à l'équipe enseignante)
- Une première semaine sans code
- Un daily chaque matin (10 min max par binôme)

Tout le reste est libre, mais **chaque choix doit être justifié**.

## Calendrier

| Semaine | Dates | Au programme |
|---|---|---|
| S48 | 23 au 27/11 | Pré-production : architecture, spec, direction artistique (sans code) |
| S49 | 30/11 au 4/12 | Pas de SAÉ : préparer son environnement chez soi |
| S50 | 7 au 11/12 | Production. **Jeudi 10/12 : les trois nœuds rejoignent la chaîne** |
| S51–S1 | 14/12 au 8/01 | Pause |
| S2 | 11 au 15/01 | Finalisation et soutenance orale (date précisée plus tard) |

Les créneaux de S50 et S2 peuvent bouger : l'emploi du temps fait foi.

## Rendus de la S48

| Rendu | Qui | Forme | Échéance |
|---|---|---|---|
| Spec commune | Les six | Fichier ou lien | Jeu 26/11, 12h30 |
| Dossier de binôme | Binôme | PDF | Ven 27/11, 17h |
| Charte éditoriale | Binôme | PDF | Ven 27/11, 17h |
| Bible DA | Binôme | PDF | Ven 27/11, 17h |
| Backlog et plan S50 / S2 | Binôme | PDF ou lien | Ven 27/11, 17h |

Tout se dépose sur Moodle.

## Évaluation

Nœud 25 % · Application 20 % · Direction artistique 20 % · Conception (S48) 15 % · Conduite de projet 10 % (indiv.) · Oral 10 % (indiv.)

## Organisation du dépôt

```
.
├── README.md              ce fichier
├── CLAUDE.md              contexte du projet pour l'assistant de code
├── docs/
│   ├── 00-sujet.md        résumé du sujet et des contraintes
│   ├── 01-environnement.md Tailscale + OpenRouter (sans aucun secret)
│   ├── 02-spec-commune.md  les 11 questions (à six)
│   ├── 03-dossier-binome.md les 10 sections
│   ├── 04-charte-editoriale.md
│   ├── 05-bible-da.md      les 8 éléments
│   ├── 06-backlog.md       tâches, estimations, plan S50/S2
│   ├── 07-evaluation.md    critères et auto-suivi
│   ├── journal.md          journal de bord + dailies
│   └── decisions.md        choix techniques justifiés (ADR courts)
├── tests/vectors/         nos cas de test (spec v1.1 : 20 à 26 faits, 30, 32, 36 à venir)
└── (code à venir en S50 : node/, app/, ...)
```

## Règles de sécurité

- **Jamais** dans Git : clé d'accès Tailscale, clé d'API OpenRouter, fichiers `.env`.
- La clé Tailscale est réservée à la SAÉ et sera révoquée à la fin.
- Uniquement des modèles OpenRouter gratuits.

## Équipe

| Binôme | Membres | Rôle de nœud |
|---|---|---|
| Binôme 3 (nous) | Dylan Belledent, Nicolas Rapuzzi--Pisarczyk | `noeud-c` |
| Binôme 2 | Maxens Sevilla, Rahim Tamhaev | `noeud-b` |
| Binôme 1 | Mouhamed Al Amine Bah, Hugo Delpuech | `noeud-a` |

Accès GitHub : Nicolas et l'équipe enseignante sont invités sur ce dépôt.
