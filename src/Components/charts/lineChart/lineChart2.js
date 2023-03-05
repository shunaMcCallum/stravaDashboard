import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LineChart2 = ({data}) => {

    return (
        <LineChart width={20000} height={290} data={data}>
        <Line type="monotone" dataKey="y" stroke="#fafafa" />
        <CartesianGrid stroke="#fafafa" />
        <XAxis dataKey="x" />
        <YAxis />
      </LineChart>
    );

}

export default LineChart2;