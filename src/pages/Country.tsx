
import {useParams} from "react-router-dom";
import IndicatorCard from "../components/IndicatorCard.tsx";
import type {OlympicsData} from "../types/OlympicsData.ts";
import type {IndicatorCardType} from "../types/IndicatorCardType.ts";
import {
    calculateCountryAthletes,
    calculateCountryMedals,
    calculateCountryParticipations
} from "../utils/olympicsUtils.ts";

const Country= () => {
    const { id } = useParams()


    // Anti-pattern 3 — Utilisation de `any` pour l'état ne permettant pas de bénéficier de TypeScript.
    const country: OlympicsData = olympicsData.find((c: any) => c.id === Number(id))

    const cards:IndicatorCardType=[
        {label:"Participations",value:calculateCountryParticipations(country),"text-blue-400"},
        {label:"Médailles",value:calculateCountryMedals(country),"text-yellow-400"},
        {label:"Athlètes",value:calculateCountryAthletes(country),"text-green-400"},
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{country.name}</h1>
                <div className="mb-2">
                    {cards.map((card, index) => (
                        <IndicatorCard key={index} label={card.label} value={card.value} color={card.color}/>
                    ))}
                </div>

                <div className="bg-gray-800 p-8 rounded-lg shadow-xl">

                </div>

                <div className="text-sm text-gray-400">
                    <p>Données des 5 dernières éditions des Jeux Olympiques</p>
                </div>
            </div>
        </div>
    )
}

export default Country