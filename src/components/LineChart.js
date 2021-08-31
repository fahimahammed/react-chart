import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Seles for 2020 (M)',
                data: [ 3, 2, 2, 1, 5],
                fill: true,
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBorderColor: ['rgba(255, 206, 86, 0.2)']
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 3, 2, 1 ],
                fill: true,
                borderColor: ['rgba(24, 206, 83, 0.2)'],
                backgroundColor: ['rgba(24, 206, 83, 0.2)'],
                pointBackgroundColor: ['rgba(24, 206, 83, 0.2)'],
                pointBorderColor: ['rgba(24, 206, 83, 0.2)']
            },
        ],
    };

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        // min: 0,
                        // max: 6,
                        // stepSize: 1
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        
            <div>
                <h1 className='title'>Line Chart</h1>
                <Line data={data} options = {options} />
            </div>
        
    );
};

export default LineChart;