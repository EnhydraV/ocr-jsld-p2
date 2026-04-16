import {useEffect} from "react";

const [data, setData] = useState<any>(null)

// Anti-pattern 4 — useEffect avec logique lourde dans le composant — idéalement : custom hook ou librairie de fetching de données (ex. react-query).
// De plus en mode développement, le "strict mode" de React est activé, ce qui va éxecuter ce code 2
// Pour aller plus loin : https://react.dev/learn/you-might-not-need-an-effect
useEffect(() => {
    // Anti-pattern 5 — console.log à retirer.
    console.log('Loading data...')
    setTimeout(() => {
        setData(olympicsData)
        // Anti-pattern 5 — console.log à retirer.
        console.log('Data loaded:', olympicsData)
    }, 500)
}, [])