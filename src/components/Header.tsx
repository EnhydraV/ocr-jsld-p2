import IndicatorCard from "./IndicatorCard.tsx";
import type {IndicatorCardType} from "../types/IndicatorCardType.ts";


export const Header = ({title, presentation, cards}: {
    title: string,
    presentation: string,
    cards: IndicatorCardType[]
}) => {
    let presentationDiv = <></>;
    if (presentation) {
        presentationDiv = <div className="mb-8">
            <p className="text-lg">
                {presentation}
            </p>
        </div>
    }

    const colsMap: Record<number, string> = {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-4',
    };
    const gridCols = colsMap[Math.min(4, cards.length)] ?? 'grid-cols-4';


    return <header>
        <h1 className="text-4xl font-bold mb-8">
            {title}
        </h1>
        {presentationDiv}
        <div className={`grid gap-4 mb-4 ${gridCols} grid-cols-1`}>
            {cards.map((card, index) => (
                <IndicatorCard key={index} label={card.label} value={card.value} color={card.color}/>
            ))}
        </div>
    </header>
}