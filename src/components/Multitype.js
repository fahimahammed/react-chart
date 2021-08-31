import React from 'react';
import { Bar } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);

const Multitype = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'line',
                label: 'Data set 1',
                borderColor: 'black',
                backgroundColor: 'black',
                borderWidth: 2,
                fill: false,
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
            },{
                type: 'bar',
                label: 'Data set 2',
                borderColor: 'green',
                backgroundColor: 'green',
                // borderWidth: 2,
                fill: false,
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
            },
            {
                type: 'bar',
                label: 'Data set 3',
                borderColor: 'red',
                backgroundColor: 'red',
                // borderWidth: 2,
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()]
            }

        ]
    }
    return (
        <div>
            <h1 className='title'>Multitype Chart</h1>
            <Bar data = { data }/>
        </div>
    );
};

export default Multitype;