import React from 'react';
import { Typography, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const LineChart3 = ({header, data, chartWidth, hrChecked, cadenceChecked, distanceChecked}) => {

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
        <XAxis dataKey="Time" />
        <YAxis />
        <Tooltip contentStyle={{color:"#000"}} itemStyle={{color:"#000"}} />
        {/* Heart Rate Line */}
        { hrChecked ? <Line type="monotone"
          dataKey="Heartrate" 
          name="Heartrate"
          stroke="#FC5200" 
          activeDot={{ r: 6 }}
          strokewidth={2} /> : null}
          {/* Cadence Line */}
          { cadenceChecked ? <Line type="monotone"
          dataKey="Cadence" 
          name="Cadence"
          stroke="#FC5200" 
          activeDot={{ r: 6 }}
          strokewidth={2} /> : null }
          {/* Distance Line */}
          { distanceChecked ? <Line type="monotone"
          dataKey="Distance" 
          name="Distance"
          stroke="#FC5200" 
          activeDot={{ r: 6 }}
          strokewidth={2} /> : null }
        </LineChart>
      </Box>

    );

}

export default LineChart3;