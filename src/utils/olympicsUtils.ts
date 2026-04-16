// Anti-pattern 6 — Logique métier complexe directement dans le composant
const calculateTotalMedals = (country: any) => {
    return country.participations.reduce(
        (sum: any, p: any) => sum + p.medalsCount,
        0,
    )
}

const totalParticipatingCountries = data ? data.length : 0
const totalGamesEditions = 5

const totalMedals = country.participations.reduce(
    (sum: any, p: any) => sum + p.medalsCount,
    0,
)
const totalAthletes = country.participations.reduce(
    (sum: any, p: any) => sum + p.athleteCount,
    0,
)
const totalParticipations = country.participations.length