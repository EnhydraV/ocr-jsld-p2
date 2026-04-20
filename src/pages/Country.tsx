import {Link, useParams} from "react-router-dom";
import type {IndicatorCardType} from "../types/IndicatorCardType.ts";
import {
    calculateCountryAthletes,
    calculateCountryMedals,
    calculateCountryParticipations
} from "../utils/olympicsUtils.ts";
import {useCountry} from "../hooks/useCountry.ts";
import type {OlympicCountry} from "../types/OlympicCountry.ts";
import {CountryLineChart} from "../components/CountryLineChart.tsx";
import Error404 from "./Error404.tsx";
import {Header} from "../components/Header.tsx";

const Country = () => {
    const {id} = useParams()
    const country: OlympicCountry | undefined = useCountry(id);
    // Les données du pays sont indisponibles ou le pays n'existe pas, on retourne une erreur 404
    if (country === undefined) {
        return <Error404 />;
    }

    // Définition des cartes
    const cards: IndicatorCardType[] = [
        {label: "Participations", value: calculateCountryParticipations(country), color: "text-blue-400"},
        {label: "Médailles", value: calculateCountryMedals(country), color: "text-yellow-400"},
        {label: "Athlètes", value: calculateCountryAthletes(country), color: "text-green-400"},
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-2">
                    <Link to="/">🡄 Retour au tableau de bord</Link>
                </div>
                <Header title={country.name} presentation="" cards={cards}/>

                <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
                    <CountryLineChart country={country}/>
                </div>

                <div className="text-sm text-gray-400">
                    <p>Données des 5 dernières éditions des Jeux Olympiques</p>
                </div>
            </div>
        </div>
    )
}

export default Country