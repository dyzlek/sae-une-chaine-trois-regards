# Spec commune (à six)

- **Version :** 0.1 (brouillon)
- **Date :** 2026-11-__
- **Auteurs :** Dylan Belledent, Nicolas Rapuzzi--Pisarczyk (binôme 3) · Maxens Sevilla, Rahim Tamhaev (binôme 2) · binôme 1 : _à compléter_
- **Échéance :** jeudi 26/11/2026, 12h30 · un seul dépôt pour les six

> Le contrat entre les trois nœuds : tout ce qu'ils ont en commun, rien de ce qui est propre à un binôme.
> **Test :** un développeur absent de toutes nos discussions doit pouvoir, avec ce seul document, écrire un quatrième nœud qui rejoint la chaîne.

Règles de forme : chaque règle a un **exemple concret** · chaque choix est justifié (pourquoi, ce qui est écarté) · chaque terme défini une fois · tout point ouvert est écrit avec **qui tranche et quand**.

## Glossaire
| Terme | Définition |
|---|---|
| Message | _à définir_ |
| Bloc | _à définir_ |
| Chaîne | _à définir_ |
| Nœud | _à définir_ |

## 1. Le périmètre
Commun aux trois nœuds / propre à chaque binôme.

## 2. Les messages et les blocs
Contenu, format, limites, identifiant. Lien d'un bloc au précédent. Bloc de genèse.
_Exemple : un message, un bloc._

## 3. La validité
Qu'est-ce qui rend valide un message, un bloc, une chaîne ? Que fait un nœud face à l'invalide ?

## 4. L'écriture
Qui écrit un message, comment on sait de qui il vient. Qui ajoute un bloc, quand, à quelle condition.

## 5. L'accord entre les nœuds
Deux blocs simultanés, chaînes divergentes : comment retomber sur une seule chaîne.

## 6. Les échanges
Découverte et communication sur Tailscale. Liste complète des échanges (envoyé / répondu / erreurs).
_Exemple : un échange complet._

## 7. La vie du réseau
Rejoindre la chaîne, rattraper un retard, nœud éteint.

## 8. Les abus et les erreurs
Message indésirable, envoi en masse, nœud qui ment.

## 9. L'IA et la chaîne
Quand un message est traité. Valeurs écrites dans la chaîne ou gardées par binôme ? Forme, trace du modèle qui a répondu.

## 10. La jonction du 10/12
Comment vérifier que trois nœuds écrits séparément sont compatibles. Exemples et cas de test partagés.

## 11. La vie de la spec
Version, emplacement, procédure de modification (qui propose, qui décide, comment prévenir les six).

## Points ouverts
| Point | Qui tranche | Quand |
|---|---|---|
| _…_ | _…_ | _…_ |

## Historique des versions
| Version | Date | Changement |
|---|---|---|
| 0.1 | 2026-11-__ | Squelette |
