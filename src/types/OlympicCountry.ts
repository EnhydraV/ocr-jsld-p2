import type {OlympicParticipation} from "./OlympicParticipation.ts";

export type OlympicCountry={
    id: number,
    name: string,
    participations: OlympicParticipation[],
};