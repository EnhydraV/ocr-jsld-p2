import { useFetch } from './useFetch'
import olympicsData from '../../data/olympics.json'
import type {OlympicsData} from "../types/OlympicsData.ts";

const dataPromise = Promise.resolve(olympicsData)

export function useOlympics():OlympicsData {
    return useFetch(dataPromise)
}
