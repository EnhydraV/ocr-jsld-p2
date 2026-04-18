import type {OlympicParticipation} from "./OlympicParticipation.ts";

type RGB = [number, number, number];

export type OlympicCountry = {
    id: number,
    color: RGB,
    name: string,
    participations: OlympicParticipation[],
};