import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const ApplicationVsPlacementChart = () => {
 const data = [
  {
    name: 'Jan',
    applications: 4000,
    placements: 2400,
  },
  {
    name: 'Feb',
    applications: 3000,
    placements: 1398,
  },
  {
    name: 'Mar',
    applications: 2000,
    placements: 980,
  },
  {
    name: 'Apr',
    applications: 2780,
    placements: 2000,
  },
  {
    name: 'May',
    applications: 1890,
    placements: 1480,
  },
  {
    name: 'Jun',
    applications: 2390,
    placements: 2000,
  },
  {
    name: 'Jul',
    applications: 3490,
    placements: 2100,
  },
];

  return (
    <div className='border-1 border-gray-200 w-1/2 space-y-6 p-4 rounded-2xl'>
       <div >
         <h1 className='text-3xl font-bold'>
            Monthly Placement Trends

        </h1>
        <p className='text-xl  opacity-80'>Placements vs Applications over time</p>
       </div>
        <LineChart className='w-full'

        width={600}
          height={400}
        data={data}
        >
  <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
           <Line type="monotone" dataKey="applications" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="placements" stroke="#82ca9d" />
        </LineChart>
    </div>
  )
}
