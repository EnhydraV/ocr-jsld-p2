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

Utilisation de `useEffect`
Ex : Ligne 154
Recommandation : Il est communément admis que les useEffet peuvent conduire de par leur architecture même à des problèmes de maintenabilité (effets incontrôlés notamment) et de performance (par des rendus inutiles). Par ailleurs, un useEffect peut généralement être évité. Ici par un hook par exemple

Des variables qui devraient être calculées à partir des données sont codées en dur
Ex : ligne 173
Recommandation : calculer cette valeur à partir des données.

L'application ne tire pas parti des états et utilise les valeurs des données pour déduire cet état
Ex : ligne 175 pour l'état de chargement
Recommandation : utiliser les états de React (une de ses fonctionnalités phare)

## Proposition d'architecture

```
data/
  ├── olympics.json
src/
  ├── components/  
    ├──  Home.tsx
         
  ├── pages/  
  ├── hooks/  
  ├── models/  
```