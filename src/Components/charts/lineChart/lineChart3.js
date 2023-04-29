import React from 'react';
import { Typography, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


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
        { hrChecked ? <Line connectNulls
          type="linear"
          dataKey="Heartrate" 
          name="Heartrate"
          dot={false}

          stroke="#ABDAFC" 
          strokewidth={2} /> : null}
          {/* Cadence Line */}
          { cadenceChecked ? <Line connectNulls
          type="linear"
          dataKey="Cadence" 
          name="Cadence"
          dot={false}
          stroke="#D1345B" 
          strokewidth={2} /> : null }
          {/* Distance Line */}
          { distanceChecked ? <Line connectNulls 
          type="linear"
          dataKey="Distance" 
          name="Distance"
          dot={false}

          stroke="#8AEA92" 
          strokewidth={2} /> : null }
        </LineChart>
      </Box>

    );

}

export default LineChart3;