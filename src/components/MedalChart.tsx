import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    type ChartEvent,
    type ActiveElement,
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
)

import {Pie} from "react-chartjs-2";
import {Link, useNavigate} from "react-router-dom";
import type {OlympicsData} from "../types/OlympicsData.ts";
import {calculateCountryMedals} from "../utils/olympicsUtils.ts";

const MedalChart = ({data}: { data: OlympicsData }) => {
    const navigate = useNavigate();
    const labels: string[] = [];
    const backgroundColors: string[] = [];
    const borderColors: string[] = [];
    const values: number[] = [];
    const ids: number[] = [];

    // Les données du graphique (labels, valeurs, couleurs) sont construites dynamiquement à partir des données
    data.forEach((c) => {
        labels.push(c.name);
        const rgb = c.color.join(',');
        values.push(calculateCountryMedals(c));
        backgroundColors.push(`rgb(${rgb})`);
        borderColors.push(`rgb(${rgb})`);
        ids.push(c.id);
    });

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: '🏅',
                data: values,
                backgroundColor: backgroundColors,
                borderColors: borderColors,
            },
        ],
    }

    const tooltipBg = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-olympic-teal-500')
        .trim();

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: 'black',
                },
            },
            tooltip: {
                backgroundColor: tooltipBg,
                displayColors: false,
            }
        },

        // Ouverture du détail d'un pays au clic sur le graphique
        onClick: (_e: ChartEvent, elements: ActiveElement[]) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                navigate(`/country/${ids[index]}`);
            }
        }
    }


    return (
        <>
            <div id="medal-chart-description" className="sr-only">
                <p>
                    Graphique en camembert affichant les différents pays ainsi que leur nombre de médailles totales
                    respectives :
                </p>
                <ul>
                    {data.map((country) => {
                        // On doit lister les données ici et mettre un lien, sinon certains utilisateurs ne pourraient
                        // pas les consulter ni aller à la page de détails
                        return <li key={country.id}>{country.name} : {calculateCountryMedals(country)} médailles. <Link
                            to={`country/${country.id}`}>Plus de données sur ce pays</Link></li>
                    })}
                </ul>
            </div>

            <div className="p-8">
                <div style={{height: '400px'}}>
                    <Pie data={chartData} options={chartOptions}
                         aria-describedby="medal-chart-description"/>
                </div>
            </div>
        </>
    )
}

export default MedalChart;