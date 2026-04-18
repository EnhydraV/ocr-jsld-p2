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


// Anti-pattern 10 — Préparation des données du graphique dans le composant — extraire dans une fonction ou un hook pour séparer UI et logique. https://react.dev/learn/thinking-in-react
const evolutionData = {
    labels: country.participations.map((p: any) => p.year.toString()),
    datasets: [
        {
            label: 'Nombre de médailles',
            data: country.participations.map((p: any) => p.medalsCount),
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

<div style={{ height: '400px' }}>
    <Line data={evolutionData} options={evolutionOptions} />
</div>