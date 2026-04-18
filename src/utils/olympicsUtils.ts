// Anti-pattern 6 — Logique métier complexe directement dans le composant
import type {OlympicCountry} from "../types/OlympicCountry.ts";
import type {OlympicsData} from "../types/OlympicsData.ts";

export const calculateTotalParticipatingCountries=(data:OlympicsData)=>{
    return data.length;
}

export const getCountryNames=(data:OlympicsData)=>{
    return data.map((d) => d.name);
}

export const calculateTotalMedals=(data:OlympicsData)=>{
    return data.map((d) => calculateCountryMedals(d))
}

export const calculateTotalGamesEditions=(data:OlympicsData)=>{
    const editions:number[]=[];
    data.forEach((c)=>{
        c.participations.forEach((p)=>{
           if(!editions.includes(p.year)){
               editions.push(p.year)
           } 
        });
    });

    return editions.length;
}

export const calculateCountryMedals= (country: OlympicCountry) => {
    return country.participations.reduce(
        (sum, p) => sum + p.medalsCount,
        0,
    )
}

export const calculateCountryAthletes = (country:OlympicCountry)=>{
    return country.participations.reduce(
    (sum, p) => sum + p.athleteCount,
    0,
)}

export const calculateCountryParticipations=(country:OlympicCountry)=>{
    return country.participations.length;
}