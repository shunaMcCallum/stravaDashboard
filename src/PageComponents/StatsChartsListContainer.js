import React from "react";
import StatsList from "../Components/Lists/StatsList";
import '../Styling/HomePageHeaderListContainer.css';

const StatsChartsListContainer = ({title, list}) => {

    return(
        <div id="list-container">
            <StatsList list={list} listTitle={title}/>
        </div>
    );
    
}

export default StatsChartsListContainer;