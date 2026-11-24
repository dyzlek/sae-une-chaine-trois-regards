# Bible DA (direction artistique)

| Champ | Valeur |
| --- | --- |
| Binôme | n°3 · Dylan Belledent, Nicolas Rapuzzi--Pisarczyk · `noeud-c` |
| Responsable | Nicolas (relecture : Dylan) |
| Version | 0.4 · 24/11/2026 · **v0.4 (proposée par Dylan, à valider par Nicolas) :** typographie en quatre temps (Fraunces, Quicksand, Special Elite, IBM Plex Mono) qui changent selon les valeurs et les interactions, section 4 et D-020 ; symbole retiré, à refaire (section 5). **v0.3 (relecture de la DA par Nicolas, avec Claude Code) :** la spirale ne tourne plus à chaque message (l'angle suit le rang absolu, le rayon l'âge), couleurs interpolées en OKLab (et non OKLCH) avec vecteurs de couleur, courbe en S définie, espacement mesuré (nouvelle échelle de la spirale), bordure des champs, glyphe de symbole simplifié, contraintes de rendu. **v0.2 :** contour à un seul usage, typographie Recursive, couleurs d'état propres à l'interface, grille de l'écran, nom de l'œuvre |
| Rendu | PDF, vendredi 27/11/2026, 17h · pas de nombre de pages imposé |
| S'appuie sur | [charte éditoriale](04-charte-editoriale.md) v0.5 (valeurs), [dossier de binôme](03-dossier-binome.md) v0.8 §6 (technique) |


> La référence de notre direction artistique. Chaque choix est justifié.
> **Test :** quelqu'un qui ne connaît pas le projet doit pouvoir, avec cette bible, dessiner un écran qui s'accorde avec notre œuvre.

**Légende.** **[À DESSINER]** : visuel à produire (Figma, papier scanné ou capture du prototype) avant l'export PDF. **✎** : changement des versions 0.2 et 0.3. Ceux de la v0.2 sont validés par Nicolas (il a construit la v0.3 dessus) ; ceux de la v0.3 sont à relire par Dylan. Nicolas retire tous les ✎ avant l'export PDF (backlog C3).

---

## 1. Intention

**Nom de l'œuvre : *Front commun*.** Un front, en météo, est la ligne où deux masses d'air se rencontrent ; « commun », parce que trois binômes écrivent dans la même chaîne. Le nom dit à la fois la météo et le collectif. **Écarté :** « Météo collective » (décrit l'idée mais n'est pas un titre), « Dépression » (trop sombre).

**Une météo collective, vue d'en haut.** L'œuvre est une **image satellite de nuit** : une dépression qui s'enroule en spirale. Chaque message est un temps qui passe et vient se placer dans **l'œil du cyclone**. À chaque nouveau message, la spirale s'agrandit d'un cran : les anciens **glissent vers le bord** sans tourner, comme des nuages qui s'éloignent. Notre ciel est fait des quatre éléments : la pluie est de l'eau, l'orage du feu, le vent de l'air, et la terre est ce qui pèse, le sol sous le ciel.

**Pourquoi la spirale.** Une dépression vue par satellite *est* une spirale : la disposition en phyllotaxie (angle d'or) n'est plus une image de tournesol plaquée sur une météo, elle en fait partie. Une seule image tient tout : la carte météo (la légende, les prévisions), le ciel de nuit (le fond), le cyclone (la disposition).

**Ce que l'œuvre doit faire ressentir :**
- **Être entendu.** Le visiteur voit sa forme apparaître tout de suite, **au centre**, à la place la plus visible, et elle lui ressemble (calme, agitée, froide, chaude).
- **Ne pas être seul.** Son message rejoint ceux des autres, y compris ceux des deux autres binômes : le fond du ciel prend la couleur de l'humeur de tous.
- **La lenteur et la mémoire.** Rien ne s'efface (c'est une blockchain) : les anciens messages s'éloignent et pâlissent sans disparaître, comme des nuages qui quittent l'image.

**Le ton visuel :** calme, nocturne, précis. Une carte météo poétique plutôt qu'un feu d'artifice. Le mouvement est lent ; seuls les messages très agités vibrent.

**Pourquoi.** La consigne demande déjà « quel temps fait-il en vous ? » : l'œuvre répond dans la même langue. **Écarté :** un jardin (trop lent pour montrer l'agitation), une ville (trop chargée, peu lisible à petite taille), un ciel étoilé sans structure (il ne montrerait pas l'ordre de la chaîne).

## 2. Moodboard

**Planche ✎ :** [moodboard-planche.png](moodboard-planche.png) (collage de 12 images sur un fond d'isobares, palette en hex, polices), faite dans Figma : [planche v5](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=20-79) ✎ (la v4 avec les quatre polices de la section 4 à la place de Recursive ; la v4 reste à côté dans le fichier). Chaque image porte sa source et sa licence ; liste complète dans [moodboard-sources.md](moodboard-sources.md).

| Référence | Ce que nous en retenons | Ce que nous laissons |
| --- | --- | --- |
| Images satellite Météosat et GOES (canal infrarouge, de nuit) | La **spirale** d'une dépression, l'**œil** au centre, les gris bleutés du ciel de nuit | Les fausses couleurs vives des cartes de température |
| Cartes météo (isobares, symboles, prévisions en pointillés) | Le **pointillé** de la prévision, les lignes fines, la légende lisible | Les couleurs saturées |
| Ciels de William Turner | Le **flou** et la lumière diffuse : la brume des messages masqués, le fond qui change de teinte | La matière de la peinture (impossible en Canvas sans effet lourd) |
| Phyllotaxie (cœur de tournesol, pomme de pin) | La règle de l'**angle d'or** : une disposition régulière quel que soit le nombre de messages ; et le fait que les nouveaux éléments naissent au centre et glissent vers l'extérieur | L'image végétale : chez nous, la spirale est celle d'un cyclone |
| Photos de ciel nocturne et de longue pose | Le **fond bleu nuit**, les points lumineux qui pâlissent avec la distance | Le noir pur (trop dur, contraste fatigant) |
| Art génératif à base de particules et de champs de flux ; *La Nuit étoilée* de Van Gogh ✎ (un ciel qui tourbillonne en traits) | Les **particules** du feu, les **traits** de l'air qui suivent un flux | La surcharge : chez nous, une forme par message, lisible |
| Les quatre éléments dans l'art (Arcimboldo, *Le Feu* et *L'Eau*, 1566) ✎ | Un élément fait de **beaucoup de petites choses**, comme notre ciel fait de beaucoup de messages ; le lien avec les quatre `theme` de la charte | Le portrait (chez nous, rien de figuratif) |

**Images retenues ✎ :** liste de 10 images, avec auteur, date, adresse et licence, dans [moodboard-sources.md](moodboard-sources.md).

**Images libres de droits ✎.** Les cartes et images de la NOAA (GOES) sont dans le domaine public des États-Unis ; Turner et Hiroshige (pluies, traits fins) sont dans le domaine public sur Wikimedia Commons ; pour Météosat (EUMETSAT), lire les conditions de réutilisation avant de l'utiliser dans le PDF. Aucune image n'est téléchargée sans noter sa source et sa licence.

## 3. Ambiance colorée

Fond sombre, couleurs **clés** plutôt qu'une teinte continue (le passage linéaire du bleu à l'orange traversait le vert et le jaune : les messages neutres auraient été verts).

### 3.1 Couleurs de l'œuvre

| Rôle | Nom | Code | Contraste sur Nuit | Usage |
| --- | --- | --- | --- | --- |
| Fond | Nuit | `#0E1424` | — | Fond de l'œuvre et de l'application |
| `chaleur` 0 | Bleu | `#3F7FD6` | 4,6:1 | Messages froids, tristes, distants |
| `chaleur` 0,25 | Bleu-gris | `#7FA2C9` | 6,9:1 | Messages frais |
| `chaleur` 0,5 | Gris-lavande | `#B9B0CF` | 8,9:1 | Messages neutres |
| `chaleur` 0,75 | Ocre | `#E3AA4E` | 8,8:1 | Messages tièdes, doux |
| `chaleur` 1 | Orange | `#F26A25` | 6,0:1 | Messages chaleureux, joyeux |
| Brume | Brume | `#6B7385` | 3,9:1 | Messages masqués (halo flou) |

**Ces couleurs sont réservées à l'œuvre.** Elles portent une seule information, la `chaleur` d'un message, et ne sont **jamais** réutilisées dans l'interface (états, alertes, compteur). Sinon, un ocre voudrait dire à la fois « tiède » et « attention ».

**Règle de couleur d'un message ✎.** `chaleur` passe d'abord par la courbe en S (section 6), puis est placée sur l'échelle des cinq couleurs-clés (0 ; 0,25 ; 0,5 ; 0,75 ; 1). La couleur est **interpolée linéairement entre les deux clés voisines, dans l'espace OKLab** (coordonnées L, a, b), pour garder une luminosité régulière.

**Vecteurs de couleur ✎** (à retrouver exactement dans le code de l'œuvre, comme les vecteurs de la spec) :

| `chaleur` après courbe | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 | 0,5 | 0,6 | 0,7 | 0,8 | 0,9 | 1,0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Couleur | `#3f7fd6` | `#5a8ed1` | `#739bcc` | `#8ba5ca` | `#a3abcd` | `#b9b0cf` | `#caafa3` | `#dbac6f` | `#e79e47` | `#ee8637` | `#f26a25` |

**Pourquoi OKLab et pas OKLCH ✎.** En OKLCH, l'interpolation passe par la teinte la plus courte : entre le gris-lavande et l'ocre, elle traverse le **rose** (`#e69fab` au milieu), une couleur qui n'existe nulle part ailleurs dans la palette et qui est presque celle de l'alerte (Givre rose, `#F28B9B`) : un message à `chaleur` 0,6 aurait eu la couleur d'une erreur. En OKLab, le même milieu est un beige pêche (`#ceaf97`). Autre avantage : pas de sens de rotation de teinte à définir, donc le même résultat dans tous les langages. **Écarté :** OKLCH, et la teinte HSL linéaire (le vert du milieu).

**Contraste des formes.** Les ratios ci-dessus sont ceux des couleurs **pleines**. Les formes sont dessinées avec une opacité de 45 à 95 % et un halo : leur lisibilité ne se juge pas comme celle d'un texte, mais à l'œil sur les esquisses. La règle est donc : **aucun texte n'est écrit dans une couleur de l'œuvre**, et l'information n'est jamais portée par la seule couleur (la forme dit l'élément, le pointillé dit la prévision).

**Point à vérifier sur les esquisses ✎.** Les clés n'ont pas la même luminosité (OKLab L : bleu 0,60, bleu-gris 0,70, lavande et ocre 0,77, orange 0,68). Les messages neutres et tièdes risquent d'être les plus visibles, et les messages froids les plus discrets. Si c'est le cas, éclaircir le bleu (L ≥ 0,66, par exemple `#4C8DE8`) en gardant 4,5:1 au moins sur Nuit, puis recalculer les vecteurs ci-dessus.

**Brume ✎.** Un dégradé radial sans bord : `#6B7385` à 55 % au centre, jusqu'à 0 % à 1,6 fois le rayon d'une forme, avec une lente « respiration » d'opacité (± 15 % sur 6 s). Aucune forme ni contour : c'est ce qui la distingue d'un bleu-gris.

### 3.2 Couleurs de l'interface

| Rôle | Nom | Code | Contraste sur Nuit / Nuit claire | Usage |
| --- | --- | --- | --- | --- |
| Surface | Nuit claire | `#1A2238` | 1,2:1 | Panneau, cartes, champ de saisie (jamais pour du texte) |
| Texte | Lune | `#E8ECF4` | 15,5:1 / 13,3:1 | Texte principal, états actifs |
| Texte secondaire | Brume claire | `#9AA3B5` | 7,2:1 / 6,2:1 | Légendes, états en attente, aides, **bordure des champs** |
| Alerte | Givre rose | `#F28B9B` | 7,8:1 / 6,7:1 | Refus d'un message, compteur dépassé, erreur. Seule couleur d'alerte |

**Pourquoi.** Le passage bleu → orange reste lisible pour les principaux types de daltonisme : en simulant la deutéranopie, la protanopie et la tritanopie, les deux extrémités (bleu et orange) restent à une distance de couleur de 25 à 33 (échelle OKLab × 100), contre 33 en vision normale ; le gris-lavande au milieu évite le vert. L'interface n'utilise que des gris lunaires et une seule alerte : elle s'efface devant l'œuvre. Le rose de l'alerte est assez loin de l'orange pour ne pas être lu comme une `chaleur`, et un refus est toujours écrit en toutes lettres. **Écarté :** un fond blanc (le ciel nocturne porte mieux les formes lumineuses), l'arc-en-ciel complet (trop de couleurs, aucune hiérarchie), le rouge vif pour l'alerte (agressif sur fond nuit, et trop proche de l'orange chaud).

## 4. Typographie

**✎ v0.4 (proposée par Dylan, à valider par Nicolas, D-020) : le texte a, lui aussi, un temps.** Les mots écrits dans l'application changent de police selon le temps qu'ils décrivent. Quatre polices pour quatre temps. La police change quand on écrit, quand l'IA répond et quand le ciel change.

**Planche d'essai ✎ :** [typo-planche.png](typo-planche.png), faite dans Figma : [essai typographique](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=19-2). Les quatre temps avec un exemple de la charte, ce qui bouge, les accents ; les trois interactions ; ce qui reste fixe. Les axes `SOFT` et `WONK` de Fraunces n'étant pas réglables dans Figma, la planche les simule par la graisse et l'italique.

### 4.1 Les quatre temps typographiques

| Temps | Police | Ce qu'elle évoque | Réglage qui bouge |
| --- | --- | --- | --- |
| ☀ **Ensoleillé** | **Fraunces** (serif variable, axes `wght`, `SOFT`, `WONK`) | Une serif chaleureuse, ronde, presque gourmande | `SOFT` = 100 × `chaleur` (plus c'est chaud, plus les empattements fondent) ; `wght` = 400 + 300 × `energie` ; `WONK` = 1 si `energie` ≥ 0,80 (les lettres penchent d'excitation) |
| ☁ **Nuageux** | **Quicksand** (sans empattement arrondie, variable `wght`) | Une sans empattement douce, sans angle, comme un ciel couvert sans menace | `wght` = 400 + 300 × `densite` (un nuage léger est fin, un nuage chargé est gras) ; jamais sous 400 (trop fin sur fond Nuit) |
| ☂ **Pluie** | **Special Elite** (machine à écrire, une seule graisse) | Les touches qui tombent comme des gouttes, un ruban un peu usé | À l'arrivée, les lettres apparaissent **une à une**, comme frappées : de 40 ms par lettre (calme) à 15 ms (agité), selon `energie` ; chaque lettre est décalée de ± 1 px sur la ligne, décalage tiré de l'`id` (comme les variations de l'œuvre, jamais `Math.random`) |
| ≋ **Brouillard** | **IBM Plex Mono** (chasse fixe, 400) | Une police froide, technique, qui tient à distance | À l'arrivée, le texte est flou (3 px) et devient net en 1,5 s : **le brouillard se lève** ; interlettrage élargi de 0,04 em |

**Le temps d'un texte** se lit sur ses valeurs (charte §2), **avant** la courbe en S, dans cet ordre (la première règle qui s'applique gagne) :

1. `masquer` = `true` → **Brouillard** (le texte n'est pas affiché : seule la mention « Message masqué » prend cette police).
2. `theme` = `eau` et `chaleur` < 0,60 → **Pluie**.
3. `chaleur` ≥ 0,60 → **Ensoleillé**.
4. `chaleur` ≥ 0,40 → **Nuageux**.
5. `energie` ≥ 0,35 → **Pluie** (un froid agité : une averse).
6. Sinon → **Brouillard** (un froid immobile).

**Vecteurs** (les six exemples de la charte §3, à retrouver dans le code) :

| Message | `energie` · `chaleur` · `theme` | Règle | Temps |
| --- | --- | --- | --- |
| `Il pleut sur Béziers ce matin.` | 0,20 · 0,30 · `eau` | 2 | ☂ Pluie |
| `J'AI EU MON PERMIS !!! Je suis tellement heureux 🎉` | 0,95 · 0,90 · `feu` | 3 | ☀ Ensoleillé (`WONK` 1) |
| `Fatigué. Les partiels arrivent…` | 0,15 · 0,20 · `terre` | 6 | ≋ Brouillard |
| `Soleil sur la terrasse, rien à faire, tout est calme.` | 0,10 · 0,85 · `air` | 3 | ☀ Ensoleillé |
| `Il a encore menti et je dois faire comme si de rien n'était.` | 0,55 · 0,25 · `feu` | 5 | ☂ Pluie (une colère froide tapée à la machine) |
| `ok` | 0,50 · 0,50 · `air` | 4 | ☁ Nuageux |

Les six exemples couvrent les quatre temps. Un message sans mot du lexique (valeurs locales autour de 0,5) est **Nuageux** : c'est le temps par défaut.

### 4.2 Quand la police change : les interactions

| Moment | Ce qui se passe | Durée |
| --- | --- | --- |
| **J'écris** | Le texte du champ prend le temps de ma **prévision**, calculée en direct à partir des valeurs locales (charte §2). Il ne change qu'à la fin d'un mot (espace ou ponctuation, après 300 ms sans frappe), pour ne pas sauter sous les doigts. Sous le champ, une ligne dit le temps en clair : « ☂ Temps prévu : pluie ». Le visiteur voit, avant d'envoyer, ce que son message deviendra. | fondu de 300 ms |
| **J'envoie** | Ma carte de message (« mes derniers messages ») garde le temps prévu, en pointillés comme la forme de l'œuvre. | — |
| **L'IA répond** | La police passe du temps **prévu** au temps **observé** si les deux diffèrent, en même temps que la forme passe des pointillés au plein (section 6). La carte affiche « prévu : nuageux → observé : pluie ». Le texte raconte la même histoire que l'œuvre : **le temps prévu n'est pas toujours le temps qu'il a fait**. | 1,5 s, comme le contour |
| **Je survole une forme** | L'info-bulle montre le début du texte dans le temps de son message. | — |
| **Le ciel change** | La **consigne** (« Quel temps fait-il en vous ? ») et le **bulletin météo** prennent le temps du **ciel** : la règle de 4.1 appliquée à la moyenne de `energie` et `chaleur` des 20 derniers messages (la même moyenne que le fond, section 6), et à leur `theme` le plus fréquent (à égalité : `feu`, `eau`, `terre`, `air`, comme dans la charte). La consigne s'adresse au visiteur dans le temps qu'il fait. Ciel vide : Nuageux. | 1,2 s, avec le glissement de la spirale |
| **Un message très agité arrive** (`energie` ≥ 0,80) | Sa carte et son info-bulle tremblent 300 ms, quel que soit le temps (« seuls les messages très agités vibrent », section 1). | 300 ms |

### 4.3 Ce qui ne change jamais

Une interface qui change de police partout ne se lit plus. Ce qui doit être **lu**, et non ressenti, reste fixe :

| Rôle | Police fixe | Graisse et taille | Usage |
| --- | --- | --- | --- |
| Nom de l'œuvre | Fraunces, `SOFT` 50, `WONK` 0 | 600 · 32 px | « Front commun » avec le symbole (section 5) : l'identité ne change pas avec le temps |
| Interface | Quicksand | 500 et 700 · 16 px, interligne 1,5 | Boutons, aides, avertissement, pastilles d'état, légende |
| Erreurs et refus | Quicksand | 700 · 16 px, Givre rose | Un refus se **lit**, il ne doit pas avoir l'air d'un temps |
| Données | IBM Plex Mono | 400 · 13 px | `id`, hash de bloc, index, compteur, indicateur des trois nœuds |

**Hiérarchie :** titre (Fraunces 600, 32) → consigne et bulletin (police du ciel, 22) → messages (police de leur temps, 16) → interface (Quicksand 500, 16) → légende et états (Quicksand 500, 13, Brume claire) → données (Plex Mono 400, 13).

**Règles :**
- La police n'est **jamais la seule information** : le temps est toujours écrit en clair ou accompagné de son pictogramme (☀ ☁ ☂ ≋), comme la couleur dans l'œuvre.
- Aucun texte dans une couleur de l'œuvre (section 3.1) : seuls la police et le mouvement changent, la couleur du texte reste Lune.
- Special Elite jamais sous 16 px (le grain du ruban empâte les petites tailles) ; Quicksand jamais sous 400.
- « Réduire les animations » (`prefers-reduced-motion`) : pas de frappe lettre à lettre, pas de flou, pas de tremblement ; la police change d'un coup.
- Aucune police n'est dessinée dans le Canvas de l'œuvre : l'œuvre reste sans texte.

**Mise en œuvre ✎.** Les quatre polices sont **hébergées chez nous** (`app/fonts/`, en woff2, restreintes aux caractères latins) et non appelées chez Google : la démonstration doit marcher sans internet et sans envoyer de requête externe. Licences : Fraunces, Quicksand et IBM Plex Mono sous OFL, Special Elite sous Apache 2.0. Pour la prévision en direct, la fonction des valeurs locales (backlog A1) est aussi chargée dans le navigateur, **sans** la liste des mots interdits (qui ne quitte jamais le serveur, charte §4.1). Le navigateur n'a besoin que de `energie`, `chaleur` et `theme`. **À vérifier sur la page de test (S49) :** accents (é, è, à, ç, œ, É) et guillemets français dans les quatre polices, surtout Special Elite (si un caractère manque, le navigateur prend IBM Plex Mono, déclarée en repli) ; poids total des polices (objectif : moins de 400 Ko) ; lisibilité de Special Elite et de Plex Mono à 16 px sur fond Nuit.

**Pourquoi.** L'œuvre traduit chaque message en temps ; jusqu'ici, le texte, lui, restait neutre. Avec une police par temps, le visiteur **voit son message changer de temps pendant qu'il l'écrit** : c'est le test de la charte (« on sait ce que l'IA en tirera ») rendu visible, sans explication. Le passage du temps prévu au temps observé redit l'histoire des pointillés et du plein. Chaque police a été choisie pour une sensation et non pour un rôle (titre, texte, code) : c'est ce qui distingue cet ensemble d'un « modèle de site », le reproche fait à la v0.1. Quatre familles très différentes restent lisibles parce que les textes qui doivent être lus (interface, erreurs, données) gardent une police fixe.

**Écarté :** Recursive seule (v0.3, D-009 : son axe Casual donne un continu, pas quatre temps qu'on reconnaît d'un coup d'œil) ; une police par élément (`eau`, `terre`, `feu`, `air` : l'élément est déjà la forme dans l'œuvre, et « terre » ou « air » n'appellent aucune police évidente) ; une police par nœud (l'origine est déjà dite par les satellites) ; une écriture manuscrite pour l'ensoleillé (peu lisible, mal accentuée) ; un orage avec sa propre police (cinq familles, c'est trop : l'orage passe par le tremblement, qui s'ajoute à n'importe quel temps).

## 5. Symbole

**À refaire ✎.** Toutes les pistes proposées (v1 à v9) ont été retirées du dépôt le 24/11/2026 : aucune ne convenait. Les essais restent seulement dans le fichier Figma. Le nouveau symbole est à dessiner (backlog C5).

## 6. Règles génératives

Les valeurs sont définies dans la [charte éditoriale](04-charte-editoriale.md) (§2). Une forme par message, dessinée en Canvas 2D, dans un repère normalisé (0 à 1 sur le **petit côté** du cadre) puis mis à l'échelle de l'écran. **Un canal visuel = une seule information** : c'est ce qui rend l'œuvre lisible.

| Information | Canal visuel | Règle |
| --- | --- | --- |
| `theme` | Famille de forme | `eau` : ondes concentriques · `terre` : polygones (5 à 7 côtés) posés · `feu` : particules qui montent, avec un **cœur chaud** (Lune à 50 %) à la base, pour qu'un feu bleu se lise toujours comme un feu · `air` : traits fins courbes |
| `chaleur` | Couleur | Couleurs-clés interpolées en OKLab (section 3.1). Une colère froide donne un **feu bleu** |
| `energie` | Mouvement | Vitesse et amplitude : de l'ondulation lente (0) à la vibration rapide (1). Au-delà de 0,8, la forme tremble |
| `densite` | Taille et opacité | ✎ Rayon de 0,6 % à 1,5 % du petit côté ; opacité de 45 % à 95 % |
| Les trois nombres | Contraste ✎ | **Courbe en S** appliquée avant le dessin : `s(v) = v² × (3 − 2v)`, pour étirer les valeurs groupées (l'IA donne souvent 0,2 ou 0,8). `s(0,2) = 0,10` ; `s(0,3) = 0,22` ; `s(0,5) = 0,5` ; `s(0,85) = 0,94`. S'applique à `energie`, `chaleur` et `densite`, pas à `theme` |
| Rang dans la chaîne | Emplacement | ✎ Voir 6.1 : le plus récent au centre ; l'angle ne change jamais |
| `id` du message | Petites variations | Graine d'un générateur pseudo-aléatoire : même message, même dessin. Jamais `Math.random` |
| `node` (nœud d'origine) | **Satellites** | Petits points Lune (60 % d'opacité, rayon de 0,4 % du petit côté et **2 px au moins**) qui tournent lentement (un tour en 20 s) autour de la forme, à 1,4 fois son rayon : `noeud-a` : 1 satellite · `noeud-b` : 2 satellites · `noeud-c` (nous) : aucun. « Une chaîne, trois regards » se voit sans IA. Avec « réduire les animations », les satellites sont immobiles |
| `values_source` | **Contour** (son seul usage) | `local` : contour en **pointillés**, remplissage à 30 % (une **prévision**) · `ia` : forme **pleine, sans contour** (une **observation**). Passage animé en 1,5 s. Pour les formes sans contour naturel : `eau` en anneaux pointillés, `feu` en particules creuses, `air` en traits tiretés |
| `masquer` | Brume | Halo gris flou (section 3.1), sans forme ni couleur ; les satellites restent (l'origine n'est pas un contenu) ; info-bulle « Message masqué (charte §4) » |
| Moyenne des 20 derniers messages | Fond du ciel | ✎ Dégradé radial du fond, depuis l'œil, teinté par la `chaleur` moyenne : **0 % au centre, 15 % au bord** (à 5 %, la teinte aurait été invisible) ; légère ondulation selon l'`energie` moyenne |
| Âge | Vieillissement | Voir 6.1 |

**Pourquoi les satellites.** En v0.1, le contour disait à la fois le nœud d'origine (plein, double, absent) et la prévision (pointillés) : un message de `noeud-a` aux valeurs locales n'avait pas de dessin défini. Le contour ne dit plus que la prévision, qui est l'information qui change pendant la démonstration ; l'origine passe aux satellites, qui ne gênent ni la couleur ni la forme. **Écarté :** une texture par nœud (illisible sur une forme de 1 %), une couleur par nœud (la couleur est déjà la `chaleur`), des anneaux (ils ressembleraient aux ondes de `eau`).

### 6.1 La spirale ✎

Les messages sont rangés dans l'ordre de la chaîne (index du bloc, puis position dans le bloc ; jamais `timestamp`, spec §5.3). Soit `N` le nombre de messages de la chaîne (le bloc zéro n'en a pas). Chaque message a deux rangs :

- **`n` : le rang absolu**, `0` pour le tout premier message de la chaîne. Il ne change jamais.
- **`k = N − 1 − n` : l'âge**, `0` pour le dernier message, `1` pour l'avant-dernier, etc.

Position dans le repère normalisé (centre de l'œil en `(0,5 ; 0,5)`, `y` vers le bas) :

- **Rayon :** `r = 0,028 × √k`.
- **Angle :** `θ = n × 137,5078°` (angle d'or) : il dépend du rang **absolu**, donc **il ne change jamais**.
- **Position :** `x = 0,5 + r × cos θ`, `y = 0,5 + r × sin θ`.

**Arrivée d'un message :** il prend `k = 0`, au centre (l'œil), à un angle propre qui ne bougera plus. Tous les autres passent de `k` à `k + 1` : chaque forme **glisse vers l'extérieur** le long de son rayon, de 0,16 % de la largeur en moyenne (au plus 2,8 % pour le message qui vient d'arriver), en 1,2 s d'animation douce. Si plusieurs messages arrivent dans la même seconde (un bloc de 50), les animations sont regroupées en une seule.

**Profondeur et vieillissement :** jusqu'à `k = 100`, pleine taille et pleine opacité. De `k = 100` à `k = 300`, taille et opacité baissent de façon linéaire jusqu'à 30 %. À partir de `k = 300` (rayon 0,484, au bord du cadre), le message n'est plus dessiné seul : il est **fondu dans le fond** (il compte toujours dans la teinte moyenne du ciel).

**Fourche :** la position ne dépend que de la chaîne, donc l'œuvre se redessine exactement après une réorganisation (dossier §3, étape 9).

**Pourquoi.** Cette règle corrige deux défauts successifs, tous deux mesurés par le calcul :
- **v0.1 :** le rayon suivait le rang depuis le premier message. Les plus anciens étaient au centre, ce qui contredisait l'esquisse (« les plus anciennes pâlies au bord »), et la spirale n'avait pas de taille maximale.
- **v0.2 :** le rayon suivait l'âge, mais l'angle aussi (`k × 137,5°`). Chaque nouveau message décalait donc tous les autres de 137,5° : en moyenne **57 % de la largeur de l'écran** de déplacement par message (86 % au plus), un tourbillon permanent qui contredit « calme, lent ». Avec l'angle fixé au rang absolu, le déplacement moyen tombe à **0,16 %** : c'est un glissement radial, comme les nouveaux éléments d'un vrai tournesol qui naissent au centre et s'écartent.

**Espacement :** à `c = 0,028`, le voisin le plus proche est à 2,8 % (médiane 4,7 %) quel que soit le nombre de messages. Une forme au rayon maximal (1,5 %) fait 3 % de diamètre : deux voisines pleines peuvent se **toucher**, ce que le mélange additif de lumière rend acceptable (section 6.2). En v0.2, `c = 0,023` et un rayon maximal de 2 % faisaient se chevaucher les voisines (2,3 % de distance pour 4 % de diamètre). **Écarté :** un rayon recalculé selon le nombre total de messages (toutes les positions changeraient d'échelle à chaque message), une grille (pas de mouvement, pas de cyclone), un angle selon l'âge (tourbillon).

**Exemple.** `Il pleut sur Béziers ce matin.` (`energie` 0,20, `chaleur` 0,30, `densite` 0,25, `eau`), entré chez nous, valeurs de l'IA : après la courbe en S, `chaleur` 0,30 devient 0,22, soit `#779ecb`, un bleu-gris proche du bleu-gris `#7FA2C9`. Des ondes concentriques lentes, petites et assez transparentes, pleines, sans satellite. Il apparaît au centre ; dix messages plus tard, il est à `k = 10`, à `0,028 × √10 = 0,089` du centre, au même angle qu'au départ.

### 6.2 Contraintes de rendu ✎

Le rendu doit rester fluide sur un portable pendant la démonstration :
- **Halos : jamais d'ombre portée par forme** (`shadowBlur` ruine les performances à 300 formes). Les halos sont des images pré-calculées, une par couleur de l'échelle (11 vecteurs de la section 3.1), puis réutilisées.
- **Au plus 60 formes animées** (les plus récentes) ; les autres sont dessinées dans un calque figé, redessiné quand la spirale glisse.
- **Particules du feu :** 12 au plus par forme et 600 au total.
- **Mélange additif de lumière** (`globalCompositeOperation = "lighter"`) pour le feu, les halos et les chevauchements.
- Objectif : 30 images par seconde au moins sur le portable de démonstration, mesuré avec les bases de test de 10 et 300 messages (backlog T6).

## 7. Esquisses

Trois esquisses, au même cadrage (écran 16:9, application complète, grille de la section 8.1). **Faites ✎** dans la page « Esquisses » du [fichier Figma](https://www.figma.com/design/o9vW6Uadmu6n6YKKC3tu2I/?node-id=16-4) : [1 · vide](esquisses/1-vide.png), [2 · quelques messages](esquisses/2-quelques.png), [3 · beaucoup de messages](esquisses/3-beaucoup.png).

| État | Ce qu'on voit |
| --- | --- |
| **Vide** | Fond Nuit uni, en-tête sans symbole tant qu'il n'est pas refait ✎, consigne lisible dans le panneau, bulletin « Ciel encore vide : écrivez le premier temps ». |
| **Quelques messages** (5 à 10) | Une petite spirale serrée au centre ; le message le plus récent dans l'œil ; une prévision en pointillés en train de devenir pleine ; au moins une forme avec un ou deux satellites (autre nœud) ; fond à peine teinté. |
| **Beaucoup de messages** (300) | Spirale large et dense, qui touche presque le bord ; les plus anciennes, au bord, pâlies ; le fond a pris la teinte moyenne ; une ou deux taches de brume ; bulletin « Ciel plutôt chaud et agité ». |

**Comment les produire ✎.** La semaine S48 est sans code : les esquisses sont **dessinées** (Figma ou papier scanné), en appliquant les règles de la section 6 à la lettre. Les positions se calculent avec la formule de 6.1 (un tableur suffit : 10 messages pour l'état « quelques », 300 pour l'état « beaucoup »). Le prototype Canvas (backlog O1, S50) reproduira ensuite ces trois états avec des données simulées : ses captures remplaceront les esquisses dans la version finale et servent de test de l'œuvre (backlog T6).

**Données utilisées ✎.** Les positions, couleurs, tailles et opacités sont dans [positions-10.csv](esquisses/positions-10.csv) et [positions-300.csv](esquisses/positions-300.csv) : une ligne par message, avec `n`, `k`, `r`, l'angle, `x`, `y`, les trois nombres avant et après la courbe en S, la couleur, le rayon, l'opacité, le nœud, `values_source` et `masque`. Les valeurs des messages sont tirées au hasard (avec une graine fixe), plus chaudes et plus agitées pour l'état « beaucoup ». Contrôle : `chaleur` 0,30 donne bien `#779ecb`, comme l'exemple de 6.1.

**Ce que montrent les esquisses ✎.**
- **Quelques (10) :** une petite spirale au centre ; le dernier message (`terre`, au centre) est une prévision en train de devenir pleine (contour pointillé, remplissage à 60 %) ; des satellites sur les messages de `noeud-a` et `noeud-b` ; fond teinté lavande (`chaleur` moyenne 0,45).
- **Beaucoup (300) :** la spirale touche presque le bord ; les messages au-delà de `k = 100` pâlissent et rapetissent ; trois prévisions récentes en pointillés près de l'œil ; deux taches de brume (`k` = 37 et 142) ; fond teinté ocre au bord (`chaleur` moyenne 0,74, `energie` 0,73 : « ciel plutôt chaud et agité »).
- **Point de 3.1 vérifié :** les formes bleues sont bien les plus discrètes sur fond Nuit, surtout au bord. À trancher avec Nicolas : éclaircir le bleu (`#4C8DE8`) ou garder ce contraste, qui met les messages chauds en avant.
- **Limites :** une esquisse est une image fixe, donc le mouvement (`energie`), la rotation des satellites et la « respiration » de la brume ne se voient pas. Les halos sont dessinés en dégradé radial d'une couleur parmi les 11 vecteurs, comme le prévoit 6.2.

**Pourquoi trois états.** Ils vérifient que l'œuvre reste belle au départ (pas d'écran vide gênant) et à la fin (pas de saturation).

## 8. Design system

**Jetons (tokens) :** couleurs de la section 3 (œuvre et interface séparées), polices et temps typographiques de la section 4 ✎, espacements 4 / 8 / 16 / 24 / 40 px, rayons 8 px (cartes) et 999 px (boutons, pastilles), une seule ombre : halo `0 0 24px` de la couleur du message (dans l'œuvre seulement, voir 6.2 : pré-calculé, jamais `shadowBlur` par forme).

### 8.1 Grille de l'écran

| Largeur | Disposition |
| --- | --- |
| **Écran large** (≥ 1024 px, cas principal : notre PC ou un second écran) | Œuvre à gauche, carrée, sur toute la hauteur (environ 2/3 de la largeur). Panneau à droite (environ 1/3, 360 à 480 px), fond Nuit claire, de haut en bas : symbole et nom · consigne · champ et bouton · avertissement · états de mes derniers messages · bulletin météo · légende repliée |
| **Tablette** (640 à 1023 px) | Œuvre en haut (carrée, pleine largeur) ; panneau en dessous |
| **Téléphone** (< 640 px, membres du tailnet en démonstration) | Champ en haut (on vient pour écrire), puis l'œuvre, puis bulletin et légende. Marges de 16 px |

L'œuvre a toujours un cadre **carré** (le repère normalisé de la section 6) ; le reste de la zone est rempli par le fond Nuit.

### 8.2 Composants

| Composant | Description | États |
| --- | --- | --- |
| Champ de saisie | Surface Nuit claire avec **bordure de 1 px en Brume claire** ✎ (sans elle, le champ se distingue à peine du fond : 1,2:1), texte dans la police du **temps prévu** (section 4.2) ✎, ligne « ☂ Temps prévu : pluie » sous le champ en Quicksand 13, compteur « 120 / 280 » en Plex Mono 13, phrase d'exemple en Brume claire (Quicksand) | vide, en saisie (bordure Lune, police qui suit le temps prévu), limite proche (compteur en Lune gras dès 260), dépassé ou refusé (compteur et message sous le champ en Givre rose) |
| Bouton « Envoyer » | Pastille Lune sur Nuit, texte Quicksand 700 couleur Nuit ✎, hauteur de 44 px au moins ✎ | normal, survol (halo Lune), désactivé (Brume claire), envoi en cours |
| Avertissement | Une ligne « Message définitif, sans donnée personnelle », détail dépliable | replié, déplié |
| Pastille d'état d'un message | Pictogramme + texte Quicksand 13 ✎. Le pictogramme porte l'état, pas la couleur | en attente : ○ Brume claire · dans un bloc : ◐ Lune · confirmé : ● Lune · remis en attente : ↺ Brume claire |
| Carte de message | Texte du message dans la police de son temps ✎ (section 4.1), index du bloc et début de l'`id` en Plex Mono 13 | prévision, passage prévu → observé, observation, masquée (« Message masqué » en Plex Mono, sans texte) |
| Info-bulle sur une forme | Survol d'une forme : début du texte dans la police de son temps ✎, nœud, valeurs, prévision ou observation | normale, masquée |
| Bulletin météo | Phrase en 22 px dans la police du **temps du ciel** ✎ (section 4.2), sous l'œuvre ou dans le panneau | change avec le ciel |
| Légende de l'œuvre | Les quatre formes, l'échelle des cinq couleurs, pointillé = prévision, satellites = nœud d'origine, brume = masqué | repliée, dépliée |
| Indicateur des trois nœuds ✎ (en plus) | Trois pastilles `a`, `b`, `c` en Plex Mono 13, avec un pictogramme : ● joignable, ○ injoignable. Montre « une chaîne, trois nœuds » pendant la démonstration | normal, un nœud injoignable |

**Accessibilité :** texte d'au moins 4,5:1 (Lune, Brume claire et Givre rose, sur Nuit comme sur Nuit claire) ; bordures et éléments d'interface d'au moins 3:1 ✎ ; **anneau de focus visible** de 2 px en Lune, décalé de 2 px, sur tout élément interactif ✎ ; aucun texte dans une couleur de l'œuvre ; la couleur n'est jamais la seule information (formes, pointillés, satellites, pictogrammes) ; option « réduire les animations » qui fige les mouvements, la rotation des satellites et le glissement (`prefers-reduced-motion`).

**Pourquoi.** Peu de composants, tous tirés de la palette et de la typographie de l'œuvre : l'application et l'œuvre forment un seul écran. **Écarté :** une bibliothèque de composants (inutile pour un seul écran, et contraire au choix « HTML, CSS et JavaScript natifs » du dossier §7).
