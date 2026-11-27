# Vecteurs de test · spec commune v1.1 · part du binôme 3

Cas **20 à 26** (déjà générés) et **30, 32, 36** (à ajouter, backlog C13, dépôt aux six le **ven. 04/12** : script de calcul accepté en S49, point O6) de la section 10.2 de [la spec v1.1](../../docs/spec-commune.md). Répartition v1.1 (36 cas au total) : binôme 1, vecteurs 3 à 10, 27 + scénarios 15, 33, 35 (12) ; binôme 2, vecteurs 11 à 14, 17 à 19, 28, 29, 31 + scénarios 16, 34 (12) ; **binôme 3, vecteurs 22, 23, 30, 32, 36 + scénarios 20, 21, 24 à 26 (10)**. Partage aux six (Discord, pas de dépôt commun) le lundi 07/12 (ou vendredi 04/12 si O6 accepté).

> Les clés de ce dossier sont les **clés de test publiques** de la spec (10.1). Ne jamais les utiliser en vrai.

Les anciens vecteurs (spec v0.5, avec le champ `author` supprimé depuis) sont archivés dans [docs/spec-commune/archives/vecteurs-v0.5/](../../docs/spec-commune/archives/vecteurs-v0.5/). **Ne pas les utiliser** : leurs `id` et leurs hash ne correspondent plus à la v1.0.

## Contenu

| Fichier | Rôle |
| --- | --- |
| `cles-de-test.json` | Graines privées et clés publiques de test (spec 10.1) |
| `chaines.json` | Chaînes de départ, toutes valides : `genese`, `genese+bloc1` (bloc 1 de la spec 2.2), `chaine-12`, `fourche-petite`, `fourche-grande` |
| `cas-20.json` … `cas-26.json` | Un fichier par cas |

## Les cas

| N° | Type | Ce qu'on vérifie | Attendu |
| --- | --- | --- | --- |
| 20 | scénario | Les trois nœuds redémarrent en même temps (avec `chaine-12`, puis avec le seul bloc zéro) | `GET` toujours en `200` ; sortie de `SYNCING` en 60 s au plus (spec 7.2 ; la v1.0 écrit 40 s au tableau 10.2, correction proposée en v1.1, M8) ; même `tip_hash` après une minute |
| 21 | scénario | Nœud sans chaîne, aucun pair ne répond, un message en file | 10 essais, sortie de `SYNCING`, **aucun bloc** |
| 22 | récupération de file | Message vieux de 120 s récupéré par `GET /messages/pending` | Accepté dans la file ; le même message en `POST /messages` sur un nœud neuf : `422 BAD_TIMESTAMP` |
| 23 | requête | Bloc 2 de `noeud-a`, trois créneaux après son bloc 1, tout le reste juste. **Heure du nœud : `1796889672000`** (2 s après le bloc), pas l'heure simulée par défaut : sinon la règle 9 passe avant et donne `BAD_TIMESTAMP`. La v1.0 classe ce cas en « essai en direct » ; la v1.1 proposée en fait un vecteur (I4) | `422 SAME_PRODUCER` |
| 24 | scénario | Nœud coupé des deux pairs, son créneau arrive | Aucun bloc ; reprise au retour d'un pair |
| 25 | scénario | Envoi initial d'un message raté vers un pair | Le pair l'a au sondage suivant |
| 26 | scénario | Fourche de même hauteur, ma tête (`1db16cf1…`) est plus petite que celle du pair (`7c8f7209…`) | Je garde ma chaîne, jamais de `SYNCING` |

## Lire un cas

- `etat_initial.chaine` : nom d'une chaîne de `chaines.json` à charger avant le cas.
- `etat_initial.heure_du_noeud` : l'heure à donner au nœud pour les fenêtres d'horloge (ms). Il faut donc pouvoir **injecter l'horloge** du nœud en test.
- `attendu.statut` et `attendu.error` : seuls le statut HTTP et le code sont contractuels (spec 6.2), jamais le `detail`.
- Les cas `scenario` se jouent en direct, sur le réseau ou avec des pairs simulés (paliers 2 et 3 de la spec 10).

## Valeurs utiles

| Objet | Valeur |
| --- | --- |
| Tête de `chaine-12` | `037a69c5165b2274e6dc2f97fcf22a4b3570c15209b29cd3b470269fcbabbdaf` |
| Bloc 1 concurrent (`noeud-b`, créneau 89844481) | `1db16cf1563e0e28a89049b2c13a3a8ba10c8abb8f44de102b1e98b3edf53d4c` |
| Bloc 2 du cas 23 | `e9a24e8a5ef8c1a095159ac24f2557ada3415ee9c87fab8c0f66b2d30ca1a9af` |
| Message du cas 22 | `4fb51c06093921e2a92c69bb9279a525c28cba1d4fa5d7750be0d991535ee035` |

`chaine-12` : un bloc par créneau à partir de 89844480 (le bloc 1 est celui de la spec), producteurs `a, b, c, a, …`, un message du producteur par bloc (horodatage = début du créneau + 3 s, bloc = début + 10 s).

## Comment ces valeurs ont été vérifiées (23/11/2026)

- **Node.js 24** (`node:crypto`) : le générateur retrouve d'abord les valeurs de la spec (bloc zéro `9af1db54…`, message `b3bca9b7…` et sa signature, bloc 1 `7c8f7209…` et sa signature, cas 19 `cd52fdfe…`, les trois clés publiques) avant d'écrire quoi que ce soit.
- **Python** (`hashlib` et `cryptography`), contrôle indépendant : les cinq chaînes passent les règles 3.2 (2 à 8 et 10), toutes les signatures sont vérifiées, le bloc du cas 23 échoue bien à la règle 10 (`SAME_PRODUCER`) et seulement là, et le message du cas 22 est valide.

Ces fichiers ne remplacent pas votre propre calcul : chaque binôme les rejoue sur son nœud.

## Spec v1.1 (validée le 26/11/2026)

La [spec v1.1](../../docs/spec-commune.md) ne change aucun `id`, `hash` ni signature : ces fichiers restent justes. Tous se jouent sur la **chaîne d'essai** (bloc zéro `9af1db54…`, clés de test). Ce format est le format commun des vecteurs (§10.2), et le binôme 3 ajoute les cas **30, 32 et 36** (`version_spec: "1.1"`, backlog C13).
