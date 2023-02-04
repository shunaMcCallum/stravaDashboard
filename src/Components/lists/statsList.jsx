import React from "react";
import '../../Styling/StatsList.css';

const StatsList = ({list, listTitle}) => {

    const listItems = list.map((item) => {
        return(
            <p>{item}</p>
        )
    })

    return(
        <div id="stats-list-container">
            <h3>{listTitle}</h3>
            {listItems}
        </div>
    );
    
}

export default StatsList;