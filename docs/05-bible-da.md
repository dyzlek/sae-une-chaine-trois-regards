# Bible DA (direction artistique)

| Champ | Valeur |
| --- | --- |
| Binôme | n°3 · Dylan Belledent, Nicolas Rapuzzi--Pisarczyk · `noeud-c` |
| Responsable | Nicolas (relecture : Dylan) |
| Version | 1.0 · 25/11/2026 · **Pivot artistique complet (D-023, D-024) :** abandon de la météo abstraite en spirale (*Front commun*) au profit de ***Terre commune***, une **carte marine 3D procédurale vivante** en Three.js low-poly, qui se sculpte message par message à partir d'un océan vierge. Les trois livrables Figma (moodboard §2, symbole §5, esquisses §7) sont prêts à être produits sur cette nouvelle base. |
| Rendu | PDF, vendredi 27/11/2026, 17h · pas de nombre de pages imposé |
| S'appuie sur | [charte éditoriale](04-charte-editoriale.md) v1.0 (valeurs), [dossier de binôme](03-dossier-binome.md) v0.9 §6 et §7 (technique) |

> La référence de notre direction artistique. Chaque choix est justifié.
> **Test :** quelqu'un qui ne connaît pas le projet doit pouvoir, avec cette bible, dessiner un écran qui s'accorde avec notre œuvre.

**Légende.** **[À PRODUIRE DANS FIGMA]** : visuel à réaliser dans Figma avant l'export PDF du vendredi 27/11 (moodboard, symbole, trois esquisses).

---

## 1. Intention

**Nom de l'œuvre : *Terre commune*.** « Terre », parce que les messages font littéralement émerger un continent hors de l'océan ; « commune », parce que trois binômes écrivent dans la même chaîne et façonnent le même monde. **Écarté :** *Front commun* (ancienne piste météo 2D jugée trop abstraite et déjà vue), *Archipel* (descriptif mais moins porteur de l'idée de collectif).

**Un monde marin en 3D qui naît de la chaîne.** Au départ, l'écran montre un **océan vierge en 3D**, vu d'une caméra orbitale fixe qui tourne lentement autour du bassin (le visiteur peut aussi tourner et zoomer librement). Il n'y a pas d'îles préfabriquées copiées-collées : **toute la mer repose sur une seule grille de terrain 3D (heightmap procédurale)** qui se sculpte de façon continue et organique, message par message.

Chaque message modifie durablement le relief et module l'atmosphère :
- **Joie / positivité (`joie`) :** soulève le fond marin en plages dorées, collines verdoyantes et forêts qui fusionnent en un vrai continent ; fait apparaître des voiliers sur l'eau et ramène le soleil et la mer turquoise.
- **Calme / sérénité (`calme`) :** façonne des îlots doux, des criques et des phares côtiers sur une mer d'huile.
- **Tristesse / mélancolie (`tristesse`) :** creuse des lagons ou refroidit la végétation en mousse grise, laisse des ruines solitaires, déclenche la pluie et épaissit la brume.
- **Colère / tension (`colere`) :** fait jaillir des crêtes volcaniques sombres (basalte, cratère incandescent, braises), lève une houle noire et déclenche l'orage et les éclairs.

**Ce que l'œuvre doit faire ressentir :**
- **La genèse et l'immuabilité.** Comme la blockchain ne s'efface jamais, le continent ne se réinitialise jamais : chaque bloc laisse une empreinte géologique permanente. Deux chaînes différentes produisent deux mondes uniques.
- **L'impact immédiat.** Le visiteur voit littéralement la terre monter hors de l'eau (ou un volcan jaillir) quelques secondes après son envoi.
- **Le collectif (« trois regards »).** Les messages des trois binômes façonnent le même continent ; les phares et fanions de voiliers portent la couleur de leur nœud d'origine.

**Le ton visuel :** **low-poly stylisé, lumineux et cinématographique**, à mi-chemin entre l'aventure maritime solaire (*The Legend of Zelda: The Wind Waker*, *Dorfromantik*) et la poésie brumeuse (*Dredge*, films de Miyazaki). Facettes nettes, éclairage directionnel marqué, eau vivante, sans jamais chercher un photoréalisme lourd.

**Pourquoi ce pivot (D-023).** La première piste (météo abstraite en spirale 2D) a été jugée trop proche d'un graphique de données et insuffisamment marquante visuellement. Une carte 3D procédurale en Three.js est immédiatement compréhensible par le jury, spectaculaire sur grand écran, et incarne physiquement le principe d'une blockchain qui accumule des traces indélébiles.

---

## 2. Moodboard

**[À PRODUIRE DANS FIGMA — tâche C4]** La planche précédente (météo satellite) est remplacée. La nouvelle planche Figma et son export `docs/moodboard-planche.png` (avec sources et licences exactes dans [moodboard-sources.md](moodboard-sources.md)) s'appuient sur les références suivantes :

| Référence | Ce que nous en retenons | Ce que nous laissons |
| --- | --- | --- |
| *The Legend of Zelda: The Wind Waker* | La **mer stylisée**, les teintes turquoise/azur, la lisibilité immédiate des îles et voiliers | Les personnages et l'interface de jeu |
| *Dorfromantik* & *Townscaper* | L'esthétique **diorama / maquette vivante** qui se construit pièce par pièce avec un vrai plaisir visuel | La grille hexagonale rigide (chez nous, la côte est organique) |
| *Dredge* | La **brume marine**, les phares qui percent le brouillard, le contraste entre mer calme et mer inquiétante | L'horreur lovecraftienne |
| Esthétique *low-poly* / *flat-shading* (Three.js, *Firewatch*, *Monument Valley*) | Les **facettes géométriques propres**, les dégradés atmosphériques du ciel, la fluidité GPU | Les textures photo réalistes |
| Photographies aériennes d'archipels volcaniques (Açores, Islande, Hawaï — Wikimedia Commons) | Le contraste entre **sable noir / basalte / lave** et **prairies vertes / lagons turquoise** | La surcharge de détails micro-topographiques |
| Cartes topographiques et bathymétriques (courbes de niveau) | La lecture claire des **altitudes** (profondeurs → rivage → plaine → sommet) | Les textes et légendes cartographiques chargés |

---

## 3. Ambiance colorée

L'œuvre vit entre deux registres : un **monde 3D riche en biomes** (qui change de lumière selon l'humeur collective) et une **interface sombre très sobre** qui s'efface devant l'océan.

### 3.1 Palette des biomes et de l'océan (œuvre 3D)

| Élément / Altitude | Nom | Code | Usage dans le monde 3D |
| --- | --- | --- | --- |
| Océan profond (`h < −0,5`) | Abysse | `#133C59` | Eaux profondes (s'assombrit vers `#0E1826` sous l'orage) |
| Haut-fond (`−0,5 ≤ h < 0`) | Lagon | `#36B5BC` | Bordure des côtes, annonce l'émergence d'une terre |
| Rivage (`0 ≤ h < 0,35`) | Sable doré | `#E4CA94` | Plages des zones `joie` et `calme` |
| Rivage volcanique | Sable noir | `#3E363A` | Plages des zones `colere` |
| Plaines (`0,35 ≤ h < 1,55`) | Prairie | `#56A85C` | Collines et forêts (`joie` / `calme`) |
| Terres brumeuses | Mousse grise | `#607A70` | Côtes et lagons refroidis (`tristesse`) |
| Relief (`1,55 ≤ h < 2,85`) | Falaise | `#7A808A` | Versants rocheux (basalte `#30242C` sur volcan) |
| Sommet calme (`h ≥ 2,85`) | Neige | `#ECF2F8` | Cimes hautes hors zone volcanique |
| Sommet volcanique | Magma | `#FF7626` | Cratère émissif et braises (`colere`) |
| Message masqué | Brume | `#7B8798` | Nappe translucide sur l'eau (sans relief) |

### 3.2 Couleurs des trois nœuds (phares, balises et fanions)

Uniquement utilisées sur les **lumières de phares**, les **lanternes de ruines** et les **fanions de voiliers**, pour identifier les trois binômes d'un coup d'œil sans IA :

| Nœud | Couleur | Code | Rôle |
| --- | --- | --- | --- |
| `noeud-a` (Binôme 1) | Cyan | `#38BDF8` | Balise / fanion du binôme 1 |
| `noeud-b` (Binôme 2) | Ambre | `#FBBF24` | Balise / fanion du binôme 2 |
| `noeud-c` (Binôme 3, nous) | Corail | `#FB7185` | Balise / fanion de notre nœud |

### 3.3 Couleurs de l'interface

L'interface flotte par-dessus la scène 3D en panneaux sombres translucides (*glassmorphism* sobre, contraste WCAG AA garanti) pour laisser l'océan occuper **100 % de l'écran** :

| Rôle | Nom | Code | Contraste | Usage |
| --- | --- | --- | --- | --- |
| Fond de panneau | Encre marine | `#08111D` (opacité 78 %) | — | Panneau de saisie, en-tête, légende |
| Bordure | Écume fine | `#FFFFFF` (opacité 16 %) | — | Contour subtil des panneaux et champs |
| Texte principal | Sel | `#F1F5F9` | 15,8:1 | Titre, consigne, messages, boutons |
| Texte secondaire | Embruns | `#94A3B8` | 6,4:1 | Aides, compteurs, états en attente |
| Alerte / Refus | Corail vif | `#F47280` | 6,8:1 | Refus de message, erreur, compteur dépassé |

**Pourquoi.** L'océan 3D ayant des couleurs très variées (du bleu nuit d'orage au soleil couchant doré), des panneaux sombres semi-transparents garantissent une lisibilité constante (≥ 4,5:1) quel que soit l'état du ciel derrière.

---

## 4. Typographie

Nous retenons **une seule famille variable : Recursive** (décision `D-009`, déjà validée par Nicolas), hébergée localement dans `app/fonts/` (licence OFL, zéro requête externe) :

| Rôle | Réglage Recursive | Taille | Usage |
| --- | --- | --- | --- |
| Titre & Consigne | `CASL 1`, graisse `600` (Casual) | 28 px / 18 px | Nom *Terre commune*, consigne d'écriture : ton chaleureux et humain |
| Interface & Messages | `CASL 0`, `MONO 0`, graisse `400`–`600` (Linear) | 15–16 px | Champ de saisie, boutons, avertissement, légende, dernier message |
| Données techniques | `MONO 1`, graisse `400` (Mono) | 12–13 px | Numéro de bloc, `id`, valeurs IA, indicateur des trois nœuds, compteur `280` |

**Pourquoi revenir à Recursive (et écarter les 4 polices météo `D-020`).** Avec une scène 3D très expressive qui porte déjà toute l'émotion (reliefs, biomes, pluie, soleil, orage), quatre polices différentes dans l'interface auraient créé une surcharge visuelle. Recursive dans ses trois réglages (`Casual` / `Linear` / `Mono`) garde un poids plume (un seul fichier variable) et fait un clin d'œil direct au sujet : **une famille, trois regards**.

---

## 5. Symbole

**[À PRODUIRE DANS FIGMA — tâche C5]** Le symbole sera dessiné dans Figma autour de la nouvelle identité *Terre commune*.

**Piste retenue pour le brief Figma :**
- Une **courbe topographique minimaliste** (2 ou 3 anneaux organiques concentriques formant une île vue de dessus) **ou un phare stylisé**, accompagné de **trois points** (les trois nœuds) aux couleurs Cyan / Ambre / Corail (ou monochrome Sel en petite taille).
- **Contraintes :** lisible à 16 px (favicon) comme à 64 px (en-tête), vectoriel simple (SVG), pas d'effet de flou ni de détail fin.

---

## 6. Règles génératives (carte 3D procédurale)

Les valeurs sont définies dans la [charte éditoriale](04-charte-editoriale.md) (§2). L'œuvre est une scène **Three.js (WebGL)** centrée sur un bassin marin carré de dimension normalisée `36 × 36` unités, composé d'un **maillage de terrain continu** (`48 × 48` sommets, soit ~4 400 triangles low-poly en `flatShading`).

### 6.1 Sculpture du terrain (heightmap déterministe)

Au départ (0 message), tous les sommets sont sous l'eau (`h ∈ [−1,2 ; −0,7]`, modulé par un bruit 2D fixe). Les messages sont rejoués dans **l'ordre exact de la chaîne** (index du bloc, puis position dans le bloc ; jamais `timestamp`, spec §5.3).

Pour chaque message de rang `n` :
1. **Point d'impact `(cx, cz)` :** calculé de façon déterministe à partir de `n` (angle d'or `n × 137,5078°`, rayon croissant en `√n` borné dans le bassin) + un léger décalage tiré de l'`id` du message (générateur pseudo-aléatoire PRNG, **jamais `Math.random`**). Les premiers messages forment ainsi un cœur d'archipel au centre, puis les terres s'étendent et fusionnent en continent.
2. **Rayon d'influence :** `R = 2,5 + 3,0 × densite`.
3. **Déformation de l'altitude `Δh` et des champs de biome (`warm`, `volc`)** selon `emotion` :

| `emotion` | Déformation du relief (`Δh`) | Biome & éléments générés | Effet sur l'atmosphère |
| --- | --- | --- | --- |
| `joie` | Soulève une colline organique (`+1,0` à `+2,2`, modulée par bruit fBM) ; augmente `warm` | Plages dorées, prairies vertes, **arbres low-poly** (1 à 4 selon `densite`), **voiliers** qui naviguent autour des côtes | Éclaircit le ciel, soleil doré, mer turquoise |
| `calme` | Soulève un îlot doux (`+0,7` à `+1,4`) ; stabilise le terrain | Criques paisibles, **phares côtiers** (faisceau couleur du nœud) | Mer d'huile, lumière douce d'aube ou de crépuscule |
| `tristesse` | Creuse un lagon si la terre est déjà haute (`−0,6`) ou soulève un récif gris (`+0,4`) ; baisse `warm` | Mousse grise, **ruines / arches solitaires** avec lanterne | Déclenche la **pluie**, épaissit la **brume** |
| `colere` | Fait jaillir une **crête volcanique abrupte** (`+2,0` à `+3,6`, avec cratère creusé au sommet) ; monte `volc` | Sable noir, basalte, **cratère de magma émissif** et particules de braises | Lève la **houle noire**, assombrit le ciel, **éclairs** si `energie ≥ 0,7` |

### 6.2 Autres canaux visuels

| Information | Effet sur la scène 3D |
| --- | --- |
| `energie` (moyenne des 5 derniers) | Amplitude et vitesse des **vagues 3D**, vitesse des nuages et des voiliers, fréquence des éclairs sous l'orage |
| `chaleur` (moyenne des 5 derniers) | Couleur du ciel (nuit/brume froide → aube → plein soleil doré) et teinte de l'éclairage directionnel |
| `node` (`noeud-a`, `noeud-b`, `noeud-c`) | Couleur des **phares**, **lanternes de ruines** et **fanions de voiliers** (Cyan / Ambre / Corail, §3.2) |
| `values_source` (`local` vs `ia`) | **Prévision** (`local`) : le relief émerge d'abord en **maillage filaire lumineux translucide** (wireframe) ; **Observation** (`ia`) : la zone se solidifie dans sa matière définitive en 1,5 s |
| `masquer = true` | Ne déforme pas le terrain ; pose une **nappe de brume grise** à sa position `(cx, cz)` avec la mention « Message masqué (charte §4) » |
| Fourche (`chain_reorganized`) | La heightmap est recalculée instantanément depuis la base (chaîne + `ai_results`), puis interpolée vers le nouvel état |

### 6.3 Contraintes de rendu et fluidité

- **Budget géométrique borné :** maillage unique `48 × 48`, maximum **80 arbres**, **20 phares/ruines**, **12 voiliers** et **200 particules** (pluie / braises) — instanciés (`InstancedMesh` Three.js) pour garder un seul appel de dessin par famille.
- **Éclairage léger :** une lumière hémisphérique + une lumière directionnelle (soleil/lune) + brouillard exponentiel (`FogExp2`).
- **Accessibilité (`prefers-reduced-motion`) :** arrête la rotation automatique de la caméra, fige les vagues et supprime les flashs d'éclairs.
- **Objectif :** 30 images par seconde au moins sur le portable de démonstration, mesuré avec les bases de test vide, 10 et 300 messages (backlog T6).

---

## 7. Esquisses

**[À PRODUIRE DANS FIGMA — tâche C6]** Les anciennes esquisses 2D (spirale) sont archivées et remplacées par trois vues 16:9 de l'application complète avec la scène 3D *Terre commune* (à exporter dans `docs/esquisses/1-vide.png`, `2-quelques.png`, `3-beaucoup.png`) :

| État | Ce que l'esquisse doit montrer |
| --- | --- |
| **1 · Vide** (0 message) | Océan 3D vierge, calme, lumière d'aube ; panneau flottant discret avec le nom *Terre commune*, le symbole, la consigne et le compteur `0 message · 0 % terre` |
| **2 · Quelques messages** (10 messages) | Premiers îlots verts qui commencent à fusionner au centre, un phare (`noeud-a` cyan), un voilier, une zone en **prévision** (maillage filaire en train de monter) et un premier petit récif brumeux |
| **3 · Beaucoup de messages** (300 messages) | Véritable continent/archipel varié : plages, forêts denses, lagons brumeux, une crête volcanique fumante avec lave, plusieurs voiliers et phares des 3 nœuds, ciel contrasté |

**Pourquoi trois états.** Ils vérifient que l'œuvre est déjà poétique à 0 message (océan calme), lisible dès les premiers blocs, et spectaculaire sans surcharge visuelle à 300 messages.

---

## 8. Design system

**Jetons (tokens) :** couleurs de la section 3.3, Recursive (§4), espacements 4 / 8 / 16 / 24 px, rayons 16 px (panneaux flottants) et 999 px (boutons, pastilles), flou d'arrière-plan `backdrop-filter: blur(12px)`.

### 8.1 Grille de l'écran

| Largeur | Disposition |
| --- | --- |
| **Écran large** (≥ 1024 px, cas principal) | **Scène 3D en plein écran (100 % × 100 %)** pour l'immersion. En haut à gauche : badge titre, symbole, compteur de blocs, `% de terre` et indicateur des 3 nœuds. En bas au centre : barre de saisie compacte + dernier message arrivé. Bouton « Légende / Historique » dépliable à droite |
| **Tablette** (640 à 1023 px) | Même plein écran 3D, panneaux réduits en largeur |
| **Téléphone** (< 640 px) | Champ de saisie accessible en bas (zone du pouce), scène 3D sur tout le reste de l'écran |

### 8.2 Composants

| Composant | Description | États |
| --- | --- | --- |
| Barre de saisie | Panneau Encre marine bordé Écume fine, champ Recursive Linear 15 px, compteur `120 / 280` en Mono 12 px, phrase d'exemple | vide, en saisie (bordure Sel), limite proche (≥ 260), refusé (Corail vif + raison) |
| Bouton « Envoyer » | Pastille Sel sur Encre marine, Recursive 600, hauteur ≥ 44 px | normal, survol, désactivé, envoi en cours |
| Avertissement | Ligne courte « Message définitif, sans donnée personnelle », détail dépliable | replié, déplié |
| Toast du dernier message | Carte flottante au-dessus de la barre : pastille couleur du nœud, texte du message, effet sur la carte (`Île & forêt`, `Volcan & orage`…), état (`prévision` → `observation`) | normal, masqué (« Message masqué », sans texte) |
| Pastille d'état | Pictogramme + texte : ○ en attente · ◐ dans un bloc · ● confirmé · ↺ remis en attente | 4 états |
| Légende dépliable | Les 4 émotions → biomes, les 3 couleurs de nœuds (phares/fanions), filaire = prévision, brume = masqué | repliée, dépliée |
| Indicateur des 3 nœuds | Trois pastilles `a`, `b`, `c` en Mono 12 px (● joignable, ○ injoignable) | normal, pair coupé |

**Accessibilité :** contraste ≥ 4,5:1 sur tous les textes des panneaux sombres ; anneau de focus visible de 2 px en Sel ; aucune information portée par la seule couleur (formes 3D distinctes, texte explicite dans les toasts et pastilles) ; respect de `prefers-reduced-motion`.
