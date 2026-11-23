# Backlog et plan S50 / S2

| Champ | Valeur |
| --- | --- |
| Binôme | n°3 · Dylan Belledent, Nicolas Rapuzzi--Pisarczyk · `noeud-c` |
| Version | 1.0 · 23/11/2026 |
| Rendu | PDF ou lien, vendredi 27/11/2026, 17h |
| S'appuie sur | [dossier](03-dossier-binome.md) v0.7 (§10 : répartition), [spec](spec-commune.md) v1.0 (§10 : paliers), [bible DA](05-bible-da.md) v0.2, [charte](04-charte-editoriale.md) v0.4 |

> **Test :** en lisant ce plan, on sait ce qui doit fonctionner chaque soir, et qui s'en occupe.

**Estimations** en heures de travail (une journée de SAÉ ≈ 7 h par personne). **Priorité :** **I** = indispensable (sans elle, la démo ou la jonction échoue) · **+** = en plus si le temps le permet. **Statut :** ☐ à faire · ◐ en cours · ☑ fait.

**Capacité.** S50 : 5 jours × 7 h = 35 h chacun. S2 : 4 jours de travail + l'oral, soit environ 28 h chacun. Le backlog indispensable de S50 remplit 34 h pour Dylan et 35 h pour Nicolas : il n'y a pas de marge, d'où la règle « si le jeudi échoue » (section 3). Tout le « en plus » attend la S2.

---

## 1. Le backlog

### S48 · conception (sans code)

| # | Tâche | Qui | Est. | Prio. | Échéance | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| C1 | Spec commune v1.0, déposée sur Moodle | les six | — | I | jeu. 26/11, 12h30 | ◐ (validée, à déposer) |
| C2 | Nos vecteurs de test 20 à 26 (spec v1.0) | Dylan | 3 h | I | 23/11 | ☑ ([tests/vectors/](../tests/vectors/README.md)) |
| C3 | Relire la bible DA v0.2 et valider les changements ✎ | Nicolas | 2 h | I | mar. 24/11 | ☐ |
| C4 | Moodboard (8 à 12 images sourcées) | Nicolas | 2 h | I | mer. 25/11 | ☐ |
| C5 | Symbole et ses 4 déclinaisons | Nicolas | 2 h | I | mer. 25/11 | ☐ |
| C6 | Trois esquisses 16:9 (vide, quelques, beaucoup) | Nicolas | 4 h | I | jeu. 26/11 | ☐ |
| C7 | Test de la charte auprès de 3 personnes (charte §3) | à deux | 1 h | I | jeu. 26/11 | ☐ |
| C8 | Vérifier le réglage de confidentialité d'OpenRouter et l'écrire (charte §4.3) | Dylan | ½ h | I | mer. 25/11 | ☐ |
| C9 | Relire dossier v0.7 et charte v0.4 | Nicolas | 1 h | I | mer. 25/11 | ☐ |
| C10 | Export PDF des 4 rendus (schéma Mermaid en image, polices intégrées) | Dylan | 2 h | I | jeu. 26/11 (test), ven. 27/11 (dépôt) | ☐ |
| C11 | Créer le dépôt commun des six et y déposer nos vecteurs (point ouvert O1) | Dylan + un membre par binôme | 1 h | I | ven. 27/11 | ☐ |
| C12 | Proposer la spec v1.1 (précisions, [propositions](spec-commune/propositions-v1.1.md)) | Dylan | ½ h | + | ven. 27/11 | ☐ |

### Nœud (spec)

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| N1 | Structure du dépôt, `.env.example`, script qui lance et relance les trois processus, **horloge injectable** (pour les vecteurs) | Nicolas | 2 h | I | lun. 07/12 |
| N2 | Empreintes, signatures, bloc zéro : retrouver les valeurs de la spec §2 | Dylan | 2 h | I | lun. 07/12 |
| N3 | Validité des messages, des blocs et de la chaîne (spec §3), codes d'erreur dans l'ordre | Dylan | 5 h | I | lun. 07/12 |
| N4 | Stockage SQLite en mode WAL : `blocks`, `messages`, `node_state` | Dylan | 3 h | I | mar. 08/12 |
| N5 | Les 5 routes de la spec §6, erreurs, limites de §8.2 (`429`, `413`) | Dylan | 4 h | I | mar. 08/12 |
| N6 | Production par créneau (§4.2), file d'attente, envoi aux pairs (§6.4) | Dylan | 3 h | I | mer. 09/12 |
| N7 | Sondage toutes les 10 s, rattrapage et `SYNCING` (§7), choix entre chaînes (§5), remise en file | Dylan | 3 h | I | mer. 09/12 |
| N8 | API interne `127.0.0.1:8081` : filtre avant signature (charte §4.1), débit par visiteur, liste de mots | Nicolas | 3 h | I | mar. 08/12 |
| N9 | Écoute sur l'IP Tailscale avec nouvelles tentatives si elle n'est pas encore là (dossier §11) | Dylan | 1 h | I | jeu. 10/12 |

### IA

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| A1 | Valeurs locales (calcul exact et lexique `l1`, charte §2), `values_source = local` | Nicolas | 2 h | I | jeu. 10/12 |
| A2 | Worker : lots de 10, déclenchement (10 messages ou 45 s, 30 s entre deux requêtes), compteur journalier, statuts, validation de la réponse, `model_used`, IA simulée simple (`IA_MODE=simulee`) | Dylan | 5 h | I | ven. 11/12 |
| A3 | Pannes simulées : délai, hors format, lot incomplet, quota, refus d'un lot | Dylan | 2 h | I | lun. 11/01 |
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

### Œuvre

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| O1 | Canvas, repère normalisé carré, générateur pseudo-aléatoire initialisé par l'`id`, spirale avec rotation d'un cran (bible §6.1), données simulées | Nicolas | 4 h | I | mer. 09/12 |
| O2 | Les quatre formes (`eau`, `terre`, `feu`, `air`) et leur mouvement selon `energie` | Nicolas | 3 h | I | mer. 09/12 et ven. 11/12 |
| O3 | Couleurs-clés en OKLCH, courbe en S, taille et opacité | Nicolas | 2 h | I | ven. 11/12 |
| O4 | Prévision et observation (pointillés → plein en 1,5 s), satellites par nœud, brume | Nicolas | 2 h | I | ven. 11/12 |
| O5 | Reconstruction après `chain_reorganized` | Nicolas | 2 h | I | mar. 12/01 |
| O6 | Vieillissement (de `k` = 150 à 400) et fondu dans le fond, fond teinté par la moyenne | Nicolas | 3 h | I | mar. 12/01 |
| O7 | Bulletin météo (phrase calculée sans IA) | Nicolas | 2 h | + | mar. 12/01 |
| O8 | Axe Casual du bulletin qui suit l'`energie` moyenne (bible §4) | Nicolas | 1 h | + | S2 si le temps le permet |
| O9 | `prefers-reduced-motion` | Nicolas | 1 h | I | mer. 13/01 |

### Tests et jonction

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| T1 | Lanceur des vecteurs (`node:test` lit `tests/vectors/`, les nôtres et ceux des deux autres binômes) | Nicolas | 2 h | I | lun. 07/12 |
| T2 | Palier 2 de la spec : essais deux à deux (avec `noeud-a`, puis `noeud-b`) | à deux | 1 h | I | mer. 09/12 |
| T3 | Palier 3 : jonction à trois, les 26 cas, puis une heure d'usage réel (spec §10.3) | à deux | 5 h | I | **jeu. 10/12** |
| T4 | Bout en bout : un message de l'application jusqu'à l'œuvre, avec de vraies valeurs de l'IA | à deux | 2 h | I | ven. 11/12 |
| T5 | Fourche provoquée, arrêt du worker pendant un créneau, redémarrage des trois nœuds | à deux | 3 h | I | mer. 13/01 |
| T6 | Déterminisme : même base, même image (capture comparée) ; bases de test vide, 10 et 300 messages | Nicolas | 2 h | I | mer. 13/01 |
| T7 | Test du prompt : le lot de six exemples envoyé 10 fois (charte §3) | Dylan | 1 h | I | S49 |

### Documents et oral

| # | Tâche | Qui | Est. | Prio. | Jour |
| --- | --- | --- | --- | --- | --- |
| D1 | Journal et daily chaque jour | à deux | ¼ h/jour | I | tous les jours |
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
| IA : worker, quota, pannes (A2 à A5, T7) | Dylan | Nicolas |
| Valeurs locales (A1, dossier §10 : elles vont avec l'œuvre) | Nicolas | Dylan |
| Application (P1 à P3, P5, P6) | Nicolas | Dylan |
| État `confirme` (P4) | Dylan | Nicolas |
| Œuvre et bible DA (O1 à O9, C3 à C6) | Nicolas | Dylan |
| Jonction et tests à trois (T2 à T5) | à deux | — |
| Documents (C10, D2) | Dylan | Nicolas |

**Pourquoi Nicolas prend N1, N8 et T1.** Ce sont les tâches où le nœud touche l'application et les tests : elles équilibrent la charge de la première semaine (Dylan a tout le cœur du nœud) et obligent Nicolas à lire le code du nœud dès le lundi, pour pouvoir l'expliquer à l'oral.

**Charge :** S50, 34 h pour Dylan et 35 h pour Nicolas en tâches indispensables ; S2, environ 22 h pour Dylan et 25 h pour Nicolas, plus les tâches « en plus ».

---

## 3. Le plan jour par jour

### S50 · production (7 au 11/12)

| Jour | Ce qui fonctionne le soir | Dylan | Nicolas |
| --- | --- | --- | --- |
| **Lun. 07/12** | **Palier 1 :** `npm test` rejoue les vecteurs hors réseau (cas 1 à 14, 17 à 19, 22, 23) et ils passent. La page s'affiche sur `127.0.0.1:3000` | N2, N3 | N1, T1, P1 |
| **Mar. 08/12** | Le nœud démarre, garde sa chaîne sur disque et répond aux 5 routes. Un message écrit dans la page est filtré, signé et visible en file (`GET /messages/pending`) | N4, N5 | N8, P2 |
| **Mer. 09/12** | **Palier 2 :** notre nœud échange messages et blocs avec `noeud-a` puis avec `noeud-b` sur Tailscale ; il produit à son créneau et rattrape un pair plus haut. La spirale tourne avec des données simulées | N6, N7, T2 | O1, O2 (2 h), T2 |
| **Jeu. 10/12** | **Jalon : les trois nœuds rejoignent la chaîne.** Même `hash` de tête sur les trois après une minute, coupure de 2 minutes rattrapée, redémarrage des trois réussi. Valeurs locales calculées | T3, N9 | T3, A1 |
| **Ven. 11/12** | Un message va de la page jusqu'à l'œuvre : prévision en pointillés, puis observation avec de vraies valeurs de l'IA et `model_used` en base. Message masqué en brume | A2, T4 | O2 (1 h), O3, O4, T4 |

**Si le jeudi échoue :** le vendredi matin est réservé à la jonction (T3) ; A2 et O3 glissent à la S2, les valeurs locales suffisent pour montrer l'œuvre. La jonction passe avant tout le reste.

### S2 · finalisation et oral (11 au 15/01)

| Jour | Ce qui fonctionne le soir | Dylan | Nicolas |
| --- | --- | --- | --- |
| **Lun. 11/01** | Les trois nœuds tournent à nouveau ensemble après la pause, avec la même tête ; les bogues notés le 10/12 sont corrigés. Pannes d'IA simulées gérées ; masquage côté serveur ; légende et info-bulles | reprise de la chaîne à trois, corrections, A3 | P3, P5, P6 (+) |
| **Mar. 12/01** | Messages `confirme` ; export de `ai_results` ; l'œuvre se reconstruit après une fourche et vieillit au-delà de 150 messages | P4, A5, A4 (+) | O5, O6, O7 (+) |
| **Mer. 13/01** | Tous les tests passent : fourche, arrêt du worker, redémarrage, déterminisme, trois états de l'œuvre | T5 | T5, T6, O9 |
| **Jeu. 14/01** | Démo répétée deux fois de bout en bout, plan B prêt, README à jour | D2, D3, D4 | D3, D4 |
| **Ven. 15/01** | Oral (date exacte à confirmer par l'équipe enseignante ; si l'oral tombe plus tôt, le mercredi devient le jour de répétition) | oral | oral |

---

## 4. La S49 (30/11 au 04/12, sans SAÉ)

| Qui | Ce qu'il prépare chez lui | Fait quand |
| --- | --- | --- |
| Dylan | Tailscale installé, la machine du nœud nommée **`noeud-c`** ; compte et clé OpenRouter dans `.env` ; Node.js 24 ; `npm install better-sqlite3` qui marche sous Windows ; test du prompt (T7, 10 requêtes) ; heure de remise à zéro du quota OpenRouter notée | la commande `tailscale status` liste les autres machines ; un modèle gratuit répond |
| Nicolas | Tailscale installé (`sae-nicolas`), compte et clé OpenRouter ; Node.js 24 et `better-sqlite3` ; Recursive chargée en local ; relecture des sections 2, 3 et 6 de la spec (pour relire le nœud dès le lundi) | même vérification ; les trois réglages de Recursive s'affichent dans une page de test |
| À deux | Veille et mises à jour Windows désactivées sur la machine du nœud pour la semaine du 07/12 ; vérifier que l'horloge se synchronise automatiquement | un message échangé sur le groupe du binôme |

Écrire du code en S49 n'est prévu que si l'équipe enseignante l'accepte (question posée) ; le plan de la S50 ne compte pas dessus.

---

## 5. L'oral : ce que nous montrerons

Démonstration d'environ 8 minutes, chacun présente la partie de l'**autre** (oral individuel : chacun doit tout expliquer).

| # | On montre | Ce que ça prouve | Qui présente |
| --- | --- | --- | --- |
| 1 | `tailscale status` et `GET /status` des trois nœuds : même hauteur, même `tip_hash` | Une chaîne, trois nœuds | Nicolas |
| 2 | Un message écrit en direct : en attente → dans un bloc → prévision en pointillés au centre de la spirale → observation avec les valeurs de l'IA | Le parcours complet d'un message | Dylan |
| 3 | Dans la base : la ligne `ai_results` de ce message, avec `model_requested` et `model_used` | La trace du modèle exigée par le sujet | Nicolas |
| 4 | Un message d'un autre binôme, avec ses satellites | « Trois regards » sur la même chaîne | Dylan |
| 5 | Un message refusé par le filtre (un numéro de téléphone), puis un message déjà signé qui apparaît en brume | La charte : refuser avant, masquer après | Nicolas |
| 6 | On coupe notre nœud 2 minutes, on le rallume : il rattrape la chaîne et l'œuvre se reconstruit | Le rattrapage et le déterminisme | Dylan |
| 7 | Les trois états de l'œuvre (bases vide, 10 et 300 messages) | La DA tient du vide au plein | Dylan |

**Budget IA :** `IA_MAX_PER_DAY = 20` le jour de l'oral jusqu'au passage, pour garder 30 requêtes pour la démonstration (dossier §5).

**Plan B :** si le réseau ou l'IA tombe, on rejoue une base de démonstration enregistrée la veille (chaîne commune et `ai_results` réels) et une vidéo de 2 minutes de la jonction. L'œuvre étant déterministe, elle redonne exactement la même image.
