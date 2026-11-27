# Décisions

Un choix = un bloc court : contexte, décision, pourquoi, ce qui est écarté. Plus récent en haut.

## Modèle
```
### D-00X · Titre
- **Date :** AAAA-MM-JJ
- **Contexte :** …
- **Décision :** …
- **Pourquoi :** …
- **Écarté :** … (et pourquoi)
```

---

### D-031 · Les scripts des visuels de la bible DA sont des outils de dessin, pas du code du projet
- **Date :** 2026-11-27
- **Contexte :** la S48 est « sans code », mais deux fichiers du dépôt contiennent du JavaScript : `docs/esquisses/index.html` (les trois esquisses Three.js de la bible §7) et `docs/symbole/symbole.js` (la planche et les SVG du symbole, bible §5).
- **Décision :** ces fichiers restent dans `docs/`, comme **outils de dessin** qui produisent les images de la bible. Ils ne font partie ni du nœud, ni du worker, ni de l'application, et ne seront pas repris tels quels en S50 (le code de l'œuvre sera écrit dans `app/`).
- **Pourquoi :** la bible exige des règles génératives exactes (§6) et un symbole calculé (§5). Les dessiner à la main aurait donné des images qui ne correspondent pas aux formules ; les calculer prouve que les règles produisent bien ce que les esquisses montrent (même logique que la simulation de D-025 sur les formules). Le livrable reste l'image (PNG, SVG), pas le script.
- **Écarté :** dessiner les esquisses dans Figma (images non fidèles aux formules, impossible de vérifier 300 messages à la main) ; retirer les scripts du dépôt (on perdrait la preuve de la façon dont les images ont été faites).

### D-030 · Le masquage proposé par l'IA reste soumis à une décision humaine (proposée le 27/11/2026, à valider par Nicolas)
- **Date :** 2026-11-27
- **Contexte :** `masquer` est une valeur de l'IA. Un modèle peut masquer à tort, ou laisser passer une attaque sans mot interdit. Le binôme 2 prévoit un masquage manuel noté avec sa raison.
- **Décision :** un `masquer = true` de l'IA s'applique tout de suite, mais reste une proposition. Un membre du binôme peut le lever, ou masquer à la main ce qui a échappé au filtre et à l'IA. Chaque geste est noté dans la table `moderation` (qui, quand, pourquoi), et l'œuvre se reconstruit avec. Repris aussi du binôme 2 : un message qui laisse penser à une détresse n'est pas refusé, mais l'application affiche le 3114 et demande une seconde confirmation (charte §4.1).
- **Pourquoi :** la décision de cacher la parole de quelqu'un ne doit pas dépendre d'un modèle seul. Le test du 27/11 donne 90 masquages justes sur 90, mais sur un seul lot.
- **Écarté :** suivre l'IA sans recours (faux masquages définitifs) ; ne jamais écouter l'IA (le filtre par mots est trop pauvre) ; bloquer les messages de détresse (on ferait taire la personne).

### D-029 · Modèle fixe `baidu/ernie-5.5-flash-preview:free`, `openrouter/free` en secours (proposée le 27/11/2026, à valider par Nicolas)
- **Date :** 2026-11-27
- **Contexte :** `openrouter/free` choisit lui-même le modèle. Le test mesuré du prompt `p2` (17 envois, 9 réponses valides, [test-prompt/](test-prompt/README.md)) l'a vu répondre avec deux modèles différents, qui lisent différemment les messages ambigus, et dont l'un met 53 à 71 s, au-delà de notre délai de 20 s. Le binôme 2 avait écarté le routeur seul pour la même raison.
- **Décision :** `OPENROUTER_MODEL = baidu/ernie-5.5-flash-preview:free` ; l'unique nouvel essai passe par `openrouter/free`, avec un délai de 90 s. `model_used` est toujours enregistré (spec §9).
- **Pourquoi :** ernie a donné 4 réponses valides sur 4, en 5 à 8 s, avec l'injection résistée et le masquage juste. Un modèle fixe rend les valeurs comparables d'un message à l'autre. Le routeur garde l'œuvre vivante si ernie tombe.
- **Écarté :** `openrouter/free` seul (modèle changeant, parfois trop lent) ; `recursive/flint-v1.0:free` (juste, mais 53 à 71 s par lot) ; Gemma et Ling (impossible à mesurer : `429`).
- **Limite :** ernie est une version *preview*. La liste des modèles gratuits est revérifiée avant le 07/12, et le test est refait si ernie disparaît.

### D-028 · Duo typographique unifié : Bricolage Grotesque + Recursive (planches et application — validée à l'oral par Nicolas le 27/11/2026)
- **Date :** 2026-11-27
- **Contexte :** les planches de présentation utilisaient Fraunces / Quicksand / IBM Plex Mono (héritage de `D-020` écartée) alors que l'application utilisait Recursive (`D-009`), créant un décalage visuel.
- **Décision :** adopter **Bricolage Grotesque** (titres, nom *Terre commune*, consigne, repères) associé à **Recursive** (Linear pour l'interface et les textes, Mono pour les données techniques et crédits) sur **tous** les supports : application, moodboard Figma, planche symbole et bible DA (§4).
- **Pourquoi :** *Bricolage Grotesque* apporte un caractère sculptural et singulier cohérent avec le relief low-poly, tout en gardant *Recursive* (`D-009`) pour l'interface et la blockchain. Supprime toute incohérence entre les planches et l'application.
- **Écarté :** garder Fraunces / Quicksand sur les planches (incohérent avec §4).

### D-027 · Spec commune v1.1 en réponse à la relecture de l'équipe enseignante (validée par les trois binômes le 26/11/2026)
- **Date :** 2026-11-26
- **Contexte :** la relecture critique de la spec v1.0 (26/11/2026) relève deux défauts bloquants (B1 : la fenêtre d'horloge est contournée par le rattrapage et un PC en avance peut geler la chaîne des trois ; B2 : un nœud qui suit 4.2 à la lettre peut ajouter à sa chaîne un bloc que les autres refusent), cinq manques (stabilité, remise à zéro et chaîne de test, expéditeur, trous des cas de test, quotas de l'IA) et huit imprécisions.
- **Décision :** la v1.1 complète ([texte](spec-commune/v1.1-proposition.md), [réponses point par point](spec-commune/propositions-v1.1.md)) est **validée par les trois binômes le 26/11/2026** et remplace la v1.0 : borne future de 5 s pour tout bloc, rattrapage compris ; arrêt de la production et de la signature au-delà de 2 s d'écart avec tous les pairs ; validation par le producteur de son propre bloc (règles 1 à 10) ; « bloc confirmé » défini (3 blocs, ou 60 s et même tête chez les pairs) ; chaîne d'essai (bloc zéro v1.0, clés de test) séparée de la chaîne réelle, dont le bloc zéro porte l'empreinte des clés ; expéditeur reconnu par son IP Tailscale ; cas 23 avec son heure, cas 27 à 36, format de vecteur commun, répartition rééquilibrée ; quotas d'OpenRouter écrits ; NFC non vérifiée à la réception ; socle du 10/12. **Ajouts après relecture par Dylan (26/11) :** en mode test sur un seul PC, une table « adresse:port → identifiant » (réglage `essai` seulement) et une adresse de boucle locale par nœud, qui sert aussi à envoyer, pour que l'expéditeur reste reconnaissable ; l'arrêt de la chaîne quand les trois horloges sont fausses deux à deux est écrit dans les limites acceptées (5.3), avec le réglage des horloges à la main au début de chaque séance (10.3, étape 2) ; dépôt des vecteurs le lundi 07/12, avancé au vendredi 04/12 seulement si l'équipe enseignante accepte un script en S49 (O6).
- **Pourquoi :** la spec dit elle-même « si deux binômes n'obtiennent pas le même résultat, on corrige la spec avant le code ». Ces corrections ne changent aucun format ni aucun vecteur existant, donc elles passent avant le gel du 07/12 sans rien casser. B1 et B2 sont tranchés avant d'écrire la moindre ligne du nœud.
- **Écarté :** corriger seulement nos documents de binôme (le défaut est dans le contrat commun : notre nœud serait faux ou incompatible) ; modifier la v1.0 seuls (elle appartient aux six, spec §11) ; un bloc zéro unique remis à zéro en effaçant les fichiers (un seul oubli et l'ancienne chaîne revient) ; un en-tête `X-Node` réservé au mode test (le code testé ne serait plus celui du réseau) ; reconnaître l'expéditeur par son port source (tiré au hasard) ; élargir le seuil de 2 s pour éviter l'arrêt (des nœuds à l'horloge fausse produiraient de nouveau) ; imposer le dépôt du 04/12 (il obligerait à coder en S49 sans accord).
- **Statut :** **validée par les trois binômes le 26/11/2026** (remplace la v1.0).

### D-026 · Symbole : le cristal-île unifié, calculé depuis l'état de la chaîne
- **Date :** 2026-11-26 (affiné le 27/11/2026)
- **Contexte :** le symbole (C5) restait à faire depuis le retrait des pistes *Front commun* (D-018, D-021) et le pivot vers *Terre commune* (D-023). Le cours d'art génératif (« le logo algorithmique » : *Visit Nordkyn*, *MIT Media Lab*) montre des logos qui ont une règle plutôt qu'un dessin.
- **Décision :** une île low-poly **d'un seul bloc continu** (crête asymétrique au-dessus de l'eau, quille cristalline en dessous), **sans trait bleu horizontal** : la rupture mer/terre se lit directement par la couleur et les facettes. L'ensemble du massif émergé prend la **teinte unie de l'émotion majoritaire** des 6 derniers messages (`joie` Prairie, `calme` Sable, `tristesse` Mousse, `colere` Magma), sculptée par la lumière et l'ombre (`flatShading`) ; versant gauche en Brume si message masqué, versant droit filaire si prévision locale. Mulberry32 comme l'œuvre. Symbole de référence figé (graine `0x20264F04`) + logo vivant recalculé à chaque bloc (O10). Règles exactes : bible §5.
- **Pourquoi :** le symbole résume l'œuvre (mêmes facettes, lumière, couleurs et PRNG) sans effet patchwork ni trait parasite ; il est lisible de 16 à 500 px parce qu'il n'a que 10 facettes continues.
- **Écarté :** courbes de niveau ; phare ; double pyramide symétrique (confondue avec `noeud-c`) ; patchwork 6 couleurs + trait Lagon horizontal (peu lisible et cassait la silhouette) ; trois pics séparés (effet « cornet de glace »).
- **Remplace :** le brief de la bible v1.3 §5.

### D-025 · Relief recalibré par simulation, enrichissements séparés du socle (validée à l'oral par Nicolas le 27/11/2026)
- **Date :** 2026-11-25
- **Contexte :** une simulation des formules de la bible v1.1 (script jetable, hors dépôt) montre qu'aucune terre n'émerge avant une trentaine de messages (0 % à 10 messages), que le magma et la neige n'apparaissent jamais à 300, et qu'un message de tristesse en pleine mer ne laisse aucune trace. Cela contredit l'intention (« l'impact immédiat ») et l'esquisse à 10 messages.
- **Décision :** fond initial à `−0,4` au centre (`−0,9` au bord) ; élévations plus fortes (`joie` `1,00 + 0,80 × densite`, `calme` `0,70 + 0,50 × densite`, volcan `1,60 + 1,60 × densite`) ; amortissement seulement après 3 passages (`0,30` par passage) et compression vers `3,2` ; tristesse en pleine mer = haut-fond qui reste sous l'eau ; magma lié au cratère (`h ≥ 0,9`, `volc ≥ 0,80`) ; bandes de couleur décalées (prairie jusqu'à `2,0`, neige dès `2,9`) ; ordre des tirages du PRNG fixé ; balises limitées aux 60 derniers messages. Rivière, météorite, champignons et animaux passent en enrichissements (bible §6.5, O8), avec une règle d'arrêt pour la rivière. Résultat simulé : une île dès le premier message, ≈ 9 % de terre à 10 messages, ≈ 45 % à 300 avec des biomes variés (bible §6.2).
- **Pourquoi :** la bible doit produire ce que montrent les esquisses ; une règle vérifiée par simulation évite de découvrir le problème en S50. Sortir les enrichissements du socle garde une œuvre complète même si O8 n'est pas fait.
- **Écarté :** passer la grille à `64 × 64` (plus de détail, mais toutes les références et le budget à revoir) ; garder la rivière dans les règles de base (une boucle sans arrêt et une tâche « en plus » dont dépendrait la règle principale) ; une balise par message (à 300, la carte redeviendrait un graphique de points).
- **Remplace :** les valeurs numériques de la bible v1.1 §6.1 à §6.4.

### D-024 · Rendu de l'œuvre : Three.js (WebGL) en low-poly à la place de Canvas 2D (validée à l'oral par Nicolas le 27/11/2026)
- **Date :** 2026-11-25
- **Contexte :** avec le pivot vers *Terre commune* (D-023), l'œuvre devient une carte marine 3D procédurale (heightmap vivante, reliefs, océan animé, caméra orbitale).
- **Décision :** utiliser **Three.js (WebGL)** en esthétique *low-poly / flat-shading*, servi localement via `<script type="importmap">` (ES modules natifs : `three`, `OrbitControls`, `ImprovedNoise`, sans bundler ni CDN externe), avec un budget géométrique borné (`48 × 48` sommets, éléments instanciés via `InstancedMesh`).
- **Pourquoi :** vraie 3D fluide sur GPU, éclairage directionnel, brouillard atmosphérique et caméra orbitale 360° immédiats, tout en restant 100 % JavaScript natif côté navigateur.
- **Écarté :** Canvas 2D (insuffisant et peu esthétique pour un terrain 3D) ; WebGL brut (trop verbeux pour S50) ; Unity ou Babylon.js (trop lourds).
- **Remplace :** la ligne « Canvas 2D » de D-004 (tout le reste de D-004 — Node.js 24, Express 5, `better-sqlite3`, SSE — reste inchangé).

### D-023 · Pivot artistique : *Terre commune*, carte marine 3D procédurale vivante (validée à l'oral par Nicolas le 27/11/2026)
- **Date :** 2026-11-25
- **Contexte :** après plusieurs essais de la piste météo 2D (*Front commun* : spirale, 4 polices, ciel à l'encre), nous constatons que le rendu reste trop proche d'un graphique de données et manque d'impact visuel.
- **Décision :** l'œuvre devient ***Terre commune*** : un océan vierge en 3D dont le fond marin (heightmap procédurale `48 × 48` avec saturation et masque côtier) se sculpte durablement à chaque message. La joie fait grandir l'île (forêts, champignons, animaux, voiliers, soleil) ; le calme façonne des criques et phares ; la tristesse déclenche la pluie et creuse rivières ou lagons ; la colère déclenche l'orage, la houle, des volcans ou des impacts de météorite. La charte passe à `emotion` (`joie`, `calme`, `tristesse`, `colere`, lexique `l2` émotionnel, prompt `p2`). Chaque message laisse une balise forme + couleur de son nœud (pyramide Cyan, cube Ambre, losange Violet). Retour à **Recursive** (D-009).
- **Pourquoi :** visuellement plus fort, immédiatement lisible, 100 % génératif et déterministe (sera vérifié en S50 par une empreinte SHA-256 de la heightmap, backlog T6), et incarne physiquement l'immuabilité de la blockchain.
- **Écarté :** garder la météo 2D en spirale (D-003, D-008, D-013 à D-015, D-022) ; les 4 polices par temps (D-020) ; poser des îles préfabriquées identiques ; la couleur Corail `#FB7185` pour `noeud-c` (trop proche de l'erreur `#F47280`, remplacée par Violet `#A78BFA`).
- **Remplace :** D-003, D-008, D-013 à D-015, D-020, D-022.

### D-022 · DA : un ciel tracé à l'encre sous la spirale (écartée le 25/11/2026 par D-023)
- **Date :** 2026-11-25
- **Contexte :** Dylan trouve le rendu « une forme par message sur fond uni » pas assez artistique. Plusieurs prototypes jetables (hors dépôt) ont été essayés : particules en cyclone, lavis, isobares, cyclone 3D, ciel peint à la manière de *La Nuit étoilée*. Dylan aime le ciel de Van Gogh, mais l'œuvre ne doit pas en être un pastiche.
- **Décision :** sous la spirale, un calque de traits d'encre fins qui suivent un vent fait d'un tourbillon par message récent (force = `energie`, rayon = `densite`, couleur des traits proches = `chaleur`). Le temps du ciel (bible §4.2) change l'écriture : longs traits lisses (ensoleillé), bandes (nuageux), hachures obliques (pluie), lignes presque immobiles et nappes (brouillard). Deux voisins de chaleur opposée (écart ≥ 0,4) forment un front avec ses symboles. À son arrivée, un message s'écrit dans l'œil dans la police de son temps, puis se dissout en traits. Règles complètes : bible §6.3.
- **Pourquoi :** le ciel relie les messages entre eux (« ne pas être seul », bible §1) et donne un moment fort à la démonstration sans aucune requête d'IA. Il ne change aucune règle existante (formes, couleurs, spirale, prévision, satellites, brume) et n'ajoute aucune couleur. On garde le mouvement de Van Gogh, mais pas sa matière, sa palette, son point de vue ni sa composition. Les fronts rendent visible le nom de l'œuvre.
- **Écarté :** la touche épaisse et la palette de Van Gogh (pastiche) ; un paysage de Béziers vu du sol (quitte la vue satellite) ; un cyclone 3D en WebGL (dépendance, lisibilité, fluidité sur le portable de démonstration) ; une palette par temps (la couleur aurait deux sens) ; un ciel qui remplace les formes (on perd l'élément, la prévision et l'origine).
- **Conséquences :** une exception à « l'œuvre reste sans texte » (bible §4.3) pendant l'arrivée d'un message ; T6 compare des captures faites avec « réduire les animations » ; tâches O11 et O12 (« en plus ») ; esquisses à refaire avec le ciel (bible §7).

### D-021 · Symbole : l'œil du cyclone, une spirale de 34 points (écartée le 24/11/2026)
> **Écartée** le 24/11/2026 : Dylan ne la trouve pas belle ; toutes les pistes de symbole sont retirées du dépôt, le symbole est à refaire.

- **Date :** 2026-11-24
- **Contexte :** Dylan trouve le nuage-bulle v6 laid et veut un symbole algorithmique (cours d'art génératif : *Visit Nordkyn*, un logo qui suit la météo).
- **Décision :** 34 points rangés par l'angle d'or (rayon `86 × √((k + 0,5) / 34)`, angle `n × 137,5078°`), le plus récent au centre entouré d'un anneau (l'œil), bras du cyclone entre `k` et `k + 13`. Logo fixe : du chaud au centre au froid au bord. Logo vivant : les 34 derniers messages (couleur = `chaleur`, taille = `densite`, creux = prévision, brume = masqué). Le nombre de points suit Fibonacci selon la taille : 34, 21, 13, 8 (bible §5).
- **Pourquoi :** même règle que la spirale de l'œuvre (D-013), donc le symbole explique l'œuvre ; la règle de Fibonacci répond au défaut des spirales v1 et v2 (illisibles en petit) ; le logo vivant montre l'état réel de la chaîne.
- **Écarté :** le nuage-bulle v6 (D-018) ; le nuage-bulle déformé (v7) ; une silhouette de nuage remplie de points (v8) ; une forme par `theme` pour chaque point (gardée comme variante pour les grandes tailles).
- **Remplace :** D-018.

### D-020 · Typographie : quatre polices, une par temps (écartée le 25/11/2026 par D-023)
- **Date :** 2026-11-24
- **Contexte :** avec Recursive seule (D-009), le texte restait neutre alors que l'œuvre traduit chaque message en temps. Dylan veut une police différente selon les interactions.
- **Décision :** quatre temps typographiques. ☀ Ensoleillé : Fraunces ; ☁ Nuageux : Quicksand ; ☂ Pluie : Special Elite ; ≋ Brouillard : IBM Plex Mono. Le temps se lit sur `masquer`, `theme`, `chaleur` et `energie` avec une règle à six étapes et six vecteurs (bible §4.1). La police change pendant l'écriture (prévision), quand l'IA répond (prévu → observé) et quand le ciel change (consigne et bulletin). L'interface, les erreurs et les données gardent une police fixe (Quicksand, Plex Mono) ; le nom de l'œuvre est en Fraunces (bible §4.3).
- **Pourquoi :** le visiteur voit son message changer de temps pendant qu'il l'écrit, ce qui rend visible ce que l'IA en tirera ; le passage prévu → observé répète celui des pointillés au plein dans l'œuvre. Chaque police porte une sensation, pas un rôle (titre, texte, code), ce qui répond au reproche « modèle de site » fait à la v0.1.
- **Écarté :** Recursive seule (un continu, pas quatre temps reconnaissables) ; une police par élément ou par nœud (déjà dits par la forme et les satellites) ; une cinquième police pour l'orage (il passe par un tremblement de 300 ms).
- **Remplace :** D-009, si Nicolas valide.

### D-019 · OpenRouter : aucun partage de données, refus de collecte à chaque requête
- **Date :** 2026-11-23
- **Décision :** sur le compte OpenRouter, tous les réglages de partage sont désactivés (*Allow free endpoints that train on request data*, *publish prompts*, *paid endpoints that train*, *1% data discount*). Le worker ajoute `"provider": { "data_collection": "deny" }` à chaque requête (charte §4.3).
- **Pourquoi :** les messages sont écrits par des visiteurs et restent dans la chaîne pour toujours ; ils n'ont pas à servir à entraîner un modèle. L'essai du 23/11 montre que les modèles gratuits répondent quand même (`openrouter/free` → `recursive/flint-v1.0:free`).
- **Écarté :** autoriser l'entraînement par les fournisseurs gratuits (le réglage d'origine du compte : plus de modèles, mais pas nécessaire) ; activer la conservation nulle (*Zero Data Retention*), qui risquerait de bloquer la plupart des modèles gratuits.

### D-018 · Symbole : un nuage-bulle et trois points (écartée le 24/11/2026)
> **Remplacée** le 24/11/2026 par D-021 (spirale de 34 points, l'œil du cyclone).

- **Date :** 2026-11-23
- **Décision :** le symbole est un nuage en forme de bulle de discussion, avec les trois points « quelqu'un écrit… » en bleu, jaune et orange (bible §5, v6). Les points servent aussi d'animation quand l'IA lit un message.
- **Pourquoi :** il se comprend sans explication (météo, messages, trois), il reste lisible à 16 px avec une seule version, et il sert aussi dans l'interface.
- **Écarté :** la spirale de points (v1 et v2) ; le point triple (v3) ; les courbes de niveau (v4 et v5) ; un nuage seul (trop banal).

### D-017 · Planning de la semaine du 07/12 : palier 1 en deux temps, estimations du nœud relevées
- **Date :** 2026-11-23
- **Contexte :** le palier 1 du lundi annonçait des cas HTTP (1, 2, 9, 17, 22) alors que les routes et le stockage étaient prévus le mardi ; le palier 2 du mercredi demandait l'écoute sur l'IP Tailscale, prévue le jeudi ; le rattrapage (`SYNCING`, fourches, remise en file) était estimé à 3 h.
- **Décision :** lundi, les cas de calcul et de validité par appel de fonction ; mardi, les cas par HTTP. L'écoute sur `HOST_NODE` passe dans N5, N9 ne garde que les nouvelles tentatives. N7 passe à 5 h (2 h le jeudi matin). Le worker est coupé en A2a (IA simulée, S50) et A2b (appel réel, lun. 11/01). Dylan : 33 h en S50 (2 h de marge).
- **Pourquoi :** un plan sans marge dont les dépendances se contredisent échoue dès le mardi.
- **Écarté :** garder les estimations d'origine (aucune marge) ; laisser A2 en entier en S50 (36 h pour Dylan avec le nouveau N7, soit 1 h de plus que la semaine).

### D-016 · Valeurs locales calculées par le serveur de l'application, pas par le worker
- **Date :** 2026-11-23
- **Décision :** fonction pure du texte et de l'`id` (charte §2), calculée à la volée, sans écriture en base ; seules les valeurs de l'IA sont stockées dans `ai_results`. `values_source` est un champ calculé (dossier §4).
- **Pourquoi :** si le worker plante, plus aucune forme n'aurait de « prévision », ce qui contredit « l'œuvre n'attend jamais l'IA ». Le calcul est déterministe : il n'a pas besoin d'être stocké.
- **Écarté :** valeurs locales écrites par le worker (point de défaillance en plus, lignes inutiles en base).

### D-015 · Échelle de la spirale mesurée : `c = 0,028`, profondeur 300, rayons de 0,6 % à 1,5 % (remplacée par D-023)
- **Date :** 2026-11-23
- **Contexte :** avec `c = 0,023` et des rayons jusqu'à 2 %, le voisin le plus proche est à 2,3 % pour un diamètre de forme de 4 % : les formes se chevauchaient, contrairement à ce que disait la bible (« espacement d'environ 4 % » est l'espacement moyen).
- **Décision :** `c = 0,028` (voisin le plus proche à 2,8 %, médiane 4,7 %), vieillissement de `k = 100` à `k = 300`, fondu au-delà, rayons de 0,6 % à 1,5 % du petit côté, mélange additif pour les contacts (bible §6.1 et §6.2).
- **Écarté :** garder 400 messages visibles (formes trop serrées ou trop petites) ; empêcher tout contact (formes minuscules).

### D-014 · Couleurs interpolées en OKLab, pas en OKLCH (remplacée par D-023)
- **Date :** 2026-11-23
- **Contexte :** en OKLCH, l'interpolation entre le gris-lavande (teinte 299°) et l'ocre (77°) passe par le rose (`#e69fab` au milieu), presque la couleur de l'alerte (`#F28B9B`).
- **Décision :** interpolation linéaire en OKLab, 11 vecteurs de couleur dans la bible §3.1 (le milieu lavande-ocre devient `#ceaf97`), courbe en S `v²(3 − 2v)`.
- **Pourquoi :** pas de rose parasite, et pas de sens de rotation de teinte à définir : le même résultat dans tous les langages.
- **Écarté :** OKLCH ; la teinte HSL linéaire (le vert du milieu).

### D-013 · Spirale : l'angle suit le rang absolu, le rayon suit l'âge (remplacée par D-023)
- **Date :** 2026-11-23
- **Contexte :** en v0.2 (D-008), l'angle suivait l'âge (`k × 137,5°`) : à chaque nouveau message, tous les messages se décalaient de 137,5°, soit en moyenne 57 % de la largeur de l'écran (86 % au plus, calcul sur 400 messages) : un tourbillon permanent, contraire à « calme, lent ».
- **Décision :** angle `n × 137,5°` avec `n` le rang absolu depuis le premier message, rayon `0,028 × √k` avec `k = N − 1 − n` l'âge. Un message ne change jamais d'angle ; il glisse vers le bord (0,16 % de la largeur en moyenne par message).
- **Pourquoi :** c'est la croissance d'un tournesol (les nouveaux éléments naissent au centre et s'écartent) et la seule règle où « les anciens s'éloignent » est vrai sans agitation.
- **Écarté :** l'angle selon l'âge (tourbillon) ; le rayon selon le rang absolu (les anciens au centre, v0.1).

### D-012 · Les anciens vecteurs et exemples sont archivés, pas supprimés
- **Date :** 2026-11-23
- **Contexte :** `tests/vectors/` (v0.5, avec `author`) et `docs/spec-commune/exemples/` (v0.2, autre bloc zéro) ne correspondent plus à la spec v1.0, mais pouvaient être pris pour la référence.
- **Décision :** déplacés dans `docs/spec-commune/archives/` avec un README « périmé » ; `tests/vectors/` ne contient plus que nos cas 20 à 26 pour la v1.0.
- **Pourquoi :** personne ne peut les utiliser par erreur, et l'historique reste visible pour la conduite de projet.
- **Écarté :** les supprimer (perte de l'historique) ; les régénérer tous (les cas 3 à 19 reviennent aux deux autres binômes, spec §10.2).

### D-011 · Un refus de l'IA sur un lot ne masque pas les messages du lot
- **Date :** 2026-11-23
- **Contexte :** avec des lots de 10 messages, un refus du modèle ne dit pas quel message l'a gêné.
- **Décision :** valeurs locales pour tout le lot, sans masquage (le filtre local s'applique quand même) ; au retraitement, le lot est coupé en deux. Un message seul refusé est masqué.
- **Pourquoi :** masquer les dix cacherait neuf messages innocents.
- **Écarté :** retraiter les dix messages un par un (10 requêtes sur 50 par jour).

### D-010 · Valeurs locales : calcul exact et lexique de 50 entrées
- **Date :** 2026-11-23
- **Décision :** formule fixe et lexique `l1` (charte §2).
- **Pourquoi :** l'œuvre doit se reconstruire à l'identique sans IA, et le quota fait que beaucoup de messages n'auront que ces valeurs.
- **Écarté :** une bibliothèque d'analyse de sentiment (lourde, souvent en anglais) ; un grand lexique (long à tester).

### D-009 · DA : une seule famille typographique, Recursive (complétée le 27/11/2026 par D-028)
> **Complétée** le 27/11/2026 par `D-028` : **Bricolage Grotesque** est ajoutée pour les titres, la consigne et les repères ; **Recursive** reste utilisée en Linear (interface/messages) et Mono (données techniques).

- **Date :** 2026-11-23
- **Décision :** Recursive en trois réglages (Casual pour la poésie, Linear pour le texte, Mono pour les données), bible §4.
- **Pourquoi :** Fraunces, Inter et Plex Mono sont très répandues et faisaient « modèle ». Une famille, trois réglages : « une chaîne, trois regards ». Un seul fichier variable.
- **Écarté :** garder les trois familles ; une écriture manuscrite.

### D-008 · DA : le plus récent au centre de la spirale (remplacée par D-023)
> **Corrigée en partie** le 23/11/2026 par D-013 (l'angle suit le rang absolu, plus l'âge : « tourne d'un cran » devient « glisse d'un cran ») et D-015 (profondeur 300 au lieu de 400).

- **Date :** 2026-11-23
- **Décision :** le rang est compté depuis le message le plus récent (`k = 0` au centre). À chaque message, la spirale tourne d'un cran ; au-delà de `k = 400`, fondu dans le fond (bible §6.1). L'image devient celle d'une dépression vue par satellite.
- **Pourquoi :** la v0.1 mettait les anciens au centre, ce qui contredisait l'esquisse et l'intention, et la spirale n'avait pas de taille maximale.
- **Écarté :** un rayon recalculé selon le nombre de messages (toutes les positions changent d'échelle) ; une grille.

### D-007 · DA : un canal visuel par information (validée par Nicolas, bible v0.3)
- **Date :** 2026-11-23
- **Décision :** le contour ne dit plus que la prévision (pointillés) ; le nœud d'origine passe aux satellites (0, 1 ou 2 points). Les couleurs de l'œuvre ne sont jamais utilisées dans l'interface, qui a ses gris et une seule couleur d'alerte.
- **Pourquoi :** en v0.1, le contour portait deux informations (un message d'un autre nœud avec des valeurs locales n'avait pas de dessin défini), et l'ocre voulait dire à la fois « tiède » et « attention ».
- **Écarté :** une texture par nœud (illisible à 1 % de l'écran) ; une couleur par nœud (la couleur est la `chaleur`).

### D-006 · IA par lots de 10, compteur journalier et retraitement des seuls échecs
- **Date :** 2026-11-23 (précisée le 27/11/2026 pour la spec v1.1 §9)
- **Contexte :** offre Free d'OpenRouter, 20 req/min et 50 req/jour, et chaque nœud traite tous les messages de la chaîne réelle. La spec §9 indique qu'un message ne passe qu'une fois par l'IA.
- **Décision :** lots de 10 (500 messages/jour au mieux, 250 au pire avec 1 nouvel essai, débit max 20 messages/min) ; envoi à 10 messages ou après 45 s ; 30 s au moins entre deux requêtes ; un seul nouvel essai ; compteur en base (dossier §5). **Retraitement :** la règle « une seule fois par l'IA » vaut pour un traitement réussi (`status = ok`) ; seuls les échecs (`timeout`, `invalid_format`, `refused` sur lot) ou les messages en attente de quota sont retraités quand le quota revient. Un message déjà en `status = ok` ne repasse jamais.
- **Écarté :** un appel par message (quota épuisé en moins d'une heure) ; un crédit payant (le sujet impose les modèles gratuits) ; retraiter des messages déjà en `status = ok` (gaspillage de quota et contraire à spec §9).

### D-005 · Trois processus (nœud, worker IA, serveur de l'application) et SQLite en WAL
- **Date :** 2026-11-23
- **Décision :** voir dossier §2 et §4.
- **Pourquoi :** une panne ou une lenteur de l'IA ne doit jamais vider un créneau de 20 s ; SQLite tient en un fichier et accepte plusieurs processus en mode WAL.
- **Écarté :** un seul processus (un plantage vide un créneau) ; MySQL ou PostgreSQL (un serveur à installer pour rien) ; des fichiers JSON (écritures non sûres).

### D-004 · Node.js 24 partout, Express 5, `better-sqlite3`, SSE, Canvas 2D (Canvas 2D remplacé par Three.js en D-024)
- **Date :** 2026-11-23
- **Décision :** JavaScript pour le nœud, le worker, le serveur et l'œuvre (dossier §7).
- **Pourquoi :** un seul langage et un seul outillage ; SHA-256 et Ed25519 sont dans `node:crypto` ; le code de calcul des `id` est partagé entre le nœud et l'application. SSE suffit pour un flux à sens unique ; Canvas 2D sans dépendance.
- **Écarté :** PHP et Python (aucun gain pour nous) ; WebSocket (flux à double sens inutile) ; p5.js et WebGL ; React et Vue (un seul écran).

### D-003 · Œuvre : météo collective, *Front commun* (remplacée le 25/11/2026 par D-023)
- **Date :** 2026-11-23
- **Décision :** chaque message est un temps qui passe ; l'œuvre est une dépression vue par satellite (bible §1).
- **Pourquoi :** la consigne « Quel temps fait-il en vous ? » et l'œuvre parlent la même langue ; « front » dit à la fois la météo et le collectif.
- **Écarté :** un jardin (trop lent), une ville (trop chargée).

### D-002 · La spec commune vit dans un Google Doc partagé
> **Remplacée** le 23/11/2026 par la décision 14 de la spec v1.0 : la référence est un dépôt GitHub privé commun aux six.

- **Date :** 2026-11-23
- **Contexte :** la spec est écrite à six (3 binômes) et rendue jeudi 26/11 à 12h30 ; il faut un seul document de référence.
- **Décision :** un Google Doc unique, édité à six. Lien : _à renseigner dans docs/02-spec-commune.md_.
- **Pourquoi :** écriture simultanée à six, très rapide, pas de friction Git pour les non-techniques de l'équipe.
- **Écarté :** dépôt GitHub partagé à part (neutre et bien versionné, mais plus long à mettre en place et à écrire à six en direct) ; dossier dans le dépôt d'un binôme (un binôme « propriétaire »).
- **Limite et parade :** historique/versions peu exploitables → on **nomme les versions** dans Google Docs (Fichier › Historique des versions › Nommer la version actuelle : `v0.1`, `v1.0`…) et on **dépose un export** (`.md` ou PDF) dans `docs/spec-commune/` du dépôt à chaque version. La version, la date et les six noms figurent en tête du document.

### D-001 · Documents en Markdown versionnés sur GitHub
- **Date :** 2026-11-23
- **Contexte :** cinq rendus en S48, dont des PDF ; il faut un suivi clair et historisé.
- **Décision :** on rédige en Markdown dans `docs/` puis on exporte en PDF au moment du rendu.
- **Pourquoi :** versionné, relisible à deux, diff lisible.
- **Écarté :** Google Docs seul (historique moins exploitable, pas relié au code).
