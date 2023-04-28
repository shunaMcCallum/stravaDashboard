import React, { PureComponent } from 'react';
import { Typography, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const LineChart2 = ({header, data, chartWidth, xDataKey, lineDataKey, lineName}) => {

    return (
      <Box>
        <Typography 
          variant="h5"
          lineHeight="2"
          display="flex"
          justifyContent="flex-start"
          marginLeft="3.75rem"
          >
          {header}
        </Typography>
        <LineChart 
          width={chartWidth} 
          height={250} 
          margin={{
            top: 6
          }}
          data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        <Tooltip contentStyle={{color:"#000"}} itemStyle={{color:"#000"}} />
        <Line type="monotone"
          dataKey={lineDataKey} 
          name={lineName}
          stroke="#FC5200" 
          activeDot={{ r: 6 }}
          strokewidth={2} />
        </LineChart>
      </Box>

    );

}

export default LineChart2;