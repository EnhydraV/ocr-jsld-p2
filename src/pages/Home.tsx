import MedalChart from "../components/MedalChart.tsx";
import type {OlympicsData} from "../types/OlympicsData.ts";
import type {IndicatorCardType} from "../types/IndicatorCardType.ts"
import {useOlympics} from "../hooks/useOlympics.ts";
import {calculateTotalParticipatingCountries, calculateTotalGamesEditions} from "../utils/olympicsUtils.ts";
import {Header} from "../components/Header.tsx";

const Home = () => {
    const data: OlympicsData = useOlympics()
    const totalParticipatingCountries = calculateTotalParticipatingCountries(data)
    const totalGamesEditions = calculateTotalGamesEditions(data)

    const title="Historique des Jeux Olympiques - TéléSport";
    const presentation="Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.\n" +
        "Explorez les performances des pays au fil des années."
    const cards: IndicatorCardType[] = [
        {label: "Pays participants", value: totalParticipatingCountries, color: "text-blue-400"},
        {label: "Éditions des JO", value: totalGamesEditions, color: "text-green-400"},
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <Header title={title} presentation={presentation} cards={cards}/>
                <MedalChart data={data}/>

                <div className="text-sm text-gray-400">
                    <p>Cliquez sur un pays pour voir ses détails</p>
                </div>
            </div>
        </div>
    )
}

export default Home