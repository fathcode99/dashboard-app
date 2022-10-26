import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", Total: 200 },
    { name: "February", Total: 230 },
    { name: "March", Total: 340 },
    { name: "April", Total: 320 },
    { name: "May", Total: 280 },
    { name: "June", Total: 240 }
];

const Chart = () => {
    return (
        <div className='flex flex-col  flex-[4_4_0%] p-3 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)] rounded-md'>
            <div className='text-lg font-semibold'>
                Last 6 month (Total Revenue)
            </div>
            <div className='h-full mt-4'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart