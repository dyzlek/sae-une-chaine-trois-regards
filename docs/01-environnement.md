# Environnement : Tailscale et OpenRouter

À préparer chez soi pendant la S49, avant la reprise du lundi 7/12.

> ⚠️ Ce fichier ne contient **aucune clé**. La clé Tailscale est sur Moodle ; la clé OpenRouter reste dans un `.env` ignoré par Git.

## 1. Tailscale (réseau)
- [ ] Installer : https://tailscale.com/download
- [ ] Rejoindre le tailnet de la SAÉ (clé sur Moodle, à venir). Le nom de machine dépend du rôle :
  - **la machine qui fait tourner notre nœud** doit s'appeler exactement **`noeud-c`** (spec §6.1, décision 13) :
    ```
    tailscale up --auth-key=<CLÉ> --hostname=noeud-c
    ```
  - l'autre machine (développement seulement) : `--hostname=sae-<prenom>`. Deux machines ne doivent jamais s'appeler `noeud-c` en même temps.
- [ ] Déjà un compte Tailscale perso ? `tailscale login --auth-key=<CLÉ> --hostname=<nom ci-dessus>` puis `tailscale switch`
- [ ] La clé reste dans l'historique du terminal : l'effacer ensuite (ou se connecter sans `--auth-key`, par le lien affiché)
- [ ] Changer de nom plus tard : `tailscale set --hostname noeud-c`
- [ ] Vérifier : `tailscale status` liste les autres machines SAÉ

Règles : clé réservée à la SAÉ, ne pas la partager ni la committer, révoquée en fin de SAÉ.

## 2. OpenRouter (IA)
- [ ] Compte sur https://openrouter.ai/ (un par personne)
- [ ] Créer une clé d'API, vérifier qu'un modèle gratuit répond
- [ ] Stocker la clé dans `.env` (`OPENROUTER_API_KEY=...`), jamais dans Git

Règles : modèles **gratuits** uniquement ; `openrouter/free` accepté si on **enregistre en base le modèle qui a réellement répondu** ; clé jamais dans Git.

## Suivi par personne
| Personne | Tailscale OK | OpenRouter OK | Hostname |
|---|---|---|---|
| Dylan (fait tourner le nœud, dossier §10) | ☐ | ☑ (vérifié le 23/11, D-019) | `noeud-c` |
| Nicolas | ☐ | ☐ | `sae-nicolas` |
