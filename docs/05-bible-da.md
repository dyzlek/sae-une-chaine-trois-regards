# Bible DA (direction artistique)

| Champ | Valeur |
| --- | --- |
| Binôme | n°3 · Dylan Belledent, Nicolas Rapuzzi--Pisarczyk · `noeud-c` |
| Responsable | Nicolas (relecture : Dylan) |
| Version | 0.1 (premier jet rédigé par Dylan à partir des choix de Nicolas, **à reprendre par Nicolas**) · 23/11/2026 |
| Rendu | PDF, vendredi 27/11/2026, 17h · pas de nombre de pages imposé |
| S'appuie sur | [charte éditoriale](04-charte-editoriale.md) v0.3 (valeurs), [dossier de binôme](03-dossier-binome.md) §6 (technique) |

> La référence de notre direction artistique. Chaque choix est justifié.
> **Test :** quelqu'un qui ne connaît pas le projet doit pouvoir, avec cette bible, dessiner un écran qui s'accorde avec notre œuvre.

**Légende.** **[À DESSINER]** : visuel à produire (Figma, papier scanné ou capture du prototype) avant l'export PDF.

---

## 1. Intention

**Une météo collective.** Chaque message est un temps qui passe : l'œuvre est un ciel nocturne que tous les visiteurs remplissent, un message après l'autre. Notre ciel est fait des quatre éléments : la pluie est de l'eau, l'orage du feu, le vent de l'air, et la terre est ce qui pèse, le sol sous le ciel.

**Ce que l'œuvre doit faire ressentir :**
- **Être entendu.** Le visiteur voit sa forme apparaître tout de suite, à sa place, et elle lui ressemble (calme, agitée, froide, chaude).
- **Ne pas être seul.** Son message rejoint ceux des autres, y compris ceux des deux autres binômes : le fond du ciel prend la couleur de l'humeur de tous.
- **La lenteur et la mémoire.** Rien ne s'efface (c'est une blockchain) : les anciens messages pâlissent sans disparaître, comme des étoiles lointaines.

**Le ton visuel :** calme, nocturne, précis. Une carte météo poétique plutôt qu'un feu d'artifice. Le mouvement est lent ; seuls les messages très agités vibrent.

**Pourquoi.** La consigne demande déjà « quel temps fait-il en vous ? » : l'œuvre répond dans la même langue. **Écarté :** un jardin (trop lent pour montrer l'agitation), une ville (trop chargé, peu lisible à petite taille).

## 2. Moodboard

**[À DESSINER]** une planche d'images (8 à 12), avec la source de chacune.

| Référence | Ce que nous en retenons | Ce que nous laissons |
| --- | --- | --- |
| Cartes météo (isobares, symboles, prévisions en pointillés) | Le **pointillé** de la prévision, les lignes fines, la légende lisible | Les couleurs saturées des cartes de température |
| Ciels de William Turner | Le **flou** et la lumière diffuse : la brume des messages masqués, le fond qui change de teinte | La matière de la peinture (impossible en Canvas sans effet lourd) |
| Phyllotaxie (cœur de tournesol, pomme de pin) | Une disposition **régulière et organique** quel que soit le nombre de messages | — |
| Photos de ciel nocturne et de longue pose | Le **fond bleu nuit**, les points lumineux qui pâlissent avec la distance | Le noir pur (trop dur, contraste fatigant) |
| Art génératif à base de particules et de champs de flux | Les **particules** du feu, les **traits** de l'air | La surcharge : chez nous, une forme par message, lisible |

## 3. Ambiance colorée

Fond sombre, couleurs **clés** plutôt qu'une teinte continue (le passage linéaire du bleu à l'orange traversait le vert et le jaune : les messages neutres auraient été verts).

| Rôle | Nom | Code | Contraste sur le fond | Usage |
| --- | --- | --- | --- | --- |
| Fond | Nuit | `#0E1424` | — | Fond de l'œuvre et de l'application |
| Surface | Nuit claire | `#1A2238` | 1,2:1 | Cartes, champ de saisie (jamais pour du texte) |
| `chaleur` 0 | Bleu | `#3F7FD6` | 4,6:1 | Messages froids, tristes, distants |
| `chaleur` 0,25 | Bleu-gris | `#7FA2C9` | 6,9:1 | Messages frais |
| `chaleur` 0,5 | Gris-lavande | `#B9B0CF` | 8,9:1 | Messages neutres |
| `chaleur` 0,75 | Ocre | `#E3AA4E` | 8,8:1 | Messages tièdes, doux |
| `chaleur` 1 | Orange | `#F26A25` | 6,0:1 | Messages chaleureux, joyeux |
| Texte | Lune | `#E8ECF4` | 15,5:1 | Texte principal |
| Texte secondaire | Brume claire | `#9AA3B5` | 7,2:1 | Légendes, états, aides |
| Brume | Brume | `#6B7385` | 3,9:1 | Messages masqués (halo flou, jamais du texte) |

**Règle de couleur d'un message :** `chaleur` est placée sur l'échelle des cinq couleurs-clés (0 ; 0,25 ; 0,5 ; 0,75 ; 1), et la couleur est **interpolée entre les deux clés voisines** (en espace OKLCH, pour garder une luminosité régulière).

**Pourquoi.** Le passage bleu → orange reste lisible pour les principaux types de daltonisme, et le gris-lavande au milieu évite le vert. Toutes les couleurs des formes dépassent 4,5:1 sur le fond (contrastes calculés). **Écarté :** un fond blanc (le ciel nocturne porte mieux les formes lumineuses), l'arc-en-ciel complet (trop de couleurs, aucune hiérarchie).

## 4. Typographie

| Rôle | Famille | Graisse et taille | Usage |
| --- | --- | --- | --- |
| Titres | **Fraunces** (Google Fonts, empattements doux) | 600 · 32 px (titre), 22 px (section) | Nom de l'œuvre, consigne « Quel temps fait-il en vous ? » |
| Texte | **Inter** (Google Fonts) | 400 et 500 · 16 px, interligne 1,5 | Champ de saisie, messages, bulletin, aides |
| Données | **IBM Plex Mono** (Google Fonts) | 400 · 13 px | `id`, hash de bloc, index, états techniques |

**Hiérarchie :** titre (Fraunces 32) → consigne (Fraunces 22) → texte (Inter 16) → légende et états (Inter 13, Brume claire) → données (Plex Mono 13).

**Pourquoi.** Fraunces apporte la poésie du bulletin météo ; Inter reste lisible à toutes les tailles et sur écran sombre ; la chasse fixe de Plex Mono montre que les `id` et hash sont des données de la chaîne. Les trois sont libres et gratuites. **Écarté :** une seule famille (perd la différence entre poésie et données), une écriture manuscrite (peu lisible, mal accentuée).

## 5. Symbole

**[À DESSINER]** le symbole et ses déclinaisons.

**Le signe :** un cercle de **points en phyllotaxie** (comme l'œuvre), dont les points passent du bleu à l'orange en suivant les couleurs-clés. Il résume l'œuvre : une chaîne de messages, disposés en spirale, de toutes les températures.

| Déclinaison | Description | Usage |
| --- | --- | --- |
| Principale | 34 points en couleur sur fond Nuit | En-tête de l'application, couverture des PDF |
| Monochrome | Points couleur Lune | Petites tailles, documents imprimés |
| Icône (favicon) | 8 points, 32 × 32 px | Onglet du navigateur |
| Avec nom | Symbole + « Météo collective » en Fraunces | Titre de la page |

**Règles :** marge autour du symbole égale au diamètre d'un point ; jamais de déformation ni de contour ; taille minimale 16 px.

**Pourquoi.** Le symbole est fait de la même règle que l'œuvre : il se reconnaît dès qu'on la voit. **Écarté :** un nuage ou un soleil (trop banal, ne dit rien de la chaîne).

## 6. Règles génératives

Les valeurs sont définies dans la [charte éditoriale](04-charte-editoriale.md) (§2). Une forme par message, dessinée en Canvas 2D, dans un repère normalisé (0 à 1) puis mis à l'échelle de l'écran.

| Valeur | Paramètre visuel | Règle |
| --- | --- | --- |
| `theme` | Famille de forme | `eau` : ondes concentriques · `terre` : polygones (5 à 7 côtés) posés · `feu` : particules qui montent · `air` : traits fins courbes |
| `chaleur` | Couleur | Couleurs-clés interpolées (section 3). Une colère froide donne un **feu bleu** |
| `energie` | Mouvement | Vitesse et amplitude : de l'ondulation lente (0) à la vibration rapide (1). Au-delà de 0,8, la forme tremble |
| `densite` | Taille et opacité | Rayon de 0,8 % à 3 % de la largeur ; opacité de 45 % à 95 % |
| Les trois nombres | Contraste | Courbe en S appliquée avant le dessin, pour étirer les valeurs groupées (l'IA donne souvent 0,2 ou 0,8) |
| Rang dans la chaîne (index du bloc, puis position) | Emplacement | **Phyllotaxie** : angle = rang × 137,5°, rayon ∝ √rang. Régulier quel que soit le nombre de messages par bloc |
| `id` du message | Petites variations | Graine d'un générateur pseudo-aléatoire : même message, même dessin. Jamais `Math.random` |
| `node` (nœud d'origine) | Contour | `noeud-a` : contour plein · `noeud-b` : contour double · `noeud-c` (nous) : sans contour. « Une chaîne, trois regards » se voit sans IA |
| `values_source` | Prévision ou observation | `local` : contour en **pointillés**, remplissage à 30 % · `ia` : forme **pleine**. Passage animé en 1,5 s |
| `masquer` | Brume | Halo gris flou (Brume), sans forme ni couleur ; info-bulle « Message masqué (charte §4) » |
| Moyenne des 20 derniers messages | Fond du ciel | Dégradé radial du fond teinté par la `chaleur` moyenne (5 % au plus) ; légère ondulation selon l'`energie` moyenne |
| Âge (rang par rapport au dernier) | Vieillissement | Au-delà de 150 formes, les plus anciennes perdent opacité et taille, puis se fondent dans le fond |

**Exemple.** `Il pleut sur Béziers ce matin.` (`energie` 0,20, `chaleur` 0,30, `densite` 0,25, `eau`) : ondes concentriques lentes, entre bleu-gris et bleu, petites et assez transparentes, sans contour (message entré chez nous).

**Pourquoi.** Chaque valeur pilote un seul canal visuel (forme, couleur, mouvement, taille) : on peut lire l'œuvre. **Écarté :** plusieurs valeurs sur la couleur (illisible), la position par `timestamp` (la spec impose l'ordre de la chaîne).

## 7. Esquisses

**[À DESSINER]** trois esquisses, au même cadrage (écran 16:9, application complète).

| État | Ce qu'on voit |
| --- | --- |
| **Vide** | Fond Nuit uni, symbole au centre en monochrome très pâle, consigne lisible, bulletin « Ciel encore vide : écrivez le premier temps ». |
| **Quelques messages** (5 à 10) | Formes bien séparées autour du centre ; une prévision en pointillés en train de devenir pleine ; au moins un contour d'un autre nœud ; fond à peine teinté. |
| **Beaucoup de messages** (300) | Spirale dense ; les plus anciennes pâlies au bord ; le fond a pris la teinte moyenne ; une ou deux taches de brume ; bulletin « Ciel plutôt chaud et agité ». |

**Pourquoi trois états.** Ils vérifient que l'œuvre reste belle au départ (pas d'écran vide gênant) et à la fin (pas de saturation).

## 8. Design system

**Jetons (tokens) :** couleurs de la section 3, typographies de la section 4, espacements 4 / 8 / 16 / 24 / 40 px, rayons 8 px (cartes) et 999 px (boutons, pastilles), une seule ombre : halo `0 0 24px` de la couleur du message.

| Composant | Description | États |
| --- | --- | --- |
| Champ de saisie | Surface Nuit claire, texte Inter 16, compteur « 120 / 280 » en Plex Mono, phrase d'exemple en Brume claire | vide, en saisie, limite proche (compteur ocre), refusé (message sous le champ) |
| Bouton « Envoyer » | Pastille Lune sur Nuit, texte Inter 500 | normal, survol, désactivé, envoi en cours |
| Avertissement | Une ligne « Message définitif, sans donnée personnelle », détail dépliable | — |
| Pastille d'état d'un message | Texte Inter 13 + point de couleur | en attente (Brume claire), dans un bloc (Lavande), confirmé (Lune), remis en attente (Ocre) |
| Carte de message | Texte du message, index du bloc et début de l'`id` en Plex Mono | normale, masquée (« Message masqué », sans texte) |
| Info-bulle sur une forme | Survol d'une forme : début du texte, nœud, valeurs | normale, masquée |
| Bulletin météo | Phrase en Fraunces 22 sous l'œuvre | — |
| Légende de l'œuvre | Les quatre formes, l'échelle de couleur, pointillé = prévision | repliée, dépliée |

**Accessibilité :** texte d'au moins 4,5:1 (Lune et Brume claire sur Nuit) ; la couleur n'est jamais la seule information (formes et pointillés aussi) ; option « réduire les animations » qui fige les mouvements (`prefers-reduced-motion`).

**Pourquoi.** Peu de composants, tous tirés de la palette et des typographies de l'œuvre : l'application et l'œuvre forment un seul écran. **Écarté :** une bibliothèque de composants (inutile pour un seul écran, et contraire au choix « HTML, CSS et JavaScript natifs » du dossier §7).
