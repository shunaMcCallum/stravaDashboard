import React from 'react';
import PieChart from './PieChart.js';

const PieChartsContainer = ({ chartArray, chartOptions, title }) => {

    return (
        <div>
            <p>{title}</p>
            <PieChart chartArray={chartArray} chartOptions={chartOptions} />
        </div>
    );

}

export default PieChartsContainer;