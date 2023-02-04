import React from "react";
import StatsList from "../../components/lists/statsList.jsx";
import "../../Styling/HomeStatsChartsListContainer.css"

const HomeStatsChartsListContainer = ({title, list}) => {

    return(
        <div id="bottom-stats-list">
            <StatsList list={list} listTitle={title}/>
        </div>
    );
    
}

export default HomeStatsChartsListContainer;