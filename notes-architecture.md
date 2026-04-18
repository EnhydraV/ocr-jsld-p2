## Situation initiale

### Tests fonctionnels, visuels et analyse du DOM

Il s'agit d'une application réalisée avec React et TypeScript. Exécutée dans un navigateur récent, elle est fonctionnelle et responsive.
Cependant, une fonctionnalité n'a pas été développée : cliquer sur un pays dans le graphique ne permet pas de voir les détails.

Par ailleurs, en terme d'accessibilité, les données affichées dans le graphique ne sont pas accessibles ; elles sont dans un canvas et aucun contenu alternatif n'est proposé.

### Audit du code

L'audit du code montre un certain nombre de problèmes structurels et techniques qui pour une application de cette taille ne sont pas critiques, mais auxquels il faudra remédier afin de pouvoir l'enrichier et la maintenir. Voici nos observations ainsi que des recommandations : 

Absence totale de commentaires dans le code
Recommandation : commenter le code, notamment pour expliciter les mécaniques les plus complexes.

Tous les composants (et la quasi-intégralité du code du projet) se trouvent dans le même fichier (src/App.tsx)
Ex : Home (ligne 147), Country (ligne 265)
Ce qui a pour effet que
 - certains de ces composants n'ont donc pas le même nom que le fichier
 - le composant App n'est pas seul dans son fichier
Recommandation : Déplacer chacune de ces pages dans un fichier .tsx dédié.

Beaucoup d'objets sont typés any, ce qui perd de son intérêt. Ce point remonte également lorsque l'on "linte" le code.
Ex : ligne 271
Recommandation : typer précisément les objets afin de tirer partie de l'usage des technologies employées, et que notamment TypeScript ne soit pas simplement un argment "marketing" dans le Readme du projet.

Usage de React.FC
Ex : ligne 147
Recommandation : utiliser un composant classique et le typer explicitement

Les données sont directement présentes dans le composant (ligne 28)
Recommandation : déplacer les données dans un fichier distinct de configuration

Des appels à `console.log` sont présents dans le code
Ex : ligne 156
Recommandation : retirer ces appels

Du code est dupliqué
Ex : cartes ligne 234
Recommandation : créer des composants prenant en charge le rendu de ces contenus.

De grandes portions de code dédiées à l'affichage d'un composant visuel unique sont disséminées dans le code et nuient à la lisibilité
Ex : graphique ligne 180
Recommandation : Déplacer le code dans un composant

Les données des graphiques sont préparées dans le composant
Ex : ligne 180
Recommandation : Effectuer les calculs dans un utilitaire

Les couleurs associées aux pays sont codées en dur (et dupliquées) dans le code associé aux graphiques
Ex : Ligne 187
Recommandation : Intégrer les couleurs dans les données des pays. On s'assure ainsi que les couleurs ne changent pas en fonction de la page et de l'ordre dans lesquelles sont chargés les données. Par ailleurs dans le cas où l'on ajoute un nouveau pays, on ne doit pas aller ajouter une couleur dans le code du graphique.

Utilisation de `useEffect`
Ex : Ligne 154
Recommandation : Il est communément admis que les useEffet peuvent conduire par leur architecture à des problèmes de maintenabilité (effets incontrôlés notamment) et de performance (par des rendus inutiles). Par ailleurs, un useEffect peut généralement être évité. Ici par un hook par exemple

Des variables qui devraient être calculées à partir des données sont codées en dur
Ex : ligne 173
Recommandation : calculer cette valeur à partir des données.

L'application ne tire pas parti des états et utilise les valeurs des données pour déduire cet état
Ex : ligne 175 pour l'état de chargement
Recommandation : utiliser les états de React (une de ses fonctionnalités phare)

## Proposition d'architecture

Conformément aux recommandations énoncées ci-dessus, l'architecture de notre application va être ajustée afin de découper les contenus de App.tsx en composants plus petits :
* les pages : Home et Country. Ce sont des composants "intelligents" qui correspondent aux pages de l'application.
* les graphiques : LineChart et PieChart. Ce sont des composants "bêtes". On les extrait principalement pour améliorer la lisibilité du code.
* les données sont converties en json et stockées dans un fichier séparé.
À terme ces données seront sans doute stockées dans une base de données.
* le chargement des données de la home sera fait dans un "hook" personnalisé : useFetch pour charger les données
Aujourd'hui, il s'agira d'un simple accès aux données du json, mais on anticipe ici l'accès via une API du futur backend.
On anticipe également l'utilisation d'un hook pour charger les contenus de la page country (useFetchCountry)

Les fonctions de calcul et traitement des données pourraient être regroupées dans un utilitaire (utils/olympicsUtils.ts), étant du calcul pur.
Cependant en cas d'augmentation de la taille des données, les temps de traitements des données pourraient devenir importants et alourdir l'application pour les utilisateurs.
Pour améliorer les performances, on peut déléguer ces traitements complexes au backend qui retournerait alors directement les données calculées via une API.
Le hook useStatistics sera chargé de charger ces données.


```
● p02-projet/                                                                                                                                                                                                                                                       
  ├── data/                                                                                                                                                                                                                                                         
  │   └── olympics.json                                                                                                                                                                                                                                             
  ├── public/                                                                                                                                                                                                                                                       
  ├── src/                                                                                                                                                                                                                                                          
  │   ├── components/                                                                                                                                                                                                                                               
  │   │   ├── IndicatorCard.tsx                                                                                                                                                                                                                                 
  │   │   ├── LineChart.tsx
  │   │   └── MedalChart.tsx
  │   ├── hooks/
  │   │   ├── useCountry.ts
  │   │   ├── useFetch.ts
  │   │   ├── useOlympics.ts
  │   │   └── useStatistics.ts
  │   ├── pages/
  │   │   ├── Country.tsx
  │   │   └── Home.tsx
  │   ├── styles/
  │   │   └── index.css
  │   ├── types/
  │   │   ├── IndicatorCardType.ts
  │   │   ├── OlympicCountry.ts
  │   │   ├── OlympicParticipation.ts
  │   │   ├── OlympicsData.ts
  │   │   └── OlympicsStatistics.ts
  │   ├── utils/
  │   │   └── olympicsUtils.ts
  │   ├── App.tsx
  │   └── main.tsx
```