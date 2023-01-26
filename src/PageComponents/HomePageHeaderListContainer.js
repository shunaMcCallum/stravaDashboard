import React from "react";
import StatsList from "../Components/Lists/StatsList";
import '../Styling/HomePageHeaderListContainer.css';

const HomePageHeaderListContainer = ({title, list}) => {

    const placeholderList = ["Stat1: Stat", "Stat2: Stat", "Stat3: Stat"]
    const placeholderHeader = "Stat Header"

    return(
        <div id="list-container">
            <StatsList list={list} listTitle={title}/>
            <StatsList list={placeholderList} listTitle={placeholderHeader}/>
            <StatsList list={placeholderList} listTitle={placeholderHeader}/>
            <StatsList list={placeholderList} listTitle={placeholderHeader}/>
        </div>
    );
    
}

export default HomePageHeaderListContainer;