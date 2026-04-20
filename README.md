# TéléSport — Historique des Jeux Olympiques

## Installation

```bash
git clone https://github.com/EnhydraV/p2-dfsjs.git
cd p2-dfsjs
npm install
```

## Commandes

```bash
npm run dev      # Serveur de développement → http://localhost:5173
npm run build    # Build de production
npm run lint     # Vérification du code
```

## Fonctionnalités

- Graphique interactif de répartition des médailles par pays (clic → page détail). Alternative accessible des données
  des graphiques
- Page de détail par pays : participations, médailles, athlètes, évolution par édition
- Écran de chargement pendant la récupération des données
- Page 404 pour les routes inconnues
- Responsive mobile, tablette desktop

## Stack technique

| Outil                      | Version |
|----------------------------|---------|
| React                      | 19      | 
| TypeScript                 | ~5.9    | 
| Vite                       | 7       | 
| React Router               | 6       | 
| Chart.js / react-chartjs-2 | 4/5     |
| Tailwind CSS               | 4       |

## Architecture

Voir [ARCHITECTURE.md](./ARCHITECTURE.md) pour le détail de l'arborescence, du flux de données et des conventions.

## Données

Les données sont stockées dans `data/olympics.json`. L'architecture anticipe une future intégration avec une API REST :
tous les accès aux données passent par des hooks (`hooks/`) qui encapsulent `useFetch`, lui-même basé sur le hook
`use()` de React 19.