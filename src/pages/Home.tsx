import {type FC, useEffect, useState} from "react";
import {Pie} from "react-chartjs-2";

const Home: FC = () => {
    // Anti-pattern 3 — Utilisation de `any` — typer pour garder les bénéfices TypeScript.

    // TODO useFetch


    // Anti-pattern 7 — État de chargement dérivé des données au lieu d'un état dédié (loading/error).
    if (!data) {
        return <div>Chargement...</div>
    }


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

                {/* Anti-pattern 8 — Cartes dupliquées — extraire en composant réutilisable (Indicator.tsx). */}
                <div className="mb-2">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2">
                        <h3 className="text-xl font-semibold mb-2">Pays participants</h3>
                        <p className="text-4xl font-bold text-blue-400">
                            {totalParticipatingCountries}
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold mb-2">Éditions des JO</h3>
                        <p className="text-4xl font-bold text-green-400">
                            {totalGamesEditions}
                        </p>
                    </div>
                </div>

//TODO Piechart.tsx

                <div className="text-sm text-gray-400">
                    <p>Cliquez sur un pays pour voir ses détails</p>
                </div>
            </div>
        </div>
    )
}