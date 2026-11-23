# Archives de la spec commune

Ces fichiers sont **périmés**. On les garde pour l'historique (conduite de projet), mais **aucun ne doit servir à écrire ou tester un nœud**. La référence est [spec-commune.md](../../spec-commune.md) v1.0, et les vecteurs à jour sont dans [tests/vectors/](../../../tests/vectors/).

| Dossier ou fichier | Version | Pourquoi il est périmé |
| --- | --- | --- |
| `v0.2-propositions.txt` | 0.2 | JSON canonique, signatures en hexadécimal, blocs de 20 messages : tout a changé en v1.0 |
| `exemples-v0.2/` | 0.2 | Bloc zéro `3e26ac44…` (v1.0 : `9af1db54…`) |
| `vecteurs-v0.5/` | 0.5 | Messages avec le champ `author` (supprimé, décision 1) : les `id`, hash et signatures ne correspondent plus ; numérotation des cas 4 et 18 différente ; cas 23 à 26 absents |
