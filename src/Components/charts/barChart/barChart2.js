import React from 'react';
import { Box } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';


const BarChart2 = ({data, chartWidth}) => {

    return (
      <Box>
        <BarChart 
          width={chartWidth} 
          height={250} 
          data={data}>
        <CartesianGrid stroke="#ffffff" strokeDasharray="5 5" />
        <XAxis dataKey="x" />
        <YAxis />
        <Bar dataKey="y" fill="#ffffff" />
        </BarChart>
      </Box>

    );

}

export default BarChart2;