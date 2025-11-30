import React from 'react'
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export const JobsOverTimeChart = ({data,COLORS}) => {
  return (
          <ResponsiveContainer width="100%" height={300}>
                 <LineChart data={data}>
                   <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                   <XAxis dataKey="month" stroke="#9ca3af" />
                   <YAxis stroke="#9ca3af" />
                   <Tooltip content={<CustomTooltip />} />
                   <Line
                     type="monotone"
                     dataKey="totalJobs"
                     stroke={COLORS.primary}
                     strokeWidth={3}
                     dot={{ fill: COLORS.primary, r: 5 }}
                     activeDot={{ r: 7 }}
                   />
                 </LineChart>
               </ResponsiveContainer>
  )
}
