import IndicatorCard from "../components/IndicatorCard.tsx"
import MedalChart from "../components/MedalChart.tsx";
import type {OlympicsData} from "../types/OlympicsData.ts";
import type {IndicatorCardType} from "../types/IndicatorCardType.ts"
import {useOlympics} from "../hooks/useOlympics.ts";
import {calculateTotalParticipatingCountries, calculateTotalGamesEditions} from "../utils/olympicsUtils.ts";

const Home = () => {
    const data: OlympicsData = useOlympics()
    const totalParticipatingCountries = calculateTotalParticipatingCountries(data)
    const totalGamesEditions = calculateTotalGamesEditions(data)

    const cards: IndicatorCardType[] = [
        {label: "Pays participants", value: totalParticipatingCountries, color: "text-blue-400"},
        {label: "Éditions des JO", value: totalGamesEditions, color: "text-green-400"},
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    Historique des Jeux Olympiques - TéléSport
                </h1>

                <div className="mb-8">
                    <p className="text-lg">
                        Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
                        Explorez les performances des pays au fil des années.
                    </p>
                </div>
                <div className="mb-2">
                    {cards.map((card, index) => (
                        <IndicatorCard key={index} label={card.label} value={card.value} color={card.color}/>
                    ))}
                </div>

                <MedalChart data={data}/>

                <div className="text-sm text-gray-400">
                    <p>Cliquez sur un pays pour voir ses détails</p>
                </div>
            </div>
        </div>
    )
}

export default Home