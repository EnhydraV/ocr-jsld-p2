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
        {label: "Participations", value: calculateCountryParticipations(country)},
        {label: "Médailles", value: calculateCountryMedals(country)},
        {label: "Athlètes", value: calculateCountryAthletes(country)},
    ]

    return (
        <div className="min-h-screen main p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-2">
                    <Link to="/">🡄 Retour au tableau de bord</Link>
                </div>
                <Header title={country.name} presentation="" cards={cards}/>

                <div className="p-8 rounded-lg shadow-xl">
                    <CountryLineChart country={country}/>
                </div>

                <div className="text-center text-2xl mt-2">
                    <p>Dates</p>
                </div>
            </div>
        </div>
    )
}

export default Country