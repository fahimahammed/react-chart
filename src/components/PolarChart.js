import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
        datasets: [
            {
                label: 'Sales of 2021',
                data: [12, 23, 5, 56, 21, 34, 46, 18],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                  ],
                  borderWidth: 2,
            }
        ]
    }
    return (
        <div>
            <h1 className='title'>Polar Chart</h1>
            <PolarArea data ={ data } />
        </div>
    );
};

export default PolarChart;