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

    return <header>
        <h1 className="text-4xl font-bold mb-8">
            {title}
        </h1>
        {presentationDiv}
        <div className="mb-2">
            {cards.map((card, index) => (
                <IndicatorCard key={index} label={card.label} value={card.value} color={card.color}/>
            ))}
        </div>
    </header>
}