import { BarChart, Bar, Tooltip, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

const COLORS = ["#f59e0b", "#10b981", "#ef4444"];

const ApplicationStatusChart = ({ data }) => {
  console.log(data);
  return(
    <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="status" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count">
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
  )
}

export default ApplicationStatusChart;
