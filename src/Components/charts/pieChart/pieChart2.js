import React from 'react';
import { Typography } from "@mui/material";
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';


const PieChart2 = ({header, data, colours}) => {

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
      <div>
        <Typography 
          variant="h5"
          lineHeight="2"
          >
          {header}
        </Typography>
        <PieChart width={730} height={250}>
            <Pie data={data} dataKey="value" labelLine={false} label={renderCustomizedLabel} nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colours[index % colours.length]} />
            ))}
            </Pie>
        </PieChart>
      </div>

    );

}

export default PieChart2;