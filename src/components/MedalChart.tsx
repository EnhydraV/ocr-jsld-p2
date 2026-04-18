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
import {useNavigate} from "react-router-dom";
import type {OlympicsData} from "../types/OlympicsData.ts";
import {calculateCountryMedals} from "../utils/olympicsUtils.ts";

const MedalChart = ({data}: { data: OlympicsData }) => {
    const navigate = useNavigate();
    const labels: string[] = [];
    const backgroundColors: string[] = [];
    const borderColors: string[] = [];
    const values: number[] = [];
    const ids: number[] = [];
    data.forEach((c) => {
        labels.push(c.name);
        const rgb = c.color.join(',');
        values.push(calculateCountryMedals(c));
        backgroundColors.push(`rgba(${rgb}, 0.6)`);
        borderColors.push(`rgb(${rgb})`);
        ids.push(c.id);
    })

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Total des médailles',
                data: values,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: 'white',
                },
            },
        },
        onClick: (_e: ChartEvent, elements: ActiveElement[]) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                navigate(`/country/${ids[index]}`);
            }
        }
    }


    return (<div className="bg-gray-800 p-8 rounded-lg shadow-xl">
        <div style={{height: '400px'}}>
            <Pie data={chartData} options={chartOptions}/>
        </div>
    </div>)
}

export default MedalChart;