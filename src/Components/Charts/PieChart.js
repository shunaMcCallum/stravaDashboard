import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = ({ chartArray, chartOptions }) => {

    return (
        <>
            <Chart className="chart1"
                    chartType="PieChart"
                    data={chartArray}
                    options={chartOptions}
                    width={"100vh"}
                    height={"50vh"}
            />
        </>
    );

}

export default PieChart;