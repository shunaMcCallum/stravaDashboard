import React from 'react';
import { Chart } from 'react-google-charts';
import '../../Styling/PieChart.css'

const PieChart = ({ chartArray}) => {

    const chartOptions = {
        backgroundColor: "rgb(39, 34, 52)",
        titleTextStyle: {
            color: "white"
        },
        legend: {position: "none"},
        width: "25rem",
        height: "20rem",
        chartArea: {
            width: "90%", 
            height: "90%",
        },
    }

    return (
            <Chart className="chart"
                    chartType="PieChart"
                    data={chartArray}
                    options={chartOptions}
            />
    );

}

export default PieChart;