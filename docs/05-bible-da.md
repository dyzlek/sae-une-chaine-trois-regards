# Bible DA (direction artistique)

| Champ | Valeur |
| --- | --- |
| Binôme | n°3 · Dylan Belledent, Nicolas Rapuzzi--Pisarczyk · `noeud-c` |
| Responsable | Nicolas (relecture : Dylan) |
| Version | 1.3 · 25/11/2026 · **Ruines en enrichissement (O7b) partout, « brume » réservée aux messages masqués (la tristesse épaissit le brouillard du ciel).** v1.2 : **Relief recalibré et vérifié par simulation (D-025) :** fond moins profond, élévations plus fortes, amortissement après 3 passages, tristesse visible sur l'eau, couleurs du magma liées au cratère, ordre des tirages fixé, balises limitées aux 60 derniers messages, rivière et météorite sorties des règles de base (enrichissements §6.5). v1.1 : formules exactes, saturation, double encodage des nœuds, patch filaire, droits du moodboard. |
| Rendu | PDF, vendredi 27/11/2026, 17h · pas de nombre de pages imposé |
| S'appuie sur | [charte éditoriale](04-charte-editoriale.md) v1.3 (valeurs, lexique `l2`), [dossier de binôme](03-dossier-binome.md) v0.12 §6 et §7 (technique) |

> La référence de notre direction artistique. Chaque choix est justifié.
> **Test :** quelqu'un qui ne connaît pas le projet doit pouvoir, avec cette bible, dessiner un écran qui s'accorde avec notre œuvre et obtenir exactement la même carte à partir d'une même blockchain.

**Légende.** **[À PRODUIRE DANS FIGMA]** : visuel à réaliser dans Figma avant l'export PDF du vendredi 27/11 (moodboard, symbole, trois esquisses). Les anciens visuels de la piste *Front commun* sont archivés dans [archives-front-commun/](archives-front-commun/README.md).

---

## 1. Intention

**Nom de l'œuvre : *Terre commune*.** « Terre », parce que les messages font littéralement émerger et grandir une île hors de l'océan ; « commune », parce que trois binômes écrivent dans la même chaîne et façonnent le même monde. **Écarté :** *Front commun* (ancienne piste météo 2D jugée trop abstraite et déjà vue), *Archipel* (descriptif mais moins porteur de l'idée de collectif).

**Une île vivante en 3D qui grandit avec la chaîne.** Au départ, l'écran montre un **océan vierge en 3D**, vu d'une caméra orbitale qui tourne lentement autour du bassin (le visiteur peut aussi tourner et zoomer librement). Il n'y a pas d'îles préfabriquées copiées-collées : **toute la mer repose sur une seule grille de terrain 3D (heightmap procédurale)** qui s'agrandit et se sculpte organiquement, message par message, comme une véritable carte générative contrôlée par les mots.

Chaque émotion façonne durablement le monde et module l'atmosphère :
- **Joie / positivité (`joie`) :** fait émerger et agrandit l'île (plages dorées, collines verdoyantes), fait pousser des **arbres** et lance des **voiliers** sur l'eau, ramène le soleil et la mer turquoise.
- **Calme / sérénité (`calme`) :** étend des îlots et des plages douces, pose des **phares côtiers**, apaise la mer en miroir sous une lumière d'aube ou de crépuscule.
- **Tristesse / mélancolie (`tristesse`) :** déclenche la **pluie** et épaissit le **brouillard** du ciel ; en pleine mer, elle remonte un **haut-fond turquoise** qui reste sous l'eau ; sur une terre, elle **creuse une baie ou un lagon** et refroidit la végétation en mousse grise.
- **Colère / tension (`colere`) :** fait jaillir un **volcan** (basalte, cratère de magma incandescent, braises) et déclenche **l'orage, les éclairs** et une **forte houle**.

**Si le temps le permet (§6.5, backlog O8) :** rivières, impact de météorite, champignons et petits animaux. Ils enrichissent la carte mais n'en changent pas la lecture : l'œuvre est complète sans eux.

**Ce que l'œuvre doit faire ressentir :**
- **La genèse et l'immuabilité.** Comme la blockchain ne s'efface jamais, le terrain non plus : chaque bloc laisse une empreinte géologique permanente. Deux chaînes différentes engendrent deux cartes uniques.
- **L'impact immédiat.** Le visiteur voit la terre monter, une baie se creuser ou un volcan jaillir quelques secondes après son envoi : **dès le premier message**, une île est visible (§6.2, vérifié par simulation).
- **Le collectif (« trois regards »).** Chaque message récent laisse une trace discrète de son nœud d'origine (balise par forme et couleur) en plus des phares et voiliers.

**Le ton visuel :** **low-poly stylisé, lumineux et cinématographique**, entre l'aventure maritime (*The Wind Waker*, *Dorfromantik*) et la poésie brumeuse (*Dredge*, films de Miyazaki). Facettes nettes (`flatShading`), éclairage directionnel marqué, eau vivante, sans chercher un photoréalisme lourd.

**Pourquoi ce pivot (D-023).** La première piste (météo abstraite en spirale 2D) ressemblait trop à un graphique de données. Une carte 3D procédurale en Three.js est immédiatement lisible pour le jury, marquante sur grand écran et incarne littéralement l'accumulation indélébile d'une blockchain.

---

## 2. Moodboard

**[À PRODUIRE DANS FIGMA — tâche C4]** La planche précédente (météo satellite) est archivée et remplacée. La nouvelle planche Figma et son export `docs/moodboard-planche.png` (avec sources et licences dans [moodboard-sources.md](moodboard-sources.md)) suivent ces références :

| Référence | Ce que nous en retenons | Ce que nous laissons |
| --- | --- | --- |
| Photographies aériennes d'archipels volcaniques (Açores, Islande, Hawaï — Wikimedia Commons, licences libres) | Le contraste naturel entre **sable noir / basalte / lave** et **prairies vertes / lagons turquoise** | La surcharge de détails micro-topographiques |
| Cartes topographiques et bathymétriques (domaine public, Wikimedia Commons / NOAA) | La lecture immédiate des **altitudes** (profondeurs → rivage → plaine → sommet) | Les textes et légendes cartographiques chargés |
| *The Legend of Zelda: The Wind Waker* *(référence culturelle)* | La **mer stylisée**, les teintes turquoise/azur, la lisibilité des îles et voiliers | Les personnages et l'interface de jeu |
| *Dorfromantik* & *Townscaper* *(références culturelles)* | L'esthétique **maquette vivante** qui grandit pièce par pièce (arbres, phares, relief) | La grille hexagonale rigide |
| *Dredge* *(référence culturelle)* | La **brume marine**, les phares dans le brouillard, le passage du calme à l'inquiétant | L'horreur lovecraftienne |
| Esthétique *low-poly / flat-shading* (Three.js, *Firewatch*) | Les **facettes géométriques propres**, les dégradés atmosphériques du ciel, la fluidité GPU | Les textures photo réalistes |

**Règle sur les droits d'images.** Les images collées dans le moodboard PDF proviennent exclusivement de **sources libres de droits ou sous licence Creative Commons compatible** (photographies aériennes, cartes topographiques, rendus low-poly libres, tous listés avec leur licence exacte dans [moodboard-sources.md](moodboard-sources.md)). Les jeux vidéo (*Wind Waker*, *Dorfromantik*, *Dredge*, *Firewatch*) sont **cités comme références culturelles sans reprendre leurs captures protégées** (ou, si une miniature est ajoutée à titre de citation pédagogique, avec mention explicite « © Éditeur — citation pédagogique, hors redistribution »).

---

## 3. Ambiance colorée

### 3.1 Palette des biomes et de l'océan (œuvre 3D)

| Élément / Condition | Nom | Code | Usage dans le monde 3D |
| --- | --- | --- | --- |
| Océan profond (`h < −0,5`) | Abysse | `#133C59` | Eaux profondes (s'assombrit vers `#0E1826` sous l'orage) |
| Haut-fond (`−0,5 ≤ h < 0`) | Lagon | `#36B5BC` | Bordure des côtes, annonce l'émergence d'une terre |
| Rivière (`river = true`, enrichissement §6.5) | Cours d'eau | `#3B82A6` | Sillon creusé par la tristesse jusqu'à la mer |
| Rivage (`0 ≤ h < 0,35`, `volc < 0,45`) | Sable doré | `#E4CA94` | Plages des zones `joie` et `calme` |
| Rivage volcanique (`volc ≥ 0,45`) | Sable noir | `#3E363A` | Plages des zones `colere` |
| Plaines (`0,35 ≤ h < 2,0`, `warm ≥ 0,45`) | Prairie | `#56A85C` | Collines et forêts |
| Terres brumeuses (`warm < 0,45`) | Mousse grise | `#607A70` | Côtes refroidies (`tristesse`) |
| Relief (`2,0 ≤ h < 2,9`, `volc < 0,45`) | Falaise | `#7A808A` | Versants rocheux (basalte `#30242C` si `volc ≥ 0,45`) |
| Sommet calme (`h ≥ 2,9`, `volc < 0,45`) | Neige | `#ECF2F8` | Cimes rares, là où beaucoup de messages se sont accumulés |
| Cratère (`h ≥ 0,9`, `volc ≥ 0,80`) | Magma | `#FF7626` | Cœur émissif des volcans, braises (`colere`) |
| Message masqué | Brume | `#7B8798` | Nappe translucide sur l'eau (sans relief) |

### 3.2 Identification des trois nœuds (double encodage forme + couleur)

Pour respecter l'accessibilité (**jamais la couleur seule**) et éviter toute confusion avec la couleur d'erreur (`#F47280`), chaque nœud possède une **couleur dédiée** et une **forme géométrique propre**, utilisées sur ses **balises/bouées**, **phares** et **fanions de voiliers** :

| Nœud | Couleur | Code | Forme de balise 3D | Rôle |
| --- | --- | --- | --- | --- |
| `noeud-a` (Binôme 1) | Cyan | `#38BDF8` | **Pyramide** (tétraèdre) | Balises, phares et fanions du binôme 1 |
| `noeud-b` (Binôme 2) | Ambre | `#FBBF24` | **Cube** | Balises, phares et fanions du binôme 2 |
| `noeud-c` (Binôme 3, nous) | Violet | `#A78BFA` | **Losange** (octaèdre) | Balises, phares et fanions de notre nœud |

**Pourquoi Violet `#A78BFA` pour `noeud-c`.** L'ancien Corail `#FB7185` était presque identique à la couleur d'erreur (`#F47280`). Le Violet se distingue nettement de l'erreur, de l'océan bleu, des prairies vertes et du magma orange.

### 3.3 Couleurs de l'interface

Panneaux sombres translucides (*glassmorphism* sobre) par-dessus la scène 3D plein écran, garantissant un contraste ≥ 4,5:1 (WCAG AA) quelle que soit la couleur du ciel derrière :

| Rôle | Nom | Code | Contraste | Usage |
| --- | --- | --- | --- | --- |
| Fond de panneau | Encre marine | `#08111D` (opacité 82 %) | — | Panneau de saisie, en-tête, légende |
| Bordure | Écume fine | `#FFFFFF` (opacité 18 %) | — | Contour subtil des panneaux et champs |
| Texte principal | Sel | `#F1F5F9` | 15,8:1 | Titre, consigne, messages, boutons |
| Texte secondaire | Embruns | `#94A3B8` | 6,4:1 | Aides, compteurs, états en attente |
| Alerte / Refus | Corail vif | `#F47280` | 6,8:1 | Refus de message, erreur, compteur dépassé |

---

## 4. Typographie

Nous retenons **une seule famille variable : Recursive** (`D-009`, validée par Nicolas), hébergée localement dans `app/fonts/` (licence OFL, zéro requête externe) :

| Rôle | Réglage Recursive | Taille | Usage |
| --- | --- | --- | --- |
| Titre & Consigne | `CASL 1`, graisse `600` (Casual) | 28 px / 18 px | Nom *Terre commune*, consigne d'écriture |
| Interface & Messages | `CASL 0`, `MONO 0`, graisse `400`–`600` (Linear) | 15–16 px | Champ de saisie, boutons, avertissement, légende, toast |
| Données techniques | `MONO 1`, graisse `400` (Mono) | 12–13 px | Numéro de bloc, `id`, valeurs IA, `% de terre`, 3 nœuds |

**Pourquoi Recursive.** Une seule famille variable en trois réglages (« une chaîne, trois regards ») laisse toute la place visuelle à la scène 3D et évite la surcharge des 4 polices météo (`D-020`, écartée).

---

## 5. Symbole

**[À PRODUIRE DANS FIGMA — tâche C5]** Brief pour le dessin dans Figma :
- Une **île topographique minimaliste** (2 ou 3 courbes de niveau organiques) ou un **phare stylisé**, accompagné des **trois formes-nœuds** (pyramide Cyan, cube Ambre, losange Violet ; monochrome Sel en petite taille).
- Lisible à 16 px (favicon) comme à 64 px (en-tête), vectoriel SVG pur.

---

## 6. Règles génératives (formules exactes et déterministes)

Les valeurs sont définies dans la [charte éditoriale](04-charte-editoriale.md) (§2). L'œuvre est une scène **Three.js (WebGL)** centrée sur un bassin marin carré `[-18 ; +18] × [-18 ; +18]` (36 unités), composé d'un **maillage de terrain continu `48 × 48` sommets** (`flatShading`).

### 6.1 Bruit, PRNG et état initial (déterminisme strict)

- **PRNG par message :** algorithme **Mulberry32** initialisé par `seed = parseInt(id.slice(0, 8), 16)`. **Aucun `Math.random()`** n'est autorisé dans le code de l'œuvre.
- **Ordre des tirages (fixe, pour chaque message) :** ① décalage d'angle ; ② rayon (**toujours tiré**, même si `n < 30`, pour que la suite reste la même) ; ③ tirage « voilier » ; ④ nombre d'arbres ; ⑤ puis les positions `(x, z)` de chaque objet posé, dans l'ordre arbres → phare → balise. Un élément absent consomme quand même son tirage. Les enrichissements (§6.5) tirent **après** tous ces tirages, pour ne jamais décaler les règles de base.
- **Bruit de terrain :** **`ImprovedNoise`** (module standard `three/addons/math/ImprovedNoise.js`, appelé en `noise(x + OFFSET, z + OFFSET, 0,5)` avec `OFFSET = 2026,1125`), utilisé en **fBM à 3 octaves** :
  `fbm(x, z) = 0,60 × n(x, z) + 0,30 × n(2x, 2z) + 0,10 × n(4x, 4z)` (valeurs dans `[−1 ; +1]`).
- **État initial (0 message) :** pour chaque sommet `(x, z)` de la grille, avec `dc = √(x² + z²)` (distance au centre) :
  - `h₀(x, z) = −0,40 − 0,50 × smoothstep(0 ; 16 ; dc) + 0,20 × fbm(0,12x, 0,12z)` : un plateau sous-marin au centre (vers `−0,4`), plus profond au bord (vers `−0,9`). Tout est sous l'eau, mais assez près de la surface pour qu'un seul message fasse émerger une île.
  - `warm = 0,50` · `volc = 0,00` · `touches = 0` · `river = false`.
- `smoothstep(a ; b ; x)` vaut `0` pour `x ≤ a`, `1` pour `x ≥ b`, et `t² × (3 − 2t)` entre les deux, avec `t = (x − a) / (b − a)`.

### 6.2 Sculpture du terrain et saturation (tenue de 0 à 300 messages)

Les messages sont rejoués dans **l'ordre exact de la chaîne** (index du bloc, puis position dans le bloc ; jamais `timestamp`, spec §5.3). Soit `n` le rang absolu (`0` pour le premier message) :

1. **Point d'impact `(cx, cz)` :**
   - `θ = n × 137,5078° + (tirage① − 0,5) × 30°`
   - Pour `n < 30` : `r = min(13,0 ; 1,8 × √(n + 1))` (l'île pousse du centre vers l'extérieur).
   - Pour `n ≥ 30` : `r = (0,25 + 0,75 × tirage②) × 13,0` (les nouveaux messages continuent d'enrichir l'île et ses côtes sans tout pousser au bord).
   - `cx = r × cos(θ)`, `cz = r × sin(θ)`. `h_c` désigne l'altitude du sommet le plus proche de `(cx, cz)` **avant** le message.
2. **Noyau spatial (gaussien) :**
   - Rayon `R = 2,2 + 2,6 × densite`, écart-type `σ = R / 2`.
   - Pour chaque sommet à distance `d ≤ R` : `w(d) = exp(−d² / (2σ²))`.
3. **Masque côtier permanent (garde toujours de l'océan autour de l'île) :**
   - `mask = 1 − smoothstep(13,5 ; 17,5 ; dc)` (`1` jusqu'à `13,5` du centre, `0` au-delà de `17,5`). L'anneau périphérique reste donc **toujours marin**, même à 300 messages.
4. **Règle de saturation (empêche toute l'île de devenir une montagne uniforme) :**
   - **Plafond absolu :** `h ∈ [−1,5 ; +3,6]`.
   - **Amortissement par passages :** `f = 1 / (1 + 0,30 × max(0 ; touches − 3))`. Les trois premiers passages sur un sommet comptent en entier ; ensuite chaque nouveau message y pèse de moins en moins. `touches` est augmenté de 1 **après** le calcul, pour chaque sommet où `w ≥ 0,10`.
   - **Compression douce vers les bornes :**
     - si `Δh > 0` : `Δh_eff = Δh × w × mask × f × (1 − clamp(h / 3,2 ; 0 ; 0,95))`
     - si `Δh < 0` : `Δh_eff = Δh × w × mask × f × (1 − clamp(−h / 1,5 ; 0 ; 0,95))`
   - `warm` et `volc` sont bornés à `[0 ; 1]` après chaque message.

5. **Formules par `emotion` (règles de base) :**

| `emotion` | Formule de `Δh` et des champs (`warm`, `volc`) | Éléments générés sur la carte |
| --- | --- | --- |
| `joie` | `Δh = +(1,00 + 0,80 × densite) × (0,75 + 0,25 × fbm(x, z))` ; `warm += 0,45 × w` ; `volc −= 0,30 × w` | **Arbres low-poly** (1 à 3 selon tirage④) sur les sommets `0,35 ≤ h ≤ 2,0` et `volc < 0,45` ; **voilier** sur l'eau si tirage③ `< 0,33` |
| `calme` | `Δh = +(0,70 + 0,50 × densite)` ; `warm += 0,15 × w` ; `volc −= 0,20 × w` | **Phare côtier** (si un sommet du noyau a `0,2 ≤ h ≤ 1,5`, forme et couleur du nœud) ; plages et îlots doux |
| `tristesse` | **En pleine mer** (`h_c < −0,10`) : **haut-fond** `Δh = +(0,25 + 0,25 × densite)`, sans jamais dépasser `−0,08` (le haut-fond reste sous l'eau et prend la couleur Lagon). **Sur un rivage ou une terre** (`h_c ≥ −0,10`) : **baie ou lagon creusé** `Δh = −(0,35 + 0,45 × densite)`. Toujours : `warm −= 0,50 × w` ; `volc −= 0,20 × w` | Végétation refroidie en mousse grise ; la pluie et le brouillard viennent de l'atmosphère (§6.3). Ruine solitaire en enrichissement (§6.5, O7b). **Pas de nappe de brume** : elle est réservée aux messages masqués |
| `colere` | **Volcan** : `Δh = (1,60 + 1,60 × densite) − (0,60 si d < 1,2, sinon 0)` (le cratère est retranché dans `Δh` **avant** multiplication par `w × mask × f` et compression) ; `volc += 0,85 × w` | Basalte, sable noir, **cratère de magma émissif** et braises dès le premier message |

**Règle de couleur d'un sommet (ordre de priorité strict) :**
1. `river = true` et `h > −0,1` → Cours d'eau (`#3B82A6`) (seulement si l'enrichissement §6.5 est fait).
2. `h < −0,5` → Abysse · `−0,5 ≤ h < 0` → Lagon.
3. `h ≥ 0,9` et `volc ≥ 0,80` → Magma (émissif).
4. `0 ≤ h < 0,35` → Sable noir si `volc ≥ 0,45`, sinon Sable doré.
5. `0,35 ≤ h < 2,0` → Basalte si `volc ≥ 0,45`, sinon Prairie si `warm ≥ 0,45`, sinon Mousse grise.
6. `2,0 ≤ h < 2,9` → Basalte si `volc ≥ 0,45`, sinon Falaise.
7. `h ≥ 2,9` → Neige.

**Vérification par simulation (25/11/2026).** Ces règles ont été rejouées hors dépôt (script jetable, pas de code en S48) sur des chaînes tirées au hasard, avec un bruit de Perlin équivalent. Les résultats sont des ordres de grandeur, à confirmer en S50 avec le vrai code (backlog T6) :

| Messages | Terre émergée (part du bassin) | Ce qu'on voit |
| --- | --- | --- |
| 1 (`joie`, `densite` 0,40) | une île d'environ 25 sommets (≈ 4 unités de large) | plage dorée et prairie ; un volcan seul montre déjà son cratère de magma ; une tristesse seule donne un haut-fond turquoise d'environ 130 sommets |
| 10 | ≈ 9 % | premiers îlots autour du centre |
| 30 | ≈ 20 % | îlots qui fusionnent |
| 100 | ≈ 35 % | une île principale avec ses côtes |
| 300 | ≈ 45 % (tout le disque central ; l'anneau marin reste) | chaîne équilibrée : prairie 13 %, mousse 12 %, basalte 9 %, falaise 6 %, lagon 4 %, magma 3 %, sable 3 % du bassin |

Une chaîne très sombre (30 % de colère) donne une île nettement plus volcanique (environ 20 % de magma) : c'est voulu, la carte dit l'humeur collective. La neige reste rare (zones très chargées).

### 6.3 Atmosphère, trace des nœuds et prévision → observation

- **Atmosphère (calculée sur la fenêtre des 5 derniers messages) :**
  - **Luminosité du ciel :** interpolée linéairement selon `chaleur_moy_5` (0 = nuit/brume bleue, 0,5 = aube/crépuscule, 1 = plein soleil doré).
  - **Vagues 3D :** amplitude `0,08 + 0,45 × energie_moy_5`.
  - **Brouillard du ciel (`FogExp2`) :** densité `0,012` par défaut, `0,012 + 0,006 × (nombre de messages `tristesse` parmi les 5 derniers)`, soit `0,042` au plus. Il voile **tout** l'horizon, jamais un point précis : on ne peut pas le confondre avec la nappe d'un message masqué.
  - **Pluie :** active dès que **2 messages au moins sur les 5 derniers** sont en `tristesse`, ou en `colere` avec `energie ≥ 0,6` (les deux cas s'additionnent).
  - **Orage et éclairs :** actifs dès que **2 messages au moins sur les 5 derniers** sont en `colere`, ou si le **dernier message** a `emotion = colere` et `energie ≥ 0,75`.
- **Trace d'origine (`node`) :** en plus des phares et des fanions de voiliers (et des lanternes de ruines si O7b est fait), **les 60 messages les plus récents** posent une **petite balise** (`0,35` unité, `0,6` au-dessus du sol ou de l'eau) à leur point d'impact `(cx, cz)`, dans la **forme et la couleur de leur nœud** (pyramide Cyan / cube Ambre / losange Violet, §3.2), en un seul `InstancedMesh` par forme. Les plus anciens se retrouvent dans « Historique » (§8.1). **Pourquoi 60 et pas toutes :** au-delà, les balises couvriraient l'île de points de couleur et la carte redeviendrait un graphique de données, ce que le pivot voulait quitter.
- **Prévision (`local`) → Observation (`ia`) — technique retenue :** on ne découpe pas le maillage principal. Pour chaque message encore en `values_source = local`, un **petit maillage filaire indépendant** (`PlaneGeometry(2R, 2R, 8, 8)` en `MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0,75 })`) épouse la heightmap `0,05` unité au-dessus de sa zone `(cx, cz)`. Quand l'IA répond (`values_ready`), la heightmap s'interpole vers les vraies valeurs et ce patch filaire disparaît en fondu en `1,5 s`.
- **Quand l'IA répond pour un message ancien.** Le relief dépend de l'ordre des messages (`touches`, altitude déjà atteinte) : remplacer les valeurs d'un message de rang `n` recalcule **toute la carte à partir du rang `n`**, puis la scène s'interpole vers le nouvel état en `1,5 s`. Des zones voisines peuvent donc bouger un peu. **Assumé :** c'est la chaîne qui est permanente ; la carte en est une lecture qui **s'affine** quand l'IA remplace une prévision. Le retraitement (dossier §5) va du plus récent au plus ancien, donc ce sont surtout les zones récentes qui bougent. La caméra ne suit pas ces corrections, pour ne pas distraire.
- **Message masqué (`masquer = true`) :** ne modifie pas `h`, `warm` ni `volc` ; pose une **nappe de brume grise** translucide à `(cx, cz)` avec la balise de son nœud et la mention « Message masqué (charte §4) ».

### 6.4 Budget géométrique et fluidité

- **Maillage terrain :** `48 × 48` sommets fixes (~4 400 triangles), un sommet tous les `0,77` unité. Conséquence : un détail plus petit qu'environ `1,5` unité (deux sommets) ne se voit pas ; c'est pourquoi le cratère du volcan fait `1,2` unité de rayon.
- **Instanciation GPU (`InstancedMesh`) :** plafonds stricts : **60 balises de nœuds**, **80 arbres**, **20 phares/ruines**, **12 voiliers**, **200 particules** (pluie / braises) ; **40 champignons/animaux** si l'enrichissement est fait.
- **Éclairage léger :** 1 `HemisphereLight`, 1 `DirectionalLight`, `FogExp2`.
- **`prefers-reduced-motion` :** caméra fixe, vagues figées, pas d'éclairs ni d'animation d'impact.
- **Objectif :** ≥ 30 images par seconde sur le portable de démonstration à 300 messages (mesuré en T6).

### 6.5 Enrichissements (« en plus », backlog O7b et O8)

Ils ne s'ajoutent que si le socle (§6.1 à §6.4) marche de bout en bout. Ils tirent leurs nombres **après** les tirages de base (§6.1), donc la carte de base reste identique avec ou sans eux.

| Enrichissement | Règle | Remplace |
| --- | --- | --- |
| **Rivière** (`tristesse`, `h_c ≥ 0,9`) | Depuis `(cx, cz)`, on descend vers le voisin le plus bas (8 voisins). Chaque sommet du trajet et ses 4 voisins directs reçoivent `h −= 0,25 × f` et `river = true` (lit de 2 à 3 sommets de large, donc visible). **Arrêt garanti :** à la mer (`h ≤ 0`), au bout de **24 pas**, ou dans un creux sans voisin plus bas, où se forme un **petit lac** (`h = −0,05`) | la baie creusée de §6.2 pour ce message |
| **Météorite** (`colere`, `energie ≥ 0,75`) | Cratère `Δh = −0,8` pour `d < 1,6`, rebord `+(0,9 + 0,8 × densite)` pour `1,6 ≤ d ≤ 3,0`, onde de choc sur l'eau ; `volc += 0,60 × w` | le volcan de §6.2 pour ce message |
| **Champignons et petits animaux** (`joie`, O8) | Champignons si `densite ≥ 0,5`, animaux low-poly (oiseaux, cerfs) si `chaleur ≥ 0,7`, sur les sommets où poussent les arbres | rien (ils s'ajoutent aux arbres) |
| **Ruines solitaires** (`tristesse` sur terre, O7b) | Arche / ruine en pierre grise portant une lanterne de la couleur du nœud sur les côtes refroidies (`h ≥ 0,2`) | rien (s'ajoute à la baie) |

---

## 7. Esquisses

**[À PRODUIRE DANS FIGMA — tâche C6]** Les anciennes esquisses 2D (spirale) sont archivées et remplacées par trois vues 16:9 de l'application complète *Terre commune* (à exporter dans `docs/esquisses/1-vide.png`, `2-quelques.png`, `3-beaucoup.png`) :

| État | Ce que l'esquisse doit montrer |
| --- | --- |
| **1 · Vide** (0 message) | Océan 3D vierge, calme, lumière d'aube ; panneau flottant discret avec *Terre commune*, le symbole, la consigne et `0 message · 0 % terre` |
| **2 · Quelques messages** (10 messages) | Environ 9 % de terre (§6.2) : trois ou quatre îlots verts près du centre, pas encore soudés ; un phare (`noeud-a`, pyramide Cyan), un voilier, un patch filaire en **prévision**, un haut-fond turquoise sous la pluie (tristesse), une nappe de brume grise (un message masqué), balises des 3 nœuds |
| **3 · Beaucoup de messages** (300 messages) | Environ 45 % du bassin en terre : une grande île qui occupe tout le disque central, l'anneau d'océan toujours visible (masque côtier). Prairies et forêts, côtes en mousse grise, baies et lagons, un ou deux volcans à cratère de magma, voiliers, phares, et les balises des 60 derniers messages |

---

## 8. Design system

**Jetons (tokens) :** couleurs §3.3, Recursive (§4), espacements 4 / 8 / 16 / 24 px, rayons 16 px (panneaux flottants) et 999 px (boutons, pastilles), `backdrop-filter: blur(12px)`.

### 8.1 Grille de l'écran

| Largeur | Disposition |
| --- | --- |
| **Écran large** (≥ 1024 px) | **Scène 3D en plein écran (100 % × 100 %)**. En haut à gauche : badge titre, symbole, compteur de blocs, **`% de terre`** et indicateur des 3 nœuds. En bas au centre : barre de saisie compacte + toast du dernier message. Bouton « Légende / Historique » dépliable à droite |
| **Tablette** (640 à 1023 px) | Même plein écran 3D, panneaux réduits en largeur |
| **Téléphone** (< 640 px) | Champ de saisie accessible en bas (zone du pouce), scène 3D sur tout le reste de l'écran |

### 8.2 Composants

| Composant | Description | États |
| --- | --- | --- |
| Barre de saisie | Panneau Encre marine bordé Écume fine, Recursive Linear 15 px, compteur `120 / 280` en Mono 12 px, phrase d'exemple | vide, en saisie (bordure Sel), limite proche (≥ 260), refusé (Corail vif + raison) |
| Bouton « Envoyer » | Pastille Sel sur Encre marine, Recursive 600, hauteur ≥ 44 px | normal, survol, désactivé, envoi en cours |
| Avertissement | Ligne courte « Message définitif, sans donnée personnelle », détail dépliable | replié, déplié |
| Toast du dernier message | Carte flottante au-dessus de la barre : forme + couleur du nœud, texte, effet sur la carte, état (`prévision` → `observation`) | normal, masqué (« Message masqué », sans texte) |
| Pastille d'état | Pictogramme + texte : ○ en attente · ◐ dans un bloc · ● confirmé · ↺ remis en attente | 4 états |
| Légende dépliable | 4 émotions → reliefs/biomes, 3 nœuds (pyramide Cyan / cube Ambre / losange Violet), filaire = prévision, nappe de brume posée sur l'eau = message masqué, brouillard sur tout l'horizon = tristesse récente | repliée, dépliée |
| Indicateur des 3 nœuds | Trois pastilles `a`, `b`, `c` en Mono 12 px (● joignable, ○ injoignable) | normal, pair coupé |

**Accessibilité :** contraste ≥ 4,5:1 sur tous les textes ; anneau de focus visible de 2 px en Sel ; **aucune information portée par la seule couleur** (chaque nœud a sa forme 3D + couleur, chaque état a son pictogramme + texte) ; respect de `prefers-reduced-motion`.
