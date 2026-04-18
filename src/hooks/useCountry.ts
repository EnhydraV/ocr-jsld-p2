import type {OlympicCountry} from "../types/OlympicCountry.ts";
import {useOlympics} from "./useOlympics.ts";

export function useCountry(id: string | undefined): OlympicCountry | undefined {
    const data = useOlympics();
    return data.find((c: OlympicCountry) => c.id === Number(id))
}
