# Bible DA (direction artistique)

| Champ | Valeur |
| --- | --- |
| Binôme | n°3 · Dylan Belledent, Nicolas Rapuzzi--Pisarczyk · `noeud-c` |
| Responsable | Nicolas (relecture : Dylan) |
| Version | 0.2 · 23/11/2026 · relecture complète : contour à un seul usage, spirale dont les nouveaux messages sont au centre, typographie Recursive, couleurs d'état propres à l'interface, grille de l'écran, nom de l'œuvre. **À valider par Nicolas** (chaque changement est marqué ✎) |
| Rendu | PDF, vendredi 27/11/2026, 17h · pas de nombre de pages imposé |
| S'appuie sur | [charte éditoriale](04-charte-editoriale.md) v0.4 (valeurs), [dossier de binôme](03-dossier-binome.md) §6 (technique) |

> La référence de notre direction artistique. Chaque choix est justifié.
> **Test :** quelqu'un qui ne connaît pas le projet doit pouvoir, avec cette bible, dessiner un écran qui s'accorde avec notre œuvre.

**Légende.** **[À DESSINER]** : visuel à produire (Figma, papier scanné ou capture du prototype) avant l'export PDF. **✎** : changement de la v0.2, à valider par Nicolas.

---

## 1. Intention

**Nom de l'œuvre ✎ : *Front commun*.** Un front, en météo, est la ligne où deux masses d'air se rencontrent ; « commun », parce que trois binômes écrivent dans la même chaîne. Le nom dit à la fois la météo et le collectif. **Écarté :** « Météo collective » (décrit l'idée mais n'est pas un titre), « Dépression » (trop sombre).

**Une météo collective, vue d'en haut ✎.** L'œuvre est une **image satellite de nuit** : une dépression qui s'enroule en spirale. Chaque message est un temps qui passe et vient se placer dans **l'œil du cyclone**. À chaque nouveau message, la spirale tourne d'un cran et les anciens s'éloignent vers le bord. Notre ciel est fait des quatre éléments : la pluie est de l'eau, l'orage du feu, le vent de l'air, et la terre est ce qui pèse, le sol sous le ciel.

**Pourquoi la spirale ✎.** Une dépression vue par satellite *est* une spirale : la disposition en phyllotaxie (angle d'or) n'est plus une image de tournesol plaquée sur une météo, elle en fait partie. Une seule image tient tout : la carte météo (la légende, les prévisions), le ciel de nuit (le fond), le cyclone (la disposition).

**Ce que l'œuvre doit faire ressentir :**
- **Être entendu.** Le visiteur voit sa forme apparaître tout de suite, **au centre**, à la place la plus visible, et elle lui ressemble (calme, agitée, froide, chaude).
- **Ne pas être seul.** Son message rejoint ceux des autres, y compris ceux des deux autres binômes : le fond du ciel prend la couleur de l'humeur de tous.
- **La lenteur et la mémoire.** Rien ne s'efface (c'est une blockchain) : les anciens messages s'éloignent et pâlissent sans disparaître, comme des nuages qui quittent l'image.

**Le ton visuel :** calme, nocturne, précis. Une carte météo poétique plutôt qu'un feu d'artifice. Le mouvement est lent ; seuls les messages très agités vibrent.

**Pourquoi.** La consigne demande déjà « quel temps fait-il en vous ? » : l'œuvre répond dans la même langue. **Écarté :** un jardin (trop lent pour montrer l'agitation), une ville (trop chargée, peu lisible à petite taille), un ciel étoilé sans structure (il ne montrerait pas l'ordre de la chaîne).

## 2. Moodboard

**[À DESSINER]** une planche d'images (8 à 12), avec la source de chacune.

| Référence | Ce que nous en retenons | Ce que nous laissons |
| --- | --- | --- |
| Images satellite Météosat et GOES (canal infrarouge, de nuit) ✎ | La **spirale** d'une dépression, l'**œil** au centre, les gris bleutés du ciel de nuit | Les fausses couleurs vives des cartes de température |
| Cartes météo (isobares, symboles, prévisions en pointillés) | Le **pointillé** de la prévision, les lignes fines, la légende lisible | Les couleurs saturées |
| Ciels de William Turner | Le **flou** et la lumière diffuse : la brume des messages masqués, le fond qui change de teinte | La matière de la peinture (impossible en Canvas sans effet lourd) |
| Phyllotaxie (cœur de tournesol, pomme de pin) | La règle de l'**angle d'or** : une disposition régulière quel que soit le nombre de messages | L'image végétale : chez nous, la spirale est celle d'un cyclone |
| Photos de ciel nocturne et de longue pose | Le **fond bleu nuit**, les points lumineux qui pâlissent avec la distance | Le noir pur (trop dur, contraste fatigant) |
| Art génératif à base de particules et de champs de flux | Les **particules** du feu, les **traits** de l'air | La surcharge : chez nous, une forme par message, lisible |

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

**Ces couleurs sont réservées à l'œuvre ✎.** Elles portent une seule information, la `chaleur` d'un message, et ne sont **jamais** réutilisées dans l'interface (états, alertes, compteur). Sinon, un ocre voudrait dire à la fois « tiède » et « attention ».

**Règle de couleur d'un message :** `chaleur` est placée sur l'échelle des cinq couleurs-clés (0 ; 0,25 ; 0,5 ; 0,75 ; 1), et la couleur est **interpolée entre les deux clés voisines** (en espace OKLCH, pour garder une luminosité régulière).

**Contraste des formes ✎.** Les ratios ci-dessus sont ceux des couleurs **pleines**. Les formes sont dessinées avec une opacité de 45 à 95 % et un halo : leur lisibilité ne se juge pas comme celle d'un texte, mais à l'œil sur les esquisses. La règle est donc : **aucun texte n'est écrit dans une couleur de l'œuvre**, et l'information n'est jamais portée par la seule couleur (la forme dit l'élément, le pointillé dit la prévision).

### 3.2 Couleurs de l'interface ✎

| Rôle | Nom | Code | Contraste sur Nuit / Nuit claire | Usage |
| --- | --- | --- | --- | --- |
| Surface | Nuit claire | `#1A2238` | 1,2:1 | Panneau, cartes, champ de saisie (jamais pour du texte) |
| Texte | Lune | `#E8ECF4` | 15,5:1 / 13,3:1 | Texte principal, états actifs |
| Texte secondaire | Brume claire | `#9AA3B5` | 7,2:1 / 6,2:1 | Légendes, états en attente, aides |
| Alerte | Givre rose | `#F28B9B` | 7,8:1 / 6,7:1 | Refus d'un message, compteur dépassé, erreur. Seule couleur d'alerte |

**Pourquoi.** Le passage bleu → orange reste lisible pour les principaux types de daltonisme, et le gris-lavande au milieu évite le vert. L'interface n'utilise que des gris lunaires et une seule alerte : elle s'efface devant l'œuvre. Le rose de l'alerte est assez loin de l'orange pour ne pas être lu comme une `chaleur`, et un refus est toujours écrit en toutes lettres. **Écarté :** un fond blanc (le ciel nocturne porte mieux les formes lumineuses), l'arc-en-ciel complet (trop de couleurs, aucune hiérarchie), le rouge vif pour l'alerte (agressif sur fond nuit, et trop proche de l'orange chaud).

## 4. Typographie ✎

**Une seule famille, trois réglages : Recursive** (Google Fonts, libre, variable). Recursive a deux axes qui nous servent directement : **Mono** (de proportionnelle à chasse fixe) et **Casual** (du dessin net au dessin manuscrit souple).

| Rôle | Réglage de Recursive | Graisse et taille | Usage |
| --- | --- | --- | --- |
| Titres et poésie | **Casual 1, Mono 0** (« Sans Casual ») | 700 · 32 px (titre) ; 500 · 22 px (consigne, bulletin) | Nom de l'œuvre, consigne « Quel temps fait-il en vous ? », bulletin météo |
| Texte | **Casual 0, Mono 0** (« Sans Linear ») | 400 et 600 · 16 px, interligne 1,5 | Champ de saisie, messages, aides |
| Données | **Casual 0, Mono 1** (« Mono Linear ») | 400 · 13 px | `id`, hash de bloc, index, compteur, états techniques |

**Hiérarchie :** titre (Casual 700, 32) → consigne et bulletin (Casual 500, 22) → texte (Linear 400, 16) → légende et états (Linear 400, 13, Brume claire) → données (Mono 400, 13).

**Pourquoi.** « Une chaîne, trois regards » : une seule famille, comme une seule chaîne, avec trois réglages, comme trois regards. Le réglage Casual apporte la voix humaine du bulletin, Linear la lisibilité, Mono le côté donnée de la chaîne : la différence entre poésie et données reste visible, sans mélanger trois familles qui ne se ressemblent pas. Un seul fichier variable à charger. **Écarté :** Fraunces, Inter et IBM Plex Mono (v0.1 : trois familles très répandues, l'ensemble faisait « modèle de site » et pas « œuvre ») ; une écriture manuscrite (peu lisible, mal accentuée).

**Piste en plus (si le temps le permet) :** l'axe Casual du bulletin suit l'`energie` moyenne du ciel (calme : dessin net ; agité : dessin plus souple).

## 5. Symbole

**[À DESSINER]** le symbole et ses déclinaisons.

**Le signe :** une **petite dépression** : des points disposés selon l'angle d'or autour d'un œil vide, dont les points passent du bleu à l'orange en suivant les couleurs-clés (les plus chauds au centre). Il résume l'œuvre : des messages de toutes les températures, enroulés en spirale.

| Déclinaison | Description | Usage |
| --- | --- | --- |
| Principale | 34 points en couleur sur fond Nuit | En-tête de l'application, couverture des PDF |
| Monochrome | Points couleur Lune | Petites tailles, documents imprimés |
| Icône (favicon) | 8 points, 32 × 32 px | Onglet du navigateur |
| Avec nom | Symbole + « Front commun » en Recursive Casual 700 | Titre de la page |

**Règles :** marge autour du symbole égale au diamètre d'un point ; jamais de déformation ni de contour ; taille minimale 16 px.

**Pourquoi.** Le symbole est fait de la même règle que l'œuvre : il se reconnaît dès qu'on la voit. **Écarté :** un nuage ou un soleil (trop banal, ne dit rien de la chaîne).

## 6. Règles génératives

Les valeurs sont définies dans la [charte éditoriale](04-charte-editoriale.md) (§2). Une forme par message, dessinée en Canvas 2D, dans un repère normalisé (0 à 1 sur le **petit côté** du cadre) puis mis à l'échelle de l'écran. **Un canal visuel = une seule information** : c'est ce qui rend l'œuvre lisible.

| Information | Canal visuel | Règle |
| --- | --- | --- |
| `theme` | Famille de forme | `eau` : ondes concentriques · `terre` : polygones (5 à 7 côtés) posés · `feu` : particules qui montent · `air` : traits fins courbes |
| `chaleur` | Couleur | Couleurs-clés interpolées (section 3.1). Une colère froide donne un **feu bleu** |
| `energie` | Mouvement | Vitesse et amplitude : de l'ondulation lente (0) à la vibration rapide (1). Au-delà de 0,8, la forme tremble |
| `densite` | Taille et opacité | ✎ Rayon de 0,6 % à 2 % du petit côté ; opacité de 45 % à 95 % |
| Les trois nombres | (contraste) | Courbe en S appliquée avant le dessin, pour étirer les valeurs groupées (l'IA donne souvent 0,2 ou 0,8) |
| Rang dans la chaîne | Emplacement | ✎ Voir 6.1 : le plus récent au centre |
| `id` du message | Petites variations | Graine d'un générateur pseudo-aléatoire : même message, même dessin. Jamais `Math.random` |
| `node` (nœud d'origine) | ✎ **Satellites** | Petits points Lune (60 % d'opacité, 0,3 % du petit côté) qui tournent lentement autour de la forme : `noeud-a` : 1 satellite · `noeud-b` : 2 satellites · `noeud-c` (nous) : aucun. « Une chaîne, trois regards » se voit sans IA |
| `values_source` | **Contour** (son seul usage) | `local` : contour en **pointillés**, remplissage à 30 % (une **prévision**) · `ia` : forme **pleine, sans contour** (une **observation**). Passage animé en 1,5 s |
| `masquer` | Brume | Halo gris flou (Brume), sans forme ni couleur ; les satellites restent (l'origine n'est pas un contenu) ; info-bulle « Message masqué (charte §4) » |
| Moyenne des 20 derniers messages | Fond du ciel | Dégradé radial du fond, depuis l'œil, teinté par la `chaleur` moyenne (5 % au plus) ; légère ondulation selon l'`energie` moyenne |
| Âge | Vieillissement | Voir 6.1 |

**Pourquoi les satellites ✎.** En v0.1, le contour disait à la fois le nœud d'origine (plein, double, absent) et la prévision (pointillés) : un message de `noeud-a` aux valeurs locales n'avait pas de dessin défini. Le contour ne dit plus que la prévision, qui est l'information qui change pendant la démonstration ; l'origine passe aux satellites, qui ne gênent ni la couleur ni la forme. **Écarté :** une texture par nœud (illisible sur une forme de 1 %), une couleur par nœud (la couleur est déjà la `chaleur`).

### 6.1 La spirale ✎

Les messages sont rangés dans l'ordre de la chaîne (index du bloc, puis position dans le bloc ; jamais `timestamp`, spec §5.3). On compte leur **rang depuis le plus récent** : `k = 0` pour le dernier message, `k = 1` pour l'avant-dernier, etc.

- **Angle :** `k × 137,5°` (angle d'or).
- **Rayon :** `0,023 × √k` dans le repère normalisé. Le message `k = 400` arrive au bord (rayon 0,46).
- **Arrivée d'un message :** il prend `k = 0`, au centre (l'œil). Tous les autres passent de `k` à `k + 1` : la spirale **tourne d'un cran et s'élargit**, en 1,2 s d'animation douce.
- **Vieillissement :** de `k = 150` à `k = 400`, opacité et taille baissent jusqu'à 30 %. Au-delà de 400, le message n'est plus dessiné seul : il est **fondu dans le fond** (il compte toujours dans la teinte moyenne du ciel).
- **Fourche :** la position ne dépend que de la chaîne, donc l'œuvre se redessine exactement après une réorganisation (dossier §3, étape 9).

**Pourquoi.** En v0.1, le rayon suivait le rang depuis le premier message : les plus anciens étaient au centre, ce qui contredisait l'esquisse (« les plus anciennes pâlies au bord ») et l'intention (« elles s'éloignent »), et la spirale débordait de l'écran sans limite. Avec le rang depuis le plus récent, le nouveau message est au centre, là où on regarde, la rotation d'un cran montre le temps qui passe, et la taille de la spirale est bornée. Rayon maximal de 2 % et espacement d'environ 4 % entre voisins : les formes se touchent à peine. **Écarté :** un rayon recalculé selon le nombre total de messages (toutes les positions changeraient d'échelle à chaque message), une grille (pas de mouvement, pas de cyclone).

**Exemple.** `Il pleut sur Béziers ce matin.` (`energie` 0,20, `chaleur` 0,30, `densite` 0,25, `eau`), entré chez nous, valeurs de l'IA : des ondes concentriques lentes, entre bleu-gris et bleu, petites et assez transparentes, pleines, sans satellite. Il apparaît au centre ; dix messages plus tard, il est à `k = 10`, à 0,073 du centre.

## 7. Esquisses

**[À DESSINER]** trois esquisses, au même cadrage (écran 16:9, application complète, grille de la section 8.1).

| État | Ce qu'on voit |
| --- | --- |
| **Vide** | Fond Nuit uni, symbole au centre de l'œuvre en monochrome très pâle (l'œil encore vide), consigne lisible dans le panneau, bulletin « Ciel encore vide : écrivez le premier temps ». |
| **Quelques messages** (5 à 10) | Une petite spirale serrée au centre ; le message le plus récent dans l'œil ; une prévision en pointillés en train de devenir pleine ; au moins une forme avec un ou deux satellites (autre nœud) ; fond à peine teinté. |
| **Beaucoup de messages** (300) | Spirale large et dense, qui touche presque le bord ; les plus anciennes, au bord, pâlies ; le fond a pris la teinte moyenne ; une ou deux taches de brume ; bulletin « Ciel plutôt chaud et agité ». |

**Pourquoi trois états.** Ils vérifient que l'œuvre reste belle au départ (pas d'écran vide gênant) et à la fin (pas de saturation).

## 8. Design system

**Jetons (tokens) :** couleurs de la section 3 (œuvre et interface séparées), réglages de Recursive de la section 4, espacements 4 / 8 / 16 / 24 / 40 px, rayons 8 px (cartes) et 999 px (boutons, pastilles), une seule ombre : halo `0 0 24px` de la couleur du message (dans l'œuvre seulement).

### 8.1 Grille de l'écran ✎

| Largeur | Disposition |
| --- | --- |
| **Écran large** (≥ 1024 px, cas principal : notre PC ou un second écran) | Œuvre à gauche, carrée, sur toute la hauteur (environ 2/3 de la largeur). Panneau à droite (environ 1/3, 360 à 480 px), fond Nuit claire, de haut en bas : symbole et nom · consigne · champ et bouton · avertissement · états de mes derniers messages · bulletin météo · légende repliée |
| **Tablette** (640 à 1023 px) | Œuvre en haut (carrée, pleine largeur) ; panneau en dessous |
| **Téléphone** (< 640 px, membres du tailnet en démonstration) | Champ en haut (on vient pour écrire), puis l'œuvre, puis bulletin et légende. Marges de 16 px |

L'œuvre a toujours un cadre **carré** (le repère normalisé de la section 6) ; le reste de la zone est rempli par le fond Nuit.

### 8.2 Composants

| Composant | Description | États |
| --- | --- | --- |
| Champ de saisie | Surface Nuit claire, Recursive Linear 16, compteur « 120 / 280 » en Mono 13, phrase d'exemple en Brume claire | vide, en saisie, limite proche (compteur en Lune gras dès 260), dépassé ou refusé (compteur et message sous le champ en Givre rose) |
| Bouton « Envoyer » | Pastille Lune sur Nuit, texte Recursive Linear 600 couleur Nuit | normal, survol (halo Lune), désactivé (Brume claire), envoi en cours |
| Avertissement | Une ligne « Message définitif, sans donnée personnelle », détail dépliable | replié, déplié |
| Pastille d'état d'un message ✎ | Pictogramme + texte Linear 13. Le pictogramme porte l'état, pas la couleur | en attente : ○ Brume claire · dans un bloc : ◐ Lune · confirmé : ● Lune · remis en attente : ↺ Brume claire |
| Carte de message | Texte du message, index du bloc et début de l'`id` en Mono 13 | normale, masquée (« Message masqué », sans texte) |
| Info-bulle sur une forme | Survol d'une forme : début du texte, nœud, valeurs, prévision ou observation | normale, masquée |
| Bulletin météo | Phrase en Recursive Casual 500, 22 px, sous l'œuvre ou dans le panneau | — |
| Légende de l'œuvre | Les quatre formes, l'échelle des cinq couleurs, pointillé = prévision, satellites = nœud d'origine, brume = masqué | repliée, dépliée |

**Accessibilité :** texte d'au moins 4,5:1 (Lune, Brume claire et Givre rose, sur Nuit comme sur Nuit claire) ; aucun texte dans une couleur de l'œuvre ; la couleur n'est jamais la seule information (formes, pointillés, satellites, pictogrammes) ; option « réduire les animations » qui fige les mouvements et la rotation (`prefers-reduced-motion`).

**Pourquoi.** Peu de composants, tous tirés de la palette et de la typographie de l'œuvre : l'application et l'œuvre forment un seul écran. **Écarté :** une bibliothèque de composants (inutile pour un seul écran, et contraire au choix « HTML, CSS et JavaScript natifs » du dossier §7).
