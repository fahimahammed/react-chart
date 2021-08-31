import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales of 2020',
                data: [ 34, 13, 41, 6, 44, 15, 33],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        scales: {
            ticks: { beginAtZero: true }
        }
    };

    return (
        <div>
            <h1 className='title'>Radar Chart</h1>
            <Radar data = { data } options = { options } />
        </div>
    );
};

export default RadarChart;