import React from 'react';
import { Typography, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const LineChart3 = ({header, data, chartWidth, pwrChecked, hrChecked, cadenceChecked, distanceChecked}) => {

    const pwrs = data.map(object => {
        return object.Power;
    });

    const max = Math.max(...pwrs);
    console.log(max)

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
        <YAxis type="number" domain={[0, max]} />
        {/* <YAxis /> */}
        <Tooltip contentStyle={{color:"#000"}} itemStyle={{color:"#000"}} />
        {/* Power Line */}
        { pwrChecked ? <Line connectNulls
          type="linear"
          dataKey="Power" 
          name="Power"
          dot={false}
          stroke="#EDFF7A" 
          strokewidth={2} /> : null}
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