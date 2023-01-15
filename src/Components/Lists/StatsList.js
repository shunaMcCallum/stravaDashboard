import React from "react";

const StatsList = ({list}) => {

    const listItems = list.map((item) => {
        return(
            <p>{item}</p>
        )
    })

    return(
        <div>
            {listItems}
        </div>
    );
    
}

export default StatsList;