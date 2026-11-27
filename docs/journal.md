# Journal de bord

Plus récent en haut. Un daily par matin : **hier / aujourd'hui / blocages**.

## Modèle d'entrée
```
### AAAA-MM-JJ · Sx
**Hier :** …
**Aujourd'hui :** …
**Blocages :** …
**Décisions :** … (détail dans decisions.md)
```

---

### 2026-11-27 · S48 · Spec v1.1 validée, refonte symbole/moodboard, cohérence complète avant rendu (Dylan)
**Hier :** proposition de spec v1.1 validée par les trois binômes le 26/11/2026 (remplace la v1.0) ; moodboard et premier symbole produits par Nicolas.
**Aujourd'hui :**
- **Symbole (`D-026`) :** refonte du cristal-île en un seul massif low-poly continu (crête asymétrique + quille cristalline), **sans trait bleu horizontal** et d'une **teinte unie selon l'émotion majoritaire** des 6 derniers messages (plus de patchwork ni d'effet « cornet de glace »). Planche et 4 SVG regénérés (`docs/symbole/`).
- **Typographie (`D-028`) :** adoption du duo **Bricolage Grotesque** (titres, consigne, repères) + **Recursive** (Linear pour l'interface, Mono pour les données) sur **tous** les supports (application, planche symbole, moodboard Figma, bible DA §4).
- **Moodboard Figma (`C4`) :** mis à jour directement dans Figma (nouvelle typo, carte spécimen typographique ajoutée, notes fonctionnelles remplacées par des notes d'ambiance, 11 pastilles alignées sur la palette §3.1) et ré-exporté en PNG (`docs/moodboard-terre/moodboard-planche.png`) ; liens Commons CC BY complets ajoutés dans `docs/moodboard-sources.md`.
- **Synchronisation complète sur la spec v1.1 validée (`D-027`) :** `docs/spec-commune.md`, `docs/02-spec-commune.md`, `docs/spec-commune/v1.1-proposition.md`, `docs/spec-commune/propositions-v1.1.md` et `tests/vectors/README.md` alignés (O5 clos, 36 cas, notre part = 10 cas).
- **Corrections croisées des documents :**
  - `docs/03-dossier-binome.md` v0.14 : quotas IA chiffrés (500/j au mieux, 250/j au pire, 20 msg/min, 20 req/min OpenRouter), chaîne d'essai exclue de l'IA, mise à jour de `block_index` après fourche, retraitement limité aux échecs (`D-006`), palier 2 avancé au mercredi 09/12 matin au plus tard, suppression des espaces clarifiée (application puis contrôle strict du nœud).
  - `docs/04-charte-editoriale.md` v1.4 : normalisation exacte des accents (NFD) et des emojis composés (retrait `U+FE0F`), effets pluie/brouillard alignés sur bible §6.3, messages de refus ajoutés pour l'horloge désynchronisée/reculée (§4.1).
  - `docs/05-bible-da.md` v1.5 : §2, §4, §5 et §8 synchronisés ; messages masqués explicitement exclus de la fenêtre d'atmosphère des 5 derniers (§6.3).
  - `docs/06-backlog.md` v2.0, `docs/07-evaluation.md`, `docs/a-faire.md` : socle du 10/12 (§10.0) distingué en N5, `chaines.json` ajouté en N1, palier 2 avancé, S49 mise à jour (polices locales + réglage manuel d'horloge HTTPS).

- **Esquisses 16:9 Three.js (`C6`) :** 3 vues 1920 × 1080 générées en vrai WebGL Three.js (`docs/esquisses/index.html` → `1-vide.png`, `2-quelques.png`, `3-beaucoup.png`) avec plages de sable doré continues (`96 × 96`), vrai cône volcanique en basalte + cratère lumineux, patch filaire circulaire en prévision, et UI cartel d'exposition / carnet cartographique (§8).
- **Accessibilité, schéma PDF & nettoyage :** contrastes vérifiés par calcul (tous AAA : Sel 17,3:1, Embruns 7,4:1, nœuds 7,0 à 11,4:1), double encodage daltonisme + liste accessible clavier/lecteur d'écran ajoutés en bible §3.2 et §8, numéros d'aide (`3114`, `15`, `112`) ajoutés dans la charte §1, schéma vectoriel `docs/architecture.svg` intégré dans le dossier §2, et fichiers hors-sujet (`art-generatif.pdf`, `LAST_CLICK_Presentation.pptx`) retirés du dépôt.
- **Validation à deux :** Nicolas a validé à l'oral le 27/11 l'ensemble des livrables (`C3`, `C9`, `D-023` à `D-028`).

**Blocages / Reste avant 17h :** faire passer le test de la charte à 3 personnes extérieures (C7), exporter et déposer les 4 PDF (C10). *(C11 clos : la spec v1.1 est partagée directement en PDF, sans dépôt commun.)*
**Décisions :** D-026 (affinée), D-027 (validée), D-028, D-006 et D-009 (précisées) dans `decisions.md`.

### 2026-11-26 · S48 · Réponse à la relecture de la spec (Dylan, avec Claude Code)
**Aujourd'hui :**
- L'équipe enseignante a relu la spec v1.0 : formats et cryptographie justes, mais deux points bloquants (horloge contournée et chaîne qui peut geler ; bloc invalide produit par un nœud qui suit 4.2), cinq points importants et huit mineurs.
- Proposition de **spec v1.1** écrite pour les six ([texte complet](spec-commune/v1.1-proposition.md), [réponses point par point](spec-commune/propositions-v1.1.md)), chaque correction marquée de son repère (B1 à M8). Aucun format ni vecteur existant ne change. Le bloc zéro réel avec l'empreinte des clés a été recalculé (exemple avec les clés de test dans §2.3.1).
- Nos fichiers alignés : cas 20 (60 s au lieu de 40 s), README des vecteurs (heure du cas 23), dossier v0.13 (production, horloge, `CHAINE`, risques), backlog v1.8 (C12 passe en indispensable, C13 ajouté).
- Relecture de la proposition par Dylan, trois ajustements : tests sur un seul PC (table « adresse:port » en mode test, une adresse de boucle locale par nœud, car tout viendrait sinon de `127.0.0.1`) ; arrêt de la chaîne si les trois horloges sont fausses deux à deux, écrit dans les limites acceptées, horloges réglées à la main à chaque séance ; dépôt des vecteurs le lundi 07/12 sauf accord des enseignants pour un script en S49 (O6, tâche C14).

**Blocages :** la v1.1 doit être relue par Nicolas puis validée par un membre de chaque binôme (pull request, spec §11) ; B1 et B2 avant tout code. Écart réel des horloges sur eduroam à mesurer (O4). Le dépôt commun (O1) n'existe pas encore. Réponse des enseignants sur le code en S49 attendue (O6).
**Décisions :** D-027 (`decisions.md`).

### 2026-11-26 · S48 · Symbole : le cristal-île (Nicolas, avec Claude Code)
**Aujourd'hui :**
- Symbole fait (C5), à partir du cours d'art génératif (« le logo algorithmique » : *Visit Nordkyn*, *MIT Media Lab*) et des règles de la bible : une île low-poly coupée par la mer, la terre au-dessus (hauteur = part de terre), la racine en dessous (profondeur = nombre de messages), six secteurs colorés par l'`emotion` des six derniers messages. Même PRNG et même lumière que l'œuvre (`D-026`).
- Deux essais écartés en route : une double pyramide symétrique (lue comme le losange de `noeud-c`) et une île à 15 facettes (illisible en petit).
- Planche [symbole/planche-symbole.png](symbole/planche-symbole.png) (référence annotée, logo vivant de 0 à 300 messages, états prévision et masqué, déclinaisons, interdits) ; SVG de référence, favicon, mono Sel, mono Encre.
- Bible DA v1.4 (§5 complet, composant « Symbole » en §8.2), backlog v1.8 (C5 fait, O10 logo vivant en plus), `a-faire.md`, `07-evaluation.md`.
- Vérification des 8 éléments de la bible : 1, 3, 4, 5, 6 complets ; 2 (moodboard) texte fait mais planche pas encore exportée en PNG ni liée ; 7 (esquisses) pas produites ; 8 (design system) en texte seulement.

- Relecture à deux : le cristal-île est réussi techniquement mais « n'évoque rien » (il traduit des données, pas une idée). Trois nouvelles pistes, chacune sur un double sens, dessinées sur une planche de comparaison (retirée ensuite du dépôt) : **A · La chaîne** (chaîne de blocs = chaîne de montagnes, trois sommets sur une seule terre, strates = blocs), **B · L'empreinte** (empreinte digitale = courbes de niveau), **C · La bulle-île** (bulle de message = île vue du ciel).

- Après comparaison, **on garde le cristal-île** : c'est le seul symbole calculé comme l'œuvre ; les trois pistes sont notées comme écartées (bible §5.1, `D-026`).
- Moodboard : retrouvé et rangé le même jour dans `docs/moodboard-terre/` (voir l'entrée suivante).
- Planche du symbole refaite dans la DA de la planche du moodboard (fond crème, halo aqua, courbes de niveau, cartes blanches scotchées, étiquettes en pastille, Fraunces / Quicksand / IBM Plex Mono) ; les symboles eux-mêmes ne changent pas, et le bloc-marque reste en Recursive, police de l'application.
- Journal de prompts complété : les 32 tout premiers prompts de Nicolas (23 au 26/11), faits dans une conversation ouverte hors du dépôt et donc jamais vus par le hook, sont archivés dans [prompts/00-avant-projet-sae-blockchain-specification.md](prompts/00-avant-projet-sae-blockchain-specification.md) (messages techniques de l'application retirés, aucun secret).

**Blocages :** esquisses (C6) à faire avant vendredi 17h ; planche visuelle du design system (§8) conseillée ; Dylan doit co-valider `D-026`.
**Décisions :** D-026 (`decisions.md`).

### 2026-11-26 · S48 · Moodboard de *Terre commune* terminé (Nicolas, avec Claude Code)
**Aujourd'hui :**
- Moodboard de la piste *Terre commune* fait dans Figma ([planche v6](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=51-2), même fichier que les v1 à v5) et exporté : [moodboard-terre/moodboard-planche.png](moodboard-terre/moodboard-planche.png). Même niveau de texte que la v5 (titre, quatre mots-clés, trois notes, deux étiquettes, crédits, palette).
- 12 images repérées sur Wikimedia Commons (licences lues dans les métadonnées), téléchargées à 1600 px et rangées dans [moodboard-terre/images/](moodboard-terre/images/) (numérotées 01 à 12). Liste, titres exacts et licences : [moodboard-sources.md](moodboard-sources.md).
- Retours de l'équipe pris en compte : fond clair crème, dominante bleu-turquoise dans les images, accents chauds répartis, palette de 11 couleurs en alternance froid / chaud (Soleil, Aube et Écume proposées, pas encore dans la bible), polices Fraunces / Quicksand / IBM Plex Mono pour la planche.
- Dossier `moodboard-terre/` vidé puis reconstruit : le brouillon HTML et les images écartées sont supprimés.

**Blocages :** trouver une image low-poly libre (ou notre prototype) pour la référence « facettes » ; ajouter le lien Commons pour les images CC BY dans le PDF ; valider les trois nouvelles couleurs avant de les mettre dans la bible §3.1.
### 2026-11-25 · S48 · Relief recalibré par simulation (Dylan, avec Claude Code)
**Aujourd'hui :**
- Une simulation des formules de la bible v1.1 (script jetable, hors dépôt) montrait qu'aucune île n'apparaissait avant une trentaine de messages et qu'il n'y avait ni magma ni neige à 300. Règles recalibrées et revérifiées (`D-025`) : une île dès le premier message, environ 9 % de terre à 10 messages, environ 45 % à 300 avec des biomes variés.
- Bible DA v1.2 : tristesse visible en pleine mer (haut-fond), magma lié au cratère, ordre des tirages fixé, balises limitées aux 60 derniers messages, carte qui s'affine quand l'IA répond (assumé), rivière (avec arrêt garanti), météorite, champignons et animaux sortis du socle (§6.5, O8). Esquisses 2 et 3 décrites d'après la simulation.
- Charte v1.2 : « pleut » et « pleuvoir » ajoutés, « hate » retiré, négation simple, lexique compté (95 entrées), effets sur la carte des six exemples alignés.
- Dossier v0.11, backlog v1.6 (O3 réparti pour tenir 35 h pour Nicolas en S50), `D-023` corrigée (« sera vérifié »), nouveau `moodboard-sources.md` à remplir. La spec de référence est le PDF v1.0 (renvois mis à jour).

- Après relecture : ruines sorties du socle partout (tirages de base, dossier, charte), O7 coupé en O7a (bloom) et O7b (ruines) ; « brume » réservée aux messages masqués, la tristesse épaissit le brouillard de tout l'horizon (bible v1.3, charte v1.3, dossier v0.12, backlog v1.7).

**Blocages :** Nicolas doit relire et co-valider `D-023`, `D-024` et `D-025`, et écrire sa propre entrée ici.
**Décisions :** D-025 (`decisions.md`).

### 2026-11-25 · S48 · Pivot artistique assumé : *Terre commune* (Dylan — à co-valider par Nicolas)
**Pourquoi nous avons changé de cap :** après quatre essais successifs sur la piste météo 2D (*Front commun* : spirale, quatre polices, symboles v1–v9, ciel à l'encre), aucun rendu ne nous satisfaisait vraiment : l'œuvre ressemblait toujours à un graphique de données plutôt qu'à une création marquante. Ces essais n'ont pas été perdus : ils nous ont appris à garder une architecture technique solide (tout le nœud, SQLite, le worker et OpenRouter sont intacts), à préférer une typographie sobre (**Recursive**, D-009) et à lier la forme visuelle directement à l'immuabilité de la blockchain.
**Aujourd'hui :**
- Pivot vers ***Terre commune*** (`D-023`, `D-024`) : une carte marine 3D procédurale en **Three.js low-poly** qui se sculpte message par message (joie → île qui grandit, forêts, champignons, animaux, voiliers, soleil ; calme → criques, phares ; tristesse → pluie, rivières/lagons, brume ; colère → volcan, météorite, vagues, orage).
- Relecture critique des docs et blindage complet : formules exactes + saturation + masque côtier pour tenir de 0 à 300 messages (`05-bible-da.md` v1.1), lexique `l2` recentré sur 60 mots d'émotions + règle anti-monotonie (`04-charte-editoriale.md` v1.1), double encodage des 3 nœuds (pyramide Cyan, cube Ambre, losange Violet distinct de l'erreur), patch filaire de prévision, `importmap` Three.js, risque prise en main 3D et déterminisme par empreinte SHA-256 de la heightmap (`03-dossier-binome.md` v0.10, `06-backlog.md` v1.5, `07-evaluation.md`, `01-environnement.md`).

**Blocages / Action immédiate :** **Nicolas doit relire, co-valider D-023/D-024 et ajouter sa propre entrée dans ce journal** (conduite de projet individuelle). Ensuite : produire ensemble les trois livrables Figma (moodboard C4, symbole C5, 3 esquisses C6) et archiver les anciens visuels de *Front commun*.
**Décisions :** D-023, D-024 (`decisions.md`).

### 2026-11-25 · S48 · Ciel à l'encre (Dylan, avec Claude Code)
**Aujourd'hui :**
- Rendu « une forme par message » jugé pas assez artistique. Prototypes jetables (hors dépôt) : particules en cyclone, lavis, isobares, cyclone 3D, ciel peint inspiré de *La Nuit étoilée*.
- **Bible v0.5 (proposée, D-022) : un ciel tracé à l'encre sous la spirale.** Un tourbillon par message récent (force = `energie`, rayon = `densite`, couleur = `chaleur`) ; quatre écritures du ciel selon le temps (ensoleillé, nuageux, pluie, brouillard) ; fronts entre voisins de chaleur opposée ; à l'arrivée, le message s'écrit dans l'œil puis se dissout en traits.
- On garde le mouvement de Van Gogh, pas sa matière, sa palette ni sa composition (bible §1 et §2). Aucune couleur nouvelle, aucune règle existante changée.
- Mis à jour : bible §1, §2, §4.3, §6, §6.2, §6.3 (nouvelle), §7, §8.2 ; dossier §6 (point 10) ; backlog v1.3 (O11, O12 en « en plus ») ; `a-faire.md`.

**Blocages :** Nicolas doit valider D-022 (et toujours D-020). Esquisses à refaire avec le ciel.

### 2026-11-24 · S48 · Symboles retirés (Dylan, avec Claude Code)
**Aujourd'hui :** aucune piste de symbole ne convient (v6 à v9 trouvées laides). Toutes les images de symbole sont retirées du dépôt (`symbole-planche.png`, `symbole-spirale.png`) ; bible §5 marquée « à refaire » ; D-021 écartée ; O10 retirée du backlog. Les essais restent dans Figma.

**Blocages :** le symbole (C5) est à refaire avant le rendu du 27/11.

### 2026-11-24 · S48 · Nouveau symbole : l'œil du cyclone (écarté depuis) (Dylan, avec Claude Code)
**Aujourd'hui :**
- Lecture du cours d'art génératif (Moodle, `art-generatif.pdf`). La page « le logo algorithmique » montre *Visit Nordkyn*, un logo qui suit la météo.
- Le nuage-bulle v6 ne plaît pas. Deux essais écartés dans la journée : le nuage-bulle déformé selon les valeurs (v7) et une silhouette de nuage remplie de points (v8).
- **Bible §5 réécrite (proposée, D-021, remplace D-018) : v9 « l'œil du cyclone ».**
  - 34 points (Fibonacci) rangés par l'angle d'or, comme la spirale de l'œuvre ; le plus récent au centre, entouré d'un anneau (l'œil).
  - Logo fixe : du chaud au centre au froid au bord.
  - Logo vivant dans l'en-tête : les 34 derniers messages (couleur = `chaleur`, taille = `densite`, creux = prévision, brume = masqué).
  - Le nombre de points suit la taille : 34, 21, 13, 8.
- Planche dans Figma ([symbole v9](https://www.figma.com/design/o9vW6Uadmu6n6YKKC3tu2I/?node-id=34-2)) ; export retiré depuis.

**Blocages :** aucun ; Nicolas doit valider D-020 (polices) et D-021 (symbole), et trancher la variante « éléments ».

### 2026-11-24 · S48 · Typographie en quatre temps (Dylan, avec Claude Code)
**Aujourd'hui :**
- **Bible §4 v0.4 (proposée, D-020) :** une police par temps. ☀ Ensoleillé : Fraunces ; ☁ Nuageux : Quicksand ; ☂ Pluie : Special Elite ; ≋ Brouillard : IBM Plex Mono.
- Le temps se calcule à partir des valeurs (règle en six étapes). Les six exemples de la charte couvrent les quatre temps.
- La police change à trois moments : pendant l'écriture (temps prévu), quand l'IA répond (prévu → observé) et quand le ciel change (consigne et bulletin). L'interface, les erreurs et les données gardent une police fixe.
- Mises à jour : composants de la bible §8.2, backlog O8 et O8b, S49 de Nicolas, `a-faire.md`.

**Blocages :** D-009 (Recursive) avait été validée par Nicolas : il doit valider ou refuser ce changement.

- **Planche d'essai** dans Figma ([essai typographique](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=19-2), export `docs/typo-planche.png`). **Moodboard v5** : la v4 avec les nouvelles polices ([planche v5](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=20-79)), export dans `docs/moodboard-planche.png`.

**À faire :** Nicolas, valider D-020 à partir de la planche d'essai ; si c'est non, revenir à la v4 du moodboard.

### 2026-11-23 · S48 · Symbole, esquisses, confidentialité, export PDF (Dylan, avec Claude Code)
**Aujourd'hui :**
- **Symbole (C5) :** six pistes dans Figma ; la v6 (un nuage-bulle avec les trois points « quelqu'un écrit… ») est proposée dans la bible §5. Le choix final revient à Nicolas.
- **Esquisses (C6) :** les trois états (vide, 10 messages, 300 messages) dessinés dans la page « Esquisses » de Figma, avec les règles de la bible §6 ; les positions sont dans `docs/esquisses/positions-10.csv` et `positions-300.csv`. Le résultat ne nous plaît pas encore : à reprendre ensemble.
- **Confidentialité d'OpenRouter (C8) :** tous les réglages de partage désactivés sur le compte de Dylan ; essai réussi avec `data_collection: "deny"` (modèle `recursive/flint-v1.0:free`) ; quota confirmé à 50 requêtes par jour (charte §4.3, dossier §5, D-019).
- **Test de la charte (C7) :** fiche prête ([test-charte.md](test-charte.md)).
- **Export PDF (C10) :** reporté, aucun PDF pour l'instant.

**Blocages :** aucun.

**À faire :**
- Dylan : faire passer le test de la charte avec Nicolas ; créer le dépôt commun avec les autres binômes (C11) et y proposer la v1.1 (C12).
- Nicolas : choisir le symbole ; relire le dossier et la charte (C9) ; retirer les ✎ de la bible (C3).

### 2026-11-23 · S48 · Moodboard dans Figma (Dylan, avec Claude Code)
**Aujourd'hui :**
- Moodboard composé dans Figma : un collage de 12 images sur un fond d'isobares, avec un crédit (auteur, année, licence) sur chaque image, quelques notes courtes, trois mots-clés, les trois polices Recursive et les 11 couleurs de la bible avec leur code hex.
- Plusieurs versions : v1 en grille (trop propre), v2 en collage, v3 avec des sous-titres sous les images ; la **v4** (la v2 corrigée, plus rien de coupé) est retenue.
- Lien : [planche v4](https://www.figma.com/design/3kuh5BiZHfMOCHNWPh9dXD/?node-id=11-2) ; export PNG dans `docs/moodboard-planche.png` ; sources dans `docs/moodboard-sources.md`.

**Blocages :** limite d'appels du serveur MCP de Figma (offre Starter) atteinte une fois ; ça a remarché un peu plus tard.

**À faire :** Nicolas, valider la planche (C4) ; recopier les mentions de licence exactes avant le PDF.

### 2026-11-23 · S48 · Relecture du commit de Nicolas (Dylan)
**Aujourd'hui :**
- **Vérifié par le calcul** les chiffres de la bible v0.3 : couleurs de référence en OKLab, milieu rose d'OKLCH, courbe en S, déplacement de la spirale (57 % → 0,16 %), voisin le plus proche à 2,8 %. Tout est exact.
- **Incohérences corrigées :**
  - le cas 18 est remis au palier 1 (lundi) ;
  - le cas 22 passe au mercredi, car il a besoin du sondage (N7) ;
  - l'exemple du dossier §6 suit D-016 (valeurs locales par le serveur) ;
  - la bible donne un seul chiffre pour le déplacement (0,16 %) ;
  - la charge du mercredi est corrigée (7 h) ;
  - D-003 et D-007 à D-009 sont marquées validées ;
  - charte v0.5.
- **Backlog v1.2 :**
  - si la jonction réussit, A2b (vraie IA) commence le vendredi 11/12 ;
  - si Nicolas prend du retard, O4 passe au 11/01 ;
  - C3 : Dylan relit la v0.3, puis Nicolas retire les ✎ avant l'export PDF.

**Blocages :** aucun.

**À faire :** Dylan, relire la bible v0.3 (C3) ; le reste est inchangé (C4 à C11).

### 2026-11-23 · S48 · Relecture de la DA, du planning et des vecteurs (Nicolas, avec Claude Code)
**Plus tôt dans la journée :** relu la charte, le dossier et la bible v0.2 de Dylan ; donné mes avis sur le thème, les couleurs et les valeurs locales.
**Aujourd'hui :**
- **Vérifié par le calcul** (scripts hors dépôt, Node.js 24) : les cas 20 à 26 de Dylan sont exacts (cinq chaînes valides, hash, créneaux, producteurs, signatures, cas 22, 23 et 26) ; les contrastes de la bible aussi.
- **Bible DA v0.3 :**
  - la spirale ne tourne plus : l'angle suit le rang absolu et le rayon l'âge (déplacement moyen par message de 57 % à 0,16 % de la largeur, D-013) ;
  - couleurs interpolées en OKLab (le rose parasite d'OKLCH ressemblait à l'alerte, D-014), 11 vecteurs de couleur et courbe en S définie ;
  - échelle de la spirale mesurée (`c = 0,028`, profondeur 300, D-015), contraintes de rendu, bordure des champs, anneau de focus, glyphe de symbole simplifié, polices hébergées chez nous, sources libres de droits pour le moodboard.
- **Dossier v0.8 et backlog v1.1 :** valeurs locales calculées par le serveur de l'application (D-016) ; palier 1 en deux temps, rattrapage relevé à 5 h, appel réel à l'IA en S2 (D-017) ; répartition N1, N8 et T1 reportée dans le dossier §10 ; deux risques ajoutés (estimations, saccades du Canvas).

**Blocages :** aucun.

**À faire :**
- Nicolas : valider les changements ✎ de la bible (C3) ; moodboard, symbole, glyphe et esquisses dessinées (C4 à C6).
- Dylan : relire les décisions D-013 à D-017 ; confidentialité d'OpenRouter (C8) ; export PDF (C10).
- Les six : dépôt commun (O1) ; qui dépose la spec sur Moodle jeudi avant 12h30.

**Décisions :** D-013 à D-017 (decisions.md).

### 2026-11-23 · S48 · Relecture complète et corrections (Dylan)
**Aujourd'hui :**
- **Vecteurs :** nos cas 20 à 26 sont écrits pour la spec v1.0 (`tests/vectors/`), avec une chaîne de hauteur 12 et de vraies signatures. Ils sont vérifiés en Node.js et en Python. Les vecteurs v0.5 et les exemples v0.2 sont archivés (`docs/spec-commune/archives/`).
- **Bible DA v0.2 :**
  - le contour ne sert plus qu'à la prévision ; l'origine est donnée par des satellites ;
  - spirale avec le plus récent au centre (image de dépression satellite), bornée à 400 messages ;
  - typographie Recursive ;
  - couleurs de l'interface séparées de celles de l'œuvre ;
  - grille de l'écran ;
  - nom *Front commun*.
- **Dossier v0.7 :**
  - toutes les `[PROPOSITION]` sont transformées en décisions ;
  - le §6 renvoie à la bible au lieu de la recopier ;
  - un refus de l'IA sur un lot ne masque plus tout le lot.
- **Charte v0.4 :** calcul exact des valeurs locales et lexique `l1` (50 entrées) ; colère froide à `energie` 0,55.
- **Autres documents :**
  - backlog v1.0 complet : tâches estimées, priorités, plan du soir pour S50 et S2, S49, oral ;
  - environnement : la machine du nœud s'appelle `noeud-c` ;
  - décisions D-003 à D-012 ;
  - propositions de précisions pour la spec v1.1.

**Blocages :** aucun.

**À faire :**
- Nicolas : valider les changements ✎ de la bible (C3), puis moodboard, symbole et esquisses.
- Dylan : réglage de confidentialité d'OpenRouter (C8), export PDF (C10).
- Les six : dépôt commun (O1).

**Décisions :** D-003 à D-012 (decisions.md).

### 2026-11-23 · S48 · Bible DA v0.1 et dossier v0.6
**Fait :**
- Premier jet de la bible DA, avec les 8 éléments. Il reprend les choix de Nicolas : palette à couleurs-clés, phyllotaxie, prévision et observation, brume.
- Dossier v0.6 : les 4 incohérences relevées par Nicolas sont corrigées.

**À faire (Nicolas) :** reprendre la bible ; dessiner le moodboard, le symbole et les 3 esquisses ; demander un retour à C. Surribas.

### 2026-11-23 · S48 · Charte v0.3 (avis de Nicolas sur l'œuvre)
**Fait :**
- Charte :
  - météo et éléments réunis (« le ciel est fait des quatre éléments ») ;
  - le ton des messages des autres nœuds est lu, valeurs neutres seulement pour un message vide de sens ;
  - colère froide = feu bleu ;
  - 6 exemples, dont 3 difficiles ;
  - lexique pour les valeurs locales ;
  - brume pour les messages masqués ;
  - mots interdits comparés en mots entiers ;
  - phrase d'exemple qui change ;
  - test auprès de 3 personnes.
- Dossier §6 : prévision puis observation, fond collectif, origine du nœud, courbe de contraste, bulletin météo.

**À faire :** bible DA (palette à couleurs-clés), liste de mots et lexique, test de la charte.

### 2026-11-23 · S48 · Corrections après l'avis de Nicolas
**Fait :**
- Dossier :
  - règle de déclenchement des lots (10 messages, ou 45 s, avec au moins 30 s entre deux requêtes) ;
  - retraitement des messages en valeurs locales ;
  - masquage côté serveur, avec les mêmes règles pour tous les messages ;
  - cas 20 à 26 sous forme de fichiers de scénario ;
  - réessais si l'IP Tailscale n'est pas encore là ;
  - palette renvoyée à la bible DA ;
  - mise en forme de la légende.
- Charte v0.2 : « service d'IA extérieur », extraction du JSON de la réponse, espaces retirés sans message, §4.3 sur la confidentialité.

**À faire :**
- vérifier le réglage de confidentialité d'OpenRouter ;
- bible DA (Nicolas) ;
- transformer les `[PROPOSITION]` en décisions ;
- backlog.

### 2026-11-23 · S48 · Répartition décidée, quota OpenRouter
**Décisions (à deux) :**
- Dylan : nœud, IA et prompt, dossier.
- Nicolas : application, œuvre et bible DA.
- À deux : tableau des valeurs de la charte, cas 20 à 26.
- Chacun relit l'autre.

**Fait :** le dossier passe en v0.5 :
- répartition nominative ;
- IA par lots de 10 messages, un seul nouvel essai, compteur journalier en base, IA simulée en développement, 30 requêtes réservées pour l'oral ;
- application ouverte sur notre PC, avec `APP_HOST` en variante.

Le prompt de la charte passe en lots.
**À faire :** savoir qui dépose la spec sur Moodle jeudi 12h30. Questions aux profs : vecteurs en S49 (fichiers JSON, pas du code) ; alterner nos deux clés OpenRouter.

### 2026-11-23 · S48 · Charte éditoriale v0.1
**Fait :** la charte est écrite. Elle contient :
- la consigne « Quel temps fait-il en vous ? » ;
- 4 valeurs, plus `masquer` ;
- le prompt `p1`, avec 3 exemples ;
- le filtre avant signature, sans IA ;
- le masquage par une trace grise dans l'œuvre.

Le §6 du dossier est aligné sur la charte.
**À faire :** valider la charte à deux ; tester le prompt (10 envois par exemple) avant le 07/12 ; écrire la liste de mots interdits ; bible DA.

### 2026-11-23 · S48 · Dossier de binôme v0.4
**Fait :** corrections après relecture :
- confirmation d'un message par le temps ;
- IA en parallèle, avec un quota journalier et un repli local ;
- `events` lus par sondage, `busy_timeout` ;
- cas de test répartis par palier ;
- port 8080 sur l'IP Tailscale ;
- règles pour beaucoup de messages ;
- nouveaux risques (quota, veille, SQLite).

`02-spec-commune.md` devient un renvoi vers la v1.0, et D-002 est marquée comme remplacée.
**À faire :** répartition nominative ; charte puis bible DA, puis recopie dans le §6 ; vérifier le quota OpenRouter ; demander à l'équipe pour la S49 et un éventuel crédit.

### 2026-11-23 · S48 · Spec commune v1.0
**Fait :** `docs/spec-commune.md` passe en v1.0, la version validée par les six : 20 décisions actées, exemples et justifications dans chaque section. Le PDF et la v0.6 sont archivés dans `docs/spec-commune/`.
**À faire :** déposer sur Moodle avant le jeu. 26/11 à 12h30 ; mieux mettre en page le tableau 6.3 du PDF ; points ouverts O1 à O3 ; D-002 (Google Doc) est remplacée par la décision 14 (dépôt GitHub).

### 2026-11-23 · S48 · Spec commune v0.6
**Fait :** relecture de la v0.5 du groupe et passage en v0.6 : ordre des règles 3.1 corrigé, exceptions et limites écrites, 22 cas de test à répartir. Les anciennes versions sont archivées dans `docs/spec-commune/`.
**À faire :** soumettre la v0.6 aux six ; demander qui est « Ren », cité dans la v0.5.

### 2026-11-23 · S48 · Spec commune : Google Doc
**Décision :** la spec commune sera un Google Doc partagé à six (D-002). Parade à l'historique faible : versions nommées + export dans `docs/spec-commune/` du dépôt.
**À faire :** créer le Google Doc (copier la trame de `02-spec-commune.md`), inviter les cinq autres, coller le lien dans le README et la spec.

### 2026-11-23 · S48 · Binôme 1 connu
**Fait :** binôme 1 = Mouhamed Al Amine Bah + Hugo Delpuech : les six sont connus. Nicolas et les enseignants sont déjà invités sur le dépôt.
**À décider :** où vit la spec commune (dépôt partagé à part ou dossier dans un dépôt).

### 2026-11-23 · S48 · Binômes formés (Moodle)
**Fait :** binôme 3 = Dylan Belledent + Nicolas Rapuzzi--Pisarczyk ; binôme 2 (complet) = Maxens Sevilla + Rahim Tamhaev ; binôme 1 encore vide (0/2).
**Blocages :** il manque deux personnes pour le binôme 1, donc pas encore les « six » de la spec commune.
**À faire :** noms dans le dossier de binôme, accès GitHub à Nicolas et aux enseignants.

### 2026-11-23 · S48 · Lancement
**Fait :** lancement de la SAÉ, lecture du sujet, création du dépôt et de la structure de documents (README, docs/, journal).
**Aujourd'hui :** former les binômes, lancer la spec commune.
**Blocages :** binômes pas encore formés ; clé Tailscale « à venir » sur Moodle.
**Décisions :** voir [decisions.md](decisions.md) (aucune technique pour l'instant : semaine sans code).
