import {useParams} from "react-router-dom";
import IndicatorCard from "../components/IndicatorCard.tsx";
import type {IndicatorCardType} from "../types/IndicatorCardType.ts";
import {
    calculateCountryAthletes,
    calculateCountryMedals,
    calculateCountryParticipations
} from "../utils/olympicsUtils.ts";
import {useCountry} from "../hooks/useCountry.ts";
import type {OlympicCountry} from "../types/OlympicCountry.ts";
import {LineChart} from "../components/LineChart.tsx";

const Country = () => {
    const {id} = useParams()
    const country: OlympicCountry | undefined = useCountry(id);
    if (country === undefined) {
        // TODO 404 redirect
        return;
    }

    const cards: IndicatorCardType[] = [
        {label: "Participations", value: calculateCountryParticipations(country), color: "text-blue-400"},
        {label: "Médailles", value: calculateCountryMedals(country), color: "text-yellow-400"},
        {label: "Athlètes", value: calculateCountryAthletes(country), color: "text-green-400"},
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
                    <LineChart country={country}/>
                </div>

                <div className="text-sm text-gray-400">
                    <p>Données des 5 dernières éditions des Jeux Olympiques</p>
                </div>
            </div>
        </div>
    )
}

export default Country