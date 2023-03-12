import React, { PureComponent } from 'react';
import { Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LineChart2 = ({header, data}) => {

    return (
      <div>
        <Typography 
          variant="h5"
          lineHeight="2"
          >
          {header}
        </Typography>
        <LineChart 
          width={20000} 
          height={290} 
          margin={{
            top: 6
          }}
          data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip contentStyle={{color:"#000"}} itemStyle={{color:"#000"}} />
        <Line type="monotone"
          dataKey="Time" 
          name="Time"
          stroke="#FC5200" 
          activeDot={{ r: 6 }}
          strokewidth={2} />
        </LineChart>
      </div>

    );

}

export default LineChart2;