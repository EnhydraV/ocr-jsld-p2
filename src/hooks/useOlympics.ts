import {useFetch} from './useFetch'
import olympicsData from '../../data/olympics.json'
import type {OlympicsData} from "../types/OlympicsData.ts";

// Introduit une pause de 2s pour simuler un chargement réseau
const dataPromise: Promise<OlympicsData> = new Promise((resolve) => {
    setTimeout(() => resolve(olympicsData), 2000);
});


export function useOlympics(): OlympicsData {
    return useFetch(dataPromise)
}
