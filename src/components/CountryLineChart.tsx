import {Line} from "react-chartjs-2";
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
} from 'chart.js'
import type {OlympicCountry} from "../types/OlympicCountry.ts";

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

export const CountryLineChart = ({country}: { country: OlympicCountry }) => {
    const evolutionData = {
        labels: country.participations.map((p) => p.year.toString()),
        datasets: [
            {
                label: 'Nombre de médailles',
                data: country.participations.map((p) => p.medalsCount),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.3,
            },
        ],
    }

    const evolutionOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'white',
                },
            },
        },
        scales: {
            y: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
            x: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
    }

    return (<div style={{height: '400px'}}>
        <Line data={evolutionData} options={evolutionOptions}/>
    </div>)
}