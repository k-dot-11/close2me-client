export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Line Chart",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: [27, 52, 43, 73, 98, 35, 89],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        
    ],
};
