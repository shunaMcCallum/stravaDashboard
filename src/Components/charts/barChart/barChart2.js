import React, { PureComponent } from 'react';
import { Typography, Box } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const BarChart2 = ({header, data, chartWidth}) => {

    return (
      <Box>
        <Typography 
          variant="h5"
          lineHeight="2"
          >
          {header}
        </Typography>
        <BarChart 
          width={chartWidth} 
          height={290} 
          margin={{
            top: 6
          }}
          data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip contentStyle={{color:"#000"}} itemStyle={{color:"#000"}} />
        </BarChart>
        <Bar dataKey="y" name="Time" fill="#8884d8" />
      </Box>

    );

}

export default BarChart2;