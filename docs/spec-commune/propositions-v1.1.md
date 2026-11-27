# Propositions pour la spec v1.1 (binôme 3)

| Champ | Valeur |
| --- | --- |
| Proposé par | Binôme 3 (Dylan Belledent, Nicolas Rapuzzi--Pisarczyk) |
| Date | 23/11/2026, complété le 26/11/2026 après la relecture critique de l'équipe enseignante |
| Texte complet | [v1.1-proposition.md](v1.1-proposition.md) : la spec entière avec les corrections, chacune marquée de son repère (**[B1]**, **[I3]**, **[M5]**…) |
| Statut | **Validée par les trois binômes le 26/11/2026** (spec §11). Elle sera versée dans le dépôt commun dès sa création (O1) |
| Compatibilité | Aucun format ne change : les `id`, `hash`, signatures et vecteurs de la v1.0 restent justes. Seul le bloc zéro de la chaîne **réelle** est nouveau |

La v1.1 a été validée par les trois binômes le 26/11/2026 : elle remplace la v1.0.

## 1. Réponses aux questions de la relecture

Chaque question posée aux six reçoit une réponse proposée, avec l'endroit où elle est écrite dans la v1.1.

### B1 · La règle d'horloge est contournée, et la chaîne peut geler

| Question | Réponse proposée | Où |
| --- | --- | --- |
| Que fait un nœud qui découvre, au sondage, une chaîne plus haute dont la tête est datée dans le futur ? | Il la refuse : la borne future de 5 s (règle 9a) vaut maintenant **partout**, rattrapage compris. Il ignore ce `tip_hash` 5 minutes, puis réessaie ; il ne l'adopte que si l'heure l'a rattrapée et qu'elle est toujours meilleure. Les deux nœuds à l'heure continuent la chaîne sans elle | 3.2.9a, 3.3, 6.4, 7 |
| Que fait un nœud qui mesure 10 s d'écart avec ses pairs ? Continue-t-il à produire ? | Non. À plus de 2 s de **tous** les pairs qui répondent, c'est son horloge qui est fausse : il ne produit plus de bloc et ne signe plus de message, l'affiche à son binôme, et reprend dès que l'écart repasse sous 2 s avec un pair | 4.2 (condition 8), 6.4 |
| Quel est l'écart réel entre vos trois PC sur eduroam, et comment le savez-vous ? | **Pas encore mesuré** (point ouvert O4). Méthode proposée : comparer chaque poste à l'en-tête `Date` d'une réponse HTTPS (port 443, qui sort d'eduroam), puis relever l'écart que chaque nœud mesure avec ses pairs. On ne suppose plus que la synchronisation automatique marche : NTP passe par le port UDP 123, qui n'est pas dans la liste des ports qui sortent | 4.2 (limite), 10.3 étape 2, O4 |
| La liste des « limites acceptées » de 5.3 est-elle complète ? | Non, elle est complétée : l'horloge reste une confiance (deux nœuds faux de la même façon) ; trois horloges fausses deux à deux (par exemple +3 s, 0, −3 s) arrêtent la chaîne, puisque chaque nœud se croit faux : c'est accepté, car aucun bloc faux n'y entre et elle repart dès qu'une horloge est corrigée ; un nœud en retard se tait ; un nœud éteint garde ses messages. Parade : horloges réglées à la main au début de chaque séance | 5.3, 10.3 étape 2 |

Le contournement de la fenêtre des **messages** (nœud en retard de 2 min) est fermé de la même façon : `GET /messages/pending` applique maintenant la borne future de 60 s (3.1.7).

### B2 · Un nœud peut produire un bloc invalide

| Question | Réponse proposée | Où |
| --- | --- | --- |
| Quelles vérifications un nœud applique-t-il à son propre bloc avant de l'ajouter à sa chaîne ? | **Toutes** : les règles 1 à 10 de 3.2, comme pour un bloc reçu. Si une règle échoue, il n'ajoute pas le bloc, ne l'envoie pas et garde ses messages en file. En plus, une condition 7 dans 4.2 : le créneau en cours doit être strictement après celui de la tête | 3 (intro), 4.2 |

### I1 · « Stable quelques blocs plus tard »

| Question | Réponse proposée | Où |
| --- | --- | --- |
| Combien de blocs, exactement ? Que voit le visiteur entre-temps ? | Un bloc est **confirmé** avec 3 blocs au-dessus de lui, **ou** après 60 s sans changement si tous les pairs joignables annoncent la même tête. Ce que voit le visiteur avant est libre pour chaque binôme. Chez nous : « en attente », puis « dans un bloc » (forme provisoire, maillage filaire), puis « confirmé » | 1, 5.3 ; dossier §3 |
| Que devient le dernier message de la journée ? | Il est confirmé par la condition des 60 s, qui existe justement pour lui (pas de bloc vide) | 5.3 |
| Que devient `block_index` quand un message change de bloc après une fourche ? | Il est mis à jour. La position se lit toujours dans la chaîne actuelle, jamais dans l'index enregistré. Les valeurs de l'IA restent valables (rattachées à l'`id`) | 9 |

La contradiction entre 5.3 (« doit attendre ») et 9 (« IA tout de suite ») est levée : l'IA **peut** partir dès l'entrée dans un bloc, puisque sa valeur est rattachée à l'`id` et ne devient pas fausse après une fourche.

### I2 · Ni remise à zéro ni chaîne de test

| Question | Réponse proposée | Où |
| --- | --- | --- |
| Comment repart-on d'une chaîne vide, et comment est-on sûr qu'une ancienne chaîne ne revient pas ? | En changeant de bloc zéro : les six fixent une nouvelle heure d'ouverture de la chaîne réelle. L'ancienne chaîne a un autre `genesis_hash` et elle est ignorée (6.2), même plus haute | 2.3.1, 8.4 |
| Sur quelle chaîne jouez-vous vos essais, et avec quelles clés rejouez-vous les cas le 10/12 ? | Sur la **chaîne d'essai** (bloc zéro de la v1.0, `9af1db54…`), avec les **clés de test**. Un seul réglage choisit ensemble le bloc zéro et les clés. Les cas 1 et 9 donnent donc bien `201` | 2.3.1, 10.1, 10.3 |
| Que deviennent les messages d'essai dans vos trois œuvres ? | Rien : ils restent dans la chaîne d'essai, qui ne passe pas par les IA et n'alimente aucune œuvre. La chaîne réelle n'est ouverte qu'après les essais du 10/12 | 9, 10.3 étapes 7 à 9 |

Bonus : le bloc zéro réel porte l'**empreinte des trois clés publiques** dans `previous_hash`. Une clé mal copiée donne un autre `genesis_hash` et se voit tout de suite.

### I3 · L'expéditeur d'un échange

| Question | Réponse proposée | Où |
| --- | --- | --- |
| Comment un nœud sait-il quel pair vient de lui parler ? | Par l'adresse IP source de la requête, qui est l'adresse Tailscale de la machine. Chaque nœud tient une table « adresse → identifiant ». Elle sert aux limites par pair (8.2), au relais (6.4.2) et au journal (3.4). Ni `producer` ni `node` ne servent à ça. Pour les essais sur un seul PC, où tout vient de `127.0.0.1`, le réglage `essai` accepte une table « adresse:port → identifiant », et chaque nœud de test écoute et envoie depuis sa propre adresse de boucle locale (`127.0.0.1`, `.2`, `.3`) : le port source d'une requête est aléatoire, c'est donc l'adresse qui reconnaît l'expéditeur. Le réglage `reelle` refuse cette table | 1, 6.1 |

### I4 · Les cas de test

| Question | Réponse proposée | Où |
| --- | --- | --- |
| Sous quelle forme déposez-vous un vecteur, et comment un nœud le rejoue-t-il à l'heure simulée ? | Un fichier JSON par cas, au format déjà utilisé par nos cas 20 à 26 (`etat_initial.chaine`, `heure_du_noeud`, `etapes`, `attendu`). Chaque nœud doit pouvoir démarrer avec une horloge injectée et une chaîne chargée (mode test, réglage `essai`) | 10.2 ; [tests/vectors/README.md](../../tests/vectors/README.md) |
| Quel cas prouve qu'un bloc de trois messages, dont deux à la même milliseconde, a le même hash chez les trois ? | Nouveaux cas 28 (ordre juste, `201`) et 29 (ordre inversé, `BAD_MESSAGES`) | 10.2 |
| Qui porte les cas 15 et 16 ? | Binôme 1 pour le 15, binôme 2 pour le 16. La répartition est rééquilibrée (12, 12 et 10 cas, chacun avec des vecteurs et des scénarios), avec dépôt le lundi 07/12. Un dépôt le vendredi 04/12 demanderait d'écrire le script de calcul en S49 : nous demandons à l'équipe enseignante si c'est accepté (O6), et dans ce cas le lundi sert aux corrections | 10.2, O6 |

Le **cas 23** devient un vecteur avec sa propre heure simulée (`1796889672000`) : c'était déjà le cas dans notre fichier [cas-23.json](../../tests/vectors/cas-23.json), mais pas dans le tableau de la spec. Nouveaux cas : 27 (`400`), 28 et 29 (tri), 30 (280 emojis), 31 (contenu non NFC), 32 (fenêtre de 3.2.9), 33 (tête dans le futur), 34 (horloge fausse), 35 (auto-vérification), 36 (`503` avant `422`). Le **palier 2** (à deux) est avancé : dès qu'un couple est prêt, le mercredi 09/12 matin au plus tard.

### I5 · Les quotas de l'IA

| Question | Réponse proposée | Où |
| --- | --- | --- |
| Combien de messages par jour votre IA peut-elle lire, et que fait votre œuvre des suivants ? | La spec impose que chaque dossier le chiffre. **Chez nous :** 50 requêtes par jour, lots de 10 messages, donc **500 messages par jour au plus**, dont 30 requêtes réservées pour l'oral. Les autres messages ont des **valeurs locales** (sans IA, déterministes) et une forme « prévision » dans l'œuvre, qui se solidifie si l'IA répond plus tard | 9 ; dossier §5, charte §2 |
| Les messages d'essai comptent-ils dans ce quota ? | Non : ils sont sur la chaîne d'essai, qui ne passe pas par l'IA | 2.3.1, 9 |

### Faisabilité (partie 6 de la relecture)

La v1.1 ajoute un **socle du 10/12** (section 10.0) : ce qui doit marcher le jour de la jonction, et ce qui peut attendre la S2 sans casser la compatibilité (limites `429`, `413`, journal des doubles signatures, rattrapage depuis le dernier bloc commun, têtes ignorées 5 minutes).

## 2. Les points mineurs

| N° | Correction | Où |
| --- | --- | --- |
| M1 | La NFC est faite par le nœud d'origine et **n'est plus vérifiée à la réception** : sinon la validité dépendait de la version d'Unicode du langage (U+16D67 U+16D67 : NFC pour Python 3.13 et PHP 8.3, pas pour Node.js 22). Cas 31 | 2.1, 3.1 |
| M2 | « Un emoji = 1 » remplacé : un emoji composé compte plusieurs points de code (famille 5, drapeau 2, ❤️ 2) ; en JavaScript, `[...texte].length`. Cas 30 | 2.1 |
| M3 | Justification du port corrigée : le filtrage d'eduroam ne s'applique pas dans le tailnet ; 8080 est choisi parce qu'il est au-dessus de 1024 et courant | 6.2 |
| M4 | Capacité recalculée à trois nœuds (150 messages/min) **et à deux** (100 messages/min) | 8.2 |
| M5 | Tri **strict** : le même message deux fois dans un bloc donne `BAD_MESSAGES` (règle 7), `DUPLICATE` ne sert qu'aux blocs plus anciens | 3.2 |
| M6 | Ordre des refus fixé (`413`, `503`, `429`, `400`, puis validité) ; la minute des limites est une fenêtre glissante. Cas 36 | 6.2, 8.2 |
| M7 | « Strictement croissant » devient une règle de production du nœud d'origine, que les autres ne vérifient pas | 2.1 |
| M8 | Cas 20 : « en moins de 40 s » remplacé par « 60 s au plus », la valeur de la section 7. Cette proposition remplace l'ancienne **P1** de ce fichier | 10.2 |

Les options écartées restées vagues dans la table des décisions (7, 10, 11, 13, 16 et 18 : « Autre ordre », « Plus larges »…) sont remplacées par une option précise et sa raison.

## 3. Précisions déjà proposées le 23/11 (toujours valables)

### P2 · Les nombres décimaux

**Constat.** §2 dit que `1.0` est lu comme `1`. En JavaScript, `JSON.parse` ne fait pas la différence ; en Python, `json.loads` donne un `float`. Un nœud Python strict sur les types peut donc refuser un `timestamp` écrit `1796889603000.0`, et un nœud JavaScript l'accepter.

**Proposition.** Garder la règle, mais écrire : « Un nombre dont la partie décimale est nulle (`1.0`, `1e3`) est accepté comme l'entier correspondant ; un nombre avec une partie décimale non nulle donne `MESSAGE_FORMAT` ou `BLOCK_FORMAT`. Un nœud n'écrit jamais lui-même un entier avec `.0`. » Ajouter un cas de test.

### P3 · La limite de 1000 messages en file

**Constat.** §8.2 limite la file d'attente à 1000 messages (`429` sur `POST /messages`), mais ne dit pas ce qui se passe pour les messages récupérés par `GET /messages/pending` (§6.4.3) ou remis en file après une fourche (§5.2).

**Proposition.** « Au-delà de 1000 messages, le nœud ne prend plus de nouveau message, ni par `POST /messages` ni par `GET /messages/pending`. Les messages remis en file après une fourche sont **toujours** gardés, même au-delà de 1000 (ils étaient déjà acceptés). »

P2 et P3 sont recopiées dans [v1.1-proposition.md](v1.1-proposition.md) (§2 et §8.2).
