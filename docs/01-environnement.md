# Environnement : Tailscale et OpenRouter

À préparer chez soi pendant la S49, avant la reprise du lundi 7/12.

> ⚠️ Ce fichier ne contient **aucune clé**. La clé Tailscale est sur Moodle ; la clé OpenRouter reste dans un `.env` ignoré par Git.

## 1. Tailscale (réseau)
- [ ] Installer : https://tailscale.com/download
- [ ] Rejoindre le tailnet de la SAÉ (clé sur Moodle, à venir) :
  ```
  tailscale up --auth-key=<CLÉ> --hostname=sae-<prenom>
  ```
- [ ] Déjà un compte Tailscale perso ? `tailscale login --auth-key=<CLÉ> --hostname=sae-<prenom>` puis `tailscale switch`
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
| _prénom 1_ | ☐ | ☐ | sae-… |
| _prénom 2_ | ☐ | ☐ | sae-… |
