# Architecture — p02-projet

---

## Arborescence

```
src/
├── pages/          # Vues associées aux routes
│   ├── Home.tsx
│   └── Country.tsx
├── components/     # Composants réutilisables
│   ├── IndicatorCard.tsx   # Carte
│   ├── MedalChart.tsx      # Graphique de Home
│   ├── CountryLineChart.tsx       # Graphique de la page détails
│   └── Loading.tsx         # Ecran de chargement
├── hooks/          # Accès aux données et dérivations
│   ├── useFetch.ts       — wrapper React 19 use()
│   ├── useOlympics.ts    — source unique des données
│   ├── useCountry.ts     — recherche d'un pays par id
├── utils/          # Calculs purs (sans état React)
│   └── olympicsUtils.ts
├── types/          # Types TypeScript
│   ├── OlympicsData.ts
│   ├── OlympicCountry.ts
│   ├── OlympicParticipation.ts
│   └── IndicatorCardType.ts
└── styles/
    └── index.css
```

---

## Flux de données et chargement asynchrone

```
data/olympics.json
       │
       ▼
  useOlympics()       ← promesse simulée (2s) via setTimeout
       │
       ├──▶ Home         — liste tous les pays
       │
       └──▶ useCountry(id)
                 └──▶ Country      — détail d'un pays
```

`useFetch` encapsule le hook `use()` de React 19. Les composants qui l'utilisent doivent être enfants d'un `<Suspense>` (déclaré dans `App.tsx`, permet de gérer un écran de chargement `<Loading />`).

Aujourd'hui les données ne sont pas récupérées à partir d'une API, cependant on anticipe le fait que ce sera le cas dans le future et cette architecture en est le reflet.

---

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | `Home` | Vue globale — tous les pays |
| `/country/:id` | `Country` | Détail d'un pays |

## Stack technique

| Outil | Version | Rôle                           |
|---|---|--------------------------------|
| React | 19 | UI, gestion d'état via `use()` |
| TypeScript | ~5.9 | Typage strict                  |
| Vite | 7 | Bundler / dev server           |
| React Router | 6 | Routing                        |
| Chart.js / react-chartjs-2 | 4/5 | Visualisation de données       |
| Tailwind CSS | 4 | Styles             |


---

## Principes de conception

- Variables et fonctions nommées en **anglais**
- Commentaires en **français**, avec parcimonie
- Un fichier par responsabilité
- Principes DRY (don't repeat yourself) : pas de répétition de code
- Logique métier dans `utils/`, pas dans les composants