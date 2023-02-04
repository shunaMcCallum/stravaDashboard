import React from "react";
import StatsList from "../../components/lists/statsList.jsx";
import '../../Styling/HomePageHeaderListContainer.css';

const HomeStatsChartsListContainer = ({title, list}) => {

    return(
        <div id="list-container">
            <StatsList list={list} listTitle={title}/>
        </div>
    );
    
}

export default HomeStatsChartsListContainer;