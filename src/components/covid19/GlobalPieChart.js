import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

function GlobalPieChart({data}) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div>
      <PieChart width={800} height={400}>
        <Pie
          data={data} 
          cx={300} 
          cy={200} 
          labelLine={false}
          outerRadius={80} 
          fill="#8884d8"
          dataKey={dataKey}
        >
          {
            data.map((entry, index) => <Cell key={dataKey} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    </div>
  )
}

export default GlobalPieChart
