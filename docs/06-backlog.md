# Backlog et plan S50 / S2

| Champ | Valeur |
| --- | --- |
| Binôme | n°3 · Dylan Belledent, Nicolas Rapuzzi--Pisarczyk · `noeud-c` |
| Version | **2.1** · 27/11/2026 (historique des versions : [journal.md](journal.md)) |
| Rendu | PDF ou lien, vendredi 27/11/2026, 17h |
| S'appuie sur | [dossier](03-dossier-binome.md) v0.15 (§10 : répartition), **spec commune v1.1** (validée le 26/11/2026, §10 : paliers), [bible DA](05-bible-da.md) v1.5, [charte](04-charte-editoriale.md) v1.5 |

> **Test :** en lisant ce plan, on sait ce qui doit fonctionner chaque soir, et qui s'en occupe.

**Estimations** en heures de travail (une journée de SAÉ ≈ 7 h par personne). **Priorité :** **I** = indispensable (sans elle, la démo ou la jonction échoue) · **+** = en plus si le temps le permet. **Statut :** ☐ à faire · ◐ en cours · ☑ fait.

**Capacité.** S50 : 5 jours × 7 h = 35 h chacun. S2 : 4 jours de travail + l'oral, soit environ 28 h chacun. Le backlog indispensable de S50 remplit **33 h pour Dylan (2 h de marge) et 35 h pour Nicolas (pas de marge)** : le rattrapage (N7) est passé de 3 h à 5 h, et l'appel réel à l'IA (A2b) est passé à la S2, avec une IA simulée en S50 (A2a). N7 est coupé en deux : 3 h le mercredi (7 h de tâches ce jour-là pour Dylan) et les 2 dernières heures le jeudi matin, avant la jonction. La règle « si le jeudi échoue » (section 3) couvre le reste. Tout le « en plus » attend la S2.

---

## 1. Le backlog

### S48 · conception (sans code)

| # | Tâche | Qui | Est. | Prio. | Échéance | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| C1 | Spec commune v1.0/v1.1, déposée sur Moodle | les six | — | I | jeu. 26/11, 12h30 | ☑ déposée sur Moodle (v1.1 validée le 26/11) |
| C2 | Nos vecteurs de test 20 à 26 (spec v1.0) | Dylan | 3 h | I | 23/11 | ☑ ([tests/vectors/](../tests/vectors/README.md)) |
| C3 | Relire la bible DA v1.5 (*Terre commune*) et valider à deux avant l'export PDF | à deux | 1 h | I | ven. 27/11 | ☑ validée à l'oral par Nicolas le 27/11 |
| C4 | Nouveau moodboard *Terre commune* dans Figma (références 3D/archipel, licences exactes, palette §3.1, spécimen typo) | D + N | 2 h | I | jeu. 26/11 | ☑ fait dans Figma et exporté ([moodboard-planche.png](moodboard-terre/moodboard-planche.png)) |
| C5 | Nouveau symbole *Terre commune* : le cristal-île unifié, règles exactes, déclinaisons (bible §5, D-026) | D + N | 2 h | I | jeu. 26/11 | ☑ planche et SVG dans [symbole/](symbole/planche-symbole.png) |
| C6 | Trois esquisses 16:9 (océan vide, 10 messages, 300 messages) | D + N | 3 h | I | ven. 27/11 | ☑ produites en HTML et exportées ([esquisses/](esquisses/1-vide.png)) |
| C7 | Test de la charte v1.5 auprès de 3 personnes (charte §3) | à deux | 1 h | I | jeu. 26/11 | ◐ fiche prête ([test-charte.md](test-charte.md)), test à faire passer |
| C8 | Vérifier le réglage de confidentialité d'OpenRouter et l'écrire (charte §4.3) | Dylan | ½ h | I | mer. 25/11 | ☑ réglages relevés et désactivés, essai réussi avec `data_collection: "deny"` (charte §4.3, D-019) |
| C9 | Relire dossier v0.14 et charte v1.4 | Nicolas | 1 h | I | ven. 27/11 | ☑ validés à l'oral par Nicolas le 27/11 |
| C16 | Test mesuré du prompt `p2` : un lot de 10 messages, 17 envois, choix du modèle (D-029) | Dylan | 1 h | I | ven. 27/11 | ☑ [test-prompt/](test-prompt/README.md) |
| C15 | Relire les ajouts du 27/11 après-midi : dossier v0.15 et charte v1.5 (modèle fixe `D-029`, contrôle humain du masquage `D-030`, message de détresse, test du prompt) | Nicolas | ½ h | I | ven. 27/11, avant 17h | ☐ |
| C10 | Export PDF des 4 rendus (schéma `architecture.svg`, polices intégrées) | Dylan | 2 h | I | ven. 27/11, avant 17h | ☐ |
| C11 | Partage de la spec commune aux six (finalement en PDF sur Moodle / Discord, pas de dépôt commun créé) | les six | — | I | ven. 27/11 | ☑ fait (PDF v1.1 partagé, pas de dépôt commun) |
| C12 | Proposer la spec v1.1 aux six : réponses à la relecture de l'équipe enseignante ([réponses](spec-commune/propositions-v1.1.md), [texte complet](spec-commune/v1.1-proposition.md)) | Dylan | 3 h | **I** | ven. 27/11 | ☑ **validée par les trois binômes le 26/11/2026** (remplace la v1.0) |
| C13 | Nos nouveaux vecteurs v1.1 : 30, 32 et 36, cas 20 et 23 mis à jour (`version_spec` 1.1) | Dylan | 2 h | I | lun. 07/12 (ven. 04/12 si O6 est accepté) | ☐ |
| C14 | Demander à l'équipe enseignante si un script de calcul des vecteurs est accepté en S49 (spec v1.1, point ouvert O6) ; sans accord, dépôt des cas le lun. 07/12 | Dylan | ¼ h | I | ven. 27/11 | ☐ |

### Nœud (spec)

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| N1 | Structure du dépôt, `.env.example`, script qui lance et relance les trois processus, **mode test** : **horloge injectable** et **chargement d'une chaîne depuis `chaines.json`** (spec v1.1 §10.2) | Nicolas | 2 h | I | lun. 07/12 |
| N2 | Empreintes, signatures, bloc zéro : retrouver les valeurs de la spec §2 ; bloc zéro d'essai et réel, réglage `CHAINE` (v1.1 §2.3.1) | Dylan | 2 h | I | lun. 07/12 |
| N3 | Validité des messages, des blocs et de la chaîne (spec §3), codes d'erreur dans l'ordre ; borne future 9a aussi au rattrapage (v1.1) | Dylan | 5 h | I | lun. 07/12 |
| N4 | Stockage SQLite en mode WAL : `blocks`, `messages`, `node_state` | Dylan | 3 h | I | mar. 08/12 |
| N5 | Les 5 routes de la spec §6, erreurs du **socle 10/12** (`400`, `409`, `422`, `503`, spec §10.0), écoute sur `HOST_NODE` (IP Tailscale donnée à la main dans `.env`). Les limites `429`/`413` et l'ordre exact des refus (§6.2, §8.2) peuvent glisser en S2 sans casser la compatibilité (spec §10.0) | Dylan | 4 h | I | mar. 08/12 |
| N6 | Production par créneau (§4.2), file d'attente, envoi aux pairs (§6.4) ; v1.1 : conditions 7 et 8 (créneau après la tête, écart d'horloge) et validation de notre propre bloc par la fonction de N3 | Dylan | 3 h | I | mer. 09/12 |
| N7 | Sondage toutes les 10 s, rattrapage et `SYNCING` (§7), choix entre chaînes (§5), remise en file. **Estimation relevée (3 h → 5 h) :** c'est la partie la plus risquée du nœud ; les 2 dernières heures (`SYNCING`, fourches) se font le jeudi matin | Dylan | 5 h | I | mer. 09/12 et jeu. 10/12 (matin) |
| N8 | API interne `127.0.0.1:8081` : filtre avant signature (charte §4.1), débit par visiteur, liste de mots | Nicolas | 3 h | I | mar. 08/12 |
| N9 | Nouvelles tentatives toutes les 5 s si l'IP Tailscale n'est pas encore là (dossier §11) ; l'écoute elle-même est faite en N5 | Dylan | 1 h | I | ven. 11/12 |

### IA

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| A1 | Valeurs locales (calcul exact, lexique `l2` et règle anti-monotonie par `id`, charte §2) : fonction pure dans le serveur de l'application, partagée avec le nœud, sans écriture en base (dossier §5) | Nicolas | 2 h | I | jeu. 10/12 |
| A2a | Worker minimal : repère les messages `dans_un_bloc`, **IA simulée** (`IA_MODE=simulee`), écrit `ai_results` et l'événement `values_ready` | Dylan | 2 h | I | ven. 11/12 |
| A2b | Worker réel : lots de 10, déclenchement (10 messages ou 45 s, 30 s entre deux requêtes), compteur journalier, appel OpenRouter, statuts, validation de la réponse, `model_used` | Dylan | 3 h | I | lun. 11/01 |
| A3 | Pannes simulées : délai, hors format, lot incomplet, quota, refus d'un lot | Dylan | 2 h | I | mar. 12/01 |
| A4 | Retraitement des valeurs locales, lot refusé coupé en deux (dossier §5) | Dylan | 3 h | + | mar. 12/01 |
| A5 | Export JSON régulier de `ai_results` dans `data/exports/` | Dylan | 1 h | I | mar. 12/01 |

### Application

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| P1 | Serveur de l'application (`127.0.0.1:3000`) : page, lecture SQLite, table `events`, SSE avec `Last-Event-ID` | Nicolas | 3 h | I | lun. 07/12 |
| P2 | Écran d'écriture (grille de la bible §8.1) : consigne, champ, compteur, avertissement, refus, pastilles d'état | Nicolas | 4 h | I | mar. 08/12 |
| P3 | Masquage côté serveur (charte §4.2) : `content` jamais envoyé pour un message masqué | Nicolas | 2 h | I | lun. 11/01 |
| P4 | État `confirme` (3 blocs, ou 60 s sans changement et même tête chez les pairs) | Dylan | 2 h | I | mar. 12/01 |
| P5 | Légende de l'œuvre et info-bulles | Nicolas | 3 h | I | lun. 11/01 |
| P6 | Version tablette et téléphone (bible §8.1), variante `APP_HOST` sur le tailnet | Nicolas | 2 h | + | lun. 11/01 |

### Œuvre (Three.js 3D)

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| O1 | Scène Three.js low-poly (`importmap`, `OrbitControls`, `ImprovedNoise`, PRNG Mulberry32) : océan 3D animé, éclairage, brouillard, **trois bases de test** (vide, 10 et 300 messages) | Nicolas | 4 h | I | mer. 09/12 |
| O2 | Heightmap procédurale (`48 × 48`) avec saturation, masque côtier, coloration par biomes et calcul du **`% de terre`** (bible §6.2) | Nicolas | 4 h | I | mer. 09/12 et ven. 11/12 |
| O3 | Éléments 3D de base instanciés (`InstancedMesh`) : **balises de nœuds** (pyramide Cyan / cube Ambre / losange Violet), **arbres**, **phares** et **voiliers** | Nicolas | 3 h | I | ven. 11/12 (1 h : balises, arbres) et lun. 11/01 (2 h : phares, voiliers) |
| O4 | Patch filaire indépendant de prévision (`PlaneGeometry` 8 × 8, fondu 1,5 s à l'observation) et nappe de brume pour les messages masqués (bible §6.3) | Nicolas | 2 h | I | ven. 11/12 |
| O5 | Reconstruction de la heightmap après `chain_reorganized` | Nicolas | 2 h | I | mar. 12/01 |
| O6 | Atmosphère dynamique (fenêtre des 5 derniers) : ciel selon `chaleur`, vagues selon `energie`, pluie 3D (`tristesse`), orage, éclairs et braises (`colere`) | Nicolas | 3 h | I | mar. 12/01 |
| O7a | Post-processing léger (bloom sur la lave et les phares) | Nicolas | 1 h | + | mar. 12/01 |
| O7b | Ruines solitaires avec lanterne du nœud (bible §6.5), tirées après les règles de base | Nicolas | 1 h | + | mar. 12/01 |
| O8 | Enrichissements de la bible §6.5 (la carte est complète sans eux) : **rivières** avec arrêt garanti (`tristesse`), **impact de météorite** (`colere` intense), **champignons et petits animaux** (`joie`) | Dylan + Nicolas | 4 h | + | mer. 13/01 |
| O9 | `prefers-reduced-motion` (caméra fixe, vagues figées, pas d'éclairs ni d'animation de météorite) | Nicolas | 1 h | I | mer. 13/01 |
| O10 | Logo vivant dans l'en-tête : le cristal-île recalculé à chaque bloc (bible §5.3) ; sans lui, symbole de référence | Nicolas | 1 h | + | mer. 13/01 |

### Tests et jonction

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| T1 | Lanceur des vecteurs (`node:test` lit `tests/vectors/`, les nôtres et ceux des deux autres binômes) | Nicolas | 2 h | I | lun. 07/12 |
| T2 | Palier 2 de la spec (§10 [I4]) : essais deux à deux (avec `noeud-a`, puis `noeud-b`) sur la chaîne d'essai — premier échange dès mardi 08/12 après-midi si possible, **mercredi 09/12 matin au plus tard** | à deux | 1 h | I | mar. 08/12 (PM) / mer. 09/12 (matin) |
| T3 | Palier 3 : jonction à trois, les cas de la spec sur la chaîne d'essai (horloges mesurées d'abord), puis ouverture de la chaîne réelle et une heure d'usage réel (spec §10.3) | à deux | 5 h | I | **jeu. 10/12** |
| T4 | Bout en bout : un message de l'application jusqu'à l'œuvre, avec l'IA simulée (S50) puis avec de vraies valeurs de l'IA (lun. 11/01, après A2b) | à deux | 2 h | I | ven. 11/12 |
| T5 | Fourche provoquée, arrêt du worker pendant un créneau, redémarrage des trois nœuds | à deux | 3 h | I | mer. 13/01 |
| T6 | Déterminisme : même base, même **empreinte SHA-256 des tableaux `heightmap` + `warm` + `volc`** (indépendant du GPU) ; bases de test vide, 10 et 300 messages ; **fluidité mesurée** (30 images par seconde au moins, bible §6.4) | Nicolas | 2 h | I | mer. 13/01 |
| T7 | Test du prompt, seconde partie : Dylan et Nicolas notent chacun 10 nouveaux messages **avant** de voir l'IA, puis comparaison avec ernie (objectif : 80 % d'`emotion` justes) ; revérifier que ernie est toujours gratuit (première partie faite le 27/11 : [test-prompt/](test-prompt/README.md)) | à deux | 1 h | I | S49 |

### Documents et oral

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| D1 | Journal et daily chaque jour, **chacun dans son nom** | à deux | ¼ h/jour | I | tous les jours |
| D2 | Mettre le README de démarrage à jour avec les vraies commandes (dossier §11) | Dylan | 1 h | I | jeu. 14/01 |
| D3 | Préparer la démonstration et le plan B (section 5) | à deux | 3 h | I | jeu. 14/01 |
| D4 | Répétitions : chacun explique la partie de l'autre | à deux | 2 h | I | jeu. 14/01 |

---

## 2. La répartition

Reprise du dossier §10 :

| Domaine | Responsable | Relecteur |
| --- | --- | --- |
| Nœud (N2 à N7, N9) | Dylan | Nicolas, qui relit le code (chemin critique, 25 % de la note) |
| Structure, lanceur de tests, API interne (N1, N8, T1) | Nicolas | Dylan |
| IA : worker, quota, pannes (A2a, A2b, A3 à A5, T7) | Dylan | Nicolas |
| Valeurs locales (A1, dossier §10 : elles vont avec l'œuvre) | Nicolas | Dylan |
| Application (P1 à P3, P5, P6) | Nicolas | Dylan |
| État `confirme` (P4) | Dylan | Nicolas |
| Œuvre et bible DA (O1 à O9, C3 à C6) | Nicolas | Dylan |
| Jonction et tests à trois (T2 à T5) | à deux | — |
| Documents (C10, D2) | Dylan | Nicolas |

**Pourquoi Nicolas prend N1, N8 et T1.** Ce sont les tâches où le nœud touche l'application et les tests : elles équilibrent la charge de la première semaine (Dylan a tout le cœur du nœud) et obligent Nicolas à lire le code du nœud dès le lundi, pour pouvoir l'expliquer à l'oral.

**Charge :** S50, 33 h pour Dylan et 35 h pour Nicolas en tâches indispensables ; S2, environ 25 h pour Dylan (A2b passe en S2) et 27 h pour Nicolas (2 h de O3 passées au lundi 11/01), plus les tâches « en plus ».

---

## 3. Le plan jour par jour

### S50 · production (7 au 11/12)

| Jour | Ce qui fonctionne le soir | Dylan | Nicolas |
| --- | --- | --- | --- |
| **Lun. 07/12** | **Palier 1, première moitié :** `npm test` rejoue, **par appel de fonction** (sans HTTP ni disque), les cas de calcul et de validité (3 à 8, 10 à 14, 18, 19, 23, 28 à 32) et ils passent. La page s'affiche sur `127.0.0.1:3000` | N2, N3 | N1, T1, P1 |
| **Mar. 08/12** | **Palier 1, seconde moitié :** les cas 1, 2, 9, 27 et 36 passent **par HTTP** (routes et stockage ; `429`/cas 17 si fait, sinon S2 selon socle §10.0). Premier test palier 2 (`GET /status` + cas 9) dès que possible. Un message écrit dans la page est filtré, signé et visible en file (`GET /messages/pending`) | N4, N5, T2 (si prêt) | N8, P2 |
| **Mer. 09/12** | **Palier 2 (matin au plus tard, spec §10 [I4]) :** notre nœud échange messages et blocs avec `noeud-a` puis avec `noeud-b` sur Tailscale ; il produit à son créneau et rattrape un pair plus haut (rattrapage simple ; `SYNCING` et fourches terminés jeudi matin). Le cas 22 passe avec le sondage (pair simulé qui répond à `GET /messages/pending`). La carte 3D Three.js se sculpte avec des données simulées | T2 (matin), N6, N7 (3 h sur 5) | T2 (matin), O1, O2 (2 h) |
| **Jeu. 10/12** | **Jalon : les trois nœuds rejoignent la chaîne.** Même `hash` de tête sur les trois après une minute, coupure de 2 minutes rattrapée, redémarrage des trois réussi. Valeurs locales calculées | N7 (fin, 2 h, le matin), T3 | T3, A1 |
| **Ven. 11/12** | Un message va de la page jusqu'à l'œuvre 3D : prévision en filaire translucide, puis solidification avec des valeurs de l'**IA simulée** écrites dans `ai_results`. Message masqué en brume. Les vraies valeurs de l'IA arrivent le lundi 11/01 | A2a, N9, T4 | O2 (2 h), O3 (1 h), O4, T4 |

**Si le jeudi échoue :** le vendredi matin est réservé à la jonction (T3) ; A2a, N9 et O3 glissent à la S2, les valeurs locales suffisent pour montrer l'œuvre. La jonction passe avant tout le reste.

**Si le jeudi réussit :** Dylan a 2 h libres le vendredi (sa marge) : il commence **A2b** (appel réel à OpenRouter) le vendredi après-midi, pour ne pas découvrir les vraies réponses de l'IA à quatre jours de l'oral. A2b reste prévue le lundi 11/01 si ce n'est pas le cas.

**Si Nicolas prend du retard** (il n'a pas de marge en S50) : O4 (brume des messages masqués, solidification douce) passe au lundi 11/01 ; la prévision en filaire reste prioritaire, car elle se voit pendant la démonstration.

### S2 · finalisation et oral (11 au 15/01)

| Jour | Ce qui fonctionne le soir | Dylan | Nicolas |
| --- | --- | --- | --- |
| **Lun. 11/01** | Les trois nœuds tournent à nouveau ensemble après la pause, avec la même tête ; les bogues notés le 10/12 sont corrigés. **Les vraies valeurs de l'IA arrivent** (lots, compteur journalier, `model_used` en base) ; masquage côté serveur ; légende et info-bulles | reprise de la chaîne à trois, corrections, A2b | O3 (fin, 2 h), P3, P5, P6 (+) |
| **Mar. 12/01** | Pannes d'IA simulées gérées ; messages `confirme` ; export de `ai_results` ; la carte 3D se reconstruit après une fourche et adapte son atmosphère (pluie, orage, soleil) | A3, P4, A5, A4 (+) | O5, O6, O7a et O7b (+) |
| **Mer. 13/01** | Tous les tests passent : fourche, arrêt du worker, redémarrage, déterminisme, trois états de l'œuvre 3D | T5, O8 (+) | T5, T6, O9 |
| **Jeu. 14/01** | Démo répétée deux fois de bout en bout, plan B prêt, README à jour | D2, D3, D4 | D3, D4 |
| **Ven. 15/01** | Oral (date exacte à confirmer par l'équipe enseignante ; si l'oral tombe plus tôt, le mercredi devient le jour de répétition) | oral | oral |

---

## 4. La S49 (30/11 au 04/12, sans SAÉ)

| Qui | Ce qu'il prépare chez lui | Fait quand |
| --- | --- | --- |
| Dylan | Tailscale installé, la machine du nœud nommée **`noeud-c`** ; compte et clé OpenRouter dans `.env` ; Node.js 24 ; `npm install better-sqlite3` qui marche sous Windows ; test du prompt (T7, 10 requêtes) ; heure de remise à zéro du quota OpenRouter notée | la commande `tailscale status` liste les autres machines ; un modèle gratuit répond |
| Nicolas | Tailscale installé (`sae-nicolas`), compte et clé OpenRouter ; Node.js 24, `better-sqlite3` et `three` installés en local ; polices variables **Bricolage Grotesque** et **Recursive** chargées en local (`app/fonts/`, D-028) ; relecture des sections 2, 3 et 6 de la spec v1.1 (pour relire le nœud dès le lundi) | même vérification ; une scène Three.js vide et les deux polices s'affichent hors ligne |
| À deux | Veille et mises à jour Windows désactivées sur la machine du nœud pour la semaine du 07/12 ; **horloge :** ne pas compter sur la synchro automatique sur eduroam (NTP UDP 123 bloqué), tester la vérification manuelle contre l'en-tête `Date` d'une réponse HTTPS (spec v1.1 §10.3, étape 2) | un message échangé sur le groupe du binôme |

Écrire du code en S49 n'est prévu que si l'équipe enseignante l'accepte (question posée) ; le plan de la S50 ne compte pas dessus.

---

## 5. L'oral : ce que nous montrerons

Démonstration d'environ 8 minutes, chacun présente la partie de l'**autre** (oral individuel : chacun doit tout expliquer).

| # | On montre | Ce que ça prouve | Qui présente |
| --- | --- | --- | --- |
| 1 | `tailscale status` et `GET /status` des trois nœuds : même hauteur, même `tip_hash` | Une chaîne, trois nœuds | Nicolas |
| 2 | Un message écrit en direct : en attente → dans un bloc → relief en filaire (prévision) → solidification du biome avec les valeurs de l'IA (observation) | Le parcours complet d'un message | Dylan |
| 3 | Dans la base : la ligne `ai_results` de ce message, avec `model_requested` et `model_used` | La trace du modèle exigée par le sujet | Nicolas |
| 4 | Un message d'un autre binôme, avec sa balise forme + couleur (pyramide Cyan / cube Ambre) et son phare ou fanion | « Trois regards » sur la même chaîne | Dylan |
| 5 | Un message refusé par le filtre (un numéro de téléphone), puis un message déjà signé qui apparaît en brume | La charte : refuser avant, masquer après | Nicolas |
| 6 | On coupe notre nœud 2 minutes, on le rallume : il rattrape la chaîne et l'œuvre se reconstruit | Le rattrapage et le déterminisme | Dylan |
| 7 | Les trois états de l'œuvre (bases vide, 10 et 300 messages) | La DA tient du vide au plein | Dylan |

**Budget IA :** `IA_MAX_PER_DAY = 20` le jour de l'oral jusqu'au passage, pour garder 30 requêtes pour la démonstration (dossier §5).

**Plan B :** si le réseau ou l'IA tombe, on rejoue une base de démonstration enregistrée la veille (chaîne commune et `ai_results` réels) et une vidéo de 2 minutes de la jonction. L'œuvre étant déterministe, elle redonne exactement la même image.
