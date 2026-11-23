# Propositions pour la spec v1.1 (binôme 3)

| Champ | Valeur |
| --- | --- |
| Proposé par | Binôme 3 (Dylan Belledent, Nicolas Rapuzzi--Pisarczyk) |
| Date | 23/11/2026 |
| Statut | **Proposition**, à ouvrir en pull request dans le dépôt commun (spec §11) : il faut l'accord d'un membre de chaque binôme |
| Nature | Trois **précisions** : elles ne changent aucun format ni aucun hash, et passent donc avec la règle ordinaire, même après le gel du 07/12 |

Ce fichier ne modifie pas la spec : la copie [spec-commune.md](../spec-commune.md) reste la v1.0.

## P1 · Cas 20 : d'où viennent les 40 s

**Constat.** Le cas 20 demande une sortie de `SYNCING` « en moins de 40 s », alors que la règle de sortie (§7.2) peut durer environ 60 s quand aucun pair ne répond. Deux binômes peuvent lire ces deux chiffres comme contradictoires.

**Proposition.** Ajouter au cas 20 : « Les trois nœuds écoutent déjà sur le port 8080 au moment du test ; un pair qui répond sans être strictement meilleur donne une sortie immédiate (§7.2). Les 40 s couvrent un démarrage à quelques secondes d'intervalle. »

## P2 · Les nombres décimaux

**Constat.** §2 dit que `1.0` est lu comme `1`. En JavaScript, `JSON.parse` ne fait pas la différence ; en Python, `json.loads` donne un `float`. Un nœud Python strict sur les types peut donc refuser un `timestamp` écrit `1796889603000.0`, et un nœud JavaScript l'accepter.

**Proposition.** Garder la règle, mais écrire : « Un nombre dont la partie décimale est nulle (`1.0`, `1e3`) est accepté comme l'entier correspondant ; un nombre avec une partie décimale non nulle donne `MESSAGE_FORMAT` ou `BLOCK_FORMAT`. Un nœud n'écrit jamais lui-même un entier avec `.0`. » Ajouter un cas de test.

## P3 · La limite de 1000 messages en file

**Constat.** §8.2 limite la file d'attente à 1000 messages (`429` sur `POST /messages`), mais ne dit pas ce qui se passe pour les messages récupérés par `GET /messages/pending` (§6.4.3) ou remis en file après une fourche (§5.2).

**Proposition.** « Au-delà de 1000 messages, le nœud ne prend plus de nouveau message, ni par `POST /messages` ni par `GET /messages/pending`. Les messages remis en file après une fourche sont **toujours** gardés, même au-delà de 1000 (ils étaient déjà acceptés). »
