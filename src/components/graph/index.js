import React, { Component } from 'react'
import './style.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';


const data = [
    { name: 'Semana 1', Recebimentos: 800 },
    { name: 'Semana 2', Recebimentos: 1398},
    { name: 'Semana 3', Recebimentos: 550 },
    { name: 'Semana 4', Recebimentos: 2500},
];
export default class Graph extends Component {
    render() {
        return (
            <div>
                <LineChart
                    width={380}
                    height={275}
                    data={data}
                    margin={{top: 45, right: 5}}
                >
                    <Line
                        type='monotone'
                        dataKey='Recebimentos'
                        stroke='#ff6600'
                        activeDot={{ r: 8 }}
                    />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <YAxis />
                    <XAxis dataKey='name' />
                    <Legend />
                </LineChart>
            </div>
        )
    }
}
