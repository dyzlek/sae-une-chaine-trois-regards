# Bible DA (direction artistique)

| Champ | Valeur |
| --- | --- |
| Binôme | n°3 · Dylan Belledent, Nicolas Rapuzzi--Pisarczyk · `noeud-c` |
| Responsable | Nicolas (relecture : Dylan) |
| Version | **1.5** · 27/11/2026 (historique des versions : [journal.md](journal.md)) |
| Rendu | PDF, vendredi 27/11/2026, 17h · pas de nombre de pages imposé |
| S'appuie sur | [charte éditoriale](04-charte-editoriale.md) v1.5 (valeurs, lexique `l2`), [dossier de binôme](03-dossier-binome.md) v0.15 §6 et §7 (technique) |

> La référence de notre direction artistique. Chaque choix est justifié.
> **Test :** quelqu'un qui ne connaît pas le projet doit pouvoir, avec cette bible, dessiner un écran qui s'accorde avec notre œuvre et obtenir exactement la même carte à partir d'une même blockchain.

**Légende.** Les trois livrables visuels de la bible DA sont produits : moodboard (§2), symbole (§5) et trois esquisses 16:9 (§7). Les anciens visuels de la piste *Front commun* sont archivés dans [archives-front-commun/](archives-front-commun/README.md).

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

La planche précédente (météo satellite) est archivée et remplacée. La nouvelle planche est dans Figma : [planche v6 dans Figma](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=51-2) et son export [moodboard-terre/moodboard-planche.png](moodboard-terre/moodboard-planche.png) (sources et licences dans [moodboard-sources.md](moodboard-sources.md)). Elle suit ces références :

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

| Nœud | Couleur | Code | Contraste sur Encre | Forme de balise 3D | Rôle |
| --- | --- | --- | --- | --- | --- |
| `noeud-a` (Binôme 1) | Cyan | `#38BDF8` | 8,8:1 (AAA) | **Pyramide** (tétraèdre) | Balises, phares et fanions du binôme 1 |
| `noeud-b` (Binôme 2) | Ambre | `#FBBF24` | 11,4:1 (AAA) | **Cube** | Balises, phares et fanions du binôme 2 |
| `noeud-c` (Binôme 3, nous) | Violet | `#A78BFA` | 7,0:1 (AAA) | **Losange** (octaèdre) | Balises, phares et fanions de notre nœud |

**Pourquoi Violet `#A78BFA` pour `noeud-c` et double encodage daltonisme.** L'ancien Corail `#FB7185` était presque identique à la couleur d'erreur (`#F47280`). Les trois couleurs de nœuds atteignent toutes le niveau **WCAG AAA** sur Encre (`#08111D`) et sont toujours doublées par une forme 3D distincte. De même, les 4 émotions de l'œuvre ne reposent jamais sur la couleur seule : chacune porte un relief et des objets propres (`joie` = forêts et voiliers, `calme` = plages douces et phares, `tristesse` = baies, pluie et brouillard, `colere` = cône volcanique, cratère et orage), rendant la carte lisible quel que soit le type de daltonisme.

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

Nous retenons **un duo typographique cohérent et peu commun**, utilisé **partout** (application et planches de présentation), hébergé localement dans `app/fonts/` (licences OFL, zéro requête externe) :

| Rôle | Police et réglage | Taille | Usage |
| --- | --- | --- | --- |
| Titres & Consigne | **Bricolage Grotesque** (variable, graisse `600`–`700`, largeur `100`) | 28–36 px / 18 px | Nom *Terre commune*, titres de planches, consigne d'écriture |
| Interface & Messages | **Recursive** (`CASL 0`, `MONO 0`, graisse `400`–`600`, Linear) | 15–16 px | Champ de saisie, boutons, avertissement, légende, toast |
| Données techniques | **Recursive** (`MONO 1`, graisse `400`, Mono) | 12–13 px | Numéro de bloc, `id`, valeurs IA, `% de terre`, 3 nœuds, crédits |

**Pourquoi Bricolage Grotesque + Recursive.** *Bricolage Grotesque* apporte un dessin sculptural, chaleureux et singulier (loin des polices génériques comme Inter ou Fraunces) qui dialogue avec le relief low-poly de l'île. *Recursive* (`D-009`) assure une lisibilité irréprochable pour l'interface (Linear) et les données de la blockchain (Mono) dans un seul fichier variable. Utiliser ce même duo sur le moodboard, la planche symbole et l'application supprime tout décalage visuel.

---

## 5. Symbole : le cristal-île

**Planche :** [symbole/planche-symbole.png](symbole/planche-symbole.png) (source : [symbole/index.html](symbole/index.html), calculée par [symbole/symbole.js](symbole/symbole.js), outil de dessin de la planche et non code de l'application). **Fichiers :** [symbole.svg](symbole/symbole.svg) (référence), [favicon.svg](symbole/favicon.svg), [symbole-mono-sel.svg](symbole/symbole-mono-sel.svg), [symbole-mono-encre.svg](symbole/symbole-mono-encre.svg). Choix : `D-026`.

### 5.1 L'idée

**Une île low-poly coupée par la surface de la mer.** Au-dessus de l'eau, **la terre** que les messages ont fait émerger ; en dessous, **la racine** : ce que la chaîne garde et que l'on ne voit pas. Comme un iceberg, l'œuvre ne montre que la partie émergée de la chaîne. Le symbole est un **résumé de l'œuvre** : mêmes facettes nettes (`flatShading`), même lumière en haut à gauche, mêmes couleurs (§3.1), même PRNG (§6.1). Et il est **calculé** à partir de l'état de la chaîne, comme l'œuvre.

**D'où il vient** (cours d'art génératif, « le logo algorithmique ») :
- ***Visit Nordkyn*** (Neue Design Studio, 2010) : un cristal à facettes que la météo du jour déforme. **Nous :** un cristal que les messages déforment à chaque bloc. On garde les facettes et le jeu clair / sombre ; on laisse le nom en capitales et les données écrites sous le logo.
- ***MIT Media Lab*** (TheGreenEyl, 2011) : une seule règle, des milliers de variantes. On garde l'idée d'un symbole qui a une règle plutôt qu'un dessin ; on laisse les aplats superposés et transparents (ils ne disent rien de la 3D de notre œuvre).

**Écarté :**
- Le brief précédent (courbes de niveau ou phare) : les courbes de niveau sont déjà le fond du moodboard et restent en 2D, alors que l'œuvre est en 3D low-poly ; le phare n'est qu'un objet parmi d'autres sur la carte, pas la carte.
- Une première version du cristal en **double pyramide symétrique** : on la lisait comme un diamant, et surtout comme le **losange de `noeud-c`** (§3.2). D'où l'île basse et large, la racine plus longue, et un sommet et une racine décentrés.
- Une île à 15 facettes (avec un anneau d'épaule) : à 64 px elle ressemblait à un caillou, et sous 32 px à une tache.
- Les pistes de *Front commun* (nuage-bulle `D-018`, spirale `D-021`), écartées avec la piste météo.
- Trois pistes « à double sens » dessinées et comparées après une première relecture (planche non conservée dans le dépôt) : **la chaîne** (chaîne de montagnes à trois sommets, strates = blocs), **l'empreinte** (empreinte digitale = courbes de niveau), **la bulle-île** (bulle de message = île vue du ciel). Nous gardons le cristal-île : lui seul est **calculé** comme l'œuvre (même règle, mêmes couleurs, même PRNG), et il reste lisible de 16 à 500 px ; les trois autres sont des dessins fixes qui illustrent l'œuvre au lieu d'en être un morceau. La bulle-île était aussi trop proche de `D-018`.

### 5.2 Construction (règles exactes)

Tout se calcule dans une boîte de `64 × 64`. La ligne de flottaison passe à `y = 33`, **sans trait horizontal** : la séparation mer/terre se lit directement par la rupture de couleur et de facettes entre le massif émergé et la quille sous-marine.

1. **Tirages.** PRNG **Mulberry32** (§6.1) initialisé par la graine (`seed`).
   - **Rivage** (5 points continus de gauche à droite, demi-largeur `w = 23 + 5 × √t` où `t = min(1 ; terre / 0,45)`), avec légère variation organique.
   - **Massif émergé (un seul bloc continu)** : un sommet principal de hauteur `hPeak = 7 + 16 × √t ± 1` et une épaule reliée (`0,52` à `0,70 × hPeak`), formant une crête asymétrique continue. **À 0 message**, `hPeak = 1,2` : simple haut-fond Lagon plat (« océan vierge »).
   - **Racine sous-marine (quille cristalline)** : profondeur `dRoot = 8 + 14 × ln(1 + n) / ln(301)`, `n` = nombre de messages ; trois points inférieurs asymétriques formant une quille large (et non un cône pointu).
2. **Faces.** 10 polygones facettés au total : **5 de terre** (versant gauche, crête centrale, versant droit) et **5 d'eau** (quille sous-marine). Pas de contour (un filet de `0,25` de la couleur de la face bouche seulement les jours entre facettes).
3. **Couleur unie par émotion majoritaire (les 6 derniers messages).** Pour éviter tout effet patchwork et garder un symbole lisible jusqu'à `16 px`, l'ensemble du massif émergé prend la **teinte unie de l'émotion majoritaire** parmi les 6 derniers messages (en cas d'égalité, la plus récente l'emporte), sculptée uniquement par la lumière et l'ombre :

   | `emotion` majoritaire / état | Couleur unie | Pourquoi |
   | --- | --- | --- |
   | `joie` | Prairie `#56A85C` | la joie fait pousser collines et forêts |
   | `calme` | Sable doré `#E4CA94` | le calme étend des plages douces |
   | `tristesse` | Mousse grise `#607A70` | la tristesse refroidit la végétation |
   | `colere` | Magma `#FF7626` | la colère fait jaillir un volcan |
   | message masqué présent | versant gauche en **Brume** `#7B8798` | comme la nappe de brume de l'œuvre (§6.3) |
   | message en prévision (`values_source = local`) | versant droit **filaire pointillé** | comme le patch filaire de l'œuvre (§6.3) |
   | 0 message | haut-fond **Lagon** `#36B5BC` | océan vierge |

   **Éclairage** (comme le `flatShading` de la scène) : chaque face mélange la teinte assombrie (66 % couleur + 34 % Abysse `#133C59`) et la teinte éclairée (76 % couleur + 24 % Neige `#ECF2F8`) selon l'orientation de la facette (lumière venue d'en haut à gauche).
4. **Faces d'eau.** Mélange Abysse `#133C59` → Lagon `#36B5BC` de `8 %` à `73 %` de la gauche (éclairée) vers la droite (ombrée).

### 5.3 Déclinaisons

| Déclinaison | Où | Règle |
| --- | --- | --- |
| **Symbole de référence** (figé) | PDF, README, favicon, partage | graine `0x20264F04`, `n = 120`, `terre = 0,38`, 6 derniers messages à majorité `joie` (`tristesse, joie, calme, colere, joie, joie`). Fichier [symbole.svg](symbole/symbole.svg) |
| **Logo vivant** | en-tête de l'application (64 px), à côté du compteur et du `% de terre` (§8.1) | recalculé **à chaque nouveau bloc**, jamais en boucle : graine = `parseInt(id.slice(0, 8), 16)` du dernier message (comme l'œuvre), `n`, `terre` affichée, six derniers messages. Backlog O10 (« en plus ») ; sans O10, l'en-tête montre le symbole de référence |
| **Bloc-marque** | page de titre, en-tête large | symbole à gauche, *Terre commune* en **Bricolage Grotesque 600** (§4), puis les trois formes des nœuds (pyramide Cyan, cube Ambre, losange Violet) en Recursive Mono 12 px : « trois regards » |
| **Monochrome Sel** | sur la scène 3D ou une image | faces de terre en Sel à 42–100 % d'opacité selon l'éclairement, faces d'eau à 12–42 %. [symbole-mono-sel.svg](symbole/symbole-mono-sel.svg) |
| **Monochrome Encre** | impression, fond clair (Neige) | même règle en Encre `#08111D`. [symbole-mono-encre.svg](symbole/symbole-mono-encre.svg) |
| **Tailles** | — | Identique de `500 px` à `16 px` ([favicon.svg](symbole/favicon.svg)), sans détail superflu à retirer. Zone de protection : un huitième de la taille tout autour |

**Accessibilité.** Le symbole porte `role="img"` et `aria-label="Terre commune"` ; le logo vivant ajoute le nombre de messages et le `% de terre` (« Terre commune, 120 messages, 38 % de terre »). Ses couleurs ne portent aucune information qui ne soit écrite ailleurs (compteur, légende). Avec `prefers-reduced-motion`, le changement de symbole se fait sans transition.

### 5.4 Ce qu'on ne fait pas

Pas de **contour**, pas de **rotation** (la mer reste horizontale), pas de **déformation**, pas d'**autre couleur** que celles de §5.2, pas d'**ombre portée**, pas de texte dans le symbole, pas d'animation en continu (il change au bloc, comme la chaîne). Exemples barrés sur la planche.

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

- **Atmosphère (calculée sur la fenêtre des 5 derniers messages non masqués ; les messages avec `masquer = true` sont exclus de cette fenêtre pour ne jamais altérer le ciel ni la houle) :**
  - **Luminosité du ciel :** interpolée linéairement selon `chaleur_moy_5` (0 = nuit/brume bleue, 0,5 = aube/crépuscule, 1 = plein soleil doré).
  - **Vagues 3D :** amplitude `0,08 + 0,45 × energie_moy_5`.
  - **Brouillard du ciel (`FogExp2`) :** densité `0,012` par défaut, `0,012 + 0,006 × (nombre de messages `tristesse` parmi les 5 derniers)`, soit `0,042` au plus. Il voile **tout** l'horizon, jamais un point précis : on ne peut pas le confondre avec la nappe d'un message masqué.
  - **Pluie :** active dès que **2 messages au moins sur les 5 derniers** sont en `tristesse`, ou en `colere` avec `energie ≥ 0,6` (les deux cas s'additionnent).
  - **Orage et éclairs :** actifs dès que **2 messages au moins sur les 5 derniers** sont en `colere`, ou si le **dernier message** a `emotion = colere` et `energie ≥ 0,75`.
- **Trace d'origine (`node`) :** en plus des phares et des fanions de voiliers (et des lanternes de ruines si O7b est fait), **les 60 messages les plus récents** posent une **petite balise** (`0,35` unité, `0,6` au-dessus du sol ou de l'eau) à leur point d'impact `(cx, cz)`, dans la **forme et la couleur de leur nœud** (pyramide Cyan / cube Ambre / losange Violet, §3.2), en un seul `InstancedMesh` par forme. Les plus anciens se retrouvent dans « Historique » (§8.1). **Pourquoi 60 et pas toutes :** au-delà, les balises couvriraient l'île de points de couleur et la carte redeviendrait un graphique de données, ce que le pivot voulait quitter.
- **Prévision (`local`) → Observation (`ia`) — technique retenue :** on ne découpe pas le maillage principal. Pour chaque message encore en `values_source = local`, un **petit maillage filaire circulaire indépendant** (`RingGeometry` en `MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0,72 })`) épouse la heightmap `0,10` unité au-dessus de sa zone `(cx, cz)` (sans coins carrés dépassant sur l'eau). Quand l'IA répond (`values_ready`), la heightmap s'interpole vers les vraies valeurs et ce patch filaire disparaît en fondu en `1,5 s`.
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

Trois vues 16:9 (1920 × 1080) de l'application complète *Terre commune* (source HTML de maquette : [esquisses/index.html](esquisses/index.html), générée à partir des formules exactes de §6 et du symbole §5 — outil de maquette S48, non code de l'application) :

| État | Fichier | Ce que l'esquisse montre |
| --- | --- | --- |
| **1 · Vide** (0 message) | [1-vide.png](esquisses/1-vide.png) | Océan 3D vierge, calme, lumière d'aube ; panneau flottant discret avec *Terre commune*, le symbole, la consigne et `0 message · 0 % de terre` |
| **2 · Quelques messages** (10 messages) | [2-quelques.png](esquisses/2-quelques.png) | Environ 9 % de terre (§6.2) : premiers îlots verts autour du centre ; un phare (`noeud-a`, pyramide Cyan), un voilier, un patch filaire en **prévision**, un haut-fond turquoise sous la pluie (tristesse), une nappe de brume grise (message masqué), balises des 3 nœuds |
| **3 · Beaucoup de messages** (300 messages) | [3-beaucoup.png](esquisses/3-beaucoup.png) | Environ 45 % du bassin en terre : une grande île occupant le disque central, anneau d'océan toujours visible (masque côtier). Prairies et forêts, côtes en mousse grise, baies et lagons, volcans à cratère de magma et braises, sommet enneigé, voiliers, phares et balises des 3 nœuds |

---

## 8. Design system

**Direction UI : cartel d'exposition / carnet cartographique.** L'interface reste sobre, anguleuse et discrète pour laisser toute la place à la scène 3D (aucune boîte « SaaS » bombée). **Jetons (tokens) :** couleurs §3.3 (Encre `#08111D` 84 %, Sel `#F1F5F9` contraste 17,3:1, Embruns `#94A3B8` 7,4:1, Corail `#F47280` 6,8:1), **Bricolage Grotesque + Recursive** (§4), espacements 4 / 8 / 16 / 24 px, angles nets (`0–2 px`), filets fins (`1 px` à 20 % Sel, bordure d'accent `2 px` Sel), `backdrop-filter: blur(12px)`.

### 8.1 Grille de l'écran

| Largeur | Disposition |
| --- | --- |
| **Écran large** (≥ 1024 px) | **Scène 3D en plein écran (100 % × 100 %)** encadrée de repères d'angle fins. En haut à gauche : cartouche éditorial (symbole 56 px, titre, compteur de messages/blocs, **`% de terre`** et indicateur des 3 nœuds). En haut à droite : bouton cartel `LÉGENDE · HISTORIQUE [ + ]` replié. En bas au centre : console d'écriture « carnet de bord » + ligne de journal du dernier message intégrée au-dessus |
| **Tablette** (640 à 1023 px) | Même plein écran 3D, console centrée réduite en largeur |
| **Téléphone** (< 640 px) | Console d'écriture accessible en bas (zone du pouce), scène 3D sur tout le reste de l'écran |

### 8.2 Composants

| Composant | Description | États |
| --- | --- | --- |
| Console d'écriture | Cartouche Encre marine bordé filet fin, champ souligné Recursive Linear 15,5 px, compteur `0 / 280` en Mono 11,5 px, phrase d'exemple | vide, en saisie (filet Sel), limite proche (≥ 260), refusé (Corail vif + raison) |
| Bouton `INSCRIRE →` | Bloc net Sel sur Encre marine, Recursive Mono 600, zone tactile ≥ 44 px | normal, survol, désactivé, envoi en cours |
| Avertissement & aide | Ligne courte « Message définitif · sans donnée personnelle », détail dépliable avec numéros d'aide (`3114`, `15`, `112`) | replié, déplié |
| Ligne de journal (toast) | Bandeau intégré juste au-dessus de la console (`aria-live="polite"`) : forme + couleur du nœud, texte, effet sur la carte, état (`◐ PRÉVISION` → `● CONFIRMÉ`) | normal, masqué (« Message masqué », sans texte) |
| Pastille d'état | Pictogramme + texte : ○ en attente · ◐ prévision / dans un bloc · ● confirmé · ↺ remis en attente | 4 états |
| Panneau `LÉGENDE · HISTORIQUE [ + ]` | Replié par défaut. Déplié : légende des 4 émotions (couleurs + reliefs/objets), 3 nœuds (formes + couleurs) et **liste accessible des messages** (navigable au clavier et lecteur d'écran, doublant la scène 3D) | replié, déplié |
| Indicateur des 3 nœuds | Trois repères `▲ a`, `■ b`, `◆ c` en Mono 11,5 px (actif / coupé) | normal, pair coupé |
| Symbole (en-tête) | Cristal-île 56 px (§5) à gauche du titre ; logo vivant si O10 est fait, sinon symbole de référence | référence, vivant (change à chaque bloc) |

**Accessibilité (WCAG 2.2 AA).** Contraste ≥ 6,8:1 sur tous les textes et repères ; anneau de focus visible de `2 px` en Sel ; **aucune information portée par la seule couleur** (double encodage forme/relief + texte) ; **liste clavier / lecteur d'écran** dans `Historique` doublant entièrement la scène WebGL ; `aria-live="polite"` sur la ligne de journal ; respect strict de `prefers-reduced-motion`.
