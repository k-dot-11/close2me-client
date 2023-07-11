import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
        title: {
            display: true,
            text: "Visa Insights™",
        },
    },
};

const labels = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
];

export const data = {
    labels,
    datasets: [
        {
            label: "Predicted",
            data: [31, 20, 15, 19, 40, 52, 64, 66, 70, 66, 45, 44, 50],
            borderColor: "#fdbb0a",
            backgroundColor: "rgba(26, 31, 113, 0)",
        },
        {
            fill: true,
            label: "Actual",
            data: [14, 22, 19, 19, 36, 56, 70, 72, 74, 80],
            borderColor: "rgba(26, 31, 113, 0)",
            backgroundColor: "rgba(26, 31, 113, 0.8)",
        },
    ],
};

export default function LineChart() {
    return <Line options={options} data={data} />;
}
