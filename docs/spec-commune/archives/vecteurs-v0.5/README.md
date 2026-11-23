# Vecteurs de test de la spec commune (v0.5)

Les 22 cas de la section 10.2 de [la spec](../../docs/spec-commune.md), avec de **vraies valeurs** : identifiants, empreintes et signatures Ed25519 calculés avec les clés de test de la section 10.1.

> Les clés de ce dossier sont des **clés de test publiques**. Ne jamais les utiliser en vrai.

## Contenu

| Fichier | Rôle |
| --- | --- |
| `cles-de-test.json` | Graines privées de test et clés publiques (Base64) des trois nœuds |
| `chaines.json` | Chaînes nommées utilisées comme état de départ : `genese`, `genese+bloc1`, `chaine-12`, `chaine-x`, `chaine-y` |
| `cas-01.json` … `cas-22.json` | Un fichier par cas |

## Lire un cas

```json
{
  "numero": 3,
  "nom": "content de 281 points de code",
  "section": "3.1.2",
  "etat_initial": { "chaine": "genese", "file_d_attente": [], "heure_du_noeud": 1796889604000 },
  "etapes": [
    { "requete": { "methode": "POST", "chemin": "/api/v1/messages", "corps": { "…": "…" } },
      "attendu": { "statut": 422, "error": "MESSAGE_LIMITS" } }
  ]
}
```

- `etat_initial.chaine` : nom d'une chaîne de `chaines.json` que le nœud doit avoir au départ.
- `etat_initial.heure_du_noeud` : l'heure à utiliser pour les règles de fenêtre d'horloge (en ms). Il faut pouvoir **fixer l'heure** de son nœud en test (injecter une horloge).
- `attendu.statut` et `attendu.error` : seuls le **statut HTTP** et le **code** sont contractuels (spec 6.2), pas le texte de `detail`.
- Les cas **de type `scenario`** (15, 16, 20, 21), `requetes_multiples` (17) et `recuperation_de_file` (22) décrivent leur déroulé et le résultat attendu en texte et en valeurs.

## Les cas

| N° | Ce qu'on vérifie | Attendu |
| --- | --- | --- |
| 1 | Le message de l'exemple 2.1 | `201` |
| 2 | Le même message deux fois | `201` puis `200 known` |
| 3 | `content` de 281 points de code | `422 MESSAGE_LIMITS` |
| 4 | `author` avec une majuscule | `422 MESSAGE_LIMITS` |
| 5 | Un caractère de `content` modifié | `422 BAD_ID` |
| 6 | Signé avec la clé de `noeud-b`, `node` = `noeud-a` | `422 BAD_SIGNATURE` |
| 7 | `node` = `noeud-z` | `422 UNKNOWN_NODE` |
| 8 | `timestamp` en retard de 2 minutes | `422 BAD_TIMESTAMP` |
| 9 | Bloc 1 de l'exemple 2.2 | `201` |
| 10 | `previous_hash` modifié | `409 BAD_LINK` |
| 11 | Mauvais producteur pour le créneau | `422 WRONG_PRODUCER` |
| 12 | `messages_hash` faux | `422 BAD_MESSAGES` |
| 13 | 51 messages | `422 BAD_MESSAGES` |
| 14 | Message déjà dans un bloc plus ancien | `422 DUPLICATE` |
| 15 | Deux chaînes de même hauteur | garder le plus petit hash de tête |
| 16 | Rattrapage de la hauteur 0 à 12 | hauteur 12, même hash de tête |
| 17 | 41 messages en une minute | le 41e : `429 RATE_LIMIT` |
| 18 | Deux blocs du même producteur dans le même créneau | `422 BAD_TIMESTAMP` |
| 19 | Message avec accents et emoji | même `id` dans tous les langages |
| 20 | Redémarrage simultané des trois nœuds | sortie de `SYNCING` en moins de 40 s |
| 21 | Nœud sans chaîne et sans pair | pas de bloc avant 10 essais |
| 22 | Message en attente depuis plus de 60 s | accepté dans la file |

## Comment ces valeurs ont été vérifiées

- Un **validateur de référence** (Node.js) applique les règles 3.1 et 3.2 de la spec dans l'ordre : les cas 1 à 14, 17, 18, 19 et 22 donnent exactement le statut et le code attendus, et les chaînes des cas 15 et 16 sont valides de bout en bout.
- Un **contrôle indépendant en Python** (`hashlib` et `cryptography`) retrouve les mêmes `id`, `hash`, `messages_hash` et signatures sur les 20 blocs et 16 messages valides de `chaines.json`, ainsi que le message du cas 19 et les clés publiques.
- Le bloc zéro, le message et le bloc 1 sont ceux de la spec (section 2) : `9af1db54…`, `28399f12…` et `446346ec…`.

Ces fichiers ne remplacent pas votre propre calcul : **chaque binôme doit les rejouer sur son nœud**, et idéalement en recouper une partie dans un autre langage.

## Points que ces vecteurs fixent (et que la spec laisse un peu ouverts)

- **Ordre des contrôles :** ceux de la spec, dans l'ordre. Par exemple, le cas 12 n'est refusé qu'à la règle 7 car le hash et la signature ont été recalculés.
- **Message déjà connu :** il donne `200 known` avant tout contrôle de la fenêtre de 60 s.
- **« Espace » au début ou à la fin de `content` :** le générateur refuse tout caractère blanc Unicode (`\s` en JavaScript). La spec dit seulement « espace » : à préciser (point à valider).
- **« Caractère de contrôle » :** catégorie Unicode `Cc` (U+0000 à U+001F et U+007F à U+009F).
- **Limite de débit (cas 17) :** appliquée par le nœud, pas par une règle de validité ; les 41 messages sont tous valides.
