import type {FC} from "react";
import {useParams} from "react-router-dom";
import {Line} from "react-chartjs-2";

const Country: FC = () => {
    const { id } = useParams()

    // Anti-pattern 3 — Utilisation de `any` pour l'état ne permettant pas de bénéficier de TypeScript.
    const country: any = olympicsData.find((c: any) => c.id === Number(id))




    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{country.name}</h1>

                {/* Anti-pattern 8 — Cartes dupliquées avec Home — extraire en composant réutilisable (Indicator.tsx). */}
                <div className="mb-2">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-2">
                        <h3 className="text-xl font-semibold mb-2">Participations</h3>
                        <p className="text-4xl font-bold text-blue-400">
                            {totalParticipations}
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-2">
                        <h3 className="text-xl font-semibold mb-2">Total médailles</h3>
                        <p className="text-4xl font-bold text-yellow-400">{totalMedals}</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Total athlètes</h3>
                        <p className="text-4xl font-bold text-green-400">{totalAthletes}</p>
                    </div>
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