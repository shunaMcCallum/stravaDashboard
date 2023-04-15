import React, { PureComponent } from 'react';
import { Typography, Box } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const BarChart2 = ({data, chartWidth}) => {

    return (
      <Box>
        <BarChart 
          width={chartWidth} 
          height={290} 
          // margin={{
          //   top: 6
          // }}
          data={data}>
        <CartesianGrid stroke="#ffffff" strokeDasharray="5 5" />
        <XAxis dataKey="x" />
        <YAxis />
        {/* <Tooltip contentStyle={{color:"#000"}} itemStyle={{color:"#000"}} /> */}
        <Bar dataKey="y" fill="#ffffff" />
        </BarChart>
      </Box>

    );

}

export default BarChart2;